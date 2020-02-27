/**
 * 
 */
self.addEventListener('install', event => {
    console.log('[SV install]', event, event.target);
    // event.waitUntil(
    //     caches.open('airhorner').then(cache => {
    //         return cache.addAll([
    //             '/',
    //             '/?utm_source=homescreen',
    //             '/Home/About',
    //             '/Home/Index',
    //             '/Home/Contact'
    //         ]).then(() => self.skipWaiting());
    //     })
    // );
});

/**
 * 
 */
self.addEventListener('activate', event => {
    console.log('[SV activate]', event, event.target);
    // event.waitUntil(self.clients.claim());
});

/**
 * 
 */
self.addEventListener('fetch', event => {
    console.log('[SV fetch]', event, event.target);
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
