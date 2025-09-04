import React from 'react';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from './Card';
import { fortinetColors, theme } from './fortinetTheme';

const rankingDistributionData = [
    { name: 'Page 1 (1-10)', value: 44, color: fortinetColors.primary.green },
    { name: 'Page 2 (11-20)', value: 14, color: fortinetColors.primary.yellow },
    { name: 'Page 3 (21-30)', value: 6, color: fortinetColors.primary.purple },
    { name: '> Page 3 (31+)', value: 16, color: fortinetColors.primary.teal },
];


export const KeywordRankingDistributionChart: React.FC = () => {
    const totalKeywords = rankingDistributionData.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <Card title="Primary Keyword Ranking">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="w-full">
                    <ResponsiveContainer width="100%" height={288}>
                        <Treemap
                            data={rankingDistributionData}
                            dataKey="value"
                            nameKey="name"
                            stroke={fortinetColors.primary.white}
                            content={({ x, y, width, height, name, value, root }) => {
                                const percent = ((value as number) / totalKeywords) * 100;
                                const item = rankingDistributionData.find(d => d.name === name);
                                const fill = item ? item.color : '#CCCCCC';
                                return (
                                    <g>
                                        <rect 
                                            x={x} 
                                            y={y} 
                                            width={width} 
                                            height={height} 
                                            fill={fill} 
                                            stroke={fortinetColors.primary.white}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        {width > 40 && height > 24 && (
                                            <text x={x + width / 2} y={y + height / 2} textAnchor="middle" dominantBaseline="central" fill="#FFFFFF" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', fontWeight: 800 }}>
                                                {`${percent.toFixed(0)}%`}
                                            </text>
                                        )}
                                    </g>
                                );
                            }}
                        >
                            <Tooltip 
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length > 0) {
                                        const data = payload[0].payload;
                                        const percent = ((data.value as number) / totalKeywords) * 100;
                                        return (
                                            <div className="bg-white p-3 border rounded-lg shadow-lg" style={{ borderColor: theme.border }}>
                                                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>{data.name}</p>
                                                <p className="text-sm text-gray-600">
                                                    Keywords: <span className="font-bold">{data.value}</span>
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    Percentage: <span className="font-bold">{percent.toFixed(1)}%</span>
                                                </p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                        </Treemap>
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
                            <tr>
                                <td className="p-2 font-bold text-black" style={{ fontSize: '0.95rem' }} colSpan={2}>Remarks: 17 keywords are in Top 5 position</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </Card>
    );
};