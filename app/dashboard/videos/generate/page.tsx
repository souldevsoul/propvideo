"use client"

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading, Text } from '@/components/ui/typography';
import { TourStyleSelector } from '@/components/property/tour-style-selector';
import { BrandingEditor } from '@/components/property/branding-editor';

function GenerateVideoContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const propertyId = searchParams.get('propertyId');

  const [isLoading, setIsLoading] = useState(false);
  const [property, setProperty] = useState<any>(null);
  const [step, setStep] = useState<'style' | 'settings' | 'branding'>('style');

  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [duration, setDuration] = useState<number>(60);
  const [aspectRatio, setAspectRatio] = useState<string>('16:9');
  const [voiceStyle, setVoiceStyle] = useState<string>('professional');
  const [voiceoverText, setVoiceoverText] = useState<string>('');
  const [brandingData, setBrandingData] = useState<any>(null);

  useEffect(() => {
    if (!propertyId) {
      router.push('/dashboard');
      return;
    }

    // Fetch property details
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/properties/${propertyId}`);
        const data = await response.json();
        if (data.success) {
          setProperty(data.property);
          // Generate default voiceover text
          generateDefaultVoiceover(data.property);
        }
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [propertyId, router]);

  const generateDefaultVoiceover = (prop: any) => {
    const text = `Welcome to this beautiful ${prop.propertyType} located at ${prop.address}, ${prop.city}. ` +
      `${prop.bedrooms ? `This property features ${prop.bedrooms} bedrooms` : ''} ` +
      `${prop.bathrooms ? `and ${prop.bathrooms} bathrooms` : ''}. ` +
      `${prop.description || ''}`;
    setVoiceoverText(text);
  };

  const handleGenerate = async () => {
    if (!propertyId || !selectedStyle) {
      alert('Please select a tour style');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/videos/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          propertyId,
          tourStyle: selectedStyle,
          duration,
          aspectRatio,
          voiceoverText,
          voiceStyle,
          ...brandingData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        router.push(`/dashboard/videos/${result.video.id}`);
      } else {
        alert('Failed to generate video: ' + result.error);
      }
    } catch (error) {
      console.error('Error generating video:', error);
      alert('Failed to generate video');
    } finally {
      setIsLoading(false);
    }
  };

  if (!property) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto mb-4"></div>
          <Text className="text-slate-600">Loading property...</Text>
        </div>
      </div>
    );
  }

  if (property.photos && property.photos.length < 5) {
    return (
      <div className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex items-center gap-4">
          <Link href={`/dashboard/properties/${propertyId}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Property
            </Button>
          </Link>
        </div>

        <Card className="p-12 bg-white border border-slate-200 rounded-xl text-center">
          <Heading variant="h2" className="text-slate-900 mb-4">
            Not Enough Photos
          </Heading>
          <Text className="text-slate-600 mb-6">
            You need at least 5 photos to generate a video tour. You currently have {property.photos.length} photo(s).
          </Text>
          <Link href={`/dashboard/properties/${propertyId}/edit#photos`}>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white">
              Add More Photos
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href={`/dashboard/properties/${propertyId}`}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Property
          </Button>
        </Link>
      </div>

      <div>
        <Heading variant="h1" className="text-slate-900">
          Generate Video Tour
        </Heading>
        <Text className="text-slate-600 mt-2">
          {property.address}, {property.city}
        </Text>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-4">
        <div className={`flex items-center gap-2 ${step === 'style' ? 'text-sky-500' : step === 'settings' || step === 'branding' ? 'text-emerald-500' : 'text-slate-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 'style' ? 'bg-sky-500 text-white' : step === 'settings' || step === 'branding' ? 'bg-emerald-500 text-white' : 'bg-slate-200'}`}>
            1
          </div>
          <span className="font-medium">Tour Style</span>
        </div>

        <div className={`flex-1 h-0.5 ${step === 'settings' || step === 'branding' ? 'bg-emerald-500' : 'bg-slate-200'}`} />

        <div className={`flex items-center gap-2 ${step === 'settings' ? 'text-sky-500' : step === 'branding' ? 'text-emerald-500' : 'text-slate-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 'settings' ? 'bg-sky-500 text-white' : step === 'branding' ? 'bg-emerald-500 text-white' : 'bg-slate-200'}`}>
            2
          </div>
          <span className="font-medium">Settings</span>
        </div>

        <div className={`flex-1 h-0.5 ${step === 'branding' ? 'bg-emerald-500' : 'bg-slate-200'}`} />

        <div className={`flex items-center gap-2 ${step === 'branding' ? 'text-sky-500' : 'text-slate-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 'branding' ? 'bg-sky-500 text-white' : 'bg-slate-200'}`}>
            3
          </div>
          <span className="font-medium">Branding</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl">
        {step === 'style' && (
          <div className="space-y-6">
            <TourStyleSelector
              selectedStyle={selectedStyle}
              onSelect={setSelectedStyle}
              popularOnly={false}
            />
            <div className="flex justify-end">
              <Button
                onClick={() => setStep('settings')}
                disabled={!selectedStyle}
                className="bg-sky-500 hover:bg-sky-600 text-white"
              >
                Continue to Settings
              </Button>
            </div>
          </div>
        )}

        {step === 'settings' && (
          <Card className="p-6 bg-white border border-slate-200 rounded-xl space-y-6">
            <Heading variant="h3" className="text-slate-900">
              Video Settings
            </Heading>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Duration
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[30, 60, 90, 120].map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setDuration(dur)}
                    className={`py-3 px-4 border-2 rounded-lg font-medium transition-colors ${
                      duration === dur
                        ? 'border-sky-500 bg-sky-50 text-sky-700'
                        : 'border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    {dur}s
                  </button>
                ))}
              </div>
            </div>

            {/* Aspect Ratio */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Aspect Ratio
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { value: '16:9', label: '16:9 (YouTube)' },
                  { value: '9:16', label: '9:16 (TikTok)' },
                  { value: '1:1', label: '1:1 (Instagram)' },
                  { value: '4:5', label: '4:5 (Facebook)' },
                ].map((ratio) => (
                  <button
                    key={ratio.value}
                    onClick={() => setAspectRatio(ratio.value)}
                    className={`py-3 px-4 border-2 rounded-lg font-medium transition-colors ${
                      aspectRatio === ratio.value
                        ? 'border-sky-500 bg-sky-50 text-sky-700'
                        : 'border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    {ratio.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Voice Style */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Voice Style
              </label>
              <div className="grid grid-cols-4 gap-3">
                {['professional', 'friendly', 'luxury', 'energetic'].map((style) => (
                  <button
                    key={style}
                    onClick={() => setVoiceStyle(style)}
                    className={`py-3 px-4 border-2 rounded-lg font-medium capitalize transition-colors ${
                      voiceStyle === style
                        ? 'border-sky-500 bg-sky-50 text-sky-700'
                        : 'border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Voiceover Script */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Voiceover Script
              </label>
              <textarea
                value={voiceoverText}
                onChange={(e) => setVoiceoverText(e.target.value)}
                rows={6}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="Enter voiceover script..."
              />
              <Text className="text-xs text-slate-500 mt-1">
                Customize the voiceover text for your video tour
              </Text>
            </div>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={() => setStep('style')}
              >
                Back to Style
              </Button>
              <Button
                onClick={() => setStep('branding')}
                className="bg-sky-500 hover:bg-sky-600 text-white"
              >
                Continue to Branding
              </Button>
            </div>
          </Card>
        )}

        {step === 'branding' && (
          <div className="space-y-6">
            <BrandingEditor
              onSave={async (data) => {
                setBrandingData(data);
                await handleGenerate();
              }}
              onCancel={() => setStep('settings')}
              isLoading={isLoading}
            />

            <div className="flex items-center justify-center gap-2 text-slate-600">
              <Sparkles className="w-4 h-4" />
              <Text className="text-sm">
                Your video will be generated with AI in about 2-3 minutes
              </Text>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GenerateVideoPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateVideoContent />
    </Suspense>
  );
}
