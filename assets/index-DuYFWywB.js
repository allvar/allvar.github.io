function g0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Pu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tu={exports:{}},Fo={},ju={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cr=Symbol.for("react.element"),w0=Symbol.for("react.portal"),S0=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),C0=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),E0=Symbol.for("react.context"),_0=Symbol.for("react.forward_ref"),N0=Symbol.for("react.suspense"),z0=Symbol.for("react.memo"),L0=Symbol.for("react.lazy"),ra=Symbol.iterator;function P0(e){return e===null||typeof e!="object"?null:(e=ra&&e[ra]||e["@@iterator"],typeof e=="function"?e:null)}var Iu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mu=Object.assign,Ou={};function _n(e,t,n){this.props=e,this.context=t,this.refs=Ou,this.updater=n||Iu}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ru(){}Ru.prototype=_n.prototype;function Zi(e,t,n){this.props=e,this.context=t,this.refs=Ou,this.updater=n||Iu}var Ji=Zi.prototype=new Ru;Ji.constructor=Zi;Mu(Ji,_n.prototype);Ji.isPureReactComponent=!0;var oa=Array.isArray,$u=Object.prototype.hasOwnProperty,qi={current:null},Fu={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)$u.call(t,r)&&!Fu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Cr,type:e,key:l,ref:i,props:o,_owner:qi.current}}function T0(e,t){return{$$typeof:Cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cr}function j0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var la=/\/+/g;function _l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?j0(""+e.key):t.toString(36)}function Zr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Cr:case w0:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+_l(i,0):r,oa(o)?(n="",e!=null&&(n=e.replace(la,"$&/")+"/"),Zr(o,t,n,"",function(c){return c})):o!=null&&(bi(o)&&(o=T0(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(la,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",oa(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+_l(l,s);i+=Zr(l,t,n,a,o)}else if(a=P0(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+_l(l,s++),i+=Zr(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Tr(e,t,n){if(e==null)return e;var r=[],o=0;return Zr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function I0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Jr={transition:null},M0={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Jr,ReactCurrentOwner:qi};function Au(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=_n;O.Fragment=S0;O.Profiler=C0;O.PureComponent=Zi;O.StrictMode=x0;O.Suspense=N0;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;O.act=Au;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=qi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)$u.call(t,a)&&!Fu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Cr,type:e.type,key:o,ref:l,props:r,_owner:i}};O.createContext=function(e){return e={$$typeof:E0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:k0,_context:e},e.Consumer=e};O.createElement=Du;O.createFactory=function(e){var t=Du.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:_0,render:e}};O.isValidElement=bi;O.lazy=function(e){return{$$typeof:L0,_payload:{_status:-1,_result:e},_init:I0}};O.memo=function(e,t){return{$$typeof:z0,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Jr.transition;Jr.transition={};try{e()}finally{Jr.transition=t}};O.unstable_act=Au;O.useCallback=function(e,t){return ge.current.useCallback(e,t)};O.useContext=function(e){return ge.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};O.useEffect=function(e,t){return ge.current.useEffect(e,t)};O.useId=function(){return ge.current.useId()};O.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ge.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};O.useRef=function(e){return ge.current.useRef(e)};O.useState=function(e){return ge.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ge.current.useTransition()};O.version="18.3.1";ju.exports=O;var T=ju.exports;const Ye=Pu(T),ia=g0({__proto__:null,default:Ye},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=T,R0=Symbol.for("react.element"),$0=Symbol.for("react.fragment"),F0=Object.prototype.hasOwnProperty,D0=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A0={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)F0.call(t,r)&&!A0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:R0,type:e,key:l,ref:i,props:o,_owner:D0.current}}Fo.Fragment=$0;Fo.jsx=Bu;Fo.jsxs=Bu;Tu.exports=Fo;var g=Tu.exports,Uu={exports:{}},Ie={},Vu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,j){var M=z.length;z.push(j);e:for(;0<M;){var Z=M-1>>>1,ne=z[Z];if(0<o(ne,j))z[Z]=j,z[M]=ne,M=Z;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var j=z[0],M=z.pop();if(M!==j){z[0]=M;e:for(var Z=0,ne=z.length,Lr=ne>>>1;Z<Lr;){var Ot=2*(Z+1)-1,El=z[Ot],Rt=Ot+1,Pr=z[Rt];if(0>o(El,M))Rt<ne&&0>o(Pr,El)?(z[Z]=Pr,z[Rt]=M,Z=Rt):(z[Z]=El,z[Ot]=M,Z=Ot);else if(Rt<ne&&0>o(Pr,M))z[Z]=Pr,z[Rt]=M,Z=Rt;else break e}}return j}function o(z,j){var M=z.sortIndex-j.sortIndex;return M!==0?M:z.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],v=1,m=null,h=3,S=!1,w=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(z){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=z)r(c),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(c)}}function p(z){if(y=!1,d(z),!w)if(n(a)!==null)w=!0,Cl(x);else{var j=n(c);j!==null&&kl(p,j.startTime-z)}}function x(z,j){w=!1,y&&(y=!1,f(L),L=-1),S=!0;var M=h;try{for(d(j),m=n(a);m!==null&&(!(m.expirationTime>j)||z&&!Ne());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,h=m.priorityLevel;var ne=Z(m.expirationTime<=j);j=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(a)&&r(a),d(j)}else r(a);m=n(a)}if(m!==null)var Lr=!0;else{var Ot=n(c);Ot!==null&&kl(p,Ot.startTime-j),Lr=!1}return Lr}finally{m=null,h=M,S=!1}}var _=!1,k=null,L=-1,D=5,I=-1;function Ne(){return!(e.unstable_now()-I<D)}function Pn(){if(k!==null){var z=e.unstable_now();I=z;var j=!0;try{j=k(!0,z)}finally{j?Tn():(_=!1,k=null)}}else _=!1}var Tn;if(typeof u=="function")Tn=function(){u(Pn)};else if(typeof MessageChannel<"u"){var na=new MessageChannel,y0=na.port2;na.port1.onmessage=Pn,Tn=function(){y0.postMessage(null)}}else Tn=function(){P(Pn,0)};function Cl(z){k=z,_||(_=!0,Tn())}function kl(z,j){L=P(function(){z(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,Cl(x))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var M=h;h=j;try{return z()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var M=h;h=z;try{return j()}finally{h=M}},e.unstable_scheduleCallback=function(z,j,M){var Z=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Z+M:Z):M=Z,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=M+ne,z={id:v++,callback:j,priorityLevel:z,startTime:M,expirationTime:ne,sortIndex:-1},M>Z?(z.sortIndex=M,t(c,z),n(a)===null&&z===n(c)&&(y?(f(L),L=-1):y=!0,kl(p,M-Z))):(z.sortIndex=ne,t(a,z),w||S||(w=!0,Cl(x))),z},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(z){var j=h;return function(){var M=h;h=j;try{return z.apply(this,arguments)}finally{h=M}}}})(Wu);Vu.exports=Wu;var B0=Vu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=T,je=B0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hu=new Set,tr={};function Kt(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(tr[e]=t,e=0;e<t.length;e++)Hu.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,V0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sa={},aa={};function W0(e){return bl.call(aa,e)?!0:bl.call(sa,e)?!1:V0.test(e)?aa[e]=!0:(sa[e]=!0,!1)}function H0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y0(e,t,n,r){if(t===null||typeof t>"u"||H0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var es=/[\-:]([a-z])/g;function ts(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(es,ts);ce[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(es,ts);ce[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(es,ts);ce[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function ns(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y0(t,n,o,r)&&(n=null),r||o===null?W0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),rs=Symbol.for("react.strict_mode"),ei=Symbol.for("react.profiler"),Yu=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),os=Symbol.for("react.forward_ref"),ti=Symbol.for("react.suspense"),ni=Symbol.for("react.suspense_list"),ls=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Xu=Symbol.for("react.offscreen"),ua=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Nl;function Vn(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var zl=!1;function Ll(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vn(e):""}function Q0(e){switch(e.tag){case 5:return Vn(e.type);case 16:return Vn("Lazy");case 13:return Vn("Suspense");case 19:return Vn("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Jt:return"Portal";case ei:return"Profiler";case rs:return"StrictMode";case ti:return"Suspense";case ni:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Yu:return(e._context.displayName||"Context")+".Provider";case os:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ls:return t=e.displayName||null,t!==null?t:ri(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return ri(e(t))}catch{}}return null}function X0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ri(t);case 8:return t===rs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function K0(e){var t=Ku(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=K0(e))}function Gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ku(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oi(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ca(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zu(e,t){t=t.checked,t!=null&&ns(e,"checked",t,!1)}function li(e,t){Zu(e,t);var n=Pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ii(e,t.type,n):t.hasOwnProperty("defaultValue")&&ii(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ii(e,t,n){(t!=="number"||fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wn=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function si(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Wn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pt(n)}}function Ju(e,t){var n=Pt(t.value),r=Pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ai(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,bu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G0=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){G0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function ec(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function tc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ec(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Z0=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(e,t){if(t){if(Z0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var di=null,fn=null,dn=null;function ma(e){if(e=_r(e)){if(typeof di!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Vo(t),di(e.stateNode,e.type,t))}}function nc(e){fn?dn?dn.push(e):dn=[e]:fn=e}function rc(){if(fn){var e=fn,t=dn;if(dn=fn=null,ma(e),t)for(e=0;e<t.length;e++)ma(t[e])}}function oc(e,t){return e(t)}function lc(){}var Pl=!1;function ic(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return oc(e,t,n)}finally{Pl=!1,(fn!==null||dn!==null)&&(lc(),rc())}}function rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var pi=!1;if(ut)try{var In={};Object.defineProperty(In,"passive",{get:function(){pi=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{pi=!1}function J0(e,t,n,r,o,l,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var Xn=!1,po=null,mo=!1,mi=null,q0={onError:function(e){Xn=!0,po=e}};function b0(e,t,n,r,o,l,i,s,a){Xn=!1,po=null,J0.apply(q0,arguments)}function ed(e,t,n,r,o,l,i,s,a){if(b0.apply(this,arguments),Xn){if(Xn){var c=po;Xn=!1,po=null}else throw Error(C(198));mo||(mo=!0,mi=c)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ha(e){if(Gt(e)!==e)throw Error(C(188))}function td(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ha(o),e;if(l===r)return ha(o),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function ac(e){return e=td(e),e!==null?uc(e):null}function uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uc(e);if(t!==null)return t;e=e.sibling}return null}var cc=je.unstable_scheduleCallback,va=je.unstable_cancelCallback,nd=je.unstable_shouldYield,rd=je.unstable_requestPaint,J=je.unstable_now,od=je.unstable_getCurrentPriorityLevel,ss=je.unstable_ImmediatePriority,fc=je.unstable_UserBlockingPriority,ho=je.unstable_NormalPriority,ld=je.unstable_LowPriority,dc=je.unstable_IdlePriority,Do=null,tt=null;function id(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Do,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:ud,sd=Math.log,ad=Math.LN2;function ud(e){return e>>>=0,e===0?32:31-(sd(e)/ad|0)|0}var Or=64,Rr=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Hn(s):(l&=i,l!==0&&(r=Hn(l)))}else i=n&~o,i!==0?r=Hn(i):l!==0&&(r=Hn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),o=1<<n,r|=e[n],t&=~o;return r}function cd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Xe(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=cd(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pc(){var e=Or;return Or<<=1,!(Or&4194240)&&(Or=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function dd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function as(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var A=0;function mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hc,us,vc,yc,gc,vi=!1,$r=[],xt=null,Ct=null,kt=null,or=new Map,lr=new Map,yt=[],pd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ya(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function Mn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=_r(t),t!==null&&us(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function md(e,t,n,r,o){switch(t){case"focusin":return xt=Mn(xt,e,t,n,r,o),!0;case"dragenter":return Ct=Mn(Ct,e,t,n,r,o),!0;case"mouseover":return kt=Mn(kt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return or.set(l,Mn(or.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,lr.set(l,Mn(lr.get(l)||null,e,t,n,r,o)),!0}return!1}function wc(e){var t=Dt(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=sc(n),t!==null){e.blockedOn=t,gc(e.priority,function(){vc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fi=r,n.target.dispatchEvent(r),fi=null}else return t=_r(n),t!==null&&us(t),e.blockedOn=n,!1;t.shift()}return!0}function ga(e,t,n){qr(e)&&n.delete(t)}function hd(){vi=!1,xt!==null&&qr(xt)&&(xt=null),Ct!==null&&qr(Ct)&&(Ct=null),kt!==null&&qr(kt)&&(kt=null),or.forEach(ga),lr.forEach(ga)}function On(e,t){e.blockedOn===t&&(e.blockedOn=null,vi||(vi=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,hd)))}function ir(e){function t(o){return On(o,e)}if(0<$r.length){On($r[0],e);for(var n=1;n<$r.length;n++){var r=$r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xt!==null&&On(xt,e),Ct!==null&&On(Ct,e),kt!==null&&On(kt,e),or.forEach(t),lr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)wc(n),n.blockedOn===null&&yt.shift()}var pn=pt.ReactCurrentBatchConfig,yo=!0;function vd(e,t,n,r){var o=A,l=pn.transition;pn.transition=null;try{A=1,cs(e,t,n,r)}finally{A=o,pn.transition=l}}function yd(e,t,n,r){var o=A,l=pn.transition;pn.transition=null;try{A=4,cs(e,t,n,r)}finally{A=o,pn.transition=l}}function cs(e,t,n,r){if(yo){var o=yi(e,t,n,r);if(o===null)Bl(e,t,r,go,n),ya(e,r);else if(md(o,e,t,n,r))r.stopPropagation();else if(ya(e,r),t&4&&-1<pd.indexOf(e)){for(;o!==null;){var l=_r(o);if(l!==null&&hc(l),l=yi(e,t,n,r),l===null&&Bl(e,t,r,go,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Bl(e,t,r,null,n)}}var go=null;function yi(e,t,n,r){if(go=null,e=is(r),e=Dt(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return go=e,null}function Sc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(od()){case ss:return 1;case fc:return 4;case ho:case ld:return 16;case dc:return 536870912;default:return 16}default:return 16}}var wt=null,fs=null,br=null;function xc(){if(br)return br;var e,t=fs,n=t.length,r,o="value"in wt?wt.value:wt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return br=o.slice(e,1<r?1-r:void 0)}function eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function wa(){return!1}function Me(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Fr:wa,this.isPropagationStopped=wa,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ds=Me(Nn),Er=K({},Nn,{view:0,detail:0}),gd=Me(Er),jl,Il,Rn,Ao=K({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(jl=e.screenX-Rn.screenX,Il=e.screenY-Rn.screenY):Il=jl=0,Rn=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),Sa=Me(Ao),wd=K({},Ao,{dataTransfer:0}),Sd=Me(wd),xd=K({},Er,{relatedTarget:0}),Ml=Me(xd),Cd=K({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=Me(Cd),Ed=K({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_d=Me(Ed),Nd=K({},Nn,{data:0}),xa=Me(Nd),zd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ld={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Td(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pd[e])?!!t[e]:!1}function ps(){return Td}var jd=K({},Er,{key:function(e){if(e.key){var t=zd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ld[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Id=Me(jd),Md=K({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ca=Me(Md),Od=K({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),Rd=Me(Od),$d=K({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fd=Me($d),Dd=K({},Ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ad=Me(Dd),Bd=[9,13,27,32],ms=ut&&"CompositionEvent"in window,Kn=null;ut&&"documentMode"in document&&(Kn=document.documentMode);var Ud=ut&&"TextEvent"in window&&!Kn,Cc=ut&&(!ms||Kn&&8<Kn&&11>=Kn),ka=" ",Ea=!1;function kc(e,t){switch(e){case"keyup":return Bd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function Vd(e,t){switch(e){case"compositionend":return Ec(t);case"keypress":return t.which!==32?null:(Ea=!0,ka);case"textInput":return e=t.data,e===ka&&Ea?null:e;default:return null}}function Wd(e,t){if(bt)return e==="compositionend"||!ms&&kc(e,t)?(e=xc(),br=fs=wt=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hd[e.type]:t==="textarea"}function _c(e,t,n,r){nc(r),t=wo(t,"onChange"),0<t.length&&(n=new ds("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,sr=null;function Yd(e){$c(e,0)}function Bo(e){var t=nn(e);if(Gu(t))return e}function Qd(e,t){if(e==="change")return t}var Nc=!1;if(ut){var Ol;if(ut){var Rl="oninput"in document;if(!Rl){var Na=document.createElement("div");Na.setAttribute("oninput","return;"),Rl=typeof Na.oninput=="function"}Ol=Rl}else Ol=!1;Nc=Ol&&(!document.documentMode||9<document.documentMode)}function za(){Gn&&(Gn.detachEvent("onpropertychange",zc),sr=Gn=null)}function zc(e){if(e.propertyName==="value"&&Bo(sr)){var t=[];_c(t,sr,e,is(e)),ic(Yd,t)}}function Xd(e,t,n){e==="focusin"?(za(),Gn=t,sr=n,Gn.attachEvent("onpropertychange",zc)):e==="focusout"&&za()}function Kd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bo(sr)}function Gd(e,t){if(e==="click")return Bo(t)}function Zd(e,t){if(e==="input"||e==="change")return Bo(t)}function Jd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:Jd;function ar(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!bl.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function La(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pa(e,t){var n=La(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=La(n)}}function Lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pc(){for(var e=window,t=fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fo(e.document)}return t}function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qd(e){var t=Pc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lc(n.ownerDocument.documentElement,n)){if(r!==null&&hs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Pa(n,l);var i=Pa(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bd=ut&&"documentMode"in document&&11>=document.documentMode,en=null,gi=null,Zn=null,wi=!1;function Ta(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wi||en==null||en!==fo(r)||(r=en,"selectionStart"in r&&hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&ar(Zn,r)||(Zn=r,r=wo(gi,"onSelect"),0<r.length&&(t=new ds("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=en)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tn={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},$l={},Tc={};ut&&(Tc=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Uo(e){if($l[e])return $l[e];if(!tn[e])return e;var t=tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tc)return $l[e]=t[n];return e}var jc=Uo("animationend"),Ic=Uo("animationiteration"),Mc=Uo("animationstart"),Oc=Uo("transitionend"),Rc=new Map,ja="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){Rc.set(e,t),Kt(t,[e])}for(var Fl=0;Fl<ja.length;Fl++){var Dl=ja[Fl],e1=Dl.toLowerCase(),t1=Dl[0].toUpperCase()+Dl.slice(1);jt(e1,"on"+t1)}jt(jc,"onAnimationEnd");jt(Ic,"onAnimationIteration");jt(Mc,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(Oc,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function Ia(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ed(r,t,void 0,e),e.currentTarget=null}function $c(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;Ia(o,s,c),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;Ia(o,s,c),l=a}}}if(mo)throw e=mi,mo=!1,mi=null,e}function W(e,t){var n=t[Ei];n===void 0&&(n=t[Ei]=new Set);var r=e+"__bubble";n.has(r)||(Fc(t,e,2,!1),n.add(r))}function Al(e,t,n){var r=0;t&&(r|=4),Fc(n,e,r,t)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Ar]){e[Ar]=!0,Hu.forEach(function(n){n!=="selectionchange"&&(n1.has(n)||Al(n,!1,e),Al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ar]||(t[Ar]=!0,Al("selectionchange",!1,t))}}function Fc(e,t,n,r){switch(Sc(t)){case 1:var o=vd;break;case 4:o=yd;break;default:o=cs}n=o.bind(null,t,n,e),o=void 0,!pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Bl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Dt(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}ic(function(){var c=l,v=is(n),m=[];e:{var h=Rc.get(e);if(h!==void 0){var S=ds,w=e;switch(e){case"keypress":if(eo(n)===0)break e;case"keydown":case"keyup":S=Id;break;case"focusin":w="focus",S=Ml;break;case"focusout":w="blur",S=Ml;break;case"beforeblur":case"afterblur":S=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Rd;break;case jc:case Ic:case Mc:S=kd;break;case Oc:S=Fd;break;case"scroll":S=gd;break;case"wheel":S=Ad;break;case"copy":case"cut":case"paste":S=_d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Ca}var y=(t&4)!==0,P=!y&&e==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var u=c,d;u!==null;){d=u;var p=d.stateNode;if(d.tag===5&&p!==null&&(d=p,f!==null&&(p=rr(u,f),p!=null&&y.push(cr(u,p,d)))),P)break;u=u.return}0<y.length&&(h=new S(h,w,null,n,v),m.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",h&&n!==fi&&(w=n.relatedTarget||n.fromElement)&&(Dt(w)||w[ct]))break e;if((S||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=c,w=w?Dt(w):null,w!==null&&(P=Gt(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(y=Sa,p="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ca,p="onPointerLeave",f="onPointerEnter",u="pointer"),P=S==null?h:nn(S),d=w==null?h:nn(w),h=new y(p,u+"leave",S,n,v),h.target=P,h.relatedTarget=d,p=null,Dt(v)===c&&(y=new y(f,u+"enter",w,n,v),y.target=d,y.relatedTarget=P,p=y),P=p,S&&w)t:{for(y=S,f=w,u=0,d=y;d;d=Zt(d))u++;for(d=0,p=f;p;p=Zt(p))d++;for(;0<u-d;)y=Zt(y),u--;for(;0<d-u;)f=Zt(f),d--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=Zt(y),f=Zt(f)}y=null}else y=null;S!==null&&Ma(m,h,S,y,!1),w!==null&&P!==null&&Ma(m,P,w,y,!0)}}e:{if(h=c?nn(c):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var x=Qd;else if(_a(h))if(Nc)x=Zd;else{x=Kd;var _=Xd}else(S=h.nodeName)&&S.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=Gd);if(x&&(x=x(e,c))){_c(m,x,n,v);break e}_&&_(e,h,c),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&ii(h,"number",h.value)}switch(_=c?nn(c):window,e){case"focusin":(_a(_)||_.contentEditable==="true")&&(en=_,gi=c,Zn=null);break;case"focusout":Zn=gi=en=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,Ta(m,n,v);break;case"selectionchange":if(bd)break;case"keydown":case"keyup":Ta(m,n,v)}var k;if(ms)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else bt?kc(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Cc&&n.locale!=="ko"&&(bt||L!=="onCompositionStart"?L==="onCompositionEnd"&&bt&&(k=xc()):(wt=v,fs="value"in wt?wt.value:wt.textContent,bt=!0)),_=wo(c,L),0<_.length&&(L=new xa(L,e,null,n,v),m.push({event:L,listeners:_}),k?L.data=k:(k=Ec(n),k!==null&&(L.data=k)))),(k=Ud?Vd(e,n):Wd(e,n))&&(c=wo(c,"onBeforeInput"),0<c.length&&(v=new xa("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:c}),v.data=k))}$c(m,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=rr(e,n),l!=null&&r.unshift(cr(e,l,o)),l=rr(e,t),l!=null&&r.push(cr(e,l,o))),e=e.return}return r}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ma(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=rr(n,l),a!=null&&i.unshift(cr(n,a,s))):o||(a=rr(n,l),a!=null&&i.push(cr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var r1=/\r\n?/g,o1=/\u0000|\uFFFD/g;function Oa(e){return(typeof e=="string"?e:""+e).replace(r1,`
`).replace(o1,"")}function Br(e,t,n){if(t=Oa(t),Oa(e)!==t&&n)throw Error(C(425))}function So(){}var Si=null,xi=null;function Ci(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ki=typeof setTimeout=="function"?setTimeout:void 0,l1=typeof clearTimeout=="function"?clearTimeout:void 0,Ra=typeof Promise=="function"?Promise:void 0,i1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ra<"u"?function(e){return Ra.resolve(null).then(e).catch(s1)}:ki;function s1(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ir(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zn=Math.random().toString(36).slice(2),et="__reactFiber$"+zn,fr="__reactProps$"+zn,ct="__reactContainer$"+zn,Ei="__reactEvents$"+zn,a1="__reactListeners$"+zn,u1="__reactHandles$"+zn;function Dt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$a(e);e!==null;){if(n=e[et])return n;e=$a(e)}return t}e=n,n=e.parentNode}return null}function _r(e){return e=e[et]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Vo(e){return e[fr]||null}var _i=[],rn=-1;function It(e){return{current:e}}function H(e){0>rn||(e.current=_i[rn],_i[rn]=null,rn--)}function V(e,t){rn++,_i[rn]=e.current,e.current=t}var Tt={},he=It(Tt),Ce=It(!1),Wt=Tt;function gn(e,t){var n=e.type.contextTypes;if(!n)return Tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ke(e){return e=e.childContextTypes,e!=null}function xo(){H(Ce),H(he)}function Fa(e,t,n){if(he.current!==Tt)throw Error(C(168));V(he,t),V(Ce,n)}function Dc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,X0(e)||"Unknown",o));return K({},n,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Wt=he.current,V(he,e),V(Ce,Ce.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Dc(e,t,Wt),r.__reactInternalMemoizedMergedChildContext=e,H(Ce),H(he),V(he,e)):H(Ce),V(Ce,n)}var lt=null,Wo=!1,Vl=!1;function Ac(e){lt===null?lt=[e]:lt.push(e)}function c1(e){Wo=!0,Ac(e)}function Mt(){if(!Vl&&lt!==null){Vl=!0;var e=0,t=A;try{var n=lt;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Wo=!1}catch(o){throw lt!==null&&(lt=lt.slice(e+1)),cc(ss,Mt),o}finally{A=t,Vl=!1}}return null}var on=[],ln=0,ko=null,Eo=0,Re=[],$e=0,Ht=null,it=1,st="";function $t(e,t){on[ln++]=Eo,on[ln++]=ko,ko=e,Eo=t}function Bc(e,t,n){Re[$e++]=it,Re[$e++]=st,Re[$e++]=Ht,Ht=e;var r=it;e=st;var o=32-Xe(r)-1;r&=~(1<<o),n+=1;var l=32-Xe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,it=1<<32-Xe(t)+o|n<<o|r,st=l+e}else it=1<<l|n<<o|r,st=e}function vs(e){e.return!==null&&($t(e,1),Bc(e,1,0))}function ys(e){for(;e===ko;)ko=on[--ln],on[ln]=null,Eo=on[--ln],on[ln]=null;for(;e===Ht;)Ht=Re[--$e],Re[$e]=null,st=Re[--$e],Re[$e]=null,it=Re[--$e],Re[$e]=null}var Pe=null,Le=null,Y=!1,Qe=null;function Uc(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Le=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:it,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Le=null,!0):!1;default:return!1}}function Ni(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zi(e){if(Y){var t=Le;if(t){var n=t;if(!Aa(e,t)){if(Ni(e))throw Error(C(418));t=Et(n.nextSibling);var r=Pe;t&&Aa(e,t)?Uc(r,n):(e.flags=e.flags&-4097|2,Y=!1,Pe=e)}}else{if(Ni(e))throw Error(C(418));e.flags=e.flags&-4097|2,Y=!1,Pe=e}}}function Ba(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Ur(e){if(e!==Pe)return!1;if(!Y)return Ba(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ci(e.type,e.memoizedProps)),t&&(t=Le)){if(Ni(e))throw Vc(),Error(C(418));for(;t;)Uc(e,t),t=Et(t.nextSibling)}if(Ba(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Et(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Pe?Et(e.stateNode.nextSibling):null;return!0}function Vc(){for(var e=Le;e;)e=Et(e.nextSibling)}function wn(){Le=Pe=null,Y=!1}function gs(e){Qe===null?Qe=[e]:Qe.push(e)}var f1=pt.ReactCurrentBatchConfig;function $n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Vr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ua(e){var t=e._init;return t(e._payload)}function Wc(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Lt(f,u),f.index=0,f.sibling=null,f}function l(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,p){return u===null||u.tag!==6?(u=Gl(d,f.mode,p),u.return=f,u):(u=o(u,d),u.return=f,u)}function a(f,u,d,p){var x=d.type;return x===qt?v(f,u,d.props.children,p,d.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ht&&Ua(x)===u.type)?(p=o(u,d.props),p.ref=$n(f,u,d),p.return=f,p):(p=so(d.type,d.key,d.props,null,f.mode,p),p.ref=$n(f,u,d),p.return=f,p)}function c(f,u,d,p){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Zl(d,f.mode,p),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function v(f,u,d,p,x){return u===null||u.tag!==7?(u=Vt(d,f.mode,p,x),u.return=f,u):(u=o(u,d),u.return=f,u)}function m(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Gl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case jr:return d=so(u.type,u.key,u.props,null,f.mode,d),d.ref=$n(f,null,u),d.return=f,d;case Jt:return u=Zl(u,f.mode,d),u.return=f,u;case ht:var p=u._init;return m(f,p(u._payload),d)}if(Wn(u)||jn(u))return u=Vt(u,f.mode,d,null),u.return=f,u;Vr(f,u)}return null}function h(f,u,d,p){var x=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return x!==null?null:s(f,u,""+d,p);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case jr:return d.key===x?a(f,u,d,p):null;case Jt:return d.key===x?c(f,u,d,p):null;case ht:return x=d._init,h(f,u,x(d._payload),p)}if(Wn(d)||jn(d))return x!==null?null:v(f,u,d,p,null);Vr(f,d)}return null}function S(f,u,d,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return f=f.get(d)||null,s(u,f,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case jr:return f=f.get(p.key===null?d:p.key)||null,a(u,f,p,x);case Jt:return f=f.get(p.key===null?d:p.key)||null,c(u,f,p,x);case ht:var _=p._init;return S(f,u,d,_(p._payload),x)}if(Wn(p)||jn(p))return f=f.get(d)||null,v(u,f,p,x,null);Vr(u,p)}return null}function w(f,u,d,p){for(var x=null,_=null,k=u,L=u=0,D=null;k!==null&&L<d.length;L++){k.index>L?(D=k,k=null):D=k.sibling;var I=h(f,k,d[L],p);if(I===null){k===null&&(k=D);break}e&&k&&I.alternate===null&&t(f,k),u=l(I,u,L),_===null?x=I:_.sibling=I,_=I,k=D}if(L===d.length)return n(f,k),Y&&$t(f,L),x;if(k===null){for(;L<d.length;L++)k=m(f,d[L],p),k!==null&&(u=l(k,u,L),_===null?x=k:_.sibling=k,_=k);return Y&&$t(f,L),x}for(k=r(f,k);L<d.length;L++)D=S(k,f,L,d[L],p),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?L:D.key),u=l(D,u,L),_===null?x=D:_.sibling=D,_=D);return e&&k.forEach(function(Ne){return t(f,Ne)}),Y&&$t(f,L),x}function y(f,u,d,p){var x=jn(d);if(typeof x!="function")throw Error(C(150));if(d=x.call(d),d==null)throw Error(C(151));for(var _=x=null,k=u,L=u=0,D=null,I=d.next();k!==null&&!I.done;L++,I=d.next()){k.index>L?(D=k,k=null):D=k.sibling;var Ne=h(f,k,I.value,p);if(Ne===null){k===null&&(k=D);break}e&&k&&Ne.alternate===null&&t(f,k),u=l(Ne,u,L),_===null?x=Ne:_.sibling=Ne,_=Ne,k=D}if(I.done)return n(f,k),Y&&$t(f,L),x;if(k===null){for(;!I.done;L++,I=d.next())I=m(f,I.value,p),I!==null&&(u=l(I,u,L),_===null?x=I:_.sibling=I,_=I);return Y&&$t(f,L),x}for(k=r(f,k);!I.done;L++,I=d.next())I=S(k,f,L,I.value,p),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?L:I.key),u=l(I,u,L),_===null?x=I:_.sibling=I,_=I);return e&&k.forEach(function(Pn){return t(f,Pn)}),Y&&$t(f,L),x}function P(f,u,d,p){if(typeof d=="object"&&d!==null&&d.type===qt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case jr:e:{for(var x=d.key,_=u;_!==null;){if(_.key===x){if(x=d.type,x===qt){if(_.tag===7){n(f,_.sibling),u=o(_,d.props.children),u.return=f,f=u;break e}}else if(_.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ht&&Ua(x)===_.type){n(f,_.sibling),u=o(_,d.props),u.ref=$n(f,_,d),u.return=f,f=u;break e}n(f,_);break}else t(f,_);_=_.sibling}d.type===qt?(u=Vt(d.props.children,f.mode,p,d.key),u.return=f,f=u):(p=so(d.type,d.key,d.props,null,f.mode,p),p.ref=$n(f,u,d),p.return=f,f=p)}return i(f);case Jt:e:{for(_=d.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Zl(d,f.mode,p),u.return=f,f=u}return i(f);case ht:return _=d._init,P(f,u,_(d._payload),p)}if(Wn(d))return w(f,u,d,p);if(jn(d))return y(f,u,d,p);Vr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=Gl(d,f.mode,p),u.return=f,f=u),i(f)):n(f,u)}return P}var Sn=Wc(!0),Hc=Wc(!1),_o=It(null),No=null,sn=null,ws=null;function Ss(){ws=sn=No=null}function xs(e){var t=_o.current;H(_o),e._currentValue=t}function Li(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mn(e,t){No=e,ws=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(ws!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(No===null)throw Error(C(308));sn=e,No.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var At=null;function Cs(e){At===null?At=[e]:At.push(e)}function Yc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Cs(t)):(n.next=o.next,o.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ft(e,n)}return o=r.interleaved,o===null?(t.next=t,Cs(r)):(t.next=o.next,o.next=t),r.interleaved=t,ft(e,n)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,as(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zo(e,t,n,r){var o=e.updateQueue;vt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=c:s.next=c,v.lastBaseUpdate=a))}if(l!==null){var m=o.baseState;i=0,v=c=a=null,s=l;do{var h=s.lane,S=s.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,y=s;switch(h=t,S=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){m=w.call(S,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,h=typeof w=="function"?w.call(S,m,h):w,h==null)break e;m=K({},m,h);break e;case 2:vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else S={eventTime:S,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(c=v=S,a=m):v=v.next=S,i|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(v===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=v,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Qt|=i,e.lanes=i,e.memoizedState=m}}function Wa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Nr={},nt=It(Nr),dr=It(Nr),pr=It(Nr);function Bt(e){if(e===Nr)throw Error(C(174));return e}function Es(e,t){switch(V(pr,t),V(dr,e),V(nt,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ai(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ai(t,e)}H(nt),V(nt,t)}function xn(){H(nt),H(dr),H(pr)}function Xc(e){Bt(pr.current);var t=Bt(nt.current),n=ai(t,e.type);t!==n&&(V(dr,e),V(nt,n))}function _s(e){dr.current===e&&(H(nt),H(dr))}var Q=It(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function Ns(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var no=pt.ReactCurrentDispatcher,Hl=pt.ReactCurrentBatchConfig,Yt=0,X=null,ee=null,oe=null,Po=!1,Jn=!1,mr=0,d1=0;function fe(){throw Error(C(321))}function zs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Ls(e,t,n,r,o,l){if(Yt=l,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=e===null||e.memoizedState===null?v1:y1,e=n(r,o),Jn){l=0;do{if(Jn=!1,mr=0,25<=l)throw Error(C(301));l+=1,oe=ee=null,t.updateQueue=null,no.current=g1,e=n(r,o)}while(Jn)}if(no.current=To,t=ee!==null&&ee.next!==null,Yt=0,oe=ee=X=null,Po=!1,t)throw Error(C(300));return e}function Ps(){var e=mr!==0;return mr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Be(){if(ee===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=oe===null?X.memoizedState:oe.next;if(t!==null)oe=t,ee=e;else{if(e===null)throw Error(C(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function hr(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=Be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,c=l;do{var v=c.lane;if((Yt&v)===v)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,i=r):a=a.next=m,X.lanes|=v,Qt|=v}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=s,Ge(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,X.lanes|=l,Qt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=Be(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ge(l,t.memoizedState)||(xe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Kc(){}function Gc(e,t){var n=X,r=Be(),o=t(),l=!Ge(r.memoizedState,o);if(l&&(r.memoizedState=o,xe=!0),r=r.queue,Ts(qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,vr(9,Jc.bind(null,n,r,o,t),void 0,null),le===null)throw Error(C(349));Yt&30||Zc(n,t,o)}return o}function Zc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jc(e,t,n,r){t.value=n,t.getSnapshot=r,bc(t)&&ef(e)}function qc(e,t,n){return n(function(){bc(t)&&ef(e)})}function bc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function ef(e){var t=ft(e,1);t!==null&&Ke(t,e,1,-1)}function Ha(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=h1.bind(null,X,e),[t.memoizedState,e]}function vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tf(){return Be().memoizedState}function ro(e,t,n,r){var o=Je();X.flags|=e,o.memoizedState=vr(1|t,n,void 0,r===void 0?null:r)}function Ho(e,t,n,r){var o=Be();r=r===void 0?null:r;var l=void 0;if(ee!==null){var i=ee.memoizedState;if(l=i.destroy,r!==null&&zs(r,i.deps)){o.memoizedState=vr(t,n,l,r);return}}X.flags|=e,o.memoizedState=vr(1|t,n,l,r)}function Ya(e,t){return ro(8390656,8,e,t)}function Ts(e,t){return Ho(2048,8,e,t)}function nf(e,t){return Ho(4,2,e,t)}function rf(e,t){return Ho(4,4,e,t)}function of(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lf(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4,4,of.bind(null,t,e),n)}function js(){}function sf(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function af(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uf(e,t,n){return Yt&21?(Ge(n,t)||(n=pc(),X.lanes|=n,Qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function p1(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{A=n,Hl.transition=r}}function cf(){return Be().memoizedState}function m1(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ff(e))df(t,n);else if(n=Yc(e,t,n,r),n!==null){var o=ye();Ke(n,e,r,o),pf(n,t,r)}}function h1(e,t,n){var r=zt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ff(e))df(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,Ge(s,i)){var a=t.interleaved;a===null?(o.next=o,Cs(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Yc(e,t,o,r),n!==null&&(o=ye(),Ke(n,e,r,o),pf(n,t,r))}}function ff(e){var t=e.alternate;return e===X||t!==null&&t===X}function df(e,t){Jn=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,as(e,n)}}var To={readContext:Ae,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},v1={readContext:Ae,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ya,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ro(4194308,4,of.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return ro(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=m1.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Ha,useDebugValue:js,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Ha(!1),t=e[0];return e=p1.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=Je();if(Y){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),le===null)throw Error(C(349));Yt&30||Zc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ya(qc.bind(null,r,l,e),[e]),r.flags|=2048,vr(9,Jc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Je(),t=le.identifierPrefix;if(Y){var n=st,r=it;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=d1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},y1={readContext:Ae,useCallback:sf,useContext:Ae,useEffect:Ts,useImperativeHandle:lf,useInsertionEffect:nf,useLayoutEffect:rf,useMemo:af,useReducer:Yl,useRef:tf,useState:function(){return Yl(hr)},useDebugValue:js,useDeferredValue:function(e){var t=Be();return uf(t,ee.memoizedState,e)},useTransition:function(){var e=Yl(hr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Kc,useSyncExternalStore:Gc,useId:cf,unstable_isNewReconciler:!1},g1={readContext:Ae,useCallback:sf,useContext:Ae,useEffect:Ts,useImperativeHandle:lf,useInsertionEffect:nf,useLayoutEffect:rf,useMemo:af,useReducer:Ql,useRef:tf,useState:function(){return Ql(hr)},useDebugValue:js,useDeferredValue:function(e){var t=Be();return ee===null?t.memoizedState=e:uf(t,ee.memoizedState,e)},useTransition:function(){var e=Ql(hr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Kc,useSyncExternalStore:Gc,useId:cf,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=zt(e),l=at(r,o);l.payload=t,n!=null&&(l.callback=n),t=_t(e,l,o),t!==null&&(Ke(t,e,o,r),to(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=zt(e),l=at(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=_t(e,l,o),t!==null&&(Ke(t,e,o,r),to(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=zt(e),o=at(n,r);o.tag=2,t!=null&&(o.callback=t),t=_t(e,o,r),t!==null&&(Ke(t,e,r,n),to(t,e,r))}};function Qa(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(o,l):!0}function mf(e,t,n){var r=!1,o=Tt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ae(l):(o=ke(t)?Wt:he.current,r=t.contextTypes,l=(r=r!=null)?gn(e,o):Tt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Xa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function Ti(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ks(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ae(l):(l=ke(t)?Wt:he.current,o.context=gn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Pi(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yo.enqueueReplaceState(o,o.state,null),zo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Cn(e,t){try{var n="",r=t;do n+=Q0(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ji(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var w1=typeof WeakMap=="function"?WeakMap:Map;function hf(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Io||(Io=!0,Ui=r),ji(e,t)},n}function vf(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ji(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ji(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ka(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new w1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=M1.bind(null,e,t,n),t.then(e,e))}function Ga(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Za(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var S1=pt.ReactCurrentOwner,xe=!1;function ve(e,t,n,r){t.child=e===null?Hc(t,null,n,r):Sn(t,e.child,n,r)}function Ja(e,t,n,r,o){n=n.render;var l=t.ref;return mn(t,o),r=Ls(e,t,n,r,l,o),n=Ps(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(Y&&n&&vs(t),t.flags|=1,ve(e,t,r,o),t.child)}function qa(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!As(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,yf(e,t,l,r,o)):(e=so(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(i,r)&&e.ref===t.ref)return dt(e,t,o)}return t.flags|=1,e=Lt(l,r),e.ref=t.ref,e.return=t,t.child=e}function yf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ar(l,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,dt(e,t,o)}return Ii(e,t,n,r,o)}function gf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(un,ze),ze|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(un,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,V(un,ze),ze|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,V(un,ze),ze|=r;return ve(e,t,o,n),t.child}function wf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ii(e,t,n,r,o){var l=ke(n)?Wt:he.current;return l=gn(t,l),mn(t,o),n=Ls(e,t,n,r,l,o),r=Ps(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(Y&&r&&vs(t),t.flags|=1,ve(e,t,n,o),t.child)}function ba(e,t,n,r,o){if(ke(n)){var l=!0;Co(t)}else l=!1;if(mn(t,o),t.stateNode===null)oo(e,t),mf(t,n,r),Ti(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=ke(n)?Wt:he.current,c=gn(t,c));var v=n.getDerivedStateFromProps,m=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Xa(t,i,r,c),vt=!1;var h=t.memoizedState;i.state=h,zo(t,r,i,o),a=t.memoizedState,s!==r||h!==a||Ce.current||vt?(typeof v=="function"&&(Pi(t,n,v,r),a=t.memoizedState),(s=vt||Qa(t,n,s,r,h,a,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Qc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:We(t.type,s),i.props=c,m=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ae(a):(a=ke(n)?Wt:he.current,a=gn(t,a));var S=n.getDerivedStateFromProps;(v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||h!==a)&&Xa(t,i,r,a),vt=!1,h=t.memoizedState,i.state=h,zo(t,r,i,o);var w=t.memoizedState;s!==m||h!==w||Ce.current||vt?(typeof S=="function"&&(Pi(t,n,S,r),w=t.memoizedState),(c=vt||Qa(t,n,c,r,h,w,a)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Mi(e,t,n,r,l,o)}function Mi(e,t,n,r,o,l){wf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Da(t,n,!1),dt(e,t,l);r=t.stateNode,S1.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Sn(t,e.child,null,l),t.child=Sn(t,null,s,l)):ve(e,t,s,l),t.memoizedState=r.state,o&&Da(t,n,!0),t.child}function Sf(e){var t=e.stateNode;t.pendingContext?Fa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fa(e,t.context,!1),Es(e,t.containerInfo)}function eu(e,t,n,r,o){return wn(),gs(o),t.flags|=256,ve(e,t,n,r),t.child}var Oi={dehydrated:null,treeContext:null,retryLane:0};function Ri(e){return{baseLanes:e,cachePool:null,transitions:null}}function xf(e,t,n){var r=t.pendingProps,o=Q.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(Q,o&1),e===null)return zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ko(i,r,0,null),e=Vt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ri(n),t.memoizedState=Oi,e):Is(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return x1(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Lt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=Lt(s,l):(l=Vt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ri(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Oi,r}return l=e.child,e=l.sibling,r=Lt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Is(e,t){return t=Ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wr(e,t,n,r){return r!==null&&gs(r),Sn(t,e.child,null,n),e=Is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function x1(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Xl(Error(C(422))),Wr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ko({mode:"visible",children:r.children},o,0,null),l=Vt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Sn(t,e.child,null,i),t.child.memoizedState=Ri(i),t.memoizedState=Oi,l);if(!(t.mode&1))return Wr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(C(419)),r=Xl(l,r,void 0),Wr(e,t,i,r)}if(s=(i&e.childLanes)!==0,xe||s){if(r=le,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ft(e,o),Ke(r,e,o,-1))}return Ds(),r=Xl(Error(C(421))),Wr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=O1.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Le=Et(o.nextSibling),Pe=t,Y=!0,Qe=null,e!==null&&(Re[$e++]=it,Re[$e++]=st,Re[$e++]=Ht,it=e.id,st=e.overflow,Ht=t),t=Is(t,r.children),t.flags|=4096,t)}function tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Li(e.return,t,n)}function Kl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Cf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ve(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tu(e,n,t);else if(e.tag===19)tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Kl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Kl(t,!0,n,null,l);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function C1(e,t,n){switch(t.tag){case 3:Sf(t),wn();break;case 5:Xc(t);break;case 1:ke(t.type)&&Co(t);break;case 4:Es(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(_o,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?xf(e,t,n):(V(Q,Q.current&1),e=dt(e,t,n),e!==null?e.sibling:null);V(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,gf(e,t,n)}return dt(e,t,n)}var kf,$i,Ef,_f;kf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$i=function(){};Ef=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Bt(nt.current);var l=null;switch(n){case"input":o=oi(e,o),r=oi(e,r),l=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),l=[];break;case"textarea":o=si(e,o),r=si(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=So)}ui(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&W("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};_f=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function k1(e,t,n){var r=t.pendingProps;switch(ys(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&xo(),de(t),null;case 3:return r=t.stateNode,xn(),H(Ce),H(he),Ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ur(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Hi(Qe),Qe=null))),$i(e,t),de(t),null;case 5:_s(t);var o=Bt(pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ef(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return de(t),null}if(e=Bt(nt.current),Ur(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[et]=t,r[fr]=l,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<Yn.length;o++)W(Yn[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":ca(r,l),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},W("invalid",r);break;case"textarea":da(r,l),W("invalid",r)}ui(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),o=["children",""+s]):tr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&W("scroll",r)}switch(n){case"input":Ir(r),fa(r,l,!0);break;case"textarea":Ir(r),pa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=So)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[et]=t,e[fr]=r,kf(e,t,!1,!1),t.stateNode=e;e:{switch(i=ci(n,r),n){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<Yn.length;o++)W(Yn[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":ca(e,r),o=oi(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":da(e,r),o=si(e,r),W("invalid",e);break;default:o=r}ui(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?tc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&bu(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&nr(e,a):typeof a=="number"&&nr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(tr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&W("scroll",e):a!=null&&ns(e,l,a,i))}switch(n){case"input":Ir(e),fa(e,r,!1);break;case"textarea":Ir(e),pa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?cn(e,!!r.multiple,l,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=So)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)_f(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Bt(pr.current),Bt(nt.current),Ur(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(l=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return de(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Le!==null&&t.mode&1&&!(t.flags&128))Vc(),wn(),t.flags|=98560,l=!1;else if(l=Ur(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[et]=t}else wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),l=!1}else Qe!==null&&(Hi(Qe),Qe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):Ds())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return xn(),$i(e,t),e===null&&ur(t.stateNode.containerInfo),de(t),null;case 10:return xs(t.type._context),de(t),null;case 17:return ke(t.type)&&xo(),de(t),null;case 19:if(H(Q),l=t.memoizedState,l===null)return de(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Fn(l,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Lo(e),i!==null){for(t.flags|=128,Fn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Q,Q.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>kn&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Lo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Y)return de(t),null}else 2*J()-l.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=Q.current,V(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Fs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function E1(e,t){switch(ys(t),t.tag){case 1:return ke(t.type)&&xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),H(Ce),H(he),Ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _s(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return xn(),null;case 10:return xs(t.type._context),null;case 22:case 23:return Fs(),null;case 24:return null;default:return null}}var Hr=!1,me=!1,_1=typeof WeakSet=="function"?WeakSet:Set,N=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Fi(e,t,n){try{n()}catch(r){G(e,t,r)}}var nu=!1;function N1(e,t){if(Si=yo,e=Pc(),hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,v=0,m=e,h=null;t:for(;;){for(var S;m!==n||o!==0&&m.nodeType!==3||(s=i+o),m!==l||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(S=m.firstChild)!==null;)h=m,m=S;for(;;){if(m===e)break t;if(h===n&&++c===o&&(s=i),h===l&&++v===r&&(a=i),(S=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(xi={focusedElem:e,selectionRange:n},yo=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,P=w.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:We(t.type,y),P);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(p){G(t,t.return,p)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return w=nu,nu=!1,w}function qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Fi(t,n,l)}o=o.next}while(o!==r)}}function Qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Di(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Nf(e){var t=e.alternate;t!==null&&(e.alternate=null,Nf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[fr],delete t[Ei],delete t[a1],delete t[u1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zf(e){return e.tag===5||e.tag===3||e.tag===4}function ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ai(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=So));else if(r!==4&&(e=e.child,e!==null))for(Ai(e,t,n),e=e.sibling;e!==null;)Ai(e,t,n),e=e.sibling}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}var se=null,He=!1;function mt(e,t,n){for(n=n.child;n!==null;)Lf(e,t,n),n=n.sibling}function Lf(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Do,n)}catch{}switch(n.tag){case 5:me||an(n,t);case 6:var r=se,o=He;se=null,mt(e,t,n),se=r,He=o,se!==null&&(He?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(He?(e=se,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),ir(e)):Ul(se,n.stateNode));break;case 4:r=se,o=He,se=n.stateNode.containerInfo,He=!0,mt(e,t,n),se=r,He=o;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Fi(n,t,i),o=o.next}while(o!==r)}mt(e,t,n);break;case 1:if(!me&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,mt(e,t,n),me=r):mt(e,t,n);break;default:mt(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _1),t.forEach(function(r){var o=R1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,He=!1;break e;case 3:se=s.stateNode.containerInfo,He=!0;break e;case 4:se=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(se===null)throw Error(C(160));Lf(l,i,o),se=null,He=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){G(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pf(t,e),t=t.sibling}function Pf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Ze(e),r&4){try{qn(3,e,e.return),Qo(3,e)}catch(y){G(e,e.return,y)}try{qn(5,e,e.return)}catch(y){G(e,e.return,y)}}break;case 1:Ve(t,e),Ze(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Ve(t,e),Ze(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var o=e.stateNode;try{nr(o,"")}catch(y){G(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Zu(o,l),ci(s,i);var c=ci(s,l);for(i=0;i<a.length;i+=2){var v=a[i],m=a[i+1];v==="style"?tc(o,m):v==="dangerouslySetInnerHTML"?bu(o,m):v==="children"?nr(o,m):ns(o,v,m,c)}switch(s){case"input":li(o,l);break;case"textarea":Ju(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?cn(o,!!l.multiple,S,!1):h!==!!l.multiple&&(l.defaultValue!=null?cn(o,!!l.multiple,l.defaultValue,!0):cn(o,!!l.multiple,l.multiple?[]:"",!1))}o[fr]=l}catch(y){G(e,e.return,y)}}break;case 6:if(Ve(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(y){G(e,e.return,y)}}break;case 3:if(Ve(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(y){G(e,e.return,y)}break;case 4:Ve(t,e),Ze(e);break;case 13:Ve(t,e),Ze(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Rs=J())),r&4&&ou(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||v,Ve(t,e),me=c):Ve(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(N=e,v=e.child;v!==null;){for(m=N=v;N!==null;){switch(h=N,S=h.child,h.tag){case 0:case 11:case 14:case 15:qn(4,h,h.return);break;case 1:an(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){G(r,n,y)}}break;case 5:an(h,h.return);break;case 22:if(h.memoizedState!==null){iu(m);continue}}S!==null?(S.return=h,N=S):iu(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{o=m.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ec("display",i))}catch(y){G(e,e.return,y)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){G(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ve(t,e),Ze(e),r&4&&ou(e);break;case 21:break;default:Ve(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zf(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(nr(o,""),r.flags&=-33);var l=ru(e);Bi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=ru(e);Ai(e,s,i);break;default:throw Error(C(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function z1(e,t,n){N=e,Tf(e)}function Tf(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Hr;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||me;s=Hr;var c=me;if(Hr=i,(me=a)&&!c)for(N=o;N!==null;)i=N,a=i.child,i.tag===22&&i.memoizedState!==null?su(o):a!==null?(a.return=i,N=a):su(o);for(;l!==null;)N=l,Tf(l),l=l.sibling;N=o,Hr=s,me=c}lu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,N=l):lu(e)}}function lu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Wa(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wa(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&ir(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}me||t.flags&512&&Di(t)}catch(h){G(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function iu(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function su(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qo(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){G(t,o,a)}}var l=t.return;try{Di(t)}catch(a){G(t,l,a)}break;case 5:var i=t.return;try{Di(t)}catch(a){G(t,i,a)}}}catch(a){G(t,t.return,a)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var L1=Math.ceil,jo=pt.ReactCurrentDispatcher,Ms=pt.ReactCurrentOwner,De=pt.ReactCurrentBatchConfig,R=0,le=null,b=null,ue=0,ze=0,un=It(0),te=0,yr=null,Qt=0,Xo=0,Os=0,bn=null,Se=null,Rs=0,kn=1/0,ot=null,Io=!1,Ui=null,Nt=null,Yr=!1,St=null,Mo=0,er=0,Vi=null,lo=-1,io=0;function ye(){return R&6?J():lo!==-1?lo:lo=J()}function zt(e){return e.mode&1?R&2&&ue!==0?ue&-ue:f1.transition!==null?(io===0&&(io=pc()),io):(e=A,e!==0||(e=window.event,e=e===void 0?16:Sc(e.type)),e):1}function Ke(e,t,n,r){if(50<er)throw er=0,Vi=null,Error(C(185));kr(e,n,r),(!(R&2)||e!==le)&&(e===le&&(!(R&2)&&(Xo|=n),te===4&&gt(e,ue)),Ee(e,r),n===1&&R===0&&!(t.mode&1)&&(kn=J()+500,Wo&&Mt()))}function Ee(e,t){var n=e.callbackNode;fd(e,t);var r=vo(e,e===le?ue:0);if(r===0)n!==null&&va(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&va(n),t===1)e.tag===0?c1(au.bind(null,e)):Ac(au.bind(null,e)),i1(function(){!(R&6)&&Mt()}),n=null;else{switch(mc(r)){case 1:n=ss;break;case 4:n=fc;break;case 16:n=ho;break;case 536870912:n=dc;break;default:n=ho}n=Df(n,jf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jf(e,t){if(lo=-1,io=0,R&6)throw Error(C(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=vo(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oo(e,r);else{t=r;var o=R;R|=2;var l=Mf();(le!==e||ue!==t)&&(ot=null,kn=J()+500,Ut(e,t));do try{j1();break}catch(s){If(e,s)}while(!0);Ss(),jo.current=l,R=o,b!==null?t=0:(le=null,ue=0,t=te)}if(t!==0){if(t===2&&(o=hi(e),o!==0&&(r=o,t=Wi(e,o))),t===1)throw n=yr,Ut(e,0),gt(e,r),Ee(e,J()),n;if(t===6)gt(e,r);else{if(o=e.current.alternate,!(r&30)&&!P1(o)&&(t=Oo(e,r),t===2&&(l=hi(e),l!==0&&(r=l,t=Wi(e,l))),t===1))throw n=yr,Ut(e,0),gt(e,r),Ee(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Ft(e,Se,ot);break;case 3:if(gt(e,r),(r&130023424)===r&&(t=Rs+500-J(),10<t)){if(vo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ki(Ft.bind(null,e,Se,ot),t);break}Ft(e,Se,ot);break;case 4:if(gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Xe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L1(r/1960))-r,10<r){e.timeoutHandle=ki(Ft.bind(null,e,Se,ot),r);break}Ft(e,Se,ot);break;case 5:Ft(e,Se,ot);break;default:throw Error(C(329))}}}return Ee(e,J()),e.callbackNode===n?jf.bind(null,e):null}function Wi(e,t){var n=bn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=Oo(e,t),e!==2&&(t=Se,Se=n,t!==null&&Hi(t)),e}function Hi(e){Se===null?Se=e:Se.push.apply(Se,e)}function P1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ge(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gt(e,t){for(t&=~Os,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function au(e){if(R&6)throw Error(C(327));hn();var t=vo(e,0);if(!(t&1))return Ee(e,J()),null;var n=Oo(e,t);if(e.tag!==0&&n===2){var r=hi(e);r!==0&&(t=r,n=Wi(e,r))}if(n===1)throw n=yr,Ut(e,0),gt(e,t),Ee(e,J()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,Se,ot),Ee(e,J()),null}function $s(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(kn=J()+500,Wo&&Mt())}}function Xt(e){St!==null&&St.tag===0&&!(R&6)&&hn();var t=R;R|=1;var n=De.transition,r=A;try{if(De.transition=null,A=1,e)return e()}finally{A=r,De.transition=n,R=t,!(R&6)&&Mt()}}function Fs(){ze=un.current,H(un)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,l1(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(ys(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:xn(),H(Ce),H(he),Ns();break;case 5:_s(r);break;case 4:xn();break;case 13:H(Q);break;case 19:H(Q);break;case 10:xs(r.type._context);break;case 22:case 23:Fs()}n=n.return}if(le=e,b=e=Lt(e.current,null),ue=ze=t,te=0,yr=null,Os=Xo=Qt=0,Se=bn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}At=null}return e}function If(e,t){do{var n=b;try{if(Ss(),no.current=To,Po){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Po=!1}if(Yt=0,oe=ee=X=null,Jn=!1,mr=0,Ms.current=null,n===null||n.return===null){te=1,yr=t,b=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,v=s,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var S=Ga(i);if(S!==null){S.flags&=-257,Za(S,i,s,l,t),S.mode&1&&Ka(l,c,t),t=S,a=c;var w=t.updateQueue;if(w===null){var y=new Set;y.add(a),t.updateQueue=y}else w.add(a);break e}else{if(!(t&1)){Ka(l,c,t),Ds();break e}a=Error(C(426))}}else if(Y&&s.mode&1){var P=Ga(i);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Za(P,i,s,l,t),gs(Cn(a,s));break e}}l=a=Cn(a,s),te!==4&&(te=2),bn===null?bn=[l]:bn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=hf(l,a,t);Va(l,f);break e;case 1:s=a;var u=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Nt===null||!Nt.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var p=vf(l,s,t);Va(l,p);break e}}l=l.return}while(l!==null)}Rf(n)}catch(x){t=x,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function Mf(){var e=jo.current;return jo.current=To,e===null?To:e}function Ds(){(te===0||te===3||te===2)&&(te=4),le===null||!(Qt&268435455)&&!(Xo&268435455)||gt(le,ue)}function Oo(e,t){var n=R;R|=2;var r=Mf();(le!==e||ue!==t)&&(ot=null,Ut(e,t));do try{T1();break}catch(o){If(e,o)}while(!0);if(Ss(),R=n,jo.current=r,b!==null)throw Error(C(261));return le=null,ue=0,te}function T1(){for(;b!==null;)Of(b)}function j1(){for(;b!==null&&!nd();)Of(b)}function Of(e){var t=Ff(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Rf(e):b=t,Ms.current=null}function Rf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=E1(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,b=null;return}}else if(n=k1(n,t,ze),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);te===0&&(te=5)}function Ft(e,t,n){var r=A,o=De.transition;try{De.transition=null,A=1,I1(e,t,n,r)}finally{De.transition=o,A=r}return null}function I1(e,t,n,r){do hn();while(St!==null);if(R&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(dd(e,l),e===le&&(b=le=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yr||(Yr=!0,Df(ho,function(){return hn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=De.transition,De.transition=null;var i=A;A=1;var s=R;R|=4,Ms.current=null,N1(e,n),Pf(n,e),qd(xi),yo=!!Si,xi=Si=null,e.current=n,z1(n),rd(),R=s,A=i,De.transition=l}else e.current=n;if(Yr&&(Yr=!1,St=e,Mo=o),l=e.pendingLanes,l===0&&(Nt=null),id(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Io)throw Io=!1,e=Ui,Ui=null,e;return Mo&1&&e.tag!==0&&hn(),l=e.pendingLanes,l&1?e===Vi?er++:(er=0,Vi=e):er=0,Mt(),null}function hn(){if(St!==null){var e=mc(Mo),t=De.transition,n=A;try{if(De.transition=null,A=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,Mo=0,R&6)throw Error(C(331));var o=R;for(R|=4,N=e.current;N!==null;){var l=N,i=l.child;if(N.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(N=c;N!==null;){var v=N;switch(v.tag){case 0:case 11:case 15:qn(8,v,l)}var m=v.child;if(m!==null)m.return=v,N=m;else for(;N!==null;){v=N;var h=v.sibling,S=v.return;if(Nf(v),v===c){N=null;break}if(h!==null){h.return=S,N=h;break}N=S}}}var w=l.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}N=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,N=i;else e:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:qn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,N=f;break e}N=l.return}}var u=e.current;for(N=u;N!==null;){i=N;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,N=d;else e:for(i=u;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Qo(9,s)}}catch(x){G(s,s.return,x)}if(s===i){N=null;break e}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}if(R=o,Mt(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Do,e)}catch{}r=!0}return r}finally{A=n,De.transition=t}}return!1}function uu(e,t,n){t=Cn(n,t),t=hf(e,t,1),e=_t(e,t,1),t=ye(),e!==null&&(kr(e,1,t),Ee(e,t))}function G(e,t,n){if(e.tag===3)uu(e,e,n);else for(;t!==null;){if(t.tag===3){uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=Cn(n,e),e=vf(t,e,1),t=_t(t,e,1),e=ye(),t!==null&&(kr(t,1,e),Ee(t,e));break}}t=t.return}}function M1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>J()-Rs?Ut(e,0):Os|=n),Ee(e,t)}function $f(e,t){t===0&&(e.mode&1?(t=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):t=1);var n=ye();e=ft(e,t),e!==null&&(kr(e,t,n),Ee(e,n))}function O1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$f(e,n)}function R1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),$f(e,n)}var Ff;Ff=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,C1(e,t,n);xe=!!(e.flags&131072)}else xe=!1,Y&&t.flags&1048576&&Bc(t,Eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oo(e,t),e=t.pendingProps;var o=gn(t,he.current);mn(t,n),o=Ls(null,t,r,e,o,n);var l=Ps();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(l=!0,Co(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ks(t),o.updater=Yo,t.stateNode=o,o._reactInternals=t,Ti(t,r,e,n),t=Mi(null,t,r,!0,l,n)):(t.tag=0,Y&&l&&vs(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=F1(r),e=We(r,e),o){case 0:t=Ii(null,t,r,e,n);break e;case 1:t=ba(null,t,r,e,n);break e;case 11:t=Ja(null,t,r,e,n);break e;case 14:t=qa(null,t,r,We(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Ii(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),ba(e,t,r,o,n);case 3:e:{if(Sf(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Qc(e,t),zo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Cn(Error(C(423)),t),t=eu(e,t,r,n,o);break e}else if(r!==o){o=Cn(Error(C(424)),t),t=eu(e,t,r,n,o);break e}else for(Le=Et(t.stateNode.containerInfo.firstChild),Pe=t,Y=!0,Qe=null,n=Hc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),r===o){t=dt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Xc(t),e===null&&zi(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Ci(r,o)?i=null:l!==null&&Ci(r,l)&&(t.flags|=32),wf(e,t),ve(e,t,i,n),t.child;case 6:return e===null&&zi(t),null;case 13:return xf(e,t,n);case 4:return Es(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Ja(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,V(_o,r._currentValue),r._currentValue=i,l!==null)if(Ge(l.value,i)){if(l.children===o.children&&!Ce.current){t=dt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=at(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?a.next=a:(a.next=v.next,v.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Li(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(C(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Li(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,mn(t,n),o=Ae(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=We(r,t.pendingProps),o=We(r.type,o),qa(e,t,r,o,n);case 15:return yf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),oo(e,t),t.tag=1,ke(r)?(e=!0,Co(t)):e=!1,mn(t,n),mf(t,r,o),Ti(t,r,o,n),Mi(null,t,r,!0,e,n);case 19:return Cf(e,t,n);case 22:return gf(e,t,n)}throw Error(C(156,t.tag))};function Df(e,t){return cc(e,t)}function $1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new $1(e,t,n,r)}function As(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F1(e){if(typeof e=="function")return As(e)?1:0;if(e!=null){if(e=e.$$typeof,e===os)return 11;if(e===ls)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function so(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")As(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case qt:return Vt(n.children,o,l,t);case rs:i=8,o|=8;break;case ei:return e=Fe(12,n,t,o|2),e.elementType=ei,e.lanes=l,e;case ti:return e=Fe(13,n,t,o),e.elementType=ti,e.lanes=l,e;case ni:return e=Fe(19,n,t,o),e.elementType=ni,e.lanes=l,e;case Xu:return Ko(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yu:i=10;break e;case Qu:i=9;break e;case os:i=11;break e;case ls:i=14;break e;case ht:i=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Fe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Vt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Ko(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Xu,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function D1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bs(e,t,n,r,o,l,i,s,a){return e=new D1(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Fe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ks(l),e}function A1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Af(e){if(!e)return Tt;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(ke(n))return Dc(e,n,t)}return t}function Bf(e,t,n,r,o,l,i,s,a){return e=Bs(n,r,!0,e,o,l,i,s,a),e.context=Af(null),n=e.current,r=ye(),o=zt(n),l=at(r,o),l.callback=t??null,_t(n,l,o),e.current.lanes=o,kr(e,o,r),Ee(e,r),e}function Go(e,t,n,r){var o=t.current,l=ye(),i=zt(o);return n=Af(n),t.context===null?t.context=n:t.pendingContext=n,t=at(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(o,t,i),e!==null&&(Ke(e,o,i,l),to(e,o,i)),i}function Ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Us(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function B1(){return null}var Uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vs(e){this._internalRoot=e}Zo.prototype.render=Vs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Go(e,t,null,null)};Zo.prototype.unmount=Vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xt(function(){Go(null,e,null,null)}),t[ct]=null}};function Zo(e){this._internalRoot=e}Zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=yc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&wc(e)}};function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fu(){}function U1(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Ro(i);l.call(c)}}var i=Bf(t,r,e,0,null,!1,!1,"",fu);return e._reactRootContainer=i,e[ct]=i.current,ur(e.nodeType===8?e.parentNode:e),Xt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Ro(a);s.call(c)}}var a=Bs(e,0,!1,null,null,!1,!1,"",fu);return e._reactRootContainer=a,e[ct]=a.current,ur(e.nodeType===8?e.parentNode:e),Xt(function(){Go(t,a,n,r)}),a}function qo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=Ro(i);s.call(a)}}Go(t,i,e,o)}else i=U1(n,t,e,o,r);return Ro(i)}hc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(as(t,n|1),Ee(t,J()),!(R&6)&&(kn=J()+500,Mt()))}break;case 13:Xt(function(){var r=ft(e,1);if(r!==null){var o=ye();Ke(r,e,1,o)}}),Us(e,1)}};us=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ye();Ke(t,e,134217728,n)}Us(e,134217728)}};vc=function(e){if(e.tag===13){var t=zt(e),n=ft(e,t);if(n!==null){var r=ye();Ke(n,e,t,r)}Us(e,t)}};yc=function(){return A};gc=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};di=function(e,t,n){switch(t){case"input":if(li(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Vo(r);if(!o)throw Error(C(90));Gu(r),li(r,o)}}}break;case"textarea":Ju(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}};oc=$s;lc=Xt;var V1={usingClientEntryPoint:!1,Events:[_r,nn,Vo,nc,rc,$s]},Dn={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W1={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ac(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||B1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Do=Qr.inject(W1),tt=Qr}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V1;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ws(t))throw Error(C(200));return A1(e,t,null,n)};Ie.createRoot=function(e,t){if(!Ws(e))throw Error(C(299));var n=!1,r="",o=Uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Bs(e,1,!1,null,null,n,!1,r,o),e[ct]=t.current,ur(e.nodeType===8?e.parentNode:e),new Vs(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=ac(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return Xt(e)};Ie.hydrate=function(e,t,n){if(!Jo(t))throw Error(C(200));return qo(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Ws(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Uf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,o,!1,l,i),e[ct]=t.current,ur(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Zo(t)};Ie.render=function(e,t,n){if(!Jo(t))throw Error(C(200));return qo(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Jo(e))throw Error(C(40));return e._reactRootContainer?(Xt(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Ie.unstable_batchedUpdates=$s;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jo(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return qo(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Vf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vf)}catch(e){console.error(e)}}Vf(),Uu.exports=Ie;var H1=Uu.exports,Wf,du=H1;Wf=du.createRoot,du.hydrateRoot;var Hf={exports:{}};(function(e,t){(function(){function n(){var r=window,o=document;if("scrollBehavior"in o.documentElement.style&&r.__forceSmoothScrollPolyfill__!==!0)return;var l=r.HTMLElement||r.Element,i=468,s={scroll:r.scroll||r.scrollTo,scrollBy:r.scrollBy,elementScroll:l.prototype.scroll||m,scrollIntoView:l.prototype.scrollIntoView},a=r.performance&&r.performance.now?r.performance.now.bind(r.performance):Date.now;function c(p){var x=["MSIE ","Trident/","Edge/"];return new RegExp(x.join("|")).test(p)}var v=c(r.navigator.userAgent)?1:0;function m(p,x){this.scrollLeft=p,this.scrollTop=x}function h(p){return .5*(1-Math.cos(Math.PI*p))}function S(p){if(p===null||typeof p!="object"||p.behavior===void 0||p.behavior==="auto"||p.behavior==="instant")return!0;if(typeof p=="object"&&p.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+p.behavior+" is not a valid value for enumeration ScrollBehavior.")}function w(p,x){if(x==="Y")return p.clientHeight+v<p.scrollHeight;if(x==="X")return p.clientWidth+v<p.scrollWidth}function y(p,x){var _=r.getComputedStyle(p,null)["overflow"+x];return _==="auto"||_==="scroll"}function P(p){var x=w(p,"Y")&&y(p,"Y"),_=w(p,"X")&&y(p,"X");return x||_}function f(p){for(;p!==o.body&&P(p)===!1;)p=p.parentNode||p.host;return p}function u(p){var x=a(),_,k,L,D=(x-p.startTime)/i;D=D>1?1:D,_=h(D),k=p.startX+(p.x-p.startX)*_,L=p.startY+(p.y-p.startY)*_,p.method.call(p.scrollable,k,L),(k!==p.x||L!==p.y)&&r.requestAnimationFrame(u.bind(r,p))}function d(p,x,_){var k,L,D,I,Ne=a();p===o.body?(k=r,L=r.scrollX||r.pageXOffset,D=r.scrollY||r.pageYOffset,I=s.scroll):(k=p,L=p.scrollLeft,D=p.scrollTop,I=m),u({scrollable:k,method:I,startTime:Ne,startX:L,startY:D,x,y:_})}r.scroll=r.scrollTo=function(){if(arguments[0]!==void 0){if(S(arguments[0])===!0){s.scroll.call(r,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:r.scrollX||r.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:r.scrollY||r.pageYOffset);return}d.call(r,o.body,arguments[0].left!==void 0?~~arguments[0].left:r.scrollX||r.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:r.scrollY||r.pageYOffset)}},r.scrollBy=function(){if(arguments[0]!==void 0){if(S(arguments[0])){s.scrollBy.call(r,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}d.call(r,o.body,~~arguments[0].left+(r.scrollX||r.pageXOffset),~~arguments[0].top+(r.scrollY||r.pageYOffset))}},l.prototype.scroll=l.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(S(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");s.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var p=arguments[0].left,x=arguments[0].top;d.call(this,this,typeof p>"u"?this.scrollLeft:~~p,typeof x>"u"?this.scrollTop:~~x)}},l.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(S(arguments[0])===!0){s.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},l.prototype.scrollIntoView=function(){if(S(arguments[0])===!0){s.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var p=f(this),x=p.getBoundingClientRect(),_=this.getBoundingClientRect();p!==o.body?(d.call(this,p,p.scrollLeft+_.left-x.left,p.scrollTop+_.top-x.top),r.getComputedStyle(p).position!=="fixed"&&r.scrollBy({left:x.left,top:x.top,behavior:"smooth"})):r.scrollBy({left:_.left,top:_.top,behavior:"smooth"})}}e.exports={polyfill:n}})()})(Hf);var Y1=Hf.exports;const Q1=Pu(Y1);function X1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function K1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var G1=function(){function e(n){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(K1(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=X1(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",$o="-moz-",$="-webkit-",Yf="comm",Hs="rule",Ys="decl",Z1="@import",Qf="@keyframes",J1="@layer",q1=Math.abs,bo=String.fromCharCode,b1=Object.assign;function ep(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function Xf(e){return e.trim()}function tp(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function Yi(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function gr(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Qs(e){return e.length}function Xr(e,t){return t.push(e),e}function np(e,t){return e.map(t).join("")}var el=1,En=1,Kf=0,_e=0,q=0,Ln="";function tl(e,t,n,r,o,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:el,column:En,length:i,return:""}}function An(e,t){return b1(tl("",null,null,"",null,null,0),e,{length:-e.length},t)}function rp(){return q}function op(){return q=_e>0?ae(Ln,--_e):0,En--,q===10&&(En=1,el--),q}function Te(){return q=_e<Kf?ae(Ln,_e++):0,En++,q===10&&(En=1,el++),q}function rt(){return ae(Ln,_e)}function ao(){return _e}function zr(e,t){return gr(Ln,e,t)}function wr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gf(e){return el=En=1,Kf=qe(Ln=e),_e=0,[]}function Zf(e){return Ln="",e}function uo(e){return Xf(zr(_e-1,Qi(e===91?e+2:e===40?e+1:e)))}function lp(e){for(;(q=rt())&&q<33;)Te();return wr(e)>2||wr(q)>3?"":" "}function ip(e,t){for(;--t&&Te()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return zr(e,ao()+(t<6&&rt()==32&&Te()==32))}function Qi(e){for(;Te();)switch(q){case e:return _e;case 34:case 39:e!==34&&e!==39&&Qi(q);break;case 40:e===41&&Qi(e);break;case 92:Te();break}return _e}function sp(e,t){for(;Te()&&e+q!==57;)if(e+q===84&&rt()===47)break;return"/*"+zr(t,_e-1)+"*"+bo(e===47?e:Te())}function ap(e){for(;!wr(rt());)Te();return zr(e,_e)}function up(e){return Zf(co("",null,null,null,[""],e=Gf(e),0,[0],e))}function co(e,t,n,r,o,l,i,s,a){for(var c=0,v=0,m=i,h=0,S=0,w=0,y=1,P=1,f=1,u=0,d="",p=o,x=l,_=r,k=d;P;)switch(w=u,u=Te()){case 40:if(w!=108&&ae(k,m-1)==58){Yi(k+=F(uo(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=uo(u);break;case 9:case 10:case 13:case 32:k+=lp(w);break;case 92:k+=ip(ao()-1,7);continue;case 47:switch(rt()){case 42:case 47:Xr(cp(sp(Te(),ao()),t,n),a);break;default:k+="/"}break;case 123*y:s[c++]=qe(k)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:P=0;case 59+v:f==-1&&(k=F(k,/\f/g,"")),S>0&&qe(k)-m&&Xr(S>32?mu(k+";",r,n,m-1):mu(F(k," ","")+";",r,n,m-2),a);break;case 59:k+=";";default:if(Xr(_=pu(k,t,n,c,v,o,s,d,p=[],x=[],m),l),u===123)if(v===0)co(k,t,_,_,p,l,m,s,x);else switch(h===99&&ae(k,3)===110?100:h){case 100:case 108:case 109:case 115:co(e,_,_,r&&Xr(pu(e,_,_,0,0,o,s,d,o,p=[],m),x),o,x,m,s,r?p:x);break;default:co(k,_,_,_,[""],x,0,s,x)}}c=v=S=0,y=f=1,d=k="",m=i;break;case 58:m=1+qe(k),S=w;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&op()==125)continue}switch(k+=bo(u),u*y){case 38:f=v>0?1:(k+="\f",-1);break;case 44:s[c++]=(qe(k)-1)*f,f=1;break;case 64:rt()===45&&(k+=uo(Te())),h=rt(),v=m=qe(d=k+=ap(ao())),u++;break;case 45:w===45&&qe(k)==2&&(y=0)}}return l}function pu(e,t,n,r,o,l,i,s,a,c,v){for(var m=o-1,h=o===0?l:[""],S=Qs(h),w=0,y=0,P=0;w<r;++w)for(var f=0,u=gr(e,m+1,m=q1(y=i[w])),d=e;f<S;++f)(d=Xf(y>0?h[f]+" "+u:F(u,/&\f/g,h[f])))&&(a[P++]=d);return tl(e,t,n,o===0?Hs:s,a,c,v)}function cp(e,t,n){return tl(e,t,n,Yf,bo(rp()),gr(e,2,-2),0)}function mu(e,t,n,r){return tl(e,t,n,Ys,gr(e,0,r),gr(e,r+1,-1),r)}function vn(e,t){for(var n="",r=Qs(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function fp(e,t,n,r){switch(e.type){case J1:if(e.children.length)break;case Z1:case Ys:return e.return=e.return||e.value;case Yf:return"";case Qf:return e.return=e.value+"{"+vn(e.children,r)+"}";case Hs:e.value=e.props.join(",")}return qe(n=vn(e.children,r))?e.return=e.value+"{"+n+"}":""}function dp(e){var t=Qs(e);return function(n,r,o,l){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,l)||"";return i}}function pp(e){return function(t){t.root||(t=t.return)&&e(t)}}function mp(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var hp=function(t,n,r){for(var o=0,l=0;o=l,l=rt(),o===38&&l===12&&(n[r]=1),!wr(l);)Te();return zr(t,_e)},vp=function(t,n){var r=-1,o=44;do switch(wr(o)){case 0:o===38&&rt()===12&&(n[r]=1),t[r]+=hp(_e-1,n,r);break;case 2:t[r]+=uo(o);break;case 4:if(o===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=bo(o)}while(o=Te());return t},yp=function(t,n){return Zf(vp(Gf(t),n))},hu=new WeakMap,gp=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!hu.get(r))&&!o){hu.set(t,!0);for(var l=[],i=yp(n,l),s=r.props,a=0,c=0;a<i.length;a++)for(var v=0;v<s.length;v++,c++)t.props[c]=l[a]?i[a].replace(/&\f/g,s[v]):s[v]+" "+i[a]}}},wp=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Jf(e,t){switch(ep(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+$o+e+pe+e+e;case 6828:case 4268:return $+e+pe+e+e;case 6165:return $+e+pe+"flex-"+e+e;case 5187:return $+e+F(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return $+e+pe+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return $+e+pe+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+pe+F(e,"shrink","negative")+e;case 5292:return $+e+pe+F(e,"basis","preferred-size")+e;case 6060:return $+"box-"+F(e,"-grow","")+$+e+pe+F(e,"grow","positive")+e;case 4554:return $+F(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+$o+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Yi(e,"stretch")?Jf(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ae(e,t+1)!==115)break;case 6444:switch(ae(e,qe(e)-3-(~Yi(e,"!important")&&10))){case 107:return F(e,":",":"+$)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ae(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(ae(e,t+11)){case 114:return $+e+pe+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+pe+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+pe+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+pe+e+e}return e}var Sp=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Ys:t.return=Jf(t.value,t.length);break;case Qf:return vn([An(t,{value:F(t.value,"@","@"+$)})],o);case Hs:if(t.length)return np(t.props,function(l){switch(tp(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return vn([An(t,{props:[F(l,/:(read-\w+)/,":"+$o+"$1")]})],o);case"::placeholder":return vn([An(t,{props:[F(l,/:(plac\w+)/,":"+$+"input-$1")]}),An(t,{props:[F(l,/:(plac\w+)/,":"+$o+"$1")]}),An(t,{props:[F(l,/:(plac\w+)/,pe+"input-$1")]})],o)}return""})}},xp=[Sp],Cp=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var P=y.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||xp,l={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var P=y.getAttribute("data-emotion").split(" "),f=1;f<P.length;f++)l[P[f]]=!0;s.push(y)});var a,c=[gp,wp];{var v,m=[fp,pp(function(y){v.insert(y)})],h=dp(c.concat(o,m)),S=function(P){return vn(up(P),h)};a=function(P,f,u,d){v=u,S(P?P+"{"+f.styles+"}":f.styles),d&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new G1({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:a};return w.sheet.hydrate(s),w},qf={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=typeof Symbol=="function"&&Symbol.for,Xs=ie?Symbol.for("react.element"):60103,Ks=ie?Symbol.for("react.portal"):60106,nl=ie?Symbol.for("react.fragment"):60107,rl=ie?Symbol.for("react.strict_mode"):60108,ol=ie?Symbol.for("react.profiler"):60114,ll=ie?Symbol.for("react.provider"):60109,il=ie?Symbol.for("react.context"):60110,Gs=ie?Symbol.for("react.async_mode"):60111,sl=ie?Symbol.for("react.concurrent_mode"):60111,al=ie?Symbol.for("react.forward_ref"):60112,ul=ie?Symbol.for("react.suspense"):60113,kp=ie?Symbol.for("react.suspense_list"):60120,cl=ie?Symbol.for("react.memo"):60115,fl=ie?Symbol.for("react.lazy"):60116,Ep=ie?Symbol.for("react.block"):60121,_p=ie?Symbol.for("react.fundamental"):60117,Np=ie?Symbol.for("react.responder"):60118,zp=ie?Symbol.for("react.scope"):60119;function Oe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xs:switch(e=e.type,e){case Gs:case sl:case nl:case ol:case rl:case ul:return e;default:switch(e=e&&e.$$typeof,e){case il:case al:case fl:case cl:case ll:return e;default:return t}}case Ks:return t}}}function bf(e){return Oe(e)===sl}B.AsyncMode=Gs;B.ConcurrentMode=sl;B.ContextConsumer=il;B.ContextProvider=ll;B.Element=Xs;B.ForwardRef=al;B.Fragment=nl;B.Lazy=fl;B.Memo=cl;B.Portal=Ks;B.Profiler=ol;B.StrictMode=rl;B.Suspense=ul;B.isAsyncMode=function(e){return bf(e)||Oe(e)===Gs};B.isConcurrentMode=bf;B.isContextConsumer=function(e){return Oe(e)===il};B.isContextProvider=function(e){return Oe(e)===ll};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xs};B.isForwardRef=function(e){return Oe(e)===al};B.isFragment=function(e){return Oe(e)===nl};B.isLazy=function(e){return Oe(e)===fl};B.isMemo=function(e){return Oe(e)===cl};B.isPortal=function(e){return Oe(e)===Ks};B.isProfiler=function(e){return Oe(e)===ol};B.isStrictMode=function(e){return Oe(e)===rl};B.isSuspense=function(e){return Oe(e)===ul};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nl||e===sl||e===ol||e===rl||e===ul||e===kp||typeof e=="object"&&e!==null&&(e.$$typeof===fl||e.$$typeof===cl||e.$$typeof===ll||e.$$typeof===il||e.$$typeof===al||e.$$typeof===_p||e.$$typeof===Np||e.$$typeof===zp||e.$$typeof===Ep)};B.typeOf=Oe;qf.exports=B;var Lp=qf.exports,e0=Lp,Pp={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},t0={};t0[e0.ForwardRef]=Pp;t0[e0.Memo]=Tp;var jp=!0;function n0(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Zs=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||jp===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},r0=function(t,n,r){Zs(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function Ip(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Mp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Op=/[A-Z]|^ms/g,Rp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,o0=function(t){return t.charCodeAt(1)===45},vu=function(t){return t!=null&&typeof t!="boolean"},Jl=mp(function(e){return o0(e)?e:e.replace(Op,"-$&").toLowerCase()}),yu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Rp,function(r,o,l){return be={name:o,styles:l,next:be},o})}return Mp[t]!==1&&!o0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Sr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return be={name:n.name,styles:n.styles,next:be},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)be={name:r.name,styles:r.styles,next:be},r=r.next;var o=n.styles+";";return o}return $p(e,t,n)}case"function":{if(e!==void 0){var l=be,i=n(e);return be=l,Sr(e,t,i)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function $p(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Sr(e,t,n[o])+";";else for(var l in n){var i=n[l];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=l+"{"+t[i]+"}":vu(i)&&(r+=Jl(l)+":"+yu(l,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var s=0;s<i.length;s++)vu(i[s])&&(r+=Jl(l)+":"+yu(l,i[s])+";");else{var a=Sr(e,t,i);switch(l){case"animation":case"animationName":{r+=Jl(l)+":"+a+";";break}default:r+=l+"{"+a+"}"}}}return r}var gu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,be,Js=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,l="";be=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,l+=Sr(r,n,i)):l+=i[0];for(var s=1;s<t.length;s++)l+=Sr(r,n,t[s]),o&&(l+=i[s]);gu.lastIndex=0;for(var a="",c;(c=gu.exec(l))!==null;)a+="-"+c[1];var v=Ip(l)+a;return{name:v,styles:l,next:be}},Fp=function(t){return t()},Dp=ia.useInsertionEffect?ia.useInsertionEffect:!1,l0=Dp||Fp,qs={}.hasOwnProperty,i0=T.createContext(typeof HTMLElement<"u"?Cp({key:"css"}):null);i0.Provider;var s0=function(t){return T.forwardRef(function(n,r){var o=T.useContext(i0);return t(n,o,r)})},a0=T.createContext({}),Xi="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ap=function(t,n){var r={};for(var o in n)qs.call(n,o)&&(r[o]=n[o]);return r[Xi]=t,r},Bp=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Zs(n,r,o),l0(function(){return r0(n,r,o)}),null},Up=s0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Xi],l=[r],i="";typeof e.className=="string"?i=n0(t.registered,l,e.className):e.className!=null&&(i=e.className+" ");var s=Js(l,void 0,T.useContext(a0));i+=t.key+"-"+s.name;var a={};for(var c in e)qs.call(e,c)&&c!=="css"&&c!==Xi&&(a[c]=e[c]);return a.ref=n,a.className=i,T.createElement(T.Fragment,null,T.createElement(Bp,{cache:t,serialized:s,isStringTag:typeof o=="string"}),T.createElement(o,a))}),Vp=Up,Wp=g.Fragment;function re(e,t,n){return qs.call(t,"css")?g.jsx(Vp,Ap(e,t),n):g.jsx(e,t,n)}function u0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Js(t)}var E=function(){var t=u0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Hp=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var l=t[r];if(l!=null){var i=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))i=e(l);else{i="";for(var s in l)l[s]&&s&&(i&&(i+=" "),i+=s)}break}default:i=l}i&&(o&&(o+=" "),o+=i)}}return o};function Yp(e,t,n){var r=[],o=n0(e,r,n);return r.length<2?n:o+t(r)}var Qp=function(t){var n=t.cache,r=t.serializedArr;return l0(function(){for(var o=0;o<r.length;o++)r0(n,r[o],!1)}),null},ql=s0(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,v=new Array(c),m=0;m<c;m++)v[m]=arguments[m];var h=Js(v,t.registered);return r.push(h),Zs(t,h,!1),t.key+"-"+h.name},l=function(){for(var c=arguments.length,v=new Array(c),m=0;m<c;m++)v[m]=arguments[m];return Yp(t.registered,o,Hp(v))},i={css:o,cx:l,theme:T.useContext(a0)},s=e.children(i);return n=!0,T.createElement(T.Fragment,null,T.createElement(Qp,{cache:t,serializedArr:r}),s)}),Xp=Object.defineProperty,Kp=(e,t,n)=>t in e?Xp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kr=(e,t,n)=>(Kp(e,typeof t!="symbol"?t+"":t,n),n),Ki=new Map,Gr=new WeakMap,wu=0,Gp=void 0;function Zp(e){return e?(Gr.has(e)||(wu+=1,Gr.set(e,wu.toString())),Gr.get(e)):"0"}function Jp(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Zp(e.root):e[t]}`).toString()}function qp(e){const t=Jp(e);let n=Ki.get(t);if(!n){const r=new Map;let o;const l=new IntersectionObserver(i=>{i.forEach(s=>{var a;const c=s.isIntersecting&&o.some(v=>s.intersectionRatio>=v);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(v=>{v(c,s)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},Ki.set(t,n)}return n}function c0(e,t,n={},r=Gp){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:l,elements:i}=qp(n),s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),l.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(i.delete(e),l.unobserve(e)),i.size===0&&(l.disconnect(),Ki.delete(o))}}function bp(e){return typeof e.children!="function"}var Su=class extends T.Component{constructor(e){super(e),Kr(this,"node",null),Kr(this,"_unobserveCb",null),Kr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Kr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),bp(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:l}=this.props;this._unobserveCb=c0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:S,entry:w}=this.state;return e({inView:S,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:l,onChange:i,skip:s,trackVisibility:a,delay:c,initialInView:v,fallbackInView:m,...h}=this.props;return T.createElement(t||"div",{ref:this.handleNode,...h},e)}};function f0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:l,skip:i,initialInView:s,fallbackInView:a,onChange:c}={}){var v;const[m,h]=T.useState(null),S=T.useRef(),[w,y]=T.useState({inView:!!s,entry:void 0});S.current=c,T.useEffect(()=>{if(i||!m)return;let d;return d=c0(m,(p,x)=>{y({inView:p,entry:x}),S.current&&S.current(p,x),x.isIntersecting&&l&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,o,r,l,i,n,a,t]);const P=(v=w.entry)==null?void 0:v.target,f=T.useRef();!m&&P&&!l&&!i&&f.current!==P&&(f.current=P,y({inView:!!s,entry:void 0}));const u=[h,w.inView,w.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var d0={exports:{}},U={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs=Symbol.for("react.element"),ea=Symbol.for("react.portal"),dl=Symbol.for("react.fragment"),pl=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),hl=Symbol.for("react.provider"),vl=Symbol.for("react.context"),em=Symbol.for("react.server_context"),yl=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),wl=Symbol.for("react.suspense_list"),Sl=Symbol.for("react.memo"),xl=Symbol.for("react.lazy"),tm=Symbol.for("react.offscreen"),p0;p0=Symbol.for("react.module.reference");function Ue(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bs:switch(e=e.type,e){case dl:case ml:case pl:case gl:case wl:return e;default:switch(e=e&&e.$$typeof,e){case em:case vl:case yl:case xl:case Sl:case hl:return e;default:return t}}case ea:return t}}}U.ContextConsumer=vl;U.ContextProvider=hl;U.Element=bs;U.ForwardRef=yl;U.Fragment=dl;U.Lazy=xl;U.Memo=Sl;U.Portal=ea;U.Profiler=ml;U.StrictMode=pl;U.Suspense=gl;U.SuspenseList=wl;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return Ue(e)===vl};U.isContextProvider=function(e){return Ue(e)===hl};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bs};U.isForwardRef=function(e){return Ue(e)===yl};U.isFragment=function(e){return Ue(e)===dl};U.isLazy=function(e){return Ue(e)===xl};U.isMemo=function(e){return Ue(e)===Sl};U.isPortal=function(e){return Ue(e)===ea};U.isProfiler=function(e){return Ue(e)===ml};U.isStrictMode=function(e){return Ue(e)===pl};U.isSuspense=function(e){return Ue(e)===gl};U.isSuspenseList=function(e){return Ue(e)===wl};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===dl||e===ml||e===pl||e===gl||e===wl||e===tm||typeof e=="object"&&e!==null&&(e.$$typeof===xl||e.$$typeof===Sl||e.$$typeof===hl||e.$$typeof===vl||e.$$typeof===yl||e.$$typeof===p0||e.getModuleId!==void 0)};U.typeOf=Ue;d0.exports=U;var nm=d0.exports;E`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;E`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;E`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;E`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;E`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;E`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const rm=E`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,om=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lm=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,im=E`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sm=E`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ta=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,am=E`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,um=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,cm=E`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fm=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dm=E`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pm=E`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mm=E`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function hm({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=ta,iterationCount:o=1}){return u0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function vm(e){return e==null}function ym(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function m0(e,t){return n=>n?e():t()}function xr(e){return m0(e,()=>null)}function Gi(e){return xr(()=>({opacity:0}))(e)}const h0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:l=0,keyframes:i=ta,triggerOnce:s=!1,className:a,style:c,childClassName:v,childStyle:m,children:h,onVisibilityChange:S}=e,w=T.useMemo(()=>hm({keyframes:i,duration:o}),[o,i]);return vm(h)?null:ym(h)?re(wm,{...e,animationStyles:w,children:String(h)}):nm.isFragment(h)?re(v0,{...e,animationStyles:w}):re(Wp,{children:T.Children.map(h,(y,P)=>{if(!T.isValidElement(y))return null;const f=r+(t?P*o*n:0);switch(y.type){case"ol":case"ul":return re(ql,{children:({cx:u})=>re(y.type,{...y.props,className:u(a,y.props.className),style:Object.assign({},c,y.props.style),children:re(h0,{...e,children:y.props.children})})});case"li":return re(Su,{threshold:l,triggerOnce:s,onChange:S,children:({inView:u,ref:d})=>re(ql,{children:({cx:p})=>re(y.type,{...y.props,ref:d,className:p(v,y.props.className),css:xr(()=>w)(u),style:Object.assign({},m,y.props.style,Gi(!u),{animationDelay:f+"ms"})})})});default:return re(Su,{threshold:l,triggerOnce:s,onChange:S,children:({inView:u,ref:d})=>re("div",{ref:d,className:a,css:xr(()=>w)(u),style:Object.assign({},c,Gi(!u),{animationDelay:f+"ms"}),children:re(ql,{children:({cx:p})=>re(y.type,{...y.props,className:p(v,y.props.className),style:Object.assign({},m,y.props.style)})})})})}})})},gm={display:"inline-block",whiteSpace:"pre"},wm=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:l=1e3,fraction:i=0,triggerOnce:s=!1,className:a,style:c,children:v,onVisibilityChange:m}=e,{ref:h,inView:S}=f0({triggerOnce:s,threshold:i,onChange:m});return m0(()=>re("div",{ref:h,className:a,style:Object.assign({},c,gm),children:v.split("").map((w,y)=>re("span",{css:xr(()=>t)(S),style:{animationDelay:o+y*l*r+"ms"},children:w},y))}),()=>re(v0,{...e,children:v}))(n)},v0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:l,children:i,onVisibilityChange:s}=e,{ref:a,inView:c}=f0({triggerOnce:r,threshold:n,onChange:s});return re("div",{ref:a,className:o,css:xr(()=>t)(c),style:Object.assign({},l,Gi(!c)),children:i})};E`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;E`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Sm=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,xm=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Cm=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,km=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Em=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,_m=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Nm=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,zm=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Lm=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Pm=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Tm=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,jm=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Im=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Mm(e,t,n){switch(n){case"bottom-left":return t?xm:om;case"bottom-right":return t?Cm:lm;case"down":return e?t?Em:sm:t?km:im;case"left":return e?t?Nm:am:t?_m:ta;case"right":return e?t?Lm:cm:t?zm:um;case"top-left":return t?Pm:fm;case"top-right":return t?Tm:dm;case"up":return e?t?Im:mm:t?jm:pm;default:return t?Sm:rm}}const Om=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,l=T.useMemo(()=>Mm(t,r,n),[t,n,r]);return re(h0,{keyframes:l,...o})};E`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;E`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;E`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function xu({page:e}){return g.jsx("section",{id:e,children:e==="home"?g.jsxs("div",{className:"whoami-home",children:[g.jsx("h1",{children:"Hi, I'm Allan Varcoe"}),g.jsx("h2",{children:"I build web applications"}),g.jsx("h3",{style:{textAlign:"center"},children:"And I'm really good at it"})]}):e==="intro"?g.jsxs("div",{className:"whoami-outer",children:[g.jsx("div",{className:"whoami-heading",children:g.jsx("h2",{children:"Who am I?"})}),g.jsxs("div",{className:"whoami-inner",children:[g.jsx("h3",{children:"I'm an experienced full-stack developer and architect"}),g.jsxs("p",{children:["I am an experienced senior architect and developer with a diverse background across various enterprises of different complexity and size. Throughout my career, I have had the privilege of contributing to the success of several startups, assuming roles such as CTO, Lead Architect, or Lead Developer. In larger corporate settings, I have often taken on responsibilities as an Enterprise or Solutions Architect, specializing in the Microsoft Dynamics space.",g.jsx("br",{}),g.jsx("br",{}),"In my recent ventures, I have focused on designing and building web-based applications from the ground up, utilizing technologies like React and Node. With a strong emphasis on usability, scalability and efficiency, I have leveraged Azure for infrastructure and DevOps support. I remain dedicated to continuously honing my skills and delivering impactful solutions for clients and users alike."]}),g.jsx("h3",{children:"With a focus on communication and usability"}),g.jsxs("p",{children:["In addition to my experience as a developer, I possess effective communication skills that enable me to engage with stakeholders at all levels. I have a knack for understanding requirements and empathizing with end-users, ensuring that the solutions I create meet their needs.",g.jsx("br",{}),g.jsx("br",{}),"Whether working as part of a team or independently, I bring strong project management skills to the table. I strive to keep clients informed and updated on project progress, maintaining open lines of communication throughout. I am adaptable and can work well in both collaborative team environments and as an independent contributor."]})]})]}):null})}const Rm=e=>T.createElement("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"100px",height:"100px",...e},T.createElement("path",{d:"M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"})),$m=e=>T.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",width:"100px",height:"100px",style:{enableBackground:"new 0 0 500 500"},xmlSpace:"preserve",...e},T.createElement("style",{type:"text/css"},`\r
	.st0{fill:#ffffff;}\r
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#000000;}\r
	.st2{fill:#000000;}\r
	`),T.createElement("g",{id:"Portfolio",transform:"translate(2303 664)"},T.createElement("path",{id:"_23",className:"st0",d:"M-2199.2-626.6h292.3c36.7,0,66.4,29.7,66.4,66.4v292.3c0,36.7-29.7,66.4-66.4,66.4h-292.3 c-36.7,0-66.4-29.7-66.4-66.4v-292.3C-2265.6-596.9-2235.9-626.6-2199.2-626.6z"}),T.createElement("path",{id:"_46",className:"st1",d:"M-2058-398.1L-2058-398.1c-14.1,10.2-31.9,15.2-53.3,15.2h-9l-2.7-0.1v57.6c0,1.2-0.4,2.3-1.3,3.1 c-0.9,0.7-2,1.1-3.1,1h-28.5c-2.2,0.1-4-1.5-4.2-3.7c0-0.2,0-0.3,0-0.5v-173.9c0-1,0.3-2.1,1-2.9c0.7-0.8,1.8-1.3,2.9-1.3 c11.5-0.4,27.7-0.5,48.5-0.5c24,0,42.1,5.5,53.8,17.1c11.6,10.9,18.1,26.3,17.6,42.3C-2036.4-424.3-2043.5-408.7-2058-398.1z  M-2082.4-466.6L-2082.4-466.6c-5.8-5.4-14.1-8.3-25.4-8.3c-7.4,0-12.4,0.1-15.2,0.3v62.1c2.8,0.2,7.2,0.3,13.3,0.3 c9.3,0.4,18.6-2.2,26.4-7.4c6.4-4.8,9.8-12.8,9.8-24.5C-2073-452.5-2076.2-460.8-2082.4-466.6L-2082.4-466.6z"}),T.createElement("path",{id:"_47",className:"st2",d:"M-1955.8-484c-3.1,5.1-4.4,11.1-4,17v10.1h20.3c2.2-0.1,4,1.5,4.2,3.7c0,0.2,0,0.3,0,0.5v19.9 c0,1.1-0.3,2.2-1,3c-0.7,0.8-1.7,1.3-2.8,1.4l-0.2,0h-20.5v102.7c0.2,2.3-1.6,4.3-3.8,4.4c-0.2,0-0.4,0-0.6,0h-28.5 c-2.3,0.2-4.3-1.6-4.4-3.8c0-0.2,0-0.4,0-0.6v-102.7h-13.3c-1.2,0-2.3-0.5-3-1.5c-0.6-0.9-0.9-1.9-0.9-3v-19.9c0-1,0.3-2.1,1-2.9 c0.7-0.8,1.8-1.3,2.9-1.3h13.3v-7.4c-0.4-10.8,1.8-21.6,6.4-31.4c3.6-7.6,9.3-14.1,16.5-18.5c7.6-4.3,16.2-6.4,24.9-6.2 c5.7-0.3,11.4,0.6,16.7,2.6c1,0.3,1.8,1,2.3,1.9c0.5,0.9,0.8,1.9,0.7,2.9v21.8c0.1,1.2-0.4,2.5-1.3,3.3c-1.1,0.8-2.6,1-3.8,0.4 c-3.1-1.2-6.3-1.8-9.6-1.7C-1948.8-489.5-1953.1-487.6-1955.8-484z"}))),Fm=e=>T.createElement("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"100px",height:"100px",...e},T.createElement("path",{d:"M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"}));function Dm(){return g.jsx("section",{id:"contact",children:g.jsxs("div",{className:"contact-inner",children:[g.jsx("div",{className:"contact-image"}),g.jsxs("div",{className:"contact-text",children:[g.jsx("h3",{children:"Get in contact"}),g.jsxs("h4",{children:["Allan Varcoe",g.jsx("br",{}),g.jsx("br",{})]}),g.jsxs("p",{children:["I'm located in Stockholm, Sweden and available for contract and freelance work. Please drop me a line at:"," ",g.jsx("a",{href:"mailto:allan.varcoe@gmail.com",children:"allan.varcoe@gmail.com"})]}),g.jsxs("div",{className:"contact-links",children:[g.jsx("a",{href:"https://www.linkedin.com/in/allanvarcoe",target:"_blank",rel:"noreferrer",children:g.jsx(Rm,{})}),g.jsx("a",{href:"https://allanvarcoe.myportfolio.com",target:"_blank",rel:"noreferrer",children:g.jsx($m,{})}),g.jsx("a",{href:"mailto:allan.varcoe@gmail.com",target:"_blank",rel:"noreferrer",children:g.jsx(Fm,{})})]})]})]})})}const Am=e=>T.createElement("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"100px",height:"100px",fillRule:"evenodd",clipRule:"evenodd",...e},T.createElement("path",{d:"M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9509974 22.90625 7.4023438 C 21.147758 5.9719089 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.404125 12.173992 10.763672 14.412109 C 10.888559 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671996 41.431263 26.366006 42.068338 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.413715 46.164908 36.748047 45.394531 C 38.082379 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.855304 39.195312 35.617188 C 39.031899 34.599965 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677151 15.800695 32.435744 15.435401 30.046875 15.220703 C 28.847638 13.559329 27.615404 12.045781 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015452 7.6275969 21.642578 8.9511719 C 22.267037 9.4591336 22.905298 10.047651 23.548828 10.673828 C 22.297283 12.027473 21.054862 13.55414 19.847656 15.230469 C 17.468889 15.449074 15.236606 15.81635 13.201172 16.310547 C 13.014826 15.545537 12.849558 14.798586 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.238404 12.677734 8.9140625 C 12.960128 7.5897208 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791172 13.029071 26.605956 13.99916 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.91454 18.402344 28.810547 C 17.668186 27.538949 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.548828 17.410156 C 33.197299 17.615841 34.745083 17.901405 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725422 19.243926 32.140408 18.316416 31.548828 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398803 20.758169 13.190811 22.834118 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 15.341797 27.365234 C 15.762496 28.177853 16.200028 28.993283 16.671875 29.810547 C 17.041048 30.449973 17.418073 31.072393 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 34.619141 27.365234 C 35.143284 28.605725 35.599609 29.819681 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765252 28.981717 34.201083 28.171917 34.619141 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.64638 35.904859 22.092967 37.709497 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842987 33.980548 37.069013 34.98935 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.468699 43.247993 35.748047 43.664062 C 35.027395 44.080132 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.399747 28.314453 41.076172 C 27.678439 40.558811 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882144 35.473968 21.867188 34.101562 z",clipRule:"evenodd",fillRule:"evenodd"})),Bm=e=>T.createElement("svg",{fill:"#FFFFFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"100px",height:"100px",...e},T.createElement("path",{d:"M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"}));function Um(){return g.jsx("section",{id:"skills",children:g.jsxs("div",{className:"skills-outer",children:[g.jsx("div",{className:"skills-heading",children:g.jsx("h2",{children:"What I do"})}),g.jsxs("div",{className:"skills-inner",children:[g.jsxs("div",{className:"skills-skill",children:[g.jsxs("h3",{children:["Frontend",g.jsx(Am,{})]}),g.jsx("p",{children:"I develop fast, maintainable, and stable web applications with a strong emphasis on design and usability."})]}),g.jsxs("div",{className:"skills-skill",children:[g.jsx("div",{children:g.jsxs("h3",{children:["Backend",g.jsx(Bm,{})]})}),g.jsx("p",{children:"I design and develop efficient, high-performing backend solutions using technologies like PowerApps/Dataverse, Azure Functions, NodeJS, Express, CosmosDB/MongoDB. My focus is on creating maintainable solutions that stand the test of time."})]}),g.jsxs("div",{className:"skills-skill",children:[g.jsx("h3",{children:"Usability"}),g.jsx("p",{children:"I have the ability to understand what works for the users and how they will use the solution. Whatever we build together there will be a user there, and it's for them we design and develop."})]}),g.jsxs("div",{className:"skills-skill",children:[g.jsx("h3",{children:"Architecture"}),g.jsx("p",{children:"With extensive experience in the field, I consistently prioritize the long-term stability, high performance, and maintainability of the solutions I design and develop. As a freelance consultant, I understand the importance of creating solutions that can be seamlessly maintained and built upon by others."})]})]})]})})}const Vm=e=>T.createElement("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"100px",height:"100px",...e},T.createElement("path",{d:"M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"}));function Bn({to:e,active:t,children:n}){return g.jsx("div",{className:`topmenu-item ${t?"active":""}`,onClick:()=>{var r;return(r=document.getElementById(e))==null?void 0:r.scrollIntoView({behavior:"smooth"})},children:n})}const Wm=Ye.forwardRef(function({active:t},n){return g.jsxs("div",{className:"topmenu",ref:n,children:[g.jsx(Bn,{to:"home",active:t==="home",children:g.jsx(Vm,{})}),g.jsx(Bn,{to:"intro",active:t==="intro",children:g.jsx("span",{children:"Who am I?"})}),g.jsx(Bn,{to:"portfolio",active:t==="portfolio",children:g.jsx("span",{children:"Portfolio"})}),g.jsx(Bn,{to:"skills",active:t==="skills",children:g.jsx("span",{children:"What I do"})}),g.jsx(Bn,{to:"contact",active:t==="contact",children:g.jsx("span",{children:"Contact"})})]})}),Hm=e=>T.createElement("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"96px",height:"96px",...e},T.createElement("path",{d:"M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"}));function Ym({to:e}){return e?g.jsx("a",{href:e,target:"_blank",rel:"noreferrer",children:g.jsx(Hm,{})}):null}function Qm({items:e}){return g.jsx("div",{className:"gallery-skills",children:g.jsx("small",{children:e.map((t,n)=>g.jsx(Ye.Fragment,{children:g.jsx("span",{children:t})},n))})})}function Xm({image:e,video:t,handleClose:n}){return Ye.useEffect(()=>{const r=o=>{o.key==="Escape"&&n()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[n]),g.jsxs("div",{className:"gallery-expanded",children:[t?g.jsx("video",{className:"gallery-expanded-video",poster:e,onClick:n,autoPlay:!0,muted:!0,loop:!0,children:g.jsx("source",{src:t,type:"video/mp4"})}):g.jsx("img",{className:"gallery-expanded-image",src:e,alt:"Portfolio image",onClick:n}),g.jsx("div",{className:"gallery-close-button",onClick:()=>n(),children:g.jsx("p",{children:"Close"})})]})}function Un({id:e,image:t,video:n,heading:r,subheading:o,items:l,to:i,handleExpand:s,children:a}){return g.jsx("section",{className:"gallery",id:e,children:g.jsxs("div",{className:"gallery-inner",children:[g.jsxs("div",{className:"gallery-item",children:[g.jsxs("div",{className:"gallery-text",children:[g.jsxs("h3",{children:[r,g.jsx(Ym,{to:i})]}),g.jsx("h4",{children:o}),a]}),g.jsx(Qm,{items:l})]}),n?g.jsx("video",{className:"gallery-video",poster:t,onClick:s,autoPlay:!0,muted:!0,loop:!0,children:g.jsx("source",{src:n,type:"video/mp4"})}):g.jsx("img",{className:"gallery-image",src:t,alt:"Portfolio image",onClick:s})]})})}const Cu="/assets/prompter-DiDYJ1tJ.png",ku="/assets/wahzaa-C3TKYtSc.jpg",Eu="/assets/wahzaa_portfolio-BPU_GTxx.mp4",_u="/assets/campaign-Bf65QmVZ.png",Nu="/assets/trailnotes-DrePfsnJ.png",zu="/assets/coapp-BWzLV5Bi.jpg",Lu="/assets/coapp_portfolio-Fjp-LYaa.mp4";function Km(e){if(!e)return;const t=e.getBoundingClientRect();return t.top>=0&&t.top<=200}function Gm(){const[e,t]=Ye.useState("home"),[n,r]=Ye.useState(),o=Ye.useRef(null),l=()=>{for(const i of["home","intro","portfolio","skills","contact"]){const s=document.getElementById(i);if(Km(s)){t(i);break}}};return Ye.useEffect(()=>{n?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},[n]),Ye.useEffect(()=>{var i,s;e!=="home"&&e!=="intro"?(i=o.current)==null||i.classList.add("topmenu-hidden"):(s=o.current)==null||s.classList.remove("topmenu-hidden")},[e]),Ye.useEffect(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)})),g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"background"}),g.jsxs("div",{className:"app",children:[g.jsx(Wm,{active:e,ref:o}),n?g.jsx(Xm,{image:n.image,video:n.video,handleClose:()=>r(void 0)}):null,g.jsxs(Om,{children:[g.jsx(xu,{page:"home"}),g.jsx(xu,{page:"intro"}),g.jsx(Un,{id:"portfolio",image:ku,video:Eu,heading:"Wahzaa",subheading:"Full-stack developer",items:["React","Node","MongoDB","Azure Functions","Stripe"],to:"https://www.wahzaa.com",handleExpand:()=>r({image:ku,video:Eu}),children:g.jsx("p",{children:"Led the design and development of a high-performance and user-friendly subscription-based SaaS platform catering to the music tech industry. Successfully implemented both frontend and backend systems, meeting stringent performance requirements. Seamlessly integrated with multiple systems, including Stripe for secure and reliable recurring payments, ensuring a smooth user experience and streamlined business operations."})}),g.jsx(Un,{image:Nu,heading:"TrailNotes",subheading:"Full-stack developer",items:["React","Node","Azure Functions","Cosmos DB"],to:"https://trailnotes.app",handleExpand:()=>r({image:Nu}),children:g.jsx("p",{children:"I have designed and developed an engaging online service tailored for planning and cherishing your adventures. This map-based and interactive platform enables users to effortlessly create, store, and share captivating notes enriched with maps and images. The service offers a seamless experience for organizing and remembering your journeys while providing beautifully formatted visuals to enhance the storytelling aspect of your adventures."})}),g.jsx(Un,{image:zu,video:Lu,heading:"Embla Medical",subheading:"Lead developer and architect",items:["PowerApps","Dataverse","React","Node","Azure Functions"],to:"https://https://www.emblamedical.com",handleExpand:()=>r({image:zu,video:Lu}),children:g.jsx("p",{children:"As the lead architect and developer, I headed the design and development of a comprehensive solution hosted on PowerApps/Dataverse with several React-based PCF-components. This groundbreaking platform empowers medical professionals to design, customize, and order custom orthosis and prosthetics in a user friendly and modern solution. Additionally, the solution encompasses production management capabilities, providing technicians with a holistic view of the entire process."})}),g.jsx(Un,{image:Cu,heading:"Prompter",subheading:"Full-stack developer",items:["React","Node","Azure Functions","Cosmos DB"],handleExpand:()=>r({image:Cu}),children:g.jsx("p",{children:"Designed and developed a sophisticated text analytics service utilizing DISC-profiles. The frontend was built as a Microsoft Outlook Add-on, offering seamless integration for users. The backend, powered by NodeJS and Azure Functions, leverages a combination of online AI services to deliver comprehensive natural language analytics functionality."})}),g.jsx(Un,{image:_u,heading:"Campaign sites",subheading:"Full-stack developer",items:["React","Node","MongoDB"],handleExpand:()=>r({image:_u}),children:g.jsx("p",{children:"Designed and developed a platform for creating dynamic content campaign sites. The campaign sites enables rapid development and experimentation at scale."})}),g.jsx(Um,{}),g.jsx(Dm,{})]})]})]})}Q1.polyfill();const Zm=document.getElementById("root"),Jm=Wf(Zm);Jm.render(g.jsx(Ye.StrictMode,{children:g.jsx(Gm,{})}));
