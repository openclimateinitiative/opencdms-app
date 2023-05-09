"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[7736],{3625:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(7327),i=l(3968),s=l(2407),o=l(9597),a=l(2815);class u extends i.Hn{static fields(){return{id:this.string(""),name:this.string(""),links:this.attr(new s.Z([])),_version:this.number(null),_change_date:this.string(""),_user_id:this.string(""),_user:this.belongsTo(o.Z,"_user_id"),_status_id:this.string(""),_status:this.belongsTo(a.Z,"_status_id"),comments:this.string("")}}}(0,n.Z)(u,"entity","collection")},7736:function(e,t,l){l.r(t),l.d(t,{default:function(){return F}});var n=l(3396);function i(e,t,l,i,s,o){const a=(0,n.up)("Collection",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(a)])}function s(e,t,l,i,s,o){const a=(0,n.up)("v-card-title"),u=(0,n.up)("v-text-field"),r=(0,n.up)("v-card-item"),c=(0,n.up)("LinkForm"),d=(0,n.up)("VueDatePicker"),m=(0,n.up)("v-select"),p=(0,n.up)("v-form"),_=(0,n.up)("v-btn"),h=(0,n.up)("v-card-text"),V=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(V,null,{default:(0,n.w5)((()=>[(0,n.Wm)(a,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Create new 'Collection'")])),_:1}),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{label:"id",modelValue:e.collection.id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.collection.id=t),hint:"ID / primary key","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{label:"name",modelValue:e.collection.name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.collection.name=t),hint:"Name of collection","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{links:e.links,onUpdateLinks:e.updateLinks},null,8,["links","onUpdateLinks"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{label:"_version",modelValue:e.collection._version,"onUpdate:modelValue":t[2]||(t[2]=t=>e.collection._version=t),type:"number",hint:"Version number of this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{label:"_change_date",modelValue:e.collection._change_date,"onUpdate:modelValue":t[3]||(t[3]=t=>e.collection._change_date=t),hint:"Date this record was changed","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{items:e.userOptions,"item-title":"name","item-value":"id",label:"user",modelValue:e.collection._user,"onUpdate:modelValue":t[4]||(t[4]=t=>e.collection._user=t),hint:e.userOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{items:e.statusOptions,"item-title":"name","item-value":"id",label:"status",modelValue:e.collection._status,"onUpdate:modelValue":t[5]||(t[5]=t=>e.collection._status=t),hint:e.statusOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{label:"comments",modelValue:e.collection.comments,"onUpdate:modelValue":t[6]||(t[6]=t=>e.collection.comments=t),hint:"Free text comments on this record, for example description of changes made etc","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(_,{onClick:e.createCollection},{default:(0,n.w5)((()=>[(0,n.Uk)("Create Collection")])),_:1},8,["onClick"])])),_:1})])),_:1})}l(774);var o=l(4870),a=l(3238),u=l(6572),r=l(1888),c=l(6596),d=l(2900),m=l(240),p=l(6422),_=l(870),h=l(3968),V=l(1995),f=l(8394),v=l(9597),k=l(2815),g=l(3625),w=(0,n.aZ)({name:"CollectionForm",props:{},methods:{parseLinks(e){let t;return t=e&&e.length>0?JSON.stringify(e):"",t}},components:{VCard:a._,VCardTitle:u.E,VCardText:r.Z,VCardItem:c._,VTextField:d.hw,VSelect:m.r,VForm:p.O,VBtn:_.T,VueDatePicker:f.Z,LinkForm:V.Z},setup(){const e=(0,o.iH)([]),t=e=>{console.log("updating links"),d.value.links=e},l=(0,h.lL)(v.Z),i=(0,n.Fl)((()=>l.all())),s=(0,n.Fl)((()=>null!==d.value._user?"description"in d.value._user?d.value._user.description:"":"Select user")),a=(0,h.lL)(k.Z),u=(0,n.Fl)((()=>a.all())),r=(0,n.Fl)((()=>null!==d.value._status?"description"in d.value._status?d.value._status.description:"":"Select status")),c=(0,h.lL)(g.Z),d=(0,o.iH)(c.make()),m=async()=>{let e={};Object.assign(e,d.value),await c.save(e),p()},p=()=>{Object.assign(d.value,c.make())};return{collection:d,createCollection:m,resetCollection:p,links:e,updateLinks:t,userOptions:i,userOptionsHint:s,statusOptions:u,statusOptionsHint:r}}}),W=l(89);const b=(0,W.Z)(w,[["render",s]]);var C=b,Z={name:"collectionForm",components:{Collection:C}};const O=(0,W.Z)(Z,[["render",i]]);var F=O}}]);
//# sourceMappingURL=7736.3d30935b.js.map