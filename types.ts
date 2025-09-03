
export interface TrafficDataPoint {
  week: string;
  traffic: number;
}

export interface KeywordRanking {
  [week: string]: number | null;
}

export interface KeywordData {
  id: number;
  pageUrl: string;
  keyword: string;
  dateOptimized: string; // YYYY-MM-DD
  isPrimary: boolean;
  rankings: KeywordRanking;
}

export interface SeoData {
  trafficSummary: TrafficDataPoint[];
  keywords: KeywordData[];
  weeks: string[];
}
