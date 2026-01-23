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
}

const danceItems: DanceItem[] = [
  {
    id: 1,
    title: "Contemporary Fusion",
    description: "A piece exploring the intersection of contemporary and hip-hop movement vocabulary. This choreography focuses on fluidity and sharp accents.",
    styles: ["Contemporary", "Hip-Hop"],
    date: "2024",
    imageUrl: "/dance1.jpg"
  },
  {
    id: 2,
    title: "Urban Stories",
    description: "An ensemble piece telling stories of city life through movement. Collaborated with dancers to bring authentic urban narrative to the stage.",
    styles: ["Hip-Hop", "Street Jazz"],
    date: "2024",
    imageUrl: "/dance2.jpg"
  },
  {
    id: 3,
    title: "Abstract Emotions",
    description: "Solo choreography exploring emotional expression through abstract movement. Inspired by personal experiences and artistic growth.",
    styles: ["Contemporary", "Modern"],
    date: "2023",
    imageUrl: "/dance3.jpg"
  },
  {
    id: 4,
    title: "Ensemble Harmony",
    description: "A synchronous group piece emphasizing unity and connection. Features intricate formations and collective energy.",
    styles: ["Contemporary", "Fusion"],
    date: "2023",
    imageUrl: "/dance4.jpg"
  }
];

export default function DancePage() {
  return (
    <div className="min-h-screen p-4 sm:p-8 font-retro overflow-hidden relative bg-white/80 py-16 sm:py-24">
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
                {piece.imageUrl && (
                  <div className="w-full h-48 bg-retro-gray border border-retro-dark mb-4 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <p className="text-sm">[Photo placeholder]</p>
                      <p className="text-xs">{piece.title}</p>
                    </div>
                  </div>
                )}
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
              My style is eclectic—blending contemporary, hip-hop, and experimental movement into pieces that feel authentic and push my own boundaries as an artist. I believe in collaborative creation and love working with other dancers to bring visions to life.
            </p>
            <p className="mb-4">
              Whether performing on stage or creating in the studio, dance keeps me grounded and reminds me that not everything needs to be quantified to be meaningful.
            </p>
            <div className="mt-6 pt-6 border-t border-dashed border-gray-400">
              <p className="mb-2"><span className="text-retro-blue font-bold">TRAINING:</span> Contemporary, Jazz, Hip-Hop, Improv</p>
              <p className="mb-2"><span className="text-retro-blue font-bold">EXPERIENCE:</span> 10+ years of training and performance</p>
              <p><span className="text-retro-blue font-bold">CURRENT FOCUS:</span> Choreography & Creative Direction</p>
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
