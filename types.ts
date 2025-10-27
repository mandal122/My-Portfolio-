
import type React from 'react';

export type ProjectCategory = 'Meta Ads' | 'Google Ads' | 'Landing Page' | 'Analytics';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: ProjectCategory;
  tags: string[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}
