---
layout: post
title: GPT from Scratch
description: "Transformer-based language model implemented from first principles"
image: assets/images/projects/gpt-from-scratch.svg
image_alt: "Illustration of GPT internals: causal self-attention heatmap, transformer block stack, and BPE token stream predicting the next token"
status: WIP
category: AI/ML
year: 2026
featured: true
repo: https://github.com/Plehndm/LLM_From_Scratch
tags:
  - PyTorch
  - Python
  - Transformers
  - BPE Tokenization
  - CUDA
  - RLHF
  - Distributed Training
---

A ground-up implementation of a GPT-style language model built to understand transformer internals: multi-head self-attention, Byte Pair Encoding, GPU training, and RLHF-style fine-tuning. Developed in Jupyter notebooks with PyTorch on CUDA (via WSL2) and DDP support, the project prioritizes architectural clarity over rapid prototyping. Work in progress.

## Highlights

- Multi-head attention transformer architecture modeled after GPT, with core LLM logic implemented from first principles
- PyTorch CUDA training through a WSL2 environment to leverage NVIDIA GPU compute
- Byte Pair Encoding (BPE) tokenizer and fine-tuned NLP embeddings for the initial vocabulary
- Output fine-tuning using an RLHF methodology
- Distributed training support with PyTorch DDP
