"use client"

import { RiFolder3Line, RiVideoLine, RiImageLine } from "react-icons/ri"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/typography"

export function DashboardQuickActions() {
  return (
    <Card variant="outlined" className="p-6">
      <Heading variant="h3" className="uppercase mb-4">
        Quick Actions
      </Heading>
      <div className="grid gap-3 md:grid-cols-3">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => alert("Property video generation coming soon!")}
        >
          <RiVideoLine className="mr-2 h-4 w-4" />
          Generate Video
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => alert("Photo upload feature coming soon!")}
        >
          <RiImageLine className="mr-2 h-4 w-4" />
          Upload Photos
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <a href="/dashboard/projects">
            <RiFolder3Line className="mr-2 h-4 w-4" />
            Create Project
          </a>
        </Button>
      </div>
    </Card>
  )
}
