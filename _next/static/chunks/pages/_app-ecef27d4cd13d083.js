(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7544:function(t,n,e){t.exports=e(6029)},3454:function(t,n,e){"use strict";var r,o;t.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"===typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e(7663)},1118:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(8510)}])},4626:function(t,n,e){"use strict";e.d(n,{I:function(){return s},p:function(){return c}});var r=e(7568),o=e(4051),i=e.n(o),u=e(3454);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(u.env.NEXT_PUBLIC_STRAPI_API_URL||"http://127.0.0.1:1337","/").concat(t)}function s(t){return a.apply(this,arguments)}function a(){return(a=(0,r.Z)(i().mark((function t(n){var e,r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c(n),t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:return o=t.sent,t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},6017:function(t,n,e){"use strict";e.d(n,{$:function(){return o}});var r=e(4626);function o(t){return t?t.url.startsWith("/")?(0,r.p)(t.url):t.url:""}},8510:function(t,n,e){"use strict";e.r(n),e.d(n,{GlobalContext:function(){return v}});var r=e(7568),o=e(6042),i=e(9396),u=e(4051),c=e.n(u),s=e(5893),a=e(7544),f=e(9008),l=e.n(f),p=(e(3536),e(4831),e(7294)),h=(e(6017),e(4626)),v=(0,p.createContext)({}),d=function(t){var n=t.Component,e=t.pageProps,r=e.global;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("html",{lang:"en",children:[(0,s.jsxs)(l(),{children:[(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,s.jsx)("link",{rel:"apple-touch-icon",href:"/favicon/favicon-96x96.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,s.jsx)("meta",{name:"theme-color",content:"#443eac"}),(0,s.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Staatliches"})]}),(0,s.jsx)(v.Provider,{value:r,children:(0,s.jsx)(n,(0,o.Z)({},e))})]})})};d.getInitialProps=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.default.getInitialProps(n);case 2:return e=t.sent,t.next=5,(0,h.I)("global");case 5:return r=t.sent,t.abrupt("return",(0,i.Z)((0,o.Z)({},e),{pageProps:{global:r}}));case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),n.default=d},3536:function(){},4831:function(){},7663:function(t){!function(){var n={308:function(t){var n,e,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(r){try{return n.call(null,t,0)}catch(r){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{e="function"===typeof clearTimeout?clearTimeout:i}catch(t){e=i}}();var c,s=[],a=!1,f=-1;function l(){a&&c&&(a=!1,c.length?s=c.concat(s):f=-1,s.length&&p())}function p(){if(!a){var t=u(l);a=!0;for(var n=s.length;n;){for(c=s,s=[];++f<n;)c&&c[f].run();f=-1,n=s.length}c=null,a=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===i||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}(t)}}function h(t,n){this.fun=t,this.array=n}function v(){}r.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];s.push(new h(t,n)),1!==s.length||a||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={exports:{}},u=!0;try{n[t](i,i.exports,r),u=!1}finally{u&&delete e[t]}return i.exports}r.ab="//";var o=r(308);t.exports=o}()},9008:function(t,n,e){t.exports=e(5443)},7568:function(t,n,e){"use strict";function r(t,n,e,r,o,i,u){try{var c=t[i](u),s=c.value}catch(a){return void e(a)}c.done?n(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var u=t.apply(n,e);function c(t){r(u,o,i,c,s,"next",t)}function s(t){r(u,o,i,c,s,"throw",t)}c(void 0)}))}}e.d(n,{Z:function(){return o}})},4924:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,{Z:function(){return r}})},6042:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(4924);function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),o.forEach((function(n){(0,r.Z)(t,n,e[n])}))}return t}},9396:function(t,n,e){"use strict";function r(t,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})),t}e.d(n,{Z:function(){return r}})}},function(t){var n=function(n){return t(t.s=n)};t.O(0,[774,179],(function(){return n(1118),n(387)}));var e=t.O();_N_E=e}]);