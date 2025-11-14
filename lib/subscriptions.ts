import { prisma } from '@/lib/prisma'

export type PlanType = 'starter' | 'pro' | 'enterprise'

export interface PlanLimits {
  monthlyCharacterLimit: number
  monthlyVoiceClones: number
  allowCustomVoices: boolean
  allowCommercialUse: boolean
  price: number // Monthly price in USD
  trialDays: number // Free trial period in days
}

// Plan configurations
export const PLANS: Record<PlanType, PlanLimits> = {
  starter: {
    monthlyCharacterLimit: 5000,
    monthlyVoiceClones: 0,
    allowCustomVoices: false,
    allowCommercialUse: false,
    price: 0,
    trialDays: 0, // No trial for free plan
  },
  pro: {
    monthlyCharacterLimit: 100000,
    monthlyVoiceClones: 5,
    allowCustomVoices: true,
    allowCommercialUse: true,
    price: 29,
    trialDays: 14, // 14-day free trial
  },
  enterprise: {
    monthlyCharacterLimit: 1000000,
    monthlyVoiceClones: 999,
    allowCustomVoices: true,
    allowCommercialUse: true,
    price: 299,
    trialDays: 30, // 30-day free trial
  },
}

/**
 * Get user's active subscription
 */
export async function getUserSubscription(userId: string) {
  const subscription = await prisma.subscription.findFirst({
    where: {
      userId,
      status: {
        in: ['active', 'trialing'],
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return subscription
}

/**
 * Create a new subscription for user
 */
export async function createSubscription(
  userId: string,
  plan: PlanType,
  startTrial: boolean = false
) {
  const planLimits = PLANS[plan]

  const subscription = await prisma.subscription.create({
    data: {
      userId,
      plan,
      status: startTrial ? 'trialing' : 'active',
      monthlyCharacterLimit: planLimits.monthlyCharacterLimit,
      monthlyVoiceClones: planLimits.monthlyVoiceClones,
      allowCustomVoices: planLimits.allowCustomVoices,
      allowCommercialUse: planLimits.allowCommercialUse,
    },
  })

  return subscription
}

/**
 * Check if user can perform an action based on their subscription
 */
export async function checkSubscriptionLimit(
  userId: string,
  limitType: 'characters' | 'voiceClones' | 'customVoices' | 'commercialUse'
): Promise<{ allowed: boolean; reason?: string }> {
  const subscription = await getUserSubscription(userId)

  if (!subscription) {
    // No subscription = free starter plan
    return {
      allowed: limitType === 'characters',
      reason: limitType !== 'characters' ? 'Upgrade to Pro to access this feature' : undefined,
    }
  }

  // Check if trial has expired
  if (subscription.status === 'trialing' && subscription.stripeCurrentPeriodEnd) {
    const now = new Date()
    if (now > subscription.stripeCurrentPeriodEnd) {
      await prisma.subscription.update({
        where: { id: subscription.id },
        data: {
          status: 'expired',
        },
      })
      return {
        allowed: false,
        reason: 'Your trial period has expired. Please subscribe to continue.',
      }
    }
  }

  // Check specific limits
  switch (limitType) {
    case 'customVoices':
      return {
        allowed: subscription.allowCustomVoices,
        reason: !subscription.allowCustomVoices ? 'Upgrade to Pro to use custom voices' : undefined,
      }
    case 'commercialUse':
      return {
        allowed: subscription.allowCommercialUse,
        reason: !subscription.allowCommercialUse ? 'Upgrade to Pro for commercial use' : undefined,
      }
    case 'characters':
    case 'voiceClones':
      // These require usage tracking, implemented separately
      return { allowed: true }
    default:
      return { allowed: true }
  }
}

/**
 * Get user's current plan or return starter (free) plan
 */
export async function getUserPlan(userId: string): Promise<PlanType> {
  const subscription = await getUserSubscription(userId)
  return (subscription?.plan as PlanType) || 'starter'
}

/**
 * Check if user is on trial
 */
export async function isUserOnTrial(userId: string): Promise<boolean> {
  const subscription = await getUserSubscription(userId)
  if (!subscription || subscription.status !== 'trialing') return false

  // Check if trial is still valid
  if (subscription.stripeCurrentPeriodEnd) {
    const now = new Date()
    return now <= subscription.stripeCurrentPeriodEnd
  }

  return false
}

/**
 * Get days remaining in trial
 */
export async function getTrialDaysRemaining(userId: string): Promise<number> {
  const subscription = await getUserSubscription(userId)
  if (!subscription || subscription.status !== 'trialing' || !subscription.stripeCurrentPeriodEnd) {
    return 0
  }

  const now = new Date()
  const diff = subscription.stripeCurrentPeriodEnd.getTime() - now.getTime()
  const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24))

  return Math.max(0, daysRemaining)
}

/**
 * Cancel subscription
 */
export async function cancelSubscription(subscriptionId: string) {
  const subscription = await prisma.subscription.update({
    where: { id: subscriptionId },
    data: {
      status: 'cancelled',
      cancelledAt: new Date(),
    },
  })

  return subscription
}

/**
 * Upgrade user subscription
 */
export async function upgradeSubscription(
  userId: string,
  newPlan: PlanType,
  startTrial: boolean = false
) {
  // Cancel existing subscription
  const existing = await getUserSubscription(userId)
  if (existing) {
    await cancelSubscription(existing.id)
  }

  // Create new subscription
  return createSubscription(userId, newPlan, startTrial)
}
