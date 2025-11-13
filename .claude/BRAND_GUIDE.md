# PropVideo - Brand Guide

## 🎨 Visual Brand Identity

### Brand Colors (CRITICAL - DO NOT DEVIATE!)

**Primary Palette:**
```
Teal Family (Professional, Real Estate):
- #14B8A6 (teal-500) - Primary action color
- #0D9488 (teal-600) - Hover states
- #2DD4BF (teal-400) - Lighter accent

Sky Blue Family (Trust, Openness):
- #0EA5E9 (sky-500) - Secondary emphasis
- #0284C7 (sky-600) - Depth
- #38BDF8 (sky-400) - Lighter variant

Indigo Family (Professional, Modern):
- #6366F1 (indigo-500) - Creative accent
- #4F46E5 (indigo-600) - Darker variant
- #818CF8 (indigo-400) - Lighter accent
```

**Usage Rules:**
- Primary CTAs: Teal/Sky gradients
- Secondary elements: Indigo/Teal
- Backgrounds: White/Slate-50
- Text: Slate-900 (headings), Slate-600 (body)

**NEVER Use (VoiceCraft template colors):**
- ❌ Yellow (`yellow-*`)
- ❌ Orange (`orange-*`)
- ❌ Emerald/Green (that's LogoSmith!)
- ❌ Harsh black borders
- ❌ Brutalist shadows

---

## 🎯 Brand Personality

**Professional Real Estate Platform:**
- Trustworthy, reliable, modern
- Clean, spacious, airy (like property showcases)
- Tech-forward but accessible
- Premium without being pretentious

**Visual Metaphors:**
- Sky = Openness, space, possibilities
- Teal = Trust, professionalism, water (calm)
- Indigo = Innovation, technology, future

---

## 📐 Visual Style

### Typography

**Headings:**
```tsx
text-5xl font-bold text-slate-900     // Large headings
text-4xl font-bold text-slate-900     // Medium headings
text-3xl font-semibold text-slate-800 // Smaller headings
```

**Body:**
```tsx
text-lg leading-relaxed text-slate-600   // Readable body text
text-base text-slate-600                  // Standard text
```

**CTAs:**
```tsx
text-white font-semibold  // On colored backgrounds
```

### Shadows (Soft & Professional)

```css
shadow-soft-sm    - Subtle elevation (cards at rest)
shadow-soft-md    - Medium elevation (interactive cards)
shadow-soft-lg    - Large elevation (modals, popovers)
shadow-soft-xl    - Hero element elevation
shadow-glow-teal  - Interactive glow effect (teal)
shadow-glow-sky   - Interactive glow effect (sky blue)
```

**Custom shadow definitions (in globals.css):**
```css
.shadow-soft-sm {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08);
}

.shadow-soft-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
}

.shadow-soft-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.08);
}

.shadow-soft-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.08);
}

.shadow-glow-teal {
  box-shadow: 0 0 20px rgba(20, 184, 166, 0.35);
}

.shadow-glow-sky {
  box-shadow: 0 0 20px rgba(14, 165, 233, 0.35);
}
```

### Corners (Smooth & Modern)

```css
rounded-xl    - Buttons, smaller cards (12px)
rounded-2xl   - Large cards, sections (16px)
rounded-3xl   - Hero elements (24px)
rounded-full  - Badges, avatars, pills
```

### Spacing (Generous & Breathable)

**Section padding:**
```tsx
py-24 px-6 md:px-8   // Desktop sections
py-16 px-6            // Mobile sections
```

**Card padding:**
```tsx
p-8   // Standard cards
p-10  // Large cards
p-12  // Hero cards
```

**Element gaps:**
```tsx
gap-6   // Between elements
gap-8   // Between sections
space-y-6  // Vertical rhythm
space-y-8  // Larger vertical spacing
```

### Gradients

**Primary CTA gradient:**
```tsx
bg-gradient-to-r from-teal-500 to-sky-600
```

**Secondary gradient:**
```tsx
bg-gradient-to-r from-sky-500 to-indigo-600
```

**Hero background gradient:**
```tsx
bg-gradient-to-br from-teal-50 to-sky-50
```

**Accent gradient (text):**
```tsx
bg-gradient-to-r from-teal-500 to-sky-600 bg-clip-text text-transparent
```

---

## 🎨 Component Patterns

### Buttons

**Primary CTA:**
```tsx
<button className="bg-gradient-to-r from-teal-500 to-sky-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 hover:shadow-glow-teal transition-all duration-300">
  Create Video Tour
</button>
```

**Secondary CTA:**
```tsx
<button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold border border-slate-200 hover:shadow-soft-lg hover:border-teal-500 transition-all duration-300">
  Learn More
</button>
```

**Outline button:**
```tsx
<button className="border-2 border-teal-500 text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300">
  View Examples
</button>
```

### Cards

**Basic card:**
```tsx
<div className="bg-white rounded-2xl shadow-soft-md p-8 hover:shadow-soft-lg transition-all duration-300 border border-slate-100">
  {/* Content */}
</div>
```

**Interactive card (with hover glow):**
```tsx
<div className="bg-white rounded-2xl shadow-soft-md p-8 hover:shadow-glow-teal hover:scale-105 transition-all duration-300 border border-slate-100 cursor-pointer">
  {/* Content */}
</div>
```

**Pricing card:**
```tsx
<div className="bg-white rounded-3xl shadow-soft-xl p-10 border border-slate-100 hover:border-teal-500 hover:shadow-glow-teal transition-all duration-300">
  <h3 className="text-3xl font-bold mb-4 text-slate-900">Agent</h3>
  <div className="text-5xl font-bold mb-8">
    <span className="bg-gradient-to-r from-teal-500 to-sky-600 bg-clip-text text-transparent">$49</span>
    <span className="text-lg font-normal text-slate-500">/mo</span>
  </div>
  {/* Features */}
</div>
```

### Forms

**Input field:**
```tsx
<input
  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
  placeholder="Property address"
/>
```

**Textarea:**
```tsx
<textarea
  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 resize-none"
  rows={4}
  placeholder="Property description"
/>
```

**Select dropdown:**
```tsx
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200">
  <option>Select property type</option>
</select>
```

---

## 🚫 Anti-Patterns (What NOT to Do)

### ❌ VoiceCraft Template Colors

**NEVER use:**
- `bg-yellow-400`, `bg-yellow-500`
- `border-black`, `border-4`
- `shadow-[0_8px_0_0_#000]` (harsh black drop shadows)
- `text-yellow-400` for emphasis

### ❌ Harsh/Brutalist Style

**NEVER use:**
- Sharp corners (`rounded`, `rounded-md` - too small)
- Black borders (`border-black`)
- Extreme font weights (`font-black`)
- Tight spacing (`p-2`, `p-4` on large components)

### ❌ Inconsistent Typography

**NEVER mix:**
- Different heading sizes without hierarchy
- Random font weights
- Inconsistent line heights

---

## ✅ Before/After Examples

### Example 1: Hero Section

**❌ BEFORE (VoiceCraft style):**
```tsx
<section className="py-12 px-4">
  <h1 className="text-4xl font-black mb-4">
    PROPERTY VIDEOS
  </h1>
  <p className="text-base mb-6">Create videos fast</p>
  <button className="bg-yellow-400 text-black border-4 border-black px-6 py-3 font-black shadow-[0_8px_0_0_#000]">
    START NOW
  </button>
</section>
```

**✅ AFTER (PropVideo style):**
```tsx
<section className="py-24 px-6 bg-gradient-to-br from-teal-50 to-sky-50">
  <h1 className="text-6xl font-bold mb-6 text-slate-900">
    Create Stunning Property Tour Videos in Minutes
  </h1>
  <p className="text-lg leading-relaxed text-slate-600 mb-8">
    Transform your listings with AI-powered video tours that sell faster
  </p>
  <button className="bg-gradient-to-r from-teal-500 to-sky-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 hover:shadow-glow-teal transition-all duration-300">
    Start Creating
  </button>
</section>
```

### Example 2: Pricing Card

**❌ BEFORE (VoiceCraft style):**
```tsx
<div className="border-4 border-black shadow-[0_8px_0_0_#000] rounded p-6">
  <h3 className="text-2xl font-black mb-2 uppercase">AGENT</h3>
  <div className="text-5xl font-black text-yellow-400 mb-4">$49</div>
  <button className="bg-yellow-400 text-black border-4 border-black px-6 py-2 font-black w-full">
    GET STARTED
  </button>
</div>
```

**✅ AFTER (PropVideo style):**
```tsx
<div className="bg-white rounded-3xl shadow-soft-xl p-10 border border-slate-100 hover:border-teal-500 hover:shadow-glow-teal transition-all duration-300">
  <h3 className="text-3xl font-bold mb-4 text-slate-900">Agent</h3>
  <div className="text-5xl font-bold mb-8">
    <span className="bg-gradient-to-r from-teal-500 to-sky-600 bg-clip-text text-transparent">$49</span>
    <span className="text-lg font-normal text-slate-500">/mo</span>
  </div>
  <button className="bg-gradient-to-r from-teal-500 to-sky-600 text-white px-6 py-3 rounded-xl font-semibold w-full hover:scale-105 transition-all duration-300">
    Get Started
  </button>
</div>
```

---

## 📊 Color Usage Breakdown

| Use Case | Color | Class |
|----------|-------|-------|
| Primary CTA background | Teal → Sky gradient | `bg-gradient-to-r from-teal-500 to-sky-600` |
| Secondary CTA background | Sky → Indigo gradient | `bg-gradient-to-r from-sky-500 to-indigo-600` |
| Hover glow (primary) | Teal | `hover:shadow-glow-teal` |
| Hover glow (secondary) | Sky | `hover:shadow-glow-sky` |
| Focus ring | Teal | `focus:ring-teal-500/20` |
| Border hover | Teal | `hover:border-teal-500` |
| Text gradient | Teal → Sky | `bg-gradient-to-r from-teal-500 to-sky-600 bg-clip-text text-transparent` |
| Background gradient | Teal → Sky (light) | `bg-gradient-to-br from-teal-50 to-sky-50` |
| Link color | Sky | `text-sky-600 hover:text-sky-700` |
| Icon accent | Indigo | `text-indigo-500` |

---

## 🎯 Design System Checklist

Before committing any component, verify:

- [ ] Uses only Teal/Sky/Indigo colors (NO yellow/orange/emerald)
- [ ] Shadows are soft (`shadow-soft-*`)
- [ ] Corners are rounded (`rounded-xl` or larger)
- [ ] Spacing is generous (`p-8+`, `gap-6+`, `py-24+` on sections)
- [ ] Typography follows hierarchy (5xl → 4xl → 3xl)
- [ ] Hover states are smooth with transitions
- [ ] Gradients use approved color combinations
- [ ] No harsh black borders or brutalist elements
- [ ] Mobile responsive (tested at 375px width)
- [ ] Accessibility: proper contrast, alt text, focus states

---

## 📱 Responsive Design

**Breakpoints:**
```tsx
sm: 640px   // Small tablets
md: 768px   // Tablets
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1536px // Extra large desktop
```

**Common responsive patterns:**
```tsx
// Padding
className="py-16 md:py-24 px-6 md:px-8"

// Typography
className="text-4xl md:text-5xl lg:text-6xl"

// Grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Flexbox
className="flex flex-col md:flex-row gap-6"
```

---

**This is the visual identity of PropVideo. Follow it religiously.** 🏡✨
