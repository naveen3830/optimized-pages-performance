import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card } from './Card';

// Static data based on user request
const monthlyData = [
    { month: 'Mar 2025', optimizedPages: 3 },
    { month: 'Apr 2025', optimizedPages: 30 },
    { month: 'May 2025', optimizedPages: 9 },
    { month: 'Jun 2025', optimizedPages: 16 },
    { month: 'Jul 2025', optimizedPages: 6 },
    { month: 'Aug 2025', optimizedPages: 16 },
];


export const OptimizedPagesGrowthChart: React.FC = () => {
    const processData = () => {
        let cumulative = 0;
        return monthlyData.map(item => {
            cumulative += item.optimizedPages;
            return {
                month: item.month,
                'Optimized Pages': item.optimizedPages,
                'Total Optimized Pages': cumulative
            };
        });
    };

    const data = processData();

    return (
        <Card title="Number of pages optimized">
            <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                    <XAxis dataKey="month" stroke="#989898" />
                    <YAxis yAxisId="left" stroke="#989898" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #E0E0E0',
                            color: '#4B4B4B'
                        }}
                        itemStyle={{ color: '#4B4B4B' }}
                    />
                    <Legend />
                    <Bar yAxisId="left" dataKey="Optimized Pages" fill="#989898" />
                    <Line yAxisId="left" type="monotone" dataKey="Total Optimized Pages" stroke="#0072CE" strokeWidth={2} activeDot={{ r: 8 }} />
                </ComposedChart>
            </ResponsiveContainer>
        </Card>
    );
};