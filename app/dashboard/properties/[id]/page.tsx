import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Edit, Video, Trash2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading, Text } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';

async function getProperty(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/properties/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.success ? data.property : null;
  } catch (error) {
    console.error('Error fetching property:', error);
    return null;
  }
}

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const property = await getProperty(params.id);

  if (!property) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href={`/dashboard/properties/${params.id}/edit`}>
            <Button variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Edit Property
            </Button>
          </Link>
          <Link href={`/dashboard/videos/generate?propertyId=${params.id}`}>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white">
              <Video className="w-4 h-4 mr-2" />
              Generate Video Tour
            </Button>
          </Link>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {/* Property Header */}
        <Card className="p-6 bg-white border border-slate-200 rounded-xl">
          <div className="flex items-start justify-between">
            <div>
              <Heading variant="h1" className="text-slate-900">
                {property.address}
              </Heading>
              <Text className="text-slate-600 mt-1">
                {property.city}, {property.state} {property.zipCode}
              </Text>
              <div className="flex items-center gap-3 mt-4">
                <Badge className="bg-sky-100 text-sky-700 capitalize">
                  {property.propertyType.replace('-', ' ')}
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-700 capitalize">
                  {property.listingType}
                </Badge>
                {property.listingStatus && (
                  <Badge className="bg-slate-100 text-slate-700 capitalize">
                    {property.listingStatus}
                  </Badge>
                )}
              </div>
            </div>

            {property.price && (
              <div className="text-right">
                <Heading as="h2" className="text-3xl font-bold text-slate-900">
                  {formatPrice(property.price)}
                </Heading>
                {property.mlsNumber && (
                  <Text className="text-slate-500 text-sm mt-1">
                    MLS #{property.mlsNumber}
                  </Text>
                )}
              </div>
            )}
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200">
            {property.bedrooms && (
              <div>
                <Text className="text-slate-600 text-sm">Bedrooms</Text>
                <Heading as="h3" className="text-2xl font-bold text-slate-900 mt-1">
                  {property.bedrooms}
                </Heading>
              </div>
            )}
            {property.bathrooms && (
              <div>
                <Text className="text-slate-600 text-sm">Bathrooms</Text>
                <Heading as="h3" className="text-2xl font-bold text-slate-900 mt-1">
                  {property.bathrooms}
                </Heading>
              </div>
            )}
            {property.sqft && (
              <div>
                <Text className="text-slate-600 text-sm">Square Feet</Text>
                <Heading as="h3" className="text-2xl font-bold text-slate-900 mt-1">
                  {property.sqft.toLocaleString()}
                </Heading>
              </div>
            )}
            {property.lotSize && (
              <div>
                <Text className="text-slate-600 text-sm">Lot Size</Text>
                <Heading as="h3" className="text-2xl font-bold text-slate-900 mt-1">
                  {property.lotSize} acres
                </Heading>
              </div>
            )}
          </div>

          {/* Description */}
          {property.description && (
            <div className="mt-6 pt-6 border-t border-slate-200">
              <Heading variant="h3" className="text-slate-900 mb-2">
                Description
              </Heading>
              <Text className="text-slate-700">
                {property.description}
              </Text>
            </div>
          )}
        </Card>

        {/* Photos Gallery */}
        <Card className="p-6 bg-white border border-slate-200 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <Heading variant="h3" className="text-slate-900">
              Photos ({property.photos?.length || 0})
            </Heading>
            <Link href={`/dashboard/properties/${params.id}/edit#photos`}>
              <Button variant="outline" size="sm">
                <ImageIcon className="w-4 h-4 mr-2" />
                Add Photos
              </Button>
            </Link>
          </div>

          {property.photos && property.photos.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {property.photos.map((photo: any) => (
                <div
                  key={photo.id}
                  className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden group"
                >
                  <img
                    src={photo.photoUrl}
                    alt={photo.caption || `Photo ${photo.order + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {photo.roomType && (
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded capitalize">
                      {photo.roomType}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 p-12">
              <ImageIcon className="h-12 w-12 text-slate-400" />
              <Text className="mt-2 text-slate-600">
                No photos yet
              </Text>
              <Link href={`/dashboard/properties/${params.id}/edit#photos`} className="mt-4">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Add Photos
                </Button>
              </Link>
            </div>
          )}
        </Card>

        {/* Tour Videos */}
        <Card className="p-6 bg-white border border-slate-200 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <Heading variant="h3" className="text-slate-900">
              Tour Videos ({property.videos?.length || 0})
            </Heading>
            <Link href={`/dashboard/videos/generate?propertyId=${params.id}`}>
              <Button className="bg-sky-500 hover:bg-sky-600 text-white" size="sm">
                <Video className="w-4 h-4 mr-2" />
                Generate Video
              </Button>
            </Link>
          </div>

          {property.videos && property.videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.videos.map((video: any) => (
                <Link key={video.id} href={`/dashboard/videos/${video.id}`}>
                  <div className="border border-slate-200 rounded-lg p-4 hover:bg-sky-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 flex-shrink-0">
                        <Video className="h-6 w-6 text-sky-600" />
                      </div>
                      <div className="flex-1">
                        <Text className="font-medium text-slate-900 capitalize">
                          {video.tourStyle} Tour
                        </Text>
                        <Text className="text-xs text-slate-600 mt-1">
                          {video.duration}s • {video.aspectRatio}
                        </Text>
                        <Badge
                          variant={video.status === 'completed' ? 'success' : 'warning'}
                          className="text-xs mt-2"
                        >
                          {video.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 p-12">
              <Video className="h-12 w-12 text-slate-400" />
              <Text className="mt-2 text-slate-600">
                No tour videos yet
              </Text>
              <Text className="text-sm text-slate-500 mt-1">
                Add at least 5 photos to generate a video tour
              </Text>
              {property.photos && property.photos.length >= 5 && (
                <Link href={`/dashboard/videos/generate?propertyId=${params.id}`} className="mt-4">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                    <Video className="w-4 h-4 mr-2" />
                    Generate First Video
                  </Button>
                </Link>
              )}
            </div>
          )}
        </Card>
      </Suspense>
    </div>
  );
}
