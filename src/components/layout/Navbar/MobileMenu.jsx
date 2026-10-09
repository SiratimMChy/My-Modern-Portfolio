import React from 'react';
import { navLinks } from './navLinks';
import { Moon, Sun, Download } from 'lucide-react';

const MobileMenu = ({ activeSection, closeMobileMenu, darkMode, toggleDarkMode }) => {
  const getMobileLinkClasses = (sectionId) => {
    const isActive = activeSection === sectionId;
    return `block px-3 py-2 rounded-md text-base transition-colors duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent font-extrabold'
        : 'text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 font-medium'
    }`;
  };

  return (
    <div className="xl:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={closeMobileMenu}
            className={getMobileLinkClasses(link.id)}
          >
            {link.label}
          </a>
        ))}

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>

          <a
            href="/SIRATIM MUSTAKIM CHOWDHURY_MERN Stack Developer.pdf"
            download="SIRATIM_MUSTAKIM_CHOWDHURY_MERN_Stack_Developer.pdf"
            className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 hover:scale-105 transform duration-200"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
