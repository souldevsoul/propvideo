# PropVideo - Complete Product Specification

## 🎯 Brand Concept & Vision

### What is PropVideo?

**PropVideo** is an AI-powered property tour video generation platform that combines instant AI video creation with professional human videographer refinement.

**The Core Innovation:**
We offer a hybrid workflow where real estate agents can generate property tour videos in minutes using AI, then optionally hire professional videographers for refinement and polish.

### Value Proposition

**For Real Estate Agents:**
- Create professional property tour videos in 5 minutes, not 5 days
- No videography skills or expensive equipment needed
- Share directly to social media (Instagram, TikTok, YouTube, Zillow)
- Track engagement and views per listing

**For Real Estate Teams:**
- Standardize video quality across all listings
- Reduce cost per video by 90%
- Scale video production across entire portfolio
- White-label option for brokerage branding

### Unique Selling Points

1. **AI + Human Hybrid** - Start with AI speed, finish with human quality
2. **Upload Photos → Get Video** - No filming required
3. **Multiple Tour Styles** - Luxury, modern, cozy, dramatic, energetic, elegant
4. **Auto-Generated Voiceover** - Professional scripts and narration
5. **Multi-Platform Export** - Instagram Reels (9:16), YouTube (16:9), TikTok (9:16)
6. **Agent Branding** - Add logo, contact info, brokerage details
7. **Analytics Dashboard** - Track views, shares, engagement per video

---

## 🎨 Visual Brand Identity

**See BRAND_GUIDE.md for complete visual specifications.**

**Quick Reference:**
- Primary: Teal (#14B8A6) - Professional, real estate
- Secondary: Sky Blue (#0EA5E9) - Trust, openness
- Accent: Indigo (#6366F1) - Modern, tech
- Style: Clean, spacious, professional
- Shadows: Soft, not harsh
- Corners: Rounded (xl, 2xl, 3xl)

---

## 🔄 Core User Flows

### Flow 1: New Agent → First AI Video

```
1. Agent lands on homepage
   ↓
2. Clicks "Create Property Video" CTA
   ↓
3. [If not logged in] → Sign up/login (Clerk Auth)
   ↓
4. Arrives at /dashboard/properties/new
   ↓
5. Fills property form:
   - Address (required)
   - Property type (dropdown)
   - Price, beds, baths, sqft
   - Description (optional)
   ↓
6. Uploads property photos (drag-drop or file picker)
   - Minimum 5 photos
   - Tags each photo (exterior, living room, kitchen, etc.)
   - Arranges tour sequence
   ↓
7. Clicks "Next: Configure Video"
   ↓
8. Video configuration page:
   - Select tour style (Luxury, Modern, Cozy, etc.)
   - Select duration (30s, 60s, 90s)
   - Select aspect ratio (16:9, 9:16, 1:1)
   - Preview AI-generated voiceover script (editable)
   - Select voice style (Professional, Friendly, Luxury)
   - Select background music track
   - Add branding (agent name, phone, logo)
   ↓
9. Clicks "Generate Video"
   ↓
10. Video generation starts (Replicate API)
    - Status: "Processing"
    - Progress bar shows AI working
    - Estimated time: 2-4 minutes
    ↓
11. Video completes
    - Status: "Completed"
    - Full-screen video preview
    - Download button
    - Share button (social media)
    - "Hire Videographer" button
    ↓
12. Agent downloads video
    - Selects format (Instagram, YouTube, TikTok)
    - Downloads optimized video
    ↓
13. Success! Video ready to share
```

**Happy Path Checkpoints:**
- ✅ Property form validates properly
- ✅ Photo upload works (drag-drop + file picker)
- ✅ Photo tagging and sequencing functional
- ✅ AI script generation creates relevant copy
- ✅ Video generation completes in 2-4 minutes
- ✅ Video plays smoothly in preview
- ✅ Download delivers correct format
- ✅ Branding overlays correctly

---

### Flow 2: Agent → Hire Videographer for Refinement

```
1. Agent has AI-generated video
   ↓
2. Reviews video, decides it needs professional touch
   ↓
3. Clicks "Hire Videographer" button
   ↓
4. Modal opens explaining service:
   - "Professional videographer will enhance your AI video"
   - "Includes: Re-editing, color grading, transitions, music"
   - "Delivered in 3-5 business days"
   - "Cost: $199 (standard) or $299 (rush 24-48hr)"
   ↓
5. Fills videographer brief form:
   - What to improve (checkboxes):
     - [ ] Better transitions
     - [ ] Color grading
     - [ ] Different music
     - [ ] Re-arrange photo sequence
     - [ ] Add text overlays
     - [ ] Other (specify)
   - Additional instructions (textarea)
   - Inspiration videos (upload or URL)
   - Delivery speed (Standard or Rush)
   ↓
6. [If insufficient credits] → Redirect to /pricing
   ↓
7. Payment flow (Stripe):
   - Select package (Standard $199 or Rush $299)
   - Stripe checkout
   - Payment confirms
   ↓
8. Videographer request created
   ↓
9. Email sent to videographer team
   ↓
10. Dashboard shows "In Progress" status
    ↓
11. Videographer uploads refined version
    ↓
12. Agent receives notification
    ↓
13. Agent reviews refined video in dashboard
    ↓
14. Agent can:
    - Approve (final files unlocked)
    - Request revision (1 revision included)
    ↓
15. Final approved video downloadable
    ↓
16. Success! Professional video delivered
```

**Happy Path Checkpoints:**
- ✅ Videographer request form clear and complete
- ✅ Payment flow works (Stripe integration)
- ✅ Agent receives confirmation email
- ✅ Status updates show in dashboard
- ✅ Videographer can upload files
- ✅ Agent can request revisions
- ✅ Final files downloadable in all formats

---

### Flow 3: Returning Agent → Browse Property Library

```
1. Agent logs in
   ↓
2. Lands on /dashboard
   ↓
3. Sees:
   - Property library (grid view)
   - Active videographer projects (status cards)
   - "Create New Video" button
   - Analytics overview (total views, shares)
   ↓
4. Clicks on past property
   ↓
5. Property detail page:
   - Property info
   - All generated videos (AI + refined)
   - Photos used
   - Download buttons
   - "Create New Variation" button
   - "Share to Social" button
   - View analytics
   ↓
6. Agent can:
   - Download again (no extra charge)
   - Create new variation (different style/duration)
   - Share to social media
   - View engagement analytics
   - Hire videographer for refinement
```

**Happy Path Checkpoints:**
- ✅ All properties visible in library
- ✅ Properties load with correct metadata
- ✅ Download works without re-generation
- ✅ Analytics show accurate view/share counts
- ✅ Variations respect original property data

---

## 💳 Pricing & Plans

### Subscription Tiers

| Tier | Price | Videos/Month | AI Generation | Videographer Access | Features |
|------|-------|--------------|---------------|---------------------|----------|
| **Free** | $0 | 3 | ✅ | ❌ | Basic styles, watermark, 720p |
| **Agent** | $49/mo | 25 | ✅ | ✅ | All styles, no watermark, 1080p, branding |
| **Team** | $149/mo | 100 | ✅ | ✅ | Everything + 5 seats + analytics |
| **Brokerage** | $499/mo | Unlimited | ✅ | ✅ | Everything + 25 seats + white-label + API |

### À la Carte Services

**Videographer Refinement:**
- Standard (3-5 days): $199 per video
- Rush (24-48hr): $299 per video

**Add-On Credits:**
- 10 videos: $49
- 30 videos: $129 (save 12%)
- 100 videos: $399 (save 18%)

---

## 🤖 Replicate Integration

### AI Models Used

**Primary: google/veo-3.1**
- **Purpose:** AI video generation from images
- **Output:** MP4 video files
- **Speed:** ~2-4 minutes per 60s video
- **Best for:** All tour styles

**Alternative: luma/ray**
- **Purpose:** Image-to-video generation
- **Output:** MP4 video files
- **Speed:** ~1-3 minutes
- **Best for:** Fast generation, shorter videos

**Voiceover: minimax/video-01 or elevenlabs**
- **Purpose:** Professional voiceover narration
- **Output:** Audio track (merged with video)
- **Speed:** ~30 seconds
- **Voices:** Professional, Friendly, Luxury, Energetic

### Generation Flow

```typescript
// /app/api/videos/generate/route.ts

export async function POST(req: Request) {
  // 1. Parse request
  const { propertyId, style, duration, aspectRatio, userId } = await req.json()

  // 2. Check user quota/subscription
  const user = await db.user.findUnique({ where: { id: userId }})
  if (!canGenerateVideo(user)) {
    return Response.json({ error: "Video limit reached" }, { status: 402 })
  }

  // 3. Fetch property and photos
  const property = await db.property.findUnique({
    where: { id: propertyId },
    include: { photos: { orderBy: { order: 'asc' } } }
  })

  // 4. Generate voiceover script (AI)
  const script = await generateVoiceoverScript(property, style)

  // 5. Generate voiceover audio (Replicate)
  const audioUrl = await generateVoiceover(script, voiceStyle)

  // 6. Call Replicate video generation API
  try {
    const prediction = await replicate.predictions.create({
      model: "google/veo-3.1",
      input: {
        images: property.photos.map(p => p.photoUrl),
        prompt: buildVideoPrompt(property, style),
        duration: duration,
        aspect_ratio: aspectRatio,
        audio: audioUrl,
        music_track: musicTrack,
      }
    })

    // 7. Save video record (status: processing)
    const video = await db.propertyVideo.create({
      data: {
        propertyId,
        userId,
        tourStyle: style,
        duration,
        aspectRatio,
        voiceoverText: script,
        status: "processing",
        replicateId: prediction.id,
      }
    })

    return Response.json({ videoId: video.id, status: "processing" })

  } catch (error) {
    return Response.json({ error: "Generation failed" }, { status: 500 })
  }
}
```

### Webhook Handler

```typescript
// /app/api/webhooks/replicate/route.ts

export async function POST(req: Request) {
  const webhook = await req.json()

  if (webhook.status === "succeeded") {
    // Upload to Vercel Blob for permanent storage
    const videoUrl = await uploadToBlob(webhook.output)

    // Update video record
    await db.propertyVideo.update({
      where: { replicateId: webhook.id },
      data: {
        status: "completed",
        videoUrl: videoUrl,
      }
    })

    // Send notification to agent
    await sendVideoReadyEmail(video.userId, video.id)
  }

  if (webhook.status === "failed") {
    await db.propertyVideo.update({
      where: { replicateId: webhook.id },
      data: { status: "failed" }
    })
  }

  return Response.json({ success: true })
}
```

---

## 🗄️ Database Schema

```prisma
// Property & Photos
model Property {
  id String @id @default(cuid())
  userId String
  user User @relation(fields: [userId], references: [id])

  // Property Details
  address String
  city String
  state String
  zipCode String
  propertyType String  // "single-family", "condo", "townhouse", etc.
  listingType String   // "sale", "rent"
  price Decimal?
  bedrooms Int?
  bathrooms Decimal?
  sqft Int?
  description String? @db.Text

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
  roomType String?  // "exterior", "living", "kitchen", "bedroom", "bathroom"
  order Int  // Sequence in tour

  uploadedAt DateTime @default(now())

  @@index([propertyId, order])
}

// Generated Videos
model PropertyVideo {
  id String @id @default(cuid())
  propertyId String
  property Property @relation(fields: [propertyId], references: [id], onDelete: Cascade)
  userId String
  user User @relation(fields: [userId], references: [id])

  // Video Configuration
  tourStyle String  // "luxury", "modern", "cozy", "dramatic", "energetic", "elegant"
  duration Int @default(60)  // seconds (30, 60, 90, 120)
  aspectRatio String @default("16:9")  // "16:9", "9:16", "1:1"

  // Content
  voiceoverText String @db.Text  // AI-generated script
  voiceStyle String @default("professional")  // "professional", "friendly", "luxury"
  musicTrack String?  // Selected background music

  // Branding
  agentName String?
  agentPhone String?
  agentEmail String?
  agentLogoUrl String?

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

// Videographer Requests
model VideographerRequest {
  id String @id @default(cuid())
  userId String
  user User @relation(fields: [userId], references: [id])
  videoId String
  video PropertyVideo @relation(fields: [videoId], references: [id])

  brief String @db.Text  // What to improve
  inspirationUrls String[]
  priority String  // "standard", "rush"
  status String @default("pending")  // "pending", "in_progress", "completed"

  videographerId String?
  refinedVideoUrl String?

  createdAt DateTime @default(now())
  completedAt DateTime?
}

// User & Subscription
model User {
  id String @id @default(cuid())
  email String @unique
  name String?
  plan String @default("free")  // "free", "agent", "team", "brokerage"
  videosRemaining Int @default(3)  // Resets monthly

  properties Property[]
  videos PropertyVideo[]
  requests VideographerRequest[]

  createdAt DateTime @default(now())
}
```

---

## 🛣️ API Routes

**Properties:**
- `POST /api/properties/create` - Create property
- `POST /api/properties/[id]/upload-photos` - Upload photos
- `GET /api/properties` - List user properties
- `GET /api/properties/[id]` - Get property details
- `PATCH /api/properties/[id]` - Update property
- `DELETE /api/properties/[id]` - Delete property

**Videos:**
- `POST /api/videos/generate` - Generate video (Replicate)
- `GET /api/videos/[id]` - Get video status and URL
- `GET /api/videos` - List user videos
- `DELETE /api/videos/[id]` - Delete video

**Videographer:**
- `POST /api/videographer/request` - Request refinement
- `GET /api/videographer/requests` - List requests
- `GET /api/videographer/requests/[id]` - Get request details

**Analytics:**
- `POST /api/analytics/[videoId]/view` - Track view
- `POST /api/analytics/[videoId]/share` - Track share
- `GET /api/analytics/overview` - Get analytics dashboard

**Webhooks:**
- `POST /api/webhooks/replicate` - Video generation complete
- `POST /api/webhooks/stripe` - Payment events

---

## 📄 Key Pages

### Homepage (/)

**Sections:**
1. Hero - "Create Stunning Property Tour Videos in Minutes"
2. How It Works (3 steps)
3. Tour Styles Showcase (6 cards with examples)
4. AI + Human Hybrid explanation
5. Features grid (8 items)
6. Testimonials (3 agents)
7. Pricing table (4 tiers)
8. Final CTA

### Dashboard (/dashboard)

**Layout:**
- Top bar (logo, credits/videos remaining, user dropdown)
- Hero section ("Welcome back, [Name]!")
- Property library (grid)
- Recent videos (carousel)
- Active videographer projects (cards)
- Analytics overview (views, shares)

### Property Editor (/dashboard/properties/new)

**Steps:**
1. Property details form
2. Photo upload (drag-drop)
3. Photo tagging and sequencing
4. Video configuration
5. Review and generate

### Video Player (/dashboard/videos/[id])

**Features:**
- Full-screen video preview
- Download button (format selector)
- Share to social (Instagram, TikTok, YouTube)
- Analytics (views, shares, engagement)
- "Hire Videographer" CTA
- Property details sidebar

---

## ✅ End Goal Verification Checklist

### Marketing Pages Complete?
- [ ] Homepage has all 8 sections
- [ ] Pricing page shows all 4 tiers
- [ ] All CTAs lead to correct destinations
- [ ] Mobile responsive
- [ ] Design system consistent (teal/sky/indigo)

### User Flows Working?
- [ ] User can sign up/login
- [ ] User can create property
- [ ] User can upload photos
- [ ] AI video generation works (Replicate)
- [ ] Video displays correctly
- [ ] User can download video
- [ ] User can hire videographer
- [ ] Payment flow works (Stripe)

### Database Complete?
- [ ] All models defined in Prisma
- [ ] Migrations run successfully
- [ ] Relationships configured correctly

### Replicate Integration Working?
- [ ] API connection established
- [ ] Video generation succeeds
- [ ] Webhook receives completion
- [ ] Videos upload to Vercel Blob

---

**This is the complete specification for PropVideo. Follow it religiously.** 🏡✨
