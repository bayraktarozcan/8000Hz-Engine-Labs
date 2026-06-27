# Contributing

Thank you for considering contributing to 8000Hz Engine Labs!

## How to Contribute

1. **Check existing Issues** — see if someone else is already working on it.
2. **Open an Issue** — discuss your proposed changes before starting work.
3. **Fork & Branch** — create a feature branch from `main`.
4. **Local Preview** — run `npx serve src` to verify your changes.
5. **Submit a PR** — fill out the pull request template.

## Code Style

- **HTML**: semantic elements, `data-i18n` attributes for bilingual text.
- **CSS**: utility-first naming (Tailwind-inspired), no build step.
- **JS**: vanilla ES6+, no dependencies, `camelCase` naming.

## Commit Convention

Conventional Commits format: `type: description`

- `feat:` — new feature
- `fix:` — bug fix
- `style:` — UI/UX improvements
- `docs:` — documentation
- `ops:` — CI/CD or GitHub config

## Adding a Game

Edit `src/index.js` and add an entry to the `games` array with:
- `name` / `nameEn` — bilingual names
- `engine` / `engineEn` — engine details
- `api` / `apiEn` — input API description
- `status`: `"compatible"`, `"partial"`, or `"incompatible"`
- `analysis` / `analysisEn` — technical analysis text
- `tag`: engine group filter
