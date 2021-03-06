const version = `0.0.1`;
const cache_name = `chess-${version}`;

/**
 * 
 */
self.addEventListener('install', (event) => {
    console.dir('[SV install]', event, event.target);
    event.waitUntil(caches
        .open(cache_name)
        .then((cache) => {
            console.log(cache);
            cache
                .addAll([
                    `/chess/`,
                    `/chess/index.html`,
                    `/chess/preload.html`,
                    `/chess/manifest.json`,
                    `/chess/icons-512.png`,
                    `/chess/style.css`,
                    `/chess/chess.js`,
                ])
                .then(function () {
                    console.log(arguments);
                    self.skipWaiting()
                })
                .catch((exception) => {
                    console.dir(exception);
                });
        })
        .catch((exception) => {
            console.dir(exception);
        }));
});

/**
 * 
 */
self.addEventListener('activate', (event) => {
    console.dir('[SV activate]', event, event.target);
    // event.waitUntil(self.clients.claim());
});

/**
 * 
 */
self.addEventListener('fetch', (event) => {
    console.dir('[SV fetch]', event, event.target);
    event.respondWith(caches.open(cache_name)
        .then(cache => cache.match(event.request, { ignoreSearch: true }))
        .then(response => response || fetch(event.request)));
});
