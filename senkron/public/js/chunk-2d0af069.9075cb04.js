(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0af069"],{"0d21":function(t,e,a){"use strict";a.r(e);var s={data:function(){return{data:{image:null,parent_menu:null},errors:[],fileErrors:""}},computed:{Pages:function(){return this.$store.getters["page/GetElements"]},TypeOptions:function(){return[{value:"url",text:this.$t("Url")},{value:"page",text:this.$t("Page")},{value:"route",text:this.$t("Route")}]},Menus:function(){return this.$store.getters["menu/GetElements"]}},created:function(){this.$store.dispatch("page/GetElements"),this.$store.dispatch("menu/GetElements")},methods:{resetData:function(){this.data={image:null,parent_menu:null},this.errors=[]},UpdateFileError:function(t){this.fileErrors=t},create:function(){var t=this;this.errors=[],this.$store.dispatch("menu/Create",this.data).then((function(){t.data={image:null,parent_menu:null}})).catch((function(e){t.errors=e.response.data.errors}))}}},r=a("2877"),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",[a("b-col",{attrs:{cols:"12",md:"8"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Create New Menu Element")}},[a("b-row",[a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",[a("label",[t._v(t._s(t.$t("Type")))]),a("v-select",{attrs:{dir:t.$store.state.appConfig.isRTL?"rtl":"ltr",label:"text",reduce:function(t){return t.value},options:t.TypeOptions},model:{value:t.data.type,callback:function(e){t.$set(t.data,"type",e)},expression:"data.type"}}),t.errors.type?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.type[0]))]):t._e()],1)]),a("b-col",{attrs:{md:"6",cols:"12"}},[a("label",[t._v(t._s(t.$t("Belongs To Another Element")))]),a("v-select",{attrs:{options:t.Menus,reduce:function(t){return t.id},label:"name"},model:{value:t.data.parent_menu,callback:function(e){t.$set(t.data,"parent_menu",e)},expression:"data.parent_menu"}}),t.errors.parent_menu?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.parent_menu[0]))]):t._e()],1),a("b-col",{attrs:{md:"6",cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors.name&&null,placeholder:t.$t("Name")},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}}),t.errors.name?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.name[0]))]):t._e(),a("label",[t._v(t._s(t.$t("Name")))])],1)]),"page"===t.data.type?a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",[a("label",[t._v(t._s(t.$t("Choose Page")))]),a("v-select",{attrs:{dir:t.$store.state.appConfig.isRTL?"rtl":"ltr",label:"title",reduce:function(t){return t.id},options:t.Pages},model:{value:t.data.url,callback:function(e){t.$set(t.data,"url",e)},expression:"data.url"}}),t.errors.type?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.type[0]))]):t._e()],1)]):a("b-col",{attrs:{md:"6",cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors.url&&null,placeholder:t.$t("Url")},model:{value:t.data.url,callback:function(e){t.$set(t.data,"url",e)},expression:"data.url"}}),t.errors.url?a("small",{staticClass:"text-danger"},[t._v(" "+t._s(t.errors.url[0])+" ")]):t._e(),a("label",[t._v(t._s(t.$t("Url")))])],1)])],1)],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Multi Language Columns")}},[a("b-tabs",t._l(t.Languages,(function(e,s){return a("b-tab",{key:s,scopedSlots:t._u([{key:"title",fn:function(){return[a("img",{staticClass:"mr-1",attrs:{width:"25px",src:t.full_path(e.image_url)}}),a("span",[t._v(t._s(e.english_name))])]},proxy:!0}],null,!0)},[a("b-row",[a("b-col",{attrs:{md:"6",cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{placeholder:t.$t("Name")},model:{value:t.data["name_"+e.code],callback:function(a){t.$set(t.data,"name_"+e.code,a)},expression:"data[`name_${el.code}`]"}})],1)])],1)],1)})),1)],1)],1)],1)],1),a("b-col",{attrs:{cols:"12",md:"4"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-card",[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-button",{staticClass:"w-100",attrs:{variant:"gradient-success"},on:{click:t.create}},[t._v(" "+t._s(t.$t("Create"))+" ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);
