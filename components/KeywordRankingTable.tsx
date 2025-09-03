import React from 'react';
import { KeywordData } from '../types';
import { Card } from './Card';

interface KeywordRankingTableProps {
    keywordData: KeywordData[];
    weeks: string[];
}

export const KeywordRankingTable: React.FC<KeywordRankingTableProps> = ({ keywordData, weeks }) => {
    
    const getRankColor = (rank: number | null) => {
        if (rank === null) return 'bg-grey/20 text-mediumGrey';
        if (rank >= 1 && rank <= 10) return 'bg-success/20 text-success';
        if (rank >= 11 && rank <= 20) return 'bg-warning/20 text-warning';
        if (rank > 20) return 'bg-error/20 text-error';
        return 'bg-grey/20';
    };

    return (
        <Card title="Weekly Keyword Ranking Trends">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="sticky top-0 bg-base-100">
                        <tr>
                            <th className="p-3 text-mediumGrey font-semibold">Page URL & Keyword</th>
                            <th className="p-3 text-mediumGrey font-semibold">Date Optimized</th>
                            {weeks.map(week => (
                                <th key={week} className="p-3 text-center text-mediumGrey font-semibold">{week}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-lightGrey">
                        {keywordData.map(item => (
                            <tr key={item.id} className="hover:bg-base-200">
                                <td className="p-3">
                                    <div className="font-bold text-extraDarkGrey truncate max-w-xs">{item.keyword}</div>
                                    <div className="text-xs text-mediumGrey truncate max-w-xs">{item.pageUrl}</div>
                                </td>
                                <td className="p-3 text-mediumGrey">{new Date(item.dateOptimized).toLocaleDateString()}</td>
                                {weeks.map(week => {
                                    const rank = item.rankings[week] || null;
                                    return (
                                        <td key={`${item.id}-${week}`} className="p-3 text-center">
                                          <span className={`px-3 py-1 rounded-full font-semibold ${getRankColor(rank)}`}>
                                            {rank !== null ? rank : '-'}
                                          </span>
                                        </td>
                                    )
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};