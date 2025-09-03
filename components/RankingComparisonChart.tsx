import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from './Card';

const comparisonData = [
    { name: 'Page 1 (1-10)', Baseline: 9, Latest: 44 },
    { name: 'Page 2 (11-20)', Baseline: 10, Latest: 14 },
    { name: 'Page 3 (21-30)', Baseline: 7, Latest: 6 },
    { name: '> Page 3 (31+)', Baseline: 15, Latest: 16 },
];

const UpArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
);

const DownArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

export const RankingComparisonChart: React.FC = () => {
    
    const growthData = comparisonData.map(item => {
        const change = item.Baseline === 0 
            ? (item.Latest > 0 ? 100 : 0) // Handle division by zero
            : ((item.Latest - item.Baseline) / item.Baseline) * 100;
        return {
            name: item.name,
            value: Math.round(change),
        };
    });

    return (
        <Card title="Keyword Ranking Evolution: Baseline vs. Latest">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={comparisonData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                    <XAxis dataKey="name" stroke="#989898" fontSize={12} interval={0} />
                    <YAxis stroke="#989898" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #E0E0E0',
                            color: '#4B4B4B',
                            borderRadius: '0.5rem'
                        }}
                    />
                    <Legend />
                    <Bar dataKey="Baseline" fill="#B6B6B6" name="Baseline" />
                    <Bar dataKey="Latest" fill="#DA291C" name="Latest" />
                </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2">
                {growthData.map(item => {
                    const colorClass = item.value > 0 ? 'text-success' : item.value < 0 ? 'text-error' : 'text-mediumGrey';
                    const Icon = item.value > 0 ? UpArrowIcon : item.value < 0 ? DownArrowIcon : null;
                    const name = item.name.replace(/\s\(.*\)/, '');

                    return (
                        <div key={item.name} className="bg-base-200 p-2 rounded-lg text-center">
                            <p className="text-xs text-mediumGrey font-semibold truncate" title={item.name}>{name}</p>
                            <div className={`flex items-center justify-center text-lg font-bold ${colorClass}`}>
                                {Icon && <Icon />}
                                <span className="ml-1">{item.value !== 0 ? `${Math.abs(item.value)}%` : '-'}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
};