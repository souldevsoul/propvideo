"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiSparklingLine,
  RiCheckLine,
  RiCloseLine,
  RiArrowRightLine,
  RiQuestionLine,
  RiShieldCheckLine,
  RiFlashlightLine,
  RiMicLine,
  RiGlobalLine,
} from "react-icons/ri"

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out PropVideo and individual agents",
      popular: false,
      features: [
        { text: "3 video tours/month", included: true },
        { text: "60-second max duration", included: true },
        { text: "1080p quality", included: true },
        { text: "3 tour styles", included: true },
        { text: "PropVideo watermark", included: true },
        { text: "Basic music library", included: true },
        { text: "Email support", included: true },
        { text: "Agent branding", included: false },
        { text: "Video analytics", included: false },
        { text: "API access", included: false },
      ],
      cta: "Start Free",
      ctaHref: "/signup",
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      description: "For real estate agents who need professional property tour videos",
      popular: true,
      features: [
        { text: "30 video tours/month", included: true },
        { text: "120-second max duration", included: true },
        { text: "4K quality", included: true },
        { text: "All tour styles (6+ styles)", included: true },
        { text: "No watermark", included: true },
        { text: "Full music library (100+ tracks)", included: true },
        { text: "Agent branding (logo, contact)", included: true },
        { text: "Video analytics", included: true },
        { text: "API access", included: true },
        { text: "Priority support", included: true },
      ],
      cta: "Start Free Trial",
      ctaHref: "/signup?plan=pro",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Advanced features, unlimited usage, and dedicated support for brokerages",
      popular: false,
      features: [
        { text: "Unlimited video tours", included: true },
        { text: "Unlimited duration", included: true },
        { text: "4K quality", included: true },
        { text: "All tour styles + custom", included: true },
        { text: "White-label (remove all branding)", included: true },
        { text: "Dedicated infrastructure", included: true },
        { text: "Team collaboration (unlimited)", included: true },
        { text: "99.9% SLA guarantee", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Custom integrations", included: true },
      ],
      cta: "Contact Sales",
      ctaHref: "/contact",
    },
  ]

  const comparisonFeatures = [
    {
      category: "USAGE LIMITS",
      features: [
        { name: "Video tours per month", starter: "3", pro: "30", enterprise: "Unlimited" },
        { name: "Max video duration", starter: "60s", pro: "120s", enterprise: "Unlimited" },
        { name: "Properties", starter: "10", pro: "100", enterprise: "Unlimited" },
        { name: "Concurrent generations", starter: "1", pro: "3", enterprise: "Unlimited" },
      ],
    },
    {
      category: "VIDEO QUALITY",
      features: [
        { name: "1080p Full HD", starter: true, pro: true, enterprise: true },
        { name: "4K Ultra HD", starter: false, pro: true, enterprise: true },
        { name: "Luxury tour style", starter: false, pro: true, enterprise: true },
        { name: "Modern tour style", starter: true, pro: true, enterprise: true },
        { name: "Cozy tour style", starter: true, pro: true, enterprise: true },
        { name: "Dramatic tour style", starter: false, pro: true, enterprise: true },
        { name: "Energetic tour style", starter: false, pro: true, enterprise: true },
        { name: "Elegant tour style", starter: false, pro: true, enterprise: true },
        { name: "Custom tour styles", starter: false, pro: false, enterprise: true },
        { name: "Aspect ratios (16:9, 9:16, 1:1, 4:5)", starter: "16:9", pro: true, enterprise: true },
        { name: "Export formats (MP4, MOV, WebM)", starter: "MP4", pro: true, enterprise: true },
      ],
    },
    {
      category: "FEATURES",
      features: [
        { name: "Basic music library (20 tracks)", starter: true, pro: true, enterprise: true },
        { name: "Full music library (100+ tracks)", starter: false, pro: true, enterprise: true },
        { name: "Agent branding (logo, contact)", starter: false, pro: true, enterprise: true },
        { name: "Remove watermark", starter: false, pro: true, enterprise: true },
        { name: "Professional voiceover styles", starter: "1", pro: "6+", enterprise: "All + custom" },
        { name: "Video analytics", starter: false, pro: true, enterprise: true },
        { name: "API access", starter: false, pro: true, enterprise: true },
        { name: "Batch processing", starter: false, pro: true, enterprise: true },
        { name: "White-label", starter: false, pro: false, enterprise: true },
        { name: "Custom integrations", starter: false, pro: false, enterprise: true },
      ],
    },
    {
      category: "SUPPORT & SECURITY",
      features: [
        { name: "Email support", starter: true, pro: true, enterprise: true },
        { name: "Priority support", starter: false, pro: true, enterprise: true },
        { name: "24/7 support", starter: false, pro: false, enterprise: true },
        { name: "Dedicated account manager", starter: false, pro: false, enterprise: true },
        { name: "GDPR compliance", starter: true, pro: true, enterprise: true },
        { name: "SOC 2 Type II", starter: true, pro: true, enterprise: true },
        { name: "SLA guarantee", starter: false, pro: false, enterprise: "99.9%" },
        { name: "SSO integration", starter: false, pro: false, enterprise: true },
      ],
    },
  ]

  const faqs = [
    {
      question: "How is usage calculated?",
      answer: "Usage is calculated based on the number of video tours you generate each month and their duration. For example, generating a 60-second video tour counts as 1 video toward your monthly limit. Unused videos do not roll over to the next month.",
    },
    {
      question: "What happens if I exceed my video limit?",
      answer: "On the Starter plan, generation will be paused until the next month. On Pro, you can purchase additional video packs for $5 per video. Enterprise plans have unlimited videos.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! All plans can be canceled at any time. If you cancel, you'll retain access until the end of your current billing period, and you won't be charged again.",
    },
    {
      question: "What's the difference between tour styles?",
      answer: "Tour styles control the pacing, transitions, and visual treatment of your video. Luxury style features slow, elegant transitions with warm color grading. Modern is sleek and fast-paced. Cozy uses soft transitions and warm tones. Dramatic has bold cuts and high contrast. Energetic is quick and vibrant. Elegant combines refined pacing with sophisticated effects.",
    },
    {
      question: "How does agent branding work?",
      answer: "Upload your logo and add your contact information (name, phone, email). Your branding will be overlaid on your videos as a professional lower-third or end card. You can customize placement, size, and style. White-label option (Enterprise only) removes all PropVideo branding.",
    },
    {
      question: "What video formats are supported?",
      answer: "We support multiple aspect ratios: 16:9 (YouTube, Facebook, websites), 9:16 (Instagram Stories, TikTok, Reels), 1:1 (Instagram feed), and 4:5 (Facebook/Instagram feed). Export formats include MP4 (most compatible), MOV (highest quality), and WebM (web-optimized).",
    },
    {
      question: "Is there a free trial for Pro?",
      answer: "Yes! All new Pro subscribers get a 14-day free trial. No credit card required to start. Cancel anytime during the trial and you won't be charged.",
    },
    {
      question: "What export formats are available?",
      answer: "Starter plan supports MP4 at 1080p. Pro and Enterprise support MP4, MOV, and WebM at resolutions up to 4K. All formats are optimized for social media platforms (Instagram, TikTok, YouTube, Facebook, Zillow).",
    },
    {
      question: "Do you offer discounts for non-profits or education?",
      answer: "Yes! We offer 50% discounts for qualified non-profit organizations and educational institutions. Contact us at sales@propvideo.ai with your organization details.",
    },
    {
      question: "How secure is my data?",
      answer: "All property photos and videos are encrypted end-to-end (AES-256). We're GDPR compliant and SOC 2 Type II certified. Your listing data and generated videos are never shared with third parties. Enterprise plans can opt for zero data retention after video generation.",
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
              <span className="text-sm font-bold uppercase tracking-wider">Pricing</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold uppercase mb-6 leading-tight">
              SIMPLE, TRANSPARENT PRICING
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Start free, scale as you grow. No hidden fees, no surprises. Cancel anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <RiShieldCheckLine className="w-5 h-5 text-black" />
                <span className="font-bold uppercase">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <RiFlashlightLine className="w-5 h-5 text-black" />
                <span className="font-bold uppercase">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <RiCheckLine className="w-5 h-5 text-black" />
                <span className="font-bold uppercase">Cancel anytime</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative p-8 border-4 border-black ${
                  tier.popular
                    ? "bg-black text-white shadow-lg scale-105"
                    : "bg-white brutalist-shadow"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-sky-400 border-4 border-black">
                    <span className="text-sm font-bold uppercase text-black">Most Popular</span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold uppercase mb-2 ${
                      tier.popular ? "text-sky-400" : "text-black"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      className={`text-5xl font-bold ${
                        tier.popular ? "text-sky-400" : "text-black"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-sm font-bold uppercase ${
                        tier.popular ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>
                  <p className={`text-sm ${tier.popular ? "text-white" : "text-gray-600"}`}>
                    {tier.description}
                  </p>
                </div>

                <Button
                  size="lg"
                  className={`w-full mb-8 border-4 font-bold uppercase ${
                    tier.popular
                      ? "bg-sky-400 text-black border-sky-400 hover:bg-sky-300"
                      : "bg-black text-sky-400 border-black hover:bg-gray-900"
                  }`}
                  asChild
                >
                  <a href={tier.ctaHref}>
                    {tier.cta}
                    <RiArrowRightLine className="w-5 h-5 ml-2" />
                  </a>
                </Button>

                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <RiCheckLine
                          className={`w-5 h-5 flex-shrink-0 ${
                            tier.popular ? "text-sky-400" : "text-black"
                          }`}
                        />
                      ) : (
                        <RiCloseLine
                          className={`w-5 h-5 flex-shrink-0 ${
                            tier.popular ? "text-gray-500" : "text-gray-400"
                          }`}
                        />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? tier.popular
                              ? "text-white"
                              : "text-gray-900"
                            : tier.popular
                            ? "text-gray-500 line-through"
                            : "text-gray-400 line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-24 bg-gray-50 border-y-8 border-black">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              DETAILED FEATURE COMPARISON
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>

          {comparisonFeatures.map((category, catIndex) => (
            <div key={catIndex} className="mb-8 bg-white border-4 border-black brutalist-shadow">
              <div className="bg-black text-sky-400 px-6 py-4 border-b-4 border-black">
                <h3 className="text-xl font-bold uppercase">{category.category}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-4 border-black bg-sky-400">
                      <th className="text-left p-4 font-bold uppercase text-sm">Feature</th>
                      <th className="text-center p-4 font-bold uppercase text-sm border-l-4 border-black">
                        Starter
                      </th>
                      <th className="text-center p-4 font-bold uppercase text-sm border-l-4 border-black">
                        Pro
                      </th>
                      <th className="text-center p-4 font-bold uppercase text-sm border-l-4 border-black">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.features.map((feature, featIndex) => (
                      <tr key={featIndex} className="border-b-2 border-gray-200 last:border-0">
                        <td className="p-4 font-medium">{feature.name}</td>
                        <td className="text-center p-4 border-l-4 border-black">
                          {typeof feature.starter === "boolean" ? (
                            feature.starter ? (
                              <RiCheckLine className="w-6 h-6 text-black mx-auto" />
                            ) : (
                              <RiCloseLine className="w-6 h-6 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold">{feature.starter}</span>
                          )}
                        </td>
                        <td className="text-center p-4 border-l-4 border-black bg-sky-50">
                          {typeof feature.pro === "boolean" ? (
                            feature.pro ? (
                              <RiCheckLine className="w-6 h-6 text-black mx-auto" />
                            ) : (
                              <RiCloseLine className="w-6 h-6 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold">{feature.pro}</span>
                          )}
                        </td>
                        <td className="text-center p-4 border-l-4 border-black">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <RiCheckLine className="w-6 h-6 text-black mx-auto" />
                            ) : (
                              <RiCloseLine className="w-6 h-6 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Cost Calculator */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
                TRANSPARENT PRICING MODEL
              </h2>
              <p className="text-xl text-gray-600">
                Based on video generation costs with our markup
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white border-4 border-black brutalist-shadow">
                <div className="w-12 h-12 bg-sky-400 border-2 border-black flex items-center justify-center mb-4">
                  <RiMicLine className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold uppercase mb-2">BASIC TOURS</h3>
                <div className="text-3xl font-bold mb-2">$1.50</div>
                <p className="text-sm text-gray-600 mb-4">per video tour</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 60 seconds max</li>
                  <li>• 1080p quality</li>
                  <li>• With watermark</li>
                </ul>
              </div>

              <div className="p-6 bg-black text-white border-4 border-black shadow-lg">
                <div className="w-12 h-12 bg-sky-400 border-2 border-black flex items-center justify-center mb-4">
                  <RiFlashlightLine className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold uppercase mb-2 text-sky-400">
                  PREMIUM TOURS
                </h3>
                <div className="text-3xl font-bold mb-2 text-sky-400">$5.00</div>
                <p className="text-sm text-gray-300 mb-4">per video tour</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 120 seconds max</li>
                  <li>• 4K quality</li>
                  <li>• No watermark + branding</li>
                </ul>
              </div>

              <div className="p-6 bg-white border-4 border-black brutalist-shadow">
                <div className="w-12 h-12 bg-sky-400 border-2 border-black flex items-center justify-center mb-4">
                  <RiGlobalLine className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold uppercase mb-2">ENTERPRISE TOURS</h3>
                <div className="text-3xl font-bold mb-2">Custom</div>
                <p className="text-sm text-gray-600 mb-4">contact for pricing</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Unlimited duration</li>
                  <li>• White-label</li>
                  <li>• Custom styles</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-sky-400 border-4 border-black brutalist-shadow">
              <h3 className="text-2xl font-bold uppercase mb-4">EXAMPLE MONTHLY COSTS</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b-4 border-black">
                  <span className="font-bold">Small Agent (5 videos/month)</span>
                  <span className="text-2xl font-bold">$7.50 - $25</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b-4 border-black">
                  <span className="font-bold">Medium Agent (20 videos/month)</span>
                  <span className="text-2xl font-bold">$30 - $100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Large Brokerage (100+ videos/month)</span>
                  <span className="text-2xl font-bold">Custom Pricing</span>
                </div>
              </div>
              <p className="text-sm mt-6 font-medium">
                * Per-video costs only. Pro plan ($49/mo) includes 30 videos plus all premium features.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black border-y-8 border-sky-400">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-400 border-4 border-sky-400 mb-8">
              <RiQuestionLine className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 text-sky-400">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xl text-white">
              Everything you need to know about pricing and plans
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white border-4 border-white shadow-lg"
              >
                <h3 className="text-lg font-bold uppercase mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6">
              READY TO GET STARTED?
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Start with our free Starter plan. Upgrade anytime as you grow. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="xl"
                className="gap-3 bg-sky-400 text-black border-4 border-black font-bold uppercase brutalist-shadow"
                asChild
              >
                <a href="/signup">
                  <RiArrowRightLine className="w-5 h-5" />
                  Start Free Trial
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
                <a href="/contact">Contact Sales</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
