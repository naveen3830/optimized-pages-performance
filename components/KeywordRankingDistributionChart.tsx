import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from './Card';

const rankingDistributionData = [
    { name: 'Page 1 (1-10)', value: 44, color: '#007C3F' },
    { name: 'Page 2 (11-20)', value: 14, color: '#FFB900' },
    { name: 'Page 3 (21-30)', value: 6, color: '#DA291C' },
    { name: '> Page 3 (31+)', value: 16, color: '#989898' },
];


export const KeywordRankingDistributionChart: React.FC = () => {
    const totalKeywords = rankingDistributionData.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <Card title="Primary Keyword Ranking">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="w-full">
                    <ResponsiveContainer width="100%" height={288}>
                        <PieChart>
                            <Pie
                                data={rankingDistributionData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                innerRadius={50}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                nameKey="name"
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                    const RADIAN = Math.PI / 180;
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                    return (
                                        <text
                                            x={x}
                                            y={y}
                                            fill="white"
                                            stroke="#4B4B4B"
                                            strokeWidth={1}
                                            paintOrder="stroke"
                                            textAnchor="middle"
                                            dominantBaseline="central"
                                            className="font-extrabold text-base pointer-events-none"
                                        >
                                            {`${(percent * 100).toFixed(0)}%`}
                                        </text>
                                    );
                                }}
                            >
                                {rankingDistributionData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #E0E0E0',
                                    color: '#4B4B4B'
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="overflow-y-auto h-full pr-2">
                    <table className="w-full text-left text-sm">
                        <thead className="sticky top-0 bg-base-100">
                            <tr>
                                <th className="p-2 font-semibold text-mediumGrey">Ranking Group</th>
                                <th className="p-2 font-semibold text-mediumGrey text-right"># of Keywords</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rankingDistributionData.map((entry) => (
                                <tr key={entry.name} className="border-t border-lightGrey">
                                    <td className="p-2 flex items-center text-mediumGrey">
                                        <span className="w-3 h-3 rounded-full mr-3 shrink-0" style={{ backgroundColor: entry.color }}></span>
                                        {entry.name}
                                    </td>
                                    <td className="p-2 text-right font-bold text-extraDarkGrey">{entry.value}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="border-t-2 border-grey">
                                <td className="p-2 font-bold text-extraDarkGrey">Total Keywords</td>
                                <td className="p-2 text-right font-bold text-extraDarkGrey">{totalKeywords}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </Card>
    );
};