const version = `0.0.1`;
const cache_name = `chess-${version}`;

/**
 * 
 */
self.addEventListener('install', (event) => {
    console.dir('[SV install]', event, event.target);

    event.waitUntil(caches
        .open(cache_name)
        .then(function (cache) {
            console.log(cache, arguments);
            cache
                .addAll([
                    `/chess/`,
                    `/chess/index.html`,
                    `/chess/manifest.json`,
                    `/chess/icons-512.png`,
                    `/chess/style.css`,
                    `/chess/chess.js`,
                    `/chess/service-worker.js`,
                ])
                .then(function () {
                    console.log(arguments);
                    self.skipWaiting()
                })
                .catch(function () {
                    console.log(arguments);
                });
        })
        .catch(function () {
            console.log(arguments);
        }));
});

/**
 * 
 */
self.addEventListener('activate', (event) => {
    console.dir('[SV activate]', event, event.target);
    event.waitUntil(self.clients.claim());
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
