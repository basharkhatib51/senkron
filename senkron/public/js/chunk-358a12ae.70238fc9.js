(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-358a12ae"],{7085:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{staticClass:"mt-5",attrs:{title:t.$t("Explanation")}},[a("b-row",{staticClass:"mt-1"},[a("b-col",{attrs:{cols:"3"}},[a("b-badge",{attrs:{variant:"light-success"}},[a("font-awesome-icon",{attrs:{icon:["fas","table"]}}),t._v(" "+t._s(t.$t("Created At"))+" ")],1)],1),a("b-col",{attrs:{cols:"3"}},[a("b-badge",{attrs:{variant:"light-warning"}},[a("font-awesome-icon",{attrs:{icon:["fas","calendar-week"]}}),t._v(" "+t._s(t.$t("Updated At"))+" ")],1)],1),a("b-col",{attrs:{cols:"3"}},[a("b-badge",{attrs:{variant:"light-success"}},[a("font-awesome-icon",{attrs:{icon:["fas","trash-restore"]}}),t._v(" "+t._s(t.$t("Restore"))+" ")],1)],1),a("b-col",{attrs:{cols:"3"}},[a("b-badge",{attrs:{variant:"light-danger"}},[a("font-awesome-icon",{attrs:{icon:["fas","calendar-times"]}}),t._v(" "+t._s(t.$t("Deleted At"))+" ")],1)],1)],1)],1)],1)},r=[],n={name:"TrashedExp"},i=n,o=a("2877"),l=Object(o["a"])(i,s,r,!1,null,null,null);e["a"]=l.exports},afa2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{title:t.$t("Restore Product"),"ok-title":t.$t("Restore"),"cancel-title":t.$t("cancel"),"ok-variant":"success","cancel-variant":"primary"},on:{close:function(e){t.restoreElement=!1},cancel:function(e){t.restoreElement=!1},ok:t.ConfirmRestore},model:{value:t.restoreElement,callback:function(e){t.restoreElement=e},expression:"restoreElement"}},[a("b-badge",{staticClass:"mt-1",attrs:{variant:"light-success"}},[t._v(" "+t._s(t.$t("are you sure you want to restore this Product"))+" ")])],1),a("h3",{staticClass:"mb-3"},[t._v(" "+t._s(t.$t("Products"))+" ")]),a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-button",{attrs:{variant:"gradient-success"},on:{click:function(e){return t.$router.push({name:"product.list"})}}},[a("font-awesome-icon",{attrs:{icon:["fas","arrow-left"]}}),t._v(" "+t._s(t.$t("Products"))+" ")],1)],1)],1),a("b-overlay",{attrs:{show:t.elementLoading,rounded:"sm",variant:"transparent",opacity:.8,blur:"2px","spinner-variant":"primary","spinner-type":"grow","spinner-small":""}},[a("b-card",{staticClass:"mt-5"},[a("b-card-title",[a("b-row",[a("b-col",{attrs:{cols:"8"}},[a("h3",[t._v(" "+t._s(t.$t("Tags"))+" ")])]),a("b-col",{attrs:{cols:"4"}},[a("b-input-group",[a("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:t.$t("Type to Search")},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1)],1)],1),t.items.length>0?a("b-table",{staticClass:"table-w-max",attrs:{fields:t.fields,responsive:"sm",filter:t.filter,items:t.items,"per-page":t.perPage,"current-page":t.currentPage},scopedSlots:t._u([{key:"cell(id)",fn:function(e){return[a("b-badge",{attrs:{pill:"",variant:"light-primary"}},[t._v(" "+t._s(e.item.no)+" ")])]}},{key:"cell(category_name)",fn:function(e){return[e.value?a("b-badge",{attrs:{variant:"light-primary"}},[t._v(" "+t._s(e.value)+" ")]):a("b-badge",{attrs:{variant:"light-danger"}},[t._v(" "+t._s(t.$t("Not related yet"))+" ")])]}},{key:"cell(tags_count)",fn:function(e){return[a("b-badge",{attrs:{variant:"light-primary"}},[t._v(" "+t._s(e.value)+" ")])]}},{key:"cell(created_at_updated_at_deleted_at)",fn:function(e){return[a("div",[a("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{title:e.item.created_at,variant:"success",placement:"top"},expression:"{title:data.item.created_at,variant:'success',placement:'top'}",modifiers:{hover:!0}}],attrs:{variant:"light-success"}},[a("font-awesome-icon",{attrs:{icon:["fas","table"]}}),t._v(" "+t._s(e.item.created_from)+" ")],1),a("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{title:e.item.created_at,variant:"warning",placement:"top"},expression:"{ title:data.item.created_at,variant:'warning',placement:'top'}",modifiers:{hover:!0}}],staticClass:"ml-1",attrs:{variant:"light-warning"}},[a("font-awesome-icon",{attrs:{icon:["fas","calendar-week"]}}),t._v(" "+t._s(e.item.updated_from)+" ")],1),a("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{title:e.item.deleted_at,variant:"danger",placement:"top"},expression:"{ title:data.item.deleted_at,variant:'danger',placement:'top'}",modifiers:{hover:!0}}],staticClass:"ml-1",attrs:{variant:"light-danger"}},[a("font-awesome-icon",{attrs:{icon:["fas","calendar-times"]}}),t._v(" "+t._s(e.item.deleted_from)+" ")],1)],1)]}},{key:"cell(pages)",fn:function(e){return[a("b-badge",{attrs:{pill:"",variant:"light-primary"}},[t._v(" "+t._s(e.item["pages_count"])+" Pages ")])]}},{key:"cell(options)",fn:function(e){return[a("div",{staticClass:"w-max"},[a("a",{staticClass:"ml-1 text-success",on:{click:function(a){return t.Restore(e.item.id)}}},[a("font-awesome-icon",{attrs:{icon:["fas","trash-restore"]}}),t._v(" "+t._s(e.value)+" ")],1)])]}}],null,!1,176472099)}):a("b-row",{staticClass:"d-flex justify-content-center"},[a("b-col",{attrs:{cols:"4"}},[a("b-alert",{attrs:{variant:"danger",show:""}},[a("div",{staticClass:"alert-body text-center"},[a("span",[t._v(t._s(t.$t("No Data Available")))])])])],1)],1),a("b-row",[a("b-col",{staticClass:"d-flex justify-content-end mt-2",attrs:{cols:"12"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"center",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1),a("trashed-exp")],1)},r=[],n=a("7085"),i={components:{TrashedExp:n["a"]},data:function(){return{restoreElement:!1,changeStatus:!1,changePassword:!1,perPage:5,currentPage:1,element:null,filter:null}},computed:{fields:function(){return[{key:"id",label:this.$t("id")},{key:"name",label:this.$t("name")},{key:"image",label:this.$t("image")},{key:"tags_count",label:this.$t("tags count")},{key:"category_name",label:this.$t("category")},{key:"created_at_updated_at_deleted_at",label:this.$t("created_at_updated_at_deleted_at")},{key:"options",label:this.$t("options")}]},items:function(){return this.$store.getters["product/Trashed"]},totalRows:function(){return this.items.length}},created:function(){this.$store.dispatch("product/GetTrashed")},methods:{Restore:function(t){this.restoreElement=!0,this.element=t},ConfirmRestore:function(){this.$store.dispatch("product/Restore",this.element)}}},o=i,l=a("2877"),c=Object(l["a"])(o,s,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-358a12ae.70238fc9.js.map