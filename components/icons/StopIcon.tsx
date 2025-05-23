
import React from 'react';

interface StopIconProps {
  className?: string;
}

const StopIcon: React.FC<StopIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.8} // Slightly thicker for better visibility as a button
    stroke="currentColor" 
    className={className || "w-5 h-5"}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
  </svg>
);

export default StopIcon;
