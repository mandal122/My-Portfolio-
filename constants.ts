import React from 'react';
import type { Project, Service } from './types';
import { MetaIcon } from './components/icons/MetaIcon';
import { GoogleAdsIcon } from './components/icons/GoogleAdsIcon';
import { LandingPageIcon } from './components/icons/LandingPageIcon';
import { ClarityIcon } from './components/icons/ClarityIcon';

export const SERVICES: Service[] = [
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(MetaIcon, { className: "w-12 h-12 text-accent" }),
    title: 'Meta Ads Management',
    description: 'Crafting and optimizing high-performing ad campaigns on Facebook and Instagram to drive leads and sales.'
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(GoogleAdsIcon, { className: "w-12 h-12 text-accent" }),
    title: 'Google Ads & SEM',
    description: 'Maximizing ROI through strategic search, display, and video campaigns on the Google Ads platform.'
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(LandingPageIcon, { className: "w-12 h-12 text-accent" }),
    title: 'Landing Page Design',
    description: 'Building visually appealing and conversion-focused landing pages that turn visitors into customers.'
  },
  {
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(ClarityIcon, { className: "w-12 h-12 text-accent" }),
    title: 'User Behavior Analysis',
    description: 'Utilizing Microsoft Clarity for session recordings and heatmaps to understand user intent and improve UX.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-commerce Fashion Campaign',
    description: 'Drove a 3.5x ROAS for a new fashion brand using targeted Meta ad campaigns and carousel ads.',
    imageUrl: 'https://picsum.photos/seed/fashion/600/400',
    category: 'Meta Ads',
    tags: ['E-commerce', 'ROAS', 'Carousel Ads']
  },
  {
    id: 2,
    title: 'Lead Gen for SaaS',
    description: 'Developed a high-intent Google Search campaign that decreased CPL by 40% for a B2B SaaS client.',
    imageUrl: 'https://picsum.photos/seed/saas/600/400',
    category: 'Google Ads',
    tags: ['SaaS', 'Lead Generation', 'CPL Reduction']
  },
  {
    id: 3,
    title: 'Webinar Sign-up Page',
    description: 'Designed a landing page with a 25% conversion rate for a high-profile marketing webinar.',
    imageUrl: 'https://picsum.photos/seed/webinar/600/400',
    category: 'Landing Page',
    tags: ['Conversion Rate', 'UI/UX', 'Webinar']
  },
  {
    id: 4,
    title: 'Clarity Heatmap Analysis',
    description: 'Identified key drop-off points on a checkout page using heatmaps, leading to a 15% increase in completions.',
    imageUrl: 'https://picsum.photos/seed/heatmap/600/400',
    category: 'Analytics',
    tags: ['Microsoft Clarity', 'Heatmaps', 'UX Improvement']
  },
  {
    id: 5,
    title: 'Local Service Google Ads',
    description: 'Managed a geo-targeted Google Ads campaign for a local plumbing service, increasing qualified calls by 200%.',
    imageUrl: 'https://picsum.photos/seed/local/600/400',
    category: 'Google Ads',
    tags: ['Local SEO', 'Geo-targeting', 'Call Tracking']
  },
  {
    id: 6,
    title: 'Mobile App Install Campaign',
    description: 'Ran a successful Meta campaign to drive mobile app installs, achieving a cost per install 20% below target.',
    imageUrl: 'https://picsum.photos/seed/app/600/400',
    category: 'Meta Ads',
    tags: ['Mobile App', 'CPI', 'A/B Testing']
  },
    {
    id: 7,
    title: 'Real Estate Landing Page',
    description: 'Created a sleek, image-focused landing page for a luxury real estate development, capturing high-quality leads.',
    imageUrl: 'https://picsum.photos/seed/realestate/600/400',
    category: 'Landing Page',
    tags: ['Real Estate', 'Lead Capture', 'Luxury']
  },
  {
    id: 8,
    title: 'Session Recording Insights',
    description: 'Analyzed user session recordings in Clarity to uncover UI bugs and points of friction, improving user satisfaction.',
    imageUrl: 'https://picsum.photos/seed/session/600/400',
    category: 'Analytics',
    tags: ['Session Recording', 'Bug Fixing', 'User Journey']
  }
];