const testimonials = [
  {
    quote: '"The Andaman trip was absolutely magical! From the pristine beaches to the seamless travel arrangements, everything was perfect. A truly unforgettable experience."',
    name: 'Shreya Sharma',
    location: 'Mumbai, India',
    avatar: '/static/testimonials/avatar1.png',
  },
  {
    quote: '"Our family vacation was a huge success, thanks to the amazing itinerary. The kids loved the water sports, and we enjoyed the serene beauty of the islands."',
    name: 'Amit Patel',
    location: 'Delhi, India',
    avatar: '/static/testimonials/avatar2.png',
  },
  {
    quote: '"A fantastic honeymoon destination! The private dinners and sunset cruises were incredibly romantic. Highly recommend for couples looking for a special getaway."',
    name: 'Priya Singh',
    location: 'Bangalore, India',
    avatar: '/static/testimonials/avatar3.png',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 font-caudex">What Our Clients Say</h2>
          <p className="text-gray-600 mt-2 font-poppins">Read the stories of our happy travelers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-600 font-poppins italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 font-caudex">{testimonial.name}</h4>
                  <p className="text-gray-500 font-poppins">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
