---
layout: page
title: Projects
description: "Projects by David Plehn — AI/ML systems, full-stack apps, data science, and games."
permalink: /projects/
---

<section class="section section--page-head">
  <div class="inner">
    <p class="eyebrow"><span class="eyebrow-path">~/projects</span> $ ls -la</p>
    <h1 class="section-title">Projects</h1>
    <p class="section-lede">{{ site.posts | size }} things I've built and explored — AI/ML systems, full-stack apps, data science, and games. Click any card to read more.</p>
  </div>
</section>

<section class="section section--grid">
  <div class="inner">
    <div class="project-grid">
      {% for project in site.posts %}
      {% include project-card.html project=project %}
      {% endfor %}
    </div>
  </div>
</section>
