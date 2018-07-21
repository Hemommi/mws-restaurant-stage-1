/*Install event; Creating and opens a cache store for static*/

const static = 'restaurantStatic';
self.addEventListener('install',event =>{
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
                    '/img/img1.jpg',
                    '/img/img2.jpg',
                    '/img/img3.jpg',
                    '/img/img4.jpg',
                    '/img/img5.jpg',
                    '/img/img6.jpg',
                    '/img/img7.jpg',
                    '/img/img8.jpg',
                    '/img/img9.jpg',
                    '/img/img10.jpg',
                ]).catch(error => {
                console.log('Open failed:', error);
            });
        })
    );
});

