(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0b95ba"],{3337:function(a,e,t){"use strict";t.r(e);var s={data:function(){return{data:{name:"",code:"",english_name:"",image:null},errors:[],fileErrors:""}},methods:{resetData:function(){this.data={name:"",code:"",english_name:"",image:null},this.errors=[]},UpdateFileError:function(a){this.fileErrors=a},create:function(){var a=this;this.errors=[],this.$store.dispatch("language/Create",this.data).then((function(){a.data={name:"",code:"",english_name:"",image:null}})).catch((function(e){a.errors=e.response.data.errors}))}}},r=t("2877"),l=Object(r.a)(s,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("b-row",[t("b-col",{attrs:{cols:"12",md:"8"}},[t("b-card",{attrs:{title:a.$t("Create New Language")}},[t("b-row",[t("b-col",{attrs:{md:"6",cols:"12"}},[t("div",{staticClass:"form-label-group"},[t("b-form-input",{staticClass:"mt-2",attrs:{state:!a.errors.name&&null,placeholder:a.$t("Name")},model:{value:a.data.name,callback:function(e){a.$set(a.data,"name",e)},expression:"data.name"}}),a.errors.name?t("small",{staticClass:"text-danger"},[a._v(a._s(a.errors.name[0]))]):a._e(),t("label",[a._v(a._s(a.$t("Name")))])],1)]),t("b-col",{attrs:{md:"6",cols:"12"}},[t("div",{staticClass:"form-label-group"},[t("b-form-input",{staticClass:"mt-2",attrs:{state:!a.errors.english_name&&null,placeholder:a.$t("English Name")},model:{value:a.data.english_name,callback:function(e){a.$set(a.data,"english_name",e)},expression:"data.english_name"}}),a.errors.english_name?t("small",{staticClass:"text-danger"},[a._v(a._s(a.errors.english_name[0]))]):a._e(),t("label",[a._v(a._s(a.$t("English Name")))])],1)]),t("b-col",{attrs:{md:"6",cols:"12"}},[t("div",{staticClass:"form-label-group"},[t("b-form-input",{staticClass:"mt-2",attrs:{state:!a.errors.code&&null,placeholder:a.$t("Code")},model:{value:a.data.code,callback:function(e){a.$set(a.data,"code",e)},expression:"data.code"}}),a.errors.code?t("small",{staticClass:"text-danger"},[a._v(a._s(a.errors.code[0]))]):a._e(),t("label",[a._v(a._s(a.$t("Code")))])],1)]),t("b-col",{attrs:{md:"6",cols:"12"}},[t("upload",{on:{"on-file-error":a.UpdateFileError},model:{value:a.data.image,callback:function(e){a.$set(a.data,"image",e)},expression:"data.image"}})],1)],1)],1)],1),t("b-col",{attrs:{cols:"12",md:"4"}},[t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("b-card",[t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("b-button",{staticClass:"w-100",attrs:{variant:"gradient-success"},on:{click:a.create}},[a._v(" "+a._s(a.$t("Create"))+" ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);
