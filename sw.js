self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("vocab-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css", // Thay đổi đường dẫn nếu cần
        "/script.js", // Thay đổi đường dẫn nếu cần
        "/icons/icon-192x192.png",
        "/icons/icon-512x512.png",
        // Thêm các file khác mà bạn muốn cache
      ]);
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
