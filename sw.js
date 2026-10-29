// Service worker untuk Money Management (PWA)
const CACHE_NAME = 'catatduit-v6';

const APP_SHELL = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon-64.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

function putInCache(request, response) {
  if (!response || !(response.ok || response.type === 'opaque')) return;
  caches.open(CACHE_NAME).then(cache => cache.put(request, response)).catch(() => {});
}

// Jaringan dulu supaya update langsung terlihat, cache sebagai cadangan saat offline
function fallbackToCache(request, fallbackUrl) {
  return caches.match(request).then(cached =>
    cached || (fallbackUrl ? caches.match(fallbackUrl) : null)
  );
}

function networkFirst(request, fallbackUrl) {
  return fetch(request)
    .then(response => {
      // Server sedang bermasalah: tetap tampilkan versi yang tersimpan
      if (!response.ok && fallbackUrl) {
        return fallbackToCache(request, fallbackUrl).then(cached => cached || response);
      }
      putInCache(request, response.clone());
      return response;
    })
    .catch(() => fallbackToCache(request, fallbackUrl));
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, './index.html'));
    return;
  }

  // File aplikasi sendiri: selalu cek versi terbaru
  if (url.origin === self.location.origin) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Aset CDN (Tailwind, Chart.js, font): pakai cache dulu, perbarui di latar belakang
  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request)
        .then(response => {
          putInCache(request, response.clone());
          return response;
        })
        .catch(() => cached);

      return cached || network;
    })
  );
});
