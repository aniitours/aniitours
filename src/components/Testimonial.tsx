import { useState, useEffect } from 'react';
const testimonialBg = './static/testimonial/testimonial-bg.png';
const passport = './static/testimonial/passport.png';
const drMani = './static/testimonial/dr-mani.jpg';
const drSunitha = './static/testimonial/dr-sunitha.jpg';
const gopal = './static/testimonial/gopal.jpg';
const shobana = './static/testimonial/shobana.jpg';

const testimonials = [
  {
    text: "Nice trip in December season in last moment booking. Good resort. Did scuba diving, parasailing and seawalk.",
    author: "Dr. Ravi",
    image: drMani,
  },
  {
    text: "Discovered Andaman holidays with family. Beautifully done even with Swaraj Dweep power cuts.",
    author: "Shobana and family",
    image: shobana,
  },
  {
    text: "We two families and children covered Swaraj Dweep Shaheed Dweep and Baratang. Swaraj Dweep food costly. Otherwise good time.",
    author: "Gopal",
    image: gopal,
  },
  {
    text: "Had a professional trip to Andaman. Family and children were happy covering all water activities.",
    author: "Dr. Suneetha and Family",
    image: drSunitha,
  },
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsFading(false);
      }, 500); // Match this with transition duration
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="md:relative">
        <img src={testimonialBg} alt="Testimonial background" className="hidden md:block w-full h-auto rounded-2xl" />
        <img src={passport} alt="Passport" className="hidden md:block absolute bottom-0 left-0 w-1/4" />
        <div className="md:absolute md:inset-0 flex flex-col items-center justify-center p-4 mt-16">
          <div className={`bg-white rounded-2xl shadow-lg p-6 pt-16 w-full max-w-md relative text-center transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <img src={currentTestimonial.image} alt={currentTestimonial.author} className="w-full h-full object-cover" />
            </div>
            <p className="text-[#5E6282] font-poppins text-sm md:text-base">
              "{currentTestimonial.text}"
            </p>
            <h6 className="mt-4 font-semibold text-[#5E6282] font-poppins">
              {currentTestimonial.author}
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}