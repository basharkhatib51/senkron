(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0b1c71"],{"20fc":function(t,e,a){"use strict";a.r(e);var s={data:function(){return{data:{title:"",image:null,background:null,content:"",excerpt:"",layout:"",status:"",slider_id:null},code_mode:!1,builder:!1,errors:[],fileErrors:""}},computed:{Categories:function(){return this.$store.getters["serviceCategory/GetElements"]},StatusOptions:function(){return[{value:"published",text:this.$t("Published")},{value:"waiting_for_review",text:this.$t("Waiting For Review")}]},LayoutOptions:function(){return[{value:"without_menu",text:this.$t("Without Menu")},{value:"full",text:this.$t("Full")}]},TypeOptions:function(){return[{value:"normal",text:this.$t("Normal")},{value:"service",text:this.$t("Service")}]},Sliders:function(){return this.$store.getters["slider/GetElements"]},Tags:function(){return this.$store.getters["tag/GetElements"]}},created:function(){this.$store.dispatch("slider/GetElements"),this.$store.dispatch("serviceCategory/GetElements"),this.$store.dispatch("tag/GetElements")},methods:{change_code_mode:function(){this.code_mode=!this.code_mode},resetData:function(){this.data={title:"",image:null,background:null,content:"",excerpt:"",layout:"",status:""},this.errors=[]},setBoolean:function(t){void 0===this.data[t]&&(this.data[t]=!1)},UpdateFileError:function(t){this.fileErrors=t},create:function(){var t=this;this.errors=[],this.$store.dispatch("page/Create",this.data).then((function(){t.data={title:"",image:null,background:null,content:"",excerpt:"",layout:"",status:""}})).catch((function(e){t.errors=e.response.data.errors}))}}},r=a("2877"),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",[a("b-col",{attrs:{cols:"12",md:"8"}},[a("b-card",{attrs:{title:t.$t("Create New Page")}},[a("b-tabs",[a("b-tab",{attrs:{title:t.$t("Page Data")}},[a("b-row",[a("b-col",{attrs:{cols:"12",md:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors.title&&null,placeholder:t.$t("Title")},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}}),t.errors.title?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.title[0]))]):t._e(),a("label",[t._v(t._s(t.$t("Title")))])],1)]),a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("quill-upload",{model:{value:t.data.content,callback:function(e){t.$set(t.data,"content",e)},expression:"data.content"}}),!1===t.code_mode?a("quill-editor",{staticClass:"mt-1",model:{value:t.data.content,callback:function(e){t.$set(t.data,"content",e)},expression:"data.content"}}):t._e(),!0===t.code_mode?a("b-form-textarea",{staticClass:"my-2",model:{value:t.data.content,callback:function(e){t.$set(t.data,"content",e)},expression:"data.content"}}):t._e(),a("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(e){t.code_mode=!t.code_mode}}},[t._v(" "+t._s(!1===t.code_mode?t.$t("Code mode"):t.$t("Editor mode"))+" ")]),t.errors.content?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.content[0]))]):t._e(),a("label",[t._v(t._s(t.$t("Content")))])],1)]),a("b-col",{attrs:{cols:"12",md:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-textarea",{staticClass:"mt-2",attrs:{rows:"4",placeholder:t.$t("Excerpt"),state:!t.errors.excerpt&&null},model:{value:t.data.excerpt,callback:function(e){t.$set(t.data,"excerpt",e)},expression:"data.excerpt"}}),t.errors.excerpt?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.excerpt[0]))]):t._e(),a("label",[t._v(t._s(t.$t("Excerpt")))])],1)])],1)],1),t._l(t.Languages,(function(e,s){return a("b-tab",{key:s,scopedSlots:t._u([{key:"title",fn:function(){return[a("img",{staticClass:"mr-1",attrs:{width:"25px",src:t.full_path(e.image_url)}}),a("span",[t._v(t._s(e.english_name))])]},proxy:!0}],null,!0)},[a("b-row",[a("b-col",{attrs:{cols:"12",md:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors.title&&null,placeholder:t.$t("Title")},model:{value:t.data["title_"+e.code],callback:function(a){t.$set(t.data,"title_"+e.code,a)},expression:"data[`title_${el.code}`]"}}),t.errors.title?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.title[0]))]):t._e(),a("label",[t._v(t._s(t.$t("Title")))])],1)]),a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("quill-upload",{model:{value:t.data["content_"+e.code],callback:function(a){t.$set(t.data,"content_"+e.code,a)},expression:"data[`content_${el.code}`]"}}),!1===t.code_mode?a("quill-editor",{staticClass:"mt-1",model:{value:t.data["content_"+e.code],callback:function(a){t.$set(t.data,"content_"+e.code,a)},expression:"data[`content_${el.code}`]"}}):t._e(),!0===t.code_mode?a("b-form-textarea",{staticClass:"my-2",model:{value:t.data["content_"+e.code],callback:function(a){t.$set(t.data,"content_"+e.code,a)},expression:"data[`content_${el.code}`]"}}):t._e(),a("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(e){t.code_mode=!t.code_mode}}},[t._v(" "+t._s(!1===t.code_mode?t.$t("Code mode"):t.$t("Editor mode"))+" ")]),t.errors.content?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.content[0]))]):t._e(),a("label",[t._v(t._s(t.$t("Content")))])],1)]),a("b-col",{attrs:{cols:"12",md:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-textarea",{staticClass:"mt-2",attrs:{rows:"4",placeholder:t.$t("Excerpt"),state:!t.errors.excerpt&&null},model:{value:t.data["excerpt_"+e.code],callback:function(a){t.$set(t.data,"excerpt_"+e.code,a)},expression:"data[`excerpt_${el.code}`]"}}),t.errors.excerpt?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.excerpt[0]))]):t._e(),a("label",[t._v(t._s(t.$t("Excerpt")))])],1)])],1)],1)}))],2)],1)],1),a("b-col",{attrs:{cols:"12",md:"4"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Options")}},[a("b-col",{staticClass:"mb-1",attrs:{cols:"12"}},[a("div",[a("label",[t._v(t._s(t.$t("Type")))]),a("v-select",{attrs:{dir:t.$store.state.appConfig.isRTL?"rtl":"ltr",label:"text",reduce:function(t){return t.value},options:t.TypeOptions},model:{value:t.data.type,callback:function(e){t.$set(t.data,"type",e)},expression:"data.type"}}),t.errors.type?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.type[0]))]):t._e()],1)]),"service"===t.data.type?a("b-col",{staticClass:"mb-1",attrs:{cols:"12"}},[a("div",[a("label",[t._v(t._s(t.$t("Service Category")))]),a("v-select",{attrs:{dir:t.$store.state.appConfig.isRTL?"rtl":"ltr",label:"name",reduce:function(t){return t.id},options:t.Categories},model:{value:t.data.category,callback:function(e){t.$set(t.data,"category",e)},expression:"data.category"}}),t.errors.layout?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.layout[0]))]):t._e()],1)]):t._e(),a("b-col",{staticClass:"mb-1",attrs:{cols:"12"}},[a("div",[a("label",[t._v(t._s(t.$t("Layout")))]),a("v-select",{attrs:{dir:t.$store.state.appConfig.isRTL?"rtl":"ltr",label:"text",reduce:function(t){return t.value},options:t.LayoutOptions},model:{value:t.data.layout,callback:function(e){t.$set(t.data,"layout",e)},expression:"data.layout"}}),t.errors.layout?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.layout[0]))]):t._e()],1)]),a("b-col",{attrs:{cols:"12",md:"12"}},[a("div",[a("label",[t._v(t._s(t.$t("Status")))]),a("v-select",{attrs:{dir:t.$store.state.appConfig.isRTL?"rtl":"ltr",label:"text",reduce:function(t){return t.value},options:t.StatusOptions},model:{value:t.data.status,callback:function(e){t.$set(t.data,"status",e)},expression:"data.status"}}),t.errors.status?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.status[0]))]):t._e()],1)])],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Tags")}},[a("label",[t._v(t._s(t.$t("please select"))+"...")]),a("v-select",{attrs:{multiple:"",options:t.Tags,reduce:function(t){return t.id},label:"name"},model:{value:t.data.tags,callback:function(e){t.$set(t.data,"tags",e)},expression:"data.tags"}}),t.errors.tags?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.tags[0]))]):t._e()],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Slider")}},[a("label",[t._v(t._s(t.$t("please select"))+"...")]),a("v-select",{attrs:{options:t.Sliders,reduce:function(t){return t.id},label:"name"},model:{value:t.data.slider_id,callback:function(e){t.$set(t.data,"slider_id",e)},expression:"data.slider_id"}}),t.errors.slider_id?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.slider_id[0]))]):t._e()],1)],1),a("b-col",{staticClass:"justify-content-center",attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Image")}},[a("b-row",[a("b-col",{staticClass:"d-flex justify-content-center",attrs:{cols:"12"}},[a("upload",{on:{"on-file-error":t.UpdateFileError},model:{value:t.data.image,callback:function(e){t.$set(t.data,"image",e)},expression:"data.image"}})],1),a("b-col",{staticClass:"d-flex justify-content-center mt-2",attrs:{cols:"12"}},[t.errors.image?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.image[0]))]):t._e()]),a("b-col",{attrs:{cols:"12"}},[t.fileErrors.length>0?a("b-alert",{attrs:{variant:"danger",show:""}},[a("h4",{staticClass:"alert-heading"},[t._v(" "+t._s(t.$t("Upload Image Error"))+" ")]),a("div",{staticClass:"alert-body"},[a("span",t._l(t.fileErrors,(function(e,s){return a("ul",{key:s},[a("li",[t._v(t._s(e))])])})),0)])]):t._e()],1)],1)],1)],1),a("b-col",{staticClass:"justify-content-center",attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Background")}},[a("b-row",[a("b-col",{staticClass:"d-flex justify-content-center",attrs:{cols:"12"}},[a("upload",{on:{"on-file-error":t.UpdateFileError},model:{value:t.data.background,callback:function(e){t.$set(t.data,"background",e)},expression:"data.background"}})],1),a("b-col",{staticClass:"d-flex justify-content-center mt-2",attrs:{cols:"12"}},[t.errors.background?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.background[0]))]):t._e()]),a("b-col",{attrs:{cols:"12"}},[t.fileErrors.length>0?a("b-alert",{attrs:{variant:"danger",show:""}},[a("h4",{staticClass:"alert-heading"},[t._v(" "+t._s(t.$t("Upload Image Error"))+" ")]),a("div",{staticClass:"alert-body"},[a("span",t._l(t.fileErrors,(function(e,s){return a("ul",{key:s},[a("li",[t._v(t._s(e))])])})),0)])]):t._e()],1)],1)],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-card",[a("b-button",{staticClass:"w-100",attrs:{variant:"gradient-success"},on:{click:t.create}},[t._v(" "+t._s(t.$t("Create"))+" ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);
