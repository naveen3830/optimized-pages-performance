import { SeoData } from '../types';

export const seoData: SeoData = {
  weeks: [
    "Mar 23-29", "Mar 30-Apr 5", "Apr 6-12", "Apr 13-19", "Apr 20-26",
    "Apr 27-May 3", "May 4-10", "May 11-17", "May 18-24", "May 25-31",
    "Jun 1-7", "Jun 8-14", "Jun 15-21", "Jun 22-28", "Jun 29-Jul 5",
    "Jul 6-12", "Jul 13-19", "Jul 20-26", "Jul 27-Aug 2", "Aug 3-9",
    "Aug 10-16", "Aug 17-23", "Aug 24-30"
  ],
  trafficSummary: [
    { week: "Apr 1", traffic: 5439 },
    { week: "Apr 8", traffic: 4878 },
    { week: "Apr 15", traffic: 5467 },
    { week: "Apr 22", traffic: 4520 },
    { week: "Apr 29", traffic: 4671 },
    { week: "May 6", traffic: 4353 },
    { week: "May 13", traffic: 4796 },
    { week: "May 20", traffic: 4463 },
    { week: "May 27", traffic: 4246 },
    { week: "Jun 3", traffic: 4745 },
    { week: "Jun 10", traffic: 4415 },
    { week: "Jun 17", traffic: 3745 },
    { week: "Jun 24", traffic: 3833 },
    { week: "Jul 1", traffic: 4661 },
    { week: "Jul 8", traffic: 4336 },
    { week: "Jul 15", traffic: 5682 },
    { week: "Jul 22", traffic: 6053 },
    { week: "Jul 29", traffic: 5762 },
    { week: "Aug 5", traffic: 6437 },
    { week: "Aug 12", traffic: 6084 },
    { week: "Aug 19", traffic: 6891 },
    { week: "Aug 26", traffic: 7517 },
    { week: "Sep 2", traffic: 7626 }
  ],
  keywords: [
    {
      id: 1, pageUrl: "/solutions/cloud-security", keyword: "cloud security solutions", dateOptimized: "2025-03-25", isPrimary: true,
      rankings: { "Mar 23-29": 20, "Mar 30-Apr 5": 19, "Apr 6-12": 12, "Apr 13-19": 16, "Apr 20-26": 21, "Apr 27-May 3": 24, "May 4-10": 25, "May 11-17": 22, "May 18-24": 18, "May 25-31": 15, "Jun 1-7": 13, "Jun 8-14": 10, "Jun 15-21": 8, "Jun 22-28": 7, "Jun 29-Jul 5": 5 },
    },
    {
      id: 2, pageUrl: "/services/managed-detection", keyword: "managed detection and response", dateOptimized: "2025-04-02", isPrimary: true,
      rankings: { "Apr 6-12": 13, "Apr 13-19": 14, "Apr 20-26": 10, "Apr 27-May 3": 9, "May 4-10": 8, "May 11-17": 7, "May 18-24": 6, "May 25-31": 5, "Jun 1-7": 4, "Jun 8-14": 3, "Jun 15-21": 2, "Jun 22-28": 2, "Jun 29-Jul 5": 1 },
    },
    {
      id: 3, pageUrl: "/services/penetration-testing", keyword: "penetration testing services", dateOptimized: "2025-04-02", isPrimary: false,
      rankings: { "Apr 6-12": 51, "Apr 13-19": 20, "Apr 20-26": 11, "Apr 27-May 3": 9, "May 4-10": 12, "May 11-17": 16, "May 18-24": 15, "May 25-31": 12, "Jun 1-7": 10, "Jun 8-14": 9, "Jun 15-21": 8, "Jun 22-28": 7, "Jun 29-Jul 5": 6 },
    },
    {
      id: 4, pageUrl: "/products/firewall", keyword: "next-gen firewall", dateOptimized: "2025-04-08", isPrimary: true,
      rankings: { "Apr 13-19": 12, "Apr 20-26": 23, "Apr 27-May 3": 24, "May 4-10": 25, "May 11-17": 28, "May 18-24": 27, "May 25-31": 22, "Jun 1-7": 20, "Jun 8-14": 18, "Jun 15-21": 15, "Jun 22-28": 11, "Jun 29-Jul 5": 9 },
    },
    {
      id: 5, pageUrl: "/products/siem", keyword: "siem solutions", dateOptimized: "2025-04-11", isPrimary: true,
      rankings: { "Apr 13-19": 4, "Apr 20-26": 3, "Apr 27-May 3": 3, "May 4-10": 2, "May 11-17": 2, "May 18-24": 2, "May 25-31": 2, "Jun 1-7": 1, "Jun 8-14": 1, "Jun 15-21": 1, "Jun 22-28": 1, "Jun 29-Jul 5": 1 },
    },
    {
      id: 6, pageUrl: "/guides/zero-trust", keyword: "zero trust architecture", dateOptimized: "2025-04-17", isPrimary: false,
      rankings: { "Apr 20-26": 21, "Apr 27-May 3": 19, "May 4-10": 32, "May 11-17": 51, "May 18-24": 45, "May 25-31": 40, "Jun 1-7": 35, "Jun 8-14": 30, "Jun 15-21": 25, "Jun 22-28": 22, "Jun 29-Jul 5": 18 },
    },
     {
      id: 7, pageUrl: "/blog/phishing-prevention", keyword: "how to prevent phishing", dateOptimized: "2025-04-23", isPrimary: true,
      rankings: { "Apr 27-May 3": 1, "May 4-10": 1, "May 11-17": 1, "May 18-24": 1, "May 25-31": 1, "Jun 1-7": 2, "Jun 8-14": 2, "Jun 15-21": 3, "Jun 22-28": 3, "Jun 29-Jul 5": 4 },
    },
    {
      id: 8, pageUrl: "/solutions/iot-security", keyword: "iot security", dateOptimized: "2025-04-23", isPrimary: false,
      rankings: { "Apr 27-May 3": 47, "May 4-10": 47, "May 11-17": 59, "May 18-24": 30, "May 25-31": 25, "Jun 1-7": 21, "Jun 8-14": 18, "Jun 15-21": 15, "Jun 22-28": 12, "Jun 29-Jul 5": 10 },
    },
    {
      id: 9, pageUrl: "/services/soc-as-a-service", keyword: "soc as a service", dateOptimized: "2025-04-30", isPrimary: true,
      rankings: { "May 4-10": 7, "May 11-17": 7, "May 18-24": 8, "May 25-31": 9, "Jun 1-7": 10, "Jun 8-14": 11, "Jun 15-21": 10, "Jun 22-28": 9, "Jun 29-Jul 5": 8 },
    },
    {
      id: 10, pageUrl: "/products/edr", keyword: "endpoint detection and response", dateOptimized: "2025-05-09", isPrimary: true,
      rankings: { "May 11-17": 101, "May 18-24": 101, "May 25-31": 61, "Jun 1-7": 61, "Jun 8-14": 55, "Jun 15-21": 43, "Jun 22-28": 35, "Jun 29-Jul 5": 28, "Jul 6-12": 22, "Jul 13-19": 19, "Jul 20-26": 15 },
    },
    {
      id: 11, pageUrl: "/products/casb", keyword: "casb solutions", dateOptimized: "2025-05-12", isPrimary: false,
      rankings: { "May 18-24": 12, "May 25-31": 12, "Jun 1-7": 13, "Jun 8-14": 13, "Jun 15-21": 11, "Jun 22-28": 10, "Jun 29-Jul 5": 9, "Jul 6-12": 8, "Jul 13-19": 7, "Jul 20-26": 6 },
    },
    {
      id: 12, pageUrl: "/guides/incident-response", keyword: "incident response plan", dateOptimized: "2025-05-20", isPrimary: true,
      rankings: { "May 25-31": 14, "Jun 1-7": 19, "Jun 8-14": 35, "Jun 15-21": 30, "Jun 22-28": 28, "Jun 29-Jul 5": 25, "Jul 6-12": 20, "Jul 13-19": 18, "Jul 20-26": 14, "Jul 27-Aug 2": 11 },
    },
    {
      id: 13, pageUrl: "/solutions/mssp", keyword: "mssp", dateOptimized: "2025-06-03", isPrimary: true,
      rankings: { "Jun 8-14": 25, "Jun 15-21": 56, "Jun 22-28": 40, "Jun 29-Jul 5": 38, "Jul 6-12": 32, "Jul 13-19": 29, "Jul 20-26": 25, "Jul 27-Aug 2": 21, "Aug 3-9": 17, "Aug 10-16": 14 },
    },
    {
      id: 14, pageUrl: "/solutions/data-loss-prevention", keyword: "data loss prevention", dateOptimized: "2025-06-17", isPrimary: true,
      rankings: { "Jun 22-28": 101, "Jun 29-Jul 5": 98, "Jul 6-12": 85, "Jul 13-19": 76, "Jul 20-26": 68, "Jul 27-Aug 2": 60, "Aug 3-9": 52, "Aug 10-16": 45, "Aug 17-23": 38, "Aug 24-30": 30 },
    },
    {
      id: 15, pageUrl: "/services/vulnerability-assessment", keyword: "vulnerability assessment", dateOptimized: "2025-07-01", isPrimary: false,
      rankings: { "Jul 6-12": 45, "Jul 13-19": 40, "Jul 20-26": 33, "Jul 27-Aug 2": 28, "Aug 3-9": 24, "Aug 10-16": 20, "Aug 17-23": 17, "Aug 24-30": 13 },
    },
     {
      id: 16, pageUrl: "/guides/cis-benchmarks", keyword: "cis benchmarks", dateOptimized: "2025-07-21", isPrimary: true,
      rankings: { "Jul 27-Aug 2": 88, "Aug 3-9": 82, "Aug 10-16": 75, "Aug 17-23": 65, "Aug 24-30": 58 },
    },
    {
      id: 17, pageUrl: "/solutions/email-security", keyword: "email security solutions", dateOptimized: "2025-08-13", isPrimary: true,
      rankings: { "Aug 17-23": 5, "Aug 24-30": 4 },
    },
    {
      id: 18, pageUrl: "/products/waf", keyword: "web application firewall", dateOptimized: "2025-08-14", isPrimary: false,
      rankings: { "Aug 17-23": 22, "Aug 24-30": 18 },
    },
  ]
};