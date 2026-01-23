import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#C0C0C0] border-b-4 border-b-[#808080] border-t-2 border-t-[#FFFFFF] shadow-sm fixed top-0 z-50 font-retro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-l-2 border-l-[#FFFFFF] border-r-2 border-r-[#808080] h-full bg-[#C0C0C0]">
        <div className="flex justify-between h-12 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C0C0C0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] flex items-center justify-center text-retro-blue font-bold text-lg active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white">
              IY
            </div>
            <Link href="/" className="text-2xl font-bold text-retro-blue tracking-tight uppercase drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
              Ingrid Yeung
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'Dance', 'Projects'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-black hover:bg-retro-blue hover:text-white px-3 py-1 text-xl transition-colors border-2 border-transparent hover:border-t-white hover:border-l-white hover:border-b-[#808080] hover:border-r-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
