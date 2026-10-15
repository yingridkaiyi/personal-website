import React from "react";

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  icon?: React.ReactNode;
}

// Dark panel with a mono "track title" header, used by the Dance page.
const RetroWindow: React.FC<RetroWindowProps> = ({
  title,
  children,
  className = "",
  headerClassName = "",
  icon
}) => {
  return (
    <div className={`panel overflow-hidden flex flex-col ${className}`}>
      <div className={`flex items-center gap-2 px-5 py-3 border-b border-raise ${headerClassName}`}>
        {icon && <span className="w-4 h-4">{icon}</span>}
        <h3 className="font-mono-ui text-xs uppercase tracking-widest text-neon-cyan">{title}</h3>
      </div>
      <div className="p-5 flex-grow">
        {children}
      </div>
    </div>
  );
};

export default RetroWindow;
