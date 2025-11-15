import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/get-current-user'
import { getUserSubscription, getUserPlan, isUserOnTrial, getTrialDaysRemaining } from '@/lib/subscriptions'

export async function GET(_request: NextRequest) {
  try {
    const userId = await requireAuth()

    const [subscription, plan, onTrial, trialDaysRemaining] = await Promise.all([
      getUserSubscription(userId),
      getUserPlan(userId),
      isUserOnTrial(userId),
      getTrialDaysRemaining(userId),
    ])

    if (!subscription) {
      // User has no subscription, return starter plan defaults
      return NextResponse.json({
        success: true,
        subscription: {
          plan: 'starter',
          status: 'active',
          monthlyCharacterLimit: 5000,
          monthlyVoiceClones: 0,
          allowCustomVoices: false,
          allowCommercialUse: false,
        },
      })
    }

    return NextResponse.json({
      success: true,
      subscription: {
        id: subscription.id,
        plan: subscription.plan,
        status: subscription.status,
        stripeCurrentPeriodEnd: subscription.stripeCurrentPeriodEnd,
        monthlyCharacterLimit: subscription.monthlyCharacterLimit,
        monthlyVoiceClones: subscription.monthlyVoiceClones,
        allowCustomVoices: subscription.allowCustomVoices,
        allowCommercialUse: subscription.allowCommercialUse,
        createdAt: subscription.createdAt,
      },
    })

  } catch (error: unknown) {
    console.error('Get subscription error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to get subscription',
        details: (error as Error).message || 'Unknown error',
      },
      { status: 500 }
    )
  }
}
