import React from "react";

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  icon?: React.ReactNode;
}

const RetroWindow: React.FC<RetroWindowProps> = ({ 
  title, 
  children, 
  className = "",
  headerClassName = "bg-retro-blue",
  icon
}) => {
  return (
    <div className={`bg-[#FFB6E0] border-4 border-t-[#FFD700] border-l-[#FFD700] border-b-[#9B6BBB] border-r-[#9B6BBB] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] ${className}`}>
      {/* Inner Border */}
      <div className="border-2 border-t-[#FFC0E0] border-l-[#FFC0E0] border-b-[#E091D0] border-r-[#E091D0] h-full flex flex-col">
        {/* Header */}
        <div className={`flex items-center justify-between px-3 py-2 ${headerClassName || "bg-[#FFD700]"}`}>
          <div className="flex items-center gap-2">
             {icon && <span className="w-4 h-4">{icon}</span>}
             <h3 className="text-[#4A1B5C] font-bold text-base tracking-wide font-retro uppercase drop-shadow-[1px_1px_2px_rgba(0,0,0,0.2)]">{title}</h3>
          </div>
          <button className="bg-[#FFD700] border-2 border-t-white border-l-white border-b-[#9B6BBB] border-r-[#9B6BBB] w-5 h-5 flex items-center justify-center active:border-t-[#9B6BBB] active:border-l-[#9B6BBB] active:border-b-white active:border-r-white">
             <span className="text-[#4A1B5C] text-xs font-bold leading-none -mt-1">x</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex-grow font-retro text-lg bg-[#FFE0F0]" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.5) 10px, rgba(255,255,255,0.5) 20px)" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default RetroWindow;


