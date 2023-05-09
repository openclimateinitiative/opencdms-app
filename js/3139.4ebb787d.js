"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[3139],{621:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(7327),i=n(3968),s=(n(2407),n(5206)),o=n(6902),a=n(6294),u=n(2838),r=n(7923),d=n(9597),m=n(2815);class p extends i.Hn{static fields(){return{id:this.string(""),host_id:this.string(""),host:this.belongsTo(s.Z,"host_id"),observer_id:this.string(""),observer:this.belongsTo(o.Z,"observer_id"),valid_from:this.string(""),valid_to:this.string(""),installation_height:this.number(null),reference_surface_id:this.string(""),reference_surface:this.belongsTo(a.Z,"reference_surface_id"),exposure_id:this.string(""),exposure:this.belongsTo(u.Z,"exposure_id"),configuration:this.string(""),maintenance_schedule_id:this.string(""),maintenance_schedule:this.belongsTo(r.Z,"maintenance_schedule_id"),_version:this.number(null),_change_date:this.string(""),_user_id:this.string(""),_user:this.belongsTo(d.Z,"_user_id"),_status_id:this.string(""),_status:this.belongsTo(m.Z,"_status_id"),comments:this.string("")}}}(0,l.Z)(p,"entity","deployment")},6902:function(e,t,n){n.d(t,{Z:function(){return r}});var l=n(7327),i=n(3968),s=n(2407),o=n(9947),a=n(9597),u=n(2815);class r extends i.Hn{static fields(){return{id:this.string(""),name:this.string(""),description:this.string(""),links:this.attr(new s.Z([])),location:this.string(""),elevation:this.number(null),manufacturer:this.string(""),model:this.string(""),serial_number:this.string(""),firmware_version:this.string(""),control_schedule_id:this.string(""),control_schedule:this.belongsTo(o.Z,"control_schedule_id"),_version:this.number(null),_change_date:this.string(""),_user_id:this.string(""),_user:this.belongsTo(a.Z,"_user_id"),_status_id:this.string(""),_status:this.belongsTo(u.Z,"_status_id"),comments:this.string("")}}}(0,l.Z)(r,"entity","observer")},3139:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var l=n(3396);function i(e,t,n,i,s,o){const a=(0,l.up)("Deployment",!0);return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(a)])}function s(e,t,n,i,s,o){const a=(0,l.up)("v-card-title"),u=(0,l.up)("v-text-field"),r=(0,l.up)("v-card-item"),d=(0,l.up)("v-select"),m=(0,l.up)("VueDatePicker"),p=(0,l.up)("v-form"),c=(0,l.up)("v-btn"),h=(0,l.up)("v-card-text"),_=(0,l.up)("v-card");return(0,l.wg)(),(0,l.j4)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(a,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Create new 'Deployment'")])),_:1}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{label:"id",modelValue:e.deployment.id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.deployment.id=t),hint:"Unique ID / primary key for deployment","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{items:e.hostOptions,"item-title":"name","item-value":"id",label:"host",modelValue:e.deployment.host,"onUpdate:modelValue":t[1]||(t[1]=t=>e.deployment.host=t),hint:e.hostOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{items:e.observerOptions,"item-title":"name","item-value":"id",label:"observer",modelValue:e.deployment.observer,"onUpdate:modelValue":t[2]||(t[2]=t=>e.deployment.observer=t),hint:e.observerOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{label:"valid_from",modelValue:e.deployment.valid_from,"onUpdate:modelValue":t[3]||(t[3]=t=>e.deployment.valid_from=t),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{label:"valid_to",modelValue:e.deployment.valid_to,"onUpdate:modelValue":t[4]||(t[4]=t=>e.deployment.valid_to=t),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{label:"installation_height",modelValue:e.deployment.installation_height,"onUpdate:modelValue":t[5]||(t[5]=t=>e.deployment.installation_height=t),type:"number",hint:"Installation height above reference surface (in meters)","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{items:e.referenceSurfaceOptions,"item-title":"name","item-value":"id",label:"reference_surface",modelValue:e.deployment.reference_surface,"onUpdate:modelValue":t[6]||(t[6]=t=>e.deployment.reference_surface=t),hint:e.referenceSurfaceOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{items:e.exposureOptions,"item-title":"name","item-value":"id",label:"exposure",modelValue:e.deployment.exposure,"onUpdate:modelValue":t[7]||(t[7]=t=>e.deployment.exposure=t),hint:e.exposureOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{label:"configuration",modelValue:e.deployment.configuration,"onUpdate:modelValue":t[8]||(t[8]=t=>e.deployment.configuration=t),hint:"Textual description of sensor installation and configuration","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{items:e.maintenanceScheduleOptions,"item-title":"name","item-value":"id",label:"maintenance_schedule",modelValue:e.deployment.maintenance_schedule,"onUpdate:modelValue":t[9]||(t[9]=t=>e.deployment.maintenance_schedule=t),hint:e.maintenanceScheduleOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{label:"_version",modelValue:e.deployment._version,"onUpdate:modelValue":t[10]||(t[10]=t=>e.deployment._version=t),type:"number",hint:"Version number of this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{label:"_change_date",modelValue:e.deployment._change_date,"onUpdate:modelValue":t[11]||(t[11]=t=>e.deployment._change_date=t),hint:"Date this record was changed","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{items:e.userOptions,"item-title":"name","item-value":"id",label:"user",modelValue:e.deployment._user,"onUpdate:modelValue":t[12]||(t[12]=t=>e.deployment._user=t),hint:e.userOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{items:e.statusOptions,"item-title":"name","item-value":"id",label:"status",modelValue:e.deployment._status,"onUpdate:modelValue":t[13]||(t[13]=t=>e.deployment._status=t),hint:e.statusOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{label:"comments",modelValue:e.deployment.comments,"onUpdate:modelValue":t[14]||(t[14]=t=>e.deployment.comments=t),hint:"Free text comments on this record, for example description of changes made etc","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(c,{onClick:e.createDeployment},{default:(0,l.w5)((()=>[(0,l.Uk)("Create Deployment")])),_:1},8,["onClick"])])),_:1})])),_:1})}n(774);var o=n(4870),a=n(3238),u=n(6572),r=n(1888),d=n(6596),m=n(2900),p=n(240),c=n(6422),h=n(870),_=n(3968),f=n(1995),v=n(8394),b=n(5206),g=n(6902),V=n(6294),y=n(2838),W=n(7923),O=n(9597),w=n(2815),Z=n(621),x=(0,l.aZ)({name:"DeploymentForm",props:{},methods:{parseLinks(e){let t;return t=e&&e.length>0?JSON.stringify(e):"",t}},components:{VCard:a._,VCardTitle:u.E,VCardText:r.Z,VCardItem:d._,VTextField:m.hw,VSelect:p.r,VForm:c.O,VBtn:h.T,VueDatePicker:v.Z,LinkForm:f.Z},setup(){const e=(0,o.iH)([]),t=e=>{console.log("updating links"),j.value.links=e},n=(0,_.lL)(b.Z),i=(0,l.Fl)((()=>n.all())),s=(0,l.Fl)((()=>null!==j.value.host?"description"in j.value.host?j.value.host.description:"":"Select host")),a=(0,_.lL)(g.Z),u=(0,l.Fl)((()=>a.all())),r=(0,l.Fl)((()=>null!==j.value.observer?"description"in j.value.observer?j.value.observer.description:"":"Select observer")),d=(0,_.lL)(V.Z),m=(0,l.Fl)((()=>d.all())),p=(0,l.Fl)((()=>null!==j.value.reference_surface?"description"in j.value.reference_surface?j.value.reference_surface.description:"":"Select reference_surface")),c=(0,_.lL)(y.Z),h=(0,l.Fl)((()=>c.all())),f=(0,l.Fl)((()=>null!==j.value.exposure?"description"in j.value.exposure?j.value.exposure.description:"":"Select exposure")),v=(0,_.lL)(W.Z),x=(0,l.Fl)((()=>v.all())),k=(0,l.Fl)((()=>null!==j.value.maintenance_schedule?"description"in j.value.maintenance_schedule?j.value.maintenance_schedule.description:"":"Select maintenance_schedule")),F=(0,_.lL)(O.Z),H=(0,l.Fl)((()=>F.all())),U=(0,l.Fl)((()=>null!==j.value._user?"description"in j.value._user?j.value._user.description:"":"Select user")),S=(0,_.lL)(w.Z),T=(0,l.Fl)((()=>S.all())),D=(0,l.Fl)((()=>null!==j.value._status?"description"in j.value._status?j.value._status.description:"":"Select status")),L=(0,_.lL)(Z.Z),j=(0,o.iH)(L.make()),C=async()=>{let e={};Object.assign(e,j.value),await L.save(e),I()},I=()=>{Object.assign(j.value,L.make())};return{deployment:j,createDeployment:C,resetDeployment:I,links:e,updateLinks:t,hostOptions:i,hostOptionsHint:s,observerOptions:u,observerOptionsHint:r,referenceSurfaceOptions:m,referenceSurfaceOptionsHint:p,exposureOptions:h,exposureOptionsHint:f,maintenanceScheduleOptions:x,maintenanceScheduleOptionsHint:k,userOptions:H,userOptionsHint:U,statusOptions:T,statusOptionsHint:D}}}),k=n(89);const F=(0,k.Z)(x,[["render",s]]);var H=F,U={name:"deploymentForm",components:{Deployment:H}};const S=(0,k.Z)(U,[["render",i]]);var T=S}}]);
//# sourceMappingURL=3139.4ebb787d.js.map