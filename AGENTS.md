# Fahad Pathan's Portfolio - AI Agent Rules

Welcome! You are assisting with the development of Fahad Pathan's personal portfolio website (`fahadPathan7.github.io`).

## Core Directives

1. **Read the AI Directory**: The `/AI/` folder in the root directory contains the definitive guidelines for working on this project. 
   - **`AI/README.md`**: Start here for an overview of all available documentation.
   - **`AI/rules/constraints.md`**: Critical boundaries of what you should and shouldn't do.
   - **`AI/rules/conventions.md`**: Coding styles, design system, colors, and typography.
   - **`AI/context/overview.md`**: High-level map of the codebase and project goals.
   - **`AI/context/workflow.md`**: Recommended step-by-step approach to implementation.

2. **Aesthetics & Design System**:
   - The design uses specific variables: `--primary-color: #6366f1` (Indigo) and `--secondary-color: #8b5cf6` (Violet). See `AI/rules/conventions.md` for the full theme.
   - We use `'Space Grotesk'` for headings and `'Inter'` for body text.
   - Adhere to the responsive breakpoints (max-widths: 1200px, 992px, 768px, 576px) detailed in the conventions.

3. **Tech Stack**:
   - **NO Frameworks**: This project uses purely HTML5, Vanilla CSS, and Vanilla JavaScript. Do not introduce frameworks like React, Vue, Tailwind, or Bootstrap unless explicitly told to.
   - **Analytics**: Google Analytics (gtag.js) is the ONE approved analytics/tracking exception. Its external loader is in `<head>` of `index.html` and its config lives in `app.js` (no inline scripts). Do not add any other analytics or tracking.
   
4. **Behavioral Guidelines**:
   - Make minimal, focused changes.
   - Do NOT run Git commands.
   - Do NOT delete files without explicit instruction.
   - Follow the `app.js` and `style.css` file structure strictly. Keep animations smooth, using `requestAnimationFrame` and Intersection Observers as established in `app.js`.

5. **Responsiveness**: Always ensure the web app is responsive. Use the established `@media` queries in `style.css` rather than writing new layout logic from scratch.

Failure to follow these rules may result in breaking the established codebase style and constraints.
