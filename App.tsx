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
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-extraDarkGrey mb-1">Optimized Pages Performance Dashboard</h1>
        <p className="text-lg text-mediumGrey">Analysis of 80 Optimized pages with monthly performance tracking.</p>
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