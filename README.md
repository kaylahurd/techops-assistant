# TechOps Assistant

Internal tool I built for the TechOps team at LocumTenens.com to help with day-to-day support work.

Runs fully in the browser — no installs. Open the page and go.

## What it does

- **Assistant** — chat-based helper connected to the Anthropic API, pulls from a knowledge base of common provider issues, suggests replies and SF closing summaries
- **My Queue** — prototype Salesforce case queue with thread view, inline reply drafting, auto-generated replies, and one-click closing summaries
- **Knowledge Base** — browse and add known issues with steps and email templates

## Status

Active prototype. Anthropic API is connected via Cloudflare Worker. Salesforce read access and Outlook Graph API integration are both in progress.

## Notes

Split across `index.html`, `styles.css`, and `app.js`. No build step, no dependencies. Style profiles and custom KB entries persist in localStorage.

Built for Chrome and Edge.
