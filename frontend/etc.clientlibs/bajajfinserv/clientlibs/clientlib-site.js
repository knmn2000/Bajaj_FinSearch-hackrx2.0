/*! lozad.js - v1.9.0 - 2019-02-09
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";var g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n="undefined"!=typeof document&&document.documentMode,l={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");n&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.appendChild(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,o=void 0,a=0;a<=r.length-1;a++)(o=r[a].getAttribute("data-src"))&&(r[a].src=o);t.load()}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')"),t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */function f(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,o,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=g({},l,t),n=e.root,i=e.rootMargin,d=e.threshold,c=e.load,u=e.loaded,s=void 0;return window.IntersectionObserver&&(s=new IntersectionObserver((r=c,o=u,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),b(t.target)||(r(t.target),f(t.target),o(t.target)))})}),{root:n,rootMargin:i,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(a,n),e=0;e<t.length;e++)b(t[e])||(s?s.observe(t[e]):(c(t[e]),f(t[e]),u(t[e])))},triggerLoad:function(t){b(t)||(c(t),f(t),u(t))},observer:s}}});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,n=void 0,o=void 0,i=function(t,e){h[r]=t,h[r+1]=e,2===(r+=2)&&(o?o(v):m())};var s="undefined"!=typeof window?window:void 0,u=s||{},c=u.MutationObserver||u.WebKitMutationObserver,a="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function l(){var t=setTimeout;return function(){return t(v,1)}}var h=new Array(1e3);function v(){for(var t=0;t<r;t+=2){(0,h[t])(h[t+1]),h[t]=void 0,h[t+1]=void 0}r=0}var p,d,_,y,m=void 0;function b(t,e){var r=this,n=new this.constructor(A);void 0===n[g]&&K(n);var o=r._state;if(o){var s=arguments[o-1];i(function(){return q(o,n,s,r._result)})}else Y(r,n,t,e);return n}function w(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(A);return x(e,t),e}a?m=function(){return process.nextTick(v)}:c?(d=0,_=new c(v),y=document.createTextNode(""),_.observe(y,{characterData:!0}),m=function(){y.data=d=++d%2}):f?((p=new MessageChannel).port1.onmessage=v,m=function(){return p.port2.postMessage(0)}):m=void 0===s&&"function"==typeof require?function(){try{var t=Function("return this")().require("vertx");return void 0!==(n=t.runOnLoop||t.runOnContext)?function(){n(v)}:l()}catch(t){return l()}}():l();var g=Math.random().toString(36).substring(2);function A(){}var j=void 0,S=1,E=2,T={error:null};function M(t){try{return t.then}catch(t){return T.error=t,T}}function P(e,r,n){r.constructor===e.constructor&&n===b&&r.constructor.resolve===w?function(t,e){e._state===S?O(t,e._result):e._state===E?F(t,e._result):Y(e,void 0,function(e){return x(t,e)},function(e){return F(t,e)})}(e,r):n===T?(F(e,T.error),T.error=null):void 0===n?O(e,r):t(n)?function(t,e,r){i(function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,function(r){n||(n=!0,e!==r?x(t,r):O(t,r))},function(e){n||(n=!0,F(t,e))},t._label);!n&&o&&(n=!0,F(t,o))},t)}(e,r,n):O(e,r)}function x(t,e){var r,n;t===e?F(t,new TypeError("You cannot resolve a promise with itself")):(n=typeof(r=e),null===r||"object"!==n&&"function"!==n?O(t,e):P(t,e,M(e)))}function C(t){t._onerror&&t._onerror(t._result),k(t)}function O(t,e){t._state===j&&(t._result=e,t._state=S,0!==t._subscribers.length&&i(k,t))}function F(t,e){t._state===j&&(t._state=E,t._result=e,i(C,t))}function Y(t,e,r,n){var o=t._subscribers,s=o.length;t._onerror=null,o[s]=e,o[s+S]=r,o[s+E]=n,0===s&&t._state&&i(k,t)}function k(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?q(r,n,o,i):o(i);t._subscribers.length=0}}function q(e,r,n,o){var i=t(n),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if((s=function(t,e){try{return t(e)}catch(t){return T.error=t,T}}(n,o))===T?(a=!0,u=s.error,s.error=null):c=!0,r===s)return void F(r,new TypeError("A promises callback cannot return that same promise."))}else s=o,c=!0;r._state!==j||(i&&c?x(r,s):a?F(r,u):e===S?O(r,s):e===E&&F(r,s))}var D=0;function K(t){t[g]=D++,t._state=void 0,t._result=void 0,t._subscribers=[]}var L=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(A),this.promise[g]||K(this.promise),e(r)?(this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&O(this.promise,this._result))):F(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===j&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===w){var o=M(t);if(o===b&&t._state!==j)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===N){var i=new r(A);P(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===j&&(this._remaining--,t===E?F(n,r):this._result[e]=r),0===this._remaining&&O(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;Y(t,void 0,function(t){return r._settledAt(S,e,t)},function(t){return r._settledAt(E,e,t)})},t}();var N=function(){function e(t){this[g]=D++,this._result=this._state=void 0,this._subscribers=[],A!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){x(t,e)},function(e){F(t,e)})}catch(e){F(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var r=this.constructor;return t(e)?this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return N.prototype.then=b,N.all=function(t){return new L(this,t).promise},N.race=function(t){var r=this;return e(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,e){return e(new TypeError("You must pass an array to race."))})},N.resolve=w,N.reject=function(t){var e=new this(A);return F(e,t),e},N._setScheduler=function(t){o=t},N._setAsap=function(t){i=t},N._asap=i,N.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=N},N.Promise=N,N});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,n=void 0,o=void 0,i=function(t,e){h[r]=t,h[r+1]=e,2===(r+=2)&&(o?o(v):m())};var s="undefined"!=typeof window?window:void 0,u=s||{},c=u.MutationObserver||u.WebKitMutationObserver,a="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function l(){var t=setTimeout;return function(){return t(v,1)}}var h=new Array(1e3);function v(){for(var t=0;t<r;t+=2){(0,h[t])(h[t+1]),h[t]=void 0,h[t+1]=void 0}r=0}var p,d,_,y,m=void 0;function b(t,e){var r=this,n=new this.constructor(A);void 0===n[g]&&K(n);var o=r._state;if(o){var s=arguments[o-1];i(function(){return q(o,n,s,r._result)})}else Y(r,n,t,e);return n}function w(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(A);return x(e,t),e}a?m=function(){return process.nextTick(v)}:c?(d=0,_=new c(v),y=document.createTextNode(""),_.observe(y,{characterData:!0}),m=function(){y.data=d=++d%2}):f?((p=new MessageChannel).port1.onmessage=v,m=function(){return p.port2.postMessage(0)}):m=void 0===s&&"function"==typeof require?function(){try{var t=Function("return this")().require("vertx");return void 0!==(n=t.runOnLoop||t.runOnContext)?function(){n(v)}:l()}catch(t){return l()}}():l();var g=Math.random().toString(36).substring(2);function A(){}var j=void 0,S=1,E=2,T={error:null};function M(t){try{return t.then}catch(t){return T.error=t,T}}function P(e,r,n){r.constructor===e.constructor&&n===b&&r.constructor.resolve===w?function(t,e){e._state===S?O(t,e._result):e._state===E?F(t,e._result):Y(e,void 0,function(e){return x(t,e)},function(e){return F(t,e)})}(e,r):n===T?(F(e,T.error),T.error=null):void 0===n?O(e,r):t(n)?function(t,e,r){i(function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,function(r){n||(n=!0,e!==r?x(t,r):O(t,r))},function(e){n||(n=!0,F(t,e))},t._label);!n&&o&&(n=!0,F(t,o))},t)}(e,r,n):O(e,r)}function x(t,e){var r,n;t===e?F(t,new TypeError("You cannot resolve a promise with itself")):(n=typeof(r=e),null===r||"object"!==n&&"function"!==n?O(t,e):P(t,e,M(e)))}function C(t){t._onerror&&t._onerror(t._result),k(t)}function O(t,e){t._state===j&&(t._result=e,t._state=S,0!==t._subscribers.length&&i(k,t))}function F(t,e){t._state===j&&(t._state=E,t._result=e,i(C,t))}function Y(t,e,r,n){var o=t._subscribers,s=o.length;t._onerror=null,o[s]=e,o[s+S]=r,o[s+E]=n,0===s&&t._state&&i(k,t)}function k(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?q(r,n,o,i):o(i);t._subscribers.length=0}}function q(e,r,n,o){var i=t(n),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if((s=function(t,e){try{return t(e)}catch(t){return T.error=t,T}}(n,o))===T?(a=!0,u=s.error,s.error=null):c=!0,r===s)return void F(r,new TypeError("A promises callback cannot return that same promise."))}else s=o,c=!0;r._state!==j||(i&&c?x(r,s):a?F(r,u):e===S?O(r,s):e===E&&F(r,s))}var D=0;function K(t){t[g]=D++,t._state=void 0,t._result=void 0,t._subscribers=[]}var L=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(A),this.promise[g]||K(this.promise),e(r)?(this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&O(this.promise,this._result))):F(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===j&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===w){var o=M(t);if(o===b&&t._state!==j)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===N){var i=new r(A);P(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===j&&(this._remaining--,t===E?F(n,r):this._result[e]=r),0===this._remaining&&O(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;Y(t,void 0,function(t){return r._settledAt(S,e,t)},function(t){return r._settledAt(E,e,t)})},t}();var N=function(){function e(t){this[g]=D++,this._result=this._state=void 0,this._subscribers=[],A!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e(function(e){x(t,e)},function(e){F(t,e)})}catch(e){F(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var r=this.constructor;return t(e)?this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return N.prototype.then=b,N.all=function(t){return new L(this,t).promise},N.race=function(t){var r=this;return e(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,e){return e(new TypeError("You must pass an array to race."))})},N.resolve=w,N.reject=function(t){var e=new this(A);return F(e,t),e},N._setScheduler=function(t){o=t},N._setAsap=function(t){i=t},N._asap=i,N.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=N},N.Promise=N,N.polyfill(),N});
!function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}t.prototype=window.Event.prototype,window.CustomEvent=t}();
;(function(){var k,l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)},m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function n(){n=function(){};m.Symbol||(m.Symbol=p)}var p=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function r(){n();var a=m.Symbol.iterator;a||(a=m.Symbol.iterator=m.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&l(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return t(this)}});r=function(){}}function t(a){var b=0;return v(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function v(a){r();a={next:a};a[m.Symbol.iterator]=function(){return this};return a}function w(a){r();n();r();var b=a[Symbol.iterator];return b?b.call(a):t(a)}var x;
if("function"==typeof Object.setPrototypeOf)x=Object.setPrototypeOf;else{var z;a:{var A={o:!0},B={};try{B.__proto__=A;z=B.o;break a}catch(a){}z=!1}x=z?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var C=x;function D(){this.g=!1;this.c=null;this.m=void 0;this.b=1;this.l=this.s=0;this.f=null}function E(a){if(a.g)throw new TypeError("Generator is already running");a.g=!0}D.prototype.h=function(a){this.m=a};
D.prototype.i=function(a){this.f={u:a,v:!0};this.b=this.s||this.l};D.prototype["return"]=function(a){this.f={"return":a};this.b=this.l};function F(a,b,d){a.b=d;return{value:b}}function G(a){this.w=a;this.j=[];for(var b in a)this.j.push(b);this.j.reverse()}function H(a){this.a=new D;this.A=a}H.prototype.h=function(a){E(this.a);if(this.a.c)return I(this,this.a.c.next,a,this.a.h);this.a.h(a);return J(this)};
function K(a,b){E(a.a);var d=a.a.c;if(d)return I(a,"return"in d?d["return"]:function(a){return{value:a,done:!0}},b,a.a["return"]);a.a["return"](b);return J(a)}H.prototype.i=function(a){E(this.a);if(this.a.c)return I(this,this.a.c["throw"],a,this.a.h);this.a.i(a);return J(this)};
function I(a,b,d,c){try{var e=b.call(a.a.c,d);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.g=!1,e;var f=e.value}catch(g){return a.a.c=null,a.a.i(g),J(a)}a.a.c=null;c.call(a.a,f);return J(a)}function J(a){for(;a.a.b;)try{var b=a.A(a.a);if(b)return a.a.g=!1,{value:b.value,done:!1}}catch(d){a.a.m=void 0,a.a.i(d)}a.a.g=!1;if(a.a.f){b=a.a.f;a.a.f=null;if(b.v)throw b.u;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function L(a){this.next=function(b){return a.h(b)};this["throw"]=function(b){return a.i(b)};this["return"]=function(b){return K(a,b)};r();n();r();this[Symbol.iterator]=function(){return this}}function M(a,b){var d=new L(new H(b));C&&C(d,a.prototype);return d}
if("undefined"===typeof FormData||!FormData.prototype.keys){var N=function(a,b,d){if(2>arguments.length)throw new TypeError("2 arguments required, but only "+arguments.length+" present.");return b instanceof Blob?[a+"",b,void 0!==d?d+"":"string"===typeof b.name?b.name:"blob"]:[a+"",b+""]},O=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");return[a+""]},P=function(a){var b=w(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,
lastModified:a.lastModified}));return a},Q="object"===typeof window?window:"object"===typeof self?self:this,R=Q.FormData,S=Q.XMLHttpRequest&&Q.XMLHttpRequest.prototype.send,T=Q.Request&&Q.fetch;n();var U=Q.Symbol&&Symbol.toStringTag,V=new WeakMap,W=Array.from||function(a){return[].slice.call(a)};U&&(Blob.prototype[U]||(Blob.prototype[U]="Blob"),"File"in Q&&!File.prototype[U]&&(File.prototype[U]="File"));try{new File([],"")}catch(a){Q.File=function(b,d,c){b=new Blob(b,c);c=c&&void 0!==c.lastModified?
new Date(c.lastModified):new Date;Object.defineProperties(b,{name:{value:d},lastModifiedDate:{value:c},lastModified:{value:+c},toString:{value:function(){return"[object File]"}}});U&&Object.defineProperty(b,U,{value:"File"});return b}}var X=function(a){V.set(this,Object.create(null));if(!a)return this;a=w(W(a.elements));for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.name&&!b.disabled)if("file"===b.type)for(var d=w(W(b.files||[])),c=d.next();!c.done;c=d.next())this.append(b.name,c.value);else if("select-multiple"===
b.type||"select-one"===b.type)for(d=w(W(b.options)),c=d.next();!c.done;c=d.next())c=c.value,!c.disabled&&c.selected&&this.append(b.name,c.value);else"checkbox"===b.type||"radio"===b.type?b.checked&&this.append(b.name,b.value):this.append(b.name,b.value)};k=X.prototype;k.append=function(a,b,d){var c=V.get(this);c[a]||(c[a]=[]);c[a].push([b,d])};k["delete"]=function(a){delete V.get(this)[a]};k.entries=function b(){var d=this,c,e,f,g,h,q;return M(b,function(b){switch(b.b){case 1:c=V.get(d),f=new G(c);
case 2:var u;a:{for(u=f;0<u.j.length;){var y=u.j.pop();if(y in u.w){u=y;break a}}u=null}if(null==(e=u)){b.b=0;break}g=w(c[e]);h=g.next();case 5:if(h.done){b.b=2;break}q=h.value;return F(b,[e,P(q)],6);case 6:h=g.next(),b.b=5}})};k.forEach=function(b,d){for(var c=w(this),e=c.next();!e.done;e=c.next()){var f=w(e.value);e=f.next().value;f=f.next().value;b.call(d,f,e,this)}};k.get=function(b){var d=V.get(this);return d[b]?P(d[b][0]):null};k.getAll=function(b){return(V.get(this)[b]||[]).map(P)};k.has=function(b){return b in
V.get(this)};k.keys=function d(){var c=this,e,f,g,h,q;return M(d,function(d){1==d.b&&(e=w(c),f=e.next());if(3!=d.b){if(f.done){d.b=0;return}g=f.value;h=w(g);q=h.next().value;return F(d,q,3)}f=e.next();d.b=2})};k.set=function(d,c,e){V.get(this)[d]=[[c,e]]};k.values=function c(){var e=this,f,g,h,q,y;return M(c,function(c){1==c.b&&(f=w(e),g=f.next());if(3!=c.b){if(g.done){c.b=0;return}h=g.value;q=w(h);q.next();y=q.next().value;return F(c,y,3)}g=f.next();c.b=2})};X.prototype._asNative=function(){for(var c=
new R,e=w(this),f=e.next();!f.done;f=e.next()){var g=w(f.value);f=g.next().value;g=g.next().value;c.append(f,g)}return c};X.prototype._blob=function(){for(var c="----formdata-polyfill-"+Math.random(),e=[],f=w(this),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;e.push("--"+c+"\r\n");h instanceof Blob?e.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):e.push('Content-Disposition: form-data; name="'+
g+'"\r\n\r\n'+h+"\r\n")}e.push("--"+c+"--");return new Blob(e,{type:"multipart/form-data; boundary="+c})};n();r();X.prototype[Symbol.iterator]=function(){return this.entries()};X.prototype.toString=function(){return"[object FormData]"};U&&(X.prototype[U]="FormData");[["append",N],["delete",O],["get",O],["getAll",O],["has",O],["set",N]].forEach(function(c){var e=X.prototype[c[0]];X.prototype[c[0]]=function(){return e.apply(this,c[1].apply(this,W(arguments)))}});S&&(XMLHttpRequest.prototype.send=function(c){c instanceof
X?(c=c._blob(),this.setRequestHeader("Content-Type",c.type),S.call(this,c)):S.call(this,c)});if(T){var Y=Q.fetch;Q.fetch=function(c,e){e&&e.body&&e.body instanceof X&&(e.body=e.body._blob());return Y(c,e)}}Q.FormData=X};
})();
!function(t){var n,e,r=/(Trident\/)|(Edge\/)/.test(navigator.userAgent);if(!0===(!i||r)){var i=function(){"use strict";function t(t){var e,r,i,o,s,f,l=Object.create(null);if(this[a]=l,t)if("string"==typeof t)for("?"===t.charAt(0)&&(t=t.slice(1)),s=0,f=(o=t.split("&")).length;s<f;s++)-1<(e=(i=o[s]).indexOf("="))?u(l,h(i.slice(0,e)),h(i.slice(e+1))):i.length&&u(l,h(i),"");else if(n(t))for(s=0,f=t.length;s<f;s++)u(l,(i=t[s])[0],i[1]);else if(t.forEach)t.forEach(c,l);else for(r in t)u(l,r,t[r])}var n=Array.isArray,e=t.prototype,r=/[!'\(\)~]|%20|%00/g,i=/\+/g,o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},s=function(t){return o[t]},a="__URLSearchParams__:"+Math.random();function c(t,n){u(this,n,t)}function u(t,e,r){var i=n(r)?r.join(","):r;e in t?t[e].push(i):t[e]=[i]}function h(t){return decodeURIComponent(t.replace(i," "))}function f(t){return encodeURIComponent(t).replace(r,s)}e.append=function(t,n){u(this[a],t,n)},e.delete=function(t){delete this[a][t]},e.get=function(t){var n=this[a];return t in n?n[t][0]:null},e.getAll=function(t){var n=this[a];return t in n?n[t].slice(0):[]},e.has=function(t){return t in this[a]},e.set=function(t,n){this[a][t]=[""+n]},e.forEach=function(t,n){var e=this[a];Object.getOwnPropertyNames(e).forEach(function(r){e[r].forEach(function(e){t.call(n,e,r,this)},this)},this)},e.toJSON=function(){return{}},e.toString=function(){var t,n,e,r,i=this[a],o=[];for(n in i)for(e=f(n),t=0,r=i[n];t<r.length;t++)o.push(e+"="+f(r[t]));return o.join("&")};var l=Object.defineProperty,p=Object.getOwnPropertyDescriptor,v=function(n){var r=n.append;n.append=e.append,t.call(n,n._usp.search.slice(1)),n.append=r},d=function(t,n){if(!(t instanceof n))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+n.name)},g=function(n){var r,i,o=n.prototype,s=p(o,"searchParams"),a=p(o,"href"),c=p(o,"search");!s&&c&&c.set&&(i=function(t){function n(n,r){e.append.call(this,n,r),n=this.toString(),t.set.call(this._usp,n?"?"+n:"")}function r(n){e.delete.call(this,n),n=this.toString(),t.set.call(this._usp,n?"?"+n:"")}function i(n,r){e.set.call(this,n,r),n=this.toString(),t.set.call(this._usp,n?"?"+n:"")}return function(t,e){return t.append=n,t.delete=r,t.set=i,l(t,"_usp",{configurable:!0,writable:!0,value:e})}}(c),r=function(t,n){return l(t,"_searchParams",{configurable:!0,writable:!0,value:i(n,t)}),n},Object.defineProperties(o,{href:{get:function(){return a.get.call(this)},set:function(t){var n=this._searchParams;a.set.call(this,t),n&&v(n)}},search:{get:function(){return c.get.call(this)},set:function(t){var n=this._searchParams;c.set.call(this,t),n&&v(n)}},searchParams:{get:function(){return d(this,n),this._searchParams||r(this,new t(this.search.slice(1)))},set:function(t){d(this,n),r(this,t)}}}))};return g(HTMLAnchorElement),/^function|object$/.test(typeof URL)&&URL.prototype&&g(URL),t}();n=i.prototype,e=function(){try{return!!Symbol.iterator}catch(t){return!1}}(),"forEach"in n||(n.forEach=function(t,n){var e=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(r){!r.length||r in e||(e[r]=this.getAll(r)).forEach(function(e){t.call(n,e,r,this)},this)},this)}),"keys"in n||(n.keys=function(){var t=[];this.forEach(function(n,e){t.push(e)});var n={next:function(){var n=t.shift();return{done:void 0===n,value:n}}};return e&&(n[Symbol.iterator]=function(){return n}),n}),"values"in n||(n.values=function(){var t=[];this.forEach(function(n){t.push(n)});var n={next:function(){var n=t.shift();return{done:void 0===n,value:n}}};return e&&(n[Symbol.iterator]=function(){return n}),n}),"entries"in n||(n.entries=function(){var t=[];this.forEach(function(n,e){t.push([e,n])});var n={next:function(){var n=t.shift();return{done:void 0===n,value:n}}};return e&&(n[Symbol.iterator]=function(){return n}),n}),!e||Symbol.iterator in n||(n[Symbol.iterator]=n.entries),"sort"in n||(n.sort=function(){for(var t,n,e,r=this.entries(),i=r.next(),o=i.done,s=[],a=Object.create(null);!o;)n=(e=i.value)[0],s.push(n),n in a||(a[n]=[]),a[n].push(e[1]),o=(i=r.next()).done;for(s.sort(),t=0;t<s.length;t++)this.delete(s[t]);for(t=0;t<s.length;t++)n=s[t],this.append(n,a[n].shift())}),window.URLSearchParams=i}}(window);
(function(t){var e=function(){try{return!!Symbol.iterator}catch(e){return false}};var r=e();var n=function(t){var e={next:function(){var e=t.shift();return{done:e===void 0,value:e}}};if(r){e[Symbol.iterator]=function(){return e}}return e};var i=function(e){return encodeURIComponent(e).replace(/%20/g,"+")};var o=function(e){return decodeURIComponent(e).replace(/\+/g," ")};var a=function(){var a=function(e){Object.defineProperty(this,"_entries",{writable:true,value:{}});var t=typeof e;if(t==="undefined"){}else if(t==="string"){if(e!==""){this._fromString(e)}}else if(e instanceof a){var r=this;e.forEach(function(e,t){r.append(t,e)})}else if(e!==null&&t==="object"){if(Object.prototype.toString.call(e)==="[object Array]"){for(var n=0;n<e.length;n++){var i=e[n];if(Object.prototype.toString.call(i)==="[object Array]"||i.length!==2){this.append(i[0],i[1])}else{throw new TypeError("Expected [string, any] as entry at index "+n+" of URLSearchParams's input")}}}else{for(var o in e){if(e.hasOwnProperty(o)){this.append(o,e[o])}}}}else{throw new TypeError("Unsupported input's type for URLSearchParams")}};var e=a.prototype;e.append=function(e,t){if(e in this._entries){this._entries[e].push(String(t))}else{this._entries[e]=[String(t)]}};e.delete=function(e){delete this._entries[e]};e.get=function(e){return e in this._entries?this._entries[e][0]:null};e.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]};e.has=function(e){return e in this._entries};e.set=function(e,t){this._entries[e]=[String(t)]};e.forEach=function(e,t){var r;for(var n in this._entries){if(this._entries.hasOwnProperty(n)){r=this._entries[n];for(var i=0;i<r.length;i++){e.call(t,r[i],n,this)}}}};e.keys=function(){var r=[];this.forEach(function(e,t){r.push(t)});return n(r)};e.values=function(){var t=[];this.forEach(function(e){t.push(e)});return n(t)};e.entries=function(){var r=[];this.forEach(function(e,t){r.push([t,e])});return n(r)};if(r){e[Symbol.iterator]=e.entries}e.toString=function(){var r=[];this.forEach(function(e,t){r.push(i(t)+"="+i(e))});return r.join("&")};t.URLSearchParams=a};if(!("URLSearchParams"in t)||new URLSearchParams("?a=1").toString()!=="a=1"){a()}var s=URLSearchParams.prototype;if(typeof s.sort!=="function"){s.sort=function(){var r=this;var n=[];this.forEach(function(e,t){n.push([t,e]);if(!r._entries){r.delete(t)}});n.sort(function(e,t){if(e[0]<t[0]){return-1}else if(e[0]>t[0]){return+1}else{return 0}});if(r._entries){r._entries={}}for(var e=0;e<n.length;e++){this.append(n[e][0],n[e][1])}}}if(typeof s._fromString!=="function"){Object.defineProperty(s,"_fromString",{enumerable:false,configurable:false,writable:false,value:function(e){if(this._entries){this._entries={}}else{var r=[];this.forEach(function(e,t){r.push(t)});for(var t=0;t<r.length;t++){this.delete(r[t])}}e=e.replace(/^\?/,"");var n=e.split("&");var i;for(var t=0;t<n.length;t++){i=n[t].split("=");this.append(o(i[0]),i.length>1?o(i[1]):"")}}})}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);(function(h){var e=function(){try{var e=new URL("b","http://a");e.pathname="c%20d";return e.href==="http://a/c%20d"&&e.searchParams}catch(e){return false}};var t=function(){var t=h.URL;var e=function(e,t){if(typeof e!=="string")e=String(e);var r=document,n;if(t&&(h.location===void 0||t!==h.location.href)){r=document.implementation.createHTMLDocument("");n=r.createElement("base");n.href=t;r.head.appendChild(n);try{if(n.href.indexOf(t)!==0)throw new Error(n.href)}catch(e){throw new Error("URL unable to set base "+t+" due to "+e)}}var i=r.createElement("a");i.href=e;if(n){r.body.appendChild(i);i.href=i.href}if(i.protocol===":"||!/:/.test(i.href)){throw new TypeError("Invalid URL")}Object.defineProperty(this,"_anchorElement",{value:i});var o=new URLSearchParams(this.search);var a=true;var s=true;var c=this;["append","delete","set"].forEach(function(e){var t=o[e];o[e]=function(){t.apply(o,arguments);if(a){s=false;c.search=o.toString();s=true}}});Object.defineProperty(this,"searchParams",{value:o,enumerable:true});var f=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:false,configurable:false,writable:false,value:function(){if(this.search!==f){f=this.search;if(s){a=false;this.searchParams._fromString(this.search);a=true}}}})};var r=e.prototype;var n=function(t){Object.defineProperty(r,t,{get:function(){return this._anchorElement[t]},set:function(e){this._anchorElement[t]=e},enumerable:true})};["hash","host","hostname","port","protocol"].forEach(function(e){n(e)});Object.defineProperty(r,"search",{get:function(){return this._anchorElement["search"]},set:function(e){this._anchorElement["search"]=e;this._updateSearchParams()},enumerable:true});Object.defineProperties(r,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e;this._updateSearchParams()},enumerable:true},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:true},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol];var t=this._anchorElement.port!=e&&this._anchorElement.port!=="";return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:true},password:{get:function(){return""},set:function(e){},enumerable:true},username:{get:function(){return""},set:function(e){},enumerable:true}});e.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)};e.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)};h.URL=e};if(!e()){t()}if(h.location!==void 0&&!("origin"in h.location)){var r=function(){return h.location.protocol+"//"+h.location.hostname+(h.location.port?":"+h.location.port:"")};try{Object.defineProperty(h.location,"origin",{get:r,enumerable:true})}catch(e){setInterval(function(){h.location.origin=r()},100)}}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);
var API_ENDPOINT_URL = endpointURL;
    var AppConstants = {
        GET_QUOTE_URI: '/content/bajajfinserv/api.quote.',
        GET_QUOTE_METHOD: "GET",
        API_URI: '/content/bajajfinserv/api',
        offerMaster_URI: '/content/bajajfinserv/offerData',
        EXTENSION: 'json',
        MASTERS_URI: '/content/bajajfinserv/masters',
        GENERIC_MASTERS_URI : "/content/bajajfinserv/csv",
        CAPTCHA: {
            METHOD: "GET",
            URL: "/bin/CaptchaServlet",
        },
        MASTER_SELECTOR: {
            COUNTRY: {
                name: 'country',
                method: "GET"
            },
            CITY: {
                name: 'city',
                method: "GET"
            },
            PRODUCTS: {
                name: 'products',
                method: "GET"
            },
            DEGREE: {
                name: 'degree',
                method: "GET"
            },
            FD: {
                name: 'fd',
                method: "GET"
            },
            SACHET:{
            	name: 'bajaj-csv',
            	method: "GET"
            }
        },
        API_SELECTOR: {
            COUNTRY_MASTER: {
                name: 'country-master',
                method: "GET",
                url: API_ENDPOINT_URL + 'v1/referencedata/countries?countryName=',
                isAuth: true
            },
            /* PARTNER LOGIN API */
            PARTNER_LOGIN: {
                name: 'generatePartnerAuth',
                method: "POST",
                url: API_ENDPOINT_URL +'v1/logins/ui',
                isAuth: false
            },
            PARTNER_LOGIN_GET_KEY: {
                name: 'getAuthkey',
                method: "GET",
                url: API_ENDPOINT_URL +'v1/logins/ui/keys/bflclientwebsite',
                isAuth: false
            },
            /* TRAVEL API'S */
            TRAVEL_SEARCH_PLAN: {
                name: 'travel-search-plans',
                method: "POST",
                url: API_ENDPOINT_URL + 'v1/insurances/travel/plans',
                isAuth: true
            },
            TRAVEL_BUY_NOW: {
                name: 'travel-buy-now',
                method: "POST",
                url: API_ENDPOINT_URL + 'v1/insurances/travel/inquiries',
                isAuth: true
            },
            TRAVEL_CALL_US: {
                name: 'travel-call-us',
                method: "POST",
                url: API_ENDPOINT_URL + 'v1/insurances/travel/inquiries',
                isAuth: true
            },
            TRAVEL_COMPARE_PLANS: {
                name: 'travel-compare-plans',
                method: "POST",
                url: API_ENDPOINT_URL + 'v1/insurances/travel/plans/details',
                isAuth: true
            },
            TRAVEL_EMAIL_QUOTE: {
                name: 'travel-email-quote',
                method: "POST",
                url: API_ENDPOINT_URL + 'v1/insurances/plans/TGI/notifications',
                isAuth: true
            },
            TRAVEL_DOWNLOAD_BROCHURE: {
                name: 'travel-download-brochure',
                method: "GET",
                url: API_ENDPOINT_URL + 'v1/insurances/referencedata/plans/benefits?variantcode=TC06',
                isAuth: true
            },


            /* MOTOR API'S */
            MOTOR_SEARCH_PLANS: {
                name: 'motor-search-plans',
                method: "POST"
            },
            MOTOR_SEARCH_PLANS_REG_NO: {
                name: 'motor-search-plans-regno',
                method: "POST"
            },
            MOTOR_BUY_NOW: {
                name: 'motor-buy-now',
                method: "POST"
            },
            MOTOR_GET_VEHICLE_DETAILS: {
                name: 'motor-vehicle-details',
                method: "POST"
            },
            MOTOR_GET_RTO_LIST: {
                name: 'motor-rto-lsit',
                method: "POST"
            },
            MOTOR_CALL_US: {
                name: 'motor-call-us',
                method: "POST"
            },
            MOTOR_EMAIL_QUOTE: {
                name: 'motor-email-quote',
                method: "POST"
            },
            MOTOR_GET_REFINED_PLANS: {
                name: 'motor-refined-plans',
                method: "POST"
            },

            ELIGIBILITY_CALCULATOR_COMMON_CALL: {
                name: 'eligibility-calculator-common-call',
                method: "POST",
                url: API_ENDPOINT_URL + 'v1/loans/eligibilitydetails',
                isAuth: true
            },

            /* Personal Loan API'S */
            ELIGIBILITY_CALCULATOR_HL_BT_LAP: {
                name: 'eligibility-calculator-hl-bt-lap',
                method: "POST"
            },

            /* ELIGIBILITY CALCULATOR API'S */
            ELIGIBILITY_CALCULATOR_SALARIED: {
                name: 'eligibility-calculator-salaried',
                method: "POST"
            },

            ELIGIBILITY_CALCULATOR_SALARIED_DOCTOR: {
                name: 'eligibility-calculator-salaried-doctor',
                method: "POST"
            },

            ELIGIBILITY_CALCULATOR_BL_SME: {
                name: 'eligibility-calculator-bl-sme',
                method: "POST"
            },

            ELIGIBILITY_CALCULATOR_BL_DOCTOR: {
                name: 'eligibility-calculator-bl-doctor',
                method: "POST"
            },

            ELIGIBILITY_CALCULATOR_BL_CA: {
                name: 'eligibility-calculator-bl-ca',
                method: "POST"
            },

            /* EMI CALCULATOR */
            EMI_CALCULATOR_SECURED_TERM: {
                name: 'emi-calculator-secured-term',
                method: "POST"
            },

            EMI_CALCULATOR_SECURED_HYBRID: {
                name: 'emi-calculator-secured-hybrid',
                method: "POST"
            },
            EMI_CALCULATOR_UNSECURED_TERM: {
                name: 'emi-calculator-unsecured-term',
                method: "POST"
            },
            EMI_CALCULATOR_UNSECURED_HYBRID: {
                name: 'emi-calculator-unsecured-hybrid',
                method: "POST"
            },
            /* HEALTH API'S */
            HEALTH_SEARCH_PLANS: {
                name: 'health-search-plans',
                method: "POST",
                url: API_ENDPOINT_URL + 'v1/insurances/health/plans',
                isAuth: true
            },
            HEALTH_CALL_US: {
                name: 'health-call-us',
                method: "POST",
                url: API_ENDPOINT_URL + 'v1/insurances/health/inquiries',
                isAuth: true
            },
            HEALTH_ZONE_PLAN: {
                name: 'health-zone-plan',
                method: 'POST',
                url: API_ENDPOINT_URL + 'v1/insurances/health/plan/premiums',
                isAuth: true
            },
            HEALTH_EMAIL_QUOTE: {
                name: 'health-email-quote',
                method: 'POST',
                url: API_ENDPOINT_URL + 'v1/insurances/plans/HGI/notifications',
                isAuth: true
            },
            HEALTH_BUY_NOW: {
                name: 'health-buy-now',
                method: "POST",
                url: API_ENDPOINT_URL + 'v1/insurances/health/inquiries',
                isAuth: true
            },
            HEALTH_DOWNLOAD_BROCHURE: {
                name: 'health-download-brochure',
                method: "GET",
                url: API_ENDPOINT_URL + 'v1/insurances/referencedata/plans/benefits?',
                isAuth: true
            },
            CONTACT_US_EMAIL: {
                name: "contactus-email",
                method: "POST",
                url: API_ENDPOINT_URL + 'v1/notifications/ui',
                isAuth: true

            },
            UPI_MERCHANT_CONTACT_US: {
                name: "contactus-email",
                method: "POST",
                url: API_ENDPOINT_URL + 'v1/notifications/ui',
                isAuth: true
            },

            // cyber frontend
            CYBER_BUY_NOW: {
                name: 'cyber-buy-now',
                method: 'POST',
                url: API_ENDPOINT_URL + 'v1/insurances/cyber/inquiries',
                isAuth: true
            },
            CYBER_SEARCH_PLAN: {
                name: 'cyber-search-plans',
                method: 'POST',
                url: API_ENDPOINT_URL + 'v1/insurances/cyber/plans',
                isAuth: true
            },
            CYBER_CLICK_TO_CALL: {
                name: 'cyber-click-to-call',
                method: 'POST',
                url: API_ENDPOINT_URL + 'v1/insurances/cyber/inquiries',
                isAuth: true
            },
            // cyber frontend


            /* ULIP Constant */

            ULIP_GET_PLAN_DATA: {
                name: "get-plan-data",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/insurances/ulip/plans/refinements",
                isAuth: true
            },

            ULIP_GET_QUOTE_PLAN: {
                name: "get-quote-plan",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/insurances/ulip/quote",
                isAuth: true
            },

            ULIP_FUND_MASTER_DATA: {
                name: "get-fund-master-data",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/referencedata/insurances/ulip/funds",
                isAuth: true
            },

            ULIP_FUND_PERFORMANCE_MASTER_DATA: {
                name: "get-fund-master-data",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/referencedata/insurances/ulip/funds",
                isAuth: true
            },

            ULIP_FETCH_RISK: {
                name: "fetch-risk",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/insurances/ulip/scores/risk",
                isAuth: true
            },

            ULIP_BUY_NOW: {
                name: "ulip-buy-now",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/insurances/ulip/inquiries",
                isAuth: true
            },
            ULIP_CLICK_TO_CALL: {
                name: "ulip-click-to-call",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/insurances/ulip/inquiries",
                isAuth: true
            },

            ULIP_EMAIL_QUOTE: {
                name: "ulip-email-now",
                method: "POST"
            },

            /* Offer details partner */
            OFFER_DETAILS_PARTNER: {
                name: "offer-details-partner",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/marketintservices/offers/retrieve",
                isAuth: true
            },

            /* OTP SERVICE */
            OTP_GENERATE: {
                name: "otp-generate",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/users/status?app_source=Website",
                isAuth: true
            },
            OTP_VALIDATE: {
                name: "otp-validate",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/users/login",
                isAuth: true
            },

            /* BFL HTML SITEMAP */
            BFL_HTML_SITEMAP: {
                name: "bflsitemap",
                method: "GET"
            },
            /* INCOMETAX CALCULATOR */
            INCOMETAX_CALCULATOR: {
                name: "incometax-calculator",
                method: "POST",
                isAuth: true,
                url: API_ENDPOINT_URL + "v1/web/taxcalculator"
            },

            /* HEALTH CARE EXTRA */
			/*
			 * HEALTH_CARE_EXTRA :{ name :"health-care-call-us", method: "POST"
			 *  },
			 */
            HEALTH_CARE_EXTRA: {
                name: "health-care-call-us",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/insurances/healthextracareplus/inquiries",
                isAuth: true
            },

            /* GPGP API */
            GPGP_CALL_US: {
                name: "gpgp-call-us",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/insurances/gpgp/inquiries",
                isAuth: true

            },

            /* DIGITAL GOLD API CALL */
            DIGITAL_GOLD: {
                name: "digital-gold-call",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/dg/price",
                isAuth: true
            },

            /* MUTUAL FUNDS API CALL */
			/*
			 * MUTUAL_FUNDS_CATEGORY :{ name :"category_call", method: "POST" },
			 */
            MUTUAL_FUNDS_CATEGORY: {
                name: "category_call",
                method: "GET",
                url: API_ENDPOINT_URL + "v1/investments/getcategoriesandsubcategories",
                isAuth: true
            },

            PMAY_CALCULATOR: {
                name: "calculatePMAY",
                method: "POST",
                url: API_ENDPOINT_URL + "v1/pmay/getpmay",
                isAuth: true
            },
			/*
			 * MUTUAL_FUNDS_PLAN_DATA :{ name :"getFunds", method: "POST" },
			 */
            MUTUAL_FUNDS_PLAN_DATA: {
                name: "getFunds",
                method: "GET",
                url: API_ENDPOINT_URL + "v1/investments/getsubcategoryfunds",
                isAuth: true
            },
            /*AGE WISE CALCULATOR API'S*/
            AGE_WISE_CALCULATOR: {
                name: 'age-wise-calculator',
                method: "GET",
                url: '/content/bajajfinserv/masters.agewise.json',
                isAuth: false
            },
            /*TRENDING BLOGS API'S*/
            TRENDING_BLOGS_DATA: {
                name: 'trending-blogs-data',
                method: "GET",
                url: "https://www.bajajfinservmarkets.in/discover/wp-json/wp/v2/posts",
                isAuth: false
            }
        },
        VALIDATION_MSG: {
            TRAVEL: {
                QUOTE: {
                    COMPARE: {
                        MAX_PLAN: "Cannot add more than 2 products",
                        SELECT_ONE_MORE_PRODUCT: "Please Select One More Plan For Compare."
                    }
                }
            }
        }
    }
try {
    var AppData = {
        Api: {},
        Masters: {},
        QuoteData: {},
        localStorage: {
            props: {},
            setValue: function (prop, value) {
                if (prop && value) {
                    AppData.localStorage.props[prop] = value;
                    this.storeLocalStorageValue();
                    this.loadValue();
                }
            },
            loadValue: function () {
                this.loadLocalStorageValue();
                for (var prop in AppData.localStorage.props) {
                    var propElement = document.querySelectorAll("[data-localstorage=" + prop + "]");
                    if (propElement.length > 0) {
                        propElement.forEach(function (propEle) {

                            var label = findSelectorParent(propEle, ".label-input-group");
                            if (label) {
                                label.classList.add("focus");
                            }
                            propEle.value = AppData.localStorage.props[prop];
                            var eventTrigger = propEle.getAttribute("data-event-trigger") || "change";
                            $(propEle).trigger(eventTrigger)

                        })
                    }
                }
            },
            loadLocalStorageValue: function () {
                if (window.localStorage.hasOwnProperty("defaultUserValue")) {
                    AppData.localStorage.props = JSON.parse(window.localStorage.getItem("defaultUserValue"));
                }
            },
            storeLocalStorageValue: function () {
                window.localStorage.setItem("defaultUserValue", JSON.stringify(AppData.localStorage.props));
            }
        },
        CurrentAPIPlanData: {},
        AllElementOnKeyPressEvent: {},
        setAllElementOnKeyPressEvent: function (prop, data) {
            AppData.AllElementOnKeyPressEvent[prop] = data
            var object = AppData.AllElementOnKeyPressEvent
            for (var key in object) {
                if (object[key].status == true) {
                    var element = document.getElementById(key);
                    var regKeyPress = object[key].reg;
                    element.addEventListener("keypress", function (e) {
                        if (!regKeyPress.test(e.key)) {
                            e.preventDefault();
                        }
                    }, true)
                    object[key].status = false;

                } else {

                }
            }
        }
    };




    // /AppData.AllElementOnKeyPressEvent={};
    var AppEvent = {
        'eventMap': {},
        'addEventListener': function (name, cb) {
            this.eventMap[name] = cb;
        },
        'trigger': function (name, data) {
            var e = new CustomEvent(name);
            return this.eventMap[name](e, data);
        }
    };

    AppEvent.addEventListener(AppConstants.API_SELECTOR.PARTNER_LOGIN_GET_KEY.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.PARTNER_LOGIN_GET_KEY, data, "")
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.PARTNER_LOGIN.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.PARTNER_LOGIN, data, "")
    })
    /* FOR Country API Call */
    AppEvent.addEventListener(AppConstants.API_SELECTOR.COUNTRY_MASTER.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.COUNTRY_MASTER, "", loadCountryData)
    })

    /* TRAVEL API CALL */

    AppEvent.addEventListener(AppConstants.API_SELECTOR.TRAVEL_SEARCH_PLAN.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.TRAVEL_SEARCH_PLAN, data, searchPlans)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.TRAVEL_BUY_NOW.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.TRAVEL_BUY_NOW, data, travelBuyNow)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.TRAVEL_CALL_US.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.TRAVEL_CALL_US, data, "")
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.TRAVEL_COMPARE_PLANS.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.TRAVEL_COMPARE_PLANS, data, travelComparePlans)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.TRAVEL_EMAIL_QUOTE.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.TRAVEL_EMAIL_QUOTE, data, travelEmailQuote)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.TRAVEL_DOWNLOAD_BROCHURE.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.TRAVEL_DOWNLOAD_BROCHURE, data, travelDownloadBrochure)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.HEALTH_SEARCH_PLANS.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.HEALTH_SEARCH_PLANS, data, searchPlans)
    })
    /* Health API CALL */
    AppEvent.addEventListener(AppConstants.API_SELECTOR.HEALTH_CALL_US.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.HEALTH_CALL_US, data, "")
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.HEALTH_ZONE_PLAN.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.HEALTH_ZONE_PLAN, data, healthZonePlan)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.HEALTH_EMAIL_QUOTE.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.HEALTH_EMAIL_QUOTE, data, healthEmailQuote)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.HEALTH_BUY_NOW.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.HEALTH_BUY_NOW, data, travelBuyNow)
    })

    /* Cyber */
    AppEvent.addEventListener(AppConstants.API_SELECTOR.CYBER_BUY_NOW.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.CYBER_BUY_NOW, data, cyberBuyNow)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.CYBER_SEARCH_PLAN.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.CYBER_SEARCH_PLAN, data, cyberSearchPlan)
    })

    /* MOTOR API CALL */
    AppEvent.addEventListener(AppConstants.API_SELECTOR.MOTOR_SEARCH_PLANS.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.MOTOR_SEARCH_PLANS, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.MOTOR_SEARCH_PLANS_REG_NO.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.MOTOR_SEARCH_PLANS_REG_NO, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.MOTOR_GET_VEHICLE_DETAILS.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.MOTOR_GET_VEHICLE_DETAILS, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.MOTOR_GET_RTO_LIST.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.MOTOR_GET_RTO_LIST, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.MOTOR_CALL_US.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.MOTOR_CALL_US, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.MOTOR_EMAIL_QUOTE.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.MOTOR_EMAIL_QUOTE, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.MOTOR_GET_REFINED_PLANS.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.MOTOR_GET_REFINED_PLANS, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.MOTOR_BUY_NOW.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.MOTOR_BUY_NOW, data)
    })

    /* PERSONAL LOAN API CALL */

    /* EMI CALCULATOR API CALL */
    AppEvent.addEventListener(AppConstants.API_SELECTOR.EMI_CALCULATOR_SECURED_TERM.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.EMI_CALCULATOR_SECURED_TERM, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.EMI_CALCULATOR_SECURED_HYBRID.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.EMI_CALCULATOR_SECURED_HYBRID, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.EMI_CALCULATOR_UNSECURED_TERM.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.EMI_CALCULATOR_UNSECURED_TERM, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.EMI_CALCULATOR_UNSECURED_HYBRID.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.EMI_CALCULATOR_UNSECURED_HYBRID, data)
    })

    /* ELIGIBILITY CALCULATOR API CALL */
    AppEvent.addEventListener(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_COMMON_CALL.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_COMMON_CALL, data, callAPIForElegiCalc)
    })

    AppEvent.addEventListener(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_SALARIED.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_SALARIED, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_SALARIED_DOCTOR.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_SALARIED_DOCTOR, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_BL_SME.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_BL_SME, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_BL_DOCTOR.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_BL_DOCTOR, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_BL_CA.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_BL_CA, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_HL_BT_LAP.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.ELIGIBILITY_CALCULATOR_HL_BT_LAP, data)
    })

    /* CONTACT US */
    AppEvent.addEventListener(AppConstants.API_SELECTOR.CONTACT_US_EMAIL.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.CONTACT_US_EMAIL, data, contactUsApiCall)
    })

    /* UPI MERCHANT CONTACT US */
    AppEvent.addEventListener(AppConstants.API_SELECTOR.UPI_MERCHANT_CONTACT_US.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.UPI_MERCHANT_CONTACT_US, data, upiMerchantAPICall)
    })
    /*ULIP FLOW*/
    AppEvent.addEventListener(AppConstants.API_SELECTOR.ULIP_GET_PLAN_DATA.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.ULIP_GET_PLAN_DATA, data, ulipGetPlanApiCall)
    })

    AppEvent.addEventListener(AppConstants.API_SELECTOR.ULIP_GET_QUOTE_PLAN.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.ULIP_GET_QUOTE_PLAN, data, ulipGetQuoteAPICall)
    })

    AppEvent.addEventListener(AppConstants.API_SELECTOR.ULIP_FUND_MASTER_DATA.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.ULIP_FUND_MASTER_DATA, data, ulipFundMasterAPICall)
    })

    AppEvent.addEventListener(AppConstants.API_SELECTOR.ULIP_FUND_PERFORMANCE_MASTER_DATA.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.ULIP_FUND_PERFORMANCE_MASTER_DATA, data, ulipFundPerformanceMasterAPICall)
    })

    AppEvent.addEventListener(AppConstants.API_SELECTOR.ULIP_FETCH_RISK.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.ULIP_FETCH_RISK, data, ulipRiskCalcAPICall)
    })

    AppEvent.addEventListener(AppConstants.API_SELECTOR.ULIP_BUY_NOW.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.ULIP_BUY_NOW, data, ulipBuyNowAPICall)
    })

    AppEvent.addEventListener(AppConstants.API_SELECTOR.ULIP_CLICK_TO_CALL.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.ULIP_CLICK_TO_CALL, data, ulipClickToCall)
    })

    AppEvent.addEventListener(AppConstants.API_SELECTOR.ULIP_EMAIL_QUOTE.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.ULIP_EMAIL_QUOTE, data)
    })

    /* Offers Widget */
    AppEvent.addEventListener(AppConstants.API_SELECTOR.OFFER_DETAILS_PARTNER.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.OFFER_DETAILS_PARTNER, data, offerDetailAPICall)
    })
    /*AppEvent.addEventListener(AppConstants.API_SELECTOR.OFFER_DETAILS_PARTNER.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.OFFER_DETAILS_PARTNER, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.OFFER_DETAILS_PARTNER.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.OFFER_DETAILS_PARTNER, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.OFFER_DETAILS_PARTNER.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.OFFER_DETAILS_PARTNER, data)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.OFFER_DETAILS_PARTNER.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.OFFER_DETAILS_PARTNER, data)
    })*/

    /*OTP SERVICE*/
    AppEvent.addEventListener(AppConstants.API_SELECTOR.OTP_GENERATE.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.OTP_GENERATE, data, generateOtpAPICall)
    })
    AppEvent.addEventListener(AppConstants.API_SELECTOR.OTP_VALIDATE.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.OTP_VALIDATE, data, otpValidationAPICall)
    })

    /* BFL HTML SITEMAP*/
    AppEvent.addEventListener(AppConstants.API_SELECTOR.BFL_HTML_SITEMAP.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.BFL_HTML_SITEMAP, data)
    })

    /* INCOMETAX CALCULATOR*/
    AppEvent.addEventListener(AppConstants.API_SELECTOR.INCOMETAX_CALCULATOR.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.INCOMETAX_CALCULATOR, data, callIncomeTax)
    })


    /* HEALTH EXTRA CARE*/
    AppEvent.addEventListener(AppConstants.API_SELECTOR.HEALTH_CARE_EXTRA.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.HEALTH_CARE_EXTRA, data, healthcarextra)
    })
    /* AppEvent.addEventListener(AppConstants.API_SELECTOR.HEALTH_CARE_EXTRA.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.HEALTH_CARE_EXTRA.name, data, healthcarextra)
    })*/

    /* GPGP*/
    /*AppEvent.addEventListener(AppConstants.API_SELECTOR.GPGP_CALL_US.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.GPGP_CALL_US, data)
    })*/

    AppEvent.addEventListener(AppConstants.API_SELECTOR.GPGP_CALL_US.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.GPGP_CALL_US, data, GPGPBuyNowCall)
    })

    /* DIGITAL GOLD API CALL*/
    AppEvent.addEventListener(AppConstants.API_SELECTOR.DIGITAL_GOLD.name, function (e, data) {
        return sendAPICall(AppConstants.API_SELECTOR.DIGITAL_GOLD, data)
    })

    /* MUTUAL FUNDS API CALL*/

    AppEvent.addEventListener(AppConstants.API_SELECTOR.MUTUAL_FUNDS_CATEGORY.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.MUTUAL_FUNDS_CATEGORY, "", getCategoryApiCall)
    })

    AppEvent.addEventListener(AppConstants.API_SELECTOR.MUTUAL_FUNDS_PLAN_DATA.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.MUTUAL_FUNDS_PLAN_DATA, "", getFundsApiCall)
    })


    /* PMAY CALCULATOR*/
    AppEvent.addEventListener(AppConstants.API_SELECTOR.PMAY_CALCULATOR.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.PMAY_CALCULATOR, data, pmaysendAPICall)
    })

    /*AGE WISE API CALL*/
    AppEvent.addEventListener(AppConstants.API_SELECTOR.AGE_WISE_CALCULATOR.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.AGE_WISE_CALCULATOR, "", getAgeData)
    })

    /*TRENDING BLOGS API CALL*/
    AppEvent.addEventListener(AppConstants.API_SELECTOR.TRENDING_BLOGS_DATA.name, function (e, data) {
        return customAPICallForTravel(AppConstants.API_SELECTOR.TRENDING_BLOGS_DATA, "", apiCall)
    })

    var masterEvent = {
        'eventMap': {},
        'addEventListener': function (name, cb) {
            this.eventMap[name] = cb;
        },
        'trigger': function (name, data) {
            var e = new CustomEvent(name);
            return this.eventMap[name](e, data);
        }
    }

    masterEvent.addEventListener(AppConstants.MASTER_SELECTOR.COUNTRY.name, function (e, data) {
        return sendMastersCall(AppConstants.MASTER_SELECTOR.COUNTRY, data)
    })
    masterEvent.addEventListener(AppConstants.MASTER_SELECTOR.CITY.name, function (e, data) {
        return sendMastersCall(AppConstants.MASTER_SELECTOR.CITY, data)
    })
    masterEvent.addEventListener(AppConstants.MASTER_SELECTOR.PRODUCTS.name, function (e, data) {
        return sendMastersCall(AppConstants.MASTER_SELECTOR.PRODUCTS, data)
    })
    masterEvent.addEventListener(AppConstants.MASTER_SELECTOR.DEGREE.name, function (e, data) {
        return sendMastersCall(AppConstants.MASTER_SELECTOR.DEGREE, data)
    })
    masterEvent.addEventListener(AppConstants.MASTER_SELECTOR.FD.name, function (e, data) {
        return sendMastersCall(AppConstants.MASTER_SELECTOR.FD, data)
    })

    //Generic Calls
    masterEvent.addEventListener(AppConstants.MASTER_SELECTOR.SACHET.name, function (e, data) {
        return genericMastersCall(AppConstants.MASTER_SELECTOR.SACHET, data)
    })

} catch (err) {
    console.error(err)
}

'use strict';

Array.prototype.find = Array.prototype.find || function (callback) {
    if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
    } else if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
    }
    var list = Object(this);
    // Makes sures is always has an positive integer as length.
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    for (var i = 0; i < length; i++) {
        var element = list[i];
        if (callback.call(thisArg, element, i, list)) {
            return element;
        }
    }
};
if (typeof NodeList.prototype.forEach === "undefined") {
    NodeList.prototype.forEach = Array.prototype.forEach;
    NodeList.prototype.filter = Array.prototype.filter;
}

if (typeof HTMLCollection.prototype.forEach === "undefined") {
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
    HTMLCollection.prototype.filter = Array.prototype.filter;
}
if (typeof Number.prototype.isInteger === "undefined") {
    Number.prototype.isInteger = function (data) {
        return (typeof data === "number")
    }
}
if (typeof Number.isInteger === "undefined") {
    Number.isInteger = function (data) {
        return (typeof data === "number")
    }
}
Array.prototype.getUnique = function () {
    return this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    })
}
var authCount = 0;
var prevSelector = "";
var callToAuthToken = function getAuthToken(selector, data, returnStatus, callBack) {
    if(authCount == 0 || (prevSelector != selector)){
        var customerSecretKey ="";
        AppEvent.trigger(AppConstants.API_SELECTOR.PARTNER_LOGIN_GET_KEY.name).then(function(response){
            customerSecretKey = response.payload.secretKey;
            var reqObj = {
                "clientId":"bflclientwebsite",
                "secretKey": response.payload.secretKey
            };
            AppEvent.trigger("generatePartnerAuth", reqObj).then(function (response) {
                window.sessionStorage.setItem("SS_1", response.payload.tokens[0].token);
                if (returnStatus) {

                } else {
                    authCount = (prevSelector == selector) ? authCount+1 : 0;
                    prevSelector = selector;
                    callBack(selector, data);
                }
                toggleLoader(false);
            }).catch(function (res) {
                toggleLoader(false);
            });
        }).catch(function(res){
            console.log(res);
            toggleLoader(false);
        })
    }
}

var parseError = function callToParseError(resObj) {
	try{
		resObj = (typeof (resObj) != "object") ? JSON.parse(resObj) : "";
	    var errorBean = {};
	    if (resObj.status != 'SUCCESS') {
	        errorBean.code = "SRVERR";
	        errorBean.description = "Oops! Something went wrong. We are fixing it. Please try in a while";
	        return resObj.errorBean;
	    }
	    if (typeof (resObj.payload) == "object" && resObj.errorBean != null) {
	        if (resObj.errorBean.length > 1) {
	            return resObj.errorBean[0];
	        }
	    } else if (typeof (resObj.payload) == "object" && resObj.payload.errorDetails != null) {
	        if (resObj.payload.errorDetails.length > 1) {
	            return resObj.payload.errorDetails[0];
	        }
	    } else {
	        if (typeof (resObj.payload) != "object" && resObj.payload.status == undefined) {
	            return resObj;
	        }
	        else if (typeof (resObj.payload) != "object" && resObj.payload.status != "SUCCESS") {
	            var payloadString = resObj.payload;
	            var parsedResponse = JSON.parse(payloadString);
	            if (parsedResponse.returnStatus) {
	                var returnStatus = parsedResponse.returnText;
	                if (returnStatus.returnText != "SUCCESS") {
	                    errorBean.code = returnStatus.returnCode;
	                    errorBean.description = returnStatus.returnText;
	                    return resObj.errorBean;
	                }
	            }
	        }
	    }
	    return resObj;
	}catch(err){
		toggleLoader(false);
	}
	return null;
}

function customAPICallForTravel(selector, data, callBack) {
    try {
        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (selector.name == "country-master" || selector.name == "generatePartnerAuth") {
                    toggleLoader(false);
                }
                else {
                    toggleLoader(true);
                }
                if (this.readyState == 4 && this.status == 200) {
                    this.responseText = parseError(this.responseText);
                    toggleLoader(false);
                    console.log(JSON.parse(this.responseText));
                    AppData.Api[selector.name] = JSON.parse(this.responseText);
                    resolve(AppData.Api[selector.name]);
                } else if (this.readyState == 4 && this.status == 401) {
                    if (selector.isAuth) {
                        callToAuthToken(selector.name, data, false, callBack);
                    } else {
                        this.responseText = parseError(this.responseText);
                    }
                } else if (this.readyState == 4 && this.status != 200) {
                    toggleLoader(false);
                    console.log(JSON.parse(this.responseText));
                    reject(JSON.parse(this.responseText));
                }
            };
            xhttp.open(selector.method, selector.url, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            if (selector.isAuth) {
                var authToken="";
                if(selector.name == "offer-details-partner"){
                    authToken = window.sessionStorage.hasOwnProperty("website_ss_4") ? window.sessionStorage.getItem("website_ss_4") : "";
                }else {
                    authToken = window.sessionStorage.hasOwnProperty("SS_1") ? window.sessionStorage.getItem("SS_1") : callToAuthToken(selector, data, false, callBack);
                }
                xhttp.setRequestHeader("authtoken", authToken);
            }
            if (selector.method == "POST") {
                xhttp.send(JSON.stringify(data));
            } else {
                xhttp.send();
            }
        })
    } catch (e) {
        console.error(e);
    }
}

/*function customAPICallForTravel(selector, data, callBack) {
    //    var authToken = window.sessionStorage.hasOwnProperty("SS_1") ? selector.name == AppConstants.API_SELECTOR.PARTNER_LOGIN.name ? "" : window.sessionStorage.getItem("SS_1") : "";
    try {
        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
            	if(selector.name == "country-master" ){
            		toggleLoader(false);
            	}
            	else{
            		toggleLoader(true);
            	}
                if (this.readyState == 4 && this.status == 200) {
                    console.log(JSON.parse(this.responseText))
                    AppData.Api[selector.name] = JSON.parse(this.responseText);
                    resolve(AppData.Api[selector.name]);
                } else if (this.readyState == 4 && this.status == 401) {
                    if (selector.isAuth) {
                        callToAuthToken(selector.name, data, false, callBack);
                    }
                }
            };
            xhttp.open(selector.method, selector.url, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            if (selector.isAuth) {
                xhttp.setRequestHeader("authtoken", window.sessionStorage.hasOwnProperty("SS_1") ? window.sessionStorage.getItem("SS_1") : callToAuthToken(selector, data, false));
            }
            if(selector.name == "country-master" ){
            	xhttp.setRequestHeader("guardtoken","QiEmMWp8MTUyODM1MzM0OTI1N3xvOVVYUENicUdjM08=");
            	xhttp.send();
            }
            else{
            	xhttp.send(JSON.stringify(data));
            }
            
        })
    } catch (e) {
        console.error(e);
    }
}*/

function sendAPICall(selector, data) {
    try {
        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                toggleLoader(true);
                if (this.readyState == 4 && this.status == 200) {
                    showResponse(JSON.parse(this.responseText))
                    AppData.Api[selector.name] = JSON.parse(this.responseText)
                    resolve(AppData.Api[selector.name]);
                } else if (this.readyState == 4 && this.status == 400) {
                    toggleLoader(false);
                    reject(JSON.parse(this.responseText));
                    triggerError(this.responseText);
                    var data = JSON.parse(this.responseText);
                    if (data.code) {
                        toastr.error(data.code + " : " + data.description, '', {
                            timeOut: 5000,
                            "closeButton": true,
                            "preventDuplicates": true
                        });
                        console.log("This is if cond");
                    } else if (data.errorOtpcode) {
                        console.log(data);
                        toastr.error(data.errorOtpcode + " : " + data.description, '', {
                            timeOut: 5000,
                            "closeButton": true,
                            "preventDuplicates": true
                        });

                    } else if (data.error_code) {
                        console.log(data);
                        toastr.error(data.error_code + " : " + data.description, '', {
                            timeOut: 5000,
                            "closeButton": true,
                            "preventDuplicates": true
                        });
                        //function to disabled the button on error message 
                        hideOfferFields();
                    } else {
                        console.log("error hidden");
                    }

                } else if (this.readyState == 4 && this.status != 200) {
                    toggleLoader(false);
                    reject(JSON.parse(this.responseText));
                    triggerError(this.responseText)
                    var data = JSON.parse(this.responseText);
                    if (data.code) {
                        toastr.error(data.code + " : " + data.description, '', {
                            timeOut: 5000,
                            "closeButton": true,
                            "preventDuplicates": true
                        });
                        console.log("This is if cond");
                    } else {
                        toastr.error(this.statusText, '', {
                            timeOut: 5000,
                            "closeButton": true,
                        });
                    }
                    console.log("This is else cond");
                }
            };
            xhttp.open(selector.method, AppConstants.API_URI + "." + selector.name + "." + AppConstants.EXTENSION, true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(data);
        })
    } catch (e) {
        console.error(e);
    }
}

//SSO API CALL
function customAPICall(selector, url, data) {
    try {
        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                toggleLoader(true);
                if (this.readyState == 4 && this.status == 200) {
                    showResponse(JSON.parse(this.responseText))
                    AppData.Api[selector.name] = JSON.parse(this.responseText)
                    resolve(AppData.Api[selector.name]);
                } else if (this.readyState == 4 && this.status == 400) {
                    toggleLoader(false);
                    reject(JSON.parse(this.responseText));
                    triggerError(this.responseText);
                    var data = JSON.parse(this.responseText);
                    if (data.code) {
                        toastr.error(data.code + " : " + data.description, '', {
                            timeOut: 5000,
                            "closeButton": true,
                            "preventDuplicates": true
                        });
                        console.log("This is if cond");
                    } else if (data.errorOtpcode) {
                        console.log(data);
                        toastr.error(data.errorOtpcode + " : " + data.description, '', {
                            timeOut: 5000,
                            "closeButton": true,
                            "preventDuplicates": true
                        });

                    } else if (data.error_code) {
                        console.log(data);
                        toastr.error(data.error_code + " : " + data.description, '', {
                            timeOut: 5000,
                            "closeButton": true,
                            "preventDuplicates": true
                        });
                        //function to disabled the button on error message 
                        hideOfferFields();
                    } else {
                        console.log("error hidden");
                    }

                } else if (this.readyState == 4 && this.status != 200) {
                    toggleLoader(false);
                    reject(JSON.parse(this.responseText));
                    triggerError(this.responseText)
                    var data = JSON.parse(this.responseText);
                    if (data.code) {
                        toastr.error(data.code + " : " + data.description, '', {
                            timeOut: 5000,
                            "closeButton": true,
                            "preventDuplicates": true
                        });
                        console.log("This is if cond");
                    } else {
                        toastr.error(this.statusText, '', {
                            timeOut: 5000,
                            "closeButton": true,
                        });
                    }
                    console.log("This is else cond");
                }
            };
            xhttp.open(selector.method, url + "." + selector.name + "." + AppConstants.EXTENSION, true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(data);
        })
    } catch (e) {
        console.error(e);
    }
}
//SSO API CALL

function sendMastersCall(selector) {
    try {
        return new Promise(function (resolve, reject) {
            if (AppData.Masters[selector.name]) {
                resolve(AppData.Masters[selector.name])
            } else {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    toggleLoader(true);
                    if (this.readyState == 4 && this.status == 200) {
                        showResponse(JSON.parse(this.responseText))
                        AppData.Masters[selector.name] = JSON.parse(this.responseText);
                        resolve(AppData.Masters[selector.name]);
                    } else if (this.readyState == 4 && this.status != 200) {
                        toggleLoader(false);
                        reject(this.responseText);
                        triggerError(this.responseText)
                        toastr.error(this.statusText, '', {
                            timeOut: 5000,
                            "closeButton": true,
                        });
                    }
                };
                xhttp.open(selector.method, AppConstants.MASTERS_URI + "." + selector.name + "." + AppConstants.EXTENSION, true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send();
            }
        })
    } catch (e) {
        console.error(e);
    }
}

function genericMastersCall(selector) {
    try {
        return new Promise(function (resolve, reject) {
            if (AppData.Masters[selector.name]) {
                resolve(AppData.Masters[selector.name])
            } else {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    toggleLoader(true);
                    if (this.readyState == 4 && this.status == 200) {
                        showResponse(JSON.parse(this.responseText))
                        AppData.Masters[selector.name] = JSON.parse(this.responseText);
                        resolve(AppData.Masters[selector.name]);
                    } else if (this.readyState == 4 && this.status != 200) {
                        toggleLoader(false);
                        reject(this.responseText);
                        triggerError(this.responseText)
                        toastr.error(this.statusText, '', {
                            timeOut: 5000,
                            "closeButton": true,
                        });
                    }
                };
                xhttp.open(selector.method, AppConstants.GENERIC_MASTERS_URI + "." + selector.name + "." + AppConstants.EXTENSION, true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send();
            }
        })
    } catch (e) {
        console.error(e);
    }
}
/*
function getQuoteData(qid, newRequest) {
    try {
        return new Promise(function (resolve, reject) {
            if (AppData.QuoteData[qid] && newRequest == true) {
                resolve(AppData.QuoteData[qid])
            } else {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    toggleLoader(true);
                    if (this.readyState == 4 && this.status == 200) {
                        showResponse(JSON.parse(this.responseText))
                        AppData.QuoteData[qid] = JSON.parse(this.responseText);
                        resolve(AppData.QuoteData[qid]);
                    } else if (this.readyState == 4 && this.status != 200) {
                        toggleLoader(false);
                        triggerError(this.responseText)
                        reject(this.responseText);
                        toastr.error(this.statusText, '', {
                            timeOut: 5000,
                            "closeButton": true,
                        });
                    }
                };
                xhttp.open(AppConstants.GET_QUOTE_METHOD, AppConstants.GET_QUOTE_URI + qid + ".json", true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send();
            }
        })
    } catch (e) {
        console.error(e);
    }
}*/

function keyPressValidationActive() {
    try {
        document.querySelectorAll("[data-keypress-reg]").forEach(function (ele) {
            if (ele.id) {
                AppData.setAllElementOnKeyPressEvent(ele.id, {
                    status: true,
                    reg: new RegExp(ele.getAttribute("data-keypress-reg"))
                })
            }
        })
    } catch (e) {
        console.error(e);
    }
}

function ObjToFormData(obj) {
    try {

        var formData = new FormData();
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (typeof (value) !== "string") {
                value = JSON.stringify(value);
            }
            formData.append(key, value)
        })
        return formData;
    } catch (e) {
        console.error(e);
    }
}

function getFormData(id, callback, extraFormData, removeFormData, deleteFirstStatus) {
    try {
        var formElement = document.getElementById(id);
        var status = true;
        if (formElement) {
            formElement.onsubmit = function (e) {
                console.log(e)
                e.preventDefault();
                var formData = new FormData();
                formData.append("is-mobile", window.isMobile);
                formElement.querySelectorAll("[name]").forEach(function (ele) {
                    var formParentElement = findSelectorParent(formElement, "FORM")
                    var fieldNameEle = formParentElement.querySelector("[for=" + ele.id + "]");
                    console.log(fieldNameEle);
                    var name = ele.getAttribute("name");
                    if (fieldNameEle) {
                        var validateStatus = validateInput(ele, fieldNameEle.innerText.trim())
                        if (status == true) {
                            status = validateStatus;
                        }
                        if (validateStatus && name) {
                            formData.append(name, ele.getAttribute("data-value") || ele.value);
                        } else {
                            console.error("name attribute not set.");
                        }
                    } else {
                        var validateStatus = validateInput(ele)
                        if (status == true) {
                            status = validateStatus;
                        }
                        if (validateStatus && name) {
                            formData.append(name, ele.getAttribute("data-value") || ele.value);
                        } else {
                            console.error("name attribute not set.");
                        }
                        console.warn("field label now found by id");
                    }
                })
                if (status) {
                    if (typeof (extraFormData) === "object") {
                        if (deleteFirstStatus) {
                            for (key in removeFormData) {
                                formData.delete(key);
                            }
                            for (key in extraFormData) {
                                formData.append(key, (typeOf(extraFormData[key]) === "string") ? extraFormData[key] : JSON.stringify(extraFormData[key]))
                            }
                        } else {
                            for (key in extraFormData) {
                                formData.append(key, (typeOf(extraFormData[key]) === "string") ? extraFormData[key] : JSON.stringify(extraFormData[key]))
                            }
                            for (key in removeFormData) {
                                formData.delete(key);
                            }
                        }
                    }

                    formElement.querySelectorAll("[name]").forEach(function (ele) {
                        var localStorageData = ele.getAttribute("data-localstorage");
                        if (localStorageData) {
                            AppData.localStorage.setValue(localStorageData, ele.value)
                        }
                    })

                    callback(new URLSearchParams(formData).toString());
                } else {
                    status = true;
                    return undefined;

                }
            }
        }
    } catch (e) {
        console.error(e);
    }
}

function rangeValidation(min, max, value) {
    if (typeof (value) === "string") {
        value = parseFloat(value);
    }
    if (typeof (min) === "string") {
        min = parseFloat(min);
    }
    if (typeof (max) === "string") {
        max = parseFloat(max);
    }
    if (value) {

        if (min && max && min <= value && value <= max) {
            return true;
        } else {
            return false;
        }
        /*if (min && min <= value) {
            return true;
        } else {
            return false;
        }
        if (max && value <= max) {
            return true;
        } else {
            return false;
        }*/
    }
    return undefined;
}

function validateInput(ele, fieldName) {
    console.log("in validation");
    try {
        var isRequire = (ele.getAttribute("data-validation-required") == "true") ? true : false;
        var pattern = ele.hasAttribute("pattern");
        var min = ele.getAttribute("data-min") || ele.getAttribute("min");
        var max = ele.getAttribute("data-max") || ele.getAttribute("max");
        var value = ele.getAttribute("data-value") || ele.value;
        var status;
        var msg = "";

        if (isRequire && value) {
            if (pattern) {
                var regPattern = ele.getAttribute("pattern");
                msg = ele.getAttribute("errormsg");
                if (regPattern) {
                    var reg = new RegExp(regPattern, "g")
                    if (min && max) {

                        status = rangeValidation(min, max, value);
                    } else if (min) {
                        status = rangeValidation(min, max, value)
                    } else if (max) {
                        status = rangeValidation(min, max, value)
                    } else {
                        status = reg.test(value)
                    }
                } else {
                    console.error("Pattern not found!!!")
                }
            } else {
                status = true
            }
        } else if (isRequire == false) {
            if (pattern) {
                var regPattern = ele.getAttribute("pattern");
                msg = ele.getAttribute("errormsg");
                if (regPattern) {
                    var reg = new RegExp(regPattern, "g")
                    if (min && max) {
                        status = rangeValidation(min, max, value);
                    } else if (min) {
                        status = rangeValidation(min, max, value)
                    } else if (max) {
                        status = rangeValidation(min, max, value)
                    } else {
                        status = reg.test(value)
                    }
                } else {
                    console.error("Pattern not found!!!")
                }
            } else {
                status = true
            }
        } else {
            msg = (fieldName || "") + " field required";
            status = false
        }
        console.log("going into the error");
        showError((ele.id || "") + "ErrorMsg", msg, !status)
        return status;
    } catch (e) {
        console.error(e);
    }
}

function getValuesInObjectByKey(jsonData, str, arr) {
    if (typeof (jsonData) === "object") {
        if (jsonData.hasOwnProperty(str)) {
            arr.push(jsonData);
        } else {
            Object.keys(jsonData).forEach(function (data) {
                getValuesInObjectByKey(jsonData[data], str, arr)
            })
        }
        return arr
    } else {
        return arr
    }
}

function getFormattedDate(inputDt, inputMM, inputYY) {
    var fullDate = new Date();
    fullDate.setFullYear(inputYY);
    fullDate.setMonth(inputMM - 1);
    fullDate.setDate(inputDt);
    return fullDate;
}

function getFormattedDateTravel(inputDt, inputMM, inputYY) {
    var fullDate = new Date();
    fullDate.setFullYear(inputYY);
    fullDate.setMonth(inputMM - 1);
    fullDate.setDate(inputDt);
    console.log(fullDate.setMonth(inputMM - 1));
    console.log(fullDate);
    return fullDate;
}

function addZeroOnOneValue(currentId) {
    console.log(currentId);
    if (currentId.value.length == 1) {
        document.getElementById(currentId.id).value = "0" + currentId.value;

    }
}
//function appendZero(str,id){
//	if (str.length==1){
//	str = "0" + str;
//	} 
//$("#"+id).change(function(){
//  document.getElementById(id).value= str;
//});
//	return str;
//}
//
//function appendZero1(str,id){
//	if (str.length==1){
//	str = "0" + str;
//	} 
//  document.getElementById(id).value= str;
//	return str;
//}
//
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

$.fn.autoTab = function () {

    autoTabOn = true; // yes, it's global. If you turn off auto tabbing on one input, you turn it off for all
    var autoTabbedInputs = this.find('input');
    var almostTabbedInputs = autoTabbedInputs.not(':last-child'); // note we don't attach tabbing event to the last of an input group. If you tab out of there, you have a reason to
    var justAutoTabbed = false;
    var tabKeyDetected = false;
    var revTabKeyDetected = false;
    var inputField = false;

    // init
    var init = function () {
        detectKeyDown();
        detectKeyUp();
    }

    // keydown detection, hijack it if it's in the fields we're looking for
    var detectKeyDown = function () {
        autoTabbedInputs.on('keydown', function (ev) {
            // the field that you're in when you keydown might not be the field you're in when you keyup
            inputField = this;
            // detect keystroke in the fields 
            ev = ev || event;
            var charCode = null;
            if ("which" in ev)
                charCode = ev.which;
            else if ("keyCode" in e)
                charCode = ev.keyCode;
            else if ("keyCode" in window.event)
                charCode = window.event.keyCode;
            else if ("which" in window.event)
                charCode = window.event.which;
            // if tabbing forward
            if (charCode === 9 && !ev.shiftKey) {
                // if auto tabbing is off, don't change it's behavior
                if (!autoTabOn) {
                    return;
                }
                if (justAutoTabbed) {
                    ev.preventDefault();
                    //notifyAutoTabbingOff();
                    autoTabOn = false;
                    if ($('#autotab-toggle').length > 0) { // only used if toggle is present
                        $('#autotab-toggle').removeClass('on');
                    }
                }
                //  tabKeyDetected = true;
                // if tabbing backward
            } else if (charCode === 9 && ev.shiftKey) {
                //		        revTabKeyDetected = true;
                // backspace key fakes reverse tab
            } else if (charCode === 8 && this.value.length == 0) {
                //		        revTabKeyDetected = true;
                var jqEle = $(inputField).prevAll("input,select,textarea,a");
                if (jqEle && jqEle.length > 0) {
                    $(jqEle.get(0)).focus();
                }
                //$(this).prev("input,select,textarea,a").focus();
                // fake tab keystrokes
            } else if (
                charCode === 191 // "/" - for dates
                ||
                charCode === 111 // "/" - for dates (numberpad)
                ||
                charCode === 190 // "." - for IP addresses
                ||
                charCode === 110 // "." - for IP addresses (numberpad)
                ||
                charCode === 189 // "-" - for sortcodes
                ||
                charCode === 109 // "-" - for sortcodes (numberpad)
            ) {
                ev.preventDefault();
                // if we've not yet hit the max chars for this field, and haven't already just auto-tabbed, fake a tab key
                if (!hasHitMaxChars(this) && !justAutoTabbed) {
                    var jqEle = $(inputField).nextAll("input,select,textarea,a");
                    if (jqEle && jqEle.length > 0) {
                        $(jqEle.get(0)).focus();
                    }
                    //$(this).next("input,select,textarea,a").focus();
                }
            }
            // removed any flag to say we've just auto-tabbed
            justAutoTabbed = false;
        });
    }

    // entering text into auto-tabbed fields
    var detectKeyUp = function () {
        almostTabbedInputs.on('keyup', function (ev) {
            // if auto tabbing is off, bug out now
            if (!autoTabOn) {
                return;
            }
            // if the complimentary keydown was a tab key, ignore this event (and reset it for the next keyup)
            if (tabKeyDetected) {
                tabKeyDetected = false;
                return;
            }
            // if we were tabbing backwards, don't jump forwards again!
            if (revTabKeyDetected) {
                revTabKeyDetected = false;
                return;
            }
            // edge case: if you've tabbed from one input group to another, the inputField that was used in keyDown hasn't yet been set
            if (!inputField) {
                return;
            }
            // removed flag to say we've just auto-tabbed
            justAutoTabbed = false;
            // else auto-tab if the field is full
            if (hasHitMaxChars(inputField)) {

                var jqEle = $(inputField).nextAll("input,select,textarea,a");
                if (jqEle && jqEle.length > 0) {
                    $(jqEle.get(0)).focus();
                }
                //$(inputField).next().focus();
                // we've just auto-tabbed - flag it
                //		        justAutoTabbed = true;
            }
        })
    }

    // detect if a field has hit max chars
    var hasHitMaxChars = function (el) {
        var elObj = $(el);
        var maxFieldLength = elObj.attr('maxlength') || elObj.attr('size');
        var valueLength = el.value.length;
        if (valueLength >= maxFieldLength) {
            return true;
        }
        return false;
    }


    // init function!

    init();
}

$('#tabingEnable-start').autoTab();
$('#tabingEnable-end').autoTab();
$('#tabingEnable-end-offer').autoTab();
$('.bs-form.travelGetAQuoteForm #tabingEnable-start').autoTab();
$('.bs-form.travelGetAQuoteForm #tabingEnable-end').autoTab();
$('#tabEnable-login-DOB').autoTab();
$('#tabEnableRegitserDOB').autoTab();


function validate_date(e,r){$(e).on("pick.datepicker",function(n){setTimeout(function(){r.element(e)},100)})}function validation(){function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}function r(r){r.find("[name=cardNo]").keyup(function(){var n=$(this).val();console.log(e(n)),1==e(n)||""==n?($(this).next().html(""),16==this.value.length?(r.find("[name=mobileNo]").addClass("ignore"),r.find("[name=dob]").addClass("ignore")):(r.find("[name=mobileNo]").removeClass("ignore"),r.find("[name=dob]").removeClass("ignore"))):$(this).next().html("Please enter valid number")})}$("#register-form").validate({rules:{rno:{required:!0,alphanumeric:!0,minlength:7,maxlength:11}},submitHandler:function(e){return window.location="motor-get-a-quote.shtml",!1}}),$("#dont-remember-register-form").validate({rules:{rdate:{datepicker:!0}},submitHandler:function(e){return window.location="motor-get-a-quote.shtml",!1}}),$("#emi-form").validate({rules:{loanamount:{required:!0,number:!0},tenureloan:{required:!0,number:!0},interestrate:{required:!0,number:!0}},submitHandler:function(e){return $(".emi").show(),go_to(".emi"),!1}}),$("#getOtp").validate({rules:{password:{required:!0,number:!0}},errorPlacement:function(e,r){e.insertAfter(r.siblings(".last"))},submitHandler:function(e){return!1}}),$("#getOtpResend").validate({rules:{password:{required:!0,number:!0}},errorPlacement:function(e,r){e.insertAfter(r.siblings(".last"))},submitHandler:function(e){return!1}});var n=$("#myOffers");validate_date("#offerdate",n.validate({ignore:".ignore",rules:{mobileNo:{required:!0,number:!0,minlength:10,maxlength:10,allsame:!0},dob:{datepicker:!0,doblimit:!0}},submitHandler:function(e){return call_popup(n.find(".popup-click")),!1}}));var t=$("#diy-register");validate_date("[name=dob]",t.validate({ignore:".ignore",rules:{mobileNo:{required:!0,number:!0,minlength:10,maxlength:10},dob:{datepicker:!0,doblimit:!0}},submitHandler:function(e){return call_popup(t.find(".popup-click")),!1}})),r(n);var i=$("#myOffers1");$("#myOffers1").validate({ignore:".ignore",rules:{mobileNo:{required:!0,number:!0,minlength:10,maxlength:10},dob:{datepicker:!0}},submitHandler:function(e){return show_hide(".bs-my-offers .form2",".bs-my-offers .form1"),!1}}),r(i),$("#getOtp1").validate({rules:{password:{required:!0,number:!0}},errorPlacement:function(e,r){e.insertAfter(r.siblings(".last"))},submitHandler:function(e){return show_hide(".bs-my-offers .form3",".bs-my-offers .form2"),!1}}),$("#myOffers2").validate({rules:{cardNo:{required:!0,number:!0,minlength:16,maxlength:16}},submitHandler:function(e){return!1}}),$("#getOtpResend").validate({rules:{password:{required:!0,number:!0}},errorPlacement:function(e,r){e.insertAfter(r.siblings(".last"))},submitHandler:function(e){return!1}}),$("#ulip-investment").validate({rules:{invest_amount:{required:!0,number:!0,minStrict:25e3},assured_age:{required:!0,number:!0,range:[1,60]}},messages:{invest_amount:{minStrict:"Minimum amount should be 25000 for yearly."}},submitHandler:function(e){return!1}}),$("#amtyear").on("change",function(){"yearly"==this.value?$("[name=invest_amount]").rules("add",{minStrict:25e3,messages:{minStrict:"Minimum amount should be 25000 for yearly."}}):"half-yearly"==this.value?$("[name=invest_amount]").rules("add",{minStrict:12500,messages:{minStrict:"Minimum amount should be 12500 for half-yearly."}}):"quarterly"==this.value?$("[name=invest_amount]").rules("add",{minStrict:6500,messages:{minStrict:"Minimum amount should be 6500 for quarterly."}}):$("[name=invest_amount]").rules("add",{minStrict:2500,messages:{minStrict:"Minimum amount should be 2500 for monthly."}})}),$("#ulip-child").validate({rules:{invest_amount:{required:!0,number:!0,minStrict:25e3},age:{required:!0,number:!0,range:[18,99]},assured_age:{required:!0,number:!0,range:[1,17]}},messages:{invest_amount:{minStrict:"Minimum amount should be 25000 for yearly."}},submitHandler:function(e){return!1}}),$("#ulip-tile-investment").validate({rules:{invest_amount:{required:!0,number:!0},age:{required:!0,number:!0,maxlength:2},assured_age:{required:!0,number:!0,maxlength:2}},submitHandler:function(e){return show_hide("#tile-data","#tile-form"),!1}}),$("#compareulipform").validate({rules:{amtinvest:{required:!0,number:!0}},submitHandler:function(e){return!1}}),$("#elegible-form").validate({rules:{netincome:{required:!0,number:!0},totalemi:{required:!0,number:!0},degree:{required:!0},experience:{required:!0,number:!0},loanamount:{required:!0,number:!0},startdate:{datepicker:!0},mobnumber:{number:!0,minlength:7,maxlength:10}},errorPlacement:function(e,r){1==r.parent().parent().hasClass("bs-dropdown")?e.insertAfter(r.parent().parent()):r.after(e)},submitHandler:function(e){return!1}}),$("#diy-form").submit(function(){return show_hide(".diy-policy",".diy-form-wrapper"),!1})}jQuery.validator.addMethod("datepicker",function(e,r){return"DD/MM/YYYY"!=e},"This field is required."),jQuery.validator.addMethod("doblimit",function(e,r){var n=$("#offerdate").datepicker("getDate"),t=new Date;return!(getAge(n,t)<23)},"Minimum Age Limit is 23 years."),jQuery.validator.addMethod("allsame",function(e,r){for(var n=1,t=1;t<e.length;t++)e.charAt(0)==e.charAt(t)&&n++;return n!=e.length},"All the character can not be same."),$.validator.addMethod("minStrict",function(e,r,n){return e>=n},jQuery.validator.format(" {0}")),$(document).ready(function(){});
function tab_sticky() {
    try {
        if (top_w = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop, $("#tab-tiles").length > 0) {
            $("#tab-tiles").parent().next().offset() || $("#tab-tiles").next().offset();
            top_w < $("#tab-tiles").parent().next().offset().top ? ($(".bs-tile").removeClass("sticky"), $("body").css("margin-top", "0"), $(".bs-tile").css("top", "0")) : ($("body").css("margin-top", $("#tab-tiles .bs-tile").innerHeight() + parseInt($(".bs-tile").css("marginTop"))), $(".bs-tile").addClass("sticky"), $(".bs-tile.sticky").css("top", $(".bs-header").innerHeight() + Math.abs(parseInt($(".bs-tile").css("marginTop")))))
        }
    } catch (e) {
        console.log(e)
    }
}

function top_menu_show() {
    try {
        var e = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
        if ($("#tab_menu_inner").length > 0) {
            var t = $("#tab_menu_inner").parent().parent().next().offset() || $("#tab_menu_inner").parent().next().offset() || $("#tab_menu_inner").next().offset();
            e > t.top ? ($("#tab_menu_inner .bs-tile-sticky").addClass("active"), $("#tab_menu_inner .bs-tile-sticky").css("top", $(".bfs-header-wrap").innerHeight()), $(".bfs-header-wrap").addClass("sub-header-active"), $(window).width() < breakpoint_sm && $(".bs-float-btn").show("1000")) : ($("#tab_menu_inner .bs-tile-sticky").removeClass("active"), $("#tab_menu_inner .bs-tile-sticky").css("top", "0"), $(".bfs-header-wrap").removeClass("sub-header-active"), $(window).width() < breakpoint_sm && $(".bs-float-btn").hide("1000"))
        }
    } catch (e) {
        console.log(e)
    }
}

function contactForm() {
    try {
        $("#ptype").change(function() {
            var e = $(this).val();
            $("#existing-customer").is(":checked") ? "insurence" == e ? $(".contact-form .insurence").show() : "loan" == e ? ($("#myPopup-redirect").fadeIn(), $(".contact-form .insurence").hide()) : $(".contact-form .insurence").hide() : $(".contact-form .insurence").hide()
        }), $("#existing-customer").bind("click", function() {
            $(this).is(":checked") || $(".contact-form .insurence").hide(), $(".contact-form #ptype")[0].selectedIndex = 0, $("#ptype").trigger("change")
        })
    } catch (e) {
        console.log(e)
    }
}
var quoteSwiperVar, fundRiderSwiper;

function quoteSwiper() {
    try {
        $(".quote-swiper").length && (quoteSwiperVar = new Swiper(".quote-swiper", {
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            slidesPerView: 2,
            speed: 600,
            slidesPerGroup: 1,
            spaceBetween: 30,
            initialSlide: 0,
            slideToClickedSlide: !0,
            centeredSlides: !1,
            breakpoints: {
                1200: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    slideToClickedSlide: !1
                }
            }
        }))
    } catch (e) {
        console.log(e)
    }
}

function searchResult() {
    try {
        $(".search-section #search").keypress(function(e) {
            "13" == (e.keyCode ? e.keyCode : e.which) && ($(".btn-icon").hide(), $(".btn-close").fadeIn()), e.stopPropagation()
        }), $(".search-section .btn-close").click(function() {
            $(".btn-close").fadeOut("0", function() {
                $(".search-btn").fadeIn("fast")
            }), $(this).prevAll("#search").val("").focusout()
        })
    } catch (e) {
        console.log(e)
    }
}

function playVideo() {
    try {
        $(".video-wrap").on("click", function() {
            $(this).find("img").css("opacity", "0"), $(this).find(".video").fadeIn(800)
        })
    } catch (e) {
        console.log(e)
    }
}

function protectLoan() {
    try {
        heightRecal(), $("#protect-loan-chk,#part-loan-chk").on("change", function() {
            var e;
            $(this).prop("checked") ? ($(".lyt-protector-flow").addClass("active lg"), $(this).parents("li").addClass("active"), $(this).hasClass("typ-one") && $(".step-two .icon-wrap").click(), winWidth < 768 ? (e = $(".step-two").height() + 120, $(".lyt-protector-flow .card").css("min-height", e)) : (e = $(".step-two").height() + 60, $(".lyt-protector-flow .card").css("min-height", e))) : ($(this).closest(".protector-list").find(" .final-txt").fadeOut(), setTimeout(function() {
                heightRecal()
            }, 500), $(".new-price").fadeOut("2000"), $(".old-price").removeClass("cut-price"))
        }), $(".step-two .icon-wrap").on("click", function() {
            var e;
            return $(".step-two").hide(), $(".step-three").fadeIn(800), $(".protector-list li.active").find('input[type="checkbox"]').hasClass("typ-one") || ($(".lyt-protector-flow").removeClass("active"), $(".protector-list li.active .final-txt").fadeIn(), $(".protector-list li").removeClass("active"), ($("#protect-loan-chk").prop("checked") || $("#part-loan-chk").prop("checked")) && ($(".final-total-amount").fadeIn(), $(".new-price").fadeIn(), $(".old-price").addClass("cut-price"), go_to("#quote-card")), setTimeout(function() {
                heightRecal()
            }, 0)), winWidth < 768 ? (e = $(".step-three").height() + 120, $(".lyt-protector-flow .card").css("min-height", e)) : (e = $(".step-three").height() + 60, $(".lyt-protector-flow .card").css("min-height", e)), !1
        }), $(".step-three .icon-wrap").on("click", function() {
            $(".lyt-protector-flow").removeClass("active"), $(".protector-list li.active .final-txt").fadeIn(), $(".step-two").show(), $(".step-three").hide(), $(".protector-list li").removeClass("active"), $(".final-total-amount").fadeIn(), $(".new-price").fadeIn(), $(".old-price").addClass("cut-price"), go_to("#quote-card"), heightRecal()
        })
    } catch (e) {
        console.log(e)
    }
}

function heightRecal() {
    try {
        var e;
        e = winWidth < 768 ? 0 : $(".protector-list li:first-child").outerHeight() + 60, $(".protector-list li").each(function() {
            winWidth < 768 ? e += $(this).outerHeight() : $(this).outerHeight() > e && (e = $(this).outerHeight() + 60), $(".lyt-protector-flow .card").css("min-height", e)
        })
    } catch (e) {
        console.log(e)
    }
}

function columnChart() {
    try {
        google.charts.load("current", {
            packages: ["corechart", "bar"]
        }), google.charts.setOnLoadCallback(function() {
            var e = new google.visualization.DataTable;
            e.addColumn("timeofday"), e.addColumn("number"), e.addRows([
                [{
                    v: [1],
                    f: "8"
                }, 1],
                [{
                    v: [4],
                    f: "9"
                }, 2],
                [{
                    v: [5],
                    f: "10"
                }, 3],
                [{
                    v: [6],
                    f: "11"
                }, 4],
                [{
                    v: [7],
                    f: "12"
                }, 5],
                [{
                    v: [8],
                    f: "1"
                }, 6],
                [{
                    v: [9],
                    f: "2"
                }, 7]
            ]);
            new google.visualization.ColumnChart(document.getElementById("column-chart")).draw(e, {
                title: "",
                height: 400,
                legend: "bottom",
                hAxis: {
                    title: "Years",
                    viewWindow: {
                        min: [2],
                        max: [9]
                    }
                }
            })
        })
    } catch (e) {
        console.log(e)
    }
}

function motor_editAmount() {
    try {
        var e, t, i = 0;
        $(".editable .icon-edit").click(function() {
            triggerMotorIDVConsideredEditStart(), (e = $(this).closest(".editable")).hasClass("edit-mode-on") ? (e.removeClass("edit-mode-on"), e.find(".final-amount .amount").text(t)) : (i = e.find(".final-amount .amount").text(), console.log(i), i = parseNumberCustom(i), console.log(i), e.addClass("edit-mode-on"), e.find("input").val(""), e.find("input").val(i), e.find("input").focus())
        }), $(".editable .change-amount").keyup(function() {
            var i = $(this),
                s = i.val(),
                n = parseNumberCustom(s),
                a = i.attr("data-min"),
                o = i.attr("data-max");
            a = parseNumberCustom(a), n > (o = parseNumberCustom(o)) || n < a || "" == s ? (toastr.error("Considered amount should be between " + a + " - " + o, "", {
                timeOut: 2e3,
                closeButton: !0,
                preventDuplicates: !0
            }), i.addClass("error"), e.find(".icon-edit").prop("disabled", !0), i.parents(".bs-step").find(".step-next").prop("disabled", !0)) : ($(this).removeClass("error"), e.find(".icon-edit").prop("disabled", !1), t = digitToAmount(s), i.parents(".bs-step").find(".step-next").prop("disabled", !1))
        })
    } catch (e) {
        console.log(e)
    }
}

function limitCheckbox() {
    try {
        $(".bs-motor-card").length && $(".rider-plan input:checkbox").click(function() {
            var e = $(window).width(),
                t = $(this).closest(".rider-plan"),
                i = $("input:checkbox[name='" + $(this).attr("name") + "']:checked").length,
                s = "input:checkbox[name='" + $(this).attr("name") + "']";
            $(s).prop("checked", ""), $(this).prop("checked", "checked");
            var n = $(this).closest(".motor-card-inner"),
                a = $(this).attr("id");
            console.log(i), 0 == i ? ($(s).prop("checked", ""), n.find(".motor-plan-card-wrap").stop(!0, !0).fadeOut(function() {
                setTimeout(function() {
                    n.find(".no-plan-selected").stop(!0, !0).fadeIn()
                }, 100)
            })) : n.find(".motor-plan-card-wrap").stop(!0, !0).fadeOut(function() {
                setTimeout(function() {
                    n.find(".motor-plan-card-wrap[name='" + a + "']").stop(!0, !0).fadeIn()
                }, 100)
            });
            t.offset().top;
            e <= breakpoint_xs && go_to(t)
        })
    } catch (e) {
        console.log(e)
    }
}

function addToCompare() {
    try {
        $(".button-wrap .compare").click(function() {
            $(".lyt-compare").slideDown()
        })
    } catch (e) {
        console.log(e)
    }
}

function autoCompleteDd() {
    try {
        $("#trav-to-country").tokenInput([{
            id: 7,
            name: "Ruby"
        }, {
            id: 11,
            name: "Python"
        }, {
            id: 13,
            name: "JavaScript"
        }, {
            id: 17,
            name: "ActionScript"
        }, {
            id: 19,
            name: "Scheme"
        }, {
            id: 23,
            name: "Lisp"
        }, {
            id: 29,
            name: "C#"
        }, {
            id: 31,
            name: "Fortran"
        }, {
            id: 37,
            name: "Visual Basic"
        }, {
            id: 41,
            name: "C"
        }, {
            id: 43,
            name: "C++"
        }, {
            id: 47,
            name: "Java"
        }]), $("#business-type").tokenInput([{
            id: 7,
            name: "Ruby"
        }, {
            id: 11,
            name: "Python"
        }, {
            id: 13,
            name: "JavaScript"
        }, {
            id: 17,
            name: "ActionScript"
        }, {
            id: 19,
            name: "Scheme"
        }, {
            id: 23,
            name: "Lisp"
        }, {
            id: 29,
            name: "C#"
        }, {
            id: 31,
            name: "Fortran"
        }, {
            id: 37,
            name: "Visual Basic"
        }, {
            id: 41,
            name: "C"
        }, {
            id: 43,
            name: "C++"
        }, {
            id: 47,
            name: "Java"
        }]), $("#degree").tokenInput([{
            id: 7,
            name: "Ruby"
        }, {
            id: 11,
            name: "Python"
        }, {
            id: 13,
            name: "JavaScript"
        }, {
            id: 17,
            name: "ActionScript"
        }, {
            id: 19,
            name: "Scheme"
        }, {
            id: 23,
            name: "Lisp"
        }, {
            id: 29,
            name: "C#"
        }, {
            id: 31,
            name: "Fortran"
        }, {
            id: 37,
            name: "Visual Basic"
        }, {
            id: 41,
            name: "C"
        }, {
            id: 43,
            name: "C++"
        }, {
            id: 47,
            name: "Java"
        }]), $("#specialisation").tokenInput([{
            id: 7,
            name: "Ruby"
        }, {
            id: 11,
            name: "Python"
        }, {
            id: 13,
            name: "JavaScript"
        }, {
            id: 17,
            name: "ActionScript"
        }, {
            id: 19,
            name: "Scheme"
        }, {
            id: 23,
            name: "Lisp"
        }, {
            id: 29,
            name: "C#"
        }, {
            id: 31,
            name: "Fortran"
        }, {
            id: 37,
            name: "Visual Basic"
        }, {
            id: 41,
            name: "C"
        }, {
            id: 43,
            name: "C++"
        }, {
            id: 47,
            name: "Java"
        }]), $("#city").tokenInput([{
            id: 7,
            name: "Ruby"
        }, {
            id: 11,
            name: "Python"
        }, {
            id: 13,
            name: "JavaScript"
        }, {
            id: 17,
            name: "ActionScript"
        }, {
            id: 19,
            name: "Scheme"
        }, {
            id: 23,
            name: "Lisp"
        }, {
            id: 29,
            name: "C#"
        }, {
            id: 31,
            name: "Fortran"
        }, {
            id: 37,
            name: "Visual Basic"
        }, {
            id: 41,
            name: "C"
        }, {
            id: 43,
            name: "C++"
        }, {
            id: 47,
            name: "Java"
        }])
    } catch (e) {
        console.log(e)
    }
}

function tab_to_sticky() {
    try {
        return element = $(".tab-to-sticky"), element.find(".tile-sticky-list li").click(function() {
            var e = $(this).index() + 1;
            $(element.attr("data-tab")).find("li:nth-of-type(" + e + ")").trigger("click"), $(this).siblings().removeClass("active"), $(this).addClass("active")
        }), !1
    } catch (e) {
        console.log(e)
    }
}

function getAge(e, t) {
    try {
        var i = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())),
            s = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())),
            n = i.getDate() - s.getDate();
        n < 0 && (i.setMonth(i.getMonth() - 1), n += DaysInMonth(i));
        var a = i.getMonth() - s.getMonth();
        a < 0 && (i.setFullYear(i.getFullYear() - 1), a += 12);
        var o = i.getFullYear() - s.getFullYear();
        return o > 1 ? " years" : " year", a > 1 ? " months" : " month", n > 1 ? " days" : " day", o
    } catch (e) {
        console.log(e)
    }
}

function DaysInMonth(e) {
    try {
        var t = new Date(e.getFullYear(), e.getMonth(), 1);
        return (new Date(e.getFullYear(), e.getMonth() + 1, 1) - t) / 864e5
    } catch (e) {
        console.log(e)
    }
}

function call_popup(e) {
    try {
        var t = e.attr("data-target");
        $(t).fadeIn().addClass("active"), $("body").addClass("body-scroll-disable")
    } catch (e) {
        console.log(e)
    }
}

function filter_slider(e) {
    try {
        var t = $("#" + e);
        if (t.length > 0) {
            var i = document.getElementById(e);
            noUiSlider.create(i, {
                start: 0,
                behaviour: "tap",
                connect: [!0, !1],
                range: {
                    min: 0,
                    "20%": 20,
                    "25%": 25,
                    "35%": 35,
                    "45%": 45,
                    max: 50
                },
                snap: !0,
                pips: {
                    mode: "values",
                    values: [0, 20, 25, 35, 45, 50],
                    snap: !0,
                    format: wNumb({
                        suffix: "%"
                    })
                }
            }), i.noUiSlider.on("change", function() {
                var e = parseInt(i.noUiSlider.get());
                t.next().find(".value").html(e + "%")
            }), $(".plus-slider").click(function() {
                var e = parseInt(i.noUiSlider.get()) + 10;
                e <= 50 && (i.noUiSlider.set(e), $(this).prev().html(e + "%"))
            }), $(".minus-slider").click(function() {
                var e = parseInt(i.noUiSlider.get()) - 10;
                e >= 0 && (i.noUiSlider.set(e), $(this).next().html(e + "%"))
            })
        }
    } catch (e) {
        console.log(e)
    }
}

function tile_slider(e, t, i) {
    try {
        var s, n, a, o, r, l, c, d, p, u = document.getElementById(e),
            f = $("#" + e);
        $.each(t, function(e, t) {
            $.each(t, function(e, t) {
                "Low" == t.value && (s = parseInt(t.minScoreValue), n = parseInt(t.maxScoreValue)), "Moderate" == t.value && (a = parseInt(t.minScoreValue), o = parseInt(t.maxScoreValue)), "High" == t.value && (r = parseInt(t.minScoreValue), l = parseInt(t.maxScoreValue)), "Very High" == t.value && (c = parseInt(t.minScoreValue), d = parseInt(t.maxScoreValue))
            });
            var h = (n - s) / (p = d - s) * 100;
            f.find(".green-bar").css("width", h + "%");
            var m = (o - a + 1) / p * 100;
            f.find(".yellow-bar").css({
                width: m + "%",
                left: h + "%"
            });
            var v = (l - r + 1) / p * 100;
            f.find(".orange-bar").css({
                width: v + "%",
                left: h + m + "%"
            });
            var w = (d - c + 1) / p * 100;
            f.find(".red-bar").css("width", w + "%"), f.length > 0 && noUiSlider.create(u, {
                start: i,
                behaviour: "tap",
                connect: [!1, !1],
                range: {
                    min: s,
                    max: d
                },
                pips: {
                    mode: "values",
                    values: [s, n, o, l, d],
                    density: 5
                }
            })
        })
    } catch (e) {
        console.log(e)
    }
}

function motor_step() {
    try {
        var e;
        $(".bs-step").each(function() {
            var t = $(this),
                i = t.find(".stepper-wrapper .step").length;
            t.find("form");

            function s(e) {
                switch (e < 2 ? t.find(".step-prev").hide() : t.find(".step-prev").show(), e == i || show_hide(t.find(".step-next"), t.find(".final-step-btn")), e) {
                    case 1:
                        t.find(".step-next").attr("data-step", 1), t.find(".step-next").removeAttr("disabled"), t.find(".step-list li:nth-of-type(1)").trigger("click"), t.find(".step2 .motor-card-inner:nth-of-type(1)").show(), t.find(".step2 .motor-card-inner:nth-of-type(2)").hide();
                        break;
                    case 2:
                        $(".motor-datepicker").on("pick.datepicker", function(e) {
                            var i = $(this).datepicker("getDate", !0, {
                                dateFormat: "yyyy-mm-dd"
                            });
                            t.find(".expiry-date").html(i)
                        }), t.find(".step-next").attr("data-step", 2), t.find(".inner_steps .inner-step:nth-of-type(1)").show(), t.find(".inner_steps .inner-step:nth-of-type(1)").show(), $(".card-summary>.step-next").prop("disabled", !0);
                        break;
                    case 3:
                        show_hide(t.find(".final-step-btn"), t.find(".step-next")), t.find(".step-list li:nth-of-type(1)").trigger("click"), t.find(".step2 .motor-card-inner:nth-of-type(1)").show(), t.find(".step2 .motor-card-inner:nth-of-type(2)").hide(), $(".buynow-check").css("display", "block")
                }
            }
            t.find(".step-next").click(function(i) {
                "TWGI" == AppData.QuoteData[quoteCode].payload.insProductType ? twowheelercallAjaxForMotorRefine("#planAmountStage1-" + $(this).attr("data-variantCode"), i).then(function(i) {
                    toggleLoader(!1), (e = t.find(".stepper-wrapper .step.active")).index(), e.fadeOut(function() {
                        e.next().fadeIn(function() {
                            e.next().addClass("active"), e.removeClass("active")
                        })
                    }), t.find(".steps-list ul .steps.active").removeClass("active").next().addClass("active"), s(t.find(".steps-list ul .steps.active").index() + 1)
                }) : "FWGI" == AppData.QuoteData[quoteCode].payload.insProductType && callAjaxForMotorRefine("#planAmountStage1-" + $(this).attr("data-variantCode"), i).then(function(i) {
                    toggleLoader(!1), (e = t.find(".stepper-wrapper .step.active")).index(), e.fadeOut(function() {
                        e.next().fadeIn(function() {
                            e.next().addClass("active"), e.removeClass("active")
                        })
                    }), t.find(".steps-list ul .steps.active").removeClass("active").next().addClass("active"), s(t.find(".steps-list ul .steps.active").index() + 1)
                })
            }), t.find(".step-prev").click(function() {
                e = t.find(".stepper-wrapper .step.active"), $(".buynow-check").css("display", "none"), e.fadeOut(function() {
                    e.prev().fadeIn(function() {
                        e.prev().addClass("active"), e.removeClass("active")
                    })
                }), t.find(".steps-list ul .steps.active").removeClass("active").prev().addClass("active"), s(t.find(".steps-list ul .steps.active").index() + 1)
            }), t.find(".motor-datepicker").on("hide.datepicker", function(e) {})
        })
    } catch (e) {
        console.log(e)
    }
}

function toggleFeatureList() {
    try {
        var e = $(".feature-list li:first-child").outerHeight() + $(".feature-list li:nth-child(3)").outerHeight();
        $(".feature-list").height(e);
        var t = 0;
        winWidth < breakpoint_sm && ($(".feature-list li").each(function(e) {
            if (e < 4) {
                var i = $(this).outerHeight();
                t += i
            }
        }), $(".feature-list").height(t)), $(".bs-features-list .know-more").click(function() {
            var e = $(this).closest(".bs-features-list");
            e.addClass("active");
            var t = e.find(".number-list").outerHeight();
            e.find(".feature-list").height(t)
        }), $(".bs-features-list .know-less").click(function() {
            var t = $(this).closest(".bs-features-list");
            t.removeClass("active"), t.find(".feature-list").height(e)
        })
    } catch (e) {
        console.log(e)
    }
}

function otpFocus() {
    try {
        $(".label-input-group.typ-otp .form-control").on("keyup", function(e) {
            var t = $(this).val().length;
            e.preventDefault(), console.log(t), t >= 6 && $("button[type='submit']").focus()
        })
    } catch (e) {
        console.log(e)
    }
}

function editDetailsPopup() {
    try {
        $(".js-edit-popup-details").on("click", function() {
            $(".bs-my-offers #myOffers input[name=mobileNo]").focus()
        })
    } catch (e) {
        console.log(e)
    }
}

function myOffersOpenClose() {
    try {
        $(".js-offer-open").on("click", function() {
            $(this).parent(".bs-my-offers").toggleClass("active").css("z-index", "22"), $(".bs-my-offers.ffrfix").removeClass("active").css("z-index", "11"), $(".bfs-overlay").toggleClass("openn"), $("body").toggleClass("no-overflow")
        }), $(".js-ffr-open").on("click", function() {
            console.log("hello"), $(this).parent(".bs-my-offers").toggleClass("active").css("z-index", "22"), $(".bs-my-offers.offerfix").removeClass("active").css("z-index", "11"), $(".bfs-overlay").toggleClass("openn"), $("body").toggleClass("no-overflow")
        }), $(".js-offer-close").on("click", function() {
            $(this).parent(".bs-my-offers").removeClass("active"), $(".bfs-overlay").removeClass("openn"), $("body").removeClass("no-overflow")
        }), $(document).mouseup(function(e) {
            var t = $(".bs-my-offers");
            t.is(e.target) || 0 !== t.has(e.target).length || 1 == $(".bs-my-offers").hasClass("active") && ($(".bs-my-offers").removeClass("active"), $(".bfs-overlay").removeClass("openn"), $("body").removeClass("no-overflow"))
        })
    } catch (e) {
        console.log(e)
    }
}

function searchOpenClose() {
    try {
        $(".js-search-open").on("click", function() {
            $(".bs-search.typ-head").addClass("active"), $(".overlay").addClass("open")
        }), $(".js-search-close").on("click", function() {
            $(this).parents(".bs-search.typ-head").removeClass("active"), $(".overlay").removeClass("open"), $(".bs-search.typ-head .search-option-list").removeClass("active")
        }), $(".js-search-open-list").on("click", function() {
            $(this).parents(".bs-search.typ-head").find(".search-option-list").addClass("active"), $(".overlay").hasClass("open") || $(".overlay").addClass("open")
        }), $(document).mouseup(function(e) {
            var t = $(".bs-search.typ-head");
            t.is(e.target) || 0 !== t.has(e.target).length || 1 == $(".bs-search.typ-head").hasClass("active") && ($(".bs-search.typ-head").removeClass("active"), $(".bs-search.typ-head .search-option-list").removeClass("active"), $(".overlay").removeClass("open"))
        })
    } catch (e) {
        console.log(e)
    }
}

function hide_textbox() {
    try {
        $(document).on("click", ".checkbox", function() {
            $(this).is(":checked") ? $(this).parent().parent().parent().siblings().find("input").removeAttr("disabled").removeAttr("readonly") : $(this).parent().parent().parent().siblings().find("input").attr("disabled", "true").attr("readonly", "true")
        }), $("input[type=radio][name=insuring-radio]").change(function() {
            $(this).parent().parent().parent().siblings().find("input").removeAttr("disabled").removeAttr("readonly"), $(this).parent().parent().parent().parent().siblings().find("input[type=text],input[type=tel],input[type=number]").val("").attr("disabled", "true").attr("readonly", "true")
        })
    } catch (e) {
        console.log(e)
    }
}

function testimonialSwiper() {
    try {
        if ($(".testimonial-swiper").length) new Swiper(".testimonial-swiper", {
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            autoplay: 3e3,
            loop: !0,
            slidesPerView: 2,
            speed: 500,
            slidesPerGroup: 2,
            spaceBetween: 70,
            initialSlide: 0,
            centeredSlides: !1,
            breakpoints: {
                1200: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30
                }
            }
        })
    } catch (e) {
        console.log(e)
    }
}

function newsSwiper() {
    try {
        new Swiper(".news-release-swiper", {
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            slidesPerView: 2,
            speed: 600,
            initialSlide: 1,
            pagination: ".swiper-pagination",
            paginationClickable: !0,
            simulateTouch: !1,
            breakpoints: {
                640: {
                    simulateTouch: !0,
                    slidesPerView: 1
                }
            }
        })
    } catch (e) {
        console.log(e)
    }
}

function emiCardSwiper() {
    try {
        if ($(".emicard-swiper").length) new Swiper(".emicard-swiper", {
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            slidesPerView: 4,
            speed: 600,
            slidesPerGroup: 1,
            spaceBetween: 30,
            initialSlide: 0,
            slideToClickedSlide: !0,
            centeredSlides: !1,
            breakpoints: {
                1200: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    slideToClickedSlide: !1
                }
            }
        })
    } catch (e) {
        console.log(e)
    }
}
var dealsSwiperSlider, searchSwiperSlider, settings = {
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    slidesPerView: 3,
    speed: 600,
    spaceBetween: 30,
    initialSlide: 0,
    centeredSlides: !1,
    noSwiping: !0,
    breakpoints: {
        1500: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slideToClickedSlide: !1
        }
    }
};

function fundRiderSlider() {
    try {
        fundRiderSwiper = new Swiper(".fund-swiper,.rider-swiper", settings)
    } catch (e) {
        console.log(e)
    }
}

function fundListSwiper() {
    try {
        new Swiper(".fund-list-swiper", {
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            slidesPerView: 4,
            speed: 600,
            spaceBetween: 30,
            initialSlide: 0,
            centeredSlides: !1,
            breakpoints: {
                1500: {
                    slidesPerView: 3
                },
                1152: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 1
                }
            }
        })
    } catch (e) {
        console.log(e)
    }
}
var offerSwiper;
settings = {
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    slidesPerView: 3,
    speed: 600,
    slidesPerGroup: 1,
    spaceBetween: 30,
    initialSlide: 0,
    slideToClickedSlide: !0,
    centeredSlides: !1,
    breakpoints: {
        1200: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slideToClickedSlide: !1
        }
    }
};

function dealsSwiper() {
    try {
        dealsSwiperSlider = new Swiper(".deals-swiper", settings)
    } catch (e) {
        console.log(e)
    }
}

function searchSwiper() {
    try {
        searchSwiperSlider = new Swiper(".search-swiper", settings)
    } catch (e) {
        console.log(e)
    }
}

function offersSwiper(e) {
    try {
        $(".offers-swiper").length && (offerSwiper = new Swiper(".offers-swiper", {
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            slidesPerView: 3,
            speed: 600,
            slidesPerGroup: 1,
            spaceBetween: 30,
            initialSlide: 0,
            slideToClickedSlide: !0,
            centeredSlides: !1,
            breakpoints: {
                1200: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    slideToClickedSlide: !1
                }
            }
        }), $.each(e.offerDetails, function(e, t) {
            var i = "";
            t.offerFeatures.feature1.trim() && (i += ' <li class= "list-item" >' + t.offerFeatures.feature1 + "</li> "), t.offerFeatures.feature2.trim() && (i += ' <li class= "list-item" >' + t.offerFeatures.feature2 + "</li> "), t.offerFeatures.feature3.trim() && (i += ' <li class= "list-item" >' + t.offerFeatures.feature3 + "</li> "), "GTL" == t.productCode ? offerSwiper.appendSlide(['<div class="swiper-slide filter-element" data-filter="' + t.offerFeatures.tag + '"><div class= "bs-offers active  eq-item" ><div class="offers-head"><div class="icon-wrap"><span class="bs-sprite-home ' + t.offerFeatures.productDisplayIcon + '"></span></div><div class="title-wrap"><h3 class="offer-title">' + t.offerTitle + '</h3><span class="offer-tag">' + t.offerFeatures.tag + '</span></div></div><div class="offers-cont"><ul class="offers-rates"> <li style="display:none">  <div class="bs-label-value-pair">   <div class="label">Interest Rate</div><div class="value">' + t.offerFinalRate + '%</div> </div> </li> <li>   <div class="bs-label-value-pair">   <div class="label">Sum Assured</div>   <div class="value">&#8377; ' + t.offerAmount.toLocaleString("en-IN") + '</div> </div> </li> <li>   <div class="bs-label-value-pair">   <div class="label">Gross Premium</div>   <div class="value">&#8377; ' + t.grossPremium.toLocaleString("en-IN") + '</div> </div> </li></ul><div class= "bs-list typ-small" >     <ul>' + i + '       </ul>    </div>  </div>  <div class="offers-foot">  <button class="btn btn-md" href="' + t.offerURL + "&offerId=" + t.offerId + '">apply now</button>  <button class="btn btn-md btn-link btn-call" style="display:none"> <i class= "icon icon-call" ></i> <span class="text">request a call back</span></button> </div></div > </div > ']) : offerSwiper.appendSlide(['<div class="swiper-slide filter-element" data-filter="' + t.offerFeatures.tag + '"><div class= "bs-offers active  eq-item" ><div class="offers-head"><div class="icon-wrap"><span class="bs-sprite-home ' + t.offerFeatures.productDisplayIcon + '"></span></div><div class="title-wrap"><h3 class="offer-title">' + t.offerTitle + '</h3><span class="offer-tag">' + t.offerFeatures.tag + '</span></div></div><div class="offers-cont"><ul class="offers-rates"> <li style="display:none">  <div class="bs-label-value-pair">   <div class="label">Interest Rate</div><div class="value">' + t.offerFinalRate + '%</div> </div> </li> <li>   <div class="bs-label-value-pair">   <div class="label">Amount</div>   <div class="value">&#8377; ' + t.offerAmount.toLocaleString("en-IN") + '</div> </div> </li></ul><div class= "bs-list typ-small" >     <ul>' + i + '       </ul>    </div>  </div>  <div class="offers-foot">  <button class="btn btn-md" href="' + t.offerURL + "&offerId=" + t.offerId + '">apply now</button>  <button class="btn btn-md btn-link btn-call" style="display:none"> <i class= "icon icon-call" ></i> <span class="text">request a call back</span></button> </div></div > </div > '])
        }))
    } catch (e) {
        console.log(e)
    }
}

function checkAllocationValue() {
    try {
        var e = 0,
            t = 0;
        $(".detail-content.active .bs-fund-card").each(function(i) {
            t = parseInt($(this).find(".amount-wrap .amount").text()), e += t, $(".detail-content.active .final-invest").text(e), e > 100 ? toastr.error("Investment must be 100% only.", "", {
                timeOut: 5e3,
                closeButton: !0,
                preventDuplicates: !0
            }) : 100 == e ? (console.log(34), $(".bs-quote-card.active .buy-now").prop("disabled", !1), $(".detail-content.active .button-wrap .btn-continue").prop("disabled", !1)) : ($(".bs-quote-card.active .buy-now").prop("disabled", !0), $(".detail-content.active .button-wrap .btn-continue").prop("disabled", !0))
        })
    } catch (e) {
        console.log(e)
    }
}

function customizeAllocation(e) {
    try {
        e.find(".bs-fund-card").each(function(t) {
            var i = parseInt($(this).find(".amount-wrap .amount").text());
            0 == i ? $(this).find(".btn-minus").prop("disabled", !0) : 100 == i && $(this).find(".btn-plus").prop("disabled", !0), e.find(".btn-customize").hide()
        }), e.find(".btn-minus").off("click").on("click", function() {
            var e = $(this).closest(".amount-wrap"),
                t = e.find(".amount"),
                i = parseInt(t.text());
            newVal = i - 5, t.text(newVal), 0 == newVal ? $(this).prop("disabled", !0) : ($(this).prop("disabled", !1), e.find(".btn-plus").prop("disabled", !1)), checkAllocationValue()
        }), e.find(".btn-plus").off("click").on("click", function() {
            if (parseInt(e.find(".final-invest").text()) + 5 <= 100) {
                var t = $(this).closest(".amount-wrap"),
                    i = t.find(".amount"),
                    s = parseInt(i.text());
                newVal = s + 5, i.text(newVal), 100 == newVal ? $(this).prop("disabled", !0) : ($(this).prop("disabled", !1), t.find(".btn-minus").prop("disabled", !1)), checkAllocationValue()
            } else toastr.error("Total investment must be 100% only.", "", {
                timeOut: 5e3,
                closeButton: !0,
                preventDuplicates: !0
            })
        })
    } catch (e) {
        console.log(e)
    }
}

function mainCustomization() {
    try {
        $(".btn-customize").click(function() {
            var e = $(this).closest(".detail-content");
            e.find(".allocation").addClass("active"), e.find(".lyt-funds").addClass("customization-on"), customizeAllocation(e)
        })
    } catch (e) {
        console.log(e)
    }
}

function cardBtnCustomization() {
    try {
        $(".btn-fundlist").click(function() {
            var e = $(this).closest(".bs-quote-card"),
                t = e.attr("rel"),
                i = $(".quote-details-wrapper .detail-content[name='" + t + "']");
            i.find(".allocation").addClass("active"), i.find(".lyt-funds").addClass("customization-on"), customizeAllocation(i), i.find(".final-invest").text() < 100 && e.find(".buy-now").prop("disabled", !0)
        })
    } catch (e) {
        console.log(e)
    }
}

function riderList() {
    try {
        $(".btn-riderlist").click(function() {
            var e = $(this).closest(".bs-quote-card"),
                t = e.attr("rel"),
                i = $(".quote-details-wrapper .detail-content[name='" + t + "'] .lyt-rider");
            i.hasClass("active") || ($(".quote-details-wrapper .detail-content").removeClass("active").fadeOut().delay(400), $(".quote-details-wrapper .detail-content[name ='" + t + "']").addClass("active").fadeIn(), $(".js-quote-list .bs-quote-card").removeClass("active"), e.addClass("active"), $(".detail-content .lyt-funds, .detail-content .lyt-rider").fadeOut().removeClass("active"), setTimeout(function() {
                i.fadeIn().addClass("active"), fundRiderSwiper = new Swiper(".fund-swiper,.rider-swiper", settings)
            }, 900), e.find(".buy-now").prop("disabled", !1), i.find(".continue-with-rider").prop("disabled", !1))
        })
    } catch (e) {
        console.log(e)
    }
}

function fundList() {
    try {
        $(".btn-fundlist").click(function() {
            var e = $(this).closest(".bs-quote-card"),
                t = e.attr("rel"),
                i = $(".quote-details-wrapper .detail-content[name='" + t + "'] .lyt-funds");
            i.hasClass("active") || ($(".quote-details-wrapper .detail-content").removeClass("active").fadeOut().delay(400), $(".quote-details-wrapper .detail-content[name ='" + t + "']").addClass("active").fadeIn(), $(".js-quote-list .bs-quote-card").removeClass("active"), e.addClass("active"), $(".detail-content .lyt-funds, .detail-content .lyt-rider").fadeOut().removeClass("active"), setTimeout(function() {
                i.fadeIn().addClass("active"), fundRiderSwiper = new Swiper(".fund-swiper,.rider-swiper", settings)
            }, 700))
        })
    } catch (e) {
        console.log(e)
    }
}
var checkedCount, homeSwiperVar, prevslider, rescentClick, autoPlaySliderTime, checkedChild = 1;

function child_add() {
    try {
        $(document).on("click", ".btn-plus-parent", function() {
            var e = $(this).closest(".child-parent"),
                t = e.find("label");
            checkedCount = $(".bs-tile-form .child-parent input[type='checkbox']").filter(":checked").length;
            var i = $(this).closest(".checkbox-list");
            t = t.text();
            checkedCount < 4 && (e.find("input[type='checkbox']").prop("checked", !0), i.find("input[type='tel']").removeAttr("disabled").removeAttr("readonly"), checkedCount = $(".bs-tile-form .child-parent input[type='checkbox']").filter(":checked").length), checkedCount <= 3 ? ($('<div class="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 checkbox-list"><div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 item" ><div class="bs-form child-parent"><label class="control control--checkbox">' + t + '<input type="checkbox" class="checkbox" checked/><div class="control__indicator"></div></label><button type="button" class="btn btn-link btn-plus-parent"><i class="icon icon-plus" data-' + t + '></i> </button></div></div ><div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 item"><div class="label-input-group placeholder"><input type="tel" class="form-control " oninput="isNumber(event,3)" maxlength="3" placeholder="Age" id="input1" /></div></div></div>').insertAfter(i), $(this).parent().append('<button type="button" class="btn btn-link btn-close-parent"><i class="icon icon-close"></i></button >'), $(this).remove()) : toastr.error("You can not add more than 4 child.", "", {
                timeOut: 5e3,
                closeButton: !0,
                preventDuplicates: !0
            })
        }), $(document).on("click", ".btn-close-parent", function() {
            $(this).parent().parent().parent().remove();
            $(".bs-tile-form .child-parent input[type='checkbox']").filter(":checked").length
        }), $(document).on("click", ".bs-tile-form .child-parent input:checkbox", function() {
            limitChildCount = 4, (checkedCount = $(".bs-tile-form .child-parent input[type='checkbox']").filter(":checked").length) > limitChildCount && ($(this).prop("checked", !1), toastr.error("You can not add more than 4 child.", "", {
                timeOut: 5e3,
                closeButton: !0,
                preventDuplicates: !0
            }))
        })
    } catch (e) {
        console.log(e)
    }
}

function imageTile() {
    try {
        $(".bs-img-tile .btn-link").click(function() {
            var e = $(window).width();
            $(".bs-img-tile .btn-link").text("Read More");
            var t = $(this).closest(".tile-wrapper"),
                i = $(this).closest(".bs-img-tile");
            e >= breakpoint_sm ? i.hasClass("show-desc") ? ($(".bs-img-tile").removeClass("show-desc"), t.removeClass("active")) : ($(".bs-img-tile").removeClass("show-desc"), t.addClass("active"), i.addClass("show-desc"), $(this).text("Read Less")) : ($(".tile-desc").slideUp(), i.hasClass("show-desc") ? ($(".tile-desc").slideUp(), $(".bs-img-tile").removeClass("show-desc"), t.removeClass("active")) : ($(".bs-img-tile").removeClass("show-desc"), i.find(".tile-desc").slideDown(), t.addClass("active"), i.addClass("show-desc"), $(this).text("read less")))
        })
    } catch (e) {
        console.log(e)
    }
}

function append_default_years() {
    try {
        var e = (new Date).getFullYear(),
            t = e - 1,
            i = [{
                id: e,
                text: e
            }, {
                id: t,
                text: t
            }];
        $(".new-myear").select2({
            data: i
        })
    } catch (e) {
        console.log(e)
    }
}

function set_years() {
    try {
        (new Date).getFullYear()
    } catch (e) {
        console.log(e)
    }
}

function swipeContent() {
    try {
        $(".swipe-btn").click(function() {
            $(this).hasClass("disabled") || ($(this).closest(".swipe-content").find(".item-slide").toggleClass("closed"), $(this).closest(".swipe-content").find(".item-slide").toggleClass("active"))
        })
    } catch (e) {
        console.log(e)
    }
}

function readMoreCont() {
    try {
        var e = $(".item-slide .content-area").height();
        $(".read-more").click(function() {
            var t = $(this).closest(".item-slide");
            if (t.hasClass("read-content")) $(".content-area").css("height", e), $(".item-slide").removeClass("read-content"), $(".swipe-btn").removeClass("disabled"), $(this).find(".text").text("Read More");
            else {
                t.hasClass("active") || ($(".item-slide").removeClass("active"), t.toggleClass("active"), $(".item-slide").removeClass("read-content"), $(".item-slide").toggleClass("closed"), $(".item-slide").find(".text").text("Read More"));
                var i = t.find(".bs-list").height()+t.find(".desculabv").height();
                $(".content-area").height(e), t.addClass("read-content"), t.find(".content-area").css("height", i), $(".swipe-btn").addClass("disabled"), $(this).find(".text").text("Read Less")
            }
            /*setTimeout(function() {
                $("html, body").animate({
                    scrollTop: t.offset().top - ($(".bs-header").height() + 10)
                }, 500)
            }, 300)*/
        })
    } catch (e) {
        console.log(e)
    }
}

function quoteDetails() {
    try {
        $(".quote-details-wrapper .detail-content.active").fadeIn(), setTimeout(function() {
            fundRiderSwiper = new Swiper(".fund-swiper,.rider-swiper", settings);
            var e = $(".quote-details-wrapper.desktop .detail-content.active").height();
            $(".quote-details-wrapper.desktop").css("min-height", e)
        }, 400), $(".js-quote-list .bs-quote-card .card-head, .js-quote-list .bs-quote-card .card-body").click(function() {
            var e = $(window).width(),
                t = $(this).closest(".bs-quote-card"),
                i = t.attr("rel");
            $(".quote-details-wrapper .detail-content[name='" + i + "']").find(".final-invest").text();
            t.hasClass("active") || ($(".quote-details-wrapper .detail-content").removeClass("active").fadeOut().delay(400), $(".quote-details-wrapper .detail-content[name ='" + i + "']").addClass("active").fadeIn(), $(".js-quote-list .bs-quote-card").removeClass("active"), t.addClass("active"), $(".detail-content .lyt-funds, .detail-content .lyt-rider").fadeOut(), setTimeout(function() {
                $(".quote-details-wrapper .detail-content[name='" + i + "'] ").find(".lyt-funds").fadeIn()
            }, 700), e <= breakpoint_xs && setTimeout(function() {
                $("html, body").animate({
                    scrollTop: t.offset().top - ($(".bs-header").height() + 10)
                }, 1e3)
            }, 600)), setTimeout(function() {
                fundRiderSwiper = new Swiper(".fund-swiper,.rider-swiper", settings)
            }, 900)
        }), $('.yearly-quote-wrap input[type="radio"] ').click(function() {
            var e = $(this),
                t = e.closest(".bs-quote-card");
            e.hasClass("active") || t.find(".card-head").trigger("click")
        }), $(".bs-quote-card .select").on("select2:select", function(e) {
            var t = $(this),
                i = t.closest(".bs-quote-card");
            t.hasClass("active") || i.find(".card-head").trigger("click")
        })
    } catch (e) {
        console.log(e)
    }
}

function alsoConsideredSlider() {
    try {
        new Swiper(".also-considered-slider", {
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            slidesPerView: 5,
            speed: 600,
            slidesPerGroup: 1,
            spaceBetween: 30,
            initialSlide: 0,
            slideToClickedSlide: !0,
            centeredSlides: !1,
            breakpoints: {
                1200: {
                    slidesPerView: 4
                },
                992: {
                    slidesPerView: 3
                },
                767: {
                    slidesPerView: 2
                },
                570: {
                    slidesPerView: 1
                }
            }
        }), new Swiper(".with-article .also-considered-slider", {
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            slidesPerView: 3,
            speed: 600,
            slidesPerGroup: 1,
            spaceBetween: 30,
            initialSlide: 0,
            slideToClickedSlide: !0,
            centeredSlides: !1,
            breakpoints: {
                1200: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                },
                767: {
                    slidesPerView: 2
                },
                570: {
                    slidesPerView: 1
                }
            }
        })
    } catch (e) {
        console.log(e)
    }
}

function articleVerticalSlider() {
    try {
        new Swiper(".related-articles-slider", {
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            slidesPerView: 2,
            speed: 600,
            direction: "vertical",
            spaceBetween: 30,
            initialSlide: 0,
            breakpoints: {
                992: {
                    slidesPerView: 1,
                    centeredSlides: !1,
                    direction: "horizontal"
                }
            }
        })
    } catch (e) {
        console.log(e)
    }
}
var randValue, newRandValue, arr = new Array;

function homeCategorySlider() {
    try {
        var e, t;
        if ($(".home-category-slider").length) {
            for (var i, s = $(".home-category-slider").length, n = 1; n < s + 1; n++) randValue = 2500 + 1800 * n, arr.push(randValue);
            $(".home-category-slider").each(function(n) {
                var a = $(this);
                parentRow = a.closest(".grid-row").attr("data-row"), e = ".grid-row[data-row='" + parentRow + "'] .swiper-button-next", t = ".grid-row[data-row='" + parentRow + "'] .swiper-button-prev";
                newRandValue = arr.splice(Math.floor(Math.random() * (s - n)), 1)[0];
                var o = "homeSwiperVar-" + i;
                o = new Swiper(".grid-row[data-row='" + parentRow + "'] .home-category-slider", {
                    nextButton: e,
                    prevButton: t,
                    slidesPerView: "auto",
                    speed: 800,
                    autoplay: newRandValue,
                    slidesPerGroup: 1,
                    spaceBetween: 0,
                    initialSlide: 0,
                    centeredSlides: !1,
                    autoplayDisableOnInteraction: !0,
                    onClick: function() {
                        o.stopAutoplay(), rescentClick && rescentClick != o && rescentClick.startAutoplay(), rescentClick = o
                    }
                }), randValue = 0, autoPlaySliderTime = 0, a.mouseenter(function() {
                    o.stopAutoplay()
                }), a.mouseleave(function() {
                    o.startAutoplay(), a.find(".product-detail.active").length && o.stopAutoplay()
                }), i++
            })
        }
    } catch (e) {
        console.log(e)
    }
}

function homeProductCarouselSwiper() {
    $(".product-detail-popup .product-slider").each(function() {
        parentPopupWrap = $(this).closest(".product-detail-popup").attr("data-content"), nextBtn = ".product-detail-popup[data-content='" + parentPopupWrap + "'] .swiper-button-next", prevBtn = ".product-detail-popup[data-content='" + parentPopupWrap + "'] .swiper-button-prev", homeProductCarouselSwiper = new Swiper(".product-slider .swiper-container", {
            nextButton: nextBtn,
            prevButton: prevBtn,
            slidesPerView: 1,
            speed: 600,
            slidesPerColumn: 2,
            slidesPerGroup: 1,
            spaceBetween: 0,
            initialSlide: 0,
            centeredSlides: !0,
            pagination: ".swiper-pagination",
            paginationType: "fraction",
            paginationFractionRender: function(e, t, i) {
                return '<span class="' + t + '"></span> of <span class="' + i + '"></span>'
            }
        })
    })
}

function continueWithRider() {
    $(".continue-with-rider").click(function() {
        var e = $(this).closest(".button-wrap").find(".count").text(),
            t = $(this).closest(".detail-content").attr("name");
        e > 0 ? ($(".bs-quote-card[rel=" + t + "] .card-footer .btn-riderlist .text").text(e + " Rider added"), $(".detail-content[name=" + t + "] .lyt-rider").fadeOut().removeClass("active"), $(".detail-content[name=" + t + "] .lyt-funds").fadeIn().addClass("active"), fundRiderSwiper = new Swiper(".fund-swiper,.rider-swiper", settings), $(".detail-content[name=" + t + "] .btn-customize").fadeIn(), $(".detail-content[name=" + t + "] .allocation").removeClass("active"), $(".detail-content[name=" + t + "] .lyt-funds").removeClass("customization-on")) : $(".bs-quote-card[rel=" + t + "] .card-footer .btn-riderlist .text").text("Add Rider")
    })
}
$("[nav-src][href]").click(function(e) {
	var utm_params;
	var urlParams = window.urlObj.search.includes("src_30") || window.urlObj.search.includes("src_60") || window.urlObj.search.includes("src_90") || window.urlObj.search.includes("pid") || window.urlObj.search.includes("utm_source");
	var confParams= window.urlObj.search.includes("prodCode") || window.urlObj.search.includes(" ");
	if(urlParams){
		utm_params = window.urlObj.search;
		if($(this).attr("target")){
			if (typeof $(this).attr("href") !== typeof undefined && $(this).attr("href") !== false) {
			if($(this).attr("href").includes('?')){
				if(utm_params.includes('&nav_src')){
					window.open($(this).attr("href")+ '&' +utm_params.substring(utm_params.indexOf('?')+1,utm_params.indexOf('&nav_src')), $(this).attr("target"));
					return false;
				}
				else{
					window.open($(this).attr("href")+ '&' +utm_params.substring(utm_params.indexOf('?')+1,utm_params.length), $(this).attr("target"));
					return false;
				}
			}
			else{
				window.open($(this).attr("href")+ '?' +utm_params.substring(utm_params.indexOf('?')+1,utm_params.indexOf('&nav_src')), $(this).attr("target"));
				return false;
			}
			}
		}
		else{
			if (typeof $(this).attr("href") !== typeof undefined && $(this).attr("href") !== false) {
			if($(this).attr("href").includes('?')){
				if(utm_params.includes('&nav_src')){
					window.location.href = $(this).attr("href")+ '&' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.indexOf('&nav_src'));
					return false;
				}
				else{
					window.location.href = $(this).attr("href")+ '&' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.length);
					return false;
				}
			}
			else{
				if(utm_params.includes('&nav_src')){
					window.location.href = $(this).attr("href")+ '?' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.indexOf('&nav_src'));
					return false;
				}
				else{
					window.location.href = $(this).attr("href")+ '?' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.length);
					return false;
				}
			}
		}
		}
	}
	else{
		if(utm){
			if (typeof $(this).attr("href") !== typeof undefined && $(this).attr("href") !== false) {
		utm_params = utm;
		if($(this).attr("target")){
			if($(this).attr("href").includes('?')){
				if(utm_params.includes('&nav_src')){
					window.open($(this).attr("href")+ '&' +utm_params.substring(utm_params.indexOf('?')+1,utm_params.indexOf('&nav_src')), $(this).attr("target"));
					return false;
				}
				else{
					window.open($(this).attr("href")+ '&' +utm_params.substring(utm_params.indexOf('?')+1,utm_params.length), $(this).attr("target"));
					return false;
				}
			}
			else{
				window.open($(this).attr("href")+ '?' +utm_params.substring(utm_params.indexOf('?')+1,utm_params.indexOf('&nav_src')), $(this).attr("target"));
				return false;
			}
		}
		else{
			if($(this).attr("href").includes('?')){
				if(utm_params.includes('&nav_src')){
					window.location.href = $(this).attr("href")+ '&' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.indexOf('&nav_src'));
					return false;
				}
				else{
					if(utm_params.length > 0){
						window.location.href = $(this).attr("href")+ '&' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.length);
						return false;
					}
					else{
						window.location.href = $(this).attr("href");
						return false;
					}
					/* window.location.href = $(this).attr("href")+ '&' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.length);
					return false; */
				}
			}
			else{
				if(utm_params.includes('&nav_src')){
					window.location.href = $(this).attr("href")+ '?' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.indexOf('&nav_src'));
					return false;
				}
				else{
					if(utm_params.length > 0){
						window.location.href = $(this).attr("href")+ '?' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.length);
						return false;
					}
					else{
						window.location.href = $(this).attr("href");
						return false;
					}
					/* window.location.href = $(this).attr("href")+ '?' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.length);
					return false; */
				}
			}
		}
			}
	}
	}
})

$(document).ready(function() {
    $(".accordian-tab").click(function() {
        $(this).toggleClass("active").siblings().removeClass("active"), $(this).next().slideToggle().siblings(".accordian-list").slideUp()
    }), $(".full-accordian-heading").click(function() {
        $(this).toggleClass("active").siblings().removeClass("active"), $(this).next().slideToggle().siblings(".accordian-para").slideUp()
    })
});
var observer = lozad();
observer.observe();

var breakpoint_xs = 767,
    breakpoint_sm = 992,
    winWidth = $(window).width();

function accordian() {
    try {
        $(document).mouseup(function(t) {
            var e = $(".bs-side-menu");
            e.is(t.target) || 0 !== e.has(t.target).length || ($(".menu-list.bs-accordian").find(".accordian-content").stop(!0, !0).slideUp("active"), $(".menu-list.bs-accordian").find(".accordian-heading").removeClass("active"))
        }), ($(window).width() < 767 ? $(".bs-accordian") : $(".bs-accordian:not(.secondary-link)")).find(".accordian-heading").on("click", function(t) {
            $(this).hasClass("active") ? ($(this).parents(".bs-accordian").find(".accordian-content").stop(!0, !0).slideUp("active"), $(this).parents(".bs-accordian").find(".accordian-heading").removeClass("active"), $(this).parents(".bs-accordian").find(".accordian-heading").parent().removeClass("active")) : ($(this).parents(".bs-accordian").find(".accordian-content").stop(!0, !0).slideUp("active"), $(this).parents(".bs-accordian").find(".accordian-heading").removeClass("active"), $(this).parents(".bs-accordian").find(".accordian-heading").parent().removeClass("active"), $(this).siblings(".accordian-content").stop(!0, !0).slideDown("active"), $(this).addClass("active"), $(this).parent().addClass("active")), $(this).parent().parent().find(".accordian-heading.active").length < 1 ? $(this).parent().parent().removeClass("hasactive") : $(this).parent().parent().addClass("hasactive")
        })
    } catch (t) {
        console.log(t)
    }
}

function dropdown() {
    try {
        $(".bs-dropdown:not(.bs-dropdown-hover) .dropdown-heading").on("click", function(t) {
            t.preventDefault(), 1 == $(this).hasClass("active") ? ($(this).parents(".bs-dropdown").find(".dropdown-content").slideUp(), $(this).parents(".bs-dropdown").find(".dropdown-heading").removeClass("active")) : ($(this).parents(".bs-dropdown").find(".dropdown-content").removeClass("active"), $(this).parents(".bs-dropdown").find(".dropdown-heading").removeClass("active"), $(this).addClass(" active"), $(this).siblings(".dropdown-content").slideDown())
        }), $(document).mouseup(function(t) {
            var e = $(".bs-dropdown");
            e.is(t.target) || 0 !== e.has(t.target).length || ($(".dropdown-parent").find(".dropdown-content").slideUp(), $(".dropdown-parent").find(".dropdown-heading").removeClass("active"))
        }), $(".dropdown-close").click(function() {
            close_dropdown($(this).attr("data-dropdown"))
        })
    } catch (t) {
        console.log(t)
    }
}

function close_dropdown(t) {
    $(t).find(".dropdown-content").slideUp(), $(t).find(".dropdown-heading").removeClass("active")
}

function dropdown_hover() {
    try {
        $(".bs-dropdown-hover .dropdown-heading").hover(function() {
            $(this).parents(".bs-dropdown-hover").find(".dropdown-content").stop(!0, !0).slideDown()
        }, function() {
            $(this).parents(".bs-dropdown-hover").find(".dropdown-content").stop(!0, !0).slideUp()
        })
    } catch (t) {
        console.log(t)
    }
}

function put_header_in_side_menu() {
    try {
        $(window).width() < breakpoint_sm && ($(".menu-parent .menu-list > li").insertBefore(".bs-side-menu .menu-list > li:nth-of-type(1)"), $(".bs-side-menu .login-btn").removeClass("btn login-btn"))
    } catch (t) {
        console.log(t)
    }
}

function side_menu() {
    try {
        $(".menu-click").click(function() {
            $("body").addClass("open-side-menu"), $(".overlay").addClass("open")
        }), $(".close-menu").click(function() {
            $("body").removeClass("open-side-menu"), $(".overlay").removeClass("open")
        }), $(document).mouseup(function(t) {
            var e = $(".bs-side-menu");
            e.is(t.target) || 0 !== e.has(t.target).length || 1 == $("body").hasClass("open-side-menu") && $(".close-menu").trigger("click")
        })
    } catch (t) {
        console.log(t)
    }
}

function banner() {
    try {
        if (0 != $(".gallery-top").length) {
            var t = new Swiper(".gallery-top", {
                spaceBetween: 10,
                autoplay: 5e3,
                speed: 700
            });
            t.on("onSlideChangeEnd", function() {
                $(".gallery-top").find(".swiper-slide-active").find(".wow-add").each(function() {
                    $(this).css("visibility", "visible"), $(this).css("animation-delay", $(this).attr("data-wow-delay")), $(this).addClass($(this).attr("data-in") + " wow animated")
                })
            });
            var e = new Swiper(".gallery-thumbs", {
                initialSlide: 0,
                spaceBetween: 5,
                centeredSlides: !0,
                slidesPerView: 6,
                touchRatio: .2,
                slideToClickedSlide: !0
            });
            t.params.control = e, e.params.control = t
        }
    } catch (t) {
        console.log(t)
    }
}

function set_bg() {
    try {
        $(".set-bg").each(function() {
            var t = $(this).find(".fetch-img-src").attr("data-src");
            $(this).css("background-image", "url(" + t + ")"), $(this).css("background-image", "cover")
        })
    } catch (t) {
        console.log(t)
    }
}

function newsReleaseBtn() {
    try {
        $(".news-release").click(function() {
            $(".lyt-news-release").toggleClass("active")
        })
    } catch (t) {
        console.log(t)
    }
}

function product_hover() {
    try {
        $(".bs-product").hover(function() {
            $(this).parent().siblings().find(".bs-product").removeClass("active")
        })
    } catch (t) {
        console.log(t)
    }
}

function wow_animate() {
    try {
        new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: function(t) {},
            scrollContainer: null
        }).init()
    } catch (t) {
        console.log(t)
    }
}

function bsLine() {
    try {
        $(".bs-line-wrapper").each(function() {
            var t = $(this).innerHeight(),
                e = $(this).innerWidth(),
                a = 0;
            if (a = t < e ? t : e, $(window).width() > breakpoint_xs)
                if (a >= 300) var i = 90 * (a = 300) / 100,
                    s = 12 * a / 100;
                else i = 90 * a / 100, s = 12 * a / 100;
            else i = 60 * a / 100, s = 8 * a / 100;
            $(this).find("corner-1") && ($(this).find(".vertical").css({
                height: i,
                top: -s
            }), $(this).find(".horizontal").css({
                width: i,
                left: -s
            })), $(this).find("corner-2") && ($(this).find(".vertical").css({
                height: i,
                top: -s
            }), $(this).find(".horizontal").css({
                width: i,
                right: -s
            })), $(this).find("corner-3") && ($(this).find(".vertical").css({
                height: i,
                bottom: -s
            }), $(this).find(".horizontal").css({
                width: i,
                right: -s
            })), $(this).hasClass("corner-4") && ($(this).find(".vertical").css({
                height: i,
                bottom: -s
            }), $(this).find(".horizontal").css({
                width: i,
                left: -s
            }))
        })
    } catch (t) {
        console.log(t)
    }
}
var cnt = 1;

function popup() {
    try {
        $("[data-toggle='popup']").click(function() {
            var t = $(this).attr("data-target");
            $(t).fadeIn().addClass("active"), $("body").addClass("body-scroll-disable"), tabOnlySlideEffect()
        }), $(".bs-popup").on("click", function(t) {
            t.target === this && ($(this).fadeOut().removeClass("active"), $("body").removeClass("body-scroll-disable"))
        }), $('[data-dismiss="popup"]').click(function() {
            $(".bs-popup").fadeOut().removeClass("active"), $("body").removeClass("body-scroll-disable")
        })
    } catch (t) {
        console.log(t)
    }
}

function go_to(t) {
    try {
        $("html, body").animate({
            scrollTop: $(t).offset().top - ($(".bs-header").innerHeight() + $(".bs-tile-sticky").innerHeight())
        }, 500)
    } catch (t) {
        console.log(t)
    }
}

function side_menu_active() {
    try {
        $(".tab-to-sticky").attr("data-tab");
        $(".bs-tile-sticky:not(.not-internal) .tile-sticky-list li,.go-to").click(function() {
            return $("html, body").animate({
                scrollTop: $($(this).attr("data-scroll")).offset().top - ($(".bs-header").innerHeight() + $(".bs-tile-sticky").innerHeight())
            }, 500), "#get-a-quote" == $(this).attr("data-scroll") && $("#trav-to-country").focus(), !1
        })
    } catch (t) {
        console.log(t)
    }
}

function make_active() {
    try {
        var t = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
        $(".tile-sticky-list li").each(function() {
            if ($($(this).attr("data-scroll")).length > 0 && t >= $($(this).attr("data-scroll")).offset().top - ($(".bs-header").innerHeight() + $(".bs-tile-sticky").innerHeight() + 10)) {
                $(this);
                $(".tile-sticky-list li").removeClass("active"), $(this).addClass("active")
            }
        });
        var e = $(".tab-to-sticky").attr("data-tab");
        $(e).find("ul li").each(function() {
            if ($($(this).attr("data-scroll")).length > 0 && t >= $($(this).attr("data-scroll")).offset().top - ($(".bs-header").innerHeight() + $(".bs-tile-sticky").innerHeight() + 10)) {
                $(this);
                $(e).find("ul li").removeClass("resp-tab-active"), $(this).addClass("resp-tab-active");
                var a = $(".parent-tab > .resp-tabs-list .resp-tab-item.resp-tab-active").position().left,
                    i = $(".parent-tab > .resp-tabs-list .resp-tab-item.resp-tab-active").innerWidth();
                $(".parent-tab > .resp-tabs-list > .slide-span").css({
                    left: a,
                    width: i
                })
            }
        })
    } catch (t) {
        console.log(t)
    }
}
try {
    Date.prototype.addDays = function(t) {
        var e = new Date(this.valueOf());
        return e.setDate(e.getDate() + t), e
    }
} catch (t) {
    console.log(t)
}

function material_input() {
    try {
        var t = $(".material-input:not(.always-focus)");
        t.focusin(function() {
            $(this).parent().addClass("focus")
        }), t.focusout(function() {
            "" == $(this).val() && $(this).parent().removeClass("focus")
        })
    } catch (t) {
        console.log(t)
    }
}

function scrollToActiveTab() {
    try {
        $(".child-tab .resp-accordion").click(function() {
            var t = $(this);
            setTimeout(function() {
                $("html, body").animate({
                    scrollTop: t.offset().top - ($(".bs-header").height() + 20)
                }, 600)
            }, 400)
        })
    } catch (t) {
        console.log(t)
    }
}

function hide_show() {
    try {
        $(".show-click").click(function(t) {
            var e = $(this);
            t.preventDefault(), $(e.attr("data-hide")).fadeOut("fast", function() {
                $(e.attr("data-show")).fadeIn("slow")
            })
        }), $(".show-element").click(function(t) {
            var e = $(this);
            t.preventDefault(), $(e.attr("data-show")).fadeIn("slow"), setTimeout(function() {
                heightRecal()
            }, 100)
        })
    } catch (t) {
        console.log(t)
    }
}

function slideEffectHorizontal() {
    try {
        $(".bs-tab .parent-tab").length && (setTimeout(function() {
            $(".bs-tab .parent-tab").each(function() {
                var t = $(this).find(".resp-tabs-list .resp-tab-item.resp-tab-active").position().left,
                    e = $(this).find(".resp-tabs-list .resp-tab-item.resp-tab-active").innerWidth();
                $(this).find(".tab-move-bs").css({
                    left: t,
                    width: e
                })
            })

        }, 220), $(".parent-tab > .resp-tabs-list > .resp-tab-item").click(function() {
            var t = $(this),
                e = t.position().left,
                a = t.innerWidth();
            /* $(".parent-tab > .resp-tabs-list .slide-span").css({
                 left: e,
                 width: a
             });*/
            $(this).parent().find(".tab-move-bs").css({
                left: e,
                width: a
            });
            var i = t.attr("aria-controls");
            setTimeout(function() {
                var t = $(".resp-tabs-container .tab-content-wrap[aria-labelledby = '" + i + "']").find(".child-tab");
                if (t.length > 0) {
                    var e = t.find(".resp-tabs-list .resp-tab-item.resp-tab-active").position().top,
                        a = t.find(".resp-tabs-list .resp-tab-item.resp-tab-active").innerHeight();
                    $(".child-tab > .resp-tabs-list .slide-span").css({
                        top: e,
                        height: a
                    })
                }
            }, 100)
        }))
    } catch (t) {
        console.log(t)
    }
}

function slideEffectVertical() {
    try {
        if ($(".child-tab").length) {
            var t = $(".child-tab");
            setTimeout(function() {
                if (t.closest(".resp-tab-content-active").length) var e = $(".resp-tab-content-active .child-tab > .resp-tabs-list > .resp-tab-item.resp-tab-active").position().top,
                    a = $(".resp-tab-content-active .child-tab > .resp-tabs-list > .resp-tab-item.resp-tab-active").innerHeight();
                else e = $(".child-tab > .resp-tabs-list > .resp-tab-item.resp-tab-active").position().top, a = $(".child-tab > .resp-tabs-list > .resp-tab-item.resp-tab-active").innerHeight();
                $(".child-tab > .resp-tabs-list .slide-span").css({
                    top: e,
                    height: a
                })
            }, 180), $(".child-tab > .resp-tabs-list > .resp-tab-item").click(function() {
                var t = $(this).position().top,
                    e = $(this).innerHeight();
                $(".child-tab > .resp-tabs-list .slide-span").css({
                    top: t,
                    height: e
                })
            })
        }
    } catch (t) {
        console.log(t)
    }
}

function select() {
    try {
        $(".select:not(.select-with-search)").each(function() {
            $(this).select2({
                minimumResultsForSearch: -1,
                width: "100%"
            })
        }), $(".select-with-search").each(function() {
            $(this).select2({
                width: "100%"
            })
        }), $(".select2-selection__rendered").attr("title", "")
    } catch (t) {
        console.log(t)
    }
}

function customResponsiveTable() {
    try {
        $(".custom-table").each(function() {
            var t = $(this),
                e = [];
            $(t).find(".table-head .td").each(function(t) {
                e.push($(this).attr("data-value"))
            }), $(t).find(".table-body .table-row").each(function(t) {
                $(this).find(".td").each(function(t) {
                    $("<div class='mobile-thead'>" + e[t] + "</div>").insertBefore(this)
                })
            })
        })
    } catch (t) {
        console.log(t)
    }
}

function filterFaq() {
    try {
        $(".js-filter-wrapper .js-filter-nav .tag").click(function(t) {
            var e = $(this).attr("data-value");
            $(".js-filter-wrapper .tag").removeClass("active"), $(this).addClass("active"), "all" == e ? $(".js-filter-content  .filter-element").fadeIn() : ($(".js-filter-content  .filter-element:not([data-filter='" + e + "'])").fadeOut(), setTimeout(function() {
                $(".js-filter-content .filter-element[data-filter='" + e + "'").fadeIn()
            }, 400)), setTimeout(function() {
                $(".offers-swiper").length && (offerSwiper.update(), offerSwiper.slideTo(0)), $(".search-swiper").length && (searchSwiperSlider.update(), searchSwiperSlider.slideTo(0))
            }, 500)
        }), $(".js-filter-wrapper .js-filter-nav .tag.default-active").trigger("click")
    } catch (t) {
        console.log(t)
    }
}

function float_btn_new() {
    try {
        $("#toggle-btn").click(function() {
            $(".bs-float-btn").hasClass("active") ? ($(".bs-float-btn .wrapper").fadeOut(), setTimeout(function() {
                $(".bs-float-btn").removeClass("active")
            }, 600)) : ($(".bs-float-btn").addClass("active").fadeIn(), setTimeout(function() {
                $(".bs-float-btn .wrapper").fadeIn()
            }, 600))
        }), $(".on-clck-close nav li a").click(function() {
            $(".bs-float-btn .wrapper").fadeOut(), setTimeout(function() {
                $(".bs-float-btn").removeClass("active")
            }, 600)
        })
    } catch (t) {
        console.log(t)
    }
}

function moving_dom_sticky() {
    try {
        $(window).width() < breakpoint_sm ? $(".internal-nav-parent .tile-sticky-list").appendTo(".internal-float nav") : $(".internal-float nav .tile-sticky-list").insertAfter(".get-quote-parent")
    } catch (t) {
        console.log(t)
    }
}

function country_close() {
    try {
        $(document).on("click", ".bs-badges-list .item .icon-close", function() {
            $(this).parent().fadeOut()
        })
    } catch (t) {
        console.log(t)
    }
}

function addClassToRemainder() {
    try {
        $(".custom-list").each(function() {
            var t = $(this).find(".ul-list li").length % ($(window).width() <= breakpoint_xs ? 2 : 3);
            0 == t ? $(this).addClass("no-remainder") : $(this).find(".ul-list li:nth-last-child(-n+" + t + ")").addClass("no-brdr")
        });
        var t = 4;
        if ($(".bs-product-category").length) {
            var e = $(".bs-product-category li").length;
            e <= 4 && $(".bs-product-category").addClass("less-category"), e > 4 && e <= 6 && (t = 3, $(".bs-product-category").addClass("category-6")), e <= 8 && $(".bs-banner").addClass("small-banner"), $(".bs-product-category").each(function() {
                var a = e % t;
                0 == a ? 3 == t ? $(this).find("li:gt(-4)").addClass("no-brdr") : $(this).find("li:gt(-5)").addClass("no-brdr") : $(this).find("li:nth-last-child(-n+" + a + ")").addClass("no-brdr")
            })
        }
    } catch (t) {
        console.log(t)
    }
}

function checkMultipleTabs() {
    try {
        $(".bs-tab").find(".parent-tab .child-tab").length && $(".bs-tab").addClass("show-as-dropdown")
    } catch (t) {
        console.log(t)
    }
}

function onclickOfTabDropdown() {
    try {
        setTimeout(function() {
            $(".bs-tab").each(function() {
                var t = $(this).find(".parent-tab > .resp-tabs-list .resp-tab-active").text();
                $(this).find(".active_tab .text").text(t);
            })
        }, 200), $(".active_tab").click(function() {
            $(this).siblings().find(".resp-tabs-list").stop(!0, !0).slideToggle();
            setTimeout(function() {
                if ($(".inner-block-rem") && window.innerWidth < 769) {
                    $(".inner-block-rem").css("display", "none");
                }
            })
        }), $(document).on("click", ".parent-tab > .resp-tabs-list > .resp-tab-item", function() {
            var t = $(this).text(),
                e = $(window).width();
            $(this).closest(".parent-tab").siblings().find(".text").text(t), e <= breakpoint_xs && $(".parent-tab > .resp-tabs-list").slideUp()
        })
    } catch (t) {
        console.log(t)
    }
}

function tabOnlySlideEffect() {
    try {
        $(".js-tab-class").length && setTimeout(function() {
            var t = parseInt($(".js-tab-class ul.tabs li.active").css("margin-left")),
                e = $(".js-tab-class ul.tabs li.active").position().left;
            e = t + e;
            var a = $(".js-tab-class ul.tabs li.active").innerWidth();
            $(".js-tab-class ul.tabs .slide-span").css({
                left: e,
                width: a
            })
        }, 220)
    } catch (t) {
        console.log(t)
    }
}

function tabOnly() {
    try {
        $(".js-tab-class ul.tabs li").click(function(event) {
            var t = $(this).attr("data-tab");
            if(event.currentTarget.closest(".js-tab-class").querySelector("#"+t).classList.contains("active")){
                event.currentTarget.closest(".js-tab-class").querySelector("#"+t).classList.remove("active");
            }else if(event.currentTarget.closest(".js-tab-class").querySelector("#"+t)){
                if(event.currentTarget.closest(".js-tab-class").querySelector(".tab-content")){
                    event.currentTarget.closest(".js-tab-class").querySelectorAll(".tab-content").forEach(function(ele){
                        if(ele.classList.contains("active")){
                            ele.classList.remove("active");
                        }
                    });
                }
                event.currentTarget.closest(".js-tab-class").querySelector("#"+t).classList.add("active");
            }
            if(event.currentTarget.offsetParent.querySelector(".active-link-tab")){
                var litabelement = event.currentTarget.offsetParent.querySelector(".active-link-tab");
                litabelement.classList.remove("active-link-tab");
                $(this).addClass("active-link-tab");
                $("#" + t).addClass("active");
                tabOnlySlideEffect();
            }
        })
    } catch (t) {
        console.log(t)
    }
}

function parseNumberCustom(t) {
    try {
        var e = t.replace(/\,/g, "");
        return e = parseInt(e, 10)
    } catch (t) {
        console.log(t)
    }
}

function digitToAmount(t) {
    try {
        return t.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } catch (t) {
        console.log(t)
    }
}

function menuHover() {}

function equalheight(t) {
    try {
        var e, a = 0,
            i = 0,
            s = new Array;
        $(t).each(function() {
            if (e = $(this), $(e).height("auto"), topPostion = e.position().top, i != topPostion) {
                for (currentDiv = 0; currentDiv < s.length; currentDiv++) s[currentDiv].height(a);
                s.length = 0, i = topPostion, a = e.height(), s.push(e)
            } else s.push(e), a = a < e.height() ? e.height() : a;
            for (currentDiv = 0; currentDiv < s.length; currentDiv++) s[currentDiv].height(a)
        })
    } catch (t) {
        console.log(t)
    }
}

function planDropdown() {
    try {
        $(".label-input-group.typ-plan select").on("change", function() {
            var t = $(this).val();
            $(".plan-xtra-info .bs-dropdown").removeClass("active"), $(".plan-xtra-info .bs-dropdown[data-rel='" + t + "']").addClass("active")
        })
    } catch (t) {
        console.log(t)
    }
}
var playerElement, curetn_step = 1;

function question_steps() {
    try {
        var t = $(".bs-question-step");
        t.find(".step").each(function() {
            var e = $(this),
                a = $(this).find("form"),
                i = a.find("[type=radio]");
            a.validate({
                errorPlacement: function(t, e) {
                    t.appendTo(e.parent().parent())
                },
                submitHandler: function(a) {
                    return t.find(".step").length == curetn_step || (show_hide(e.next(), e), curetn_step++, t.find(".progress .current").text(curetn_step), t.find(".step-index").text("0" + curetn_step)), !1
                }
            }), i.rules("add", {
                required: !0
            }), e.find(".back").click(function() {
                show_hide(e.prev(), e), curetn_step--, t.find(".progress .current").text(curetn_step), t.find(".step-index").text("0" + curetn_step)
            })
        })
    } catch (t) {
        console.log(t)
    }
}

function otpSteps() {
    try {
        $(".nextform").click(function() {
            var t = $(this).attr("data-show");
            $(".offer-inner").removeClass("active"), console.log($(".offer-inner ." + t)), $(".offer-inner." + t).addClass("active")
        })
    } catch (t) {
        console.log(t)
    }
}

function show_hide(t, e) {
    try {
        $(e).fadeOut(function() {
            $(t).fadeIn()
        })
    } catch (t) {
        console.log(t)
    }
}

function change_dom() {
    try {
        $(window).width() < breakpoint_xs && $(".quote-responsive-content .detail-content").each(function() {
            var t = $(this).attr("name");
            $(".quote-responsive-content .detail-content[name='" + t + "']").appendTo(".quote-responsive-heading .bs-quote-card[rel='" + t + "'] + .quote-details-wrapper")
        })
    } catch (t) {
        console.log(t)
    }
}

function popup_open(t) {
    try {
        $(t).fadeIn().addClass("active"), $("body").addClass("body-scroll-disable"), $("input[name=password]").val("")
    } catch (t) {
        console.log(t)
    }
}

function popup_close() {
    try {
        $(".bs-popup").fadeOut().removeClass("active"), $("body").removeClass("body-scroll-disable")
    } catch (t) {
        console.log(t)
    }
}

function menu_tabs() {
    $(".menu-tab li a,.tab-close").click(function() {
        return 1 == $(this).hasClass("tab-close") ? $(".menu-tab li a").removeClass("active") : ($(this).addClass("active"), $(this).parent().siblings().find("a").removeClass("active")), $(".menu-content .item.active").fadeOut().removeClass("active"), $($(this).attr("data-show")).fadeIn().addClass("active"), !1
    })
}

function disable_button() {
    $(".check-hide").click(function() {
        $(this).is(":checked") ? ($($(this).attr("data-hide")).prop("disabled", !0), toastr.warning("Please contact our nearest branch for further process.", "", {
            timeOut: 4e3,
            closeButton: !0,
            preventDuplicates: !0
        })) : $($(this).attr("data-hide")).prop("disabled", !1)
    })
}
var delayToOpen, last_play = "";

function createVideoPlayer() {
    try {
        $(".name-video-wrap .video-wrap").each(function() {
            var t = "https://img.youtube.com/vi/" + $(this).find(".player").attr("data-id") + "/0.jpg";
            $(this).css("background", "url(" + t + ")"), $(this).css("background-size", "cover"), $(this).css("background-position", "center")
        }), $(".name-video-wrap .playbtn").click(function() {
            var t = $(this).closest(".name-video-wrap");
            last_play = t.find(".player"), t.find(".player").YTPlayer({
                videoURL: t.find(".player").attr("data-id")
            }), t.find(".player").YTPPlay(), $(this).fadeOut(), t.find(".name-wrap").fadeOut()
        }), $(".name-video-wrap .video-wrap .player").on("YTPReady", function(t) {
            $(".name-video-wrap .playbtn").attr("disabled", !1), $(".name-video-wrap .playbtn").removeClass("disabled")
        }), $(".name-video-wrap .video-wrap .player").on("YTPEnd, YTPPause", function(t) {
            $(".name-wrap").fadeIn(), $(".video-wrap .playbtn").fadeIn()
        })
    } catch (t) {
        console.log(t)
    }
}

function landingPageVideo() {
    $(".landingPageVideo").length && $(".landingPageVideo").YTPlayer()
}

function homeGridProductClick() {
    try {
        $(".home-category-slider .product-detail").click(function() {
            var t = $(this).attr("data-show"),
                e = $(this).closest(".grid-row").attr("data-row");
            $("body").addClass("disable-scroll"), $(".home-category-slider .product-detail").removeClass("active"), $(this).addClass("active"), $(".bs-home-category").addClass("clicked"), $(".bs-home-category-detail").hasClass("active") ? (delayToOpen = 500, setTimeout(function() {
                $(".bs-home-category-detail .product-detail-popup").removeClass("active")
            }, 400)) : delayToOpen = 150, $(".bs-home-category-detail .product-detail-popup").removeClass("add-shadow"), $(".bs-home-category-detail").hasClass("active") ? ($(".bs-home-category-detail .product-detail-popup.active").addClass("close-popup"), $(".bs-home-category-detail").addClass("hide-close")) : $(".bs-home-category-detail").addClass("active"), $(".product-detail-popup.active").find(".inlinePlayButton").length > 0 && $(".inlinePlayButton:visible") && $(".product-detail-popup.active").find(".player").YTPPause();
            var a = $(".bs-home-category-detail #" + e + " .product-detail-popup[data-content='" + t + "']").height();
            setTimeout(function() {
                $(".bs-home-category-detail .product-detail-popup").removeClass("close-popup"), $(".bs-home-category-detail #" + e + " .product-detail-popup[data-content='" + t + "']").addClass("active"), $(".bs-home-category-detail").height(a), $(".bs-home-category-detail").removeClass("hide-close")
            }, delayToOpen);
            $(".bs-home-category-detail #" + e + " .product-detail-popup[data-content='" + t + "'] .player");
            setTimeout(function() {
                $(".bs-home-category-detail #" + e + " .product-detail-popup[data-content='" + t + "']").addClass("add-shadow")
            }, 1e3), setTimeout(function() {
                $(".bs-home-category").removeClass("clicked")
            }, 1200), digitalData.homePageGridValue = $(this).find(".text")[0].innerHTML, _satellite.track("home-page-product-grid-click")
        }), $(".bs-home-category-detail .close").click(function() {
            $("body").removeClass("disable-scroll"), $(".product-detail-popup.active").find(".inlinePlayButton").length > 0 && $(".inlinePlayButton:visible") && $(".product-detail-popup.active").find(".player").YTPPause(), $(".bs-home-category-detail .product-detail-popup").removeClass("add-shadow"), $(".bs-home-category-detail .product-detail-popup.active").addClass("close-popup"), setTimeout(function() {
                $(".bs-home-category-detail .product-detail-popup").removeClass("close-popup"), $(".bs-home-category-detail .product-detail-popup").removeClass("active"), $(".bs-home-category-detail, .home-category-slider .product-detail").removeClass("active")
            }, 100)
        })
    } catch (t) {
        console.log(t)
    }
}

function addRemoveRider() {
    var t = 0;
    $(".btn-add-rider").on("click", function() {
        var e = $(this).closest(".detail-content"),
            a = $(this).hasClass("rider-added"),
            i = $(this).closest(".bs-rider-card");
        t = e.find(".no-of-cards .count").text(), a ? (i.find(".notify").fadeOut(), $(this).removeClass("rider-added"), $(this).find(".btn-text").text("Add "), t--) : (i.find(".notify").fadeIn(), t++, $(this).find(".btn-text").text("Remove "), $(this).addClass("rider-added")), e.find(".no-of-cards .count").text(t), 0 == t ? e.find(".no-of-cards").fadeOut() : e.find(".no-of-cards").fadeIn()
    })
}

function select() {
    try {
        $(".select:not(.select-with-search)").each(function() {
            $(this).select2({
                minimumResultsForSearch: -1,
                width: "100%"
            })
        }), $(".select-with-search").each(function() {
            $(this).select2({
                width: "100%"
            })
        }), $(".select2-selection__rendered").attr("title", "")
    } catch (t) {
        console.log(t)
    }
}

function change_select_value(t, e) {
    $(t).val(e).trigger("change"), $(t + ' option[value="' + e + '"]').attr("selected", "selected")
}
$(document).ready(function() {
    tab_to_sticky(), limitCheckbox(), autoCompleteDd(), accordian(), side_menu(), banner(), testimonialSwiper(), newsSwiper(), quoteSwiper(), emiCardSwiper(), dealsSwiper(), searchSwiper(), fundRiderSlider(), fundListSwiper(), quoteDetails(), offersSwiper(), homeCategorySlider(), homeGridProductClick(), alsoConsideredSlider(), customizeAllocation(), mainCustomization(), cardBtnCustomization(), continueWithRider(), riderList(), fundList(), newsReleaseBtn(), set_bg(), product_hover(), wow_animate(), put_header_in_side_menu(), tab_sticky(), make_active(), top_menu_show(), side_menu_active(), material_input(), child_add(), checkMultipleTabs(), onclickOfTabDropdown(), motor_editAmount(), planDropdown(), checkInsuringFor(), motor_step(), change_dom(), append_default_years(), otpFocus(), editDetailsPopup(), myOffersOpenClose(), searchOpenClose(), question_steps(), menu_tabs(), disable_button(), homeProductCarouselSwiper(), $("#column-chart").length && $("li").click(function() {
        $(this).find(".icon-graph-view") && columnChart()
    }), $("#parentHorizontalTab").length && $("#parentHorizontalTab").easyResponsiveTabs({
        type: "default",
        width: "auto",
        fit: !0,
        tabidentify: "hor_1"
    }), $("#parentHorizontalTabSec").length && $("#parentHorizontalTabSec").easyResponsiveTabs({
        type: "default",
        width: "auto",
        fit: !0,
        tabidentify: "hor_2"
    }), $("#ChildVerticalTab_1").length && $("#ChildVerticalTab_1").easyResponsiveTabs({
        type: "vertical",
        width: "auto",
        fit: !0,
        tabidentify: "ver_1"
    }), $("#ChildVerticalTab_2").length && $("#ChildVerticalTab_2").easyResponsiveTabs({
        type: "vertical",
        width: "auto",
        fit: !0,
        tabidentify: "ver_2"
    }), $("#ChildVerticalTab_3").length && $("#ChildVerticalTab_3").easyResponsiveTabs({
        type: "vertical",
        width: "auto",
        fit: !0,
        tabidentify: "ver_3"
    }), $(".lyt-protector-flow").length && protectLoan(), slideEffectHorizontal(), slideEffectVertical(), bsLine(), imageTile(), scrollToActiveTab(), popup(), hide_show(), swipeContent(), readMoreCont(), dropdown(), select(), hide_textbox(), dropdown_hover(), customResponsiveTable(), contactForm(), searchResult(), filterFaq(), playVideo(), moving_dom_sticky(), select(), country_close(), addClassToRemainder(), tabOnly(), tabOnlySlideEffect(), addToCompare(), float_btn_new(), equalheight(".eqheight .eq-item"), toggleFeatureList(), otpSteps(), $("#bonus-slider").length && filter_slider("bonus-slider"), $("#bonus-slider2").length && filter_slider("bonus-slider2"), $("#tile-slider").length && tile_slider("tile-slider"), articleVerticalSlider(), createVideoPlayer(), landingPageVideo();
    var observer = lozad();
    observer.observe();

    var slideObserver = lozad('.slider-lozad', {
        threshold: 0.3,
        loaded: function(el) {
        	if (window.matchMedia("(max-width: 1200px)").matches) {
        		if ($(el).hasClass("testimonial-img-lazy")) {
                    $(el).css("width", "100%");
                }
        	} else {
        		if ($(el).hasClass("testimonial-img-lazy")) {
                    $(el).css("width", "auto");
                }
        	}
        }
    });
    slideObserver.observe();
}), $(window).on("scroll", function() {
    tab_sticky(), top_menu_show(), make_active()
}), $(window).resize(function() {
    slideEffectHorizontal(), slideEffectVertical(), bsLine(), tabOnlySlideEffect(), quoteDetails(), moving_dom_sticky(), addClassToRemainder(), $("#column-chart").length && columnChart(), equalheight(".eqheight .eq-item")
});
function removeDuplicates(e, t) {
    return e.filter(function (e, r, n) {
        return n.map(function (e) {
            return e[t]
        }).indexOf(e[t]) === r
    })
}
function generateRandom() {
    return Math.floor(100000 + Math.random() * 900000);
}
function arraysEqual(e, t, r) {
    if (e = e.sort(), t = t.sort(), r && (e = e.sort(function (e, t) {
            return e[r] - t[r]
        }), t = t.sort(function (e, t) {
            return e[r] - t[r]
        })), e.length === t.length) {
        for (var n = 0; n < e.length; ++n) {
            if (typeof e[n] != typeof t[n]) return !1;
            if ("object" == typeof e[n]) {
                for (var a = 0; a < Object.keys(e[n]).length; a++)
                    if (e[n][Object.keys(e[n])[a]] != t[n][Object.keys(e[n])[a]]) return !1
            } else if (e[n] !== t[n]) return !1
        }
        return !0
    }
    return !1
}

function btnRedirect() {
    $("button[href]").on("click", function (e) {
        $(this).attr("target") ? window.open($(this).attr("href"), $(this).attr("target")) : window.location.href = $(this).attr("href")
    })
}

function multiTabRedirect() {
    $("li[href]").on("click", function (e) {
        window.location.href = $(this).attr("href")
    })
}

function removeDuplicatesFromObj(e, t) {
    for (var r = {}, n = 0, a = e.length; n < a; n++) r[e[n][t]] || (r[e[n][t]] = e[n]);
    var i = [];
    for (var o in r) i.push(r[o]);
    return i
}

function returnData(e, t, r) {
    "object" == typeof e && (e.hasOwnProperty(t) ? r.push(e) : Object.keys(e).forEach(function (n) {
        returnData(e[n], t, r)
    }))
}

function hideError(e) {
    var t = document.getElementById(e.id + "ErrorMsg");
    if (t) {
        var r = findSelectorParent(t, ".validation-failed");
        r && (r.classList.remove("validation-failed"), t.style.display = "none")
    }
}

function showResponse(e) {
    "SUCCESS" == e.sts || "error" != e.status ? e.msg && toastr.success(e.msg, "", {
        timeOut: 5e3,
        closeButton: !0,
        preventDuplicates: !0
    }) : "error" == e.status && e.error.length > 0 ? e.error.forEach(function (e) {
        showError(e.field + "ErrorMsg", e.message, !0), toastr.error(e.code + " : " + e.message, "", {
            timeOut: 5e3,
            closeButton: !0,
            preventDuplicates: !0
        })
    }) : e.msg && toastr.error(e.msg, "", {
        timeOut: 5e3,
        closeButton: !0,
        preventDuplicates: !0
    })
}

function activateInnerTab() {
    document.querySelectorAll("[data-innertab-id]").forEach(function (e, t) {
        var r, n = e.getAttribute("id") + t;
        e.setAttribute("id", n), e.querySelectorAll("[data-innertab-class]").forEach(function (e) {
            r = "ver_" + t, e.classList.add(r)
        }), $("#" + n).easyResponsiveTabs({
            type: "vertical",
            width: "auto",
            fit: !0,
            tabidentify: r
        })
    }), slideEffectHorizontal(), slideEffectVertical()
}

function showError(e, t, r) {
    var n = document.getElementById(e);
    if (n) {
        var a = findSelectorParent(n, ".label-input-group");
        n.innerText = t, 1 == r ? (a && a.classList.add("validation-failed"), n.style.display = "block") : (a && a.classList.remove("validation-failed"), n.style.display = "none")
    }
}

function createFormLabelQuery(e, t) {
    return "form#" + e + " label#" + t
}

function showErrorByQuerySelector(e, t, r) {
    document.querySelectorAll(e).forEach(function (e) {
        if (e) {
            var n = findSelectorParent(e, ".label-input-group");
            e.innerText = t, 1 == r ? (n && n.classList.add("validation-failed"), e.style.display = "block") : (n && n.classList.remove("validation-failed"), e.style.display = "none")
        }
    })
}

function findSelectorParent(e, t) {
    if (/^[\.]/g.test(t)) return function (e, r) {
        if (e && "BODY" === e.tagName) return;
        if (e) return e.classList.contains(r) ? e : findSelectorParent(e.parentElement, t)
    }(e, t.replace(/^\./g, ""));
    if (/^[a-zA-Z]+$/g.test(t)) return function (e, r) {
        if (e && "BODY" === e.tagName) return;
        if (e) return e.tagName == r ? e : findSelectorParent(e.parentElement, t)
    }(e, t);
    console.error("selector incorrect")
}

function toggleLoader(e) {
    document.getElementById("loader") && (document.getElementById("loader").style.display = 1 == e ? "block" : "none")
}

function removePadding() {
    $(".responsivegrid>.aem-Grid > .aem-GridColumn").css({
        padding: "0"
    })
}

function dateFormat(e) {
    var t = e.split("-");
    return 4 == t[0].length ? e : t[2] + "-" + t[1] + "-" + t[0]
}

function dateFormatReverse(e) {
    var t = e.split("-");
    return t[2] + "/" + t[1] + "/" + t[0]
}

function isNumber(e, t) {
    if ((e = e || window.event).type = "input") return e.target.value = e.target.value.replace(/[^0-9]/g, ""), e.target.value.length > t && (e.target.value = e.target.value.slice(0, t)), /[0-9]/g.test(e.data);
    /*var r = e.which ? e.which : e.keyCode;
    return !(r > 31 && (r < 48 || r > 57))*/
}

function isNumberWithDecimal(e, t) {
    if ((e = e || window.event).type = "input") return e.target.value = e.target.value.replace(/[^0-9\.]/g, ""), e.target.value.length > t && (e.target.value = e.target.value.slice(0, t)), /[^0-9\.]/g.test(e.data);
    /*var r = e.which ? e.which : e.keyCode;
    return !(r > 31 && (r < 48 || r > 57)) && 190 != r*/
}

function isForMobileDeviceNumber(e) {
    return (e = e || window.event).target.value = e.target.value.replace(/[^0-9]/g, ""), !1
}

function isPinCode(e) {
    var t = (e = e || window.event).which ? e.which : e.keyCode;
    return !!(t > 31 && /^[1-9][0-9]{5}$/g.test(e.target.value)) || !(t > 31 && (t < 48 || t > 57))
}

function isAlpha(e) {
    if ((e = e || window.event).type = "input") return e.target.value = e.target.value.replace(/[^a-zA-Z]/g, ""), /[^a-zA-Z]/g.test(e.data);
    /*var t = e.which ? e.which : e.keyCode;
    return !(32 != t || !/^[a-zA-Z]+$/g.test(e.target.value)) || !(t > 31 && (t < 65 || t > 90) && (t < 97 || t > 122))*/
}

function isAlphaSpace(e) {
    if ((e = e || window.event).type = "input") return e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, ""), /[^a-zA-Z ]/g.test(e.data);
    /*var t = e.which ? e.which : e.keyCode;
    return !(32 != t || !/^[a-zA-Z ]+$/g.test(e.target.value)) || !(t > 31 && (t < 65 || t > 90) && (t < 97 || t > 122))*/
}

function isDate(e) {
    return e = e || window.event, /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/g.test(e.target.value), !0
}

function searchParamsConvertToData(e) {
    var t = {};
    return e.forEach(function (e, r, n) {
        t[r] = e
    }), t
}

function formatDate(e) {
    console.log("in format ", e);
    var t = (e = new Date(e)).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric"
    }).replace(/ /g, "-");
    return console.log(t), t
}

function initFAQ() {
    FAQs = document.querySelectorAll(".FAQ").forEach(function (e) {
        var t = [],
            r = [];
        e.querySelectorAll("[data-tag]").forEach(function (e) {
            e.hasAttribute("data-tag") && (r.push(e), t.push(e.getAttribute("data-tag")))
        }), e.querySelector("#search") && e.querySelector("#search").addEventListener("input", function (t) {
            var n = t.target.value;
            if (n.length > 2) {
                r.forEach(function (e) {
                    e.style.display = "block"
                });
                var a = [];
                r.forEach(function (e) {
                    var t = new RegExp(n, "gi").test(e.innerText);
                    t ? (a.push(e.getAttribute("data-tag")), e.style.display = "block", e.setAttribute("data-show", !0)) : (e.style.display = "none", e.setAttribute("data-show", !1))
                }), e.querySelectorAll("#tagContainer li a").forEach(function (e) {
                    e.parentElement.style.display = "none", e.classList.remove("active")
                }), a.getUnique().forEach(function (t) {
                    e.querySelectorAll("#tagContainer li a").forEach(function (e) {
                        e.getAttribute("data-value") == t && (e.parentElement.style.display = "inline-block")
                    })
                })
            } else e.querySelectorAll("#tagContainer li a").forEach(function (e) {
                e.parentElement.style.display = "inline-block"
            }), r.forEach(function (e) {
                e.setAttribute("data-show", "true"), e.style.display = "block"
            })
        }), e.querySelector("#tagContainer").innerHTML = "", t.getUnique().forEach(function (t) {
            var n = document.createElement("li"),
                a = document.createElement("a");
            a.classList.add("tag"), a.setAttribute("data-value", t), a.innerHTML = t, a.onclick = function () {
                e.querySelectorAll("#tagContainer li a").forEach(function (e) {
                    e.classList.remove("active")
                }), a.classList.add("active"), r.forEach(function (e) {
                    "true" == e.getAttribute("data-show") && (e.style.display = "block")
                }), r.filter(function (e) {
                    return e.getAttribute("data-tag") != t
                }).forEach(function (e) {
                    e.style.display = "none"
                })
            }, n.appendChild(a), e.querySelector("#tagContainer").appendChild(n)
        })
    })
}

function checkInsuringFor() {
    $(".bs-form button").click(function () {
        var e = $(this).closest(".bs-form");
        e.find(".bs-dropdown.typ-insuring").length && e.find(".typ-insuring .dropdown-content input[type='tel']").each(function () {
            var t = $(this);
            $(this).prop("disabled") || ("" == t.val() ? (e.find(".bs-dropdown.typ-insuring .dropdown-content").slideDown(), t.addClass("validation-error")) : t.removeClass("validation-error"))
        })
    })
}
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.replace("#"), "function" == typeof window.history.replaceState && history.replaceState({}, "", window.location.href.slice(0, -1)), document.getElementById("travelIndividual")) {
        var e = document.getElementById("travelIndividual");
        if (showError("tripStartDateErrorMsg", "", !1), $("#travelType").val()) {
            var t = 0;
            switch ($("#travelType").val()) {
                case "1":
                    t = 179;
                    break;
                case "2":
                    t = 59;
                    break;
                case "3":
                    t = 364;
                    break;
                default:
                    t = 0
            }
            $(e).find("#tripEndDate").datepicker("setEndDate", $(e).find("#tripStartDate").datepicker("getDate").addDays(t))
        }
        $(e).find("#tripEndDate").val("DD/MM/YYYY")
    }
    $("#healthindividual select#gender").select2({
            minimumResultsForSearch: -1,
            width: "100%"
        }), $("#ulipchild select#gender").select2({
            minimumResultsForSearch: -1,
            width: "100%"
        }), $("#ulipchild select#frequencyCode").select2({
            minimumResultsForSearch: -1,
            width: "100%"
        }),
         window.urlObj = new URL(window.location.href);
    var r = urlObj.searchParams.get("src_60") || urlObj.searchParams.get("src_30") || urlObj.searchParams.get("src_90"),
        n = urlObj.searchParams.get("pid"),
        utmpresent = urlObj.searchParams.get("utm_source")
    a = digitalData.page.name;
    if (r) {
        var i = r.split(":");
        window.channelType = {
            channelType: i[0] || "Organic_markets"
        }, window.utmParams = {
            utmSource: i[1] || "Organic_markets",
            utmMedium: i[2] || a,
            utmCampaign: i[3] || null,
            utmContent: i[4] || null,
            utmTerm: i[5] || null
        }
    } else if (n) {
        i = n.split(":");
        window.channelType = {
            channelType: "Internal"
        }, window.utmParams = {
            utmSource: i[1] || "Organic_markets",
            utmMedium: i[2] || a,
            utmCampaign: i[3] || null,
            utmContent: i[4] || null,
            utmTerm: i[5] || null
        }
    } else window.channelType = {
        channelType: urlObj.searchParams.get("utm_source") || "Organic_markets"
    }, window.utmParams = {
        utmSource: urlObj.searchParams.get("utm_source") || "Organic_markets",
        utmMedium: urlObj.searchParams.get("utm_medium") || a,
        utmCampaign: urlObj.searchParams.get("utm_campaign") || null,
        utmContent: urlObj.searchParams.get("utm_content") || null,
        utmTerm: urlObj.searchParams.get("utm_term") || null
    };


    $(".label-input-group").each(function (e, t) {
        $(this).find("input").val() && $(this).addClass("focus")
    }), keyPressValidationActive(), AppData.localStorage.loadValue()
}), $(document).ready(function () {
    $("#travelCountryDiv").click(function () {
        $("#travelCountries").focus()
    }), $(".multiactive").click()
}), jQuery(document).ready(function (e) {
    activateInnerTab(), removePadding(), btnRedirect(), multiTabRedirect(), e("form").on("focus", "input[type=number]", function (t) {
        e(this).on("wheel", function (e) {
            e.preventDefault()
        })
    }), e("form").on("blur", "input[type=number]", function (t) {
        e(this).off("wheel")
    }), e("form").on("keydown", "input[type=number]", function (e) {
        38 != e.which && 40 != e.which || e.preventDefault()
    })
}), initFAQ();

/*---------------------------------------- CODE FOR OFFER COUNT AND CART COUNT -------------------------------*/
document.addEventListener("DOMContentLoaded", function () {

    //Offer Counter Code
    var offerCount, cartCount
    if (window.localStorage.getItem("offerCount")) {
        offerCount = window.localStorage.getItem("offerCount");
    }

    if (window.localStorage.getItem("emiStoreCartCount")) {
        cartCount = window.localStorage.getItem("emiStoreCartCount");
    }

    if (offerCount > 0) {
        if (document.getElementById("notify-offerCount") && document.getElementById("notify-offerCount-mob")) {
            document.getElementById("notify-stat-offer").style.display = "block";
            document.getElementById("notify-offerCount").innerText = offerCount;

        }

        if (document.getElementById("notif-stat-offer-mob") && document.getElementById("notify-offerCount-mob")) {
            document.getElementById("notif-stat-offer-mob").style.display = "block";
            document.getElementById("notify-offerCount-mob").innerText = offerCount;
        }

    } else {
        if (document.getElementById("notify-stat-offer")) {
            document.getElementById("notify-stat-offer").style.display = "none";
        }
        if (document.getElementById("notif-stat-offer-mob")) {
            document.getElementById("notif-stat-offer-mob").style.display = "none";
        }
    }


    //Cart Counter Code
    var cartCount = decodeURIComponent(readCookie('perpetual_session')).split('|')[12];
    if (cartCount > 0) {
        if (document.getElementById("notify-cartCount") && document.getElementById("notiy-stat-cartCount")) {
            document.getElementById("notify-cartCount").innerText = cartCount;
            document.getElementById("notiy-stat-cartCount").style.display = "block";
        }
    } else {
        if (document.getElementById("notify-cartCount") && document.getElementById("notiy-stat-cartCount")) {
            document.getElementById("notiy-stat-cartCount").style.display = "none";
        }
    }

});

/* ---------function for cart count read cookie -----------------*/
function readCookie(name) {
    return (name = new RegExp('(?:^|;\\s*)' + ('' + name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && name[1];
}


/*----------------------------------END OF CODE FOR OFFER COUNT AND CART COUNT -----------------------------------*/


/*----------------------------------- Linguasol Dropdown replication -------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("languageList") && document.getElementById("lanuageUL")) {
        var languageItem = document.getElementById("lanuageUL");
        document.getElementById("languageList").appendChild(languageItem);
        //document.querySelector("#languageList #lanuageUL").style.display= "block";
    }

    if (document.getElementById("language-mob") && document.getElementById("lanuageULMobile")) {
        var languageItemMobile = document.getElementById("lanuageULMobile");
        document.getElementById("language-mob").appendChild(languageItemMobile);
        //document.querySelector("#language-mob #lanuageULMobile").style.display= "block";
    }
});
/*-------------------------------END OF Linguasol Dropdown replication -----------------------------------*/
function glUTMCheck(ele) {
    var utm_params;
    var urlParams = window.urlObj.search.includes("src_30") || window.urlObj.search.includes("src_60") || window.urlObj.search.includes("src_90") || window.urlObj.search.includes("pid") || window.urlObj.search.includes("utm_source");
    var confParams = window.urlObj.search.includes("prodCode") || window.urlObj.search.includes(" ");
    if (urlParams) {
        utm_params = window.urlObj.search;
        if ($(this).attr("target")) {
            if ($(this).attr("href").includes('?')) {
                if (utm_params.includes('&nav_src')) {
                    if (typeof $(ele).attr("href") !== typeof undefined && $(ele).attr("href") !== false) {
                        window.open($(ele).attr("href") + '&' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.indexOf('&nav_src')), $(ele).attr("target"));
                        return false;
                    }
                } else {
                    if (typeof $(ele).attr("href") !== typeof undefined && $(ele).attr("href") !== false) {
                        window.open($(ele).attr("href") + '&' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.length), $(ele).attr("target"));
                        return false;
                    }
                }
            } else {
                if (typeof $(ele).attr("href") !== typeof undefined && $(ele).attr("href") !== false) {
                    window.open($(ele).attr("href") + '?' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.indexOf('&nav_src')), $(ele).attr("target"));
                    return false;
                }
            }
        } else {
            if (typeof $(ele).attr("href") !== typeof undefined && $(ele).attr("href") !== false) {
                if ($(ele).attr("href").includes('?')) {
                    if (utm_params.includes('&nav_src')) {
                        window.location.href = $(ele).attr("href") + '&' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.indexOf('&nav_src'));
                        return false;
                    } else {
                        window.location.href = $(ele).attr("href") + '&' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.length);
                        return false;
                    }
                } else {
                    if (utm_params.includes('&nav_src')) {
                        window.location.href = $(ele).attr("href") + '?' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.indexOf('&nav_src'));
                        return false;
                    } else {
                        window.location.href = $(ele).attr("href") + '?' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.length);
                        return false;
                    }
                }
            }
        }
    } else {
        if (typeof $(ele).attr("href") !== typeof undefined && $(ele).attr("href") !== false) {
            utm_params = utm;
            if ($(ele).attr("target")) {
                if ($(ele).attr("href").includes('?')) {
                    if (utm_params.includes('&nav_src')) {
                        window.open($(ele).attr("href") + '&' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.indexOf('&nav_src')), $(ele).attr("target"));
                        return false;
                    } else {
                        window.open($(ele).attr("href") + '&' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.length), $(ele).attr("target"));
                        return false;
                    }
                } else {
                    window.open($(ele).attr("href") + '?' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.indexOf('&nav_src')), $(ele).attr("target"));
                    return false;
                }
            } else {
                if ($(ele).attr("href").includes('?')) {
                    if (utm_params.includes('&nav_src')) {
                        window.location.href = $(ele).attr("href") + '&' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.indexOf('&nav_src'));
                        return false;
                    } else {
                        if (utm_params.length > 0) {
                            window.location.href = $(ele).attr("href") + '&' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.length);
                            return false;
                        } else {
                            window.location.href = $(ele).attr("href");
                            return false;
                        } /* window.location.href = $(ele).attr("href")+ '&' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.length); return false; */
                    }
                } else {
                    if (utm_params.includes('&nav_src')) {
                        window.location.href = $(ele).attr("href") + '?' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.indexOf('&nav_src'));
                        return false;
                    } else {
                        if (utm_params.length > 0) {
                            window.location.href = $(ele).attr("href") + '?' + utm_params.substring(utm_params.indexOf('?') + 1, utm_params.length);
                            return false;
                        } else {
                            window.location.href = $(ele).attr("href");
                            return false;
                        } /* window.location.href = $(ele).attr("href")+ '?' + utm_params.substring(utm_params.indexOf('?')+1,utm_params.length); return false; */
                    }
                }
            }
        }
    }
}
String.prototype.includes||Object.defineProperty(String.prototype,"includes",{value:function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}});
$(document).ready(function(){$(".cover-banner-slider").slick({slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,autoplay:!0,autoplaySpeed:3e3,arrows:!0,dots:!1}),$(".tab-link.tag").on("click",function(){$(".slick-slider").slick("slickGoTo",0)})});
function innerDivHeight() {
    var bfsTopBandHeight = $(".bfs-mob-top-band-wrap").outerHeight();
    var bfsSideBarFooterHeight = $(".side-bar-footer-wrap").outerHeight();
    var bfsInnerNavList = $(".bfs-nav-list-main").outerHeight();
    var innerMenuTotalHeightTotal = bfsTopBandHeight + bfsSideBarFooterHeight + bfsInnerNavList;
    var innerMenuTotalHeightSingle = $(".bfs-nav-list-wrap").outerHeight();
    if (innerMenuTotalHeightSingle > innerMenuTotalHeightTotal) {
        return innerMenuTotalHeightSingle;
    } else {
        return innerMenuTotalHeightTotal;
    }
}

function secLevelNavHeight(_this) {
    var backForBtnHeight = _this.find(".side-bar-back-tab-main").outerHeight();
    var dealOptionsHeight = _this.find(".deal-options-main").outerHeight();
    var subMenuInnerHeight = _this.find(".inner-wrap").outerHeight();
    var totalSecLevelNavHeight = backForBtnHeight + dealOptionsHeight + subMenuInnerHeight;
    var defaultMenuHeight = innerDivHeight();

    if (defaultMenuHeight > totalSecLevelNavHeight) {
        return defaultMenuHeight;
    } else {
        return totalSecLevelNavHeight;

    }
}

function checkArrow() {
    $(".inner-submenus-acc-head").each(function () {
        if ($(this).find(".inner-submenus-acc-ul").length == 0) {
            $(this).find(".inner-submenus-acc-cl").addClass("arrow-none");
        }
    });
}

function getProfileInitials() {
    var profileText = $(".prof-name-in").text().split(' ');
    var profileInitials = "";

    for (var i = 0; i < profileText.length; i++) {
        profileInitials += profileText[i].substring(0, 1);
    }

    $(".profile-initial").text(profileInitials);
}

var currentPageLink = window.location.pathname;



function hamburgerRedirectionParent() {
    var currentPageLink = window.location.pathname.split("/");
    if (currentPageLink[1].includes(".html")) {
        currentPageLink[1].replace(".html", "");
    }
    var pathnameText = currentPageLink[1].toLowerCase().replace("-", "");

    $(".bfs-nav-list-parent").each(function () {
        var hamburgerLinkText = $(".bfs-nav-list-parent-link span", this).text().toLowerCase().replace(/\s+/g, '');
        console.log(hamburgerLinkText);
        if (hamburgerLinkText == pathnameText) {
            $(this).find(".inner-menu-submenu-wrap").addClass("side-bar-back-open-tab");
        }

    });
}




function hamburgerRedirectionChild() {
    var currentPageLink = window.location.pathname.split("/");
    var pathnameText;

    if (currentPageLink[2] != undefined) {
        if (currentPageLink[2].includes(".html")) {
            currentPageLink[2].replace(".html", "");
        }
        pathnameText = currentPageLink[2].toLowerCase().replace("-", "");
    }
    $(".inner-child-list").each(function () {
        var hamburgerLinkText = $(this).text().toLowerCase().replace(/\s+/g, '');
        if (hamburgerLinkText == pathnameText) {
            $(this).parent().find(".inner-submenu").addClass("opem-inner-submenu");
            $(this).parents(".inner-menu-submenu-wrap").addClass("side-bar-back-open-tab");
        }
    })
}





var j = 0;
var animateText = "What can we help you find?";
var appendText = "";
var textSpeed = 85;

function typeAnimate() {

    if (j < animateText.length) {
        appendText += animateText.charAt(j);
        $(".animatepholder").text(appendText);
        j++;
        setTimeout(typeAnimate, textSpeed);
    }

}


function fadeOutSearchText() {
    $(".animatepholder").fadeOut();
    $(".bfs-menu-search-main .form-control").attr("placeholder", "What can we help you find?");
}


function langSplit() {
    var langText = $(".details-lang").text();
    var dispLang = langText.substr(0, 3);
    $(".details-lang").text(dispLang);
}

/*=============================================
=            Language Selection            =
=============================================*/

var pageCode;
function changeLangCode(pageCode, langCode) {
    if (pageCode != langCode) {
        var regexep = /^\/[a-z]+/g;
        if (pageCode == "en") {
            location.pathname = "/".concat(langCode).concat(location.pathname);
        }
        else if (langCode == "en") {
            location.pathname = location.pathname.replace(regexep, '');
        }
        else {
            location.pathname = location.pathname.replace(regexep, langCode);
        }
    }
}


/*=====  End of Language Selection  ======*/


/*=============================================
=            Language Selection OnLoad            =
=============================================*/

function onLoadLangSelection() {
    var pathName = location.pathname;
    var splitPath = pathName.split('/');
    splitPath.shift();
    var langCd = splitPath[0];
    var foundLangCode = true;
    $(".language-sel-options").each(function () {
        var redirectLangCode = $(this).data("lang");
        if (langCd == redirectLangCode) {
            $(this).addClass("lang-sel-active").siblings().removeClass("lang-sel-active");
            var selectLang = $(".lang-opt", this).text();
            var dispLang = selectLang.substr(0, 2);
            $(".details-lang").text(dispLang);
            pageCode = redirectLangCode;
            foundLangCode = false;
        }
    });
    if (foundLangCode) {
        $('.language-sel-options[data-lang="en"]').addClass('lang-sel-active');
        pageCode = "en";
    }
}

/*=====  End of Language Selection OnLoad  ======*/


function mobLngSelectionLoad() {
    var mobpathName = location.pathname;
    var mobsplitPath = mobpathName.split('/');
    mobsplitPath.shift();
    var moblangCd = mobsplitPath[0];
    var foundLangCode = true;
    $(".lang-selection-mob-li").each(function () {
        var mobRedirectLangCode = $(this).data("lang");
        if (moblangCd == mobRedirectLangCode) {
            $(this).addClass("mob-lang-active").siblings().removeClass("mob-lang-active");
            pageCode = mobRedirectLangCode;
            foundLangCode = false;
        }
    });
    if (foundLangCode) {
        $('.lang-selection-mob-li[data-lang="en"]').addClass('mob-lang-active');
        pageCode = "en";
    }
}

function mobLangSelectionC() {
    $(".lang-selection-mob-li").each(function () {
        if ($(this).hasClass("mob-lang-active")) {
            var activeLang = $(this).find(".lang-opt").text();
            $(".footer-lang").find(".footer-lang-sel").text(activeLang);
        }
    })
}

$(document).ready(function () {

    onLoadLangSelection();

    $(".details-lang-hd").on("click", function () {
        $('.language-select-dropd').toggleClass("lang-select-cli");
        $(".details-lang").toggleClass("arrow-org");
    });

    $('.language-select-dropd li.language-sel-options').on("click", function (e) {
        e.stopPropagation();
        var selectLang = $(".lang-opt", this).text().trim();
        console.log(selectLang);
        $(this).addClass("lang-sel-active").siblings().removeClass("lang-sel-active");
        var langID = $(this).data("lang");
        var dispLang = selectLang.substr(0, 2);
        $(".details-lang").text(dispLang);
        $(this).parent(".language-select-dropd").removeClass("lang-select-cli");
        $(".details-lang").removeClass("arrow-org");
        changeLangCode(pageCode, langID);
    });

    $(".lang-selection-mob-li").on("click", function (e) {
        e.stopPropagation();
        var mobLangId = $(this).data("lang");
        changeLangCode(pageCode, mobLangId);
    });

    getProfileInitials();
    checkArrow();
    typeAnimate();
    setTimeout(fadeOutSearchText, textSpeed * animateText.length);

    $(".bfs-nav-popup-wh-wrap").on("click", function (e) {
        if ($(e.target).hasClass("open-popup-wh")) {
            $(".bfs-nav-popup-wh-wrap").removeClass("open-popup-wh");
            $(".bfs-nav-popup-overlay-main").removeClass("active-log-popup");
            $(".bfs-nav-popup-wh-main").addClass("login-popup-sh");
            $(".bfs-nav-popup-success").addClass("login-popup-sh");
        }
    });


    $(".bfs-menu-search-main .form-control").focus(function () {
        $(".animatepholder").hide();
        $(".bfs-menu-search-main .form-control").attr("placeholder", "");
    });

    $(".bfs-menu-search-main .form-control").focusout(function () {
        $(".bfs-menu-search-main .form-control").attr("placeholder", "What can we help you find?");

    })

    $(".bfs-menu-search-main .v1_HomeserchtHead1").on('click', function () {
        $(".animatepholder").css('display', 'none');
        $(".bfs-menu-search-main .form-control").focus();

    });



    /*=============================================
    =            PROFILE POPUP            =
    =============================================*/

    $(".profile-menu-list-wrap").click(function (e) {
        e.stopPropagation();
    });


    /*=====  End of PROFILE POPUP  ======*/


    /*----------  =============================================================================================  ----------*/



    /*=============================================
    =            CART MENU POP-UP            =
    =============================================*/

    /*  $('.card-menu-main-wrapper').click(function(e) {
          e.stopPropagation();
      });
  
  
      $(".cart-menu-view").on("click", function(e) {
          e.stopPropagation();
  
          $(this).find(".card-menu-main-wrapper").toggleClass('card-menu-wrapper-view');
  
          if ($(".profile-menu-list-wrap").hasClass("profile-stat")) {
              $(".profile-menu-list-wrap").removeClass("profile-stat");
          }
      });*/

    /*=====  End of CART MENU POP-UP  ======*/

    /*----------  =============================================================================================  ----------*/

    /*=============================================
    =            CLOSE POP-UP ON HMTL CLICK            =
    =============================================*/
    /*   $("html").click(function() {
           if ($(".profile-menu-list-wrap").hasClass("profile-stat") || $(".card-menu-main-wrapper").hasClass("card-menu-wrapper-view")) {
               $(".profile-menu-list-wrap").removeClass("profile-stat");
               $(".card-menu-main-wrapper").removeClass("card-menu-wrapper-view");
           }
       });*/


    /*=====  End of CLOSE POP-UP ON HMTL CLICK  ======*/

    /*----------  =============================================================================================  ----------*/

    if ($(window).innerWidth() > 991) {

        langSplit();
    }

    if ($(window).innerWidth() < 992) {
        mobLngSelectionLoad();

        hamburgerRedirectionParent();

        hamburgerRedirectionChild();

        //    	mobLangSelectionC();

        $(".side-bar-footer-list").on("click", function () {
            $(this).find(".lang-selection-mob").addClass("openlangmenu");
        });

        $(window).scroll(function () {

            if ($(this).scrollTop() > 0) {
                $('.bfs-nav-details-wrap').hide();
            } else {
                $('.bfs-nav-details-wrap').show();
            }
        });




        /*=============================================
        =            ACCORDION MOBILE VIEW - SUBMENUS            =
        =============================================*/


        /*----------  LOANS ACCORDION - START ----------*/
        $(".accor-link-head").on("click", function (e) {
            e.preventDefault();
            if ($(this).next().hasClass('option-show')) {
                $(this).next().removeClass('option-show');
                $(this).next().slideUp(350);
                $(this).removeClass("arroww")
            } else {
                $(this).toggleClass('arroww');
                $(this).parent().parent().find('li .inner-acc').removeClass('option-show');
                $(this).parent().parent().find('li .inner-acc').slideUp(350);
                $(this).next().toggleClass('option-show');
                $(this).next().slideToggle(350);
                $(this).parent(".lns-submenu").siblings().find(".accor-link-head").removeClass("arroww");
            }
        });
        /*----------  LOANS ACCORDION - END ----------*/


        /*----------  E-STORE ACCORDION - START ----------*/
        $(".inner-submenus-acc-cl").on("click", function (e) {
            e.preventDefault();
            if ($(this).next().hasClass('option-show')) {
                $(this).next().removeClass('option-show');
                $(this).next().slideUp(350);
                $(this).removeClass("arroww")
            } else {
                $(this).toggleClass('arroww');
                $(this).parent().parent().find('.inner-submenus-acc-head .inner-submenus-acc-ul').removeClass('option-show');
                $(this).parent().parent().find('.inner-submenus-acc-head .inner-submenus-acc-ul').slideUp(350);
                $(this).next().toggleClass('option-show');
                $(this).next().slideToggle(350);
                $(this).parent(".inner-submenus-acc-head").siblings().find(".inner-submenus-acc-cl").removeClass("arroww");

            }
        });
        /*----------  E-STORE ACCORDION END  ----------*/


        /*=====  End of ACCORDION MOBILE VIEW - SUBMENUS  ======*/

        /*----------  =============================================================================================  ----------*/


        $(".inner-menu-submenu-wrap").css("height", innerDivHeight());

        $(".lang-selection-mob").css("height", innerDivHeight());

        $(".bfs-hamburger-icon").on("click", function () {
            $(".bfs-nav-list-wrap").addClass("open-bfs-side-menu");
            $(".bfs-overlay").addClass("openn");
            $("body").addClass("no-overflow");
        });


        $(".bfs-overlay").on("click", function () {
            $(this).removeClass("openn");
            $(".bfs-nav-list-wrap").removeClass("open-bfs-side-menu");
            $("body").removeClass("no-overflow");
        });


        $(".side-menu-cross-wrap").on("click", function () {
            $(".bfs-overlay").removeClass("openn");
            $(".bfs-nav-list-wrap").removeClass("open-bfs-side-menu");
            $("body").removeClass("no-overflow");

        });


        $(".bfs-nav-list-parent").on("click", function () {
            $(this).find(".inner-menu-submenu-wrap").addClass("side-bar-back-open-tab");
            $(".inner-submenu").css("height", secLevelNavHeight($(this)));
            $(".inner-submenus-adpt-wrap").css("height", secLevelNavHeight($(this)));


        });


        $(".inner-sub-menu-bk-one .back-arrow").on("click", function (e) {
            e.stopPropagation();
            $(this).parents(".inner-menu-submenu-wrap").removeClass("side-bar-back-open-tab");
            $(this).parents(".lang-selection-mob").removeClass("openlangmenu");
        });


        $(".inner-sub-menu-bk-one .back-close").on("click", function (e) {
            e.stopPropagation();

            $(".bfs-overlay").removeClass("openn");
            $(".bfs-nav-list-wrap").removeClass("open-bfs-side-menu");
            $(this).parents(".inner-menu-submenu-wrap").removeClass("side-bar-back-open-tab");
            $("body").removeClass("no-overflow");
            $(this).parents(".lang-selection-mob").removeClass("openlangmenu");
        });





        $(".inner-subs-main-cl .back-arrow").on("click", function (e) {
            e.stopPropagation();
            $(this).parents(".inner-submenu").removeClass("opem-inner-submenu");
            $(this).parents(".inner-submenus-adpt-wrap").removeClass("adpt-wrap-open");
        });


        $(".inner-subs-main-cl .back-close").on("click", function (e) {
            e.stopPropagation();
            $(".bfs-overlay").removeClass("openn");
            $(".bfs-nav-list-wrap").removeClass("open-bfs-side-menu");
            $(this).parents(".inner-submenu").removeClass("opem-inner-submenu");
            $(".inner-menu-submenu-wrap").removeClass("side-bar-back-open-tab");
            $(".profile-popup-wrap").removeClass("show-prof-popup");
            $("body").removeClass("no-overflow");

        });



        /* $(".card-menu-main-wrapper .side-menu-cross-wrap").on("click", function(e) {
             e.stopPropagation();
             $(this).parents(".card-menu-main-wrapper").removeClass("card-menu-wrapper-view");
         });*/



        $(".inner-child").on("click", function () {


            if ($(this).find(".inner-submenu").hasClass("emi-menus")) {
                var submneuAttr = $(this).find(".inner-child-list").data("type");
                console.log(submneuAttr);

                var menuToShow = $("#" + submneuAttr);
                console.log(menuToShow);
                $(menuToShow).addClass("adpt-wrap-open").siblings(".inner-submenus-adpt-wrap").removeClass("adpt-wrap-open");
            } else {
                $(this).find(".inner-submenu").addClass("opem-inner-submenu");

            }

            // $(this).find(".inner-child-list").next(".inner-submenu").hide();

            // $(".inner-submenus-adpt-wrap").removeClass("adpt-wrap-open");

        });


        $('.profile-popup-wrap').click(function (e) {
            e.stopPropagation();
        });


        $(".profile-menu-view").on("click", function () {
            $(".profile-popup-wrap").addClass("show-prof-popup");
        });

        /* $(".mobile-login-name-wrap").on("click", function() {
             $(".profile-popup-wrap").addClass("show-prof-popup");
             $(".bfs-nav-list-wrap").removeClass("open-bfs-side-menu");
             $(".bfs-overlay").removeClass("openn");
 
         });*/




        $("#signInProfile").on('click', function () {
            $("#signInDropdown").addClass("show-prof-list");
        });

        $('#postLogin').on('click', function () {
            $("#signInDropdown").addClass("show-prof-list");
            $(".bfs-nav-list-wrap").removeClass("open-bfs-side-menu");
            $(".bfs-overlay").removeClass("openn");
            $("body").removeClass("no-overflow");
        });

        $('#postSignIn').on('click', function () {
            $("#signInDropdown").addClass("show-prof-list");
            $(".bfs-nav-list-wrap").removeClass("open-bfs-side-menu");
            $(".bfs-overlay").removeClass("openn");
            $("body").removeClass("no-overflow");
        });

        $("#signInDropdown .back-close").on("click", function () {
            $("#signInDropdown").removeClass("show-prof-list");
        });

        $(".bfs-nav-list-parent .bfs-nav-list-parent-link").removeAttr("href nav-src");

        $(".inner-child .inner-child-list").removeAttr("href nav-src");

        $(".bfs-side-bar-footer-mob .bfs-side-bar-footer-link").each(function () {
            if (!$(this).hasClass("bfs-no-redirect")) {
                $(this).removeAttr("href nav-src");
            }
        })


    }

    /*----------  CHATBOT ID ONLOAD - MOBILE / DESKTOP - START  ----------*/
    if (matchMedia("(max-width: 991px)").matches) {
        $('.bfs-chatlinkmob').attr('id', 'chat-link-light');
    }
    else {
        $('.bfs-chatlinkdesk').attr('id','chat-link-light');
    }
    /*----------  CHATBOT ID ONLOAD - MOBILE / DESKTOP - END  ----------*/




    /*-----------------  script for SSO Login ---------------------*/

    /*=============================================
    =            Login / SignIn PopUps            =
    =============================================*/

    $(".cancel-btn-wrap").on("click", function () {
        $(".bfs-nav-popup-overlay-main").removeClass("active-log-popup");
        $(".bfs-nav-popup-wh-wrap").removeClass("open-popup-wh");
        $(".bfs-nav-popup-wh-main").addClass("login-popup-sh");
    })

    /*=====  End of Login / SignIn PopUps  ======*/

    function inputLabel() {
        if ($(".cell-no").val() == "") {
            $(".cell-no").parent().removeClass("focus-anim");
        } else {
            $(".cell-no").parent().addClass("focus-anim");
        }
        $(".cell-no").focus(function () {
            $(this).parent().addClass("focus-anim");
        });
        $(".cell-no").blur(function () {
            if ($(this).val() == "") {
                $(this).parent().removeClass("focus-anim");
            }
        });

    }

    inputLabel();

    $(".login-mob-no").on("click", function () {
        $(this).prev(".cell-no").focus();
    });

    /*if($("#signUpProfile")){
        $("#signUpProfile").on("click", function(){
            $("#loginPopUp").addClass("active-log-popup");
            $("#loginPopUp").find(".bfs-nav-popup-wh-wrap").addClass("open-popup-wh");
            $("#loginPopUp input").val("");
            $("#otpGenerate").addClass("diabled-sub-btn");
            $("#otpGenerate").attr("disabled",true);
            if($("#login-mob-popup-form .pop-input-item-name").hasClass("focus-anim")){
                $("#login-mob-popup-form .pop-input-item-name").removeClass("focus-anim");
            }
        	
            if($("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-mob").hasClass("login-popup-sh")){
                $("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-mob").removeClass("login-popup-sh");
            }
        	
            if($("#login-mob-noErrorMsg").css("display") == "block"){
                $("#login-mob-noErrorMsg").css("display","none");
            }
        	
        })
    }*/

    $(".re-sign").on("click", function () {
        var attrView = $(this).data("view");
        var signPopupToShow;
        if (attrView == "loginPopUp") {
            signPopupToShow = $("#" + attrView);

            $(signPopupToShow).addClass("active-log-popup");
            $(signPopupToShow).find(".bfs-nav-popup-wh-wrap").addClass("open-popup-wh");
            if ($(signPopupToShow).find(".bfs-nav-popup-wh-wrap .login-mob").hasClass("login-popup-sh")) {
                $(signPopupToShow).find(".bfs-nav-popup-wh-wrap .login-mob").removeClass("login-popup-sh");
            }

            $("#viewsignuppop").removeClass("active-log-popup");
            $("#viewsignuppop").find(".bfs-nav-popup-wh-wrap").removeClass("open-popup-wh");
            $("#viewsignuppop .bfs-nav-popup-wh-main").addClass("login-popup-sh");
            $("#login-mob-popup-form input").val("");
            $("#otpGenerate").addClass("diabled-sub-btn");
            $("#otpGenerate").attr("disabled", true);
            $("#login-mob-popup-form .pop-input-item-name").removeClass("focus-anim");
        }

        if (attrView == "viewsignuppop") {
            signPopupToShow = $("#" + attrView);
            $(signPopupToShow).addClass("active-log-popup");
            $(signPopupToShow).find(".bfs-nav-popup-wh-wrap").addClass("open-popup-wh");
            $("#loginPopUp").removeClass("active-log-popup");
            $("#loginPopUp").find(".bfs-nav-popup-wh-wrap").removeClass("open-popup-wh");
            if ($(signPopupToShow).find(".bfs-nav-popup-wh-wrap .signup-reg").hasClass("login-popup-sh")) {
                $(signPopupToShow).find(".bfs-nav-popup-wh-wrap .signup-reg").removeClass("login-popup-sh");
            }

            $("#loginPopUp .bfs-nav-popup-wh-main").addClass("login-popup-sh");
            $("#signup-popup-form input").val("");
            $("#regitserGenerateOTP").addClass("diabled-sub-btn");
            $("#regitserGenerateOTP").attr("disabled", true);
        }

        if ($('#cust-fnameErrorMsg').css('display') == "block") {
            $('#cust-fnameErrorMsg').css('display', 'none');
        }

        if ($('#register-mob-noErrorMsg').css('display') == "block") {
            $('#register-mob-noErrorMsg').css('display', 'none');
        }

        if ($('#dobErrorMsg').css('display') == "block") {
            $('#dobErrorMsg').css('display', 'none');
        }
    });



    $("#loginOTPBack").on("click", function () {
        document.getElementById("loginPassword").value = "";
        document.getElementById("loginPasswordErrorMsg").style.display = "none";
        var backAttr = $("#loginOTPBack").data("back");
        if (backAttr == "login-mob-back") {
            $("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-mob").removeClass("login-popup-sh");
            $("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-otp").addClass("login-popup-sh");
        }
        else if (backAttr == "login-dob-back") {
            $("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-dob").removeClass("login-popup-sh");
            $("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-otp").addClass("login-popup-sh");
        }
    });

    $("#registerOTPBack").on("click", function () {
        document.getElementById("register-otp").value = "";
        document.getElementById("register-otpErrorMsg").style.display = "none";
        if ($("#viewsignuppop .signup-reg").hasClass("login-popup-sh")) {
            $("#viewsignuppop .signup-reg").removeClass("login-popup-sh");
            $("#viewsignuppop .signUpOTP").addClass("login-popup-sh");
        }
    });

    $("#signIn-mob-hamburger").on("click", function () {
        $(".bfs-overlay").removeClass("openn");
        $(".bfs-nav-list-wrap").removeClass("open-bfs-side-menu");
        $("#loginPopUp").addClass("active-log-popup");
        $("#loginPopUp").find(".bfs-nav-popup-wh-wrap").addClass("open-popup-wh");

        if ($("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-mob").hasClass("login-popup-sh")) {
            $("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-mob").removeClass("login-popup-sh");
        }
    });

    $("#preLogin").on("click", function () {
        $(".bfs-overlay").removeClass("openn");
        $(".bfs-nav-list-wrap").removeClass("open-bfs-side-menu");
        $("#loginPopUp").addClass("active-log-popup");
        $("#loginPopUp").find(".bfs-nav-popup-wh-wrap").addClass("open-popup-wh");

        if ($("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-mob").hasClass("login-popup-sh")) {
            $("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-mob").removeClass("login-popup-sh");
        }
    });


});

function openCloseLoginPopUp() {
    $("#loginPopUp").addClass("active-log-popup");
    $("#loginPopUp").find(".bfs-nav-popup-wh-wrap").addClass("open-popup-wh");
    $("#loginPopUp input").val("");
    $("#otpGenerate").addClass("diabled-sub-btn");
    $("#otpGenerate").attr("disabled", true);
    if ($("#login-mob-popup-form .pop-input-item-name").hasClass("focus-anim")) {
        $("#login-mob-popup-form .pop-input-item-name").removeClass("focus-anim");
    }

    if ($("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-mob").hasClass("login-popup-sh")) {
        $("#loginPopUp").find(".bfs-nav-popup-wh-wrap .login-mob").removeClass("login-popup-sh");
    }

    if ($("#login-mob-noErrorMsg").css("display") == "block") {
        $("#login-mob-noErrorMsg").css("display", "none");
    }
}
var taxObj = {};
var sortedRecommendation=[];
function isNumberIncomeCalc(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (!charCode) {
        var input = $("#" + event.currentTarget.id).val().slice(-1);
        if (!input.match(/[0-9]/g)) {
            $("#" + event.currentTarget.id).val($("#" + event.currentTarget.id).val().replace(input, ''));
        }
    } else {
        if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
            $(".number-error").css("display", "block");
            return false;
        }

        $(".number-error").css("display", "none");
        return true;
    }
}

function callIncomeTax(selector,data,thisevent){
	 AppEvent.trigger(selector, data).then(function (response) {
		 if(response.status == "SUCCESS"){
			 var myObj = response;
	         document.getElementsByClassName('inc-top-band-amt-txt')[0].innerText = myObj.payload.totalInvestment.toLocaleString();
	         document.getElementsByClassName('inc-top-band-amt-txt')[1].innerText = myObj.payload.taxableIncome.toLocaleString();
	         document.getElementsByClassName('inc-top-band-amt-txt')[2].innerText = myObj.payload.taxPayable.toLocaleString();
	         document.querySelector(".hidedoc").style.display = "block";
	         if(response.payload.productRecommendations != null){
	        	 var productRecommend=response.payload.productRecommendations;
	        	 for(var i=0;i<productRecommend.length;i++){
	        		    var header=productRecommend[i].taxSectionCode;
	        		    sortedRecommendation[header].className= "additional-label-w additional-label-w-active";
	        		    sortedRecommendation[header].querySelector(".amt-hyper-w .amt-hyper").setAttribute("href",productRecommend[i].redirectionUrl);
	        		    sortedRecommendation[header].querySelector(".amt-text-w").innerText="₹ "+productRecommend[i].amount.toLocaleString();
	        		}
	         }
	         $(".investment-product-plans-w").removeClass("invest-products-show");
	         $(".investment-product-plans-w").slideUp();
	         $(".acc-arrow-og").removeClass("acc-arrow-og-rotate");
	         $(".investment-product-input").prop("disabled", true);
//	         $(".calc-tax-btn-parent").hide();
	         $(".income-tax-edit-done-w").show();
	         $(".summary-main-wrapper").removeClass("secHidden");
	         
	         $("#calculatetax").hide();
	         $(thisevent).addClass("btn-hidden");
	         inputValueReplace();
	         var divToScroll = $(thisevent).data("scroll");
	         goToByScroll(divToScroll);
	        
	         toggleLoader(false);
		 }else{
			 if (response.errorBean) {
	                toastr.error(response.errorBean[0].errorCode + " : " + response.errorBean[0].errorMessage, "", {
	                    timeOut: 5e3,
	                    closeButton: !0,
	                    preventDuplicates: !0
	                });
	            }
			 toggleLoader(false);
		 }
         
     }).catch(function(err){
    	 toggleLoader(false);
     })
}

function inputValueReplace() {
    $(".investment-product-input").each(function() {
        if ($(this).val() == "") {
            $(this).val("0");
        }
    });
}

function goToByScroll(id) {
	var headerHeight = $(".bfs-header-wrap").outerHeight()+40;
	var divHeight = $("#"+id).offset().top
	window.scrollTo(0, divHeight - headerHeight);
	
}

function isDecimalIncoCalc(event) {
    var input = $("#" + event.currentTarget.id).val().slice(-1);
    if (!input.match(/[0-9]/g)) {
        $("#" + event.currentTarget.id).val($("#" + event.currentTarget.id).val().replace(input, ''));
    }
}

function annualIncomeFocus() {
    $("#annualincomecalc").focus(function () {
        $(".label-income-tax-form-msg").hide();
    });
}
function checkIncomeTaxValidation() {
    var status = false;
    var investment = Number(document.getElementById("incometax-investment").value || 0);
    var npsinvestment = Number(document.getElementById("incometax-npsinvestment").value || 0);
    var healthinspre = Number(document.getElementById("incometax-helthinspre").value || 0);
    var interhomeloan = Number(document.getElementById("incometax-inthomeloan").value || 0);
    var intereduloan = Number(document.getElementById("incometax-inteduloan").value || 0);
    var financialyear = document.querySelector("input[name='financialyear']:checked").value;
    var agegroup = parseInt(document.querySelector("input[name='urage']:checked").value);
    /*var helthinspreammlimit = Number((financialyear == 'FY-19-20' && agegroup>=80)?"50000":"75000");*/
    var helthinspreammlimit = Number((agegroup>=80)?"50000":"75000");
    document.querySelector(".healthprelimit").innerText=helthinspreammlimit.toLocaleString();
    if (investment < 0 || investment > 150000) {
        document.querySelector("#investmentcheck").style.display = "block";
        status = true;
    } else {
        document.querySelector("#investmentcheck").style.display = "none";
    }
    if (npsinvestment < 0 || npsinvestment > 50000) {
        document.querySelector("#npsinvestmentcheck").style.display = "block";
        status = true;
    } else {
        document.querySelector("#npsinvestmentcheck").style.display = "none";
    }
    if (healthinspre < 0 || healthinspre > helthinspreammlimit) {
        document.querySelector("#healthinspremium").style.display = "block";
        status = true;
    } else {
        document.querySelector("#healthinspremium").style.display = "none";
    }
    if (interhomeloan < 0 || interhomeloan > 200000) {
        document.querySelector("#interestonhomeloan").style.display = "block";
        status = true;
    } else {
        document.querySelector("#interestonhomeloan").style.display = "none";
    }
    return status;
}


/*=============================================
=            Income Tax Calculator Products - 1 Expanded            =
=============================================*/

function firstProductCollapse() {
    $(".investment-products-wrapper-m").each(function (i) {
        if (i == 0) {
            $(".investment-products-acc-w", this).each(function (j) {
                if (j == 0) {
                    $(this).find(".investment-product-plans-w").css("display", "block");
                }
            })
        }
    });
}

/*=====  End of Income Tax Calculator Products - 1 Expanded  ======*/

/*=============================================
=            Read More / Read Less - Show/Hide            =
=============================================*/

function readMoreLessIn() {
    $(".income-tax-how-desc-pts-w").each(function () {
        if ($(this).find(".income-tax-how-desc-pts-li").length > 2) {
            $(this).find(".income-tax-how-desc-pts-li").slice(2).hide();
            $(".income-tax-how-wrapper-m").append('<span class="income-tax-how-read-m income-tax-how-read-more">Read More<span class="income-tax-how-dwn-arrow read-down-arrow"></span></span>');
            $(".income-tax-how-wrapper-m").append('<span class="income-tax-how-read-m income-tax-how-read-less">Read Less<span class="income-tax-how-dwn-arrow read-up-arrow"></span></span>');
        }
    });

}

/*=====  End of Read More / Read Less - Show/Hide  ======*/


/*=============================================
=            Calculate Button - Sticky            =
=============================================*/
function calcbuttonstick() {
   var parPosition = $('.bfs-income-tax-calc-parent').offset();
   var btnParentPosition = $(".investment-products-wrapper-m:nth-last-child(2)").offset();
//   var buttonsPosition = $(".scrollsett").offset();
   if($('.bfs-income-tax-calc-parent').length > 0){
    	if ($(window).scrollTop() > parPosition.top) {
//            $('.calc-tax-btn').addClass('calc-btn-stick');
    		$('.income-tax-cal-buttons').css("display","block");

        }
        if ($(window).scrollTop() > btnParentPosition.top) {
//            $('.calc-tax-btn').removeClass('calc-btn-stick');
            $('.income-tax-cal-buttons').css("display","none");

        }
    }
   
//   if ($(".income-tax-edit-done-w").length > 0) {
//       if ($(window).scrollTop() > buttonsPosition.top) {
//           if ($(".calc-tax-btn").hasClass("btn-hidden")) {
//               if ($('.income-tax-edit-done-w').css("display") == "none") {
//                   $('.income-tax-edit-done-w').show();
//               }
//           }
//       }
//       if ($(window).scrollTop() > btnParentPosition.top) {
//           if ($(".calc-tax-btn").hasClass("btn-hidden")) {
//               if ($('.income-tax-edit-done-w').css("display") == "block") {
//                   $('.income-tax-edit-done-w').hide();
//               }
//           }
//
//       }
//   }
}

/*=====  End of Calculate Button - Sticky  ======*/
function calcdockstick() {
    var annualDockTop = $(".bfs-income-tax-calulator").parent().offset();
    var topHeader = $(".bfs-header-wrap").outerHeight();

    if(annualDockTop != undefined && topHeader != undefined){
    	if ($(window).scrollTop() >= annualDockTop.top) {
            $(".summary-main-wrapper").css({ "top": topHeader + "px" });
            $(".summary-main-wrapper").addClass("incomedockfixed");
        }
        else {
            $(".summary-main-wrapper").removeClass("incomedockfixed");
        }
    }   
}

/* ===== End of Calculate Button - Sticky ====== */

$(document).ready(function () {

    try {
        var eachInput = document.querySelectorAll("input[type='tel']");
        eachInput.forEach(function (currentValue, currentIndex, listObj) {
            eachInput[currentIndex].addEventListener('keyup', function (e) {
                if (e.keyCode == 13 || e.keyCode == 9) {
                    if (window.winWidth < 1025) {
                        if (currentIndex < eachInput.length - 1) {
                            $("#" + eachInput[currentIndex + 1].getAttribute("id")).focus();
                        }
                    }
                }
            })
        })
    } catch (e) {
        console.log(e);
    }


    try{
    	document.querySelector(".hidedoc").style.display = "none";
    }
    catch(err){
    	console.log(err);
    }
    
    $(window).scroll(function () {
        if ($(window).innerWidth() < 767) {
            calcbuttonstick();
        }
    });
    firstProductCollapse();

    readMoreLessIn();

    annualIncomeFocus();

    $(".city-residence-tp").on("click", function () {
        $(".city-residence-wrapper-m").toggleClass("city-residence-visible")
    })


    $("#calcnextbtn").on("click", function () {
        var checkspecchar = document.querySelector("#checkspecchar");
        if (checkspecchar.style.display == "block") {
            document.querySelector("#checkspecchar").style.display = "none";
        }
        taxObj = {};
        document.querySelector(".label-income-tax-form-msg").style.display = "none";
        var annualIncomeAmt = $("#annualincomecalc").val();
        var sum = 0;
        var checkNum = Number(annualIncomeAmt);
        while (checkNum > 0) {
            var rem = checkNum % 10;
            sum += rem;
            checkNum = checkNum / 10;
        }
        if (sum == 0) {
            document.querySelector("#nonzero").style.display = "block";
        } else {
            if (annualIncomeAmt.length > 0) {
            	var divforscroll=$(this).data("scrolldiv");
                $("#incometaxcalc").removeClass("secHidden")
                $("#incometaxnext").addClass("secHidden");
            	goToByScroll(divforscroll);
                $(".inc-vl-input-text").text(Number(annualIncomeAmt).toLocaleString());
                document.querySelector(".age-vl").innerHTML = document.querySelector("input[name='urage']:checked").getAttribute("data-value");
                taxObj.annualIncomeAmt = annualIncomeAmt.toLocaleString();
                taxObj.financialYear = $("input[name='financialyear']:checked").val();
                taxObj.age = $("input[name='urage']:checked").attr('data-value');
                taxObj.gender = $("input[name='incgender']:checked").val();
                taxObj.cityofresi = $("input[name='cityofresidence']:checked").val();
            }
        }
        $("#incometax-investment").focus();
    });
    if (document.getElementById('calculatetax')) {
        document.getElementById('calculatetax').addEventListener("click", function () {
            if (checkIncomeTaxValidation() === false) {
                var formData = {};
                formData.applicationId = "";
                formData.age = Number(document.querySelector("input[name='urage']:checked").value);
                formData.gender = document.querySelector("input[name='incgender']:checked").value;
                formData.cityOfResidence = document.querySelector("input[name='cityofresidence']:checked").value;
                formData.annualIncome = Number(document.getElementById("annualincomecalc").value);
                formData.eightyC = document.getElementById("incometax-investment").value || 0;
                formData.eightyCCD = document.getElementById("incometax-npsinvestment").value || 0;
                formData.eightyDhealthInsurancePremium = document.getElementById("incometax-helthinspre").value || 0;
                formData.thriteenAHRA = document.getElementById("incometax-houserent").value || 0;
                formData.twentyFourInterestHomeLoan = document.getElementById("incometax-inthomeloan").value || 0;
                formData.eightyEintrestEductionLoan = document.getElementById("incometax-inteduloan").value || 0;
                formData.eightyTTAintrestSavingAccount = document.getElementById("incometax-intsaveacc").value || 0;
                formData.eightyTTBintrestNPS = document.getElementById("incometax-intcitizendep").value || 0;
                formData.financialYear = document.querySelector("input[name='financialyear']:checked").value;
                var sendData = formData;
                
                callIncomeTax(AppConstants.API_SELECTOR.INCOMETAX_CALCULATOR.name,sendData,this);
                
                var allRecommendation=document.querySelectorAll(".additional-label-w");
                for(var i=0;i<allRecommendation.length;i++){
                var index=document.querySelectorAll(".additional-label-w")[i].getAttribute("data-inscode");
                    sortedRecommendation[index]=allRecommendation[i];
                    if(sortedRecommendation[index].classList.contains("additional-label-w-active")){
                    	sortedRecommendation[index].classList.remove("additional-label-w-active");
                    }
                }
            }
        })
    }
    /*=============================================
    =            Income Tax Calculator Products Accordion            =
    =============================================*/
    $(".investment-product-head").on("click", function () {

        if (!$(this).next(".investment-product-plans-w").hasClass("invest-products-show")) {
            $(this).next(".investment-product-plans-w").addClass("invest-products-show");

            $(this).next(".investment-product-plans-w").slideDown();
            $(this).find(".acc-arrow-og").addClass("acc-arrow-og-rotate");
        } else {
            $(this).next(".investment-product-plans-w").removeClass("invest-products-show");

            $(this).next(".investment-product-plans-w").slideUp();
            $(this).find(".acc-arrow-og").removeClass("acc-arrow-og-rotate");
        }
    });


    /*=====  End of Income Tax Calculator Products Accordion  ======*/


    /*=============================================
    =            Read More / Read Less Interaction            =
    =============================================*/


    $(".income-tax-how-read-more").on("click", function () {
        $(this).parents(".income-tax-how-wrapper-m").find(".income-tax-how-desc-pts-li").show();
        $(this).hide();
        $(this).parents(".income-tax-how-wrapper-m").find(".income-tax-how-read-less").css("display", "block");
    });

    $(".income-tax-how-read-less").on("click", function () {
        $(this).parents(".income-tax-how-wrapper-m").find(".income-tax-how-desc-pts-li").slice(2).hide();
        $(this).hide();
        $(this).parents(".income-tax-how-wrapper-m").find(".income-tax-how-read-more").css("display", "block");
    });
    if(document.querySelector("#income-edit-btn")){
    $("#income-edit-btn").on("click", function() {
        $(".investment-product-input").prop("disabled", false);
        $(".calc-tax-btn-parent").show();
        $(".additional-label-w").removeClass("additional-label-w-active");
        $(".summary-main-wrapper").addClass("secHidden");
        $(".income-tax-edit-done-w").hide();
        $("#calculatetax").show();
        var divToScroll = $(this).data("scroll");
        goToByScroll(divToScroll);
    });
    }
    if(document.querySelector(".input-edit-btn")){
    	document.querySelector(".input-edit-btn").addEventListener("click", function () {
            document.querySelector("#incometaxcalc").classList.add("secHidden");
            document.querySelector("#incometaxnext").classList.remove("secHidden");
            var divforscroll=$(this).data("scrolldiv");
        	goToByScroll(divforscroll);
            document.querySelector(".hidedoc").style.display = "none";
            $("#annualincomecalc").focus();
        })
    }
    
    /*=====  End of Read More Interaction  ======*/
})

