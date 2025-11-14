import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Home, RefreshCw, Settings, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading, Text } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { VideoPreview } from '@/components/property/video-preview';

async function getVideo(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/videos/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.success ? data.video : null;
  } catch (error) {
    console.error('Error fetching video:', error);
    return null;
  }
}

export default async function VideoPage({ params }: { params: { id: string } }) {
  const video = await getVideo(params.id);

  if (!video) {
    notFound();
  }

  const handleDownload = async () => {
    // Client-side download handler will be implemented in a client component wrapper
  };

  const handleShare = async () => {
    // Client-side share handler will be implemented in a client component wrapper
  };

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/dashboard/properties/${video.propertyId}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Property
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {video.status === 'completed' && (
            <>
              <Link href={`/dashboard/videos/${params.id}/edit`}>
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Settings
                </Button>
              </Link>
              <Link href={`/dashboard/videos/generate?propertyId=${video.propertyId}`}>
                <Button variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {/* Video Info Header */}
        <Card className="p-6 bg-white border border-slate-200 rounded-xl">
          <div className="flex items-start justify-between">
            <div>
              <Heading variant="h1" className="text-slate-900 capitalize">
                {video.tourStyle} Tour Video
              </Heading>
              {video.property && (
                <Link href={`/dashboard/properties/${video.propertyId}`}>
                  <Text className="text-slate-600 mt-1 hover:text-sky-500 transition-colors flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    {video.property.address}, {video.property.city}
                  </Text>
                </Link>
              )}
              <div className="flex items-center gap-3 mt-4">
                <Badge
                  variant={video.status === 'completed' ? 'success' : video.status === 'processing' ? 'warning' : 'default'}
                  className="capitalize"
                >
                  {video.status}
                </Badge>
                <Badge className="bg-sky-100 text-sky-700">
                  {video.duration}s
                </Badge>
                <Badge className="bg-slate-100 text-slate-700">
                  {video.aspectRatio}
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-700 capitalize">
                  {video.voiceStyle}
                </Badge>
              </div>
            </div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div>
              <Text className="text-slate-600 text-sm">Views</Text>
              <Heading as="h3" className="text-2xl font-bold text-slate-900 mt-1">
                {video.views || 0}
              </Heading>
            </div>
            <div>
              <Text className="text-slate-600 text-sm">Shares</Text>
              <Heading as="h3" className="text-2xl font-bold text-slate-900 mt-1">
                {video.shares || 0}
              </Heading>
            </div>
            <div>
              <Text className="text-slate-600 text-sm">Downloads</Text>
              <Heading as="h3" className="text-2xl font-bold text-slate-900 mt-1">
                {video.downloads || 0}
              </Heading>
            </div>
          </div>
        </Card>

        {/* Video Player */}
        <Card className="p-6 bg-white border border-slate-200 rounded-xl">
          <VideoPreview
            video={video}
            onDownload={handleDownload}
            onShare={handleShare}
            showStats={false}
          />
        </Card>

        {/* Video Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Voiceover Script */}
          <Card className="p-6 bg-white border border-slate-200 rounded-xl">
            <Heading variant="h3" className="text-slate-900 mb-4">
              Voiceover Script
            </Heading>
            <Text className="text-slate-700 whitespace-pre-wrap">
              {video.voiceoverText}
            </Text>
          </Card>

          {/* Branding Info */}
          {(video.agentName || video.brokerageName) && (
            <Card className="p-6 bg-white border border-slate-200 rounded-xl">
              <Heading variant="h3" className="text-slate-900 mb-4">
                Agent Branding
              </Heading>
              <div className="space-y-3">
                {video.agentName && (
                  <div>
                    <Text className="text-xs text-slate-600">Agent Name</Text>
                    <Text className="font-medium text-slate-900">{video.agentName}</Text>
                  </div>
                )}
                {video.brokerageName && (
                  <div>
                    <Text className="text-xs text-slate-600">Brokerage</Text>
                    <Text className="font-medium text-slate-900">{video.brokerageName}</Text>
                  </div>
                )}
                {video.agentPhone && (
                  <div>
                    <Text className="text-xs text-slate-600">Phone</Text>
                    <Text className="font-medium text-slate-900">{video.agentPhone}</Text>
                  </div>
                )}
                {video.agentEmail && (
                  <div>
                    <Text className="text-xs text-slate-600">Email</Text>
                    <Text className="font-medium text-slate-900">{video.agentEmail}</Text>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>

        {/* Technical Details */}
        <Card className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <Heading variant="h3" className="text-slate-900 mb-4">
            Technical Details
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Text className="text-xs text-slate-600">Video ID</Text>
              <Text className="font-mono text-sm text-slate-900 mt-1">{video.id}</Text>
            </div>
            <div>
              <Text className="text-xs text-slate-600">Created</Text>
              <Text className="text-sm text-slate-900 mt-1">
                {new Date(video.createdAt).toLocaleDateString()}
              </Text>
            </div>
            {video.replicateId && (
              <div>
                <Text className="text-xs text-slate-600">Replicate ID</Text>
                <Text className="font-mono text-xs text-slate-900 mt-1">{video.replicateId}</Text>
              </div>
            )}
            {video.videoUrl && (
              <div>
                <Text className="text-xs text-slate-600">Video URL</Text>
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sky-500 hover:text-sky-600 mt-1 block truncate"
                >
                  Open in new tab
                </a>
              </div>
            )}
          </div>
        </Card>
      </Suspense>
    </div>
  );
}
