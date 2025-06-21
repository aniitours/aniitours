import "@fontsource/caudex";
import "@fontsource/poppins";
import trees from '../static/icons/trees-icon.svg';
import binocular from '../static/icons/binocular-icon.svg';
import swim from '../static/icons/swim-icon.svg';
import sleep from '../static/icons/sleep-icon.svg';

const services = [
  {
    icon: trees,
    color: 'bg-[#DFEBE0]',
    title: 'Guided Tours',
    description: 'Explore the Andaman Islands with our expertly guided tours just for you!'
  },
  {
    icon: binocular,
    color: 'bg-[#f5884933]',
    title: 'Sight Seeing',
    description: 'Discover the Andaman Islands with our guided sightseeing tours!'
  },
  {
    icon: swim,
    color: 'bg-[#4DEDED26]',
    title: 'Adventures',
    description: 'Dive into adventure with our guided tour, featuring thrilling water activities!'
  },
  {
    icon: sleep,
    color: 'bg-[#FFA0AC33]',
    title: 'Hotel Bookings',
    description: 'Book your stay in the Andaman Islands with our hotel booking services!'
  }
];

export function Services() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 font-caudex text-[#181E4B]">Our Services For You</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-white transition">
            <div className="flex items-center justify-center mb-4">
              <span className={`flex items-center px-4 ${service.color} rounded-tl-2xl rounded-br-2xl`}>
              <img src={service.icon} className="w-12 h-12 mx-auto mb-4 text-blue-600 pt-4" />
              </span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-[#1E1D4C] font-caudex">{service.title}</h3>
            <p className="text-gray-600 font-poppins">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}