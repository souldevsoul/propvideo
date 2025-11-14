import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    // TODO: Get userId from session/auth
    const userId = 'test-user-id';

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const status = searchParams.get('status'); // active, pending, sold, expired

    const skip = (page - 1) * limit;

    const where: { userId: string; listingStatus?: string } = {
      userId,
    };

    if (status) {
      where.listingStatus = status;
    }

    const [properties, total] = await Promise.all([
      prisma.property.findMany({
        where,
        include: {
          photos: {
            orderBy: { order: 'asc' },
            take: 1, // Just get the first photo for thumbnail
          },
          videos: {
            select: {
              id: true,
              status: true,
              createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
          },
          _count: {
            select: {
              photos: true,
              videos: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.property.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      properties,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });

  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch properties',
    }, { status: 500 });
  }
}
