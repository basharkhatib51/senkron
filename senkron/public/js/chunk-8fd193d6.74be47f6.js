(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8fd193d6"],{"0a48":function(e,t,n){},2607:function(e,t,n){"use strict";n.r(t);var a=n("3033"),i=n("aa59"),r=n("042b"),o=n("6957"),l=n("e2f5"),s=n("9f5c"),c=n("809a"),u=n("8a2e"),d=n("5c02"),v=n("eef9"),p={components:{BLink:i.a,BNavbarNav:r.a,Bookmarks:o.a,Locale:l.a,DarkToggler:s.a,SearchBar:c.a,CartDropdown:u.a,NotificationDropdown:d.a,UserDropdown:v.a},props:{toggleVerticalMenuActive:{type:Function,default:function(){}}}},m=n("2877"),f=Object(m.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-container d-flex content align-items-center"},[n("ul",{staticClass:"nav navbar-nav d-xl-none"},[n("li",{staticClass:"nav-item"},[n("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[n("feather-icon",{attrs:{icon:"MenuIcon",size:"21"}})],1)],1)]),n("div",{staticClass:"bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"},[n("bookmarks")],1),n("b-navbar-nav",{staticClass:"nav align-items-center ml-auto"},[n("locale"),n("dark-Toggler",{staticClass:"d-none d-lg-block"}),n("search-bar"),n("cart-dropdown"),n("notification-dropdown"),n("user-dropdown")],1)],1)}),[],!1,null,null,null),b=f.exports,h=n("4918"),g=n("1dff"),w={components:{BLink:i.a,BImg:h.a},setup:function(){var e=g.c.app;return{appName:e.appName,appLogoImage:e.appLogoImage}}},C=w,O=Object(m.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-header d-xl-block d-none"},[n("ul",{staticClass:"nav navbar-nav"},[n("li",{staticClass:"nav-item"},[n("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("span",{staticClass:"brand-logo"},[n("b-img",{attrs:{src:e.appLogoImage,alt:"logo"}})],1),n("h2",{staticClass:"brand-text mb-0"},[e._v(" "+e._s(e.appName)+" ")])])],1)])])}),[],!1,null,null,null),k=O.exports,y=n("62cb"),A=n("b8f2"),M=n("d0b9"),_=n("ed09"),j=n("1ae3"),z=n("e08f"),N=n("0d19"),H=n("4360");var x=[{header:"Pages",icon:"FileIcon",children:[{title:"Home",route:"home",icon:"HomeIcon"},{title:"Second Page",route:"second-page",icon:"FileIcon"}]}],L=n("42cb"),I=n("185c"),V=n("5959");var T={components:{BLink:i.a},mixins:[{watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}}],props:{item:{type:Object,required:!0}},setup:function(e){var t=function(e){var t=Object(_.ref)(!1);return{isActive:t,updateIsActive:function(){t.value=Object(V.b)(e)}}}(e.item),n=t.isActive,a=t.updateIsActive,i=Object(L.a)().t;return{isActive:n,updateIsActive:a,canViewHorizontalNavMenuHeaderLink:Object(I.a)().canViewHorizontalNavMenuHeaderLink,t:i}}},$=T,G=Object(m.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewHorizontalNavMenuHeaderLink(e.item)?n("li",{staticClass:"nav-item",class:{"sidebar-group-active active":e.isActive}},[n("b-link",{staticClass:"nav-link",attrs:{to:{name:e.item.route}}},[n("feather-icon",{attrs:{size:"14",icon:e.item.icon}}),n("span",[e._v(e._s(e.t(e.item.title)))])],1)],1):e._e()}),[],!1,null,null,null),B=G.exports;var D={components:{BLink:i.a},mixins:[{watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}}],props:{item:{type:Object,required:!0}},setup:function(e){var t=function(e){var t=Object(_.ref)(!1),n=Object(V.c)(e);return{isActive:t,linkProps:n,updateIsActive:function(){t.value=Object(V.b)(e)}}}(e.item),n=t.isActive,a=t.linkProps,i=t.updateIsActive,r=Object(L.a)().t;return{isActive:n,linkProps:a,updateIsActive:i,canViewHorizontalNavMenuLink:Object(I.a)().canViewHorizontalNavMenuLink,t:r}}},E=D,R=Object(m.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewHorizontalNavMenuLink(e.item)?n("li",{class:{active:e.isActive,disabled:e.item.disabled}},[n("b-link",e._b({staticClass:"dropdown-item"},"b-link",e.linkProps,!1),[n("feather-icon",{attrs:{icon:e.item.icon||"CircleIcon",size:"24"}}),n("span",{staticClass:"menu-title"},[e._v(e._s(e.t(e.item.title)))])],1)],1):e._e()}),[],!1,null,null,null),P=R.exports;var S={name:"HorizontalNavMenuGroup",components:{HorizontalNavMenuLink:P,BLink:i.a},mixins:[{watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}}],props:{item:{type:Object,required:!0}},setup:function(e){var t=function(e){var t=Object(_.ref)(null),n=Object(_.ref)(!1),a=Object(_.ref)(!1),i=Object(_.ref)(!1);return{isOpen:a,isActive:i,updateGroupOpen:function(e){a.value=e,e?Object(_.nextTick)((function(){var e=t.value.offsetWidth,a=window.innerWidth-16,i=t.value.getBoundingClientRect().left+e-a;n.value=i>0;var r=t.value.getBoundingClientRect().top,o=t.value.getBoundingClientRect().height;if(window.innerHeight-r-o-28<1){var l=window.innerHeight-r-70;t.value.style.maxHeight="".concat(l,"px"),t.value.style.overflowY="auto",t.value.style.overflowX="hidden"}})):n.value=!1},updateIsActive:function(){i.value=Object(V.a)(e.children)},refChildDropdown:t,openChildDropdownOnLeft:n}}(e.item),n=t.refChildDropdown,a=t.isActive,i=t.isOpen,r=t.updateGroupOpen,o=t.updateIsActive,l=t.openChildDropdownOnLeft,s=Object(L.a)().t,c=Object(I.a)().canViewVerticalNavMenuGroup;return{refChildDropdown:n,openChildDropdownOnLeft:l,resolveNavItemComponent:V.d,isOpen:i,isActive:a,updateGroupOpen:r,updateIsActive:o,canViewVerticalNavMenuGroup:c,t:s}}},q=S,F=Object(m.a)(q,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewVerticalNavMenuGroup(e.item)?n("li",{staticClass:"dropdown dropdown-submenu",class:{show:e.isOpen,disabled:e.item.disabled,"sidebar-group-active active open":e.isActive,openLeft:e.openChildDropdownOnLeft},on:{mouseenter:function(){return e.updateGroupOpen(!0)},mouseleave:function(){return e.updateGroupOpen(!1)}}},[n("b-link",{staticClass:"dropdown-item",class:{"dropdown-toggle":e.item.children},attrs:{href:"#"},on:{click:function(){return e.updateGroupOpen(!e.isOpen)}}},[n("feather-icon",{attrs:{icon:e.item.icon||"CircleIcon"}}),n("span",{staticClass:"menu-title"},[e._v(e._s(e.t(e.item.title)))])],1),n("ul",{ref:"refChildDropdown",staticClass:"dropdown-menu"},e._l(e.item.children,(function(t){return n(e.resolveNavItemComponent(t),{key:t.header||t.title,ref:"groupChild",refInFor:!0,tag:"component",attrs:{item:t}})})),1)],1):e._e()}),[],!1,null,null,null),U=F.exports,W={components:{BLink:i.a,HorizontalNavMenuGroup:U,HorizontalNavMenuLink:P},mixins:[{watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}}],props:{item:{type:Object,required:!0}},setup:function(e){var t=function(e){var t=Object(_.ref)(!1),n=Object(_.ref)(!1);return{isOpen:t,isActive:n,updateGroupOpen:function(e){t.value=e},updateIsActive:function(){n.value=Object(V.a)(e.children)}}}(e.item),n=t.isActive,a=t.updateIsActive,i=t.isOpen,r=t.updateGroupOpen,o=Object(L.a)().t,l=Object(I.a)().canViewHorizontalNavMenuHeaderGroup;return{isOpen:i,isActive:n,updateGroupOpen:r,updateIsActive:a,resolveHorizontalNavMenuItemComponent:V.d,canViewHorizontalNavMenuHeaderGroup:l,t:o}}},J=W,Y=Object(m.a)(J,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewHorizontalNavMenuHeaderGroup(e.item)?n("li",{staticClass:"dropdown nav-item",class:{"sidebar-group-active active open":e.isActive,show:e.isOpen},on:{mouseenter:function(){return e.updateGroupOpen(!0)},mouseleave:function(){return e.updateGroupOpen(!1)}}},[n("b-link",{staticClass:"nav-link dropdown-toggle d-flex align-items-center"},[n("feather-icon",{attrs:{size:"14",icon:e.item.icon}}),n("span",[e._v(e._s(e.t(e.item.header)))])],1),n("ul",{staticClass:"dropdown-menu"},e._l(e.item.children,(function(t){return n(e.resolveHorizontalNavMenuItemComponent(t),{key:t.title,tag:"component",attrs:{item:t}})})),1)],1):e._e()}),[],!1,null,null,null),X={components:{HorizontalNavMenuHeaderLink:B,HorizontalNavMenuHeaderGroup:Y.exports},props:{items:{type:Array,required:!0}},setup:function(){return{resolveNavComponent:function(e){return e.children?"horizontal-nav-menu-header-group":"horizontal-nav-menu-header-link"}}}},K=X,Q=Object(m.a)(K,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"nav navbar-nav",attrs:{id:"main-menu-navigation"}},e._l(e.items,(function(t){return n(e.resolveNavComponent(t),{key:t.header||t.title,tag:"component",attrs:{item:t}})})),1)}),[],!1,null,null,null),Z={components:{HorizontalNavMenuItems:Q.exports},setup:function(){return{navMenuItems:x}}},ee=(n("e77f"),Object(m.a)(Z,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-container main-menu-content"},[n("horizontal-nav-menu-items",{attrs:{items:e.navMenuItems}})],1)}),[],!1,null,null,null)),te=ee.exports,ne=n("2c28"),ae=n("32b8"),ie={watch:{$route:function(){this.$store.state.app.windowWidth<g.a.xl&&(this.isVerticalMenuActive=!1)}}},re={components:{AppBreadcrumb:a.a,AppNavbarHorizontalLayout:b,AppNavbarHorizontalLayoutBrand:k,AppFooter:y.a,HorizontalNavMenu:te,BNavbar:M.a,LayoutContentRendererDefault:j.a,LayoutContentRendererLeft:z.a,LayoutContentRendererLeftDetached:N.a,VerticalNavMenu:ne.a},mixins:[ie],computed:{layoutContentRenderer:function(){var e=this.$route.meta.contentRenderer;return"sidebar-left"===e?"layout-content-renderer-left":"sidebar-left-detached"===e?"layout-content-renderer-left-detached":"layout-content-renderer-default"}},setup:function(){var e=Object(A.a)(),t=e.skin,n=e.navbarType,a=e.footerType,i=e.routerTransition,r=e.isNavMenuHidden,o=Object(ae.a)(n,a),l=o.isVerticalMenuActive,s=o.toggleVerticalMenuActive,c=o.overlayClasses,u=o.resizeHandler;u(),window.addEventListener("resize",u),Object(_.onUnmounted)((function(){window.removeEventListener("resize",u)}));var d=function(e,t,n){var a=Object(_.computed)((function(){return H.a.getters["app/currentBreakPoint"]}));return{layoutClasses:Object(_.computed)((function(){var i=[];return"xl"===a.value?i.push("horizontal-menu"):(i.push("vertical-overlay-menu"),i.push(n.value?"menu-open":"menu-hide")),i.push("navbar-".concat(e.value)),"sticky"===t.value&&i.push("footer-fixed"),"static"===t.value&&i.push("footer-static"),"hidden"===t.value&&i.push("footer-hidden"),i})),navbarMenuTypeClass:Object(_.computed)((function(){return"sticky"===e.value?"fixed-top":"static"===e.value?"":"hidden"===e.value?"d-none":"floating-nav"})),footerTypeClass:Object(_.computed)((function(){return"static"===t.value?"footer-static":"hidden"===t.value?"d-none":""}))}}(n,a,l),v=d.navbarMenuTypeClass,p=d.layoutClasses,m=d.footerTypeClass,f=function(){var e=Object(_.ref)(null),t=function(){e.value=window.scrollY};return window.addEventListener("scroll",t),Object(_.onUnmounted)((function(){window.removeEventListener("scroll",t)})),{scrolledTo:e}}();return{skin:t,layoutClasses:p,navbarType:n,navbarMenuTypeClass:v,isNavMenuHidden:r,routerTransition:i,footerTypeClass:m,scrolledTo:f.scrolledTo,isVerticalMenuActive:l,toggleVerticalMenuActive:s,overlayClasses:c}}},oe=re,le=(n("c9bd"),Object(m.a)(oe,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"horizontal-layout",class:[e.layoutClasses],staticStyle:{height:"inherit"},attrs:{"data-col":e.isNavMenuHidden?"1-column":null}},[n("b-navbar",{staticClass:"header-navbar navbar-shadow align-items-center navbar-brand-center navbar-fixed",class:{"fixed-top":"xl"!==e.$store.getters["app/currentBreakPoint"]},style:{backgroundColor:"static"===e.navbarType&&e.scrolledTo&&"light"===e.skin?"white":null,boxShadow:"static"===e.navbarType&&e.scrolledTo?"rgba(0, 0, 0, 0.05) 0px 4px 20px 0px":null},attrs:{toggleable:!1}},[e._t("navbar",(function(){return[n("app-navbar-horizontal-layout-brand"),n("app-navbar-horizontal-layout",{attrs:{"toggle-vertical-menu-active":e.toggleVerticalMenuActive}})]}),{toggleVerticalMenuActive:e.toggleVerticalMenuActive})],2),n("div",{staticClass:"horizontal-menu-wrapper"},[e.isNavMenuHidden?e._e():n("div",{staticClass:"header-navbar navbar-expand-sm navbar navbar-horizontal navbar-light navbar-shadow menu-border d-none d-xl-block",class:[e.navbarMenuTypeClass]},[n("horizontal-nav-menu")],1),n("vertical-nav-menu",{staticClass:"d-block d-xl-none",attrs:{"is-vertical-menu-active":e.isVerticalMenuActive,"toggle-vertical-menu-active":e.toggleVerticalMenuActive},scopedSlots:e._u([{key:"header",fn:function(t){return[e._t("vertical-menu-header",null,null,t)]}}],null,!0)})],1),n("div",{staticClass:"sidenav-overlay",class:e.overlayClasses,on:{click:function(t){e.isVerticalMenuActive=!1}}}),n("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[n(e.layoutContentRenderer,{key:"layout-content-renderer-left"===e.layoutContentRenderer?e.$route.meta.navActiveLink||e.$route.name:null,tag:"component",scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,n){return{key:n,fn:function(t){return[e._t(n,null,null,t)]}}}))],null,!0)})],1),n("footer",{staticClass:"footer footer-light",class:[e.footerTypeClass]},[e._t("footer",(function(){return[n("app-footer")]}))],2),e._t("customizer")],2)}),[],!1,null,null,null)),se={components:{LayoutHorizontal:le.exports,Navbar:n("cb50").a,AppNavbarHorizontalLayoutBrand:k},data:function(){return{}}},ce=Object(m.a)(se,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-horizontal",{scopedSlots:e._u([{key:"navbar",fn:function(e){var t=e.toggleVerticalMenuActive;return[n("app-navbar-horizontal-layout-brand"),n("navbar",{attrs:{"toggle-vertical-menu-active":t}})]}}])},[n("router-view")],1)}),[],!1,null,null,null);t.default=ce.exports},"3c2b":function(e,t,n){},c9bd:function(e,t,n){"use strict";n("0a48")},e77f:function(e,t,n){"use strict";n("3c2b")}}]);
