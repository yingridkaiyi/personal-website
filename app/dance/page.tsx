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
    <div className="min-h-screen p-4 sm:p-8 font-retro overflow-hidden relative py-16 sm:py-24" style={{ backgroundColor: "#EAE0F5" }}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-retro-blue drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] mb-4">
            Dance Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-retro-darker bg-white/50 inline-block px-4 py-2">
            Choreography, performances, and creative expression through movement.
          </p>
        </div>

        {/* DANCE PIECES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {danceItems.map((piece) => (
            <RetroWindow key={piece.id} title={piece.title}>
              <div className="bg-white p-4 border border-retro-dark h-full">
                {piece.videoUrl ? (
                  <div className="w-full mb-4">
                    {piece.videoType === 'youtube' ? (
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full border border-retro-dark"
                          src={piece.videoUrl}
                          title={piece.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : piece.videoType === 'instagram' ? (
                      <div className="flex justify-center">
                        <iframe
                          src={piece.videoUrl}
                          width="100%"
                          maxWidth="500"
                          height="600"
                          frameBorder="0"
                          scrolling="no"
                          allowTransparency
                          title={piece.title}
                        ></iframe>
                      </div>
                    ) : (
                      <video
                        className="w-full border border-retro-dark bg-black"
                        controls
                        controlsList="nodownload"
                      >
                        <source src={piece.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                ) : piece.imageUrl ? (
                  <div className="w-full h-48 bg-retro-gray border border-retro-dark mb-4 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p className="text-sm">[Photo placeholder]</p>
                      <p className="text-xs">{piece.title}</p>
                    </div>
                  </div>
                ) : null}
                <p className="text-base text-gray-800 mb-4 leading-relaxed">
                  {piece.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-3">
                  {piece.styles.map((style) => (
                    <span key={style} className="px-2 py-1 bg-retro-pink text-white text-xs font-bold border border-retro-darker">
                      {style}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-retro-blue font-bold">
                  {piece.date}
                </div>
              </div>
            </RetroWindow>
          ))}
        </div>

        {/* ABOUT DANCE SECTION */}
        <RetroWindow title="About_My_Dance.txt" className="mb-12">
          <div className="bg-white p-4 border border-retro-dark text-gray-800 leading-relaxed">
            <p className="mb-4">
              Dance has always been my creative outlet and way to express emotions that data can't quite capture. Through choreography, I explore movement, storytelling, and the connection between physicality and emotion.
            </p>
            <p className="mb-4">
              Whether performing on stage or creating in the studio, dance keeps me grounded and reminds me that not everything needs to be quantified to be meaningful.
            </p>
            <div className="mt-6 pt-6 border-t border-dashed border-gray-400">
              <p className="mb-2"><span className="text-retro-blue font-bold">TRAINING:</span> Hip Hop, Jazz, Ballroom</p>
              <p><span className="text-retro-blue font-bold">CURRENT FOCUS:</span> Choreography</p>
            </div>
          </div>
        </RetroWindow>

        {/* BACK BUTTON */}
        <div className="text-center">
          <Link href="/" className="inline-block bg-retro-gray border-2 border-t-retro-light border-l-retro-light border-b-retro-darker border-r-retro-darker px-6 py-2 text-lg font-bold text-black hover:bg-retro-light/80 active:border-t-retro-darker active:border-l-retro-darker active:border-b-retro-light active:border-r-retro-light">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
