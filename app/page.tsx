"use client"

import * as React from "react"
import Image from "next/image"
import { Button, Heading, Text } from "@/components/ui"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import { NewsletterPopup } from "@/components/marketing/NewsletterPopup"
import {
  RiSparklingLine,
  RiHomeSmileLine,
  RiVideoLine,
  RiFlashlightLine,
  RiShieldCheckLine,
  RiGlobalLine,
  RiArrowRightLine,
  RiPlayCircleLine,
  RiCheckLine,
  RiCloseLine,
  RiStarFill,
  RiLineChartLine,
  RiCameraLine,
  RiBuildingLine,
  RiMapPinLine,
} from "react-icons/ri"

export default function Home() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [currentProperty, setCurrentProperty] = React.useState(0)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  // Property examples carousel
  const propertyExamples = [
    { title: "Modern Bedroom", type: "Luxury Condo", image: "/images/examples/modern-bedroom-1762954221814.png" },
    { title: "Infinity Pool", type: "Estate Home", image: "/images/examples/pool-backyard-1762954241002.png" },
    { title: "Penthouse View", type: "Urban Living", image: "/images/examples/penthouse-view-1762954258462.png" },
    { title: "Chef Kitchen", type: "Family Home", image: "/images/examples/chef-kitchen-1762954274778.png" },
    { title: "Home Theater", type: "Entertainment", image: "/images/examples/home-theater-1762954307039.png" },
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProperty((prev) => (prev + 1) % propertyExamples.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Features data
  const features = [
    {
      icon: RiSparklingLine,
      title: "AI Video Generation",
      description: "Turn property photos into cinematic video tours automatically. Advanced AI creates smooth transitions and professional pacing.",
    },
    {
      icon: RiCameraLine,
      title: "Professional Voiceover",
      description: "AI-generated professional narration tailored to your property. Multiple voice styles from luxury to friendly neighborhood tours.",
    },
    {
      icon: RiFlashlightLine,
      title: "60-Second Creation",
      description: "Upload photos, generate stunning video tours in under 60 seconds. No video editing skills required.",
    },
    {
      icon: RiShieldCheckLine,
      title: "Agent Branding",
      description: "Add your logo, contact info, and brokerage details. Watermark protection and custom branding on every video.",
    },
    {
      icon: RiGlobalLine,
      title: "Multi-Platform Export",
      description: "Export for Instagram Stories, TikTok, YouTube, Zillow, and more. Perfect aspect ratios for every platform.",
    },
    {
      icon: RiBuildingLine,
      title: "Property Analytics",
      description: "Track views, engagement, and shares. See which properties get the most attention from potential buyers.",
    },
  ]

  // Pricing data
  const pricingPlans = [
    {
      name: "Agent",
      price: "$49",
      period: "/month",
      description: "Perfect for individual real estate agents",
      features: [
        { text: "5 property videos/month", included: true },
        { text: "HD video quality (1080p)", included: true },
        { text: "AI professional voiceover", included: true },
        { text: "Agent branding & logo", included: true },
        { text: "All social media formats", included: true },
        { text: "Basic analytics", included: true },
        { text: "Priority processing", included: false },
        { text: "4K video quality", included: false },
      ],
      ctaText: "Start Free Trial",
      popular: false,
    },
    {
      name: "Team",
      price: "$149",
      period: "/month",
      description: "For real estate teams and small brokerages",
      features: [
        { text: "20 property videos/month", included: true },
        { text: "4K video quality", included: true },
        { text: "Premium AI voiceovers", included: true },
        { text: "Team branding options", included: true },
        { text: "All social media formats", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority processing", included: true },
        { text: "Multiple user accounts", included: true },
        { text: "Custom music library", included: true },
      ],
      ctaText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Brokerage",
      price: "$499",
      period: "/month",
      description: "For large brokerages and enterprises",
      features: [
        { text: "100 property videos/month", included: true },
        { text: "8K video quality", included: true },
        { text: "Custom voice cloning", included: true },
        { text: "White-label branding", included: true },
        { text: "All formats + API access", included: true },
        { text: "Enterprise analytics", included: true },
        { text: "Instant processing", included: true },
        { text: "Unlimited team members", included: true },
        { text: "Custom integrations", included: true },
        { text: "Dedicated support", included: true },
      ],
      ctaText: "Contact Sales",
      popular: false,
    },
  ]

  // Tour styles
  const tourStyles = [
    { name: "Luxury", description: "Elegant, sophisticated, high-end properties", gradient: "from-amber-400 to-yellow-600" },
    { name: "Modern", description: "Clean, contemporary, tech-forward homes", gradient: "from-sky-400 to-sky-600" },
    { name: "Cozy", description: "Warm, inviting, family-friendly properties", gradient: "from-orange-400 to-red-500" },
    { name: "Dramatic", description: "Bold, striking, statement properties", gradient: "from-sky-500 to-red-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <Header
        logoText="PropVideo"
        navLinks={[
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "About", href: "/about" },
        ]}
        ctaButton={{
          text: "Get Started",
          href: "/dashboard",
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-24 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center space-y-12">
            {/* Badge */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-sky-200 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <RiSparklingLine className="w-5 h-5 text-sky-600" />
              <Text variant="body-sm" className="font-semibold text-slate-700">AI-Powered Property Tour Videos</Text>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className={`block transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="text-slate-900">Create Stunning</span>
                </span>
                <span className={`block transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="bg-gradient-to-r from-sky-600 to-sky-600 bg-clip-text text-transparent">Property Videos</span>
                </span>
                <span className={`block transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="text-slate-900">In Minutes</span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Text variant="lead" className="text-slate-600 max-w-3xl mx-auto text-xl md:text-2xl">
                Transform property photos into cinematic video tours with AI-generated voiceovers. Perfect for real estate agents, brokerages, and property managers.
              </Text>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap justify-center gap-6 pt-4 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                size="xl"
                className="gap-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700 shadow-xl hover:shadow-2xl transition-all font-semibold text-lg px-12 py-8 rounded-2xl"
                onClick={() => window.location.href = '/dashboard'}
              >
                <RiArrowRightLine className="w-6 h-6" />
                Start Free Trial
              </Button>
              <Button
                size="xl"
                className="gap-3 bg-white text-slate-700 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all font-semibold text-lg px-12 py-8 rounded-2xl border border-slate-200"
                onClick={() => window.location.href = '/demo'}
              >
                <RiPlayCircleLine className="w-6 h-6" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className={`flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-slate-600 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-2">
                <RiCheckLine className="w-5 h-5 text-emerald-500" />
                <span>1,500+ Real Estate Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <RiCheckLine className="w-5 h-5 text-emerald-500" />
                <span>10,000+ Property Videos Created</span>
              </div>
              <div className="flex items-center gap-2">
                <RiCheckLine className="w-5 h-5 text-emerald-500" />
                <span>60-Second Generation Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Examples Carousel */}
      <section className="relative bg-white py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              See What's Possible
            </h2>
            <p className="text-slate-600 text-lg">Real property video tours created with PropVideo</p>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {propertyExamples.map((example, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentProperty ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={example.image}
                  alt={example.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-12">
                  <div className="text-center text-white space-y-2">
                    <div className="inline-block px-4 py-1 bg-sky-500/90 backdrop-blur-sm rounded-full text-sm font-semibold mb-2">
                      {example.type}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold">{example.title}</h3>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {propertyExamples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProperty(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentProperty ? 'w-8 bg-sky-500' : 'w-2 bg-white/60'
                  }`}
                  aria-label={`View property ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-100 rounded-full mb-6">
              <RiSparklingLine className="w-5 h-5 text-sky-600" />
              <Text variant="body-sm" className="text-sky-700 font-semibold">Features</Text>
            </div>
            <Heading variant="h2" className="mb-4 text-4xl md:text-5xl text-slate-900">Everything You Need</Heading>
            <Text variant="body-lg" className="text-slate-600 max-w-3xl mx-auto">
              Professional property video tours made simple with AI-powered automation
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tour Styles Section */}
      <section id="styles" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              Choose Your Tour Style
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Select from multiple cinematic styles to match your property's personality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {tourStyles.map((style, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10 text-white">
                  <h3 className="text-2xl font-bold mb-2">{style.name}</h3>
                  <p className="text-white/90 text-sm">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your real estate business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-sky-500 bg-white shadow-2xl scale-105'
                    : 'border-slate-200 bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-gradient-to-r from-sky-500 to-sky-600 text-white text-sm font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && <span className="text-slate-600 text-lg mb-2">{plan.period}</span>}
                  </div>
                  <p className="text-slate-600 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <RiCheckLine className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <RiCloseLine className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 font-semibold rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700 shadow-lg hover:shadow-xl'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                  onClick={() => window.location.href = plan.ctaText === 'Contact Sales' ? '/contact' : '/dashboard'}
                >
                  {plan.ctaText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-sky-600 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Amazing Property Videos?
          </h2>
          <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto">
            Join 1,500+ real estate professionals using PropVideo to showcase properties and close deals faster.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="xl"
              className="gap-3 bg-white text-sky-600 hover:bg-sky-50 shadow-2xl font-bold text-lg px-12 py-8 rounded-2xl"
              onClick={() => window.location.href = '/dashboard'}
            >
              <RiArrowRightLine className="w-6 h-6" />
              Start Free Trial
            </Button>
            <Button
              size="xl"
              className="gap-3 bg-sky-700/50 backdrop-blur text-white hover:bg-sky-700/70 border-2 border-white/30 font-semibold text-lg px-12 py-8 rounded-2xl"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <NewsletterPopup />
    </div>
  )
}
