# IMAGES_SCRIPT.md - PropVideo

Image generation guide for AI property tour video platform.

**Brand Colors:** Sky Blue (#0EA5E9), Slate (#475569), Emerald (#10B981)

---

## IMAGES NEEDED (~28 total)

### LOGOS (4)
1. **logo-main.svg** - House icon + video camera, sky blue/emerald gradient (Recraft V3 SVG)
2. **logo-icon.svg** - Icon only version, 512x512px
3. **logo-horizontal-light.svg** - For dark backgrounds
4. **logo-horizontal-dark.svg** - For light backgrounds

### HERO (2)
1. **hero-platform-demo.mp4** - Screen recording of creating property tour (Luma Ray, 30s, 1920x1080px)
2. **hero-agent-using.png** - Real estate agent at laptop creating tour, modern office (FLUX Pro, 1200x900px)

### FEATURE ICONS (6)
(Recraft V3, 256x256px SVG, sky blue/slate/emerald)
1. **icon-upload.svg** - Cloud upload with house/photos
2. **icon-ai-video.svg** - AI sparkles with play button
3. **icon-voiceover.svg** - Microphone with sound waves
4. **icon-music.svg** - Musical note with waveform
5. **icon-branding.svg** - Badge with agent logo placeholder
6. **icon-share.svg** - Share icon with social media symbols

### TOUR STYLE EXAMPLE VIDEOS (6)
(Google Veo-3.1 or Luma Ray, 30-second property tours, 1920x1080px)
1. **tour-luxury.mp4** - Luxury estate tour (slow, warm, orchestral)
2. **tour-modern.mp4** - Modern condo tour (medium, cool, ambient)
3. **tour-cozy.mp4** - Family home tour (slow, warm, acoustic)
4. **tour-dramatic.mp4** - Mountain property tour (fast, high contrast, epic)
5. **tour-energetic.mp4** - Renovated flip tour (fast, vibrant, upbeat)
6. **tour-elegant.mp4** - Victorian mansion tour (slow, neutral, classical)

### UI MOCKUPS (6)
(FLUX Pro, realistic app screenshots, 1920x1080px)
1. **mockup-upload.png** - Photo upload interface with 12 property photos
2. **mockup-sequence-editor.png** - Drag-drop photo ordering interface
3. **mockup-style-selector.png** - Grid of 6 tour styles with preview videos
4. **mockup-voiceover-editor.png** - Script editor with voice selector
5. **mockup-branding.png** - Agent branding editor (logo, name, phone)
6. **mockup-analytics.png** - Video analytics dashboard (views, shares, engagement)

### TESTIMONIALS (3)
(FLUX Pro, 400x400px, professional business photos)
1. **testimonial-sarah.jpg** - Female real estate agent in 30s, modern office
2. **testimonial-david.jpg** - Male real estate team lead in 40s, professional setting
3. **testimonial-jennifer.jpg** - Female luxury specialist in 40s, upscale office

### COMPARISON VISUALS (1)
1. **comparison-before-after.png** - Split screen: photo gallery vs video tour (FLUX Pro, 1920x1080px)

---

## REPLICATE PROMPTS

### Logo Main (Recraft V3 SVG)
```
Model: recraft-ai/recraft-v3-svg
Prompt: "Professional logo for 'PropVideo'. Combine house icon with video camera or film clapperboard. Sky blue (#0EA5E9) to emerald (#10B981) gradient. Modern, clean, real estate tech aesthetic. Represents property video tours. Vector style, scalable."
Parameters: { "style": "vector_illustration", "size": "1024x1024" }
```

### Hero Platform Demo (Luma Ray)
```
Model: luma/ray
Prompt: "Screen recording animation of property tour creation platform. Real estate agent interface: uploading property photos (living room, kitchen, bedroom, exterior), selecting 'Luxury' tour style, AI progress indicator, final cinematic video preview playing. Sky blue and slate UI colors. Professional real estate software aesthetic. Smooth transitions. 30-second workflow demonstration."
Parameters: { "duration": 30, "aspect_ratio": "16:9" }
```

### Hero Agent Using (FLUX Pro)
```
Model: black-forest-labs/flux-pro
Prompt: "Professional lifestyle photography. Female real estate agent in her 30s at modern desk using laptop, creating property tour video. Screen visible showing property photos and video interface. Modern real estate office with property listings on wall. Natural window light. Professional but approachable. High-end real estate marketing vibes."
Parameters: { "aspect_ratio": "4:3", "safety_tolerance": 2 }
```

### Feature Icons (Recraft V3 SVG) - Examples
```
Model: recraft-ai/recraft-v3-svg

Icon 1 - Upload:
Prompt: "Minimalist icon of cloud upload arrow with small house and photo gallery symbols. Sky blue (#0EA5E9). Clean lines. 256x256px."

Icon 2 - AI Video:
Prompt: "Minimalist icon of AI sparkles/stars with play button in center. Emerald (#10B981). Creation and generation theme. 256x256px."

Icon 3 - Voiceover:
Prompt: "Minimalist icon of microphone with sound waves radiating. Sky blue color. Audio narration theme. 256x256px."

Icon 4 - Music:
Prompt: "Minimalist icon of musical note with audio waveform. Slate (#475569) color. Background music theme. 256x256px."

Icon 5 - Branding:
Prompt: "Minimalist icon of badge/seal with placeholder logo star in center. Emerald color. Personal branding theme. 256x256px."

Icon 6 - Share:
Prompt: "Minimalist icon of share symbol with Instagram, Facebook, YouTube icons in circle. Sky blue gradient. Social sharing theme. 256x256px."
```

### Tour Style Example Videos (Google Veo-3.1)

**Important Note:** These are ACTUAL 30-second property tour videos showing different styles. Use realistic property descriptions.

```
Model: google/veo-3.1

Tour 1 - Luxury:
Prompt: "30-second luxury property tour video. Beachfront estate: slow pan across infinity pool with ocean view, elegant living room with floor-to-ceiling windows, marble gourmet kitchen, master suite with ocean views, sunset terrace. Slow elegant pacing with smooth cinematic transitions. Warm golden color grading. Soft focus blur on transitions. Professional real estate video quality. Orchestral background music vibe."
Parameters: { "duration": 30, "aspect_ratio": "16:9", "quality": "high" }

Tour 2 - Modern:
Prompt: "30-second modern condo tour video. Downtown penthouse: panoramic city skyline from glass walls, open-concept living with contemporary furniture, sleek Italian kitchen with quartz counters, spa bathroom with rain shower, rooftop terrace. Medium pacing with clean geometric transitions. Cool blue color grading. Sharp modern aesthetic. Professional architectural videography style. Ambient electronic background music vibe."
Parameters: { "duration": 30, "aspect_ratio": "16:9", "quality": "high" }

Tour 3 - Cozy:
Prompt: "30-second cozy family home tour video. Suburban house: welcoming front porch, warm living room with fireplace, family kitchen with breakfast nook, kids' bedrooms, backyard with play area and garden. Slow intimate pacing with gentle dissolve transitions. Warm golden hour color grading. Inviting comfortable feeling. Lifestyle real estate photography style. Acoustic guitar background music vibe."
Parameters: { "duration": 30, "aspect_ratio": "16:9", "quality": "high" }

Tour 4 - Dramatic:
Prompt: "30-second dramatic property tour video. Mountain estate: sweeping drone shot of mountain backdrop, grand stone and timber entrance, soaring great room with vaulted ceilings, chef's kitchen with views, master retreat, expansive deck overlooking valley. Fast dynamic pacing with bold cut transitions. High contrast color grading with deep shadows. Epic cinematic scale. Adventure real estate film style. Orchestral epic background music vibe."
Parameters: { "duration": 30, "aspect_ratio": "16:9", "quality": "high" }

Tour 5 - Energetic:
Prompt: "30-second energetic property tour video. Recently renovated home: fresh painted exterior, updated open living space, modern kitchen with new appliances, renovated bathrooms with new fixtures, finished backyard. Fast upbeat pacing with quick whip transitions. Vibrant saturated color grading. Fresh exciting feeling. Contemporary house flipping style. Upbeat indie rock background music vibe."
Parameters: { "duration": 30, "aspect_ratio": "16:9", "quality": "high" }

Tour 6 - Elegant:
Prompt: "30-second elegant historic home tour video. Victorian mansion: ornate front facade, grand foyer with chandelier and curved staircase, formal dining with coffered ceilings, library with built-in bookshelves, period bedrooms, manicured gardens. Slow graceful pacing with fade transitions. Neutral balanced color grading. Timeless sophisticated aesthetic. Luxury estate videography style. Classical piano background music vibe."
Parameters: { "duration": 30, "aspect_ratio": "16:9", "quality": "high" }
```

### UI Mockups (FLUX Pro)
```
Model: black-forest-labs/flux-pro

UI 1 - Upload:
Prompt: "Modern web application UI showing property photo upload interface. Drag-and-drop zone with 12 property photo thumbnails uploaded: exterior, living room, kitchen, 3 bedrooms, 2 bathrooms, dining, backyard, garage. Each photo has small 'X' delete button and room type tag. Sky blue accent color. Clean real estate software design."

UI 2 - Sequence Editor:
Prompt: "Modern web application UI showing photo sequence editor. Horizontal timeline with 10 property photos in sequence. Drag handles on each photo. Suggested order hint: 'Start with exterior, then main rooms'. Reorder instructions visible. Preview button. Sky blue and slate colors. Professional editing interface."

UI 3 - Style Selector:
Prompt: "Modern web application UI showing tour style gallery. 3x2 grid of style cards: Luxury (orchestral icon), Modern (ambient icon), Cozy (acoustic icon), Dramatic (epic icon), Energetic (upbeat icon), Elegant (classical icon). Each card has preview video thumbnail, style name, description, and 'Select' button. Sky blue selected state. Real estate platform design."

UI 4 - Voiceover Editor:
Prompt: "Modern web application UI showing voiceover script editor. Large textarea with AI-generated property description: 'Welcome to this stunning 4-bedroom estate...'. Voice style dropdown showing: Professional (selected), Friendly, Luxury, Energetic. Preview voiceover button. Word count: 180 words, Duration: 45 seconds. Sky blue accent. Professional editing interface."

UI 5 - Branding:
Prompt: "Modern web application UI showing agent branding editor. Upload logo zone with sample agent logo. Input fields: Agent Name (Sarah Martinez filled), Phone ((512) 555-0123), Email (sarah@remax.com), Brokerage (RE/MAX Austin). Branding preview panel showing overlay on video thumbnail. Sky blue form elements. Real estate marketing interface."

UI 6 - Analytics:
Prompt: "Modern web application UI showing video analytics dashboard. Top stats cards: 2,847 Total Views, 156 Shares, 89 Downloads. Line chart showing views over 30 days with upward trend. Pie chart: Platform breakdown (Facebook 45%, Instagram 30%, YouTube 15%, Direct 10%). Property address: 123 Ocean Drive. Sky blue and emerald data viz. Real estate analytics design."

Parameters for all: { "aspect_ratio": "16:9", "safety_tolerance": 2 }
```

### Testimonial Photos (FLUX Pro)
```
Model: black-forest-labs/flux-pro

Testimonial 1 - Sarah:
Prompt: "Professional portrait of female real estate agent in her 30s. Modern real estate office background with property listings visible. Business casual attire. Warm friendly smile. Confident and successful demeanor. Natural office lighting. Lifestyle photography quality for testimonials."

Testimonial 2 - David:
Prompt: "Professional portrait of male real estate team lead in his 40s. Contemporary office with large desk and dual monitors showing property data. Professional suit jacket. Leadership presence. Approachable confident expression. Modern office lighting. Executive business photography style."

Testimonial 3 - Jennifer:
Prompt: "Professional portrait of female luxury real estate specialist in her 40s. Upscale real estate office with luxury property photos on wall. Elegant professional attire. Sophisticated confident smile. High-end luxury agent aesthetic. Soft professional lighting. Luxury brand photography quality."

Parameters: { "aspect_ratio": "1:1", "safety_tolerance": 2 }
```

### Comparison Visual (FLUX Pro)
```
Model: black-forest-labs/flux-pro
Prompt: "Side-by-side comparison image for real estate marketing. LEFT SIDE labeled 'Photo Gallery': Grid of 9 static property photos (exterior, rooms). Looks basic and dated. RIGHT SIDE labeled 'PropVideo Tour': Single frame from cinematic property video with play button overlay, professional cinematography, motion blur, looks dynamic and premium. Clear visual upgrade. Split down middle with 'VS' text. Sky blue and emerald accents."
Parameters: { "aspect_ratio": "16:9", "safety_tolerance": 2 }
```

---

**Total Cost Estimate:** ~$5.50 (Replicate API)
- 6 tour style videos (30s each) @ $0.80 each = $4.80
- Images and icons = $0.70

**Generation Time:** 3-4 hours (tour videos take longer)
**Storage:** ~400MB total (mostly video files)

---

## NOTES FOR GENERATION

1. **Tour Videos Critical:** The 6 tour style videos are THE most important assets - they demonstrate actual product capability
2. **Realistic Properties:** All tour videos should show realistic, aspirational properties in their style category
3. **Brand Colors:** Ensure sky blue (#0EA5E9), slate (#475569), and emerald (#10B981) appear throughout UI mockups
4. **Real Estate Focus:** All imagery should feel professional, trustworthy, and premium (real estate is high-value)
5. **Agent Perspective:** Testimonial photos should show diverse real estate professionals at work
6. **Video Quality:** Tour videos must be high quality (1080p minimum) to prove AI capability
7. **Transitions Matter:** Each tour style video should demonstrate distinct transition and pacing styles
8. **Music Vibe:** While actual music isn't in video generation, cinematography should match music genre vibe
9. **Platform Mockups:** UI screenshots should look clean, modern, and professional (not cluttered)

---

**Ready for batch generation via Replicate API**
