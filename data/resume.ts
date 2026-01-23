export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  gpa: string;
  graduation: string;
  coursework: string[];
}

export const education: Education = {
  school: "Northwestern University",
  degree: "Bachelor of Arts (Major in Statistics and Data Science, Minor in Computer Science)",
  gpa: "3.8/4.0",
  graduation: "Expected 06/2027",
  coursework: [
    "Data Structures & Algorithms",
    "Statistical Computing",
    "Regression Analysis",
    "Data Visualization"
  ]
};

export const experiences: Experience[] = [
  {
    id: "livenation",
    company: "Live Nation Entertainment",
    role: "Incoming Ticketing & Pricing Analytics Intern",
    location: "Chicago, IL",
    period: "01/2026 - present",
    description: [
      "Incoming ticketing and pricing analytics intern role beginning January 2026."
    ]
  },
  {
    id: "deepmanifold",
    company: "DeepManifold inc",
    role: "Machine Learning Engineer Intern",
    location: "New York, NY",
    period: "09/2023 - 12/2026",
    description: [
      "Generated embeddings for 5M+ active users, enabling daily batch and near real-time (<10min) updates with 98% cross-ID coverage across cookies, devices, and logins using BigQuery storage.",
      "Implemented six advanced ML models (Word2Vec, SimCLR/MoCo, GraphSAGE, Spectral Clustering, LDA, DIN), building a full training pipeline with WebSocket-based progress monitoring for near real-time feedback.",
      "Delivered insights through interactive dashboards (Tableau), reducing cohort analysis turnaround time and improving marketing budget allocation accuracy by 20%, directly informing executive decision-making.",
      "Collaborated cross-functionally with engineering and product teams to operationalize segmentation and recommendation insights, ensuring analytical outputs directly informed scalable product and growth decisions."
    ]
  },
  {
    id: "pixocial",
    company: "Pixocial | Human-First AI",
    role: "Data Science Intern",
    location: "Shenzhen, China",
    period: "06/2025 - 08/2025",
    description: [
      "Designed an A/B test for screen brightness optimization in BeautyPlus (2M+ DAU) using BigQuery regression modeling, achieving a +0.3% retention lift and driving full rollout across iOS and Android.",
      "Cleaned and processed 20 M+ Firebase user event logs and engineered brightness-level cohorts for experiment analysis, and reduced group variance to improve model stability and result reliability.",
      "Conducted feature analytics for the AI Eraser launch, analyzing core and guardrail metrics in SQL/BigQuery to reveal trade-offs between subscription conversion and user experience; insights informed product optimization and release strategy.",
      "Rebuilt GenAI Creative dashboards in Looker Studio, adding filter and portrait-conversion funnels, standardizing geo-filters, and refactoring Airflow DAG logic, reducing dashboard load time by 30% and improving reliability for analytics teams."
    ]
  },
  {
    id: "promed",
    company: "Promed Health +",
    role: "Data Analyst Intern",
    location: "Evanston, IL",
    period: "10/2024 - 01/2025",
    description: [
      "Developed an ETL lead-generation pipeline using SQL to clean and integrate 1K+ provider records from Definitive Healthcare, creating new data fields (region, specialty, ownership) to support segmentation and performance tracking.",
      "Automated data processing and reporting workflows in Excel and Python, reducing manual preparation time by 80% and delivering 25+ qualified leads per week that sustained a 50%+ sales conversion rate.",
      "Performed exploratory data analysis (EDA) and segmentation on healthcare claims using SQL and Python (pandas, matplotlib); built data visualization dashboards and geo-heatmaps that identified underserved clinic clusters and improved lead-targeting efficiency by 15%.",
      "Collaborated cross-functionally with the sales team to translate analytical insights into region-specific outreach strategies, directly contributing to new account growth in the TN market."
    ]
  }
];

export const projectData = [
  {
    id: "f1-analysis",
    title: "Analysis of Pit Stop Errors on F1 Race Results",
    period: "03/2025 - 05/2025",
    description: "Processed and merged two F1 datasets (~9,800 race records) using Python to engineer pit stop error metrics. Built regression models to evaluate pit stop impact, improving model fit (R²: 0.012 → 0.311).",
    tags: ["Python", "Regression Modeling", "Data Cleaning"],
    category: "Data Analysis"
  },
  {
    id: "rideshare-predictor",
    title: "Rideshare Price Predictor",
    period: "12/2024 - 01/2025",
    description: "Aggregated real-time Uber and Lyft API data using Python. Implemented predictive models (Linear Regression, Random Forest, XGBoost) with grid search, achieving 25% RMSE reduction.",
    tags: ["Machine Learning", "API Integration", "Predictive Modeling"],
    category: "Machine Learning"
  }
];




