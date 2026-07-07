---
layout: post
title: FinSight AI
description: "Multi-agent platform analyzing global markets across technical, fundamental, sentiment, and macro signals"
status: Active
category: AI/ML
year: 2025
featured: true
repo: https://github.com/Plehndm/finsight-ai
tags:
  - Next.js
  - FastAPI
  - LangGraph
  - Python
  - PostgreSQL
  - TimescaleDB
  - Redis
  - Docker
---

A full-stack financial intelligence platform that deploys specialized AI agents to analyze global markets in parallel. Using LangGraph orchestration, it correlates cross-market relationships, detects regime changes, and links financial patterns to real-world events. Built on a Next.js 14 frontend and a FastAPI backend with PostgreSQL/TimescaleDB, Celery, and Redis; actively developed.

## Highlights

- Multi-agent LangGraph orchestration running four specialized analyses (technical, fundamental, sentiment, macro) in parallel
- Global coverage across U.S., Canada, Japan, and Europe with GICS sector taxonomy and regime-change detection
- Full-stack architecture: Next.js 14 + Plotly/Recharts UI, FastAPI backend, PostgreSQL/TimescaleDB, Celery, Redis
- Real-time data from five financial APIs with cross-market correlation and event-intelligence matching
