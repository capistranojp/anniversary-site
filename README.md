# Anniversary Site

Static site, no build step, no dependencies.

## Make it yours
- **Text**: edit the `[bracketed]` placeholders in `index.html`.
- **Photo**: drop your picture into `assets/` (e.g. `photo.jpg`) and change `src="assets/photo.svg"` in `index.html`. Square-ish photos look best; keep it under ~300 KB (resize/compress it) so it loads fast on phones.
- **Song**: add your song as `assets/song.mp3` (or change the `<audio src>`). Keep the file name lowercase and the same as in the HTML, since GitHub Pages is case-sensitive.

## Deploy on GitHub Pages
1. Put these files at the root of a repo and push to `main`.
2. Repo **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/ (root)`**.
3. After a minute your site is live at `https://<username>.github.io/<repo>/`.

## Notes
- Music starts on the first tap of the envelope (browsers block autoplay before a tap). A mute button appears at the top right.
- Hearts are CSS-animated and are turned off for people who have "reduce motion" enabled.
