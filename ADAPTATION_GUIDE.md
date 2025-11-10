# PropVideo - VoiceCraft Adaptation Guide

## 📋 Overview
**From:** Voice cloning → **To:** AI property video generation from photos
**Model:** Voice synthesis → Runway ML / Stable Video Diffusion for photo-to-video

## 🎨 Brand

### Colors
```css
--primary: #1E3A8A;    /* Blue 900 - Trust, Professionalism */
--secondary: #06B6D4;  /* Cyan 500 - Modern, Fresh */
--accent: #1E40AF;     /* Blue 800 - Interactive */
```

**VoiceCraft Colors (to replace):**
```css
--primary: #7C3AED;    /* Purple 600 */
--secondary: #3B82F6;  /* Blue 500 */
```

### Typography
- **Primary:** DM Sans (700 Bold, 500 Medium, 400 Regular) - Professional, modern
- **Secondary:** Inter (500 Medium for UI)

**VoiceCraft Typography (to replace):**
- Primary: Space Grotesk
- Secondary: Inter Variable

### Logo
House with play button window → represents property video tours

**AI Prompt:**
```
Professional logo for PropVideo real estate video platform. Symbol shows minimalist house outline with play button as front window. Gradient from navy blue (#1E3A8A) to cyan (#06B6D4). Modern, professional, real estate industry. Vector style, white background.
```

## 🗄️ Database Schema

```prisma
model Property {
  id String @id @default(cuid())
  userId String
  user User @relation(fields: [userId], references: [id])

  address String
  city String
  state String
  zipCode String
  propertyType String // house, condo, apartment, commercial

  price Int?
  bedrooms Int?
  bathrooms Int?
  squareFeet Int?

  photos PhotoUpload[]
  videos PropertyVideo[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model PhotoUpload {
  id String @id @default(cuid())
  propertyId String
  property Property @relation(fields: [propertyId], references: [id])

  filename String
  photoUrl String
  order Int
  caption String?

  createdAt DateTime @default(now())
}

model PropertyVideo {
  id String @id @default(cuid())
  propertyId String
  property Property @relation(fields: [propertyId], references: [id])

  videoUrl String
  thumbnailUrl String
  duration Int // seconds

  templateId String?
  template VideoTemplate? @relation(fields: [templateId], references: [id])

  musicTrack String?
  style String // luxury, family, modern, cozy

  // Agent branding
  agentName String?
  agentPhoto String?
  agentPhone String?
  agentEmail String?
  agentLogo String?

  views Int @default(0)
  shares Int @default(0)

  status String @default("processing") // processing, completed, failed

  createdAt DateTime @default(now())
}

model VideoTemplate {
  id String @id @default(cuid())

  name String
  description String
  style String // luxury, modern, family, commercial
  thumbnailUrl String

  transitions String[] // fadeIn, slideLeft, zoomIn, etc.
  musicGenre String?
  duration Int // seconds per photo

  videos PropertyVideo[]

  isPremium Boolean @default(false)
  createdAt DateTime @default(now())
}

model Agent {
  id String @id @default(cuid())
  userId String @unique
  user User @relation(fields: [userId], references: [id])

  brokerageName String?
  licenseNumber String?
  phone String
  email String

  logoUrl String?
  brandColor String? // hex code
  websiteUrl String?

  videosCreated Int @default(0)
  planTier String @default("agent") // agent, broker, agency

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model MusicTrack {
  id String @id @default(cuid())

  title String
  artist String
  genre String // luxury, upbeat, calm, modern
  duration Int // seconds
  audioUrl String

  isLicensed Boolean @default(true)
  isPremium Boolean @default(false)

  createdAt DateTime @default(now())
}
```

## 🔌 API Routes

### Video Generation
```typescript
// app/api/videos/generate/route.ts
export async function POST(request: NextRequest) {
  const { propertyId, templateId, musicTrack, agentInfo } = await request.json()

  const property = await prisma.property.findUnique({
    where: { id: propertyId },
    include: { photos: { orderBy: { order: 'asc' } } }
  })

  const template = await prisma.videoTemplate.findUnique({
    where: { id: templateId }
  })

  // Create video record
  const video = await prisma.propertyVideo.create({
    data: {
      propertyId,
      templateId,
      musicTrack,
      style: template.style,
      status: 'processing',
      ...agentInfo
    }
  })

  // Generate video using Replicate
  const output = await replicate.run(
    "stability-ai/stable-video-diffusion:model-id",
    {
      input: {
        images: property.photos.map(p => p.photoUrl),
        fps: 30,
        motion_bucket_id: 127,
        transition_style: template.transitions,
        duration: template.duration * property.photos.length
      }
    }
  )

  // Upload to Vercel Blob
  const videoBlob = await put(
    `videos/${propertyId}/${Date.now()}.mp4`,
    output.video,
    { access: 'public' }
  )

  // Add music and branding overlays
  const finalVideo = await addMusicAndBranding({
    videoUrl: videoBlob.url,
    musicTrack,
    agentInfo
  })

  // Update video record
  await prisma.propertyVideo.update({
    where: { id: video.id },
    data: {
      videoUrl: finalVideo.url,
      thumbnailUrl: finalVideo.thumbnailUrl,
      duration: finalVideo.duration,
      status: 'completed'
    }
  })

  return NextResponse.json({ success: true, video })
}

// app/api/videos/export/route.ts
export async function POST(request: NextRequest) {
  const { videoId, formats } = await request.json()

  const video = await prisma.propertyVideo.findUnique({
    where: { id: videoId }
  })

  const exports = []

  for (const format of formats) {
    let exportedVideo

    switch (format) {
      case 'mls':
        // 16:9, 1080p, max 2 min
        exportedVideo = await convertVideo(video.videoUrl, {
          aspectRatio: '16:9',
          resolution: '1920x1080',
          maxDuration: 120
        })
        break

      case 'instagram':
        // 9:16, 1080x1920, max 60s
        exportedVideo = await convertVideo(video.videoUrl, {
          aspectRatio: '9:16',
          resolution: '1080x1920',
          maxDuration: 60
        })
        break

      case 'facebook':
        // 1:1, 1080x1080
        exportedVideo = await convertVideo(video.videoUrl, {
          aspectRatio: '1:1',
          resolution: '1080x1080'
        })
        break

      case 'email':
        // Compressed version
        exportedVideo = await convertVideo(video.videoUrl, {
          bitrate: '1M',
          resolution: '720x480'
        })
        break
    }

    exports.push(exportedVideo)
  }

  return NextResponse.json({ success: true, exports })
}

// app/api/templates/list/route.ts
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const style = searchParams.get('style') // luxury, modern, family

  const templates = await prisma.videoTemplate.findMany({
    where: style ? { style } : {},
    orderBy: { createdAt: 'desc' }
  })

  return NextResponse.json({ templates })
}
```

## 🏠 Homepage Changes

```tsx
<section className="hero">
  <h1>Professional Property Videos in Minutes</h1>
  <p>
    Turn property photos into cinematic video tours. AI creates smooth walkthroughs,
    adds music, captions, and agent branding automatically.
  </p>

  <div className="video-generator">
    <div className="upload-zone">
      <Upload className="w-12 h-12 text-cyan-500" />
      <p>Upload 10-30 property photos</p>
      <Button variant="outline">Choose Photos</Button>
    </div>

    <div className="template-selector">
      <h3>Choose Video Style</h3>
      <div className="templates-grid">
        <TemplateCard name="Luxury" style="luxury" />
        <TemplateCard name="Modern" style="modern" />
        <TemplateCard name="Family" style="family" />
        <TemplateCard name="Commercial" style="commercial" />
      </div>
    </div>

    <Button className="bg-gradient-to-r from-blue-900 to-cyan-500">
      Create Video Tour
    </Button>
  </div>
</section>

<section className="features">
  <h2>Everything Real Estate Agents Need</h2>

  <div className="feature-grid">
    <Feature
      icon={<Images />}
      title="Photo-to-Video Magic"
      description="Upload 10-30 photos, AI creates smooth cinematic transitions and movements"
    />
    <Feature
      icon={<Palette />}
      title="Agent Branding"
      description="Add your logo, contact info, and custom colors to every video"
    />
    <Feature
      icon={<Music />}
      title="Licensed Music Library"
      description="1000+ tracks organized by style - luxury, modern, family-friendly"
    />
    <Feature
      icon={<Download />}
      title="Multi-Platform Export"
      description="MLS-ready, social media optimized, email-friendly formats"
    />
  </div>
</section>

<section className="templates">
  <h2>Professional Templates for Every Property</h2>

  <div className="templates-showcase">
    <VideoTemplate
      name="Luxury Estates"
      description="Slow pans, elegant transitions, classical music"
      thumbnail="/templates/luxury.jpg"
    />
    <VideoTemplate
      name="Modern Homes"
      description="Dynamic cuts, upbeat music, bold text"
      thumbnail="/templates/modern.jpg"
    />
    <VideoTemplate
      name="Family Properties"
      description="Warm tones, inviting feel, friendly narration"
      thumbnail="/templates/family.jpg"
    />
    <VideoTemplate
      name="Commercial Space"
      description="Professional showcase, corporate music"
      thumbnail="/templates/commercial.jpg"
    />
  </div>
</section>
```

## ✨ Features

- **Photo-to-Video Conversion** - AI creates smooth camera movements
- **Multiple Templates** - Luxury, modern, family, commercial styles
- **Agent Branding** - Logo, contact info, custom colors
- **Music Library** - 1000+ licensed tracks by genre
- **Multi-Platform Export** - MLS, Instagram, Facebook, email formats
- **Thumbnail Generator** - Auto-create eye-catching thumbnails
- **Analytics** - Track views and engagement
- **Team Collaboration** - Share templates across brokerage

## 💰 Pricing

```tsx
const tiers = [
  {
    name: "Agent",
    price: "$0/mo",
    features: [
      "3 videos per month",
      "Up to 15 photos per video",
      "720p resolution",
      "Watermark included",
      "10 music tracks",
      "Basic templates"
    ]
  },
  {
    name: "Broker",
    price: "$49/mo",
    popular: true,
    features: [
      "25 videos per month",
      "Up to 40 photos per video",
      "1080p resolution",
      "No watermark",
      "Full music library",
      "Agent branding",
      "All templates",
      "Multi-property packages",
      "Priority rendering"
    ]
  },
  {
    name: "Agency",
    price: "$199/mo",
    features: [
      "Unlimited videos",
      "Unlimited photos",
      "4K resolution",
      "No watermark",
      "Custom music uploads",
      "White-label option",
      "Team collaboration",
      "API access",
      "Priority support",
      "Custom templates",
      "Analytics dashboard"
    ]
  }
]
```

## 🎬 Replicate Integration

```typescript
// Video generation from photos
const output = await replicate.run(
  "stability-ai/stable-video-diffusion:3f0457e4619daac51203dedb472816fd4af51f3149fa7a9e0b5ffcf1b8172438",
  {
    input: {
      images: propertyPhotos, // Array of URLs
      fps: 24,
      motion_bucket_id: 127, // Controls motion intensity
      cond_aug: 0.02,
      decoding_t: 14
    }
  }
)

// Alternative: Use Runway Gen-2 for higher quality
const output = await replicate.run(
  "runway-ml/gen-2:model-id",
  {
    input: {
      images: propertyPhotos,
      style: "real estate tour",
      transition_duration: 2, // seconds per photo
      add_motion: true
    }
  }
)
```

## 🔄 Quick Replace Commands

```bash
# Replace brand name
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/VoiceCraft/PropVideo/g' {} +

# Replace core concepts
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/voice/property/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/audio/video/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/Voice/Property/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' 's/Audio/Video/g' {} +

# Replace colors
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i '' 's/#7C3AED/#1E3A8A/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i '' 's/#3B82F6/#06B6D4/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i '' 's/purple-600/blue-900/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i '' 's/blue-500/cyan-500/g' {} +
```

## 🧪 Testing Checklist

- [ ] Photo upload works (10-30 images)
- [ ] Video generation creates smooth transitions
- [ ] Templates apply correctly
- [ ] Music syncs with video length
- [ ] Agent branding overlays properly
- [ ] Multi-format export works (MLS, social, email)
- [ ] Thumbnail generation works
- [ ] All blue/cyan branding applied
- [ ] DM Sans font loads correctly
- [ ] Dashboard shows properties instead of voices

## 🚀 Environment Variables

```env
REPLICATE_API_TOKEN="r8_..."
DATABASE_URL="postgresql://..."
BLOB_READ_WRITE_TOKEN="vercel_blob_..."
NEXT_PUBLIC_APP_URL="https://propvideo.com"
```

## 📝 Notes

- **Video Processing** - Use Replicate's Stable Video Diffusion or Runway Gen-2
- **Music Licensing** - Integrate with Epidemic Sound or AudioJungle APIs
- **MLS Compliance** - Ensure video specs meet MLS requirements (max duration, resolution)
- **Agent Portal** - Build separate dashboard for real estate agents
- **Integration Options** - Consider Zillow, Realtor.com, Redfin integrations
- **Watermark Removal** - Only for paid plans

## 🏡 Real Estate Specific Features

```typescript
// Auto-generate property descriptions
const description = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{
    role: "system",
    content: `Generate compelling property description for:
    ${property.bedrooms} bed, ${property.bathrooms} bath
    ${property.squareFeet} sq ft ${property.propertyType}
    in ${property.city}, ${property.state}
    Price: $${property.price.toLocaleString()}`
  }]
})

// Add text overlays to video
const overlays = [
  { text: property.address, position: 'top', duration: 3 },
  { text: `${property.bedrooms} BR | ${property.bathrooms} BA`, position: 'bottom', duration: 3 },
  { text: `$${property.price.toLocaleString()}`, position: 'center', duration: 2 },
  { text: agentInfo.name, position: 'bottom-right', duration: 'persistent' }
]
```

---

*Sell properties faster with cinematic tours!* 🏡🎬
