import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { put } from '@vercel/blob';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: propertyId } = await params;

    // Verify property exists
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
    });

    if (!property) {
      return NextResponse.json({
        success: false,
        error: 'Property not found',
      }, { status: 404 });
    }

    const formData = await req.formData();
    const files = formData.getAll('photos') as File[];
    const roomTypes = formData.getAll('roomTypes') as string[];
    const captions = formData.getAll('captions') as string[];

    if (!files || files.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'No photos provided',
      }, { status: 400 });
    }

    // Get current max order
    const lastPhoto = await prisma.propertyPhoto.findFirst({
      where: { propertyId },
      orderBy: { order: 'desc' },
      select: { order: true },
    });

    let currentOrder = lastPhoto ? lastPhoto.order + 1 : 0;

    const uploadedPhotos = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const roomType = roomTypes[i] || 'other';
      const caption = captions[i] || '';

      // Upload to Vercel Blob
      const blob = await put(`properties/${propertyId}/${Date.now()}-${file.name}`, file, {
        access: 'public',
      });

      // Create photo record
      const photo = await prisma.propertyPhoto.create({
        data: {
          propertyId,
          photoUrl: blob.url,
          roomType,
          caption: caption || null,
          order: currentOrder++,
        },
      });

      uploadedPhotos.push(photo);
    }

    return NextResponse.json({
      success: true,
      photos: uploadedPhotos,
      message: `${uploadedPhotos.length} photo(s) uploaded successfully`,
    }, { status: 201 });

  } catch (error) {
    console.error('Error uploading photos:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to upload photos',
    }, { status: 500 });
  }
}
