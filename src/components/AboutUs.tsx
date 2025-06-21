import React from 'react';
import { Target, Sparkles, Shield } from 'lucide-react';
import coupleStroll from '../static/about-us/couples-stroll.png';
import aboutUs1 from '../static/about-us/about-us-1.png';
import aboutUs2 from '../static/about-us/about-us-2.png';
import aboutUs3 from '../static/about-us/about-us-3.png';
import service from '../static/about-us/service.png';
import mission from '../static/about-us/mission.png';
import vision from '../static/about-us/vision.png';
import couple from '../static/about-us/couple.png';
import { WhyAmram } from './WhyAmram';


const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden">
          <img 
            src={coupleStroll}
            alt="Beach couple"
            className="w-full h-96 md:h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-end">
          {/* Left Part - Text and 2 images */}
          <div className="md:col-span-3 flex flex-col">
            {/* Text */}
            <div>
              <h1 className="text-3xl font-bold mb-6 font-caudex">Welcome to Amram</h1>
              <p className="text-gray-600 mb-6 font-poppins">
                Creating Unforgettable Travel Experiences Combined with Nature
                At Amram, we are dedicated to crafting unique and memorable journeys that immerse you in the natural beauty and cultural richness of the Andaman and Nicobar Islands. Our mission is to provide adventures that are both thrilling and enriching, ensuring you experience the best of what this stunning region has to offer.
              </p>
            </div>
            {/* 2 Images */}
            <div className="flex-grow flex items-end mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src={aboutUs2} alt="" className="rounded-lg w-full h-64 md:h-full object-cover" />
                <img src={aboutUs3} alt="" className="rounded-lg w-full h-64 md:h-full object-cover" />
              </div>
            </div>
          </div>
          {/* Right Part - 1 image */}
          <div className="md:col-span-2">
            <img src={aboutUs1} alt="" className="rounded-lg w-full h-64 md:h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="py-16">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                <img src={service} alt="" />
                </div>
                <div>
                <h2 className="text-2xl font-bold mb-6 font-caudex">Our Journey</h2>
                <p className="text-gray-600 mb-6 font-poppins">
                    With years of experience in organizing personalized tours, we decided to create a dedicated platform to share our expertise with a broader audience. Our tours are designed to be flexible, allowing you to customize your itinerary to suit your preferences and interests. Whether you seek the thrill of adventure, the serenity of beautiful landscapes, or the comfort of excellent accommodations, Amram is your ideal travel partner.
                </p>
                <p className="text-gray-600 font-poppins">
                    Today, Amram is proud to offer a diverse range of tours, from thrilling adventures to serene retreats. Whether you want to explore the vibrant marine life through scuba diving, trek through lush jungles, relax on secluded beaches, or experience the rich cultural heritage of the islands, we have something for everyone. Each tour is meticulously planned and executed, with attention to detail and a commitment to excellence.
                </p>
                </div>
            </div>
            </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12">
            <div className='shadow-lg rounded-2xl p-6 px-8'>
                <img src={mission} alt="" className='my-2'/>
                <h3 className="text-xl font-bold mb-4 font-caudex">Our Mission</h3>
                <p className="text-gray-600 font-poppins">
                At Amram, our mission is to create unforgettable travel experiences that seamlessly blend adventure, relaxation, and cultural immersion, all while showcasing the natural beauty and rich heritage of the Andaman and Nicobar islands.
                </p>
            </div>
            <div className='shadow-lg rounded-2xl p-6 px-8'>
                <img src={vision} alt="" className='my-4'/>
                <h3 className="text-xl font-bold mb-4 font-caudex">Our Vision</h3>
                <p className="text-gray-600 font-poppins">
                Our vision is to become the leading travel provider in the Andaman and Nicobar Islands, renowned for our commitment to excellence, sustainability, and community engagement.
                </p>
            </div>
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyAmram />

      {/* Final CTA Section */}
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <img src={couple} alt="" />
      </section>

    </div>
  );
};

export default AboutUs;