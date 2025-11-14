"use client"

import { RiUploadLine, RiVideoLine } from "react-icons/ri"
import { Button } from "@/components/ui/button"

export function AudioActions() {
  const handleUploadPhotos = () => {
    alert("Photo upload functionality coming soon!")
  }

  const handleGenerateVideo = () => {
    alert("Video generation coming soon!")
  }

  return (
    <div className="flex items-center space-x-2">
      <Button variant="outline" onClick={handleUploadPhotos}>
        <RiUploadLine className="mr-2 h-4 w-4" />
        Upload Photos
      </Button>
      <Button variant="primary" onClick={handleGenerateVideo}>
        <RiVideoLine className="mr-2 h-4 w-4" />
        Generate Video
      </Button>
    </div>
  )
}
