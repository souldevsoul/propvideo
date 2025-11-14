"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiMailLine,
  RiCustomerService2Line,
  RiQuestionLine,
  RiRocketLine,
  RiTeamLine,
  RiTimeLine,
  RiArrowRightLine,
  RiCheckLine,
} from "react-icons/ri"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: RiCustomerService2Line,
      title: "General Support",
      description: "Questions about your account, features, or how to use PropVideo",
      email: "support@propvideo.ai",
      responseTime: "24 hours",
      color: "white",
    },
    {
      icon: RiRocketLine,
      title: "Sales & Enterprise",
      description: "Interested in Enterprise plan, custom pricing, or volume discounts",
      email: "sales@propvideo.ai",
      responseTime: "4 hours",
      color: "dark",
    },
    {
      icon: RiTeamLine,
      title: "Partnerships",
      description: "Integration partnerships, affiliate programs, or collaboration opportunities",
      email: "partners@propvideo.ai",
      responseTime: "48 hours",
      color: "sky",
    },
  ]

  const supportTopics = [
    {
      title: "Account & Billing",
      items: [
        "Plan upgrades and downgrades",
        "Payment and invoice questions",
        "Account cancellation",
        "Refund requests",
      ],
    },
    {
      title: "Technical Support",
      items: [
        "API integration help",
        "Video generation issues",
        "Quality and rendering problems",
        "Error troubleshooting",
      ],
    },
    {
      title: "Property Tour Videos",
      items: [
        "Video quality improvement",
        "Photo upload requirements",
        "Processing time questions",
        "Style customization",
      ],
    },
    {
      title: "Enterprise Inquiries",
      items: [
        "Custom deployment options",
        "SLA and uptime guarantees",
        "Security compliance",
        "Volume pricing",
      ],
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
              <RiMailLine className="w-6 h-6 text-sky-600" />
              <span className="text-sm font-bold tracking-wider text-sky-900">Contact Us</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
              We&apos;re Here to Help
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Have questions? Need support? Want to discuss enterprise options? Our team is ready to assist you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              const bgColor =
                method.color === "dark"
                  ? "bg-slate-900 text-white"
                  : method.color === "sky"
                  ? "bg-sky-100"
                  : "bg-white"
              const borderColor =
                method.color === "dark" ? "border-slate-700" : "border-sky-200"

              return (
                <div
                  key={index}
                  className={`p-8 ${bgColor} rounded-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 border-2 ${borderColor}`}
                >
                  <div
                    className={`w-16 h-16 ${
                      method.color === "dark" ? "bg-gradient-to-br from-sky-500 to-sky-600" : "bg-gradient-to-br from-slate-800 to-slate-900"
                    } rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        method.color === "dark" ? "text-white" : "text-sky-400"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      method.color === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {method.title}
                  </h3>

                  <p
                    className={`mb-6 ${
                      method.color === "dark"
                        ? "text-slate-300"
                        : "text-slate-600"
                    }`}
                  >
                    {method.description}
                  </p>

                  <div className="mb-6">
                    <a
                      href={`mailto:${method.email}`}
                      className={`text-lg font-bold underline ${
                        method.color === "dark" ? "text-sky-400" : "text-sky-600"
                      } hover:no-underline`}
                    >
                      {method.email}
                    </a>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-sm font-bold ${
                      method.color === "dark"
                        ? "text-slate-300"
                        : "text-slate-600"
                    }`}
                  >
                    <RiTimeLine className="w-5 h-5" />
                    Response within {method.responseTime}
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-b from-white to-sky-50">
        <Container maxWidth="xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                Send Us a Message
              </h2>
              <p className="text-xl text-slate-600">
                Fill out the form and we'll get back to you as soon as possible
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-sky-200">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 text-slate-900">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 font-medium"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 text-slate-900">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 font-medium"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-bold mb-2 text-slate-900">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 font-medium"
                    placeholder="Acme Realty"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold mb-2 text-slate-900">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 font-medium bg-white"
                  >
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="sales">Sales & Enterprise</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Product Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 text-slate-900">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 font-medium resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold"
                >
                  <RiArrowRightLine className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-slate-600 text-center">
                  We typically respond within 24 hours on business days
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Support Topics */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Common Support Topics
            </h2>
            <p className="text-xl text-slate-600">
              Reach out about any of these topics—we&apos;re here to help
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportTopics.map((topic, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg transition-all hover:shadow-xl ${
                  index % 2 === 0 ? "bg-white border-2 border-sky-200" : "bg-slate-900 text-white border-2 border-slate-700"
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    index % 2 === 0 ? "text-slate-900" : "text-white"
                  }`}
                >
                  {topic.title}
                </h3>
                <ul className="space-y-3">
                  {topic.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <RiCheckLine
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          index % 2 === 0 ? "text-emerald-500" : "text-sky-400"
                        }`}
                      />
                      <span className={index % 2 === 0 ? "text-slate-600" : "text-slate-300"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-gradient-to-br from-sky-500 to-sky-600">
        <Container maxWidth="xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Looking for Something Else?
            </h2>
            <p className="text-xl text-sky-100">
              Quick links to help you find what you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="/pricing"
              className="p-6 bg-white rounded-2xl shadow-lg text-center hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <RiQuestionLine className="w-12 h-12 mx-auto mb-4 text-sky-600" />
              <h3 className="text-lg font-bold mb-2 text-slate-900">Pricing FAQ</h3>
              <p className="text-sm text-slate-600">
                Common questions about plans and billing
              </p>
            </a>

            <a
              href="/demo"
              className="p-6 bg-slate-900 text-white rounded-2xl shadow-xl border-2 border-slate-700 text-center hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <RiRocketLine className="w-12 h-12 text-sky-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 text-white">Try Demo</h3>
              <p className="text-sm text-slate-300">
                Test our video generation before signing up
              </p>
            </a>

            <a
              href="/features"
              className="p-6 bg-white rounded-2xl shadow-lg text-center hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <RiCustomerService2Line className="w-12 h-12 mx-auto mb-4 text-sky-600" />
              <h3 className="text-lg font-bold mb-2 text-slate-900">Feature Docs</h3>
              <p className="text-sm text-slate-600">
                Learn about all PropVideo capabilities
              </p>
            </a>
          </div>
        </Container>
      </section>

      {/* Emergency Support */}
      <section className="py-24 bg-slate-900">
        <Container maxWidth="xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Enterprise & Urgent Support
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Enterprise customers with SLA agreements have access to priority 24/7 support via dedicated channels.
            </p>
            <div className="p-8 bg-white rounded-2xl shadow-xl border-2 border-sky-200">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Enterprise Customers</h3>
              <p className="text-slate-600 mb-6">
                If you have an active Enterprise plan with SLA guarantee, use your dedicated support channels for immediate assistance.
              </p>
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold"
                asChild
              >
                <a href="mailto:enterprise@propvideo.ai">
                  Contact Enterprise Support
                  <RiArrowRightLine className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
