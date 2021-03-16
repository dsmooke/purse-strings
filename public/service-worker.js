const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/index.js",
  "/db.js",
  "/manifest.webmanifest",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

// Install
self.addEventListener("install", function (evt) {
  // pre cache data
  evt.waitUntil(
    caches.open(DATA_CACHE_NAME).then((cache) => {
      console.log("Your (data) was pre-cached!");
      return cache.add("/api/transaction");
    })
  );

  // pre cache all static assets
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Your static files were pre-cached successfully!");
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  // tell the browser to activate this service worker immediately once it has finished installing
  self.skipWaiting();
});

// *** Done successfully, should see static cache in Application tab in devtools

// Activate
self.addEventListener("activate", function (evt) {
  // activating service worker
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          // removing old data from the cache
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", function (evt) {
  // cache responses for requests for data

  if (evt.request.url.includes("/api/")) {
    console.log("[Service Worker] Fetch (data)", evt.request.url);

    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then((cache) => {
        return fetch(evt.request)
          .then((response) => {
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }

            return response;
          })
          .catch((err) => {
            return cache.match(evt.request);
          });
      })
    );
    return;
  }

  // this code allows the page to be accessible offline
  evt.respondWith(
    // serve static files from the cache; proceed with a network request when resource is not in cache

    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request).then((response) => {
        return response || fetch(evt.request);
      });
    })
  );
});
