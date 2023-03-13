var cacheName = 'ajudapet';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/fontawesome-all.min',
        './assets/css/main',
        './assets/css/noscript',

        './assets/js/breakpoints.min',
        './assets/js/jquery.min.js',
        './assets/js/browser.min',
        './assets/js/jquery.scrollex.min',
        './assets/js/jquery.jquery.scrolly.min',
        './assets/js/jquery.main',
        './assets/js/jquery.util',

        './images/banner.png',
        './images/ave.png',
        './images/cachorro.png',
        './images/gato.png',
        './images/peixe.png',
        './images/repteis.png',
        './images/roedor.png',
        './images/512.png',
        './images/256.png',
        './images/196.png',
        './images/180.png',
        './images/167.png',
        './images/152.png',
        './images/144.png',
        './images/128.png',
        
        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});