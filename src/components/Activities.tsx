
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bananaRide = '/static/activities/banana-ride.png';
const islandHopping = '/static/activities/island-hopping.jpg';
const kayaking = '/static/activities/kayaking.jpg';
const paraGliding = '/static/activities/para-gliding.jpg';
const scubaDiving = '/static/activities/scuba-diving.jpg';
const seaWalking = '/static/activities/sea-walking.png';
const snorkeling = '/static/activities/snorkeling.jpg';

const activities = [
  { name: "Banana Ride", image: bananaRide },
  { name: "Island Hopping", image: islandHopping },
  { name: "Kayaking", image: kayaking },
  { name: "Para Gliding", image: paraGliding },
  { name: "Scuba Diving", image: scubaDiving },
  { name: "Sea Walking", image: seaWalking },
  { name: "Snorkeling", image: snorkeling },
];

export function Activities() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto activity-carousel">
      <h4 className="text-[#181E4B] font-caudex text-xl underline decoration-solid text-center">Water activities</h4>  
      <h2 className="text-[#181E4B] text-3xl font-bold text-center mb-12 font-caudex">
        Enjoy water adventures in the <br /> Andaman Islands!
      </h2>
      
      <Slider {...settings}>
        {activities.map((activity, index) => (
          <div key={index} className="px-2">
            <div className="clipping-container rounded-2xl overflow-hidden">
              <div className="scale-container relative group">
                <img 
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
                                    <h3 className="text-white mb-2 sm:mb-0">{activity.name}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}