import React from 'react';

const destinations = [
  {
    name: "Port Blair",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    name: "Havelock Island",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57"
  },
  {
    name: "Neil Island",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5"
  }
];

export function Destinations() {
  return (
    <section className="my-16 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h3 className="underline decoration-solid font-caudex">Destination</h3>
      <h2 className="text-2xl font-bold text-center font-caudex">Know more about your destinations in Andaman</h2>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden group">
            <img 
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                {destination.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}