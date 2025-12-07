import "@fontsource/caudex";
import { Clock } from 'lucide-react';
import { ArrowOutward } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { packages } from '../data/packages';

export function Packages() {
  // Get specific packages by title and duration
  const getPackageByTitleAndDuration = (title: string, duration: string) => {
    return packages.find(pkg => 
      pkg.title.toLowerCase() === title.toLowerCase() && 
      pkg.duration === duration
    );
  };

  const topPackages = [
    getPackageByTitleAndDuration('Budgety Andaman', '3N4D'),
    getPackageByTitleAndDuration('Scuba Basic', '4N5D'),
    getPackageByTitleAndDuration('Couple Special', '6N7D')
  ].filter((pkg): pkg is NonNullable<typeof pkg> => pkg !== undefined); // Remove any undefined values with type guard
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
        <h2 className="font-caudex text-2xl font-bold text-[#181E4B]">Tour packages you will Love!</h2>
        </div>
        <Link to="/tour-packages" className="text-blue-600 hover:underline hidden md:block">View all Packages →</Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topPackages.map((pkg, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition p-2 border-2 border-transparent hover:border-[#E2ECFF] flex flex-col">
            <img 
              src={pkg.images}
              alt={pkg.title}
              className="h-48 w-full object-cover rounded-2xl"
            />
            <div className="pt-6 flex flex-col flex-grow">
              <div className="flex flex-row mb-4">
                <div className="basis-[70%]">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="font-normal text-gray-600 font-poppins">{pkg.durationAlias}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#181E4B]">{pkg.title}</h3>
                </div>
                <div className="basis-[30%]">
                  <h3 className="font-normal flex justify-end font-poppins text-[#37863A] whitespace-nowrap">pricing starts&nbsp;@</h3>
                  <span className="text-xl font-semibold flex justify-end">₹{pkg.prices?.budget || pkg.price}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4 min-h-[3rem]">
                <div className="flex items-center">
                  <span className="text-md font-semibold text-[#7C7C7C]">{pkg.subtitle}</span>
                </div>
              </div>
              <div className="mt-auto">
                <hr className="mb-2"></hr>
                <Link to={`/package/${pkg.id}`} className="flex justify-center items-center text-blue-600 hover:text-blue-700 transition">
                  <span className="font-semibold">View Detail</span>
                  <ArrowOutward className="ml-1"/>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 md:hidden">
        <Link to="/tour-packages" className="block w-full bg-[#181433] text-white px-12 py-3 rounded-lg hover:bg-blue-700 transition font-poppins flex items-center justify-center">
          View all Packages
          <ArrowOutward className="ml-2"/>
        </Link>
      </div>
    </section>
  );
}