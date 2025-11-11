
import React from 'react';

type IconProps = {
  className?: string;
};

export const HomeIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);

export const StethoscopeIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.8 2.3A.3.3 0 1 0 5 2a.3.3 0 0 0-.2.3"/><path d="M6.6 2.5c.3-.3.2-.6 0-.8a.5.5 0 0 0-.8 0c-.2.2-.3.5 0 .8l2.2 2.2"/><path d="M19.3 2.5c-.3-.3-.2-.6 0-.8a.5.5 0 0 1 .8 0c.2.2.3.5 0 .8l-2.2 2.2"/><path d="M12.5 6.6a.5.5 0 0 1-.8 0c-.2-.2-.3-.5 0-.8l2.2-2.2c.3-.3.2-.6 0-.8a.5.5 0 0 0-.8 0c-.2.2-.3.5 0 .8Z"/><path d="M8.2 5.2c.2-.2.3-.5 0-.8a.5.5 0 0 0-.8 0c-.3.3-.2.6 0 .8L9.6 7.4"/><path d="M15.8 5.2c-.2-.2-.3-.5 0-.8a.5.5 0 0 1 .8 0c.3.3.2.6 0 .8L14.4 7.4"/><path d="M12 13.5a7.5 7.5 0 0 0-7.4-6.1"/><path d="M12 13.5a7.5 7.5 0 0 1 7.4-6.1"/><path d="M12 13.5V22a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1Z"/><path d="M12 13.5V22a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1Z"/><circle cx="12" cy="12" r="1.5"/></svg>
);

export const CalendarIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
);

export const PillIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><path d="m8.5 8.5 7 7" /></svg>
);

export const SparklesIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6-11.5A.5.5 0 0 1 3 2l11.5 6a2 2 0 0 0 1.437-1.437l-1.5-3.5a.5.5 0 0 1 .9-.4l3.5 1.5A2 2 0 0 0 22 3l-6 11.5a.5.5 0 0 1-.9.4l-3.5-1.5a2 2 0 0 0-1.437 1.437l1.5 3.5a.5.5 0 0 1-.4.9l-1.5-3.5Z"/><path d="M14 6.063A2 2 0 0 0 12.563 5.5l-1.5-3.5a.5.5 0 0 1 .9-.4l3.5 1.5A2 2 0 0 0 17 3l.5 1a.5.5 0 0 1-.4.9l-1.5-3.5h0"/><path d="M21.5 15.5a.5.5 0 0 1-.4-.9l1.5-3.5a.5.5 0 0 1 .9.4l-.5 1A2 2 0 0 0 21 14.5l3.5-1.5a.5.5 0 0 1 .4.9l-3.5 1.5h0"/></svg>
);

export const BellIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
);

export const UserCircleIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
);

export const SearchIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

export const MapPinIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

export const FileTextIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
);

export const StarIcon = ({ className = 'w-6 h-6', filled = false }: { className?: string; filled?: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);

export const ChevronRightIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
);

export const XIcon = ({ className = 'w-6 h-6' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

export const SendIcon = ({ className = 'w-6 h-6' }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
);

export const SunIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

export const MoonIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);

export const LoadingSpinner = ({ className = 'w-8 h-8' }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className}><radialGradient id="a" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#3B82F6"></stop><stop offset=".3" stop-color="#3B82F6" stop-opacity=".9"></stop><stop offset=".6" stop-color="#3B82F6" stop-opacity=".6"></stop><stop offset=".8" stop-color="#3B82F6" stop-opacity=".3"></stop><stop offset="1" stop-color="#3B82F6" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="1.5" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#3B82F6" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>
);
