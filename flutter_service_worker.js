'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "9af65d79075b33fbc2cab20d45a3f3a7",
"/": "fbd642a4feda15b69d8abed7243d0dbc",
"main.dart.js": "890d5d2df3439692a3ecf04bd1db26ab",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bb183222f53e99673b8b1efb03083ed5",
"prathamshady.github.io/index.html": "fbd642a4feda15b69d8abed7243d0dbc",
"prathamshady.github.io/main.dart.js": "b6dd07c617d7c5690da5c38ca52d9c53",
"prathamshady.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"prathamshady.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"prathamshady.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"prathamshady.github.io/manifest.json": "bb183222f53e99673b8b1efb03083ed5",
"prathamshady.github.io/.git/config": "f4d4e288fc8925a01800931e2c66d09e",
"prathamshady.github.io/.git/objects/9b/5df4c63228cf260daec569b4d02605210bf013": "107a4fcf73e96b06240b2fbe147fbecd",
"prathamshady.github.io/.git/objects/9b/5b28634937422dcdf7d71a65882d5738bb3bd1": "4975e378d20541f6099cb22cc38f3a26",
"prathamshady.github.io/.git/objects/35/e444506c31219ba02644d9dffdd49c36264c78": "bf8b088e676e9065a76b0deda3a49335",
"prathamshady.github.io/.git/objects/a3/d0fb7e3a43041a04b7336a32f7989224908629": "b5a498349ef12737755a049d314cea92",
"prathamshady.github.io/.git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
"prathamshady.github.io/.git/objects/b2/6b807e40fdca3e49c6e72303860d92a132a2d2": "77c6c2e04852613e1ee44356014944cd",
"prathamshady.github.io/.git/objects/ac/2fe298a18e05b664eddc09aac33819a92edb1c": "375f766db71ab9aa6847fc59bd0fde07",
"prathamshady.github.io/.git/objects/ac/f67831689ffabbb8795f62ecaa1545816c0168": "5a9dd0ad6e99fabca4ce94b607daed6e",
"prathamshady.github.io/.git/objects/be/373d1639c921f0db4ad93b1ab98d07577d7403": "1a669713c072322c3b8e7bf8a2687119",
"prathamshady.github.io/.git/objects/da/fc3ea19847d3d449480f58e1dc583d76e2a76a": "1d70ecd3fb71ea1a932589b273ff0c61",
"prathamshady.github.io/.git/objects/b4/959136e1a23412e58bbcfe256e4be51caf69c3": "e775eaad5399a76d130e9f7aa5ed01df",
"prathamshady.github.io/.git/objects/a5/4839c810ce2740eeaf2da20d8f7cfb92968dd1": "cf53f97f2cbd74e8634d79ff90fcc958",
"prathamshady.github.io/.git/objects/d6/c5aab26a7db6b5d3f728923d1c38e2045cc69e": "b31b4e8bb587bc873ea53ca597796f69",
"prathamshady.github.io/.git/objects/d6/6fb0a99b96d3414b2951a6bc088e39042695c1": "044456128389f6e1d7dab8e858e7a806",
"prathamshady.github.io/.git/objects/e2/e26a0fc825cf6ff2d51595af429a2427d95f81": "0a86d0349415a076f284179fb60779e3",
"prathamshady.github.io/.git/objects/fc/a2eeba3ac0399efeb9926eb6366140e933b18b": "af56815b570b4821b657f59e3fb61d58",
"prathamshady.github.io/.git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
"prathamshady.github.io/.git/objects/ca/81625129883b0c2d8065a188b63070100ed51a": "93b9ddd610cbd0a954f3f624fc9c4a0d",
"prathamshady.github.io/.git/objects/e4/db2c5750adaf174ea2fb52bdd6fce158993679": "e3328dde5477a35acba232d575016440",
"prathamshady.github.io/.git/objects/e4/9ff3a34fff410c02b95eac177be5f12c21f0b1": "162852f8d5b73b3fe1a1e0abbb146f82",
"prathamshady.github.io/.git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
"prathamshady.github.io/.git/objects/fb/992dcc59d359fb26dc96cc0a2b27fd7c475ba7": "56ed0422f576c0113c0db33938c56bb2",
"prathamshady.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"prathamshady.github.io/.git/objects/45/edce7ac2486cbab7116d7ad4ceacbeb715ab12": "770c3d69264eefb45101f96f41411e7a",
"prathamshady.github.io/.git/objects/1f/24afcf1691b40bf8b050a9a635d51eac4e55bb": "414fd42b945833db1d66583f2f915bd4",
"prathamshady.github.io/.git/objects/8a/bcf15912a589ac2172edb4135f4c58369d8132": "6f21cb1e1da55b5cefc671dcc8fb39d2",
"prathamshady.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"prathamshady.github.io/.git/objects/19/1df2ce6efe4f515382e56eb11530b85ef74c2b": "0f079ecab7905acf3489451d85e7d21c",
"prathamshady.github.io/.git/objects/26/259756ad326d2116ec05494d69a878a2132f05": "f5cefc4af9b7a3a55bb732d9d5421afb",
"prathamshady.github.io/.git/objects/21/ecf2cffe7e2e4e498045cfee57ee852199f0b5": "9b31ad6aa6c509d9514119fb74946769",
"prathamshady.github.io/.git/objects/86/8684b9b806d83eeff9e18c80087124a2c24b65": "8921cc02268ca29785dadd3f04c891eb",
"prathamshady.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"prathamshady.github.io/.git/objects/6b/f4095eceab67316938cbd4d85c28ef58340a4e": "a47622f1173941defe9906c1194eeeb1",
"prathamshady.github.io/.git/objects/07/6173d4261568e16cac5283ee28e89d8612a4ec": "63cbc7b4163af3750d0607bd86ef8c6b",
"prathamshady.github.io/.git/objects/07/bdd7b0bcb60cb1a041d7235ee553eb85883d8e": "05016fe17c2d395a0a3b1c0746278b76",
"prathamshady.github.io/.git/objects/07/2f15522c498bc38f872e12447dcac485540895": "eee60b39018be847ee5f86bf227c18bf",
"prathamshady.github.io/.git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
"prathamshady.github.io/.git/objects/31/1babe42ad04266d68e69eae7c1b3dd967d09eb": "116494a22158b1835aee1d551c8288a1",
"prathamshady.github.io/.git/objects/53/2b0dc7575ed06cc19720597073a9838c57a02c": "523e3faad04fce8a8458dc4c7fd2a444",
"prathamshady.github.io/.git/objects/30/fcc1fd6259f92a7b2024024b7df5669bb07c2c": "5168eea2deffeaa090de6e6b40ed52e9",
"prathamshady.github.io/.git/objects/01/8b6f831e5a74082faccf1a4652bbbbed9cf051": "c98a13cfd7085fd2da76546bbf825ebf",
"prathamshady.github.io/.git/objects/6c/e1ba2e84b326febf9e8bc492bbf92e2dba5b5f": "9adb1faf0eea6e5048ab7da8626635f7",
"prathamshady.github.io/.git/objects/dd/07cc0321d63314c31bd9d293ca481f691cc45d": "a53bf8115e64a75123672145ab81d3b2",
"prathamshady.github.io/.git/objects/dd/ca1777fd236c58b2ca521938915c728576ff5c": "6481db8f9487eeb9a16071692d20816e",
"prathamshady.github.io/.git/objects/b6/fdf8466dc377a422547c2b543999fb63641a91": "a6217572057b23cfa90bed63c9d0131a",
"prathamshady.github.io/.git/objects/d2/37dc1e68143c19dd3539aa92ed7a15800e17f7": "1adfac25eb9c8512b3c0be4fb2471c01",
"prathamshady.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"prathamshady.github.io/.git/objects/db/35da2cc9143e93887b70316814a82b183fd985": "28928fd8e1e1ed905a96f42cfd17cd91",
"prathamshady.github.io/.git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
"prathamshady.github.io/.git/objects/a1/2659c91cd72cb627b1b355c5574c516372cd5d": "489b23a02b4a1dc6b96d40af99ff4ff1",
"prathamshady.github.io/.git/objects/ef/8bac02139b3149704509744d9b919ac3271826": "0e2293c21ee519b2cd369eda62f3fec3",
"prathamshady.github.io/.git/objects/c3/0a4b64eafd846817c563ce956f8eebd4874ffc": "b9bead4014a42aaf8b445a31d6b71848",
"prathamshady.github.io/.git/objects/cd/f759cea151f23099c28a3173d6f26c57c7e8e1": "9dd1fab79d3b8bb28474ce29e5a6fcf6",
"prathamshady.github.io/.git/objects/cc/3ba3b1a906c70ea73af560db3f165dabcdac12": "86b1a252167720b02c12982d998e9111",
"prathamshady.github.io/.git/objects/fa/45fc46bfae516cd0005f30b31abf4f47ed515f": "a6009e0ce7debd4d7503add392e84bc4",
"prathamshady.github.io/.git/objects/ff/a8dbde09a94ff5c8106a49823d58aeb5151c99": "ad8f5cf0dc1913d1b0c82cad62b883f5",
"prathamshady.github.io/.git/objects/1b/6f382f58da65362a9d60e82ca36ab7432df44d": "3648c07bebd746d40fc202c9124f1ef5",
"prathamshady.github.io/.git/objects/48/7c32d95dc8b45b30f9bd92912b625a1dc9ea64": "4d315bc64679466dc713c03132d0f5a9",
"prathamshady.github.io/.git/objects/71/d76ddc8c96dd2f8b57b756a64e0c431b3fd7fe": "3ebfc46c515e7dc032f519b4d1e638e7",
"prathamshady.github.io/.git/objects/2e/9550336ce2166f0ce66a9a81f23f89d36dbd94": "82aef2352ca8e767638eeb5654bc70d8",
"prathamshady.github.io/.git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
"prathamshady.github.io/.git/objects/22/1d4808889331bff442c29b9ed33b41ab1adb1d": "4374cc80e1f7a1d4db09401ecc975849",
"prathamshady.github.io/.git/objects/25/22be0e0c8f6a4ee360584d71e0f0d17d8f7114": "d7d58a4d01b297f87ffe462d27734aa3",
"prathamshady.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"prathamshady.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"prathamshady.github.io/.git/logs/HEAD": "f5b6213887f83b09f63a218bb0b24952",
"prathamshady.github.io/.git/logs/refs/heads/master": "f5b6213887f83b09f63a218bb0b24952",
"prathamshady.github.io/.git/logs/refs/remotes/origin/HEAD": "e53d0ea8d5a9051834455b680bbe04cd",
"prathamshady.github.io/.git/logs/refs/remotes/origin/master": "434de563f43311632fbc89ac92554652",
"prathamshady.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"prathamshady.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"prathamshady.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"prathamshady.github.io/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"prathamshady.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"prathamshady.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"prathamshady.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"prathamshady.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"prathamshady.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"prathamshady.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"prathamshady.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"prathamshady.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"prathamshady.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"prathamshady.github.io/.git/refs/heads/master": "1b6c1a9faa6bbdbbe7a7e29aba938793",
"prathamshady.github.io/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"prathamshady.github.io/.git/refs/remotes/origin/master": "1b6c1a9faa6bbdbbe7a7e29aba938793",
"prathamshady.github.io/.git/index": "fc3eb78878db7b4d259fc42e96061ff9",
"prathamshady.github.io/.git/packed-refs": "6913132bded929ed8310a9bdb03e8768",
"prathamshady.github.io/.git/COMMIT_EDITMSG": "36d89c56df9b8d1254b2c657f0655418",
"prathamshady.github.io/assets/AssetManifest.json": "216b292fd96a148d2ee238d07ccabb16",
"prathamshady.github.io/assets/NOTICES": "d71b26df2c4fd877b4f97c398ae8e349",
"prathamshady.github.io/assets/FontManifest.json": "6996c0d4160aff6f73f121e8c5bbfbd6",
"prathamshady.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"prathamshady.github.io/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"prathamshady.github.io/assets/assets/images/pratham_main.jpg": "9c5373f98909694d049942fb00a9c32d",
"prathamshady.github.io/assets/assets/images/pratham_main_desktop.png": "398ce1546b7ca1d790052d9f828c7000",
"prathamshady.github.io/assets/assets/images/pratham_main_tablet.png": "1461e8fab15c75b9c0df49e3767434b2",
"prathamshady.github.io/assets/assets/images/post0.jpg": "3662406cd9dd844699650d6dce95cfce",
"prathamshady.github.io/assets/assets/images/pratham_img.jpeg": "e26cdde8a020735c427a58f8ddb43527",
"prathamshady.github.io/assets/assets/fonts/ProximaNova.otf": "410504d49238e955ba7dc23a7f963021",
"prathamshady.github.io/assets/assets/fonts/FuturaBookFont.ttf": "f9f02ed05aa86534c3842d44cb20d6c4",
".git/config": "b81d71f22e9bc9e292af086307d36e19",
".git/objects/9b/5df4c63228cf260daec569b4d02605210bf013": "107a4fcf73e96b06240b2fbe147fbecd",
".git/objects/a3/d0fb7e3a43041a04b7336a32f7989224908629": "b5a498349ef12737755a049d314cea92",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/be/373d1639c921f0db4ad93b1ab98d07577d7403": "1a669713c072322c3b8e7bf8a2687119",
".git/objects/b4/959136e1a23412e58bbcfe256e4be51caf69c3": "e775eaad5399a76d130e9f7aa5ed01df",
".git/objects/a5/4839c810ce2740eeaf2da20d8f7cfb92968dd1": "cf53f97f2cbd74e8634d79ff90fcc958",
".git/objects/d6/c5aab26a7db6b5d3f728923d1c38e2045cc69e": "b31b4e8bb587bc873ea53ca597796f69",
".git/objects/d6/6fb0a99b96d3414b2951a6bc088e39042695c1": "044456128389f6e1d7dab8e858e7a806",
".git/objects/ca/81625129883b0c2d8065a188b63070100ed51a": "93b9ddd610cbd0a954f3f624fc9c4a0d",
".git/objects/fb/992dcc59d359fb26dc96cc0a2b27fd7c475ba7": "56ed0422f576c0113c0db33938c56bb2",
".git/objects/4e/b9ad1f744405ab3dd777c2918170e783a7ae96": "98f9240824256a658871e92f4d906788",
".git/objects/8a/bcf15912a589ac2172edb4135f4c58369d8132": "6f21cb1e1da55b5cefc671dcc8fb39d2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/259756ad326d2116ec05494d69a878a2132f05": "f5cefc4af9b7a3a55bb732d9d5421afb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/f4095eceab67316938cbd4d85c28ef58340a4e": "a47622f1173941defe9906c1194eeeb1",
".git/objects/01/8b6f831e5a74082faccf1a4652bbbbed9cf051": "c98a13cfd7085fd2da76546bbf825ebf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/cc/f7f6dac0e67efc92e5acd31c918c04d6b982f4": "865fe6458f8490e8110e1d53de3ca023",
".git/objects/cc/3ba3b1a906c70ea73af560db3f165dabcdac12": "86b1a252167720b02c12982d998e9111",
".git/objects/ff/a8dbde09a94ff5c8106a49823d58aeb5151c99": "ad8f5cf0dc1913d1b0c82cad62b883f5",
".git/objects/1b/6f382f58da65362a9d60e82ca36ab7432df44d": "3648c07bebd746d40fc202c9124f1ef5",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "9f4110c6b8c38e086b8f1eb41f0ea112",
"assets/AssetManifest.json": "216b292fd96a148d2ee238d07ccabb16",
"assets/NOTICES": "a1976855b4dbea69698b6eb694622da6",
"assets/FontManifest.json": "6996c0d4160aff6f73f121e8c5bbfbd6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/pratham_main.jpg": "9c5373f98909694d049942fb00a9c32d",
"assets/assets/images/pratham_main_desktop.png": "398ce1546b7ca1d790052d9f828c7000",
"assets/assets/images/pratham_main_tablet.png": "1461e8fab15c75b9c0df49e3767434b2",
"assets/assets/images/post0.jpg": "3662406cd9dd844699650d6dce95cfce",
"assets/assets/images/pratham_img.jpeg": "e26cdde8a020735c427a58f8ddb43527",
"assets/assets/fonts/ProximaNova.otf": "410504d49238e955ba7dc23a7f963021",
"assets/assets/fonts/FuturaBookFont.ttf": "f9f02ed05aa86534c3842d44cb20d6c4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
