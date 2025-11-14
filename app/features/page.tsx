"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiSparklingLine,
  RiMicLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiGlobalLine,
  RiHeadphoneLine,
  RiSettings4Line,
  RiVoiceprintLine,
  RiTimerLine,
  RiDatabase2Line,
  RiCodeLine,
  RiTeamLine,
  RiArrowRightLine,
  RiCheckDoubleLine,
  RiVideoChatLine,
} from "react-icons/ri"

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: RiSparklingLine,
      title: "AI Video Generation",
      subtitle: "PHOTOS TO CINEMATIC TOURS",
      description: "Transform static property photos into stunning video tours with AI. Upload photos, select your style, and get a professional tour video in minutes. Powered by cutting-edge video generation models.",
      features: [
        "Automatic photo-to-video conversion",
        "Cinematic transitions and effects",
        "Smart photo sequencing for flow",
        "Professional camera movements",
        "HD and 4K output quality",
        "Generate videos in 3-5 minutes"
      ]
    },
    {
      icon: RiMicLine,
      title: "Professional Voiceover",
      subtitle: "AI-GENERATED TOUR SCRIPTS",
      description: "AI automatically writes and narrates professional tour scripts based on your property details. Choose from multiple voice styles and tones. Natural-sounding voiceovers that engage buyers.",
      features: [
        "Auto-generated tour scripts",
        "Multiple voice styles (professional, friendly, luxury)",
        "Natural emotional delivery",
        "Multilingual voiceover support",
        "Custom script editing available",
        "Highlight key property features"
      ]
    },
    {
      icon: RiSettings4Line,
      title: "Tour Styles",
      subtitle: "MATCH YOUR PROPERTY'S VIBE",
      description: "Choose from professionally designed tour styles: luxury, modern, cozy, dramatic, energetic, or elegant. Each style has unique transitions, pacing, color grading, and music recommendations.",
      features: [
        "6+ professional tour styles",
        "Luxury estate presentations",
        "Modern minimalist aesthetics",
        "Cozy residential warmth",
        "Dramatic architectural showcases",
        "Custom style creation (Enterprise)"
      ]
    },
    {
      icon: RiTimerLine,
      title: "Smart Photo Sequencing",
      subtitle: "INTELLIGENT TOUR FLOW",
      description: "AI automatically arranges your photos in the optimal order for maximum impact. Starts with curb appeal, flows through living spaces, and ends with selling points. Manual reordering available.",
      features: [
        "Automatic optimal photo ordering",
        "Room-type smart detection",
        "Highlight feature recognition",
        "Drag-and-drop manual reordering",
        "Photo quality enhancement",
        "Duplicate detection"
      ]
    },
    {
      icon: RiCodeLine,
      title: "Automated Scripting",
      subtitle: "AI-POWERED TOUR NARRATION",
      description: "AI analyzes property details and photos to write compelling tour scripts. Highlights best features, uses persuasive language, and maintains professional tone. Fully editable before generation.",
      features: [
        "Property detail analysis",
        "Feature highlight prioritization",
        "Persuasive copywriting",
        "Tone customization",
        "Script templates by property type",
        "Character count optimization"
      ]
    },
    {
      icon: RiVoiceprintLine,
      title: "Branding Overlay",
      subtitle: "ADD YOUR PROFESSIONAL TOUCH",
      description: "Add your agent logo, name, contact info, and brokerage branding to every video. Customize position, size, and timing. Build your personal brand with every tour you create.",
      features: [
        "Agent logo overlay",
        "Contact info display",
        "Brokerage branding",
        "Custom positioning & sizing",
        "Intro/outro branding cards",
        "QR code for listings"
      ]
    },
    {
      icon: RiGlobalLine,
      title: "Multiple Export Formats",
      subtitle: "OPTIMIZE FOR EVERY PLATFORM",
      description: "Export videos in formats optimized for Instagram (9:16), TikTok (9:16), YouTube (16:9), Facebook (1:1), and Zillow (16:9). One-click export for all platforms from a single tour.",
      features: [
        "16:9 for YouTube & Zillow",
        "9:16 for Instagram & TikTok",
        "1:1 for Facebook & Instagram",
        "4:5 for Instagram Feed",
        "Custom aspect ratio support",
        "Platform-specific optimizations"
      ]
    },
    {
      icon: RiHeadphoneLine,
      title: "Music Library",
      subtitle: "PROFESSIONAL BACKGROUND TRACKS",
      description: "Choose from 100+ royalty-free background music tracks. Organized by mood and style. Perfect for setting the tone of your tour. Volume control and fade options included.",
      features: [
        "100+ royalty-free tracks",
        "Organized by mood & style",
        "Orchestral, ambient, modern genres",
        "Auto-sync with video duration",
        "Volume & fade controls",
        "Custom music upload (Enterprise)"
      ]
    },
    {
      icon: RiDatabase2Line,
      title: "Video Analytics",
      subtitle: "TRACK ENGAGEMENT & PERFORMANCE",
      description: "Comprehensive analytics showing views, shares, downloads, and engagement metrics for every video. Track which properties get the most attention. Export reports for clients.",
      features: [
        "Real-time view tracking",
        "Share & download metrics",
        "Engagement heatmaps",
        "Platform-specific analytics",
        "Export analytics reports",
        "Property performance comparison"
      ]
    },
    {
      icon: RiFlashlightLine,
      title: "Fast Generation",
      subtitle: "MINUTES, NOT HOURS",
      description: "Generate professional property tour videos in 3-5 minutes. No video editing skills required. Fast processing powered by state-of-the-art AI models. Batch generation for multiple properties.",
      features: [
        "3-5 minute generation time",
        "No editing skills needed",
        "Batch generation support",
        "Priority processing queue",
        "Instant preview before final render",
        "Re-generate with new settings anytime"
      ]
    },
    {
      icon: RiShieldCheckLine,
      title: "Property Management",
      subtitle: "ORGANIZE YOUR LISTINGS",
      description: "Centralized library for all your properties and videos. Search, filter, and organize by status, type, or date. Track which properties have videos. Import from MLS listings.",
      features: [
        "Unlimited property storage",
        "Photo library per property",
        "Video version history",
        "Search & filter by criteria",
        "MLS import (coming soon)",
        "Bulk property operations"
      ]
    },
    {
      icon: RiTeamLine,
      title: "Team Collaboration",
      subtitle: "BUILT FOR REAL ESTATE TEAMS",
      description: "Share properties and videos across your team or brokerage. Role-based access control. Team analytics and centralized billing. Perfect for teams and brokerages of any size.",
      features: [
        "Unlimited team members (Team/Brokerage)",
        "Shared property library",
        "Role-based permissions",
        "Team analytics dashboard",
        "Centralized billing & usage",
        "Brokerage branding templates"
      ]
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header
        logoText="PropVideo"
        navLinks={[
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Demo", href: "/demo" },
        ]}
        ctaButton={{
          text: "Get Started",
          href: "/signup",
        }}
      />

      {/* Hero Section */}
      <section className="py-20 border-b-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-400 border-4 border-black mb-8">
              <RiSparklingLine className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-wider">Features</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold uppercase mb-6 leading-tight">
              EVERYTHING YOU NEED FOR PROFESSIONAL PROPERTY TOURS
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              AI-powered video generation, professional voiceovers, and smart tools built for real estate agents and brokerages who want to sell faster.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="gap-3 bg-black text-sky-400 border-4 border-black font-bold uppercase"
              >
                <RiArrowRightLine className="w-5 h-5" />
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-3 border-4 border-black font-bold uppercase"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Model Stats */}
      <section className="py-16 bg-black border-b-8 border-sky-400">
        <Container maxWidth="xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-sky-400 mb-2 uppercase">3-5min</div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Generation Time</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-sky-400 mb-2 uppercase">6+</div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Tour Styles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-sky-400 mb-2 uppercase">100+</div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Music Tracks</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-sky-400 mb-2 uppercase">4K</div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Video Quality</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Features Grid */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon
              const bgColors = ["bg-white", "bg-black", "bg-sky-400"]
              const textColors = ["text-black", "text-sky-400", "text-black"]
              const subtitleColors = ["text-gray-600", "text-white", "text-gray-900"]
              const colorIndex = index % 3

              return (
                <div
                  key={index}
                  className={`p-8 ${bgColors[colorIndex]} border-4 border-black ${
                    colorIndex === 1 ? "shadow-lg" : "brutalist-shadow"
                  }`}
                >
                  <div className={`w-16 h-16 ${colorIndex === 1 ? "bg-sky-400" : "bg-black"} flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${colorIndex === 1 ? "text-black" : "text-sky-400"}`} />
                  </div>

                  <h3 className={`text-2xl font-bold uppercase mb-2 ${textColors[colorIndex]}`}>
                    {feature.title}
                  </h3>

                  <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${subtitleColors[colorIndex]}`}>
                    {feature.subtitle}
                  </div>

                  <p className={`mb-6 ${colorIndex === 1 ? "text-white" : "text-gray-700"}`}>
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <RiCheckDoubleLine className={`w-5 h-5 flex-shrink-0 ${colorIndex === 1 ? "text-sky-400" : "text-black"}`} />
                        <span className={`text-sm ${colorIndex === 1 ? "text-white" : "text-gray-700"}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Tour Styles CTA */}
      <section className="py-24 bg-sky-400 border-y-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black border-4 border-black mb-8">
              <RiVideoChatLine className="w-6 h-6 text-sky-400" />
              <span className="text-sm font-bold uppercase tracking-wider text-sky-400">Tour Styles</span>
            </div>
            <h2 className="text-5xl font-bold uppercase mb-6 text-black">
              CHOOSE THE PERFECT STYLE FOR YOUR PROPERTY
            </h2>
            <p className="text-xl text-gray-900 mb-8">
              From luxury estates to cozy homes, we have tour styles for every property type. Each style includes unique transitions, pacing, color grading, and music recommendations.
            </p>
            <Button
              size="xl"
              className="gap-3 bg-black text-sky-400 border-4 border-black font-bold uppercase brutalist-shadow"
            >
              <RiArrowRightLine className="w-5 h-5" />
              Explore Tour Styles
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black border-t-8 border-sky-400">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6 text-sky-400">
              READY TO GET STARTED?
            </h2>
            <p className="text-xl text-white mb-12">
              Join thousands of real estate agents using PropVideo to create stunning property tours. Start your free trial today—no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-3 bg-sky-400 text-black border-4 border-sky-400 font-bold uppercase"
              >
                <RiArrowRightLine className="w-5 h-5" />
                Start Free Trial
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-white text-black border-4 border-white font-bold uppercase"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
