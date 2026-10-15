"use client";

import Link from "next/link";
import RetroWindow from "@/components/RetroWindow";

interface DanceItem {
  id: number;
  title: string;
  description: string;
  styles: string[];
  date: string;
  videoUrl?: string;
  imageUrl?: string;
  videoType?: 'youtube' | 'embed' | 'instagram'; // 'youtube' for YouTube, 'embed' for video files, 'instagram' for Instagram posts
}

const danceItems: DanceItem[] = [
  {
    id: 1,
    title: "Choreography - Walk it Out",
    description: "Choreographed for Refresh Dance Crew Spring show 2025.",
    styles: ["Hip-Hop"],
    date: "2025",
    videoUrl: "https://www.instagram.com/p/DNnpHYQSOig/embed/",
    videoType: 'instagram'
  },
  {
    id: 2,
    title: "Choreography - Humble",
    description: "Choreographed for Northwestern's biggest annual dance show - Refusionshaka 2025.",
    styles: ["Hip-Hop", "Hardhitting"],
    date: "2025",
    videoUrl: "https://www.instagram.com/p/DTGVKYxEUg4/embed/",
    videoType: 'instagram'
  },
  {
    id: 3,
    title: "Open Class - Honest",
    description: "Choreographed with a partner and taught a class to the general school public",
    styles: ["Chill", "Hip Hop"],
    date: "2025",
    videoUrl: "https://www.instagram.com/p/DKIq0r2Oq52/embed/",
    videoType: 'instagram'
  }
  // {
  //   id: 4,
  //   title: "Ensemble Harmony",
  //   description: "A synchronous group piece emphasizing unity and connection. Features intricate formations and collective energy.",
  //   styles: ["Contemporary", "Fusion"],
  //   date: "2023",
  //   imageUrl: "/dance4.jpg"
  // }
];

export default function DancePage() {
  return (
    <div className="wrap pt-10">
      <div>
        {/* HEADER */}
        <div className="mb-10">
          <div className="eyebrow">Dance</div>
          <h1 className="font-display font-black text-[clamp(36px,6vw,64px)] leading-none tracking-[-.01em] mt-2.5 mb-4">
            Dance <span className="neon">Portfolio</span>
          </h1>
          <p className="text-dim max-w-[52ch]">
            Choreography, performances, and creative expression through movement.
          </p>
        </div>

        {/* DANCE PIECES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {danceItems.map((piece) => (
            <RetroWindow key={piece.id} title={piece.title}>
              <div className="h-full">
                {piece.videoUrl ? (
                  <div className="w-full mb-4">
                    {piece.videoType === 'youtube' ? (
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full border border-raise rounded-lg"
                          src={piece.videoUrl}
                          title={piece.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : piece.videoType === 'instagram' ? (
                      <div className="flex justify-center">
                        <div style={{ maxWidth: "500px", width: "100%" }}>
                          <iframe
                            src={piece.videoUrl}
                            width="100%"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency
                            title={piece.title}
                          ></iframe>
                        </div>
                      </div>
                    ) : (
                      <video
                        className="w-full border border-raise rounded-lg bg-black"
                        controls
                        controlsList="nodownload"
                      >
                        <source src={piece.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                ) : piece.imageUrl ? (
                  <div className="w-full h-48 bg-raise border border-raise rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-dim">
                      <p className="text-sm">[Photo placeholder]</p>
                      <p className="text-xs">{piece.title}</p>
                    </div>
                  </div>
                ) : null}
                <p className="text-base text-dim mb-4 leading-relaxed">
                  {piece.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-3">
                  {piece.styles.map((style) => (
                    <span key={style} className="genre !text-xs !px-3 !py-1">
                      {style}
                    </span>
                  ))}
                </div>
                <div className="font-mono-ui text-sm text-neon-cyan">
                  {piece.date}
                </div>
              </div>
            </RetroWindow>
          ))}
        </div>

        {/* ABOUT DANCE SECTION */}
        <RetroWindow title="About_My_Dance.txt" className="mb-12">
          <div className="leading-relaxed">
            <p className="mb-4">
              Dance has always been my creative outlet and way to express emotions that data can&apos;t quite capture. Through choreography, I explore movement, storytelling, and the connection between physicality and emotion.
            </p>
            <p className="mb-4">
              Whether performing on stage or creating in the studio, dance keeps me grounded and reminds me that not everything needs to be quantified to be meaningful.
            </p>
            <div className="mt-6 pt-6 border-t border-raise">
              <p className="mb-2"><span className="font-mono-ui text-xs uppercase tracking-widest text-neon-pink">TRAINING:</span> Hip Hop, Jazz, Ballroom</p>
              <p><span className="font-mono-ui text-xs uppercase tracking-widest text-neon-pink">CURRENT FOCUS:</span> Choreography</p>
            </div>
          </div>
        </RetroWindow>

        {/* BACK BUTTON */}
        <div>
          <Link href="/" className="btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
