import { ImageResponse } from "next/og";

// Link-preview card (iMessage, LinkedIn, Slack...). Without it, previews grab the
// Spotify album art from the homepage.
export const alt = "Ingrid Yeung: Verified Data Enthusiast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#0d1b1e";
const text = "#eef7f6";
const dim = "#9fb8b8";
const cyan = "#00ffd5";
const lime = "#39ff14";

async function loadOxanium(weight: number) {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Oxanium:wght@${weight}`)).text();
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

// Vinyl grooves as concentric rings (Satori can't render repeating gradients).
const grooveRadii = Array.from({ length: 16 }, (_, i) => 196 - i * 8);

export default async function OpengraphImage() {
  const [bold, medium] = await Promise.all([loadOxanium(800), loadOxanium(500)]);
  const fonts = [
    ...(bold ? [{ name: "Oxanium", data: bold, weight: 800 as const }] : []),
    ...(medium ? [{ name: "Oxanium", data: medium, weight: 500 as const }] : []),
  ];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: ink, padding: "0 80px", fontFamily: "Oxanium", fontWeight: 500 }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: cyan, fontSize: 26, fontWeight: 700, letterSpacing: 4 }}>
            <svg width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill={cyan} /><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke={ink} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            VERIFIED DATA ENTHUSIAST
          </div>
          <div style={{ color: lime, fontSize: 24, letterSpacing: 14, marginTop: 34 }}>HEADLINING</div>
          <div style={{ display: "flex", fontWeight: 800, fontSize: 132, lineHeight: 0.95, marginTop: 8, backgroundImage: "linear-gradient(100deg, #ff8a3d, #ff3d7f)", backgroundClip: "text", color: "transparent" }}>
            INGRID
          </div>
          <div style={{ display: "flex", fontWeight: 800, fontSize: 132, lineHeight: 0.95, color: text }}>YEUNG</div>
          <div style={{ color: dim, fontSize: 26, letterSpacing: 3, marginTop: 30 }}>STATISTICS &amp; DATA SCIENCE · NORTHWESTERN &apos;27</div>
        </div>
        {/* Vinyl */}
        <div style={{ width: 400, height: 400, borderRadius: 200, background: "#111", boxShadow: "0 0 0 2px #1d383d, 0 0 80px rgba(0,255,213,.3)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          {grooveRadii.map((r) => (
            <div key={r} style={{ position: "absolute", left: 200 - r, top: 200 - r, width: r * 2, height: r * 2, borderRadius: r, border: "1px solid rgba(255,255,255,.07)" }} />
          ))}
          <div style={{ width: 136, height: 136, borderRadius: 68, background: "linear-gradient(135deg, #ff8a3d, #ff3d7f 55%, #00ffd5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 18, height: 18, borderRadius: 9, background: ink }} />
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
