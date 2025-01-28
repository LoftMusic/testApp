const CACHE_NAME = 'emoji-flasher-v1';
const ASSETS = [
  '/testApp/', // Adjusted for the repo name
  '/testApp/index.html',
  '/testApp/styles.css',
  '/testApp/app.js',
  '/testApp/manifest.json',
  '/testApp/icon-192x192.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});