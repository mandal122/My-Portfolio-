import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import type { ProjectCategory } from '../types';

const categories: ('All' | ProjectCategory)[] = ['All', 'Meta Ads', 'Google Ads', 'Landing Page', 'Analytics'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
          <p className="text-lg text-muted mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and the results I've delivered.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                filter === category
                  ? 'bg-accent text-white'
                  : 'bg-primary text-light hover:bg-accent/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-primary rounded-lg overflow-hidden shadow-2xl group transition-all duration-300 hover:scale-105 hover:shadow-accent/25">
              <div className="relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">{project.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-secondary text-light text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;