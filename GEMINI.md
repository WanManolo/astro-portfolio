# Astro Portfolio - Gemini CLI Context

This is a personal portfolio project built with **Astro**, **React**, and **Tailwind CSS 4**, featuring a high-fidelity "cyber/terminal/hacker" aesthetic. It serves as a professional showcase for an IT career, emphasizing technical expertise through interactive UI elements.

## Tech Stack & Core Dependencies

- **Framework:** [Astro 5](https://astro.build/) (Static Output)
- **UI Library:** [React 19](https://react.dev/) (via `@astrojs/react`)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite`)
- **Component Library:** [Ant Design 5](https://ant.design/)
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & Ant Design Icons
- **Fonts:** JetBrains Mono, Orbitron, Source Code Pro (via @fontsource)

## Architectural Patterns & Conventions

### Styling & Visual Identity
- **Tailwind Prefix:** All Tailwind classes MUST use the `tw:` prefix (e.g., `tw:flex`, `tw:bg-black`).
- **Aesthetic:** High-contrast "cyber" theme.
    - **Primary Colors:** Neon Green (`#00ff00`), Cyber Green (`#00ff9f`), Terminal Background (`#0a0a0a`).
    - **Typography:** `font-cyber` (Orbitron) for headings/accents, `font-mono` (JetBrains Mono) for content.
- **Animations:** Extensive use of Framer Motion for terminal-like interactions (typing effects, glitching, matrix rains).

### Component Guidelines
- **Hybrid Architecture:** Uses Astro for the layout and React for interactive "Islands".
- **Client Directives:** Use `client:load` for critical interactive components (Navigation, Hero) to ensure they are available immediately.
- **Naming:** Components follow PascalCase (e.g., `TerminalHero.tsx`, `SecurityMatrix.tsx`).

### Project Structure
- `src/components/`: React components for UI sections.
- `src/layouts/`: Base Astro layouts.
- `src/pages/`: Astro pages (primarily `index.astro`).
- `src/styles/`: Global CSS and Tailwind directives.
- `src/assets/`: Static assets (SVG backgrounds, sounds).

## Development Workflow

- **Package Manager:** `pnpm` (v10+)
- **Node Version:** 22.18.0 (pinned in `package.json`)
- **Formatting:** Prettier is configured with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`. Run `pnpm format` before committing.
- **Git Hooks:** Husky and lint-staged are used to ensure code quality on pre-commit.

## Key Components

- **TerminalHero:** The main landing section with a simulated command-line interface.
- **SecurityMatrix:** Interactive background/overlay providing the "Matrix" visual effect.
- **CyberSkills:** Skill visualization using themed UI components.
- **CyberTimeline:** Professional experience/history in a themed vertical layout.
- **HackerContact:** Contact form styled as a secure communication terminal.

## Guidelines for Gemini CLI

1.  **Maintain Aesthetic Integrity:** When adding or modifying components, strictly adhere to the defined `cyber` and `neon` color palettes in `tailwind.config.ts`.
2.  **Tailwind 4 & Prefixing:** Always use the `tw:` prefix for Tailwind classes. Do not use standard Tailwind classes without it.
3.  **Ant Design Integration:** Be mindful of Ant Design's styling; Tailwind's `preflight` is currently active but can be adjusted if conflicts arise.
4.  **Performance:** Since this is a portfolio, maintain fast LCP/FID by optimizing Astro island usage.
