'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "90e2a3bd404f9b2cb50c5e0f19914292",
"version.json": "7b2e532e0d484fd206383b6d7a1b956c",
"index.html": "8c8af40a20734baac8fb8141e90ffea1",
"/": "8c8af40a20734baac8fb8141e90ffea1",
"CNAME": "0d7d84e8066c97a2b562882f6348f4f4",
"main.dart.js": "3759d94fed046868eb93a5eece0bb368",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c90c31519839ab33d621f3bd919e8caa",
".git/config": "67686a56973776cd2e1ddd6e749f0e3b",
".git/objects/95/30ef6d25ef31c0f98c9c9a03b21a578d053f1c": "fc2f5aa8bdf735f8aaf9eca0b1bb198b",
".git/objects/92/97afde90dbd01c08a4b226f7cbce09e63d5448": "112f19436811b713166464b5ec85d88f",
".git/objects/03/d040fe12d1ae883954740b577d029d71593f46": "158844b27f4c0643acf3f0f25ce91e14",
".git/objects/32/42f4ca6439f735169d626967c3e2357bb8fcc0": "aaf032944f652bd4f0f64d70449a5e10",
".git/objects/32/a5b87267c8518fb9e97216fe1f3d8bf915f27e": "63ce9e40272c176581af60672d0c21d3",
".git/objects/56/90b2429f429db2b6671f9649c6f9048a9f94b0": "dafefa965d6e2ef401cb30ae42c7049e",
".git/objects/58/38e03b5a8138ee61a11f163a7172a3cff3c589": "229aeace8690017c373b2ea73d05a585",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/05/c9db5f7f2277abcb8c63f5f86d25023244fdcb": "0bc5f8ed43ffd9646f056007dfb3b742",
".git/objects/05/fa790b0b06e0ddefb2bf4e67702fdd7e651295": "56f04d9e262169b667cabb853a007592",
".git/objects/9d/2decba602e9a550cac9232e9e8c1f0d72cc070": "4e2f1fd033af2c913cd94b7cdfff0768",
".git/objects/02/5b25c27aae647e146418e2f8bc12260015382f": "8cd3550d8a2fb38cfcd67d7ea265f0c3",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/02/62b572ae46ca5ca651d21cabfef736651ecb9f": "d716e17543a4f710c8e6ba30edd4e1fb",
".git/objects/a3/5d815451a63384eae62a7d5124a2339bb4c0bf": "0c30b472735054a6a74dc95433860597",
".git/objects/b2/f7daca100957c47773fb6655226f57162811c7": "39b0fddd2bf0090977581234fe83fa95",
".git/objects/ad/b223a0e0036ad6224480aa953b32ef3b09252d": "ff7a021cb8405be8aeefd904679d950f",
".git/objects/ad/93cdce933504206ca91c885237f30e7a853b88": "60a7f892fda7c7e102d1d7d061155828",
".git/objects/d7/907ec283f51d1a24bbf012f9b52bd14b6e9348": "6c3938d47c6795834510ecee06385d2a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/cc0011304f2d1420d389bf082f85202d81d498": "e0f3c41c3e3c0c4b56e4a24936b2afa7",
".git/objects/da/1d31fca12ab8624069f4ab35cc7ee96e13251d": "bfd9f7d63d3e1ec42e2fa08fcb63daa0",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/c8f01ed5c451206dc7aa6fd5ce8e38ef0f52ff": "9da946f2993f15cc59cedd9a937f2f0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/0cca4bc5d681014ff02b84d9602bbe9519b702": "491b16de28c13db9fa6fedce0ecff9fd",
".git/objects/e2/83ebfba6cd7eaf7d436d87e86663fa504c1342": "479e009f67fe6bb8d42c2da2aab5cb38",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/4f4e603c22192b312ccaa213e9e127b045acec": "ce13fd50cca91baf7963d90b829fbf50",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/130ec75d01d3b12eabdf9f57b76505e4052ebb": "fca40477a08cc9eabe432ce0c6d80d8b",
".git/objects/fc/8b710f18ef00a59c5a2dd6b803be6b4a54cca2": "314c3c73c623e9d256d02412afa12bde",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/712a73cd9a6f5d487454d7169d6b70e4d0e92d": "5a30353e3f057b3749401914778697c9",
".git/objects/fe/0a9af34c5cd39c9dd259904dc23d924cca97fa": "b847d3d9dec3bb2de5776eb1c1e0c8af",
".git/objects/c6/8e0ac90a160f007067088bef65afd059e9f470": "9261aeded67fb840ccc6fe198369397f",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/1fddefad4bd8d0c31a98162716599af7331176": "9a9d88d03ffaafc45e4e00a7393eeca5",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7d/b92845598fda437b29e22d898711c3ac0486be": "02d7a703f07afb1701d14456e552c8ac",
".git/objects/29/377faa27493340768f83b4c5f7a07d9fc2473c": "df0622dde8820fa2be7c7d7d64a9c407",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/6cbc5a4162563a275c1f67d782b90c900fe82d": "c28ea61bd8ecddc75e54533570cbeb57",
".git/objects/42/11e7092c9e895bd9f223093d022750d445d4a2": "a9dc289f5b7291db28b26bc19f9e8d22",
".git/objects/1f/40e8ba52f8663a37a713f98ec68d6a41b1af13": "425a84bf071511e0706de89a318e8349",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/8ac3a9d6896c01222bc197ecafb24ecc48f45e": "a65ab77724ecad4a8ea38ac04493654f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/e1f3e83b4aa31508118521e609408cb2dcda33": "a87d080151c08eb5dfe6bc0da3bf00bc",
".git/objects/26/bc46d0ef7ea3cebe2de66122724d7a36d6a1e3": "3946b32eaef4a3e30842de81ed0e88ad",
".git/objects/81/208978b6cc83e94867c66bf3f2783881321591": "9527376026deacb792767971791881d8",
".git/objects/44/9ac257014b96ebcd0a163bd6e175c4342ba2ed": "caf501f584fc9ad874af551f1e2ffb2a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f65fd5cd1929513ece60bf4fce6dec545f2e8b": "0eeed04ea3b6f65cf35fe1b342d3093f",
".git/objects/07/6e85e1ac306d1479bd18bf4b5eeb880a32ae80": "1af25aa5b420ce7dfa75372b2696f93e",
".git/objects/36/b0afb69c73f27233fccd028cdfd54ca5a524dd": "f2260daa1a21026e7ffd2aee2b9493e9",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/aaca9fcc08ccfd0666b128a23a3ba6066757a5": "a6dc58a9dcb4a85de6f457a17012f39f",
".git/objects/54/666da48b795856e91acfa70827f37fad9556f9": "8d3d09cb3a106ec52c3b2fb266490b06",
".git/objects/53/31ae2d60f563995daf09f7317691d88b0d85be": "66c36e6691688cdc57052a8483461408",
".git/objects/5e/9e904d8739338f0c0b186ede6251fae493fb6a": "cc17fb78db9a1de2f74d2de33450bb46",
".git/objects/37/ad9501a320ed36c28e7fe5eb1153d967b97768": "d41209d08d8534f50519865c5c399129",
".git/objects/6d/2868096eae0186282c52f55ed198874f6bf3b5": "ab0f1a11e5ddae9f9289f8ecc193d85a",
".git/objects/99/286c5cec8d569d6400fbc336c39d5ef269c63f": "0d0b17a16178bf24a40ad75f3b1e3c6f",
".git/objects/99/123802138e098f4637df567d743cc076190a52": "b25b63d36ae03ffabce1a8283021302e",
".git/objects/0f/ba2c52e4d0db144c8f6a62e0367f6e7bddd1f4": "ad64f18ea4e97efe013bd2ef34095663",
".git/objects/64/c2ab14516acd155fdbf54d532e2dea8698572c": "263be7bc5ca164b7f25787aba5149a62",
".git/objects/bf/fa3de181abf27eb01d6fb0a82e2c6fb804e4cf": "63b9319949b08ad71bc5a89c316d8256",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/0bb61ffe1573f2bc10e159382cca1cb25de30d": "1c1f0fa5e179a85563d32520722ff3a5",
".git/objects/b8/626130fb9382ca1dc5735da754632175a37cbc": "96116ae7c8b9333f8db350d823d0c976",
".git/objects/b8/7b5a54abb42a804f5590d9ccc5f6a8b23a5601": "b110422c539475b5575418a0f5a13a3f",
".git/objects/dd/f0faad68db195e2067b0878914bee82dce7147": "539e98305c41204bb07f1068d2918c93",
".git/objects/dd/217d273a3692b069086c28f7a34252968ea0d2": "3f22e0d8d8a1ad77d6f1dd2818089e14",
".git/objects/dc/0a2c048423fb7ddf6cc4c0767feca8eac8c314": "379c473f00712b78ad4f9640754e695d",
".git/objects/d5/35d16e4e8f3853f1e74540e928e58dceaa73ba": "90c5dbaa83797c4e680a4812f4e7cfdb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/cadd1e7f04092a6fd37af07e339a117dec7d23": "7aef376f0ee5f5cf7a247fd7f65cf225",
".git/objects/b0/44fd3cd05ae510e70b6a06bd229aee162fb663": "a1942b9a2b0f9c6be2c370857cc2a0f4",
".git/objects/a6/815eb1826f9ffa4d772ca694adf15d081706c6": "05a0aba0947bb5f6da7c2a0b7f93342f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/a667dbbd6230b6612f7c287e4ddb070814fa02": "62354a810ffa35d44189a853566a1435",
".git/objects/ea/9756af80a3a92a1001e9f43176fe6fe5c63574": "3a67ea629b4ec676599cc9027a416834",
".git/objects/f9/df3bf33dfa7e3e27a8726bb425de43e3d40ec6": "8d2391474644db85d8021888fc8a6b9b",
".git/objects/fa/026efb432dbdf9f90389e3e95f25ed2eca6092": "d7d0b13dd8bfe5f9afd69aad9abcc9f4",
".git/objects/83/7e5db84ba3b2d8ef5f34fa2f92c90e505e338c": "93e012428396b627a5e384ae20c4332b",
".git/objects/77/13b90a1a564168a072653990ec3f61027085ca": "bd2ba0efd62e0e576fbe09741f12e4ac",
".git/objects/70/f983ed6f34bc43ddc19cd35c6fc2e42aea36b9": "5e3608a64d859f72dc41b7b20dd68260",
".git/objects/12/46be006607eb2fed9de2a88236137dbcf04121": "3a22f56b29ee73852f59040412cac64f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/34191ba1565ed6c5824122bff79588b08f0f47": "589bb527f516322db18370e5b4caa342",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/3fba53449cbe762e4086805ff6e7eb2fedb3f5": "07b8e63f29e3a818bf256150f51a9f05",
".git/objects/82/ca7ead39ebee15d70624755258d454cfd127db": "aefb6d4d47912362ecfc0868158831d5",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/eea5ca4db8eff097cd2eac8e63985f0ccf86ec": "9a95fda51cd277b872cc022bac27dad2",
".git/objects/14/63f88e2379026502f7e4e636160b9dd48a8d3b": "d9d6c33478cc502e2727059e39b1c733",
".git/objects/22/70fa980076aa6a9240c0a75abf6e563938f053": "51e08be8c2156e7a284a0cd4b43d4bd0",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "16007936b2ce836b0b2f2abe27547ab2",
".git/logs/refs/heads/main": "1e4314ed39d7c0c21bfce19a4e856fae",
".git/logs/refs/remotes/origin/main": "5c311137e49f5825279f3b96e00aac0d",
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
".git/refs/heads/main": "c0da46dc5ac891ab347f49f9d4254533",
".git/refs/remotes/origin/main": "c0da46dc5ac891ab347f49f9d4254533",
".git/index": "2dc0de2d35e40b7354d6acab22ef3cdd",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "5672f75857082df5f487d6fe6de2286f",
"assets/AssetManifest.json": "bbcb502f841ff0b4ec8d1e3ce5889f06",
"assets/NOTICES": "e58af3f6d175fb1e7d082af1b31ec68f",
"assets/FontManifest.json": "f98955b10d19bbc72d4815131163eb9c",
"assets/AssetManifest.bin.json": "549e18ac86b7ee73fadaf17e4b9ab173",
"assets/circular_progress_indicator_square_large.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2c1a58de5451801c3db6513181f22046",
"assets/fonts/MaterialIcons-Regular.otf": "22ad689f336188abfd92b5bc2eeb5e2a",
"assets/assets/images/Phototune.png": "68dc9af80df5b5c854f48868ea06eae6",
"assets/assets/images/settings.png": "1edc6d98dbe14916c93a92bc74d84359",
"assets/assets/images/Facetune.png": "c532e978ef89f0a7d95870c773e05f73",
"assets/assets/images/apple.png": "d373331039ff27af3cc7da3cd3cc72fa",
"assets/assets/images/Udemy.png": "8c9fbe5d1891600603b3d8fd69763f3c",
"assets/assets/images/Masterclass.png": "59e44f0584af794b999c12cd5ec10f5e",
"assets/assets/images/bidon.png": "2a5d50c63077cffda40453df8ca85315",
"assets/assets/images/copy.png": "f06a9b0ada837b3a7c8c6be9facfae22",
"assets/assets/icons/auctions.png": "8f50d548668d79b9b7eaa7f298cc8ac2",
"assets/assets/icons/catalog.png": "aee51aa2e05bbab17a528ba5b15a169d",
"assets/assets/icons/subs.png": "65338b4086fe2a20372762c211dbdb57",
"assets/assets/icons/auctions_active.png": "fdf156b2eb4587f79659b17f886161bc",
"assets/assets/icons/catalog_active.png": "8e060746cc32c453f11b99eba8273da5",
"assets/assets/icons/subs_active.png": "0a48f92ade818505e26710764043d8c5",
"assets/assets/fonts/sf-ui-display-cufonfonts/sf-ui-display-medium-58646be638f96.otf": "15591c67ad9e86bb60b555286f7393f9",
"assets/assets/fonts/SFPRODISPLAYBLACKITALIC.OTF": "647ad7b734271f858d61a94283fd0502",
"assets/assets/fonts/SFPRODISPLAYREGULAR.OTF": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/fonts/SFPRODISPLAYBOLD.OTF": "644563f48ab5fe8e9082b64b2729b068",
"assets/assets/fonts/SFPRODISPLAYMEDIUM.OTF": "51fd7406327f2b1dbc8e708e6a9da9a5",
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
