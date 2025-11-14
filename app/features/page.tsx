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
      subtitle: "Photos to Cinematic Tours",
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
      title: "Professional Voiceovers",
      subtitle: "AI-Generated Tour Scripts",
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
      title: "Multiple Tour Styles",
      subtitle: "Match Your Property&apos;s Vibe",
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
      subtitle: "Intelligent Tour Flow",
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
      subtitle: "AI-Powered Tour Narration",
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
      title: "Agent Branding Overlay",
      subtitle: "Add Your Professional Touch",
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
      title: "Multi-Format Export",
      subtitle: "Optimize for Every Platform",
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
      subtitle: "Professional Background Tracks",
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
      subtitle: "Track Engagement & Performance",
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
      subtitle: "Minutes, Not Hours",
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
      subtitle: "Organize Your Listings",
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
      title: "CRM/MLS Integration",
      subtitle: "Built for Real Estate Teams",
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
          { label: "About", href: "/about" },
        ]}
        ctaButton={{
          text: "Create Tour",
          href: "/dashboard",
        }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-100 rounded-2xl mb-8 border-2 border-sky-200">
              <RiSparklingLine className="w-6 h-6 text-sky-600" />
              <span className="text-sm font-bold tracking-wider text-sky-900">Features</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
              Everything You Need for Professional Property Tours
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              AI-powered video generation, professional voiceovers, and smart tools built for real estate agents and brokerages who want to sell faster.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="gap-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold"
              >
                <RiArrowRightLine className="w-5 h-5" />
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-3 border-2 border-slate-300 hover:border-sky-500 rounded-xl font-bold"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Model Stats */}
      <section className="py-16 bg-slate-900">
        <Container maxWidth="xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-sky-400 mb-2">3-5min</div>
              <div className="text-sm font-bold text-white tracking-wider">Generation Time</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-sky-400 mb-2">6+</div>
              <div className="text-sm font-bold text-white tracking-wider">Tour Styles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-sky-400 mb-2">100+</div>
              <div className="text-sm font-bold text-white tracking-wider">Music Tracks</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-sky-400 mb-2">4K</div>
              <div className="text-sm font-bold text-white tracking-wider">Video Quality</div>
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
              const bgColors = ["bg-white", "bg-slate-900", "bg-sky-100"]
              const textColors = ["text-slate-900", "text-white", "text-slate-900"]
              const subtitleColors = ["text-slate-600", "text-slate-300", "text-slate-700"]
              const colorIndex = index % 3

              return (
                <div
                  key={index}
                  className={`p-8 ${bgColors[colorIndex]} rounded-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 ${
                    colorIndex === 1 ? "border-2 border-slate-700" : "border-2 border-sky-200"
                  }`}
                >
                  <div className={`w-16 h-16 ${colorIndex === 1 ? "bg-gradient-to-br from-sky-500 to-sky-600" : "bg-gradient-to-br from-slate-800 to-slate-900"} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${colorIndex === 1 ? "text-white" : "text-sky-400"}`} />
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 ${textColors[colorIndex]}`}>
                    {feature.title}
                  </h3>

                  <div className={`text-xs font-bold tracking-wider mb-4 ${subtitleColors[colorIndex]}`}>
                    {feature.subtitle}
                  </div>

                  <p className={`mb-6 ${colorIndex === 1 ? "text-slate-300" : "text-slate-600"}`}>
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <RiCheckDoubleLine className={`w-5 h-5 flex-shrink-0 ${colorIndex === 1 ? "text-sky-400" : "text-emerald-500"}`} />
                        <span className={`text-sm ${colorIndex === 1 ? "text-slate-300" : "text-slate-600"}`}>
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
      <section className="py-24 bg-gradient-to-br from-sky-500 to-sky-600">
        <Container maxWidth="xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 border-2 border-white/30">
              <RiVideoChatLine className="w-6 h-6 text-white" />
              <span className="text-sm font-bold tracking-wider text-white">Tour Styles</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-white">
              Choose the Perfect Style for Your Property
            </h2>
            <p className="text-xl text-sky-100 mb-8">
              From luxury estates to cozy homes, we have tour styles for every property type. Each style includes unique transitions, pacing, color grading, and music recommendations.
            </p>
            <Button
              size="xl"
              className="gap-3 bg-white text-sky-600 hover:bg-sky-50 rounded-2xl font-bold shadow-xl"
            >
              <RiArrowRightLine className="w-5 h-5" />
              Explore Tour Styles
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Join thousands of real estate agents using PropVideo to create stunning property tours. Start your free trial today—no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-3 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-bold"
              >
                <RiArrowRightLine className="w-5 h-5" />
                Start Free Trial
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-white text-slate-900 hover:bg-slate-100 border-2 border-white rounded-2xl font-bold"
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
