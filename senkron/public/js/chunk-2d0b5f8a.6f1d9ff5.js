(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b5f8a"],{"1abf":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-row",[e("b-col",{attrs:{cols:"12",md:"8"}},[e("b-card",{attrs:{title:t.$t("Edit Language")}},[e("b-row",[e("b-col",{attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"form-label-group"},[e("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors.name&&null,placeholder:t.$t("Name")},model:{value:t.data.name,callback:function(a){t.$set(t.data,"name",a)},expression:"data.name"}}),t.errors.name?e("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.name[0]))]):t._e(),e("label",[t._v(t._s(t.$t("Name")))])],1)]),t._v(" "),e("b-col",{attrs:{md:"6",cols:"12"}},[e("div",{staticClass:"form-label-group"},[e("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors.english_name&&null,placeholder:t.$t("English Name")},model:{value:t.data.english_name,callback:function(a){t.$set(t.data,"english_name",a)},expression:"data.english_name"}}),t.errors.english_name?e("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.english_name[0]))]):t._e(),e("label",[t._v(t._s(t.$t("English Name")))])],1)]),e("b-col",{attrs:{md:"6",cols:"12"}},[e("div",{staticClass:"form-label-group"},[e("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors.code&&null,placeholder:t.$t("Code")},model:{value:t.data.code,callback:function(a){t.$set(t.data,"code",a)},expression:"data.code"}}),t.errors.code?e("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.code[0]))]):t._e(),e("label",[t._v(t._s(t.$t("Code")))])],1)]),e("b-col",{attrs:{md:"6",cols:"12"}},[e("upload",{on:{"on-file-error":t.UpdateFileError},model:{value:t.data.image,callback:function(a){t.$set(t.data,"image",a)},expression:"data.image"}})],1)],1)],1)],1),e("b-col",{attrs:{cols:"12",md:"4"}},[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-card",[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-button",{staticClass:"w-100 mb-1",attrs:{variant:"gradient-success"},on:{click:t.update}},[t._v(" "+t._s(t.$t("Update"))+" ")]),e("b-button",{staticClass:"w-100",attrs:{variant:"gradient-danger"},on:{click:t.resetData}},[t._v(" "+t._s(t.$t("Reset Form"))+" ")])],1)],1)],1)],1)],1)],1)],1)],1)},r=[],l={data:function(){return{data:{name:"",image:null,code:"",english_name:""},errors:[],fileErrors:""}},computed:{Element:function(){return this.$store.getters["language/GetElement"]}},watch:{},created:function(){this.getData()},methods:{resetData:function(){this.data={name:"",code:"",english_name:"",image:null},this.errors=[]},UpdateFileError:function(t){this.fileErrors=t},getData:function(){var t=this;this.$store.dispatch("language/GetElement",this.$route.params.language).then((function(){t.data=t.Element}))},update:function(){var t=this;this.errors=[],this.$store.dispatch("language/Update",this.data).then((function(){})).catch((function(a){t.errors=a.response.data.errors}))}}},n=l,o=e("2877"),c=Object(o["a"])(n,s,r,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b5f8a.6f1d9ff5.js.map