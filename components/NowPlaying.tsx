import { experiences } from "@/data/resume";
import CompanyLogo from "@/components/CompanyLogo";

export default function NowPlaying() {
  const latest = experiences[0];
  return (
    <div className="fixed left-0 right-0 bottom-0 z-40 border-t border-raise bg-panel/95 backdrop-blur px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom,0px))]">
      <div className="max-w-[1100px] mx-auto flex items-center gap-3.5">
        <CompanyLogo src={latest.logo} name={latest.company} size={44} />
        <div className="min-w-0 flex-1">
          <b className="block text-sm truncate">{latest.role}</b>
          <small className="text-dim text-[13px]">{latest.company}</small>
          <div className="h-1 bg-raise rounded mt-1.5 overflow-hidden">
            <i className="block h-full w-3/4" style={{ background: "linear-gradient(90deg, var(--pink), var(--cyan))" }} />
          </div>
        </div>
        <div className="eq" aria-hidden="true"><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}
