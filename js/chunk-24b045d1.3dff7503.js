(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24b045d1"],{"12b2":function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["default"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,n=e.props,r=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),n.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,r)}})},"169a":function(t,e,i){"use strict";i("6ec0");var n=i("c69d"),r=i("30d4"),s=(i("f7dc"),i("80d2")),a={name:"overlayable",props:{hideOverlay:Boolean},data:function(){return{overlay:null,overlayOffset:0,overlayTimeout:null,overlayTransitionDuration:650}},beforeDestroy:function(){this.removeOverlay()},methods:{genOverlay:function(){var t=this;if(!this.isActive||this.hideOverlay||this.isActive&&this.overlayTimeout||this.overlay)return clearTimeout(this.overlayTimeout),this.overlay&&this.overlay.classList.add("v-overlay--active");this.overlay=document.createElement("div"),this.overlay.className="v-overlay",this.absolute&&(this.overlay.className+=" v-overlay--absolute"),this.hideScroll();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");return e&&e.insertBefore(this.overlay,e.firstChild),this.overlay.clientHeight,requestAnimationFrame(function(){t.overlay&&(t.overlay.className+=" v-overlay--active",void 0!==t.activeZIndex&&(t.overlay.style.zIndex=t.activeZIndex-1))}),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.overlay)return e&&this.showScroll();this.overlay.classList.remove("v-overlay--active"),this.overlayTimeout=setTimeout(function(){try{t.overlay&&t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.overlay=null,e&&t.showScroll()}catch(i){console.log(i)}clearTimeout(t.overlayTimeout),t.overlayTimeout=null},this.overlayTransitionDuration)},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[s["o"].up,s["o"].pageup],i=[s["o"].down,s["o"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e["overflow-y"])&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY||-t.wheelDelta;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,r=window.getSelection().anchorNode;return!this.hasScrollbar(n)||!this.isInside(r,n)||this.shouldScroll(n,i)}for(var s=0;s<e.length;s++){var a=e[s];if(a===document)return!0;if(a===document.documentElement)return!0;if(a===this.$refs.content)return!0;if(this.hasScrollbar(a))return this.shouldScroll(a,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(window.addEventListener("wheel",this.scrollListener),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}},o=i("e949"),c=i("261e"),l=i("98a1"),h=i("c584"),d=i("bfc5"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]={name:"v-dialog",directives:{ClickOutside:h["a"]},mixins:[n["a"],r["a"],a,o["a"],c["a"],l["a"]],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return t={},v(t,("v-dialog "+this.contentClass).trim(),!0),v(t,"v-dialog--active",this.isActive),v(t,"v-dialog--persistent",this.persistent),v(t,"v-dialog--fullscreen",this.fullscreen),v(t,"v-dialog--scrollable",this.scrollable),v(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var t=this;this.$nextTick(function(){t.isBooted=t.isActive,t.isActive&&t.show()})},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(this.$refs.content.contains(t.target)||!this.isActive)&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):Object(s["l"])(this.$refs.content)>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):a.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.$listeners.keydown&&this.bind()},bind:function(){window.addEventListener("keydown",this.onKeydown)},unbind:function(){window.removeEventListener("keydown",this.onKeydown)},onKeydown:function(t){this.$emit("keydown",t)},genActivator:function(){var t=this;if(!this.$slots.activator&&!this.$scopedSlots.activator)return null;var e=this.disabled?{}:{click:function(e){e.stopPropagation(),t.disabled||(t.isActive=!t.isActive)}};if(this.$scopedSlots.activator){var i=this.$scopedSlots.activator({on:e});return this.activatorNode=i,i}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},on:e},[this.$slots.activator])}},render:function(t){var e=this,i=[],n={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){return e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(n.style={maxWidth:"none"===this.maxWidth?void 0:Object(s["b"])(this.maxWidth),width:"auto"===this.width?void 0:Object(s["b"])(this.width)}),i.push(this.genActivator());var r=t("div",n,this.showLazyContent(this.$slots.default));return this.transition&&(r=t("transition",{props:{name:this.transition,origin:this.origin}},[r])),i.push(t("div",{class:this.contentClasses,attrs:u({tabIndex:"-1"},this.getScopeIdAttrs()),style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(d["a"],{props:{root:!0,light:this.light,dark:this.dark}},[r])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.$slots.activator||this.fullWidth?"block":"inline-block"}},i)}}},"23bf":function(t,e,i){"use strict";var n=i("80d2"),r=i("2b0e");e["a"]=r["default"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(n["b"])(this.height),i=Object(n["b"])(this.minHeight),r=Object(n["b"])(this.minWidth),s=Object(n["b"])(this.maxHeight),a=Object(n["b"])(this.maxWidth),o=Object(n["b"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),r&&(t.minWidth=r),s&&(t.maxHeight=s),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},"253d":function(t,e,i){},"4c34":function(t,e,i){},"4c94":function(t,e,i){},"6ec0":function(t,e,i){},"99d9":function(t,e,i){"use strict";var n=i("80d2"),r=i("b0af"),s=(i("253d"),i("4c34"),i("23bf")),a=i("58df"),o=Object(a["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=i("d9bd"),h=c.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(l["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(l["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=t.naturalHeight,s=t.naturalWidth;r||s?e.calculatedAspectRatio=s/r:null!=i&&setTimeout(n,i)};n()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}),d=h.extend({name:"v-card-media",mounted:function(){Object(l["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),u=i("12b2");i.d(e,"a",function(){return v}),i.d(e,"b",function(){return m});var v=Object(n["e"])("v-card__actions"),m=Object(n["e"])("v-card__text");r["a"],u["a"]},b0af:function(t,e,i){"use strict";i("4c94"),i("d0e7");var n=i("b64a"),r=i("2b0e");function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var a=r["default"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?s({},"elevation-"+this.computedElevation,!0):{}}}}),o=i("23bf"),c=i("6a18"),l=i("58df"),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},d=Object(l["a"])(n["a"],a,o["a"],c["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return h({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),u=d,v=i("0d01"),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e["a"]=Object(l["a"])(v["a"],u).extend({name:"v-card",props:{elevation:{type:[Number,String],default:2},flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return m({"v-card":!0,"v-card--hover":this.hover},u.options.computed.classes.call(this))},computedElevation:function(){return this.flat?0:this.raised?3:u.options.computed.computedElevation.call(this)},styles:function(){var t=m({},u.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,n=e.data;return n.style=this.styles,t(i,this.setBackgroundColor(this.color,n),this.$slots.default)}})},d021:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{persistent:""},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[i("v-card",[i("v-card-title",[i("v-icon",{attrs:{large:"",left:"",color:"warning"}},[t._v("warning")]),i("span",{staticClass:"headline font-weight-bold",attrs:{color:"warning"}},[t._v("Notice")])],1),i("v-card-text",[i("v-text-field",{attrs:{value:t.errorType,label:"Error Type",disabled:""}}),i("v-text-field",{attrs:{value:t.errorMessage,label:"Error Message",disabled:""}})],1),i("v-card-text",[t.errorStack?i("v-textarea",{attrs:{error:"",label:"Error Stack",outline:"",readonly:"",value:t.errorStack}}):t._e()],1),i("v-card-actions",[i("v-btn",{attrs:{color:"info",dark:""},on:{click:function(e){t.refresh(!1)}}},[t._v("Refresh")]),i("v-btn",{attrs:{color:"error",dark:""},on:{click:function(e){t.signOut(!1)}}},[t._v("Sign Out")]),i("v-spacer"),i("v-btn",{attrs:{color:"green lighten-1",dark:""},on:{click:function(e){t.cancel(!1)}}},[t._v("Cancel")])],1)],1)],1)},r=[],s=(i("96cf"),i("1da1")),a=(i("cadf"),i("551c"),i("097d"),i("0c12")),o={name:"WarningDialog",data:function(){return{showDialog:!1,errorMessage:null,errorType:null,errorStack:null}},mounted:function(){var t=this;a["a"].$on("WarningDialog",function(e){t.showDialog=e.showDialog,t.errorMessage=e.errorMessage,t.errorType=e.errorType,t.errorStack=e.errorStack})},methods:{cancel:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("refresh showDialog"),this.showDialog=e;case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),refresh:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("refresh showDialog"),this.showDialog=e,t.next=4,this.$emit("closeWarningRefresh");case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),signOut:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("signOut showDialog"),this.showDialog=e,t.next=4,this.$emit("closeWarningSignOut");case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},c=o,l=i("2877"),h=i("6544"),d=i.n(h),u=i("8336"),v=i("b0af"),m=i("99d9"),f=i("12b2"),g=i("169a"),p=i("132d"),y=i("9910"),b=i("2677"),w=i("a844"),S=Object(l["a"])(c,n,r,!1,null,null,null);S.options.__file="WarningDialog.vue";e["default"]=S.exports;d()(S,{VBtn:u["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:f["a"],VDialog:g["a"],VIcon:p["a"],VSpacer:y["a"],VTextField:b["a"],VTextarea:w["a"]})},d0e7:function(t,e,i){},f7dc:function(t,e,i){}}]);
//# sourceMappingURL=chunk-24b045d1.3dff7503.js.map