<img width="1920" height="1080" alt="Screenshot (616)" src="https://github.com/user-attachments/assets/038e0d27-3855-478c-ac5f-25f0f24d071e" />

# Weather Station

An instrument-panel styled weather dashboard, built with plain HTML, CSS and JavaScript — no build step, no framework, no API key required.

## Features

- **Live conditions** — current temperature, feels-like, condition, wind speed & direction (compass dial)
- **12-hour forecast** — scrollable hourly strip with icons and rain chance
- **7-day outlook** — high/low bars plus a line-chart trend view
- **Air quality (US AQI)** and **UV index** with plain-language guidance
- **Sunrise / sunset** with a live sun-position arc
- **Weather alerts** — automatic warnings for storms, high wind, extreme heat/cold, high UV
- **Today's advisory** — clothing/umbrella/sunscreen suggestions based on conditions
- **°C / °F toggle** and a **"Use my location"** button (geolocation)
- **Favourite cities** — save and quickly switch between locations
- **Share button** — native share sheet on mobile, clipboard copy on desktop
- **Installable PWA** — add to home screen, works offline for the app shell (requires HTTPS hosting, e.g. GitHub Pages)
- Accessible (keyboard focus states, ARIA labels, reduced-motion support) and SEO-friendly meta tags

## Data source

Weather, geocoding and air-quality data from [Open-Meteo](https://open-meteo.com/) — free, no API key, no tracking.

## Running it

Just open `weather-station.html` in a browser. For the installable/offline PWA features to work, serve the files over HTTPS (GitHub Pages, Netlify, Vercel, or any static host) — service workers don't run from a local `file://` path.

## Files

| File | Purpose |
|---|---|
| `weather-station.html` | The app itself |
| `manifest.json` | PWA metadata (name, icons, theme colour) |
| `sw.js` | Service worker for offline app-shell caching |
| `icon-192.png`, `icon-512.png` | App icons |

## License

Feel free to use, modify and share.
<img width="1920" height="1080" alt="Screenshot (616)" src="https://github.com/user-attachments/assets/10ebe90c-5603-4fb9-8d0d-a678b15f1a17" />

