"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[6822],{1192:function(e,t,l){l.r(t),l.d(t,{default:function(){return N}});var n=l(3396);function o(e,t,l,o,r,s){const a=(0,n.up)("sensor",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(a,{title:"sensor",content:"This page is under construction",description:"editable view of single sensor"})])}var r=l(7139);function s(e,t,l,o,s,a){const u=(0,n.up)("v-card-title"),i=(0,n.up)("select-observer"),c=(0,n.up)("v-card-text"),d=(0,n.up)("v-card"),f=(0,n.up)("v-col"),p=(0,n.up)("v-row"),m=(0,n.up)("v-card-item"),v=(0,n.up)("feature-map"),g=(0,n.up)("v-btn"),w=(0,n.up)("v-container");return(0,n.wg)(),(0,n.j4)(w,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{cols:12},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Select sensor")])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:e.selectedObserver,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedObserver=t)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(p),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{cols:6},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Sensor: "+(0,r.zw)(e.$route.params.id),1)])),_:1}),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n._)("pre",null,(0,r.zw)(e.observer),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(f,{cols:6,"align-self":"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{geom:e.geom,id:"map",style:{height:"400px"}},null,8,["geom"])])),_:1})])),_:1}),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{cols:12},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Sensor characteristics")])),_:1}),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n._)("pre",null,(0,r.zw)(e.observerCharacteristics),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{cols:12},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{onClick:e.edit},{default:(0,n.w5)((()=>[(0,n.Uk)("Edit")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}l(7658);var a=l(4870),u=l(1489),i=l(6572),c=l(1888),d=l(1209),f=l(3144),p=l(9870),m=l(870),v=l(2650),g=l(3369),w=l(8521),b=l(6824),y=l(2483),h=l(3968),_=l(941);function W(e,t,l,o,r,s){const a=(0,n.up)("v-autocomplete");return(0,n.wg)(),(0,n.j4)(a,{items:e.options,"item-title":"id","item-value":"id",label:"observer",modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selected=t),hint:e.selected?e.selected.name:"Select an observer","persistent-hint":"","return-object":""},null,8,["items","modelValue","hint"])}var C=l(6902),S=(0,n.aZ)({name:"SelectObserver",components:{VAutocomplete:v.f},emits:["update:modelValue"],setup(e,{emit:t}){const l=(0,a.iH)(null),o=(0,n.Fl)((()=>(0,h.lL)(C.Z).all()));console.log(o);(0,n.Fl)((()=>{}));return(0,n.YP)((()=>l.value),(e=>{t("update:modelValue",e)})),{selected:l,options:o}}}),V=l(89);const k=(0,V.Z)(S,[["render",W]]);var j=k,O=l(1446),Z=(0,n.aZ)({name:"sensor",components:{VCard:u._,VCardTitle:i.E,VCardText:c.Z,VCardItem:d._,VTabs:f.d,VTab:p.L,VBtn:m.T,VAutocomplete:v.f,VContainer:g.K,VCol:w.D,VRow:b.o,FeatureMap:_.Z,SelectObserver:j},methods:{},setup(e){const t=(0,a.iH)(null),l=(0,y.tv)(),o=(0,a.iH)(null),r=(0,h.lL)(C.Z),s=(0,n.Fl)((()=>r.all())),u=(0,a.iH)(null),i=(0,a.iH)(null),c=async e=>{console.log(e),u.value=(0,h.lL)(C.Z).where("id",d.params.id).first(),console.log((0,h.lL)(C.Z).all()),i.value=(0,h.lL)(O.Z).with("observed_property").with("observing_method").where("observer_id",d.params.id).first()};(0,n.YP)(u,(e=>{if(e){const t=e.location.match(/POINT\(([-\d\.]+)\s+([-\d\.]+)\)/),l=[parseFloat(t[1]),parseFloat(t[2])];o.value={type:"Feature",geometry:{type:"Point",coordinates:l}}}console.log(o.value)}));const d=(0,y.yj)();(0,a.iH)([]);return(0,n.bv)((async()=>{c(d.params.id),(0,n.m0)((()=>{c(d.params.id)})),(0,n.YP)(t,(e=>{l.push("/sensor/"+e.id)}))})),(0,n.d1)((()=>{})),{observer:u,observerCharacteristics:i,observerOptions:s,selectedObserver:t,geom:o}}});const $=(0,V.Z)(Z,[["render",s]]);var x=$,F={name:"MyView",components:{Sensor:x}};const L=(0,V.Z)(F,[["render",o]]);var N=L},8521:function(e,t,l){l.d(t,{D:function(){return m}});l(7658),l(8099);var n=l(1138),o=l(7139),r=l(3396),s=l(320);const a=["sm","md","lg","xl","xxl"],u=(()=>a.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),i=(()=>a.reduce(((e,t)=>(e["offset"+(0,o.kC)(t)]={type:[String,Number],default:null},e)),{}))(),c=(()=>a.reduce(((e,t)=>(e["order"+(0,o.kC)(t)]={type:[String,Number],default:null},e)),{}))(),d={col:Object.keys(u),offset:Object.keys(i),order:Object.keys(c)};function f(e,t,l){let n=e;if(null!=l&&!1!==l){if(t){const l=t.replace(e,"");n+=`-${l}`}return"col"===e&&(n="v-"+n),"col"!==e||""!==l&&!0!==l?(n+=`-${l}`,n.toLowerCase()):n.toLowerCase()}}const p=["auto","start","end","center","baseline","stretch"],m=(0,s.ev)()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...u,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>p.includes(e)},...(0,n.Q)()},setup(e,t){let{slots:l}=t;const n=(0,r.Fl)((()=>{const t=[];let l;for(l in d)d[l].forEach((n=>{const o=e[n],r=f(l,n,o);r&&t.push(r)}));const n=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!n||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>(0,r.h)(e.tag,{class:n.value},l.default?.())}})},6824:function(e,t,l){l.d(t,{o:function(){return C}});l(7658),l(8099);var n=l(1138),o=l(7139),r=l(3396),s=l(320);const a=["sm","md","lg","xl","xxl"],u=["start","end","center"],i=["space-between","space-around","space-evenly"];function c(e,t){return a.reduce(((l,n)=>(l[e+(0,o.kC)(n)]=t(),l)),{})}const d=[...u,"baseline","stretch"],f=e=>d.includes(e),p=c("align",(()=>({type:String,default:null,validator:f}))),m=[...u,...i],v=e=>m.includes(e),g=c("justify",(()=>({type:String,default:null,validator:v}))),w=[...u,...i,"stretch"],b=e=>w.includes(e),y=c("alignContent",(()=>({type:String,default:null,validator:b}))),h={align:Object.keys(p),justify:Object.keys(g),alignContent:Object.keys(y)},_={align:"align",justify:"justify",alignContent:"align-content"};function W(e,t,l){let n=_[e];if(null!=l){if(t){const l=t.replace(e,"");n+=`-${l}`}return n+=`-${l}`,n.toLowerCase()}}const C=(0,s.ev)()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f},...p,justify:{type:String,default:null,validator:v},...g,alignContent:{type:String,default:null,validator:b},...y,...(0,n.Q)()},setup(e,t){let{slots:l}=t;const n=(0,r.Fl)((()=>{const t=[];let l;for(l in h)h[l].forEach((n=>{const o=e[n],r=W(l,n,o);r&&t.push(r)}));return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t}));return()=>(0,r.h)(e.tag,{class:["v-row",n.value]},l.default?.())}})}}]);
//# sourceMappingURL=6822.27d3b930.js.map