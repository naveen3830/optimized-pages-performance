import React from 'react';

export const TrafficSummaryCards: React.FC = () => {

    const SummaryCard = ({ title, value }: { title: string, value: string }) => (
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg flex-1">
            <p className="text-mediumGrey text-md mb-2">{title}</p>
            <p className="text-extraDarkGrey text-4xl font-bold">{value}</p>
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <SummaryCard 
                title="Total Optimized Pages"
                value="80"
            />
            <SummaryCard 
                title="Traffic"
                value="7,626"
            />
        </div>
    );
};