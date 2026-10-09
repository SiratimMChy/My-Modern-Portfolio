import React, { forwardRef } from 'react';
import { navLinks } from './navLinks';

const DesktopMenu = forwardRef(({ activeSection }, ref) => {
  const getLinkClasses = (sectionId) => {
    const isActive = activeSection === sectionId;
    return `px-2 py-2 rounded-md text-sm xl:text-base transition-colors duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent font-extrabold'
        : 'text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 font-medium'
    }`;
  };

  return (
    <div className="hidden xl:block">
      <div ref={ref} className="ml-4 lg:ml-8 flex items-baseline space-x-3 xl:space-x-6">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className={getLinkClasses(link.id)}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
});

DesktopMenu.displayName = 'DesktopMenu';
export default DesktopMenu;
