"use client"

import { useState, useCallback } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoWithMetadata {
  file: File;
  preview: string;
  roomType: string;
  caption: string;
}

interface PhotoUploaderProps {
  onUpload: (photos: PhotoWithMetadata[]) => Promise<void>;
  maxPhotos?: number;
  isLoading?: boolean;
}

const ROOM_TYPES = [
  { value: 'exterior', label: 'Exterior' },
  { value: 'living', label: 'Living Room' },
  { value: 'kitchen', label: 'Kitchen' },
  { value: 'bedroom', label: 'Bedroom' },
  { value: 'bathroom', label: 'Bathroom' },
  { value: 'yard', label: 'Yard/Outdoor' },
  { value: 'other', label: 'Other' },
];

export function PhotoUploader({ onUpload, maxPhotos = 20, isLoading }: PhotoUploaderProps) {
  const [photos, setPhotos] = useState<PhotoWithMetadata[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;

    const newPhotos: PhotoWithMetadata[] = [];
    const remainingSlots = maxPhotos - photos.length;

    for (let i = 0; i < Math.min(files.length, remainingSlots); i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        newPhotos.push({
          file,
          preview: URL.createObjectURL(file),
          roomType: 'other',
          caption: '',
        });
      }
    }

    setPhotos(prev => [...prev, ...newPhotos]);
  }, [photos.length, maxPhotos]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleFiles(e.target.files);
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => {
      const newPhotos = [...prev];
      URL.revokeObjectURL(newPhotos[index].preview);
      newPhotos.splice(index, 1);
      return newPhotos;
    });
  };

  const updatePhoto = (index: number, field: 'roomType' | 'caption', value: string) => {
    setPhotos(prev => {
      const newPhotos = [...prev];
      newPhotos[index] = { ...newPhotos[index], [field]: value };
      return newPhotos;
    });
  };

  const handleUpload = async () => {
    await onUpload(photos);
    setPhotos([]);
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-xl p-12 text-center transition-colors
          ${dragActive ? 'border-sky-500 bg-sky-50' : 'border-slate-300 bg-white'}
          ${photos.length >= maxPhotos ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-sky-400'}
        `}
      >
        <input
          id="photo-upload"
          type="file"
          multiple
          accept="image/*"
          onChange={handleChange}
          disabled={photos.length >= maxPhotos}
          className="hidden"
        />
        <label
          htmlFor="photo-upload"
          className={`cursor-pointer ${photos.length >= maxPhotos ? 'cursor-not-allowed' : ''}`}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-slate-400" />
          <p className="text-lg font-semibold text-slate-700 mb-2">
            {photos.length >= maxPhotos ? 'Maximum photos reached' : 'Drop photos here or click to upload'}
          </p>
          <p className="text-sm text-slate-500">
            {photos.length} / {maxPhotos} photos added
          </p>
        </label>
      </div>

      {/* Photos List */}
      {photos.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-900">
            Uploaded Photos ({photos.length})
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-4 space-y-3">
                <div className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    src={photo.preview}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removePhoto(index)}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Room Type
                    </label>
                    <select
                      value={photo.roomType}
                      onChange={(e) => updatePhoto(index, 'roomType', e.target.value)}
                      className="w-full px-2 py-1.5 text-sm border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500"
                    >
                      {ROOM_TYPES.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Caption
                    </label>
                    <input
                      type="text"
                      value={photo.caption}
                      onChange={(e) => updatePhoto(index, 'caption', e.target.value)}
                      placeholder="Optional"
                      className="w-full px-2 py-1.5 text-sm border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={handleUpload}
            disabled={isLoading || photos.length === 0}
            className="w-full py-3 bg-sky-500 text-white hover:bg-sky-600"
          >
            {isLoading ? 'Uploading...' : `Upload ${photos.length} Photo${photos.length !== 1 ? 's' : ''}`}
          </Button>
        </div>
      )}
    </div>
  );
}
