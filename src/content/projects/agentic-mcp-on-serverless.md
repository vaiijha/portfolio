---
title: "Agentic AI & MCP on serverless"
description: "ReAct, Reflexion, and LLMCompiler on AWS Lambda with externalized agent memory, tool-output caching, and MCP benchmarking on FaaS."
badge: "Research"
stack: "Python, AWS Lambda, Step Functions, MCP, LangGraph/LangChain"
dateRange: "2024 — 2025"
---

## Problem

Always-on VM deployments for multi-turn agents are costly under **bursty load**, and FaaS invocations need **memory and state across turns** without keeping a server warm.

## What shipped

- **Agentic workflows**—ReAct, Reflexion, LLMCompiler—adapted for serverless with **custom state management**, **externalized agent memory** injected across invocations, and **tool-output caching**.
- **Characterized and benchmarked MCP on FaaS / AWS Lambda** (IEEE ICWS 2026 / arXiv; 2nd-author framing).

### Related publications

- “Towards Orchestrating Agentic Applications as FaaS Workflows,” **IEEE IPDPSW 2025** (2nd author).
- “XFAGENT: Automating Multi-Cloud Deployment of Agentic Workflows on FaaS Platforms,” **IEEE/ACM CCGrid 2026** short paper (2nd author).
- “Optimizing FaaS Platforms for MCP-enabled Agentic Workflows,” **IEEE ICWS 2026 / arXiv** (2nd author).

## Results (vs scaling VM baselines)

| Metric | Improvement |
| --- | --- |
| Latency | Up to **17×** lower |
| Cost | **~66%** lower |
| Input tokens | **88%** fewer |
