---
layout: page
title: SceneCheck
description: Cross-platform IRL event finder — discover, join, and host real-world events. iOS · Android · Web from one codebase.
img: assets/img/projects/scenecheck.jpg
importance: 1
category: Full-Stack
github: https://github.com/Plehndm/SceneCheck-App
---

**Status:** Active · **Role:** Full-stack developer · **Timeframe:** Mar 2026 – Jun 2026

SceneCheck is a live, geolocation-based event finder that helps people discover and attend real-world events that match their interests — and create their own. It ships from a **single TypeScript codebase to web, iOS, and Android** using React Native + Expo, backed by Supabase.

## Tech stack

- **Frontend:** React Native (Expo SDK 54), React Native Web, TypeScript, Zustand
- **Backend:** Supabase — PostgreSQL, Auth, and serverless Edge Functions
- **Testing & quality:** Jest with coverage reporting; architecture & requirements docs
- **Delivery:** iOS / Android via Expo Go, plus a responsive web build

## Highlights

- **Interest-based recommendation algorithm** that matches events to users from their stated interests.
- **Geofenced notifications** — alerts for relevant events within a user-selected radius or city.
- **One codebase, three platforms** — unified RN/Expo app rendering to web, iOS, and Android.
- **Social layer** — group chats for attendees, friend connections, and event ratings.
- **Safety by design** — 18+ age gating plus block/mute controls.

<!-- TODO: replace the placeholder below with real app screenshots / a screen-capture GIF
     (event feed, map + radius view, group chat). Drop files in assets/img/projects/ and update paths. -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/scenecheck.jpg" title="SceneCheck (placeholder — replace with real screenshot)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Placeholder image — swap in real SceneCheck screenshots or a gameplay-style screen GIF.
</div>

## Links

- **Code:** [github.com/Plehndm/SceneCheck-App](https://github.com/Plehndm/SceneCheck-App)
- *Live demo / TestFlight / Expo link: coming soon.*
