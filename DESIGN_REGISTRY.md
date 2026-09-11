# Design Registry & Style Architecture &bull; VintageGearFord

## 1. Brand Identity & Aesthetic
- **Brand Name:** VintageGearFord
- **Category / Niche:** Vintage Mechanical Watches &bull; Haute Horlogerie Atelier &bull; Chronometry
- **Design Philosophy:** Deep horological obsidian slate, chronometer brass amber gold, blued-steel cyan accents, and classical horology typography.

## 2. Color Palette & Design Tokens
- `--color-bg`: `#0F141C` (Horological Obsidian Slate)
- `--color-surface`: `#171E2B` (Charcoal Watchmaker Desk)
- `--color-surface-subtle`: `#1F293A` (Midnight Steel Chamber)
- `--color-border`: `#2A364F` (Machined Steel Border)
- `--color-text`: `#E2E8F0` (Chronometer Silver White)
- `--color-text-muted`: `#94A3B8` (Slate Telemetry Grey)
- `--color-accent`: `#D97706` (Horological Brass Amber Gold)
- `--color-steel`: `#38BDF8` (Heat-Blued Steel Hand Cyan)
- `--color-ruby`: `#E11D48` (Synthetic Jewel Ruby)

## 3. Typography Hierarchy
- **Serif Display:** `'Cinzel', 'Playfair Display', Georgia, serif` &mdash; Roman inscriptions, horology branding, classical Swiss chronometry.
- **Modern Sans:** `'Plus Jakarta Sans', sans-serif` &mdash; Clean, legible narrative prose and collector documentation.
- **Monospace Telemetry:** `'JetBrains Mono', monospace` &mdash; Beat rates (vph), gear teeth numbers, Witschi timing tolerances, and technical tags.

## 4. Navigation & Layout
- Exactly 1 `<header class="site-header">` per page with sticky backdrop-filter blur.
- Exactly 1 `<div class="mobile-drawer" id="mobile-drawer">` per page synchronized in `assets/js/main.js`.
- Fully responsive across desktop, tablet, and mobile breakpoints.
