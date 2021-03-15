const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/index.js",
  "/manifest.webmanifest",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

// install and register your service worker
self.addEventListener("install", function (evt) {
  evt.waitUntil(
    caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/transaction"))
  );

  // pre cache all static assets
  // evt.waitUntil(
  //   caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  // ); //@audit-issue
  // console.log("Your files were pre-cached successfully!");

  // tell the browser to activate this service worker immediately once it has finished installing
  self.skipWaiting();
});

// activate the service worker and remove old data from the cache
self.addEventListener("activate", function (evt) {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

//enable service worker to intercept network requests
// fetch
self.addEventListener("fetch", function (evt) {
  // code to handle the request
  if (evt.request.url.includes("/api/")) {
    console.log("[Service Worker] Fetch (data)", evt.request.url);

    evt.respondWith(
      caches
        .open(DATA_CACHE_NAME)
        .then((cache) => {
          return fetch(evt.request)
            .then((response) => {
              // if response good, clone it and store it in cache
              if (response.status === 200) {
                cache.put(evt.request.url, response.clone());
              }

              return response;
            })
            .catch((err) => {
              return cache.match(evt.request);
            });
        })
        .catch((err) => console.log(err))
    );
    return;
  }

  // serve static files from the cache, proceed with a network req when the resource is not in the cache - allows the page to be accessible offline
  evt.respondWith(
    // @audit-issue "the FetchEvent for http://localhost:3000/ resulted in a network error response: the promise was rejected" Promise.then (async) (anonymous) at line 78
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request).then((response) => {
        return response || fetch(evt.request);
      });
    })
  );
});
