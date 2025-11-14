# PropVideo Assets Guide

This document describes all visual assets and brand elements for PropVideo.

## 🎨 Brand Colors

```css
/* Primary Colors */
--color-sky-500: #0EA5E9;    /* Sky Blue - Primary brand color */
--color-sky-600: #0284C7;    /* Sky Blue - Hover states */
--color-sky-50: #F0F9FF;     /* Sky Blue - Light backgrounds */

/* Secondary Colors */
--color-slate-600: #475569;  /* Slate - Professional text */
--color-slate-500: #64748B;  /* Slate - Secondary text */
--color-slate-900: #0F172A;  /* Slate - Headings */

/* Accent Colors */
--color-emerald-500: #10B981; /* Emerald - Success, CTAs */
--color-emerald-600: #059669; /* Emerald - Hover */
```

**Color Rationale:**
- **Sky Blue (#0EA5E9)**: Trust, openness, sky/space - perfect for real estate
- **Slate (#475569)**: Professional, stable, modern foundation
- **Emerald (#10B981)**: Growth, prosperity, success in property sales

## 📁 Logo Files

### Main Logo
- **File**: `/public/logo.svg`
- **Size**: 200x60px
- **Usage**: Header, marketing materials, documents
- **Format**: Horizontal lockup with icon + text
- **Text**: "Prop" in slate-900, "Video" in sky-500

### Icon Logo
- **File**: `/public/logo-icon.svg`
- **Size**: 48x48px
- **Usage**: App icon, social media profile, small spaces
- **Format**: Circular with house + video camera badge

### Favicon
- **File**: `/app/icon.svg`
- **Size**: 64x64px
- **Usage**: Browser tab icon
- **Format**: Same as icon logo, optimized for small sizes

### Apple Touch Icon
- **File**: `/app/apple-icon.svg`
- **Size**: 64x64px (scales automatically)
- **Usage**: iOS home screen, Safari bookmarks

## 🖼️ Open Graph Image

- **File**: `/public/og-image.png` and `/public/og-image.svg`
- **Size**: 1200x630px (OpenGraph standard)
- **Usage**: Social media sharing, link previews
- **Content**: PropVideo branding with tagline

## 🎬 Tour Style Previews

Demo images for each tour style, used in the style selector UI:

| Style | File | Colors | Mood |
|-------|------|--------|------|
| **Luxury** | `/public/demo/tour-style-luxury.svg` | Warm gold gradient | Elegant, orchestral, high-end |
| **Modern** | `/public/demo/tour-style-modern.svg` | Cool blue gradient | Contemporary, ambient, sleek |
| **Cozy** | `/public/demo/tour-style-cozy.svg` | Warm peach gradient | Inviting, acoustic, homey |
| **Elegant** | `/public/demo/tour-style-elegant.svg` | Neutral gray gradient | Refined, classical, timeless |
| **Dramatic** | `/public/demo/tour-style-dramatic.svg` | High contrast purple-red | Bold, epic, wow-factor |
| **Energetic** | `/public/demo/tour-style-energetic.svg` | Vibrant yellow-pink | Fast, upbeat, youthful |
| **Minimalist** | `/public/demo/tour-style-minimalist.svg` | Clean neutral white | Simple, modern, zen |
| **Rustic** | `/public/demo/tour-style-rustic.svg` | Earthy brown gradient | Natural, folk, country |

### Tour Style Preview Dimensions
- **Size**: 400x225px (16:9 aspect ratio)
- **Format**: SVG (scalable, small file size)
- **Usage**: Tour style selector component

## 🔤 Typography

### Headings
- **Font Family**: System fonts (system-ui, -apple-system, sans-serif)
- **Weights**:
  - H1: 700 (Bold)
  - H2-H3: 600 (Semibold)
  - H4-H6: 500 (Medium)

### Body Text
- **Font Family**: Inter (var(--font-inter))
- **Base Size**: 16px
- **Line Height**: 1.5

### Monospace
- **Font Family**: Fira Code
- **Usage**: Code snippets, technical details

## 📐 Spacing & Layout

```css
/* Spacing Scale */
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 0.75rem;  /* 12px */
--spacing-md: 1rem;     /* 16px */
--spacing-lg: 1.5rem;   /* 24px */
--spacing-xl: 2rem;     /* 32px */

/* Border Radius */
--radius-sm: 0.5rem;    /* 8px - buttons, inputs */
--radius-md: 0.75rem;   /* 12px - cards */
--radius-lg: 1rem;      /* 16px - modals */
--radius-xl: 1.5rem;    /* 24px - hero sections */
```

## 🎨 Gradients

### Primary Gradient
```css
background: linear-gradient(135deg, #0EA5E9 0%, #10B981 100%);
```
**Usage**: CTAs, hero sections, premium features

### Subtle Gradient
```css
background: linear-gradient(to bottom, #F8FAFC, #FFFFFF);
```
**Usage**: Section backgrounds, cards

## 🖱️ Interactive States

### Buttons
- **Default**: bg-sky-500, text-white
- **Hover**: bg-sky-600
- **Active**: bg-sky-700
- **Disabled**: opacity-50, cursor-not-allowed

### Links
- **Default**: text-sky-600
- **Hover**: text-sky-700, underline

### Cards
- **Default**: bg-white, border-slate-200
- **Hover**: shadow-lg, border-sky-300

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

## ✅ Usage Guidelines

### Logo
- Always maintain clear space around logo (minimum 16px)
- Never distort or skew the logo
- Never change logo colors (except white on dark backgrounds)
- Minimum size: 100px width for horizontal logo, 32px for icon

### Colors
- Use sky-500 as primary CTA color
- Use slate colors for text hierarchy
- Use emerald for success states and positive actions
- Maintain WCAG AA contrast ratios (4.5:1 for text)

### Tour Style Previews
- Always use provided SVG files (don't recreate)
- Maintain 16:9 aspect ratio
- Don't overlay text on previews (they already have labels)

## 🎬 Video Generation Assets

When generating property tour videos with Replicate, use these parameters:

```typescript
{
  aspectRatio: '16:9' | '9:16' | '1:1' | '4:5',
  tourStyle: 'luxury' | 'modern' | 'cozy' | 'elegant' | 'dramatic' | 'energetic' | 'minimalist' | 'rustic',
  voiceStyle: 'professional' | 'friendly' | 'luxury' | 'energetic',
  duration: 30 | 60 | 90 | 120 // seconds
}
```

## 📦 Asset Optimization

- **SVG**: All logos and icons are SVG for perfect scaling
- **PNG**: Only used for og-image.png (1200x630px, optimized)
- **No JPEGs**: Use WebP or PNG for photos
- **Lazy Loading**: Implement for tour style previews

## 🔄 Future Assets

To be added in future phases:
- [ ] Demo property tour videos (one per style)
- [ ] Tutorial videos for dashboard
- [ ] Screenshot gallery for marketing
- [ ] Agent photo templates
- [ ] Brokerage logo upload guidelines

---

**Last Updated**: 2025-11-14
**Version**: 1.0
**Maintained by**: PropVideo Team
