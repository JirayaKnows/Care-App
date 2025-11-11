
import { Doctor, Appointment, Medicine, Prescription, Hospital } from './types';

export const MOCK_DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Evelyn Reed',
    specialty: 'Cardiologist',
    photoUrl: 'https://picsum.photos/seed/doc1/200/200',
    qualifications: ['MD', 'FACC'],
    experience: 15,
    hospital: 'City General Hospital',
    availableSlots: ['10:00 AM', '11:30 AM', '02:00 PM'],
    fees: 250,
    rating: 4.9,
    reviews: [
      { id: 'r1', author: 'John Doe', rating: 5, comment: 'Very knowledgeable and caring.', date: '2023-10-15' },
      { id: 'r2', author: 'Jane Smith', rating: 4.8, comment: 'Helped me a lot with my condition.', date: '2023-09-22' },
    ],
  },
  {
    id: 'd2',
    name: 'Dr. Marcus Chen',
    specialty: 'Dentist',
    photoUrl: 'https://picsum.photos/seed/doc2/200/200',
    qualifications: ['DDS', 'MSc'],
    experience: 8,
    hospital: 'Bright Smiles Clinic',
    availableSlots: ['09:00 AM', '09:30 AM', '03:30 PM'],
    fees: 120,
    rating: 4.7,
    reviews: [
      { id: 'r3', author: 'Peter Jones', rating: 5, comment: 'Painless procedure, highly recommend.', date: '2023-11-01' },
    ],
  },
  {
    id: 'd3',
    name: 'Dr. Sofia Garcia',
    specialty: 'Dermatologist',
    photoUrl: 'https://picsum.photos/seed/doc3/200/200',
    qualifications: ['MD', 'FAAD'],
    experience: 12,
    hospital: 'Skin & Wellness Center',
    availableSlots: ['10:00 AM', '01:00 PM', '04:00 PM'],
    fees: 180,
    rating: 4.8,
    reviews: [
      { id: 'r4', author: 'Emily White', rating: 4.5, comment: 'Great advice for my skin issues.', date: '2023-10-28' },
       { id: 'r5', author: 'Michael Brown', rating: 5, comment: 'Professional and friendly.', date: '2023-10-20' },
    ],
  },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
    {
        id: 'a1',
        doctor: MOCK_DOCTORS[0],
        date: '2024-08-15',
        time: '10:00 AM',
        reason: 'Annual Checkup',
        status: 'Upcoming'
    },
    {
        id: 'a2',
        doctor: MOCK_DOCTORS[2],
        date: '2024-07-20',
        time: '02:00 PM',
        reason: 'Skin Rash',
        status: 'Completed'
    },
    {
        id: 'a3',
        doctor: MOCK_DOCTORS[1],
        date: '2024-07-10',
        time: '09:30 AM',
        reason: 'Toothache',
        status: 'Cancelled'
    }
];

export const MOCK_MEDICINES: Medicine[] = [
    {
        id: 'm1',
        name: 'Paracetamol 500mg',
        description: 'Effective for pain relief and fever reduction.',
        price: 5.99,
        dosage: '1-2 tablets every 4-6 hours',
        sideEffects: ['Nausea', 'Allergic reactions'],
        manufacturer: 'Pharma Inc.',
        imageUrl: 'https://picsum.photos/seed/med1/300/300',
        category: 'Painkillers'
    },
    {
        id: 'm2',
        name: 'Vitamin C 1000mg',
        description: 'Supports the immune system and acts as an antioxidant.',
        price: 12.50,
        dosage: '1 tablet daily',
        sideEffects: ['Upset stomach'],
        manufacturer: 'Wellness Labs',
        imageUrl: 'https://picsum.photos/seed/med2/300/300',
        category: 'Vitamins'
    },
     {
        id: 'm3',
        name: 'Amoxicillin 250mg',
        description: 'Antibiotic for treating bacterial infections.',
        price: 15.75,
        dosage: 'As prescribed by a doctor',
        sideEffects: ['Diarrhea', 'Rash'],
        manufacturer: 'HealthCore',
        imageUrl: 'https://picsum.photos/seed/med3/300/300',
        category: 'Antibiotics'
    },
];

export const MOCK_PRESCRIPTIONS: Prescription[] = [
    { id: 'p1', doctorName: 'Dr. Evelyn Reed', date: '2024-07-20', fileUrl: '#', fileName: 'Cardio_Prescription.pdf' },
    { id: 'p2', doctorName: 'Dr. Sofia Garcia', date: '2024-06-15', fileUrl: '#', fileName: 'Derm_Followup.pdf' },
];

export const MOCK_HOSPITALS: Hospital[] = [
    { id: 'h1', name: 'City General Hospital', address: '123 Health St, Medville', distance: '1.2 km', rating: 4.8, contact: '555-0101', type: 'Hospital', isOpen247: true },
    { id: 'h2', name: 'Bright Smiles Clinic', address: '45 Dental Ave, Town-center', distance: '2.5 km', rating: 4.9, contact: '555-0102', type: 'Clinic', isOpen247: false },
    { id: 'h3', name: 'Community Pharmacy', address: '67 Wellness Rd, Suburbia', distance: '0.8 km', rating: 4.5, contact: '555-0103', type: 'Pharmacy', isOpen247: false },
    { id: 'h4', name: 'Emergency Care Center', address: '99 Rescue Blvd, Downtown', distance: '3.1 km', rating: 4.7, contact: '911', type: 'Hospital', isOpen247: true },
]
