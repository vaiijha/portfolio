export const person = {
  name: "Vaibhav Jha",
  location: "Bengaluru, Karnataka, India",
  phone: "+91-8951548632",
  email: "vaijha22@gmail.com",
  urls: {
    github: "https://github.com/vaiijha",
    linkedin: "https://www.linkedin.com/in/dytcnn/",
    scholar:
      "https://scholar.google.com/citations?user=NqgJq54AAAAJ&hl=en",
  },
} as const;

export const headline =
  "AI/ML engineer and researcher";

export const summary =
  "AI/ML engineer and researcher with 3+ years across industry data platforms and research at IISc. Focus on distributed and serverless systems, agentic AI and MCP on FaaS, quantum–classical workflows, and scalable ML—with peer-reviewed papers at IEEE CCGrid, IEEE IPDPS Workshops, and an arXiv preprint. Previously built ETL and ML pipelines over 50M+ records and recommendation systems serving 400K+ monthly customers (Epsilon).";

export const skillCategories = [
  {
    label: "Languages & Data",
    items: "Python, Java, SQL, Bash/Shell; Pandas",
  },
  {
    label: "Cloud & Orchestration",
    items:
      "AWS (Lambda, Step Functions, Glue, EC2, S3, Athena), Azure (Durable Functions, Data Factory, Logic Apps), Docker, Airflow, Databricks",
  },
  {
    label: "ML / AI",
    items: "PySpark, ML/DL, statistics; LangChain, LangGraph; MCP; Jupyter",
  },
  {
    label: "Quantum",
    items:
      "Qiskit, IBM Quantum; benchmarking hybrid classical–quantum workflows",
  },
  {
    label: "Tools",
    items: "Git, Linux, LaTeX",
  },
] as const;

export const experience = [
  {
    title: "Research Associate–2",
    dateRange: "Oct 2024 — Present",
    org: "Indian Institute of Science (IISc), Dept. of Computational and Data Sciences",
    location: "Bengaluru",
    bullets: [
      "Distributed HPC research in quantum computing and AI (DREAM Lab); authored work on classical–quantum FaaS and LLM/agentic serverless workflows at Core A venues.",
      "Deployed and profiled hybrid quantum–classical applications across multi-cloud FaaS (AWS, Azure) with IBM Quantum; evaluated scaling strategies (published latency/cost improvements vs. baselines).",
      "Built state-management for agentic FaaS applications (externalized agent state across invocations; IEEE IPDPS Workshops 2025).",
      "Characterized Model Context Protocol (MCP) on FaaS and benchmarked MCP on AWS Lambda (arXiv, 2025).",
    ],
  },
  {
    title: "Data Engineer I",
    dateRange: "Aug 2022 — Oct 2024",
    org: "Epsilon",
    location: "Bengaluru, India",
    bullets: [
      "Data/ML engineer across healthcare, automobile, and telecom; delivered models serving recommendations to 400K+ monthly customers across brands and use cases.",
      "Built ETL on 50M+ customer records with AWS Glue, PySpark, Athena; orchestrated end-to-end ML pipelines with Airflow.",
      "Owned a reporting pipeline for 100K+ engagement events to improve training data quality, saving the team 30+ hours/month (Python, JupyterHub, Pandas).",
    ],
  },
] as const;

export const education = [
  {
    school: "R.V. College of Engineering (RVCE)",
    location: "Bengaluru, India",
    degree:
      "B.E., Electrical and Electronics Engineering; CGPA: 8.15/10",
    dateRange: "Aug 2018 — May 2022",
    bullets: [
      "Minor project: forecasting solar irradiance from time-series weather data.",
    ],
  },
] as const;

export const publications = [
  "V. Jha et al., “AgentX: Towards Orchestrating Robust Agentic Workflow Patterns with FaaS-hosted MCP Services,” arXiv preprint, Sept. 2025.",
  "V. Jha et al., “Towards Orchestrating Agentic Applications as FaaS Workflows,” IEEE IPDPS Workshops (IPDPSW), 2025.",
  "V. Jha et al., “Choreography and Profiling of Quantum-Classical FaaS Workflows on Hybrid Clouds,” IEEE/ACM CCGrid, 2025 (co-first author, short paper).",
] as const;

export const projects = [
  {
    title: "Agentic AI & MCP on serverless",
    badge: "2024 — 2025",
    stack: "Python, AWS Lambda, Step Functions, MCP",
    bullets: [
      "Research implementation on orchestrating agents and MCP services on FaaS with benchmarking and profiling for latency, cost, and scale.",
    ],
    cardDesc:
      "Python, AWS Lambda, Step Functions, MCP — orchestrating agents and MCP on FaaS with benchmarking for latency, cost, and scale.",
    url: "#",
  },
  {
    title: "Solar panel cleaning robot (Final Year)",
    badge: "Apr 2022 — Aug 2022",
    stack: "Sponsored R&D, embedded/robotics",
    bullets: [
      "Govt. of Karnataka sponsored project (~INR 5 lakhs); qualified for VTU funding; Best Project Award (1st of 70) and Best Project Presentation (2nd).",
    ],
    cardDesc:
      "Sponsored R&D, embedded/robotics — Karnataka-sponsored project; VTU funding qualified; Best Project and presentation awards.",
    url: "#",
  },
] as const;
