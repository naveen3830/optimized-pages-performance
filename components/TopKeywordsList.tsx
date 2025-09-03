import React from 'react';
import { Card } from './Card';

const keywordPerformanceData = [
    { keyword: 'SAML vs OAuth', baseline: 2, latest: 2 },
    { keyword: 'Types of Cyber attacks', baseline: 2, latest: 2 },
    { keyword: 'What is a BYOD Policy', baseline: 101, latest: 1 },
    { keyword: 'WAF vs Firewall', baseline: 1, latest: 1 },
    { keyword: 'Cybersecurity Statistics', baseline: 30, latest: 4 },
    { keyword: 'Mobile Security', baseline: 13, latest: 5 },
    { keyword: 'Ransomware Statistics', baseline: 21, latest: 2 },
    { keyword: 'Unified Endpoint Management (UEM)', baseline: 101, latest: 4 },
    { keyword: 'Security Operations Center (SOC)', baseline: 101, latest: 3 },
    { keyword: 'artificial intelligence in cybersecurity', baseline: 7, latest: 1 },
    { keyword: 'malware protection', baseline: 42, latest: 3 },
    { keyword: 'CI/CD Pipeline', baseline: 36, latest: 2 },
    { keyword: 'CIA triad', baseline: 2, latest: 2 },
    { keyword: 'Address Resolution Protocol', baseline: 2, latest: 3 },
    { keyword: 'Data leak', baseline: 6, latest: 5 },
    { keyword: 'computer virus', baseline: 3, latest: 2 },
    { keyword: 'SD-WAN vs MPLS', baseline: 6, latest: 2 },
];

const UpArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
);

const DownArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const calculateChange = (baseline: number, latest: number) => {
    if (baseline === 0 || baseline === latest) {
        return { value: 0, isImprovement: null };
    }
    const change = ((latest - baseline) / baseline) * 100;
    return {
        value: Math.round(Math.abs(change)),
        isImprovement: change < 0,
    };
};

export const TopKeywordsList: React.FC = () => {
    const sortedData = [...keywordPerformanceData].sort((a, b) => a.latest - b.latest);

    return (
        <Card title="Optimized Keywords in Top 5 Positions">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                        <tr className="border-b-2 border-grey">
                            <th className="p-3 font-semibold text-mediumGrey text-center">S.No.</th>
                            <th className="p-3 font-semibold text-mediumGrey">Keyword</th>
                            <th className="p-3 font-semibold text-mediumGrey text-center">Baseline</th>
                            <th className="p-3 font-semibold text-mediumGrey text-center">Latest</th>
                            <th className="p-3 font-semibold text-mediumGrey text-center">Change</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-lightGrey">
                        {sortedData.map((item, index) => {
                            const change = calculateChange(item.baseline, item.latest);
                            let changeClass = 'text-mediumGrey';
                            let Icon = null;
                            if (change.isImprovement === true) {
                                changeClass = 'text-success';
                                Icon = <UpArrowIcon />;
                            }
                            if (change.isImprovement === false) {
                                changeClass = 'text-error';
                                Icon = <DownArrowIcon />;
                            }

                            return (
                                <tr key={item.keyword} className="hover:bg-base-200">
                                    <td className="p-3 text-center text-mediumGrey">{index + 1}</td>
                                    <td className="p-3 font-medium text-extraDarkGrey">{item.keyword}</td>
                                    <td className="p-3 text-center text-mediumGrey">{item.baseline}</td>
                                    <td className="p-3 text-center font-bold text-extraDarkGrey">{item.latest}</td>
                                    <td className={`p-3 text-center font-semibold ${changeClass}`}>
                                        <div className="flex items-center justify-center gap-1">
                                            {Icon}
                                            <span>{change.value > 0 ? `${change.value}%` : '-'}</span>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};