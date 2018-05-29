const CACHE = 'restrev-01';

//create a new cache and add a series of assets to it
self.addEventListener('install', function (event) {
    console.log('The service Worker is being installed');

    event.waitUntil(caches.open(CACHE)
        .then(function (cache) {
            return cache.addAll([
                './',
                './js/dbhelper.js',
                './js/main.js',
                './js/restaurant_info.js',
                './js/registerSW.js',
                './index.html',
                './restaurant.html',
                './data/restaurants.json',
                './css/styles.css',
                'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
                'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2',
                './img/1.jpg',
                './img/2.jpg',
                './img/3.jpg',
                './img/4.jpg',
                './img/5.jpg',
                './img/6.jpg',
                './img/7.jpg',
                './img/8.jpg',
                './img/9.jpg',
                './img/10.jpg'
            ]);
        })
        .then(function () {
            console.log('WORKER: install completed');
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('The service worker is serving the asset.');

    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) return response;
            return fetch(event.request);
        })
            .catch(err => console.log(err, event.request))
    );
})

self.addEventListener('activate', function (event) {
    // Calling claim() to force a "controllerchange" event on navigator.serviceWorker
    event.waitUntil(self.clients.claim());
});
