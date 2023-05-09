"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[5995],{5995:function(t,e,i){i.r(e),i.d(e,{default:function(){return C}});var l=i(3396);function n(t,e,i,n,o,s){const a=(0,l.up)("HostAffiliation",!0);return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(a)])}function o(t,e,i,n,o,s){const a=(0,l.up)("v-card-title"),r=(0,l.up)("v-text-field"),u=(0,l.up)("v-card-item"),m=(0,l.up)("v-select"),d=(0,l.up)("VueDatePicker"),f=(0,l.up)("v-form"),h=(0,l.up)("v-btn"),p=(0,l.up)("v-card-text"),c=(0,l.up)("v-card");return(0,l.wg)(),(0,l.j4)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(a,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Create new 'HostAffiliation'")])),_:1}),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{label:"id",modelValue:t.hostAffiliation.id,"onUpdate:modelValue":e[0]||(e[0]=e=>t.hostAffiliation.id=e),hint:"Primary key for this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{items:t.hostOptions,"item-title":"name","item-value":"id",label:"host",modelValue:t.hostAffiliation.host,"onUpdate:modelValue":e[1]||(e[1]=e=>t.hostAffiliation.host=e),hint:t.hostOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{items:t.programmeOptions,"item-title":"name","item-value":"id",label:"programme",modelValue:t.hostAffiliation.programme,"onUpdate:modelValue":e[2]||(e[2]=e=>t.hostAffiliation.programme=e),hint:t.programmeOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{label:"valid_from",modelValue:t.hostAffiliation.valid_from,"onUpdate:modelValue":e[3]||(e[3]=e=>t.hostAffiliation.valid_from=e),hint:"Date from which the details for this record are valid","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{label:"valid_to",modelValue:t.hostAffiliation.valid_to,"onUpdate:modelValue":e[4]||(e[4]=e=>t.hostAffiliation.valid_to=e),hint:"Date after which the details for this record are no longer valid","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{label:"_version",modelValue:t.hostAffiliation._version,"onUpdate:modelValue":e[5]||(e[5]=e=>t.hostAffiliation._version=e),type:"number",hint:"Version number of this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{label:"_change_date",modelValue:t.hostAffiliation._change_date,"onUpdate:modelValue":e[6]||(e[6]=e=>t.hostAffiliation._change_date=e),hint:"Date this record was changed","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{items:t.userOptions,"item-title":"name","item-value":"id",label:"user",modelValue:t.hostAffiliation._user,"onUpdate:modelValue":e[7]||(e[7]=e=>t.hostAffiliation._user=e),hint:t.userOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{items:t.statusOptions,"item-title":"name","item-value":"id",label:"status",modelValue:t.hostAffiliation._status,"onUpdate:modelValue":e[8]||(e[8]=e=>t.hostAffiliation._status=e),hint:t.statusOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{label:"comments",modelValue:t.hostAffiliation.comments,"onUpdate:modelValue":e[9]||(e[9]=e=>t.hostAffiliation.comments=e),hint:"Free text comments on this record, for example description of changes made etc","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(h,{onClick:t.createHostAffiliation},{default:(0,l.w5)((()=>[(0,l.Uk)("Create HostAffiliation")])),_:1},8,["onClick"])])),_:1})])),_:1})}i(774);var s=i(4870),a=i(3238),r=i(6572),u=i(1888),m=i(6596),d=i(2900),f=i(240),h=i(6422),p=i(870),c=i(3968),_=i(1995),v=i(8394),g=i(5206),V=i(5317),A=i(9597),b=i(2815),w=i(7327);i(2407);class W extends c.Hn{static fields(){return{id:this.string(""),host_id:this.string(""),host:this.belongsTo(g.Z,"host_id"),programme_id:this.string(""),programme:this.belongsTo(V.Z,"programme_id"),valid_from:this.string(""),valid_to:this.string(""),_version:this.number(null),_change_date:this.string(""),_user_id:this.string(""),_user:this.belongsTo(A.Z,"_user_id"),_status_id:this.string(""),_status:this.belongsTo(b.Z,"_status_id"),comments:this.string("")}}}(0,w.Z)(W,"entity","host_affiliation");var O=(0,l.aZ)({name:"HostAffiliationForm",props:{},methods:{parseLinks(t){let e;return e=t&&t.length>0?JSON.stringify(t):"",e}},components:{VCard:a._,VCardTitle:r.E,VCardText:u.Z,VCardItem:m._,VTextField:d.hw,VSelect:f.r,VForm:h.O,VBtn:p.T,VueDatePicker:v.Z,LinkForm:_.Z},setup(){const t=(0,s.iH)([]),e=t=>{console.log("updating links"),w.value.links=t},i=(0,c.lL)(g.Z),n=(0,l.Fl)((()=>i.all())),o=(0,l.Fl)((()=>null!==w.value.host?"description"in w.value.host?w.value.host.description:"":"Select host")),a=(0,c.lL)(V.Z),r=(0,l.Fl)((()=>a.all())),u=(0,l.Fl)((()=>null!==w.value.programme?"description"in w.value.programme?w.value.programme.description:"":"Select programme")),m=(0,c.lL)(A.Z),d=(0,l.Fl)((()=>m.all())),f=(0,l.Fl)((()=>null!==w.value._user?"description"in w.value._user?w.value._user.description:"":"Select user")),h=(0,c.lL)(b.Z),p=(0,l.Fl)((()=>h.all())),_=(0,l.Fl)((()=>null!==w.value._status?"description"in w.value._status?w.value._status.description:"":"Select status")),v=(0,c.lL)(W),w=(0,s.iH)(v.make()),O=async()=>{let t={};Object.assign(t,w.value),await v.save(t),k()},k=()=>{Object.assign(w.value,v.make())};return{hostAffiliation:w,createHostAffiliation:O,resetHostAffiliation:k,links:t,updateLinks:e,hostOptions:n,hostOptionsHint:o,programmeOptions:r,programmeOptionsHint:u,userOptions:d,userOptionsHint:f,statusOptions:p,statusOptionsHint:_}}}),k=i(89);const H=(0,k.Z)(O,[["render",o]]);var Z=H,F={name:"hostAffiliationForm",components:{HostAffiliation:Z}};const U=(0,k.Z)(F,[["render",n]]);var C=U}}]);
//# sourceMappingURL=5995.9e367633.js.map