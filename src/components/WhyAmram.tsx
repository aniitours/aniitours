import "@fontsource/caudex";
import "@fontsource/poppins";
import trees from '../static/icons/trees-icon.svg';
import binocular from '../static/icons/binocular-icon.svg';
import swim from '../static/icons/swim-icon.svg';
import sleep from '../static/icons/sleep-icon.svg';
import ticket from '../static/about-us/ticket.png';
import balloon from '../static/about-us/hot-air-balloon.png';
import diamond from '../static/about-us/diamond.png';


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

export function WhyAmram() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 font-caudex">Why Choose Amram</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center flex flex-col items-center">
              <img src={ticket} alt="" className="mb-4"/>
              <h3 className="font-bold mb-2">Ultimate flexibility</h3>
              <p className="text-gray-600 w-2/3">
                You're in control, with free cancellation and payment options to satisfy any plan or budget.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
                <img src={diamond} alt="" className="mb-4" />
              <h3 className="font-bold mb-2">Memorable experiences</h3>
              <p className="text-gray-600 w-2/3">
                Browse and book tours and activities so incredible, you'll want to tell your friends.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
                <img src={balloon} alt="" className="mb-4" />
              <h3 className="font-bold mb-2">Quality at our core</h3>
              <p className="text-gray-600 w-2/3">
                High-quality standards. Millions of reviews. A tour company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}