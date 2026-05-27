# Australia Migration Score Checker

Plain static bilingual website for checking Australian skilled migration EOI points and comparing occupation reference score ranges.

## Run locally

This project has no build step and no external runtime dependencies. Serve the folder over HTTP:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:5173
```

The app uses local `index.html`, `src/styles.css`, and `src/app.js`.
