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
    <div className={`bg-retro-gray border-2 border-t-retro-light border-l-retro-light border-b-retro-darker border-r-retro-darker shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] ${className}`}>
      {/* Inner Border */}
      <div className="border border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#808080] border-r-[#808080] h-full flex flex-col">
        {/* Header */}
        <div className={`flex items-center justify-between px-2 py-2 ${headerClassName}`}>
          <div className="flex items-center gap-2">
             {icon && <span className="w-4 h-4">{icon}</span>}
             <h3 className="text-white font-bold text-base tracking-wide font-retro uppercase drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">{title}</h3>
          </div>
          <button className="bg-retro-gray border border-t-retro-light border-l-retro-light border-b-retro-darker border-r-retro-darker w-5 h-5 flex items-center justify-center active:border-t-retro-darker active:border-l-retro-darker active:border-b-retro-light active:border-r-retro-light">
             <span className="text-black text-xs font-bold leading-none -mt-1">x</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex-grow font-retro text-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RetroWindow;


