import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-base-100 p-6 rounded-2xl shadow-lg h-full flex flex-col ${className}`}>
      <h2 className="text-xl font-bold text-extraDarkGrey mb-4">{title}</h2>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};