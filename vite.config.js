import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ─────────────────────────────────────────────────────────────
// IMPORTANT FOR GITHUB PAGES:
// Change `base` below to '/YOUR-REPOSITORY-NAME/'
// Example: if your repo is https://github.com/anita/raksha-bandhan-vibes
// then base should be '/raksha-bandhan-vibes/'
// If you deploy to a USER/ORG page (username.github.io repo), set base to '/'
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  plugins: [react()],
  base: '/raksha-bandhan-vibes/',
})
