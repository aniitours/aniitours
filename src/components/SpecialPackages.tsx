const couple = './static/special-packages/couple.png';
const shell = './static/special-packages/shell.png';
const otherCouple = './static/special-packages/couple.jpg';
const family = './static/special-packages/family.jpg';
import "@fontsource/caudex";
import { Link } from 'react-router-dom';
import { TrendingUp } from '@mui/icons-material';

export function SpecialPackages() {

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-row">
        <div className="basis-[40%]">
          <img 
              src={couple}
              className="w-full object-cover rounded-2xl"
          />
        </div>
        <div className="basis-[60%] flex flex-row">
          <div className="basis-[20%] h-full"></div>
          <div className="basis-[80%] h-full flex-row">
            <div className="h-1/5 flex">
              <div className="flex mb-8 flex justify-between w-full">
                <div className="flex flex-col basis-[70%]">
                  <p className="text-xl font-caudex underline decoration-solid text-[#181E4B]">Packages</p>
                  <h2 className="font-caudex text-4xl font-bold text-[#181E4B]">Special Packages!</h2>
                </div>
                <div className='flex justify-end'>
                  <img src={shell} alt="" className='h-full'/>
                </div>
              </div>
            </div>
            <div className='w-full my-2 flex flex-row items-center'>
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img src={otherCouple} alt="Image" className="w-full h-full object-cover" />
              </div>
              <h2 className='text-2xl font-semibold font-caudex m-12 font-[#181E4B]'>Honeymoon Packages</h2>
            </div>
            <div className='w-full my-8 flex flex-row items-center'>
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img src={family} alt="Image" className="w-full h-full object-cover" />
              </div>
              <h2 className='text-2xl font-semibold font-caudex m-12 font-[#181E4B]'>Family Packages</h2>
            </div>
            <div className="text-center mt-8 mr-4">
              <Link to="/tour-packages#contact-form" className="w-full flex items-center justify-center bg-[#1E1D4C] text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition">
                Customise Tour Packages
                <TrendingUp fontSize="small" className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}