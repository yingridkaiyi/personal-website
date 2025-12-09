export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Spotify User Behavior Analysis',
    description: 'Analyzed 10k+ user listening sessions to identify churn patterns. Designed a dashboard for product managers to visualize retention metrics.',
    tags: ['Python', 'Pandas', 'Tableau', 'UX Research'],
    link: '#',
  },
  {
    id: '2',
    title: 'E-commerce Recommendation Engine',
    description: 'Built a collaborative filtering recommendation system. Conducted A/B testing on the UI placement of recommendations, increasing click-through rate by 15%.',
    tags: ['Machine Learning', 'Scikit-learn', 'React', 'A/B Testing'],
    link: '#',
  },
  {
    id: '3',
    title: 'Urban Mobility Visualization',
    description: 'Interactive map visualizing traffic patterns in NYC. Focused on accessibility and color-blind friendly design choices for the data visualization.',
    tags: ['D3.js', 'GeoJSON', 'Data Viz', 'Product Design'],
    link: '#',
  },
  {
    id: '4',
    title: 'Health App User Journey Map',
    description: 'Conducted user interviews and created journey maps to identify pain points in a diabetes management app. Proposed data-driven feature improvements.',
    tags: ['User Interviews', 'Figma', 'Journey Mapping', 'Data Analysis'],
    link: '#',
  },
];

