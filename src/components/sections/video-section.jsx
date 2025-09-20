"use client";

import { useState, useRef, useCallback } from "react";
import { Play, Pause } from "lucide-react"; // ✅ Lucide icons
import { Link } from "react-router-dom";
import { Homepagevideo } from "../../assets/images";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch((error) => console.error("Video play failed:", error));
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <section>
      <div className="relative w-full h-[320px] sm:h-[360px] md:h-[420px] lg:h-[600px]">
        <video
          ref={videoRef}
          src={Homepagevideo}
          // poster=""
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute right-[5%] bottom-8">
          <button
            onClick={togglePlay}
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-transparent border-2 border-gray-500 flex items-center justify-center text-gray-500 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-gray-500" />
            ) : (
              <Play className="w-8 h-8 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* Icon row under the video */}
      {/* <div className="mt-6 flex items-center justify-center gap-3">
        <Play className="w-6 h-6 text-gray-500" />
        <span className="text-gray-500 text-lg">Watch how it's made</span>
      </div> */}
    </section>
  );
};

export default VideoSection;
