---
name: ADA Hub Astro Site
description: Architecture decisions and key patterns for the ADA Hub educational website in /ada-hub
---

The Astro website lives in the `/ada-hub` subdirectory of the repo (alongside the original C programs in `/ADA Programs`).

**Why:** User asked to build a full website around their C algorithm repository. Keeping both in the same repo avoids separate deployments.

**Architecture:**
- All 13 algorithm data (code, explanations, viva Q&A, etc.) is centralized in `src/data/algorithms.ts` as a TypeScript array
- Dynamic routes `[slug].astro` generate all algorithm pages from that data file — do NOT create individual per-algorithm page files
- Blog uses Astro content collections (`src/content/blog/*.mdx`)
- Global styles in `src/styles/global.css` — @import must come BEFORE @tailwind directives (CSS order requirement)

**Workflow:** `cd ada-hub && npm run dev` on port 5000 with `--host 0.0.0.0`

**Deployment:** Static site — build: `cd ada-hub && npm run build`, publicDir: `ada-hub/dist`

**Sitemap note:** @astrojs/sitemap has a reduce() bug on some versions; added `filter: (page) => !page.includes('undefined')` as workaround.

**GitHub API:** GitHubStats.astro fetches at build time with `User-Agent: ADA-Hub-SSG` header — silently fails to defaults if API unavailable.
