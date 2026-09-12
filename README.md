# Bibin C Ranjith — WordPress Developer

Responsive portfolio built with HTML, CSS and JavaScript. Includes four expandable project case studies, performance results, skills, experience and contact links.

## Local preview

Run `python3 -m http.server 3000 --directory dist` and open http://localhost:3000.

## Deploy to Vercel

1. Sign in to Vercel and select **Add New → Project**.
2. Import this GitHub repository.
3. Use **Other** as the framework, repository root as the Root Directory, no Build Command, and `dist` as the Output Directory. These are set in `vercel.json`.
4. Review Deployment Protection before deploying if you want to keep the website private. A private GitHub repository does not make the deployed website private.
5. Deploy. Future pushes to the production branch can deploy automatically through the GitHub integration.

No dependencies, API keys, or environment variables are required.

## Edit the portfolio

- `dist/index.html`: content and page metadata
- `dist/style.css`: responsive layout, typography and animations
- `dist/app.js`: menu, case-study support and reveal animations

Animations respect reduced-motion preferences. Project results are supplied by the portfolio owner; no client screenshots or invented outcomes are included.

## Privacy

The page contains the owner's email address and phone number. Keep the repository and deployment private until you intend to share them.
