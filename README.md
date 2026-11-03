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

The bundled game content is illustrative prototype copy and should be replaced with verified, licensed data before publication.
