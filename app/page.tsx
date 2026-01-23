"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectFocusChart from "@/components/ProjectFocusChart";
import ProgressionChart from "@/components/ProgressionChart";
import TypingCharacter from "@/components/TypingCharacter";
import { experiences } from "@/data/resume";
import RetroWindow from "@/components/RetroWindow";
import GlitchText from "@/components/GlitchText";

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8 font-retro overflow-hidden relative" style={{ backgroundColor: "#EAE0F5" }}>
      
      {/* Background Decorative Elements */}
      <div className="fixed top-10 left-10 text-retro-pink/20 text-9xl pointer-events-none select-none z-0 opacity-10">
        INGRID
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 relative z-10">
        
        {/* HEADER / TITLE */}
        <div className="lg:col-span-12 mb-8 text-center">
          <GlitchText text="Hello, I'm Ingrid" className="text-6xl md:text-8xl font-bold text-retro-blue drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]" />
          <p className="text-xl md:text-2xl mt-2 text-retro-darker bg-white/50 inline-block px-2">
            Student at Northwestern University aspiring to become a data scientist. Always seeking opportunities to create user centric solution through predictive model & product analytics.
          </p>
        </div>

        {/* LEFT COLUMN: Main Profile & Status */}
        <div className="md:col-span-1 lg:col-span-5 space-y-4 sm:space-y-6">
          <RetroWindow title="Profile.exe" className="h-auto">
             <div className="flex flex-col items-center bg-white p-4 border-2 border-retro-dark shadow-inner">
          <div className="w-64 h-64 mx-auto bg-retro-light border border-retro-dark mb-4 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-retro-pink via-lf-lavender to-lf-purple opacity-50"></div>
                 <div className="w-52 h-52 mx-auto flex items-center justify-center relative overflow-hidden group bg-transparent border-none shadow-none">
                   <TypingCharacter />
                 </div>
                 <div className="absolute top-2 left-2 text-xs bg-retro-blue text-white px-1">PREVIEW</div>
               </div>
               <h2 className="text-2xl font-bold mb-2">Ingrid Yeung</h2>
               <p className="text-center text-retro-darker mb-4">
                 Junior at Northwestern University, majoring in Computer Science, Data Science and Statistics.
               </p>
               <div className="flex gap-2 w-full">
                 <Link href="mailto:ingridyeung2027@u.northwestern.edu" className="flex-1 bg-retro-gray border-2 border-t-retro-light border-l-retro-light border-b-retro-darker border-r-retro-darker py-2 text-center active:border-t-retro-darker active:border-l-retro-darker active:border-b-retro-light active:border-r-retro-light hover:bg-retro-light/50">
                   Email
                 </Link>
                 <Link href="https://www.linkedin.com/in/ingridkaiyiyeung/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-retro-gray border-2 border-t-retro-light border-l-retro-light border-b-retro-darker border-r-retro-darker py-2 text-center active:border-t-retro-darker active:border-l-retro-darker active:border-b-retro-light active:border-r-retro-light hover:bg-retro-light/50">
                   LinkedIn
                 </Link>
               </div>
             </div>
          </RetroWindow>

          <RetroWindow title="Fun_Fact.txt">
             <div className="bg-white p-4 border border-retro-dark h-full text-lg leading-relaxed text-gray-800">
               <p className="mb-4">
                 I am really passionate about the technical side of data—predictive modeling, building dashboards, engineering features—but I’m most excited when I can use those skills to solve real-world consumer problems and generate more product insights.
               </p>
               <p className="mb-4">
                 My experience has been a mix of rigorous engineering and business strategy, especially through my time at Pixocial where I focused heavily on product analytics, A/B testing, and dashboard reporting to help product teams make better decisions.
               </p>
               <p className="mb-4">
                 Outside of academics, I am very passionate about dancing and choreography, and I have choreographed several pieces for Northwestern's dance teams.
               </p>
               <div className="mt-4 pt-4 border-t border-dashed border-gray-400">
                 <p className="mb-1"><span className="text-retro-blue font-bold">PASSION:</span> Choreography & Performance, concerts, music, half marathon</p>
               </div>
             </div>
          </RetroWindow>
        </div>

        {/* MIDDLE / RIGHT COLUMN: Experience & Data */}
        <div className="md:col-span-1 lg:col-span-7 space-y-4 sm:space-y-6">
          
          {/* Experience Window */}
          <RetroWindow title="Experience_Log.doc" headerClassName="bg-retro-pink text-white">
             <div className="bg-white p-4 h-auto sm:h-96 lg:h-[500px] overflow-y-auto custom-scrollbar border border-retro-dark">
                {experiences.map((exp, i) => (
                  <div key={exp.id} className="mb-6 last:mb-0 border-b border-dashed border-gray-300 pb-4 last:border-0">
                    <h3 className="text-xl font-bold text-retro-blue">{exp.company}</h3>
                    <div className="flex justify-between text-sm text-gray-500 mb-1 font-sans">
                      <span className="font-bold text-retro-darker">{exp.role}</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-base leading-tight font-sans text-gray-700">{exp.description[0]}</p>
                  </div>
                ))}
                <Link href="/Yeung_Ingrid.pdf" target="_blank" rel="noopener noreferrer" className="block text-center mt-4 text-retro-blue hover:bg-retro-blue hover:text-white border border-retro-blue p-1">
                  [ VIEW RESUME ]
                </Link>
             </div>
          </RetroWindow>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
             {/* Skills */}
             <RetroWindow title="Toolbox.bmp">
                <div className="bg-white p-2 border border-retro-dark h-full flex flex-wrap content-start gap-2">
                   {["Python", "Pandas", "Numpy", "SQL", "React", "A/B Testing", "Tableau", "Looker Studio", "Git", "Jupyter", "Experiment Design", "ML modeling"].map(skill => (
                       <span key={skill} className="px-2 py-1 bg-retro-gray border border-t-retro-light border-l-retro-light border-b-retro-darker border-r-retro-darker text-sm hover:bg-retro-pink hover:text-white cursor-pointer active:translate-y-px">
                           {skill}
                       </span>
                   ))}
                </div>
             </RetroWindow>

             {/* Charts */}
             {/* Removed Growth_Metrics.xls / ProgressionChart as requested */}
          </div>
          
           {/* Creative Mix */}
           <RetroWindow title="Creative_Mix.pie">
                <div className="bg-white p-4 border border-retro-dark">
                   <ProjectFocusChart />
                </div>
           </RetroWindow>

        </div>

      </div>
      
      {/* Taskbar (Fixed Bottom) */}
      <div className="fixed bottom-0 left-0 w-full h-10 bg-[#E8C0FF] border-t-2 border-retro-light flex items-center px-2 gap-2 z-50">
         <button className="flex items-center gap-1 px-2 py-1 bg-[#E8C0FF] border-2 border-t-retro-light border-l-retro-light border-b-[#9B6BBB] border-r-[#9B6BBB] active:border-t-[#9B6BBB] active:border-l-[#9B6BBB] active:border-b-retro-light active:border-r-retro-light font-bold">
            <span className="w-4 h-4 bg-gradient-to-r from-red-500 to-yellow-500 rounded-sm inline-block"></span>
            START
         </button>
         <div className="h-6 w-[2px] bg-[#9B6BBB] mx-1"></div>
         <div className="flex-1 bg-white h-6 border-b border-white border-r-white border-t-[#9B6BBB] border-l-[#9B6BBB] shadow-inner px-2 flex items-center">
            <span className="text-xs">Welcome to Ingrid's Portfolio v2.0</span>
         </div>
         <div className="px-2 py-1 border border-[#9B6BBB] shadow-inner bg-[#E8C0FF] text-xs">
            12:00 PM
         </div>
      </div>

    </div>
  );
}
