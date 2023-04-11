"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[437,236],{9437:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(3396);function l(e,t,a,l,i,r){const d=(0,n.up)("vocab",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(d,{title:"vocab",content:"This page is under construction",description:"view of single item from table  in specified vocabulary"})])}var i=a(7139);function r(e,t,a,l,r,d){const p=(0,n.up)("v-card-title"),s=(0,n.up)("v-card-text"),o=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.title),1)])),_:1}),(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.content),1)])),_:1}),(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.description),1)])),_:1})])),_:1})}var d=a(5661),p=a(6572),s=a(1888),o=(0,n.aZ)({name:"vocab",props:{title:{type:String,required:!0},content:{type:String,required:!0},description:{type:String,required:!0}},components:{VCard:d._,VCardTitle:p.E,VCardText:s.Z},methods:{},setup(){(0,n.wF)((()=>{})),(0,n.bv)((()=>{})),(0,n.Xn)((()=>{})),(0,n.ic)((()=>{})),(0,n.Jd)((()=>{})),(0,n.Ah)((()=>{})),(0,n.d1)((()=>{}))}}),c=a(89);const u=(0,c.Z)(o,[["render",r]]);var v=u,m={name:"MyView",components:{Vocab:v}};const f=(0,c.Z)(m,[["render",l]]);var b=f},5661:function(e,t,a){a.d(t,{_:function(){return E}});var n=a(3396),l=a(8434),i=a(320),r=a(9888);const d=(0,i.aZ)({name:"VCardActions",setup(e,t){let{slots:a}=t;return(0,l.AF)({VBtn:{variant:"text"}}),(0,r.L)((()=>(0,n.Wm)("div",{class:"v-card-actions"},[a.default?.()]))),{}}});var p=a(652),s=a(1114);const o=(0,s.J)("v-card-subtitle");var c=a(6572),u=a(836),v=a(1617),m=a(9694);const f=(0,i.ev)()({name:"VCardItem",props:{appendAvatar:String,appendIcon:v.lE,prependAvatar:String,prependIcon:v.lE,subtitle:String,title:String,...(0,m.f)()},setup(e,t){let{slots:a}=t;return(0,r.L)((()=>{const t=!!(e.prependAvatar||e.prependIcon||a.prepend),l=!!(e.appendAvatar||e.appendIcon||a.append),i=!(!e.title&&!a.title),r=!(!e.subtitle&&!a.subtitle);return(0,n.Wm)("div",{class:"v-card-item"},[t&&(0,n.Wm)(u.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,n.Wm)("div",{class:"v-card-item__prepend"},[a.prepend?.()??(0,n.Wm)(p.V,null,null)])]}),(0,n.Wm)("div",{class:"v-card-item__content"},[i&&(0,n.Wm)(c.E,{key:"title"},{default:()=>[a.title?.()??e.title]}),r&&(0,n.Wm)(o,{key:"subtitle"},{default:()=>[a.subtitle?.()??e.subtitle]}),a.default?.()]),l&&(0,n.Wm)(u.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,n.Wm)("div",{class:"v-card-item__append"},[a.append?.()??(0,n.Wm)(p.V,null,null)])]})])})),{}}});var b=a(1888),g=a(8694),y=a(3824),k=a(5221),W=a(6791),I=a(2718),A=a(4544),C=a(2465),S=a(5180),V=a(489),_=a(4231),w=a(6183),x=a(1138),h=a(7041);const E=(0,i.ev)()({name:"VCard",directives:{Ripple:y.H},props:{appendAvatar:String,appendIcon:v.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v.lE,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...(0,h.x$)(),...(0,I.m)(),...(0,m.f)(),...(0,A.x)(),...(0,C.c)(),...(0,W.fF)(),...(0,S.y)(),...(0,V.F)(),...(0,_.I)(),...(0,w.GN)(),...(0,x.Q)(),...(0,k.bk)({variant:"elevated"})},setup(e,t){let{attrs:a,slots:l}=t;const{themeClasses:i}=(0,h.ER)(e),{borderClasses:p}=(0,I.P)(e),{colorClasses:s,colorStyles:o,variantClasses:c}=(0,k.c1)(e),{densityClasses:v}=(0,m.t)(e),{dimensionStyles:y}=(0,A.$)(e),{elevationClasses:x}=(0,C.Y)(e),{loaderClasses:E}=(0,W.U2)(e),{locationStyles:B}=(0,S.T)(e),{positionClasses:Z}=(0,V.K)(e),{roundedClasses:z}=(0,_.b)(e),F=(0,w.nB)(e,a),U=(0,n.Fl)((()=>!1!==e.link&&F.isLink.value)),J=(0,n.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||F.isClickable.value)));return(0,r.L)((()=>{const t=U.value?"a":e.tag,a=!(!l.title&&!e.title),r=!(!l.subtitle&&!e.subtitle),m=a||r,I=!!(l.append||e.appendAvatar||e.appendIcon),A=!!(l.prepend||e.prependAvatar||e.prependIcon),C=!(!l.image&&!e.image),S=m||A||I,V=!(!l.text&&!e.text);return(0,n.wy)((0,n.Wm)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":J.value},i.value,p.value,s.value,v.value,x.value,E.value,Z.value,z.value,c.value],style:[o.value,y.value,B.value],href:F.href.value,onClick:J.value&&F.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[C&&(0,n.Wm)(u.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,n.Wm)("div",{class:"v-card__image"},[l.image?.()??(0,n.Wm)(g.f,null,null)])]}),(0,n.Wm)(W.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:l.loader}),S&&(0,n.Wm)(f,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),V&&(0,n.Wm)(b.Z,{key:"text"},{default:()=>[l.text?.()??e.text]}),l.default?.(),l.actions&&(0,n.Wm)(d,null,{default:l.actions}),(0,k.Ux)(J.value,"v-card")]}),[[(0,n.Q2)("ripple"),J.value&&e.ripple]])})),{}}})},1888:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(1114);const l=(0,n.J)("v-card-text")},6572:function(e,t,a){a.d(t,{E:function(){return l}});var n=a(1114);const l=(0,n.J)("v-card-title")}}]);
//# sourceMappingURL=437.2b570518.js.map