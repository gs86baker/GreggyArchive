---
title: "Archive Utility"
description: "A CLI tool for automating data archival workflows with support for multiple storage backends and configurable retention policies."
pubDate: 2024-08-20
tags: ["cli", "data-management", "automation"]
status: "Active"
techStack: ["TypeScript", "Bun", "PostgreSQL", "S3"]
githubLink: "https://github.com/username/archive-utility"
---

Archive Utility started as an internal tool to solve a recurring problem: moving aging data between storage tiers without manual intervention. What began as a simple script evolved into a configurable system that handles our entire archival pipeline.

## How It Works

The utility connects to your primary database and evaluates records against user-defined retention policies. Records matching archival criteria are extracted, compressed, and written to the configured storage backend—currently supporting S3-compatible object storage, local filesystem, and network shares. The original records are then safely removed from the source database after verification.

Configuration happens through a YAML file that defines policies per table or schema. You specify retention periods, compression settings, and destination paths. The tool handles the rest, including generating audit logs that satisfy most compliance requirements.

## Key Features

- **Incremental Processing**: Only evaluates records modified since the last run
- **Dry Run Mode**: Preview what would be archived without making changes
- **Parallel Execution**: Configurable worker threads for large datasets
- **Webhook Notifications**: Alerts on completion, errors, or policy violations
- **Restore Capability**: Retrieve archived records back to the source database

The project is actively maintained and used in production across several healthcare systems. Contributions welcome, especially for additional storage backend support.
