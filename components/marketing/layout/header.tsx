"use client"

import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
// import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { RiVideoLine } from "react-icons/ri"

export interface NavLink {
  label: string
  href: string
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  logoText?: string
  navLinks?: NavLink[]
  ctaButton?: {
    text: string
    href?: string
    onClick?: () => void
  }
  transparent?: boolean
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({
    logo,
    logoText = "PropVideo",
    navLinks = [],
    ctaButton,
    transparent = false,
    className,
    ...props
  }, ref) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const headerBg = transparent && !scrolled
      ? "bg-transparent"
      : "bg-white border-b-2 border-gray-200"

    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          headerBg,
          className
        )}
        {...props}
      >
        <Container maxWidth="xl">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              {logo || (
                <>
                  <div className="w-12 h-12 bg-sky-400 rounded-lg shadow-lg flex items-center justify-center">
                    <RiVideoLine className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xl font-bold uppercase tracking-tight">{logoText}</span>
                </>
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wider hover:text-sky-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              {ctaButton && (
                <>
                  {ctaButton.href ? (
                    <Link
                      href={ctaButton.href}
                      className="bg-sky-400 text-white hover:bg-sky-500 rounded-lg shadow-lg font-bold uppercase px-6 py-2 transition-colors"
                    >
                      {ctaButton.text}
                    </Link>
                  ) : (
                    <button
                      onClick={ctaButton.onClick}
                      className="bg-sky-400 text-white hover:bg-sky-500 rounded-lg shadow-lg font-bold uppercase px-6 py-2 transition-colors"
                    >
                      {ctaButton.text}
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t-2 border-gray-200 py-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm font-bold uppercase tracking-wider hover:text-sky-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                {ctaButton && (
                  <>
                    {ctaButton.href ? (
                      <Link
                        href={ctaButton.href}
                        className="bg-sky-400 text-white hover:bg-sky-500 rounded-lg shadow-lg font-bold uppercase px-6 py-3 transition-colors w-full text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {ctaButton.text}
                      </Link>
                    ) : (
                      <button
                        className="bg-sky-400 text-white hover:bg-sky-500 rounded-lg shadow-lg font-bold uppercase px-6 py-3 transition-colors w-full"
                        onClick={() => {
                          ctaButton.onClick?.()
                          setMobileMenuOpen(false)
                        }}
                      >
                        {ctaButton.text}
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </Container>
      </header>
    )
  }
)
Header.displayName = "Header"

export { Header }
