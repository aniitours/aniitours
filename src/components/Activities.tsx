import React from 'react';

const activities = [
  {
    name: "Parasailing",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5"
  },
  {
    name: "Scuba Diving",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21"
  },
  {
    name: "Kayaking",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57"
  },
  {
    name: "Snorkeling",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5"
  },
  {
    name: "Island Hopping",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21"
  }
];

export function Activities() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h4 className="text-[#181E4B] font-caudex text-xl underline decoration-solid text-center">Water activities</h4>  
      <h2 className="text-[#181E4B] text-3xl font-bold text-center mb-12 font-caudex">
        Enjoy water adventures in the <br /> Andaman Islands!
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {activities.map((activity, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden group">
            <img 
              src={activity.image}
              alt={activity.name}
              className="w-full h-64 object-cover transition group-hover:scale-105"
            />
            <div className="inset-0 bg-gradient-to-t from-black/60 to-transparent bg-red-200 h-1/5">
              <h3 className="w-full absolute bottom-4 text-white font-medium text-center font-poppins">
                {activity.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}