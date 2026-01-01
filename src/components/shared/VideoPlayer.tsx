"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type VideoPlayerProps =
  | { variant: "mp4"; src: string; poster?: string; caption?: string; className?: string }
  | { variant: "youtube"; youtubeId: string; poster?: string; caption?: string; className?: string };

export default function VideoPlayer(props: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const baseClasses =
    "relative overflow-hidden rounded-sm border border-slate-200/70 dark:border-slate-800 bg-gradient-to-b from-transparent via-slate-100/40 to-transparent dark:via-slate-900/20";
  const buttonClasses = "absolute inset-0 flex items-center justify-center";
  const playButton = (
    <button
      aria-label="Play video"
      onClick={() => setPlaying(true)}
      className="group inline-flex items-center justify-center rounded-full w-20 h-20 bg-white/70 dark:bg-slate-800/70 backdrop-blur shadow-xl hover:bg-white hover:dark:bg-slate-800 hover:scale-105 transition-all duration-300"
    >
      <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  );

  return (
    <div ref={containerRef} className={`${baseClasses} ${props.className ?? ""}`}>
      <div className="relative aspect-video">
        {props.variant === "youtube" ? (
          playing ? (
            <iframe
              title="YouTube video player"
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${props.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <>
              {(props.poster || inView) && (
                <Image
                  alt="Video poster"
                  src={props.poster ?? `https://i.ytimg.com/vi/${props.youtubeId}/hqdefault.jpg`}
                  fill
                  className="object-cover"
                  priority={false}
                />
              )}
              <div className={buttonClasses}>{playButton}</div>
            </>
          )
        ) : props.variant === "mp4" ? (
          <>
            {playing ? (
              <video
                className="absolute inset-0 w-full h-full"
                controls
                playsInline
                autoPlay
                muted
                preload="metadata"
                poster={props.poster}
                src={props.src}
                controlsList="nodownload"
                disablePictureInPicture
              />
            ) : (
              <>
                {(props.poster || inView) && (
                  <Image alt="Video poster" src={props.poster ?? "/logo.svg"} fill className="object-cover" />
                )}
                <div className={buttonClasses}>{playButton}</div>
              </>
            )}
          </>
        ) : null}
      </div>
      {props.caption && (
        <div className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{props.caption}</div>
      )}
    </div>
  );
}