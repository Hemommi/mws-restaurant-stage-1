/*Install event; Creating and opens a cache store for static*/
const static = 'restaurantStatic';

self.addEventListener('install',event => {
    event.waitUntil(
        caches.open('static')
            .then(cache => {
                return cache.add([
                    '/index.html',
                    '/restaurant.html',
                    '/css/styles.css',
                    '/data/restaurants.json',
                    '/js/dbhelper.js',
                    '/js/main.js',
                    '/js/restaurant_info.js',
                    '/img/1.jpg',
                    '/img/2.jpg',
                    '/img/3.jpg',
                    '/img/4.jpg',
                    '/img/5.jpg',
                    '/img/6.jpg',
                    '/img/7.jpg',
                    '/img/8.jpg',
                    '/img/9.jpg',
                    '/img/10.jpg'
                ]).catch(error => {
                console.log('Open failed:', error);
            });
        })
    );
});

self.addEventListener('instal', event => {
    event.waitUntil (
        caches.open('static')
        .then (function(cache){
            console.log('Cache is open');
            return cache.add(urlsToCache);
        })
    );
});