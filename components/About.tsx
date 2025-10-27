
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-accent rounded-lg transform rotate-[-3deg]"></div>
            <img 
              src="https://picsum.photos/seed/profile/500/500" 
              alt="Digital Marketer Portrait" 
              className="rounded-lg shadow-2xl relative z-10"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted mb-6">
              I'm a passionate and results-oriented digital marketer with a proven track record of creating and executing successful online advertising campaigns. My expertise lies in turning clicks into customers and data into actionable insights.
            </p>
            <p className="text-lg text-muted mb-6">
              My approach is both creative and analytical. I excel at building high-converting landing pages and diving deep into user behavior with tools like Microsoft Clarity to continuously optimize for performance. I believe every marketing dollar should be accountable, and I'm dedicated to delivering measurable ROI for my clients.
            </p>
            <a 
              href="#portfolio" 
              className="inline-block bg-transparent border-2 border-accent text-accent font-semibold py-3 px-8 rounded-full text-lg hover:bg-accent hover:text-white transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
