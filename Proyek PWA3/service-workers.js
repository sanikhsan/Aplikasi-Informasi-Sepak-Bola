importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
    { url: '/', revision: '1'},
    { url: '/index.html', revision: '1'},
    { url: '/manifest.json', revision: '1'},
    { url: '/service-workers.js', revision: '1'},
    { url: '/img/CL.jpg', revision: '1'},
    { url: '/img/TCL.jpg', revision: '1'},
    { url: '/img/PCL.jpg', revision: '1'},
    { url: '/img/icon192.png', revision: '1'},
    { url: '/img/icon512.png', revision: '1'},
    { url: '/pages/nav.html', revision: '1'},
    { url: '/pages/home.html', revision: '1'},
    { url: '/pages/footer.html', revision: '1'},
    { url: '/pages/klasemen.html', revision: '1'},
    { url: '/pages/tim.html', revision: '1'},
    { url: '/pages/favorit.html', revision: '1'},
    { url: '/css/materialize.min.css', revision: '1'},
    { url: '/css/style.css', revision: '1'},
    { url: '/css/icon.css', revision: '1'},
    { url: '/css/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2', revision: '1'},
    { url: '/js/materialize.min.js', revision: '1'},
    { url: '/js/nav.js', revision: '1'},
    { url: '/js/sw.js', revision: '1'},
    { url: '/js/api.js', revision: '1'},
    { url: '/js/idb.js', revision: '1'},
    { url: '/js/jquery-2.1.1.min.js', revision: '1'},
]);

workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  /.*(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'imageFcache',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ]
  })
);

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'img/icon512.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});