var CACHE = 'voltemos-v1';
var ASSETS = [
  './',
  './index.html',
  './app.js',
  './style.css',
  './manifest.json',
  './data/strong.json',
  './data/refs.json'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e){
  // Network first for Bible data, cache first for assets
  var url = e.request.url;
  if(url.includes('/data/kjv') || url.includes('/data/ara')){
    e.respondWith(
      fetch(e.request).catch(function(){ return caches.match(e.request); })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(r){
        return r || fetch(e.request).then(function(resp){
          return caches.open(CACHE).then(function(c){
            c.put(e.request, resp.clone());
            return resp;
          });
        });
      })
    );
  }
});
