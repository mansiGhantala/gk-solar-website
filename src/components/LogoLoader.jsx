
// import React from "react";
// import "./LogoLoader.css";

// const LogoLoader = ({ onFinish }) => {
//   return (
//     <div className="logo-loader">
//       <video
//         src="/cinematic.mp4"  // ✅ path from public folder
//         autoPlay
//         muted
//         playsInline
//         onEnded={onFinish} // Trigger when video finishes
//         className="logo-video"
//       />
//     </div>
//   );
// };

// export default LogoLoader;

import React, { useEffect, useRef, useState } from "react";
import "./LogoLoader.css";

const LogoLoader = ({ onFinish }) => {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");

  // 📱 Responsive video selection
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    setVideoSrc(
      isMobile ? "/cinematic_small.mp4" : "/cinematic.mp4"
    );
  }, []);

  // 🔊 Try autoplay with sound
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.muted = false;
        video.volume = 1;
        await video.play();
      } catch (err) {
        // ❌ fallback (browser blocked)
        video.muted = true;
        await video.play();
      }
    };

    tryPlay();
  }, [videoSrc]);

  // 👆 Force sound on ANY interaction
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

  return (
    <div className="logo-loader">
      {videoSrc && (
        <video
          ref={videoRef}
          key={videoSrc}
          src={videoSrc}
          autoPlay
          playsInline
          onEnded={onFinish}
          className="logo-video"
        />
      )}
    </div>
  );
};

export default LogoLoader;