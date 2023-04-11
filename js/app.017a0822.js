(function(){var e={8409:function(e,t,n){"use strict";n(7658);var o=n(3742),a=[{component:"VListItem",name:"dashboard",to:"/dashboard",routeName:"dashboard",icon:"mdi-view-dashboard"}],i=e=>(e.map((e=>{1==e.display&&(delete e["display"],a.push(e))})),a);e.exports=i(o)},882:function(e,t,n){"use strict";n(9773);var o=n(9242),a=n(3396);function i(e,t){const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(n)}var r=n(89);const s={},p=(0,r.Z)(s,[["render",i]]);var m=p,c=n(2483);function d(e,t,n,o,i,r){const s=(0,a.up)("AppSidebar"),p=(0,a.up)("AppHeader"),m=(0,a.up)("router-view"),c=(0,a.up)("v-container"),d=(0,a.up)("v-main"),u=(0,a.up)("AppFooter"),l=(0,a.up)("v-app");return(0,a.wg)(),(0,a.j4)(l,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{app:""}),(0,a.Wm)(p,{app:""}),(0,a.Wm)(d,{app:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{fluid:"",class:"justify-center align-center text-h5",style:{height:"calc(100vh - 110px)",overflow:"auto",padding:"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(m)])),_:1})])),_:1}),(0,a.Wm)(u,{app:""})])),_:1})}var u=n(7718),l=n(3140),f=n(1539);function v(e,t,n,o,i,r){const s=(0,a.up)("OpenCDMSLogo"),p=(0,a.up)("v-list-item"),m=(0,a.up)("v-list-group"),c=(0,a.up)("v-divider"),d=(0,a.up)("v-list"),u=(0,a.up)("v-navigation-drawer");return(0,a.wg)(),(0,a.j4)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s),(0,a.Wm)(d,{lines:!1,density:"compact",nav:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{router:"",to:{name:"dashboard"},"prepend-icon":"mdi-home",title:"dashboard"}),(0,a.Wm)(m,{value:"Stations"},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(p,(0,a.dG)(e,{"prepend-icon":"mdi-map-marker",title:"Stations"}),null,16)])),default:(0,a.w5)((()=>[(0,a.Wm)(p,{router:"",to:{name:"station-map"},"prepend-icon":"mdi-map",title:"station-map"}),(0,a.Wm)(p,{router:"",to:{name:"station-list"},"prepend-icon":"mdi-table",title:"station-list"})])),_:1}),(0,a.Wm)(c),(0,a.Wm)(m,{value:"Sensors"},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(p,(0,a.dG)(e,{"prepend-icon":"mdi-thermometer",title:"Sensors"}),null,16)])),default:(0,a.w5)((()=>[(0,a.Wm)(p,{router:"",to:{name:"sensor-list"},"prepend-icon":"mdi-table",title:"sensor-list"}),(0,a.Wm)(p,{router:"",to:{name:"sensor"},"prepend-icon":"mdi-form-select",title:"sensor"})])),_:1}),(0,a.Wm)(c),(0,a.Wm)(m,{value:"Deployments"},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(p,(0,a.dG)(e,{"prepend-icon":"mdi-cog-clockwise",title:"Deployments"}),null,16)])),default:(0,a.w5)((()=>[(0,a.Wm)(p,{router:"",to:{name:"deployment-list"},"prepend-icon":"mdi-table",title:"deployment-list"}),(0,a.Wm)(p,{router:"",to:{name:"deployment"},"prepend-icon":"mdi-form-select",title:"deployment"})])),_:1}),(0,a.Wm)(c),(0,a.Wm)(m,{value:"Features"},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(p,(0,a.dG)(e,{"prepend-icon":"mdi-map-marker-circle",title:"Features"}),null,16)])),default:(0,a.w5)((()=>[(0,a.Wm)(p,{router:"",to:{name:"feature-map"},"prepend-icon":"mdi-map",title:"feature-map"}),(0,a.Wm)(p,{router:"",to:{name:"feature-list"},"prepend-icon":"mdi-table",title:"feature-list"}),(0,a.Wm)(p,{router:"",to:{name:"feature"},"prepend-icon":"mdi-form-select",title:"feature"})])),_:1}),(0,a.Wm)(c),(0,a.Wm)(m,{value:"Data"},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(p,(0,a.dG)(e,{"prepend-icon":"mdi-table",title:"Data"}),null,16)])),default:(0,a.w5)((()=>[(0,a.Wm)(p,{router:"",to:{name:"data-ingest"},"prepend-icon":"mdi-spirit-level",title:"data-ingest"}),(0,a.Wm)(p,{router:"",to:{name:"data-extract"},"prepend-icon":"mdi-spirit-level",title:"data-extract"}),(0,a.Wm)(p,{router:"",to:{name:"data-inventory"},"prepend-icon":"mdi-spirit-level",title:"data-inventory"}),(0,a.Wm)(p,{router:"",to:{name:"data-map"},"prepend-icon":"mdi-spirit-level",title:"data-map"}),(0,a.Wm)(p,{router:"",to:{name:"data-station"},"prepend-icon":"mdi-spirit-level",title:"data-station"}),(0,a.Wm)(p,{router:"",to:{name:"data-parameter"},"prepend-icon":"mdi-spirit-level",title:"data-parameter"})])),_:1}),(0,a.Wm)(c),(0,a.Wm)(m,{value:"Forms"},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(p,(0,a.dG)(e,{"prepend-icon":"mdi-spirit-level",title:"Forms"}),null,16)])),default:(0,a.w5)((()=>[(0,a.Wm)(p,{router:"",to:{name:"observation-form"},"prepend-icon":"mdi-spirit-level",title:"observation-form"})])),_:1}),(0,a.Wm)(c),(0,a.Wm)(m,{value:"Products"},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(p,(0,a.dG)(e,{"prepend-icon":"mdi-spirit-level",title:"Products"}),null,16)])),default:(0,a.w5)((()=>[(0,a.Wm)(p,{router:"",to:{name:"product-climate-normal"},"prepend-icon":"mdi-spirit-level",title:"product-climate-normal"}),(0,a.Wm)(p,{router:"",to:{name:"product-climat"},"prepend-icon":"mdi-spirit-level",title:"product-climat"}),(0,a.Wm)(p,{router:"",to:{name:"product-daycli"},"prepend-icon":"mdi-spirit-level",title:"product-daycli"})])),_:1}),(0,a.Wm)(c),(0,a.Wm)(m,{value:"Quality control"},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(p,(0,a.dG)(e,{"prepend-icon":"mdi-spirit-level",title:"Quality control"}),null,16)])),default:(0,a.w5)((()=>[(0,a.Wm)(p,{router:"",to:{name:"quality-control"},"prepend-icon":"mdi-spirit-level",title:"quality-control"})])),_:1}),(0,a.Wm)(c),(0,a.Wm)(m,{value:"Settings"},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(p,(0,a.dG)(e,{"prepend-icon":"mdi-spirit-level",title:"Settings"}),null,16)])),default:(0,a.w5)((()=>[(0,a.Wm)(p,{router:"",to:{name:"settings-user"},"prepend-icon":"mdi-spirit-level",title:"settings-user"})])),_:1}),(0,a.Wm)(c),(0,a.Wm)(m,{value:"WIS2"},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(p,(0,a.dG)(e,{"prepend-icon":"mdi-spirit-level",title:"WIS2"}),null,16)])),default:(0,a.w5)((()=>[(0,a.Wm)(p,{router:"",to:{name:"wis2-publication"},"prepend-icon":"mdi-spirit-level",title:"wis2-publication"}),(0,a.Wm)(p,{router:"",to:{name:"wis2-subscription"},"prepend-icon":"mdi-spirit-level",title:"wis2-subscription"})])),_:1}),(0,a.Wm)(c)])),_:1})])),_:1})}var b=n(9657),h=n(8694),y=n(6052),g=n(917),w=n(8777),W=n(4075),k=n(6623);const V=e=>((0,a.dD)("data-v-2ef6fc1c"),e=e(),(0,a.Cn)(),e),L={class:"logo"},N=V((()=>(0,a._)("img",{src:"/img/icons/opencdms-144.png",alt:"Logo"},null,-1))),_=[N];function I(e,t){return(0,a.wg)(),(0,a.iD)("div",L,_)}const P={},S=(0,r.Z)(P,[["render",I],["__scopeId","data-v-2ef6fc1c"]]);var O=S,C={name:"AppSidebar",data(){return{drawer:!0,rail:!0}},components:{VNavigationDrawer:b.V,VImg:h.f,VList:y.i,VListGroup:g.NU,VListItem:w.l,VDivider:W.J,OpenCDMSLogo:O},setup(){(0,k.oR)();return{}}};const A=(0,r.Z)(C,[["render",v]]);var j=A;function D(e,t,n,i,r,s){const p=(0,a.up)("v-app-bar-nav-icon"),m=(0,a.up)("v-app-bar-title"),c=(0,a.up)("v-app-bar");return(0,a.wg)(),(0,a.j4)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{onClick:t[0]||(t[0]=(0,o.iM)((t=>e.drawer=!e.drawer),["stop"]))}),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Uk)("OpenCDMS Demo")])),_:1})])),_:1})}var x=n(588),F=n(9156),E=n(1556),M={name:"AppHeader",components:{VAppBar:x.L,VAppBarNavIcon:F.g,VAppBarTitle:E.o}};const G=(0,r.Z)(M,[["render",D]]);var T=G,B=n(7139);const q=(0,a._)("a",{href:"#",target:"_blank"},"OpenCDMS",-1),U={class:"ms-1"},Z=(0,a._)("div",{class:"ms-auto"},[(0,a._)("span",{class:"me-1",target:"_blank"},"Powered by"),(0,a._)("a",{href:"#"},"OpenCDMS")],-1);function H(e,t,n,o,i,r){const s=(0,a.up)("v-footer");return(0,a.wg)(),(0,a.j4)(s,null,{default:(0,a.w5)((()=>[(0,a._)("div",null,[q,(0,a._)("span",U,"© "+(0,B.zw)((new Date).getFullYear())+" OpenCDMS.",1)]),Z])),_:1})}var J=n(1666),K={name:"AppFooter",components:{VFooter:J.c}};const Q=(0,r.Z)(K,[["render",H]]);var R=Q,z={components:{VApp:u.q,VMain:l.O,VContainer:f.K,AppHeader:T,AppSidebar:j,AppFooter:R}};const Y=(0,r.Z)(z,[["render",d]]);var $=Y,X=n(8409),ee=n.n(X),te=e=>{let t=[];return e.map((e=>{if("VListItem"===e.component){if(void 0!==e.to){const a=()=>n(2513)(`./${e.routeName}.vue`);var o={path:e.to,name:e.routeName,component:a,props:e.props};t=[...t,o]}}else if("VListGroup"===e.component){let n=te(e.items);t=[...t,...n]}})),t};const ne=[{path:"/",name:"Home",component:$,redirect:"/dashboard",children:[{path:"/dashboard",name:"dashboard",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,6246))},{path:"/station",name:"station",children:[{path:"map",name:"station-map",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,8546))},{path:"list",name:"station-list",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,7115))}]},{path:"/station/:id",name:"station-viewer",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,9368)),children:[{path:"edit",name:"station-editor",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,9368))},{path:"history",name:"station-history",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,7115))}]},{path:"/sensor",name:"sensor",children:[{path:"list",name:"sensor-list",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,3486))}]},{path:"/sensor/:id",name:"sensor-viewer",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,2799)),children:[{path:"edit",name:"sensor-editor",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,2799))},{path:"history",name:"sensor-history",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,3486))}]},{path:"/deployment",name:"deployment",children:[{path:"list",name:"deployment-list",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,938))}]},{path:"/deployment/:id",name:"deployment-viewer",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,8778)),children:[{path:"edit",name:"deployment-editor",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,8778))},{path:"history",name:"deployment-history",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,938))}]},{path:"/feature",name:"feature",children:[{path:"map",name:"feature-map",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,3982))},{path:"list",name:"feature-list",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,7287))}]},{path:"/feature/:id",name:"feature-viewer",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,9784)),children:[{path:"edit",name:"feature-editor",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,9784))},{path:"history",name:"feature-history",component:()=>Promise.all([n.e(878),n.e(115),n.e(969),n.e(368),n.e(966)]).then(n.bind(n,7287))}]},...te(ee())]}];var oe=ne;const ae=(0,c.p7)({history:(0,c.r5)("/"),routes:oe,scrollBehavior(){return{top:0}}});var ie=ae,re=(0,k.MT)({state:{sidebarVisible:"",sidebarUnfoldable:!1},mutations:{toggleSidebar(e){e.sidebarVisible=!e.sidebarVisible},toggleUnfoldable(e){e.sidebarUnfoldable=!e.sidebarUnfoldable},updateSidebarVisible(e,t){e.sidebarVisible=t.value}},actions:{},modules:{}}),se=n(3504),pe=n(8957),me=(0,pe.Rd)({icons:{defaultSet:"mdi",aliases:se.j,sets:{mdi:se.t}},theme:{themes:{light:{dark:!1,primary:"#014e9e",secondary:"#75b942",accent:"#d5e3f0",warning:"#f8a700",error:"#B00020"},dark:{light:!1,primary:"#01aad3",secondary:"#75b942",accent:"#d5e3f0",warning:"#f8a700",error:"#B00020"}}}}),ce=n(5680);const de=(0,o.ri)(m).use(ie).use(re).use(re).use((0,ce.WB)()).use(me);de.mount("#app")},2513:function(e,t,n){var o={"./dashboard.vue":[6246,246],"./data-extract.vue":[2267,267],"./data-ingest.vue":[4490,490],"./data-inventory.vue":[5752,752],"./data-map.vue":[2870,870],"./data-parameter.vue":[2089,89],"./data-station.vue":[6705,705],"./deployment-list.vue":[938,938],"./deployment.vue":[8778,778],"./feature-list.vue":[7287,287],"./feature-map.vue":[3982,982],"./feature.vue":[9784,784],"./observation-form.vue":[1601,601],"./product-climat.vue":[3591,591],"./product-climate-normal.vue":[238,238],"./product-daycli.vue":[3567,567],"./quality-control.vue":[3562,562],"./sensor-list.vue":[3486,486],"./sensor.vue":[2799,799],"./settings-user.vue":[7360,360],"./station-list.vue":[7115,878,969,236],"./station-map.vue":[8546,878,115],"./station.vue":[9368,878,368,690],"./vocab.vue":[9437,437],"./wis2-publication.vue":[1268,268],"./wis2-subscription.vue":[8453,453]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=2513,e.exports=a},3742:function(e){"use strict";e.exports=JSON.parse('[{"component":"VListItem","name":"dashboard","to":"/home","routeName":"dashboard","icon":"mdi-home","display":true,"package":"@opencdms"},{"component":"VListItem","name":"dashboard","to":"/dashboard","routeName":"dashboard","icon":"mdi-home","display":true,"package":"@opencdms"},{"component":"VListItem","name":"data-ingest","to":"/observations/ingest","routeName":"data-ingest","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"data-extract","to":"/observations/extract","routeName":"data-extract","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"data-inventory","to":"/observations/inventory","routeName":"data-inventory","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"data-map","to":"/observations/map","routeName":"data-map","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"data-station","to":"/observations/station","routeName":"data-station","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"data-station","to":"/observations/station/","routeName":"data-station","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"data-parameter","to":"/observations/parameter","routeName":"data-parameter","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"data-parameter","to":"/observations/parameter/","routeName":"data-parameter","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"observation-form","to":"/observations/forms/","routeName":"observation-form","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"product-climate-normal","to":"/products/normals","routeName":"product-climate-normal","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"product-climate-normal","to":"/products/normals/","routeName":"product-climate-normal","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"product-climat","to":"/products/monthly","routeName":"product-climat","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"product-climat","to":"/products/monthly/","routeName":"product-climat","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"product-daycli","to":"/products/daily","routeName":"product-daycli","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"product-daycli","to":"/products/daily/","routeName":"product-daycli","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"quality-control","to":"/quality-control","routeName":"quality-control","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"settings-user","to":"/settings/user/","routeName":"settings-user","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"wis2-publication","to":"/wis2/publication","routeName":"wis2-publication","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"wis2-publication","to":"/wis2/publication//view","routeName":"wis2-publication","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"wis2-publication","to":"/wis2/publication//edit","routeName":"wis2-publication","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"wis2-subscription","to":"/wis2/subscriptions","routeName":"wis2-subscription","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"wis2-subscription","to":"/wis2/subscriptions//view","routeName":"wis2-subscription","icon":"mdi-construction","display":true,"package":"@opencdms"},{"component":"VListItem","name":"wis2-subscription","to":"/wis2/subscriptions//edit","routeName":"wis2-subscription","icon":"mdi-construction","display":true,"package":"@opencdms"}]')}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],i=e[c][2];for(var s=!0,p=0;p<o.length;p++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[p])}))?o.splice(p--,1):(s=!1,i<r&&(r=i));if(s){e.splice(c--,1);var m=a();void 0!==m&&(t=m)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(966===e?"dashboard":e)+"."+{89:"9f68323a",115:"debee969",236:"3b8a8c31",238:"492d412f",246:"28fc074a",267:"505b5bba",268:"3b733132",287:"226b6e70",360:"cc7152af",368:"53097edb",437:"2b570518",453:"6143f196",486:"4799276b",490:"5163f0b0",562:"9be10d33",567:"677722bf",591:"1048d537",601:"26bb4813",690:"0ca1d58a",705:"a2f75553",752:"8ca30235",778:"b2786467",784:"2ea680c7",799:"c4a0837b",870:"a8073423",878:"3c606dbc",938:"eb878f27",966:"508e6e2f",969:"0c271074",982:"24b15673"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(966===e?"dashboard":e)+"."+{89:"79325677",115:"daeae7ff",236:"79325677",238:"79325677",246:"79325677",267:"79325677",268:"79325677",287:"79325677",360:"79325677",437:"79325677",453:"79325677",486:"79325677",490:"79325677",562:"79325677",567:"79325677",591:"79325677",601:"79325677",690:"22fe0d5a",705:"79325677",752:"79325677",778:"79325677",784:"79325677",799:"79325677",870:"79325677",938:"79325677",966:"f928842d",969:"b08372a7",982:"79325677"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="opencdms-app:";n.l=function(o,a,i,r){if(e[o])e[o].push(a);else{var s,p;if(void 0!==i)for(var m=document.getElementsByTagName("script"),c=0;c<m.length;c++){var d=m[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(p=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[a];var u=function(t,n){s.onerror=s.onload=null,clearTimeout(l);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),p&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(i){if(a.onerror=a.onload=null,"load"===i.type)n();else{var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,p=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");p.code="CSS_CHUNK_LOAD_FAILED",p.type=r,p.request=s,a.parentNode.removeChild(a),o(p)}};return a.onerror=a.onload=i,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){a=r[o],i=a.getAttribute("data-href");if(i===e||i===t)return a}},o=function(o){return new Promise((function(a,i){var r=n.miniCssF(o),s=n.p+r;if(t(r,s))return a();e(o,s,a,i)}))},a={143:0};n.f.miniCss=function(e,t){var n={89:1,115:1,236:1,238:1,246:1,267:1,268:1,287:1,360:1,437:1,453:1,486:1,490:1,562:1,567:1,591:1,601:1,690:1,705:1,752:1,778:1,784:1,799:1,870:1,938:1,966:1,969:1,982:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else if(236!=t){var i=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=i);var r=n.p+n.u(t),s=new Error,p=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,a[1](s)}};n.l(r,p,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],s=o[1],p=o[2],m=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(p)var c=p(n)}for(t&&t(o);m<r.length;m++)i=r[m],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(882)}));o=n.O(o)})();
//# sourceMappingURL=app.017a0822.js.map