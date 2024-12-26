'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "90e2a3bd404f9b2cb50c5e0f19914292",
"version.json": "7b2e532e0d484fd206383b6d7a1b956c",
"index.html": "1f64b5ef5f9da2662c13e0a5c0d12e4d",
"/": "1f64b5ef5f9da2662c13e0a5c0d12e4d",
"CNAME": "aaaa608edc01f0c1efd77a6e986758a0",
"main.dart.js": "cd0bdd659ec7854cf8d4b855421a9fda",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "fed0d20b138f5a23714ea2c4d510836f",
"icons/Icon-192.png": "30e77ce24bc33f356aa73abc162ca22b",
"icons/Icon-maskable-192.png": "30e77ce24bc33f356aa73abc162ca22b",
"icons/Icon-maskable-512.png": "fa96ad2d6066b88a579c405b719ef2c3",
"icons/Icon-512.png": "fa96ad2d6066b88a579c405b719ef2c3",
"manifest.json": "7699f2eb53ec5bf2d6cb916c33303f2a",
".git/ORIG_HEAD": "39f9cb114eceb4126e4eafd88c190d10",
".git/config": "67686a56973776cd2e1ddd6e749f0e3b",
".git/objects/0d/a6e683361245d10437d340f1b596df54204fce": "8f61533f4216373f3723118aaf8ffccb",
".git/objects/95/b59cdb409226afb2437eaed9c4bc50ef937e26": "d8e486b537f8943678902d6b079f6294",
".git/objects/3e/a8223a5274184327bc622010769f63111220d3": "6f25621fd651cb933dd56516a35eb7e2",
".git/objects/9b/7bc2f3fdea7c8b3f76c24d6076cc0aaa7344ed": "4c494b15cac6c9b1f96d60fde53ec0d5",
".git/objects/6a/780d1a725d6ff8fa4a61e7fd679815fb01931c": "acca236b9b70bb4e13103e3e96ada1c7",
".git/objects/67/021696df16a56b584f9c424de7aa14c8403679": "88af9e996f2b1c7045ef4a5aa5f618a4",
".git/objects/9d/0dd8c633af979dcc041ff9bfa16a0bd22b471a": "55c684c455cb9050f4f8923ee64add46",
".git/objects/9c/1344cfca4159a6a62683a50917337e2573436c": "4e6458f817953af34584adec2e330e79",
".git/objects/a4/89ed5a390e85435ffd53ff7b4e2e4f3b947b4e": "29a743f285f09fbed01aa529aedd78e3",
".git/objects/be/68053498cc31324de21bdc21ee582a60779a16": "10f76ee05d688fd281449933b6ba93a4",
".git/objects/a5/743c3c74f03754e54d79055f7c66672b4f7ecd": "f3c0aa548430384a29e69e1622c3ee55",
".git/objects/ab/72e31c2399bbd620b76337a48dff4ef1c4df57": "3bc825506e5c39e9bce3dbefa7567f65",
".git/objects/eb/164571520adaab749747da4bdf13bcae67706b": "ba2c4ebe928922bd7564146e634681bd",
".git/objects/ca/5e114a6e75ccd861eb8678d1ad56c0570cc17d": "072108658374f7d62545391da78f5411",
".git/objects/pack/pack-f2851d1b6596b281f5fb115a7dd3a462af233b71.pack": "3e02ecdd0a784097e6c53a33b698a534",
".git/objects/pack/pack-f2851d1b6596b281f5fb115a7dd3a462af233b71.idx": "466650989eb01f68a71a306666891d02",
".git/objects/81/576d4e00072e01bfc1239e5997b342cf99a64d": "e213779772c807eb801209a16b7c6dcd",
".git/objects/43/8478ec3f7671bfe930c3b58878e3ddbacc9ba9": "9e4a2647e2f64b65c8a58e47b891a083",
".git/objects/9a/96883e171e533aaa90a4638aec8b20a96db8a9": "e93b3a23b34c75b8fe207892fa34a730",
".git/objects/53/2f936c20db696a5d15ef31e95252f4e93e48fb": "ff859d29099ed536698a3f08e845a8dd",
".git/objects/3f/f190fa9a2561c58c47b3822b525fdd8ae51e9b": "83cedc9a01bdb974882c6265424b85b2",
".git/objects/b1/48a781643bcbbb66bb7ca279580f398c6987a6": "f32e0d2456942e568c2addb99343e789",
".git/objects/b6/79b7b86c6b56ecf1b83709374ada49276b38c4": "14670a5a963fcb1f834a0940dce988a3",
".git/objects/a9/a9b2aefae3ec7e8283c80abb69a2e5c8be33c9": "d8380885e9708b97349f6d712abff9b6",
".git/objects/c3/c6192b80e11bccc235a890f6f26b61d736166d": "1bc43685ccfcaf24f0bf42be4eb11250",
".git/objects/e8/4610149c7c744046e57f545e819cad796de179": "f63fabf6ea13c0fed6873e6bc96ddb7b",
".git/objects/f6/28175c7b627e509f5e560b28cdbc6fad57dd09": "bc58ddcc8e681254e8b4e3701e4008a0",
".git/objects/f8/757478e5aa61ee36efc8a10ec73fcaa3bf7095": "0eeea2551291e822d0e878d2ac94f7de",
".git/objects/2c/a98fe4ff9d715e98073b2bc59eb814c0ed7532": "2a709729594e9a3c2fb7eb8facc45aef",
".git/objects/41/b4610c95cc9f5a2c55d9c3a2414f67bc0df395": "3265364ed48b85616ce67025b7c6df31",
".git/objects/76/8046d15928ba30217e0b55d4d6de86180f1b24": "a958765308bc8e0f0c7127545f059f2d",
".git/objects/1c/e84dd1b452c3081d95d400984ba763145718ee": "a8479dcf3655472a191dd4c83b9d3349",
".git/objects/7f/f9a993b24ab610df6c9ca0b5be89603240ac16": "142ad2f1ca82fc9a7462957db02ee5f6",
".git/objects/25/c86cf476e86a1bf483c6a3810a5cba2917c62d": "eb5ee87bae58191daf30e8de72206a76",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "41d7098a903c785ebe606d85d15ecdb0",
".git/logs/refs/heads/main": "fa4a7c8b81c9f73489b27781ddca1cd6",
".git/logs/refs/remotes/origin/main": "f63d845d054bd43834dc04028f1c7355",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "b9f2510690f094059dbe0fc643760381",
".git/refs/remotes/origin/main": "b9f2510690f094059dbe0fc643760381",
".git/index": "81a20b9c7aee23e8cdc0d9810278462d",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "bf9a2ba286202c57359a1c04af7d4b0c",
"assets/AssetManifest.json": "23491f806554be3fc74a1960a55a1497",
"assets/NOTICES": "2f264e2b2abc1e8c3308f6510e7b29ab",
"assets/FontManifest.json": "efd7d5379901cc73f8de8ab8b2686b46",
"assets/AssetManifest.bin.json": "6a61692a8127ed53947a60612c2f940c",
"assets/circular_progress_indicator_square_large.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b2854c4b2de96b04245b3a646d3e4e95",
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
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
