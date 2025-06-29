import { TrendingUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import "@fontsource/poppins";
const destination1 = '/static/destinations/Portblair.png';
const destination2 = '/static/destinations/HavelockIsland.png';
const destination3 = '/static/destinations/Neil.png';

const destinations = [
  { name: "Port Blair", image: destination1 },
  { name: "Havelock Island", image: destination2 },
  { name: "Neil Island", image: destination3 }
];

export function Destinations() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
              <div className="lg:w-1/3 text-center lg:text-left flex flex-col h-auto lg:h-[300px]">
          <div>
            <p className="text-lg font-caudex text-gray-500">Destination</p>
            <h2 className="text-3xl font-bold font-caudex text-[#181E4B] mt-2">Explore Top Islands of Andaman!</h2>
          </div>
            <Link to="/andaman-tours" className="mt-8 lg:mt-auto bg-[#1E1D4C] text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition items-center justify-center lg:justify-start mx-auto lg:mx-0 flex w-fit">
            Andaman tours
            <TrendingUp fontSize="small" className="ml-2" />
          </Link>
        </div>
                        <div className="lg:w-2/3 flex flex-col sm:flex-row gap-4 w-full lg:h-[300px]">
                    <div className="relative w-full sm:w-1/3 h-[250px] sm:h-full rounded-2xl overflow-hidden group">
            <img src={destinations[0].image} alt={destinations[0].name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <h3 className="text-white font-poppins font-normal leading-7">{destinations[0].name}</h3>
            </div>
          </div>
                    <div className="relative w-full sm:w-1/3 h-[250px] sm:h-full rounded-2xl overflow-hidden group">
            <img src={destinations[1].image} alt={destinations[1].name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <h3 className="text-white font-poppins font-normal leading-7">{destinations[1].name}</h3>
            </div>
          </div>
                    <div className="relative w-full sm:w-1/3 h-[250px] sm:h-full rounded-2xl overflow-hidden group">
            <img src={destinations[2].image} alt={destinations[2].name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <h3 className="text-white font-poppins font-normal leading-7">{destinations[2].name}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}