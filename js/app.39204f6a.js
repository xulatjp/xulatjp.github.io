(function(e){function t(t){for(var o,i,c=t[0],s=t[1],u=t[2],p=0,d=[];p<c.length;p++)i=c[p],a[i]&&d.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4e69":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=n("bb71"),r=(n("da64"),n("1761")),i=n.n(r);o["default"].use(a["a"],{iconfont:"md",directives:{Touch:i.a}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("top-menu"),n("v-content",[n("router-link",{attrs:{to:"/"}},[e._v("home")]),n("router-link",{attrs:{to:"/about"}},[e._v("about")]),n("router-view")],1)],1)},s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return e.swipe("Left")},right:function(){return e.swipe("Right")},up:function(){return e.swipe("Up")},down:function(){return e.swipe("Down")}},expression:"{\n    left: () => swipe('Left'),\n    right: () => swipe('Right'),\n    up: () => swipe('Up'),\n    down: () => swipe('Down')\n  }"}],staticClass:"grey lighten-2",staticStyle:{height:"500px"},attrs:{column:"","align-center":"","justify-center":""}},[n("v-subheader",[e._v("Swipe Direction")]),e._v("\n  "+e._s(e.swipeDirection)+"\n\n  "),n("v-subheader",[e._v(e._s(e.deviceId))]),n("v-btn",{on:{click:e.saveDeviceId}},[e._v("save device id")])],1)},l=[],p=n("cebc"),d=n("2f62"),v={data:function(){return{swipeDirection:"None"}},created:function(){this.loadDeviceId()},methods:Object(p["a"])({swipe:function(e){this.swipeDirection=e},saveDeviceId:function(){this.saveDeviceId()}},Object(d["b"])({saveDeviceId:"saveDeviceId",loadDeviceId:"loadDeviceId"})),computed:Object(p["a"])({},Object(d["c"])({deviceId:function(e){return e.deviceId}}))},f=v,b=n("2877"),m=n("6544"),h=n.n(m),_=n("8336"),w=n("a722"),g=n("e0c7"),y=Object(b["a"])(f,u,l,!1,null,null,null);y.options.__file="About.vue";var x=y.exports;h()(y,{VBtn:_["a"],VLayout:w["a"],VSubheader:g["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{app:"",height:"48px"}},[n("v-btn",{attrs:{icon:"",to:"/"}},[n("v-icon",{attrs:{"x-large":"",color:"primary"}},[e._v("home")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:"",to:"/about"}},[n("v-icon",{attrs:{"x-large":"",color:"primary"}},[e._v("zoom_out_map")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{"x-large":"",color:"primary"}},[e._v("exit_to_app")])],1)],1)},I=[],j={name:"Menu",data:function(){return{}},methods:{}},O=j,S=n("132d"),$=n("9910"),C=n("71d9"),k=Object(b["a"])(O,D,I,!1,null,null,null);k.options.__file="Menu.vue";var V=k.exports;h()(k,{VBtn:_["a"],VIcon:S["a"],VSpacer:$["a"],VToolbar:C["a"]});var A={name:"App",components:{topMenu:V},data:function(){return{}}},M=A,P=n("7496"),T=n("549c"),U=Object(b["a"])(M,c,s,!1,null,null,null);U.options.__file="App.vue";var E=U.exports;h()(U,{VApp:P["a"],VContent:T["a"]});var L=n("8c4f"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example-drag"},[n("div",{staticClass:"upload"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.$refs.upload&&e.$refs.upload.dropActive,expression:"$refs.upload && $refs.upload.dropActive"}],staticClass:"drop-active"},[n("h3",[e._v("Drop files to upload")])]),n("div",{staticClass:"example-btn"},[n("file-upload",{ref:"upload",staticClass:"btn btn-primary",attrs:{"custom-action":e.customAction,multiple:!0,drop:!0,"drop-directory":!0},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}},[n("i",{staticClass:"fa fa-plus"}),e._v("\n        Select files\n      ")]),e.$refs.upload&&e.$refs.upload.active?n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.$refs.upload.active=!1}}},[n("i",{staticClass:"fa fa-stop",attrs:{"aria-hidden":"true"}}),e._v("\n        Stop Upload\n      ")]):n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.$refs.upload.active=!0}}},[n("i",{staticClass:"fa fa-arrow-up",attrs:{"aria-hidden":"true"}}),e._v("\n        Start Upload\n      ")])],1)])])},B=[],J=n("8019"),R=n.n(J),z={data:function(){return{files:[]}},components:{FileUpload:R.a},methods:{customAction:function(e,t){console.log(e)}}},F=z,H=(n("cccb"),Object(b["a"])(F,N,B,!1,null,null,null));H.options.__file="Home.vue";var q=H.exports;o["default"].use(L["a"]);var G=new L["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:x}]});o["default"].use(d["a"]);var K=new d["a"].Store({state:{deviceId:"empty"},mutations:{setDeviceId:function(e,t){e.deviceId=t}},actions:{loadDeviceId:function(e){var t=e.commit,n=(e.dispatch,e.rootState,$cookies.get("user"));t("setDeviceId",n)},saveDeviceId:function(e){e.commit,e.dispatch,e.rootState;$cookies.set("user","userxulei")}}}),Q=n("2b27"),W=n.n(Q);o["default"].use(W.a),W.a.config("7d"),o["default"].config.productionTip=!1,new o["default"]({router:G,store:K,render:function(e){return e(E)}}).$mount("#app")},cccb:function(e,t,n){"use strict";var o=n("4e69"),a=n.n(o);a.a}});
//# sourceMappingURL=app.39204f6a.js.map