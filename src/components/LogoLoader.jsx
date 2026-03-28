import React, { useEffect, useRef, useState } from "react";
import "./LogoLoader.css";

const LogoLoader = ({ onFinish }) => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setVideoSrc(isMobile ? "/cinematic_small.mp4" : "/cinematic.mp4");
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.muted = false;
        video.volume = 1;
        await video.play();
      } catch {
        video.muted = true;
        await video.play();
      }
    };

    tryPlay();
  }, [videoSrc]);

  useEffect(() => {
    const enableSound = () => {
      const video = videoRef.current;
      if (video) {
        video.muted = false;
        video.volume = 1;
        video.play();
      }
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("touchstart", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };
  }, []);

  // 👇 handle smooth exit
  const handleEnd = () => {
    setFadeOut(true);

    setTimeout(() => {
      onFinish(); // remove loader AFTER fade
    }, 800); // match CSS duration
  };

  return (
    <div className={`logo-loader ${fadeOut ? "fade-out" : ""}`}>
      {videoSrc && (
        <video
          ref={videoRef}
          key={videoSrc}
          src={videoSrc}
          autoPlay
          playsInline
          onEnded={handleEnd}
          className="logo-video"
        />
      )}
    </div>
  );
};

export default LogoLoader;