import React, { useState, useEffect } from 'react';
import { Tab } from './types';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import DoctorsScreen from './screens/DoctorsScreen';
import AppointmentsScreen from './screens/AppointmentsScreen';
import PharmacyScreen from './screens/PharmacyScreen';
import HealthTipsScreen from './screens/HealthTipsScreen';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Home);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  const renderScreen = () => {
    switch (activeTab) {
      case Tab.Home:
        return <HomeScreen />;
      case Tab.Doctors:
        return <DoctorsScreen />;
      case Tab.Appointments:
        return <AppointmentsScreen />;
      case Tab.Pharmacy:
        return <PharmacyScreen />;
      case Tab.HealthTips:
        return <HealthTipsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col font-sans antialiased">
      <div className="max-w-md mx-auto w-full h-full flex flex-col shadow-2xl bg-white dark:bg-gray-800">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <main className="flex-1 overflow-y-auto pb-20 relative">
          <div key={activeTab} className="animate-fade-in">
            {renderScreen()}
          </div>
        </main>
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default App;