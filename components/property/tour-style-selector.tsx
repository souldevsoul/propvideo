"use client"

import { useState, useEffect } from 'react';
import { Check, Sparkles } from 'lucide-react';

interface TourStyle {
  name: string;
  displayName: string;
  description: string;
  transitionStyle: string;
  colorGrading: string;
  pace: string;
  musicGenre: string[];
  popular: boolean;
  order: number;
}

interface TourStyleSelectorProps {
  selectedStyle?: string;
  onSelect: (styleName: string) => void;
  popularOnly?: boolean;
}

export function TourStyleSelector({ selectedStyle, onSelect, popularOnly = false }: TourStyleSelectorProps) {
  const [styles, setStyles] = useState<TourStyle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const params = new URLSearchParams();
        if (popularOnly) params.set('popular', 'true');

        const response = await fetch(`/api/tour-styles?${params.toString()}`);
        const data = await response.json();

        if (data.success) {
          setStyles(data.tourStyles);
        }
      } catch (error) {
        console.error('Error fetching tour styles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStyles();
  }, [popularOnly]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-slate-900">Choose Tour Style</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {styles.map((style) => {
          const isSelected = selectedStyle === style.name;

          return (
            <button
              key={style.name}
              onClick={() => onSelect(style.name)}
              className={`
                relative p-6 rounded-xl border-2 transition-all text-left
                ${isSelected
                  ? 'border-sky-500 bg-sky-50 shadow-lg'
                  : 'border-slate-200 bg-white hover:border-sky-300 hover:shadow-md'
                }
              `}
            >
              {/* Selected Indicator */}
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}

              {/* Popular Badge */}
              {style.popular && (
                <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                  <Sparkles className="w-3 h-3" />
                  Popular
                </div>
              )}

              {/* Style Content */}
              <div className={`${style.popular ? 'mt-6' : ''}`}>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {style.displayName}
                </h4>

                <p className="text-sm text-slate-600 mb-4">
                  {style.description}
                </p>

                {/* Style Attributes */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">Pace:</span>
                    <span className="text-xs font-semibold text-slate-700 capitalize">
                      {style.pace}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">Transitions:</span>
                    <span className="text-xs font-semibold text-slate-700 capitalize">
                      {style.transitionStyle}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">Grading:</span>
                    <span className="text-xs font-semibold text-slate-700 capitalize">
                      {style.colorGrading}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-slate-500">Music:</span>
                    <div className="flex flex-wrap gap-1">
                      {style.musicGenre.map((genre, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold text-slate-700 capitalize bg-slate-100 px-2 py-0.5 rounded"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {styles.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No tour styles available
        </div>
      )}
    </div>
  );
}
