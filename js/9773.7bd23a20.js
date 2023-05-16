"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[9773],{3817:function(e,t,l){l.r(t),l.d(t,{default:function(){return U}});var a=l(3396);function n(e,t,l,n,u,r){const i=(0,a.up)("FeatureType",!0);return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i)])}function u(e,t,l,n,u,r){const i=(0,a.up)("v-card-title"),s=(0,a.up)("v-text-field"),o=(0,a.up)("v-card-item"),p=(0,a.up)("LinkForm"),m=(0,a.up)("VueDatePicker"),d=(0,a.up)("v-select"),c=(0,a.up)("v-form"),f=(0,a.up)("v-btn"),y=(0,a.up)("v-card-text"),h=(0,a.up)("v-card");return(0,a.wg)(),(0,a.j4)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Create new 'FeatureType'")])),_:1}),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"id",modelValue:e.featureType.id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.featureType.id=t),hint:"ID / primary key","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"authority",modelValue:e.featureType.authority,"onUpdate:modelValue":t[1]||(t[1]=t=>e.featureType.authority=t),hint:"Naming authority for code list entry","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"name",modelValue:e.featureType.name,"onUpdate:modelValue":t[2]||(t[2]=t=>e.featureType.name=t),hint:"Short name for feature type","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"description",modelValue:e.featureType.description,"onUpdate:modelValue":t[3]||(t[3]=t=>e.featureType.description=t),hint:"Description of feature type","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{links:e.links,onUpdateLinks:e.updateLinks},null,8,["links","onUpdateLinks"])])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"_version",modelValue:e.featureType._version,"onUpdate:modelValue":t[4]||(t[4]=t=>e.featureType._version=t),type:"number",hint:"Version number of this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"_change_date",modelValue:e.featureType._change_date,"onUpdate:modelValue":t[5]||(t[5]=t=>e.featureType._change_date=t),hint:"Date this record was changed","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{items:e.userOptions,"item-title":"name","item-value":"id",label:"user",modelValue:e.featureType._user,"onUpdate:modelValue":t[6]||(t[6]=t=>e.featureType._user=t),hint:e.userOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{items:e.statusOptions,"item-title":"name","item-value":"id",label:"status",modelValue:e.featureType._status,"onUpdate:modelValue":t[7]||(t[7]=t=>e.featureType._status=t),hint:e.statusOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{label:"comments",modelValue:e.featureType.comments,"onUpdate:modelValue":t[8]||(t[8]=t=>e.featureType.comments=t),hint:"Free text comments on this record, for example description of changes made etc","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(f,{onClick:e.createFeatureType},{default:(0,a.w5)((()=>[(0,a.Uk)("Create FeatureType")])),_:1},8,["onClick"])])),_:1})])),_:1})}l(774);var r=l(4870),i=l(3238),s=l(6572),o=l(1888),p=l(1209),m=l(2900),d=l(240),c=l(6422),f=l(870),y=l(3968),h=l(1995),V=l(5708),_=l(9597),T=l(2815),v=l(3108),k=(0,a.aZ)({name:"FeatureTypeForm",props:{},methods:{parseLinks(e){let t;return t=e&&e.length>0?JSON.stringify(e):"",t}},components:{VCard:i._,VCardTitle:s.E,VCardText:o.Z,VCardItem:p._,VTextField:m.hw,VSelect:d.r,VForm:c.O,VBtn:f.T,VueDatePicker:V.Z,LinkForm:h.Z},setup(){const e=(0,r.iH)([]),t=e=>{console.log("updating links"),m.value.links=e},l=(0,y.lL)(_.Z),n=(0,a.Fl)((()=>l.all())),u=(0,a.Fl)((()=>null!==m.value._user?"description"in m.value._user?m.value._user.description:"":"Select user")),i=(0,y.lL)(T.Z),s=(0,a.Fl)((()=>i.all())),o=(0,a.Fl)((()=>null!==m.value._status?"description"in m.value._status?m.value._status.description:"":"Select status")),p=(0,y.lL)(v.Z),m=(0,r.iH)(p.make()),d=async()=>{let e={};Object.assign(e,m.value),await p.save(e),c()},c=()=>{Object.assign(m.value,p.make())};return{featureType:m,createFeatureType:d,resetFeatureType:c,links:e,updateLinks:t,userOptions:n,userOptionsHint:u,statusOptions:s,statusOptionsHint:o}}}),W=l(89);const w=(0,W.Z)(k,[["render",u]]);var F=w,b={name:"featureTypeForm",components:{FeatureType:F}};const g=(0,W.Z)(b,[["render",n]]);var U=g}}]);
//# sourceMappingURL=9773.7bd23a20.js.map