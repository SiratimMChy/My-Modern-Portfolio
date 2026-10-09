import React, { forwardRef } from 'react';

const Logo = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex-shrink-0 -ml-2 lg:-ml-4">
      <a href="#" className="flex items-center">
        <img
          src="/logo.png"
          alt="SMC Logo"
          className="h-10 lg:h-12 w-auto object-contain scale-125 origin-left drop-shadow-md"
        />
      </a>
    </div>
  );
});

Logo.displayName = 'Logo';
export default Logo;
