const CACHE_NAME = "vocab-cache-v1";
const urlsToCache = [
  "https://phanvankhaiofficial.github.io/n1-goi/csv/1-50.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/51-100.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/101-145.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/146-190.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/191-235.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/236-280.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/281-345.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/346-380.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/381-428.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/429-480.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/481-530.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/531-600.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/601-650.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/651-700.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/701-750.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/751-800.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/801-850.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/851-890.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/891-930.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/931-976.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/977-1020.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/1021-1067.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/1068-1110.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/1111-1170.csv",
  "https://phanvankhaiofficial.github.io/n1-goi/csv/bunpou.csv",
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
