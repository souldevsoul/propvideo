"use client"

import { useState, useRef } from 'react';
import { Play, Pause, Download, Share2, Maximize2, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyVideo {
  id: string;
  videoUrl: string;
  thumbnailUrl?: string;
  duration: number;
  aspectRatio: string;
  status: string;
  views: number;
  agentName?: string;
  brokerageName?: string;
}

interface VideoPreviewProps {
  video: PropertyVideo;
  onDownload?: () => void;
  onShare?: () => void;
  showStats?: boolean;
}

export function VideoPreview({ video, onDownload, onShare, showStats = true }: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progress);
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (video.status !== 'completed' || !video.videoUrl) {
    return (
      <div className="bg-slate-900 rounded-xl aspect-video flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto mb-4"></div>
          <p className="text-white text-lg font-semibold">
            {video.status === 'processing' ? 'Generating video...' : 'Video not available'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Video Player */}
      <div className="relative bg-slate-900 rounded-xl overflow-hidden group">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnailUrl}
          className="w-full aspect-video object-contain"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          playsInline
        />

        {/* Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
          {/* Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-slate-900" />
              ) : (
                <Play className="w-8 h-8 text-slate-900 ml-1" />
              )}
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
            {/* Progress Bar */}
            <div
              onClick={handleSeek}
              className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer group/progress"
            >
              <div
                className="h-full bg-sky-500 rounded-full transition-all group-hover/progress:bg-sky-400"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-sky-400 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="text-white hover:text-sky-400 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <span className="text-white text-sm font-medium">
                  {formatTime(currentTime)} / {formatTime(video.duration)}
                </span>
              </div>

              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-sky-400 transition-colors"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Agent Branding (if present) */}
          {(video.agentName || video.brokerageName) && (
            <div className="absolute top-4 left-4 bg-black/70 px-3 py-2 rounded-lg">
              {video.agentName && (
                <p className="text-white text-sm font-semibold">{video.agentName}</p>
              )}
              {video.brokerageName && (
                <p className="text-white/80 text-xs">{video.brokerageName}</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        {onDownload && (
          <Button
            onClick={onDownload}
            className="flex-1 py-3 bg-sky-500 text-white hover:bg-sky-600 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download
          </Button>
        )}

        {onShare && (
          <Button
            onClick={onShare}
            className="flex-1 py-3 bg-slate-200 text-slate-700 hover:bg-slate-300 flex items-center justify-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            Share
          </Button>
        )}
      </div>

      {/* Stats */}
      {showStats && (
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-slate-900">{video.views}</p>
              <p className="text-sm text-slate-600">Views</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{formatTime(video.duration)}</p>
              <p className="text-sm text-slate-600">Duration</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{video.aspectRatio}</p>
              <p className="text-sm text-slate-600">Aspect Ratio</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
