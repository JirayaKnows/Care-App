import React from 'react';
import { Tab } from '../types';
import { HomeIcon, StethoscopeIcon, CalendarIcon, PillIcon, SparklesIcon } from './Icons';

interface BottomNavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const NavItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  const activeClasses = 'text-primary dark:text-primary-300';
  const inactiveClasses = 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-300';
  
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-all duration-300 transform focus:outline-none ${isActive ? `${activeClasses} scale-110` : inactiveClasses}`}
    >
      <div className={`relative p-1.5 rounded-full transition-colors duration-300 ${isActive ? 'bg-primary-100 dark:bg-primary-900/50' : ''}`}>
        {icon}
      </div>
      <span className={`text-xs mt-1 transition-opacity duration-300 ${isActive ? 'font-semibold' : 'opacity-90'}`}>{label}</span>
    </button>
  );
};


const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { tab: Tab.Home, label: 'Home', icon: <HomeIcon /> },
    { tab: Tab.Doctors, label: 'Doctors', icon: <StethoscopeIcon /> },
    { tab: Tab.Appointments, label: 'Bookings', icon: <CalendarIcon /> },
    { tab: Tab.Pharmacy, label: 'Pharmacy', icon: <PillIcon /> },
    { tab: Tab.HealthTips, label: 'Tips', icon: <SparklesIcon /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 flex justify-around shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => (
        <NavItem
          key={item.tab}
          label={item.label}
          icon={item.icon}
          isActive={activeTab === item.tab}
          onClick={() => setActiveTab(item.tab)}
        />
      ))}
    </nav>
  );
};

export default BottomNav;