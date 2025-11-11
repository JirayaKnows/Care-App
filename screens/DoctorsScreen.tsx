import React, { useState } from 'react';
import { Doctor, Review } from '../types';
import { MOCK_DOCTORS } from '../constants';
import { ChevronRightIcon, SearchIcon, StarIcon, XIcon } from '../components/Icons';

const DoctorCard: React.FC<{ doctor: Doctor; onSelect: (doctor: Doctor) => void }> = ({ doctor, onSelect }) => (
    <div onClick={() => onSelect(doctor)} className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg space-x-4 cursor-pointer hover:shadow-primary/20 hover:border-primary border-transparent border dark:hover:border-primary-400 transition-all duration-300 transform hover:-translate-y-1">
        <img src={doctor.photoUrl} alt={doctor.name} className="w-20 h-20 rounded-full object-cover" />
        <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-800 dark:text-white">{doctor.name}</h3>
            <p className="text-primary dark:text-primary-300 font-medium">{doctor.specialty}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.hospital}</p>
            <div className="flex items-center mt-1">
                <StarIcon className="w-4 h-4 text-amber-400" filled />
                <span className="ml-1 text-sm font-semibold text-gray-600 dark:text-gray-300">{doctor.rating}</span>
                <span className="ml-2 text-sm text-gray-400 dark:text-gray-500">({doctor.reviews.length} reviews)</span>
            </div>
        </div>
        <ChevronRightIcon className="text-gray-400" />
    </div>
);

const ReviewCard: React.FC<{review: Review}> = ({ review }) => (
    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-1">
            <p className="font-semibold text-gray-800 dark:text-white">{review.author}</p>
            <div className="flex items-center">
                <span className="text-sm mr-1">{review.rating.toFixed(1)}</span>
                <StarIcon className="w-4 h-4 text-amber-400" filled/>
            </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{review.comment}</p>
        <p className="text-xs text-right text-gray-400 dark:text-gray-500 mt-2">{new Date(review.date).toLocaleDateString()}</p>
    </div>
);


const DoctorDetail: React.FC<{ doctor: Doctor; onBack: () => void }> = ({ doctor, onBack }) => (
    <div className="absolute inset-0 bg-white dark:bg-gray-800 z-20 flex flex-col animate-fade-in">
        <header className="p-4 flex items-center border-b dark:border-gray-700">
            <button onClick={onBack} className="p-2 -ml-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <XIcon className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold">Doctor Profile</h2>
        </header>
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div className="flex flex-col items-center text-center">
                <img src={doctor.photoUrl} alt={doctor.name} className="w-32 h-32 rounded-full object-cover shadow-lg mb-4 border-4 border-primary-200" />
                <h2 className="text-2xl font-bold">{doctor.name}</h2>
                <p className="text-lg text-primary dark:text-primary-300">{doctor.specialty}</p>
                <p className="text-gray-500 dark:text-gray-400">{doctor.hospital}</p>
            </div>
             <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-center">
                <p className="text-gray-600 dark:text-gray-300">{doctor.experience} years of experience</p>
                <p className="text-gray-600 dark:text-gray-300">{doctor.qualifications.join(', ')}</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Available Slots</h3>
                <div className="flex flex-wrap gap-2">
                    {doctor.availableSlots.map(slot => (
                        <button key={slot} className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors">
                            {slot}
                        </button>
                    ))}
                </div>
            </div>
             <div>
                <h3 className="text-lg font-semibold mb-2">Reviews ({doctor.reviews.length})</h3>
                <div className="space-y-3">
                    {doctor.reviews.map(review => (
                       <ReviewCard key={review.id} review={review}/>
                    ))}
                </div>
            </div>
        </div>
         <footer className="p-4 border-t dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex justify-between items-center">
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Consultation Fee</p>
                <p className="text-2xl font-bold text-primary">${doctor.fees}</p>
            </div>
            <button className="bg-primary hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/40 transform hover:scale-105">
                Book Appointment
            </button>
        </footer>
    </div>
);


const DoctorsScreen: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

    const filteredDoctors = MOCK_DOCTORS.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedDoctor) {
        return <DoctorDetail doctor={selectedDoctor} onBack={() => setSelectedDoctor(null)} />
    }

    return (
        <div className="p-4 space-y-4 relative">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search by name or specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="space-y-4">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map(doctor => (
                        <DoctorCard key={doctor.id} doctor={doctor} onSelect={setSelectedDoctor} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400 py-10">No doctors found.</p>
                )}
            </div>
        </div>
    );
};

export default DoctorsScreen;