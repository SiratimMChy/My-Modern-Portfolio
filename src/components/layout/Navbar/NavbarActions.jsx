import React from 'react';
import { Moon, Sun, Download } from 'lucide-react';

const NavbarActions = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="hidden xl:flex items-center gap-4">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent dark:border-gray-700"
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
        className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 shadow-sm shadow-sky-500/20 hover:shadow-sky-500/30 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 hover:scale-105 transform duration-200"
      >
        <Download className="w-4 h-4" />
        Resume
      </a>
    </div>
  );
};

export default NavbarActions;
