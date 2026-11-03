# Stationfall Field Terminal

A dependency-free, web-first prototype for a Stationfall board game companion.

## Run locally

Serve this folder over HTTP so the service worker and installable PWA features work:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Prototype scope

- Manual or random character selection
- Persistent active game via `localStorage`
- In-play character companion
- Location and Project X lookup
- Trait-to-character finder scoped to the active roster
- Responsive mobile navigation
- Offline app shell and installable web manifest

Character and Project X summaries are derived from the user-supplied May 2022 Character Dossier. The source PDFs are not redistributed with this prototype; confirm publication rights before public release. Location descriptions remain prototype content pending a structured map-data pass.
