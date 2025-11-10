# CLAUDE.md - PropVideo

**AI Property Tour Video Generation Platform**

Transform VoiceCraft into PropVideo - create cinematic property tour videos for real estate listings with AI-generated tours, professional voiceovers, and music.

---

## ⚠️ CRITICAL LESSONS FROM CLIPMASTER (READ FIRST!)

**When adapting VoiceCraft, apply these 7 lessons learned from ClipMaster transformation:**

### 1. **DESIGN SYSTEM MUST BE COMPLETELY DIFFERENT**
❌ Don't just change colors - Transform the entire visual style!
- VoiceCraft: Brutalist (black borders, sharp corners, yellow)
- **Your project**: Create UNIQUE visual identity for real estate platform
- **Action**: Don't keep border-4 border-black, brutalist-shadow
- **Action**: Choose style: Professional (clean, trustworthy), Luxury (premium, refined), Modern (sleek, tech), or Classic (traditional, elegant)

### 2. **COMPONENT STYLING OVERHAUL REQUIRED**
❌ Don't just update pages - Redesign ALL UI components!
- **Files to update:** button.tsx, card.tsx, header.tsx, footer.tsx, NewsletterPopup.tsx, globals.css
- **Action**: Match components to real estate professional aesthetic

### 3. **BRANDING CONSISTENCY**
❌ Don't mix uppercase/lowercase!
- **Your choice**: UPPERCASE, lowercase, or Title Case - pick ONE
- **Action**: Update everywhere (Header, Footer, legal docs, meta tags)

### 4. **VISUAL ELEMENTS - COMPLETE REPLACEMENT**
❌ Don't reuse VoiceCraft images!
- **Action**: Delete all microphone/waveform images
- **Action**: Generate property tour examples (see IMAGES_SCRIPT.md)

### 5. **TYPOGRAPHY & SPACING**
❌ Don't keep VoiceCraft font styles!
- **Action**: Choose professional, trustworthy fonts for real estate

### 6. **ANIMATION & INTERACTIONS**
❌ Don't keep same animations!
- **Action**: Create smooth, professional transitions

### 7. **LAYOUT PATTERNS**
❌ Don't copy VoiceCraft sections!
- **Action**: Redesign for property showcase
- **Action**: Add video tour galleries

---

## 🎯 PROJECT OVERVIEW

**Core Functionality:**
- Upload property photos or listing details
- AI generates cinematic video tour from photos
- Auto-generate professional voiceover script
- Add background music and transitions
- Multiple tour styles (luxury, modern, cozy, dramatic, etc.)
- Export for social media (Instagram, TikTok, YouTube, Zillow)
- Branding overlay with agent info and logo
- Analytics on video views and engagement

**Replicate Models:** `google/veo-3.1` or `luma/ray` (video generation), `minimax/video-01` (alternative), `meta/meta-llama-3-70b-instruct` (script generation), `elevenlabs` or `minimax` (voiceover)

**Tech Stack:** Next.js 16.0.1 · Prisma + PostgreSQL · Vercel Blob · Replicate API · OpenAI API · Stripe

---

## 🎨 BRAND COLORS

```css
/* NEW (PropVideo) */
--primary: #0EA5E9;    /* Sky Blue 500 - Trust, openness, sky/space */
--secondary: #475569;  /* Slate 600 - Professional, stable, modern */
--accent: #10B981;     /* Emerald 500 - Growth, prosperity, success */
```

**Rationale:** Sky blue evokes trust and openness (key in real estate), slate provides professional grounding, emerald represents growth and prosperity.

---

## 🗄 DATABASE SCHEMA

### DELETE: Voice models
```prisma
// Remove these VoiceCraft-specific models:
model Voice { }
model VoiceGeneration { }
model VoiceTemplate { }
model Audio { }
model ProjectAudio { }
```

### ADD: Property tour models
```prisma
model Property {
  id String @id @default(cuid())
  userId String

  // Property Details
  address String
  city String
  state String
  zipCode String
  propertyType String  // "single-family", "condo", "townhouse", "multi-family", "commercial", "land"
  listingType String   // "sale", "rent", "sold", "lease"
  price Decimal?
  bedrooms Int?
  bathrooms Decimal?
  sqft Int?
  lotSize Decimal?
  yearBuilt Int?
  description String @db.Text

  // Listing Info
  mlsNumber String?
  listingStatus String @default("active")  // "active", "pending", "sold", "expired"
  listingDate DateTime?

  // Relations
  photos PropertyPhoto[]
  videos PropertyVideo[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model PropertyPhoto {
  id String @id @default(cuid())
  propertyId String
  property Property @relation(fields: [propertyId], references: [id], onDelete: Cascade)

  photoUrl String
  roomType String?  // "exterior", "living", "kitchen", "bedroom", "bathroom", "yard", "other"
  caption String?
  order Int  // For sequencing in tour

  uploadedAt DateTime @default(now())

  @@index([propertyId, order])
}

model PropertyVideo {
  id String @id @default(cuid())
  propertyId String
  property Property @relation(fields: [propertyId], references: [id], onDelete: Cascade)
  userId String

  // Video Configuration
  tourStyle String  // "luxury", "modern", "cozy", "dramatic", "energetic", "elegant"
  duration Int @default(60)  // seconds (30, 60, 90, 120)
  aspectRatio String @default("16:9")  // "16:9", "9:16", "1:1", "4:5"

  // Content
  voiceoverText String @db.Text  // AI-generated script
  voiceStyle String @default("professional")  // "professional", "friendly", "luxury", "energetic"
  musicTrack String?  // Selected background music

  // Branding
  agentName String?
  agentPhone String?
  agentEmail String?
  agentLogoUrl String?
  brokerageName String?

  // Generated Video
  videoUrl String?
  thumbnailUrl String?
  status String @default("processing")  // "processing", "completed", "failed"
  replicateId String?

  // Analytics
  views Int @default(0)
  shares Int @default(0)
  downloads Int @default(0)

  createdAt DateTime @default(now())

  @@index([propertyId])
  @@index([userId])
}

model TourStyle {
  id String @id @default(cuid())

  name String @unique  // "luxury", "modern", "cozy", etc.
  displayName String
  description String @db.Text
  exampleVideoUrl String?  // Demo video showing this style

  // Visual Settings
  transitionStyle String  // "smooth", "cinematic", "quick", "elegant"
  colorGrading String     // "warm", "cool", "neutral", "vibrant", "muted"
  pace String             // "slow", "medium", "fast"

  // Music Recommendations
  musicGenre String[]  // ["orchestral", "ambient", "modern"]

  popular Boolean @default(false)
  order Int

  createdAt DateTime @default(now())
}

// Keep these existing models:
model User {
  id String @id @default(cuid())
  email String @unique
  name String?
  // ... rest of User fields
}

model Subscription {
  // Stripe subscription for agents
}

model UsageLog {
  // Track video generation usage
}
```

---

## 🛣 API ROUTES

- `POST /api/properties/create` - Create property listing
- `POST /api/properties/[id]/upload-photos` - Upload property photos
- `PATCH /api/properties/[id]` - Update property details
- `DELETE /api/properties/[id]` - Delete property
- `GET /api/properties` - List all user properties
- `GET /api/properties/[id]` - Get property with photos and videos

- `POST /api/videos/generate` - Generate property tour video
- `GET /api/videos/[id]` - Get video status and URL
- `PATCH /api/videos/[id]` - Update video settings (voiceover, music, branding)
- `POST /api/videos/[id]/regenerate` - Regenerate with new settings
- `DELETE /api/videos/[id]` - Delete video

- `GET /api/tour-styles` - List available tour styles
- `POST /api/analytics/[videoId]/view` - Track video view
- `POST /api/analytics/[videoId]/share` - Track social share

---

## 📄 KEY PAGES

- **Homepage:** "Create Stunning Property Tour Videos in Minutes"
- **Dashboard:** Property library, video gallery, analytics
- **Property Editor:** Upload photos, add details, arrange tour sequence
- **Video Generator:** Select style, customize voiceover, preview, generate
- **Video Player:** Full-screen video preview with share/download options
- **Pricing:** Agent ($49/mo), Team ($149/mo), Brokerage ($499/mo)

---

## 🧩 COMPONENTS

- `property-form.tsx` - Create/edit property details
- `photo-uploader.tsx` - Drag-drop photo upload with room type tagging
- `photo-sequence-editor.tsx` - Reorder photos for tour flow
- `tour-style-selector.tsx` - Choose from style gallery
- `voiceover-editor.tsx` - Edit AI-generated script, select voice
- `music-selector.tsx` - Browse music library by mood
- `branding-editor.tsx` - Add agent info, logo, contact details
- `video-preview.tsx` - Preview video with download/share
- `video-analytics.tsx` - View/share stats per video
- `export-modal.tsx` - Export for different platforms (9:16, 1:1, etc.)

---

**Total Time:** 22-28 hours

**Next:** See `TODO.md`, `LANDING_PAGE_CONTENT.md`, `IMAGES_SCRIPT.md`
