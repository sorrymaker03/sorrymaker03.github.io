# Mingke Wu — Academic Homepage

A responsive, static academic homepage for https://sorrymaker03.github.io/.

## Files

- `index.html`: all content and embedded CSS. Open this file directly to preview.
- `assets/portrait.png`: original supplied portrait.
- `assets/favicon.svg`: site icon.
- `.nojekyll`: serve as a plain static site on GitHub Pages.
- `robots.txt` and `sitemap.xml`: indexing metadata.
- `上传说明.txt`: Chinese upload and editing guide.

The page contains About (research keywords), Education (Peking University undergraduate degree and Yale visiting student exchange), Publications, and Honors & Awards, in that order. It uses system fonts and has no build step, dependencies, tracking scripts, or third-party font requests.

## Update GitHub Pages

Replace `index.html` in the repository root and commit to the configured publishing branch. Upload the `assets` folder when its files change. Do not upload the ZIP itself or an extra enclosing folder.

Styles are embedded in `index.html` to keep content and styling in the same deployment artifact. The previous `assets/styles.css` file is no longer requested and may be deleted from the remote repository. Hosting and browser caches can still delay changes; an already-open page needs to be refreshed.

## Editing

Edit typography, width, spacing and responsive rules inside the `<style>` element. Edit academic content in `<body>`. Contact links have accessible labels while displaying only icons.
