"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/marketing/layout/header"
import { Footer } from "@/components/marketing/layout/footer"
import {
  RiArticleLine,
  RiCalendarLine,
  RiTimeLine,
  RiArrowRightLine,
  RiFireLine,
  RiLightbulbLine,
  RiCodeLine,
  RiVideoChatLine,
} from "react-icons/ri"

export default function BlogPage() {
  const categories = [
    { name: "All Posts", slug: "all", count: 24 },
    { name: "Product Updates", slug: "updates", count: 8 },
    { name: "Tutorials", slug: "tutorials", count: 10 },
    { name: "Use Cases", slug: "use-cases", count: 6 },
  ]

  const featuredPost = {
    title: "How Video Tours Are Changing Real Estate Marketing in 2025",
    excerpt: "Discover why property video tours are becoming essential for real estate agents and how AI-powered tools are making professional video creation accessible to everyone.",
    category: "Product Updates",
    date: "Nov 8, 2025",
    readTime: "8 min read",
    author: "PropVideo Team",
    image: "featured",
  }

  const blogPosts = [
    {
      title: "Creating Property Tour Videos: A Complete Guide",
      excerpt: "Learn how to create professional property tour videos from photos. From upload to export, master the complete workflow.",
      category: "Tutorials",
      date: "Nov 5, 2025",
      readTime: "12 min read",
      author: "Sarah Chen",
      tag: "Beginner",
    },
    {
      title: "10 Video Marketing Tips for Realtors",
      excerpt: "Discover proven strategies to use video tours to attract buyers, increase engagement, and close deals faster in competitive markets.",
      category: "Use Cases",
      date: "Nov 3, 2025",
      readTime: "6 min read",
      author: "Marcus Johnson",
      tag: "Popular",
    },
    {
      title: "Choosing the Right Tour Style for Your Property",
      excerpt: "How tour style parameters work in PropVideo and best practices for matching style to property type and target buyer.",
      category: "Tutorials",
      date: "Nov 1, 2025",
      readTime: "10 min read",
      author: "Dr. Emily Rodriguez",
      tag: "Technical",
    },
    {
      title: "Comparing Video Models: Veo vs Luma for Property Tours",
      excerpt: "A comprehensive comparison of the top video generation models: features, quality, speed, and best use cases for real estate.",
      category: "Product Updates",
      date: "Oct 28, 2025",
      readTime: "15 min read",
      author: "PropVideo Team",
      tag: "Popular",
    },
    {
      title: "How Agents Use AI for Listings",
      excerpt: "Case study: How top-performing agents use AI video tours to create more content, reach more buyers, and scale their business.",
      category: "Use Cases",
      date: "Oct 25, 2025",
      readTime: "7 min read",
      author: "Alex Turner",
      tag: "Case Study",
    },
    {
      title: "Virtual Staging Integration with Video Tours",
      excerpt: "Essential tips for combining virtual staging with property videos: workflow optimization, quality control, and buyer perception.",
      category: "Tutorials",
      date: "Oct 22, 2025",
      readTime: "11 min read",
      author: "Dev Team",
      tag: "Technical",
    },
    {
      title: "The Future of Real Estate Video",
      excerpt: "How AI video technology is transforming property marketing and enabling agents to reach global audiences with multilingual tours.",
      category: "Product Updates",
      date: "Oct 19, 2025",
      readTime: "8 min read",
      author: "Sarah Chen",
      tag: "Trending",
    },
    {
      title: "Music Selection for Property Tours: Pro Tips",
      excerpt: "Advanced techniques for choosing the perfect background music: mood matching, tempo control, and legal considerations.",
      category: "Tutorials",
      date: "Oct 16, 2025",
      readTime: "9 min read",
      author: "Marcus Johnson",
      tag: "Pro Tips",
    },
    {
      title: "Social Media Optimization Tips for Property Videos",
      excerpt: "How real estate professionals optimize property tour videos for Instagram, TikTok, and YouTube to maximize reach and engagement.",
      category: "Use Cases",
      date: "Oct 13, 2025",
      readTime: "6 min read",
      author: "Jennifer Liu",
      tag: "Marketing",
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
              <RiArticleLine className="w-6 h-6 text-sky-600" />
              <span className="text-sm font-bold tracking-wider text-sky-900">Blog</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
              Property Video Insights & Updates
            </h1>
            <p className="text-xl text-slate-600">
              Tutorials, use cases, product updates, and everything you need to master property video tours
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-900">
        <Container maxWidth="xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 font-bold text-sm rounded-xl transition-all ${
                  index === 0
                    ? "bg-sky-500 text-white hover:bg-sky-600"
                    : "bg-transparent text-white border-2 border-slate-700 hover:bg-slate-800 hover:border-sky-500"
                }`}
              >
                {category.name}
                <span className="ml-2 opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50">
        <Container maxWidth="xl">
          <div className="mb-6 flex items-center gap-3">
            <RiFireLine className="w-6 h-6 text-emerald-500" />
            <h2 className="text-2xl font-bold">Featured Post</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl p-8 border-2 border-slate-700">
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl aspect-video flex items-center justify-center">
              <RiVideoChatLine className="w-24 h-24 text-white opacity-90" />
            </div>

            <div className="flex flex-col justify-center text-white">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold mb-3">
                <span className="px-3 py-1 bg-sky-500 text-white rounded-lg">
                  {featuredPost.category}
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-4 leading-tight text-white">
                {featuredPost.title}
              </h3>

              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <RiCalendarLine className="w-4 h-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <RiTimeLine className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>

              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold w-fit"
              >
                Read Article
                <RiArrowRightLine className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <Container maxWidth="xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Latest Articles
            </h2>
            <p className="text-xl text-slate-600">
              Stay updated with the latest in property video marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const bgColors = ["bg-white", "bg-slate-900", "bg-sky-100"]
              const textColors = ["text-slate-900", "text-white", "text-slate-900"]
              const excerptColors = ["text-slate-600", "text-slate-300", "text-slate-700"]
              const metaColors = ["text-slate-500", "text-slate-400", "text-slate-600"]
              const colorIndex = index % 3

              const tagIcons: Record<string, React.ComponentType<{ className?: string }>> = {
                Popular: RiFireLine,
                Technical: RiCodeLine,
                Beginner: RiLightbulbLine,
              }

              const TagIcon = tagIcons[post.tag] || RiArticleLine

              return (
                <div
                  key={index}
                  className={`${bgColors[colorIndex]} rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 ${
                    colorIndex === 1 ? "border-2 border-slate-700" : "border-2 border-sky-200"
                  }`}
                >
                  {/* Image Placeholder */}
                  <div
                    className={`h-48 ${
                      colorIndex === 1 ? "bg-gradient-to-br from-sky-500 to-sky-600" : colorIndex === 2 ? "bg-gradient-to-br from-slate-200 to-slate-300" : "bg-gradient-to-br from-slate-100 to-slate-200"
                    } flex items-center justify-center`}
                  >
                    <RiArticleLine
                      className={`w-16 h-16 ${
                        colorIndex === 1 ? "text-white opacity-80" : colorIndex === 2 ? "text-sky-600" : "text-slate-400"
                      }`}
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category & Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-lg ${
                          colorIndex === 1
                            ? "bg-sky-500 text-white"
                            : "bg-sky-100 text-sky-900"
                        }`}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <TagIcon
                          className={`w-4 h-4 ${
                            colorIndex === 1 ? "text-sky-400" : "text-sky-600"
                          }`}
                        />
                        <span
                          className={`text-xs font-bold ${metaColors[colorIndex]}`}
                        >
                          {post.tag}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-3 leading-tight ${textColors[colorIndex]}`}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className={`mb-4 text-sm leading-relaxed flex-1 ${excerptColors[colorIndex]}`}>
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className={`flex items-center gap-4 text-xs ${metaColors[colorIndex]} mb-4`}>
                      <div className="flex items-center gap-1">
                        <RiCalendarLine className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <RiTimeLine className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Read More */}
                    <button
                      className={`w-full py-3 font-bold text-sm rounded-xl transition-all ${
                        colorIndex === 1
                          ? "bg-sky-500 hover:bg-sky-600 text-white"
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button
              size="xl"
              variant="outline"
              className="gap-3 bg-white text-slate-900 border-2 border-slate-300 hover:border-sky-500 rounded-xl font-bold"
            >
              Load More Articles
              <RiArrowRightLine className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-slate-900">
        <Container maxWidth="xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get the latest property video insights, tutorials, and product updates delivered to your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-slate-700 bg-slate-800 text-white font-medium text-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold px-8 whitespace-nowrap"
              >
                Subscribe
                <RiArrowRightLine className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-slate-400 mt-4">
              No spam. Unsubscribe anytime. Read our{" "}
              <a href="/privacy" className="text-sky-400 underline hover:no-underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
