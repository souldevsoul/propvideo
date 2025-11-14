"use client"

import { useState } from 'react';
import { Upload, X, User, Phone, Mail, Building2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BrandingData {
  agentName: string;
  agentPhone: string;
  agentEmail: string;
  agentLogoUrl: string;
  brokerageName: string;
}

interface BrandingEditorProps {
  initialData?: Partial<BrandingData>;
  onSave: (data: BrandingData) => Promise<void>;
  onCancel?: () => void;
  isLoading?: boolean;
}

export function BrandingEditor({ initialData, onSave, onCancel, isLoading }: BrandingEditorProps) {
  const [brandingData, setBrandingData] = useState<BrandingData>({
    agentName: initialData?.agentName || '',
    agentPhone: initialData?.agentPhone || '',
    agentEmail: initialData?.agentEmail || '',
    agentLogoUrl: initialData?.agentLogoUrl || '',
    brokerageName: initialData?.brokerageName || '',
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>(initialData?.agentLogoUrl || '');

  const handleChange = (field: keyof BrandingData, value: string) => {
    setBrandingData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const removeLogo = () => {
    setLogoFile(null);
    setLogoPreview('');
    setBrandingData(prev => ({ ...prev, agentLogoUrl: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Upload logo to Vercel Blob if logoFile exists
    // For now, just pass the data
    const finalData = { ...brandingData };

    if (logoFile) {
      // TODO: Upload to Vercel Blob and get URL
      // const logoUrl = await uploadLogo(logoFile);
      // finalData.agentLogoUrl = logoUrl;
    }

    await onSave(finalData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Agent Information */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-sky-500" />
          Agent Information
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Agent Name *
            </label>
            <input
              type="text"
              required
              value={brandingData.agentName}
              onChange={(e) => handleChange('agentName', e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="John Smith"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  value={brandingData.agentPhone}
                  onChange={(e) => handleChange('agentPhone', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={brandingData.agentEmail}
                  onChange={(e) => handleChange('agentEmail', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Brokerage Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={brandingData.brokerageName}
                onChange={(e) => handleChange('brokerageName', e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="ABC Realty Group"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Logo Upload */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-sky-500" />
          Logo
        </h3>

        {logoPreview ? (
          <div className="space-y-4">
            <div className="relative w-48 h-48 bg-slate-100 rounded-lg overflow-hidden border-2 border-slate-200">
              <img
                src={logoPreview}
                alt="Logo preview"
                className="w-full h-full object-contain p-4"
              />
              <button
                type="button"
                onClick={removeLogo}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-slate-600">
              This logo will appear on your property tour videos
            </p>
          </div>
        ) : (
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-sky-400 transition-colors">
            <input
              id="logo-upload"
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="hidden"
            />
            <label htmlFor="logo-upload" className="cursor-pointer">
              <Upload className="w-10 h-10 mx-auto mb-3 text-slate-400" />
              <p className="text-sm font-semibold text-slate-700 mb-1">
                Upload your logo
              </p>
              <p className="text-xs text-slate-500">
                PNG, JPG, or SVG (recommended: 500x500px)
              </p>
            </label>
          </div>
        )}
      </div>

      {/* Preview */}
      <div className="bg-slate-900 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-white mb-4">Preview</h3>
        <div className="bg-slate-800 rounded-lg p-4 flex items-center gap-4">
          {logoPreview && (
            <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
              <img src={logoPreview} alt="Logo" className="w-full h-full object-contain p-2" />
            </div>
          )}
          <div>
            <p className="text-white font-semibold text-lg">{brandingData.agentName || 'Agent Name'}</p>
            {brandingData.brokerageName && (
              <p className="text-slate-300 text-sm">{brandingData.brokerageName}</p>
            )}
            <div className="flex gap-4 mt-2 text-slate-400 text-xs">
              {brandingData.agentPhone && <span>{brandingData.agentPhone}</span>}
              {brandingData.agentEmail && <span>{brandingData.agentEmail}</span>}
            </div>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-3">
          This is how your branding will appear on property tour videos
        </p>
      </div>

      {/* Form Actions */}
      <div className="flex gap-4 justify-end">
        {onCancel && (
          <Button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="px-6 py-2 bg-slate-200 text-slate-700 hover:bg-slate-300"
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-sky-500 text-white hover:bg-sky-600"
        >
          {isLoading ? 'Saving...' : 'Save Branding'}
        </Button>
      </div>
    </form>
  );
}
