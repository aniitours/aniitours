import "@fontsource/caudex";
import "@fontsource/poppins";

const ticket = './static/about-us/ticket.png';
const balloon = './static/about-us/hot-air-balloon.png';
const diamond = './static/about-us/diamond.png';



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