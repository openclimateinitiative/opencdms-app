if(!self.define){let s,e={};const n=(n,o)=>(n=new URL(n+".js",o).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(o,p)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let r={};const i=s=>n(s,l),c={module:{uri:l},exports:r,require:i};e[l]=Promise.all(o.map((s=>c[s]||i(s)))).then((s=>(p(...s),r)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"opencdms-app"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/opencdms-app/browserconfig.xml",revision:"a65aeab3c87bb868e33032c49b186280"},{url:"/opencdms-app/css/286.d6928342.css",revision:null},{url:"/opencdms-app/css/497.aa88d1ca.css",revision:null},{url:"/opencdms-app/css/580.cd1098c3.css",revision:null},{url:"/opencdms-app/css/648.6e740325.css",revision:null},{url:"/opencdms-app/css/815.3366e464.css",revision:null},{url:"/opencdms-app/css/882.b08372a7.css",revision:null},{url:"/opencdms-app/css/984.bd020b55.css",revision:null},{url:"/opencdms-app/css/app.4f034e44.css",revision:null},{url:"/opencdms-app/css/chunk-vendors.5e07d878.css",revision:null},{url:"/opencdms-app/data/hosts.psv",revision:"f5530c8e47b1b3936bbd5398e186f783"},{url:"/opencdms-app/fonts/MaterialIcons-Regular.14b0bb77.woff",revision:null},{url:"/opencdms-app/fonts/MaterialIcons-Regular.a973ee76.eot",revision:null},{url:"/opencdms-app/fonts/MaterialIcons-Regular.d1b99623.woff2",revision:null},{url:"/opencdms-app/fonts/MaterialIcons-Regular.fa58bcb9.ttf",revision:null},{url:"/opencdms-app/fonts/materialdesignicons-webfont.27a0fd11.woff2",revision:null},{url:"/opencdms-app/fonts/materialdesignicons-webfont.2f788fed.woff",revision:null},{url:"/opencdms-app/fonts/materialdesignicons-webfont.325befe2.ttf",revision:null},{url:"/opencdms-app/fonts/materialdesignicons-webfont.7df0a622.eot",revision:null},{url:"/opencdms-app/forms/host.yaml",revision:"74100cd947b463438aa8c0c98ba2fa8d"},{url:"/opencdms-app/index.html",revision:"e5364946229ad2e4440f3616e2cc36df"},{url:"/opencdms-app/js/230.87d8424b.js",revision:null},{url:"/opencdms-app/js/286.2e71b653.js",revision:null},{url:"/opencdms-app/js/497.20e1d195.js",revision:null},{url:"/opencdms-app/js/580.c56a98a8.js",revision:null},{url:"/opencdms-app/js/648.e55248f3.js",revision:null},{url:"/opencdms-app/js/736.968daca9.js",revision:null},{url:"/opencdms-app/js/737.ff8fa92b.js",revision:null},{url:"/opencdms-app/js/81.d32e4a23.js",revision:null},{url:"/opencdms-app/js/815.d01343b9.js",revision:null},{url:"/opencdms-app/js/882.f1724263.js",revision:null},{url:"/opencdms-app/js/934.ec26638f.js",revision:null},{url:"/opencdms-app/js/976.cb1465c7.js",revision:null},{url:"/opencdms-app/js/984.7c03cdfc.js",revision:null},{url:"/opencdms-app/js/app.e51d8c3e.js",revision:null},{url:"/opencdms-app/js/chunk-vendors.96e7c12a.js",revision:null},{url:"/opencdms-app/js/dashboard.5097d860.js",revision:null},{url:"/opencdms-app/layers-2x.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"/opencdms-app/layers.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"/opencdms-app/manifest.json",revision:"e2182979d6df8cf96b70b404a19ac876"},{url:"/opencdms-app/marker-icon-2x.png",revision:"401d815dc206b8dc1b17cd0e37695975"},{url:"/opencdms-app/marker-icon.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/opencdms-app/marker-shadow.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"/opencdms-app/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map