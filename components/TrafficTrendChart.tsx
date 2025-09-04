import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrafficDataPoint } from '../types';
import { Card } from './Card';

interface TrafficTrendChartProps {
    trafficData: TrafficDataPoint[];
}

export const TrafficTrendChart: React.FC<TrafficTrendChartProps> = ({ trafficData }) => {
    return (
        <Card title="Traffic Trend">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trafficData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                    <XAxis dataKey="week" stroke="#989898" />
                    <YAxis stroke="#989898" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #E0E0E0',
                            color: '#4B4B4B'
                        }}
                        itemStyle={{ color: '#4B4B4B' }}
                    />
                    <Legend wrapperStyle={{ color: '#000000' }} />
                    <Line type="monotone" dataKey="traffic" name="Organic Traffic" stroke="#0072CE" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );
};