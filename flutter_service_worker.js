'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "90e2a3bd404f9b2cb50c5e0f19914292",
"version.json": "7b2e532e0d484fd206383b6d7a1b956c",
"index.html": "1f64b5ef5f9da2662c13e0a5c0d12e4d",
"/": "1f64b5ef5f9da2662c13e0a5c0d12e4d",
"CNAME": "aaaa608edc01f0c1efd77a6e986758a0",
"main.dart.js": "bfa6b2e82c9d1f3174e06116f3dbe12d",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "fed0d20b138f5a23714ea2c4d510836f",
"icons/Icon-192.png": "30e77ce24bc33f356aa73abc162ca22b",
"icons/Icon-maskable-192.png": "30e77ce24bc33f356aa73abc162ca22b",
"icons/Icon-maskable-512.png": "fa96ad2d6066b88a579c405b719ef2c3",
"icons/Icon-512.png": "fa96ad2d6066b88a579c405b719ef2c3",
"manifest.json": "7699f2eb53ec5bf2d6cb916c33303f2a",
".git/ORIG_HEAD": "01a8419d9b3f7ffc2238b0aa70de3511",
".git/config": "67686a56973776cd2e1ddd6e749f0e3b",
".git/objects/61/2d29462b1e81f6fbe7229986e3c1bea2f4ab17": "76ef75b2594efe3c90cd87588502a4cd",
".git/objects/61/d6e93062db4f332c535c6a96caadb28b93b6d0": "271e2330fb87dc80f0ba86801797f034",
".git/objects/95/30ef6d25ef31c0f98c9c9a03b21a578d053f1c": "fc2f5aa8bdf735f8aaf9eca0b1bb198b",
".git/objects/95/04000028236409eec61c1fed72508d83fb11c4": "694af2b08448fd7295746418a8254e67",
".git/objects/95/eaf8bd57fd3465b03baf9f06db0a139f7d13b6": "cfdf95ce276c011c9938a4d18ba9979b",
".git/objects/59/6d2bb74613a7e446bc80c377d496ebd4e398ad": "57332699b747e7bc6d6ed8a23615ae4c",
".git/objects/92/4a50eb856b98cb98c6ca5e401c734868b69315": "d6c254e1c2c619f8b6b85a853fb9dfd1",
".git/objects/92/97afde90dbd01c08a4b226f7cbce09e63d5448": "112f19436811b713166464b5ec85d88f",
".git/objects/0c/1e9fc821a0de69a654fbb324aece12705eadeb": "0483b3ddf4964614e2b56988e393b161",
".git/objects/57/099b101352ac10f44cd0dd38971682804138a5": "cc6f9516ffcb246866ce9e3fa3994e18",
".git/objects/3b/fe85f8c357ce0d6a10b2674b3a711d44b046f6": "43bb2074d6006479036e9eea3899f1df",
".git/objects/6f/f61f4faf7b1f45fb598a4d55f9efc8a1185b63": "59d3eea0ea817adb75f76eaffda70734",
".git/objects/03/bef91d126fde692da7eaed26e518d7da67c5ae": "384fc159a59a9de96e094529b4003f4c",
".git/objects/03/b44660c541b328efc12113e0092704baa200e0": "2310bcaa07ea71f40ac611ee65382de2",
".git/objects/03/d040fe12d1ae883954740b577d029d71593f46": "158844b27f4c0643acf3f0f25ce91e14",
".git/objects/04/145d1d6446fe9d005e7b76f29750ca0ea32a4a": "7e2acb7832d508e5afd5175749b00555",
".git/objects/32/91961ccc73d56b4183103d3259713f6d12aa9b": "3040e25053050398bcf21ff2ceb31db1",
".git/objects/32/42f4ca6439f735169d626967c3e2357bb8fcc0": "aaf032944f652bd4f0f64d70449a5e10",
".git/objects/32/1c7ccf4b0d0b8da23750a3dfaf9f073462c3f5": "37151636c30a6aeac0a9b081956a5204",
".git/objects/32/a5b87267c8518fb9e97216fe1f3d8bf915f27e": "63ce9e40272c176581af60672d0c21d3",
".git/objects/35/85b6c919b8e56dede7bd8e45060afc7d8c50ff": "3e506f697a334ad7b691ed606dfff3b2",
".git/objects/69/01c70d3511a6eeec081bada0dcbe342af4f9fc": "04b7aa93981fd627d16143346dd615e5",
".git/objects/56/90b2429f429db2b6671f9649c6f9048a9f94b0": "dafefa965d6e2ef401cb30ae42c7049e",
".git/objects/51/9249e7af4665ee87158018427d3353cace5fe4": "a413dd7f88f90045d876404bdcfb16fa",
".git/objects/51/8d824d3ed0f697c37b377752f2a4803dc138f5": "ab387ef5547d87c4e5444e7bd96db8fd",
".git/objects/3d/e50d1b046ee2032b76665e7f2728639ebb5a4b": "3ee5d6c491b83b4262fd64eadb066c8e",
".git/objects/58/38e03b5a8138ee61a11f163a7172a3cff3c589": "229aeace8690017c373b2ea73d05a585",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/cde7be3d88196672abeba40b14cffe479de2aa": "6996099ad25f7c5a1d1aa222d87bba6e",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/c133a270b9c7b0f879c24a497dfcca6d01aecf": "ec42ed4f3e2324c31de73e38fe5d99be",
".git/objects/93/998f8407e72cf9a4ea3d8c9095f255112ed98a": "d64252ac9c91159769457d6a5a98d5f8",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/77f97c5bfeb216c836f9afae16012d1a6698d7": "0ac786050fb75fa10769218192e00c8d",
".git/objects/0e/141cc13ae1b5e217defb054503fd9def5c103d": "292f0bf88feaed716b9b57cd6837378e",
".git/objects/60/b820fdb5fc1fd91800dff53bda5231a12a84f7": "51cd0cce3c45cb4068bc2c7b21839a6b",
".git/objects/5f/daac76a5722a8a80f5b476934ec54fd485b7ef": "9dc4495ffacda2cd246688511ad5e854",
".git/objects/5f/ac08e9159822573febb6be23b586b95d12ea51": "8cd6c1f7135aded73089ffb565677d76",
".git/objects/33/467cc1c786358d39d1bde5268e12ef9fca306a": "2715647805e52c608fc7c848de938c7a",
".git/objects/33/9bcf632ec966397a25f879e64884d8a13ba622": "e58763c5d8b77e860541627e12ad2121",
".git/objects/05/c9db5f7f2277abcb8c63f5f86d25023244fdcb": "0bc5f8ed43ffd9646f056007dfb3b742",
".git/objects/05/3a7b95426a8c36666ce6d24145ac0d7b3d0196": "7eb1f6971268430efdc047238029506f",
".git/objects/05/fa790b0b06e0ddefb2bf4e67702fdd7e651295": "56f04d9e262169b667cabb853a007592",
".git/objects/9d/2decba602e9a550cac9232e9e8c1f0d72cc070": "4e2f1fd033af2c913cd94b7cdfff0768",
".git/objects/9d/9b384cb0bb2cf53791486851dde19a38245a4b": "99d035f0e63d8512313745b888428c7c",
".git/objects/02/5b25c27aae647e146418e2f8bc12260015382f": "8cd3550d8a2fb38cfcd67d7ea265f0c3",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/02/62b572ae46ca5ca651d21cabfef736651ecb9f": "d716e17543a4f710c8e6ba30edd4e1fb",
".git/objects/a4/efe9340f0a8c171dab4038d97a8537fcfb964f": "ed03bd426f4f2442b9379826db207ea2",
".git/objects/a3/5d815451a63384eae62a7d5124a2339bb4c0bf": "0c30b472735054a6a74dc95433860597",
".git/objects/a3/dd1995d300260c3ab2cec5b1ccf9b4438c5b5a": "45d1e23d8e15d1065af79a53153a3981",
".git/objects/b5/819647e1dfa7dae61b29e582f3464a90c537e1": "8cf97fdcb068ac8aba9f1c430dd0e931",
".git/objects/b2/f7daca100957c47773fb6655226f57162811c7": "39b0fddd2bf0090977581234fe83fa95",
".git/objects/d9/05d82ace06699fc414e471c96dd00c2eb9e3e5": "60645e2680ba4cf69a2d2d418a50f0d1",
".git/objects/ad/b223a0e0036ad6224480aa953b32ef3b09252d": "ff7a021cb8405be8aeefd904679d950f",
".git/objects/ad/93cdce933504206ca91c885237f30e7a853b88": "60a7f892fda7c7e102d1d7d061155828",
".git/objects/d7/907ec283f51d1a24bbf012f9b52bd14b6e9348": "6c3938d47c6795834510ecee06385d2a",
".git/objects/d7/b9ef12edd96f5b28abe2cb39e6877b1dc19966": "5da731e8deef6cd15f7e240710c54dc7",
".git/objects/d0/2d950db79df1695307fa7949e7960dc8610b4a": "c502b7004c58b20157c9f7c6855036ed",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/cc0011304f2d1420d389bf082f85202d81d498": "e0f3c41c3e3c0c4b56e4a24936b2afa7",
".git/objects/df/4f0b0ecc5704c82675af77aa19fa883a2d1163": "be251803467b7ab0f60a4fd5c6ceea68",
".git/objects/df/ad54d892e382143374d9048426a97884098cd2": "34dd1b39bd2c76df118b3a45217047dc",
".git/objects/da/1d31fca12ab8624069f4ab35cc7ee96e13251d": "bfd9f7d63d3e1ec42e2fa08fcb63daa0",
".git/objects/da/d963ebf22eb665a2f18a2b85ac350264534b24": "552c9fdc8c4d4eda6eaafdead773899d",
".git/objects/da/d24719377fa5e4a94e659d2ea4ea10ce918108": "103899f9db8ddd7fe64e7ad3a533756e",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/504d598efebd5a4a364bc258b58b1785cf3b3f": "5acf586a7ac307474acf229a049e1b82",
".git/objects/a5/5947f5c09638d876e6f412316f9aa576eb83d0": "ab0bb88b12acc7c479abaa5f553b8fb8",
".git/objects/a5/c8f01ed5c451206dc7aa6fd5ce8e38ef0f52ff": "9da946f2993f15cc59cedd9a937f2f0d",
".git/objects/bd/949a211199336558311fba8bfbdc663d266bfb": "07f574579e7c222bcac3cd8ac4b39ee2",
".git/objects/d1/2dfad1076e37d5b22eac45b78f7215fd63afe0": "ed1a0bcc620d7328a32c7c4a584bb4b2",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/c72fe9266b60127553a18ef828e1364cf7749b": "8c85ac736d0d57a74bfec2dbc4117575",
".git/objects/d8/0cca4bc5d681014ff02b84d9602bbe9519b702": "491b16de28c13db9fa6fedce0ecff9fd",
".git/objects/ab/7e6e67a8998412f91453e9d7ccc0ac6bd28578": "94f805b5b1aa519c53d28e749268a1c9",
".git/objects/e5/e1c50cf83fbc95be3487f7ab5dc4c5663fec4a": "6621ead2c83644c233539ffdf3a522a0",
".git/objects/e2/83ebfba6cd7eaf7d436d87e86663fa504c1342": "479e009f67fe6bb8d42c2da2aab5cb38",
".git/objects/e2/162332365c6e9a6e8b1ec18b03115d5f182372": "2b583c0a4937015ffc8f9bf5fc832199",
".git/objects/f3/c2ce61c9005c5509d1f3e993b3599f3311fda9": "faf8175e67a621c4abdd75cd2ff9c4c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ed4d5fb6e723c7359c0e412daf50caee990470": "fe8fddd17861b61c4bf47bb730e35238",
".git/objects/eb/37bb52e95393155c754bed2856d04cf94fbea0": "0c2255b2bec24e64bc11aac39cb91d9b",
".git/objects/c7/212e894f1c32552c38ccbc05259d7e437728bf": "1d98911408a3c5e12231046adf86a6ce",
".git/objects/c0/4f4e603c22192b312ccaa213e9e127b045acec": "ce13fd50cca91baf7963d90b829fbf50",
".git/objects/ee/215e0334e90b4b1b215638427da4d6dee5c11b": "8feeb57698df9e9079c6aa92de8fd360",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/130ec75d01d3b12eabdf9f57b76505e4052ebb": "fca40477a08cc9eabe432ce0c6d80d8b",
".git/objects/fc/8b710f18ef00a59c5a2dd6b803be6b4a54cca2": "314c3c73c623e9d256d02412afa12bde",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/bbbbbc8c03a98c5d2465a6f0181eedca6fdef6": "416d6f2ff56d56eb0cc9d08fd8042e9c",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/2081d261d85c8d202701caefaa58c6c1d85151": "4049bd32167dec01a4ae9c877b600e87",
".git/objects/e4/712a73cd9a6f5d487454d7169d6b70e4d0e92d": "5a30353e3f057b3749401914778697c9",
".git/objects/fe/0a9af34c5cd39c9dd259904dc23d924cca97fa": "b847d3d9dec3bb2de5776eb1c1e0c8af",
".git/objects/fe/450ce02e7c1edea4be6a867dd00ab2e09fc768": "0782ff46bbccb5fc538f7cfa2aa194d9",
".git/objects/fe/097539eca4f0fb5a390a5335fa18a4b6f46e44": "6e44a9756ff0cef29dcc527cb3dd0042",
".git/objects/fb/00839c6004afdb9b8af1aea5ebce09a8d56284": "6d9a24a8336222362710d7163cdcca22",
".git/objects/fb/a2b8916af9ac7693e42124a0ee15d9c3d87eea": "c053d098b32c54768f82590c98b85b50",
".git/objects/c6/8e0ac90a160f007067088bef65afd059e9f470": "9261aeded67fb840ccc6fe198369397f",
".git/objects/ec/c1358b1b7eeef1eb8ec55cd9c758035ffa5f21": "c6fae58e8e51488773a1aae10b0e4067",
".git/objects/4e/a2adb689f274cee1307187c755af7e0702c288": "fc35b357dbc30c99c0103610bd04a920",
".git/objects/4e/c502b3b1badcd924abb9ed6a6ae080971e27ff": "eceaa0d6e9e8c2b87c1257f94071128c",
".git/objects/4e/425b0c1ed37cf326dc52be60497a8e232526a1": "e813d88539ce0137783d19674a37c874",
".git/objects/4e/4eead3ee401d76d09b1553145811e454f01761": "06297ef929e72d2cbf26f01e68446270",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/66854408165f6f5fdb094134ae8650d90b1b80": "0f56587d0e66283f05ef0d45dbf00506",
".git/objects/18/05cd69a2d1d9eb48a6f966ce40235ce8102cf1": "0e9e9931d96e23bd9bf69eeed2059397",
".git/objects/18/1fddefad4bd8d0c31a98162716599af7331176": "9a9d88d03ffaafc45e4e00a7393eeca5",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7d/b92845598fda437b29e22d898711c3ac0486be": "02d7a703f07afb1701d14456e552c8ac",
".git/objects/7d/dbf98d9e79055e86c6ca9aacc9a3841a295c43": "75486242519ac314cf917a2bb4751bb4",
".git/objects/29/377faa27493340768f83b4c5f7a07d9fc2473c": "df0622dde8820fa2be7c7d7d64a9c407",
".git/objects/29/31fea19effbfe47e2f975bcbd622fda534af56": "483a5c3c416d8aeea2532a01ffd0b4fb",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/6cbc5a4162563a275c1f67d782b90c900fe82d": "c28ea61bd8ecddc75e54533570cbeb57",
".git/objects/42/11e7092c9e895bd9f223093d022750d445d4a2": "a9dc289f5b7291db28b26bc19f9e8d22",
".git/objects/45/1328ed96f75151020a81c0ed401688ee932a24": "3e9a9b9916f73dd327a7823bcda4e40a",
".git/objects/45/3aad93a5a27b4c2644ab23707874211b4ab8d3": "a7b5916e81cc8d74f220fb260cd6c451",
".git/objects/1f/40e8ba52f8663a37a713f98ec68d6a41b1af13": "425a84bf071511e0706de89a318e8349",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/83ee4df31ee28dddbbdaf1134dfcb7ea3351b1": "10a812f52130892e9c379eff95b09304",
".git/objects/73/87b3b01bf767c072b71b08d97eea2ae57fc64f": "aac8aa75bd09e30391a4003ae9a6663a",
".git/objects/80/dfe7c75a5661a84db2068b1ff094c87a9be673": "e32e33adcea53fdaa6d810e3d4811a3b",
".git/objects/74/c3cd225279847bcf1768ad650bb6d99f921215": "0e48f4fe2dd2a11161612b4ec6b9cafc",
".git/objects/74/be06e7e1e82fe4832553e9d5a0b0ef0f9bac0f": "303a1d30a8f7f2055e3811c5e232ed05",
".git/objects/17/fb987daca16724fd752e1a5f767f10c9e6d60a": "e3898cba704d103a914cefaa07d3e115",
".git/objects/8a/8ac3a9d6896c01222bc197ecafb24ecc48f45e": "a65ab77724ecad4a8ea38ac04493654f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/e1f3e83b4aa31508118521e609408cb2dcda33": "a87d080151c08eb5dfe6bc0da3bf00bc",
".git/objects/19/ccb7aeca54392aeac453b96359427a4065f6ae": "684557a68aec825fd7eb2909afe1e8ea",
".git/objects/19/10394034389e76a5f5ff73df3bd62889495417": "09be2032345631ccb64c985ad566be92",
".git/objects/4c/84080a2dce6391cdb720277eac297f84ae015e": "9a07b440e7419959646b224b9aa9835e",
".git/objects/26/aa5adb00a7736ffab2863e0dc78d693b030927": "343270fda8b5a649fe3363f29ca07de3",
".git/objects/26/bc46d0ef7ea3cebe2de66122724d7a36d6a1e3": "3946b32eaef4a3e30842de81ed0e88ad",
".git/objects/26/b667edfa5382022e9f3762f205d816f0a73dbb": "ef845cef78e205e68f2cf6d7c7419b2d",
".git/objects/21/dd2dab008a3e71a1428a27b33bfce637ce7e19": "7d9fac5b5d1fec9a4fb2e0ea2c4c09a9",
".git/objects/21/585cbd08772193738453f6818d16e316a0457d": "a5f5545bf1c9620bee8bdbba1e93385a",
".git/objects/81/ca3dcc9264054eda54892f2105a4d9f85eaf50": "cba4b9fb7fdb002b24369ec37880ce0a",
".git/objects/81/208978b6cc83e94867c66bf3f2783881321591": "9527376026deacb792767971791881d8",
".git/objects/44/9ac257014b96ebcd0a163bd6e175c4342ba2ed": "caf501f584fc9ad874af551f1e2ffb2a",
".git/objects/44/f6707c5722239bfac142bd0b2a23993094cfa7": "703129d5cd83a1f35257a03faeef7baf",
".git/objects/2a/385e88726e0d653dd950cddceacbc5f374d0ae": "e4241baca26661dc618e7c72e0c6c929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f44b4d793db2a2027997e98b7d3326775e8229": "c4b825515f4cbe5cc45f49420253c834",
".git/objects/9f/dd11497e451422d9de44f51a45cebaa91c7689": "b527bb63103df4888855c6e11feb4aa4",
".git/objects/9f/f65fd5cd1929513ece60bf4fce6dec545f2e8b": "0eeed04ea3b6f65cf35fe1b342d3093f",
".git/objects/07/6e85e1ac306d1479bd18bf4b5eeb880a32ae80": "1af25aa5b420ce7dfa75372b2696f93e",
".git/objects/00/b7a524dcd804da5591457b299f6496570dc6da": "ba39717669c5596e7aef6c21215b88cc",
".git/objects/00/1fcec720353130e088d730cf97996200bf764e": "26d5a37ab64dad326f7e916cec81d3d0",
".git/objects/6e/e2324a6e98c494e48d8a97be752e0be39fd409": "967fda18a6bc22c0a8febafe99d6d8a3",
".git/objects/6e/7cae1acd04d882070ea75f3e101e2b0697d00b": "d37d6424c9b82179c95ff387b6a16f93",
".git/objects/36/b0afb69c73f27233fccd028cdfd54ca5a524dd": "f2260daa1a21026e7ffd2aee2b9493e9",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/aaca9fcc08ccfd0666b128a23a3ba6066757a5": "a6dc58a9dcb4a85de6f457a17012f39f",
".git/objects/31/ee9ce9b9b1f55eecee6af672754bb06602db4d": "bac943fcae3707b6fa8c90c99a622ce7",
".git/objects/91/0d89e353c44c4230183f72a7cf356dd41e251e": "c69d818c2c11fa5ff5b70dcf98e0b9bb",
".git/objects/91/80b504bffc6df9868bff1a0d7f7fc427c3c33e": "f46303613982d35dfd5199effeb522fc",
".git/objects/3a/2798eb60956266dcc5d036e2f1e6b18740c47a": "0ee8a1086ab3b46481fb47974fcdf0ab",
".git/objects/54/1921d2b11ae4637eb6aecbb255126a7b8fb9a8": "09422d122d314f4e3af15b7001124fe7",
".git/objects/54/666da48b795856e91acfa70827f37fad9556f9": "8d3d09cb3a106ec52c3b2fb266490b06",
".git/objects/54/007c9ba579c34c0c04b493e0e9969622f712e5": "9cd02513e78479907d4e690b10bddfad",
".git/objects/53/17e738608aa1e1143166206c0734903ecf19b7": "5d47b2fd1c765a49d5faa0f70b199bc3",
".git/objects/53/31ae2d60f563995daf09f7317691d88b0d85be": "66c36e6691688cdc57052a8483461408",
".git/objects/3f/b9e5d81c6828d314c7b62e7321c685eea59795": "6aa88c99a795be958eb03a4304ecb239",
".git/objects/30/be9ab7ad9d11e778bd2a3130caf11e793352e2": "92e17185193a7e57c3f9cdf76553283d",
".git/objects/5e/9e904d8739338f0c0b186ede6251fae493fb6a": "cc17fb78db9a1de2f74d2de33450bb46",
".git/objects/5b/520491c9c19b0b98bb40b0bf3d4bf1d44d6319": "56f3cb016bb0832348470a0f4f8de0ca",
".git/objects/5b/d37abea9aba4dd355a55a5a1e2587aea043419": "96fe2e7aa439da14a9362206bf1a373b",
".git/objects/5b/6f684143bb0713de509dc71f2baf72a7f383ce": "eff927430da98829bd5ded706cc4803f",
".git/objects/37/ad9501a320ed36c28e7fe5eb1153d967b97768": "d41209d08d8534f50519865c5c399129",
".git/objects/6d/2868096eae0186282c52f55ed198874f6bf3b5": "ab0f1a11e5ddae9f9289f8ecc193d85a",
".git/objects/01/8a8b35bb5e7a53dfd56757bf624ea19de488dd": "56dfef56cc788113f6361c3ca6b38fad",
".git/objects/01/3b33b18eed1fc50814024930cbec2be1b5145f": "1366457aa2bb79b1126703a7ffb2f9b7",
".git/objects/06/102f719cbc4ac3bac64ae7c0a39cadef5e4766": "c9e44ddebda72f2406956d6877d7f256",
".git/objects/39/5bc7e1e921ee55057fd59d47c6e39456efd505": "3f03301ef45f4ba7cc92e0ee62494660",
".git/objects/99/36e11c886e86c43dd4755b5c476d8bd9f93a34": "bc248d79c39a879d970455b829417408",
".git/objects/99/286c5cec8d569d6400fbc336c39d5ef269c63f": "0d0b17a16178bf24a40ad75f3b1e3c6f",
".git/objects/99/123802138e098f4637df567d743cc076190a52": "b25b63d36ae03ffabce1a8283021302e",
".git/objects/52/f57a97f4561a6380bec04b9a125ac54c8fcf8c": "84240b68adf28e6845c5a6f9070e1d0a",
".git/objects/55/651beba063f5d009676e1c594e40b2f41b181f": "65a80db2f83454c66ad243db01cc26e1",
".git/objects/97/86c8f3627c4f2984828d14e621e08b4f7fb7fe": "37cbf5625fcf8501351afea320b410f2",
".git/objects/97/292986c026608381616dcb33c3ec7d8509953c": "0d4ae6b1d754ff93a48a644a467eca83",
".git/objects/0f/ba2c52e4d0db144c8f6a62e0367f6e7bddd1f4": "ad64f18ea4e97efe013bd2ef34095663",
".git/objects/0a/25ba04546e0901cd5d1399c248ffde36bb4425": "91388de87cb680fe5a44769f12e6f88f",
".git/objects/64/a7df7f51421efc97f72b12c8e1349b62372a90": "61ecc493bc9858f0fc661253f11da78b",
".git/objects/64/0efef74ee5cc609337114bec709d6a897d777d": "3809f69d01c1135e2998a67c18806d7e",
".git/objects/64/c2ab14516acd155fdbf54d532e2dea8698572c": "263be7bc5ca164b7f25787aba5149a62",
".git/objects/90/7bd828c0701ed8675fe268bc704f9e77d63125": "226f45974b43cc0ba4b6fa56ea42e499",
".git/objects/bf/fa3de181abf27eb01d6fb0a82e2c6fb804e4cf": "63b9319949b08ad71bc5a89c316d8256",
".git/objects/d3/9f068f28af91e4c218687376a3c7a90e749cad": "99bcec07a90190302716917c166d69a7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4f681dcfb1754dfe435947ae3c4e4cc9f9127b": "cd51da980c1fa3908df71e8bf61fa6c0",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/4a0955cc97607a57d4016c16075feb8dd00d87": "f28f4d1871f8421ec4e163d0c3ff2cd1",
".git/objects/b8/0bb61ffe1573f2bc10e159382cca1cb25de30d": "1c1f0fa5e179a85563d32520722ff3a5",
".git/objects/b8/27f5b5d014612c3a202d869b3e9c8940dd3a7c": "d59331dcb7d10210330dc48f51bc456c",
".git/objects/b8/6f19d406ac3c67cb1436e1b2d2f69e122d4ea2": "489a80f999745122978ec6b9f92208ae",
".git/objects/b8/626130fb9382ca1dc5735da754632175a37cbc": "96116ae7c8b9333f8db350d823d0c976",
".git/objects/b8/7b5a54abb42a804f5590d9ccc5f6a8b23a5601": "b110422c539475b5575418a0f5a13a3f",
".git/objects/dd/f0faad68db195e2067b0878914bee82dce7147": "539e98305c41204bb07f1068d2918c93",
".git/objects/dd/217d273a3692b069086c28f7a34252968ea0d2": "3f22e0d8d8a1ad77d6f1dd2818089e14",
".git/objects/dc/0a2c048423fb7ddf6cc4c0767feca8eac8c314": "379c473f00712b78ad4f9640754e695d",
".git/objects/a9/09215d3df54e27df1c95e00faa5250c6566555": "e0ae6dadb195d9079c8140031484f56d",
".git/objects/d5/35d16e4e8f3853f1e74540e928e58dceaa73ba": "90c5dbaa83797c4e680a4812f4e7cfdb",
".git/objects/aa/6d51c3dab0d4fd591cc15913262cdce75669a6": "a6e8a9ea224a7237ca6e1cb70e7ebdd5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/8ff690e1b9f98d6930c3f202b0260a75c4a99a": "93161dfac9a757a1ac42e42bfa8a1b11",
".git/objects/db/30be9dbe57f78a2f233ac50932c3be6047bb92": "8e5344f8396c7f05c0903bc6bb971d2c",
".git/objects/db/1825f14f25be7a6eb2e15a2faa0bab987b0e84": "2da8fcadac9bf32b2d90c4a1da4aecf4",
".git/objects/db/cadd1e7f04092a6fd37af07e339a117dec7d23": "7aef376f0ee5f5cf7a247fd7f65cf225",
".git/objects/b0/44fd3cd05ae510e70b6a06bd229aee162fb663": "a1942b9a2b0f9c6be2c370857cc2a0f4",
".git/objects/a6/815eb1826f9ffa4d772ca694adf15d081706c6": "05a0aba0947bb5f6da7c2a0b7f93342f",
".git/objects/a6/f5b7a53c08b16d527b93c2a35811e82456b8b8": "d2844fb0290e186bf65e21e2688eb7e2",
".git/objects/a6/7fe177fad00329ac90f237ba8f4b92fa5aad12": "2b03b942d6046d5c47d027edf64657fe",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b81d2fede212b66836545effbfc8ab40a703f0": "f235bcf660455c996039845245c686df",
".git/objects/b9/6d74be1ab5387205324a00a61bddef83087005": "b769211d0acf554b1527a3990120a9b4",
".git/objects/a1/854840fc53eef773745eebe253b6aa2bb7064f": "2305f07840c9e6bc3e09b65435f8101e",
".git/objects/c3/38f37ae6d6136c73bf9ffbdbb083cd9a86490d": "7b3df3a85cf75980fb5f4414cc5d1c02",
".git/objects/c3/96c057cbfcd44ea77291942662cacb8f6e3ac5": "2f11ef08906123477422e9626f041db9",
".git/objects/c4/d19e13bc5377886820ad227017ffd58b47260e": "a5f7bd8583d1993cd0fbb7c2d9935d54",
".git/objects/ea/a667dbbd6230b6612f7c287e4ddb070814fa02": "62354a810ffa35d44189a853566a1435",
".git/objects/ea/9756af80a3a92a1001e9f43176fe6fe5c63574": "3a67ea629b4ec676599cc9027a416834",
".git/objects/e1/174d8a8a472be24878220b57cd42177a8a490b": "a5354fc90a214f8fc9a277decfb4a183",
".git/objects/cc/1e3f12043a8d90968729debdb351e1f8a7043f": "cd0d544c05c43f07b35e31ae3b7db05e",
".git/objects/e6/0ac46ee68466733db5a0153dda3b3e62017629": "3ddd8eb406093ce2e3cf45da78e05330",
".git/objects/f9/df3bf33dfa7e3e27a8726bb425de43e3d40ec6": "8d2391474644db85d8021888fc8a6b9b",
".git/objects/f0/2676400013af51fe041dbbfde5aa5e4474ea53": "a4dc636445d6b4fc41f4ed54dc0ea533",
".git/objects/f7/10b4e62e50e2d6c51f3ae4fccac4c66e96bf8b": "19841b9c7eef6e9861e0fd06fa9890f0",
".git/objects/f7/b9cb82018c47f0b521251c96f46338eb142b73": "3a472b8f89081abe63e032579bc3bc68",
".git/objects/fa/4b05150021102798ab9487e5360cc77100e981": "93669b810200fa2b0881d406ae4148e4",
".git/objects/fa/81a85422bbd4288ef900d49e4b06984befbd77": "2b0d5847a53040dfb795a2e8effe6ef2",
".git/objects/fa/026efb432dbdf9f90389e3e95f25ed2eca6092": "d7d0b13dd8bfe5f9afd69aad9abcc9f4",
".git/objects/ff/133f4fa3597a422d5f2d3c41a444aae5775d4c": "0ca9db80608b8ff571a79884fc979162",
".git/objects/c5/00e9dec5e6f048c5f6217d24a71903072cc0f7": "80ec01608ba72e15469ec7043f6ce024",
".git/objects/c2/297c2afc382ba5ba08970cffd9e1fe1298a73d": "c4d50a593d9f5c1f1afe0ecfa1608443",
".git/objects/e9/c4ef7f372414d52f0633d52f0f3e811fc3bbf6": "8b778791275b4a0804e60e1a26958eb7",
".git/objects/e9/0694d45380b5dc57bb41d093b847eed870f0d1": "157c65917e1c4c0dad6b918d3944bfe1",
".git/objects/f8/3f78afed5ab8258ae3313413b6768627738808": "6969a21b544f2e682bf9a9b720bdc8f4",
".git/objects/ce/54fad386af029925c4a9909cd239aa2c8d3323": "ea3f2bdb9e81fd53c49654de7fbd2b6a",
".git/objects/2c/e39c2da92d24f79b05d0031b81bad23138d6da": "1fe2f7263af4144b0805402ac4a0e603",
".git/objects/2c/278f8490f6b10615610c718e7e23a281975621": "f85982900832bcd3fa94ac674a4a61e5",
".git/objects/79/9eaa53788e939d65d349ef007ffef0b2f5f983": "6bf61d3e146a574529b81411dd5b8eaf",
".git/objects/2d/c3209fd1a0f0b8bd228d59c22e92cdccc5e6a2": "33976fc3436a8ffae1dfc7793293eee8",
".git/objects/41/7ee0d2d968b6102eb4986e4274e6f571264357": "ee95b45f08bc25664c0ec75ebff91233",
".git/objects/83/7e5db84ba3b2d8ef5f34fa2f92c90e505e338c": "93e012428396b627a5e384ae20c4332b",
".git/objects/1b/d51ff881dc84efc39e79f7229577906750d125": "c1f9c83ba4cde2eac4d24cde00b9bece",
".git/objects/77/13b90a1a564168a072653990ec3f61027085ca": "bd2ba0efd62e0e576fbe09741f12e4ac",
".git/objects/77/392c956fb473e9b5470215b41d8c5ee95f8ce9": "a855be94007c09d2d059aa058572f44a",
".git/objects/77/93bf6d041b8e5e6f1a1bf6c7b66fb5277fbb27": "6f41c439c94ef963b034ed154617bbfe",
".git/objects/48/fbdea65bbe3f02639ab83154dbd121bdfc30b4": "9d14fb32912514fcbcbaf7096b36c93f",
".git/objects/48/6e231deca80eb96564a2f27fe2205b2ff32141": "a6645787f366462b27a72e4376d67ee8",
".git/objects/48/daaaeb7f6c9585422c78c10c26ca7088fd4f40": "52f942a8f777e34091ff1682e9d25d63",
".git/objects/70/f983ed6f34bc43ddc19cd35c6fc2e42aea36b9": "5e3608a64d859f72dc41b7b20dd68260",
".git/objects/1e/391d2a8cce2cd79f802bb908b6d169294ba695": "50dc1513a91f73720285092f9be35639",
".git/objects/4a/61fa945e28b125f13d04f6b7b793c953d34213": "1ab2dcafa4281b4e48d733fbca57ce4b",
".git/objects/23/eec43cb4a44332463d899629e337b03e04cc88": "6f0286aaa36a0452ac98f1a86822f112",
".git/objects/15/6eb4f2282b51d817ba6c906eaa30426705ccb1": "572b32c82c48906632644d54faeeb3f8",
".git/objects/12/46be006607eb2fed9de2a88236137dbcf04121": "3a22f56b29ee73852f59040412cac64f",
".git/objects/12/9248d0333f99165e618f955fc3cb683e05fc30": "f4b9139aad1d4b4ccee8d73c7ce0e2c0",
".git/objects/12/2e57678aaf6c8ad65780a156f11aa6833e8a45": "3d7a3758091f0690095557c128796402",
".git/objects/8c/ed0e9f2a49f61cb2d8f4e9a1b8c91735163f6c": "f73256e3acedfcb89ae9e4e67ed1a52c",
".git/objects/85/0cc0d0d4c50061643fbb80465008e9a717188c": "4fbfa587f64c6115f2125700d916cafe",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/f2afbfb643a5f0c9a029910d30eb7219f5ff84": "4b0271759a1daecc1f3179a39866ca57",
".git/objects/71/34191ba1565ed6c5824122bff79588b08f0f47": "589bb527f516322db18370e5b4caa342",
".git/objects/71/ec27539a74cef15530de701ea5a5b07038c3fb": "38b5a80dec053ee394d25a2ff7ac9fcd",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/3fba53449cbe762e4086805ff6e7eb2fedb3f5": "07b8e63f29e3a818bf256150f51a9f05",
".git/objects/82/ca7ead39ebee15d70624755258d454cfd127db": "aefb6d4d47912362ecfc0868158831d5",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/f0da61caf990ec314f7da23bb8ff33c9a9ddf0": "72327d65de35a8a1447cee1c71cdcfa2",
".git/objects/2e/eea5ca4db8eff097cd2eac8e63985f0ccf86ec": "9a95fda51cd277b872cc022bac27dad2",
".git/objects/8b/416ff96c0c3b75d0c8f19f53f8c6d943098949": "fd649f2b58053f685b0d87051bff622c",
".git/objects/8b/aabebe36c509a30b165ad3a09790718bcb35e0": "b284f141349a530c244b9899fbf5b0b4",
".git/objects/7f/280ad9811b24ff794efaea7802a4727f8f43c3": "75b18d56dcece0f30d3566cc5714df8b",
".git/objects/7f/6dfb3ff7512f1d415337d8746cfc6374c79057": "168f6bfacda30b4293edc5535bbd71ae",
".git/objects/7f/28c36e9659683de6bb7b555a2a2595b03460c2": "2735797d8f0862f3dc2715af5abf08b5",
".git/objects/14/63f88e2379026502f7e4e636160b9dd48a8d3b": "d9d6c33478cc502e2727059e39b1c733",
".git/objects/14/1186f8357619273a496313c982eaf9f90a214c": "16ca8e89c81d73dd2b8b557933139ddc",
".git/objects/22/70fa980076aa6a9240c0a75abf6e563938f053": "51e08be8c2156e7a284a0cd4b43d4bd0",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "6cab0b27b548891c5f5ef1df12d04ae7",
".git/logs/refs/heads/main": "2a9150453c4755f3b8f0c537d3222546",
".git/logs/refs/remotes/origin/main": "de92b206c34992c57c554d7b50cae149",
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
".git/refs/heads/main": "f1a724b3aed5a59ef3068f7b8e00df22",
".git/refs/remotes/origin/main": "f1a724b3aed5a59ef3068f7b8e00df22",
".git/index": "fe72e10126cbec7a3346e87b1660d55c",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "d3afc6924e55b7a0e836a54589924f82",
"assets/AssetManifest.json": "596ecf611f2d233cce6141b0b3c30598",
"assets/NOTICES": "2f264e2b2abc1e8c3308f6510e7b29ab",
"assets/FontManifest.json": "efd7d5379901cc73f8de8ab8b2686b46",
"assets/AssetManifest.bin.json": "ef248f2ed71e9cdc8909dcdfced1a494",
"assets/circular_progress_indicator_square_large.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "346d9b51537e428214e6cc64b3125a65",
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
"assets/assets/icons/subs.png": "65338b4086fe2a20372762c211dbdb57",
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
