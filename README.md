# 🏐 Ericeira Beach Volley Camp — Countdown

A minimal, single-page countdown to the Beach Volley Camp at **Praia dos Pescadores, Ericeira, Portugal** — starting **October 10, 2026**.

Live seconds-based countdown, full-bleed hero photo of Praia dos Pescadores, and an "Add to calendar" link. No build step, no dependencies — plain HTML/CSS/JS.

## Preview locally

```bash
open index.html
```

or serve it:

```bash
python3 -m http.server 8000
```

## Deploy to GitHub Pages

1. Create a new GitHub repo and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Changing the target date/time

Edit the `EVENT_START` constant at the top of [script.js](script.js). It's set to Portugal local time (`+01:00`, WEST) so the countdown lands on the correct moment regardless of the visitor's timezone.

## Credits

- Photo: *Vista da Ericeira - Praia dos pescadores* by Paulo Juntas, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Vista_da_Ericeira_-_Praia_dos_pescadores.JPG), licensed [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).
