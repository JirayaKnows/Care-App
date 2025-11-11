import React, { useState } from 'react';
import { Medicine } from '../types';
import { MOCK_MEDICINES } from '../constants';
import { SearchIcon } from '../components/Icons';

const MedicineCard: React.FC<{ medicine: Medicine }> = ({ medicine }) => (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
        <div className="h-32 bg-gray-200 dark:bg-gray-600 overflow-hidden">
            <img src={medicine.imageUrl} alt={medicine.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="p-3 flex-1 flex flex-col">
            <h3 className="font-bold text-sm text-gray-800 dark:text-white flex-1 leading-tight">{medicine.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{medicine.category}</p>
            <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-primary">${medicine.price.toFixed(2)}</span>
                <button className="bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/80 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-200 text-xs font-bold py-1 px-3 rounded-full transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
);

const PharmacyScreen: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const categories = ['All', ...new Set(MOCK_MEDICINES.map(m => m.category))];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredMedicines = MOCK_MEDICINES.filter(med => {
        const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || med.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 space-y-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold">Pharmacy</h2>
                 <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for medicines..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    />
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
            </div>
            
            <div className="p-4">
                 <div className="flex space-x-3 overflow-x-auto pb-2 -mx-4 px-4">
                    {categories.map(category => (
                        <button 
                            key={category} 
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-300 ${activeCategory === category ? 'bg-primary text-white shadow-md' : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-800/50">
                {filteredMedicines.length > 0 ? (
                    filteredMedicines.map(med => <MedicineCard key={med.id} medicine={med} />)
                ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400 col-span-2 py-10">No medicines found.</p>
                )}
            </div>
        </div>
    );
};

export default PharmacyScreen;