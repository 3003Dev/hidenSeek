!function(){function e(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],r=0
if(t)return t.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError(typeof e+" is not iterable")}function t(e,t){if(null==e)return{}
var r,n,a=function(e,t){if(null==e)return{}
var r={}
for(var n in e)if({}.hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue
r[n]=e[n]}return r}(e,t)
if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e)
for(n=0;n<s.length;n++)r=s[n],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function r(){function e(e,r,a,s){var i=r&&r.prototype instanceof t?r:t,c=Object.create(i.prototype)
return n(c,"_invoke",function(e,t,r){function n(e,t){for(s=e,i=t,l=0;!d&&c&&!r&&l<u.length;l++){var r,n=u[l],a=f.p,h=n[2]
e>3?(r=h===t)&&(i=n[(s=n[4])?5:(s=3,3)],n[4]=n[5]=o):n[0]<=a&&((r=e<2&&a<n[1])?(s=0,f.v=t,f.n=n[1]):a<h&&(r=e<3||n[0]>t||t>h)&&(n[4]=e,n[5]=t,f.n=h,s=0))}if(r||e>1)return p
throw d=!0,t}var a,s,i,c=0,u=r||[],d=!1,f={p:0,n:0,v:o,a:n,f:n.bind(o,4),d:function(e,t){return a=e,s=0,i=o,f.n=t,p}}
return function(r,u,h){if(c>1)throw TypeError("Generator is already running")
for(d&&1===u&&n(u,h),s=u,i=h;(l=s<2?o:i)||!d;){a||(s?s<3?(s>1&&(f.n=-1),n(s,i)):f.n=i:f.v=i)
try{if(c=2,a){if(s||(r="next"),l=a[r]){if(!(l=l.call(a,i)))throw TypeError("iterator result is not an object")
if(!l.done)return l
i=l.value,s<2&&(s=0)}else 1===s&&(l=a.return)&&l.call(a),s<2&&(i=TypeError("The iterator does not provide a '"+r+"' method"),s=1)
a=o}else if((l=(d=f.n<0)?i:e.call(t,f))!==p)break}catch(l){a=o,s=1,i=l}finally{c=1}}return{value:l,done:d}}}(e,a,s),!0),c}function t(){}function a(){}function s(){}function i(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,s):(e.__proto__=s,n(e,d,"GeneratorFunction")),e.prototype=Object.create(h),e}var o,l,c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",d=c.toStringTag||"@@toStringTag",p={}
l=Object.getPrototypeOf
var f=[][u]?l(l([][u]())):(n(l={},u,function(){return this}),l),h=s.prototype=t.prototype=Object.create(f)
return a.prototype=s,n(h,"constructor",s),n(s,"constructor",a),a.displayName="GeneratorFunction",n(s,d,"GeneratorFunction"),n(h),n(h,d,"Generator"),n(h,u,function(){return this}),n(h,"toString",function(){return"[object Generator]"}),(r=function(){return{w:e,m:i}})()}function n(e,t,r,a){var s=Object.defineProperty
try{s({},"",{})}catch(e){s=0}n=function(e,t,r,a){function i(t,r){n(e,t,function(e){return this._invoke(t,r,e)})}t?s?s(e,t,{value:r,enumerable:!a,configurable:!a,writable:!a}):e[t]=r:(i("next",0),i("throw",1),i("return",2))},n(e,t,r,a)}function a(e,t,r,n,a,s,i){try{var o=e[s](i),l=o.value}catch(e){return void r(e)}o.done?t(l):Promise.resolve(l).then(n,a)}function s(e){return function(){var t=this,r=arguments
return new Promise(function(n,s){function i(e){a(l,n,s,i,o,"next",e)}function o(e){a(l,n,s,i,o,"throw",e)}var l=e.apply(t,r)
i(void 0)})}}function i(e,t){return l(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,a,s,i,o=[],l=!0,c=!1
try{if(s=(r=r.call(e)).next,0===t){if(Object(r)!==r)return
l=!1}else for(;!(l=(n=s.call(r)).done)&&(o.push(n.value),o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return o}}(e,t)||f(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){if(Array.isArray(e))return e}function c(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?c(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=f(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==r.return||r.return()}finally{if(o)throw s}}}}function f(e,t){if(e){if("string"==typeof e)return h(e,t)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}var m=["page"],g=["page","matches"],b=["onClick","discover","prefetch","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],v=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],y=["discover","fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","viewTransition"]
System.register([],function(){"use strict"
return{execute:function(n,a){function c(e,t){for(var r=function(){var r=t[n]
if("string"!=typeof r&&!Array.isArray(r)){var a=function(t){if("default"!==t&&!(t in e)){var n=Object.getOwnPropertyDescriptor(r,t)
n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}
for(var s in r)a(s)}},n=0;n<t.length;n++)r()
return Object.freeze(e)}function d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function x(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e
var t=e.default
if("function"==typeof t){var r=function e(){var r=!1
try{r=this instanceof e}catch(n){}return r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)}
r.prototype=t.prototype}else r={}
return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var n=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}),r}function w(){function e(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||j}function t(){}function r(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||j}function n(){}function a(e,t,r){var n=r.ref
return{$$typeof:u,type:e,key:t,ref:void 0!==n?n:null,props:r}}function s(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}function i(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"}
return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function o(e,t,r,l,c){var p=typeof e
"undefined"!==p&&"boolean"!==p||(e=null)
var f,h,m=!1
if(null===e)m=!0
else switch(p){case"bigint":case"string":case"number":m=!0
break
case"object":switch(e.$$typeof){case u:case d:m=!0
break
case x:return o((m=e._init)(e._payload),t,r,l,c)}}if(m)return c=c(e),m=""===l?"."+i(e,0):l,E(c)?(r="",null!=m&&(r=m.replace(R,"$&/")+"/"),o(c,t,r,"",function(e){return e})):null!=c&&(s(c)&&(f=c,h=r+(null==c.key||e&&e.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+m,c=a(f.type,h,f.props)),t.push(c)),1
m=0
var g,b=""===l?".":l+":"
if(E(e))for(var v=0;v<e.length;v++)m+=o(l=e[v],t,r,p=b+i(l,v),c)
else if("function"==typeof(v=null===(g=e)||"object"!=typeof g?null:"function"==typeof(g=k&&g[k]||g["@@iterator"])?g:null))for(e=v.call(e),v=0;!(l=e.next()).done;)m+=o(l=l.value,t,r,p=b+i(l,v++),c)
else if("object"===p){if("function"==typeof e.then)return o(function(e){switch(e.status){case"fulfilled":return e.value
case"rejected":throw e.reason
default:switch("string"==typeof e.status?e.then(n,n):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value
case"rejected":throw e.reason}}throw e}(e),t,r,l,c)
throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return m}function l(e,t,r){if(null==e)return e
var n=[],a=0
return o(e,n,"","",function(e){return t.call(r,e,a++)}),n}function c(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default
throw e._result}if(nn)return gn
nn=1
var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),k=Symbol.iterator,j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,_={}
e.prototype.isReactComponent={},e.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.")
this.updater.enqueueSetState(this,e,t,"setState")},e.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},t.prototype=e.prototype
var N=r.prototype=new t
N.constructor=r,S(N,e.prototype),N.isPureReactComponent=!0
var E=Array.isArray,T={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty,R=/\/+/g,P="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e})
if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)},A={map:l,forEach:function(e,t,r){l(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0
return l(e,function(){t++}),t},toArray:function(e){return l(e,function(e){return e})||[]},only:function(e){if(!s(e))throw Error("React.Children.only expected to receive a single React element child.")
return e}}
return gn.Activity=w,gn.Children=A,gn.Component=e,gn.Fragment=p,gn.Profiler=h,gn.PureComponent=r,gn.StrictMode=f,gn.Suspense=v,gn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,gn.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},gn.cache=function(e){return function(){return e.apply(null,arguments)}},gn.cacheSignal=function(){return null},gn.cloneElement=function(e,t,r){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".")
var n=S({},e.props),s=e.key
if(null!=t)for(i in void 0!==t.key&&(s=""+t.key),t)!C.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(n[i]=t[i])
var i=arguments.length-2
if(1===i)n.children=r
else if(1<i){for(var o=Array(i),l=0;l<i;l++)o[l]=arguments[l+2]
n.children=o}return a(e.type,s,n)},gn.createContext=function(e){return(e={$$typeof:g,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:m,_context:e},e},gn.createElement=function(e,t,r){var n,s={},i=null
if(null!=t)for(n in void 0!==t.key&&(i=""+t.key),t)C.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(s[n]=t[n])
var o=arguments.length-2
if(1===o)s.children=r
else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2]
s.children=l}if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===s[n]&&(s[n]=o[n])
return a(e,i,s)},gn.createRef=function(){return{current:null}},gn.forwardRef=function(e){return{$$typeof:b,render:e}},gn.isValidElement=s,gn.lazy=function(e){return{$$typeof:x,_payload:{_status:-1,_result:e},_init:c}},gn.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},gn.startTransition=function(e){var t=T.T,r={}
T.T=r
try{var a=e(),s=T.S
null!==s&&s(r,a),"object"==typeof a&&null!==a&&"function"==typeof a.then&&a.then(n,P)}catch(i){P(i)}finally{null!==t&&null!==r.types&&(t.types=r.types),T.T=t}},gn.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},gn.use=function(e){return T.H.use(e)},gn.useActionState=function(e,t,r){return T.H.useActionState(e,t,r)},gn.useCallback=function(e,t){return T.H.useCallback(e,t)},gn.useContext=function(e){return T.H.useContext(e)},gn.useDebugValue=function(){},gn.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},gn.useEffect=function(e,t){return T.H.useEffect(e,t)},gn.useEffectEvent=function(e){return T.H.useEffectEvent(e)},gn.useId=function(){return T.H.useId()},gn.useImperativeHandle=function(e,t,r){return T.H.useImperativeHandle(e,t,r)},gn.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},gn.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},gn.useMemo=function(e,t){return T.H.useMemo(e,t)},gn.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},gn.useReducer=function(e,t,r){return T.H.useReducer(e,t,r)},gn.useRef=function(e){return T.H.useRef(e)},gn.useState=function(e){return T.H.useState(e)},gn.useSyncExternalStore=function(e,t,r){return T.H.useSyncExternalStore(e,t,r)},gn.useTransition=function(){return T.H.useTransition()},gn.version="19.2.1",gn}function k(){return an||(an=1,mn.exports=w()),mn.exports}function j(e,t){if(!1===e||null==e)throw new Error(t)}function S(e,t){if(!e)try{throw new Error(t)}catch(r){}}function _(e,t){return{usr:e.state,key:e.key,idx:t}}function N(e,t,r=null,n){return u(u({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?T(t):t),{},{state:r,key:t&&t.key||n||Math.random().toString(36).substring(2,10)})}function E({pathname:e="/",search:t="",hash:r=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),r&&"#"!==r&&(e+="#"===r.charAt(0)?r:"#"+r),e}function T(e){var t={}
if(e){var r=e.indexOf("#")
r>=0&&(t.hash=e.substring(r),e=e.substring(0,r))
var n=e.indexOf("?")
n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function C(e,t,r="/"){return function(e,t,r){var n=L(("string"==typeof t?T(t):t).pathname||"/",r)
if(null==n)return null
var a=R(e)
!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){var r=e.length===t.length&&e.slice(0,-1).every((e,r)=>e===t[r])
return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a)
for(var s=null,i=0;null==s&&i<a.length;++i){var o=z(n)
s=O(a[i],o,!1)}return s}(e,t,r)}function R(e,t=[],r=[],n="",a=!1){var s=(e,s,i=a,o)=>{var l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:s,route:e}
if(l.relativePath.startsWith("/")){if(!l.relativePath.startsWith(n)&&i)return
j(l.relativePath.startsWith(n),`Absolute route path "${l.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(n.length)}var c=In([n,l.relativePath]),u=r.concat(l)
e.children&&e.children.length>0&&(j(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),R(e.children,t,u,c,i)),(null!=e.path||e.index)&&t.push({path:c,score:A(c,e.index),routesMeta:u})}
return e.forEach((e,t)=>{var r
if(""!==e.path&&null!==(r=e.path)&&void 0!==r&&r.includes("?")){var n,a=p(P(e.path))
try{for(a.s();!(n=a.n()).done;){var i=n.value
s(e,t,!0,i)}}catch(o){a.e(o)}finally{a.f()}}else s(e,t)}),t}function P(e){var t=e.split("/")
if(0===t.length)return[]
var r,n=l(r=t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||f(r)||o(),a=n[0],s=h(n).slice(1),i=a.endsWith("?"),c=a.replace(/\?$/,"")
if(0===s.length)return i?[c,""]:[c]
var u=P(s.join("/")),d=[]
return d.push(...u.map(e=>""===e?c:[c,e].join("/"))),i&&d.push(...u),d.map(t=>e.startsWith("/")&&""===t?"/":t)}function A(e,t){var r=e.split("/"),n=r.length
return r.some(An)&&(n+=Pn),t&&(n+=Tn),r.filter(e=>!An(e)).reduce((e,t)=>e+(Nn.test(t)?En:""===t?Cn:Rn),n)}function O(e,t,r=!1){for(var n=e.routesMeta,a={},s="/",i=[],o=0;o<n.length;++o){var l=n[o],c=o===n.length-1,u="/"===s?t:t.slice(s.length)||"/",d=I({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),p=l.route
if(!d&&c&&r&&!n[n.length-1].route.index&&(d=I({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null
Object.assign(a,d.params),i.push({params:a,pathname:In([s,d.pathname]),pathnameBase:zn(In([s,d.pathnameBase])),route:p}),"/"!==d.pathnameBase&&(s=In([s,d.pathnameBase]))}return i}function I(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0})
var r=function(e,t=!1,r=!0){S("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`)
var n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2")
return e.endsWith("*")?(n.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),n=i(r,2),a=n[0],s=n[1],o=t.match(a)
if(!o)return null
var l=o[0],c=l.replace(/(.)\/+$/,"$1"),u=o.slice(1),d=s.reduce((e,{paramName:t,isOptional:r},n)=>{if("*"===t){var a=u[n]||""
c=l.slice(0,l.length-a.length).replace(/(.)\/+$/,"$1")}var s=u[n]
return e[t]=r&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{})
return{params:d,pathname:l,pathnameBase:c,pattern:e}}function z(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return S(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function L(e,t){if("/"===t)return e
if(!e.toLowerCase().startsWith(t.toLowerCase()))return null
var r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r)
return n&&"/"!==n?null:e.slice(r)||"/"}function D(e,t){var r=t.replace(/\/+$/,"").split("/")
return e.split("/").forEach(e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)}),r.length>1?r.join("/"):"/"}function U(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $(e){var t=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e)
return t.map((e,r)=>r===t.length-1?e.pathname:e.pathnameBase)}function F(e,t,r,n=!1){var a
"string"==typeof e?a=T(e):(j(!(a=u({},e)).pathname||!a.pathname.includes("?"),U("?","pathname","search",a)),j(!a.pathname||!a.pathname.includes("#"),U("#","pathname","hash",a)),j(!a.search||!a.search.includes("#"),U("#","search","hash",a)))
var s,i=""===e||""===a.pathname,o=i?"/":a.pathname
if(null==o)s=r
else{var l=t.length-1
if(!n&&o.startsWith("..")){for(var c=o.split("/");".."===c[0];)c.shift(),l-=1
a.pathname=c.join("/")}s=l>=0?t[l]:"/"}var d=function(e,t="/"){var r,n,a="string"==typeof e?T(e):e,s=a.pathname,i=a.search,o=void 0===i?"":i,l=a.hash,c=void 0===l?"":l
return s?(n=s,On.test(n)?r=s:(s.includes("//")&&S(!1,`Pathnames cannot have embedded double slashes - normalizing ${s} -> ${s=s.replace(/\/\/+/g,"/")}`),r=s.startsWith("/")?D(s.substring(1),"/"):D(s,t))):r=t,{pathname:r,search:Ln(o),hash:Dn(c)}}(a,s),p=o&&"/"!==o&&o.endsWith("/"),f=(i||"."===o)&&r.endsWith("/")
return d.pathname.endsWith("/")||!p&&!f||(d.pathname+="/"),d}function B(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}function W(){return null!=bn.useContext(qn)}function V(){return j(W(),"useLocation() may be used only in the context of a <Router> component."),bn.useContext(qn).location}function q(e){bn.useContext(Vn).static||bn.useLayoutEffect(e)}function M(){return bn.useContext(Mn).isDataRoute?function(){var e=function(){var e=bn.useContext(Fn)
return j(e,J("useNavigate")),e}().router,t=X("useNavigate"),n=bn.useRef(!1)
q(()=>{n.current=!0})
var a=bn.useCallback(function(){var a=s(r().m(function a(s,i={}){return r().w(function(r){for(;;)switch(r.n){case 0:if(S(n.current,Kn),n.current){r.n=1
break}return r.a(2)
case 1:if("number"!=typeof s){r.n=3
break}return r.n=2,e.navigate(s)
case 2:r.n=4
break
case 3:return r.n=4,e.navigate(s,u({fromRouteId:t},i))
case 4:return r.a(2)}},a)}))
return function(e){return a.apply(this,arguments)}}(),[e,t])
return a}():function(){j(W(),"useNavigate() may be used only in the context of a <Router> component.")
var e=bn.useContext(Fn),t=bn.useContext(Vn),r=t.basename,n=t.navigator,a=bn.useContext(Mn).matches,s=V().pathname,i=JSON.stringify($(a)),o=bn.useRef(!1)
return q(()=>{o.current=!0}),bn.useCallback((t,a={})=>{if(S(o.current,Kn),o.current)if("number"!=typeof t){var l=F(t,JSON.parse(i),s,"path"===a.relative)
null==e&&"/"!==r&&(l.pathname="/"===l.pathname?r:In([r,l.pathname])),(a.replace?n.replace:n.push)(l,a.state,a)}else n.go(t)},[r,n,i,s,e])}()}function H(e,{relative:t}={}){var r=bn.useContext(Mn).matches,n=V().pathname,a=JSON.stringify($(r))
return bn.useMemo(()=>F(e,JSON.parse(a),n,"path"===t),[e,a,n,t])}function K(e,t,r,n){j(W(),"useRoutes() may be used only in the context of a <Router> component.")
var a=bn.useContext(Vn).navigator,s=bn.useContext(Mn).matches,i=s[s.length-1],o=i?i.params:{},l=i?i.pathname:"/",c=i?i.pathnameBase:"/",d=i&&i.route,p=d&&d.path||""
Z(l,!d||p.endsWith("*")||p.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${p}"> to <Route path="${"/"===p?"*":`${p}/*`}">.`)
var f,h=V()
if(t){var m,g="string"==typeof t?T(t):t
j("/"===c||(null===(m=g.pathname)||void 0===m?void 0:m.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${g.pathname}" was given in the \`location\` prop.`),f=g}else f=h
var b=f.pathname||"/",v=b
if("/"!==c){var y=c.replace(/^\//,"").split("/")
v="/"+b.replace(/^\//,"").split("/").slice(y.length).join("/")}var x=C(e,{pathname:v})
S(d||null!=x,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),S(null==x||void 0!==x[x.length-1].route.element||void 0!==x[x.length-1].route.Component||void 0!==x[x.length-1].route.lazy,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`)
var w=function(e,t=[],r=null,n=null){if(null==e){if(!r)return null
if(r.errors)e=r.matches
else{if(0!==t.length||r.initialized||!(r.matches.length>0))return null
e=r.matches}}var a=e,s=null==r?void 0:r.errors
if(null!=s){var i=a.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]))
j(i>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),a=a.slice(0,Math.min(a.length,i+1))}var o=!1,l=-1
if(r)for(var c=0;c<a.length;c++){var u=a[c]
if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){var d=r.loaderData,p=r.errors,f=u.route.loader&&!d.hasOwnProperty(u.route.id)&&(!p||void 0===p[u.route.id])
if(u.route.lazy||f){o=!0,a=l>=0?a.slice(0,l+1):[a[0]]
break}}}var h=r&&n?(e,t)=>{var a,s
n(e,{location:r.location,params:null!==(a=null===(s=r.matches)||void 0===s||null===(s=s[0])||void 0===s?void 0:s.params)&&void 0!==a?a:{},unstable_pattern:B(r.matches),errorInfo:t})}:void 0
return a.reduceRight((e,n,i)=>{var c,u=!1,d=null,p=null
r&&(c=s&&n.route.id?s[n.route.id]:void 0,d=n.route.errorElement||Yn,o&&(l<0&&0===i?(Z("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,p=null):l===i&&(u=!0,p=n.route.hydrateFallbackElement||null)))
var f=t.concat(a.slice(0,i+1)),m=()=>{var t
return t=c?d:u?p:n.route.Component?bn.createElement(n.route.Component,null):n.route.element?n.route.element:e,bn.createElement(G,{match:n,routeContext:{outlet:e,matches:f,isDataRoute:null!=r},children:t})}
return r&&(n.route.ErrorBoundary||n.route.errorElement||0===i)?bn.createElement(Gn,{location:r.location,revalidation:r.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:h}):m()},null)}(x&&x.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:In([c,a.encodeLocation?a.encodeLocation(e.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:In([c,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),s,r,n)
return t&&w?bn.createElement(qn.Provider,{value:{location:u({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:"POP"}},w):w}function Y(){var e,t=function(){var e,t=bn.useContext(Hn),r=function(){var e=bn.useContext(Bn)
return j(e,J("useRouteError")),e}(),n=X("useRouteError")
return void 0!==t?t:null===(e=r.errors)||void 0===e?void 0:e[n]}(),r=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},i={padding:"2px 4px",backgroundColor:a}
return e=bn.createElement(bn.Fragment,null,bn.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),bn.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",bn.createElement("code",{style:i},"ErrorBoundary")," or"," ",bn.createElement("code",{style:i},"errorElement")," prop on your route.")),bn.createElement(bn.Fragment,null,bn.createElement("h2",null,"Unexpected Application Error!"),bn.createElement("h3",{style:{fontStyle:"italic"}},r),n?bn.createElement("pre",{style:s},n):null,e)}function G({routeContext:e,match:t,children:r}){var n=bn.useContext(Fn)
return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),bn.createElement(Mn.Provider,{value:e},r)}function J(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X(e){var t=function(e){var t=bn.useContext(Mn)
return j(t,J(e)),t}(e),r=t.matches[t.matches.length-1]
return j(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Z(e,t,r){t||Jn[e]||(Jn[e]=!0,S(!1,r))}function Q(){j(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ee({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:a,static:s=!1,unstable_useTransitions:i}){j(!W(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.")
var o=e.replace(/^\/*/,"/"),l=bn.useMemo(()=>({basename:o,navigator:a,static:s,unstable_useTransitions:i,future:{}}),[o,a,s,i])
"string"==typeof r&&(r=T(r))
var c=r,u=c.pathname,d=void 0===u?"/":u,p=c.search,f=void 0===p?"":p,h=c.hash,m=void 0===h?"":h,g=c.state,b=void 0===g?null:g,v=c.key,y=void 0===v?"default":v,x=bn.useMemo(()=>{var e=L(d,o)
return null==e?null:{location:{pathname:e,search:f,hash:m,state:b,key:y},navigationType:n}},[o,d,f,m,b,y,n])
return S(null!=x,`<Router basename="${o}"> is not able to match the URL "${d}${f}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==x?null:bn.createElement(Vn.Provider,{value:l},bn.createElement(qn.Provider,{children:t,value:x}))}function te({children:e,location:t}){return K(re(e),t)}function re(e,t=[]){var r=[]
return bn.Children.forEach(e,(e,n)=>{if(bn.isValidElement(e)){var a=[...t,n]
if(e.type!==bn.Fragment){j(e.type===Q,`[${"string"==typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),j(!e.props.index||!e.props.children,"An index route cannot have child routes.")
var s={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy}
e.props.children&&(s.children=re(e.props.children,a)),r.push(s)}else r.push.apply(r,re(e.props.children,a))}}),r}function ne(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement}function ae(e=""){return new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{var n=e[r]
return t.concat(Array.isArray(n)?n.map(e=>[r,e]):[[r,n]])},[]))}function se(e){return null==e||ea.has(e)?e:(S(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zn}"`),null)}function ie(e,t){var r,n,a,s,i,o
if(ne(o=e)&&"form"===o.tagName.toLowerCase()){var l=e.getAttribute("action")
n=l?L(l,t):null,r=e.getAttribute("method")||Xn,a=se(e.getAttribute("enctype"))||Zn,s=new FormData(e)}else if(function(e){return ne(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return ne(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){var c=e.form
if(null==c)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
var u=e.getAttribute("formaction")||c.getAttribute("action")
if(n=u?L(u,t):null,r=e.getAttribute("formmethod")||c.getAttribute("method")||Xn,a=se(e.getAttribute("formenctype"))||se(c.getAttribute("enctype"))||Zn,s=new FormData(c,e),!function(){if(null===Qn)try{new FormData(document.createElement("form"),0),Qn=!1}catch(e){Qn=!0}return Qn}()){var d=e.name,p=e.type,f=e.value
if("image"===p){var h=d?`${d}.`:""
s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else d&&s.append(d,f)}}else{if(ne(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">')
r=Xn,n=null,a=Zn,i=e}return s&&"text/plain"===a&&(i=s,s=void 0),{action:n,method:r.toLowerCase(),encType:a,formData:s,body:i}}function oe(e,t){if(!1===e||null==e)throw new Error(t)}function le(e,t){return ce.apply(this,arguments)}function ce(){return(ce=s(r().m(function e(t,n){var s
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(!(t.id in n)){e.n=1
break}return e.a(2,n[t.id])
case 1:return e.p=1,e.n=2,a.import(t.module)
case 2:return s=e.v,n[t.id]=s,e.a(2,s)
case 3:return e.p=3,e.v,window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),e.a(2,new Promise(()=>{}))}},e,null,[[1,3]])}))).apply(this,arguments)}function ue(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}function de(){return de=s(r().m(function e(t,n,a){var i
return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,Promise.all(t.map(function(){var e=s(r().m(function e(t){var s,i
return r().w(function(e){for(;;)switch(e.n){case 0:if(!(s=n.routes[t.route.id])){e.n=2
break}return e.n=1,le(s,a)
case 1:return i=e.v,e.a(2,i.links?i.links():[])
case 2:return e.a(2,[])}},e)}))
return function(t){return e.apply(this,arguments)}}()))
case 1:return i=e.v,e.a(2,fe(i.flat(1).filter(ue).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?u(u({},e),{},{rel:"prefetch",as:"style"}):u(u({},e),{},{rel:"prefetch"}))))}},e)})),de.apply(this,arguments)}function pe(e,t,r,n,a,s){var i=(e,t)=>!r[t]||e.route.id!==r[t].route.id,o=(e,t)=>{var n
return r[t].pathname!==e.pathname||(null===(n=r[t].route.path)||void 0===n?void 0:n.endsWith("*"))&&r[t].params["*"]!==e.params["*"]}
return"assets"===s?t.filter((e,t)=>i(e,t)||o(e,t)):"data"===s?t.filter((t,s)=>{var l=n.routes[t.route.id]
if(!l||!l.hasLoader)return!1
if(i(t,s)||o(t,s))return!0
if(t.route.shouldRevalidate){var c,u=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:(null===(c=r[0])||void 0===c?void 0:c.params)||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0})
if("boolean"==typeof u)return u}return!0}):[]}function fe(e,t){var r=new Set
return new Set(t),e.reduce((e,t)=>{var n=JSON.stringify(function(e){var t,r={},n=p(Object.keys(e).sort())
try{for(n.s();!(t=n.n()).done;){var a=t.value
r[a]=e[a]}}catch(s){n.e(s)}finally{n.f()}return r}(t))
return r.has(n)||(r.add(n),e.push({key:n,link:t})),e},[])}function he(){var e=bn.useContext(Fn)
return oe(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function me(){var e=bn.useContext(ta)
return oe(e,"You must render this element inside a <HydratedRouter> element"),e}function ge(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function be(e){var r=e.page,n=t(e,m),a=he().router,s=bn.useMemo(()=>C(a.routes,r,a.basename),[a.routes,r,a.basename])
return s?bn.createElement(ve,u({page:r,matches:s},n)):null}function ve(e){var r=e.page,n=e.matches,a=t(e,g),s=V(),o=me(),l=o.manifest,c=o.routeModules,d=he().basename,p=function(){var e=bn.useContext(Bn)
return oe(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}(),f=p.loaderData,h=p.matches,m=bn.useMemo(()=>pe(r,n,h,l,s,"data"),[r,n,h,l,s]),b=bn.useMemo(()=>pe(r,n,h,l,s,"assets"),[r,n,h,l,s]),v=bn.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[]
var e=new Set,t=!1
if(n.forEach(r=>{var n,a=l.routes[r.route.id]
a&&a.hasLoader&&(!m.some(e=>e.route.id===r.route.id)&&r.route.id in f&&null!==(n=c[r.route.id])&&void 0!==n&&n.shouldRevalidate||a.hasClientLoader?t=!0:e.add(r.route.id))}),0===e.size)return[]
var a=function(e,t,r){var n="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e
return"/"===n.pathname?n.pathname=`_root.${r}`:t&&"/"===L(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}(r,d,"data")
return t&&e.size>0&&a.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[a.pathname+a.search]},[d,f,s,l,m,n,r,c]),y=bn.useMemo(()=>function(e,t,{includeHydrateFallback:r}={}){return n=e.map(e=>{var n=t.routes[e.route.id]
if(!n)return[]
var a=[n.module]
return n.clientActionModule&&(a=a.concat(n.clientActionModule)),n.clientLoaderModule&&(a=a.concat(n.clientLoaderModule)),r&&n.hydrateFallbackModule&&(a=a.concat(n.hydrateFallbackModule)),n.imports&&(a=a.concat(n.imports)),a}).flat(1),[...new Set(n)]
var n}(b,l),[b,l]),x=function(e){var t=me(),r=t.manifest,n=t.routeModules,a=i(bn.useState([]),2),s=a[0],o=a[1]
return bn.useEffect(()=>{var t=!1
return function(e,t,r){return de.apply(this,arguments)}(e,r,n).then(e=>{t||o(e)}),()=>{t=!0}},[e,r,n]),s}(b)
return bn.createElement(bn.Fragment,null,v.map(e=>bn.createElement("link",u({key:e,rel:"prefetch",as:"fetch",href:e},a))),y.map(e=>bn.createElement("link",u({key:e,rel:"modulepreload",href:e},a))),x.map(({key:e,link:t})=>bn.createElement("link",u({key:e,nonce:a.nonce},t))))}function ye(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}function xe({basename:e,children:t,unstable_useTransitions:r,window:n}){var a=bn.useRef()
null==a.current&&(a.current=function(e={}){return function(e,t,r,n={}){function a(){return(p.state||{idx:null}).idx}function s(){f="POP"
var e=a(),t=null==e?null:e-m
m=e,h&&h({action:f,location:g.location,delta:t})}function i(e){return function(e,t=!1){var r="http://localhost"
"undefined"!=typeof window&&(r="null"!==window.location.origin?window.location.origin:window.location.href),j(r,"No window.location.(origin|href) available to create URL")
var n="string"==typeof e?e:E(e)
return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}(e)}var o=n.window,l=void 0===o?document.defaultView:o,c=n.v5Compat,d=void 0!==c&&c,p=l.history,f="POP",h=null,m=a()
null==m&&(m=0,p.replaceState(u(u({},p.state),{},{idx:m}),""))
var g={get action(){return f},get location(){return e(l,p)},listen(e){if(h)throw new Error("A history only accepts one active listener")
return l.addEventListener(_n,s),h=e,()=>{l.removeEventListener(_n,s),h=null}},createHref:e=>t(l,e),createURL:i,encodeLocation(e){var t=i(e)
return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f="PUSH"
var r=N(g.location,e,t),n=_(r,m=a()+1),s=g.createHref(r)
try{p.pushState(n,"",s)}catch(i){if(i instanceof DOMException&&"DataCloneError"===i.name)throw i
l.location.assign(s)}d&&h&&h({action:f,location:g.location,delta:1})},replace:function(e,t){f="REPLACE"
var r=N(g.location,e,t),n=_(r,m=a()),s=g.createHref(r)
p.replaceState(n,"",s),d&&h&&h({action:f,location:g.location,delta:0})},go:e=>p.go(e)}
return g}(function(e,t){var r=e.location
return N("",{pathname:r.pathname,search:r.search,hash:r.hash},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:E(t)},0,e)}({window:n,v5Compat:!0}))
var s=a.current,o=i(bn.useState({action:s.action,location:s.location}),2),l=o[0],c=o[1],d=bn.useCallback(e=>{!1===r?c(e):bn.startTransition(()=>c(e))},[r])
return bn.useLayoutEffect(()=>s.listen(d),[s,d]),bn.createElement(ee,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:s,unstable_useTransitions:!0===r})}function we(e){var t=bn.useContext(Fn)
return j(t,function(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}(e)),t}function ke(e,t){function r(){this.constructor=e}if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
da(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function je(e,t){var r={}
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0
for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function Se(e,t,r,n){var a,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n)
else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(s<3?a(i):s>3?a(t,r,i):a(t,r))||i)
return s>3&&i&&Object.defineProperty(t,r,i),i}function _e(e,t){return function(r,n){t(r,n,e)}}function Ne(e,t,r,n,a,s){function i(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected")
return e}for(var o,l=n.kind,c="getter"===l?"get":"setter"===l?"set":"value",u=!t&&e?n.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),p=!1,f=r.length-1;f>=0;f--){var h={}
for(var m in n)h[m]="access"===m?{}:n[m]
for(var m in n.access)h.access[m]=n.access[m]
h.addInitializer=function(e){if(p)throw new TypeError("Cannot add initializers after decoration has completed")
s.push(i(e||null))}
var g=(0,r[f])("accessor"===l?{get:d.get,set:d.set}:d[c],h)
if("accessor"===l){if(void 0===g)continue
if(null===g||"object"!=typeof g)throw new TypeError("Object expected");(o=i(g.get))&&(d.get=o),(o=i(g.set))&&(d.set=o),(o=i(g.init))&&a.unshift(o)}else(o=i(g))&&("field"===l?a.unshift(o):d[c]=o)}u&&Object.defineProperty(u,n.name,d),p=!0}function Ee(e,t,r){for(var n=arguments.length>2,a=0;a<t.length;a++)r=n?t[a].call(e,r):t[a].call(e)
return n?r:void 0}function Te(e){return"symbol"==typeof e?e:"".concat(e)}function Ce(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function Re(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function Pe(e,t,r,n){return new(r||(r=Promise))(function(a,s){function i(e){try{l(n.next(e))}catch(t){s(t)}}function o(e){try{l(n.throw(e))}catch(t){s(t)}}function l(e){var t
e.done?a(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(i,o)}l((n=n.apply(e,t||[])).next())})}function Ae(e,t){function r(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.")
for(;o&&(o=0,r[0]&&(i=0)),i;)try{if(n=1,a&&(s=2&r[0]?a.return:r[0]?a.throw||((s=a.return)&&s.call(a),0):a.next)&&!(s=s.call(a,r[1])).done)return s
switch(a=0,s&&(r=[2&r[0],s.value]),r[0]){case 0:case 1:s=r
break
case 4:return i.label++,{value:r[1],done:!1}
case 5:i.label++,a=r[1],r=[0]
continue
case 7:r=i.ops.pop(),i.trys.pop()
continue
default:if(!((s=(s=i.trys).length>0&&s[s.length-1])||6!==r[0]&&2!==r[0])){i=0
continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){i.label=r[1]
break}if(6===r[0]&&i.label<s[1]){i.label=s[1],s=r
break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(r)
break}s[2]&&i.ops.pop(),i.trys.pop()
continue}r=t.call(e,i)}catch(l){r=[6,l],a=0}finally{n=s=0}if(5&r[0])throw r[1]
return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}var n,a,s,i={label:0,sent:function(){if(1&s[0])throw s[1]
return s[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype)
return o.next=r(0),o.throw=r(1),o.return=r(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o}function Oe(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||fa(t,e,r)}function Ie(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0
if(r)return r.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ze(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator]
if(!r)return e
var n,a,s=r.call(e),i=[]
try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)i.push(n.value)}catch(o){a={error:o}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(a)throw a.error}}return i}function Le(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(ze(arguments[t]))
return e}function De(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length
var n=Array(e),a=0
for(t=0;t<r;t++)for(var s=arguments[t],i=0,o=s.length;i<o;i++,a++)n[a]=s[i]
return n}function Ue(e,t,r){if(r||2===arguments.length)for(var n,a=0,s=t.length;a<s;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a])
return e.concat(n||Array.prototype.slice.call(t))}function $e(e){return this instanceof $e?(this.v=e,this):new $e(e)}function Fe(e,t,r){function n(e,t){c[e]&&(l[e]=function(t){return new Promise(function(r,n){u.push([e,t,r,n])>1||a(e,t)})},t&&(l[e]=t(l[e])))}function a(e,t){try{(r=c[e](t)).value instanceof $e?Promise.resolve(r.value.v).then(s,i):o(u[0][2],r)}catch(n){o(u[0][3],n)}var r}function s(e){a("next",e)}function i(e){a("throw",e)}function o(e,t){e(t),u.shift(),u.length&&a(u[0][0],u[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var l,c=r.apply(e,t||[]),u=[]
return l=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),n("next"),n("throw"),n("return",function(e){return function(t){return Promise.resolve(t).then(e,i)}}),l[Symbol.asyncIterator]=function(){return this},l}function Be(e){function t(t,a){r[t]=e[t]?function(r){return(n=!n)?{value:$e(e[t](r)),done:!1}:a?a(r):r}:a}var r,n
return r={},t("next"),t("throw",function(e){throw e}),t("return"),r[Symbol.iterator]=function(){return this},r}function We(e){function t(t){r[t]=e[t]&&function(r){return new Promise(function(n,a){!function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)}(n,a,(r=e[t](r)).done,r.value)})}}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=Ie(e),r={},t("next"),t("throw"),t("return"),r[Symbol.asyncIterator]=function(){return this},r)}function Ve(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function qe(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r=ma(e),n=0;n<r.length;n++)"default"!==r[n]&&fa(t,e,r[n])
return ha(t,e),t}function Me(e){return e&&e.__esModule?e:{default:e}}function He(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter")
if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it")
return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function Ke(e,t,r,n,a){if("m"===n)throw new TypeError("Private method is not writable")
if("a"===n&&!a)throw new TypeError("Private accessor was defined without a setter")
if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it")
return"a"===n?a.call(e,r):a?a.value=r:t.set(e,r),r}function Ye(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object")
return"function"==typeof e?t===e:e.has(t)}function Ge(e,t,r){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.")
var n,a
if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.")
n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.")
n=t[Symbol.dispose],r&&(a=n)}if("function"!=typeof n)throw new TypeError("Object not disposable.")
a&&(n=function(){try{a.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0})
return t}function Je(e){function t(t){e.error=e.hasError?new ga(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}var r,n=0
return function a(){for(;r=e.stack.pop();)try{if(!r.async&&1===n)return n=0,e.stack.push(r),Promise.resolve().then(a)
if(r.dispose){var s=r.dispose.call(r.value)
if(r.async)return n|=2,Promise.resolve(s).then(a,function(e){return t(e),a()})}else n|=1}catch(i){t(i)}if(1===n)return e.hasError?Promise.reject(e.error):Promise.resolve()
if(e.hasError)throw e.error}()}function Xe(e,t){return"string"==typeof e&&/^\.\.?\//.test(e)?e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(e,r,n,a,s){return r?t?".jsx":".js":!n||a&&s?n+a+"."+s.toLowerCase()+"js":e}):e}function Ze(){if(ja)return $a
ja=1,Object.defineProperty($a,"__esModule",{value:!0})
class e extends Error{constructor(e){super(e.message),this.name="PostgrestError",this.details=e.details,this.hint=e.hint,this.code=e.code}}return $a.default=e,$a}function Qe(){if(Sa)return Ua
Sa=1,Object.defineProperty(Ua,"__esModule",{value:!0})
var e=Oa.__importDefault(Ze())
return Ua.default=class{constructor(e){var t,r
this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=null!==(t=e.shouldThrowOnError)&&void 0!==t&&t,this.signal=e.signal,this.isMaybeSingle=null!==(r=e.isMaybeSingle)&&void 0!==r&&r,e.fetch?this.fetch=e.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}then(t,n){var a=this
void 0===this.schema||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),"GET"!==this.method&&"HEAD"!==this.method&&this.headers.set("Content-Type","application/json")
var i=(0,this.fetch)(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(function(){var t=s(r().m(function t(n){var s,i,o,l,c,u,d,p,f,h,m,g,b,v
return r().w(function(t){for(;;)switch(t.n){case 0:if(c=null,u=null,d=null,p=n.status,f=n.statusText,!n.ok){t.n=3
break}if("HEAD"===a.method){t.n=2
break}return t.n=1,n.text()
case 1:""===(h=t.v)||(u="text/csv"===a.headers.get("Accept")||a.headers.get("Accept")&&(null===(s=a.headers.get("Accept"))||void 0===s?void 0:s.includes("application/vnd.pgrst.plan+text"))?h:JSON.parse(h))
case 2:m=null===(i=a.headers.get("Prefer"))||void 0===i?void 0:i.match(/count=(exact|planned|estimated)/),g=null===(o=n.headers.get("content-range"))||void 0===o?void 0:o.split("/"),m&&g&&g.length>1&&(d=parseInt(g[1])),a.isMaybeSingle&&"GET"===a.method&&Array.isArray(u)&&(u.length>1?(c={code:"PGRST116",details:`Results contain ${u.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},u=null,d=null,p=406,f="Not Acceptable"):u=1===u.length?u[0]:null),t.n=5
break
case 3:return t.n=4,n.text()
case 4:b=t.v
try{c=JSON.parse(b),Array.isArray(c)&&404===n.status&&(u=[],c=null,p=200,f="OK")}catch(r){404===n.status&&""===b?(p=204,f="No Content"):c={message:b}}if(c&&a.isMaybeSingle&&(null===(l=null==c?void 0:c.details)||void 0===l?void 0:l.includes("0 rows"))&&(c=null,p=200,f="OK"),!c||!a.shouldThrowOnError){t.n=5
break}throw new e.default(c)
case 5:return v={error:c,data:u,count:d,status:p,statusText:f},t.a(2,v)}},t)}))
return function(e){return t.apply(this,arguments)}}())
return this.shouldThrowOnError||(i=i.catch(e=>{var t,r,n,a,s,i,o="",l=null==e?void 0:e.cause
if(l){var c=null!==(t=null==l?void 0:l.message)&&void 0!==t?t:"",u=null!==(r=null==l?void 0:l.code)&&void 0!==r?r:""
o=`${null!==(n=null==e?void 0:e.name)&&void 0!==n?n:"FetchError"}: ${null==e?void 0:e.message}`,o+=`\n\nCaused by: ${null!==(a=null==l?void 0:l.name)&&void 0!==a?a:"Error"}: ${c}`,u&&(o+=` (${u})`),(null==l?void 0:l.stack)&&(o+=`\n${l.stack}`)}else o=null!==(s=null==e?void 0:e.stack)&&void 0!==s?s:""
return{error:{message:`${null!==(i=null==e?void 0:e.name)&&void 0!==i?i:"FetchError"}: ${null==e?void 0:e.message}`,details:o,hint:"",code:""},data:null,count:null,status:0,statusText:""}})),i.then(t,n)}returns(){return this}overrideTypes(){return this}},Ua}function et(){if(_a)return Da
_a=1,Object.defineProperty(Da,"__esModule",{value:!0})
var e=Oa.__importDefault(Qe()),t=class extends e.default{select(e){var t=!1,r=(null!=e?e:"*").split("").map(e=>/\s/.test(e)&&!t?"":('"'===e&&(t=!t),e)).join("")
return this.url.searchParams.set("select",r),this.headers.append("Prefer","return=representation"),this}order(e,{ascending:t=!0,nullsFirst:r,foreignTable:n,referencedTable:a=n}={}){var s=a?`${a}.order`:"order",i=this.url.searchParams.get(s)
return this.url.searchParams.set(s,`${i?`${i},`:""}${e}.${t?"asc":"desc"}${void 0===r?"":r?".nullsfirst":".nullslast"}`),this}limit(e,{foreignTable:t,referencedTable:r=t}={}){var n=void 0===r?"limit":`${r}.limit`
return this.url.searchParams.set(n,`${e}`),this}range(e,t,{foreignTable:r,referencedTable:n=r}={}){var a=void 0===n?"offset":`${n}.offset`,s=void 0===n?"limit":`${n}.limit`
return this.url.searchParams.set(a,`${e}`),this.url.searchParams.set(s,""+(t-e+1)),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return"GET"===this.method?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:e=!1,verbose:t=!1,settings:r=!1,buffers:n=!1,wal:a=!1,format:s="text"}={}){var i,o=[e?"analyze":null,t?"verbose":null,r?"settings":null,n?"buffers":null,a?"wal":null].filter(Boolean).join("|"),l=null!==(i=this.headers.get("Accept"))&&void 0!==i?i:"application/json"
return this.headers.set("Accept",`application/vnd.pgrst.plan+${s}; for="${l}"; options=${o};`),this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(e){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${e}`),this}}
return Da.default=t,Da}function tt(){if(Na)return La
Na=1,Object.defineProperty(La,"__esModule",{value:!0})
var e=Oa.__importDefault(et()),t=new RegExp("[,()]"),r=class extends e.default{eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(",")}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(",")}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(",")}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(",")}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,r){var n=Array.from(new Set(r)).map(e=>"string"==typeof e&&t.test(e)?`"${e}"`:`${e}`).join(",")
return this.url.searchParams.append(e,`in.(${n})`),this}contains(e,t){return"string"==typeof t?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(",")}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return"string"==typeof t?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(",")}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return"string"==typeof t?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(",")}}`),this}textSearch(e,t,{config:r,type:n}={}){var a=""
"plain"===n?a="pl":"phrase"===n?a="ph":"websearch"===n&&(a="w")
var s=void 0===r?"":`(${r})`
return this.url.searchParams.append(e,`${a}fts${s}.${t}`),this}match(e){return Object.entries(e).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(e,t,r){return this.url.searchParams.append(e,`not.${t}.${r}`),this}or(e,{foreignTable:t,referencedTable:r=t}={}){var n=r?`${r}.or`:"or"
return this.url.searchParams.append(n,`(${e})`),this}filter(e,t,r){return this.url.searchParams.append(e,`${t}.${r}`),this}}
return La.default=r,La}function rt(){if(Ea)return za
Ea=1,Object.defineProperty(za,"__esModule",{value:!0})
var e=Oa.__importDefault(tt())
return za.default=class{constructor(e,{headers:t={},schema:r,fetch:n}){this.url=e,this.headers=new Headers(t),this.schema=r,this.fetch=n}select(t,r){var n=null!=r?r:{},a=n.head,s=void 0!==a&&a,i=n.count,o=s?"HEAD":"GET",l=!1,c=(null!=t?t:"*").split("").map(e=>/\s/.test(e)&&!l?"":('"'===e&&(l=!l),e)).join("")
return this.url.searchParams.set("select",c),i&&this.headers.append("Prefer",`count=${i}`),new e.default({method:o,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(t,{count:r,defaultToNull:n=!0}={}){var a
if(r&&this.headers.append("Prefer",`count=${r}`),n||this.headers.append("Prefer","missing=default"),Array.isArray(t)){var s=t.reduce((e,t)=>e.concat(Object.keys(t)),[])
if(s.length>0){var i=[...new Set(s)].map(e=>`"${e}"`)
this.url.searchParams.set("columns",i.join(","))}}return new e.default({method:"POST",url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:null!==(a=this.fetch)&&void 0!==a?a:fetch})}upsert(t,{onConflict:r,ignoreDuplicates:n=!1,count:a,defaultToNull:s=!0}={}){var i
if(this.headers.append("Prefer",`resolution=${n?"ignore":"merge"}-duplicates`),void 0!==r&&this.url.searchParams.set("on_conflict",r),a&&this.headers.append("Prefer",`count=${a}`),s||this.headers.append("Prefer","missing=default"),Array.isArray(t)){var o=t.reduce((e,t)=>e.concat(Object.keys(t)),[])
if(o.length>0){var l=[...new Set(o)].map(e=>`"${e}"`)
this.url.searchParams.set("columns",l.join(","))}}return new e.default({method:"POST",url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:null!==(i=this.fetch)&&void 0!==i?i:fetch})}update(t,{count:r}={}){var n
return r&&this.headers.append("Prefer",`count=${r}`),new e.default({method:"PATCH",url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:null!==(n=this.fetch)&&void 0!==n?n:fetch})}delete({count:t}={}){var r
return t&&this.headers.append("Prefer",`count=${t}`),new e.default({method:"DELETE",url:this.url,headers:this.headers,schema:this.schema,fetch:null!==(r=this.fetch)&&void 0!==r?r:fetch})}},za}function nt(){if(Ca)return Aa
Ca=1,Object.defineProperty(Aa,"__esModule",{value:!0}),Aa.PostgrestError=Aa.PostgrestBuilder=Aa.PostgrestTransformBuilder=Aa.PostgrestFilterBuilder=Aa.PostgrestQueryBuilder=Aa.PostgrestClient=void 0
var e=Oa,t=e.__importDefault(function(){if(Ta)return Ia
Ta=1,Object.defineProperty(Ia,"__esModule",{value:!0})
var e=Oa,t=e.__importDefault(rt()),r=e.__importDefault(tt())
return Ia.default=class e{constructor(e,{headers:t={},schema:r,fetch:n}={}){this.url=e,this.headers=new Headers(t),this.schemaName=r,this.fetch=n}from(e){if(!e||"string"!=typeof e||""===e.trim())throw new Error("Invalid relation name: relation must be a non-empty string.")
var r=new URL(`${this.url}/${e}`)
return new t.default(r,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(e,t={},{head:n=!1,get:a=!1,count:s}={}){var i,o,l,c=new URL(`${this.url}/rpc/${e}`)
n||a?(o=n?"HEAD":"GET",Object.entries(t).filter(([e,t])=>void 0!==t).map(([e,t])=>[e,Array.isArray(t)?`{${t.join(",")}}`:`${t}`]).forEach(([e,t])=>{c.searchParams.append(e,t)})):(o="POST",l=t)
var u=new Headers(this.headers)
return s&&u.set("Prefer",`count=${s}`),new r.default({method:o,url:c,headers:u,schema:this.schemaName,body:l,fetch:null!==(i=this.fetch)&&void 0!==i?i:fetch})}},Ia}())
Aa.PostgrestClient=t.default
var r=e.__importDefault(rt())
Aa.PostgrestQueryBuilder=r.default
var n=e.__importDefault(tt())
Aa.PostgrestFilterBuilder=n.default
var a=e.__importDefault(et())
Aa.PostgrestTransformBuilder=a.default
var s=e.__importDefault(Qe())
Aa.PostgrestBuilder=s.default
var i=e.__importDefault(Ze())
return Aa.PostgrestError=i.default,Aa.default={PostgrestClient:t.default,PostgrestQueryBuilder:r.default,PostgrestFilterBuilder:n.default,PostgrestTransformBuilder:a.default,PostgrestBuilder:s.default,PostgrestError:i.default},Aa}function at(e){return"object"==typeof e&&null!==e&&"__isStorageError"in e}function st(e,t,n,a,s,i){return Pe(this,void 0,void 0,r().m(function o(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,new Promise((r,o)=>{e(n,As(t,a,s,i)).then(e=>{if(!e.ok)throw e
return(null==a?void 0:a.noResolveJson)?e:e.json()}).then(e=>r(e)).catch(e=>Ps(e,o,a))}))},o)}))}function it(e,t,n,a){return Pe(this,void 0,void 0,r().m(function s(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,st(e,"GET",t,n,a))},s)}))}function ot(e,t,n,a,s){return Pe(this,void 0,void 0,r().m(function i(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,st(e,"POST",t,a,s,n))},i)}))}function lt(e,t,n,a,s){return Pe(this,void 0,void 0,r().m(function i(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,st(e,"PUT",t,a,s,n))},i)}))}function ct(e,t,n,a){return Pe(this,void 0,void 0,r().m(function s(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,st(e,"HEAD",t,Object.assign(Object.assign({},n),{noResolveJson:!0}),a))},s)}))}function ut(e,t,n,a,s){return Pe(this,void 0,void 0,r().m(function i(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,st(e,"DELETE",t,a,s,n))},i)}))}function dt(e,t,r){var n=new URL(t,e)
if(r)for(var a=0,s=Object.entries(r);a<s.length;a++){var o=i(s[a],2),l=o[0],c=o[1]
void 0!==c&&n.searchParams.set(l,c)}return n.toString()}function pt(e){return ft.apply(this,arguments)}function ft(){return(ft=s(r().m(function e(t){return r().w(function(e){for(;;)switch(e.n){case 0:if(t&&"none"!==t.type){e.n=1
break}return e.a(2,{})
case 1:if("bearer"!==t.type){e.n=2
break}return e.a(2,{Authorization:`Bearer ${t.token}`})
case 2:if("header"!==t.type){e.n=3
break}return e.a(2,{[t.name]:t.value})
case 3:if("custom"!==t.type){e.n=5
break}return e.n=4,t.getHeaders()
case 4:return e.a(2,e.v)
case 5:return e.a(2,{})}},e)}))).apply(this,arguments)}function ht(e){return e.join("\x1f")}function mt(e){return e.join("\x1f")}function gt(e){return"object"==typeof e&&null!==e&&"__isStorageVectorsError"in e}function bt(e,t,n,a,s,i){return Pe(this,void 0,void 0,r().m(function o(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,new Promise((r,o)=>{e(n,ti(t,a,s,i)).then(e=>{if(!e.ok)throw e
if(null==a?void 0:a.noResolveJson)return e
var t=e.headers.get("content-type")
return t&&t.includes("application/json")?e.json():{}}).then(e=>r(e)).catch(e=>ei(e,o,a))}))},o)}))}function vt(e,t,n,a,s){return Pe(this,void 0,void 0,r().m(function i(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,bt(e,"POST",t,a,s,n))},i)}))}function yt(){return li||(li=1,Object.defineProperty(hi,"__esModule",{value:!0}),hi.version=void 0,hi.version="2.86.2"),hi}function xt(){return ci||(ci=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DEFAULT_REALTIME_OPTIONS=e.DEFAULT_AUTH_OPTIONS=e.DEFAULT_DB_OPTIONS=e.DEFAULT_GLOBAL_OPTIONS=e.DEFAULT_HEADERS=void 0
var t,r=yt()
t="undefined"!=typeof Deno?"deno":"undefined"!=typeof document?"web":"undefined"!=typeof navigator&&"ReactNative"===navigator.product?"react-native":"node",e.DEFAULT_HEADERS={"X-Client-Info":`supabase-js-${t}/${r.version}`},e.DEFAULT_GLOBAL_OPTIONS={headers:e.DEFAULT_HEADERS},e.DEFAULT_DB_OPTIONS={schema:"public"},e.DEFAULT_AUTH_OPTIONS={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},e.DEFAULT_REALTIME_OPTIONS={}}(fi)),fi}function wt(){return ui||(ui=1,e=mi,Object.defineProperty(e,"__esModule",{value:!0}),e.fetchWithAuth=e.resolveHeadersConstructor=e.resolveFetch=void 0,e.resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),e.resolveHeadersConstructor=()=>Headers,e.fetchWithAuth=(t,n,a)=>{var i=(0,e.resolveFetch)(a),o=(0,e.resolveHeadersConstructor)()
return function(){var e=s(r().m(function e(a,s){var l,c,u,d,p,f
return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,n()
case 1:if(p=l=e.v,!(d=null!==p)){e.n=2
break}d=void 0!==l
case 2:if(!d){e.n=3
break}f=l,e.n=4
break
case 3:f=t
case 4:return c=f,(u=new o(null==s?void 0:s.headers)).has("apikey")||u.set("apikey",t),u.has("Authorization")||u.set("Authorization",`Bearer ${c}`),e.a(2,i(a,Object.assign(Object.assign({},s),{headers:u})))}},e)}))
return function(t,r){return e.apply(this,arguments)}}()}),mi
var e}function kt(){function e(e){return e.endsWith("/")?e:e+"/"}return di||(di=1,Object.defineProperty(gi,"__esModule",{value:!0}),gi.isBrowser=void 0,gi.uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0
return("x"==e?t:3&t|8).toString(16)})},gi.ensureTrailingSlash=e,gi.applySettingDefaults=function(e,t){var n,a,i=e.db,o=e.auth,l=e.realtime,c=e.global,u=t.db,d=t.auth,p=t.realtime,f=t.global,h={db:Object.assign(Object.assign({},u),i),auth:Object.assign(Object.assign({},d),o),realtime:Object.assign(Object.assign({},p),l),storage:{},global:Object.assign(Object.assign(Object.assign({},f),c),{headers:Object.assign(Object.assign({},null!==(n=null==f?void 0:f.headers)&&void 0!==n?n:{}),null!==(a=null==c?void 0:c.headers)&&void 0!==a?a:{})}),accessToken:function(){var e=s(r().m(function e(){return r().w(function(e){for(;;)if(0===e.n)return e.a(2,"")},e)}))
return function(){return e.apply(this,arguments)}}()}
return e.accessToken?h.accessToken=e.accessToken:delete h.accessToken,h},gi.validateSupabaseUrl=function(t){var r=null==t?void 0:t.trim()
if(!r)throw new Error("supabaseUrl is required.")
if(!r.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.")
try{return new URL(e(r))}catch(Ns){throw Error("Invalid supabaseUrl: Provided URL is malformed.")}},gi.isBrowser=()=>"undefined"!=typeof window),gi}function jt(e){return"object"==typeof e&&null!==e&&"__isAuthError"in e}function St(e){return jt(e)&&"AuthApiError"===e.name}function _t(e){return jt(e)&&"AuthSessionMissingError"===e.name}function Nt(e){return jt(e)&&"AuthImplicitGrantRedirectError"===e.name}function Et(e){return jt(e)&&"AuthRetryableFetchError"===e.name}function Tt(e,t,r){if(null!==e)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){var n=t.queue>>t.queuedBits-6&63
r(Li[n]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){var a=t.queue>>t.queuedBits-6&63
r(Li[a]),t.queuedBits-=6}}function Ct(e,t,r){var n=Ui[e]
if(!(n>-1)){if(-2===n)return
throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8}function Rt(e){for(var t=[],r=e=>{t.push(String.fromCodePoint(e))},n={utf8seq:0,codepoint:0},a={queue:0,queuedBits:0},s=e=>{!function(e,t,r){if(0===t.utf8seq){if(e<=127)return void r(e)
for(var n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n
break}if(2===t.utf8seq)t.codepoint=31&e
else if(3===t.utf8seq)t.codepoint=15&e
else{if(4!==t.utf8seq)throw new Error("Invalid UTF-8 sequence")
t.codepoint=7&e}t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence")
t.codepoint=t.codepoint<<6|63&e,t.utf8seq-=1,0===t.utf8seq&&r(t.codepoint)}}(e,n,r)},i=0;i<e.length;i+=1)Ct(e.charCodeAt(i),a,s)
return t.join("")}function Pt(e,t){if(!(e<=127)){if(e<=2047)return t(192|e>>6),void t(128|63&e)
if(e<=65535)return t(224|e>>12),t(128|e>>6&63),void t(128|63&e)
if(e<=1114111)return t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),void t(128|63&e)
throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}t(e)}function At(e){for(var t=[],r={queue:0,queuedBits:0},n=e=>{t.push(e)},a=0;a<e.length;a+=1)Ct(e.charCodeAt(a),r,n)
return new Uint8Array(t)}function Ot(e){var t=[]
return function(e,t){for(var r=0;r<e.length;r+=1){var n=e.charCodeAt(r)
if(n>55295&&n<=56319){var a=1024*(n-55296)&65535
n=65536+(e.charCodeAt(r+1)-56320&65535|a),r+=1}Pt(n,t)}}(e,e=>t.push(e)),new Uint8Array(t)}function It(e){var t=[],r={queue:0,queuedBits:0},n=e=>{t.push(e)}
return e.forEach(e=>Tt(e,r,n)),Tt(null,r,n),t.join("")}function zt(e){var t={},r=new URL(e)
if(r.hash&&"#"===r.hash[0])try{new URLSearchParams(r.hash.substring(1)).forEach((e,r)=>{t[r]=e})}catch(n){}return r.searchParams.forEach((e,r)=>{t[r]=e}),t}function Lt(e){var t=e.split(".")
if(3!==t.length)throw new zi("Invalid JWT structure")
for(var r=0;r<t.length;r++)if(!ji.test(t[r]))throw new zi("JWT not in base64url format")
return{header:JSON.parse(Rt(t[0])),payload:JSON.parse(Rt(t[1])),signature:At(t[2]),raw:{header:t[0],payload:t[1]}}}function Dt(e){return Ut.apply(this,arguments)}function Ut(){return(Ut=s(r().m(function e(t){return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,new Promise(e=>{setTimeout(()=>e(null),t)})
case 1:return e.a(2,e.v)}},e)}))).apply(this,arguments)}function $t(e,t){return new Promise((n,a)=>{s(r().m(function s(){var i,o,l
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:i=0
case 1:if(!(i<1/0)){r.n=7
break}return r.p=2,r.n=3,e(i)
case 3:if(o=r.v,t(i,null,o)){r.n=4
break}return n(o),r.a(2)
case 4:r.n=6
break
case 5:if(r.p=5,l=r.v,t(i,l)){r.n=6
break}return a(l),r.a(2)
case 6:i++,r.n=1
break
case 7:return r.a(2)}},s,null,[[2,5]])}))()})}function Ft(e){return("0"+e.toString(16)).substr(-2)}function Bt(){var e=new Uint32Array(56)
if("undefined"==typeof crypto){for(var t="",r=0;r<56;r++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~".charAt(Math.floor(66*Math.random()))
return t}return crypto.getRandomValues(e),Array.from(e,Ft).join("")}function Wt(e){return Vt.apply(this,arguments)}function Vt(){return(Vt=s(r().m(function e(t){var n,a,s,i
return r().w(function(e){for(;;)switch(e.n){case 0:return n=new TextEncoder,a=n.encode(t),e.n=1,crypto.subtle.digest("SHA-256",a)
case 1:return s=e.v,i=new Uint8Array(s),e.a(2,Array.from(i).map(e=>String.fromCharCode(e)).join(""))}},e)}))).apply(this,arguments)}function qt(e){return Mt.apply(this,arguments)}function Mt(){return(Mt=s(r().m(function e(t){var n
return r().w(function(e){for(;;)switch(e.n){case 0:if("undefined"!=typeof crypto&&void 0!==crypto.subtle&&"undefined"!=typeof TextEncoder){e.n=1
break}return e.a(2,t)
case 1:return e.n=2,Wt(t)
case 2:return n=e.v,e.a(2,btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""))}},e)}))).apply(this,arguments)}function Ht(e,t){return Kt.apply(this,arguments)}function Kt(){return(Kt=s(r().m(function e(t,n,a=!1){var s,i,o,l
return r().w(function(e){for(;;)switch(e.n){case 0:return s=Bt(),i=s,a&&(i+="/PASSWORD_RECOVERY"),e.n=1,qi(t,`${n}-code-verifier`,i)
case 1:return e.n=2,qt(s)
case 2:return o=e.v,l=s===o?"plain":"s256",e.a(2,[o,l])}},e)}))).apply(this,arguments)}function Yt(e){var t=e.headers.get(wi)
if(!t)return null
if(!t.match(Yi))return null
try{return new Date(`${t}T00:00:00.0Z`)}catch(r){return null}}function Gt(e){if(!e)throw new Error("Missing exp claim")
if(e<=Math.floor(Date.now()/1e3))throw new Error("JWT has expired")}function Jt(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}}
case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}}
default:throw new Error("Invalid alg claim")}}function Xt(e){if(!Gi.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Zt(){return new Proxy({},{get:(e,t)=>{if("__isUserNotAvailableProxy"===t)return!0
if("symbol"==typeof t){var r=t.toString()
if("Symbol(Symbol.toPrimitive)"===r||"Symbol(Symbol.toStringTag)"===r||"Symbol(util.inspect.custom)"===r)return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Qt(e,t){return new Proxy(e,{get:(e,r,n)=>{if("__isInsecureUserWarningProxy"===r)return!0
if("symbol"==typeof r){var a=r.toString()
if("Symbol(Symbol.toPrimitive)"===a||"Symbol(Symbol.toStringTag)"===a||"Symbol(util.inspect.custom)"===a||"Symbol(nodejs.util.inspect.custom)"===a)return Reflect.get(e,r,n)}return t.value||"string"!=typeof r||(t.value=!0),Reflect.get(e,r,n)}})}function er(e){return JSON.parse(JSON.stringify(e))}function tr(e){return rr.apply(this,arguments)}function rr(){return rr=s(r().m(function e(t){var n,a,s,i,o
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(Vi(t)){e.n=1
break}throw new Oi(Ji(t),0)
case 1:if(!Xi.includes(t.status)){e.n=2
break}throw new Oi(Ji(t),t.status)
case 2:return e.p=2,e.n=3,t.json()
case 3:a=e.v,e.n=5
break
case 4:throw e.p=4,o=e.v,new Ni(Ji(o),o)
case 5:if(s=void 0,(i=Yt(t))&&i.getTime()>=ki.timestamp&&"object"==typeof a&&a&&"string"==typeof a.code?s=a.code:"object"==typeof a&&a&&"string"==typeof a.error_code&&(s=a.error_code),s){e.n=7
break}if(!("object"==typeof a&&a&&"object"==typeof a.weak_password&&a.weak_password&&Array.isArray(a.weak_password.reasons)&&a.weak_password.reasons.length&&a.weak_password.reasons.reduce((e,t)=>e&&"string"==typeof t,!0))){e.n=6
break}throw new Ii(Ji(a),t.status,a.weak_password.reasons)
case 6:e.n=9
break
case 7:if("weak_password"!==s){e.n=8
break}throw new Ii(Ji(a),t.status,(null===(n=a.weak_password)||void 0===n?void 0:n.reasons)||[])
case 8:if("session_not_found"!==s){e.n=9
break}throw new Ti
case 9:throw new _i(Ji(a),t.status||500,s)
case 10:return e.a(2)}},e,null,[[2,4]])})),rr.apply(this,arguments)}function nr(e,t,r,n){return ar.apply(this,arguments)}function ar(){return ar=s(r().m(function e(t,n,a,s){var i,o,l,c,u
return r().w(function(e){for(;;)switch(e.n){case 0:return(o=Object.assign({},null==s?void 0:s.headers))[wi]||(o[wi]=ki.name),(null==s?void 0:s.jwt)&&(o.Authorization=`Bearer ${s.jwt}`),l=null!==(i=null==s?void 0:s.query)&&void 0!==i?i:{},(null==s?void 0:s.redirectTo)&&(l.redirect_to=s.redirectTo),c=Object.keys(l).length?"?"+new URLSearchParams(l).toString():"",e.n=1,sr(t,n,a+c,{headers:o,noResolveJson:null==s?void 0:s.noResolveJson},{},null==s?void 0:s.body)
case 1:return u=e.v,e.a(2,(null==s?void 0:s.xform)?null==s?void 0:s.xform(u):{data:Object.assign({},u),error:null})}},e)})),ar.apply(this,arguments)}function sr(e,t,r,n,a,s){return ir.apply(this,arguments)}function ir(){return(ir=s(r().m(function e(t,n,a,s,i,o){var l,c,u,d
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return l=Zi(n,s,i,o),e.p=1,e.n=2,t(a,Object.assign({},l))
case 2:c=e.v,e.n=4
break
case 3:throw e.p=3,u=e.v,new Oi(Ji(u),0)
case 4:if(c.ok){e.n=5
break}return e.n=5,tr(c)
case 5:if(!(null==s?void 0:s.noResolveJson)){e.n=6
break}return e.a(2,c)
case 6:return e.p=6,e.n=7,c.json()
case 7:return e.a(2,e.v)
case 8:return e.p=8,d=e.v,e.n=9,tr(d)
case 9:return e.a(2)}},e,null,[[6,8],[1,3]])}))).apply(this,arguments)}function or(e){var t,r,n=null
return function(e){return e.access_token&&e.refresh_token&&e.expires_in}(e)&&(n=Object.assign({},e),e.expires_at||(n.expires_at=(r=e.expires_in,Math.round(Date.now()/1e3)+r))),{data:{session:n,user:null!==(t=e.user)&&void 0!==t?t:e},error:null}}function lr(e){var t=or(e)
return!t.error&&e.weak_password&&"object"==typeof e.weak_password&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&"string"==typeof e.weak_password.message&&e.weak_password.reasons.reduce((e,t)=>e&&"string"==typeof t,!0)&&(t.data.weak_password=e.weak_password),t}function cr(e){var t
return{data:{user:null!==(t=e.user)&&void 0!==t?t:e},error:null}}function ur(e){return{data:e,error:null}}function dr(e){var t=e.action_link,r=e.email_otp,n=e.hashed_token,a=e.redirect_to,s=e.verification_type,i=je(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"])
return{data:{properties:{action_link:t,email_otp:r,hashed_token:n,redirect_to:a,verification_type:s},user:Object.assign({},i)},error:null}}function pr(e){return e}function fr(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}function hr(e,t,r){return mr.apply(this,arguments)}function mr(){return mr=s(r().m(function e(t,n,a){var i
return r().w(function(e){for(;;)switch(e.n){case 0:return i=new globalThis.AbortController,n>0&&setTimeout(()=>{i.abort()},n),e.n=1,Promise.resolve().then(()=>globalThis.navigator.locks.request(t,0===n?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:i.signal},function(){var e=s(r().m(function e(s){return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(!s){e.n=5
break}return e.p=1,e.n=2,a()
case 2:return e.a(2,e.v)
case 3:return e.p=3,e.f(3)
case 4:e.n=12
break
case 5:if(0!==n){e.n=6
break}throw new no(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`)
case 6:if(!to.debug){e.n=10
break}return e.p=7,e.n=8,globalThis.navigator.locks.query()
case 8:e.v,e.n=10
break
case 9:e.p=9,e.v
case 10:return e.n=11,a()
case 11:return e.a(2,e.v)
case 12:return e.a(2)}},e,null,[[7,9],[1,,3,4]])}))
return function(t){return e.apply(this,arguments)}}()))
case 1:return e.a(2,e.v)}},e)})),mr.apply(this,arguments)}function gr(){return gr=s(r().m(function e(t,n,a){var i,o,l
return r().w(function(e){for(;;)switch(e.n){case 0:return o=null!==(i=so[t])&&void 0!==i?i:Promise.resolve(),l=Promise.race([o.catch(()=>null),n>=0?new Promise((e,r)=>{setTimeout(()=>{r(new ao(`Acquring process lock with name "${t}" timed out`))},n)}):null].filter(e=>e)).catch(e=>{if(e&&e.isAcquireTimeout)throw e
return null}).then(s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,a()
case 1:return e.a(2,e.v)}},e)}))),so[t]=l.catch(function(){var e=s(r().m(function e(t){return r().w(function(e){for(;;)switch(e.n){case 0:if(!t||!t.isAcquireTimeout){e.n=2
break}return e.n=1,o
case 1:return e.a(2,null)
case 2:throw t
case 3:return e.a(2)}},e)}))
return function(t){return e.apply(this,arguments)}}()),e.n=1,l
case 1:return e.a(2,e.v)}},e)})),gr.apply(this,arguments)}function br(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`)
return e.toLowerCase()}function vr(e){return parseInt(e,16)}function yr(e){var t=(new TextEncoder).encode(e)
return"0x"+Array.from(t,e=>e.toString(16).padStart(2,"0")).join("")}function xr(e){var t,r=e.chainId,n=e.domain,a=e.expirationTime,s=e.issuedAt,i=void 0===s?new Date:s,o=e.nonce,l=e.notBefore,c=e.requestId,u=e.resources,d=e.scheme,f=e.uri,h=e.version
if(!Number.isInteger(r))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`)
if(!n)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.')
if(o&&o.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`)
if(!f)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.')
if("1"!==h)throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${h}`)
if(null===(t=e.statement)||void 0===t?void 0:t.includes("\n"))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`)
var m=`${d?`${d}://${n}`:n} wants you to sign in with your Ethereum account:\n${br(e.address)}\n\n${e.statement?`${e.statement}\n`:""}`,g=`URI: ${f}\nVersion: ${h}\nChain ID: ${r}${o?`\nNonce: ${o}`:""}\nIssued At: ${i.toISOString()}`
if(a&&(g+=`\nExpiration Time: ${a.toISOString()}`),l&&(g+=`\nNot Before: ${l.toISOString()}`),c&&(g+=`\nRequest ID: ${c}`),u){var b,v="\nResources:",y=p(u)
try{for(y.s();!(b=y.n()).done;){var x=b.value
if(!x||"string"!=typeof x)throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${x}`)
v+=`\n- ${x}`}}catch(w){y.e(w)}finally{y.f()}g+=v}return`${m}\n${g}`}function wr({error:e,options:t}){var r,n,a,s=t.publicKey
if(!s)throw Error("options was missing required publicKey property")
if("AbortError"===e.name){if(t.signal instanceof AbortSignal)return new io({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else if("ConstraintError"===e.name){if(!0===(null===(r=s.authenticatorSelection)||void 0===r?void 0:r.requireResidentKey))return new io({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:e})
if("conditional"===t.mediation&&"required"===(null===(n=s.authenticatorSelection)||void 0===n?void 0:n.userVerification))return new io({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:e})
if("required"===(null===(a=s.authenticatorSelection)||void 0===a?void 0:a.userVerification))return new io({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:e})}else{if("InvalidStateError"===e.name)return new io({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:e})
if("NotAllowedError"===e.name)return new io({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})
if("NotSupportedError"===e.name)return 0===s.pubKeyCredParams.filter(e=>"public-key"===e.type).length?new io({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:e}):new io({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:e})
if("SecurityError"===e.name){var i=window.location.hostname
if(!Er(i))return new io({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e})
if(s.rp.id!==i)return new io({message:`The RP ID "${s.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else if("TypeError"===e.name){if(s.user.id.byteLength<1||s.user.id.byteLength>64)return new io({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:e})}else if("UnknownError"===e.name)return new io({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return new io({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})}function kr({error:e,options:t}){var r=t.publicKey
if(!r)throw Error("options was missing required publicKey property")
if("AbortError"===e.name){if(t.signal instanceof AbortSignal)return new io({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else{if("NotAllowedError"===e.name)return new io({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})
if("SecurityError"===e.name){var n=window.location.hostname
if(!Er(n))return new io({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e})
if(r.rpId!==n)return new io({message:`The RP ID "${r.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else if("UnknownError"===e.name)return new io({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return new io({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})}function jr(e){if(!e)throw new Error("Credential creation options are required")
if("undefined"!=typeof PublicKeyCredential&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&"function"==typeof PublicKeyCredential.parseCreationOptionsFromJSON)return PublicKeyCredential.parseCreationOptionsFromJSON(e)
var t=e.challenge,r=e.user,n=e.excludeCredentials,a=je(e,["challenge","user","excludeCredentials"]),s=At(t).buffer,i=Object.assign(Object.assign({},r),{id:At(r.id).buffer}),o=Object.assign(Object.assign({},a),{challenge:s,user:i})
if(n&&n.length>0){o.excludeCredentials=new Array(n.length)
for(var l=0;l<n.length;l++){var c=n[l]
o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:At(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function Sr(e){if(!e)throw new Error("Credential request options are required")
if("undefined"!=typeof PublicKeyCredential&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&"function"==typeof PublicKeyCredential.parseRequestOptionsFromJSON)return PublicKeyCredential.parseRequestOptionsFromJSON(e)
var t=e.challenge,r=e.allowCredentials,n=je(e,["challenge","allowCredentials"]),a=At(t).buffer,s=Object.assign(Object.assign({},n),{challenge:a})
if(r&&r.length>0){s.allowCredentials=new Array(r.length)
for(var i=0;i<r.length;i++){var o=r[i]
s.allowCredentials[i]=Object.assign(Object.assign({},o),{id:At(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return s}function _r(e){var t
if("toJSON"in e&&"function"==typeof e.toJSON)return e.toJSON()
var r=e
return{id:e.id,rawId:e.id,response:{attestationObject:It(new Uint8Array(e.response.attestationObject)),clientDataJSON:It(new Uint8Array(e.response.clientDataJSON))},type:"public-key",clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:null!==(t=r.authenticatorAttachment)&&void 0!==t?t:void 0}}function Nr(e){var t
if("toJSON"in e&&"function"==typeof e.toJSON)return e.toJSON()
var r=e,n=e.getClientExtensionResults(),a=e.response
return{id:e.id,rawId:e.id,response:{authenticatorData:It(new Uint8Array(a.authenticatorData)),clientDataJSON:It(new Uint8Array(a.clientDataJSON)),signature:It(new Uint8Array(a.signature)),userHandle:a.userHandle?It(new Uint8Array(a.userHandle)):void 0},type:"public-key",clientExtensionResults:n,authenticatorAttachment:null!==(t=r.authenticatorAttachment)&&void 0!==t?t:void 0}}function Er(e){return"localhost"===e||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function Tr(){var e,t
return!!($i()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&"function"==typeof(null===(e=null===navigator||void 0===navigator?void 0:navigator.credentials)||void 0===e?void 0:e.create)&&"function"==typeof(null===(t=null===navigator||void 0===navigator?void 0:navigator.credentials)||void 0===t?void 0:t.get))}function Cr(e){return Rr.apply(this,arguments)}function Rr(){return(Rr=s(r().m(function e(t){var n,a
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,navigator.credentials.create(t)
case 1:if(n=e.v){e.n=2
break}return e.a(2,{data:null,error:new oo("Empty credential response",n)})
case 2:if(n instanceof PublicKeyCredential){e.n=3
break}return e.a(2,{data:null,error:new oo("Browser returned unexpected credential type",n)})
case 3:return e.a(2,{data:n,error:null})
case 4:return e.p=4,a=e.v,e.a(2,{data:null,error:wr({error:a,options:t})})}},e,null,[[0,4]])}))).apply(this,arguments)}function Pr(e){return Ar.apply(this,arguments)}function Ar(){return(Ar=s(r().m(function e(t){var n,a
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,navigator.credentials.get(t)
case 1:if(n=e.v){e.n=2
break}return e.a(2,{data:null,error:new oo("Empty credential response",n)})
case 2:if(n instanceof PublicKeyCredential){e.n=3
break}return e.a(2,{data:null,error:new oo("Browser returned unexpected credential type",n)})
case 3:return e.a(2,{data:n,error:null})
case 4:return e.p=4,a=e.v,e.a(2,{data:null,error:kr({error:a,options:t})})}},e,null,[[0,4]])}))).apply(this,arguments)}function Or(...e){for(var t=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),r=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),n={},a=0,s=e;a<s.length;a++){var i=s[a]
if(i)for(var o in i){var l=i[o]
if(void 0!==l)if(Array.isArray(l))n[o]=l
else if(r(l))n[o]=l
else if(t(l)){var c=n[o]
t(c)?n[o]=Or(c,l):n[o]=Or(l)}else n[o]=l}}return n}function Ir(e,t){return Or(co,e,t||{})}function zr(e,t){return Or(uo,e,t||{})}function Lr(e,t,r){return Dr.apply(this,arguments)}function Dr(){return(Dr=s(r().m(function e(t,n,a){return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,a()
case 1:return e.a(2,e.v)}},e)}))).apply(this,arguments)}function Ur(){if(go)return bi
go=1,Object.defineProperty(bi,"__esModule",{value:!0}),bi.SupabaseAuthClient=void 0
var e=ko,t=class extends e.AuthClient{constructor(e){super(e)}}
return bi.SupabaseAuthClient=t,bi}function $r(){if(bo)return ua
bo=1,Object.defineProperty(ua,"__esModule",{value:!0})
var e=Pa,t=nt(),n=ks,a=pi,i=xt(),o=wt(),l=kt(),c=Ur()
return ua.default=class{constructor(e,r,n){var s,c,u
this.supabaseUrl=e,this.supabaseKey=r
var d=(0,l.validateSupabaseUrl)(e)
if(!r)throw new Error("supabaseKey is required.")
this.realtimeUrl=new URL("realtime/v1",d),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",d),this.storageUrl=new URL("storage/v1",d),this.functionsUrl=new URL("functions/v1",d)
var p=`sb-${d.hostname.split(".")[0]}-auth-token`,f={db:i.DEFAULT_DB_OPTIONS,realtime:i.DEFAULT_REALTIME_OPTIONS,auth:Object.assign(Object.assign({},i.DEFAULT_AUTH_OPTIONS),{storageKey:p}),global:i.DEFAULT_GLOBAL_OPTIONS},h=(0,l.applySettingDefaults)(null!=n?n:{},f)
this.storageKey=null!==(s=h.auth.storageKey)&&void 0!==s?s:"",this.headers=null!==(c=h.global.headers)&&void 0!==c?c:{},h.accessToken?(this.accessToken=h.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(null!==(u=h.auth)&&void 0!==u?u:{},this.headers,h.global.fetch),this.fetch=(0,o.fetchWithAuth)(r,this._getAccessToken.bind(this),h.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},h.realtime)),this.accessToken&&this.accessToken().then(e=>this.realtime.setAuth(e)).catch(()=>{}),this.rest=new t.PostgrestClient(new URL("rest/v1",d).href,{headers:this.headers,schema:h.db.schema,fetch:this.fetch}),this.storage=new a.StorageClient(this.storageUrl.href,this.headers,this.fetch,null==n?void 0:n.storage),h.accessToken||this._listenForAuthEvents()}get functions(){return new e.FunctionsClient(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},r={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,r)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var e=this
return s(r().m(function t(){var n,a,s,i
return r().w(function(t){for(;;)switch(t.n){case 0:if(!e.accessToken){t.n=2
break}return t.n=1,e.accessToken()
case 1:return t.a(2,t.v)
case 2:return t.n=3,e.auth.getSession()
case 3:return s=t.v,i=s.data,t.a(2,null!==(a=null===(n=i.session)||void 0===n?void 0:n.access_token)&&void 0!==a?a:e.supabaseKey)}},t)}))()}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:r,storage:n,userStorage:a,storageKey:s,flowType:i,lock:o,debug:l,throwOnError:u},d,p){var f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`}
return new c.SupabaseAuthClient({url:this.authUrl.href,headers:Object.assign(Object.assign({},f),d),storageKey:s,autoRefreshToken:e,persistSession:t,detectSessionInUrl:r,storage:n,userStorage:a,flowType:i,lock:o,debug:l,throwOnError:u,fetch:p,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>"authorization"===e.toLowerCase())})}_initRealtimeClient(e){return new n.RealtimeClient(this.realtimeUrl.href,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},null==e?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,"CLIENT",null==t?void 0:t.access_token)})}_handleTokenChanged(e,t,r){"TOKEN_REFRESHED"!==e&&"SIGNED_IN"!==e||this.changedAccessToken===r?"SIGNED_OUT"===e&&(this.realtime.setAuth(),"STORAGE"==t&&this.auth.signOut(),this.changedAccessToken=void 0):(this.changedAccessToken=r,this.realtime.setAuth(r))}},ua}function Fr(){return vo||(vo=1,function(e){var t=ca&&ca.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var a=Object.getOwnPropertyDescriptor(t,r)
a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),r=ca&&ca.__exportStar||function(e,r){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(r,n)||t(r,e,n)},n=ca&&ca.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(e,"__esModule",{value:!0}),e.createClient=e.SupabaseClient=e.FunctionRegion=e.FunctionsError=e.FunctionsRelayError=e.FunctionsFetchError=e.FunctionsHttpError=e.PostgrestError=void 0
var a=n($r())
r(ko,e)
var s=nt()
Object.defineProperty(e,"PostgrestError",{enumerable:!0,get:function(){return s.PostgrestError}})
var i=Pa
Object.defineProperty(e,"FunctionsHttpError",{enumerable:!0,get:function(){return i.FunctionsHttpError}}),Object.defineProperty(e,"FunctionsFetchError",{enumerable:!0,get:function(){return i.FunctionsFetchError}}),Object.defineProperty(e,"FunctionsRelayError",{enumerable:!0,get:function(){return i.FunctionsRelayError}}),Object.defineProperty(e,"FunctionsError",{enumerable:!0,get:function(){return i.FunctionsError}}),Object.defineProperty(e,"FunctionRegion",{enumerable:!0,get:function(){return i.FunctionRegion}}),r(ks,e)
var o=$r()
Object.defineProperty(e,"SupabaseClient",{enumerable:!0,get:function(){return n(o).default}}),e.createClient=(e,t,r)=>new a.default(e,t,r),function(){if("undefined"!=typeof window)return!1
if("undefined"==typeof process)return!1
var e=process.version
if(null==e)return!1
var t=e.match(/^v(\d+)\./)
t&&parseInt(t[1],10)}()}(ca)),ca}function Br(e,t){return Wr.apply(this,arguments)}function Wr(){return(Wr=s(r().m(function e(t,n){var a,s,i
return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,No.auth.signInWithPassword({email:t,password:n})
case 1:if(a=e.v,s=a.data,!(i=a.error)){e.n=2
break}throw i
case 2:return e.a(2,{user:s.user,session:s.session})}},e)}))).apply(this,arguments)}function Vr(e,t,r){return qr.apply(this,arguments)}function qr(){return(qr=s(r().m(function e(t,n,a){var s,i,o
return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,No.auth.signUp({email:t,password:n,options:{data:{username:a||t.split("@")[0]}}})
case 1:if(s=e.v,i=s.data,!(o=s.error)){e.n=2
break}throw o
case 2:return e.a(2,{user:i.user,session:i.session})}},e)}))).apply(this,arguments)}function Mr(e){return Hr.apply(this,arguments)}function Hr(){return(Hr=s(r().m(function e(t){var n,a
return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,No.auth.resetPasswordForEmail(t,{redirectTo:`${window.location.origin}/reset-password`})
case 1:if(n=e.v,!(a=n.error)){e.n=2
break}throw a
case 2:return e.a(2)}},e)}))).apply(this,arguments)}function Kr(e,t,r){return Yr.apply(this,arguments)}function Yr(){return(Yr=s(r().m(function e(t,n,a){var s,i,o,l
return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,No.auth.verifyOtp({email:t,token:n,type:"recovery"})
case 1:if(s=e.v,!(i=s.error)){e.n=2
break}throw i
case 2:return e.n=3,No.auth.updateUser({password:a})
case 3:if(o=e.v,!(l=o.error)){e.n=4
break}throw l
case 4:return e.a(2)}},e)}))).apply(this,arguments)}function Gr(e){return Jr.apply(this,arguments)}function Jr(){return(Jr=s(r().m(function e(t){var n,a
return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,No.from("profiles").select("*").eq("id",t.id).maybeSingle()
case 1:if(n=e.v,a=n.data,!n.error){e.n=2
break}return e.a(2,null)
case 2:return e.a(2,null!=a?a:null)}},e)}))).apply(this,arguments)}function Xr(){return hn.jsx(xe,{children:hn.jsx(Fo,{children:hn.jsx(Io,{children:hn.jsx(Uo,{children:hn.jsx(uc,{})})})})})}function Zr(e){return dc.some(t=>e.toLowerCase().includes(t.toLowerCase()))}function Qr(){if("undefined"!=typeof window&&void 0!==window.localStorage)try{for(var e=[],t=0;t<window.localStorage.length;t++){var r=window.localStorage.key(t)
r&&Zr(r)&&e.push(r)}e.forEach(e=>{window.localStorage.removeItem(e)})}catch(n){}}var en=document.createElement("style")
en.textContent=':root{--bg-primary: #000000;--bg-secondary: #0a0a0a;--bg-tertiary: #111111;--bg-card: #0d0d0d;--bg-card-hover: #151515;--text-primary: #ffffff;--text-secondary: #a0a0a0;--text-muted: #666666;--accent-primary: #ffffff;--accent-secondary: #cccccc;--accent-gradient: linear-gradient(135deg, #ffffff 0%, #888888 100%);--border-color: #222222;--border-light: #333333;--shadow-sm: 0 2px 8px rgba(0, 0, 0, .3);--shadow-md: 0 4px 20px rgba(0, 0, 0, .4);--shadow-lg: 0 8px 40px rgba(0, 0, 0, .5);--shadow-glow: 0 0 30px rgba(255, 255, 255, .1);--radius-sm: 6px;--radius-md: 12px;--radius-lg: 20px;--radius-full: 9999px;--transition-fast: .15s ease;--transition-normal: .3s ease;--transition-slow: .5s ease;--font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:var(--font-family);background-color:var(--bg-primary);color:var(--text-primary);line-height:1.6;overflow-x:hidden;position:relative}::-webkit-scrollbar{width:10px;background:transparent!important}::-webkit-scrollbar-track{background:transparent!important;background-color:transparent!important;border-radius:999px;box-shadow:none!important;border:none!important;outline:none!important}::-webkit-scrollbar-track-piece{background:transparent!important;background-color:transparent!important;box-shadow:none!important;border:none!important}::-webkit-scrollbar-thumb{border-radius:10px;background:linear-gradient(180deg,rgba(255,255,255,.18),rgba(255,255,255,.1));border:1px solid rgba(255,255,255,.12);box-shadow:inset 0 0 0 1px rgba(255,255,255,.06),0 8px 22px rgba(0,0,0,.55),0 3px 10px rgba(0,0,0,.5)}::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,rgba(255,255,255,.24),rgba(255,255,255,.14));border-color:rgba(255,255,255,.16);box-shadow:inset 0 0 0 1px rgba(255,255,255,.1),0 10px 26px rgba(0,0,0,.6),0 5px 16px rgba(0,0,0,.55)}::-webkit-scrollbar-corner{background:transparent}html{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.25) transparent}body:before{content:"";position:fixed;top:0;left:0;right:0;bottom:0;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:50px 50px;pointer-events:none;z-index:0}#mouse-glow{position:fixed;width:440px;height:440px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.08) 0%,rgba(255,255,255,.04) 30%,rgba(255,255,255,.02) 50%,transparent 70%);pointer-events:none;z-index:-9999;transform:translate(-50%,-50%);transition:opacity .15s ease;opacity:0;mix-blend-mode:screen;filter:blur(20px)}body:after{content:"";position:fixed;top:-200px;right:-200px;width:600px;height:600px;background:var(--text-primary);border-radius:50%;filter:blur(100px);opacity:.15;pointer-events:none;z-index:0}body>#root:before{content:"";position:fixed;bottom:-100px;left:-100px;width:400px;height:400px;background:var(--text-secondary);border-radius:50%;filter:blur(100px);opacity:.15;pointer-events:none;z-index:-1}#root{position:relative;z-index:1}a{text-decoration:none;color:inherit;transition:var(--transition-fast)}ul{list-style:none}img{max-width:100%;height:auto}.container{max-width:1200px;margin:0 auto;padding:0 24px}.navbar{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(0,0,0,.8);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border-bottom:1px solid var(--border-color);padding:16px 0}.nav-container{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between}.logo{display:flex;align-items:center;gap:10px;font-size:1.5rem;font-weight:800;color:var(--text-primary)}.logo-text{letter-spacing:-.5px}.nav-links{display:flex;gap:32px}.nav-links a{color:var(--text-secondary);font-weight:500;font-size:.95rem;position:relative;padding:8px 0}.nav-links a:after{content:"";position:absolute;bottom:0;left:0;width:0;height:2px;background:var(--accent-primary);transition:var(--transition-normal)}.nav-links a:hover,.nav-links a.active{color:var(--text-primary)}.nav-links a:hover:after,.nav-links a.active:after{width:100%}.nav-buttons{display:flex;gap:12px}.mobile-menu-btn{display:none;background:none;border:none;color:var(--text-primary);font-size:1.5rem;cursor:pointer}.mobile-menu{display:none;position:fixed;top:70px;left:0;right:0;background:var(--bg-secondary);border-bottom:1px solid var(--border-color);padding:20px;z-index:999}.mobile-menu.active{display:block}.mobile-nav-links{display:flex;flex-direction:column;gap:16px}.mobile-nav-links a{color:var(--text-secondary);font-weight:500;padding:12px 0;border-bottom:1px solid var(--border-color)}.mobile-nav-links a:hover{color:var(--text-primary)}.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 24px;font-size:.95rem;font-weight:600;border-radius:var(--radius-md);cursor:pointer;transition:var(--transition-normal);border:none;outline:none}.btn-primary{background:var(--text-primary);color:var(--bg-primary)}.btn-primary:hover{background:var(--text-secondary);transform:translateY(-2px);box-shadow:var(--shadow-glow)}.btn-outline{background:transparent;color:var(--text-primary);border:1px solid var(--border-light)}.btn-outline:hover{background:var(--text-primary);color:var(--bg-primary);border-color:var(--text-primary)}.btn-search{background:var(--text-primary);color:var(--bg-primary);padding:16px 32px;font-size:1rem}.btn-search:hover{background:var(--text-secondary);transform:translateY(-2px)}.btn-lg{padding:16px 32px;font-size:1rem}.btn-block{width:100%}.hero{position:relative;min-height:100vh;display:flex;align-items:center;padding-top:100px;overflow:hidden}.hero-bg-effects,.grid-overlay,.glow-effect,.glow-1,.glow-2{display:none}.hero-content{position:relative;z-index:1;text-align:center;max-width:900px;margin:0 auto}.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--bg-tertiary);border:1px solid var(--border-color);padding:8px 20px;border-radius:var(--radius-full);font-size:.875rem;color:var(--text-secondary);margin-bottom:32px}.hero-title{font-size:clamp(2.5rem,6vw,4rem);font-weight:800;line-height:1.1;margin-bottom:24px;letter-spacing:-1px}.gradient-text{background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.hero-description{font-size:1.25rem;color:var(--text-secondary);max-width:700px;margin:0 auto 40px;line-height:1.7}.horus-eye-container{display:flex;justify-content:center;align-items:center;margin:50px auto}.horus-eye{width:280px;height:170px;filter:drop-shadow(0 0 20px rgba(255,255,255,.4));animation:horusGlow 3s ease-in-out infinite alternate}@keyframes horusGlow{0%{filter:drop-shadow(0 0 15px rgba(255,255,255,.3))}to{filter:drop-shadow(0 0 30px rgba(255,255,255,.6))}}.horus-outline,.horus-brow,.horus-marking,.horus-spiral,.horus-tear,.horus-extension{stroke:#fff;transition:all .3s ease}.horus-pupil{fill:#fff;transition:cx .1s ease-out,cy .1s ease-out}@media(max-width:768px){.horus-eye{width:200px;height:120px}}.search-box{display:flex;gap:12px;background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:8px;max-width:700px;margin:0 auto 24px}.search-input-wrapper{flex:1;display:flex;align-items:center;gap:12px;padding:0 16px}.search-input-wrapper i{color:var(--text-muted);font-size:1.1rem}.search-input{flex:1;background:none;border:none;outline:none;color:var(--text-primary);font-size:1rem;font-family:inherit}.search-input::placeholder{color:var(--text-muted)}.search-tags{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-bottom:60px}.search-tags>span{color:var(--text-muted);font-size:.875rem}.search-tags a,.search-tag{color:var(--text-secondary);font-size:.875rem;padding:6px 14px;background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:var(--radius-full);transition:var(--transition-fast)}.search-tags a:hover,.search-tag:hover{background:var(--text-primary);color:var(--bg-primary);border-color:var(--text-primary)}.hero-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;padding-top:40px;border-top:1px solid var(--border-color)}.stat-item{text-align:center}.stat-number{font-size:2.5rem;font-weight:800;color:var(--text-primary);line-height:1;margin-bottom:8px}.stat-label{font-size:.875rem;color:var(--text-muted)}section{padding:100px 0}.section-header{text-align:center;max-width:700px;margin:0 auto 60px}.section-badge{display:inline-block;background:var(--bg-tertiary);border:1px solid var(--border-color);padding:6px 16px;border-radius:var(--radius-full);font-size:.875rem;color:var(--text-secondary);margin-bottom:20px}.section-title{font-size:clamp(2rem,4vw,2.75rem);font-weight:800;margin-bottom:16px;letter-spacing:-.5px}.section-description{font-size:1.125rem;color:var(--text-secondary);line-height:1.7}.features{background:transparent}.features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.feature-card{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:32px;transition:var(--transition-normal)}.feature-card:hover{background:var(--bg-card-hover);border-color:var(--border-light);transform:translateY(-4px)}.feature-icon{width:56px;height:56px;display:flex;align-items:center;justify-content:center;background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:var(--radius-md);margin-bottom:20px;font-size:1.5rem;color:var(--text-primary)}.feature-card h3{font-size:1.25rem;font-weight:700;margin-bottom:12px}.feature-card p{color:var(--text-secondary);font-size:.95rem;line-height:1.6}.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.step-card{position:relative;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:40px 32px;transition:var(--transition-normal)}.step-card:hover{border-color:var(--border-light);transform:translateY(-4px)}.step-number{font-size:4rem;font-weight:800;color:var(--bg-tertiary);line-height:1;margin-bottom:20px}.step-content h3{font-size:1.25rem;font-weight:700;margin-bottom:12px}.step-content p{color:var(--text-secondary);font-size:.95rem;line-height:1.6}.step-icon{position:absolute;top:32px;right:32px;width:48px;height:48px;display:flex;align-items:center;justify-content:center;background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:var(--radius-md);font-size:1.25rem;color:var(--text-secondary)}.trust-section{background:transparent}.trust-content{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}.trust-text h2{font-size:2.25rem;font-weight:800;margin-bottom:20px;margin-top:16px}.trust-text>p{color:var(--text-secondary);font-size:1.1rem;line-height:1.7;margin-bottom:32px}.trust-features{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:32px}.trust-feature{display:flex;align-items:center;gap:10px;color:var(--text-secondary)}.trust-feature i{color:var(--text-primary)}.trust-stats{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}.trust-stat-card{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:28px;text-align:center;transition:var(--transition-normal)}.trust-stat-card:hover{border-color:var(--border-light);transform:translateY(-4px)}.trust-stat-icon{width:48px;height:48px;display:flex;align-items:center;justify-content:center;background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:var(--radius-md);margin:0 auto 16px;font-size:1.25rem;color:var(--text-primary)}.trust-stat-number{font-size:2rem;font-weight:800;color:var(--text-primary);margin-bottom:4px}.trust-stat-label{font-size:.875rem;color:var(--text-muted)}.pricing-preview{background:transparent}.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.pricing-card{position:relative;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:40px 32px;transition:var(--transition-normal)}.pricing-card:hover{border-color:var(--border-light);transform:translateY(-4px)}.pricing-card.featured{border-color:var(--text-primary);background:var(--bg-tertiary)}.pricing-badge{position:absolute;top:-12px;left:50%;transform:translate(-50%);background:var(--text-primary);color:var(--bg-primary);padding:6px 20px;border-radius:var(--radius-full);font-size:.875rem;font-weight:600}.pricing-header{text-align:center;padding-bottom:24px;border-bottom:1px solid var(--border-color);margin-bottom:24px}.pricing-header h3{font-size:1.5rem;font-weight:700;margin-bottom:16px}.pricing-price{display:flex;align-items:baseline;justify-content:center;gap:4px}.pricing-price .currency{font-size:1.5rem;font-weight:600;color:var(--text-secondary)}.pricing-price .amount{font-size:3rem;font-weight:800;line-height:1}.pricing-price .period{font-size:1rem;color:var(--text-muted)}.pricing-features{margin-bottom:32px}.pricing-features li{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--border-color);font-size:.95rem}.pricing-features li:last-child{border-bottom:none}.pricing-features li i{color:var(--text-primary);width:20px}.pricing-features li.disabled,.pricing-features li.disabled i{color:var(--text-muted)}.cta-section{background:transparent;text-align:center}.cta-content{max-width:700px;margin:0 auto}.cta-content h2{font-size:2.5rem;font-weight:800;margin-bottom:16px}.cta-content>p{color:var(--text-secondary);font-size:1.125rem;margin-bottom:32px}.cta-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}.footer{background:var(--bg-primary);border-top:1px solid var(--border-color);padding:80px 0 40px}.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:60px;margin-bottom:60px}.footer-brand .logo{margin-bottom:20px}.footer-brand>p{color:var(--text-secondary);font-size:.95rem;line-height:1.7;margin-bottom:24px}.footer-social{display:flex;gap:12px}.footer-social a{width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:var(--radius-md);color:var(--text-secondary);font-size:1.1rem;transition:var(--transition-fast)}.footer-social a:hover{background:var(--text-primary);color:var(--bg-primary);border-color:var(--text-primary)}.footer-links h4{font-size:1rem;font-weight:700;margin-bottom:20px}.footer-links ul{display:flex;flex-direction:column;gap:12px}.footer-links a{color:var(--text-secondary);font-size:.95rem}.footer-links a:hover{color:var(--text-primary)}.footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:40px;border-top:1px solid var(--border-color)}.footer-bottom p{color:var(--text-muted);font-size:.875rem}.footer-badges{display:flex;gap:20px}.footer-badges span{display:flex;align-items:center;gap:8px;color:var(--text-muted);font-size:.875rem}@media(max-width:1024px){.features-grid,.steps-grid,.pricing-grid{grid-template-columns:repeat(2,1fr)}.trust-content{grid-template-columns:1fr;gap:40px}.footer-grid{grid-template-columns:repeat(2,1fr);gap:40px}}@media(max-width:768px){.nav-links,.nav-buttons{display:none}.mobile-menu-btn{display:block}.hero-stats{grid-template-columns:repeat(2,1fr)}.features-grid,.steps-grid,.pricing-grid{grid-template-columns:1fr}.search-box{flex-direction:column}.footer-grid{grid-template-columns:1fr;gap:40px}.footer-bottom{flex-direction:column;gap:20px;text-align:center}.cta-content h2{font-size:2rem}}@media(max-width:480px){.hero-title{font-size:2rem}.hero-description{font-size:1rem}.stat-number{font-size:2rem}.section-title{font-size:1.75rem}.pricing-price .amount{font-size:2.5rem}}.page-header{padding-top:140px;padding-bottom:60px;text-align:center;background:transparent}.page-header h1{font-size:2.5rem;font-weight:800;margin-bottom:16px}.page-header p{color:var(--text-secondary);font-size:1.125rem;max-width:600px;margin:0 auto}.form-group{margin-bottom:24px}.form-label{display:block;font-size:.95rem;font-weight:500;margin-bottom:8px;color:var(--text-primary)}.form-input{width:100%;padding:14px 18px;font-size:1rem;font-family:inherit;background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:var(--radius-md);color:var(--text-primary);transition:var(--transition-fast)}.form-input:focus{outline:none;border-color:var(--text-primary)}.form-input::placeholder{color:var(--text-muted)}textarea.form-input{min-height:150px;resize:vertical}.auth-container{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:40px 20px}.auth-card{width:100%;max-width:440px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:48px 40px}.auth-header{text-align:center;margin-bottom:40px}.auth-header .logo{justify-content:center;margin-bottom:24px}.auth-header h1{font-size:1.75rem;font-weight:700;margin-bottom:8px}.auth-header p{color:var(--text-secondary)}.auth-divider{display:flex;align-items:center;gap:16px;margin:24px 0;color:var(--text-muted);font-size:.875rem}.auth-divider:before,.auth-divider:after{content:"";flex:1;height:1px;background:var(--border-color)}.auth-footer{text-align:center;margin-top:24px;color:var(--text-secondary)}.auth-footer a{color:var(--text-primary);font-weight:500}.auth-footer a:hover{text-decoration:underline}.about-mission-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center}.about-mission-copy h2{font-size:2rem;margin-bottom:18px}.about-mission-copy p{color:var(--text-secondary);line-height:1.8;margin-bottom:14px}.about-mission-stats{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:32px}.about-stats-grid{display:grid;grid-template-columns:repeat(2,minmax(140px,1fr));gap:24px}.about-stat{text-align:center}.about-stat-number{font-size:2.5rem;font-weight:800;color:var(--text-primary);line-height:1.1}.about-stat-label{color:var(--text-muted);margin-top:6px}.about-team-grid{grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:28px;justify-items:center;max-width:900px;margin:0 auto}.about-team-card{width:100%;max-width:240px;text-align:center}.about-role-chip{display:inline-block;background:linear-gradient(135deg,#fff,#e0e0e0);color:#1a1a2e;padding:4px 12px;border-radius:20px;font-size:.75rem;font-weight:600;box-shadow:0 0 15px rgba(255,255,255,.4),0 0 24px rgba(255,255,255,.2)}@media(max-width:900px){.about-mission-grid{grid-template-columns:1fr;gap:28px}.about-stats-grid{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}}@media(max-width:600px){.about-mission-stats{padding:24px}.about-mission-copy h2{font-size:1.6rem}.about-stat-number{font-size:2rem}.about-team-grid{gap:20px}}.checkbox-group{display:flex;align-items:center;gap:12px}.checkbox-group input[type=checkbox]{width:18px;height:18px;appearance:none;-webkit-appearance:none;background:var(--bg-tertiary);border:1px solid var(--border-light);border-radius:4px;position:relative;cursor:pointer;outline:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.05);transition:var(--transition-fast)}.checkbox-group input[type=checkbox]:after{content:"";position:absolute;top:3px;right:3px;bottom:3px;left:3px;border-radius:2px;background:var(--text-primary);opacity:0;transform:scale(.8);transition:var(--transition-fast)}.checkbox-group input[type=checkbox]:checked{border-color:var(--text-primary);box-shadow:0 0 0 1px rgba(255,255,255,.1)}.checkbox-group input[type=checkbox]:checked:after{opacity:1;transform:scale(1)}.checkbox-group label{font-size:.95rem;color:var(--text-secondary)}.content-section{padding:80px 0}.content-section h2{font-size:1.75rem;font-weight:700;margin-bottom:24px}.content-section p{color:var(--text-secondary);line-height:1.8;margin-bottom:16px}.content-section ul{margin:16px 0;padding-left:24px}.content-section li{color:var(--text-secondary);margin-bottom:8px;list-style:disc}.team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}.team-card{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:32px;text-align:center;transition:var(--transition-normal)}.team-card:hover{border-color:var(--border-light);transform:translateY(-4px)}.team-avatar{width:100px;height:100px;background:var(--bg-tertiary);border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;font-size:2.5rem;color:var(--text-secondary)}.team-card h3{font-size:1.25rem;font-weight:700;margin-bottom:4px}.team-card .role{color:var(--text-muted);font-size:.95rem;margin-bottom:16px}.team-card .social-links{display:flex;gap:12px;justify-content:center}.team-card .social-links a{color:var(--text-secondary);font-size:1.1rem;transition:var(--transition-fast)}.team-card .social-links a:hover{color:var(--text-primary)}@media(max-width:768px){.team-grid{grid-template-columns:1fr}.auth-card{padding:32px 24px}}@property --angle{syntax: "<angle>"; initial-value: 0deg; inherits: false;}@keyframes rotate-border{0%{--angle: 0deg}to{--angle: 360deg}}@keyframes glow-pulse{0%,to{opacity:.3;box-shadow:0 0 10px rgba(255,255,255,.3)}50%{opacity:.6;box-shadow:0 0 20px rgba(255,255,255,.5)}}.no-conic-gradient .glow-card:before,.no-conic-gradient .feature-card:before,.no-conic-gradient .pricing-card:before,.no-conic-gradient .step-card:before,.no-conic-gradient .trust-stat-card:before,.no-conic-gradient .team-card:before,.no-conic-gradient .search-box:before,.no-conic-gradient .credits-display:before,.no-conic-gradient .btn-download:before,.no-conic-gradient .result-card:before{display:none!important}.no-conic-gradient .glow-card:hover,.no-conic-gradient .feature-card:hover,.no-conic-gradient .pricing-card:hover,.no-conic-gradient .step-card:hover,.no-conic-gradient .trust-stat-card:hover,.no-conic-gradient .team-card:hover,.no-conic-gradient .search-box:hover,.no-conic-gradient .search-box:focus-within{border-color:rgba(255,255,255,.4);box-shadow:0 0 20px rgba(255,255,255,.15)}.glow-card,.feature-card,.pricing-card,.step-card,.trust-stat-card,.team-card,.search-box{position:relative;background:var(--bg-card);border:1px solid var(--border-color);transition:all .3s ease}.glow-card:before,.feature-card:before,.pricing-card:before,.step-card:before,.trust-stat-card:before,.team-card:before,.search-box:before{content:"";position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:inherit;padding:2px;background:conic-gradient(from var(--angle),transparent 0%,transparent 30%,rgba(255,255,255,.8) 50%,transparent 70%,transparent 100%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .3s ease;pointer-events:none;z-index:1}.glow-card:hover:before,.feature-card:hover:before,.pricing-card:hover:before,.step-card:hover:before,.trust-stat-card:hover:before,.team-card:hover:before,.search-box:hover:before,.search-box:focus-within:before{opacity:1;animation:rotate-border 3s linear infinite}.glow-card:hover,.feature-card:hover,.pricing-card:hover,.step-card:hover,.trust-stat-card:hover,.team-card:hover,.search-box:hover,.search-box:focus-within{border-color:rgba(255,255,255,.2);box-shadow:0 0 20px rgba(255,255,255,.1)}.pricing-card.featured:before{opacity:.5;animation:rotate-border 4s linear infinite}.pricing-card.featured:hover:before{opacity:1}.auth-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;overflow:hidden}.auth-bg-gradient{position:absolute;top:0;left:0;width:100%;height:100%;background:radial-gradient(ellipse at 50% 0%,rgba(50,50,70,.4) 0%,transparent 60%),radial-gradient(ellipse at 0% 100%,rgba(30,30,50,.3) 0%,transparent 50%),radial-gradient(ellipse at 100% 100%,rgba(40,40,60,.3) 0%,transparent 50%)}.auth-bg-grid{position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:50px 50px}.floating-orb{position:absolute;border-radius:50%;filter:blur(80px);opacity:.5;animation:float-orb 20s ease-in-out infinite}.orb-1{width:400px;height:400px;background:rgba(100,100,150,.3);top:-100px;left:-100px;animation-delay:0s}.orb-2{width:300px;height:300px;background:rgba(80,80,120,.3);bottom:-50px;right:-50px;animation-delay:-7s}.orb-3{width:250px;height:250px;background:rgba(90,90,130,.3);top:50%;left:50%;transform:translate(-50%,-50%);animation-delay:-14s}@keyframes float-orb{0%,to{transform:translate(0) scale(1)}25%{transform:translate(30px,-30px) scale(1.1)}50%{transform:translate(-20px,20px) scale(.95)}75%{transform:translate(20px,10px) scale(1.05)}}.animate-fade-in{animation:fadeIn .6s ease-out forwards}@keyframes fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-shake{animation:shake .5s ease-in-out}@keyframes shake{0%,to{transform:translate(0)}10%,30%,50%,70%,90%{transform:translate(-5px)}20%,40%,60%,80%{transform:translate(5px)}}.auth-error{background:rgba(220,53,69,.1);border:1px solid rgba(220,53,69,.3);color:#ff6b6b;padding:12px 16px;border-radius:var(--radius-md);margin-bottom:24px;display:flex;align-items:center;gap:10px;font-size:.9rem}.auth-error i{font-size:1.1rem}.auth-success{background:rgba(40,167,69,.1);border:1px solid rgba(40,167,69,.3);color:#51cf66;padding:24px;border-radius:var(--radius-md);text-align:center}.success-icon{font-size:3rem;margin-bottom:16px;display:block}.auth-success h3{margin-bottom:8px;color:#51cf66}.auth-success p{color:var(--text-secondary);font-size:.95rem}.input-wrapper{position:relative}.input-icon{position:absolute;left:16px;top:50%;transform:translateY(-50%);color:var(--text-muted);font-size:1rem;transition:color .3s ease;pointer-events:none}.form-input-icon{padding-left:48px!important}.input-wrapper:focus-within .input-icon{color:var(--text-primary)}.btn-glow{position:relative;overflow:hidden}.btn-glow:before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);transition:left .5s ease}.btn-glow:hover:before{left:100%}.spinner{display:inline-block;width:18px;height:18px;border:2px solid rgba(0,0,0,.3);border-top-color:#000;border-radius:50%;animation:spin .8s linear infinite;margin-right:8px}@keyframes spin{to{transform:rotate(360deg)}}.auth-card{position:relative;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 25px 50px -12px rgba(0,0,0,.5)}.auth-card .form-input{width:100%;padding:14px 16px;font-size:1rem}.auth-card .form-input-icon{padding-left:48px!important}.login-popup{position:fixed;top:100px;left:50%;transform:translate(-50%);z-index:10000;animation:slideDown .4s ease-out forwards}.login-popup-content{background:#fff;color:#1a1a2e;padding:16px 32px;border-radius:var(--radius-md);display:flex;align-items:center;gap:12px;font-weight:600;font-size:1rem;box-shadow:0 10px 40px rgba(0,0,0,.3)}.login-popup-content i{color:#28a745;font-size:1.3rem}@keyframes slideDown{0%{opacity:0;transform:translate(-50%) translateY(-20px)}to{opacity:1;transform:translate(-50%) translateY(0)}}.settings-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);z-index:9999;display:flex;align-items:center;justify-content:center;animation:fadeIn .3s ease-out}.settings-modal{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);width:90%;max-width:480px;max-height:90vh;overflow-y:auto;animation:modalSlideUp .3s ease-out}.settings-modal::-webkit-scrollbar{width:8px}.settings-modal::-webkit-scrollbar-track{background:rgba(255,255,255,.05);border-radius:10px}.settings-modal::-webkit-scrollbar-thumb{background:linear-gradient(180deg,rgba(255,255,255,.8),rgba(200,200,200,.6));border-radius:10px;box-shadow:0 0 10px rgba(255,255,255,.5),0 0 20px rgba(255,255,255,.3)}.settings-modal::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,#fff,rgba(220,220,220,.8));box-shadow:0 0 15px rgba(255,255,255,.7),0 0 30px rgba(255,255,255,.4)}@keyframes modalSlideUp{0%{opacity:0;transform:translateY(30px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}.settings-header{display:flex;justify-content:space-between;align-items:center;padding:24px;border-bottom:1px solid var(--border-color)}.settings-header h2{font-size:1.25rem;font-weight:600;display:flex;align-items:center;gap:10px}.settings-close{background:none;border:none;color:var(--text-muted);font-size:1.25rem;cursor:pointer;padding:8px;border-radius:var(--radius-sm);transition:all .2s ease}.settings-close:hover{background:var(--bg-tertiary);color:var(--text-primary)}.settings-content{padding:24px}.settings-avatar{text-align:center;margin-bottom:24px}.avatar-wrapper{position:relative;display:inline-block}.avatar-circle{width:80px;height:80px;background:var(--bg-tertiary);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:2rem;color:var(--text-secondary);border:3px solid var(--border-color);position:relative;overflow:hidden}.avatar-upload-btn{position:absolute;right:-6px;bottom:-6px;width:32px;height:32px;border-radius:50%;background:rgba(0,0,0,.75);border:1px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;color:#fff;cursor:pointer;transition:transform var(--transition-fast),box-shadow var(--transition-fast);box-shadow:0 6px 18px rgba(0,0,0,.55);z-index:3}.avatar-upload-btn:hover{transform:translateY(-1px);box-shadow:0 10px 26px rgba(0,0,0,.6),0 0 12px rgba(255,255,255,.15)}.avatar-upload-btn input{display:none}.settings-info{display:flex;flex-direction:column;gap:16px}.settings-field{background:var(--bg-tertiary);border-radius:var(--radius-md);padding:16px}.settings-field label{display:flex;align-items:center;gap:8px;font-size:.8rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px}.settings-value{font-size:1rem;font-weight:500;color:var(--text-primary)}.settings-value.email-field{display:flex;align-items:center;justify-content:space-between;gap:12px}.hidden-email{letter-spacing:2px;color:var(--text-secondary)}.reveal-btn{background:var(--bg-secondary);border:1px solid var(--border-color);color:var(--text-secondary);padding:6px 10px;border-radius:var(--radius-sm);cursor:pointer;transition:all .2s ease}.reveal-btn:hover{background:var(--bg-card);color:var(--text-primary)}.settings-value.user-id{font-family:monospace;font-size:.9rem;color:var(--text-secondary)}.settings-footer{padding:16px 24px;border-top:1px solid var(--border-color);display:flex;justify-content:flex-end}.login-prompt{background:rgba(255,193,7,.1);border:1px solid rgba(255,193,7,.3);color:#ffc107;padding:12px 20px;border-radius:var(--radius-md);margin-bottom:20px;display:flex;align-items:center;gap:12px;justify-content:center}.login-prompt .btn-sm{padding:6px 16px;font-size:.85rem;background:#ffc107;color:#000;border:none;margin-left:8px}.login-prompt .btn-sm:hover{background:#ffcd39}.credits-display{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:12px 24px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);margin-bottom:20px;color:#fff;font-weight:600;font-size:.95rem}.credits-display:before{content:"";position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:calc(var(--radius-md) + 2px);padding:2px;background:conic-gradient(from var(--angle),transparent 0%,transparent 30%,rgba(255,255,255,.8) 50%,transparent 70%,transparent 100%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:1;animation:rotate-border 3s linear infinite;pointer-events:none;z-index:1}.credits-display i{color:gold;font-size:1.1rem;filter:drop-shadow(0 0 6px rgba(255,215,0,.6));animation:coin-glow 2s ease-in-out infinite alternate}@keyframes coin-glow{0%{filter:drop-shadow(0 0 4px rgba(255,215,0,.4));transform:scale(1)}to{filter:drop-shadow(0 0 10px rgba(255,215,0,.8));transform:scale(1.1)}}.search-error{background:rgba(220,53,69,.1);border:1px solid rgba(220,53,69,.3);color:#ff6b6b;padding:12px 20px;border-radius:var(--radius-md);margin-top:16px;display:flex;align-items:center;gap:10px;justify-content:center}.search-results-section{padding:80px 0;background:transparent}.search-results-section .section-header{position:relative}.search-results-section .section-title{color:#fff}.search-results-section .section-description{color:rgba(255,255,255,.6)}.btn-download{position:relative;display:inline-flex;align-items:center;gap:10px;padding:12px 24px;margin-top:20px;background:#000;border:1px solid rgba(255,215,0,.3);border-radius:var(--radius-md);color:gold;font-weight:600;font-size:.95rem;cursor:pointer;transition:all .3s ease}.btn-download:before{content:"";position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:calc(var(--radius-md) + 2px);background:conic-gradient(from var(--angle),transparent 0%,transparent 30%,rgba(255,215,0,.9) 50%,transparent 70%,transparent 100%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;padding:2px;opacity:0;transition:opacity .3s ease;pointer-events:none;animation:rotate-border 3s linear infinite}.btn-download:hover{border-color:rgba(255,215,0,.6);box-shadow:0 0 25px rgba(255,215,0,.3);transform:translateY(-4px);color:gold}.btn-download:hover:before{opacity:1}.btn-download i{font-size:1rem;color:gold}.results-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));gap:24px;margin-top:40px}.result-card{position:relative;background:rgba(17,24,39,.6);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.15);border-radius:var(--radius-lg);padding:24px;transition:all .3s ease}.result-card:before{content:"";position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;border-radius:calc(var(--radius-lg) + 2px);padding:2px;background:conic-gradient(from var(--angle),transparent 0%,transparent 30%,rgba(255,255,255,.8) 50%,transparent 70%,transparent 100%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .3s ease;pointer-events:none;animation:rotate-border 3s linear infinite}.result-card:hover{border-color:rgba(255,255,255,.3);transform:translateY(-4px);box-shadow:0 10px 30px rgba(0,0,0,.5),0 0 20px rgba(255,255,255,.1)}.result-card:hover:before{opacity:1}.result-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.1)}.result-header h3{font-size:1.1rem;display:flex;align-items:center;gap:10px;color:#fff}.result-header h3 i{color:rgba(255,255,255,.5)}.result-badge{background:rgba(255,255,255,.1);color:#fff;padding:4px 12px;border-radius:20px;font-size:.8rem;border:1px solid rgba(255,255,255,.2)}.result-info{color:rgba(255,255,255,.4);font-size:.9rem;margin-bottom:16px;font-style:italic}.result-data{display:flex;flex-direction:column;gap:12px;max-height:350px;overflow-y:auto;padding-right:8px;margin-right:-8px}.result-data::-webkit-scrollbar{width:4px}.result-data::-webkit-scrollbar-track{background:rgba(255,255,255,.05);border-radius:10px}.result-data::-webkit-scrollbar-thumb{background:linear-gradient(180deg,rgba(255,255,255,.4),rgba(255,255,255,.2));border-radius:10px;box-shadow:0 0 8px rgba(255,255,255,.3)}.result-data::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,.3));box-shadow:0 0 12px rgba(255,255,255,.5)}.result-data{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.3) rgba(255,255,255,.05)}.result-item{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-md);padding:12px 16px;transition:all .3s ease}.result-item:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.2);box-shadow:0 0 15px rgba(255,255,255,.05)}.result-field{display:flex;flex-direction:column;gap:4px;margin-bottom:12px;font-size:.9rem;padding:10px 12px;background:rgba(255,255,255,.02);border-radius:8px;border-left:3px solid rgba(255,255,255,.1);transition:all .2s ease}.result-field:hover{background:rgba(255,255,255,.04);border-left-color:rgba(255,255,255,.3)}.result-field:last-child{margin-bottom:0}.field-key{display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.5);font-weight:600;font-size:.75rem;text-transform:uppercase;letter-spacing:.5px}.field-key i{font-size:.7rem;opacity:.6}.field-key i.fa-circle{font-size:.4rem}.field-value{color:#fff;word-break:break-word;font-size:.95rem;line-height:1.5;padding-left:20px}.field-value.field-empty{color:rgba(255,255,255,.2);font-style:italic}.field-value.field-long{font-size:.85rem;background:rgba(0,0,0,.2);padding:8px 12px;border-radius:6px;font-family:monospace;max-height:100px;overflow-y:auto}.field-nested{padding-left:16px;margin-top:6px;border-left:2px solid rgba(255,255,255,.08)}.nested-field{display:flex;flex-direction:column;gap:2px;margin-bottom:8px;padding:6px 10px;background:rgba(255,255,255,.02);border-radius:6px}.nested-field:last-child{margin-bottom:0}.nested-key{color:rgba(255,255,255,.4);font-weight:500;font-size:.8rem}.nested-item{padding:8px;margin-bottom:6px;background:rgba(255,255,255,.02);border-radius:6px;border:1px solid rgba(255,255,255,.05)}.nested-item:last-child{margin-bottom:0}.no-results{text-align:center;padding:60px 20px}.no-results i{font-size:4rem;color:rgba(255,255,255,.2);margin-bottom:20px}.no-results h3{font-size:1.5rem;margin-bottom:8px;color:#fff}.no-results p{color:rgba(255,255,255,.5)}@media(max-width:768px){.results-grid{grid-template-columns:1fr}.login-prompt{flex-direction:column;text-align:center}.login-prompt .btn-sm{margin-left:0;margin-top:8px}}.otp-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.8);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:10000;display:flex;align-items:center;justify-content:center;animation:fadeIn .3s ease-out}.otp-modal{position:relative;background:#000;border:1px solid rgba(255,255,255,.2);border-radius:var(--radius-lg);width:90%;max-width:420px;padding:32px;animation:modalSlideUp .3s ease-out;box-shadow:0 20px 60px rgba(0,0,0,.5),0 0 40px rgba(255,255,255,.05)}.otp-close{position:absolute;top:16px;right:16px;background:rgba(255,255,255,.1);border:none;border-radius:8px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:rgba(255,255,255,.6);transition:all .2s ease}.otp-close:hover{background:rgba(255,255,255,.2);color:#fff}.otp-header{text-align:center;margin-bottom:24px}.otp-icon{width:64px;height:64px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:1.5rem;color:#fff;box-shadow:0 0 20px rgba(255,255,255,.1)}.otp-header h2{font-size:1.5rem;font-weight:700;color:#fff;margin-bottom:8px}.otp-header p{color:rgba(255,255,255,.6);font-size:.95rem}.otp-error{background:rgba(220,53,69,.1);border:1px solid rgba(220,53,69,.3);color:#ff6b6b;padding:12px 16px;border-radius:var(--radius-md);margin-bottom:20px;display:flex;align-items:center;gap:10px;font-size:.9rem}.otp-success{background:rgba(40,167,69,.1);border:1px solid rgba(40,167,69,.3);color:#51cf66;padding:12px 16px;border-radius:var(--radius-md);margin-bottom:20px;display:flex;align-items:center;gap:10px;font-size:.9rem}.otp-input{text-align:center;font-size:1.5rem!important;font-weight:700;letter-spacing:8px;font-family:monospace}.otp-input::placeholder{letter-spacing:8px;opacity:.3}@media(max-width:480px){.otp-modal{padding:24px;margin:16px}.otp-header h2{font-size:1.25rem}.otp-input{font-size:1.25rem!important;letter-spacing:6px}}.live-chat-shell{position:fixed;left:24px;bottom:24px;z-index:1400;display:flex;align-items:flex-end;gap:12px;pointer-events:none}.chat-floating-button,.live-chat-panel{pointer-events:auto}.live-chat-panel{pointer-events:none}.live-chat-panel.open{pointer-events:auto}.chat-floating-button{width:58px;height:58px;border-radius:50%;border:1px solid rgba(255,255,255,.12);background:linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.02));color:var(--text-primary);display:inline-flex;align-items:center;justify-content:center;box-shadow:var(--shadow-md),0 12px 36px rgba(0,0,0,.55),0 0 24px rgba(255,255,255,.06);cursor:pointer;transition:transform var(--transition-normal),box-shadow var(--transition-normal),opacity var(--transition-normal);backdrop-filter:blur(14px)}.chat-floating-button i{font-size:1.3rem}.chat-floating-button:hover{transform:translateY(-2px) scale(1.02);box-shadow:var(--shadow-lg),0 16px 48px rgba(0,0,0,.65),0 0 32px rgba(255,255,255,.08)}.chat-floating-button.hidden{opacity:0;transform:translateY(10px) scale(.96);pointer-events:none}.live-chat-panel{width:380px;max-width:92vw;max-height:70vh;background:linear-gradient(165deg,rgba(14,14,14,.94),rgba(6,6,6,.92));border:1px solid rgba(255,255,255,.08);border-radius:18px;box-shadow:var(--shadow-lg),0 24px 80px rgba(0,0,0,.65),0 0 34px rgba(255,255,255,.05);overflow:hidden;transform:translateY(18px);opacity:0;visibility:hidden;transition:opacity var(--transition-normal),transform var(--transition-normal),visibility 0s linear .15s;backdrop-filter:blur(18px)}.live-chat-panel.open{opacity:1;visibility:visible;transform:translateY(0);transition-delay:0s}.live-chat-header{padding:16px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border-color);background:linear-gradient(135deg,rgba(255,255,255,.02),rgba(255,255,255,.01))}.live-chat-eyebrow{letter-spacing:.08em;color:var(--text-muted);font-size:.7rem;text-transform:uppercase;margin:0}.live-chat-header h4{margin:2px 0 0;color:var(--text-primary);font-size:1.05rem;font-weight:700}.live-chat-actions{display:flex;gap:8px}.chat-circle-btn{width:36px;height:36px;border-radius:50%;border:1px solid var(--border-color);background:rgba(255,255,255,.04);color:var(--text-secondary);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:all var(--transition-fast)}.chat-circle-btn:hover{background:rgba(255,255,255,.08);color:var(--text-primary);box-shadow:0 0 12px rgba(255,255,255,.08)}.chat-circle-btn:disabled{opacity:.45;cursor:not-allowed}.live-chat-body{padding:16px;background:radial-gradient(circle at 20% 20%,rgba(255,255,255,.05),transparent 35%),rgba(0,0,0,.65);max-height:52vh;overflow-y:auto;display:flex;flex-direction:column;gap:12px}.live-chat-body::-webkit-scrollbar{width:8px}.live-chat-body::-webkit-scrollbar-thumb{background:rgba(255,255,255,.16);border-radius:10px;border:1px solid rgba(255,255,255,.12)}.live-chat-system{display:flex;gap:12px;align-items:center;padding:12px 14px;border-radius:12px;border:1px dashed rgba(255,255,255,.15);background:rgba(255,255,255,.02)}.live-chat-system-icon{width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;color:var(--text-primary);box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}.live-chat-system-title{margin:0 0 8px;font-weight:700;color:var(--text-primary)}.live-chat-auth-actions{display:flex;gap:10px;flex-wrap:wrap}.live-chat-message{display:flex;gap:12px;align-items:flex-start}.live-chat-avatar{width:40px;height:40px;border-radius:12px;background:var(--bg-tertiary);border:1px solid var(--border-color);display:flex;align-items:center;justify-content:center;color:var(--text-primary);font-weight:700;box-shadow:0 8px 24px rgba(0,0,0,.45),0 0 12px rgba(255,255,255,.04);overflow:hidden}.live-chat-avatar img{width:100%;height:100%;object-fit:cover;border-radius:12px}.live-chat-bubble{flex:1;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:12px 14px;box-shadow:0 10px 30px rgba(0,0,0,.45),0 0 18px rgba(255,255,255,.04)}.live-chat-message.is-own .live-chat-bubble{background:linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02));border-color:rgba(255,255,255,.14);box-shadow:0 12px 32px rgba(0,0,0,.5),0 0 22px rgba(255,255,255,.06)}.live-chat-meta{display:flex;justify-content:space-between;gap:10px;align-items:baseline;margin-bottom:6px}.live-chat-userline{display:flex;gap:6px;align-items:center;flex-wrap:wrap}.live-chat-username{font-weight:700;color:var(--text-primary)}.live-chat-time{font-size:.8rem;color:var(--text-muted)}.live-chat-text{margin:0;color:var(--text-secondary);font-size:.95rem;line-height:1.45}.live-chat-role{padding:2px 10px;border-radius:999px;border:1px solid transparent;font-size:.75rem;font-weight:700;letter-spacing:.01em}.live-chat-badge{display:inline-flex;align-items:center;gap:6px;padding:2px 8px;border-radius:999px;border:1px solid transparent;font-size:.72rem;font-weight:600;backdrop-filter:blur(8px);box-shadow:0 6px 16px rgba(0,0,0,.35)}.live-chat-badge i{font-size:.7rem}.live-chat-footer{padding:10px 14px;border-top:1px solid var(--border-color);background:rgba(255,255,255,.02)}.live-chat-input{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:10px}.live-chat-input textarea{width:100%;background:transparent;border:none;outline:none;color:var(--text-primary);font-family:var(--font-family);font-size:.95rem;line-height:1.4;resize:none}.live-chat-input textarea::placeholder{color:var(--text-muted)}.live-chat-input textarea:disabled{opacity:.6}.live-chat-footer-actions{display:flex;align-items:center;gap:8px}.live-chat-hint{margin:8px 0 0;color:var(--text-muted);font-size:.8rem;text-align:right}.live-chat-delete{background:transparent;border:none;color:var(--text-muted);cursor:pointer;padding:4px;border-radius:8px;transition:color var(--transition-fast),background var(--transition-fast)}.live-chat-delete:hover{color:var(--text-primary);background:rgba(255,255,255,.06)}.live-chat-delete:disabled{opacity:.5;cursor:not-allowed}@media(max-width:900px){.live-chat-panel{width:340px;max-height:66vh}}@media(max-width:640px){.live-chat-shell{left:14px;right:14px;bottom:16px}.live-chat-panel{width:100%;max-width:none;max-height:60vh;border-radius:16px}.live-chat-body{max-height:46vh}.chat-floating-button{width:54px;height:54px}}\n/*$vite$:1*/',document.head.appendChild(en)
var tn,rn,nn,an,sn,on,ln,cn,un,dn,pn={exports:{}},fn={},hn=(rn||(rn=1,pn.exports=function(){function e(e,r,n){var a=null
if(void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),"key"in r)for(var s in n={},r)"key"!==s&&(n[s]=r[s])
else n=r
return r=n.ref,{$$typeof:t,type:e,key:a,ref:void 0!==r?r:null,props:n}}if(tn)return fn
tn=1
var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment")
return fn.Fragment=r,fn.jsx=e,fn.jsxs=e,fn}()),pn.exports),mn={exports:{}},gn={},bn=k(),vn={exports:{}},yn={},xn={exports:{}},wn={},kn={exports:{}},jn={},Sn=(dn||(dn=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),vn.exports=function(){function e(e,t){var r="https://react.dev/errors/"+e
if(1<arguments.length){r+="?args[]="+encodeURIComponent(t)
for(var n=2;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function r(e){var t=e,r=e
if(e.alternate)for(;t.return;)t=t.return
else{e=t
do{!!(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function n(e){if(13===e.tag){var t=e.memoizedState
if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function a(e){if(31===e.tag){var t=e.memoizedState
if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function s(t){if(r(t)!==t)throw Error(e(188))}function i(e){var t=e.tag
if(5===t||26===t||27===t||6===t)return e
for(e=e.child;null!==e;){if(null!==(t=i(e)))return t
e=e.sibling}return null}function o(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Zo&&e[Zo]||e["@@iterator"])?e:null}function l(e){if(null==e)return null
if("function"==typeof e)return e.$$typeof===Qo?null:e.displayName||e.name||null
if("string"==typeof e)return e
switch(e){case Fo:return"Fragment"
case Wo:return"Profiler"
case Bo:return"StrictMode"
case Ho:return"Suspense"
case Ko:return"SuspenseList"
case Jo:return"Activity"}if("object"==typeof e)switch(e.$$typeof){case $o:return"Portal"
case qo:return e.displayName||"Context"
case Vo:return(e._context.displayName||"Context")+".Consumer"
case Mo:var t=e.render
return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e
case Yo:return null!==(t=e.displayName||null)?t:l(e.type)||"Memo"
case Go:t=e._payload,e=e._init
try{return l(e(t))}catch(r){}}return null}function c(e){return{current:e}}function u(e){0>sl||(e.current=al[sl],al[sl]=null,sl--)}function d(e,t){sl++,al[sl]=e.current,e.current=t}function p(e,t){switch(d(ll,t),d(ol,e),d(il,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ni(e):0
break
default:if(e=t.tagName,t=t.namespaceURI)e=Ei(t=Ni(t),e)
else switch(e){case"svg":e=1
break
case"math":e=2
break
default:e=0}}u(il),d(il,e)}function f(){u(il),u(ol),u(ll)}function h(e){null!==e.memoizedState&&d(cl,e)
var t=il.current,r=Ei(t,e.type)
t!==r&&(d(ol,e),d(il,r))}function m(e){ol.current===e&&(u(il),u(ol)),cl.current===e&&(u(cl),Wp._currentValue=nl)}function g(e){if(void 0===Oo)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/)
Oo=t&&t[1]||"",Io=-1<r.stack.indexOf("\n    at")?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Oo+e+Io}function b(e,t){if(!e||ul)return""
ul=!0
var r=Error.prepareStackTrace
Error.prepareStackTrace=void 0
try{var n={DetermineComponentFrameRoot:function(){try{if(t){var r=function(){throw Error()}
if(Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(r,[])}catch(a){var n=a}Reflect.construct(e,[],r)}else{try{r.call()}catch(s){n=s}e.call(r.prototype)}}else{try{throw Error()}catch(i){n=i}(r=e())&&"function"==typeof r.catch&&r.catch(function(){})}}catch(o){if(o&&n&&"string"==typeof o.stack)return[o.stack,n.stack]}return[null,null]}}
n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot"
var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name")
a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"})
var s=n.DetermineComponentFrameRoot(),i=s[0],o=s[1]
if(i&&o){var l=i.split("\n"),c=o.split("\n")
for(a=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++
for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++
if(n===l.length||a===c.length)for(n=l.length-1,a=c.length-1;1<=n&&0<=a&&l[n]!==c[a];)a--
for(;1<=n&&0<=a;n--,a--)if(l[n]!==c[a]){if(1!==n||1!==a)do{if(n--,0>--a||l[n]!==c[a]){var u="\n"+l[n].replace(" at new "," at ")
return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=n&&0<=a)
break}}}finally{ul=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?g(r):""}function v(e,t){switch(e.tag){case 26:case 27:case 5:return g(e.type)
case 16:return g("Lazy")
case 13:return e.child!==t&&null!==t?g("Suspense Fallback"):g("Suspense")
case 19:return g("SuspenseList")
case 0:case 15:return b(e.type,!1)
case 11:return b(e.type.render,!1)
case 1:return b(e.type,!0)
case 31:return g("Activity")
default:return""}}function y(e){try{var t="",r=null
do{t+=v(e,r),r=e,e=e.return}while(e)
return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function x(e){if("function"==typeof jl&&Sl(e),Nl&&"function"==typeof Nl.setStrictMode)try{Nl.setStrictMode(_l,e)}catch(t){}}function w(e){var t=42&e
if(0!==t)return t
switch(e&-e){case 1:return 1
case 2:return 2
case 4:return 4
case 8:return 8
case 16:return 16
case 32:return 32
case 64:return 64
case 128:return 128
case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e
case 262144:case 524288:case 1048576:case 2097152:return 3932160&e
case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e
case 67108864:return 67108864
case 134217728:return 134217728
case 268435456:return 268435456
case 536870912:return 536870912
case 1073741824:return 0
default:return e}}function j(e,t,r){var n=e.pendingLanes
if(0===n)return 0
var a=0,s=e.suspendedLanes,i=e.pingedLanes
e=e.warmLanes
var o=134217727&n
return 0!==o?0!==(n=o&~s)?a=w(n):0!==(i&=o)?a=w(i):r||0!==(r=o&~e)&&(a=w(r)):0!==(o=n&~s)?a=w(o):0!==i?a=w(i):r||0!==(r=n&~e)&&(a=w(r)),0===a?0:0!==t&&t!==a&&0===(t&s)&&((s=a&-a)>=(r=t&-t)||32===s&&4194048&r)?t:a}function S(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function _(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250
case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3
default:return-1}}function N(){var e=Al
return!(62914560&(Al<<=1))&&(Al=4194304),e}function E(e){for(var t=[],r=0;31>r;r++)t.push(e)
return t}function T(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function C(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t
var n=31-El(t)
e.entangledLanes|=t,e.entanglements[n]=1073741824|e.entanglements[n]|261930&r}function R(e,t){var r=e.entangledLanes|=t
for(e=e.entanglements;r;){var n=31-El(r),a=1<<n
a&t|e[n]&t&&(e[n]|=t),r&=~a}}function P(e,t){var r=t&-t
return 0!==((r=42&r?1:A(r))&(e.suspendedLanes|t))?0:r}function A(e){switch(e){case 2:e=1
break
case 8:e=4
break
case 32:e=16
break
case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128
break
case 268435456:e=134217728
break
default:e=0}return e}function O(e){return 2<(e&=-e)?8<e?134217727&e?32:268435456:8:2}function I(){var e=rl.p
return 0!==e?e:void 0===(e=window.event)?32:xo(e.type)}function z(e,t){var r=rl.p
try{return rl.p=e,t()}finally{rl.p=r}}function L(e){delete e[Il],delete e[zl],delete e[Dl],delete e[Ul],delete e[$l]}function D(e){var t=e[Il]
if(t)return t
for(var r=e.parentNode;r;){if(t=r[Ll]||r[Il]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=$i(e);null!==e;){if(r=e[Il])return r
e=$i(e)}return t}r=(e=r).parentNode}return null}function U(e){if(e=e[Il]||e[Ll]){var t=e.tag
if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function $(t){var r=t.tag
if(5===r||26===r||27===r||6===r)return t.stateNode
throw Error(e(33))}function F(e){var t=e[Fl]
return t||(t=e[Fl]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function B(e){e[Bl]=!0}function W(e,t){V(e,t),V(e+"Capture",t)}function V(e,t){for(Vl[e]=t,e=0;e<t.length;e++)Wl.add(t[e])}function q(e,t,r){if(a=t,dl.call(Hl,a)||!dl.call(Ml,a)&&(ql.test(a)?Hl[a]=!0:(Ml[a]=!0,0)))if(null===r)e.removeAttribute(t)
else{switch(typeof r){case"undefined":case"function":case"symbol":return void e.removeAttribute(t)
case"boolean":var n=t.toLowerCase().slice(0,5)
if("data-"!==n&&"aria-"!==n)return void e.removeAttribute(t)}e.setAttribute(t,""+r)}var a}function M(e,t,r){if(null===r)e.removeAttribute(t)
else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+r)}}function H(e,t,r,n){if(null===n)e.removeAttribute(r)
else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(r)}e.setAttributeNS(t,r,""+n)}}function K(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e
default:return""}}function Y(e){var t=e.type
return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){if(!e._valueTracker){var t=Y(e)?"checked":"value"
e._valueTracker=function(e,t,r){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t)
if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,s=n.set
return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function J(e){if(!e)return!1
var t=e._valueTracker
if(!t)return!0
var r=t.getValue(),n=""
return e&&(n=Y(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function X(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null
try{return e.activeElement||e.body}catch(t){return e.body}}function Z(e){return e.replace(Kl,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Q(e,t,r,n,a,s,i,o){e.name="",null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+K(t)):e.value!==""+K(t)&&(e.value=""+K(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?te(e,i,K(t)):null!=r?te(e,i,K(r)):null!=n&&e.removeAttribute("value"),null==a&&null!=s&&(e.defaultChecked=!!s),null!=a&&(e.checked=a&&"function"!=typeof a&&"symbol"!=typeof a),null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o?e.name=""+K(o):e.removeAttribute("name")}function ee(e,t,r,n,a,s,i,o){if(null!=s&&"function"!=typeof s&&"symbol"!=typeof s&&"boolean"!=typeof s&&(e.type=s),null!=t||null!=r){if(("submit"===s||"reset"===s)&&null==t)return void G(e)
r=null!=r?""+K(r):"",t=null!=t?""+K(t):r,o||t===e.value||(e.value=t),e.defaultValue=t}n="function"!=typeof(n=null!=n?n:a)&&"symbol"!=typeof n&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i&&(e.name=i),G(e)}function te(e,t,r){"number"===t&&X(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function re(e,t,r,n){if(e=e.options,t){t={}
for(var a=0;a<r.length;a++)t["$"+r[a]]=!0
for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+K(r),t=null,a=0;a<e.length;a++){if(e[a].value===r)return e[a].selected=!0,void(n&&(e[a].defaultSelected=!0))
null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function ne(e,t,r){null==t||((t=""+K(t))!==e.value&&(e.value=t),null!=r)?e.defaultValue=null!=r?""+K(r):"":e.defaultValue!==t&&(e.defaultValue=t)}function ae(t,r,n,a){if(null==r){if(null!=a){if(null!=n)throw Error(e(92))
if(el(a)){if(1<a.length)throw Error(e(93))
a=a[0]}n=a}null==n&&(n=""),r=n}n=K(r),t.defaultValue=n,(a=t.textContent)===n&&""!==a&&null!==a&&(t.value=a),G(t)}function se(e,t){if(t){var r=e.firstChild
if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}function ie(e,t,r){var n=0===t.indexOf("--")
null==r||"boolean"==typeof r||""===r?n?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":n?e.setProperty(t,r):"number"!=typeof r||0===r||Yl.has(t)?"float"===t?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function oe(t,r,n){if(null!=r&&"object"!=typeof r)throw Error(e(62))
if(t=t.style,null!=n){for(var a in n)!n.hasOwnProperty(a)||null!=r&&r.hasOwnProperty(a)||(0===a.indexOf("--")?t.setProperty(a,""):"float"===a?t.cssFloat="":t[a]="")
for(var s in r)a=r[s],r.hasOwnProperty(s)&&n[s]!==a&&ie(t,s,a)}else for(var i in r)r.hasOwnProperty(i)&&ie(t,i,r[i])}function le(e){if(-1===e.indexOf("-"))return!1
switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1
default:return!0}}function ce(e){return Jl.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ue(){}function de(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function pe(t){var r=U(t)
if(r&&(t=r.stateNode)){var n=t[zl]||null
e:switch(t=r.stateNode,r.type){case"input":if(Q(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),r=n.name,"radio"===n.type&&null!=r){for(n=t;n.parentNode;)n=n.parentNode
for(n=n.querySelectorAll('input[name="'+Z(""+r)+'"][type="radio"]'),r=0;r<n.length;r++){var a=n[r]
if(a!==t&&a.form===t.form){var s=a[zl]||null
if(!s)throw Error(e(90))
Q(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(r=0;r<n.length;r++)(a=n[r]).form===t.form&&J(a)}break e
case"textarea":ne(t,n.value,n.defaultValue)
break e
case"select":null!=(r=n.value)&&re(t,!!n.multiple,r,!1)}}}function fe(e,t,r){if(ec)return e(t,r)
ec=!0
try{return e(t)}finally{if(ec=!1,(null!==Zl||null!==Ql)&&(js(),Zl&&(t=Zl,e=Ql,Ql=Zl=null,pe(t),e)))for(t=0;t<e.length;t++)pe(e[t])}}function he(t,r){var n=t.stateNode
if(null===n)return null
var a=n[zl]||null
if(null===a)return null
n=a[r]
e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(a=!("button"===(t=t.type)||"input"===t||"select"===t||"textarea"===t)),t=!a
break e
default:t=!1}if(t)return null
if(n&&"function"!=typeof n)throw Error(e(231,r,typeof n))
return n}function me(){if(cc)return cc
var e,t,r=lc,n=r.length,a="value"in oc?oc.value:oc.textContent,s=a.length
for(e=0;e<n&&r[e]===a[e];e++);var i=n-e
for(t=1;t<=i&&r[n-t]===a[s-t];t++);return cc=a.slice(e,1<t?1-t:void 0)}function ge(e){var t=e.keyCode
return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function be(){return!0}function ve(){return!1}function ye(e){function t(t,r,n,a,s){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i])
return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?be:ve,this.isPropagationStopped=ve,this}return Lo(t.prototype,{preventDefault:function(){this.defaultPrevented=!0
var e=this.nativeEvent
e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var e=this.nativeEvent
e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){},isPersistent:be}),t}function xe(e){var t=this.nativeEvent
return t.getModifierState?t.getModifierState(e):!!(e=jc[e])&&!!t[e]}function we(){return xe}function ke(e,t){switch(e){case"keyup":return-1!==Rc.indexOf(t.keyCode)
case"keydown":return 229!==t.keyCode
case"keypress":case"mousedown":case"focusout":return!0
default:return!1}}function je(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}function Se(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return"input"===t?!!Uc[e.type]:"textarea"===t}function _e(e,t,r,n){Zl?Ql?Ql.push(n):Ql=[n]:Zl=n,0<(t=gi(t,"onChange")).length&&(r=new dc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}function Ne(e){ci(e,0)}function Ee(e){if(J($(e)))return e}function Te(e,t){if("change"===e)return t}function Ce(){$c&&($c.detachEvent("onpropertychange",Re),Fc=$c=null)}function Re(e){if("value"===e.propertyName&&Ee(Fc)){var t=[]
_e(t,Fc,e,de(e)),fe(Ne,t)}}function Pe(e,t,r){"focusin"===e?(Ce(),Fc=r,($c=t).attachEvent("onpropertychange",Re)):"focusout"===e&&Ce()}function Ae(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Ee(Fc)}function Oe(e,t){if("click"===e)return Ee(t)}function Ie(e,t){if("input"===e||"change"===e)return Ee(t)}function ze(e,t){if(Mc(e,t))return!0
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1
var r=Object.keys(e),n=Object.keys(t)
if(r.length!==n.length)return!1
for(n=0;n<r.length;n++){var a=r[n]
if(!dl.call(t,a)||!Mc(e[a],t[a]))return!1}return!0}function Le(e){for(;e&&e.firstChild;)e=e.firstChild
return e}function De(e,t){var r,n=Le(e)
for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e}
e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling
break e}n=n.parentNode}n=void 0}n=Le(n)}}function Ue(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Ue(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function $e(e){for(var t=X((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var r="string"==typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break
t=X((e=t.contentWindow).document)}return t}function Fe(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Be(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument
Jc||null==Kc||Kc!==X(n)||(n="selectionStart"in(n=Kc)&&Fe(n)?{start:n.selectionStart,end:n.selectionEnd}:{anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},Gc&&ze(Gc,n)||(Gc=n,0<(n=gi(Yc,"onSelect")).length&&(t=new dc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Kc)))}function We(e,t){var r={}
return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}function Ve(e){if(Zc[e])return Zc[e]
if(!Xc[e])return e
var t,r=Xc[e]
for(t in r)if(r.hasOwnProperty(t)&&t in Qc)return Zc[e]=r[t]
return e}function qe(e,t){ou.set(e,t),W(t,[e])}function Me(){for(var e=du,t=pu=du=0;t<e;){var r=uu[t]
uu[t++]=null
var n=uu[t]
uu[t++]=null
var a=uu[t]
uu[t++]=null
var s=uu[t]
if(uu[t++]=null,null!==n&&null!==a){var i=n.pending
null===i?a.next=a:(a.next=i.next,i.next=a),n.pending=a}0!==s&&Ge(r,a,s)}}function He(e,t,r,n){uu[du++]=e,uu[du++]=t,uu[du++]=r,uu[du++]=n,pu|=n,e.lanes|=n,null!==(e=e.alternate)&&(e.lanes|=n)}function Ke(e,t,r,n){return He(e,t,r,n),Je(e)}function Ye(e,t){return He(e,null,null,t),Je(e)}function Ge(e,t,r){e.lanes|=r
var n=e.alternate
null!==n&&(n.lanes|=r)
for(var a=!1,s=e.return;null!==s;)s.childLanes|=r,null!==(n=s.alternate)&&(n.childLanes|=r),22===s.tag&&(null===(e=s.stateNode)||1&e._visibility||(a=!0)),e=s,s=s.return
return 3===e.tag?(s=e.stateNode,a&&null!==t&&(a=31-El(r),null===(n=(e=s.hiddenUpdates)[a])?e[a]=[t]:n.push(t),t.lane=536870912|r),s):null}function Je(t){if(50<pp)throw pp=0,fp=null,Error(e(185))
for(var r=t.return;null!==r;)r=(t=r).return
return 3===t.tag?t.stateNode:null}function Xe(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,r,n){return new Xe(e,t,r,n)}function Qe(e){return!(!(e=e.prototype)||!e.isReactComponent)}function et(e,t){var r=e.alternate
return null===r?((r=Ze(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=65011712&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function tt(e,t){e.flags&=65011714
var r=e.alternate
return null===r?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rt(t,r,n,a,s,i){var o=0
if(a=t,"function"==typeof t)Qe(t)&&(o=1)
else if("string"==typeof t)o=function(e,t,r){if(1===r||null!=t.itemProp)return!1
switch(e){case"meta":case"title":return!0
case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break
return!0
case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break
return"stylesheet"!==t.rel||(e=t.disabled,"string"==typeof t.precedence&&null==e)
case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return!0}return!1}(t,n,il.current)?26:"html"===t||"head"===t||"body"===t?27:5
else e:switch(t){case Jo:return(t=Ze(31,n,r,s)).elementType=Jo,t.lanes=i,t
case Fo:return nt(n.children,s,i,r)
case Bo:o=8,s|=24
break
case Wo:return(t=Ze(12,n,r,2|s)).elementType=Wo,t.lanes=i,t
case Ho:return(t=Ze(13,n,r,s)).elementType=Ho,t.lanes=i,t
case Ko:return(t=Ze(19,n,r,s)).elementType=Ko,t.lanes=i,t
default:if("object"==typeof t&&null!==t)switch(t.$$typeof){case qo:o=10
break e
case Vo:o=9
break e
case Mo:o=11
break e
case Yo:o=14
break e
case Go:o=16,a=null
break e}o=29,n=Error(e(130,null===t?"null":typeof t,"")),a=null}return(r=Ze(o,n,r,s)).elementType=t,r.type=a,r.lanes=i,r}function nt(e,t,r,n){return(e=Ze(7,e,n,t)).lanes=r,e}function at(e,t,r){return(e=Ze(6,e,null,t)).lanes=r,e}function st(e){var t=Ze(18,null,null,0)
return t.stateNode=e,t}function it(e,t,r){return(t=Ze(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ot(e,t){if("object"==typeof e&&null!==e){var r=hu.get(e)
return void 0!==r?r:(t={value:e,source:t,stack:y(t)},hu.set(e,t),t)}return{value:e,source:t,stack:y(t)}}function lt(e,t){mu[gu++]=vu,mu[gu++]=bu,bu=e,vu=t}function ct(e,t,r){yu[xu++]=ku,yu[xu++]=ju,yu[xu++]=wu,wu=e
var n=ku
e=ju
var a=32-El(n)-1
n&=~(1<<a),r+=1
var s=32-El(t)+a
if(30<s){var i=a-a%5
s=(n&(1<<i)-1).toString(32),n>>=i,a-=i,ku=1<<32-El(t)+a|r<<a|n,ju=s+e}else ku=1<<s|r<<a|n,ju=e}function ut(e){null!==e.return&&(lt(e,1),ct(e,1,0))}function dt(e){for(;e===bu;)bu=mu[--gu],mu[gu]=null,vu=mu[--gu],mu[gu]=null
for(;e===wu;)wu=yu[--xu],yu[xu]=null,ju=yu[--xu],yu[xu]=null,ku=yu[--xu],yu[xu]=null}function pt(e,t){yu[xu++]=ku,yu[xu++]=ju,yu[xu++]=wu,ku=t.id,ju=t.overflow,wu=e}function ft(t,r){throw yt(ot(Error(e(418,1<arguments.length&&void 0!==r&&r?"text":"HTML","")),t)),Cu}function ht(e){var t=e.stateNode,r=e.type,n=e.memoizedProps
switch(t[Il]=e,t[zl]=n,r){case"dialog":ui("cancel",t),ui("close",t)
break
case"iframe":case"object":case"embed":ui("load",t)
break
case"video":case"audio":for(r=0;r<kp.length;r++)ui(kp[r],t)
break
case"source":ui("error",t)
break
case"img":case"image":case"link":ui("error",t),ui("load",t)
break
case"details":ui("toggle",t)
break
case"input":ui("invalid",t),ee(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0)
break
case"select":ui("invalid",t)
break
case"textarea":ui("invalid",t),ae(t,n.value,n.defaultValue,n.children)}"string"!=typeof(r=n.children)&&"number"!=typeof r&&"bigint"!=typeof r||t.textContent===""+r||!0===n.suppressHydrationWarning||xi(t.textContent,r)?(null!=n.popover&&(ui("beforetoggle",t),ui("toggle",t)),null!=n.onScroll&&ui("scroll",t),null!=n.onScrollEnd&&ui("scrollend",t),null!=n.onClick&&(t.onclick=ue),t=!0):t=!1,t||ft(e,!0)}function mt(e){for(Su=e.return;Su;)switch(Su.tag){case 5:case 31:case 13:return void(Tu=!1)
case 27:case 3:return void(Tu=!0)
default:Su=Su.return}}function gt(t){if(t!==Su)return!1
if(!Nu)return mt(t),Nu=!0,!1
var r,n=t.tag
if((r=3!==n&&27!==n)&&((r=5===n)&&(r=!("form"!==(r=t.type)&&"button"!==r)||Ti(t.type,t.memoizedProps)),r=!r),r&&_u&&ft(t),mt(t),13===n){if(!(t=null!==(t=t.memoizedState)?t.dehydrated:null))throw Error(e(317))
_u=Ui(t)}else if(31===n){if(!(t=null!==(t=t.memoizedState)?t.dehydrated:null))throw Error(e(317))
_u=Ui(t)}else 27===n?(n=_u,Ri(t.type)?(t=Ip,Ip=null,_u=t):_u=n):_u=Su?Di(t.stateNode.nextSibling):null
return!0}function bt(){_u=Su=null,Nu=!1}function vt(){var e=Eu
return null!==e&&(null===Zd?Zd=e:Zd.push.apply(Zd,e),Eu=null),e}function yt(e){null===Eu?Eu=[e]:Eu.push(e)}function xt(e,t,r){d(Ru,t._currentValue),t._currentValue=r}function wt(e){e._currentValue=Ru.current,u(Ru)}function kt(e,t,r){for(;null!==e;){var n=e.alternate
if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break
e=e.return}}function jt(t,r,n,a){var s=t.child
for(null!==s&&(s.return=t);null!==s;){var i=s.dependencies
if(null!==i){var o=s.child
i=i.firstContext
e:for(;null!==i;){var l=i
i=s
for(var c=0;c<r.length;c++)if(l.context===r[c]){i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),kt(i.return,n,t),a||(o=null)
break e}i=l.next}}else if(18===s.tag){if(null===(o=s.return))throw Error(e(341))
o.lanes|=n,null!==(i=o.alternate)&&(i.lanes|=n),kt(o,n,t),o=null}else o=s.child
if(null!==o)o.return=s
else for(o=s;null!==o;){if(o===t){o=null
break}if(null!==(s=o.sibling)){s.return=o.return,o=s
break}o=o.return}s=o}}function St(t,r,n,a){t=null
for(var s=r,i=!1;null!==s;){if(!i)if(524288&s.flags)i=!0
else if(262144&s.flags)break
if(10===s.tag){var o=s.alternate
if(null===o)throw Error(e(387))
if(null!==(o=o.memoizedProps)){var l=s.type
Mc(s.pendingProps.value,o.value)||(null!==t?t.push(l):t=[l])}}else if(s===cl.current){if(null===(o=s.alternate))throw Error(e(387))
o.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(null!==t?t.push(Wp):t=[Wp])}s=s.return}null!==t&&jt(r,t,n,a),r.flags|=262144}function _t(e){for(e=e.firstContext;null!==e;){if(!Mc(e.context._currentValue,e.memoizedValue))return!0
e=e.next}return!1}function Nt(e){Pu=e,Au=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Et(e){return Ct(Pu,e)}function Tt(e,t){return null===Pu&&Nt(e),Ct(e,t)}function Ct(t,r){var n=r._currentValue
if(r={context:r,memoizedValue:n,next:null},null===Au){if(null===t)throw Error(e(308))
Au=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Au=Au.next=r
return n}function Rt(){return{controller:new Ou,data:new Map,refCount:0}}function Pt(e){e.refCount--,0===e.refCount&&Iu(zu,function(){e.controller.abort()})}function At(){if(0===--Uu&&null!==Du){null!==Fu&&(Fu.status="fulfilled")
var e=Du
Du=null,$u=0,Fu=null
for(var t=0;t<e.length;t++)(0,e[t])()}}function Ot(){var e=Wu.current
return null!==e?e:Ld.pooledCache}function It(e,t){d(Wu,null===t?Wu.current:t.pool)}function zt(){var e=Ot()
return null===e?null:{parent:Lu._currentValue,pool:e}}function Lt(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Dt(t,r,n){switch(void 0===(n=t[n])?t.push(r):n!==r&&(r.then(ue,ue),r=n),r.status){case"fulfilled":return r.value
case"rejected":throw Ft(t=r.reason),t
default:if("string"==typeof r.status)r.then(ue,ue)
else{if(null!==(t=Ld)&&100<t.shellSuspendCounter)throw Error(e(482));(t=r).status="pending",t.then(function(e){if("pending"===r.status){var t=r
t.status="fulfilled",t.value=e}},function(e){if("pending"===r.status){var t=r
t.status="rejected",t.reason=e}})}switch(r.status){case"fulfilled":return r.value
case"rejected":throw Ft(t=r.reason),t}throw Ku=r,Vu}}function Ut(e){try{return(0,e._init)(e._payload)}catch(t){if(null!==t&&"object"==typeof t&&"function"==typeof t.then)throw Ku=t,Vu
throw t}}function $t(){if(null===Ku)throw Error(e(459))
var t=Ku
return Ku=null,t}function Ft(t){if(t===Vu||t===Mu)throw Error(e(483))}function Bt(e){var t=Gu
return Gu+=1,null===Yu&&(Yu=[]),Dt(Yu,e,t)}function Wt(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Vt(t,r){if(r.$$typeof===Do)throw Error(e(525))
throw t=Object.prototype.toString.call(r),Error(e(31,"[object Object]"===t?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function qt(t){function r(e,r){if(t){var n=e.deletions
null===n?(e.deletions=[r],e.flags|=16):n.push(r)}}function n(e,n){if(!t)return null
for(;null!==n;)r(e,n),n=n.sibling
return null}function a(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling
return t}function s(e,t){return(e=et(e,t)).index=0,e.sibling=null,e}function i(e,r,n){return e.index=n,t?null!==(n=e.alternate)?(n=n.index)<r?(e.flags|=67108866,r):n:(e.flags|=67108866,r):(e.flags|=1048576,r)}function l(e){return t&&null===e.alternate&&(e.flags|=67108866),e}function c(e,t,r,n){return null===t||6!==t.tag?((t=at(r,e.mode,n)).return=e,t):((t=s(t,r)).return=e,t)}function u(e,t,r,n){var a=r.type
return a===Fo?p(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===Go&&Ut(a)===t.type)?(Wt(t=s(t,r.props),r),t.return=e,t):(Wt(t=rt(r.type,r.key,r.props,null,e.mode,n),r),t.return=e,t)}function d(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=it(r,e.mode,n)).return=e,t):((t=s(t,r.children||[])).return=e,t)}function p(e,t,r,n,a){return null===t||7!==t.tag?((t=nt(r,e.mode,n,a)).return=e,t):((t=s(t,r)).return=e,t)}function f(e,t,r){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=at(""+t,e.mode,r)).return=e,t
if("object"==typeof t&&null!==t){switch(t.$$typeof){case Uo:return Wt(r=rt(t.type,t.key,t.props,null,e.mode,r),t),r.return=e,r
case $o:return(t=it(t,e.mode,r)).return=e,t
case Go:return f(e,t=Ut(t),r)}if(el(t)||o(t))return(t=nt(t,e.mode,r,null)).return=e,t
if("function"==typeof t.then)return f(e,Bt(t),r)
if(t.$$typeof===qo)return f(e,Tt(e,t),r)
Vt(e,t)}return null}function h(e,t,r,n){var a=null!==t?t.key:null
if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return null!==a?null:c(e,t,""+r,n)
if("object"==typeof r&&null!==r){switch(r.$$typeof){case Uo:return r.key===a?u(e,t,r,n):null
case $o:return r.key===a?d(e,t,r,n):null
case Go:return h(e,t,r=Ut(r),n)}if(el(r)||o(r))return null!==a?null:p(e,t,r,n,null)
if("function"==typeof r.then)return h(e,t,Bt(r),n)
if(r.$$typeof===qo)return h(e,t,Tt(e,r),n)
Vt(e,r)}return null}function m(e,t,r,n,a){if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return c(t,e=e.get(r)||null,""+n,a)
if("object"==typeof n&&null!==n){switch(n.$$typeof){case Uo:return u(t,e=e.get(null===n.key?r:n.key)||null,n,a)
case $o:return d(t,e=e.get(null===n.key?r:n.key)||null,n,a)
case Go:return m(e,t,r,n=Ut(n),a)}if(el(n)||o(n))return p(t,e=e.get(r)||null,n,a,null)
if("function"==typeof n.then)return m(e,t,r,Bt(n),a)
if(n.$$typeof===qo)return m(e,t,r,Tt(t,n),a)
Vt(t,n)}return null}function g(c,u,d,p){if("object"==typeof d&&null!==d&&d.type===Fo&&null===d.key&&(d=d.props.children),"object"==typeof d&&null!==d){switch(d.$$typeof){case Uo:e:{for(var b=d.key;null!==u;){if(u.key===b){if((b=d.type)===Fo){if(7===u.tag){n(c,u.sibling),(p=s(u,d.props.children)).return=c,c=p
break e}}else if(u.elementType===b||"object"==typeof b&&null!==b&&b.$$typeof===Go&&Ut(b)===u.type){n(c,u.sibling),Wt(p=s(u,d.props),d),p.return=c,c=p
break e}n(c,u)
break}r(c,u),u=u.sibling}d.type===Fo?((p=nt(d.props.children,c.mode,p,d.key)).return=c,c=p):(Wt(p=rt(d.type,d.key,d.props,null,c.mode,p),d),p.return=c,c=p)}return l(c)
case $o:e:{for(b=d.key;null!==u;){if(u.key===b){if(4===u.tag&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(c,u.sibling),(p=s(u,d.children||[])).return=c,c=p
break e}n(c,u)
break}r(c,u),u=u.sibling}(p=it(d,c.mode,p)).return=c,c=p}return l(c)
case Go:return g(c,u,d=Ut(d),p)}if(el(d))return function(e,s,o,l){for(var c=null,u=null,d=s,p=s=0,g=null;null!==d&&p<o.length;p++){d.index>p?(g=d,d=null):g=d.sibling
var b=h(e,d,o[p],l)
if(null===b){null===d&&(d=g)
break}t&&d&&null===b.alternate&&r(e,d),s=i(b,s,p),null===u?c=b:u.sibling=b,u=b,d=g}if(p===o.length)return n(e,d),Nu&&lt(e,p),c
if(null===d){for(;p<o.length;p++)null!==(d=f(e,o[p],l))&&(s=i(d,s,p),null===u?c=d:u.sibling=d,u=d)
return Nu&&lt(e,p),c}for(d=a(d);p<o.length;p++)null!==(g=m(d,e,p,o[p],l))&&(t&&null!==g.alternate&&d.delete(null===g.key?p:g.key),s=i(g,s,p),null===u?c=g:u.sibling=g,u=g)
return t&&d.forEach(function(t){return r(e,t)}),Nu&&lt(e,p),c}(c,u,d,p)
if(o(d)){if("function"!=typeof(b=o(d)))throw Error(e(150))
return function(s,o,l,c){if(null==l)throw Error(e(151))
for(var u=null,d=null,p=o,g=o=0,b=null,v=l.next();null!==p&&!v.done;g++,v=l.next()){p.index>g?(b=p,p=null):b=p.sibling
var y=h(s,p,v.value,c)
if(null===y){null===p&&(p=b)
break}t&&p&&null===y.alternate&&r(s,p),o=i(y,o,g),null===d?u=y:d.sibling=y,d=y,p=b}if(v.done)return n(s,p),Nu&&lt(s,g),u
if(null===p){for(;!v.done;g++,v=l.next())null!==(v=f(s,v.value,c))&&(o=i(v,o,g),null===d?u=v:d.sibling=v,d=v)
return Nu&&lt(s,g),u}for(p=a(p);!v.done;g++,v=l.next())null!==(v=m(p,s,g,v.value,c))&&(t&&null!==v.alternate&&p.delete(null===v.key?g:v.key),o=i(v,o,g),null===d?u=v:d.sibling=v,d=v)
return t&&p.forEach(function(e){return r(s,e)}),Nu&&lt(s,g),u}(c,u,d=b.call(d),p)}if("function"==typeof d.then)return g(c,u,Bt(d),p)
if(d.$$typeof===qo)return g(c,u,Tt(c,d),p)
Vt(c,d)}return"string"==typeof d&&""!==d||"number"==typeof d||"bigint"==typeof d?(d=""+d,null!==u&&6===u.tag?(n(c,u.sibling),(p=s(u,d)).return=c,c=p):(n(c,u),(p=at(d,c.mode,p)).return=c,c=p),l(c)):n(c,u)}return function(e,t,r,n){try{Gu=0
var a=g(e,t,r,n)
return Yu=null,a}catch(i){if(i===Vu||i===Mu)throw i
var s=Ze(29,i,null,e.mode)
return s.lanes=n,s.return=e,s}}}function Mt(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ht(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,r){var n=e.updateQueue
if(null===n)return null
if(n=n.shared,2&zd){var a=n.pending
return null===a?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=Je(e),Ge(e,null,r),t}return He(e,n,t,r),Je(e)}function Gt(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,4194048&r)){var n=t.lanes
r|=n&=e.pendingLanes,t.lanes=r,R(e,r)}}function Jt(e,t){var r=e.updateQueue,n=e.alternate
if(null!==n&&r===(n=n.updateQueue)){var a=null,s=null
if(null!==(r=r.firstBaseUpdate)){do{var i={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null}
null===s?a=s=i:s=s.next=i,r=r.next}while(null!==r)
null===s?a=s=t:s=s.next=t}else a=s=t
return r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Xt(){if(Qu&&null!==Fu)throw Fu}function Zt(e,t,r,n){Qu=!1
var a=e.updateQueue
Zu=!1
var s=a.firstBaseUpdate,i=a.lastBaseUpdate,o=a.shared.pending
if(null!==o){a.shared.pending=null
var l=o,c=l.next
l.next=null,null===i?s=c:i.next=c,i=l
var u=e.alternate
null!==u&&(o=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===o?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l)}if(null!==s){var d=a.baseState
for(i=0,u=c=l=null,o=s;;){var p=-536870913&o.lane,f=p!==o.lane
if(f?(Ud&p)===p:(n&p)===p){0!==p&&p===$u&&(Qu=!0),null!==u&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null})
e:{var h=e,m=o
p=t
var g=r
switch(m.tag){case 1:if("function"==typeof(h=m.payload)){d=h.call(g,d,p)
break e}d=h
break e
case 3:h.flags=-65537&h.flags|128
case 0:if(null==(p="function"==typeof(h=m.payload)?h.call(g,d,p):h))break e
d=Lo({},d,p)
break e
case 2:Zu=!0}}null!==(p=o.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=a.callbacks)?a.callbacks=[p]:f.push(p))}else f={lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,i|=p
if(null===(o=o.next)){if(null===(o=a.shared.pending))break
o=(f=o).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}null===u&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===s&&(a.shared.lanes=0),Hd|=i,e.lanes=i,e.memoizedState=d}}function Qt(t,r){if("function"!=typeof t)throw Error(e(191,t))
t.call(r)}function er(e,t){var r=e.callbacks
if(null!==r)for(e.callbacks=null,e=0;e<r.length;e++)Qt(r[e],t)}function tr(e,t){d(td,e=qd),d(ed,t),qd=e|t.baseLanes}function rr(){d(td,qd),d(ed,ed.current)}function nr(){qd=td.current,u(ed),u(td)}function ar(e){var t=e.alternate
d(ad,1&ad.current),d(rd,e),null===nd&&(null===t||null!==ed.current||null!==t.memoizedState)&&(nd=e)}function sr(e){d(ad,ad.current),d(rd,e),null===nd&&(nd=e)}function ir(e){22===e.tag?(d(ad,ad.current),d(rd,e),null===nd&&(nd=e)):or()}function or(){d(ad,ad.current),d(rd,rd.current)}function lr(e){u(rd),nd===e&&(nd=null),u(ad)}function cr(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState
if(null!==r&&(null===(r=r.dehydrated)||zi(r)||Li(r)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child
continue}}else if(128&t.flags)return t
if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return null
t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ur(){throw Error(e(321))}function dr(e,t){if(null===t)return!1
for(var r=0;r<t.length&&r<e.length;r++)if(!Mc(e[r],t[r]))return!1
return!0}function pr(e,t,r,n,a,s){return sd=s,id=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,tl.H=null===e||null===e.memoizedState?bd:vd,dd=!1,s=r(n,a),dd=!1,ud&&(s=hr(t,r,n,a)),fr(e),s}function fr(t){tl.H=gd
var r=null!==od&&null!==od.next
if(sd=0,ld=od=id=null,cd=!1,fd=0,hd=null,r)throw Error(e(300))
null===t||kd||null!==(t=t.dependencies)&&_t(t)&&(kd=!0)}function hr(t,r,n,a){id=t
var s=0
do{if(ud&&(hd=null),fd=0,ud=!1,25<=s)throw Error(e(301))
if(s+=1,ld=od=null,null!=t.updateQueue){var i=t.updateQueue
i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}tl.H=yd,i=r(n,a)}while(ud)
return i}function mr(){var e=tl.H,t=e.useState()[0]
return t="function"==typeof t.then?wr(t):t,e=e.useState()[0],(null!==od?od.memoizedState:null)!==e&&(id.flags|=1024),t}function gr(){var e=0!==pd
return pd=0,e}function br(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function vr(e){if(cd){for(e=e.memoizedState;null!==e;){var t=e.queue
null!==t&&(t.pending=null),e=e.next}cd=!1}sd=0,ld=od=id=null,ud=!1,fd=pd=0,hd=null}function yr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
return null===ld?id.memoizedState=ld=e:ld=ld.next=e,ld}function xr(){if(null===od){var t=id.alternate
t=null!==t?t.memoizedState:null}else t=od.next
var r=null===ld?id.memoizedState:ld.next
if(null!==r)ld=r,od=t
else{if(null===t){if(null===id.alternate)throw Error(e(467))
throw Error(e(310))}t={memoizedState:(od=t).memoizedState,baseState:od.baseState,baseQueue:od.baseQueue,queue:od.queue,next:null},null===ld?id.memoizedState=ld=t:ld=ld.next=t}return ld}function wr(e){var t=fd
return fd+=1,null===hd&&(hd=[]),e=Dt(hd,e,t),t=id,null===(null===ld?t.memoizedState:ld.next)&&(t=t.alternate,tl.H=null===t||null===t.memoizedState?bd:vd),e}function kr(t){if(null!==t&&"object"==typeof t){if("function"==typeof t.then)return wr(t)
if(t.$$typeof===qo)return Et(t)}throw Error(e(438,String(t)))}function jr(e){var t=null,r=id.updateQueue
if(null!==r&&(t=r.memoCache),null==t){var n=id.alternate
null!==n&&null!==(n=n.updateQueue)&&null!=(n=n.memoCache)&&(t={data:n.data.map(function(e){return e.slice()}),index:0})}if(null==t&&(t={data:[],index:0}),null===r&&(r={lastEffect:null,events:null,stores:null,memoCache:null},id.updateQueue=r),r.memoCache=t,void 0===(r=t.data[t.index]))for(r=t.data[t.index]=Array(e),n=0;n<e;n++)r[n]=Xo
return t.index++,r}function Sr(e,t){return"function"==typeof t?t(e):t}function _r(e){return Nr(xr(),od,e)}function Nr(t,r,n){var a=t.queue
if(null===a)throw Error(e(311))
a.lastRenderedReducer=n
var s=t.baseQueue,i=a.pending
if(null!==i){if(null!==s){var o=s.next
s.next=i.next,i.next=o}r.baseQueue=s=i,a.pending=null}if(i=t.baseState,null===s)t.memoizedState=i
else{var l=o=null,c=null,u=r=s.next,d=!1
do{var p=-536870913&u.lane
if(p!==u.lane?(Ud&p)===p:(sd&p)===p){var f=u.revertLane
if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===$u&&(d=!0)
else{if((sd&f)===f){u=u.next,f===$u&&(d=!0)
continue}p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,o=i):c=c.next=p,id.lanes|=f,Hd|=f}p=u.action,dd&&n(i,p),i=u.hasEagerState?u.eagerState:n(i,p)}else f={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=f,o=i):c=c.next=f,id.lanes|=p,Hd|=p
u=u.next}while(null!==u&&u!==r)
if(null===c?o=i:c.next=l,!Mc(i,t.memoizedState)&&(kd=!0,d&&null!==(n=Fu)))throw n
t.memoizedState=i,t.baseState=o,t.baseQueue=c,a.lastRenderedState=i}return null===s&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Er(t){var r=xr(),n=r.queue
if(null===n)throw Error(e(311))
n.lastRenderedReducer=t
var a=n.dispatch,s=n.pending,i=r.memoizedState
if(null!==s){n.pending=null
var o=s=s.next
do{i=t(i,o.action),o=o.next}while(o!==s)
Mc(i,r.memoizedState)||(kd=!0),r.memoizedState=i,null===r.baseQueue&&(r.baseState=i),n.lastRenderedState=i}return[i,a]}function Tr(t,r,n){var a=id,s=xr(),i=Nu
if(i){if(void 0===n)throw Error(e(407))
n=n()}else n=r()
var o=!Mc((od||s).memoizedState,n)
if(o&&(s.memoizedState=n,kd=!0),s=s.queue,Qr(Pr.bind(null,a,s,t),[t]),s.getSnapshot!==r||o||null!==ld&&1&ld.memoizedState.tag){if(a.flags|=2048,Yr(9,{destroy:void 0},Rr.bind(null,a,s,n,r),null),null===Ld)throw Error(e(349))
i||127&sd||Cr(a,r,n)}return n}function Cr(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=id.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},id.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function Rr(e,t,r,n){t.value=r,t.getSnapshot=n,Ar(t)&&Or(e)}function Pr(e,t,r){return r(function(){Ar(t)&&Or(e)})}function Ar(e){var t=e.getSnapshot
e=e.value
try{var r=t()
return!Mc(e,r)}catch(n){return!0}}function Or(e){var t=Ye(e,2)
null!==t&&vs(t,0,2)}function Ir(e){var t=yr()
if("function"==typeof e){var r=e
if(e=r(),dd){x(!0)
try{r()}finally{x(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},t}function zr(e,t,r,n){return e.baseState=r,Nr(e,od,"function"==typeof n?n:Sr)}function Lr(t,r,n,a,s){if(In(t))throw Error(e(485))
if(null!==(t=r.action)){var i={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}}
null!==tl.T?n(!0):i.isTransition=!1,a(i),null===(n=r.pending)?(i.next=r.pending=i,Dr(r,i)):(i.next=n.next,r.pending=n.next=i)}}function Dr(e,t){var r=t.action,n=t.payload,a=e.state
if(t.isTransition){var s=tl.T,i={}
tl.T=i
try{var o=r(a,n),l=tl.S
null!==l&&l(i,o),Ur(e,t,o)}catch(c){Fr(e,t,c)}finally{null!==s&&null!==i.types&&(s.types=i.types),tl.T=s}}else try{Ur(e,t,s=r(a,n))}catch(u){Fr(e,t,u)}}function Ur(e,t,r){null!==r&&"object"==typeof r&&"function"==typeof r.then?r.then(function(r){$r(e,t,r)},function(r){return Fr(e,t,r)}):$r(e,t,r)}function $r(e,t,r){t.status="fulfilled",t.value=r,Br(t),e.state=r,null!==(t=e.pending)&&((r=t.next)===t?e.pending=null:(r=r.next,t.next=r,Dr(e,r)))}function Fr(e,t,r){var n=e.pending
if(e.pending=null,null!==n){n=n.next
do{t.status="rejected",t.reason=r,Br(t),t=t.next}while(t!==n)}e.action=null}function Br(e){e=e.listeners
for(var t=0;t<e.length;t++)(0,e[t])()}function Wr(e,t){return t}function Vr(e,t){if(Nu){var r=Ld.formState
if(null!==r){e:{var n=id
if(Nu){if(_u){t:{for(var a=_u,s=Tu;8!==a.nodeType;){if(!s){a=null
break t}if(null===(a=Di(a.nextSibling))){a=null
break t}}a="F!"===(s=a.data)||"F"===s?a:null}if(a){_u=Di(a.nextSibling),n="F!"===a.data
break e}}ft(n)}n=!1}n&&(t=r[0])}}return(r=yr()).memoizedState=r.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:t},r.queue=n,r=Pn.bind(null,id,n),n.dispatch=r,n=Ir(!1),s=On.bind(null,id,!1,n.queue),a={state:t,dispatch:null,action:e,pending:null},(n=yr()).queue=a,r=Lr.bind(null,id,a,s,r),a.dispatch=r,n.memoizedState=e,[t,r,!1]}function qr(e){return Mr(xr(),od,e)}function Mr(e,t,r){if(t=Nr(e,t,Wr)[0],e=_r(Sr)[0],"object"==typeof t&&null!==t&&"function"==typeof t.then)try{var n=wr(t)}catch(i){if(i===Vu)throw Mu
throw i}else n=t
var a=(t=xr()).queue,s=a.dispatch
return r!==t.memoizedState&&(id.flags|=2048,Yr(9,{destroy:void 0},Hr.bind(null,a,r),null)),[n,s,e]}function Hr(e,t){e.action=t}function Kr(e){var t=xr(),r=od
if(null!==r)return Mr(t,r,e)
xr(),t=t.memoizedState
var n=(r=xr()).queue.dispatch
return r.memoizedState=e,[t,n,!1]}function Yr(e,t,r,n){return e={tag:e,create:r,deps:n,inst:t,next:null},null===(t=id.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},id.updateQueue=t),null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function Gr(){return xr().memoizedState}function Jr(e,t,r,n){var a=yr()
id.flags|=e,a.memoizedState=Yr(1|t,{destroy:void 0},r,void 0===n?null:n)}function Xr(e,t,r,n){var a=xr()
n=void 0===n?null:n
var s=a.memoizedState.inst
null!==od&&null!==n&&dr(n,od.memoizedState.deps)?a.memoizedState=Yr(t,s,r,n):(id.flags|=e,a.memoizedState=Yr(1|t,s,r,n))}function Zr(e,t){Jr(8390656,8,e,t)}function Qr(e,t){Xr(2048,8,e,t)}function en(t){var r=xr().memoizedState
return function(e){id.flags|=4
var t=id.updateQueue
if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},id.updateQueue=t,t.events=[e]
else{var r=t.events
null===r?t.events=[e]:r.push(e)}}({ref:r,nextImpl:t}),function(){if(2&zd)throw Error(e(440))
return r.impl.apply(void 0,arguments)}}function tn(e,t){return Xr(4,2,e,t)}function rn(e,t){return Xr(4,4,e,t)}function nn(e,t){if("function"==typeof t){e=e()
var r=t(e)
return function(){"function"==typeof r?r():t(null)}}if(null!=t)return e=e(),t.current=e,function(){t.current=null}}function an(e,t,r){r=null!=r?r.concat([e]):null,Xr(4,4,nn.bind(null,t,e),r)}function dn(){}function pn(e,t){var r=xr()
t=void 0===t?null:t
var n=r.memoizedState
return null!==t&&dr(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function fn(e,t){var r=xr()
t=void 0===t?null:t
var n=r.memoizedState
if(null!==t&&dr(t,n[1]))return n[0]
if(n=e(),dd){x(!0)
try{e()}finally{x(!1)}}return r.memoizedState=[n,t],n}function hn(e,t,r){return void 0===r||1073741824&sd&&!(261930&Ud)?e.memoizedState=t:(e.memoizedState=r,e=bs(),id.lanes|=e,Hd|=e,r)}function mn(e,t,r,n){return Mc(r,t)?r:null!==ed.current?(e=hn(e,r,n),Mc(e,t)||(kd=!0),e):42&sd&&(!(1073741824&sd)||261930&Ud)?(e=bs(),id.lanes|=e,Hd|=e,t):(kd=!0,e.memoizedState=r)}function gn(e,t,r,n,a){var s=rl.p
rl.p=0!==s&&8>s?s:8
var i=tl.T,o={}
tl.T=o,On(e,!1,t,r)
try{var l=a(),c=tl.S
null!==c&&c(o,l),null!==l&&"object"==typeof l&&"function"==typeof l.then?An(e,t,function(e,t){var r=[],n={status:"pending",value:null,reason:null,then:function(e){r.push(e)}}
return e.then(function(){n.status="fulfilled",n.value=t
for(var e=0;e<r.length;e++)(0,r[e])(t)},function(e){for(n.status="rejected",n.reason=e,e=0;e<r.length;e++)(0,r[e])(void 0)}),n}(l,n),gs()):An(e,t,n,gs())}catch(u){An(e,t,{then:function(){},status:"rejected",reason:u},gs())}finally{rl.p=s,null!==i&&null!==o.types&&(i.types=o.types),tl.T=i}}function bn(){}function vn(t,r,n,a){if(5!==t.tag)throw Error(e(476))
var s=Sn(t).queue
gn(t,s,r,nl,null===n?bn:function(){return _n(t),n(a)})}function Sn(e){var t=e.memoizedState
if(null!==t)return t
var r={}
return(t={memoizedState:nl,baseState:nl,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:nl},next:null}).next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:r},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function _n(e){var t=Sn(e)
null===t.next&&(t=e.alternate.memoizedState),An(e,t.next.queue,{},gs())}function Nn(){return Et(Wp)}function En(){return xr().memoizedState}function Tn(){return xr().memoizedState}function Cn(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var r=gs(),n=Yt(t,e=Kt(r),r)
return null!==n&&(vs(n,0,r),Gt(n,t,r)),t={cache:Rt()},void(e.payload=t)}t=t.return}}function Rn(e,t,r){var n=gs()
r={lane:n,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},In(e)?zn(t,r):null!==(r=Ke(e,t,r,n))&&(vs(r,0,n),Ln(r,t,n))}function Pn(e,t,r){An(e,t,r,gs())}function An(e,t,r,n){var a={lane:n,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null}
if(In(e))zn(t,a)
else{var s=e.alternate
if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var i=t.lastRenderedState,o=s(i,r)
if(a.hasEagerState=!0,a.eagerState=o,Mc(o,i))return He(e,t,a,0),null===Ld&&Me(),!1}catch(l){}if(null!==(r=Ke(e,t,a,n)))return vs(r,0,n),Ln(r,t,n),!0}return!1}function On(t,r,n,a){if(a={lane:2,revertLane:ii(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},In(t)){if(r)throw Error(e(479))}else null!==(r=Ke(t,n,a,2))&&vs(r,0,2)}function In(e){var t=e.alternate
return e===id||null!==t&&t===id}function zn(e,t){ud=cd=!0
var r=e.pending
null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ln(e,t,r){if(4194048&r){var n=t.lanes
r|=n&=e.pendingLanes,t.lanes=r,R(e,r)}}function Dn(e,t,r,n){r=null==(r=r(n,t=e.memoizedState))?t:Lo({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}function Un(e,t,r,n,a,s,i){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,s,i):!(t.prototype&&t.prototype.isPureReactComponent&&ze(r,n)&&ze(a,s))}function $n(e,t,r,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&xd.enqueueReplaceState(t,t.state,null)}function Fn(e,t){var r=t
if("ref"in t)for(var n in r={},t)"ref"!==n&&(r[n]=t[n])
if(e=e.defaultProps)for(var a in r===t&&(r=Lo({},r)),e)void 0===r[a]&&(r[a]=e[a])
return r}function Bn(e){cu(e)}function Wn(){}function Vn(e){cu(e)}function qn(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Mn(e,t,r){try{(0,e.onCaughtError)(r.value,{componentStack:r.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Hn(e,t,r){return(r=Kt(r)).tag=3,r.payload={element:null},r.callback=function(){qn(e,t)},r}function Kn(e){return(e=Kt(e)).tag=3,e}function Yn(e,t,r,n){var a=r.type.getDerivedStateFromError
if("function"==typeof a){var s=n.value
e.payload=function(){return a(s)},e.callback=function(){Mn(t,r,n)}}var i=r.stateNode
null!==i&&"function"==typeof i.componentDidCatch&&(e.callback=function(){Mn(t,r,n),"function"!=typeof a&&(null===ap?ap=new Set([this]):ap.add(this))
var e=n.stack
this.componentDidCatch(n.value,{componentStack:null!==e?e:""})})}function Gn(e,t,r,n){t.child=null===e?Xu(t,null,r,n):Ju(t,e.child,r,n)}function Jn(e,t,r,n,a){r=r.render
var s=t.ref
if("ref"in n){var i={}
for(var o in n)"ref"!==o&&(i[o]=n[o])}else i=n
return Nt(t),n=pr(e,t,r,i,s,a),o=gr(),null===e||kd?(Nu&&o&&ut(t),t.flags|=1,Gn(e,t,n,a),t.child):(br(e,t,a),va(e,t,a))}function Xn(e,t,r,n,a){if(null===e){var s=r.type
return"function"!=typeof s||Qe(s)||void 0!==s.defaultProps||null!==r.compare?((e=rt(r.type,null,n,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Zn(e,t,s,n,a))}if(s=e.child,!ya(e,a)){var i=s.memoizedProps
if((r=null!==(r=r.compare)?r:ze)(i,n)&&e.ref===t.ref)return va(e,t,a)}return t.flags|=1,(e=et(s,n)).ref=t.ref,e.return=t,t.child=e}function Zn(e,t,r,n,a){if(null!==e){var s=e.memoizedProps
if(ze(s,n)&&e.ref===t.ref){if(kd=!1,t.pendingProps=n=s,!ya(e,a))return t.lanes=e.lanes,va(e,t,a)
131072&e.flags&&(kd=!0)}}return sa(e,t,r,n,a)}function Qn(e,t,r,n){var a=n.children,s=null!==e?e.memoizedState:null
if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===n.mode){if(128&t.flags){if(s=null!==s?s.baseLanes|r:r,null!==e){for(n=t.child=e.child,a=0;null!==n;)a=a|n.lanes|n.childLanes,n=n.sibling
n=a&~s}else n=0,t.child=null
return ta(e,t,s,r,n)}if(!(536870912&r))return n=t.lanes=536870912,ta(e,t,null!==s?s.baseLanes|r:r,r,n)
t.memoizedState={baseLanes:0,cachePool:null},null!==e&&It(0,null!==s?s.cachePool:null),null!==s?tr(t,s):rr(),ir(t)}else null!==s?(It(0,s.cachePool),tr(t,s),or(),t.memoizedState=null):(null!==e&&It(0,null),rr(),or())
return Gn(e,t,a,r),t.child}function ea(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ta(e,t,r,n,a){var s=Ot()
return s=null===s?null:{parent:Lu._currentValue,pool:s},t.memoizedState={baseLanes:r,cachePool:s},null!==e&&It(0,null),rr(),ir(t),null!==e&&St(e,t,n,!0),t.childLanes=a,null}function ra(e,t){return(t=fa({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function na(e,t,r){return Ju(t,e.child,null,r),(e=ra(t,t.pendingProps)).flags|=2,lr(t),t.memoizedState=null,e}function aa(t,r){var n=r.ref
if(null===n)null!==t&&null!==t.ref&&(r.flags|=4194816)
else{if("function"!=typeof n&&"object"!=typeof n)throw Error(e(284))
null!==t&&t.ref===n||(r.flags|=4194816)}}function sa(e,t,r,n,a){return Nt(t),r=pr(e,t,r,n,void 0,a),n=gr(),null===e||kd?(Nu&&n&&ut(t),t.flags|=1,Gn(e,t,r,a),t.child):(br(e,t,a),va(e,t,a))}function ia(e,t,r,n,a,s){return Nt(t),t.updateQueue=null,r=hr(t,n,r,a),fr(e),n=gr(),null===e||kd?(Nu&&n&&ut(t),t.flags|=1,Gn(e,t,r,s),t.child):(br(e,t,s),va(e,t,s))}function oa(e,t,r,n,a){if(Nt(t),null===t.stateNode){var s=fu,i=r.contextType
"object"==typeof i&&null!==i&&(s=Et(i)),s=new r(n,s),t.memoizedState=null!==s.state&&void 0!==s.state?s.state:null,s.updater=xd,t.stateNode=s,s._reactInternals=t,(s=t.stateNode).props=n,s.state=t.memoizedState,s.refs={},Mt(t),i=r.contextType,s.context="object"==typeof i&&null!==i?Et(i):fu,s.state=t.memoizedState,"function"==typeof(i=r.getDerivedStateFromProps)&&(Dn(t,r,i,n),s.state=t.memoizedState),"function"==typeof r.getDerivedStateFromProps||"function"==typeof s.getSnapshotBeforeUpdate||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||(i=s.state,"function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount(),i!==s.state&&xd.enqueueReplaceState(s,s.state,null),Zt(t,n,s,a),Xt(),s.state=t.memoizedState),"function"==typeof s.componentDidMount&&(t.flags|=4194308),n=!0}else if(null===e){s=t.stateNode
var o=t.memoizedProps,l=Fn(r,o)
s.props=l
var c=s.context,u=r.contextType
i=fu,"object"==typeof u&&null!==u&&(i=Et(u))
var d=r.getDerivedStateFromProps
u="function"==typeof d||"function"==typeof s.getSnapshotBeforeUpdate,o=t.pendingProps!==o,u||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(o||c!==i)&&$n(t,s,n,i),Zu=!1
var p=t.memoizedState
s.state=p,Zt(t,n,s,a),Xt(),c=t.memoizedState,o||p!==c||Zu?("function"==typeof d&&(Dn(t,r,d,n),c=t.memoizedState),(l=Zu||Un(t,r,l,n,p,c,i))?(u||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4194308)):("function"==typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),s.props=n,s.state=c,s.context=i,n=l):("function"==typeof s.componentDidMount&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Ht(e,t),u=Fn(r,i=t.memoizedProps),s.props=u,d=t.pendingProps,p=s.context,c=r.contextType,l=fu,"object"==typeof c&&null!==c&&(l=Et(c)),(c="function"==typeof(o=r.getDerivedStateFromProps)||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(i!==d||p!==l)&&$n(t,s,n,l),Zu=!1,p=t.memoizedState,s.state=p,Zt(t,n,s,a),Xt()
var f=t.memoizedState
i!==d||p!==f||Zu||null!==e&&null!==e.dependencies&&_t(e.dependencies)?("function"==typeof o&&(Dn(t,r,o,n),f=t.memoizedState),(u=Zu||Un(t,r,u,n,p,f,l)||null!==e&&null!==e.dependencies&&_t(e.dependencies))?(c||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(n,f,l),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(n,f,l)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof s.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=f),s.props=n,s.state=f,s.context=l,n=u):("function"!=typeof s.componentDidUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,aa(e,t),n=!!(128&t.flags),s||n?(s=t.stateNode,r=n&&"function"!=typeof r.getDerivedStateFromError?null:s.render(),t.flags|=1,null!==e&&n?(t.child=Ju(t,e.child,null,a),t.child=Ju(t,null,r,a)):Gn(e,t,r,a),t.memoizedState=s.state,e=t.child):e=va(e,t,a),e}function la(e,t,r,n){return bt(),t.flags|=256,Gn(e,t,r,n),t.child}function ca(e){return{baseLanes:e,cachePool:zt()}}function ua(e,t,r){return e=null!==e?e.childLanes&~r:0,t&&(e|=Gd),e}function da(t,r,n){var a,s=r.pendingProps,i=!1,o=!!(128&r.flags)
if((a=o)||(a=(null===t||null!==t.memoizedState)&&!!(2&ad.current)),a&&(i=!0,r.flags&=-129),a=!!(32&r.flags),r.flags&=-33,null===t){if(Nu){if(i?ar(r):or(),(t=_u)?null!==(t=null!==(t=Ii(t,Tu))&&"&"!==t.data?t:null)&&(r.memoizedState={dehydrated:t,treeContext:null!==wu?{id:ku,overflow:ju}:null,retryLane:536870912,hydrationErrors:null},(n=st(t)).return=r,r.child=n,Su=r,_u=null):t=null,null===t)throw ft(r)
return Li(t)?r.lanes=32:r.lanes=536870912,null}var l=s.children
return s=s.fallback,i?(or(),l=fa({mode:"hidden",children:l},i=r.mode),s=nt(s,i,n,null),l.return=r,s.return=r,l.sibling=s,r.child=l,(s=r.child).memoizedState=ca(n),s.childLanes=ua(t,a,n),r.memoizedState=jd,ea(null,s)):(ar(r),pa(r,l))}var c=t.memoizedState
if(null!==c&&null!==(l=c.dehydrated)){if(o)256&r.flags?(ar(r),r.flags&=-257,r=ha(t,r,n)):null!==r.memoizedState?(or(),r.child=t.child,r.flags|=128,r=null):(or(),l=s.fallback,i=r.mode,s=fa({mode:"visible",children:s.children},i),(l=nt(l,i,n,null)).flags|=2,s.return=r,l.return=r,s.sibling=l,r.child=s,Ju(r,t.child,null,n),(s=r.child).memoizedState=ca(n),s.childLanes=ua(t,a,n),r.memoizedState=jd,r=ea(null,s))
else if(ar(r),Li(l)){if(a=l.nextSibling&&l.nextSibling.dataset)var u=a.dgst
a=u,(s=Error(e(419))).stack="",s.digest=a,yt({value:s,source:null,stack:null}),r=ha(t,r,n)}else if(kd||St(t,r,n,!1),a=0!==(n&t.childLanes),kd||a){if(null!==(a=Ld)&&0!==(s=P(a,n))&&s!==c.retryLane)throw c.retryLane=s,Ye(t,s),vs(a,0,s),wd
zi(l)||Rs(),r=ha(t,r,n)}else zi(l)?(r.flags|=192,r.child=t.child,r=null):(t=c.treeContext,_u=Di(l.nextSibling),Su=r,Nu=!0,Eu=null,Tu=!1,null!==t&&pt(r,t),(r=pa(r,s.children)).flags|=4096)
return r}return i?(or(),l=s.fallback,i=r.mode,u=(c=t.child).sibling,(s=et(c,{mode:"hidden",children:s.children})).subtreeFlags=65011712&c.subtreeFlags,null!==u?l=et(u,l):(l=nt(l,i,n,null)).flags|=2,l.return=r,s.return=r,s.sibling=l,r.child=s,ea(null,s),s=r.child,null===(l=t.child.memoizedState)?l=ca(n):(null!==(i=l.cachePool)?(c=Lu._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=zt(),l={baseLanes:l.baseLanes|n,cachePool:i}),s.memoizedState=l,s.childLanes=ua(t,a,n),r.memoizedState=jd,ea(t.child,s)):(ar(r),t=(n=t.child).sibling,(n=et(n,{mode:"visible",children:s.children})).return=r,n.sibling=null,null!==t&&(null===(a=r.deletions)?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=n,r.memoizedState=null,n)}function pa(e,t){return(t=fa({mode:"visible",children:t},e.mode)).return=e,e.child=t}function fa(e,t){return(e=Ze(22,e,null,t)).lanes=0,e}function ha(e,t,r){return Ju(t,e.child,null,r),(e=pa(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ma(e,t,r){e.lanes|=t
var n=e.alternate
null!==n&&(n.lanes|=t),kt(e.return,t,r)}function ga(e,t,r,n,a,s){var i=e.memoizedState
null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a,treeForkCount:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=a,i.treeForkCount=s)}function ba(e,t,r){var n=t.pendingProps,a=n.revealOrder,s=n.tail
n=n.children
var i=ad.current,o=!!(2&i)
if(o?(i=1&i|2,t.flags|=128):i&=1,d(ad,i),Gn(e,t,n,r),n=Nu?vu:0,!o&&null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ma(e,r,t)
else if(19===e.tag)ma(e,r,t)
else if(null!==e.child){e.child.return=e,e=e.child
continue}if(e===t)break e
for(;null===e.sibling;){if(null===e.return||e.return===t)break e
e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(r=t.child,a=null;null!==r;)null!==(e=r.alternate)&&null===cr(e)&&(a=r),r=r.sibling
null===(r=a)?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),ga(t,!1,a,r,s,n)
break
case"backwards":case"unstable_legacy-backwards":for(r=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===cr(e)){t.child=a
break}e=a.sibling,a.sibling=r,r=a,a=e}ga(t,!0,r,null,s,n)
break
case"together":ga(t,!1,null,null,void 0,n)
break
default:t.memoizedState=null}return t.child}function va(t,r,n){if(null!==t&&(r.dependencies=t.dependencies),Hd|=r.lanes,0===(n&r.childLanes)){if(null===t)return null
if(St(t,r,n,!1),0===(n&r.childLanes))return null}if(null!==t&&r.child!==t.child)throw Error(e(153))
if(null!==r.child){for(n=et(t=r.child,t.pendingProps),r.child=n,n.return=r;null!==t.sibling;)t=t.sibling,(n=n.sibling=et(t,t.pendingProps)).return=r
n.sibling=null}return r.child}function ya(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!_t(e))}function xa(t,r,n){if(null!==t)if(t.memoizedProps!==r.pendingProps)kd=!0
else{if(!(ya(t,n)||128&r.flags))return kd=!1,function(e,t,r){switch(t.tag){case 3:p(t,t.stateNode.containerInfo),xt(0,Lu,e.memoizedState.cache),bt()
break
case 27:case 5:h(t)
break
case 4:p(t,t.stateNode.containerInfo)
break
case 10:xt(0,t.type,t.memoizedProps.value)
break
case 31:if(null!==t.memoizedState)return t.flags|=128,sr(t),null
break
case 13:var n=t.memoizedState
if(null!==n)return null!==n.dehydrated?(ar(t),t.flags|=128,null):0!==(r&t.child.childLanes)?da(e,t,r):(ar(t),null!==(e=va(e,t,r))?e.sibling:null)
ar(t)
break
case 19:var a=!!(128&e.flags)
if((n=0!==(r&t.childLanes))||(St(e,t,r,!1),n=0!==(r&t.childLanes)),a){if(n)return ba(e,t,r)
t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),d(ad,ad.current),n)break
return null
case 22:return t.lanes=0,Qn(e,t,r,t.pendingProps)
case 24:xt(0,Lu,e.memoizedState.cache)}return va(e,t,r)}(t,r,n)
kd=!!(131072&t.flags)}else kd=!1,Nu&&1048576&r.flags&&ct(r,vu,r.index)
switch(r.lanes=0,r.tag){case 16:e:{var a=r.pendingProps
if(t=Ut(r.elementType),r.type=t,"function"!=typeof t){if(null!=t){var s=t.$$typeof
if(s===Mo){r.tag=11,r=Jn(null,r,t,a,n)
break e}if(s===Yo){r.tag=14,r=Xn(null,r,t,a,n)
break e}}throw r=l(t)||t,Error(e(306,r,""))}Qe(t)?(a=Fn(t,a),r.tag=1,r=oa(null,r,t,a,n)):(r.tag=0,r=sa(null,r,t,a,n))}return r
case 0:return sa(t,r,r.type,r.pendingProps,n)
case 1:return oa(t,r,a=r.type,s=Fn(a,r.pendingProps),n)
case 3:e:{if(p(r,r.stateNode.containerInfo),null===t)throw Error(e(387))
a=r.pendingProps
var i=r.memoizedState
s=i.element,Ht(t,r),Zt(r,a,null,n)
var o=r.memoizedState
if(a=o.cache,xt(0,Lu,a),a!==i.cache&&jt(r,[Lu],n,!0),Xt(),a=o.element,i.isDehydrated){if(i={element:a,isDehydrated:!1,cache:o.cache},r.updateQueue.baseState=i,r.memoizedState=i,256&r.flags){r=la(t,r,a,n)
break e}if(a!==s){yt(s=ot(Error(e(424)),r)),r=la(t,r,a,n)
break e}for(t=9===(t=r.stateNode.containerInfo).nodeType?t.body:"HTML"===t.nodeName?t.ownerDocument.body:t,_u=Di(t.firstChild),Su=r,Nu=!0,Eu=null,Tu=!0,n=Xu(r,null,a,n),r.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(bt(),a===s){r=va(t,r,n)
break e}Gn(t,r,a,n)}r=r.child}return r
case 26:return aa(t,r),null===t?(n=qi(r.type,null,r.pendingProps,null))?r.memoizedState=n:Nu||(n=r.type,t=r.pendingProps,(a=_i(ll.current).createElement(n))[Il]=r,a[zl]=t,ji(a,n,t),B(a),r.stateNode=a):r.memoizedState=qi(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null
case 27:return h(r),null===t&&Nu&&(a=r.stateNode=Fi(r.type,r.pendingProps,ll.current),Su=r,Tu=!0,s=_u,Ri(r.type)?(Ip=s,_u=Di(a.firstChild)):_u=s),Gn(t,r,r.pendingProps.children,n),aa(t,r),null===t&&(r.flags|=4194304),r.child
case 5:return null===t&&Nu&&((s=a=_u)&&(null!==(a=function(e,t,r,n){for(;1===e.nodeType;){var a=r
if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(n){if(!e[Bl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break
return e
case"link":if("stylesheet"===(s=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break
if(s!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break
return e
case"style":if(e.hasAttribute("data-precedence"))break
return e
case"script":if(((s=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break
return e
default:return e}}else{if("input"!==t||"hidden"!==e.type)return e
var s=null==a.name?null:""+a.name
if("hidden"===a.type&&e.getAttribute("name")===s)return e}if(null===(e=Di(e.nextSibling)))break}return null}(a,r.type,r.pendingProps,Tu))?(r.stateNode=a,Su=r,_u=Di(a.firstChild),Tu=!1,s=!0):s=!1),s||ft(r)),h(r),s=r.type,i=r.pendingProps,o=null!==t?t.memoizedProps:null,a=i.children,Ti(s,i)?a=null:null!==o&&Ti(s,o)&&(r.flags|=32),null!==r.memoizedState&&(s=pr(t,r,mr,null,null,n),Wp._currentValue=s),aa(t,r),Gn(t,r,a,n),r.child
case 6:return null===t&&Nu&&((t=n=_u)&&(null!==(n=function(e,t,r){if(""===t)return null
for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!r)return null
if(null===(e=Di(e.nextSibling)))return null}return e}(n,r.pendingProps,Tu))?(r.stateNode=n,Su=r,_u=null,t=!0):t=!1),t||ft(r)),null
case 13:return da(t,r,n)
case 4:return p(r,r.stateNode.containerInfo),a=r.pendingProps,null===t?r.child=Ju(r,null,a,n):Gn(t,r,a,n),r.child
case 11:return Jn(t,r,r.type,r.pendingProps,n)
case 7:return Gn(t,r,r.pendingProps,n),r.child
case 8:case 12:return Gn(t,r,r.pendingProps.children,n),r.child
case 10:return a=r.pendingProps,xt(0,r.type,a.value),Gn(t,r,a.children,n),r.child
case 9:return s=r.type._context,a=r.pendingProps.children,Nt(r),a=a(s=Et(s)),r.flags|=1,Gn(t,r,a,n),r.child
case 14:return Xn(t,r,r.type,r.pendingProps,n)
case 15:return Zn(t,r,r.type,r.pendingProps,n)
case 19:return ba(t,r,n)
case 31:return function(t,r,n){var a=r.pendingProps,s=!!(128&r.flags)
if(r.flags&=-129,null===t){if(Nu){if("hidden"===a.mode)return t=ra(r,a),r.lanes=536870912,ea(null,t)
if(sr(r),(t=_u)?null!==(t=null!==(t=Ii(t,Tu))&&"&"===t.data?t:null)&&(r.memoizedState={dehydrated:t,treeContext:null!==wu?{id:ku,overflow:ju}:null,retryLane:536870912,hydrationErrors:null},(n=st(t)).return=r,r.child=n,Su=r,_u=null):t=null,null===t)throw ft(r)
return r.lanes=536870912,null}return ra(r,a)}var i=t.memoizedState
if(null!==i){var o=i.dehydrated
if(sr(r),s)if(256&r.flags)r.flags&=-257,r=na(t,r,n)
else{if(null===r.memoizedState)throw Error(e(558))
r.child=t.child,r.flags|=128,r=null}else if(kd||St(t,r,n,!1),s=0!==(n&t.childLanes),kd||s){if(null!==(a=Ld)&&0!==(o=P(a,n))&&o!==i.retryLane)throw i.retryLane=o,Ye(t,o),vs(a,0,o),wd
Rs(),r=na(t,r,n)}else t=i.treeContext,_u=Di(o.nextSibling),Su=r,Nu=!0,Eu=null,Tu=!1,null!==t&&pt(r,t),(r=ra(r,a)).flags|=4096
return r}return(t=et(t.child,{mode:a.mode,children:a.children})).ref=r.ref,r.child=t,t.return=r,t}(t,r,n)
case 22:return Qn(t,r,n,r.pendingProps)
case 24:return Nt(r),a=Et(Lu),null===t?(null===(s=Ot())&&(s=Ld,i=Rt(),s.pooledCache=i,i.refCount++,null!==i&&(s.pooledCacheLanes|=n),s=i),r.memoizedState={parent:a,cache:s},Mt(r),xt(0,Lu,s)):(0!==(t.lanes&n)&&(Ht(t,r),Zt(r,null,null,n),Xt()),s=t.memoizedState,i=r.memoizedState,s.parent!==a?(s={parent:a,cache:a},r.memoizedState=s,0===r.lanes&&(r.memoizedState=r.updateQueue.baseState=s),xt(0,Lu,a)):(a=i.cache,xt(0,Lu,a),a!==s.cache&&jt(r,[Lu],n,!0))),Gn(t,r,r.pendingProps.children,n),r.child
case 29:throw r.pendingProps}throw Error(e(156,r.tag))}function wa(e){e.flags|=4}function ka(e,t,r,n,a){if((t=!!(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192
else{if(!Es())throw Ku=Hu,qu
e.flags|=8192}}else e.flags&=-16777217}function ja(e,t){if("stylesheet"!==t.type||4&t.state.loading)e.flags&=-16777217
else if(e.flags|=16777216,!ro(t)){if(!Es())throw Ku=Hu,qu
e.flags|=8192}}function Sa(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?N():536870912,e.lanes|=t,Jd|=t)}function _a(e,t){if(!Nu)switch(e.tailMode){case"hidden":t=e.tail
for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling
null===r?e.tail=null:r.sibling=null
break
case"collapsed":r=e.tail
for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling
null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Na(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0
if(t)for(var a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=65011712&a.subtreeFlags,n|=65011712&a.flags,a.return=e,a=a.sibling
else for(a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling
return e.subtreeFlags|=n,e.childLanes=r,t}function Ea(t,r,n){var a=r.pendingProps
switch(dt(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Na(r),null
case 3:return n=r.stateNode,a=null,null!==t&&(a=t.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),wt(Lu),f(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==t&&null!==t.child||(gt(r)?wa(r):null===t||t.memoizedState.isDehydrated&&!(256&r.flags)||(r.flags|=1024,vt())),Na(r),null
case 26:var s=r.type,i=r.memoizedState
return null===t?(wa(r),null!==i?(Na(r),ja(r,i)):(Na(r),ka(r,s,0,0,n))):i?i!==t.memoizedState?(wa(r),Na(r),ja(r,i)):(Na(r),r.flags&=-16777217):((t=t.memoizedProps)!==a&&wa(r),Na(r),ka(r,s,0,0,n)),null
case 27:if(m(r),n=ll.current,s=r.type,null!==t&&null!=r.stateNode)t.memoizedProps!==a&&wa(r)
else{if(!a){if(null===r.stateNode)throw Error(e(166))
return Na(r),null}t=il.current,gt(r)?ht(r):(t=Fi(s,a,n),r.stateNode=t,wa(r))}return Na(r),null
case 5:if(m(r),s=r.type,null!==t&&null!=r.stateNode)t.memoizedProps!==a&&wa(r)
else{if(!a){if(null===r.stateNode)throw Error(e(166))
return Na(r),null}if(i=il.current,gt(r))ht(r)
else{var o=_i(ll.current)
switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",s)
break
case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",s)
break
default:switch(s){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",s)
break
case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",s)
break
case"script":(i=o.createElement("div")).innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)
break
case"select":i="string"==typeof a.is?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size)
break
default:i="string"==typeof a.is?o.createElement(s,{is:a.is}):o.createElement(s)}}i[Il]=r,i[zl]=a
e:for(o=r.child;null!==o;){if(5===o.tag||6===o.tag)i.appendChild(o.stateNode)
else if(4!==o.tag&&27!==o.tag&&null!==o.child){o.child.return=o,o=o.child
continue}if(o===r)break e
for(;null===o.sibling;){if(null===o.return||o.return===r)break e
o=o.return}o.sibling.return=o.return,o=o.sibling}r.stateNode=i
e:switch(ji(i,s,a),s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus
break e
case"img":a=!0
break e
default:a=!1}a&&wa(r)}}return Na(r),ka(r,r.type,null===t||t.memoizedProps,r.pendingProps,n),null
case 6:if(t&&null!=r.stateNode)t.memoizedProps!==a&&wa(r)
else{if("string"!=typeof a&&null===r.stateNode)throw Error(e(166))
if(t=ll.current,gt(r)){if(t=r.stateNode,n=r.memoizedProps,a=null,null!==(s=Su))switch(s.tag){case 27:case 5:a=s.memoizedProps}t[Il]=r,(t=!!(t.nodeValue===n||null!==a&&!0===a.suppressHydrationWarning||xi(t.nodeValue,n)))||ft(r,!0)}else(t=_i(t).createTextNode(a))[Il]=r,r.stateNode=t}return Na(r),null
case 31:if(n=r.memoizedState,null===t||null!==t.memoizedState){if(a=gt(r),null!==n){if(null===t){if(!a)throw Error(e(318))
if(!(t=null!==(t=r.memoizedState)?t.dehydrated:null))throw Error(e(557))
t[Il]=r}else bt(),!(128&r.flags)&&(r.memoizedState=null),r.flags|=4
Na(r),t=!1}else n=vt(),null!==t&&null!==t.memoizedState&&(t.memoizedState.hydrationErrors=n),t=!0
if(!t)return 256&r.flags?(lr(r),r):(lr(r),null)
if(128&r.flags)throw Error(e(558))}return Na(r),null
case 13:if(a=r.memoizedState,null===t||null!==t.memoizedState&&null!==t.memoizedState.dehydrated){if(s=gt(r),null!==a&&null!==a.dehydrated){if(null===t){if(!s)throw Error(e(318))
if(!(s=null!==(s=r.memoizedState)?s.dehydrated:null))throw Error(e(317))
s[Il]=r}else bt(),!(128&r.flags)&&(r.memoizedState=null),r.flags|=4
Na(r),s=!1}else s=vt(),null!==t&&null!==t.memoizedState&&(t.memoizedState.hydrationErrors=s),s=!0
if(!s)return 256&r.flags?(lr(r),r):(lr(r),null)}return lr(r),128&r.flags?(r.lanes=n,r):(n=null!==a,t=null!==t&&null!==t.memoizedState,n&&(s=null,null!==(a=r.child).alternate&&null!==a.alternate.memoizedState&&null!==a.alternate.memoizedState.cachePool&&(s=a.alternate.memoizedState.cachePool.pool),i=null,null!==a.memoizedState&&null!==a.memoizedState.cachePool&&(i=a.memoizedState.cachePool.pool),i!==s&&(a.flags|=2048)),n!==t&&n&&(r.child.flags|=8192),Sa(r,r.updateQueue),Na(r),null)
case 4:return f(),null===t&&pi(r.stateNode.containerInfo),Na(r),null
case 10:return wt(r.type),Na(r),null
case 19:if(u(ad),null===(a=r.memoizedState))return Na(r),null
if(s=!!(128&r.flags),null===(i=a.rendering))if(s)_a(a,!1)
else{if(0!==Md||null!==t&&128&t.flags)for(t=r.child;null!==t;){if(null!==(i=cr(t))){for(r.flags|=128,_a(a,!1),t=i.updateQueue,r.updateQueue=t,Sa(r,t),r.subtreeFlags=0,t=n,n=r.child;null!==n;)tt(n,t),n=n.sibling
return d(ad,1&ad.current|2),Nu&&lt(r,a.treeForkCount),r.child}t=t.sibling}null!==a.tail&&gl()>rp&&(r.flags|=128,s=!0,_a(a,!1),r.lanes=4194304)}else{if(!s)if(null!==(t=cr(i))){if(r.flags|=128,s=!0,t=t.updateQueue,r.updateQueue=t,Sa(r,t),_a(a,!0),null===a.tail&&"hidden"===a.tailMode&&!i.alternate&&!Nu)return Na(r),null}else 2*gl()-a.renderingStartTime>rp&&536870912!==n&&(r.flags|=128,s=!0,_a(a,!1),r.lanes=4194304)
a.isBackwards?(i.sibling=r.child,r.child=i):(null!==(t=a.last)?t.sibling=i:r.child=i,a.last=i)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=gl(),t.sibling=null,n=ad.current,d(ad,s?1&n|2:1&n),Nu&&lt(r,a.treeForkCount),t):(Na(r),null)
case 22:case 23:return lr(r),nr(),a=null!==r.memoizedState,null!==t?null!==t.memoizedState!==a&&(r.flags|=8192):a&&(r.flags|=8192),a?!!(536870912&n)&&!(128&r.flags)&&(Na(r),6&r.subtreeFlags&&(r.flags|=8192)):Na(r),null!==(n=r.updateQueue)&&Sa(r,n.retryQueue),n=null,null!==t&&null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(n=t.memoizedState.cachePool.pool),a=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(a=r.memoizedState.cachePool.pool),a!==n&&(r.flags|=2048),null!==t&&u(Wu),null
case 24:return n=null,null!==t&&(n=t.memoizedState.cache),r.memoizedState.cache!==n&&(r.flags|=2048),wt(Lu),Na(r),null
case 25:case 30:return null}throw Error(e(156,r.tag))}function Ta(t,r){switch(dt(r),r.tag){case 1:return 65536&(t=r.flags)?(r.flags=-65537&t|128,r):null
case 3:return wt(Lu),f(),65536&(t=r.flags)&&!(128&t)?(r.flags=-65537&t|128,r):null
case 26:case 27:case 5:return m(r),null
case 31:if(null!==r.memoizedState){if(lr(r),null===r.alternate)throw Error(e(340))
bt()}return 65536&(t=r.flags)?(r.flags=-65537&t|128,r):null
case 13:if(lr(r),null!==(t=r.memoizedState)&&null!==t.dehydrated){if(null===r.alternate)throw Error(e(340))
bt()}return 65536&(t=r.flags)?(r.flags=-65537&t|128,r):null
case 19:return u(ad),null
case 4:return f(),null
case 10:return wt(r.type),null
case 22:case 23:return lr(r),nr(),null!==t&&u(Wu),65536&(t=r.flags)?(r.flags=-65537&t|128,r):null
case 24:return wt(Lu),null
default:return null}}function Ca(e,t){switch(dt(t),t.tag){case 3:wt(Lu),f()
break
case 26:case 27:case 5:m(t)
break
case 4:f()
break
case 31:null!==t.memoizedState&&lr(t)
break
case 13:lr(t)
break
case 19:u(ad)
break
case 10:wt(t.type)
break
case 22:case 23:lr(t),nr(),null!==e&&u(Wu)
break
case 24:wt(Lu)}}function Ra(e,t){try{var r=t.updateQueue,n=null!==r?r.lastEffect:null
if(null!==n){var a=n.next
r=a
do{if((r.tag&e)===e){n=void 0
var s=r.create,i=r.inst
n=s(),i.destroy=n}r=r.next}while(r!==a)}}catch(o){Ks(t,t.return,o)}}function Pa(e,t,r){try{var n=t.updateQueue,a=null!==n?n.lastEffect:null
if(null!==a){var s=a.next
n=s
do{if((n.tag&e)===e){var i=n.inst,o=i.destroy
if(void 0!==o){i.destroy=void 0,a=t
var l=r,c=o
try{c()}catch(u){Ks(a,l,u)}}}n=n.next}while(n!==s)}}catch(u){Ks(t,t.return,u)}}function Aa(e){var t=e.updateQueue
if(null!==t){var r=e.stateNode
try{er(t,r)}catch(n){Ks(e,e.return,n)}}}function Oa(e,t,r){r.props=Fn(e.type,e.memoizedProps),r.state=e.memoizedState
try{r.componentWillUnmount()}catch(n){Ks(e,t,n)}}function Ia(e,t){try{var r=e.ref
if(null!==r){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode
break
default:n=e.stateNode}"function"==typeof r?e.refCleanup=r(n):r.current=n}}catch(a){Ks(e,t,a)}}function za(e,t){var r=e.ref,n=e.refCleanup
if(null!==r)if("function"==typeof n)try{n()}catch(a){Ks(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof r)try{r(null)}catch(s){Ks(e,t,s)}else r.current=null}function La(e){var t=e.type,r=e.memoizedProps,n=e.stateNode
try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&n.focus()
break e
case"img":r.src?n.src=r.src:r.srcSet&&(n.srcset=r.srcSet)}}catch(a){Ks(e,e.return,a)}}function Da(t,r,n){try{var a=t.stateNode
!function(t,r,n,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"input":var s=null,i=null,o=null,l=null,c=null,u=null,d=null
for(h in n){var p=n[h]
if(n.hasOwnProperty(h)&&null!=p)switch(h){case"checked":case"value":break
case"defaultValue":c=p
default:a.hasOwnProperty(h)||wi(t,r,h,null,a,p)}}for(var f in a){var h=a[f]
if(p=n[f],a.hasOwnProperty(f)&&(null!=h||null!=p))switch(f){case"type":i=h
break
case"name":s=h
break
case"checked":u=h
break
case"defaultChecked":d=h
break
case"value":o=h
break
case"defaultValue":l=h
break
case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(e(137,r))
break
default:h!==p&&wi(t,r,f,h,a,p)}}return void Q(t,o,l,c,u,d,i,s)
case"select":for(i in h=o=l=f=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break
case"multiple":h=c
default:a.hasOwnProperty(i)||wi(t,r,i,null,a,c)}for(s in a)if(i=a[s],c=n[s],a.hasOwnProperty(s)&&(null!=i||null!=c))switch(s){case"value":f=i
break
case"defaultValue":l=i
break
case"multiple":o=i
default:i!==c&&wi(t,r,s,i,a,c)}return r=l,n=o,a=h,void(null!=f?re(t,!!n,f,!1):!!a!=!!n&&(null!=r?re(t,!!n,r,!0):re(t,!!n,n?[]:"",!1)))
case"textarea":for(l in h=f=null,n)if(s=n[l],n.hasOwnProperty(l)&&null!=s&&!a.hasOwnProperty(l))switch(l){case"value":case"children":break
default:wi(t,r,l,null,a,s)}for(o in a)if(s=a[o],i=n[o],a.hasOwnProperty(o)&&(null!=s||null!=i))switch(o){case"value":f=s
break
case"defaultValue":h=s
break
case"children":break
case"dangerouslySetInnerHTML":if(null!=s)throw Error(e(91))
break
default:s!==i&&wi(t,r,o,s,a,i)}return void ne(t,f,h)
case"option":for(var m in n)f=n[m],n.hasOwnProperty(m)&&null!=f&&!a.hasOwnProperty(m)&&("selected"===m?t.selected=!1:wi(t,r,m,null,a,f))
for(c in a)f=a[c],h=n[c],!a.hasOwnProperty(c)||f===h||null==f&&null==h||("selected"===c?t.selected=f&&"function"!=typeof f&&"symbol"!=typeof f:wi(t,r,c,f,a,h))
return
case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!a.hasOwnProperty(g)&&wi(t,r,g,null,a,f)
for(u in a)if(f=a[u],h=n[u],a.hasOwnProperty(u)&&f!==h&&(null!=f||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(e(137,r))
break
default:wi(t,r,u,f,a,h)}return
default:if(le(r)){for(var b in n)f=n[b],n.hasOwnProperty(b)&&void 0!==f&&!a.hasOwnProperty(b)&&ki(t,r,b,void 0,a,f)
for(d in a)f=a[d],h=n[d],!a.hasOwnProperty(d)||f===h||void 0===f&&void 0===h||ki(t,r,d,f,a,h)
return}}for(var v in n)f=n[v],n.hasOwnProperty(v)&&null!=f&&!a.hasOwnProperty(v)&&wi(t,r,v,null,a,f)
for(p in a)f=a[p],h=n[p],!a.hasOwnProperty(p)||f===h||null==f&&null==h||wi(t,r,p,f,a,h)}(a,t.type,n,r),a[zl]=r}catch(s){Ks(t,t.return,s)}}function Ua(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Ri(e.type)||4===e.tag}function $a(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Ua(e.return))return null
e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Ri(e.type))continue e
if(2&e.flags)continue e
if(null===e.child||4===e.tag)continue e
e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Fa(e,t,r){var n=e.tag
if(5===n||6===n)e=e.stateNode,t?(9===r.nodeType?r.body:"HTML"===r.nodeName?r.ownerDocument.body:r).insertBefore(e,t):((t=9===r.nodeType?r.body:"HTML"===r.nodeName?r.ownerDocument.body:r).appendChild(e),null!=(r=r._reactRootContainer)||null!==t.onclick||(t.onclick=ue))
else if(4!==n&&(27===n&&Ri(e.type)&&(r=e.stateNode,t=null),null!==(e=e.child)))for(Fa(e,t,r),e=e.sibling;null!==e;)Fa(e,t,r),e=e.sibling}function Ba(e,t,r){var n=e.tag
if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e)
else if(4!==n&&(27===n&&Ri(e.type)&&(r=e.stateNode),null!==(e=e.child)))for(Ba(e,t,r),e=e.sibling;null!==e;)Ba(e,t,r),e=e.sibling}function Wa(e){var t=e.stateNode,r=e.memoizedProps
try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0])
ji(t,n,r),t[Il]=e,t[zl]=r}catch(s){Ks(e,e.return,s)}}function Va(e,t,r){var n=r.flags
switch(r.tag){case 0:case 11:case 15:es(e,r),4&n&&Ra(5,r)
break
case 1:if(es(e,r),4&n)if(e=r.stateNode,null===t)try{e.componentDidMount()}catch(i){Ks(r,r.return,i)}else{var a=Fn(r.type,t.memoizedProps)
t=t.memoizedState
try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ks(r,r.return,o)}}64&n&&Aa(r),512&n&&Ia(r,r.return)
break
case 3:if(es(e,r),64&n&&null!==(e=r.updateQueue)){if(t=null,null!==r.child)switch(r.child.tag){case 27:case 5:case 1:t=r.child.stateNode}try{er(e,t)}catch(i){Ks(r,r.return,i)}}break
case 27:null===t&&4&n&&Wa(r)
case 26:case 5:es(e,r),null===t&&4&n&&La(r),512&n&&Ia(r,r.return)
break
case 12:es(e,r)
break
case 31:es(e,r),4&n&&Ka(e,r)
break
case 13:es(e,r),4&n&&Ya(e,r),64&n&&null!==(e=r.memoizedState)&&null!==(e=e.dehydrated)&&function(e,t){var r=e.ownerDocument
if("$~"===e.data)e._reactRetry=t
else if("$?"!==e.data||"loading"!==r.readyState)t()
else{var n=function(){t(),r.removeEventListener("DOMContentLoaded",n)}
r.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}(e,r=Xs.bind(null,r))
break
case 22:if(!(n=null!==r.memoizedState||Sd)){t=null!==t&&null!==t.memoizedState||_d,a=Sd
var s=_d
Sd=n,(_d=t)&&!s?rs(e,r,!!(8772&r.subtreeFlags)):es(e,r),Sd=a,_d=s}break
case 30:break
default:es(e,r)}}function qa(e){var t=e.alternate
null!==t&&(e.alternate=null,qa(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&L(t),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ma(e,t,r){for(r=r.child;null!==r;)Ha(e,t,r),r=r.sibling}function Ha(e,t,r){if(Nl&&"function"==typeof Nl.onCommitFiberUnmount)try{Nl.onCommitFiberUnmount(_l,r)}catch(s){}switch(r.tag){case 26:_d||za(r,t),Ma(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode).parentNode.removeChild(r)
break
case 27:_d||za(r,t)
var n=Cd,a=Rd
Ri(r.type)&&(Cd=r.stateNode,Rd=!1),Ma(e,t,r),Bi(r.stateNode),Cd=n,Rd=a
break
case 5:_d||za(r,t)
case 6:if(n=Cd,a=Rd,Cd=null,Ma(e,t,r),Rd=a,null!==(Cd=n))if(Rd)try{(9===Cd.nodeType?Cd.body:"HTML"===Cd.nodeName?Cd.ownerDocument.body:Cd).removeChild(r.stateNode)}catch(i){Ks(r,t,i)}else try{Cd.removeChild(r.stateNode)}catch(i){Ks(r,t,i)}break
case 18:null!==Cd&&(Rd?(Pi(9===(e=Cd).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,r.stateNode),Co(e)):Pi(Cd,r.stateNode))
break
case 4:n=Cd,a=Rd,Cd=r.stateNode.containerInfo,Rd=!0,Ma(e,t,r),Cd=n,Rd=a
break
case 0:case 11:case 14:case 15:Pa(2,r,t),_d||Pa(4,r,t),Ma(e,t,r)
break
case 1:_d||(za(r,t),"function"==typeof(n=r.stateNode).componentWillUnmount&&Oa(r,t,n)),Ma(e,t,r)
break
case 21:Ma(e,t,r)
break
case 22:_d=(n=_d)||null!==r.memoizedState,Ma(e,t,r),_d=n
break
default:Ma(e,t,r)}}function Ka(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)){e=e.dehydrated
try{Co(e)}catch(r){Ks(t,t.return,r)}}}function Ya(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))try{Co(e)}catch(r){Ks(t,t.return,r)}}function Ga(t,r){var n=function(t){switch(t.tag){case 31:case 13:case 19:var r=t.stateNode
return null===r&&(r=t.stateNode=new Ed),r
case 22:return null===(r=(t=t.stateNode)._retryCache)&&(r=t._retryCache=new Ed),r
default:throw Error(e(435,t.tag))}}(t)
r.forEach(function(e){if(!n.has(e)){n.add(e)
var r=Zs.bind(null,t,e)
e.then(r,r)}})}function Ja(t,r){var n=r.deletions
if(null!==n)for(var a=0;a<n.length;a++){var s=n[a],i=t,o=r,l=o
e:for(;null!==l;){switch(l.tag){case 27:if(Ri(l.type)){Cd=l.stateNode,Rd=!1
break e}break
case 5:Cd=l.stateNode,Rd=!1
break e
case 3:case 4:Cd=l.stateNode.containerInfo,Rd=!0
break e}l=l.return}if(null===Cd)throw Error(e(160))
Ha(i,o,s),Cd=null,Rd=!1,null!==(i=s.alternate)&&(i.return=null),s.return=null}if(13886&r.subtreeFlags)for(r=r.child;null!==r;)Xa(r,t),r=r.sibling}function Xa(t,r){var n=t.alternate,a=t.flags
switch(t.tag){case 0:case 11:case 14:case 15:Ja(r,t),Za(t),4&a&&(Pa(3,t,t.return),Ra(3,t),Pa(5,t,t.return))
break
case 1:Ja(r,t),Za(t),512&a&&(_d||null===n||za(n,n.return)),64&a&&Sd&&null!==(t=t.updateQueue)&&null!==(a=t.callbacks)&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=null===n?a:n.concat(a))
break
case 26:var s=Pd
if(Ja(r,t),Za(t),512&a&&(_d||null===n||za(n,n.return)),4&a){var i=null!==n?n.memoizedState:null
if(a=t.memoizedState,null===n)if(null===a)if(null===t.stateNode){e:{a=t.type,n=t.memoizedProps,s=s.ownerDocument||s
t:switch(a){case"title":(!(i=s.getElementsByTagName("title")[0])||i[Bl]||i[Il]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=s.createElement(a),s.head.insertBefore(i,s.querySelector("head > title"))),ji(i,a,n),i[Il]=t,B(i),a=i
break e
case"link":var o=eo("link","href",s).get(a+(n.href||""))
if(o)for(var l=0;l<o.length;l++)if((i=o[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){o.splice(l,1)
break t}ji(i=s.createElement(a),a,n),s.head.appendChild(i)
break
case"meta":if(o=eo("meta","content",s).get(a+(n.content||"")))for(l=0;l<o.length;l++)if((i=o[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){o.splice(l,1)
break t}ji(i=s.createElement(a),a,n),s.head.appendChild(i)
break
default:throw Error(e(468,a))}i[Il]=t,B(i),a=i}t.stateNode=a}else to(s,t.type,t.stateNode)
else t.stateNode=Ji(s,a,t.memoizedProps)
else i!==a?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===a?to(s,t.type,t.stateNode):Ji(s,a,t.memoizedProps)):null===a&&null!==t.stateNode&&Da(t,t.memoizedProps,n.memoizedProps)}break
case 27:Ja(r,t),Za(t),512&a&&(_d||null===n||za(n,n.return)),null!==n&&4&a&&Da(t,t.memoizedProps,n.memoizedProps)
break
case 5:if(Ja(r,t),Za(t),512&a&&(_d||null===n||za(n,n.return)),32&t.flags){s=t.stateNode
try{se(s,"")}catch(m){Ks(t,t.return,m)}}4&a&&null!=t.stateNode&&Da(t,s=t.memoizedProps,null!==n?n.memoizedProps:s),1024&a&&(Nd=!0)
break
case 6:if(Ja(r,t),Za(t),4&a){if(null===t.stateNode)throw Error(e(162))
a=t.memoizedProps,n=t.stateNode
try{n.nodeValue=a}catch(m){Ks(t,t.return,m)}}break
case 3:if($p=null,s=Pd,Pd=Wi(r.containerInfo),Ja(r,t),Pd=s,Za(t),4&a&&null!==n&&n.memoizedState.isDehydrated)try{Co(r.containerInfo)}catch(m){Ks(t,t.return,m)}Nd&&(Nd=!1,Qa(t))
break
case 4:a=Pd,Pd=Wi(t.stateNode.containerInfo),Ja(r,t),Za(t),Pd=a
break
case 12:default:Ja(r,t),Za(t)
break
case 31:case 19:Ja(r,t),Za(t),4&a&&null!==(a=t.updateQueue)&&(t.updateQueue=null,Ga(t,a))
break
case 13:Ja(r,t),Za(t),8192&t.child.flags&&null!==t.memoizedState!=(null!==n&&null!==n.memoizedState)&&(ep=gl()),4&a&&null!==(a=t.updateQueue)&&(t.updateQueue=null,Ga(t,a))
break
case 22:s=null!==t.memoizedState
var c=null!==n&&null!==n.memoizedState,u=Sd,d=_d
if(Sd=u||s,_d=d||c,Ja(r,t),_d=d,Sd=u,Za(t),8192&a)e:for(r=t.stateNode,r._visibility=s?-2&r._visibility:1|r._visibility,s&&(null===n||c||Sd||_d||ts(t)),n=null,r=t;;){if(5===r.tag||26===r.tag){if(null===n){c=n=r
try{if(i=c.stateNode,s)"function"==typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none"
else{l=c.stateNode
var p=c.memoizedProps.style,f=null!=p&&p.hasOwnProperty("display")?p.display:null
l.style.display=null==f||"boolean"==typeof f?"":(""+f).trim()}}catch(m){Ks(c,c.return,m)}}}else if(6===r.tag){if(null===n){c=r
try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(m){Ks(c,c.return,m)}}}else if(18===r.tag){if(null===n){c=r
try{var h=c.stateNode
s?Ai(h,!0):Ai(c.stateNode,!1)}catch(m){Ks(c,c.return,m)}}}else if((22!==r.tag&&23!==r.tag||null===r.memoizedState||r===t)&&null!==r.child){r.child.return=r,r=r.child
continue}if(r===t)break e
for(;null===r.sibling;){if(null===r.return||r.return===t)break e
n===r&&(n=null),r=r.return}n===r&&(n=null),r.sibling.return=r.return,r=r.sibling}4&a&&null!==(a=t.updateQueue)&&null!==(n=a.retryQueue)&&(a.retryQueue=null,Ga(t,n))
case 30:case 21:}}function Za(t){var r=t.flags
if(2&r){try{for(var n,a=t.return;null!==a;){if(Ua(a)){n=a
break}a=a.return}if(null==n)throw Error(e(160))
switch(n.tag){case 27:var s=n.stateNode
Ba(t,$a(t),s)
break
case 5:var i=n.stateNode
32&n.flags&&(se(i,""),n.flags&=-33),Ba(t,$a(t),i)
break
case 3:case 4:var o=n.stateNode.containerInfo
Fa(t,$a(t),o)
break
default:throw Error(e(161))}}catch(l){Ks(t,t.return,l)}t.flags&=-3}4096&r&&(t.flags&=-4097)}function Qa(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e
Qa(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function es(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Va(e,t.alternate,t),t=t.sibling}function ts(e){for(e=e.child;null!==e;){var t=e
switch(t.tag){case 0:case 11:case 14:case 15:Pa(4,t,t.return),ts(t)
break
case 1:za(t,t.return)
var r=t.stateNode
"function"==typeof r.componentWillUnmount&&Oa(t,t.return,r),ts(t)
break
case 27:Bi(t.stateNode)
case 26:case 5:za(t,t.return),ts(t)
break
case 22:null===t.memoizedState&&ts(t)
break
default:ts(t)}e=e.sibling}}function rs(e,t,r){for(r=r&&!!(8772&t.subtreeFlags),t=t.child;null!==t;){var n=t.alternate,a=e,s=t,i=s.flags
switch(s.tag){case 0:case 11:case 15:rs(a,s,r),Ra(4,s)
break
case 1:if(rs(a,s,r),"function"==typeof(a=(n=s).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){Ks(n,n.return,c)}if(null!==(a=(n=s).updateQueue)){var o=n.stateNode
try{var l=a.shared.hiddenCallbacks
if(null!==l)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Qt(l[a],o)}catch(c){Ks(n,n.return,c)}}r&&64&i&&Aa(s),Ia(s,s.return)
break
case 27:Wa(s)
case 26:case 5:rs(a,s,r),r&&null===n&&4&i&&La(s),Ia(s,s.return)
break
case 12:rs(a,s,r)
break
case 31:rs(a,s,r),r&&4&i&&Ka(a,s)
break
case 13:rs(a,s,r),r&&4&i&&Ya(a,s)
break
case 22:null===s.memoizedState&&rs(a,s,r),Ia(s,s.return)
break
case 30:break
default:rs(a,s,r)}t=t.sibling}}function ns(e,t){var r=null
null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==r&&(null!=e&&e.refCount++,null!=r&&Pt(r))}function as(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Pt(e))}function ss(e,t,r,n){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)is(e,t,r,n),t=t.sibling}function is(e,t,r,n){var a=t.flags
switch(t.tag){case 0:case 11:case 15:ss(e,t,r,n),2048&a&&Ra(9,t)
break
case 1:case 31:case 13:default:ss(e,t,r,n)
break
case 3:ss(e,t,r,n),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Pt(e)))
break
case 12:if(2048&a){ss(e,t,r,n),e=t.stateNode
try{var s=t.memoizedProps,i=s.id,o=s.onPostCommit
"function"==typeof o&&o(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){Ks(t,t.return,l)}}else ss(e,t,r,n)
break
case 23:break
case 22:s=t.stateNode,i=t.alternate,null!==t.memoizedState?2&s._visibility?ss(e,t,r,n):ls(e,t):2&s._visibility?ss(e,t,r,n):(s._visibility|=2,os(e,t,r,n,!!(10256&t.subtreeFlags)||!1)),2048&a&&ns(i,t)
break
case 24:ss(e,t,r,n),2048&a&&as(t.alternate,t)}}function os(e,t,r,n,a){for(a=a&&(!!(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var s=e,i=t,o=r,l=n,c=i.flags
switch(i.tag){case 0:case 11:case 15:os(s,i,o,l,a),Ra(8,i)
break
case 23:break
case 22:var u=i.stateNode
null!==i.memoizedState?2&u._visibility?os(s,i,o,l,a):ls(s,i):(u._visibility|=2,os(s,i,o,l,a)),a&&2048&c&&ns(i.alternate,i)
break
case 24:os(s,i,o,l,a),a&&2048&c&&as(i.alternate,i)
break
default:os(s,i,o,l,a)}t=t.sibling}}function ls(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var r=e,n=t,a=n.flags
switch(n.tag){case 22:ls(r,n),2048&a&&ns(n.alternate,n)
break
case 24:ls(r,n),2048&a&&as(n.alternate,n)
break
default:ls(r,n)}t=t.sibling}}function cs(e,t,r){if(e.subtreeFlags&Ad)for(e=e.child;null!==e;)us(e,t,r),e=e.sibling}function us(e,t,r){switch(e.tag){case 26:cs(e,t,r),e.flags&Ad&&null!==e.memoizedState&&function(e,t,r,n){if(!("stylesheet"!==r.type||"string"==typeof n.media&&!1===matchMedia(n.media).matches||4&r.state.loading)){if(null===r.instance){var a=Mi(n.href),s=t.querySelector(Hi(a))
if(s)return null!==(t=s._p)&&"object"==typeof t&&"function"==typeof t.then&&(e.count++,e=no.bind(e),t.then(e,e)),r.state.loading|=4,r.instance=s,void B(s)
s=t.ownerDocument||t,n=Ki(n),(a=zp.get(a))&&Zi(n,a),B(s=s.createElement("link"))
var i=s
i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),ji(s,"link",n),r.instance=s}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(r,t),(t=r.state.preload)&&!(3&r.state.loading)&&(e.count++,r=no.bind(e),t.addEventListener("load",r),t.addEventListener("error",r))}}(r,Pd,e.memoizedState,e.memoizedProps)
break
case 5:default:cs(e,t,r)
break
case 3:case 4:var n=Pd
Pd=Wi(e.stateNode.containerInfo),cs(e,t,r),Pd=n
break
case 22:null===e.memoizedState&&(null!==(n=e.alternate)&&null!==n.memoizedState?(n=Ad,Ad=16777216,cs(e,t,r),Ad=n):cs(e,t,r))}}function ds(e){var t=e.alternate
if(null!==t&&null!==(e=t.child)){t.child=null
do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function ps(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r]
Td=n,ms(n,e)}ds(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)fs(e),e=e.sibling}function fs(e){switch(e.tag){case 0:case 11:case 15:ps(e),2048&e.flags&&Pa(9,e,e.return)
break
case 3:case 12:default:ps(e)
break
case 22:var t=e.stateNode
null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,hs(e)):ps(e)}}function hs(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r]
Td=n,ms(n,e)}ds(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Pa(8,t,t.return),hs(t)
break
case 22:2&(r=t.stateNode)._visibility&&(r._visibility&=-3,hs(t))
break
default:hs(t)}e=e.sibling}}function ms(e,t){for(;null!==Td;){var r=Td
switch(r.tag){case 0:case 11:case 15:Pa(8,r,t)
break
case 23:case 22:if(null!==r.memoizedState&&null!==r.memoizedState.cachePool){var n=r.memoizedState.cachePool.pool
null!=n&&n.refCount++}break
case 24:Pt(r.memoizedState.cache)}if(null!==(n=r.child))n.return=r,Td=n
else e:for(r=e;null!==Td;){var a=(n=Td).sibling,s=n.return
if(qa(n),n===r){Td=null
break e}if(null!==a){a.return=s,Td=a
break e}Td=s}}}function gs(){return 2&zd&&0!==Ud?Ud&-Ud:null!==tl.T?ii():I()}function bs(){if(0===Gd)if(536870912&Ud&&!Nu)Gd=536870912
else{var e=Pl
!(3932160&(Pl<<=1))&&(Pl=262144),Gd=e}return null!==(e=rd.current)&&(e.flags|=32),Gd}function vs(e,t,r){(e!==Ld||2!==$d&&9!==$d)&&null===e.cancelPendingCommit||(_s(e,0),ks(e,Ud,Gd,!1)),T(e,r),2&zd&&e===Ld||(e===Ld&&(!(2&zd)&&(Kd|=r),4===Md&&ks(e,Ud,Gd,!1)),Qs(e))}function ys(t,r,n){if(6&zd)throw Error(e(327))
for(var a=!n&&!(127&r)&&0===(r&t.expiredLanes)||S(t,r),s=a?function(t,r){var n=zd
zd|=2
var a=Ts(),s=Cs()
Ld!==t||Ud!==r?(np=null,rp=gl()+500,_s(t,r)):Wd=S(t,r)
e:for(;;)try{if(0!==$d&&null!==Dd){r=Dd
var i=Fd
t:switch($d){case 1:$d=0,Fd=null,Ls(t,r,i,1)
break
case 2:case 9:if(Lt(i)){$d=0,Fd=null,zs(r)
break}r=function(){2!==$d&&9!==$d||Ld!==t||($d=7),Qs(t)},i.then(r,r)
break e
case 3:$d=7
break e
case 4:$d=5
break e
case 7:Lt(i)?($d=0,Fd=null,zs(r)):($d=0,Fd=null,Ls(t,r,i,7))
break
case 5:var o=null
switch(Dd.tag){case 26:o=Dd.memoizedState
case 5:case 27:var l=Dd
if(o?ro(o):l.stateNode.complete){$d=0,Fd=null
var c=l.sibling
if(null!==c)Dd=c
else{var u=l.return
null!==u?(Dd=u,Ds(u)):Dd=null}break t}}$d=0,Fd=null,Ls(t,r,i,5)
break
case 6:$d=0,Fd=null,Ls(t,r,i,6)
break
case 8:Ss(),Md=6
break e
default:throw Error(e(462))}}Os()
break}catch(d){Ns(t,d)}return Au=Pu=null,tl.H=a,tl.A=s,zd=n,null!==Dd?0:(Ld=null,Ud=0,Me(),Md)}(t,r):Ps(t,r,!0),i=a;;){if(0===s){Wd&&!a&&ks(t,r,0,!1)
break}if(n=t.current.alternate,!i||ws(n)){if(2===s){if(i=r,t.errorRecoveryDisabledLanes&i)var o=0
else o=0!=(o=-536870913&t.pendingLanes)?o:536870912&o?536870912:0
if(0!==o){r=o
e:{var l=t
s=Xd
var c=l.current.memoizedState.isDehydrated
if(c&&(_s(l,o).flags|=256),2!==(o=Ps(l,o,!1))){if(Vd&&!c){l.errorRecoveryDisabledLanes|=i,Kd|=i,s=4
break e}i=Zd,Zd=s,null!==i&&(null===Zd?Zd=i:Zd.push.apply(Zd,i))}s=o}if(i=!1,2!==s)continue}}if(1===s){_s(t,0),ks(t,r,0,!0)
break}e:{switch(a=t,i=s){case 0:case 1:throw Error(e(345))
case 4:if((4194048&r)!==r)break
case 6:ks(a,r,Gd,!Bd)
break e
case 2:Zd=null
break
case 3:case 5:break
default:throw Error(e(329))}if((62914560&r)===r&&10<(s=ep+300-gl())){if(ks(a,r,Gd,!Bd),0!==j(a,0,!0))break e
lp=r,a.timeoutHandle=Rp(xs.bind(null,a,n,Zd,np,Qd,r,Gd,Kd,Jd,Bd,i,"Throttled",-0,0),s)}else xs(a,n,Zd,np,Qd,r,Gd,Kd,Jd,Bd,i,null,-0,0)}break}s=Ps(t,r,!1),i=!1}Qs(t)}function xs(e,t,r,n,a,s,i,o,l,c,u,d,p,f){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||!(16785408&~d)){us(t,s,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ue})
var h=(62914560&s)===s?ep-gl():(4194048&s)===s?tp-gl():0
if(null!==(h=function(e,t){return e.stylesheets&&0===e.count&&ao(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var n=setTimeout(function(){if(e.stylesheets&&ao(e,e.stylesheets),e.unsuspend){var t=e.unsuspend
e.unsuspend=null,t()}},6e4+t)
0<e.imgBytes&&0===Fp&&(Fp=62500*function(){if("function"==typeof performance.getEntriesByType){for(var e=0,t=0,r=performance.getEntriesByType("resource"),n=0;n<r.length;n++){var a=r[n],s=a.transferSize,i=a.initiatorType,o=a.duration
if(s&&o&&Si(i)){for(i=0,o=a.responseEnd,n+=1;n<r.length;n++){var l=r[n],c=l.startTime
if(c>o)break
var u=l.transferSize,d=l.initiatorType
u&&Si(d)&&(i+=u*((l=l.responseEnd)<o?1:(o-c)/(l-c)))}if(--n,t+=8*(s+i)/(a.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"==typeof(e=navigator.connection.downlink)?e:5}())
var a=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&ao(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend
e.unsuspend=null,t()}},(e.imgBytes>Fp?50:800)+t)
return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}(d,h)))return lp=s,e.cancelPendingCommit=h($s.bind(null,e,t,s,r,n,a,i,o,l,u,d,null,p,f)),void ks(e,s,i,!c)}$s(e,t,s,r,n,a,i,o,l)}function ws(e){for(var t=e;;){var r=t.tag
if((0===r||11===r||15===r)&&16384&t.flags&&null!==(r=t.updateQueue)&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var a=r[n],s=a.getSnapshot
a=a.value
try{if(!Mc(s(),a))return!1}catch(i){return!1}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r
else{if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return!0
t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ks(e,t,r,n){t&=~Yd,t&=~Kd,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes
for(var a=t;0<a;){var s=31-El(a),i=1<<s
n[s]=-1,a&=~i}0!==r&&C(e,r,t)}function js(){return!!(6&zd)||(ei(0),!1)}function Ss(){if(null!==Dd){if(0===$d)var e=Dd.return
else Au=Pu=null,vr(e=Dd),Yu=null,Gu=0,e=Dd
for(;null!==e;)Ca(e.alternate,e),e=e.return
Dd=null}}function _s(e,t){var r=e.timeoutHandle;-1!==r&&(e.timeoutHandle=-1,Pp(r)),null!==(r=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,r()),lp=0,Ss(),Ld=e,Dd=r=et(e.current,null),Ud=t,$d=0,Fd=null,Bd=!1,Wd=S(e,t),Vd=!1,Jd=Gd=Yd=Kd=Hd=Md=0,Zd=Xd=null,Qd=!1,8&t&&(t|=32&t)
var n=e.entangledLanes
if(0!==n)for(e=e.entanglements,n&=t;0<n;){var a=31-El(n),s=1<<a
t|=e[a],n&=~s}return qd=t,Me(),r}function Ns(e,t){id=null,tl.H=gd,t===Vu||t===Mu?(t=$t(),$d=3):t===qu?(t=$t(),$d=4):$d=t===wd?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,Fd=t,null===Dd&&(Md=1,qn(e,ot(t,e.current)))}function Es(){var e=rd.current
return null===e||((4194048&Ud)===Ud?null===nd:!!((62914560&Ud)===Ud||536870912&Ud)&&e===nd)}function Ts(){var e=tl.H
return tl.H=gd,null===e?gd:e}function Cs(){var e=tl.A
return tl.A=Od,e}function Rs(){Md=4,Bd||(4194048&Ud)!==Ud&&null!==rd.current||(Wd=!0),!(134217727&Hd)&&!(134217727&Kd)||null===Ld||ks(Ld,Ud,Gd,!1)}function Ps(e,t,r){var n=zd
zd|=2
var a=Ts(),s=Cs()
Ld===e&&Ud===t||(np=null,_s(e,t)),t=!1
var i=Md
e:for(;;)try{if(0!==$d&&null!==Dd){var o=Dd,l=Fd
switch($d){case 8:Ss(),i=6
break e
case 3:case 2:case 9:case 6:null===rd.current&&(t=!0)
var c=$d
if($d=0,Fd=null,Ls(e,o,l,c),r&&Wd){i=0
break e}break
default:c=$d,$d=0,Fd=null,Ls(e,o,l,c)}}As(),i=Md
break}catch(u){Ns(e,u)}return t&&e.shellSuspendCounter++,Au=Pu=null,zd=n,tl.H=a,tl.A=s,null===Dd&&(Ld=null,Ud=0,Me()),i}function As(){for(;null!==Dd;)Is(Dd)}function Os(){for(;null!==Dd&&!hl();)Is(Dd)}function Is(e){var t=xa(e.alternate,e,qd)
e.memoizedProps=e.pendingProps,null===t?Ds(e):Dd=t}function zs(e){var t=e,r=t.alternate
switch(t.tag){case 15:case 0:t=ia(r,t,t.pendingProps,t.type,void 0,Ud)
break
case 11:t=ia(r,t,t.pendingProps,t.type.render,t.ref,Ud)
break
case 5:vr(t)
default:Ca(r,t),t=xa(r,t=Dd=tt(t,qd),qd)}e.memoizedProps=e.pendingProps,null===t?Ds(e):Dd=t}function Ls(t,r,n,a){Au=Pu=null,vr(r),Yu=null,Gu=0
var s=r.return
try{if(function(t,r,n,a,s){if(n.flags|=32768,null!==a&&"object"==typeof a&&"function"==typeof a.then){if(null!==(r=n.alternate)&&St(r,n,s,!0),null!==(n=rd.current)){switch(n.tag){case 31:case 13:return null===nd?Rs():null===n.alternate&&0===Md&&(Md=3),n.flags&=-257,n.flags|=65536,n.lanes=s,a===Hu?n.flags|=16384:(null===(r=n.updateQueue)?n.updateQueue=new Set([a]):r.add(a),Ys(t,a,s)),!1
case 22:return n.flags|=65536,a===Hu?n.flags|=16384:(null===(r=n.updateQueue)?(r={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=r):null===(n=r.retryQueue)?r.retryQueue=new Set([a]):n.add(a),Ys(t,a,s)),!1}throw Error(e(435,n.tag))}return Ys(t,a,s),Rs(),!1}if(Nu)return null!==(r=rd.current)?(!(65536&r.flags)&&(r.flags|=256),r.flags|=65536,r.lanes=s,a!==Cu&&yt(ot(t=Error(e(422),{cause:a}),n))):(a!==Cu&&yt(ot(r=Error(e(423),{cause:a}),n)),(t=t.current.alternate).flags|=65536,s&=-s,t.lanes|=s,a=ot(a,n),Jt(t,s=Hn(t.stateNode,a,s)),4!==Md&&(Md=2)),!1
var i=Error(e(520),{cause:a})
if(i=ot(i,n),null===Xd?Xd=[i]:Xd.push(i),4!==Md&&(Md=2),null===r)return!0
a=ot(a,n),n=r
do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,Jt(n,t=Hn(n.stateNode,a,t)),!1
case 1:if(r=n.type,i=n.stateNode,!(128&n.flags||"function"!=typeof r.getDerivedStateFromError&&(null===i||"function"!=typeof i.componentDidCatch||null!==ap&&ap.has(i))))return n.flags|=65536,s&=-s,n.lanes|=s,Yn(s=Kn(s),t,n,a),Jt(n,s),!1}n=n.return}while(null!==n)
return!1}(t,s,r,n,Ud))return Md=1,qn(t,ot(n,t.current)),void(Dd=null)}catch(i){if(null!==s)throw Dd=s,i
return Md=1,qn(t,ot(n,t.current)),void(Dd=null)}32768&r.flags?(Nu||1===a?t=!0:Wd||536870912&Ud?t=!1:(Bd=t=!0,(2===a||9===a||3===a||6===a)&&null!==(a=rd.current)&&13===a.tag&&(a.flags|=16384)),Us(r,t)):Ds(r)}function Ds(e){var t=e
do{if(32768&t.flags)return void Us(t,Bd)
e=t.return
var r=Ea(t.alternate,t,qd)
if(null!==r)return void(Dd=r)
if(null!==(t=t.sibling))return void(Dd=t)
Dd=t=e}while(null!==t)
0===Md&&(Md=5)}function Us(e,t){do{var r=Ta(e.alternate,e)
if(null!==r)return r.flags&=32767,void(Dd=r)
if(null!==(r=e.return)&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&null!==(e=e.sibling))return void(Dd=e)
Dd=e=r}while(null!==e)
Md=6,Dd=null}function $s(t,r,n,a,s,i,o,l,c){t.cancelPendingCommit=null
do{qs()}while(0!==sp)
if(6&zd)throw Error(e(327))
if(null!==r){if(r===t.current)throw Error(e(177))
if(i=r.lanes|r.childLanes,function(e,t,r,n,a,s){var i=e.pendingLanes
e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0
var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates
for(r=i&~r;0<r;){var u=31-El(r),d=1<<u
o[u]=0,l[u]=-1
var p=c[u]
if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u]
null!==f&&(f.lane&=-536870913)}r&=~d}0!==n&&C(e,n,0),0!==s&&0===a&&0!==e.tag&&(e.suspendedLanes|=s&~(i&~t))}(t,n,i|=pu,o,l,c),t===Ld&&(Dd=Ld=null,Ud=0),op=r,ip=t,lp=n,cp=i,up=s,dp=a,10256&r.subtreeFlags||10256&r.flags?(t.callbackNode=null,t.callbackPriority=0,pl(xl,function(){return Ms(),null})):(t.callbackNode=null,t.callbackPriority=0),a=!!(13878&r.flags),13878&r.subtreeFlags||a){a=tl.T,tl.T=null,s=rl.p,rl.p=2,o=zd,zd|=4
try{!function(t,r){if(t=t.containerInfo,Ep=Vp,Fe(t=$e(t))){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd}
else e:{var a=(n=(n=t.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection()
if(a&&0!==a.rangeCount){n=a.anchorNode
var s=a.anchorOffset,i=a.focusNode
a=a.focusOffset
try{n.nodeType,i.nodeType}catch(g){n=null
break e}var o=0,l=-1,c=-1,u=0,d=0,p=t,f=null
t:for(;;){for(var h;p!==n||0!==s&&3!==p.nodeType||(l=o+s),p!==i||0!==a&&3!==p.nodeType||(c=o+a),3===p.nodeType&&(o+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h
for(;;){if(p===t)break t
if(f===n&&++u===s&&(l=o),f===i&&++d===a&&(c=o),null!==(h=p.nextSibling))break
f=(p=f).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null
for(Tp={focusedElem:t,selectionRange:n},Vp=!1,Td=r;null!==Td;)if(t=(r=Td).child,1028&r.subtreeFlags&&null!==t)t.return=r,Td=t
else for(;null!==Td;){switch(i=(r=Td).alternate,t=r.flags,r.tag){case 0:if(4&t&&null!==(t=null!==(t=r.updateQueue)?t.events:null))for(n=0;n<t.length;n++)(s=t[n]).ref.impl=s.nextImpl
break
case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break
case 1:if(1024&t&&null!==i){t=void 0,n=r,s=i.memoizedProps,i=i.memoizedState,a=n.stateNode
try{var m=Fn(n.type,s)
t=a.getSnapshotBeforeUpdate(m,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(b){Ks(n,n.return,b)}}break
case 3:if(1024&t)if(9===(n=(t=r.stateNode.containerInfo).nodeType))Oi(t)
else if(1===n)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Oi(t)
break
default:t.textContent=""}break
default:if(1024&t)throw Error(e(163))}if(null!==(t=r.sibling)){t.return=r.return,Td=t
break}Td=r.return}}(t,r)}finally{zd=o,rl.p=s,tl.T=a}}sp=1,Fs(),Bs(),Ws()}}function Fs(){if(1===sp){sp=0
var e=ip,t=op,r=!!(13878&t.flags)
if(13878&t.subtreeFlags||r){r=tl.T,tl.T=null
var n=rl.p
rl.p=2
var a=zd
zd|=4
try{Xa(t,e)
var s=Tp,i=$e(e.containerInfo),o=s.focusedElem,l=s.selectionRange
if(i!==o&&o&&o.ownerDocument&&Ue(o.ownerDocument.documentElement,o)){if(null!==l&&Fe(o)){var c=l.start,u=l.end
if(void 0===u&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length)
else{var d=o.ownerDocument||document,p=d&&d.defaultView||window
if(p.getSelection){var f=p.getSelection(),h=o.textContent.length,m=Math.min(l.start,h),g=void 0===l.end?m:Math.min(l.end,h)
!f.extend&&m>g&&(i=g,g=m,m=i)
var b=De(o,m),v=De(o,g)
if(b&&v&&(1!==f.rangeCount||f.anchorNode!==b.node||f.anchorOffset!==b.offset||f.focusNode!==v.node||f.focusOffset!==v.offset)){var y=d.createRange()
y.setStart(b.node,b.offset),f.removeAllRanges(),m>g?(f.addRange(y),f.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),f.addRange(y))}}}}for(d=[],f=o;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop})
for("function"==typeof o.focus&&o.focus(),o=0;o<d.length;o++){var x=d[o]
x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Vp=!!Ep,Tp=Ep=null}finally{zd=a,rl.p=n,tl.T=r}}e.current=t,sp=2}}function Bs(){if(2===sp){sp=0
var e=ip,t=op,r=!!(8772&t.flags)
if(8772&t.subtreeFlags||r){r=tl.T,tl.T=null
var n=rl.p
rl.p=2
var a=zd
zd|=4
try{Va(e,t.alternate,t)}finally{zd=a,rl.p=n,tl.T=r}}sp=3}}function Ws(){if(4===sp||3===sp){sp=0,ml()
var e=ip,t=op,r=lp,n=dp
10256&t.subtreeFlags||10256&t.flags?sp=5:(sp=0,op=ip=null,Vs(e,e.pendingLanes))
var a=e.pendingLanes
if(0===a&&(ap=null),O(r),t=t.stateNode,Nl&&"function"==typeof Nl.onCommitFiberRoot)try{Nl.onCommitFiberRoot(_l,t,void 0,!(128&~t.current.flags))}catch(l){}if(null!==n){t=tl.T,a=rl.p,rl.p=2,tl.T=null
try{for(var s=e.onRecoverableError,i=0;i<n.length;i++){var o=n[i]
s(o.value,{componentStack:o.stack})}}finally{tl.T=t,rl.p=a}}3&lp&&qs(),Qs(e),a=e.pendingLanes,261930&r&&42&a?e===fp?pp++:(pp=0,fp=e):pp=0,ei(0)}}function Vs(e,t){0===(e.pooledCacheLanes&=t)&&null!=(t=e.pooledCache)&&(e.pooledCache=null,Pt(t))}function qs(){return Fs(),Bs(),Ws(),Ms()}function Ms(){if(5!==sp)return!1
var t=ip,r=cp
cp=0
var n=O(lp),a=tl.T,s=rl.p
try{rl.p=32>n?32:n,tl.T=null,n=up,up=null
var i=ip,o=lp
if(sp=0,op=ip=null,lp=0,6&zd)throw Error(e(331))
var l=zd
if(zd|=4,fs(i.current),is(i,i.current,o,n),zd=l,ei(0),Nl&&"function"==typeof Nl.onPostCommitFiberRoot)try{Nl.onPostCommitFiberRoot(_l,i)}catch(c){}return!0}finally{rl.p=s,tl.T=a,Vs(t,r)}}function Hs(e,t,r){t=ot(r,t),null!==(e=Yt(e,t=Hn(e.stateNode,t,2),2))&&(T(e,2),Qs(e))}function Ks(e,t,r){if(3===e.tag)Hs(e,e,r)
else for(;null!==t;){if(3===t.tag){Hs(t,e,r)
break}if(1===t.tag){var n=t.stateNode
if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===ap||!ap.has(n))){e=ot(r,e),null!==(n=Yt(t,r=Kn(2),2))&&(Yn(r,n,t,e),T(n,2),Qs(n))
break}}t=t.return}}function Ys(e,t,r){var n=e.pingCache
if(null===n){n=e.pingCache=new Id
var a=new Set
n.set(t,a)}else void 0===(a=n.get(t))&&(a=new Set,n.set(t,a))
a.has(r)||(Vd=!0,a.add(r),e=Gs.bind(null,e,t,r),t.then(e,e))}function Gs(e,t,r){var n=e.pingCache
null!==n&&n.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ld===e&&(Ud&r)===r&&(4===Md||3===Md&&(62914560&Ud)===Ud&&300>gl()-ep?!(2&zd)&&_s(e,0):Yd|=r,Jd===Ud&&(Jd=0)),Qs(e)}function Js(e,t){0===t&&(t=N()),null!==(e=Ye(e,t))&&(T(e,t),Qs(e))}function Xs(e){var t=e.memoizedState,r=0
null!==t&&(r=t.retryLane),Js(e,r)}function Zs(t,r){var n=0
switch(t.tag){case 31:case 13:var a=t.stateNode,s=t.memoizedState
null!==s&&(n=s.retryLane)
break
case 19:a=t.stateNode
break
case 22:a=t.stateNode._retryCache
break
default:throw Error(e(314))}null!==a&&a.delete(r),Js(t,n)}function Qs(e){e!==mp&&null===e.next&&(null===mp?hp=mp=e:mp=mp.next=e),bp=!0,gp||(gp=!0,Op(function(){6&zd?pl(vl,ti):ri()}))}function ei(e){if(!vp&&bp){vp=!0
do{for(var t=!1,r=hp;null!==r;){if(0!==e){var n=r.pendingLanes
if(0===n)var a=0
else{var s=r.suspendedLanes,i=r.pingedLanes
a=(1<<31-El(42|e)+1)-1,a=201326741&(a&=n&~(s&~i))?201326741&a|1:a?2|a:0}0!==a&&(t=!0,si(r,a))}else a=Ud,!(3&(a=j(r,r===Ld?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||S(r,a)||(t=!0,si(r,a))
r=r.next}}while(t)
vp=!1}}function ti(){ri()}function ri(){bp=gp=!1
var e=0
0!==yp&&function(){var e=window.event
return e&&"popstate"===e.type?e!==Cp&&(Cp=e,!0):(Cp=null,!1)}()&&(e=yp)
for(var t=gl(),r=null,n=hp;null!==n;){var a=n.next,s=ni(n,t)
0===s?(n.next=null,null===r?hp=a:r.next=a,null===a&&(mp=r)):(r=n,(0!==e||3&s)&&(bp=!0)),n=a}0!==sp&&5!==sp||ei(e),0!==yp&&(yp=0)}function ni(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,s=-62914561&e.pendingLanes;0<s;){var i=31-El(s),o=1<<i,l=a[i];-1===l?0!==(o&r)&&0===(o&n)||(a[i]=_(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(r=Ud,r=j(e,e===(t=Ld)?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),n=e.callbackNode,0===r||e===t&&(2===$d||9===$d)||null!==e.cancelPendingCommit)return null!==n&&null!==n&&fl(n),e.callbackNode=null,e.callbackPriority=0
if(!(3&r)||S(e,r)){if((t=r&-r)===e.callbackPriority)return t
switch(null!==n&&fl(n),O(r)){case 2:case 8:r=yl
break
case 32:default:r=xl
break
case 268435456:r=kl}return n=ai.bind(null,e),r=pl(r,n),e.callbackPriority=t,e.callbackNode=r,t}return null!==n&&null!==n&&fl(n),e.callbackPriority=2,e.callbackNode=null,2}function ai(e,t){if(0!==sp&&5!==sp)return e.callbackNode=null,e.callbackPriority=0,null
var r=e.callbackNode
if(qs()&&e.callbackNode!==r)return null
var n=Ud
return 0===(n=j(e,e===Ld?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(ys(e,n,t),ni(e,gl()),null!=e.callbackNode&&e.callbackNode===r?ai.bind(null,e):null)}function si(e,t){if(qs())return null
ys(e,t,!0)}function ii(){if(0===yp){var e=$u
0===e&&(e=Rl,!(261888&(Rl<<=1))&&(Rl=256)),yp=e}return yp}function oi(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:ce(""+e)}function li(e,t){var r=t.ownerDocument.createElement("input")
return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function ci(e,t){t=!!(4&t)
for(var r=0;r<e.length;r++){var n=e[r],a=n.event
n=n.listeners
e:{var s=void 0
if(t)for(var i=n.length-1;0<=i;i--){var o=n[i],l=o.instance,c=o.currentTarget
if(o=o.listener,l!==s&&a.isPropagationStopped())break e
s=o,a.currentTarget=c
try{s(a)}catch(u){cu(u)}a.currentTarget=null,s=l}else for(i=0;i<n.length;i++){if(l=(o=n[i]).instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break e
s=o,a.currentTarget=c
try{s(a)}catch(u){cu(u)}a.currentTarget=null,s=l}}}}function ui(e,t){var r=t[Dl]
void 0===r&&(r=t[Dl]=new Set)
var n=e+"__bubble"
r.has(n)||(fi(t,e,2,!1),r.add(n))}function di(e,t,r){var n=0
t&&(n|=4),fi(r,e,n,t)}function pi(e){if(!e[Sp]){e[Sp]=!0,Wl.forEach(function(t){"selectionchange"!==t&&(jp.has(t)||di(t,!1,e),di(t,!0,e))})
var t=9===e.nodeType?e:e.ownerDocument
null===t||t[Sp]||(t[Sp]=!0,di("selectionchange",!1,t))}}function fi(e,t,r,n){switch(xo(t)){case 2:var a=mo
break
case 8:a=go
break
default:a=bo}r=a.bind(null,t,r,e),a=void 0,!rc||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),n?void 0!==a?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):void 0!==a?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function hi(e,t,n,a,s){var i=a
if(!(1&t||2&t||null===a))e:for(;;){if(null===a)return
var o=a.tag
if(3===o||4===o){var l=a.stateNode.containerInfo
if(l===s)break
if(4===o)for(o=a.return;null!==o;){var c=o.tag
if((3===c||4===c)&&o.stateNode.containerInfo===s)return
o=o.return}for(;null!==l;){if(null===(o=D(l)))return
if(5===(c=o.tag)||6===c||26===c||27===c){a=i=o
continue e}l=l.parentNode}}a=a.return}fe(function(){var a=i,s=de(n),o=[]
e:{var l=ou.get(e)
if(void 0!==l){var c=dc,u=e
switch(e){case"keypress":if(0===ge(n))break e
case"keydown":case"keyup":c=Sc
break
case"focusin":u="focus",c=bc
break
case"focusout":u="blur",c=bc
break
case"beforeblur":case"afterblur":c=bc
break
case"click":if(2===n.button)break e
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=mc
break
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=gc
break
case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Nc
break
case eu:case tu:case ru:c=vc
break
case iu:c=Ec
break
case"scroll":case"scrollend":c=fc
break
case"wheel":c=Tc
break
case"copy":case"cut":case"paste":c=yc
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=_c
break
case"toggle":case"beforetoggle":c=Cc}var d=!!(4&t),p=!d&&("scroll"===e||"scrollend"===e),f=d?null!==l?l+"Capture":null:l
d=[]
for(var h,m=a;null!==m;){var g=m
if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===f||null!=(g=he(m,f))&&d.push(mi(m,g,h)),p)break
m=m.return}0<d.length&&(l=new c(l,u,null,n,s),o.push({event:l,listeners:d}))}}if(!(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Xl||!(u=n.relatedTarget||n.fromElement)||!D(u)&&!u[Ll])&&(c||l)&&(l=s.window===s?s:(l=s.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=a,null!==(u=(u=n.relatedTarget||n.toElement)?D(u):null)&&(p=r(u),d=u.tag,u!==p||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=a),c!==u)){if(d=mc,g="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=_c,g="onPointerLeave",f="onPointerEnter",m="pointer"),p=null==c?l:$(c),h=null==u?l:$(u),(l=new d(g,m+"leave",c,n,s)).target=p,l.relatedTarget=h,g=null,D(s)===a&&((d=new d(f,m+"enter",u,n,s)).target=h,d.relatedTarget=p,g=d),p=g,c&&u)e:{for(d=bi,m=u,h=0,g=f=c;g;g=d(g))h++
g=0
for(var b=m;b;b=d(b))g++
for(;0<h-g;)f=d(f),h--
for(;0<g-h;)m=d(m),g--
for(;h--;){if(f===m||null!==m&&f===m.alternate){d=f
break e}f=d(f),m=d(m)}d=null}else d=null
null!==c&&vi(o,l,c,d,!1),null!==u&&null!==p&&vi(o,p,u,d,!0)}if("select"===(c=(l=a?$(a):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var v=Te
else if(Se(l))if(Bc)v=Ie
else{v=Ae
var y=Pe}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?a&&le(a.elementType)&&(v=Te):v=Oe
switch(v&&(v=v(e,a))?_e(o,v,n,s):(y&&y(e,l,a),"focusout"===e&&a&&"number"===l.type&&null!=a.memoizedProps.value&&te(l,"number",l.value)),y=a?$(a):window,e){case"focusin":(Se(y)||"true"===y.contentEditable)&&(Kc=y,Yc=a,Gc=null)
break
case"focusout":Gc=Yc=Kc=null
break
case"mousedown":Jc=!0
break
case"contextmenu":case"mouseup":case"dragend":Jc=!1,Be(o,n,s)
break
case"selectionchange":if(Hc)break
case"keydown":case"keyup":Be(o,n,s)}var x
if(Pc)e:{switch(e){case"compositionstart":var w="onCompositionStart"
break e
case"compositionend":w="onCompositionEnd"
break e
case"compositionupdate":w="onCompositionUpdate"
break e}w=void 0}else Dc?ke(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart")
w&&(Ic&&"ko"!==n.locale&&(Dc||"onCompositionStart"!==w?"onCompositionEnd"===w&&Dc&&(x=me()):(lc="value"in(oc=s)?oc.value:oc.textContent,Dc=!0)),0<(y=gi(a,w)).length&&(w=new xc(w,e,null,n,s),o.push({event:w,listeners:y}),(x||null!==(x=je(n)))&&(w.data=x))),(x=Oc?function(e,t){switch(e){case"compositionend":return je(t)
case"keypress":return 32!==t.which?null:(Lc=!0,zc)
case"textInput":return(e=t.data)===zc&&Lc?null:e
default:return null}}(e,n):function(e,t){if(Dc)return"compositionend"===e||!Pc&&ke(e,t)?(e=me(),cc=lc=oc=null,Dc=!1,e):null
switch(e){case"paste":default:return null
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char
if(t.which)return String.fromCharCode(t.which)}return null
case"compositionend":return Ic&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(w=gi(a,"onBeforeInput")).length&&(y=new xc("onBeforeInput","beforeinput",null,n,s),o.push({event:y,listeners:w}),y.data=x),function(e,t,r,n,a){if("submit"===t&&r&&r.stateNode===a){var s=oi((a[zl]||null).action),i=n.submitter
i&&null!==(t=(t=i[zl]||null)?oi(t.formAction):i.getAttribute("formAction"))&&(s=t,i=null)
var o=new dc("action","action",null,n,a)
e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(0!==yp){var e=i?li(a,i):new FormData(a)
vn(r,{pending:!0,data:e,method:a.method,action:s},null,e)}}else"function"==typeof s&&(o.preventDefault(),e=i?li(a,i):new FormData(a),vn(r,{pending:!0,data:e,method:a.method,action:s},s,e))},currentTarget:a}]})}}(o,e,a,n,s)}ci(o,t)})}function mi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function gi(e,t){for(var r=t+"Capture",n=[];null!==e;){var a=e,s=a.stateNode
if(5!==(a=a.tag)&&26!==a&&27!==a||null===s||(null!=(a=he(e,r))&&n.unshift(mi(e,a,s)),null!=(a=he(e,t))&&n.push(mi(e,a,s))),3===e.tag)return n
e=e.return}return[]}function bi(e){if(null===e)return null
do{e=e.return}while(e&&5!==e.tag&&27!==e.tag)
return e||null}function vi(e,t,r,n,a){for(var s=t._reactName,i=[];null!==r&&r!==n;){var o=r,l=o.alternate,c=o.stateNode
if(o=o.tag,null!==l&&l===n)break
5!==o&&26!==o&&27!==o||null===c||(l=c,a?null!=(c=he(r,s))&&i.unshift(mi(r,c,l)):a||null!=(c=he(r,s))&&i.push(mi(r,c,l))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}function yi(e){return("string"==typeof e?e:""+e).replace(_p,"\n").replace(Np,"")}function xi(e,t){return t=yi(t),yi(e)===t}function wi(t,r,n,a,s,i){switch(n){case"children":"string"==typeof a?"body"===r||"textarea"===r&&""===a||se(t,a):("number"==typeof a||"bigint"==typeof a)&&"body"!==r&&se(t,""+a)
break
case"className":M(t,"class",a)
break
case"tabIndex":M(t,"tabindex",a)
break
case"dir":case"role":case"viewBox":case"width":case"height":M(t,n,a)
break
case"style":oe(t,a,i)
break
case"data":if("object"!==r){M(t,"data",a)
break}case"src":case"href":if(""===a&&("a"!==r||"href"!==n)){t.removeAttribute(n)
break}if(null==a||"function"==typeof a||"symbol"==typeof a||"boolean"==typeof a){t.removeAttribute(n)
break}a=ce(""+a),t.setAttribute(n,a)
break
case"action":case"formAction":if("function"==typeof a){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')")
break}if("function"==typeof i&&("formAction"===n?("input"!==r&&wi(t,r,"name",s.name,s,null),wi(t,r,"formEncType",s.formEncType,s,null),wi(t,r,"formMethod",s.formMethod,s,null),wi(t,r,"formTarget",s.formTarget,s,null)):(wi(t,r,"encType",s.encType,s,null),wi(t,r,"method",s.method,s,null),wi(t,r,"target",s.target,s,null))),null==a||"symbol"==typeof a||"boolean"==typeof a){t.removeAttribute(n)
break}a=ce(""+a),t.setAttribute(n,a)
break
case"onClick":null!=a&&(t.onclick=ue)
break
case"onScroll":null!=a&&ui("scroll",t)
break
case"onScrollEnd":null!=a&&ui("scrollend",t)
break
case"dangerouslySetInnerHTML":if(null!=a){if("object"!=typeof a||!("__html"in a))throw Error(e(61))
if(null!=(n=a.__html)){if(null!=s.children)throw Error(e(60))
t.innerHTML=n}}break
case"multiple":t.multiple=a&&"function"!=typeof a&&"symbol"!=typeof a
break
case"muted":t.muted=a&&"function"!=typeof a&&"symbol"!=typeof a
break
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break
case"xlinkHref":if(null==a||"function"==typeof a||"boolean"==typeof a||"symbol"==typeof a){t.removeAttribute("xlink:href")
break}n=ce(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n)
break
case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=a&&"function"!=typeof a&&"symbol"!=typeof a?t.setAttribute(n,""+a):t.removeAttribute(n)
break
case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&"function"!=typeof a&&"symbol"!=typeof a?t.setAttribute(n,""):t.removeAttribute(n)
break
case"capture":case"download":!0===a?t.setAttribute(n,""):!1!==a&&null!=a&&"function"!=typeof a&&"symbol"!=typeof a?t.setAttribute(n,a):t.removeAttribute(n)
break
case"cols":case"rows":case"size":case"span":null!=a&&"function"!=typeof a&&"symbol"!=typeof a&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n)
break
case"rowSpan":case"start":null==a||"function"==typeof a||"symbol"==typeof a||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a)
break
case"popover":ui("beforetoggle",t),ui("toggle",t),q(t,"popover",a)
break
case"xlinkActuate":H(t,"http://www.w3.org/1999/xlink","xlink:actuate",a)
break
case"xlinkArcrole":H(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a)
break
case"xlinkRole":H(t,"http://www.w3.org/1999/xlink","xlink:role",a)
break
case"xlinkShow":H(t,"http://www.w3.org/1999/xlink","xlink:show",a)
break
case"xlinkTitle":H(t,"http://www.w3.org/1999/xlink","xlink:title",a)
break
case"xlinkType":H(t,"http://www.w3.org/1999/xlink","xlink:type",a)
break
case"xmlBase":H(t,"http://www.w3.org/XML/1998/namespace","xml:base",a)
break
case"xmlLang":H(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a)
break
case"xmlSpace":H(t,"http://www.w3.org/XML/1998/namespace","xml:space",a)
break
case"is":q(t,"is",a)
break
case"innerText":case"textContent":break
default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&q(t,n=Gl.get(n)||n,a)}}function ki(t,r,n,a,s,i){switch(n){case"style":oe(t,a,i)
break
case"dangerouslySetInnerHTML":if(null!=a){if("object"!=typeof a||!("__html"in a))throw Error(e(61))
if(null!=(n=a.__html)){if(null!=s.children)throw Error(e(60))
t.innerHTML=n}}break
case"children":"string"==typeof a?se(t,a):("number"==typeof a||"bigint"==typeof a)&&se(t,""+a)
break
case"onScroll":null!=a&&ui("scroll",t)
break
case"onScrollEnd":null!=a&&ui("scrollend",t)
break
case"onClick":null!=a&&(t.onclick=ue)
break
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break
default:Vl.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(s=n.endsWith("Capture"),r=n.slice(2,s?n.length-7:void 0),"function"==typeof(i=null!=(i=t[zl]||null)?i[n]:null)&&t.removeEventListener(r,i,s),"function"!=typeof a)?n in t?t[n]=a:!0===a?t.setAttribute(n,""):q(t,n,a):("function"!=typeof i&&null!==i&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(r,a,s)))}}function ji(t,r,n){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"img":ui("error",t),ui("load",t)
var a,s=!1,i=!1
for(a in n)if(n.hasOwnProperty(a)){var o=n[a]
if(null!=o)switch(a){case"src":s=!0
break
case"srcSet":i=!0
break
case"children":case"dangerouslySetInnerHTML":throw Error(e(137,r))
default:wi(t,r,a,o,n,null)}}return i&&wi(t,r,"srcSet",n.srcSet,n,null),void(s&&wi(t,r,"src",n.src,n,null))
case"input":ui("invalid",t)
var l=a=o=i=null,c=null,u=null
for(s in n)if(n.hasOwnProperty(s)){var d=n[s]
if(null!=d)switch(s){case"name":i=d
break
case"type":o=d
break
case"checked":c=d
break
case"defaultChecked":u=d
break
case"value":a=d
break
case"defaultValue":l=d
break
case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(e(137,r))
break
default:wi(t,r,s,d,n,null)}}return void ee(t,a,l,c,u,o,i,!1)
case"select":for(i in ui("invalid",t),s=o=a=null,n)if(n.hasOwnProperty(i)&&null!=(l=n[i]))switch(i){case"value":a=l
break
case"defaultValue":o=l
break
case"multiple":s=l
default:wi(t,r,i,l,n,null)}return r=a,n=o,t.multiple=!!s,void(null!=r?re(t,!!s,r,!1):null!=n&&re(t,!!s,n,!0))
case"textarea":for(o in ui("invalid",t),a=i=s=null,n)if(n.hasOwnProperty(o)&&null!=(l=n[o]))switch(o){case"value":s=l
break
case"defaultValue":i=l
break
case"children":a=l
break
case"dangerouslySetInnerHTML":if(null!=l)throw Error(e(91))
break
default:wi(t,r,o,l,n,null)}return void ae(t,s,i,a)
case"option":for(c in n)n.hasOwnProperty(c)&&null!=(s=n[c])&&("selected"===c?t.selected=s&&"function"!=typeof s&&"symbol"!=typeof s:wi(t,r,c,s,n,null))
return
case"dialog":ui("beforetoggle",t),ui("toggle",t),ui("cancel",t),ui("close",t)
break
case"iframe":case"object":ui("load",t)
break
case"video":case"audio":for(s=0;s<kp.length;s++)ui(kp[s],t)
break
case"image":ui("error",t),ui("load",t)
break
case"details":ui("toggle",t)
break
case"embed":case"source":case"link":ui("error",t),ui("load",t)
case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(s=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(e(137,r))
default:wi(t,r,u,s,n,null)}return
default:if(le(r)){for(d in n)n.hasOwnProperty(d)&&void 0!==(s=n[d])&&ki(t,r,d,s,n,void 0)
return}}for(l in n)n.hasOwnProperty(l)&&null!=(s=n[l])&&wi(t,r,l,s,n,null)}function Si(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0
default:return!1}}function _i(e){return 9===e.nodeType?e:e.ownerDocument}function Ni(e){switch(e){case"http://www.w3.org/2000/svg":return 1
case"http://www.w3.org/1998/Math/MathML":return 2
default:return 0}}function Ei(e,t){if(0===e)switch(t){case"svg":return 1
case"math":return 2
default:return 0}return 1===e&&"foreignObject"===t?0:e}function Ti(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}function Ci(e){setTimeout(function(){throw e})}function Ri(e){return"head"===e}function Pi(e,t){var r=t,n=0
do{var a=r.nextSibling
if(e.removeChild(r),a&&8===a.nodeType)if("/$"===(r=a.data)||"/&"===r){if(0===n)return e.removeChild(a),void Co(t)
n--}else if("$"===r||"$?"===r||"$~"===r||"$!"===r||"&"===r)n++
else if("html"===r)Bi(e.ownerDocument.documentElement)
else if("head"===r){Bi(r=e.ownerDocument.head)
for(var s=r.firstChild;s;){var i=s.nextSibling,o=s.nodeName
s[Bl]||"SCRIPT"===o||"STYLE"===o||"LINK"===o&&"stylesheet"===s.rel.toLowerCase()||r.removeChild(s),s=i}}else"body"===r&&Bi(e.ownerDocument.body)
r=a}while(r)
Co(t)}function Ai(e,t){var r=e
e=0
do{var n=r.nextSibling
if(1===r.nodeType?t?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",""===r.getAttribute("style")&&r.removeAttribute("style")):3===r.nodeType&&(t?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),n&&8===n.nodeType)if("/$"===(r=n.data)){if(0===e)break
e--}else"$"!==r&&"$?"!==r&&"$~"!==r&&"$!"!==r||e++
r=n}while(r)}function Oi(e){var t=e.firstChild
for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var r=t
switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Oi(r),L(r)
continue
case"SCRIPT":case"STYLE":continue
case"LINK":if("stylesheet"===r.rel.toLowerCase())continue}e.removeChild(r)}}function Ii(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null
if(null===(e=Di(e.nextSibling)))return null}return e}function zi(e){return"$?"===e.data||"$~"===e.data}function Li(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Di(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType
if(1===t||3===t)break
if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break
if("/$"===t||"/&"===t)return null}}return e}function Ui(e){e=e.nextSibling
for(var t=0;e;){if(8===e.nodeType){var r=e.data
if("/$"===r||"/&"===r){if(0===t)return Di(e.nextSibling)
t--}else"$"!==r&&"$!"!==r&&"$?"!==r&&"$~"!==r&&"&"!==r||t++}e=e.nextSibling}return null}function $i(e){e=e.previousSibling
for(var t=0;e;){if(8===e.nodeType){var r=e.data
if("$"===r||"$!"===r||"$?"===r||"$~"===r||"&"===r){if(0===t)return e
t--}else"/$"!==r&&"/&"!==r||t++}e=e.previousSibling}return null}function Fi(t,r,n){switch(r=_i(n),t){case"html":if(!(t=r.documentElement))throw Error(e(452))
return t
case"head":if(!(t=r.head))throw Error(e(453))
return t
case"body":if(!(t=r.body))throw Error(e(454))
return t
default:throw Error(e(451))}}function Bi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0])
L(e)}function Wi(e){return"function"==typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}function Vi(e,t,r){var n=Up
if(n&&"string"==typeof t&&t){var a=Z(t)
a='link[rel="'+e+'"][href="'+a+'"]',"string"==typeof r&&(a+='[crossorigin="'+r+'"]'),Lp.has(a)||(Lp.add(a),e={rel:e,crossOrigin:r,href:t},null===n.querySelector(a)&&(ji(t=n.createElement("link"),"link",e),B(t),n.head.appendChild(t)))}}function qi(t,r,n,a){var s,i,o,l,c=(c=ll.current)?Wi(c):null
if(!c)throw Error(e(446))
switch(t){case"meta":case"title":return null
case"style":return"string"==typeof n.precedence&&"string"==typeof n.href?(r=Mi(n.href),(a=(n=F(c).hoistableStyles).get(r))||(a={type:"style",instance:null,count:0,state:null},n.set(r,a)),a):{type:"void",instance:null,count:0,state:null}
case"link":if("stylesheet"===n.rel&&"string"==typeof n.href&&"string"==typeof n.precedence){t=Mi(n.href)
var u=F(c).hoistableStyles,d=u.get(t)
if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,d),(u=c.querySelector(Hi(t)))&&!u._p&&(d.instance=u,d.state.loading=5),zp.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},zp.set(t,n),u||(s=c,i=t,o=n,l=d.state,s.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=s.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ji(i,"link",o),B(i),s.head.appendChild(i))))),r&&null===a)throw Error(e(528,""))
return d}if(r&&null!==a)throw Error(e(529,""))
return null
case"script":return r=n.async,"string"==typeof(n=n.src)&&r&&"function"!=typeof r&&"symbol"!=typeof r?(r=Yi(n),(a=(n=F(c).hoistableScripts).get(r))||(a={type:"script",instance:null,count:0,state:null},n.set(r,a)),a):{type:"void",instance:null,count:0,state:null}
default:throw Error(e(444,t))}}function Mi(e){return'href="'+Z(e)+'"'}function Hi(e){return'link[rel="stylesheet"]['+e+"]"}function Ki(e){return Lo({},e,{"data-precedence":e.precedence,precedence:null})}function Yi(e){return'[src="'+Z(e)+'"]'}function Gi(e){return"script[async]"+e}function Ji(t,r,n){if(r.count++,null===r.instance)switch(r.type){case"style":var a=t.querySelector('style[data-href~="'+Z(n.href)+'"]')
if(a)return r.instance=a,B(a),a
var s=Lo({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null})
return B(a=(t.ownerDocument||t).createElement("style")),ji(a,"style",s),Xi(a,n.precedence,t),r.instance=a
case"stylesheet":s=Mi(n.href)
var i=t.querySelector(Hi(s))
if(i)return r.state.loading|=4,r.instance=i,B(i),i
a=Ki(n),(s=zp.get(s))&&Zi(a,s),B(i=(t.ownerDocument||t).createElement("link"))
var o=i
return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ji(i,"link",a),r.state.loading|=4,Xi(i,n.precedence,t),r.instance=i
case"script":return i=Yi(n.src),(s=t.querySelector(Gi(i)))?(r.instance=s,B(s),s):(a=n,(s=zp.get(i))&&Qi(a=Lo({},n),s),B(s=(t=t.ownerDocument||t).createElement("script")),ji(s,"link",a),t.head.appendChild(s),r.instance=s)
case"void":return null
default:throw Error(e(443,r.type))}else"stylesheet"===r.type&&!(4&r.state.loading)&&(a=r.instance,r.state.loading|=4,Xi(a,n.precedence,t))
return r.instance}function Xi(e,t,r){for(var n=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,s=a,i=0;i<n.length;i++){var o=n[i]
if(o.dataset.precedence===t)s=o
else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=9===r.nodeType?r.head:r).insertBefore(e,t.firstChild)}function Zi(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Qi(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}function eo(e,t,r){if(null===$p){var n=new Map,a=$p=new Map
a.set(r,n)}else(n=(a=$p).get(r))||(n=new Map,a.set(r,n))
if(n.has(e))return n
for(n.set(e,null),r=r.getElementsByTagName(e),a=0;a<r.length;a++){var s=r[a]
if(!(s[Bl]||s[Il]||"link"===e&&"stylesheet"===s.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==s.namespaceURI){var i=s.getAttribute(t)||""
i=e+i
var o=n.get(i)
o?o.push(s):n.set(i,[s])}}return n}function to(e,t,r){(e=e.ownerDocument||e).head.insertBefore(r,"title"===t?e.querySelector("head > title"):null)}function ro(e){return!!("stylesheet"!==e.type||3&e.state.loading)}function no(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)ao(this,this.stylesheets)
else if(this.unsuspend){var e=this.unsuspend
this.unsuspend=null,e()}}function ao(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Bp=new Map,t.forEach(so,e),Bp=null,no.call(e))}function so(e,t){if(!(4&t.state.loading)){var r=Bp.get(e)
if(r)var n=r.get(null)
else{r=new Map,Bp.set(e,r)
for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var i=a[s]
"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(r.set(i.dataset.precedence,i),n=i)}n&&r.set(null,n)}i=(a=t.instance).getAttribute("data-precedence"),(s=r.get(i)||n)===n&&r.set(null,a),r.set(i,a),this.count++,n=no.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),s?s.parentNode.insertBefore(a,s.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}function io(e,t,r,n,a,s,i,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=E(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=E(0),this.hiddenUpdates=E(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function oo(e,t,r,n,a,s,i,o,l,c,u,d){return e=new io(e,t,r,i,l,c,u,d,o),t=1,!0===s&&(t|=24),s=Ze(3,null,null,t),e.current=s,s.stateNode=e,(t=Rt()).refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:r,cache:t},Mt(s),e}function lo(e){return e?e=fu:fu}function co(e,t,r,n,a,s){a=lo(a),null===n.context?n.context=a:n.pendingContext=a,(n=Kt(t)).payload={element:r},null!==(s=void 0===s?null:s)&&(n.callback=s),null!==(r=Yt(e,n,t))&&(vs(r,0,t),Gt(r,e,t))}function uo(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane
e.retryLane=0!==r&&r<t?r:t}}function po(e,t){uo(e,t),(e=e.alternate)&&uo(e,t)}function fo(e){if(13===e.tag||31===e.tag){var t=Ye(e,67108864)
null!==t&&vs(t,0,67108864),po(e,67108864)}}function ho(e){if(13===e.tag||31===e.tag){var t=gs(),r=Ye(e,t=A(t))
null!==r&&vs(r,0,t),po(e,t)}}function mo(e,t,r,n){var a=tl.T
tl.T=null
var s=rl.p
try{rl.p=2,bo(e,t,r,n)}finally{rl.p=s,tl.T=a}}function go(e,t,r,n){var a=tl.T
tl.T=null
var s=rl.p
try{rl.p=8,bo(e,t,r,n)}finally{rl.p=s,tl.T=a}}function bo(e,t,r,n){if(Vp){var a=vo(n)
if(null===a)hi(e,t,n,qp,r),wo(e,n)
else if(function(e,t,r,n,a){switch(t){case"focusin":return Hp=ko(Hp,e,t,r,n,a),!0
case"dragenter":return Kp=ko(Kp,e,t,r,n,a),!0
case"mouseover":return Yp=ko(Yp,e,t,r,n,a),!0
case"pointerover":var s=a.pointerId
return Gp.set(s,ko(Gp.get(s)||null,e,t,r,n,a)),!0
case"gotpointercapture":return s=a.pointerId,Jp.set(s,ko(Jp.get(s)||null,e,t,r,n,a)),!0}return!1}(a,e,t,r,n))n.stopPropagation()
else if(wo(e,n),4&t&&-1<Zp.indexOf(e)){for(;null!==a;){var s=U(a)
if(null!==s)switch(s.tag){case 3:if((s=s.stateNode).current.memoizedState.isDehydrated){var i=w(s.pendingLanes)
if(0!==i){var o=s
for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var l=1<<31-El(i)
o.entanglements[1]|=l,i&=~l}Qs(s),!(6&zd)&&(rp=gl()+500,ei(0))}}break
case 31:case 13:null!==(o=Ye(s,2))&&vs(o,0,2),js(),po(s,2)}if(null===(s=vo(n))&&hi(e,t,n,qp,r),s===a)break
a=s}null!==a&&n.stopPropagation()}else hi(e,t,n,null,r)}}function vo(e){return yo(e=de(e))}function yo(e){if(qp=null,null!==(e=D(e))){var t=r(e)
if(null===t)e=null
else{var s=t.tag
if(13===s){if(null!==(e=n(t)))return e
e=null}else if(31===s){if(null!==(e=a(t)))return e
e=null}else if(3===s){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null
e=null}else t!==e&&(e=null)}}return qp=e,null}function xo(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8
case"message":switch(bl()){case vl:return 2
case yl:return 8
case xl:case wl:return 32
case kl:return 268435456
default:return 32}default:return 32}}function wo(e,t){switch(e){case"focusin":case"focusout":Hp=null
break
case"dragenter":case"dragleave":Kp=null
break
case"mouseover":case"mouseout":Yp=null
break
case"pointerover":case"pointerout":Gp.delete(t.pointerId)
break
case"gotpointercapture":case"lostpointercapture":Jp.delete(t.pointerId)}}function ko(e,t,r,n,a,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[a]},null!==t&&null!==(t=U(t))&&fo(t),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function jo(e){var t=D(e.target)
if(null!==t){var s=r(t)
if(null!==s)if(13===(t=s.tag)){if(null!==(t=n(s)))return e.blockedOn=t,void z(e.priority,function(){ho(s)})}else if(31===t){if(null!==(t=a(s)))return e.blockedOn=t,void z(e.priority,function(){ho(s)})}else if(3===t&&s.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===s.tag?s.stateNode.containerInfo:null)}e.blockedOn=null}function So(e){if(null!==e.blockedOn)return!1
for(var t=e.targetContainers;0<t.length;){var r=vo(e.nativeEvent)
if(null!==r)return null!==(t=U(r))&&fo(t),e.blockedOn=r,!1
var n=new(r=e.nativeEvent).constructor(r.type,r)
Xl=n,r.target.dispatchEvent(n),Xl=null,t.shift()}return!0}function _o(e,t,r){So(e)&&r.delete(t)}function No(){Mp=!1,null!==Hp&&So(Hp)&&(Hp=null),null!==Kp&&So(Kp)&&(Kp=null),null!==Yp&&So(Yp)&&(Yp=null),Gp.forEach(_o),Jp.forEach(_o)}function Eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Mp||(Mp=!0,zo.unstable_scheduleCallback(zo.unstable_NormalPriority,No)))}function To(e){Qp!==e&&(Qp=e,zo.unstable_scheduleCallback(zo.unstable_NormalPriority,function(){Qp===e&&(Qp=null)
for(var t=0;t<e.length;t+=3){var r=e[t],n=e[t+1],a=e[t+2]
if("function"!=typeof n){if(null===yo(n||r))continue
break}var s=U(r)
null!==s&&(e.splice(t,3),t-=3,vn(s,{pending:!0,data:a,method:r.method,action:n},n,a))}}))}function Co(e){function t(t){return Eo(t,e)}null!==Hp&&Eo(Hp,e),null!==Kp&&Eo(Kp,e),null!==Yp&&Eo(Yp,e),Gp.forEach(t),Jp.forEach(t)
for(var r=0;r<Xp.length;r++){var n=Xp[r]
n.blockedOn===e&&(n.blockedOn=null)}for(;0<Xp.length&&null===(r=Xp[0]).blockedOn;)jo(r),null===r.blockedOn&&Xp.shift()
if(null!=(r=(e.ownerDocument||e).$$reactFormReplay))for(n=0;n<r.length;n+=3){var a=r[n],s=r[n+1],i=a[zl]||null
if("function"==typeof s)i||To(r)
else if(i){var o=null
if(s&&s.hasAttribute("formAction")){if(a=s,i=s[zl]||null)o=i.formAction
else if(null!==yo(a))continue}else o=i.action
"function"==typeof o?r[n+1]=o:(r.splice(n,3),n-=3),To(r)}}}function Ro(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==a&&(a(),a=null),n||setTimeout(r,20)}function r(){if(!n&&!navigation.transition){var e=navigation.currentEntry
e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"==typeof navigation){var n=!1,a=null
return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(r,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}function Po(e){this._internalRoot=e}function Ao(e){this._internalRoot=e}if(un)return yn
un=1
var Oo,Io,zo=(on||(on=1,xn.exports=(sn||(sn=1,function(e){function t(e,t){var r=e.length
e.push(t)
e:for(;0<r;){var n=r-1>>>1,s=e[n]
if(!(0<a(s,t)))break e
e[n]=t,e[r]=s,r=n}}function r(e){return 0===e.length?null:e[0]}function n(e){if(0===e.length)return null
var t=e[0],r=e.pop()
if(r!==t){e[0]=r
e:for(var n=0,s=e.length,i=s>>>1;n<i;){var o=2*(n+1)-1,l=e[o],c=o+1,u=e[c]
if(0>a(l,r))c<s&&0>a(u,l)?(e[n]=u,e[c]=r,n=c):(e[n]=l,e[o]=r,n=o)
else{if(!(c<s&&0>a(u,r)))break e
e[n]=u,e[c]=r,n=c}}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex
return 0!==r?r:e.id-t.id}function s(e){for(var a=r(m);null!==a;){if(null===a.callback)n(m)
else{if(!(a.startTime<=e))break
n(m),a.sortIndex=a.expirationTime,t(h,a)}a=r(m)}}function i(e){if(w=!1,s(e),!x)if(null!==r(h))x=!0,N||(N=!0,f())
else{var t=r(m)
null!==t&&c(i,t.startTime-e)}}function o(){return!(!k&&e.unstable_now()-C<T)}function l(){if(k=!1,N){var t=e.unstable_now()
C=t
var a=!0
try{e:{x=!1,w&&(w=!1,S(E),E=-1),y=!0
var l=v
try{t:{for(s(t),b=r(h);null!==b&&!(b.expirationTime>t&&o());){var u=b.callback
if("function"==typeof u){b.callback=null,v=b.priorityLevel
var d=u(b.expirationTime<=t)
if(t=e.unstable_now(),"function"==typeof d){b.callback=d,s(t),a=!0
break t}b===r(h)&&n(h),s(t)}else n(h)
b=r(h)}if(null!==b)a=!0
else{var p=r(m)
null!==p&&c(i,p.startTime-t),a=!1}}break e}finally{b=null,v=l,y=!1}a=void 0}}finally{a?f():N=!1}}}function c(t,r){E=j(function(){t(e.unstable_now())},r)}if(e.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var u=performance
e.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now()
e.unstable_now=function(){return d.now()-p}}var f,h=[],m=[],g=1,b=null,v=3,y=!1,x=!1,w=!1,k=!1,j="function"==typeof setTimeout?setTimeout:null,S="function"==typeof clearTimeout?clearTimeout:null,_="undefined"!=typeof setImmediate?setImmediate:null,N=!1,E=-1,T=5,C=-1
if("function"==typeof _)f=function(){_(l)}
else if("undefined"!=typeof MessageChannel){var R=new MessageChannel,P=R.port2
R.port1.onmessage=l,f=function(){P.postMessage(null)}}else f=function(){j(l,0)}
e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e||(T=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(e){switch(v){case 1:case 2:case 3:var t=3
break
default:t=v}var r=v
v=t
try{return e()}finally{v=r}},e.unstable_requestPaint=function(){k=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var r=v
v=e
try{return t()}finally{v=r}},e.unstable_scheduleCallback=function(n,a,s){var o=e.unstable_now()
switch(s="object"==typeof s&&null!==s&&"number"==typeof(s=s.delay)&&0<s?o+s:o,n){case 1:var l=-1
break
case 2:l=250
break
case 5:l=1073741823
break
case 4:l=1e4
break
default:l=5e3}return n={id:g++,callback:a,priorityLevel:n,startTime:s,expirationTime:l=s+l,sortIndex:-1},s>o?(n.sortIndex=s,t(m,n),null===r(h)&&n===r(m)&&(w?(S(E),E=-1):w=!0,c(i,s-o))):(n.sortIndex=l,t(h,n),x||y||(x=!0,N||(N=!0,f()))),n},e.unstable_shouldYield=o,e.unstable_wrapCallback=function(e){var t=v
return function(){var r=v
v=t
try{return e.apply(this,arguments)}finally{v=r}}}}(wn)),wn)),xn.exports),React=k(),ReactDOM=(cn||(cn=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),kn.exports=function(){function e(e,t){var r="https://react.dev/errors/"+e
if(1<arguments.length){r+="?args[]="+encodeURIComponent(t)
for(var n=2;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}function r(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}if(ln)return jn
ln=1
var React=k(),n={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal"),s=React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,jn.createPortal=function(t,r,n){var s=2<arguments.length&&void 0!==n?n:null
if(!r||1!==r.nodeType&&9!==r.nodeType&&11!==r.nodeType)throw Error(e(299))
return function(e,t,r,n){var s=3<arguments.length&&void 0!==n?n:null
return{$$typeof:a,key:null==s?null:""+s,children:e,containerInfo:t,implementation:r}}(t,r,null,s)},jn.flushSync=function(e){var t=s.T,r=n.p
try{if(s.T=null,n.p=2,e)return e()}finally{s.T=t,n.p=r,n.d.f()}},jn.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,n.d.C(e,t))},jn.prefetchDNS=function(e){"string"==typeof e&&n.d.D(e)},jn.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var a=t.as,s=r(a,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0
"style"===a?n.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:s,integrity:i,fetchPriority:o}):"script"===a&&n.d.X(e,{crossOrigin:s,integrity:i,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},jn.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var a=r(t.as,t.crossOrigin)
n.d.M(e,{crossOrigin:a,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&n.d.M(e)},jn.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var a=t.as,s=r(a,t.crossOrigin)
n.d.L(e,a,{crossOrigin:s,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},jn.preloadModule=function(e,t){if("string"==typeof e)if(t){var a=r(t.as,t.crossOrigin)
n.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:a,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else n.d.m(e)},jn.requestFormReset=function(e){n.d.r(e)},jn.unstable_batchedUpdates=function(e,t){return e(t)},jn.useFormState=function(e,t,r){return s.H.useFormState(e,t,r)},jn.useFormStatus=function(){return s.H.useHostTransitionStatus()},jn.version="19.2.1",jn}()),kn.exports),Lo=Object.assign,Do=Symbol.for("react.element"),Uo=Symbol.for("react.transitional.element"),$o=Symbol.for("react.portal"),Fo=Symbol.for("react.fragment"),Bo=Symbol.for("react.strict_mode"),Wo=Symbol.for("react.profiler"),Vo=Symbol.for("react.consumer"),qo=Symbol.for("react.context"),Mo=Symbol.for("react.forward_ref"),Ho=Symbol.for("react.suspense"),Ko=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),Go=Symbol.for("react.lazy"),Jo=Symbol.for("react.activity"),Xo=Symbol.for("react.memo_cache_sentinel"),Zo=Symbol.iterator,Qo=Symbol.for("react.client.reference"),el=Array.isArray,tl=React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rl=ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nl={pending:!1,data:null,method:null,action:null},al=[],sl=-1,il=c(null),ol=c(null),ll=c(null),cl=c(null),ul=!1,dl=Object.prototype.hasOwnProperty,pl=zo.unstable_scheduleCallback,fl=zo.unstable_cancelCallback,hl=zo.unstable_shouldYield,ml=zo.unstable_requestPaint,gl=zo.unstable_now,bl=zo.unstable_getCurrentPriorityLevel,vl=zo.unstable_ImmediatePriority,yl=zo.unstable_UserBlockingPriority,xl=zo.unstable_NormalPriority,wl=zo.unstable_LowPriority,kl=zo.unstable_IdlePriority,jl=zo.log,Sl=zo.unstable_setDisableYieldValue,_l=null,Nl=null,El=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(Tl(e)/Cl|0)|0},Tl=Math.log,Cl=Math.LN2,Rl=256,Pl=262144,Al=4194304,Ol=Math.random().toString(36).slice(2),Il="__reactFiber$"+Ol,zl="__reactProps$"+Ol,Ll="__reactContainer$"+Ol,Dl="__reactEvents$"+Ol,Ul="__reactListeners$"+Ol,$l="__reactHandles$"+Ol,Fl="__reactResources$"+Ol,Bl="__reactMarker$"+Ol,Wl=new Set,Vl={},ql=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ml={},Hl={},Kl=/[\n"\\]/g,Yl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),Gl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,Xl=null,Zl=null,Ql=null,ec=!1,tc=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),rc=!1
if(tc)try{var nc={}
Object.defineProperty(nc,"passive",{get:function(){rc=!0}}),window.addEventListener("test",nc,nc),window.removeEventListener("test",nc,nc)}catch(nf){rc=!1}var ac,sc,ic,oc=null,lc=null,cc=null,uc={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dc=ye(uc),pc=Lo({},uc,{view:0,detail:0}),fc=ye(pc),hc=Lo({},pc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:we,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ic&&(ic&&"mousemove"===e.type?(ac=e.screenX-ic.screenX,sc=e.screenY-ic.screenY):sc=ac=0,ic=e),ac)},movementY:function(e){return"movementY"in e?e.movementY:sc}}),mc=ye(hc),gc=ye(Lo({},hc,{dataTransfer:0})),bc=ye(Lo({},pc,{relatedTarget:0})),vc=ye(Lo({},uc,{animationName:0,elapsedTime:0,pseudoElement:0})),yc=ye(Lo({},uc,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),xc=ye(Lo({},uc,{data:0})),wc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Sc=ye(Lo({},pc,{key:function(e){if(e.key){var t=wc[e.key]||e.key
if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=ge(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:we,charCode:function(e){return"keypress"===e.type?ge(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?ge(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),_c=ye(Lo({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nc=ye(Lo({},pc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:we})),Ec=ye(Lo({},uc,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tc=ye(Lo({},hc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Cc=ye(Lo({},uc,{newState:0,oldState:0})),Rc=[9,13,27,32],Pc=tc&&"CompositionEvent"in window,Ac=null
tc&&"documentMode"in document&&(Ac=document.documentMode)
var Oc=tc&&"TextEvent"in window&&!Ac,Ic=tc&&(!Pc||Ac&&8<Ac&&11>=Ac),zc=String.fromCharCode(32),Lc=!1,Dc=!1,Uc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},$c=null,Fc=null,Bc=!1
if(tc){var Wc
if(tc){var Vc="oninput"in document
if(!Vc){var qc=document.createElement("div")
qc.setAttribute("oninput","return;"),Vc="function"==typeof qc.oninput}Wc=Vc}else Wc=!1
Bc=Wc&&(!document.documentMode||9<document.documentMode)}var Mc="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Hc=tc&&"documentMode"in document&&11>=document.documentMode,Kc=null,Yc=null,Gc=null,Jc=!1,Xc={animationend:We("Animation","AnimationEnd"),animationiteration:We("Animation","AnimationIteration"),animationstart:We("Animation","AnimationStart"),transitionrun:We("Transition","TransitionRun"),transitionstart:We("Transition","TransitionStart"),transitioncancel:We("Transition","TransitionCancel"),transitionend:We("Transition","TransitionEnd")},Zc={},Qc={}
tc&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete Xc.animationend.animation,delete Xc.animationiteration.animation,delete Xc.animationstart.animation),"TransitionEvent"in window||delete Xc.transitionend.transition)
var eu=Ve("animationend"),tu=Ve("animationiteration"),ru=Ve("animationstart"),nu=Ve("transitionrun"),au=Ve("transitionstart"),su=Ve("transitioncancel"),iu=Ve("transitionend"),ou=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ")
lu.push("scrollEnd")
var cu="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e})
if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)},uu=[],du=0,pu=0,fu={},hu=new WeakMap,mu=[],gu=0,bu=null,vu=0,yu=[],xu=0,wu=null,ku=1,ju="",Su=null,_u=null,Nu=!1,Eu=null,Tu=!1,Cu=Error(e(519)),Ru=c(null),Pu=null,Au=null,Ou="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}}
this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Iu=zo.unstable_scheduleCallback,zu=zo.unstable_NormalPriority,Lu={$$typeof:qo,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},Du=null,Uu=0,$u=0,Fu=null,Bu=tl.S
tl.S=function(e,t){tp=gl(),"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===Du){var r=Du=[]
Uu=0,$u=ii(),Fu={status:"pending",value:void 0,then:function(e){r.push(e)}}}Uu++,t.then(At,At)}(0,t),null!==Bu&&Bu(e,t)}
var Wu=c(null),Vu=Error(e(460)),qu=Error(e(474)),Mu=Error(e(542)),Hu={then:function(){}},Ku=null,Yu=null,Gu=0,Ju=qt(!0),Xu=qt(!1),Zu=!1,Qu=!1,ed=c(null),td=c(0),rd=c(null),nd=null,ad=c(0),sd=0,id=null,od=null,ld=null,cd=!1,ud=!1,dd=!1,pd=0,fd=0,hd=null,md=0,gd={readContext:Et,use:kr,useCallback:ur,useContext:ur,useEffect:ur,useImperativeHandle:ur,useLayoutEffect:ur,useInsertionEffect:ur,useMemo:ur,useReducer:ur,useRef:ur,useState:ur,useDebugValue:ur,useDeferredValue:ur,useTransition:ur,useSyncExternalStore:ur,useId:ur,useHostTransitionStatus:ur,useFormState:ur,useActionState:ur,useOptimistic:ur,useMemoCache:ur,useCacheRefresh:ur}
gd.useEffectEvent=ur
var bd={readContext:Et,use:kr,useCallback:function(e,t){return yr().memoizedState=[e,void 0===t?null:t],e},useContext:Et,useEffect:Zr,useImperativeHandle:function(e,t,r){r=null!=r?r.concat([e]):null,Jr(4194308,4,nn.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Jr(4194308,4,e,t)},useInsertionEffect:function(e,t){Jr(4,2,e,t)},useMemo:function(e,t){var r=yr()
t=void 0===t?null:t
var n=e()
if(dd){x(!0)
try{e()}finally{x(!1)}}return r.memoizedState=[n,t],n},useReducer:function(e,t,r){var n=yr()
if(void 0!==r){var a=r(t)
if(dd){x(!0)
try{r(t)}finally{x(!1)}}}else a=t
return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=Rn.bind(null,id,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},yr().memoizedState=e},useState:function(e){var t=(e=Ir(e)).queue,r=Pn.bind(null,id,t)
return t.dispatch=r,[e.memoizedState,r]},useDebugValue:dn,useDeferredValue:function(e,t){return hn(yr(),e,t)},useTransition:function(){var e=Ir(!1)
return e=gn.bind(null,id,e.queue,!0,!1),yr().memoizedState=e,[!1,e]},useSyncExternalStore:function(t,r,n){var a=id,s=yr()
if(Nu){if(void 0===n)throw Error(e(407))
n=n()}else{if(n=r(),null===Ld)throw Error(e(349))
127&Ud||Cr(a,r,n)}s.memoizedState=n
var i={value:n,getSnapshot:r}
return s.queue=i,Zr(Pr.bind(null,a,i,t),[t]),a.flags|=2048,Yr(9,{destroy:void 0},Rr.bind(null,a,i,n,r),null),n},useId:function(){var e=yr(),t=Ld.identifierPrefix
if(Nu){var r=ju
t="_"+t+"R_"+(r=(ku&~(1<<32-El(ku)-1)).toString(32)+r),0<(r=pd++)&&(t+="H"+r.toString(32)),t+="_"}else t="_"+t+"r_"+(r=md++).toString(32)+"_"
return e.memoizedState=t},useHostTransitionStatus:Nn,useFormState:Vr,useActionState:Vr,useOptimistic:function(e){var t=yr()
t.memoizedState=t.baseState=e
var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null}
return t.queue=r,t=On.bind(null,id,!0,r),r.dispatch=t,[e,t]},useMemoCache:jr,useCacheRefresh:function(){return yr().memoizedState=Cn.bind(null,id)},useEffectEvent:function(t){var r=yr(),n={impl:t}
return r.memoizedState=n,function(){if(2&zd)throw Error(e(440))
return n.impl.apply(void 0,arguments)}}},vd={readContext:Et,use:kr,useCallback:pn,useContext:Et,useEffect:Qr,useImperativeHandle:an,useInsertionEffect:tn,useLayoutEffect:rn,useMemo:fn,useReducer:_r,useRef:Gr,useState:function(){return _r(Sr)},useDebugValue:dn,useDeferredValue:function(e,t){return mn(xr(),od.memoizedState,e,t)},useTransition:function(){var e=_r(Sr)[0],t=xr().memoizedState
return["boolean"==typeof e?e:wr(e),t]},useSyncExternalStore:Tr,useId:En,useHostTransitionStatus:Nn,useFormState:qr,useActionState:qr,useOptimistic:function(e,t){return zr(xr(),0,e,t)},useMemoCache:jr,useCacheRefresh:Tn}
vd.useEffectEvent=en
var yd={readContext:Et,use:kr,useCallback:pn,useContext:Et,useEffect:Qr,useImperativeHandle:an,useInsertionEffect:tn,useLayoutEffect:rn,useMemo:fn,useReducer:Er,useRef:Gr,useState:function(){return Er(Sr)},useDebugValue:dn,useDeferredValue:function(e,t){var r=xr()
return null===od?hn(r,e,t):mn(r,od.memoizedState,e,t)},useTransition:function(){var e=Er(Sr)[0],t=xr().memoizedState
return["boolean"==typeof e?e:wr(e),t]},useSyncExternalStore:Tr,useId:En,useHostTransitionStatus:Nn,useFormState:Kr,useActionState:Kr,useOptimistic:function(e,t){var r=xr()
return null!==od?zr(r,0,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:jr,useCacheRefresh:Tn}
yd.useEffectEvent=en
for(var xd={enqueueSetState:function(e,t,r){e=e._reactInternals
var n=gs(),a=Kt(n)
a.payload=t,null!=r&&(a.callback=r),null!==(t=Yt(e,a,n))&&(vs(t,0,n),Gt(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals
var n=gs(),a=Kt(n)
a.tag=1,a.payload=t,null!=r&&(a.callback=r),null!==(t=Yt(e,a,n))&&(vs(t,0,n),Gt(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals
var r=gs(),n=Kt(r)
n.tag=2,null!=t&&(n.callback=t),null!==(t=Yt(e,n,r))&&(vs(t,0,r),Gt(t,e,r))}},wd=Error(e(461)),kd=!1,jd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},Sd=!1,_d=!1,Nd=!1,Ed="function"==typeof WeakSet?WeakSet:Set,Td=null,Cd=null,Rd=!1,Pd=null,Ad=8192,Od={getCacheForType:function(e){var t=Et(Lu),r=t.data.get(e)
return void 0===r&&(r=e(),t.data.set(e,r)),r},cacheSignal:function(){return Et(Lu).controller.signal}},Id="function"==typeof WeakMap?WeakMap:Map,zd=0,Ld=null,Dd=null,Ud=0,$d=0,Fd=null,Bd=!1,Wd=!1,Vd=!1,qd=0,Md=0,Hd=0,Kd=0,Yd=0,Gd=0,Jd=0,Xd=null,Zd=null,Qd=!1,ep=0,tp=0,rp=1/0,np=null,ap=null,sp=0,ip=null,op=null,lp=0,cp=0,up=null,dp=null,pp=0,fp=null,hp=null,mp=null,gp=!1,bp=!1,vp=!1,yp=0,xp=0;xp<lu.length;xp++){var wp=lu[xp]
qe(wp.toLowerCase(),"on"+(wp[0].toUpperCase()+wp.slice(1)))}qe(eu,"onAnimationEnd"),qe(tu,"onAnimationIteration"),qe(ru,"onAnimationStart"),qe("dblclick","onDoubleClick"),qe("focusin","onFocus"),qe("focusout","onBlur"),qe(nu,"onTransitionRun"),qe(au,"onTransitionStart"),qe(su,"onTransitionCancel"),qe(iu,"onTransitionEnd"),V("onMouseEnter",["mouseout","mouseover"]),V("onMouseLeave",["mouseout","mouseover"]),V("onPointerEnter",["pointerout","pointerover"]),V("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "))
var kp="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kp)),Sp="_reactListening"+Math.random().toString(36).slice(2),_p=/\r\n?/g,Np=/\u0000|\uFFFD/g,Ep=null,Tp=null,Cp=null,Rp="function"==typeof setTimeout?setTimeout:void 0,Pp="function"==typeof clearTimeout?clearTimeout:void 0,Ap="function"==typeof Promise?Promise:void 0,Op="function"==typeof queueMicrotask?queueMicrotask:void 0!==Ap?function(e){return Ap.resolve(null).then(e).catch(Ci)}:Rp,Ip=null,zp=new Map,Lp=new Set,Dp=rl.d
rl.d={f:function(){var e=Dp.f(),t=js()
return e||t},r:function(e){var t=U(e)
null!==t&&5===t.tag&&"form"===t.type?_n(t):Dp.r(e)},D:function(e){Dp.D(e),Vi("dns-prefetch",e,null)},C:function(e,t){Dp.C(e,t),Vi("preconnect",e,t)},L:function(e,t,r){Dp.L(e,t,r)
var n=Up
if(n&&e&&t){var a='link[rel="preload"][as="'+Z(t)+'"]'
"image"===t&&r&&r.imageSrcSet?(a+='[imagesrcset="'+Z(r.imageSrcSet)+'"]',"string"==typeof r.imageSizes&&(a+='[imagesizes="'+Z(r.imageSizes)+'"]')):a+='[href="'+Z(e)+'"]'
var s=a
switch(t){case"style":s=Mi(e)
break
case"script":s=Yi(e)}zp.has(s)||(e=Lo({rel:"preload",href:"image"===t&&r&&r.imageSrcSet?void 0:e,as:t},r),zp.set(s,e),null!==n.querySelector(a)||"style"===t&&n.querySelector(Hi(s))||"script"===t&&n.querySelector(Gi(s))||(ji(t=n.createElement("link"),"link",e),B(t),n.head.appendChild(t)))}},m:function(e,t){Dp.m(e,t)
var r=Up
if(r&&e){var n=t&&"string"==typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+Z(n)+'"][href="'+Z(e)+'"]',s=a
switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Yi(e)}if(!zp.has(s)&&(e=Lo({rel:"modulepreload",href:e},t),zp.set(s,e),null===r.querySelector(a))){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Gi(s)))return}ji(n=r.createElement("link"),"link",e),B(n),r.head.appendChild(n)}}},X:function(e,t){Dp.X(e,t)
var r=Up
if(r&&e){var n=F(r).hoistableScripts,a=Yi(e),s=n.get(a)
s||((s=r.querySelector(Gi(a)))||(e=Lo({src:e,async:!0},t),(t=zp.get(a))&&Qi(e,t),B(s=r.createElement("script")),ji(s,"link",e),r.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(a,s))}},S:function(e,t,r){Dp.S(e,t,r)
var n=Up
if(n&&e){var a=F(n).hoistableStyles,s=Mi(e)
t=t||"default"
var i=a.get(s)
if(!i){var o={loading:0,preload:null}
if(i=n.querySelector(Hi(s)))o.loading=5
else{e=Lo({rel:"stylesheet",href:e,"data-precedence":t},r),(r=zp.get(s))&&Zi(e,r)
var l=i=n.createElement("link")
B(l),ji(l,"link",e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Xi(i,t,n)}i={type:"stylesheet",instance:i,count:1,state:o},a.set(s,i)}}},M:function(e,t){Dp.M(e,t)
var r=Up
if(r&&e){var n=F(r).hoistableScripts,a=Yi(e),s=n.get(a)
s||((s=r.querySelector(Gi(a)))||(e=Lo({src:e,async:!0,type:"module"},t),(t=zp.get(a))&&Qi(e,t),B(s=r.createElement("script")),ji(s,"link",e),r.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(a,s))}}}
var Up="undefined"==typeof document?null:document,$p=null,Fp=0,Bp=null,Wp={$$typeof:qo,Provider:null,Consumer:null,_currentValue:nl,_currentValue2:nl,_threadCount:0},Vp=!0,qp=null,Mp=!1,Hp=null,Kp=null,Yp=null,Gp=new Map,Jp=new Map,Xp=[],Zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),Qp=null
Ao.prototype.render=Po.prototype.render=function(t){var r=this._internalRoot
if(null===r)throw Error(e(409))
co(r.current,gs(),t,r,null,null)},Ao.prototype.unmount=Po.prototype.unmount=function(){var e=this._internalRoot
if(null!==e){this._internalRoot=null
var t=e.containerInfo
co(e.current,2,null,e,null,null),js(),t[Ll]=null}},Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=I()
e={blockedOn:null,target:e,priority:t}
for(var r=0;r<Xp.length&&0!==t&&t<Xp[r].priority;r++);Xp.splice(r,0,e),0===r&&jo(e)}}
var ef=React.version
if("19.2.1"!==ef)throw Error(e(527,ef,"19.2.1"))
rl.findDOMNode=function(t){var n=t._reactInternals
if(void 0===n){if("function"==typeof t.render)throw Error(e(188))
throw t=Object.keys(t).join(","),Error(e(268,t))}return t=function(t){var n=t.alternate
if(!n){if(null===(n=r(t)))throw Error(e(188))
return n!==t?null:t}for(var a=t,i=n;;){var o=a.return
if(null===o)break
var l=o.alternate
if(null===l){if(null!==(i=o.return)){a=i
continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===a)return s(o),t
if(l===i)return s(o),n
l=l.sibling}throw Error(e(188))}if(a.return!==i.return)a=o,i=l
else{for(var c=!1,u=o.child;u;){if(u===a){c=!0,a=o,i=l
break}if(u===i){c=!0,i=o,a=l
break}u=u.sibling}if(!c){for(u=l.child;u;){if(u===a){c=!0,a=l,i=o
break}if(u===i){c=!0,i=l,a=o
break}u=u.sibling}if(!c)throw Error(e(189))}}if(a.alternate!==i)throw Error(e(190))}if(3!==a.tag)throw Error(e(188))
return a.stateNode.current===a?t:n}(n),null===(t=null!==t?i(t):null)?null:t.stateNode}
var tf={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:tl,reconcilerVersion:"19.2.1"}
if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rf=__REACT_DEVTOOLS_GLOBAL_HOOK__
if(!rf.isDisabled&&rf.supportsFiber)try{_l=rf.inject(tf),Nl=rf}catch(af){}}return yn.createRoot=function(r,n){if(!t(r))throw Error(e(299))
var a=!1,s="",i=Bn,o=Wn,l=Vn
return null!=n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(o=n.onCaughtError),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),n=oo(r,1,!1,null,0,a,s,null,i,o,l,Ro),r[Ll]=n.current,pi(r),new Po(n)},yn.hydrateRoot=function(r,n,a){if(!t(r))throw Error(e(299))
var s=!1,i="",o=Bn,l=Wn,c=Vn,u=null
return null!=a&&(!0===a.unstable_strictMode&&(s=!0),void 0!==a.identifierPrefix&&(i=a.identifierPrefix),void 0!==a.onUncaughtError&&(o=a.onUncaughtError),void 0!==a.onCaughtError&&(l=a.onCaughtError),void 0!==a.onRecoverableError&&(c=a.onRecoverableError),void 0!==a.formState&&(u=a.formState)),(n=oo(r,1,!0,n,0,s,i,u,o,l,c,Ro)).context=lo(null),a=n.current,(i=Kt(s=A(s=gs()))).callback=null,Yt(a,i,s),a=s,n.current.lanes=a,T(n,a),Qs(n),r[Ll]=n.current,pi(r),new Ao(n)},yn.version="19.2.1",yn}()),vn.exports),_n="popstate",Nn=/^:[\w-]+$/,En=3,Tn=2,Cn=1,Rn=10,Pn=-2,An=e=>"*"===e,On=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,In=e=>e.join("/").replace(/\/\/+/g,"/"),zn=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ln=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Dn=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:""
Object.getOwnPropertyNames(Object.prototype).sort().join("\0")
var Un=["POST","PUT","PATCH","DELETE"]
new Set(Un)
var $n=["GET",...Un]
new Set($n)
var Fn=bn.createContext(null)
Fn.displayName="DataRouter"
var Bn=bn.createContext(null)
Bn.displayName="DataRouterState",bn.createContext(!1)
var Wn=bn.createContext({isTransitioning:!1})
Wn.displayName="ViewTransition",bn.createContext(new Map).displayName="Fetchers",bn.createContext(null).displayName="Await"
var Vn=bn.createContext(null)
Vn.displayName="Navigation"
var qn=bn.createContext(null)
qn.displayName="Location"
var Mn=bn.createContext({outlet:null,matches:[],isDataRoute:!1})
Mn.displayName="Route"
var Hn=bn.createContext(null)
Hn.displayName="RouteError"
var Kn="You should call navigate() in a React.useEffect(), not when your component is first rendered."
bn.createContext(null)
var Yn=bn.createElement(Y,null),Gn=class extends bn.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError&&this.props.onError(e,t)}render(){return void 0!==this.state.error?bn.createElement(Mn.Provider,{value:this.props.routeContext},bn.createElement(Hn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}},Jn={}
bn.memo(function({routes:e,future:t,state:r,unstable_onError:n}){return K(e,void 0,r,n)})
var Xn="get",Zn="application/x-www-form-urlencoded",Qn=null,ea=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"])
Object.getOwnPropertyNames(Object.prototype).sort().join("\0")
var ta=bn.createContext(void 0)
ta.displayName="FrameworkContext"
var ra="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement
try{ra&&(window.__reactRouterVersion="7.10.1")}catch(hc){}var na=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aa=bn.forwardRef(function(e,r){var n,a=e.onClick,s=e.discover,o=void 0===s?"render":s,l=e.prefetch,c=void 0===l?"none":l,d=e.relative,p=e.reloadDocument,f=e.replace,h=e.state,m=e.target,g=e.to,v=e.preventScrollReset,y=e.viewTransition,x=t(e,b),w=bn.useContext(Vn),k=w.basename,_=w.unstable_useTransitions,N="string"==typeof g&&na.test(g),T=!1
if("string"==typeof g&&N&&(n=g,ra))try{var C=new URL(window.location.href),R=g.startsWith("//")?new URL(C.protocol+g):new URL(g),P=L(R.pathname,k)
R.origin===C.origin&&null!=P?g=P+R.search+R.hash:T=!0}catch(hc){S(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}var A=function(e,{relative:t}={}){j(W(),"useHref() may be used only in the context of a <Router> component.")
var r=bn.useContext(Vn),n=r.basename,a=r.navigator,s=H(e,{relative:t}),i=s.hash,o=s.pathname,l=s.search,c=o
return"/"!==n&&(c="/"===o?n:In([n,o])),a.createHref({pathname:c,search:l,hash:i})}(g,{relative:d}),O=function(e,t){var r=bn.useContext(ta),n=i(bn.useState(!1),2),a=n[0],s=n[1],o=i(bn.useState(!1),2),l=o[0],c=o[1],u=t.onFocus,d=t.onBlur,p=t.onMouseEnter,f=t.onMouseLeave,h=t.onTouchStart,m=bn.useRef(null)
bn.useEffect(()=>{if("render"===e&&c(!0),"viewport"===e){var t=new IntersectionObserver(e=>{e.forEach(e=>{c(e.isIntersecting)})},{threshold:.5})
return m.current&&t.observe(m.current),()=>{t.disconnect()}}},[e]),bn.useEffect(()=>{if(a){var e=setTimeout(()=>{c(!0)},100)
return()=>{clearTimeout(e)}}},[a])
var g=()=>{s(!0)},b=()=>{s(!1),c(!1)}
return r?"intent"!==e?[l,m,{}]:[l,m,{onFocus:ge(u,g),onBlur:ge(d,b),onMouseEnter:ge(p,g),onMouseLeave:ge(f,b),onTouchStart:ge(h,g)}]:[!1,m,{}]}(c,x),I=i(O,3),z=I[0],D=I[1],U=I[2],$=function(e,{target:t,replace:r,state:n,preventScrollReset:a,relative:s,viewTransition:i,unstable_useTransitions:o}={}){var l=M(),c=V(),u=H(e,{relative:s})
return bn.useCallback(d=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(d,t)){d.preventDefault()
var p=void 0!==r?r:E(c)===E(u),f=()=>l(e,{replace:p,state:n,preventScrollReset:a,relative:s,viewTransition:i})
o?bn.startTransition(()=>f()):f()}},[c,l,u,r,n,t,e,a,s,i,o])}(g,{replace:f,state:h,target:m,preventScrollReset:v,relative:d,viewTransition:y,unstable_useTransitions:_}),F=bn.createElement("a",u(u(u({},x),U),{},{href:n||A,onClick:T||p?a:function(e){a&&a(e),e.defaultPrevented||$(e)},ref:ye(r,D),target:m,"data-discover":N||"render"!==o?void 0:"true"}))
return z&&!N?bn.createElement(bn.Fragment,null,F,bn.createElement(be,{page:A})):F})
aa.displayName="Link",bn.forwardRef(function(e,r){var n=e["aria-current"],a=void 0===n?"page":n,s=e.caseSensitive,i=void 0!==s&&s,o=e.className,l=void 0===o?"":o,c=e.end,d=void 0!==c&&c,p=e.style,f=e.to,h=e.viewTransition,m=e.children,g=t(e,v),b=H(f,{relative:g.relative}),y=V(),x=bn.useContext(Bn),w=bn.useContext(Vn),k=w.navigator,S=w.basename,_=null!=x&&function(e,{relative:t}={}){var r=bn.useContext(Wn)
j(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?")
var n=we("useViewTransitionState").basename,a=H(e,{relative:t})
if(!r.isTransitioning)return!1
var s=L(r.currentLocation.pathname,n)||r.currentLocation.pathname,i=L(r.nextLocation.pathname,n)||r.nextLocation.pathname
return null!=I(a.pathname,i)||null!=I(a.pathname,s)}(b)&&!0===h,N=k.encodeLocation?k.encodeLocation(b).pathname:b.pathname,E=y.pathname,T=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null
i||(E=E.toLowerCase(),T=T?T.toLowerCase():null,N=N.toLowerCase()),T&&S&&(T=L(T,S)||T)
var C,R="/"!==N&&N.endsWith("/")?N.length-1:N.length,P=E===N||!d&&E.startsWith(N)&&"/"===E.charAt(R),A=null!=T&&(T===N||!d&&T.startsWith(N)&&"/"===T.charAt(N.length)),O={isActive:P,isPending:A,isTransitioning:_},z=P?a:void 0
C="function"==typeof l?l(O):[l,P?"active":null,A?"pending":null,_?"transitioning":null].filter(Boolean).join(" ")
var D="function"==typeof p?p(O):p
return bn.createElement(aa,u(u({},g),{},{"aria-current":z,className:C,ref:r,style:D,to:f,viewTransition:h}),"function"==typeof m?m(O):m)}).displayName="NavLink",bn.forwardRef((e,n)=>{var a=e.discover,o=void 0===a?"render":a,l=e.fetcherKey,c=e.navigate,d=e.reloadDocument,p=e.replace,f=e.state,h=e.method,m=void 0===h?Xn:h,g=e.action,b=e.onSubmit,v=e.relative,x=e.preventScrollReset,w=e.viewTransition,k=t(e,y),S=bn.useContext(Vn).unstable_useTransitions,_=function(){var e=we("useSubmit").router,t=bn.useContext(Vn).basename,n=X("useRouteId"),a=e.fetch,i=e.navigate
return bn.useCallback(function(){var e=s(r().m(function e(s,o={}){var l,c,u,d,p,f,h
return r().w(function(e){for(;;)switch(e.n){case 0:if(l=ie(s,t),c=l.action,u=l.method,d=l.encType,p=l.formData,f=l.body,!1!==o.navigate){e.n=2
break}return h=o.fetcherKey||la(),e.n=1,a(h,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:f,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})
case 1:e.n=3
break
case 2:return e.n=3,i(o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:f,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})
case 3:return e.a(2)}},e)}))
return function(t){return e.apply(this,arguments)}}(),[a,i,t,n])}(),N=function(e,{relative:t}={}){var r=bn.useContext(Vn).basename,n=bn.useContext(Mn)
j(n,"useFormAction must be used inside a RouteContext")
var a=i(n.matches.slice(-1),1)[0],s=u({},H(e||".",{relative:t})),o=V()
if(null==e){s.search=o.search
var l=new URLSearchParams(s.search),c=l.getAll("index")
if(c.some(e=>""===e)){l.delete("index"),c.filter(e=>e).forEach(e=>l.append("index",e))
var d=l.toString()
s.search=d?`?${d}`:""}}return e&&"."!==e||!a.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),"/"!==r&&(s.pathname="/"===s.pathname?r:In([r,s.pathname])),E(s)}(g,{relative:v}),T="get"===m.toLowerCase()?"get":"post",C="string"==typeof g&&na.test(g)
return bn.createElement("form",u(u({ref:n,method:T,action:N,onSubmit:d?b:e=>{if(b&&b(e),!e.defaultPrevented){e.preventDefault()
var t=e.nativeEvent.submitter,r=(null==t?void 0:t.getAttribute("formmethod"))||m,n=()=>_(t||e.currentTarget,{fetcherKey:l,method:r,navigate:c,replace:p,state:f,relative:v,preventScrollReset:x,viewTransition:w})
S&&!1!==c?bn.startTransition(()=>n()):n()}}},k),{},{"data-discover":C||"render"!==o?void 0:"true"}))}).displayName="Form"
var sa,ia,oa=0,la=()=>`__${String(++oa)}__`,ca={},ua={},da=function(e,t){return da=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},da(e,t)},pa=function(){return pa=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])
return e},pa.apply(this,arguments)},fa=Object.create?function(e,t,r,n){void 0===n&&(n=r)
var a=Object.getOwnPropertyDescriptor(t,r)
a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]},ha=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},ma=function(e){return ma=Object.getOwnPropertyNames||function(e){var t=[]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r)
return t},ma(e)},ga="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=new Error(r)
return n.name="SuppressedError",n.error=e,n.suppressed=t,n},ba={__extends:ke,__assign:pa,__rest:je,__decorate:Se,__param:_e,__esDecorate:Ne,__runInitializers:Ee,__propKey:Te,__setFunctionName:Ce,__metadata:Re,__awaiter:Pe,__generator:Ae,__createBinding:fa,__exportStar:Oe,__values:Ie,__read:ze,__spread:Le,__spreadArrays:De,__spreadArray:Ue,__await:$e,__asyncGenerator:Fe,__asyncDelegator:Be,__asyncValues:We,__makeTemplateObject:Ve,__importStar:qe,__importDefault:Me,__classPrivateFieldGet:He,__classPrivateFieldSet:Ke,__classPrivateFieldIn:Ye,__addDisposableResource:Ge,__disposeResources:Je,__rewriteRelativeImportExtension:Xe},va=Object.freeze({__proto__:null,__addDisposableResource:Ge,get __assign(){return pa},__asyncDelegator:Be,__asyncGenerator:Fe,__asyncValues:We,__await:$e,__awaiter:Pe,__classPrivateFieldGet:He,__classPrivateFieldIn:Ye,__classPrivateFieldSet:Ke,__createBinding:fa,__decorate:Se,__disposeResources:Je,__esDecorate:Ne,__exportStar:Oe,__extends:ke,__generator:Ae,__importDefault:Me,__importStar:qe,__makeTemplateObject:Ve,__metadata:Re,__param:_e,__propKey:Te,__read:ze,__rest:je,__rewriteRelativeImportExtension:Xe,__runInitializers:Ee,__setFunctionName:Ce,__spread:Le,__spreadArray:Ue,__spreadArrays:De,__values:Ie,default:ba}),ya=class extends Error{constructor(e,t="FunctionsError",r){super(e),this.name=t,this.context=r}},xa=class extends ya{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}},wa=class extends ya{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}},ka=class extends ya{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}};(ia=sa||(sa={})).Any="any",ia.ApNortheast1="ap-northeast-1",ia.ApNortheast2="ap-northeast-2",ia.ApSouth1="ap-south-1",ia.ApSoutheast1="ap-southeast-1",ia.ApSoutheast2="ap-southeast-2",ia.CaCentral1="ca-central-1",ia.EuCentral1="eu-central-1",ia.EuWest1="eu-west-1",ia.EuWest2="eu-west-2",ia.EuWest3="eu-west-3",ia.SaEast1="sa-east-1",ia.UsEast1="us-east-1",ia.UsWest1="us-west-1",ia.UsWest2="us-west-2"
var ja,Sa,_a,Na,Ea,Ta,Ca,Ra=Object.freeze({__proto__:null,get FunctionRegion(){return sa},FunctionsClient:class{constructor(e,{headers:t={},customFetch:r,region:n=sa.Any}={}){this.url=e,this.headers=t,this.region=n,this.fetch=(e=>e?(...t)=>e(...t):(...e)=>fetch(...e))(r)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return Pe(this,arguments,void 0,r().m(function e(t,n={}){var a,s,i,o,l,c,u,d,p,f,h,m,g,b,v,y,x,w
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,o=n.headers,l=n.method,c=n.body,u=n.signal,d=n.timeout,p={},(f=n.region)||(f=this.region),h=new URL(`${this.url}/${t}`),f&&"any"!==f&&(p["x-region"]=f,h.searchParams.set("forceFunctionRegion",f)),c&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)?"undefined"!=typeof Blob&&c instanceof Blob||c instanceof ArrayBuffer?(p["Content-Type"]="application/octet-stream",m=c):"string"==typeof c?(p["Content-Type"]="text/plain",m=c):"undefined"!=typeof FormData&&c instanceof FormData?m=c:(p["Content-Type"]="application/json",m=JSON.stringify(c)):m=c,g=u,d&&(i=new AbortController,s=setTimeout(()=>i.abort(),d),u?(g=i.signal,u.addEventListener("abort",()=>i.abort())):g=i.signal),e.n=1,this.fetch(h.toString(),{method:l||"POST",headers:Object.assign(Object.assign(Object.assign({},p),this.headers),o),body:m,signal:g}).catch(e=>{throw new xa(e)})
case 1:if(b=e.v,!(v=b.headers.get("x-relay-error"))||"true"!==v){e.n=2
break}throw new wa(b)
case 2:if(b.ok){e.n=3
break}throw new ka(b)
case 3:if("application/json"!==(y=(null!==(a=b.headers.get("Content-Type"))&&void 0!==a?a:"text/plain").split(";")[0].trim())){e.n=5
break}return e.n=4,b.json()
case 4:x=e.v,e.n=12
break
case 5:if("application/octet-stream"!==y&&"application/pdf"!==y){e.n=7
break}return e.n=6,b.blob()
case 6:x=e.v,e.n=12
break
case 7:if("text/event-stream"!==y){e.n=8
break}x=b,e.n=12
break
case 8:if("multipart/form-data"!==y){e.n=10
break}return e.n=9,b.formData()
case 9:x=e.v,e.n=12
break
case 10:return e.n=11,b.text()
case 11:x=e.v
case 12:return e.a(2,{data:x,error:null,response:b})
case 13:return e.p=13,w=e.v,e.a(2,{data:null,error:w,response:w instanceof ka||w instanceof wa?w.context:void 0})
case 14:return e.p=14,s&&clearTimeout(s),e.f(14)
case 15:return e.a(2)}},e,this,[[0,13,14,15]])}))}},FunctionsError:ya,FunctionsFetchError:xa,FunctionsHttpError:ka,FunctionsRelayError:wa}),Pa=x(Ra),Aa={},Oa=x(va),Ia={},za={},La={},Da={},Ua={},$a={}
class Fa{constructor(){}static detectEnvironment(){var e
if("undefined"!=typeof WebSocket)return{type:"native",constructor:WebSocket}
if("undefined"!=typeof globalThis&&void 0!==globalThis.WebSocket)return{type:"native",constructor:globalThis.WebSocket}
if("undefined"!=typeof global&&void 0!==global.WebSocket)return{type:"native",constructor:global.WebSocket}
if("undefined"!=typeof globalThis&&void 0!==globalThis.WebSocketPair&&void 0===globalThis.WebSocket)return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."}
if("undefined"!=typeof globalThis&&globalThis.EdgeRuntime||"undefined"!=typeof navigator&&(null===(e=navigator.userAgent)||void 0===e?void 0:e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."}
if("undefined"!=typeof process){var t=process.versions
if(t&&t.node){var r=t.node,n=parseInt(r.replace(/^v/,"").split(".")[0])
return n>=22?void 0!==globalThis.WebSocket?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${n} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${n} detected without native WebSocket support.`,workaround:'For Node.js < 22, install "ws" package and provide it via the transport option:\nimport ws from "ws"\nnew RealtimeClient(url, { transport: ws })'}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){var e=this.detectEnvironment()
if(e.constructor)return e.constructor
var t=e.error||"WebSocket not supported in this environment."
throw e.workaround&&(t+=`\n\nSuggested solution: ${e.workaround}`),new Error(t)}static createWebSocket(e,t){return new(this.getWebSocketConstructor())(e,t)}static isWebSocketSupported(){try{var e=this.detectEnvironment()
return"native"===e.type||"ws"===e.type}catch(Ns){return!1}}}var Ba,Wa,Va,qa,Ma,Ha,Ka="1.0.0",Ya=Ka
!function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"}(Ba||(Ba={})),function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"}(Wa||(Wa={})),function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"}(Va||(Va={})),function(e){e.websocket="websocket"}(qa||(qa={})),function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"}(Ma||(Ma={}))
class Ga{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=null!=e?e:[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&"string"==typeof e.payload.event)return t(this._binaryEncodeUserBroadcastPush(e))
var r=[e.join_ref,e.ref,e.topic,e.event,e.payload]
return t(JSON.stringify(r))}_binaryEncodeUserBroadcastPush(e){var t
return this._isArrayBuffer(null===(t=e.payload)||void 0===t?void 0:t.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var t,r,n=null!==(r=null===(t=e.payload)||void 0===t?void 0:t.payload)&&void 0!==r?r:new ArrayBuffer(0)
return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,n)}_encodeJsonUserBroadcastPush(e){var t,r,n=null!==(r=null===(t=e.payload)||void 0===t?void 0:t.payload)&&void 0!==r?r:{},a=(new TextEncoder).encode(JSON.stringify(n)).buffer
return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,t,r){var n,a,s=e.topic,i=null!==(n=e.ref)&&void 0!==n?n:"",o=null!==(a=e.join_ref)&&void 0!==a?a:"",l=e.payload.event,c=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},u=0===Object.keys(c).length?"":JSON.stringify(c)
if(o.length>255)throw new Error(`joinRef length ${o.length} exceeds maximum of 255`)
if(i.length>255)throw new Error(`ref length ${i.length} exceeds maximum of 255`)
if(s.length>255)throw new Error(`topic length ${s.length} exceeds maximum of 255`)
if(l.length>255)throw new Error(`userEvent length ${l.length} exceeds maximum of 255`)
if(u.length>255)throw new Error(`metadata length ${u.length} exceeds maximum of 255`)
var d=this.USER_BROADCAST_PUSH_META_LENGTH+o.length+i.length+s.length+l.length+u.length,p=new ArrayBuffer(this.HEADER_LENGTH+d),f=new DataView(p),h=0
f.setUint8(h++,this.KINDS.userBroadcastPush),f.setUint8(h++,o.length),f.setUint8(h++,i.length),f.setUint8(h++,s.length),f.setUint8(h++,l.length),f.setUint8(h++,u.length),f.setUint8(h++,t),Array.from(o,e=>f.setUint8(h++,e.charCodeAt(0))),Array.from(i,e=>f.setUint8(h++,e.charCodeAt(0))),Array.from(s,e=>f.setUint8(h++,e.charCodeAt(0))),Array.from(l,e=>f.setUint8(h++,e.charCodeAt(0))),Array.from(u,e=>f.setUint8(h++,e.charCodeAt(0)))
var m=new Uint8Array(p.byteLength+r.byteLength)
return m.set(new Uint8Array(p),0),m.set(new Uint8Array(r),p.byteLength),m.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e))
if("string"==typeof e){var r=i(JSON.parse(e),5)
return t({join_ref:r[0],ref:r[1],topic:r[2],event:r[3],payload:r[4]})}return t({})}_binaryDecode(e){var t=new DataView(e),r=t.getUint8(0),n=new TextDecoder
if(r===this.KINDS.userBroadcast)return this._decodeUserBroadcast(e,t,n)}_decodeUserBroadcast(e,t,r){var n=t.getUint8(1),a=t.getUint8(2),s=t.getUint8(3),i=t.getUint8(4),o=this.HEADER_LENGTH+4,l=r.decode(e.slice(o,o+n))
o+=n
var c=r.decode(e.slice(o,o+a))
o+=a
var u=r.decode(e.slice(o,o+s))
o+=s
var d=e.slice(o,e.byteLength),p=i===this.JSON_ENCODING?JSON.parse(r.decode(d)):d,f={type:this.BROADCAST_EVENT,event:c,payload:p}
return s>0&&(f.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:l,event:this.BROADCAST_EVENT,payload:f}}_isArrayBuffer(e){var t
return e instanceof ArrayBuffer||"ArrayBuffer"===(null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name)}_pick(e,t){return e&&"object"==typeof e?Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e))):{}}}class Ja{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}!function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"}(Ha||(Ha={}))
var Xa,Za,Qa=(e,t,r={})=>{var n,a=null!==(n=r.skipTypes)&&void 0!==n?n:[]
return t?Object.keys(t).reduce((r,n)=>(r[n]=es(n,e,t,a),r),{}):{}},es=(e,t,r,n)=>{var a=t.find(t=>t.name===e),s=null==a?void 0:a.type,i=r[e]
return s&&!n.includes(s)?ts(s,i):rs(i)},ts=(e,t)=>{if("_"===e.charAt(0)){var r=e.slice(1,e.length)
return is(t,r)}switch(e){case Ha.bool:return ns(t)
case Ha.float4:case Ha.float8:case Ha.int2:case Ha.int4:case Ha.int8:case Ha.numeric:case Ha.oid:return as(t)
case Ha.json:case Ha.jsonb:return ss(t)
case Ha.timestamp:return os(t)
case Ha.abstime:case Ha.date:case Ha.daterange:case Ha.int4range:case Ha.int8range:case Ha.money:case Ha.reltime:case Ha.text:case Ha.time:case Ha.timestamptz:case Ha.timetz:case Ha.tsrange:case Ha.tstzrange:default:return rs(t)}},rs=e=>e,ns=e=>{switch(e){case"t":return!0
case"f":return!1
default:return e}},as=e=>{if("string"==typeof e){var t=parseFloat(e)
if(!Number.isNaN(t))return t}return e},ss=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e}return e},is=(e,t)=>{if("string"!=typeof e)return e
var r=e.length-1,n=e[r]
if("{"===e[0]&&"}"===n){var a,s=e.slice(1,r)
try{a=JSON.parse("["+s+"]")}catch(i){a=s?s.split(","):[]}return a.map(e=>ts(t,e))}return e},os=e=>"string"==typeof e?e.replace(" ","T"):e,ls=e=>{var t=new URL(e)
return t.protocol=t.protocol.replace(/^ws/i,"http"),t.pathname=t.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),""===t.pathname||"/"===t.pathname?t.pathname="/api/broadcast":t.pathname=t.pathname+"/api/broadcast",t.href}
class cs{constructor(e,t,r={},n=1e4){this.channel=e,this.event=t,this.payload=r,this.timeout=n,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var r
return this._hasReceived(e)&&t(null===(r=this.receivedResp)||void 0===r?void 0:r.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){this.timeoutTimer||(this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref),this.channel._on(this.refEvent,{},e=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=e,this._matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout))}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}(Za=Xa||(Xa={})).SYNC="sync",Za.JOIN="join",Za.LEAVE="leave"
var us,ds,ps,fs,hs,ms,gs=class e{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}}
var n=(null==r?void 0:r.events)||{state:"presence_state",diff:"presence_diff"}
this.channel._on(n.state,{},t=>{var r=this.caller,n=r.onJoin,a=r.onLeave,s=r.onSync
this.joinRef=this.channel._joinRef(),this.state=e.syncState(this.state,t,n,a),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,n,a)}),this.pendingDiffs=[],s()}),this.channel._on(n.diff,{},t=>{var r=this.caller,n=r.onJoin,a=r.onLeave,s=r.onSync
this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,n,a),s())}),this.onJoin((e,t,r)=>{this.channel._trigger("presence",{event:"join",key:e,currentPresences:t,newPresences:r})}),this.onLeave((e,t,r)=>{this.channel._trigger("presence",{event:"leave",key:e,currentPresences:t,leftPresences:r})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,r,n){var a=this.cloneDeep(e),s=this.transformState(t),i={},o={}
return this.map(a,(e,t)=>{s[e]||(o[e]=t)}),this.map(s,(e,t)=>{var r=a[e]
if(r){var n=t.map(e=>e.presence_ref),s=r.map(e=>e.presence_ref),l=t.filter(e=>s.indexOf(e.presence_ref)<0),c=r.filter(e=>n.indexOf(e.presence_ref)<0)
l.length>0&&(i[e]=l),c.length>0&&(o[e]=c)}else i[e]=t}),this.syncDiff(a,{joins:i,leaves:o},r,n)}static syncDiff(e,t,r,n){var a={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)},s=a.joins,i=a.leaves
return r||(r=()=>{}),n||(n=()=>{}),this.map(s,(t,n)=>{var a,s=null!==(a=e[t])&&void 0!==a?a:[]
if(e[t]=this.cloneDeep(n),s.length>0){var i=e[t].map(e=>e.presence_ref),o=s.filter(e=>i.indexOf(e.presence_ref)<0)
e[t].unshift(...o)}r(t,s,n)}),this.map(i,(t,r)=>{var a=e[t]
if(a){var s=r.map(e=>e.presence_ref)
a=a.filter(e=>s.indexOf(e.presence_ref)<0),e[t]=a,n(t,a,r),0===a.length&&delete e[t]}}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(r=>t(r,e[r]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((t,r)=>{var n=e[r]
return t[r]="metas"in n?n.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e)):n,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}};(ms=us||(us={})).ALL="*",ms.INSERT="INSERT",ms.UPDATE="UPDATE",ms.DELETE="DELETE",(hs=ds||(ds={})).BROADCAST="broadcast",hs.PRESENCE="presence",hs.POSTGRES_CHANGES="postgres_changes",hs.SYSTEM="system",(fs=ps||(ps={})).SUBSCRIBED="SUBSCRIBED",fs.TIMED_OUT="TIMED_OUT",fs.CLOSED="CLOSED",fs.CHANNEL_ERROR="CHANNEL_ERROR"
var bs=Wa,vs=class e{constructor(e,t={config:{}},r){var n,a
if(this.topic=e,this.params=t,this.socket=r,this.bindings={},this.state=Wa.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new cs(this,Va.join,this.params,this.timeout),this.rejoinTimer=new Ja(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Wa.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Wa.closed,this.socket._remove(this)}),this._onError(e=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,e),this.state=Wa.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Wa.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",e=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,e),this.state=Wa.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Va.reply,{},(e,t)=>{this._trigger(this._replyEventName(t),e)}),this.presence=new gs(this),this.broadcastEndpointURL=ls(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(null===(a=null===(n=this.params.config)||void 0===n?void 0:n.broadcast)||void 0===a?void 0:a.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(e,t=this.timeout){var n,a,i,o=this
if(this.socket.isConnected()||this.socket.connect(),this.state==Wa.closed){var l=this.params.config,c=l.broadcast,u=l.presence,d=l.private,p=null!==(a=null===(n=this.bindings.postgres_changes)||void 0===n?void 0:n.map(e=>e.filter))&&void 0!==a?a:[],f=!!this.bindings[ds.PRESENCE]&&this.bindings[ds.PRESENCE].length>0||!0===(null===(i=this.params.config.presence)||void 0===i?void 0:i.enabled),h={},m={broadcast:c,presence:Object.assign(Object.assign({},u),{enabled:f}),postgres_changes:p,private:d}
this.socket.accessTokenValue&&(h.access_token=this.socket.accessTokenValue),this._onError(t=>null==e?void 0:e(ps.CHANNEL_ERROR,t)),this._onClose(()=>null==e?void 0:e(ps.CLOSED)),this.updateJoinPayload(Object.assign({config:m},h)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",function(){var t=s(r().m(function t({postgres_changes:n}){var a,s,i,l,c,u,d,p,f,h,m,g
return r().w(function(t){for(;;)switch(t.n){case 0:if(o.socket.setAuth(),void 0!==n){t.n=1
break}return null==e||e(ps.SUBSCRIBED),t.a(2)
case 1:s=o.bindings.postgres_changes,i=null!==(a=null==s?void 0:s.length)&&void 0!==a?a:0,l=[],c=0
case 2:if(!(c<i)){t.n=5
break}if(u=s[c],d=u.filter,p=d.event,f=d.schema,h=d.table,m=d.filter,!(g=n&&n[c])||g.event!==p||g.schema!==f||g.table!==h||g.filter!==m){t.n=3
break}l.push(Object.assign(Object.assign({},u),{id:g.id})),t.n=4
break
case 3:return o.unsubscribe(),o.state=Wa.errored,null==e||e(ps.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes")),t.a(2)
case 4:c++,t.n=2
break
case 5:return o.bindings.postgres_changes=l,e&&e(ps.SUBSCRIBED),t.a(2)
case 6:return t.a(2)}},t)}))
return function(e){return t.apply(this,arguments)}}()).receive("error",t=>{this.state=Wa.errored,null==e||e(ps.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(t).join(", ")||"error")))}).receive("timeout",()=>{null==e||e(ps.TIMED_OUT)})}return this}presenceState(){return this.presence.state}track(e){var t=this
return s(r().m(function e(n,a={}){return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,t.send({type:"presence",event:"track",payload:n},a.timeout||t.timeout)
case 1:return e.a(2,e.v)}},e)})).apply(this,arguments)}untrack(){var e=this
return s(r().m(function t(n={}){return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e.send({type:"presence",event:"untrack"},n)
case 1:return t.a(2,t.v)}},t)})).apply(this,arguments)}on(e,t,r){return this.state===Wa.joined&&e===ds.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(e,t,r)}httpSend(e,t){var n=this
return s(r().m(function e(t,a,s={}){var i,o,l,c,u,d
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(o=n.socket.accessTokenValue?`Bearer ${n.socket.accessTokenValue}`:"",null!=a){e.n=1
break}return e.a(2,Promise.reject("Payload is required for httpSend()"))
case 1:return l={method:"POST",headers:{Authorization:o,apikey:n.socket.apiKey?n.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:n.subTopic,event:t,payload:a,private:n.private}]})},e.n=2,n._fetchWithTimeout(n.broadcastEndpointURL,l,null!==(i=s.timeout)&&void 0!==i?i:n.timeout)
case 2:if(202!==(c=e.v).status){e.n=3
break}return e.a(2,{success:!0})
case 3:return u=c.statusText,e.p=4,e.n=5,c.json()
case 5:d=e.v,u=d.error||d.message||u,e.n=7
break
case 6:e.p=6,e.v
case 7:return e.a(2,Promise.reject(new Error(u)))}},e,null,[[4,6]])})).apply(this,arguments)}send(e){var t=this
return s(r().m(function e(n,a={}){var s,i,o,l,c,u,d
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(t._canPush()||"broadcast"!==n.type){e.n=7
break}return o=n.event,l=n.payload,c=t.socket.accessTokenValue?`Bearer ${t.socket.accessTokenValue}`:"",u={method:"POST",headers:{Authorization:c,apikey:t.socket.apiKey?t.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:t.subTopic,event:o,payload:l,private:t.private}]})},e.p=1,e.n=2,t._fetchWithTimeout(t.broadcastEndpointURL,u,null!==(s=a.timeout)&&void 0!==s?s:t.timeout)
case 2:return d=e.v,e.n=3,null===(i=d.body)||void 0===i?void 0:i.cancel()
case 3:return e.a(2,d.ok?"ok":"error")
case 4:if(e.p=4,"AbortError"!==e.v.name){e.n=5
break}return e.a(2,"timed out")
case 5:return e.a(2,"error")
case 6:e.n=8
break
case 7:return e.a(2,new Promise(e=>{var r,s,i,o=t._push(n.type,n,a.timeout||t.timeout)
"broadcast"!==n.type||(null===(i=null===(s=null===(r=t.params)||void 0===r?void 0:r.config)||void 0===s?void 0:s.broadcast)||void 0===i?void 0:i.ack)||e("ok"),o.receive("ok",()=>e("ok")),o.receive("error",()=>e("error")),o.receive("timeout",()=>e("timed out"))}))
case 8:return e.a(2)}},e,null,[[1,4]])})).apply(this,arguments)}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=Wa.leaving
var t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Va.close,"leave",this._joinRef())}
this.joinPush.destroy()
var r=null
return new Promise(n=>{(r=new cs(this,Va.leave,{},e)).receive("ok",()=>{t(),n("ok")}).receive("timeout",()=>{t(),n("timed out")}).receive("error",()=>{n("error")}),r.send(),this._canPush()||r.trigger("ok",{})}).finally(()=>{null==r||r.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Wa.closed,this.bindings={}}_fetchWithTimeout(e,t,n){var a=this
return s(r().m(function s(){var i,o,l
return r().w(function(r){for(;;)switch(r.n){case 0:return i=new AbortController,o=setTimeout(()=>i.abort(),n),r.n=1,a.socket.fetch(e,Object.assign(Object.assign({},t),{signal:i.signal}))
case 1:return l=r.v,clearTimeout(o),r.a(2,l)}},s)}))()}_push(e,t,r=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`
var n=new cs(this,e,t,r)
return this._canPush()?n.send():this._addToPushBuffer(n),n}_addToPushBuffer(e){if(e.startTimeout(),this.pushBuffer.push(e),this.pushBuffer.length>100){var t=this.pushBuffer.shift()
t&&(t.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${t.event}`,t.payload))}}_onMessage(e,t,r){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,r){var n,a,s=e.toLocaleLowerCase(),i=Va,o=i.close,l=i.error,c=i.leave,u=i.join
if(!(r&&[o,l,c,u].indexOf(s)>=0&&r!==this._joinRef())){var d=this._onMessage(s,t,r)
if(t&&!d)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(s)?null===(n=this.bindings.postgres_changes)||void 0===n||n.filter(e=>{var t,r,n
return"*"===(null===(t=e.filter)||void 0===t?void 0:t.event)||(null===(n=null===(r=e.filter)||void 0===r?void 0:r.event)||void 0===n?void 0:n.toLocaleLowerCase())===s}).map(e=>e.callback(d,r)):null===(a=this.bindings[s])||void 0===a||a.filter(e=>{var r,n,a,i,o,l
if(["broadcast","presence","postgres_changes"].includes(s)){if("id"in e){var c=e.id,u=null===(r=e.filter)||void 0===r?void 0:r.event
return c&&(null===(n=t.ids)||void 0===n?void 0:n.includes(c))&&("*"===u||(null==u?void 0:u.toLocaleLowerCase())===(null===(a=t.data)||void 0===a?void 0:a.type.toLocaleLowerCase()))}var d=null===(o=null===(i=null==e?void 0:e.filter)||void 0===i?void 0:i.event)||void 0===o?void 0:o.toLocaleLowerCase()
return"*"===d||d===(null===(l=null==t?void 0:t.event)||void 0===l?void 0:l.toLocaleLowerCase())}return e.type.toLocaleLowerCase()===s}).map(e=>{if("object"==typeof d&&"ids"in d){var t=d.data,n={schema:t.schema,table:t.table,commit_timestamp:t.commit_timestamp,eventType:t.type,new:{},old:{},errors:t.errors}
d=Object.assign(Object.assign({},n),this._getPayloadRecords(t))}e.callback(d,r)})}}_isClosed(){return this.state===Wa.closed}_isJoined(){return this.state===Wa.joined}_isJoining(){return this.state===Wa.joining}_isLeaving(){return this.state===Wa.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,r){var n=e.toLocaleLowerCase(),a={type:n,filter:t,callback:r}
return this.bindings[n]?this.bindings[n].push(a):this.bindings[n]=[a],this}_off(t,r){var n=t.toLocaleLowerCase()
return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(t=>{var a
return!((null===(a=t.type)||void 0===a?void 0:a.toLocaleLowerCase())===n&&e.isEqual(t.filter,r))})),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1
for(var r in e)if(e[r]!==t[r])return!1
return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(Va.close,{},e)}_onError(e){this._on(Va.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Wa.joining,this.joinPush.resend(e))}_getPayloadRecords(e){var t={new:{},old:{}}
return"INSERT"!==e.type&&"UPDATE"!==e.type||(t.new=Qa(e.columns,e.record)),"UPDATE"!==e.type&&"DELETE"!==e.type||(t.old=Qa(e.columns,e.old_record)),t}},ys=()=>{},xs=[1e3,2e3,5e3,1e4],ws=Object.freeze({__proto__:null,REALTIME_CHANNEL_STATES:bs,get REALTIME_LISTEN_TYPES(){return ds},get REALTIME_POSTGRES_CHANGES_LISTEN_EVENT(){return us},get REALTIME_PRESENCE_LISTEN_EVENTS(){return Xa},get REALTIME_SUBSCRIBE_STATES(){return ps},RealtimeChannel:vs,RealtimeClient:class{constructor(e,t){var r
if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=1e4,this.transport=null,this.heartbeatIntervalMs=25e3,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=ys,this.ref=0,this.reconnectTimer=null,this.vsn=Ya,this.logger=ys,this.conn=null,this.sendBuffer=[],this.serializer=new Ga,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!(null===(r=null==t?void 0:t.params)||void 0===r?void 0:r.apikey))throw new Error("API key is required to connect to Realtime")
this.apiKey=t.params.apikey,this.endPoint=`${e}/${qa.websocket}`,this.httpEndpoint=ls(e),this._initializeOptions(t),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(null==t?void 0:t.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||null!==this.conn&&this.isConnected())){if(this._setConnectionState("connecting"),this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL())
else try{this.conn=Fa.createWebSocket(this.endpointURL())}catch(t){this._setConnectionState("disconnected")
var e=t.message
if(e.includes("Node.js"))throw new Error(`${e}\n\nTo use Realtime in Node.js, you need to provide a WebSocket implementation:\n\nOption 1: Use Node.js 22+ which has native WebSocket support\nOption 2: Install and provide the "ws" package:\n\n  npm install ws\n\n  import ws from "ws"\n  const client = new RealtimeClient(url, {\n    ...options,\n    transport: ws\n  })`)
throw new Error(`WebSocket not available: ${e}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:this.vsn}))}disconnect(e,t){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){var r=setTimeout(()=>{this._setConnectionState("disconnected")},100)
this.conn.onclose=()=>{clearTimeout(r),this._setConnectionState("disconnected")},"function"==typeof this.conn.close&&(e?this.conn.close(e,null!=t?t:""):this.conn.close()),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}removeChannel(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,e.unsubscribe()
case 1:return a=r.v,0===t.channels.length&&t.disconnect(),r.a(2,a)}},n)}))()}removeAllChannels(){var e=this
return s(r().m(function t(){var n
return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,Promise.all(e.channels.map(e=>e.unsubscribe()))
case 1:return n=t.v,e.channels=[],e.disconnect(),t.a(2,n)}},t)}))()}log(e,t,r){this.logger(e,t,r)}connectionState(){switch(this.conn&&this.conn.readyState){case Ba.connecting:return Ma.Connecting
case Ba.open:return Ma.Open
case Ba.closing:return Ma.Closing
default:return Ma.Closed}}isConnected(){return this.connectionState()===Ma.Open}isConnecting(){return"connecting"===this._connectionState}isDisconnecting(){return"disconnecting"===this._connectionState}channel(e,t={config:{}}){var r=`realtime:${e}`,n=this.getChannels().find(e=>e.topic===r)
if(n)return n
var a=new vs(`realtime:${e}`,t,this)
return this.channels.push(a),a}push(e){var t=e.topic,r=e.event,n=e.payload,a=e.ref,s=()=>{this.encode(e,e=>{var t
null===(t=this.conn)||void 0===t||t.send(e)})}
this.log("push",`${t} ${r} (${a})`,n),this.isConnected()?s():this.sendBuffer.push(s)}setAuth(){var e=this
return s(r().m(function t(n=null){return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return e._authPromise=e._performAuth(n),t.p=1,t.n=2,e._authPromise
case 2:return t.p=2,e._authPromise=null,t.f(2)
case 3:return t.a(2)}},t,null,[[1,,2,3]])})).apply(this,arguments)}sendHeartbeat(){var e=this
return s(r().m(function t(){var n
return r().w(function(t){for(;;)switch(t.n){case 0:if(e.isConnected()){t.n=1
break}try{e.heartbeatCallback("disconnected")}catch(hc){e.log("error","error in heartbeat callback",hc)}return t.a(2)
case 1:if(!e.pendingHeartbeatRef){t.n=2
break}e.pendingHeartbeatRef=null,e.log("transport","heartbeat timeout. Attempting to re-establish connection")
try{e.heartbeatCallback("timeout")}catch(hc){e.log("error","error in heartbeat callback",hc)}return e._wasManualDisconnect=!1,null===(n=e.conn)||void 0===n||n.close(1e3,"heartbeat timeout"),setTimeout(()=>{var t
e.isConnected()||null===(t=e.reconnectTimer)||void 0===t||t.scheduleTimeout()},100),t.a(2)
case 2:e.pendingHeartbeatRef=e._makeRef(),e.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e.pendingHeartbeatRef})
try{e.heartbeatCallback("sent")}catch(hc){e.log("error","error in heartbeat callback",hc)}e._setAuthSafely("heartbeat")
case 3:return t.a(2)}},t)}))()}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){var e=this.ref+1
return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){var t=this.channels.find(t=>t.topic===e&&(t._isJoined()||t._isJoining()))
t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic)}_onConnMessage(e){this.decode(e.data,e=>{if("phoenix"===e.topic&&"phx_reply"===e.event)try{this.heartbeatCallback("ok"===e.payload.status?"ok":"error")}catch(hc){this.log("error","error in heartbeat callback",hc)}e.ref&&e.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null)
var t=e.topic,r=e.event,n=e.payload,a=e.ref,s=a?`(${a})`:"",i=n.status||""
this.log("receive",`${i} ${t} ${r} ${s}`.trim(),n),this.channels.filter(e=>e._isMember(t)).forEach(e=>e._trigger(r,n,a)),this._triggerStateCallbacks("message",e)})}_clearTimer(e){var t
"heartbeat"===e&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):"reconnect"===e&&(null===(t=this.reconnectTimer)||void 0===t||t.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_teardownConnection(){if(this.conn){if(this.conn.readyState===Ba.open||this.conn.readyState===Ba.connecting)try{this.conn.close()}catch(hc){this.log("error","Error closing connection",hc)}this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null}this._clearAllTimers(),this.channels.forEach(e=>e.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).then(()=>{this.flushSendBuffer()}).catch(e=>{this.log("error","error waiting for auth on connect",e),this.flushSendBuffer()}),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker")
var e=this._workerObjectUrl(this.workerUrl)
this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log("worker","worker error",e.message),this.workerRef.terminate()},this.workerRef.onmessage=e=>{"keepAlive"===e.data.event&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(e){var t
this._setConnectionState("disconnected"),this.log("transport","close",e),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||null===(t=this.reconnectTimer)||void 0===t||t.scheduleTimeout(),this._triggerStateCallbacks("close",e)}_onConnError(e){this._setConnectionState("disconnected"),this.log("transport",`${e}`),this._triggerChanError(),this._triggerStateCallbacks("error",e)}_triggerChanError(){this.channels.forEach(e=>e._trigger(Va.error))}_appendParams(e,t){if(0===Object.keys(t).length)return e
var r=e.match(/\?/)?"&":"?"
return`${e}${r}${new URLSearchParams(t)}`}_workerObjectUrl(e){var t
if(e)t=e
else{var r=new Blob(['\n  addEventListener("message", (e) => {\n    if (e.data.event === "start") {\n      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);\n    }\n  });'],{type:"application/javascript"})
t=URL.createObjectURL(r)}return t}_setConnectionState(e,t=!1){this._connectionState=e,"connecting"===e?this._wasManualDisconnect=!1:"disconnecting"===e&&(this._wasManualDisconnect=t)}_performAuth(){var e=this
return s(r().m(function t(n=null){var a
return r().w(function(t){for(;;)switch(t.n){case 0:if(!n){t.n=1
break}a=n,t.n=4
break
case 1:if(!e.accessToken){t.n=3
break}return t.n=2,e.accessToken()
case 2:a=t.v,t.n=4
break
case 3:a=e.accessTokenValue
case 4:e.accessTokenValue!=a&&(e.accessTokenValue=a,e.channels.forEach(e=>{var t={access_token:a,version:"realtime-js/2.86.2"}
a&&e.updateJoinPayload(t),e.joinedOnce&&e._isJoined()&&e._push(Va.access_token,{access_token:a})}))
case 5:return t.a(2)}},t)})).apply(this,arguments)}_waitForAuthIfNeeded(){var e=this
return s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:if(!e._authPromise){t.n=1
break}return t.n=1,e._authPromise
case 1:return t.a(2)}},t)}))()}_setAuthSafely(e="general"){this.setAuth().catch(t=>{this.log("error",`error setting auth in ${e}`,t)})}_triggerStateCallbacks(e,t){try{this.stateChangeCallbacks[e].forEach(r=>{try{r(t)}catch(hc){this.log("error",`error in ${e} callback`,hc)}})}catch(hc){this.log("error",`error triggering ${e} callbacks`,hc)}}_setupReconnectionTimer(){var e=this
this.reconnectTimer=new Ja(s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:setTimeout(s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e._waitForAuthIfNeeded()
case 1:e.isConnected()||e.connect()
case 2:return t.a(2)}},t)})),10)
case 1:return t.a(2)}},t)})),this.reconnectAfterMs)}_initializeOptions(e){var t,r,n,a,s,i,o,l,c,u,d,p
switch(this.transport=null!==(t=null==e?void 0:e.transport)&&void 0!==t?t:null,this.timeout=null!==(r=null==e?void 0:e.timeout)&&void 0!==r?r:1e4,this.heartbeatIntervalMs=null!==(n=null==e?void 0:e.heartbeatIntervalMs)&&void 0!==n?n:25e3,this.worker=null!==(a=null==e?void 0:e.worker)&&void 0!==a&&a,this.accessToken=null!==(s=null==e?void 0:e.accessToken)&&void 0!==s?s:null,this.heartbeatCallback=null!==(i=null==e?void 0:e.heartbeatCallback)&&void 0!==i?i:ys,this.vsn=null!==(o=null==e?void 0:e.vsn)&&void 0!==o?o:Ya,(null==e?void 0:e.params)&&(this.params=e.params),(null==e?void 0:e.logger)&&(this.logger=e.logger),((null==e?void 0:e.logLevel)||(null==e?void 0:e.log_level))&&(this.logLevel=e.logLevel||e.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=null!==(l=null==e?void 0:e.reconnectAfterMs)&&void 0!==l?l:e=>xs[e-1]||1e4,this.vsn){case Ka:this.encode=null!==(c=null==e?void 0:e.encode)&&void 0!==c?c:(e,t)=>t(JSON.stringify(e)),this.decode=null!==(u=null==e?void 0:e.decode)&&void 0!==u?u:(e,t)=>t(JSON.parse(e))
break
case"2.0.0":this.encode=null!==(d=null==e?void 0:e.encode)&&void 0!==d?d:this.serializer.encode.bind(this.serializer),this.decode=null!==(p=null==e?void 0:e.decode)&&void 0!==p?p:this.serializer.decode.bind(this.serializer)
break
default:throw new Error(`Unsupported serializer version: ${this.vsn}`)}if(this.worker){if("undefined"!=typeof window&&!window.Worker)throw new Error("Web Worker is not supported")
this.workerUrl=null==e?void 0:e.workerUrl}}},RealtimePresence:gs,WebSocketFactory:Fa}),ks=x(ws)
class js extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}class Ss extends js{constructor(e,t,r){super(e),this.name="StorageApiError",this.status=t,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class _s extends js{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}}var Ns,Es=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Ts=()=>Response,Cs=e=>{if(Array.isArray(e))return e.map(e=>Cs(e))
if("function"==typeof e||e!==Object(e))return e
var t={}
return Object.entries(e).forEach(([e,r])=>{var n=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,""))
t[n]=Cs(r)}),t},Rs=e=>{var t
return e.msg||e.message||e.error_description||("string"==typeof e.error?e.error:null===(t=e.error)||void 0===t?void 0:t.message)||JSON.stringify(e)},Ps=(e,t,n)=>Pe(void 0,void 0,void 0,r().m(function a(){var s
return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,Ts()
case 1:s=r.v,e instanceof s&&!(null==n?void 0:n.noResolveJson)?e.json().then(r=>{var n=e.status||500,a=(null==r?void 0:r.statusCode)||n+""
t(new Ss(Rs(r),n,a))}).catch(e=>{t(new _s(Rs(e),e))}):t(new _s(Rs(e),e))
case 2:return r.a(2)}},a)})),As=(e,t,r,n)=>{var a={method:e,headers:(null==t?void 0:t.headers)||{}}
return"GET"!==e&&n?((e=>{if("object"!=typeof e||null===e)return!1
var t=Object.getPrototypeOf(e)
return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)})(n)?(a.headers=Object.assign({"Content-Type":"application/json"},null==t?void 0:t.headers),a.body=JSON.stringify(n)):a.body=n,(null==t?void 0:t.duplex)&&(a.duplex=t.duplex),Object.assign(Object.assign({},a),r)):a}
class Os{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t}then(e,t){return this.execute().then(e,t)}execute(){return Pe(this,void 0,void 0,r().m(function e(){var t,n
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,this.downloadFn()
case 1:return t=e.v,e.a(2,{data:t.body,error:null})
case 2:if(e.p=2,n=e.v,!this.shouldThrowOnError){e.n=3
break}throw n
case 3:if(!at(n)){e.n=4
break}return e.a(2,{data:null,error:n})
case 4:throw n
case 5:return e.a(2)}},e,this,[[0,2]])}))}}class Is{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[Ns]="BlobDownloadBuilder",this.promise=null}asStream(){return new Os(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}execute(){return Pe(this,void 0,void 0,r().m(function e(){var t,n,a
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,this.downloadFn()
case 1:return t=e.v,e.n=2,t.blob()
case 2:return n=e.v,e.a(2,{data:n,error:null})
case 3:if(e.p=3,a=e.v,!this.shouldThrowOnError){e.n=4
break}throw a
case 4:if(!at(a)){e.n=5
break}return e.a(2,{data:null,error:a})
case 5:throw a
case 6:return e.a(2)}},e,this,[[0,3]])}))}}Ns=Symbol.toStringTag
var zs={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Ls={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1}
class Ds{constructor(e,t={},r,n){this.shouldThrowOnError=!1,this.url=e,this.headers=t,this.bucketId=r,this.fetch=Es(n)}throwOnError(){return this.shouldThrowOnError=!0,this}uploadOrUpdate(e,t,n,a){return Pe(this,void 0,void 0,r().m(function s(){var i,o,l,c,u,d,p,f
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,o=Object.assign(Object.assign({},Ls),a),l=Object.assign(Object.assign({},this.headers),"POST"===e&&{"x-upsert":String(o.upsert)}),c=o.metadata,"undefined"!=typeof Blob&&n instanceof Blob?((i=new FormData).append("cacheControl",o.cacheControl),c&&i.append("metadata",this.encodeMetadata(c)),i.append("",n)):"undefined"!=typeof FormData&&n instanceof FormData?((i=n).has("cacheControl")||i.append("cacheControl",o.cacheControl),c&&!i.has("metadata")&&i.append("metadata",this.encodeMetadata(c))):(i=n,l["cache-control"]=`max-age=${o.cacheControl}`,l["content-type"]=o.contentType,c&&(l["x-metadata"]=this.toBase64(this.encodeMetadata(c))),("undefined"!=typeof ReadableStream&&i instanceof ReadableStream||i&&"object"==typeof i&&"pipe"in i&&"function"==typeof i.pipe)&&!o.duplex&&(o.duplex="half")),(null==a?void 0:a.headers)&&(l=Object.assign(Object.assign({},l),a.headers)),u=this._removeEmptyFolders(t),d=this._getFinalPath(u),r.n=1,("PUT"==e?lt:ot)(this.fetch,`${this.url}/object/${d}`,i,Object.assign({headers:l},(null==o?void 0:o.duplex)?{duplex:o.duplex}:{}))
case 1:return p=r.v,r.a(2,{data:{path:u,id:p.Id,fullPath:p.Key},error:null})
case 2:if(r.p=2,f=r.v,!this.shouldThrowOnError){r.n=3
break}throw f
case 3:if(!at(f)){r.n=4
break}return r.a(2,{data:null,error:f})
case 4:throw f
case 5:return r.a(2)}},s,this,[[0,2]])}))}upload(e,t,n){return Pe(this,void 0,void 0,r().m(function a(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,this.uploadOrUpdate("POST",e,t,n))},a,this)}))}uploadToSignedUrl(e,t,n,a){return Pe(this,void 0,void 0,r().m(function s(){var i,o,l,c,u,d,p,f
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return i=this._removeEmptyFolders(e),o=this._getFinalPath(i),(l=new URL(this.url+`/object/upload/sign/${o}`)).searchParams.set("token",t),r.p=1,u=Object.assign({upsert:Ls.upsert},a),d=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)}),"undefined"!=typeof Blob&&n instanceof Blob?((c=new FormData).append("cacheControl",u.cacheControl),c.append("",n)):"undefined"!=typeof FormData&&n instanceof FormData?(c=n).append("cacheControl",u.cacheControl):(c=n,d["cache-control"]=`max-age=${u.cacheControl}`,d["content-type"]=u.contentType),r.n=2,lt(this.fetch,l.toString(),c,{headers:d})
case 2:return p=r.v,r.a(2,{data:{path:i,fullPath:p.Key},error:null})
case 3:if(r.p=3,f=r.v,!this.shouldThrowOnError){r.n=4
break}throw f
case 4:if(!at(f)){r.n=5
break}return r.a(2,{data:null,error:f})
case 5:throw f
case 6:return r.a(2)}},s,this,[[1,3]])}))}createSignedUploadUrl(e,t){return Pe(this,void 0,void 0,r().m(function n(){var a,s,i,o,l,c
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,a=this._getFinalPath(e),s=Object.assign({},this.headers),(null==t?void 0:t.upsert)&&(s["x-upsert"]="true"),r.n=1,ot(this.fetch,`${this.url}/object/upload/sign/${a}`,{},{headers:s})
case 1:if(i=r.v,o=new URL(this.url+i.url),l=o.searchParams.get("token")){r.n=2
break}throw new js("No token returned by API")
case 2:return r.a(2,{data:{signedUrl:o.toString(),path:e,token:l},error:null})
case 3:if(r.p=3,c=r.v,!this.shouldThrowOnError){r.n=4
break}throw c
case 4:if(!at(c)){r.n=5
break}return r.a(2,{data:null,error:c})
case 5:throw c
case 6:return r.a(2)}},n,this,[[0,3]])}))}update(e,t,n){return Pe(this,void 0,void 0,r().m(function a(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,this.uploadOrUpdate("PUT",e,t,n))},a,this)}))}move(e,t,n){return Pe(this,void 0,void 0,r().m(function a(){var s,i
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,ot(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:null==n?void 0:n.destinationBucket},{headers:this.headers})
case 1:return s=r.v,r.a(2,{data:s,error:null})
case 2:if(r.p=2,i=r.v,!this.shouldThrowOnError){r.n=3
break}throw i
case 3:if(!at(i)){r.n=4
break}return r.a(2,{data:null,error:i})
case 4:throw i
case 5:return r.a(2)}},a,this,[[0,2]])}))}copy(e,t,n){return Pe(this,void 0,void 0,r().m(function a(){var s,i
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,ot(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:null==n?void 0:n.destinationBucket},{headers:this.headers})
case 1:return s=r.v,r.a(2,{data:{path:s.Key},error:null})
case 2:if(r.p=2,i=r.v,!this.shouldThrowOnError){r.n=3
break}throw i
case 3:if(!at(i)){r.n=4
break}return r.a(2,{data:null,error:i})
case 4:throw i
case 5:return r.a(2)}},a,this,[[0,2]])}))}createSignedUrl(e,t,n){return Pe(this,void 0,void 0,r().m(function a(){var s,i,o,l,c
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,s=this._getFinalPath(e),r.n=1,ot(this.fetch,`${this.url}/object/sign/${s}`,Object.assign({expiresIn:t},(null==n?void 0:n.transform)?{transform:n.transform}:{}),{headers:this.headers})
case 1:return i=r.v,o=(null==n?void 0:n.download)?`&download=${!0===n.download?"":n.download}`:"",l=encodeURI(`${this.url}${i.signedURL}${o}`),i={signedUrl:l},r.a(2,{data:i,error:null})
case 2:if(r.p=2,c=r.v,!this.shouldThrowOnError){r.n=3
break}throw c
case 3:if(!at(c)){r.n=4
break}return r.a(2,{data:null,error:c})
case 4:throw c
case 5:return r.a(2)}},a,this,[[0,2]])}))}createSignedUrls(e,t,n){return Pe(this,void 0,void 0,r().m(function a(){var s,i,o
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,ot(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:t,paths:e},{headers:this.headers})
case 1:return s=r.v,i=(null==n?void 0:n.download)?`&download=${!0===n.download?"":n.download}`:"",r.a(2,{data:s.map(e=>Object.assign(Object.assign({},e),{signedUrl:e.signedURL?encodeURI(`${this.url}${e.signedURL}${i}`):null})),error:null})
case 2:if(r.p=2,o=r.v,!this.shouldThrowOnError){r.n=3
break}throw o
case 3:if(!at(o)){r.n=4
break}return r.a(2,{data:null,error:o})
case 4:throw o
case 5:return r.a(2)}},a,this,[[0,2]])}))}download(e,t){var r=void 0!==(null==t?void 0:t.transform)?"render/image/authenticated":"object",n=this.transformOptsToQueryString((null==t?void 0:t.transform)||{}),a=n?`?${n}`:"",s=this._getFinalPath(e)
return new Is(()=>it(this.fetch,`${this.url}/${r}/${s}${a}`,{headers:this.headers,noResolveJson:!0}),this.shouldThrowOnError)}info(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a,s
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return n=this._getFinalPath(e),t.p=1,t.n=2,it(this.fetch,`${this.url}/object/info/${n}`,{headers:this.headers})
case 2:return a=t.v,t.a(2,{data:Cs(a),error:null})
case 3:if(t.p=3,s=t.v,!this.shouldThrowOnError){t.n=4
break}throw s
case 4:if(!at(s)){t.n=5
break}return t.a(2,{data:null,error:s})
case 5:throw s
case 6:return t.a(2)}},t,this,[[1,3]])}))}exists(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a,s
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return n=this._getFinalPath(e),t.p=1,t.n=2,ct(this.fetch,`${this.url}/object/${n}`,{headers:this.headers})
case 2:return t.a(2,{data:!0,error:null})
case 3:if(t.p=3,s=t.v,!this.shouldThrowOnError){t.n=4
break}throw s
case 4:if(!(at(s)&&s instanceof _s)){t.n=5
break}if(a=s.originalError,![400,404].includes(null==a?void 0:a.status)){t.n=5
break}return t.a(2,{data:!1,error:s})
case 5:throw s
case 6:return t.a(2)}},t,this,[[1,3]])}))}getPublicUrl(e,t){var r=this._getFinalPath(e),n=[],a=(null==t?void 0:t.download)?`download=${!0===t.download?"":t.download}`:""
""!==a&&n.push(a)
var s=void 0!==(null==t?void 0:t.transform)?"render/image":"object",i=this.transformOptsToQueryString((null==t?void 0:t.transform)||{})
""!==i&&n.push(i)
var o=n.join("&")
return""!==o&&(o=`?${o}`),{data:{publicUrl:encodeURI(`${this.url}/${s}/public/${r}${o}`)}}}remove(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,ut(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n,error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!at(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}list(e,t,n){return Pe(this,void 0,void 0,r().m(function a(){var s,i,o
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,s=Object.assign(Object.assign(Object.assign({},zs),t),{prefix:e||""}),r.n=1,ot(this.fetch,`${this.url}/object/list/${this.bucketId}`,s,{headers:this.headers},n)
case 1:return i=r.v,r.a(2,{data:i,error:null})
case 2:if(r.p=2,o=r.v,!this.shouldThrowOnError){r.n=3
break}throw o
case 3:if(!at(o)){r.n=4
break}return r.a(2,{data:null,error:o})
case 4:throw o
case 5:return r.a(2)}},a,this,[[0,2]])}))}listV2(e,t){return Pe(this,void 0,void 0,r().m(function n(){var a,s,i
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,a=Object.assign({},e),r.n=1,ot(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,a,{headers:this.headers},t)
case 1:return s=r.v,r.a(2,{data:s,error:null})
case 2:if(r.p=2,i=r.v,!this.shouldThrowOnError){r.n=3
break}throw i
case 3:if(!at(i)){r.n=4
break}return r.a(2,{data:null,error:i})
case 4:throw i
case 5:return r.a(2)}},n,this,[[0,2]])}))}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return"undefined"!=typeof Buffer?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){var t=[]
return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join("&")}}var Us="2.86.2",$s={"X-Client-Info":`storage-js/${Us}`}
class Fs{constructor(e,t={},r,n){this.shouldThrowOnError=!1
var a=new URL(e);(null==n?void 0:n.useNewHostname)&&/supabase\.(co|in|red)$/.test(a.hostname)&&!a.hostname.includes("storage.supabase.")&&(a.hostname=a.hostname.replace("supabase.","storage.supabase.")),this.url=a.href.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},$s),t),this.fetch=Es(r)}throwOnError(){return this.shouldThrowOnError=!0,this}listBuckets(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a,s
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,n=this.listBucketOptionsToQueryString(e),t.n=1,it(this.fetch,`${this.url}/bucket${n}`,{headers:this.headers})
case 1:return a=t.v,t.a(2,{data:a,error:null})
case 2:if(t.p=2,s=t.v,!this.shouldThrowOnError){t.n=3
break}throw s
case 3:if(!at(s)){t.n=4
break}return t.a(2,{data:null,error:s})
case 4:throw s
case 5:return t.a(2)}},t,this,[[0,2]])}))}getBucket(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,it(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n,error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!at(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}createBucket(e){return Pe(this,arguments,void 0,r().m(function e(t,n={public:!1}){var a,s
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,ot(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:n.type,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers})
case 1:return a=e.v,e.a(2,{data:a,error:null})
case 2:if(e.p=2,s=e.v,!this.shouldThrowOnError){e.n=3
break}throw s
case 3:if(!at(s)){e.n=4
break}return e.a(2,{data:null,error:s})
case 4:throw s
case 5:return e.a(2)}},e,this,[[0,2]])}))}updateBucket(e,t){return Pe(this,void 0,void 0,r().m(function n(){var a,s
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,lt(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers})
case 1:return a=r.v,r.a(2,{data:a,error:null})
case 2:if(r.p=2,s=r.v,!this.shouldThrowOnError){r.n=3
break}throw s
case 3:if(!at(s)){r.n=4
break}return r.a(2,{data:null,error:s})
case 4:throw s
case 5:return r.a(2)}},n,this,[[0,2]])}))}emptyBucket(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,ot(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n,error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!at(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}deleteBucket(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,ut(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n,error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!at(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}listBucketOptionsToQueryString(e){var t={}
return e&&("limit"in e&&(t.limit=String(e.limit)),"offset"in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?"?"+new URLSearchParams(t).toString():""}}var Bs=class extends Error{constructor(e,t){var r
super(e),this.name="IcebergError",this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown="CommitStateUnknownException"===t.icebergType||[500,502,504].includes(t.status)&&!0===(null===(r=t.icebergType)||void 0===r?void 0:r.includes("CommitState"))}isNotFound(){return 404===this.status}isConflict(){return 409===this.status}isAuthenticationTimeout(){return 419===this.status}},Ws=class{constructor(e,t=""){this.client=e,this.prefix=t}listNamespaces(e){var t=this
return s(r().m(function n(){var a,s
return r().w(function(r){for(;;)switch(r.n){case 0:return a=e?{parent:ht(e.namespace)}:void 0,r.n=1,t.client.request({method:"GET",path:`${t.prefix}/namespaces`,query:a})
case 1:return s=r.v,r.a(2,s.data.namespaces.map(e=>({namespace:e})))}},n)}))()}createNamespace(e,t){var n=this
return s(r().m(function a(){var s,i
return r().w(function(r){for(;;)switch(r.n){case 0:return s={namespace:e.namespace,properties:null==t?void 0:t.properties},r.n=1,n.client.request({method:"POST",path:`${n.prefix}/namespaces`,body:s})
case 1:return i=r.v,r.a(2,i.data)}},a)}))()}dropNamespace(e){var t=this
return s(r().m(function n(){return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,t.client.request({method:"DELETE",path:`${t.prefix}/namespaces/${ht(e.namespace)}`})
case 1:return r.a(2)}},n)}))()}loadNamespaceMetadata(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,t.client.request({method:"GET",path:`${t.prefix}/namespaces/${ht(e.namespace)}`})
case 1:return a=r.v,r.a(2,{properties:a.data.properties})}},n)}))()}namespaceExists(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,t.client.request({method:"HEAD",path:`${t.prefix}/namespaces/${ht(e.namespace)}`})
case 1:return r.a(2,!0)
case 2:if(r.p=2,!((a=r.v)instanceof Bs&&404===a.status)){r.n=3
break}return r.a(2,!1)
case 3:throw a
case 4:return r.a(2)}},n,null,[[0,2]])}))()}createNamespaceIfNotExists(e,t){var n=this
return s(r().m(function a(){var s
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,n.createNamespace(e,t)
case 1:return r.a(2,r.v)
case 2:if(r.p=2,!((s=r.v)instanceof Bs&&409===s.status)){r.n=3
break}return r.a(2)
case 3:throw s
case 4:return r.a(2)}},a,null,[[0,2]])}))()}},Vs=class{constructor(e,t="",r){this.client=e,this.prefix=t,this.accessDelegation=r}listTables(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,t.client.request({method:"GET",path:`${t.prefix}/namespaces/${mt(e.namespace)}/tables`})
case 1:return a=r.v,r.a(2,a.data.identifiers)}},n)}))()}createTable(e,t){var n=this
return s(r().m(function a(){var s,i
return r().w(function(r){for(;;)switch(r.n){case 0:return s={},n.accessDelegation&&(s["X-Iceberg-Access-Delegation"]=n.accessDelegation),r.n=1,n.client.request({method:"POST",path:`${n.prefix}/namespaces/${mt(e.namespace)}/tables`,body:t,headers:s})
case 1:return i=r.v,r.a(2,i.data.metadata)}},a)}))()}updateTable(e,t){var n=this
return s(r().m(function a(){var s
return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,n.client.request({method:"POST",path:`${n.prefix}/namespaces/${mt(e.namespace)}/tables/${e.name}`,body:t})
case 1:return s=r.v,r.a(2,{"metadata-location":s.data["metadata-location"],metadata:s.data.metadata})}},a)}))()}dropTable(e,t){var n=this
return s(r().m(function a(){var s
return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,n.client.request({method:"DELETE",path:`${n.prefix}/namespaces/${mt(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String(null!==(s=null==t?void 0:t.purge)&&void 0!==s&&s)}})
case 1:return r.a(2)}},a)}))()}loadTable(e){var t=this
return s(r().m(function n(){var a,s
return r().w(function(r){for(;;)switch(r.n){case 0:return a={},t.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=t.accessDelegation),r.n=1,t.client.request({method:"GET",path:`${t.prefix}/namespaces/${mt(e.namespace)}/tables/${e.name}`,headers:a})
case 1:return s=r.v,r.a(2,s.data.metadata)}},n)}))()}tableExists(e){var t=this
return s(r().m(function n(){var a,s
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return a={},t.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=t.accessDelegation),r.p=1,r.n=2,t.client.request({method:"HEAD",path:`${t.prefix}/namespaces/${mt(e.namespace)}/tables/${e.name}`,headers:a})
case 2:return r.a(2,!0)
case 3:if(r.p=3,!((s=r.v)instanceof Bs&&404===s.status)){r.n=4
break}return r.a(2,!1)
case 4:throw s
case 5:return r.a(2)}},n,null,[[1,3]])}))()}createTableIfNotExists(e,t){var n=this
return s(r().m(function a(){var s
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,n.createTable(e,t)
case 1:case 3:return r.a(2,r.v)
case 2:if(r.p=2,!((s=r.v)instanceof Bs&&409===s.status)){r.n=4
break}return r.n=3,n.loadTable({namespace:e.namespace,name:t.name})
case 4:throw s
case 5:return r.a(2)}},a,null,[[0,2]])}))()}},qs=class{constructor(e){var t,n="v1"
e.catalogName&&(n+=`/${e.catalogName}`)
var a=e.baseUrl.endsWith("/")?e.baseUrl:`${e.baseUrl}/`
this.client=function(e){var t,n=null!==(t=e.fetchImpl)&&void 0!==t?t:globalThis.fetch
return{request(t){return s(r().m(function t({method:a,path:s,query:i,body:o,headers:l}){var c,d,p,f,h,m,g,b,v
return r().w(function(t){for(;;)switch(t.n){case 0:return c=dt(e.baseUrl,s,i),t.n=1,pt(e.auth)
case 1:return d=t.v,t.n=2,n(c,{method:a,headers:u(u(u({},o?{"Content-Type":"application/json"}:{}),d),l),body:o?JSON.stringify(o):void 0})
case 2:return p=t.v,t.n=3,p.text()
case 3:if(f=t.v,h=(p.headers.get("content-type")||"").includes("application/json"),m=h&&f?JSON.parse(f):f,p.ok){t.n=4
break}throw v=null==(b=h?m:void 0)?void 0:b.error,new Bs(null!==(g=null==v?void 0:v.message)&&void 0!==g?g:`Request failed with status ${p.status}`,{status:p.status,icebergType:null==v?void 0:v.type,icebergCode:null==v?void 0:v.code,details:b})
case 4:return t.a(2,{status:p.status,headers:p.headers,data:m})}},t)})).apply(this,arguments)}}}({baseUrl:a,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=null===(t=e.accessDelegation)||void 0===t?void 0:t.join(","),this.namespaceOps=new Ws(this.client,n),this.tableOps=new Vs(this.client,n,this.accessDelegation)}listNamespaces(e){var t=this
return s(r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.namespaceOps.listNamespaces(e))},n)}))()}createNamespace(e,t){var n=this
return s(r().m(function a(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,n.namespaceOps.createNamespace(e,t))},a)}))()}dropNamespace(e){var t=this
return s(r().m(function n(){return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,t.namespaceOps.dropNamespace(e)
case 1:return r.a(2)}},n)}))()}loadNamespaceMetadata(e){var t=this
return s(r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.namespaceOps.loadNamespaceMetadata(e))},n)}))()}listTables(e){var t=this
return s(r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.tableOps.listTables(e))},n)}))()}createTable(e,t){var n=this
return s(r().m(function a(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,n.tableOps.createTable(e,t))},a)}))()}updateTable(e,t){var n=this
return s(r().m(function a(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,n.tableOps.updateTable(e,t))},a)}))()}dropTable(e,t){var n=this
return s(r().m(function a(){return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,n.tableOps.dropTable(e,t)
case 1:return r.a(2)}},a)}))()}loadTable(e){var t=this
return s(r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.tableOps.loadTable(e))},n)}))()}namespaceExists(e){var t=this
return s(r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.namespaceOps.namespaceExists(e))},n)}))()}tableExists(e){var t=this
return s(r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.tableOps.tableExists(e))},n)}))()}createNamespaceIfNotExists(e,t){var n=this
return s(r().m(function a(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,n.namespaceOps.createNamespaceIfNotExists(e,t))},a)}))()}createTableIfNotExists(e,t){var n=this
return s(r().m(function a(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,n.tableOps.createTableIfNotExists(e,t))},a)}))()}}
class Ms{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},$s),t),this.fetch=Es(r)}throwOnError(){return this.shouldThrowOnError=!0,this}createBucket(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,ot(this.fetch,`${this.url}/bucket`,{name:e},{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n,error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!at(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}listBuckets(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a,s,i,o
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,n=new URLSearchParams,void 0!==(null==e?void 0:e.limit)&&n.set("limit",e.limit.toString()),void 0!==(null==e?void 0:e.offset)&&n.set("offset",e.offset.toString()),(null==e?void 0:e.sortColumn)&&n.set("sortColumn",e.sortColumn),(null==e?void 0:e.sortOrder)&&n.set("sortOrder",e.sortOrder),(null==e?void 0:e.search)&&n.set("search",e.search),a=n.toString(),s=a?`${this.url}/bucket?${a}`:`${this.url}/bucket`,t.n=1,it(this.fetch,s,{headers:this.headers})
case 1:return i=t.v,t.a(2,{data:i,error:null})
case 2:if(t.p=2,o=t.v,!this.shouldThrowOnError){t.n=3
break}throw o
case 3:if(!at(o)){t.n=4
break}return t.a(2,{data:null,error:o})
case 4:throw o
case 5:return t.a(2)}},t,this,[[0,2]])}))}deleteBucket(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,ut(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n,error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!at(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}from(e){if(!(e=>!(!e||"string"!=typeof e)&&!(0===e.length||e.length>100)&&e.trim()===e&&!e.includes("/")&&!e.includes("\\")&&/^[\w!.\*'() &$@=;:+,?-]+$/.test(e))(e))throw new js("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.")
return new qs({baseUrl:this.url,catalogName:e,auth:{type:"custom",getHeaders:()=>Pe(this,void 0,void 0,r().m(function e(){return r().w(function(e){for(;;)if(0===e.n)return e.a(2,this.headers)},e,this)}))},fetch:this.fetch})}}var Hs,Ks={"X-Client-Info":`storage-js/${Us}`,"Content-Type":"application/json"}
class Ys extends Error{constructor(e){super(e),this.__isStorageVectorsError=!0,this.name="StorageVectorsError"}}class Gs extends Ys{constructor(e,t,r){super(e),this.name="StorageVectorsApiError",this.status=t,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class Js extends Ys{constructor(e,t){super(e),this.name="StorageVectorsUnknownError",this.originalError=t}}!function(e){e.InternalError="InternalError",e.S3VectorConflictException="S3VectorConflictException",e.S3VectorNotFoundException="S3VectorNotFoundException",e.S3VectorBucketNotEmpty="S3VectorBucketNotEmpty",e.S3VectorMaxBucketsExceeded="S3VectorMaxBucketsExceeded",e.S3VectorMaxIndexesExceeded="S3VectorMaxIndexesExceeded"}(Hs||(Hs={}))
var Xs=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Zs=e=>{if("object"!=typeof e||null===e)return!1
var t=Object.getPrototypeOf(e)
return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},Qs=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),ei=(e,t,n)=>Pe(void 0,void 0,void 0,r().m(function a(){var s,i,o,l
return r().w(function(r){for(;;)switch(r.n){case 0:e&&"object"==typeof e&&"status"in e&&"ok"in e&&"number"==typeof e.status&&!(null==n?void 0:n.noResolveJson)?(s=e.status||500,"function"==typeof(i=e).json?i.json().then(e=>{var r=(null==e?void 0:e.statusCode)||(null==e?void 0:e.code)||s+""
t(new Gs(Qs(e),s,r))}).catch(()=>{var e=s+"",r=i.statusText||`HTTP ${s} error`
t(new Gs(r,s,e))}):(o=s+"",l=i.statusText||`HTTP ${s} error`,t(new Gs(l,s,o)))):t(new Js(Qs(e),e))
case 1:return r.a(2)}},a)})),ti=(e,t,r,n)=>{var a={method:e,headers:(null==t?void 0:t.headers)||{}}
return n?(Zs(n)?(a.headers=Object.assign({"Content-Type":"application/json"},null==t?void 0:t.headers),a.body=JSON.stringify(n)):a.body=n,Object.assign(Object.assign({},a),r)):a}
class ri{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Ks),t),this.fetch=Xs(r)}throwOnError(){return this.shouldThrowOnError=!0,this}createIndex(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,vt(this.fetch,`${this.url}/CreateIndex`,e,{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n||{},error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!gt(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}getIndex(e,t){return Pe(this,void 0,void 0,r().m(function n(){var a,s
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,vt(this.fetch,`${this.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:this.headers})
case 1:return a=r.v,r.a(2,{data:a,error:null})
case 2:if(r.p=2,s=r.v,!this.shouldThrowOnError){r.n=3
break}throw s
case 3:if(!gt(s)){r.n=4
break}return r.a(2,{data:null,error:s})
case 4:throw s
case 5:return r.a(2)}},n,this,[[0,2]])}))}listIndexes(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,vt(this.fetch,`${this.url}/ListIndexes`,e,{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n,error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!gt(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}deleteIndex(e,t){return Pe(this,void 0,void 0,r().m(function n(){var a,s
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,vt(this.fetch,`${this.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:this.headers})
case 1:return a=r.v,r.a(2,{data:a||{},error:null})
case 2:if(r.p=2,s=r.v,!this.shouldThrowOnError){r.n=3
break}throw s
case 3:if(!gt(s)){r.n=4
break}return r.a(2,{data:null,error:s})
case 4:throw s
case 5:return r.a(2)}},n,this,[[0,2]])}))}}class ni{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Ks),t),this.fetch=Xs(r)}throwOnError(){return this.shouldThrowOnError=!0,this}putVectors(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(t.p=0,!(e.vectors.length<1||e.vectors.length>500)){t.n=1
break}throw new Error("Vector batch size must be between 1 and 500 items")
case 1:return t.n=2,vt(this.fetch,`${this.url}/PutVectors`,e,{headers:this.headers})
case 2:return n=t.v,t.a(2,{data:n||{},error:null})
case 3:if(t.p=3,a=t.v,!this.shouldThrowOnError){t.n=4
break}throw a
case 4:if(!gt(a)){t.n=5
break}return t.a(2,{data:null,error:a})
case 5:throw a
case 6:return t.a(2)}},t,this,[[0,3]])}))}getVectors(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,vt(this.fetch,`${this.url}/GetVectors`,e,{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n,error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!gt(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}listVectors(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(t.p=0,void 0===e.segmentCount){t.n=2
break}if(!(e.segmentCount<1||e.segmentCount>16)){t.n=1
break}throw new Error("segmentCount must be between 1 and 16")
case 1:if(void 0===e.segmentIndex){t.n=2
break}if(!(e.segmentIndex<0||e.segmentIndex>=e.segmentCount)){t.n=2
break}throw new Error("segmentIndex must be between 0 and "+(e.segmentCount-1))
case 2:return t.n=3,vt(this.fetch,`${this.url}/ListVectors`,e,{headers:this.headers})
case 3:return n=t.v,t.a(2,{data:n,error:null})
case 4:if(t.p=4,a=t.v,!this.shouldThrowOnError){t.n=5
break}throw a
case 5:if(!gt(a)){t.n=6
break}return t.a(2,{data:null,error:a})
case 6:throw a
case 7:return t.a(2)}},t,this,[[0,4]])}))}queryVectors(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,vt(this.fetch,`${this.url}/QueryVectors`,e,{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n,error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!gt(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}deleteVectors(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(t.p=0,!(e.keys.length<1||e.keys.length>500)){t.n=1
break}throw new Error("Keys batch size must be between 1 and 500 items")
case 1:return t.n=2,vt(this.fetch,`${this.url}/DeleteVectors`,e,{headers:this.headers})
case 2:return n=t.v,t.a(2,{data:n||{},error:null})
case 3:if(t.p=3,a=t.v,!this.shouldThrowOnError){t.n=4
break}throw a
case 4:if(!gt(a)){t.n=5
break}return t.a(2,{data:null,error:a})
case 5:throw a
case 6:return t.a(2)}},t,this,[[0,3]])}))}}class ai{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Ks),t),this.fetch=Xs(r)}throwOnError(){return this.shouldThrowOnError=!0,this}createBucket(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,vt(this.fetch,`${this.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n||{},error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!gt(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}getBucket(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,vt(this.fetch,`${this.url}/GetVectorBucket`,{vectorBucketName:e},{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n,error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!gt(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}listBuckets(){return Pe(this,arguments,void 0,r().m(function e(t={}){var n,a
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,vt(this.fetch,`${this.url}/ListVectorBuckets`,t,{headers:this.headers})
case 1:return n=e.v,e.a(2,{data:n,error:null})
case 2:if(e.p=2,a=e.v,!this.shouldThrowOnError){e.n=3
break}throw a
case 3:if(!gt(a)){e.n=4
break}return e.a(2,{data:null,error:a})
case 4:throw a
case 5:return e.a(2)}},e,this,[[0,2]])}))}deleteBucket(e){return Pe(this,void 0,void 0,r().m(function t(){var n,a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,vt(this.fetch,`${this.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:this.headers})
case 1:return n=t.v,t.a(2,{data:n||{},error:null})
case 2:if(t.p=2,a=t.v,!this.shouldThrowOnError){t.n=3
break}throw a
case 3:if(!gt(a)){t.n=4
break}return t.a(2,{data:null,error:a})
case 4:throw a
case 5:return t.a(2)}},t,this,[[0,2]])}))}}class si extends ai{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new ii(this.url,this.headers,e,this.fetch)}createBucket(e){var t=Object.create(null,{createBucket:{get:()=>super.createBucket}})
return Pe(this,void 0,void 0,r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.createBucket.call(this,e))},n,this)}))}getBucket(e){var t=Object.create(null,{getBucket:{get:()=>super.getBucket}})
return Pe(this,void 0,void 0,r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.getBucket.call(this,e))},n,this)}))}listBuckets(){var e=Object.create(null,{listBuckets:{get:()=>super.listBuckets}})
return Pe(this,arguments,void 0,r().m(function t(n={}){return r().w(function(t){for(;;)if(0===t.n)return t.a(2,e.listBuckets.call(this,n))},t,this)}))}deleteBucket(e){var t=Object.create(null,{deleteBucket:{get:()=>super.deleteBucket}})
return Pe(this,void 0,void 0,r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.deleteBucket.call(this,e))},n,this)}))}}class ii extends ri{constructor(e,t,r,n){super(e,t,n),this.vectorBucketName=r}createIndex(e){var t=Object.create(null,{createIndex:{get:()=>super.createIndex}})
return Pe(this,void 0,void 0,r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.createIndex.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName})))},n,this)}))}listIndexes(){var e=Object.create(null,{listIndexes:{get:()=>super.listIndexes}})
return Pe(this,arguments,void 0,r().m(function t(n={}){return r().w(function(t){for(;;)if(0===t.n)return t.a(2,e.listIndexes.call(this,Object.assign(Object.assign({},n),{vectorBucketName:this.vectorBucketName})))},t,this)}))}getIndex(e){var t=Object.create(null,{getIndex:{get:()=>super.getIndex}})
return Pe(this,void 0,void 0,r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.getIndex.call(this,this.vectorBucketName,e))},n,this)}))}deleteIndex(e){var t=Object.create(null,{deleteIndex:{get:()=>super.deleteIndex}})
return Pe(this,void 0,void 0,r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.deleteIndex.call(this,this.vectorBucketName,e))},n,this)}))}index(e){return new oi(this.url,this.headers,this.vectorBucketName,e,this.fetch)}}class oi extends ni{constructor(e,t,r,n,a){super(e,t,a),this.vectorBucketName=r,this.indexName=n}putVectors(e){var t=Object.create(null,{putVectors:{get:()=>super.putVectors}})
return Pe(this,void 0,void 0,r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.putVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName})))},n,this)}))}getVectors(e){var t=Object.create(null,{getVectors:{get:()=>super.getVectors}})
return Pe(this,void 0,void 0,r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.getVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName})))},n,this)}))}listVectors(){var e=Object.create(null,{listVectors:{get:()=>super.listVectors}})
return Pe(this,arguments,void 0,r().m(function t(n={}){return r().w(function(t){for(;;)if(0===t.n)return t.a(2,e.listVectors.call(this,Object.assign(Object.assign({},n),{vectorBucketName:this.vectorBucketName,indexName:this.indexName})))},t,this)}))}queryVectors(e){var t=Object.create(null,{queryVectors:{get:()=>super.queryVectors}})
return Pe(this,void 0,void 0,r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.queryVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName})))},n,this)}))}deleteVectors(e){var t=Object.create(null,{deleteVectors:{get:()=>super.deleteVectors}})
return Pe(this,void 0,void 0,r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.deleteVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName})))},n,this)}))}}var li,ci,ui,di,pi=x(Object.freeze({__proto__:null,StorageAnalyticsClient:Ms,StorageApiError:Ss,StorageClient:class extends Fs{constructor(e,t={},r,n){super(e,t,r,n)}from(e){return new Ds(this.url,this.headers,e,this.fetch)}get vectors(){return new si(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Ms(this.url+"/iceberg",this.headers,this.fetch)}},StorageError:js,StorageUnknownError:_s,StorageVectorsApiError:Gs,StorageVectorsClient:si,StorageVectorsError:Ys,get StorageVectorsErrorCode(){return Hs},StorageVectorsUnknownError:Js,VectorBucketApi:ai,VectorBucketScope:ii,VectorDataApi:ni,VectorIndexApi:ri,VectorIndexScope:oi,isPlainObject:Zs,isStorageError:at,isStorageVectorsError:gt,normalizeToFloat32:e=>Array.from(new Float32Array(e)),resolveFetch:Xs,resolveResponse:()=>Response,validateVectorDimension:(e,t)=>{if(void 0!==t&&e.float32.length!==t)throw new Error(`Vector dimension mismatch: expected ${t}, got ${e.float32.length}`)}})),fi={},hi={},mi={},gi={},bi={},vi="2.86.2",yi=3e4,xi={"X-Client-Info":`gotrue-js/${vi}`},wi="X-Supabase-Api-Version",ki={timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"},ji=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Si=class extends Error{constructor(e,t,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=r}},_i=class extends Si{constructor(e,t,r){super(e,t,r),this.name="AuthApiError",this.status=t,this.code=r}},Ni=class extends Si{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}},Ei=class extends Si{constructor(e,t,r,n){super(e,r,n),this.name=t,this.status=r}},Ti=class extends Ei{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}},Ci=class extends Ei{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}},Ri=class extends Ei{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}},Pi=class extends Ei{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}},Ai=class extends Ei{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}},Oi=class extends Ei{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}},Ii=class extends Ei{constructor(e,t,r){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=r}},zi=class extends Ei{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}},Li="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Di=" \t\n\r=".split(""),Ui=(()=>{for(var e=new Array(128),t=0;t<e.length;t+=1)e[t]=-1
for(var r=0;r<Di.length;r+=1)e[Di[r].charCodeAt(0)]=-2
for(var n=0;n<Li.length;n+=1)e[Li[n].charCodeAt(0)]=n
return e})(),$i=()=>"undefined"!=typeof window&&"undefined"!=typeof document,Fi={tested:!1,writable:!1},Bi=()=>{if(!$i())return!1
try{if("object"!=typeof globalThis.localStorage)return!1}catch(hc){return!1}if(Fi.tested)return Fi.writable
var e=`lswt-${Math.random()}${Math.random()}`
try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Fi.tested=!0,Fi.writable=!0}catch(hc){Fi.tested=!0,Fi.writable=!1}return Fi.writable},Wi=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Vi=e=>"object"==typeof e&&null!==e&&"status"in e&&"ok"in e&&"json"in e&&"function"==typeof e.json,qi=function(){var e=s(r().m(function e(t,n,a){return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,t.setItem(n,JSON.stringify(a))
case 1:return e.a(2)}},e)}))
return function(t,r,n){return e.apply(this,arguments)}}(),Mi=function(){var e=s(r().m(function e(t,n){var a
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.n=1,t.getItem(n)
case 1:if(a=e.v){e.n=2
break}return e.a(2,null)
case 2:return e.p=2,e.a(2,JSON.parse(a))
case 3:return e.p=3,e.v,e.a(2,a)}},e,null,[[2,3]])}))
return function(t,r){return e.apply(this,arguments)}}(),Hi=function(){var e=s(r().m(function e(t,n){return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,t.removeItem(n)
case 1:return e.a(2)}},e)}))
return function(t,r){return e.apply(this,arguments)}}()
class Ki{constructor(){this.promise=new Ki.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}Ki.promiseConstructor=Promise
var Yi=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i,Gi=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,Ji=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),Xi=[502,503,504],Zi=(e,t,r,n)=>{var a={method:e,headers:(null==t?void 0:t.headers)||{}}
return"GET"===e?a:(a.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},null==t?void 0:t.headers),a.body=JSON.stringify(n),Object.assign(Object.assign({},a),r))},Qi=["global","local","others"],eo=class{constructor({url:e="",headers:t={},fetch:r}){this.url=e,this.headers=t,this.fetch=Wi(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}signOut(e){var t=this
return s(r().m(function e(n,a=Qi[0]){var s
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(!(Qi.indexOf(a)<0)){e.n=1
break}throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Qi.join(", ")}`)
case 1:return e.p=1,e.n=2,nr(t.fetch,"POST",`${t.url}/logout?scope=${a}`,{headers:t.headers,jwt:n,noResolveJson:!0})
case 2:return e.a(2,{data:null,error:null})
case 3:if(e.p=3,!jt(s=e.v)){e.n=4
break}return e.a(2,{data:null,error:s})
case 4:throw s
case 5:return e.a(2)}},e,null,[[1,3]])})).apply(this,arguments)}inviteUserByEmail(e){var t=this
return s(r().m(function e(n,a={}){var s
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,nr(t.fetch,"POST",`${t.url}/invite`,{body:{email:n,data:a.data},headers:t.headers,redirectTo:a.redirectTo,xform:cr})
case 1:return e.a(2,e.v)
case 2:if(e.p=2,!jt(s=e.v)){e.n=3
break}return e.a(2,{data:{user:null},error:s})
case 3:throw s
case 4:return e.a(2)}},e,null,[[0,2]])})).apply(this,arguments)}generateLink(e){var t=this
return s(r().m(function n(){var a,s,i,o
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,a=e.options,s=je(e,["options"]),i=Object.assign(Object.assign({},s),a),"newEmail"in s&&(i.new_email=null==s?void 0:s.newEmail,delete i.newEmail),r.n=1,nr(t.fetch,"POST",`${t.url}/admin/generate_link`,{body:i,headers:t.headers,xform:dr,redirectTo:null==a?void 0:a.redirectTo})
case 1:return r.a(2,r.v)
case 2:if(r.p=2,!jt(o=r.v)){r.n=3
break}return r.a(2,{data:{properties:null,user:null},error:o})
case 3:throw o
case 4:return r.a(2)}},n,null,[[0,2]])}))()}createUser(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,nr(t.fetch,"POST",`${t.url}/admin/users`,{body:e,headers:t.headers,xform:cr})
case 1:return r.a(2,r.v)
case 2:if(r.p=2,!jt(a=r.v)){r.n=3
break}return r.a(2,{data:{user:null},error:a})
case 3:throw a
case 4:return r.a(2)}},n,null,[[0,2]])}))()}listUsers(e){var t=this
return s(r().m(function n(){var a,s,i,o,l,c,u,d,p,f,h,m,g
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,d={nextPage:null,lastPage:0,total:0},r.n=1,nr(t.fetch,"GET",`${t.url}/admin/users`,{headers:t.headers,noResolveJson:!0,query:{page:null!==(s=null===(a=null==e?void 0:e.page)||void 0===a?void 0:a.toString())&&void 0!==s?s:"",per_page:null!==(o=null===(i=null==e?void 0:e.perPage)||void 0===i?void 0:i.toString())&&void 0!==o?o:""},xform:pr})
case 1:if(!(p=r.v).error){r.n=2
break}throw p.error
case 2:return r.n=3,p.json()
case 3:return f=r.v,h=null!==(l=p.headers.get("x-total-count"))&&void 0!==l?l:0,(m=null!==(u=null===(c=p.headers.get("link"))||void 0===c?void 0:c.split(","))&&void 0!==u?u:[]).length>0&&(m.forEach(e=>{var t=parseInt(e.split(";")[0].split("=")[1].substring(0,1)),r=JSON.parse(e.split(";")[1].split("=")[1])
d[`${r}Page`]=t}),d.total=parseInt(h)),r.a(2,{data:Object.assign(Object.assign({},f),d),error:null})
case 4:if(r.p=4,!jt(g=r.v)){r.n=5
break}return r.a(2,{data:{users:[]},error:g})
case 5:throw g
case 6:return r.a(2)}},n,null,[[0,4]])}))()}getUserById(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return Xt(e),r.p=1,r.n=2,nr(t.fetch,"GET",`${t.url}/admin/users/${e}`,{headers:t.headers,xform:cr})
case 2:return r.a(2,r.v)
case 3:if(r.p=3,!jt(a=r.v)){r.n=4
break}return r.a(2,{data:{user:null},error:a})
case 4:throw a
case 5:return r.a(2)}},n,null,[[1,3]])}))()}updateUserById(e,t){var n=this
return s(r().m(function a(){var s
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return Xt(e),r.p=1,r.n=2,nr(n.fetch,"PUT",`${n.url}/admin/users/${e}`,{body:t,headers:n.headers,xform:cr})
case 2:return r.a(2,r.v)
case 3:if(r.p=3,!jt(s=r.v)){r.n=4
break}return r.a(2,{data:{user:null},error:s})
case 4:throw s
case 5:return r.a(2)}},a,null,[[1,3]])}))()}deleteUser(e){var t=this
return s(r().m(function e(n,a=!1){var s
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return Xt(n),e.p=1,e.n=2,nr(t.fetch,"DELETE",`${t.url}/admin/users/${n}`,{headers:t.headers,body:{should_soft_delete:a},xform:cr})
case 2:return e.a(2,e.v)
case 3:if(e.p=3,!jt(s=e.v)){e.n=4
break}return e.a(2,{data:{user:null},error:s})
case 4:throw s
case 5:return e.a(2)}},e,null,[[1,3]])})).apply(this,arguments)}_listFactors(e){var t=this
return s(r().m(function n(){var a,s,i,o
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return Xt(e.userId),r.p=1,r.n=2,nr(t.fetch,"GET",`${t.url}/admin/users/${e.userId}/factors`,{headers:t.headers,xform:e=>({data:{factors:e},error:null})})
case 2:return a=r.v,s=a.data,i=a.error,r.a(2,{data:s,error:i})
case 3:if(r.p=3,!jt(o=r.v)){r.n=4
break}return r.a(2,{data:null,error:o})
case 4:throw o
case 5:return r.a(2)}},n,null,[[1,3]])}))()}_deleteFactor(e){var t=this
return s(r().m(function n(){var a,s
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return Xt(e.userId),Xt(e.id),r.p=1,r.n=2,nr(t.fetch,"DELETE",`${t.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:t.headers})
case 2:return a=r.v,r.a(2,{data:a,error:null})
case 3:if(r.p=3,!jt(s=r.v)){r.n=4
break}return r.a(2,{data:null,error:s})
case 4:throw s
case 5:return r.a(2)}},n,null,[[1,3]])}))()}_listOAuthClients(e){var t=this
return s(r().m(function n(){var a,s,i,o,l,c,u,d,p,f,h,m,g
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,d={nextPage:null,lastPage:0,total:0},r.n=1,nr(t.fetch,"GET",`${t.url}/admin/oauth/clients`,{headers:t.headers,noResolveJson:!0,query:{page:null!==(s=null===(a=null==e?void 0:e.page)||void 0===a?void 0:a.toString())&&void 0!==s?s:"",per_page:null!==(o=null===(i=null==e?void 0:e.perPage)||void 0===i?void 0:i.toString())&&void 0!==o?o:""},xform:pr})
case 1:if(!(p=r.v).error){r.n=2
break}throw p.error
case 2:return r.n=3,p.json()
case 3:return f=r.v,h=null!==(l=p.headers.get("x-total-count"))&&void 0!==l?l:0,(m=null!==(u=null===(c=p.headers.get("link"))||void 0===c?void 0:c.split(","))&&void 0!==u?u:[]).length>0&&(m.forEach(e=>{var t=parseInt(e.split(";")[0].split("=")[1].substring(0,1)),r=JSON.parse(e.split(";")[1].split("=")[1])
d[`${r}Page`]=t}),d.total=parseInt(h)),r.a(2,{data:Object.assign(Object.assign({},f),d),error:null})
case 4:if(r.p=4,!jt(g=r.v)){r.n=5
break}return r.a(2,{data:{clients:[]},error:g})
case 5:throw g
case 6:return r.a(2)}},n,null,[[0,4]])}))()}_createOAuthClient(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,nr(t.fetch,"POST",`${t.url}/admin/oauth/clients`,{body:e,headers:t.headers,xform:e=>({data:e,error:null})})
case 1:return r.a(2,r.v)
case 2:if(r.p=2,!jt(a=r.v)){r.n=3
break}return r.a(2,{data:null,error:a})
case 3:throw a
case 4:return r.a(2)}},n,null,[[0,2]])}))()}_getOAuthClient(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,nr(t.fetch,"GET",`${t.url}/admin/oauth/clients/${e}`,{headers:t.headers,xform:e=>({data:e,error:null})})
case 1:return r.a(2,r.v)
case 2:if(r.p=2,!jt(a=r.v)){r.n=3
break}return r.a(2,{data:null,error:a})
case 3:throw a
case 4:return r.a(2)}},n,null,[[0,2]])}))()}_updateOAuthClient(e,t){var n=this
return s(r().m(function a(){var s
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,nr(n.fetch,"PUT",`${n.url}/admin/oauth/clients/${e}`,{body:t,headers:n.headers,xform:e=>({data:e,error:null})})
case 1:return r.a(2,r.v)
case 2:if(r.p=2,!jt(s=r.v)){r.n=3
break}return r.a(2,{data:null,error:s})
case 3:throw s
case 4:return r.a(2)}},a,null,[[0,2]])}))()}_deleteOAuthClient(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,nr(t.fetch,"DELETE",`${t.url}/admin/oauth/clients/${e}`,{headers:t.headers,noResolveJson:!0})
case 1:return r.a(2,{data:null,error:null})
case 2:if(r.p=2,!jt(a=r.v)){r.n=3
break}return r.a(2,{data:null,error:a})
case 3:throw a
case 4:return r.a(2)}},n,null,[[0,2]])}))()}_regenerateOAuthClientSecret(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,nr(t.fetch,"POST",`${t.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:t.headers,xform:e=>({data:e,error:null})})
case 1:return r.a(2,r.v)
case 2:if(r.p=2,!jt(a=r.v)){r.n=3
break}return r.a(2,{data:null,error:a})
case 3:throw a
case 4:return r.a(2)}},n,null,[[0,2]])}))()}},to={debug:!!(globalThis&&Bi()&&globalThis.localStorage&&"true"===globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug"))}
class ro extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}var no=class extends ro{}
class ao extends ro{}var so={}
class io extends Error{constructor({message:e,code:t,cause:r,name:n}){var a
super(e,{cause:r}),this.__isWebAuthnError=!0,this.name=null!==(a=null!=n?n:r instanceof Error?r.name:void 0)&&void 0!==a?a:"Unknown Error",this.code=t}}class oo extends io{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}var lo=new class{createNewAbortSignal(){if(this.controller){var e=new Error("Cancelling existing WebAuthn API call for new one")
e.name="AbortError",this.controller.abort(e)}var t=new AbortController
return this.controller=t,t.signal}cancelCeremony(){if(this.controller){var e=new Error("Manually cancelling existing WebAuthn API call")
e.name="AbortError",this.controller.abort(e),this.controller=void 0}}},co={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},uo={userVerification:"preferred",hints:["security-key"],attestation:"direct"}
class po{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}_enroll(e){var t=this
return s(r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"})))},n)}))()}_challenge(e,t){var n=this
return s(r().m(function e({factorId:t,webauthn:a,friendlyName:s,signal:i},o){var l,c,u,d,p,f,h,m,g,b,v,y,x,w,k
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,n.client.mfa.challenge({factorId:t,webauthn:a})
case 1:if(l=e.v,c=l.data,u=l.error,c){e.n=2
break}return e.a(2,{data:null,error:u})
case 2:d=null!=i?i:lo.createNewAbortSignal(),"create"===c.webauthn.type&&((p=c.webauthn.credential_options.publicKey.user).name||(p.name=`${p.id}:${s}`),p.displayName||(p.displayName=p.name)),w=c.webauthn.type,e.n="create"===w?3:"request"===w?6:9
break
case 3:return f=Ir(c.webauthn.credential_options.publicKey,null==o?void 0:o.create),e.n=4,Cr({publicKey:f,signal:d})
case 4:if(h=e.v,m=h.data,g=h.error,!m){e.n=5
break}return e.a(2,{data:{factorId:t,challengeId:c.id,webauthn:{type:c.webauthn.type,credential_response:m}},error:null})
case 5:return e.a(2,{data:null,error:g})
case 6:return b=zr(c.webauthn.credential_options.publicKey,null==o?void 0:o.request),e.n=7,Pr(Object.assign(Object.assign({},c.webauthn.credential_options),{publicKey:b,signal:d}))
case 7:if(v=e.v,y=v.data,x=v.error,!y){e.n=8
break}return e.a(2,{data:{factorId:t,challengeId:c.id,webauthn:{type:c.webauthn.type,credential_response:y}},error:null})
case 8:return e.a(2,{data:null,error:x})
case 9:e.n=12
break
case 10:if(e.p=10,!jt(k=e.v)){e.n=11
break}return e.a(2,{data:null,error:k})
case 11:return e.a(2,{data:null,error:new Ni("Unexpected error in challenge",k)})
case 12:return e.a(2)}},e,null,[[0,10]])})).apply(this,arguments)}_verify(e){var t=this
return s(r().m(function e({challengeId:n,factorId:a,webauthn:s}){return r().w(function(e){for(;;)if(0===e.n)return e.a(2,t.client.mfa.verify({factorId:a,challengeId:n,webauthn:s}))},e)})).apply(this,arguments)}_authenticate(e,t){var n=this
return s(r().m(function e({factorId:t,webauthn:{rpId:a=("undefined"!=typeof window?window.location.hostname:void 0),rpOrigins:s=("undefined"!=typeof window?[window.location.origin]:void 0),signal:i}={}},o){var l,c,u,d,p
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(a){e.n=1
break}return e.a(2,{data:null,error:new Si("rpId is required for WebAuthn authentication")})
case 1:if(e.p=1,Tr()){e.n=2
break}return e.a(2,{data:null,error:new Ni("Browser does not support WebAuthn",null)})
case 2:return e.n=3,n.challenge({factorId:t,webauthn:{rpId:a,rpOrigins:s},signal:i},{request:o})
case 3:if(l=e.v,c=l.data,u=l.error,c){e.n=4
break}return e.a(2,{data:null,error:u})
case 4:return d=c.webauthn,e.a(2,n._verify({factorId:t,challengeId:c.challengeId,webauthn:{type:d.type,rpId:a,rpOrigins:s,credential_response:d.credential_response}}))
case 5:if(e.p=5,!jt(p=e.v)){e.n=6
break}return e.a(2,{data:null,error:p})
case 6:return e.a(2,{data:null,error:new Ni("Unexpected error in authenticate",p)})}},e,null,[[1,5]])})).apply(this,arguments)}_register(e,t){var n=this
return s(r().m(function e({friendlyName:t,webauthn:{rpId:a=("undefined"!=typeof window?window.location.hostname:void 0),rpOrigins:s=("undefined"!=typeof window?[window.location.origin]:void 0),signal:i}={}},o){var l,c,u,d,p,f,h
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(a){e.n=1
break}return e.a(2,{data:null,error:new Si("rpId is required for WebAuthn registration")})
case 1:if(e.p=1,Tr()){e.n=2
break}return e.a(2,{data:null,error:new Ni("Browser does not support WebAuthn",null)})
case 2:return e.n=3,n._enroll({friendlyName:t})
case 3:if(l=e.v,c=l.data,u=l.error,c){e.n=5
break}return e.n=4,n.client.mfa.listFactors().then(e=>{var r
return null===(r=e.data)||void 0===r?void 0:r.all.find(e=>"webauthn"===e.factor_type&&e.friendly_name===t&&"unverified"!==e.status)}).then(e=>e?n.client.mfa.unenroll({factorId:null==e?void 0:e.id}):void 0)
case 4:return e.a(2,{data:null,error:u})
case 5:return e.n=6,n._challenge({factorId:c.id,friendlyName:c.friendly_name,webauthn:{rpId:a,rpOrigins:s},signal:i},{create:o})
case 6:if(d=e.v,p=d.data,f=d.error,p){e.n=7
break}return e.a(2,{data:null,error:f})
case 7:return e.a(2,n._verify({factorId:c.id,challengeId:p.challengeId,webauthn:{rpId:a,rpOrigins:s,type:p.webauthn.type,credential_response:p.webauthn.credential_response}}))
case 8:if(e.p=8,!jt(h=e.v)){e.n=9
break}return e.a(2,{data:null,error:h})
case 9:return e.a(2,{data:null,error:new Ni("Unexpected error in register",h)})}},e,null,[[1,8]])})).apply(this,arguments)}}!function(){if("object"!=typeof globalThis)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch(hc){"undefined"!=typeof self&&(self.globalThis=self)}}()
var fo={url:"http://localhost:9999",storageKey:"supabase.auth.token",autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:xi,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1},ho={},mo=class e{get jwks(){var e,t
return null!==(t=null===(e=ho[this.storageKey])||void 0===e?void 0:e.jwks)&&void 0!==t?t:{keys:[]}}set jwks(e){ho[this.storageKey]=Object.assign(Object.assign({},ho[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t
return null!==(t=null===(e=ho[this.storageKey])||void 0===e?void 0:e.cachedAt)&&void 0!==t?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){ho[this.storageKey]=Object.assign(Object.assign({},ho[this.storageKey]),{cachedAt:e})}constructor(t){var n,a,i,o=this
this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log
var l=Object.assign(Object.assign({},fo),t)
if(this.storageKey=l.storageKey,this.instanceID=null!==(n=e.nextInstanceID[this.storageKey])&&void 0!==n?n:0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!l.debug,"function"==typeof l.debug&&(this.logger=l.debug),this.instanceID>0&&$i()&&(this._logPrefix(),this.logDebugMessages),this.persistSession=l.persistSession,this.autoRefreshToken=l.autoRefreshToken,this.admin=new eo({url:l.url,headers:l.headers,fetch:l.fetch}),this.url=l.url,this.headers=l.headers,this.fetch=Wi(l.fetch),this.lock=l.lock||Lr,this.detectSessionInUrl=l.detectSessionInUrl,this.flowType=l.flowType,this.hasCustomAuthorizationHeader=l.hasCustomAuthorizationHeader,this.throwOnError=l.throwOnError,l.lock?this.lock=l.lock:$i()&&(null===(a=null===globalThis||void 0===globalThis?void 0:globalThis.navigator)||void 0===a?void 0:a.locks)?this.lock=hr:this.lock=Lr,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new po(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(l.storage?this.storage=l.storage:Bi()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=fr(this.memoryStorage)),l.userStorage&&(this.userStorage=l.userStorage)):(this.memoryStorage={},this.storage=fr(this.memoryStorage)),$i()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(hc){}null===(i=this.broadcastChannel)||void 0===i||i.addEventListener("message",function(){var e=s(r().m(function e(t){return r().w(function(e){for(;;)switch(e.n){case 0:return o._debug("received broadcast notification from other tab or client",t),e.n=1,o._notifyAllSubscribers(t.data.event,t.data.session,!1)
case 1:return e.a(2)}},e)}))
return function(t){return e.apply(this,arguments)}}())}this.initialize()}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error
return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${vi}) ${(new Date).toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}initialize(){var e=this
return s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:if(!e.initializePromise){t.n=2
break}return t.n=1,e.initializePromise
case 1:case 3:return t.a(2,t.v)
case 2:return e.initializePromise=s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e._acquireLock(-1,s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e._initialize()
case 1:return t.a(2,t.v)}},t)})))
case 1:return t.a(2,t.v)}},t)}))(),t.n=3,e.initializePromise}},t)}))()}_initialize(){var e=this
return s(r().m(function t(){var n,a,i,o,l,c,u,d,p,f
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(t.p=0,a={},i="none",!$i()){t.n=3
break}if(a=zt(window.location.href),!e._isImplicitGrantCallback(a)){t.n=1
break}i="implicit",t.n=3
break
case 1:return t.n=2,e._isPKCECallback(a)
case 2:if(!t.v){t.n=3
break}i="pkce"
case 3:if(!$i()||!e.detectSessionInUrl||"none"===i){t.n=9
break}return t.n=4,e._getSessionFromURL(a,i)
case 4:if(o=t.v,l=o.data,!(c=o.error)){t.n=7
break}if(e._debug("#_initialize()","error detecting session from URL",c),!Nt(c)){t.n=5
break}if("identity_already_exists"!==(u=null===(n=c.details)||void 0===n?void 0:n.code)&&"identity_not_found"!==u&&"single_identity_not_deletable"!==u){t.n=5
break}return t.a(2,{error:c})
case 5:return t.n=6,e._removeSession()
case 6:return t.a(2,{error:c})
case 7:return d=l.session,p=l.redirectType,e._debug("#_initialize()","detected session in URL",d,"redirect type",p),t.n=8,e._saveSession(d)
case 8:return setTimeout(s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:if("recovery"!==p){t.n=2
break}return t.n=1,e._notifyAllSubscribers("PASSWORD_RECOVERY",d)
case 1:t.n=3
break
case 2:return t.n=3,e._notifyAllSubscribers("SIGNED_IN",d)
case 3:return t.a(2)}},t)})),0),t.a(2,{error:null})
case 9:return t.n=10,e._recoverAndRefresh()
case 10:return t.a(2,{error:null})
case 11:if(t.p=11,!jt(f=t.v)){t.n=12
break}return t.a(2,e._returnResult({error:f}))
case 12:return t.a(2,e._returnResult({error:new Ni("Unexpected error during initialization",f)}))
case 13:return t.p=13,t.n=14,e._handleVisibilityChange()
case 14:return e._debug("#_initialize()","end"),t.f(13)
case 15:return t.a(2)}},t,null,[[0,11,13,15]])}))()}signInAnonymously(e){var t=this
return s(r().m(function n(){var a,s,i,o,l,c,u,d,p
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,nr(t.fetch,"POST",`${t.url}/signup`,{headers:t.headers,body:{data:null!==(s=null===(a=null==e?void 0:e.options)||void 0===a?void 0:a.data)&&void 0!==s?s:{},gotrue_meta_security:{captcha_token:null===(i=null==e?void 0:e.options)||void 0===i?void 0:i.captchaToken}},xform:or})
case 1:if(o=r.v,l=o.data,!(c=o.error)&&l){r.n=2
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:c}))
case 2:if(u=l.session,d=l.user,!l.session){r.n=4
break}return r.n=3,t._saveSession(l.session)
case 3:return r.n=4,t._notifyAllSubscribers("SIGNED_IN",u)
case 4:return r.a(2,t._returnResult({data:{user:d,session:u},error:null}))
case 5:if(r.p=5,!jt(p=r.v)){r.n=6
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:p}))
case 6:throw p
case 7:return r.a(2)}},n,null,[[0,5]])}))()}signUp(e){var t=this
return s(r().m(function n(){var a,s,o,l,c,u,d,p,f,h,m,g,b,v,y,x,w,k,j,S
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(r.p=0,!("email"in e)){r.n=4
break}if(c=e.email,u=e.password,d=e.options,p=null,f=null,"pkce"!==t.flowType){r.n=2
break}return r.n=1,Ht(t.storage,t.storageKey)
case 1:h=r.v,m=i(h,2),p=m[0],f=m[1]
case 2:return r.n=3,nr(t.fetch,"POST",`${t.url}/signup`,{headers:t.headers,redirectTo:null==d?void 0:d.emailRedirectTo,body:{email:c,password:u,data:null!==(a=null==d?void 0:d.data)&&void 0!==a?a:{},gotrue_meta_security:{captcha_token:null==d?void 0:d.captchaToken},code_challenge:p,code_challenge_method:f},xform:or})
case 3:l=r.v,r.n=7
break
case 4:if(!("phone"in e)){r.n=6
break}return g=e.phone,b=e.password,v=e.options,r.n=5,nr(t.fetch,"POST",`${t.url}/signup`,{headers:t.headers,body:{phone:g,password:b,data:null!==(s=null==v?void 0:v.data)&&void 0!==s?s:{},channel:null!==(o=null==v?void 0:v.channel)&&void 0!==o?o:"sms",gotrue_meta_security:{captcha_token:null==v?void 0:v.captchaToken}},xform:or})
case 5:l=r.v,r.n=7
break
case 6:throw new Ri("You must provide either an email or phone number and a password")
case 7:if(x=(y=l).data,!(w=y.error)&&x){r.n=9
break}return r.n=8,Hi(t.storage,`${t.storageKey}-code-verifier`)
case 8:return r.a(2,t._returnResult({data:{user:null,session:null},error:w}))
case 9:if(k=x.session,j=x.user,!x.session){r.n=11
break}return r.n=10,t._saveSession(x.session)
case 10:return r.n=11,t._notifyAllSubscribers("SIGNED_IN",k)
case 11:return r.a(2,t._returnResult({data:{user:j,session:k},error:null}))
case 12:return r.p=12,S=r.v,r.n=13,Hi(t.storage,`${t.storageKey}-code-verifier`)
case 13:if(!jt(S)){r.n=14
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:S}))
case 14:throw S
case 15:return r.a(2)}},n,null,[[0,12]])}))()}signInWithPassword(e){var t=this
return s(r().m(function n(){var a,s,i,o,l,c,u,d,p,f,h,m
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(r.p=0,!("email"in e)){r.n=2
break}return s=e.email,i=e.password,o=e.options,r.n=1,nr(t.fetch,"POST",`${t.url}/token?grant_type=password`,{headers:t.headers,body:{email:s,password:i,gotrue_meta_security:{captcha_token:null==o?void 0:o.captchaToken}},xform:lr})
case 1:case 3:a=r.v,r.n=5
break
case 2:if(!("phone"in e)){r.n=4
break}return l=e.phone,c=e.password,u=e.options,r.n=3,nr(t.fetch,"POST",`${t.url}/token?grant_type=password`,{headers:t.headers,body:{phone:l,password:c,gotrue_meta_security:{captcha_token:null==u?void 0:u.captchaToken}},xform:lr})
case 4:throw new Ri("You must provide either an email or phone number and a password")
case 5:if(p=(d=a).data,!(f=d.error)){r.n=6
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:f}))
case 6:if(p&&p.session&&p.user){r.n=7
break}return h=new Ci,r.a(2,t._returnResult({data:{user:null,session:null},error:h}))
case 7:if(!p.session){r.n=9
break}return r.n=8,t._saveSession(p.session)
case 8:return r.n=9,t._notifyAllSubscribers("SIGNED_IN",p.session)
case 9:return r.a(2,t._returnResult({data:Object.assign({user:p.user,session:p.session},p.weak_password?{weakPassword:p.weak_password}:null),error:f}))
case 10:if(r.p=10,!jt(m=r.v)){r.n=11
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:m}))
case 11:throw m
case 12:return r.a(2)}},n,null,[[0,10]])}))()}signInWithOAuth(e){var t=this
return s(r().m(function n(){var a,s,i,o
return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,t._handleProviderSignIn(e.provider,{redirectTo:null===(a=e.options)||void 0===a?void 0:a.redirectTo,scopes:null===(s=e.options)||void 0===s?void 0:s.scopes,queryParams:null===(i=e.options)||void 0===i?void 0:i.queryParams,skipBrowserRedirect:null===(o=e.options)||void 0===o?void 0:o.skipBrowserRedirect})
case 1:return r.a(2,r.v)}},n)}))()}exchangeCodeForSession(e){var t=this
return s(r().m(function n(){return r().w(function(n){for(;;)switch(n.n){case 0:return n.n=1,t.initializePromise
case 1:return n.a(2,t._acquireLock(-1,s(r().m(function n(){return r().w(function(r){for(;;)if(0===r.n)return r.a(2,t._exchangeCodeForSession(e))},n)}))))}},n)}))()}signInWithWeb3(e){var t=this
return s(r().m(function n(){var a,s
return r().w(function(r){for(;;)switch(r.n){case 0:a=e.chain,s=a,r.n="ethereum"===s?1:"solana"===s?3:5
break
case 1:return r.n=2,t.signInWithEthereum(e)
case 2:case 4:return r.a(2,r.v)
case 3:return r.n=4,t.signInWithSolana(e)
case 5:throw new Error(`@supabase/auth-js: Unsupported chain "${a}"`)
case 6:return r.a(2)}},n)}))()}signInWithEthereum(e){var t=this
return s(r().m(function n(){var a,s,i,o,l,c,u,d,p,f,h,m,g,b,v,y,x,w,k,j,S,_,N,E,T,C,R,P,A
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(!("message"in e)){r.n=1
break}m=e.message,g=e.signature,r.n=12
break
case 1:if(e.chain,b=e.wallet,v=e.statement,y=e.options,$i()){r.n=3
break}if("object"==typeof b&&(null==y?void 0:y.url)){r.n=2
break}throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.")
case 2:x=b,r.n=6
break
case 3:if("object"!=typeof b){r.n=4
break}x=b,r.n=6
break
case 4:if(!("ethereum"in(w=window))||"object"!=typeof w.ethereum||!("request"in w.ethereum)||"function"!=typeof w.ethereum.request){r.n=5
break}x=w.ethereum,r.n=6
break
case 5:throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")
case 6:return k=new URL(null!==(a=null==y?void 0:y.url)&&void 0!==a?a:window.location.href),r.n=7,x.request({method:"eth_requestAccounts"}).then(e=>e).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")})
case 7:if((j=r.v)&&0!==j.length){r.n=8
break}throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.")
case 8:if(S=br(j[0]),_=null===(s=null==y?void 0:y.signInWithEthereum)||void 0===s?void 0:s.chainId){r.n=10
break}return r.n=9,x.request({method:"eth_chainId"})
case 9:N=r.v,_=vr(N)
case 10:return E={domain:k.host,address:S,statement:v,uri:k.href,version:"1",chainId:_,nonce:null===(i=null==y?void 0:y.signInWithEthereum)||void 0===i?void 0:i.nonce,issuedAt:null!==(l=null===(o=null==y?void 0:y.signInWithEthereum)||void 0===o?void 0:o.issuedAt)&&void 0!==l?l:new Date,expirationTime:null===(c=null==y?void 0:y.signInWithEthereum)||void 0===c?void 0:c.expirationTime,notBefore:null===(u=null==y?void 0:y.signInWithEthereum)||void 0===u?void 0:u.notBefore,requestId:null===(d=null==y?void 0:y.signInWithEthereum)||void 0===d?void 0:d.requestId,resources:null===(p=null==y?void 0:y.signInWithEthereum)||void 0===p?void 0:p.resources},m=xr(E),r.n=11,x.request({method:"personal_sign",params:[yr(m),S]})
case 11:g=r.v
case 12:return r.p=12,r.n=13,nr(t.fetch,"POST",`${t.url}/token?grant_type=web3`,{headers:t.headers,body:Object.assign({chain:"ethereum",message:m,signature:g},(null===(f=e.options)||void 0===f?void 0:f.captchaToken)?{gotrue_meta_security:{captcha_token:null===(h=e.options)||void 0===h?void 0:h.captchaToken}}:null),xform:or})
case 13:if(T=r.v,C=T.data,!(R=T.error)){r.n=14
break}throw R
case 14:if(C&&C.session&&C.user){r.n=15
break}return P=new Ci,r.a(2,t._returnResult({data:{user:null,session:null},error:P}))
case 15:if(!C.session){r.n=17
break}return r.n=16,t._saveSession(C.session)
case 16:return r.n=17,t._notifyAllSubscribers("SIGNED_IN",C.session)
case 17:return r.a(2,t._returnResult({data:Object.assign({},C),error:R}))
case 18:if(r.p=18,!jt(A=r.v)){r.n=19
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:A}))
case 19:throw A
case 20:return r.a(2)}},n,null,[[12,18]])}))()}signInWithSolana(e){var t=this
return s(r().m(function n(){var a,s,i,o,l,c,u,d,p,f,h,m,g,b,v,y,x,w,k,j,S,_,N,E,T,C,R,P
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(!("message"in e)){r.n=1
break}g=e.message,b=e.signature,r.n=17
break
case 1:if(e.chain,v=e.wallet,y=e.statement,x=e.options,$i()){r.n=3
break}if("object"==typeof v&&(null==x?void 0:x.url)){r.n=2
break}throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.")
case 2:w=v,r.n=6
break
case 3:if("object"!=typeof v){r.n=4
break}w=v,r.n=6
break
case 4:if(!("solana"in(k=window))||"object"!=typeof k.solana||!("signIn"in k.solana&&"function"==typeof k.solana.signIn||"signMessage"in k.solana&&"function"==typeof k.solana.signMessage)){r.n=5
break}w=k.solana,r.n=6
break
case 5:throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
case 6:if(j=new URL(null!==(a=null==x?void 0:x.url)&&void 0!==a?a:window.location.href),!("signIn"in w)||!w.signIn){r.n=13
break}return r.n=7,w.signIn(Object.assign(Object.assign(Object.assign({issuedAt:(new Date).toISOString()},null==x?void 0:x.signInWithSolana),{version:"1",domain:j.host,uri:j.href}),y?{statement:y}:null))
case 7:if(S=r.v,!Array.isArray(S)||!S[0]||"object"!=typeof S[0]){r.n=8
break}_=S[0],r.n=10
break
case 8:if(!(S&&"object"==typeof S&&"signedMessage"in S&&"signature"in S)){r.n=9
break}_=S,r.n=10
break
case 9:throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value")
case 10:if(!("signedMessage"in _&&"signature"in _&&("string"==typeof _.signedMessage||_.signedMessage instanceof Uint8Array)&&_.signature instanceof Uint8Array)){r.n=11
break}g="string"==typeof _.signedMessage?_.signedMessage:(new TextDecoder).decode(_.signedMessage),b=_.signature,r.n=12
break
case 11:throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
case 12:r.n=17
break
case 13:if("signMessage"in w&&"function"==typeof w.signMessage&&"publicKey"in w&&"object"==typeof w&&w.publicKey&&"toBase58"in w.publicKey&&"function"==typeof w.publicKey.toBase58){r.n=14
break}throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API")
case 14:return g=[`${j.host} wants you to sign in with your Solana account:`,w.publicKey.toBase58(),...y?["",y,""]:[""],"Version: 1",`URI: ${j.href}`,`Issued At: ${null!==(i=null===(s=null==x?void 0:x.signInWithSolana)||void 0===s?void 0:s.issuedAt)&&void 0!==i?i:(new Date).toISOString()}`,...(null===(o=null==x?void 0:x.signInWithSolana)||void 0===o?void 0:o.notBefore)?[`Not Before: ${x.signInWithSolana.notBefore}`]:[],...(null===(l=null==x?void 0:x.signInWithSolana)||void 0===l?void 0:l.expirationTime)?[`Expiration Time: ${x.signInWithSolana.expirationTime}`]:[],...(null===(c=null==x?void 0:x.signInWithSolana)||void 0===c?void 0:c.chainId)?[`Chain ID: ${x.signInWithSolana.chainId}`]:[],...(null===(u=null==x?void 0:x.signInWithSolana)||void 0===u?void 0:u.nonce)?[`Nonce: ${x.signInWithSolana.nonce}`]:[],...(null===(d=null==x?void 0:x.signInWithSolana)||void 0===d?void 0:d.requestId)?[`Request ID: ${x.signInWithSolana.requestId}`]:[],...(null===(f=null===(p=null==x?void 0:x.signInWithSolana)||void 0===p?void 0:p.resources)||void 0===f?void 0:f.length)?["Resources",...x.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join("\n"),r.n=15,w.signMessage((new TextEncoder).encode(g),"utf8")
case 15:if((N=r.v)&&N instanceof Uint8Array){r.n=16
break}throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value")
case 16:b=N
case 17:return r.p=17,r.n=18,nr(t.fetch,"POST",`${t.url}/token?grant_type=web3`,{headers:t.headers,body:Object.assign({chain:"solana",message:g,signature:It(b)},(null===(h=e.options)||void 0===h?void 0:h.captchaToken)?{gotrue_meta_security:{captcha_token:null===(m=e.options)||void 0===m?void 0:m.captchaToken}}:null),xform:or})
case 18:if(E=r.v,T=E.data,!(C=E.error)){r.n=19
break}throw C
case 19:if(T&&T.session&&T.user){r.n=20
break}return R=new Ci,r.a(2,t._returnResult({data:{user:null,session:null},error:R}))
case 20:if(!T.session){r.n=22
break}return r.n=21,t._saveSession(T.session)
case 21:return r.n=22,t._notifyAllSubscribers("SIGNED_IN",T.session)
case 22:return r.a(2,t._returnResult({data:Object.assign({},T),error:C}))
case 23:if(r.p=23,!jt(P=r.v)){r.n=24
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:P}))
case 24:throw P
case 25:return r.a(2)}},n,null,[[17,23]])}))()}_exchangeCodeForSession(e){var t=this
return s(r().m(function n(){var a,s,o,l,c,u,d,p,f,h
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.n=1,Mi(t.storage,`${t.storageKey}-code-verifier`)
case 1:return a=r.v,s=(null!=a?a:"").split("/"),o=i(s,2),l=o[0],c=o[1],r.p=2,r.n=3,nr(t.fetch,"POST",`${t.url}/token?grant_type=pkce`,{headers:t.headers,body:{auth_code:e,code_verifier:l},xform:or})
case 3:return u=r.v,d=u.data,p=u.error,r.n=4,Hi(t.storage,`${t.storageKey}-code-verifier`)
case 4:if(!p){r.n=5
break}throw p
case 5:if(d&&d.session&&d.user){r.n=6
break}return f=new Ci,r.a(2,t._returnResult({data:{user:null,session:null,redirectType:null},error:f}))
case 6:if(!d.session){r.n=8
break}return r.n=7,t._saveSession(d.session)
case 7:return r.n=8,t._notifyAllSubscribers("SIGNED_IN",d.session)
case 8:return r.a(2,t._returnResult({data:Object.assign(Object.assign({},d),{redirectType:null!=c?c:null}),error:p}))
case 9:return r.p=9,h=r.v,r.n=10,Hi(t.storage,`${t.storageKey}-code-verifier`)
case 10:if(!jt(h)){r.n=11
break}return r.a(2,t._returnResult({data:{user:null,session:null,redirectType:null},error:h}))
case 11:throw h
case 12:return r.a(2)}},n,null,[[2,9]])}))()}signInWithIdToken(e){var t=this
return s(r().m(function n(){var a,s,i,o,l,c,u,d,p,f
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,a=e.options,s=e.provider,i=e.token,o=e.access_token,l=e.nonce,r.n=1,nr(t.fetch,"POST",`${t.url}/token?grant_type=id_token`,{headers:t.headers,body:{provider:s,id_token:i,access_token:o,nonce:l,gotrue_meta_security:{captcha_token:null==a?void 0:a.captchaToken}},xform:or})
case 1:if(c=r.v,u=c.data,!(d=c.error)){r.n=2
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:d}))
case 2:if(u&&u.session&&u.user){r.n=3
break}return p=new Ci,r.a(2,t._returnResult({data:{user:null,session:null},error:p}))
case 3:if(!u.session){r.n=5
break}return r.n=4,t._saveSession(u.session)
case 4:return r.n=5,t._notifyAllSubscribers("SIGNED_IN",u.session)
case 5:return r.a(2,t._returnResult({data:u,error:d}))
case 6:if(r.p=6,!jt(f=r.v)){r.n=7
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:f}))
case 7:throw f
case 8:return r.a(2)}},n,null,[[0,6]])}))()}signInWithOtp(e){var t=this
return s(r().m(function n(){var a,s,o,l,c,u,d,p,f,h,m,g,b,v,y,x,w,k,j
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(r.p=0,!("email"in e)){r.n=4
break}if(u=e.email,d=e.options,p=null,f=null,"pkce"!==t.flowType){r.n=2
break}return r.n=1,Ht(t.storage,t.storageKey)
case 1:h=r.v,m=i(h,2),p=m[0],f=m[1]
case 2:return r.n=3,nr(t.fetch,"POST",`${t.url}/otp`,{headers:t.headers,body:{email:u,data:null!==(a=null==d?void 0:d.data)&&void 0!==a?a:{},create_user:null===(s=null==d?void 0:d.shouldCreateUser)||void 0===s||s,gotrue_meta_security:{captcha_token:null==d?void 0:d.captchaToken},code_challenge:p,code_challenge_method:f},redirectTo:null==d?void 0:d.emailRedirectTo})
case 3:return g=r.v,b=g.error,r.a(2,t._returnResult({data:{user:null,session:null},error:b}))
case 4:if(!("phone"in e)){r.n=6
break}return v=e.phone,y=e.options,r.n=5,nr(t.fetch,"POST",`${t.url}/otp`,{headers:t.headers,body:{phone:v,data:null!==(o=null==y?void 0:y.data)&&void 0!==o?o:{},create_user:null===(l=null==y?void 0:y.shouldCreateUser)||void 0===l||l,gotrue_meta_security:{captcha_token:null==y?void 0:y.captchaToken},channel:null!==(c=null==y?void 0:y.channel)&&void 0!==c?c:"sms"}})
case 5:return x=r.v,w=x.data,k=x.error,r.a(2,t._returnResult({data:{user:null,session:null,messageId:null==w?void 0:w.message_id},error:k}))
case 6:throw new Ri("You must provide either an email or phone number.")
case 7:return r.p=7,j=r.v,r.n=8,Hi(t.storage,`${t.storageKey}-code-verifier`)
case 8:if(!jt(j)){r.n=9
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:j}))
case 9:throw j
case 10:return r.a(2)}},n,null,[[0,7]])}))()}verifyOtp(e){var t=this
return s(r().m(function n(){var a,s,i,o,l,c,u,d,p,f
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,i=void 0,o=void 0,"options"in e&&(i=null===(a=e.options)||void 0===a?void 0:a.redirectTo,o=null===(s=e.options)||void 0===s?void 0:s.captchaToken),r.n=1,nr(t.fetch,"POST",`${t.url}/verify`,{headers:t.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:o}}),redirectTo:i,xform:or})
case 1:if(l=r.v,c=l.data,!(u=l.error)){r.n=2
break}throw u
case 2:if(c){r.n=3
break}throw new Error("An error occurred on token verification.")
case 3:if(d=c.session,p=c.user,!(null==d?void 0:d.access_token)){r.n=5
break}return r.n=4,t._saveSession(d)
case 4:return r.n=5,t._notifyAllSubscribers("recovery"==e.type?"PASSWORD_RECOVERY":"SIGNED_IN",d)
case 5:return r.a(2,t._returnResult({data:{user:p,session:d},error:null}))
case 6:if(r.p=6,!jt(f=r.v)){r.n=7
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:f}))
case 7:throw f
case 8:return r.a(2)}},n,null,[[0,6]])}))()}signInWithSSO(e){var t=this
return s(r().m(function n(){var a,s,o,l,c,u,d,p,f,h,m
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(r.p=0,u=null,d=null,"pkce"!==t.flowType){r.n=2
break}return r.n=1,Ht(t.storage,t.storageKey)
case 1:p=r.v,f=i(p,2),u=f[0],d=f[1]
case 2:return r.n=3,nr(t.fetch,"POST",`${t.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:null!==(s=null===(a=e.options)||void 0===a?void 0:a.redirectTo)&&void 0!==s?s:void 0}),(null===(o=null==e?void 0:e.options)||void 0===o?void 0:o.captchaToken)?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:u,code_challenge_method:d}),headers:t.headers,xform:ur})
case 3:return h=r.v,(null===(l=h.data)||void 0===l?void 0:l.url)&&$i()&&!(null===(c=e.options)||void 0===c?void 0:c.skipBrowserRedirect)&&window.location.assign(h.data.url),r.a(2,t._returnResult(h))
case 4:return r.p=4,m=r.v,r.n=5,Hi(t.storage,`${t.storageKey}-code-verifier`)
case 5:if(!jt(m)){r.n=6
break}return r.a(2,t._returnResult({data:null,error:m}))
case 6:throw m
case 7:return r.a(2)}},n,null,[[0,4]])}))()}reauthenticate(){var e=this
return s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e.initializePromise
case 1:return t.n=2,e._acquireLock(-1,s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e._reauthenticate()
case 1:return t.a(2,t.v)}},t)})))
case 2:return t.a(2,t.v)}},t)}))()}_reauthenticate(){var e=this
return s(r().m(function t(){var n
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,e._useSession(function(){var t=s(r().m(function t(n){var a,s,i,o
return r().w(function(t){for(;;)switch(t.n){case 0:if(a=n.data.session,!(s=n.error)){t.n=1
break}throw s
case 1:if(a){t.n=2
break}throw new Ti
case 2:return t.n=3,nr(e.fetch,"GET",`${e.url}/reauthenticate`,{headers:e.headers,jwt:a.access_token})
case 3:return i=t.v,o=i.error,t.a(2,e._returnResult({data:{user:null,session:null},error:o}))}},t)}))
return function(e){return t.apply(this,arguments)}}())
case 1:return t.a(2,t.v)
case 2:if(t.p=2,!jt(n=t.v)){t.n=3
break}return t.a(2,e._returnResult({data:{user:null,session:null},error:n}))
case 3:throw n
case 4:return t.a(2)}},t,null,[[0,2]])}))()}resend(e){var t=this
return s(r().m(function n(){var a,s,i,o,l,c,u,d,p,f,h,m,g
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(r.p=0,a=`${t.url}/resend`,!("email"in e)){r.n=2
break}return s=e.email,i=e.type,o=e.options,r.n=1,nr(t.fetch,"POST",a,{headers:t.headers,body:{email:s,type:i,gotrue_meta_security:{captcha_token:null==o?void 0:o.captchaToken}},redirectTo:null==o?void 0:o.emailRedirectTo})
case 1:return l=r.v,c=l.error,r.a(2,t._returnResult({data:{user:null,session:null},error:c}))
case 2:if(!("phone"in e)){r.n=4
break}return u=e.phone,d=e.type,p=e.options,r.n=3,nr(t.fetch,"POST",a,{headers:t.headers,body:{phone:u,type:d,gotrue_meta_security:{captcha_token:null==p?void 0:p.captchaToken}}})
case 3:return f=r.v,h=f.data,m=f.error,r.a(2,t._returnResult({data:{user:null,session:null,messageId:null==h?void 0:h.message_id},error:m}))
case 4:throw new Ri("You must provide either an email or phone number and a type")
case 5:if(r.p=5,!jt(g=r.v)){r.n=6
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:g}))
case 6:throw g
case 7:return r.a(2)}},n,null,[[0,5]])}))()}getSession(){var e=this
return s(r().m(function t(){var n
return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e.initializePromise
case 1:return t.n=2,e._acquireLock(-1,s(r().m(function t(){return r().w(function(t){for(;;)if(0===t.n)return t.a(2,e._useSession(function(){var e=s(r().m(function e(t){return r().w(function(e){for(;;)if(0===e.n)return e.a(2,t)},e)}))
return function(t){return e.apply(this,arguments)}}()))},t)})))
case 2:return n=t.v,t.a(2,n)}},t)}))()}_acquireLock(e,t){var n=this
return s(r().m(function a(){var i,o
return r().w(function(a){for(;;)switch(a.p=a.n){case 0:if(n._debug("#_acquireLock","begin",e),a.p=1,!n.lockAcquired){a.n=2
break}return i=n.pendingInLock.length?n.pendingInLock[n.pendingInLock.length-1]:Promise.resolve(),o=s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,i
case 1:return e.n=2,t()
case 2:return e.a(2,e.v)}},e)}))(),n.pendingInLock.push(s(r().m(function e(){return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,o
case 1:e.n=3
break
case 2:e.p=2,e.v
case 3:return e.a(2)}},e,null,[[0,2]])}))()),a.a(2,o)
case 2:return a.n=3,n.lock(`lock:${n.storageKey}`,e,s(r().m(function e(){var a,i
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return n._debug("#_acquireLock","lock acquired for storage key",n.storageKey),e.p=1,n.lockAcquired=!0,a=t(),n.pendingInLock.push(s(r().m(function e(){return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,a
case 1:e.n=3
break
case 2:e.p=2,e.v
case 3:return e.a(2)}},e,null,[[0,2]])}))()),e.n=2,a
case 2:if(!n.pendingInLock.length){e.n=4
break}return i=[...n.pendingInLock],e.n=3,Promise.all(i)
case 3:n.pendingInLock.splice(0,i.length),e.n=2
break
case 4:return e.n=5,a
case 5:return e.a(2,e.v)
case 6:return e.p=6,n._debug("#_acquireLock","lock released for storage key",n.storageKey),n.lockAcquired=!1,e.f(6)
case 7:return e.a(2)}},e,null,[[1,,6,7]])})))
case 3:return a.a(2,a.v)
case 4:return a.p=4,n._debug("#_acquireLock","end"),a.f(4)
case 5:return a.a(2)}},a,null,[[1,,4,5]])}))()}_useSession(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return t._debug("#_useSession","begin"),r.p=1,r.n=2,t.__loadSession()
case 2:return a=r.v,r.n=3,e(a)
case 3:return r.a(2,r.v)
case 4:return r.p=4,t._debug("#_useSession","end"),r.f(4)
case 5:return r.a(2)}},n,null,[[1,,4,5]])}))()}__loadSession(){var e=this
return s(r().m(function t(){var n,a,s,i,o,l,c,u
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return e._debug("#__loadSession()","begin"),e.lockAcquired||e._debug("#__loadSession()","used outside of an acquired lock!",(new Error).stack),t.p=1,n=null,t.n=2,Mi(e.storage,e.storageKey)
case 2:if(a=t.v,e._debug("#getSession()","session from storage",a),null===a){t.n=4
break}if(!e._isValidSession(a)){t.n=3
break}n=a,t.n=4
break
case 3:return e._debug("#getSession()","session from storage is not valid"),t.n=4,e._removeSession()
case 4:if(n){t.n=5
break}return t.a(2,{data:{session:null},error:null})
case 5:if(s=!!n.expires_at&&1e3*n.expires_at-Date.now()<9e4,e._debug("#__loadSession()",`session has${s?"":" not"} expired`,"expires_at",n.expires_at),s){t.n=8
break}if(!e.userStorage){t.n=7
break}return t.n=6,Mi(e.userStorage,e.storageKey+"-user")
case 6:(null==(i=t.v)?void 0:i.user)?n.user=i.user:n.user=Zt()
case 7:return e.storage.isServer&&n.user&&!n.user.__isUserNotAvailableProxy&&(o={value:e.suppressGetSessionWarning},n.user=Qt(n.user,o),o.value&&(e.suppressGetSessionWarning=!0)),t.a(2,{data:{session:n},error:null})
case 8:return t.n=9,e._callRefreshToken(n.refresh_token)
case 9:if(l=t.v,c=l.data,!(u=l.error)){t.n=10
break}return t.a(2,e._returnResult({data:{session:null},error:u}))
case 10:return t.a(2,e._returnResult({data:{session:c},error:null}))
case 11:return t.p=11,e._debug("#__loadSession()","end"),t.f(11)
case 12:return t.a(2)}},t,null,[[1,,11,12]])}))()}getUser(e){var t=this
return s(r().m(function n(){var a
return r().w(function(n){for(;;)switch(n.n){case 0:if(!e){n.n=2
break}return n.n=1,t._getUser(e)
case 1:return n.a(2,n.v)
case 2:return n.n=3,t.initializePromise
case 3:return n.n=4,t._acquireLock(-1,s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,t._getUser()
case 1:return e.a(2,e.v)}},e)})))
case 4:return(a=n.v).data.user&&(t.suppressGetSessionWarning=!0),n.a(2,a)}},n)}))()}_getUser(e){var t=this
return s(r().m(function n(){var a
return r().w(function(n){for(;;)switch(n.p=n.n){case 0:if(n.p=0,!e){n.n=2
break}return n.n=1,nr(t.fetch,"GET",`${t.url}/user`,{headers:t.headers,jwt:e,xform:cr})
case 1:case 3:return n.a(2,n.v)
case 2:return n.n=3,t._useSession(function(){var e=s(r().m(function e(n){var a,s,i,o,l
return r().w(function(e){for(;;)switch(e.n){case 0:if(o=n.data,!(l=n.error)){e.n=1
break}throw l
case 1:if((null===(a=o.session)||void 0===a?void 0:a.access_token)||t.hasCustomAuthorizationHeader){e.n=2
break}return e.a(2,{data:{user:null},error:new Ti})
case 2:return e.n=3,nr(t.fetch,"GET",`${t.url}/user`,{headers:t.headers,jwt:null!==(i=null===(s=o.session)||void 0===s?void 0:s.access_token)&&void 0!==i?i:void 0,xform:cr})
case 3:return e.a(2,e.v)}},e)}))
return function(t){return e.apply(this,arguments)}}())
case 4:if(n.p=4,!jt(a=n.v)){n.n=7
break}if(!_t(a)){n.n=6
break}return n.n=5,t._removeSession()
case 5:return n.n=6,Hi(t.storage,`${t.storageKey}-code-verifier`)
case 6:return n.a(2,t._returnResult({data:{user:null},error:a}))
case 7:throw a
case 8:return n.a(2)}},n,null,[[0,4]])}))()}updateUser(e){var t=this
return s(r().m(function e(n,a={}){return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,t.initializePromise
case 1:return e.n=2,t._acquireLock(-1,s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,t._updateUser(n,a)
case 1:return e.a(2,e.v)}},e)})))
case 2:return e.a(2,e.v)}},e)})).apply(this,arguments)}_updateUser(e){var t=this
return s(r().m(function e(n,a={}){var o
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,t._useSession(function(){var e=s(r().m(function e(s){var o,l,c,u,d,p,f,h,m,g
return r().w(function(e){for(;;)switch(e.n){case 0:if(o=s.data,!(l=s.error)){e.n=1
break}throw l
case 1:if(o.session){e.n=2
break}throw new Ti
case 2:if(c=o.session,u=null,d=null,"pkce"!==t.flowType||null==n.email){e.n=4
break}return e.n=3,Ht(t.storage,t.storageKey)
case 3:p=e.v,f=i(p,2),u=f[0],d=f[1]
case 4:return e.n=5,nr(t.fetch,"PUT",`${t.url}/user`,{headers:t.headers,redirectTo:null==a?void 0:a.emailRedirectTo,body:Object.assign(Object.assign({},n),{code_challenge:u,code_challenge_method:d}),jwt:c.access_token,xform:cr})
case 5:if(h=e.v,m=h.data,!(g=h.error)){e.n=6
break}throw g
case 6:return c.user=m.user,e.n=7,t._saveSession(c)
case 7:return e.n=8,t._notifyAllSubscribers("USER_UPDATED",c)
case 8:return e.a(2,t._returnResult({data:{user:c.user},error:null}))}},e)}))
return function(t){return e.apply(this,arguments)}}())
case 1:return e.a(2,e.v)
case 2:return e.p=2,o=e.v,e.n=3,Hi(t.storage,`${t.storageKey}-code-verifier`)
case 3:if(!jt(o)){e.n=4
break}return e.a(2,t._returnResult({data:{user:null},error:o}))
case 4:throw o
case 5:return e.a(2)}},e,null,[[0,2]])})).apply(this,arguments)}setSession(e){var t=this
return s(r().m(function n(){return r().w(function(n){for(;;)switch(n.n){case 0:return n.n=1,t.initializePromise
case 1:return n.n=2,t._acquireLock(-1,s(r().m(function n(){return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,t._setSession(e)
case 1:return r.a(2,r.v)}},n)})))
case 2:return n.a(2,n.v)}},n)}))()}_setSession(e){var t=this
return s(r().m(function n(){var a,s,i,o,l,c,u,d,p,f,h,m,g
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(r.p=0,e.access_token&&e.refresh_token){r.n=1
break}throw new Ti
case 1:if(a=Date.now()/1e3,s=a,i=!0,o=null,l=Lt(e.access_token),(c=l.payload).exp&&(s=c.exp,i=s<=a),!i){r.n=5
break}return r.n=2,t._callRefreshToken(e.refresh_token)
case 2:if(u=r.v,d=u.data,!(p=u.error)){r.n=3
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:p}))
case 3:if(d){r.n=4
break}return r.a(2,{data:{user:null,session:null},error:null})
case 4:o=d,r.n=9
break
case 5:return r.n=6,t._getUser(e.access_token)
case 6:if(f=r.v,h=f.data,!(m=f.error)){r.n=7
break}throw m
case 7:return o={access_token:e.access_token,refresh_token:e.refresh_token,user:h.user,token_type:"bearer",expires_in:s-a,expires_at:s},r.n=8,t._saveSession(o)
case 8:return r.n=9,t._notifyAllSubscribers("SIGNED_IN",o)
case 9:return r.a(2,t._returnResult({data:{user:o.user,session:o},error:null}))
case 10:if(r.p=10,!jt(g=r.v)){r.n=11
break}return r.a(2,t._returnResult({data:{session:null,user:null},error:g}))
case 11:throw g
case 12:return r.a(2)}},n,null,[[0,10]])}))()}refreshSession(e){var t=this
return s(r().m(function n(){return r().w(function(n){for(;;)switch(n.n){case 0:return n.n=1,t.initializePromise
case 1:return n.n=2,t._acquireLock(-1,s(r().m(function n(){return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,t._refreshSession(e)
case 1:return r.a(2,r.v)}},n)})))
case 2:return n.a(2,n.v)}},n)}))()}_refreshSession(e){var t=this
return s(r().m(function n(){var a
return r().w(function(n){for(;;)switch(n.p=n.n){case 0:return n.p=0,n.n=1,t._useSession(function(){var n=s(r().m(function n(a){var s,i,o,l,c,u
return r().w(function(r){for(;;)switch(r.n){case 0:if(e){r.n=2
break}if(i=a.data,!(o=a.error)){r.n=1
break}throw o
case 1:e=null!==(s=i.session)&&void 0!==s?s:void 0
case 2:if(null==e?void 0:e.refresh_token){r.n=3
break}throw new Ti
case 3:return r.n=4,t._callRefreshToken(e.refresh_token)
case 4:if(l=r.v,c=l.data,!(u=l.error)){r.n=5
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:u}))
case 5:if(c){r.n=6
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:null}))
case 6:return r.a(2,t._returnResult({data:{user:c.user,session:c},error:null}))}},n)}))
return function(e){return n.apply(this,arguments)}}())
case 1:return n.a(2,n.v)
case 2:if(n.p=2,!jt(a=n.v)){n.n=3
break}return n.a(2,t._returnResult({data:{user:null,session:null},error:a}))
case 3:throw a
case 4:return n.a(2)}},n,null,[[0,2]])}))()}_getSessionFromURL(e,t){var n=this
return s(r().m(function a(){var s,i,o,l,c,u,d,p,f,h,m,g,b,v,y,x,w,k,j,S
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(r.p=0,$i()){r.n=1
break}throw new Pi("No browser detected.")
case 1:if(!(e.error||e.error_description||e.error_code)){r.n=2
break}throw new Pi(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"})
case 2:j=t,r.n="implicit"===j?3:"pkce"===j?5:7
break
case 3:if("pkce"!==n.flowType){r.n=4
break}throw new Ai("Not a valid PKCE flow url.")
case 4:case 6:return r.a(3,7)
case 5:if("implicit"!==n.flowType){r.n=6
break}throw new Pi("Not a valid implicit grant flow url.")
case 7:if("pkce"!==t){r.n=11
break}if(n._debug("#_initialize()","begin","is PKCE flow",!0),e.code){r.n=8
break}throw new Ai("No code detected.")
case 8:return r.n=9,n._exchangeCodeForSession(e.code)
case 9:if(s=r.v,i=s.data,!(o=s.error)){r.n=10
break}throw o
case 10:return(l=new URL(window.location.href)).searchParams.delete("code"),window.history.replaceState(window.history.state,"",l.toString()),r.a(2,{data:{session:i.session,redirectType:null},error:null})
case 11:if(c=e.provider_token,u=e.provider_refresh_token,d=e.access_token,p=e.refresh_token,f=e.expires_in,h=e.expires_at,m=e.token_type,d&&f&&p&&m){r.n=12
break}throw new Pi("No session defined in URL")
case 12:return g=Math.round(Date.now()/1e3),b=parseInt(f),v=g+b,h&&(v=parseInt(h)),r.n=13,n._getUser(d)
case 13:if(y=r.v,x=y.data,!(w=y.error)){r.n=14
break}throw w
case 14:return k={provider_token:c,provider_refresh_token:u,access_token:d,expires_in:b,expires_at:v,refresh_token:p,token_type:m,user:x.user},window.location.hash="",n._debug("#_getSessionFromURL()","clearing window.location.hash"),r.a(2,n._returnResult({data:{session:k,redirectType:e.type},error:null}))
case 15:if(r.p=15,!jt(S=r.v)){r.n=16
break}return r.a(2,n._returnResult({data:{session:null,redirectType:null},error:S}))
case 16:throw S
case 17:return r.a(2)}},a,null,[[0,15]])}))()}_isImplicitGrantCallback(e){return Boolean(e.access_token||e.error_description)}_isPKCECallback(e){var t=this
return s(r().m(function n(){var a
return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,Mi(t.storage,`${t.storageKey}-code-verifier`)
case 1:return a=r.v,r.a(2,!(!e.code||!a))}},n)}))()}signOut(){var e=this
return s(r().m(function t(n={scope:"global"}){return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e.initializePromise
case 1:return t.n=2,e._acquireLock(-1,s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e._signOut(n)
case 1:return t.a(2,t.v)}},t)})))
case 2:return t.a(2,t.v)}},t)})).apply(this,arguments)}_signOut(){var e=this
return s(r().m(function t({scope:n}={scope:"global"}){return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e._useSession(function(){var t=s(r().m(function t(a){var s,i,o,l,c,u
return r().w(function(t){for(;;)switch(t.n){case 0:if(i=a.data,!(o=a.error)){t.n=1
break}return t.a(2,e._returnResult({error:o}))
case 1:if(!(l=null===(s=i.session)||void 0===s?void 0:s.access_token)){t.n=3
break}return t.n=2,e.admin.signOut(l,n)
case 2:if(c=t.v,!(u=c.error)){t.n=3
break}if(St(u)&&(404===u.status||401===u.status||403===u.status)){t.n=3
break}return t.a(2,e._returnResult({error:u}))
case 3:if("others"===n){t.n=5
break}return t.n=4,e._removeSession()
case 4:return t.n=5,Hi(e.storage,`${e.storageKey}-code-verifier`)
case 5:return t.a(2,e._returnResult({error:null}))}},t)}))
return function(e){return t.apply(this,arguments)}}())
case 1:return t.a(2,t.v)}},t)})).apply(this,arguments)}onAuthStateChange(e){var t=this,n=Symbol("auth-callback"),a={id:n,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",n),this.stateChangeEmitters.delete(n)}}
return this._debug("#onAuthStateChange()","registered callback with id",n),this.stateChangeEmitters.set(n,a),s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,t.initializePromise
case 1:return e.n=2,t._acquireLock(-1,s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:t._emitInitialSession(n)
case 1:return e.a(2)}},e)})))
case 2:return e.a(2)}},e)}))(),{data:{subscription:a}}}_emitInitialSession(e){var t=this
return s(r().m(function n(){return r().w(function(n){for(;;)switch(n.n){case 0:return n.n=1,t._useSession(function(){var n=s(r().m(function n(a){var s,i,o,l,c
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(r.p=0,o=a.data.session,!(l=a.error)){r.n=1
break}throw l
case 1:return r.n=2,null===(s=t.stateChangeEmitters.get(e))||void 0===s?void 0:s.callback("INITIAL_SESSION",o)
case 2:t._debug("INITIAL_SESSION","callback id",e,"session",o),r.n=5
break
case 3:return r.p=3,c=r.v,r.n=4,null===(i=t.stateChangeEmitters.get(e))||void 0===i?void 0:i.callback("INITIAL_SESSION",null)
case 4:t._debug("INITIAL_SESSION","callback id",e,"error",c)
case 5:return r.a(2)}},n,null,[[0,3]])}))
return function(e){return n.apply(this,arguments)}}())
case 1:return n.a(2,n.v)}},n)}))()}resetPasswordForEmail(e){var t=this
return s(r().m(function e(n,a={}){var s,o,l,c,u
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(s=null,o=null,"pkce"!==t.flowType){e.n=2
break}return e.n=1,Ht(t.storage,t.storageKey,!0)
case 1:l=e.v,c=i(l,2),s=c[0],o=c[1]
case 2:return e.p=2,e.n=3,nr(t.fetch,"POST",`${t.url}/recover`,{body:{email:n,code_challenge:s,code_challenge_method:o,gotrue_meta_security:{captcha_token:a.captchaToken}},headers:t.headers,redirectTo:a.redirectTo})
case 3:return e.a(2,e.v)
case 4:return e.p=4,u=e.v,e.n=5,Hi(t.storage,`${t.storageKey}-code-verifier`)
case 5:if(!jt(u)){e.n=6
break}return e.a(2,t._returnResult({data:null,error:u}))
case 6:throw u
case 7:return e.a(2)}},e,null,[[2,4]])})).apply(this,arguments)}getUserIdentities(){var e=this
return s(r().m(function t(){var n,a,s,i,o
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,e.getUser()
case 1:if(a=t.v,s=a.data,!(i=a.error)){t.n=2
break}throw i
case 2:return t.a(2,e._returnResult({data:{identities:null!==(n=s.user.identities)&&void 0!==n?n:[]},error:null}))
case 3:if(t.p=3,!jt(o=t.v)){t.n=4
break}return t.a(2,e._returnResult({data:null,error:o}))
case 4:throw o
case 5:return t.a(2)}},t,null,[[0,3]])}))()}linkIdentity(e){var t=this
return s(r().m(function n(){return r().w(function(r){for(;;)switch(r.n){case 0:if(!("token"in e)){r.n=1
break}return r.a(2,t.linkIdentityIdToken(e))
case 1:return r.a(2,t.linkIdentityOAuth(e))}},n)}))()}linkIdentityOAuth(e){var t=this
return s(r().m(function n(){var a,i,o,l,c
return r().w(function(n){for(;;)switch(n.p=n.n){case 0:return n.p=0,n.n=1,t._useSession(function(){var n=s(r().m(function n(a){var s,i,o,l,c,u,d,p
return r().w(function(r){for(;;)switch(r.n){case 0:if(u=a.data,!(d=a.error)){r.n=1
break}throw d
case 1:return r.n=2,t._getUrlForProvider(`${t.url}/user/identities/authorize`,e.provider,{redirectTo:null===(s=e.options)||void 0===s?void 0:s.redirectTo,scopes:null===(i=e.options)||void 0===i?void 0:i.scopes,queryParams:null===(o=e.options)||void 0===o?void 0:o.queryParams,skipBrowserRedirect:!0})
case 2:return p=r.v,r.n=3,nr(t.fetch,"GET",p,{headers:t.headers,jwt:null!==(c=null===(l=u.session)||void 0===l?void 0:l.access_token)&&void 0!==c?c:void 0})
case 3:return r.a(2,r.v)}},n)}))
return function(e){return n.apply(this,arguments)}}())
case 1:if(i=n.v,o=i.data,!(l=i.error)){n.n=2
break}throw l
case 2:return $i()&&!(null===(a=e.options)||void 0===a?void 0:a.skipBrowserRedirect)&&window.location.assign(null==o?void 0:o.url),n.a(2,t._returnResult({data:{provider:e.provider,url:null==o?void 0:o.url},error:null}))
case 3:if(n.p=3,!jt(c=n.v)){n.n=4
break}return n.a(2,t._returnResult({data:{provider:e.provider,url:null},error:c}))
case 4:throw c
case 5:return n.a(2)}},n,null,[[0,3]])}))()}linkIdentityIdToken(e){var t=this
return s(r().m(function n(){return r().w(function(n){for(;;)switch(n.n){case 0:return n.n=1,t._useSession(function(){var n=s(r().m(function n(a){var s,i,o,l,c,u,d,p,f,h,m,g
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(r.p=0,i=a.error,o=a.data.session,!i){r.n=1
break}throw i
case 1:return l=e.options,c=e.provider,u=e.token,d=e.access_token,p=e.nonce,r.n=2,nr(t.fetch,"POST",`${t.url}/token?grant_type=id_token`,{headers:t.headers,jwt:null!==(s=null==o?void 0:o.access_token)&&void 0!==s?s:void 0,body:{provider:c,id_token:u,access_token:d,nonce:p,link_identity:!0,gotrue_meta_security:{captcha_token:null==l?void 0:l.captchaToken}},xform:or})
case 2:if(f=r.v,h=f.data,!(m=f.error)){r.n=3
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:m}))
case 3:if(h&&h.session&&h.user){r.n=4
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:new Ci}))
case 4:if(!h.session){r.n=6
break}return r.n=5,t._saveSession(h.session)
case 5:return r.n=6,t._notifyAllSubscribers("USER_UPDATED",h.session)
case 6:return r.a(2,t._returnResult({data:h,error:m}))
case 7:return r.p=7,g=r.v,r.n=8,Hi(t.storage,`${t.storageKey}-code-verifier`)
case 8:if(!jt(g)){r.n=9
break}return r.a(2,t._returnResult({data:{user:null,session:null},error:g}))
case 9:throw g
case 10:return r.a(2)}},n,null,[[0,7]])}))
return function(e){return n.apply(this,arguments)}}())
case 1:return n.a(2,n.v)}},n)}))()}unlinkIdentity(e){var t=this
return s(r().m(function n(){var a
return r().w(function(n){for(;;)switch(n.p=n.n){case 0:return n.p=0,n.n=1,t._useSession(function(){var n=s(r().m(function n(a){var s,i,o,l
return r().w(function(r){for(;;)switch(r.n){case 0:if(o=a.data,!(l=a.error)){r.n=1
break}throw l
case 1:return r.n=2,nr(t.fetch,"DELETE",`${t.url}/user/identities/${e.identity_id}`,{headers:t.headers,jwt:null!==(i=null===(s=o.session)||void 0===s?void 0:s.access_token)&&void 0!==i?i:void 0})
case 2:return r.a(2,r.v)}},n)}))
return function(e){return n.apply(this,arguments)}}())
case 1:return n.a(2,n.v)
case 2:if(n.p=2,!jt(a=n.v)){n.n=3
break}return n.a(2,t._returnResult({data:null,error:a}))
case 3:throw a
case 4:return n.a(2)}},n,null,[[0,2]])}))()}_refreshAccessToken(e){var t=this
return s(r().m(function n(){var a,i,o
return r().w(function(n){for(;;)switch(n.p=n.n){case 0:return a=`#_refreshAccessToken(${e.substring(0,5)}...)`,t._debug(a,"begin"),n.p=1,i=Date.now(),n.n=2,$t(function(){var n=s(r().m(function n(s){return r().w(function(r){for(;;)switch(r.n){case 0:if(!(s>0)){r.n=1
break}return r.n=1,Dt(200*Math.pow(2,s-1))
case 1:return t._debug(a,"refreshing attempt",s),r.n=2,nr(t.fetch,"POST",`${t.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:t.headers,xform:or})
case 2:return r.a(2,r.v)}},n)}))
return function(e){return n.apply(this,arguments)}}(),(e,t)=>{var r=200*Math.pow(2,e)
return t&&Et(t)&&Date.now()+r-i<yi})
case 2:return n.a(2,n.v)
case 3:if(n.p=3,o=n.v,t._debug(a,"error",o),!jt(o)){n.n=4
break}return n.a(2,t._returnResult({data:{session:null,user:null},error:o}))
case 4:throw o
case 5:return n.p=5,t._debug(a,"end"),n.f(5)
case 6:return n.a(2)}},n,null,[[1,3,5,6]])}))()}_isValidSession(e){return"object"==typeof e&&null!==e&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}_handleProviderSignIn(e,t){var n=this
return s(r().m(function a(){var s
return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,n._getUrlForProvider(`${n.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams})
case 1:return s=r.v,n._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",s),$i()&&!t.skipBrowserRedirect&&window.location.assign(s),r.a(2,{data:{provider:e,url:s},error:null})}},a)}))()}_recoverAndRefresh(){var e=this
return s(r().m(function t(){var n,a,s,i,o,l,c,u,d,p,f,h,m
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return s="#_recoverAndRefresh()",e._debug(s,"begin"),t.p=1,t.n=2,Mi(e.storage,e.storageKey)
case 2:if(!(i=t.v)||!e.userStorage){t.n=5
break}return t.n=3,Mi(e.userStorage,e.storageKey+"-user")
case 3:if(o=t.v,e.storage.isServer||!Object.is(e.storage,e.userStorage)||o){t.n=4
break}return o={user:i.user},t.n=4,qi(e.userStorage,e.storageKey+"-user",o)
case 4:i.user=null!==(n=null==o?void 0:o.user)&&void 0!==n?n:Zt(),t.n=10
break
case 5:if(!i||i.user){t.n=10
break}if(i.user){t.n=10
break}return t.n=6,Mi(e.storage,e.storageKey+"-user")
case 6:if(!(l=t.v)||!(null==l?void 0:l.user)){t.n=9
break}return i.user=l.user,t.n=7,Hi(e.storage,e.storageKey+"-user")
case 7:return t.n=8,qi(e.storage,e.storageKey,i)
case 8:t.n=10
break
case 9:i.user=Zt()
case 10:if(e._debug(s,"session from storage",i),e._isValidSession(i)){t.n=12
break}if(e._debug(s,"session is not valid"),null===i){t.n=11
break}return t.n=11,e._removeSession()
case 11:return t.a(2)
case 12:if(c=1e3*(null!==(a=i.expires_at)&&void 0!==a?a:1/0)-Date.now()<9e4,e._debug(s,`session has${c?"":" not"} expired with margin of 90000s`),!c){t.n=15
break}if(!e.autoRefreshToken||!i.refresh_token){t.n=14
break}return t.n=13,e._callRefreshToken(i.refresh_token)
case 13:if(u=t.v,!(d=u.error)){t.n=14
break}if(Et(d)){t.n=14
break}return e._debug(s,"refresh failed with a non-retryable error, removing the session",d),t.n=14,e._removeSession()
case 14:t.n=25
break
case 15:if(!i.user||!0!==i.user.__isUserNotAvailableProxy){t.n=24
break}return t.p=16,t.n=17,e._getUser(i.access_token)
case 17:if(p=t.v,f=p.data,p.error||!(null==f?void 0:f.user)){t.n=20
break}return i.user=f.user,t.n=18,e._saveSession(i)
case 18:return t.n=19,e._notifyAllSubscribers("SIGNED_IN",i)
case 19:t.n=21
break
case 20:e._debug(s,"could not get user data, skipping SIGNED_IN notification")
case 21:t.n=23
break
case 22:t.p=22,h=t.v,e._debug(s,"error getting user data, skipping SIGNED_IN notification",h)
case 23:t.n=25
break
case 24:return t.n=25,e._notifyAllSubscribers("SIGNED_IN",i)
case 25:t.n=27
break
case 26:return t.p=26,m=t.v,e._debug(s,"error",m),t.a(2)
case 27:return t.p=27,e._debug(s,"end"),t.f(27)
case 28:return t.a(2)}},t,null,[[16,22],[1,26,27,28]])}))()}_callRefreshToken(e){var t=this
return s(r().m(function n(){var a,s,i,o,l,c,u,d,p
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(e){r.n=1
break}throw new Ti
case 1:if(!t.refreshingDeferred){r.n=2
break}return r.a(2,t.refreshingDeferred.promise)
case 2:return i=`#_callRefreshToken(${e.substring(0,5)}...)`,t._debug(i,"begin"),r.p=3,t.refreshingDeferred=new Ki,r.n=4,t._refreshAccessToken(e)
case 4:if(o=r.v,l=o.data,!(c=o.error)){r.n=5
break}throw c
case 5:if(l.session){r.n=6
break}throw new Ti
case 6:return r.n=7,t._saveSession(l.session)
case 7:return r.n=8,t._notifyAllSubscribers("TOKEN_REFRESHED",l.session)
case 8:return u={data:l.session,error:null},t.refreshingDeferred.resolve(u),r.a(2,u)
case 9:if(r.p=9,p=r.v,t._debug(i,"error",p),!jt(p)){r.n=11
break}if(d={data:null,error:p},Et(p)){r.n=10
break}return r.n=10,t._removeSession()
case 10:return null===(a=t.refreshingDeferred)||void 0===a||a.resolve(d),r.a(2,d)
case 11:throw null===(s=t.refreshingDeferred)||void 0===s||s.reject(p),p
case 12:return r.p=12,t.refreshingDeferred=null,t._debug(i,"end"),r.f(12)
case 13:return r.a(2)}},n,null,[[3,9,12,13]])}))()}_notifyAllSubscribers(e,t){var n=this
return s(r().m(function e(t,a,i=!0){var o,l,c,u
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return o=`#_notifyAllSubscribers(${t})`,n._debug(o,"begin",a,`broadcast = ${i}`),e.p=1,n.broadcastChannel&&i&&n.broadcastChannel.postMessage({event:t,session:a}),l=[],c=Array.from(n.stateChangeEmitters.values()).map(function(){var e=s(r().m(function e(n){var s
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,n.callback(t,a)
case 1:e.n=3
break
case 2:e.p=2,s=e.v,l.push(s)
case 3:return e.a(2)}},e,null,[[0,2]])}))
return function(t){return e.apply(this,arguments)}}()),e.n=2,Promise.all(c)
case 2:if(!(l.length>0)){e.n=3
break}for(u=0;u<l.length;u+=1);throw l[0]
case 3:return e.p=3,n._debug(o,"end"),e.f(3)
case 4:return e.a(2)}},e,null,[[1,,3,4]])})).apply(this,arguments)}_saveSession(e){var t=this
return s(r().m(function n(){var a,s,i,o,l
return r().w(function(r){for(;;)switch(r.n){case 0:return t._debug("#_saveSession()",e),t.suppressGetSessionWarning=!0,r.n=1,Hi(t.storage,`${t.storageKey}-code-verifier`)
case 1:if(a=Object.assign({},e),s=a.user&&!0===a.user.__isUserNotAvailableProxy,!t.userStorage){r.n=4
break}if(s||!a.user){r.n=2
break}return r.n=2,qi(t.userStorage,t.storageKey+"-user",{user:a.user})
case 2:return delete(i=Object.assign({},a)).user,o=er(i),r.n=3,qi(t.storage,t.storageKey,o)
case 3:r.n=5
break
case 4:return l=er(a),r.n=5,qi(t.storage,t.storageKey,l)
case 5:return r.a(2)}},n)}))()}_removeSession(){var e=this
return s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:return e._debug("#_removeSession()"),e.suppressGetSessionWarning=!1,t.n=1,Hi(e.storage,e.storageKey)
case 1:return t.n=2,Hi(e.storage,e.storageKey+"-code-verifier")
case 2:return t.n=3,Hi(e.storage,e.storageKey+"-user")
case 3:if(!e.userStorage){t.n=4
break}return t.n=4,Hi(e.userStorage,e.storageKey+"-user")
case 4:return t.n=5,e._notifyAllSubscribers("SIGNED_OUT",null)
case 5:return t.a(2)}},t)}))()}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()")
var e=this.visibilityChangedCallback
this.visibilityChangedCallback=null
try{e&&$i()&&(null===window||void 0===window?void 0:window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(hc){}}_startAutoRefresh(){var e=this
return s(r().m(function t(){var n
return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e._stopAutoRefresh()
case 1:e._debug("#_startAutoRefresh()"),n=setInterval(()=>e._autoRefreshTokenTick(),yi),e.autoRefreshTicker=n,n&&"object"==typeof n&&"function"==typeof n.unref?n.unref():"undefined"!=typeof Deno&&"function"==typeof Deno.unrefTimer&&Deno.unrefTimer(n),setTimeout(s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e.initializePromise
case 1:return t.n=2,e._autoRefreshTokenTick()
case 2:return t.a(2)}},t)})),0)
case 2:return t.a(2)}},t)}))()}_stopAutoRefresh(){var e=this
return s(r().m(function t(){var n
return r().w(function(t){for(;;)switch(t.n){case 0:e._debug("#_stopAutoRefresh()"),n=e.autoRefreshTicker,e.autoRefreshTicker=null,n&&clearInterval(n)
case 1:return t.a(2)}},t)}))()}startAutoRefresh(){var e=this
return s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:return e._removeVisibilityChangedCallback(),t.n=1,e._startAutoRefresh()
case 1:return t.a(2)}},t)}))()}stopAutoRefresh(){var e=this
return s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:return e._removeVisibilityChangedCallback(),t.n=1,e._stopAutoRefresh()
case 1:return t.a(2)}},t)}))()}_autoRefreshTokenTick(){var e=this
return s(r().m(function t(){var n
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return e._debug("#_autoRefreshTokenTick()","begin"),t.p=1,t.n=2,e._acquireLock(0,s(r().m(function t(){var n
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,n=Date.now(),t.p=1,t.n=2,e._useSession(function(){var t=s(r().m(function t(a){var s,i
return r().w(function(t){for(;;)switch(t.n){case 0:if((s=a.data.session)&&s.refresh_token&&s.expires_at){t.n=1
break}return e._debug("#_autoRefreshTokenTick()","no session"),t.a(2)
case 1:if(i=Math.floor((1e3*s.expires_at-n)/yi),e._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`),!(i<=3)){t.n=2
break}return t.n=2,e._callRefreshToken(s.refresh_token)
case 2:return t.a(2)}},t)}))
return function(e){return t.apply(this,arguments)}}())
case 2:return t.a(2,t.v)
case 3:t.p=3,t.v
case 4:return t.p=4,e._debug("#_autoRefreshTokenTick()","end"),t.f(4)
case 5:return t.a(2)}},t,null,[[1,3],[0,,4,5]])})))
case 2:t.n=5
break
case 3:if(t.p=3,!((n=t.v).isAcquireTimeout||n instanceof ro)){t.n=4
break}e._debug("auto refresh token tick lock not available"),t.n=5
break
case 4:throw n
case 5:return t.a(2)}},t,null,[[1,3]])}))()}_handleVisibilityChange(){var e=this
return s(r().m(function t(){return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(e._debug("#_handleVisibilityChange()"),$i()&&(null===window||void 0===window?void 0:window.addEventListener)){t.n=1
break}return e.autoRefreshToken&&e.startAutoRefresh(),t.a(2,!1)
case 1:return t.p=1,e.visibilityChangedCallback=s(r().m(function t(){return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e._onVisibilityChanged(!1)
case 1:return t.a(2,t.v)}},t)})),null===window||void 0===window||window.addEventListener("visibilitychange",e.visibilityChangedCallback),t.n=2,e._onVisibilityChanged(!0)
case 2:t.n=4
break
case 3:t.p=3,t.v
case 4:return t.a(2)}},t,null,[[1,3]])}))()}_onVisibilityChanged(e){var t=this
return s(r().m(function n(){var a
return r().w(function(n){for(;;)switch(n.n){case 0:if(a=`#_onVisibilityChanged(${e})`,t._debug(a,"visibilityState",document.visibilityState),"visible"!==document.visibilityState){n.n=3
break}if(t.autoRefreshToken&&t._startAutoRefresh(),e){n.n=2
break}return n.n=1,t.initializePromise
case 1:return n.n=2,t._acquireLock(-1,s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:if("visible"===document.visibilityState){e.n=1
break}return t._debug(a,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"),e.a(2)
case 1:return e.n=2,t._recoverAndRefresh()
case 2:return e.a(2)}},e)})))
case 2:n.n=4
break
case 3:"hidden"===document.visibilityState&&t.autoRefreshToken&&t._stopAutoRefresh()
case 4:return n.a(2)}},n)}))()}_getUrlForProvider(e,t,n){var a=this
return s(r().m(function s(){var o,l,c,u,d,p,f
return r().w(function(r){for(;;)switch(r.n){case 0:if(o=[`provider=${encodeURIComponent(t)}`],(null==n?void 0:n.redirectTo)&&o.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),(null==n?void 0:n.scopes)&&o.push(`scopes=${encodeURIComponent(n.scopes)}`),"pkce"!==a.flowType){r.n=2
break}return r.n=1,Ht(a.storage,a.storageKey)
case 1:l=r.v,c=i(l,2),u=c[0],d=c[1],p=new URLSearchParams({code_challenge:`${encodeURIComponent(u)}`,code_challenge_method:`${encodeURIComponent(d)}`}),o.push(p.toString())
case 2:return(null==n?void 0:n.queryParams)&&(f=new URLSearchParams(n.queryParams),o.push(f.toString())),(null==n?void 0:n.skipBrowserRedirect)&&o.push(`skip_http_redirect=${n.skipBrowserRedirect}`),r.a(2,`${e}?${o.join("&")}`)}},s)}))()}_unenroll(e){var t=this
return s(r().m(function n(){var a
return r().w(function(n){for(;;)switch(n.p=n.n){case 0:return n.p=0,n.n=1,t._useSession(function(){var n=s(r().m(function n(a){var s,i,o
return r().w(function(r){for(;;)switch(r.n){case 0:if(i=a.data,!(o=a.error)){r.n=1
break}return r.a(2,t._returnResult({data:null,error:o}))
case 1:return r.n=2,nr(t.fetch,"DELETE",`${t.url}/factors/${e.factorId}`,{headers:t.headers,jwt:null===(s=null==i?void 0:i.session)||void 0===s?void 0:s.access_token})
case 2:return r.a(2,r.v)}},n)}))
return function(e){return n.apply(this,arguments)}}())
case 1:return n.a(2,n.v)
case 2:if(n.p=2,!jt(a=n.v)){n.n=3
break}return n.a(2,t._returnResult({data:null,error:a}))
case 3:throw a
case 4:return n.a(2)}},n,null,[[0,2]])}))()}_enroll(e){var t=this
return s(r().m(function n(){var a
return r().w(function(n){for(;;)switch(n.p=n.n){case 0:return n.p=0,n.n=1,t._useSession(function(){var n=s(r().m(function n(a){var s,i,o,l,c,u,d,p
return r().w(function(r){for(;;)switch(r.n){case 0:if(o=a.data,!(l=a.error)){r.n=1
break}return r.a(2,t._returnResult({data:null,error:l}))
case 1:return c=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},"phone"===e.factorType?{phone:e.phone}:"totp"===e.factorType?{issuer:e.issuer}:{}),r.n=2,nr(t.fetch,"POST",`${t.url}/factors`,{body:c,headers:t.headers,jwt:null===(s=null==o?void 0:o.session)||void 0===s?void 0:s.access_token})
case 2:if(u=r.v,d=u.data,!(p=u.error)){r.n=3
break}return r.a(2,t._returnResult({data:null,error:p}))
case 3:return"totp"===e.factorType&&"totp"===d.type&&(null===(i=null==d?void 0:d.totp)||void 0===i?void 0:i.qr_code)&&(d.totp.qr_code=`data:image/svg+xml;utf-8,${d.totp.qr_code}`),r.a(2,t._returnResult({data:d,error:null}))}},n)}))
return function(e){return n.apply(this,arguments)}}())
case 1:return n.a(2,n.v)
case 2:if(n.p=2,!jt(a=n.v)){n.n=3
break}return n.a(2,t._returnResult({data:null,error:a}))
case 3:throw a
case 4:return n.a(2)}},n,null,[[0,2]])}))()}_verify(e){var t=this
return s(r().m(function n(){return r().w(function(n){for(;;)if(0===n.n)return n.a(2,t._acquireLock(-1,s(r().m(function n(){var a
return r().w(function(n){for(;;)switch(n.p=n.n){case 0:return n.p=0,n.n=1,t._useSession(function(){var n=s(r().m(function n(a){var s,i,o,l,c,u,d
return r().w(function(r){for(;;)switch(r.n){case 0:if(i=a.data,!(o=a.error)){r.n=1
break}return r.a(2,t._returnResult({data:null,error:o}))
case 1:return l=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:"create"===e.webauthn.type?_r(e.webauthn.credential_response):Nr(e.webauthn.credential_response)})}:{code:e.code}),r.n=2,nr(t.fetch,"POST",`${t.url}/factors/${e.factorId}/verify`,{body:l,headers:t.headers,jwt:null===(s=null==i?void 0:i.session)||void 0===s?void 0:s.access_token})
case 2:if(c=r.v,u=c.data,!(d=c.error)){r.n=3
break}return r.a(2,t._returnResult({data:null,error:d}))
case 3:return r.n=4,t._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+u.expires_in},u))
case 4:return r.n=5,t._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",u)
case 5:return r.a(2,t._returnResult({data:u,error:d}))}},n)}))
return function(e){return n.apply(this,arguments)}}())
case 1:return n.a(2,n.v)
case 2:if(n.p=2,!jt(a=n.v)){n.n=3
break}return n.a(2,t._returnResult({data:null,error:a}))
case 3:throw a
case 4:return n.a(2)}},n,null,[[0,2]])}))))},n)}))()}_challenge(e){var t=this
return s(r().m(function n(){return r().w(function(n){for(;;)if(0===n.n)return n.a(2,t._acquireLock(-1,s(r().m(function n(){var a
return r().w(function(n){for(;;)switch(n.p=n.n){case 0:return n.p=0,n.n=1,t._useSession(function(){var n=s(r().m(function n(a){var s,i,o,l,c,u
return r().w(function(r){for(;;)switch(r.n){case 0:if(i=a.data,!(o=a.error)){r.n=1
break}return r.a(2,t._returnResult({data:null,error:o}))
case 1:return r.n=2,nr(t.fetch,"POST",`${t.url}/factors/${e.factorId}/challenge`,{body:e,headers:t.headers,jwt:null===(s=null==i?void 0:i.session)||void 0===s?void 0:s.access_token})
case 2:if(!(l=r.v).error){r.n=3
break}return r.a(2,l)
case 3:if("webauthn"===(c=l.data).type){r.n=4
break}return r.a(2,{data:c,error:null})
case 4:u=c.webauthn.type,r.n="create"===u?5:"request"===u?6:7
break
case 5:return r.a(2,{data:Object.assign(Object.assign({},c),{webauthn:Object.assign(Object.assign({},c.webauthn),{credential_options:Object.assign(Object.assign({},c.webauthn.credential_options),{publicKey:jr(c.webauthn.credential_options.publicKey)})})}),error:null})
case 6:return r.a(2,{data:Object.assign(Object.assign({},c),{webauthn:Object.assign(Object.assign({},c.webauthn),{credential_options:Object.assign(Object.assign({},c.webauthn.credential_options),{publicKey:Sr(c.webauthn.credential_options.publicKey)})})}),error:null})
case 7:return r.a(2)}},n)}))
return function(e){return n.apply(this,arguments)}}())
case 1:return n.a(2,n.v)
case 2:if(n.p=2,!jt(a=n.v)){n.n=3
break}return n.a(2,t._returnResult({data:null,error:a}))
case 3:throw a
case 4:return n.a(2)}},n,null,[[0,2]])}))))},n)}))()}_challengeAndVerify(e){var t=this
return s(r().m(function n(){var a,s,i
return r().w(function(r){for(;;)switch(r.n){case 0:return r.n=1,t._challenge({factorId:e.factorId})
case 1:if(a=r.v,s=a.data,!(i=a.error)){r.n=2
break}return r.a(2,t._returnResult({data:null,error:i}))
case 2:return r.n=3,t._verify({factorId:e.factorId,challengeId:s.id,code:e.code})
case 3:return r.a(2,r.v)}},n)}))()}_listFactors(){var e=this
return s(r().m(function t(){var n,a,s,i,o,l,c,u
return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e.getUser()
case 1:if(a=t.v,s=a.data.user,!(i=a.error)){t.n=2
break}return t.a(2,{data:null,error:i})
case 2:o={all:[],phone:[],totp:[],webauthn:[]},l=p(null!==(n=null==s?void 0:s.factors)&&void 0!==n?n:[])
try{for(l.s();!(c=l.n()).done;)u=c.value,o.all.push(u),"verified"===u.status&&o[u.factor_type].push(u)}catch(r){l.e(r)}finally{l.f()}return t.a(2,{data:o,error:null})}},t)}))()}_getAuthenticatorAssuranceLevel(){var e=this
return s(r().m(function t(){var n,a,s,i,o,l,c,u,d,p
return r().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,e.getSession()
case 1:if(s=t.v,i=s.data.session,!(o=s.error)){t.n=2
break}return t.a(2,e._returnResult({data:null,error:o}))
case 2:if(i){t.n=3
break}return t.a(2,{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null})
case 3:return l=Lt(i.access_token),c=l.payload,u=null,c.aal&&(u=c.aal),d=u,(null!==(a=null===(n=i.user.factors)||void 0===n?void 0:n.filter(e=>"verified"===e.status))&&void 0!==a?a:[]).length>0&&(d="aal2"),p=c.amr||[],t.a(2,{data:{currentLevel:u,nextLevel:d,currentAuthenticationMethods:p},error:null})}},t)}))()}_getAuthorizationDetails(e){var t=this
return s(r().m(function n(){var a
return r().w(function(n){for(;;)switch(n.p=n.n){case 0:return n.p=0,n.n=1,t._useSession(function(){var n=s(r().m(function n(a){var s,i
return r().w(function(r){for(;;)switch(r.n){case 0:if(s=a.data.session,!(i=a.error)){r.n=1
break}return r.a(2,t._returnResult({data:null,error:i}))
case 1:if(s){r.n=2
break}return r.a(2,t._returnResult({data:null,error:new Ti}))
case 2:return r.n=3,nr(t.fetch,"GET",`${t.url}/oauth/authorizations/${e}`,{headers:t.headers,jwt:s.access_token,xform:e=>({data:e,error:null})})
case 3:return r.a(2,r.v)}},n)}))
return function(e){return n.apply(this,arguments)}}())
case 1:return n.a(2,n.v)
case 2:if(n.p=2,!jt(a=n.v)){n.n=3
break}return n.a(2,t._returnResult({data:null,error:a}))
case 3:throw a
case 4:return n.a(2)}},n,null,[[0,2]])}))()}_approveAuthorization(e,t){var n=this
return s(r().m(function a(){var i
return r().w(function(a){for(;;)switch(a.p=a.n){case 0:return a.p=0,a.n=1,n._useSession(function(){var a=s(r().m(function a(s){var i,o,l
return r().w(function(r){for(;;)switch(r.n){case 0:if(i=s.data.session,!(o=s.error)){r.n=1
break}return r.a(2,n._returnResult({data:null,error:o}))
case 1:if(i){r.n=2
break}return r.a(2,n._returnResult({data:null,error:new Ti}))
case 2:return r.n=3,nr(n.fetch,"POST",`${n.url}/oauth/authorizations/${e}/consent`,{headers:n.headers,jwt:i.access_token,body:{action:"approve"},xform:e=>({data:e,error:null})})
case 3:return(l=r.v).data&&l.data.redirect_url&&$i()&&!(null==t?void 0:t.skipBrowserRedirect)&&window.location.assign(l.data.redirect_url),r.a(2,l)}},a)}))
return function(e){return a.apply(this,arguments)}}())
case 1:return a.a(2,a.v)
case 2:if(a.p=2,!jt(i=a.v)){a.n=3
break}return a.a(2,n._returnResult({data:null,error:i}))
case 3:throw i
case 4:return a.a(2)}},a,null,[[0,2]])}))()}_denyAuthorization(e,t){var n=this
return s(r().m(function a(){var i
return r().w(function(a){for(;;)switch(a.p=a.n){case 0:return a.p=0,a.n=1,n._useSession(function(){var a=s(r().m(function a(s){var i,o,l
return r().w(function(r){for(;;)switch(r.n){case 0:if(i=s.data.session,!(o=s.error)){r.n=1
break}return r.a(2,n._returnResult({data:null,error:o}))
case 1:if(i){r.n=2
break}return r.a(2,n._returnResult({data:null,error:new Ti}))
case 2:return r.n=3,nr(n.fetch,"POST",`${n.url}/oauth/authorizations/${e}/consent`,{headers:n.headers,jwt:i.access_token,body:{action:"deny"},xform:e=>({data:e,error:null})})
case 3:return(l=r.v).data&&l.data.redirect_url&&$i()&&!(null==t?void 0:t.skipBrowserRedirect)&&window.location.assign(l.data.redirect_url),r.a(2,l)}},a)}))
return function(e){return a.apply(this,arguments)}}())
case 1:return a.a(2,a.v)
case 2:if(a.p=2,!jt(i=a.v)){a.n=3
break}return a.a(2,n._returnResult({data:null,error:i}))
case 3:throw i
case 4:return a.a(2)}},a,null,[[0,2]])}))()}_listOAuthGrants(){var e=this
return s(r().m(function t(){var n
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,e._useSession(function(){var t=s(r().m(function t(n){var a,s
return r().w(function(t){for(;;)switch(t.n){case 0:if(a=n.data.session,!(s=n.error)){t.n=1
break}return t.a(2,e._returnResult({data:null,error:s}))
case 1:if(a){t.n=2
break}return t.a(2,e._returnResult({data:null,error:new Ti}))
case 2:return t.n=3,nr(e.fetch,"GET",`${e.url}/user/oauth/grants`,{headers:e.headers,jwt:a.access_token,xform:e=>({data:e,error:null})})
case 3:return t.a(2,t.v)}},t)}))
return function(e){return t.apply(this,arguments)}}())
case 1:return t.a(2,t.v)
case 2:if(t.p=2,!jt(n=t.v)){t.n=3
break}return t.a(2,e._returnResult({data:null,error:n}))
case 3:throw n
case 4:return t.a(2)}},t,null,[[0,2]])}))()}_revokeOAuthGrant(e){var t=this
return s(r().m(function n(){var a
return r().w(function(n){for(;;)switch(n.p=n.n){case 0:return n.p=0,n.n=1,t._useSession(function(){var n=s(r().m(function n(a){var s,i
return r().w(function(r){for(;;)switch(r.n){case 0:if(s=a.data.session,!(i=a.error)){r.n=1
break}return r.a(2,t._returnResult({data:null,error:i}))
case 1:if(s){r.n=2
break}return r.a(2,t._returnResult({data:null,error:new Ti}))
case 2:return r.n=3,nr(t.fetch,"DELETE",`${t.url}/user/oauth/grants`,{headers:t.headers,jwt:s.access_token,query:{client_id:e.clientId},noResolveJson:!0})
case 3:return r.a(2,{data:{},error:null})}},n)}))
return function(e){return n.apply(this,arguments)}}())
case 1:return n.a(2,n.v)
case 2:if(n.p=2,!jt(a=n.v)){n.n=3
break}return n.a(2,t._returnResult({data:null,error:a}))
case 3:throw a
case 4:return n.a(2)}},n,null,[[0,2]])}))()}fetchJwk(e){var t=this
return s(r().m(function e(n,a={keys:[]}){var s,i,o,l,c
return r().w(function(e){for(;;)switch(e.n){case 0:if(!(s=a.keys.find(e=>e.kid===n))){e.n=1
break}return e.a(2,s)
case 1:if(i=Date.now(),!((s=t.jwks.keys.find(e=>e.kid===n))&&t.jwks_cached_at+6e5>i)){e.n=2
break}return e.a(2,s)
case 2:return e.n=3,nr(t.fetch,"GET",`${t.url}/.well-known/jwks.json`,{headers:t.headers})
case 3:if(o=e.v,l=o.data,!(c=o.error)){e.n=4
break}throw c
case 4:if(l.keys&&0!==l.keys.length){e.n=5
break}return e.a(2,null)
case 5:if(t.jwks=l,t.jwks_cached_at=i,s=l.keys.find(e=>e.kid===n)){e.n=6
break}return e.a(2,null)
case 6:return e.a(2,s)}},e)})).apply(this,arguments)}getClaims(e){var t=this
return s(r().m(function e(n,a={}){var s,i,o,l,c,u,d,p,f,h,m,g,b,v,y,x,w,k
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(e.p=0,s=n){e.n=3
break}return e.n=1,t.getSession()
case 1:if(i=e.v,o=i.data,!(l=i.error)&&o.session){e.n=2
break}return e.a(2,t._returnResult({data:null,error:l}))
case 2:s=o.session.access_token
case 3:if(c=Lt(s),u=c.header,d=c.payload,p=c.signature,f=c.raw,h=f.header,m=f.payload,(null==a?void 0:a.allowExpired)||Gt(d.exp),u.alg&&!u.alg.startsWith("HS")&&u.kid&&"crypto"in globalThis&&"subtle"in globalThis.crypto){e.n=4
break}w=null,e.n=6
break
case 4:return e.n=5,t.fetchJwk(u.kid,(null==a?void 0:a.keys)?{keys:a.keys}:null==a?void 0:a.jwks)
case 5:w=e.v
case 6:if(g=w){e.n=9
break}return e.n=7,t.getUser(s)
case 7:if(b=e.v,!(v=b.error)){e.n=8
break}throw v
case 8:return e.a(2,{data:{claims:d,header:u,signature:p},error:null})
case 9:return y=Jt(u.alg),e.n=10,crypto.subtle.importKey("jwk",g,y,!0,["verify"])
case 10:return x=e.v,e.n=11,crypto.subtle.verify(y,x,p,Ot(`${h}.${m}`))
case 11:if(e.v){e.n=12
break}throw new zi("Invalid JWT signature")
case 12:return e.a(2,{data:{claims:d,header:u,signature:p},error:null})
case 13:if(e.p=13,!jt(k=e.v)){e.n=14
break}return e.a(2,t._returnResult({data:null,error:k}))
case 14:throw k
case 15:return e.a(2)}},e,null,[[0,13]])})).apply(this,arguments)}}
mo.nextInstanceID={}
var go,bo,vo,yo=eo,xo=mo,wo=Object.freeze({__proto__:null,AuthAdminApi:yo,AuthApiError:_i,AuthClient:xo,AuthError:Si,AuthImplicitGrantRedirectError:Pi,AuthInvalidCredentialsError:Ri,AuthInvalidJwtError:zi,AuthInvalidTokenResponseError:Ci,AuthPKCEGrantCodeExchangeError:Ai,AuthRetryableFetchError:Oi,AuthSessionMissingError:Ti,AuthUnknownError:Ni,AuthWeakPasswordError:Ii,CustomAuthError:Ei,GoTrueAdminApi:eo,GoTrueClient:mo,NavigatorLockAcquireTimeoutError:no,SIGN_OUT_SCOPES:Qi,isAuthApiError:St,isAuthError:jt,isAuthImplicitGrantRedirectError:Nt,isAuthRetryableFetchError:Et,isAuthSessionMissingError:_t,isAuthWeakPasswordError:function(e){return jt(e)&&"AuthWeakPasswordError"===e.name},lockInternals:to,navigatorLock:hr,processLock:function(){return gr.apply(this,arguments)}}),ko=x(wo),jo=Fr(),So=d(jo),_o=So||c({__proto__:null,default:So},[jo]),No=(_o.PostgrestError,_o.FunctionsHttpError,_o.FunctionsFetchError,_o.FunctionsRelayError,_o.FunctionsError,_o.FunctionRegion,_o.SupabaseClient,_o.createClient)("https://supabase-proxy.tiny-wave-2fa1.workers.dev","sk_live_prod_2024_Dbs_public_access_token_v1",(_o.GoTrueAdminApi,_o.GoTrueClient,_o.AuthAdminApi,_o.AuthClient,_o.navigatorLock,_o.NavigatorLockAcquireTimeoutError,_o.lockInternals,_o.processLock,_o.SIGN_OUT_SCOPES,_o.AuthError,_o.AuthApiError,_o.AuthUnknownError,_o.CustomAuthError,_o.AuthSessionMissingError,_o.AuthInvalidTokenResponseError,_o.AuthInvalidCredentialsError,_o.AuthImplicitGrantRedirectError,_o.AuthPKCEGrantCodeExchangeError,_o.AuthRetryableFetchError,_o.AuthWeakPasswordError,_o.AuthInvalidJwtError,_o.isAuthError,_o.isAuthApiError,_o.isAuthSessionMissingError,_o.isAuthImplicitGrantRedirectError,_o.isAuthRetryableFetchError,_o.isAuthWeakPasswordError,_o.RealtimePresence,_o.RealtimeChannel,_o.RealtimeClient,_o.REALTIME_LISTEN_TYPES,_o.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT,_o.REALTIME_PRESENCE_LISTEN_EVENTS,_o.REALTIME_SUBSCRIBE_STATES,_o.REALTIME_CHANNEL_STATES,{auth:{persistSession:!0,autoRefreshToken:!0,storage:{getItem:e=>{try{return window.localStorage.getItem(e)}catch(hc){return null}},setItem:(e,t)=>{try{window.localStorage.setItem(e,t)}catch(hc){}},removeItem:e=>{try{window.localStorage.removeItem(e)}catch(hc){}}},storageKey:"sn-session",detectSessionInUrl:!0,flowType:"pkce"},global:{headers:{"X-Client-Info":"Dbs-web"}},realtime:{params:{eventsPerSecond:10},log_level:"error"}}))
if("undefined"!=typeof window){var Eo=console.error,To=console.warn,Co=console.log,Ro=e=>e.includes("WebSocket connection")||e.includes("realtime")||e.includes("wss://")||e.includes("breachhub.org")||e.includes("breachhub"),Po=e=>e.replace(/supabase-proxy\.tiny-wave-2fa1\.workers\.dev/gi,"api.see-know.eu").replace(/supabase/gi,"backend").replace(/mwkamemnxhwmxpkmjief/gi,"[hidden]").replace(/ipify\.org/gi,"[hidden]")
console.error=(...e)=>{var t,r=(null===(t=e[0])||void 0===t?void 0:t.toString())||""
if(!Ro(r)){var n=e.map(e=>"string"==typeof e?Po(e):e)
Eo.apply(console,n)}},console.warn=(...e)=>{var t,r=(null===(t=e[0])||void 0===t?void 0:t.toString())||""
if(!Ro(r)){var n=e.map(e=>"string"==typeof e?Po(e):e)
To.apply(console,n)}},console.log=(...e)=>{var t,r=(null===(t=e[0])||void 0===t?void 0:t.toString())||""
if(!Ro(r)){var n=e.map(e=>"string"==typeof e?Po(e):e)
Co.apply(console,n)}}}var Ao=bn.createContext(void 0),Oo=()=>{var e=bn.useContext(Ao)
if(!e)throw new Error("useAuth must be used within an AuthProvider")
return e},Io=({children:e})=>{var t=i(bn.useState(null),2),n=t[0],a=t[1],o=i(bn.useState(null),2),l=o[0],c=o[1],u=i(bn.useState(!0),2),d=u[0],p=u[1],f=i(bn.useState(!1),2),h=f[0],m=f[1],g=bn.useRef(null),b=bn.useRef(null),v=bn.useRef(0),y=bn.useRef(null),x=bn.useRef(!1)
bn.useEffect(()=>{var e=!0,t=function(){var t=s(r().m(function t(){var n,s,i,o,l,u,d,f,h,m
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,No.auth.getSession()
case 1:if(n=t.v,s=n.data,!n.error){t.n=11
break}return t.n=2,No.auth.refreshSession()
case 2:if(i=t.v,o=i.data,i.error||!o.session){t.n=7
break}if(l=o.session.user,e){t.n=3
break}return t.a(2)
case 3:if(a(l),!l){t.n=6
break}return t.n=4,Gr(l)
case 4:if(u=t.v,e){t.n=5
break}return t.a(2)
case 5:c(u)
case 6:t.n=10
break
case 7:return t.n=8,No.auth.signOut()
case 8:if(e){t.n=9
break}return t.a(2)
case 9:a(null),c(null)
case 10:t.n=16
break
case 11:if(h=null!==(d=null===(f=s.session)||void 0===f?void 0:f.user)&&void 0!==d?d:null,e){t.n=12
break}return t.a(2)
case 12:if(a(h),!h){t.n=15
break}return t.n=13,Gr(h)
case 13:if(m=t.v,e){t.n=14
break}return t.a(2)
case 14:c(m),t.n=16
break
case 15:c(null)
case 16:t.n=23
break
case 17:return t.p=17,t.v,t.p=18,t.n=19,No.auth.signOut()
case 19:t.n=21
break
case 20:t.p=20,t.v
try{localStorage.removeItem("sn-session"),Object.keys(localStorage).forEach(e=>{(e.startsWith("sb-")||e.startsWith("supabase"))&&localStorage.removeItem(e)})}catch(r){}case 21:if(e){t.n=22
break}return t.a(2)
case 22:a(null),c(null)
case 23:return t.p=23,e&&p(!1),t.f(23)
case 24:return t.a(2)}},t,null,[[18,20],[0,17,23,24]])}))
return function(){return t.apply(this,arguments)}}()
t()
var i=No.auth.onAuthStateChange(function(){var t=s(r().m(function t(n,s){var i,o,l
return r().w(function(t){for(;;)switch(t.n){case 0:if(e){t.n=1
break}return t.a(2)
case 1:if("SIGNED_OUT"!==n){t.n=2
break}return a(null),c(null),t.a(2)
case 2:if("SIGNED_IN"!==n&&"TOKEN_REFRESHED"!==n&&"USER_UPDATED"!==n){t.n=6
break}if(o=null!==(i=null==s?void 0:s.user)&&void 0!==i?i:null,a(o),!o){t.n=5
break}return t.n=3,Gr(o)
case 3:if(l=t.v,e){t.n=4
break}return t.a(2)
case 4:c(l),"SIGNED_IN"===n&&(m(!0),window.setTimeout(()=>m(!1),2500)),t.n=6
break
case 5:c(null)
case 6:return t.a(2)}},t)}))
return function(e,r){return t.apply(this,arguments)}}()),o=i.data,l=function(){var t=s(r().m(function t(){var s,i,o,l,u,d,p,f,h,m,g,b,v
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(e){t.n=1
break}return t.a(2)
case 1:if(!x.current){t.n=2
break}return t.a(2)
case 2:return x.current=!0,t.p=3,t.n=4,No.auth.getSession()
case 4:if(s=t.v,i=s.data,!s.error&&i.session){t.n=11
break}return t.p=5,t.n=6,No.auth.refreshSession()
case 6:if(o=t.v,l=o.data.session,o.error||!l||!e){t.n=8
break}return u=l.user,a(u),t.n=7,Gr(u)
case 7:return d=t.v,e&&c(d),t.a(2)
case 8:t.n=10
break
case 9:return t.p=9,t.v,t.a(2)
case 10:return e&&!n&&(a(null),c(null)),t.a(2)
case 11:if(p=Math.floor(Date.now()/1e3),!((i.session.expires_at||0)-p<300)){t.n=18
break}return t.p=12,t.n=13,No.auth.refreshSession()
case 13:if(f=t.v,h=f.data.session,f.error||!h){t.n=15
break}if(m=h.user,!e||!m){t.n=15
break}return a(m),t.n=14,Gr(m)
case 14:g=t.v,e&&c(g)
case 15:t.n=17
break
case 16:t.p=16,t.v
case 17:t.n=20
break
case 18:if(b=i.session.user,!e||!b){t.n=20
break}if(n&&n.id===b.id){t.n=20
break}return a(b),t.n=19,Gr(b)
case 19:v=t.v,e&&c(v)
case 20:t.n=22
break
case 21:t.p=21,t.v
case 22:return t.p=22,x.current=!1,t.f(22)
case 23:return t.a(2)}},t,null,[[12,16],[5,9],[3,21,22,23]])}))
return function(){return t.apply(this,arguments)}}(),u=function(){var e=s(r().m(function e(){var t
return r().w(function(e){for(;;)switch(e.n){case 0:if("visible"!==document.visibilityState){e.n=2
break}if(y.current&&window.clearTimeout(y.current),!((t=Date.now())-v.current<1e3)){e.n=1
break}y.current=window.setTimeout(()=>{v.current=Date.now(),l()},1e3),e.n=2
break
case 1:return v.current=t,e.n=2,l()
case 2:return e.a(2)}},e)}))
return function(){return e.apply(this,arguments)}}(),d=function(){var e=s(r().m(function e(){var t
return r().w(function(e){for(;;)switch(e.n){case 0:if(y.current&&window.clearTimeout(y.current),!((t=Date.now())-v.current<1e3)){e.n=1
break}y.current=window.setTimeout(()=>{v.current=Date.now(),l()},1e3),e.n=2
break
case 1:return v.current=t,e.n=2,l()
case 2:return e.a(2)}},e)}))
return function(){return e.apply(this,arguments)}}()
document.addEventListener("visibilitychange",u),window.addEventListener("focus",d)
var f=window.setInterval(s(r().m(function t(){var n,a,s,i,o
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(e){t.n=1
break}return t.a(2)
case 1:return t.p=1,t.n=2,No.auth.getSession()
case 2:if(n=t.v,!(a=n.data).session){t.n=3
break}if(s=Math.floor(Date.now()/1e3),i=a.session.expires_at||0,!((o=i-s)<300&&o>0)){t.n=3
break}return t.n=3,No.auth.refreshSession()
case 3:t.n=5
break
case 4:t.p=4,t.v
case 5:return t.a(2)}},t,null,[[1,4]])})),12e4)
return()=>{e=!1,o.subscription.unsubscribe(),document.removeEventListener("visibilitychange",u),window.removeEventListener("focus",d),window.clearInterval(f),y.current&&window.clearTimeout(y.current)}},[]),bn.useEffect(()=>{b.current&&(window.clearInterval(b.current),b.current=null)
var e=function(){var e=s(r().m(function e(){var t
return r().w(function(e){for(;;)switch(e.n){case 0:if(!(t=g.current)){e.n=1
break}return g.current=null,e.n=1,No.from("user_sessions").delete().eq("session_id",t)
case 1:return e.a(2)}},e)}))
return function(){return e.apply(this,arguments)}}()
if(n){var t=!0,a=function(){var e=s(r().m(function e(){var a,s,i
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,a=`${n.id}_${Date.now()}`,e.n=1,No.from("user_sessions").insert({session_id:a,last_seen:(new Date).toISOString()})
case 1:if(s=e.v,i=s.error,t){e.n=2
break}return e.a(2)
case 2:if(!i){e.n=3
break}return e.a(2)
case 3:g.current=a,b.current=window.setInterval(()=>{var e=g.current
e&&No.from("user_sessions").update({last_seen:(new Date).toISOString()}).eq("session_id",e)},3e4),e.n=5
break
case 4:e.p=4,e.v
case 5:return e.a(2)}},e,null,[[0,4]])}))
return function(){return e.apply(this,arguments)}}()
return a(),()=>{t=!1,b.current&&(window.clearInterval(b.current),b.current=null)}}e()},[null==n?void 0:n.id])
var w=function(){var e=s(r().m(function e(){var t
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(e.p=0,b.current&&(window.clearInterval(b.current),b.current=null),t=g.current,g.current=null,!t){e.n=1
break}return e.n=1,No.from("user_sessions").delete().eq("session_id",t)
case 1:return e.n=2,No.auth.signOut()
case 2:e.n=4
break
case 3:e.p=3,e.v
case 4:return e.p=4,a(null),c(null),e.f(4)
case 5:return e.a(2)}},e,null,[[0,3,4,5]])}))
return function(){return e.apply(this,arguments)}}()
return hn.jsx(Ao.Provider,{value:{user:n,profile:l,loading:d,showLoginPopup:h,setShowLoginPopup:m,logout:w},children:e})},zo=bn.createContext(void 0),Lo=()=>{var e=bn.useContext(zo)
if(!e)throw new Error("useLanguage must be used within a LanguageProvider")
return e},Do={fr:{"nav.home":"Accueil","nav.features":"Fonctionnalit\xe9s","nav.pricing":"Tarifs","nav.about":"A propos","nav.contact":"Contact","nav.tickets":"Tickets","nav.apidocs":"API Docs","nav.login":"Connexion","nav.register":"Inscription","nav.logout":"D\xe9connexion","nav.profile":"Profil","nav.settings":"Param\xe8tres","nav.api":"API","nav.inbox":"Boite de reception","nav.apiAccess":"Acces API","home.hero.title":"Moteur de Recherche OSINT Avanc\xe9","home.hero.subtitle":"Trouvez des informations publiques sur le web en quelques secondes","home.hero.description":"D\xe9tectez les violations de donn\xe9es, les fuites et les menaces rapidement et en toute confidentialit\xe9. Dbs aide les individus et les organisations \xe0 prot\xe9ger leurs informations.","home.hero.badge":"Plateforme de cybers\xe9curit\xe9 de confiance","home.hero.button":"Commencer la Recherche","home.search.placeholder":"Recherchez une adresse email, un domaine, une IP...","home.search.button":"Rechercher","home.search.popular":"Recherches populaires","home.results.title":"R\xe9sultats de Recherche","home.results.databases":"Base de donn\xe9es trouv\xe9es","home.results.download":"T\xe9l\xe9charger les r\xe9sultats","home.results.noresults":"Aucun r\xe9sultat trouv\xe9","home.results.noresultstext":"Aucune donn\xe9e n'a \xe9t\xe9 trouv\xe9e pour","home.credits.title":"Cr\xe9dits Restants","home.error.notloggedin":"Veuillez vous connecter pour utiliser le moteur de recherche.","home.error.beta_only":"Les recherches sont actuellement r\xe9serv\xe9es aux b\xeata testeurs.","home.error.nocredits":"Cr\xe9dits insuffisants. Mettez \xe0 niveau votre plan.","home.error.search":"Erreur lors de la recherche. Veuillez r\xe9essayer.","home.features.section":"Fonctionnalit\xe9s","home.features.title":"Outils puissants pour vos recherches","home.features.subtitle":"Des fonctionnalit\xe9s avanc\xe9es con\xe7ues pour les professionnels de la cybers\xe9curit\xe9, les enqu\xeateurs et les chercheurs.","home.howitworks.section":"Comment \xe7a marche","home.howitworks.title":"Simple, rapide et s\xe9curis\xe9","home.howitworks.subtitle":"Trois \xe9tapes simples pour d\xe9couvrir les informations dont vous avez besoin.","home.howitworks.step1.title":"Entrez votre recherche","home.howitworks.step1.desc":"Saisissez un email, nom d'utilisateur, num\xe9ro de t\xe9l\xe9phone, adresse IP ou tout autre identifiant dans notre barre de recherche s\xe9curis\xe9e.","home.howitworks.step2.title":"Analyse des sources","home.howitworks.step2.desc":"Dbs interroge plus de 15 sources de donn\xe9es en direct, incluant les bases de violations, les r\xe9seaux sociaux et les registres publics.","home.howitworks.step3.title":"Explorez les r\xe9sultats","home.howitworks.step3.desc":"Visualisez les donn\xe9es dans un tableau de bord organis\xe9, corr\xe9lez les informations, d\xe9couvrez les connexions et exportez vos d\xe9couvertes.","home.trust.section":"Confiance","home.trust.title":"Utilis\xe9 par des \xe9quipes de s\xe9curit\xe9 dans le monde entier","home.trust.subtitle":"Dbs est la plateforme de confiance des \xe9quipes de s\xe9curit\xe9, des forces de l'ordre et des entreprises dans plus de 50 pays. Nous offrons un support d\xe9di\xe9, des int\xe9grations personnalis\xe9es et des fonctionnalit\xe9s de niveau entreprise.","home.trust.gdpr":"Conforme RGPD","home.trust.audit":"Audit trails","home.trust.support":"Support 24/7","home.trust.sla":"SLA garanti","home.trust.orgs":"Organisations","home.trust.users":"Utilisateurs actifs","home.trust.searches":"Recherches/mois","home.trust.rating":"Note moyenne","home.trust.contact":"Contacter l'\xe9quipe commerciale","home.cta.title":"Pr\xeat \xe0 s\xe9curiser vos informations?","home.cta.subtitle":"Rejoignez des milliers de professionnels qui font confiance \xe0 Dbs pour leurs recherches OSINT et de cybers\xe9curit\xe9.","home.cta.button1":"Commencer gratuitement","home.cta.button2":"Demander une d\xe9mo","features.header.badge":"Fonctionnalit\xe9s","features.header.title":"Outils puissants pour l'OSINT","features.header.subtitle":"D\xe9couvrez toutes les capacit\xe9s de Dbs pour vos recherches et investigations.","features.violations":"Recherche de violations","features.violations.desc":"Acc\xe9dez \xe0 des milliards d'enregistrements provenant de violations de donn\xe9es connues. D\xe9tectez instantan\xe9ment si des identifiants ont \xe9t\xe9 compromis.","features.osint":"OSINT avanc\xe9","features.osint.desc":"Recherchez sur les r\xe9seaux sociaux, les forums et les plateformes publiques pour obtenir une vue compl\xe8te d'une identit\xe9 num\xe9rique.","features.darkweb":"Dark Web Search","features.darkweb.desc":"Explorez le dark web en toute s\xe9curit\xe9. Trouvez des informations sur les menaces potentielles et les donn\xe9es expos\xe9es.","features.realtime":"R\xe9sultats en temps r\xe9el","features.realtime.desc":"Notre infrastructure haute performance vous fournit des r\xe9sultats instantan\xe9s. Pas d'attente, des r\xe9ponses imm\xe9diates.","features.encryption":"Chiffrement de bout en bout","features.encryption.desc":"Toutes vos recherches sont chiffr\xe9es. Vos donn\xe9es restent priv\xe9es et s\xe9curis\xe9es. Nous ne stockons pas vos requ\xeates.","features.api":"API REST","features.api.desc":"Int\xe9grez Dbs dans vos propres outils et workflows. API document\xe9e, exemples de code, et support technique.","features.section.types":"Types de Recherche","features.types.title":"Recherchez par n'importe quel identifiant","features.types.desc":"Dbs supporte une large gamme de types de recherche pour r\xe9pondre \xe0 tous vos besoins.","features.email":"Email","features.email.desc":"Recherchez par adresse email pour trouver les violations, comptes associ\xe9s et informations publiques.","features.username":"Nom d'utilisateur","features.username.desc":"Trouvez tous les comptes et profils associ\xe9s \xe0 un nom d'utilisateur sur diff\xe9rentes plateformes.","features.phone":"Num\xe9ro de t\xe9l\xe9phone","features.phone.desc":"Identifiez les services et comptes li\xe9s \xe0 un num\xe9ro de t\xe9l\xe9phone, y compris les fuites de donn\xe9es.","features.ip":"Adresse IP","features.ip.desc":"Analysez une adresse IP pour obtenir la g\xe9olocalisation, l'h\xe9bergeur et les informations de r\xe9putation.","features.domain":"Domaine","features.domain.desc":"Explorez les informations WHOIS, DNS, certificats SSL et historique d'un nom de domaine.","features.discord":"Discord ID","features.discord.desc":"Recherchez par identifiant Discord pour trouver l'activit\xe9 et les serveurs associ\xe9s.","features.sources":"Sources de donn\xe9es","features.sources.title":"15+ sources interrog\xe9es en parall\xe8le","features.sources.desc":"Nous agr\xe9geons les donn\xe9es de multiples sources pour vous fournir les r\xe9sultats les plus complets.","features.breaches":"Bases de violations","features.breaches.count":"10B+ enregistrements","features.social":"R\xe9seaux sociaux","features.social.count":"20+ plateformes","features.dark":"Dark Web","features.dark.count":"Forums & march\xe9s","features.public":"Registres publics","features.public.count":"WHOIS, DNS, etc.","features.pastes":"Pastes","features.pastes.count":"Pastebin & similaires","features.security":"S\xe9curit\xe9","features.security.title":"Votre confidentialit\xe9 est notre priorit\xe9","features.security.desc":"Nous prenons la s\xe9curit\xe9 au s\xe9rieux. Toutes les donn\xe9es sont chiffr\xe9es en transit et au repos. Nous ne stockons pas vos recherches et nous respectons les r\xe9glementations de protection des donn\xe9es.","features.aes256":"Chiffrement AES-256","features.gdpr":"Conforme RGPD","features.zerologo":"Zero-log policy","features.audit":"Audit de s\xe9curit\xe9","features.encryption.type":"Chiffrement","features.cta.button":"Commencer Maintenant","features.cta.text":"Pr\xeat \xe0 explorer?","features.cta.subtitle":"Commencez gratuitement et d\xe9couvrez la puissance de Dbs pour vos recherches OSINT.","pricing.header.badge":"Tarifs","pricing.header.title":"Choisissez votre plan","pricing.header.subtitle":"Des options flexibles pour tous vos besoins de recherche OSINT.","pricing.plan.free":"Gratuit","pricing.plan.beginner":"Beginner","pricing.plan.premium":"premium","pricing.plan.pro":"Pro","pricing.price.beginner":"9.99","pricing.price.pro":"24.99","pricing.price.premium":"200","pricing.price.period":"/lifetime","pricing.price.crypto":"Paiement unique en crypto","pricing.price.advanced":"Pour utilisateurs avanc\xe9s","pricing.price.ultimate":"Acc\xe8s ultime","pricing.features":"Caract\xe9ristiques","pricing.button.buy":"Acheter","pricing.button.select":"Choisir ce plan","pricing.button.contact":"Nous Contacter","pricing.payment.title":"Paiement en Litecoin (LTC)","pricing.payment.desc":'Tous les paiements sont effectu\xe9s en Litecoin pour garantir votre anonymat et la s\u01f8curit\u01f8 de vos transactions. Apr\xe8s achat, cr\xe9ez un ticket dans la cat\u01f8gorie "Acc\xe8s Payant" pour activer votre plan.',"pricing.searches.per.day":"recherches/jour","pricing.feature.results":"R\u01f8sultats complets","pricing.feature.support":"Support 24h/24","pricing.feature.osint":"OSINT Search","pricing.feature.api":"API Access","pricing.feature.intelx":"IntelX","pricing.faq.title":"Questions Fr\xe9quemment Pos\xe9es","pricing.faq.q1":"Puis-je annuler mon abonnement?","pricing.faq.a1":"Oui, vous pouvez annuler \xe0 tout moment.","pricing.faq.payment.title":"Comment fonctionne le paiement?","pricing.faq.payment.desc":'Cliquez sur "Acheter", creez un ticket dans la categorie "Acces Payant" en selectionnant votre plan. Nous vous enverrons une adresse LTC pour le paiement.',"pricing.faq.lifetime.title":'Qu\'est-ce que "lifetime"?',"pricing.faq.lifetime.desc":"Un paiement unique, acces a vie. Pas d'abonnement mensuel, pas de frais caches. Vous payez une fois et profitez de votre plan pour toujours.","pricing.faq.osint.title":"Qu'est-ce que l'OSINT Search?","pricing.faq.osint.desc":"L'OSINT Search donne acces a des bases de donnees avancees et des sources exclusives pour des recherches plus approfondies.","pricing.faq.activation.title":"Combien de temps pour activer mon plan?","pricing.faq.activation.desc":"Une fois le paiement confirme, votre plan est active en quelques minutes. Notre equipe est disponible 24h/24.","pricing.cta.title":"Pr\xeat \xe0 passer au niveau sup\xe9rieur?","pricing.cta.subtitle":"D\xe9bloquez tout le potentiel de Dbs avec un plan premium.","pricing.cta.button.beginner":"Commencer avec Beginner","pricing.cta.button.premium":"Choisir premium","about.header.badge":"\xc0 propos","about.header.title":"\xc0 propos de Dbs","about.header.subtitle":"Votre plateforme de confiance pour l'OSINT.","about.mission.title":"Notre Mission","about.mission.text":"Fournir des outils OSINT puissants et accessibles \xe0 tous.","about.values.title":"Nos Valeurs","about.values.subtitle":"Ce qui nous guide","about.team.title":"Notre \xc9quipe","about.team.subtitle":"Experts en cybers\xe9curit\xe9 et OSINT","about.team.description":"Les meilleures \xe9quipes derri\xe8re Dbs","about.join.title":"Rejoignez-Nous","about.join.subtitle":"Commencez votre voyage OSINT aujourd'hui","about.users":"Utilisateurs Inscrits","contact.header.badge":"Contact","contact.header.title":"Nous Contacter","contact.header.subtitle":"Des questions? Nous sommes l\xe0 pour vous aider.","contact.notloggedin":"Vous devez \xeatre connect\xe9 pour cr\xe9er un ticket.","contact.form.subject":"Sujet","contact.form.message":"Message","contact.form.category":"Cat\xe9gorie","contact.form.category.contact":"Contact","contact.form.category.acces":"Acc\xe8s Payant","contact.form.button":"Envoyer","contact.form.required":"Veuillez remplir tous les champs.","contact.form.selectplan":"Veuillez s\xe9lectionner un plan.","contact.form.success":"Ticket cr\xe9\xe9 avec succ\xe8s!","contact.form.error":"Erreur lors de la cr\xe9ation du ticket. Veuillez r\xe9essayer.","contact.login.required":"Vous devez \xeatre connect\xe9 pour envoyer un message.","contact.faq.title":"Questions Fr\xe9quemment Pos\xe9es","tickets.header.badge":"Support","tickets.header.title":"Mes Tickets","tickets.header.subtitle":"G\xe9rez vos tickets de support","tickets.header.owner":"G\xe9rez tous les tickets des utilisateurs","tickets.header.user":"Consultez vos tickets de support","tickets.filter.all":"Tous","tickets.filter.open":"Ouverts","tickets.filter.closed":"Ferm\xe9s","tickets.filter.deleteclosed":"Supprimer tickets ferm\xe9s","tickets.filter.newticket":"Nouveau ticket","tickets.new":"Nouveau Ticket","tickets.open":"Ouvert","tickets.closed":"Ferm\xe9","tickets.status":"Statut","tickets.empty":"Vous n'avez pas encore cr\xe9\xe9 de ticket.","tickets.empty.title":"Aucun ticket","tickets.empty.all":"Vous n'avez pas encore cr\xe9\xe9 de ticket.","tickets.empty.open":"Aucun ticket ouvert.","tickets.empty.closed":"Aucun ticket ferm\xe9.","tickets.empty.button":"Cr\xe9er un ticket","tickets.created":"Cr\xe9\xe9 le","tickets.category":"Cat\xe9gorie","tickets.subject":"Sujet","tickets.close":"Fermer le ticket","tickets.close.button":"Fermer le ticket","tickets.close.confirm":"\xcates-vous s\xfbr de vouloir fermer ce ticket?","tickets.delete.button":"Supprimer le message","tickets.delete.confirm":"\xcates-vous s\xfbr de vouloir supprimer ce message?","tickets.message.placeholder":"\xc9crivez votre r\xe9ponse...","tickets.message.send":"Envoyer","tickets.message.upload":"T\xe9l\xe9charger une image","tickets.message.sent":"Message envoy\xe9","tickets.message.error":"Erreur lors de l'envoi du message","apidocs.header.badge":"Documentation API","apidocs.header.title":"Documentation API Dbs","apidocs.header.subtitle":"Int\xe9grez la puissance de Dbs dans votre application.","apidocs.access.title":"Acc\xe8s R\xe9serv\xe9","apidocs.access.desc":"Cette documentation est r\xe9serv\xe9e aux utilisateurs premium.","apidocs.introduction":"Introduction","apidocs.authentication":"Authentification","apidocs.endpoints":"Points de Terminaison","apidocs.examples":"Exemples","apidocs.search":"Recherche","apidocs.credits":"Cr\xe9dits","apidocs.apikey":"Votre cl\xe9 API","apidocs.copy":"Copier","apidocs.copied":"Copi\xe9!","footer.brand.desc":"Plateforme de cybers\xe9curit\xe9 offrant des capacit\xe9s unifi\xe9es d'OSINT et de recherche sur le dark web.","footer.product":"Produit","footer.features":"Fonctionnalit\xe9s","footer.pricing":"Tarifs","footer.api":"API Documentation","footer.changelog":"Changelog","footer.company":"Entreprise","footer.about":"\xc0 propos","footer.careers":"Carri\xe8res","footer.blog":"Blog","footer.support":"Support","footer.legal":"L\xe9gal","footer.privacy":"Politique de confidentialit\xe9","footer.terms":"Conditions d'utilisation","footer.gdpr":"RGPD","footer.security":"S\xe9curit\xe9","footer.contact":"Contact","footer.discord":"Discord","footer.telegram":"Telegram","footer.copyright":"Dbs #2026","footer.secure":"S\xe9curis\xe9","footer.gdpr_compliant":"RGPD","footer.rights":"Tous droits r\xe9serv\xe9s","about.mission":"Qui sommes-nous?","about.mission.text1":"Dbs est n\xe9 de la conviction que les outils de cybers\xe9curit\xe9 ne devraient pas \xeatre r\xe9serv\xe9s aux grandes entreprises. Notre \xe9quipe de passionn\xe9s en s\xe9curit\xe9 informatique a cr\xe9\xe9 une plateforme accessible, puissante et respectueuse de la vie priv\xe9e.","about.mission.text2":"Nous croyons que chaque individu et organisation devrait avoir acc\xe8s aux outils n\xe9cessaires pour prot\xe9ger ses informations num\xe9riques. C'est pourquoi nous avons d\xe9velopp\xe9 Dbs : une solution OSINT compl\xe8te qui combine puissance et simplicit\xe9 d'utilisation.","about.mission.text3":"Bas\xe9s en Europe, nous respectons les plus hauts standards de protection des donn\xe9es et nous engageons \xe0 une utilisation \xe9thique de nos outils.","about.year":"Ann\xe9e de cr\xe9ation","about.countries":"Pays","about.members":"Membres d'\xe9quipe","about.security":"S\xe9curit\xe9 d'abord","about.security.desc":"La protection des donn\xe9es est au c\u0153ur de tout ce que nous faisons. Nous appliquons les meilleures pratiques de s\xe9curit\xe9 \xe0 chaque niveau.","about.transparency":"Transparence","about.transparency.desc":"Nous sommes ouverts sur nos pratiques, nos sources de donn\xe9es et la fa\xe7on dont nous traitons les informations.","about.ethics":"\xc9thique","about.ethics.desc":"Nous nous engageons \xe0 une utilisation responsable de nos outils et refusons tout usage malveillant de notre plateforme.","about.accessibility":"Accessibilit\xe9","about.accessibility.desc":"Nous croyons que tout le monde devrait avoir acc\xe8s \xe0 des outils de s\xe9curit\xe9 de qualit\xe9 professionnelle.","about.innovation":"Innovation","about.innovation.desc":"Nous investissons continuellement dans la R&D pour rester \xe0 la pointe de la technologie OSINT.","about.support":"Support","about.support.desc":"Nous nous engageons \xe0 fournir un support exceptionnel \xe0 tous nos utilisateurs, quelle que soit leur taille.","contact.login.title":"Connexion requise","contact.login.button":"Se connecter","contact.success.title":"Ticket cr\xe9\xe9 avec succ\xe8s!","contact.success.desc":"Votre ticket a \xe9t\xe9 cr\xe9\xe9. Vous pouvez suivre son \xe9tat dans la section Tickets.","contact.success.redirect":"Redirection vers vos tickets...","contact.form.plan.beginner":"Beginner (3\u20ac)","contact.form.plan.premium":"premium (200\u20ac)","contact.form.message.template":"Bonjour,\n\nJe souhaite acheter le plan {{plan}}.\n\nMerci de me fournir l'adresse LTC pour le paiement.","contact.faq.q1":"Comment puis-je r\xe9initialiser mon mot de passe?","contact.faq.a1":'Cliquez sur "Mot de passe oubli\xe9" sur la page de connexion. Vous recevrez un email avec un lien pour cr\xe9er un nouveau mot de passe.',"contact.faq.q2":"Quels types de recherches puis-je effectuer?","contact.faq.a2":"Dbs supporte les recherches par email, nom d'utilisateur, num\xe9ro de t\xe9l\xe9phone, adresse IP, domaine, et identifiants de r\xe9seaux sociaux comme Discord.","contact.faq.q3":"Les r\xe9sultats sont-ils confidentiels?","contact.faq.a3":"Oui, toutes vos recherches sont chiffr\xe9es et nous ne stockons pas l'historique de vos requ\xeates. Votre confidentialit\xe9 est notre priorit\xe9.","contact.faq.q4":"Comment fonctionne le paiement en LTC?","contact.faq.a4":'Une fois que vous cr\xe9ez un ticket dans la cat\xe9gorie "Acc\xe8s Payant", nous vous enverrons une adresse LTC. Apr\xe8s confirmation du paiement, votre plan sera activ\xe9 imm\xe9diatement.',"tickets.category.contact":"Contact","tickets.category.acces_payant":"Acc\xe8s Payant","tickets.loading":"Chargement...","tickets.nologin":"Vous devez \xeatre connect\xe9 pour voir vos tickets.","tickets.owner.only":"Seul le propri\xe9taire peut effectuer cette action.","tickets.grant.access":"Accorder l'acc\xe8s","tickets.reset.credits":"R\xe9initialiser les cr\xe9dits","tickets.image.uploading":"T\xe9l\xe9chargement en cours...","tickets.image.error":"Erreur lors du t\xe9l\xe9chargement de l'image.","tickets.image.size":"L'image doit faire moins de 5MB.","login.title":"Connexion","login.subtitle":"Entrez votre email pour recevoir un code de connexion","login.email":"Email","login.button":"Envoyer le code","login.loading":"Connexion en cours...","login.success":"Connexion r\xe9ussie!","login.error":"Erreur de connexion","login.otp.title":"Entrez le code de v\xe9rification","login.otp.code":"Code de v\xe9rification","login.otp.button":"V\xe9rifier","login.otp.error":"Code invalide","login.noaccount":"Vous n'avez pas de compte?","login.signup":"Cr\xe9er un compte ici","login.email_label":"Adresse email","login.password":"Mot de passe","login.forgot_password":"Mot de passe oubli\xe9","login.send_code":"Recevoir le code","login.otp_sent":"Un code a \xe9t\xe9 envoy\xe9 \xe0","login.otp.sent":"Code envoy\xe9","login.otp.subtitle":"Entrez le code OTP","login.change_email":"Changer d'email","register.title":"Inscription","register.subtitle":"Cr\xe9ez votre compte Dbs","register.email":"Email","register.email_label":"Adresse email","register.username":"Nom d'utilisateur","register.password":"Mot de passe","register.confirmpass":"Confirmer le mot de passe","register.button":"S'inscrire","register.loading":"Cr\xe9ation du compte...","register.success":"Compte cr\xe9\xe9 avec succ\xe8s!","register.error":"Erreur d'inscription","register.passwordmismatch":"Les mots de passe ne correspondent pas","register.hasaccount":"Vous avez d\xe9j\xe0 un compte?","register.login":"Connectez-vous ici","register.verification_sent":"Email de v\xe9rification envoy\xe9 !","register.verification_message":"Un email de v\xe9rification vous a \xe9t\xe9 envoy\xe9 \xe0 votre adresse mail.","register.check_spam":"(Regardez dans les spams si vous ne trouvez pas l'email)","register.error.passwordmismatch":"Les mots de passe ne correspondent pas","register.error.passwordmin":"Le mot de passe doit contenir au moins 8 caract\xe8res","register.error.signup":"Erreur lors de l'inscription","home.search.connection_error":"Erreur de connexion. Veuillez r\xe9essayer.","home.search.popular_tags":"Recherches populaires","home.search.email_tag":"Email","home.search.username_tag":"Username","home.search.discord_tag":"Discord ID","home.search.ip_tag":"IP Address","home.search.domain_tag":"Domain","browser.notice.title":"Recommandation","browser.notice.subtitle":"Optimisez votre exp\xe9rience","browser.notice.message":"Pour une meilleure exp\xe9rience et un fonctionnement optimal du site, nous vous recommandons d'utiliser LibreWolf, un navigateur ax\xe9 sur la confidentialit\xe9.","browser.notice.button":"Installer LibreWolf","browser.notice.dismiss":"Ne plus afficher ce message","privacy.title":"Politique de confidentialit\xe9","privacy.badge":"L\xe9gal","privacy.updated":"Derni\xe8re mise \xe0 jour: 1er janvier 2024","privacy.intro":"Chez Dbs, nous prenons la protection de vos donn\xe9es personnelles tr\xe8s au s\xe9rieux. Cette politique de confidentialit\xe9 explique comment nous collectons, utilisons, stockons et prot\xe9geons vos informations lorsque vous utilisez notre plateforme.","privacy.collected":"Donn\xe9es collect\xe9es","privacy.usage":"Utilisation des donn\xe9es","privacy.searches":"Recherches et confidentialit\xe9","privacy.sharing":"Partage des donn\xe9es","privacy.security":"S\xe9curit\xe9 des donn\xe9es","gdpr.title":"RGPD & protection des donn\xe9es","gdpr.badge":"L\xe9gal","gdpr.updated":"Derni\xe8re mise \xe0 jour: 1er janvier 2026","gdpr.section1":"1. Objectif et champ d'application","gdpr.section1.desc":"Cette page pr\xe9sente les principes RGPD appliqu\xe9s par Dbs pour la collecte et le traitement des donn\xe9es personnelles li\xe9es \xe0 l'utilisation de la plateforme (OSINT, d\xe9tection de fuites et support).","gdpr.section2":"2. Responsable du traitement","gdpr.section2.desc":"Dbs est responsable du traitement des donn\xe9es personnelles trait\xe9es dans le cadre du service.","gdpr.section2.contact":"Contact: privacy@Dbs.io","gdpr.section2.dpo":"DPO: dpo@Dbs.io","gdpr.section3":"3. Bases l\xe9gales du traitement","gdpr.section3.contract":"Ex\xe9cution du contrat: cr\xe9ation de compte, acc\xe8s \xe0 la plateforme et facturation.","gdpr.section3.consent":"Consentement: cookies analytiques et communications non essentielles.","gdpr.section3.legal":"Obligation l\xe9gale: conservation des donn\xe9es de facturation.","gdpr.section3.legitimate":"Int\xe9r\xeat l\xe9gitime: s\xe9curit\xe9, pr\xe9vention des abus et am\xe9lioration du service.","gdpr.section4":"4. Donn\xe9es trait\xe9es et minimisation","gdpr.section4.desc":"Nous collectons uniquement les donn\xe9es n\xe9cessaires \xe0 la fourniture du service et appliquons une politique de minimisation. Pour le d\xe9tail des donn\xe9es et des cookies, consultez la Politique de confidentialit\xe9.","gdpr.section5":"5. Finalit\xe9s","gdpr.section5.point1":"Fournir, s\xe9curiser et am\xe9liorer la plateforme.","gdpr.section5.point2":"G\xe9rer les comptes, abonnements et paiements.","gdpr.section5.point3":"Assurer le support client et la r\xe9ponse aux demandes.","gdpr.section5.point4":"Pr\xe9venir la fraude, l'abus et les usages non autoris\xe9s.","gdpr.section5.point5":"Respecter les obligations l\xe9gales et r\xe9glementaires.","gdpr.section6":"6. Sous-traitants et transferts","gdpr.section6.desc":"Nous travaillons avec des sous-traitants techniques (h\xe9bergement, paiement, emails transactionnels) soumis \xe0 des clauses de confidentialit\xe9. Si un transfert hors EEE est n\xe9cessaire, nous mettons en place des garanties appropri\xe9es (ex: clauses contractuelles types).","gdpr.section7":"7. Dur\xe9e de conservation","gdpr.section7.desc":"Les donn\xe9es sont conserv\xe9es pendant la dur\xe9e du compte actif, puis archiv\xe9es ou supprim\xe9es selon les d\xe9lais l\xe9gaux. Les d\xe9tails figurent dans la Politique de confidentialit\xe9.","gdpr.section8":"8. Vos droits","gdpr.section8.point1":"Droit d'acc\xe8s, de rectification et d'effacement.","gdpr.section8.point2":"Droit \xe0 la limitation du traitement.","gdpr.section8.point3":"Droit d'opposition au traitement.","gdpr.section8.point4":"Droit \xe0 la portabilit\xe9 des donn\xe9es.","gdpr.section9":"9. Exercer vos droits","gdpr.section9.desc":"Vous pouvez exercer vos droits \xe0 tout moment en \xe9crivant \xe0 privacy@Dbs.io. Nous r\xe9pondons dans un d\xe9lai maximal de 30 jours, apr\xe8s v\xe9rification d'identit\xe9 si n\xe9cessaire.","gdpr.section10":"10. S\xe9curit\xe9 des donn\xe9es","gdpr.section10.desc":"Nous appliquons des mesures techniques et organisationnelles reconnues: chiffrement en transit et au repos, contr\xf4les d'acc\xe8s, journalisation et audits r\xe9guliers.","gdpr.section11":"11. Autorit\xe9 de contr\xf4le","gdpr.section11.desc":"Si vous estimez que vos droits ne sont pas respect\xe9s, vous pouvez contacter l'autorit\xe9 de contr\xf4le comp\xe9tente (CNIL: www.cnil.fr).","terms.title":"Conditions d'utilisation","terms.badge":"L\xe9gal","terms.updated":"Derni\xe8re mise \xe0 jour: 1er janvier 2024","terms.acceptance":"En acc\xe9dant et en utilisant Dbs, vous acceptez d'\xeatre li\xe9 par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.","terms.section1":"1. Acceptation des conditions","terms.section2":"2. Description du service","terms.section3":"3. Conditions d'inscription","terms.section4":"4. Utilisation acceptable","terms.section5":"5. Utilisations interdites","terms.section6":"6. Propri\xe9t\xe9 intellectuelle","terms.section7":"7. Limitation de responsabilit\xe9","terms.section8":"8. Abonnements et paiements","terms.section9":"9. Suspension et r\xe9siliation","terms.section10":"10. Modifications des conditions","terms.section11":"11. Droit applicable","terms.section12":"12. Contact","terms.service.desc":"Dbs est une plateforme de cybers\xe9curit\xe9 offrant des services de recherche OSINT (Open Source Intelligence) et de surveillance du dark web. Nos services permettent aux utilisateurs de rechercher des informations publiquement disponibles et des donn\xe9es issues de fuites connues.","terms.registration":"Pour utiliser Dbs, vous devez:","terms.reg1":"Avoir au moins 18 ans","terms.reg2":"Fournir des informations exactes lors de l'inscription","terms.reg3":"Maintenir la confidentialit\xe9 de vos identifiants","terms.reg4":"\xcatre responsable de toutes les activit\xe9s sur votre compte","terms.acceptable":"Vous vous engagez \xe0 utiliser Dbs uniquement pour des fins l\xe9gales et \xe9thiques, notamment:","terms.acceptable1":"V\xe9rifier vos propres donn\xe9es personnelles","terms.acceptable2":"Recherches de s\xe9curit\xe9 autoris\xe9es","terms.acceptable3":"Investigations l\xe9gitimes dans le cadre professionnel","terms.acceptable4":"Protection contre les menaces de cybers\xe9curit\xe9","terms.prohibited":"Il est strictement interdit d'utiliser Dbs pour:","terms.prohibited1":"Harc\xe8lement, traque ou intimidation de personnes","terms.prohibited2":"Activit\xe9s frauduleuses ou ill\xe9gales","terms.prohibited3":"Collecte de donn\xe9es pour spam ou marketing non sollicit\xe9","terms.prohibited4":"Tentative de nuire \xe0 des individus ou organisations","terms.prohibited5":"Revente ou redistribution des donn\xe9es obtenues","terms.prohibited6":"Automatisation abusive ou scraping massif","terms.prohibited7":"Contournement des limites de votre abonnement","terms.ip.text":"Tous les contenus, logos, designs et fonctionnalit\xe9s de Dbs sont prot\xe9g\xe9s par le droit de la propri\xe9t\xe9 intellectuelle. Vous ne pouvez pas copier, modifier, distribuer ou exploiter commercialement notre plateforme sans autorisation \xe9crite.","terms.liability":'Dbs est fourni "tel quel". Nous ne garantissons pas:',"terms.liability1":"L'exactitude ou l'exhaustivit\xe9 des r\xe9sultats de recherche","terms.liability2":"La disponibilit\xe9 continue du service","terms.liability3":"L'absence de bugs ou d'erreurs","terms.liability.desc":"Dbs ne pourra \xeatre tenu responsable des dommages directs ou indirects r\xe9sultant de l'utilisation de la plateforme.","terms.subscription":"Les abonnements sont factur\xe9s mensuellement ou annuellement selon votre choix. Les paiements sont non remboursables, sauf dans les cas pr\xe9vus par la loi. Vous pouvez annuler votre abonnement \xe0 tout moment.","terms.suspension":"Nous nous r\xe9servons le droit de suspendre ou r\xe9silier votre compte en cas de:","terms.suspension1":"Violation de ces conditions d'utilisation","terms.suspension2":"Utilisation abusive ou ill\xe9gale de la plateforme","terms.suspension3":"Non-paiement des frais d'abonnement","terms.suspension4":"Demande des autorit\xe9s comp\xe9tentes","terms.modifications":"Nous pouvons modifier ces conditions \xe0 tout moment. Les modifications importantes seront notifi\xe9es par email. Votre utilisation continue du service apr\xe8s modification constitue votre acceptation des nouvelles conditions.","terms.law":"Ces conditions sont r\xe9gies par le droit fran\xe7ais. Tout litige sera soumis \xe0 la juridiction des tribunaux de Paris, France.","terms.contact":"Pour toute question concernant ces conditions:","terms.contact.email":"Email: legal@Dbs.io","terms.contact.address":"Adresse: 123 Rue de la S\xe9curit\xe9, 75001 Paris, France","terms.confirmation":"En utilisant Dbs, vous confirmez avoir lu, compris et accept\xe9 ces conditions d'utilisation.","security.title":"S\xe9curit\xe9 et confiance","security.badge":"L\xe9gal","security.updated":"Derni\xe8re mise \xe0 jour: 1er janvier 2026","security.section1":"1. Engagement s\xe9curit\xe9","security.section1.desc":"La s\xe9curit\xe9 est au c\u0153ur de Dbs. Nous appliquons des pratiques reconnues pour prot\xe9ger la confidentialit\xe9, l'int\xe9grit\xe9 et la disponibilit\xe9 des informations trait\xe9es par la plateforme.","security.section2":"2. Protection des donn\xe9es","security.section2.desc":"Les donn\xe9es sont chiffr\xe9es en transit et au repos. Par d\xe9faut, Dbs ne conserve pas l'historique de vos recherches, afin de limiter l'exposition des informations sensibles.","security.section3":"3. Contr\xf4les d'acc\xe8s","security.section3.point1":"Authentification renforc\xe9e et options MFA.","security.section3.point2":"Principe du moindre privil\xe8ge pour l'acc\xe8s interne.","security.section3.point3":"Revues d'acc\xe8s p\xe9riodiques.","security.section4":"4. Infrastructure et surveillance","security.section4.desc":"Notre infrastructure est durcie et surveill\xe9e en continu. Nous appliquons des mises \xe0 jour r\xe9guli\xe8res, une segmentation des services et des alertes en cas d'activit\xe9 anormale.","security.section5":"5. D\xe9veloppement s\xe9curis\xe9","security.section5.desc":"Le code est revu et test\xe9 avant chaque d\xe9ploiement. Nous suivons les d\xe9pendances, appliquons des correctifs et r\xe9duisons les risques de r\xe9gression s\xe9curit\xe9.","security.section6":"6. Gestion des incidents","security.section6.desc":"En cas d'incident, nous appliquons un processus de r\xe9ponse document\xe9, avec analyse, rem\xe9diation et communication appropri\xe9e si n\xe9cessaire.","security.section7":"7. Divulgation responsable","security.section7.desc":"Vous pouvez signaler une vuln\xe9rabilit\xe9 \xe0 security@Dbs.io. Nous analysons chaque signalement de bonne foi et communiquons sur la r\xe9solution.","security.section8":"8. Bonnes pratiques utilisateur","security.section8.point1":"Utilisez un mot de passe unique et robuste.","security.section8.point2":"Activez la MFA d\xe8s que possible.","security.section8.point3":"Ne partagez pas vos identifiants.","security.section8.point4":"V\xe9rifiez r\xe9guli\xe8rement l'activit\xe9 de votre compte.","security.section9":"9. En savoir plus","security.section9.desc":"Pour les d\xe9tails sur le traitement des donn\xe9es personnelles, consultez la Politique de confidentialit\xe9."},en:{"nav.home":"Home","nav.features":"Features","nav.pricing":"Pricing","nav.about":"About","nav.contact":"Contact","nav.tickets":"Tickets","nav.apidocs":"API Docs","nav.login":"Login","nav.register":"Register","nav.logout":"Logout","nav.profile":"Profile","nav.settings":"Settings","nav.api":"API","nav.inbox":"Inbox","nav.apiAccess":"API Access","home.hero.title":"Advanced OSINT Search Engine","home.hero.subtitle":"Find public information on the web in seconds","home.hero.description":"Detect data breaches, leaks and threats quickly and confidentially. Dbs helps individuals and organizations protect their information.","home.hero.badge":"Trusted Cybersecurity Platform","home.hero.button":"Start Searching","home.search.placeholder":"Search for an email, domain, IP...","home.search.button":"Search","home.search.popular":"Popular Searches","home.results.title":"Search Results","home.results.databases":"Databases found","home.results.download":"Download Results","home.results.noresults":"No results found","home.results.noresultstext":"No data was found for","home.credits.title":"Credits Remaining","home.error.notloggedin":"Please log in to use the search engine.","home.error.beta_only":"Searches are currently limited to beta testers.","home.error.nocredits":"Insufficient credits. Upgrade your plan.","home.error.search":"Error during search. Please try again.","home.features.section":"Features","home.features.title":"Powerful Tools for Your Research","home.features.subtitle":"Advanced features designed for cybersecurity professionals, investigators and researchers.","home.howitworks.section":"How It Works","home.howitworks.title":"Simple, Fast and Secure","home.howitworks.subtitle":"Three simple steps to discover the information you need.","home.howitworks.step1.title":"Enter Your Search","home.howitworks.step1.desc":"Enter an email, username, phone number, IP address or any other identifier in our secure search bar.","home.howitworks.step2.title":"Source Analysis","home.howitworks.step2.desc":"Dbs queries over 15 live data sources, including breach databases, social networks and public records.","home.howitworks.step3.title":"Explore Results","home.howitworks.step3.desc":"View data in an organized dashboard, correlate information, discover connections and export your findings.","home.trust.section":"Trust","home.trust.title":"Used by Security Teams Worldwide","home.trust.subtitle":"Dbs is the trusted platform for security teams, law enforcement and enterprises in over 50 countries. We offer dedicated support, custom integrations and enterprise-level features.","home.trust.gdpr":"GDPR Compliant","home.trust.audit":"Audit Trails","home.trust.support":"24/7 Support","home.trust.sla":"Guaranteed SLA","home.trust.orgs":"Organizations","home.trust.users":"Active Users","home.trust.searches":"Searches/Month","home.trust.rating":"Average Rating","home.trust.contact":"Contact Sales Team","home.cta.title":"Ready to Secure Your Information?","home.cta.subtitle":"Join thousands of professionals who trust Dbs for their OSINT and cybersecurity research.","home.cta.button1":"Get Started Free","home.cta.button2":"Request a Demo","features.header.badge":"Features","features.header.title":"Powerful Tools for OSINT","features.header.subtitle":"Discover all the capabilities of Dbs for your research and investigations.","features.violations":"Data Breach Search","features.violations.desc":"Access billions of records from known data breaches. Instantly detect if credentials have been compromised.","features.osint":"Advanced OSINT","features.osint.desc":"Search social networks, forums and public platforms for a complete view of a digital identity.","features.darkweb":"Dark Web Search","features.darkweb.desc":"Safely explore the dark web. Find information on potential threats and exposed data.","features.realtime":"Real-time Results","features.realtime.desc":"Our high-performance infrastructure provides instant results. No waiting, immediate answers.","features.encryption":"End-to-End Encryption","features.encryption.desc":"All your searches are encrypted. Your data remains private and secure. We don't store your queries.","features.api":"REST API","features.api.desc":"Integrate Dbs into your own tools and workflows. Documented API, code examples, and technical support.","features.section.types":"Search Types","features.types.title":"Search by any identifier","features.types.desc":"Dbs supports a wide range of search types to meet all your needs.","features.email":"Email","features.email.desc":"Search by email address to find breaches, associated accounts and public information.","features.username":"Username","features.username.desc":"Find all accounts and profiles associated with a username across different platforms.","features.phone":"Phone Number","features.phone.desc":"Identify services and accounts linked to a phone number, including data leaks.","features.ip":"IP Address","features.ip.desc":"Analyze an IP address to get geolocation, hosting provider and reputation information.","features.domain":"Domain","features.domain.desc":"Explore WHOIS information, DNS, SSL certificates and history of a domain name.","features.discord":"Discord ID","features.discord.desc":"Search by Discord ID to find associated activity and servers.","features.sources":"Data Sources","features.sources.title":"15+ sources queried in parallel","features.sources.desc":"We aggregate data from multiple sources to provide you with the most complete results.","features.breaches":"Breach Databases","features.breaches.count":"10B+ records","features.social":"Social Networks","features.social.count":"20+ platforms","features.dark":"Dark Web","features.dark.count":"Forums & Markets","features.public":"Public Records","features.public.count":"WHOIS, DNS, etc.","features.pastes":"Pastes","features.pastes.count":"Pastebin & Similar","features.security":"Security","features.security.title":"Your privacy is our priority","features.security.desc":"We take security seriously. All data is encrypted in transit and at rest. We don't store your searches and we comply with data protection regulations.","features.aes256":"AES-256 Encryption","features.gdpr":"GDPR Compliant","features.zerologo":"Zero-log policy","features.audit":"Security Audit","features.encryption.type":"Encryption","features.cta.button":"Get Started","features.cta.text":"Ready to explore?","features.cta.subtitle":"Start for free and discover the power of Dbs for your OSINT research.","pricing.header.badge":"Pricing","pricing.header.title":"Choose Your Plan","pricing.header.subtitle":"Flexible options for all your OSINT needs.","pricing.plan.free":"Free","pricing.plan.beginner":"Beginner","pricing.plan.premium":"premium","pricing.plan.pro":"Pro","pricing.price.beginner":"9.99","pricing.price.pro":"24.99","pricing.price.premium":"200","pricing.price.period":"/lifetime","pricing.price.crypto":"Single payment in crypto","pricing.price.advanced":"For advanced users","pricing.price.ultimate":"Ultimate access","pricing.features":"Features","pricing.button.buy":"Buy","pricing.button.select":"Select This Plan","pricing.button.contact":"Contact Us","pricing.payment.title":"Payment in Litecoin (LTC)","pricing.payment.desc":'All payments are made in Litecoin to guarantee your anonymity and transaction security. After purchase, create a ticket in the "Paid Access" category to activate your plan.',"pricing.searches.per.day":"searches/day","pricing.feature.results":"Complete Results","pricing.feature.support":"24/7 Support","pricing.feature.osint":"OSINT Search","pricing.feature.api":"API Access","pricing.feature.intelx":"IntelX","pricing.faq.title":"Frequently Asked Questions","pricing.faq.q1":"Can I cancel my subscription?","pricing.faq.a1":"Yes, you can cancel at any time.","pricing.faq.payment.title":"How does payment work?","pricing.faq.payment.desc":'Click "Buy", create a ticket in the "Paid Access" category and select your plan. We will send you an LTC address for payment.',"pricing.faq.lifetime.title":'What is "lifetime"?',"pricing.faq.lifetime.desc":"A single payment, lifetime access. No monthly subscription, no hidden fees. You pay once and keep your plan forever.","pricing.faq.osint.title":"What is OSINT Search?","pricing.faq.osint.desc":"OSINT Search gives access to advanced databases and exclusive sources for deeper searches.","pricing.faq.activation.title":"How long to activate my plan?","pricing.faq.activation.desc":"Once payment is confirmed, your plan is activated within minutes. Our team is available 24/7.","pricing.cta.title":"Ready to Level Up?","pricing.cta.subtitle":"Unlock the full potential of Dbs with a premium plan.","pricing.cta.button.beginner":"Start with Beginner","pricing.cta.button.premium":"Choose premium","about.header.badge":"About","about.header.title":"About Dbs","about.header.subtitle":"Your trusted platform for OSINT.","about.mission.title":"Our Mission","about.mission.text":"To provide powerful and accessible OSINT tools to everyone.","about.values.title":"Our Values","about.values.subtitle":"What Guides Us","about.team.title":"Our Team","about.team.subtitle":"Cybersecurity and OSINT Experts","about.team.description":"The best teams behind Dbs","about.join.title":"Join Us","about.join.subtitle":"Start your OSINT journey today","about.users":"Registered Users","contact.header.badge":"Contact","contact.header.title":"Contact Us","contact.header.subtitle":"Have questions? We are here to help.","contact.notloggedin":"You must be logged in to create a ticket.","contact.form.subject":"Subject","contact.form.message":"Message","contact.form.category":"Category","contact.form.category.contact":"Contact","contact.form.category.acces":"Paid Access","contact.form.button":"Send","contact.form.required":"Please fill in all fields.","contact.form.selectplan":"Please select a plan.","contact.form.success":"Ticket created successfully!","contact.form.error":"Error creating ticket. Please try again.","contact.login.required":"You must be logged in to send a message.","contact.faq.title":"Frequently Asked Questions","tickets.header.badge":"Support","tickets.header.title":"My Tickets","tickets.header.subtitle":"Manage your support tickets.","tickets.header.owner":"Manage all user tickets","tickets.header.user":"View your support tickets","tickets.filter.all":"All","tickets.filter.open":"Open","tickets.filter.closed":"Closed","tickets.filter.deleteclosed":"Delete closed tickets","tickets.filter.newticket":"New Ticket","tickets.new":"New Ticket","tickets.open":"Open","tickets.closed":"Closed","tickets.status":"Status","tickets.empty":"You haven't created any tickets yet.","tickets.empty.title":"No Tickets","tickets.empty.all":"You haven't created any tickets yet.","tickets.empty.open":"No open tickets.","tickets.empty.closed":"No closed tickets.","tickets.empty.button":"Create Ticket","tickets.created":"Created on","tickets.category":"Category","tickets.subject":"Subject","tickets.close":"Close Ticket","tickets.close.button":"Close Ticket","tickets.close.confirm":"Are you sure you want to close this ticket?","tickets.delete.button":"Delete Message","tickets.delete.confirm":"Are you sure you want to delete this message?","tickets.confirm.close":"Are you sure you want to close this ticket?","tickets.message.placeholder":"Write your reply...","tickets.message.send":"Send","tickets.message.upload":"Upload Image","tickets.message.sent":"Message sent","tickets.message.error":"Error sending message","apidocs.header.badge":"API Documentation","apidocs.header.title":"Dbs API Documentation","apidocs.header.subtitle":"Integrate the power of Dbs into your application.","apidocs.access.title":"Restricted Access","apidocs.access.desc":"This documentation is reserved for premium users.","apidocs.introduction":"Introduction","apidocs.authentication":"Authentication","apidocs.endpoints":"Endpoints","apidocs.examples":"Examples","apidocs.search":"Search","apidocs.credits":"Credits","apidocs.apikey":"Your API Key","apidocs.copy":"Copy","apidocs.copied":"Copied!","footer.brand.desc":"Cybersecurity platform offering unified OSINT and dark web search capabilities.","footer.product":"Product","footer.features":"Features","footer.pricing":"Pricing","footer.api":"API Documentation","footer.changelog":"Changelog","footer.company":"Company","footer.about":"About","footer.careers":"Careers","footer.blog":"Blog","footer.support":"Support","footer.legal":"Legal","footer.privacy":"Privacy Policy","footer.terms":"Terms of Service","footer.gdpr":"GDPR","footer.security":"Security","footer.contact":"Contact","footer.discord":"Discord","footer.telegram":"Telegram","footer.copyright":"Dbs #2025","footer.secure":"Secure","footer.gdpr_compliant":"GDPR","footer.rights":"All rights reserved","about.mission":"Who We Are?","about.mission.text1":"Dbs was born from the conviction that cybersecurity tools should not be reserved for large enterprises. Our team of passionate information security experts created an accessible, powerful and privacy-respecting platform.","about.mission.text2":"We believe that every individual and organization should have access to the tools they need to protect their digital information. That's why we developed Dbs: a complete OSINT solution that combines power with ease of use.","about.mission.text3":"Based in Europe, we respect the highest standards of data protection and are committed to ethical use of our tools.","about.year":"Year Founded","about.countries":"Countries","about.members":"Team Members","about.security":"Security First","about.security.desc":"Data protection is at the heart of everything we do. We apply the best security practices at every level.","about.transparency":"Transparency","about.transparency.desc":"We are open about our practices, our data sources and how we handle information.","about.ethics":"Ethics","about.ethics.desc":"We are committed to responsible use of our tools and refuse any malicious use of our platform.","about.accessibility":"Accessibility","about.accessibility.desc":"We believe everyone should have access to professional-quality security tools.","about.innovation":"Innovation","about.innovation.desc":"We continuously invest in R&D to stay at the forefront of OSINT technology.","about.support":"Support","about.support.desc":"We are committed to providing exceptional support to all our users, regardless of their size.","contact.login.title":"Login Required","contact.login.button":"Login","contact.success.title":"Ticket Created Successfully!","contact.success.desc":"Your ticket has been created. You can track its status in the Tickets section.","contact.success.redirect":"Redirecting to your tickets...","contact.form.plan.beginner":"Beginner ($3)","contact.form.plan.premium":"premium ($7)","contact.form.message.template":"Hello,\n\nI would like to purchase the {{plan}} plan.\n\nPlease provide me with the LTC address for payment.","contact.faq.q1":"How can I reset my password?","contact.faq.a1":'Click "Forgot Password" on the login page. You will receive an email with a link to create a new password.',"contact.faq.q2":"What types of searches can I perform?","contact.faq.a2":"Dbs supports searches by email, username, phone number, IP address, domain, and social media identifiers like Discord.","contact.faq.q3":"Are the results confidential?","contact.faq.a3":"Yes, all your searches are encrypted and we don't store your query history. Your privacy is our priority.","contact.faq.q4":"How does LTC payment work?","contact.faq.a4":'Once you create a ticket in the "Paid Access" category, we will send you an LTC address. After payment confirmation, your plan will be activated immediately.',"tickets.category.contact":"Contact","tickets.category.acces_payant":"Paid Access","tickets.loading":"Loading...","tickets.nologin":"You must be logged in to view your tickets.","tickets.owner.only":"Only the owner can perform this action.","tickets.grant.access":"Grant Access","tickets.reset.credits":"Reset Credits","tickets.image.uploading":"Uploading...","tickets.image.error":"Error uploading image.","tickets.image.size":"Image must be less than 5MB.","login.title":"Login","login.subtitle":"Access your Dbs account","login.email":"Email Address","login.password":"Password","login.remember":"Remember me","login.button":"Log In","login.loading":"Logging in...","login.success":"Login successful!","login.error":"Login error","login.forgot":"Forgot password?","login.otp.title":"Enter Verification Code","login.otp.subtitle":"Enter your email to receive a login code","login.otp.code":"Verification Code","login.otp.button":"Verify","login.otp.error":"Invalid or expired code","login.otp.sent":"OTP Code sent! Check your inbox (and spam folder).","login.noaccount":"Don't have an account?","login.signup":"Sign up here","login.email_label":"Email Address","login.forgot_password":"Forgot Password","login.send_code":"Send Code","login.otp_sent":"A code has been sent to","login.change_email":"Change Email","register.title":"Register","register.subtitle":"Create your Dbs account","register.email":"Email","register.email_label":"Email Address","register.username":"Username","register.password":"Password","register.confirmpass":"Confirm Password","register.button":"Register","register.loading":"Creating account...","register.success":"Account created successfully!","register.error":"Registration error","register.passwordmismatch":"Passwords do not match","register.hasaccount":"Already have an account?","register.login":"Log in here","register.verification_sent":"Verification Email Sent!","register.verification_message":"A verification email has been sent to your email address.","register.check_spam":"(Check your spam folder if you don't see the email)","register.error.passwordmismatch":"Passwords do not match","register.error.passwordmin":"Password must be at least 8 characters long","register.error.signup":"Error during registration","home.search.connection_error":"Connection error. Please try again.","home.search.popular_tags":"Popular Searches","home.search.email_tag":"Email","home.search.username_tag":"Username","home.search.discord_tag":"Discord ID","home.search.ip_tag":"IP Address","home.search.domain_tag":"Domain","browser.notice.title":"Recommendation","browser.notice.subtitle":"Optimize your experience","browser.notice.message":"For a better experience and optimal site performance, we recommend using LibreWolf, a privacy-focused browser.","browser.notice.button":"Install LibreWolf","browser.notice.dismiss":"Don't show this message again","privacy.title":"Privacy Policy","privacy.badge":"Legal","privacy.updated":"Last updated: January 1, 2024","privacy.intro":"At Dbs, we take the protection of your personal data very seriously. This privacy policy explains how we collect, use, store and protect your information when you use our platform.","privacy.collected":"Data Collected","privacy.usage":"Data Usage","privacy.searches":"Searches and Privacy","privacy.sharing":"Data Sharing","privacy.security":"Data Security","gdpr.title":"GDPR & Data Protection","gdpr.badge":"Legal","gdpr.updated":"Last updated: January 1, 2026","gdpr.section1":"1. Objective and Scope","gdpr.section1.desc":"This page presents the GDPR principles applied by Dbs for the collection and processing of personal data related to the use of the platform (OSINT, breach detection and support).","gdpr.section2":"2. Data Controller","gdpr.section2.desc":"Dbs is responsible for the processing of personal data processed in the context of the service.","gdpr.section2.contact":"Contact: privacy@Dbs.io","gdpr.section2.dpo":"DPO: dpo@Dbs.io","gdpr.section3":"3. Legal Bases for Processing","gdpr.section3.contract":"Contract Execution: account creation, platform access and billing.","gdpr.section3.consent":"Consent: analytical cookies and non-essential communications.","gdpr.section3.legal":"Legal Obligation: retention of billing data.","gdpr.section3.legitimate":"Legitimate Interest: security, abuse prevention and service improvement.","gdpr.section4":"4. Data Processed and Minimization","gdpr.section4.desc":"We collect only the data necessary to provide the service and apply a minimization policy. For details on data and cookies, see the Privacy Policy.","gdpr.section5":"5. Purposes","gdpr.section5.point1":"Provide, secure and improve the platform.","gdpr.section5.point2":"Manage accounts, subscriptions and payments.","gdpr.section5.point3":"Ensure customer support and response to requests.","gdpr.section5.point4":"Prevent fraud, abuse and unauthorized uses.","gdpr.section5.point5":"Comply with legal and regulatory obligations.","gdpr.section6":"6. Subprocessors and Transfers","gdpr.section6.desc":"We work with technical subprocessors (hosting, payment, transactional emails) bound by confidentiality clauses. If a transfer outside the EEA is necessary, we implement appropriate safeguards (e.g., standard contractual clauses).","gdpr.section7":"7. Retention Period","gdpr.section7.desc":"Data is retained for the duration of the active account, then archived or deleted according to legal deadlines. Details are in the Privacy Policy.","gdpr.section8":"8. Your Rights","gdpr.section8.point1":"Right of access, rectification and erasure.","gdpr.section8.point2":"Right to restrict processing.","gdpr.section8.point3":"Right to object to processing.","gdpr.section8.point4":"Right to data portability.","gdpr.section9":"9. Exercising Your Rights","gdpr.section9.desc":"You can exercise your rights at any time by writing to privacy@Dbs.io. We respond within a maximum of 30 days, after identity verification if necessary.","gdpr.section10":"10. Data Security","gdpr.section10.desc":"We apply recognized technical and organizational measures: encryption in transit and at rest, access controls, logging and regular audits.","gdpr.section11":"11. Supervisory Authority","gdpr.section11.desc":"If you believe your rights are not respected, you can contact the competent supervisory authority (CNIL: www.cnil.fr).","terms.title":"Terms of Service","terms.badge":"Legal","terms.updated":"Last updated: January 1, 2024","terms.acceptance":"By accessing and using Dbs, you agree to be bound by these Terms of Service. If you do not accept these terms, please do not use our service.","terms.section1":"1. Acceptance of Terms","terms.section2":"2. Service Description","terms.section3":"3. Registration Terms","terms.section4":"4. Acceptable Use","terms.section5":"5. Prohibited Uses","terms.section6":"6. Intellectual Property","terms.section7":"7. Limitation of Liability","terms.section8":"8. Subscriptions and Payments","terms.section9":"9. Suspension and Termination","terms.section10":"10. Modifications of Terms","terms.section11":"11. Applicable Law","terms.section12":"12. Contact","terms.service.desc":"Dbs is a cybersecurity platform offering OSINT (Open Source Intelligence) search services and dark web monitoring. Our services allow users to search publicly available information and data from known breaches.","terms.registration":"To use Dbs, you must:","terms.reg1":"Be at least 18 years old","terms.reg2":"Provide accurate information during registration","terms.reg3":"Maintain confidentiality of your credentials","terms.reg4":"Be responsible for all activities on your account","terms.acceptable":"You agree to use Dbs only for legal and ethical purposes, including:","terms.acceptable1":"Verify your own personal data","terms.acceptable2":"Authorized security research","terms.acceptable3":"Legitimate investigations in a professional context","terms.acceptable4":"Protection against cybersecurity threats","terms.prohibited":"It is strictly prohibited to use Dbs for:","terms.prohibited1":"Harassment, stalking or intimidation of individuals","terms.prohibited2":"Fraudulent or illegal activities","terms.prohibited3":"Data collection for spam or unsolicited marketing","terms.prohibited4":"Attempting to harm individuals or organizations","terms.prohibited5":"Resale or redistribution of obtained data","terms.prohibited6":"Abusive automation or mass scraping","terms.prohibited7":"Circumventing your subscription limits","terms.ip.text":"All content, logos, designs and features of Dbs are protected by intellectual property rights. You may not copy, modify, distribute or commercially exploit our platform without written permission.","terms.liability":'Dbs is provided "as is". We do not warrant:',"terms.liability1":"The accuracy or completeness of search results","terms.liability2":"Continuous availability of the service","terms.liability3":"The absence of bugs or errors","terms.liability.desc":"Dbs shall not be liable for any direct or indirect damages resulting from use of the platform.","terms.subscription":"Subscriptions are billed monthly or annually according to your choice. Payments are non-refundable, except as required by law. You may cancel your subscription at any time.","terms.suspension":"We reserve the right to suspend or terminate your account in case of:","terms.suspension1":"Violation of these Terms of Service","terms.suspension2":"Abusive or illegal use of the platform","terms.suspension3":"Non-payment of subscription fees","terms.suspension4":"Request from competent authorities","terms.modifications":"We may modify these terms at any time. Significant changes will be notified by email. Your continued use of the service after modification constitutes your acceptance of the new terms.","terms.law":"These terms are governed by French law. Any dispute will be subject to the jurisdiction of the courts of Paris, France.","terms.contact":"For any questions about these terms:","terms.contact.email":"Email: legal@Dbs.io","terms.contact.address":"Address: 123 Rue de la S\xe9curit\xe9, 75001 Paris, France","terms.confirmation":"By using Dbs, you confirm that you have read, understood and accepted these Terms of Service.","security.title":"Security & Trust","security.badge":"Legal","security.updated":"Last updated: January 1, 2026","security.section1":"1. Security Commitment","security.section1.desc":"Security is at the heart of Dbs. We apply recognized practices to protect the confidentiality, integrity and availability of information processed by the platform.","security.section2":"2. Data Protection","security.section2.desc":"Data is encrypted in transit and at rest. By default, Dbs does not retain your search history to limit exposure of sensitive information.","security.section3":"3. Access Controls","security.section3.point1":"Strengthened authentication and MFA options.","security.section3.point2":"Principle of least privilege for internal access.","security.section3.point3":"Periodic access reviews.","security.section4":"4. Infrastructure and Monitoring","security.section4.desc":"Our infrastructure is hardened and continuously monitored. We apply regular updates, service segmentation and alerts for unusual activity.","security.section5":"5. Secure Development","security.section5.desc":"Code is reviewed and tested before each deployment. We track dependencies, apply patches and reduce security regression risks.","security.section6":"6. Incident Management","security.section6.desc":"In case of incident, we apply a documented response process, with analysis, remediation and appropriate communication if necessary.","security.section7":"7. Responsible Disclosure","security.section7.desc":"You can report a vulnerability to security@Dbs.io. We analyze each report in good faith and communicate on resolution.","security.section8":"8. User Best Practices","security.section8.point1":"Use a unique and strong password.","security.section8.point2":"Enable MFA as soon as possible.","security.section8.point3":"Do not share your credentials.","security.section8.point4":"Regularly check your account activity.","security.section9":"9. Learn More","security.section9.desc":"For details on personal data processing, see the Privacy Policy."}},Uo=({children:e})=>{var t=i(bn.useState(()=>"undefined"!=typeof window&&localStorage.getItem("Dbs-language")||"fr"),2),r=t[0],n=t[1]
return hn.jsx(zo.Provider,{value:{language:r,setLanguage:e=>{n(e),"undefined"!=typeof window&&localStorage.setItem("Dbs-language",e)},t:e=>Do[r][e]||e},children:e})},$o=bn.createContext(null),Fo=({children:e})=>{var t=i(bn.useState(!0),2),n=t[0],a=t[1],o=i(bn.useState(null),2),l=o[0],c=o[1],u=i(bn.useState(Date.now()),2),d=u[0],p=u[1]
bn.useEffect(()=>{var e=(()=>{for(var e=[navigator.userAgent,navigator.language,screen.width,screen.height,screen.colorDepth,(new Date).getTimezoneOffset(),navigator.hardwareConcurrency||0].join("|"),t=0,r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t&=t
return Math.abs(t).toString(36)})()
c(e)
var t=sessionStorage.getItem("sn-fp")
t&&t!==e?a(!1):sessionStorage.setItem("sn-fp",e)},[]),bn.useEffect(()=>{var e=()=>{p(Date.now())},t=["mousedown","keydown","touchstart","scroll"]
return t.forEach(t=>{window.addEventListener(t,e,{passive:!0})}),()=>{t.forEach(t=>{window.removeEventListener(t,e)})}},[]),bn.useEffect(()=>{var e=function(){var e=s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:if(!(Date.now()-d>18e5)){e.n=2
break}return e.n=1,No.auth.signOut()
case 1:window.location.href="/login?reason=timeout"
case 2:return e.a(2)}},e)}))
return function(){return e.apply(this,arguments)}}(),t=setInterval(e,6e4)
return()=>clearInterval(t)},[d]),bn.useEffect(()=>{var e=function(){var e=s(r().m(function e(){var t,n,s
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,No.auth.getSession()
case 1:if(t=e.v,n=t.data.session,!t.error&&n){e.n=2
break}return a(!1),e.a(2)
case 2:if(!(s=n.expires_at)){e.n=3
break}if(!(1e3*s-Date.now()<3e5)){e.n=3
break}return e.n=3,No.auth.refreshSession()
case 3:a(!0),e.n=5
break
case 4:e.p=4,e.v,a(!1)
case 5:return e.a(2)}},e,null,[[0,4]])}))
return function(){return e.apply(this,arguments)}}()
e()
var t=setInterval(e,3e5)
return()=>clearInterval(t)},[]),bn.useEffect(()=>{var e=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{if(e instanceof HTMLElement&&("SCRIPT"!==e.tagName||e.hasAttribute("data-safe")||e.remove(),"IFRAME"===e.tagName)){var t=e.getAttribute("src")||"";["challenges.cloudflare.com"].some(e=>t.includes(e))||e.remove()}})})})
return e.observe(document.body,{childList:!0,subtree:!0}),()=>e.disconnect()},[]),bn.useEffect(()=>{var e=e=>"F12"===e.key||e.ctrlKey&&e.shiftKey&&["I","J","C"].includes(e.key.toUpperCase())||e.ctrlKey&&"U"===e.key.toUpperCase()?(e.preventDefault(),!1):void 0
return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),bn.useEffect(()=>{var e=setInterval(()=>{window.outerWidth,window.innerWidth,window.outerHeight,window.innerHeight},1e3)
return()=>clearInterval(e)},[])
var f=bn.useCallback(()=>{},[]),h=bn.useCallback(s(r().m(function e(){return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,No.auth.refreshSession()
case 1:if(!e.v.error){e.n=2
break}return a(!1),e.a(2,!1)
case 2:return a(!0),e.a(2,!0)
case 3:return e.p=3,e.v,a(!1),e.a(2,!1)}},e,null,[[0,3]])})),[])
return hn.jsx($o.Provider,{value:{isSecure:n,sessionFingerprint:l,lastActivity:d,reportSuspiciousActivity:f,refreshSession:h},children:e})},Bo=()=>{},Wo=()=>{},Vo=["f479668f-4129-4c67-91bb-decba5a0e804","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","3e45559e-299c-4d49-9fe8-b2c77237d2c9","deee5dc2-e37e-48ba-8da2-1fb5945cd235"],qo=["f479668f-4129-4c67-91bb-decba5a0e804","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","3e45559e-299c-4d49-9fe8-b2c77237d2c9","deee5dc2-e37e-48ba-8da2-1fb5945cd235"],Mo=e=>{var t=localStorage.getItem(`user_plan_${e}`)
if(t)try{return JSON.parse(t)}catch(r){return null}return null},Ho=(e,t)=>{localStorage.setItem(`user_plan_${e}`,JSON.stringify(t))},Ko=e=>{if(null!=e&&e.credits_per_day&&e.credits_per_day>0)return e.credits_per_day
switch(null==e?void 0:e.plan){case"beginner":return 100
case"pro":return 500
case"premium":return 5e3
case"beta":return 30
case"blocked":return 0
case"free":return 10
default:return 50}},Yo=({onClose:e})=>{var t,n,a,o,l=Oo(),c=l.user,u=l.profile,d=i(bn.useState(!1),2),p=d[0],f=d[1],h=i(bn.useState(null!==(t=null==u?void 0:u.avatar_url)&&void 0!==t?t:null),2),m=h[0],g=h[1],b=i(bn.useState(!1),2),v=b[0],y=b[1],x=i(bn.useState(null),2),w=x[0],k=x[1],j=i(bn.useState(()=>null!=c&&c.id?Mo(c.id):null),2),S=j[0],_=j[1],N=i(bn.useState([]),2),E=N[0],T=N[1],C=Vo.includes((null==c?void 0:c.id)||"")||E.includes("founder"),R=qo.includes((null==c?void 0:c.id)||"")||E.includes("promoter"),P="f479668f-4129-4c67-91bb-decba5a0e804"===(null==c?void 0:c.id)||E.includes("developer"),A=E.includes("bug_hunter"),O=E.includes("buyer"),I=E.includes("early"),z=E.includes("vip"),L=E.includes("partner"),D=E.includes("staff"),U=E.includes("beta_tester"),$=E.includes("premium"),F=(new Date).toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})
bn.useEffect(()=>{var e
g(null!==(e=null==u?void 0:u.avatar_url)&&void 0!==e?e:null)},[null==u?void 0:u.id,null==u?void 0:u.avatar_url]),bn.useEffect(()=>{var e=function(){var e=s(r().m(function e(){var t,n,a
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(null!=c&&c.id){e.n=1
break}return T([]),e.a(2)
case 1:return e.p=1,e.n=2,No.from("user_badges").select("badge").eq("user_id",c.id)
case 2:t=e.v,n=t.data,!t.error&&n&&(a=n.map(e=>e.badge),T(a)),e.n=4
break
case 3:e.p=3,e.v
case 4:return e.a(2)}},e,null,[[1,3]])}))
return function(){return e.apply(this,arguments)}}()
e()},[null==c?void 0:c.id])
var B=function(){var e=s(r().m(function e(t){var n,a,s,i,o,l,d,p,f,h,m,b
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if((s=null===(n=t.target.files)||void 0===n?void 0:n[0])&&null!=c&&c.id){e.n=1
break}return e.a(2)
case 1:if(k(null),!(s.size>3145728)){e.n=2
break}return k("Image too large (max 3MB)"),t.target.value="",e.a(2)
case 2:return i=(null===(a=s.name.split(".").pop())||void 0===a?void 0:a.toLowerCase())||"jpg",o=`${c.id}/avatar-${Date.now()}.${i}`,y(!0),e.p=3,e.n=4,No.storage.from("avatars").upload(o,s,{cacheControl:"3600",upsert:!0,contentType:s.type||"image/jpeg"})
case 4:if(l=e.v,!(d=l.error)){e.n=5
break}return k(d.message||"Upload failed"),Bo(),e.a(2)
case 5:return p=No.storage.from("avatars").getPublicUrl(o),f=p.data,h=f.publicUrl,e.n=6,No.from("profiles").update({avatar_url:h}).eq("id",c.id)
case 6:if(!e.v.error){e.n=7
break}return k("Profile update failed"),Bo(),e.a(2)
case 7:g(h),u&&(u.avatar_url=h),e.n=9
break
case 8:e.p=8,b=e.v,m=b instanceof Error?b.message:"Unexpected error during upload",k(m)
case 9:return e.p=9,y(!1),t.target.value="",e.f(9)
case 10:return e.a(2)}},e,null,[[3,8,9,10]])}))
return function(t){return e.apply(this,arguments)}}()
return bn.useEffect(()=>{var e=function(){var e=s(r().m(function e(){var t,n,a,s,i,o,l
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(null!=c&&c.id){e.n=1
break}return e.a(2)
case 1:return(t=Mo(c.id))&&!S&&_(t),e.p=2,e.n=3,No.from("user_plans").select("plan, credits_per_day").eq("user_id",c.id).maybeSingle()
case 3:n=e.v,(a=n.data)?(s=(e=>{switch(null===(e=a.plan)||void 0===e?void 0:e.toLowerCase()){case"beginner":return"beginner"
case"pro":return"pro"
case"premium":return"premium"
case"beta":return"beta"
default:return"free"}})(),i={plan:s,credits_per_day:Ko({plan:s,credits_per_day:a.credits_per_day})},_(i),Ho(c.id,i)):(o={plan:"free",credits_per_day:Ko({plan:"free",credits_per_day:10})},S||_(o)),e.n=5
break
case 4:e.p=4,e.v,S||(l=null!=t?t:{plan:"free",credits_per_day:Ko({plan:"free",credits_per_day:10})},_(l))
case 5:return e.a(2)}},e,null,[[2,4]])}))
return function(){return e.apply(this,arguments)}}()
e()},[null==c?void 0:c.id]),hn.jsx("div",{className:"settings-overlay",onClick:e,children:hn.jsxs("div",{className:"settings-modal",onClick:e=>e.stopPropagation(),children:[hn.jsxs("div",{className:"settings-header",children:[hn.jsxs("h2",{children:[hn.jsx("i",{className:"fas fa-cog"})," Account Settings"]}),hn.jsx("button",{className:"settings-close",onClick:e,children:hn.jsx("i",{className:"fas fa-times"})})]}),hn.jsxs("div",{className:"settings-content",children:[hn.jsxs("div",{className:"settings-avatar",children:[hn.jsxs("div",{className:"avatar-wrapper",children:[hn.jsx("div",{className:"avatar-circle",style:{position:"relative",overflow:"hidden"},children:m?hn.jsx("img",{src:m,alt:"Avatar",style:{width:"100%",height:"100%",objectFit:"cover"}}):hn.jsx("i",{className:"fas fa-user"})}),hn.jsxs("label",{className:"avatar-upload-btn",title:"Update avatar",children:[hn.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/jpg,image/webp",onChange:B,disabled:v}),hn.jsx("i",{className:"fas fa-pen "+(v?"fa-spin":"")})]})]}),w&&hn.jsx("p",{style:{color:"#ff6b6b",marginTop:"6px",fontSize:"0.85rem"},children:w}),!w&&hn.jsx("p",{style:{color:"var(--text-muted)",marginTop:"6px",fontSize:"0.85rem"},children:"JPG/PNG/WebP \xb7 max 3MB"}),hn.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"10px",justifyContent:"center",flexWrap:"wrap"},children:[C&&hn.jsxs("div",{className:"founder-badge-wrapper",style:{position:"relative"},children:[hn.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #FFD700",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(255, 215, 0, 0.5), 0 0 15px rgba(255, 215, 0, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:hn.jsx("i",{className:"fas fa-crown",style:{fontSize:"0.55rem",color:"#FFD700",filter:"drop-shadow(0 0 3px rgba(255, 215, 0, 0.8))"}})}),hn.jsxs("div",{className:"founder-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #FFD700, #FFA500)",color:"#1a1a2e",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 215, 0, 0.5)",pointerEvents:"none"},children:["Fondateur",hn.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #FFA500"}})]})]}),P&&hn.jsxs("div",{className:"dev-badge-wrapper",style:{position:"relative"},children:[hn.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #00d4ff",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(0, 212, 255, 0.5), 0 0 15px rgba(0, 212, 255, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:hn.jsx("i",{className:"fas fa-code",style:{fontSize:"0.5rem",color:"#00d4ff",filter:"drop-shadow(0 0 3px rgba(0, 212, 255, 0.8))"}})}),hn.jsxs("div",{className:"dev-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #00d4ff, #0099cc)",color:"#1a1a2e",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 212, 255, 0.5)",pointerEvents:"none"},children:["D\xe9veloppeur",hn.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #0099cc"}})]})]}),R&&hn.jsxs("div",{className:"promoter-badge-wrapper",style:{position:"relative"},children:[hn.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #a855f7",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(168, 85, 247, 0.5), 0 0 15px rgba(168, 85, 247, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:hn.jsx("i",{className:"fas fa-bullhorn",style:{fontSize:"0.45rem",color:"#a855f7",filter:"drop-shadow(0 0 3px rgba(168, 85, 247, 0.8))"}})}),hn.jsxs("div",{className:"promoter-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #a855f7, #7c3aed)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(168, 85, 247, 0.5)",pointerEvents:"none"},children:["Promoteur",hn.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #7c3aed"}})]})]}),I&&hn.jsxs("div",{className:"early-badge-wrapper",style:{position:"relative"},children:[hn.jsx("div",{className:"early-badge-icon",style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #e0e0e0",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.2)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:hn.jsx("i",{className:"fas fa-eye",style:{fontSize:"0.55rem",color:"#e0e0e0",filter:"drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))"}})}),hn.jsxs("div",{className:"early-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #e0e0e0, #ffffff)",color:"#1a1a2e",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.3)",pointerEvents:"none"},children:["Early User",hn.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #ffffff"}})]})]}),O&&hn.jsxs("div",{className:"buyer-badge-wrapper",style:{position:"relative"},children:[hn.jsx("div",{className:"buyer-badge-icon",style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #ff6b9d",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(255, 107, 157, 0.5), 0 0 15px rgba(255, 107, 157, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:hn.jsx("i",{className:"fas fa-money-bill-wave",style:{fontSize:"0.45rem",color:"#ff6b9d",filter:"drop-shadow(0 0 3px rgba(255, 107, 157, 0.8))"}})}),hn.jsxs("div",{className:"buyer-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #ff6b9d, #c44569)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 107, 157, 0.5)",pointerEvents:"none"},children:["Buyer",hn.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #c44569"}})]})]}),A&&hn.jsxs("div",{className:"bughunter-badge-wrapper",style:{position:"relative"},children:[hn.jsx("div",{className:"bughunter-badge-icon",style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #51cf66",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(81, 207, 102, 0.5), 0 0 15px rgba(81, 207, 102, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:hn.jsx("i",{className:"fas fa-bug",style:{fontSize:"0.5rem",color:"#51cf66",filter:"drop-shadow(0 0 3px rgba(81, 207, 102, 0.8))"}})}),hn.jsxs("div",{className:"bughunter-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #51cf66, #37b24d)",color:"#1a1a2e",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(81, 207, 102, 0.5)",pointerEvents:"none"},children:["Bug Hunter",hn.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #37b24d"}})]})]}),z&&hn.jsxs("div",{className:"vip-badge-wrapper",style:{position:"relative"},children:[hn.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #ffd700",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(255, 215, 0, 0.5), 0 0 15px rgba(255, 215, 0, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:hn.jsx("i",{className:"fas fa-gem",style:{fontSize:"0.5rem",color:"#ffd700",filter:"drop-shadow(0 0 3px rgba(255, 215, 0, 0.8))"}})}),hn.jsxs("div",{className:"vip-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #ffd700, #ffb700)",color:"#1a1a2e",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 215, 0, 0.5)",pointerEvents:"none"},children:["VIP",hn.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #ffb700"}})]})]}),L&&hn.jsxs("div",{className:"partner-badge-wrapper",style:{position:"relative"},children:[hn.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #4dabf7",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(77, 171, 247, 0.5), 0 0 15px rgba(77, 171, 247, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:hn.jsx("i",{className:"fas fa-handshake",style:{fontSize:"0.45rem",color:"#4dabf7",filter:"drop-shadow(0 0 3px rgba(77, 171, 247, 0.8))"}})}),hn.jsxs("div",{className:"partner-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #4dabf7, #339af0)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(77, 171, 247, 0.5)",pointerEvents:"none"},children:["Partner",hn.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #339af0"}})]})]}),D&&hn.jsxs("div",{className:"staff-badge-wrapper",style:{position:"relative"},children:[hn.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #ff6b6b",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(255, 107, 107, 0.5), 0 0 15px rgba(255, 107, 107, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:hn.jsx("i",{className:"fas fa-shield-alt",style:{fontSize:"0.5rem",color:"#ff6b6b",filter:"drop-shadow(0 0 3px rgba(255, 107, 107, 0.8))"}})}),hn.jsxs("div",{className:"staff-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #ff6b6b, #ee5a52)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 107, 107, 0.5)",pointerEvents:"none"},children:["Staff",hn.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #ee5a52"}})]})]}),U&&hn.jsxs("div",{className:"beta-badge-wrapper",style:{position:"relative"},children:[hn.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #845ef7",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(132, 94, 247, 0.5), 0 0 15px rgba(132, 94, 247, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:hn.jsx("i",{className:"fas fa-flask",style:{fontSize:"0.5rem",color:"#845ef7",filter:"drop-shadow(0 0 3px rgba(132, 94, 247, 0.8))"}})}),hn.jsxs("div",{className:"beta-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #845ef7, #7048e8)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(132, 94, 247, 0.5)",pointerEvents:"none"},children:["Beta Tester",hn.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #7048e8"}})]})]}),$&&hn.jsxs("div",{className:"premium-badge-wrapper",style:{position:"relative"},children:[hn.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #f59f00",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(245, 159, 0, 0.5), 0 0 15px rgba(245, 159, 0, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:hn.jsx("i",{className:"fas fa-star",style:{fontSize:"0.5rem",color:"#f59f00",filter:"drop-shadow(0 0 3px rgba(245, 159, 0, 0.8))"}})}),hn.jsxs("div",{className:"premium-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #f59f00, #e67700)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(245, 159, 0, 0.5)",pointerEvents:"none"},children:["Premium",hn.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #e67700"}})]})]})]}),hn.jsx("style",{children:"\n              .founder-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 215, 0, 0.4) !important;\n              }\n              .founder-badge-wrapper:hover .founder-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n              .dev-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(0, 212, 255, 0.7), 0 0 20px rgba(0, 212, 255, 0.4) !important;\n              }\n              .dev-badge-wrapper:hover .dev-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n              .promoter-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(168, 85, 247, 0.7), 0 0 20px rgba(168, 85, 247, 0.4) !important;\n              }\n              .promoter-badge-wrapper:hover .promoter-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n              .early-badge-wrapper:hover .early-badge-icon {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.3) !important;\n              }\n              .early-badge-wrapper:hover .early-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n              .buyer-badge-wrapper:hover .buyer-badge-icon {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(255, 107, 157, 0.7), 0 0 20px rgba(255, 107, 157, 0.4) !important;\n              }\n              .buyer-badge-wrapper:hover .buyer-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n              .bughunter-badge-wrapper:hover .bughunter-badge-icon {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(81, 207, 102, 0.7), 0 0 20px rgba(81, 207, 102, 0.4) !important;\n              }\n              .bughunter-badge-wrapper:hover .bughunter-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n\n              .vip-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 215, 0, 0.4) !important;\n              }\n              .vip-badge-wrapper:hover .vip-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n\n              .partner-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(77, 171, 247, 0.7), 0 0 20px rgba(77, 171, 247, 0.4) !important;\n              }\n              .partner-badge-wrapper:hover .partner-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n\n              .staff-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(255, 107, 107, 0.7), 0 0 20px rgba(255, 107, 107, 0.4) !important;\n              }\n              .staff-badge-wrapper:hover .staff-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n\n              .beta-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(132, 94, 247, 0.7), 0 0 20px rgba(132, 94, 247, 0.4) !important;\n              }\n              .beta-badge-wrapper:hover .beta-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n\n              .premium-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(245, 159, 0, 0.7), 0 0 20px rgba(245, 159, 0, 0.4) !important;\n              }\n              .premium-badge-wrapper:hover .premium-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n            "})]}),hn.jsxs("div",{className:"settings-info",children:[((null==u?void 0:u.username)||(null==c||null===(n=c.user_metadata)||void 0===n?void 0:n.username))&&hn.jsxs("div",{className:"settings-field",children:[hn.jsxs("label",{children:[hn.jsx("i",{className:"fas fa-user"})," Username"]}),hn.jsx("div",{className:"settings-value",children:(null==u?void 0:u.username)||(null==c||null===(a=c.user_metadata)||void 0===a?void 0:a.username)})]}),hn.jsxs("div",{className:"settings-field",children:[hn.jsxs("label",{children:[hn.jsx("i",{className:"fas fa-envelope"})," Email"]}),hn.jsxs("div",{className:"settings-value email-field",children:[p?hn.jsx("span",{children:(null==c?void 0:c.email)||(null==u?void 0:u.email)||"N/A"}):hn.jsx("span",{className:"hidden-email",children:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022@\u2022\u2022\u2022\u2022.\u2022\u2022\u2022"}),hn.jsx("button",{className:"reveal-btn",onClick:()=>f(!p),children:hn.jsx("i",{className:"fas "+(p?"fa-eye-slash":"fa-eye")})})]})]}),hn.jsxs("div",{className:"settings-field",children:[hn.jsxs("label",{children:[hn.jsx("i",{className:"fas fa-calendar-alt"})," Today's Date"]}),hn.jsx("div",{className:"settings-value",children:F})]}),hn.jsxs("div",{className:"settings-field",children:[hn.jsxs("label",{children:[hn.jsx("i",{className:"fas fa-id-badge"})," User ID"]}),hn.jsxs("div",{className:"settings-value user-id",children:[null==c||null===(o=c.id)||void 0===o?void 0:o.slice(0,8),"..."]})]}),hn.jsxs("div",{className:"settings-field",children:[hn.jsxs("label",{children:[hn.jsx("i",{className:"fas fa-gem"})," Plan Status"]}),hn.jsxs("div",{className:"settings-value",style:{display:"flex",alignItems:"center",gap:"10px"},children:["free"===(null==S?void 0:S.plan)&&hn.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"rgba(134, 142, 150, 0.2)",color:"#868e96",fontSize:"0.85rem",fontWeight:600},children:[hn.jsx("i",{className:"fas fa-user",style:{marginRight:"6px"}}),"Free"]}),"blocked"===(null==S?void 0:S.plan)&&hn.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))",border:"1px solid #ef4444",color:"#ef4444",fontSize:"0.85rem",fontWeight:600},children:[hn.jsx("i",{className:"fas fa-ban",style:{marginRight:"6px"}}),"Bloqu\xe9"]}),"beta"===(null==S?void 0:S.plan)&&hn.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2))",border:"1px solid #10b981",color:"#10b981",fontSize:"0.85rem",fontWeight:600},children:[hn.jsx("i",{className:"fas fa-flask",style:{marginRight:"6px"}}),"Beta"]}),"beginner"===(null==S?void 0:S.plan)&&hn.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(196, 69, 105, 0.2))",border:"1px solid #ff6b9d",color:"#ff6b9d",fontSize:"0.85rem",fontWeight:600},children:[hn.jsx("i",{className:"fas fa-rocket",style:{marginRight:"6px"}}),"Beginner"]}),"pro"===(null==S?void 0:S.plan)&&hn.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(77, 171, 247, 0.2), rgba(34, 139, 230, 0.2))",border:"1px solid #4dabf7",color:"#4dabf7",fontSize:"0.85rem",fontWeight:600},children:[hn.jsx("i",{className:"fas fa-shield-alt",style:{marginRight:"6px"}}),"Pro"]}),"premium"===(null==S?void 0:S.plan)&&hn.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.2))",border:"1px solid #ffd700",color:"#ffd700",fontSize:"0.85rem",fontWeight:600},children:[hn.jsx("i",{className:"fas fa-crown",style:{marginRight:"6px"}}),"premium"]}),hn.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:["(",Ko(S)," credits/day)"]})]})]})]})]}),hn.jsx("div",{className:"settings-footer",children:hn.jsx("button",{className:"btn btn-outline",onClick:e,children:"Close"})})]})})},Go=["deee5dc2-e37e-48ba-8da2-1fb5945cd235","3e45559e-299c-4d49-9fe8-b2c77237d2c9","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","f479668f-4129-4c67-91bb-decba5a0e804","46eea62a-4835-4b54-a23e-c20aee355760","946f8b8b-6057-4dc9-9615-e1cfa8eb9c9f","c5ac1d65-40ac-4b53-85b3-8cea8fdfe491"],Jo=({onClose:t})=>{var n=Oo().user,a=M(),o=i(bn.useState([]),2),l=o[0],c=o[1],d=i(bn.useState(!1),2),f=d[0],h=(d[1],bn.useRef(null)),m=bn.useRef(0),g=n&&Go.includes(n.id)
bn.useEffect(()=>{h.current=new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleVQHAIve/NzFsKN+WjM5Z5Olr5h7WDgxQ1hufomEeWJNPD1MXGZ0eXhsXkxFRUlUX2dscW9pYltXWFxiZ2xua2hjX19hZWpucHBsZ2ViYmRnam1wb2xoZWNjZGdqbXBwbWpmZGRlZ2ptcG9saGVjY2RnaW1vb2xoZWNjZGdpbW9ubGhlY2NkZ2ltb25sZ2VjY2RnZ2ptbmxnZGJhYmVnam1ubGhlY2JjZWdpbG5saGViYmJkZmlsbm1rZ2RiYmNlZ2lrbW1qZ2RiYmNlZ2lrbG1qZ2RiYWJkZmhrbG1qZ2RhYGFjZWdqbG1qZ2RhYGFjZWdqbGxqZ2RhYGFjZWdqbGxqZ2RhYGBiZGZpamxrZ2RhYF9gYmRnaWtsaWdjYF9fYWNlaGpramdkYWBfYGJkZmhqamdkYWBfYGJkZmhqamdjYF9fYWNlaGlqaGViYF9fYGJkZmhpamdjYF9eX2BjZWdpamdhYF5dXmBiZGZoaGdjYF5dXmBiZGZoaGdhX15dXV9hY2VnaGhlYl9dXVxeYGJkZmhoZWFfXVtcXmBiZGZnZmNhXl1cXF5gYmRlZ2ZjYF5cW1xeYGJkZWdmY2BdXFtbXWBiZGVmZmNgXVtaWltdYGJjZWZlYl9cWllZW11fYWNlZWVjYF1bWVlZW15gYmNkZGNgXltaWFlaXF5gYmNkY2JgXVtZWFhaXF5gYWNjY2FfXFpZWFlaXF5gYWJjYmFfXFpZV1haXF1fYWJiYmFfXFpYV1hZW11fYGFiYmFfXFpYV1dZWl1eYGBhYWBfXVtZV1dYWlxdX2BhYWBfXFtZV1dYWVtdXmBgYGBfXFtZV1dYWVtcXl9gYGBfXFtZV1dYWVtcXl9fX19fXFtZV1ZXWFpbXV5fX19fXlxaWFdWV1haXF1eX19fXl1bWVhWVldYWlxdXl9fXl1bWldWVldYWltcXl5fXl1bWldWVldYWVtcXl5eXl1bWVdWVVdYWVtcXV5eXl1cWldWVVZXWFpbXF1eXl1cWldVVVZXWFpbXF1dXl1cWldVVFVWV1laW1xdXV1cWldVVFRVV1hZWlxcXV1cW1lXVVRUVVdYWVpbXF1dXFtZV1VUU1RVV1hZW1tcXFxbWVdVVFNUVVdYWVpbXFxcW1pYVlRTU1RWV1hZW1tbXFtaWFZUUlNTVVZYWVpbW1tbWlhXVVNSUlNVVlhZWltbW1taWFdVU1JSU1VWV1lZW1tbW1pYVlVTUVJTVVZXWVpbW1taWlhWVFNRUVNUVldYWVpbW1taWVdVVFJRUVJUVVdYWVpaW1pZWFZUU1FRUlNUVldYWVpaWllYVlRTUVBRUlNVVldYWVlZWVhWVVNSUFBRUlNVVldYWVlZWFdVVFJRUFBRUlNVVldYWFlZWFdVU1JQUFBRU1RVVldYWFhYV1ZUU1FPT1BSU1RWVldYWFhYVlVTUVBPT1BSU1RVVldXWFhXVlRTUU9PT1BSU1RVVldXV1dWVVNSUE9OT1BSU1RVVlZXV1dWVVNSUE9OT1BRUlRVVlZXV1dWVFNRUE5OT1BSU1RVVlZWVlVUU1FQTU5OUFBRUlRVVVVWVlVUU1FQTU5OT1BRUlNUVVVWVlVUU1FPTk1NT09QUVJTVFVVVVVUUlFPTk1NTk9QUVJTVFVVVVRTUlBPTU1NTk9QUVJTVFRVVFRTUVBOTUxMTU5PUFFSUlNUVFRTUVBOTUxMTE1OT1BRUlJTU1NTUVBPTU1MTExNTk9QUVJSUlNTUlFPTk1MTExMTU5PUFBRUlJSUlFPTk1MTExMTE1OT1BRUVJSUlFQTk1MTEtLTE1OT1BRUVFRUVFPTk1MS0tLTE1OT09QUVFRUVBPTUxLS0tLTE1OTk9QUFBQT09OTUxLS0tLTE1OTk9PT1BQT05NTExLS0tLTE1OTk9PT09PTk1NTExLS0tMTE1OTk5PT09OTk1MTEtLSktLTE1NTk5OTk5NTUxMS0tKSkpLTE1NTU5OTk1NTExLS0pKSktLTE1NTU5OTU1MTEtLSkpKSktLTE1NTU1NTUxMS0tKSkpKSktLTE1NTU1NTExLS0pKSkpKSktMTE1NTUxMTEtLSkpKSkpKSktMTExMTExMTEtLSkpKSkpKSktMTExMTExMS0tKSkpKSkpKSktMTExMTEtLS0tKSkpKSkpKSktLTExMTEtLSkpKSkpKSkpKS0tMTExLS0tKSkpKSkpKSkpKS0tLTEtLSklKSkpKSkpKSkpLS0tLSklJSkpKSkpKSkpKSkpLS0tKSkpJSklKSkpKSkpKSkpKS0pKSkpJSUlKSkpKSkpKSkpKSkpKSkpJSUlJSkpKSkpKSkpKSkpKSkpJSUlJSUlKSkpKSkpKSkpKSkpJSUlJSUlJSUlKSkpKSkpKSklJSUlJSUlJSUlJSkpKSkpKSklJSUlJSUlJSUlJSkpKSklJSUlJSUlJSUlJSUlJSkpJSUlJSUlJSUlJSUlJSUlJSklJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSQ=="),h.current.volume=.5},[])
var b=()=>{h.current&&(h.current.currentTime=0,h.current.play().catch(()=>{}))},v=function(){var t=s(r().m(function t(){var a,s,o,l,u,d,f,h,v,x,w,k,j,S,_,N,E,T,C,R,P,A
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(n){t.n=1
break}return t.a(2)
case 1:return t.p=1,a=[],t.n=2,No.from("tickets").select("*").order("created_at",{ascending:!1}).limit(30)
case 2:if(s=t.v,o=s.data,(l=s.error)&&Bo(l.message),o&&o.length>0){u=g?o:o.filter(e=>e.user_id===n.id),d=p(u)
try{for(d.s();!(f=d.n()).done;)h=f.value,a.push({id:`ticket-${h.id}`,type:"new_ticket",ticket_id:h.id,ticket_subject:h.subject,from_username:h.username,from_user_id:h.user_id,message_preview:h.message.substring(0,100)+(h.message.length>100?"...":""),created_at:h.created_at,read:y(`ticket-${h.id}`)})}catch(O){d.e(O)}finally{d.f()}}return t.n=3,No.from("ticket_messages").select("*").order("created_at",{ascending:!1}).limit(50)
case 3:if(v=t.v,x=v.data,(w=v.error)&&Bo(w.message),!(x&&x.length>0)){t.n=10
break}k=x,g?k=x.filter(e=>!e.is_owner):(j=(null==o?void 0:o.filter(e=>e.user_id===n.id).map(e=>e.id))||[],k=x.filter(e=>e.is_owner&&j.includes(e.ticket_id))),S=new Map,_=p(k)
try{for(_.s();!(N=_.n()).done;)E=N.value,S.has(E.ticket_id)||S.set(E.ticket_id,E)}catch(O){_.e(O)}finally{_.f()}T=p(S),t.p=4,R=r().m(function e(){var t,n,s
return r().w(function(e){for(;;)switch(e.n){case 0:t=i(C.value,2),n=t[1],a.find(e=>e.id===`ticket-${n.ticket_id}`)||(s=null==o?void 0:o.find(e=>e.id===n.ticket_id),a.push({id:`msg-${n.id}`,type:"new_message",ticket_id:n.ticket_id,ticket_subject:(null==s?void 0:s.subject)||"Nouveau message",from_username:n.username,from_user_id:n.user_id,message_preview:n.message.substring(0,100)+(n.message.length>100?"...":""),created_at:n.created_at,read:y(`msg-${n.id}`)}))
case 1:return e.a(2)}},e)}),T.s()
case 5:if((C=T.n()).done){t.n=7
break}return t.d(e(R()),6)
case 6:t.n=5
break
case 7:t.n=9
break
case 8:t.p=8,A=t.v,T.e(A)
case 9:return t.p=9,T.f(),t.f(9)
case 10:a.sort((e,t)=>new Date(t.created_at).getTime()-new Date(e.created_at).getTime()),(P=a.filter(e=>!e.read).length)>m.current&&m.current>0&&b(),m.current=P,c(e=>JSON.stringify(e)!==JSON.stringify(a)?a:e),t.n=12
break
case 11:t.p=11,t.v
case 12:return t.a(2)}},t,null,[[4,8,9,10],[1,11]])}))
return function(){return t.apply(this,arguments)}}(),y=e=>{var t=localStorage.getItem(`read_notifications_${null==n?void 0:n.id}`)||"[]"
try{return JSON.parse(t).includes(e)}catch(r){return!1}}
bn.useEffect(()=>{v()
var e=setInterval(v,500),t=No.channel("inbox-tickets-live").on("postgres_changes",{event:"*",schema:"public",table:"tickets"},()=>{v()}).subscribe(),r=No.channel("inbox-messages-live").on("postgres_changes",{event:"*",schema:"public",table:"ticket_messages"},()=>{v()}).subscribe()
return()=>{clearInterval(e),No.removeChannel(t),No.removeChannel(r)}},[null==n?void 0:n.id])
var x=e=>{var t=new Date(e),r=(new Date).getTime()-t.getTime()
return r<6e4?"\xc0 l'instant":r<36e5?`Il y a ${Math.floor(r/6e4)} min`:r<864e5?`Il y a ${Math.floor(r/36e5)}h`:t.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})},w=l.filter(e=>!e.read).length
return hn.jsx("div",{className:"settings-overlay",onClick:t,children:hn.jsxs("div",{className:"settings-modal",onClick:e=>e.stopPropagation(),style:{maxWidth:"500px",maxHeight:"80vh"},children:[hn.jsxs("div",{className:"settings-header",children:[hn.jsxs("h2",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-inbox"}),"Inbox",w>0&&hn.jsx("span",{style:{background:"#ff6b6b",color:"white",padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600},children:w})]}),hn.jsxs("div",{style:{display:"flex",gap:"8px"},children:[w>0&&hn.jsx("button",{onClick:()=>{if(n){var e=`read_notifications_${n.id}`,t=l.map(e=>e.id)
localStorage.setItem(e,JSON.stringify(t.slice(-100))),c(e=>e.map(e=>u(u({},e),{},{read:!0})))}},style:{background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"8px",padding:"8px 12px",cursor:"pointer",color:"var(--text-secondary)",fontSize:"0.85rem",transition:"all 0.2s"},title:"Tout marquer comme lu",children:hn.jsx("i",{className:"fas fa-check-double"})}),hn.jsx("button",{className:"settings-close",onClick:t,children:hn.jsx("i",{className:"fas fa-times"})})]})]}),hn.jsx("div",{className:"settings-content",style:{padding:"0",maxHeight:"60vh",overflowY:"auto"},children:f?hn.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[hn.jsx("span",{className:"spinner",style:{width:"32px",height:"32px"}}),hn.jsx("p",{style:{marginTop:"15px",color:"var(--text-secondary)"},children:"Chargement..."})]}):0===l.length?hn.jsxs("div",{style:{textAlign:"center",padding:"40px",color:"var(--text-muted)"},children:[hn.jsx("i",{className:"fas fa-inbox",style:{fontSize:"3rem",marginBottom:"15px",opacity:.5}}),hn.jsx("p",{children:"Aucune notification"})]}):hn.jsx("div",{style:{display:"flex",flexDirection:"column"},children:l.map(e=>hn.jsxs("div",{onClick:()=>((e=>{if(n){var t=`read_notifications_${n.id}`,r=localStorage.getItem(t)||"[]"
try{var a=JSON.parse(r)
a.includes(e)||(a.push(e),a.length>100&&a.shift(),localStorage.setItem(t,JSON.stringify(a)))}catch(s){localStorage.setItem(t,JSON.stringify([e]))}c(t=>t.map(t=>t.id===e?u(u({},t),{},{read:!0}):t))}})(e.id),t(),void a("/tickets")),style:{padding:"16px 20px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",transition:"background 0.2s",background:e.read?"transparent":"rgba(77, 171, 247, 0.08)",display:"flex",gap:"12px",alignItems:"flex-start"},onMouseEnter:e=>e.currentTarget.style.background="rgba(255, 255, 255, 0.05)",onMouseLeave:t=>t.currentTarget.style.background=e.read?"transparent":"rgba(77, 171, 247, 0.08)",children:[!e.read&&hn.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#4dabf7",flexShrink:0,marginTop:"6px"}}),hn.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"new_ticket"===e.type?"rgba(81, 207, 102, 0.2)":"rgba(77, 171, 247, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:hn.jsx("i",{className:"fas "+("new_ticket"===e.type?"fa-ticket-alt":"fa-comment"),style:{color:"new_ticket"===e.type?"#51cf66":"#4dabf7",fontSize:"1rem"}})}),hn.jsxs("div",{style:{flex:1,minWidth:0},children:[hn.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"},children:[hn.jsx("span",{style:{fontWeight:e.read?500:600,color:"var(--text-primary)",fontSize:"0.9rem"},children:"new_ticket"===e.type?"Nouveau ticket":"Nouvelle r\xe9ponse"}),hn.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",flexShrink:0},children:x(e.created_at)})]}),hn.jsxs("p",{style:{margin:"0 0 4px",color:"var(--text-secondary)",fontSize:"0.85rem",fontWeight:500},children:[hn.jsx("i",{className:"fas fa-user",style:{marginRight:"6px",opacity:.7}}),e.from_username]}),hn.jsx("p",{style:{margin:0,color:"var(--text-muted)",fontSize:"0.85rem",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.message_preview})]}),hn.jsx("i",{className:"fas fa-chevron-right",style:{color:"var(--text-muted)",fontSize:"0.8rem",alignSelf:"center"}})]},e.id))})}),hn.jsxs("div",{className:"settings-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[hn.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:[l.length," notification",1!==l.length?"s":""]}),hn.jsx("button",{className:"btn btn-outline",onClick:t,children:"Fermer"})]})]})})},Xo=e=>{if(null==e)return""
var t=String(e),r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}
return t.replace(/[&<>"'/]/g,e=>r[e]||e)},Zo=e=>{if(null==e)return""
for(var t=String(e),r=e=>{if("undefined"!=typeof DOMParser)try{return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent||""}catch(t){}return e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&amp;/g,"&")},n=0;n<3;n++){var a=r(t)
if(a===t)break
t=a}return t},Qo=e=>!(!e||"string"!=typeof e)&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)&&e.length<=254,el=e=>!(!e||"string"!=typeof e)&&/^[a-zA-Z0-9_-]{3,30}$/.test(e),tl=e=>!(!e||"string"!=typeof e)&&!(e.length<8||e.length>128)&&[/[A-Z]/.test(e),/[a-z]/.test(e),/[0-9]/.test(e),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)].filter(Boolean).length>=3,rl=e=>e&&"string"==typeof e?e.replace(/[<>'"`;\\]/g,"").replace(/javascript:/gi,"").replace(/on\w+=/gi,"").trim().slice(0,500):"",nl="Dbs2024SecureKeyStorage",al=(e,t)=>{if(e&&t){var r=(e=>{if(!e)return""
for(var t="",r=0;r<e.length;r++){var n=nl.charCodeAt(r%27),a=e.charCodeAt(r)
t+=String.fromCharCode(a^n)}return btoa(t)})(t)
localStorage.setItem(`api_key_encrypted_${e}`,r),localStorage.removeItem(`api_key_${e}`)}},sl=e=>{if(!e)return null
var t=localStorage.getItem(`api_key_encrypted_${e}`)
if(t)return(e=>{if(!e)return""
try{for(var t=atob(e),r="",n=0;n<t.length;n++){var a=nl.charCodeAt(n%27),s=t.charCodeAt(n)
r+=String.fromCharCode(s^a)}return r}catch(i){return""}})(t)
var r=localStorage.getItem(`api_key_${e}`)
return r?(al(e,r),r):null},il=new Map,ol=(e,t=5,r=9e5)=>{var n=Date.now(),a=il.get(e)
return!a||n>a.resetTime?(il.set(e,{count:1,resetTime:n+r}),!0):!(a.count>=t||(a.count++,0))},ll=e=>{il.delete(e)},cl=e=>!(!e||"string"!=typeof e)&&[/<script[^>]*>.*?<\/script>/gi,/javascript:/gi,/on\w+\s*=/gi,/<iframe/gi,/eval\s*\(/gi,/expression\s*\(/gi].some(t=>t.test(e)),ul=[/https?:\/\/[^\s]+/gi,/www\.[^\s]+/gi,/[a-zA-Z0-9-]+\.(com|net|org|io|gg|me|co|fr|de|uk|ru|cn|xyz|info|biz|tv|cc|ws|tk|ml|ga|cf|gq|link|click|online|site|website|space|fun|top|live|shop|store|app|dev|tech|cloud|pro|zone|host|email|page|rocks|world|today|life|network|solutions|agency|digital|media|social|group|team|club|chat|community|forum|blog|news|wiki|support|help|center|zone|services|business|company|corp|inc|ltd|llc|gmbh)[^\s]*/gi,/[a-zA-Z0-9-]+\s*\.\s*(com|net|org|io|gg|me|co|fr)/gi,/[a-zA-Z0-9-]+\s*\[\s*\.\s*\]\s*(com|net|org|io|gg|me|co|fr)/gi,/[a-zA-Z0-9-]+\s*\(\s*\.\s*\)\s*(com|net|org|io|gg|me|co|fr)/gi,/bit\.ly|tinyurl|t\.co|goo\.gl|shorturl|rebrand\.ly|cutt\.ly|ow\.ly/gi],dl=[/discord\.gg\/[a-zA-Z0-9]+/gi,/discord\.com\/invite\/[a-zA-Z0-9]+/gi,/discordapp\.com\/invite\/[a-zA-Z0-9]+/gi,/discord\s*\.\s*gg\s*\/\s*[a-zA-Z0-9]+/gi,/discord\s*\[\s*\.\s*\]\s*gg/gi,/discord\s*\(\s*\.\s*\)\s*gg/gi,/dsc\.gg\/[a-zA-Z0-9]+/gi,/invite\s*:?\s*[a-zA-Z0-9]{6,}/gi],pl=[/(.)\1{5,}/g,/(\b\w+\b)(\s+\1){3,}/gi,/(free|gratuit|giveaway|nitro|gift|cadeau|money|argent|crypto|bitcoin|earn|gagner)\s*(discord|server|serveur|join|rejoins)/gi,/join\s*(my|our|mon|notre)\s*(server|serveur|discord|channel)/gi,/check\s*(out|my|this)\s*(link|server|discord)/gi,/dm\s*(me|moi)\s*(for|pour)/gi,/(buy|sell|achet|vend)\s*(account|compte|nitro|boost)/gi],fl=[/<script[^>]*>/gi,/<\/script>/gi,/javascript\s*:/gi,/on\w+\s*=/gi,/<iframe/gi,/<object/gi,/<embed/gi,/<svg[^>]*onload/gi,/data\s*:/gi,/vbscript\s*:/gi,/expression\s*\(/gi,/eval\s*\(/gi,/document\s*\./gi,/window\s*\./gi,/\$\s*\(/gi,/innerHTML/gi,/outerHTML/gi],hl=new Map,ml=(e,t,r={})=>{var n=r.maxLength,a=void 0===n?500:n,s=r.rateLimit,i=void 0===s?{maxMessages:5,windowMs:1e4}:s,o=r.allowLinks,l=void 0!==o&&o,c=r.allowDiscord,u=void 0!==c&&c
if(!e||"string"!=typeof e)return{isValid:!1,sanitizedMessage:"",error:"Message vide",errorCode:"EMPTY"}
var d=e.trim()
if(!d)return{isValid:!1,sanitizedMessage:"",error:"Message vide",errorCode:"EMPTY"}
if(d.length>a)return{isValid:!1,sanitizedMessage:"",error:`Message trop long (max ${a} caract\xe8res)`,errorCode:"TOO_LONG"}
var p=Date.now(),f=hl.get(t)||{timestamps:[],lastMessage:"",repeatCount:0}
if(f.timestamps=f.timestamps.filter(e=>p-e<i.windowMs),f.timestamps.length>=i.maxMessages)return{isValid:!1,sanitizedMessage:"",error:"Trop de messages. Attendez quelques secondes.",errorCode:"RATE_LIMITED"}
if(f.lastMessage===d.toLowerCase()){if(f.repeatCount++,f.repeatCount>=3)return{isValid:!1,sanitizedMessage:"",error:"Message r\xe9p\xe9titif d\xe9tect\xe9",errorCode:"SPAM_DETECTED"}}else f.repeatCount=0
for(var h=0,m=fl;h<m.length;h++)if(m[h].test(d))return{isValid:!1,sanitizedMessage:"",error:"Contenu non autoris\xe9 d\xe9tect\xe9",errorCode:"XSS_DETECTED"}
if(!u)for(var g=0,b=dl;g<b.length;g++)if(b[g].test(d))return{isValid:!1,sanitizedMessage:"",error:"Les invitations Discord ne sont pas autoris\xe9es",errorCode:"BLOCKED_DISCORD"}
if(!l)for(var v=0,y=ul;v<y.length;v++)if(y[v].test(d))return{isValid:!1,sanitizedMessage:"",error:"Les liens ne sont pas autoris\xe9s",errorCode:"BLOCKED_LINK"}
for(var x=0,w=pl;x<w.length;x++)if(w[x].test(d))return{isValid:!1,sanitizedMessage:"",error:"Message d\xe9tect\xe9 comme spam",errorCode:"SPAM_DETECTED"}
var k=d.replace(/[<>]/g,"").replace(/\\/g,"").slice(0,a)
return f.timestamps.push(p),f.lastMessage=d.toLowerCase(),hl.set(t,f),{isValid:!0,sanitizedMessage:k}},gl={email:["snusbase","leakosint","leakcheck","breachbase","intelvault","breachdirectory","hackcheck","osintkit","breachvip","breachlookup","xosint","melissa","breachrip","hudsonrock","wentyn","akula","stealerlogs","oathnet","seon","github","indicia","osintcat","leaksight","inf0sec","intelbase","intelfetch"],ip_v4:["ipinfo","shodan","breachdirectory","breachvip","breachbase","stealerlogs","leaksight","cordcat","intelbase","intelfetch","crowsint"],ip_v6:["ipinfo","shodan","intelbase"],domain:["wentyn","akula","osintcat","breachdirectory","intelfetch","leaksight","stealerlogs","oathnet","inf0sec"],phone:["truecaller","seon","osintkit","breachvip","breachbase","melissa","stealerlogs","intelbase","indicia","leaksight","inf0sec"],discord_id:["cordcat","crowsint","intelfetch","oathnet","breachvip","breachrip","inf0sec","breachhub"],username:["snusbase","leakosint","memory","breachbase","breachdirectory","hackcheck","breachvip","leaksight","stealerlogs","crowsint","inf0sec","breachrip","breachlookup","xosint"],hash_md5:["snusbase","leakosint","breachbase"],hash_sha1:["snusbase","leakosint","breachbase"],hash_sha256:["snusbase","leakosint","breachbase"],bitcoin_address:["crypto"],ethereum_address:["crypto"],url:["leaksight","intelbase"],steam_id:["steam","breachhub","crowsint","breachvip"],cfx_license:["breachhub","inf0sec"],fivem_license:["breachhub","inf0sec"],minecraft_uuid:["crowsint","intelbase"],minecraft_username:["crowsint","intelbase"],hwid:["breachhub","leaksight","stealerlogs"],vin:["vindecoder"],bin:["binlist"],ssn:["idleakcheck","inf0sec"],cpf:["leaksight"],twitter_username:["osintcat","leaksight"],github_username:["github","intelfetch","crowsint","intelbase"],reddit_username:["reddit"],tiktok_username:["tiktok"],roblox_id:["oathnet"],subnet:["leaksight","shodan"],name:["osintkit","melissa","idleakcheck","indicia","breachvip","inf0sec","stealerlogs"],password:["hackcheck","breachbase","breachrip","leaksight","stealerlogs"],unknown:["snusbase","leakosint","leakcheck","breachhub","xosint"]},bl=[{type:"email",pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,icon:"fa-envelope",iconClass:"fas",label:"Email",priority:100},{type:"fivem_license",pattern:/^license:[a-f0-9]{40}$/i,icon:"fa-gamepad",iconClass:"fas",label:"FiveM License",priority:99},{type:"cfx_license",pattern:/^[a-f0-9]{40}$/i,icon:"fa-gamepad",iconClass:"fas",label:"CFX License",priority:98},{type:"steam_id",pattern:/^7656119\d{10}$/,icon:"fa-steam",iconClass:"fab",label:"Steam ID",priority:91},{type:"steam_id",pattern:/^STEAM_[0-5]:[01]:\d+$/,icon:"fa-steam",iconClass:"fab",label:"Steam ID",priority:91},{type:"minecraft_uuid",pattern:/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i,icon:"fa-cube",iconClass:"fas",label:"MC UUID",priority:90},{type:"hwid",pattern:/^[A-F0-9]{32}$/i,icon:"fa-microchip",iconClass:"fas",label:"HWID",priority:89},{type:"vin",pattern:/^[A-HJ-NPR-Z0-9]{17}$/i,icon:"fa-car",iconClass:"fas",label:"VIN",priority:88},{type:"bin",pattern:/^\d{6,8}$/,icon:"fa-credit-card",iconClass:"fas",label:"BIN",priority:50},{type:"ssn",pattern:/^\d{3}-?\d{2}-?\d{4}$/,icon:"fa-id-card",iconClass:"fas",label:"SSN",priority:87},{type:"cpf",pattern:/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,icon:"fa-id-card",iconClass:"fas",label:"CPF",priority:86},{type:"ip_v4",pattern:/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,icon:"fa-network-wired",iconClass:"fas",label:"IPv4",priority:95},{type:"ip_v6",pattern:/^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::$|^(?:[0-9a-fA-F]{1,4}:){1,7}:$/,icon:"fa-network-wired",iconClass:"fas",label:"IPv6",priority:94},{type:"subnet",pattern:/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/\d{1,2}$/,icon:"fa-project-diagram",iconClass:"fas",label:"Subnet",priority:93},{type:"url",pattern:/^https?:\/\/[^\s]+$/i,icon:"fa-link",iconClass:"fas",label:"URL",priority:85},{type:"domain",pattern:/^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,icon:"fa-globe",iconClass:"fas",label:"Domain",priority:80},{type:"phone",pattern:/^\+\d{7,15}$/,icon:"fa-phone",iconClass:"fas",label:"Phone",priority:92},{type:"phone",pattern:/^0[1-9]\d{8}$/,icon:"fa-phone",iconClass:"fas",label:"Phone",priority:91},{type:"phone",pattern:/^[1-9]\d{9,14}$/,icon:"fa-phone",iconClass:"fas",label:"Phone",priority:88},{type:"discord_id",pattern:/^\d{17,19}$/,icon:"fa-discord",iconClass:"fab",label:"Discord ID",priority:95},{type:"roblox_id",pattern:/^\d{7,9}$/,icon:"fa-gamepad",iconClass:"fas",label:"Roblox ID",priority:40},{type:"bitcoin_address",pattern:/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/,icon:"fa-bitcoin",iconClass:"fab",label:"Bitcoin",priority:90},{type:"ethereum_address",pattern:/^0x[a-fA-F0-9]{40}$/,icon:"fa-ethereum",iconClass:"fab",label:"Ethereum",priority:90},{type:"hash_md5",pattern:/^[a-fA-F0-9]{32}$/,icon:"fa-key",iconClass:"fas",label:"MD5",priority:70},{type:"hash_sha1",pattern:/^[a-fA-F0-9]{40}$/,icon:"fa-key",iconClass:"fas",label:"SHA1",priority:70},{type:"hash_sha256",pattern:/^[a-fA-F0-9]{64}$/,icon:"fa-key",iconClass:"fas",label:"SHA256",priority:70},{type:"twitter_username",pattern:/^@[a-zA-Z0-9_]{1,15}$/,icon:"fa-twitter",iconClass:"fab",label:"Twitter",priority:75},{type:"github_username",pattern:/^gh:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/,icon:"fa-github",iconClass:"fab",label:"GitHub",priority:75},{type:"reddit_username",pattern:/^u\/[a-zA-Z0-9_-]{3,20}$/,icon:"fa-reddit",iconClass:"fab",label:"Reddit",priority:75},{type:"tiktok_username",pattern:/^@[a-zA-Z0-9_.]{2,24}$/,icon:"fa-tiktok",iconClass:"fab",label:"TikTok",priority:74},{type:"minecraft_username",pattern:/^mc:[a-zA-Z0-9_]{3,16}$/,icon:"fa-cube",iconClass:"fas",label:"Minecraft",priority:73},{type:"name",pattern:/^[A-Za-z\xc0-\xff]{2,}\s+[A-Za-z\xc0-\xff]{2,}(\s+[A-Za-z\xc0-\xff]{2,})?$/,icon:"fa-user-tag",iconClass:"fas",label:"Name",priority:60},{type:"username",pattern:/^[a-zA-Z0-9_.-]{3,32}$/,icon:"fa-user",iconClass:"fas",label:"Username",priority:50}],vl=e=>{if(!e||"string"!=typeof e)return{safe:!1,reason:"Requ\xeate vide"}
var t=e.trim()
return t.length<3?{safe:!1,reason:"Requ\xeate trop courte (min 3 caract\xe8res)"}:t.length>500?{safe:!1,reason:"Requ\xeate trop longue (max 500 caract\xe8res)"}:cl(t)?{safe:!1,reason:"Contenu suspect d\xe9tect\xe9"}:/[<>'"`;\\]/.test(t)?{safe:!1,reason:"Caract\xe8res non autoris\xe9s"}:{safe:!0}},yl=e=>e!==(new Date).toISOString().split("T")[0],xl=e=>{switch(null==e?void 0:e.toLowerCase()){case"beginner":return"beginner"
case"pro":return"pro"
case"premium":return"premium"
case"beta":return"beta"
case"blocked":return"blocked"
default:return"free"}},wl=(e,t)=>{var r=xl(e),n=(e=>{switch(xl(e)){case"free":default:return 10
case"beginner":return 100
case"pro":return 500
case"premium":return 5e3
case"beta":return 30
case"blocked":return 0}})(r)
return{plan:r,creditsPerDay:"number"==typeof t&&t>0?t:n}},kl=function(){var e=s(r().m(function e(t){var n,a
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,No.from("user_plans").select("plan, credits_per_day").eq("user_id",t).maybeSingle()
case 1:if(n=e.v,a=n.data){e.n=6
break}return e.p=2,e.n=3,No.from("user_plans").insert({user_id:t,plan:"free",credits_per_day:10})
case 3:e.n=5
break
case 4:e.p=4,e.v
case 5:return e.a(2,wl("free",10))
case 6:return e.a(2,wl(a.plan,a.credits_per_day))
case 7:return e.p=7,e.v,e.a(2,wl("free",10))}},e,null,[[2,4],[0,7]])}))
return function(t){return e.apply(this,arguments)}}(),jl=function(){var e=s(r().m(function e(t){var n,a,s,i,o
return r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,kl(t)
case 1:return n=e.v,a=n.plan,s=n.creditsPerDay,e.n=2,No.from("user_credits").select("credits_remaining, last_reset").eq("user_id",t).maybeSingle()
case 2:if(i=e.v,o=i.data){e.n=3
break}return e.a(2,{remaining:s,max:s,plan:a})
case 3:if(!yl(o.last_reset)){e.n=4
break}return e.a(2,{remaining:s,max:s,plan:a})
case 4:return e.a(2,{remaining:o.credits_remaining,max:s,plan:a})}},e)}))
return function(t){return e.apply(this,arguments)}}(),Sl=function(){var e=s(r().m(function e(){var t,n,a,s,i,o,l,c,u,d
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.n=1,No.auth.getSession()
case 1:if(a=e.v,s=a.data,a.error||null===(t=s.session)||void 0===t||!t.access_token){e.n=2
break}if(i=s.session.expires_at||0,o=Math.floor(Date.now()/1e3),!(i-o>60)){e.n=2
break}return e.a(2,s.session.access_token)
case 2:return e.p=2,e.n=3,No.auth.refreshSession()
case 3:if(l=e.v,c=l.data.session,l.error||null==c||!c.access_token){e.n=4
break}return e.a(2,c.access_token)
case 4:e.n=6
break
case 5:e.p=5,e.v
case 6:return e.n=7,No.auth.getSession()
case 7:if(u=e.v,d=u.data,null===(n=d.session)||void 0===n||!n.access_token){e.n=8
break}return e.a(2,d.session.access_token)
case 8:throw new Error("User not authenticated")
case 9:return e.a(2)}},e,null,[[2,5]])}))
return function(){return e.apply(this,arguments)}}(),_l=function(){var e=s(r().m(function e(t,n,a=0){var s,i,o,l,c,u,d,p,f,h,m,g,b,v,y
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(l=String(null!==(s=rl(t))&&void 0!==s?s:"").trim()){e.n=1
break}throw new Error("Requ\xeate invalide")
case 1:return c=sl(n),e.p=2,e.n=3,Sl()
case 3:u=e.v,e.n=5
break
case 4:throw e.p=4,e.v,new Error("User not authenticated")
case 5:return d={Authorization:`Bearer ${u}`},c&&(d["X-API-Key"]=c),e.n=6,No.functions.invoke("api-search",{body:{query:l,userId:n},headers:d})
case 6:if(p=e.v,f=p.data,!(h=p.error)){e.n=11
break}if(!(((m=h.message||"").includes("401")||m.toLowerCase().includes("unauthorized")||m.toLowerCase().includes("invalid token")||m.toLowerCase().includes("expired"))&&a<1)){e.n=10
break}return e.p=7,e.n=8,No.auth.refreshSession()
case 8:return e.a(2,_l(t,n,a+1))
case 9:throw e.p=9,e.v,new Error("Session expired. Please refresh the page.")
case 10:throw new Error(h.message||"Search request failed")
case 11:return g=Array.isArray(null==f?void 0:f.breaches)?f.breaches:[],b=Array.isArray(null==f?void 0:f.stealers)?f.stealers:[],v=Array.isArray(null==f?void 0:f.results)?f.results:Array.isArray(f)?f:[],y=null!==(i=null!==(o=null==f?void 0:f.credits_remaining)&&void 0!==o?o:null==f?void 0:f.creditsRemaining)&&void 0!==i?i:void 0,e.a(2,{results:v,breaches:g,stealers:b,creditsRemaining:y})}},e,null,[[7,9],[2,4]])}))
return function(t,r){return e.apply(this,arguments)}}(),Nl=function(){var e=s(r().m(function e(t,n){var a,s,i,o,l,c,u,d,p,f
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,jl(n)
case 1:if(a=e.v,s=a.remaining,"blocked"!==a.plan){e.n=2
break}return e.a(2,{success:!1,error:"Your account is blocked. Contact support.",errorCode:"BLOCKED",creditsRemaining:0})
case 2:if(!(s<=0)){e.n=3
break}return e.a(2,{success:!1,error:"You have exhausted your daily searches.",errorCode:"NO_CREDITS",creditsRemaining:0})
case 3:return e.n=4,_l(t,n)
case 4:return i=e.v,o=i.breaches||[],l=i.stealers||[],c=i.results||[],u="number"==typeof i.creditsRemaining?i.creditsRemaining:s-1,e.a(2,{success:!0,results:c,breaches:o,stealers:l,creditsRemaining:u})
case 5:return e.p=5,f=e.v,d=(null==f?void 0:f.message)||"Erreur serveur",p=d.includes("not enough money")||d.includes("bot balance")||d.toLowerCase().includes("balance"),e.a(2,{success:!1,error:d,errorCode:p?"API_BALANCE_INSUFFICIENT":"SERVER_ERROR",creditsRemaining:0})}},e,null,[[0,5]])}))
return function(t,r){return e.apply(this,arguments)}}(),El=function(){var e=s(r().m(function e(t){var n,a,s,i
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,kl(t)
case 1:if(n=e.v,a=n.creditsPerDay,"blocked"!==n.plan){e.n=2
break}return e.a(2,0)
case 2:return e.n=3,No.from("user_credits").select("credits_remaining, last_reset").eq("user_id",t).single()
case 3:if(s=e.v,i=s.data,!s.error&&i){e.n=4
break}return e.a(2,a)
case 4:if(!yl(i.last_reset)){e.n=5
break}return e.a(2,a)
case 5:return e.a(2,i.credits_remaining)
case 6:return e.p=6,e.v,e.a(2,0)}},e,null,[[0,6]])}))
return function(t){return e.apply(this,arguments)}}(),Tl=({onClose:e})=>{var t,n,a=Oo().user,o=i(bn.useState(null),2),l=o[0],c=o[1],u=i(bn.useState(null),2),d=u[0],p=u[1],f=i(bn.useState(0),2),h=f[0],m=f[1],g=i(bn.useState(!0),2),b=g[0],v=g[1],y=i(bn.useState(!1),2),x=y[0],w=y[1],k=i(bn.useState(!1),2),j=k[0],S=k[1],_=i(bn.useState(!1),2),N=_[0],E=_[1],T=!!d&&!["free","blocked"].includes((null===(t=d.plan)||void 0===t||null===(n=t.toLowerCase)||void 0===n?void 0:n.call(t))||"")
bn.useEffect(()=>{var e=!0,t=function(){var t=s(r().m(function t(){var n,s,i,o,l,u,d,f
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(a){t.n=1
break}return e&&v(!1),t.a(2)
case 1:return t.p=1,t.n=2,No.from("user_plans").select("plan, credits_per_day").eq("user_id",a.id).maybeSingle()
case 2:if(s=t.v,i=s.data,o=i||{plan:"free",credits_per_day:0},e&&p(o),"free"!==(null===(n=o.plan)||void 0===n?void 0:n.toLowerCase())){t.n=3
break}return e&&(m(0),v(!1)),t.a(2)
case 3:if((l=sl(a.id))&&e)c({api_key:l,created_at:(new Date).toISOString(),requests_total:0,is_active:!0})
else if(e){for(u="sk_live_",d=0;d<48;d++)u+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62*Math.random()))
al(a.id,u),c({api_key:u,created_at:(new Date).toISOString(),requests_total:0,is_active:!0})}return t.n=4,El(a.id)
case 4:f=t.v,e&&m(f),t.n=6
break
case 5:t.p=5,t.v
case 6:return t.p=6,e&&v(!1),t.f(6)
case 7:return t.a(2)}},t,null,[[1,5,6,7]])}))
return function(){return t.apply(this,arguments)}}()
t()
var n=setInterval(s(r().m(function t(){var n
return r().w(function(t){for(;;)switch(t.n){case 0:if(!(a&&T&&e)){t.n=2
break}return t.n=1,El(a.id)
case 1:n=t.v,e&&m(n)
case 2:return t.a(2)}},t)})),2e3)
return()=>{e=!1,clearInterval(n)}},[a,T])
var C,R=function(){var e=s(r().m(function e(){var t,n,s
return r().w(function(e){for(;;)switch(e.n){case 0:if(a&&T){e.n=1
break}return e.a(2)
case 1:E(!0)
try{for(t="sk_live_",n=0;n<48;n++)t+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62*Math.random()))
al(a.id,t),s={api_key:t,created_at:(new Date).toISOString(),requests_total:0,is_active:!0},c(s),S(!0)}catch(r){alert("Error generating API key")}finally{E(!1)}case 2:return e.a(2)}},e)}))
return function(){return e.apply(this,arguments)}}(),P=function(){var e=s(r().m(function e(){return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(l){e.n=1
break}return e.a(2)
case 1:return e.p=1,e.n=2,navigator.clipboard.writeText(l.api_key)
case 2:w(!0),setTimeout(()=>w(!1),2e3),e.n=4
break
case 3:e.p=3,e.v
case 4:return e.a(2)}},e,null,[[1,3]])}))
return function(){return e.apply(this,arguments)}}()
return hn.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"20px"},onClick:e,children:hn.jsxs("div",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)",width:"100%",maxWidth:"600px",maxHeight:"90vh",overflow:"auto"},onClick:e=>e.stopPropagation(),children:[hn.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[hn.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[hn.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"8px",background:"#1a1a1a",border:"1px solid #333",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",fontWeight:700,color:"white"},children:"</>"}),hn.jsxs("div",{children:[hn.jsx("h2",{style:{margin:0,fontSize:"1.3rem"},children:"API Access"}),hn.jsx("p",{style:{margin:0,fontSize:"0.85rem",color:"var(--text-secondary)"},children:"API for programmatic searches"})]})]}),hn.jsx("button",{onClick:e,style:{background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1.5rem",padding:"4px"},children:"\xd7"})]}),hn.jsx("div",{style:{padding:"20px"},children:b?hn.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[hn.jsx("i",{className:"fas fa-spinner fa-spin",style:{fontSize:"2rem",color:"var(--primary)"}}),hn.jsx("p",{style:{marginTop:"12px",color:"var(--text-secondary)"},children:"Loading..."})]}):T?l?hn.jsxs(hn.Fragment,{children:[hn.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-md)",padding:"16px",marginBottom:"20px"},children:[hn.jsx("label",{style:{display:"block",fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"8px"},children:"Your API Key"}),hn.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[hn.jsx("code",{style:{flex:1,background:"var(--bg-card)",padding:"12px",borderRadius:"var(--radius-sm)",fontSize:"0.9rem",fontFamily:"monospace",wordBreak:"break-all",border:"1px solid var(--border-color)"},children:(C=l.api_key,j?C:C.substring(0,12)+"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022")}),hn.jsx("button",{onClick:()=>S(!j),style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",padding:"12px",cursor:"pointer",color:"var(--text-primary)"},title:j?"Hide":"Show",children:hn.jsx("i",{className:"fas fa-eye"+(j?"-slash":"")})}),hn.jsx("button",{onClick:P,style:{background:x?"#10b981":"var(--primary)",border:"none",borderRadius:"var(--radius-sm)",padding:"12px",cursor:"pointer",color:"white",transition:"background 0.2s"},title:"Copy",children:hn.jsx("i",{className:"fas fa-"+(x?"check":"copy")})})]})]}),hn.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"12px",marginBottom:"20px"},children:[hn.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-md)",padding:"16px",textAlign:"center"},children:[hn.jsx("div",{style:{fontSize:"1.5rem",fontWeight:700,color:"var(--primary)"},children:h}),hn.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Credits Remaining"})]}),hn.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-md)",padding:"16px",textAlign:"center"},children:[hn.jsx("div",{style:{fontSize:"1.5rem",fontWeight:700,color:"#ffd700"},children:(null==d?void 0:d.credits_per_day)||100}),hn.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Credits / Day"})]}),hn.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-md)",padding:"16px",textAlign:"center"},children:[hn.jsx("div",{style:{fontSize:"1.5rem",fontWeight:700,color:l.is_active?"#10b981":"#ef4444"},children:l.is_active?"Active":"Inactive"}),hn.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Status"})]})]}),hn.jsxs("div",{style:{background:"rgba(255, 215, 0, 0.1)",border:"1px solid rgba(255, 215, 0, 0.3)",borderRadius:"var(--radius-md)",padding:"12px 16px",marginBottom:"20px",fontSize:"0.85rem",color:"#ffd700",display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-info-circle"}),hn.jsx("span",{children:"Credits are shared between the website and API. Each search consumes 1 credit."})]}),hn.jsxs("button",{onClick:R,disabled:N,style:{width:"100%",padding:"12px",background:"transparent",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",color:"var(--text-secondary)",cursor:N?"not-allowed":"pointer",fontSize:"0.9rem",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[hn.jsx("i",{className:"fas fa-"+(N?"spinner fa-spin":"sync-alt")}),N?"Generating...":"Regenerate API Key"]}),hn.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-md)",padding:"16px"},children:[hn.jsxs("h3",{style:{margin:"0 0 12px 0",fontSize:"1rem"},children:[hn.jsx("i",{className:"fas fa-book",style:{marginRight:"8px",color:"var(--primary)"}}),"API Documentation"]}),hn.jsxs("div",{style:{fontSize:"0.9rem",color:"var(--text-secondary)"},children:[hn.jsx("p",{style:{margin:"0 0 12px 0"},children:hn.jsx("strong",{children:"Endpoint:"})}),hn.jsx("code",{style:{display:"block",background:"var(--bg-card)",padding:"12px",borderRadius:"var(--radius-sm)",marginBottom:"16px",fontSize:"0.85rem",wordBreak:"break-all"},children:"POST https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search"}),hn.jsx("p",{style:{margin:"0 0 8px 0"},children:hn.jsx("strong",{children:"Headers:"})}),hn.jsx("code",{style:{display:"block",background:"var(--bg-card)",padding:"12px",borderRadius:"var(--radius-sm)",marginBottom:"16px",fontSize:"0.85rem",whiteSpace:"pre-wrap"},children:`Content-Type: application/json\nX-API-Key: ${j?l.api_key:"sk_live_\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"}`}),hn.jsx("p",{style:{margin:"0 0 8px 0"},children:hn.jsx("strong",{children:"Body (JSON):"})}),hn.jsx("code",{style:{display:"block",background:"var(--bg-card)",padding:"12px",borderRadius:"var(--radius-sm)",marginBottom:"16px",fontSize:"0.85rem",whiteSpace:"pre-wrap"},children:'{\n  "query": "email@example.com",\n  "limit": 100\n}'}),hn.jsx("p",{style:{margin:"0 0 8px 0"},children:hn.jsx("strong",{children:"cURL Example:"})}),hn.jsx("code",{style:{display:"block",background:"var(--bg-card)",padding:"12px",borderRadius:"var(--radius-sm)",fontSize:"0.85rem",whiteSpace:"pre-wrap",overflowX:"auto"},children:`curl -X POST \\\n  https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search \\\n  -H "Content-Type: application/json" \\\n  -H "X-API-Key: ${j?l.api_key:"YOUR_API_KEY"}" \\\n  -d '{"query": "test@example.com"}'`})]})]})]}):hn.jsxs("div",{style:{textAlign:"center",padding:"40px 20px"},children:[hn.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"50%",background:"#1a1a1a",border:"1px solid #333",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",color:"white",margin:"0 auto 20px"},children:hn.jsx("i",{className:"fas fa-key"})}),hn.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"1.2rem"},children:"Generate Your API Key"}),hn.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"As a paid user (Beta, Beginner, Pro, or premium), you have access to our API for programmatic searches."}),hn.jsxs("button",{onClick:R,disabled:N,className:"btn btn-primary",style:{padding:"14px 28px",fontSize:"1rem",display:"inline-flex",alignItems:"center",gap:"8px"},children:[hn.jsx("i",{className:"fas fa-"+(N?"spinner fa-spin":"key")}),N?"Generating...":"Generate My API Key"]})]}):hn.jsxs("div",{style:{textAlign:"center",padding:"40px 20px"},children:[hn.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"50%",background:"rgba(239, 68, 68, 0.15)",border:"1px solid rgba(239, 68, 68, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",color:"#ef4444",margin:"0 auto 20px"},children:hn.jsx("i",{className:"fas fa-ban"})}),hn.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"1.2rem"},children:"API Reserved for Paid Plans"}),hn.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"20px",maxWidth:"420px",marginInline:"auto"},children:"Free accounts cannot generate API keys. Upgrade to Beta/Beginner/Pro/premium to unlock programmatic access."}),hn.jsxs("a",{href:"/pricing",className:"btn btn-primary",style:{padding:"12px 20px",display:"inline-flex",gap:"8px",alignItems:"center"},children:[hn.jsx("i",{className:"fas fa-arrow-up"}),"View Plans"]})]})})]})})},Cl=["deee5dc2-e37e-48ba-8da2-1fb5945cd235","3e45559e-299c-4d49-9fe8-b2c77237d2c9","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","f479668f-4129-4c67-91bb-decba5a0e804","46eea62a-4835-4b54-a23e-c20aee355760","946f8b8b-6057-4dc9-9615-e1cfa8eb9c9f","c5ac1d65-40ac-4b53-85b3-8cea8fdfe491"],Rl=()=>{var e=i(bn.useState(!1),2),t=e[0],n=e[1],a=i(bn.useState(!1),2),o=a[0],l=a[1],c=i(bn.useState(!1),2),u=c[0],d=c[1],f=i(bn.useState(!1),2),h=f[0],m=f[1],g=i(bn.useState(0),2),b=g[0],v=g[1],y=i(bn.useState(!1),2),x=y[0],w=y[1],k=i(bn.useState(0),2)[1],j=bn.useRef(null),S=V(),_=M(),N=Oo(),E=N.user,T=N.logout,C=Lo(),R=C.language,P=C.setLanguage,A=C.t,O=!!E&&Cl.includes(E.id)
bn.useEffect(()=>{if(!j.current){var e=((e,t,r)=>{var n=localStorage.getItem("seek_presence_id")
if(n)return n
var a=`visit_${null!==(e=null===(t=(r=crypto).randomUUID)||void 0===t?void 0:t.call(r))&&void 0!==e?e:Math.random().toString(36).slice(2)}`
return localStorage.setItem("seek_presence_id",a),a})(),t=No.channel("site_presence",{config:{presence:{key:e}}})
j.current=t
var r=()=>{var e=t.presenceState(),r=Object.values(e).reduce((e,t)=>e+(Array.isArray(t)?t.length:0),0)
k(r>0?r:1)}
return t.on("presence",{event:"sync"},r).subscribe(e=>{"SUBSCRIBED"===e&&(t.track({user_id:null,ts:Date.now()}),r())}),()=>{No.removeChannel(t),j.current=null}}},[]),bn.useEffect(()=>{var e,t=j.current
t&&t.track({user_id:null!==(e=null==E?void 0:E.id)&&void 0!==e?e:null,ts:Date.now()})},[null==E?void 0:E.id]),bn.useEffect(()=>{var e=function(){var e=s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:if(E){e.n=1
break}return w(!1),e.a(2)
case 1:try{w(!0)}catch(t){w(!0)}case 2:return e.a(2)}},e)}))
return function(){return e.apply(this,arguments)}}()
e()},[E]),bn.useEffect(()=>{if(E){var e=function(){var e=s(r().m(function e(){var t,n,a,s,i,o,l,c,u,d,f,h,m,g,b,y,x,w,k,j,S,_,N,T,C
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:e.p=0,t=`read_notifications_${E.id}`,n=localStorage.getItem(t)||"[]",a=[]
try{a=JSON.parse(n)}catch(r){a=[]}if(s=0,!O){e.n=3
break}return e.n=1,No.from("tickets").select("id").order("created_at",{ascending:!1}).limit(20)
case 1:if(i=e.v,o=i.data){l=p(o)
try{for(l.s();!(c=l.n()).done;)u=c.value,a.includes(`ticket-${u.id}`)||s++}catch(R){l.e(R)}finally{l.f()}}return e.n=2,No.from("ticket_messages").select("id").eq("is_owner",!1).order("created_at",{ascending:!1}).limit(30)
case 2:if(d=e.v,f=d.data){h=p(f)
try{for(h.s();!(m=h.n()).done;)g=m.value,a.includes(`msg-${g.id}`)||s++}catch(R){h.e(R)}finally{h.f()}}e.n=12
break
case 3:return e.n=4,No.from("tickets").select("id").eq("user_id",E.id)
case 4:if(b=e.v,!(y=b.data)){e.n=12
break}x=p(y),e.p=5,x.s()
case 6:if((w=x.n()).done){e.n=9
break}return k=w.value,e.n=7,No.from("ticket_messages").select("id").eq("ticket_id",k.id).eq("is_owner",!0)
case 7:if(j=e.v,S=j.data){_=p(S)
try{for(_.s();!(N=_.n()).done;)T=N.value,a.includes(`msg-${T.id}`)||s++}catch(R){_.e(R)}finally{_.f()}}case 8:e.n=6
break
case 9:e.n=11
break
case 10:e.p=10,C=e.v,x.e(C)
case 11:return e.p=11,x.f(),e.f(11)
case 12:v(s),e.n=14
break
case 13:e.p=13,e.v
case 14:return e.a(2)}},e,null,[[5,10,11,12],[0,13]])}))
return function(){return e.apply(this,arguments)}}()
e()
var t=window.setInterval(e,1e3),n=()=>{var e=new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleVQHAIve/NzFsKN+WjM5Z5Olr5h7WDgxQ1hufomEeWJNPD1MXGZ0eXhsXkxFRUlUX2dscW9pYltXWFxiZ2xua2hjX19hZWpucHBsZ2ViYmRnam1wb2xoZWNjZGdqbXBwbWpmZGRlZ2ptcG9saGVjY2RnZ2ptbmxnZGJhYmVnam1ubGhlY2JjZWdpbG5saGViYmJkZmlsbm1rZ2RiYmNlZ2lrbW1qZ2RiYmNlZ2lrbGxqZ2RhYGFjZWdqbG1qZ2RhYGFjZWdqbGxqZ2RhYGFjZWdqbGxqZ2RhYGBiZGZpamxrZ2RhYF9gYmRnaWtsaWdjYF9fYWNlaGpramdkYWBfYGJkZmhqamdkYWBfYGJkZmhqamdjYF9fYWNlaGlqaGViYF9fYGJkZmhpamdjYF5eX2BjZWdpamdhYF5dXmBiZGZoaGdjYF5dXmBiZGZoaGdhX15dXV9hY2VnaGhlYl9dXVxeYGJkZmhoZWFfXVtcXmBiZGZnZmNhXl1cXF5gYmRlZ2ZjYF5cW1xeYGJkZWdmY2BdXFtbXWBiZGVmZmNgXVtaWltdYGJjZWZlYl9cWllZW11fYWNlZWVjYF1bWVlZW15gYmNkZGNgXltaWFlaXF5gYWNkY2JgXVtZWFhaXF5gYWJjYmFfXFpZV1haXF1fYWJiYmFfXFpYV1hZW11fYGFiYmFfXFpYV1dZWl1eYGBhYWBfXVtZV1dYWlxdX2BhYWBfXFtZV1dYWVtdXmBgYGBfXFtZV1dYWVtcXl9gYGBfXFtZV1dYWVtcXl9fX19fXFtZV1ZXWFpbXV5fX19fXlxaWFdWV1haXF1eX19fXl1bWVhWVldYWlxdXl9fXl1bWldWVldYWltcXl5fXl1bWldWVldYWVtcXl5eXl1bWVdWVVdYWVtcXV5eXl1cWldWVVZXWFpbXF1eXl1cWldVVVZXWFpbXF1dXl1cWldVVFVWV1laW1xdXV1cW1dVVFRVV1hZWlxcXV1cW1lXVVRUVVdYWVpbXFxcW1pYVlRTU1RWV1hZW1tbXFtaWFZUUlNTVVZYWVpbW1tbWlhXVVNSUlNVVlhZWltbW1taWFdVU1JSU1VWV1lZW1tbW1pYVlVTUVJTVVZXWVpbW1taWlhWVFNRUVNUVldYWVpbW1taWVdVVFJRUVJUVVdYWVpaW1pZWFZUU1FRUlNUVldYWVpaWllYVlRTUVBRUlNVVldYWVlZWVhWVVNSUFBRUlNVVldYWVlZWFdVVFJRUFBRUlNVVldYWFlZWFdVU1JQUFBRU1RVVldYWFhYV1ZUU1FPT1BSU1RWVldYWFhYVlVTUVBPT1BSU1RVVldXWFhXVlRTUU9PT1BSU1RVVldXV1dWVVNSUE9OT1BSU1RVVlZXV1dWVVNSUE9OT1BRUlRVVlZXV1dWVFNRUE5OT1BSU1RVVlZWVlVUU1FQTU5OUFBRUlRVVVVWVlVUU1FQTU5OT1BRUlNUVVVWVlVUU1FPTk1NT09QUVJTVFVVVVVUUlFPTk1NTk9QUVJTVFVVVVRTUlBPTU1NTk9QUVJTVFRVVFRTUVBOTUxMTU5PUFFSUlNUVFRTUVBOTUxMTE1OT1BRUlJTU1NTUVBPTU1MTExNTk9QUVJSUlNTUlFPTk1MTExMTU5PUFBRUlJSUlFPTk1MTEtLTE1OT1BRUVFRUVFPTk1MS0tLTE1OT09QUVFRUVBPTUxLS0tLTE1OTk9QUFBQT09OTUxLS0tLTE1OTk9PT1BQT05NTExLS0tLTE1OTk9PT09PTk1NTExLS0tMTE1OTk5PT09OTk1MTEtLSktLTE1NTk5OTk5NTUxMS0tKSkpLTE1NTU5OTk1NTExLS0pKSktLTE1NTU5OTU1MTEtLSkpKSktLTE1NTU1NTUxMS0tKSkpKSktLTE1NTU1NTExLS0pKSkpKSktMTExMTExMTEtLSkpKSkpKSktMTExMTExMS0tKSkpKSkpKSktMTExMTEtLS0tKSkpKSkpKSktLTExMTEtLSkpKSkpKSkpKS0tMTExLS0tKSkpKSkpKSkpKSkpLS0tKSkpJSklKSkpKSkpKSkpKS0pKSkpJSUlKSkpKSkpKSkpKSkpKSkpJSUlJSkpKSkpKSkpKSkpKSkpJSUlJSUlKSkpKSkpKSkpKSkpJSUlJSUlJSUlKSkpKSkpKSklJSUlJSUlJSUlJSkpKSkpKSklJSUlJSUlJSUlJSkpKSklJSUlJSUlJSUlJSUlJSkpJSUlJSUlJSUlJSUlJSUlJSklJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSQ==")
e.volume=.5,e.play().catch(()=>{})},a=No.channel("navbar-tickets").on("postgres_changes",{event:"INSERT",schema:"public",table:"tickets"},()=>{O&&(n(),e())}).subscribe(),i=No.channel("navbar-messages").on("postgres_changes",{event:"INSERT",schema:"public",table:"ticket_messages"},t=>{var r=t.new;(O&&!r.is_owner||!O&&r.is_owner)&&(n(),e())}).subscribe()
return()=>{window.clearInterval(t),No.removeChannel(a),No.removeChannel(i)}}v(0)},[null==E?void 0:E.id,O])
var I=e=>S.pathname===e,z=function(){var e=s(r().m(function e(){return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,T()
case 1:e.n=3
break
case 2:e.p=2,e.v
case 3:return e.p=3,n(!1),_("/"),e.f(3)
case 4:return e.a(2)}},e,null,[[0,2,3,4]])}))
return function(){return e.apply(this,arguments)}}()
return hn.jsxs(hn.Fragment,{children:[hn.jsx("div",{style:{padding:"12px 20px 0 20px"},children:hn.jsx("nav",{style:{background:"#000000",border:"1px solid #333",borderRadius:"12px",padding:"0 24px",position:"sticky",top:"12px",zIndex:1e3,maxWidth:"1200px",margin:"0 auto",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.3)"},children:hn.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"50px"},children:[hn.jsx(aa,{to:"/",className:"navbar-logo",style:{display:"flex",alignItems:"center",textDecoration:"none"},children:hn.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:hn.jsx("span",{className:"logo-title",style:{fontSize:"1.3rem",fontWeight:700,color:"white",lineHeight:1},children:"Dbs"})})}),hn.jsxs("ul",{style:{display:"flex",alignItems:"center",gap:"4px",listStyle:"none",margin:0,padding:0},className:"desktop-nav",children:[hn.jsx("li",{children:hn.jsx(aa,{to:"/",className:"nav-link "+(I("/")?"active":""),children:A("nav.home")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/features",className:"nav-link "+(I("/features")?"active":""),children:A("nav.features")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/pricing",className:"nav-link "+(I("/pricing")?"active":""),children:A("nav.pricing")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/about",className:"nav-link "+(I("/about")?"active":""),children:A("nav.about")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/contact",className:"nav-link "+(I("/contact")?"active":""),children:A("nav.contact")})}),E&&x&&hn.jsx("li",{children:hn.jsx(aa,{to:"/tickets",className:"nav-link "+(I("/tickets")?"active":""),children:A("nav.tickets")})}),E&&x&&hn.jsx("li",{children:hn.jsx(aa,{to:"/api-docs",className:"nav-link "+(I("/api-docs")?"active":""),children:A("nav.api")})})]}),hn.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},className:"desktop-nav",children:[hn.jsxs("button",{onClick:()=>P("fr"===R?"en":"fr"),style:{background:"transparent",border:"1px solid #444",color:"#ffffff",padding:"6px 10px",borderRadius:"6px",cursor:"pointer",fontSize:"0.8rem",fontWeight:600,transition:"all 0.2s",display:"flex",alignItems:"center",gap:"4px"},className:"language-toggle",children:[hn.jsx("i",{className:"fas fa-globe"}),"fr"===R?"EN":"FR"]}),E?hn.jsxs(hn.Fragment,{children:[E&&x&&hn.jsx("button",{onClick:()=>m(!0),style:{background:"transparent",border:"1px solid #444",color:"#ffffff",padding:"6px 10px",borderRadius:"6px",cursor:"pointer",fontSize:"0.8rem",fontWeight:600,transition:"all 0.2s"},title:A("nav.apiAccess"),children:"</>"}),hn.jsx("button",{className:"icon-btn",onClick:()=>l(!0),style:{background:"transparent",border:"none",color:"#888888",padding:"8px",borderRadius:"6px",cursor:"pointer",fontSize:"0.95rem",transition:"color 0.2s ease"},title:A("nav.settings"),children:hn.jsx("i",{className:"fas fa-cog"})}),hn.jsxs("button",{className:"icon-btn",onClick:()=>d(!0),style:{background:"transparent",border:"none",color:"#888888",padding:"8px",borderRadius:"6px",cursor:"pointer",fontSize:"0.95rem",position:"relative",transition:"color 0.2s ease"},title:A("nav.inbox"),children:[hn.jsx("i",{className:"fas fa-inbox"}),b>0&&hn.jsx("span",{style:{position:"absolute",top:"0",right:"0",background:"#ff4757",color:"white",borderRadius:"50%",width:"15px",height:"15px",fontSize:"0.6rem",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",animation:"pulse 2s infinite"},children:b>9?"9+":b})]}),hn.jsx("button",{onClick:z,style:{background:"#ffffff",border:"none",color:"#000000",padding:"7px 14px",borderRadius:"6px",cursor:"pointer",fontSize:"0.8rem",fontWeight:600,transition:"all 0.2s"},children:A("nav.logout")})]}):hn.jsxs(hn.Fragment,{children:[hn.jsx(aa,{to:"/login",style:{color:"#888888",textDecoration:"none",padding:"7px 14px",borderRadius:"6px",fontSize:"0.85rem",fontWeight:500,transition:"all 0.2s"},children:A("nav.login")}),hn.jsx(aa,{to:"/register",style:{background:"#ffffff",color:"#000000",textDecoration:"none",padding:"7px 14px",borderRadius:"6px",fontSize:"0.85rem",fontWeight:600,transition:"all 0.2s"},children:A("nav.register")})]})]}),hn.jsx("button",{className:"mobile-menu-btn",onClick:()=>n(!t),style:{display:"none",background:"transparent",border:"none",color:"white",fontSize:"1.3rem",cursor:"pointer",padding:"8px"},children:hn.jsx("i",{className:"fas "+(t?"fa-times":"fa-bars")})})]})})}),t&&hn.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:2e3,padding:"80px 16px 24px 16px",boxSizing:"border-box"},onClick:()=>n(!1),children:hn.jsx("div",{style:{background:"#000000",border:"1px solid #333",borderRadius:"12px",padding:"16px",maxHeight:"calc(100vh - 120px)",overflowY:"auto",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.5)",pointerEvents:"auto"},onClick:e=>e.stopPropagation(),children:hn.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:"4px"},children:[hn.jsx("li",{children:hn.jsx(aa,{to:"/",onClick:()=>n(!1),style:{display:"block",color:I("/")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:I("/")?"rgba(255, 255, 255, 0.05)":"transparent"},children:A("nav.home")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/features",onClick:()=>n(!1),style:{display:"block",color:I("/features")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:I("/features")?"rgba(255, 255, 255, 0.05)":"transparent"},children:A("nav.features")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/pricing",onClick:()=>n(!1),style:{display:"block",color:I("/pricing")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:I("/pricing")?"rgba(255, 255, 255, 0.05)":"transparent"},children:A("nav.pricing")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/about",onClick:()=>n(!1),style:{display:"block",color:I("/about")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:I("/about")?"rgba(255, 255, 255, 0.05)":"transparent"},children:A("nav.about")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/contact",onClick:()=>n(!1),style:{display:"block",color:I("/contact")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:I("/contact")?"rgba(255, 255, 255, 0.05)":"transparent"},children:A("nav.contact")})}),E&&x&&hn.jsxs(hn.Fragment,{children:[hn.jsx("li",{children:hn.jsx(aa,{to:"/tickets",onClick:()=>n(!1),style:{display:"block",color:I("/tickets")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:I("/tickets")?"rgba(255, 255, 255, 0.05)":"transparent"},children:A("nav.tickets")})}),E&&x&&hn.jsxs(hn.Fragment,{children:[hn.jsx("li",{children:hn.jsx(aa,{to:"/api-docs",onClick:()=>n(!1),style:{display:"block",color:I("/api-docs")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:I("/api-docs")?"rgba(255, 255, 255, 0.05)":"transparent"},children:A("nav.apidocs")})}),hn.jsx("li",{children:hn.jsxs("button",{onClick:()=>{n(!1),m(!0)},style:{display:"block",width:"100%",textAlign:"left",color:"#888888",background:"transparent",border:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",cursor:"pointer"},children:[hn.jsx("span",{style:{color:"#ffffff",fontWeight:600},children:"</>"})," ",A("nav.apiAccess")]})})]}),hn.jsx("li",{style:{borderTop:"1px solid #222",marginTop:"8px",paddingTop:"8px"},children:hn.jsxs("button",{onClick:()=>{n(!1),d(!0)},style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",textAlign:"left",color:"#888888",background:"transparent",border:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",cursor:"pointer"},children:[hn.jsx("i",{className:"fas fa-inbox"})," ",A("nav.inbox"),b>0&&hn.jsx("span",{style:{background:"#ff4757",color:"white",borderRadius:"10px",padding:"2px 8px",fontSize:"0.7rem",fontWeight:600},children:b})]})}),hn.jsx("li",{children:hn.jsxs("button",{onClick:()=>{n(!1),l(!0)},style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",textAlign:"left",color:"#888888",background:"transparent",border:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",cursor:"pointer"},children:[hn.jsx("i",{className:"fas fa-cog"})," ",A("nav.settings")]})}),hn.jsx("li",{children:hn.jsx("button",{onClick:z,style:{display:"block",width:"100%",textAlign:"center",color:"#000000",background:"#ffffff",border:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",marginTop:"4px"},children:A("nav.logout")})})]}),!E&&hn.jsxs(hn.Fragment,{children:[hn.jsx("li",{style:{borderTop:"1px solid #222",marginTop:"8px",paddingTop:"8px"},children:hn.jsx(aa,{to:"/login",onClick:()=>n(!1),style:{display:"block",color:"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem"},children:A("nav.login")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/register",onClick:()=>n(!1),style:{display:"block",background:"#ffffff",color:"#000000",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",textAlign:"center",fontWeight:600},children:A("nav.register")})})]})]})})}),o&&hn.jsx(Yo,{onClose:()=>l(!1)}),u&&hn.jsx(Jo,{onClose:()=>d(!1)}),h&&hn.jsx(Tl,{onClose:()=>m(!1)}),hn.jsx("style",{children:"\n        @keyframes pulse {\n          0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7); }\n          70% { box-shadow: 0 0 0 6px rgba(255, 107, 107, 0); }\n          100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); }\n        }\n\n        @keyframes pulse-dot {\n          0%, 100% {\n            opacity: 1;\n            transform: scale(1);\n          }\n          50% {\n            opacity: 0.5;\n            transform: scale(0.8);\n          }\n        }\n\n        .desktop-nav {\n          display: flex !important;\n        }\n\n        .mobile-menu-btn {\n          display: none !important;\n        }\n\n        /* Animation de survol pour les liens de navigation */\n        .nav-link {\n          position: relative;\n          color: #888888;\n          text-decoration: none;\n          padding: 8px 12px;\n          border-radius: 6px;\n          font-size: 0.85rem;\n          font-weight: 500;\n          transition: color 0.3s ease;\n        }\n\n        .nav-link::after {\n          content: '';\n          position: absolute;\n          bottom: 2px;\n          left: 12px;\n          right: 12px;\n          height: 2px;\n          background: #ffffff;\n          transform: scaleX(0);\n          transform-origin: center;\n          transition: transform 0.3s ease;\n        }\n\n        .nav-link:hover {\n          color: #ffffff;\n        }\n\n        .nav-link:hover::after {\n          transform: scaleX(1);\n        }\n\n        .nav-link.active {\n          color: #ffffff;\n        }\n\n        .nav-link.active::after {\n          transform: scaleX(1);\n        }\n\n        /* Hover pour les boutons ic\xf4nes */\n        .icon-btn:hover {\n          color: #ffffff !important;\n        }\n\n        .users-mobile {\n          display: none;\n        }\n\n        .users-desktop {\n          display: inline;\n        }\n\n        @media (max-width: 900px) {\n          .desktop-nav {\n            display: none !important;\n          }\n          .mobile-menu-btn {\n            display: block !important;\n          }\n          .logo-title {\n            font-size: 1.1rem !important;\n          }\n          .logo-status {\n            font-size: 0.6rem !important;\n            gap: 3px !important;\n          }\n          .logo-status span:first-child {\n            width: 5px !important;\n            height: 5px !important;\n          }\n          .users-desktop {\n            display: none !important;\n          }\n          .users-mobile {\n            display: inline !important;\n          }\n        }\n      "})]})},Pl=()=>{var e=Lo().t
return hn.jsx("footer",{className:"footer",children:hn.jsxs("div",{className:"container",children:[hn.jsxs("div",{className:"footer-grid",children:[hn.jsxs("div",{className:"footer-brand",children:[hn.jsx(aa,{to:"/",className:"logo",children:hn.jsx("span",{className:"logo-text",children:"Dbs"})}),hn.jsx("p",{children:e("footer.brand.desc")}),hn.jsxs("div",{className:"footer-social",children:[hn.jsx("a",{href:"https://discord.gg/Dbs",target:"_blank",rel:"noopener noreferrer",children:hn.jsx("i",{className:"fab fa-discord"})}),hn.jsx("a",{href:"https://t.me/Dbsleaks",target:"_blank",rel:"noopener noreferrer",children:hn.jsx("i",{className:"fab fa-telegram"})})]})]}),hn.jsxs("div",{className:"footer-links",children:[hn.jsx("h4",{children:e("footer.product")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:hn.jsx(aa,{to:"/features",children:e("footer.features")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/pricing",children:e("footer.pricing")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/api-docs",children:e("footer.api")})}),hn.jsx("li",{children:hn.jsx("a",{href:"#",children:e("footer.changelog")})})]})]}),hn.jsxs("div",{className:"footer-links",children:[hn.jsx("h4",{children:e("footer.company")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:hn.jsx(aa,{to:"/about",children:e("footer.about")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/contact",children:e("footer.contact")})}),hn.jsx("li",{children:hn.jsx("a",{href:"#",children:e("footer.careers")})}),hn.jsx("li",{children:hn.jsx("a",{href:"#",children:e("footer.blog")})})]})]}),hn.jsxs("div",{className:"footer-links",children:[hn.jsx("h4",{children:e("footer.legal")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:hn.jsx(aa,{to:"/privacy",children:e("footer.privacy")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/terms",children:e("footer.terms")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/gdpr",children:e("footer.gdpr")})}),hn.jsx("li",{children:hn.jsx(aa,{to:"/security",children:e("footer.security")})})]})]})]}),hn.jsxs("div",{className:"footer-bottom",children:[hn.jsx("p",{children:e("footer.copyright")}),hn.jsxs("div",{className:"footer-badges",children:[hn.jsxs("span",{children:[hn.jsx("i",{className:"fas fa-lock"})," ",e("footer.secure")]}),hn.jsxs("span",{children:[hn.jsx("i",{className:"fas fa-check-circle"})," ",e("footer.gdpr_compliant")]})]})]})]})})},Al=()=>{var e=Oo(),t=e.showLoginPopup,r=e.profile
return t?hn.jsx("div",{className:"login-popup",children:hn.jsxs("div",{className:"login-popup-content",children:[hn.jsx("i",{className:"fas fa-check-circle"}),hn.jsxs("span",{children:["Welcome back",null!=r&&r.username?`, ${r.username}`:"","!"]})]})}):null},Ol=()=>{var e=Lo().t,t=i(bn.useState(!1),2),r=t[0],n=t[1]
bn.useEffect(()=>{localStorage.getItem("librewolf_notice_dismissed")||navigator.userAgent.toLowerCase().includes("librewolf")||setTimeout(()=>{n(!0)},2e3)},[])
var a=()=>{n(!1),localStorage.setItem("librewolf_notice_dismissed","true")}
return r?hn.jsxs(hn.Fragment,{children:[hn.jsxs("div",{className:"browser-notice",style:{position:"fixed",bottom:"24px",right:"24px",maxWidth:"400px",background:"#000",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"16px",padding:"20px",zIndex:9998,boxShadow:"0 10px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 255, 255, 0.1)",animation:"slideInNotice 0.5s ease-out"},children:[hn.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"12px"},children:[hn.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[hn.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"12px",background:"#111",border:"1px solid rgba(255, 255, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 15px rgba(255, 255, 255, 0.1)"},children:hn.jsx("i",{className:"fas fa-globe",style:{fontSize:"1.3rem",color:"#fff"}})}),hn.jsxs("div",{children:[hn.jsx("h4",{style:{margin:0,fontSize:"1rem",fontWeight:700,color:"#fff"},children:e("browser.notice.title")}),hn.jsx("span",{style:{fontSize:"0.75rem",color:"rgba(255, 255, 255, 0.5)"},children:e("browser.notice.subtitle")})]})]}),hn.jsx("button",{onClick:a,style:{background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"8px",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"rgba(255, 255, 255, 0.6)",transition:"all 0.2s ease"},onMouseOver:e=>{e.currentTarget.style.background="rgba(255, 255, 255, 0.2)",e.currentTarget.style.color="#fff"},onMouseOut:e=>{e.currentTarget.style.background="rgba(255, 255, 255, 0.1)",e.currentTarget.style.color="rgba(255, 255, 255, 0.6)"},children:hn.jsx("i",{className:"fas fa-times",style:{fontSize:"0.9rem"}})})]}),hn.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"0.9rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:1.6},children:[e("browser.notice.message")," ",hn.jsx("strong",{style:{color:"#fff"},children:"LibreWolf"})]}),hn.jsxs("a",{href:"https://librewolf.net/installation/",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",width:"100%",padding:"12px 20px",background:"#fff",border:"none",borderRadius:"10px",color:"#000",fontSize:"0.9rem",fontWeight:600,textDecoration:"none",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 0 20px rgba(255, 255, 255, 0.2)"},onMouseOver:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 0 30px rgba(255, 255, 255, 0.3)"},onMouseOut:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 0 20px rgba(255, 255, 255, 0.2)"},children:[hn.jsx("i",{className:"fas fa-download"}),e("browser.notice.button")]}),hn.jsx("button",{onClick:a,style:{display:"block",width:"100%",marginTop:"12px",padding:"8px",background:"transparent",border:"none",color:"rgba(255, 255, 255, 0.4)",fontSize:"0.8rem",cursor:"pointer",transition:"color 0.2s ease"},onMouseOver:e=>{e.currentTarget.style.color="rgba(255, 255, 255, 0.7)"},onMouseOut:e=>{e.currentTarget.style.color="rgba(255, 255, 255, 0.4)"},children:e("browser.notice.dismiss")})]}),hn.jsx("style",{children:"\n        @keyframes slideInNotice {\n          from {\n            opacity: 0;\n            transform: translateX(100px);\n          }\n          to {\n            opacity: 1;\n            transform: translateX(0);\n          }\n        }\n\n        @media (max-width: 480px) {\n          .browser-notice {\n            left: 16px !important;\n            right: 16px !important;\n            bottom: 16px !important;\n            max-width: none !important;\n          }\n        }\n      "})]}):null},Il=()=>{var e=bn.useRef(null),t=bn.useRef(null),r=bn.useRef({x:0,y:0})
return bn.useEffect(()=>{var n=t.current
if(n){var a=n.getContext("2d")
if(a){n.width=window.innerWidth,n.height=window.innerHeight
var s,i=()=>{(()=>{a.clearRect(0,0,n.width,n.height)
for(var e=r.current.x,t=r.current.y,s=0;s<=n.width;s+=50)for(var i=0;i<=n.height;i+=50){var o=s-e,l=i-t,c=Math.sqrt(o*o+l*l)
if(c<150){var u=12*(1-c/150),d=o/c*u*.3,p=l/c*u*.3,f=.25*(1-c/150)
a.strokeStyle=`rgba(255, 255, 255, ${f})`,a.lineWidth=1.5,a.beginPath(),a.moveTo(s+d,i+p-u),a.lineTo(s+50+d,i+p-u),a.stroke(),a.beginPath(),a.moveTo(s+d,i+p-u),a.lineTo(s+d,i+50+p-u),a.stroke()}}})(),s=requestAnimationFrame(i)},o=t=>{r.current={x:t.clientX,y:t.clientY},e.current&&(e.current.style.left=`${t.clientX}px`,e.current.style.top=`${t.clientY}px`,e.current.style.opacity="1"),n&&(n.style.opacity="1")},l=()=>{e.current&&(e.current.style.opacity="0"),n&&(n.style.opacity="0")},c=()=>{n.width=window.innerWidth,n.height=window.innerHeight}
return document.addEventListener("mousemove",o),document.addEventListener("mouseleave",l),window.addEventListener("resize",c),i(),()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseleave",l),window.removeEventListener("resize",c),cancelAnimationFrame(s)}}}},[]),hn.jsxs(hn.Fragment,{children:[hn.jsx("div",{id:"mouse-glow",ref:e}),hn.jsx("canvas",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:-9999,opacity:0,transition:"opacity 0.3s ease"}})]})},zl=["deee5dc2-e37e-48ba-8da2-1fb5945cd235","3e45559e-299c-4d49-9fe8-b2c77237d2c9","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","f479668f-4129-4c67-91bb-decba5a0e804","46eea62a-4835-4b54-a23e-c20aee355760","946f8b8b-6057-4dc9-9615-e1cfa8eb9c9f","c5ac1d65-40ac-4b53-85b3-8cea8fdfe491"],Ll={owner:{label:"Owner",color:"#ffd700",bg:"rgba(255, 215, 0, 0.12)",border:"rgba(255, 215, 0, 0.4)"},staff:{label:"Staff",color:"#ff6b6b",bg:"rgba(255, 107, 107, 0.12)",border:"rgba(255, 107, 107, 0.35)"},developer:{label:"Developer",color:"#00d4ff",bg:"rgba(0, 212, 255, 0.12)",border:"rgba(0, 212, 255, 0.4)"},premium:{label:"Premium",color:"#f59f00",bg:"rgba(245, 159, 0, 0.12)",border:"rgba(245, 159, 0, 0.35)"},pro:{label:"Pro",color:"#4dabf7",bg:"rgba(77, 171, 247, 0.12)",border:"rgba(77, 171, 247, 0.35)"},beginner:{label:"Beginner",color:"#a855f7",bg:"rgba(168, 85, 247, 0.12)",border:"rgba(168, 85, 247, 0.35)"},beta:{label:"Beta",color:"#845ef7",bg:"rgba(132, 94, 247, 0.12)",border:"rgba(132, 94, 247, 0.35)"},free:{label:"Free",color:"#a0a0a0",bg:"rgba(255, 255, 255, 0.06)",border:"rgba(255, 255, 255, 0.18)"}},Dl={founder:{label:"Founder",color:"#ffd700",bg:"rgba(255, 215, 0, 0.12)",icon:"fa-crown"},developer:{label:"Developer",color:"#00d4ff",bg:"rgba(0, 212, 255, 0.12)",icon:"fa-code"},promoter:{label:"Promoter",color:"#a855f7",bg:"rgba(168, 85, 247, 0.12)",icon:"fa-bullhorn"},early:{label:"Early",color:"#e0e0e0",bg:"rgba(224, 224, 224, 0.12)",icon:"fa-eye"},buyer:{label:"Buyer",color:"#ff6b9d",bg:"rgba(255, 107, 157, 0.12)",icon:"fa-money-bill-wave"},bug_hunter:{label:"Bug Hunter",color:"#51cf66",bg:"rgba(81, 207, 102, 0.12)",icon:"fa-bug"},vip:{label:"VIP",color:"#ffd700",bg:"rgba(255, 215, 0, 0.12)",icon:"fa-gem"},partner:{label:"Partner",color:"#4dabf7",bg:"rgba(77, 171, 247, 0.12)",icon:"fa-handshake"},staff:{label:"Staff",color:"#ff6b6b",bg:"rgba(255, 107, 107, 0.12)",icon:"fa-shield-alt"},beta_tester:{label:"Beta Tester",color:"#845ef7",bg:"rgba(132, 94, 247, 0.12)",icon:"fa-flask"},premium:{label:"Premium",color:"#f59f00",bg:"rgba(245, 159, 0, 0.12)",icon:"fa-star"}},Ul=e=>{switch((e||"").toLowerCase()){case"beginner":return"beginner"
case"pro":return"pro"
case"premium":return"premium"
case"beta":return"beta"
case"blocked":return"blocked"
default:return"free"}},$l=()=>{var e=Oo(),t=e.user,n=e.profile,a=M(),o=i(bn.useState(!1),2),l=o[0],c=o[1],u=i(bn.useState(()=>(()=>{var e=Date.now()
return[{id:"msg-1",username:"WalSo",role:"owner",badges:["founder","developer","vip","premium"],content:"Bienvenue sur le Live Chat Dbs. Respectez la confidentialit\xe9, restez concis et courtois.",timestamp:new Date(e-48e4).toISOString(),avatar:""},{id:"msg-2",username:"Swith",role:"staff",badges:["staff","partner","promoter"],content:"Support en ligne : partagez votre contexte et votre plan, un membre de l\u2019\xe9quipe vous r\xe9pond.",timestamp:new Date(e-36e4).toISOString()},{id:"msg-3",username:"Quraiv",role:"developer",badges:["developer","bug_hunter"],content:"Nouveau pipeline realtime pr\xeat pour les prochaines releases. Merci pour vos retours.",timestamp:new Date(e-3e5).toISOString()},{id:"msg-4",username:"BetaOps",role:"beta",badges:["beta_tester","buyer"],content:"Les flux Beta sont stables c\xf4t\xe9 API. Webhook priv\xe9 dispo si besoin.",timestamp:new Date(e-18e4).toISOString()},{id:"msg-5",username:"EarlyFox",role:"free",badges:["early"],content:"Je d\xe9couvre Dbs, interface tr\xe8s fluide. Des conseils pour optimiser les recherches ?",timestamp:new Date(e-12e4).toISOString()},{id:"msg-6",username:"ShadowHQ",role:"premium",badges:["vip","premium","buyer"],content:"premium : latence quasi nulle sur les requ\xeates bulk. Merci pour le support rapide.",timestamp:new Date(e-6e4).toISOString()},{id:"msg-7",username:"HunterX",role:"pro",badges:["bug_hunter"],content:"Trouv\xe9 un edge case sur le module tickets. Patch en cours.",timestamp:new Date(e-3e4).toISOString()}]})()),2),d=u[0],p=u[1],f=i(bn.useState(""),2),h=f[0],m=f[1],g=i(bn.useState(null),2),b=g[0],v=g[1],y=i(bn.useState([]),2),x=y[0],w=y[1],k=i(bn.useState(!1),2),j=k[0],S=k[1],_=i(bn.useState(!0),2),N=_[0],E=_[1],T=i(bn.useState(null),2),C=T[0],R=T[1],P=i(bn.useState(null),2),A=P[0],O=P[1],I=i(bn.useState(null),2),z=I[0],L=I[1],D=i(bn.useState(null),2),U=D[0],$=D[1],F=i(bn.useState(null),2),B=F[0],W=F[1],V=bn.useRef(null),q=bn.useRef(null),H=["founder","owner","staff","developer","premium","pro","beginner","beta","free"],K=bn.useMemo(()=>null!=n&&n.username?n.username:null!=t&&t.email?t.email.split("@")[0]:"You",[null==n?void 0:n.username,null==t?void 0:t.email])
bn.useEffect(()=>{if(null!=t&&t.id){var e=!0,n=function(){var n=s(r().m(function n(){var a,s,i,o
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,No.from("user_plans").select("plan").eq("user_id",t.id).maybeSingle()
case 1:if(a=r.v,s=a.data,i=a.error,e){r.n=2
break}return r.a(2)
case 2:v(!i&&s?{plan:Ul(null!==(o=null==s?void 0:s.plan)&&void 0!==o?o:"free")}:{plan:"free"}),r.n=4
break
case 3:r.p=3,r.v,e&&v({plan:"free"})
case 4:return r.a(2)}},n,null,[[0,3]])}))
return function(){return n.apply(this,arguments)}}()
return n(),()=>{e=!1}}v(null)},[null==t?void 0:t.id]),bn.useEffect(()=>{if(null!=t&&t.id){var e=!0,n=function(){var n=s(r().m(function n(){var a,s,i,o
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.p=0,r.n=1,No.from("user_badges").select("badge").eq("user_id",t.id)
case 1:if(a=r.v,s=a.data,i=a.error,e){r.n=2
break}return r.a(2)
case 2:!i&&s?(o=s.map(e=>e.badge).filter(e=>Boolean(Dl[e])),w(o)):w([]),r.n=4
break
case 3:r.p=3,r.v,e&&w([])
case 4:return r.a(2)}},n,null,[[0,3]])}))
return function(){return n.apply(this,arguments)}}()
return n(),()=>{e=!1}}w([])},[null==t?void 0:t.id]),bn.useEffect(()=>{if(l){var e=V.current
e&&(e.scrollTop=e.scrollHeight)}},[d,l]),bn.useEffect(()=>{if(l&&q.current&&t){var e=window.setTimeout(()=>{var e
return null===(e=q.current)||void 0===e?void 0:e.focus()},150)
return()=>window.clearTimeout(e)}},[l,t])
var Y=bn.useMemo(()=>{var e=Ul(null==b?void 0:b.plan),r=new Set
"premium"===e&&(r.add("premium"),r.add("buyer")),"pro"!==e&&"beginner"!==e||r.add("buyer"),"beta"===e&&r.add("beta_tester"),t&&zl.includes(t.id)&&r.add("founder"),x.forEach(e=>{Dl[e]&&r.add(e)})
var n=["founder","developer","staff","vip","premium","partner","buyer","beta_tester","bug_hunter","promoter","early"]
return Array.from(r).sort((e,t)=>n.indexOf(e)-n.indexOf(t))},[t,x,null==b?void 0:b.plan]),G=bn.useMemo(()=>{if(t&&zl.includes(t.id))return"owner"
if(x.includes("staff"))return"staff"
if(x.includes("developer"))return"developer"
var e=Ul(null==b?void 0:b.plan)
return"premium"===e?"premium":"pro"===e?"pro":"beginner"===e?"beginner":"beta"===e?"beta":"free"},[t,x,null==b?void 0:b.plan]),J=bn.useMemo(()=>!(!t||!zl.includes(t.id)&&!x.includes("staff")&&!x.includes("founder")),[t,x]),X=e=>!(!t||e.userId!==t.id&&!x.includes("staff")&&!x.includes("founder")&&!zl.includes(t.id)),Z=function(){var e=s(r().m(function e(n){return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(t){e.n=1
break}return e.a(2)
case 1:return R(n),e.p=2,e.n=3,No.from("chat_messages").delete().eq("id",n)
case 3:e.v.error?Bo():p(e=>e.filter(e=>e.id!==n)),e.n=5
break
case 4:e.p=4,e.v
case 5:return e.p=5,R(null),e.f(5)
case 6:return e.a(2)}},e,null,[[2,4,5,6]])}))
return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=s(r().m(function e(n,a){var s
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(t){e.n=1
break}return e.a(2)
case 1:return O(n),e.p=2,s=new Date(Date.now()+6e4*a).toISOString(),e.n=3,No.from("chat_mutes").insert({user_id:n,expires_at:s,created_by:t.id,reason:`Muted for ${a} min`})
case 3:e.v.error?Bo():n===t.id&&(L(s),$(`Vous \xeates en mute jusqu'\xe0 ${new Date(s).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`)),e.n=5
break
case 4:e.p=4,e.v
case 5:return e.p=5,O(null),e.f(5)
case 6:return e.a(2)}},e,null,[[2,4,5,6]])}))
return function(t,r){return e.apply(this,arguments)}}(),ee=bn.useCallback(s(r().m(function e(){var n,a
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(t){e.n=1
break}return L(null),$(null),e.a(2)
case 1:return e.p=1,e.n=2,No.from("chat_mutes").select("expires_at").eq("user_id",t.id).gt("expires_at",(new Date).toISOString()).order("expires_at",{ascending:!1}).maybeSingle()
case 2:n=e.v,a=n.data,!n.error&&null!=a&&a.expires_at?(L(a.expires_at),$(`Vous \xeates en mute jusqu'\xe0 ${new Date(a.expires_at).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`)):(L(null),$(null)),e.n=4
break
case 3:e.p=3,e.v
case 4:return e.a(2)}},e,null,[[1,3]])})),[t]),te=(e,t)=>{var r=Dl[e]||Ll[e]
return r?hn.jsxs("span",{className:"live-chat-badge",style:{color:r.color,background:r.bg,borderColor:r.bg},children:[hn.jsx("i",{className:`fas ${r.icon}`}),r.label]},`${e}-${t}`):null},re=e=>{var t=Ll[e]||Dl[e]
return t?hn.jsx("span",{className:"live-chat-role",style:{color:t.color,background:t.bg,borderColor:t.border},children:t.label}):null},ne=(e,t)=>{var r,n
return{id:e.id,userId:null!==(r=e.user_id)&&void 0!==r?r:void 0,username:e.username||"Guest",role:Ll[e.role]?e.role:"free",badges:Array.isArray(e.badges)?e.badges.filter(e=>Boolean(Dl[e])):[],content:e.content,timestamp:e.created_at,avatar:null!==(n=e.avatar_url)&&void 0!==n?n:void 0,isOwn:t}},ae=(e,t)=>{var r=e.findIndex(e=>e.id===t.id)
if(-1!==r){var n=[...e]
return n[r]=t,n}return[...e,t].sort((e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()).slice(-300)}
bn.useEffect(()=>{var e=!0,t=function(){var t=s(r().m(function t(){var n,a,s,i
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return E(!0),t.p=1,t.n=2,No.from("chat_messages").select("*").order("created_at",{ascending:!0}).limit(300)
case 2:if(n=t.v,a=n.data,s=n.error,e){t.n=3
break}return t.a(2)
case 3:!s&&a&&(i=a.map(e=>ne(e)),p(i)),t.n=5
break
case 4:t.p=4,t.v
case 5:return t.p=5,e&&E(!1),t.f(5)
case 6:return t.a(2)}},t,null,[[1,4,5,6]])}))
return function(){return t.apply(this,arguments)}}()
return t(),()=>{e=!1}},[]),bn.useEffect(()=>{var e=No.channel("live-chat").on("postgres_changes",{event:"INSERT",schema:"public",table:"chat_messages"},e=>{var r=e.new,n=ne(r,r.user_id===(null==t?void 0:t.id))
p(e=>ae(e,n))}).subscribe(()=>{})
return()=>{No.removeChannel(e)}},[null==t?void 0:t.id]),bn.useEffect(()=>{ee()},[ee]),bn.useEffect(()=>{if(null!=t&&t.id){var e=No.channel(`live-chat-mutes-${t.id}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"chat_mutes",filter:`user_id=eq.${t.id}`},e=>{var t,r=null===(t=e.new)||void 0===t?void 0:t.expires_at
r&&(L(r),$(`Vous \xeates en mute jusqu'\xe0 ${new Date(r).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`))}).subscribe()
return()=>{No.removeChannel(e)}}},[null==t?void 0:t.id,ee])
var se=function(){var e=s(r().m(function e(){var a,s,i,o,l,c,u,d,f
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(t){e.n=1
break}return e.a(2)
case 1:if(s=h.trim()){e.n=2
break}return e.a(2)
case 2:if(!(z&&new Date(z).getTime()>Date.now())){e.n=3
break}return $(`Vous \xeates en mute jusqu'\xe0 ${new Date(z).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`),e.a(2)
case 3:if(i=J||zl.includes(t.id),(o=ml(s,t.id,{maxLength:500,rateLimit:{maxMessages:i?20:5,windowMs:1e4},allowLinks:i,allowDiscord:i})).isValid){e.n=4
break}return W(o.error||"Message non valide"),setTimeout(()=>W(null),4e3),e.a(2)
case 4:return W(null),S(!0),l={content:o.sanitizedMessage,username:K,user_id:t.id,role:G,badges:Y,avatar_url:null!==(a=null==n?void 0:n.avatar_url)&&void 0!==a?a:null},e.p=5,e.n=6,No.from("chat_messages").insert(l).select().single()
case 6:if(c=e.v,u=c.data,!(d=c.error)){e.n=9
break}if(Bo(),"42501"!==(null==d?void 0:d.code)){e.n=8
break}return e.n=7,ee()
case 7:$("Vous \xeates en mute. Vous ne pouvez pas envoyer de message pour le moment.")
case 8:return e.a(2)
case 9:u&&(f=ne(u,!0),p(e=>ae(e,f))),e.n=11
break
case 10:e.p=10,e.v
case 11:return e.p=11,S(!1),m(""),e.f(11)
case 12:return e.a(2)}},e,null,[[5,10,11,12]])}))
return function(){return e.apply(this,arguments)}}()
return hn.jsxs("div",{className:"live-chat-shell","aria-live":"polite",children:[hn.jsx("button",{className:"chat-floating-button "+(l?"hidden":""),"aria-label":"Open live chat",onClick:()=>c(!0),children:hn.jsx("i",{className:"fas fa-comments"})}),hn.jsxs("div",{className:"live-chat-panel "+(l?"open":""),children:[hn.jsxs("div",{className:"live-chat-header",children:[hn.jsxs("div",{children:[hn.jsx("p",{className:"live-chat-eyebrow",children:"Dbs"}),hn.jsx("h4",{children:"Live Chat"})]}),hn.jsx("div",{className:"live-chat-actions",children:hn.jsx("button",{className:"chat-circle-btn","aria-label":"Close chat",onClick:()=>c(!1),children:hn.jsx("i",{className:"fas fa-times"})})})]}),hn.jsxs("div",{className:"live-chat-body",ref:V,children:[N&&hn.jsxs("div",{className:"live-chat-system",style:{opacity:.7},children:[hn.jsx("div",{className:"live-chat-system-icon",children:hn.jsx("i",{className:"fas fa-spinner fa-spin"})}),hn.jsxs("div",{children:[hn.jsx("p",{className:"live-chat-system-title",children:"Connecting..."}),hn.jsx("p",{className:"live-chat-text",style:{marginTop:4},children:"Fetching live history."})]})]}),d.map(e=>{return hn.jsxs("div",{className:"live-chat-message "+(e.isOwn?"is-own":""),children:[hn.jsx("div",{className:"live-chat-avatar",children:e.avatar?hn.jsx("img",{src:e.avatar,alt:`${e.username} avatar`}):hn.jsx("span",{children:(n=e.username,n?n.slice(0,2).toUpperCase():"?")})}),hn.jsxs("div",{className:"live-chat-bubble",children:[hn.jsxs("div",{className:"live-chat-meta",children:[hn.jsxs("div",{className:"live-chat-userline",children:[hn.jsx("span",{className:"live-chat-username",children:e.username}),(()=>{var t=new Set([e.role])
e.badges.includes("founder")&&t.add("founder"),e.badges.includes("staff")&&t.add("staff"),e.badges.includes("developer")&&t.add("developer")
var r=Array.from(t).sort((e,t)=>H.indexOf(e)-H.indexOf(t)),n=r[0]||e.role,a=r.filter(e=>e!==n),s=Array.from(new Set(e.badges.filter(e=>e!==n&&!a.includes(e))))
return hn.jsxs(hn.Fragment,{children:[re(n),a.map((e,t)=>te(e,t)),s.map(te)]})})()]}),hn.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[hn.jsx("span",{className:"live-chat-time",children:(r=e.timestamp,new Date(r).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}))}),X(e)&&hn.jsx("button",{className:"live-chat-delete",onClick:()=>Z(e.id),disabled:C===e.id,title:"Delete message",children:hn.jsx("i",{className:"fas fa-times "+(C===e.id?"fa-spin":"")})}),J&&e.userId&&e.userId!==(null==t?void 0:t.id)&&hn.jsx("div",{style:{display:"flex",gap:6},children:[10,60,1440].map(t=>hn.jsxs("button",{className:"live-chat-delete",style:{fontSize:"0.75rem",padding:"4px 6px"},onClick:()=>Q(e.userId,t),disabled:A===e.userId,title:"Mute "+(t>=60?t/60+"h":`${t}m`),children:[hn.jsx("i",{className:"fas fa-microphone-slash "+(A===e.userId?"fa-spin":"")}),hn.jsx("span",{style:{marginLeft:4},children:t>=60?t/60+"h":`${t}m`})]},t))})]})]}),hn.jsx("p",{className:"live-chat-text",children:e.content})]})]},e.id)
var r,n}),!t&&hn.jsxs("div",{className:"live-chat-system",style:{marginTop:"8px"},children:[hn.jsx("div",{className:"live-chat-system-icon",children:hn.jsx("i",{className:"fas fa-lock"})}),hn.jsxs("div",{children:[hn.jsx("p",{className:"live-chat-system-title",children:"Sign in to join the conversation"}),hn.jsxs("div",{className:"live-chat-auth-actions",children:[hn.jsx("button",{className:"btn btn-outline",onClick:()=>a("/login"),children:"Login"}),hn.jsx("button",{className:"btn btn-primary",onClick:()=>a("/register"),children:"Register"})]})]})]})]}),hn.jsxs("div",{className:"live-chat-footer",children:[hn.jsxs("div",{className:"live-chat-input",children:[hn.jsx("textarea",{ref:q,placeholder:t?"Write a message...":"Sign in to chat",value:h,onChange:e=>m(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),se())},disabled:!t||j||!!z&&new Date(z).getTime()>Date.now(),rows:2}),hn.jsx("div",{className:"live-chat-footer-actions",children:hn.jsx("button",{className:"chat-circle-btn",onClick:se,disabled:!t||!h.trim()||j||!!z&&new Date(z).getTime()>Date.now(),"aria-label":"Send message",children:hn.jsx("i",{className:"fas fa-paper-plane"})})})]}),hn.jsx("p",{className:"live-chat-hint",style:B?{color:"#ff6b6b",fontWeight:500}:void 0,children:B||U||"Live chat \xb7 Protected space"})]})]})]})},Fl=({children:e})=>hn.jsx(hn.Fragment,{children:e}),Bl=function(){var e=s(r().m(function e(t){var n,a,s,i
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,No.auth.getSession()
case 1:if(n=e.v,a=n.data.session,!n.error&&null!=a&&a.access_token){e.n=2
break}return Wo(),e.a(2,null)
case 2:return e.n=3,fetch("https://supabase-proxy.tiny-wave-2fa1.workers.dev/functions/v1/auto-badges",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a.access_token}`},body:JSON.stringify({action:t})})
case 3:if((s=e.v).ok){e.n=5
break}return e.n=4,s.text()
case 4:return e.v,Bo(s.status),e.a(2,null)
case 5:return e.n=6,s.json()
case 6:return i=e.v,e.a(2,i)
case 7:return e.p=7,e.v,e.a(2,null)}},e,null,[[0,7]])}))
return function(t){return e.apply(this,arguments)}}(),Wl=function(){var e=s(r().m(function e(){var t,n,a,s,i
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:e.p=0,t=[],n=0,a=["check_early_user","check_beta_tester","check_buyer","check_premium","check_vip"]
case 1:if(!(n<a.length)){e.n=4
break}return s=a[n],e.n=2,Bl(s)
case 2:null!=(i=e.v)&&i.success&&Array.isArray(i.badgesGranted)&&t.push(...i.badgesGranted)
case 3:n++,e.n=1
break
case 4:return e.a(2,t)
case 5:return e.p=5,e.v,e.a(2,[])}},e,null,[[0,5]])}))
return function(){return e.apply(this,arguments)}}(),Vl=function(){var e=s(r().m(function e(t,n=0){var a,s,i,o
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,No.auth.getUser()
case 1:if(a=e.v,s=a.data.user){e.n=2
break}return Wo(),e.a(2)
case 2:return e.n=3,No.from("search_history").insert({user_id:s.id,query:t,result_count:n})
case 3:return i=e.v,(o=i.error)&&Bo(o.message),e.n=4,Bl("check_vip")
case 4:e.n=6
break
case 5:e.p=5,e.v
case 6:return e.a(2)}},e,null,[[0,5]])}))
return function(t){return e.apply(this,arguments)}}(),ql=e=>{switch(null==e?void 0:e.toLowerCase()){case"beginner":return"beginner"
case"pro":return"pro"
case"premium":return"premium"
case"beta":return"beta"
case"blocked":return"blocked"
default:return"free"}},Ml=(e,t)=>{if("number"==typeof t&&t>0)return t
switch(e){case"beginner":return 100
case"pro":return 500
case"premium":return 5e3
case"beta":return 30
case"blocked":return 0
default:return 10}},Hl=()=>{var e=Oo(),t=e.user,n=e.showLoginPopup,a=Lo().t,o=i(bn.useState(""),2),l=o[0],c=o[1],u=i(bn.useState(!1),2),d=u[0],f=u[1],h=i(bn.useState(null),2),m=h[0],g=h[1],b=i(bn.useState(""),2),v=b[0],y=b[1],x=i(bn.useState(null),2),w=x[0],k=x[1],j=i(bn.useState(null),2),S=j[0],_=j[1],N=i(bn.useState(!1),2),E=N[0],T=N[1],C=i(bn.useState(null),2),R=C[0],P=C[1],A=i(bn.useState(null),2),O=A[0],I=A[1],z=i(bn.useState("breaches"),2),L=z[0],D=z[1],U=i(bn.useState(!1),2),$=U[0],F=U[1],B=i(bn.useState(""),2),W=B[0],V=B[1],q=i(bn.useState("leaks.logs"),2),H=q[0],K=q[1],Y=i(bn.useState(!1),2),G=Y[0],J=Y[1],X=i(bn.useState(null),2),Z=X[0],Q=X[1],ee=i(bn.useState(!1),2),te=ee[0],re=ee[1],ne=i(bn.useState(!1),2),ae=ne[0],se=ne[1],ie=i(bn.useState(!1),2),oe=ie[0],le=ie[1],ce=i(bn.useState(!1),2),ue=ce[0],de=ce[1],pe=i(bn.useState(!1),2),fe=pe[0],he=pe[1],me=i(bn.useState(!1),2),ge=me[0],be=me[1],ve=i(bn.useState([]),2),ye=ve[0],xe=ve[1],we=i(bn.useState(null),2),ke=we[0],je=we[1],Se=i(bn.useState(!1),2),_e=Se[0],Ne=Se[1],Ee=i(bn.useState(!1),2),Te=(Ee[0],Ee[1]),Ce=bn.useRef(null),Re=bn.useRef(null),Pe=M(),Ae=bn.useRef(null),Oe=bn.useRef({x:0,y:0}),Ie=bn.useRef({x:0,y:0})
bn.useEffect(()=>{var e=e=>{if(Ce.current){var t=Ce.current.getBoundingClientRect(),r=t.left+t.width/2,n=t.top+t.height/2,a=Math.atan2(e.clientY-n,e.clientX-r),s=Math.min(Math.hypot(e.clientX-r,e.clientY-n)/8,11)
Oe.current.x=Math.cos(a)*s,Oe.current.y=Math.sin(a)*s}}
return window.addEventListener("mousemove",e,{passive:!0}),()=>{window.removeEventListener("mousemove",e)}},[]),bn.useEffect(()=>{var e,t=()=>{Ie.current.x+=.2*(Oe.current.x-Ie.current.x),Ie.current.y+=.2*(Oe.current.y-Ie.current.y)
var r=Ae.current
r&&(r.setAttribute("cx",String(100+Ie.current.x)),r.setAttribute("cy",String(50+Ie.current.y))),e=requestAnimationFrame(t)}
return e=requestAnimationFrame(t),()=>cancelAnimationFrame(e)},[]),bn.useEffect(()=>{var e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(document.querySelectorAll(".stat-number[data-count]").forEach(e=>{var t=parseInt(e.getAttribute("data-count")||"0"),r=t/125,n=0,a=()=>{(n+=r)<t?(e.textContent=Math.floor(n).toString(),requestAnimationFrame(a)):e.textContent=t.toString()}
a()}),e.disconnect())})}),t=document.querySelector(".hero-stats")
return t&&e.observe(t),()=>e.disconnect()},[]),bn.useEffect(()=>{if(!t)return _(null),void Q(null)
var e=!1,n=function(){var n=s(r().m(function n(){var a,s,i,o,l
return r().w(function(r){for(;;)switch(r.p=r.n){case 0:if(t){r.n=1
break}return r.a(2)
case 1:return Te(!0),r.p=2,r.n=3,No.from("user_plans").select("plan, credits_per_day").eq("user_id",t.id).maybeSingle()
case 3:return a=r.v,s=a.data,a.error,e||(null!=s&&s.plan?(i=ql(s.plan),o=Ml(i,null==s?void 0:s.credits_per_day),Q({plan:i,credits_per_day:o})):Q({plan:"free",credits_per_day:Ml("free")})),r.n=4,El(t.id)
case 4:l=r.v,e||_(l),r.n=6
break
case 5:r.p=5,r.v,e||(Q(e=>null!=e?e:{plan:"free",credits_per_day:Ml("free")}),_(e=>null!=e?e:null))
case 6:return r.p=6,e||Te(!1),r.f(6)
case 7:return r.a(2)}},n,null,[[2,5,6,7]])}))
return function(){return n.apply(this,arguments)}}()
n()
var a=setInterval(()=>{n()},5e3),i=()=>{"visible"===document.visibilityState&&n()}
return document.addEventListener("visibilitychange",i),()=>{e=!0,clearInterval(a),document.removeEventListener("visibilitychange",i)}},[null==t?void 0:t.id]),bn.useEffect(()=>{if(null==t||!t.id)return re(!1),le(!1),se(!1),de(!1),he(!1),void be(!1)
var e=function(){var e=s(r().m(function e(){var n,a,s,i,o,l,c,u,d
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,No.auth.getSession()
case 1:if(n=e.v,null!=(a=n.data.session)&&a.access_token){e.n=2
break}return e.a(2)
case 2:return e.n=3,Wl()
case 3:return e.n=4,No.from("user_badges").select("badge").eq("user_id",t.id)
case 4:if(s=e.v,i=s.data,!(o=s.error)){e.n=5
break}throw o
case 5:l=(null!=i?i:[]).map(e=>e.badge),c=l.includes("early"),u=l.includes("bug_hunter"),d=l.includes("buyer"),de(c),he(u),be(d),xe([]),e.n=7
break
case 6:e.p=6,e.v
case 7:return e.a(2)}},e,null,[[0,6]])}))
return function(){return e.apply(this,arguments)}}()
e()},[null==t?void 0:t.id]),bn.useEffect(()=>{if(null!=t&&t.id){var e="beta"===(null==Z?void 0:Z.plan)&&!fe
re(Boolean(e))}else re(!1)},[null==t?void 0:t.id,null==Z?void 0:Z.plan,fe]),bn.useEffect(()=>{null!=t&&t.id||(Ne(!1),xe([]),je(null))},[null==t?void 0:t.id]),bn.useEffect(()=>{if(null!=t&&t.id){var e=function(){var e=s(r().m(function e(){var n,a,s,i
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(e.p=0,!ue){e.n=1
break}return le(!1),e.a(2)
case 1:return e.n=2,No.from("profiles").select("id").order("created_at",{ascending:!0}).limit(100)
case 2:if(n=e.v,a=n.data,!(s=n.error)){e.n=3
break}throw s
case 3:i=(a||[]).some(e=>e.id===t.id),le(i),e.n=5
break
case 4:e.p=4,e.v,le(!1)
case 5:return e.a(2)}},e,null,[[0,4]])}))
return function(){return e.apply(this,arguments)}}()
e()}else le(!1)},[null==t?void 0:t.id,ue]),bn.useEffect(()=>{if(null!=t&&t.id){var e,r="beginner"===(e=null==Z?void 0:Z.plan)||"pro"===e||"premium"===e
se(Boolean(r&&!ge))}else se(!1)},[null==t?void 0:t.id,null==Z?void 0:Z.plan,ge]),bn.useEffect(()=>{var e=!(n||te||ae||oe)
e&&!ke&&ye.length>0&&je(ye[0]),Ne(e&&ye.length>0)},[ye,n,te,ae,oe,ke])
var ze,Le=function(){var e=s(r().m(function e(){var n,s,i,o,c,u,d,p,h,m,b,v
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(l.trim()){e.n=1
break}return e.a(2)
case 1:if((n=vl(l)).safe){e.n=2
break}return y(n.reason||"Requ\xeate invalide"),e.a(2)
case 2:if(t){e.n=3
break}return T(!0),setTimeout(()=>T(!1),3e3),e.a(2)
case 3:return e.p=3,e.n=4,No.auth.getSession()
case 4:if(s=e.v,i=s.data,!s.error&&i.session){e.n=6
break}return e.n=5,No.auth.refreshSession()
case 5:if(!e.v.error){e.n=6
break}return y("Session expir\xe9e. Veuillez vous reconnecter."),e.a(2)
case 6:e.n=8
break
case 7:e.p=7,e.v
case 8:if(o=Z){e.n=12
break}return e.p=9,e.n=10,No.from("user_plans").select("plan, credits_per_day").eq("user_id",t.id).maybeSingle()
case 10:c=e.v,null!=(u=c.data)&&u.plan&&(d=u.plan,o={plan:d,credits_per_day:u.credits_per_day},Q(o)),e.n=12
break
case 11:e.p=11,e.v
case 12:return f(!0),y(""),g(null),P(null),I(null),e.p=13,e.n=14,Nl(l,t.id)
case 14:if((p=e.v).success){e.n=15
break}return y(p.error||a("home.error.generic")),g(null),P(null),I(null),void 0!==p.creditsRemaining&&_(p.creditsRemaining),e.a(2)
case 15:return h=p.breaches||[],m=p.stealers||[],P(h),I(m),h.length>0?(g(h),D("breaches")):m.length>0?(g(m),D("stealers")):g([]),b=h.length+m.length,e.n=16,Vl(l,b)
case 16:if(void 0===p.creditsRemaining){e.n=17
break}_(p.creditsRemaining),e.n=19
break
case 17:return e.n=18,El(t.id)
case 18:v=e.v,_(v)
case 19:Re.current&&setTimeout(()=>{var e
null===(e=Re.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},100),e.n=21
break
case 20:e.p=20,e.v,y(a("home.error.generic")),g(null)
case 21:return e.p=21,f(!1),e.f(21)
case 22:return e.a(2)}},e,null,[[13,20,21,22],[9,11],[3,7]])}))
return function(){return e.apply(this,arguments)}}(),De=function(){var e=s(r().m(function e(){var n,a,s,i,o,l,c,u,d,p,f
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(t){e.n=1
break}return y("Vous devez \xeatre connect\xe9 pour utiliser IntelX"),e.a(2)
case 1:if(W.trim()){e.n=2
break}return y("Veuillez entrer un Storage ID"),e.a(2)
case 2:return J(!0),y(""),g(null),P(null),I(null),e.p=3,e.n=4,No.auth.getSession()
case 4:if(i=e.v,o=i.data,l=null===(n=o.session)||void 0===n?void 0:n.access_token){e.n=5
break}throw new Error("User not authenticated")
case 5:return e.n=6,No.functions.invoke("api-search",{body:{storageId:W,bucket:H,searchType:"intelx"},headers:{Authorization:`Bearer ${l}`}})
case 6:if(c=e.v,u=c.data,!(d=c.error)){e.n=7
break}throw new Error(d.message||"IntelX search error")
case 7:if(null==u||null===(a=u.meta)||void 0===a||!a.message||"No results found"===u.meta.message){e.n=8
break}throw new Error(u.meta.message)
case 8:if(0!==(p=Array.isArray(null==u?void 0:u.results)?u.results:[]).length||null==u||null===(s=u.meta)||void 0===s||!s.message){e.n=9
break}return y(u.meta.message),F(!1),e.a(2)
case 9:g(p),P(p),D("breaches"),F(!1),V(""),Re.current&&setTimeout(()=>{var e
null===(e=Re.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})},100),e.n=11
break
case 10:e.p=10,f=e.v,y(f.message||"Error during IntelX search")
case 11:return e.p=11,J(!1),e.f(11)
case 12:return e.a(2)}},e,null,[[3,10,11,12]])}))
return function(){return e.apply(this,arguments)}}(),Ue=function(){var e=s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:if(null!=t&&t.id){e.n=1
break}return e.a(2)
case 1:return re(!1),e.n=2,No.from("user_badges").upsert({user_id:t.id,badge:"bug_hunter",granted_at:(new Date).toISOString(),granted_by:t.id},{onConflict:"user_id,badge"})
case 2:e.v.error||he(!0)
case 3:return e.a(2)}},e)}))
return function(){return e.apply(this,arguments)}}(),$e=function(){var e=s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:if(null!=t&&t.id){e.n=1
break}return e.a(2)
case 1:return le(!1),e.n=2,No.from("user_badges").upsert({user_id:t.id,badge:"early",granted_at:(new Date).toISOString(),granted_by:t.id},{onConflict:"user_id,badge"})
case 2:e.v.error||de(!0)
case 3:return e.a(2)}},e)}))
return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=s(r().m(function e(){return r().w(function(e){for(;;)switch(e.n){case 0:if(null!=t&&t.id){e.n=1
break}return e.a(2)
case 1:return se(!1),e.n=2,No.from("user_badges").upsert({user_id:t.id,badge:"buyer",granted_at:(new Date).toISOString(),granted_by:t.id},{onConflict:"user_id,badge"})
case 2:e.v.error||be(!0)
case 3:return e.a(2)}},e)}))
return function(){return e.apply(this,arguments)}}(),Be=function(){var e=s(r().m(function e(){var n
return r().w(function(e){for(;;)switch(e.n){case 0:if(null!=t&&t.id&&ke){e.n=1
break}return e.a(2)
case 1:return n=ke,xe(e=>{var t=e.filter(e=>e!==n),r=t[0]||null
return je(r),Ne(Boolean(r)),t}),e.n=2,No.from("user_badges").upsert({user_id:t.id,badge:n,granted_at:(new Date).toISOString(),granted_by:t.id},{onConflict:"user_id,badge"})
case 2:return e.a(2)}},e)}))
return function(){return e.apply(this,arguments)}}(),We=e=>{c(e)}
return hn.jsxs(Fl,{children:[oe&&!n&&!te&&!ae&&hn.jsx("div",{className:"login-popup",style:{top:"90px",zIndex:31},children:hn.jsxs("div",{className:"login-popup-content",style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",minWidth:"340px"},children:[hn.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-star",style:{color:"#f59e0b"}}),hn.jsx("span",{children:"Bravo ! Tu fais partie des 100 premiers"})]}),hn.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"},children:[hn.jsx("button",{className:"btn btn-primary btn-sm",onClick:$e,style:{minWidth:"150px",fontWeight:700,background:"#f59e0b",borderColor:"#d97706",color:"#ffffff"},children:"Claim badge Early"}),hn.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>{le(!1)},style:{minWidth:"120px",fontWeight:700,borderColor:"#d1d5db",color:"#1a1a2e",background:"#f7f7f9"},children:"Ignorer"})]})]})}),_e&&ke&&!n&&!te&&!ae&&!oe&&hn.jsx("div",{className:"login-popup",style:{top:"90px",zIndex:30},children:hn.jsxs("div",{className:"login-popup-content",style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",minWidth:"340px"},children:[hn.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-award",style:{color:"#7c3aed"}}),hn.jsxs("span",{children:["Bravo ! Tu as obtenu le badge ",(ze=ke,ze?ze.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):"Badge")]})]}),hn.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"},children:[hn.jsx("button",{className:"btn btn-primary btn-sm",onClick:Be,style:{minWidth:"150px",fontWeight:700,background:"#7c3aed",borderColor:"#5b21b6",color:"#ffffff"},children:"Claim mon badge"}),hn.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>{if(ke){var e=ke
xe(t=>{var r=t.filter(t=>t!==e),n=r[0]||null
return je(n),Ne(Boolean(n)),r})}},style:{minWidth:"120px",fontWeight:700,borderColor:"#d1d5db",color:"#1a1a2e",background:"#f7f7f9"},children:"Ignorer"})]})]})}),te&&!n&&hn.jsx("div",{className:"login-popup",style:{top:"90px",zIndex:30},children:hn.jsxs("div",{className:"login-popup-content",style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",minWidth:"320px"},children:[hn.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-bug",style:{color:"#10b981"}}),hn.jsx("span",{children:"Bravo ! Tu as gagn\xe9 un badge Bug Hunter"})]}),hn.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"},children:[hn.jsx("button",{className:"btn btn-primary btn-sm",onClick:Ue,style:{minWidth:"140px",fontWeight:700,background:"#10b981",borderColor:"#0ea971",color:"#ffffff"},children:"Claim mon badge"}),hn.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>{re(!1)},style:{minWidth:"120px",fontWeight:700,borderColor:"#d1d5db",color:"#1a1a2e",background:"#f7f7f9"},children:"Ignorer"})]})]})}),ae&&!n&&!te&&hn.jsx("div",{className:"login-popup",style:{top:"90px",zIndex:29},children:hn.jsxs("div",{className:"login-popup-content",style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",minWidth:"320px"},children:[hn.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-money-bill-wave",style:{color:"#ff6b9d"}}),hn.jsx("span",{children:"Bravo ! Tu as debloque le badge Buyer"})]}),hn.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"},children:[hn.jsx("button",{className:"btn btn-primary btn-sm",onClick:Fe,style:{minWidth:"140px",fontWeight:700,background:"#ff6b9d",borderColor:"#ff6b9d",color:"#ffffff"},children:"Claim mon badge"}),hn.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>{se(!1)},style:{minWidth:"120px",fontWeight:700,borderColor:"#d1d5db",color:"#1a1a2e",background:"#f7f7f9"},children:"Ignorer"})]})]})}),hn.jsxs("section",{className:"hero",children:[hn.jsxs("div",{className:"hero-bg-effects",children:[hn.jsx("div",{className:"grid-overlay"}),hn.jsx("div",{className:"glow-effect glow-1"}),hn.jsx("div",{className:"glow-effect glow-2"})]}),hn.jsx("div",{className:"container",children:hn.jsxs("div",{className:"hero-content",children:[hn.jsx("div",{className:"hero-badge",children:hn.jsx("span",{children:a("home.hero.badge")})}),hn.jsx("div",{className:"horus-eye-container",ref:Ce,children:hn.jsxs("svg",{className:"horus-eye",viewBox:"0 0 200 120",xmlns:"http://www.w3.org/2000/svg",children:[hn.jsxs("defs",{children:[hn.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[hn.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),hn.jsxs("feMerge",{children:[hn.jsx("feMergeNode",{in:"coloredBlur"}),hn.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),hn.jsxs("filter",{id:"strongGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[hn.jsx("feGaussianBlur",{stdDeviation:"5",result:"coloredBlur"}),hn.jsxs("feMerge",{children:[hn.jsx("feMergeNode",{in:"coloredBlur"}),hn.jsx("feMergeNode",{in:"coloredBlur"}),hn.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),hn.jsx("path",{className:"horus-outline",d:"M 20 50 Q 50 15, 100 15 Q 150 15, 180 50 Q 150 85, 100 85 Q 50 85, 20 50 Z",fill:"none",stroke:"white",strokeWidth:"3",filter:"url(#glow)"}),hn.jsx("path",{className:"horus-brow",d:"M 15 45 Q 50 5, 100 5 Q 150 5, 185 45",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",filter:"url(#glow)"}),hn.jsx("circle",{cx:"100",cy:"50",r:"28",fill:"none",stroke:"white",strokeWidth:"2",filter:"url(#glow)"}),hn.jsx("circle",{ref:Ae,className:"horus-pupil",cx:100,cy:50,r:"12",fill:"white",filter:"url(#strongGlow)"}),hn.jsx("path",{className:"horus-marking",d:"M 100 85 L 100 100 Q 95 105, 85 108",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",filter:"url(#glow)"}),hn.jsx("path",{className:"horus-spiral",d:"M 85 108 Q 75 112, 70 105 Q 68 98, 75 95",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",filter:"url(#glow)"}),hn.jsx("path",{className:"horus-tear",d:"M 70 60 Q 60 75, 55 95 Q 52 105, 60 110",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",filter:"url(#glow)"}),hn.jsx("path",{className:"horus-extension",d:"M 180 50 Q 190 48, 195 42",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",filter:"url(#glow)"})]})}),hn.jsx("p",{className:"hero-description",children:a("home.hero.description")}),E&&hn.jsxs("div",{className:"login-prompt animate-shake",children:[hn.jsx("i",{className:"fas fa-lock"}),hn.jsx("span",{children:a("home.error.notloggedin")}),hn.jsx("button",{onClick:()=>Pe("/login"),className:"btn btn-sm",children:a("nav.login")})]}),t&&Z&&hn.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",marginBottom:"10px"},children:["free"!==Z.plan&&"blocked"!==Z.plan&&(()=>{var e=(e=>{switch(e){case"beginner":return{color:"#ff6b9d",background:"linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(196, 69, 105, 0.2))",border:"#ff6b9d",icon:"fas fa-rocket",label:"Beginner"}
case"beta":return{color:"#10b981",background:"linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2))",border:"#10b981",icon:"fas fa-flask",label:"Beta"}
case"pro":return{color:"#4dabf7",background:"linear-gradient(135deg, rgba(77, 171, 247, 0.2), rgba(34, 139, 230, 0.2))",border:"#4dabf7",icon:"fas fa-shield-alt",label:"Pro"}
default:return{color:"#ffd700",background:"linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.2))",border:"#ffd700",icon:"fas fa-crown",label:"premium"}}})(Z.plan)
return hn.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"20px",background:e.background,border:`1px solid ${e.border}`},children:[hn.jsx("i",{className:e.icon,style:{color:e.color}}),hn.jsx("span",{style:{fontWeight:600,color:e.color,textTransform:"uppercase",fontSize:"0.85rem",letterSpacing:"0.5px"},children:e.label})]})})(),null!==S&&"blocked"!==Z.plan&&hn.jsxs("div",{className:"credits-display",children:[hn.jsx("i",{className:"fas fa-coins"}),hn.jsxs("span",{children:[S," / ",Z.credits_per_day," ",a("home.credits.title")]})]})]}),t&&"blocked"===(null==Z?void 0:Z.plan)&&hn.jsxs("div",{className:"search-error animate-fade-in",style:{marginBottom:"12px"},children:[hn.jsx("i",{className:"fas fa-ban"}),hn.jsx("span",{children:"Votre compte est bloqu\xe9. Contactez le support."})]}),hn.jsxs("div",{className:"search-box",children:[hn.jsxs("div",{className:"search-input-wrapper",children:[hn.jsx("i",{className:"fas fa-search"}),hn.jsx("input",{type:"text",placeholder:a(t?"home.search.placeholder":"home.error.notloggedin"),className:"search-input",value:l,onChange:e=>{var t=e.target.value
if(c(t),t.trim().length>=3){var r=(e=>{if(!e||"string"!=typeof e)return{type:"unknown",confidence:0,sanitizedQuery:"",icon:"fa-search",iconClass:"fas",label:"Search",suggestedApis:[]}
var t=e.trim(),r=rl(t)
if(!r)return{type:"unknown",confidence:0,sanitizedQuery:"",icon:"fa-search",iconClass:"fas",label:"Search",suggestedApis:[]}
var n,a=p([...bl].sort((e,t)=>t.priority-e.priority))
try{for(a.s();!(n=a.n()).done;){var s=n.value,i=s.type,o=s.pattern,l=s.icon,c=s.iconClass,u=s.label,d=s.priority
if(o.test(r))return{type:i,confidence:d,sanitizedQuery:r,icon:l,iconClass:c,label:u,suggestedApis:gl[i]||[]}}}catch(f){a.e(f)}finally{a.f()}return{type:"unknown",confidence:50,sanitizedQuery:r,icon:"fa-search",iconClass:"fas",label:"Search",suggestedApis:gl.unknown}})(t)
k(r)}else k(null)},onKeyPress:e=>"Enter"===e.key&&Le(),disabled:d})]}),hn.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[hn.jsx("button",{className:"btn btn-search",onClick:Le,disabled:d||!l.trim(),children:d?hn.jsxs(hn.Fragment,{children:[hn.jsx("span",{className:"spinner"}),hn.jsx("span",{children:"Searching..."})]}):hn.jsxs(hn.Fragment,{children:[hn.jsx("span",{children:a("home.search.button")}),hn.jsx("i",{className:"fas fa-arrow-right"})]})}),t&&"premium"===(null==Z?void 0:Z.plan)&&hn.jsxs("button",{className:"btn btn-intelx",onClick:()=>F(!0),style:{background:"linear-gradient(135deg, #ffd700 0%, #ffa500 100%)",border:"2px solid rgba(255, 215, 0, 0.3)",padding:"12px 24px",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.3s ease",color:"#000",fontWeight:"600"},children:[hn.jsx("i",{className:"fas fa-crown"}),hn.jsx("span",{children:"IntelX"})]})]})]}),v&&hn.jsxs("div",{className:"search-error animate-fade-in",style:{marginTop:"2px",marginBottom:"4px"},children:[hn.jsx("i",{className:"fas fa-exclamation-circle"}),hn.jsx("span",{children:v})]}),w&&"unknown"!==w.type&&hn.jsx("div",{className:"animate-fade-in",style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",marginBottom:"4px"},children:hn.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",borderRadius:"20px",background:"rgba(77, 171, 247, 0.15)",border:"1px solid rgba(77, 171, 247, 0.3)",fontSize:"0.8rem",color:"#4dabf7",fontWeight:600},children:[hn.jsx("i",{className:`${w.iconClass} ${w.icon}`}),hn.jsxs("span",{children:["Type d\xe9tect\xe9: ",w.label]})]})}),hn.jsxs("div",{className:"search-tags",children:[hn.jsxs("span",{children:[a("home.search.popular_tags"),":"]}),hn.jsx("button",{className:"search-tag",onClick:()=>We("email"),children:a("home.search.email_tag")}),hn.jsx("button",{className:"search-tag",onClick:()=>We("username"),children:a("home.search.username_tag")}),hn.jsx("button",{className:"search-tag",onClick:()=>We("discord"),children:a("home.search.discord_tag")}),hn.jsx("button",{className:"search-tag",onClick:()=>We("ip"),children:a("home.search.ip_tag")}),hn.jsx("button",{className:"search-tag",onClick:()=>We("domain"),children:a("home.search.domain_tag")})]}),hn.jsxs("div",{className:"hero-stats",children:[hn.jsxs("div",{className:"stat-item",children:[hn.jsx("div",{className:"stat-number","data-count":"15",children:"+740B"}),hn.jsx("div",{className:"stat-label",children:"Sources de donn\xe9es"})]}),hn.jsxs("div",{className:"stat-item",children:[hn.jsx("div",{className:"stat-number","data-count":"50",children:"+160"}),hn.jsx("div",{className:"stat-label",children:"Pays"})]}),hn.jsxs("div",{className:"stat-item",children:[hn.jsx("div",{className:"stat-number",children:"50To +"}),hn.jsx("div",{className:"stat-label",children:"To de DB"})]}),hn.jsxs("div",{className:"stat-item",children:[hn.jsx("div",{className:"stat-number",children:"99.9%"}),hn.jsx("div",{className:"stat-label",children:"Uptime"})]})]})]})})]}),m&&hn.jsx("section",{className:"search-results-section",ref:Re,children:hn.jsxs("div",{className:"container",children:[hn.jsxs("div",{className:"section-header",children:[hn.jsxs("h2",{className:"section-title",children:[hn.jsx("i",{className:"fas fa-search",style:{marginRight:"12px"}}),"Search Results"]}),hn.jsxs("p",{className:"section-description",children:[m.length,' result(s) found for "',l,'"']})]}),(null!==R||null!==O)&&((null==R?void 0:R.length)||0)+((null==O?void 0:O.length)||0)>0&&hn.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"16px",marginBottom:"20px"},children:hn.jsxs("button",{onClick:()=>{var e=[...R||[],...O||[]]
if(0!==e.length){var t=e=>{var t=e.match(/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g)
return t?[...new Set(t)]:[]},r=["$oid","oid","_id","id","uuid","guid","objectid","__v","_v","version","v","salt","nonce","iv","metadata","meta","internalsource","sourcetype","dataclass"],n=`                      __\n  ______ ____   ____ |  | __ ____   ______  _  __\n /  ___// __ \\_/ __ \\|  |/ //    \\ /  _ \\ \\/ \\/ /\n \\___ \\\\  ___/\\  ___/|    <|   |  (  <_> )     /\n/____  >\\___  >\\___  >__|_ \\___|  /\\____/ \\/\\_/\n     \\/     \\/     \\/     \\/    \\/\n\n            discord.gg/Dbs\n\n================================================================================\n                           SEARCH RESULTS EXPORT\n================================================================================\nQuery: ${l}\nDate: ${(new Date).toLocaleString()}\nTotal Databases: ${e.length}\nTotal Entries: ${e.reduce((e,t)=>{var r
return e+((null===(r=t.data)||void 0===r?void 0:r.length)||0)},0)}\n================================================================================\n\n`,a={emails:new Set,phones:new Set,names:new Set,addresses:new Set,usernames:new Set,ips:new Set,passwords:new Set},s={EMAILS:[],"PASSWORDS / HASHES":[],"USERNAMES / LOGINS":[],"PHONE NUMBERS":[],"ADDRESSES / LOCATIONS":[],NAMES:[],"IP ADDRESSES":[],DISCORD:[],"URLS / DOMAINS / WEBSITES":[],"DATES / TIMESTAMPS":[],"ACCOUNTS / SERVICES":[],"OTHER DATA":[]},i=(e,n)=>{if(!(e=>{var t=e.toLowerCase().replace(/[_\-\s]/g,"")
return r.some(e=>t===e||t.startsWith("$"))})(e)&&null!=n&&""!==n)if(Array.isArray(n))n.forEach(t=>{"object"==typeof t&&null!==t?Object.entries(t).forEach(([e,t])=>{i(e,t)}):null!=t&&""!==t&&i(e,t)})
else if("object"!=typeof n||null===n){var o=String(n).trim()
if(0!==o.length&&"true"!==o&&"false"!==o&&"null"!==o&&"undefined"!==o&&"[object Object]"!==o){o=o.replace(/&#x2F;/g,"/").replace(/&#x3A;/g,":").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&#(\d+);/g,(e,t)=>String.fromCharCode(t))
var l=(e=>{var t=e.toLowerCase().replace(/[\s_\-]/g,"")
return t.includes("email")||t.includes("mail")||t.includes("courriel")||"e"===t?"EMAILS":t.includes("password")||t.includes("pass")||t.includes("hash")||t.includes("pwd")||t.includes("secret")||t.includes("credential")?"PASSWORDS / HASHES":t.includes("username")||t.includes("login")||t.includes("nickname")||t.includes("pseudo")||t.includes("handle")||t.includes("userid")||t.includes("accountid")||"user"===t?"USERNAMES / LOGINS":t.includes("phone")||t.includes("phonenumber")||t.includes("tel")||t.includes("mobile")||t.includes("cell")||t.includes("fax")||t.includes("whatsapp")||t.includes("numero")?"PHONE NUMBERS":t.includes("address")||t.match(/^address\d?$/)||t.includes("street")||t.includes("rue")||t.includes("city")||t.includes("ville")||t.includes("country")||t.includes("pays")||t.includes("zip")||t.includes("zipcode")||t.includes("postal")||t.includes("codepostal")||t.includes("state")||t.includes("location")||t.includes("region")||t.includes("province")||t.includes("geo")||t.includes("lat")||t.includes("lng")||t.includes("longitude")||t.includes("latitude")?"ADDRESSES / LOCATIONS":t.includes("firstname")||t.includes("lastname")||t.includes("fullname")||t.includes("realname")||t.includes("displayname")||t.includes("prenom")||t.includes("nom")||"first"===t||"last"===t||t.includes("name")&&!t.includes("username")&&!t.includes("hostname")&&!t.includes("domainname")&&!t.includes("filename")?"NAMES":t.includes("ip")&&!t.includes("zip")&&!t.includes("ship")&&!t.includes("script")&&!t.includes("descript")||t.includes("ipaddress")||"events"===t?"IP ADDRESSES":t.includes("discord")?"DISCORD":t.includes("url")||t.includes("link")||t.includes("domain")||t.includes("website")||t.includes("site")||t.includes("host")||t.includes("server")?"URLS / DOMAINS / WEBSITES":t.includes("date")||t.includes("time")||t.includes("created")||t.includes("updated")||t.includes("born")||t.includes("dob")||t.includes("birthday")||t.includes("expire")||t.includes("end")||t.includes("start")||t.includes("registered")||t.includes("lastlogin")||t.includes("lastseen")||t.includes("createdon")||t.includes("svodenddate")?"DATES / TIMESTAMPS":t.includes("account")||t.includes("service")||t.includes("plan")||t.includes("subscription")||t.includes("status")||t.includes("substatus")||t.includes("type")||t.includes("accounttype")||t.includes("tier")||t.includes("level")||t.includes("role")||t.includes("premium")||t.includes("svod")||t.includes("vod")?"ACCOUNTS / SERVICES":"OTHER DATA"})(e),c=(e=>e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/[_\-]/g," ").replace(/\b\w/g,e=>e.toUpperCase()).trim())(e)
if("events"===e.toLowerCase()||e.toLowerCase().includes("event"))t(o).forEach(e=>{a.ips.add(e)
var t=`IP: ${e}`
s["IP ADDRESSES"].includes(t)||s["IP ADDRESSES"].push(t)})
else{if("EMAILS"===l||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o))a.emails.add(o)
else if("PHONE NUMBERS"===l||/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{3,10}$/.test(o.replace(/\s/g,"")))a.phones.add(o)
else if("NAMES"===l)a.names.add(`${c}: ${o}`)
else if("ADDRESSES / LOCATIONS"===l)a.addresses.add(`${c}: ${o}`)
else if("USERNAMES / LOGINS"===l)a.usernames.add(o)
else if("IP ADDRESSES"===l){var u=t(o)
u.length>0?u.forEach(e=>a.ips.add(e)):a.ips.add(o)}else"PASSWORDS / HASHES"===l&&a.passwords.add(o)
var d=`${c}: ${o}`
s[l].includes(d)||s[l].push(d)}}}else Object.entries(n).forEach(([e,t])=>{i(e,t)})}
e.forEach(e=>{Array.isArray(e.data)&&e.data.forEach(e=>{"object"==typeof e&&null!==e&&Object.entries(e).forEach(([e,t])=>{i(e,t)})})})
var o=n;(a.emails.size>0||a.phones.size>0||a.names.size>0||a.addresses.size>0||a.usernames.size>0||a.ips.size>0||a.passwords.size>0)&&(o+=`\n${"*".repeat(80)}\n`,o+=`${"*".repeat(20)}    CONTACT SUMMARY (KEY DATA)    ${"*".repeat(20)}\n`,o+=`${"*".repeat(80)}\n\n`,a.emails.size>0&&(o+="  EMAILS:\n",a.emails.forEach(e=>o+=`    -> ${e}\n`),o+="\n"),a.usernames.size>0&&(o+="  USERNAMES:\n",a.usernames.forEach(e=>o+=`    -> ${e}\n`),o+="\n"),a.passwords.size>0&&(o+="  PASSWORDS:\n",a.passwords.forEach(e=>o+=`    -> ${e}\n`),o+="\n"),a.names.size>0&&(o+="  NAMES:\n",a.names.forEach(e=>o+=`    -> ${e}\n`),o+="\n"),a.phones.size>0&&(o+="  PHONE NUMBERS:\n",a.phones.forEach(e=>o+=`    -> ${e}\n`),o+="\n"),a.addresses.size>0&&(o+="  ADDRESSES:\n",a.addresses.forEach(e=>o+=`    -> ${e}\n`),o+="\n"),a.ips.size>0&&(o+="  IP ADDRESSES:\n",a.ips.forEach(e=>o+=`    -> ${e}\n`),o+="\n"),o+=`${"*".repeat(80)}\n\n`),o+=`\n${"=".repeat(80)}\n`,o+="                          DETAILED DATA BY CATEGORY\n",o+=`${"=".repeat(80)}\n`,Object.entries(s).forEach(([e,t])=>{0!==t.length&&"OTHER DATA"!==e&&(o+=`\n${"\u2500".repeat(80)}\n`,o+=`  ${e} (${t.length} entries)\n`,o+=`${"\u2500".repeat(80)}\n\n`,t.forEach(e=>{o+=`  \u2022 ${e}\n`}),o+="\n")}),s["OTHER DATA"].length>0&&(o+=`\n${"\u2500".repeat(80)}\n`,o+=`  OTHER DATA (${s["OTHER DATA"].length} entries)\n`,o+=`${"\u2500".repeat(80)}\n\n`,s["OTHER DATA"].forEach(e=>{o+=`  \u2022 ${e}\n`}),o+="\n"),o+=`\n${"=".repeat(80)}\n`,o+="                    Generated by Dbs - OSINT Platform\n",o+="                         https://Dbs.io\n",o+=`${"=".repeat(80)}\n`
var c=new Blob([o],{type:"text/plain;charset=utf-8"}),u=URL.createObjectURL(c),d=document.createElement("a")
d.href=u,d.download=`Dbs_results_${l.replace(/[^a-zA-Z0-9]/g,"_")}_${Date.now()}.txt`,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(u)}},style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px 28px",background:"linear-gradient(135deg, #10b981 0%, #059669 100%)",border:"2px solid rgba(16, 185, 129, 0.5)",borderRadius:"12px",color:"#fff",fontSize:"15px",fontWeight:600,cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(16, 185, 129, 0.3)"},onMouseOver:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 6px 20px rgba(16, 185, 129, 0.4)"},onMouseOut:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 4px 15px rgba(16, 185, 129, 0.3)"},children:[hn.jsx("i",{className:"fas fa-download"}),hn.jsx("span",{children:"Download The Results "})]})}),(null!==R||null!==O)&&hn.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"stretch",justifyContent:"flex-start",marginTop:"16px",marginBottom:"24px"},children:[hn.jsxs("button",{className:"btn-download",onClick:()=>{D("breaches"),g(R||[])},style:{flex:"1 1 0",minWidth:"180px",background:"breaches"===L?"var(--primary)":"transparent",border:"2px solid var(--primary)",color:"breaches"===L?"white":"var(--primary)",cursor:"pointer"},children:[hn.jsx("i",{className:"fas fa-database"}),hn.jsxs("span",{children:["Breaches (",(null==R?void 0:R.length)||0,")"]})]}),hn.jsxs("button",{className:"btn-download",onClick:()=>{D("stealers"),g(O||[])},style:{flex:"1 1 0",minWidth:"180px",background:"stealers"===L?"var(--primary)":"transparent",border:"2px solid var(--primary)",color:"stealers"===L?"white":"var(--primary)",cursor:"pointer"},children:[hn.jsx("i",{className:"fas fa-user-secret"}),hn.jsxs("span",{children:["Stealers (",(null==O?void 0:O.length)||0,")"]})]})]}),m.length>0?hn.jsx("div",{className:"results-grid",children:m.map((e,t)=>{var r=Array.isArray(e.data)?e.data:[],n=e=>e.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b\w/g,e=>e.toUpperCase()),a=(e,t=0)=>{if(null==e||""===e)return hn.jsx("span",{className:"field-value field-empty",children:"\u2014"})
if(Array.isArray(e))return 0===e.length?hn.jsx("span",{className:"field-value field-empty",children:"\u2014"}):e.every(e=>"object"!=typeof e)?hn.jsx("span",{className:"field-value",children:e.join(", ")}):hn.jsx("div",{className:"field-nested",children:e.map((e,r)=>hn.jsx("div",{className:"nested-item",children:a(e,t+1)},r))})
if("object"==typeof e){var r=Object.entries(e)
return 0===r.length?hn.jsx("span",{className:"field-value field-empty",children:"\u2014"}):hn.jsx("div",{className:"field-nested",children:r.map(([e,r])=>hn.jsxs("div",{className:"nested-field",children:[hn.jsxs("span",{className:"nested-key",children:[n(e),":"]}),a(r,t+1)]},e))})}var s=String(e)
return s.length>50?hn.jsx("span",{className:"field-value field-long",children:Xo(s)}):hn.jsx("span",{className:"field-value",children:Xo(s)})}
return hn.jsxs("div",{className:"result-card animate-fade-in",children:[hn.jsxs("div",{className:"result-header",children:[hn.jsxs("h3",{children:[hn.jsx("i",{className:"stealers"===L?"fas fa-user-secret":"fas fa-database"}),Xo(e.database)]}),hn.jsxs("span",{className:"result-badge",children:[e.data.length," entr\xe9e(s)"]})]}),e.infoLeak&&hn.jsx("p",{className:"result-info",children:Xo(Zo(e.infoLeak))}),hn.jsx("div",{className:"result-data",children:r.map((e,t)=>hn.jsx("div",{className:"result-item",children:Object.entries(e).map(([e,t])=>{var r=n(e),s=(e=>{var t=e.toLowerCase()
return t.includes("email")||t.includes("mail")?"fas fa-envelope":t.includes("password")||t.includes("pass")||t.includes("hash")?"fas fa-key":t.includes("phone")||t.includes("tel")?"fas fa-phone":t.includes("ip")||t.includes("address")?"fas fa-network-wired":t.includes("user")||t.includes("name")?"fas fa-user":t.includes("date")||t.includes("time")||t.includes("created")?"fas fa-calendar":t.includes("url")||t.includes("link")||t.includes("domain")?"fas fa-link":t.includes("country")||t.includes("city")||t.includes("location")?"fas fa-map-marker-alt":t.includes("discord")?"fab fa-discord":t.includes("steam")?"fab fa-steam":"fas fa-circle"})(e)
return hn.jsxs("div",{className:"result-field",children:[hn.jsxs("span",{className:"field-key",children:[hn.jsx("i",{className:s}),r]}),a(t)]},e)})},t))})]},`${L}-${t}`)})}):hn.jsxs("div",{className:"no-results",children:[hn.jsx("i",{className:"fas fa-search"}),hn.jsx("h3",{children:"No Results Found"}),hn.jsxs("p",{children:['No data was found for "',l,'" in this category.']})]})]})}),hn.jsx("section",{className:"features",id:"features",children:hn.jsxs("div",{className:"container",children:[hn.jsxs("div",{className:"section-header",children:[hn.jsx("span",{className:"section-badge",children:a("home.features.section")}),hn.jsx("h2",{className:"section-title",children:a("home.features.title")}),hn.jsx("p",{className:"section-description",children:a("home.features.subtitle")})]}),hn.jsxs("div",{className:"features-grid",children:[hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-database"})}),hn.jsx("h3",{children:a("features.violations")}),hn.jsx("p",{children:a("features.violations.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-user-secret"})}),hn.jsx("h3",{children:a("features.osint")}),hn.jsx("p",{children:a("features.osint.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-moon"})}),hn.jsx("h3",{children:a("features.darkweb")}),hn.jsx("p",{children:a("features.darkweb.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-bolt"})}),hn.jsx("h3",{children:a("features.realtime")}),hn.jsx("p",{children:a("features.realtime.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-lock"})}),hn.jsx("h3",{children:a("features.encryption")}),hn.jsx("p",{children:a("features.encryption.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-code"})}),hn.jsx("h3",{children:a("features.api")}),hn.jsx("p",{children:a("features.api.desc")})]})]})]})}),hn.jsx("section",{className:"how-it-works",children:hn.jsxs("div",{className:"container",children:[hn.jsxs("div",{className:"section-header",children:[hn.jsx("span",{className:"section-badge",children:a("home.howitworks.section")}),hn.jsx("h2",{className:"section-title",children:a("home.howitworks.title")}),hn.jsx("p",{className:"section-description",children:a("home.howitworks.subtitle")})]}),hn.jsxs("div",{className:"steps-grid",children:[hn.jsxs("div",{className:"step-card",children:[hn.jsx("div",{className:"step-number",children:"01"}),hn.jsxs("div",{className:"step-content",children:[hn.jsx("h3",{children:a("home.howitworks.step1.title")}),hn.jsx("p",{children:a("home.howitworks.step1.desc")})]}),hn.jsx("div",{className:"step-icon",children:hn.jsx("i",{className:"fas fa-keyboard"})})]}),hn.jsxs("div",{className:"step-card",children:[hn.jsx("div",{className:"step-number",children:"02"}),hn.jsxs("div",{className:"step-content",children:[hn.jsx("h3",{children:a("home.howitworks.step2.title")}),hn.jsx("p",{children:a("home.howitworks.step2.desc")})]}),hn.jsx("div",{className:"step-icon",children:hn.jsx("i",{className:"fas fa-cogs"})})]}),hn.jsxs("div",{className:"step-card",children:[hn.jsx("div",{className:"step-number",children:"03"}),hn.jsxs("div",{className:"step-content",children:[hn.jsx("h3",{children:a("home.howitworks.step3.title")}),hn.jsx("p",{children:a("home.howitworks.step3.desc")})]}),hn.jsx("div",{className:"step-icon",children:hn.jsx("i",{className:"fas fa-chart-bar"})})]})]})]})}),hn.jsx("section",{className:"trust-section",children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{className:"trust-content",children:[hn.jsxs("div",{className:"trust-text",children:[hn.jsx("span",{className:"section-badge",children:a("home.trust.section")}),hn.jsx("h2",{children:a("home.trust.title")}),hn.jsx("p",{children:a("home.trust.subtitle")}),hn.jsxs("div",{className:"trust-features",children:[hn.jsxs("div",{className:"trust-feature",children:[hn.jsx("i",{className:"fas fa-check-circle"}),hn.jsx("span",{children:a("home.trust.gdpr")})]}),hn.jsxs("div",{className:"trust-feature",children:[hn.jsx("i",{className:"fas fa-check-circle"}),hn.jsx("span",{children:a("home.trust.audit")})]}),hn.jsxs("div",{className:"trust-feature",children:[hn.jsx("i",{className:"fas fa-check-circle"}),hn.jsx("span",{children:a("home.trust.support")})]}),hn.jsxs("div",{className:"trust-feature",children:[hn.jsx("i",{className:"fas fa-check-circle"}),hn.jsx("span",{children:a("home.trust.sla")})]})]}),hn.jsxs(aa,{to:"/contact",className:"btn btn-primary",children:[a("home.trust.contact"),hn.jsx("i",{className:"fas fa-arrow-right"})]})]}),hn.jsxs("div",{className:"trust-stats",children:[hn.jsxs("div",{className:"trust-stat-card",children:[hn.jsx("div",{className:"trust-stat-icon",children:hn.jsx("i",{className:"fas fa-building"})}),hn.jsx("div",{className:"trust-stat-number",children:"40+"}),hn.jsx("div",{className:"trust-stat-label",children:a("home.trust.orgs")})]}),hn.jsxs("div",{className:"trust-stat-card",children:[hn.jsx("div",{className:"trust-stat-icon",children:hn.jsx("i",{className:"fas fa-users"})}),hn.jsx("div",{className:"trust-stat-number",children:"10K+"}),hn.jsx("div",{className:"trust-stat-label",children:a("home.trust.users")})]}),hn.jsxs("div",{className:"trust-stat-card",children:[hn.jsx("div",{className:"trust-stat-icon",children:hn.jsx("i",{className:"fas fa-search"})}),hn.jsx("div",{className:"trust-stat-number",children:"1M+"}),hn.jsx("div",{className:"trust-stat-label",children:a("home.trust.searches")})]}),hn.jsxs("div",{className:"trust-stat-card",children:[hn.jsx("div",{className:"trust-stat-icon",children:hn.jsx("i",{className:"fas fa-star"})}),hn.jsx("div",{className:"trust-stat-number",children:"4.9/5"}),hn.jsx("div",{className:"trust-stat-label",children:a("home.trust.rating")})]})]})]})})}),hn.jsx("section",{className:"pricing-preview",style:{paddingTop:"60px"},children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"32px",maxWidth:"1600px",margin:"0 auto",padding:"0 16px"},children:[hn.jsxs("div",{className:"pricing-card",style:{background:"var(--bg-card)",border:"2px solid #ff6b9d",borderRadius:"var(--radius-lg)",padding:"32px"},children:[hn.jsxs("div",{className:"pricing-header",children:[hn.jsx("h3",{style:{color:"#ff6b9d"},children:"Beginner"}),hn.jsxs("div",{className:"pricing-price",children:[hn.jsx("span",{className:"currency",children:"\u20ac"}),hn.jsx("span",{className:"amount",children:"9.99"}),hn.jsx("span",{className:"period",children:"/lifetime"})]}),hn.jsx("p",{style:{color:"var(--text-muted)"},children:"Paiement unique en crypto"})]}),hn.jsxs("ul",{className:"pricing-features",children:[hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," 100 search/day"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," Complete Results"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," Support 24h/24"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," OSINT Search"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," API Access"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-times"})," IntelX"]})]}),hn.jsx(aa,{to:"/contact?plan=beginner",className:"btn btn-primary btn-block",children:"Acheter"})]}),hn.jsxs("div",{className:"pricing-card",style:{background:"var(--bg-card)",border:"2px solid #4dabf7",borderRadius:"var(--radius-lg)",padding:"32px"},children:[hn.jsxs("div",{className:"pricing-header",children:[hn.jsx("h3",{style:{color:"#4dabf7"},children:"Pro"}),hn.jsxs("div",{className:"pricing-price",children:[hn.jsx("span",{className:"currency",children:"\u20ac"}),hn.jsx("span",{className:"amount",children:"24.99"}),hn.jsx("span",{className:"period",children:"/lifetime"})]}),hn.jsx("p",{style:{color:"var(--text-muted)"},children:"Pour utilisateurs avanc\xe9s"})]}),hn.jsxs("ul",{className:"pricing-features",children:[hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",hn.jsx("strong",{children:"500 search/day"})]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," Complete Results"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," Support 24h/24"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," OSINT Search"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," API Access"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-times"})," IntelX"]})]}),hn.jsx(aa,{to:"/contact?plan=pro",className:"btn btn-primary btn-block",children:"Acheter"})]}),hn.jsxs("div",{className:"pricing-card featured",style:{background:"var(--bg-card)",border:"2px solid #ffd700",borderRadius:"var(--radius-lg)",padding:"32px"},children:[hn.jsxs("div",{className:"pricing-header",children:[hn.jsxs("h3",{style:{color:"#ffd700"},children:[hn.jsx("i",{className:"fas fa-crown"})," premium"]}),hn.jsxs("div",{className:"pricing-price",children:[hn.jsx("span",{className:"currency",children:"\u20ac"}),hn.jsx("span",{className:"amount",children:"200"}),hn.jsx("span",{className:"period",children:"/lifetime"})]}),hn.jsx("p",{style:{color:"var(--text-muted)"},children:"Acc\xe8s ultime"})]}),hn.jsxs("ul",{className:"pricing-features",children:[hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",hn.jsx("strong",{children:"5000 search/day"})]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," Complete Results"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," Support prioritaire 24h/24"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," OSINT Search"]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",hn.jsx("strong",{children:"API Access"})]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," IntelX"]})]}),hn.jsx(aa,{to:"/contact?plan=premium",className:"btn btn-primary btn-block",children:"Acheter"})]})]})})}),hn.jsx("section",{className:"cta-section",children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{className:"cta-content",children:[hn.jsx("h2",{children:a("home.cta.title")}),hn.jsx("p",{children:a("home.cta.subtitle")}),hn.jsxs("div",{className:"cta-buttons",children:[hn.jsxs(aa,{to:"/register",className:"btn btn-primary btn-lg",children:[a("home.cta.button1"),hn.jsx("i",{className:"fas fa-arrow-right"})]}),hn.jsx(aa,{to:"/contact",className:"btn btn-outline btn-lg",children:a("home.cta.button2")})]})]})})}),$&&hn.jsx("div",{className:"modal-overlay",onClick:()=>F(!1),style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,backdropFilter:"blur(4px)"},children:hn.jsxs("div",{className:"modal-content",onClick:e=>e.stopPropagation(),style:{background:"linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)",border:"2px solid rgba(255, 215, 0, 0.5)",borderRadius:"16px",padding:"32px",maxWidth:"500px",width:"90%",boxShadow:"0 20px 60px rgba(255, 215, 0, 0.2)"},children:[hn.jsxs("div",{style:{marginBottom:"24px",textAlign:"center"},children:[hn.jsx("i",{className:"fas fa-crown",style:{fontSize:"48px",color:"#ffd700",marginBottom:"16px"}}),hn.jsx("h2",{style:{color:"#ffd700",marginBottom:"8px"},children:"IntelX Search"}),hn.jsx("p",{style:{color:"rgba(255, 215, 0, 0.7)",fontSize:"14px"},children:"Advanced search in IntelX databases"})]}),hn.jsxs("div",{style:{marginBottom:"20px"},children:[hn.jsxs("label",{style:{display:"block",color:"#fff",marginBottom:"8px",fontWeight:500},children:[hn.jsx("i",{className:"fas fa-database",style:{marginRight:"8px"}}),"Bucket"]}),hn.jsxs("select",{value:H,onChange:e=>K(e.target.value),style:{width:"100%",padding:"12px",background:"rgba(31, 41, 55, 0.8)",border:"2px solid rgba(255, 215, 0, 0.4)",borderRadius:"8px",color:"#fff",fontSize:"14px",cursor:"pointer"},children:[hn.jsx("option",{value:"leaks.logs",children:"Leaks Logs"}),hn.jsx("option",{value:"darknet.tor",children:"Darknet (TOR)"}),hn.jsx("option",{value:"dns",children:"DNS Records"}),hn.jsx("option",{value:"documents.public.scihub",children:"Documents (Sci-Hub)"}),hn.jsx("option",{value:"dumpster",children:"Dumpster"}),hn.jsx("option",{value:"leaks.private",children:"Leaks Private"}),hn.jsx("option",{value:"leaks.public",children:"Leaks Public"}),hn.jsx("option",{value:"pastes",children:"Pastes"}),hn.jsx("option",{value:"web.gov.ru",children:"Web Gov RU"})]})]}),hn.jsxs("div",{style:{marginBottom:"24px"},children:[hn.jsxs("label",{style:{display:"block",color:"#fff",marginBottom:"8px",fontWeight:500},children:[hn.jsx("i",{className:"fas fa-key",style:{marginRight:"8px"}}),"Storage ID"]}),hn.jsx("input",{type:"text",value:W,onChange:e=>V(e.target.value),placeholder:"Entrez le Storage ID...",style:{width:"100%",padding:"12px",background:"rgba(31, 41, 55, 0.8)",border:"2px solid rgba(255, 215, 0, 0.4)",borderRadius:"8px",color:"#fff",fontSize:"14px"}})]}),hn.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[hn.jsx("button",{onClick:()=>F(!1),disabled:G,style:{padding:"12px 24px",background:"rgba(255, 255, 255, 0.1)",border:"2px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",color:"#fff",cursor:"pointer",fontSize:"14px",fontWeight:500,transition:"all 0.3s ease"},children:"Annuler"}),hn.jsx("button",{onClick:De,disabled:G||!W.trim(),style:{padding:"12px 24px",background:G||!W.trim()?"rgba(255, 215, 0, 0.3)":"linear-gradient(135deg, #ffd700 0%, #ffa500 100%)",border:"2px solid rgba(255, 215, 0, 0.5)",borderRadius:"8px",color:G||!W.trim()?"rgba(0, 0, 0, 0.5)":"#000",cursor:G||!W.trim()?"not-allowed":"pointer",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.3s ease"},children:G?hn.jsxs(hn.Fragment,{children:[hn.jsx("span",{className:"spinner"}),hn.jsx("span",{children:"Searching..."})]}):hn.jsxs(hn.Fragment,{children:[hn.jsx("i",{className:"fas fa-search"}),hn.jsx("span",{children:"Search"})]})})]})]})})]})},Kl=()=>{var e=Lo().t
return hn.jsxs(Fl,{children:[hn.jsx("header",{className:"page-header",children:hn.jsxs("div",{className:"container",children:[hn.jsx("span",{className:"section-badge",children:e("features.header.badge")}),hn.jsx("h1",{children:e("features.header.title")}),hn.jsx("p",{children:e("features.header.subtitle")})]})}),hn.jsx("section",{className:"features",style:{paddingTop:"60px"},children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{className:"features-grid",children:[hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-database"})}),hn.jsx("h3",{children:e("features.violations")}),hn.jsx("p",{children:e("features.violations.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-user-secret"})}),hn.jsx("h3",{children:e("features.osint")}),hn.jsx("p",{children:e("features.osint.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-moon"})}),hn.jsx("h3",{children:e("features.darkweb")}),hn.jsx("p",{children:e("features.darkweb.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-bolt"})}),hn.jsx("h3",{children:e("features.realtime")}),hn.jsx("p",{children:e("features.realtime.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-lock"})}),hn.jsx("h3",{children:e("features.encryption")}),hn.jsx("p",{children:e("features.encryption.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-code"})}),hn.jsx("h3",{children:e("features.api")}),hn.jsx("p",{children:e("features.api.desc")})]})]})})}),hn.jsx("section",{className:"content-section",children:hn.jsxs("div",{className:"container",children:[hn.jsxs("div",{className:"section-header",children:[hn.jsx("span",{className:"section-badge",children:e("features.section.types")}),hn.jsx("h2",{className:"section-title",children:e("features.types.title")}),hn.jsx("p",{className:"section-description",children:e("features.types.desc")})]}),hn.jsxs("div",{className:"features-grid",children:[hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-envelope"})}),hn.jsx("h3",{children:e("features.email")}),hn.jsx("p",{children:e("features.email.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-user"})}),hn.jsx("h3",{children:e("features.username")}),hn.jsx("p",{children:e("features.username.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-phone"})}),hn.jsx("h3",{children:e("features.phone")}),hn.jsx("p",{children:e("features.phone.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-globe"})}),hn.jsx("h3",{children:e("features.ip")}),hn.jsx("p",{children:e("features.ip.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-link"})}),hn.jsx("h3",{children:e("features.domain")}),hn.jsx("p",{children:e("features.domain.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fab fa-discord"})}),hn.jsx("h3",{children:e("features.discord")}),hn.jsx("p",{children:e("features.discord.desc")})]})]})]})}),hn.jsx("section",{className:"content-section",children:hn.jsxs("div",{className:"container",children:[hn.jsxs("div",{className:"section-header",children:[hn.jsx("span",{className:"section-badge",children:e("features.section.sources")}),hn.jsx("h2",{className:"section-title",children:e("features.sources.title")}),hn.jsx("p",{className:"section-description",children:e("features.sources.desc")})]}),hn.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"24px",marginTop:"40px"},children:[hn.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center"},children:[hn.jsx("i",{className:"fas fa-database",style:{fontSize:"2rem",color:"var(--text-primary)",marginBottom:"12px"}}),hn.jsx("h4",{style:{marginBottom:"8px"},children:e("features.breaches")}),hn.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:e("features.breaches.count")})]}),hn.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center"},children:[hn.jsx("i",{className:"fab fa-twitter",style:{fontSize:"2rem",color:"var(--text-primary)",marginBottom:"12px"}}),hn.jsx("h4",{style:{marginBottom:"8px"},children:e("features.social")}),hn.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:e("features.social.count")})]}),hn.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center"},children:[hn.jsx("i",{className:"fas fa-moon",style:{fontSize:"2rem",color:"var(--text-primary)",marginBottom:"12px"}}),hn.jsx("h4",{style:{marginBottom:"8px"},children:e("features.dark")}),hn.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:e("features.dark.count")})]}),hn.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center"},children:[hn.jsx("i",{className:"fas fa-file-alt",style:{fontSize:"2rem",color:"var(--text-primary)",marginBottom:"12px"}}),hn.jsx("h4",{style:{marginBottom:"8px"},children:e("features.public")}),hn.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:e("features.public.count")})]}),hn.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center"},children:[hn.jsx("i",{className:"fas fa-paste",style:{fontSize:"2rem",color:"var(--text-primary)",marginBottom:"12px"}}),hn.jsx("h4",{style:{marginBottom:"8px"},children:e("features.pastes")}),hn.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:e("features.pastes.count")})]})]})]})}),hn.jsx("section",{className:"trust-section",children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{className:"trust-content",children:[hn.jsxs("div",{className:"trust-text",children:[hn.jsx("span",{className:"section-badge",children:e("features.section.security")}),hn.jsx("h2",{children:e("features.security.title")}),hn.jsx("p",{children:e("features.security.desc")}),hn.jsxs("div",{className:"trust-features",children:[hn.jsxs("div",{className:"trust-feature",children:[hn.jsx("i",{className:"fas fa-check-circle"}),hn.jsx("span",{children:e("features.aes256")})]}),hn.jsxs("div",{className:"trust-feature",children:[hn.jsx("i",{className:"fas fa-check-circle"}),hn.jsx("span",{children:e("features.gdpr")})]}),hn.jsxs("div",{className:"trust-feature",children:[hn.jsx("i",{className:"fas fa-check-circle"}),hn.jsx("span",{children:e("features.zerologo")})]}),hn.jsxs("div",{className:"trust-feature",children:[hn.jsx("i",{className:"fas fa-check-circle"}),hn.jsx("span",{children:e("features.audit")})]})]})]}),hn.jsxs("div",{className:"trust-stats",children:[hn.jsxs("div",{className:"trust-stat-card",children:[hn.jsx("div",{className:"trust-stat-icon",children:hn.jsx("i",{className:"fas fa-lock"})}),hn.jsx("div",{className:"trust-stat-number",children:"TLS 1.3"}),hn.jsx("div",{className:"trust-stat-label",children:"Chiffrement"})]}),hn.jsxs("div",{className:"trust-stat-card",children:[hn.jsx("div",{className:"trust-stat-icon",children:hn.jsx("i",{className:"fas fa-server"})}),hn.jsx("div",{className:"trust-stat-number",children:"SOC 2"}),hn.jsx("div",{className:"trust-stat-label",children:"Certifi\xe9"})]}),hn.jsxs("div",{className:"trust-stat-card",children:[hn.jsx("div",{className:"trust-stat-icon",children:hn.jsx("i",{className:"fas fa-shield-alt"})}),hn.jsx("div",{className:"trust-stat-number",children:"99.9%"}),hn.jsx("div",{className:"trust-stat-label",children:"Uptime"})]}),hn.jsxs("div",{className:"trust-stat-card",children:[hn.jsx("div",{className:"trust-stat-icon",children:hn.jsx("i",{className:"fas fa-clock"})}),hn.jsx("div",{className:"trust-stat-number",children:"24/7"}),hn.jsx("div",{className:"trust-stat-label",children:"Monitoring"})]})]})]})})}),hn.jsx("section",{className:"cta-section",children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{className:"cta-content",children:[hn.jsx("h2",{children:e("features.cta.text")}),hn.jsx("p",{children:e("features.cta.subtitle")}),hn.jsxs("div",{className:"cta-buttons",children:[hn.jsxs(aa,{to:"/register",className:"btn btn-primary btn-lg",children:[e("features.cta.button"),hn.jsx("i",{className:"fas fa-arrow-right"})]}),hn.jsx(aa,{to:"/pricing",className:"btn btn-outline btn-lg",children:e("nav.pricing")})]})]})})})]})},Yl=()=>{var e=Lo().t
return hn.jsxs(Fl,{children:[hn.jsx("header",{className:"page-header",children:hn.jsxs("div",{className:"container",children:[hn.jsx("span",{className:"section-badge",children:e("pricing.header.badge")}),hn.jsx("h1",{children:e("pricing.header.title")}),hn.jsx("p",{children:e("pricing.header.subtitle")})]})}),hn.jsx("section",{className:"pricing-preview",style:{paddingTop:"60px"},children:hn.jsxs("div",{className:"container",children:[hn.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"32px",maxWidth:"1600px",margin:"0 auto",padding:"0 16px"},children:[hn.jsxs("div",{className:"pricing-card",style:{background:"var(--bg-card)",border:"2px solid #ff6b9d",borderRadius:"var(--radius-lg)",padding:"32px"},children:[hn.jsxs("div",{className:"pricing-header",children:[hn.jsx("h3",{style:{color:"#ff6b9d"},children:e("pricing.plan.beginner")}),hn.jsxs("div",{className:"pricing-price",children:[hn.jsx("span",{className:"currency",children:"\u20ac"}),hn.jsx("span",{className:"amount",children:e("pricing.price.beginner")}),hn.jsx("span",{className:"period",children:e("pricing.price.period")})]}),hn.jsx("p",{style:{color:"var(--text-muted)"},children:e("pricing.price.crypto")})]}),hn.jsxs("ul",{className:"pricing-features",children:[hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," 100 ",e("pricing.searches.per.day")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.results")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.support")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.osint")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.api")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-times"})," ",e("pricing.feature.intelx")]})]}),hn.jsx(aa,{to:"/contact?plan=beginner",className:"btn btn-primary btn-block",children:e("pricing.button.buy")})]}),hn.jsxs("div",{className:"pricing-card",style:{background:"var(--bg-card)",border:"2px solid #4dabf7",borderRadius:"var(--radius-lg)",padding:"32px"},children:[hn.jsxs("div",{className:"pricing-header",children:[hn.jsx("h3",{style:{color:"#4dabf7"},children:e("pricing.plan.pro")}),hn.jsxs("div",{className:"pricing-price",children:[hn.jsx("span",{className:"currency",children:"\u20ac"}),hn.jsx("span",{className:"amount",children:e("pricing.price.pro")}),hn.jsx("span",{className:"period",children:e("pricing.price.period")})]}),hn.jsx("p",{style:{color:"var(--text-muted)"},children:e("pricing.price.advanced")})]}),hn.jsxs("ul",{className:"pricing-features",children:[hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",hn.jsxs("strong",{children:["500 ",e("pricing.searches.per.day")]})]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.results")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.support")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.osint")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.api")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-times"})," ",e("pricing.feature.intelx")]})]}),hn.jsx(aa,{to:"/contact?plan=pro",className:"btn btn-primary btn-block",children:e("pricing.button.buy")})]}),hn.jsxs("div",{className:"pricing-card featured",style:{background:"var(--bg-card)",border:"2px solid #ffd700",borderRadius:"var(--radius-lg)",padding:"32px"},children:[hn.jsxs("div",{className:"pricing-header",children:[hn.jsxs("h3",{style:{color:"#ffd700"},children:[hn.jsx("i",{className:"fas fa-crown"})," ",e("pricing.plan.premium")]}),hn.jsxs("div",{className:"pricing-price",children:[hn.jsx("span",{className:"currency",children:"\u20ac"}),hn.jsx("span",{className:"amount",children:e("pricing.price.premium")}),hn.jsx("span",{className:"period",children:e("pricing.price.period")})]}),hn.jsx("p",{style:{color:"var(--text-muted)"},children:e("pricing.price.ultimate")})]}),hn.jsxs("ul",{className:"pricing-features",children:[hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",hn.jsxs("strong",{children:["5000 ",e("pricing.searches.per.day")]})]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.results")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.support")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.osint")]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",hn.jsx("strong",{children:e("pricing.feature.api")})]}),hn.jsxs("li",{children:[hn.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.intelx")]})]}),hn.jsx(aa,{to:"/contact?plan=premium",className:"btn btn-primary btn-block",children:e("pricing.button.buy")})]})]}),hn.jsxs("div",{style:{maxWidth:"600px",margin:"40px auto 0",textAlign:"center",padding:"24px",background:"rgba(255, 255, 255, 0.03)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)"},children:[hn.jsx("i",{className:"fab fa-bitcoin",style:{fontSize:"2rem",color:"#ffd700",marginBottom:"12px"}}),hn.jsx("h4",{style:{marginBottom:"8px"},children:e("pricing.payment.title")}),hn.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:e("pricing.payment.desc")})]})]})}),hn.jsx("section",{className:"content-section",children:hn.jsxs("div",{className:"container",children:[hn.jsx("div",{className:"section-header",children:hn.jsx("h2",{className:"section-title",children:e("pricing.faq.title")})}),"          ",hn.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[hn.jsxs("div",{style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[hn.jsx("h3",{style:{marginBottom:"12px"},children:e("pricing.faq.payment.title")}),hn.jsx("p",{style:{color:"var(--text-secondary)"},children:e("pricing.faq.payment.desc")})]}),hn.jsxs("div",{style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[hn.jsx("h3",{style:{marginBottom:"12px"},children:e("pricing.faq.lifetime.title")}),hn.jsx("p",{style:{color:"var(--text-secondary)"},children:e("pricing.faq.lifetime.desc")})]}),hn.jsxs("div",{style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[hn.jsx("h3",{style:{marginBottom:"12px"},children:e("pricing.faq.osint.title")}),hn.jsx("p",{style:{color:"var(--text-secondary)"},children:e("pricing.faq.osint.desc")})]}),hn.jsxs("div",{style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px"},children:[hn.jsx("h3",{style:{marginBottom:"12px"},children:e("pricing.faq.activation.title")}),hn.jsx("p",{style:{color:"var(--text-secondary)"},children:e("pricing.faq.activation.desc")})]})]})]})}),hn.jsx("section",{className:"cta-section",children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{className:"cta-content",children:[hn.jsx("h2",{children:e("pricing.cta.title")}),hn.jsx("p",{children:e("pricing.cta.subtitle")}),hn.jsxs("div",{className:"cta-buttons",children:[hn.jsxs(aa,{to:"/contact?plan=beginner",className:"btn btn-primary btn-lg",children:[e("pricing.cta.button.beginner"),hn.jsx("i",{className:"fas fa-arrow-right"})]}),hn.jsx(aa,{to:"/contact?plan=premium",className:"btn btn-outline btn-lg",children:e("pricing.cta.button.premium")})]})]})})})]})},Gl=()=>{var e,t=Lo().t,n=i(bn.useState(null),2),a=n[0],o=n[1]
return bn.useEffect(()=>{var e=function(){var e=s(r().m(function e(){var t,n,a,s
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,No.from("profiles").select("*",{count:"exact",head:!0})
case 1:if(t=e.v,n=t.count,t.error||"number"!=typeof n){e.n=2
break}return o(n),e.a(2)
case 2:return e.n=3,No.from("user_credits").select("*",{count:"exact",head:!0})
case 3:a=e.v,s=a.count,a.error||"number"!=typeof s||o(s),e.n=5
break
case 4:e.p=4,e.v
case 5:return e.a(2)}},e,null,[[0,4]])}))
return function(){return e.apply(this,arguments)}}()
e()},[]),hn.jsxs(Fl,{children:[hn.jsx("header",{className:"page-header",children:hn.jsxs("div",{className:"container",children:[hn.jsx("span",{className:"section-badge",children:t("about.header.badge")}),hn.jsx("h1",{children:t("about.header.title")}),hn.jsx("p",{children:t("about.header.subtitle")})]})}),hn.jsx("section",{className:"content-section",children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{className:"about-mission-grid",children:[hn.jsxs("div",{className:"about-mission-copy",children:[hn.jsx("h2",{children:t("about.mission")}),hn.jsx("p",{children:t("about.mission.text1")}),hn.jsx("p",{children:t("about.mission.text2")}),hn.jsx("p",{children:t("about.mission.text3")})]}),hn.jsx("div",{className:"about-mission-stats",children:hn.jsxs("div",{className:"about-stats-grid",children:[hn.jsxs("div",{className:"about-stat",children:[hn.jsx("div",{className:"about-stat-number",children:"2025"}),hn.jsx("div",{className:"about-stat-label",children:t("about.year")})]}),hn.jsxs("div",{className:"about-stat",children:[hn.jsx("div",{className:"about-stat-number",children:"50+"}),hn.jsx("div",{className:"about-stat-label",children:t("about.countries")})]}),hn.jsxs("div",{className:"about-stat",children:[hn.jsx("div",{className:"about-stat-number",children:(e=a,null===e?"...":e>=1e3?`${(e/1e3).toFixed(1)}K+`:`${e}+`)}),hn.jsx("div",{className:"about-stat-label",children:t("about.users")})]}),hn.jsxs("div",{className:"about-stat",children:[hn.jsx("div",{className:"about-stat-number",children:"4"}),hn.jsx("div",{className:"about-stat-label",children:t("about.members")})]})]})})]})})}),hn.jsx("section",{className:"features",children:hn.jsxs("div",{className:"container",children:[hn.jsxs("div",{className:"section-header",children:[hn.jsx("span",{className:"section-badge",children:t("about.values.title")}),hn.jsx("h2",{className:"section-title",children:t("about.values.subtitle")})]}),hn.jsxs("div",{className:"features-grid",children:[hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-shield-alt"})}),hn.jsx("h3",{children:t("about.security")}),hn.jsx("p",{children:t("about.security.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-eye"})}),hn.jsx("h3",{children:t("about.transparency")}),hn.jsx("p",{children:t("about.transparency.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-balance-scale"})}),hn.jsx("h3",{children:t("about.ethics")}),hn.jsx("p",{children:t("about.ethics.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-users"})}),hn.jsx("h3",{children:t("about.accessibility")}),hn.jsx("p",{children:t("about.accessibility.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-rocket"})}),hn.jsx("h3",{children:t("about.innovation")}),hn.jsx("p",{children:t("about.innovation.desc")})]}),hn.jsxs("div",{className:"feature-card",children:[hn.jsx("div",{className:"feature-icon",children:hn.jsx("i",{className:"fas fa-handshake"})}),hn.jsx("h3",{children:t("about.support")}),hn.jsx("p",{children:t("about.support.desc")})]})]})]})}),hn.jsx("section",{className:"content-section",children:hn.jsxs("div",{className:"container",children:[hn.jsxs("div",{className:"section-header",children:[hn.jsx("span",{className:"section-badge",children:t("about.team.title")}),hn.jsx("h2",{className:"section-title",children:t("about.team.description")}),hn.jsx("p",{className:"section-description",children:t("about.team.subtitle")})]}),hn.jsxs("div",{className:"team-grid about-team-grid",children:[hn.jsxs("div",{className:"team-card about-team-card",children:[hn.jsx("div",{className:"team-avatar",children:hn.jsx("i",{className:"fas fa-user"})}),hn.jsx("h3",{children:"bZow"}),hn.jsx("p",{className:"role",children:hn.jsx("span",{className:"about-role-chip",children:"Founder"})})]}),hn.jsxs("div",{className:"team-card about-team-card",children:[hn.jsx("div",{className:"team-avatar",children:hn.jsx("i",{className:"fas fa-user"})}),hn.jsx("h3",{children:"Quraiv"}),hn.jsx("p",{className:"role",children:hn.jsx("span",{className:"about-role-chip",children:"Founder"})})]}),hn.jsxs("div",{className:"team-card about-team-card",children:[hn.jsx("div",{className:"team-avatar",children:hn.jsx("i",{className:"fas fa-user"})}),hn.jsx("h3",{children:"Lain"}),hn.jsx("p",{className:"role",children:hn.jsx("span",{className:"about-role-chip",children:"Founder"})})]})]})]})}),hn.jsx("section",{className:"cta-section",children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{className:"cta-content",children:[hn.jsx("h2",{children:t("about.join.title")}),hn.jsx("p",{children:t("about.join.subtitle")}),hn.jsxs("div",{className:"cta-buttons",children:[hn.jsxs(aa,{to:"/contact",className:"btn btn-primary btn-lg",children:["Voir les offres",hn.jsx("i",{className:"fas fa-arrow-right"})]}),hn.jsx(aa,{to:"/contact",className:"btn btn-outline btn-lg",children:"Nous contacter"})]})]})})})]})},Jl=()=>{var e,t=Oo(),n=t.user,a=t.profile,o=Lo(),l=o.t,c=o.language,u=M(),d=i(function(){S("undefined"!=typeof URLSearchParams,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.")
var e=bn.useRef(ae(void 0)),t=bn.useRef(!1),r=V(),n=bn.useMemo(()=>function(e,t){var r=ae(e)
return t&&t.forEach((e,n)=>{r.has(n)||t.getAll(n).forEach(e=>{r.append(n,e)})}),r}(r.search,t.current?null:e.current),[r.search]),a=M(),s=bn.useCallback((e,r)=>{var s=ae("function"==typeof e?e(new URLSearchParams(n)):e)
t.current=!0,a("?"+s,r)},[a,n])
return[n,s]}(),1)[0],p=i(bn.useState(""),2),f=p[0],h=p[1],m=i(bn.useState(""),2),g=m[0],b=m[1],v=i(bn.useState("contact"),2),y=v[0],x=v[1],w=i(bn.useState(null),2),k=w[0],j=w[1],_=i(bn.useState(!1),2),N=_[0],E=_[1],T=i(bn.useState(!1),2),C=T[0],R=T[1],P=i(bn.useState(""),2),A=P[0],O=P[1]
bn.useEffect(()=>{var e=d.get("plan")
"beginner"!==e&&"premium"!==e||(x("acces_payant"),j(e),h("Achat plan "+("beginner"===e?"Beginner":"premium")),b(`Bonjour,\n\nJe souhaite acheter le plan ${"beginner"===e?"Beginner (\u20ac9.99)":"premium (\u20ac200)"}.\n\nMerci de me fournir l'adresse LTC pour le paiement.`))},[d])
var I=function(){var e=s(r().m(function e(t){var s,i,o,c,d,p,m,v
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(t.preventDefault(),n){e.n=1
break}return O(l("contact.notloggedin")),e.a(2)
case 1:if(f.trim()&&g.trim()){e.n=2
break}return O(l("contact.form.required")),e.a(2)
case 2:if("acces_payant"!==y||k){e.n=3
break}return O(l("contact.form.selectplan")),e.a(2)
case 3:if(E(!0),O(""),ol(`ticket_${n.id}`,3,36e5)){e.n=4
break}return O(l("contact.form.ratelimit")||"Trop de tickets cr\xe9\xe9s. Veuillez r\xe9essayer plus tard."),E(!1),e.a(2)
case 4:if(s=rl(f.trim()),i=rl(g.trim()),!(s.length<5||s.length>500)){e.n=5
break}return O("Le sujet doit contenir entre 5 et 500 caract\xe8res."),E(!1),e.a(2)
case 5:if(!(i.length<10||i.length>1e4)){e.n=6
break}return O("Le message doit contenir entre 10 et 10000 caract\xe8res."),E(!1),e.a(2)
case 6:if(!cl(s)&&!cl(i)){e.n=7
break}return O("Contenu suspect d\xe9tect\xe9. Veuillez r\xe9viser votre message."),E(!1),e.a(2)
case 7:return e.p=7,c=(null==a?void 0:a.username)||(null===(o=n.user_metadata)||void 0===o?void 0:o.username)||"Utilisateur",d=n.email||"",e.n=8,No.from("tickets").insert({user_id:n.id,username:c,email:d,category:y,subject:s,message:i,status:"open"}).select().maybeSingle()
case 8:if(p=e.v,m=p.data,!p.error){e.n=9
break}Bo(),O(l("contact.form.error")),e.n=11
break
case 9:if(!m){e.n=11
break}return v=`__BOT_INFO__${JSON.stringify({username:c,email:d,user_id:n.id,created_at:(new Date).toISOString(),selected_plan:"acces_payant"===y?k:null})}__BOT_INFO__`,e.n=10,No.from("ticket_messages").insert({ticket_id:m.id,user_id:n.id,username:"Dbs BOT",message:v,image_url:null,is_owner:!0})
case 10:R(!0),h(""),b(""),j(null),setTimeout(()=>{u("/tickets")},3e3)
case 11:e.n=13
break
case 12:e.p=12,e.v,O(l("contact.form.error"))
case 13:return e.p=13,E(!1),e.f(13)
case 14:return e.a(2)}},e,null,[[7,12,13,14]])}))
return function(t){return e.apply(this,arguments)}}()
return hn.jsxs(Fl,{children:[hn.jsx("header",{className:"page-header",children:hn.jsxs("div",{className:"container",children:[hn.jsx("span",{className:"section-badge",children:l("contact.header.badge")}),hn.jsx("h1",{children:l("contact.header.title")}),hn.jsx("p",{children:l("contact.header.subtitle")})]})}),hn.jsx("section",{className:"content-section",children:hn.jsx("div",{className:"container",children:n?C?hn.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid rgba(81, 207, 102, 0.3)",maxWidth:"500px",margin:"0 auto"},children:[hn.jsx("div",{style:{width:"80px",height:"80px",background:"rgba(81, 207, 102, 0.2)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"},children:hn.jsx("i",{className:"fas fa-check",style:{fontSize:"2.5rem",color:"#51cf66"}})}),hn.jsx("h3",{style:{color:"#51cf66"},children:l("contact.success.title")}),hn.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"20px"},children:l("contact.success.desc")}),hn.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:l("contact.success.redirect")})]}):hn.jsx("div",{style:{maxWidth:"600px",margin:"0 auto"},children:hn.jsxs("form",{onSubmit:I,children:[A&&hn.jsxs("div",{style:{background:"rgba(255, 107, 107, 0.1)",border:"1px solid rgba(255, 107, 107, 0.3)",borderRadius:"var(--radius-md)",padding:"12px 16px",marginBottom:"20px",color:"#ff6b6b",display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-exclamation-circle"}),A]}),hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{className:"form-label",children:l("contact.form.category")}),hn.jsxs("div",{style:{display:"flex",gap:"12px"},children:[hn.jsxs("button",{type:"button",onClick:()=>{x("contact"),j(null)},style:{flex:1,padding:"16px",background:"contact"===y?"rgba(0, 123, 255, 0.2)":"var(--bg-card)",border:"2px solid "+("contact"===y?"#4dabf7":"var(--border-color)"),borderRadius:"var(--radius-md)",cursor:"pointer",transition:"all 0.2s ease"},children:[hn.jsx("i",{className:"fas fa-comment-dots",style:{fontSize:"1.5rem",marginBottom:"8px",display:"block",color:"contact"===y?"#4dabf7":"var(--text-muted)"}}),hn.jsx("span",{style:{fontWeight:500,color:"contact"===y?"#4dabf7":"var(--text-primary)"},children:"Contact"})]}),hn.jsxs("button",{type:"button",onClick:()=>x("acces_payant"),style:{flex:1,padding:"16px",background:"acces_payant"===y?"rgba(255, 193, 7, 0.2)":"var(--bg-card)",border:"2px solid "+("acces_payant"===y?"#ffd43b":"var(--border-color)"),borderRadius:"var(--radius-md)",cursor:"pointer",transition:"all 0.2s ease"},children:[hn.jsx("i",{className:"fas fa-crown",style:{fontSize:"1.5rem",marginBottom:"8px",display:"block",color:"acces_payant"===y?"#ffd43b":"var(--text-muted)"}}),hn.jsx("span",{style:{fontWeight:500,color:"acces_payant"===y?"#ffd43b":"var(--text-primary)"},children:"fr"===c?"Acc\xe8s Payant":"Paid Access"})]})]})]}),"acces_payant"===y&&hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{className:"form-label",children:"fr"===c?"Choisissez votre plan":"Choose your plan"}),hn.jsxs("div",{style:{display:"flex",gap:"12px"},children:[hn.jsxs("button",{type:"button",onClick:()=>{j("beginner"),h("fr"===c?"Achat plan Beginner":"Beginner Plan Purchase"),b("fr"===c?"Bonjour,\n\nJe souhaite acheter le plan Beginner (\u20ac9.99).\n\nMerci de me fournir l'adresse LTC pour le paiement.":"Hello,\n\nI would like to purchase the Beginner plan (\u20ac9.99).\n\nPlease provide me with the LTC address for payment.")},style:{flex:1,padding:"20px 16px",background:"beginner"===k?"rgba(255, 107, 157, 0.2)":"var(--bg-card)",border:"2px solid "+("beginner"===k?"#ff6b9d":"var(--border-color)"),borderRadius:"var(--radius-md)",cursor:"pointer",transition:"all 0.2s ease",textAlign:"center"},children:[hn.jsx("i",{className:"fas fa-rocket",style:{fontSize:"1.8rem",marginBottom:"10px",display:"block",color:"beginner"===k?"#ff6b9d":"var(--text-muted)"}}),hn.jsx("span",{style:{fontWeight:600,fontSize:"1.1rem",display:"block",color:"beginner"===k?"#ff6b9d":"var(--text-primary)",marginBottom:"4px"},children:"Beginner"}),hn.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",display:"block"},children:"100 search/day"}),hn.jsx("span",{style:{fontSize:"1.2rem",fontWeight:700,color:"beginner"===k?"#ff6b9d":"var(--text-primary)",marginTop:"8px",display:"block"},children:"\u20ac9.99 LTC"})]}),hn.jsxs("button",{type:"button",onClick:()=>{j("premium"),h("fr"===c?"Achat plan premium":"premium Plan Purchase"),b("fr"===c?"Bonjour,\n\nJe souhaite acheter le plan premium (\u20ac200).\n\nMerci de me fournir l'adresse LTC pour le paiement.":"Hello,\n\nI would like to purchase the premium plan (\u20ac200).\n\nPlease provide me with the LTC address for payment.")},style:{flex:1,padding:"20px 16px",background:"premium"===k?"rgba(255, 215, 0, 0.2)":"var(--bg-card)",border:"2px solid "+("premium"===k?"#ffd700":"var(--border-color)"),borderRadius:"var(--radius-md)",cursor:"pointer",transition:"all 0.2s ease",textAlign:"center",position:"relative"},children:[hn.jsx("div",{style:{position:"absolute",top:"-8px",right:"-8px",background:"linear-gradient(135deg, #ffd700, #ffa500)",color:"#1a1a2e",padding:"2px 8px",borderRadius:"8px",fontSize:"0.65rem",fontWeight:700},children:"BEST"}),hn.jsx("i",{className:"fas fa-crown",style:{fontSize:"1.8rem",marginBottom:"10px",display:"block",color:"premium"===k?"#ffd700":"var(--text-muted)"}}),hn.jsx("span",{style:{fontWeight:600,fontSize:"1.1rem",display:"block",color:"premium"===k?"#ffd700":"var(--text-primary)",marginBottom:"4px"},children:"premium"}),hn.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",display:"block"},children:"5000 search/day"}),hn.jsx("span",{style:{fontSize:"1.2rem",fontWeight:700,color:"premium"===k?"#ffd700":"var(--text-primary)",marginTop:"8px",display:"block"},children:"\u20ac200 LTC"})]})]})]}),hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{htmlFor:"subject",className:"form-label",children:l("contact.form.subject")}),hn.jsx("input",{type:"text",id:"subject",className:"form-input",placeholder:"fr"===c?"R\xe9sumez votre demande en quelques mots":"Summarize your request in a few words",value:f,onChange:e=>h(e.target.value),disabled:N,required:!0})]}),hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{htmlFor:"message",className:"form-label",children:l("contact.form.message")}),hn.jsx("textarea",{id:"message",className:"form-input",placeholder:"fr"===c?"D\xe9crivez votre demande en d\xe9tail...":"Describe your request in detail...",value:g,onChange:e=>b(e.target.value),disabled:N,required:!0,rows:6,style:{resize:"vertical",minHeight:"120px"}})]}),hn.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",borderRadius:"var(--radius-md)",padding:"16px",marginBottom:"20px",fontSize:"0.9rem"},children:[hn.jsxs("p",{style:{margin:"0 0 8px",color:"var(--text-muted)"},children:[hn.jsx("i",{className:"fas fa-info-circle"})," ","fr"===c?"Informations envoy\xe9es avec le ticket:":"Information sent with the ticket:"]}),hn.jsxs("p",{style:{margin:0,color:"var(--text-secondary)"},children:[hn.jsx("strong",{children:"Username:"})," ",(null==a?void 0:a.username)||(null===(e=n.user_metadata)||void 0===e?void 0:e.username)||"N/A",hn.jsx("br",{}),hn.jsx("strong",{children:"Email:"})," ",n.email,"acces_payant"===y&&k&&hn.jsxs(hn.Fragment,{children:[hn.jsx("br",{}),hn.jsx("strong",{children:"fr"===c?"Plan s\xe9lectionn\xe9:":"Selected plan:"})," ",hn.jsx("span",{style:{color:"beginner"===k?"#ff6b9d":"#ffd700"},children:l(`contact.form.plan.${k}`)})]})]})]}),hn.jsxs("div",{style:{display:"flex",gap:"12px"},children:[hn.jsx("button",{type:"submit",className:"btn btn-primary",disabled:N,style:{flex:1},children:N?hn.jsxs(hn.Fragment,{children:[hn.jsx("span",{className:"spinner"}),"fr"===c?"Cr\xe9ation...":"Creating..."]}):hn.jsxs(hn.Fragment,{children:[hn.jsx("i",{className:"fas fa-paper-plane"}),"fr"===c?"Cr\xe9er le ticket":"Create Ticket"]})}),hn.jsx(aa,{to:"/tickets",className:"btn btn-outline",children:"fr"===c?"Mes tickets":"My Tickets"})]})]})}):hn.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)",maxWidth:"500px",margin:"0 auto"},children:[hn.jsx("i",{className:"fas fa-lock",style:{fontSize:"4rem",color:"var(--text-muted)",marginBottom:"20px"}}),hn.jsx("h3",{children:l("contact.login.title")}),hn.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"20px"},children:l("contact.login.required")}),hn.jsx(aa,{to:"/login",className:"btn btn-primary",children:l("contact.login.button")})]})})}),hn.jsx("section",{className:"content-section",children:hn.jsxs("div",{className:"container",children:[hn.jsxs("div",{className:"section-header",children:[hn.jsx("span",{className:"section-badge",children:"FAQ"}),hn.jsx("h2",{className:"section-title",children:l("contact.faq.title")})]}),hn.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[hn.jsxs("div",{className:"glow-card",style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[hn.jsx("h3",{style:{marginBottom:"12px"},children:l("contact.faq.q1")}),hn.jsx("p",{style:{color:"var(--text-secondary)"},children:l("contact.faq.a1")})]}),hn.jsxs("div",{className:"glow-card",style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[hn.jsx("h3",{style:{marginBottom:"12px"},children:l("contact.faq.q2")}),hn.jsx("p",{style:{color:"var(--text-secondary)"},children:l("contact.faq.a2")})]}),hn.jsxs("div",{className:"glow-card",style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[hn.jsx("h3",{style:{marginBottom:"12px"},children:l("contact.faq.q3")}),hn.jsx("p",{style:{color:"var(--text-secondary)"},children:l("contact.faq.a3")})]}),hn.jsxs("div",{className:"glow-card",style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px"},children:[hn.jsx("h3",{style:{marginBottom:"12px"},children:l("contact.faq.q4")}),hn.jsx("p",{style:{color:"var(--text-secondary)"},children:l("contact.faq.a4")})]})]})]})})]})},Xl=["deee5dc2-e37e-48ba-8da2-1fb5945cd235","3e45559e-299c-4d49-9fe8-b2c77237d2c9","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","f479668f-4129-4c67-91bb-decba5a0e804","46eea62a-4835-4b54-a23e-c20aee355760","946f8b8b-6057-4dc9-9615-e1cfa8eb9c9f","c5ac1d65-40ac-4b53-85b3-8cea8fdfe491"],Zl=()=>{var e=Oo(),t=e.user,n=e.profile,a=Lo().t,o=i(bn.useState([]),2),l=o[0],c=o[1],u=i(bn.useState(!1),2),d=u[0],p=u[1],f=i(bn.useState(null),2),h=f[0],m=f[1],g=i(bn.useState("all"),2),b=g[0],v=g[1],y=i(bn.useState([]),2),x=y[0],w=y[1],k=i(bn.useState(""),2),j=k[0],S=k[1],_=i(bn.useState(!1),2),N=_[0],E=_[1],T=i(bn.useState(!1),2),C=T[0],R=T[1],P=i(bn.useState(null),2),A=P[0],O=P[1],I=i(bn.useState(!1),2),z=I[0],L=I[1],D=i(bn.useState(null),2),U=D[0],$=D[1],F=i(bn.useState(null),2),B=F[0],W=F[1],V=bn.useRef(null),q=bn.useRef(null),M=t&&Xl.includes(t.id),H=function(){var e=s(r().m(function e(){var n,a,s
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(t){e.n=1
break}return e.a(2)
case 1:return e.p=1,n=No.from("tickets").select("*").order("created_at",{ascending:!1}),Xl.includes(t.id)||(n=n.eq("user_id",t.id)),e.n=2,n
case 2:if(a=e.v,s=a.data,!a.error){e.n=3
break}return e.a(2)
case 3:s&&c(e=>JSON.stringify(e)!==JSON.stringify(s)?s:e),d||p(!0),e.n=5
break
case 4:e.p=4,e.v,d||p(!0)
case 5:return e.a(2)}},e,null,[[1,4]])}))
return function(){return e.apply(this,arguments)}}()
bn.useEffect(()=>{if(t){H()
var e=setInterval(H,500),r=No.channel("tickets-live-"+t.id).on("postgres_changes",{event:"*",schema:"public",table:"tickets"},()=>{H()}).subscribe()
return()=>{clearInterval(e),No.removeChannel(r)}}},[t]),bn.useEffect(()=>{h&&K(h.id)},[h]),bn.useEffect(()=>{if(h){var e=setInterval(()=>{K(h.id)},500),t=No.channel("messages-live-"+h.id).on("postgres_changes",{event:"*",schema:"public",table:"ticket_messages"},e=>{e.new.ticket_id===h.id&&K(h.id)}).subscribe()
return()=>{clearInterval(e),No.removeChannel(t)}}},[null==h?void 0:h.id]),bn.useEffect(()=>{var e
null===(e=V.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[x])
var K=function(){var e=s(r().m(function e(t){var n,a
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,No.from("ticket_messages").select("*").eq("ticket_id",t).order("created_at",{ascending:!0})
case 1:n=e.v,a=n.data,!n.error&&a&&w(a),e.n=3
break
case 2:e.p=2,e.v
case 3:return e.a(2)}},e,null,[[0,2]])}))
return function(t){return e.apply(this,arguments)}}(),Y=i(bn.useState(null),2),G=Y[0],J=Y[1],X=function(){var e=s(r().m(function e(a){var s,i,o,l
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if(t&&h&&(j.trim()||a)){e.n=1
break}return e.a(2)
case 1:if(!j.trim()||a){e.n=3
break}if((s=ml(j,t.id,{maxLength:2e3,rateLimit:{maxMessages:M?30:10,windowMs:6e4},allowLinks:null!=M&&M,allowDiscord:null!=M&&M})).isValid){e.n=2
break}return J(s.error||"Message non valide"),setTimeout(()=>J(null),4e3),e.a(2)
case 2:if(!cl(j)){e.n=3
break}return J("Contenu suspect d\xe9tect\xe9"),setTimeout(()=>J(null),4e3),e.a(2)
case 3:return J(null),E(!0),e.p=4,o=(null==n?void 0:n.username)||(null===(i=t.user_metadata)||void 0===i?void 0:i.username)||"Utilisateur",l=Xo(j.trim())||(a?"\ud83d\udcf7 Image":""),e.n=5,No.from("ticket_messages").insert({ticket_id:h.id,user_id:t.id,username:Xo(o),message:l,image_url:a||null,is_owner:M})
case 5:e.v.error?(J("Erreur lors de l'envoi"),setTimeout(()=>J(null),3e3)):(S(""),K(h.id)),e.n=7
break
case 6:e.p=6,e.v,J("Erreur lors de l'envoi"),setTimeout(()=>J(null),3e3)
case 7:return e.p=7,E(!1),e.f(7)
case 8:return e.a(2)}},e,null,[[4,6,7,8]])}))
return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=s(r().m(function e(t){var n,a,s,i,o,l,c,u
return r().w(function(e){for(;;)switch(e.p=e.n){case 0:if((s=null===(n=t.target.files)||void 0===n?void 0:n[0])&&h){e.n=1
break}return e.a(2)
case 1:if(!(s.size>5242880)){e.n=2
break}return J("Image trop volumineuse (max 5MB)"),setTimeout(()=>J(null),3e3),e.a(2)
case 2:if(["image/jpeg","image/png","image/gif","image/webp"].includes(s.type)){e.n=3
break}return J("Type de fichier non autoris\xe9 (JPG, PNG, GIF, WEBP uniquement)"),setTimeout(()=>J(null),3e3),e.a(2)
case 3:if(i=null===(a=s.name.split(".").pop())||void 0===a?void 0:a.toLowerCase(),o=["jpg","jpeg","png","gif","webp"],i&&o.includes(i)){e.n=4
break}return J("Extension de fichier non autoris\xe9e"),setTimeout(()=>J(null),3e3),e.a(2)
case 4:return R(!0),e.p=5,l=`${h.id}/${Date.now()}.${i}`,e.n=6,No.storage.from("ticket-images").upload(l,s)
case 6:if(!e.v.error){e.n=7
break}return e.a(2)
case 7:return c=No.storage.from("ticket-images").getPublicUrl(l),u=c.data.publicUrl,e.n=8,X(u)
case 8:e.n=10
break
case 9:e.p=9,e.v
case 10:return e.p=10,R(!1),q.current&&(q.current.value=""),e.f(10)
case 11:return e.a(2)}},e,null,[[5,9,10,11]])}))
return function(t){return e.apply(this,arguments)}}(),Q=l.filter(e=>"all"===b||e.status===b),ee=e=>new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),te=e=>{switch(e){case"contact":return a("tickets.category.contact")
case"acces_payant":return a("tickets.category.acces_payant")
default:return e}},re=i(bn.useState(!1),2),ne=re[0],ae=re[1]
bn.useEffect(()=>{if(h){ae(!1)
var e=setTimeout(()=>ae(!0),500)
return()=>clearTimeout(e)}},[null==h?void 0:h.id])
var se=({info:e})=>{var t=[{icon:"fa-user",label:"Username",value:e.username,fullValue:e.username},{icon:"fa-envelope",label:"Email",value:e.email,fullValue:e.email},{icon:"fa-fingerprint",label:"User ID",value:M?e.user_id:`${e.user_id.slice(0,8)}...`,fullValue:e.user_id,mono:!0,isUserId:!0},{icon:"fa-calendar",label:"Date",value:ee(e.created_at),fullValue:e.created_at}]
return hn.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%"},children:[t.map((e,t)=>hn.jsxs("div",{onContextMenu:t=>{t.preventDefault(),t.stopPropagation(),W({x:t.clientX,y:t.clientY,value:e.fullValue,label:e.label})},style:{background:"rgba(0, 0, 0, 0.4)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"10px",padding:"12px 16px",display:"flex",alignItems:"center",gap:"12px",position:"relative",overflow:"hidden",animation:ne?"none":`slideIn 0.3s ease ${.1*t}s both`,cursor:"context-menu"},children:[hn.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,borderRadius:"10px",padding:"2px",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",backgroundSize:"200% 100%",WebkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",WebkitMaskComposite:"xor",maskComposite:"exclude",animation:"borderGlow 3s linear infinite",pointerEvents:"none"}}),hn.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:hn.jsx("i",{className:`fas ${e.icon}`,style:{color:"#ffffff",fontSize:"0.9rem"}})}),hn.jsxs("div",{style:{flex:1,minWidth:0},children:[hn.jsx("div",{style:{fontSize:"0.7rem",color:"rgba(255, 255, 255, 0.6)",marginBottom:"2px",textTransform:"uppercase",letterSpacing:"0.5px",fontWeight:600},children:e.label}),hn.jsx("div",{style:{fontSize:e.mono?"0.8rem":"0.9rem",color:"#ffffff",fontWeight:500,fontFamily:e.mono?"monospace":"inherit",wordBreak:"break-all",lineHeight:1.3},children:e.value})]})]},e.label)),hn.jsx("style",{children:"\n          @keyframes slideIn {\n            from {\n              opacity: 0;\n              transform: translateX(-20px);\n            }\n            to {\n              opacity: 1;\n              transform: translateX(0);\n            }\n          }\n          @keyframes borderGlow {\n            0% {\n              background-position: 200% 0;\n            }\n            100% {\n              background-position: -200% 0;\n            }\n          }\n        "})]})}
return t?hn.jsxs(Fl,{children:[hn.jsx("header",{className:"page-header",children:hn.jsxs("div",{className:"container",children:[hn.jsx("span",{className:"section-badge",children:a("tickets.header.badge")}),hn.jsx("h1",{children:a("tickets.header.title")}),hn.jsx("p",{children:a(M?"tickets.header.owner":"tickets.header.user")})]})}),hn.jsx("section",{className:"content-section",children:hn.jsxs("div",{className:"container",children:[hn.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px",flexWrap:"wrap",gap:"15px"},children:[hn.jsxs("div",{style:{display:"flex",gap:"10px"},children:[hn.jsxs("button",{className:"btn "+("all"===b?"btn-primary":"btn-outline"),onClick:()=>v("all"),children:[a("tickets.filter.all")," (",l.length,")"]}),hn.jsxs("button",{className:"btn "+("open"===b?"btn-primary":"btn-outline"),onClick:()=>v("open"),children:[a("tickets.filter.open")," (",l.filter(e=>"open"===e.status).length,")"]}),hn.jsxs("button",{className:"btn "+("closed"===b?"btn-primary":"btn-outline"),onClick:()=>v("closed"),children:[a("tickets.filter.closed")," (",l.filter(e=>"closed"===e.status).length,")"]})]}),hn.jsx("div",{style:{display:"flex",gap:"10px"},children:hn.jsxs(aa,{to:"/contact",className:"btn btn-primary",children:[hn.jsx("i",{className:"fas fa-plus"})," ",a("tickets.filter.newticket")]})})]}),d?0===Q.length?hn.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)"},children:[hn.jsx("i",{className:"fas fa-ticket-alt",style:{fontSize:"4rem",color:"var(--text-muted)",marginBottom:"20px"}}),hn.jsx("h3",{children:a("tickets.empty.title")}),hn.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"20px"},children:a("all"===b?"tickets.empty.all":"open"===b?"tickets.empty.open":"tickets.empty.closed")}),hn.jsx(aa,{to:"/contact",className:"btn btn-primary",children:a("tickets.empty.button")})]}):hn.jsx("div",{style:{display:"grid",gap:"15px"},children:Q.map(e=>hn.jsxs("div",{onClick:()=>m(e),style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"20px",cursor:"pointer",transition:"all 0.2s ease",borderLeft:"4px solid "+("open"===e.status?"#51cf66":"#868e96")},onMouseEnter:e=>{e.currentTarget.style.borderColor="var(--accent-primary)",e.currentTarget.style.transform="translateX(5px)"},onMouseLeave:e=>{e.currentTarget.style.borderColor="var(--border-color)",e.currentTarget.style.transform="translateX(0)"},children:[hn.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px"},children:[hn.jsxs("div",{children:[hn.jsx("h3",{style:{margin:0,fontSize:"1.1rem"},children:e.subject}),M&&hn.jsxs("p",{style:{margin:"5px 0 0",color:"var(--text-muted)",fontSize:"0.85rem"},children:[hn.jsx("i",{className:"fas fa-user"})," ",e.username," \u2022 ",e.email]})]}),hn.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[hn.jsx("span",{style:{padding:"4px 10px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:"contact"===e.category?"rgba(0, 123, 255, 0.2)":"rgba(255, 193, 7, 0.2)",color:"contact"===e.category?"#4dabf7":"#ffd43b"},children:te(e.category)}),hn.jsx("span",{style:{padding:"4px 10px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:"open"===e.status?"rgba(81, 207, 102, 0.2)":"rgba(134, 142, 150, 0.2)",color:"open"===e.status?"#51cf66":"#868e96"},children:"open"===e.status?a("tickets.filter.open"):a("tickets.filter.closed")})]})]}),hn.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.message}),hn.jsxs("p",{style:{margin:"10px 0 0",color:"var(--text-muted)",fontSize:"0.8rem"},children:[hn.jsx("i",{className:"fas fa-clock"})," ",ee(e.created_at),M&&hn.jsxs("span",{style:{marginLeft:"15px"},children:[hn.jsx("i",{className:"fas fa-fingerprint"})," ",e.user_id.slice(0,8),"..."]})]})]},e.id))}):hn.jsx("div",{style:{minHeight:"200px"}})]})}),A&&hn.jsxs("div",{onClick:()=>O(null),style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.9)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:[hn.jsx("button",{onClick:e=>{e.stopPropagation(),O(null)},style:{position:"absolute",top:"20px",right:"20px",background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"50%",width:"44px",height:"44px",cursor:"pointer",color:"white",fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.2s"},children:hn.jsx("i",{className:"fas fa-times"})}),hn.jsx("img",{src:A,alt:"Preview",onClick:e=>e.stopPropagation(),style:{maxWidth:"90vw",maxHeight:"90vh",borderRadius:"8px",cursor:"default"}})]}),h&&hn.jsx("div",{className:"settings-overlay",onClick:()=>{m(null),w([]),L(!1)},style:{zIndex:1e3},children:hn.jsxs("div",{className:"settings-modal",onClick:e=>e.stopPropagation(),style:{maxWidth:z?"100vw":"700px",width:z?"100vw":void 0,height:z?"100vh":"85vh",margin:z?0:void 0,borderRadius:z?0:void 0,display:"flex",flexDirection:"column",transition:"all 0.3s ease"},children:[hn.jsxs("div",{className:"settings-header",children:[hn.jsxs("h2",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-ticket-alt"}),"Ticket #",h.id.slice(0,8)]}),hn.jsxs("div",{style:{display:"flex",gap:"8px"},children:[hn.jsx("button",{onClick:()=>L(!z),style:{background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"8px",width:"36px",height:"36px",cursor:"pointer",color:"var(--text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},title:z?"R\xe9duire":"Plein \xe9cran",children:hn.jsx("i",{className:"fas fa-"+(z?"compress":"expand")})}),hn.jsx("button",{className:"settings-close",onClick:()=>{m(null),w([]),L(!1)},children:hn.jsx("i",{className:"fas fa-times"})})]})]}),hn.jsx("div",{className:"settings-content",style:{padding:z?"0":"20px",flex:1,overflow:"auto",display:"flex",flexDirection:"column"},onClick:()=>{$(null),W(null)},children:hn.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",background:"rgba(0, 0, 0, 0.2)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[hn.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"15px",display:"flex",flexDirection:"column",gap:"12px"},children:[hn.jsx("div",{style:{maxWidth:"450px",marginBottom:"10px"},onClick:e=>e.stopPropagation(),children:hn.jsx(se,{info:{username:h.username,email:h.email,user_id:h.user_id,created_at:h.created_at}})}),hn.jsxs("div",{style:{background:"rgba(77, 171, 247, 0.1)",border:"1px solid rgba(77, 171, 247, 0.3)",borderRadius:"12px",padding:"12px 16px",marginBottom:"10px"},children:[hn.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px",flexWrap:"wrap"},children:[hn.jsx("span",{style:{padding:"4px 10px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:"open"===h.status?"rgba(81, 207, 102, 0.2)":"rgba(134, 142, 150, 0.2)",color:"open"===h.status?"#51cf66":"#868e96"},children:"open"===h.status?"Ouvert":"Ferm\xe9"}),hn.jsx("span",{style:{padding:"4px 10px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:"contact"===h.category?"rgba(0, 123, 255, 0.2)":"rgba(255, 193, 7, 0.2)",color:"contact"===h.category?"#4dabf7":"#ffd43b"},children:te(h.category)})]}),hn.jsxs("h3",{style:{margin:"0 0 8px",fontSize:"1rem",color:"#4dabf7"},children:[hn.jsx("i",{className:"fas fa-tag",style:{marginRight:"8px"}}),h.subject]}),hn.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem",whiteSpace:"pre-wrap",lineHeight:1.5},children:h.message})]}),x.filter(e=>!("Dbs BOT"===e.username&&(e=>{var t=e.match(/__BOT_INFO__(.+)__BOT_INFO__/)
if(t)try{return JSON.parse(t[1])}catch(r){return null}return null})(e.message))).map(e=>hn.jsxs("div",{onContextMenu:t=>{M&&e.is_owner&&(t.preventDefault(),$({x:t.clientX,y:t.clientY,messageId:e.id}))},style:{alignSelf:e.is_owner?"flex-end":"flex-start",maxWidth:"80%",background:e.is_owner?"rgba(77, 171, 247, 0.2)":"rgba(255, 255, 255, 0.08)",borderRadius:e.is_owner?"12px 12px 4px 12px":"12px 12px 12px 4px",padding:"12px 16px",position:"relative",cursor:M?"context-menu":"default"},children:[hn.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginBottom:"6px"},children:[hn.jsxs("span",{style:{fontWeight:600,color:e.is_owner?"#4dabf7":"var(--accent-primary)"},children:[e.username," ",e.is_owner&&hn.jsx("i",{className:"fas fa-shield-alt",title:"Support"})]}),hn.jsx("span",{style:{marginLeft:"8px"},children:ee(e.created_at)})]}),e.image_url&&hn.jsx("img",{src:e.image_url,alt:"Image",onClick:()=>O(e.image_url),style:{maxWidth:"100%",maxHeight:"200px",borderRadius:"8px",marginBottom:e.message&&"\ud83d\udcf7 Image"!==e.message?"8px":0,cursor:"zoom-in"}}),e.message&&"\ud83d\udcf7 Image"!==e.message&&hn.jsx("p",{style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.5},children:e.message})]},e.id)),hn.jsx("div",{ref:V})]}),"open"===h.status&&hn.jsxs("div",{style:{padding:"12px",borderTop:"1px solid var(--border-color)",background:"rgba(0, 0, 0, 0.1)"},children:[hn.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"flex-end"},children:[hn.jsx("input",{type:"file",ref:q,onChange:Z,accept:"image/*",style:{display:"none"}}),hn.jsx("button",{onClick:()=>{var e
return null===(e=q.current)||void 0===e?void 0:e.click()},disabled:C||N,style:{padding:"10px 14px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",cursor:"pointer",color:"var(--text-secondary)",transition:"all 0.2s ease"},title:"Envoyer une image",children:C?hn.jsx("span",{className:"spinner",style:{width:"16px",height:"16px"}}):hn.jsx("i",{className:"fas fa-image"})}),hn.jsx("textarea",{value:j,onChange:e=>S(e.target.value),placeholder:"\xc9crivez votre message...",disabled:N,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),X())},style:{flex:1,padding:"10px 14px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",resize:"none",minHeight:"42px",maxHeight:"100px",color:"var(--text-primary)",fontFamily:"inherit"},rows:1}),hn.jsx("button",{onClick:()=>X(),disabled:N||!j.trim(),className:"btn btn-primary",style:{padding:"10px 16px"},children:N?hn.jsx("span",{className:"spinner",style:{width:"16px",height:"16px"}}):hn.jsx("i",{className:"fas fa-paper-plane"})})]}),G&&hn.jsxs("p",{style:{margin:"8px 0 0",fontSize:"0.8rem",color:"#ff6b6b",fontWeight:500},children:[hn.jsx("i",{className:"fas fa-exclamation-circle",style:{marginRight:"6px"}}),G]}),hn.jsx("p",{style:{margin:"8px 0 0",fontSize:"0.75rem",color:"var(--text-muted)"},children:"Appuyez sur Entr\xe9e pour envoyer, Maj+Entr\xe9e pour un retour \xe0 la ligne"})]}),"closed"===h.status&&hn.jsxs("div",{style:{padding:"15px",textAlign:"center",background:"rgba(134, 142, 150, 0.1)",borderTop:"1px solid var(--border-color)",color:"var(--text-muted)"},children:[hn.jsx("i",{className:"fas fa-lock"})," Ce ticket est ferm\xe9"]})]})}),hn.jsx("div",{className:"settings-footer",style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:hn.jsx("button",{className:"btn btn-outline",onClick:()=>{m(null),w([]),L(!1)},children:"Fermer"})})]})}),U&&hn.jsx("div",{onClick:e=>e.stopPropagation()}),B&&hn.jsx("div",{style:{position:"fixed",top:B.y,left:B.x,background:"rgba(30, 30, 40, 0.98)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",padding:"4px",zIndex:3e3,boxShadow:"0 4px 20px rgba(0, 0, 0, 0.5)",minWidth:"180px"},onClick:e=>e.stopPropagation(),children:hn.jsxs("button",{onClick:e=>{e.stopPropagation()
var t=B.value
navigator.clipboard.writeText(t).then(()=>W(null)).catch(()=>W(null))},style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",padding:"10px 14px",background:"transparent",border:"none",borderRadius:"6px",color:"#4dabf7",cursor:"pointer",fontSize:"0.9rem",transition:"background 0.2s"},onMouseEnter:e=>e.currentTarget.style.background="rgba(77, 171, 247, 0.15)",onMouseLeave:e=>e.currentTarget.style.background="transparent",children:[hn.jsx("i",{className:"fas fa-copy"}),"Copier ",B.label]})})]}):hn.jsx(Fl,{children:hn.jsx("section",{className:"content-section",style:{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center"},children:hn.jsxs("div",{className:"container",style:{textAlign:"center"},children:[hn.jsx("i",{className:"fas fa-lock",style:{fontSize:"4rem",color:"var(--text-muted)",marginBottom:"20px"}}),hn.jsx("h2",{children:a("contact.login.title")}),hn.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"20px"},children:a("tickets.nologin")}),hn.jsx(aa,{to:"/login",className:"btn btn-primary",children:a("contact.login.button")})]})})})},Ql=()=>{var e=Lo().t,t=i(bn.useState(""),2),n=t[0],a=t[1],o=i(bn.useState(""),2),l=o[0],c=o[1],u=i(bn.useState(!1),2),d=u[0],p=u[1],f=i(bn.useState(!1),2),h=f[0],m=f[1],g=i(bn.useState(""),2),b=g[0],v=g[1],y=M(),x=i(bn.useState(!1),2),w=x[0],k=x[1],j=i(bn.useState(""),2),S=j[0],_=j[1],N=i(bn.useState(""),2),E=N[0],T=N[1],C=i(bn.useState(""),2),R=C[0],P=C[1],A=i(bn.useState(!1),2),O=A[0],I=A[1],z=i(bn.useState(!1),2),L=z[0],D=z[1],U=i(bn.useState(""),2),$=U[0],F=U[1],B=i(bn.useState(""),2),W=B[0],V=B[1],q=function(){var t=s(r().m(function t(a){var s,i,o
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(a.preventDefault(),m(!0),v(""),n&&n.includes("@")){t.n=1
break}return v("Invalid email format"),m(!1),t.a(2)
case 1:if(ol(`login:${n}`,5,6e4)){t.n=2
break}return v("Too many login attempts. Please try again later."),m(!1),t.a(2)
case 2:return t.p=2,t.n=3,Br(n,l)
case 3:s=t.v,null!=(i=s.user)&&i.email&&ll(`login:${n}`),y("/"),t.n=5
break
case 4:t.p=4,o=t.v,v(o instanceof Error?o.message:e("login.error"))
case 5:return t.p=5,m(!1),t.f(5)
case 6:return t.a(2)}},t,null,[[2,4,5,6]])}))
return function(e){return t.apply(this,arguments)}}(),H=function(){var t=s(r().m(function t(n){var a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:return n.preventDefault(),D(!0),F(""),V(""),t.p=1,t.n=2,Mr(S)
case 2:I(!0),V(e("login.otp.sent")),t.n=4
break
case 3:t.p=3,a=t.v,F(a instanceof Error?a.message:e("login.error"))
case 4:return t.p=4,D(!1),t.f(4)
case 5:return t.a(2)}},t,null,[[1,3,4,5]])}))
return function(e){return t.apply(this,arguments)}}(),K=function(){var t=s(r().m(function t(n){var a
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(n.preventDefault(),D(!0),F(""),R&&!(R.length<8)){t.n=1
break}return F("Password must be at least 8 characters"),D(!1),t.a(2)
case 1:return t.p=1,t.n=2,Kr(S,E,R)
case 2:V(e("login.success")),setTimeout(()=>{y("/")},1e3),t.n=4
break
case 3:t.p=3,a=t.v,F(a instanceof Error?a.message:e("login.otp.error"))
case 4:return t.p=4,D(!1),t.f(4)
case 5:return t.a(2)}},t,null,[[1,3,4,5]])}))
return function(e){return t.apply(this,arguments)}}(),Y=()=>{k(!1),_(""),T(""),P(""),I(!1),F(""),V("")}
return hn.jsx(Fl,{children:hn.jsxs("div",{className:"auth-container",children:[hn.jsxs("div",{className:"auth-bg",children:[hn.jsx("div",{className:"auth-bg-gradient"}),hn.jsx("div",{className:"auth-bg-grid"}),hn.jsx("div",{className:"floating-orb orb-1"}),hn.jsx("div",{className:"floating-orb orb-2"}),hn.jsx("div",{className:"floating-orb orb-3"})]}),hn.jsxs("div",{className:"auth-card animate-fade-in",children:[hn.jsxs("div",{className:"auth-header",children:[hn.jsx(aa,{to:"/",className:"logo",children:hn.jsx("span",{className:"logo-text",children:"Dbs"})}),hn.jsx("h1",{children:e("login.title")}),hn.jsx("p",{children:e("login.subtitle")})]}),b&&hn.jsxs("div",{className:"auth-error animate-shake",children:[hn.jsx("i",{className:"fas fa-exclamation-circle"}),b]}),hn.jsxs("form",{onSubmit:q,children:[hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{htmlFor:"email",className:"form-label",children:e("login.email_label")}),hn.jsxs("div",{className:"input-wrapper",children:[hn.jsx("i",{className:"fas fa-envelope input-icon"}),hn.jsx("input",{type:"email",id:"email",name:"email",className:"form-input form-input-icon",placeholder:"votre@email.com",required:!0,value:n,onChange:e=>a(e.target.value),disabled:h})]})]}),hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{htmlFor:"password",className:"form-label",children:"Mot de passe"}),hn.jsxs("div",{className:"input-wrapper",children:[hn.jsx("i",{className:"fas fa-lock input-icon"}),hn.jsx("input",{type:"password",id:"password",name:"password",className:"form-input form-input-icon",placeholder:"Votre mot de passe",required:!0,minLength:8,value:l,onChange:e=>c(e.target.value),disabled:h})]})]}),hn.jsx("div",{className:"form-group",children:hn.jsxs("div",{className:"checkbox-group",children:[hn.jsx("input",{type:"checkbox",id:"remember",name:"remember",checked:d,onChange:e=>p(e.target.checked),disabled:h}),hn.jsx("label",{htmlFor:"remember",children:"Se souvenir de moi"})]})}),hn.jsx("button",{type:"submit",className:"btn btn-primary btn-block btn-glow",disabled:h,children:h?hn.jsxs(hn.Fragment,{children:[hn.jsx("span",{className:"spinner"}),"Connexion..."]}):hn.jsxs(hn.Fragment,{children:["Se connecter",hn.jsx("i",{className:"fas fa-arrow-right"})]})})]}),hn.jsxs("div",{className:"auth-footer",children:[hn.jsxs("p",{children:["Pas encore de compte? ",hn.jsx(aa,{to:"/register",children:"S'inscrire"})]}),hn.jsx("p",{style:{marginTop:"12px"},children:hn.jsx("button",{type:"button",onClick:()=>k(!0),style:{background:"none",border:"none",color:"#fff",cursor:"pointer",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},children:"Mot de passe oubli\xe9?"})})]})]}),w&&hn.jsx("div",{className:"otp-overlay",onClick:Y,children:hn.jsxs("div",{className:"otp-modal",onClick:e=>e.stopPropagation(),children:[hn.jsx("button",{className:"otp-close",onClick:Y,children:hn.jsx("i",{className:"fas fa-times"})}),hn.jsxs("div",{className:"otp-header",children:[hn.jsx("div",{className:"otp-icon",children:hn.jsx("i",{className:O?"fas fa-key":"fas fa-envelope"})}),hn.jsx("h2",{children:e(O?"login.otp.title":"login.forgot_password")}),hn.jsx("p",{children:O?`${e("login.otp_sent")} ${S}`:e("login.subtitle")})]}),$&&hn.jsxs("div",{className:"otp-error",children:[hn.jsx("i",{className:"fas fa-exclamation-circle"}),$]}),W&&hn.jsxs("div",{className:"otp-success",children:[hn.jsx("i",{className:"fas fa-check-circle"}),W]}),O?hn.jsxs("form",{onSubmit:K,children:[hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{htmlFor:"otp-code",className:"form-label",children:"Code OTP"}),hn.jsxs("div",{className:"input-wrapper",children:[hn.jsx("i",{className:"fas fa-key input-icon"}),hn.jsx("input",{type:"text",id:"otp-code",className:"form-input form-input-icon otp-input",placeholder:"00000000",required:!0,maxLength:8,value:E,onChange:e=>T(e.target.value.replace(/\D/g,"")),disabled:L,autoComplete:"one-time-code"})]})]}),hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{htmlFor:"new-password",className:"form-label",children:"Nouveau mot de passe"}),hn.jsxs("div",{className:"input-wrapper",children:[hn.jsx("i",{className:"fas fa-lock input-icon"}),hn.jsx("input",{type:"password",id:"new-password",className:"form-input form-input-icon",placeholder:"Entrez un nouveau mot de passe",required:!0,value:R,onChange:e=>P(e.target.value),disabled:L,minLength:8})]}),hn.jsx("small",{style:{color:"#666",marginTop:"4px",display:"block"},children:"Minimum 8 caract\xe8res"})]}),hn.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:L||E.length<8||!R,children:L?hn.jsxs(hn.Fragment,{children:[hn.jsx("span",{className:"spinner"}),"V\xe9rification..."]}):hn.jsxs(hn.Fragment,{children:[hn.jsx("i",{className:"fas fa-sign-in-alt"}),"R\xe9initialiser et Se connecter"]})}),hn.jsxs("button",{type:"button",className:"btn btn-outline btn-block",style:{marginTop:"12px"},onClick:()=>{I(!1),T(""),P(""),F(""),V("")},children:[hn.jsx("i",{className:"fas fa-arrow-left"}),e("login.change_email")]})]}):hn.jsxs("form",{onSubmit:H,children:[hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{htmlFor:"forgot-email",className:"form-label",children:e("login.email_label")}),hn.jsxs("div",{className:"input-wrapper",children:[hn.jsx("i",{className:"fas fa-envelope input-icon"}),hn.jsx("input",{type:"email",id:"forgot-email",className:"form-input form-input-icon",placeholder:"votre@email.com",required:!0,value:S,onChange:e=>_(e.target.value),disabled:L})]})]}),hn.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:L,children:L?hn.jsxs(hn.Fragment,{children:[hn.jsx("span",{className:"spinner"}),"Envoi en cours..."]}):hn.jsxs(hn.Fragment,{children:[hn.jsx("i",{className:"fas fa-paper-plane"}),"Envoyer le code OTP"]})})]})]})})]})})},ec=()=>{var e=Lo().t,t=i(bn.useState(""),2),n=t[0],a=t[1],o=i(bn.useState(""),2),l=o[0],c=o[1],u=i(bn.useState(""),2),d=u[0],p=u[1],f=i(bn.useState(""),2),h=f[0],m=f[1],g=i(bn.useState(!1),2),b=g[0],v=g[1],y=i(bn.useState(!1),2),x=y[0],w=y[1],k=i(bn.useState(""),2),j=k[0],S=k[1],_=i(bn.useState(!1),2),N=_[0],E=_[1],T=M(),C=function(){var t=s(r().m(function t(a){var s
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(a.preventDefault(),S(""),Qo(l)){t.n=1
break}return S("Invalid email format"),t.a(2)
case 1:if(el(n)){t.n=2
break}return S("Username must be 3-30 characters (letters, numbers, -, _)"),t.a(2)
case 2:if(tl(d)){t.n=3
break}return S("Password must be 8-128 characters"),t.a(2)
case 3:if(d===h){t.n=4
break}return S(e("register.error.passwordmismatch")),t.a(2)
case 4:if(ol(`register:${l}`,3,36e5)){t.n=5
break}return S("Too many registration attempts. Please try again later."),t.a(2)
case 5:return w(!0),t.p=6,t.n=7,Vr(l,d,n)
case 7:E(!0),setTimeout(()=>T("/login"),3e3),t.n=9
break
case 8:t.p=8,s=t.v,S(s instanceof Error?s.message:e("register.error.signup"))
case 9:return t.p=9,w(!1),t.f(9)
case 10:return t.a(2)}},t,null,[[6,8,9,10]])}))
return function(e){return t.apply(this,arguments)}}()
return N?hn.jsx(Fl,{children:hn.jsxs("div",{className:"auth-container",children:[hn.jsxs("div",{className:"auth-bg",children:[hn.jsx("div",{className:"auth-bg-gradient"}),hn.jsx("div",{className:"auth-bg-grid"}),hn.jsx("div",{className:"floating-orb orb-1"}),hn.jsx("div",{className:"floating-orb orb-2"}),hn.jsx("div",{className:"floating-orb orb-3"})]}),hn.jsx("div",{className:"auth-card animate-fade-in",children:hn.jsxs("div",{className:"auth-header",children:[hn.jsx("div",{className:"success-icon",children:hn.jsx("i",{className:"fas fa-envelope-open-text",style:{color:"#51cf66",fontSize:"3rem"}})}),hn.jsx("h1",{style:{color:"#51cf66",marginTop:"20px"},children:e("register.verification_sent")}),hn.jsx("p",{style:{marginTop:"12px",color:"var(--text-secondary)"},children:e("register.verification_message")}),hn.jsx("p",{style:{marginTop:"8px",color:"var(--text-secondary)"},children:"Veuillez v\xe9rifier votre bo\xeete de r\xe9ception et cliquer sur le lien pour activer votre compte."}),hn.jsx("p",{style:{marginTop:"8px",color:"var(--text-muted)",fontSize:"0.85rem",fontStyle:"italic"},children:e("register.check_spam")}),hn.jsx("p",{style:{marginTop:"24px",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Redirection vers la connexion..."})]})})]})}):hn.jsx(Fl,{children:hn.jsxs("div",{className:"auth-container",children:[hn.jsxs("div",{className:"auth-bg",children:[hn.jsx("div",{className:"auth-bg-gradient"}),hn.jsx("div",{className:"auth-bg-grid"}),hn.jsx("div",{className:"floating-orb orb-1"}),hn.jsx("div",{className:"floating-orb orb-2"}),hn.jsx("div",{className:"floating-orb orb-3"})]}),hn.jsxs("div",{className:"auth-card animate-fade-in",children:[hn.jsxs("div",{className:"auth-header",children:[hn.jsx(aa,{to:"/",className:"logo",children:hn.jsx("span",{className:"logo-text",children:"Dbs"})}),hn.jsx("h1",{children:"Cr\xe9er un compte"}),hn.jsx("p",{children:"Rejoignez Dbs gratuitement"})]}),j&&hn.jsxs("div",{className:"auth-error animate-shake",children:[hn.jsx("i",{className:"fas fa-exclamation-circle"}),j]}),hn.jsxs("form",{onSubmit:C,children:[hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{htmlFor:"username",className:"form-label",children:"Nom d'utilisateur"}),hn.jsxs("div",{className:"input-wrapper",children:[hn.jsx("i",{className:"fas fa-user input-icon"}),hn.jsx("input",{type:"text",id:"username",name:"username",className:"form-input form-input-icon",placeholder:"johndoe",required:!0,value:n,onChange:e=>a(e.target.value),disabled:x})]})]}),hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{htmlFor:"email",className:"form-label",children:e("register.email_label")}),hn.jsxs("div",{className:"input-wrapper",children:[hn.jsx("i",{className:"fas fa-envelope input-icon"}),hn.jsx("input",{type:"email",id:"email",name:"email",className:"form-input form-input-icon",placeholder:"votre@email.com",required:!0,value:l,onChange:e=>c(e.target.value),disabled:x})]})]}),hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{htmlFor:"password",className:"form-label",children:"Mot de passe"}),hn.jsxs("div",{className:"input-wrapper",children:[hn.jsx("i",{className:"fas fa-lock input-icon"}),hn.jsx("input",{type:"password",id:"password",name:"password",className:"form-input form-input-icon",placeholder:"Minimum 8 caract\xe8res",required:!0,minLength:8,value:d,onChange:e=>p(e.target.value),disabled:x})]})]}),hn.jsxs("div",{className:"form-group",children:[hn.jsx("label",{htmlFor:"confirmPassword",className:"form-label",children:"Confirmer le mot de passe"}),hn.jsxs("div",{className:"input-wrapper",children:[hn.jsx("i",{className:"fas fa-lock input-icon"}),hn.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",className:"form-input form-input-icon",placeholder:"Confirmez votre mot de passe",required:!0,minLength:8,value:h,onChange:e=>m(e.target.value),disabled:x})]})]}),hn.jsx("div",{className:"form-group",children:hn.jsxs("div",{className:"checkbox-group",children:[hn.jsx("input",{type:"checkbox",id:"terms",name:"terms",required:!0,checked:b,onChange:e=>v(e.target.checked),disabled:x}),hn.jsxs("label",{htmlFor:"terms",children:["J'accepte les ",hn.jsx(aa,{to:"/terms",style:{color:"#fff"},children:"conditions d'utilisation"})," et la ",hn.jsx(aa,{to:"/privacy",style:{color:"#fff"},children:"politique de confidentialit\xe9"})]})]})}),hn.jsx("button",{type:"submit",className:"btn btn-primary btn-block btn-glow",disabled:x,children:x?hn.jsxs(hn.Fragment,{children:[hn.jsx("span",{className:"spinner"}),"Cr\xe9ation..."]}):hn.jsxs(hn.Fragment,{children:["Cr\xe9er mon compte",hn.jsx("i",{className:"fas fa-arrow-right"})]})})]}),hn.jsx("div",{className:"auth-footer",children:hn.jsxs("p",{children:["D\xe9j\xe0 un compte? ",hn.jsx(aa,{to:"/login",children:"Se connecter"})]})})]})]})})},tc=()=>{var e=Lo(),t=e.t,r=e.language
return hn.jsxs(Fl,{children:[hn.jsx("header",{className:"page-header",children:hn.jsxs("div",{className:"container",children:[hn.jsx("span",{className:"section-badge",children:t("privacy.badge")}),hn.jsx("h1",{children:t("privacy.title")}),hn.jsx("p",{children:t("privacy.updated")})]})}),hn.jsx("section",{className:"content-section",children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[hn.jsx("h2",{children:"1. Introduction"}),hn.jsx("p",{children:"fr"===r?"Chez Dbs, nous prenons la protection de vos donn\xe9es personnelles tr\xe8s au s\xe9rieux. Cette politique de confidentialit\xe9 explique comment nous collectons, utilisons, stockons et prot\xe9geons vos informations lorsque vous utilisez notre plateforme.":"At Dbs, we take the protection of your personal data very seriously. This privacy policy explains how we collect, use, store and protect your information when you use our platform."}),hn.jsx("h2",{children:"fr"===r?"2. Donn\xe9es collect\xe9es":"2. Data Collected"}),hn.jsx("p",{children:"fr"===r?"Nous collectons les types de donn\xe9es suivants:":"We collect the following types of data:"}),hn.jsxs("ul",{children:[hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Donn\xe9es d'inscription:":"Registration Data:"})," ","fr"===r?"nom, adresse email, mot de passe (chiffr\xe9)":"name, email address, password (encrypted)"]}),hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Donn\xe9es de paiement:":"Payment Data:"})," ","fr"===r?"trait\xe9es par nos partenaires de paiement s\xe9curis\xe9s (Stripe)":"processed by our secure payment partners (Stripe)"]}),hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Donn\xe9es d'utilisation:":"Usage Data:"})," ","fr"===r?"logs de connexion, statistiques d'utilisation anonymis\xe9es":"login logs, anonymized usage statistics"]}),hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Donn\xe9es techniques:":"Technical Data:"})," ","fr"===r?"adresse IP, type de navigateur, syst\xe8me d'exploitation":"IP address, browser type, operating system"]})]}),hn.jsx("h2",{children:"fr"===r?"3. Utilisation des donn\xe9es":"3. Data Usage"}),hn.jsx("p",{children:"fr"===r?"Vos donn\xe9es sont utilis\xe9es pour:":"Your data is used for:"}),hn.jsxs("ul",{children:[hn.jsx("li",{children:"fr"===r?"Fournir et am\xe9liorer nos services":"Provide and improve our services"}),hn.jsx("li",{children:"fr"===r?"G\xe9rer votre compte et vos abonnements":"Manage your account and subscriptions"}),hn.jsx("li",{children:"fr"===r?"Communiquer avec vous concernant votre compte":"Communicate with you about your account"}),hn.jsx("li",{children:"fr"===r?"Assurer la s\xe9curit\xe9 de la plateforme":"Ensure platform security"}),hn.jsx("li",{children:"fr"===r?"Respecter nos obligations l\xe9gales":"Comply with our legal obligations"})]}),hn.jsx("h2",{children:"fr"===r?"4. Recherches et confidentialit\xe9":"4. Searches and Privacy"}),hn.jsxs("p",{children:[hn.jsx("strong",{children:"Important:"})," ","fr"===r?"Dbs ne stocke pas l'historique de vos recherches. Chaque requ\xeate est trait\xe9e de mani\xe8re isol\xe9e et les r\xe9sultats ne sont pas conserv\xe9s sur nos serveurs une fois la session termin\xe9e.":"Dbs does not store your search history. Each request is processed in isolation and results are not retained on our servers after the session ends."]}),hn.jsx("h2",{children:"fr"===r?"5. Partage des donn\xe9es":"5. Data Sharing"}),hn.jsx("p",{children:"fr"===r?"Nous ne vendons jamais vos donn\xe9es personnelles. Nous pouvons partager des donn\xe9es avec:":"We never sell your personal data. We may share data with:"}),hn.jsxs("ul",{children:[hn.jsx("li",{children:"fr"===r?"Nos sous-traitants techniques (h\xe9bergement, paiement) sous contrat de confidentialit\xe9":"Our technical subprocessors (hosting, payment) under confidentiality agreements"}),hn.jsx("li",{children:"fr"===r?"Les autorit\xe9s comp\xe9tentes en cas d'obligation l\xe9gale":"Competent authorities when legally required"})]}),hn.jsx("h2",{children:"fr"===r?"6. S\xe9curit\xe9 des donn\xe9es":"6. Data Security"}),hn.jsx("p",{children:"fr"===r?"Nous mettons en \u0153uvre des mesures de s\xe9curit\xe9 robustes:":"We implement robust security measures:"}),hn.jsxs("ul",{children:[hn.jsx("li",{children:"fr"===r?"Chiffrement AES-256 pour les donn\xe9es au repos":"AES-256 encryption for data at rest"}),hn.jsx("li",{children:"fr"===r?"TLS 1.3 pour les donn\xe9es en transit":"TLS 1.3 for data in transit"}),hn.jsx("li",{children:"fr"===r?"Authentification \xe0 deux facteurs disponible":"Two-factor authentication available"}),hn.jsx("li",{children:"fr"===r?"Audits de s\xe9curit\xe9 r\xe9guliers":"Regular security audits"}),hn.jsx("li",{children:"fr"===r?"Acc\xe8s limit\xe9 aux donn\xe9es personnelles":"Limited access to personal data"})]}),hn.jsx("h2",{children:"fr"===r?"7. Vos droits (RGPD)":"7. Your Rights (GDPR)"}),hn.jsx("p",{children:"fr"===r?"Conform\xe9ment au RGPD, vous disposez des droits suivants:":"Under GDPR, you have the following rights:"}),hn.jsxs("ul",{children:[hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Droit d'acc\xe8s:":"Right of Access:"})," ","fr"===r?"obtenir une copie de vos donn\xe9es":"obtain a copy of your data"]}),hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Droit de rectification:":"Right to Rectification:"})," ","fr"===r?"corriger vos donn\xe9es inexactes":"correct inaccurate data"]}),hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Droit \xe0 l'effacement:":"Right to Erasure:"})," ","fr"===r?"demander la suppression de vos donn\xe9es":"request deletion of your data"]}),hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Droit \xe0 la portabilit\xe9:":"Right to Data Portability:"})," ","fr"===r?"recevoir vos donn\xe9es dans un format lisible":"receive your data in a readable format"]}),hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Droit d'opposition:":"Right to Object:"})," ","fr"===r?"vous opposer au traitement de vos donn\xe9es":"object to processing of your data"]})]}),hn.jsx("p",{children:"fr"===r?"Pour exercer ces droits, contactez-nous \xe0: privacy@Dbs.io":"To exercise these rights, contact us at: privacy@Dbs.io"}),hn.jsx("h2",{children:"8. Cookies"}),hn.jsx("p",{children:"fr"===r?"Nous utilisons des cookies essentiels pour le fonctionnement du site et des cookies analytiques (avec votre consentement) pour am\xe9liorer nos services. Vous pouvez g\xe9rer vos pr\xe9f\xe9rences de cookies \xe0 tout moment.":"We use essential cookies for website functionality and analytical cookies (with your consent) to improve our services. You can manage your cookie preferences at any time."}),hn.jsx("h2",{children:"fr"===r?"9. Conservation des donn\xe9es":"9. Data Retention"}),hn.jsx("p",{children:"fr"===r?"Nous conservons vos donn\xe9es personnelles pendant la dur\xe9e de votre compte actif, plus 3 ans apr\xe8s sa fermeture pour des raisons l\xe9gales. Les donn\xe9es de facturation sont conserv\xe9es 10 ans conform\xe9ment \xe0 la loi.":"We retain your personal data for the duration of your active account, plus 3 years after closure for legal reasons. Billing data is retained for 10 years as required by law."}),hn.jsx("h2",{children:"fr"===r?"10. Modifications":"10. Changes"}),hn.jsx("p",{children:"fr"===r?"Nous pouvons mettre \xe0 jour cette politique de confidentialit\xe9. Toute modification importante vous sera notifi\xe9e par email. La date de derni\xe8re mise \xe0 jour est indiqu\xe9e en haut de ce document.":"We may update this privacy policy. Any significant changes will be notified by email. The last update date is shown at the top of this document."}),hn.jsx("h2",{children:"11. Contact"}),hn.jsx("p",{children:"fr"===r?"Pour toute question concernant cette politique ou vos donn\xe9es personnelles:":"For any questions about this policy or your personal data:"}),hn.jsxs("ul",{children:[hn.jsx("li",{children:"Email: privacy@Dbs.io"}),hn.jsx("li",{children:"fr"===r?"Adresse: 123 Rue de la S\xe9curit\xe9, 75001 Paris, France":"Address: 123 Rue de la S\xe9curit\xe9, 75001 Paris, France"}),hn.jsx("li",{children:"DPO: dpo@Dbs.io"})]})]})})})]})},rc=()=>{var e=Lo(),t=e.t,r=e.language
return hn.jsxs(Fl,{children:[hn.jsx("header",{className:"page-header",children:hn.jsxs("div",{className:"container",children:[hn.jsx("span",{className:"section-badge",children:t("terms.badge")}),hn.jsx("h1",{children:t("terms.title")}),hn.jsx("p",{children:t("terms.updated")})]})}),hn.jsx("section",{className:"content-section",children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[hn.jsx("h2",{children:t("terms.section1")}),hn.jsx("p",{children:"fr"===r?"En acc\xe9dant et en utilisant Dbs, vous acceptez d'\xeatre li\xe9 par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.":"By accessing and using Dbs, you agree to be bound by these Terms of Service. If you do not accept these terms, please do not use our service."}),hn.jsx("h2",{children:t("terms.section2")}),hn.jsx("p",{children:t("terms.service.desc")}),hn.jsx("h2",{children:t("terms.section3")}),hn.jsx("p",{children:t("terms.registration")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:t("terms.reg1")}),hn.jsx("li",{children:t("terms.reg2")}),hn.jsx("li",{children:t("terms.reg3")}),hn.jsx("li",{children:t("terms.reg4")})]}),hn.jsx("h2",{children:t("terms.section4")}),hn.jsx("p",{children:t("terms.acceptable")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:t("terms.acceptable1")}),hn.jsx("li",{children:t("terms.acceptable2")}),hn.jsx("li",{children:t("terms.acceptable3")}),hn.jsx("li",{children:t("terms.acceptable4")})]}),hn.jsx("h2",{children:t("terms.section5")}),hn.jsx("p",{children:hn.jsx("strong",{children:t("terms.prohibited")})}),hn.jsxs("ul",{children:[hn.jsx("li",{children:t("terms.prohibited1")}),hn.jsx("li",{children:t("terms.prohibited2")}),hn.jsx("li",{children:t("terms.prohibited3")}),hn.jsx("li",{children:t("terms.prohibited4")}),hn.jsx("li",{children:t("terms.prohibited5")}),hn.jsx("li",{children:t("terms.prohibited6")}),hn.jsx("li",{children:t("terms.prohibited7")})]}),hn.jsx("h2",{children:t("terms.section6")}),hn.jsx("p",{children:t("terms.ip.text")}),hn.jsx("h2",{children:t("terms.section7")}),hn.jsx("p",{children:t("terms.liability")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:t("terms.liability1")}),hn.jsx("li",{children:t("terms.liability2")}),hn.jsx("li",{children:t("terms.liability3")})]}),hn.jsx("p",{children:t("terms.liability.desc")}),hn.jsx("h2",{children:t("terms.section8")}),hn.jsx("p",{children:t("terms.subscription")}),hn.jsx("h2",{children:t("terms.section9")}),hn.jsx("p",{children:t("terms.suspension")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:t("terms.suspension1")}),hn.jsx("li",{children:t("terms.suspension2")}),hn.jsx("li",{children:t("terms.suspension3")}),hn.jsx("li",{children:t("terms.suspension4")})]}),hn.jsx("h2",{children:t("terms.section10")}),hn.jsx("p",{children:t("terms.modifications")}),hn.jsx("h2",{children:t("terms.section11")}),hn.jsx("p",{children:t("terms.law")}),hn.jsx("h2",{children:t("terms.section12")}),hn.jsx("p",{children:t("terms.contact")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:t("terms.contact.email")}),hn.jsx("li",{children:t("terms.contact.address")})]}),hn.jsx("div",{style:{marginTop:"40px",padding:"24px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:hn.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.95rem"},children:t("terms.confirmation")})})]})})})]})},nc=()=>{var e=Lo(),t=e.t,r=e.language
return hn.jsxs(Fl,{children:[hn.jsx("header",{className:"page-header",children:hn.jsxs("div",{className:"container",children:[hn.jsx("span",{className:"section-badge",children:t("gdpr.badge")}),hn.jsx("h1",{children:t("gdpr.title")}),hn.jsx("p",{children:t("gdpr.updated")})]})}),hn.jsx("section",{className:"content-section",children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[hn.jsx("h2",{children:t("gdpr.section1")}),hn.jsx("p",{children:t("gdpr.section1.desc")}),hn.jsx("h2",{children:t("gdpr.section2")}),hn.jsx("p",{children:t("gdpr.section2.desc")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:t("gdpr.section2.contact")}),hn.jsx("li",{children:t("gdpr.section2.dpo")})]}),hn.jsx("h2",{children:t("gdpr.section3")}),hn.jsxs("ul",{children:[hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Ex\xe9cution du contrat:":"Contract Execution:"})," ",t("gdpr.section3.contract")]}),hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Consentement:":"Consent:"})," ",t("gdpr.section3.consent")]}),hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Obligation l\xe9gale:":"Legal Obligation:"})," ",t("gdpr.section3.legal")]}),hn.jsxs("li",{children:[hn.jsx("strong",{children:"fr"===r?"Int\xe9r\xeat l\xe9gitime:":"Legitimate Interest:"})," ",t("gdpr.section3.legitimate")]})]}),hn.jsx("h2",{children:t("gdpr.section4")}),hn.jsxs("p",{children:[t("gdpr.section4.desc"),hn.jsx(aa,{to:"/privacy",children:"fr"===r?"Politique de confidentialit\xe9":"Privacy Policy"}),"."]}),hn.jsx("h2",{children:t("gdpr.section5")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:t("gdpr.section5.point1")}),hn.jsx("li",{children:t("gdpr.section5.point2")}),hn.jsx("li",{children:t("gdpr.section5.point3")}),hn.jsx("li",{children:t("gdpr.section5.point4")}),hn.jsx("li",{children:t("gdpr.section5.point5")})]}),hn.jsx("h2",{children:t("gdpr.section6")}),hn.jsx("p",{children:t("gdpr.section6.desc")}),hn.jsx("h2",{children:t("gdpr.section7")}),hn.jsx("p",{children:t("gdpr.section7.desc")}),hn.jsx("h2",{children:t("gdpr.section8")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:t("gdpr.section8.point1")}),hn.jsx("li",{children:t("gdpr.section8.point2")}),hn.jsx("li",{children:t("gdpr.section8.point3")}),hn.jsx("li",{children:t("gdpr.section8.point4")})]}),hn.jsx("h2",{children:t("gdpr.section9")}),hn.jsx("p",{children:t("gdpr.section9.desc")}),hn.jsx("h2",{children:t("gdpr.section10")}),hn.jsx("p",{children:t("gdpr.section10.desc")}),hn.jsx("h2",{children:t("gdpr.section11")}),hn.jsx("p",{children:t("gdpr.section11.desc")})]})})})]})},ac=()=>{var e=Lo(),t=e.t,r=e.language
return hn.jsxs(Fl,{children:[hn.jsx("header",{className:"page-header",children:hn.jsxs("div",{className:"container",children:[hn.jsx("span",{className:"section-badge",children:t("security.badge")}),hn.jsx("h1",{children:t("security.title")}),hn.jsx("p",{children:t("security.updated")})]})}),hn.jsx("section",{className:"content-section",children:hn.jsx("div",{className:"container",children:hn.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[hn.jsx("h2",{children:t("security.section1")}),hn.jsx("p",{children:t("security.section1.desc")}),hn.jsx("h2",{children:t("security.section2")}),hn.jsx("p",{children:t("security.section2.desc")}),hn.jsx("h2",{children:t("security.section3")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:t("security.section3.point1")}),hn.jsx("li",{children:t("security.section3.point2")}),hn.jsx("li",{children:t("security.section3.point3")})]}),hn.jsx("h2",{children:t("security.section4")}),hn.jsx("p",{children:t("security.section4.desc")}),hn.jsx("h2",{children:t("security.section5")}),hn.jsx("p",{children:t("security.section5.desc")}),hn.jsx("h2",{children:t("security.section6")}),hn.jsx("p",{children:t("security.section6.desc")}),hn.jsx("h2",{children:t("security.section7")}),hn.jsx("p",{children:t("security.section7.desc")}),hn.jsx("h2",{children:t("security.section8")}),hn.jsxs("ul",{children:[hn.jsx("li",{children:t("security.section8.point1")}),hn.jsx("li",{children:t("security.section8.point2")}),hn.jsx("li",{children:t("security.section8.point3")}),hn.jsx("li",{children:t("security.section8.point4")})]}),hn.jsx("h2",{children:t("security.section9")}),hn.jsxs("p",{children:[t("security.section9.desc"),hn.jsx(aa,{to:"/privacy",children:"fr"===r?"Politique de confidentialit\xe9":"Privacy Policy"}),"."]})]})})})]})},sc=()=>{var e=Oo().user,t=Lo().t,n=M(),a=i(bn.useState(!1),2),o=a[0],l=a[1],c=i(bn.useState(!0),2),u=c[0],d=c[1],p=i(bn.useState(null),2),f=p[0],h=p[1],m=i(bn.useState(null),2),g=m[0],b=m[1],v=i(bn.useState(""),2),y=v[0],x=v[1]
bn.useEffect(()=>{var t=function(){var t=s(r().m(function t(){var a,s,i,o,c,u,p,f,m,g,b,v,y,w,k,j,S
return r().w(function(t){for(;;)switch(t.p=t.n){case 0:if(d(!0),a=setTimeout(()=>d(!1),8e3),e){t.n=1
break}return clearTimeout(a),d(!1),n("/login"),t.a(2)
case 1:s=["beta","beginner","pro","premium"],i=null,o=null
try{if(c=`user_plan_${e.id}`,u=localStorage.getItem(c))try{p=JSON.parse(u),o=((null==p?void 0:p.plan)||"").toString().toLowerCase()||null}catch(r){o="beginner"}}catch(_){}return f="granted"===sessionStorage.getItem("admin_panel_auth"),!o&&f&&(o="beginner"),m=null,t.p=2,t.n=3,No.from("user_plans").select("plan").eq("user_id",e.id).maybeSingle()
case 3:g=t.v,b=g.data,(m=((null==b?void 0:b.plan)||"").toString().toLowerCase()||null)&&(i=m),t.n=5
break
case 4:t.p=4,t.v
case 5:if(!i&&o&&(i=o),i){t.n=9
break}return t.p=6,t.n=7,No.from("user_plans").select("plan").eq("user_id",e.id).maybeSingle()
case 7:v=t.v,y=v.data,(w=((null==y?void 0:y.plan)||"").toString().toLowerCase()||null)&&(i=w),t.n=9
break
case 8:t.p=8,t.v
case 9:if(i&&s.includes(i)){t.n=10
break}return l(!1),x("API r\xe9serv\xe9e aux plans payants (Beta / Beginner / Pro / premium)."),d(!1),clearTimeout(a),t.a(2)
case 10:l(!0)
try{if(k=localStorage.getItem(`api_key_${e.id}`))h(k)
else{for(j="sk_live_",S=0;S<48;S++)j+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62*Math.random()))
localStorage.setItem(`api_key_${e.id}`,j),h(j)}}catch(N){n("/")}finally{d(!1),clearTimeout(a)}case 11:return t.a(2)}},t,null,[[6,8],[2,4]])}))
return function(){return t.apply(this,arguments)}}()
t()
var a=()=>{"visible"===document.visibilityState&&t()}
return document.addEventListener("visibilitychange",a),()=>document.removeEventListener("visibilitychange",a)},[e,n]),bn.useEffect(()=>{if(u){var e=setTimeout(()=>d(!1),8e3)
return()=>clearTimeout(e)}},[u])
var w=function(){var e=s(r().m(function e(t,n){return r().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,navigator.clipboard.writeText(t)
case 1:b(n),setTimeout(()=>b(null),2e3),e.n=3
break
case 2:e.p=2,e.v
case 3:return e.a(2)}},e,null,[[0,2]])}))
return function(t,r){return e.apply(this,arguments)}}()
if(u)return hn.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:hn.jsx("i",{className:"fas fa-spinner fa-spin",style:{fontSize:"2rem",color:"var(--primary)"}})})
if(!o)return hn.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"12px"},children:[hn.jsx("h2",{style:{margin:0},children:"API r\xe9serv\xe9e aux plans payants"}),hn.jsx("p",{style:{color:"var(--text-secondary)",margin:0},children:y||"Choisis un plan payant pour g\xe9n\xe9rer une cl\xe9 API."}),hn.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:[hn.jsx("button",{className:"btn btn-primary",onClick:()=>n("/pricing"),children:"Voir les plans"}),hn.jsx("button",{className:"btn btn-outline",onClick:()=>n("/"),children:"Retour"})]})]})
var k=`curl -X POST \\\n  https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search \\\n  -H "Content-Type: application/json" \\\n  -H "X-API-Key: ${f||"YOUR_API_KEY"}" \\\n  -d '{"query": "test@example.com"}'`,j=`curl -s -X POST \\\n  https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search \\\n  -H "Content-Type: application/json" \\\n  -H "X-API-Key: ${f||"YOUR_API_KEY"}" \\\n  -d '{"query": "test@example.com"}' | python3 -c "import sys,json; print(json.load(sys.stdin).get('formatted_text',''))"`,S=`import requests\n\nAPI_KEY = "${f||"YOUR_API_KEY"}"\nAPI_URL = "https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search"\n\ndef search(query, limit=100):\n    headers = {\n        "Content-Type": "application/json",\n        "X-API-Key": API_KEY\n    }\n    data = {\n        "query": query,\n        "limit": limit\n    }\n    response = requests.post(API_URL, json=data, headers=headers)\n    return response.json()\n\n# Example usage\nresult = search("test@example.com")\nprint(result["formatted_text"])`
return hn.jsx(Fl,{children:hn.jsx("div",{style:{minHeight:"100vh",background:"var(--bg-primary)",padding:"40px 20px"},children:hn.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto"},children:[hn.jsxs("div",{style:{background:"linear-gradient(135deg, #161616 0%, #0f0f0f 100%)",borderRadius:"var(--radius-lg)",padding:"40px",marginBottom:"30px",textAlign:"center",border:"1px solid #2a2a2a",boxShadow:"0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.02)"},children:[hn.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"60px",height:"60px",borderRadius:"12px",background:"#000",border:"2px solid #444",fontSize:"1.5rem",fontWeight:700,color:"white",marginBottom:"20px"},children:"</>"}),hn.jsx("h1",{style:{margin:"0 0 10px 0",fontSize:"2rem"},children:t("apidocs.header.title")}),hn.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"1.1rem"},children:t("apidocs.header.subtitle")})]}),hn.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[hn.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-rocket",style:{color:"var(--primary)"}}),"Quick Start"]}),hn.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"16px"},children:"Make your first API request in seconds. Copy and paste this command in your terminal:"}),hn.jsxs("div",{style:{position:"relative"},children:[hn.jsx("pre",{style:{background:"#0d1117",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"0.85rem",color:"#c9d1d9",border:"1px solid #30363d"},children:k}),hn.jsxs("button",{onClick:()=>w(k,"curl"),style:{position:"absolute",top:"8px",right:"8px",background:"curl"===g?"#10b981":"#21262d",border:"1px solid #30363d",borderRadius:"6px",padding:"6px 12px",color:"white",cursor:"pointer",fontSize:"0.8rem"},children:[hn.jsx("i",{className:"fas fa-"+("curl"===g?"check":"copy")}),"curl"===g?" Copied!":" Copy"]})]})]}),hn.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[hn.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-server",style:{color:"var(--primary)"}}),"API Endpoint"]}),hn.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",background:"#0d1117",padding:"12px 16px",borderRadius:"8px",border:"1px solid #30363d"},children:[hn.jsx("span",{style:{background:"#238636",color:"white",padding:"4px 10px",borderRadius:"4px",fontWeight:600,fontSize:"0.8rem"},children:"POST"}),hn.jsx("code",{style:{color:"#c9d1d9",flex:1},children:"https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search"})]})]}),hn.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[hn.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-key",style:{color:"var(--primary)"}}),"Authentication"]}),hn.jsxs("p",{style:{color:"var(--text-secondary)",marginBottom:"16px"},children:["All API requests require authentication via the ",hn.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"X-API-Key"})," header."]}),hn.jsx("div",{style:{background:"#0d1117",padding:"12px 16px",borderRadius:"8px",border:"1px solid #30363d",marginBottom:"16px"},children:hn.jsxs("code",{style:{color:"#c9d1d9"},children:["X-API-Key: ",f||"sk_live_xxxxxxxxxxxx"]})}),hn.jsxs("div",{style:{background:"rgba(255, 215, 0, 0.1)",border:"1px solid rgba(255, 215, 0, 0.3)",borderRadius:"8px",padding:"12px 16px",display:"flex",alignItems:"center",gap:"10px",color:"#ffd700"},children:[hn.jsx("i",{className:"fas fa-info-circle"}),hn.jsx("span",{style:{fontSize:"0.9rem"},children:"Your API key can be found in the API Access modal. Keep it secret!"})]})]}),hn.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[hn.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-cog",style:{color:"var(--primary)"}}),"Request Parameters"]}),hn.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.9rem"},children:[hn.jsx("thead",{children:hn.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[hn.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Parameter"}),hn.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Type"}),hn.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Required"}),hn.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Description"})]})}),hn.jsxs("tbody",{children:[hn.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[hn.jsx("td",{style:{padding:"12px"},children:hn.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"query"})}),hn.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"string"}),hn.jsx("td",{style:{padding:"12px"},children:hn.jsx("span",{style:{color:"#f85149"},children:"Yes"})}),hn.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"Search query (email, phone, username, etc.)"})]}),hn.jsxs("tr",{children:[hn.jsx("td",{style:{padding:"12px"},children:hn.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"limit"})}),hn.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"integer"}),hn.jsx("td",{style:{padding:"12px"},children:hn.jsx("span",{style:{color:"var(--text-secondary)"},children:"No"})}),hn.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"Maximum results per database (default: 100, max: 100)"})]})]})]})]}),hn.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[hn.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-reply",style:{color:"var(--primary)"}}),"Response Format"]}),hn.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"16px"},children:"The API returns JSON with structured results and a pre-formatted text version."}),hn.jsx("div",{style:{position:"relative"},children:hn.jsx("pre",{style:{background:"#0d1117",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"0.8rem",color:"#c9d1d9",border:"1px solid #30363d",maxHeight:"300px"},children:'{\n  "success": true,\n  "query": "test@example.com",\n  "results_count": 35,\n  "credits_remaining": 995,\n  "credits_per_day": 1000,\n  "results": [\n    {\n      "database": "Collection #1",\n      "infoLeak": "Database breach info...",\n      "data": [\n        {\n          "Email": "test@example.com",\n          "Password": "password123"\n        }\n      ]\n    }\n  ],\n  "formatted_text": "Dbs RESULTS\\nQuery: test@example.com\\n..."\n}'})})]}),hn.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[hn.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-file-alt",style:{color:"var(--primary)"}}),"Clean Text Output"]}),hn.jsxs("p",{style:{color:"var(--text-secondary)",marginBottom:"16px"},children:["Use the ",hn.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"formatted_text"})," field for a clean, readable output without database descriptions:"]}),hn.jsxs("div",{style:{position:"relative",marginBottom:"20px"},children:[hn.jsx("pre",{style:{background:"#0d1117",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"0.85rem",color:"#c9d1d9",border:"1px solid #30363d"},children:j}),hn.jsxs("button",{onClick:()=>w(j,"curlf"),style:{position:"absolute",top:"8px",right:"8px",background:"curlf"===g?"#10b981":"#21262d",border:"1px solid #30363d",borderRadius:"6px",padding:"6px 12px",color:"white",cursor:"pointer",fontSize:"0.8rem"},children:[hn.jsx("i",{className:"fas fa-"+("curlf"===g?"check":"copy")}),"curlf"===g?" Copied!":" Copy"]})]}),hn.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"10px",fontSize:"0.9rem"},children:hn.jsx("strong",{children:"Output example:"})}),hn.jsx("pre",{style:{background:"#0d1117",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"0.8rem",color:"#58a6ff",border:"1px solid #30363d",maxHeight:"250px"},children:"Dbs RESULTS\nQuery: test@example.com\nDate: 2025-12-12T19:30:00.000Z\nTotal databases: 35\n\n[1] Collection #1\nEmail: test@example.com\nPassword: password123\n\n[2] AlfaBank 2023\nEmail: test@example.com\nFullName: John Doe\nPhone: 79515026171\n\n[3] Alien TxtBase\nEmail: test@example.com\nPassword: qwerty123\nUrl: example.com/login\n..."})]}),hn.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[hn.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fab fa-python",style:{color:"#3776ab"}}),"Python Example"]}),hn.jsxs("div",{style:{position:"relative"},children:[hn.jsx("pre",{style:{background:"#0d1117",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"0.8rem",color:"#c9d1d9",border:"1px solid #30363d"},children:S}),hn.jsxs("button",{onClick:()=>w(S,"python"),style:{position:"absolute",top:"8px",right:"8px",background:"python"===g?"#10b981":"#21262d",border:"1px solid #30363d",borderRadius:"6px",padding:"6px 12px",color:"white",cursor:"pointer",fontSize:"0.8rem"},children:[hn.jsx("i",{className:"fas fa-"+("python"===g?"check":"copy")}),"python"===g?" Copied!":" Copy"]})]})]}),hn.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[hn.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-tachometer-alt",style:{color:"var(--primary)"}}),"Rate Limits & Credits"]}),hn.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px"},children:[hn.jsxs("div",{style:{background:"var(--bg-primary)",padding:"16px",borderRadius:"8px",textAlign:"center"},children:[hn.jsx("div",{style:{fontSize:"1.8rem",fontWeight:700,color:"var(--primary)"},children:"1000"}),hn.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:"Credits per day"})]}),hn.jsxs("div",{style:{background:"var(--bg-primary)",padding:"16px",borderRadius:"8px",textAlign:"center"},children:[hn.jsx("div",{style:{fontSize:"1.8rem",fontWeight:700,color:"#ffd700"},children:"1"}),hn.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:"Credit per search"})]}),hn.jsxs("div",{style:{background:"var(--bg-primary)",padding:"16px",borderRadius:"8px",textAlign:"center"},children:[hn.jsx("div",{style:{fontSize:"1.8rem",fontWeight:700,color:"#10b981"},children:"00:00"}),hn.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:"Daily reset (UTC)"})]})]}),hn.jsxs("div",{style:{marginTop:"16px",background:"rgba(139, 92, 246, 0.1)",border:"1px solid rgba(139, 92, 246, 0.3)",borderRadius:"8px",padding:"12px 16px",display:"flex",alignItems:"center",gap:"10px",color:"#a78bfa"},children:[hn.jsx("i",{className:"fas fa-sync-alt"}),hn.jsx("span",{style:{fontSize:"0.9rem"},children:"Credits are shared between the website and API. Each search (web or API) consumes 1 credit."})]})]}),hn.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[hn.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[hn.jsx("i",{className:"fas fa-exclamation-triangle",style:{color:"#f85149"}}),"Error Codes"]}),hn.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.9rem"},children:[hn.jsx("thead",{children:hn.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[hn.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Code"}),hn.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Description"})]})}),hn.jsxs("tbody",{children:[hn.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[hn.jsx("td",{style:{padding:"12px"},children:hn.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"401"})}),hn.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"Invalid or missing API key"})]}),hn.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[hn.jsx("td",{style:{padding:"12px"},children:hn.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"403"})}),hn.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"Beginner/Pro/premium plan required"})]}),hn.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[hn.jsx("td",{style:{padding:"12px"},children:hn.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"429"})}),hn.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"No credits remaining (resets at midnight UTC)"})]}),hn.jsxs("tr",{children:[hn.jsx("td",{style:{padding:"12px"},children:hn.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"400"})}),hn.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"Missing query parameter or invalid request"})]})]})]})]}),hn.jsxs("div",{style:{textAlign:"center",marginTop:"30px"},children:[hn.jsxs("button",{onClick:()=>n("/"),className:"btn btn-outline",style:{marginRight:"12px"},children:[hn.jsx("i",{className:"fas fa-arrow-left",style:{marginRight:"8px"}}),"Back to Home"]}),hn.jsxs("button",{onClick:()=>n("/pricing"),className:"btn btn-primary",children:[hn.jsx("i",{className:"fas fa-crown",style:{marginRight:"8px"}}),"View Plans"]})]})]})})})},ic=()=>{var e=V().pathname
return bn.useEffect(()=>{window.scrollTo(0,0)},[e]),null},oc=()=>hn.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-primary)"},children:hn.jsxs("div",{style:{textAlign:"center"},children:[hn.jsx("div",{style:{width:"50px",height:"50px",border:"4px solid var(--border-color)",borderTop:"4px solid var(--accent-primary)",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 20px"}}),hn.jsx("p",{style:{color:"var(--text-secondary)"},children:"Loading..."}),hn.jsx("style",{children:"\n          @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }\n        "})]})}),lc=({children:e})=>hn.jsxs(hn.Fragment,{children:[hn.jsx(Rl,{}),e,hn.jsx(Pl,{})]}),cc=({children:e})=>hn.jsx(hn.Fragment,{children:e}),uc=()=>Oo().loading?hn.jsx(oc,{}):hn.jsxs(hn.Fragment,{children:[hn.jsx(ic,{}),hn.jsx(Il,{}),hn.jsx(Al,{}),hn.jsx(Ol,{}),hn.jsx($l,{}),hn.jsxs(te,{children:[hn.jsx(Q,{path:"/",element:hn.jsx(lc,{children:hn.jsx(Hl,{})})}),hn.jsx(Q,{path:"/features",element:hn.jsx(lc,{children:hn.jsx(Kl,{})})}),hn.jsx(Q,{path:"/pricing",element:hn.jsx(lc,{children:hn.jsx(Yl,{})})}),hn.jsx(Q,{path:"/about",element:hn.jsx(lc,{children:hn.jsx(Gl,{})})}),hn.jsx(Q,{path:"/contact",element:hn.jsx(lc,{children:hn.jsx(Jl,{})})}),hn.jsx(Q,{path:"/tickets",element:hn.jsx(lc,{children:hn.jsx(Zl,{})})}),hn.jsx(Q,{path:"/privacy",element:hn.jsx(lc,{children:hn.jsx(tc,{})})}),hn.jsx(Q,{path:"/terms",element:hn.jsx(lc,{children:hn.jsx(rc,{})})}),hn.jsx(Q,{path:"/gdpr",element:hn.jsx(lc,{children:hn.jsx(nc,{})})}),hn.jsx(Q,{path:"/security",element:hn.jsx(lc,{children:hn.jsx(ac,{})})}),hn.jsx(Q,{path:"/api-docs",element:hn.jsx(lc,{children:hn.jsx(sc,{})})}),hn.jsx(Q,{path:"/login",element:hn.jsx(cc,{children:hn.jsx(Ql,{})})}),hn.jsx(Q,{path:"/register",element:hn.jsx(cc,{children:hn.jsx(ec,{})})})]})]}),dc=["token","access_token","refresh_token","api_key","apiKey","secret","password","credentials","auth","session","jwt","supabase","user_data"]
"undefined"!=typeof window&&Qr(),Qr(),window.requestAnimationFrame||(window.requestAnimationFrame=function(e){return window.setTimeout(e,1e3/60)})
var pc=()=>{var e=CSS&&CSS.registerProperty,t=CSS&&CSS.supports&&CSS.supports("background","conic-gradient(red, blue)")
e&&t||document.documentElement.classList.add("no-conic-gradient")}
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",pc):pc()
var fc=document.getElementById("root")
if(fc)try{Sn.createRoot(fc).render(hn.jsx(bn.StrictMode,{children:hn.jsx(Xr,{})}))}catch(mc){fc.innerHTML=`\n      <div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#fff;font-family:Inter,sans-serif;text-align:center;padding:20px;">\n        <div>\n          <h1 style="color:#f00;">Error Loading Dbs</h1>\n          <p>Please check the console for details</p>\n          <pre style="text-align:left;background:#111;padding:10px;border-radius:5px;overflow:auto;max-width:90vw;">${mc}</pre>\n        </div>\n      </div>\n    `}}}})}()
