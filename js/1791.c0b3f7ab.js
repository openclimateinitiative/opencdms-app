"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[1791],{8521:function(e,t,l){l.d(t,{D:function(){return g}});l(7658),l(8099);var o=l(1138),r=l(7139),n=l(3396),s=l(320);const u=["sm","md","lg","xl","xxl"],c=(()=>u.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),a=(()=>u.reduce(((e,t)=>(e["offset"+(0,r.kC)(t)]={type:[String,Number],default:null},e)),{}))(),f=(()=>u.reduce(((e,t)=>(e["order"+(0,r.kC)(t)]={type:[String,Number],default:null},e)),{}))(),d={col:Object.keys(c),offset:Object.keys(a),order:Object.keys(f)};function i(e,t,l){let o=e;if(null!=l&&!1!==l){if(t){const l=t.replace(e,"");o+=`-${l}`}return"col"===e&&(o="v-"+o),"col"!==e||""!==l&&!0!==l?(o+=`-${l}`,o.toLowerCase()):o.toLowerCase()}}const p=["auto","start","end","center","baseline","stretch"],g=(0,s.ev)()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...c,offset:{type:[String,Number],default:null},...a,order:{type:[String,Number],default:null},...f,alignSelf:{type:String,default:null,validator:e=>p.includes(e)},...(0,o.Q)()},setup(e,t){let{slots:l}=t;const o=(0,n.Fl)((()=>{const t=[];let l;for(l in d)d[l].forEach((o=>{const r=e[o],n=i(l,o,r);n&&t.push(n)}));const o=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>(0,n.h)(e.tag,{class:o.value},l.default?.())}})}}]);
//# sourceMappingURL=1791.c0b3f7ab.js.map