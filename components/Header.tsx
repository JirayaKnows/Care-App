import React from 'react';
import { BellIcon, MoonIcon, SearchIcon, SunIcon, UserCircleIcon } from './Icons';

interface HeaderProps {
    isDarkMode: boolean;
    setIsDarkMode: (isDark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">Care</h1>
      <div className="flex items-center space-x-4">
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors p-1 rounded-full">
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <button className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors">
          <SearchIcon />
        </button>
        <button className="relative text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors">
          <BellIcon />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-secondary-500 ring-2 ring-white dark:ring-gray-800"></span>
        </button>
        <button className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors">
          <UserCircleIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;