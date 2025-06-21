import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import websiteLogo from '../static/nav/amram-logo-75x.png';
import "@fontsource/marck-script";
import "@fontsource/poppins";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.innerWidth < 768) { // md breakpoint
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY < 0 ? 0 : window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('resize', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('resize', controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b transition-transform duration-300 ${showNav ? 'transform-none' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex flex-col items-center justify-center">
            <img className="h-8" src={websiteLogo} alt="Amram logo" />
            <div className="text-lg font-marck text-[#204F69]">Amram</div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-poppins">Home</a>
            <a href="/about-us" className="text-gray-700 hover:text-blue-600 font-poppins">About Us</a>
            <a href="/tour-packages" className="text-gray-700 hover:text-blue-600 font-poppins">Tour Packages</a>
            <button className="bg-[#181433] text-white px-12 py-2 rounded-lg hover:bg-blue-700 transition font-poppins">
              Query
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none mr-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <a href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium font-poppins">Home</a>
            <a href="/about-us" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium font-poppins">About Us</a>
            <a href="/tour-packages" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium font-poppins">Tour Packages</a>
            <button className="bg-[#181433] text-white w-full mt-2 px-12 py-2 rounded-lg hover:bg-blue-700 transition font-poppins">
              Query
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}