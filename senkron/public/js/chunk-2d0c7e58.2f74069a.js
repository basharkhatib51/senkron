(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7e58"],{5326:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app"},[s("div",{staticClass:"auth-wrapper auth-v2"},[s("b-row",{staticClass:"auth-inner m-0"},[s("b-link",{staticClass:"brand-logo",on:{click:function(a){return t.$router.push({name:"home"})}}},[s("h2",{staticClass:"brand-text text-primary ml-1"},[t._v(" "+t._s(t.appName)+" ")])]),s("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5 overflow-hidden",attrs:{lg:"8"}},[s("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[s("auth-image-template")],1)]),s("b-col",{staticClass:"d-flex justify-content-center align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[s("b-row",[s("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[s("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h2"}},[t._v(" "+t._s(t.$t("Welcome to"))+" "+t._s(t.appName)+"! 👋 ")]),s("b-card-text",{staticClass:"mb-2"},[t._v(" "+t._s(t.$t("Please sign-in to your account and start the adventure"))+" ")]),s("b-form",{staticClass:"auth-login-form mt-2",on:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"form-label-group"},[s("b-form-input",{staticClass:"mt-2",attrs:{placeholder:t.$t("Email"),state:!t.ValidationErrors.email&&null},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),t.ValidationErrors.email?s("small",{staticClass:"text-danger"},[t._v(" "+t._s(t.ValidationErrors.email[0])+" ")]):t._e(),s("label",[t._v(t._s(t.$t("Email")))])],1),s("div",{staticClass:"form-label-group"},[s("b-form-input",{staticClass:"mt-2",attrs:{type:"password",placeholder:t.$t("Password"),state:!t.ValidationErrors.email&&null},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),t.ValidationErrors.password?s("small",{staticClass:"text-danger"},[t._v(" "+t._s(t.ValidationErrors.password[0])+" ")]):t._e(),s("label",[t._v(t._s(t.$t("Password")))])],1),s("b-row",[s("b-col",{staticClass:"d-flex justify-content-end"},[s("router-link",{staticClass:"text-primary",attrs:{to:{name:"forget-password"}}},[t._v(" "+t._s(t.$t("Forget Password"))+" ")])],1)],1),s("b-form-group",[s("b-form-checkbox",{attrs:{id:"remember-me",name:"checkbox-1"},model:{value:t.status,callback:function(a){t.status=a},expression:"status"}},[t._v(" "+t._s(t.$t("Remember Me"))+" ")])],1),s("b-button",{attrs:{type:"submit",variant:"primary",block:""},on:{click:t.Login}},[t._v(" "+t._s(t.$t("Sign in"))+" ")])],1)],1)],1)],1)],1)],1)])},o=[],r=s("b91d"),i=s("c0c3"),l={components:{AuthImageTemplate:i["a"]},mixins:[r["a"]],data:function(){return{status:!1,password:"password",email:"demo@demo.com",ValidationErrors:[]}},computed:{appName:function(){return this.$store.getters["app/appName"]},passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"}},beforeCreate:function(){this.$http.get("/sanctum/csrf-cookie")},methods:{Login:function(){var t=this;this.ValidationErrors=[],this.$store.dispatch("auth/Login",{email:this.email,password:this.password,remember_me:this.status}).then((function(){t.$store.dispatch("language/GetElements"),t.$router.push({path:"/acp"})})).catch((function(a){t.ValidationErrors=a.response.data.errors}))},social_login:function(t){this.$store.dispatch("auth/SocialLoginAction",t).then((function(t){t.data.url&&(window.location.href=t.data.url)}))}}},n=l,c=s("2877"),m=Object(c["a"])(n,e,o,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0c7e58.2f74069a.js.map