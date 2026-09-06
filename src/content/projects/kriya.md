---
title: "KRIYA — FaaS-native control plane for a mutable agent workflow on AWS Lambda (IISc DREAM Lab)"
description: "Append-only mutation log, Version CAS commits, and a reconciler-centric control plane for agent workflows whose graph can change while running on AWS Lambda."
badge: "IISc DREAM Lab"
stack: "AWS Lambda, DynamoDB, Lambda Destinations, SQS, Python, Go"
dateRange: "IISc · ongoing"
---

## Problem

Agent workflows on AWS Lambda need a **FaaS-native control plane** when the workflow graph can **mutate while the run is in flight**—not just a static DAG compiled upfront.

The reference demo skill is a **literature survey**: plan → workers querying arXiv → synthesize results.

## What shipped

### Mutation log and graph state

- **Append-only mutation log** in DynamoDB; the live graph is **`G_v = fold(log)`**.
- **Version CAS** commits batches of mutations.
- **INV-1:** commit a mutation batch **before** dispatching work that depends on it.

### Roles and writers

- **Agents propose mutations**; a **Go reconciler commits** them.
- The **reconciler is the sole DynamoDB writer** for control-plane state.
- **Generic Python skill-free role runtime** plus the **Go reconciler**.

### Wiring on Lambda

- **Lambda Destinations** plus **standard SQS**—not synchronous `node_completed` callbacks.
- Destinations are the **wire**, not a separate control plane.
- Intents arrive via **`ResultEnvelope.proposed[]`**; Go lowers them to **`AddNode` / `AddEdge` / `Join`**.

## Architecture note

This work is about **mutation logging, CAS commits, and reconciler-centric control** on FaaS—not a “Control MCP” layer as the headline story.

## Limits (current)

- **Parallel `add_task` id races** are not fully handled (**BACKLOG P0**).
- **CAS serializes commits**, not human-readable node names.

## Context

Ongoing research at IISc DREAM Lab. A SIGMETRICS submission deadline (Oct 9, 2026) is on the horizon; title and status are not fixed here.
