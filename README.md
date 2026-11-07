# Mingke Wu · Academic website

Personal academic website prepared for **https://sorrymaker03.github.io/**.
Built from the updated CV with plain HTML, CSS, and JavaScript. No package installation, build step, API key, or backend is required.

## Publish on GitHub Pages

1. Sign in to GitHub as `sorrymaker03`.
2. Create a repository named **`sorrymaker03.github.io`**. If it already exists, use that repository and preserve its existing work.
3. Upload this folder's contents to the repository root on the `main` branch. `index.html` must be directly at the repository root. Keep the `assets/` folder with its files and the `.nojekyll` file.
4. Open **Settings → Pages → Build and deployment**.
5. Set **Source** to **Deploy from a branch**. Choose **main** and **/(root)**, then save.
6. Use the **Visit site** link in Pages after GitHub finishes deploying. The intended address is **https://sorrymaker03.github.io/**; preparing these files does not mean the address is already live.

Official references: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) · [Configuring the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Edit the website

- `index.html`: biography, research projects, publications, experience, and links.
- `assets/styles.css`: layout, typography, spacing, and mobile styles.
- `assets/main.js`: publication filters/search, mobile navigation, and copying the email address.
- `assets/Mingke_Wu_CV.pdf`: downloadable CV. Replace this file to update the download.
- `assets/favicon.svg`: browser icon.

Publication cards are visible without JavaScript. To add one, copy an existing `<article class="publication">` in `index.html`, update its content, and set `data-category` to `peer` or `preprint`. The displayed count updates automatically.

## Local preview

From this directory, run `python3 -m http.server 8000 --bind 127.0.0.1`, then open `http://127.0.0.1:8000`.

## Content notes

The content follows `CV_Mingke_word.docx` (updated November 2026). Research summaries are shortened for web reading. Publication titles, author lists, journal names, and publication statuses follow the supplied CV; they are not independently reclassified. The cell-pattern graphic is an abstract illustration, not experimental data. The site has no analytics or contact-form service.
