(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{316:function(e,t,r){e.exports=r.p+"img/profile.db12f5e.png"},343:function(e,t,r){"use strict";r.r(t);r(88);var n=r(8),o=(r(68),r(43),r(49)),l={data:function(){return{username:"",email:null,profileImage:null,fileErrorMsg:null}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getUser();case 2:return t.next=4,e.getProfileImage();case 4:console.log(e.profileImage);case 5:case"end":return t.stop()}}),t)})))()},methods:{getUser:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.auth.getSession();case 2:return r=t.sent,data=r.data,t.next=6,o.a.from("user").select("username").eq("id",data.session.user.id);case 6:n=t.sent,(l=n.data)&&(e.username=l[0].username,e.email=data.session.user.email);case 9:case"end":return t.stop()}}),t)})))()},handleSave:function(){this.updateUsername(),this.profileImage&&this.saveImageProfile()},updateUsername:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.auth.getSession();case 2:return r=t.sent,data=r.data,t.next=6,o.a.from("user").update({username:e.username}).eq("id",data.session.user.id).select();case 6:n=t.sent,(l=n.data)&&console.log(l);case 9:case"end":return t.stop()}}),t)})))()},saveImageProfile:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,c,m,f,data,d,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.profileImage,t.next=3,o.a.storage.from("user image").upload("user-"+e.username,r,{cacheControl:"3600",upsert:!0});case 3:if(n=t.sent,!(l=n.data)){t.next=22;break}if(c=o.a.storage.from("user image").getPublicUrl("user-"+e.username),!(m=c.data)||null===l){t.next=20;break}return t.next=10,o.a.auth.getSession();case 10:return f=t.sent,data=f.data,t.next=14,o.a.from("user").update({image_url:m.publicUrl}).eq("id",data.session.user.id).select();case 14:if(d=t.sent,!(v=d.error)){t.next=18;break}throw v;case 18:e.profileImage=m.publicUrl,console.log(e.profileImage);case 20:t.next=23;break;case 22:e.profileImage=null;case 23:case"end":return t.stop()}}),t)})))()},getProfileImage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.auth.getSession();case 2:return r=t.sent,data=r.data,t.next=6,o.a.from("user").select("image_url").eq("id",data.session.user.id);case 6:n=t.sent,(l=n.data)&&null!==l?(console.log(l[0].image_url),e.profileImage=l[0].image_url,console.log(e.profileImage)):e.profileImage=null;case 9:case"end":return t.stop()}}),t)})))()},onFileChange:function(e){var t=e.target.files[0];t&&this.isFileValid(t)?this.profileImage=t:(this.profileImage=null,this.fileErrorMsg="Invalid file type. Please choose a valid image file (JPEG or PNG).")},isFileValid:function(e){return e&&["image/jpeg","image/png"].includes(e.type)}}},c=r(22),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container rounded bg-white mt-5 mb-5"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4"},[t("div",{staticClass:"d-flex flex-column align-items-center text-center p-3 py-5"},[t("img",{staticClass:"rounded-circle mt-5",attrs:{width:"150px",height:"150px",src:e.profileImage?"".concat(e.profileImage,"?time=").concat((new Date).getTime()):r(316),alt:"Profile"}}),t("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.username))]),t("span",{staticClass:"text-black-50"},[e._v(e._s(e.email))]),t("span")])]),e._v(" "),t("div",{staticClass:"col-md-8"},[t("div",{staticClass:"p-3 py-5"},[e._m(0),e._v(" "),t("div",{staticClass:"row mt-2"},[t("div",{staticClass:"col-md-12"},[t("label",{staticClass:"labels"},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"formFile"}},[e._v("Profile Image")]),e._v(" "),t("input",{staticClass:"form-control",attrs:{id:"formFile",type:"file"},on:{change:e.onFileChange}})]),e._v(" "),e.fileErrorMsg?t("div",{staticClass:"text-danger"},[e._v("\n            "+e._s(e.fileErrorMsg)+"\n          ")]):e._e()]),e._v(" "),t("div",{staticClass:"mt-5 text-center"},[t("button",{staticClass:"btn btn-primary profile-button",attrs:{type:"button"},on:{click:e.handleSave}},[e._v("\n            Save Profile\n          ")])])])])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[e("h4",{staticClass:"text-right"},[this._v("Profile Settings")])])}],!1,null,null,null);t.default=component.exports}}]);