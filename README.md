# HealPrint Client

This is the main entry point (`index.html`) for the HealPrint web application, a professional health diagnostics platform. The project is structured as a modern frontend application, likely using React (as indicated by the presence of `.tsx` files and a `main.tsx` entry point).

## Overview

- **Purpose:**  
  HealPrint aims to provide holistic diagnostics for skin, hair, and internal health, with a focus on natural solutions for African communities and beyond.

- **Frontend Stack:**  
  - **HTML/CSS:** The `index.html` sets up the base HTML structure.
  - **React + TypeScript:** The `src/` directory contains `.tsx` files, indicating the use of React with TypeScript.
  - **Tailwind CSS:** The presence of `tailwind.config.ts` and `postcss.config.js` suggests Tailwind CSS is used for styling.
  - **Vite:** The `vite.config.ts` file indicates Vite is used as the build tool for fast development and optimized builds.

## index.html Details

- **Meta Tags:**  
  - Sets character encoding, viewport, and SEO-friendly title/description.
  - Open Graph and Twitter meta tags for rich social sharing.
- **Fonts:**  
  - Loads Google Fonts: Inter and Plus Jakarta Sans for modern, clean typography.
- **App Mount Point:**  
  - `<div id="root"></div>` is where the React app is injected.
- **Script:**  
  - Loads the main React entry point: `/src/main.tsx`.

## Project Structure (Client)

- `src/` – Main source code for the frontend.
  - `components/` – Reusable UI components (e.g., Button, Card, Header, Footer).
  - `pages/` – Page-level components (e.g., About, Contact, Features, Solutions).
  - `hooks/` – Custom React hooks.
  - `lib/` – Utility functions.
  - `assets/` – Static images and assets.
- `public/` – Static files (favicon, robots.txt, etc.).
- `tailwind.config.ts` – Tailwind CSS configuration.
- `vite.config.ts` – Vite build configuration.
- `package.json` – Project dependencies and scripts.

## How It Works

1. **HTML Loads:**  
   The browser loads `index.html`, which sets up the page and loads fonts.
2. **React App Mounts:**  
   The script `/src/main.tsx` is loaded, which mounts the React application into the `#root` div.
3. **SPA Routing:**  
   The React app handles navigation and rendering of different pages (About, Contact, etc.) as a single-page application.
4. **Styling:**  
   Tailwind CSS and custom styles are applied for a modern, responsive UI.

---

If you need a more detailed README (including setup instructions, usage, or backend details), let me know!