import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../data/packageStructure';
import { ArrowLeft, MapPin } from 'lucide-react';
import { packagesBySlug } from '../content';
import type { PackageDay } from '../content/types';

const INCLUSIVE_CONTENT = [
  'The package offers a per-couple rate that includes comfortable accommodation with complimentary breakfast. An AC vehicle is provided for sightseeing as per the itinerary, along with cruise tickets and museum entry fees, ensuring a seamless and enjoyable experience.',
]; 

const EXCLUSIVE_CONTENT = [
  'The vehicle is available only as specified in the itinerary and not for additional use. Any expenses arising from unforeseen circumstances, personal costs such as room service, special orders, or alcoholic and non-alcoholic beverages, are not included in the package.',
];

const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return <div>No package ID provided.</div>;
  }

  const baseSlug = categories.reduce((currentId, category) => {
    if (currentId.endsWith(`-${category.code}`)) {
      return currentId.slice(0, -(`-${category.code}`.length));
    }
    return currentId;
  }, id.toLowerCase());

  const packageContent = packagesBySlug[baseSlug];

  if (!packageContent) {
    return <div>Package not found.</div>;
  }

  const itinerary = packageContent.itinerary;
  const prices = packageContent.prices;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h1 className="font-caudex text-3xl font-bold mb-2 flex items-center gap-4 mt-16">
          <ArrowLeft className="cursor-pointer" onClick={() => navigate('/tour-packages')} />
          {itinerary.overviewTitle}
        </h1>
        <h2 className="text-xl text-gray-600 mb-6 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-500" />
          {itinerary.overviewSubtitle}
        </h2>

        {/* Prices Section */}
        <div className="my-8">
          <h3 className="font-poppins font-bold text-2xl leading-none mb-6">Package Prices</h3>
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 -mx-2 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-6 sm:overflow-visible sm:mx-0">
              {categories.map(category => (
                <div key={category.code} className="flex-shrink-0 w-40 sm:w-auto mx-2 sm:mx-0 border rounded-lg p-4 text-center shadow-md">
                  <h4 className="font-semibold text-base sm:text-lg">{category.name}</h4>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600 mt-1 sm:mt-2">
                    ₹{prices[category.code] ?? 'N/A'}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">per couple</p>
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none sm:hidden"></div>
          </div>
        </div>

        <h3 className="font-poppins font-bold text-2xl leading-none mb-6">Itinerary</h3>

        <div className="space-y-8 ml-4">
          {itinerary.days.map((day: PackageDay, index: number) => (
            <div key={index} className="relative pl-8 custom-dashed-border mb-8">
              <div className="absolute -left-4 bg-white">
                <div className="w-6 h-6 rounded bg-[#D5EBFF] flex items-center justify-center text-[#1E1D4C] text-sm font-bold p-4">
                  {String(day.day).padStart(2, '0')}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Day {day.day}: {day.title}</h4>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {day.activities.map((activity: string, actIndex: number) => (
                  <li key={actIndex}>{activity}</li>
                ))}
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {day.images.map((image, idx) => (
                  <div key={idx} className="relative w-full h-80 rounded-lg overflow-hidden shadow-md group">
                    <img 
                      src={image.url ?? ''} 
                      alt={image.name ?? `Day ${day.day}`} 
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-sm font-medium text-center px-2 py-1 bg-black/60 rounded-full inline-block">
                        {image.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Inclusive and Exclusive Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inclusive Box */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="text-center font-bold text-gray-800 mb-4">INCLUSIVE</h3>
            <div className="text-center text-gray-600 space-y-2 font-poppins text-[15px]">
              {INCLUSIVE_CONTENT.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>

          {/* Exclusive Box */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h3 className="text-center font-bold text-gray-800 mb-4">EXCLUSIVE</h3>
            <div className="text-center text-gray-600 space-y-2 font-poppins text-[15px]">
              {EXCLUSIVE_CONTENT.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default PackageDetails;