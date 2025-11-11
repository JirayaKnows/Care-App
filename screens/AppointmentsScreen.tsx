import React, { useState } from 'react';
import { MOCK_APPOINTMENTS } from '../constants';
import { Appointment } from '../types';

const AppointmentCard: React.FC<{ appointment: Appointment }> = ({ appointment }) => {
    const getStatusColor = (status: Appointment['status']) => {
        switch (status) {
            case 'Upcoming': return 'bg-primary-100 text-primary-800 dark:bg-primary-900/70 dark:text-primary-200';
            case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/70 dark:text-green-200';
            case 'Cancelled': return 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/70 dark:text-secondary-200';
        }
    }
    const getStatusBorderColor = (status: Appointment['status']) => {
        switch (status) {
            case 'Upcoming': return 'border-primary';
            case 'Completed': return 'border-green-500';
            case 'Cancelled': return 'border-secondary';
        }
    }
    
    return (
        <div className={`bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg space-y-3 border-l-4 ${getStatusBorderColor(appointment.status)}`}>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white">{appointment.doctor.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.doctor.specialty}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                </span>
            </div>
            <div>
                <p className="text-sm"><span className="font-semibold text-gray-600 dark:text-gray-300">Date:</span> {new Date(appointment.date).toDateString()} at {appointment.time}</p>
                <p className="text-sm"><span className="font-semibold text-gray-600 dark:text-gray-300">Reason:</span> {appointment.reason}</p>
            </div>
            {appointment.status === 'Upcoming' && (
                <div className="flex space-x-2 pt-3 border-t border-gray-200 dark:border-gray-600">
                    <button className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 text-sm font-semibold py-2 px-4 rounded-lg transition-colors">Cancel</button>
                    <button className="flex-1 bg-primary hover:bg-primary-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors">Reschedule</button>
                </div>
            )}
        </div>
    )
};

type FilterType = 'Upcoming' | 'Completed' | 'Cancelled';

const AppointmentsScreen: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('Upcoming');

    const filteredAppointments = MOCK_APPOINTMENTS.filter(app => app.status === activeFilter);
    const filters: FilterType[] = ['Upcoming', 'Completed', 'Cancelled'];

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
                <div className="flex space-x-2 bg-gray-100 dark:bg-gray-900/50 p-1 rounded-xl">
                    {filters.map(filter => (
                        <button 
                            key={filter} 
                            onClick={() => setActiveFilter(filter)}
                            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${activeFilter === filter ? 'bg-primary text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800/50">
                {filteredAppointments.length > 0 ? (
                    filteredAppointments.map(app => <AppointmentCard key={app.id} appointment={app} />)
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 dark:text-gray-400">No {activeFilter.toLowerCase()} appointments found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppointmentsScreen;