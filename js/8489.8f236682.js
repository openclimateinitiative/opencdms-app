"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[8489],{8489:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var n=l(3396);function a(e,t,l,a,o,u){const i=(0,n.up)("select-host",!0),r=(0,n.up)("select-observed-property"),c=(0,n.up)("VueDatePicker"),s=(0,n.up)("v-row"),d=(0,n.up)("v-card-title"),p=(0,n.up)("Line"),m=(0,n.up)("v-card-item"),v=(0,n.up)("v-card"),f=(0,n.up)("v-container");return(0,n.wg)(),(0,n.j4)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i),(0,n.Wm)(r),(0,n.Wm)(c,{range:""})])),_:1}),(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[e.obsLoaded?((0,n.wg)(),(0,n.j4)(v,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Example line plot")])),_:1}),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{data:e.chartData},null,8,["data"])])),_:1})])),_:1})):(0,n.kq)("",!0)])),_:1})])),_:1})}var o=l(839),u=l(7757),i=l(8394),r=l(3369),c=l(6824),s=l(4870),d=l(1475),p={name:"",components:{SelectHost:o.Z,SelectObservedProperty:u.Z,SelectDate:i.Z,VueDatePicker:d.Z,VContainer:r.K,VRow:c.o},setup(){const e=(0,s.iH)();return{date:e}}},m=l(89);const v=(0,m.Z)(p,[["render",a]]);var f=v},8394:function(e,t,l){l.d(t,{Z:function(){return w}});var n=l(3396),a=l(7139);function o(e,t,l,o,u,i){const r=(0,n.up)("v-card-title"),c=(0,n.up)("VueDatePicker"),s=(0,n.up)("v-card-item"),d=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.label),1)])),_:1}),(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{modelValue:e.selectedDate,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedDate=t),format:e.format,inline:"","text-input":"","inline-with-input":""},null,8,["modelValue","format"])])),_:1})])),_:1})}var u=l(4870),i=l(1475),r=l(3238),c=l(6572),s=l(6596),d=l(8086),p=l(7601),m=l(7503);function v(e,t){var l,n;(0,m.Z)(1,arguments);var a=(0,d.Z)(e);if(isNaN(a.getTime()))throw new RangeError("Invalid time value");var o=String(null!==(l=null===t||void 0===t?void 0:t.format)&&void 0!==l?l:"extended"),u=String(null!==(n=null===t||void 0===t?void 0:t.representation)&&void 0!==n?n:"complete");if("extended"!==o&&"basic"!==o)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==u&&"time"!==u&&"complete"!==u)throw new RangeError("representation must be 'date', 'time', or 'complete'");var i="",r="",c="extended"===o?"-":"",s="extended"===o?":":"";if("time"!==u){var v=(0,p.Z)(a.getDate(),2),f=(0,p.Z)(a.getMonth()+1,2),h=(0,p.Z)(a.getFullYear(),4);i="".concat(h).concat(c).concat(f).concat(c).concat(v)}if("date"!==u){var g=a.getTimezoneOffset();if(0!==g){var y=Math.abs(g),w=(0,p.Z)(Math.floor(y/60),2),V=(0,p.Z)(y%60,2),k=g<0?"+":"-";r="".concat(k).concat(w,":").concat(V)}else r="Z";var b=(0,p.Z)(a.getHours(),2),F=(0,p.Z)(a.getMinutes(),2),Z=(0,p.Z)(a.getSeconds(),2),_=""===i?"":"T",W=[b,F,Z].join(s);i="".concat(i).concat(_).concat(W).concat(r)}return i}var f=l(3073),h=(0,n.aZ)({name:"date-picker",components:{VueDatePicker:i.Z,formatISO:v,VCard:r._,VCardTitle:c.E,VCardItem:s._},props:{label:{type:String,default:"Pick a date"},modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const l=(0,u.iH)(e.modelValue||""),a=e=>v(e);return(0,n.YP)((()=>e.modelValue),(e=>{l.value=(0,f.Z)(e)}),{immediate:!0}),(0,n.YP)(l,(l=>{a(l)!==e.modelValue&&t("update:modelValue",a(l))})),{selectedDate:l,format:a}}}),g=l(89);const y=(0,g.Z)(h,[["render",o]]);var w=y},839:function(e,t,l){l.d(t,{Z:function(){return p}});var n=l(3396);function a(e,t,l,a,o,u){const i=(0,n.up)("v-autocomplete");return(0,n.wg)(),(0,n.j4)(i,{items:e.options,"item-title":"name","item-value":"id",label:"host",modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selected=t),hint:e.selected?e.selected.name:"Select a host","persistent-hint":"","return-object":""},null,8,["items","modelValue","hint"])}var o=l(5206),u=l(3968),i=l(4870),r=l(2650),c=(0,n.aZ)({name:"SelectHost",components:{VAutocomplete:r.f},emits:["update:modelValue"],setup(e,{emit:t}){const l=(0,i.iH)(null),a=(0,n.Fl)((()=>(0,u.lL)(o.Z).all()));console.log(a);(0,n.Fl)((()=>{}));return(0,n.YP)((()=>l.value),(e=>{t("update:modelValue",e)})),{selected:l,options:a}}}),s=l(89);const d=(0,s.Z)(c,[["render",a]]);var p=d},7757:function(e,t,l){l.d(t,{Z:function(){return p}});var n=l(3396);function a(e,t,l,a,o,u){const i=(0,n.up)("v-autocomplete");return(0,n.wg)(),(0,n.j4)(i,{items:e.options,"item-title":"short_name","item-value":"id",label:"observed property",modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selected=t),hint:e.selected?e.selected.standard_name:"Select an observed property","persistent-hint":"","return-object":""},null,8,["items","modelValue","hint"])}var o=l(2302),u=l(3968),i=l(4870),r=l(2650),c=(0,n.aZ)({name:"SelectObservedProperty",components:{VAutocomplete:r.f},emits:["update:modelValue"],setup(e,{emit:t}){const l=(0,i.iH)(null),a=(0,n.Fl)((()=>(0,u.lL)(o.Z).all()));console.log(a);(0,n.Fl)((()=>{}));return(0,n.YP)((()=>l.value),(e=>{t("update:modelValue",e)})),{selected:l,options:a}}}),s=l(89);const d=(0,s.Z)(c,[["render",a]]);var p=d},2650:function(e,t,l){l.d(t,{f:function(){return Z}});var n=l(3396),a=l(240),o=l(1550),u=l(7103),i=l(836),r=l(6052),c=l(9457),s=l(8971),d=l(2900),p=l(3185),m=l(1819),v=l(4906),f=l(4357),h=l(6185),g=l(1629),y=l(8717),w=l(4870),V=l(320),k=l(131),b=l(9888);function F(e,t,l){if(null==t)return e;if(Array.isArray(t))throw new Error("Multiple matches is not implemented");return"number"===typeof t&&~t?(0,n.Wm)(n.HY,null,[(0,n.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(0,t)]),(0,n.Wm)("span",{class:"v-autocomplete__mask"},[e.substr(t,l)]),(0,n.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(t+l)])]):e}const Z=(0,V.ev)()({name:"VAutocomplete",props:{search:String,...(0,m.Up)({filterKeys:["title"]}),...(0,a.f)(),...(0,k.CE)((0,d.wG)({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...(0,v.X)({transition:!1})},emits:{"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,t){let{slots:l}=t;const{t:a}=(0,g.bU)(),v=(0,w.iH)(),V=(0,w.iH)(!1),Z=(0,w.iH)(!0),_=(0,w.iH)(),W=(0,y.z)(e,"menu"),S=(0,n.Fl)({get:()=>W.value,set:e=>{W.value&&!e&&_.value?.ΨopenChildren||(W.value=e)}}),{items:C,transformIn:x,transformOut:D}=(0,h.Ce)(e),M=(0,y.z)(e,"search",""),H=(0,y.z)(e,"modelValue",[],(e=>x((0,k.FT)(e))),(t=>{const l=D(t);return e.multiple?l:l[0]??null})),U=(0,f.cI)(),{filteredItems:P,getMatches:I}=(0,m.L0)(e,C,(0,n.Fl)((()=>Z.value?void 0:M.value))),j=(0,n.Fl)((()=>H.value.map((t=>C.value.find((l=>e.valueComparator(l.value,t.value)))||t)))),K=(0,n.Fl)((()=>e.hideSelected?P.value.filter((e=>!j.value.some((t=>t.value===e.value)))):P.value)),O=(0,n.Fl)((()=>j.value.map((e=>e.props.value)))),E=(0,w.iH)();function A(t){e.openOnClear&&(S.value=!0),M.value=""}function L(){e.hideNoData&&!C.value.length||e.readonly||U?.isReadonly.value||(S.value=!0)}function Y(t){e.readonly||U?.isReadonly.value||(["Enter","ArrowDown","ArrowUp"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(S.value=!0),["Escape"].includes(t.key)&&(S.value=!1),["Enter","Escape","Tab"].includes(t.key)&&(Z.value=!0),"ArrowDown"===t.key?E.value?.focus("next"):"ArrowUp"===t.key&&E.value?.focus("prev"))}function T(e){M.value=e.target.value}function z(){V.value&&(Z.value=!0)}function R(e){V.value=!0}function G(e){null==e.relatedTarget&&v.value?.focus()}const N=(0,w.iH)(!1);function q(t){if(e.multiple){const l=O.value.findIndex((l=>e.valueComparator(l,t.value)));if(-1===l)H.value=[...H.value,t],M.value="";else{const e=[...H.value];e.splice(l,1),H.value=e}}else H.value=[t],N.value=!0,l.selection||(M.value=t.title),S.value=!1,Z.value=!0,(0,n.Y3)((()=>N.value=!1))}return(0,n.YP)(V,(t=>{t?(N.value=!0,M.value=e.multiple||l.selection?"":String(j.value.at(-1)?.props.title??""),Z.value=!0,(0,n.Y3)((()=>N.value=!1))):(S.value=!1,M.value="")})),(0,n.YP)(M,(e=>{V.value&&!N.value&&(e&&(S.value=!0),Z.value=!e)})),(0,b.L)((()=>{const t=!(!e.chips&&!l.chip),p=!!(!e.hideNoData||K.value.length||l.prepend||l.append||l["no-data"]),[m]=(0,d.a)(e);return(0,n.Wm)(d.hw,(0,n.dG)({ref:v},m,{modelValue:M.value,"onUpdate:modelValue":e=>{null==e&&(H.value=[])},validationValue:H.externalValue,dirty:H.value.length>0,onInput:T,class:["v-autocomplete",{"v-autocomplete--active-menu":S.value,"v-autocomplete--chips":!!e.chips,["v-autocomplete--"+(e.multiple?"multiple":"single")]:!0,"v-autocomplete--selection-slot":!!l.selection}],appendInnerIcon:e.menuIcon,readonly:e.readonly,"onClick:clear":A,"onMousedown:control":L,onFocus:()=>V.value=!0,onBlur:()=>V.value=!1,onKeydown:Y}),{...l,default:()=>(0,n.Wm)(n.HY,null,[(0,n.Wm)(s.T,(0,n.dG)({ref:_,modelValue:S.value,"onUpdate:modelValue":e=>S.value=e,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:z},e.menuProps),{default:()=>[p&&(0,n.Wm)(r.i,{ref:E,selected:O.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onFocusin:R,onFocusout:G},{default:()=>[!K.value.length&&!e.hideNoData&&(l["no-data"]?.()??(0,n.Wm)(c.l,{title:a(e.noDataText)},null)),l["prepend-item"]?.(),K.value.map(((t,a)=>l.item?.({item:t,index:a,props:(0,n.dG)(t.props,{onClick:()=>q(t)})})??(0,n.Wm)(c.l,(0,n.dG)({key:a},t.props,{onClick:()=>q(t)}),{prepend:t=>{let{isSelected:l}=t;return e.multiple&&!e.hideSelected?(0,n.Wm)(o.pM,{modelValue:l,ripple:!1},null):void 0},title:()=>Z.value?t.title:F(t.title,I(t)?.title,M.value?.length??0)}))),l["append-item"]?.()]})]}),j.value.map(((a,o)=>{function r(e){e.stopPropagation(),e.preventDefault(),q(a)}const c={"onClick:close":r,modelValue:!0,"onUpdate:modelValue":void 0};return(0,n.Wm)("div",{key:a.value,class:"v-autocomplete__selection"},[t?(0,n.Wm)(i.z,{defaults:{VChip:{closable:e.closableChips,size:"small",text:a.title}}},{default:()=>[l.chip?l.chip({item:a,index:o,props:c}):(0,n.Wm)(u.v,c,null)]}):l.selection?l.selection({item:a,index:o}):(0,n.Wm)("span",{class:"v-autocomplete__selection-text"},[a.title,e.multiple&&o<j.value.length-1&&(0,n.Wm)("span",{class:"v-autocomplete__selection-comma"},[(0,n.Uk)(",")])])])}))])})})),(0,p.F)({isFocused:V,isPristine:Z,menu:S,search:M,filteredItems:P,select:q},v)}})},1819:function(e,t,l){l.d(t,{L0:function(){return s},Up:function(){return r}});l(7658);var n=l(3766),a=l(131),o=l(3396),u=l(4870);const i=(e,t,l)=>null==e||null==t?-1:e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),r=(0,n.U)({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function c(e,t,l){const n=[],o=l?.default??i,u=!!l?.filterKeys&&(0,a.FT)(l.filterKeys),r=Object.keys(l?.customKeyFilter??{}).length;if(!e?.length)return n;e:for(let i=0;i<e.length;i++){const c=e[i],s={},d={};let p=-1;if(t&&!l?.noFilter){if("object"===typeof c){const e=u||Object.keys(c);for(const n of e){const e=(0,a.qF)(c,n,c),u=l?.customKeyFilter?.[n];if(p=u?u(e,t,c):o(e,t,c),-1!==p&&!1!==p)u?s[n]=p:d[n]=p;else if("every"===l?.filterMode)continue e}}else p=o(c,t,c),-1!==p&&!1!==p&&(d.title=p);const e=Object.keys(d).length,n=Object.keys(s).length;if(!e&&!n)continue;if("union"===l?.filterMode&&n!==r&&!e)continue;if("intersection"===l?.filterMode&&(n!==r||!e))continue}n.push({index:i,matches:{...d,...s}})}return n}function s(e,t,l,n){const a=(0,o.Fl)((()=>"string"!==typeof l?.value&&"number"!==typeof l?.value?"":String(l.value))),i=(0,u.iH)([]),r=(0,u.iH)(new Map);function s(e){return r.value.get(e.value)}return(0,o.m0)((()=>{i.value=[],r.value=new Map;const l=(0,u.SU)(t),o=c(l,a.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:(0,u.SU)(n?.filterKeys)??e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter});o.forEach((e=>{let{index:t,matches:n}=e;const a=l[t];i.value.push(a),r.value.set(a.value,n)}))})),{filteredItems:i,filteredMatches:r,getMatches:s}}}}]);
//# sourceMappingURL=8489.8f236682.js.map