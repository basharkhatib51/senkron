(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0519bece"],{"830c":function(t,e,a){"use strict";var s=a("5530"),r={name:"EditDetail",props:{value:{default:null,type:Boolean},data:{default:null,type:Object}},data:function(){return{detail_data:{key:"",value:""},errors:"",fileErrors:""}},computed:{isActive:{get:function(){return this.getData(),this.value},set:function(t){this.$emit("input",t)}}},methods:{getData:function(){this.detail_data=Object(s.a)({},this.data)},resetData:function(){this.detail_data={key:"",value:""},this.errors=null},ConfirmEdit:function(){this.detail_data.key||this.detail_data.value?(this.$emit("edit-detail",this.detail_data),this.resetData()):this.errors="the key and value fields are required"}}},l=r,o=a("2877"),i=Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{title:t.$t("EditDetail"),"ok-title":t.$t("Confirm"),"cancel-title":t.$t("Cancel"),"ok-variant":"success","no-close-on-backdrop":""},on:{ok:t.ConfirmEdit},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[t.detail_data?a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors&&null,placeholder:t.$t("Key")},model:{value:t.detail_data.key,callback:function(e){t.$set(t.detail_data,"key",e)},expression:"detail_data.key"}}),t.errors?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors))]):t._e(),a("label",[t._v(t._s(t.$t("Key")))])],1)]),a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors&&null,placeholder:t.$t("Value")},model:{value:t.detail_data.value,callback:function(e){t.$set(t.detail_data,"value",e)},expression:"detail_data.value"}}),t.errors?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors))]):t._e(),a("label",[t._v(t._s(t.$t("Value")))])],1)]),a("b-col",{staticClass:"mt-5",attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Multi Language Columns"),"border-variant":"primary"}},[a("b-tabs",t._l(t.Languages,(function(e,s){return a("b-tab",{key:s,scopedSlots:t._u([{key:"title",fn:function(){return[a("img",{staticClass:"mr-1",attrs:{width:"25px",src:t.full_path(e.image_url)}}),a("span",[t._v(t._s(e.english_name))])]},proxy:!0}],null,!0)},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors&&null,placeholder:t.$t("Key")},model:{value:t.detail_data["key_"+e.code],callback:function(a){t.$set(t.detail_data,"key_"+e.code,a)},expression:"detail_data[`key_${el.code}`]"}}),t.errors?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors))]):t._e(),a("label",[t._v(t._s(t.$t("Key")))])],1)]),a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors&&null,placeholder:t.$t("Value")},model:{value:t.detail_data["value_"+e.code],callback:function(a){t.$set(t.detail_data,"value_"+e.code,a)},expression:"detail_data[`value_${el.code}`]"}}),t.errors?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors))]):t._e(),a("label",[t._v(t._s(t.$t("Value")))])],1)])],1)],1)})),1)],1)],1)],1)],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.a=i.exports},9697:function(t,e,a){"use strict";a.r(e);var s=(a("a434"),a("e1f0")),r={components:{EditDetail:a("830c").a,CreateDetail:s.a},data:function(){return{product_data:{description:"",images:[],details:[]},errors:[],fileErrors:"",perPage:5,currentPage:1,editDetail:!1,editArray:[],indexDetail:""}},computed:{totalRows:function(){return this.items.length},items:function(){return this.product_data.details},fields:function(){return[{key:"key",label:this.$t("key")},{key:"value",label:this.$t("value")},{key:"options",label:this.$t("options")}]},Element:function(){return this.$store.getters["product/GetElement"]},Tags:function(){return this.$store.getters["tag/GetElements"]},Categories:function(){return this.$store.getters["category/GetElements"]}},created:function(){var t=this;this.$store.dispatch("category/GetElements"),this.$store.dispatch("tag/GetElements"),this.$store.dispatch("product/GetElement",this.$route.params.product).then((function(){t.product_data=t.Element}))},methods:{ConfirmEdit:function(t){this.indexDetail>-1&&(this.product_data.details.splice(this.indexDetail,1),this.product_data.details.push(t))},CreateDetail:function(t){this.product_data.details.push(t)},Delete:function(t){t>-1&&this.product_data.details.splice(t,1)},Edit:function(t,e){this.editDetail=!0,this.editArray=t,this.indexDetail=e},resetData:function(){this.product_data={details:[],images:[]},this.errors=[]},UpdateFileError:function(t){this.fileErrors=t},update:function(){var t=this;this.errors=[],this.$store.dispatch("product/Update",{id:this.$route.params.product,data:this.product_data}).then((function(){})).catch((function(e){t.errors=e.response.data.errors}))}}},l=r,o=a("2877"),i=Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",[a("b-col",{attrs:{cols:"12",lg:"8"}},[a("b-tabs",[a("b-tab",{attrs:{title:t.$t("Edit Product")}},[a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Edit Product")}},[a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors.name&&null,placeholder:t.$t("Name")},model:{value:t.product_data.name,callback:function(e){t.$set(t.product_data,"name",e)},expression:"product_data.name"}}),t.errors.name?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.name[0]))]):t._e(),a("label",[t._v(t._s(t.$t("Name")))])],1)]),a("b-col",{attrs:{cols:"6"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{type:"number",state:!t.errors.price&&null,placeholder:t.$t("Price")},model:{value:t.product_data.price,callback:function(e){t.$set(t.product_data,"price",e)},expression:"product_data.price"}}),t.errors.price?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.price[0]))]):t._e(),a("label",[t._v(t._s(t.$t("Price")))])],1)]),a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("quill-upload",{model:{value:t.product_data.description,callback:function(e){t.$set(t.product_data,"description",e)},expression:"product_data.description"}}),a("quill-editor",{staticClass:"mt-2",attrs:{options:t.editorOption},model:{value:t.product_data.description,callback:function(e){t.$set(t.product_data,"description",e)},expression:"product_data.description"}}),t.errors.description?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.description[0]))]):t._e(),a("label",[t._v(t._s(t.$t("Description")))])],1)])],1)],1)],1)],1),a("b-tab",{attrs:{title:t.$t("Translation")}},[a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Multi Language Columns")}},[a("b-tabs",t._l(t.Languages,(function(e,s){return a("b-tab",{key:s,scopedSlots:t._u([{key:"title",fn:function(){return[a("img",{staticClass:"mr-1",attrs:{width:"25px",src:t.full_path(e.image_url)}}),a("span",[t._v(t._s(e.english_name))])]},proxy:!0}],null,!0)},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors.name&&null,placeholder:t.$t("Name")},model:{value:t.product_data["name_"+e.code],callback:function(a){t.$set(t.product_data,"name_"+e.code,a)},expression:"product_data[`name_${el.code}`]"}}),t.errors.name?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.name[0]))]):t._e(),a("label",[t._v(t._s(t.$t("Name")))])],1)]),a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("quill-upload",{model:{value:t.product_data["description_"+e.code],callback:function(a){t.$set(t.product_data,"description_"+e.code,a)},expression:"product_data[`description_${el.code}`]"}}),a("quill-editor",{staticClass:"mt-2",attrs:{options:t.editorOption},model:{value:t.product_data["description_"+e.code],callback:function(a){t.$set(t.product_data,"description_"+e.code,a)},expression:"product_data[`description_${el.code}`]"}}),t.errors["description_"+e.code]?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors["description_"+e.code][0]))]):t._e(),a("label",[t._v(t._s(t.$t("Description")))])],1)])],1)],1)})),1)],1)],1)],1)],1)],1),a("b-col",{attrs:{cols:"12",lg:"4"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Tags")}},[a("label",[t._v(t._s(t.$t("please select"))+"...")]),a("v-select",{attrs:{multiple:"",options:t.Tags,reduce:function(t){return t.id},label:"name"},model:{value:t.product_data.tags,callback:function(e){t.$set(t.product_data,"tags",e)},expression:"product_data.tags"}}),t.errors.tags?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.tags[0]))]):t._e()],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Categories")}},[a("label",[t._v(t._s(t.$t("please select"))+"...")]),a("v-select",{attrs:{options:t.Categories,reduce:function(t){return t.id},label:"name"},model:{value:t.product_data.category,callback:function(e){t.$set(t.product_data,"category",e)},expression:"product_data.category"}}),t.errors.categories?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.categories[0]))]):t._e()],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Product Image")}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("upload",{on:{"on-file-error":t.UpdateFileError},model:{value:t.product_data.image_id,callback:function(e){t.$set(t.product_data,"image_id",e)},expression:"product_data.image_id"}})],1)],1)],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Product Images")}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("multi-upload",{model:{value:t.product_data.images,callback:function(e){t.$set(t.product_data,"images",e)},expression:"product_data.images"}})],1)],1)],1)],1),a("b-col",{attrs:{cols:"12"}},[a("create-detail",{on:{"create-detail":t.CreateDetail}})],1),a("b-col",{attrs:{cols:"12"}},[a("edit-detail",{attrs:{data:t.editArray[t.indexDetail]},on:{"edit-detail":t.ConfirmEdit},model:{value:t.editDetail,callback:function(e){t.editDetail=e},expression:"editDetail"}})],1),a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Product Details")}},[t.items.length>0?a("b-table",{staticClass:"table-w-max",attrs:{fields:t.fields,responsive:"sm",items:t.items,"per-page":t.perPage,"current-page":t.currentPage},scopedSlots:t._u([{key:"cell(options)",fn:function(e){return[a("div",{staticClass:"w-max"},[a("a",{staticClass:"text-success",on:{click:function(a){t.Edit(t.items,t.items.indexOf(e.item))}}},[a("font-awesome-icon",{attrs:{icon:["fas","edit"]}})],1),a("a",{staticClass:"ml-2 text-danger",on:{click:function(a){t.Delete(t.items.indexOf(e.item))}}},[a("font-awesome-icon",{attrs:{icon:["fas","trash"]}})],1)])]}}],null,!1,145276447)}):a("b-row",{staticClass:"d-flex justify-content-center"},[a("b-col",{attrs:{cols:"4"}},[a("b-alert",{attrs:{variant:"danger",show:""}},[a("div",{staticClass:"alert-body text-center"},[a("span",[t._v(t._s(t.$t("No Data Available")))])])])],1)],1)],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-card",[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-button",{staticClass:"w-100",attrs:{variant:"gradient-success"},on:{click:t.update}},[t._v(" "+t._s(t.$t("Update"))+" ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports},e1f0:function(t,e,a){"use strict";var s={name:"CreateDetail",data:function(){return{data:{key:"",value:""},errors:""}},methods:{resetData:function(){this.data={key:"",value:""},this.errors=null},create:function(){this.data.key||this.data.value?(this.$emit("create-detail",this.data),this.resetData()):this.errors="the key and value fields are required"}}},r=a("2877"),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-tabs",[a("b-tab",{attrs:{title:t.$t("Create New Detail")}},[a("b-card",{attrs:{title:t.$t("Create New Detail")}},[a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors&&null,placeholder:t.$t("Key")},model:{value:t.data.key,callback:function(e){t.$set(t.data,"key",e)},expression:"data.key"}}),t.errors?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors))]):t._e(),a("label",[t._v(t._s(t.$t("Key")))])],1)]),a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors&&null,placeholder:t.$t("Value")},model:{value:t.data.value,callback:function(e){t.$set(t.data,"value",e)},expression:"data.value"}}),t.errors?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors))]):t._e(),a("label",[t._v(t._s(t.$t("Title")))])],1)]),a("b-col",{attrs:{cols:"12"}},[a("b-button",{staticClass:"w-100",attrs:{variant:"outline-success"},on:{click:t.create}},[t._v(" "+t._s(t.$t("Add New Detail"))+" ")])],1)],1)],1),a("b-tab",{attrs:{title:t.$t("Translation")}},[a("b-col",{attrs:{cols:"12"}},[a("b-card",{attrs:{title:t.$t("Multi Language Columns")}},[a("b-tabs",t._l(t.Languages,(function(e,s){return a("b-tab",{key:s,scopedSlots:t._u([{key:"title",fn:function(){return[a("img",{staticClass:"mr-1",attrs:{width:"25px",src:t.full_path(e.image_url)}}),a("span",[t._v(t._s(e.english_name))])]},proxy:!0}],null,!0)},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors&&null,placeholder:t.$t("title")},model:{value:t.data["key_"+e.code],callback:function(a){t.$set(t.data,"key_"+e.code,a)},expression:"data[`key_${el.code}`]"}}),t.errors?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors))]):t._e(),a("label",[t._v(t._s(t.$t("Key")))])],1)]),a("b-col",{attrs:{cols:"12"}},[a("div",{staticClass:"form-label-group"},[a("b-form-input",{staticClass:"mt-2",attrs:{state:!t.errors&&null,placeholder:t.$t("Value")},model:{value:t.data["value_"+e.code],callback:function(a){t.$set(t.data,"value_"+e.code,a)},expression:"data[`value_${el.code}`]"}}),t.errors?a("small",{staticClass:"text-danger"},[t._v(t._s(t.errors))]):t._e(),a("label",[t._v(t._s(t.$t("Title")))])],1)]),a("b-col",{attrs:{cols:"12"}},[a("b-button",{staticClass:"w-100",attrs:{variant:"outline-success"},on:{click:t.create}},[t._v(" "+t._s(t.$t("Add New Detail"))+" ")])],1)],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=l.exports}}]);
