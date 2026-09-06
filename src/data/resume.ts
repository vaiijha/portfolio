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
  "AI/ML and distributed systems engineer with 4 years of experience building and scaling GenAI applications and large-scale ML pipelines and recommendation systems.";

export const summary =
  "Built multi-agent AI systems with LangGraph/LangChain, MCP and RAG by implementing agentic workflow patterns (ReAct, Reflexion, LLMCompiler). Deployed at production scale across AWS and Azure; LLM optimizations for latency, cost, and end-user recommendations.";

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
    items:
      "PySpark, ML/DL, statistics; LangChain, LangGraph; MCP; RAG; Jupyter",
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
    title: "Research Staff–2",
    dateRange: "Oct 2024 — Present",
    org: "Indian Institute of Science (IISc), Dept. of Computational and Data Sciences",
    location: "Bengaluru",
    bullets: [
      "Agentic FaaS: ReAct/Reflexion/LLMCompiler + state/memory/caching → 17× latency / 66% cost / 88% fewer input tokens vs VM baselines.",
      "Multi-cloud profiling with DP-based partitioning across AWS and Azure → up to 80% latency reduction; 70% infra cost cut via parallel scaling.",
      "Multi-agent / edge-AI inference for drone swarms under resource constraints.",
      "Managed 2 research staff + 3 master's students (GenAI + Quantum workflows).",
    ],
  },
  {
    title: "AI Engineering Consultant (Contract)",
    dateRange: "Nov 2024 — Mar 2025",
    org: "Featurely AI",
    location: "Remote",
    bullets: [
      "Computer-use agent v1 (LangGraph, Claude, OpenAI) for product testing — automating complex web workflows via synthetic browser interactions.",
      "Fine-tuned OpenAI models for planning + DOM selection; reduced zero-shot failures.",
    ],
  },
  {
    title: "Data Engineer I",
    dateRange: "Aug 2022 — Oct 2024",
    org: "Epsilon",
    location: "Bengaluru",
    bullets: [
      "Recs: 400K+ monthly customers; ~6% sales lift.",
      "ETL 50M+ records; Airflow ML pipelines; 100K+ engagement events; 30+ hrs/month saved.",
      "Industries: healthcare, automobile, telecom.",
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
  "V. Jha et al., “Optimizing FaaS Platforms for MCP-enabled Agentic Workflows,” IEEE ICWS 2026 / arXiv (2nd author).",
  "V. Jha et al., “XFAGENT: Automating Multi-Cloud Deployment of Agentic Workflows on FaaS Platforms,” IEEE/ACM CCGrid 2026 short paper (2nd author).",
  "V. Jha et al., “Towards Orchestrating Agentic Applications as FaaS Workflows,” IEEE IPDPSW 2025 (2nd author).",
  "V. Jha et al., “Choreography and Profiling of Quantum-Classical FaaS Workflows on Hybrid Clouds,” IEEE/ACM CCGrid 2025 (co-first author, short paper).",
] as const;

export const projects = [
  {
    title: "Agentic AI & MCP on serverless",
    badge: "2024 — 2025",
    stack: "Python, AWS Lambda, Step Functions, MCP, LangGraph",
    bullets: [
      "Agentic workflows (ReAct, Reflexion, LLMCompiler) on FaaS with externalized agent memory + tool-output caching.",
      "Up to 17× lower latency, 66% lower cost, 88% fewer input tokens vs scaling VM baselines.",
    ],
    cardDesc:
      "Agentic workflows (ReAct, Reflexion, LLMCompiler) on FaaS with externalized agent memory + tool-output caching — up to 17× lower latency, 66% lower cost, 88% fewer input tokens vs VM baselines.",
    url: "#",
  },
  {
    title: "Computer-use agent (Featurely AI)",
    badge: "Nov 2024 — Mar 2025",
    stack: "LangGraph, Claude, OpenAI APIs",
    bullets: [
      "v1 agent for product testing — automating complex web workflows via synthetic browser interactions.",
      "Fine-tuned models for planning + DOM-element selection; reduced zero-shot task failure rates.",
    ],
    cardDesc:
      "v1 agent for product testing — automating complex web workflows via synthetic browser interactions; fine-tuned models for planning + DOM-element selection; reduced zero-shot task failure rates.",
    url: "#",
  },
  {
    title: "Offer recommendation pipelines (Epsilon)",
    badge: "Aug 2022 — Oct 2024",
    stack: "Python, PySpark, Airflow, AWS Glue",
    bullets: [
      "End-to-end ML/DL recommendation serving production customers.",
      "400K+ monthly customers; ~6% sales lift; ETL on 50M+ records; 100K+ engagement events; 30+ hrs/month saved.",
    ],
    cardDesc:
      "End-to-end ML/DL recommendation serving production customers — 400K+ monthly customers; ~6% sales lift; ETL on 50M+ records; 100K+ engagement events; 30+ hrs/month saved.",
    url: "#",
  },
  {
    title: "Solar panel cleaning robot (Final Year)",
    badge: "Apr 2022 — Aug 2022",
    stack: "Sponsored R&D, embedded/robotics",
    bullets: [
      "Govt. of Karnataka sponsored project (~INR 5 lakhs); Best Project Award (1st of 70) and Best Project Presentation (2nd).",
    ],
    cardDesc:
      "Govt. of Karnataka sponsored (~INR 5 lakhs); Best Project 1st of 70; Best Presentation 2nd.",
    url: "#",
  },
] as const;
