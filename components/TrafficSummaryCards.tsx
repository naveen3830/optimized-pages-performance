import React from 'react';
import { fortinetColors } from './fortinetTheme';

export const TrafficSummaryCards: React.FC = () => {

    const SummaryCard = ({ title, value, accent, caption }: { title: string, value: string, accent: string, caption?: string }) => (
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg flex-1 border" style={{ borderColor: accent }}>
            <p className="text-mediumGrey text-md mb-1">{title}</p>
            {caption && (<p className="text-xs text-mediumGrey mb-2">{caption}</p>)}
            <p className="text-extraDarkGrey text-4xl font-bold">{value}</p>
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <SummaryCard 
                title="Total Optimized Pages"
                value="80"
                accent={fortinetColors.primary.green}
            />
            <SummaryCard 
                title="Monthly Traffic"
                caption="40% growth"
                value="7,626"
                accent={fortinetColors.primary.blue}
            />
        </div>
    );
};