import { Facebook, Twitter, Instagram } from 'lucide-react';

const footerHill = './static/footer/footer-hill.png';
const websiteLogo = './static/nav/amram-logo-75x.png';

export function Footer() {
  return (
    <footer className='mt-16'>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-99">
        <div className='flex absolute w-full z-0'>
          <div className='basis-[50%]'></div>
          <img src={footerHill} alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 z-2">
          <div>
          <div className="flex flex-col items-center justify-center mr-12">
            <img className="mt-4" src={websiteLogo} alt="Description of the image" />
            <div className="text-xl font-marck text-[#204F69] basis-[10%]">Amram</div>
          </div>
            <p className="text-gray-400">
            C-101/2, Near Cottage Industries, Middle Point, Port Blair - 744101
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Tour Packages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">3 Night 4 Days</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">4 Night 5 Days</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">5 Night 6 Days</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">6 Night 7 Days</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-4">Mail : hisgracetourstravel@gmail.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#E5E5EA] mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Grace Tourist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}