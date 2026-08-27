# ✨ Raksha Bandhan Vibes ❤️

A magical, animated Raksha Bandhan surprise website — built with React + Vite,
made to be deployed for free on GitHub Pages and sent to your sister as a link.

**Live experience:** loading screen → cinematic hero → click "Celebrate" →
confetti, fireworks, falling petals, glowing diyas, a rotating rakhi, music,
and an emotional greeting card, followed by a memory gallery, a journey
timeline, and a closing quote.

## ✨ Features

- Rotating-rakhi loading screen with a smooth cinematic transition
- Full-screen animated hero with an original brother–sister illustration
- One-click celebration: confetti burst, looping fireworks, falling flower
  petals, ambient sparkles, and glowing diyas — all on `<canvas>`, tuned to
  stay light on mobile
- Floating music player (play/pause/volume/mute, animated equalizer) that
  only ever plays music you provide — nothing copyrighted is bundled
- Animated greeting card with a personal letter
- Memory photo gallery with lightbox, lazy loading, and graceful
  placeholders when a photo is missing
- Scroll-triggered "Our Journey Together" timeline
- Respects `prefers-reduced-motion`, pauses animations when the tab is
  hidden, keyboard-navigable controls with ARIA labels
- Fully responsive — mobile, tablet, desktop

## 💌 Personalize it (one file!)

Everything you'd want to change — names, the letter, the quote, the song
title shown in the player, timeline milestones, memory captions — lives in:

```
src/content.js
```

Open it, edit the text, save. That's it.

## 📷 Adding your own photos

Put your photos in `public/images/` named `memory-1.jpg` … `memory-4.jpg`
(or edit the filenames in `src/content.js`). See `public/images/README.md`.

## 🎵 Adding music

This project does **not** include any copyrighted audio. To add the song:

1. Get an audio file you have the rights to use.
2. Save it as `public/audio/raksha-bandhan-song.mp3`.

See `public/audio/README.md` for details. Music only ever starts after the
visitor clicks "Celebrate" — never on page load.

## 🛠 Installation

```bash
git clone https://github.com/YOUR_USERNAME/raksha-bandhan-vibes.git
cd raksha-bandhan-vibes
npm install
npm run dev
```

Open the printed local URL to preview.

## 📦 Build

```bash
npm run build
```

Output goes to `dist/`.

## 🚀 Deploy to GitHub Pages

This repo already includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and deploys automatically on
every push to `main`.

**One-time setup:**

1. Push this project to a new GitHub repository (commands below).
2. In your repo on GitHub: **Settings → Pages → Build and deployment →
   Source**, choose **GitHub Actions**.
3. Push to `main` — the workflow builds and publishes automatically.
4. Your site will be live at:
   `https://YOUR_USERNAME.github.io/raksha-bandhan-vibes/`

**Important — set the base path.** Open `vite.config.js` and make sure
`base` matches your repository name exactly:

```js
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPOSITORY-NAME/', // e.g. '/raksha-bandhan-vibes/'
})
```

If you're deploying to a user/organization page (a repo named
`YOUR_USERNAME.github.io`), set `base: '/'` instead.

## 📤 Push to GitHub

```bash
git init
git add .
git commit -m "Create Raksha Bandhan Vibes website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/raksha-bandhan-vibes.git
git push -u origin main
```

## 🗂 Project structure

```
raksha-bandhan-vibes/
├── public/
│   ├── audio/
│   │   └── raksha-bandhan-song.mp3   (you add this)
│   └── images/
│       ├── favicon.svg
│       └── memory-1.jpg … memory-4.jpg   (you add these)
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx
│   │   ├── Hero.jsx
│   │   ├── BrotherSisterScene.jsx
│   │   ├── Rakhi.jsx
│   │   ├── Diya.jsx
│   │   ├── MusicPlayer.jsx
│   │   ├── Celebration.jsx
│   │   ├── GreetingCard.jsx
│   │   ├── Memories.jsx
│   │   ├── Timeline.jsx
│   │   ├── Quote.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useReveal.js
│   ├── content.js      ← personalize here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/workflows/deploy.yml
├── package.json
├── vite.config.js
└── index.html
```

## 🖼 About the illustration

The brother-and-sister artwork on the hero section is an original SVG
illustration built for this project (see `BrotherSisterScene.jsx`) — no
external or copyrighted images are used, so it's safe to deploy publicly
as-is. Swap in real photos in the Memories section for the personal touch.

---

Made with ❤️ for the beautiful bond between Brother & Sister.
Happy Raksha Bandhan 🌸✨
