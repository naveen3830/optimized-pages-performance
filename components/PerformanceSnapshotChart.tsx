import React from 'react';
import { fortinetColors, theme } from './fortinetTheme';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from './Card';

const snapshotData = [
  { name: 'Baseline (Apr 1)', 'Organic Traffic': 5439 },
  { name: 'Latest (Sep 2)', 'Organic Traffic': 7626 },
];

const UpArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
    </svg>
);


export const PerformanceSnapshotChart: React.FC = () => {
    const baseline = snapshotData[0];
    const latest = snapshotData[1];

    const trafficGrowth = Math.round(((latest['Organic Traffic'] - baseline['Organic Traffic']) / baseline['Organic Traffic']) * 100);

    return (
        <Card title="Traffic Growth: Baseline vs. Latest">
            <div className="w-full max-w-3xl mx-auto">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={snapshotData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                    <XAxis dataKey="name" stroke="#989898" />
                    <YAxis yAxisId="right" orientation="right" stroke="#0072CE" label={{ value: 'Traffic', angle: -90, position: 'insideRight', fill: '#989898', offset: 10 }} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #E0E0E0',
                            color: '#4B4B4B',
                            borderRadius: '0.5rem'
                        }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Bar yAxisId="right" dataKey="Organic Traffic" fill="#0072CE" name="Organic Traffic" />
                </BarChart>
            </ResponsiveContainer>
            </div>

            <div className="mt-6 grid grid-cols-1">
              <div className="w-full max-w-xl mx-auto p-4 rounded-lg text-center" style={{ backgroundColor: fortinetColors.tintsAndShades.green.tint10, border: `1px solid ${theme.border}` }}>
                <p className="text-sm font-semibold mb-1" style={{ color: fortinetColors.tintsAndShades.green.shade60 }}>Organic Traffic Growth</p>
                <div className="flex items-center justify-center text-3xl font-bold" style={{ color: fortinetColors.primary.green }}>
                  <UpArrowIcon />
                  <span>{trafficGrowth}%</span>
                </div>
              </div>
            </div>
        </Card>
    );
};