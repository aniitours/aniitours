import couple from '../static/special-packages/couple.png';
import shell from '../static/special-packages/shell.png';
import otherCouple from '../static/special-packages/couple.jpg';
import family from '../static/special-packages/family.jpg';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import "@fontsource/caudex";
import { useNavigate } from 'react-router-dom';

export function SpecialPackages() {

  const navigate = useNavigate();

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
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img src={otherCouple} alt="Image" className="w-full h-full object-cover" />
              </div>
              <h2 className='text-2xl font-semibold font-caudex m-12 font-[#181E4B]'>Honeymoon Packages</h2>
            </div>
            <div className='w-full my-8 flex flex-row items-center'>
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img src={family} alt="Image" className="w-full h-full object-cover" />
              </div>
              <h2 className='text-2xl font-semibold font-caudex m-12 font-[#181E4B]'>Family Packages</h2>
            </div>
            <div className='w-full flex items-center'>
              <button className='bg-[#1E1D4C] text-white flex flex-row justify-center items-center rounded-xl px-6 py-2' onClick={() => navigate(`/tour-packages`)}>
                <p>Customise Tour Packages</p>
                <ArrowOutward className="my-2 p-1 text-white"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}