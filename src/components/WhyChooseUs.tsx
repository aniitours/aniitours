import { Hotel, Award, BadgePercent, Headset } from 'lucide-react';

const features = [
  {
    icon: <Hotel className="w-10 h-10 text-[#3A75F1]" />,
    title: 'Handpicked Hotels',
    description: 'We have a curated selection of top-tier hotels to ensure your comfort and satisfaction during your stay.',
  },
  {
    icon: <Award className="w-10 h-10 text-[#3A75F1]" />,
    title: 'World Class Service',
    description: 'Our dedicated team provides exceptional service, attending to every detail to make your trip unforgettable.',
  },
  {
    icon: <BadgePercent className="w-10 h-10 text-[#3A75F1]" />,
    title: 'Best Price Guarantee',
    description: 'We offer competitive pricing and the best value for your money, ensuring you get a great deal on your dream vacation.',
  },
  {
    icon: <Headset className="w-10 h-10 text-[#3A75F1]" />,
    title: '24/7 Support',
    description: 'Our support team is available around the clock to assist you with any questions or concerns during your travels.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 font-caudex">Why Choose Us</h2>
          <p className="text-gray-600 mt-2 font-poppins">Discover the advantages of traveling with ANII Tours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-caudex">{feature.title}</h3>
              <p className="text-gray-600 font-poppins text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
