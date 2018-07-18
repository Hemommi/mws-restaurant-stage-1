if(navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
        .then(function(registration) {
            //Registration is successful
            console.log('ServiceWorker registration successful', registration.scope);
        }).catch(function(registration) {
            //Registration failed
            console.log('Registration failed', error);
    });
}