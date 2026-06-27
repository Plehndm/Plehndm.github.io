---
layout: page
title: FinSight AI
description: A multi-agent financial-intelligence platform that analyzes global markets across technical, fundamental, sentiment, and macro lenses.
img: assets/img/projects/finsight-ai.jpg
importance: 3
category: AI/ML
github: https://github.com/Plehndm/finsight-ai
---

**Status:** Work in progress (architecture & data pipeline) · **Role:** Solo author · **Timeframe:** 2026

FinSight AI orchestrates a team of specialized LLM agents to analyze market data across regions, sectors, and asset classes — combining technical, fundamental, sentiment, and macro analysis, detecting cross-market correlations, and linking financial patterns to real-world events.

## Tech stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Plotly.js, Recharts
- **Backend:** Python 3.11, FastAPI, Celery, SQLAlchemy
- **AI orchestration:** LangChain / LangGraph with OpenAI & Anthropic models
- **Data:** yfinance, Alpha Vantage, Finnhub, FMP; pandas, statsmodels
- **Infrastructure:** PostgreSQL + TimescaleDB, Redis, Docker (target deploy: Vercel + Railway)

## Highlights

- **Multi-agent architecture** — distinct agents for technical, fundamental, sentiment, macro, and cross-market correlation analysis, coordinated through an API gateway with Redis queuing.
- **Global coverage** across 11 GICS sectors and dozens of industries.
- **Regime-change & anomaly detection**, plus event intelligence that ties market moves to real-world occurrences.
- **Time-series at scale** via PostgreSQL + TimescaleDB.

> This is an ambitious, in-progress system — the focus here is the **architecture and engineering design** of a production-style multi-agent platform.

<!-- TODO: add a dashboard screenshot (Plotly/Recharts) and/or an architecture diagram once deployed. -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/finsight-ai.jpg" title="FinSight AI (placeholder — replace with dashboard screenshot or architecture diagram)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Placeholder image — swap in a dashboard screenshot or an architecture diagram.
</div>

## Links

- **Code:** [github.com/Plehndm/finsight-ai](https://github.com/Plehndm/finsight-ai)
- *Live deploy (Vercel) would make this much stronger — recommended next step.*
