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
    id: 'spotify-forecasting',
    title: 'Spotify Artist Growth Forecasting & AutoResearch System',
    description: 'Built an automated research and forecasting pipeline to predict 30-day Spotify monthly-listener growth for K-pop artists, combining audience momentum, fan social engagement, playlist reach, release timing, and concert activity signals. Designed a hypothesis-driven model experimentation framework to systematically test artist-growth signals and feature interactions, improving validation RMSE from 1.86M to 1.32M listeners (~29%) over the Ridge baseline.',
    tags: ['Python', 'scikit-learn', 'Forecasting', 'Experimentation'],
    link: '#',
  },
  {
    id: 'dynamic-pricing',
    title: 'Dynamic Pricing System',
    description: 'Designed an end-to-end dynamic pricing system with 63+ engineered features from 50K+ historical orders. Built a full ML pipeline achieving R² = 0.881 with Random Forest, and developed a model ensemble combining demand forecasting, price elasticity modeling, and reinforcement learning (30% / 30% / 40% weighting).',
    tags: ['Machine Learning', 'Feature Engineering', 'Python', 'Random Forest'],
    link: '#',
  },
  {
    id: 'f1-analysis',
    title: 'Analysis of Pit Stop Errors on F1 Race Results',
    description: 'Processed and merged two F1 datasets (~9,800 race records) using Python (pandas, NumPy) to engineer pit stop error metrics. Built and compared multiple regression models to evaluate pit stop impact on race outcomes, improving model fit (R²: 0.012 → 0.311).',
    tags: ['Python', 'Regression Modeling', 'Data Cleaning', 'Analytics'],
    link: '#',
  },
];




