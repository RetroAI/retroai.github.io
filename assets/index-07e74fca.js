function G_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Op(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kp={exports:{}},cl={},Bp={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=Symbol.for("react.element"),W_=Symbol.for("react.portal"),X_=Symbol.for("react.fragment"),j_=Symbol.for("react.strict_mode"),Y_=Symbol.for("react.profiler"),q_=Symbol.for("react.provider"),$_=Symbol.for("react.context"),K_=Symbol.for("react.forward_ref"),Z_=Symbol.for("react.suspense"),Q_=Symbol.for("react.memo"),J_=Symbol.for("react.lazy"),nd=Symbol.iterator;function ev(t){return t===null||typeof t!="object"?null:(t=nd&&t[nd]||t["@@iterator"],typeof t=="function"?t:null)}var zp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hp=Object.assign,Vp={};function xs(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||zp}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gp(){}Gp.prototype=xs.prototype;function Xc(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||zp}var jc=Xc.prototype=new Gp;jc.constructor=Xc;Hp(jc,xs.prototype);jc.isPureReactComponent=!0;var id=Array.isArray,Wp=Object.prototype.hasOwnProperty,Yc={current:null},Xp={key:!0,ref:!0,__self:!0,__source:!0};function jp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wp.call(e,i)&&!Xp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Mo,type:t,key:s,ref:o,props:r,_owner:Yc.current}}function tv(t,e){return{$$typeof:Mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mo}function nv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rd=/\/+/g;function Ol(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nv(""+t.key):e.toString(36)}function xa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mo:case W_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ol(o,0):i,id(r)?(n="",t!=null&&(n=t.replace(rd,"$&/")+"/"),xa(r,e,n,"",function(u){return u})):r!=null&&(qc(r)&&(r=tv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(rd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",id(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ol(s,a);o+=xa(s,e,n,l,r)}else if(l=ev(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ol(s,a++),o+=xa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function No(t,e,n){if(t==null)return t;var i=[],r=0;return xa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function iv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Sa={transition:null},rv={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Sa,ReactCurrentOwner:Yc};Be.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!qc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=xs;Be.Fragment=X_;Be.Profiler=Y_;Be.PureComponent=Xc;Be.StrictMode=j_;Be.Suspense=Z_;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rv;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wp.call(e,l)&&!Xp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Mo,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:$_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:q_,_context:t},t.Consumer=t};Be.createElement=jp;Be.createFactory=function(t){var e=jp.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:K_,render:t}};Be.isValidElement=qc;Be.lazy=function(t){return{$$typeof:J_,_payload:{_status:-1,_result:t},_init:iv}};Be.memo=function(t,e){return{$$typeof:Q_,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Sa.transition;Sa.transition={};try{t()}finally{Sa.transition=e}};Be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Be.useCallback=function(t,e){return Xt.current.useCallback(t,e)};Be.useContext=function(t){return Xt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return Xt.current.useEffect(t,e)};Be.useId=function(){return Xt.current.useId()};Be.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return Xt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};Be.useRef=function(t){return Xt.current.useRef(t)};Be.useState=function(t){return Xt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return Xt.current.useTransition()};Be.version="18.2.0";Bp.exports=Be;var he=Bp.exports;const Yp=Op(he),sv=G_({__proto__:null,default:Yp},[he]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov=he,av=Symbol.for("react.element"),lv=Symbol.for("react.fragment"),uv=Object.prototype.hasOwnProperty,cv=ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fv={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)uv.call(e,i)&&!fv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:av,type:t,key:s,ref:o,props:r,_owner:cv.current}}cl.Fragment=lv;cl.jsx=qp;cl.jsxs=qp;kp.exports=cl;var $e=kp.exports;var $p={exports:{}},dn={},Kp={exports:{}},Zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,B){var z=F.length;F.push(B);e:for(;0<z;){var L=z-1>>>1,O=F[L];if(0<r(O,B))F[L]=B,F[z]=O,z=L;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var B=F[0],z=F.pop();if(z!==B){F[0]=z;e:for(var L=0,O=F.length,oe=O>>>1;L<oe;){var ae=2*(L+1)-1,ce=F[ae],me=ae+1,Se=F[me];if(0>r(ce,z))me<O&&0>r(Se,ce)?(F[L]=Se,F[me]=z,L=me):(F[L]=ce,F[ae]=z,L=ae);else if(me<O&&0>r(Se,z))F[L]=Se,F[me]=z,L=me;else break e}}return B}function r(F,B){var z=F.sortIndex-B.sortIndex;return z!==0?z:F.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,m=!1,x=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=F)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function S(F){if(v=!1,g(F),!x)if(n(l)!==null)x=!0,Y(T);else{var B=n(u);B!==null&&j(S,B.startTime-F)}}function T(F,B){x=!1,v&&(v=!1,c(U),U=-1),m=!0;var z=d;try{for(g(B),h=n(l);h!==null&&(!(h.expirationTime>B)||F&&!X());){var L=h.callback;if(typeof L=="function"){h.callback=null,d=h.priorityLevel;var O=L(h.expirationTime<=B);B=t.unstable_now(),typeof O=="function"?h.callback=O:h===n(l)&&i(l),g(B)}else i(l);h=n(l)}if(h!==null)var oe=!0;else{var ae=n(u);ae!==null&&j(S,ae.startTime-B),oe=!1}return oe}finally{h=null,d=z,m=!1}}var C=!1,R=null,U=-1,E=5,w=-1;function X(){return!(t.unstable_now()-w<E)}function q(){if(R!==null){var F=t.unstable_now();w=F;var B=!0;try{B=R(!0,F)}finally{B?Z():(C=!1,R=null)}}else C=!1}var Z;if(typeof _=="function")Z=function(){_(q)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,W=b.port2;b.port1.onmessage=q,Z=function(){W.postMessage(null)}}else Z=function(){p(q,0)};function Y(F){R=F,C||(C=!0,Z())}function j(F,B){U=p(function(){F(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,Y(T))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var z=d;d=B;try{return F()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var z=d;d=F;try{return B()}finally{d=z}},t.unstable_scheduleCallback=function(F,B,z){var L=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?L+z:L):z=L,F){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=z+O,F={id:f++,callback:B,priorityLevel:F,startTime:z,expirationTime:O,sortIndex:-1},z>L?(F.sortIndex=z,e(u,F),n(l)===null&&F===n(u)&&(v?(c(U),U=-1):v=!0,j(S,z-L))):(F.sortIndex=O,e(l,F),x||m||(x=!0,Y(T))),F},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(F){var B=d;return function(){var z=d;d=B;try{return F.apply(this,arguments)}finally{d=z}}}})(Zp);Kp.exports=Zp;var dv=Kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp=he,fn=dv;function K(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jp=new Set,no={};function xr(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(no[t]=e,t=0;t<e.length;t++)Jp.add(e[t])}var ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=Object.prototype.hasOwnProperty,hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sd={},od={};function pv(t){return zu.call(od,t)?!0:zu.call(sd,t)?!1:hv.test(t)?od[t]=!0:(sd[t]=!0,!1)}function mv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gv(t,e,n,i){if(e===null||typeof e>"u"||mv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $c=/[\-:]([a-z])/g;function Kc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($c,Kc);Pt[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($c,Kc);Pt[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($c,Kc);Pt[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zc(t,e,n,i){var r=Pt.hasOwnProperty(e)?Pt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gv(e,n,r,i)&&(n=null),i||r===null?pv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var di=Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),Qc=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),Jc=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),xi=Symbol.for("react.lazy"),nm=Symbol.for("react.offscreen"),ad=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=ad&&t[ad]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Object.assign,kl;function Hs(t){if(kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kl=e&&e[1]||""}return`
`+kl+t}var Bl=!1;function zl(t,e){if(!t||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hs(t):""}function _v(t){switch(t.tag){case 5:return Hs(t.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return t=zl(t.type,!1),t;case 11:return t=zl(t.type.render,!1),t;case 1:return t=zl(t.type,!0),t;default:return""}}function Wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Hr:return"Portal";case Hu:return"Profiler";case Qc:return"StrictMode";case Vu:return"Suspense";case Gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tm:return(t.displayName||"Context")+".Consumer";case em:return(t._context.displayName||"Context")+".Provider";case Jc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ef:return e=t.displayName||null,e!==null?e:Wu(t.type)||"Memo";case xi:e=t._payload,t=t._init;try{return Wu(t(e))}catch{}}return null}function vv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wu(e);case 8:return e===Qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function im(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xv(t){var e=im(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fo(t){t._valueTracker||(t._valueTracker=xv(t))}function rm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=im(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xu(t,e){var n=e.checked;return ot({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ld(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sm(t,e){e=e.checked,e!=null&&Zc(t,"checked",e,!1)}function ju(t,e){sm(t,e);var n=zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yu(t,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ud(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yu(t,e,n){(e!=="number"||Ua(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(K(91));return ot({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(K(92));if(Vs(n)){if(1<n.length)throw Error(K(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zi(n)}}function om(t,e){var n=zi(e.value),i=zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oo,lm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sv=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(t){Sv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),js[e]=js[t]})});function um(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||js.hasOwnProperty(t)&&js[t]?(""+e).trim():e+"px"}function cm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=um(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var yv=ot({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(t,e){if(e){if(yv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(K(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(K(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(K(61))}if(e.style!=null&&typeof e.style!="object")throw Error(K(62))}}function Zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qu=null;function tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ju=null,ts=null,ns=null;function dd(t){if(t=Ao(t)){if(typeof Ju!="function")throw Error(K(280));var e=t.stateNode;e&&(e=ml(e),Ju(t.stateNode,t.type,e))}}function fm(t){ts?ns?ns.push(t):ns=[t]:ts=t}function dm(){if(ts){var t=ts,e=ns;if(ns=ts=null,dd(t),e)for(t=0;t<e.length;t++)dd(e[t])}}function hm(t,e){return t(e)}function pm(){}var Hl=!1;function mm(t,e,n){if(Hl)return t(e,n);Hl=!0;try{return hm(t,e,n)}finally{Hl=!1,(ts!==null||ns!==null)&&(pm(),dm())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var i=ml(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(K(231,e,typeof n));return n}var ec=!1;if(ai)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){ec=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{ec=!1}function Ev(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Ys=!1,Da=null,Na=!1,tc=null,Mv={onError:function(t){Ys=!0,Da=t}};function Tv(t,e,n,i,r,s,o,a,l){Ys=!1,Da=null,Ev.apply(Mv,arguments)}function wv(t,e,n,i,r,s,o,a,l){if(Tv.apply(this,arguments),Ys){if(Ys){var u=Da;Ys=!1,Da=null}else throw Error(K(198));Na||(Na=!0,tc=u)}}function Sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hd(t){if(Sr(t)!==t)throw Error(K(188))}function Av(t){var e=t.alternate;if(!e){if(e=Sr(t),e===null)throw Error(K(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return hd(r),t;if(s===i)return hd(r),e;s=s.sibling}throw Error(K(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?t:e}function _m(t){return t=Av(t),t!==null?vm(t):null}function vm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vm(t);if(e!==null)return e;t=t.sibling}return null}var xm=fn.unstable_scheduleCallback,pd=fn.unstable_cancelCallback,Rv=fn.unstable_shouldYield,Cv=fn.unstable_requestPaint,ct=fn.unstable_now,Pv=fn.unstable_getCurrentPriorityLevel,nf=fn.unstable_ImmediatePriority,Sm=fn.unstable_UserBlockingPriority,Ia=fn.unstable_NormalPriority,Lv=fn.unstable_LowPriority,ym=fn.unstable_IdlePriority,fl=null,Vn=null;function bv(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:Nv,Uv=Math.log,Dv=Math.LN2;function Nv(t){return t>>>=0,t===0?32:31-(Uv(t)/Dv|0)|0}var ko=64,Bo=4194304;function Gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Gs(a):(s&=o,s!==0&&(i=Gs(s)))}else o=n&~r,o!==0?i=Gs(o):s!==0&&(i=Gs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Nn(e),r=1<<n,i|=t[n],e&=~r;return i}function Iv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Iv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Em(){var t=ko;return ko<<=1,!(ko&4194240)&&(ko=64),t}function Vl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function To(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function Ov(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Nn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Nn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var We=0;function Mm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tm,sf,wm,Am,Rm,ic=!1,zo=[],Ci=null,Pi=null,Li=null,so=new Map,oo=new Map,yi=[],kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(t,e){switch(t){case"focusin":case"focusout":Ci=null;break;case"dragenter":case"dragleave":Pi=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function Ls(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ao(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Bv(t,e,n,i,r){switch(e){case"focusin":return Ci=Ls(Ci,t,e,n,i,r),!0;case"dragenter":return Pi=Ls(Pi,t,e,n,i,r),!0;case"mouseover":return Li=Ls(Li,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return so.set(s,Ls(so.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oo.set(s,Ls(oo.get(s)||null,t,e,n,i,r)),!0}return!1}function Cm(t){var e=ir(t.target);if(e!==null){var n=Sr(e);if(n!==null){if(e=n.tag,e===13){if(e=gm(n),e!==null){t.blockedOn=e,Rm(t.priority,function(){wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qu=i,n.target.dispatchEvent(i),Qu=null}else return e=Ao(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function gd(t,e,n){ya(t)&&n.delete(e)}function zv(){ic=!1,Ci!==null&&ya(Ci)&&(Ci=null),Pi!==null&&ya(Pi)&&(Pi=null),Li!==null&&ya(Li)&&(Li=null),so.forEach(gd),oo.forEach(gd)}function bs(t,e){t.blockedOn===e&&(t.blockedOn=null,ic||(ic=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,zv)))}function ao(t){function e(r){return bs(r,t)}if(0<zo.length){bs(zo[0],t);for(var n=1;n<zo.length;n++){var i=zo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ci!==null&&bs(Ci,t),Pi!==null&&bs(Pi,t),Li!==null&&bs(Li,t),so.forEach(e),oo.forEach(e),n=0;n<yi.length;n++)i=yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<yi.length&&(n=yi[0],n.blockedOn===null);)Cm(n),n.blockedOn===null&&yi.shift()}var is=di.ReactCurrentBatchConfig,Oa=!0;function Hv(t,e,n,i){var r=We,s=is.transition;is.transition=null;try{We=1,of(t,e,n,i)}finally{We=r,is.transition=s}}function Vv(t,e,n,i){var r=We,s=is.transition;is.transition=null;try{We=4,of(t,e,n,i)}finally{We=r,is.transition=s}}function of(t,e,n,i){if(Oa){var r=rc(t,e,n,i);if(r===null)Ql(t,e,i,ka,n),md(t,i);else if(Bv(r,t,e,n,i))i.stopPropagation();else if(md(t,i),e&4&&-1<kv.indexOf(t)){for(;r!==null;){var s=Ao(r);if(s!==null&&Tm(s),s=rc(t,e,n,i),s===null&&Ql(t,e,i,ka,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ql(t,e,i,null,n)}}var ka=null;function rc(t,e,n,i){if(ka=null,t=tf(i),t=ir(t),t!==null)if(e=Sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ka=t,null}function Pm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pv()){case nf:return 1;case Sm:return 4;case Ia:case Lv:return 16;case ym:return 536870912;default:return 16}default:return 16}}var Mi=null,af=null,Ea=null;function Lm(){if(Ea)return Ea;var t,e=af,n=e.length,i,r="value"in Mi?Mi.value:Mi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ea=r.slice(t,1<i?1-i:void 0)}function Ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function _d(){return!1}function hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ho:_d,this.isPropagationStopped=_d,this}return ot(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),e}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=hn(Ss),wo=ot({},Ss,{view:0,detail:0}),Gv=hn(wo),Gl,Wl,Us,dl=ot({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(Gl=t.screenX-Us.screenX,Wl=t.screenY-Us.screenY):Wl=Gl=0,Us=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),vd=hn(dl),Wv=ot({},dl,{dataTransfer:0}),Xv=hn(Wv),jv=ot({},wo,{relatedTarget:0}),Xl=hn(jv),Yv=ot({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=hn(Yv),$v=ot({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kv=hn($v),Zv=ot({},Ss,{data:0}),xd=hn(Zv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=e0[t])?!!e[t]:!1}function uf(){return t0}var n0=ot({},wo,{key:function(t){if(t.key){var e=Qv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?Ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i0=hn(n0),r0=ot({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=hn(r0),s0=ot({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),o0=hn(s0),a0=ot({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),l0=hn(a0),u0=ot({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),c0=hn(u0),f0=[9,13,27,32],cf=ai&&"CompositionEvent"in window,qs=null;ai&&"documentMode"in document&&(qs=document.documentMode);var d0=ai&&"TextEvent"in window&&!qs,bm=ai&&(!cf||qs&&8<qs&&11>=qs),yd=String.fromCharCode(32),Ed=!1;function Um(t,e){switch(t){case"keyup":return f0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function h0(t,e){switch(t){case"compositionend":return Dm(e);case"keypress":return e.which!==32?null:(Ed=!0,yd);case"textInput":return t=e.data,t===yd&&Ed?null:t;default:return null}}function p0(t,e){if(Gr)return t==="compositionend"||!cf&&Um(t,e)?(t=Lm(),Ea=af=Mi=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bm&&e.locale!=="ko"?null:e.data;default:return null}}var m0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!m0[t.type]:e==="textarea"}function Nm(t,e,n,i){fm(i),e=Ba(e,"onChange"),0<e.length&&(n=new lf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $s=null,lo=null;function g0(t){Xm(t,0)}function hl(t){var e=jr(t);if(rm(e))return t}function _0(t,e){if(t==="change")return e}var Im=!1;if(ai){var jl;if(ai){var Yl="oninput"in document;if(!Yl){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),Yl=typeof Td.oninput=="function"}jl=Yl}else jl=!1;Im=jl&&(!document.documentMode||9<document.documentMode)}function wd(){$s&&($s.detachEvent("onpropertychange",Fm),lo=$s=null)}function Fm(t){if(t.propertyName==="value"&&hl(lo)){var e=[];Nm(e,lo,t,tf(t)),mm(g0,e)}}function v0(t,e,n){t==="focusin"?(wd(),$s=e,lo=n,$s.attachEvent("onpropertychange",Fm)):t==="focusout"&&wd()}function x0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(lo)}function S0(t,e){if(t==="click")return hl(e)}function y0(t,e){if(t==="input"||t==="change")return hl(e)}function E0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:E0;function uo(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zu.call(e,r)||!Fn(t[r],e[r]))return!1}return!0}function Ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rd(t,e){var n=Ad(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ad(n)}}function Om(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Om(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function km(){for(var t=window,e=Ua();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ua(t.document)}return e}function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function M0(t){var e=km(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Om(n.ownerDocument.documentElement,n)){if(i!==null&&ff(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rd(n,s);var o=Rd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var T0=ai&&"documentMode"in document&&11>=document.documentMode,Wr=null,sc=null,Ks=null,oc=!1;function Cd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||Wr==null||Wr!==Ua(i)||(i=Wr,"selectionStart"in i&&ff(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ks&&uo(Ks,i)||(Ks=i,i=Ba(sc,"onSelect"),0<i.length&&(e=new lf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Wr)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},ql={},Bm={};ai&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function pl(t){if(ql[t])return ql[t];if(!Xr[t])return t;var e=Xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bm)return ql[t]=e[n];return t}var zm=pl("animationend"),Hm=pl("animationiteration"),Vm=pl("animationstart"),Gm=pl("transitionend"),Wm=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gi(t,e){Wm.set(t,e),xr(e,[t])}for(var $l=0;$l<Pd.length;$l++){var Kl=Pd[$l],w0=Kl.toLowerCase(),A0=Kl[0].toUpperCase()+Kl.slice(1);Gi(w0,"on"+A0)}Gi(zm,"onAnimationEnd");Gi(Hm,"onAnimationIteration");Gi(Vm,"onAnimationStart");Gi("dblclick","onDoubleClick");Gi("focusin","onFocus");Gi("focusout","onBlur");Gi(Gm,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function Ld(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wv(i,e,void 0,t),t.currentTarget=null}function Xm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ld(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ld(r,a,u),s=l}}}if(Na)throw t=tc,Na=!1,tc=null,t}function Qe(t,e){var n=e[fc];n===void 0&&(n=e[fc]=new Set);var i=t+"__bubble";n.has(i)||(jm(e,t,2,!1),n.add(i))}function Zl(t,e,n){var i=0;e&&(i|=4),jm(n,t,i,e)}var Go="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[Go]){t[Go]=!0,Jp.forEach(function(n){n!=="selectionchange"&&(R0.has(n)||Zl(n,!1,t),Zl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Go]||(e[Go]=!0,Zl("selectionchange",!1,e))}}function jm(t,e,n,i){switch(Pm(e)){case 1:var r=Hv;break;case 4:r=Vv;break;default:r=of}n=r.bind(null,e,n,t),r=void 0,!ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ql(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}mm(function(){var u=s,f=tf(n),h=[];e:{var d=Wm.get(t);if(d!==void 0){var m=lf,x=t;switch(t){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":m=i0;break;case"focusin":x="focus",m=Xl;break;case"focusout":x="blur",m=Xl;break;case"beforeblur":case"afterblur":m=Xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=o0;break;case zm:case Hm:case Vm:m=qv;break;case Gm:m=l0;break;case"scroll":m=Gv;break;case"wheel":m=c0;break;case"copy":case"cut":case"paste":m=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Sd}var v=(e&4)!==0,p=!v&&t==="scroll",c=v?d!==null?d+"Capture":null:d;v=[];for(var _=u,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,c!==null&&(S=ro(_,c),S!=null&&v.push(fo(_,S,g)))),p)break;_=_.return}0<v.length&&(d=new m(d,x,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Qu&&(x=n.relatedTarget||n.fromElement)&&(ir(x)||x[li]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?ir(x):null,x!==null&&(p=Sr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(v=vd,S="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Sd,S="onPointerLeave",c="onPointerEnter",_="pointer"),p=m==null?d:jr(m),g=x==null?d:jr(x),d=new v(S,_+"leave",m,n,f),d.target=p,d.relatedTarget=g,S=null,ir(f)===u&&(v=new v(c,_+"enter",x,n,f),v.target=g,v.relatedTarget=p,S=v),p=S,m&&x)t:{for(v=m,c=x,_=0,g=v;g;g=Mr(g))_++;for(g=0,S=c;S;S=Mr(S))g++;for(;0<_-g;)v=Mr(v),_--;for(;0<g-_;)c=Mr(c),g--;for(;_--;){if(v===c||c!==null&&v===c.alternate)break t;v=Mr(v),c=Mr(c)}v=null}else v=null;m!==null&&bd(h,d,m,v,!1),x!==null&&p!==null&&bd(h,p,x,v,!0)}}e:{if(d=u?jr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=_0;else if(Md(d))if(Im)T=y0;else{T=x0;var C=v0}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=S0);if(T&&(T=T(t,u))){Nm(h,T,n,f);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Yu(d,"number",d.value)}switch(C=u?jr(u):window,t){case"focusin":(Md(C)||C.contentEditable==="true")&&(Wr=C,sc=u,Ks=null);break;case"focusout":Ks=sc=Wr=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,Cd(h,n,f);break;case"selectionchange":if(T0)break;case"keydown":case"keyup":Cd(h,n,f)}var R;if(cf)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Gr?Um(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(bm&&n.locale!=="ko"&&(Gr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Gr&&(R=Lm()):(Mi=f,af="value"in Mi?Mi.value:Mi.textContent,Gr=!0)),C=Ba(u,U),0<C.length&&(U=new xd(U,t,null,n,f),h.push({event:U,listeners:C}),R?U.data=R:(R=Dm(n),R!==null&&(U.data=R)))),(R=d0?h0(t,n):p0(t,n))&&(u=Ba(u,"onBeforeInput"),0<u.length&&(f=new xd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=R))}Xm(h,e)})}function fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ba(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ro(t,n),s!=null&&i.unshift(fo(t,s,r)),s=ro(t,e),s!=null&&i.push(fo(t,s,r))),t=t.return}return i}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ro(n,s),l!=null&&o.unshift(fo(n,l,a))):r||(l=ro(n,s),l!=null&&o.push(fo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var C0=/\r\n?/g,P0=/\u0000|\uFFFD/g;function Ud(t){return(typeof t=="string"?t:""+t).replace(C0,`
`).replace(P0,"")}function Wo(t,e,n){if(e=Ud(e),Ud(t)!==e&&n)throw Error(K(425))}function za(){}var ac=null,lc=null;function uc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,L0=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(t){return Dd.resolve(null).then(t).catch(U0)}:cc;function U0(t){setTimeout(function(){throw t})}function Jl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ao(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ao(e)}function bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Hn="__reactFiber$"+ys,ho="__reactProps$"+ys,li="__reactContainer$"+ys,fc="__reactEvents$"+ys,D0="__reactListeners$"+ys,N0="__reactHandles$"+ys;function ir(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[li]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nd(t);t!==null;){if(n=t[Hn])return n;t=Nd(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[Hn]||t[li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(K(33))}function ml(t){return t[ho]||null}var dc=[],Yr=-1;function Wi(t){return{current:t}}function tt(t){0>Yr||(t.current=dc[Yr],dc[Yr]=null,Yr--)}function Ke(t,e){Yr++,dc[Yr]=t.current,t.current=e}var Hi={},Ot=Wi(Hi),Qt=Wi(!1),dr=Hi;function us(t,e){var n=t.type.contextTypes;if(!n)return Hi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Jt(t){return t=t.childContextTypes,t!=null}function Ha(){tt(Qt),tt(Ot)}function Id(t,e,n){if(Ot.current!==Hi)throw Error(K(168));Ke(Ot,e),Ke(Qt,n)}function Ym(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(K(108,vv(t)||"Unknown",r));return ot({},n,i)}function Va(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hi,dr=Ot.current,Ke(Ot,t),Ke(Qt,Qt.current),!0}function Fd(t,e,n){var i=t.stateNode;if(!i)throw Error(K(169));n?(t=Ym(t,e,dr),i.__reactInternalMemoizedMergedChildContext=t,tt(Qt),tt(Ot),Ke(Ot,t)):tt(Qt),Ke(Qt,n)}var ei=null,gl=!1,eu=!1;function qm(t){ei===null?ei=[t]:ei.push(t)}function I0(t){gl=!0,qm(t)}function Xi(){if(!eu&&ei!==null){eu=!0;var t=0,e=We;try{var n=ei;for(We=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ei=null,gl=!1}catch(r){throw ei!==null&&(ei=ei.slice(t+1)),xm(nf,Xi),r}finally{We=e,eu=!1}}return null}var qr=[],$r=0,Ga=null,Wa=0,gn=[],_n=0,hr=null,ni=1,ii="";function Qi(t,e){qr[$r++]=Wa,qr[$r++]=Ga,Ga=t,Wa=e}function $m(t,e,n){gn[_n++]=ni,gn[_n++]=ii,gn[_n++]=hr,hr=t;var i=ni;t=ii;var r=32-Nn(i)-1;i&=~(1<<r),n+=1;var s=32-Nn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ni=1<<32-Nn(e)+r|n<<r|i,ii=s+t}else ni=1<<s|n<<r|i,ii=t}function df(t){t.return!==null&&(Qi(t,1),$m(t,1,0))}function hf(t){for(;t===Ga;)Ga=qr[--$r],qr[$r]=null,Wa=qr[--$r],qr[$r]=null;for(;t===hr;)hr=gn[--_n],gn[_n]=null,ii=gn[--_n],gn[_n]=null,ni=gn[--_n],gn[_n]=null}var ln=null,an=null,nt=!1,Ln=null;function Km(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Od(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ln=t,an=bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ln=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:ni,overflow:ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ln=t,an=null,!0):!1;default:return!1}}function hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pc(t){if(nt){var e=an;if(e){var n=e;if(!Od(t,e)){if(hc(t))throw Error(K(418));e=bi(n.nextSibling);var i=ln;e&&Od(t,e)?Km(i,n):(t.flags=t.flags&-4097|2,nt=!1,ln=t)}}else{if(hc(t))throw Error(K(418));t.flags=t.flags&-4097|2,nt=!1,ln=t}}}function kd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ln=t}function Xo(t){if(t!==ln)return!1;if(!nt)return kd(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uc(t.type,t.memoizedProps)),e&&(e=an)){if(hc(t))throw Zm(),Error(K(418));for(;e;)Km(t,e),e=bi(e.nextSibling)}if(kd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=ln?bi(t.stateNode.nextSibling):null;return!0}function Zm(){for(var t=an;t;)t=bi(t.nextSibling)}function cs(){an=ln=null,nt=!1}function pf(t){Ln===null?Ln=[t]:Ln.push(t)}var F0=di.ReactCurrentBatchConfig;function Cn(t,e){if(t&&t.defaultProps){e=ot({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Xa=Wi(null),ja=null,Kr=null,mf=null;function gf(){mf=Kr=ja=null}function _f(t){var e=Xa.current;tt(Xa),t._currentValue=e}function mc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){ja=t,mf=Kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(mf!==t)if(t={context:t,memoizedValue:e,next:null},Kr===null){if(ja===null)throw Error(K(308));Kr=t,ja.dependencies={lanes:0,firstContext:t}}else Kr=Kr.next=t;return e}var rr=null;function vf(t){rr===null?rr=[t]:rr.push(t)}function Qm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vf(e)):(n.next=r.next,r.next=n),e.interleaved=n,ui(t,i)}function ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Si=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,He&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ui(t,n)}return r=i.interleaved,r===null?(e.next=e,vf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ui(t,n)}function Ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rf(t,n)}}function Bd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ya(t,e,n,i){var r=t.updateQueue;Si=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(d=e,m=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(m,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,d=typeof x=="function"?x.call(m,h,d):x,d==null)break e;h=ot({},h,d);break e;case 2:Si=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);mr|=o,t.lanes=o,t.memoizedState=h}}function zd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(K(191,r));r.call(i)}}}var eg=new Qp.Component().refs;function gc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ot({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _l={isMounted:function(t){return(t=t._reactInternals)?Sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Ni(t),s=oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(In(e,t,r,i),Ta(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Ni(t),s=oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(In(e,t,r,i),Ta(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),i=Ni(t),r=oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(In(e,t,i,n),Ta(e,t,i))}};function Hd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,i)||!uo(r,s):!0}function tg(t,e,n){var i=!1,r=Hi,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(r=Jt(e)?dr:Ot.current,i=e.contextTypes,s=(i=i!=null)?us(t,r):Hi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_l.enqueueReplaceState(e,e.state,null)}function _c(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=eg,xf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mn(s):(s=Jt(e)?dr:Ot.current,r.context=us(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_l.enqueueReplaceState(r,r.state,null),Ya(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var i=n.stateNode}if(!i)throw Error(K(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===eg&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,t))}return t}function jo(t,e){throw t=Object.prototype.toString.call(e),Error(K(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gd(t){var e=t._init;return e(t._payload)}function ng(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Ii(c,_),c.index=0,c.sibling=null,c}function s(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,S){return _===null||_.tag!==6?(_=au(g,c.mode,S),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,S){var T=g.type;return T===Vr?f(c,_,g.props.children,S,g.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===xi&&Gd(T)===_.type)?(S=r(_,g.props),S.ref=Ds(c,_,g),S.return=c,S):(S=La(g.type,g.key,g.props,null,c.mode,S),S.ref=Ds(c,_,g),S.return=c,S)}function u(c,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=lu(g,c.mode,S),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function f(c,_,g,S,T){return _===null||_.tag!==7?(_=ar(g,c.mode,S,T),_.return=c,_):(_=r(_,g),_.return=c,_)}function h(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=au(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Io:return g=La(_.type,_.key,_.props,null,c.mode,g),g.ref=Ds(c,null,_),g.return=c,g;case Hr:return _=lu(_,c.mode,g),_.return=c,_;case xi:var S=_._init;return h(c,S(_._payload),g)}if(Vs(_)||Cs(_))return _=ar(_,c.mode,g,null),_.return=c,_;jo(c,_)}return null}function d(c,_,g,S){var T=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(c,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:return g.key===T?l(c,_,g,S):null;case Hr:return g.key===T?u(c,_,g,S):null;case xi:return T=g._init,d(c,_,T(g._payload),S)}if(Vs(g)||Cs(g))return T!==null?null:f(c,_,g,S,null);jo(c,g)}return null}function m(c,_,g,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(g)||null,a(_,c,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Io:return c=c.get(S.key===null?g:S.key)||null,l(_,c,S,T);case Hr:return c=c.get(S.key===null?g:S.key)||null,u(_,c,S,T);case xi:var C=S._init;return m(c,_,g,C(S._payload),T)}if(Vs(S)||Cs(S))return c=c.get(g)||null,f(_,c,S,T,null);jo(_,S)}return null}function x(c,_,g,S){for(var T=null,C=null,R=_,U=_=0,E=null;R!==null&&U<g.length;U++){R.index>U?(E=R,R=null):E=R.sibling;var w=d(c,R,g[U],S);if(w===null){R===null&&(R=E);break}t&&R&&w.alternate===null&&e(c,R),_=s(w,_,U),C===null?T=w:C.sibling=w,C=w,R=E}if(U===g.length)return n(c,R),nt&&Qi(c,U),T;if(R===null){for(;U<g.length;U++)R=h(c,g[U],S),R!==null&&(_=s(R,_,U),C===null?T=R:C.sibling=R,C=R);return nt&&Qi(c,U),T}for(R=i(c,R);U<g.length;U++)E=m(R,c,U,g[U],S),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?U:E.key),_=s(E,_,U),C===null?T=E:C.sibling=E,C=E);return t&&R.forEach(function(X){return e(c,X)}),nt&&Qi(c,U),T}function v(c,_,g,S){var T=Cs(g);if(typeof T!="function")throw Error(K(150));if(g=T.call(g),g==null)throw Error(K(151));for(var C=T=null,R=_,U=_=0,E=null,w=g.next();R!==null&&!w.done;U++,w=g.next()){R.index>U?(E=R,R=null):E=R.sibling;var X=d(c,R,w.value,S);if(X===null){R===null&&(R=E);break}t&&R&&X.alternate===null&&e(c,R),_=s(X,_,U),C===null?T=X:C.sibling=X,C=X,R=E}if(w.done)return n(c,R),nt&&Qi(c,U),T;if(R===null){for(;!w.done;U++,w=g.next())w=h(c,w.value,S),w!==null&&(_=s(w,_,U),C===null?T=w:C.sibling=w,C=w);return nt&&Qi(c,U),T}for(R=i(c,R);!w.done;U++,w=g.next())w=m(R,c,U,w.value,S),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?U:w.key),_=s(w,_,U),C===null?T=w:C.sibling=w,C=w);return t&&R.forEach(function(q){return e(c,q)}),nt&&Qi(c,U),T}function p(c,_,g,S){if(typeof g=="object"&&g!==null&&g.type===Vr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:e:{for(var T=g.key,C=_;C!==null;){if(C.key===T){if(T=g.type,T===Vr){if(C.tag===7){n(c,C.sibling),_=r(C,g.props.children),_.return=c,c=_;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===xi&&Gd(T)===C.type){n(c,C.sibling),_=r(C,g.props),_.ref=Ds(c,C,g),_.return=c,c=_;break e}n(c,C);break}else e(c,C);C=C.sibling}g.type===Vr?(_=ar(g.props.children,c.mode,S,g.key),_.return=c,c=_):(S=La(g.type,g.key,g.props,null,c.mode,S),S.ref=Ds(c,_,g),S.return=c,c=S)}return o(c);case Hr:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=lu(g,c.mode,S),_.return=c,c=_}return o(c);case xi:return C=g._init,p(c,_,C(g._payload),S)}if(Vs(g))return x(c,_,g,S);if(Cs(g))return v(c,_,g,S);jo(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=au(g,c.mode,S),_.return=c,c=_),o(c)):n(c,_)}return p}var fs=ng(!0),ig=ng(!1),Ro={},Gn=Wi(Ro),po=Wi(Ro),mo=Wi(Ro);function sr(t){if(t===Ro)throw Error(K(174));return t}function Sf(t,e){switch(Ke(mo,e),Ke(po,t),Ke(Gn,Ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$u(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$u(e,t)}tt(Gn),Ke(Gn,e)}function ds(){tt(Gn),tt(po),tt(mo)}function rg(t){sr(mo.current);var e=sr(Gn.current),n=$u(e,t.type);e!==n&&(Ke(po,t),Ke(Gn,n))}function yf(t){po.current===t&&(tt(Gn),tt(po))}var rt=Wi(0);function qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tu=[];function Ef(){for(var t=0;t<tu.length;t++)tu[t]._workInProgressVersionPrimary=null;tu.length=0}var wa=di.ReactCurrentDispatcher,nu=di.ReactCurrentBatchConfig,pr=0,st=null,gt=null,yt=null,$a=!1,Zs=!1,go=0,O0=0;function Ut(){throw Error(K(321))}function Mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function Tf(t,e,n,i,r,s){if(pr=s,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wa.current=t===null||t.memoizedState===null?H0:V0,t=n(i,r),Zs){s=0;do{if(Zs=!1,go=0,25<=s)throw Error(K(301));s+=1,yt=gt=null,e.updateQueue=null,wa.current=G0,t=n(i,r)}while(Zs)}if(wa.current=Ka,e=gt!==null&&gt.next!==null,pr=0,yt=gt=st=null,$a=!1,e)throw Error(K(300));return t}function wf(){var t=go!==0;return go=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?st.memoizedState=yt=t:yt=yt.next=t,yt}function Tn(){if(gt===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=yt===null?st.memoizedState:yt.next;if(e!==null)yt=e,gt=t;else{if(t===null)throw Error(K(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},yt===null?st.memoizedState=yt=t:yt=yt.next=t}return yt}function _o(t,e){return typeof e=="function"?e(t):e}function iu(t){var e=Tn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var i=gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((pr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,st.lanes|=f,mr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Fn(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,st.lanes|=s,mr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ru(t){var e=Tn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Fn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function sg(){}function og(t,e){var n=st,i=Tn(),r=e(),s=!Fn(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,Af(ug.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,vo(9,lg.bind(null,n,i,r,e),void 0,null),Et===null)throw Error(K(349));pr&30||ag(n,e,r)}return r}function ag(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lg(t,e,n,i){e.value=n,e.getSnapshot=i,cg(e)&&fg(t)}function ug(t,e,n){return n(function(){cg(e)&&fg(t)})}function cg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function fg(t){var e=ui(t,1);e!==null&&In(e,t,1,-1)}function Wd(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},e.queue=t,t=t.dispatch=z0.bind(null,st,t),[e.memoizedState,t]}function vo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dg(){return Tn().memoizedState}function Aa(t,e,n,i){var r=Bn();st.flags|=t,r.memoizedState=vo(1|e,n,void 0,i===void 0?null:i)}function vl(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,i!==null&&Mf(i,o.deps)){r.memoizedState=vo(e,n,s,i);return}}st.flags|=t,r.memoizedState=vo(1|e,n,s,i)}function Xd(t,e){return Aa(8390656,8,t,e)}function Af(t,e){return vl(2048,8,t,e)}function hg(t,e){return vl(4,2,t,e)}function pg(t,e){return vl(4,4,t,e)}function mg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gg(t,e,n){return n=n!=null?n.concat([t]):null,vl(4,4,mg.bind(null,e,t),n)}function Rf(){}function _g(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function xg(t,e,n){return pr&21?(Fn(n,e)||(n=Em(),st.lanes|=n,mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function k0(t,e){var n=We;We=n!==0&&4>n?n:4,t(!0);var i=nu.transition;nu.transition={};try{t(!1),e()}finally{We=n,nu.transition=i}}function Sg(){return Tn().memoizedState}function B0(t,e,n){var i=Ni(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},yg(t))Eg(e,n);else if(n=Qm(t,e,n,i),n!==null){var r=Wt();In(n,t,i,r),Mg(n,e,i)}}function z0(t,e,n){var i=Ni(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(yg(t))Eg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(r.next=r,vf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qm(t,e,r,i),n!==null&&(r=Wt(),In(n,t,i,r),Mg(n,e,i))}}function yg(t){var e=t.alternate;return t===st||e!==null&&e===st}function Eg(t,e){Zs=$a=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rf(t,n)}}var Ka={readContext:Mn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},H0={readContext:Mn,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:Xd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,mg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Bn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=B0.bind(null,st,t),[i.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:Wd,useDebugValue:Rf,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=Wd(!1),e=t[0];return t=k0.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=st,r=Bn();if(nt){if(n===void 0)throw Error(K(407));n=n()}else{if(n=e(),Et===null)throw Error(K(349));pr&30||ag(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xd(ug.bind(null,i,s,t),[t]),i.flags|=2048,vo(9,lg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=Et.identifierPrefix;if(nt){var n=ii,i=ni;n=(i&~(1<<32-Nn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=O0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},V0={readContext:Mn,useCallback:_g,useContext:Mn,useEffect:Af,useImperativeHandle:gg,useInsertionEffect:hg,useLayoutEffect:pg,useMemo:vg,useReducer:iu,useRef:dg,useState:function(){return iu(_o)},useDebugValue:Rf,useDeferredValue:function(t){var e=Tn();return xg(e,gt.memoizedState,t)},useTransition:function(){var t=iu(_o)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:sg,useSyncExternalStore:og,useId:Sg,unstable_isNewReconciler:!1},G0={readContext:Mn,useCallback:_g,useContext:Mn,useEffect:Af,useImperativeHandle:gg,useInsertionEffect:hg,useLayoutEffect:pg,useMemo:vg,useReducer:ru,useRef:dg,useState:function(){return ru(_o)},useDebugValue:Rf,useDeferredValue:function(t){var e=Tn();return gt===null?e.memoizedState=t:xg(e,gt.memoizedState,t)},useTransition:function(){var t=ru(_o)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:sg,useSyncExternalStore:og,useId:Sg,unstable_isNewReconciler:!1};function hs(t,e){try{var n="",i=e;do n+=_v(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var W0=typeof WeakMap=="function"?WeakMap:Map;function Tg(t,e,n){n=oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qa||(Qa=!0,Cc=i),vc(t,e)},n}function wg(t,e,n){n=oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vc(t,e),typeof i!="function"&&(Di===null?Di=new Set([this]):Di.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new W0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=rx.bind(null,t,e,n),e.then(t,t))}function Yd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=oi(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var X0=di.ReactCurrentOwner,Zt=!1;function Vt(t,e,n,i){e.child=t===null?ig(e,null,n,i):fs(e,t.child,n,i)}function $d(t,e,n,i,r){n=n.render;var s=e.ref;return rs(e,r),i=Tf(t,e,n,i,s,r),n=wf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(nt&&n&&df(e),e.flags|=1,Vt(t,e,i,r),e.child)}function Kd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!If(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ag(t,e,s,i,r)):(t=La(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,i)&&t.ref===e.ref)return ci(t,e,r)}return e.flags|=1,t=Ii(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ag(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(uo(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,ci(t,e,r)}return xc(t,e,n,i,r)}function Rg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Qr,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(Qr,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ke(Qr,on),on|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ke(Qr,on),on|=i;return Vt(t,e,r,n),e.child}function Cg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xc(t,e,n,i,r){var s=Jt(n)?dr:Ot.current;return s=us(e,s),rs(e,r),n=Tf(t,e,n,i,s,r),i=wf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(nt&&i&&df(e),e.flags|=1,Vt(t,e,n,r),e.child)}function Zd(t,e,n,i,r){if(Jt(n)){var s=!0;Va(e)}else s=!1;if(rs(e,r),e.stateNode===null)Ra(t,e),tg(e,n,i),_c(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mn(u):(u=Jt(n)?dr:Ot.current,u=us(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Vd(e,o,i,u),Si=!1;var d=e.memoizedState;o.state=d,Ya(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Qt.current||Si?(typeof f=="function"&&(gc(e,n,f,i),l=e.memoizedState),(a=Si||Hd(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Jm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Cn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mn(l):(l=Jt(n)?dr:Ot.current,l=us(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Vd(e,o,i,l),Si=!1,d=e.memoizedState,o.state=d,Ya(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||Qt.current||Si?(typeof m=="function"&&(gc(e,n,m,i),x=e.memoizedState),(u=Si||Hd(e,n,u,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Sc(t,e,n,i,s,r)}function Sc(t,e,n,i,r,s){Cg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Fd(e,n,!1),ci(t,e,s);i=e.stateNode,X0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=i.state,r&&Fd(e,n,!0),e.child}function Pg(t){var e=t.stateNode;e.pendingContext?Id(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Id(t,e.context,!1),Sf(t,e.containerInfo)}function Qd(t,e,n,i,r){return cs(),pf(r),e.flags|=256,Vt(t,e,n,i),e.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function Ec(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lg(t,e,n){var i=e.pendingProps,r=rt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ke(rt,r&1),t===null)return pc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yl(o,i,0,null),t=ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ec(n),e.memoizedState=yc,t):Cf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return j0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ii(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ii(a,s):(s=ar(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ec(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yc,i}return s=t.child,t=s.sibling,i=Ii(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cf(t,e){return e=yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yo(t,e,n,i){return i!==null&&pf(i),fs(e,t.child,null,n),t=Cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function j0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=su(Error(K(422))),Yo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yl({mode:"visible",children:i.children},r,0,null),s=ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=Ec(o),e.memoizedState=yc,s);if(!(e.mode&1))return Yo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(K(419)),i=su(s,i,void 0),Yo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Zt||a){if(i=Et,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ui(t,r),In(i,t,r,-1))}return Nf(),i=su(Error(K(421))),Yo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=sx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,an=bi(r.nextSibling),ln=e,nt=!0,Ln=null,t!==null&&(gn[_n++]=ni,gn[_n++]=ii,gn[_n++]=hr,ni=t.id,ii=t.overflow,hr=e),e=Cf(e,i.children),e.flags|=4096,e)}function Jd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mc(t.return,e,n)}function ou(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=rt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jd(t,n,e);else if(t.tag===19)Jd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ke(rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&qa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ou(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&qa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ou(e,!0,n,null,s);break;case"together":ou(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(K(153));if(e.child!==null){for(t=e.child,n=Ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Y0(t,e,n){switch(e.tag){case 3:Pg(e),cs();break;case 5:rg(e);break;case 1:Jt(e.type)&&Va(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ke(Xa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ke(rt,rt.current&1),e.flags|=128,null):n&e.child.childLanes?Lg(t,e,n):(Ke(rt,rt.current&1),t=ci(t,e,n),t!==null?t.sibling:null);Ke(rt,rt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return bg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ke(rt,rt.current),i)break;return null;case 22:case 23:return e.lanes=0,Rg(t,e,n)}return ci(t,e,n)}var Ug,Mc,Dg,Ng;Ug=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mc=function(){};Dg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,sr(Gn.current);var s=null;switch(n){case"input":r=Xu(t,r),i=Xu(t,i),s=[];break;case"select":r=ot({},r,{value:void 0}),i=ot({},i,{value:void 0}),s=[];break;case"textarea":r=qu(t,r),i=qu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=za)}Ku(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Qe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ng=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ns(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function q0(t,e,n){var i=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Jt(e.type)&&Ha(),Dt(e),null;case 3:return i=e.stateNode,ds(),tt(Qt),tt(Ot),Ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(bc(Ln),Ln=null))),Mc(t,e),Dt(e),null;case 5:yf(e);var r=sr(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)Dg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(K(166));return Dt(e),null}if(t=sr(Gn.current),Xo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hn]=e,i[ho]=s,t=(e.mode&1)!==0,n){case"dialog":Qe("cancel",i),Qe("close",i);break;case"iframe":case"object":case"embed":Qe("load",i);break;case"video":case"audio":for(r=0;r<Ws.length;r++)Qe(Ws[r],i);break;case"source":Qe("error",i);break;case"img":case"image":case"link":Qe("error",i),Qe("load",i);break;case"details":Qe("toggle",i);break;case"input":ld(i,s),Qe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Qe("invalid",i);break;case"textarea":cd(i,s),Qe("invalid",i)}Ku(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,a,t),r=["children",""+a]):no.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Qe("scroll",i)}switch(n){case"input":Fo(i),ud(i,s,!0);break;case"textarea":Fo(i),fd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=za)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Hn]=e,t[ho]=i,Ug(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zu(n,i),n){case"dialog":Qe("cancel",t),Qe("close",t),r=i;break;case"iframe":case"object":case"embed":Qe("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ws.length;r++)Qe(Ws[r],t);r=i;break;case"source":Qe("error",t),r=i;break;case"img":case"image":case"link":Qe("error",t),Qe("load",t),r=i;break;case"details":Qe("toggle",t),r=i;break;case"input":ld(t,i),r=Xu(t,i),Qe("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ot({},i,{value:void 0}),Qe("invalid",t);break;case"textarea":cd(t,i),r=qu(t,i),Qe("invalid",t);break;default:r=i}Ku(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&io(t,l):typeof l=="number"&&io(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(no.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Qe("scroll",t):l!=null&&Zc(t,s,l,o))}switch(n){case"input":Fo(t),ud(t,i,!1);break;case"textarea":Fo(t),fd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?es(t,!!i.multiple,s,!1):i.defaultValue!=null&&es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)Ng(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(K(166));if(n=sr(mo.current),sr(Gn.current),Xo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hn]=e,(s=i.nodeValue!==n)&&(t=ln,t!==null))switch(t.tag){case 3:Wo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hn]=e,e.stateNode=i}return Dt(e),null;case 13:if(tt(rt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&an!==null&&e.mode&1&&!(e.flags&128))Zm(),cs(),e.flags|=98560,s=!1;else if(s=Xo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(K(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(K(317));s[Hn]=e}else cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else Ln!==null&&(bc(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||rt.current&1?_t===0&&(_t=3):Nf())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return ds(),Mc(t,e),t===null&&co(e.stateNode.containerInfo),Dt(e),null;case 10:return _f(e.type._context),Dt(e),null;case 17:return Jt(e.type)&&Ha(),Dt(e),null;case 19:if(tt(rt),s=e.memoizedState,s===null)return Dt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ns(s,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qa(t),o!==null){for(e.flags|=128,Ns(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(rt,rt.current&1|2),e.child}t=t.sibling}s.tail!==null&&ct()>ps&&(e.flags|=128,i=!0,Ns(s,!1),e.lanes=4194304)}else{if(!i)if(t=qa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nt)return Dt(e),null}else 2*ct()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,i=!0,Ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ct(),e.sibling=null,n=rt.current,Ke(rt,i?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return Df(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?on&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(K(156,e.tag))}function $0(t,e){switch(hf(e),e.tag){case 1:return Jt(e.type)&&Ha(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ds(),tt(Qt),tt(Ot),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yf(e),null;case 13:if(tt(rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(K(340));cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(rt),null;case 4:return ds(),null;case 10:return _f(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var qo=!1,Ft=!1,K0=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){lt(t,e,i)}else n.current=null}function Tc(t,e,n){try{n()}catch(i){lt(t,e,i)}}var eh=!1;function Z0(t,e){if(ac=Oa,t=km(),ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lc={focusedElem:t,selectionRange:n},Oa=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,p=x.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:Cn(e.type,v),p);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(S){lt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return x=eh,eh=!1,x}function Qs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tc(e,n,s)}r=r.next}while(r!==i)}}function xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ig(t){var e=t.alternate;e!==null&&(t.alternate=null,Ig(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[ho],delete e[fc],delete e[D0],delete e[N0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fg(t){return t.tag===5||t.tag===3||t.tag===4}function th(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ac(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=za));else if(i!==4&&(t=t.child,t!==null))for(Ac(t,e,n),t=t.sibling;t!==null;)Ac(t,e,n),t=t.sibling}function Rc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rc(t,e,n),t=t.sibling;t!==null;)Rc(t,e,n),t=t.sibling}var Tt=null,Pn=!1;function hi(t,e,n){for(n=n.child;n!==null;)Og(t,e,n),n=n.sibling}function Og(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 5:Ft||Zr(n,e);case 6:var i=Tt,r=Pn;Tt=null,hi(t,e,n),Tt=i,Pn=r,Tt!==null&&(Pn?(t=Tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Pn?(t=Tt,n=n.stateNode,t.nodeType===8?Jl(t.parentNode,n):t.nodeType===1&&Jl(t,n),ao(t)):Jl(Tt,n.stateNode));break;case 4:i=Tt,r=Pn,Tt=n.stateNode.containerInfo,Pn=!0,hi(t,e,n),Tt=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!Ft&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tc(n,e,o),r=r.next}while(r!==i)}hi(t,e,n);break;case 1:if(!Ft&&(Zr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){lt(n,e,a)}hi(t,e,n);break;case 21:hi(t,e,n);break;case 22:n.mode&1?(Ft=(i=Ft)||n.memoizedState!==null,hi(t,e,n),Ft=i):hi(t,e,n);break;default:hi(t,e,n)}}function nh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new K0),e.forEach(function(i){var r=ox.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,Pn=!1;break e;case 3:Tt=a.stateNode.containerInfo,Pn=!0;break e;case 4:Tt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(Tt===null)throw Error(K(160));Og(s,o,r),Tt=null,Pn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){lt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kg(e,t),e=e.sibling}function kg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),kn(t),i&4){try{Qs(3,t,t.return),xl(3,t)}catch(v){lt(t,t.return,v)}try{Qs(5,t,t.return)}catch(v){lt(t,t.return,v)}}break;case 1:wn(e,t),kn(t),i&512&&n!==null&&Zr(n,n.return);break;case 5:if(wn(e,t),kn(t),i&512&&n!==null&&Zr(n,n.return),t.flags&32){var r=t.stateNode;try{io(r,"")}catch(v){lt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sm(r,s),Zu(a,o);var u=Zu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?cm(r,h):f==="dangerouslySetInnerHTML"?lm(r,h):f==="children"?io(r,h):Zc(r,f,h,u)}switch(a){case"input":ju(r,s);break;case"textarea":om(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?es(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?es(r,!!s.multiple,s.defaultValue,!0):es(r,!!s.multiple,s.multiple?[]:"",!1))}r[ho]=s}catch(v){lt(t,t.return,v)}}break;case 6:if(wn(e,t),kn(t),i&4){if(t.stateNode===null)throw Error(K(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){lt(t,t.return,v)}}break;case 3:if(wn(e,t),kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(v){lt(t,t.return,v)}break;case 4:wn(e,t),kn(t);break;case 13:wn(e,t),kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bf=ct())),i&4&&nh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(u=Ft)||f,wn(e,t),Ft=u):wn(e,t),kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(fe=t,f=t.child;f!==null;){for(h=fe=f;fe!==null;){switch(d=fe,m=d.child,d.tag){case 0:case 11:case 14:case 15:Qs(4,d,d.return);break;case 1:Zr(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){lt(i,n,v)}}break;case 5:Zr(d,d.return);break;case 22:if(d.memoizedState!==null){rh(h);continue}}m!==null?(m.return=d,fe=m):rh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=um("display",o))}catch(v){lt(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){lt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:wn(e,t),kn(t),i&4&&nh(t);break;case 21:break;default:wn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fg(n)){var i=n;break e}n=n.return}throw Error(K(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(io(r,""),i.flags&=-33);var s=th(t);Rc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=th(t);Ac(t,a,o);break;default:throw Error(K(161))}}catch(l){lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Q0(t,e,n){fe=t,Bg(t)}function Bg(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||qo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=qo;var u=Ft;if(qo=o,(Ft=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?sh(r):l!==null?(l.return=o,fe=l):sh(r);for(;s!==null;)fe=s,Bg(s),s=s.sibling;fe=r,qo=a,Ft=u}ih(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):ih(t)}}function ih(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ft)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}Ft||e.flags&512&&wc(e)}catch(d){lt(e,e.return,d)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function rh(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function sh(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xl(4,e)}catch(l){lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){lt(e,r,l)}}var s=e.return;try{wc(e)}catch(l){lt(e,s,l)}break;case 5:var o=e.return;try{wc(e)}catch(l){lt(e,o,l)}}}catch(l){lt(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var J0=Math.ceil,Za=di.ReactCurrentDispatcher,Pf=di.ReactCurrentOwner,En=di.ReactCurrentBatchConfig,He=0,Et=null,pt=null,Rt=0,on=0,Qr=Wi(0),_t=0,xo=null,mr=0,Sl=0,Lf=0,Js=null,$t=null,bf=0,ps=1/0,Jn=null,Qa=!1,Cc=null,Di=null,$o=!1,Ti=null,Ja=0,eo=0,Pc=null,Ca=-1,Pa=0;function Wt(){return He&6?ct():Ca!==-1?Ca:Ca=ct()}function Ni(t){return t.mode&1?He&2&&Rt!==0?Rt&-Rt:F0.transition!==null?(Pa===0&&(Pa=Em()),Pa):(t=We,t!==0||(t=window.event,t=t===void 0?16:Pm(t.type)),t):1}function In(t,e,n,i){if(50<eo)throw eo=0,Pc=null,Error(K(185));To(t,n,i),(!(He&2)||t!==Et)&&(t===Et&&(!(He&2)&&(Sl|=n),_t===4&&Ei(t,Rt)),en(t,i),n===1&&He===0&&!(e.mode&1)&&(ps=ct()+500,gl&&Xi()))}function en(t,e){var n=t.callbackNode;Fv(t,e);var i=Fa(t,t===Et?Rt:0);if(i===0)n!==null&&pd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&pd(n),e===1)t.tag===0?I0(oh.bind(null,t)):qm(oh.bind(null,t)),b0(function(){!(He&6)&&Xi()}),n=null;else{switch(Mm(i)){case 1:n=nf;break;case 4:n=Sm;break;case 16:n=Ia;break;case 536870912:n=ym;break;default:n=Ia}n=Yg(n,zg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zg(t,e){if(Ca=-1,Pa=0,He&6)throw Error(K(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var i=Fa(t,t===Et?Rt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=el(t,i);else{e=i;var r=He;He|=2;var s=Vg();(Et!==t||Rt!==e)&&(Jn=null,ps=ct()+500,or(t,e));do try{nx();break}catch(a){Hg(t,a)}while(1);gf(),Za.current=s,He=r,pt!==null?e=0:(Et=null,Rt=0,e=_t)}if(e!==0){if(e===2&&(r=nc(t),r!==0&&(i=r,e=Lc(t,r))),e===1)throw n=xo,or(t,0),Ei(t,i),en(t,ct()),n;if(e===6)Ei(t,i);else{if(r=t.current.alternate,!(i&30)&&!ex(r)&&(e=el(t,i),e===2&&(s=nc(t),s!==0&&(i=s,e=Lc(t,s))),e===1))throw n=xo,or(t,0),Ei(t,i),en(t,ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(K(345));case 2:Ji(t,$t,Jn);break;case 3:if(Ei(t,i),(i&130023424)===i&&(e=bf+500-ct(),10<e)){if(Fa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cc(Ji.bind(null,t,$t,Jn),e);break}Ji(t,$t,Jn);break;case 4:if(Ei(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Nn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*J0(i/1960))-i,10<i){t.timeoutHandle=cc(Ji.bind(null,t,$t,Jn),i);break}Ji(t,$t,Jn);break;case 5:Ji(t,$t,Jn);break;default:throw Error(K(329))}}}return en(t,ct()),t.callbackNode===n?zg.bind(null,t):null}function Lc(t,e){var n=Js;return t.current.memoizedState.isDehydrated&&(or(t,e).flags|=256),t=el(t,e),t!==2&&(e=$t,$t=n,e!==null&&bc(e)),t}function bc(t){$t===null?$t=t:$t.push.apply($t,t)}function ex(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Fn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ei(t,e){for(e&=~Lf,e&=~Sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),i=1<<n;t[n]=-1,e&=~i}}function oh(t){if(He&6)throw Error(K(327));ss();var e=Fa(t,0);if(!(e&1))return en(t,ct()),null;var n=el(t,e);if(t.tag!==0&&n===2){var i=nc(t);i!==0&&(e=i,n=Lc(t,i))}if(n===1)throw n=xo,or(t,0),Ei(t,e),en(t,ct()),n;if(n===6)throw Error(K(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ji(t,$t,Jn),en(t,ct()),null}function Uf(t,e){var n=He;He|=1;try{return t(e)}finally{He=n,He===0&&(ps=ct()+500,gl&&Xi())}}function gr(t){Ti!==null&&Ti.tag===0&&!(He&6)&&ss();var e=He;He|=1;var n=En.transition,i=We;try{if(En.transition=null,We=1,t)return t()}finally{We=i,En.transition=n,He=e,!(He&6)&&Xi()}}function Df(){on=Qr.current,tt(Qr)}function or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L0(n)),pt!==null)for(n=pt.return;n!==null;){var i=n;switch(hf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ha();break;case 3:ds(),tt(Qt),tt(Ot),Ef();break;case 5:yf(i);break;case 4:ds();break;case 13:tt(rt);break;case 19:tt(rt);break;case 10:_f(i.type._context);break;case 22:case 23:Df()}n=n.return}if(Et=t,pt=t=Ii(t.current,null),Rt=on=e,_t=0,xo=null,Lf=Sl=mr=0,$t=Js=null,rr!==null){for(e=0;e<rr.length;e++)if(n=rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}rr=null}return t}function Hg(t,e){do{var n=pt;try{if(gf(),wa.current=Ka,$a){for(var i=st.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$a=!1}if(pr=0,yt=gt=st=null,Zs=!1,go=0,Pf.current=null,n===null||n.return===null){_t=1,xo=e,pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Yd(o);if(m!==null){m.flags&=-257,qd(m,o,a,s,e),m.mode&1&&jd(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){jd(s,u,e),Nf();break e}l=Error(K(426))}}else if(nt&&a.mode&1){var p=Yd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),qd(p,o,a,s,e),pf(hs(l,a));break e}}s=l=hs(l,a),_t!==4&&(_t=2),Js===null?Js=[s]:Js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Tg(s,l,e);Bd(s,c);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Di===null||!Di.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=wg(s,a,e);Bd(s,S);break e}}s=s.return}while(s!==null)}Wg(n)}catch(T){e=T,pt===n&&n!==null&&(pt=n=n.return);continue}break}while(1)}function Vg(){var t=Za.current;return Za.current=Ka,t===null?Ka:t}function Nf(){(_t===0||_t===3||_t===2)&&(_t=4),Et===null||!(mr&268435455)&&!(Sl&268435455)||Ei(Et,Rt)}function el(t,e){var n=He;He|=2;var i=Vg();(Et!==t||Rt!==e)&&(Jn=null,or(t,e));do try{tx();break}catch(r){Hg(t,r)}while(1);if(gf(),He=n,Za.current=i,pt!==null)throw Error(K(261));return Et=null,Rt=0,_t}function tx(){for(;pt!==null;)Gg(pt)}function nx(){for(;pt!==null&&!Rv();)Gg(pt)}function Gg(t){var e=jg(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?Wg(t):pt=e,Pf.current=null}function Wg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$0(n,e),n!==null){n.flags&=32767,pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,pt=null;return}}else if(n=q0(n,e,on),n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);_t===0&&(_t=5)}function Ji(t,e,n){var i=We,r=En.transition;try{En.transition=null,We=1,ix(t,e,n,i)}finally{En.transition=r,We=i}return null}function ix(t,e,n,i){do ss();while(Ti!==null);if(He&6)throw Error(K(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(K(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ov(t,s),t===Et&&(pt=Et=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$o||($o=!0,Yg(Ia,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=We;We=1;var a=He;He|=4,Pf.current=null,Z0(t,n),kg(n,t),M0(lc),Oa=!!ac,lc=ac=null,t.current=n,Q0(n),Cv(),He=a,We=o,En.transition=s}else t.current=n;if($o&&($o=!1,Ti=t,Ja=r),s=t.pendingLanes,s===0&&(Di=null),bv(n.stateNode),en(t,ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qa)throw Qa=!1,t=Cc,Cc=null,t;return Ja&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===Pc?eo++:(eo=0,Pc=t):eo=0,Xi(),null}function ss(){if(Ti!==null){var t=Mm(Ja),e=En.transition,n=We;try{if(En.transition=null,We=16>t?16:t,Ti===null)var i=!1;else{if(t=Ti,Ti=null,Ja=0,He&6)throw Error(K(331));var r=He;for(He|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var f=fe;switch(f.tag){case 0:case 11:case 15:Qs(8,f,s)}var h=f.child;if(h!==null)h.return=f,fe=h;else for(;fe!==null;){f=fe;var d=f.sibling,m=f.return;if(Ig(f),f===u){fe=null;break}if(d!==null){d.return=m,fe=d;break}fe=m}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qs(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,fe=c;break e}fe=s.return}}var _=t.current;for(fe=_;fe!==null;){o=fe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,fe=g;else e:for(o=_;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xl(9,a)}}catch(T){lt(a,a.return,T)}if(a===o){fe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,fe=S;break e}fe=a.return}}if(He=r,Xi(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(fl,t)}catch{}i=!0}return i}finally{We=n,En.transition=e}}return!1}function ah(t,e,n){e=hs(n,e),e=Tg(t,e,1),t=Ui(t,e,1),e=Wt(),t!==null&&(To(t,1,e),en(t,e))}function lt(t,e,n){if(t.tag===3)ah(t,t,n);else for(;e!==null;){if(e.tag===3){ah(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Di===null||!Di.has(i))){t=hs(n,t),t=wg(e,t,1),e=Ui(e,t,1),t=Wt(),e!==null&&(To(e,1,t),en(e,t));break}}e=e.return}}function rx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,Et===t&&(Rt&n)===n&&(_t===4||_t===3&&(Rt&130023424)===Rt&&500>ct()-bf?or(t,0):Lf|=n),en(t,e)}function Xg(t,e){e===0&&(t.mode&1?(e=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):e=1);var n=Wt();t=ui(t,e),t!==null&&(To(t,e,n),en(t,n))}function sx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xg(t,n)}function ox(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(K(314))}i!==null&&i.delete(e),Xg(t,n)}var jg;jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,Y0(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,nt&&e.flags&1048576&&$m(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ra(t,e),t=e.pendingProps;var r=us(e,Ot.current);rs(e,n),r=Tf(null,e,i,t,r,n);var s=wf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(i)?(s=!0,Va(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xf(e),r.updater=_l,e.stateNode=r,r._reactInternals=e,_c(e,i,t,n),e=Sc(null,e,i,!0,s,n)):(e.tag=0,nt&&s&&df(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ra(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lx(i),t=Cn(i,t),r){case 0:e=xc(null,e,i,t,n);break e;case 1:e=Zd(null,e,i,t,n);break e;case 11:e=$d(null,e,i,t,n);break e;case 14:e=Kd(null,e,i,Cn(i.type,t),n);break e}throw Error(K(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),xc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),Zd(t,e,i,r,n);case 3:e:{if(Pg(e),t===null)throw Error(K(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jm(t,e),Ya(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=hs(Error(K(423)),e),e=Qd(t,e,i,n,r);break e}else if(i!==r){r=hs(Error(K(424)),e),e=Qd(t,e,i,n,r);break e}else for(an=bi(e.stateNode.containerInfo.firstChild),ln=e,nt=!0,Ln=null,n=ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cs(),i===r){e=ci(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return rg(e),t===null&&pc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uc(i,r)?o=null:s!==null&&uc(i,s)&&(e.flags|=32),Cg(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&pc(e),null;case 13:return Lg(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fs(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),$d(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ke(Xa,i._currentValue),i._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===r.children&&!Qt.current){e=ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=oi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(K(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,rs(e,n),r=Mn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Cn(i,e.pendingProps),r=Cn(i.type,r),Kd(t,e,i,r,n);case 15:return Ag(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),Ra(t,e),e.tag=1,Jt(i)?(t=!0,Va(e)):t=!1,rs(e,n),tg(e,i,r),_c(e,i,r,n),Sc(null,e,i,!0,t,n);case 19:return bg(t,e,n);case 22:return Rg(t,e,n)}throw Error(K(156,e.tag))};function Yg(t,e){return xm(t,e)}function ax(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,i){return new ax(t,e,n,i)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lx(t){if(typeof t=="function")return If(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jc)return 11;if(t===ef)return 14}return 2}function Ii(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function La(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")If(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vr:return ar(n.children,r,s,e);case Qc:o=8,r|=8;break;case Hu:return t=yn(12,n,e,r|2),t.elementType=Hu,t.lanes=s,t;case Vu:return t=yn(13,n,e,r),t.elementType=Vu,t.lanes=s,t;case Gu:return t=yn(19,n,e,r),t.elementType=Gu,t.lanes=s,t;case nm:return yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case em:o=10;break e;case tm:o=9;break e;case Jc:o=11;break e;case ef:o=14;break e;case xi:o=16,i=null;break e}throw Error(K(130,t==null?t:typeof t,""))}return e=yn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ar(t,e,n,i){return t=yn(7,t,i,e),t.lanes=n,t}function yl(t,e,n,i){return t=yn(22,t,i,e),t.elementType=nm,t.lanes=n,t.stateNode={isHidden:!1},t}function au(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function lu(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ux(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ff(t,e,n,i,r,s,o,a,l){return t=new ux(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(s),t}function cx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function qg(t){if(!t)return Hi;t=t._reactInternals;e:{if(Sr(t)!==t||t.tag!==1)throw Error(K(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(K(171))}if(t.tag===1){var n=t.type;if(Jt(n))return Ym(t,n,e)}return e}function $g(t,e,n,i,r,s,o,a,l){return t=Ff(n,i,!0,t,r,s,o,a,l),t.context=qg(null),n=t.current,i=Wt(),r=Ni(n),s=oi(i,r),s.callback=e??null,Ui(n,s,r),t.current.lanes=r,To(t,r,i),en(t,i),t}function El(t,e,n,i){var r=e.current,s=Wt(),o=Ni(r);return n=qg(n),e.context===null?e.context=n:e.pendingContext=n,e=oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,o),t!==null&&(In(t,r,o,s),Ta(t,r,o)),o}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Of(t,e){lh(t,e),(t=t.alternate)&&lh(t,e)}function fx(){return null}var Kg=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}Ml.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(K(409));El(t,e,null,null)};Ml.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gr(function(){El(null,t,null,null)}),e[li]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=Am();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yi.length&&e!==0&&e<yi[n].priority;n++);yi.splice(n,0,t),n===0&&Cm(t)}};function Bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uh(){}function dx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=tl(o);s.call(u)}}var o=$g(e,i,t,0,null,!1,!1,"",uh);return t._reactRootContainer=o,t[li]=o.current,co(t.nodeType===8?t.parentNode:t),gr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=tl(l);a.call(u)}}var l=Ff(t,0,!1,null,null,!1,!1,"",uh);return t._reactRootContainer=l,t[li]=l.current,co(t.nodeType===8?t.parentNode:t),gr(function(){El(e,l,n,i)}),l}function wl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tl(o);a.call(l)}}El(e,o,t,r)}else o=dx(n,e,t,r,i);return tl(o)}Tm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gs(e.pendingLanes);n!==0&&(rf(e,n|1),en(e,ct()),!(He&6)&&(ps=ct()+500,Xi()))}break;case 13:gr(function(){var i=ui(t,1);if(i!==null){var r=Wt();In(i,t,1,r)}}),Of(t,1)}};sf=function(t){if(t.tag===13){var e=ui(t,134217728);if(e!==null){var n=Wt();In(e,t,134217728,n)}Of(t,134217728)}};wm=function(t){if(t.tag===13){var e=Ni(t),n=ui(t,e);if(n!==null){var i=Wt();In(n,t,e,i)}Of(t,e)}};Am=function(){return We};Rm=function(t,e){var n=We;try{return We=t,e()}finally{We=n}};Ju=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ml(i);if(!r)throw Error(K(90));rm(i),ju(i,r)}}}break;case"textarea":om(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};hm=Uf;pm=gr;var hx={usingClientEntryPoint:!1,Events:[Ao,jr,ml,fm,dm,Uf]},Is={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},px={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_m(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||fx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{fl=Ko.inject(px),Vn=Ko}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hx;dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bf(e))throw Error(K(200));return cx(t,e,null,n)};dn.createRoot=function(t,e){if(!Bf(t))throw Error(K(299));var n=!1,i="",r=Kg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ff(t,1,!1,null,null,n,!1,i,r),t[li]=e.current,co(t.nodeType===8?t.parentNode:t),new kf(e)};dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(K(188)):(t=Object.keys(t).join(","),Error(K(268,t)));return t=_m(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t){return gr(t)};dn.hydrate=function(t,e,n){if(!Tl(e))throw Error(K(200));return wl(null,t,e,!0,n)};dn.hydrateRoot=function(t,e,n){if(!Bf(t))throw Error(K(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Kg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$g(e,null,t,1,n??null,r,!1,s,o),t[li]=e.current,co(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ml(e)};dn.render=function(t,e,n){if(!Tl(e))throw Error(K(200));return wl(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!Tl(t))throw Error(K(40));return t._reactRootContainer?(gr(function(){wl(null,null,t,!1,function(){t._reactRootContainer=null,t[li]=null})}),!0):!1};dn.unstable_batchedUpdates=Uf;dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tl(n))throw Error(K(200));if(t==null||t._reactInternals===void 0)throw Error(K(38));return wl(t,e,n,!1,i)};dn.version="18.2.0-next-9e3b772b8-20220608";function Zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zg)}catch(t){console.error(t)}}Zg(),$p.exports=dn;var mx=$p.exports;const gx=Op(mx);/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},So.apply(this,arguments)}var wi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wi||(wi={}));const ch="popstate";function _x(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Uc("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:nl(r)}return xx(e,n,null,t)}function mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vx(){return Math.random().toString(36).substr(2,8)}function fh(t,e){return{usr:t.state,key:t.key,idx:e}}function Uc(t,e,n,i){return n===void 0&&(n=null),So({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Es(e):e,{state:n,key:e&&e.key||i||vx()})}function nl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Es(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function xx(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=wi.Pop,l=null,u=f();u==null&&(u=0,o.replaceState(So({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function h(){a=wi.Pop;let p=f(),c=p==null?null:p-u;u=p,l&&l({action:a,location:v.location,delta:c})}function d(p,c){a=wi.Push;let _=Uc(v.location,p,c);n&&n(_,p),u=f()+1;let g=fh(_,u),S=v.createHref(_);try{o.pushState(g,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(S)}s&&l&&l({action:a,location:v.location,delta:1})}function m(p,c){a=wi.Replace;let _=Uc(v.location,p,c);n&&n(_,p),u=f();let g=fh(_,u),S=v.createHref(_);o.replaceState(g,"",S),s&&l&&l({action:a,location:v.location,delta:0})}function x(p){let c=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof p=="string"?p:nl(p);return mt(c,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,c)}let v={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(ch,h),l=p,()=>{r.removeEventListener(ch,h),l=null}},createHref(p){return e(r,p)},createURL:x,encodeLocation(p){let c=x(p);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:d,replace:m,go(p){return o.go(p)}};return v}var dh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(dh||(dh={}));function Sx(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Es(e):e,r=Hf(i.pathname||"/",n);if(r==null)return null;let s=Qg(t);yx(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Lx(s[a],Dx(r));return o}function Qg(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Fi([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(mt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qg(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Cx(u,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Jg(s.path))r(s,o,l)}),e}function Jg(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Jg(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function yx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Px(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Ex=/^:\w+$/,Mx=3,Tx=2,wx=1,Ax=10,Rx=-2,hh=t=>t==="*";function Cx(t,e){let n=t.split("/"),i=n.length;return n.some(hh)&&(i+=Rx),e&&(i+=Tx),n.filter(r=>!hh(r)).reduce((r,s)=>r+(Ex.test(s)?Mx:s===""?wx:Ax),i)}function Px(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Lx(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",f=bx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(i,f.params);let h=a.route;s.push({params:i,pathname:Fi([r,f.pathname]),pathnameBase:Ox(Fi([r,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(r=Fi([r,f.pathnameBase]))}return s}function bx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Ux(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,f,h)=>{if(f==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[f]=Nx(a[h]||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Ux(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Dx(t){try{return decodeURI(t)}catch(e){return zf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Nx(t,e){try{return decodeURIComponent(t)}catch(n){return zf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Hf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Ix(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Es(t):t;return{pathname:n?n.startsWith("/")?n:Fx(n,e):e,search:kx(i),hash:Bx(r)}}function Fx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function uu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function t_(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Es(t):(r=So({},t),mt(!r.pathname||!r.pathname.includes("?"),uu("?","pathname","search",r)),mt(!r.pathname||!r.pathname.includes("#"),uu("#","pathname","hash",r)),mt(!r.search||!r.search.includes("#"),uu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(i||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;r.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=Ix(r,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Fi=t=>t.join("/").replace(/\/\/+/g,"/"),Ox=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Bx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const n_=["post","put","patch","delete"];new Set(n_);const Hx=["get",...n_];new Set(Hx);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},il.apply(this,arguments)}const Vf=he.createContext(null),Vx=he.createContext(null),Ms=he.createContext(null),Al=he.createContext(null),yr=he.createContext({outlet:null,matches:[],isDataRoute:!1}),i_=he.createContext(null);function Gx(t,e){let{relative:n}=e===void 0?{}:e;Co()||mt(!1);let{basename:i,navigator:r}=he.useContext(Ms),{hash:s,pathname:o,search:a}=s_(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Fi([i,o])),r.createHref({pathname:l,search:a,hash:s})}function Co(){return he.useContext(Al)!=null}function Rl(){return Co()||mt(!1),he.useContext(Al).location}function r_(t){he.useContext(Ms).static||he.useLayoutEffect(t)}function Wx(){let{isDataRoute:t}=he.useContext(yr);return t?iS():Xx()}function Xx(){Co()||mt(!1);let t=he.useContext(Vf),{basename:e,navigator:n}=he.useContext(Ms),{matches:i}=he.useContext(yr),{pathname:r}=Rl(),s=JSON.stringify(e_(i).map(l=>l.pathnameBase)),o=he.useRef(!1);return r_(()=>{o.current=!0}),he.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let f=t_(l,JSON.parse(s),r,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Fi([e,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[e,n,s,r,t])}function s_(t,e){let{relative:n}=e===void 0?{}:e,{matches:i}=he.useContext(yr),{pathname:r}=Rl(),s=JSON.stringify(e_(i).map(o=>o.pathnameBase));return he.useMemo(()=>t_(t,JSON.parse(s),r,n==="path"),[t,s,r,n])}function jx(t,e){return Yx(t,e)}function Yx(t,e,n){Co()||mt(!1);let{navigator:i}=he.useContext(Ms),{matches:r}=he.useContext(yr),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Rl(),u;if(e){var f;let v=typeof e=="string"?Es(e):e;a==="/"||(f=v.pathname)!=null&&f.startsWith(a)||mt(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=Sx(t,{pathname:d}),x=Qx(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Fi([a,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Fi([a,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),r,n);return e&&x?he.createElement(Al.Provider,{value:{location:il({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wi.Pop}},x):x}function qx(){let t=nS(),e=zx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),n?he.createElement("pre",{style:r},n):null,s)}const $x=he.createElement(qx,null);class Kx extends he.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?he.createElement(yr.Provider,{value:this.props.routeContext},he.createElement(i_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zx(t){let{routeContext:e,match:n,children:i}=t,r=he.useContext(Vf);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),he.createElement(yr.Provider,{value:e},i)}function Qx(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let s=t,o=(i=n)==null?void 0:i.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||mt(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let f=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||$x);let d=e.concat(s.slice(0,u+1)),m=()=>{let x;return f?x=h:l.route.Component?x=he.createElement(l.route.Component,null):l.route.element?x=l.route.element:x=a,he.createElement(Zx,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:x})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?he.createElement(Kx,{location:n.location,revalidation:n.revalidation,component:h,error:f,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var o_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(o_||{}),rl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(rl||{});function Jx(t){let e=he.useContext(Vf);return e||mt(!1),e}function eS(t){let e=he.useContext(Vx);return e||mt(!1),e}function tS(t){let e=he.useContext(yr);return e||mt(!1),e}function a_(t){let e=tS(),n=e.matches[e.matches.length-1];return n.route.id||mt(!1),n.route.id}function nS(){var t;let e=he.useContext(i_),n=eS(rl.UseRouteError),i=a_(rl.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function iS(){let{router:t}=Jx(o_.UseNavigateStable),e=a_(rl.UseNavigateStable),n=he.useRef(!1);return r_(()=>{n.current=!0}),he.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,il({fromRouteId:e},s)))},[t,e])}function Dc(t){mt(!1)}function rS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=wi.Pop,navigator:s,static:o=!1}=t;Co()&&mt(!1);let a=e.replace(/^\/*/,"/"),l=he.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=Es(i));let{pathname:u="/",search:f="",hash:h="",state:d=null,key:m="default"}=i,x=he.useMemo(()=>{let v=Hf(u,a);return v==null?null:{location:{pathname:v,search:f,hash:h,state:d,key:m},navigationType:r}},[a,u,f,h,d,m,r]);return x==null?null:he.createElement(Ms.Provider,{value:l},he.createElement(Al.Provider,{children:n,value:x}))}function sS(t){let{children:e,location:n}=t;return jx(Nc(e),n)}new Promise(()=>{});function Nc(t,e){e===void 0&&(e=[]);let n=[];return he.Children.forEach(t,(i,r)=>{if(!he.isValidElement(i))return;let s=[...e,r];if(i.type===he.Fragment){n.push.apply(n,Nc(i.props.children,s));return}i.type!==Dc&&mt(!1),!i.props.index||!i.props.children||mt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Nc(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ic(){return Ic=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ic.apply(this,arguments)}function oS(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function aS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lS(t,e){return t.button===0&&(!e||e==="_self")&&!aS(t)}const uS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],cS="startTransition",ph=sv[cS];function fS(t){let{basename:e,children:n,future:i,window:r}=t,s=he.useRef();s.current==null&&(s.current=_x({window:r,v5Compat:!0}));let o=s.current,[a,l]=he.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},f=he.useCallback(h=>{u&&ph?ph(()=>l(h)):l(h)},[l,u]);return he.useLayoutEffect(()=>o.listen(f),[o,f]),he.createElement(rS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const dS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mh=he.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:f}=e,h=oS(e,uS),{basename:d}=he.useContext(Ms),m,x=!1;if(typeof u=="string"&&hS.test(u)&&(m=u,dS))try{let _=new URL(window.location.href),g=u.startsWith("//")?new URL(_.protocol+u):new URL(u),S=Hf(g.pathname,d);g.origin===_.origin&&S!=null?u=S+g.search+g.hash:x=!0}catch{}let v=Gx(u,{relative:r}),p=pS(u,{replace:o,state:a,target:l,preventScrollReset:f,relative:r});function c(_){i&&i(_),_.defaultPrevented||p(_)}return he.createElement("a",Ic({},h,{href:m||v,onClick:x||s?i:c,ref:n,target:l}))});var gh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(gh||(gh={}));var _h;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_h||(_h={}));function pS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Wx(),l=Rl(),u=s_(t,{relative:o});return he.useCallback(f=>{if(lS(f,n)){f.preventDefault();let h=i!==void 0?i:nl(l)===nl(u);a(t,{replace:h,state:r,preventScrollReset:s,relative:o})}},[l,a,u,i,r,n,t,s,o])}const mS=()=>$e.jsx("div",{className:"blankPageContainer"});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gf="157",gS=0,vh=1,_S=2,l_=1,vS=2,Qn=3,Vi=0,tn=1,ti=2,Oi=0,os=1,xh=2,Sh=3,yh=4,xS=5,zr=100,SS=101,yS=102,Eh=103,Mh=104,ES=200,MS=201,TS=202,wS=203,u_=204,c_=205,AS=206,RS=207,CS=208,PS=209,LS=210,bS=0,US=1,DS=2,Fc=3,NS=4,IS=5,FS=6,OS=7,f_=0,kS=1,BS=2,ki=0,zS=1,HS=2,VS=3,GS=4,WS=5,d_=300,ms=301,gs=302,Oc=303,kc=304,Cl=306,Bc=1e3,Un=1001,zc=1002,Gt=1003,Th=1004,cu=1005,vn=1006,XS=1007,yo=1008,Bi=1009,jS=1010,YS=1011,Wf=1012,h_=1013,Ai=1014,Ri=1015,Eo=1016,p_=1017,m_=1018,lr=1020,qS=1021,Dn=1023,$S=1024,KS=1025,ur=1026,_s=1027,ZS=1028,g_=1029,QS=1030,__=1031,v_=1033,fu=33776,du=33777,hu=33778,pu=33779,wh=35840,Ah=35841,Rh=35842,Ch=35843,JS=36196,Ph=37492,Lh=37496,bh=37808,Uh=37809,Dh=37810,Nh=37811,Ih=37812,Fh=37813,Oh=37814,kh=37815,Bh=37816,zh=37817,Hh=37818,Vh=37819,Gh=37820,Wh=37821,mu=36492,Xh=36494,jh=36495,ey=36283,Yh=36284,qh=36285,$h=36286,x_=3e3,cr=3001,ty=3200,ny=3201,iy=0,ry=1,Sn="",wt="srgb",fi="srgb-linear",Xf="display-p3",Pl="display-p3-linear",sl="linear",Je="srgb",ol="rec709",al="p3",gu=7680,sy=519,oy=512,ay=513,ly=514,uy=515,cy=516,fy=517,dy=518,hy=519,Kh=35044,Zh="300 es",Hc=1035,ri=2e3,ll=2001;class Ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=Math.PI/180,Vc=180/Math.PI;function Po(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function py(t,e){return(t%e+e)%e}function vu(t,e,n){return(1-n)*t+n*e}function Qh(t){return(t&t-1)===0&&t!==0}function Gc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],c=r[6],_=r[1],g=r[4],S=r[7],T=r[2],C=r[5],R=r[8];return s[0]=o*v+a*_+l*T,s[3]=o*p+a*g+l*C,s[6]=o*c+a*S+l*R,s[1]=u*v+f*_+h*T,s[4]=u*p+f*g+h*C,s[7]=u*c+f*S+h*R,s[2]=d*v+m*_+x*T,s[5]=d*p+m*g+x*C,s[8]=d*c+m*S+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,m=u*s-o*l,x=n*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(xu.makeScale(e,n)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,n){return this.premultiply(xu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new Fe;function S_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ul(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function my(){const t=ul("canvas");return t.style.display="block",t}const Jh={};function to(t){t in Jh||(Jh[t]=!0,console.warn(t))}const ep=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zo={[fi]:{transfer:sl,primaries:ol,toReference:t=>t,fromReference:t=>t},[wt]:{transfer:Je,primaries:ol,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Pl]:{transfer:sl,primaries:al,toReference:t=>t.applyMatrix3(tp),fromReference:t=>t.applyMatrix3(ep)},[Xf]:{transfer:Je,primaries:al,toReference:t=>t.convertSRGBToLinear().applyMatrix3(tp),fromReference:t=>t.applyMatrix3(ep).convertLinearToSRGB()}},gy=new Set([fi,Pl]),je={enabled:!0,_workingColorSpace:fi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!gy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Zo[e].toReference,r=Zo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Zo[t].primaries},getTransfer:function(t){return t===Sn?sl:Zo[t].transfer}};function as(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Su(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Tr;class y_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=ul("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Tr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ul("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=as(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(as(n[i]/255)*255):n[i]=as(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _y=0;class E_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Po(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yu(r[o].image)):s.push(yu(r[o]))}else s=yu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function yu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?y_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vy=0;class un extends Ts{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Un,r=Un,s=vn,o=yo,a=Dn,l=Bi,u=un.DEFAULT_ANISOTROPY,f=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Po(),this.name="",this.source=new E_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===cr?wt:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bc:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bc:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?cr:x_}set encoding(e){to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cr?wt:Sn}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=d_;un.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(m+1)/2,T=(c+1)/2,C=(f+d)/4,R=(h+v)/4,U=(x+p)/4;return g>S&&g>T?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=R/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=U/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=U/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-x)*(p-x)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(h-v)/_,this.z=(d-f)/_,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xy extends Ts{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(to("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===cr?wt:Sn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new E_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends xy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class M_ extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sy extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=x,e[n+3]=v;return}if(h!==v||l!==d||u!==m||f!==x){let p=1-a;const c=l*d+u*m+f*x+h*v,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const T=Math.sqrt(g),C=Math.atan2(T,c*_);p=Math.sin(p*C)/T,a=Math.sin(a*C)/T}const S=a*_;if(l=l*p+d*S,u=u*p+m*S,f=f*p+x*S,h=h*p+v*S,p===1-a){const T=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=T,u*=T,f*=T,h*=T}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*m-u*d,e[n+1]=l*x+f*d+u*h-a*m,e[n+2]=u*x+f*m+a*d-l*h,e[n+3]=f*x-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"YXZ":this._x=d*f*h+u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"ZXY":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h-d*m*x;break;case"ZYX":this._x=d*f*h-u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h+d*m*x;break;case"YZX":this._x=d*f*h+u*m*x,this._y=u*m*h+d*f*x,this._z=u*f*x-d*m*h,this._w=u*f*h-d*m*x;break;case"XZY":this._x=d*f*h-u*m*x,this._y=u*m*h-d*f*x,this._z=u*f*x+d*m*h,this._w=u*f*h+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(np.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(np.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,f=l*i+a*n-s*r,h=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+f*-a-h*-o,this.y=f*l+d*-o+h*-s-u*-a,this.z=h*l+d*-a+u*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new H,np=new Lo;class bo{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox),wr.applyMatrix4(e.matrixWorld),this.union(wr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Yn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Yn)}else r.boundingBox===null&&r.computeBoundingBox(),wr.copy(r.boundingBox),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Qo.subVectors(this.max,Os),Ar.subVectors(e.a,Os),Rr.subVectors(e.b,Os),Cr.subVectors(e.c,Os),pi.subVectors(Rr,Ar),mi.subVectors(Cr,Rr),qi.subVectors(Ar,Cr);let n=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-qi.z,qi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,qi.z,0,-qi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-qi.y,qi.x,0];return!Mu(n,Ar,Rr,Cr,Qo)||(n=[1,0,0,0,1,0,0,0,1],!Mu(n,Ar,Rr,Cr,Qo))?!1:(Jo.crossVectors(pi,mi),n=[Jo.x,Jo.y,Jo.z],Mu(n,Ar,Rr,Cr,Qo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new H,new H,new H,new H,new H,new H,new H,new H],Yn=new H,wr=new bo,Ar=new H,Rr=new H,Cr=new H,pi=new H,mi=new H,qi=new H,Os=new H,Qo=new H,Jo=new H,$i=new H;function Mu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$i.fromArray(t,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),u=n.dot($i),f=i.dot($i);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const yy=new bo,ks=new H,Tu=new H;class jf{constructor(e=new H,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const n=ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Tu)),this.expandByPoint(ks.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new H,wu=new H,ea=new H,gi=new H,Au=new H,ta=new H,Ru=new H;class Ey{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wu.copy(e).add(n).multiplyScalar(.5),ea.copy(n).sub(e).normalize(),gi.copy(this.origin).sub(wu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ea),a=gi.dot(this.direction),l=-gi.dot(ea),u=gi.lengthSq(),f=Math.abs(1-o*o);let h,d,m,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const v=1/f;h*=v,d*=v,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(wu).addScaledVector(ea,d),m}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,r,s){Au.subVectors(n,e),ta.subVectors(i,e),Ru.crossVectors(Au,ta);let o=this.direction.dot(Ru),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(ta.crossVectors(gi,ta));if(l<0)return null;const u=a*this.direction.dot(Au.cross(gi));if(u<0||l+u>o)return null;const f=-a*gi.dot(Ru);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p)}set(e,n,i,r,s,o,a,l,u,f,h,d,m,x,v,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=m,c[7]=x,c[11]=v,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=m+x*u,n[5]=d-v*u,n[9]=-a*l,n[2]=v-d*u,n[6]=x+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,x=u*f,v=u*h;n[0]=d+v*a,n[4]=x*a-m,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-x,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,x=u*f,v=u*h;n[0]=d-v*a,n[4]=-o*h,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=x*u-m,n[8]=d*u+v,n[1]=l*h,n[5]=v*u+d,n[9]=m*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=v-d*h,n[8]=x*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*h+x,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,m=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+v,n[5]=o*f,n[9]=m*h-x,n[2]=x*h-m,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(My,e,Ty)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),_i.crossVectors(i,rn),_i.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),_i.crossVectors(i,rn)),_i.normalize(),na.crossVectors(rn,_i),r[0]=_i.x,r[4]=na.x,r[8]=rn.x,r[1]=_i.y,r[5]=na.y,r[9]=rn.y,r[2]=_i.z,r[6]=na.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],c=i[14],_=i[3],g=i[7],S=i[11],T=i[15],C=r[0],R=r[4],U=r[8],E=r[12],w=r[1],X=r[5],q=r[9],Z=r[13],b=r[2],W=r[6],Y=r[10],j=r[14],F=r[3],B=r[7],z=r[11],L=r[15];return s[0]=o*C+a*w+l*b+u*F,s[4]=o*R+a*X+l*W+u*B,s[8]=o*U+a*q+l*Y+u*z,s[12]=o*E+a*Z+l*j+u*L,s[1]=f*C+h*w+d*b+m*F,s[5]=f*R+h*X+d*W+m*B,s[9]=f*U+h*q+d*Y+m*z,s[13]=f*E+h*Z+d*j+m*L,s[2]=x*C+v*w+p*b+c*F,s[6]=x*R+v*X+p*W+c*B,s[10]=x*U+v*q+p*Y+c*z,s[14]=x*E+v*Z+p*j+c*L,s[3]=_*C+g*w+S*b+T*F,s[7]=_*R+g*X+S*W+T*B,s[11]=_*U+g*q+S*Y+T*z,s[15]=_*E+g*Z+S*j+T*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],c=e[15];return x*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*m-i*l*m)+v*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*f-s*l*f)+p*(+n*u*h-n*a*m-s*o*h+i*o*m+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],c=e[15],_=h*p*u-v*d*u+v*l*m-a*p*m-h*l*c+a*d*c,g=x*d*u-f*p*u-x*l*m+o*p*m+f*l*c-o*d*c,S=f*v*u-x*h*u+x*a*m-o*v*m-f*a*c+o*h*c,T=x*h*l-f*v*l-x*a*d+o*v*d+f*a*p-o*h*p,C=n*_+i*g+r*S+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=_*R,e[1]=(v*d*s-h*p*s-v*r*m+i*p*m+h*r*c-i*d*c)*R,e[2]=(a*p*s-v*l*s+v*r*u-i*p*u-a*r*c+i*l*c)*R,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*m-i*l*m)*R,e[4]=g*R,e[5]=(f*p*s-x*d*s+x*r*m-n*p*m-f*r*c+n*d*c)*R,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*c-n*l*c)*R,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*m+n*l*m)*R,e[8]=S*R,e[9]=(x*h*s-f*v*s-x*i*m+n*v*m+f*i*c-n*h*c)*R,e[10]=(o*v*s-x*a*s+x*i*u-n*v*u-o*i*c+n*a*c)*R,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*m-n*a*m)*R,e[12]=T*R,e[13]=(f*v*r-x*h*r+x*i*d-n*v*d-f*i*p+n*h*p)*R,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*p-n*a*p)*R,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,m=s*f,x=s*h,v=o*f,p=o*h,c=a*h,_=l*u,g=l*f,S=l*h,T=i.x,C=i.y,R=i.z;return r[0]=(1-(v+c))*T,r[1]=(m+S)*T,r[2]=(x-g)*T,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(d+c))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(x+g)*R,r[9]=(p-_)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const u=1/s,f=1/o,h=1/a;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=f,An.elements[5]*=f,An.elements[6]*=f,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,n.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ri){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,x;if(a===ri)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ll)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ri){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,m=(i+r)*f;let x,v;if(a===ri)x=(o+s)*h,v=-2*h;else if(a===ll)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new H,An=new Ct,My=new H(0,0,0),Ty=new H(1,1,1),_i=new H,na=new H,rn=new H,ip=new Ct,rp=new Lo;class Ll{constructor(e=0,n=0,i=0,r=Ll.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ip,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rp.setFromEuler(this),this.setFromQuaternion(rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ll.DEFAULT_ORDER="XYZ";class T_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wy=0;const sp=new H,Lr=new Lo,$n=new Ct,ia=new H,Bs=new H,Ay=new H,Ry=new Lo,op=new H(1,0,0),ap=new H(0,1,0),lp=new H(0,0,1),Cy={type:"added"},Py={type:"removed"};class cn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new H,n=new Ll,i=new Lo,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Fe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new T_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(ap,e)}rotateZ(e){return this.rotateOnAxis(lp,e)}translateOnAxis(e,n){return sp.copy(e).applyQuaternion(this.quaternion),this.position.add(sp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(ap,e)}translateZ(e){return this.translateOnAxis(lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ia.copy(e):ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Bs,ia,this.up):$n.lookAt(ia,Bs,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix($n),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Py)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Ay),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}cn.DEFAULT_UP=new H(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new H,Kn=new H,Cu=new H,Zn=new H,br=new H,Ur=new H,up=new H,Pu=new H,Lu=new H,bu=new H;let ra=!1;class bn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),Kn.subVectors(i,n),Cu.subVectors(e,n);const o=Rn.dot(Rn),a=Rn.dot(Kn),l=Rn.dot(Cu),u=Kn.dot(Kn),f=Kn.dot(Cu),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(u*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,n,i,r,s,o,a,l){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Zn),l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),Kn.subVectors(e,n),Rn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;br.subVectors(r,i),Ur.subVectors(s,i),Pu.subVectors(e,i);const l=br.dot(Pu),u=Ur.dot(Pu);if(l<=0&&u<=0)return n.copy(i);Lu.subVectors(e,r);const f=br.dot(Lu),h=Ur.dot(Lu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(br,o);bu.subVectors(e,s);const m=br.dot(bu),x=Ur.dot(bu);if(x>=0&&m<=x)return n.copy(s);const v=m*u-l*x;if(v<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Ur,a);const p=f*x-m*h;if(p<=0&&h-f>=0&&m-x>=0)return up.subVectors(s,r),a=(h-f)/(h-f+(m-x)),n.copy(r).addScaledVector(up,a);const c=1/(p+v+d);return o=v*c,a=d*c,n.copy(i).addScaledVector(br,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ly=0;class bl extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=os,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=u_,this.blendDst=c_,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gu,this.stencilZFail=gu,this.stencilZPass=gu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=py(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Uu(o,s,e+1/3),this.g=Uu(o,s,e),this.b=Uu(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,n=wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wt){const i=w_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return je.fromWorkingColorSpace(It.copy(this),e),Math.round(Kt(It.r*255,0,255))*65536+Math.round(Kt(It.g*255,0,255))*256+Math.round(Kt(It.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.fromWorkingColorSpace(It.copy(this),n);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=je.workingColorSpace){return je.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=wt){je.fromWorkingColorSpace(It.copy(this),e);const n=It.r,i=It.g,r=It.b;return e!==wt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+n,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vi),e.getHSL(sa);const i=vu(vi.h,sa.h,n),r=vu(vi.s,sa.s,n),s=vu(vi.l,sa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new et;et.NAMES=w_;class Yf extends bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=f_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new H,oa=new qe;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Kh,this.updateRange={offset:0,count:-1},this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oa.fromBufferAttribute(this,n),oa.applyMatrix3(e),this.setXY(n,oa.x,oa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix3(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix4(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyNormalMatrix(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.transformDirection(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class A_ extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class R_ extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class fr extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let by=0;const mn=new Ct,Du=new cn,Dr=new H,sn=new bo,zs=new bo,St=new H;class Er extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S_(e)?R_:A_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(sn.min,zs.min),sn.expandByPoint(St),St.addVectors(sn.max,zs.max),sn.expandByPoint(St)):(sn.expandByPoint(zs.min),sn.expandByPoint(zs.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)St.fromBufferAttribute(a,u),l&&(Dr.fromBufferAttribute(e,u),St.add(Dr)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let w=0;w<a;w++)u[w]=new H,f[w]=new H;const h=new H,d=new H,m=new H,x=new qe,v=new qe,p=new qe,c=new H,_=new H;function g(w,X,q){h.fromArray(r,w*3),d.fromArray(r,X*3),m.fromArray(r,q*3),x.fromArray(o,w*2),v.fromArray(o,X*2),p.fromArray(o,q*2),d.sub(h),m.sub(h),v.sub(x),p.sub(x);const Z=1/(v.x*p.y-p.x*v.y);isFinite(Z)&&(c.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(Z),_.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(Z),u[w].add(c),u[X].add(c),u[q].add(c),f[w].add(_),f[X].add(_),f[q].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let w=0,X=S.length;w<X;++w){const q=S[w],Z=q.start,b=q.count;for(let W=Z,Y=Z+b;W<Y;W+=3)g(i[W+0],i[W+1],i[W+2])}const T=new H,C=new H,R=new H,U=new H;function E(w){R.fromArray(s,w*3),U.copy(R);const X=u[w];T.copy(X),T.sub(R.multiplyScalar(R.dot(X))).normalize(),C.crossVectors(U,X);const Z=C.dot(f[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=Z}for(let w=0,X=S.length;w<X;++w){const q=S[w],Z=q.start,b=q.count;for(let W=Z,Y=Z+b;W<Y;W+=3)E(i[W+0]),E(i[W+1]),E(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,u=new H,f=new H,h=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)St.fromBufferAttribute(e,n),St.normalize(),e.setXYZ(n,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*f;for(let c=0;c<f;c++)d[x++]=u[m++]}return new Wn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Er,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cp=new Ct,Ki=new Ey,aa=new jf,fp=new H,Nr=new H,Ir=new H,Fr=new H,Nu=new H,la=new H,ua=new qe,ca=new qe,fa=new qe,dp=new H,hp=new H,pp=new H,da=new H,ha=new H;class si extends cn{constructor(e=new Er,n=new Yf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){la.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(Nu.fromBufferAttribute(h,e),o?la.addScaledVector(Nu,f):la.addScaledVector(Nu.sub(n),f))}n.add(la)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(aa.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(aa,fp)===null||Ki.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(cp.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(cp),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ki)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,T=g;S<T;S+=3){const C=a.getX(S),R=a.getX(S+1),U=a.getX(S+2);r=pa(this,c,e,i,u,f,h,C,R,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const _=a.getX(p),g=a.getX(p+1),S=a.getX(p+2);r=pa(this,o,e,i,u,f,h,_,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const p=d[x],c=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,T=g;S<T;S+=3){const C=S,R=S+1,U=S+2;r=pa(this,c,e,i,u,f,h,C,R,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const _=p,g=p+1,S=p+2;r=pa(this,o,e,i,u,f,h,_,g,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Uy(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;ha.copy(a),ha.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ha);return u<n.near||u>n.far?null:{distance:u,point:ha.clone(),object:t}}function pa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Nr),t.getVertexPosition(l,Ir),t.getVertexPosition(u,Fr);const f=Uy(t,e,n,i,Nr,Ir,Fr,da);if(f){r&&(ua.fromBufferAttribute(r,a),ca.fromBufferAttribute(r,l),fa.fromBufferAttribute(r,u),f.uv=bn.getInterpolation(da,Nr,Ir,Fr,ua,ca,fa,new qe)),s&&(ua.fromBufferAttribute(s,a),ca.fromBufferAttribute(s,l),fa.fromBufferAttribute(s,u),f.uv1=bn.getInterpolation(da,Nr,Ir,Fr,ua,ca,fa,new qe),f.uv2=f.uv1),o&&(dp.fromBufferAttribute(o,a),hp.fromBufferAttribute(o,l),pp.fromBufferAttribute(o,u),f.normal=bn.getInterpolation(da,Nr,Ir,Fr,dp,hp,pp,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new H,materialIndex:0};bn.getNormal(Nr,Ir,Fr,h.normal),f.face=h}return f}class ws extends Er{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fr(u,3)),this.setAttribute("normal",new fr(f,3)),this.setAttribute("uv",new fr(h,2));function x(v,p,c,_,g,S,T,C,R,U,E){const w=S/R,X=T/U,q=S/2,Z=T/2,b=C/2,W=R+1,Y=U+1;let j=0,F=0;const B=new H;for(let z=0;z<Y;z++){const L=z*X-Z;for(let O=0;O<W;O++){const oe=O*w-q;B[v]=oe*_,B[p]=L*g,B[c]=b,u.push(B.x,B.y,B.z),B[v]=0,B[p]=0,B[c]=C>0?1:-1,f.push(B.x,B.y,B.z),h.push(O/R),h.push(1-z/U),j+=1}}for(let z=0;z<U;z++)for(let L=0;L<R;L++){const O=d+L+W*z,oe=d+L+W*(z+1),ae=d+(L+1)+W*(z+1),ce=d+(L+1)+W*z;l.push(O,oe,ce),l.push(oe,ae,ce),F+=6}a.addGroup(m,F,E),m+=F,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=vs(t[n]);for(const r in i)e[r]=i[r]}return e}function Dy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function C_(t){return t.getRenderTarget()===null?t.outputColorSpace:je.workingColorSpace}const Ny={clone:vs,merge:Ht};var Iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iy,this.fragmentShader=Fy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=Dy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class P_ extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xn extends P_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vc*2*Math.atan(Math.tan(_u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_u*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Or=-90,kr=1;class Oy extends cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(Or,kr,e,n);r.layers=this.layers,this.add(r);const s=new xn(Or,kr,e,n);s.layers=this.layers,this.add(s);const o=new xn(Or,kr,e,n);o.layers=this.layers,this.add(o);const a=new xn(Or,kr,e,n);a.layers=this.layers,this.add(a);const l=new xn(Or,kr,e,n);l.layers=this.layers,this.add(l);const u=new xn(Or,kr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ll)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class L_ extends un{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:ms,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ky extends _r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(to("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===cr?wt:Sn),this.texture=new L_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ws(5,5,5),s=new vr({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Oi});s.uniforms.tEquirect.value=n;const o=new si(r,s),a=n.minFilter;return n.minFilter===yo&&(n.minFilter=vn),new Oy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Iu=new H,By=new H,zy=new Fe;class er{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Iu.subVectors(i,n).cross(By.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Iu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||zy.getNormalMatrix(e),r=this.coplanarPoint(Iu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new jf,ma=new H;class b_{constructor(e=new er,n=new er,i=new er,r=new er,s=new er,o=new er){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],c=r[12],_=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,p-m,S-c).normalize(),i[1].setComponents(l+s,d+u,p+m,S+c).normalize(),i[2].setComponents(l+o,d+f,p+x,S+_).normalize(),i[3].setComponents(l-o,d-f,p-x,S-_).normalize(),i[4].setComponents(l-a,d-h,p-v,S-g).normalize(),n===ri)i[5].setComponents(l+a,d+h,p+v,S+g).normalize();else if(n===ll)i[5].setComponents(a,h,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ma.x=r.normal.x>0?e.max.x:e.min.x,ma.y=r.normal.y>0?e.max.y:e.min.y,ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function U_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Hy(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,m=t.createBuffer();t.bindBuffer(f,m),t.bufferData(f,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,h){const d=f.array,m=f.updateRange;t.bindBuffer(h,u),m.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,f)):h.version<u.version&&(s(h.buffer,u,f),h.version=u.version)}return{get:o,remove:a,update:l}}class qf extends Er{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,m=[],x=[],v=[],p=[];for(let c=0;c<f;c++){const _=c*d-o;for(let g=0;g<u;g++){const S=g*h-s;x.push(S,-_,0),v.push(0,0,1),p.push(g/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,S=_+u*(c+1),T=_+1+u*(c+1),C=_+1+u*c;m.push(g,S,C),m.push(S,T,C)}this.setIndex(m),this.setAttribute("position",new fr(x,3)),this.setAttribute("normal",new fr(v,3)),this.setAttribute("uv",new fr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ky=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fE=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gE="gl_FragColor = linearToOutputTexel( gl_FragColor );",_E=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ME=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,PE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,BE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,YE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,RM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,YM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_T=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Vy,alphahash_pars_fragment:Gy,alphamap_fragment:Wy,alphamap_pars_fragment:Xy,alphatest_fragment:jy,alphatest_pars_fragment:Yy,aomap_fragment:qy,aomap_pars_fragment:$y,begin_vertex:Ky,beginnormal_vertex:Zy,bsdfs:Qy,iridescence_fragment:Jy,bumpmap_pars_fragment:eE,clipping_planes_fragment:tE,clipping_planes_pars_fragment:nE,clipping_planes_pars_vertex:iE,clipping_planes_vertex:rE,color_fragment:sE,color_pars_fragment:oE,color_pars_vertex:aE,color_vertex:lE,common:uE,cube_uv_reflection_fragment:cE,defaultnormal_vertex:fE,displacementmap_pars_vertex:dE,displacementmap_vertex:hE,emissivemap_fragment:pE,emissivemap_pars_fragment:mE,colorspace_fragment:gE,colorspace_pars_fragment:_E,envmap_fragment:vE,envmap_common_pars_fragment:xE,envmap_pars_fragment:SE,envmap_pars_vertex:yE,envmap_physical_pars_fragment:DE,envmap_vertex:EE,fog_vertex:ME,fog_pars_vertex:TE,fog_fragment:wE,fog_pars_fragment:AE,gradientmap_pars_fragment:RE,lightmap_fragment:CE,lightmap_pars_fragment:PE,lights_lambert_fragment:LE,lights_lambert_pars_fragment:bE,lights_pars_begin:UE,lights_toon_fragment:NE,lights_toon_pars_fragment:IE,lights_phong_fragment:FE,lights_phong_pars_fragment:OE,lights_physical_fragment:kE,lights_physical_pars_fragment:BE,lights_fragment_begin:zE,lights_fragment_maps:HE,lights_fragment_end:VE,logdepthbuf_fragment:GE,logdepthbuf_pars_fragment:WE,logdepthbuf_pars_vertex:XE,logdepthbuf_vertex:jE,map_fragment:YE,map_pars_fragment:qE,map_particle_fragment:$E,map_particle_pars_fragment:KE,metalnessmap_fragment:ZE,metalnessmap_pars_fragment:QE,morphcolor_vertex:JE,morphnormal_vertex:eM,morphtarget_pars_vertex:tM,morphtarget_vertex:nM,normal_fragment_begin:iM,normal_fragment_maps:rM,normal_pars_fragment:sM,normal_pars_vertex:oM,normal_vertex:aM,normalmap_pars_fragment:lM,clearcoat_normal_fragment_begin:uM,clearcoat_normal_fragment_maps:cM,clearcoat_pars_fragment:fM,iridescence_pars_fragment:dM,opaque_fragment:hM,packing:pM,premultiplied_alpha_fragment:mM,project_vertex:gM,dithering_fragment:_M,dithering_pars_fragment:vM,roughnessmap_fragment:xM,roughnessmap_pars_fragment:SM,shadowmap_pars_fragment:yM,shadowmap_pars_vertex:EM,shadowmap_vertex:MM,shadowmask_pars_fragment:TM,skinbase_vertex:wM,skinning_pars_vertex:AM,skinning_vertex:RM,skinnormal_vertex:CM,specularmap_fragment:PM,specularmap_pars_fragment:LM,tonemapping_fragment:bM,tonemapping_pars_fragment:UM,transmission_fragment:DM,transmission_pars_fragment:NM,uv_pars_fragment:IM,uv_pars_vertex:FM,uv_vertex:OM,worldpos_vertex:kM,background_vert:BM,background_frag:zM,backgroundCube_vert:HM,backgroundCube_frag:VM,cube_vert:GM,cube_frag:WM,depth_vert:XM,depth_frag:jM,distanceRGBA_vert:YM,distanceRGBA_frag:qM,equirect_vert:$M,equirect_frag:KM,linedashed_vert:ZM,linedashed_frag:QM,meshbasic_vert:JM,meshbasic_frag:eT,meshlambert_vert:tT,meshlambert_frag:nT,meshmatcap_vert:iT,meshmatcap_frag:rT,meshnormal_vert:sT,meshnormal_frag:oT,meshphong_vert:aT,meshphong_frag:lT,meshphysical_vert:uT,meshphysical_frag:cT,meshtoon_vert:fT,meshtoon_frag:dT,points_vert:hT,points_frag:pT,shadow_vert:mT,shadow_frag:gT,sprite_vert:_T,sprite_frag:vT},se={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},zn={basic:{uniforms:Ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new et(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Ht([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Ht([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new et(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Ht([se.points,se.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Ht([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Ht([se.common,se.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Ht([se.sprite,se.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Ht([se.common,se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Ht([se.lights,se.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};zn.physical={uniforms:Ht([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const ga={r:0,b:0,g:0};function xT(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,f,h=null,d=0,m=null;function x(p,c){let _=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),_=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Cl)?(f===void 0&&(f=new si(new ws(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:vs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=je.getTransfer(g.colorSpace)!==Je,(h!==g||d!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new si(new qf(2,2),new vr({name:"BackgroundMaterial",uniforms:vs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=je.getTransfer(g.colorSpace)!==Je,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function v(p,c){p.getRGB(ga,C_(t)),i.buffers.color.setClear(ga.r,ga.g,ga.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:x}}function ST(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,f=!1;function h(b,W,Y,j,F){let B=!1;if(o){const z=v(j,Y,W);u!==z&&(u=z,m(u.object)),B=c(b,j,Y,F),B&&_(b,j,Y,F)}else{const z=W.wireframe===!0;(u.geometry!==j.id||u.program!==Y.id||u.wireframe!==z)&&(u.geometry=j.id,u.program=Y.id,u.wireframe=z,B=!0)}F!==null&&n.update(F,t.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,U(b,W,Y,j),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(F).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(b){return i.isWebGL2?t.bindVertexArray(b):s.bindVertexArrayOES(b)}function x(b){return i.isWebGL2?t.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function v(b,W,Y){const j=Y.wireframe===!0;let F=a[b.id];F===void 0&&(F={},a[b.id]=F);let B=F[W.id];B===void 0&&(B={},F[W.id]=B);let z=B[j];return z===void 0&&(z=p(d()),B[j]=z),z}function p(b){const W=[],Y=[],j=[];for(let F=0;F<r;F++)W[F]=0,Y[F]=0,j[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:j,object:b,attributes:{},index:null}}function c(b,W,Y,j){const F=u.attributes,B=W.attributes;let z=0;const L=Y.getAttributes();for(const O in L)if(L[O].location>=0){const ae=F[O];let ce=B[O];if(ce===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ae===void 0||ae.attribute!==ce||ce&&ae.data!==ce.data)return!0;z++}return u.attributesNum!==z||u.index!==j}function _(b,W,Y,j){const F={},B=W.attributes;let z=0;const L=Y.getAttributes();for(const O in L)if(L[O].location>=0){let ae=B[O];ae===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));const ce={};ce.attribute=ae,ae&&ae.data&&(ce.data=ae.data),F[O]=ce,z++}u.attributes=F,u.attributesNum=z,u.index=j}function g(){const b=u.newAttributes;for(let W=0,Y=b.length;W<Y;W++)b[W]=0}function S(b){T(b,0)}function T(b,W){const Y=u.newAttributes,j=u.enabledAttributes,F=u.attributeDivisors;Y[b]=1,j[b]===0&&(t.enableVertexAttribArray(b),j[b]=1),F[b]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,W),F[b]=W)}function C(){const b=u.newAttributes,W=u.enabledAttributes;for(let Y=0,j=W.length;Y<j;Y++)W[Y]!==b[Y]&&(t.disableVertexAttribArray(Y),W[Y]=0)}function R(b,W,Y,j,F,B,z){z===!0?t.vertexAttribIPointer(b,W,Y,F,B):t.vertexAttribPointer(b,W,Y,j,F,B)}function U(b,W,Y,j){if(i.isWebGL2===!1&&(b.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const F=j.attributes,B=Y.getAttributes(),z=W.defaultAttributeValues;for(const L in B){const O=B[L];if(O.location>=0){let oe=F[L];if(oe===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),oe!==void 0){const ae=oe.normalized,ce=oe.itemSize,me=n.get(oe);if(me===void 0)continue;const Se=me.buffer,ye=me.type,Ge=me.bytesPerElement,Yt=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||oe.gpuType===h_);if(oe.isInterleavedBufferAttribute){const Ne=oe.data,N=Ne.stride,Lt=oe.offset;if(Ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<O.locationSize;Ee++)T(O.location+Ee,Ne.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ee=0;Ee<O.locationSize;Ee++)S(O.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Ee=0;Ee<O.locationSize;Ee++)R(O.location+Ee,ce/O.locationSize,ye,ae,N*Ge,(Lt+ce/O.locationSize*Ee)*Ge,Yt)}else{if(oe.isInstancedBufferAttribute){for(let Ne=0;Ne<O.locationSize;Ne++)T(O.location+Ne,oe.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<O.locationSize;Ne++)S(O.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Ne=0;Ne<O.locationSize;Ne++)R(O.location+Ne,ce/O.locationSize,ye,ae,ce*Ge,ce/O.locationSize*Ne*Ge,Yt)}}else if(z!==void 0){const ae=z[L];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(O.location,ae);break;case 3:t.vertexAttrib3fv(O.location,ae);break;case 4:t.vertexAttrib4fv(O.location,ae);break;default:t.vertexAttrib1fv(O.location,ae)}}}}C()}function E(){q();for(const b in a){const W=a[b];for(const Y in W){const j=W[Y];for(const F in j)x(j[F].object),delete j[F];delete W[Y]}delete a[b]}}function w(b){if(a[b.id]===void 0)return;const W=a[b.id];for(const Y in W){const j=W[Y];for(const F in j)x(j[F].object),delete j[F];delete W[Y]}delete a[b.id]}function X(b){for(const W in a){const Y=a[W];if(Y[b.id]===void 0)continue;const j=Y[b.id];for(const F in j)x(j[F].object),delete j[F];delete Y[b.id]}}function q(){Z(),f=!0,u!==l&&(u=l,m(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:Z,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:X,initAttributes:g,enableAttribute:S,disableUnusedAttributes:C}}function yT(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,f,h),n.update(f,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function ET(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,S=o||e.has("OES_texture_float"),T=g&&S,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:C}}function MT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new er,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?f(null):u();else{const _=s?0:i,g=_*4;let S=c.clippingState||null;l.value=S,S=f(x,d,g,m);for(let T=0;T!==g;++T)S[T]=n[T];c.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,x){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const c=m+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,S=m;g!==v;++g,S+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function TT(t){let e=new WeakMap;function n(o,a){return a===Oc?o.mapping=ms:a===kc&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Oc||a===kc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new ky(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wT extends P_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Jr=4,mp=[.125,.215,.35,.446,.526,.582],nr=20,Fu=new wT,gp=new et;let Ou=null;const tr=(1+Math.sqrt(5))/2,Br=1/tr,_p=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,tr,Br),new H(0,tr,-Br),new H(Br,0,tr),new H(-Br,0,tr),new H(tr,Br,0),new H(-tr,Br,0)];class vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ou=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou),e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Eo,format:Dn,colorSpace:fi,depthBuffer:!1},r=xp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(s)),this._blurMaterial=RT(s,e,n)}return r}_compileMaterial(e){const n=new si(this._lodPlanes[0],e);this._renderer.compile(n,Fu)}_sceneToCubeUV(e,n,i,r){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(gp),f.toneMapping=ki,f.autoClear=!1;const m=new Yf({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new si(new ws,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(gp),v=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;_a(r,_*g,c>2?g:0,g,g),f.setRenderTarget(r),v&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_a(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Fu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_p[(r-1)%_p.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new si(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*nr-1),v=s/x,p=isFinite(s)?1+Math.floor(f*v):nr;p>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nr}`);const c=[];let _=0;for(let R=0;R<nr;++R){const U=R/v,E=Math.exp(-U*U/2);c.push(E),R===0?_+=E:R<p&&(_+=2*E)}for(let R=0;R<c.length;R++)c[R]=c[R]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-i;const S=this._sizeLods[r],T=3*S*(r>g-Jr?r-g+Jr:0),C=4*(this._cubeSize-S);_a(n,T,C,3*S,2*S),l.setRenderTarget(n),l.render(h,Fu)}}function AT(t){const e=[],n=[],i=[];let r=t;const s=t-Jr+1+mp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Jr?l=mp[o-t+Jr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,x=6,v=3,p=2,c=1,_=new Float32Array(v*x*m),g=new Float32Array(p*x*m),S=new Float32Array(c*x*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,U=C>2?0:-1,E=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];_.set(E,v*x*C),g.set(d,p*x*C);const w=[C,C,C,C,C,C];S.set(w,c*x*C)}const T=new Er;T.setAttribute("position",new Wn(_,v)),T.setAttribute("uv",new Wn(g,p)),T.setAttribute("faceIndex",new Wn(S,c)),e.push(T),r>Jr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xp(t,e,n){const i=new _r(t,e,n);return i.texture.mapping=Cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function RT(t,e,n){const i=new Float32Array(nr),r=new H(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Sp(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function yp(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function $f(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Oc||l===kc,f=l===ms||l===gs;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new vp(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new vp(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function PT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function LT(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,c=v.length;p<c;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const v=m[x];for(let p=0,c=v.length;p<c;p++)e.update(v[p],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,x=h.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let g=0,S=_.length;g<S;g+=3){const T=_[g+0],C=_[g+1],R=_[g+2];d.push(T,C,C,R,R,T)}}else if(x!==void 0){const _=x.array;v=x.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const T=g+0,C=g+1,R=g+2;d.push(T,C,C,R,R,T)}}else return;const p=new(S_(d)?R_:A_)(d,1);p.version=v;const c=s.get(h);c&&e.remove(c),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function bT(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function f(d,m){t.drawElements(s,m,a,d*l),n.update(m,s,1)}function h(d,m,x){if(x===0)return;let v,p;if(r)v=t,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,a,d*l,x),n.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h}function UT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function DT(t,e){return t[0]-e[0]}function NT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function IT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new At,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==v){let W=function(){Z.dispose(),s.delete(f),f.removeEventListener("dispose",W)};var m=W;p!==void 0&&p.texture.dispose();const g=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let E=0;g===!0&&(E=1),S===!0&&(E=2),T===!0&&(E=3);let w=f.attributes.position.count*E,X=1;w>e.maxTextureSize&&(X=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const q=new Float32Array(w*X*4*v),Z=new M_(q,w,X,v);Z.type=Ri,Z.needsUpdate=!0;const b=E*4;for(let Y=0;Y<v;Y++){const j=C[Y],F=R[Y],B=U[Y],z=w*X*4*Y;for(let L=0;L<j.count;L++){const O=L*b;g===!0&&(o.fromBufferAttribute(j,L),q[z+O+0]=o.x,q[z+O+1]=o.y,q[z+O+2]=o.z,q[z+O+3]=0),S===!0&&(o.fromBufferAttribute(F,L),q[z+O+4]=o.x,q[z+O+5]=o.y,q[z+O+6]=o.z,q[z+O+7]=0),T===!0&&(o.fromBufferAttribute(B,L),q[z+O+8]=o.x,q[z+O+9]=o.y,q[z+O+10]=o.z,q[z+O+11]=B.itemSize===4?o.w:1)}}p={count:v,texture:Z,size:new qe(w,X)},s.set(f,p),f.addEventListener("dispose",W)}let c=0;for(let g=0;g<d.length;g++)c+=d[g];const _=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=i[f.id];if(v===void 0||v.length!==x){v=[];for(let S=0;S<x;S++)v[S]=[S,0];i[f.id]=v}for(let S=0;S<x;S++){const T=v[S];T[0]=S,T[1]=d[S]}v.sort(NT);for(let S=0;S<8;S++)S<x&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(DT);const p=f.morphAttributes.position,c=f.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const T=a[S],C=T[0],R=T[1];C!==Number.MAX_SAFE_INTEGER&&R?(p&&f.getAttribute("morphTarget"+S)!==p[C]&&f.setAttribute("morphTarget"+S,p[C]),c&&f.getAttribute("morphNormal"+S)!==c[C]&&f.setAttribute("morphNormal"+S,c[C]),r[S]=R,_+=R):(p&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),c&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const g=f.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function FT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const D_=new un,N_=new M_,I_=new Sy,F_=new L_,Ep=[],Mp=[],Tp=new Float32Array(16),wp=new Float32Array(9),Ap=new Float32Array(4);function As(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ep[r];if(s===void 0&&(s=new Float32Array(r),Ep[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ul(t,e){let n=Mp[e];n===void 0&&(n=new Int32Array(e),Mp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function OT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vt(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function HT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;Ap.set(i),t.uniformMatrix2fv(this.addr,!1,Ap),xt(n,i)}}function VT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;wp.set(i),t.uniformMatrix3fv(this.addr,!1,wp),xt(n,i)}}function GT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;Tp.set(i),t.uniformMatrix4fv(this.addr,!1,Tp),xt(n,i)}}function WT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function qT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function QT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||D_,r)}function JT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||I_,r)}function e1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||F_,r)}function t1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||N_,r)}function n1(t){switch(t){case 5126:return OT;case 35664:return kT;case 35665:return BT;case 35666:return zT;case 35674:return HT;case 35675:return VT;case 35676:return GT;case 5124:case 35670:return WT;case 35667:case 35671:return XT;case 35668:case 35672:return jT;case 35669:case 35673:return YT;case 5125:return qT;case 36294:return $T;case 36295:return KT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return t1}}function i1(t,e){t.uniform1fv(this.addr,e)}function r1(t,e){const n=As(e,this.size,2);t.uniform2fv(this.addr,n)}function s1(t,e){const n=As(e,this.size,3);t.uniform3fv(this.addr,n)}function o1(t,e){const n=As(e,this.size,4);t.uniform4fv(this.addr,n)}function a1(t,e){const n=As(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function l1(t,e){const n=As(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function u1(t,e){const n=As(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function c1(t,e){t.uniform1iv(this.addr,e)}function f1(t,e){t.uniform2iv(this.addr,e)}function d1(t,e){t.uniform3iv(this.addr,e)}function h1(t,e){t.uniform4iv(this.addr,e)}function p1(t,e){t.uniform1uiv(this.addr,e)}function m1(t,e){t.uniform2uiv(this.addr,e)}function g1(t,e){t.uniform3uiv(this.addr,e)}function _1(t,e){t.uniform4uiv(this.addr,e)}function v1(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||D_,s[o])}function x1(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||I_,s[o])}function S1(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||F_,s[o])}function y1(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||N_,s[o])}function E1(t){switch(t){case 5126:return i1;case 35664:return r1;case 35665:return s1;case 35666:return o1;case 35674:return a1;case 35675:return l1;case 35676:return u1;case 5124:case 35670:return c1;case 35667:case 35671:return f1;case 35668:case 35672:return d1;case 35669:case 35673:return h1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return y1}}class M1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=n1(n.type)}}class T1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=E1(n.type)}}class w1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function Rp(t,e){t.seq.push(e),t.map[e.id]=e}function A1(t,e,n){const i=t.name,r=i.length;for(ku.lastIndex=0;;){const s=ku.exec(i),o=ku.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Rp(n,u===void 0?new M1(a,t,e):new T1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new w1(a),Rp(n,h)),n=h}}}class ba{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);A1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Cp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let R1=0;function C1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function P1(t){const e=je.getPrimaries(je.workingColorSpace),n=je.getPrimaries(t);let i;switch(e===n?i="":e===al&&n===ol?i="LinearDisplayP3ToLinearSRGB":e===ol&&n===al&&(i="LinearSRGBToLinearDisplayP3"),t){case fi:case Pl:return[i,"LinearTransferOETF"];case wt:case Xf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Pp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+C1(t.getShaderSource(e),o)}else return r}function L1(t,e){const n=P1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function b1(t,e){let n;switch(e){case zS:n="Linear";break;case HS:n="Reinhard";break;case VS:n="OptimizedCineon";break;case GS:n="ACESFilmic";break;case WS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function U1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function D1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function N1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xs(t){return t!==""}function Lp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(t){return t.replace(I1,O1)}const F1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function O1(t,e){let n=De[e];if(n===void 0){const i=F1.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wc(n)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Up(t){return t.replace(k1,B1)}function B1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===l_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function H1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function G1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case f_:e="ENVMAP_BLENDING_MULTIPLY";break;case kS:e="ENVMAP_BLENDING_MIX";break;case BS:e="ENVMAP_BLENDING_ADD";break}return e}function W1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function X1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=z1(n),u=H1(n),f=V1(n),h=G1(n),d=W1(n),m=n.isWebGL2?"":U1(n),x=D1(s),v=r.createProgram();let p,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Xs).join(`
`),p.length>0&&(p+=`
`),c=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Xs).join(`
`),c.length>0&&(c+=`
`)):(p=[Dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),c=[m,Dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?De.tonemapping_pars_fragment:"",n.toneMapping!==ki?b1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,L1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Wc(o),o=Lp(o,n),o=bp(o,n),a=Wc(a),a=Lp(a,n),a=bp(a,n),o=Up(o),a=Up(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+p+o,S=_+c+a,T=Cp(r,r.VERTEX_SHADER,g),C=Cp(r,r.FRAGMENT_SHADER,S);if(r.attachShader(v,T),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const E=r.getProgramInfoLog(v).trim(),w=r.getShaderInfoLog(T).trim(),X=r.getShaderInfoLog(C).trim();let q=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,T,C);else{const b=Pp(r,T,"vertex"),W=Pp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+b+`
`+W)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(w===""||X==="")&&(Z=!1);Z&&(this.diagnostics={runnable:q,programLog:E,vertexShader:{log:w,prefix:p},fragmentShader:{log:X,prefix:c}})}r.deleteShader(T),r.deleteShader(C);let R;this.getUniforms=function(){return R===void 0&&(R=new ba(r,v)),R};let U;return this.getAttributes=function(){return U===void 0&&(U=N1(r,v)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=R1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=C,this}let j1=0;class Y1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new q1(e),n.set(e,i)),i}}class q1{constructor(e){this.id=j1++,this.code=e,this.usedTimes=0}}function $1(t,e,n,i,r,s,o){const a=new T_,l=new Y1,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,w,X,q,Z){const b=q.fog,W=Z.geometry,Y=E.isMeshStandardMaterial?q.environment:null,j=(E.isMeshStandardMaterial?n:e).get(E.envMap||Y),F=j&&j.mapping===Cl?j.image.height:null,B=x[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,L=z!==void 0?z.length:0;let O=0;W.morphAttributes.position!==void 0&&(O=1),W.morphAttributes.normal!==void 0&&(O=2),W.morphAttributes.color!==void 0&&(O=3);let oe,ae,ce,me;if(B){const Ze=zn[B];oe=Ze.vertexShader,ae=Ze.fragmentShader}else oe=E.vertexShader,ae=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const Se=t.getRenderTarget(),ye=Z.isInstancedMesh===!0,Ge=!!E.map,Yt=!!E.matcap,Ne=!!j,N=!!E.aoMap,Lt=!!E.lightMap,Ee=!!E.bumpMap,be=!!E.normalMap,Ce=!!E.displacementMap,it=!!E.emissiveMap,ze=!!E.metalnessMap,Ie=!!E.roughnessMap,Ye=E.anisotropy>0,Mt=E.clearcoat>0,bt=E.iridescence>0,A=E.sheen>0,y=E.transmission>0,k=Ye&&!!E.anisotropyMap,ee=Mt&&!!E.clearcoatMap,Q=Mt&&!!E.clearcoatNormalMap,te=Mt&&!!E.clearcoatRoughnessMap,ge=bt&&!!E.iridescenceMap,re=bt&&!!E.iridescenceThicknessMap,ue=A&&!!E.sheenColorMap,Te=A&&!!E.sheenRoughnessMap,Ve=!!E.specularMap,J=!!E.specularColorMap,Xe=!!E.specularIntensityMap,Pe=y&&!!E.transmissionMap,we=y&&!!E.thicknessMap,xe=!!E.gradientMap,P=!!E.alphaMap,ie=E.alphaTest>0,ne=!!E.alphaHash,de=!!E.extensions,le=!!W.attributes.uv1,$=!!W.attributes.uv2,_e=!!W.attributes.uv3;let Le=ki;return E.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Le=t.toneMapping),{isWebGL2:f,shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:ae,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:ye,instancingColor:ye&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:fi,map:Ge,matcap:Yt,envMap:Ne,envMapMode:Ne&&j.mapping,envMapCubeUVHeight:F,aoMap:N,lightMap:Lt,bumpMap:Ee,normalMap:be,displacementMap:d&&Ce,emissiveMap:it,normalMapObjectSpace:be&&E.normalMapType===ry,normalMapTangentSpace:be&&E.normalMapType===iy,metalnessMap:ze,roughnessMap:Ie,anisotropy:Ye,anisotropyMap:k,clearcoat:Mt,clearcoatMap:ee,clearcoatNormalMap:Q,clearcoatRoughnessMap:te,iridescence:bt,iridescenceMap:ge,iridescenceThicknessMap:re,sheen:A,sheenColorMap:ue,sheenRoughnessMap:Te,specularMap:Ve,specularColorMap:J,specularIntensityMap:Xe,transmission:y,transmissionMap:Pe,thicknessMap:we,gradientMap:xe,opaque:E.transparent===!1&&E.blending===os,alphaMap:P,alphaTest:ie,alphaHash:ne,combine:E.combine,mapUv:Ge&&v(E.map.channel),aoMapUv:N&&v(E.aoMap.channel),lightMapUv:Lt&&v(E.lightMap.channel),bumpMapUv:Ee&&v(E.bumpMap.channel),normalMapUv:be&&v(E.normalMap.channel),displacementMapUv:Ce&&v(E.displacementMap.channel),emissiveMapUv:it&&v(E.emissiveMap.channel),metalnessMapUv:ze&&v(E.metalnessMap.channel),roughnessMapUv:Ie&&v(E.roughnessMap.channel),anisotropyMapUv:k&&v(E.anisotropyMap.channel),clearcoatMapUv:ee&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(E.sheenRoughnessMap.channel),specularMapUv:Ve&&v(E.specularMap.channel),specularColorMapUv:J&&v(E.specularColorMap.channel),specularIntensityMapUv:Xe&&v(E.specularIntensityMap.channel),transmissionMapUv:Pe&&v(E.transmissionMap.channel),thicknessMapUv:we&&v(E.thicknessMap.channel),alphaMapUv:P&&v(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(be||Ye),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:$,vertexUv3s:_e,pointsUvs:Z.isPoints===!0&&!!W.attributes.uv&&(Ge||P),fog:!!b,useFog:E.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:O,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ge&&E.map.isVideoTexture===!0&&je.getTransfer(E.map.colorSpace)===Je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ti,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:de&&E.extensions.derivatives===!0,extensionFragDepth:de&&E.extensions.fragDepth===!0,extensionDrawBuffers:de&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function c(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)w.push(X),w.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(_(w,E),g(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function _(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function g(E,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function S(E){const w=x[E.type];let X;if(w){const q=zn[w];X=Ny.clone(q.uniforms)}else X=E.uniforms;return X}function T(E,w){let X;for(let q=0,Z=u.length;q<Z;q++){const b=u[q];if(b.cacheKey===w){X=b,++X.usedTimes;break}}return X===void 0&&(X=new X1(t,w,E,s),u.push(X)),X}function C(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:S,acquireProgram:T,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:U}}function K1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Z1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Np(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ip(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,x,v,p){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:m,groupOrder:x,renderOrder:h.renderOrder,z:v,group:p},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=m,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=v,c.group=p),e++,c}function a(h,d,m,x,v,p){const c=o(h,d,m,x,v,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(h,d,m,x,v,p){const c=o(h,d,m,x,v,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||Z1),i.length>1&&i.sort(d||Np),r.length>1&&r.sort(d||Np)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function Q1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ip,t.set(i,[o])):r>=s.length?(o=new Ip,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function J1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new et};break;case"SpotLight":n={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function ew(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tw=0;function nw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function iw(t,e){const n=new J1,i=ew(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new H);const s=new H,o=new Ct,a=new Ct;function l(f,h){let d=0,m=0,x=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let v=0,p=0,c=0,_=0,g=0,S=0,T=0,C=0,R=0,U=0,E=0;f.sort(nw);const w=h===!0?Math.PI:1;for(let q=0,Z=f.length;q<Z;q++){const b=f[q],W=b.color,Y=b.intensity,j=b.distance,F=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=W.r*Y*w,m+=W.g*Y*w,x+=W.b*Y*w;else if(b.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(b.sh.coefficients[B],Y);E++}else if(b.isDirectionalLight){const B=n.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity*w),b.castShadow){const z=b.shadow,L=i.get(b);L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,r.directionalShadow[v]=L,r.directionalShadowMap[v]=F,r.directionalShadowMatrix[v]=b.shadow.matrix,S++}r.directional[v]=B,v++}else if(b.isSpotLight){const B=n.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(W).multiplyScalar(Y*w),B.distance=j,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,r.spot[c]=B;const z=b.shadow;if(b.map&&(r.spotLightMap[R]=b.map,R++,z.updateMatrices(b),b.castShadow&&U++),r.spotLightMatrix[c]=z.matrix,b.castShadow){const L=i.get(b);L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,r.spotShadow[c]=L,r.spotShadowMap[c]=F,C++}c++}else if(b.isRectAreaLight){const B=n.get(b);B.color.copy(W).multiplyScalar(Y),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),r.rectArea[_]=B,_++}else if(b.isPointLight){const B=n.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity*w),B.distance=b.distance,B.decay=b.decay,b.castShadow){const z=b.shadow,L=i.get(b);L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,L.shadowCameraNear=z.camera.near,L.shadowCameraFar=z.camera.far,r.pointShadow[p]=L,r.pointShadowMap[p]=F,r.pointShadowMatrix[p]=b.shadow.matrix,T++}r.point[p]=B,p++}else if(b.isHemisphereLight){const B=n.get(b);B.skyColor.copy(b.color).multiplyScalar(Y*w),B.groundColor.copy(b.groundColor).multiplyScalar(Y*w),r.hemi[g]=B,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==v||X.pointLength!==p||X.spotLength!==c||X.rectAreaLength!==_||X.hemiLength!==g||X.numDirectionalShadows!==S||X.numPointShadows!==T||X.numSpotShadows!==C||X.numSpotMaps!==R||X.numLightProbes!==E)&&(r.directional.length=v,r.spot.length=c,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+R-U,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=E,X.directionalLength=v,X.pointLength=p,X.spotLength=c,X.rectAreaLength=_,X.hemiLength=g,X.numDirectionalShadows=S,X.numPointShadows=T,X.numSpotShadows=C,X.numSpotMaps=R,X.numLightProbes=E,r.version=tw++)}function u(f,h){let d=0,m=0,x=0,v=0,p=0;const c=h.matrixWorldInverse;for(let _=0,g=f.length;_<g;_++){const S=f[_];if(S.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),d++}else if(S.isSpotLight){const T=r.spot[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(c),x++}else if(S.isRectAreaLight){const T=r.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),a.identity(),o.copy(S.matrixWorld),o.premultiply(c),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(c),m++}else if(S.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(c),p++}}}return{setup:l,setupView:u,state:r}}function Fp(t,e){const n=new iw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function rw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Fp(t,e),n.set(s,[l])):o>=a.length?(l=new Fp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class sw extends bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ow extends bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uw(t,e,n){let i=new b_;const r=new qe,s=new qe,o=new At,a=new sw({depthPacking:ny}),l=new ow,u={},f=n.maxTextureSize,h={[Vi]:tn,[tn]:Vi,[ti]:ti},d=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:aw,fragmentShader:lw}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Er;x.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new si(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l_;let c=this.type;this.render=function(T,C,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const U=t.getRenderTarget(),E=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),X=t.state;X.setBlending(Oi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const q=c!==Qn&&this.type===Qn,Z=c===Qn&&this.type!==Qn;for(let b=0,W=T.length;b<W;b++){const Y=T[b],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const F=j.getFrameExtents();if(r.multiply(F),s.copy(j.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/F.x),r.x=s.x*F.x,j.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/F.y),r.y=s.y*F.y,j.mapSize.y=s.y)),j.map===null||q===!0||Z===!0){const z=this.type!==Qn?{minFilter:Gt,magFilter:Gt}:{};j.map!==null&&j.map.dispose(),j.map=new _r(r.x,r.y,z),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const B=j.getViewportCount();for(let z=0;z<B;z++){const L=j.getViewport(z);o.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),X.viewport(o),j.updateMatrices(Y,z),i=j.getFrustum(),S(C,R,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===Qn&&_(j,R),j.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(U,E,w)};function _(T,C){const R=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _r(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,R,d,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,R,m,v,null)}function g(T,C,R,U){let E=null;const w=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)E=w;else if(E=R.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=E.uuid,q=C.uuid;let Z=u[X];Z===void 0&&(Z={},u[X]=Z);let b=Z[q];b===void 0&&(b=E.clone(),Z[q]=b),E=b}if(E.visible=C.visible,E.wireframe=C.wireframe,U===Qn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const X=t.properties.get(E);X.light=R}return E}function S(T,C,R,U,E){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Qn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const q=e.update(T),Z=T.material;if(Array.isArray(Z)){const b=q.groups;for(let W=0,Y=b.length;W<Y;W++){const j=b[W],F=Z[j.materialIndex];if(F&&F.visible){const B=g(T,F,U,E);t.renderBufferDirect(R,null,q,B,T,j)}}}else if(Z.visible){const b=g(T,Z,U,E);t.renderBufferDirect(R,null,q,b,T,null)}}const X=T.children;for(let q=0,Z=X.length;q<Z;q++)S(X[q],C,R,U,E)}}function cw(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ie=new At;let ne=null;const de=new At(0,0,0,0);return{setMask:function(le){ne!==le&&!P&&(t.colorMask(le,le,le,le),ne=le)},setLocked:function(le){P=le},setClear:function(le,$,_e,Le,kt){kt===!0&&(le*=Le,$*=Le,_e*=Le),ie.set(le,$,_e,Le),de.equals(ie)===!1&&(t.clearColor(le,$,_e,Le),de.copy(ie))},reset:function(){P=!1,ne=null,de.set(-1,0,0,0)}}}function s(){let P=!1,ie=null,ne=null,de=null;return{setTest:function(le){le?Se(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(le){ie!==le&&!P&&(t.depthMask(le),ie=le)},setFunc:function(le){if(ne!==le){switch(le){case bS:t.depthFunc(t.NEVER);break;case US:t.depthFunc(t.ALWAYS);break;case DS:t.depthFunc(t.LESS);break;case Fc:t.depthFunc(t.LEQUAL);break;case NS:t.depthFunc(t.EQUAL);break;case IS:t.depthFunc(t.GEQUAL);break;case FS:t.depthFunc(t.GREATER);break;case OS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=le}},setLocked:function(le){P=le},setClear:function(le){de!==le&&(t.clearDepth(le),de=le)},reset:function(){P=!1,ie=null,ne=null,de=null}}}function o(){let P=!1,ie=null,ne=null,de=null,le=null,$=null,_e=null,Le=null,kt=null;return{setTest:function(Ze){P||(Ze?Se(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!P&&(t.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,On,Bt){(ne!==Ze||de!==On||le!==Bt)&&(t.stencilFunc(Ze,On,Bt),ne=Ze,de=On,le=Bt)},setOp:function(Ze,On,Bt){($!==Ze||_e!==On||Le!==Bt)&&(t.stencilOp(Ze,On,Bt),$=Ze,_e=On,Le=Bt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){kt!==Ze&&(t.clearStencil(Ze),kt=Ze)},reset:function(){P=!1,ie=null,ne=null,de=null,le=null,$=null,_e=null,Le=null,kt=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,h=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,c=!1,_=null,g=null,S=null,T=null,C=null,R=null,U=null,E=!1,w=null,X=null,q=null,Z=null,b=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(F)[1]),Y=j>=1):F.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Y=j>=2);let B=null,z={};const L=t.getParameter(t.SCISSOR_BOX),O=t.getParameter(t.VIEWPORT),oe=new At().fromArray(L),ae=new At().fromArray(O);function ce(P,ie,ne,de){const le=new Uint8Array(4),$=t.createTexture();t.bindTexture(P,$),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _e=0;_e<ne;_e++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ie,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(ie+_e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return $}const me={};me[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(me[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Se(t.DEPTH_TEST),l.setFunc(Fc),Ce(!1),it(vh),Se(t.CULL_FACE),Ee(Oi);function Se(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function ye(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function Ge(P,ie){return m[P]!==ie?(t.bindFramebuffer(P,ie),m[P]=ie,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ie),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ie)),!0):!1}function Yt(P,ie){let ne=v,de=!1;if(P)if(ne=x.get(ie),ne===void 0&&(ne=[],x.set(ie,ne)),P.isWebGLMultipleRenderTargets){const le=P.texture;if(ne.length!==le.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let $=0,_e=le.length;$<_e;$++)ne[$]=t.COLOR_ATTACHMENT0+$;ne.length=le.length,de=!0}}else ne[0]!==t.COLOR_ATTACHMENT0&&(ne[0]=t.COLOR_ATTACHMENT0,de=!0);else ne[0]!==t.BACK&&(ne[0]=t.BACK,de=!0);de&&(n.isWebGL2?t.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Ne(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const N={[zr]:t.FUNC_ADD,[SS]:t.FUNC_SUBTRACT,[yS]:t.FUNC_REVERSE_SUBTRACT};if(i)N[Eh]=t.MIN,N[Mh]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(N[Eh]=P.MIN_EXT,N[Mh]=P.MAX_EXT)}const Lt={[ES]:t.ZERO,[MS]:t.ONE,[TS]:t.SRC_COLOR,[u_]:t.SRC_ALPHA,[LS]:t.SRC_ALPHA_SATURATE,[CS]:t.DST_COLOR,[AS]:t.DST_ALPHA,[wS]:t.ONE_MINUS_SRC_COLOR,[c_]:t.ONE_MINUS_SRC_ALPHA,[PS]:t.ONE_MINUS_DST_COLOR,[RS]:t.ONE_MINUS_DST_ALPHA};function Ee(P,ie,ne,de,le,$,_e,Le){if(P===Oi){c===!0&&(ye(t.BLEND),c=!1);return}if(c===!1&&(Se(t.BLEND),c=!0),P!==xS){if(P!==_||Le!==E){if((g!==zr||C!==zr)&&(t.blendEquation(t.FUNC_ADD),g=zr,C=zr),Le)switch(P){case os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xh:t.blendFunc(t.ONE,t.ONE);break;case Sh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Sh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,T=null,R=null,U=null,_=P,E=Le}return}le=le||ie,$=$||ne,_e=_e||de,(ie!==g||le!==C)&&(t.blendEquationSeparate(N[ie],N[le]),g=ie,C=le),(ne!==S||de!==T||$!==R||_e!==U)&&(t.blendFuncSeparate(Lt[ne],Lt[de],Lt[$],Lt[_e]),S=ne,T=de,R=$,U=_e),_=P,E=!1}function be(P,ie){P.side===ti?ye(t.CULL_FACE):Se(t.CULL_FACE);let ne=P.side===tn;ie&&(ne=!ne),Ce(ne),P.blending===os&&P.transparent===!1?Ee(Oi):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const de=P.stencilWrite;u.setTest(de),de&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ie(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(P){w!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),w=P)}function it(P){P!==gS?(Se(t.CULL_FACE),P!==X&&(P===vh?t.cullFace(t.BACK):P===_S?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),X=P}function ze(P){P!==q&&(Y&&t.lineWidth(P),q=P)}function Ie(P,ie,ne){P?(Se(t.POLYGON_OFFSET_FILL),(Z!==ie||b!==ne)&&(t.polygonOffset(ie,ne),Z=ie,b=ne)):ye(t.POLYGON_OFFSET_FILL)}function Ye(P){P?Se(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function Mt(P){P===void 0&&(P=t.TEXTURE0+W-1),B!==P&&(t.activeTexture(P),B=P)}function bt(P,ie,ne){ne===void 0&&(B===null?ne=t.TEXTURE0+W-1:ne=B);let de=z[ne];de===void 0&&(de={type:void 0,texture:void 0},z[ne]=de),(de.type!==P||de.texture!==ie)&&(B!==ne&&(t.activeTexture(ne),B=ne),t.bindTexture(P,ie||me[P]),de.type=P,de.texture=ie)}function A(){const P=z[B];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function k(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(P){oe.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),oe.copy(P))}function Xe(P){ae.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ae.copy(P))}function Pe(P,ie){let ne=h.get(ie);ne===void 0&&(ne=new WeakMap,h.set(ie,ne));let de=ne.get(P);de===void 0&&(de=t.getUniformBlockIndex(ie,P.name),ne.set(P,de))}function we(P,ie){const de=h.get(ie).get(P);f.get(ie)!==de&&(t.uniformBlockBinding(ie,de,P.__bindingPointIndex),f.set(ie,de))}function xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},B=null,z={},m={},x=new WeakMap,v=[],p=null,c=!1,_=null,g=null,S=null,T=null,C=null,R=null,U=null,E=!1,w=null,X=null,q=null,Z=null,b=null,oe.set(0,0,t.canvas.width,t.canvas.height),ae.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Se,disable:ye,bindFramebuffer:Ge,drawBuffers:Yt,useProgram:Ne,setBlending:Ee,setMaterial:be,setFlipSided:Ce,setCullFace:it,setLineWidth:ze,setPolygonOffset:Ie,setScissorTest:Ye,activeTexture:Mt,bindTexture:bt,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:Te,texImage3D:Ve,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:re,texStorage3D:ue,texSubImage2D:ee,texSubImage3D:Q,compressedTexSubImage2D:te,compressedTexSubImage3D:ge,scissor:J,viewport:Xe,reset:xe}}function fw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return c?new OffscreenCanvas(A,y):ul("canvas")}function g(A,y,k,ee){let Q=1;if((A.width>ee||A.height>ee)&&(Q=ee/Math.max(A.width,A.height)),Q<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const te=y?Gc:Math.floor,ge=te(Q*A.width),re=te(Q*A.height);v===void 0&&(v=_(ge,re));const ue=k?_(ge,re):v;return ue.width=ge,ue.height=re,ue.getContext("2d").drawImage(A,0,0,ge,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ge+"x"+re+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Qh(A.width)&&Qh(A.height)}function T(A){return a?!1:A.wrapS!==Un||A.wrapT!==Un||A.minFilter!==Gt&&A.minFilter!==vn}function C(A,y){return A.generateMipmaps&&y&&A.minFilter!==Gt&&A.minFilter!==vn}function R(A){t.generateMipmap(A)}function U(A,y,k,ee,Q=!1){if(a===!1)return y;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let te=y;if(y===t.RED&&(k===t.FLOAT&&(te=t.R32F),k===t.HALF_FLOAT&&(te=t.R16F),k===t.UNSIGNED_BYTE&&(te=t.R8)),y===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(te=t.R8UI),k===t.UNSIGNED_SHORT&&(te=t.R16UI),k===t.UNSIGNED_INT&&(te=t.R32UI),k===t.BYTE&&(te=t.R8I),k===t.SHORT&&(te=t.R16I),k===t.INT&&(te=t.R32I)),y===t.RG&&(k===t.FLOAT&&(te=t.RG32F),k===t.HALF_FLOAT&&(te=t.RG16F),k===t.UNSIGNED_BYTE&&(te=t.RG8)),y===t.RGBA){const ge=Q?sl:je.getTransfer(ee);k===t.FLOAT&&(te=t.RGBA32F),k===t.HALF_FLOAT&&(te=t.RGBA16F),k===t.UNSIGNED_BYTE&&(te=ge===Je?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function E(A,y,k){return C(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==vn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function w(A){return A===Gt||A===Th||A===cu?t.NEAREST:t.LINEAR}function X(A){const y=A.target;y.removeEventListener("dispose",X),Z(y),y.isVideoTexture&&x.delete(y)}function q(A){const y=A.target;y.removeEventListener("dispose",q),W(y)}function Z(A){const y=i.get(A);if(y.__webglInit===void 0)return;const k=A.source,ee=p.get(k);if(ee){const Q=ee[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(A),Object.keys(ee).length===0&&p.delete(k)}i.remove(A)}function b(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const k=A.source,ee=p.get(k);delete ee[y.__cacheKey],o.memory.textures--}function W(A){const y=A.texture,k=i.get(A),ee=i.get(y);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(k.__webglFramebuffer[Q]))for(let te=0;te<k.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(k.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(k.__webglFramebuffer[Q]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[Q])}else{if(Array.isArray(k.__webglFramebuffer))for(let Q=0;Q<k.__webglFramebuffer.length;Q++)t.deleteFramebuffer(k.__webglFramebuffer[Q]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Q=0;Q<k.__webglColorRenderbuffer.length;Q++)k.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[Q]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,te=y.length;Q<te;Q++){const ge=i.get(y[Q]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(y[Q])}i.remove(y),i.remove(A)}let Y=0;function j(){Y=0}function F(){const A=Y;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Y+=1,A}function B(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function z(A,y){const k=i.get(A);if(A.isVideoTexture&&Mt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(k,A,y);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+y)}function L(A,y){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Ge(k,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+y)}function O(A,y){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Ge(k,A,y);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+y)}function oe(A,y){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Yt(k,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+y)}const ae={[Bc]:t.REPEAT,[Un]:t.CLAMP_TO_EDGE,[zc]:t.MIRRORED_REPEAT},ce={[Gt]:t.NEAREST,[Th]:t.NEAREST_MIPMAP_NEAREST,[cu]:t.NEAREST_MIPMAP_LINEAR,[vn]:t.LINEAR,[XS]:t.LINEAR_MIPMAP_NEAREST,[yo]:t.LINEAR_MIPMAP_LINEAR},me={[oy]:t.NEVER,[hy]:t.ALWAYS,[ay]:t.LESS,[uy]:t.LEQUAL,[ly]:t.EQUAL,[dy]:t.GEQUAL,[cy]:t.GREATER,[fy]:t.NOTEQUAL};function Se(A,y,k){if(k?(t.texParameteri(A,t.TEXTURE_WRAP_S,ae[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ae[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ae[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ce[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ce[y.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==Un||y.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(y.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(y.minFilter)),y.minFilter!==Gt&&y.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Gt||y.minFilter!==cu&&y.minFilter!==yo||y.type===Ri&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Eo&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function ye(A,y){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",X));const ee=y.source;let Q=p.get(ee);Q===void 0&&(Q={},p.set(ee,Q));const te=B(y);if(te!==A.__cacheKey){Q[te]===void 0&&(Q[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[te].usedTimes++;const ge=Q[A.__cacheKey];ge!==void 0&&(Q[A.__cacheKey].usedTimes--,ge.usedTimes===0&&b(y)),A.__cacheKey=te,A.__webglTexture=Q[te].texture}return k}function Ge(A,y,k){let ee=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=t.TEXTURE_3D);const Q=ye(A,y),te=y.source;n.bindTexture(ee,A.__webglTexture,t.TEXTURE0+k);const ge=i.get(te);if(te.version!==ge.__version||Q===!0){n.activeTexture(t.TEXTURE0+k);const re=je.getPrimaries(je.workingColorSpace),ue=y.colorSpace===Sn?null:je.getPrimaries(y.colorSpace),Te=y.colorSpace===Sn||re===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ve=T(y)&&S(y.image)===!1;let J=g(y.image,Ve,!1,f);J=bt(y,J);const Xe=S(J)||a,Pe=s.convert(y.format,y.colorSpace);let we=s.convert(y.type),xe=U(y.internalFormat,Pe,we,y.colorSpace,y.isVideoTexture);Se(ee,y,Xe);let P;const ie=y.mipmaps,ne=a&&y.isVideoTexture!==!0,de=ge.__version===void 0||Q===!0,le=E(y,J,Xe);if(y.isDepthTexture)xe=t.DEPTH_COMPONENT,a?y.type===Ri?xe=t.DEPTH_COMPONENT32F:y.type===Ai?xe=t.DEPTH_COMPONENT24:y.type===lr?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:y.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ur&&xe===t.DEPTH_COMPONENT&&y.type!==Wf&&y.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ai,we=s.convert(y.type)),y.format===_s&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,y.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=lr,we=s.convert(y.type))),de&&(ne?n.texStorage2D(t.TEXTURE_2D,1,xe,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,xe,J.width,J.height,0,Pe,we,null));else if(y.isDataTexture)if(ie.length>0&&Xe){ne&&de&&n.texStorage2D(t.TEXTURE_2D,le,xe,ie[0].width,ie[0].height);for(let $=0,_e=ie.length;$<_e;$++)P=ie[$],ne?n.texSubImage2D(t.TEXTURE_2D,$,0,0,P.width,P.height,Pe,we,P.data):n.texImage2D(t.TEXTURE_2D,$,xe,P.width,P.height,0,Pe,we,P.data);y.generateMipmaps=!1}else ne?(de&&n.texStorage2D(t.TEXTURE_2D,le,xe,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,Pe,we,J.data)):n.texImage2D(t.TEXTURE_2D,0,xe,J.width,J.height,0,Pe,we,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ne&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,xe,ie[0].width,ie[0].height,J.depth);for(let $=0,_e=ie.length;$<_e;$++)P=ie[$],y.format!==Dn?Pe!==null?ne?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,P.width,P.height,J.depth,Pe,P.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,xe,P.width,P.height,J.depth,0,P.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,P.width,P.height,J.depth,Pe,we,P.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,xe,P.width,P.height,J.depth,0,Pe,we,P.data)}else{ne&&de&&n.texStorage2D(t.TEXTURE_2D,le,xe,ie[0].width,ie[0].height);for(let $=0,_e=ie.length;$<_e;$++)P=ie[$],y.format!==Dn?Pe!==null?ne?n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,P.width,P.height,Pe,P.data):n.compressedTexImage2D(t.TEXTURE_2D,$,xe,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?n.texSubImage2D(t.TEXTURE_2D,$,0,0,P.width,P.height,Pe,we,P.data):n.texImage2D(t.TEXTURE_2D,$,xe,P.width,P.height,0,Pe,we,P.data)}else if(y.isDataArrayTexture)ne?(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,xe,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Pe,we,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,J.width,J.height,J.depth,0,Pe,we,J.data);else if(y.isData3DTexture)ne?(de&&n.texStorage3D(t.TEXTURE_3D,le,xe,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Pe,we,J.data)):n.texImage3D(t.TEXTURE_3D,0,xe,J.width,J.height,J.depth,0,Pe,we,J.data);else if(y.isFramebufferTexture){if(de)if(ne)n.texStorage2D(t.TEXTURE_2D,le,xe,J.width,J.height);else{let $=J.width,_e=J.height;for(let Le=0;Le<le;Le++)n.texImage2D(t.TEXTURE_2D,Le,xe,$,_e,0,Pe,we,null),$>>=1,_e>>=1}}else if(ie.length>0&&Xe){ne&&de&&n.texStorage2D(t.TEXTURE_2D,le,xe,ie[0].width,ie[0].height);for(let $=0,_e=ie.length;$<_e;$++)P=ie[$],ne?n.texSubImage2D(t.TEXTURE_2D,$,0,0,Pe,we,P):n.texImage2D(t.TEXTURE_2D,$,xe,Pe,we,P);y.generateMipmaps=!1}else ne?(de&&n.texStorage2D(t.TEXTURE_2D,le,xe,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,we,J)):n.texImage2D(t.TEXTURE_2D,0,xe,Pe,we,J);C(y,Xe)&&R(ee),ge.__version=te.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Yt(A,y,k){if(y.image.length!==6)return;const ee=ye(A,y),Q=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+k);const te=i.get(Q);if(Q.version!==te.__version||ee===!0){n.activeTexture(t.TEXTURE0+k);const ge=je.getPrimaries(je.workingColorSpace),re=y.colorSpace===Sn?null:je.getPrimaries(y.colorSpace),ue=y.colorSpace===Sn||ge===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Te=y.isCompressedTexture||y.image[0].isCompressedTexture,Ve=y.image[0]&&y.image[0].isDataTexture,J=[];for(let $=0;$<6;$++)!Te&&!Ve?J[$]=g(y.image[$],!1,!0,u):J[$]=Ve?y.image[$].image:y.image[$],J[$]=bt(y,J[$]);const Xe=J[0],Pe=S(Xe)||a,we=s.convert(y.format,y.colorSpace),xe=s.convert(y.type),P=U(y.internalFormat,we,xe,y.colorSpace),ie=a&&y.isVideoTexture!==!0,ne=te.__version===void 0||ee===!0;let de=E(y,Xe,Pe);Se(t.TEXTURE_CUBE_MAP,y,Pe);let le;if(Te){ie&&ne&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,P,Xe.width,Xe.height);for(let $=0;$<6;$++){le=J[$].mipmaps;for(let _e=0;_e<le.length;_e++){const Le=le[_e];y.format!==Dn?we!==null?ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Le.width,Le.height,we,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,P,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Le.width,Le.height,we,xe,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,P,Le.width,Le.height,0,we,xe,Le.data)}}}else{le=y.mipmaps,ie&&ne&&(le.length>0&&de++,n.texStorage2D(t.TEXTURE_CUBE_MAP,de,P,J[0].width,J[0].height));for(let $=0;$<6;$++)if(Ve){ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,J[$].width,J[$].height,we,xe,J[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,P,J[$].width,J[$].height,0,we,xe,J[$].data);for(let _e=0;_e<le.length;_e++){const kt=le[_e].image[$].image;ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,kt.width,kt.height,we,xe,kt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,P,kt.width,kt.height,0,we,xe,kt.data)}}else{ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,we,xe,J[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,P,we,xe,J[$]);for(let _e=0;_e<le.length;_e++){const Le=le[_e];ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,we,xe,Le.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,P,we,xe,Le.image[$])}}}C(y,Pe)&&R(t.TEXTURE_CUBE_MAP),te.__version=Q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Ne(A,y,k,ee,Q,te){const ge=s.convert(k.format,k.colorSpace),re=s.convert(k.type),ue=U(k.internalFormat,ge,re,k.colorSpace);if(!i.get(y).__hasExternalTextures){const Ve=Math.max(1,y.width>>te),J=Math.max(1,y.height>>te);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,te,ue,Ve,J,y.depth,0,ge,re,null):n.texImage2D(Q,te,ue,Ve,J,0,ge,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ye(y)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Q,i.get(k).__webglTexture,0,Ie(y)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,Q,i.get(k).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(A,y,k){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let ee=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||Ye(y)){const Q=y.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ri?ee=t.DEPTH_COMPONENT32F:Q.type===Ai&&(ee=t.DEPTH_COMPONENT24));const te=Ie(y);Ye(y)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,ee,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,ee,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const ee=Ie(y);k&&Ye(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,y.width,y.height):Ye(y)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],ge=s.convert(te.format,te.colorSpace),re=s.convert(te.type),ue=U(te.internalFormat,ge,re,te.colorSpace),Te=Ie(y);k&&Ye(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,ue,y.width,y.height):Ye(y)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,ue,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ue,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Lt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const ee=i.get(y.depthTexture).__webglTexture,Q=Ie(y);if(y.depthTexture.format===ur)Ye(y)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(y.depthTexture.format===_s)Ye(y)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ee(A){const y=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Lt(y.__webglFramebuffer,A)}else if(k){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=t.createRenderbuffer(),N(y.__webglDepthbuffer[ee],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),N(y.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(A,y,k){const ee=i.get(A);y!==void 0&&Ne(ee.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ee(A)}function Ce(A){const y=A.texture,k=i.get(A),ee=i.get(y);A.addEventListener("dispose",q),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=y.version,o.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,te=A.isWebGLMultipleRenderTargets===!0,ge=S(A)||a;if(Q){k.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[re]=[];for(let ue=0;ue<y.mipmaps.length;ue++)k.__webglFramebuffer[re][ue]=t.createFramebuffer()}else k.__webglFramebuffer[re]=t.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)k.__webglFramebuffer[re]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(te)if(r.drawBuffers){const re=A.texture;for(let ue=0,Te=re.length;ue<Te;ue++){const Ve=i.get(re[ue]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ye(A)===!1){const re=te?y:[y];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<re.length;ue++){const Te=re[ue];k.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const Ve=s.convert(Te.format,Te.colorSpace),J=s.convert(Te.type),Xe=U(Te.internalFormat,Ve,J,Te.colorSpace,A.isXRRenderTarget===!0),Pe=Ie(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Xe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),N(k.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Se(t.TEXTURE_CUBE_MAP,y,ge);for(let re=0;re<6;re++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Ne(k.__webglFramebuffer[re][ue],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else Ne(k.__webglFramebuffer[re],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);C(y,ge)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){const re=A.texture;for(let ue=0,Te=re.length;ue<Te;ue++){const Ve=re[ue],J=i.get(Ve);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),Se(t.TEXTURE_2D,Ve,ge),Ne(k.__webglFramebuffer,A,Ve,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),C(Ve,ge)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?re=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(re,ee.__webglTexture),Se(re,y,ge),a&&y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Ne(k.__webglFramebuffer[ue],A,y,t.COLOR_ATTACHMENT0,re,ue);else Ne(k.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,re,0);C(y,ge)&&R(re),n.unbindTexture()}A.depthBuffer&&Ee(A)}function it(A){const y=S(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,Q=k.length;ee<Q;ee++){const te=k[ee];if(C(te,y)){const ge=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,re=i.get(te).__webglTexture;n.bindTexture(ge,re),R(ge),n.unbindTexture()}}}function ze(A){if(a&&A.samples>0&&Ye(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,ee=A.height;let Q=t.COLOR_BUFFER_BIT;const te=[],ge=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=i.get(A),ue=A.isWebGLMultipleRenderTargets===!0;if(ue)for(let Te=0;Te<y.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){te.push(t.COLOR_ATTACHMENT0+Te),A.depthBuffer&&te.push(ge);const Ve=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ve===!1&&(A.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ue&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,re.__webglColorRenderbuffer[Te]),Ve===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),ue){const J=i.get(y[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,k,ee,0,0,k,ee,Q,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Te=0;Te<y.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,re.__webglColorRenderbuffer[Te]);const Ve=i.get(y[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Ie(A){return Math.min(h,A.samples)}function Ye(A){const y=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(A){const y=o.render.frame;x.get(A)!==y&&(x.set(A,y),A.update())}function bt(A,y){const k=A.colorSpace,ee=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Hc||k!==fi&&k!==Sn&&(je.getTransfer(k)===Je?a===!1?e.has("EXT_sRGB")===!0&&ee===Dn?(A.format=Hc,A.minFilter=vn,A.generateMipmaps=!1):y=y_.sRGBToLinear(y):(ee!==Dn||Q!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=F,this.resetTextureUnits=j,this.setTexture2D=z,this.setTexture2DArray=L,this.setTexture3D=O,this.setTextureCube=oe,this.rebindTextures=be,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Ye}function dw(t,e,n){const i=n.isWebGL2;function r(s,o=Sn){let a;const l=je.getTransfer(o);if(s===Bi)return t.UNSIGNED_BYTE;if(s===p_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===m_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===jS)return t.BYTE;if(s===YS)return t.SHORT;if(s===Wf)return t.UNSIGNED_SHORT;if(s===h_)return t.INT;if(s===Ai)return t.UNSIGNED_INT;if(s===Ri)return t.FLOAT;if(s===Eo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===qS)return t.ALPHA;if(s===Dn)return t.RGBA;if(s===$S)return t.LUMINANCE;if(s===KS)return t.LUMINANCE_ALPHA;if(s===ur)return t.DEPTH_COMPONENT;if(s===_s)return t.DEPTH_STENCIL;if(s===Hc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ZS)return t.RED;if(s===g_)return t.RED_INTEGER;if(s===QS)return t.RG;if(s===__)return t.RG_INTEGER;if(s===v_)return t.RGBA_INTEGER;if(s===fu||s===du||s===hu||s===pu)if(l===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wh||s===Ah||s===Rh||s===Ch)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===wh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ah)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ch)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===JS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ph||s===Lh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ph)return l===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Lh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bh||s===Uh||s===Dh||s===Nh||s===Ih||s===Fh||s===Oh||s===kh||s===Bh||s===zh||s===Hh||s===Vh||s===Gh||s===Wh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===bh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ih)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wh)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mu||s===Xh||s===jh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===mu)return l===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Xh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ey||s===Yh||s===qh||s===$h)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===mu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Yh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$h)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class hw extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class va extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pw={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),c=this._getHandJoint(u,v);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,x=.005;u.inputState.pinching&&d>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new va;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class mw extends un{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:ur,f!==ur&&f!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ur&&(i=Ai),i===void 0&&f===_s&&(i=lr),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gw extends Ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,m=null,x=null;const v=n.getContextAttributes();let p=null,c=null;const _=[],g=[],S=new xn;S.layers.enable(1),S.viewport=new At;const T=new xn;T.layers.enable(2),T.viewport=new At;const C=[S,T],R=new hw;R.layers.enable(1),R.layers.enable(2);let U=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let O=_[L];return O===void 0&&(O=new Bu,_[L]=O),O.getTargetRaySpace()},this.getControllerGrip=function(L){let O=_[L];return O===void 0&&(O=new Bu,_[L]=O),O.getGripSpace()},this.getHand=function(L){let O=_[L];return O===void 0&&(O=new Bu,_[L]=O),O.getHandSpace()};function w(L){const O=g.indexOf(L.inputSource);if(O===-1)return;const oe=_[O];oe!==void 0&&(oe.update(L.inputSource,L.frame,u||o),oe.dispatchEvent({type:L.type,data:L.inputSource}))}function X(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",q);for(let L=0;L<_.length;L++){const O=g[L];O!==null&&(g[L]=null,_[L].disconnect(O))}U=null,E=null,e.setRenderTarget(p),m=null,d=null,h=null,r=null,c=null,z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(L){u=L},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",X),r.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:m}),c=new _r(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let O=null,oe=null,ae=null;v.depth&&(ae=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=v.stencil?_s:ur,oe=v.stencil?lr:Ai);const ce={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),c=new _r(d.textureWidth,d.textureHeight,{format:Dn,type:Bi,depthTexture:new mw(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const me=e.properties.get(c);me.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(L){for(let O=0;O<L.removed.length;O++){const oe=L.removed[O],ae=g.indexOf(oe);ae>=0&&(g[ae]=null,_[ae].disconnect(oe))}for(let O=0;O<L.added.length;O++){const oe=L.added[O];let ae=g.indexOf(oe);if(ae===-1){for(let me=0;me<_.length;me++)if(me>=g.length){g.push(oe),ae=me;break}else if(g[me]===null){g[me]=oe,ae=me;break}if(ae===-1)break}const ce=_[ae];ce&&ce.connect(oe)}}const Z=new H,b=new H;function W(L,O,oe){Z.setFromMatrixPosition(O.matrixWorld),b.setFromMatrixPosition(oe.matrixWorld);const ae=Z.distanceTo(b),ce=O.projectionMatrix.elements,me=oe.projectionMatrix.elements,Se=ce[14]/(ce[10]-1),ye=ce[14]/(ce[10]+1),Ge=(ce[9]+1)/ce[5],Yt=(ce[9]-1)/ce[5],Ne=(ce[8]-1)/ce[0],N=(me[8]+1)/me[0],Lt=Se*Ne,Ee=Se*N,be=ae/(-Ne+N),Ce=be*-Ne;O.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Ce),L.translateZ(be),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const it=Se+be,ze=ye+be,Ie=Lt-Ce,Ye=Ee+(ae-Ce),Mt=Ge*ye/ze*it,bt=Yt*ye/ze*it;L.projectionMatrix.makePerspective(Ie,Ye,Mt,bt,it,ze),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function Y(L,O){O===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(O.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;R.near=T.near=S.near=L.near,R.far=T.far=S.far=L.far,(U!==R.near||E!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,E=R.far);const O=L.parent,oe=R.cameras;Y(R,O);for(let ae=0;ae<oe.length;ae++)Y(oe[ae],O);oe.length===2?W(R,S,T):R.projectionMatrix.copy(S.projectionMatrix),j(L,R,O)};function j(L,O,oe){oe===null?L.matrix.copy(O.matrixWorld):(L.matrix.copy(oe.matrixWorld),L.matrix.invert(),L.matrix.multiply(O.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(O.projectionMatrix),L.projectionMatrixInverse.copy(O.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Vc*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=L)};let F=null;function B(L,O){if(f=O.getViewerPose(u||o),x=O,f!==null){const oe=f.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let ae=!1;oe.length!==R.cameras.length&&(R.cameras.length=0,ae=!0);for(let ce=0;ce<oe.length;ce++){const me=oe[ce];let Se=null;if(m!==null)Se=m.getViewport(me);else{const Ge=h.getViewSubImage(d,me);Se=Ge.viewport,ce===0&&(e.setRenderTargetTextures(c,Ge.colorTexture,d.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(c))}let ye=C[ce];ye===void 0&&(ye=new xn,ye.layers.enable(ce),ye.viewport=new At,C[ce]=ye),ye.matrix.fromArray(me.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(me.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Se.x,Se.y,Se.width,Se.height),ce===0&&(R.matrix.copy(ye.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ae===!0&&R.cameras.push(ye)}}for(let oe=0;oe<_.length;oe++){const ae=g[oe],ce=_[oe];ae!==null&&ce!==void 0&&ce.update(ae,O,u||o)}F&&F(L,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),x=null}const z=new U_;z.setAnimationLoop(B),this.setAnimationLoop=function(L){F=L},this.dispose=function(){}}}function _w(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,C_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,_,g,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),h(p,c)):c.isMeshPhongMaterial?(s(p,c),f(p,c)):c.isMeshStandardMaterial?(s(p,c),d(p,c),c.isMeshPhysicalMaterial&&m(p,c,S)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),v(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===tn&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===tn&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=e.get(c).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*g,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function h(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function d(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===tn&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function v(p,c){const _=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function u(_,g){let S=r[_.id];S===void 0&&(x(_),S=f(_),r[_.id]=S,_.addEventListener("dispose",p));const T=g.program;i.updateUBOMapping(_,T);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function f(_){const g=h();_.__bindingPointIndex=g;const S=t.createBuffer(),T=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],S=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,R=S.length;C<R;C++){const U=S[C];if(m(U,C,T)===!0){const E=U.__offset,w=Array.isArray(U.value)?U.value:[U.value];let X=0;for(let q=0;q<w.length;q++){const Z=w[q],b=v(Z);typeof Z=="number"?(U.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,E+X,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=Z.elements[0],U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=Z.elements[0],U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=Z.elements[0]):(Z.toArray(U.__data,X),X+=b.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,E,U.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,S){const T=_.value;if(S[g]===void 0){if(typeof T=="number")S[g]=T;else{const C=Array.isArray(T)?T:[T],R=[];for(let U=0;U<C.length;U++)R.push(C[U].clone());S[g]=R}return!0}else if(typeof T=="number"){if(S[g]!==T)return S[g]=T,!0}else{const C=Array.isArray(S[g])?S[g]:[S[g]],R=Array.isArray(T)?T:[T];for(let U=0;U<C.length;U++){const E=C[U];if(E.equals(R[U])===!1)return E.copy(R[U]),!0}}return!1}function x(_){const g=_.uniforms;let S=0;const T=16;let C=0;for(let R=0,U=g.length;R<U;R++){const E=g[R],w={boundary:0,storage:0},X=Array.isArray(E.value)?E.value:[E.value];for(let q=0,Z=X.length;q<Z;q++){const b=X[q],W=v(b);w.boundary+=W.boundary,w.storage+=W.storage}if(E.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=S,R>0){C=S%T;const q=T-C;C!==0&&q-w.boundary<0&&(S+=T-C,E.__offset=S)}S+=w.storage}return C=S%T,C>0&&(S+=T-C),_.__size=S,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class O_{constructor(e={}){const{canvas:n=my(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this._useLegacyLights=!1,this.toneMapping=ki,this.toneMappingExposure=1;const g=this;let S=!1,T=0,C=0,R=null,U=-1,E=null;const w=new At,X=new At;let q=null;const Z=new et(0);let b=0,W=n.width,Y=n.height,j=1,F=null,B=null;const z=new At(0,0,W,Y),L=new At(0,0,W,Y);let O=!1;const oe=new b_;let ae=!1,ce=!1,me=null;const Se=new Ct,ye=new qe,Ge=new H,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return R===null?j:1}let N=i;function Lt(M,D){for(let V=0;V<M.length;V++){const I=M[V],G=n.getContext(I,D);if(G!==null)return G}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gf}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",de,!1),N===null){const D=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&D.shift(),N=Lt(D,M),N===null)throw Lt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ee,be,Ce,it,ze,Ie,Ye,Mt,bt,A,y,k,ee,Q,te,ge,re,ue,Te,Ve,J,Xe,Pe,we;function xe(){Ee=new PT(N),be=new ET(N,Ee,e),Ee.init(be),Xe=new dw(N,Ee,be),Ce=new cw(N,Ee,be),it=new UT(N),ze=new K1,Ie=new fw(N,Ee,Ce,ze,be,Xe,it),Ye=new TT(g),Mt=new CT(g),bt=new Hy(N,be),Pe=new ST(N,Ee,bt,be),A=new LT(N,bt,it,Pe),y=new FT(N,A,bt,it),Te=new IT(N,be,Ie),ge=new MT(ze),k=new $1(g,Ye,Mt,Ee,be,Pe,ge),ee=new _w(g,ze),Q=new Q1,te=new rw(Ee,be),ue=new xT(g,Ye,Mt,Ce,y,d,l),re=new uw(g,y,be),we=new vw(N,it,be,Ce),Ve=new yT(N,Ee,it,be),J=new bT(N,Ee,it,be),it.programs=k.programs,g.capabilities=be,g.extensions=Ee,g.properties=ze,g.renderLists=Q,g.shadowMap=re,g.state=Ce,g.info=it}xe();const P=new gw(g,N);this.xr=P,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(W,Y,!1))},this.getSize=function(M){return M.set(W,Y)},this.setSize=function(M,D,V=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,Y=D,n.width=Math.floor(M*j),n.height=Math.floor(D*j),V===!0&&(n.style.width=M+"px",n.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(W*j,Y*j).floor()},this.setDrawingBufferSize=function(M,D,V){W=M,Y=D,j=V,n.width=Math.floor(M*V),n.height=Math.floor(D*V),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(z)},this.setViewport=function(M,D,V,I){M.isVector4?z.set(M.x,M.y,M.z,M.w):z.set(M,D,V,I),Ce.viewport(w.copy(z).multiplyScalar(j).floor())},this.getScissor=function(M){return M.copy(L)},this.setScissor=function(M,D,V,I){M.isVector4?L.set(M.x,M.y,M.z,M.w):L.set(M,D,V,I),Ce.scissor(X.copy(L).multiplyScalar(j).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(M){Ce.setScissorTest(O=M)},this.setOpaqueSort=function(M){F=M},this.setTransparentSort=function(M){B=M},this.getClearColor=function(M){return M.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(M=!0,D=!0,V=!0){let I=0;if(M){let G=!1;if(R!==null){const pe=R.texture.format;G=pe===v_||pe===__||pe===g_}if(G){const pe=R.texture.type,ve=pe===Bi||pe===Ai||pe===Wf||pe===lr||pe===p_||pe===m_,Ae=ue.getClearColor(),Re=ue.getClearAlpha(),Oe=Ae.r,Me=Ae.g,Ue=Ae.b;ve?(m[0]=Oe,m[1]=Me,m[2]=Ue,m[3]=Re,N.clearBufferuiv(N.COLOR,0,m)):(x[0]=Oe,x[1]=Me,x[2]=Ue,x[3]=Re,N.clearBufferiv(N.COLOR,0,x))}else I|=N.COLOR_BUFFER_BIT}D&&(I|=N.DEPTH_BUFFER_BIT),V&&(I|=N.STENCIL_BUFFER_BIT),N.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",de,!1),Q.dispose(),te.dispose(),ze.dispose(),Ye.dispose(),Mt.dispose(),y.dispose(),Pe.dispose(),we.dispose(),k.dispose(),P.dispose(),P.removeEventListener("sessionstart",Ze),P.removeEventListener("sessionend",On),me&&(me.dispose(),me=null),Bt.stop()};function ie(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=it.autoReset,D=re.enabled,V=re.autoUpdate,I=re.needsUpdate,G=re.type;xe(),it.autoReset=M,re.enabled=D,re.autoUpdate=V,re.needsUpdate=I,re.type=G}function de(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function le(M){const D=M.target;D.removeEventListener("dispose",le),$(D)}function $(M){_e(M),ze.remove(M)}function _e(M){const D=ze.get(M).programs;D!==void 0&&(D.forEach(function(V){k.releaseProgram(V)}),M.isShaderMaterial&&k.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,V,I,G,pe){D===null&&(D=Yt);const ve=G.isMesh&&G.matrixWorld.determinant()<0,Ae=B_(M,D,V,I,G);Ce.setMaterial(I,ve);let Re=V.index,Oe=1;if(I.wireframe===!0){if(Re=A.getWireframeAttribute(V),Re===void 0)return;Oe=2}const Me=V.drawRange,Ue=V.attributes.position;let at=Me.start*Oe,ut=(Me.start+Me.count)*Oe;pe!==null&&(at=Math.max(at,pe.start*Oe),ut=Math.min(ut,(pe.start+pe.count)*Oe)),Re!==null?(at=Math.max(at,0),ut=Math.min(ut,Re.count)):Ue!=null&&(at=Math.max(at,0),ut=Math.min(ut,Ue.count));const pn=ut-at;if(pn<0||pn===1/0)return;Pe.setup(G,I,Ae,V,Re);let Xn,ft=Ve;if(Re!==null&&(Xn=bt.get(Re),ft=J,ft.setIndex(Xn)),G.isMesh)I.wireframe===!0?(Ce.setLineWidth(I.wireframeLinewidth*Ne()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(G.isLine){let ke=I.linewidth;ke===void 0&&(ke=1),Ce.setLineWidth(ke*Ne()),G.isLineSegments?ft.setMode(N.LINES):G.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else G.isPoints?ft.setMode(N.POINTS):G.isSprite&&ft.setMode(N.TRIANGLES);if(G.isInstancedMesh)ft.renderInstances(at,pn,G.count);else if(V.isInstancedBufferGeometry){const ke=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Dl=Math.min(V.instanceCount,ke);ft.renderInstances(at,pn,Dl)}else ft.render(at,pn)},this.compile=function(M,D){function V(I,G,pe){I.transparent===!0&&I.side===ti&&I.forceSinglePass===!1?(I.side=tn,I.needsUpdate=!0,Do(I,G,pe),I.side=Vi,I.needsUpdate=!0,Do(I,G,pe),I.side=ti):Do(I,G,pe)}p=te.get(M),p.init(),_.push(p),M.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(g._useLegacyLights),M.traverse(function(I){const G=I.material;if(G)if(Array.isArray(G))for(let pe=0;pe<G.length;pe++){const ve=G[pe];V(ve,M,I)}else V(G,M,I)}),_.pop(),p=null};let Le=null;function kt(M){Le&&Le(M)}function Ze(){Bt.stop()}function On(){Bt.start()}const Bt=new U_;Bt.setAnimationLoop(kt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(M){Le=M,P.setAnimationLoop(M),M===null?Bt.stop():Bt.start()},P.addEventListener("sessionstart",Ze),P.addEventListener("sessionend",On),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(D),D=P.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,D,R),p=te.get(M,_.length),p.init(),_.push(p),Se.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),oe.setFromProjectionMatrix(Se),ce=this.localClippingEnabled,ae=ge.init(this.clippingPlanes,ce),v=Q.get(M,c.length),v.init(),c.push(v),Kf(M,D,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(F,B),this.info.render.frame++,ae===!0&&ge.beginShadows();const V=p.state.shadowsArray;if(re.render(V,M,D),ae===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(v,M),p.setupLights(g._useLegacyLights),D.isArrayCamera){const I=D.cameras;for(let G=0,pe=I.length;G<pe;G++){const ve=I[G];Zf(v,M,ve,ve.viewport)}}else Zf(v,M,D);R!==null&&(Ie.updateMultisampleRenderTarget(R),Ie.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(g,M,D),Pe.resetDefaultState(),U=-1,E=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,c.pop(),c.length>0?v=c[c.length-1]:v=null};function Kf(M,D,V,I){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||oe.intersectsSprite(M)){I&&Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Se);const ve=y.update(M),Ae=M.material;Ae.visible&&v.push(M,ve,Ae,V,Ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||oe.intersectsObject(M))){const ve=y.update(M),Ae=M.material;if(I&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ge.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ge.copy(ve.boundingSphere.center)),Ge.applyMatrix4(M.matrixWorld).applyMatrix4(Se)),Array.isArray(Ae)){const Re=ve.groups;for(let Oe=0,Me=Re.length;Oe<Me;Oe++){const Ue=Re[Oe],at=Ae[Ue.materialIndex];at&&at.visible&&v.push(M,ve,at,V,Ge.z,Ue)}}else Ae.visible&&v.push(M,ve,Ae,V,Ge.z,null)}}const pe=M.children;for(let ve=0,Ae=pe.length;ve<Ae;ve++)Kf(pe[ve],D,V,I)}function Zf(M,D,V,I){const G=M.opaque,pe=M.transmissive,ve=M.transparent;p.setupLightsView(V),ae===!0&&ge.setGlobalState(g.clippingPlanes,V),pe.length>0&&k_(G,pe,D,V),I&&Ce.viewport(w.copy(I)),G.length>0&&Uo(G,D,V),pe.length>0&&Uo(pe,D,V),ve.length>0&&Uo(ve,D,V),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function k_(M,D,V,I){const G=be.isWebGL2;me===null&&(me=new _r(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Eo:Bi,minFilter:yo,samples:G?4:0})),g.getDrawingBufferSize(ye),G?me.setSize(ye.x,ye.y):me.setSize(Gc(ye.x),Gc(ye.y));const pe=g.getRenderTarget();g.setRenderTarget(me),g.getClearColor(Z),b=g.getClearAlpha(),b<1&&g.setClearColor(16777215,.5),g.clear();const ve=g.toneMapping;g.toneMapping=ki,Uo(M,V,I),Ie.updateMultisampleRenderTarget(me),Ie.updateRenderTargetMipmap(me);let Ae=!1;for(let Re=0,Oe=D.length;Re<Oe;Re++){const Me=D[Re],Ue=Me.object,at=Me.geometry,ut=Me.material,pn=Me.group;if(ut.side===ti&&Ue.layers.test(I.layers)){const Xn=ut.side;ut.side=tn,ut.needsUpdate=!0,Qf(Ue,V,I,at,ut,pn),ut.side=Xn,ut.needsUpdate=!0,Ae=!0}}Ae===!0&&(Ie.updateMultisampleRenderTarget(me),Ie.updateRenderTargetMipmap(me)),g.setRenderTarget(pe),g.setClearColor(Z,b),g.toneMapping=ve}function Uo(M,D,V){const I=D.isScene===!0?D.overrideMaterial:null;for(let G=0,pe=M.length;G<pe;G++){const ve=M[G],Ae=ve.object,Re=ve.geometry,Oe=I===null?ve.material:I,Me=ve.group;Ae.layers.test(V.layers)&&Qf(Ae,D,V,Re,Oe,Me)}}function Qf(M,D,V,I,G,pe){M.onBeforeRender(g,D,V,I,G,pe),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(g,D,V,I,M,pe),G.transparent===!0&&G.side===ti&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,g.renderBufferDirect(V,D,I,G,M,pe),G.side=Vi,G.needsUpdate=!0,g.renderBufferDirect(V,D,I,G,M,pe),G.side=ti):g.renderBufferDirect(V,D,I,G,M,pe),M.onAfterRender(g,D,V,I,G,pe)}function Do(M,D,V){D.isScene!==!0&&(D=Yt);const I=ze.get(M),G=p.state.lights,pe=p.state.shadowsArray,ve=G.state.version,Ae=k.getParameters(M,G.state,pe,D,V),Re=k.getProgramCacheKey(Ae);let Oe=I.programs;I.environment=M.isMeshStandardMaterial?D.environment:null,I.fog=D.fog,I.envMap=(M.isMeshStandardMaterial?Mt:Ye).get(M.envMap||I.environment),Oe===void 0&&(M.addEventListener("dispose",le),Oe=new Map,I.programs=Oe);let Me=Oe.get(Re);if(Me!==void 0){if(I.currentProgram===Me&&I.lightsStateVersion===ve)return Jf(M,Ae),Me}else Ae.uniforms=k.getUniforms(M),M.onBuild(V,Ae,g),M.onBeforeCompile(Ae,g),Me=k.acquireProgram(Ae,Re),Oe.set(Re,Me),I.uniforms=Ae.uniforms;const Ue=I.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=ge.uniform),Jf(M,Ae),I.needsLights=H_(M),I.lightsStateVersion=ve,I.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.directionalShadowMap.value=G.state.directionalShadowMap,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotShadowMap.value=G.state.spotShadowMap,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMap.value=G.state.pointShadowMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix);const at=Me.getUniforms(),ut=ba.seqWithValue(at.seq,Ue);return I.currentProgram=Me,I.uniformsList=ut,Me}function Jf(M,D){const V=ze.get(M);V.outputColorSpace=D.outputColorSpace,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function B_(M,D,V,I,G){D.isScene!==!0&&(D=Yt),Ie.resetTextureUnits();const pe=D.fog,ve=I.isMeshStandardMaterial?D.environment:null,Ae=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:fi,Re=(I.isMeshStandardMaterial?Mt:Ye).get(I.envMap||ve),Oe=I.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Me=!!V.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Ue=!!V.morphAttributes.position,at=!!V.morphAttributes.normal,ut=!!V.morphAttributes.color;let pn=ki;I.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pn=g.toneMapping);const Xn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=Xn!==void 0?Xn.length:0,ke=ze.get(I),Dl=p.state.lights;if(ae===!0&&(ce===!0||M!==E)){const nn=M===E&&I.id===U;ge.setState(I,M,nn)}let dt=!1;I.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Dl.state.version||ke.outputColorSpace!==Ae||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||ke.envMap!==Re||I.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ge.numPlanes||ke.numIntersection!==ge.numIntersection)||ke.vertexAlphas!==Oe||ke.vertexTangents!==Me||ke.morphTargets!==Ue||ke.morphNormals!==at||ke.morphColors!==ut||ke.toneMapping!==pn||be.isWebGL2===!0&&ke.morphTargetsCount!==ft)&&(dt=!0):(dt=!0,ke.__version=I.version);let ji=ke.currentProgram;dt===!0&&(ji=Do(I,D,G));let ed=!1,Rs=!1,Nl=!1;const zt=ji.getUniforms(),Yi=ke.uniforms;if(Ce.useProgram(ji.program)&&(ed=!0,Rs=!0,Nl=!0),I.id!==U&&(U=I.id,Rs=!0),ed||E!==M){zt.setValue(N,"projectionMatrix",M.projectionMatrix),zt.setValue(N,"viewMatrix",M.matrixWorldInverse);const nn=zt.map.cameraPosition;nn!==void 0&&nn.setValue(N,Ge.setFromMatrixPosition(M.matrixWorld)),be.logarithmicDepthBuffer&&zt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&zt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Rs=!0,Nl=!0)}if(G.isSkinnedMesh){zt.setOptional(N,G,"bindMatrix"),zt.setOptional(N,G,"bindMatrixInverse");const nn=G.skeleton;nn&&(be.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),zt.setValue(N,"boneTexture",nn.boneTexture,Ie),zt.setValue(N,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Il=V.morphAttributes;if((Il.position!==void 0||Il.normal!==void 0||Il.color!==void 0&&be.isWebGL2===!0)&&Te.update(G,V,ji),(Rs||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,zt.setValue(N,"receiveShadow",G.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Yi.envMap.value=Re,Yi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Rs&&(zt.setValue(N,"toneMappingExposure",g.toneMappingExposure),ke.needsLights&&z_(Yi,Nl),pe&&I.fog===!0&&ee.refreshFogUniforms(Yi,pe),ee.refreshMaterialUniforms(Yi,I,j,Y,me),ba.upload(N,ke.uniformsList,Yi,Ie)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ba.upload(N,ke.uniformsList,Yi,Ie),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&zt.setValue(N,"center",G.center),zt.setValue(N,"modelViewMatrix",G.modelViewMatrix),zt.setValue(N,"normalMatrix",G.normalMatrix),zt.setValue(N,"modelMatrix",G.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const nn=I.uniformsGroups;for(let Fl=0,V_=nn.length;Fl<V_;Fl++)if(be.isWebGL2){const td=nn[Fl];we.update(td,ji),we.bind(td,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}function z_(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function H_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,D,V){ze.get(M.texture).__webglTexture=D,ze.get(M.depthTexture).__webglTexture=V;const I=ze.get(M);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=V===void 0,I.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const V=ze.get(M);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,V=0){R=M,T=D,C=V;let I=!0,G=null,pe=!1,ve=!1;if(M){const Re=ze.get(M);Re.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(N.FRAMEBUFFER,null),I=!1):Re.__webglFramebuffer===void 0?Ie.setupRenderTarget(M):Re.__hasExternalTextures&&Ie.rebindTextures(M,ze.get(M.texture).__webglTexture,ze.get(M.depthTexture).__webglTexture);const Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const Me=ze.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Me[D])?G=Me[D][V]:G=Me[D],pe=!0):be.isWebGL2&&M.samples>0&&Ie.useMultisampledRTT(M)===!1?G=ze.get(M).__webglMultisampledFramebuffer:Array.isArray(Me)?G=Me[V]:G=Me,w.copy(M.viewport),X.copy(M.scissor),q=M.scissorTest}else w.copy(z).multiplyScalar(j).floor(),X.copy(L).multiplyScalar(j).floor(),q=O;if(Ce.bindFramebuffer(N.FRAMEBUFFER,G)&&be.drawBuffers&&I&&Ce.drawBuffers(M,G),Ce.viewport(w),Ce.scissor(X),Ce.setScissorTest(q),pe){const Re=ze.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Re.__webglTexture,V)}else if(ve){const Re=ze.get(M.texture),Oe=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,Oe)}U=-1},this.readRenderTargetPixels=function(M,D,V,I,G,pe,ve){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ze.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){Ce.bindFramebuffer(N.FRAMEBUFFER,Ae);try{const Re=M.texture,Oe=Re.format,Me=Re.type;if(Oe!==Dn&&Xe.convert(Oe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Me===Eo&&(Ee.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Me!==Bi&&Xe.convert(Me)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Me===Ri&&(be.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-I&&V>=0&&V<=M.height-G&&N.readPixels(D,V,I,G,Xe.convert(Oe),Xe.convert(Me),pe)}finally{const Re=R!==null?ze.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(M,D,V=0){const I=Math.pow(2,-V),G=Math.floor(D.image.width*I),pe=Math.floor(D.image.height*I);Ie.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,M.x,M.y,G,pe),Ce.unbindTexture()},this.copyTextureToTexture=function(M,D,V,I=0){const G=D.image.width,pe=D.image.height,ve=Xe.convert(V.format),Ae=Xe.convert(V.type);Ie.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,I,M.x,M.y,G,pe,ve,Ae,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,I,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,ve,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,I,M.x,M.y,ve,Ae,D.image),I===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(M,D,V,I,G=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=M.max.x-M.min.x+1,ve=M.max.y-M.min.y+1,Ae=M.max.z-M.min.z+1,Re=Xe.convert(I.format),Oe=Xe.convert(I.type);let Me;if(I.isData3DTexture)Ie.setTexture3D(I,0),Me=N.TEXTURE_3D;else if(I.isDataArrayTexture)Ie.setTexture2DArray(I,0),Me=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const Ue=N.getParameter(N.UNPACK_ROW_LENGTH),at=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ut=N.getParameter(N.UNPACK_SKIP_PIXELS),pn=N.getParameter(N.UNPACK_SKIP_ROWS),Xn=N.getParameter(N.UNPACK_SKIP_IMAGES),ft=V.isCompressedTexture?V.mipmaps[0]:V.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(Me,G,D.x,D.y,D.z,pe,ve,Ae,Re,Oe,ft.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Me,G,D.x,D.y,D.z,pe,ve,Ae,Re,ft.data)):N.texSubImage3D(Me,G,D.x,D.y,D.z,pe,ve,Ae,Re,Oe,ft),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ue),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,pn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xn),G===0&&I.generateMipmaps&&N.generateMipmap(Me),Ce.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Ie.setTextureCube(M,0):M.isData3DTexture?Ie.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ie.setTexture2DArray(M,0):Ie.setTexture2D(M,0),Ce.unbindTexture()},this.resetState=function(){T=0,C=0,R=null,Ce.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Xf?"display-p3":"srgb",n.unpackColorSpace=je.workingColorSpace===Pl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?cr:x_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cr?wt:fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xw extends O_{}xw.prototype.isWebGL1Renderer=!0;class Sw extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);const yw=()=>{const t=he.useRef(null);return he.useEffect(()=>{if(!t.current)return;const e=new Sw,n=new xn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new O_;i.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(i.domElement);const r=new ws,s=new Yf({color:65280}),o=new si(r,s);e.add(o),n.position.z=5;const a=()=>{requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,i.render(e,n)};return a(),()=>{t.current&&t.current.removeChild(i.domElement)}},[]),$e.jsx("div",{ref:t,className:"homePageContainer"})};function Ew(){const[t,e]=he.useState(!0);return $e.jsx(fS,{children:$e.jsxs("div",{children:[t?$e.jsx("nav",{children:$e.jsxs("ul",{children:[$e.jsx("li",{children:$e.jsx(mh,{to:"/",children:"Home"})}),$e.jsx("li",{children:$e.jsx(mh,{to:"/blank",children:"Blank"})}),$e.jsx("li",{children:$e.jsx("button",{className:"hideNavbarButton",onClick:()=>e(!1),"aria-label":"Hide Menu",children:$e.jsx("svg",{viewBox:"0 0 1024 1024",width:"32",height:"32",fill:"#ffffff",children:$e.jsx("path",{d:"M512 288L160 640L192 640L192 736L832 736L832 640L864 640Z"})})})})]})}):$e.jsx("button",{className:"showNavbarButton",onClick:()=>e(!0),"aria-label":"Show Menu",children:$e.jsxs("svg",{viewBox:"0 0 32 32",width:"32",height:"32",children:[$e.jsx("rect",{x:"0",y:"4",width:"32",height:"4",fill:"rgba(255, 255, 255, 0.5)"}),$e.jsx("rect",{x:"0",y:"14",width:"32",height:"4",fill:"rgba(255, 255, 255, 0.5)"}),$e.jsx("rect",{x:"0",y:"24",width:"32",height:"4",fill:"rgba(255, 255, 255, 0.5)"})]})}),$e.jsxs(sS,{children:[$e.jsx(Dc,{path:"/",element:$e.jsx(yw,{})}),$e.jsx(Dc,{path:"/blank",element:$e.jsx(mS,{})})]})]})})}gx.render($e.jsx(Yp.StrictMode,{children:$e.jsx(Ew,{})}),document.getElementById("root"));
