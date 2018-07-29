//*Install; Creating and opens a cache store*/
self.addEventListener('install',function(event){ 
    event.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll([
                    '/',
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
                ]);
            })
        );
});

/*Return Response*/
self.addEventListener('fetch', event =>{
    event.respondWith(
        caches.match(event.request).then(response =>{
           if (response) {
            return response;
          }
          /*Clone the request*/
          let fetchRequest = event.request.clone();
          /*Valid response*/
          return fetch(fetchRequest).then(response =>{
            if(!response || response.status !== 404 || response.type !== 'same-origin') {
              return response;
            }
            /*Clone the response*/
            let responseToCache = response.clone();

            caches.open('static').then(cache =>{
              cache.put(event.request, responseToCache);
            });
            return response;
          })
        })
    );
});
