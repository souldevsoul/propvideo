import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// Validation schema
const createPropertySchema = z.object({
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().optional(),
  propertyType: z.enum(['single-family', 'condo', 'townhouse', 'multi-family', 'commercial', 'land']),
  listingType: z.enum(['sale', 'rent', 'sold', 'lease']),
  price: z.number().positive().optional(),
  bedrooms: z.number().int().min(0).optional(),
  bathrooms: z.number().min(0).optional(),
  sqft: z.number().int().positive().optional(),
  lotSize: z.number().positive().optional(),
  yearBuilt: z.number().int().min(1800).max(new Date().getFullYear() + 1).optional(),
  description: z.string().optional(),
  mlsNumber: z.string().optional(),
  listingDate: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    // TODO: Get userId from session/auth
    // For now, hardcode a test user ID
    const userId = 'test-user-id';

    const body = await req.json();
    const validatedData = createPropertySchema.parse(body);

    // Convert price to Decimal if provided
    const propertyData = {
      ...validatedData,
      userId,
      price: validatedData.price ? String(validatedData.price) : undefined,
      bathrooms: validatedData.bathrooms ? String(validatedData.bathrooms) : undefined,
      lotSize: validatedData.lotSize ? String(validatedData.lotSize) : undefined,
      listingDate: validatedData.listingDate ? new Date(validatedData.listingDate) : undefined,
    };

    const property = await prisma.property.create({
      data: propertyData,
      include: {
        photos: true,
        videos: true,
      },
    });

    return NextResponse.json({
      success: true,
      property,
    }, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Validation error',
        details: error.errors,
      }, { status: 400 });
    }

    console.error('Error creating property:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to create property',
    }, { status: 500 });
  }
}
