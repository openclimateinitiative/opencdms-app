"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[8453,3238],{8453:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(3396);function l(e,t,n,l,i,r){const d=(0,a.up)("wis2-subscription",!0);return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(d,{title:"wis2-subscription",content:"This page is under construction",description:"editable view of settings for single subscription"})])}var i=n(7139);function r(e,t,n,l,r,d){const s=(0,a.up)("v-card-title"),p=(0,a.up)("v-card-text"),o=(0,a.up)("v-card");return(0,a.wg)(),(0,a.j4)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.title),1)])),_:1}),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.content),1)])),_:1}),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.description),1)])),_:1})])),_:1})}var d=n(3238),s=n(6572),p=n(1888),o=(0,a.aZ)({name:"wis2-subscription",props:{title:{type:String,required:!0},content:{type:String,required:!0},description:{type:String,required:!0}},components:{VCard:d._,VCardTitle:s.E,VCardText:p.Z},methods:{},setup(){(0,a.wF)((()=>{})),(0,a.bv)((()=>{})),(0,a.Xn)((()=>{})),(0,a.ic)((()=>{})),(0,a.Jd)((()=>{})),(0,a.Ah)((()=>{})),(0,a.d1)((()=>{}))}}),u=n(89);const c=(0,u.Z)(o,[["render",r]]);var v=c,m={name:"MyView",components:{Wis2Subscription:v}};const f=(0,u.Z)(m,[["render",l]]);var b=f},3238:function(e,t,n){n.d(t,{_:function(){return S}});var a=n(3396),l=n(8434),i=n(320),r=n(9888);const d=(0,i.aZ)({name:"VCardActions",setup(e,t){let{slots:n}=t;return(0,l.AF)({VBtn:{variant:"text"}}),(0,r.L)((()=>(0,a.Wm)("div",{class:"v-card-actions"},[n.default?.()]))),{}}});var s=n(1209),p=n(1888),o=n(836),u=n(8694),c=n(3824),v=n(5221),m=n(1617),f=n(6791),b=n(2718),g=n(9694),y=n(4544),W=n(2465),k=n(5180),I=n(489),A=n(4231),C=n(6183),w=n(1138),_=n(7041);const S=(0,i.ev)()({name:"VCard",directives:{Ripple:c.H},props:{appendAvatar:String,appendIcon:m.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m.lE,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...(0,_.x$)(),...(0,b.m)(),...(0,g.f)(),...(0,y.x)(),...(0,W.c)(),...(0,f.fF)(),...(0,k.y)(),...(0,I.F)(),...(0,A.I)(),...(0,C.GN)(),...(0,w.Q)(),...(0,v.bk)({variant:"elevated"})},setup(e,t){let{attrs:n,slots:l}=t;const{themeClasses:i}=(0,_.ER)(e),{borderClasses:c}=(0,b.P)(e),{colorClasses:m,colorStyles:w,variantClasses:S}=(0,v.c1)(e),{densityClasses:V}=(0,g.t)(e),{dimensionStyles:x}=(0,y.$)(e),{elevationClasses:h}=(0,W.Y)(e),{loaderClasses:E}=(0,f.U2)(e),{locationStyles:B}=(0,k.T)(e),{positionClasses:Z}=(0,I.K)(e),{roundedClasses:z}=(0,A.b)(e),F=(0,C.nB)(e,n),U=(0,a.Fl)((()=>!1!==e.link&&F.isLink.value)),J=(0,a.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||F.isClickable.value)));return(0,r.L)((()=>{const t=U.value?"a":e.tag,n=!(!l.title&&!e.title),r=!(!l.subtitle&&!e.subtitle),b=n||r,g=!!(l.append||e.appendAvatar||e.appendIcon),y=!!(l.prepend||e.prependAvatar||e.prependIcon),W=!(!l.image&&!e.image),k=b||y||g,I=!(!l.text&&!e.text);return(0,a.wy)((0,a.Wm)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":J.value},i.value,c.value,m.value,V.value,h.value,E.value,Z.value,z.value,S.value],style:[w.value,x.value,B.value],href:F.href.value,onClick:J.value&&F.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[W&&(0,a.Wm)(o.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,a.Wm)("div",{class:"v-card__image"},[l.image?.()??(0,a.Wm)(u.f,null,null)])]}),(0,a.Wm)(f.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:l.loader}),k&&(0,a.Wm)(s._,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),I&&(0,a.Wm)(p.Z,{key:"text"},{default:()=>[l.text?.()??e.text]}),l.default?.(),l.actions&&(0,a.Wm)(d,null,{default:l.actions}),(0,v.Ux)(J.value,"v-card")]}),[[(0,a.Q2)("ripple"),J.value&&e.ripple]])})),{}}})},1209:function(e,t,n){n.d(t,{_:function(){return c}});var a=n(3396),l=n(652),i=n(1332),r=n(6572),d=n(836),s=n(1617),p=n(9694),o=n(320),u=n(9888);const c=(0,o.ev)()({name:"VCardItem",props:{appendAvatar:String,appendIcon:s.lE,prependAvatar:String,prependIcon:s.lE,subtitle:String,title:String,...(0,p.f)()},setup(e,t){let{slots:n}=t;return(0,u.L)((()=>{const t=!!(e.prependAvatar||e.prependIcon||n.prepend),s=!!(e.appendAvatar||e.appendIcon||n.append),p=!(!e.title&&!n.title),o=!(!e.subtitle&&!n.subtitle);return(0,a.Wm)("div",{class:"v-card-item"},[t&&(0,a.Wm)(d.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,a.Wm)("div",{class:"v-card-item__prepend"},[n.prepend?.()??(0,a.Wm)(l.V,null,null)])]}),(0,a.Wm)("div",{class:"v-card-item__content"},[p&&(0,a.Wm)(r.E,{key:"title"},{default:()=>[n.title?.()??e.title]}),o&&(0,a.Wm)(i.Q,{key:"subtitle"},{default:()=>[n.subtitle?.()??e.subtitle]}),n.default?.()]),s&&(0,a.Wm)(d.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,a.Wm)("div",{class:"v-card-item__append"},[n.append?.()??(0,a.Wm)(l.V,null,null)])]})])})),{}}})},1332:function(e,t,n){n.d(t,{Q:function(){return l}});var a=n(1114);const l=(0,a.J)("v-card-subtitle")},1888:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1114);const l=(0,a.J)("v-card-text")},6572:function(e,t,n){n.d(t,{E:function(){return l}});var a=n(1114);const l=(0,a.J)("v-card-title")}}]);
//# sourceMappingURL=8453.f4f2b219.js.map