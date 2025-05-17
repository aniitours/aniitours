import "@fontsource/caudex";
import { Clock } from 'lucide-react';
import { ArrowOutward } from "@mui/icons-material";

const packages = [
  {
    title: "Discover Andaman",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    price: "₹6,999",
    duration: "3N4D",
    coverage: "Portblair -- Havelock -- Neil"
  },
  {
    title: "Explore Andaman",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
    price: "₹8,999",
    duration: "3N4D",
    coverage: "Portblair -- Havelock -- Neil"
  },
  {
    title: "Discover Andaman",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    price: "₹12,999",
    duration: "3N4D",
    coverage: "Portblair -- Havelock -- Neil"
  }
];

export function Packages() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
        <p className="text-xl font-caudex underline decoration-solid text-[#181E4B]">Packages</p>
        <h2 className="font-caudex text-2xl font-bold text-[#181E4B]">Tour packages you will Love!</h2>
        </div>
        <a href="#" className="text-blue-600 hover:underline">View all Packages →</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition p-2">
            <img 
              src={pkg.image}
              alt={pkg.title}
              className="h-48 w-full object-cover rounded-2xl"
            />
            <div className="pt-6">
              <div className="flex flex-row">
                <div className="basis-[70%]">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="font-normal text-gray-600 font-poppins">{pkg.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-caudex text-[#181E4B]">{pkg.title}</h3>
                </div>
                <div className="basis-[30%]">
                  <h3 className="font-normal flex justify-end font-poppins text-[#EFAC00]">Premium</h3>
                  <span className="text-xl font-semibold flex justify-end">{pkg.price}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <span className="text-md font-semibold text-[#7C7C7C]">{pkg.coverage}</span>
                </div>
              </div>
              <hr></hr>
              <div className="flex justify-center my-2">
                <button className="flex font-semibold items-center text-blue-600 px-1 py-2 transition">
                  View Detail
                </button>
                <ArrowOutward className="my-2 p-1 text-blue-600"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}