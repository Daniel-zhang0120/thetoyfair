"use client"
import {
  Maximize2,
  PauseCircle,
  PlayCircle,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 py-10">
      <div className="relative rounded-xl overflow-hidden aspect-video w-full max-w-full">
        <div className="relative h-full group">
          <video
            ref={videoRef}
            src="/videos/Xpo720p.mp4"
            className="object-cover w-full h-full rounded-xl cursor-pointer"
            loop
            playsInline
            preload="auto"
            muted
            autoPlay
            onLoadedData={() => {
              videoRef.current?.play();
              setIsPlaying(true);
            }}
            onClick={() => {
              if (videoRef.current?.paused) {
                videoRef.current?.play();
                setIsPlaying(true);
              } else {
                videoRef.current?.pause();
                setIsPlaying(false);
              }
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <input
              type="range"
              className="w-full h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer"
              value={
                ((videoRef.current?.currentTime || 0) /
                  (videoRef.current?.duration || 1)) *
                100
              }
              onChange={(e) => {
                if (videoRef.current) {
                  const time =
                    (videoRef.current.duration * parseInt(e.target.value)) /
                    100;
                  videoRef.current.currentTime = time;
                }
              }}
            />

            <div className="flex items-center justify-between mt-2 text-white">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    if (videoRef.current?.paused) {
                      videoRef.current?.play();
                      setIsPlaying(true);
                    } else {
                      videoRef.current?.pause();
                      setIsPlaying(false);
                    }
                  }}
                >
                  {isPlaying ? (
                    <PauseCircle size={28} />
                  ) : (
                    <PlayCircle size={28} />
                  )}
                </button>

                <button
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.muted = !videoRef.current.muted;
                      setIsMuted((prev) => !prev);
                    }
                  }}
                >
                  {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
                </button>

                <span className="text-sm">
                  {formatTime(videoRef.current?.currentTime || 0)} /{" "}
                  {formatTime(videoRef.current?.duration || 0)}
                </span>
              </div>

              <button
                onClick={() => {
                  if (videoRef.current) {
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    } else {
                      videoRef.current.requestFullscreen();
                    }
                  }
                }}
              >
                <Maximize2 size={28} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
