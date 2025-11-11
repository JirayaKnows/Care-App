
export enum Tab {
  Home = 'Home',
  Doctors = 'Doctors',
  Appointments = 'Appointments',
  Pharmacy = 'Pharmacy',
  HealthTips = 'HealthTips',
}

export interface User {
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  medicalHistory: string[];
  avatarUrl: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  photoUrl: string;
  qualifications: string[];
  experience: number;
  hospital: string;
  availableSlots: string[];
  fees: number;
  reviews: Review[];
  rating: number;
}

export interface Appointment {
  id: string;
  doctor: Doctor;
  date: string;
  time: string;
  reason: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
}

export interface Medicine {
  id: string;
  name:string;
  description: string;
  price: number;
  dosage: string;
  sideEffects: string[];
  manufacturer: string;
  imageUrl: string;
  category: string;
}

export interface Prescription {
  id: string;
  doctorName: string;
  date: string;
  fileUrl: string;
  fileName: string;
}

export interface Hospital {
    id: string;
    name: string;
    address: string;
    distance: string;
    rating: number;
    contact: string;
    type: 'Hospital' | 'Clinic' | 'Pharmacy';
    isOpen247: boolean;
}
