import React from 'react';
import "@fontsource/caudex";
import "@fontsource/poppins";
import heroImage1 from '../static/hero/hero-image-1.png';
import heroImage2 from '../static/hero/hero-image-2.png';
import heroImage3 from '../static/hero/hero-image-3.png';


export function Hero() {
  return (
    <section className="pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-row h-1/2">
        <div className="basis-[60%] m-2 relative rounded-2xl overflow-hidden bg-blue-50 overflow-hidden">
          <img 
            src={heroImage1}
            alt="Beach view"
            className="w-full h-full object-cover"
          />
        </div>
        <div className='basis-[40%] m-2 flex flex-col'>
          <div className="basis-[50%] flex bg-blue-50 mb-2 rounded-2xl overflow-hidden">
            <img 
              src={heroImage2}
              alt="Beach view"
              className="w-full object-cover"
            />
          </div>
          <div className="basis-[50%] flex bg-blue-50 mb-2 rounded-2xl overflow-hidden">
            <img 
              src={heroImage3}
              alt="Beach view"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}