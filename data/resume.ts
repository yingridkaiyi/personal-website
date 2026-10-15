export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Education {
  school: string;
  degree: string;
  gpa: string;
  graduation: string;
  coursework: string[];
  teaching: string[];
}

export const education: Education = {
  school: "Northwestern University",
  degree: "Bachelor of Arts (Major in Statistics and Data Science, Minor in Computer Science)",
  gpa: "3.8/4.0",
  graduation: "Expected 06/2027",
  coursework: [
    "Data Structures & Algorithms",
    "Regression Analysis",
    "Data Visualization",
    "Scalable Software Architectures",
    "Statistical Computing"
  ],
  teaching: [
    "STAT 305 - Data Management and Information Processing",
    "STAT 303-3 - Python for Data Science 3"
  ]
};

export const experiences: Experience[] = [
  {
    id: "sony",
    logo: "/logos/sony.svg",
    company: "Sony Music Publishing",
    role: "A&R Research & Analytics Intern",
    location: "New York, NY",
    period: "06/2026 - 08/2026",
    description: [
      "Designed the data schema and underlying database for an A&R data platform, resolving fragmented publisher data across >3 data sources into a unified structure with weekly refreshes, saving 10 hours per week of A&R research effort.",
      "Conducted ad-hoc SQL querying and analysis in Snowflake, integrating song-, release-, and artist-level streaming data to support the deal analysis team on catalog acquisition (catalog decay rate), album momentum, and release analysis.",
      "Developed a front-end research platform for the database, designing for non-technical user experience through experimentation, enabling A&R teams to compare song momentum and ownership context without ad-hoc analyst support.",
      "Conducted weekly A&R research on emerging songwriters by integrating streaming signals, publishing records, and song metadata from MLC, Chartmetric, and Luminate API, contributing 5+ talents advancing to further A&R evaluation.",
      "Applied LLM-based auto-research workflow to analyze Billboard chart lifecycle patterns across decades, identifying streaming-era decay patterns and consumer behavior shifts influencing song longevity and breakout sustainability."
    ]
  },
  {
    id: "livenation",
    logo: "/logos/livenation.svg",
    company: "Live Nation Entertainment",
    role: "Ticketing & Pricing Analytics Intern",
    location: "Chicago, IL",
    period: "02/2026 - 05/2026",
    description: [
      "Automated a manual concert-data cleaning and processing workflow by refactoring existing SAP BusinessObjects queries and Excel scripts into a repeatable ETL pipeline, standardizing comparable-artist scaling data across venues and ticket tiers, allowing the Pricing team to reduce data extraction time by 2 hr / scaling project.",
      "Partnered with ticketing stakeholders to define artist-scaling requirements and built an all-in-one Tableau dashboard centralizing pricing, venue, and ticket-tier KPIs for easier access and pricing decisions, reaching 40+ internal users.",
      "Built custom GPT workflows to streamline recurring analysis and prototype new demand and pricing metrics, including artist-profile alignment measures for evaluating comparable shows and scaling behavior."
    ]
  },
  {
    id: "deepmanifold",
    company: "DeepManifold Inc.",
    role: "Machine Learning Engineer Intern",
    location: "New York, NY",
    period: "09/2025 - 01/2026",
    description: [
      "Helped transform a commercial banking client from rule-based segmentation to an ML-driven customer intelligence platform, building and evaluating embedding, graph, clustering and recommendation models including Word2Vec, GraphSAGE, and DIN.",
      "Collaborated with engineering and product teams to integrate learned customer embeddings into personalized recommendation pipelines, where online A/B testing achieved +12% CTR, +9% CVR, and +7% uplift for cold-start users vs. demographic baselines."
    ]
  },
  {
    id: "pixocial",
    logo: "/logos/pixocial.svg",
    company: "Pixocial | Human-First AI",
    role: "Data Science Intern",
    location: "Shenzhen, China",
    period: "06/2025 - 08/2025",
    description: [
      "Designed an A/B test for screen brightness optimization in BeautyPlus (2M+ DAU) using BigQuery regression modeling, achieving a +0.3% retention lift and driving full rollout across iOS and Android.",
      "Conducted feature analytics for the AI Eraser launch, analyzing core and guardrail metrics in SQL/BigQuery to reveal trade-offs between subscription conversion and user experience; insights informed product optimization and release strategy.",
      "Rebuilt GenAI Creative dashboards in Looker Studio, adding filter and portrait-conversion funnels, standardizing geo-filters, and refactoring Airflow DAG logic, reducing dashboard load time by 30% and improving reliability for analytics teams.",
      "Cleaned and processed 20 M+ Firebase user event logs and engineered brightness-level cohorts for experiment analysis, and reduced group variance to improve model stability and result reliability."
    ]
  },
  {
    id: "promed",
    logo: "/logos/promed.png",
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
    id: "spotify-forecasting",
    title: "Spotify Artist Growth Forecasting & AutoResearch System",
    period: "03/2026 - 06/2026",
    description: "Built an automated research and forecasting pipeline to predict 30-day Spotify monthly-listener growth for K-pop artists. Designed a hypothesis-driven experimentation framework, improving validation RMSE from 1.86M to 1.32M listeners (~29%) over the Ridge baseline.",
    tags: ["Python", "scikit-learn", "Forecasting"],
    category: "Machine Learning"
  },
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




