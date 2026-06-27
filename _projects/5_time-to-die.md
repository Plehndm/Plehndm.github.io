---
layout: page
title: Time to Die
description: A browser-playable Unity WebGL arcade shooter — eliminate drones while the clock (and your health) runs down.
img: assets/img/projects/time-to-die.jpg
importance: 5
category: Games
github: https://github.com/Plehndm/Time-to-Die-Game
---

**Status:** Playable (WebGL) · **Role:** Solo developer · **Engine:** Unity → WebGL

A fast-paced arcade survival game that runs entirely in the browser — no install required. Players race to eliminate drones while continuous health decay forces aggressive, reflex-driven play.

## Tech stack

- **Engine:** Unity, exported to **WebGL / HTML5**
- **Platform:** runs in any modern browser (Chrome, Firefox)

## Highlights

- **Zero-install playable build** — compiled WebGL assets run straight from the browser.
- Tight arcade combat loop with a health-decay survival mechanic.
- Cross-browser compatible.

## Play it

The compiled WebGL build lives in the repository. To embed it directly on this page, copy the
Unity `Build/` output into `assets/unity/time-to-die/` and uncomment the iframe below.

<!-- Once the Unity WebGL build is copied to assets/unity/time-to-die/, uncomment this block:
<div class="row justify-content-center">
  <iframe src="{{ '/assets/unity/time-to-die/index.html' | relative_url }}"
          style="width: 100%; max-width: 960px; height: 600px; border: 0;"
          title="Time to Die — playable WebGL build" allowfullscreen></iframe>
</div>
-->

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/time-to-die.jpg" title="Time to Die (placeholder — replace with a gameplay GIF)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Placeholder image — swap in a gameplay GIF.
</div>

## Links

- **Code & WebGL build:** [github.com/Plehndm/Time-to-Die-Game](https://github.com/Plehndm/Time-to-Die-Game)
