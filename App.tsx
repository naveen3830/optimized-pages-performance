import React from 'react';
import { TrafficSummaryCards } from './components/TrafficSummaryCards';
import { TrafficTrendChart } from './components/TrafficTrendChart';
import { OptimizedPagesGrowthChart } from './components/OptimizedPagesGrowthChart';
import { KeywordRankingDistributionChart } from './components/KeywordRankingDistributionChart';
import { WeeklyKeywordTrendChart } from './components/WeeklyKeywordTrendChart';
import { seoData } from './data/seoData';
import { RankingComparisonChart } from './components/RankingComparisonChart';
import { PerformanceSnapshotChart } from './components/PerformanceSnapshotChart';
import { TopKeywordsList } from './components/TopKeywordsList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-300 text-base-content p-4 lg:p-8 font-sans">
      <header className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <img src="/Fortinet logo png.png" alt="Fortinet" className="h-10 w-auto" />
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-extrabold text-extraDarkGrey">Optimized Pages Performance Dashboard</h1>
            <p className="text-sm text-mediumGrey">Analysis of 80 Optimized pages with monthly performance tracking.</p>
            <p className="text-xs text-mediumGrey mt-1">Period: Apr 2025 - Aug 2025</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/LeadWalnut light logo with tagline 3.png" alt="LeadWalnut" className="h-10 w-auto" />
            <span className="mt-1 font-extrabold text-extraDarkGrey">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </header>
      
      <main className="grid grid-cols-1 gap-6">
        {/* Main content area now spans the full width */}
        <section className="flex flex-col gap-6">
          <TrafficSummaryCards />
          <OptimizedPagesGrowthChart />
          <TrafficTrendChart trafficData={seoData.trafficSummary} />
          <PerformanceSnapshotChart />
          <KeywordRankingDistributionChart />
          <WeeklyKeywordTrendChart />
          <RankingComparisonChart />
          <TopKeywordsList />
        </section>

        {/* Sidebar has been removed and its content merged into the main section */}
      </main>

    </div>
  );
};

export default App;