# denver.log — Creative Portfolio

A responsive, dark editorial portfolio/blog for graphic design, custom jersey design, Canva design, and coding projects.

## Repository structure

- `index.html` — page content and image references
- `styles.css` — visual styling, alternating layouts, and hover effects
- `script.js` — small interaction helper
- `assets/` — image files used by the project

## Replace the sample images

The page currently uses these files from `assets/`:

- `graphic-design.svg`
- `jersey-design.svg`
- `canva-design.svg`
- `coding-project.svg`

Replace each sample image with your own artwork. The easiest way is to upload your work into `assets/` using the same filename and extension. If you want to use PNG/JPG instead, edit the matching `src="assets/..."` in `index.html` to match the new filename exactly. Filenames are case-sensitive after publishing.

Recommended image shape: landscape 4:3. Portrait artwork also works, but the image frame crops it to fit, so keep important details near the center.

## Preview on your computer

Keep the files and `assets` folder together, then double-click `index.html` to open it in a browser. An internet connection is needed for the hosted Google Fonts; the page still works without them.

## Publish with GitHub Pages

1. Create a new GitHub repository (for example, `denver-log`).
2. Upload the *contents* of this folder — `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets` folder. Do not upload only the ZIP file.
3. Open the repository's **Settings → Pages**.
4. Under build and deployment, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish and open the URL it provides.

## Embed in Google Sites

Google Sites cannot directly replace a whole page with a raw HTML file. Publish the project using GitHub Pages first. In Google Sites, use **Insert → Embed → By URL**, paste the published URL, and resize the embed height so the page does not get trapped in a short inner scroll area.

## Assignment note

The page copy follows the `denver.log` creative-services concept. Your teacher's 500–800-word rule may count only the main blog copy or may include headings and labels; check the required counting method before submitting.
