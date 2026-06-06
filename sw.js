// Fisiovida PWA — Service Worker v4 (limpa cache antigo)
const CACHE_NAME = 'fisiovida-v4';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Sem interceptação — deixa o browser buscar tudo normalmente
