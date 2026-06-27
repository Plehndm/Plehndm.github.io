---
layout: page
title: GPT From Scratch
description: A GPT-style large language model built from first principles in PyTorch — tokenizer, attention, and distributed training.
img: assets/img/projects/gpt-from-scratch.jpg
importance: 2
category: AI/ML
github: https://github.com/Plehndm/LLM_From_Scratch
---

**Status:** Work in progress · **Role:** Solo author · **Timeframe:** Jan 2026 – present

An end-to-end implementation of a GPT-style language model written from the ground up to build deep intuition for transformer internals — no high-level model libraries, just PyTorch and the math.

## Tech stack

- **Core:** Python, PyTorch
- **Data/tooling:** NumPy, Pandas, Jupyter
- **Training:** PyTorch CUDA via a WSL2 environment talking to NVIDIA GPUs; Distributed Data Parallel (DDP) multiprocessing

## Highlights

- **Byte-Pair Encoding tokenizer** built to construct the initial vocabulary and embeddings.
- **Attention mechanism implemented from scratch** to form the core transformer logic.
- **Distributed Data Parallel training** for multi-GPU scalability.
- **GPU pipeline on Windows** — PyTorch CUDA wired up through WSL2 to NVIDIA hardware.
- **RLHF-style fine-tuning** planned/applied to align model outputs.

> **Current status:** Byte-Pair Encoding and data sampling complete. **Goal:** a fully functional GPT-style LLM trained end-to-end.

<!-- TODO: add a training-loss curve, an attention-map heatmap, or a sample-generation screenshot from the notebook. -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gpt-from-scratch.jpg" title="GPT From Scratch (placeholder — replace with a training curve or attention map)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Placeholder image — swap in a loss curve, attention heatmap, or sample generation.
</div>

## Links

- **Code & notebook:** [github.com/Plehndm/LLM_From_Scratch](https://github.com/Plehndm/LLM_From_Scratch)
