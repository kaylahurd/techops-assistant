# TechOps Assistant

Internal tool I built for the TechOps team at LocumTenens.com to help with day-to-day support work.

It runs fully in the browser — no backend, no installs. Just open the page and go.

## What it does

- **Assistant** — chat-based helper that pulls from a knowledge base of common provider issues and suggests responses, steps, and SF closing summaries
- **My Queue** — prototype Salesforce case queue with real case data, thread view, inline reply drafting, and one-click closing summaries
- **Knowledge Base** — browse and add known issues with steps and email templates

## Status

Active prototype. Using local keyword matching for now — Anthropic API integration coming later so it can respond more naturally.

Salesforce read access is in progress. Write access (auto-posting closing summaries) planned after that.

## Notes

Single HTML file, no dependencies. Style profile and custom KB entries save to localStorage so they persist between sessions.

Built for Chrome. Should work in Edge too.
