/**
 * 
 */
self.addEventListener('install', event => {
    console.dir('[SV install]', event, event.target);
    event.waitUntil(caches.open('airhorner').then(cache => cache.addAll([
        '/',
        '/manifest.json',
        '/icons-512.png',
        '/style.css',
        '/chess.js',
        '/service-worker.js',
    ]).then(() => self.skipWaiting())));
});

/**
 * 
 */
self.addEventListener('activate', event => {
    console.dir('[SV activate]', event, event.target);
    // event.waitUntil(self.clients.claim());
});

/**
 * 
 */
self.addEventListener('fetch', event => {
    console.dir('[SV fetch]', event, event.target);
    // const cache = caches.match(event.request).then(response => {
    //     caches.add();
    //     return response;
    // });
    // event.respondWith(
    //     caches
    //         .match(event.request)
    //         .then(response => response || fetch(event.request))
    // );
});
