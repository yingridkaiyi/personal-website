import Link from 'next/link';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Dance', href: '/dance' },
];

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-raise">
      <div className="wrap flex justify-between items-center gap-3 py-4 flex-wrap">
        <Link href="/" className="font-display font-black text-xl tracking-tight">
          INGRID<b className="neon">.</b>FM
        </Link>
        <ul className="flex gap-1.5">
          {links.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-dim font-semibold text-sm px-3.5 py-1.5 rounded-full bg-panel hover:bg-neon-cyan hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
