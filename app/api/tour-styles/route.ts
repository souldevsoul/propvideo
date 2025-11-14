import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const popularOnly = searchParams.get('popular') === 'true';

    const where: { popular?: boolean } = {};
    if (popularOnly) {
      where.popular = true;
    }

    const tourStyles = await prisma.tourStyle.findMany({
      where,
      orderBy: [
        { popular: 'desc' },
        { order: 'asc' },
      ],
    });

    // If no tour styles exist, return default ones
    if (tourStyles.length === 0) {
      const defaultStyles = [
        {
          name: 'luxury',
          displayName: 'Luxury',
          description: 'Slow, elegant transitions with warm color grading and orchestral music. Perfect for high-end properties.',
          transitionStyle: 'smooth',
          colorGrading: 'warm',
          pace: 'slow',
          musicGenre: ['orchestral', 'classical'],
          popular: true,
          order: 1,
        },
        {
          name: 'modern',
          displayName: 'Modern',
          description: 'Medium-paced tour with cool color grading and ambient music. Great for contemporary homes.',
          transitionStyle: 'cinematic',
          colorGrading: 'cool',
          pace: 'medium',
          musicGenre: ['ambient', 'electronic'],
          popular: true,
          order: 2,
        },
        {
          name: 'cozy',
          displayName: 'Cozy',
          description: 'Slow, warm tour with soft transitions and acoustic music. Ideal for family homes.',
          transitionStyle: 'smooth',
          colorGrading: 'warm',
          pace: 'slow',
          musicGenre: ['acoustic', 'folk'],
          popular: true,
          order: 3,
        },
        {
          name: 'dramatic',
          displayName: 'Dramatic',
          description: 'Fast-paced with high contrast and epic music. For properties that wow.',
          transitionStyle: 'cinematic',
          colorGrading: 'vibrant',
          pace: 'fast',
          musicGenre: ['epic', 'dramatic'],
          popular: false,
          order: 4,
        },
        {
          name: 'energetic',
          displayName: 'Energetic',
          description: 'Fast, vibrant tour with upbeat music. Perfect for appealing to younger buyers.',
          transitionStyle: 'quick',
          colorGrading: 'vibrant',
          pace: 'fast',
          musicGenre: ['upbeat', 'pop'],
          popular: false,
          order: 5,
        },
        {
          name: 'elegant',
          displayName: 'Elegant',
          description: 'Slow, refined tour with neutral tones and classical music. For sophisticated properties.',
          transitionStyle: 'elegant',
          colorGrading: 'neutral',
          pace: 'slow',
          musicGenre: ['classical', 'piano'],
          popular: true,
          order: 6,
        },
      ];

      return NextResponse.json({
        success: true,
        tourStyles: defaultStyles,
        message: 'Showing default tour styles. Run seed script to save to database.',
      });
    }

    return NextResponse.json({
      success: true,
      tourStyles,
    });

  } catch (error) {
    console.error('Error fetching tour styles:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch tour styles',
    }, { status: 500 });
  }
}
