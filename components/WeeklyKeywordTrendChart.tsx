import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card } from './Card';

const rawTrendData = [
    { week: 'Apr 1', 'Page 1': 9, 'Page 2': 10, 'Page 3': 7, '> Page 3': 15 },
    { week: 'Apr 8', 'Page 1': 9, 'Page 2': 14, 'Page 3': 3, '> Page 3': 15 },
    { week: 'Apr 15', 'Page 1': 11, 'Page 2': 12, 'Page 3': 4, '> Page 3': 14 },
    { week: 'Apr 22', 'Page 1': 15, 'Page 2': 6, 'Page 3': 5, '> Page 3': 15 },
    { week: 'Apr 29', 'Page 1': 13, 'Page 2': 10, 'Page 3': 4, '> Page 3': 14 },
    { week: 'May 6', 'Page 1': 17, 'Page 2': 8, 'Page 3': 3, '> Page 3': 13 },
    { week: 'May 13', 'Page 1': 15, 'Page 2': 9, 'Page 3': 6, '> Page 3': 11 },
    { week: 'May 20', 'Page 1': 15, 'Page 2': 8, 'Page 3': 6, '> Page 3': 12 },
    { week: 'May 27', 'Page 1': 15, 'Page 2': 9, 'Page 3': 5, '> Page 3': 12 },
    { week: 'Jun 3', 'Page 1': 16, 'Page 2': 9, 'Page 3': 5, '> Page 3': 12 },
    { week: 'Jun 10', 'Page 1': 18, 'Page 2': 9, 'Page 3': 5, '> Page 3': 15 },
    { week: 'Jun 17', 'Page 1': 19, 'Page 2': 10, 'Page 3': 6, '> Page 3': 13 },
    { week: 'Jun 24', 'Page 1': 16, 'Page 2': 16, 'Page 3': 4, '> Page 3': 12 },
    { week: 'Jul 1', 'Page 1': 21, 'Page 2': 15, 'Page 3': 6, '> Page 3': 11 },
    { week: 'Jul 8', 'Page 1': 19, 'Page 2': 15, 'Page 3': 6, '> Page 3': 13 },
    { week: 'Jul 15', 'Page 1': 25, 'Page 2': 17, 'Page 3': 8, '> Page 3': 11 },
    { week: 'Jul 22', 'Page 1': 28, 'Page 2': 15, 'Page 3': 7, '> Page 3': 11 },
    { week: 'Jul 29', 'Page 1': 30, 'Page 2': 13, 'Page 3': 6, '> Page 3': 12 },
    { week: 'Aug 5', 'Page 1': 32, 'Page 2': 11, 'Page 3': 8, '> Page 3': 13 },
    { week: 'Aug 12', 'Page 1': 35, 'Page 2': 8, 'Page 3': 5, '> Page 3': 16 },
    { week: 'Aug 19', 'Page 1': 39, 'Page 2': 8, 'Page 3': 9, '> Page 3': 19 },
    { week: 'Aug 26', 'Page 1': 45, 'Page 2': 6, 'Page 3': 8, '> Page 3': 16 },
    { week: 'Sep 2', 'Page 1': 44, 'Page 2': 14, 'Page 3': 6, '> Page 3': 16 },
];


const pageGroups = [
    { name: 'Page 1 (1-10)', dataKey: 'Page 1', color: '#007C3F' },
    { name: 'Page 2 (11-20)', dataKey: 'Page 2', color: '#FFB900' },
    { name: 'Page 3 (21-30)', dataKey: 'Page 3', color: '#DA291C' },
    { name: '> Page 3 (31+)', dataKey: '> Page 3', color: '#989898' },
];

export const WeeklyKeywordTrendChart: React.FC = () => {
    return (
        <Card title="Weekly Keyword Ranking Trends">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={rawTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                    <XAxis dataKey="week" stroke="#989898" />
                    <YAxis stroke="#989898" label={{ value: '# of Keywords', angle: -90, position: 'insideLeft', fill: '#989898', offset: -10 }} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #E0E0E0',
                            color: '#4B4B4B'
                        }}
                    />
                    <Legend />
                    {pageGroups.map(group => (
                        <Line 
                            key={group.dataKey}
                            type="monotone" 
                            dataKey={group.dataKey}
                            name={group.name}
                            stroke={group.color} 
                            strokeWidth={2} 
                            activeDot={{ r: 8 }} 
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );
};