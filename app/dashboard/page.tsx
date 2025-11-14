import { Suspense } from "react"
import Link from "next/link"
import {
  Home,
  Video,
  Image,
  CreditCard,
  ArrowRight,
  Plus,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Text, Heading } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type DashboardStats = {
  totalProperties: number
  totalVideos: number
  totalPhotos: number
  creditsRemaining: number
}

type RecentVideo = {
  id: string
  propertyAddress: string
  tourStyle: string
  createdAt: string
  status: string
}

async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    // Fetch all counts in parallel
    const [propertiesRes] = await Promise.all([
      fetch(`${baseUrl}/api/properties?limit=1`, { cache: 'no-store' }),
    ])

    const [propertiesData] = await Promise.all([
      propertiesRes.ok ? propertiesRes.json() : { pagination: { total: 0 } },
    ])

    // TODO: Count videos and photos from properties
    return {
      totalProperties: propertiesData.pagination?.total || 0,
      totalVideos: 0, // TODO: Count from PropertyVideo
      totalPhotos: 0, // TODO: Count from PropertyPhoto
      creditsRemaining: 1250, // TODO: Get from user subscription
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return {
      totalProperties: 0,
      totalVideos: 0,
      totalPhotos: 0,
      creditsRemaining: 0,
    }
  }
}

async function getRecentVideos(): Promise<RecentVideo[]> {
  try {
    // TODO: Implement /api/videos endpoint
    // For now return empty array
    return []
  } catch (error) {
    console.error('Error fetching recent videos:', error)
    return []
  }
}

export default async function DashboardPage() {
  const stats = await getDashboardStats()
  const recentVideos = await getRecentVideos()

  const statCards = [
    {
      title: "Properties",
      value: stats.totalProperties,
      icon: Home,
      color: "bg-sky-500",
      link: "/dashboard/properties",
    },
    {
      title: "Tour Videos",
      value: stats.totalVideos,
      icon: Video,
      color: "bg-emerald-500",
      link: "/dashboard/videos",
    },
    {
      title: "Photos",
      value: stats.totalPhotos,
      icon: Image,
      color: "bg-slate-500",
      link: "#",
    },
    {
      title: "Credits",
      value: stats.creditsRemaining,
      icon: CreditCard,
      color: "bg-sky-500",
      link: "#",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between">
        <Heading variant="h1" className="text-slate-900">
          Dashboard
        </Heading>
        <Link href="/dashboard/properties/new">
          <Button className="bg-sky-500 hover:bg-sky-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Property
          </Button>
        </Link>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => {
            const Icon = stat.icon
            return (
              <Link key={stat.title} href={stat.link}>
                <Card className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="text-xs font-medium text-slate-600">
                        {stat.title}
                      </Text>
                      <Heading as="h2" className="text-3xl font-bold text-slate-900 mt-2">
                        {stat.value}
                      </Heading>
                    </div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Recent Videos */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 p-6 bg-white border border-slate-200 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <Heading variant="h3" className="text-slate-900">
                Recent Tour Videos
              </Heading>
              <Link href="/dashboard/videos">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-3">
              {recentVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center justify-between border border-slate-200 rounded-lg p-4 hover:bg-sky-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
                      <Video className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <Text className="font-medium text-slate-900">
                        {video.propertyAddress}
                      </Text>
                      <Text className="text-xs text-slate-600">
                        {video.tourStyle}
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant={video.status === "completed" ? "success" : "warning"}
                      className="text-xs"
                    >
                      {video.status}
                    </Badge>
                    <Text className="text-xs text-slate-500">
                      {new Date(video.createdAt).toLocaleTimeString()}
                    </Text>
                  </div>
                </div>
              ))}

              {recentVideos.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 p-8">
                  <Video className="h-12 w-12 text-slate-400" />
                  <Text className="mt-2 text-slate-600">
                    No recent videos
                  </Text>
                  <Link href="/dashboard/properties/new" className="mt-4">
                    <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Create First Property
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </Card>

          {/* Credits Card */}
          <Card className="col-span-3 p-6 bg-white border border-slate-200 rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <Heading variant="h3" className="text-slate-900">
                Credits
              </Heading>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white" size="sm">
                Buy More
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 shadow-lg">
                  <div className="text-center">
                    <Heading as="h2" className="text-4xl font-bold text-white">
                      {stats.creditsRemaining}
                    </Heading>
                    <Text className="text-xs text-white/80">
                      Remaining
                    </Text>
                  </div>
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-200 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <Text className="text-slate-600">
                    30-sec Video
                  </Text>
                  <Text className="font-medium text-slate-900">
                    10 credits
                  </Text>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Text className="text-slate-600">
                    60-sec Video
                  </Text>
                  <Text className="font-medium text-slate-900">
                    20 credits
                  </Text>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Text className="text-slate-600">
                    90-sec Video
                  </Text>
                  <Text className="font-medium text-slate-900">
                    30 credits
                  </Text>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                View Pricing
              </Button>
            </div>
          </Card>
        </div>
      </Suspense>
    </div>
  )
}
