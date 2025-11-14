"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography';
import { PropertyForm } from '@/components/property/property-form';
import { PhotoUploader } from '@/components/property/photo-uploader';

export default function NewPropertyPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [propertyId, setPropertyId] = useState<string | null>(null);
  const [step, setStep] = useState<'details' | 'photos'>('details');

  const handlePropertySubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/properties/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setPropertyId(result.property.id);
        setStep('photos');
      } else {
        alert('Failed to create property: ' + result.error);
      }
    } catch (error) {
      console.error('Error creating property:', error);
      alert('Failed to create property');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotosUpload = async (photos: any[]) => {
    if (!propertyId) return;

    setIsLoading(true);
    try {
      const formData = new FormData();

      photos.forEach((photo) => {
        formData.append('photos', photo.file);
        formData.append('roomTypes', photo.roomType);
        formData.append('captions', photo.caption);
      });

      const response = await fetch(`/api/properties/${propertyId}/upload-photos`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        router.push(`/dashboard/properties/${propertyId}`);
      } else {
        alert('Failed to upload photos: ' + result.error);
      }
    } catch (error) {
      console.error('Error uploading photos:', error);
      alert('Failed to upload photos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div>
        <Heading variant="h1" className="text-slate-900">
          {step === 'details' ? 'Add New Property' : 'Upload Property Photos'}
        </Heading>
        <p className="text-slate-600 mt-2">
          {step === 'details'
            ? 'Enter property details to get started'
            : 'Add photos of your property for the video tour'}
        </p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-4">
        <div className={`flex items-center gap-2 ${step === 'details' ? 'text-sky-500' : 'text-emerald-500'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 'details' ? 'bg-sky-500 text-white' : 'bg-emerald-500 text-white'}`}>
            1
          </div>
          <span className="font-medium">Property Details</span>
        </div>

        <div className={`flex-1 h-0.5 ${step === 'photos' ? 'bg-emerald-500' : 'bg-slate-200'}`} />

        <div className={`flex items-center gap-2 ${step === 'photos' ? 'text-sky-500' : 'text-slate-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 'photos' ? 'bg-sky-500 text-white' : 'bg-slate-200'}`}>
            2
          </div>
          <span className="font-medium">Upload Photos</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl">
        {step === 'details' ? (
          <PropertyForm
            onSubmit={handlePropertySubmit}
            isLoading={isLoading}
            onCancel={() => router.push('/dashboard')}
          />
        ) : (
          <div className="space-y-6">
            <PhotoUploader
              onUpload={handlePhotosUpload}
              isLoading={isLoading}
              maxPhotos={20}
            />

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep('details')}
                disabled={isLoading}
              >
                Back to Details
              </Button>

              <Button
                variant="outline"
                onClick={() => router.push(`/dashboard/properties/${propertyId}`)}
                disabled={isLoading}
              >
                Skip for Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
