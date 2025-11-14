"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiSparklingLine,
  RiHeartLine,
  RiLightbulbLine,
  RiRocketLine,
  RiShieldCheckLine,
  RiGlobalLine,
  RiTeamLine,
  RiCodeLine,
  RiMicLine,
  RiFlashlightLine,
  RiArrowRightLine,
  RiCheckDoubleLine,
} from "react-icons/ri"

export default function AboutPage() {
  const values = [
    {
      icon: RiLightbulbLine,
      title: "Innovation First",
      description: "We leverage the most advanced AI video generation technology to create stunning property tours. Always testing, always improving.",
    },
    {
      icon: RiShieldCheckLine,
      title: "Privacy & Security",
      description: "Your data is yours. End-to-end encryption, GDPR compliance, and SOC 2 certification are standard, not optional.",
    },
    {
      icon: RiHeartLine,
      title: "User-Centric",
      description: "Built by real estate professionals, for real estate professionals. Every feature is designed with agent needs in mind, from independent agents to large brokerages.",
    },
    {
      icon: RiGlobalLine,
      title: "Accessible to All",
      description: "Professional property tour videos should be accessible to every agent. That's why we offer a free tier and transparent pricing.",
    },
  ]

  const technology = [
    {
      icon: RiSparklingLine,
      name: "AI Video Generation",
      description: "Advanced AI models transform property photos into cinematic video tours with smooth transitions and professional effects.",
      stats: "4K Quality",
    },
    {
      icon: RiMicLine,
      name: "Professional Voiceover",
      description: "AI-powered voiceover synthesis creates natural-sounding tour narration with multiple voice styles and tones.",
      stats: "6+ Voices",
    },
    {
      icon: RiFlashlightLine,
      name: "Automated Scripting",
      description: "Intelligent AI analyzes property details to generate compelling tour scripts that highlight key features and selling points.",
      stats: "Smart AI",
    },
    {
      icon: RiCodeLine,
      name: "Replicate Platform",
      description: "Enterprise-grade infrastructure for running AI models at scale with guaranteed uptime and performance.",
      stats: "99.9% Uptime",
    },
  ]

  const milestones = [
    {
      year: "2024",
      title: "PropVideo Founded",
      description: "Started with a mission to make professional property tour videos accessible to every real estate agent.",
    },
    {
      year: "2024",
      title: "Beta Launch",
      description: "Launched private beta with 100 real estate agents testing AI video generation and tour scripting.",
    },
    {
      year: "2024",
      title: "Tour Styles Added",
      description: "Integrated multiple tour styles (Luxury, Modern, Cozy, Dramatic) with professional voiceover options.",
    },
    {
      year: "2025",
      title: "Public Launch",
      description: "Opened to the public with free tier, serving real estate professionals worldwide.",
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
          href: "/auth/signup",
        }}
      />

      {/* Hero Section */}
      <section className="py-20 border-b-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-400 border-4 border-black mb-8">
              <RiSparklingLine className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-wider">About Us</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold uppercase mb-6 leading-tight">
              CREATING STUNNING PROPERTY TOURS WITH AI
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We're building the future of real estate marketing. Professional property tour videos powered by advanced AI technology.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
                OUR MISSION
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Property marketing has the power to transform how real estate professionals showcase listings and connect with buyers. But for too long, professional property tour videos have been expensive and time-consuming to create.
              </p>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We built PropVideo to change that. By leveraging advanced AI video generation technology, we're making cinematic property tour videos accessible to every real estate professional—from independent agents to large brokerages.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our platform uses <span className="font-bold">AI-powered video generation</span>, <span className="font-bold">professional voiceover synthesis</span>, and <span className="font-bold">automated tour scripting</span>. Create stunning property tours in minutes, not days.
              </p>
            </div>
            <div className="bg-black p-8 border-4 border-black shadow-lg">
              <div className="space-y-8">
                <div>
                  <div className="text-6xl font-bold text-sky-400 mb-2">10K+</div>
                  <div className="text-sm font-bold text-white uppercase">Videos Created</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-sky-400 mb-2">6+</div>
                  <div className="text-sm font-bold text-white uppercase">Tour Styles</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-sky-400 mb-2">4K</div>
                  <div className="text-sm font-bold text-white uppercase">Video Quality</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-sky-400 mb-2">99.9%</div>
                  <div className="text-sm font-bold text-white uppercase">Platform Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-sky-400 border-y-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              OUR VALUES
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-white border-4 border-black brutalist-shadow"
                >
                  <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-sky-400" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              POWERED BY THE BEST
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We use only the most proven and popular AI models in production
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technology.map((tech, index) => {
              const Icon = tech.icon
              const bgColors = ["bg-white", "bg-black"]
              const textColors = ["text-black", "text-sky-400"]
              const descColors = ["text-gray-700", "text-white"]
              const colorIndex = index % 2

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
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-2xl font-bold uppercase ${textColors[colorIndex]}`}>
                      {tech.name}
                    </h3>
                    <span className={`text-sm font-bold uppercase ${colorIndex === 1 ? "text-sky-400" : "text-black"} px-3 py-1 ${colorIndex === 1 ? "bg-black" : "bg-sky-400"} border-2 border-black`}>
                      {tech.stats}
                    </span>
                  </div>
                  <p className={`${descColors[colorIndex]} leading-relaxed`}>{tech.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-black border-y-8 border-sky-400">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 text-sky-400">
              OUR JOURNEY
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              From idea to platform serving thousands of users
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-sky-400 border-4 border-sky-400 flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">{milestone.year}</span>
                </div>
                <div className="flex-1 p-6 bg-white border-4 border-white shadow-lg">
                  <h3 className="text-xl font-bold uppercase mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 text-center">
              WHY CHOOSE PROPVIDEO?
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-white border-4 border-black brutalist-shadow">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-black" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">
                      PROVEN AT SCALE
                    </h3>
                    <p className="text-gray-700">
                      Our AI video generation technology creates over 10,000 property tour videos. This isn't experimental technology—it's proven and trusted by real estate professionals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black text-white border-4 border-black shadow-lg">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-sky-400" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2 text-sky-400">
                      TRANSPARENT PRICING
                    </h3>
                    <p className="text-white">
                      No hidden fees, no surprises. We show you exactly what you're paying for based on real API costs. Start free, scale as you grow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-4 border-black brutalist-shadow">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-black" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">
                      ENTERPRISE SECURITY
                    </h3>
                    <p className="text-gray-700">
                      End-to-end encryption, GDPR compliance, SOC 2 Type II certification. Your property data and videos are protected with enterprise-grade security standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-sky-400 border-4 border-black brutalist-shadow">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-black" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2">
                      BEST-IN-CLASS SUPPORT
                    </h3>
                    <p className="text-gray-900">
                      Real humans ready to help. From email support on free plans to dedicated account managers for enterprise customers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black text-white border-4 border-black shadow-lg">
                <div className="flex items-start gap-4">
                  <RiCheckDoubleLine className="w-8 h-8 flex-shrink-0 text-sky-400" />
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2 text-sky-400">
                      CONSTANTLY IMPROVING
                    </h3>
                    <p className="text-white">
                      We're always adding new models, features, and capabilities. Beta access to cutting-edge models for Pro and Enterprise users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 border-y-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              BUILT BY CREATORS, FOR CREATORS
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our team combines expertise in AI, audio engineering, and product design to build the best voice synthesis platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border-4 border-black brutalist-shadow text-center">
              <div className="w-24 h-24 bg-black border-4 border-black mx-auto mb-4 flex items-center justify-center">
                <RiCodeLine className="w-12 h-12 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">AI ENGINEERS</h3>
              <p className="text-gray-700">
                Deep expertise in machine learning, voice synthesis, and model optimization.
              </p>
            </div>

            <div className="p-6 bg-sky-400 border-4 border-black brutalist-shadow text-center">
              <div className="w-24 h-24 bg-black border-4 border-black mx-auto mb-4 flex items-center justify-center">
                <RiMicLine className="w-12 h-12 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-2">AUDIO EXPERTS</h3>
              <p className="text-gray-900">
                Professional audio engineers ensuring studio-quality output.
              </p>
            </div>

            <div className="p-6 bg-black text-white border-4 border-black shadow-lg text-center">
              <div className="w-24 h-24 bg-sky-400 border-4 border-black mx-auto mb-4 flex items-center justify-center">
                <RiTeamLine className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-xl font-bold uppercase mb-2 text-sky-400">PRODUCT TEAM</h3>
              <p className="text-white">
                Focused on building intuitive tools that creators actually want to use.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6">
              JOIN THOUSANDS OF CREATORS
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Start creating professional voice content today. Free tier available—no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-3 bg-sky-400 text-black border-4 border-black font-bold uppercase brutalist-shadow"
                asChild
              >
                <a href="/auth/signup">
                  <RiArrowRightLine className="w-5 h-5" />
                  Get Started Free
                </a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-white text-black border-4 border-black font-bold uppercase brutalist-shadow"
                asChild
              >
                <a href="/demo">Try Demo</a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="gap-3 bg-black text-sky-400 border-4 border-black font-bold uppercase brutalist-shadow"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
