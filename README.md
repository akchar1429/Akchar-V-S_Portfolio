# AKCHAR V S — Semantic & Accessible Portfolio

## Pages
- `index.html` — homepage and featured projects
- `about.html` — introduction, skills, education, experience
- `projects.html` — project descriptions and GitHub links
- `contact.html` — labeled contact form with validation and accessible error messages
- `404.html` — custom not-found page

## Run locally
Open `index.html` in a browser or use Visual Studio Code with Live Server.

## Accessibility features
- Semantic HTML landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Skip-to-content link, keyboard focus indicators, descriptive link text
- Accessible mobile navigation with `aria-expanded` and `aria-controls`
- Theme toggle with an accessible label
- Form labels, hints, required fields, `aria-invalid`, error messages and live status
- Reduced-motion media query; no essential content depends on animation
- Meaningful portrait alt text and responsive layouts

## Contact form note
The form validates fields in the browser and prepares an email using `mailto:`. It does not transmit data to a server. A server-side form provider is required for reliable direct submissions.

## Before deployment
1. Replace `https://example.com/` in `sitemap.xml` with the actual site domain.
2. Verify internship, certification and achievement details.
3. Test keyboard navigation and screen-reader behavior.
4. Run Lighthouse in Chrome on the deployed site. A score of 100 cannot be promised without testing and may vary with environment and hosting.
5. Check contrast and validate markup using current audit tools.
