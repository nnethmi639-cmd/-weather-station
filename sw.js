const CACHE_NAME = 'weather-station-v1';
const SHELL_FILES = [
  './weather-station.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// Shell: cache-first. Weather/geocoding API calls: network-first so data stays fresh,
// falling back to the last cached response when offline.
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  const isApi = url.includes('api.open-meteo.com') || url.includes('geocoding-api.open-meteo.com') || url.includes('air-quality-api.open-meteo.com');

  if (isApi) {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
