import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}

export async function requireAuth() {
  const user = await getCurrentUser() as { id: string } | undefined
  if (!user || !user.id) {
    throw new Error("Unauthorized")
  }
  return user.id as string
}
