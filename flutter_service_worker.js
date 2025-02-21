'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e38e16bfc2fc1164f53747d78920e5a5",
"version.json": "e90832737bff3822dad58ec0470ce14e",
"index.html": "e9a32bafe1904dc1a12ec0cd00574213",
"/": "e9a32bafe1904dc1a12ec0cd00574213",
"CNAME": "aaaa608edc01f0c1efd77a6e986758a0",
"js/wallet-api.min.js": "695660f44f91a70ab5d1150fa8932ec5",
"main.dart.js": "6a850fd3f8a13fdb63532ca7e1721ceb",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "fed0d20b138f5a23714ea2c4d510836f",
"icons/Icon-192.png": "30e77ce24bc33f356aa73abc162ca22b",
"icons/Icon-maskable-192.png": "30e77ce24bc33f356aa73abc162ca22b",
"icons/Icon-maskable-512.png": "fa96ad2d6066b88a579c405b719ef2c3",
"icons/Icon-512.png": "fa96ad2d6066b88a579c405b719ef2c3",
"manifest.json": "7699f2eb53ec5bf2d6cb916c33303f2a",
".git/config": "ef4305fdddc5f45bfab16412e55dfc40",
".git/objects/pack/pack-b38169f35db94639391b84ddbd642e3aeb17b818.idx": "199cff4f0a194465b4bbc21bc46ba4f0",
".git/objects/pack/pack-b38169f35db94639391b84ddbd642e3aeb17b818.pack": "37b4a87d547857df19ac9861f5e28d3e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d09dc41d170d31b77e6027f84206dea3",
".git/logs/refs/heads/main": "d09dc41d170d31b77e6027f84206dea3",
".git/logs/refs/remotes/origin/HEAD": "d09dc41d170d31b77e6027f84206dea3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ba9faeb277077013e72d7030b20739c7",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "fab62c74b73f5f34d9838c61bbc6c7ce",
".git/packed-refs": "ae4f469bf4a091d6e687b6c551f0b15f",
"assets/AssetManifest.json": "b8da395344e62e3d5f640c01cf0da4dc",
"assets/NOTICES": "e341e4e4553a61ff6bbee9c819015d33",
"assets/FontManifest.json": "efd7d5379901cc73f8de8ab8b2686b46",
"assets/AssetManifest.bin.json": "9d628f7e4945358687075b539ba65ea3",
"assets/circular_progress_indicator_square_large.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4d73c29904eca907f6bb09f1c5a3a2d8",
"assets/fonts/MaterialIcons-Regular.otf": "dacde5993f3c7cddd2ec11dc205ca27c",
"assets/assets/app_icon.png": "a2d9b9298a83f66ec6fcd92b4874221d",
"assets/assets/images/logo_with_text.png": "2c1bacc5ae996d13c03031d79b2d9ae9",
"assets/assets/images/wallet.png": "3aa5d1e657049cbcbf2597859adab09e",
"assets/assets/images/settings.png": "1edc6d98dbe14916c93a92bc74d84359",
"assets/assets/images/card_background.png": "07f55b685335beb3036ed8d56fa6c5ab",
"assets/assets/images/dpln_coin.png": "05cc23129128f9551843013e948039ac",
"assets/assets/images/logo_with_text_inline.png": "c09eca27e802c86fe919f7e7d3c9ee57",
"assets/assets/images/circles.png": "6ad1a05d1a7acb898560263225c36a8d",
"assets/assets/images/Canvatext.png": "70622e8ac8b095db20f019371853d9a3",
"assets/assets/images/apple.png": "d373331039ff27af3cc7da3cd3cc72fa",
"assets/assets/images/bids.png": "c6a2cb6a41bb185e262a2e8f06fb8337",
"assets/assets/images/usdc_coin.png": "395973f8883f7137a224fd6313a117b2",
"assets/assets/images/canvalogo.png": "984e4bae4ee17e537ddda8e1b66b0728",
"assets/assets/images/copy.png": "f06a9b0ada837b3a7c8c6be9facfae22",
"assets/assets/icons/auctions.png": "8f50d548668d79b9b7eaa7f298cc8ac2",
"assets/assets/icons/catalog.png": "aee51aa2e05bbab17a528ba5b15a169d",
"assets/assets/icons/wallet_grey.png": "1c7a2090304aa10325273948ad44baab",
"assets/assets/icons/search_active.png": "efd41bff1e964c2e246de772fc43464d",
"assets/assets/icons/subs.png": "65338b4086fe2a20372762c211dbdb57",
"assets/assets/icons/search.png": "c76eaa1e27e559f42179fc10ee363be9",
"assets/assets/icons/auctions_active.png": "fdf156b2eb4587f79659b17f886161bc",
"assets/assets/icons/catalog_active.png": "8e060746cc32c453f11b99eba8273da5",
"assets/assets/icons/wallet_grey_active.png": "6bc21fa6b32386ed340c5ca9c6105e7f",
"assets/assets/icons/subs_active.png": "0a48f92ade818505e26710764043d8c5",
"assets/assets/fonts/sf-ui-display-cufonfonts/sf-ui-display-medium-58646be638f96.otf": "15591c67ad9e86bb60b555286f7393f9",
"assets/assets/fonts/SFPRODISPLAYBLACKITALIC.OTF": "647ad7b734271f858d61a94283fd0502",
"assets/assets/fonts/SFPRODISPLAYREGULAR.OTF": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/fonts/IBMPlexMono-Regular.ttf": "ea96a0afddbe8ff439be465b16cbd381",
"assets/assets/fonts/SFPRODISPLAYBOLD.OTF": "644563f48ab5fe8e9082b64b2729b068",
"assets/assets/fonts/SFPRODISPLAYMEDIUM.OTF": "51fd7406327f2b1dbc8e708e6a9da9a5",
"assets/assets/fonts/IBMPlexSans-Regular.ttf": "1286abb632c5a409a0a997d11c994e34",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
