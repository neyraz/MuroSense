/* MuroSense service worker
   Lets the installed app open without a network connection.
   - The page itself (index.html) is fetched fresh whenever the computer is
     online, so a newer copy put on GitHub is used at the next start; the copy
     kept here is used only when offline.
   - The manifest, the icons and the fonts are kept here and refreshed in the
     background.
   Nothing you analyse passes through here: MuroSense reads your files on your
   own computer and sends them nowhere. */

var CACHE = 'murosense-app-v1';
var CORE = [
  './',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/icon.svg'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE)
      .then(function (cache) { return cache.addAll(CORE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k.indexOf('murosense-') === 0 && k !== CACHE; })
          .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

/* the page: from the network (asking the server whether it changed), else the copy kept */
function page(request) {
  return fetch(request.url, { cache: 'no-cache', credentials: 'same-origin' })
    .then(function (response) {
      /* a page that moved (a folder without its last /): let the browser follow it */
      if (response && response.redirected) return Response.redirect(response.url, 302);
      if (response && response.ok) {
        var copy = response.clone();
        caches.open(CACHE).then(function (cache) { cache.put('./', copy); });
      }
      return response;
    })
    .catch(function () {
      return caches.match('./').then(function (hit) { return hit || caches.match('./index.html'); })
        .then(function (hit) { return hit || new Response('MuroSense is offline and has not been opened online yet.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }); });
    });
}

/* everything else: the copy kept, refreshed in the background; fetched when there is none */
function asset(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (hit) {
      var fresh = fetch(request).then(function (response) {
        if (response && (response.ok || response.type === 'opaque')) cache.put(request, response.clone());
        return response;
      }).catch(function () { return hit; });
      return hit || fresh;
    });
  });
}

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET') return;
  var url = new URL(request.url);
  if (request.mode === 'navigate' && url.origin === self.location.origin) { event.respondWith(page(request)); return; }
  if (url.origin === self.location.origin || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(asset(request));
  }
});
