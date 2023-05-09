"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[1235],{621:function(e,t,i){i.d(t,{Z:function(){return p}});var n=i(7327),l=i(3968),s=(i(2407),i(5206)),a=i(6902),d=i(6294),o=i(2838),r=i(7923),u=i(9597),m=i(2815);class p extends l.Hn{static fields(){return{id:this.string(""),host_id:this.string(""),host:this.belongsTo(s.Z,"host_id"),observer_id:this.string(""),observer:this.belongsTo(a.Z,"observer_id"),valid_from:this.string(""),valid_to:this.string(""),installation_height:this.number(null),reference_surface_id:this.string(""),reference_surface:this.belongsTo(d.Z,"reference_surface_id"),exposure_id:this.string(""),exposure:this.belongsTo(o.Z,"exposure_id"),configuration:this.string(""),maintenance_schedule_id:this.string(""),maintenance_schedule:this.belongsTo(r.Z,"maintenance_schedule_id"),_version:this.number(null),_change_date:this.string(""),_user_id:this.string(""),_user:this.belongsTo(u.Z,"_user_id"),_status_id:this.string(""),_status:this.belongsTo(m.Z,"_status_id"),comments:this.string("")}}}(0,n.Z)(p,"entity","deployment")},3050:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(7327),l=i(3968),s=(i(2407),i(6709));class a extends l.Hn{static fields(){return{id:this.string(""),media_type_id:this.string(""),media_type:this.belongsTo(s.Z,"media_type_id"),description:this.string(""),created:this.string(""),creator:this.string(""),rights:this.number(null),source:this.string(""),data:this.attr(null)}}}(0,n.Z)(a,"entity","media")},6902:function(e,t,i){i.d(t,{Z:function(){return r}});var n=i(7327),l=i(3968),s=i(2407),a=i(9947),d=i(9597),o=i(2815);class r extends l.Hn{static fields(){return{id:this.string(""),name:this.string(""),description:this.string(""),links:this.attr(new s.Z([])),location:this.string(""),elevation:this.number(null),manufacturer:this.string(""),model:this.string(""),serial_number:this.string(""),firmware_version:this.string(""),control_schedule_id:this.string(""),control_schedule:this.belongsTo(a.Z,"control_schedule_id"),_version:this.number(null),_change_date:this.string(""),_user_id:this.string(""),_user:this.belongsTo(d.Z,"_user_id"),_status_id:this.string(""),_status:this.belongsTo(o.Z,"_status_id"),comments:this.string("")}}}(0,n.Z)(r,"entity","observer")},1235:function(e,t,i){i.r(t),i.d(t,{default:function(){return H}});var n=i(3396);function l(e,t,i,l,s,a){const d=(0,n.up)("DeploymentMedia",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(d)])}function s(e,t,i,l,s,a){const d=(0,n.up)("v-card-title"),o=(0,n.up)("v-text-field"),r=(0,n.up)("v-card-item"),u=(0,n.up)("v-select"),m=(0,n.up)("VueDatePicker"),p=(0,n.up)("v-form"),_=(0,n.up)("v-btn"),h=(0,n.up)("v-card-text"),c=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Create new 'DeploymentMedia'")])),_:1}),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,{label:"id",modelValue:e.deploymentMedia.id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.deploymentMedia.id=t),hint:"Primary key for this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{items:e.deploymentOptions,"item-title":"name","item-value":"id",label:"deployment",modelValue:e.deploymentMedia.deployment,"onUpdate:modelValue":t[1]||(t[1]=t=>e.deploymentMedia.deployment=t),hint:e.deploymentOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{items:e.mediaOptions,"item-title":"name","item-value":"id",label:"media",modelValue:e.deploymentMedia.media,"onUpdate:modelValue":t[2]||(t[2]=t=>e.deploymentMedia.media=t),hint:e.mediaOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{label:"valid_from",modelValue:e.deploymentMedia.valid_from,"onUpdate:modelValue":t[3]||(t[3]=t=>e.deploymentMedia.valid_from=t),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{label:"valid_to",modelValue:e.deploymentMedia.valid_to,"onUpdate:modelValue":t[4]||(t[4]=t=>e.deploymentMedia.valid_to=t),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,{label:"_version",modelValue:e.deploymentMedia._version,"onUpdate:modelValue":t[5]||(t[5]=t=>e.deploymentMedia._version=t),type:"number",hint:"Version number of this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{label:"_change_date",modelValue:e.deploymentMedia._change_date,"onUpdate:modelValue":t[6]||(t[6]=t=>e.deploymentMedia._change_date=t),hint:"Date this record was changed","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{items:e.userOptions,"item-title":"name","item-value":"id",label:"user",modelValue:e.deploymentMedia._user,"onUpdate:modelValue":t[7]||(t[7]=t=>e.deploymentMedia._user=t),hint:e.userOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{items:e.statusOptions,"item-title":"name","item-value":"id",label:"status",modelValue:e.deploymentMedia._status,"onUpdate:modelValue":t[8]||(t[8]=t=>e.deploymentMedia._status=t),hint:e.statusOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,{label:"comments",modelValue:e.deploymentMedia.comments,"onUpdate:modelValue":t[9]||(t[9]=t=>e.deploymentMedia.comments=t),hint:"Free text comments on this record, for example description of changes made etc","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(_,{onClick:e.createDeploymentMedia},{default:(0,n.w5)((()=>[(0,n.Uk)("Create DeploymentMedia")])),_:1},8,["onClick"])])),_:1})])),_:1})}i(774);var a=i(4870),d=i(3238),o=i(6572),r=i(1888),u=i(6596),m=i(2900),p=i(240),_=i(6422),h=i(870),c=i(3968),g=i(1995),v=i(8394),y=i(621),f=i(3050),b=i(9597),V=i(2815),Z=i(7327);i(2407);class M extends c.Hn{static fields(){return{id:this.string(""),deployment_id:this.string(""),deployment:this.belongsTo(y.Z,"deployment_id"),media_id:this.number(null),media:this.belongsTo(f.Z,"media_id"),valid_from:this.string(""),valid_to:this.string(""),_version:this.number(null),_change_date:this.string(""),_user_id:this.string(""),_user:this.belongsTo(b.Z,"_user_id"),_status_id:this.string(""),_status:this.belongsTo(V.Z,"_status_id"),comments:this.string("")}}}(0,Z.Z)(M,"entity","deployment_media");var w=(0,n.aZ)({name:"DeploymentMediaForm",props:{},methods:{parseLinks(e){let t;return t=e&&e.length>0?JSON.stringify(e):"",t}},components:{VCard:d._,VCardTitle:o.E,VCardText:r.Z,VCardItem:u._,VTextField:m.hw,VSelect:p.r,VForm:_.O,VBtn:h.T,VueDatePicker:v.Z,LinkForm:g.Z},setup(){const e=(0,a.iH)([]),t=e=>{console.log("updating links"),Z.value.links=e},i=(0,c.lL)(y.Z),l=(0,n.Fl)((()=>i.all())),s=(0,n.Fl)((()=>null!==Z.value.deployment?"description"in Z.value.deployment?Z.value.deployment.description:"":"Select deployment")),d=(0,c.lL)(f.Z),o=(0,n.Fl)((()=>d.all())),r=(0,n.Fl)((()=>null!==Z.value.media?"description"in Z.value.media?Z.value.media.description:"":"Select media")),u=(0,c.lL)(b.Z),m=(0,n.Fl)((()=>u.all())),p=(0,n.Fl)((()=>null!==Z.value._user?"description"in Z.value._user?Z.value._user.description:"":"Select user")),_=(0,c.lL)(V.Z),h=(0,n.Fl)((()=>_.all())),g=(0,n.Fl)((()=>null!==Z.value._status?"description"in Z.value._status?Z.value._status.description:"":"Select status")),v=(0,c.lL)(M),Z=(0,a.iH)(v.make()),w=async()=>{let e={};Object.assign(e,Z.value),await v.save(e),W()},W=()=>{Object.assign(Z.value,v.make())};return{deploymentMedia:Z,createDeploymentMedia:w,resetDeploymentMedia:W,links:e,updateLinks:t,deploymentOptions:l,deploymentOptionsHint:s,mediaOptions:o,mediaOptionsHint:r,userOptions:m,userOptionsHint:p,statusOptions:h,statusOptionsHint:g}}}),W=i(89);const k=(0,W.Z)(w,[["render",s]]);var O=k,T={name:"deploymentMediaForm",components:{DeploymentMedia:O}};const F=(0,W.Z)(T,[["render",l]]);var H=F}}]);
//# sourceMappingURL=1235.1b1aeb33.js.map