---
title: "Personal Dashboard"
description: "A self-hosted dashboard aggregating data from various services into a single, customizable interface."
pubDate: 2024-03-15
tags: ["dashboard", "self-hosted", "productivity"]
status: "Active"
techStack: ["Astro", "TypeScript", "Tailwind CSS", "SQLite"]
githubLink: "https://github.com/username/personal-dashboard"
demoLink: "https://dashboard-demo.example.com"
---

I got tired of checking multiple services every morning. GitHub notifications, calendar events, weather, server status, RSS feeds—each required opening a different tab or app. Personal Dashboard consolidates everything into a single page that loads in under a second.

## Architecture

The dashboard is built with Astro for fast initial loads and selective hydration. Data from external services is fetched server-side during build or via lightweight API routes. SQLite stores cached responses and user preferences locally, eliminating external database dependencies.

Each widget is independent. The weather widget failing to load doesn't break the calendar widget. Errors are displayed gracefully with retry options. The whole system runs on minimal hardware—I deploy it on a Raspberry Pi at home.

## Customization

Widgets are configured through a JSON file. You specify which services to include, their positions on the grid, and refresh intervals. Adding a new widget means creating an Astro component and registering it in the config. The styling uses Tailwind CSS with a dark mode that respects system preferences.

Current widgets include GitHub activity, Google Calendar, weather (OpenWeather API), Uptime Kuma status, and a basic RSS reader. The roadmap includes Todoist integration and a Pomodoro timer. Pull requests for new widgets are welcome.
