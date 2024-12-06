const CACHE_NAME = "vocab-cache-v2";
const urlsToCache = [
  "./csv/1-50.csv",
  "./csv/51-100.csv",
  "./csv/101-145.csv",
  "./csv/146-190.csv",
  "./csv/191-235.csv",
  "./csv/236-280.csv",
  "./csv/281-345.csv",
  "./csv/346-380.csv",
  "./csv/381-428.csv",
  "./csv/429-480.csv",
  "./csv/481-530.csv",
  "./csv/531-600.csv",
  "./csv/601-650.csv",
  "./csv/651-700.csv",
  "./csv/701-750.csv",
  "./csv/751-800.csv",
  "./csv/801-850.csv",
  "./csv/851-890.csv",
  "./csv/891-930.csv",
  "./csv/931-976.csv",
  "./csv/977-1020.csv",
  "./csv/1021-1067.csv",
  "./csv/1068-1110.csv",
  "./csv/1111-1170.csv",
  "./csv/bunpou.csv",
  "./index.html",
  "./font/UDDigiKyokashoN-R.ttc",
  "./icons/favicon.ico",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
