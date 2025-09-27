# PWA Games Collection (minimal)

This is a minimal PWA-ready React + Vite project prepared as you requested. 
Click any game image to see the language-specific placeholder alert ("Coming soon!") — language picked from top flags.

## How to run locally

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open http://localhost:5173

## Deploy to Vercel

- Create a GitHub repo and push the project.
- In Vercel: Import Project → Build command: `npm run build` → Output directory: `dist`.

## Notes

- Images are placeholders. Replace `/images/game_*.png` with your cropped screenshots (you mentioned you'd like them like in your screenshots).
- Service worker is minimal; you can improve caching/updates using Workbox if needed.
