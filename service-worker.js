if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return o[e]||(s=new Promise(async s=>{if("document"in self){const o=document.createElement("script");o.src=e,document.head.appendChild(o),o.onload=s}else importScripts(e),s()})),s.then(()=>{if(!o[e])throw new Error(`Module ${e} didn’t register its module`);return o[e]})},s=(s,o)=>{Promise.all(s.map(e)).then(e=>o(1===e.length?e[0]:e))},o={require:Promise.resolve(s)};self.define=(s,a,l)=>{o[s]||(o[s]=Promise.resolve().then(()=>{let o={};const d={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return o;case"module":return d;default:return e(s)}})).then(e=>{const s=l(...e);return o.default||(o.default=s),o})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/5etools/0.bundle.js",revision:"0cfe0163f8cfac088339f147dda21c7d"},{url:"/5etools/1.bundle.js",revision:"37049d4986d097e9eb94fddb1dba8d74"},{url:"/5etools/10.bundle.js",revision:"8b0233138b5bae69e77cbf8e2d161dec"},{url:"/5etools/11.bundle.js",revision:"8b4dc2d434223e7f3673d23553e21337"},{url:"/5etools/12.bundle.js",revision:"54d1e8cd230651406ff32f127539ad4d"},{url:"/5etools/14.bundle.js",revision:"b3825da0f3389d1ddcbba4d1c4fbd82f"},{url:"/5etools/15.bundle.js",revision:"cecd56ee66472a90d73ce38649367e78"},{url:"/5etools/16.bundle.js",revision:"5ad3968a129f4d344e7e48f49f7b48d1"},{url:"/5etools/17.bundle.js",revision:"91653ee9069e6ee3cada80814334d08c"},{url:"/5etools/18.bundle.js",revision:"b282e0c19000310f1ddc789ae307c4a0"},{url:"/5etools/19.bundle.js",revision:"b669080f78c010faaf34ac08f191c547"},{url:"/5etools/2.bundle.js",revision:"5ae240fae8184e226ec93896d0a10519"},{url:"/5etools/20.bundle.js",revision:"9446697e55e896034b54a031ee5a0412"},{url:"/5etools/21.bundle.js",revision:"bd39ed82ac80e70b8ba472b79fe2deb2"},{url:"/5etools/22.bundle.js",revision:"6c8d955379ab5f7d1785eea53ec3a536"},{url:"/5etools/23.bundle.js",revision:"dd52f0df1a74b6ae896cccea8d09445f"},{url:"/5etools/24.bundle.js",revision:"a0a9b5a84d4deb6d4217c7f6b6be2f81"},{url:"/5etools/25.bundle.js",revision:"8a1619a03870a373e511f979ca84ed62"},{url:"/5etools/26.bundle.js",revision:"5bac244754c7a5f5559c521c8dbb30cb"},{url:"/5etools/27.bundle.js",revision:"626327990c341f221a05e8642828642b"},{url:"/5etools/28.bundle.js",revision:"bf105752feeee9c36e9a7b91b2944c4e"},{url:"/5etools/29.bundle.js",revision:"d0b0960a898d29036333d597f9b83617"},{url:"/5etools/3.bundle.js",revision:"67a72790a870c27dc720c60f65f7b29c"},{url:"/5etools/30.bundle.js",revision:"bf27ae39b5b3d0bd02743f261571ca1b"},{url:"/5etools/31.bundle.js",revision:"4b23bdca423fc970afdb43beed0d4bcd"},{url:"/5etools/4.bundle.js",revision:"e6c16eb1d86583134564434fe3a0fccc"},{url:"/5etools/5.bundle.js",revision:"cfa96a162dda4e2e825c98c477eed1b2"},{url:"/5etools/6.bundle.js",revision:"3d2f8fe922f349f2c6acdc4640fe135b"},{url:"/5etools/7.bundle.js",revision:"4a6c3a21891320bb5842a026884f2777"},{url:"/5etools/8.bundle.js",revision:"568506dc189dfa8d2d71464abd4781df"},{url:"/5etools/9.bundle.js",revision:"76538ac6a98a4be85a92172adf8bf5f9"},{url:"/5etools/data/backgrounds.json",revision:"bcba449e6d4d9fbde8bb175f14ca74fc"},{url:"/5etools/data/basicitems.json",revision:"bdc7c1c471dd2437d8853881c5966661"},{url:"/5etools/data/choices.js",revision:"36c4e69007e85f42313a2f23f31cfa7f"},{url:"/5etools/data/classes/artificer.json",revision:"f120a78d2f3c6e03b13d2caa01fa3650"},{url:"/5etools/data/classes/barbarian.json",revision:"82031fa73734fe685e205892d5d414e3"},{url:"/5etools/data/classes/bard.json",revision:"41508c2c797e076ea504c93941b042fe"},{url:"/5etools/data/classes/cleric.json",revision:"d46621f402c113e8e987ac8d7691302f"},{url:"/5etools/data/classes/druid.json",revision:"fda549d7ac93453963db58624e2f4276"},{url:"/5etools/data/classes/fighter.json",revision:"b3497f5236c865012b1a81482e413ee7"},{url:"/5etools/data/classes/index.json",revision:"abb3d74bad7c604db80258f19172e2c7"},{url:"/5etools/data/classes/monk.json",revision:"63e6ceb141d28d47cf352e74600ac45b"},{url:"/5etools/data/classes/mystic.json",revision:"7f4936b0863c9076e091650478482019"},{url:"/5etools/data/classes/paladin.json",revision:"f3c1e7fc329bec0eb99a25d47acb64b3"},{url:"/5etools/data/classes/pirate.json",revision:"3d6aa1caaa4c26f52d5890ad1215b3bf"},{url:"/5etools/data/classes/ranger.json",revision:"b9adc917a6098a91a68641a0da639087"},{url:"/5etools/data/classes/rogue.json",revision:"da6616eb2a807c91df71373dd9643c77"},{url:"/5etools/data/classes/sidekick.json",revision:"b5a3e340b41b79325ab6352f47579c5d"},{url:"/5etools/data/classes/sorcerer.json",revision:"69d08048aa41707f844a2427b3e7bbcc"},{url:"/5etools/data/classes/warlock.json",revision:"7340dd1b51aa286e28894e788b82fc6b"},{url:"/5etools/data/classes/wizard.json",revision:"8a3247a9bd5ef71d3d168aebf705911c"},{url:"/5etools/data/conditions.json",revision:"6afd0c28969c88d52b909b48614ecc8e"},{url:"/5etools/data/cults.json",revision:"784409e3ea77a18f263b0e0d55cec45f"},{url:"/5etools/data/feats.json",revision:"70b9f861a045075928981345879ae27d"},{url:"/5etools/data/features.json",revision:"6d709ffaf43336d5422e456a6cf708d4"},{url:"/5etools/data/items.json",revision:"cdf55534957bb92973ba01d5c1427b85"},{url:"/5etools/data/legendarygroups.json",revision:"51ce9d4c3464c99ef5a7044da9ae43ee"},{url:"/5etools/data/magicvariants.json",revision:"fce713481043f969f81d3f0633b2feef"},{url:"/5etools/data/newClasses/class-artificer.json",revision:"6af2aeae9acf5bbbf12b23c85385d4ee"},{url:"/5etools/data/newClasses/class-barbarian.json",revision:"8e0acb25fbc09df6f1b11e9f2ceeb70a"},{url:"/5etools/data/newClasses/class-bard.json",revision:"27ccd92f76c174cd3219790660f391ee"},{url:"/5etools/data/newClasses/class-cleric.json",revision:"6b233119a044a60f0430a117db122e33"},{url:"/5etools/data/newClasses/class-druid.json",revision:"3c7b8151f818b1e78e871ac32db9618d"},{url:"/5etools/data/newClasses/class-fighter.json",revision:"9350ddc9eccdf6843096a1df41f947cc"},{url:"/5etools/data/newClasses/class-generic.json",revision:"987efbc13d39a7f6a5c4b04c57b9000b"},{url:"/5etools/data/newClasses/class-monk.json",revision:"fe6905d893f235d7f5a8d71d98b9c5ff"},{url:"/5etools/data/newClasses/class-mystic.json",revision:"40c56040c0ed637ea35e158ad7c0d0fe"},{url:"/5etools/data/newClasses/class-paladin.json",revision:"4e7f29aae2627a9a83355eb1b3425b49"},{url:"/5etools/data/newClasses/class-pirate.json",revision:"3d6aa1caaa4c26f52d5890ad1215b3bf"},{url:"/5etools/data/newClasses/class-ranger.json",revision:"09c0cdd2cc3f8620f5af9fc4f0d993bb"},{url:"/5etools/data/newClasses/class-rogue.json",revision:"479eb424a4631763466cf462b3eb3e5f"},{url:"/5etools/data/newClasses/class-rune-scribe.json",revision:"0f379831a04470ef6e919965d5f64396"},{url:"/5etools/data/newClasses/class-sidekick.json",revision:"d333adb1c80c200f981b972fa11b6c68"},{url:"/5etools/data/newClasses/class-sorcerer.json",revision:"33d84e48ddf42b854d9aa0fb85deeb31"},{url:"/5etools/data/newClasses/class-warlock.json",revision:"a72314fcbb677cd76c06649d234a8a77"},{url:"/5etools/data/newClasses/class-wizard.json",revision:"aceaa6a71349e1ba6b9cbd209a16ce9f"},{url:"/5etools/data/newClasses/index.json",revision:"c91719a526bd68d04016343db971582c"},{url:"/5etools/data/psionics.json",revision:"d4d3983309dce6690814d09650cdb4f9"},{url:"/5etools/data/races.json",revision:"765476a33b883f77cf96835943b8fdd0"},{url:"/5etools/data/rewards.json",revision:"e1502186046faf2c6a462a7d307f4764"},{url:"/5etools/data/rules.json",revision:"bd0eb7c4f5abeeb26fff70ba40de4715"},{url:"/5etools/data/spells/index.json",revision:"d7f673db419b3ced1fd7b52cf0dfb0e5"},{url:"/5etools/data/spells/spells-ai.json",revision:"69a593bcf522fc8cdd881efce744abda"},{url:"/5etools/data/spells/spells-aitfr-avt.json",revision:"432f41d81e4de6637ee3828b421a67b3"},{url:"/5etools/data/spells/spells-egw.json",revision:"287f148cb6db3813515e2043e167ae13"},{url:"/5etools/data/spells/spells-ftd.json",revision:"7d7b06619947f586383a6ac021e461f1"},{url:"/5etools/data/spells/spells-ggr.json",revision:"fc871a801a3376a747d80a30012b3268"},{url:"/5etools/data/spells/spells-idrotf.json",revision:"2943dc5fce91797e7130625ce8c0478f"},{url:"/5etools/data/spells/spells-llk.json",revision:"3942d38e874e2da850d3a198d6d5ea42"},{url:"/5etools/data/spells/spells-phb.json",revision:"adde88674443cc374d384a5cddeef036"},{url:"/5etools/data/spells/spells-scag.json",revision:"b4e2fbcb5ecd42163db644031102d0eb"},{url:"/5etools/data/spells/spells-stream.json",revision:"d1531c58190839b8399212324e681b02"},{url:"/5etools/data/spells/spells-tce.json",revision:"0b181c3c8858d4aa6cfc54dee4689bc0"},{url:"/5etools/data/spells/spells-ua-2020por.json",revision:"71bb49305c47dc8d6d3abf17c3bc8ba0"},{url:"/5etools/data/spells/spells-ua-2020smt.json",revision:"0f6c936436d1ba9dffaad5edea73b3a8"},{url:"/5etools/data/spells/spells-ua-2021do.json",revision:"79c124c9cab0635c3b78d75d05488dbe"},{url:"/5etools/data/spells/spells-ua-ar.json",revision:"cd9ed9ce80bfe8263188b194b204e2ab"},{url:"/5etools/data/spells/spells-ua-frw.json",revision:"eed0525923e4129505f0f1d8cb0234bc"},{url:"/5etools/data/spells/spells-ua-mm.json",revision:"9a829a1786cf830dbc2b8c1499e34c04"},{url:"/5etools/data/spells/spells-ua-saw.json",revision:"7b2259befc037954d1421219039433b7"},{url:"/5etools/data/spells/spells-ua-ss.json",revision:"1a6a292d4ff9dd189a4d0a1354adf352"},{url:"/5etools/data/spells/spells-ua-tobm.json",revision:"723f4cd5ea062b1185806fc9c4861bbd"},{url:"/5etools/data/spells/spells-xge.json",revision:"266196a33bed0a8210fbe080377fa7a8"},{url:"/5etools/data/variantrules.json",revision:"c0d0ee6cd56dead6b8a2df246873a6c1"},{url:"/5etools/favicon.ico",revision:"0410ac12516c73b5d2113ecb6d8e82fc"},{url:"/5etools/fonts/MaterialIcons-Regular.ttf",revision:"a37b0c01c0baf1888ca812cc0508f6e2"},{url:"/5etools/fonts/MaterialIcons-Regular.woff",revision:"012cf6a10129e2275d79d6adac7f3b02"},{url:"/5etools/fonts/MaterialIcons-Regular.woff2",revision:"570eb83859dc23dd0eec423a49e147fe"},{url:"/5etools/img/android-chrome-192x192.png",revision:"be4c0728c703a538fb126893b628ccd7"},{url:"/5etools/img/android-chrome-512x512.png",revision:"eeb392253dca9a14d0b6059e39eda40d"},{url:"/5etools/img/apple-touch-icon.png",revision:"857576c68505885d2855fb6513bee130"},{url:"/5etools/img/favicon-16x16.png",revision:"c580ba205c94c7b2e19edf5feb286018"},{url:"/5etools/img/favicon-32x32.png",revision:"1ce713bb2f1c6bd34f61cfb3373cffe0"},{url:"/5etools/img/favicon.ico",revision:"0410ac12516c73b5d2113ecb6d8e82fc"},{url:"/5etools/img/logo-white-192x192.png",revision:"de037ebe3d00877d460c1d93936f29ef"},{url:"/5etools/index.bundle.js",revision:"ac98bedcd5b21ddb1e50aba7374b9f44"},{url:"/5etools/index.html",revision:"60c5efd516af5f3d43cf1234ab64c998"},{url:"/5etools/manifest.json",revision:"327324c87dc1e6cd42339625c4bfdd39"},{url:"/5etools/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",revision:"de4bdd416c5bdb296585ee9f5f918002"}],{})}));
//# sourceMappingURL=service-worker.js.map
