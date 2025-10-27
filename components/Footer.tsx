
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted">
        <p>&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
