"use client"

import { Container } from "@/components/ui/container"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiFileTextLine,
  RiCheckLine,
  RiCloseLine,
  RiShieldLine,
  RiScalesLine,
  RiMailLine,
} from "react-icons/ri"

export default function TermsPage() {
  const lastUpdated = "November 8, 2025"

  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: RiCheckLine,
      content: [
        {
          text: "By accessing or using PropVideo ('Service', 'Platform', 'we', 'us', 'our'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, you may not access or use the Service.",
        },
        {
          text: "These Terms constitute a legally binding agreement between you (whether personally or on behalf of an entity) and PropVideo, Inc. If you are using the Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.",
        },
        {
          text: "We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Service. Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.",
        },
      ],
    },
    {
      title: "2. Account Registration and Security",
      icon: RiShieldLine,
      content: [
        {
          subtitle: "Account Creation",
          text: "To use PropVideo, you must create an account by providing accurate, complete, and current information. You must be at least 13 years old (or 16 in the EU) to create an account. You are responsible for maintaining the confidentiality of your account credentials.",
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for all activities that occur under your account. You must immediately notify us of any unauthorized access or security breach. We recommend enabling multi-factor authentication (MFA) for enhanced security.",
        },
        {
          subtitle: "Account Termination",
          text: "We reserve the right to suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or use the Service in a manner that causes harm to us or others. You may cancel your account at any time through your account settings.",
        },
      ],
    },
    {
      title: "3. Use of Services",
      icon: RiFileTextLine,
      content: [
        {
          subtitle: "License Grant",
          text: "Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal or internal business purposes. This license does not include the right to sublicense, resell, or distribute the Service.",
        },
        {
          subtitle: "Service Availability",
          text: "We strive to provide 99.9% uptime for Pro and Enterprise customers. However, the Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. We are not liable for any downtime or service interruptions.",
        },
        {
          subtitle: "Usage Limits",
          text: "Your use of the Service is subject to the limits of your subscription plan (character limits, API rate limits, voice clones). Exceeding these limits may result in additional charges or temporary service restrictions. Enterprise customers can negotiate custom limits.",
        },
        {
          subtitle: "API Usage",
          text: "If you use our API, you must comply with our API documentation and rate limits. You may not abuse, overload, or circumvent our API limits. We reserve the right to revoke API access for violations.",
        },
      ],
    },
    {
      title: "4. Prohibited Uses",
      icon: RiCloseLine,
      content: [
        {
          text: "You agree not to use the Service for any unlawful, harmful, or abusive purposes. Prohibited uses include, but are not limited to:",
        },
        {
          subtitle: "Illegal Activity",
          text: "Creating voice content for illegal purposes, fraud, scams, or deception; impersonating others without consent; generating content that violates any laws or regulations.",
        },
        {
          subtitle: "Harmful Content",
          text: "Creating content that harasses, threatens, or harms others; generating hate speech, discriminatory, or violent content; creating deepfakes or misleading audio without disclosure; producing content that infringes on others' rights.",
        },
        {
          subtitle: "Service Abuse",
          text: "Attempting to reverse engineer, decompile, or hack the Service; circumventing usage limits or payment requirements; reselling or redistributing the Service without authorization; using the Service to compete with us or build a similar product.",
        },
        {
          subtitle: "Property Photo Misuse",
          text: "Uploading photos of properties you don&apos;t have rights to use; using photos without property owner consent; misrepresenting property details or features; violating copyright or intellectual property rights.",
        },
        {
          text: "We reserve the right to investigate suspected violations and take appropriate action, including account suspension or termination, reporting to authorities, and pursuing legal remedies.",
        },
      ],
    },
    {
      title: "5. Intellectual Property",
      icon: RiScalesLine,
      content: [
        {
          subtitle: "Our IP",
          text: "PropVideo, including all software, algorithms, designs, trademarks, logos, and content, is owned by PropVideo, Inc. and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.",
        },
        {
          subtitle: "Your Content",
          text: "You retain ownership of the property photos and details you provide. By using the Service, you grant us a limited license to process your content solely to provide the Service. We do not claim ownership of your property content.",
        },
        {
          subtitle: "Generated Content",
          text: "You own the video tours generated by the Service using your property content. However, you are responsible for ensuring your use of generated content complies with applicable laws and these Terms. You must have rights to all photos and property details you upload.",
        },
        {
          subtitle: "AI Model Providers",
          text: "The underlying AI models (Veo, Luma, Minimax) are owned by their respective creators and licensed through Replicate. Your use of generated content must comply with the terms of these model providers.",
        },
      ],
    },
    {
      title: "6. User Content and Responsibilities",
      icon: RiFileTextLine,
      content: [
        {
          subtitle: "Content Ownership",
          text: "You are solely responsible for the content you create using our Service, including property photos, listing details, and generated videos. You represent and warrant that you have all necessary rights, licenses, and permissions to use such content.",
        },
        {
          subtitle: "Content Moderation",
          text: "We reserve the right (but have no obligation) to monitor, review, or remove content that violates these Terms or applicable laws. We may use automated and manual moderation techniques. We are not responsible for user-generated content.",
        },
        {
          subtitle: "Disclosure Requirements",
          text: "If you publish or distribute AI-generated property videos, you should clearly disclose that they were created using AI technology. Ensure property representations are accurate and not misleading. Failure to follow ethical practices may result in account termination.",
        },
      ],
    },
    {
      title: "7. Payment Terms",
      icon: RiScalesLine,
      content: [
        {
          subtitle: "Subscription Plans",
          text: "PropVideo offers free and paid subscription plans. Paid plans are billed monthly or annually in advance. Prices are listed on our Pricing page and may change with 30 days' notice to existing subscribers.",
        },
        {
          subtitle: "Payment Processing",
          text: "Payments are processed through Stripe. By providing payment information, you authorize us to charge your payment method for all fees. You are responsible for ensuring your payment information is current and valid.",
        },
        {
          subtitle: "Refunds",
          text: "Free trials can be canceled at any time without charge. Paid subscriptions are non-refundable except as required by law or at our sole discretion. If you cancel, you retain access until the end of your billing period.",
        },
        {
          subtitle: "Overages",
          text: "If you exceed your plan limits, you may be charged for overages at our standard rates. Enterprise customers can negotiate custom overage terms. We will notify you before charging overages.",
        },
        {
          subtitle: "Taxes",
          text: "All fees are exclusive of taxes. You are responsible for paying any applicable taxes, duties, or government charges. We will collect taxes where required by law.",
        },
      ],
    },
    {
      title: "8. Termination and Suspension",
      icon: RiCloseLine,
      content: [
        {
          subtitle: "Termination by You",
          text: "You may terminate your account at any time through your account settings. Upon termination, your access to the Service will cease, and your data will be deleted in accordance with our Privacy Policy (within 30 days).",
        },
        {
          subtitle: "Termination by Us",
          text: "We may suspend or terminate your account immediately if you violate these Terms, engage in fraudulent activity, fail to pay fees, or use the Service in a harmful manner. We will provide notice where reasonably possible.",
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, you must cease all use of the Service, your license to use the Service terminates immediately, and you lose access to your account and data. Some provisions of these Terms survive termination (disclaimers, limitations of liability, indemnification).",
        },
      ],
    },
  ]

  const disclaimerSections = [
    {
      title: "9. Disclaimers and Warranties",
      content: [
        {
          text: 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE.',
        },
        {
          text: "We do not warrant that the Service will be uninterrupted, error-free, or secure. We do not warrant the accuracy, reliability, or quality of generated audio. We are not responsible for any damage caused by your use of the Service.",
        },
        {
          text: "AI-generated content may contain errors, biases, or inaccuracies. You are solely responsible for verifying and validating all generated content before use. We make no representations about the suitability of generated content for any purpose.",
        },
      ],
    },
    {
      title: "10. Limitation of Liability",
      content: [
        {
          text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, PROPVIDEO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, WHETHER IN CONTRACT, TORT, OR OTHERWISE, ARISING FROM YOUR USE OF THE SERVICE.",
        },
        {
          text: "OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $100 IF YOU HAVE NOT PAID US ANYTHING.",
        },
        {
          text: "Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages. In such jurisdictions, our liability is limited to the greatest extent permitted by law.",
        },
      ],
    },
    {
      title: "11. Indemnification",
      content: [
        {
          text: "You agree to indemnify, defend, and hold harmless PropVideo, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:",
        },
        {
          text: "Your use of the Service; your content or generated audio; your violation of these Terms; your violation of any rights of third parties; your violation of applicable laws or regulations.",
        },
        {
          text: "This indemnification obligation survives termination of these Terms and your use of the Service.",
        },
      ],
    },
    {
      title: "12. Dispute Resolution",
      content: [
        {
          subtitle: "Governing Law",
          text: "These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. You consent to the exclusive jurisdiction of courts in San Francisco County, California for any disputes.",
        },
        {
          subtitle: "Arbitration",
          text: "Any disputes arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association (AAA). Arbitration will be conducted in San Francisco, California or remotely by videoconference.",
        },
        {
          subtitle: "Class Action Waiver",
          text: "You agree that any arbitration or court proceeding shall be limited to the dispute between you and PropVideo individually. You waive the right to participate in class actions, class arbitrations, or representative actions.",
        },
        {
          subtitle: "Exceptions",
          text: "Either party may seek injunctive or equitable relief in court to protect intellectual property rights or prevent unauthorized use of the Service.",
        },
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
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-100 rounded-2xl mb-8 border-2 border-sky-200">
              <RiFileTextLine className="w-6 h-6 text-sky-600" />
              <span className="text-sm font-bold tracking-wider text-sky-900">Terms of Service</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
              Terms & Conditions
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              These Terms of Service govern your use of PropVideo. Please read them carefully before using our platform.
            </p>
            <p className="text-sm font-bold text-slate-900">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-slate-900">
        <Container maxWidth="xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">
              The Key Points
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border-2 border-sky-200">
                <div className="flex items-center gap-3 mb-3">
                  <RiCheckLine className="w-6 h-6 flex-shrink-0 text-emerald-500" />
                  <h3 className="text-lg font-bold text-slate-900">Your Rights</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  You own your property content and generated videos. Use the Service according to your plan limits. Cancel anytime.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl border-2 border-sky-200">
                <div className="flex items-center gap-3 mb-3">
                  <RiCloseLine className="w-6 h-6 flex-shrink-0 text-red-500" />
                  <h3 className="text-lg font-bold text-slate-900">Prohibited</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  No illegal activity, impersonation, harassment, or service abuse. Only upload property photos you have rights to use.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl border-2 border-sky-200">
                <div className="flex items-center gap-3 mb-3">
                  <RiScalesLine className="w-6 h-6 flex-shrink-0 text-sky-600" />
                  <h3 className="text-lg font-bold text-slate-900">Liability</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  Service provided "as is." Our liability is limited. You&apos;re responsible for your use of generated content.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl border-2 border-sky-200">
                <div className="flex items-center gap-3 mb-3">
                  <RiShieldLine className="w-6 h-6 flex-shrink-0 text-emerald-500" />
                  <h3 className="text-lg font-bold text-slate-900">Payment</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  Subscriptions billed in advance. Non-refundable except as required by law. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Terms Sections */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, sectionIndex) => {
              const Icon = section.icon
              return (
                <div key={sectionIndex} id={`section-${sectionIndex + 1}`}>
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-sky-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`p-6 rounded-2xl shadow-lg border-2 ${
                          itemIndex % 2 === 0 ? "bg-white border-sky-200" : "bg-sky-50 border-sky-200"
                        }`}
                      >
                        {('subtitle' in item) && item.subtitle && (
                          <h3 className="text-lg font-bold mb-3 text-slate-900">{item.subtitle}</h3>
                        )}
                        <p className="text-slate-600 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* Disclaimer Sections */}
            {disclaimerSections.map((section, sectionIndex) => (
              <div key={sectionIndex + 8} id={`section-${sectionIndex + 9}`}>
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                      <RiScalesLine className="w-6 h-6 text-sky-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-6 bg-sky-50 rounded-2xl shadow-lg border-2 border-sky-200"
                    >
                      {('subtitle' in item) && item.subtitle && (
                        <h3 className="text-lg font-bold mb-3 text-slate-900">{item.subtitle}</h3>
                      )}
                      <p className="text-slate-600 leading-relaxed font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Miscellaneous */}
            <div id="section-13">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                    <RiFileTextLine className="w-6 h-6 text-sky-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">13. Miscellaneous</h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl shadow-lg border-2 border-sky-200">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">Entire Agreement</h3>
                  <p className="text-slate-600 leading-relaxed">
                    These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and PropVideo regarding the Service. They supersede all prior agreements and understandings.
                  </p>
                </div>

                <div className="p-6 bg-sky-50 rounded-2xl shadow-lg border-2 border-sky-200">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">Severability</h3>
                  <p className="text-slate-600 leading-relaxed">
                    If any provision of these Terms is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent possible, and the remaining provisions shall remain in full force and effect.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg border-2 border-sky-200">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">Waiver</h3>
                  <p className="text-slate-600 leading-relaxed">
                    No waiver of any term or provision of these Terms shall be deemed a further or continuing waiver of such term or any other term. Our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
                  </p>
                </div>

                <div className="p-6 bg-sky-50 rounded-2xl shadow-lg border-2 border-sky-200">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">Assignment</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You may not assign or transfer these Terms or your rights and obligations hereunder without our prior written consent. We may assign these Terms to any affiliate or in connection with a merger, acquisition, or sale of assets.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg border-2 border-sky-200">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">Force Majeure</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-900">
        <Container maxWidth="xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <RiMailLine className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              If you have questions about these Terms of Service, please contact us.
            </p>

            <div className="p-8 bg-white rounded-2xl shadow-xl border-2 border-sky-200">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Contact Us</h3>
              <div className="space-y-3 text-left max-w-2xl mx-auto">
                <div>
                  <span className="font-bold text-sm text-slate-900">Email:</span>
                  <br />
                  <a
                    href="mailto:legal@propvideo.ai"
                    className="text-lg font-bold text-sky-600 underline hover:no-underline"
                  >
                    legal@propvideo.ai
                  </a>
                </div>
                <div>
                  <span className="font-bold text-sm text-slate-900">Support:</span>
                  <br />
                  <a
                    href="mailto:support@propvideo.ai"
                    className="text-lg font-bold text-sky-600 underline hover:no-underline"
                  >
                    support@propvideo.ai
                  </a>
                </div>
                <div>
                  <span className="font-bold text-sm text-slate-900">Mailing Address:</span>
                  <br />
                  <address className="text-slate-600 not-italic">
                    PropVideo, Inc.
                    <br />
                    123 Property Lane, Suite 100
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </address>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t-2 border-slate-200">
                <p className="text-sm text-slate-600">
                  By using PropVideo, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
