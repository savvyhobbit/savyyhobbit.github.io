if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return o[e]||(s=new Promise(async s=>{if("document"in self){const o=document.createElement("script");o.src=e,document.head.appendChild(o),o.onload=s}else importScripts(e),s()})),s.then(()=>{if(!o[e])throw new Error(`Module ${e} didn’t register its module`);return o[e]})},s=(s,o)=>{Promise.all(s.map(e)).then(e=>o(1===e.length?e[0]:e))},o={require:Promise.resolve(s)};self.define=(s,a,l)=>{o[s]||(o[s]=Promise.resolve().then(()=>{let o={};const d={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return o;case"module":return d;default:return e(s)}})).then(e=>{const s=l(...e);return o.default||(o.default=s),o})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/5etools/0.bundle.js",revision:"2e7679a4aa9fccda9267b81f48ed7dbe"},{url:"/5etools/1.bundle.js",revision:"e2162cfca9765b73b0ec6ea370ad86bb"},{url:"/5etools/10.bundle.js",revision:"20dcdd169c28a23e82b8dab58f7207ab"},{url:"/5etools/11.bundle.js",revision:"87308ef8c0d71bc414232cc055d2ef02"},{url:"/5etools/12.bundle.js",revision:"4226a517186792ed914729c90c5f1cb2"},{url:"/5etools/14.bundle.js",revision:"6dc51c27985c9edb4d47569cbdb1ae59"},{url:"/5etools/15.bundle.js",revision:"c071e2d2be005e4ac0b89479fa23379c"},{url:"/5etools/16.bundle.js",revision:"6a45e71162e3b3f5c614c6c667f63985"},{url:"/5etools/17.bundle.js",revision:"a86be42390c73d70b3763f89c5deaaf4"},{url:"/5etools/18.bundle.js",revision:"a75b3b2e79a3806235f8228cccf408ff"},{url:"/5etools/19.bundle.js",revision:"d5b9d8ff7b758ce507dd216f948c32dc"},{url:"/5etools/2.bundle.js",revision:"0b40c2818662189ee89bf1a6463f3d5f"},{url:"/5etools/20.bundle.js",revision:"f56cda511a23da16f9d4c9869e55b2b5"},{url:"/5etools/21.bundle.js",revision:"09996f234ad2773891de84bf2f44ac16"},{url:"/5etools/22.bundle.js",revision:"5cc7c4c4701312bd69556e34ec3533f7"},{url:"/5etools/23.bundle.js",revision:"104716beb5bd2b20e684b228b7c0c084"},{url:"/5etools/24.bundle.js",revision:"3063cec329e90414091c56e5b1ae3a98"},{url:"/5etools/25.bundle.js",revision:"cf4db26050db0c8ebb910c7e4024c9c7"},{url:"/5etools/26.bundle.js",revision:"e1099415bee3b54c0517b92b00c3405a"},{url:"/5etools/27.bundle.js",revision:"f2fda98f65d396a08b6ae544362b7eb4"},{url:"/5etools/28.bundle.js",revision:"abb83bd71a6c1114a752c078291c89e7"},{url:"/5etools/29.bundle.js",revision:"4654364f686ea2dfc9b1632c4080e719"},{url:"/5etools/3.bundle.js",revision:"00d641807b38a93d490d67d2ed211361"},{url:"/5etools/30.bundle.js",revision:"089f7c26cebb93585177b31226b838fe"},{url:"/5etools/31.bundle.js",revision:"e0070aea3c304b91af6e23b0788b07da"},{url:"/5etools/4.bundle.js",revision:"7336c36cc1b334a1a21f486c226febed"},{url:"/5etools/5.bundle.js",revision:"87695d37ba97d9c5aaf94ef872015142"},{url:"/5etools/6.bundle.js",revision:"22628a1aa3b2340ff5e6b4963df1486d"},{url:"/5etools/7.bundle.js",revision:"7af9a8141b2a439a6f6f58b7eed77193"},{url:"/5etools/8.bundle.js",revision:"1a96da81bdc9b9eae33ad0205cd654c1"},{url:"/5etools/9.bundle.js",revision:"aafc06f843ef357d18a0842a8eba0220"},{url:"/5etools/data/backgrounds.json",revision:"820a6f456399efe960aeab43d959a4ba"},{url:"/5etools/data/basicitems.json",revision:"bdc7c1c471dd2437d8853881c5966661"},{url:"/5etools/data/choices.js",revision:"29da0cdac8c664cec6ee33da4db39331"},{url:"/5etools/data/classes/artificer.json",revision:"f120a78d2f3c6e03b13d2caa01fa3650"},{url:"/5etools/data/classes/barbarian.json",revision:"82031fa73734fe685e205892d5d414e3"},{url:"/5etools/data/classes/bard.json",revision:"41508c2c797e076ea504c93941b042fe"},{url:"/5etools/data/classes/cleric.json",revision:"d46621f402c113e8e987ac8d7691302f"},{url:"/5etools/data/classes/druid.json",revision:"fda549d7ac93453963db58624e2f4276"},{url:"/5etools/data/classes/fighter.json",revision:"b3497f5236c865012b1a81482e413ee7"},{url:"/5etools/data/classes/index.json",revision:"abb3d74bad7c604db80258f19172e2c7"},{url:"/5etools/data/classes/monk.json",revision:"63e6ceb141d28d47cf352e74600ac45b"},{url:"/5etools/data/classes/mystic.json",revision:"7f4936b0863c9076e091650478482019"},{url:"/5etools/data/classes/paladin.json",revision:"f3c1e7fc329bec0eb99a25d47acb64b3"},{url:"/5etools/data/classes/pirate.json",revision:"3d6aa1caaa4c26f52d5890ad1215b3bf"},{url:"/5etools/data/classes/ranger.json",revision:"b9adc917a6098a91a68641a0da639087"},{url:"/5etools/data/classes/rogue.json",revision:"da6616eb2a807c91df71373dd9643c77"},{url:"/5etools/data/classes/sidekick.json",revision:"b5a3e340b41b79325ab6352f47579c5d"},{url:"/5etools/data/classes/sorcerer.json",revision:"69d08048aa41707f844a2427b3e7bbcc"},{url:"/5etools/data/classes/warlock.json",revision:"7340dd1b51aa286e28894e788b82fc6b"},{url:"/5etools/data/classes/wizard.json",revision:"8a3247a9bd5ef71d3d168aebf705911c"},{url:"/5etools/data/conditions.json",revision:"6afd0c28969c88d52b909b48614ecc8e"},{url:"/5etools/data/cults.json",revision:"784409e3ea77a18f263b0e0d55cec45f"},{url:"/5etools/data/feats.json",revision:"9967a346cf5b9cd13edadab233c1bd6a"},{url:"/5etools/data/features.json",revision:"1835cbe62a4e8c8ac03ecfdaa9fdefae"},{url:"/5etools/data/items.json",revision:"cdf55534957bb92973ba01d5c1427b85"},{url:"/5etools/data/legendarygroups.json",revision:"51ce9d4c3464c99ef5a7044da9ae43ee"},{url:"/5etools/data/magicvariants.json",revision:"fce713481043f969f81d3f0633b2feef"},{url:"/5etools/data/newClasses/class-artificer.json",revision:"6af2aeae9acf5bbbf12b23c85385d4ee"},{url:"/5etools/data/newClasses/class-barbarian.json",revision:"8e0acb25fbc09df6f1b11e9f2ceeb70a"},{url:"/5etools/data/newClasses/class-bard.json",revision:"27ccd92f76c174cd3219790660f391ee"},{url:"/5etools/data/newClasses/class-cleric.json",revision:"6b233119a044a60f0430a117db122e33"},{url:"/5etools/data/newClasses/class-druid.json",revision:"3c7b8151f818b1e78e871ac32db9618d"},{url:"/5etools/data/newClasses/class-fighter.json",revision:"9350ddc9eccdf6843096a1df41f947cc"},{url:"/5etools/data/newClasses/class-generic.json",revision:"987efbc13d39a7f6a5c4b04c57b9000b"},{url:"/5etools/data/newClasses/class-monk.json",revision:"fe6905d893f235d7f5a8d71d98b9c5ff"},{url:"/5etools/data/newClasses/class-mystic.json",revision:"40c56040c0ed637ea35e158ad7c0d0fe"},{url:"/5etools/data/newClasses/class-paladin.json",revision:"4e7f29aae2627a9a83355eb1b3425b49"},{url:"/5etools/data/newClasses/class-ranger.json",revision:"09c0cdd2cc3f8620f5af9fc4f0d993bb"},{url:"/5etools/data/newClasses/class-rogue.json",revision:"479eb424a4631763466cf462b3eb3e5f"},{url:"/5etools/data/newClasses/class-rune-scribe.json",revision:"0f379831a04470ef6e919965d5f64396"},{url:"/5etools/data/newClasses/class-sidekick.json",revision:"d333adb1c80c200f981b972fa11b6c68"},{url:"/5etools/data/newClasses/class-sorcerer.json",revision:"cc168c83ebce20df7e85551e26c419e4"},{url:"/5etools/data/newClasses/class-warlock.json",revision:"a72314fcbb677cd76c06649d234a8a77"},{url:"/5etools/data/newClasses/class-wizard.json",revision:"aceaa6a71349e1ba6b9cbd209a16ce9f"},{url:"/5etools/data/newClasses/index.json",revision:"c91719a526bd68d04016343db971582c"},{url:"/5etools/data/psionics.json",revision:"d4d3983309dce6690814d09650cdb4f9"},{url:"/5etools/data/races.json",revision:"4bd6042ffeb5a20e2549329d11113615"},{url:"/5etools/data/rewards.json",revision:"e1502186046faf2c6a462a7d307f4764"},{url:"/5etools/data/rules.json",revision:"bd0eb7c4f5abeeb26fff70ba40de4715"},{url:"/5etools/data/spells/index.json",revision:"d7f673db419b3ced1fd7b52cf0dfb0e5"},{url:"/5etools/data/spells/spells-ai.json",revision:"69a593bcf522fc8cdd881efce744abda"},{url:"/5etools/data/spells/spells-aitfr-avt.json",revision:"432f41d81e4de6637ee3828b421a67b3"},{url:"/5etools/data/spells/spells-egw.json",revision:"287f148cb6db3813515e2043e167ae13"},{url:"/5etools/data/spells/spells-ftd.json",revision:"93b106fa71669c8b4bf5619d87de7878"},{url:"/5etools/data/spells/spells-ggr.json",revision:"fc871a801a3376a747d80a30012b3268"},{url:"/5etools/data/spells/spells-idrotf.json",revision:"2943dc5fce91797e7130625ce8c0478f"},{url:"/5etools/data/spells/spells-llk.json",revision:"3942d38e874e2da850d3a198d6d5ea42"},{url:"/5etools/data/spells/spells-phb.json",revision:"483d3220b104709973ad35b817ee3ba6"},{url:"/5etools/data/spells/spells-scag.json",revision:"b4e2fbcb5ecd42163db644031102d0eb"},{url:"/5etools/data/spells/spells-stream.json",revision:"325c882960a827949572d3a4de9f1f07"},{url:"/5etools/data/spells/spells-tce.json",revision:"b398ff1511dbbdf6a9ffb188d344531b"},{url:"/5etools/data/spells/spells-ua-2020por.json",revision:"71bb49305c47dc8d6d3abf17c3bc8ba0"},{url:"/5etools/data/spells/spells-ua-2020smt.json",revision:"0f6c936436d1ba9dffaad5edea73b3a8"},{url:"/5etools/data/spells/spells-ua-2021do.json",revision:"ce4901ec932b1aef75c12fa9308c6037"},{url:"/5etools/data/spells/spells-ua-ar.json",revision:"feab8c6163f3bd70289730f963f1fc13"},{url:"/5etools/data/spells/spells-ua-frw.json",revision:"d86f4da084473d859a82ca46108f874b"},{url:"/5etools/data/spells/spells-ua-mm.json",revision:"9a829a1786cf830dbc2b8c1499e34c04"},{url:"/5etools/data/spells/spells-ua-saw.json",revision:"7b2259befc037954d1421219039433b7"},{url:"/5etools/data/spells/spells-ua-ss.json",revision:"0fdfaf8371fe172910ab2e59cd10825b"},{url:"/5etools/data/spells/spells-ua-tobm.json",revision:"723f4cd5ea062b1185806fc9c4861bbd"},{url:"/5etools/data/spells/spells-xge.json",revision:"bdf418d936fb54dd2f1df6c41d4dadc7"},{url:"/5etools/data/variantrules.json",revision:"c0d0ee6cd56dead6b8a2df246873a6c1"},{url:"/5etools/favicon.ico",revision:"0410ac12516c73b5d2113ecb6d8e82fc"},{url:"/5etools/fonts/MaterialIcons-Regular.ttf",revision:"a37b0c01c0baf1888ca812cc0508f6e2"},{url:"/5etools/fonts/MaterialIcons-Regular.woff",revision:"012cf6a10129e2275d79d6adac7f3b02"},{url:"/5etools/fonts/MaterialIcons-Regular.woff2",revision:"570eb83859dc23dd0eec423a49e147fe"},{url:"/5etools/img/android-chrome-192x192.png",revision:"be4c0728c703a538fb126893b628ccd7"},{url:"/5etools/img/android-chrome-512x512.png",revision:"eeb392253dca9a14d0b6059e39eda40d"},{url:"/5etools/img/apple-touch-icon.png",revision:"857576c68505885d2855fb6513bee130"},{url:"/5etools/img/favicon-16x16.png",revision:"c580ba205c94c7b2e19edf5feb286018"},{url:"/5etools/img/favicon-32x32.png",revision:"1ce713bb2f1c6bd34f61cfb3373cffe0"},{url:"/5etools/img/favicon.ico",revision:"0410ac12516c73b5d2113ecb6d8e82fc"},{url:"/5etools/img/logo-white-192x192.png",revision:"de037ebe3d00877d460c1d93936f29ef"},{url:"/5etools/index.bundle.js",revision:"c2ad6a43c89d514274557ac590b6c9ae"},{url:"/5etools/index.html",revision:"60c5efd516af5f3d43cf1234ab64c998"},{url:"/5etools/manifest.json",revision:"327324c87dc1e6cd42339625c4bfdd39"},{url:"/5etools/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",revision:"de4bdd416c5bdb296585ee9f5f918002"}],{})}));
//# sourceMappingURL=service-worker.js.map