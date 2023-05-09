"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[8983],{8983:function(e,t,l){l.r(t),l.d(t,{default:function(){return O}});var n=l(3396);function u(e,t,l,u,s,a){const o=(0,n.up)("SourceType",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(o)])}function s(e,t,l,u,s,a){const o=(0,n.up)("v-card-title"),i=(0,n.up)("v-text-field"),r=(0,n.up)("v-card-item"),p=(0,n.up)("LinkForm"),m=(0,n.up)("VueDatePicker"),d=(0,n.up)("v-select"),c=(0,n.up)("v-form"),h=(0,n.up)("v-btn"),V=(0,n.up)("v-card-text"),_=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Create new 'SourceType'")])),_:1}),(0,n.Wm)(V,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"id",modelValue:e.sourceType.id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.sourceType.id=t),hint:"ID / primary key","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"name",modelValue:e.sourceType.name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.sourceType.name=t),hint:"Name of source type","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"description",modelValue:e.sourceType.description,"onUpdate:modelValue":t[2]||(t[2]=t=>e.sourceType.description=t),hint:"Description of source type, e.g. file etc","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"scheme",modelValue:e.sourceType.scheme,"onUpdate:modelValue":t[3]||(t[3]=t=>e.sourceType.scheme=t),hint:"IANA scheme (if applicable)","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{links:e.links,onUpdateLinks:e.updateLinks},null,8,["links","onUpdateLinks"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"_version",modelValue:e.sourceType._version,"onUpdate:modelValue":t[4]||(t[4]=t=>e.sourceType._version=t),type:"number",hint:"Version number of this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{label:"_change_date",modelValue:e.sourceType._change_date,"onUpdate:modelValue":t[5]||(t[5]=t=>e.sourceType._change_date=t),hint:"Date this record was changed","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{items:e.userOptions,"item-title":"name","item-value":"id",label:"user",modelValue:e.sourceType._user,"onUpdate:modelValue":t[6]||(t[6]=t=>e.sourceType._user=t),hint:e.userOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{items:e.statusOptions,"item-title":"name","item-value":"id",label:"status",modelValue:e.sourceType._status,"onUpdate:modelValue":t[7]||(t[7]=t=>e.sourceType._status=t),hint:e.statusOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"comments",modelValue:e.sourceType.comments,"onUpdate:modelValue":t[8]||(t[8]=t=>e.sourceType.comments=t),hint:"Free text comments on this record, for example description of changes made etc","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(h,{onClick:e.createSourceType},{default:(0,n.w5)((()=>[(0,n.Uk)("Create SourceType")])),_:1},8,["onClick"])])),_:1})])),_:1})}l(774);var a=l(4870),o=l(3238),i=l(6572),r=l(1888),p=l(6596),m=l(2900),d=l(240),c=l(6422),h=l(870),V=l(3968),_=l(1995),y=l(8394),f=l(9597),T=l(2815),v=l(6544),k=(0,n.aZ)({name:"SourceTypeForm",props:{},methods:{parseLinks(e){let t;return t=e&&e.length>0?JSON.stringify(e):"",t}},components:{VCard:o._,VCardTitle:i.E,VCardText:r.Z,VCardItem:p._,VTextField:m.hw,VSelect:d.r,VForm:c.O,VBtn:h.T,VueDatePicker:y.Z,LinkForm:_.Z},setup(){const e=(0,a.iH)([]),t=e=>{console.log("updating links"),m.value.links=e},l=(0,V.lL)(f.Z),u=(0,n.Fl)((()=>l.all())),s=(0,n.Fl)((()=>null!==m.value._user?"description"in m.value._user?m.value._user.description:"":"Select user")),o=(0,V.lL)(T.Z),i=(0,n.Fl)((()=>o.all())),r=(0,n.Fl)((()=>null!==m.value._status?"description"in m.value._status?m.value._status.description:"":"Select status")),p=(0,V.lL)(v.Z),m=(0,a.iH)(p.make()),d=async()=>{let e={};Object.assign(e,m.value),await p.save(e),c()},c=()=>{Object.assign(m.value,p.make())};return{sourceType:m,createSourceType:d,resetSourceType:c,links:e,updateLinks:t,userOptions:u,userOptionsHint:s,statusOptions:i,statusOptionsHint:r}}}),W=l(89);const w=(0,W.Z)(k,[["render",s]]);var b=w,g={name:"sourceTypeForm",components:{SourceType:b}};const U=(0,W.Z)(g,[["render",u]]);var O=U}}]);
//# sourceMappingURL=8983.bc756118.js.map