
import React from 'react';

export const MetaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.5 7.5c0 4.14-3.03 7.6-7.25 8.35-1.2.22-2.34.22-3.5 0-4.22-.75-7.25-4.21-7.25-8.35C.5 3.36 4.03 0 8.25 0s7.75 3.36 7.75 7.5" />
    <path d="M5.5 24c0-4.14 3.03-7.6 7.25-8.35 1.2-.22 2.34-.22 3.5 0 4.22.75 7.25 4.21 7.25 8.35C23.5 20.64 19.97 24 15.75 24S5.5 20.64 5.5 24" />
  </svg>
);
