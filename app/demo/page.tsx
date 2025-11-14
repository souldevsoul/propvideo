import { Container } from "@/components/ui/container"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import { ArrowLeft } from "lucide-react"

export default function DemoPage() {
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

      {/* Demo Section */}
      <section className="py-20">
        <Container maxWidth="xl">
          {/* Back to Home Link */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-sky-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          {/* Page Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-100 rounded-2xl mb-6 border-2 border-sky-200">
              <span className="text-sm font-bold tracking-wider text-sky-900">Live Demo</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
              Try PropVideo
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Experience AI-powered property video generation in action. Upload property photos and generate professional tour videos in minutes.
            </p>
          </div>

          {/* Demo Placeholder */}
          <div className="p-12 border-2 border-sky-200 bg-sky-50 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Property Video Features Coming Soon</h2>
            <p className="text-xl text-slate-600">
              Interactive demo will be available here to showcase property video generation capabilities.
            </p>
          </div>

          {/* Info Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 border-2 border-sky-200 bg-sky-50 rounded-2xl">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">Upload Photos</h3>
              <p className="text-sm text-slate-600">
                Upload property photos or listing details. Our AI will analyze and organize them for optimal tour flow.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 border-2 border-sky-200 bg-white rounded-2xl shadow-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">Customize Style</h3>
              <p className="text-sm text-slate-600">
                Choose tour style, voiceover tone, background music, and branding options to match your property.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 border-2 border-sky-200 bg-sky-50 rounded-2xl">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">Generate & Download</h3>
              <p className="text-sm text-slate-600">
                Click generate to create your video tour, then download it in formats optimized for social media.
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-12 p-8 border-2 border-slate-700 bg-slate-900 text-white rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">What You Can Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1">Multiple Tour Styles</h4>
                  <p className="text-sm text-slate-300">
                    Choose from luxury, modern, cozy, dramatic, energetic, and more
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1">AI Voiceover Scripts</h4>
                  <p className="text-sm text-slate-300">
                    Auto-generate professional tour narration based on property details
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1">Smart Photo Sequencing</h4>
                  <p className="text-sm text-slate-300">
                    AI arranges photos in optimal order for maximum impact
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1">Multi-Platform Export</h4>
                  <p className="text-sm text-slate-300">
                    Export for Instagram, TikTok, YouTube, Facebook, and Zillow
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Sign up for a free account and unlock unlimited property video generation
            </p>
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-sky-500 hover:bg-sky-600 text-white rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Create Free Account
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
