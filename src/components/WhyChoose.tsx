import React from 'react';
import { Sparkles, Clock, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Ultimate flexibility',
    description: 'Change or cancel your bookings with ease'
  },
  {
    icon: Sparkles,
    title: 'Memorable experiences',
    description: 'Create and cherish best travel moments'
  },
  {
    icon: Shield,
    title: 'Quality at our core',
    description: 'High-quality service from our trusted company'
  }
];

export function WhyChoose() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-12">Why Choose Artisan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="text-center">
            <reason.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}