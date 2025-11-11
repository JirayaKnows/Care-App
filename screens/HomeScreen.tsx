import React from 'react';
import { MapPinIcon, StethoscopeIcon, FileTextIcon, SparklesIcon, ChevronRightIcon } from '../components/Icons';
import { MOCK_APPOINTMENTS } from '../constants';
import { Appointment } from '../types';

const QuickAccessCard: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
    <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/50 dark:to-gray-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <div className="bg-primary text-white p-3 rounded-full mb-3 shadow-md">
            {icon}
        </div>
        <p className="text-sm font-semibold text-primary-800 dark:text-primary-100">{title}</p>
    </div>
);

const AppointmentCard: React.FC<{ appointment: Appointment }> = ({ appointment }) => (
    <div className="bg-white dark:bg-gray-700/80 p-4 rounded-xl shadow-lg flex items-center space-x-4 backdrop-blur-sm border border-white/20">
        <img src={appointment.doctor.photoUrl} alt={appointment.doctor.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary-200" />
        <div className="flex-1">
            <p className="font-bold text-gray-800 dark:text-white">{appointment.doctor.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">{appointment.doctor.specialty}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{new Date(appointment.date).toDateString()} - {appointment.time}</p>
        </div>
        <ChevronRightIcon className="text-gray-400" />
    </div>
);

const HomeScreen: React.FC = () => {
    const upcomingAppointment = MOCK_APPOINTMENTS.find(a => a.status === 'Upcoming');

    return (
        <div className="p-4 space-y-8">
            <div className="text-left animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <p className="text-gray-500 dark:text-gray-400">Welcome back,</p>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Alex Johnson</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-slide-in-up" style={{ animationDelay: '200ms' }}>
                <QuickAccessCard title="Book Now" icon={<StethoscopeIcon />} />
                <QuickAccessCard title="Find Hospitals" icon={<MapPinIcon />} />
                <QuickAccessCard title="My Records" icon={<FileTextIcon />} />
                <QuickAccessCard title="AI Health Tip" icon={<SparklesIcon />} />
            </div>
            
            <div className="animate-slide-in-up" style={{ animationDelay: '300ms' }}>
                <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">Upcoming Appointment</h3>
                {upcomingAppointment ? (
                    <AppointmentCard appointment={upcomingAppointment} />
                ) : (
                    <div className="text-center py-8 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
                        <p className="text-gray-500 dark:text-gray-400">No upcoming appointments.</p>
                        <button className="mt-2 text-sm bg-primary text-white font-semibold py-2 px-4 rounded-full hover:bg-primary-600 transition-colors">
                            Book a new one
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeScreen;