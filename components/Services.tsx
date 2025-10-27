
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Expertise</h2>
          <p className="text-lg text-muted mt-4 max-w-2xl mx-auto">
            From targeted ads to in-depth analytics, here's how I help businesses succeed.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-secondary p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
