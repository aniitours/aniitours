import websiteLogo from '../static/nav/amram-logo-75x.png';
import "@fontsource/marck-script";
import "@fontsource/poppins";


export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex flex-col items-center justify-center">
            <img className="mt-4 basis-[90%]" src={websiteLogo} alt="Description of the image" />
            <div className="text-xl font-marck text-[#204F69] basis-[10%]">Amram</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-poppins">Home</a>
            <a href="/about-us" className="text-gray-700 hover:text-blue-600 font-poppins">About Us</a>
            <a href="/andaman-tour" className="text-gray-700 hover:text-blue-600 font-poppins">Andaman Tour</a>
            <a href="/tour-packages" className="text-gray-700 hover:text-blue-600 font-poppins">Tour Packages</a>
            <button className="bg-[#181433] text-white px-12 py-2 rounded-lg hover:bg-blue-700 transition font-poppins">
              Query
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}