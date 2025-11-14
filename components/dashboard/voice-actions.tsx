"use client"

import { RiAddLine } from "react-icons/ri"
import { Button } from "@/components/ui/button"

type VoiceActionsProps = {
  onVoiceCloned?: () => void
}

export function VoiceActions({ onVoiceCloned }: VoiceActionsProps) {
  return (
    <Button
      variant="primary"
      onClick={() => alert("Property video narration features coming soon!")}
    >
      <RiAddLine className="mr-2 h-4 w-4" />
      Add Narration
    </Button>
  )
}
