import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// GET - Get property details
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const property = await prisma.property.findUnique({
      where: { id },
      include: {
        photos: {
          orderBy: { order: 'asc' },
        },
        videos: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!property) {
      return NextResponse.json({
        success: false,
        error: 'Property not found',
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      property,
    });

  } catch (error) {
    console.error('Error fetching property:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch property',
    }, { status: 500 });
  }
}

// PATCH - Update property
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();

    // Validation schema for updates
    const updatePropertySchema = z.object({
      address: z.string().min(1).optional(),
      city: z.string().min(1).optional(),
      state: z.string().min(1).optional(),
      zipCode: z.string().optional(),
      propertyType: z.enum(['single-family', 'condo', 'townhouse', 'multi-family', 'commercial', 'land']).optional(),
      listingType: z.enum(['sale', 'rent', 'sold', 'lease']).optional(),
      price: z.number().positive().optional(),
      bedrooms: z.number().int().min(0).optional(),
      bathrooms: z.number().min(0).optional(),
      sqft: z.number().int().positive().optional(),
      lotSize: z.number().positive().optional(),
      yearBuilt: z.number().int().min(1800).max(new Date().getFullYear() + 1).optional(),
      description: z.string().optional(),
      mlsNumber: z.string().optional(),
      listingStatus: z.enum(['active', 'pending', 'sold', 'expired']).optional(),
      listingDate: z.string().optional(),
    });

    const validatedData = updatePropertySchema.parse(body);

    // Convert numbers to strings for Decimal fields
    const updateData: any = {
      ...validatedData,
    };

    if (validatedData.price !== undefined) {
      updateData.price = String(validatedData.price);
    }
    if (validatedData.bathrooms !== undefined) {
      updateData.bathrooms = String(validatedData.bathrooms);
    }
    if (validatedData.lotSize !== undefined) {
      updateData.lotSize = String(validatedData.lotSize);
    }
    if (validatedData.listingDate !== undefined) {
      updateData.listingDate = new Date(validatedData.listingDate);
    }

    const property = await prisma.property.update({
      where: { id },
      data: updateData,
      include: {
        photos: true,
        videos: true,
      },
    });

    return NextResponse.json({
      success: true,
      property,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Validation error',
        details: error.errors,
      }, { status: 400 });
    }

    console.error('Error updating property:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to update property',
    }, { status: 500 });
  }
}

// DELETE - Delete property
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Delete property (photos and videos will cascade)
    await prisma.property.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: 'Property deleted successfully',
    });

  } catch (error) {
    console.error('Error deleting property:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to delete property',
    }, { status: 500 });
  }
}
