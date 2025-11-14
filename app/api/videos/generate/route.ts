import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const generateVideoSchema = z.object({
  propertyId: z.string().min(1, 'Property ID is required'),
  tourStyle: z.string().min(1, 'Tour style is required'),
  duration: z.number().int().min(30).max(120).default(60),
  aspectRatio: z.enum(['16:9', '9:16', '1:1', '4:5']).default('16:9'),
  voiceoverText: z.string().optional(),
  voiceStyle: z.enum(['professional', 'friendly', 'luxury', 'energetic']).default('professional'),
  musicTrack: z.string().optional(),
  agentName: z.string().optional(),
  agentPhone: z.string().optional(),
  agentEmail: z.string().optional(),
  agentLogoUrl: z.string().optional(),
  brokerageName: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    // TODO: Get userId from session/auth
    const userId = 'test-user-id';

    const body = await req.json();
    const validatedData = generateVideoSchema.parse(body);

    // Verify property exists and has photos
    const property = await prisma.property.findUnique({
      where: { id: validatedData.propertyId },
      include: {
        photos: {
          orderBy: { order: 'asc' },
        },
      },
    });

    if (!property) {
      return NextResponse.json({
        success: false,
        error: 'Property not found',
      }, { status: 404 });
    }

    if (property.photos.length < 5) {
      return NextResponse.json({
        success: false,
        error: 'Property must have at least 5 photos to generate a video',
      }, { status: 400 });
    }

    // Generate voiceover script if not provided
    let voiceoverText = validatedData.voiceoverText;
    if (!voiceoverText) {
      // TODO: Use OpenAI to generate script based on property details
      voiceoverText = `Welcome to this ${property.propertyType} located at ${property.address}, ${property.city}. ` +
        `${property.bedrooms ? `This property features ${property.bedrooms} bedrooms` : ''} ` +
        `${property.bathrooms ? `and ${property.bathrooms} bathrooms` : ''}. ` +
        `${property.description || ''}`;
    }

    // Create video record
    const video = await prisma.propertyVideo.create({
      data: {
        propertyId: validatedData.propertyId,
        userId,
        tourStyle: validatedData.tourStyle,
        duration: validatedData.duration,
        aspectRatio: validatedData.aspectRatio,
        voiceoverText,
        voiceStyle: validatedData.voiceStyle,
        musicTrack: validatedData.musicTrack || null,
        agentName: validatedData.agentName || null,
        agentPhone: validatedData.agentPhone || null,
        agentEmail: validatedData.agentEmail || null,
        agentLogoUrl: validatedData.agentLogoUrl || null,
        brokerageName: validatedData.brokerageName || null,
        status: 'processing',
      },
      include: {
        property: {
          include: {
            photos: {
              orderBy: { order: 'asc' },
            },
          },
        },
      },
    });

    // TODO: Call Replicate API to generate video
    // For now, just return the video record
    // In Phase 7, we'll implement actual video generation with Replicate

    // Simulate video generation (would be async in production)
    // await generateVideoWithReplicate(video, property.photos);

    return NextResponse.json({
      success: true,
      video,
      message: 'Video generation started. You will be notified when it is ready.',
    }, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Validation error',
        details: error.errors,
      }, { status: 400 });
    }

    console.error('Error generating video:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to start video generation',
    }, { status: 500 });
  }
}
