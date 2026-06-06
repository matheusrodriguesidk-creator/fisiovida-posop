// Fisiovida PWA — Service Worker mínimo
const CACHE_NAME = 'fisiovida-v2';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Não intercepta nada — apenas permite instalação como PWA
