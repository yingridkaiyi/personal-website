type Props = { src?: string; name: string; size?: number };

// Company logo used as a mask so it takes the neon gradient; falls back to initials.
export default function CompanyLogo({ src, name, size = 44 }: Props) {
  const initials = name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="logo-tile" style={{ width: size, height: size }} role="img" aria-label={`${name} logo`}>
      {src ? (
        <span className="logo-mark" style={{ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})` }} />
      ) : (
        <span className="font-display font-black text-xs logo-initials">{initials}</span>
      )}
    </div>
  );
}
