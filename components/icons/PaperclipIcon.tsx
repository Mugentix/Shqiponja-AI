
import React from 'react';

interface PaperclipIconProps {
  className?: string;
}

const PaperclipIcon: React.FC<PaperclipIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3.375 3.375 0 0119.5 7.372l-10.94 10.94a2.25 2.25 0 01-3.182-3.182m3.182 3.182l6.364-6.364" />
  </svg>
);

export default PaperclipIcon;