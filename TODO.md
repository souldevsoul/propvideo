# TODO.md - PropVideo

AI Property Tour Video Platform - Task breakdown. **Time:** 22-28 hours

---

## PHASE 1: BRANDING & SETUP (2h)

- [ ] Update Tailwind config: Sky Blue (#0EA5E9), Slate (#475569), Emerald (#10B981)
- [ ] Replace "VoiceCraft" → "PropVideo" across all pages
- [ ] Update favicon and meta tags (property/real estate theme)
- [ ] Update app/layout.tsx with new branding

---

## PHASE 2: DATABASE MIGRATION (2h)

- [ ] Remove Voice, VoiceGeneration, VoiceTemplate, Audio, ProjectAudio models
- [ ] Add Property model (address, city, state, propertyType, listingType, price, bedrooms, bathrooms, sqft, description)
- [ ] Add PropertyPhoto model (propertyId, photoUrl, roomType, caption, order)
- [ ] Add PropertyVideo model (propertyId, tourStyle, duration, aspectRatio, voiceoverText, voiceStyle, musicTrack, agentName, videoUrl, status, views, shares)
- [ ] Add TourStyle model (name, displayName, description, exampleVideoUrl, transitionStyle, colorGrading, pace, musicGenre)
- [ ] Run `npx prisma generate` and `npx prisma db push`

---

## PHASE 3: API ROUTES (6h)

### Property Management
- [ ] `POST /api/properties/create` - Create property listing
  - Validate address, property type, listing type
  - Create Property record
  - Return property ID
- [ ] `POST /api/properties/[id]/upload-photos` - Upload photos
  - Accept multiple image files
  - Upload to Vercel Blob
  - Create PropertyPhoto records with order
  - Tag room types automatically (optional AI enhancement)
- [ ] `PATCH /api/properties/[id]` - Update property details
- [ ] `GET /api/properties` - List user properties with photo counts
- [ ] `GET /api/properties/[id]` - Get property with all photos and videos
- [ ] `DELETE /api/properties/[id]` - Delete property and cascade

### Video Generation
- [ ] `POST /api/videos/generate` - Generate tour video
  - Validate property has at least 5 photos
  - Generate voiceover script using OpenAI (based on property details)
  - Create PropertyVideo record with status: 'processing'
  - Call Replicate (google/veo-3.1 or luma/ray)
    - Input: Sequence of property photos with transitions
    - Style: Based on selected tourStyle
    - Duration: 30-120 seconds
  - Generate voiceover audio (minimax or elevenlabs)
  - Composite video + voiceover + music
  - Upload final video to Vercel Blob
  - Update status to 'completed'
- [ ] `PATCH /api/videos/[id]` - Update video settings
  - Allow editing voiceover text, music, branding
  - Mark for regeneration if needed
- [ ] `POST /api/videos/[id]/regenerate` - Regenerate with new settings
- [ ] `DELETE /api/videos/[id]` - Delete video

### Tour Styles
- [ ] `GET /api/tour-styles` - List all available styles with examples
- [ ] Seed database with 6-8 tour styles (luxury, modern, cozy, dramatic, energetic, elegant, rustic, minimalist)

### Analytics
- [ ] `POST /api/analytics/[videoId]/view` - Track video view
- [ ] `POST /api/analytics/[videoId]/share` - Track social share
- [ ] `GET /api/analytics/[videoId]` - Get video stats

---

## PHASE 4: COMPONENTS (5h)

- [ ] `property-form.tsx` - Create/edit property
  - Address autocomplete (Google Places API optional)
  - Property type selector
  - Price, bedrooms, bathrooms, sqft inputs
  - Description textarea
- [ ] `photo-uploader.tsx` - Drag-drop multi-file upload
  - Preview thumbnails
  - Room type tagging
  - Delete/reorder photos
- [ ] `photo-sequence-editor.tsx` - Reorder photos for tour
  - Drag-and-drop reordering
  - Preview sequence
  - Suggested order by room type
- [ ] `tour-style-selector.tsx` - Style gallery with previews
  - Grid of style cards with example videos
  - Style details (transitions, pace, mood)
- [ ] `voiceover-editor.tsx` - Edit script and select voice
  - Textarea for script editing
  - Voice style selector (professional, friendly, luxury, energetic)
  - Preview voiceover button
- [ ] `music-selector.tsx` - Music library browser
  - Filter by mood (upbeat, calm, dramatic, elegant)
  - Preview audio clips
- [ ] `branding-editor.tsx` - Agent branding
  - Agent name, phone, email inputs
  - Logo upload
  - Brokerage name
  - Preview branding overlay
- [ ] `video-preview.tsx` - Video player with controls
  - Full-screen player
  - Download button (multiple formats)
  - Share buttons (social media, copy link)
- [ ] `video-analytics.tsx` - Stats dashboard
  - Views, shares, downloads charts
  - Engagement timeline
- [ ] `export-modal.tsx` - Export for different platforms
  - Format selector (16:9, 9:16, 1:1, 4:5)
  - Quality selector (1080p, 720p, 480p)
  - Platform presets (Instagram Story, YouTube, Facebook, Zillow)

---

## PHASE 5: PAGES (3.5h)

- [ ] Update `app/page.tsx` - "Create Stunning Property Tours"
  - Hero with demo video
  - Tour style showcase
  - Agent testimonials
  - Before/after comparison (photo gallery vs video tour)
- [ ] Update `app/dashboard/page.tsx` - Property library
  - Grid of properties with thumbnails
  - Video count per property
  - Quick actions (add property, generate video)
- [ ] Create `app/properties/[id]/page.tsx` - Property editor
  - Property details form
  - Photo uploader and sequence editor
  - Generate video button
- [ ] Create `app/videos/generate/page.tsx` - Video generator
  - Multi-step wizard:
    1. Select property
    2. Choose tour style
    3. Customize voiceover
    4. Select music
    5. Add branding
    6. Generate & preview
- [ ] Create `app/videos/[id]/page.tsx` - Video viewer
  - Full-screen video player
  - Analytics panel
  - Share/download options
  - Edit/regenerate button
- [ ] Update `app/pricing/page.tsx` - Agent, Team, Brokerage tiers

---

## PHASE 6: TOUR STYLES & MUSIC (2h)

### Seed Tour Styles
- [ ] Create 8 tour styles with example videos:
  1. **Luxury** - Slow, elegant, warm grading, orchestral
  2. **Modern** - Medium pace, cool grading, ambient
  3. **Cozy** - Slow, warm grading, acoustic
  4. **Dramatic** - Fast, high contrast, epic music
  5. **Energetic** - Fast, vibrant, upbeat music
  6. **Elegant** - Slow, neutral grading, classical
  7. **Rustic** - Medium, warm grading, folk music
  8. **Minimalist** - Slow, muted grading, minimal ambient

### Music Library
- [ ] Source 20-30 royalty-free music tracks
  - Categorize by mood (upbeat, calm, dramatic, elegant, ambient)
  - Store metadata in database or config file
  - Upload to Vercel Blob

---

## PHASE 7: REPLICATE INTEGRATION (3h)

### Video Generation
- [ ] Implement Replicate video generation
  - Model: `google/veo-3.1` or `luma/ray`
  - Input: Photo sequence with transition prompts
  - Apply color grading based on tour style
  - Generate 30-120 second video
- [ ] Implement voiceover generation
  - Model: `minimax` or `elevenlabs`
  - Input: Voiceover script
  - Voice style based on user selection
- [ ] Video composition
  - Composite generated video + voiceover + music
  - Add branding overlay (agent info, logo)
  - Export in multiple aspect ratios

### Webhook Handling
- [ ] `POST /api/webhooks/replicate` - Handle completion
  - Update PropertyVideo status
  - Upload final video to Vercel Blob

---

## PHASE 8: IMAGES & ASSETS (2.5h)

- [ ] Generate PropVideo logo (house + video camera icon) using Recraft V3
- [ ] Generate hero video (property tour demo) using Luma
- [ ] Generate 6 tour style example videos (30s each)
- [ ] Generate UI mockups (property editor, video generator, analytics)
- [ ] Generate agent testimonial photos

---

## PHASE 9: TESTING (3h)

- [ ] Test: Create property with 10+ photos
- [ ] Test: Reorder photos in sequence editor
- [ ] Test: Generate 60-second luxury tour video
- [ ] Test: Edit voiceover script and regenerate
- [ ] Test: Change music track
- [ ] Test: Add agent branding (name, logo, phone)
- [ ] Test: Export video in multiple formats (16:9, 9:16, 1:1)
- [ ] Test: Track video views and shares
- [ ] Test: Video plays correctly on mobile

---

## PHASE 10: DEPLOYMENT (2h)

- [ ] Deploy to Vercel
- [ ] Configure environment variables (REPLICATE_API_TOKEN, BLOB_READ_WRITE_TOKEN, OPENAI_API_KEY)
- [ ] Test production build
- [ ] Verify video generation works in production
- [ ] Test download and sharing features

---

**TOTAL:** 22-28 hours
