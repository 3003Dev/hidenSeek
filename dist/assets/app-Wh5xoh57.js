function e(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}function t(e,t){for(var r=0;r<t.length;r++){const n=t[r]
if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(n,t)
r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(e)}function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e
var t=e.default
if("function"==typeof t){var r=function e(){var r=!1
try{r=this instanceof e}catch(n){}return r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)}
r.prototype=t.prototype}else r={}
return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var n=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}),r}function s(){function e(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||j}function t(){}function r(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||j}function n(){}function s(e,t,r){var n=r.ref
return{$$typeof:u,type:e,key:t,ref:void 0!==n?n:null,props:r}}function a(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}function i(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"}
return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function o(e,t,r,l,c){var h=typeof e
"undefined"!==h&&"boolean"!==h||(e=null)
var p,f,m=!1
if(null===e)m=!0
else switch(h){case"bigint":case"string":case"number":m=!0
break
case"object":switch(e.$$typeof){case u:case d:m=!0
break
case x:return o((m=e._init)(e._payload),t,r,l,c)}}if(m)return c=c(e),m=""===l?"."+i(e,0):l,E(c)?(r="",null!=m&&(r=m.replace(R,"$&/")+"/"),o(c,t,r,"",function(e){return e})):null!=c&&(a(c)&&(p=c,f=r+(null==c.key||e&&e.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+m,c=s(p.type,f,p.props)),t.push(c)),1
m=0
var g,b=""===l?".":l+":"
if(E(e))for(var y=0;y<e.length;y++)m+=o(l=e[y],t,r,h=b+i(l,y),c)
else if("function"==typeof(y=null===(g=e)||"object"!=typeof g?null:"function"==typeof(g=k&&g[k]||g["@@iterator"])?g:null))for(e=y.call(e),y=0;!(l=e.next()).done;)m+=o(l=l.value,t,r,h=b+i(l,y++),c)
else if("object"===h){if("function"==typeof e.then)return o(function(e){switch(e.status){case"fulfilled":return e.value
case"rejected":throw e.reason
default:switch("string"==typeof e.status?e.then(n,n):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value
case"rejected":throw e.reason}}throw e}(e),t,r,l,c)
throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return m}function l(e,t,r){if(null==e)return e
var n=[],s=0
return o(e,n,"","",function(e){return t.call(r,e,s++)}),n}function c(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default
throw e._result}if(Mt)return rr
Mt=1
var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),k=Symbol.iterator,j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,_={}
e.prototype.isReactComponent={},e.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.")
this.updater.enqueueSetState(this,e,t,"setState")},e.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},t.prototype=e.prototype
var N=r.prototype=new t
N.constructor=r,S(N,e.prototype),N.isPureReactComponent=!0
var E=Array.isArray,T={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty,R=/\/+/g,P="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e})
if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)},A={map:l,forEach:function(e,t,r){l(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0
return l(e,function(){t++}),t},toArray:function(e){return l(e,function(e){return e})||[]},only:function(e){if(!a(e))throw Error("React.Children.only expected to receive a single React element child.")
return e}}
return rr.Activity=w,rr.Children=A,rr.Component=e,rr.Fragment=h,rr.Profiler=f,rr.PureComponent=r,rr.StrictMode=p,rr.Suspense=y,rr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,rr.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},rr.cache=function(e){return function(){return e.apply(null,arguments)}},rr.cacheSignal=function(){return null},rr.cloneElement=function(e,t,r){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".")
var n=S({},e.props),a=e.key
if(null!=t)for(i in void 0!==t.key&&(a=""+t.key),t)!C.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(n[i]=t[i])
var i=arguments.length-2
if(1===i)n.children=r
else if(1<i){for(var o=Array(i),l=0;l<i;l++)o[l]=arguments[l+2]
n.children=o}return s(e.type,a,n)},rr.createContext=function(e){return(e={$$typeof:g,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:m,_context:e},e},rr.createElement=function(e,t,r){var n,a={},i=null
if(null!=t)for(n in void 0!==t.key&&(i=""+t.key),t)C.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(a[n]=t[n])
var o=arguments.length-2
if(1===o)a.children=r
else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2]
a.children=l}if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===a[n]&&(a[n]=o[n])
return s(e,i,a)},rr.createRef=function(){return{current:null}},rr.forwardRef=function(e){return{$$typeof:b,render:e}},rr.isValidElement=a,rr.lazy=function(e){return{$$typeof:x,_payload:{_status:-1,_result:e},_init:c}},rr.memo=function(e,t){return{$$typeof:v,type:e,compare:void 0===t?null:t}},rr.startTransition=function(e){var t=T.T,r={}
T.T=r
try{var s=e(),a=T.S
null!==a&&a(r,s),"object"==typeof s&&null!==s&&"function"==typeof s.then&&s.then(n,P)}catch(i){P(i)}finally{null!==t&&null!==r.types&&(t.types=r.types),T.T=t}},rr.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},rr.use=function(e){return T.H.use(e)},rr.useActionState=function(e,t,r){return T.H.useActionState(e,t,r)},rr.useCallback=function(e,t){return T.H.useCallback(e,t)},rr.useContext=function(e){return T.H.useContext(e)},rr.useDebugValue=function(){},rr.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},rr.useEffect=function(e,t){return T.H.useEffect(e,t)},rr.useEffectEvent=function(e){return T.H.useEffectEvent(e)},rr.useId=function(){return T.H.useId()},rr.useImperativeHandle=function(e,t,r){return T.H.useImperativeHandle(e,t,r)},rr.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},rr.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},rr.useMemo=function(e,t){return T.H.useMemo(e,t)},rr.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},rr.useReducer=function(e,t,r){return T.H.useReducer(e,t,r)},rr.useRef=function(e){return T.H.useRef(e)},rr.useState=function(e){return T.H.useState(e)},rr.useSyncExternalStore=function(e,t,r){return T.H.useSyncExternalStore(e,t,r)},rr.useTransition=function(){return T.H.useTransition()},rr.version="19.2.1",rr}function a(){return Ht||(Ht=1,tr.exports=s()),tr.exports}function i(e,t){if(!1===e||null==e)throw new Error(t)}function o(e,t){if(!e)try{throw new Error(t)}catch(r){}}function l(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,r=null,n){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?d(t):t,state:r,key:t&&t.key||n||Math.random().toString(36).substring(2,10)}}function u({pathname:e="/",search:t="",hash:r=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),r&&"#"!==r&&(e+="#"===r.charAt(0)?r:"#"+r),e}function d(e){let t={}
if(e){let r=e.indexOf("#")
r>=0&&(t.hash=e.substring(r),e=e.substring(0,r))
let n=e.indexOf("?")
n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function h(e,t,r="/"){return function(e,t,r){let n=v(("string"==typeof t?d(t):t).pathname||"/",r)
if(null==n)return null
let s=p(e)
!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,r)=>e===t[r])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(s)
let a=null
for(let i=0;null==a&&i<s.length;++i){let e=y(n)
a=g(s[i],e,!1)}return a}(e,t,r)}function p(e,t=[],r=[],n="",s=!1){let a=(e,a,o=s,l)=>{let c={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e}
if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(n)&&o)return
i(c.relativePath.startsWith(n),'Absolute route path "'.concat(c.relativePath,'" nested under path "').concat(n,'" is not valid. An absolute child route path must start with the combined path of all its parent routes.')),c.relativePath=c.relativePath.slice(n.length)}let u=xr([n,c.relativePath]),d=r.concat(c)
e.children&&e.children.length>0&&(i(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'.concat(u,'".')),p(e.children,t,d,u,o)),(null!=e.path||e.index)&&t.push({path:u,score:m(u,e.index),routesMeta:d})}
return e.forEach((e,t)=>{var r
if(""!==e.path&&(null==(r=e.path)?void 0:r.includes("?")))for(let n of f(e.path))a(e,t,!0,n)
else a(e,t)}),t}function f(e){let t=e.split("/")
if(0===t.length)return[]
let[r,...n]=t,s=r.endsWith("?"),a=r.replace(/\?$/,"")
if(0===n.length)return s?[a,""]:[a]
let i=f(n.join("/")),o=[]
return o.push(...i.map(e=>""===e?a:[a,e].join("/"))),s&&o.push(...i),o.map(t=>e.startsWith("/")&&""===t?"/":t)}function m(e,t){let r=e.split("/"),n=r.length
return r.some(yr)&&(n+=br),t&&(n+=fr),r.filter(e=>!yr(e)).reduce((e,t)=>e+(hr.test(t)?pr:""===t?mr:gr),n)}function g(e,t,r=!1){let{routesMeta:n}=e,s={},a="/",i=[]
for(let o=0;o<n.length;++o){let e=n[o],l=o===n.length-1,c="/"===a?t:t.slice(a.length)||"/",u=b({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route
if(!u&&l&&r&&!n[n.length-1].route.index&&(u=b({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null
Object.assign(s,u.params),i.push({params:s,pathname:xr([a,u.pathname]),pathnameBase:wr(xr([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=xr([a,u.pathnameBase]))}return i}function b(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0})
let[r,n]=function(e,t=!1,r=!0){o("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'.concat(e,'" will be treated as if it were "').concat(e.replace(/\*$/,"/*"),'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "').concat(e.replace(/\*$/,"/*"),'".'))
let n=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2")
return e.endsWith("*")?(n.push({paramName:"*"}),s+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":""!==e&&"/"!==e&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),s=t.match(r)
if(!s)return null
let a=s[0],i=a.replace(/(.)\/+$/,"$1"),l=s.slice(1)
return{params:n.reduce((e,{paramName:t,isOptional:r},n)=>{if("*"===t){let e=l[n]||""
i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n]
return e[t]=r&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:i,pattern:e}}function y(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return o(!1,'The URL path "'.concat(e,'" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (').concat(t,").")),e}}function v(e,t){if("/"===t)return e
if(!e.toLowerCase().startsWith(t.toLowerCase()))return null
let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r)
return n&&"/"!==n?null:e.slice(r)||"/"}function x(e,t){let r=t.replace(/\/+$/,"").split("/")
return e.split("/").forEach(e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)}),r.length>1?r.join("/"):"/"}function w(e,t,r,n){return"Cannot include a '".concat(e,"' character in a manually specified `to.").concat(t,"` field [").concat(JSON.stringify(n),"].  Please separate it out to the `to.").concat(r,'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.')}function k(e){let t=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e)
return t.map((e,r)=>r===t.length-1?e.pathname:e.pathnameBase)}function j(e,t,r,n=!1){let s
"string"==typeof e?s=d(e):(s={...e},i(!s.pathname||!s.pathname.includes("?"),w("?","pathname","search",s)),i(!s.pathname||!s.pathname.includes("#"),w("#","pathname","hash",s)),i(!s.search||!s.search.includes("#"),w("#","search","hash",s)))
let a,l=""===e||""===s.pathname,c=l?"/":s.pathname
if(null==c)a=r
else{let e=t.length-1
if(!n&&c.startsWith("..")){let t=c.split("/")
for(;".."===t[0];)t.shift(),e-=1
s.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t="/"){let r,{pathname:n,search:s="",hash:a=""}="string"==typeof e?d(e):e
if(n)if(i=n,vr.test(i))r=n
else{if(n.includes("//")){let e=n
n=n.replace(/\/\/+/g,"/"),o(!1,"Pathnames cannot have embedded double slashes - normalizing ".concat(e," -> ").concat(n))}r=n.startsWith("/")?x(n.substring(1),"/"):x(n,t)}else r=t
var i
return{pathname:r,search:kr(s),hash:jr(a)}}(s,a),h=c&&"/"!==c&&c.endsWith("/"),p=(l||"."===c)&&r.endsWith("/")
return u.pathname.endsWith("/")||!h&&!p||(u.pathname+="/"),u}function S(e){return e.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}function _(){return null!=nr.useContext(Rr)}function N(){return i(_(),"useLocation() may be used only in the context of a <Router> component."),nr.useContext(Rr).location}function E(e){nr.useContext(Cr).static||nr.useLayoutEffect(e)}function T(){let{isDataRoute:e}=nr.useContext(Pr)
return e?function(){let{router:e}=function(){let e=nr.useContext(Nr)
return i(e,O("useNavigate")),e}(),t=I("useNavigate"),r=nr.useRef(!1)
return E(()=>{r.current=!0}),nr.useCallback(async(n,s={})=>{o(r.current,Or),r.current&&("number"==typeof n?await e.navigate(n):await e.navigate(n,{fromRouteId:t,...s}))},[e,t])}():function(){i(_(),"useNavigate() may be used only in the context of a <Router> component.")
let e=nr.useContext(Nr),{basename:t,navigator:r}=nr.useContext(Cr),{matches:n}=nr.useContext(Pr),{pathname:s}=N(),a=JSON.stringify(k(n)),l=nr.useRef(!1)
return E(()=>{l.current=!0}),nr.useCallback((n,i={})=>{if(o(l.current,Or),!l.current)return
if("number"==typeof n)return void r.go(n)
let c=j(n,JSON.parse(a),s,"path"===i.relative)
null==e&&"/"!==t&&(c.pathname="/"===c.pathname?t:xr([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,a,s,e])}()}function C(e,{relative:t}={}){let{matches:r}=nr.useContext(Pr),{pathname:n}=N(),s=JSON.stringify(k(r))
return nr.useMemo(()=>j(e,JSON.parse(s),n,"path"===t),[e,s,n,t])}function R(e,t,r,n){var s
i(_(),"useRoutes() may be used only in the context of a <Router> component.")
let{navigator:a}=nr.useContext(Cr),{matches:l}=nr.useContext(Pr),c=l[l.length-1],u=c?c.params:{},p=c?c.pathname:"/",f=c?c.pathnameBase:"/",m=c&&c.route
{let e=m&&m.path||""
z(p,!m||e.endsWith("*")||e.endsWith("*?"),'You rendered descendant <Routes> (or called `useRoutes()`) at "'.concat(p,'" (under <Route path="').concat(e,'">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="').concat(e,'"> to <Route path="').concat("/"===e?"*":"".concat(e,"/*"),'">.'))}let g,b=N()
if(t){let e="string"==typeof t?d(t):t
i("/"===f||(null==(s=e.pathname)?void 0:s.startsWith(f)),'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'.concat(f,'" but pathname "').concat(e.pathname,'" was given in the `location` prop.')),g=e}else g=b
let y=g.pathname||"/",v=y
if("/"!==f){let e=f.replace(/^\//,"").split("/")
v="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=h(e,{pathname:v})
o(m||null!=x,'No routes matched location "'.concat(g.pathname).concat(g.search).concat(g.hash,'" ')),o(null==x||void 0!==x[x.length-1].route.element||void 0!==x[x.length-1].route.Component||void 0!==x[x.length-1].route.lazy,'Matched leaf route at location "'.concat(g.pathname).concat(g.search).concat(g.hash,'" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'))
let w=function(e,t=[],r=null,n=null){if(null==e){if(!r)return null
if(r.errors)e=r.matches
else{if(0!==t.length||r.initialized||!(r.matches.length>0))return null
e=r.matches}}let s=e,a=null==r?void 0:r.errors
if(null!=a){let e=s.findIndex(e=>e.route.id&&void 0!==(null==a?void 0:a[e.route.id]))
i(e>=0,"Could not find a matching route for errors on route IDs: ".concat(Object.keys(a).join(","))),s=s.slice(0,Math.min(s.length,e+1))}let o=!1,l=-1
if(r)for(let i=0;i<s.length;i++){let e=s[i]
if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(l=i),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!n||void 0===n[e.route.id])
if(e.route.lazy||a){o=!0,s=l>=0?s.slice(0,l+1):[s[0]]
break}}}let c=r&&n?(e,t)=>{var s,a,i
n(e,{location:r.location,params:null!=(i=null==(a=null==(s=r.matches)?void 0:s[0])?void 0:a.params)?i:{},unstable_pattern:S(r.matches),errorInfo:t})}:void 0
return s.reduceRight((e,n,i)=>{let u,d=!1,h=null,p=null
r&&(u=a&&n.route.id?a[n.route.id]:void 0,h=n.route.errorElement||Ir,o&&(l<0&&0===i?(z("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):l===i&&(d=!0,p=n.route.hydrateFallbackElement||null)))
let f=t.concat(s.slice(0,i+1)),m=()=>{let t
return t=u?h:d?p:n.route.Component?nr.createElement(n.route.Component,null):n.route.element?n.route.element:e,nr.createElement(A,{match:n,routeContext:{outlet:e,matches:f,isDataRoute:null!=r},children:t})}
return r&&(n.route.ErrorBoundary||n.route.errorElement||0===i)?nr.createElement(zr,{location:r.location,revalidation:r.revalidation,component:h,error:u,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:c}):m()},null)}(x&&x.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:xr([f,a.encodeLocation?a.encodeLocation(e.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:xr([f,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:e.pathnameBase])})),l,r,n)
return t&&w?nr.createElement(Rr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},w):w}function P(){let e=function(){var e
let t=nr.useContext(Ar),r=function(){let e=nr.useContext(Er)
return i(e,O("useRouteError")),e}(),n=I("useRouteError")
return void 0!==t?t:null==(e=r.errors)?void 0:e[n]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?"".concat(e.status," ").concat(e.statusText):e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},o=null
return o=nr.createElement(nr.Fragment,null,nr.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),nr.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",nr.createElement("code",{style:a},"ErrorBoundary")," or"," ",nr.createElement("code",{style:a},"errorElement")," prop on your route.")),nr.createElement(nr.Fragment,null,nr.createElement("h2",null,"Unexpected Application Error!"),nr.createElement("h3",{style:{fontStyle:"italic"}},t),r?nr.createElement("pre",{style:s},r):null,o)}function A({routeContext:e,match:t,children:r}){let n=nr.useContext(Nr)
return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),nr.createElement(Pr.Provider,{value:e},r)}function O(e){return"".concat(e," must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.")}function I(e){let t=function(e){let t=nr.useContext(Pr)
return i(t,O(e)),t}(e),r=t.matches[t.matches.length-1]
return i(r.route.id,"".concat(e,' can only be used on routes that contain a unique "id"')),r.route.id}function z(e,t,r){t||Lr[e]||(Lr[e]=!0,o(!1,r))}function L(){i(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function D({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:s,static:a=!1,unstable_useTransitions:l}){i(!_(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.")
let c=e.replace(/^\/*/,"/"),u=nr.useMemo(()=>({basename:c,navigator:s,static:a,unstable_useTransitions:l,future:{}}),[c,s,a,l])
"string"==typeof r&&(r=d(r))
let{pathname:h="/",search:p="",hash:f="",state:m=null,key:g="default"}=r,b=nr.useMemo(()=>{let e=v(h,c)
return null==e?null:{location:{pathname:e,search:p,hash:f,state:m,key:g},navigationType:n}},[c,h,p,f,m,g,n])
return o(null!=b,'<Router basename="'.concat(c,'"> is not able to match the URL "').concat(h).concat(p).concat(f,"\" because it does not start with the basename, so the <Router> won't render anything.")),null==b?null:nr.createElement(Cr.Provider,{value:u},nr.createElement(Rr.Provider,{children:t,value:b}))}function U({children:e,location:t}){return R(F(e),t)}function F(e,t=[]){let r=[]
return nr.Children.forEach(e,(e,n)=>{if(!nr.isValidElement(e))return
let s=[...t,n]
if(e.type===nr.Fragment)return void r.push.apply(r,F(e.props.children,s))
i(e.type===L,"[".concat("string"==typeof e.type?e.type:e.type.name,"] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>")),i(!e.props.index||!e.props.children,"An index route cannot have child routes.")
let a={id:e.props.id||s.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy}
e.props.children&&(a.children=F(e.props.children,s)),r.push(a)}),r}function B(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement}function W(e=""){return new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r]
return t.concat(Array.isArray(n)?n.map(e=>[r,e]):[[r,n]])},[]))}function V(e){return null==e||Br.has(e)?e:(o(!1,'"'.concat(e,'" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "').concat(Ur,'"')),null)}function q(e,t){if(!1===e||null==e)throw new Error(t)}function M(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}function H(e,t,r,n,s,a){let i=(e,t)=>!r[t]||e.route.id!==r[t].route.id,o=(e,t)=>{var n
return r[t].pathname!==e.pathname||(null==(n=r[t].route.path)?void 0:n.endsWith("*"))&&r[t].params["*"]!==e.params["*"]}
return"assets"===a?t.filter((e,t)=>i(e,t)||o(e,t)):"data"===a?t.filter((t,a)=>{var l
let c=n.routes[t.route.id]
if(!c||!c.hasLoader)return!1
if(i(t,a)||o(t,a))return!0
if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:(null==(l=r[0])?void 0:l.params)||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0})
if("boolean"==typeof n)return n}return!0}):[]}function K(){let e=nr.useContext(Nr)
return q(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function G(){let e=nr.useContext(Wr)
return q(e,"You must render this element inside a <HydratedRouter> element"),e}function Y(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function J({page:e,...t}){let{router:r}=K(),n=nr.useMemo(()=>h(r.routes,e,r.basename),[r.routes,e,r.basename])
return n?nr.createElement(X,{page:e,matches:n,...t}):null}function X({page:e,matches:t,...r}){let n=N(),{manifest:s,routeModules:a}=G(),{basename:i}=K(),{loaderData:o,matches:l}=function(){let e=nr.useContext(Er)
return q(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}(),c=nr.useMemo(()=>H(e,t,l,s,n,"data"),[e,t,l,s,n]),u=nr.useMemo(()=>H(e,t,l,s,n,"assets"),[e,t,l,s,n]),d=nr.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[]
let r=new Set,l=!1
if(t.forEach(e=>{var t
let n=s.routes[e.route.id]
n&&n.hasLoader&&(!c.some(t=>t.route.id===e.route.id)&&e.route.id in o&&(null==(t=a[e.route.id])?void 0:t.shouldRevalidate)||n.hasClientLoader?l=!0:r.add(e.route.id))}),0===r.size)return[]
let u=function(e,t,r){let n="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e
return"/"===n.pathname?n.pathname="_root.".concat(r):t&&"/"===v(n.pathname,t)?n.pathname="".concat(t.replace(/\/$/,""),"/_root.").concat(r):n.pathname="".concat(n.pathname.replace(/\/$/,""),".").concat(r),n}(e,i,"data")
return l&&r.size>0&&u.searchParams.set("_routes",t.filter(e=>r.has(e.route.id)).map(e=>e.route.id).join(",")),[u.pathname+u.search]},[i,o,n,s,c,t,e,a]),h=nr.useMemo(()=>function(e,t,{includeHydrateFallback:r}={}){return n=e.map(e=>{let n=t.routes[e.route.id]
if(!n)return[]
let s=[n.module]
return n.clientActionModule&&(s=s.concat(n.clientActionModule)),n.clientLoaderModule&&(s=s.concat(n.clientLoaderModule)),r&&n.hydrateFallbackModule&&(s=s.concat(n.hydrateFallbackModule)),n.imports&&(s=s.concat(n.imports)),s}).flat(1),[...new Set(n)]
var n}(u,s),[u,s]),p=function(e){let{manifest:t,routeModules:r}=G(),[n,s]=nr.useState([])
return nr.useEffect(()=>{let n=!1
return async function(e,t,r){return function(e){let t=new Set
return new Set(void 0),e.reduce((e,r)=>{let n=JSON.stringify(function(e){let t={},r=Object.keys(e).sort()
for(let n of r)t[n]=e[n]
return t}(r))
return t.has(n)||(t.add(n),e.push({key:n,link:r})),e},[])}((await Promise.all(e.map(async e=>{let n=t.routes[e.route.id]
if(n){let e=await async function(e,t){if(e.id in t)return t[e.id]
try{let r=await import(e.module)
return t[e.id]=r,r}catch(r){return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}(n,r)
return e.links?e.links():[]}return[]}))).flat(1).filter(M).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,t,r).then(e=>{n||s(e)}),()=>{n=!0}},[e,t,r]),n}(u)
return nr.createElement(nr.Fragment,null,d.map(e=>nr.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...r})),h.map(e=>nr.createElement("link",{key:e,rel:"modulepreload",href:e,...r})),p.map(({key:e,link:t})=>nr.createElement("link",{key:e,nonce:r.nonce,...t})))}function Z(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}function $({basename:e,children:t,unstable_useTransitions:r,window:n}){let s=nr.useRef()
null==s.current&&(s.current=function(e={}){return function(e,t,r,n={}){function s(){return(p.state||{idx:null}).idx}function a(){f="POP"
let e=s(),t=null==e?null:e-g
g=e,m&&m({action:f,location:b.location,delta:t})}function o(e){return function(e,t=!1){let r="http://localhost"
"undefined"!=typeof window&&(r="null"!==window.location.origin?window.location.origin:window.location.href),i(r,"No window.location.(origin|href) available to create URL")
let n="string"==typeof e?e:u(e)
return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}(e)}let{window:d=document.defaultView,v5Compat:h=!1}=n,p=d.history,f="POP",m=null,g=s()
null==g&&(g=0,p.replaceState({...p.state,idx:g},""))
let b={get action(){return f},get location(){return e(d,p)},listen(e){if(m)throw new Error("A history only accepts one active listener")
return d.addEventListener(dr,a),m=e,()=>{d.removeEventListener(dr,a),m=null}},createHref:e=>t(d,e),createURL:o,encodeLocation(e){let t=o(e)
return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f="PUSH"
let r=c(b.location,e,t)
g=s()+1
let n=l(r,g),a=b.createHref(r)
try{p.pushState(n,"",a)}catch(i){if(i instanceof DOMException&&"DataCloneError"===i.name)throw i
d.location.assign(a)}h&&m&&m({action:f,location:b.location,delta:1})},replace:function(e,t){f="REPLACE"
let r=c(b.location,e,t)
g=s()
let n=l(r,g),a=b.createHref(r)
p.replaceState(n,"",a),h&&m&&m({action:f,location:b.location,delta:0})},go:e=>p.go(e)}
return b}(function(e,t){let{pathname:r,search:n,hash:s}=e.location
return c("",{pathname:r,search:n,hash:s},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:u(t)},0,e)}({window:n,v5Compat:!0}))
let a=s.current,[o,d]=nr.useState({action:a.action,location:a.location}),h=nr.useCallback(e=>{!1===r?d(e):nr.startTransition(()=>d(e))},[r])
return nr.useLayoutEffect(()=>a.listen(h),[a,h]),nr.createElement(D,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:!0===r})}function Q(e){let t=nr.useContext(Nr)
return i(t,function(e){return"".concat(e," must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.")}(e)),t}function ee(e,t){function r(){this.constructor=e}if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
Jr(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function te(e,t){var r={}
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0
for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r}function re(e,t,r,n){var s,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n)
else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a<3?s(i):a>3?s(t,r,i):s(t,r))||i)
return a>3&&i&&Object.defineProperty(t,r,i),i}function ne(e,t){return function(r,n){t(r,n,e)}}function se(e,t,r,n,s,a){function i(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected")
return e}for(var o,l=n.kind,c="getter"===l?"get":"setter"===l?"set":"value",u=!t&&e?n.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),h=!1,p=r.length-1;p>=0;p--){var f={}
for(var m in n)f[m]="access"===m?{}:n[m]
for(var m in n.access)f.access[m]=n.access[m]
f.addInitializer=function(e){if(h)throw new TypeError("Cannot add initializers after decoration has completed")
a.push(i(e||null))}
var g=(0,r[p])("accessor"===l?{get:d.get,set:d.set}:d[c],f)
if("accessor"===l){if(void 0===g)continue
if(null===g||"object"!=typeof g)throw new TypeError("Object expected");(o=i(g.get))&&(d.get=o),(o=i(g.set))&&(d.set=o),(o=i(g.init))&&s.unshift(o)}else(o=i(g))&&("field"===l?s.unshift(o):d[c]=o)}u&&Object.defineProperty(u,n.name,d),h=!0}function ae(e,t,r){for(var n=arguments.length>2,s=0;s<t.length;s++)r=n?t[s].call(e,r):t[s].call(e)
return n?r:void 0}function ie(e){return"symbol"==typeof e?e:"".concat(e)}function oe(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function le(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function ce(e,t,r,n){return new(r||(r=Promise))(function(s,a){function i(e){try{l(n.next(e))}catch(t){a(t)}}function o(e){try{l(n.throw(e))}catch(t){a(t)}}function l(e){var t
e.done?s(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(i,o)}l((n=n.apply(e,t||[])).next())})}function ue(e,t){function r(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.")
for(;o&&(o=0,r[0]&&(i=0)),i;)try{if(n=1,s&&(a=2&r[0]?s.return:r[0]?s.throw||((a=s.return)&&a.call(s),0):s.next)&&!(a=a.call(s,r[1])).done)return a
switch(s=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r
break
case 4:return i.label++,{value:r[1],done:!1}
case 5:i.label++,s=r[1],r=[0]
continue
case 7:r=i.ops.pop(),i.trys.pop()
continue
default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){i=0
continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1]
break}if(6===r[0]&&i.label<a[1]){i.label=a[1],a=r
break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(r)
break}a[2]&&i.ops.pop(),i.trys.pop()
continue}r=t.call(e,i)}catch(l){r=[6,l],s=0}finally{n=a=0}if(5&r[0])throw r[1]
return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}var n,s,a,i={label:0,sent:function(){if(1&a[0])throw a[1]
return a[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype)
return o.next=r(0),o.throw=r(1),o.return=r(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o}function de(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||Zr(t,e,r)}function he(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0
if(r)return r.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function pe(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator]
if(!r)return e
var n,s,a=r.call(e),i=[]
try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(o){s={error:o}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(s)throw s.error}}return i}function fe(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(pe(arguments[t]))
return e}function me(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length
var n=Array(e),s=0
for(t=0;t<r;t++)for(var a=arguments[t],i=0,o=a.length;i<o;i++,s++)n[s]=a[i]
return n}function ge(e,t,r){if(r||2===arguments.length)for(var n,s=0,a=t.length;s<a;s++)!n&&s in t||(n||(n=Array.prototype.slice.call(t,0,s)),n[s]=t[s])
return e.concat(n||Array.prototype.slice.call(t))}function be(e){return this instanceof be?(this.v=e,this):new be(e)}function ye(e,t,r){function n(e,t){c[e]&&(l[e]=function(t){return new Promise(function(r,n){u.push([e,t,r,n])>1||s(e,t)})},t&&(l[e]=t(l[e])))}function s(e,t){try{(r=c[e](t)).value instanceof be?Promise.resolve(r.value.v).then(a,i):o(u[0][2],r)}catch(n){o(u[0][3],n)}var r}function a(e){s("next",e)}function i(e){s("throw",e)}function o(e,t){e(t),u.shift(),u.length&&s(u[0][0],u[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var l,c=r.apply(e,t||[]),u=[]
return l=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),n("next"),n("throw"),n("return",function(e){return function(t){return Promise.resolve(t).then(e,i)}}),l[Symbol.asyncIterator]=function(){return this},l}function ve(e){function t(t,s){r[t]=e[t]?function(r){return(n=!n)?{value:be(e[t](r)),done:!1}:s?s(r):r}:s}var r,n
return r={},t("next"),t("throw",function(e){throw e}),t("return"),r[Symbol.iterator]=function(){return this},r}function xe(e){function t(t){r[t]=e[t]&&function(r){return new Promise(function(n,s){!function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)}(n,s,(r=e[t](r)).done,r.value)})}}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=he(e),r={},t("next"),t("throw"),t("return"),r[Symbol.asyncIterator]=function(){return this},r)}function we(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function ke(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r=Qr(e),n=0;n<r.length;n++)"default"!==r[n]&&Zr(t,e,r[n])
return $r(t,e),t}function je(e){return e&&e.__esModule?e:{default:e}}function Se(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter")
if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it")
return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function _e(e,t,r,n,s){if("m"===n)throw new TypeError("Private method is not writable")
if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter")
if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it")
return"a"===n?s.call(e,r):s?s.value=r:t.set(e,r),r}function Ne(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object")
return"function"==typeof e?t===e:e.has(t)}function Ee(e,t,r){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.")
var n,s
if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.")
n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.")
n=t[Symbol.dispose],r&&(s=n)}if("function"!=typeof n)throw new TypeError("Object not disposable.")
s&&(n=function(){try{s.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0})
return t}function Te(e){function t(t){e.error=e.hasError?new en(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}var r,n=0
return function s(){for(;r=e.stack.pop();)try{if(!r.async&&1===n)return n=0,e.stack.push(r),Promise.resolve().then(s)
if(r.dispose){var a=r.dispose.call(r.value)
if(r.async)return n|=2,Promise.resolve(a).then(s,function(e){return t(e),s()})}else n|=1}catch(i){t(i)}if(1===n)return e.hasError?Promise.reject(e.error):Promise.resolve()
if(e.hasError)throw e.error}()}function Ce(e,t){return"string"==typeof e&&/^\.\.?\//.test(e)?e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(e,r,n,s,a){return r?t?".jsx":".js":!n||s&&a?n+s+"."+a.toLowerCase()+"js":e}):e}function Re(){if(pn)return _n
pn=1,Object.defineProperty(_n,"__esModule",{value:!0})
class e extends Error{constructor(e){super(e.message),this.name="PostgrestError",this.details=e.details,this.hint=e.hint,this.code=e.code}}return _n.default=e,_n}function Pe(){if(fn)return Sn
fn=1,Object.defineProperty(Sn,"__esModule",{value:!0})
const e=hn.__importDefault(Re())
return Sn.default=class{constructor(e){var t,r
this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=null!==(t=e.shouldThrowOnError)&&void 0!==t&&t,this.signal=e.signal,this.isMaybeSingle=null!==(r=e.isMaybeSingle)&&void 0!==r&&r,e.fetch?this.fetch=e.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}then(t,r){void 0===this.schema||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),"GET"!==this.method&&"HEAD"!==this.method&&this.headers.set("Content-Type","application/json")
let n=(0,this.fetch)(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async t=>{var r,n,s,a
let i=null,o=null,l=null,c=t.status,u=t.statusText
if(t.ok){if("HEAD"!==this.method){const e=await t.text()
""===e||(o="text/csv"===this.headers.get("Accept")||this.headers.get("Accept")&&(null===(r=this.headers.get("Accept"))||void 0===r?void 0:r.includes("application/vnd.pgrst.plan+text"))?e:JSON.parse(e))}const e=null===(n=this.headers.get("Prefer"))||void 0===n?void 0:n.match(/count=(exact|planned|estimated)/),a=null===(s=t.headers.get("content-range"))||void 0===s?void 0:s.split("/")
e&&a&&a.length>1&&(l=parseInt(a[1])),this.isMaybeSingle&&"GET"===this.method&&Array.isArray(o)&&(o.length>1?(i={code:"PGRST116",details:"Results contain ".concat(o.length," rows, application/vnd.pgrst.object+json requires 1 row"),hint:null,message:"JSON object requested, multiple (or no) rows returned"},o=null,l=null,c=406,u="Not Acceptable"):o=1===o.length?o[0]:null)}else{const r=await t.text()
try{i=JSON.parse(r),Array.isArray(i)&&404===t.status&&(o=[],i=null,c=200,u="OK")}catch(d){404===t.status&&""===r?(c=204,u="No Content"):i={message:r}}if(i&&this.isMaybeSingle&&(null===(a=null==i?void 0:i.details)||void 0===a?void 0:a.includes("0 rows"))&&(i=null,c=200,u="OK"),i&&this.shouldThrowOnError)throw new e.default(i)}return{error:i,data:o,count:l,status:c,statusText:u}})
return this.shouldThrowOnError||(n=n.catch(e=>{var t,r,n,s,a,i
let o=""
const l=null==e?void 0:e.cause
if(l){const a=null!==(t=null==l?void 0:l.message)&&void 0!==t?t:"",i=null!==(r=null==l?void 0:l.code)&&void 0!==r?r:""
o="".concat(null!==(n=null==e?void 0:e.name)&&void 0!==n?n:"FetchError",": ").concat(null==e?void 0:e.message),o+="\n\nCaused by: ".concat(null!==(s=null==l?void 0:l.name)&&void 0!==s?s:"Error",": ").concat(a),i&&(o+=" (".concat(i,")")),(null==l?void 0:l.stack)&&(o+="\n".concat(l.stack))}else o=null!==(a=null==e?void 0:e.stack)&&void 0!==a?a:""
return{error:{message:"".concat(null!==(i=null==e?void 0:e.name)&&void 0!==i?i:"FetchError",": ").concat(null==e?void 0:e.message),details:o,hint:"",code:""},data:null,count:null,status:0,statusText:""}})),n.then(t,r)}returns(){return this}overrideTypes(){return this}},Sn}function Ae(){if(mn)return jn
mn=1,Object.defineProperty(jn,"__esModule",{value:!0})
const e=hn.__importDefault(Pe())
let t=class extends e.default{select(e){let t=!1
const r=(null!=e?e:"*").split("").map(e=>/\s/.test(e)&&!t?"":('"'===e&&(t=!t),e)).join("")
return this.url.searchParams.set("select",r),this.headers.append("Prefer","return=representation"),this}order(e,{ascending:t=!0,nullsFirst:r,foreignTable:n,referencedTable:s=n}={}){const a=s?"".concat(s,".order"):"order",i=this.url.searchParams.get(a)
return this.url.searchParams.set(a,"".concat(i?"".concat(i,","):"").concat(e,".").concat(t?"asc":"desc").concat(void 0===r?"":r?".nullsfirst":".nullslast")),this}limit(e,{foreignTable:t,referencedTable:r=t}={}){const n=void 0===r?"limit":"".concat(r,".limit")
return this.url.searchParams.set(n,"".concat(e)),this}range(e,t,{foreignTable:r,referencedTable:n=r}={}){const s=void 0===n?"offset":"".concat(n,".offset"),a=void 0===n?"limit":"".concat(n,".limit")
return this.url.searchParams.set(s,"".concat(e)),this.url.searchParams.set(a,"".concat(t-e+1)),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return"GET"===this.method?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:e=!1,verbose:t=!1,settings:r=!1,buffers:n=!1,wal:s=!1,format:a="text"}={}){var i
const o=[e?"analyze":null,t?"verbose":null,r?"settings":null,n?"buffers":null,s?"wal":null].filter(Boolean).join("|"),l=null!==(i=this.headers.get("Accept"))&&void 0!==i?i:"application/json"
return this.headers.set("Accept","application/vnd.pgrst.plan+".concat(a,'; for="').concat(l,'"; options=').concat(o,";")),this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(e){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer","max-affected=".concat(e)),this}}
return jn.default=t,jn}function Oe(){if(gn)return kn
gn=1,Object.defineProperty(kn,"__esModule",{value:!0})
const e=hn.__importDefault(Ae()),t=new RegExp("[,()]")
let r=class extends e.default{eq(e,t){return this.url.searchParams.append(e,"eq.".concat(t)),this}neq(e,t){return this.url.searchParams.append(e,"neq.".concat(t)),this}gt(e,t){return this.url.searchParams.append(e,"gt.".concat(t)),this}gte(e,t){return this.url.searchParams.append(e,"gte.".concat(t)),this}lt(e,t){return this.url.searchParams.append(e,"lt.".concat(t)),this}lte(e,t){return this.url.searchParams.append(e,"lte.".concat(t)),this}like(e,t){return this.url.searchParams.append(e,"like.".concat(t)),this}likeAllOf(e,t){return this.url.searchParams.append(e,"like(all).{".concat(t.join(","),"}")),this}likeAnyOf(e,t){return this.url.searchParams.append(e,"like(any).{".concat(t.join(","),"}")),this}ilike(e,t){return this.url.searchParams.append(e,"ilike.".concat(t)),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,"ilike(all).{".concat(t.join(","),"}")),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,"ilike(any).{".concat(t.join(","),"}")),this}regexMatch(e,t){return this.url.searchParams.append(e,"match.".concat(t)),this}regexIMatch(e,t){return this.url.searchParams.append(e,"imatch.".concat(t)),this}is(e,t){return this.url.searchParams.append(e,"is.".concat(t)),this}isDistinct(e,t){return this.url.searchParams.append(e,"isdistinct.".concat(t)),this}in(e,r){const n=Array.from(new Set(r)).map(e=>"string"==typeof e&&t.test(e)?'"'.concat(e,'"'):"".concat(e)).join(",")
return this.url.searchParams.append(e,"in.(".concat(n,")")),this}contains(e,t){return"string"==typeof t?this.url.searchParams.append(e,"cs.".concat(t)):Array.isArray(t)?this.url.searchParams.append(e,"cs.{".concat(t.join(","),"}")):this.url.searchParams.append(e,"cs.".concat(JSON.stringify(t))),this}containedBy(e,t){return"string"==typeof t?this.url.searchParams.append(e,"cd.".concat(t)):Array.isArray(t)?this.url.searchParams.append(e,"cd.{".concat(t.join(","),"}")):this.url.searchParams.append(e,"cd.".concat(JSON.stringify(t))),this}rangeGt(e,t){return this.url.searchParams.append(e,"sr.".concat(t)),this}rangeGte(e,t){return this.url.searchParams.append(e,"nxl.".concat(t)),this}rangeLt(e,t){return this.url.searchParams.append(e,"sl.".concat(t)),this}rangeLte(e,t){return this.url.searchParams.append(e,"nxr.".concat(t)),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,"adj.".concat(t)),this}overlaps(e,t){return"string"==typeof t?this.url.searchParams.append(e,"ov.".concat(t)):this.url.searchParams.append(e,"ov.{".concat(t.join(","),"}")),this}textSearch(e,t,{config:r,type:n}={}){let s=""
"plain"===n?s="pl":"phrase"===n?s="ph":"websearch"===n&&(s="w")
const a=void 0===r?"":"(".concat(r,")")
return this.url.searchParams.append(e,"".concat(s,"fts").concat(a,".").concat(t)),this}match(e){return Object.entries(e).forEach(([e,t])=>{this.url.searchParams.append(e,"eq.".concat(t))}),this}not(e,t,r){return this.url.searchParams.append(e,"not.".concat(t,".").concat(r)),this}or(e,{foreignTable:t,referencedTable:r=t}={}){const n=r?"".concat(r,".or"):"or"
return this.url.searchParams.append(n,"(".concat(e,")")),this}filter(e,t,r){return this.url.searchParams.append(e,"".concat(t,".").concat(r)),this}}
return kn.default=r,kn}function Ie(){if(bn)return wn
bn=1,Object.defineProperty(wn,"__esModule",{value:!0})
const e=hn.__importDefault(Oe())
return wn.default=class{constructor(e,{headers:t={},schema:r,fetch:n}){this.url=e,this.headers=new Headers(t),this.schema=r,this.fetch=n}select(t,r){const{head:n=!1,count:s}=null!=r?r:{},a=n?"HEAD":"GET"
let i=!1
const o=(null!=t?t:"*").split("").map(e=>/\s/.test(e)&&!i?"":('"'===e&&(i=!i),e)).join("")
return this.url.searchParams.set("select",o),s&&this.headers.append("Prefer","count=".concat(s)),new e.default({method:a,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(t,{count:r,defaultToNull:n=!0}={}){var s
if(r&&this.headers.append("Prefer","count=".concat(r)),n||this.headers.append("Prefer","missing=default"),Array.isArray(t)){const e=t.reduce((e,t)=>e.concat(Object.keys(t)),[])
if(e.length>0){const t=[...new Set(e)].map(e=>'"'.concat(e,'"'))
this.url.searchParams.set("columns",t.join(","))}}return new e.default({method:"POST",url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:null!==(s=this.fetch)&&void 0!==s?s:fetch})}upsert(t,{onConflict:r,ignoreDuplicates:n=!1,count:s,defaultToNull:a=!0}={}){var i
if(this.headers.append("Prefer","resolution=".concat(n?"ignore":"merge","-duplicates")),void 0!==r&&this.url.searchParams.set("on_conflict",r),s&&this.headers.append("Prefer","count=".concat(s)),a||this.headers.append("Prefer","missing=default"),Array.isArray(t)){const e=t.reduce((e,t)=>e.concat(Object.keys(t)),[])
if(e.length>0){const t=[...new Set(e)].map(e=>'"'.concat(e,'"'))
this.url.searchParams.set("columns",t.join(","))}}return new e.default({method:"POST",url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:null!==(i=this.fetch)&&void 0!==i?i:fetch})}update(t,{count:r}={}){var n
return r&&this.headers.append("Prefer","count=".concat(r)),new e.default({method:"PATCH",url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:null!==(n=this.fetch)&&void 0!==n?n:fetch})}delete({count:t}={}){var r
return t&&this.headers.append("Prefer","count=".concat(t)),new e.default({method:"DELETE",url:this.url,headers:this.headers,schema:this.schema,fetch:null!==(r=this.fetch)&&void 0!==r?r:fetch})}},wn}function ze(){if(vn)return dn
vn=1,Object.defineProperty(dn,"__esModule",{value:!0}),dn.PostgrestError=dn.PostgrestBuilder=dn.PostgrestTransformBuilder=dn.PostgrestFilterBuilder=dn.PostgrestQueryBuilder=dn.PostgrestClient=void 0
const e=hn,t=e.__importDefault(function(){if(yn)return xn
yn=1,Object.defineProperty(xn,"__esModule",{value:!0})
const e=hn,t=e.__importDefault(Ie()),r=e.__importDefault(Oe())
return xn.default=class e{constructor(e,{headers:t={},schema:r,fetch:n}={}){this.url=e,this.headers=new Headers(t),this.schemaName=r,this.fetch=n}from(e){if(!e||"string"!=typeof e||""===e.trim())throw new Error("Invalid relation name: relation must be a non-empty string.")
const r=new URL("".concat(this.url,"/").concat(e))
return new t.default(r,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(e,t={},{head:n=!1,get:s=!1,count:a}={}){var i
let o
const l=new URL("".concat(this.url,"/rpc/").concat(e))
let c
n||s?(o=n?"HEAD":"GET",Object.entries(t).filter(([e,t])=>void 0!==t).map(([e,t])=>[e,Array.isArray(t)?"{".concat(t.join(","),"}"):"".concat(t)]).forEach(([e,t])=>{l.searchParams.append(e,t)})):(o="POST",c=t)
const u=new Headers(this.headers)
return a&&u.set("Prefer","count=".concat(a)),new r.default({method:o,url:l,headers:u,schema:this.schemaName,body:c,fetch:null!==(i=this.fetch)&&void 0!==i?i:fetch})}},xn}())
dn.PostgrestClient=t.default
const r=e.__importDefault(Ie())
dn.PostgrestQueryBuilder=r.default
const n=e.__importDefault(Oe())
dn.PostgrestFilterBuilder=n.default
const s=e.__importDefault(Ae())
dn.PostgrestTransformBuilder=s.default
const a=e.__importDefault(Pe())
dn.PostgrestBuilder=a.default
const i=e.__importDefault(Re())
return dn.PostgrestError=i.default,dn.default={PostgrestClient:t.default,PostgrestQueryBuilder:r.default,PostgrestFilterBuilder:n.default,PostgrestTransformBuilder:s.default,PostgrestBuilder:a.default,PostgrestError:i.default},dn}function Le(e){return"object"==typeof e&&null!==e&&"__isStorageError"in e}function De(e,t,r,n,s,a){return ce(this,void 0,void 0,function*(){return new Promise((i,o)=>{e(r,((e,t,r,n)=>{const s={method:e,headers:(null==t?void 0:t.headers)||{}}
return"GET"!==e&&n?((e=>{if("object"!=typeof e||null===e)return!1
const t=Object.getPrototypeOf(e)
return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)})(n)?(s.headers=Object.assign({"Content-Type":"application/json"},null==t?void 0:t.headers),s.body=JSON.stringify(n)):s.body=n,(null==t?void 0:t.duplex)&&(s.duplex=t.duplex),Object.assign(Object.assign({},s),r)):s})(t,n,s,a)).then(e=>{if(!e.ok)throw e
return(null==n?void 0:n.noResolveJson)?e:e.json()}).then(e=>i(e)).catch(e=>((e,t,r)=>ce(void 0,void 0,void 0,function*(){const n=yield Response
e instanceof n&&!(null==r?void 0:r.noResolveJson)?e.json().then(r=>{const n=e.status||500,s=(null==r?void 0:r.statusCode)||n+""
t(new ms(vs(r),n,s))}).catch(e=>{t(new gs(vs(e),e))}):t(new gs(vs(e),e))}))(e,o,n))})})}function Ue(e,t,r,n){return ce(this,void 0,void 0,function*(){return De(e,"GET",t,r,n)})}function Fe(e,t,r,n,s){return ce(this,void 0,void 0,function*(){return De(e,"POST",t,n,s,r)})}function Be(e,t,r,n,s){return ce(this,void 0,void 0,function*(){return De(e,"PUT",t,n,s,r)})}function We(e,t,r,n,s){return ce(this,void 0,void 0,function*(){return De(e,"DELETE",t,n,s,r)})}function Ve(e){return e.join("\x1f")}function qe(e){return e.join("\x1f")}function Me(e){return"object"==typeof e&&null!==e&&"__isStorageVectorsError"in e}function He(e,t,r,n,s){return ce(this,void 0,void 0,function*(){return function(e,t,r,n,s,a){return ce(this,void 0,void 0,function*(){return new Promise((t,i)=>{e(r,((e,t,r,n)=>{const s={method:e,headers:(null==t?void 0:t.headers)||{}}
return n?(Ws(n)?(s.headers=Object.assign({"Content-Type":"application/json"},null==t?void 0:t.headers),s.body=JSON.stringify(n)):s.body=n,Object.assign(Object.assign({},s),r)):s})("POST",n,s,a)).then(e=>{if(!e.ok)throw e
if(null==n?void 0:n.noResolveJson)return e
const t=e.headers.get("content-type")
return t&&t.includes("application/json")?e.json():{}}).then(e=>t(e)).catch(e=>((e,t,r)=>ce(void 0,void 0,void 0,function*(){if(e&&"object"==typeof e&&"status"in e&&"ok"in e&&"number"==typeof e.status&&!(null==r?void 0:r.noResolveJson)){const r=e.status||500,n=e
if("function"==typeof n.json)n.json().then(e=>{const n=(null==e?void 0:e.statusCode)||(null==e?void 0:e.code)||r+""
t(new Ls(Vs(e),r,n))}).catch(()=>{const e=r+"",s=n.statusText||"HTTP ".concat(r," error")
t(new Ls(s,r,e))})
else{const e=r+"",s=n.statusText||"HTTP ".concat(r," error")
t(new Ls(s,r,e))}}else t(new Ds(Vs(e),e))}))(e,i,n))})})}(e,0,t,n,s,r)})}function Ke(){return Xs||(Xs=1,Object.defineProperty(ta,"__esModule",{value:!0}),ta.version=void 0,ta.version="2.86.2"),ta}function Ge(){return Zs||(Zs=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DEFAULT_REALTIME_OPTIONS=e.DEFAULT_AUTH_OPTIONS=e.DEFAULT_DB_OPTIONS=e.DEFAULT_GLOBAL_OPTIONS=e.DEFAULT_HEADERS=void 0
const t=Ke()
let r=""
r="undefined"!=typeof Deno?"deno":"undefined"!=typeof document?"web":"undefined"!=typeof navigator&&"ReactNative"===navigator.product?"react-native":"node",e.DEFAULT_HEADERS={"X-Client-Info":"supabase-js-".concat(r,"/").concat(t.version)},e.DEFAULT_GLOBAL_OPTIONS={headers:e.DEFAULT_HEADERS},e.DEFAULT_DB_OPTIONS={schema:"public"},e.DEFAULT_AUTH_OPTIONS={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},e.DEFAULT_REALTIME_OPTIONS={}}(ea)),ea}function Ye(){return $s||($s=1,e=ra,Object.defineProperty(e,"__esModule",{value:!0}),e.fetchWithAuth=e.resolveHeadersConstructor=e.resolveFetch=void 0,e.resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),e.resolveHeadersConstructor=()=>Headers,e.fetchWithAuth=(t,r,n)=>{const s=(0,e.resolveFetch)(n),a=(0,e.resolveHeadersConstructor)()
return async(e,n)=>{var i
const o=null!==(i=await r())&&void 0!==i?i:t
let l=new a(null==n?void 0:n.headers)
return l.has("apikey")||l.set("apikey",t),l.has("Authorization")||l.set("Authorization","Bearer ".concat(o)),s(e,Object.assign(Object.assign({},n),{headers:l}))}}),ra
var e}function Je(){function e(e){return e.endsWith("/")?e:e+"/"}return Qs||(Qs=1,Object.defineProperty(na,"__esModule",{value:!0}),na.isBrowser=void 0,na.uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0
return("x"==e?t:3&t|8).toString(16)})},na.ensureTrailingSlash=e,na.applySettingDefaults=function(e,t){var r,n
const{db:s,auth:a,realtime:i,global:o}=e,{db:l,auth:c,realtime:u,global:d}=t,h={db:Object.assign(Object.assign({},l),s),auth:Object.assign(Object.assign({},c),a),realtime:Object.assign(Object.assign({},u),i),storage:{},global:Object.assign(Object.assign(Object.assign({},d),o),{headers:Object.assign(Object.assign({},null!==(r=null==d?void 0:d.headers)&&void 0!==r?r:{}),null!==(n=null==o?void 0:o.headers)&&void 0!==n?n:{})}),accessToken:async()=>""}
return e.accessToken?h.accessToken=e.accessToken:delete h.accessToken,h},na.validateSupabaseUrl=function(t){const r=null==t?void 0:t.trim()
if(!r)throw new Error("supabaseUrl is required.")
if(!r.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.")
try{return new URL(e(r))}catch(n){throw Error("Invalid supabaseUrl: Provided URL is malformed.")}},na.isBrowser=()=>"undefined"!=typeof window),na}function Xe(e){return"object"==typeof e&&null!==e&&"__isAuthError"in e}function Ze(e){return Xe(e)&&"AuthApiError"===e.name}function $e(e){return Xe(e)&&"AuthSessionMissingError"===e.name}function Qe(e){return Xe(e)&&"AuthImplicitGrantRedirectError"===e.name}function et(e){return Xe(e)&&"AuthRetryableFetchError"===e.name}function tt(e,t,r){if(null!==e)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const e=t.queue>>t.queuedBits-6&63
r(Sa[e]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const e=t.queue>>t.queuedBits-6&63
r(Sa[e]),t.queuedBits-=6}}function rt(e,t,r){const n=Na[e]
if(!(n>-1)){if(-2===n)return
throw new Error('Invalid Base64-URL character "'.concat(String.fromCharCode(e),'"'))}for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8}function nt(e){const t=[],r=e=>{t.push(String.fromCodePoint(e))},n={utf8seq:0,codepoint:0},s={queue:0,queuedBits:0},a=e=>{!function(e,t,r){if(0===t.utf8seq){if(e<=127)return void r(e)
for(let r=1;r<6;r+=1)if(!(e>>7-r&1)){t.utf8seq=r
break}if(2===t.utf8seq)t.codepoint=31&e
else if(3===t.utf8seq)t.codepoint=15&e
else{if(4!==t.utf8seq)throw new Error("Invalid UTF-8 sequence")
t.codepoint=7&e}t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence")
t.codepoint=t.codepoint<<6|63&e,t.utf8seq-=1,0===t.utf8seq&&r(t.codepoint)}}(e,n,r)}
for(let i=0;i<e.length;i+=1)rt(e.charCodeAt(i),s,a)
return t.join("")}function st(e,t){if(!(e<=127)){if(e<=2047)return t(192|e>>6),void t(128|63&e)
if(e<=65535)return t(224|e>>12),t(128|e>>6&63),void t(128|63&e)
if(e<=1114111)return t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),void t(128|63&e)
throw new Error("Unrecognized Unicode codepoint: ".concat(e.toString(16)))}t(e)}function at(e){const t=[],r={queue:0,queuedBits:0},n=e=>{t.push(e)}
for(let s=0;s<e.length;s+=1)rt(e.charCodeAt(s),r,n)
return new Uint8Array(t)}function it(e){const t=[],r={queue:0,queuedBits:0},n=e=>{t.push(e)}
return e.forEach(e=>tt(e,r,n)),tt(null,r,n),t.join("")}function ot(e){const t=e.split(".")
if(3!==t.length)throw new ja("Invalid JWT structure")
for(let r=0;r<t.length;r++)if(!da.test(t[r]))throw new ja("JWT not in base64url format")
return{header:JSON.parse(nt(t[0])),payload:JSON.parse(nt(t[1])),signature:at(t[2]),raw:{header:t[0],payload:t[1]}}}function lt(e){return("0"+e.toString(16)).substr(-2)}async function ct(e,t,r=!1){const n=function(){const e=new Uint32Array(56)
if("undefined"==typeof crypto){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",t=e.length
let r=""
for(let n=0;n<56;n++)r+=e.charAt(Math.floor(Math.random()*t))
return r}return crypto.getRandomValues(e),Array.from(e,lt).join("")}()
let s=n
r&&(s+="/PASSWORD_RECOVERY"),await Pa(e,"".concat(t,"-code-verifier"),s)
const a=await async function(e){if("undefined"==typeof crypto||void 0===crypto.subtle||"undefined"==typeof TextEncoder)return e
const t=await async function(e){const t=(new TextEncoder).encode(e),r=await crypto.subtle.digest("SHA-256",t),n=new Uint8Array(r)
return Array.from(n).map(e=>String.fromCharCode(e)).join("")}(e)
return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}(n)
return[a,n===a?"plain":"s256"]}function ut(e){if(!La.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function dt(){return new Proxy({},{get:(e,t)=>{if("__isUserNotAvailableProxy"===t)return!0
if("symbol"==typeof t){const e=t.toString()
if("Symbol(Symbol.toPrimitive)"===e||"Symbol(Symbol.toStringTag)"===e||"Symbol(util.inspect.custom)"===e)return}throw new Error('@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "'.concat(t,'" property of the session object is not supported. Please use getUser() instead.'))},set:(e,t)=>{throw new Error('@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "'.concat(t,'" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.'))},deleteProperty:(e,t)=>{throw new Error('@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "'.concat(t,'" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.'))}})}function ht(e){return JSON.parse(JSON.stringify(e))}async function pt(e){var t,r
if(!("object"==typeof(r=e)&&null!==r&&"status"in r&&"ok"in r&&"json"in r&&"function"==typeof r.json))throw new wa(Da(e),0)
if(Ua.includes(e.status))throw new wa(Da(e),e.status)
let n,s
try{n=await e.json()}catch(i){throw new fa(Da(i),i)}const a=function(e){const t=e.headers.get(ca)
if(!t)return null
if(!t.match(za))return null
try{return new Date("".concat(t,"T00:00:00.0Z"))}catch(i){return null}}(e)
if(a&&a.getTime()>=ua.timestamp&&"object"==typeof n&&n&&"string"==typeof n.code?s=n.code:"object"==typeof n&&n&&"string"==typeof n.error_code&&(s=n.error_code),s){if("weak_password"===s)throw new ka(Da(n),e.status,(null===(t=n.weak_password)||void 0===t?void 0:t.reasons)||[])
if("session_not_found"===s)throw new ga}else if("object"==typeof n&&n&&"object"==typeof n.weak_password&&n.weak_password&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.reasons.reduce((e,t)=>e&&"string"==typeof t,!0))throw new ka(Da(n),e.status,n.weak_password.reasons)
throw new pa(Da(n),e.status||500,s)}async function ft(e,t,r,n){var s
const a=Object.assign({},null==n?void 0:n.headers)
a[ca]||(a[ca]=ua.name),(null==n?void 0:n.jwt)&&(a.Authorization="Bearer ".concat(n.jwt))
const i=null!==(s=null==n?void 0:n.query)&&void 0!==s?s:{};(null==n?void 0:n.redirectTo)&&(i.redirect_to=n.redirectTo)
const o=Object.keys(i).length?"?"+new URLSearchParams(i).toString():"",l=await async function(e,t,r,n,s,a){const i=((e,t,r,n)=>{const s={method:e,headers:(null==t?void 0:t.headers)||{}}
return"GET"===e?s:(s.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},null==t?void 0:t.headers),s.body=JSON.stringify(n),Object.assign(Object.assign({},s),{}))})(t,n,0,a)
let o
try{o=await e(r,Object.assign({},i))}catch(l){throw new wa(Da(l),0)}if(o.ok||await pt(o),null==n?void 0:n.noResolveJson)return o
try{return await o.json()}catch(l){await pt(l)}}(e,t,r+o,{headers:a,noResolveJson:null==n?void 0:n.noResolveJson},0,null==n?void 0:n.body)
return(null==n?void 0:n.xform)?null==n?void 0:n.xform(l):{data:Object.assign({},l),error:null}}function mt(e){var t
let r=null
var n
return function(e){return e.access_token&&e.refresh_token&&e.expires_in}(e)&&(r=Object.assign({},e),e.expires_at||(r.expires_at=(n=e.expires_in,Math.round(Date.now()/1e3)+n))),{data:{session:r,user:null!==(t=e.user)&&void 0!==t?t:e},error:null}}function gt(e){const t=mt(e)
return!t.error&&e.weak_password&&"object"==typeof e.weak_password&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&"string"==typeof e.weak_password.message&&e.weak_password.reasons.reduce((e,t)=>e&&"string"==typeof t,!0)&&(t.data.weak_password=e.weak_password),t}function bt(e){var t
return{data:{user:null!==(t=e.user)&&void 0!==t?t:e},error:null}}function yt(e){return{data:e,error:null}}function vt(e){const{action_link:t,email_otp:r,hashed_token:n,redirect_to:s,verification_type:a}=e,i=te(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"])
return{data:{properties:{action_link:t,email_otp:r,hashed_token:n,redirect_to:s,verification_type:a},user:Object.assign({},i)},error:null}}function xt(e){return e}function wt(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}async function kt(e,t,r){const n=new globalThis.AbortController
return t>0&&setTimeout(()=>{n.abort()},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,0===t?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async n=>{if(!n){if(0===t)throw new qa('Acquiring an exclusive Navigator LockManager lock "'.concat(e,'" immediately failed'))
if(Wa.debug)try{await globalThis.navigator.locks.query()}catch(s){}return await r()}try{return await r()}finally{}}))}function jt(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw new Error('@supabase/auth-js: Address "'.concat(e,'" is invalid.'))
return e.toLowerCase()}function St(e){const t=(new TextEncoder).encode(e)
return"0x"+Array.from(t,e=>e.toString(16).padStart(2,"0")).join("")}function _t({error:e,options:t}){var r,n,s
const{publicKey:a}=t
if(!a)throw Error("options was missing required publicKey property")
if("AbortError"===e.name){if(t.signal instanceof AbortSignal)return new Ka({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else if("ConstraintError"===e.name){if(!0===(null===(r=a.authenticatorSelection)||void 0===r?void 0:r.requireResidentKey))return new Ka({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:e})
if("conditional"===t.mediation&&"required"===(null===(n=a.authenticatorSelection)||void 0===n?void 0:n.userVerification))return new Ka({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:e})
if("required"===(null===(s=a.authenticatorSelection)||void 0===s?void 0:s.userVerification))return new Ka({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:e})}else{if("InvalidStateError"===e.name)return new Ka({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:e})
if("NotAllowedError"===e.name)return new Ka({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})
if("NotSupportedError"===e.name)return 0===a.pubKeyCredParams.filter(e=>"public-key"===e.type).length?new Ka({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:e}):new Ka({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:e})
if("SecurityError"===e.name){const t=window.location.hostname
if(!Pt(t))return new Ka({message:"".concat(window.location.hostname," is an invalid domain"),code:"ERROR_INVALID_DOMAIN",cause:e})
if(a.rp.id!==t)return new Ka({message:'The RP ID "'.concat(a.rp.id,'" is invalid for this domain'),code:"ERROR_INVALID_RP_ID",cause:e})}else if("TypeError"===e.name){if(a.user.id.byteLength<1||a.user.id.byteLength>64)return new Ka({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:e})}else if("UnknownError"===e.name)return new Ka({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return new Ka({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})}function Nt({error:e,options:t}){const{publicKey:r}=t
if(!r)throw Error("options was missing required publicKey property")
if("AbortError"===e.name){if(t.signal instanceof AbortSignal)return new Ka({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else{if("NotAllowedError"===e.name)return new Ka({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})
if("SecurityError"===e.name){const t=window.location.hostname
if(!Pt(t))return new Ka({message:"".concat(window.location.hostname," is an invalid domain"),code:"ERROR_INVALID_DOMAIN",cause:e})
if(r.rpId!==t)return new Ka({message:'The RP ID "'.concat(r.rpId,'" is invalid for this domain'),code:"ERROR_INVALID_RP_ID",cause:e})}else if("UnknownError"===e.name)return new Ka({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return new Ka({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})}function Et(e){if(!e)throw new Error("Credential creation options are required")
if("undefined"!=typeof PublicKeyCredential&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&"function"==typeof PublicKeyCredential.parseCreationOptionsFromJSON)return PublicKeyCredential.parseCreationOptionsFromJSON(e)
const{challenge:t,user:r,excludeCredentials:n}=e,s=te(e,["challenge","user","excludeCredentials"]),a=at(t).buffer,i=Object.assign(Object.assign({},r),{id:at(r.id).buffer}),o=Object.assign(Object.assign({},s),{challenge:a,user:i})
if(n&&n.length>0){o.excludeCredentials=new Array(n.length)
for(let e=0;e<n.length;e++){const t=n[e]
o.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:at(t.id).buffer,type:t.type||"public-key",transports:t.transports})}}return o}function Tt(e){if(!e)throw new Error("Credential request options are required")
if("undefined"!=typeof PublicKeyCredential&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&"function"==typeof PublicKeyCredential.parseRequestOptionsFromJSON)return PublicKeyCredential.parseRequestOptionsFromJSON(e)
const{challenge:t,allowCredentials:r}=e,n=te(e,["challenge","allowCredentials"]),s=at(t).buffer,a=Object.assign(Object.assign({},n),{challenge:s})
if(r&&r.length>0){a.allowCredentials=new Array(r.length)
for(let e=0;e<r.length;e++){const t=r[e]
a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:at(t.id).buffer,type:t.type||"public-key",transports:t.transports})}}return a}function Ct(e){var t
if("toJSON"in e&&"function"==typeof e.toJSON)return e.toJSON()
const r=e
return{id:e.id,rawId:e.id,response:{attestationObject:it(new Uint8Array(e.response.attestationObject)),clientDataJSON:it(new Uint8Array(e.response.clientDataJSON))},type:"public-key",clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:null!==(t=r.authenticatorAttachment)&&void 0!==t?t:void 0}}function Rt(e){var t
if("toJSON"in e&&"function"==typeof e.toJSON)return e.toJSON()
const r=e,n=e.getClientExtensionResults(),s=e.response
return{id:e.id,rawId:e.id,response:{authenticatorData:it(new Uint8Array(s.authenticatorData)),clientDataJSON:it(new Uint8Array(s.clientDataJSON)),signature:it(new Uint8Array(s.signature)),userHandle:s.userHandle?it(new Uint8Array(s.userHandle)):void 0},type:"public-key",clientExtensionResults:n,authenticatorAttachment:null!==(t=r.authenticatorAttachment)&&void 0!==t?t:void 0}}function Pt(e){return"localhost"===e||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function At(){var e,t
return!!(Ea()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&"function"==typeof(null===(e=null===navigator||void 0===navigator?void 0:navigator.credentials)||void 0===e?void 0:e.create)&&"function"==typeof(null===(t=null===navigator||void 0===navigator?void 0:navigator.credentials)||void 0===t?void 0:t.get))}function Ot(...e){const t=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),r=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),n={}
for(const s of e)if(s)for(const e in s){const a=s[e]
if(void 0!==a)if(Array.isArray(a))n[e]=a
else if(r(a))n[e]=a
else if(t(a)){const r=n[e]
t(r)?n[e]=Ot(r,a):n[e]=Ot(a)}else n[e]=a}return n}async function It(e,t,r){return await r()}function zt(){if(si)return sa
si=1,Object.defineProperty(sa,"__esModule",{value:!0}),sa.SupabaseAuthClient=void 0
const e=ni
let t=class extends e.AuthClient{constructor(e){super(e)}}
return sa.SupabaseAuthClient=t,sa}function Lt(){if(ai)return Yr
ai=1,Object.defineProperty(Yr,"__esModule",{value:!0})
const e=un,t=ze(),r=ps,n=Js,s=Ge(),a=Ye(),i=Je(),o=zt()
return Yr.default=class{constructor(e,r,o){var l,c,u
this.supabaseUrl=e,this.supabaseKey=r
const d=(0,i.validateSupabaseUrl)(e)
if(!r)throw new Error("supabaseKey is required.")
this.realtimeUrl=new URL("realtime/v1",d),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",d),this.storageUrl=new URL("storage/v1",d),this.functionsUrl=new URL("functions/v1",d)
const h="sb-".concat(d.hostname.split(".")[0],"-auth-token"),p={db:s.DEFAULT_DB_OPTIONS,realtime:s.DEFAULT_REALTIME_OPTIONS,auth:Object.assign(Object.assign({},s.DEFAULT_AUTH_OPTIONS),{storageKey:h}),global:s.DEFAULT_GLOBAL_OPTIONS},f=(0,i.applySettingDefaults)(null!=o?o:{},p)
this.storageKey=null!==(l=f.auth.storageKey)&&void 0!==l?l:"",this.headers=null!==(c=f.global.headers)&&void 0!==c?c:{},f.accessToken?(this.accessToken=f.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw new Error("@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.".concat(String(t)," is not possible"))}})):this.auth=this._initSupabaseAuthClient(null!==(u=f.auth)&&void 0!==u?u:{},this.headers,f.global.fetch),this.fetch=(0,a.fetchWithAuth)(r,this._getAccessToken.bind(this),f.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},f.realtime)),this.accessToken&&this.accessToken().then(e=>this.realtime.setAuth(e)).catch(()=>{}),this.rest=new t.PostgrestClient(new URL("rest/v1",d).href,{headers:this.headers,schema:f.db.schema,fetch:this.fetch}),this.storage=new n.StorageClient(this.storageUrl.href,this.headers,this.fetch,null==o?void 0:o.storage),f.accessToken||this._listenForAuthEvents()}get functions(){return new e.FunctionsClient(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},r={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,r)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e,t
if(this.accessToken)return await this.accessToken()
const{data:r}=await this.auth.getSession()
return null!==(t=null===(e=r.session)||void 0===e?void 0:e.access_token)&&void 0!==t?t:this.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:r,storage:n,userStorage:s,storageKey:a,flowType:i,lock:l,debug:c,throwOnError:u},d,h){const p={Authorization:"Bearer ".concat(this.supabaseKey),apikey:"".concat(this.supabaseKey)}
return new o.SupabaseAuthClient({url:this.authUrl.href,headers:Object.assign(Object.assign({},p),d),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:r,storage:n,userStorage:s,flowType:i,lock:l,debug:c,throwOnError:u,fetch:h,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>"authorization"===e.toLowerCase())})}_initRealtimeClient(e){return new r.RealtimeClient(this.realtimeUrl.href,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},null==e?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,"CLIENT",null==t?void 0:t.access_token)})}_handleTokenChanged(e,t,r){"TOKEN_REFRESHED"!==e&&"SIGNED_IN"!==e||this.changedAccessToken===r?"SIGNED_OUT"===e&&(this.realtime.setAuth(),"STORAGE"==t&&this.auth.signOut(),this.changedAccessToken=void 0):(this.changedAccessToken=r,this.realtime.setAuth(r))}},Yr}function Dt(){return ii||(ii=1,function(e){var t=Gr&&Gr.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var s=Object.getOwnPropertyDescriptor(t,r)
s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,s)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),r=Gr&&Gr.__exportStar||function(e,r){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(r,n)||t(r,e,n)},n=Gr&&Gr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(e,"__esModule",{value:!0}),e.createClient=e.SupabaseClient=e.FunctionRegion=e.FunctionsError=e.FunctionsRelayError=e.FunctionsFetchError=e.FunctionsHttpError=e.PostgrestError=void 0
const s=n(Lt())
r(ni,e)
var a=ze()
Object.defineProperty(e,"PostgrestError",{enumerable:!0,get:function(){return a.PostgrestError}})
var i=un
Object.defineProperty(e,"FunctionsHttpError",{enumerable:!0,get:function(){return i.FunctionsHttpError}}),Object.defineProperty(e,"FunctionsFetchError",{enumerable:!0,get:function(){return i.FunctionsFetchError}}),Object.defineProperty(e,"FunctionsRelayError",{enumerable:!0,get:function(){return i.FunctionsRelayError}}),Object.defineProperty(e,"FunctionsError",{enumerable:!0,get:function(){return i.FunctionsError}}),Object.defineProperty(e,"FunctionRegion",{enumerable:!0,get:function(){return i.FunctionRegion}}),r(ps,e)
var o=Lt()
Object.defineProperty(e,"SupabaseClient",{enumerable:!0,get:function(){return n(o).default}}),e.createClient=(e,t,r)=>new s.default(e,t,r),function(){if("undefined"!=typeof window)return!1
if("undefined"==typeof process)return!1
const e=process.version
if(null==e)return!1
const t=e.match(/^v(\d+)\./)
t&&parseInt(t[1],10)}()}(Gr)),Gr}async function Ut(e){const{data:t,error:r}=await Qi.from("profiles").select("*").eq("id",e.id).maybeSingle()
return r?null:null!=t?t:null}function Ft(){return er.jsx($,{children:er.jsx(lo,{children:er.jsx(ro,{children:er.jsx(io,{children:er.jsx(vl,{})})})})})}function Bt(e){return xl.some(t=>e.toLowerCase().includes(t.toLowerCase()))}function Wt(){if("undefined"!=typeof window&&void 0!==window.localStorage)try{const e=[]
for(let t=0;t<window.localStorage.length;t++){const r=window.localStorage.key(t)
r&&Bt(r)&&e.push(r)}e.forEach(e=>{window.localStorage.removeItem(e)})}catch(e){}}!function(){function e(e){if(e.ep)return
e.ep=!0
const t=function(e){const t={}
return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e)
fetch(e.href,t)}const t=document.createElement("link").relList
if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t)
new MutationObserver(t=>{for(const r of t)if("childList"===r.type)for(const t of r.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)}).observe(document,{childList:!0,subtree:!0})}}()
var Vt,qt,Mt,Ht,Kt,Gt,Yt,Jt,Xt,Zt,$t={exports:{}},Qt={},er=(qt||(qt=1,$t.exports=function(){function e(e,r,n){var s=null
if(void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),"key"in r)for(var a in n={},r)"key"!==a&&(n[a]=r[a])
else n=r
return r=n.ref,{$$typeof:t,type:e,key:s,ref:void 0!==r?r:null,props:n}}if(Vt)return Qt
Vt=1
var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment")
return Qt.Fragment=r,Qt.jsx=e,Qt.jsxs=e,Qt}()),$t.exports),tr={exports:{}},rr={},nr=a(),sr={exports:{}},ar={},ir={exports:{}},or={},lr={exports:{}},cr={},ur=(Zt||(Zt=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),sr.exports=function(){function e(e,t){var r="https://react.dev/errors/"+e
if(1<arguments.length){r+="?args[]="+encodeURIComponent(t)
for(var n=2;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function r(e){var t=e,r=e
if(e.alternate)for(;t.return;)t=t.return
else{e=t
do{!!(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function n(e){if(13===e.tag){var t=e.memoizedState
if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function s(e){if(31===e.tag){var t=e.memoizedState
if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function i(t){if(r(t)!==t)throw Error(e(188))}function o(e){var t=e.tag
if(5===t||26===t||27===t||6===t)return e
for(e=e.child;null!==e;){if(null!==(t=o(e)))return t
e=e.sibling}return null}function l(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=$o&&e[$o]||e["@@iterator"])?e:null}function c(e){if(null==e)return null
if("function"==typeof e)return e.$$typeof===Qo?null:e.displayName||e.name||null
if("string"==typeof e)return e
switch(e){case Bo:return"Fragment"
case Vo:return"Profiler"
case Wo:return"StrictMode"
case Ko:return"Suspense"
case Go:return"SuspenseList"
case Xo:return"Activity"}if("object"==typeof e)switch(e.$$typeof){case Fo:return"Portal"
case Mo:return e.displayName||"Context"
case qo:return(e._context.displayName||"Context")+".Consumer"
case Ho:var t=e.render
return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e
case Yo:return null!==(t=e.displayName||null)?t:c(e.type)||"Memo"
case Jo:t=e._payload,e=e._init
try{return c(e(t))}catch(r){}}return null}function u(e){return{current:e}}function d(e){0>al||(e.current=sl[al],sl[al]=null,al--)}function h(e,t){al++,sl[al]=e.current,e.current=t}function p(e,t){switch(h(ll,t),h(ol,e),h(il,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ni(e):0
break
default:if(e=t.tagName,t=t.namespaceURI)e=Ei(t=Ni(t),e)
else switch(e){case"svg":e=1
break
case"math":e=2
break
default:e=0}}d(il),h(il,e)}function f(){d(il),d(ol),d(ll)}function m(e){null!==e.memoizedState&&h(cl,e)
var t=il.current,r=Ei(t,e.type)
t!==r&&(h(ol,e),h(il,r))}function g(e){ol.current===e&&(d(il),d(ol)),cl.current===e&&(d(cl),Vh._currentValue=nl)}function b(e){if(void 0===Oo)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/)
Oo=t&&t[1]||"",Io=-1<r.stack.indexOf("\n    at")?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Oo+e+Io}function y(e,t){if(!e||ul)return""
ul=!0
var r=Error.prepareStackTrace
Error.prepareStackTrace=void 0
try{var n={DetermineComponentFrameRoot:function(){try{if(t){var r=function(){throw Error()}
if(Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(r,[])}catch(s){var n=s}Reflect.construct(e,[],r)}else{try{r.call()}catch(a){n=a}e.call(r.prototype)}}else{try{throw Error()}catch(i){n=i}(r=e())&&"function"==typeof r.catch&&r.catch(function(){})}}catch(o){if(o&&n&&"string"==typeof o.stack)return[o.stack,n.stack]}return[null,null]}}
n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot"
var s=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name")
s&&s.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"})
var a=n.DetermineComponentFrameRoot(),i=a[0],o=a[1]
if(i&&o){var l=i.split("\n"),c=o.split("\n")
for(s=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++
for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++
if(n===l.length||s===c.length)for(n=l.length-1,s=c.length-1;1<=n&&0<=s&&l[n]!==c[s];)s--
for(;1<=n&&0<=s;n--,s--)if(l[n]!==c[s]){if(1!==n||1!==s)do{if(n--,0>--s||l[n]!==c[s]){var u="\n"+l[n].replace(" at new "," at ")
return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=n&&0<=s)
break}}}finally{ul=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?b(r):""}function v(e,t){switch(e.tag){case 26:case 27:case 5:return b(e.type)
case 16:return b("Lazy")
case 13:return e.child!==t&&null!==t?b("Suspense Fallback"):b("Suspense")
case 19:return b("SuspenseList")
case 0:case 15:return y(e.type,!1)
case 11:return y(e.type.render,!1)
case 1:return y(e.type,!0)
case 31:return b("Activity")
default:return""}}function x(e){try{var t="",r=null
do{t+=v(e,r),r=e,e=e.return}while(e)
return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function w(e){if("function"==typeof jl&&Sl(e),Nl&&"function"==typeof Nl.setStrictMode)try{Nl.setStrictMode(_l,e)}catch(t){}}function k(e){var t=42&e
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
var s=0,a=e.suspendedLanes,i=e.pingedLanes
e=e.warmLanes
var o=134217727&n
return 0!==o?0!==(n=o&~a)?s=k(n):0!==(i&=o)?s=k(i):r||0!==(r=o&~e)&&(s=k(r)):0!==(o=n&~a)?s=k(o):0!==i?s=k(i):r||0!==(r=n&~e)&&(s=k(r)),0===s?0:0!==t&&t!==s&&0===(t&a)&&((a=s&-s)>=(r=t&-t)||32===a&&4194048&r)?t:s}function S(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function _(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250
case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3
default:return-1}}function N(){var e=Al
return!(62914560&(Al<<=1))&&(Al=4194304),e}function E(e){for(var t=[],r=0;31>r;r++)t.push(e)
return t}function T(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function C(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t
var n=31-El(t)
e.entangledLanes|=t,e.entanglements[n]=1073741824|e.entanglements[n]|261930&r}function R(e,t){var r=e.entangledLanes|=t
for(e=e.entanglements;r;){var n=31-El(r),s=1<<n
s&t|e[n]&t&&(e[n]|=t),r&=~s}}function P(e,t){var r=t&-t
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
try{return rl.p=e,t()}finally{rl.p=r}}function L(e){delete e[Il],delete e[zl],delete e[Dl],delete e[Ul],delete e[Fl]}function D(e){var t=e[Il]
if(t)return t
for(var r=e.parentNode;r;){if(t=r[Ll]||r[Il]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=Fi(e);null!==e;){if(r=e[Il])return r
e=Fi(e)}return t}r=(e=r).parentNode}return null}function U(e){if(e=e[Il]||e[Ll]){var t=e.tag
if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function F(t){var r=t.tag
if(5===r||26===r||27===r||6===r)return t.stateNode
throw Error(e(33))}function B(e){var t=e[Bl]
return t||(t=e[Bl]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function W(e){e[Wl]=!0}function V(e,t){q(e,t),q(e+"Capture",t)}function q(e,t){for(ql[e]=t,e=0;e<t.length;e++)Vl.add(t[e])}function M(e,t,r){if(s=t,dl.call(Kl,s)||!dl.call(Hl,s)&&(Ml.test(s)?Kl[s]=!0:(Hl[s]=!0,0)))if(null===r)e.removeAttribute(t)
else{switch(typeof r){case"undefined":case"function":case"symbol":return void e.removeAttribute(t)
case"boolean":var n=t.toLowerCase().slice(0,5)
if("data-"!==n&&"aria-"!==n)return void e.removeAttribute(t)}e.setAttribute(t,""+r)}var s}function H(e,t,r){if(null===r)e.removeAttribute(t)
else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+r)}}function K(e,t,r,n){if(null===n)e.removeAttribute(r)
else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(r)}e.setAttributeNS(t,r,""+n)}}function G(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e
default:return""}}function Y(e){var t=e.type
return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function J(e){if(!e._valueTracker){var t=Y(e)?"checked":"value"
e._valueTracker=function(e,t,r){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t)
if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var s=n.get,a=n.set
return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function X(e){if(!e)return!1
var t=e._valueTracker
if(!t)return!0
var r=t.getValue(),n=""
return e&&(n=Y(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function Z(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null
try{return e.activeElement||e.body}catch(t){return e.body}}function $(e){return e.replace(Gl,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Q(e,t,r,n,s,a,i,o){e.name="",null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+G(t)):e.value!==""+G(t)&&(e.value=""+G(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?te(e,i,G(t)):null!=r?te(e,i,G(r)):null!=n&&e.removeAttribute("value"),null==s&&null!=a&&(e.defaultChecked=!!a),null!=s&&(e.checked=s&&"function"!=typeof s&&"symbol"!=typeof s),null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o?e.name=""+G(o):e.removeAttribute("name")}function ee(e,t,r,n,s,a,i,o){if(null!=a&&"function"!=typeof a&&"symbol"!=typeof a&&"boolean"!=typeof a&&(e.type=a),null!=t||null!=r){if(("submit"===a||"reset"===a)&&null==t)return void J(e)
r=null!=r?""+G(r):"",t=null!=t?""+G(t):r,o||t===e.value||(e.value=t),e.defaultValue=t}n="function"!=typeof(n=null!=n?n:s)&&"symbol"!=typeof n&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i&&(e.name=i),J(e)}function te(e,t,r){"number"===t&&Z(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function re(e,t,r,n){if(e=e.options,t){t={}
for(var s=0;s<r.length;s++)t["$"+r[s]]=!0
for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+G(r),t=null,s=0;s<e.length;s++){if(e[s].value===r)return e[s].selected=!0,void(n&&(e[s].defaultSelected=!0))
null!==t||e[s].disabled||(t=e[s])}null!==t&&(t.selected=!0)}}function ne(e,t,r){null==t||((t=""+G(t))!==e.value&&(e.value=t),null!=r)?e.defaultValue=null!=r?""+G(r):"":e.defaultValue!==t&&(e.defaultValue=t)}function se(t,r,n,s){if(null==r){if(null!=s){if(null!=n)throw Error(e(92))
if(el(s)){if(1<s.length)throw Error(e(93))
s=s[0]}n=s}null==n&&(n=""),r=n}n=G(r),t.defaultValue=n,(s=t.textContent)===n&&""!==s&&null!==s&&(t.value=s),J(t)}function ae(e,t){if(t){var r=e.firstChild
if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}function ie(e,t,r){var n=0===t.indexOf("--")
null==r||"boolean"==typeof r||""===r?n?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":n?e.setProperty(t,r):"number"!=typeof r||0===r||Yl.has(t)?"float"===t?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function oe(t,r,n){if(null!=r&&"object"!=typeof r)throw Error(e(62))
if(t=t.style,null!=n){for(var s in n)!n.hasOwnProperty(s)||null!=r&&r.hasOwnProperty(s)||(0===s.indexOf("--")?t.setProperty(s,""):"float"===s?t.cssFloat="":t[s]="")
for(var a in r)s=r[a],r.hasOwnProperty(a)&&n[a]!==s&&ie(t,a,s)}else for(var i in r)r.hasOwnProperty(i)&&ie(t,i,r[i])}function le(e){if(-1===e.indexOf("-"))return!1
switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1
default:return!0}}function ce(e){return Xl.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ue(){}function de(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function he(t){var r=U(t)
if(r&&(t=r.stateNode)){var n=t[zl]||null
e:switch(t=r.stateNode,r.type){case"input":if(Q(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),r=n.name,"radio"===n.type&&null!=r){for(n=t;n.parentNode;)n=n.parentNode
for(n=n.querySelectorAll('input[name="'+$(""+r)+'"][type="radio"]'),r=0;r<n.length;r++){var s=n[r]
if(s!==t&&s.form===t.form){var a=s[zl]||null
if(!a)throw Error(e(90))
Q(s,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(r=0;r<n.length;r++)(s=n[r]).form===t.form&&X(s)}break e
case"textarea":ne(t,n.value,n.defaultValue)
break e
case"select":null!=(r=n.value)&&re(t,!!n.multiple,r,!1)}}}function pe(e,t,r){if(ec)return e(t,r)
ec=!0
try{return e(t)}finally{if(ec=!1,(null!==$l||null!==Ql)&&(ja(),$l&&(t=$l,e=Ql,Ql=$l=null,he(t),e)))for(t=0;t<e.length;t++)he(e[t])}}function fe(t,r){var n=t.stateNode
if(null===n)return null
var s=n[zl]||null
if(null===s)return null
n=s[r]
e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(s=!("button"===(t=t.type)||"input"===t||"select"===t||"textarea"===t)),t=!s
break e
default:t=!1}if(t)return null
if(n&&"function"!=typeof n)throw Error(e(231,r,typeof n))
return n}function me(){if(cc)return cc
var e,t,r=lc,n=r.length,s="value"in oc?oc.value:oc.textContent,a=s.length
for(e=0;e<n&&r[e]===s[e];e++);var i=n-e
for(t=1;t<=i&&r[n-t]===s[a-t];t++);return cc=s.slice(e,1<t?1-t:void 0)}function ge(e){var t=e.keyCode
return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function be(){return!0}function ye(){return!1}function ve(e){function t(t,r,n,s,a){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(s):s[i])
return this.isDefaultPrevented=(null!=s.defaultPrevented?s.defaultPrevented:!1===s.returnValue)?be:ye,this.isPropagationStopped=ye,this}return Lo(t.prototype,{preventDefault:function(){this.defaultPrevented=!0
var e=this.nativeEvent
e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var e=this.nativeEvent
e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){},isPersistent:be}),t}function xe(e){var t=this.nativeEvent
return t.getModifierState?t.getModifierState(e):!!(e=jc[e])&&!!t[e]}function we(){return xe}function ke(e,t){switch(e){case"keyup":return-1!==Rc.indexOf(t.keyCode)
case"keydown":return 229!==t.keyCode
case"keypress":case"mousedown":case"focusout":return!0
default:return!1}}function je(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}function Se(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return"input"===t?!!Uc[e.type]:"textarea"===t}function _e(e,t,r,n){$l?Ql?Ql.push(n):Ql=[n]:$l=n,0<(t=gi(t,"onChange")).length&&(r=new dc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}function Ne(e){ci(e,0)}function Ee(e){if(X(F(e)))return e}function Te(e,t){if("change"===e)return t}function Ce(){Fc&&(Fc.detachEvent("onpropertychange",Re),Bc=Fc=null)}function Re(e){if("value"===e.propertyName&&Ee(Bc)){var t=[]
_e(t,Bc,e,de(e)),pe(Ne,t)}}function Pe(e,t,r){"focusin"===e?(Ce(),Bc=r,(Fc=t).attachEvent("onpropertychange",Re)):"focusout"===e&&Ce()}function Ae(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Ee(Bc)}function Oe(e,t){if("click"===e)return Ee(t)}function Ie(e,t){if("input"===e||"change"===e)return Ee(t)}function ze(e,t){if(Hc(e,t))return!0
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1
var r=Object.keys(e),n=Object.keys(t)
if(r.length!==n.length)return!1
for(n=0;n<r.length;n++){var s=r[n]
if(!dl.call(t,s)||!Hc(e[s],t[s]))return!1}return!0}function Le(e){for(;e&&e.firstChild;)e=e.firstChild
return e}function De(e,t){var r,n=Le(e)
for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e}
e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling
break e}n=n.parentNode}n=void 0}n=Le(n)}}function Ue(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Ue(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Fe(e){for(var t=Z((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var r="string"==typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break
t=Z((e=t.contentWindow).document)}return t}function Be(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function We(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument
Xc||null==Gc||Gc!==Z(n)||(n="selectionStart"in(n=Gc)&&Be(n)?{start:n.selectionStart,end:n.selectionEnd}:{anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},Jc&&ze(Jc,n)||(Jc=n,0<(n=gi(Yc,"onSelect")).length&&(t=new dc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Gc)))}function Ve(e,t){var r={}
return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}function qe(e){if($c[e])return $c[e]
if(!Zc[e])return e
var t,r=Zc[e]
for(t in r)if(r.hasOwnProperty(t)&&t in Qc)return $c[e]=r[t]
return e}function Me(e,t){ou.set(e,t),V(t,[e])}function He(){for(var e=du,t=hu=du=0;t<e;){var r=uu[t]
uu[t++]=null
var n=uu[t]
uu[t++]=null
var s=uu[t]
uu[t++]=null
var a=uu[t]
if(uu[t++]=null,null!==n&&null!==s){var i=n.pending
null===i?s.next=s:(s.next=i.next,i.next=s),n.pending=s}0!==a&&Je(r,s,a)}}function Ke(e,t,r,n){uu[du++]=e,uu[du++]=t,uu[du++]=r,uu[du++]=n,hu|=n,e.lanes|=n,null!==(e=e.alternate)&&(e.lanes|=n)}function Ge(e,t,r,n){return Ke(e,t,r,n),Xe(e)}function Ye(e,t){return Ke(e,null,null,t),Xe(e)}function Je(e,t,r){e.lanes|=r
var n=e.alternate
null!==n&&(n.lanes|=r)
for(var s=!1,a=e.return;null!==a;)a.childLanes|=r,null!==(n=a.alternate)&&(n.childLanes|=r),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(s=!0)),e=a,a=a.return
return 3===e.tag?(a=e.stateNode,s&&null!==t&&(s=31-El(r),null===(n=(e=a.hiddenUpdates)[s])?e[s]=[t]:n.push(t),t.lane=536870912|r),a):null}function Xe(t){if(50<hh)throw hh=0,ph=null,Error(e(185))
for(var r=t.return;null!==r;)r=(t=r).return
return 3===t.tag?t.stateNode:null}function Ze(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,r,n){return new Ze(e,t,r,n)}function Qe(e){return!(!(e=e.prototype)||!e.isReactComponent)}function et(e,t){var r=e.alternate
return null===r?((r=$e(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=65011712&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function tt(e,t){e.flags&=65011714
var r=e.alternate
return null===r?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rt(t,r,n,s,a,i){var o=0
if(s=t,"function"==typeof t)Qe(t)&&(o=1)
else if("string"==typeof t)o=function(e,t,r){if(1===r||null!=t.itemProp)return!1
switch(e){case"meta":case"title":return!0
case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break
return!0
case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break
return"stylesheet"!==t.rel||(e=t.disabled,"string"==typeof t.precedence&&null==e)
case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return!0}return!1}(t,n,il.current)?26:"html"===t||"head"===t||"body"===t?27:5
else e:switch(t){case Xo:return(t=$e(31,n,r,a)).elementType=Xo,t.lanes=i,t
case Bo:return nt(n.children,a,i,r)
case Wo:o=8,a|=24
break
case Vo:return(t=$e(12,n,r,2|a)).elementType=Vo,t.lanes=i,t
case Ko:return(t=$e(13,n,r,a)).elementType=Ko,t.lanes=i,t
case Go:return(t=$e(19,n,r,a)).elementType=Go,t.lanes=i,t
default:if("object"==typeof t&&null!==t)switch(t.$$typeof){case Mo:o=10
break e
case qo:o=9
break e
case Ho:o=11
break e
case Yo:o=14
break e
case Jo:o=16,s=null
break e}o=29,n=Error(e(130,null===t?"null":typeof t,"")),s=null}return(r=$e(o,n,r,a)).elementType=t,r.type=s,r.lanes=i,r}function nt(e,t,r,n){return(e=$e(7,e,n,t)).lanes=r,e}function st(e,t,r){return(e=$e(6,e,null,t)).lanes=r,e}function at(e){var t=$e(18,null,null,0)
return t.stateNode=e,t}function it(e,t,r){return(t=$e(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ot(e,t){if("object"==typeof e&&null!==e){var r=fu.get(e)
return void 0!==r?r:(t={value:e,source:t,stack:x(t)},fu.set(e,t),t)}return{value:e,source:t,stack:x(t)}}function lt(e,t){mu[gu++]=yu,mu[gu++]=bu,bu=e,yu=t}function ct(e,t,r){vu[xu++]=ku,vu[xu++]=ju,vu[xu++]=wu,wu=e
var n=ku
e=ju
var s=32-El(n)-1
n&=~(1<<s),r+=1
var a=32-El(t)+s
if(30<a){var i=s-s%5
a=(n&(1<<i)-1).toString(32),n>>=i,s-=i,ku=1<<32-El(t)+s|r<<s|n,ju=a+e}else ku=1<<a|r<<s|n,ju=e}function ut(e){null!==e.return&&(lt(e,1),ct(e,1,0))}function dt(e){for(;e===bu;)bu=mu[--gu],mu[gu]=null,yu=mu[--gu],mu[gu]=null
for(;e===wu;)wu=vu[--xu],vu[xu]=null,ju=vu[--xu],vu[xu]=null,ku=vu[--xu],vu[xu]=null}function ht(e,t){vu[xu++]=ku,vu[xu++]=ju,vu[xu++]=wu,ku=t.id,ju=t.overflow,wu=e}function pt(t,r){throw vt(ot(Error(e(418,1<arguments.length&&void 0!==r&&r?"text":"HTML","")),t)),Cu}function ft(e){var t=e.stateNode,r=e.type,n=e.memoizedProps
switch(t[Il]=e,t[zl]=n,r){case"dialog":ui("cancel",t),ui("close",t)
break
case"iframe":case"object":case"embed":ui("load",t)
break
case"video":case"audio":for(r=0;r<kh.length;r++)ui(kh[r],t)
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
case"textarea":ui("invalid",t),se(t,n.value,n.defaultValue,n.children)}"string"!=typeof(r=n.children)&&"number"!=typeof r&&"bigint"!=typeof r||t.textContent===""+r||!0===n.suppressHydrationWarning||xi(t.textContent,r)?(null!=n.popover&&(ui("beforetoggle",t),ui("toggle",t)),null!=n.onScroll&&ui("scroll",t),null!=n.onScrollEnd&&ui("scrollend",t),null!=n.onClick&&(t.onclick=ue),t=!0):t=!1,t||pt(e,!0)}function mt(e){for(Su=e.return;Su;)switch(Su.tag){case 5:case 31:case 13:return void(Tu=!1)
case 27:case 3:return void(Tu=!0)
default:Su=Su.return}}function gt(t){if(t!==Su)return!1
if(!Nu)return mt(t),Nu=!0,!1
var r,n=t.tag
if((r=3!==n&&27!==n)&&((r=5===n)&&(r=!("form"!==(r=t.type)&&"button"!==r)||Ti(t.type,t.memoizedProps)),r=!r),r&&_u&&pt(t),mt(t),13===n){if(!(t=null!==(t=t.memoizedState)?t.dehydrated:null))throw Error(e(317))
_u=Ui(t)}else if(31===n){if(!(t=null!==(t=t.memoizedState)?t.dehydrated:null))throw Error(e(317))
_u=Ui(t)}else 27===n?(n=_u,Ri(t.type)?(t=Ih,Ih=null,_u=t):_u=n):_u=Su?Di(t.stateNode.nextSibling):null
return!0}function bt(){_u=Su=null,Nu=!1}function yt(){var e=Eu
return null!==e&&(null===$d?$d=e:$d.push.apply($d,e),Eu=null),e}function vt(e){null===Eu?Eu=[e]:Eu.push(e)}function xt(e,t,r){h(Ru,t._currentValue),t._currentValue=r}function wt(e){e._currentValue=Ru.current,d(Ru)}function kt(e,t,r){for(;null!==e;){var n=e.alternate
if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break
e=e.return}}function jt(t,r,n,s){var a=t.child
for(null!==a&&(a.return=t);null!==a;){var i=a.dependencies
if(null!==i){var o=a.child
i=i.firstContext
e:for(;null!==i;){var l=i
i=a
for(var c=0;c<r.length;c++)if(l.context===r[c]){i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),kt(i.return,n,t),s||(o=null)
break e}i=l.next}}else if(18===a.tag){if(null===(o=a.return))throw Error(e(341))
o.lanes|=n,null!==(i=o.alternate)&&(i.lanes|=n),kt(o,n,t),o=null}else o=a.child
if(null!==o)o.return=a
else for(o=a;null!==o;){if(o===t){o=null
break}if(null!==(a=o.sibling)){a.return=o.return,o=a
break}o=o.return}a=o}}function St(t,r,n,s){t=null
for(var a=r,i=!1;null!==a;){if(!i)if(524288&a.flags)i=!0
else if(262144&a.flags)break
if(10===a.tag){var o=a.alternate
if(null===o)throw Error(e(387))
if(null!==(o=o.memoizedProps)){var l=a.type
Hc(a.pendingProps.value,o.value)||(null!==t?t.push(l):t=[l])}}else if(a===cl.current){if(null===(o=a.alternate))throw Error(e(387))
o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==t?t.push(Vh):t=[Vh])}a=a.return}null!==t&&jt(r,t,n,s),r.flags|=262144}function _t(e){for(e=e.firstContext;null!==e;){if(!Hc(e.context._currentValue,e.memoizedValue))return!0
e=e.next}return!1}function Nt(e){Pu=e,Au=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Et(e){return Ct(Pu,e)}function Tt(e,t){return null===Pu&&Nt(e),Ct(e,t)}function Ct(t,r){var n=r._currentValue
if(r={context:r,memoizedValue:n,next:null},null===Au){if(null===t)throw Error(e(308))
Au=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Au=Au.next=r
return n}function Rt(){return{controller:new Ou,data:new Map,refCount:0}}function Pt(e){e.refCount--,0===e.refCount&&Iu(zu,function(){e.controller.abort()})}function At(){if(0===--Uu&&null!==Du){null!==Bu&&(Bu.status="fulfilled")
var e=Du
Du=null,Fu=0,Bu=null
for(var t=0;t<e.length;t++)(0,e[t])()}}function Ot(){var e=Vu.current
return null!==e?e:Ld.pooledCache}function It(e,t){h(Vu,null===t?Vu.current:t.pool)}function zt(){var e=Ot()
return null===e?null:{parent:Lu._currentValue,pool:e}}function Lt(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Dt(t,r,n){switch(void 0===(n=t[n])?t.push(r):n!==r&&(r.then(ue,ue),r=n),r.status){case"fulfilled":return r.value
case"rejected":throw Bt(t=r.reason),t
default:if("string"==typeof r.status)r.then(ue,ue)
else{if(null!==(t=Ld)&&100<t.shellSuspendCounter)throw Error(e(482));(t=r).status="pending",t.then(function(e){if("pending"===r.status){var t=r
t.status="fulfilled",t.value=e}},function(e){if("pending"===r.status){var t=r
t.status="rejected",t.reason=e}})}switch(r.status){case"fulfilled":return r.value
case"rejected":throw Bt(t=r.reason),t}throw Gu=r,qu}}function Ut(e){try{return(0,e._init)(e._payload)}catch(t){if(null!==t&&"object"==typeof t&&"function"==typeof t.then)throw Gu=t,qu
throw t}}function Ft(){if(null===Gu)throw Error(e(459))
var t=Gu
return Gu=null,t}function Bt(t){if(t===qu||t===Hu)throw Error(e(483))}function Wt(e){var t=Ju
return Ju+=1,null===Yu&&(Yu=[]),Dt(Yu,e,t)}function Vt(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function qt(t,r){if(r.$$typeof===Do)throw Error(e(525))
throw t=Object.prototype.toString.call(r),Error(e(31,"[object Object]"===t?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Mt(t){function r(e,r){if(t){var n=e.deletions
null===n?(e.deletions=[r],e.flags|=16):n.push(r)}}function n(e,n){if(!t)return null
for(;null!==n;)r(e,n),n=n.sibling
return null}function s(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling
return t}function a(e,t){return(e=et(e,t)).index=0,e.sibling=null,e}function i(e,r,n){return e.index=n,t?null!==(n=e.alternate)?(n=n.index)<r?(e.flags|=67108866,r):n:(e.flags|=67108866,r):(e.flags|=1048576,r)}function o(e){return t&&null===e.alternate&&(e.flags|=67108866),e}function c(e,t,r,n){return null===t||6!==t.tag?((t=st(r,e.mode,n)).return=e,t):((t=a(t,r)).return=e,t)}function u(e,t,r,n){var s=r.type
return s===Bo?h(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===Jo&&Ut(s)===t.type)?(Vt(t=a(t,r.props),r),t.return=e,t):(Vt(t=rt(r.type,r.key,r.props,null,e.mode,n),r),t.return=e,t)}function d(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=it(r,e.mode,n)).return=e,t):((t=a(t,r.children||[])).return=e,t)}function h(e,t,r,n,s){return null===t||7!==t.tag?((t=nt(r,e.mode,n,s)).return=e,t):((t=a(t,r)).return=e,t)}function p(e,t,r){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=st(""+t,e.mode,r)).return=e,t
if("object"==typeof t&&null!==t){switch(t.$$typeof){case Uo:return Vt(r=rt(t.type,t.key,t.props,null,e.mode,r),t),r.return=e,r
case Fo:return(t=it(t,e.mode,r)).return=e,t
case Jo:return p(e,t=Ut(t),r)}if(el(t)||l(t))return(t=nt(t,e.mode,r,null)).return=e,t
if("function"==typeof t.then)return p(e,Wt(t),r)
if(t.$$typeof===Mo)return p(e,Tt(e,t),r)
qt(e,t)}return null}function f(e,t,r,n){var s=null!==t?t.key:null
if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return null!==s?null:c(e,t,""+r,n)
if("object"==typeof r&&null!==r){switch(r.$$typeof){case Uo:return r.key===s?u(e,t,r,n):null
case Fo:return r.key===s?d(e,t,r,n):null
case Jo:return f(e,t,r=Ut(r),n)}if(el(r)||l(r))return null!==s?null:h(e,t,r,n,null)
if("function"==typeof r.then)return f(e,t,Wt(r),n)
if(r.$$typeof===Mo)return f(e,t,Tt(e,r),n)
qt(e,r)}return null}function m(e,t,r,n,s){if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return c(t,e=e.get(r)||null,""+n,s)
if("object"==typeof n&&null!==n){switch(n.$$typeof){case Uo:return u(t,e=e.get(null===n.key?r:n.key)||null,n,s)
case Fo:return d(t,e=e.get(null===n.key?r:n.key)||null,n,s)
case Jo:return m(e,t,r,n=Ut(n),s)}if(el(n)||l(n))return h(t,e=e.get(r)||null,n,s,null)
if("function"==typeof n.then)return m(e,t,r,Wt(n),s)
if(n.$$typeof===Mo)return m(e,t,r,Tt(t,n),s)
qt(t,n)}return null}function g(c,u,d,h){if("object"==typeof d&&null!==d&&d.type===Bo&&null===d.key&&(d=d.props.children),"object"==typeof d&&null!==d){switch(d.$$typeof){case Uo:e:{for(var b=d.key;null!==u;){if(u.key===b){if((b=d.type)===Bo){if(7===u.tag){n(c,u.sibling),(h=a(u,d.props.children)).return=c,c=h
break e}}else if(u.elementType===b||"object"==typeof b&&null!==b&&b.$$typeof===Jo&&Ut(b)===u.type){n(c,u.sibling),Vt(h=a(u,d.props),d),h.return=c,c=h
break e}n(c,u)
break}r(c,u),u=u.sibling}d.type===Bo?((h=nt(d.props.children,c.mode,h,d.key)).return=c,c=h):(Vt(h=rt(d.type,d.key,d.props,null,c.mode,h),d),h.return=c,c=h)}return o(c)
case Fo:e:{for(b=d.key;null!==u;){if(u.key===b){if(4===u.tag&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(c,u.sibling),(h=a(u,d.children||[])).return=c,c=h
break e}n(c,u)
break}r(c,u),u=u.sibling}(h=it(d,c.mode,h)).return=c,c=h}return o(c)
case Jo:return g(c,u,d=Ut(d),h)}if(el(d))return function(e,a,o,l){for(var c=null,u=null,d=a,h=a=0,g=null;null!==d&&h<o.length;h++){d.index>h?(g=d,d=null):g=d.sibling
var b=f(e,d,o[h],l)
if(null===b){null===d&&(d=g)
break}t&&d&&null===b.alternate&&r(e,d),a=i(b,a,h),null===u?c=b:u.sibling=b,u=b,d=g}if(h===o.length)return n(e,d),Nu&&lt(e,h),c
if(null===d){for(;h<o.length;h++)null!==(d=p(e,o[h],l))&&(a=i(d,a,h),null===u?c=d:u.sibling=d,u=d)
return Nu&&lt(e,h),c}for(d=s(d);h<o.length;h++)null!==(g=m(d,e,h,o[h],l))&&(t&&null!==g.alternate&&d.delete(null===g.key?h:g.key),a=i(g,a,h),null===u?c=g:u.sibling=g,u=g)
return t&&d.forEach(function(t){return r(e,t)}),Nu&&lt(e,h),c}(c,u,d,h)
if(l(d)){if("function"!=typeof(b=l(d)))throw Error(e(150))
return function(a,o,l,c){if(null==l)throw Error(e(151))
for(var u=null,d=null,h=o,g=o=0,b=null,y=l.next();null!==h&&!y.done;g++,y=l.next()){h.index>g?(b=h,h=null):b=h.sibling
var v=f(a,h,y.value,c)
if(null===v){null===h&&(h=b)
break}t&&h&&null===v.alternate&&r(a,h),o=i(v,o,g),null===d?u=v:d.sibling=v,d=v,h=b}if(y.done)return n(a,h),Nu&&lt(a,g),u
if(null===h){for(;!y.done;g++,y=l.next())null!==(y=p(a,y.value,c))&&(o=i(y,o,g),null===d?u=y:d.sibling=y,d=y)
return Nu&&lt(a,g),u}for(h=s(h);!y.done;g++,y=l.next())null!==(y=m(h,a,g,y.value,c))&&(t&&null!==y.alternate&&h.delete(null===y.key?g:y.key),o=i(y,o,g),null===d?u=y:d.sibling=y,d=y)
return t&&h.forEach(function(e){return r(a,e)}),Nu&&lt(a,g),u}(c,u,d=b.call(d),h)}if("function"==typeof d.then)return g(c,u,Wt(d),h)
if(d.$$typeof===Mo)return g(c,u,Tt(c,d),h)
qt(c,d)}return"string"==typeof d&&""!==d||"number"==typeof d||"bigint"==typeof d?(d=""+d,null!==u&&6===u.tag?(n(c,u.sibling),(h=a(u,d)).return=c,c=h):(n(c,u),(h=st(d,c.mode,h)).return=c,c=h),o(c)):n(c,u)}return function(e,t,r,n){try{Ju=0
var s=g(e,t,r,n)
return Yu=null,s}catch(i){if(i===qu||i===Hu)throw i
var a=$e(29,i,null,e.mode)
return a.lanes=n,a.return=e,a}}}function Ht(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zt(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $t(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,r){var n=e.updateQueue
if(null===n)return null
if(n=n.shared,2&zd){var s=n.pending
return null===s?t.next=t:(t.next=s.next,s.next=t),n.pending=t,t=Xe(e),Je(e,null,r),t}return Ke(e,n,t,r),Xe(e)}function er(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,4194048&r)){var n=t.lanes
r|=n&=e.pendingLanes,t.lanes=r,R(e,r)}}function tr(e,t){var r=e.updateQueue,n=e.alternate
if(null!==n&&r===(n=n.updateQueue)){var s=null,a=null
if(null!==(r=r.firstBaseUpdate)){do{var i={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null}
null===a?s=a=i:a=a.next=i,r=r.next}while(null!==r)
null===a?s=a=t:a=a.next=t}else s=a=t
return r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:n.shared,callbacks:n.callbacks},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function rr(){if(Qu&&null!==Bu)throw Bu}function nr(e,t,r,n){Qu=!1
var s=e.updateQueue
$u=!1
var a=s.firstBaseUpdate,i=s.lastBaseUpdate,o=s.shared.pending
if(null!==o){s.shared.pending=null
var l=o,c=l.next
l.next=null,null===i?a=c:i.next=c,i=l
var u=e.alternate
null!==u&&(o=(u=u.updateQueue).lastBaseUpdate)!==i&&(null===o?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l)}if(null!==a){var d=s.baseState
for(i=0,u=c=l=null,o=a;;){var h=-536870913&o.lane,p=h!==o.lane
if(p?(Ud&h)===h:(n&h)===h){0!==h&&h===Fu&&(Qu=!0),null!==u&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null})
e:{var f=e,m=o
h=t
var g=r
switch(m.tag){case 1:if("function"==typeof(f=m.payload)){d=f.call(g,d,h)
break e}d=f
break e
case 3:f.flags=-65537&f.flags|128
case 0:if(null==(h="function"==typeof(f=m.payload)?f.call(g,d,h):f))break e
d=Lo({},d,h)
break e
case 2:$u=!0}}null!==(h=o.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=s.callbacks)?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===u?(c=u=p,l=d):u=u.next=p,i|=h
if(null===(o=o.next)){if(null===(o=s.shared.pending))break
o=(p=o).next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}null===u&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,null===a&&(s.shared.lanes=0),Kd|=i,e.lanes=i,e.memoizedState=d}}function sr(t,r){if("function"!=typeof t)throw Error(e(191,t))
t.call(r)}function ur(e,t){var r=e.callbacks
if(null!==r)for(e.callbacks=null,e=0;e<r.length;e++)sr(r[e],t)}function dr(e,t){h(td,e=Md),h(ed,t),Md=e|t.baseLanes}function hr(){h(td,Md),h(ed,ed.current)}function pr(){Md=td.current,d(ed),d(td)}function fr(e){var t=e.alternate
h(sd,1&sd.current),h(rd,e),null===nd&&(null===t||null!==ed.current||null!==t.memoizedState)&&(nd=e)}function mr(e){h(sd,sd.current),h(rd,e),null===nd&&(nd=e)}function gr(e){22===e.tag?(h(sd,sd.current),h(rd,e),null===nd&&(nd=e)):br()}function br(){h(sd,sd.current),h(rd,rd.current)}function yr(e){d(rd),nd===e&&(nd=null),d(sd)}function vr(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState
if(null!==r&&(null===(r=r.dehydrated)||zi(r)||Li(r)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child
continue}}else if(128&t.flags)return t
if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return null
t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function xr(){throw Error(e(321))}function wr(e,t){if(null===t)return!1
for(var r=0;r<t.length&&r<e.length;r++)if(!Hc(e[r],t[r]))return!1
return!0}function kr(e,t,r,n,s,a){return ad=a,id=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,tl.H=null===e||null===e.memoizedState?bd:yd,dd=!1,a=r(n,s),dd=!1,ud&&(a=Sr(t,r,n,s)),jr(e),a}function jr(t){tl.H=gd
var r=null!==od&&null!==od.next
if(ad=0,ld=od=id=null,cd=!1,pd=0,fd=null,r)throw Error(e(300))
null===t||kd||null!==(t=t.dependencies)&&_t(t)&&(kd=!0)}function Sr(t,r,n,s){id=t
var a=0
do{if(ud&&(fd=null),pd=0,ud=!1,25<=a)throw Error(e(301))
if(a+=1,ld=od=null,null!=t.updateQueue){var i=t.updateQueue
i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}tl.H=vd,i=r(n,s)}while(ud)
return i}function _r(){var e=tl.H,t=e.useState()[0]
return t="function"==typeof t.then?Pr(t):t,e=e.useState()[0],(null!==od?od.memoizedState:null)!==e&&(id.flags|=1024),t}function Nr(){var e=0!==hd
return hd=0,e}function Er(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Tr(e){if(cd){for(e=e.memoizedState;null!==e;){var t=e.queue
null!==t&&(t.pending=null),e=e.next}cd=!1}ad=0,ld=od=id=null,ud=!1,pd=hd=0,fd=null}function Cr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
return null===ld?id.memoizedState=ld=e:ld=ld.next=e,ld}function Rr(){if(null===od){var t=id.alternate
t=null!==t?t.memoizedState:null}else t=od.next
var r=null===ld?id.memoizedState:ld.next
if(null!==r)ld=r,od=t
else{if(null===t){if(null===id.alternate)throw Error(e(467))
throw Error(e(310))}t={memoizedState:(od=t).memoizedState,baseState:od.baseState,baseQueue:od.baseQueue,queue:od.queue,next:null},null===ld?id.memoizedState=ld=t:ld=ld.next=t}return ld}function Pr(e){var t=pd
return pd+=1,null===fd&&(fd=[]),e=Dt(fd,e,t),t=id,null===(null===ld?t.memoizedState:ld.next)&&(t=t.alternate,tl.H=null===t||null===t.memoizedState?bd:yd),e}function Ar(t){if(null!==t&&"object"==typeof t){if("function"==typeof t.then)return Pr(t)
if(t.$$typeof===Mo)return Et(t)}throw Error(e(438,String(t)))}function Or(e){var t=null,r=id.updateQueue
if(null!==r&&(t=r.memoCache),null==t){var n=id.alternate
null!==n&&null!==(n=n.updateQueue)&&null!=(n=n.memoCache)&&(t={data:n.data.map(function(e){return e.slice()}),index:0})}if(null==t&&(t={data:[],index:0}),null===r&&(r={lastEffect:null,events:null,stores:null,memoCache:null},id.updateQueue=r),r.memoCache=t,void 0===(r=t.data[t.index]))for(r=t.data[t.index]=Array(e),n=0;n<e;n++)r[n]=Zo
return t.index++,r}function Ir(e,t){return"function"==typeof t?t(e):t}function zr(e){return Lr(Rr(),od,e)}function Lr(t,r,n){var s=t.queue
if(null===s)throw Error(e(311))
s.lastRenderedReducer=n
var a=t.baseQueue,i=s.pending
if(null!==i){if(null!==a){var o=a.next
a.next=i.next,i.next=o}r.baseQueue=a=i,s.pending=null}if(i=t.baseState,null===a)t.memoizedState=i
else{var l=o=null,c=null,u=r=a.next,d=!1
do{var h=-536870913&u.lane
if(h!==u.lane?(Ud&h)===h:(ad&h)===h){var p=u.revertLane
if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===Fu&&(d=!0)
else{if((ad&p)===p){u=u.next,p===Fu&&(d=!0)
continue}h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=h,o=i):c=c.next=h,id.lanes|=p,Kd|=p}h=u.action,dd&&n(i,h),i=u.hasEagerState?u.eagerState:n(i,h)}else p={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,o=i):c=c.next=p,id.lanes|=h,Kd|=h
u=u.next}while(null!==u&&u!==r)
if(null===c?o=i:c.next=l,!Hc(i,t.memoizedState)&&(kd=!0,d&&null!==(n=Bu)))throw n
t.memoizedState=i,t.baseState=o,t.baseQueue=c,s.lastRenderedState=i}return null===a&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Dr(t){var r=Rr(),n=r.queue
if(null===n)throw Error(e(311))
n.lastRenderedReducer=t
var s=n.dispatch,a=n.pending,i=r.memoizedState
if(null!==a){n.pending=null
var o=a=a.next
do{i=t(i,o.action),o=o.next}while(o!==a)
Hc(i,r.memoizedState)||(kd=!0),r.memoizedState=i,null===r.baseQueue&&(r.baseState=i),n.lastRenderedState=i}return[i,s]}function Ur(t,r,n){var s=id,a=Rr(),i=Nu
if(i){if(void 0===n)throw Error(e(407))
n=n()}else n=r()
var o=!Hc((od||a).memoizedState,n)
if(o&&(a.memoizedState=n,kd=!0),a=a.queue,un(Wr.bind(null,s,a,t),[t]),a.getSnapshot!==r||o||null!==ld&&1&ld.memoizedState.tag){if(s.flags|=2048,sn(9,{destroy:void 0},Br.bind(null,s,a,n,r),null),null===Ld)throw Error(e(349))
i||127&ad||Fr(s,r,n)}return n}function Fr(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=id.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},id.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function Br(e,t,r,n){t.value=r,t.getSnapshot=n,Vr(t)&&qr(e)}function Wr(e,t,r){return r(function(){Vr(t)&&qr(e)})}function Vr(e){var t=e.getSnapshot
e=e.value
try{var r=t()
return!Hc(e,r)}catch(n){return!0}}function qr(e){var t=Ye(e,2)
null!==t&&ya(t,0,2)}function Mr(e){var t=Cr()
if("function"==typeof e){var r=e
if(e=r(),dd){w(!0)
try{r()}finally{w(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},t}function Hr(e,t,r,n){return e.baseState=r,Lr(e,od,"function"==typeof n?n:Ir)}function Kr(t,r,n,s,a){if(In(t))throw Error(e(485))
if(null!==(t=r.action)){var i={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}}
null!==tl.T?n(!0):i.isTransition=!1,s(i),null===(n=r.pending)?(i.next=r.pending=i,Gr(r,i)):(i.next=n.next,r.pending=n.next=i)}}function Gr(e,t){var r=t.action,n=t.payload,s=e.state
if(t.isTransition){var a=tl.T,i={}
tl.T=i
try{var o=r(s,n),l=tl.S
null!==l&&l(i,o),Yr(e,t,o)}catch(c){Xr(e,t,c)}finally{null!==a&&null!==i.types&&(a.types=i.types),tl.T=a}}else try{Yr(e,t,a=r(s,n))}catch(u){Xr(e,t,u)}}function Yr(e,t,r){null!==r&&"object"==typeof r&&"function"==typeof r.then?r.then(function(r){Jr(e,t,r)},function(r){return Xr(e,t,r)}):Jr(e,t,r)}function Jr(e,t,r){t.status="fulfilled",t.value=r,Zr(t),e.state=r,null!==(t=e.pending)&&((r=t.next)===t?e.pending=null:(r=r.next,t.next=r,Gr(e,r)))}function Xr(e,t,r){var n=e.pending
if(e.pending=null,null!==n){n=n.next
do{t.status="rejected",t.reason=r,Zr(t),t=t.next}while(t!==n)}e.action=null}function Zr(e){e=e.listeners
for(var t=0;t<e.length;t++)(0,e[t])()}function $r(e,t){return t}function Qr(e,t){if(Nu){var r=Ld.formState
if(null!==r){e:{var n=id
if(Nu){if(_u){t:{for(var s=_u,a=Tu;8!==s.nodeType;){if(!a){s=null
break t}if(null===(s=Di(s.nextSibling))){s=null
break t}}s="F!"===(a=s.data)||"F"===a?s:null}if(s){_u=Di(s.nextSibling),n="F!"===s.data
break e}}pt(n)}n=!1}n&&(t=r[0])}}return(r=Cr()).memoizedState=r.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:t},r.queue=n,r=Pn.bind(null,id,n),n.dispatch=r,n=Mr(!1),a=On.bind(null,id,!1,n.queue),s={state:t,dispatch:null,action:e,pending:null},(n=Cr()).queue=s,r=Kr.bind(null,id,s,a,r),s.dispatch=r,n.memoizedState=e,[t,r,!1]}function en(e){return tn(Rr(),od,e)}function tn(e,t,r){if(t=Lr(e,t,$r)[0],e=zr(Ir)[0],"object"==typeof t&&null!==t&&"function"==typeof t.then)try{var n=Pr(t)}catch(i){if(i===qu)throw Hu
throw i}else n=t
var s=(t=Rr()).queue,a=s.dispatch
return r!==t.memoizedState&&(id.flags|=2048,sn(9,{destroy:void 0},rn.bind(null,s,r),null)),[n,a,e]}function rn(e,t){e.action=t}function nn(e){var t=Rr(),r=od
if(null!==r)return tn(t,r,e)
Rr(),t=t.memoizedState
var n=(r=Rr()).queue.dispatch
return r.memoizedState=e,[t,n,!1]}function sn(e,t,r,n){return e={tag:e,create:r,deps:n,inst:t,next:null},null===(t=id.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},id.updateQueue=t),null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function an(){return Rr().memoizedState}function on(e,t,r,n){var s=Cr()
id.flags|=e,s.memoizedState=sn(1|t,{destroy:void 0},r,void 0===n?null:n)}function ln(e,t,r,n){var s=Rr()
n=void 0===n?null:n
var a=s.memoizedState.inst
null!==od&&null!==n&&wr(n,od.memoizedState.deps)?s.memoizedState=sn(t,a,r,n):(id.flags|=e,s.memoizedState=sn(1|t,a,r,n))}function cn(e,t){on(8390656,8,e,t)}function un(e,t){ln(2048,8,e,t)}function dn(t){var r=Rr().memoizedState
return function(e){id.flags|=4
var t=id.updateQueue
if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},id.updateQueue=t,t.events=[e]
else{var r=t.events
null===r?t.events=[e]:r.push(e)}}({ref:r,nextImpl:t}),function(){if(2&zd)throw Error(e(440))
return r.impl.apply(void 0,arguments)}}function hn(e,t){return ln(4,2,e,t)}function pn(e,t){return ln(4,4,e,t)}function fn(e,t){if("function"==typeof t){e=e()
var r=t(e)
return function(){"function"==typeof r?r():t(null)}}if(null!=t)return e=e(),t.current=e,function(){t.current=null}}function mn(e,t,r){r=null!=r?r.concat([e]):null,ln(4,4,fn.bind(null,t,e),r)}function gn(){}function bn(e,t){var r=Rr()
t=void 0===t?null:t
var n=r.memoizedState
return null!==t&&wr(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function yn(e,t){var r=Rr()
t=void 0===t?null:t
var n=r.memoizedState
if(null!==t&&wr(t,n[1]))return n[0]
if(n=e(),dd){w(!0)
try{e()}finally{w(!1)}}return r.memoizedState=[n,t],n}function vn(e,t,r){return void 0===r||1073741824&ad&&!(261930&Ud)?e.memoizedState=t:(e.memoizedState=r,e=ba(),id.lanes|=e,Kd|=e,r)}function xn(e,t,r,n){return Hc(r,t)?r:null!==ed.current?(e=vn(e,r,n),Hc(e,t)||(kd=!0),e):42&ad&&(!(1073741824&ad)||261930&Ud)?(e=ba(),id.lanes|=e,Kd|=e,t):(kd=!0,e.memoizedState=r)}function wn(e,t,r,n,s){var a=rl.p
rl.p=0!==a&&8>a?a:8
var i=tl.T,o={}
tl.T=o,On(e,!1,t,r)
try{var l=s(),c=tl.S
null!==c&&c(o,l),null!==l&&"object"==typeof l&&"function"==typeof l.then?An(e,t,function(e,t){var r=[],n={status:"pending",value:null,reason:null,then:function(e){r.push(e)}}
return e.then(function(){n.status="fulfilled",n.value=t
for(var e=0;e<r.length;e++)(0,r[e])(t)},function(e){for(n.status="rejected",n.reason=e,e=0;e<r.length;e++)(0,r[e])(void 0)}),n}(l,n),ga()):An(e,t,n,ga())}catch(u){An(e,t,{then:function(){},status:"rejected",reason:u},ga())}finally{rl.p=a,null!==i&&null!==o.types&&(i.types=o.types),tl.T=i}}function kn(){}function jn(t,r,n,s){if(5!==t.tag)throw Error(e(476))
var a=Sn(t).queue
wn(t,a,r,nl,null===n?kn:function(){return _n(t),n(s)})}function Sn(e){var t=e.memoizedState
if(null!==t)return t
var r={}
return(t={memoizedState:nl,baseState:nl,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:nl},next:null}).next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:r},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function _n(e){var t=Sn(e)
null===t.next&&(t=e.alternate.memoizedState),An(e,t.next.queue,{},ga())}function Nn(){return Et(Vh)}function En(){return Rr().memoizedState}function Tn(){return Rr().memoizedState}function Cn(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var r=ga(),n=Qt(t,e=$t(r),r)
return null!==n&&(ya(n,0,r),er(n,t,r)),t={cache:Rt()},void(e.payload=t)}t=t.return}}function Rn(e,t,r){var n=ga()
r={lane:n,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},In(e)?zn(t,r):null!==(r=Ge(e,t,r,n))&&(ya(r,0,n),Ln(r,t,n))}function Pn(e,t,r){An(e,t,r,ga())}function An(e,t,r,n){var s={lane:n,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null}
if(In(e))zn(t,s)
else{var a=e.alternate
if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var i=t.lastRenderedState,o=a(i,r)
if(s.hasEagerState=!0,s.eagerState=o,Hc(o,i))return Ke(e,t,s,0),null===Ld&&He(),!1}catch(l){}if(null!==(r=Ge(e,t,s,n)))return ya(r,0,n),Ln(r,t,n),!0}return!1}function On(t,r,n,s){if(s={lane:2,revertLane:ii(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},In(t)){if(r)throw Error(e(479))}else null!==(r=Ge(t,n,s,2))&&ya(r,0,2)}function In(e){var t=e.alternate
return e===id||null!==t&&t===id}function zn(e,t){ud=cd=!0
var r=e.pending
null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ln(e,t,r){if(4194048&r){var n=t.lanes
r|=n&=e.pendingLanes,t.lanes=r,R(e,r)}}function Dn(e,t,r,n){r=null==(r=r(n,t=e.memoizedState))?t:Lo({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}function Un(e,t,r,n,s,a,i){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,i):!(t.prototype&&t.prototype.isPureReactComponent&&ze(r,n)&&ze(s,a))}function Fn(e,t,r,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&xd.enqueueReplaceState(t,t.state,null)}function Bn(e,t){var r=t
if("ref"in t)for(var n in r={},t)"ref"!==n&&(r[n]=t[n])
if(e=e.defaultProps)for(var s in r===t&&(r=Lo({},r)),e)void 0===r[s]&&(r[s]=e[s])
return r}function Wn(e){cu(e)}function Vn(){}function qn(e){cu(e)}function Mn(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Hn(e,t,r){try{(0,e.onCaughtError)(r.value,{componentStack:r.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Kn(e,t,r){return(r=$t(r)).tag=3,r.payload={element:null},r.callback=function(){Mn(e,t)},r}function Gn(e){return(e=$t(e)).tag=3,e}function Yn(e,t,r,n){var s=r.type.getDerivedStateFromError
if("function"==typeof s){var a=n.value
e.payload=function(){return s(a)},e.callback=function(){Hn(t,r,n)}}var i=r.stateNode
null!==i&&"function"==typeof i.componentDidCatch&&(e.callback=function(){Hn(t,r,n),"function"!=typeof s&&(null===sh?sh=new Set([this]):sh.add(this))
var e=n.stack
this.componentDidCatch(n.value,{componentStack:null!==e?e:""})})}function Jn(e,t,r,n){t.child=null===e?Zu(t,null,r,n):Xu(t,e.child,r,n)}function Xn(e,t,r,n,s){r=r.render
var a=t.ref
if("ref"in n){var i={}
for(var o in n)"ref"!==o&&(i[o]=n[o])}else i=n
return Nt(t),n=kr(e,t,r,i,a,s),o=Nr(),null===e||kd?(Nu&&o&&ut(t),t.flags|=1,Jn(e,t,n,s),t.child):(Er(e,t,s),ys(e,t,s))}function Zn(e,t,r,n,s){if(null===e){var a=r.type
return"function"!=typeof a||Qe(a)||void 0!==a.defaultProps||null!==r.compare?((e=rt(r.type,null,n,t,t.mode,s)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,$n(e,t,a,n,s))}if(a=e.child,!vs(e,s)){var i=a.memoizedProps
if((r=null!==(r=r.compare)?r:ze)(i,n)&&e.ref===t.ref)return ys(e,t,s)}return t.flags|=1,(e=et(a,n)).ref=t.ref,e.return=t,t.child=e}function $n(e,t,r,n,s){if(null!==e){var a=e.memoizedProps
if(ze(a,n)&&e.ref===t.ref){if(kd=!1,t.pendingProps=n=a,!vs(e,s))return t.lanes=e.lanes,ys(e,t,s)
131072&e.flags&&(kd=!0)}}return as(e,t,r,n,s)}function Qn(e,t,r,n){var s=n.children,a=null!==e?e.memoizedState:null
if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===n.mode){if(128&t.flags){if(a=null!==a?a.baseLanes|r:r,null!==e){for(n=t.child=e.child,s=0;null!==n;)s=s|n.lanes|n.childLanes,n=n.sibling
n=s&~a}else n=0,t.child=null
return ts(e,t,a,r,n)}if(!(536870912&r))return n=t.lanes=536870912,ts(e,t,null!==a?a.baseLanes|r:r,r,n)
t.memoizedState={baseLanes:0,cachePool:null},null!==e&&It(0,null!==a?a.cachePool:null),null!==a?dr(t,a):hr(),gr(t)}else null!==a?(It(0,a.cachePool),dr(t,a),br(),t.memoizedState=null):(null!==e&&It(0,null),hr(),br())
return Jn(e,t,s,r),t.child}function es(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ts(e,t,r,n,s){var a=Ot()
return a=null===a?null:{parent:Lu._currentValue,pool:a},t.memoizedState={baseLanes:r,cachePool:a},null!==e&&It(0,null),hr(),gr(t),null!==e&&St(e,t,n,!0),t.childLanes=s,null}function rs(e,t){return(t=ps({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function ns(e,t,r){return Xu(t,e.child,null,r),(e=rs(t,t.pendingProps)).flags|=2,yr(t),t.memoizedState=null,e}function ss(t,r){var n=r.ref
if(null===n)null!==t&&null!==t.ref&&(r.flags|=4194816)
else{if("function"!=typeof n&&"object"!=typeof n)throw Error(e(284))
null!==t&&t.ref===n||(r.flags|=4194816)}}function as(e,t,r,n,s){return Nt(t),r=kr(e,t,r,n,void 0,s),n=Nr(),null===e||kd?(Nu&&n&&ut(t),t.flags|=1,Jn(e,t,r,s),t.child):(Er(e,t,s),ys(e,t,s))}function is(e,t,r,n,s,a){return Nt(t),t.updateQueue=null,r=Sr(t,n,r,s),jr(e),n=Nr(),null===e||kd?(Nu&&n&&ut(t),t.flags|=1,Jn(e,t,r,a),t.child):(Er(e,t,a),ys(e,t,a))}function os(e,t,r,n,s){if(Nt(t),null===t.stateNode){var a=pu,i=r.contextType
"object"==typeof i&&null!==i&&(a=Et(i)),a=new r(n,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=xd,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=n,a.state=t.memoizedState,a.refs={},Ht(t),i=r.contextType,a.context="object"==typeof i&&null!==i?Et(i):pu,a.state=t.memoizedState,"function"==typeof(i=r.getDerivedStateFromProps)&&(Dn(t,r,i,n),a.state=t.memoizedState),"function"==typeof r.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(i=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),i!==a.state&&xd.enqueueReplaceState(a,a.state,null),nr(t,n,a,s),rr(),a.state=t.memoizedState),"function"==typeof a.componentDidMount&&(t.flags|=4194308),n=!0}else if(null===e){a=t.stateNode
var o=t.memoizedProps,l=Bn(r,o)
a.props=l
var c=a.context,u=r.contextType
i=pu,"object"==typeof u&&null!==u&&(i=Et(u))
var d=r.getDerivedStateFromProps
u="function"==typeof d||"function"==typeof a.getSnapshotBeforeUpdate,o=t.pendingProps!==o,u||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o||c!==i)&&Fn(t,a,n,i),$u=!1
var h=t.memoizedState
a.state=h,nr(t,n,a,s),rr(),c=t.memoizedState,o||h!==c||$u?("function"==typeof d&&(Dn(t,r,d,n),c=t.memoizedState),(l=$u||Un(t,r,l,n,h,c,i))?(u||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),a.props=n,a.state=c,a.context=i,n=l):("function"==typeof a.componentDidMount&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Zt(e,t),u=Bn(r,i=t.memoizedProps),a.props=u,d=t.pendingProps,h=a.context,c=r.contextType,l=pu,"object"==typeof c&&null!==c&&(l=Et(c)),(c="function"==typeof(o=r.getDerivedStateFromProps)||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(i!==d||h!==l)&&Fn(t,a,n,l),$u=!1,h=t.memoizedState,a.state=h,nr(t,n,a,s),rr()
var p=t.memoizedState
i!==d||h!==p||$u||null!==e&&null!==e.dependencies&&_t(e.dependencies)?("function"==typeof o&&(Dn(t,r,o,n),p=t.memoizedState),(u=$u||Un(t,r,u,n,h,p,l)||null!==e&&null!==e.dependencies&&_t(e.dependencies))?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(n,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(n,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),a.props=n,a.state=p,a.context=l,n=u):("function"!=typeof a.componentDidUpdate||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return a=n,ss(e,t),n=!!(128&t.flags),a||n?(a=t.stateNode,r=n&&"function"!=typeof r.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&n?(t.child=Xu(t,e.child,null,s),t.child=Xu(t,null,r,s)):Jn(e,t,r,s),t.memoizedState=a.state,e=t.child):e=ys(e,t,s),e}function ls(e,t,r,n){return bt(),t.flags|=256,Jn(e,t,r,n),t.child}function cs(e){return{baseLanes:e,cachePool:zt()}}function us(e,t,r){return e=null!==e?e.childLanes&~r:0,t&&(e|=Jd),e}function ds(t,r,n){var s,a=r.pendingProps,i=!1,o=!!(128&r.flags)
if((s=o)||(s=(null===t||null!==t.memoizedState)&&!!(2&sd.current)),s&&(i=!0,r.flags&=-129),s=!!(32&r.flags),r.flags&=-33,null===t){if(Nu){if(i?fr(r):br(),(t=_u)?null!==(t=null!==(t=Ii(t,Tu))&&"&"!==t.data?t:null)&&(r.memoizedState={dehydrated:t,treeContext:null!==wu?{id:ku,overflow:ju}:null,retryLane:536870912,hydrationErrors:null},(n=at(t)).return=r,r.child=n,Su=r,_u=null):t=null,null===t)throw pt(r)
return Li(t)?r.lanes=32:r.lanes=536870912,null}var l=a.children
return a=a.fallback,i?(br(),l=ps({mode:"hidden",children:l},i=r.mode),a=nt(a,i,n,null),l.return=r,a.return=r,l.sibling=a,r.child=l,(a=r.child).memoizedState=cs(n),a.childLanes=us(t,s,n),r.memoizedState=jd,es(null,a)):(fr(r),hs(r,l))}var c=t.memoizedState
if(null!==c&&null!==(l=c.dehydrated)){if(o)256&r.flags?(fr(r),r.flags&=-257,r=fs(t,r,n)):null!==r.memoizedState?(br(),r.child=t.child,r.flags|=128,r=null):(br(),l=a.fallback,i=r.mode,a=ps({mode:"visible",children:a.children},i),(l=nt(l,i,n,null)).flags|=2,a.return=r,l.return=r,a.sibling=l,r.child=a,Xu(r,t.child,null,n),(a=r.child).memoizedState=cs(n),a.childLanes=us(t,s,n),r.memoizedState=jd,r=es(null,a))
else if(fr(r),Li(l)){if(s=l.nextSibling&&l.nextSibling.dataset)var u=s.dgst
s=u,(a=Error(e(419))).stack="",a.digest=s,vt({value:a,source:null,stack:null}),r=fs(t,r,n)}else if(kd||St(t,r,n,!1),s=0!==(n&t.childLanes),kd||s){if(null!==(s=Ld)&&0!==(a=P(s,n))&&a!==c.retryLane)throw c.retryLane=a,Ye(t,a),ya(s,0,a),wd
zi(l)||Ra(),r=fs(t,r,n)}else zi(l)?(r.flags|=192,r.child=t.child,r=null):(t=c.treeContext,_u=Di(l.nextSibling),Su=r,Nu=!0,Eu=null,Tu=!1,null!==t&&ht(r,t),(r=hs(r,a.children)).flags|=4096)
return r}return i?(br(),l=a.fallback,i=r.mode,u=(c=t.child).sibling,(a=et(c,{mode:"hidden",children:a.children})).subtreeFlags=65011712&c.subtreeFlags,null!==u?l=et(u,l):(l=nt(l,i,n,null)).flags|=2,l.return=r,a.return=r,a.sibling=l,r.child=a,es(null,a),a=r.child,null===(l=t.child.memoizedState)?l=cs(n):(null!==(i=l.cachePool)?(c=Lu._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=zt(),l={baseLanes:l.baseLanes|n,cachePool:i}),a.memoizedState=l,a.childLanes=us(t,s,n),r.memoizedState=jd,es(t.child,a)):(fr(r),t=(n=t.child).sibling,(n=et(n,{mode:"visible",children:a.children})).return=r,n.sibling=null,null!==t&&(null===(s=r.deletions)?(r.deletions=[t],r.flags|=16):s.push(t)),r.child=n,r.memoizedState=null,n)}function hs(e,t){return(t=ps({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ps(e,t){return(e=$e(22,e,null,t)).lanes=0,e}function fs(e,t,r){return Xu(t,e.child,null,r),(e=hs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ms(e,t,r){e.lanes|=t
var n=e.alternate
null!==n&&(n.lanes|=t),kt(e.return,t,r)}function gs(e,t,r,n,s,a){var i=e.memoizedState
null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s,treeForkCount:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=s,i.treeForkCount=a)}function bs(e,t,r){var n=t.pendingProps,s=n.revealOrder,a=n.tail
n=n.children
var i=sd.current,o=!!(2&i)
if(o?(i=1&i|2,t.flags|=128):i&=1,h(sd,i),Jn(e,t,n,r),n=Nu?yu:0,!o&&null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ms(e,r,t)
else if(19===e.tag)ms(e,r,t)
else if(null!==e.child){e.child.return=e,e=e.child
continue}if(e===t)break e
for(;null===e.sibling;){if(null===e.return||e.return===t)break e
e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(r=t.child,s=null;null!==r;)null!==(e=r.alternate)&&null===vr(e)&&(s=r),r=r.sibling
null===(r=s)?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),gs(t,!1,s,r,a,n)
break
case"backwards":case"unstable_legacy-backwards":for(r=null,s=t.child,t.child=null;null!==s;){if(null!==(e=s.alternate)&&null===vr(e)){t.child=s
break}e=s.sibling,s.sibling=r,r=s,s=e}gs(t,!0,r,null,a,n)
break
case"together":gs(t,!1,null,null,void 0,n)
break
default:t.memoizedState=null}return t.child}function ys(t,r,n){if(null!==t&&(r.dependencies=t.dependencies),Kd|=r.lanes,0===(n&r.childLanes)){if(null===t)return null
if(St(t,r,n,!1),0===(n&r.childLanes))return null}if(null!==t&&r.child!==t.child)throw Error(e(153))
if(null!==r.child){for(n=et(t=r.child,t.pendingProps),r.child=n,n.return=r;null!==t.sibling;)t=t.sibling,(n=n.sibling=et(t,t.pendingProps)).return=r
n.sibling=null}return r.child}function vs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!_t(e))}function xs(t,r,n){if(null!==t)if(t.memoizedProps!==r.pendingProps)kd=!0
else{if(!(vs(t,n)||128&r.flags))return kd=!1,function(e,t,r){switch(t.tag){case 3:p(t,t.stateNode.containerInfo),xt(0,Lu,e.memoizedState.cache),bt()
break
case 27:case 5:m(t)
break
case 4:p(t,t.stateNode.containerInfo)
break
case 10:xt(0,t.type,t.memoizedProps.value)
break
case 31:if(null!==t.memoizedState)return t.flags|=128,mr(t),null
break
case 13:var n=t.memoizedState
if(null!==n)return null!==n.dehydrated?(fr(t),t.flags|=128,null):0!==(r&t.child.childLanes)?ds(e,t,r):(fr(t),null!==(e=ys(e,t,r))?e.sibling:null)
fr(t)
break
case 19:var s=!!(128&e.flags)
if((n=0!==(r&t.childLanes))||(St(e,t,r,!1),n=0!==(r&t.childLanes)),s){if(n)return bs(e,t,r)
t.flags|=128}if(null!==(s=t.memoizedState)&&(s.rendering=null,s.tail=null,s.lastEffect=null),h(sd,sd.current),n)break
return null
case 22:return t.lanes=0,Qn(e,t,r,t.pendingProps)
case 24:xt(0,Lu,e.memoizedState.cache)}return ys(e,t,r)}(t,r,n)
kd=!!(131072&t.flags)}else kd=!1,Nu&&1048576&r.flags&&ct(r,yu,r.index)
switch(r.lanes=0,r.tag){case 16:e:{var s=r.pendingProps
if(t=Ut(r.elementType),r.type=t,"function"!=typeof t){if(null!=t){var a=t.$$typeof
if(a===Ho){r.tag=11,r=Xn(null,r,t,s,n)
break e}if(a===Yo){r.tag=14,r=Zn(null,r,t,s,n)
break e}}throw r=c(t)||t,Error(e(306,r,""))}Qe(t)?(s=Bn(t,s),r.tag=1,r=os(null,r,t,s,n)):(r.tag=0,r=as(null,r,t,s,n))}return r
case 0:return as(t,r,r.type,r.pendingProps,n)
case 1:return os(t,r,s=r.type,a=Bn(s,r.pendingProps),n)
case 3:e:{if(p(r,r.stateNode.containerInfo),null===t)throw Error(e(387))
s=r.pendingProps
var i=r.memoizedState
a=i.element,Zt(t,r),nr(r,s,null,n)
var o=r.memoizedState
if(s=o.cache,xt(0,Lu,s),s!==i.cache&&jt(r,[Lu],n,!0),rr(),s=o.element,i.isDehydrated){if(i={element:s,isDehydrated:!1,cache:o.cache},r.updateQueue.baseState=i,r.memoizedState=i,256&r.flags){r=ls(t,r,s,n)
break e}if(s!==a){vt(a=ot(Error(e(424)),r)),r=ls(t,r,s,n)
break e}for(t=9===(t=r.stateNode.containerInfo).nodeType?t.body:"HTML"===t.nodeName?t.ownerDocument.body:t,_u=Di(t.firstChild),Su=r,Nu=!0,Eu=null,Tu=!0,n=Zu(r,null,s,n),r.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(bt(),s===a){r=ys(t,r,n)
break e}Jn(t,r,s,n)}r=r.child}return r
case 26:return ss(t,r),null===t?(n=Mi(r.type,null,r.pendingProps,null))?r.memoizedState=n:Nu||(n=r.type,t=r.pendingProps,(s=_i(ll.current).createElement(n))[Il]=r,s[zl]=t,ji(s,n,t),W(s),r.stateNode=s):r.memoizedState=Mi(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null
case 27:return m(r),null===t&&Nu&&(s=r.stateNode=Bi(r.type,r.pendingProps,ll.current),Su=r,Tu=!0,a=_u,Ri(r.type)?(Ih=a,_u=Di(s.firstChild)):_u=a),Jn(t,r,r.pendingProps.children,n),ss(t,r),null===t&&(r.flags|=4194304),r.child
case 5:return null===t&&Nu&&((a=s=_u)&&(null!==(s=function(e,t,r,n){for(;1===e.nodeType;){var s=r
if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(n){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break
return e
case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break
if(a!==s.rel||e.getAttribute("href")!==(null==s.href||""===s.href?null:s.href)||e.getAttribute("crossorigin")!==(null==s.crossOrigin?null:s.crossOrigin)||e.getAttribute("title")!==(null==s.title?null:s.title))break
return e
case"style":if(e.hasAttribute("data-precedence"))break
return e
case"script":if(((a=e.getAttribute("src"))!==(null==s.src?null:s.src)||e.getAttribute("type")!==(null==s.type?null:s.type)||e.getAttribute("crossorigin")!==(null==s.crossOrigin?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break
return e
default:return e}}else{if("input"!==t||"hidden"!==e.type)return e
var a=null==s.name?null:""+s.name
if("hidden"===s.type&&e.getAttribute("name")===a)return e}if(null===(e=Di(e.nextSibling)))break}return null}(s,r.type,r.pendingProps,Tu))?(r.stateNode=s,Su=r,_u=Di(s.firstChild),Tu=!1,a=!0):a=!1),a||pt(r)),m(r),a=r.type,i=r.pendingProps,o=null!==t?t.memoizedProps:null,s=i.children,Ti(a,i)?s=null:null!==o&&Ti(a,o)&&(r.flags|=32),null!==r.memoizedState&&(a=kr(t,r,_r,null,null,n),Vh._currentValue=a),ss(t,r),Jn(t,r,s,n),r.child
case 6:return null===t&&Nu&&((t=n=_u)&&(null!==(n=function(e,t,r){if(""===t)return null
for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!r)return null
if(null===(e=Di(e.nextSibling)))return null}return e}(n,r.pendingProps,Tu))?(r.stateNode=n,Su=r,_u=null,t=!0):t=!1),t||pt(r)),null
case 13:return ds(t,r,n)
case 4:return p(r,r.stateNode.containerInfo),s=r.pendingProps,null===t?r.child=Xu(r,null,s,n):Jn(t,r,s,n),r.child
case 11:return Xn(t,r,r.type,r.pendingProps,n)
case 7:return Jn(t,r,r.pendingProps,n),r.child
case 8:case 12:return Jn(t,r,r.pendingProps.children,n),r.child
case 10:return s=r.pendingProps,xt(0,r.type,s.value),Jn(t,r,s.children,n),r.child
case 9:return a=r.type._context,s=r.pendingProps.children,Nt(r),s=s(a=Et(a)),r.flags|=1,Jn(t,r,s,n),r.child
case 14:return Zn(t,r,r.type,r.pendingProps,n)
case 15:return $n(t,r,r.type,r.pendingProps,n)
case 19:return bs(t,r,n)
case 31:return function(t,r,n){var s=r.pendingProps,a=!!(128&r.flags)
if(r.flags&=-129,null===t){if(Nu){if("hidden"===s.mode)return t=rs(r,s),r.lanes=536870912,es(null,t)
if(mr(r),(t=_u)?null!==(t=null!==(t=Ii(t,Tu))&&"&"===t.data?t:null)&&(r.memoizedState={dehydrated:t,treeContext:null!==wu?{id:ku,overflow:ju}:null,retryLane:536870912,hydrationErrors:null},(n=at(t)).return=r,r.child=n,Su=r,_u=null):t=null,null===t)throw pt(r)
return r.lanes=536870912,null}return rs(r,s)}var i=t.memoizedState
if(null!==i){var o=i.dehydrated
if(mr(r),a)if(256&r.flags)r.flags&=-257,r=ns(t,r,n)
else{if(null===r.memoizedState)throw Error(e(558))
r.child=t.child,r.flags|=128,r=null}else if(kd||St(t,r,n,!1),a=0!==(n&t.childLanes),kd||a){if(null!==(s=Ld)&&0!==(o=P(s,n))&&o!==i.retryLane)throw i.retryLane=o,Ye(t,o),ya(s,0,o),wd
Ra(),r=ns(t,r,n)}else t=i.treeContext,_u=Di(o.nextSibling),Su=r,Nu=!0,Eu=null,Tu=!1,null!==t&&ht(r,t),(r=rs(r,s)).flags|=4096
return r}return(t=et(t.child,{mode:s.mode,children:s.children})).ref=r.ref,r.child=t,t.return=r,t}(t,r,n)
case 22:return Qn(t,r,n,r.pendingProps)
case 24:return Nt(r),s=Et(Lu),null===t?(null===(a=Ot())&&(a=Ld,i=Rt(),a.pooledCache=i,i.refCount++,null!==i&&(a.pooledCacheLanes|=n),a=i),r.memoizedState={parent:s,cache:a},Ht(r),xt(0,Lu,a)):(0!==(t.lanes&n)&&(Zt(t,r),nr(r,null,null,n),rr()),a=t.memoizedState,i=r.memoizedState,a.parent!==s?(a={parent:s,cache:s},r.memoizedState=a,0===r.lanes&&(r.memoizedState=r.updateQueue.baseState=a),xt(0,Lu,s)):(s=i.cache,xt(0,Lu,s),s!==a.cache&&jt(r,[Lu],n,!0))),Jn(t,r,r.pendingProps.children,n),r.child
case 29:throw r.pendingProps}throw Error(e(156,r.tag))}function ws(e){e.flags|=4}function ks(e,t,r,n,s){if((t=!!(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&s)===s)if(e.stateNode.complete)e.flags|=8192
else{if(!Ea())throw Gu=Ku,Mu
e.flags|=8192}}else e.flags&=-16777217}function js(e,t){if("stylesheet"!==t.type||4&t.state.loading)e.flags&=-16777217
else if(e.flags|=16777216,!ro(t)){if(!Ea())throw Gu=Ku,Mu
e.flags|=8192}}function Ss(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?N():536870912,e.lanes|=t,Xd|=t)}function _s(e,t){if(!Nu)switch(e.tailMode){case"hidden":t=e.tail
for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling
null===r?e.tail=null:r.sibling=null
break
case"collapsed":r=e.tail
for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling
null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ns(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0
if(t)for(var s=e.child;null!==s;)r|=s.lanes|s.childLanes,n|=65011712&s.subtreeFlags,n|=65011712&s.flags,s.return=e,s=s.sibling
else for(s=e.child;null!==s;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling
return e.subtreeFlags|=n,e.childLanes=r,t}function Es(t,r,n){var s=r.pendingProps
switch(dt(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Ns(r),null
case 3:return n=r.stateNode,s=null,null!==t&&(s=t.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),wt(Lu),f(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==t&&null!==t.child||(gt(r)?ws(r):null===t||t.memoizedState.isDehydrated&&!(256&r.flags)||(r.flags|=1024,yt())),Ns(r),null
case 26:var a=r.type,i=r.memoizedState
return null===t?(ws(r),null!==i?(Ns(r),js(r,i)):(Ns(r),ks(r,a,0,0,n))):i?i!==t.memoizedState?(ws(r),Ns(r),js(r,i)):(Ns(r),r.flags&=-16777217):((t=t.memoizedProps)!==s&&ws(r),Ns(r),ks(r,a,0,0,n)),null
case 27:if(g(r),n=ll.current,a=r.type,null!==t&&null!=r.stateNode)t.memoizedProps!==s&&ws(r)
else{if(!s){if(null===r.stateNode)throw Error(e(166))
return Ns(r),null}t=il.current,gt(r)?ft(r):(t=Bi(a,s,n),r.stateNode=t,ws(r))}return Ns(r),null
case 5:if(g(r),a=r.type,null!==t&&null!=r.stateNode)t.memoizedProps!==s&&ws(r)
else{if(!s){if(null===r.stateNode)throw Error(e(166))
return Ns(r),null}if(i=il.current,gt(r))ft(r)
else{var o=_i(ll.current)
switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",a)
break
case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",a)
break
default:switch(a){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",a)
break
case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",a)
break
case"script":(i=o.createElement("div")).innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)
break
case"select":i="string"==typeof s.is?o.createElement("select",{is:s.is}):o.createElement("select"),s.multiple?i.multiple=!0:s.size&&(i.size=s.size)
break
default:i="string"==typeof s.is?o.createElement(a,{is:s.is}):o.createElement(a)}}i[Il]=r,i[zl]=s
e:for(o=r.child;null!==o;){if(5===o.tag||6===o.tag)i.appendChild(o.stateNode)
else if(4!==o.tag&&27!==o.tag&&null!==o.child){o.child.return=o,o=o.child
continue}if(o===r)break e
for(;null===o.sibling;){if(null===o.return||o.return===r)break e
o=o.return}o.sibling.return=o.return,o=o.sibling}r.stateNode=i
e:switch(ji(i,a,s),a){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus
break e
case"img":s=!0
break e
default:s=!1}s&&ws(r)}}return Ns(r),ks(r,r.type,null===t||t.memoizedProps,r.pendingProps,n),null
case 6:if(t&&null!=r.stateNode)t.memoizedProps!==s&&ws(r)
else{if("string"!=typeof s&&null===r.stateNode)throw Error(e(166))
if(t=ll.current,gt(r)){if(t=r.stateNode,n=r.memoizedProps,s=null,null!==(a=Su))switch(a.tag){case 27:case 5:s=a.memoizedProps}t[Il]=r,(t=!!(t.nodeValue===n||null!==s&&!0===s.suppressHydrationWarning||xi(t.nodeValue,n)))||pt(r,!0)}else(t=_i(t).createTextNode(s))[Il]=r,r.stateNode=t}return Ns(r),null
case 31:if(n=r.memoizedState,null===t||null!==t.memoizedState){if(s=gt(r),null!==n){if(null===t){if(!s)throw Error(e(318))
if(!(t=null!==(t=r.memoizedState)?t.dehydrated:null))throw Error(e(557))
t[Il]=r}else bt(),!(128&r.flags)&&(r.memoizedState=null),r.flags|=4
Ns(r),t=!1}else n=yt(),null!==t&&null!==t.memoizedState&&(t.memoizedState.hydrationErrors=n),t=!0
if(!t)return 256&r.flags?(yr(r),r):(yr(r),null)
if(128&r.flags)throw Error(e(558))}return Ns(r),null
case 13:if(s=r.memoizedState,null===t||null!==t.memoizedState&&null!==t.memoizedState.dehydrated){if(a=gt(r),null!==s&&null!==s.dehydrated){if(null===t){if(!a)throw Error(e(318))
if(!(a=null!==(a=r.memoizedState)?a.dehydrated:null))throw Error(e(317))
a[Il]=r}else bt(),!(128&r.flags)&&(r.memoizedState=null),r.flags|=4
Ns(r),a=!1}else a=yt(),null!==t&&null!==t.memoizedState&&(t.memoizedState.hydrationErrors=a),a=!0
if(!a)return 256&r.flags?(yr(r),r):(yr(r),null)}return yr(r),128&r.flags?(r.lanes=n,r):(n=null!==s,t=null!==t&&null!==t.memoizedState,n&&(a=null,null!==(s=r.child).alternate&&null!==s.alternate.memoizedState&&null!==s.alternate.memoizedState.cachePool&&(a=s.alternate.memoizedState.cachePool.pool),i=null,null!==s.memoizedState&&null!==s.memoizedState.cachePool&&(i=s.memoizedState.cachePool.pool),i!==a&&(s.flags|=2048)),n!==t&&n&&(r.child.flags|=8192),Ss(r,r.updateQueue),Ns(r),null)
case 4:return f(),null===t&&hi(r.stateNode.containerInfo),Ns(r),null
case 10:return wt(r.type),Ns(r),null
case 19:if(d(sd),null===(s=r.memoizedState))return Ns(r),null
if(a=!!(128&r.flags),null===(i=s.rendering))if(a)_s(s,!1)
else{if(0!==Hd||null!==t&&128&t.flags)for(t=r.child;null!==t;){if(null!==(i=vr(t))){for(r.flags|=128,_s(s,!1),t=i.updateQueue,r.updateQueue=t,Ss(r,t),r.subtreeFlags=0,t=n,n=r.child;null!==n;)tt(n,t),n=n.sibling
return h(sd,1&sd.current|2),Nu&&lt(r,s.treeForkCount),r.child}t=t.sibling}null!==s.tail&&gl()>rh&&(r.flags|=128,a=!0,_s(s,!1),r.lanes=4194304)}else{if(!a)if(null!==(t=vr(i))){if(r.flags|=128,a=!0,t=t.updateQueue,r.updateQueue=t,Ss(r,t),_s(s,!0),null===s.tail&&"hidden"===s.tailMode&&!i.alternate&&!Nu)return Ns(r),null}else 2*gl()-s.renderingStartTime>rh&&536870912!==n&&(r.flags|=128,a=!0,_s(s,!1),r.lanes=4194304)
s.isBackwards?(i.sibling=r.child,r.child=i):(null!==(t=s.last)?t.sibling=i:r.child=i,s.last=i)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=gl(),t.sibling=null,n=sd.current,h(sd,a?1&n|2:1&n),Nu&&lt(r,s.treeForkCount),t):(Ns(r),null)
case 22:case 23:return yr(r),pr(),s=null!==r.memoizedState,null!==t?null!==t.memoizedState!==s&&(r.flags|=8192):s&&(r.flags|=8192),s?!!(536870912&n)&&!(128&r.flags)&&(Ns(r),6&r.subtreeFlags&&(r.flags|=8192)):Ns(r),null!==(n=r.updateQueue)&&Ss(r,n.retryQueue),n=null,null!==t&&null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(n=t.memoizedState.cachePool.pool),s=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(s=r.memoizedState.cachePool.pool),s!==n&&(r.flags|=2048),null!==t&&d(Vu),null
case 24:return n=null,null!==t&&(n=t.memoizedState.cache),r.memoizedState.cache!==n&&(r.flags|=2048),wt(Lu),Ns(r),null
case 25:case 30:return null}throw Error(e(156,r.tag))}function Ts(t,r){switch(dt(r),r.tag){case 1:return 65536&(t=r.flags)?(r.flags=-65537&t|128,r):null
case 3:return wt(Lu),f(),65536&(t=r.flags)&&!(128&t)?(r.flags=-65537&t|128,r):null
case 26:case 27:case 5:return g(r),null
case 31:if(null!==r.memoizedState){if(yr(r),null===r.alternate)throw Error(e(340))
bt()}return 65536&(t=r.flags)?(r.flags=-65537&t|128,r):null
case 13:if(yr(r),null!==(t=r.memoizedState)&&null!==t.dehydrated){if(null===r.alternate)throw Error(e(340))
bt()}return 65536&(t=r.flags)?(r.flags=-65537&t|128,r):null
case 19:return d(sd),null
case 4:return f(),null
case 10:return wt(r.type),null
case 22:case 23:return yr(r),pr(),null!==t&&d(Vu),65536&(t=r.flags)?(r.flags=-65537&t|128,r):null
case 24:return wt(Lu),null
default:return null}}function Cs(e,t){switch(dt(t),t.tag){case 3:wt(Lu),f()
break
case 26:case 27:case 5:g(t)
break
case 4:f()
break
case 31:null!==t.memoizedState&&yr(t)
break
case 13:yr(t)
break
case 19:d(sd)
break
case 10:wt(t.type)
break
case 22:case 23:yr(t),pr(),null!==e&&d(Vu)
break
case 24:wt(Lu)}}function Rs(e,t){try{var r=t.updateQueue,n=null!==r?r.lastEffect:null
if(null!==n){var s=n.next
r=s
do{if((r.tag&e)===e){n=void 0
var a=r.create,i=r.inst
n=a(),i.destroy=n}r=r.next}while(r!==s)}}catch(o){Ga(t,t.return,o)}}function Ps(e,t,r){try{var n=t.updateQueue,s=null!==n?n.lastEffect:null
if(null!==s){var a=s.next
n=a
do{if((n.tag&e)===e){var i=n.inst,o=i.destroy
if(void 0!==o){i.destroy=void 0,s=t
var l=r,c=o
try{c()}catch(u){Ga(s,l,u)}}}n=n.next}while(n!==a)}}catch(u){Ga(t,t.return,u)}}function As(e){var t=e.updateQueue
if(null!==t){var r=e.stateNode
try{ur(t,r)}catch(n){Ga(e,e.return,n)}}}function Os(e,t,r){r.props=Bn(e.type,e.memoizedProps),r.state=e.memoizedState
try{r.componentWillUnmount()}catch(n){Ga(e,t,n)}}function Is(e,t){try{var r=e.ref
if(null!==r){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode
break
default:n=e.stateNode}"function"==typeof r?e.refCleanup=r(n):r.current=n}}catch(s){Ga(e,t,s)}}function zs(e,t){var r=e.ref,n=e.refCleanup
if(null!==r)if("function"==typeof n)try{n()}catch(s){Ga(e,t,s)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof r)try{r(null)}catch(a){Ga(e,t,a)}else r.current=null}function Ls(e){var t=e.type,r=e.memoizedProps,n=e.stateNode
try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&n.focus()
break e
case"img":r.src?n.src=r.src:r.srcSet&&(n.srcset=r.srcSet)}}catch(s){Ga(e,e.return,s)}}function Ds(t,r,n){try{var s=t.stateNode
!function(t,r,n,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"input":var a=null,i=null,o=null,l=null,c=null,u=null,d=null
for(f in n){var h=n[f]
if(n.hasOwnProperty(f)&&null!=h)switch(f){case"checked":case"value":break
case"defaultValue":c=h
default:s.hasOwnProperty(f)||wi(t,r,f,null,s,h)}}for(var p in s){var f=s[p]
if(h=n[p],s.hasOwnProperty(p)&&(null!=f||null!=h))switch(p){case"type":i=f
break
case"name":a=f
break
case"checked":u=f
break
case"defaultChecked":d=f
break
case"value":o=f
break
case"defaultValue":l=f
break
case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(e(137,r))
break
default:f!==h&&wi(t,r,p,f,s,h)}}return void Q(t,o,l,c,u,d,i,a)
case"select":for(i in f=o=l=p=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break
case"multiple":f=c
default:s.hasOwnProperty(i)||wi(t,r,i,null,s,c)}for(a in s)if(i=s[a],c=n[a],s.hasOwnProperty(a)&&(null!=i||null!=c))switch(a){case"value":p=i
break
case"defaultValue":l=i
break
case"multiple":o=i
default:i!==c&&wi(t,r,a,i,s,c)}return r=l,n=o,s=f,void(null!=p?re(t,!!n,p,!1):!!s!=!!n&&(null!=r?re(t,!!n,r,!0):re(t,!!n,n?[]:"",!1)))
case"textarea":for(l in f=p=null,n)if(a=n[l],n.hasOwnProperty(l)&&null!=a&&!s.hasOwnProperty(l))switch(l){case"value":case"children":break
default:wi(t,r,l,null,s,a)}for(o in s)if(a=s[o],i=n[o],s.hasOwnProperty(o)&&(null!=a||null!=i))switch(o){case"value":p=a
break
case"defaultValue":f=a
break
case"children":break
case"dangerouslySetInnerHTML":if(null!=a)throw Error(e(91))
break
default:a!==i&&wi(t,r,o,a,s,i)}return void ne(t,p,f)
case"option":for(var m in n)p=n[m],n.hasOwnProperty(m)&&null!=p&&!s.hasOwnProperty(m)&&("selected"===m?t.selected=!1:wi(t,r,m,null,s,p))
for(c in s)p=s[c],f=n[c],!s.hasOwnProperty(c)||p===f||null==p&&null==f||("selected"===c?t.selected=p&&"function"!=typeof p&&"symbol"!=typeof p:wi(t,r,c,p,s,f))
return
case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!s.hasOwnProperty(g)&&wi(t,r,g,null,s,p)
for(u in s)if(p=s[u],f=n[u],s.hasOwnProperty(u)&&p!==f&&(null!=p||null!=f))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(e(137,r))
break
default:wi(t,r,u,p,s,f)}return
default:if(le(r)){for(var b in n)p=n[b],n.hasOwnProperty(b)&&void 0!==p&&!s.hasOwnProperty(b)&&ki(t,r,b,void 0,s,p)
for(d in s)p=s[d],f=n[d],!s.hasOwnProperty(d)||p===f||void 0===p&&void 0===f||ki(t,r,d,p,s,f)
return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&null!=p&&!s.hasOwnProperty(y)&&wi(t,r,y,null,s,p)
for(h in s)p=s[h],f=n[h],!s.hasOwnProperty(h)||p===f||null==p&&null==f||wi(t,r,h,p,s,f)}(s,t.type,n,r),s[zl]=r}catch(a){Ga(t,t.return,a)}}function Us(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Ri(e.type)||4===e.tag}function Fs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Us(e.return))return null
e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Ri(e.type))continue e
if(2&e.flags)continue e
if(null===e.child||4===e.tag)continue e
e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Bs(e,t,r){var n=e.tag
if(5===n||6===n)e=e.stateNode,t?(9===r.nodeType?r.body:"HTML"===r.nodeName?r.ownerDocument.body:r).insertBefore(e,t):((t=9===r.nodeType?r.body:"HTML"===r.nodeName?r.ownerDocument.body:r).appendChild(e),null!=(r=r._reactRootContainer)||null!==t.onclick||(t.onclick=ue))
else if(4!==n&&(27===n&&Ri(e.type)&&(r=e.stateNode,t=null),null!==(e=e.child)))for(Bs(e,t,r),e=e.sibling;null!==e;)Bs(e,t,r),e=e.sibling}function Ws(e,t,r){var n=e.tag
if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e)
else if(4!==n&&(27===n&&Ri(e.type)&&(r=e.stateNode),null!==(e=e.child)))for(Ws(e,t,r),e=e.sibling;null!==e;)Ws(e,t,r),e=e.sibling}function Vs(e){var t=e.stateNode,r=e.memoizedProps
try{for(var n=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0])
ji(t,n,r),t[Il]=e,t[zl]=r}catch(a){Ga(e,e.return,a)}}function qs(e,t,r){var n=r.flags
switch(r.tag){case 0:case 11:case 15:ea(e,r),4&n&&Rs(5,r)
break
case 1:if(ea(e,r),4&n)if(e=r.stateNode,null===t)try{e.componentDidMount()}catch(i){Ga(r,r.return,i)}else{var s=Bn(r.type,t.memoizedProps)
t=t.memoizedState
try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ga(r,r.return,o)}}64&n&&As(r),512&n&&Is(r,r.return)
break
case 3:if(ea(e,r),64&n&&null!==(e=r.updateQueue)){if(t=null,null!==r.child)switch(r.child.tag){case 27:case 5:case 1:t=r.child.stateNode}try{ur(e,t)}catch(i){Ga(r,r.return,i)}}break
case 27:null===t&&4&n&&Vs(r)
case 26:case 5:ea(e,r),null===t&&4&n&&Ls(r),512&n&&Is(r,r.return)
break
case 12:ea(e,r)
break
case 31:ea(e,r),4&n&&Gs(e,r)
break
case 13:ea(e,r),4&n&&Ys(e,r),64&n&&null!==(e=r.memoizedState)&&null!==(e=e.dehydrated)&&function(e,t){var r=e.ownerDocument
if("$~"===e.data)e._reactRetry=t
else if("$?"!==e.data||"loading"!==r.readyState)t()
else{var n=function(){t(),r.removeEventListener("DOMContentLoaded",n)}
r.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}(e,r=Za.bind(null,r))
break
case 22:if(!(n=null!==r.memoizedState||Sd)){t=null!==t&&null!==t.memoizedState||_d,s=Sd
var a=_d
Sd=n,(_d=t)&&!a?ra(e,r,!!(8772&r.subtreeFlags)):ea(e,r),Sd=s,_d=a}break
case 30:break
default:ea(e,r)}}function Ms(e){var t=e.alternate
null!==t&&(e.alternate=null,Ms(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&null!==(t=e.stateNode)&&L(t),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hs(e,t,r){for(r=r.child;null!==r;)Ks(e,t,r),r=r.sibling}function Ks(e,t,r){if(Nl&&"function"==typeof Nl.onCommitFiberUnmount)try{Nl.onCommitFiberUnmount(_l,r)}catch(a){}switch(r.tag){case 26:_d||zs(r,t),Hs(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode).parentNode.removeChild(r)
break
case 27:_d||zs(r,t)
var n=Cd,s=Rd
Ri(r.type)&&(Cd=r.stateNode,Rd=!1),Hs(e,t,r),Wi(r.stateNode),Cd=n,Rd=s
break
case 5:_d||zs(r,t)
case 6:if(n=Cd,s=Rd,Cd=null,Hs(e,t,r),Rd=s,null!==(Cd=n))if(Rd)try{(9===Cd.nodeType?Cd.body:"HTML"===Cd.nodeName?Cd.ownerDocument.body:Cd).removeChild(r.stateNode)}catch(i){Ga(r,t,i)}else try{Cd.removeChild(r.stateNode)}catch(i){Ga(r,t,i)}break
case 18:null!==Cd&&(Rd?(Pi(9===(e=Cd).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,r.stateNode),Co(e)):Pi(Cd,r.stateNode))
break
case 4:n=Cd,s=Rd,Cd=r.stateNode.containerInfo,Rd=!0,Hs(e,t,r),Cd=n,Rd=s
break
case 0:case 11:case 14:case 15:Ps(2,r,t),_d||Ps(4,r,t),Hs(e,t,r)
break
case 1:_d||(zs(r,t),"function"==typeof(n=r.stateNode).componentWillUnmount&&Os(r,t,n)),Hs(e,t,r)
break
case 21:Hs(e,t,r)
break
case 22:_d=(n=_d)||null!==r.memoizedState,Hs(e,t,r),_d=n
break
default:Hs(e,t,r)}}function Gs(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)){e=e.dehydrated
try{Co(e)}catch(r){Ga(t,t.return,r)}}}function Ys(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))try{Co(e)}catch(r){Ga(t,t.return,r)}}function Js(t,r){var n=function(t){switch(t.tag){case 31:case 13:case 19:var r=t.stateNode
return null===r&&(r=t.stateNode=new Ed),r
case 22:return null===(r=(t=t.stateNode)._retryCache)&&(r=t._retryCache=new Ed),r
default:throw Error(e(435,t.tag))}}(t)
r.forEach(function(e){if(!n.has(e)){n.add(e)
var r=$a.bind(null,t,e)
e.then(r,r)}})}function Xs(t,r){var n=r.deletions
if(null!==n)for(var s=0;s<n.length;s++){var a=n[s],i=t,o=r,l=o
e:for(;null!==l;){switch(l.tag){case 27:if(Ri(l.type)){Cd=l.stateNode,Rd=!1
break e}break
case 5:Cd=l.stateNode,Rd=!1
break e
case 3:case 4:Cd=l.stateNode.containerInfo,Rd=!0
break e}l=l.return}if(null===Cd)throw Error(e(160))
Ks(i,o,a),Cd=null,Rd=!1,null!==(i=a.alternate)&&(i.return=null),a.return=null}if(13886&r.subtreeFlags)for(r=r.child;null!==r;)Zs(r,t),r=r.sibling}function Zs(t,r){var n=t.alternate,s=t.flags
switch(t.tag){case 0:case 11:case 14:case 15:Xs(r,t),$s(t),4&s&&(Ps(3,t,t.return),Rs(3,t),Ps(5,t,t.return))
break
case 1:Xs(r,t),$s(t),512&s&&(_d||null===n||zs(n,n.return)),64&s&&Sd&&null!==(t=t.updateQueue)&&null!==(s=t.callbacks)&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=null===n?s:n.concat(s))
break
case 26:var a=Pd
if(Xs(r,t),$s(t),512&s&&(_d||null===n||zs(n,n.return)),4&s){var i=null!==n?n.memoizedState:null
if(s=t.memoizedState,null===n)if(null===s)if(null===t.stateNode){e:{s=t.type,n=t.memoizedProps,a=a.ownerDocument||a
t:switch(s){case"title":(!(i=a.getElementsByTagName("title")[0])||i[Wl]||i[Il]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=a.createElement(s),a.head.insertBefore(i,a.querySelector("head > title"))),ji(i,s,n),i[Il]=t,W(i),s=i
break e
case"link":var o=eo("link","href",a).get(s+(n.href||""))
if(o)for(var l=0;l<o.length;l++)if((i=o[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){o.splice(l,1)
break t}ji(i=a.createElement(s),s,n),a.head.appendChild(i)
break
case"meta":if(o=eo("meta","content",a).get(s+(n.content||"")))for(l=0;l<o.length;l++)if((i=o[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){o.splice(l,1)
break t}ji(i=a.createElement(s),s,n),a.head.appendChild(i)
break
default:throw Error(e(468,s))}i[Il]=t,W(i),s=i}t.stateNode=s}else to(a,t.type,t.stateNode)
else t.stateNode=Xi(a,s,t.memoizedProps)
else i!==s?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===s?to(a,t.type,t.stateNode):Xi(a,s,t.memoizedProps)):null===s&&null!==t.stateNode&&Ds(t,t.memoizedProps,n.memoizedProps)}break
case 27:Xs(r,t),$s(t),512&s&&(_d||null===n||zs(n,n.return)),null!==n&&4&s&&Ds(t,t.memoizedProps,n.memoizedProps)
break
case 5:if(Xs(r,t),$s(t),512&s&&(_d||null===n||zs(n,n.return)),32&t.flags){a=t.stateNode
try{ae(a,"")}catch(m){Ga(t,t.return,m)}}4&s&&null!=t.stateNode&&Ds(t,a=t.memoizedProps,null!==n?n.memoizedProps:a),1024&s&&(Nd=!0)
break
case 6:if(Xs(r,t),$s(t),4&s){if(null===t.stateNode)throw Error(e(162))
s=t.memoizedProps,n=t.stateNode
try{n.nodeValue=s}catch(m){Ga(t,t.return,m)}}break
case 3:if(Fh=null,a=Pd,Pd=Vi(r.containerInfo),Xs(r,t),Pd=a,$s(t),4&s&&null!==n&&n.memoizedState.isDehydrated)try{Co(r.containerInfo)}catch(m){Ga(t,t.return,m)}Nd&&(Nd=!1,Qs(t))
break
case 4:s=Pd,Pd=Vi(t.stateNode.containerInfo),Xs(r,t),$s(t),Pd=s
break
case 12:default:Xs(r,t),$s(t)
break
case 31:case 19:Xs(r,t),$s(t),4&s&&null!==(s=t.updateQueue)&&(t.updateQueue=null,Js(t,s))
break
case 13:Xs(r,t),$s(t),8192&t.child.flags&&null!==t.memoizedState!=(null!==n&&null!==n.memoizedState)&&(eh=gl()),4&s&&null!==(s=t.updateQueue)&&(t.updateQueue=null,Js(t,s))
break
case 22:a=null!==t.memoizedState
var c=null!==n&&null!==n.memoizedState,u=Sd,d=_d
if(Sd=u||a,_d=d||c,Xs(r,t),_d=d,Sd=u,$s(t),8192&s)e:for(r=t.stateNode,r._visibility=a?-2&r._visibility:1|r._visibility,a&&(null===n||c||Sd||_d||ta(t)),n=null,r=t;;){if(5===r.tag||26===r.tag){if(null===n){c=n=r
try{if(i=c.stateNode,a)"function"==typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none"
else{l=c.stateNode
var h=c.memoizedProps.style,p=null!=h&&h.hasOwnProperty("display")?h.display:null
l.style.display=null==p||"boolean"==typeof p?"":(""+p).trim()}}catch(m){Ga(c,c.return,m)}}}else if(6===r.tag){if(null===n){c=r
try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(m){Ga(c,c.return,m)}}}else if(18===r.tag){if(null===n){c=r
try{var f=c.stateNode
a?Ai(f,!0):Ai(c.stateNode,!1)}catch(m){Ga(c,c.return,m)}}}else if((22!==r.tag&&23!==r.tag||null===r.memoizedState||r===t)&&null!==r.child){r.child.return=r,r=r.child
continue}if(r===t)break e
for(;null===r.sibling;){if(null===r.return||r.return===t)break e
n===r&&(n=null),r=r.return}n===r&&(n=null),r.sibling.return=r.return,r=r.sibling}4&s&&null!==(s=t.updateQueue)&&null!==(n=s.retryQueue)&&(s.retryQueue=null,Js(t,n))
case 30:case 21:}}function $s(t){var r=t.flags
if(2&r){try{for(var n,s=t.return;null!==s;){if(Us(s)){n=s
break}s=s.return}if(null==n)throw Error(e(160))
switch(n.tag){case 27:var a=n.stateNode
Ws(t,Fs(t),a)
break
case 5:var i=n.stateNode
32&n.flags&&(ae(i,""),n.flags&=-33),Ws(t,Fs(t),i)
break
case 3:case 4:var o=n.stateNode.containerInfo
Bs(t,Fs(t),o)
break
default:throw Error(e(161))}}catch(l){Ga(t,t.return,l)}t.flags&=-3}4096&r&&(t.flags&=-4097)}function Qs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e
Qs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)qs(e,t.alternate,t),t=t.sibling}function ta(e){for(e=e.child;null!==e;){var t=e
switch(t.tag){case 0:case 11:case 14:case 15:Ps(4,t,t.return),ta(t)
break
case 1:zs(t,t.return)
var r=t.stateNode
"function"==typeof r.componentWillUnmount&&Os(t,t.return,r),ta(t)
break
case 27:Wi(t.stateNode)
case 26:case 5:zs(t,t.return),ta(t)
break
case 22:null===t.memoizedState&&ta(t)
break
default:ta(t)}e=e.sibling}}function ra(e,t,r){for(r=r&&!!(8772&t.subtreeFlags),t=t.child;null!==t;){var n=t.alternate,s=e,a=t,i=a.flags
switch(a.tag){case 0:case 11:case 15:ra(s,a,r),Rs(4,a)
break
case 1:if(ra(s,a,r),"function"==typeof(s=(n=a).stateNode).componentDidMount)try{s.componentDidMount()}catch(c){Ga(n,n.return,c)}if(null!==(s=(n=a).updateQueue)){var o=n.stateNode
try{var l=s.shared.hiddenCallbacks
if(null!==l)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)sr(l[s],o)}catch(c){Ga(n,n.return,c)}}r&&64&i&&As(a),Is(a,a.return)
break
case 27:Vs(a)
case 26:case 5:ra(s,a,r),r&&null===n&&4&i&&Ls(a),Is(a,a.return)
break
case 12:ra(s,a,r)
break
case 31:ra(s,a,r),r&&4&i&&Gs(s,a)
break
case 13:ra(s,a,r),r&&4&i&&Ys(s,a)
break
case 22:null===a.memoizedState&&ra(s,a,r),Is(a,a.return)
break
case 30:break
default:ra(s,a,r)}t=t.sibling}}function na(e,t){var r=null
null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==r&&(null!=e&&e.refCount++,null!=r&&Pt(r))}function sa(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Pt(e))}function aa(e,t,r,n){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)ia(e,t,r,n),t=t.sibling}function ia(e,t,r,n){var s=t.flags
switch(t.tag){case 0:case 11:case 15:aa(e,t,r,n),2048&s&&Rs(9,t)
break
case 1:case 31:case 13:default:aa(e,t,r,n)
break
case 3:aa(e,t,r,n),2048&s&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Pt(e)))
break
case 12:if(2048&s){aa(e,t,r,n),e=t.stateNode
try{var a=t.memoizedProps,i=a.id,o=a.onPostCommit
"function"==typeof o&&o(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){Ga(t,t.return,l)}}else aa(e,t,r,n)
break
case 23:break
case 22:a=t.stateNode,i=t.alternate,null!==t.memoizedState?2&a._visibility?aa(e,t,r,n):la(e,t):2&a._visibility?aa(e,t,r,n):(a._visibility|=2,oa(e,t,r,n,!!(10256&t.subtreeFlags)||!1)),2048&s&&na(i,t)
break
case 24:aa(e,t,r,n),2048&s&&sa(t.alternate,t)}}function oa(e,t,r,n,s){for(s=s&&(!!(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var a=e,i=t,o=r,l=n,c=i.flags
switch(i.tag){case 0:case 11:case 15:oa(a,i,o,l,s),Rs(8,i)
break
case 23:break
case 22:var u=i.stateNode
null!==i.memoizedState?2&u._visibility?oa(a,i,o,l,s):la(a,i):(u._visibility|=2,oa(a,i,o,l,s)),s&&2048&c&&na(i.alternate,i)
break
case 24:oa(a,i,o,l,s),s&&2048&c&&sa(i.alternate,i)
break
default:oa(a,i,o,l,s)}t=t.sibling}}function la(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var r=e,n=t,s=n.flags
switch(n.tag){case 22:la(r,n),2048&s&&na(n.alternate,n)
break
case 24:la(r,n),2048&s&&sa(n.alternate,n)
break
default:la(r,n)}t=t.sibling}}function ca(e,t,r){if(e.subtreeFlags&Ad)for(e=e.child;null!==e;)ua(e,t,r),e=e.sibling}function ua(e,t,r){switch(e.tag){case 26:ca(e,t,r),e.flags&Ad&&null!==e.memoizedState&&function(e,t,r,n){if(!("stylesheet"!==r.type||"string"==typeof n.media&&!1===matchMedia(n.media).matches||4&r.state.loading)){if(null===r.instance){var s=Hi(n.href),a=t.querySelector(Ki(s))
if(a)return null!==(t=a._p)&&"object"==typeof t&&"function"==typeof t.then&&(e.count++,e=no.bind(e),t.then(e,e)),r.state.loading|=4,r.instance=a,void W(a)
a=t.ownerDocument||t,n=Gi(n),(s=zh.get(s))&&$i(n,s),W(a=a.createElement("link"))
var i=a
i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),ji(a,"link",n),r.instance=a}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(r,t),(t=r.state.preload)&&!(3&r.state.loading)&&(e.count++,r=no.bind(e),t.addEventListener("load",r),t.addEventListener("error",r))}}(r,Pd,e.memoizedState,e.memoizedProps)
break
case 5:default:ca(e,t,r)
break
case 3:case 4:var n=Pd
Pd=Vi(e.stateNode.containerInfo),ca(e,t,r),Pd=n
break
case 22:null===e.memoizedState&&(null!==(n=e.alternate)&&null!==n.memoizedState?(n=Ad,Ad=16777216,ca(e,t,r),Ad=n):ca(e,t,r))}}function da(e){var t=e.alternate
if(null!==t&&null!==(e=t.child)){t.child=null
do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function ha(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r]
Td=n,ma(n,e)}da(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)pa(e),e=e.sibling}function pa(e){switch(e.tag){case 0:case 11:case 15:ha(e),2048&e.flags&&Ps(9,e,e.return)
break
case 3:case 12:default:ha(e)
break
case 22:var t=e.stateNode
null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,fa(e)):ha(e)}}function fa(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r]
Td=n,ma(n,e)}da(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Ps(8,t,t.return),fa(t)
break
case 22:2&(r=t.stateNode)._visibility&&(r._visibility&=-3,fa(t))
break
default:fa(t)}e=e.sibling}}function ma(e,t){for(;null!==Td;){var r=Td
switch(r.tag){case 0:case 11:case 15:Ps(8,r,t)
break
case 23:case 22:if(null!==r.memoizedState&&null!==r.memoizedState.cachePool){var n=r.memoizedState.cachePool.pool
null!=n&&n.refCount++}break
case 24:Pt(r.memoizedState.cache)}if(null!==(n=r.child))n.return=r,Td=n
else e:for(r=e;null!==Td;){var s=(n=Td).sibling,a=n.return
if(Ms(n),n===r){Td=null
break e}if(null!==s){s.return=a,Td=s
break e}Td=a}}}function ga(){return 2&zd&&0!==Ud?Ud&-Ud:null!==tl.T?ii():I()}function ba(){if(0===Jd)if(536870912&Ud&&!Nu)Jd=536870912
else{var e=Pl
!(3932160&(Pl<<=1))&&(Pl=262144),Jd=e}return null!==(e=rd.current)&&(e.flags|=32),Jd}function ya(e,t,r){(e!==Ld||2!==Fd&&9!==Fd)&&null===e.cancelPendingCommit||(_a(e,0),ka(e,Ud,Jd,!1)),T(e,r),2&zd&&e===Ld||(e===Ld&&(!(2&zd)&&(Gd|=r),4===Hd&&ka(e,Ud,Jd,!1)),Qa(e))}function va(t,r,n){if(6&zd)throw Error(e(327))
for(var s=!n&&!(127&r)&&0===(r&t.expiredLanes)||S(t,r),a=s?function(t,r){var n=zd
zd|=2
var s=Ta(),a=Ca()
Ld!==t||Ud!==r?(nh=null,rh=gl()+500,_a(t,r)):Vd=S(t,r)
e:for(;;)try{if(0!==Fd&&null!==Dd){r=Dd
var i=Bd
t:switch(Fd){case 1:Fd=0,Bd=null,La(t,r,i,1)
break
case 2:case 9:if(Lt(i)){Fd=0,Bd=null,za(r)
break}r=function(){2!==Fd&&9!==Fd||Ld!==t||(Fd=7),Qa(t)},i.then(r,r)
break e
case 3:Fd=7
break e
case 4:Fd=5
break e
case 7:Lt(i)?(Fd=0,Bd=null,za(r)):(Fd=0,Bd=null,La(t,r,i,7))
break
case 5:var o=null
switch(Dd.tag){case 26:o=Dd.memoizedState
case 5:case 27:var l=Dd
if(o?ro(o):l.stateNode.complete){Fd=0,Bd=null
var c=l.sibling
if(null!==c)Dd=c
else{var u=l.return
null!==u?(Dd=u,Da(u)):Dd=null}break t}}Fd=0,Bd=null,La(t,r,i,5)
break
case 6:Fd=0,Bd=null,La(t,r,i,6)
break
case 8:Sa(),Hd=6
break e
default:throw Error(e(462))}}Oa()
break}catch(d){Na(t,d)}return Au=Pu=null,tl.H=s,tl.A=a,zd=n,null!==Dd?0:(Ld=null,Ud=0,He(),Hd)}(t,r):Pa(t,r,!0),i=s;;){if(0===a){Vd&&!s&&ka(t,r,0,!1)
break}if(n=t.current.alternate,!i||wa(n)){if(2===a){if(i=r,t.errorRecoveryDisabledLanes&i)var o=0
else o=0!=(o=-536870913&t.pendingLanes)?o:536870912&o?536870912:0
if(0!==o){r=o
e:{var l=t
a=Zd
var c=l.current.memoizedState.isDehydrated
if(c&&(_a(l,o).flags|=256),2!==(o=Pa(l,o,!1))){if(qd&&!c){l.errorRecoveryDisabledLanes|=i,Gd|=i,a=4
break e}i=$d,$d=a,null!==i&&(null===$d?$d=i:$d.push.apply($d,i))}a=o}if(i=!1,2!==a)continue}}if(1===a){_a(t,0),ka(t,r,0,!0)
break}e:{switch(s=t,i=a){case 0:case 1:throw Error(e(345))
case 4:if((4194048&r)!==r)break
case 6:ka(s,r,Jd,!Wd)
break e
case 2:$d=null
break
case 3:case 5:break
default:throw Error(e(329))}if((62914560&r)===r&&10<(a=eh+300-gl())){if(ka(s,r,Jd,!Wd),0!==j(s,0,!0))break e
lh=r,s.timeoutHandle=Rh(xa.bind(null,s,n,$d,nh,Qd,r,Jd,Gd,Xd,Wd,i,"Throttled",-0,0),a)}else xa(s,n,$d,nh,Qd,r,Jd,Gd,Xd,Wd,i,null,-0,0)}break}a=Pa(t,r,!1),i=!1}Qa(t)}function xa(e,t,r,n,s,a,i,o,l,c,u,d,h,p){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||!(16785408&~d)){ua(t,a,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ue})
var f=(62914560&a)===a?eh-gl():(4194048&a)===a?th-gl():0
if(null!==(f=function(e,t){return e.stylesheets&&0===e.count&&so(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var n=setTimeout(function(){if(e.stylesheets&&so(e,e.stylesheets),e.unsuspend){var t=e.unsuspend
e.unsuspend=null,t()}},6e4+t)
0<e.imgBytes&&0===Bh&&(Bh=62500*function(){if("function"==typeof performance.getEntriesByType){for(var e=0,t=0,r=performance.getEntriesByType("resource"),n=0;n<r.length;n++){var s=r[n],a=s.transferSize,i=s.initiatorType,o=s.duration
if(a&&o&&Si(i)){for(i=0,o=s.responseEnd,n+=1;n<r.length;n++){var l=r[n],c=l.startTime
if(c>o)break
var u=l.transferSize,d=l.initiatorType
u&&Si(d)&&(i+=u*((l=l.responseEnd)<o?1:(o-c)/(l-c)))}if(--n,t+=8*(a+i)/(s.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"==typeof(e=navigator.connection.downlink)?e:5}())
var s=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&so(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend
e.unsuspend=null,t()}},(e.imgBytes>Bh?50:800)+t)
return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(s)}}:null}(d,f)))return lh=a,e.cancelPendingCommit=f(Fa.bind(null,e,t,a,r,n,s,i,o,l,u,d,null,h,p)),void ka(e,a,i,!c)}Fa(e,t,a,r,n,s,i,o,l)}function wa(e){for(var t=e;;){var r=t.tag
if((0===r||11===r||15===r)&&16384&t.flags&&null!==(r=t.updateQueue)&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var s=r[n],a=s.getSnapshot
s=s.value
try{if(!Hc(a(),s))return!1}catch(i){return!1}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r
else{if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return!0
t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t,r,n){t&=~Yd,t&=~Gd,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes
for(var s=t;0<s;){var a=31-El(s),i=1<<a
n[a]=-1,s&=~i}0!==r&&C(e,r,t)}function ja(){return!!(6&zd)||(ei(0),!1)}function Sa(){if(null!==Dd){if(0===Fd)var e=Dd.return
else Au=Pu=null,Tr(e=Dd),Yu=null,Ju=0,e=Dd
for(;null!==e;)Cs(e.alternate,e),e=e.return
Dd=null}}function _a(e,t){var r=e.timeoutHandle;-1!==r&&(e.timeoutHandle=-1,Ph(r)),null!==(r=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,r()),lh=0,Sa(),Ld=e,Dd=r=et(e.current,null),Ud=t,Fd=0,Bd=null,Wd=!1,Vd=S(e,t),qd=!1,Xd=Jd=Yd=Gd=Kd=Hd=0,$d=Zd=null,Qd=!1,8&t&&(t|=32&t)
var n=e.entangledLanes
if(0!==n)for(e=e.entanglements,n&=t;0<n;){var s=31-El(n),a=1<<s
t|=e[s],n&=~a}return Md=t,He(),r}function Na(e,t){id=null,tl.H=gd,t===qu||t===Hu?(t=Ft(),Fd=3):t===Mu?(t=Ft(),Fd=4):Fd=t===wd?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,Bd=t,null===Dd&&(Hd=1,Mn(e,ot(t,e.current)))}function Ea(){var e=rd.current
return null===e||((4194048&Ud)===Ud?null===nd:!!((62914560&Ud)===Ud||536870912&Ud)&&e===nd)}function Ta(){var e=tl.H
return tl.H=gd,null===e?gd:e}function Ca(){var e=tl.A
return tl.A=Od,e}function Ra(){Hd=4,Wd||(4194048&Ud)!==Ud&&null!==rd.current||(Vd=!0),!(134217727&Kd)&&!(134217727&Gd)||null===Ld||ka(Ld,Ud,Jd,!1)}function Pa(e,t,r){var n=zd
zd|=2
var s=Ta(),a=Ca()
Ld===e&&Ud===t||(nh=null,_a(e,t)),t=!1
var i=Hd
e:for(;;)try{if(0!==Fd&&null!==Dd){var o=Dd,l=Bd
switch(Fd){case 8:Sa(),i=6
break e
case 3:case 2:case 9:case 6:null===rd.current&&(t=!0)
var c=Fd
if(Fd=0,Bd=null,La(e,o,l,c),r&&Vd){i=0
break e}break
default:c=Fd,Fd=0,Bd=null,La(e,o,l,c)}}Aa(),i=Hd
break}catch(u){Na(e,u)}return t&&e.shellSuspendCounter++,Au=Pu=null,zd=n,tl.H=s,tl.A=a,null===Dd&&(Ld=null,Ud=0,He()),i}function Aa(){for(;null!==Dd;)Ia(Dd)}function Oa(){for(;null!==Dd&&!fl();)Ia(Dd)}function Ia(e){var t=xs(e.alternate,e,Md)
e.memoizedProps=e.pendingProps,null===t?Da(e):Dd=t}function za(e){var t=e,r=t.alternate
switch(t.tag){case 15:case 0:t=is(r,t,t.pendingProps,t.type,void 0,Ud)
break
case 11:t=is(r,t,t.pendingProps,t.type.render,t.ref,Ud)
break
case 5:Tr(t)
default:Cs(r,t),t=xs(r,t=Dd=tt(t,Md),Md)}e.memoizedProps=e.pendingProps,null===t?Da(e):Dd=t}function La(t,r,n,s){Au=Pu=null,Tr(r),Yu=null,Ju=0
var a=r.return
try{if(function(t,r,n,s,a){if(n.flags|=32768,null!==s&&"object"==typeof s&&"function"==typeof s.then){if(null!==(r=n.alternate)&&St(r,n,a,!0),null!==(n=rd.current)){switch(n.tag){case 31:case 13:return null===nd?Ra():null===n.alternate&&0===Hd&&(Hd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,s===Ku?n.flags|=16384:(null===(r=n.updateQueue)?n.updateQueue=new Set([s]):r.add(s),Ya(t,s,a)),!1
case 22:return n.flags|=65536,s===Ku?n.flags|=16384:(null===(r=n.updateQueue)?(r={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=r):null===(n=r.retryQueue)?r.retryQueue=new Set([s]):n.add(s),Ya(t,s,a)),!1}throw Error(e(435,n.tag))}return Ya(t,s,a),Ra(),!1}if(Nu)return null!==(r=rd.current)?(!(65536&r.flags)&&(r.flags|=256),r.flags|=65536,r.lanes=a,s!==Cu&&vt(ot(t=Error(e(422),{cause:s}),n))):(s!==Cu&&vt(ot(r=Error(e(423),{cause:s}),n)),(t=t.current.alternate).flags|=65536,a&=-a,t.lanes|=a,s=ot(s,n),tr(t,a=Kn(t.stateNode,s,a)),4!==Hd&&(Hd=2)),!1
var i=Error(e(520),{cause:s})
if(i=ot(i,n),null===Zd?Zd=[i]:Zd.push(i),4!==Hd&&(Hd=2),null===r)return!0
s=ot(s,n),n=r
do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,tr(n,t=Kn(n.stateNode,s,t)),!1
case 1:if(r=n.type,i=n.stateNode,!(128&n.flags||"function"!=typeof r.getDerivedStateFromError&&(null===i||"function"!=typeof i.componentDidCatch||null!==sh&&sh.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,Yn(a=Gn(a),t,n,s),tr(n,a),!1}n=n.return}while(null!==n)
return!1}(t,a,r,n,Ud))return Hd=1,Mn(t,ot(n,t.current)),void(Dd=null)}catch(i){if(null!==a)throw Dd=a,i
return Hd=1,Mn(t,ot(n,t.current)),void(Dd=null)}32768&r.flags?(Nu||1===s?t=!0:Vd||536870912&Ud?t=!1:(Wd=t=!0,(2===s||9===s||3===s||6===s)&&null!==(s=rd.current)&&13===s.tag&&(s.flags|=16384)),Ua(r,t)):Da(r)}function Da(e){var t=e
do{if(32768&t.flags)return void Ua(t,Wd)
e=t.return
var r=Es(t.alternate,t,Md)
if(null!==r)return void(Dd=r)
if(null!==(t=t.sibling))return void(Dd=t)
Dd=t=e}while(null!==t)
0===Hd&&(Hd=5)}function Ua(e,t){do{var r=Ts(e.alternate,e)
if(null!==r)return r.flags&=32767,void(Dd=r)
if(null!==(r=e.return)&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&null!==(e=e.sibling))return void(Dd=e)
Dd=e=r}while(null!==e)
Hd=6,Dd=null}function Fa(t,r,n,s,a,i,o,l,c){t.cancelPendingCommit=null
do{Ma()}while(0!==ah)
if(6&zd)throw Error(e(327))
if(null!==r){if(r===t.current)throw Error(e(177))
if(i=r.lanes|r.childLanes,function(e,t,r,n,s,a){var i=e.pendingLanes
e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0
var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates
for(r=i&~r;0<r;){var u=31-El(r),d=1<<u
o[u]=0,l[u]=-1
var h=c[u]
if(null!==h)for(c[u]=null,u=0;u<h.length;u++){var p=h[u]
null!==p&&(p.lane&=-536870913)}r&=~d}0!==n&&C(e,n,0),0!==a&&0===s&&0!==e.tag&&(e.suspendedLanes|=a&~(i&~t))}(t,n,i|=hu,o,l,c),t===Ld&&(Dd=Ld=null,Ud=0),oh=r,ih=t,lh=n,ch=i,uh=a,dh=s,10256&r.subtreeFlags||10256&r.flags?(t.callbackNode=null,t.callbackPriority=0,hl(xl,function(){return Ha(),null})):(t.callbackNode=null,t.callbackPriority=0),s=!!(13878&r.flags),13878&r.subtreeFlags||s){s=tl.T,tl.T=null,a=rl.p,rl.p=2,o=zd,zd|=4
try{!function(t,r){if(t=t.containerInfo,Eh=qh,Be(t=Fe(t))){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd}
else e:{var s=(n=(n=t.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection()
if(s&&0!==s.rangeCount){n=s.anchorNode
var a=s.anchorOffset,i=s.focusNode
s=s.focusOffset
try{n.nodeType,i.nodeType}catch(g){n=null
break e}var o=0,l=-1,c=-1,u=0,d=0,h=t,p=null
t:for(;;){for(var f;h!==n||0!==a&&3!==h.nodeType||(l=o+a),h!==i||0!==s&&3!==h.nodeType||(c=o+s),3===h.nodeType&&(o+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f
for(;;){if(h===t)break t
if(p===n&&++u===a&&(l=o),p===i&&++d===s&&(c=o),null!==(f=h.nextSibling))break
p=(h=p).parentNode}h=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null
for(Th={focusedElem:t,selectionRange:n},qh=!1,Td=r;null!==Td;)if(t=(r=Td).child,1028&r.subtreeFlags&&null!==t)t.return=r,Td=t
else for(;null!==Td;){switch(i=(r=Td).alternate,t=r.flags,r.tag){case 0:if(4&t&&null!==(t=null!==(t=r.updateQueue)?t.events:null))for(n=0;n<t.length;n++)(a=t[n]).ref.impl=a.nextImpl
break
case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break
case 1:if(1024&t&&null!==i){t=void 0,n=r,a=i.memoizedProps,i=i.memoizedState,s=n.stateNode
try{var m=Bn(n.type,a)
t=s.getSnapshotBeforeUpdate(m,i),s.__reactInternalSnapshotBeforeUpdate=t}catch(b){Ga(n,n.return,b)}}break
case 3:if(1024&t)if(9===(n=(t=r.stateNode.containerInfo).nodeType))Oi(t)
else if(1===n)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Oi(t)
break
default:t.textContent=""}break
default:if(1024&t)throw Error(e(163))}if(null!==(t=r.sibling)){t.return=r.return,Td=t
break}Td=r.return}}(t,r)}finally{zd=o,rl.p=a,tl.T=s}}ah=1,Ba(),Wa(),Va()}}function Ba(){if(1===ah){ah=0
var e=ih,t=oh,r=!!(13878&t.flags)
if(13878&t.subtreeFlags||r){r=tl.T,tl.T=null
var n=rl.p
rl.p=2
var s=zd
zd|=4
try{Zs(t,e)
var a=Th,i=Fe(e.containerInfo),o=a.focusedElem,l=a.selectionRange
if(i!==o&&o&&o.ownerDocument&&Ue(o.ownerDocument.documentElement,o)){if(null!==l&&Be(o)){var c=l.start,u=l.end
if(void 0===u&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length)
else{var d=o.ownerDocument||document,h=d&&d.defaultView||window
if(h.getSelection){var p=h.getSelection(),f=o.textContent.length,m=Math.min(l.start,f),g=void 0===l.end?m:Math.min(l.end,f)
!p.extend&&m>g&&(i=g,g=m,m=i)
var b=De(o,m),y=De(o,g)
if(b&&y&&(1!==p.rangeCount||p.anchorNode!==b.node||p.anchorOffset!==b.offset||p.focusNode!==y.node||p.focusOffset!==y.offset)){var v=d.createRange()
v.setStart(b.node,b.offset),p.removeAllRanges(),m>g?(p.addRange(v),p.extend(y.node,y.offset)):(v.setEnd(y.node,y.offset),p.addRange(v))}}}}for(d=[],p=o;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop})
for("function"==typeof o.focus&&o.focus(),o=0;o<d.length;o++){var x=d[o]
x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}qh=!!Eh,Th=Eh=null}finally{zd=s,rl.p=n,tl.T=r}}e.current=t,ah=2}}function Wa(){if(2===ah){ah=0
var e=ih,t=oh,r=!!(8772&t.flags)
if(8772&t.subtreeFlags||r){r=tl.T,tl.T=null
var n=rl.p
rl.p=2
var s=zd
zd|=4
try{qs(e,t.alternate,t)}finally{zd=s,rl.p=n,tl.T=r}}ah=3}}function Va(){if(4===ah||3===ah){ah=0,ml()
var e=ih,t=oh,r=lh,n=dh
10256&t.subtreeFlags||10256&t.flags?ah=5:(ah=0,oh=ih=null,qa(e,e.pendingLanes))
var s=e.pendingLanes
if(0===s&&(sh=null),O(r),t=t.stateNode,Nl&&"function"==typeof Nl.onCommitFiberRoot)try{Nl.onCommitFiberRoot(_l,t,void 0,!(128&~t.current.flags))}catch(l){}if(null!==n){t=tl.T,s=rl.p,rl.p=2,tl.T=null
try{for(var a=e.onRecoverableError,i=0;i<n.length;i++){var o=n[i]
a(o.value,{componentStack:o.stack})}}finally{tl.T=t,rl.p=s}}3&lh&&Ma(),Qa(e),s=e.pendingLanes,261930&r&&42&s?e===ph?hh++:(hh=0,ph=e):hh=0,ei(0)}}function qa(e,t){0===(e.pooledCacheLanes&=t)&&null!=(t=e.pooledCache)&&(e.pooledCache=null,Pt(t))}function Ma(){return Ba(),Wa(),Va(),Ha()}function Ha(){if(5!==ah)return!1
var t=ih,r=ch
ch=0
var n=O(lh),s=tl.T,a=rl.p
try{rl.p=32>n?32:n,tl.T=null,n=uh,uh=null
var i=ih,o=lh
if(ah=0,oh=ih=null,lh=0,6&zd)throw Error(e(331))
var l=zd
if(zd|=4,pa(i.current),ia(i,i.current,o,n),zd=l,ei(0),Nl&&"function"==typeof Nl.onPostCommitFiberRoot)try{Nl.onPostCommitFiberRoot(_l,i)}catch(c){}return!0}finally{rl.p=a,tl.T=s,qa(t,r)}}function Ka(e,t,r){t=ot(r,t),null!==(e=Qt(e,t=Kn(e.stateNode,t,2),2))&&(T(e,2),Qa(e))}function Ga(e,t,r){if(3===e.tag)Ka(e,e,r)
else for(;null!==t;){if(3===t.tag){Ka(t,e,r)
break}if(1===t.tag){var n=t.stateNode
if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===sh||!sh.has(n))){e=ot(r,e),null!==(n=Qt(t,r=Gn(2),2))&&(Yn(r,n,t,e),T(n,2),Qa(n))
break}}t=t.return}}function Ya(e,t,r){var n=e.pingCache
if(null===n){n=e.pingCache=new Id
var s=new Set
n.set(t,s)}else void 0===(s=n.get(t))&&(s=new Set,n.set(t,s))
s.has(r)||(qd=!0,s.add(r),e=Ja.bind(null,e,t,r),t.then(e,e))}function Ja(e,t,r){var n=e.pingCache
null!==n&&n.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ld===e&&(Ud&r)===r&&(4===Hd||3===Hd&&(62914560&Ud)===Ud&&300>gl()-eh?!(2&zd)&&_a(e,0):Yd|=r,Xd===Ud&&(Xd=0)),Qa(e)}function Xa(e,t){0===t&&(t=N()),null!==(e=Ye(e,t))&&(T(e,t),Qa(e))}function Za(e){var t=e.memoizedState,r=0
null!==t&&(r=t.retryLane),Xa(e,r)}function $a(t,r){var n=0
switch(t.tag){case 31:case 13:var s=t.stateNode,a=t.memoizedState
null!==a&&(n=a.retryLane)
break
case 19:s=t.stateNode
break
case 22:s=t.stateNode._retryCache
break
default:throw Error(e(314))}null!==s&&s.delete(r),Xa(t,n)}function Qa(e){e!==mh&&null===e.next&&(null===mh?fh=mh=e:mh=mh.next=e),bh=!0,gh||(gh=!0,Oh(function(){6&zd?hl(yl,ti):ri()}))}function ei(e){if(!yh&&bh){yh=!0
do{for(var t=!1,r=fh;null!==r;){if(0!==e){var n=r.pendingLanes
if(0===n)var s=0
else{var a=r.suspendedLanes,i=r.pingedLanes
s=(1<<31-El(42|e)+1)-1,s=201326741&(s&=n&~(a&~i))?201326741&s|1:s?2|s:0}0!==s&&(t=!0,ai(r,s))}else s=Ud,!(3&(s=j(r,r===Ld?s:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||S(r,s)||(t=!0,ai(r,s))
r=r.next}}while(t)
yh=!1}}function ti(){ri()}function ri(){bh=gh=!1
var e=0
0!==vh&&function(){var e=window.event
return e&&"popstate"===e.type?e!==Ch&&(Ch=e,!0):(Ch=null,!1)}()&&(e=vh)
for(var t=gl(),r=null,n=fh;null!==n;){var s=n.next,a=ni(n,t)
0===a?(n.next=null,null===r?fh=s:r.next=s,null===s&&(mh=r)):(r=n,(0!==e||3&a)&&(bh=!0)),n=s}0!==ah&&5!==ah||ei(e),0!==vh&&(vh=0)}function ni(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var i=31-El(a),o=1<<i,l=s[i];-1===l?0!==(o&r)&&0===(o&n)||(s[i]=_(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(r=Ud,r=j(e,e===(t=Ld)?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),n=e.callbackNode,0===r||e===t&&(2===Fd||9===Fd)||null!==e.cancelPendingCommit)return null!==n&&null!==n&&pl(n),e.callbackNode=null,e.callbackPriority=0
if(!(3&r)||S(e,r)){if((t=r&-r)===e.callbackPriority)return t
switch(null!==n&&pl(n),O(r)){case 2:case 8:r=vl
break
case 32:default:r=xl
break
case 268435456:r=kl}return n=si.bind(null,e),r=hl(r,n),e.callbackPriority=t,e.callbackNode=r,t}return null!==n&&null!==n&&pl(n),e.callbackPriority=2,e.callbackNode=null,2}function si(e,t){if(0!==ah&&5!==ah)return e.callbackNode=null,e.callbackPriority=0,null
var r=e.callbackNode
if(Ma()&&e.callbackNode!==r)return null
var n=Ud
return 0===(n=j(e,e===Ld?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(va(e,n,t),ni(e,gl()),null!=e.callbackNode&&e.callbackNode===r?si.bind(null,e):null)}function ai(e,t){if(Ma())return null
va(e,t,!0)}function ii(){if(0===vh){var e=Fu
0===e&&(e=Rl,!(261888&(Rl<<=1))&&(Rl=256)),vh=e}return vh}function oi(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:ce(""+e)}function li(e,t){var r=t.ownerDocument.createElement("input")
return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function ci(e,t){t=!!(4&t)
for(var r=0;r<e.length;r++){var n=e[r],s=n.event
n=n.listeners
e:{var a=void 0
if(t)for(var i=n.length-1;0<=i;i--){var o=n[i],l=o.instance,c=o.currentTarget
if(o=o.listener,l!==a&&s.isPropagationStopped())break e
a=o,s.currentTarget=c
try{a(s)}catch(u){cu(u)}s.currentTarget=null,a=l}else for(i=0;i<n.length;i++){if(l=(o=n[i]).instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break e
a=o,s.currentTarget=c
try{a(s)}catch(u){cu(u)}s.currentTarget=null,a=l}}}}function ui(e,t){var r=t[Dl]
void 0===r&&(r=t[Dl]=new Set)
var n=e+"__bubble"
r.has(n)||(pi(t,e,2,!1),r.add(n))}function di(e,t,r){var n=0
t&&(n|=4),pi(r,e,n,t)}function hi(e){if(!e[Sh]){e[Sh]=!0,Vl.forEach(function(t){"selectionchange"!==t&&(jh.has(t)||di(t,!1,e),di(t,!0,e))})
var t=9===e.nodeType?e:e.ownerDocument
null===t||t[Sh]||(t[Sh]=!0,di("selectionchange",!1,t))}}function pi(e,t,r,n){switch(xo(t)){case 2:var s=mo
break
case 8:s=go
break
default:s=bo}r=s.bind(null,t,r,e),s=void 0,!rc||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(s=!0),n?void 0!==s?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):void 0!==s?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function fi(e,t,n,s,a){var i=s
if(!(1&t||2&t||null===s))e:for(;;){if(null===s)return
var o=s.tag
if(3===o||4===o){var l=s.stateNode.containerInfo
if(l===a)break
if(4===o)for(o=s.return;null!==o;){var c=o.tag
if((3===c||4===c)&&o.stateNode.containerInfo===a)return
o=o.return}for(;null!==l;){if(null===(o=D(l)))return
if(5===(c=o.tag)||6===c||26===c||27===c){s=i=o
continue e}l=l.parentNode}}s=s.return}pe(function(){var s=i,a=de(n),o=[]
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
case eu:case tu:case ru:c=yc
break
case iu:c=Ec
break
case"scroll":case"scrollend":c=pc
break
case"wheel":c=Tc
break
case"copy":case"cut":case"paste":c=vc
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=_c
break
case"toggle":case"beforetoggle":c=Cc}var d=!!(4&t),h=!d&&("scroll"===e||"scrollend"===e),p=d?null!==l?l+"Capture":null:l
d=[]
for(var f,m=s;null!==m;){var g=m
if(f=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===f||null===p||null!=(g=fe(m,p))&&d.push(mi(m,g,f)),h)break
m=m.return}0<d.length&&(l=new c(l,u,null,n,a),o.push({event:l,listeners:d}))}}if(!(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Zl||!(u=n.relatedTarget||n.fromElement)||!D(u)&&!u[Ll])&&(c||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=s,null!==(u=(u=n.relatedTarget||n.toElement)?D(u):null)&&(h=r(u),d=u.tag,u!==h||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=s),c!==u)){if(d=mc,g="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=_c,g="onPointerLeave",p="onPointerEnter",m="pointer"),h=null==c?l:F(c),f=null==u?l:F(u),(l=new d(g,m+"leave",c,n,a)).target=h,l.relatedTarget=f,g=null,D(a)===s&&((d=new d(p,m+"enter",u,n,a)).target=f,d.relatedTarget=h,g=d),h=g,c&&u)e:{for(d=bi,m=u,f=0,g=p=c;g;g=d(g))f++
g=0
for(var b=m;b;b=d(b))g++
for(;0<f-g;)p=d(p),f--
for(;0<g-f;)m=d(m),g--
for(;f--;){if(p===m||null!==m&&p===m.alternate){d=p
break e}p=d(p),m=d(m)}d=null}else d=null
null!==c&&yi(o,l,c,d,!1),null!==u&&null!==h&&yi(o,h,u,d,!0)}if("select"===(c=(l=s?F(s):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var y=Te
else if(Se(l))if(Wc)y=Ie
else{y=Ae
var v=Pe}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?s&&le(s.elementType)&&(y=Te):y=Oe
switch(y&&(y=y(e,s))?_e(o,y,n,a):(v&&v(e,l,s),"focusout"===e&&s&&"number"===l.type&&null!=s.memoizedProps.value&&te(l,"number",l.value)),v=s?F(s):window,e){case"focusin":(Se(v)||"true"===v.contentEditable)&&(Gc=v,Yc=s,Jc=null)
break
case"focusout":Jc=Yc=Gc=null
break
case"mousedown":Xc=!0
break
case"contextmenu":case"mouseup":case"dragend":Xc=!1,We(o,n,a)
break
case"selectionchange":if(Kc)break
case"keydown":case"keyup":We(o,n,a)}var x
if(Pc)e:{switch(e){case"compositionstart":var w="onCompositionStart"
break e
case"compositionend":w="onCompositionEnd"
break e
case"compositionupdate":w="onCompositionUpdate"
break e}w=void 0}else Dc?ke(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart")
w&&(Ic&&"ko"!==n.locale&&(Dc||"onCompositionStart"!==w?"onCompositionEnd"===w&&Dc&&(x=me()):(lc="value"in(oc=a)?oc.value:oc.textContent,Dc=!0)),0<(v=gi(s,w)).length&&(w=new xc(w,e,null,n,a),o.push({event:w,listeners:v}),(x||null!==(x=je(n)))&&(w.data=x))),(x=Oc?function(e,t){switch(e){case"compositionend":return je(t)
case"keypress":return 32!==t.which?null:(Lc=!0,zc)
case"textInput":return(e=t.data)===zc&&Lc?null:e
default:return null}}(e,n):function(e,t){if(Dc)return"compositionend"===e||!Pc&&ke(e,t)?(e=me(),cc=lc=oc=null,Dc=!1,e):null
switch(e){case"paste":default:return null
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char
if(t.which)return String.fromCharCode(t.which)}return null
case"compositionend":return Ic&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(w=gi(s,"onBeforeInput")).length&&(v=new xc("onBeforeInput","beforeinput",null,n,a),o.push({event:v,listeners:w}),v.data=x),function(e,t,r,n,s){if("submit"===t&&r&&r.stateNode===s){var a=oi((s[zl]||null).action),i=n.submitter
i&&null!==(t=(t=i[zl]||null)?oi(t.formAction):i.getAttribute("formAction"))&&(a=t,i=null)
var o=new dc("action","action",null,n,s)
e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(0!==vh){var e=i?li(s,i):new FormData(s)
jn(r,{pending:!0,data:e,method:s.method,action:a},null,e)}}else"function"==typeof a&&(o.preventDefault(),e=i?li(s,i):new FormData(s),jn(r,{pending:!0,data:e,method:s.method,action:a},a,e))},currentTarget:s}]})}}(o,e,s,n,a)}ci(o,t)})}function mi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function gi(e,t){for(var r=t+"Capture",n=[];null!==e;){var s=e,a=s.stateNode
if(5!==(s=s.tag)&&26!==s&&27!==s||null===a||(null!=(s=fe(e,r))&&n.unshift(mi(e,s,a)),null!=(s=fe(e,t))&&n.push(mi(e,s,a))),3===e.tag)return n
e=e.return}return[]}function bi(e){if(null===e)return null
do{e=e.return}while(e&&5!==e.tag&&27!==e.tag)
return e||null}function yi(e,t,r,n,s){for(var a=t._reactName,i=[];null!==r&&r!==n;){var o=r,l=o.alternate,c=o.stateNode
if(o=o.tag,null!==l&&l===n)break
5!==o&&26!==o&&27!==o||null===c||(l=c,s?null!=(c=fe(r,a))&&i.unshift(mi(r,c,l)):s||null!=(c=fe(r,a))&&i.push(mi(r,c,l))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}function vi(e){return("string"==typeof e?e:""+e).replace(_h,"\n").replace(Nh,"")}function xi(e,t){return t=vi(t),vi(e)===t}function wi(t,r,n,s,a,i){switch(n){case"children":"string"==typeof s?"body"===r||"textarea"===r&&""===s||ae(t,s):("number"==typeof s||"bigint"==typeof s)&&"body"!==r&&ae(t,""+s)
break
case"className":H(t,"class",s)
break
case"tabIndex":H(t,"tabindex",s)
break
case"dir":case"role":case"viewBox":case"width":case"height":H(t,n,s)
break
case"style":oe(t,s,i)
break
case"data":if("object"!==r){H(t,"data",s)
break}case"src":case"href":if(""===s&&("a"!==r||"href"!==n)){t.removeAttribute(n)
break}if(null==s||"function"==typeof s||"symbol"==typeof s||"boolean"==typeof s){t.removeAttribute(n)
break}s=ce(""+s),t.setAttribute(n,s)
break
case"action":case"formAction":if("function"==typeof s){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')")
break}if("function"==typeof i&&("formAction"===n?("input"!==r&&wi(t,r,"name",a.name,a,null),wi(t,r,"formEncType",a.formEncType,a,null),wi(t,r,"formMethod",a.formMethod,a,null),wi(t,r,"formTarget",a.formTarget,a,null)):(wi(t,r,"encType",a.encType,a,null),wi(t,r,"method",a.method,a,null),wi(t,r,"target",a.target,a,null))),null==s||"symbol"==typeof s||"boolean"==typeof s){t.removeAttribute(n)
break}s=ce(""+s),t.setAttribute(n,s)
break
case"onClick":null!=s&&(t.onclick=ue)
break
case"onScroll":null!=s&&ui("scroll",t)
break
case"onScrollEnd":null!=s&&ui("scrollend",t)
break
case"dangerouslySetInnerHTML":if(null!=s){if("object"!=typeof s||!("__html"in s))throw Error(e(61))
if(null!=(n=s.__html)){if(null!=a.children)throw Error(e(60))
t.innerHTML=n}}break
case"multiple":t.multiple=s&&"function"!=typeof s&&"symbol"!=typeof s
break
case"muted":t.muted=s&&"function"!=typeof s&&"symbol"!=typeof s
break
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break
case"xlinkHref":if(null==s||"function"==typeof s||"boolean"==typeof s||"symbol"==typeof s){t.removeAttribute("xlink:href")
break}n=ce(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n)
break
case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=s&&"function"!=typeof s&&"symbol"!=typeof s?t.setAttribute(n,""+s):t.removeAttribute(n)
break
case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&"function"!=typeof s&&"symbol"!=typeof s?t.setAttribute(n,""):t.removeAttribute(n)
break
case"capture":case"download":!0===s?t.setAttribute(n,""):!1!==s&&null!=s&&"function"!=typeof s&&"symbol"!=typeof s?t.setAttribute(n,s):t.removeAttribute(n)
break
case"cols":case"rows":case"size":case"span":null!=s&&"function"!=typeof s&&"symbol"!=typeof s&&!isNaN(s)&&1<=s?t.setAttribute(n,s):t.removeAttribute(n)
break
case"rowSpan":case"start":null==s||"function"==typeof s||"symbol"==typeof s||isNaN(s)?t.removeAttribute(n):t.setAttribute(n,s)
break
case"popover":ui("beforetoggle",t),ui("toggle",t),M(t,"popover",s)
break
case"xlinkActuate":K(t,"http://www.w3.org/1999/xlink","xlink:actuate",s)
break
case"xlinkArcrole":K(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s)
break
case"xlinkRole":K(t,"http://www.w3.org/1999/xlink","xlink:role",s)
break
case"xlinkShow":K(t,"http://www.w3.org/1999/xlink","xlink:show",s)
break
case"xlinkTitle":K(t,"http://www.w3.org/1999/xlink","xlink:title",s)
break
case"xlinkType":K(t,"http://www.w3.org/1999/xlink","xlink:type",s)
break
case"xmlBase":K(t,"http://www.w3.org/XML/1998/namespace","xml:base",s)
break
case"xmlLang":K(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s)
break
case"xmlSpace":K(t,"http://www.w3.org/XML/1998/namespace","xml:space",s)
break
case"is":M(t,"is",s)
break
case"innerText":case"textContent":break
default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&M(t,n=Jl.get(n)||n,s)}}function ki(t,r,n,s,a,i){switch(n){case"style":oe(t,s,i)
break
case"dangerouslySetInnerHTML":if(null!=s){if("object"!=typeof s||!("__html"in s))throw Error(e(61))
if(null!=(n=s.__html)){if(null!=a.children)throw Error(e(60))
t.innerHTML=n}}break
case"children":"string"==typeof s?ae(t,s):("number"==typeof s||"bigint"==typeof s)&&ae(t,""+s)
break
case"onScroll":null!=s&&ui("scroll",t)
break
case"onScrollEnd":null!=s&&ui("scrollend",t)
break
case"onClick":null!=s&&(t.onclick=ue)
break
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break
default:ql.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),r=n.slice(2,a?n.length-7:void 0),"function"==typeof(i=null!=(i=t[zl]||null)?i[n]:null)&&t.removeEventListener(r,i,a),"function"!=typeof s)?n in t?t[n]=s:!0===s?t.setAttribute(n,""):M(t,n,s):("function"!=typeof i&&null!==i&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(r,s,a)))}}function ji(t,r,n){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"img":ui("error",t),ui("load",t)
var s,a=!1,i=!1
for(s in n)if(n.hasOwnProperty(s)){var o=n[s]
if(null!=o)switch(s){case"src":a=!0
break
case"srcSet":i=!0
break
case"children":case"dangerouslySetInnerHTML":throw Error(e(137,r))
default:wi(t,r,s,o,n,null)}}return i&&wi(t,r,"srcSet",n.srcSet,n,null),void(a&&wi(t,r,"src",n.src,n,null))
case"input":ui("invalid",t)
var l=s=o=i=null,c=null,u=null
for(a in n)if(n.hasOwnProperty(a)){var d=n[a]
if(null!=d)switch(a){case"name":i=d
break
case"type":o=d
break
case"checked":c=d
break
case"defaultChecked":u=d
break
case"value":s=d
break
case"defaultValue":l=d
break
case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(e(137,r))
break
default:wi(t,r,a,d,n,null)}}return void ee(t,s,l,c,u,o,i,!1)
case"select":for(i in ui("invalid",t),a=o=s=null,n)if(n.hasOwnProperty(i)&&null!=(l=n[i]))switch(i){case"value":s=l
break
case"defaultValue":o=l
break
case"multiple":a=l
default:wi(t,r,i,l,n,null)}return r=s,n=o,t.multiple=!!a,void(null!=r?re(t,!!a,r,!1):null!=n&&re(t,!!a,n,!0))
case"textarea":for(o in ui("invalid",t),s=i=a=null,n)if(n.hasOwnProperty(o)&&null!=(l=n[o]))switch(o){case"value":a=l
break
case"defaultValue":i=l
break
case"children":s=l
break
case"dangerouslySetInnerHTML":if(null!=l)throw Error(e(91))
break
default:wi(t,r,o,l,n,null)}return void se(t,a,i,s)
case"option":for(c in n)n.hasOwnProperty(c)&&null!=(a=n[c])&&("selected"===c?t.selected=a&&"function"!=typeof a&&"symbol"!=typeof a:wi(t,r,c,a,n,null))
return
case"dialog":ui("beforetoggle",t),ui("toggle",t),ui("cancel",t),ui("close",t)
break
case"iframe":case"object":ui("load",t)
break
case"video":case"audio":for(a=0;a<kh.length;a++)ui(kh[a],t)
break
case"image":ui("error",t),ui("load",t)
break
case"details":ui("toggle",t)
break
case"embed":case"source":case"link":ui("error",t),ui("load",t)
case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(e(137,r))
default:wi(t,r,u,a,n,null)}return
default:if(le(r)){for(d in n)n.hasOwnProperty(d)&&void 0!==(a=n[d])&&ki(t,r,d,a,n,void 0)
return}}for(l in n)n.hasOwnProperty(l)&&null!=(a=n[l])&&wi(t,r,l,a,n,null)}function Si(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0
default:return!1}}function _i(e){return 9===e.nodeType?e:e.ownerDocument}function Ni(e){switch(e){case"http://www.w3.org/2000/svg":return 1
case"http://www.w3.org/1998/Math/MathML":return 2
default:return 0}}function Ei(e,t){if(0===e)switch(t){case"svg":return 1
case"math":return 2
default:return 0}return 1===e&&"foreignObject"===t?0:e}function Ti(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}function Ci(e){setTimeout(function(){throw e})}function Ri(e){return"head"===e}function Pi(e,t){var r=t,n=0
do{var s=r.nextSibling
if(e.removeChild(r),s&&8===s.nodeType)if("/$"===(r=s.data)||"/&"===r){if(0===n)return e.removeChild(s),void Co(t)
n--}else if("$"===r||"$?"===r||"$~"===r||"$!"===r||"&"===r)n++
else if("html"===r)Wi(e.ownerDocument.documentElement)
else if("head"===r){Wi(r=e.ownerDocument.head)
for(var a=r.firstChild;a;){var i=a.nextSibling,o=a.nodeName
a[Wl]||"SCRIPT"===o||"STYLE"===o||"LINK"===o&&"stylesheet"===a.rel.toLowerCase()||r.removeChild(a),a=i}}else"body"===r&&Wi(e.ownerDocument.body)
r=s}while(r)
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
t--}else"$"!==r&&"$!"!==r&&"$?"!==r&&"$~"!==r&&"&"!==r||t++}e=e.nextSibling}return null}function Fi(e){e=e.previousSibling
for(var t=0;e;){if(8===e.nodeType){var r=e.data
if("$"===r||"$!"===r||"$?"===r||"$~"===r||"&"===r){if(0===t)return e
t--}else"/$"!==r&&"/&"!==r||t++}e=e.previousSibling}return null}function Bi(t,r,n){switch(r=_i(n),t){case"html":if(!(t=r.documentElement))throw Error(e(452))
return t
case"head":if(!(t=r.head))throw Error(e(453))
return t
case"body":if(!(t=r.body))throw Error(e(454))
return t
default:throw Error(e(451))}}function Wi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0])
L(e)}function Vi(e){return"function"==typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}function qi(e,t,r){var n=Uh
if(n&&"string"==typeof t&&t){var s=$(t)
s='link[rel="'+e+'"][href="'+s+'"]',"string"==typeof r&&(s+='[crossorigin="'+r+'"]'),Lh.has(s)||(Lh.add(s),e={rel:e,crossOrigin:r,href:t},null===n.querySelector(s)&&(ji(t=n.createElement("link"),"link",e),W(t),n.head.appendChild(t)))}}function Mi(t,r,n,s){var a,i,o,l,c=(c=ll.current)?Vi(c):null
if(!c)throw Error(e(446))
switch(t){case"meta":case"title":return null
case"style":return"string"==typeof n.precedence&&"string"==typeof n.href?(r=Hi(n.href),(s=(n=B(c).hoistableStyles).get(r))||(s={type:"style",instance:null,count:0,state:null},n.set(r,s)),s):{type:"void",instance:null,count:0,state:null}
case"link":if("stylesheet"===n.rel&&"string"==typeof n.href&&"string"==typeof n.precedence){t=Hi(n.href)
var u=B(c).hoistableStyles,d=u.get(t)
if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,d),(u=c.querySelector(Ki(t)))&&!u._p&&(d.instance=u,d.state.loading=5),zh.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},zh.set(t,n),u||(a=c,i=t,o=n,l=d.state,a.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=a.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ji(i,"link",o),W(i),a.head.appendChild(i))))),r&&null===s)throw Error(e(528,""))
return d}if(r&&null!==s)throw Error(e(529,""))
return null
case"script":return r=n.async,"string"==typeof(n=n.src)&&r&&"function"!=typeof r&&"symbol"!=typeof r?(r=Yi(n),(s=(n=B(c).hoistableScripts).get(r))||(s={type:"script",instance:null,count:0,state:null},n.set(r,s)),s):{type:"void",instance:null,count:0,state:null}
default:throw Error(e(444,t))}}function Hi(e){return'href="'+$(e)+'"'}function Ki(e){return'link[rel="stylesheet"]['+e+"]"}function Gi(e){return Lo({},e,{"data-precedence":e.precedence,precedence:null})}function Yi(e){return'[src="'+$(e)+'"]'}function Ji(e){return"script[async]"+e}function Xi(t,r,n){if(r.count++,null===r.instance)switch(r.type){case"style":var s=t.querySelector('style[data-href~="'+$(n.href)+'"]')
if(s)return r.instance=s,W(s),s
var a=Lo({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null})
return W(s=(t.ownerDocument||t).createElement("style")),ji(s,"style",a),Zi(s,n.precedence,t),r.instance=s
case"stylesheet":a=Hi(n.href)
var i=t.querySelector(Ki(a))
if(i)return r.state.loading|=4,r.instance=i,W(i),i
s=Gi(n),(a=zh.get(a))&&$i(s,a),W(i=(t.ownerDocument||t).createElement("link"))
var o=i
return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ji(i,"link",s),r.state.loading|=4,Zi(i,n.precedence,t),r.instance=i
case"script":return i=Yi(n.src),(a=t.querySelector(Ji(i)))?(r.instance=a,W(a),a):(s=n,(a=zh.get(i))&&Qi(s=Lo({},n),a),W(a=(t=t.ownerDocument||t).createElement("script")),ji(a,"link",s),t.head.appendChild(a),r.instance=a)
case"void":return null
default:throw Error(e(443,r.type))}else"stylesheet"===r.type&&!(4&r.state.loading)&&(s=r.instance,r.state.loading|=4,Zi(s,n.precedence,t))
return r.instance}function Zi(e,t,r){for(var n=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=n.length?n[n.length-1]:null,a=s,i=0;i<n.length;i++){var o=n[i]
if(o.dataset.precedence===t)a=o
else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===r.nodeType?r.head:r).insertBefore(e,t.firstChild)}function $i(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Qi(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}function eo(e,t,r){if(null===Fh){var n=new Map,s=Fh=new Map
s.set(r,n)}else(n=(s=Fh).get(r))||(n=new Map,s.set(r,n))
if(n.has(e))return n
for(n.set(e,null),r=r.getElementsByTagName(e),s=0;s<r.length;s++){var a=r[s]
if(!(a[Wl]||a[Il]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var i=a.getAttribute(t)||""
i=e+i
var o=n.get(i)
o?o.push(a):n.set(i,[a])}}return n}function to(e,t,r){(e=e.ownerDocument||e).head.insertBefore(r,"title"===t?e.querySelector("head > title"):null)}function ro(e){return!!("stylesheet"!==e.type||3&e.state.loading)}function no(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)so(this,this.stylesheets)
else if(this.unsuspend){var e=this.unsuspend
this.unsuspend=null,e()}}function so(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Wh=new Map,t.forEach(ao,e),Wh=null,no.call(e))}function ao(e,t){if(!(4&t.state.loading)){var r=Wh.get(e)
if(r)var n=r.get(null)
else{r=new Map,Wh.set(e,r)
for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var i=s[a]
"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(r.set(i.dataset.precedence,i),n=i)}n&&r.set(null,n)}i=(s=t.instance).getAttribute("data-precedence"),(a=r.get(i)||n)===n&&r.set(null,s),r.set(i,s),this.count++,n=no.bind(this),s.addEventListener("load",n),s.addEventListener("error",n),a?a.parentNode.insertBefore(s,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(s,e.firstChild),t.state.loading|=4}}function io(e,t,r,n,s,a,i,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=E(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=E(0),this.hiddenUpdates=E(null),this.identifierPrefix=n,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function oo(e,t,r,n,s,a,i,o,l,c,u,d){return e=new io(e,t,r,i,l,c,u,d,o),t=1,!0===a&&(t|=24),a=$e(3,null,null,t),e.current=a,a.stateNode=e,(t=Rt()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:n,isDehydrated:r,cache:t},Ht(a),e}function lo(e){return e?e=pu:pu}function co(e,t,r,n,s,a){s=lo(s),null===n.context?n.context=s:n.pendingContext=s,(n=$t(t)).payload={element:r},null!==(a=void 0===a?null:a)&&(n.callback=a),null!==(r=Qt(e,n,t))&&(ya(r,0,t),er(r,e,t))}function uo(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane
e.retryLane=0!==r&&r<t?r:t}}function ho(e,t){uo(e,t),(e=e.alternate)&&uo(e,t)}function po(e){if(13===e.tag||31===e.tag){var t=Ye(e,67108864)
null!==t&&ya(t,0,67108864),ho(e,67108864)}}function fo(e){if(13===e.tag||31===e.tag){var t=ga(),r=Ye(e,t=A(t))
null!==r&&ya(r,0,t),ho(e,t)}}function mo(e,t,r,n){var s=tl.T
tl.T=null
var a=rl.p
try{rl.p=2,bo(e,t,r,n)}finally{rl.p=a,tl.T=s}}function go(e,t,r,n){var s=tl.T
tl.T=null
var a=rl.p
try{rl.p=8,bo(e,t,r,n)}finally{rl.p=a,tl.T=s}}function bo(e,t,r,n){if(qh){var s=yo(n)
if(null===s)fi(e,t,n,Mh,r),wo(e,n)
else if(function(e,t,r,n,s){switch(t){case"focusin":return Kh=ko(Kh,e,t,r,n,s),!0
case"dragenter":return Gh=ko(Gh,e,t,r,n,s),!0
case"mouseover":return Yh=ko(Yh,e,t,r,n,s),!0
case"pointerover":var a=s.pointerId
return Jh.set(a,ko(Jh.get(a)||null,e,t,r,n,s)),!0
case"gotpointercapture":return a=s.pointerId,Xh.set(a,ko(Xh.get(a)||null,e,t,r,n,s)),!0}return!1}(s,e,t,r,n))n.stopPropagation()
else if(wo(e,n),4&t&&-1<$h.indexOf(e)){for(;null!==s;){var a=U(s)
if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var i=k(a.pendingLanes)
if(0!==i){var o=a
for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var l=1<<31-El(i)
o.entanglements[1]|=l,i&=~l}Qa(a),!(6&zd)&&(rh=gl()+500,ei(0))}}break
case 31:case 13:null!==(o=Ye(a,2))&&ya(o,0,2),ja(),ho(a,2)}if(null===(a=yo(n))&&fi(e,t,n,Mh,r),a===s)break
s=a}null!==s&&n.stopPropagation()}else fi(e,t,n,null,r)}}function yo(e){return vo(e=de(e))}function vo(e){if(Mh=null,null!==(e=D(e))){var t=r(e)
if(null===t)e=null
else{var a=t.tag
if(13===a){if(null!==(e=n(t)))return e
e=null}else if(31===a){if(null!==(e=s(t)))return e
e=null}else if(3===a){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null
e=null}else t!==e&&(e=null)}}return Mh=e,null}function xo(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8
case"message":switch(bl()){case yl:return 2
case vl:return 8
case xl:case wl:return 32
case kl:return 268435456
default:return 32}default:return 32}}function wo(e,t){switch(e){case"focusin":case"focusout":Kh=null
break
case"dragenter":case"dragleave":Gh=null
break
case"mouseover":case"mouseout":Yh=null
break
case"pointerover":case"pointerout":Jh.delete(t.pointerId)
break
case"gotpointercapture":case"lostpointercapture":Xh.delete(t.pointerId)}}function ko(e,t,r,n,s,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[s]},null!==t&&null!==(t=U(t))&&po(t),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==s&&-1===t.indexOf(s)&&t.push(s),e)}function jo(e){var t=D(e.target)
if(null!==t){var a=r(t)
if(null!==a)if(13===(t=a.tag)){if(null!==(t=n(a)))return e.blockedOn=t,void z(e.priority,function(){fo(a)})}else if(31===t){if(null!==(t=s(a)))return e.blockedOn=t,void z(e.priority,function(){fo(a)})}else if(3===t&&a.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===a.tag?a.stateNode.containerInfo:null)}e.blockedOn=null}function So(e){if(null!==e.blockedOn)return!1
for(var t=e.targetContainers;0<t.length;){var r=yo(e.nativeEvent)
if(null!==r)return null!==(t=U(r))&&po(t),e.blockedOn=r,!1
var n=new(r=e.nativeEvent).constructor(r.type,r)
Zl=n,r.target.dispatchEvent(n),Zl=null,t.shift()}return!0}function _o(e,t,r){So(e)&&r.delete(t)}function No(){Hh=!1,null!==Kh&&So(Kh)&&(Kh=null),null!==Gh&&So(Gh)&&(Gh=null),null!==Yh&&So(Yh)&&(Yh=null),Jh.forEach(_o),Xh.forEach(_o)}function Eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Hh||(Hh=!0,zo.unstable_scheduleCallback(zo.unstable_NormalPriority,No)))}function To(e){Qh!==e&&(Qh=e,zo.unstable_scheduleCallback(zo.unstable_NormalPriority,function(){Qh===e&&(Qh=null)
for(var t=0;t<e.length;t+=3){var r=e[t],n=e[t+1],s=e[t+2]
if("function"!=typeof n){if(null===vo(n||r))continue
break}var a=U(r)
null!==a&&(e.splice(t,3),t-=3,jn(a,{pending:!0,data:s,method:r.method,action:n},n,s))}}))}function Co(e){function t(t){return Eo(t,e)}null!==Kh&&Eo(Kh,e),null!==Gh&&Eo(Gh,e),null!==Yh&&Eo(Yh,e),Jh.forEach(t),Xh.forEach(t)
for(var r=0;r<Zh.length;r++){var n=Zh[r]
n.blockedOn===e&&(n.blockedOn=null)}for(;0<Zh.length&&null===(r=Zh[0]).blockedOn;)jo(r),null===r.blockedOn&&Zh.shift()
if(null!=(r=(e.ownerDocument||e).$$reactFormReplay))for(n=0;n<r.length;n+=3){var s=r[n],a=r[n+1],i=s[zl]||null
if("function"==typeof a)i||To(r)
else if(i){var o=null
if(a&&a.hasAttribute("formAction")){if(s=a,i=a[zl]||null)o=i.formAction
else if(null!==vo(s))continue}else o=i.action
"function"==typeof o?r[n+1]=o:(r.splice(n,3),n-=3),To(r)}}}function Ro(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return s=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==s&&(s(),s=null),n||setTimeout(r,20)}function r(){if(!n&&!navigation.transition){var e=navigation.currentEntry
e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"==typeof navigation){var n=!1,s=null
return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(r,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==s&&(s(),s=null)}}}function Po(e){this._internalRoot=e}function Ao(e){this._internalRoot=e}if(Xt)return ar
Xt=1
var Oo,Io,zo=(Gt||(Gt=1,ir.exports=(Kt||(Kt=1,function(e){function t(e,t){var r=e.length
e.push(t)
e:for(;0<r;){var n=r-1>>>1,a=e[n]
if(!(0<s(a,t)))break e
e[n]=t,e[r]=a,r=n}}function r(e){return 0===e.length?null:e[0]}function n(e){if(0===e.length)return null
var t=e[0],r=e.pop()
if(r!==t){e[0]=r
e:for(var n=0,a=e.length,i=a>>>1;n<i;){var o=2*(n+1)-1,l=e[o],c=o+1,u=e[c]
if(0>s(l,r))c<a&&0>s(u,l)?(e[n]=u,e[c]=r,n=c):(e[n]=l,e[o]=r,n=o)
else{if(!(c<a&&0>s(u,r)))break e
e[n]=u,e[c]=r,n=c}}}return t}function s(e,t){var r=e.sortIndex-t.sortIndex
return 0!==r?r:e.id-t.id}function a(e){for(var s=r(m);null!==s;){if(null===s.callback)n(m)
else{if(!(s.startTime<=e))break
n(m),s.sortIndex=s.expirationTime,t(f,s)}s=r(m)}}function i(e){if(w=!1,a(e),!x)if(null!==r(f))x=!0,N||(N=!0,p())
else{var t=r(m)
null!==t&&c(i,t.startTime-e)}}function o(){return!(!k&&e.unstable_now()-C<T)}function l(){if(k=!1,N){var t=e.unstable_now()
C=t
var s=!0
try{e:{x=!1,w&&(w=!1,S(E),E=-1),v=!0
var l=y
try{t:{for(a(t),b=r(f);null!==b&&!(b.expirationTime>t&&o());){var u=b.callback
if("function"==typeof u){b.callback=null,y=b.priorityLevel
var d=u(b.expirationTime<=t)
if(t=e.unstable_now(),"function"==typeof d){b.callback=d,a(t),s=!0
break t}b===r(f)&&n(f),a(t)}else n(f)
b=r(f)}if(null!==b)s=!0
else{var h=r(m)
null!==h&&c(i,h.startTime-t),s=!1}}break e}finally{b=null,y=l,v=!1}s=void 0}}finally{s?p():N=!1}}}function c(t,r){E=j(function(){t(e.unstable_now())},r)}if(e.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var u=performance
e.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now()
e.unstable_now=function(){return d.now()-h}}var p,f=[],m=[],g=1,b=null,y=3,v=!1,x=!1,w=!1,k=!1,j="function"==typeof setTimeout?setTimeout:null,S="function"==typeof clearTimeout?clearTimeout:null,_="undefined"!=typeof setImmediate?setImmediate:null,N=!1,E=-1,T=5,C=-1
if("function"==typeof _)p=function(){_(l)}
else if("undefined"!=typeof MessageChannel){var R=new MessageChannel,P=R.port2
R.port1.onmessage=l,p=function(){P.postMessage(null)}}else p=function(){j(l,0)}
e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e||(T=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function(e){switch(y){case 1:case 2:case 3:var t=3
break
default:t=y}var r=y
y=t
try{return e()}finally{y=r}},e.unstable_requestPaint=function(){k=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var r=y
y=e
try{return t()}finally{y=r}},e.unstable_scheduleCallback=function(n,s,a){var o=e.unstable_now()
switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?o+a:o,n){case 1:var l=-1
break
case 2:l=250
break
case 5:l=1073741823
break
case 4:l=1e4
break
default:l=5e3}return n={id:g++,callback:s,priorityLevel:n,startTime:a,expirationTime:l=a+l,sortIndex:-1},a>o?(n.sortIndex=a,t(m,n),null===r(f)&&n===r(m)&&(w?(S(E),E=-1):w=!0,c(i,a-o))):(n.sortIndex=l,t(f,n),x||v||(x=!0,N||(N=!0,p()))),n},e.unstable_shouldYield=o,e.unstable_wrapCallback=function(e){var t=y
return function(){var r=y
y=t
try{return e.apply(this,arguments)}finally{y=r}}}}(or)),or)),ir.exports),React=a(),ReactDOM=(Jt||(Jt=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),lr.exports=function(){function e(e,t){var r="https://react.dev/errors/"+e
if(1<arguments.length){r+="?args[]="+encodeURIComponent(t)
for(var n=2;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}function r(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}if(Yt)return cr
Yt=1
var React=a(),n={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal"),i=React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
return cr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,cr.createPortal=function(t,r,n){var a=2<arguments.length&&void 0!==n?n:null
if(!r||1!==r.nodeType&&9!==r.nodeType&&11!==r.nodeType)throw Error(e(299))
return function(e,t,r,n){var a=3<arguments.length&&void 0!==n?n:null
return{$$typeof:s,key:null==a?null:""+a,children:e,containerInfo:t,implementation:r}}(t,r,null,a)},cr.flushSync=function(e){var t=i.T,r=n.p
try{if(i.T=null,n.p=2,e)return e()}finally{i.T=t,n.p=r,n.d.f()}},cr.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,n.d.C(e,t))},cr.prefetchDNS=function(e){"string"==typeof e&&n.d.D(e)},cr.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var s=t.as,a=r(s,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0
"style"===s?n.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:a,integrity:i,fetchPriority:o}):"script"===s&&n.d.X(e,{crossOrigin:a,integrity:i,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},cr.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var s=r(t.as,t.crossOrigin)
n.d.M(e,{crossOrigin:s,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&n.d.M(e)},cr.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var s=t.as,a=r(s,t.crossOrigin)
n.d.L(e,s,{crossOrigin:a,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},cr.preloadModule=function(e,t){if("string"==typeof e)if(t){var s=r(t.as,t.crossOrigin)
n.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:s,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else n.d.m(e)},cr.requestFormReset=function(e){n.d.r(e)},cr.unstable_batchedUpdates=function(e,t){return e(t)},cr.useFormState=function(e,t,r){return i.H.useFormState(e,t,r)},cr.useFormStatus=function(){return i.H.useHostTransitionStatus()},cr.version="19.2.1",cr}()),lr.exports),Lo=Object.assign,Do=Symbol.for("react.element"),Uo=Symbol.for("react.transitional.element"),Fo=Symbol.for("react.portal"),Bo=Symbol.for("react.fragment"),Wo=Symbol.for("react.strict_mode"),Vo=Symbol.for("react.profiler"),qo=Symbol.for("react.consumer"),Mo=Symbol.for("react.context"),Ho=Symbol.for("react.forward_ref"),Ko=Symbol.for("react.suspense"),Go=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),Jo=Symbol.for("react.lazy"),Xo=Symbol.for("react.activity"),Zo=Symbol.for("react.memo_cache_sentinel"),$o=Symbol.iterator,Qo=Symbol.for("react.client.reference"),el=Array.isArray,tl=React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rl=ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nl={pending:!1,data:null,method:null,action:null},sl=[],al=-1,il=u(null),ol=u(null),ll=u(null),cl=u(null),ul=!1,dl=Object.prototype.hasOwnProperty,hl=zo.unstable_scheduleCallback,pl=zo.unstable_cancelCallback,fl=zo.unstable_shouldYield,ml=zo.unstable_requestPaint,gl=zo.unstable_now,bl=zo.unstable_getCurrentPriorityLevel,yl=zo.unstable_ImmediatePriority,vl=zo.unstable_UserBlockingPriority,xl=zo.unstable_NormalPriority,wl=zo.unstable_LowPriority,kl=zo.unstable_IdlePriority,jl=zo.log,Sl=zo.unstable_setDisableYieldValue,_l=null,Nl=null,El=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(Tl(e)/Cl|0)|0},Tl=Math.log,Cl=Math.LN2,Rl=256,Pl=262144,Al=4194304,Ol=Math.random().toString(36).slice(2),Il="__reactFiber$"+Ol,zl="__reactProps$"+Ol,Ll="__reactContainer$"+Ol,Dl="__reactEvents$"+Ol,Ul="__reactListeners$"+Ol,Fl="__reactHandles$"+Ol,Bl="__reactResources$"+Ol,Wl="__reactMarker$"+Ol,Vl=new Set,ql={},Ml=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hl={},Kl={},Gl=/[\n"\\]/g,Yl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),Jl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,Zl=null,$l=null,Ql=null,ec=!1,tc=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),rc=!1
if(tc)try{var nc={}
Object.defineProperty(nc,"passive",{get:function(){rc=!0}}),window.addEventListener("test",nc,nc),window.removeEventListener("test",nc,nc)}catch(np){rc=!1}var sc,ac,ic,oc=null,lc=null,cc=null,uc={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dc=ve(uc),hc=Lo({},uc,{view:0,detail:0}),pc=ve(hc),fc=Lo({},hc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:we,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ic&&(ic&&"mousemove"===e.type?(sc=e.screenX-ic.screenX,ac=e.screenY-ic.screenY):ac=sc=0,ic=e),sc)},movementY:function(e){return"movementY"in e?e.movementY:ac}}),mc=ve(fc),gc=ve(Lo({},fc,{dataTransfer:0})),bc=ve(Lo({},hc,{relatedTarget:0})),yc=ve(Lo({},uc,{animationName:0,elapsedTime:0,pseudoElement:0})),vc=ve(Lo({},uc,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),xc=ve(Lo({},uc,{data:0})),wc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Sc=ve(Lo({},hc,{key:function(e){if(e.key){var t=wc[e.key]||e.key
if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=ge(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:we,charCode:function(e){return"keypress"===e.type?ge(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?ge(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),_c=ve(Lo({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nc=ve(Lo({},hc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:we})),Ec=ve(Lo({},uc,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tc=ve(Lo({},fc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Cc=ve(Lo({},uc,{newState:0,oldState:0})),Rc=[9,13,27,32],Pc=tc&&"CompositionEvent"in window,Ac=null
tc&&"documentMode"in document&&(Ac=document.documentMode)
var Oc=tc&&"TextEvent"in window&&!Ac,Ic=tc&&(!Pc||Ac&&8<Ac&&11>=Ac),zc=String.fromCharCode(32),Lc=!1,Dc=!1,Uc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Fc=null,Bc=null,Wc=!1
if(tc){var Vc
if(tc){var qc="oninput"in document
if(!qc){var Mc=document.createElement("div")
Mc.setAttribute("oninput","return;"),qc="function"==typeof Mc.oninput}Vc=qc}else Vc=!1
Wc=Vc&&(!document.documentMode||9<document.documentMode)}var Hc="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Kc=tc&&"documentMode"in document&&11>=document.documentMode,Gc=null,Yc=null,Jc=null,Xc=!1,Zc={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionrun:Ve("Transition","TransitionRun"),transitionstart:Ve("Transition","TransitionStart"),transitioncancel:Ve("Transition","TransitionCancel"),transitionend:Ve("Transition","TransitionEnd")},$c={},Qc={}
tc&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete Zc.animationend.animation,delete Zc.animationiteration.animation,delete Zc.animationstart.animation),"TransitionEvent"in window||delete Zc.transitionend.transition)
var eu=qe("animationend"),tu=qe("animationiteration"),ru=qe("animationstart"),nu=qe("transitionrun"),su=qe("transitionstart"),au=qe("transitioncancel"),iu=qe("transitionend"),ou=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ")
lu.push("scrollEnd")
var cu="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e})
if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)},uu=[],du=0,hu=0,pu={},fu=new WeakMap,mu=[],gu=0,bu=null,yu=0,vu=[],xu=0,wu=null,ku=1,ju="",Su=null,_u=null,Nu=!1,Eu=null,Tu=!1,Cu=Error(e(519)),Ru=u(null),Pu=null,Au=null,Ou="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}}
this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Iu=zo.unstable_scheduleCallback,zu=zo.unstable_NormalPriority,Lu={$$typeof:Mo,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},Du=null,Uu=0,Fu=0,Bu=null,Wu=tl.S
tl.S=function(e,t){th=gl(),"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===Du){var r=Du=[]
Uu=0,Fu=ii(),Bu={status:"pending",value:void 0,then:function(e){r.push(e)}}}Uu++,t.then(At,At)}(0,t),null!==Wu&&Wu(e,t)}
var Vu=u(null),qu=Error(e(460)),Mu=Error(e(474)),Hu=Error(e(542)),Ku={then:function(){}},Gu=null,Yu=null,Ju=0,Xu=Mt(!0),Zu=Mt(!1),$u=!1,Qu=!1,ed=u(null),td=u(0),rd=u(null),nd=null,sd=u(0),ad=0,id=null,od=null,ld=null,cd=!1,ud=!1,dd=!1,hd=0,pd=0,fd=null,md=0,gd={readContext:Et,use:Ar,useCallback:xr,useContext:xr,useEffect:xr,useImperativeHandle:xr,useLayoutEffect:xr,useInsertionEffect:xr,useMemo:xr,useReducer:xr,useRef:xr,useState:xr,useDebugValue:xr,useDeferredValue:xr,useTransition:xr,useSyncExternalStore:xr,useId:xr,useHostTransitionStatus:xr,useFormState:xr,useActionState:xr,useOptimistic:xr,useMemoCache:xr,useCacheRefresh:xr}
gd.useEffectEvent=xr
var bd={readContext:Et,use:Ar,useCallback:function(e,t){return Cr().memoizedState=[e,void 0===t?null:t],e},useContext:Et,useEffect:cn,useImperativeHandle:function(e,t,r){r=null!=r?r.concat([e]):null,on(4194308,4,fn.bind(null,t,e),r)},useLayoutEffect:function(e,t){return on(4194308,4,e,t)},useInsertionEffect:function(e,t){on(4,2,e,t)},useMemo:function(e,t){var r=Cr()
t=void 0===t?null:t
var n=e()
if(dd){w(!0)
try{e()}finally{w(!1)}}return r.memoizedState=[n,t],n},useReducer:function(e,t,r){var n=Cr()
if(void 0!==r){var s=r(t)
if(dd){w(!0)
try{r(t)}finally{w(!1)}}}else s=t
return n.memoizedState=n.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},n.queue=e,e=e.dispatch=Rn.bind(null,id,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},Cr().memoizedState=e},useState:function(e){var t=(e=Mr(e)).queue,r=Pn.bind(null,id,t)
return t.dispatch=r,[e.memoizedState,r]},useDebugValue:gn,useDeferredValue:function(e,t){return vn(Cr(),e,t)},useTransition:function(){var e=Mr(!1)
return e=wn.bind(null,id,e.queue,!0,!1),Cr().memoizedState=e,[!1,e]},useSyncExternalStore:function(t,r,n){var s=id,a=Cr()
if(Nu){if(void 0===n)throw Error(e(407))
n=n()}else{if(n=r(),null===Ld)throw Error(e(349))
127&Ud||Fr(s,r,n)}a.memoizedState=n
var i={value:n,getSnapshot:r}
return a.queue=i,cn(Wr.bind(null,s,i,t),[t]),s.flags|=2048,sn(9,{destroy:void 0},Br.bind(null,s,i,n,r),null),n},useId:function(){var e=Cr(),t=Ld.identifierPrefix
if(Nu){var r=ju
t="_"+t+"R_"+(r=(ku&~(1<<32-El(ku)-1)).toString(32)+r),0<(r=hd++)&&(t+="H"+r.toString(32)),t+="_"}else t="_"+t+"r_"+(r=md++).toString(32)+"_"
return e.memoizedState=t},useHostTransitionStatus:Nn,useFormState:Qr,useActionState:Qr,useOptimistic:function(e){var t=Cr()
t.memoizedState=t.baseState=e
var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null}
return t.queue=r,t=On.bind(null,id,!0,r),r.dispatch=t,[e,t]},useMemoCache:Or,useCacheRefresh:function(){return Cr().memoizedState=Cn.bind(null,id)},useEffectEvent:function(t){var r=Cr(),n={impl:t}
return r.memoizedState=n,function(){if(2&zd)throw Error(e(440))
return n.impl.apply(void 0,arguments)}}},yd={readContext:Et,use:Ar,useCallback:bn,useContext:Et,useEffect:un,useImperativeHandle:mn,useInsertionEffect:hn,useLayoutEffect:pn,useMemo:yn,useReducer:zr,useRef:an,useState:function(){return zr(Ir)},useDebugValue:gn,useDeferredValue:function(e,t){return xn(Rr(),od.memoizedState,e,t)},useTransition:function(){var e=zr(Ir)[0],t=Rr().memoizedState
return["boolean"==typeof e?e:Pr(e),t]},useSyncExternalStore:Ur,useId:En,useHostTransitionStatus:Nn,useFormState:en,useActionState:en,useOptimistic:function(e,t){return Hr(Rr(),0,e,t)},useMemoCache:Or,useCacheRefresh:Tn}
yd.useEffectEvent=dn
var vd={readContext:Et,use:Ar,useCallback:bn,useContext:Et,useEffect:un,useImperativeHandle:mn,useInsertionEffect:hn,useLayoutEffect:pn,useMemo:yn,useReducer:Dr,useRef:an,useState:function(){return Dr(Ir)},useDebugValue:gn,useDeferredValue:function(e,t){var r=Rr()
return null===od?vn(r,e,t):xn(r,od.memoizedState,e,t)},useTransition:function(){var e=Dr(Ir)[0],t=Rr().memoizedState
return["boolean"==typeof e?e:Pr(e),t]},useSyncExternalStore:Ur,useId:En,useHostTransitionStatus:Nn,useFormState:nn,useActionState:nn,useOptimistic:function(e,t){var r=Rr()
return null!==od?Hr(r,0,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Or,useCacheRefresh:Tn}
vd.useEffectEvent=dn
for(var xd={enqueueSetState:function(e,t,r){e=e._reactInternals
var n=ga(),s=$t(n)
s.payload=t,null!=r&&(s.callback=r),null!==(t=Qt(e,s,n))&&(ya(t,0,n),er(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals
var n=ga(),s=$t(n)
s.tag=1,s.payload=t,null!=r&&(s.callback=r),null!==(t=Qt(e,s,n))&&(ya(t,0,n),er(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals
var r=ga(),n=$t(r)
n.tag=2,null!=t&&(n.callback=t),null!==(t=Qt(e,n,r))&&(ya(t,0,r),er(t,e,r))}},wd=Error(e(461)),kd=!1,jd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},Sd=!1,_d=!1,Nd=!1,Ed="function"==typeof WeakSet?WeakSet:Set,Td=null,Cd=null,Rd=!1,Pd=null,Ad=8192,Od={getCacheForType:function(e){var t=Et(Lu),r=t.data.get(e)
return void 0===r&&(r=e(),t.data.set(e,r)),r},cacheSignal:function(){return Et(Lu).controller.signal}},Id="function"==typeof WeakMap?WeakMap:Map,zd=0,Ld=null,Dd=null,Ud=0,Fd=0,Bd=null,Wd=!1,Vd=!1,qd=!1,Md=0,Hd=0,Kd=0,Gd=0,Yd=0,Jd=0,Xd=0,Zd=null,$d=null,Qd=!1,eh=0,th=0,rh=1/0,nh=null,sh=null,ah=0,ih=null,oh=null,lh=0,ch=0,uh=null,dh=null,hh=0,ph=null,fh=null,mh=null,gh=!1,bh=!1,yh=!1,vh=0,xh=0;xh<lu.length;xh++){var wh=lu[xh]
Me(wh.toLowerCase(),"on"+(wh[0].toUpperCase()+wh.slice(1)))}Me(eu,"onAnimationEnd"),Me(tu,"onAnimationIteration"),Me(ru,"onAnimationStart"),Me("dblclick","onDoubleClick"),Me("focusin","onFocus"),Me("focusout","onBlur"),Me(nu,"onTransitionRun"),Me(su,"onTransitionStart"),Me(au,"onTransitionCancel"),Me(iu,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),V("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),V("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),V("onBeforeInput",["compositionend","keypress","textInput","paste"]),V("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "))
var kh="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kh)),Sh="_reactListening"+Math.random().toString(36).slice(2),_h=/\r\n?/g,Nh=/\u0000|\uFFFD/g,Eh=null,Th=null,Ch=null,Rh="function"==typeof setTimeout?setTimeout:void 0,Ph="function"==typeof clearTimeout?clearTimeout:void 0,Ah="function"==typeof Promise?Promise:void 0,Oh="function"==typeof queueMicrotask?queueMicrotask:void 0!==Ah?function(e){return Ah.resolve(null).then(e).catch(Ci)}:Rh,Ih=null,zh=new Map,Lh=new Set,Dh=rl.d
rl.d={f:function(){var e=Dh.f(),t=ja()
return e||t},r:function(e){var t=U(e)
null!==t&&5===t.tag&&"form"===t.type?_n(t):Dh.r(e)},D:function(e){Dh.D(e),qi("dns-prefetch",e,null)},C:function(e,t){Dh.C(e,t),qi("preconnect",e,t)},L:function(e,t,r){Dh.L(e,t,r)
var n=Uh
if(n&&e&&t){var s='link[rel="preload"][as="'+$(t)+'"]'
"image"===t&&r&&r.imageSrcSet?(s+='[imagesrcset="'+$(r.imageSrcSet)+'"]',"string"==typeof r.imageSizes&&(s+='[imagesizes="'+$(r.imageSizes)+'"]')):s+='[href="'+$(e)+'"]'
var a=s
switch(t){case"style":a=Hi(e)
break
case"script":a=Yi(e)}zh.has(a)||(e=Lo({rel:"preload",href:"image"===t&&r&&r.imageSrcSet?void 0:e,as:t},r),zh.set(a,e),null!==n.querySelector(s)||"style"===t&&n.querySelector(Ki(a))||"script"===t&&n.querySelector(Ji(a))||(ji(t=n.createElement("link"),"link",e),W(t),n.head.appendChild(t)))}},m:function(e,t){Dh.m(e,t)
var r=Uh
if(r&&e){var n=t&&"string"==typeof t.as?t.as:"script",s='link[rel="modulepreload"][as="'+$(n)+'"][href="'+$(e)+'"]',a=s
switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Yi(e)}if(!zh.has(a)&&(e=Lo({rel:"modulepreload",href:e},t),zh.set(a,e),null===r.querySelector(s))){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Ji(a)))return}ji(n=r.createElement("link"),"link",e),W(n),r.head.appendChild(n)}}},X:function(e,t){Dh.X(e,t)
var r=Uh
if(r&&e){var n=B(r).hoistableScripts,s=Yi(e),a=n.get(s)
a||((a=r.querySelector(Ji(s)))||(e=Lo({src:e,async:!0},t),(t=zh.get(s))&&Qi(e,t),W(a=r.createElement("script")),ji(a,"link",e),r.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},n.set(s,a))}},S:function(e,t,r){Dh.S(e,t,r)
var n=Uh
if(n&&e){var s=B(n).hoistableStyles,a=Hi(e)
t=t||"default"
var i=s.get(a)
if(!i){var o={loading:0,preload:null}
if(i=n.querySelector(Ki(a)))o.loading=5
else{e=Lo({rel:"stylesheet",href:e,"data-precedence":t},r),(r=zh.get(a))&&$i(e,r)
var l=i=n.createElement("link")
W(l),ji(l,"link",e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Zi(i,t,n)}i={type:"stylesheet",instance:i,count:1,state:o},s.set(a,i)}}},M:function(e,t){Dh.M(e,t)
var r=Uh
if(r&&e){var n=B(r).hoistableScripts,s=Yi(e),a=n.get(s)
a||((a=r.querySelector(Ji(s)))||(e=Lo({src:e,async:!0,type:"module"},t),(t=zh.get(s))&&Qi(e,t),W(a=r.createElement("script")),ji(a,"link",e),r.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},n.set(s,a))}}}
var Uh="undefined"==typeof document?null:document,Fh=null,Bh=0,Wh=null,Vh={$$typeof:Mo,Provider:null,Consumer:null,_currentValue:nl,_currentValue2:nl,_threadCount:0},qh=!0,Mh=null,Hh=!1,Kh=null,Gh=null,Yh=null,Jh=new Map,Xh=new Map,Zh=[],$h="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),Qh=null
Ao.prototype.render=Po.prototype.render=function(t){var r=this._internalRoot
if(null===r)throw Error(e(409))
co(r.current,ga(),t,r,null,null)},Ao.prototype.unmount=Po.prototype.unmount=function(){var e=this._internalRoot
if(null!==e){this._internalRoot=null
var t=e.containerInfo
co(e.current,2,null,e,null,null),ja(),t[Ll]=null}},Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=I()
e={blockedOn:null,target:e,priority:t}
for(var r=0;r<Zh.length&&0!==t&&t<Zh[r].priority;r++);Zh.splice(r,0,e),0===r&&jo(e)}}
var ep=React.version
if("19.2.1"!==ep)throw Error(e(527,ep,"19.2.1"))
rl.findDOMNode=function(t){var n=t._reactInternals
if(void 0===n){if("function"==typeof t.render)throw Error(e(188))
throw t=Object.keys(t).join(","),Error(e(268,t))}return t=function(t){var n=t.alternate
if(!n){if(null===(n=r(t)))throw Error(e(188))
return n!==t?null:t}for(var s=t,a=n;;){var o=s.return
if(null===o)break
var l=o.alternate
if(null===l){if(null!==(a=o.return)){s=a
continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===s)return i(o),t
if(l===a)return i(o),n
l=l.sibling}throw Error(e(188))}if(s.return!==a.return)s=o,a=l
else{for(var c=!1,u=o.child;u;){if(u===s){c=!0,s=o,a=l
break}if(u===a){c=!0,a=o,s=l
break}u=u.sibling}if(!c){for(u=l.child;u;){if(u===s){c=!0,s=l,a=o
break}if(u===a){c=!0,a=l,s=o
break}u=u.sibling}if(!c)throw Error(e(189))}}if(s.alternate!==a)throw Error(e(190))}if(3!==s.tag)throw Error(e(188))
return s.stateNode.current===s?t:n}(n),null===(t=null!==t?o(t):null)?null:t.stateNode}
var tp={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:tl,reconcilerVersion:"19.2.1"}
if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rp=__REACT_DEVTOOLS_GLOBAL_HOOK__
if(!rp.isDisabled&&rp.supportsFiber)try{_l=rp.inject(tp),Nl=rp}catch(sp){}}return ar.createRoot=function(r,n){if(!t(r))throw Error(e(299))
var s=!1,a="",i=Wn,o=Vn,l=qn
return null!=n&&(!0===n.unstable_strictMode&&(s=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(o=n.onCaughtError),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),n=oo(r,1,!1,null,0,s,a,null,i,o,l,Ro),r[Ll]=n.current,hi(r),new Po(n)},ar.hydrateRoot=function(r,n,s){if(!t(r))throw Error(e(299))
var a=!1,i="",o=Wn,l=Vn,c=qn,u=null
return null!=s&&(!0===s.unstable_strictMode&&(a=!0),void 0!==s.identifierPrefix&&(i=s.identifierPrefix),void 0!==s.onUncaughtError&&(o=s.onUncaughtError),void 0!==s.onCaughtError&&(l=s.onCaughtError),void 0!==s.onRecoverableError&&(c=s.onRecoverableError),void 0!==s.formState&&(u=s.formState)),(n=oo(r,1,!0,n,0,a,i,u,o,l,c,Ro)).context=lo(null),s=n.current,(i=$t(a=A(a=ga()))).callback=null,Qt(s,i,a),s=a,n.current.lanes=s,T(n,s),Qa(n),r[Ll]=n.current,hi(r),new Ao(n)},ar.version="19.2.1",ar}()),sr.exports),dr="popstate",hr=/^:[\w-]+$/,pr=3,fr=2,mr=1,gr=10,br=-2,yr=e=>"*"===e,vr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xr=e=>e.join("/").replace(/\/\/+/g,"/"),wr=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kr=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",jr=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:""
Object.getOwnPropertyNames(Object.prototype).sort().join("\0")
var Sr=["POST","PUT","PATCH","DELETE"]
new Set(Sr)
var _r=["GET",...Sr]
new Set(_r)
var Nr=nr.createContext(null)
Nr.displayName="DataRouter"
var Er=nr.createContext(null)
Er.displayName="DataRouterState",nr.createContext(!1)
var Tr=nr.createContext({isTransitioning:!1})
Tr.displayName="ViewTransition",nr.createContext(new Map).displayName="Fetchers",nr.createContext(null).displayName="Await"
var Cr=nr.createContext(null)
Cr.displayName="Navigation"
var Rr=nr.createContext(null)
Rr.displayName="Location"
var Pr=nr.createContext({outlet:null,matches:[],isDataRoute:!1})
Pr.displayName="Route"
var Ar=nr.createContext(null)
Ar.displayName="RouteError"
var Or="You should call navigate() in a React.useEffect(), not when your component is first rendered."
nr.createContext(null)
var Ir=nr.createElement(P,null),zr=class extends nr.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError&&this.props.onError(e,t)}render(){return void 0!==this.state.error?nr.createElement(Pr.Provider,{value:this.props.routeContext},nr.createElement(Ar.Provider,{value:this.state.error,children:this.props.component})):this.props.children}},Lr={}
nr.memo(function({routes:e,future:t,state:r,unstable_onError:n}){return R(e,void 0,r,n)})
var Dr="get",Ur="application/x-www-form-urlencoded",Fr=null,Br=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"])
Object.getOwnPropertyNames(Object.prototype).sort().join("\0")
var Wr=nr.createContext(void 0)
Wr.displayName="FrameworkContext"
var Vr="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement
try{Vr&&(window.__reactRouterVersion="7.10.1")}catch(jl){}var qr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mr=nr.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:n,reloadDocument:s,replace:a,state:l,target:c,to:d,preventScrollReset:h,viewTransition:p,...f},m){let g,{basename:b,unstable_useTransitions:y}=nr.useContext(Cr),x="string"==typeof d&&qr.test(d),w=!1
if("string"==typeof d&&x&&(g=d,Vr))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),r=v(t.pathname,b)
t.origin===e.origin&&null!=r?d=r+t.search+t.hash:w=!0}catch(jl){o(!1,'<Link to="'.concat(d,'"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'))}let k=function(e,{relative:t}={}){i(_(),"useHref() may be used only in the context of a <Router> component.")
let{basename:r,navigator:n}=nr.useContext(Cr),{hash:s,pathname:a,search:o}=C(e,{relative:t}),l=a
return"/"!==r&&(l="/"===a?r:xr([r,a])),n.createHref({pathname:l,search:o,hash:s})}(d,{relative:n}),[j,S,E]=function(e,t){let r=nr.useContext(Wr),[n,s]=nr.useState(!1),[a,i]=nr.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:d}=t,h=nr.useRef(null)
nr.useEffect(()=>{if("render"===e&&i(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{i(e.isIntersecting)})},{threshold:.5})
return h.current&&e.observe(h.current),()=>{e.disconnect()}}},[e]),nr.useEffect(()=>{if(n){let e=setTimeout(()=>{i(!0)},100)
return()=>{clearTimeout(e)}}},[n])
let p=()=>{s(!0)},f=()=>{s(!1),i(!1)}
return r?"intent"!==e?[a,h,{}]:[a,h,{onFocus:Y(o,p),onBlur:Y(l,f),onMouseEnter:Y(c,p),onMouseLeave:Y(u,f),onTouchStart:Y(d,p)}]:[!1,h,{}]}(r,f),R=function(e,{target:t,replace:r,state:n,preventScrollReset:s,relative:a,viewTransition:i,unstable_useTransitions:o}={}){let l=T(),c=N(),d=C(e,{relative:a})
return nr.useCallback(h=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(h,t)){h.preventDefault()
let t=void 0!==r?r:u(c)===u(d),p=()=>l(e,{replace:t,state:n,preventScrollReset:s,relative:a,viewTransition:i})
o?nr.startTransition(()=>p()):p()}},[c,l,d,r,n,t,e,s,a,i,o])}(d,{replace:a,state:l,target:c,preventScrollReset:h,relative:n,viewTransition:p,unstable_useTransitions:y}),P=nr.createElement("a",{...f,...E,href:g||k,onClick:w||s?e:function(t){e&&e(t),t.defaultPrevented||R(t)},ref:Z(m,S),target:c,"data-discover":x||"render"!==t?void 0:"true"})
return j&&!x?nr.createElement(nr.Fragment,null,P,nr.createElement(J,{page:k})):P})
Mr.displayName="Link",nr.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:n=!1,style:s,to:a,viewTransition:o,children:l,...c},u){let d=C(a,{relative:c.relative}),h=N(),p=nr.useContext(Er),{navigator:f,basename:m}=nr.useContext(Cr),g=null!=p&&function(e,{relative:t}={}){let r=nr.useContext(Tr)
i(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?")
let{basename:n}=Q("useViewTransitionState"),s=C(e,{relative:t})
if(!r.isTransitioning)return!1
let a=v(r.currentLocation.pathname,n)||r.currentLocation.pathname,o=v(r.nextLocation.pathname,n)||r.nextLocation.pathname
return null!=b(s.pathname,o)||null!=b(s.pathname,a)}(d)&&!0===o,y=f.encodeLocation?f.encodeLocation(d).pathname:d.pathname,x=h.pathname,w=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null
t||(x=x.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&m&&(w=v(w,m)||w)
const k="/"!==y&&y.endsWith("/")?y.length-1:y.length
let j,S=x===y||!n&&x.startsWith(y)&&"/"===x.charAt(k),_=null!=w&&(w===y||!n&&w.startsWith(y)&&"/"===w.charAt(y.length)),E={isActive:S,isPending:_,isTransitioning:g},T=S?e:void 0
j="function"==typeof r?r(E):[r,S?"active":null,_?"pending":null,g?"transitioning":null].filter(Boolean).join(" ")
let R="function"==typeof s?s(E):s
return nr.createElement(Mr,{...c,"aria-current":T,className:j,ref:u,style:R,to:a,viewTransition:o},"function"==typeof l?l(E):l)}).displayName="NavLink",nr.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:s,state:a,method:o=Dr,action:l,onSubmit:c,relative:d,preventScrollReset:h,viewTransition:p,...f},m)=>{let{unstable_useTransitions:g}=nr.useContext(Cr),b=function(){let{router:e}=Q("useSubmit"),{basename:t}=nr.useContext(Cr),r=I("useRouteId"),n=e.fetch,s=e.navigate
return nr.useCallback(async(e,a={})=>{let{action:i,method:o,encType:l,formData:c,body:u}=function(e,t){let r,n,s,a,i
if(B(o=e)&&"form"===o.tagName.toLowerCase()){let i=e.getAttribute("action")
n=i?v(i,t):null,r=e.getAttribute("method")||Dr,s=V(e.getAttribute("enctype"))||Ur,a=new FormData(e)}else if(function(e){return B(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return B(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form
if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
let o=e.getAttribute("formaction")||i.getAttribute("action")
if(n=o?v(o,t):null,r=e.getAttribute("formmethod")||i.getAttribute("method")||Dr,s=V(e.getAttribute("formenctype"))||V(i.getAttribute("enctype"))||Ur,a=new FormData(i,e),!function(){if(null===Fr)try{new FormData(document.createElement("form"),0),Fr=!1}catch(jl){Fr=!0}return Fr}()){let{name:t,type:r,value:n}=e
if("image"===r){let e=t?"".concat(t,"."):""
a.append("".concat(e,"x"),"0"),a.append("".concat(e,"y"),"0")}else t&&a.append(t,n)}}else{if(B(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">')
r=Dr,n=null,s=Ur,i=e}var o
return a&&"text/plain"===s&&(i=a,a=void 0),{action:n,method:r.toLowerCase(),encType:s,formData:a,body:i}}(e,t)
if(!1===a.navigate){let e=a.fetcherKey||Kr()
await n(e,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await s(a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,s,t,r])}(),y=function(e,{relative:t}={}){let{basename:r}=nr.useContext(Cr),n=nr.useContext(Pr)
i(n,"useFormAction must be used inside a RouteContext")
let[s]=n.matches.slice(-1),a={...C(e||".",{relative:t})},o=N()
if(null==e){a.search=o.search
let e=new URLSearchParams(a.search),t=e.getAll("index")
if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t))
let r=e.toString()
a.search=r?"?".concat(r):""}}return e&&"."!==e||!s.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),"/"!==r&&(a.pathname="/"===a.pathname?r:xr([r,a.pathname])),u(a)}(l,{relative:d}),x="get"===o.toLowerCase()?"get":"post",w="string"==typeof l&&qr.test(l)
return nr.createElement("form",{ref:m,method:x,action:y,onSubmit:n?c:e=>{if(c&&c(e),e.defaultPrevented)return
e.preventDefault()
let n=e.nativeEvent.submitter,i=(null==n?void 0:n.getAttribute("formmethod"))||o,l=()=>b(n||e.currentTarget,{fetcherKey:t,method:i,navigate:r,replace:s,state:a,relative:d,preventScrollReset:h,viewTransition:p})
g&&!1!==r?nr.startTransition(()=>l()):l()},...f,"data-discover":w||"render"!==e?void 0:"true"})}).displayName="Form"
var Hr=0,Kr=()=>"__".concat(String(++Hr),"__"),Gr={},Yr={},Jr=function(e,t){return(Jr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},Xr=function(){return Xr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])
return e},Xr.apply(this,arguments)},Zr=Object.create?function(e,t,r,n){void 0===n&&(n=r)
var s=Object.getOwnPropertyDescriptor(t,r)
s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,s)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]},$r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},Qr=function(e){return(Qr=Object.getOwnPropertyNames||function(e){var t=[]
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r)
return t})(e)},en="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=new Error(r)
return n.name="SuppressedError",n.error=e,n.suppressed=t,n}
const tn={__extends:ee,__assign:Xr,__rest:te,__decorate:re,__param:ne,__esDecorate:se,__runInitializers:ae,__propKey:ie,__setFunctionName:oe,__metadata:le,__awaiter:ce,__generator:ue,__createBinding:Zr,__exportStar:de,__values:he,__read:pe,__spread:fe,__spreadArrays:me,__spreadArray:ge,__await:be,__asyncGenerator:ye,__asyncDelegator:ve,__asyncValues:xe,__makeTemplateObject:we,__importStar:ke,__importDefault:je,__classPrivateFieldGet:Se,__classPrivateFieldSet:_e,__classPrivateFieldIn:Ne,__addDisposableResource:Ee,__disposeResources:Te,__rewriteRelativeImportExtension:Ce},rn=Object.freeze({__proto__:null,__addDisposableResource:Ee,get __assign(){return Xr},__asyncDelegator:ve,__asyncGenerator:ye,__asyncValues:xe,__await:be,__awaiter:ce,__classPrivateFieldGet:Se,__classPrivateFieldIn:Ne,__classPrivateFieldSet:_e,__createBinding:Zr,__decorate:re,__disposeResources:Te,__esDecorate:se,__exportStar:de,__extends:ee,__generator:ue,__importDefault:je,__importStar:ke,__makeTemplateObject:we,__metadata:le,__param:ne,__propKey:ie,__read:pe,__rest:te,__rewriteRelativeImportExtension:Ce,__runInitializers:ae,__setFunctionName:oe,__spread:fe,__spreadArray:ge,__spreadArrays:me,__values:he,default:tn})
let nn=class extends Error{constructor(e,t="FunctionsError",r){super(e),this.name=t,this.context=r}},sn=class extends nn{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}},an=class extends nn{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}},on=class extends nn{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}
var ln,cn;(cn=ln||(ln={})).Any="any",cn.ApNortheast1="ap-northeast-1",cn.ApNortheast2="ap-northeast-2",cn.ApSouth1="ap-south-1",cn.ApSoutheast1="ap-southeast-1",cn.ApSoutheast2="ap-southeast-2",cn.CaCentral1="ca-central-1",cn.EuCentral1="eu-central-1",cn.EuWest1="eu-west-1",cn.EuWest2="eu-west-2",cn.EuWest3="eu-west-3",cn.SaEast1="sa-east-1",cn.UsEast1="us-east-1",cn.UsWest1="us-west-1",cn.UsWest2="us-west-2"
const un=n(Object.freeze({__proto__:null,get FunctionRegion(){return ln},FunctionsClient:class{constructor(e,{headers:t={},customFetch:r,region:n=ln.Any}={}){this.url=e,this.headers=t,this.region=n,this.fetch=(e=>e?(...t)=>e(...t):(...e)=>fetch(...e))(r)}setAuth(e){this.headers.Authorization="Bearer ".concat(e)}invoke(e){return ce(this,arguments,void 0,function*(e,t={}){var r
let n,s
try{const{headers:a,method:i,body:o,signal:l,timeout:c}=t
let u={},{region:d}=t
d||(d=this.region)
const h=new URL("".concat(this.url,"/").concat(e))
let p
d&&"any"!==d&&(u["x-region"]=d,h.searchParams.set("forceFunctionRegion",d)),o&&(a&&!Object.prototype.hasOwnProperty.call(a,"Content-Type")||!a)?"undefined"!=typeof Blob&&o instanceof Blob||o instanceof ArrayBuffer?(u["Content-Type"]="application/octet-stream",p=o):"string"==typeof o?(u["Content-Type"]="text/plain",p=o):"undefined"!=typeof FormData&&o instanceof FormData?p=o:(u["Content-Type"]="application/json",p=JSON.stringify(o)):p=o
let f=l
c&&(s=new AbortController,n=setTimeout(()=>s.abort(),c),l?(f=s.signal,l.addEventListener("abort",()=>s.abort())):f=s.signal)
const m=yield this.fetch(h.toString(),{method:i||"POST",headers:Object.assign(Object.assign(Object.assign({},u),this.headers),a),body:p,signal:f}).catch(e=>{throw new sn(e)}),g=m.headers.get("x-relay-error")
if(g&&"true"===g)throw new an(m)
if(!m.ok)throw new on(m)
let b,y=(null!==(r=m.headers.get("Content-Type"))&&void 0!==r?r:"text/plain").split(";")[0].trim()
return b="application/json"===y?yield m.json():"application/octet-stream"===y||"application/pdf"===y?yield m.blob():"text/event-stream"===y?m:"multipart/form-data"===y?yield m.formData():yield m.text(),{data:b,error:null,response:m}}catch(a){return{data:null,error:a,response:a instanceof on||a instanceof an?a.context:void 0}}finally{n&&clearTimeout(n)}})}},FunctionsError:nn,FunctionsFetchError:sn,FunctionsHttpError:on,FunctionsRelayError:an}))
var dn={}
const hn=n(rn)
var pn,fn,mn,gn,bn,yn,vn,xn={},wn={},kn={},jn={},Sn={},_n={}
class Nn{constructor(){}static detectEnvironment(){var e
if("undefined"!=typeof WebSocket)return{type:"native",constructor:WebSocket}
if("undefined"!=typeof globalThis&&void 0!==globalThis.WebSocket)return{type:"native",constructor:globalThis.WebSocket}
if("undefined"!=typeof global&&void 0!==global.WebSocket)return{type:"native",constructor:global.WebSocket}
if("undefined"!=typeof globalThis&&void 0!==globalThis.WebSocketPair&&void 0===globalThis.WebSocket)return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."}
if("undefined"!=typeof globalThis&&globalThis.EdgeRuntime||"undefined"!=typeof navigator&&(null===(e=navigator.userAgent)||void 0===e?void 0:e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."}
if("undefined"!=typeof process){const e=process.versions
if(e&&e.node){const t=e.node,r=parseInt(t.replace(/^v/,"").split(".")[0])
return r>=22?void 0!==globalThis.WebSocket?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:"Node.js ".concat(r," detected but native WebSocket not found."),workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:"Node.js ".concat(r," detected without native WebSocket support."),workaround:'For Node.js < 22, install "ws" package and provide it via the transport option:\nimport ws from "ws"\nnew RealtimeClient(url, { transport: ws })'}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment()
if(e.constructor)return e.constructor
let t=e.error||"WebSocket not supported in this environment."
throw e.workaround&&(t+="\n\nSuggested solution: ".concat(e.workaround)),new Error(t)}static createWebSocket(e,t){return new(this.getWebSocketConstructor())(e,t)}static isWebSocketSupported(){try{const e=this.detectEnvironment()
return"native"===e.type||"ws"===e.type}catch(e){return!1}}}const En="realtime-js/".concat("2.86.2"),Tn="1.0.0",Cn=Tn
var Rn,Pn,An,On,In,zn,Ln,Dn,Un,Fn,Bn;(Pn=Rn||(Rn={}))[Pn.connecting=0]="connecting",Pn[Pn.open=1]="open",Pn[Pn.closing=2]="closing",Pn[Pn.closed=3]="closed",(On=An||(An={})).closed="closed",On.errored="errored",On.joined="joined",On.joining="joining",On.leaving="leaving",(zn=In||(In={})).close="phx_close",zn.error="phx_error",zn.join="phx_join",zn.reply="phx_reply",zn.leave="phx_leave",zn.access_token="access_token",(Ln||(Ln={})).websocket="websocket",(Un=Dn||(Dn={})).Connecting="connecting",Un.Open="open",Un.Closing="closing",Un.Closed="closed"
class Wn{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=null!=e?e:[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&"string"==typeof e.payload.event)return t(this._binaryEncodeUserBroadcastPush(e))
let r=[e.join_ref,e.ref,e.topic,e.event,e.payload]
return t(JSON.stringify(r))}_binaryEncodeUserBroadcastPush(e){var t
return this._isArrayBuffer(null===(t=e.payload)||void 0===t?void 0:t.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var t,r
const n=null!==(r=null===(t=e.payload)||void 0===t?void 0:t.payload)&&void 0!==r?r:new ArrayBuffer(0)
return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,n)}_encodeJsonUserBroadcastPush(e){var t,r
const n=null!==(r=null===(t=e.payload)||void 0===t?void 0:t.payload)&&void 0!==r?r:{},s=(new TextEncoder).encode(JSON.stringify(n)).buffer
return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,s)}_encodeUserBroadcastPush(e,t,r){var n,s
const a=e.topic,i=null!==(n=e.ref)&&void 0!==n?n:"",o=null!==(s=e.join_ref)&&void 0!==s?s:"",l=e.payload.event,c=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},u=0===Object.keys(c).length?"":JSON.stringify(c)
if(o.length>255)throw new Error("joinRef length ".concat(o.length," exceeds maximum of 255"))
if(i.length>255)throw new Error("ref length ".concat(i.length," exceeds maximum of 255"))
if(a.length>255)throw new Error("topic length ".concat(a.length," exceeds maximum of 255"))
if(l.length>255)throw new Error("userEvent length ".concat(l.length," exceeds maximum of 255"))
if(u.length>255)throw new Error("metadata length ".concat(u.length," exceeds maximum of 255"))
const d=this.USER_BROADCAST_PUSH_META_LENGTH+o.length+i.length+a.length+l.length+u.length,h=new ArrayBuffer(this.HEADER_LENGTH+d)
let p=new DataView(h),f=0
p.setUint8(f++,this.KINDS.userBroadcastPush),p.setUint8(f++,o.length),p.setUint8(f++,i.length),p.setUint8(f++,a.length),p.setUint8(f++,l.length),p.setUint8(f++,u.length),p.setUint8(f++,t),Array.from(o,e=>p.setUint8(f++,e.charCodeAt(0))),Array.from(i,e=>p.setUint8(f++,e.charCodeAt(0))),Array.from(a,e=>p.setUint8(f++,e.charCodeAt(0))),Array.from(l,e=>p.setUint8(f++,e.charCodeAt(0))),Array.from(u,e=>p.setUint8(f++,e.charCodeAt(0)))
var m=new Uint8Array(h.byteLength+r.byteLength)
return m.set(new Uint8Array(h),0),m.set(new Uint8Array(r),h.byteLength),m.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e))
if("string"==typeof e){const r=JSON.parse(e),[n,s,a,i,o]=r
return t({join_ref:n,ref:s,topic:a,event:i,payload:o})}return t({})}_binaryDecode(e){const t=new DataView(e),r=t.getUint8(0),n=new TextDecoder
if(r===this.KINDS.userBroadcast)return this._decodeUserBroadcast(e,t,n)}_decodeUserBroadcast(e,t,r){const n=t.getUint8(1),s=t.getUint8(2),a=t.getUint8(3),i=t.getUint8(4)
let o=this.HEADER_LENGTH+4
const l=r.decode(e.slice(o,o+n))
o+=n
const c=r.decode(e.slice(o,o+s))
o+=s
const u=r.decode(e.slice(o,o+a))
o+=a
const d=e.slice(o,e.byteLength),h=i===this.JSON_ENCODING?JSON.parse(r.decode(d)):d,p={type:this.BROADCAST_EVENT,event:c,payload:h}
return a>0&&(p.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:l,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){var t
return e instanceof ArrayBuffer||"ArrayBuffer"===(null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name)}_pick(e,t){return e&&"object"==typeof e?Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e))):{}}}class Vn{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}(Bn=Fn||(Fn={})).abstime="abstime",Bn.bool="bool",Bn.date="date",Bn.daterange="daterange",Bn.float4="float4",Bn.float8="float8",Bn.int2="int2",Bn.int4="int4",Bn.int4range="int4range",Bn.int8="int8",Bn.int8range="int8range",Bn.json="json",Bn.jsonb="jsonb",Bn.money="money",Bn.numeric="numeric",Bn.oid="oid",Bn.reltime="reltime",Bn.text="text",Bn.time="time",Bn.timestamp="timestamp",Bn.timestamptz="timestamptz",Bn.timetz="timetz",Bn.tsrange="tsrange",Bn.tstzrange="tstzrange"
const qn=(e,t,r={})=>{var n
const s=null!==(n=r.skipTypes)&&void 0!==n?n:[]
return t?Object.keys(t).reduce((r,n)=>(r[n]=Mn(n,e,t,s),r),{}):{}},Mn=(e,t,r,n)=>{const s=t.find(t=>t.name===e),a=null==s?void 0:s.type,i=r[e]
return a&&!n.includes(a)?Hn(a,i):Kn(i)},Hn=(e,t)=>{if("_"===e.charAt(0)){const r=e.slice(1,e.length)
return Xn(t,r)}switch(e){case Fn.bool:return Gn(t)
case Fn.float4:case Fn.float8:case Fn.int2:case Fn.int4:case Fn.int8:case Fn.numeric:case Fn.oid:return Yn(t)
case Fn.json:case Fn.jsonb:return Jn(t)
case Fn.timestamp:return Zn(t)
case Fn.abstime:case Fn.date:case Fn.daterange:case Fn.int4range:case Fn.int8range:case Fn.money:case Fn.reltime:case Fn.text:case Fn.time:case Fn.timestamptz:case Fn.timetz:case Fn.tsrange:case Fn.tstzrange:default:return Kn(t)}},Kn=e=>e,Gn=e=>{switch(e){case"t":return!0
case"f":return!1
default:return e}},Yn=e=>{if("string"==typeof e){const t=parseFloat(e)
if(!Number.isNaN(t))return t}return e},Jn=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e}return e},Xn=(e,t)=>{if("string"!=typeof e)return e
const r=e.length-1,n=e[r]
if("{"===e[0]&&"}"===n){let n
const a=e.slice(1,r)
try{n=JSON.parse("["+a+"]")}catch(s){n=a?a.split(","):[]}return n.map(e=>Hn(t,e))}return e},Zn=e=>"string"==typeof e?e.replace(" ","T"):e,$n=e=>{const t=new URL(e)
return t.protocol=t.protocol.replace(/^ws/i,"http"),t.pathname=t.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),""===t.pathname||"/"===t.pathname?t.pathname="/api/broadcast":t.pathname=t.pathname+"/api/broadcast",t.href}
class Qn{constructor(e,t,r={},n=1e4){this.channel=e,this.event=t,this.payload=r,this.timeout=n,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var r
return this._hasReceived(e)&&t(null===(r=this.receivedResp)||void 0===r?void 0:r.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){this.timeoutTimer||(this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref),this.channel._on(this.refEvent,{},e=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=e,this._matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout))}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var es,ts;(ts=es||(es={})).SYNC="sync",ts.JOIN="join",ts.LEAVE="leave"
let rs=class e{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}}
const n=(null==r?void 0:r.events)||{state:"presence_state",diff:"presence_diff"}
this.channel._on(n.state,{},t=>{const{onJoin:r,onLeave:n,onSync:s}=this.caller
this.joinRef=this.channel._joinRef(),this.state=e.syncState(this.state,t,r,n),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,r,n)}),this.pendingDiffs=[],s()}),this.channel._on(n.diff,{},t=>{const{onJoin:r,onLeave:n,onSync:s}=this.caller
this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,r,n),s())}),this.onJoin((e,t,r)=>{this.channel._trigger("presence",{event:"join",key:e,currentPresences:t,newPresences:r})}),this.onLeave((e,t,r)=>{this.channel._trigger("presence",{event:"leave",key:e,currentPresences:t,leftPresences:r})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,r,n){const s=this.cloneDeep(e),a=this.transformState(t),i={},o={}
return this.map(s,(e,t)=>{a[e]||(o[e]=t)}),this.map(a,(e,t)=>{const r=s[e]
if(r){const n=t.map(e=>e.presence_ref),s=r.map(e=>e.presence_ref),a=t.filter(e=>s.indexOf(e.presence_ref)<0),l=r.filter(e=>n.indexOf(e.presence_ref)<0)
a.length>0&&(i[e]=a),l.length>0&&(o[e]=l)}else i[e]=t}),this.syncDiff(s,{joins:i,leaves:o},r,n)}static syncDiff(e,t,r,n){const{joins:s,leaves:a}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)}
return r||(r=()=>{}),n||(n=()=>{}),this.map(s,(t,n)=>{var s
const a=null!==(s=e[t])&&void 0!==s?s:[]
if(e[t]=this.cloneDeep(n),a.length>0){const r=e[t].map(e=>e.presence_ref),n=a.filter(e=>r.indexOf(e.presence_ref)<0)
e[t].unshift(...n)}r(t,a,n)}),this.map(a,(t,r)=>{let s=e[t]
if(!s)return
const a=r.map(e=>e.presence_ref)
s=s.filter(e=>a.indexOf(e.presence_ref)<0),e[t]=s,n(t,s,r),0===s.length&&delete e[t]}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(r=>t(r,e[r]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((t,r)=>{const n=e[r]
return t[r]="metas"in n?n.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e)):n,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}
var ns,ss,as,is,os,ls;(ss=ns||(ns={})).ALL="*",ss.INSERT="INSERT",ss.UPDATE="UPDATE",ss.DELETE="DELETE",(is=as||(as={})).BROADCAST="broadcast",is.PRESENCE="presence",is.POSTGRES_CHANGES="postgres_changes",is.SYSTEM="system",(ls=os||(os={})).SUBSCRIBED="SUBSCRIBED",ls.TIMED_OUT="TIMED_OUT",ls.CLOSED="CLOSED",ls.CHANNEL_ERROR="CHANNEL_ERROR"
const cs=An
let us=class e{constructor(e,t={config:{}},r){var n,s
if(this.topic=e,this.params=t,this.socket=r,this.bindings={},this.state=An.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new Qn(this,In.join,this.params,this.timeout),this.rejoinTimer=new Vn(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=An.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel","close ".concat(this.topic," ").concat(this._joinRef())),this.state=An.closed,this.socket._remove(this)}),this._onError(e=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel","error ".concat(this.topic),e),this.state=An.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel","timeout ".concat(this.topic),this.joinPush.timeout),this.state=An.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",e=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel","error ".concat(this.topic),e),this.state=An.errored,this.rejoinTimer.scheduleTimeout())}),this._on(In.reply,{},(e,t)=>{this._trigger(this._replyEventName(t),e)}),this.presence=new rs(this),this.broadcastEndpointURL=$n(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(null===(s=null===(n=this.params.config)||void 0===n?void 0:n.broadcast)||void 0===s?void 0:s.replay))throw"tried to use replay on public channel '".concat(this.topic,"'. It must be a private channel.")}subscribe(e,t=this.timeout){var r,n,s
if(this.socket.isConnected()||this.socket.connect(),this.state==An.closed){const{config:{broadcast:a,presence:i,private:o}}=this.params,l=null!==(n=null===(r=this.bindings.postgres_changes)||void 0===r?void 0:r.map(e=>e.filter))&&void 0!==n?n:[],c=!!this.bindings[as.PRESENCE]&&this.bindings[as.PRESENCE].length>0||!0===(null===(s=this.params.config.presence)||void 0===s?void 0:s.enabled),u={},d={broadcast:a,presence:Object.assign(Object.assign({},i),{enabled:c}),postgres_changes:l,private:o}
this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(t=>null==e?void 0:e(os.CHANNEL_ERROR,t)),this._onClose(()=>null==e?void 0:e(os.CLOSED)),this.updateJoinPayload(Object.assign({config:d},u)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",async({postgres_changes:t})=>{var r
if(this.socket.setAuth(),void 0!==t){const n=this.bindings.postgres_changes,s=null!==(r=null==n?void 0:n.length)&&void 0!==r?r:0,a=[]
for(let r=0;r<s;r++){const s=n[r],{filter:{event:i,schema:o,table:l,filter:c}}=s,u=t&&t[r]
if(!u||u.event!==i||u.schema!==o||u.table!==l||u.filter!==c)return this.unsubscribe(),this.state=An.errored,void(null==e||e(os.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes")))
a.push(Object.assign(Object.assign({},s),{id:u.id}))}return this.bindings.postgres_changes=a,void(e&&e(os.SUBSCRIBED))}null==e||e(os.SUBSCRIBED)}).receive("error",t=>{this.state=An.errored,null==e||e(os.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(t).join(", ")||"error")))}).receive("timeout",()=>{null==e||e(os.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,r){return this.state===An.joined&&e===as.PRESENCE&&(this.socket.log("channel","resubscribe to ".concat(this.topic," due to change in presence callbacks on joined channel")),this.unsubscribe().then(()=>this.subscribe())),this._on(e,t,r)}async httpSend(e,t,r={}){var n
const s=this.socket.accessTokenValue?"Bearer ".concat(this.socket.accessTokenValue):""
if(null==t)return Promise.reject("Payload is required for httpSend()")
const a={method:"POST",headers:{Authorization:s,apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:e,payload:t,private:this.private}]})},i=await this._fetchWithTimeout(this.broadcastEndpointURL,a,null!==(n=r.timeout)&&void 0!==n?n:this.timeout)
if(202===i.status)return{success:!0}
let o=i.statusText
try{const e=await i.json()
o=e.error||e.message||o}catch(l){}return Promise.reject(new Error(o))}async send(e,t={}){var r,n
if(this._canPush()||"broadcast"!==e.type)return new Promise(r=>{var n,s,a
const i=this._push(e.type,e,t.timeout||this.timeout)
"broadcast"!==e.type||(null===(a=null===(s=null===(n=this.params)||void 0===n?void 0:n.config)||void 0===s?void 0:s.broadcast)||void 0===a?void 0:a.ack)||r("ok"),i.receive("ok",()=>r("ok")),i.receive("error",()=>r("error")),i.receive("timeout",()=>r("timed out"))})
{const{event:a,payload:i}=e,o={method:"POST",headers:{Authorization:this.socket.accessTokenValue?"Bearer ".concat(this.socket.accessTokenValue):"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:a,payload:i,private:this.private}]})}
try{const e=await this._fetchWithTimeout(this.broadcastEndpointURL,o,null!==(r=t.timeout)&&void 0!==r?r:this.timeout)
return await(null===(n=e.body)||void 0===n?void 0:n.cancel()),e.ok?"ok":"error"}catch(s){return"AbortError"===s.name?"timed out":"error"}}}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=An.leaving
const t=()=>{this.socket.log("channel","leave ".concat(this.topic)),this._trigger(In.close,"leave",this._joinRef())}
this.joinPush.destroy()
let r=null
return new Promise(n=>{r=new Qn(this,In.leave,{},e),r.receive("ok",()=>{t(),n("ok")}).receive("timeout",()=>{t(),n("timed out")}).receive("error",()=>{n("error")}),r.send(),this._canPush()||r.trigger("ok",{})}).finally(()=>{null==r||r.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=An.closed,this.bindings={}}async _fetchWithTimeout(e,t,r){const n=new AbortController,s=setTimeout(()=>n.abort(),r),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:n.signal}))
return clearTimeout(s),a}_push(e,t,r=this.timeout){if(!this.joinedOnce)throw"tried to push '".concat(e,"' to '").concat(this.topic,"' before joining. Use channel.subscribe() before pushing events")
let n=new Qn(this,e,t,r)
return this._canPush()?n.send():this._addToPushBuffer(n),n}_addToPushBuffer(e){if(e.startTimeout(),this.pushBuffer.push(e),this.pushBuffer.length>100){const e=this.pushBuffer.shift()
e&&(e.destroy(),this.socket.log("channel","discarded push due to buffer overflow: ".concat(e.event),e.payload))}}_onMessage(e,t,r){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,r){var n,s
const a=e.toLocaleLowerCase(),{close:i,error:o,leave:l,join:c}=In
if(r&&[i,o,l,c].indexOf(a)>=0&&r!==this._joinRef())return
let u=this._onMessage(a,t,r)
if(t&&!u)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(a)?null===(n=this.bindings.postgres_changes)||void 0===n||n.filter(e=>{var t,r,n
return"*"===(null===(t=e.filter)||void 0===t?void 0:t.event)||(null===(n=null===(r=e.filter)||void 0===r?void 0:r.event)||void 0===n?void 0:n.toLocaleLowerCase())===a}).map(e=>e.callback(u,r)):null===(s=this.bindings[a])||void 0===s||s.filter(e=>{var r,n,s,i,o,l
if(["broadcast","presence","postgres_changes"].includes(a)){if("id"in e){const a=e.id,i=null===(r=e.filter)||void 0===r?void 0:r.event
return a&&(null===(n=t.ids)||void 0===n?void 0:n.includes(a))&&("*"===i||(null==i?void 0:i.toLocaleLowerCase())===(null===(s=t.data)||void 0===s?void 0:s.type.toLocaleLowerCase()))}{const r=null===(o=null===(i=null==e?void 0:e.filter)||void 0===i?void 0:i.event)||void 0===o?void 0:o.toLocaleLowerCase()
return"*"===r||r===(null===(l=null==t?void 0:t.event)||void 0===l?void 0:l.toLocaleLowerCase())}}return e.type.toLocaleLowerCase()===a}).map(e=>{if("object"==typeof u&&"ids"in u){const e=u.data,{schema:t,table:r,commit_timestamp:n,type:s,errors:a}=e,i={schema:t,table:r,commit_timestamp:n,eventType:s,new:{},old:{},errors:a}
u=Object.assign(Object.assign({},i),this._getPayloadRecords(e))}e.callback(u,r)})}_isClosed(){return this.state===An.closed}_isJoined(){return this.state===An.joined}_isJoining(){return this.state===An.joining}_isLeaving(){return this.state===An.leaving}_replyEventName(e){return"chan_reply_".concat(e)}_on(e,t,r){const n=e.toLocaleLowerCase(),s={type:n,filter:t,callback:r}
return this.bindings[n]?this.bindings[n].push(s):this.bindings[n]=[s],this}_off(t,r){const n=t.toLocaleLowerCase()
return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(t=>{var s
return!((null===(s=t.type)||void 0===s?void 0:s.toLocaleLowerCase())===n&&e.isEqual(t.filter,r))})),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1
for(const r in e)if(e[r]!==t[r])return!1
return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(In.close,{},e)}_onError(e){this._on(In.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=An.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}}
return"INSERT"!==e.type&&"UPDATE"!==e.type||(t.new=qn(e.columns,e.record)),"UPDATE"!==e.type&&"DELETE"!==e.type||(t.old=qn(e.columns,e.old_record)),t}}
const ds=()=>{},hs=[1e3,2e3,5e3,1e4],ps=n(Object.freeze({__proto__:null,REALTIME_CHANNEL_STATES:cs,get REALTIME_LISTEN_TYPES(){return as},get REALTIME_POSTGRES_CHANGES_LISTEN_EVENT(){return ns},get REALTIME_PRESENCE_LISTEN_EVENTS(){return es},get REALTIME_SUBSCRIBE_STATES(){return os},RealtimeChannel:us,RealtimeClient:class{constructor(e,t){var r
if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=1e4,this.transport=null,this.heartbeatIntervalMs=25e3,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=ds,this.ref=0,this.reconnectTimer=null,this.vsn=Cn,this.logger=ds,this.conn=null,this.sendBuffer=[],this.serializer=new Wn,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!(null===(r=null==t?void 0:t.params)||void 0===r?void 0:r.apikey))throw new Error("API key is required to connect to Realtime")
this.apiKey=t.params.apikey,this.endPoint="".concat(e,"/").concat(Ln.websocket),this.httpEndpoint=$n(e),this._initializeOptions(t),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(null==t?void 0:t.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||null!==this.conn&&this.isConnected())){if(this._setConnectionState("connecting"),this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL())
else try{this.conn=Nn.createWebSocket(this.endpointURL())}catch(e){this._setConnectionState("disconnected")
const t=e.message
if(t.includes("Node.js"))throw new Error("".concat(t,"\n\n")+'To use Realtime in Node.js, you need to provide a WebSocket implementation:\n\nOption 1: Use Node.js 22+ which has native WebSocket support\nOption 2: Install and provide the "ws" package:\n\n  npm install ws\n\n  import ws from "ws"\n  const client = new RealtimeClient(url, {\n    ...options,\n    transport: ws\n  })')
throw new Error("WebSocket not available: ".concat(t))}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:this.vsn}))}disconnect(e,t){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const r=setTimeout(()=>{this._setConnectionState("disconnected")},100)
this.conn.onclose=()=>{clearTimeout(r),this._setConnectionState("disconnected")},"function"==typeof this.conn.close&&(e?this.conn.close(e,null!=t?t:""):this.conn.close()),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe()
return 0===this.channels.length&&this.disconnect(),t}async removeAllChannels(){const e=await Promise.all(this.channels.map(e=>e.unsubscribe()))
return this.channels=[],this.disconnect(),e}log(e,t,r){this.logger(e,t,r)}connectionState(){switch(this.conn&&this.conn.readyState){case Rn.connecting:return Dn.Connecting
case Rn.open:return Dn.Open
case Rn.closing:return Dn.Closing
default:return Dn.Closed}}isConnected(){return this.connectionState()===Dn.Open}isConnecting(){return"connecting"===this._connectionState}isDisconnecting(){return"disconnecting"===this._connectionState}channel(e,t={config:{}}){const r="realtime:".concat(e),n=this.getChannels().find(e=>e.topic===r)
if(n)return n
{const r=new us("realtime:".concat(e),t,this)
return this.channels.push(r),r}}push(e){const{topic:t,event:r,payload:n,ref:s}=e,a=()=>{this.encode(e,e=>{var t
null===(t=this.conn)||void 0===t||t.send(e)})}
this.log("push","".concat(t," ").concat(r," (").concat(s,")"),n),this.isConnected()?a():this.sendBuffer.push(a)}async setAuth(e=null){this._authPromise=this._performAuth(e)
try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var e
if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection")
try{this.heartbeatCallback("timeout")}catch(jl){this.log("error","error in heartbeat callback",jl)}return this._wasManualDisconnect=!1,null===(e=this.conn)||void 0===e||e.close(1e3,"heartbeat timeout"),void setTimeout(()=>{var e
this.isConnected()||null===(e=this.reconnectTimer)||void 0===e||e.scheduleTimeout()},100)}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef})
try{this.heartbeatCallback("sent")}catch(jl){this.log("error","error in heartbeat callback",jl)}this._setAuthSafely("heartbeat")}else try{this.heartbeatCallback("disconnected")}catch(jl){this.log("error","error in heartbeat callback",jl)}}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1
return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t._isJoined()||t._isJoining()))
t&&(this.log("transport",'leaving duplicate topic "'.concat(e,'"')),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic)}_onConnMessage(e){this.decode(e.data,e=>{if("phoenix"===e.topic&&"phx_reply"===e.event)try{this.heartbeatCallback("ok"===e.payload.status?"ok":"error")}catch(jl){this.log("error","error in heartbeat callback",jl)}e.ref&&e.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null)
const{topic:t,event:r,payload:n,ref:s}=e,a=s?"(".concat(s,")"):"",i=n.status||""
this.log("receive","".concat(i," ").concat(t," ").concat(r," ").concat(a).trim(),n),this.channels.filter(e=>e._isMember(t)).forEach(e=>e._trigger(r,n,s)),this._triggerStateCallbacks("message",e)})}_clearTimer(e){var t
"heartbeat"===e&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):"reconnect"===e&&(null===(t=this.reconnectTimer)||void 0===t||t.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_teardownConnection(){if(this.conn){if(this.conn.readyState===Rn.open||this.conn.readyState===Rn.connecting)try{this.conn.close()}catch(jl){this.log("error","Error closing connection",jl)}this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null}this._clearAllTimers(),this.channels.forEach(e=>e.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport","connected to ".concat(this.endpointURL())),(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).then(()=>{this.flushSendBuffer()}).catch(e=>{this.log("error","error waiting for auth on connect",e),this.flushSendBuffer()}),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker","starting worker for from ".concat(this.workerUrl)):this.log("worker","starting default worker")
const e=this._workerObjectUrl(this.workerUrl)
this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log("worker","worker error",e.message),this.workerRef.terminate()},this.workerRef.onmessage=e=>{"keepAlive"===e.data.event&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(e){var t
this._setConnectionState("disconnected"),this.log("transport","close",e),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||null===(t=this.reconnectTimer)||void 0===t||t.scheduleTimeout(),this._triggerStateCallbacks("close",e)}_onConnError(e){this._setConnectionState("disconnected"),this.log("transport","".concat(e)),this._triggerChanError(),this._triggerStateCallbacks("error",e)}_triggerChanError(){this.channels.forEach(e=>e._trigger(In.error))}_appendParams(e,t){if(0===Object.keys(t).length)return e
const r=e.match(/\?/)?"&":"?",n=new URLSearchParams(t)
return"".concat(e).concat(r).concat(n)}_workerObjectUrl(e){let t
if(e)t=e
else{const e=new Blob(['\n  addEventListener("message", (e) => {\n    if (e.data.event === "start") {\n      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);\n    }\n  });'],{type:"application/javascript"})
t=URL.createObjectURL(e)}return t}_setConnectionState(e,t=!1){this._connectionState=e,"connecting"===e?this._wasManualDisconnect=!1:"disconnecting"===e&&(this._wasManualDisconnect=t)}async _performAuth(e=null){let t
t=e||(this.accessToken?await this.accessToken():this.accessTokenValue),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(e=>{const r={access_token:t,version:En}
t&&e.updateJoinPayload(r),e.joinedOnce&&e._isJoined()&&e._push(In.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this.setAuth().catch(t=>{this.log("error","error setting auth in ".concat(e),t)})}_triggerStateCallbacks(e,t){try{this.stateChangeCallbacks[e].forEach(r=>{try{r(t)}catch(jl){this.log("error","error in ".concat(e," callback"),jl)}})}catch(jl){this.log("error","error triggering ".concat(e," callbacks"),jl)}}_setupReconnectionTimer(){this.reconnectTimer=new Vn(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},10)},this.reconnectAfterMs)}_initializeOptions(e){var t,r,n,s,a,i,o,l,c,u,d,h
switch(this.transport=null!==(t=null==e?void 0:e.transport)&&void 0!==t?t:null,this.timeout=null!==(r=null==e?void 0:e.timeout)&&void 0!==r?r:1e4,this.heartbeatIntervalMs=null!==(n=null==e?void 0:e.heartbeatIntervalMs)&&void 0!==n?n:25e3,this.worker=null!==(s=null==e?void 0:e.worker)&&void 0!==s&&s,this.accessToken=null!==(a=null==e?void 0:e.accessToken)&&void 0!==a?a:null,this.heartbeatCallback=null!==(i=null==e?void 0:e.heartbeatCallback)&&void 0!==i?i:ds,this.vsn=null!==(o=null==e?void 0:e.vsn)&&void 0!==o?o:Cn,(null==e?void 0:e.params)&&(this.params=e.params),(null==e?void 0:e.logger)&&(this.logger=e.logger),((null==e?void 0:e.logLevel)||(null==e?void 0:e.log_level))&&(this.logLevel=e.logLevel||e.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=null!==(l=null==e?void 0:e.reconnectAfterMs)&&void 0!==l?l:e=>hs[e-1]||1e4,this.vsn){case Tn:this.encode=null!==(c=null==e?void 0:e.encode)&&void 0!==c?c:(e,t)=>t(JSON.stringify(e)),this.decode=null!==(u=null==e?void 0:e.decode)&&void 0!==u?u:(e,t)=>t(JSON.parse(e))
break
case"2.0.0":this.encode=null!==(d=null==e?void 0:e.encode)&&void 0!==d?d:this.serializer.encode.bind(this.serializer),this.decode=null!==(h=null==e?void 0:e.decode)&&void 0!==h?h:this.serializer.decode.bind(this.serializer)
break
default:throw new Error("Unsupported serializer version: ".concat(this.vsn))}if(this.worker){if("undefined"!=typeof window&&!window.Worker)throw new Error("Web Worker is not supported")
this.workerUrl=null==e?void 0:e.workerUrl}}},RealtimePresence:rs,WebSocketFactory:Nn}))
class fs extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}class ms extends fs{constructor(e,t,r){super(e),this.name="StorageApiError",this.status=t,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class gs extends fs{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}}const bs=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),ys=e=>{if(Array.isArray(e))return e.map(e=>ys(e))
if("function"==typeof e||e!==Object(e))return e
const t={}
return Object.entries(e).forEach(([e,r])=>{const n=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,""))
t[n]=ys(r)}),t},vs=e=>{var t
return e.msg||e.message||e.error_description||("string"==typeof e.error?e.error:null===(t=e.error)||void 0===t?void 0:t.message)||JSON.stringify(e)}
class xs{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t}then(e,t){return this.execute().then(e,t)}execute(){return ce(this,void 0,void 0,function*(){try{return{data:(yield this.downloadFn()).body,error:null}}catch(e){if(this.shouldThrowOnError)throw e
if(Le(e))return{data:null,error:e}
throw e}})}}var ws
class ks{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[ws]="BlobDownloadBuilder",this.promise=null}asStream(){return new xs(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}execute(){return ce(this,void 0,void 0,function*(){try{const e=yield this.downloadFn()
return{data:yield e.blob(),error:null}}catch(e){if(this.shouldThrowOnError)throw e
if(Le(e))return{data:null,error:e}
throw e}})}}ws=Symbol.toStringTag
const js={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Ss={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1}
class _s{constructor(e,t={},r,n){this.shouldThrowOnError=!1,this.url=e,this.headers=t,this.bucketId=r,this.fetch=bs(n)}throwOnError(){return this.shouldThrowOnError=!0,this}uploadOrUpdate(e,t,r,n){return ce(this,void 0,void 0,function*(){try{let s
const a=Object.assign(Object.assign({},Ss),n)
let i=Object.assign(Object.assign({},this.headers),"POST"===e&&{"x-upsert":String(a.upsert)})
const o=a.metadata
"undefined"!=typeof Blob&&r instanceof Blob?(s=new FormData,s.append("cacheControl",a.cacheControl),o&&s.append("metadata",this.encodeMetadata(o)),s.append("",r)):"undefined"!=typeof FormData&&r instanceof FormData?(s=r,s.has("cacheControl")||s.append("cacheControl",a.cacheControl),o&&!s.has("metadata")&&s.append("metadata",this.encodeMetadata(o))):(s=r,i["cache-control"]="max-age=".concat(a.cacheControl),i["content-type"]=a.contentType,o&&(i["x-metadata"]=this.toBase64(this.encodeMetadata(o))),("undefined"!=typeof ReadableStream&&s instanceof ReadableStream||s&&"object"==typeof s&&"pipe"in s&&"function"==typeof s.pipe)&&!a.duplex&&(a.duplex="half")),(null==n?void 0:n.headers)&&(i=Object.assign(Object.assign({},i),n.headers))
const l=this._removeEmptyFolders(t),c=this._getFinalPath(l),u=yield("PUT"==e?Be:Fe)(this.fetch,"".concat(this.url,"/object/").concat(c),s,Object.assign({headers:i},(null==a?void 0:a.duplex)?{duplex:a.duplex}:{}))
return{data:{path:l,id:u.Id,fullPath:u.Key},error:null}}catch(s){if(this.shouldThrowOnError)throw s
if(Le(s))return{data:null,error:s}
throw s}})}upload(e,t,r){return ce(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,t,r)})}uploadToSignedUrl(e,t,r,n){return ce(this,void 0,void 0,function*(){const s=this._removeEmptyFolders(e),a=this._getFinalPath(s),i=new URL(this.url+"/object/upload/sign/".concat(a))
i.searchParams.set("token",t)
try{let e
const t=Object.assign({upsert:Ss.upsert},n),a=Object.assign(Object.assign({},this.headers),{"x-upsert":String(t.upsert)})
return"undefined"!=typeof Blob&&r instanceof Blob?(e=new FormData,e.append("cacheControl",t.cacheControl),e.append("",r)):"undefined"!=typeof FormData&&r instanceof FormData?(e=r,e.append("cacheControl",t.cacheControl)):(e=r,a["cache-control"]="max-age=".concat(t.cacheControl),a["content-type"]=t.contentType),{data:{path:s,fullPath:(yield Be(this.fetch,i.toString(),e,{headers:a})).Key},error:null}}catch(o){if(this.shouldThrowOnError)throw o
if(Le(o))return{data:null,error:o}
throw o}})}createSignedUploadUrl(e,t){return ce(this,void 0,void 0,function*(){try{let r=this._getFinalPath(e)
const n=Object.assign({},this.headers);(null==t?void 0:t.upsert)&&(n["x-upsert"]="true")
const s=yield Fe(this.fetch,"".concat(this.url,"/object/upload/sign/").concat(r),{},{headers:n}),a=new URL(this.url+s.url),i=a.searchParams.get("token")
if(!i)throw new fs("No token returned by API")
return{data:{signedUrl:a.toString(),path:e,token:i},error:null}}catch(r){if(this.shouldThrowOnError)throw r
if(Le(r))return{data:null,error:r}
throw r}})}update(e,t,r){return ce(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,t,r)})}move(e,t,r){return ce(this,void 0,void 0,function*(){try{return{data:yield Fe(this.fetch,"".concat(this.url,"/object/move"),{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:null==r?void 0:r.destinationBucket},{headers:this.headers}),error:null}}catch(n){if(this.shouldThrowOnError)throw n
if(Le(n))return{data:null,error:n}
throw n}})}copy(e,t,r){return ce(this,void 0,void 0,function*(){try{return{data:{path:(yield Fe(this.fetch,"".concat(this.url,"/object/copy"),{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:null==r?void 0:r.destinationBucket},{headers:this.headers})).Key},error:null}}catch(n){if(this.shouldThrowOnError)throw n
if(Le(n))return{data:null,error:n}
throw n}})}createSignedUrl(e,t,r){return ce(this,void 0,void 0,function*(){try{let n=this._getFinalPath(e),s=yield Fe(this.fetch,"".concat(this.url,"/object/sign/").concat(n),Object.assign({expiresIn:t},(null==r?void 0:r.transform)?{transform:r.transform}:{}),{headers:this.headers})
const a=(null==r?void 0:r.download)?"&download=".concat(!0===r.download?"":r.download):""
return s={signedUrl:encodeURI("".concat(this.url).concat(s.signedURL).concat(a))},{data:s,error:null}}catch(n){if(this.shouldThrowOnError)throw n
if(Le(n))return{data:null,error:n}
throw n}})}createSignedUrls(e,t,r){return ce(this,void 0,void 0,function*(){try{const n=yield Fe(this.fetch,"".concat(this.url,"/object/sign/").concat(this.bucketId),{expiresIn:t,paths:e},{headers:this.headers}),s=(null==r?void 0:r.download)?"&download=".concat(!0===r.download?"":r.download):""
return{data:n.map(e=>Object.assign(Object.assign({},e),{signedUrl:e.signedURL?encodeURI("".concat(this.url).concat(e.signedURL).concat(s)):null})),error:null}}catch(n){if(this.shouldThrowOnError)throw n
if(Le(n))return{data:null,error:n}
throw n}})}download(e,t){const r=void 0!==(null==t?void 0:t.transform)?"render/image/authenticated":"object",n=this.transformOptsToQueryString((null==t?void 0:t.transform)||{}),s=n?"?".concat(n):"",a=this._getFinalPath(e)
return new ks(()=>Ue(this.fetch,"".concat(this.url,"/").concat(r,"/").concat(a).concat(s),{headers:this.headers,noResolveJson:!0}),this.shouldThrowOnError)}info(e){return ce(this,void 0,void 0,function*(){const t=this._getFinalPath(e)
try{const e=yield Ue(this.fetch,"".concat(this.url,"/object/info/").concat(t),{headers:this.headers})
return{data:ys(e),error:null}}catch(r){if(this.shouldThrowOnError)throw r
if(Le(r))return{data:null,error:r}
throw r}})}exists(e){return ce(this,void 0,void 0,function*(){const t=this._getFinalPath(e)
try{return yield function(e,t,r){return ce(this,void 0,void 0,function*(){return De(e,"HEAD",t,Object.assign(Object.assign({},r),{noResolveJson:!0}),void 0)})}(this.fetch,"".concat(this.url,"/object/").concat(t),{headers:this.headers}),{data:!0,error:null}}catch(r){if(this.shouldThrowOnError)throw r
if(Le(r)&&r instanceof gs){const e=r.originalError
if([400,404].includes(null==e?void 0:e.status))return{data:!1,error:r}}throw r}})}getPublicUrl(e,t){const r=this._getFinalPath(e),n=[],s=(null==t?void 0:t.download)?"download=".concat(!0===t.download?"":t.download):""
""!==s&&n.push(s)
const a=void 0!==(null==t?void 0:t.transform)?"render/image":"object",i=this.transformOptsToQueryString((null==t?void 0:t.transform)||{})
""!==i&&n.push(i)
let o=n.join("&")
return""!==o&&(o="?".concat(o)),{data:{publicUrl:encodeURI("".concat(this.url,"/").concat(a,"/public/").concat(r).concat(o))}}}remove(e){return ce(this,void 0,void 0,function*(){try{return{data:yield We(this.fetch,"".concat(this.url,"/object/").concat(this.bucketId),{prefixes:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Le(t))return{data:null,error:t}
throw t}})}list(e,t,r){return ce(this,void 0,void 0,function*(){try{const n=Object.assign(Object.assign(Object.assign({},js),t),{prefix:e||""})
return{data:yield Fe(this.fetch,"".concat(this.url,"/object/list/").concat(this.bucketId),n,{headers:this.headers},r),error:null}}catch(n){if(this.shouldThrowOnError)throw n
if(Le(n))return{data:null,error:n}
throw n}})}listV2(e,t){return ce(this,void 0,void 0,function*(){try{const r=Object.assign({},e)
return{data:yield Fe(this.fetch,"".concat(this.url,"/object/list-v2/").concat(this.bucketId),r,{headers:this.headers},t),error:null}}catch(r){if(this.shouldThrowOnError)throw r
if(Le(r))return{data:null,error:r}
throw r}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return"undefined"!=typeof Buffer?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return"".concat(this.bucketId,"/").concat(e.replace(/^\/+/,""))}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[]
return e.width&&t.push("width=".concat(e.width)),e.height&&t.push("height=".concat(e.height)),e.resize&&t.push("resize=".concat(e.resize)),e.format&&t.push("format=".concat(e.format)),e.quality&&t.push("quality=".concat(e.quality)),t.join("&")}}const Ns="2.86.2",Es={"X-Client-Info":"storage-js/".concat(Ns)}
class Ts{constructor(e,t={},r,n){this.shouldThrowOnError=!1
const s=new URL(e);(null==n?void 0:n.useNewHostname)&&/supabase\.(co|in|red)$/.test(s.hostname)&&!s.hostname.includes("storage.supabase.")&&(s.hostname=s.hostname.replace("supabase.","storage.supabase.")),this.url=s.href.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Es),t),this.fetch=bs(r)}throwOnError(){return this.shouldThrowOnError=!0,this}listBuckets(e){return ce(this,void 0,void 0,function*(){try{const t=this.listBucketOptionsToQueryString(e)
return{data:yield Ue(this.fetch,"".concat(this.url,"/bucket").concat(t),{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Le(t))return{data:null,error:t}
throw t}})}getBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield Ue(this.fetch,"".concat(this.url,"/bucket/").concat(e),{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Le(t))return{data:null,error:t}
throw t}})}createBucket(e){return ce(this,arguments,void 0,function*(e,t={public:!1}){try{return{data:yield Fe(this.fetch,"".concat(this.url,"/bucket"),{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r
if(Le(r))return{data:null,error:r}
throw r}})}updateBucket(e,t){return ce(this,void 0,void 0,function*(){try{return{data:yield Be(this.fetch,"".concat(this.url,"/bucket/").concat(e),{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r
if(Le(r))return{data:null,error:r}
throw r}})}emptyBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield Fe(this.fetch,"".concat(this.url,"/bucket/").concat(e,"/empty"),{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Le(t))return{data:null,error:t}
throw t}})}deleteBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield We(this.fetch,"".concat(this.url,"/bucket/").concat(e),{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Le(t))return{data:null,error:t}
throw t}})}listBucketOptionsToQueryString(e){const t={}
return e&&("limit"in e&&(t.limit=String(e.limit)),"offset"in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?"?"+new URLSearchParams(t).toString():""}}var Cs=class extends Error{constructor(e,t){var r
super(e),this.name="IcebergError",this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown="CommitStateUnknownException"===t.icebergType||[500,502,504].includes(t.status)&&!0===(null==(r=t.icebergType)?void 0:r.includes("CommitState"))}isNotFound(){return 404===this.status}isConflict(){return 409===this.status}isAuthenticationTimeout(){return 419===this.status}},Rs=class{constructor(e,t=""){this.client=e,this.prefix=t}async listNamespaces(e){const t=e?{parent:Ve(e.namespace)}:void 0
return(await this.client.request({method:"GET",path:"".concat(this.prefix,"/namespaces"),query:t})).data.namespaces.map(e=>({namespace:e}))}async createNamespace(e,t){const r={namespace:e.namespace,properties:null==t?void 0:t.properties}
return(await this.client.request({method:"POST",path:"".concat(this.prefix,"/namespaces"),body:r})).data}async dropNamespace(e){await this.client.request({method:"DELETE",path:"".concat(this.prefix,"/namespaces/").concat(Ve(e.namespace))})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:"GET",path:"".concat(this.prefix,"/namespaces/").concat(Ve(e.namespace))})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:"HEAD",path:"".concat(this.prefix,"/namespaces/").concat(Ve(e.namespace))}),!0}catch(t){if(t instanceof Cs&&404===t.status)return!1
throw t}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(r){if(r instanceof Cs&&409===r.status)return
throw r}}},Ps=class{constructor(e,t="",r){this.client=e,this.prefix=t,this.accessDelegation=r}async listTables(e){return(await this.client.request({method:"GET",path:"".concat(this.prefix,"/namespaces/").concat(qe(e.namespace),"/tables")})).data.identifiers}async createTable(e,t){const r={}
return this.accessDelegation&&(r["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:"".concat(this.prefix,"/namespaces/").concat(qe(e.namespace),"/tables"),body:t,headers:r})).data.metadata}async updateTable(e,t){const r=await this.client.request({method:"POST",path:"".concat(this.prefix,"/namespaces/").concat(qe(e.namespace),"/tables/").concat(e.name),body:t})
return{"metadata-location":r.data["metadata-location"],metadata:r.data.metadata}}async dropTable(e,t){var r
await this.client.request({method:"DELETE",path:"".concat(this.prefix,"/namespaces/").concat(qe(e.namespace),"/tables/").concat(e.name),query:{purgeRequested:String(null!=(r=null==t?void 0:t.purge)&&r)}})}async loadTable(e){const t={}
return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:"".concat(this.prefix,"/namespaces/").concat(qe(e.namespace),"/tables/").concat(e.name),headers:t})).data.metadata}async tableExists(e){const t={}
this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation)
try{return await this.client.request({method:"HEAD",path:"".concat(this.prefix,"/namespaces/").concat(qe(e.namespace),"/tables/").concat(e.name),headers:t}),!0}catch(r){if(r instanceof Cs&&404===r.status)return!1
throw r}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(r){if(r instanceof Cs&&409===r.status)return await this.loadTable({namespace:e.namespace,name:t.name})
throw r}}},As=class{constructor(e){var t
let r="v1"
e.catalogName&&(r+="/".concat(e.catalogName))
const n=e.baseUrl.endsWith("/")?e.baseUrl:"".concat(e.baseUrl,"/")
this.client=function(e){var t
const r=null!=(t=e.fetchImpl)?t:globalThis.fetch
return{async request({method:t,path:n,query:s,body:a,headers:i}){var o
const l=function(e,t,r){const n=new URL(t,e)
if(r)for(const[s,a]of Object.entries(r))void 0!==a&&n.searchParams.set(s,a)
return n.toString()}(e.baseUrl,n,s),c=await async function(e){return e&&"none"!==e.type?"bearer"===e.type?{Authorization:"Bearer ".concat(e.token)}:"header"===e.type?{[e.name]:e.value}:"custom"===e.type?await e.getHeaders():{}:{}}(e.auth),u=await r(l,{method:t,headers:{...a?{"Content-Type":"application/json"}:{},...c,...i},body:a?JSON.stringify(a):void 0}),d=await u.text(),h=(u.headers.get("content-type")||"").includes("application/json"),p=h&&d?JSON.parse(d):d
if(!u.ok){const e=h?p:void 0,t=null==e?void 0:e.error
throw new Cs(null!=(o=null==t?void 0:t.message)?o:"Request failed with status ".concat(u.status),{status:u.status,icebergType:null==t?void 0:t.type,icebergCode:null==t?void 0:t.code,details:e})}return{status:u.status,headers:u.headers,data:p}}}}({baseUrl:n,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=null==(t=e.accessDelegation)?void 0:t.join(","),this.namespaceOps=new Rs(this.client,r),this.tableOps=new Ps(this.client,r,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}}
class Os{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Es),t),this.fetch=bs(r)}throwOnError(){return this.shouldThrowOnError=!0,this}createBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield Fe(this.fetch,"".concat(this.url,"/bucket"),{name:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Le(t))return{data:null,error:t}
throw t}})}listBuckets(e){return ce(this,void 0,void 0,function*(){try{const t=new URLSearchParams
void 0!==(null==e?void 0:e.limit)&&t.set("limit",e.limit.toString()),void 0!==(null==e?void 0:e.offset)&&t.set("offset",e.offset.toString()),(null==e?void 0:e.sortColumn)&&t.set("sortColumn",e.sortColumn),(null==e?void 0:e.sortOrder)&&t.set("sortOrder",e.sortOrder),(null==e?void 0:e.search)&&t.set("search",e.search)
const r=t.toString(),n=r?"".concat(this.url,"/bucket?").concat(r):"".concat(this.url,"/bucket")
return{data:yield Ue(this.fetch,n,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Le(t))return{data:null,error:t}
throw t}})}deleteBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield We(this.fetch,"".concat(this.url,"/bucket/").concat(e),{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Le(t))return{data:null,error:t}
throw t}})}from(e){if(!(e=>!(!e||"string"!=typeof e)&&!(0===e.length||e.length>100)&&e.trim()===e&&!e.includes("/")&&!e.includes("\\")&&/^[\w!.\*'() &$@=;:+,?-]+$/.test(e))(e))throw new fs("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.")
return new As({baseUrl:this.url,catalogName:e,auth:{type:"custom",getHeaders:()=>ce(this,void 0,void 0,function*(){return this.headers})},fetch:this.fetch})}}const Is={"X-Client-Info":"storage-js/".concat(Ns),"Content-Type":"application/json"}
class zs extends Error{constructor(e){super(e),this.__isStorageVectorsError=!0,this.name="StorageVectorsError"}}class Ls extends zs{constructor(e,t,r){super(e),this.name="StorageVectorsApiError",this.status=t,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class Ds extends zs{constructor(e,t){super(e),this.name="StorageVectorsUnknownError",this.originalError=t}}var Us,Fs;(Fs=Us||(Us={})).InternalError="InternalError",Fs.S3VectorConflictException="S3VectorConflictException",Fs.S3VectorNotFoundException="S3VectorNotFoundException",Fs.S3VectorBucketNotEmpty="S3VectorBucketNotEmpty",Fs.S3VectorMaxBucketsExceeded="S3VectorMaxBucketsExceeded",Fs.S3VectorMaxIndexesExceeded="S3VectorMaxIndexesExceeded"
const Bs=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Ws=e=>{if("object"!=typeof e||null===e)return!1
const t=Object.getPrototypeOf(e)
return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},Vs=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e)
class qs{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Is),t),this.fetch=Bs(r)}throwOnError(){return this.shouldThrowOnError=!0,this}createIndex(e){return ce(this,void 0,void 0,function*(){try{return{data:(yield He(this.fetch,"".concat(this.url,"/CreateIndex"),e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Me(t))return{data:null,error:t}
throw t}})}getIndex(e,t){return ce(this,void 0,void 0,function*(){try{return{data:yield He(this.fetch,"".concat(this.url,"/GetIndex"),{vectorBucketName:e,indexName:t},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r
if(Me(r))return{data:null,error:r}
throw r}})}listIndexes(e){return ce(this,void 0,void 0,function*(){try{return{data:yield He(this.fetch,"".concat(this.url,"/ListIndexes"),e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Me(t))return{data:null,error:t}
throw t}})}deleteIndex(e,t){return ce(this,void 0,void 0,function*(){try{return{data:(yield He(this.fetch,"".concat(this.url,"/DeleteIndex"),{vectorBucketName:e,indexName:t},{headers:this.headers}))||{},error:null}}catch(r){if(this.shouldThrowOnError)throw r
if(Me(r))return{data:null,error:r}
throw r}})}}class Ms{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Is),t),this.fetch=Bs(r)}throwOnError(){return this.shouldThrowOnError=!0,this}putVectors(e){return ce(this,void 0,void 0,function*(){try{if(e.vectors.length<1||e.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items")
return{data:(yield He(this.fetch,"".concat(this.url,"/PutVectors"),e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Me(t))return{data:null,error:t}
throw t}})}getVectors(e){return ce(this,void 0,void 0,function*(){try{return{data:yield He(this.fetch,"".concat(this.url,"/GetVectors"),e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Me(t))return{data:null,error:t}
throw t}})}listVectors(e){return ce(this,void 0,void 0,function*(){try{if(void 0!==e.segmentCount){if(e.segmentCount<1||e.segmentCount>16)throw new Error("segmentCount must be between 1 and 16")
if(void 0!==e.segmentIndex&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw new Error("segmentIndex must be between 0 and ".concat(e.segmentCount-1))}return{data:yield He(this.fetch,"".concat(this.url,"/ListVectors"),e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Me(t))return{data:null,error:t}
throw t}})}queryVectors(e){return ce(this,void 0,void 0,function*(){try{return{data:yield He(this.fetch,"".concat(this.url,"/QueryVectors"),e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Me(t))return{data:null,error:t}
throw t}})}deleteVectors(e){return ce(this,void 0,void 0,function*(){try{if(e.keys.length<1||e.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items")
return{data:(yield He(this.fetch,"".concat(this.url,"/DeleteVectors"),e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Me(t))return{data:null,error:t}
throw t}})}}class Hs{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},Is),t),this.fetch=Bs(r)}throwOnError(){return this.shouldThrowOnError=!0,this}createBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:(yield He(this.fetch,"".concat(this.url,"/CreateVectorBucket"),{vectorBucketName:e},{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Me(t))return{data:null,error:t}
throw t}})}getBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:yield He(this.fetch,"".concat(this.url,"/GetVectorBucket"),{vectorBucketName:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Me(t))return{data:null,error:t}
throw t}})}listBuckets(){return ce(this,arguments,void 0,function*(e={}){try{return{data:yield He(this.fetch,"".concat(this.url,"/ListVectorBuckets"),e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Me(t))return{data:null,error:t}
throw t}})}deleteBucket(e){return ce(this,void 0,void 0,function*(){try{return{data:(yield He(this.fetch,"".concat(this.url,"/DeleteVectorBucket"),{vectorBucketName:e},{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t
if(Me(t))return{data:null,error:t}
throw t}})}}class Ks extends Hs{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new Gs(this.url,this.headers,e,this.fetch)}createBucket(e){const t=Object.create(null,{createBucket:{get:()=>super.createBucket}})
return ce(this,void 0,void 0,function*(){return t.createBucket.call(this,e)})}getBucket(e){const t=Object.create(null,{getBucket:{get:()=>super.getBucket}})
return ce(this,void 0,void 0,function*(){return t.getBucket.call(this,e)})}listBuckets(){const e=Object.create(null,{listBuckets:{get:()=>super.listBuckets}})
return ce(this,arguments,void 0,function*(t={}){return e.listBuckets.call(this,t)})}deleteBucket(e){const t=Object.create(null,{deleteBucket:{get:()=>super.deleteBucket}})
return ce(this,void 0,void 0,function*(){return t.deleteBucket.call(this,e)})}}class Gs extends qs{constructor(e,t,r,n){super(e,t,n),this.vectorBucketName=r}createIndex(e){const t=Object.create(null,{createIndex:{get:()=>super.createIndex}})
return ce(this,void 0,void 0,function*(){return t.createIndex.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName}))})}listIndexes(){const e=Object.create(null,{listIndexes:{get:()=>super.listIndexes}})
return ce(this,arguments,void 0,function*(t={}){return e.listIndexes.call(this,Object.assign(Object.assign({},t),{vectorBucketName:this.vectorBucketName}))})}getIndex(e){const t=Object.create(null,{getIndex:{get:()=>super.getIndex}})
return ce(this,void 0,void 0,function*(){return t.getIndex.call(this,this.vectorBucketName,e)})}deleteIndex(e){const t=Object.create(null,{deleteIndex:{get:()=>super.deleteIndex}})
return ce(this,void 0,void 0,function*(){return t.deleteIndex.call(this,this.vectorBucketName,e)})}index(e){return new Ys(this.url,this.headers,this.vectorBucketName,e,this.fetch)}}class Ys extends Ms{constructor(e,t,r,n,s){super(e,t,s),this.vectorBucketName=r,this.indexName=n}putVectors(e){const t=Object.create(null,{putVectors:{get:()=>super.putVectors}})
return ce(this,void 0,void 0,function*(){return t.putVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}getVectors(e){const t=Object.create(null,{getVectors:{get:()=>super.getVectors}})
return ce(this,void 0,void 0,function*(){return t.getVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}listVectors(){const e=Object.create(null,{listVectors:{get:()=>super.listVectors}})
return ce(this,arguments,void 0,function*(t={}){return e.listVectors.call(this,Object.assign(Object.assign({},t),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}queryVectors(e){const t=Object.create(null,{queryVectors:{get:()=>super.queryVectors}})
return ce(this,void 0,void 0,function*(){return t.queryVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}deleteVectors(e){const t=Object.create(null,{deleteVectors:{get:()=>super.deleteVectors}})
return ce(this,void 0,void 0,function*(){return t.deleteVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}}const Js=n(Object.freeze({__proto__:null,StorageAnalyticsClient:Os,StorageApiError:ms,StorageClient:class extends Ts{constructor(e,t={},r,n){super(e,t,r,n)}from(e){return new _s(this.url,this.headers,e,this.fetch)}get vectors(){return new Ks(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Os(this.url+"/iceberg",this.headers,this.fetch)}},StorageError:fs,StorageUnknownError:gs,StorageVectorsApiError:Ls,StorageVectorsClient:Ks,StorageVectorsError:zs,get StorageVectorsErrorCode(){return Us},StorageVectorsUnknownError:Ds,VectorBucketApi:Hs,VectorBucketScope:Gs,VectorDataApi:Ms,VectorIndexApi:qs,VectorIndexScope:Ys,isPlainObject:Ws,isStorageError:Le,isStorageVectorsError:Me,normalizeToFloat32:e=>Array.from(new Float32Array(e)),resolveFetch:Bs,resolveResponse:()=>Response,validateVectorDimension:(e,t)=>{if(void 0!==t&&e.float32.length!==t)throw new Error("Vector dimension mismatch: expected ".concat(t,", got ").concat(e.float32.length))}}))
var Xs,Zs,$s,Qs,ea={},ta={},ra={},na={},sa={}
const aa="2.86.2",ia=3e4,oa=9e4,la={"X-Client-Info":"gotrue-js/".concat(aa)},ca="X-Supabase-Api-Version",ua={timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"},da=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
let ha=class extends Error{constructor(e,t,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=r}},pa=class extends ha{constructor(e,t,r){super(e,t,r),this.name="AuthApiError",this.status=t,this.code=r}},fa=class extends ha{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}},ma=class extends ha{constructor(e,t,r,n){super(e,r,n),this.name=t,this.status=r}},ga=class extends ma{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}},ba=class extends ma{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}},ya=class extends ma{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}},va=class extends ma{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}},xa=class extends ma{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}},wa=class extends ma{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}},ka=class extends ma{constructor(e,t,r){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=r}},ja=class extends ma{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}
const Sa="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),_a=" \t\n\r=".split(""),Na=(()=>{const e=new Array(128)
for(let t=0;t<e.length;t+=1)e[t]=-1
for(let t=0;t<_a.length;t+=1)e[_a[t].charCodeAt(0)]=-2
for(let t=0;t<Sa.length;t+=1)e[Sa[t].charCodeAt(0)]=t
return e})(),Ea=()=>"undefined"!=typeof window&&"undefined"!=typeof document,Ta={tested:!1,writable:!1},Ca=()=>{if(!Ea())return!1
try{if("object"!=typeof globalThis.localStorage)return!1}catch(jl){return!1}if(Ta.tested)return Ta.writable
const e="lswt-".concat(Math.random()).concat(Math.random())
try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Ta.tested=!0,Ta.writable=!0}catch(jl){Ta.tested=!0,Ta.writable=!1}return Ta.writable},Ra=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Pa=async(e,t,r)=>{await e.setItem(t,JSON.stringify(r))},Aa=async(e,t)=>{const r=await e.getItem(t)
if(!r)return null
try{return JSON.parse(r)}catch(n){return r}},Oa=async(e,t)=>{await e.removeItem(t)}
class Ia{constructor(){this.promise=new Ia.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}Ia.promiseConstructor=Promise
const za=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i,La=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,Da=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),Ua=[502,503,504],Fa=["global","local","others"]
let Ba=class{constructor({url:e="",headers:t={},fetch:r}){this.url=e,this.headers=t,this.fetch=Ra(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}async signOut(e,t=Fa[0]){if(Fa.indexOf(t)<0)throw new Error("@supabase/auth-js: Parameter scope must be one of ".concat(Fa.join(", ")))
try{return await ft(this.fetch,"POST","".concat(this.url,"/logout?scope=").concat(t),{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(r){if(Xe(r))return{data:null,error:r}
throw r}}async inviteUserByEmail(e,t={}){try{return await ft(this.fetch,"POST","".concat(this.url,"/invite"),{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:bt})}catch(r){if(Xe(r))return{data:{user:null},error:r}
throw r}}async generateLink(e){try{const{options:t}=e,r=te(e,["options"]),n=Object.assign(Object.assign({},r),t)
return"newEmail"in r&&(n.new_email=null==r?void 0:r.newEmail,delete n.newEmail),await ft(this.fetch,"POST","".concat(this.url,"/admin/generate_link"),{body:n,headers:this.headers,xform:vt,redirectTo:null==t?void 0:t.redirectTo})}catch(t){if(Xe(t))return{data:{properties:null,user:null},error:t}
throw t}}async createUser(e){try{return await ft(this.fetch,"POST","".concat(this.url,"/admin/users"),{body:e,headers:this.headers,xform:bt})}catch(t){if(Xe(t))return{data:{user:null},error:t}
throw t}}async listUsers(e){var t,r,n,s,a,i,o
try{const l={nextPage:null,lastPage:0,total:0},c=await ft(this.fetch,"GET","".concat(this.url,"/admin/users"),{headers:this.headers,noResolveJson:!0,query:{page:null!==(r=null===(t=null==e?void 0:e.page)||void 0===t?void 0:t.toString())&&void 0!==r?r:"",per_page:null!==(s=null===(n=null==e?void 0:e.perPage)||void 0===n?void 0:n.toString())&&void 0!==s?s:""},xform:xt})
if(c.error)throw c.error
const u=await c.json(),d=null!==(a=c.headers.get("x-total-count"))&&void 0!==a?a:0,h=null!==(o=null===(i=c.headers.get("link"))||void 0===i?void 0:i.split(","))&&void 0!==o?o:[]
return h.length>0&&(h.forEach(e=>{const t=parseInt(e.split(";")[0].split("=")[1].substring(0,1)),r=JSON.parse(e.split(";")[1].split("=")[1])
l["".concat(r,"Page")]=t}),l.total=parseInt(d)),{data:Object.assign(Object.assign({},u),l),error:null}}catch(l){if(Xe(l))return{data:{users:[]},error:l}
throw l}}async getUserById(e){ut(e)
try{return await ft(this.fetch,"GET","".concat(this.url,"/admin/users/").concat(e),{headers:this.headers,xform:bt})}catch(t){if(Xe(t))return{data:{user:null},error:t}
throw t}}async updateUserById(e,t){ut(e)
try{return await ft(this.fetch,"PUT","".concat(this.url,"/admin/users/").concat(e),{body:t,headers:this.headers,xform:bt})}catch(r){if(Xe(r))return{data:{user:null},error:r}
throw r}}async deleteUser(e,t=!1){ut(e)
try{return await ft(this.fetch,"DELETE","".concat(this.url,"/admin/users/").concat(e),{headers:this.headers,body:{should_soft_delete:t},xform:bt})}catch(r){if(Xe(r))return{data:{user:null},error:r}
throw r}}async _listFactors(e){ut(e.userId)
try{const{data:t,error:r}=await ft(this.fetch,"GET","".concat(this.url,"/admin/users/").concat(e.userId,"/factors"),{headers:this.headers,xform:e=>({data:{factors:e},error:null})})
return{data:t,error:r}}catch(t){if(Xe(t))return{data:null,error:t}
throw t}}async _deleteFactor(e){ut(e.userId),ut(e.id)
try{return{data:await ft(this.fetch,"DELETE","".concat(this.url,"/admin/users/").concat(e.userId,"/factors/").concat(e.id),{headers:this.headers}),error:null}}catch(t){if(Xe(t))return{data:null,error:t}
throw t}}async _listOAuthClients(e){var t,r,n,s,a,i,o
try{const l={nextPage:null,lastPage:0,total:0},c=await ft(this.fetch,"GET","".concat(this.url,"/admin/oauth/clients"),{headers:this.headers,noResolveJson:!0,query:{page:null!==(r=null===(t=null==e?void 0:e.page)||void 0===t?void 0:t.toString())&&void 0!==r?r:"",per_page:null!==(s=null===(n=null==e?void 0:e.perPage)||void 0===n?void 0:n.toString())&&void 0!==s?s:""},xform:xt})
if(c.error)throw c.error
const u=await c.json(),d=null!==(a=c.headers.get("x-total-count"))&&void 0!==a?a:0,h=null!==(o=null===(i=c.headers.get("link"))||void 0===i?void 0:i.split(","))&&void 0!==o?o:[]
return h.length>0&&(h.forEach(e=>{const t=parseInt(e.split(";")[0].split("=")[1].substring(0,1)),r=JSON.parse(e.split(";")[1].split("=")[1])
l["".concat(r,"Page")]=t}),l.total=parseInt(d)),{data:Object.assign(Object.assign({},u),l),error:null}}catch(l){if(Xe(l))return{data:{clients:[]},error:l}
throw l}}async _createOAuthClient(e){try{return await ft(this.fetch,"POST","".concat(this.url,"/admin/oauth/clients"),{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(t){if(Xe(t))return{data:null,error:t}
throw t}}async _getOAuthClient(e){try{return await ft(this.fetch,"GET","".concat(this.url,"/admin/oauth/clients/").concat(e),{headers:this.headers,xform:e=>({data:e,error:null})})}catch(t){if(Xe(t))return{data:null,error:t}
throw t}}async _updateOAuthClient(e,t){try{return await ft(this.fetch,"PUT","".concat(this.url,"/admin/oauth/clients/").concat(e),{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(r){if(Xe(r))return{data:null,error:r}
throw r}}async _deleteOAuthClient(e){try{return await ft(this.fetch,"DELETE","".concat(this.url,"/admin/oauth/clients/").concat(e),{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(Xe(t))return{data:null,error:t}
throw t}}async _regenerateOAuthClientSecret(e){try{return await ft(this.fetch,"POST","".concat(this.url,"/admin/oauth/clients/").concat(e,"/regenerate_secret"),{headers:this.headers,xform:e=>({data:e,error:null})})}catch(t){if(Xe(t))return{data:null,error:t}
throw t}}}
const Wa={debug:!!(globalThis&&Ca()&&globalThis.localStorage&&"true"===globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug"))}
class Va extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}let qa=class extends Va{}
class Ma extends Va{}const Ha={}
class Ka extends Error{constructor({message:e,code:t,cause:r,name:n}){var s
super(e,{cause:r}),this.__isWebAuthnError=!0,this.name=null!==(s=null!=n?n:r instanceof Error?r.name:void 0)&&void 0!==s?s:"Unknown Error",this.code=t}}class Ga extends Ka{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}const Ya=new class{createNewAbortSignal(){if(this.controller){const e=new Error("Cancelling existing WebAuthn API call for new one")
e.name="AbortError",this.controller.abort(e)}const e=new AbortController
return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call")
e.name="AbortError",this.controller.abort(e),this.controller=void 0}}},Ja={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Xa={userVerification:"preferred",hints:["security-key"],attestation:"direct"}
class Za{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:t,friendlyName:r,signal:n},s){try{const{data:a,error:i}=await this.client.mfa.challenge({factorId:e,webauthn:t})
if(!a)return{data:null,error:i}
const o=null!=n?n:Ya.createNewAbortSignal()
if("create"===a.webauthn.type){const{user:e}=a.webauthn.credential_options.publicKey
e.name||(e.name="".concat(e.id,":").concat(r)),e.displayName||(e.displayName=e.name)}switch(a.webauthn.type){case"create":{const t=function(e,t){return Ot(Ja,e,t||{})}(a.webauthn.credential_options.publicKey,null==s?void 0:s.create),{data:r,error:n}=await async function(e){try{const t=await navigator.credentials.create(e)
return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Ga("Browser returned unexpected credential type",t)}:{data:null,error:new Ga("Empty credential response",t)}}catch(t){return{data:null,error:_t({error:t,options:e})}}}({publicKey:t,signal:o})
return r?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:r}},error:null}:{data:null,error:n}}case"request":{const t=function(e,t){return Ot(Xa,e,t||{})}(a.webauthn.credential_options.publicKey,null==s?void 0:s.request),{data:r,error:n}=await async function(e){try{const t=await navigator.credentials.get(e)
return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Ga("Browser returned unexpected credential type",t)}:{data:null,error:new Ga("Empty credential response",t)}}catch(t){return{data:null,error:Nt({error:t,options:e})}}}(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:o}))
return r?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:r}},error:null}:{data:null,error:n}}}}catch(a){return Xe(a)?{data:null,error:a}:{data:null,error:new fa("Unexpected error in challenge",a)}}}async _verify({challengeId:e,factorId:t,webauthn:r}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:r})}async _authenticate({factorId:e,webauthn:{rpId:t=("undefined"!=typeof window?window.location.hostname:void 0),rpOrigins:r=("undefined"!=typeof window?[window.location.origin]:void 0),signal:n}={}},s){if(!t)return{data:null,error:new ha("rpId is required for WebAuthn authentication")}
try{if(!At())return{data:null,error:new fa("Browser does not support WebAuthn",null)}
const{data:a,error:i}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:r},signal:n},{request:s})
if(!a)return{data:null,error:i}
const{webauthn:o}=a
return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:o.type,rpId:t,rpOrigins:r,credential_response:o.credential_response}})}catch(a){return Xe(a)?{data:null,error:a}:{data:null,error:new fa("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:t=("undefined"!=typeof window?window.location.hostname:void 0),rpOrigins:r=("undefined"!=typeof window?[window.location.origin]:void 0),signal:n}={}},s){if(!t)return{data:null,error:new ha("rpId is required for WebAuthn registration")}
try{if(!At())return{data:null,error:new fa("Browser does not support WebAuthn",null)}
const{data:a,error:i}=await this._enroll({friendlyName:e})
if(!a)return await this.client.mfa.listFactors().then(t=>{var r
return null===(r=t.data)||void 0===r?void 0:r.all.find(t=>"webauthn"===t.factor_type&&t.friendly_name===e&&"unverified"!==t.status)}).then(e=>e?this.client.mfa.unenroll({factorId:null==e?void 0:e.id}):void 0),{data:null,error:i}
const{data:o,error:l}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:r},signal:n},{create:s})
return o?this._verify({factorId:a.id,challengeId:o.challengeId,webauthn:{rpId:t,rpOrigins:r,type:o.webauthn.type,credential_response:o.webauthn.credential_response}}):{data:null,error:l}}catch(a){return Xe(a)?{data:null,error:a}:{data:null,error:new fa("Unexpected error in register",a)}}}}!function(){if("object"!=typeof globalThis)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch(jl){"undefined"!=typeof self&&(self.globalThis=self)}}()
const $a={url:"http://localhost:9999",storageKey:"supabase.auth.token",autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:la,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1},Qa={}
let ei=class e{get jwks(){var e,t
return null!==(t=null===(e=Qa[this.storageKey])||void 0===e?void 0:e.jwks)&&void 0!==t?t:{keys:[]}}set jwks(e){Qa[this.storageKey]=Object.assign(Object.assign({},Qa[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t
return null!==(t=null===(e=Qa[this.storageKey])||void 0===e?void 0:e.cachedAt)&&void 0!==t?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Qa[this.storageKey]=Object.assign(Object.assign({},Qa[this.storageKey]),{cachedAt:e})}constructor(t){var r,n,s
this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log
const a=Object.assign(Object.assign({},$a),t)
if(this.storageKey=a.storageKey,this.instanceID=null!==(r=e.nextInstanceID[this.storageKey])&&void 0!==r?r:0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!a.debug,"function"==typeof a.debug&&(this.logger=a.debug),this.instanceID>0&&Ea()&&("".concat(this._logPrefix()," Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."),this.logDebugMessages),this.persistSession=a.persistSession,this.autoRefreshToken=a.autoRefreshToken,this.admin=new Ba({url:a.url,headers:a.headers,fetch:a.fetch}),this.url=a.url,this.headers=a.headers,this.fetch=Ra(a.fetch),this.lock=a.lock||It,this.detectSessionInUrl=a.detectSessionInUrl,this.flowType=a.flowType,this.hasCustomAuthorizationHeader=a.hasCustomAuthorizationHeader,this.throwOnError=a.throwOnError,a.lock?this.lock=a.lock:Ea()&&(null===(n=null===globalThis||void 0===globalThis?void 0:globalThis.navigator)||void 0===n?void 0:n.locks)?this.lock=kt:this.lock=It,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Za(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(a.storage?this.storage=a.storage:Ca()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=wt(this.memoryStorage)),a.userStorage&&(this.userStorage=a.userStorage)):(this.memoryStorage={},this.storage=wt(this.memoryStorage)),Ea()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(jl){}null===(s=this.broadcastChannel)||void 0===s||s.addEventListener("message",async e=>{this._debug("received broadcast notification from other tab or client",e),await this._notifyAllSubscribers(e.data.event,e.data.session,!1)})}this.initialize()}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error
return e}_logPrefix(){return"GoTrueClient@"+"".concat(this.storageKey,":").concat(this.instanceID," (").concat(aa,") ").concat((new Date).toISOString())}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise||(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))()),await this.initializePromise}async _initialize(){var e
try{let t={},r="none"
if(Ea()&&(t=function(e){const t={},r=new URL(e)
if(r.hash&&"#"===r.hash[0])try{new URLSearchParams(r.hash.substring(1)).forEach((e,r)=>{t[r]=e})}catch(jl){}return r.searchParams.forEach((e,r)=>{t[r]=e}),t}(window.location.href),this._isImplicitGrantCallback(t)?r="implicit":await this._isPKCECallback(t)&&(r="pkce")),Ea()&&this.detectSessionInUrl&&"none"!==r){const{data:n,error:s}=await this._getSessionFromURL(t,r)
if(s){if(this._debug("#_initialize()","error detecting session from URL",s),Qe(s)){const t=null===(e=s.details)||void 0===e?void 0:e.code
if("identity_already_exists"===t||"identity_not_found"===t||"single_identity_not_deletable"===t)return{error:s}}return await this._removeSession(),{error:s}}const{session:a,redirectType:i}=n
return this._debug("#_initialize()","detected session in URL",a,"redirect type",i),await this._saveSession(a),setTimeout(async()=>{"recovery"===i?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return Xe(t)?this._returnResult({error:t}):this._returnResult({error:new fa("Unexpected error during initialization",t)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,r,n
try{const s=await ft(this.fetch,"POST","".concat(this.url,"/signup"),{headers:this.headers,body:{data:null!==(r=null===(t=null==e?void 0:e.options)||void 0===t?void 0:t.data)&&void 0!==r?r:{},gotrue_meta_security:{captcha_token:null===(n=null==e?void 0:e.options)||void 0===n?void 0:n.captchaToken}},xform:mt}),{data:a,error:i}=s
if(i||!a)return this._returnResult({data:{user:null,session:null},error:i})
const o=a.session,l=a.user
return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",o)),this._returnResult({data:{user:l,session:o},error:null})}catch(s){if(Xe(s))return this._returnResult({data:{user:null,session:null},error:s})
throw s}}async signUp(e){var t,r,n
try{let s
if("email"in e){const{email:r,password:n,options:a}=e
let i=null,o=null
"pkce"===this.flowType&&([i,o]=await ct(this.storage,this.storageKey)),s=await ft(this.fetch,"POST","".concat(this.url,"/signup"),{headers:this.headers,redirectTo:null==a?void 0:a.emailRedirectTo,body:{email:r,password:n,data:null!==(t=null==a?void 0:a.data)&&void 0!==t?t:{},gotrue_meta_security:{captcha_token:null==a?void 0:a.captchaToken},code_challenge:i,code_challenge_method:o},xform:mt})}else{if(!("phone"in e))throw new ya("You must provide either an email or phone number and a password")
{const{phone:t,password:a,options:i}=e
s=await ft(this.fetch,"POST","".concat(this.url,"/signup"),{headers:this.headers,body:{phone:t,password:a,data:null!==(r=null==i?void 0:i.data)&&void 0!==r?r:{},channel:null!==(n=null==i?void 0:i.channel)&&void 0!==n?n:"sms",gotrue_meta_security:{captcha_token:null==i?void 0:i.captchaToken}},xform:mt})}}const{data:a,error:i}=s
if(i||!a)return await Oa(this.storage,"".concat(this.storageKey,"-code-verifier")),this._returnResult({data:{user:null,session:null},error:i})
const o=a.session,l=a.user
return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",o)),this._returnResult({data:{user:l,session:o},error:null})}catch(s){if(await Oa(this.storage,"".concat(this.storageKey,"-code-verifier")),Xe(s))return this._returnResult({data:{user:null,session:null},error:s})
throw s}}async signInWithPassword(e){try{let t
if("email"in e){const{email:r,password:n,options:s}=e
t=await ft(this.fetch,"POST","".concat(this.url,"/token?grant_type=password"),{headers:this.headers,body:{email:r,password:n,gotrue_meta_security:{captcha_token:null==s?void 0:s.captchaToken}},xform:gt})}else{if(!("phone"in e))throw new ya("You must provide either an email or phone number and a password")
{const{phone:r,password:n,options:s}=e
t=await ft(this.fetch,"POST","".concat(this.url,"/token?grant_type=password"),{headers:this.headers,body:{phone:r,password:n,gotrue_meta_security:{captcha_token:null==s?void 0:s.captchaToken}},xform:gt})}}const{data:r,error:n}=t
if(n)return this._returnResult({data:{user:null,session:null},error:n})
if(!r||!r.session||!r.user){const e=new ba
return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:n})}catch(t){if(Xe(t))return this._returnResult({data:{user:null,session:null},error:t})
throw t}}async signInWithOAuth(e){var t,r,n,s
return await this._handleProviderSignIn(e.provider,{redirectTo:null===(t=e.options)||void 0===t?void 0:t.redirectTo,scopes:null===(r=e.options)||void 0===r?void 0:r.scopes,queryParams:null===(n=e.options)||void 0===n?void 0:n.queryParams,skipBrowserRedirect:null===(s=e.options)||void 0===s?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:t}=e
switch(t){case"ethereum":return await this.signInWithEthereum(e)
case"solana":return await this.signInWithSolana(e)
default:throw new Error('@supabase/auth-js: Unsupported chain "'.concat(t,'"'))}}async signInWithEthereum(e){var t,r,n,s,a,i,o,l,c,u,d
let h,p
if("message"in e)h=e.message,p=e.signature
else{const{chain:u,wallet:d,statement:f,options:m}=e
let g
if(Ea())if("object"==typeof d)g=d
else{const e=window
if(!("ethereum"in e)||"object"!=typeof e.ethereum||!("request"in e.ethereum)||"function"!=typeof e.ethereum.request)throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")
g=e.ethereum}else{if("object"!=typeof d||!(null==m?void 0:m.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.")
g=d}const b=new URL(null!==(t=null==m?void 0:m.url)&&void 0!==t?t:window.location.href),y=await g.request({method:"eth_requestAccounts"}).then(e=>e).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")})
if(!y||0===y.length)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.")
const v=jt(y[0])
let x=null===(r=null==m?void 0:m.signInWithEthereum)||void 0===r?void 0:r.chainId
if(!x){const e=await g.request({method:"eth_chainId"})
x=parseInt(e,16)}h=function(e){var t
const{chainId:r,domain:n,expirationTime:s,issuedAt:a=new Date,nonce:i,notBefore:o,requestId:l,resources:c,scheme:u,uri:d,version:h}=e
if(!Number.isInteger(r))throw new Error('@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: '.concat(r))
if(!n)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.')
if(i&&i.length<8)throw new Error('@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: '.concat(i))
if(!d)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.')
if("1"!==h)throw new Error("@supabase/auth-js: Invalid SIWE message field \"version\". Version must be '1'. Provided value: ".concat(h))
if(null===(t=e.statement)||void 0===t?void 0:t.includes("\n"))throw new Error("@supabase/auth-js: Invalid SIWE message field \"statement\". Statement must not include '\\n'. Provided value: ".concat(e.statement))
const p=jt(e.address),f=u?"".concat(u,"://").concat(n):n,m=e.statement?"".concat(e.statement,"\n"):"",g="".concat(f," wants you to sign in with your Ethereum account:\n").concat(p,"\n\n").concat(m)
let b="URI: ".concat(d,"\nVersion: ").concat(h,"\nChain ID: ").concat(r).concat(i?"\nNonce: ".concat(i):"","\nIssued At: ").concat(a.toISOString())
if(s&&(b+="\nExpiration Time: ".concat(s.toISOString())),o&&(b+="\nNot Before: ".concat(o.toISOString())),l&&(b+="\nRequest ID: ".concat(l)),c){let e="\nResources:"
for(const t of c){if(!t||"string"!=typeof t)throw new Error('@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: '.concat(t))
e+="\n- ".concat(t)}b+=e}return"".concat(g,"\n").concat(b)}({domain:b.host,address:v,statement:f,uri:b.href,version:"1",chainId:x,nonce:null===(n=null==m?void 0:m.signInWithEthereum)||void 0===n?void 0:n.nonce,issuedAt:null!==(a=null===(s=null==m?void 0:m.signInWithEthereum)||void 0===s?void 0:s.issuedAt)&&void 0!==a?a:new Date,expirationTime:null===(i=null==m?void 0:m.signInWithEthereum)||void 0===i?void 0:i.expirationTime,notBefore:null===(o=null==m?void 0:m.signInWithEthereum)||void 0===o?void 0:o.notBefore,requestId:null===(l=null==m?void 0:m.signInWithEthereum)||void 0===l?void 0:l.requestId,resources:null===(c=null==m?void 0:m.signInWithEthereum)||void 0===c?void 0:c.resources}),p=await g.request({method:"personal_sign",params:[St(h),v]})}try{const{data:t,error:r}=await ft(this.fetch,"POST","".concat(this.url,"/token?grant_type=web3"),{headers:this.headers,body:Object.assign({chain:"ethereum",message:h,signature:p},(null===(u=e.options)||void 0===u?void 0:u.captchaToken)?{gotrue_meta_security:{captcha_token:null===(d=e.options)||void 0===d?void 0:d.captchaToken}}:null),xform:mt})
if(r)throw r
if(!t||!t.session||!t.user){const e=new ba
return this._returnResult({data:{user:null,session:null},error:e})}return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({data:Object.assign({},t),error:r})}catch(f){if(Xe(f))return this._returnResult({data:{user:null,session:null},error:f})
throw f}}async signInWithSolana(e){var t,r,n,s,a,i,o,l,c,u,d,h
let p,f
if("message"in e)p=e.message,f=e.signature
else{const{chain:d,wallet:h,statement:m,options:g}=e
let b
if(Ea())if("object"==typeof h)b=h
else{const e=window
if(!("solana"in e)||"object"!=typeof e.solana||!("signIn"in e.solana&&"function"==typeof e.solana.signIn||"signMessage"in e.solana&&"function"==typeof e.solana.signMessage))throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
b=e.solana}else{if("object"!=typeof h||!(null==g?void 0:g.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.")
b=h}const y=new URL(null!==(t=null==g?void 0:g.url)&&void 0!==t?t:window.location.href)
if("signIn"in b&&b.signIn){const e=await b.signIn(Object.assign(Object.assign(Object.assign({issuedAt:(new Date).toISOString()},null==g?void 0:g.signInWithSolana),{version:"1",domain:y.host,uri:y.href}),m?{statement:m}:null))
let t
if(Array.isArray(e)&&e[0]&&"object"==typeof e[0])t=e[0]
else{if(!(e&&"object"==typeof e&&"signedMessage"in e&&"signature"in e))throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value")
t=e}if(!("signedMessage"in t&&"signature"in t&&("string"==typeof t.signedMessage||t.signedMessage instanceof Uint8Array)&&t.signature instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
p="string"==typeof t.signedMessage?t.signedMessage:(new TextDecoder).decode(t.signedMessage),f=t.signature}else{if(!("signMessage"in b&&"function"==typeof b.signMessage&&"publicKey"in b&&"object"==typeof b&&b.publicKey&&"toBase58"in b.publicKey&&"function"==typeof b.publicKey.toBase58))throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API")
p=["".concat(y.host," wants you to sign in with your Solana account:"),b.publicKey.toBase58(),...m?["",m,""]:[""],"Version: 1","URI: ".concat(y.href),"Issued At: ".concat(null!==(n=null===(r=null==g?void 0:g.signInWithSolana)||void 0===r?void 0:r.issuedAt)&&void 0!==n?n:(new Date).toISOString()),...(null===(s=null==g?void 0:g.signInWithSolana)||void 0===s?void 0:s.notBefore)?["Not Before: ".concat(g.signInWithSolana.notBefore)]:[],...(null===(a=null==g?void 0:g.signInWithSolana)||void 0===a?void 0:a.expirationTime)?["Expiration Time: ".concat(g.signInWithSolana.expirationTime)]:[],...(null===(i=null==g?void 0:g.signInWithSolana)||void 0===i?void 0:i.chainId)?["Chain ID: ".concat(g.signInWithSolana.chainId)]:[],...(null===(o=null==g?void 0:g.signInWithSolana)||void 0===o?void 0:o.nonce)?["Nonce: ".concat(g.signInWithSolana.nonce)]:[],...(null===(l=null==g?void 0:g.signInWithSolana)||void 0===l?void 0:l.requestId)?["Request ID: ".concat(g.signInWithSolana.requestId)]:[],...(null===(u=null===(c=null==g?void 0:g.signInWithSolana)||void 0===c?void 0:c.resources)||void 0===u?void 0:u.length)?["Resources",...g.signInWithSolana.resources.map(e=>"- ".concat(e))]:[]].join("\n")
const e=await b.signMessage((new TextEncoder).encode(p),"utf8")
if(!(e&&e instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value")
f=e}}try{const{data:t,error:r}=await ft(this.fetch,"POST","".concat(this.url,"/token?grant_type=web3"),{headers:this.headers,body:Object.assign({chain:"solana",message:p,signature:it(f)},(null===(d=e.options)||void 0===d?void 0:d.captchaToken)?{gotrue_meta_security:{captcha_token:null===(h=e.options)||void 0===h?void 0:h.captchaToken}}:null),xform:mt})
if(r)throw r
if(!t||!t.session||!t.user){const e=new ba
return this._returnResult({data:{user:null,session:null},error:e})}return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({data:Object.assign({},t),error:r})}catch(m){if(Xe(m))return this._returnResult({data:{user:null,session:null},error:m})
throw m}}async _exchangeCodeForSession(e){const t=await Aa(this.storage,"".concat(this.storageKey,"-code-verifier")),[r,n]=(null!=t?t:"").split("/")
try{const{data:t,error:s}=await ft(this.fetch,"POST","".concat(this.url,"/token?grant_type=pkce"),{headers:this.headers,body:{auth_code:e,code_verifier:r},xform:mt})
if(await Oa(this.storage,"".concat(this.storageKey,"-code-verifier")),s)throw s
if(!t||!t.session||!t.user){const e=new ba
return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({data:Object.assign(Object.assign({},t),{redirectType:null!=n?n:null}),error:s})}catch(s){if(await Oa(this.storage,"".concat(this.storageKey,"-code-verifier")),Xe(s))return this._returnResult({data:{user:null,session:null,redirectType:null},error:s})
throw s}}async signInWithIdToken(e){try{const{options:t,provider:r,token:n,access_token:s,nonce:a}=e,i=await ft(this.fetch,"POST","".concat(this.url,"/token?grant_type=id_token"),{headers:this.headers,body:{provider:r,id_token:n,access_token:s,nonce:a,gotrue_meta_security:{captcha_token:null==t?void 0:t.captchaToken}},xform:mt}),{data:o,error:l}=i
if(l)return this._returnResult({data:{user:null,session:null},error:l})
if(!o||!o.session||!o.user){const e=new ba
return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",o.session)),this._returnResult({data:o,error:l})}catch(t){if(Xe(t))return this._returnResult({data:{user:null,session:null},error:t})
throw t}}async signInWithOtp(e){var t,r,n,s,a
try{if("email"in e){const{email:n,options:s}=e
let a=null,i=null
"pkce"===this.flowType&&([a,i]=await ct(this.storage,this.storageKey))
const{error:o}=await ft(this.fetch,"POST","".concat(this.url,"/otp"),{headers:this.headers,body:{email:n,data:null!==(t=null==s?void 0:s.data)&&void 0!==t?t:{},create_user:null===(r=null==s?void 0:s.shouldCreateUser)||void 0===r||r,gotrue_meta_security:{captcha_token:null==s?void 0:s.captchaToken},code_challenge:a,code_challenge_method:i},redirectTo:null==s?void 0:s.emailRedirectTo})
return this._returnResult({data:{user:null,session:null},error:o})}if("phone"in e){const{phone:t,options:r}=e,{data:i,error:o}=await ft(this.fetch,"POST","".concat(this.url,"/otp"),{headers:this.headers,body:{phone:t,data:null!==(n=null==r?void 0:r.data)&&void 0!==n?n:{},create_user:null===(s=null==r?void 0:r.shouldCreateUser)||void 0===s||s,gotrue_meta_security:{captcha_token:null==r?void 0:r.captchaToken},channel:null!==(a=null==r?void 0:r.channel)&&void 0!==a?a:"sms"}})
return this._returnResult({data:{user:null,session:null,messageId:null==i?void 0:i.message_id},error:o})}throw new ya("You must provide either an email or phone number.")}catch(i){if(await Oa(this.storage,"".concat(this.storageKey,"-code-verifier")),Xe(i))return this._returnResult({data:{user:null,session:null},error:i})
throw i}}async verifyOtp(e){var t,r
try{let n,s
"options"in e&&(n=null===(t=e.options)||void 0===t?void 0:t.redirectTo,s=null===(r=e.options)||void 0===r?void 0:r.captchaToken)
const{data:a,error:i}=await ft(this.fetch,"POST","".concat(this.url,"/verify"),{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:s}}),redirectTo:n,xform:mt})
if(i)throw i
if(!a)throw new Error("An error occurred on token verification.")
const o=a.session,l=a.user
return(null==o?void 0:o.access_token)&&(await this._saveSession(o),await this._notifyAllSubscribers("recovery"==e.type?"PASSWORD_RECOVERY":"SIGNED_IN",o)),this._returnResult({data:{user:l,session:o},error:null})}catch(n){if(Xe(n))return this._returnResult({data:{user:null,session:null},error:n})
throw n}}async signInWithSSO(e){var t,r,n,s,a
try{let i=null,o=null
"pkce"===this.flowType&&([i,o]=await ct(this.storage,this.storageKey))
const l=await ft(this.fetch,"POST","".concat(this.url,"/sso"),{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:null!==(r=null===(t=e.options)||void 0===t?void 0:t.redirectTo)&&void 0!==r?r:void 0}),(null===(n=null==e?void 0:e.options)||void 0===n?void 0:n.captchaToken)?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:i,code_challenge_method:o}),headers:this.headers,xform:yt})
return(null===(s=l.data)||void 0===s?void 0:s.url)&&Ea()&&!(null===(a=e.options)||void 0===a?void 0:a.skipBrowserRedirect)&&window.location.assign(l.data.url),this._returnResult(l)}catch(i){if(await Oa(this.storage,"".concat(this.storageKey,"-code-verifier")),Xe(i))return this._returnResult({data:null,error:i})
throw i}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:r}=e
if(r)throw r
if(!t)throw new ga
const{error:n}=await ft(this.fetch,"GET","".concat(this.url,"/reauthenticate"),{headers:this.headers,jwt:t.access_token})
return this._returnResult({data:{user:null,session:null},error:n})})}catch(e){if(Xe(e))return this._returnResult({data:{user:null,session:null},error:e})
throw e}}async resend(e){try{const t="".concat(this.url,"/resend")
if("email"in e){const{email:r,type:n,options:s}=e,{error:a}=await ft(this.fetch,"POST",t,{headers:this.headers,body:{email:r,type:n,gotrue_meta_security:{captcha_token:null==s?void 0:s.captchaToken}},redirectTo:null==s?void 0:s.emailRedirectTo})
return this._returnResult({data:{user:null,session:null},error:a})}if("phone"in e){const{phone:r,type:n,options:s}=e,{data:a,error:i}=await ft(this.fetch,"POST",t,{headers:this.headers,body:{phone:r,type:n,gotrue_meta_security:{captcha_token:null==s?void 0:s.captchaToken}}})
return this._returnResult({data:{user:null,session:null,messageId:null==a?void 0:a.message_id},error:i})}throw new ya("You must provide either an email or phone number and a type")}catch(t){if(Xe(t))return this._returnResult({data:{user:null,session:null},error:t})
throw t}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e)
try{if(this.lockAcquired){const e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),r=(async()=>(await e,await t()))()
return this.pendingInLock.push((async()=>{try{await r}catch(jl){}})()),r}return await this.lock("lock:".concat(this.storageKey),e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey)
try{this.lockAcquired=!0
const e=t()
for(this.pendingInLock.push((async()=>{try{await e}catch(jl){}})()),await e;this.pendingInLock.length;){const e=[...this.pendingInLock]
await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin")
try{const t=await this.__loadSession()
return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",(new Error).stack)
try{let e=null
const t=await Aa(this.storage,this.storageKey)
if(this._debug("#getSession()","session from storage",t),null!==t&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null}
const r=!!e.expires_at&&1e3*e.expires_at-Date.now()<oa
if(this._debug("#__loadSession()","session has".concat(r?"":" not"," expired"),"expires_at",e.expires_at),!r){if(this.userStorage){const t=await Aa(this.userStorage,this.storageKey+"-user");(null==t?void 0:t.user)?e.user=t.user:e.user=dt()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const t={value:this.suppressGetSessionWarning}
e.user=function(e,t){return new Proxy(e,{get:(e,r,n)=>{if("__isInsecureUserWarningProxy"===r)return!0
if("symbol"==typeof r){const t=r.toString()
if("Symbol(Symbol.toPrimitive)"===t||"Symbol(Symbol.toStringTag)"===t||"Symbol(util.inspect.custom)"===t||"Symbol(nodejs.util.inspect.custom)"===t)return Reflect.get(e,r,n)}return t.value||"string"!=typeof r||(t.value=!0),Reflect.get(e,r,n)}})}(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:n,error:s}=await this._callRefreshToken(e.refresh_token)
return s?this._returnResult({data:{session:null},error:s}):this._returnResult({data:{session:n},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e)
await this.initializePromise
const t=await this._acquireLock(-1,async()=>await this._getUser())
return t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await ft(this.fetch,"GET","".concat(this.url,"/user"),{headers:this.headers,jwt:e,xform:bt}):await this._useSession(async e=>{var t,r,n
const{data:s,error:a}=e
if(a)throw a
return(null===(t=s.session)||void 0===t?void 0:t.access_token)||this.hasCustomAuthorizationHeader?await ft(this.fetch,"GET","".concat(this.url,"/user"),{headers:this.headers,jwt:null!==(n=null===(r=s.session)||void 0===r?void 0:r.access_token)&&void 0!==n?n:void 0,xform:bt}):{data:{user:null},error:new ga}})}catch(t){if(Xe(t))return $e(t)&&(await this._removeSession(),await Oa(this.storage,"".concat(this.storageKey,"-code-verifier"))),this._returnResult({data:{user:null},error:t})
throw t}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async r=>{const{data:n,error:s}=r
if(s)throw s
if(!n.session)throw new ga
const a=n.session
let i=null,o=null
"pkce"===this.flowType&&null!=e.email&&([i,o]=await ct(this.storage,this.storageKey))
const{data:l,error:c}=await ft(this.fetch,"PUT","".concat(this.url,"/user"),{headers:this.headers,redirectTo:null==t?void 0:t.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:i,code_challenge_method:o}),jwt:a.access_token,xform:bt})
if(c)throw c
return a.user=l.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),this._returnResult({data:{user:a.user},error:null})})}catch(r){if(await Oa(this.storage,"".concat(this.storageKey,"-code-verifier")),Xe(r))return this._returnResult({data:{user:null},error:r})
throw r}}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new ga
const t=Date.now()/1e3
let r=t,n=!0,s=null
const{payload:a}=ot(e.access_token)
if(a.exp&&(r=a.exp,n=r<=t),n){const{data:t,error:r}=await this._callRefreshToken(e.refresh_token)
if(r)return this._returnResult({data:{user:null,session:null},error:r})
if(!t)return{data:{user:null,session:null},error:null}
s=t}else{const{data:n,error:a}=await this._getUser(e.access_token)
if(a)throw a
s={access_token:e.access_token,refresh_token:e.refresh_token,user:n.user,token_type:"bearer",expires_in:r-t,expires_at:r},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return this._returnResult({data:{user:s.user,session:s},error:null})}catch(t){if(Xe(t))return this._returnResult({data:{session:null,user:null},error:t})
throw t}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{var r
if(!e){const{data:n,error:s}=t
if(s)throw s
e=null!==(r=n.session)&&void 0!==r?r:void 0}if(!(null==e?void 0:e.refresh_token))throw new ga
const{data:n,error:s}=await this._callRefreshToken(e.refresh_token)
return s?this._returnResult({data:{user:null,session:null},error:s}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(t){if(Xe(t))return this._returnResult({data:{user:null,session:null},error:t})
throw t}}async _getSessionFromURL(e,t){try{if(!Ea())throw new va("No browser detected.")
if(e.error||e.error_description||e.error_code)throw new va(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"})
switch(t){case"implicit":if("pkce"===this.flowType)throw new xa("Not a valid PKCE flow url.")
break
case"pkce":if("implicit"===this.flowType)throw new va("Not a valid implicit grant flow url.")}if("pkce"===t){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new xa("No code detected.")
const{data:t,error:r}=await this._exchangeCodeForSession(e.code)
if(r)throw r
const n=new URL(window.location.href)
return n.searchParams.delete("code"),window.history.replaceState(window.history.state,"",n.toString()),{data:{session:t.session,redirectType:null},error:null}}const{provider_token:r,provider_refresh_token:n,access_token:s,refresh_token:a,expires_in:i,expires_at:o,token_type:l}=e
if(!(s&&i&&a&&l))throw new va("No session defined in URL")
const c=Math.round(Date.now()/1e3),u=parseInt(i)
let d=c+u
o&&(d=parseInt(o))
const{data:h,error:p}=await this._getUser(s)
if(p)throw p
const f={provider_token:r,provider_refresh_token:n,access_token:s,expires_in:u,expires_at:d,refresh_token:a,token_type:l,user:h.user}
return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:f,redirectType:e.type},error:null})}catch(r){if(Xe(r))return this._returnResult({data:{session:null,redirectType:null},error:r})
throw r}}_isImplicitGrantCallback(e){return Boolean(e.access_token||e.error_description)}async _isPKCECallback(e){const t=await Aa(this.storage,"".concat(this.storageKey,"-code-verifier"))
return!(!e.code||!t)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var r
const{data:n,error:s}=t
if(s)return this._returnResult({error:s})
const a=null===(r=n.session)||void 0===r?void 0:r.access_token
if(a){const{error:t}=await this.admin.signOut(a,e)
if(t&&(!Ze(t)||404!==t.status&&401!==t.status&&403!==t.status))return this._returnResult({error:t})}return"others"!==e&&(await this._removeSession(),await Oa(this.storage,"".concat(this.storageKey,"-code-verifier"))),this._returnResult({error:null})})}onAuthStateChange(e){const t=Symbol("auth-callback"),r={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}}
return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,r),(async()=>{await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async t=>{var r,n
try{const{data:{session:n},error:s}=t
if(s)throw s
await(null===(r=this.stateChangeEmitters.get(e))||void 0===r?void 0:r.callback("INITIAL_SESSION",n)),this._debug("INITIAL_SESSION","callback id",e,"session",n)}catch(s){await(null===(n=this.stateChangeEmitters.get(e))||void 0===n?void 0:n.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",s)}})}async resetPasswordForEmail(e,t={}){let r=null,n=null
"pkce"===this.flowType&&([r,n]=await ct(this.storage,this.storageKey,!0))
try{return await ft(this.fetch,"POST","".concat(this.url,"/recover"),{body:{email:e,code_challenge:r,code_challenge_method:n,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(s){if(await Oa(this.storage,"".concat(this.storageKey,"-code-verifier")),Xe(s))return this._returnResult({data:null,error:s})
throw s}}async getUserIdentities(){var e
try{const{data:t,error:r}=await this.getUser()
if(r)throw r
return this._returnResult({data:{identities:null!==(e=t.user.identities)&&void 0!==e?e:[]},error:null})}catch(t){if(Xe(t))return this._returnResult({data:null,error:t})
throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t
try{const{data:r,error:n}=await this._useSession(async t=>{var r,n,s,a,i
const{data:o,error:l}=t
if(l)throw l
const c=await this._getUrlForProvider("".concat(this.url,"/user/identities/authorize"),e.provider,{redirectTo:null===(r=e.options)||void 0===r?void 0:r.redirectTo,scopes:null===(n=e.options)||void 0===n?void 0:n.scopes,queryParams:null===(s=e.options)||void 0===s?void 0:s.queryParams,skipBrowserRedirect:!0})
return await ft(this.fetch,"GET",c,{headers:this.headers,jwt:null!==(i=null===(a=o.session)||void 0===a?void 0:a.access_token)&&void 0!==i?i:void 0})})
if(n)throw n
return Ea()&&!(null===(t=e.options)||void 0===t?void 0:t.skipBrowserRedirect)&&window.location.assign(null==r?void 0:r.url),this._returnResult({data:{provider:e.provider,url:null==r?void 0:r.url},error:null})}catch(r){if(Xe(r))return this._returnResult({data:{provider:e.provider,url:null},error:r})
throw r}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var r
try{const{error:n,data:{session:s}}=t
if(n)throw n
const{options:a,provider:i,token:o,access_token:l,nonce:c}=e,u=await ft(this.fetch,"POST","".concat(this.url,"/token?grant_type=id_token"),{headers:this.headers,jwt:null!==(r=null==s?void 0:s.access_token)&&void 0!==r?r:void 0,body:{provider:i,id_token:o,access_token:l,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:null==a?void 0:a.captchaToken}},xform:mt}),{data:d,error:h}=u
return h?this._returnResult({data:{user:null,session:null},error:h}):d&&d.session&&d.user?(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("USER_UPDATED",d.session)),this._returnResult({data:d,error:h})):this._returnResult({data:{user:null,session:null},error:new ba})}catch(n){if(await Oa(this.storage,"".concat(this.storageKey,"-code-verifier")),Xe(n))return this._returnResult({data:{user:null,session:null},error:n})
throw n}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var r,n
const{data:s,error:a}=t
if(a)throw a
return await ft(this.fetch,"DELETE","".concat(this.url,"/user/identities/").concat(e.identity_id),{headers:this.headers,jwt:null!==(n=null===(r=s.session)||void 0===r?void 0:r.access_token)&&void 0!==n?n:void 0})})}catch(t){if(Xe(t))return this._returnResult({data:null,error:t})
throw t}}async _refreshAccessToken(e){const t="#_refreshAccessToken(".concat(e.substring(0,5),"...)")
this._debug(t,"begin")
try{const s=Date.now()
return await(r=async r=>(r>0&&await async function(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}(200*Math.pow(2,r-1)),this._debug(t,"refreshing attempt",r),await ft(this.fetch,"POST","".concat(this.url,"/token?grant_type=refresh_token"),{body:{refresh_token:e},headers:this.headers,xform:mt})),n=(e,t)=>{const r=200*Math.pow(2,e)
return t&&et(t)&&Date.now()+r-s<ia},new Promise((e,t)=>{(async()=>{for(let s=0;s<1/0;s++)try{const t=await r(s)
if(!n(s,null))return void e(t)}catch(jl){if(!n(s,jl))return void t(jl)}})()}))}catch(s){if(this._debug(t,"error",s),Xe(s))return this._returnResult({data:{session:null,user:null},error:s})
throw s}finally{this._debug(t,"end")}var r,n}_isValidSession(e){return"object"==typeof e&&null!==e&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const r=await this._getUrlForProvider("".concat(this.url,"/authorize"),e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams})
return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",r),Ea()&&!t.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r},error:null}}async _recoverAndRefresh(){var e,t
const r="#_recoverAndRefresh()"
this._debug(r,"begin")
try{const s=await Aa(this.storage,this.storageKey)
if(s&&this.userStorage){let t=await Aa(this.userStorage,this.storageKey+"-user")
this.storage.isServer||!Object.is(this.storage,this.userStorage)||t||(t={user:s.user},await Pa(this.userStorage,this.storageKey+"-user",t)),s.user=null!==(e=null==t?void 0:t.user)&&void 0!==e?e:dt()}else if(s&&!s.user&&!s.user){const e=await Aa(this.storage,this.storageKey+"-user")
e&&(null==e?void 0:e.user)?(s.user=e.user,await Oa(this.storage,this.storageKey+"-user"),await Pa(this.storage,this.storageKey,s)):s.user=dt()}if(this._debug(r,"session from storage",s),!this._isValidSession(s))return this._debug(r,"session is not valid"),void(null!==s&&await this._removeSession())
const a=1e3*(null!==(t=s.expires_at)&&void 0!==t?t:1/0)-Date.now()<oa
if(this._debug(r,"session has".concat(a?"":" not"," expired with margin of ").concat(oa,"s")),a){if(this.autoRefreshToken&&s.refresh_token){const{error:e}=await this._callRefreshToken(s.refresh_token)
e&&(et(e)||(this._debug(r,"refresh failed with a non-retryable error, removing the session",e),await this._removeSession()))}}else if(s.user&&!0===s.user.__isUserNotAvailableProxy)try{const{data:e,error:t}=await this._getUser(s.access_token)
!t&&(null==e?void 0:e.user)?(s.user=e.user,await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(n){this._debug(r,"error getting user data, skipping SIGNED_IN notification",n)}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){return void this._debug(r,"error",s)}finally{this._debug(r,"end")}}async _callRefreshToken(e){var t,r
if(!e)throw new ga
if(this.refreshingDeferred)return this.refreshingDeferred.promise
const n="#_callRefreshToken(".concat(e.substring(0,5),"...)")
this._debug(n,"begin")
try{this.refreshingDeferred=new Ia
const{data:t,error:r}=await this._refreshAccessToken(e)
if(r)throw r
if(!t.session)throw new ga
await this._saveSession(t.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",t.session)
const n={data:t.session,error:null}
return this.refreshingDeferred.resolve(n),n}catch(s){if(this._debug(n,"error",s),Xe(s)){const e={data:null,error:s}
return et(s)||await this._removeSession(),null===(t=this.refreshingDeferred)||void 0===t||t.resolve(e),e}throw null===(r=this.refreshingDeferred)||void 0===r||r.reject(s),s}finally{this.refreshingDeferred=null,this._debug(n,"end")}}async _notifyAllSubscribers(e,t,r=!0){const n="#_notifyAllSubscribers(".concat(e,")")
this._debug(n,"begin",t,"broadcast = ".concat(r))
try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:t})
const n=[],s=Array.from(this.stateChangeEmitters.values()).map(async r=>{try{await r.callback(e,t)}catch(jl){n.push(jl)}})
if(await Promise.all(s),n.length>0){for(let e=0;e<n.length;e+=1);throw n[0]}}finally{this._debug(n,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await Oa(this.storage,"".concat(this.storageKey,"-code-verifier"))
const t=Object.assign({},e),r=t.user&&!0===t.user.__isUserNotAvailableProxy
if(this.userStorage){!r&&t.user&&await Pa(this.userStorage,this.storageKey+"-user",{user:t.user})
const e=Object.assign({},t)
delete e.user
const n=ht(e)
await Pa(this.storage,this.storageKey,n)}else{const e=ht(t)
await Pa(this.storage,this.storageKey,e)}}async _removeSession(){this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await Oa(this.storage,this.storageKey),await Oa(this.storage,this.storageKey+"-code-verifier"),await Oa(this.storage,this.storageKey+"-user"),this.userStorage&&await Oa(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()")
const e=this.visibilityChangedCallback
this.visibilityChangedCallback=null
try{e&&Ea()&&(null===window||void 0===window?void 0:window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(jl){}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()")
const e=setInterval(()=>this._autoRefreshTokenTick(),ia)
this.autoRefreshTicker=e,e&&"object"==typeof e&&"function"==typeof e.unref?e.unref():"undefined"!=typeof Deno&&"function"==typeof Deno.unrefTimer&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()")
const e=this.autoRefreshTicker
this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin")
try{await this._acquireLock(0,async()=>{try{const e=Date.now()
try{return await this._useSession(async t=>{const{data:{session:r}}=t
if(!r||!r.refresh_token||!r.expires_at)return void this._debug("#_autoRefreshTokenTick()","no session")
const n=Math.floor((1e3*r.expires_at-e)/ia)
this._debug("#_autoRefreshTokenTick()","access token expires in ".concat(n," ticks, a tick lasts ").concat(ia,"ms, refresh threshold is ").concat(3," ticks")),n<=3&&await this._callRefreshToken(r.refresh_token)})}catch(jl){}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(jl){if(!(jl.isAcquireTimeout||jl instanceof Va))throw jl
this._debug("auto refresh token tick lock not available")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Ea()||!(null===window||void 0===window?void 0:window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1
try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),null===window||void 0===window||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){}}async _onVisibilityChanged(e){const t="#_onVisibilityChanged(".concat(e,")")
this._debug(t,"visibilityState",document.visibilityState),"visible"===document.visibilityState?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{"visible"===document.visibilityState?await this._recoverAndRefresh():this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting")}))):"hidden"===document.visibilityState&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,r){const n=["provider=".concat(encodeURIComponent(t))]
if((null==r?void 0:r.redirectTo)&&n.push("redirect_to=".concat(encodeURIComponent(r.redirectTo))),(null==r?void 0:r.scopes)&&n.push("scopes=".concat(encodeURIComponent(r.scopes))),"pkce"===this.flowType){const[e,t]=await ct(this.storage,this.storageKey),r=new URLSearchParams({code_challenge:"".concat(encodeURIComponent(e)),code_challenge_method:"".concat(encodeURIComponent(t))})
n.push(r.toString())}if(null==r?void 0:r.queryParams){const e=new URLSearchParams(r.queryParams)
n.push(e.toString())}return(null==r?void 0:r.skipBrowserRedirect)&&n.push("skip_http_redirect=".concat(r.skipBrowserRedirect)),"".concat(e,"?").concat(n.join("&"))}async _unenroll(e){try{return await this._useSession(async t=>{var r
const{data:n,error:s}=t
return s?this._returnResult({data:null,error:s}):await ft(this.fetch,"DELETE","".concat(this.url,"/factors/").concat(e.factorId),{headers:this.headers,jwt:null===(r=null==n?void 0:n.session)||void 0===r?void 0:r.access_token})})}catch(t){if(Xe(t))return this._returnResult({data:null,error:t})
throw t}}async _enroll(e){try{return await this._useSession(async t=>{var r,n
const{data:s,error:a}=t
if(a)return this._returnResult({data:null,error:a})
const i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},"phone"===e.factorType?{phone:e.phone}:"totp"===e.factorType?{issuer:e.issuer}:{}),{data:o,error:l}=await ft(this.fetch,"POST","".concat(this.url,"/factors"),{body:i,headers:this.headers,jwt:null===(r=null==s?void 0:s.session)||void 0===r?void 0:r.access_token})
return l?this._returnResult({data:null,error:l}):("totp"===e.factorType&&"totp"===o.type&&(null===(n=null==o?void 0:o.totp)||void 0===n?void 0:n.qr_code)&&(o.totp.qr_code="data:image/svg+xml;utf-8,".concat(o.totp.qr_code)),this._returnResult({data:o,error:null}))})}catch(t){if(Xe(t))return this._returnResult({data:null,error:t})
throw t}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var r
const{data:n,error:s}=t
if(s)return this._returnResult({data:null,error:s})
const a=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:"create"===e.webauthn.type?Ct(e.webauthn.credential_response):Rt(e.webauthn.credential_response)})}:{code:e.code}),{data:i,error:o}=await ft(this.fetch,"POST","".concat(this.url,"/factors/").concat(e.factorId,"/verify"),{body:a,headers:this.headers,jwt:null===(r=null==n?void 0:n.session)||void 0===r?void 0:r.access_token})
return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+i.expires_in},i)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",i),this._returnResult({data:i,error:o}))})}catch(t){if(Xe(t))return this._returnResult({data:null,error:t})
throw t}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var r
const{data:n,error:s}=t
if(s)return this._returnResult({data:null,error:s})
const a=await ft(this.fetch,"POST","".concat(this.url,"/factors/").concat(e.factorId,"/challenge"),{body:e,headers:this.headers,jwt:null===(r=null==n?void 0:n.session)||void 0===r?void 0:r.access_token})
if(a.error)return a
const{data:i}=a
if("webauthn"!==i.type)return{data:i,error:null}
switch(i.webauthn.type){case"create":return{data:Object.assign(Object.assign({},i),{webauthn:Object.assign(Object.assign({},i.webauthn),{credential_options:Object.assign(Object.assign({},i.webauthn.credential_options),{publicKey:Et(i.webauthn.credential_options.publicKey)})})}),error:null}
case"request":return{data:Object.assign(Object.assign({},i),{webauthn:Object.assign(Object.assign({},i.webauthn),{credential_options:Object.assign(Object.assign({},i.webauthn.credential_options),{publicKey:Tt(i.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(t){if(Xe(t))return this._returnResult({data:null,error:t})
throw t}})}async _challengeAndVerify(e){const{data:t,error:r}=await this._challenge({factorId:e.factorId})
return r?this._returnResult({data:null,error:r}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e
const{data:{user:t},error:r}=await this.getUser()
if(r)return{data:null,error:r}
const n={all:[],phone:[],totp:[],webauthn:[]}
for(const s of null!==(e=null==t?void 0:t.factors)&&void 0!==e?e:[])n.all.push(s),"verified"===s.status&&n[s.factor_type].push(s)
return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(){var e,t
const{data:{session:r},error:n}=await this.getSession()
if(n)return this._returnResult({data:null,error:n})
if(!r)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null}
const{payload:s}=ot(r.access_token)
let a=null
s.aal&&(a=s.aal)
let i=a
return(null!==(t=null===(e=r.user.factors)||void 0===e?void 0:e.filter(e=>"verified"===e.status))&&void 0!==t?t:[]).length>0&&(i="aal2"),{data:{currentLevel:a,nextLevel:i,currentAuthenticationMethods:s.amr||[]},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t
return n?this._returnResult({data:null,error:n}):r?await ft(this.fetch,"GET","".concat(this.url,"/oauth/authorizations/").concat(e),{headers:this.headers,jwt:r.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new ga})})}catch(t){if(Xe(t))return this._returnResult({data:null,error:t})
throw t}}async _approveAuthorization(e,t){try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r
if(s)return this._returnResult({data:null,error:s})
if(!n)return this._returnResult({data:null,error:new ga})
const a=await ft(this.fetch,"POST","".concat(this.url,"/oauth/authorizations/").concat(e,"/consent"),{headers:this.headers,jwt:n.access_token,body:{action:"approve"},xform:e=>({data:e,error:null})})
return a.data&&a.data.redirect_url&&Ea()&&!(null==t?void 0:t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(r){if(Xe(r))return this._returnResult({data:null,error:r})
throw r}}async _denyAuthorization(e,t){try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r
if(s)return this._returnResult({data:null,error:s})
if(!n)return this._returnResult({data:null,error:new ga})
const a=await ft(this.fetch,"POST","".concat(this.url,"/oauth/authorizations/").concat(e,"/consent"),{headers:this.headers,jwt:n.access_token,body:{action:"deny"},xform:e=>({data:e,error:null})})
return a.data&&a.data.redirect_url&&Ea()&&!(null==t?void 0:t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(r){if(Xe(r))return this._returnResult({data:null,error:r})
throw r}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:t},error:r}=e
return r?this._returnResult({data:null,error:r}):t?await ft(this.fetch,"GET","".concat(this.url,"/user/oauth/grants"),{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new ga})})}catch(e){if(Xe(e))return this._returnResult({data:null,error:e})
throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t
return n?this._returnResult({data:null,error:n}):r?(await ft(this.fetch,"DELETE","".concat(this.url,"/user/oauth/grants"),{headers:this.headers,jwt:r.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new ga})})}catch(t){if(Xe(t))return this._returnResult({data:null,error:t})
throw t}}async fetchJwk(e,t={keys:[]}){let r=t.keys.find(t=>t.kid===e)
if(r)return r
const n=Date.now()
if(r=this.jwks.keys.find(t=>t.kid===e),r&&this.jwks_cached_at+6e5>n)return r
const{data:s,error:a}=await ft(this.fetch,"GET","".concat(this.url,"/.well-known/jwks.json"),{headers:this.headers})
if(a)throw a
return s.keys&&0!==s.keys.length?(this.jwks=s,this.jwks_cached_at=n,r=s.keys.find(t=>t.kid===e),r||null):null}async getClaims(e,t={}){try{let r=e
if(!r){const{data:e,error:t}=await this.getSession()
if(t||!e.session)return this._returnResult({data:null,error:t})
r=e.session.access_token}const{header:n,payload:s,signature:a,raw:{header:i,payload:o}}=ot(r);(null==t?void 0:t.allowExpired)||function(e){if(!e)throw new Error("Missing exp claim")
if(e<=Math.floor(Date.now()/1e3))throw new Error("JWT has expired")}(s.exp)
const l=n.alg&&!n.alg.startsWith("HS")&&n.kid&&"crypto"in globalThis&&"subtle"in globalThis.crypto?await this.fetchJwk(n.kid,(null==t?void 0:t.keys)?{keys:t.keys}:null==t?void 0:t.jwks):null
if(!l){const{error:e}=await this.getUser(r)
if(e)throw e
return{data:{claims:s,header:n,signature:a},error:null}}const c=function(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}}
case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}}
default:throw new Error("Invalid alg claim")}}(n.alg),u=await crypto.subtle.importKey("jwk",l,c,!0,["verify"])
if(!(await crypto.subtle.verify(c,u,a,function(e){const t=[]
return function(e,t){for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r)
if(n>55295&&n<=56319){const t=1024*(n-55296)&65535
n=65536+(e.charCodeAt(r+1)-56320&65535|t),r+=1}st(n,t)}}(e,e=>t.push(e)),new Uint8Array(t)}("".concat(i,".").concat(o)))))throw new ja("Invalid JWT signature")
return{data:{claims:s,header:n,signature:a},error:null}}catch(r){if(Xe(r))return this._returnResult({data:null,error:r})
throw r}}}
ei.nextInstanceID={}
const ti=Ba,ri=ei,ni=n(Object.freeze({__proto__:null,AuthAdminApi:ti,AuthApiError:pa,AuthClient:ri,AuthError:ha,AuthImplicitGrantRedirectError:va,AuthInvalidCredentialsError:ya,AuthInvalidJwtError:ja,AuthInvalidTokenResponseError:ba,AuthPKCEGrantCodeExchangeError:xa,AuthRetryableFetchError:wa,AuthSessionMissingError:ga,AuthUnknownError:fa,AuthWeakPasswordError:ka,CustomAuthError:ma,GoTrueAdminApi:Ba,GoTrueClient:ei,NavigatorLockAcquireTimeoutError:qa,SIGN_OUT_SCOPES:Fa,isAuthApiError:Ze,isAuthError:Xe,isAuthImplicitGrantRedirectError:Qe,isAuthRetryableFetchError:et,isAuthSessionMissingError:$e,isAuthWeakPasswordError:function(e){return Xe(e)&&"AuthWeakPasswordError"===e.name},lockInternals:Wa,navigatorLock:kt,processLock:async function(e,t,r){var n
const s=null!==(n=Ha[e])&&void 0!==n?n:Promise.resolve(),a=Promise.race([s.catch(()=>null),t>=0?new Promise((r,n)=>{setTimeout(()=>{n(new Ma('Acquring process lock with name "'.concat(e,'" timed out')))},t)}):null].filter(e=>e)).catch(e=>{if(e&&e.isAcquireTimeout)throw e
return null}).then(async()=>await r())
return Ha[e]=a.catch(async e=>{if(e&&e.isAcquireTimeout)return await s,null
throw e}),await a}}))
var si,ai,ii,oi=Dt()
const li=r(oi),ci=t({__proto__:null,default:li},[oi]),{PostgrestError:ui,FunctionsHttpError:di,FunctionsFetchError:hi,FunctionsRelayError:pi,FunctionsError:fi,FunctionRegion:mi,SupabaseClient:gi,createClient:bi,GoTrueAdminApi:yi,GoTrueClient:vi,AuthAdminApi:xi,AuthClient:wi,navigatorLock:ki,NavigatorLockAcquireTimeoutError:ji,lockInternals:Si,processLock:_i,SIGN_OUT_SCOPES:Ni,AuthError:Ei,AuthApiError:Ti,AuthUnknownError:Ci,CustomAuthError:Ri,AuthSessionMissingError:Pi,AuthInvalidTokenResponseError:Ai,AuthInvalidCredentialsError:Oi,AuthImplicitGrantRedirectError:Ii,AuthPKCEGrantCodeExchangeError:zi,AuthRetryableFetchError:Li,AuthWeakPasswordError:Di,AuthInvalidJwtError:Ui,isAuthError:Fi,isAuthApiError:Bi,isAuthSessionMissingError:Wi,isAuthImplicitGrantRedirectError:Vi,isAuthRetryableFetchError:qi,isAuthWeakPasswordError:Mi,RealtimePresence:Hi,RealtimeChannel:Ki,RealtimeClient:Gi,REALTIME_LISTEN_TYPES:Yi,REALTIME_POSTGRES_CHANGES_LISTEN_EVENT:Ji,REALTIME_PRESENCE_LISTEN_EVENTS:Xi,REALTIME_SUBSCRIBE_STATES:Zi,REALTIME_CHANNEL_STATES:$i}=li||ci,Qi=bi("https://supabase-proxy.tiny-wave-2fa1.workers.dev","sk_live_prod_2024_Dbs_public_access_token_v1",{auth:{persistSession:!0,autoRefreshToken:!0,storage:{getItem:e=>{try{return window.localStorage.getItem(e)}catch(jl){return null}},setItem:(e,t)=>{try{window.localStorage.setItem(e,t)}catch(jl){}},removeItem:e=>{try{window.localStorage.removeItem(e)}catch(jl){}}},storageKey:"sn-session",detectSessionInUrl:!0,flowType:"pkce"},global:{headers:{"X-Client-Info":"Dbs-web"}},realtime:{params:{eventsPerSecond:10},log_level:"error"}})
if("undefined"!=typeof window){const e=console.error,t=console.warn,r=console.log,n=e=>e.includes("WebSocket connection")||e.includes("realtime")||e.includes("wss://")||e.includes("breachhub.org")||e.includes("breachhub"),s=e=>e.replace(/supabase-proxy\.tiny-wave-2fa1\.workers\.dev/gi,"api.see-know.eu").replace(/supabase/gi,"backend").replace(/mwkamemnxhwmxpkmjief/gi,"[hidden]").replace(/ipify\.org/gi,"[hidden]")
console.error=(...t)=>{var r
const a=(null==(r=t[0])?void 0:r.toString())||""
if(n(a))return
const i=t.map(e=>"string"==typeof e?s(e):e)
e.apply(console,i)},console.warn=(...e)=>{var r
const a=(null==(r=e[0])?void 0:r.toString())||""
if(n(a))return
const i=e.map(e=>"string"==typeof e?s(e):e)
t.apply(console,i)},console.log=(...e)=>{var t
const a=(null==(t=e[0])?void 0:t.toString())||""
if(n(a))return
const i=e.map(e=>"string"==typeof e?s(e):e)
r.apply(console,i)}}const eo=nr.createContext(void 0),to=()=>{const e=nr.useContext(eo)
if(!e)throw new Error("useAuth must be used within an AuthProvider")
return e},ro=({children:e})=>{const[t,r]=nr.useState(null),[n,s]=nr.useState(null),[a,i]=nr.useState(!0),[o,l]=nr.useState(!1),c=nr.useRef(null),u=nr.useRef(null),d=nr.useRef(0),h=nr.useRef(null),p=nr.useRef(!1)
return nr.useEffect(()=>{let e=!0;(async()=>{var t,n
try{const{data:a,error:i}=await Qi.auth.getSession()
if(i){const{data:t,error:n}=await Qi.auth.refreshSession()
if(!n&&t.session){const n=t.session.user
if(!e)return
if(r(n),n){const t=await Ut(n)
if(!e)return
s(t)}}else{if(await Qi.auth.signOut(),!e)return
r(null),s(null)}}else{const i=null!=(n=null==(t=a.session)?void 0:t.user)?n:null
if(!e)return
if(r(i),i){const t=await Ut(i)
if(!e)return
s(t)}else s(null)}}catch(a){try{await Qi.auth.signOut()}catch(jl){try{localStorage.removeItem("sn-session"),Object.keys(localStorage).forEach(e=>{(e.startsWith("sb-")||e.startsWith("supabase"))&&localStorage.removeItem(e)})}catch(o){}}if(!e)return
r(null),s(null)}finally{e&&i(!1)}})()
const{data:n}=Qi.auth.onAuthStateChange(async(t,n)=>{var a
if(e){if("SIGNED_OUT"===t)return r(null),void s(null)
if("SIGNED_IN"===t||"TOKEN_REFRESHED"===t||"USER_UPDATED"===t){const i=null!=(a=null==n?void 0:n.user)?a:null
if(r(i),i){const r=await Ut(i)
if(!e)return
s(r),"SIGNED_IN"===t&&(l(!0),window.setTimeout(()=>l(!1),2500))}else s(null)}}}),a=async()=>{if(e&&!p.current){p.current=!0
try{const{data:n,error:a}=await Qi.auth.getSession()
if(a||!n.session){try{const{data:{session:t},error:n}=await Qi.auth.refreshSession()
if(!n&&t&&e){const n=t.user
r(n)
const a=await Ut(n)
return void(e&&s(a))}}catch(jl){return}return void(e&&!t&&(r(null),s(null)))}const i=Math.floor(Date.now()/1e3)
if((n.session.expires_at||0)-i<300)try{const{data:{session:t},error:n}=await Qi.auth.refreshSession()
if(!n&&t){const n=t.user
if(e&&n){r(n)
const t=await Ut(n)
e&&s(t)}}}catch(jl){}else{const a=n.session.user
if(e&&a&&(!t||t.id!==a.id)){r(a)
const t=await Ut(a)
e&&s(t)}}}catch(n){}finally{p.current=!1}}},o=async()=>{if("visible"===document.visibilityState){h.current&&window.clearTimeout(h.current)
const e=Date.now()
e-d.current<1e3?h.current=window.setTimeout(()=>{d.current=Date.now(),a()},1e3):(d.current=e,await a())}},c=async()=>{h.current&&window.clearTimeout(h.current)
const e=Date.now()
e-d.current<1e3?h.current=window.setTimeout(()=>{d.current=Date.now(),a()},1e3):(d.current=e,await a())}
document.addEventListener("visibilitychange",o),window.addEventListener("focus",c)
const u=window.setInterval(async()=>{if(e)try{const{data:e}=await Qi.auth.getSession()
if(e.session){const t=Math.floor(Date.now()/1e3),r=(e.session.expires_at||0)-t
r<300&&r>0&&await Qi.auth.refreshSession()}}catch(jl){}},12e4)
return()=>{e=!1,n.subscription.unsubscribe(),document.removeEventListener("visibilitychange",o),window.removeEventListener("focus",c),window.clearInterval(u),h.current&&window.clearTimeout(h.current)}},[]),nr.useEffect(()=>{if(u.current&&(window.clearInterval(u.current),u.current=null),!t)return void(async()=>{const e=c.current
e&&(c.current=null,await Qi.from("user_sessions").delete().eq("session_id",e))})()
let e=!0
return(async()=>{try{const r="".concat(t.id,"_").concat(Date.now()),{error:n}=await Qi.from("user_sessions").insert({session_id:r,last_seen:(new Date).toISOString()})
if(!e)return
if(n)return
c.current=r,u.current=window.setInterval(()=>{const e=c.current
e&&Qi.from("user_sessions").update({last_seen:(new Date).toISOString()}).eq("session_id",e)},3e4)}catch(r){}})(),()=>{e=!1,u.current&&(window.clearInterval(u.current),u.current=null)}},[null==t?void 0:t.id]),er.jsx(eo.Provider,{value:{user:t,profile:n,loading:a,showLoginPopup:o,setShowLoginPopup:l,logout:async()=>{try{u.current&&(window.clearInterval(u.current),u.current=null)
const e=c.current
c.current=null,e&&await Qi.from("user_sessions").delete().eq("session_id",e),await Qi.auth.signOut()}catch(e){}finally{r(null),s(null)}}},children:e})},no=nr.createContext(void 0),so=()=>{const e=nr.useContext(no)
if(!e)throw new Error("useLanguage must be used within a LanguageProvider")
return e},ao={fr:{"nav.home":"Accueil","nav.features":"Fonctionnalit\xe9s","nav.pricing":"Tarifs","nav.about":"A propos","nav.contact":"Contact","nav.tickets":"Tickets","nav.apidocs":"API Docs","nav.login":"Connexion","nav.register":"Inscription","nav.logout":"D\xe9connexion","nav.profile":"Profil","nav.settings":"Param\xe8tres","nav.api":"API","nav.inbox":"Boite de reception","nav.apiAccess":"Acces API","home.hero.title":"Moteur de Recherche OSINT Avanc\xe9","home.hero.subtitle":"Trouvez des informations publiques sur le web en quelques secondes","home.hero.description":"D\xe9tectez les violations de donn\xe9es, les fuites et les menaces rapidement et en toute confidentialit\xe9. Dbs aide les individus et les organisations \xe0 prot\xe9ger leurs informations.","home.hero.badge":"Plateforme de cybers\xe9curit\xe9 de confiance","home.hero.button":"Commencer la Recherche","home.search.placeholder":"Recherchez une adresse email, un domaine, une IP...","home.search.button":"Rechercher","home.search.popular":"Recherches populaires","home.results.title":"R\xe9sultats de Recherche","home.results.databases":"Base de donn\xe9es trouv\xe9es","home.results.download":"T\xe9l\xe9charger les r\xe9sultats","home.results.noresults":"Aucun r\xe9sultat trouv\xe9","home.results.noresultstext":"Aucune donn\xe9e n'a \xe9t\xe9 trouv\xe9e pour","home.credits.title":"Cr\xe9dits Restants","home.error.notloggedin":"Veuillez vous connecter pour utiliser le moteur de recherche.","home.error.beta_only":"Les recherches sont actuellement r\xe9serv\xe9es aux b\xeata testeurs.","home.error.nocredits":"Cr\xe9dits insuffisants. Mettez \xe0 niveau votre plan.","home.error.search":"Erreur lors de la recherche. Veuillez r\xe9essayer.","home.features.section":"Fonctionnalit\xe9s","home.features.title":"Outils puissants pour vos recherches","home.features.subtitle":"Des fonctionnalit\xe9s avanc\xe9es con\xe7ues pour les professionnels de la cybers\xe9curit\xe9, les enqu\xeateurs et les chercheurs.","home.howitworks.section":"Comment \xe7a marche","home.howitworks.title":"Simple, rapide et s\xe9curis\xe9","home.howitworks.subtitle":"Trois \xe9tapes simples pour d\xe9couvrir les informations dont vous avez besoin.","home.howitworks.step1.title":"Entrez votre recherche","home.howitworks.step1.desc":"Saisissez un email, nom d'utilisateur, num\xe9ro de t\xe9l\xe9phone, adresse IP ou tout autre identifiant dans notre barre de recherche s\xe9curis\xe9e.","home.howitworks.step2.title":"Analyse des sources","home.howitworks.step2.desc":"Dbs interroge plus de 15 sources de donn\xe9es en direct, incluant les bases de violations, les r\xe9seaux sociaux et les registres publics.","home.howitworks.step3.title":"Explorez les r\xe9sultats","home.howitworks.step3.desc":"Visualisez les donn\xe9es dans un tableau de bord organis\xe9, corr\xe9lez les informations, d\xe9couvrez les connexions et exportez vos d\xe9couvertes.","home.trust.section":"Confiance","home.trust.title":"Utilis\xe9 par des \xe9quipes de s\xe9curit\xe9 dans le monde entier","home.trust.subtitle":"Dbs est la plateforme de confiance des \xe9quipes de s\xe9curit\xe9, des forces de l'ordre et des entreprises dans plus de 50 pays. Nous offrons un support d\xe9di\xe9, des int\xe9grations personnalis\xe9es et des fonctionnalit\xe9s de niveau entreprise.","home.trust.gdpr":"Conforme RGPD","home.trust.audit":"Audit trails","home.trust.support":"Support 24/7","home.trust.sla":"SLA garanti","home.trust.orgs":"Organisations","home.trust.users":"Utilisateurs actifs","home.trust.searches":"Recherches/mois","home.trust.rating":"Note moyenne","home.trust.contact":"Contacter l'\xe9quipe commerciale","home.cta.title":"Pr\xeat \xe0 s\xe9curiser vos informations?","home.cta.subtitle":"Rejoignez des milliers de professionnels qui font confiance \xe0 Dbs pour leurs recherches OSINT et de cybers\xe9curit\xe9.","home.cta.button1":"Commencer gratuitement","home.cta.button2":"Demander une d\xe9mo","features.header.badge":"Fonctionnalit\xe9s","features.header.title":"Outils puissants pour l'OSINT","features.header.subtitle":"D\xe9couvrez toutes les capacit\xe9s de Dbs pour vos recherches et investigations.","features.violations":"Recherche de violations","features.violations.desc":"Acc\xe9dez \xe0 des milliards d'enregistrements provenant de violations de donn\xe9es connues. D\xe9tectez instantan\xe9ment si des identifiants ont \xe9t\xe9 compromis.","features.osint":"OSINT avanc\xe9","features.osint.desc":"Recherchez sur les r\xe9seaux sociaux, les forums et les plateformes publiques pour obtenir une vue compl\xe8te d'une identit\xe9 num\xe9rique.","features.darkweb":"Dark Web Search","features.darkweb.desc":"Explorez le dark web en toute s\xe9curit\xe9. Trouvez des informations sur les menaces potentielles et les donn\xe9es expos\xe9es.","features.realtime":"R\xe9sultats en temps r\xe9el","features.realtime.desc":"Notre infrastructure haute performance vous fournit des r\xe9sultats instantan\xe9s. Pas d'attente, des r\xe9ponses imm\xe9diates.","features.encryption":"Chiffrement de bout en bout","features.encryption.desc":"Toutes vos recherches sont chiffr\xe9es. Vos donn\xe9es restent priv\xe9es et s\xe9curis\xe9es. Nous ne stockons pas vos requ\xeates.","features.api":"API REST","features.api.desc":"Int\xe9grez Dbs dans vos propres outils et workflows. API document\xe9e, exemples de code, et support technique.","features.section.types":"Types de Recherche","features.types.title":"Recherchez par n'importe quel identifiant","features.types.desc":"Dbs supporte une large gamme de types de recherche pour r\xe9pondre \xe0 tous vos besoins.","features.email":"Email","features.email.desc":"Recherchez par adresse email pour trouver les violations, comptes associ\xe9s et informations publiques.","features.username":"Nom d'utilisateur","features.username.desc":"Trouvez tous les comptes et profils associ\xe9s \xe0 un nom d'utilisateur sur diff\xe9rentes plateformes.","features.phone":"Num\xe9ro de t\xe9l\xe9phone","features.phone.desc":"Identifiez les services et comptes li\xe9s \xe0 un num\xe9ro de t\xe9l\xe9phone, y compris les fuites de donn\xe9es.","features.ip":"Adresse IP","features.ip.desc":"Analysez une adresse IP pour obtenir la g\xe9olocalisation, l'h\xe9bergeur et les informations de r\xe9putation.","features.domain":"Domaine","features.domain.desc":"Explorez les informations WHOIS, DNS, certificats SSL et historique d'un nom de domaine.","features.discord":"Discord ID","features.discord.desc":"Recherchez par identifiant Discord pour trouver l'activit\xe9 et les serveurs associ\xe9s.","features.sources":"Sources de donn\xe9es","features.sources.title":"15+ sources interrog\xe9es en parall\xe8le","features.sources.desc":"Nous agr\xe9geons les donn\xe9es de multiples sources pour vous fournir les r\xe9sultats les plus complets.","features.breaches":"Bases de violations","features.breaches.count":"10B+ enregistrements","features.social":"R\xe9seaux sociaux","features.social.count":"20+ plateformes","features.dark":"Dark Web","features.dark.count":"Forums & march\xe9s","features.public":"Registres publics","features.public.count":"WHOIS, DNS, etc.","features.pastes":"Pastes","features.pastes.count":"Pastebin & similaires","features.security":"S\xe9curit\xe9","features.security.title":"Votre confidentialit\xe9 est notre priorit\xe9","features.security.desc":"Nous prenons la s\xe9curit\xe9 au s\xe9rieux. Toutes les donn\xe9es sont chiffr\xe9es en transit et au repos. Nous ne stockons pas vos recherches et nous respectons les r\xe9glementations de protection des donn\xe9es.","features.aes256":"Chiffrement AES-256","features.gdpr":"Conforme RGPD","features.zerologo":"Zero-log policy","features.audit":"Audit de s\xe9curit\xe9","features.encryption.type":"Chiffrement","features.cta.button":"Commencer Maintenant","features.cta.text":"Pr\xeat \xe0 explorer?","features.cta.subtitle":"Commencez gratuitement et d\xe9couvrez la puissance de Dbs pour vos recherches OSINT.","pricing.header.badge":"Tarifs","pricing.header.title":"Choisissez votre plan","pricing.header.subtitle":"Des options flexibles pour tous vos besoins de recherche OSINT.","pricing.plan.free":"Gratuit","pricing.plan.beginner":"Beginner","pricing.plan.premium":"premium","pricing.plan.pro":"Pro","pricing.price.beginner":"9.99","pricing.price.pro":"24.99","pricing.price.premium":"200","pricing.price.period":"/lifetime","pricing.price.crypto":"Paiement unique en crypto","pricing.price.advanced":"Pour utilisateurs avanc\xe9s","pricing.price.ultimate":"Acc\xe8s ultime","pricing.features":"Caract\xe9ristiques","pricing.button.buy":"Acheter","pricing.button.select":"Choisir ce plan","pricing.button.contact":"Nous Contacter","pricing.payment.title":"Paiement en Litecoin (LTC)","pricing.payment.desc":'Tous les paiements sont effectu\xe9s en Litecoin pour garantir votre anonymat et la s\u01f8curit\u01f8 de vos transactions. Apr\xe8s achat, cr\xe9ez un ticket dans la cat\u01f8gorie "Acc\xe8s Payant" pour activer votre plan.',"pricing.searches.per.day":"recherches/jour","pricing.feature.results":"R\u01f8sultats complets","pricing.feature.support":"Support 24h/24","pricing.feature.osint":"OSINT Search","pricing.feature.api":"API Access","pricing.feature.intelx":"IntelX","pricing.faq.title":"Questions Fr\xe9quemment Pos\xe9es","pricing.faq.q1":"Puis-je annuler mon abonnement?","pricing.faq.a1":"Oui, vous pouvez annuler \xe0 tout moment.","pricing.faq.payment.title":"Comment fonctionne le paiement?","pricing.faq.payment.desc":'Cliquez sur "Acheter", creez un ticket dans la categorie "Acces Payant" en selectionnant votre plan. Nous vous enverrons une adresse LTC pour le paiement.',"pricing.faq.lifetime.title":'Qu\'est-ce que "lifetime"?',"pricing.faq.lifetime.desc":"Un paiement unique, acces a vie. Pas d'abonnement mensuel, pas de frais caches. Vous payez une fois et profitez de votre plan pour toujours.","pricing.faq.osint.title":"Qu'est-ce que l'OSINT Search?","pricing.faq.osint.desc":"L'OSINT Search donne acces a des bases de donnees avancees et des sources exclusives pour des recherches plus approfondies.","pricing.faq.activation.title":"Combien de temps pour activer mon plan?","pricing.faq.activation.desc":"Une fois le paiement confirme, votre plan est active en quelques minutes. Notre equipe est disponible 24h/24.","pricing.cta.title":"Pr\xeat \xe0 passer au niveau sup\xe9rieur?","pricing.cta.subtitle":"D\xe9bloquez tout le potentiel de Dbs avec un plan premium.","pricing.cta.button.beginner":"Commencer avec Beginner","pricing.cta.button.premium":"Choisir premium","about.header.badge":"\xc0 propos","about.header.title":"\xc0 propos de Dbs","about.header.subtitle":"Votre plateforme de confiance pour l'OSINT.","about.mission.title":"Notre Mission","about.mission.text":"Fournir des outils OSINT puissants et accessibles \xe0 tous.","about.values.title":"Nos Valeurs","about.values.subtitle":"Ce qui nous guide","about.team.title":"Notre \xc9quipe","about.team.subtitle":"Experts en cybers\xe9curit\xe9 et OSINT","about.team.description":"Les meilleures \xe9quipes derri\xe8re Dbs","about.join.title":"Rejoignez-Nous","about.join.subtitle":"Commencez votre voyage OSINT aujourd'hui","about.users":"Utilisateurs Inscrits","contact.header.badge":"Contact","contact.header.title":"Nous Contacter","contact.header.subtitle":"Des questions? Nous sommes l\xe0 pour vous aider.","contact.notloggedin":"Vous devez \xeatre connect\xe9 pour cr\xe9er un ticket.","contact.form.subject":"Sujet","contact.form.message":"Message","contact.form.category":"Cat\xe9gorie","contact.form.category.contact":"Contact","contact.form.category.acces":"Acc\xe8s Payant","contact.form.button":"Envoyer","contact.form.required":"Veuillez remplir tous les champs.","contact.form.selectplan":"Veuillez s\xe9lectionner un plan.","contact.form.success":"Ticket cr\xe9\xe9 avec succ\xe8s!","contact.form.error":"Erreur lors de la cr\xe9ation du ticket. Veuillez r\xe9essayer.","contact.login.required":"Vous devez \xeatre connect\xe9 pour envoyer un message.","contact.faq.title":"Questions Fr\xe9quemment Pos\xe9es","tickets.header.badge":"Support","tickets.header.title":"Mes Tickets","tickets.header.subtitle":"G\xe9rez vos tickets de support","tickets.header.owner":"G\xe9rez tous les tickets des utilisateurs","tickets.header.user":"Consultez vos tickets de support","tickets.filter.all":"Tous","tickets.filter.open":"Ouverts","tickets.filter.closed":"Ferm\xe9s","tickets.filter.deleteclosed":"Supprimer tickets ferm\xe9s","tickets.filter.newticket":"Nouveau ticket","tickets.new":"Nouveau Ticket","tickets.open":"Ouvert","tickets.closed":"Ferm\xe9","tickets.status":"Statut","tickets.empty":"Vous n'avez pas encore cr\xe9\xe9 de ticket.","tickets.empty.title":"Aucun ticket","tickets.empty.all":"Vous n'avez pas encore cr\xe9\xe9 de ticket.","tickets.empty.open":"Aucun ticket ouvert.","tickets.empty.closed":"Aucun ticket ferm\xe9.","tickets.empty.button":"Cr\xe9er un ticket","tickets.created":"Cr\xe9\xe9 le","tickets.category":"Cat\xe9gorie","tickets.subject":"Sujet","tickets.close":"Fermer le ticket","tickets.close.button":"Fermer le ticket","tickets.close.confirm":"\xcates-vous s\xfbr de vouloir fermer ce ticket?","tickets.delete.button":"Supprimer le message","tickets.delete.confirm":"\xcates-vous s\xfbr de vouloir supprimer ce message?","tickets.message.placeholder":"\xc9crivez votre r\xe9ponse...","tickets.message.send":"Envoyer","tickets.message.upload":"T\xe9l\xe9charger une image","tickets.message.sent":"Message envoy\xe9","tickets.message.error":"Erreur lors de l'envoi du message","apidocs.header.badge":"Documentation API","apidocs.header.title":"Documentation API Dbs","apidocs.header.subtitle":"Int\xe9grez la puissance de Dbs dans votre application.","apidocs.access.title":"Acc\xe8s R\xe9serv\xe9","apidocs.access.desc":"Cette documentation est r\xe9serv\xe9e aux utilisateurs premium.","apidocs.introduction":"Introduction","apidocs.authentication":"Authentification","apidocs.endpoints":"Points de Terminaison","apidocs.examples":"Exemples","apidocs.search":"Recherche","apidocs.credits":"Cr\xe9dits","apidocs.apikey":"Votre cl\xe9 API","apidocs.copy":"Copier","apidocs.copied":"Copi\xe9!","footer.brand.desc":"Plateforme de cybers\xe9curit\xe9 offrant des capacit\xe9s unifi\xe9es d'OSINT et de recherche sur le dark web.","footer.product":"Produit","footer.features":"Fonctionnalit\xe9s","footer.pricing":"Tarifs","footer.api":"API Documentation","footer.changelog":"Changelog","footer.company":"Entreprise","footer.about":"\xc0 propos","footer.careers":"Carri\xe8res","footer.blog":"Blog","footer.support":"Support","footer.legal":"L\xe9gal","footer.privacy":"Politique de confidentialit\xe9","footer.terms":"Conditions d'utilisation","footer.gdpr":"RGPD","footer.security":"S\xe9curit\xe9","footer.contact":"Contact","footer.discord":"Discord","footer.telegram":"Telegram","footer.copyright":"Dbs #2026","footer.secure":"S\xe9curis\xe9","footer.gdpr_compliant":"RGPD","footer.rights":"Tous droits r\xe9serv\xe9s","about.mission":"Qui sommes-nous?","about.mission.text1":"Dbs est n\xe9 de la conviction que les outils de cybers\xe9curit\xe9 ne devraient pas \xeatre r\xe9serv\xe9s aux grandes entreprises. Notre \xe9quipe de passionn\xe9s en s\xe9curit\xe9 informatique a cr\xe9\xe9 une plateforme accessible, puissante et respectueuse de la vie priv\xe9e.","about.mission.text2":"Nous croyons que chaque individu et organisation devrait avoir acc\xe8s aux outils n\xe9cessaires pour prot\xe9ger ses informations num\xe9riques. C'est pourquoi nous avons d\xe9velopp\xe9 Dbs : une solution OSINT compl\xe8te qui combine puissance et simplicit\xe9 d'utilisation.","about.mission.text3":"Bas\xe9s en Europe, nous respectons les plus hauts standards de protection des donn\xe9es et nous engageons \xe0 une utilisation \xe9thique de nos outils.","about.year":"Ann\xe9e de cr\xe9ation","about.countries":"Pays","about.members":"Membres d'\xe9quipe","about.security":"S\xe9curit\xe9 d'abord","about.security.desc":"La protection des donn\xe9es est au c\u0153ur de tout ce que nous faisons. Nous appliquons les meilleures pratiques de s\xe9curit\xe9 \xe0 chaque niveau.","about.transparency":"Transparence","about.transparency.desc":"Nous sommes ouverts sur nos pratiques, nos sources de donn\xe9es et la fa\xe7on dont nous traitons les informations.","about.ethics":"\xc9thique","about.ethics.desc":"Nous nous engageons \xe0 une utilisation responsable de nos outils et refusons tout usage malveillant de notre plateforme.","about.accessibility":"Accessibilit\xe9","about.accessibility.desc":"Nous croyons que tout le monde devrait avoir acc\xe8s \xe0 des outils de s\xe9curit\xe9 de qualit\xe9 professionnelle.","about.innovation":"Innovation","about.innovation.desc":"Nous investissons continuellement dans la R&D pour rester \xe0 la pointe de la technologie OSINT.","about.support":"Support","about.support.desc":"Nous nous engageons \xe0 fournir un support exceptionnel \xe0 tous nos utilisateurs, quelle que soit leur taille.","contact.login.title":"Connexion requise","contact.login.button":"Se connecter","contact.success.title":"Ticket cr\xe9\xe9 avec succ\xe8s!","contact.success.desc":"Votre ticket a \xe9t\xe9 cr\xe9\xe9. Vous pouvez suivre son \xe9tat dans la section Tickets.","contact.success.redirect":"Redirection vers vos tickets...","contact.form.plan.beginner":"Beginner (3\u20ac)","contact.form.plan.premium":"premium (200\u20ac)","contact.form.message.template":"Bonjour,\n\nJe souhaite acheter le plan {{plan}}.\n\nMerci de me fournir l'adresse LTC pour le paiement.","contact.faq.q1":"Comment puis-je r\xe9initialiser mon mot de passe?","contact.faq.a1":'Cliquez sur "Mot de passe oubli\xe9" sur la page de connexion. Vous recevrez un email avec un lien pour cr\xe9er un nouveau mot de passe.',"contact.faq.q2":"Quels types de recherches puis-je effectuer?","contact.faq.a2":"Dbs supporte les recherches par email, nom d'utilisateur, num\xe9ro de t\xe9l\xe9phone, adresse IP, domaine, et identifiants de r\xe9seaux sociaux comme Discord.","contact.faq.q3":"Les r\xe9sultats sont-ils confidentiels?","contact.faq.a3":"Oui, toutes vos recherches sont chiffr\xe9es et nous ne stockons pas l'historique de vos requ\xeates. Votre confidentialit\xe9 est notre priorit\xe9.","contact.faq.q4":"Comment fonctionne le paiement en LTC?","contact.faq.a4":'Une fois que vous cr\xe9ez un ticket dans la cat\xe9gorie "Acc\xe8s Payant", nous vous enverrons une adresse LTC. Apr\xe8s confirmation du paiement, votre plan sera activ\xe9 imm\xe9diatement.',"tickets.category.contact":"Contact","tickets.category.acces_payant":"Acc\xe8s Payant","tickets.loading":"Chargement...","tickets.nologin":"Vous devez \xeatre connect\xe9 pour voir vos tickets.","tickets.owner.only":"Seul le propri\xe9taire peut effectuer cette action.","tickets.grant.access":"Accorder l'acc\xe8s","tickets.reset.credits":"R\xe9initialiser les cr\xe9dits","tickets.image.uploading":"T\xe9l\xe9chargement en cours...","tickets.image.error":"Erreur lors du t\xe9l\xe9chargement de l'image.","tickets.image.size":"L'image doit faire moins de 5MB.","login.title":"Connexion","login.subtitle":"Entrez votre email pour recevoir un code de connexion","login.email":"Email","login.button":"Envoyer le code","login.loading":"Connexion en cours...","login.success":"Connexion r\xe9ussie!","login.error":"Erreur de connexion","login.otp.title":"Entrez le code de v\xe9rification","login.otp.code":"Code de v\xe9rification","login.otp.button":"V\xe9rifier","login.otp.error":"Code invalide","login.noaccount":"Vous n'avez pas de compte?","login.signup":"Cr\xe9er un compte ici","login.email_label":"Adresse email","login.password":"Mot de passe","login.forgot_password":"Mot de passe oubli\xe9","login.send_code":"Recevoir le code","login.otp_sent":"Un code a \xe9t\xe9 envoy\xe9 \xe0","login.otp.sent":"Code envoy\xe9","login.otp.subtitle":"Entrez le code OTP","login.change_email":"Changer d'email","register.title":"Inscription","register.subtitle":"Cr\xe9ez votre compte Dbs","register.email":"Email","register.email_label":"Adresse email","register.username":"Nom d'utilisateur","register.password":"Mot de passe","register.confirmpass":"Confirmer le mot de passe","register.button":"S'inscrire","register.loading":"Cr\xe9ation du compte...","register.success":"Compte cr\xe9\xe9 avec succ\xe8s!","register.error":"Erreur d'inscription","register.passwordmismatch":"Les mots de passe ne correspondent pas","register.hasaccount":"Vous avez d\xe9j\xe0 un compte?","register.login":"Connectez-vous ici","register.verification_sent":"Email de v\xe9rification envoy\xe9 !","register.verification_message":"Un email de v\xe9rification vous a \xe9t\xe9 envoy\xe9 \xe0 votre adresse mail.","register.check_spam":"(Regardez dans les spams si vous ne trouvez pas l'email)","register.error.passwordmismatch":"Les mots de passe ne correspondent pas","register.error.passwordmin":"Le mot de passe doit contenir au moins 8 caract\xe8res","register.error.signup":"Erreur lors de l'inscription","home.search.connection_error":"Erreur de connexion. Veuillez r\xe9essayer.","home.search.popular_tags":"Recherches populaires","home.search.email_tag":"Email","home.search.username_tag":"Username","home.search.discord_tag":"Discord ID","home.search.ip_tag":"IP Address","home.search.domain_tag":"Domain","browser.notice.title":"Recommandation","browser.notice.subtitle":"Optimisez votre exp\xe9rience","browser.notice.message":"Pour une meilleure exp\xe9rience et un fonctionnement optimal du site, nous vous recommandons d'utiliser LibreWolf, un navigateur ax\xe9 sur la confidentialit\xe9.","browser.notice.button":"Installer LibreWolf","browser.notice.dismiss":"Ne plus afficher ce message","privacy.title":"Politique de confidentialit\xe9","privacy.badge":"L\xe9gal","privacy.updated":"Derni\xe8re mise \xe0 jour: 1er janvier 2024","privacy.intro":"Chez Dbs, nous prenons la protection de vos donn\xe9es personnelles tr\xe8s au s\xe9rieux. Cette politique de confidentialit\xe9 explique comment nous collectons, utilisons, stockons et prot\xe9geons vos informations lorsque vous utilisez notre plateforme.","privacy.collected":"Donn\xe9es collect\xe9es","privacy.usage":"Utilisation des donn\xe9es","privacy.searches":"Recherches et confidentialit\xe9","privacy.sharing":"Partage des donn\xe9es","privacy.security":"S\xe9curit\xe9 des donn\xe9es","gdpr.title":"RGPD & protection des donn\xe9es","gdpr.badge":"L\xe9gal","gdpr.updated":"Derni\xe8re mise \xe0 jour: 1er janvier 2026","gdpr.section1":"1. Objectif et champ d'application","gdpr.section1.desc":"Cette page pr\xe9sente les principes RGPD appliqu\xe9s par Dbs pour la collecte et le traitement des donn\xe9es personnelles li\xe9es \xe0 l'utilisation de la plateforme (OSINT, d\xe9tection de fuites et support).","gdpr.section2":"2. Responsable du traitement","gdpr.section2.desc":"Dbs est responsable du traitement des donn\xe9es personnelles trait\xe9es dans le cadre du service.","gdpr.section2.contact":"Contact: privacy@Dbs.io","gdpr.section2.dpo":"DPO: dpo@Dbs.io","gdpr.section3":"3. Bases l\xe9gales du traitement","gdpr.section3.contract":"Ex\xe9cution du contrat: cr\xe9ation de compte, acc\xe8s \xe0 la plateforme et facturation.","gdpr.section3.consent":"Consentement: cookies analytiques et communications non essentielles.","gdpr.section3.legal":"Obligation l\xe9gale: conservation des donn\xe9es de facturation.","gdpr.section3.legitimate":"Int\xe9r\xeat l\xe9gitime: s\xe9curit\xe9, pr\xe9vention des abus et am\xe9lioration du service.","gdpr.section4":"4. Donn\xe9es trait\xe9es et minimisation","gdpr.section4.desc":"Nous collectons uniquement les donn\xe9es n\xe9cessaires \xe0 la fourniture du service et appliquons une politique de minimisation. Pour le d\xe9tail des donn\xe9es et des cookies, consultez la Politique de confidentialit\xe9.","gdpr.section5":"5. Finalit\xe9s","gdpr.section5.point1":"Fournir, s\xe9curiser et am\xe9liorer la plateforme.","gdpr.section5.point2":"G\xe9rer les comptes, abonnements et paiements.","gdpr.section5.point3":"Assurer le support client et la r\xe9ponse aux demandes.","gdpr.section5.point4":"Pr\xe9venir la fraude, l'abus et les usages non autoris\xe9s.","gdpr.section5.point5":"Respecter les obligations l\xe9gales et r\xe9glementaires.","gdpr.section6":"6. Sous-traitants et transferts","gdpr.section6.desc":"Nous travaillons avec des sous-traitants techniques (h\xe9bergement, paiement, emails transactionnels) soumis \xe0 des clauses de confidentialit\xe9. Si un transfert hors EEE est n\xe9cessaire, nous mettons en place des garanties appropri\xe9es (ex: clauses contractuelles types).","gdpr.section7":"7. Dur\xe9e de conservation","gdpr.section7.desc":"Les donn\xe9es sont conserv\xe9es pendant la dur\xe9e du compte actif, puis archiv\xe9es ou supprim\xe9es selon les d\xe9lais l\xe9gaux. Les d\xe9tails figurent dans la Politique de confidentialit\xe9.","gdpr.section8":"8. Vos droits","gdpr.section8.point1":"Droit d'acc\xe8s, de rectification et d'effacement.","gdpr.section8.point2":"Droit \xe0 la limitation du traitement.","gdpr.section8.point3":"Droit d'opposition au traitement.","gdpr.section8.point4":"Droit \xe0 la portabilit\xe9 des donn\xe9es.","gdpr.section9":"9. Exercer vos droits","gdpr.section9.desc":"Vous pouvez exercer vos droits \xe0 tout moment en \xe9crivant \xe0 privacy@Dbs.io. Nous r\xe9pondons dans un d\xe9lai maximal de 30 jours, apr\xe8s v\xe9rification d'identit\xe9 si n\xe9cessaire.","gdpr.section10":"10. S\xe9curit\xe9 des donn\xe9es","gdpr.section10.desc":"Nous appliquons des mesures techniques et organisationnelles reconnues: chiffrement en transit et au repos, contr\xf4les d'acc\xe8s, journalisation et audits r\xe9guliers.","gdpr.section11":"11. Autorit\xe9 de contr\xf4le","gdpr.section11.desc":"Si vous estimez que vos droits ne sont pas respect\xe9s, vous pouvez contacter l'autorit\xe9 de contr\xf4le comp\xe9tente (CNIL: www.cnil.fr).","terms.title":"Conditions d'utilisation","terms.badge":"L\xe9gal","terms.updated":"Derni\xe8re mise \xe0 jour: 1er janvier 2024","terms.acceptance":"En acc\xe9dant et en utilisant Dbs, vous acceptez d'\xeatre li\xe9 par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.","terms.section1":"1. Acceptation des conditions","terms.section2":"2. Description du service","terms.section3":"3. Conditions d'inscription","terms.section4":"4. Utilisation acceptable","terms.section5":"5. Utilisations interdites","terms.section6":"6. Propri\xe9t\xe9 intellectuelle","terms.section7":"7. Limitation de responsabilit\xe9","terms.section8":"8. Abonnements et paiements","terms.section9":"9. Suspension et r\xe9siliation","terms.section10":"10. Modifications des conditions","terms.section11":"11. Droit applicable","terms.section12":"12. Contact","terms.service.desc":"Dbs est une plateforme de cybers\xe9curit\xe9 offrant des services de recherche OSINT (Open Source Intelligence) et de surveillance du dark web. Nos services permettent aux utilisateurs de rechercher des informations publiquement disponibles et des donn\xe9es issues de fuites connues.","terms.registration":"Pour utiliser Dbs, vous devez:","terms.reg1":"Avoir au moins 18 ans","terms.reg2":"Fournir des informations exactes lors de l'inscription","terms.reg3":"Maintenir la confidentialit\xe9 de vos identifiants","terms.reg4":"\xcatre responsable de toutes les activit\xe9s sur votre compte","terms.acceptable":"Vous vous engagez \xe0 utiliser Dbs uniquement pour des fins l\xe9gales et \xe9thiques, notamment:","terms.acceptable1":"V\xe9rifier vos propres donn\xe9es personnelles","terms.acceptable2":"Recherches de s\xe9curit\xe9 autoris\xe9es","terms.acceptable3":"Investigations l\xe9gitimes dans le cadre professionnel","terms.acceptable4":"Protection contre les menaces de cybers\xe9curit\xe9","terms.prohibited":"Il est strictement interdit d'utiliser Dbs pour:","terms.prohibited1":"Harc\xe8lement, traque ou intimidation de personnes","terms.prohibited2":"Activit\xe9s frauduleuses ou ill\xe9gales","terms.prohibited3":"Collecte de donn\xe9es pour spam ou marketing non sollicit\xe9","terms.prohibited4":"Tentative de nuire \xe0 des individus ou organisations","terms.prohibited5":"Revente ou redistribution des donn\xe9es obtenues","terms.prohibited6":"Automatisation abusive ou scraping massif","terms.prohibited7":"Contournement des limites de votre abonnement","terms.ip.text":"Tous les contenus, logos, designs et fonctionnalit\xe9s de Dbs sont prot\xe9g\xe9s par le droit de la propri\xe9t\xe9 intellectuelle. Vous ne pouvez pas copier, modifier, distribuer ou exploiter commercialement notre plateforme sans autorisation \xe9crite.","terms.liability":'Dbs est fourni "tel quel". Nous ne garantissons pas:',"terms.liability1":"L'exactitude ou l'exhaustivit\xe9 des r\xe9sultats de recherche","terms.liability2":"La disponibilit\xe9 continue du service","terms.liability3":"L'absence de bugs ou d'erreurs","terms.liability.desc":"Dbs ne pourra \xeatre tenu responsable des dommages directs ou indirects r\xe9sultant de l'utilisation de la plateforme.","terms.subscription":"Les abonnements sont factur\xe9s mensuellement ou annuellement selon votre choix. Les paiements sont non remboursables, sauf dans les cas pr\xe9vus par la loi. Vous pouvez annuler votre abonnement \xe0 tout moment.","terms.suspension":"Nous nous r\xe9servons le droit de suspendre ou r\xe9silier votre compte en cas de:","terms.suspension1":"Violation de ces conditions d'utilisation","terms.suspension2":"Utilisation abusive ou ill\xe9gale de la plateforme","terms.suspension3":"Non-paiement des frais d'abonnement","terms.suspension4":"Demande des autorit\xe9s comp\xe9tentes","terms.modifications":"Nous pouvons modifier ces conditions \xe0 tout moment. Les modifications importantes seront notifi\xe9es par email. Votre utilisation continue du service apr\xe8s modification constitue votre acceptation des nouvelles conditions.","terms.law":"Ces conditions sont r\xe9gies par le droit fran\xe7ais. Tout litige sera soumis \xe0 la juridiction des tribunaux de Paris, France.","terms.contact":"Pour toute question concernant ces conditions:","terms.contact.email":"Email: legal@Dbs.io","terms.contact.address":"Adresse: 123 Rue de la S\xe9curit\xe9, 75001 Paris, France","terms.confirmation":"En utilisant Dbs, vous confirmez avoir lu, compris et accept\xe9 ces conditions d'utilisation.","security.title":"S\xe9curit\xe9 et confiance","security.badge":"L\xe9gal","security.updated":"Derni\xe8re mise \xe0 jour: 1er janvier 2026","security.section1":"1. Engagement s\xe9curit\xe9","security.section1.desc":"La s\xe9curit\xe9 est au c\u0153ur de Dbs. Nous appliquons des pratiques reconnues pour prot\xe9ger la confidentialit\xe9, l'int\xe9grit\xe9 et la disponibilit\xe9 des informations trait\xe9es par la plateforme.","security.section2":"2. Protection des donn\xe9es","security.section2.desc":"Les donn\xe9es sont chiffr\xe9es en transit et au repos. Par d\xe9faut, Dbs ne conserve pas l'historique de vos recherches, afin de limiter l'exposition des informations sensibles.","security.section3":"3. Contr\xf4les d'acc\xe8s","security.section3.point1":"Authentification renforc\xe9e et options MFA.","security.section3.point2":"Principe du moindre privil\xe8ge pour l'acc\xe8s interne.","security.section3.point3":"Revues d'acc\xe8s p\xe9riodiques.","security.section4":"4. Infrastructure et surveillance","security.section4.desc":"Notre infrastructure est durcie et surveill\xe9e en continu. Nous appliquons des mises \xe0 jour r\xe9guli\xe8res, une segmentation des services et des alertes en cas d'activit\xe9 anormale.","security.section5":"5. D\xe9veloppement s\xe9curis\xe9","security.section5.desc":"Le code est revu et test\xe9 avant chaque d\xe9ploiement. Nous suivons les d\xe9pendances, appliquons des correctifs et r\xe9duisons les risques de r\xe9gression s\xe9curit\xe9.","security.section6":"6. Gestion des incidents","security.section6.desc":"En cas d'incident, nous appliquons un processus de r\xe9ponse document\xe9, avec analyse, rem\xe9diation et communication appropri\xe9e si n\xe9cessaire.","security.section7":"7. Divulgation responsable","security.section7.desc":"Vous pouvez signaler une vuln\xe9rabilit\xe9 \xe0 security@Dbs.io. Nous analysons chaque signalement de bonne foi et communiquons sur la r\xe9solution.","security.section8":"8. Bonnes pratiques utilisateur","security.section8.point1":"Utilisez un mot de passe unique et robuste.","security.section8.point2":"Activez la MFA d\xe8s que possible.","security.section8.point3":"Ne partagez pas vos identifiants.","security.section8.point4":"V\xe9rifiez r\xe9guli\xe8rement l'activit\xe9 de votre compte.","security.section9":"9. En savoir plus","security.section9.desc":"Pour les d\xe9tails sur le traitement des donn\xe9es personnelles, consultez la Politique de confidentialit\xe9."},en:{"nav.home":"Home","nav.features":"Features","nav.pricing":"Pricing","nav.about":"About","nav.contact":"Contact","nav.tickets":"Tickets","nav.apidocs":"API Docs","nav.login":"Login","nav.register":"Register","nav.logout":"Logout","nav.profile":"Profile","nav.settings":"Settings","nav.api":"API","nav.inbox":"Inbox","nav.apiAccess":"API Access","home.hero.title":"Advanced OSINT Search Engine","home.hero.subtitle":"Find public information on the web in seconds","home.hero.description":"Detect data breaches, leaks and threats quickly and confidentially. Dbs helps individuals and organizations protect their information.","home.hero.badge":"Trusted Cybersecurity Platform","home.hero.button":"Start Searching","home.search.placeholder":"Search for an email, domain, IP...","home.search.button":"Search","home.search.popular":"Popular Searches","home.results.title":"Search Results","home.results.databases":"Databases found","home.results.download":"Download Results","home.results.noresults":"No results found","home.results.noresultstext":"No data was found for","home.credits.title":"Credits Remaining","home.error.notloggedin":"Please log in to use the search engine.","home.error.beta_only":"Searches are currently limited to beta testers.","home.error.nocredits":"Insufficient credits. Upgrade your plan.","home.error.search":"Error during search. Please try again.","home.features.section":"Features","home.features.title":"Powerful Tools for Your Research","home.features.subtitle":"Advanced features designed for cybersecurity professionals, investigators and researchers.","home.howitworks.section":"How It Works","home.howitworks.title":"Simple, Fast and Secure","home.howitworks.subtitle":"Three simple steps to discover the information you need.","home.howitworks.step1.title":"Enter Your Search","home.howitworks.step1.desc":"Enter an email, username, phone number, IP address or any other identifier in our secure search bar.","home.howitworks.step2.title":"Source Analysis","home.howitworks.step2.desc":"Dbs queries over 15 live data sources, including breach databases, social networks and public records.","home.howitworks.step3.title":"Explore Results","home.howitworks.step3.desc":"View data in an organized dashboard, correlate information, discover connections and export your findings.","home.trust.section":"Trust","home.trust.title":"Used by Security Teams Worldwide","home.trust.subtitle":"Dbs is the trusted platform for security teams, law enforcement and enterprises in over 50 countries. We offer dedicated support, custom integrations and enterprise-level features.","home.trust.gdpr":"GDPR Compliant","home.trust.audit":"Audit Trails","home.trust.support":"24/7 Support","home.trust.sla":"Guaranteed SLA","home.trust.orgs":"Organizations","home.trust.users":"Active Users","home.trust.searches":"Searches/Month","home.trust.rating":"Average Rating","home.trust.contact":"Contact Sales Team","home.cta.title":"Ready to Secure Your Information?","home.cta.subtitle":"Join thousands of professionals who trust Dbs for their OSINT and cybersecurity research.","home.cta.button1":"Get Started Free","home.cta.button2":"Request a Demo","features.header.badge":"Features","features.header.title":"Powerful Tools for OSINT","features.header.subtitle":"Discover all the capabilities of Dbs for your research and investigations.","features.violations":"Data Breach Search","features.violations.desc":"Access billions of records from known data breaches. Instantly detect if credentials have been compromised.","features.osint":"Advanced OSINT","features.osint.desc":"Search social networks, forums and public platforms for a complete view of a digital identity.","features.darkweb":"Dark Web Search","features.darkweb.desc":"Safely explore the dark web. Find information on potential threats and exposed data.","features.realtime":"Real-time Results","features.realtime.desc":"Our high-performance infrastructure provides instant results. No waiting, immediate answers.","features.encryption":"End-to-End Encryption","features.encryption.desc":"All your searches are encrypted. Your data remains private and secure. We don't store your queries.","features.api":"REST API","features.api.desc":"Integrate Dbs into your own tools and workflows. Documented API, code examples, and technical support.","features.section.types":"Search Types","features.types.title":"Search by any identifier","features.types.desc":"Dbs supports a wide range of search types to meet all your needs.","features.email":"Email","features.email.desc":"Search by email address to find breaches, associated accounts and public information.","features.username":"Username","features.username.desc":"Find all accounts and profiles associated with a username across different platforms.","features.phone":"Phone Number","features.phone.desc":"Identify services and accounts linked to a phone number, including data leaks.","features.ip":"IP Address","features.ip.desc":"Analyze an IP address to get geolocation, hosting provider and reputation information.","features.domain":"Domain","features.domain.desc":"Explore WHOIS information, DNS, SSL certificates and history of a domain name.","features.discord":"Discord ID","features.discord.desc":"Search by Discord ID to find associated activity and servers.","features.sources":"Data Sources","features.sources.title":"15+ sources queried in parallel","features.sources.desc":"We aggregate data from multiple sources to provide you with the most complete results.","features.breaches":"Breach Databases","features.breaches.count":"10B+ records","features.social":"Social Networks","features.social.count":"20+ platforms","features.dark":"Dark Web","features.dark.count":"Forums & Markets","features.public":"Public Records","features.public.count":"WHOIS, DNS, etc.","features.pastes":"Pastes","features.pastes.count":"Pastebin & Similar","features.security":"Security","features.security.title":"Your privacy is our priority","features.security.desc":"We take security seriously. All data is encrypted in transit and at rest. We don't store your searches and we comply with data protection regulations.","features.aes256":"AES-256 Encryption","features.gdpr":"GDPR Compliant","features.zerologo":"Zero-log policy","features.audit":"Security Audit","features.encryption.type":"Encryption","features.cta.button":"Get Started","features.cta.text":"Ready to explore?","features.cta.subtitle":"Start for free and discover the power of Dbs for your OSINT research.","pricing.header.badge":"Pricing","pricing.header.title":"Choose Your Plan","pricing.header.subtitle":"Flexible options for all your OSINT needs.","pricing.plan.free":"Free","pricing.plan.beginner":"Beginner","pricing.plan.premium":"premium","pricing.plan.pro":"Pro","pricing.price.beginner":"9.99","pricing.price.pro":"24.99","pricing.price.premium":"200","pricing.price.period":"/lifetime","pricing.price.crypto":"Single payment in crypto","pricing.price.advanced":"For advanced users","pricing.price.ultimate":"Ultimate access","pricing.features":"Features","pricing.button.buy":"Buy","pricing.button.select":"Select This Plan","pricing.button.contact":"Contact Us","pricing.payment.title":"Payment in Litecoin (LTC)","pricing.payment.desc":'All payments are made in Litecoin to guarantee your anonymity and transaction security. After purchase, create a ticket in the "Paid Access" category to activate your plan.',"pricing.searches.per.day":"searches/day","pricing.feature.results":"Complete Results","pricing.feature.support":"24/7 Support","pricing.feature.osint":"OSINT Search","pricing.feature.api":"API Access","pricing.feature.intelx":"IntelX","pricing.faq.title":"Frequently Asked Questions","pricing.faq.q1":"Can I cancel my subscription?","pricing.faq.a1":"Yes, you can cancel at any time.","pricing.faq.payment.title":"How does payment work?","pricing.faq.payment.desc":'Click "Buy", create a ticket in the "Paid Access" category and select your plan. We will send you an LTC address for payment.',"pricing.faq.lifetime.title":'What is "lifetime"?',"pricing.faq.lifetime.desc":"A single payment, lifetime access. No monthly subscription, no hidden fees. You pay once and keep your plan forever.","pricing.faq.osint.title":"What is OSINT Search?","pricing.faq.osint.desc":"OSINT Search gives access to advanced databases and exclusive sources for deeper searches.","pricing.faq.activation.title":"How long to activate my plan?","pricing.faq.activation.desc":"Once payment is confirmed, your plan is activated within minutes. Our team is available 24/7.","pricing.cta.title":"Ready to Level Up?","pricing.cta.subtitle":"Unlock the full potential of Dbs with a premium plan.","pricing.cta.button.beginner":"Start with Beginner","pricing.cta.button.premium":"Choose premium","about.header.badge":"About","about.header.title":"About Dbs","about.header.subtitle":"Your trusted platform for OSINT.","about.mission.title":"Our Mission","about.mission.text":"To provide powerful and accessible OSINT tools to everyone.","about.values.title":"Our Values","about.values.subtitle":"What Guides Us","about.team.title":"Our Team","about.team.subtitle":"Cybersecurity and OSINT Experts","about.team.description":"The best teams behind Dbs","about.join.title":"Join Us","about.join.subtitle":"Start your OSINT journey today","about.users":"Registered Users","contact.header.badge":"Contact","contact.header.title":"Contact Us","contact.header.subtitle":"Have questions? We are here to help.","contact.notloggedin":"You must be logged in to create a ticket.","contact.form.subject":"Subject","contact.form.message":"Message","contact.form.category":"Category","contact.form.category.contact":"Contact","contact.form.category.acces":"Paid Access","contact.form.button":"Send","contact.form.required":"Please fill in all fields.","contact.form.selectplan":"Please select a plan.","contact.form.success":"Ticket created successfully!","contact.form.error":"Error creating ticket. Please try again.","contact.login.required":"You must be logged in to send a message.","contact.faq.title":"Frequently Asked Questions","tickets.header.badge":"Support","tickets.header.title":"My Tickets","tickets.header.subtitle":"Manage your support tickets.","tickets.header.owner":"Manage all user tickets","tickets.header.user":"View your support tickets","tickets.filter.all":"All","tickets.filter.open":"Open","tickets.filter.closed":"Closed","tickets.filter.deleteclosed":"Delete closed tickets","tickets.filter.newticket":"New Ticket","tickets.new":"New Ticket","tickets.open":"Open","tickets.closed":"Closed","tickets.status":"Status","tickets.empty":"You haven't created any tickets yet.","tickets.empty.title":"No Tickets","tickets.empty.all":"You haven't created any tickets yet.","tickets.empty.open":"No open tickets.","tickets.empty.closed":"No closed tickets.","tickets.empty.button":"Create Ticket","tickets.created":"Created on","tickets.category":"Category","tickets.subject":"Subject","tickets.close":"Close Ticket","tickets.close.button":"Close Ticket","tickets.close.confirm":"Are you sure you want to close this ticket?","tickets.delete.button":"Delete Message","tickets.delete.confirm":"Are you sure you want to delete this message?","tickets.confirm.close":"Are you sure you want to close this ticket?","tickets.message.placeholder":"Write your reply...","tickets.message.send":"Send","tickets.message.upload":"Upload Image","tickets.message.sent":"Message sent","tickets.message.error":"Error sending message","apidocs.header.badge":"API Documentation","apidocs.header.title":"Dbs API Documentation","apidocs.header.subtitle":"Integrate the power of Dbs into your application.","apidocs.access.title":"Restricted Access","apidocs.access.desc":"This documentation is reserved for premium users.","apidocs.introduction":"Introduction","apidocs.authentication":"Authentication","apidocs.endpoints":"Endpoints","apidocs.examples":"Examples","apidocs.search":"Search","apidocs.credits":"Credits","apidocs.apikey":"Your API Key","apidocs.copy":"Copy","apidocs.copied":"Copied!","footer.brand.desc":"Cybersecurity platform offering unified OSINT and dark web search capabilities.","footer.product":"Product","footer.features":"Features","footer.pricing":"Pricing","footer.api":"API Documentation","footer.changelog":"Changelog","footer.company":"Company","footer.about":"About","footer.careers":"Careers","footer.blog":"Blog","footer.support":"Support","footer.legal":"Legal","footer.privacy":"Privacy Policy","footer.terms":"Terms of Service","footer.gdpr":"GDPR","footer.security":"Security","footer.contact":"Contact","footer.discord":"Discord","footer.telegram":"Telegram","footer.copyright":"Dbs #2025","footer.secure":"Secure","footer.gdpr_compliant":"GDPR","footer.rights":"All rights reserved","about.mission":"Who We Are?","about.mission.text1":"Dbs was born from the conviction that cybersecurity tools should not be reserved for large enterprises. Our team of passionate information security experts created an accessible, powerful and privacy-respecting platform.","about.mission.text2":"We believe that every individual and organization should have access to the tools they need to protect their digital information. That's why we developed Dbs: a complete OSINT solution that combines power with ease of use.","about.mission.text3":"Based in Europe, we respect the highest standards of data protection and are committed to ethical use of our tools.","about.year":"Year Founded","about.countries":"Countries","about.members":"Team Members","about.security":"Security First","about.security.desc":"Data protection is at the heart of everything we do. We apply the best security practices at every level.","about.transparency":"Transparency","about.transparency.desc":"We are open about our practices, our data sources and how we handle information.","about.ethics":"Ethics","about.ethics.desc":"We are committed to responsible use of our tools and refuse any malicious use of our platform.","about.accessibility":"Accessibility","about.accessibility.desc":"We believe everyone should have access to professional-quality security tools.","about.innovation":"Innovation","about.innovation.desc":"We continuously invest in R&D to stay at the forefront of OSINT technology.","about.support":"Support","about.support.desc":"We are committed to providing exceptional support to all our users, regardless of their size.","contact.login.title":"Login Required","contact.login.button":"Login","contact.success.title":"Ticket Created Successfully!","contact.success.desc":"Your ticket has been created. You can track its status in the Tickets section.","contact.success.redirect":"Redirecting to your tickets...","contact.form.plan.beginner":"Beginner ($3)","contact.form.plan.premium":"premium ($7)","contact.form.message.template":"Hello,\n\nI would like to purchase the {{plan}} plan.\n\nPlease provide me with the LTC address for payment.","contact.faq.q1":"How can I reset my password?","contact.faq.a1":'Click "Forgot Password" on the login page. You will receive an email with a link to create a new password.',"contact.faq.q2":"What types of searches can I perform?","contact.faq.a2":"Dbs supports searches by email, username, phone number, IP address, domain, and social media identifiers like Discord.","contact.faq.q3":"Are the results confidential?","contact.faq.a3":"Yes, all your searches are encrypted and we don't store your query history. Your privacy is our priority.","contact.faq.q4":"How does LTC payment work?","contact.faq.a4":'Once you create a ticket in the "Paid Access" category, we will send you an LTC address. After payment confirmation, your plan will be activated immediately.',"tickets.category.contact":"Contact","tickets.category.acces_payant":"Paid Access","tickets.loading":"Loading...","tickets.nologin":"You must be logged in to view your tickets.","tickets.owner.only":"Only the owner can perform this action.","tickets.grant.access":"Grant Access","tickets.reset.credits":"Reset Credits","tickets.image.uploading":"Uploading...","tickets.image.error":"Error uploading image.","tickets.image.size":"Image must be less than 5MB.","login.title":"Login","login.subtitle":"Access your Dbs account","login.email":"Email Address","login.password":"Password","login.remember":"Remember me","login.button":"Log In","login.loading":"Logging in...","login.success":"Login successful!","login.error":"Login error","login.forgot":"Forgot password?","login.otp.title":"Enter Verification Code","login.otp.subtitle":"Enter your email to receive a login code","login.otp.code":"Verification Code","login.otp.button":"Verify","login.otp.error":"Invalid or expired code","login.otp.sent":"OTP Code sent! Check your inbox (and spam folder).","login.noaccount":"Don't have an account?","login.signup":"Sign up here","login.email_label":"Email Address","login.forgot_password":"Forgot Password","login.send_code":"Send Code","login.otp_sent":"A code has been sent to","login.change_email":"Change Email","register.title":"Register","register.subtitle":"Create your Dbs account","register.email":"Email","register.email_label":"Email Address","register.username":"Username","register.password":"Password","register.confirmpass":"Confirm Password","register.button":"Register","register.loading":"Creating account...","register.success":"Account created successfully!","register.error":"Registration error","register.passwordmismatch":"Passwords do not match","register.hasaccount":"Already have an account?","register.login":"Log in here","register.verification_sent":"Verification Email Sent!","register.verification_message":"A verification email has been sent to your email address.","register.check_spam":"(Check your spam folder if you don't see the email)","register.error.passwordmismatch":"Passwords do not match","register.error.passwordmin":"Password must be at least 8 characters long","register.error.signup":"Error during registration","home.search.connection_error":"Connection error. Please try again.","home.search.popular_tags":"Popular Searches","home.search.email_tag":"Email","home.search.username_tag":"Username","home.search.discord_tag":"Discord ID","home.search.ip_tag":"IP Address","home.search.domain_tag":"Domain","browser.notice.title":"Recommendation","browser.notice.subtitle":"Optimize your experience","browser.notice.message":"For a better experience and optimal site performance, we recommend using LibreWolf, a privacy-focused browser.","browser.notice.button":"Install LibreWolf","browser.notice.dismiss":"Don't show this message again","privacy.title":"Privacy Policy","privacy.badge":"Legal","privacy.updated":"Last updated: January 1, 2024","privacy.intro":"At Dbs, we take the protection of your personal data very seriously. This privacy policy explains how we collect, use, store and protect your information when you use our platform.","privacy.collected":"Data Collected","privacy.usage":"Data Usage","privacy.searches":"Searches and Privacy","privacy.sharing":"Data Sharing","privacy.security":"Data Security","gdpr.title":"GDPR & Data Protection","gdpr.badge":"Legal","gdpr.updated":"Last updated: January 1, 2026","gdpr.section1":"1. Objective and Scope","gdpr.section1.desc":"This page presents the GDPR principles applied by Dbs for the collection and processing of personal data related to the use of the platform (OSINT, breach detection and support).","gdpr.section2":"2. Data Controller","gdpr.section2.desc":"Dbs is responsible for the processing of personal data processed in the context of the service.","gdpr.section2.contact":"Contact: privacy@Dbs.io","gdpr.section2.dpo":"DPO: dpo@Dbs.io","gdpr.section3":"3. Legal Bases for Processing","gdpr.section3.contract":"Contract Execution: account creation, platform access and billing.","gdpr.section3.consent":"Consent: analytical cookies and non-essential communications.","gdpr.section3.legal":"Legal Obligation: retention of billing data.","gdpr.section3.legitimate":"Legitimate Interest: security, abuse prevention and service improvement.","gdpr.section4":"4. Data Processed and Minimization","gdpr.section4.desc":"We collect only the data necessary to provide the service and apply a minimization policy. For details on data and cookies, see the Privacy Policy.","gdpr.section5":"5. Purposes","gdpr.section5.point1":"Provide, secure and improve the platform.","gdpr.section5.point2":"Manage accounts, subscriptions and payments.","gdpr.section5.point3":"Ensure customer support and response to requests.","gdpr.section5.point4":"Prevent fraud, abuse and unauthorized uses.","gdpr.section5.point5":"Comply with legal and regulatory obligations.","gdpr.section6":"6. Subprocessors and Transfers","gdpr.section6.desc":"We work with technical subprocessors (hosting, payment, transactional emails) bound by confidentiality clauses. If a transfer outside the EEA is necessary, we implement appropriate safeguards (e.g., standard contractual clauses).","gdpr.section7":"7. Retention Period","gdpr.section7.desc":"Data is retained for the duration of the active account, then archived or deleted according to legal deadlines. Details are in the Privacy Policy.","gdpr.section8":"8. Your Rights","gdpr.section8.point1":"Right of access, rectification and erasure.","gdpr.section8.point2":"Right to restrict processing.","gdpr.section8.point3":"Right to object to processing.","gdpr.section8.point4":"Right to data portability.","gdpr.section9":"9. Exercising Your Rights","gdpr.section9.desc":"You can exercise your rights at any time by writing to privacy@Dbs.io. We respond within a maximum of 30 days, after identity verification if necessary.","gdpr.section10":"10. Data Security","gdpr.section10.desc":"We apply recognized technical and organizational measures: encryption in transit and at rest, access controls, logging and regular audits.","gdpr.section11":"11. Supervisory Authority","gdpr.section11.desc":"If you believe your rights are not respected, you can contact the competent supervisory authority (CNIL: www.cnil.fr).","terms.title":"Terms of Service","terms.badge":"Legal","terms.updated":"Last updated: January 1, 2024","terms.acceptance":"By accessing and using Dbs, you agree to be bound by these Terms of Service. If you do not accept these terms, please do not use our service.","terms.section1":"1. Acceptance of Terms","terms.section2":"2. Service Description","terms.section3":"3. Registration Terms","terms.section4":"4. Acceptable Use","terms.section5":"5. Prohibited Uses","terms.section6":"6. Intellectual Property","terms.section7":"7. Limitation of Liability","terms.section8":"8. Subscriptions and Payments","terms.section9":"9. Suspension and Termination","terms.section10":"10. Modifications of Terms","terms.section11":"11. Applicable Law","terms.section12":"12. Contact","terms.service.desc":"Dbs is a cybersecurity platform offering OSINT (Open Source Intelligence) search services and dark web monitoring. Our services allow users to search publicly available information and data from known breaches.","terms.registration":"To use Dbs, you must:","terms.reg1":"Be at least 18 years old","terms.reg2":"Provide accurate information during registration","terms.reg3":"Maintain confidentiality of your credentials","terms.reg4":"Be responsible for all activities on your account","terms.acceptable":"You agree to use Dbs only for legal and ethical purposes, including:","terms.acceptable1":"Verify your own personal data","terms.acceptable2":"Authorized security research","terms.acceptable3":"Legitimate investigations in a professional context","terms.acceptable4":"Protection against cybersecurity threats","terms.prohibited":"It is strictly prohibited to use Dbs for:","terms.prohibited1":"Harassment, stalking or intimidation of individuals","terms.prohibited2":"Fraudulent or illegal activities","terms.prohibited3":"Data collection for spam or unsolicited marketing","terms.prohibited4":"Attempting to harm individuals or organizations","terms.prohibited5":"Resale or redistribution of obtained data","terms.prohibited6":"Abusive automation or mass scraping","terms.prohibited7":"Circumventing your subscription limits","terms.ip.text":"All content, logos, designs and features of Dbs are protected by intellectual property rights. You may not copy, modify, distribute or commercially exploit our platform without written permission.","terms.liability":'Dbs is provided "as is". We do not warrant:',"terms.liability1":"The accuracy or completeness of search results","terms.liability2":"Continuous availability of the service","terms.liability3":"The absence of bugs or errors","terms.liability.desc":"Dbs shall not be liable for any direct or indirect damages resulting from use of the platform.","terms.subscription":"Subscriptions are billed monthly or annually according to your choice. Payments are non-refundable, except as required by law. You may cancel your subscription at any time.","terms.suspension":"We reserve the right to suspend or terminate your account in case of:","terms.suspension1":"Violation of these Terms of Service","terms.suspension2":"Abusive or illegal use of the platform","terms.suspension3":"Non-payment of subscription fees","terms.suspension4":"Request from competent authorities","terms.modifications":"We may modify these terms at any time. Significant changes will be notified by email. Your continued use of the service after modification constitutes your acceptance of the new terms.","terms.law":"These terms are governed by French law. Any dispute will be subject to the jurisdiction of the courts of Paris, France.","terms.contact":"For any questions about these terms:","terms.contact.email":"Email: legal@Dbs.io","terms.contact.address":"Address: 123 Rue de la S\xe9curit\xe9, 75001 Paris, France","terms.confirmation":"By using Dbs, you confirm that you have read, understood and accepted these Terms of Service.","security.title":"Security & Trust","security.badge":"Legal","security.updated":"Last updated: January 1, 2026","security.section1":"1. Security Commitment","security.section1.desc":"Security is at the heart of Dbs. We apply recognized practices to protect the confidentiality, integrity and availability of information processed by the platform.","security.section2":"2. Data Protection","security.section2.desc":"Data is encrypted in transit and at rest. By default, Dbs does not retain your search history to limit exposure of sensitive information.","security.section3":"3. Access Controls","security.section3.point1":"Strengthened authentication and MFA options.","security.section3.point2":"Principle of least privilege for internal access.","security.section3.point3":"Periodic access reviews.","security.section4":"4. Infrastructure and Monitoring","security.section4.desc":"Our infrastructure is hardened and continuously monitored. We apply regular updates, service segmentation and alerts for unusual activity.","security.section5":"5. Secure Development","security.section5.desc":"Code is reviewed and tested before each deployment. We track dependencies, apply patches and reduce security regression risks.","security.section6":"6. Incident Management","security.section6.desc":"In case of incident, we apply a documented response process, with analysis, remediation and appropriate communication if necessary.","security.section7":"7. Responsible Disclosure","security.section7.desc":"You can report a vulnerability to security@Dbs.io. We analyze each report in good faith and communicate on resolution.","security.section8":"8. User Best Practices","security.section8.point1":"Use a unique and strong password.","security.section8.point2":"Enable MFA as soon as possible.","security.section8.point3":"Do not share your credentials.","security.section8.point4":"Regularly check your account activity.","security.section9":"9. Learn More","security.section9.desc":"For details on personal data processing, see the Privacy Policy."}},io=({children:e})=>{const[t,r]=nr.useState(()=>"undefined"!=typeof window&&localStorage.getItem("Dbs-language")||"fr")
return er.jsx(no.Provider,{value:{language:t,setLanguage:e=>{r(e),"undefined"!=typeof window&&localStorage.setItem("Dbs-language",e)},t:e=>ao[t][e]||e},children:e})},oo=nr.createContext(null),lo=({children:e})=>{const[t,r]=nr.useState(!0),[n,s]=nr.useState(null),[a,i]=nr.useState(Date.now())
nr.useEffect(()=>{const e=(()=>{const e=[navigator.userAgent,navigator.language,screen.width,screen.height,screen.colorDepth,(new Date).getTimezoneOffset(),navigator.hardwareConcurrency||0].join("|")
let t=0
for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t&=t
return Math.abs(t).toString(36)})()
s(e)
const t=sessionStorage.getItem("sn-fp")
t&&t!==e?r(!1):sessionStorage.setItem("sn-fp",e)},[]),nr.useEffect(()=>{const e=()=>{i(Date.now())},t=["mousedown","keydown","touchstart","scroll"]
return t.forEach(t=>{window.addEventListener(t,e,{passive:!0})}),()=>{t.forEach(t=>{window.removeEventListener(t,e)})}},[]),nr.useEffect(()=>{const e=setInterval(async()=>{Date.now()-a>18e5&&(await Qi.auth.signOut(),window.location.href="/login?reason=timeout")},6e4)
return()=>clearInterval(e)},[a]),nr.useEffect(()=>{const e=async()=>{try{const{data:{session:e},error:t}=await Qi.auth.getSession()
if(t||!e)return void r(!1)
const n=e.expires_at
n&&1e3*n-Date.now()<3e5&&await Qi.auth.refreshSession(),r(!0)}catch(jl){r(!1)}}
e()
const t=setInterval(e,3e5)
return()=>clearInterval(t)},[]),nr.useEffect(()=>{const e=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{if(e instanceof HTMLElement&&("SCRIPT"!==e.tagName||e.hasAttribute("data-safe")||e.remove(),"IFRAME"===e.tagName)){const t=e.getAttribute("src")||"";["challenges.cloudflare.com"].some(e=>t.includes(e))||e.remove()}})})})
return e.observe(document.body,{childList:!0,subtree:!0}),()=>e.disconnect()},[]),nr.useEffect(()=>{{const e=e=>"F12"===e.key||e.ctrlKey&&e.shiftKey&&["I","J","C"].includes(e.key.toUpperCase())||e.ctrlKey&&"U"===e.key.toUpperCase()?(e.preventDefault(),!1):void 0
return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}},[]),nr.useEffect(()=>{{const e=setInterval(()=>{window.outerWidth,window.innerWidth,window.outerHeight,window.innerHeight},1e3)
return()=>clearInterval(e)}},[])
const o=nr.useCallback(()=>{},[]),l=nr.useCallback(async()=>{try{const{error:e}=await Qi.auth.refreshSession()
return e?(r(!1),!1):(r(!0),!0)}catch(jl){return r(!1),!1}},[])
return er.jsx(oo.Provider,{value:{isSecure:t,sessionFingerprint:n,lastActivity:a,reportSuspiciousActivity:o,refreshSession:l},children:e})},co=["f479668f-4129-4c67-91bb-decba5a0e804","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","3e45559e-299c-4d49-9fe8-b2c77237d2c9","deee5dc2-e37e-48ba-8da2-1fb5945cd235"],uo=["f479668f-4129-4c67-91bb-decba5a0e804","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","3e45559e-299c-4d49-9fe8-b2c77237d2c9","deee5dc2-e37e-48ba-8da2-1fb5945cd235"],ho=e=>{const t=localStorage.getItem("user_plan_".concat(e))
if(t)try{return JSON.parse(t)}catch(jl){return null}return null},po=e=>{if((null==e?void 0:e.credits_per_day)&&e.credits_per_day>0)return e.credits_per_day
switch(null==e?void 0:e.plan){case"beginner":return 100
case"pro":return 500
case"premium":return 5e3
case"beta":return 30
case"blocked":return 0
case"free":return 10
default:return 50}},fo=({onClose:e})=>{var t,r,n,s
const{user:a,profile:i}=to(),[o,l]=nr.useState(!1),[c,u]=nr.useState(null!=(t=null==i?void 0:i.avatar_url)?t:null),[d,h]=nr.useState(!1),[p,f]=nr.useState(null),[m,g]=nr.useState(()=>(null==a?void 0:a.id)?ho(a.id):null),[b,y]=nr.useState([]),v=co.includes((null==a?void 0:a.id)||"")||b.includes("founder"),x=uo.includes((null==a?void 0:a.id)||"")||b.includes("promoter"),w="f479668f-4129-4c67-91bb-decba5a0e804"===(null==a?void 0:a.id)||b.includes("developer"),k=b.includes("bug_hunter"),j=b.includes("buyer"),S=b.includes("early"),_=b.includes("vip"),N=b.includes("partner"),E=b.includes("staff"),T=b.includes("beta_tester"),C=b.includes("premium"),R=(new Date).toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})
return nr.useEffect(()=>{var e
u(null!=(e=null==i?void 0:i.avatar_url)?e:null)},[null==i?void 0:i.id,null==i?void 0:i.avatar_url]),nr.useEffect(()=>{(async()=>{if(null==a?void 0:a.id)try{const{data:e,error:t}=await Qi.from("user_badges").select("badge").eq("user_id",a.id)
if(!t&&e){const t=e.map(e=>e.badge)
y(t)}}catch(e){}else y([])})()},[null==a?void 0:a.id]),nr.useEffect(()=>{(async()=>{if(!(null==a?void 0:a.id))return
const e=ho(a.id)
e&&!m&&g(e)
try{const{data:e}=await Qi.from("user_plans").select("plan, credits_per_day").eq("user_id",a.id).maybeSingle()
if(e){const n=(()=>{var t
switch(null==(t=e.plan)?void 0:t.toLowerCase()){case"beginner":return"beginner"
case"pro":return"pro"
case"premium":return"premium"
case"beta":return"beta"
default:return"free"}})(),s={plan:n,credits_per_day:po({plan:n,credits_per_day:e.credits_per_day})}
g(s),t=a.id,r=s,localStorage.setItem("user_plan_".concat(t),JSON.stringify(r))}else{const e={plan:"free",credits_per_day:po({plan:"free",credits_per_day:10})}
m||g(e)}}catch(n){if(!m){const t=null!=e?e:{plan:"free",credits_per_day:po({plan:"free",credits_per_day:10})}
g(t)}}var t,r})()},[null==a?void 0:a.id]),er.jsx("div",{className:"settings-overlay",onClick:e,children:er.jsxs("div",{className:"settings-modal",onClick:e=>e.stopPropagation(),children:[er.jsxs("div",{className:"settings-header",children:[er.jsxs("h2",{children:[er.jsx("i",{className:"fas fa-cog"})," Account Settings"]}),er.jsx("button",{className:"settings-close",onClick:e,children:er.jsx("i",{className:"fas fa-times"})})]}),er.jsxs("div",{className:"settings-content",children:[er.jsxs("div",{className:"settings-avatar",children:[er.jsxs("div",{className:"avatar-wrapper",children:[er.jsx("div",{className:"avatar-circle",style:{position:"relative",overflow:"hidden"},children:c?er.jsx("img",{src:c,alt:"Avatar",style:{width:"100%",height:"100%",objectFit:"cover"}}):er.jsx("i",{className:"fas fa-user"})}),er.jsxs("label",{className:"avatar-upload-btn",title:"Update avatar",children:[er.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/jpg,image/webp",onChange:async e=>{var t,r
const n=null==(t=e.target.files)?void 0:t[0]
if(!n||!(null==a?void 0:a.id))return
if(f(null),n.size>3145728)return f("Image too large (max 3MB)"),void(e.target.value="")
const s=(null==(r=n.name.split(".").pop())?void 0:r.toLowerCase())||"jpg",o="".concat(a.id,"/avatar-").concat(Date.now(),".").concat(s)
h(!0)
try{const{error:e}=await Qi.storage.from("avatars").upload(o,n,{cacheControl:"3600",upsert:!0,contentType:n.type||"image/jpeg"})
if(e)return void f(e.message||"Upload failed")
const{data:t}=Qi.storage.from("avatars").getPublicUrl(o),r=t.publicUrl,{error:s}=await Qi.from("profiles").update({avatar_url:r}).eq("id",a.id)
if(s)return void f("Profile update failed")
u(r),i&&(i.avatar_url=r)}catch(l){const e=l instanceof Error?l.message:"Unexpected error during upload"
f(e)}finally{h(!1),e.target.value=""}},disabled:d}),er.jsx("i",{className:"fas fa-pen ".concat(d?"fa-spin":"")})]})]}),p&&er.jsx("p",{style:{color:"#ff6b6b",marginTop:"6px",fontSize:"0.85rem"},children:p}),!p&&er.jsx("p",{style:{color:"var(--text-muted)",marginTop:"6px",fontSize:"0.85rem"},children:"JPG/PNG/WebP \xb7 max 3MB"}),er.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"10px",justifyContent:"center",flexWrap:"wrap"},children:[v&&er.jsxs("div",{className:"founder-badge-wrapper",style:{position:"relative"},children:[er.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #FFD700",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(255, 215, 0, 0.5), 0 0 15px rgba(255, 215, 0, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:er.jsx("i",{className:"fas fa-crown",style:{fontSize:"0.55rem",color:"#FFD700",filter:"drop-shadow(0 0 3px rgba(255, 215, 0, 0.8))"}})}),er.jsxs("div",{className:"founder-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #FFD700, #FFA500)",color:"#1a1a2e",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 215, 0, 0.5)",pointerEvents:"none"},children:["Fondateur",er.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #FFA500"}})]})]}),w&&er.jsxs("div",{className:"dev-badge-wrapper",style:{position:"relative"},children:[er.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #00d4ff",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(0, 212, 255, 0.5), 0 0 15px rgba(0, 212, 255, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:er.jsx("i",{className:"fas fa-code",style:{fontSize:"0.5rem",color:"#00d4ff",filter:"drop-shadow(0 0 3px rgba(0, 212, 255, 0.8))"}})}),er.jsxs("div",{className:"dev-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #00d4ff, #0099cc)",color:"#1a1a2e",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 212, 255, 0.5)",pointerEvents:"none"},children:["D\xe9veloppeur",er.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #0099cc"}})]})]}),x&&er.jsxs("div",{className:"promoter-badge-wrapper",style:{position:"relative"},children:[er.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #a855f7",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(168, 85, 247, 0.5), 0 0 15px rgba(168, 85, 247, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:er.jsx("i",{className:"fas fa-bullhorn",style:{fontSize:"0.45rem",color:"#a855f7",filter:"drop-shadow(0 0 3px rgba(168, 85, 247, 0.8))"}})}),er.jsxs("div",{className:"promoter-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #a855f7, #7c3aed)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(168, 85, 247, 0.5)",pointerEvents:"none"},children:["Promoteur",er.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #7c3aed"}})]})]}),S&&er.jsxs("div",{className:"early-badge-wrapper",style:{position:"relative"},children:[er.jsx("div",{className:"early-badge-icon",style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #e0e0e0",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.2)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:er.jsx("i",{className:"fas fa-eye",style:{fontSize:"0.55rem",color:"#e0e0e0",filter:"drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))"}})}),er.jsxs("div",{className:"early-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #e0e0e0, #ffffff)",color:"#1a1a2e",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.3)",pointerEvents:"none"},children:["Early User",er.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #ffffff"}})]})]}),j&&er.jsxs("div",{className:"buyer-badge-wrapper",style:{position:"relative"},children:[er.jsx("div",{className:"buyer-badge-icon",style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #ff6b9d",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(255, 107, 157, 0.5), 0 0 15px rgba(255, 107, 157, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:er.jsx("i",{className:"fas fa-money-bill-wave",style:{fontSize:"0.45rem",color:"#ff6b9d",filter:"drop-shadow(0 0 3px rgba(255, 107, 157, 0.8))"}})}),er.jsxs("div",{className:"buyer-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #ff6b9d, #c44569)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 107, 157, 0.5)",pointerEvents:"none"},children:["Buyer",er.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #c44569"}})]})]}),k&&er.jsxs("div",{className:"bughunter-badge-wrapper",style:{position:"relative"},children:[er.jsx("div",{className:"bughunter-badge-icon",style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #51cf66",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(81, 207, 102, 0.5), 0 0 15px rgba(81, 207, 102, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:er.jsx("i",{className:"fas fa-bug",style:{fontSize:"0.5rem",color:"#51cf66",filter:"drop-shadow(0 0 3px rgba(81, 207, 102, 0.8))"}})}),er.jsxs("div",{className:"bughunter-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #51cf66, #37b24d)",color:"#1a1a2e",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(81, 207, 102, 0.5)",pointerEvents:"none"},children:["Bug Hunter",er.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #37b24d"}})]})]}),_&&er.jsxs("div",{className:"vip-badge-wrapper",style:{position:"relative"},children:[er.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #ffd700",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(255, 215, 0, 0.5), 0 0 15px rgba(255, 215, 0, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:er.jsx("i",{className:"fas fa-gem",style:{fontSize:"0.5rem",color:"#ffd700",filter:"drop-shadow(0 0 3px rgba(255, 215, 0, 0.8))"}})}),er.jsxs("div",{className:"vip-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #ffd700, #ffb700)",color:"#1a1a2e",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 215, 0, 0.5)",pointerEvents:"none"},children:["VIP",er.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #ffb700"}})]})]}),N&&er.jsxs("div",{className:"partner-badge-wrapper",style:{position:"relative"},children:[er.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #4dabf7",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(77, 171, 247, 0.5), 0 0 15px rgba(77, 171, 247, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:er.jsx("i",{className:"fas fa-handshake",style:{fontSize:"0.45rem",color:"#4dabf7",filter:"drop-shadow(0 0 3px rgba(77, 171, 247, 0.8))"}})}),er.jsxs("div",{className:"partner-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #4dabf7, #339af0)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(77, 171, 247, 0.5)",pointerEvents:"none"},children:["Partner",er.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #339af0"}})]})]}),E&&er.jsxs("div",{className:"staff-badge-wrapper",style:{position:"relative"},children:[er.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #ff6b6b",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(255, 107, 107, 0.5), 0 0 15px rgba(255, 107, 107, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:er.jsx("i",{className:"fas fa-shield-alt",style:{fontSize:"0.5rem",color:"#ff6b6b",filter:"drop-shadow(0 0 3px rgba(255, 107, 107, 0.8))"}})}),er.jsxs("div",{className:"staff-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #ff6b6b, #ee5a52)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 107, 107, 0.5)",pointerEvents:"none"},children:["Staff",er.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #ee5a52"}})]})]}),T&&er.jsxs("div",{className:"beta-badge-wrapper",style:{position:"relative"},children:[er.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #845ef7",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(132, 94, 247, 0.5), 0 0 15px rgba(132, 94, 247, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:er.jsx("i",{className:"fas fa-flask",style:{fontSize:"0.5rem",color:"#845ef7",filter:"drop-shadow(0 0 3px rgba(132, 94, 247, 0.8))"}})}),er.jsxs("div",{className:"beta-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #845ef7, #7048e8)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(132, 94, 247, 0.5)",pointerEvents:"none"},children:["Beta Tester",er.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #7048e8"}})]})]}),C&&er.jsxs("div",{className:"premium-badge-wrapper",style:{position:"relative"},children:[er.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"linear-gradient(135deg, #1a1a2e, #2a2a4e)",border:"1.5px solid #f59f00",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 0 8px rgba(245, 159, 0, 0.5), 0 0 15px rgba(245, 159, 0, 0.3)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:er.jsx("i",{className:"fas fa-star",style:{fontSize:"0.5rem",color:"#f59f00",filter:"drop-shadow(0 0 3px rgba(245, 159, 0, 0.8))"}})}),er.jsxs("div",{className:"premium-tooltip",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:"6px",padding:"4px 10px",background:"linear-gradient(135deg, #f59f00, #e67700)",color:"#ffffff",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,whiteSpace:"nowrap",opacity:0,visibility:"hidden",transition:"opacity 0.2s ease, visibility 0.2s ease",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(245, 159, 0, 0.5)",pointerEvents:"none"},children:["Premium",er.jsx("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"5px solid #e67700"}})]})]})]}),er.jsx("style",{children:"\n              .founder-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 215, 0, 0.4) !important;\n              }\n              .founder-badge-wrapper:hover .founder-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n              .dev-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(0, 212, 255, 0.7), 0 0 20px rgba(0, 212, 255, 0.4) !important;\n              }\n              .dev-badge-wrapper:hover .dev-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n              .promoter-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(168, 85, 247, 0.7), 0 0 20px rgba(168, 85, 247, 0.4) !important;\n              }\n              .promoter-badge-wrapper:hover .promoter-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n              .early-badge-wrapper:hover .early-badge-icon {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.3) !important;\n              }\n              .early-badge-wrapper:hover .early-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n              .buyer-badge-wrapper:hover .buyer-badge-icon {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(255, 107, 157, 0.7), 0 0 20px rgba(255, 107, 157, 0.4) !important;\n              }\n              .buyer-badge-wrapper:hover .buyer-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n              .bughunter-badge-wrapper:hover .bughunter-badge-icon {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(81, 207, 102, 0.7), 0 0 20px rgba(81, 207, 102, 0.4) !important;\n              }\n              .bughunter-badge-wrapper:hover .bughunter-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n\n              .vip-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 215, 0, 0.4) !important;\n              }\n              .vip-badge-wrapper:hover .vip-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n\n              .partner-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(77, 171, 247, 0.7), 0 0 20px rgba(77, 171, 247, 0.4) !important;\n              }\n              .partner-badge-wrapper:hover .partner-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n\n              .staff-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(255, 107, 107, 0.7), 0 0 20px rgba(255, 107, 107, 0.4) !important;\n              }\n              .staff-badge-wrapper:hover .staff-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n\n              .beta-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(132, 94, 247, 0.7), 0 0 20px rgba(132, 94, 247, 0.4) !important;\n              }\n              .beta-badge-wrapper:hover .beta-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n\n              .premium-badge-wrapper:hover > div:first-child {\n                transform: scale(1.15);\n                box-shadow: 0 0 12px rgba(245, 159, 0, 0.7), 0 0 20px rgba(245, 159, 0, 0.4) !important;\n              }\n              .premium-badge-wrapper:hover .premium-tooltip {\n                opacity: 1 !important;\n                visibility: visible !important;\n              }\n            "})]}),er.jsxs("div",{className:"settings-info",children:[((null==i?void 0:i.username)||(null==(r=null==a?void 0:a.user_metadata)?void 0:r.username))&&er.jsxs("div",{className:"settings-field",children:[er.jsxs("label",{children:[er.jsx("i",{className:"fas fa-user"})," Username"]}),er.jsx("div",{className:"settings-value",children:(null==i?void 0:i.username)||(null==(n=null==a?void 0:a.user_metadata)?void 0:n.username)})]}),er.jsxs("div",{className:"settings-field",children:[er.jsxs("label",{children:[er.jsx("i",{className:"fas fa-envelope"})," Email"]}),er.jsxs("div",{className:"settings-value email-field",children:[o?er.jsx("span",{children:(null==a?void 0:a.email)||(null==i?void 0:i.email)||"N/A"}):er.jsx("span",{className:"hidden-email",children:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022@\u2022\u2022\u2022\u2022.\u2022\u2022\u2022"}),er.jsx("button",{className:"reveal-btn",onClick:()=>l(!o),children:er.jsx("i",{className:"fas ".concat(o?"fa-eye-slash":"fa-eye")})})]})]}),er.jsxs("div",{className:"settings-field",children:[er.jsxs("label",{children:[er.jsx("i",{className:"fas fa-calendar-alt"})," Today's Date"]}),er.jsx("div",{className:"settings-value",children:R})]}),er.jsxs("div",{className:"settings-field",children:[er.jsxs("label",{children:[er.jsx("i",{className:"fas fa-id-badge"})," User ID"]}),er.jsxs("div",{className:"settings-value user-id",children:[null==(s=null==a?void 0:a.id)?void 0:s.slice(0,8),"..."]})]}),er.jsxs("div",{className:"settings-field",children:[er.jsxs("label",{children:[er.jsx("i",{className:"fas fa-gem"})," Plan Status"]}),er.jsxs("div",{className:"settings-value",style:{display:"flex",alignItems:"center",gap:"10px"},children:["free"===(null==m?void 0:m.plan)&&er.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"rgba(134, 142, 150, 0.2)",color:"#868e96",fontSize:"0.85rem",fontWeight:600},children:[er.jsx("i",{className:"fas fa-user",style:{marginRight:"6px"}}),"Free"]}),"blocked"===(null==m?void 0:m.plan)&&er.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))",border:"1px solid #ef4444",color:"#ef4444",fontSize:"0.85rem",fontWeight:600},children:[er.jsx("i",{className:"fas fa-ban",style:{marginRight:"6px"}}),"Bloqu\xe9"]}),"beta"===(null==m?void 0:m.plan)&&er.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2))",border:"1px solid #10b981",color:"#10b981",fontSize:"0.85rem",fontWeight:600},children:[er.jsx("i",{className:"fas fa-flask",style:{marginRight:"6px"}}),"Beta"]}),"beginner"===(null==m?void 0:m.plan)&&er.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(196, 69, 105, 0.2))",border:"1px solid #ff6b9d",color:"#ff6b9d",fontSize:"0.85rem",fontWeight:600},children:[er.jsx("i",{className:"fas fa-rocket",style:{marginRight:"6px"}}),"Beginner"]}),"pro"===(null==m?void 0:m.plan)&&er.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(77, 171, 247, 0.2), rgba(34, 139, 230, 0.2))",border:"1px solid #4dabf7",color:"#4dabf7",fontSize:"0.85rem",fontWeight:600},children:[er.jsx("i",{className:"fas fa-shield-alt",style:{marginRight:"6px"}}),"Pro"]}),"premium"===(null==m?void 0:m.plan)&&er.jsxs("span",{style:{padding:"4px 12px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.2))",border:"1px solid #ffd700",color:"#ffd700",fontSize:"0.85rem",fontWeight:600},children:[er.jsx("i",{className:"fas fa-crown",style:{marginRight:"6px"}}),"premium"]}),er.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:["(",po(m)," credits/day)"]})]})]})]})]}),er.jsx("div",{className:"settings-footer",children:er.jsx("button",{className:"btn btn-outline",onClick:e,children:"Close"})})]})})},mo=["deee5dc2-e37e-48ba-8da2-1fb5945cd235","3e45559e-299c-4d49-9fe8-b2c77237d2c9","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","f479668f-4129-4c67-91bb-decba5a0e804","46eea62a-4835-4b54-a23e-c20aee355760","946f8b8b-6057-4dc9-9615-e1cfa8eb9c9f","c5ac1d65-40ac-4b53-85b3-8cea8fdfe491"],go=({onClose:e})=>{const{user:t}=to(),r=T(),[n,s]=nr.useState([]),[a,i]=nr.useState(!1),o=nr.useRef(null),l=nr.useRef(0),c=t&&mo.includes(t.id)
nr.useEffect(()=>{o.current=new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleVQHAIve/NzFsKN+WjM5Z5Olr5h7WDgxQ1hufomEeWJNPD1MXGZ0eXhsXkxFRUlUX2dscW9pYltXWFxiZ2xua2hjX19hZWpucHBsZ2ViYmRnam1wb2xoZWNjZGdqbXBwbWpmZGRlZ2ptcG9saGVjY2RnaW1vb2xoZWNjZGdpbW9ubGhlY2NkZ2ltb25sZ2VjY2RnZ2ptbmxnZGJhYmVnam1ubGhlY2JjZWdpbG5saGViYmJkZmlsbm1rZ2RiYmNlZ2lrbW1qZ2RiYmNlZ2lrbG1qZ2RiYWJkZmhrbG1qZ2RhYGFjZWdqbG1qZ2RhYGFjZWdqbGxqZ2RhYGFjZWdqbGxqZ2RhYGBiZGZpamxrZ2RhYF9gYmRnaWtsaWdjYF9fYWNlaGpramdkYWBfYGJkZmhqamdkYWBfYGJkZmhqamdjYF9fYWNlaGlqaGViYF9fYGJkZmhpamdjYF9eX2BjZWdpamdhYF5dXmBiZGZoaGdjYF5dXmBiZGZoaGdhX15dXV9hY2VnaGhlYl9dXVxeYGJkZmhoZWFfXVtcXmBiZGZnZmNhXl1cXF5gYmRlZ2ZjYF5cW1xeYGJkZWdmY2BdXFtbXWBiZGVmZmNgXVtaWltdYGJjZWZlYl9cWllZW11fYWNlZWVjYF1bWVlZW15gYmNkZGNgXltaWFlaXF5gYmNkY2JgXVtZWFhaXF5gYWNjY2FfXFpZWFlaXF5gYWJjYmFfXFpZV1haXF1fYWJiYmFfXFpYV1hZW11fYGFiYmFfXFpYV1dZWl1eYGBhYWBfXVtZV1dYWlxdX2BhYWBfXFtZV1dYWVtdXmBgYGBfXFtZV1dYWVtcXl9gYGBfXFtZV1dYWVtcXl9fX19fXFtZV1ZXWFpbXV5fX19fXlxaWFdWV1haXF1eX19fXl1bWVhWVldYWlxdXl9fXl1bWldWVldYWltcXl5fXl1bWldWVldYWVtcXl5eXl1bWVdWVVdYWVtcXV5eXl1cWldWVVZXWFpbXF1eXl1cWldVVVZXWFpbXF1dXl1cWldVVFVWV1laW1xdXV1cWldVVFRVV1hZWlxcXV1cW1lXVVRUVVdYWVpbXF1dXFtZV1VUU1RVV1hZW1tcXFxbWVdVVFNUVVdYWVpbXFxcW1pYVlRTU1RWV1hZW1tbXFtaWFZUUlNTVVZYWVpbW1tbWlhXVVNSUlNVVlhZWltbW1taWFdVU1JSU1VWV1lZW1tbW1pYVlVTUVJTVVZXWVpbW1taWlhWVFNRUVNUVldYWVpbW1taWVdVVFJRUVJUVVdYWVpaW1pZWFZUU1FRUlNUVldYWVpaWllYVlRTUVBRUlNVVldYWVlZWVhWVVNSUFBRUlNVVldYWVlZWFdVVFJRUFBRUlNVVldYWFlZWFdVU1JQUFBRU1RVVldYWFhYV1ZUU1FPT1BSU1RWVldYWFhYVlVTUVBPT1BSU1RVVldXWFhXVlRTUU9PT1BSU1RVVldXV1dWVVNSUE9OT1BSU1RVVlZXV1dWVVNSUE9OT1BRUlRVVlZXV1dWVFNRUE5OT1BSU1RVVlZWVlVUU1FQTU5OUFBRUlRVVVVWVlVUU1FQTU5OT1BRUlNUVVVWVlVUU1FPTk1NT09QUVJTVFVVVVVUUlFPTk1NTk9QUVJTVFVVVVRTUlBPTU1NTk9QUVJTVFRVVFRTUVBOTUxMTU5PUFFSUlNUVFRTUVBOTUxMTE1OT1BRUlJTU1NTUVBPTU1MTExNTk9QUVJSUlNTUlFPTk1MTExMTU5PUFBRUlJSUlFPTk1MTExMTE1OT1BRUVJSUlFQTk1MTEtLTE1OT1BRUVFRUVFPTk1MS0tLTE1OT09QUVFRUVBPTUxLS0tLTE1OTk9QUFBQT09OTUxLS0tLTE1OTk9PT1BQT05NTExLS0tLTE1OTk9PT09PTk1NTExLS0tMTE1OTk5PT09OTk1MTEtLSktLTE1NTk5OTk5NTUxMS0tKSkpLTE1NTU5OTk1NTExLS0pKSktLTE1NTU5OTU1MTEtLSkpKSktLTE1NTU1NTUxMS0tKSkpKSktLTE1NTU1NTExLS0pKSkpKSktMTE1NTUxMTEtLSkpKSkpKSktMTExMTExMTEtLSkpKSkpKSktMTExMTExMS0tKSkpKSkpKSktMTExMTEtLS0tKSkpKSkpKSktLTExMTEtLSkpKSkpKSkpKS0tMTExLS0tKSkpKSkpKSkpKS0tLTEtLSklKSkpKSkpKSkpLS0tLSklJSkpKSkpKSkpKSkpLS0tKSkpJSklKSkpKSkpKSkpKS0pKSkpJSUlKSkpKSkpKSkpKSkpKSkpJSUlJSkpKSkpKSkpKSkpKSkpJSUlJSUlKSkpKSkpKSkpKSkpJSUlJSUlJSUlKSkpKSkpKSklJSUlJSUlJSUlJSkpKSkpKSklJSUlJSUlJSUlJSkpKSklJSUlJSUlJSUlJSUlJSkpJSUlJSUlJSUlJSUlJSUlJSklJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSQ=="),o.current.volume=.5},[])
const u=async()=>{if(t)try{const e=[],{data:r,error:n}=await Qi.from("tickets").select("*").order("created_at",{ascending:!1}).limit(30)
if(n&&n.message,r&&r.length>0){const n=c?r:r.filter(e=>e.user_id===t.id)
for(const t of n)e.push({id:"ticket-".concat(t.id),type:"new_ticket",ticket_id:t.id,ticket_subject:t.subject,from_username:t.username,from_user_id:t.user_id,message_preview:t.message.substring(0,100)+(t.message.length>100?"...":""),created_at:t.created_at,read:d("ticket-".concat(t.id))})}const{data:a,error:i}=await Qi.from("ticket_messages").select("*").order("created_at",{ascending:!1}).limit(50)
if(i&&i.message,a&&a.length>0){let n=a
if(c)n=a.filter(e=>!e.is_owner)
else{const e=(null==r?void 0:r.filter(e=>e.user_id===t.id).map(e=>e.id))||[]
n=a.filter(t=>t.is_owner&&e.includes(t.ticket_id))}const s=new Map
for(const e of n)s.has(e.ticket_id)||s.set(e.ticket_id,e)
for(const[,t]of s)if(!e.find(e=>e.id==="ticket-".concat(t.ticket_id))){const n=null==r?void 0:r.find(e=>e.id===t.ticket_id)
e.push({id:"msg-".concat(t.id),type:"new_message",ticket_id:t.ticket_id,ticket_subject:(null==n?void 0:n.subject)||"Nouveau message",from_username:t.username,from_user_id:t.user_id,message_preview:t.message.substring(0,100)+(t.message.length>100?"...":""),created_at:t.created_at,read:d("msg-".concat(t.id))})}}e.sort((e,t)=>new Date(t.created_at).getTime()-new Date(e.created_at).getTime())
const u=e.filter(e=>!e.read).length
u>l.current&&l.current>0&&o.current&&(o.current.currentTime=0,o.current.play().catch(()=>{})),l.current=u,s(t=>JSON.stringify(t)!==JSON.stringify(e)?e:t)}catch(e){}},d=e=>{const r=localStorage.getItem("read_notifications_".concat(null==t?void 0:t.id))||"[]"
try{return JSON.parse(r).includes(e)}catch(jl){return!1}}
nr.useEffect(()=>{u()
const e=setInterval(u,500),t=Qi.channel("inbox-tickets-live").on("postgres_changes",{event:"*",schema:"public",table:"tickets"},()=>{u()}).subscribe(),r=Qi.channel("inbox-messages-live").on("postgres_changes",{event:"*",schema:"public",table:"ticket_messages"},()=>{u()}).subscribe()
return()=>{clearInterval(e),Qi.removeChannel(t),Qi.removeChannel(r)}},[null==t?void 0:t.id])
const h=e=>{const t=new Date(e),r=(new Date).getTime()-t.getTime()
return r<6e4?"\xc0 l'instant":r<36e5?"Il y a ".concat(Math.floor(r/6e4)," min"):r<864e5?"Il y a ".concat(Math.floor(r/36e5),"h"):t.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})},p=n.filter(e=>!e.read).length
return er.jsx("div",{className:"settings-overlay",onClick:e,children:er.jsxs("div",{className:"settings-modal",onClick:e=>e.stopPropagation(),style:{maxWidth:"500px",maxHeight:"80vh"},children:[er.jsxs("div",{className:"settings-header",children:[er.jsxs("h2",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-inbox"}),"Inbox",p>0&&er.jsx("span",{style:{background:"#ff6b6b",color:"white",padding:"2px 8px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600},children:p})]}),er.jsxs("div",{style:{display:"flex",gap:"8px"},children:[p>0&&er.jsx("button",{onClick:()=>{if(!t)return
const e="read_notifications_".concat(t.id),r=n.map(e=>e.id)
localStorage.setItem(e,JSON.stringify(r.slice(-100))),s(e=>e.map(e=>({...e,read:!0})))},style:{background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"8px",padding:"8px 12px",cursor:"pointer",color:"var(--text-secondary)",fontSize:"0.85rem",transition:"all 0.2s"},title:"Tout marquer comme lu",children:er.jsx("i",{className:"fas fa-check-double"})}),er.jsx("button",{className:"settings-close",onClick:e,children:er.jsx("i",{className:"fas fa-times"})})]})]}),er.jsx("div",{className:"settings-content",style:{padding:"0",maxHeight:"60vh",overflowY:"auto"},children:a?er.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[er.jsx("span",{className:"spinner",style:{width:"32px",height:"32px"}}),er.jsx("p",{style:{marginTop:"15px",color:"var(--text-secondary)"},children:"Chargement..."})]}):0===n.length?er.jsxs("div",{style:{textAlign:"center",padding:"40px",color:"var(--text-muted)"},children:[er.jsx("i",{className:"fas fa-inbox",style:{fontSize:"3rem",marginBottom:"15px",opacity:.5}}),er.jsx("p",{children:"Aucune notification"})]}):er.jsx("div",{style:{display:"flex",flexDirection:"column"},children:n.map(n=>er.jsxs("div",{onClick:()=>((e=>{if(!t)return
const r="read_notifications_".concat(t.id),n=localStorage.getItem(r)||"[]"
try{const t=JSON.parse(n)
t.includes(e)||(t.push(e),t.length>100&&t.shift(),localStorage.setItem(r,JSON.stringify(t)))}catch(jl){localStorage.setItem(r,JSON.stringify([e]))}s(t=>t.map(t=>t.id===e?{...t,read:!0}:t))})(n.id),e(),void r("/tickets")),style:{padding:"16px 20px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",transition:"background 0.2s",background:n.read?"transparent":"rgba(77, 171, 247, 0.08)",display:"flex",gap:"12px",alignItems:"flex-start"},onMouseEnter:e=>e.currentTarget.style.background="rgba(255, 255, 255, 0.05)",onMouseLeave:e=>e.currentTarget.style.background=n.read?"transparent":"rgba(77, 171, 247, 0.08)",children:[!n.read&&er.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#4dabf7",flexShrink:0,marginTop:"6px"}}),er.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"new_ticket"===n.type?"rgba(81, 207, 102, 0.2)":"rgba(77, 171, 247, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:er.jsx("i",{className:"fas ".concat("new_ticket"===n.type?"fa-ticket-alt":"fa-comment"),style:{color:"new_ticket"===n.type?"#51cf66":"#4dabf7",fontSize:"1rem"}})}),er.jsxs("div",{style:{flex:1,minWidth:0},children:[er.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"},children:[er.jsx("span",{style:{fontWeight:n.read?500:600,color:"var(--text-primary)",fontSize:"0.9rem"},children:"new_ticket"===n.type?"Nouveau ticket":"Nouvelle r\xe9ponse"}),er.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",flexShrink:0},children:h(n.created_at)})]}),er.jsxs("p",{style:{margin:"0 0 4px",color:"var(--text-secondary)",fontSize:"0.85rem",fontWeight:500},children:[er.jsx("i",{className:"fas fa-user",style:{marginRight:"6px",opacity:.7}}),n.from_username]}),er.jsx("p",{style:{margin:0,color:"var(--text-muted)",fontSize:"0.85rem",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.message_preview})]}),er.jsx("i",{className:"fas fa-chevron-right",style:{color:"var(--text-muted)",fontSize:"0.8rem",alignSelf:"center"}})]},n.id))})}),er.jsxs("div",{className:"settings-footer",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[er.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:[n.length," notification",1!==n.length?"s":""]}),er.jsx("button",{className:"btn btn-outline",onClick:e,children:"Fermer"})]})]})})},bo=e=>{if(null==e)return""
const t=String(e),r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}
return t.replace(/[&<>"'/]/g,e=>r[e]||e)},yo=e=>{if(null==e)return""
let t=String(e)
const r=e=>{if("undefined"!=typeof DOMParser)try{return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent||""}catch(jl){}return e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&amp;/g,"&")}
for(let n=0;n<3;n++){const e=r(t)
if(e===t)break
t=e}return t},vo=e=>e&&"string"==typeof e?e.replace(/[<>'"`;\\]/g,"").replace(/javascript:/gi,"").replace(/on\w+=/gi,"").trim().slice(0,500):"",xo="Dbs2024SecureKeyStorage",wo=(e,t)=>{if(!e||!t)return
const r=(e=>{if(!e)return""
let t=""
for(let r=0;r<e.length;r++){const n=xo.charCodeAt(r%27),s=e.charCodeAt(r)
t+=String.fromCharCode(s^n)}return btoa(t)})(t)
localStorage.setItem("api_key_encrypted_".concat(e),r),localStorage.removeItem("api_key_".concat(e))},ko=e=>{if(!e)return null
const t=localStorage.getItem("api_key_encrypted_".concat(e))
if(t)return(e=>{if(!e)return""
try{const t=atob(e)
let r=""
for(let e=0;e<t.length;e++){const n=xo.charCodeAt(e%27),s=t.charCodeAt(e)
r+=String.fromCharCode(s^n)}return r}catch(t){return""}})(t)
const r=localStorage.getItem("api_key_".concat(e))
return r?(wo(e,r),r):null},jo=new Map,So=(e,t=5,r=9e5)=>{const n=Date.now(),s=jo.get(e)
return!s||n>s.resetTime?(jo.set(e,{count:1,resetTime:n+r}),!0):!(s.count>=t||(s.count++,0))},_o=e=>!(!e||"string"!=typeof e)&&[/<script[^>]*>.*?<\/script>/gi,/javascript:/gi,/on\w+\s*=/gi,/<iframe/gi,/eval\s*\(/gi,/expression\s*\(/gi].some(t=>t.test(e)),No=[/https?:\/\/[^\s]+/gi,/www\.[^\s]+/gi,/[a-zA-Z0-9-]+\.(com|net|org|io|gg|me|co|fr|de|uk|ru|cn|xyz|info|biz|tv|cc|ws|tk|ml|ga|cf|gq|link|click|online|site|website|space|fun|top|live|shop|store|app|dev|tech|cloud|pro|zone|host|email|page|rocks|world|today|life|network|solutions|agency|digital|media|social|group|team|club|chat|community|forum|blog|news|wiki|support|help|center|zone|services|business|company|corp|inc|ltd|llc|gmbh)[^\s]*/gi,/[a-zA-Z0-9-]+\s*\.\s*(com|net|org|io|gg|me|co|fr)/gi,/[a-zA-Z0-9-]+\s*\[\s*\.\s*\]\s*(com|net|org|io|gg|me|co|fr)/gi,/[a-zA-Z0-9-]+\s*\(\s*\.\s*\)\s*(com|net|org|io|gg|me|co|fr)/gi,/bit\.ly|tinyurl|t\.co|goo\.gl|shorturl|rebrand\.ly|cutt\.ly|ow\.ly/gi],Eo=[/discord\.gg\/[a-zA-Z0-9]+/gi,/discord\.com\/invite\/[a-zA-Z0-9]+/gi,/discordapp\.com\/invite\/[a-zA-Z0-9]+/gi,/discord\s*\.\s*gg\s*\/\s*[a-zA-Z0-9]+/gi,/discord\s*\[\s*\.\s*\]\s*gg/gi,/discord\s*\(\s*\.\s*\)\s*gg/gi,/dsc\.gg\/[a-zA-Z0-9]+/gi,/invite\s*:?\s*[a-zA-Z0-9]{6,}/gi],To=[/(.)\1{5,}/g,/(\b\w+\b)(\s+\1){3,}/gi,/(free|gratuit|giveaway|nitro|gift|cadeau|money|argent|crypto|bitcoin|earn|gagner)\s*(discord|server|serveur|join|rejoins)/gi,/join\s*(my|our|mon|notre)\s*(server|serveur|discord|channel)/gi,/check\s*(out|my|this)\s*(link|server|discord)/gi,/dm\s*(me|moi)\s*(for|pour)/gi,/(buy|sell|achet|vend)\s*(account|compte|nitro|boost)/gi],Co=[/<script[^>]*>/gi,/<\/script>/gi,/javascript\s*:/gi,/on\w+\s*=/gi,/<iframe/gi,/<object/gi,/<embed/gi,/<svg[^>]*onload/gi,/data\s*:/gi,/vbscript\s*:/gi,/expression\s*\(/gi,/eval\s*\(/gi,/document\s*\./gi,/window\s*\./gi,/\$\s*\(/gi,/innerHTML/gi,/outerHTML/gi],Ro=new Map,Po=(e,t,r={})=>{const{maxLength:n=500,rateLimit:s={maxMessages:5,windowMs:1e4},allowLinks:a=!1,allowDiscord:i=!1}=r
if(!e||"string"!=typeof e)return{isValid:!1,sanitizedMessage:"",error:"Message vide",errorCode:"EMPTY"}
const o=e.trim()
if(!o)return{isValid:!1,sanitizedMessage:"",error:"Message vide",errorCode:"EMPTY"}
if(o.length>n)return{isValid:!1,sanitizedMessage:"",error:"Message trop long (max ".concat(n," caract\xe8res)"),errorCode:"TOO_LONG"}
const l=Date.now(),c=Ro.get(t)||{timestamps:[],lastMessage:"",repeatCount:0}
if(c.timestamps=c.timestamps.filter(e=>l-e<s.windowMs),c.timestamps.length>=s.maxMessages)return{isValid:!1,sanitizedMessage:"",error:"Trop de messages. Attendez quelques secondes.",errorCode:"RATE_LIMITED"}
if(c.lastMessage===o.toLowerCase()){if(c.repeatCount++,c.repeatCount>=3)return{isValid:!1,sanitizedMessage:"",error:"Message r\xe9p\xe9titif d\xe9tect\xe9",errorCode:"SPAM_DETECTED"}}else c.repeatCount=0
for(const d of Co)if(d.test(o))return{isValid:!1,sanitizedMessage:"",error:"Contenu non autoris\xe9 d\xe9tect\xe9",errorCode:"XSS_DETECTED"}
if(!i)for(const d of Eo)if(d.test(o))return{isValid:!1,sanitizedMessage:"",error:"Les invitations Discord ne sont pas autoris\xe9es",errorCode:"BLOCKED_DISCORD"}
if(!a)for(const d of No)if(d.test(o))return{isValid:!1,sanitizedMessage:"",error:"Les liens ne sont pas autoris\xe9s",errorCode:"BLOCKED_LINK"}
for(const d of To)if(d.test(o))return{isValid:!1,sanitizedMessage:"",error:"Message d\xe9tect\xe9 comme spam",errorCode:"SPAM_DETECTED"}
let u=o.replace(/[<>]/g,"").replace(/\\/g,"").slice(0,n)
return c.timestamps.push(l),c.lastMessage=o.toLowerCase(),Ro.set(t,c),{isValid:!0,sanitizedMessage:u}},Ao={email:["snusbase","leakosint","leakcheck","breachbase","intelvault","breachdirectory","hackcheck","osintkit","breachvip","breachlookup","xosint","melissa","breachrip","hudsonrock","wentyn","akula","stealerlogs","oathnet","seon","github","indicia","osintcat","leaksight","inf0sec","intelbase","intelfetch"],ip_v4:["ipinfo","shodan","breachdirectory","breachvip","breachbase","stealerlogs","leaksight","cordcat","intelbase","intelfetch","crowsint"],ip_v6:["ipinfo","shodan","intelbase"],domain:["wentyn","akula","osintcat","breachdirectory","intelfetch","leaksight","stealerlogs","oathnet","inf0sec"],phone:["truecaller","seon","osintkit","breachvip","breachbase","melissa","stealerlogs","intelbase","indicia","leaksight","inf0sec"],discord_id:["cordcat","crowsint","intelfetch","oathnet","breachvip","breachrip","inf0sec","breachhub"],username:["snusbase","leakosint","memory","breachbase","breachdirectory","hackcheck","breachvip","leaksight","stealerlogs","crowsint","inf0sec","breachrip","breachlookup","xosint"],hash_md5:["snusbase","leakosint","breachbase"],hash_sha1:["snusbase","leakosint","breachbase"],hash_sha256:["snusbase","leakosint","breachbase"],bitcoin_address:["crypto"],ethereum_address:["crypto"],url:["leaksight","intelbase"],steam_id:["steam","breachhub","crowsint","breachvip"],cfx_license:["breachhub","inf0sec"],fivem_license:["breachhub","inf0sec"],minecraft_uuid:["crowsint","intelbase"],minecraft_username:["crowsint","intelbase"],hwid:["breachhub","leaksight","stealerlogs"],vin:["vindecoder"],bin:["binlist"],ssn:["idleakcheck","inf0sec"],cpf:["leaksight"],twitter_username:["osintcat","leaksight"],github_username:["github","intelfetch","crowsint","intelbase"],reddit_username:["reddit"],tiktok_username:["tiktok"],roblox_id:["oathnet"],subnet:["leaksight","shodan"],name:["osintkit","melissa","idleakcheck","indicia","breachvip","inf0sec","stealerlogs"],password:["hackcheck","breachbase","breachrip","leaksight","stealerlogs"],unknown:["snusbase","leakosint","leakcheck","breachhub","xosint"]},Oo=[{type:"email",pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,icon:"fa-envelope",iconClass:"fas",label:"Email",priority:100},{type:"fivem_license",pattern:/^license:[a-f0-9]{40}$/i,icon:"fa-gamepad",iconClass:"fas",label:"FiveM License",priority:99},{type:"cfx_license",pattern:/^[a-f0-9]{40}$/i,icon:"fa-gamepad",iconClass:"fas",label:"CFX License",priority:98},{type:"steam_id",pattern:/^7656119\d{10}$/,icon:"fa-steam",iconClass:"fab",label:"Steam ID",priority:91},{type:"steam_id",pattern:/^STEAM_[0-5]:[01]:\d+$/,icon:"fa-steam",iconClass:"fab",label:"Steam ID",priority:91},{type:"minecraft_uuid",pattern:/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i,icon:"fa-cube",iconClass:"fas",label:"MC UUID",priority:90},{type:"hwid",pattern:/^[A-F0-9]{32}$/i,icon:"fa-microchip",iconClass:"fas",label:"HWID",priority:89},{type:"vin",pattern:/^[A-HJ-NPR-Z0-9]{17}$/i,icon:"fa-car",iconClass:"fas",label:"VIN",priority:88},{type:"bin",pattern:/^\d{6,8}$/,icon:"fa-credit-card",iconClass:"fas",label:"BIN",priority:50},{type:"ssn",pattern:/^\d{3}-?\d{2}-?\d{4}$/,icon:"fa-id-card",iconClass:"fas",label:"SSN",priority:87},{type:"cpf",pattern:/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,icon:"fa-id-card",iconClass:"fas",label:"CPF",priority:86},{type:"ip_v4",pattern:/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,icon:"fa-network-wired",iconClass:"fas",label:"IPv4",priority:95},{type:"ip_v6",pattern:/^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::$|^(?:[0-9a-fA-F]{1,4}:){1,7}:$/,icon:"fa-network-wired",iconClass:"fas",label:"IPv6",priority:94},{type:"subnet",pattern:/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/\d{1,2}$/,icon:"fa-project-diagram",iconClass:"fas",label:"Subnet",priority:93},{type:"url",pattern:/^https?:\/\/[^\s]+$/i,icon:"fa-link",iconClass:"fas",label:"URL",priority:85},{type:"domain",pattern:/^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,icon:"fa-globe",iconClass:"fas",label:"Domain",priority:80},{type:"phone",pattern:/^\+\d{7,15}$/,icon:"fa-phone",iconClass:"fas",label:"Phone",priority:92},{type:"phone",pattern:/^0[1-9]\d{8}$/,icon:"fa-phone",iconClass:"fas",label:"Phone",priority:91},{type:"phone",pattern:/^[1-9]\d{9,14}$/,icon:"fa-phone",iconClass:"fas",label:"Phone",priority:88},{type:"discord_id",pattern:/^\d{17,19}$/,icon:"fa-discord",iconClass:"fab",label:"Discord ID",priority:95},{type:"roblox_id",pattern:/^\d{7,9}$/,icon:"fa-gamepad",iconClass:"fas",label:"Roblox ID",priority:40},{type:"bitcoin_address",pattern:/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/,icon:"fa-bitcoin",iconClass:"fab",label:"Bitcoin",priority:90},{type:"ethereum_address",pattern:/^0x[a-fA-F0-9]{40}$/,icon:"fa-ethereum",iconClass:"fab",label:"Ethereum",priority:90},{type:"hash_md5",pattern:/^[a-fA-F0-9]{32}$/,icon:"fa-key",iconClass:"fas",label:"MD5",priority:70},{type:"hash_sha1",pattern:/^[a-fA-F0-9]{40}$/,icon:"fa-key",iconClass:"fas",label:"SHA1",priority:70},{type:"hash_sha256",pattern:/^[a-fA-F0-9]{64}$/,icon:"fa-key",iconClass:"fas",label:"SHA256",priority:70},{type:"twitter_username",pattern:/^@[a-zA-Z0-9_]{1,15}$/,icon:"fa-twitter",iconClass:"fab",label:"Twitter",priority:75},{type:"github_username",pattern:/^gh:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/,icon:"fa-github",iconClass:"fab",label:"GitHub",priority:75},{type:"reddit_username",pattern:/^u\/[a-zA-Z0-9_-]{3,20}$/,icon:"fa-reddit",iconClass:"fab",label:"Reddit",priority:75},{type:"tiktok_username",pattern:/^@[a-zA-Z0-9_.]{2,24}$/,icon:"fa-tiktok",iconClass:"fab",label:"TikTok",priority:74},{type:"minecraft_username",pattern:/^mc:[a-zA-Z0-9_]{3,16}$/,icon:"fa-cube",iconClass:"fas",label:"Minecraft",priority:73},{type:"name",pattern:/^[A-Za-z\xc0-\xff]{2,}\s+[A-Za-z\xc0-\xff]{2,}(\s+[A-Za-z\xc0-\xff]{2,})?$/,icon:"fa-user-tag",iconClass:"fas",label:"Name",priority:60},{type:"username",pattern:/^[a-zA-Z0-9_.-]{3,32}$/,icon:"fa-user",iconClass:"fas",label:"Username",priority:50}],Io=e=>e!==(new Date).toISOString().split("T")[0],zo=e=>{switch(null==e?void 0:e.toLowerCase()){case"beginner":return"beginner"
case"pro":return"pro"
case"premium":return"premium"
case"beta":return"beta"
case"blocked":return"blocked"
default:return"free"}},Lo=(e,t)=>{const r=zo(e),n=(e=>{switch(zo(e)){case"free":default:return 10
case"beginner":return 100
case"pro":return 500
case"premium":return 5e3
case"beta":return 30
case"blocked":return 0}})(r)
return{plan:r,creditsPerDay:"number"==typeof t&&t>0?t:n}},Do=async e=>{try{const{data:t}=await Qi.from("user_plans").select("plan, credits_per_day").eq("user_id",e).maybeSingle()
if(!t){try{await Qi.from("user_plans").insert({user_id:e,plan:"free",credits_per_day:10})}catch(jl){}return Lo("free",10)}return Lo(t.plan,t.credits_per_day)}catch(jl){return Lo("free",10)}},Uo=async(e,t,r=0)=>{var n,s,a
const i=String(null!=(n=vo(e))?n:"").trim()
if(!i)throw new Error("Requ\xeate invalide")
const o=ko(t)
let l
try{l=await(async()=>{var e,t
const{data:r,error:n}=await Qi.auth.getSession()
if(!n&&(null==(e=r.session)?void 0:e.access_token)&&(r.session.expires_at||0)-Math.floor(Date.now()/1e3)>60)return r.session.access_token
try{const{data:{session:e},error:t}=await Qi.auth.refreshSession()
if(!t&&(null==e?void 0:e.access_token))return e.access_token}catch(jl){}const{data:s}=await Qi.auth.getSession()
if(null==(t=s.session)?void 0:t.access_token)return s.session.access_token
throw new Error("User not authenticated")})()}catch(jl){throw new Error("User not authenticated")}const c={Authorization:"Bearer ".concat(l)}
o&&(c["X-API-Key"]=o)
const{data:u,error:d}=await Qi.functions.invoke("api-search",{body:{query:i,userId:t},headers:c})
if(d){const n=d.message||""
if((n.includes("401")||n.toLowerCase().includes("unauthorized")||n.toLowerCase().includes("invalid token")||n.toLowerCase().includes("expired"))&&r<1)try{return await Qi.auth.refreshSession(),Uo(e,t,r+1)}catch(jl){throw new Error("Session expired. Please refresh the page.")}throw new Error(d.message||"Search request failed")}const h=Array.isArray(null==u?void 0:u.breaches)?u.breaches:[],p=Array.isArray(null==u?void 0:u.stealers)?u.stealers:[]
return{results:Array.isArray(null==u?void 0:u.results)?u.results:Array.isArray(u)?u:[],breaches:h,stealers:p,creditsRemaining:null!=(a=null!=(s=null==u?void 0:u.credits_remaining)?s:null==u?void 0:u.creditsRemaining)?a:void 0}},Fo=async e=>{try{const{creditsPerDay:t,plan:r}=await Do(e)
if("blocked"===r)return 0
const{data:n,error:s}=await Qi.from("user_credits").select("credits_remaining, last_reset").eq("user_id",e).single()
return s||!n||Io(n.last_reset)?t:n.credits_remaining}catch(jl){return 0}},Bo=({onClose:e})=>{var t,r
const{user:n}=to(),[s,a]=nr.useState(null),[i,o]=nr.useState(null),[l,c]=nr.useState(0),[u,d]=nr.useState(!0),[h,p]=nr.useState(!1),[f,m]=nr.useState(!1),[g,b]=nr.useState(!1),y=!!i&&!["free","blocked"].includes((null==(r=null==(t=i.plan)?void 0:t.toLowerCase)?void 0:r.call(t))||"")
nr.useEffect(()=>{let e=!0;(async()=>{var t
if(n)try{const{data:r}=await Qi.from("user_plans").select("plan, credits_per_day").eq("user_id",n.id).maybeSingle(),s=r||{plan:"free",credits_per_day:0}
if(e&&o(s),"free"===(null==(t=s.plan)?void 0:t.toLowerCase()))return void(e&&(c(0),d(!1)))
const i=ko(n.id)
if(i&&e)a({api_key:i,created_at:(new Date).toISOString(),requests_total:0,is_active:!0})
else if(e){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let t="sk_live_"
for(let r=0;r<48;r++)t+=e.charAt(Math.floor(Math.random()*e.length))
wo(n.id,t),a({api_key:t,created_at:(new Date).toISOString(),requests_total:0,is_active:!0})}const l=await Fo(n.id)
e&&c(l)}catch(r){}finally{e&&d(!1)}else e&&d(!1)})()
const t=setInterval(async()=>{if(n&&y&&e){const t=await Fo(n.id)
e&&c(t)}},2e3)
return()=>{e=!1,clearInterval(t)}},[n,y])
const v=async()=>{if(n&&y){b(!0)
try{const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let t="sk_live_"
for(let n=0;n<48;n++)t+=e.charAt(Math.floor(Math.random()*e.length))
wo(n.id,t)
const r={api_key:t,created_at:(new Date).toISOString(),requests_total:0,is_active:!0}
a(r),m(!0)}catch(e){alert("Error generating API key")}finally{b(!1)}}}
return er.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"20px"},onClick:e,children:er.jsxs("div",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)",width:"100%",maxWidth:"600px",maxHeight:"90vh",overflow:"auto"},onClick:e=>e.stopPropagation(),children:[er.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[er.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[er.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"8px",background:"#1a1a1a",border:"1px solid #333",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",fontWeight:700,color:"white"},children:"</>"}),er.jsxs("div",{children:[er.jsx("h2",{style:{margin:0,fontSize:"1.3rem"},children:"API Access"}),er.jsx("p",{style:{margin:0,fontSize:"0.85rem",color:"var(--text-secondary)"},children:"API for programmatic searches"})]})]}),er.jsx("button",{onClick:e,style:{background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"1.5rem",padding:"4px"},children:"\xd7"})]}),er.jsx("div",{style:{padding:"20px"},children:u?er.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[er.jsx("i",{className:"fas fa-spinner fa-spin",style:{fontSize:"2rem",color:"var(--primary)"}}),er.jsx("p",{style:{marginTop:"12px",color:"var(--text-secondary)"},children:"Loading..."})]}):y?s?er.jsxs(er.Fragment,{children:[er.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-md)",padding:"16px",marginBottom:"20px"},children:[er.jsx("label",{style:{display:"block",fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"8px"},children:"Your API Key"}),er.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[er.jsx("code",{style:{flex:1,background:"var(--bg-card)",padding:"12px",borderRadius:"var(--radius-sm)",fontSize:"0.9rem",fontFamily:"monospace",wordBreak:"break-all",border:"1px solid var(--border-color)"},children:(x=s.api_key,f?x:x.substring(0,12)+"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022")}),er.jsx("button",{onClick:()=>m(!f),style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",padding:"12px",cursor:"pointer",color:"var(--text-primary)"},title:f?"Hide":"Show",children:er.jsx("i",{className:"fas fa-eye".concat(f?"-slash":"")})}),er.jsx("button",{onClick:async()=>{if(s)try{await navigator.clipboard.writeText(s.api_key),p(!0),setTimeout(()=>p(!1),2e3)}catch(e){}},style:{background:h?"#10b981":"var(--primary)",border:"none",borderRadius:"var(--radius-sm)",padding:"12px",cursor:"pointer",color:"white",transition:"background 0.2s"},title:"Copy",children:er.jsx("i",{className:"fas fa-".concat(h?"check":"copy")})})]})]}),er.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"12px",marginBottom:"20px"},children:[er.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-md)",padding:"16px",textAlign:"center"},children:[er.jsx("div",{style:{fontSize:"1.5rem",fontWeight:700,color:"var(--primary)"},children:l}),er.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Credits Remaining"})]}),er.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-md)",padding:"16px",textAlign:"center"},children:[er.jsx("div",{style:{fontSize:"1.5rem",fontWeight:700,color:"#ffd700"},children:(null==i?void 0:i.credits_per_day)||100}),er.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Credits / Day"})]}),er.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-md)",padding:"16px",textAlign:"center"},children:[er.jsx("div",{style:{fontSize:"1.5rem",fontWeight:700,color:s.is_active?"#10b981":"#ef4444"},children:s.is_active?"Active":"Inactive"}),er.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Status"})]})]}),er.jsxs("div",{style:{background:"rgba(255, 215, 0, 0.1)",border:"1px solid rgba(255, 215, 0, 0.3)",borderRadius:"var(--radius-md)",padding:"12px 16px",marginBottom:"20px",fontSize:"0.85rem",color:"#ffd700",display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-info-circle"}),er.jsx("span",{children:"Credits are shared between the website and API. Each search consumes 1 credit."})]}),er.jsxs("button",{onClick:v,disabled:g,style:{width:"100%",padding:"12px",background:"transparent",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",color:"var(--text-secondary)",cursor:g?"not-allowed":"pointer",fontSize:"0.9rem",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[er.jsx("i",{className:"fas fa-".concat(g?"spinner fa-spin":"sync-alt")}),g?"Generating...":"Regenerate API Key"]}),er.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-md)",padding:"16px"},children:[er.jsxs("h3",{style:{margin:"0 0 12px 0",fontSize:"1rem"},children:[er.jsx("i",{className:"fas fa-book",style:{marginRight:"8px",color:"var(--primary)"}}),"API Documentation"]}),er.jsxs("div",{style:{fontSize:"0.9rem",color:"var(--text-secondary)"},children:[er.jsx("p",{style:{margin:"0 0 12px 0"},children:er.jsx("strong",{children:"Endpoint:"})}),er.jsx("code",{style:{display:"block",background:"var(--bg-card)",padding:"12px",borderRadius:"var(--radius-sm)",marginBottom:"16px",fontSize:"0.85rem",wordBreak:"break-all"},children:"POST https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search"}),er.jsx("p",{style:{margin:"0 0 8px 0"},children:er.jsx("strong",{children:"Headers:"})}),er.jsx("code",{style:{display:"block",background:"var(--bg-card)",padding:"12px",borderRadius:"var(--radius-sm)",marginBottom:"16px",fontSize:"0.85rem",whiteSpace:"pre-wrap"},children:"Content-Type: application/json\nX-API-Key: ".concat(f?s.api_key:"sk_live_\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022")}),er.jsx("p",{style:{margin:"0 0 8px 0"},children:er.jsx("strong",{children:"Body (JSON):"})}),er.jsx("code",{style:{display:"block",background:"var(--bg-card)",padding:"12px",borderRadius:"var(--radius-sm)",marginBottom:"16px",fontSize:"0.85rem",whiteSpace:"pre-wrap"},children:'{\n  "query": "email@example.com",\n  "limit": 100\n}'}),er.jsx("p",{style:{margin:"0 0 8px 0"},children:er.jsx("strong",{children:"cURL Example:"})}),er.jsx("code",{style:{display:"block",background:"var(--bg-card)",padding:"12px",borderRadius:"var(--radius-sm)",fontSize:"0.85rem",whiteSpace:"pre-wrap",overflowX:"auto"},children:'curl -X POST \\\n  https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search \\\n  -H "Content-Type: application/json" \\\n  -H "X-API-Key: '.concat(f?s.api_key:"YOUR_API_KEY",'" \\\n  -d \'{"query": "test@example.com"}\'')})]})]})]}):er.jsxs("div",{style:{textAlign:"center",padding:"40px 20px"},children:[er.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"50%",background:"#1a1a1a",border:"1px solid #333",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",color:"white",margin:"0 auto 20px"},children:er.jsx("i",{className:"fas fa-key"})}),er.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"1.2rem"},children:"Generate Your API Key"}),er.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"As a paid user (Beta, Beginner, Pro, or premium), you have access to our API for programmatic searches."}),er.jsxs("button",{onClick:v,disabled:g,className:"btn btn-primary",style:{padding:"14px 28px",fontSize:"1rem",display:"inline-flex",alignItems:"center",gap:"8px"},children:[er.jsx("i",{className:"fas fa-".concat(g?"spinner fa-spin":"key")}),g?"Generating...":"Generate My API Key"]})]}):er.jsxs("div",{style:{textAlign:"center",padding:"40px 20px"},children:[er.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"50%",background:"rgba(239, 68, 68, 0.15)",border:"1px solid rgba(239, 68, 68, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",color:"#ef4444",margin:"0 auto 20px"},children:er.jsx("i",{className:"fas fa-ban"})}),er.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"1.2rem"},children:"API Reserved for Paid Plans"}),er.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"20px",maxWidth:"420px",marginInline:"auto"},children:"Free accounts cannot generate API keys. Upgrade to Beta/Beginner/Pro/premium to unlock programmatic access."}),er.jsxs("a",{href:"/pricing",className:"btn btn-primary",style:{padding:"12px 20px",display:"inline-flex",gap:"8px",alignItems:"center"},children:[er.jsx("i",{className:"fas fa-arrow-up"}),"View Plans"]})]})})]})})
var x},Wo=["deee5dc2-e37e-48ba-8da2-1fb5945cd235","3e45559e-299c-4d49-9fe8-b2c77237d2c9","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","f479668f-4129-4c67-91bb-decba5a0e804","46eea62a-4835-4b54-a23e-c20aee355760","946f8b8b-6057-4dc9-9615-e1cfa8eb9c9f","c5ac1d65-40ac-4b53-85b3-8cea8fdfe491"],Vo=()=>{const[e,t]=nr.useState(!1),[r,n]=nr.useState(!1),[s,a]=nr.useState(!1),[i,o]=nr.useState(!1),[l,c]=nr.useState(0),[u,d]=nr.useState(!1),[,h]=nr.useState(0),p=nr.useRef(null),f=N(),m=T(),{user:g,logout:b}=to(),{language:y,setLanguage:v,t:x}=so(),w=!!g&&Wo.includes(g.id)
nr.useEffect(()=>{if(p.current)return
const e=(()=>{var e,t
const r=localStorage.getItem("seek_presence_id")
if(r)return r
const n="visit_".concat(null!=(t=null==(e=crypto.randomUUID)?void 0:e.call(crypto))?t:Math.random().toString(36).slice(2))
return localStorage.setItem("seek_presence_id",n),n})(),t=Qi.channel("site_presence",{config:{presence:{key:e}}})
p.current=t
const r=()=>{const e=t.presenceState(),r=Object.values(e).reduce((e,t)=>e+(Array.isArray(t)?t.length:0),0)
h(r>0?r:1)}
return t.on("presence",{event:"sync"},r).subscribe(e=>{"SUBSCRIBED"===e&&(t.track({user_id:null,ts:Date.now()}),r())}),()=>{Qi.removeChannel(t),p.current=null}},[]),nr.useEffect(()=>{var e
const t=p.current
t&&t.track({user_id:null!=(e=null==g?void 0:g.id)?e:null,ts:Date.now()})},[null==g?void 0:g.id]),nr.useEffect(()=>{(async()=>{if(g)try{d(!0)}catch(jl){d(!0)}else d(!1)})()},[g]),nr.useEffect(()=>{if(!g)return void c(0)
const e=async()=>{try{const e="read_notifications_".concat(g.id),t=localStorage.getItem(e)||"[]"
let r=[]
try{r=JSON.parse(t)}catch(jl){r=[]}let n=0
if(w){const{data:e}=await Qi.from("tickets").select("id").order("created_at",{ascending:!1}).limit(20)
if(e)for(const s of e)r.includes("ticket-".concat(s.id))||n++
const{data:t}=await Qi.from("ticket_messages").select("id").eq("is_owner",!1).order("created_at",{ascending:!1}).limit(30)
if(t)for(const s of t)r.includes("msg-".concat(s.id))||n++}else{const{data:e}=await Qi.from("tickets").select("id").eq("user_id",g.id)
if(e)for(const t of e){const{data:e}=await Qi.from("ticket_messages").select("id").eq("ticket_id",t.id).eq("is_owner",!0)
if(e)for(const t of e)r.includes("msg-".concat(t.id))||n++}}c(n)}catch(e){}}
e()
const t=window.setInterval(e,1e3),r=()=>{const e=new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleVQHAIve/NzFsKN+WjM5Z5Olr5h7WDgxQ1hufomEeWJNPD1MXGZ0eXhsXkxFRUlUX2dscW9pYltXWFxiZ2xua2hjX19hZWpucHBsZ2ViYmRnam1wb2xoZWNjZGdqbXBwbWpmZGRlZ2ptcG9saGVjY2RnZ2ptbmxnZGJhYmVnam1ubGhlY2JjZWdpbG5saGViYmJkZmlsbm1rZ2RiYmNlZ2lrbW1qZ2RiYmNlZ2lrbGxqZ2RhYGFjZWdqbG1qZ2RhYGFjZWdqbGxqZ2RhYGFjZWdqbGxqZ2RhYGBiZGZpamxrZ2RhYF9gYmRnaWtsaWdjYF9fYWNlaGpramdkYWBfYGJkZmhqamdkYWBfYGJkZmhqamdjYF9fYWNlaGlqaGViYF9fYGJkZmhpamdjYF5eX2BjZWdpamdhYF5dXmBiZGZoaGdjYF5dXmBiZGZoaGdhX15dXV9hY2VnaGhlYl9dXVxeYGJkZmhoZWFfXVtcXmBiZGZnZmNhXl1cXF5gYmRlZ2ZjYF5cW1xeYGJkZWdmY2BdXFtbXWBiZGVmZmNgXVtaWltdYGJjZWZlYl9cWllZW11fYWNlZWVjYF1bWVlZW15gYmNkZGNgXltaWFlaXF5gYWNkY2JgXVtZWFhaXF5gYWJjYmFfXFpZV1haXF1fYWJiYmFfXFpYV1hZW11fYGFiYmFfXFpYV1dZWl1eYGBhYWBfXVtZV1dYWlxdX2BhYWBfXFtZV1dYWVtdXmBgYGBfXFtZV1dYWVtcXl9gYGBfXFtZV1dYWVtcXl9fX19fXFtZV1ZXWFpbXV5fX19fXlxaWFdWV1haXF1eX19fXl1bWVhWVldYWlxdXl9fXl1bWldWVldYWltcXl5fXl1bWldWVldYWVtcXl5eXl1bWVdWVVdYWVtcXV5eXl1cWldWVVZXWFpbXF1eXl1cWldVVVZXWFpbXF1dXl1cWldVVFVWV1laW1xdXV1cW1dVVFRVV1hZWlxcXV1cW1lXVVRUVVdYWVpbXFxcW1pYVlRTU1RWV1hZW1tbXFtaWFZUUlNTVVZYWVpbW1tbWlhXVVNSUlNVVlhZWltbW1taWFdVU1JSU1VWV1lZW1tbW1pYVlVTUVJTVVZXWVpbW1taWlhWVFNRUVNUVldYWVpbW1taWVdVVFJRUVJUVVdYWVpaW1pZWFZUU1FRUlNUVldYWVpaWllYVlRTUVBRUlNVVldYWVlZWVhWVVNSUFBRUlNVVldYWVlZWFdVVFJRUFBRUlNVVldYWFlZWFdVU1JQUFBRU1RVVldYWFhYV1ZUU1FPT1BSU1RWVldYWFhYVlVTUVBPT1BSU1RVVldXWFhXVlRTUU9PT1BSU1RVVldXV1dWVVNSUE9OT1BSU1RVVlZXV1dWVVNSUE9OT1BRUlRVVlZXV1dWVFNRUE5OT1BSU1RVVlZWVlVUU1FQTU5OUFBRUlRVVVVWVlVUU1FQTU5OT1BRUlNUVVVWVlVUU1FPTk1NT09QUVJTVFVVVVVUUlFPTk1NTk9QUVJTVFVVVVRTUlBPTU1NTk9QUVJTVFRVVFRTUVBOTUxMTU5PUFFSUlNUVFRTUVBOTUxMTE1OT1BRUlJTU1NTUVBPTU1MTExNTk9QUVJSUlNTUlFPTk1MTExMTU5PUFBRUlJSUlFPTk1MTEtLTE1OT1BRUVFRUVFPTk1MS0tLTE1OT09QUVFRUVBPTUxLS0tLTE1OTk9QUFBQT09OTUxLS0tLTE1OTk9PT1BQT05NTExLS0tLTE1OTk9PT09PTk1NTExLS0tMTE1OTk5PT09OTk1MTEtLSktLTE1NTk5OTk5NTUxMS0tKSkpLTE1NTU5OTk1NTExLS0pKSktLTE1NTU5OTU1MTEtLSkpKSktLTE1NTU1NTUxMS0tKSkpKSktLTE1NTU1NTExLS0pKSkpKSktMTExMTExMTEtLSkpKSkpKSktMTExMTExMS0tKSkpKSkpKSktMTExMTEtLS0tKSkpKSkpKSktLTExMTEtLSkpKSkpKSkpKS0tMTExLS0tKSkpKSkpKSkpKSkpLS0tKSkpJSklKSkpKSkpKSkpKS0pKSkpJSUlKSkpKSkpKSkpKSkpKSkpJSUlJSkpKSkpKSkpKSkpKSkpJSUlJSUlKSkpKSkpKSkpKSkpJSUlJSUlJSUlKSkpKSkpKSklJSUlJSUlJSUlJSkpKSkpKSklJSUlJSUlJSUlJSkpKSklJSUlJSUlJSUlJSUlJSkpJSUlJSUlJSUlJSUlJSUlJSklJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSQ==")
e.volume=.5,e.play().catch(()=>{})},n=Qi.channel("navbar-tickets").on("postgres_changes",{event:"INSERT",schema:"public",table:"tickets"},()=>{w&&(r(),e())}).subscribe(),s=Qi.channel("navbar-messages").on("postgres_changes",{event:"INSERT",schema:"public",table:"ticket_messages"},t=>{const n=t.new;(w&&!n.is_owner||!w&&n.is_owner)&&(r(),e())}).subscribe()
return()=>{window.clearInterval(t),Qi.removeChannel(n),Qi.removeChannel(s)}},[null==g?void 0:g.id,w])
const k=e=>f.pathname===e,j=async()=>{try{await b()}catch(e){}finally{t(!1),m("/")}}
return er.jsxs(er.Fragment,{children:[er.jsx("div",{style:{padding:"12px 20px 0 20px"},children:er.jsx("nav",{style:{background:"#000000",border:"1px solid #333",borderRadius:"12px",padding:"0 24px",position:"sticky",top:"12px",zIndex:1e3,maxWidth:"1200px",margin:"0 auto",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.3)"},children:er.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"50px"},children:[er.jsx(Mr,{to:"/",className:"navbar-logo",style:{display:"flex",alignItems:"center",textDecoration:"none"},children:er.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:er.jsx("span",{className:"logo-title",style:{fontSize:"1.3rem",fontWeight:700,color:"white",lineHeight:1},children:"Dbs"})})}),er.jsxs("ul",{style:{display:"flex",alignItems:"center",gap:"4px",listStyle:"none",margin:0,padding:0},className:"desktop-nav",children:[er.jsx("li",{children:er.jsx(Mr,{to:"/",className:"nav-link ".concat(k("/")?"active":""),children:x("nav.home")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/features",className:"nav-link ".concat(k("/features")?"active":""),children:x("nav.features")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/pricing",className:"nav-link ".concat(k("/pricing")?"active":""),children:x("nav.pricing")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/about",className:"nav-link ".concat(k("/about")?"active":""),children:x("nav.about")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/contact",className:"nav-link ".concat(k("/contact")?"active":""),children:x("nav.contact")})}),g&&u&&er.jsx("li",{children:er.jsx(Mr,{to:"/tickets",className:"nav-link ".concat(k("/tickets")?"active":""),children:x("nav.tickets")})}),g&&u&&er.jsx("li",{children:er.jsx(Mr,{to:"/api-docs",className:"nav-link ".concat(k("/api-docs")?"active":""),children:x("nav.api")})})]}),er.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},className:"desktop-nav",children:[er.jsxs("button",{onClick:()=>v("fr"===y?"en":"fr"),style:{background:"transparent",border:"1px solid #444",color:"#ffffff",padding:"6px 10px",borderRadius:"6px",cursor:"pointer",fontSize:"0.8rem",fontWeight:600,transition:"all 0.2s",display:"flex",alignItems:"center",gap:"4px"},className:"language-toggle",children:[er.jsx("i",{className:"fas fa-globe"}),"fr"===y?"EN":"FR"]}),g?er.jsxs(er.Fragment,{children:[g&&u&&er.jsx("button",{onClick:()=>o(!0),style:{background:"transparent",border:"1px solid #444",color:"#ffffff",padding:"6px 10px",borderRadius:"6px",cursor:"pointer",fontSize:"0.8rem",fontWeight:600,transition:"all 0.2s"},title:x("nav.apiAccess"),children:"</>"}),er.jsx("button",{className:"icon-btn",onClick:()=>n(!0),style:{background:"transparent",border:"none",color:"#888888",padding:"8px",borderRadius:"6px",cursor:"pointer",fontSize:"0.95rem",transition:"color 0.2s ease"},title:x("nav.settings"),children:er.jsx("i",{className:"fas fa-cog"})}),er.jsxs("button",{className:"icon-btn",onClick:()=>a(!0),style:{background:"transparent",border:"none",color:"#888888",padding:"8px",borderRadius:"6px",cursor:"pointer",fontSize:"0.95rem",position:"relative",transition:"color 0.2s ease"},title:x("nav.inbox"),children:[er.jsx("i",{className:"fas fa-inbox"}),l>0&&er.jsx("span",{style:{position:"absolute",top:"0",right:"0",background:"#ff4757",color:"white",borderRadius:"50%",width:"15px",height:"15px",fontSize:"0.6rem",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",animation:"pulse 2s infinite"},children:l>9?"9+":l})]}),er.jsx("button",{onClick:j,style:{background:"#ffffff",border:"none",color:"#000000",padding:"7px 14px",borderRadius:"6px",cursor:"pointer",fontSize:"0.8rem",fontWeight:600,transition:"all 0.2s"},children:x("nav.logout")})]}):er.jsxs(er.Fragment,{children:[er.jsx(Mr,{to:"/login",style:{color:"#888888",textDecoration:"none",padding:"7px 14px",borderRadius:"6px",fontSize:"0.85rem",fontWeight:500,transition:"all 0.2s"},children:x("nav.login")}),er.jsx(Mr,{to:"/register",style:{background:"#ffffff",color:"#000000",textDecoration:"none",padding:"7px 14px",borderRadius:"6px",fontSize:"0.85rem",fontWeight:600,transition:"all 0.2s"},children:x("nav.register")})]})]}),er.jsx("button",{className:"mobile-menu-btn",onClick:()=>t(!e),style:{display:"none",background:"transparent",border:"none",color:"white",fontSize:"1.3rem",cursor:"pointer",padding:"8px"},children:er.jsx("i",{className:"fas ".concat(e?"fa-times":"fa-bars")})})]})})}),e&&er.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.35)",zIndex:2e3,padding:"80px 16px 24px 16px",boxSizing:"border-box"},onClick:()=>t(!1),children:er.jsx("div",{style:{background:"#000000",border:"1px solid #333",borderRadius:"12px",padding:"16px",maxHeight:"calc(100vh - 120px)",overflowY:"auto",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.5)",pointerEvents:"auto"},onClick:e=>e.stopPropagation(),children:er.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:"4px"},children:[er.jsx("li",{children:er.jsx(Mr,{to:"/",onClick:()=>t(!1),style:{display:"block",color:k("/")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:k("/")?"rgba(255, 255, 255, 0.05)":"transparent"},children:x("nav.home")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/features",onClick:()=>t(!1),style:{display:"block",color:k("/features")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:k("/features")?"rgba(255, 255, 255, 0.05)":"transparent"},children:x("nav.features")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/pricing",onClick:()=>t(!1),style:{display:"block",color:k("/pricing")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:k("/pricing")?"rgba(255, 255, 255, 0.05)":"transparent"},children:x("nav.pricing")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/about",onClick:()=>t(!1),style:{display:"block",color:k("/about")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:k("/about")?"rgba(255, 255, 255, 0.05)":"transparent"},children:x("nav.about")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/contact",onClick:()=>t(!1),style:{display:"block",color:k("/contact")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:k("/contact")?"rgba(255, 255, 255, 0.05)":"transparent"},children:x("nav.contact")})}),g&&u&&er.jsxs(er.Fragment,{children:[er.jsx("li",{children:er.jsx(Mr,{to:"/tickets",onClick:()=>t(!1),style:{display:"block",color:k("/tickets")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:k("/tickets")?"rgba(255, 255, 255, 0.05)":"transparent"},children:x("nav.tickets")})}),g&&u&&er.jsxs(er.Fragment,{children:[er.jsx("li",{children:er.jsx(Mr,{to:"/api-docs",onClick:()=>t(!1),style:{display:"block",color:k("/api-docs")?"#ffffff":"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",background:k("/api-docs")?"rgba(255, 255, 255, 0.05)":"transparent"},children:x("nav.apidocs")})}),er.jsx("li",{children:er.jsxs("button",{onClick:()=>{t(!1),o(!0)},style:{display:"block",width:"100%",textAlign:"left",color:"#888888",background:"transparent",border:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",cursor:"pointer"},children:[er.jsx("span",{style:{color:"#ffffff",fontWeight:600},children:"</>"})," ",x("nav.apiAccess")]})})]}),er.jsx("li",{style:{borderTop:"1px solid #222",marginTop:"8px",paddingTop:"8px"},children:er.jsxs("button",{onClick:()=>{t(!1),a(!0)},style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",textAlign:"left",color:"#888888",background:"transparent",border:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",cursor:"pointer"},children:[er.jsx("i",{className:"fas fa-inbox"})," ",x("nav.inbox"),l>0&&er.jsx("span",{style:{background:"#ff4757",color:"white",borderRadius:"10px",padding:"2px 8px",fontSize:"0.7rem",fontWeight:600},children:l})]})}),er.jsx("li",{children:er.jsxs("button",{onClick:()=>{t(!1),n(!0)},style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",textAlign:"left",color:"#888888",background:"transparent",border:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",cursor:"pointer"},children:[er.jsx("i",{className:"fas fa-cog"})," ",x("nav.settings")]})}),er.jsx("li",{children:er.jsx("button",{onClick:j,style:{display:"block",width:"100%",textAlign:"center",color:"#000000",background:"#ffffff",border:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",marginTop:"4px"},children:x("nav.logout")})})]}),!g&&er.jsxs(er.Fragment,{children:[er.jsx("li",{style:{borderTop:"1px solid #222",marginTop:"8px",paddingTop:"8px"},children:er.jsx(Mr,{to:"/login",onClick:()=>t(!1),style:{display:"block",color:"#888888",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem"},children:x("nav.login")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/register",onClick:()=>t(!1),style:{display:"block",background:"#ffffff",color:"#000000",textDecoration:"none",padding:"10px 14px",borderRadius:"6px",fontSize:"0.9rem",textAlign:"center",fontWeight:600},children:x("nav.register")})})]})]})})}),r&&er.jsx(fo,{onClose:()=>n(!1)}),s&&er.jsx(go,{onClose:()=>a(!1)}),i&&er.jsx(Bo,{onClose:()=>o(!1)}),er.jsx("style",{children:"\n        @keyframes pulse {\n          0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7); }\n          70% { box-shadow: 0 0 0 6px rgba(255, 107, 107, 0); }\n          100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); }\n        }\n\n        @keyframes pulse-dot {\n          0%, 100% {\n            opacity: 1;\n            transform: scale(1);\n          }\n          50% {\n            opacity: 0.5;\n            transform: scale(0.8);\n          }\n        }\n\n        .desktop-nav {\n          display: flex !important;\n        }\n\n        .mobile-menu-btn {\n          display: none !important;\n        }\n\n        /* Animation de survol pour les liens de navigation */\n        .nav-link {\n          position: relative;\n          color: #888888;\n          text-decoration: none;\n          padding: 8px 12px;\n          border-radius: 6px;\n          font-size: 0.85rem;\n          font-weight: 500;\n          transition: color 0.3s ease;\n        }\n\n        .nav-link::after {\n          content: '';\n          position: absolute;\n          bottom: 2px;\n          left: 12px;\n          right: 12px;\n          height: 2px;\n          background: #ffffff;\n          transform: scaleX(0);\n          transform-origin: center;\n          transition: transform 0.3s ease;\n        }\n\n        .nav-link:hover {\n          color: #ffffff;\n        }\n\n        .nav-link:hover::after {\n          transform: scaleX(1);\n        }\n\n        .nav-link.active {\n          color: #ffffff;\n        }\n\n        .nav-link.active::after {\n          transform: scaleX(1);\n        }\n\n        /* Hover pour les boutons ic\xf4nes */\n        .icon-btn:hover {\n          color: #ffffff !important;\n        }\n\n        .users-mobile {\n          display: none;\n        }\n\n        .users-desktop {\n          display: inline;\n        }\n\n        @media (max-width: 900px) {\n          .desktop-nav {\n            display: none !important;\n          }\n          .mobile-menu-btn {\n            display: block !important;\n          }\n          .logo-title {\n            font-size: 1.1rem !important;\n          }\n          .logo-status {\n            font-size: 0.6rem !important;\n            gap: 3px !important;\n          }\n          .logo-status span:first-child {\n            width: 5px !important;\n            height: 5px !important;\n          }\n          .users-desktop {\n            display: none !important;\n          }\n          .users-mobile {\n            display: inline !important;\n          }\n        }\n      "})]})},qo=()=>{const{t:e}=so()
return er.jsx("footer",{className:"footer",children:er.jsxs("div",{className:"container",children:[er.jsxs("div",{className:"footer-grid",children:[er.jsxs("div",{className:"footer-brand",children:[er.jsx(Mr,{to:"/",className:"logo",children:er.jsx("span",{className:"logo-text",children:"Dbs"})}),er.jsx("p",{children:e("footer.brand.desc")}),er.jsxs("div",{className:"footer-social",children:[er.jsx("a",{href:"https://discord.gg/Dbs",target:"_blank",rel:"noopener noreferrer",children:er.jsx("i",{className:"fab fa-discord"})}),er.jsx("a",{href:"https://t.me/Dbsleaks",target:"_blank",rel:"noopener noreferrer",children:er.jsx("i",{className:"fab fa-telegram"})})]})]}),er.jsxs("div",{className:"footer-links",children:[er.jsx("h4",{children:e("footer.product")}),er.jsxs("ul",{children:[er.jsx("li",{children:er.jsx(Mr,{to:"/features",children:e("footer.features")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/pricing",children:e("footer.pricing")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/api-docs",children:e("footer.api")})}),er.jsx("li",{children:er.jsx("a",{href:"#",children:e("footer.changelog")})})]})]}),er.jsxs("div",{className:"footer-links",children:[er.jsx("h4",{children:e("footer.company")}),er.jsxs("ul",{children:[er.jsx("li",{children:er.jsx(Mr,{to:"/about",children:e("footer.about")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/contact",children:e("footer.contact")})}),er.jsx("li",{children:er.jsx("a",{href:"#",children:e("footer.careers")})}),er.jsx("li",{children:er.jsx("a",{href:"#",children:e("footer.blog")})})]})]}),er.jsxs("div",{className:"footer-links",children:[er.jsx("h4",{children:e("footer.legal")}),er.jsxs("ul",{children:[er.jsx("li",{children:er.jsx(Mr,{to:"/privacy",children:e("footer.privacy")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/terms",children:e("footer.terms")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/gdpr",children:e("footer.gdpr")})}),er.jsx("li",{children:er.jsx(Mr,{to:"/security",children:e("footer.security")})})]})]})]}),er.jsxs("div",{className:"footer-bottom",children:[er.jsx("p",{children:e("footer.copyright")}),er.jsxs("div",{className:"footer-badges",children:[er.jsxs("span",{children:[er.jsx("i",{className:"fas fa-lock"})," ",e("footer.secure")]}),er.jsxs("span",{children:[er.jsx("i",{className:"fas fa-check-circle"})," ",e("footer.gdpr_compliant")]})]})]})]})})},Mo=()=>{const{showLoginPopup:e,profile:t}=to()
return e?er.jsx("div",{className:"login-popup",children:er.jsxs("div",{className:"login-popup-content",children:[er.jsx("i",{className:"fas fa-check-circle"}),er.jsxs("span",{children:["Welcome back",(null==t?void 0:t.username)?", ".concat(t.username):"","!"]})]})}):null},Ho=()=>{const{t:e}=so(),[t,r]=nr.useState(!1)
nr.useEffect(()=>{localStorage.getItem("librewolf_notice_dismissed")||navigator.userAgent.toLowerCase().includes("librewolf")||setTimeout(()=>{r(!0)},2e3)},[])
const n=()=>{r(!1),localStorage.setItem("librewolf_notice_dismissed","true")}
return t?er.jsxs(er.Fragment,{children:[er.jsxs("div",{className:"browser-notice",style:{position:"fixed",bottom:"24px",right:"24px",maxWidth:"400px",background:"#000",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"16px",padding:"20px",zIndex:9998,boxShadow:"0 10px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 255, 255, 0.1)",animation:"slideInNotice 0.5s ease-out"},children:[er.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"12px"},children:[er.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[er.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"12px",background:"#111",border:"1px solid rgba(255, 255, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 15px rgba(255, 255, 255, 0.1)"},children:er.jsx("i",{className:"fas fa-globe",style:{fontSize:"1.3rem",color:"#fff"}})}),er.jsxs("div",{children:[er.jsx("h4",{style:{margin:0,fontSize:"1rem",fontWeight:700,color:"#fff"},children:e("browser.notice.title")}),er.jsx("span",{style:{fontSize:"0.75rem",color:"rgba(255, 255, 255, 0.5)"},children:e("browser.notice.subtitle")})]})]}),er.jsx("button",{onClick:n,style:{background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"8px",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"rgba(255, 255, 255, 0.6)",transition:"all 0.2s ease"},onMouseOver:e=>{e.currentTarget.style.background="rgba(255, 255, 255, 0.2)",e.currentTarget.style.color="#fff"},onMouseOut:e=>{e.currentTarget.style.background="rgba(255, 255, 255, 0.1)",e.currentTarget.style.color="rgba(255, 255, 255, 0.6)"},children:er.jsx("i",{className:"fas fa-times",style:{fontSize:"0.9rem"}})})]}),er.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"0.9rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:1.6},children:[e("browser.notice.message")," ",er.jsx("strong",{style:{color:"#fff"},children:"LibreWolf"})]}),er.jsxs("a",{href:"https://librewolf.net/installation/",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",width:"100%",padding:"12px 20px",background:"#fff",border:"none",borderRadius:"10px",color:"#000",fontSize:"0.9rem",fontWeight:600,textDecoration:"none",cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 0 20px rgba(255, 255, 255, 0.2)"},onMouseOver:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 0 30px rgba(255, 255, 255, 0.3)"},onMouseOut:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 0 20px rgba(255, 255, 255, 0.2)"},children:[er.jsx("i",{className:"fas fa-download"}),e("browser.notice.button")]}),er.jsx("button",{onClick:n,style:{display:"block",width:"100%",marginTop:"12px",padding:"8px",background:"transparent",border:"none",color:"rgba(255, 255, 255, 0.4)",fontSize:"0.8rem",cursor:"pointer",transition:"color 0.2s ease"},onMouseOver:e=>{e.currentTarget.style.color="rgba(255, 255, 255, 0.7)"},onMouseOut:e=>{e.currentTarget.style.color="rgba(255, 255, 255, 0.4)"},children:e("browser.notice.dismiss")})]}),er.jsx("style",{children:"\n        @keyframes slideInNotice {\n          from {\n            opacity: 0;\n            transform: translateX(100px);\n          }\n          to {\n            opacity: 1;\n            transform: translateX(0);\n          }\n        }\n\n        @media (max-width: 480px) {\n          .browser-notice {\n            left: 16px !important;\n            right: 16px !important;\n            bottom: 16px !important;\n            max-width: none !important;\n          }\n        }\n      "})]}):null},Ko=()=>{const e=nr.useRef(null),t=nr.useRef(null),r=nr.useRef({x:0,y:0})
return nr.useEffect(()=>{const n=t.current
if(!n)return
const s=n.getContext("2d")
if(!s)return
let a
n.width=window.innerWidth,n.height=window.innerHeight
const i=()=>{(()=>{s.clearRect(0,0,n.width,n.height)
const e=r.current.x,t=r.current.y
for(let r=0;r<=n.width;r+=50)for(let a=0;a<=n.height;a+=50){const n=r-e,i=a-t,o=Math.sqrt(n*n+i*i)
if(o<150){const e=12*(1-o/150),t=n/o*e*.3,l=i/o*e*.3,c=.25*(1-o/150)
s.strokeStyle="rgba(255, 255, 255, ".concat(c,")"),s.lineWidth=1.5,s.beginPath(),s.moveTo(r+t,a+l-e),s.lineTo(r+50+t,a+l-e),s.stroke(),s.beginPath(),s.moveTo(r+t,a+l-e),s.lineTo(r+t,a+50+l-e),s.stroke()}}})(),a=requestAnimationFrame(i)},o=t=>{r.current={x:t.clientX,y:t.clientY},e.current&&(e.current.style.left="".concat(t.clientX,"px"),e.current.style.top="".concat(t.clientY,"px"),e.current.style.opacity="1"),n&&(n.style.opacity="1")},l=()=>{e.current&&(e.current.style.opacity="0"),n&&(n.style.opacity="0")},c=()=>{n.width=window.innerWidth,n.height=window.innerHeight}
return document.addEventListener("mousemove",o),document.addEventListener("mouseleave",l),window.addEventListener("resize",c),i(),()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseleave",l),window.removeEventListener("resize",c),cancelAnimationFrame(a)}},[]),er.jsxs(er.Fragment,{children:[er.jsx("div",{id:"mouse-glow",ref:e}),er.jsx("canvas",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:-9999,opacity:0,transition:"opacity 0.3s ease"}})]})},Go=["deee5dc2-e37e-48ba-8da2-1fb5945cd235","3e45559e-299c-4d49-9fe8-b2c77237d2c9","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","f479668f-4129-4c67-91bb-decba5a0e804","46eea62a-4835-4b54-a23e-c20aee355760","946f8b8b-6057-4dc9-9615-e1cfa8eb9c9f","c5ac1d65-40ac-4b53-85b3-8cea8fdfe491"],Yo={owner:{label:"Owner",color:"#ffd700",bg:"rgba(255, 215, 0, 0.12)",border:"rgba(255, 215, 0, 0.4)"},staff:{label:"Staff",color:"#ff6b6b",bg:"rgba(255, 107, 107, 0.12)",border:"rgba(255, 107, 107, 0.35)"},developer:{label:"Developer",color:"#00d4ff",bg:"rgba(0, 212, 255, 0.12)",border:"rgba(0, 212, 255, 0.4)"},premium:{label:"Premium",color:"#f59f00",bg:"rgba(245, 159, 0, 0.12)",border:"rgba(245, 159, 0, 0.35)"},pro:{label:"Pro",color:"#4dabf7",bg:"rgba(77, 171, 247, 0.12)",border:"rgba(77, 171, 247, 0.35)"},beginner:{label:"Beginner",color:"#a855f7",bg:"rgba(168, 85, 247, 0.12)",border:"rgba(168, 85, 247, 0.35)"},beta:{label:"Beta",color:"#845ef7",bg:"rgba(132, 94, 247, 0.12)",border:"rgba(132, 94, 247, 0.35)"},free:{label:"Free",color:"#a0a0a0",bg:"rgba(255, 255, 255, 0.06)",border:"rgba(255, 255, 255, 0.18)"}},Jo={founder:{label:"Founder",color:"#ffd700",bg:"rgba(255, 215, 0, 0.12)",icon:"fa-crown"},developer:{label:"Developer",color:"#00d4ff",bg:"rgba(0, 212, 255, 0.12)",icon:"fa-code"},promoter:{label:"Promoter",color:"#a855f7",bg:"rgba(168, 85, 247, 0.12)",icon:"fa-bullhorn"},early:{label:"Early",color:"#e0e0e0",bg:"rgba(224, 224, 224, 0.12)",icon:"fa-eye"},buyer:{label:"Buyer",color:"#ff6b9d",bg:"rgba(255, 107, 157, 0.12)",icon:"fa-money-bill-wave"},bug_hunter:{label:"Bug Hunter",color:"#51cf66",bg:"rgba(81, 207, 102, 0.12)",icon:"fa-bug"},vip:{label:"VIP",color:"#ffd700",bg:"rgba(255, 215, 0, 0.12)",icon:"fa-gem"},partner:{label:"Partner",color:"#4dabf7",bg:"rgba(77, 171, 247, 0.12)",icon:"fa-handshake"},staff:{label:"Staff",color:"#ff6b6b",bg:"rgba(255, 107, 107, 0.12)",icon:"fa-shield-alt"},beta_tester:{label:"Beta Tester",color:"#845ef7",bg:"rgba(132, 94, 247, 0.12)",icon:"fa-flask"},premium:{label:"Premium",color:"#f59f00",bg:"rgba(245, 159, 0, 0.12)",icon:"fa-star"}},Xo=e=>{switch((e||"").toLowerCase()){case"beginner":return"beginner"
case"pro":return"pro"
case"premium":return"premium"
case"beta":return"beta"
case"blocked":return"blocked"
default:return"free"}},Zo=()=>{const{user:e,profile:t}=to(),r=T(),[n,s]=nr.useState(!1),[a,i]=nr.useState(()=>(()=>{const e=Date.now()
return[{id:"msg-1",username:"WalSo",role:"owner",badges:["founder","developer","vip","premium"],content:"Bienvenue sur le Live Chat Dbs. Respectez la confidentialit\xe9, restez concis et courtois.",timestamp:new Date(e-48e4).toISOString(),avatar:""},{id:"msg-2",username:"Swith",role:"staff",badges:["staff","partner","promoter"],content:"Support en ligne : partagez votre contexte et votre plan, un membre de l\u2019\xe9quipe vous r\xe9pond.",timestamp:new Date(e-36e4).toISOString()},{id:"msg-3",username:"Quraiv",role:"developer",badges:["developer","bug_hunter"],content:"Nouveau pipeline realtime pr\xeat pour les prochaines releases. Merci pour vos retours.",timestamp:new Date(e-3e5).toISOString()},{id:"msg-4",username:"BetaOps",role:"beta",badges:["beta_tester","buyer"],content:"Les flux Beta sont stables c\xf4t\xe9 API. Webhook priv\xe9 dispo si besoin.",timestamp:new Date(e-18e4).toISOString()},{id:"msg-5",username:"EarlyFox",role:"free",badges:["early"],content:"Je d\xe9couvre Dbs, interface tr\xe8s fluide. Des conseils pour optimiser les recherches ?",timestamp:new Date(e-12e4).toISOString()},{id:"msg-6",username:"ShadowHQ",role:"premium",badges:["vip","premium","buyer"],content:"premium : latence quasi nulle sur les requ\xeates bulk. Merci pour le support rapide.",timestamp:new Date(e-6e4).toISOString()},{id:"msg-7",username:"HunterX",role:"pro",badges:["bug_hunter"],content:"Trouv\xe9 un edge case sur le module tickets. Patch en cours.",timestamp:new Date(e-3e4).toISOString()}]})()),[o,l]=nr.useState(""),[c,u]=nr.useState(null),[d,h]=nr.useState([]),[p,f]=nr.useState(!1),[m,g]=nr.useState(!0),[b,y]=nr.useState(null),[v,x]=nr.useState(null),[w,k]=nr.useState(null),[j,S]=nr.useState(null),[_,N]=nr.useState(null),E=nr.useRef(null),C=nr.useRef(null),R=["founder","owner","staff","developer","premium","pro","beginner","beta","free"],P=nr.useMemo(()=>(null==t?void 0:t.username)?t.username:(null==e?void 0:e.email)?e.email.split("@")[0]:"You",[null==t?void 0:t.username,null==e?void 0:e.email])
nr.useEffect(()=>{if(!(null==e?void 0:e.id))return void u(null)
let t=!0
return(async()=>{var r
try{const{data:n,error:s}=await Qi.from("user_plans").select("plan").eq("user_id",e.id).maybeSingle()
if(!t)return
u(!s&&n?{plan:Xo(null!=(r=null==n?void 0:n.plan)?r:"free")}:{plan:"free"})}catch(n){t&&u({plan:"free"})}})(),()=>{t=!1}},[null==e?void 0:e.id]),nr.useEffect(()=>{if(!(null==e?void 0:e.id))return void h([])
let t=!0
return(async()=>{try{const{data:r,error:n}=await Qi.from("user_badges").select("badge").eq("user_id",e.id)
if(!t)return
if(!n&&r){const e=r.map(e=>e.badge).filter(e=>Boolean(Jo[e]))
h(e)}else h([])}catch(r){t&&h([])}})(),()=>{t=!1}},[null==e?void 0:e.id]),nr.useEffect(()=>{if(!n)return
const e=E.current
e&&(e.scrollTop=e.scrollHeight)},[a,n]),nr.useEffect(()=>{if(n&&C.current&&e){const e=window.setTimeout(()=>{var e
return null==(e=C.current)?void 0:e.focus()},150)
return()=>window.clearTimeout(e)}},[n,e])
const A=nr.useMemo(()=>{const t=Xo(null==c?void 0:c.plan),r=new Set
"premium"===t&&(r.add("premium"),r.add("buyer")),"pro"!==t&&"beginner"!==t||r.add("buyer"),"beta"===t&&r.add("beta_tester"),e&&Go.includes(e.id)&&r.add("founder"),d.forEach(e=>{Jo[e]&&r.add(e)})
const n=["founder","developer","staff","vip","premium","partner","buyer","beta_tester","bug_hunter","promoter","early"]
return Array.from(r).sort((e,t)=>n.indexOf(e)-n.indexOf(t))},[e,d,null==c?void 0:c.plan]),O=nr.useMemo(()=>{if(e&&Go.includes(e.id))return"owner"
if(d.includes("staff"))return"staff"
if(d.includes("developer"))return"developer"
const t=Xo(null==c?void 0:c.plan)
return"premium"===t?"premium":"pro"===t?"pro":"beginner"===t?"beginner":"beta"===t?"beta":"free"},[e,d,null==c?void 0:c.plan]),I=nr.useMemo(()=>!(!e||!Go.includes(e.id)&&!d.includes("staff")&&!d.includes("founder")),[e,d]),z=t=>!(!e||t.userId!==e.id&&!d.includes("staff")&&!d.includes("founder")&&!Go.includes(e.id)),L=nr.useCallback(async()=>{if(!e)return k(null),void S(null)
try{const{data:t,error:r}=await Qi.from("chat_mutes").select("expires_at").eq("user_id",e.id).gt("expires_at",(new Date).toISOString()).order("expires_at",{ascending:!1}).maybeSingle()
!r&&(null==t?void 0:t.expires_at)?(k(t.expires_at),S("Vous \xeates en mute jusqu'\xe0 ".concat(new Date(t.expires_at).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})))):(k(null),S(null))}catch(t){}},[e]),D=(e,t)=>{const r=Jo[e]||Yo[e]
return r?er.jsxs("span",{className:"live-chat-badge",style:{color:r.color,background:r.bg,borderColor:r.bg},children:[er.jsx("i",{className:"fas ".concat(r.icon)}),r.label]},"".concat(e,"-").concat(t)):null},U=e=>{const t=Yo[e]||Jo[e]
return t?er.jsx("span",{className:"live-chat-role",style:{color:t.color,background:t.bg,borderColor:t.border},children:t.label}):null},F=(e,t)=>{var r,n
return{id:e.id,userId:null!=(r=e.user_id)?r:void 0,username:e.username||"Guest",role:Yo[e.role]?e.role:"free",badges:Array.isArray(e.badges)?e.badges.filter(e=>Boolean(Jo[e])):[],content:e.content,timestamp:e.created_at,avatar:null!=(n=e.avatar_url)?n:void 0,isOwn:t}},B=(e,t)=>{const r=e.findIndex(e=>e.id===t.id)
if(-1!==r){const n=[...e]
return n[r]=t,n}return[...e,t].sort((e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()).slice(-300)}
nr.useEffect(()=>{let e=!0
return(async()=>{g(!0)
try{const{data:t,error:r}=await Qi.from("chat_messages").select("*").order("created_at",{ascending:!0}).limit(300)
if(!e)return
if(!r&&t){const e=t.map(e=>F(e))
i(e)}}catch(t){}finally{e&&g(!1)}})(),()=>{e=!1}},[]),nr.useEffect(()=>{const t=Qi.channel("live-chat").on("postgres_changes",{event:"INSERT",schema:"public",table:"chat_messages"},t=>{const r=t.new,n=F(r,r.user_id===(null==e?void 0:e.id))
i(e=>B(e,n))}).subscribe(()=>{})
return()=>{Qi.removeChannel(t)}},[null==e?void 0:e.id]),nr.useEffect(()=>{L()},[L]),nr.useEffect(()=>{if(!(null==e?void 0:e.id))return
const t=Qi.channel("live-chat-mutes-".concat(e.id)).on("postgres_changes",{event:"INSERT",schema:"public",table:"chat_mutes",filter:"user_id=eq.".concat(e.id)},e=>{var t
const r=null==(t=e.new)?void 0:t.expires_at
r&&(k(r),S("Vous \xeates en mute jusqu'\xe0 ".concat(new Date(r).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}))))}).subscribe()
return()=>{Qi.removeChannel(t)}},[null==e?void 0:e.id,L])
const W=async()=>{var r
if(!e)return
const n=o.trim()
if(!n)return
if(w&&new Date(w).getTime()>Date.now())return void S("Vous \xeates en mute jusqu'\xe0 ".concat(new Date(w).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})))
const s=I||Go.includes(e.id),a=Po(n,e.id,{maxLength:500,rateLimit:{maxMessages:s?20:5,windowMs:1e4},allowLinks:s,allowDiscord:s})
if(!a.isValid)return N(a.error||"Message non valide"),void setTimeout(()=>N(null),4e3)
N(null),f(!0)
const c={content:a.sanitizedMessage,username:P,user_id:e.id,role:O,badges:A,avatar_url:null!=(r=null==t?void 0:t.avatar_url)?r:null}
try{const{data:e,error:t}=await Qi.from("chat_messages").insert(c).select().single()
if(t)return void("42501"===(null==t?void 0:t.code)&&(await L(),S("Vous \xeates en mute. Vous ne pouvez pas envoyer de message pour le moment.")))
if(e){const t=F(e,!0)
i(e=>B(e,t))}}catch(u){}finally{f(!1),l("")}}
return er.jsxs("div",{className:"live-chat-shell","aria-live":"polite",children:[er.jsx("button",{className:"chat-floating-button ".concat(n?"hidden":""),"aria-label":"Open live chat",onClick:()=>s(!0),children:er.jsx("i",{className:"fas fa-comments"})}),er.jsxs("div",{className:"live-chat-panel ".concat(n?"open":""),children:[er.jsxs("div",{className:"live-chat-header",children:[er.jsxs("div",{children:[er.jsx("p",{className:"live-chat-eyebrow",children:"Dbs"}),er.jsx("h4",{children:"Live Chat"})]}),er.jsx("div",{className:"live-chat-actions",children:er.jsx("button",{className:"chat-circle-btn","aria-label":"Close chat",onClick:()=>s(!1),children:er.jsx("i",{className:"fas fa-times"})})})]}),er.jsxs("div",{className:"live-chat-body",ref:E,children:[m&&er.jsxs("div",{className:"live-chat-system",style:{opacity:.7},children:[er.jsx("div",{className:"live-chat-system-icon",children:er.jsx("i",{className:"fas fa-spinner fa-spin"})}),er.jsxs("div",{children:[er.jsx("p",{className:"live-chat-system-title",children:"Connecting..."}),er.jsx("p",{className:"live-chat-text",style:{marginTop:4},children:"Fetching live history."})]})]}),a.map(t=>{return er.jsxs("div",{className:"live-chat-message ".concat(t.isOwn?"is-own":""),children:[er.jsx("div",{className:"live-chat-avatar",children:t.avatar?er.jsx("img",{src:t.avatar,alt:"".concat(t.username," avatar")}):er.jsx("span",{children:(n=t.username,n?n.slice(0,2).toUpperCase():"?")})}),er.jsxs("div",{className:"live-chat-bubble",children:[er.jsxs("div",{className:"live-chat-meta",children:[er.jsxs("div",{className:"live-chat-userline",children:[er.jsx("span",{className:"live-chat-username",children:t.username}),(()=>{const e=new Set([t.role])
t.badges.includes("founder")&&e.add("founder"),t.badges.includes("staff")&&e.add("staff"),t.badges.includes("developer")&&e.add("developer")
const r=Array.from(e).sort((e,t)=>R.indexOf(e)-R.indexOf(t)),n=r[0]||t.role,s=r.filter(e=>e!==n),a=Array.from(new Set(t.badges.filter(e=>e!==n&&!s.includes(e))))
return er.jsxs(er.Fragment,{children:[U(n),s.map((e,t)=>D(e,t)),a.map(D)]})})()]}),er.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[er.jsx("span",{className:"live-chat-time",children:(r=t.timestamp,new Date(r).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}))}),z(t)&&er.jsx("button",{className:"live-chat-delete",onClick:()=>(async t=>{if(e){y(t)
try{const{error:e}=await Qi.from("chat_messages").delete().eq("id",t)
e||i(e=>e.filter(e=>e.id!==t))}catch(r){}finally{y(null)}}})(t.id),disabled:b===t.id,title:"Delete message",children:er.jsx("i",{className:"fas fa-times ".concat(b===t.id?"fa-spin":"")})}),I&&t.userId&&t.userId!==(null==e?void 0:e.id)&&er.jsx("div",{style:{display:"flex",gap:6},children:[10,60,1440].map(r=>er.jsxs("button",{className:"live-chat-delete",style:{fontSize:"0.75rem",padding:"4px 6px"},onClick:()=>(async(t,r)=>{if(e){x(t)
try{const n=new Date(Date.now()+6e4*r).toISOString(),{error:s}=await Qi.from("chat_mutes").insert({user_id:t,expires_at:n,created_by:e.id,reason:"Muted for ".concat(r," min")})
s||t===e.id&&(k(n),S("Vous \xeates en mute jusqu'\xe0 ".concat(new Date(n).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}))))}catch(n){}finally{x(null)}}})(t.userId,r),disabled:v===t.userId,title:"Mute ".concat(r>=60?"".concat(r/60,"h"):"".concat(r,"m")),children:[er.jsx("i",{className:"fas fa-microphone-slash ".concat(v===t.userId?"fa-spin":"")}),er.jsx("span",{style:{marginLeft:4},children:r>=60?"".concat(r/60,"h"):"".concat(r,"m")})]},r))})]})]}),er.jsx("p",{className:"live-chat-text",children:t.content})]})]},t.id)
var r,n}),!e&&er.jsxs("div",{className:"live-chat-system",style:{marginTop:"8px"},children:[er.jsx("div",{className:"live-chat-system-icon",children:er.jsx("i",{className:"fas fa-lock"})}),er.jsxs("div",{children:[er.jsx("p",{className:"live-chat-system-title",children:"Sign in to join the conversation"}),er.jsxs("div",{className:"live-chat-auth-actions",children:[er.jsx("button",{className:"btn btn-outline",onClick:()=>r("/login"),children:"Login"}),er.jsx("button",{className:"btn btn-primary",onClick:()=>r("/register"),children:"Register"})]})]})]})]}),er.jsxs("div",{className:"live-chat-footer",children:[er.jsxs("div",{className:"live-chat-input",children:[er.jsx("textarea",{ref:C,placeholder:e?"Write a message...":"Sign in to chat",value:o,onChange:e=>l(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),W())},disabled:!e||p||!!w&&new Date(w).getTime()>Date.now(),rows:2}),er.jsx("div",{className:"live-chat-footer-actions",children:er.jsx("button",{className:"chat-circle-btn",onClick:W,disabled:!e||!o.trim()||p||!!w&&new Date(w).getTime()>Date.now(),"aria-label":"Send message",children:er.jsx("i",{className:"fas fa-paper-plane"})})})]}),er.jsx("p",{className:"live-chat-hint",style:_?{color:"#ff6b6b",fontWeight:500}:void 0,children:_||j||"Live chat \xb7 Protected space"})]})]})]})},$o=({children:e})=>er.jsx(er.Fragment,{children:e}),Qo=async e=>{try{const{data:{session:t},error:r}=await Qi.auth.getSession()
if(r||!(null==t?void 0:t.access_token))return null
const n="https://supabase-proxy.tiny-wave-2fa1.workers.dev",s=await fetch("".concat(n,"/functions/v1/auto-badges"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t.access_token)},body:JSON.stringify({action:e})})
return s.ok?await s.json():(await s.text(),"Badge check failed (".concat(s.status,"):"),null)}catch(t){return null}},el=(e,t)=>{if("number"==typeof t&&t>0)return t
switch(e){case"beginner":return 100
case"pro":return 500
case"premium":return 5e3
case"beta":return 30
case"blocked":return 0
default:return 10}},tl=()=>{const{user:e,showLoginPopup:t}=to(),{t:r}=so(),[n,s]=nr.useState(""),[a,i]=nr.useState(!1),[o,l]=nr.useState(null),[c,u]=nr.useState(""),[d,h]=nr.useState(null),[p,f]=nr.useState(null),[m,g]=nr.useState(!1),[b,y]=nr.useState(null),[v,x]=nr.useState(null),[w,k]=nr.useState("breaches"),[j,S]=nr.useState(!1),[_,N]=nr.useState(""),[E,C]=nr.useState("leaks.logs"),[R,P]=nr.useState(!1),[A,O]=nr.useState(null),[I,z]=nr.useState(!1),[L,D]=nr.useState(!1),[U,F]=nr.useState(!1),[B,W]=nr.useState(!1),[V,q]=nr.useState(!1),[M,H]=nr.useState(!1),[K,G]=nr.useState([]),[Y,J]=nr.useState(null),[X,Z]=nr.useState(!1),[$,Q]=nr.useState(!1),ee=nr.useRef(null),te=nr.useRef(null),re=T(),ne=nr.useRef(null),se=nr.useRef({x:0,y:0}),ae=nr.useRef({x:0,y:0})
nr.useEffect(()=>{const e=e=>{if(!ee.current)return
const t=ee.current.getBoundingClientRect(),r=t.left+t.width/2,n=t.top+t.height/2,s=Math.atan2(e.clientY-n,e.clientX-r),a=Math.min(Math.hypot(e.clientX-r,e.clientY-n)/8,11)
se.current.x=Math.cos(s)*a,se.current.y=Math.sin(s)*a}
return window.addEventListener("mousemove",e,{passive:!0}),()=>{window.removeEventListener("mousemove",e)}},[]),nr.useEffect(()=>{let e
const t=()=>{ae.current.x+=.2*(se.current.x-ae.current.x),ae.current.y+=.2*(se.current.y-ae.current.y)
const r=ne.current
r&&(r.setAttribute("cx",String(100+ae.current.x)),r.setAttribute("cy",String(50+ae.current.y))),e=requestAnimationFrame(t)}
return e=requestAnimationFrame(t),()=>cancelAnimationFrame(e)},[]),nr.useEffect(()=>{const e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(document.querySelectorAll(".stat-number[data-count]").forEach(e=>{const t=parseInt(e.getAttribute("data-count")||"0"),r=t/125
let n=0
const s=()=>{n+=r,n<t?(e.textContent=Math.floor(n).toString(),requestAnimationFrame(s)):e.textContent=t.toString()}
s()}),e.disconnect())})}),t=document.querySelector(".hero-stats")
return t&&e.observe(t),()=>e.disconnect()},[]),nr.useEffect(()=>{if(!e)return f(null),void O(null)
let t=!1
const r=async()=>{if(e){Q(!0)
try{const{data:r,error:n}=await Qi.from("user_plans").select("plan, credits_per_day").eq("user_id",e.id).maybeSingle()
if(!t)if(null==r?void 0:r.plan){const e=(e=>{switch(null==e?void 0:e.toLowerCase()){case"beginner":return"beginner"
case"pro":return"pro"
case"premium":return"premium"
case"beta":return"beta"
case"blocked":return"blocked"
default:return"free"}})(r.plan),t=el(e,null==r?void 0:r.credits_per_day)
O({plan:e,credits_per_day:t})}else O({plan:"free",credits_per_day:el("free")})
const s=await Fo(e.id)
t||f(s)}catch(r){t||(O(e=>null!=e?e:{plan:"free",credits_per_day:el("free")}),f(e=>null!=e?e:null))}finally{t||Q(!1)}}}
r()
const n=setInterval(()=>{r()},5e3),s=()=>{"visible"===document.visibilityState&&r()}
return document.addEventListener("visibilitychange",s),()=>{t=!0,clearInterval(n),document.removeEventListener("visibilitychange",s)}},[null==e?void 0:e.id]),nr.useEffect(()=>{if(!(null==e?void 0:e.id))return z(!1),F(!1),D(!1),W(!1),q(!1),void H(!1);(async()=>{try{const{data:{session:t}}=await Qi.auth.getSession()
if(!(null==t?void 0:t.access_token))return
await(async()=>{try{const e=["check_early_user","check_beta_tester","check_buyer","check_premium","check_vip"],t=[]
for(const r of e){const e=await Qo(r);(null==e?void 0:e.success)&&Array.isArray(e.badgesGranted)&&t.push(...e.badgesGranted)}return t}catch(e){return[]}})()
const{data:r,error:n}=await Qi.from("user_badges").select("badge").eq("user_id",e.id)
if(n)throw n
const s=(null!=r?r:[]).map(e=>e.badge),a=s.includes("early"),i=s.includes("bug_hunter"),o=s.includes("buyer")
W(a),q(i),H(o),G([])}catch(t){}})()},[null==e?void 0:e.id]),nr.useEffect(()=>{if(!(null==e?void 0:e.id))return void z(!1)
const t="beta"===(null==A?void 0:A.plan)&&!V
z(Boolean(t))},[null==e?void 0:e.id,null==A?void 0:A.plan,V]),nr.useEffect(()=>{(null==e?void 0:e.id)||(Z(!1),G([]),J(null))},[null==e?void 0:e.id]),nr.useEffect(()=>{(null==e?void 0:e.id)?(async()=>{try{if(B)return void F(!1)
const{data:t,error:r}=await Qi.from("profiles").select("id").order("created_at",{ascending:!0}).limit(100)
if(r)throw r
const n=(t||[]).some(t=>t.id===e.id)
F(n)}catch(t){F(!1)}})():F(!1)},[null==e?void 0:e.id,B]),nr.useEffect(()=>{if(!(null==e?void 0:e.id))return void D(!1)
const t="beginner"===(r=null==A?void 0:A.plan)||"pro"===r||"premium"===r
var r
D(Boolean(t&&!M))},[null==e?void 0:e.id,null==A?void 0:A.plan,M]),nr.useEffect(()=>{const e=!(t||I||L||U)
e&&!Y&&K.length>0&&J(K[0]),Z(e&&K.length>0)},[K,t,I,L,U,Y])
const ie=async()=>{if(!n.trim())return
const t=(e=>{if(!e||"string"!=typeof e)return{safe:!1,reason:"Requ\xeate vide"}
const t=e.trim()
return t.length<3?{safe:!1,reason:"Requ\xeate trop courte (min 3 caract\xe8res)"}:t.length>500?{safe:!1,reason:"Requ\xeate trop longue (max 500 caract\xe8res)"}:_o(t)?{safe:!1,reason:"Contenu suspect d\xe9tect\xe9"}:/[<>'"`;\\]/.test(t)?{safe:!1,reason:"Caract\xe8res non autoris\xe9s"}:{safe:!0}})(n)
if(!t.safe)return void u(t.reason||"Requ\xeate invalide")
if(!e)return g(!0),void setTimeout(()=>g(!1),3e3)
try{const{data:e,error:t}=await Qi.auth.getSession()
if(t||!e.session){const{error:e}=await Qi.auth.refreshSession()
if(e)return void u("Session expir\xe9e. Veuillez vous reconnecter.")}}catch(jl){}let s=A
if(!s)try{const{data:t}=await Qi.from("user_plans").select("plan, credits_per_day").eq("user_id",e.id).maybeSingle();(null==t?void 0:t.plan)&&(s={plan:t.plan,credits_per_day:t.credits_per_day},O(s))}catch(a){}i(!0),u(""),l(null),y(null),x(null)
try{const t=await(async(e,t)=>{try{const{remaining:r,plan:n}=await(async e=>{const{plan:t,creditsPerDay:r}=await Do(e),{data:n}=await Qi.from("user_credits").select("credits_remaining, last_reset").eq("user_id",e).maybeSingle()
return n?Io(n.last_reset)?{remaining:r,max:r,plan:t}:{remaining:n.credits_remaining,max:r,plan:t}:{remaining:r,max:r,plan:t}})(t)
if("blocked"===n)return{success:!1,error:"Your account is blocked. Contact support.",errorCode:"BLOCKED",creditsRemaining:0}
if(r<=0)return{success:!1,error:"You have exhausted your daily searches.",errorCode:"NO_CREDITS",creditsRemaining:0}
const s=await Uo(e,t),a=s.breaches||[],i=s.stealers||[]
return{success:!0,results:s.results||[],breaches:a,stealers:i,creditsRemaining:"number"==typeof s.creditsRemaining?s.creditsRemaining:r-1}}catch(a){const t=(null==a?void 0:a.message)||"Erreur serveur",r=t.includes("not enough money")||t.includes("bot balance")||t.toLowerCase().includes("balance")
return{success:!1,error:t,errorCode:r?"API_BALANCE_INSUFFICIENT":"SERVER_ERROR",creditsRemaining:0}}})(n,e.id)
if(!t.success)return u(t.error||r("home.error.generic")),l(null),y(null),x(null),void(void 0!==t.creditsRemaining&&f(t.creditsRemaining))
const s=t.breaches||[],i=t.stealers||[]
y(s),x(i),s.length>0?(l(s),k("breaches")):i.length>0?(l(i),k("stealers")):l([])
const o=s.length+i.length
if(await(async(e,t=0)=>{try{const{data:{user:r}}=await Qi.auth.getUser()
if(!r)return
const{error:n}=await Qi.from("search_history").insert({user_id:r.id,query:e,result_count:t})
n&&n.message,await Qo("check_vip")}catch(a){}})(n,o),void 0!==t.creditsRemaining)f(t.creditsRemaining)
else{const t=await Fo(e.id)
f(t)}te.current&&setTimeout(()=>{var e
null==(e=te.current)||e.scrollIntoView({behavior:"smooth",block:"start"})},100)}catch(a){u(r("home.error.generic")),l(null)}finally{i(!1)}},oe=e=>{s(e)}
return er.jsxs($o,{children:[U&&!t&&!I&&!L&&er.jsx("div",{className:"login-popup",style:{top:"90px",zIndex:31},children:er.jsxs("div",{className:"login-popup-content",style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",minWidth:"340px"},children:[er.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-star",style:{color:"#f59e0b"}}),er.jsx("span",{children:"Bravo ! Tu fais partie des 100 premiers"})]}),er.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"},children:[er.jsx("button",{className:"btn btn-primary btn-sm",onClick:async()=>{if(!(null==e?void 0:e.id))return
F(!1)
const{error:t}=await Qi.from("user_badges").upsert({user_id:e.id,badge:"early",granted_at:(new Date).toISOString(),granted_by:e.id},{onConflict:"user_id,badge"})
t||W(!0)},style:{minWidth:"150px",fontWeight:700,background:"#f59e0b",borderColor:"#d97706",color:"#ffffff"},children:"Claim badge Early"}),er.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>{F(!1)},style:{minWidth:"120px",fontWeight:700,borderColor:"#d1d5db",color:"#1a1a2e",background:"#f7f7f9"},children:"Ignorer"})]})]})}),X&&Y&&!t&&!I&&!L&&!U&&er.jsx("div",{className:"login-popup",style:{top:"90px",zIndex:30},children:er.jsxs("div",{className:"login-popup-content",style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",minWidth:"340px"},children:[er.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-award",style:{color:"#7c3aed"}}),er.jsxs("span",{children:["Bravo ! Tu as obtenu le badge ",(le=Y,le?le.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):"Badge")]})]}),er.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"},children:[er.jsx("button",{className:"btn btn-primary btn-sm",onClick:async()=>{if(!(null==e?void 0:e.id)||!Y)return
const t=Y
G(e=>{const r=e.filter(e=>e!==t),n=r[0]||null
return J(n),Z(Boolean(n)),r}),await Qi.from("user_badges").upsert({user_id:e.id,badge:t,granted_at:(new Date).toISOString(),granted_by:e.id},{onConflict:"user_id,badge"})},style:{minWidth:"150px",fontWeight:700,background:"#7c3aed",borderColor:"#5b21b6",color:"#ffffff"},children:"Claim mon badge"}),er.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>{if(!Y)return
const e=Y
G(t=>{const r=t.filter(t=>t!==e),n=r[0]||null
return J(n),Z(Boolean(n)),r})},style:{minWidth:"120px",fontWeight:700,borderColor:"#d1d5db",color:"#1a1a2e",background:"#f7f7f9"},children:"Ignorer"})]})]})}),I&&!t&&er.jsx("div",{className:"login-popup",style:{top:"90px",zIndex:30},children:er.jsxs("div",{className:"login-popup-content",style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",minWidth:"320px"},children:[er.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-bug",style:{color:"#10b981"}}),er.jsx("span",{children:"Bravo ! Tu as gagn\xe9 un badge Bug Hunter"})]}),er.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"},children:[er.jsx("button",{className:"btn btn-primary btn-sm",onClick:async()=>{if(!(null==e?void 0:e.id))return
z(!1)
const{error:t}=await Qi.from("user_badges").upsert({user_id:e.id,badge:"bug_hunter",granted_at:(new Date).toISOString(),granted_by:e.id},{onConflict:"user_id,badge"})
t||q(!0)},style:{minWidth:"140px",fontWeight:700,background:"#10b981",borderColor:"#0ea971",color:"#ffffff"},children:"Claim mon badge"}),er.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>{z(!1)},style:{minWidth:"120px",fontWeight:700,borderColor:"#d1d5db",color:"#1a1a2e",background:"#f7f7f9"},children:"Ignorer"})]})]})}),L&&!t&&!I&&er.jsx("div",{className:"login-popup",style:{top:"90px",zIndex:29},children:er.jsxs("div",{className:"login-popup-content",style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",minWidth:"320px"},children:[er.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-money-bill-wave",style:{color:"#ff6b9d"}}),er.jsx("span",{children:"Bravo ! Tu as debloque le badge Buyer"})]}),er.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"},children:[er.jsx("button",{className:"btn btn-primary btn-sm",onClick:async()=>{if(!(null==e?void 0:e.id))return
D(!1)
const{error:t}=await Qi.from("user_badges").upsert({user_id:e.id,badge:"buyer",granted_at:(new Date).toISOString(),granted_by:e.id},{onConflict:"user_id,badge"})
t||H(!0)},style:{minWidth:"140px",fontWeight:700,background:"#ff6b9d",borderColor:"#ff6b9d",color:"#ffffff"},children:"Claim mon badge"}),er.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>{D(!1)},style:{minWidth:"120px",fontWeight:700,borderColor:"#d1d5db",color:"#1a1a2e",background:"#f7f7f9"},children:"Ignorer"})]})]})}),er.jsxs("section",{className:"hero",children:[er.jsxs("div",{className:"hero-bg-effects",children:[er.jsx("div",{className:"grid-overlay"}),er.jsx("div",{className:"glow-effect glow-1"}),er.jsx("div",{className:"glow-effect glow-2"})]}),er.jsx("div",{className:"container",children:er.jsxs("div",{className:"hero-content",children:[er.jsx("div",{className:"hero-badge",children:er.jsx("span",{children:r("home.hero.badge")})}),er.jsx("div",{className:"horus-eye-container",ref:ee,children:er.jsxs("svg",{className:"horus-eye",viewBox:"0 0 200 120",xmlns:"http://www.w3.org/2000/svg",children:[er.jsxs("defs",{children:[er.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[er.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),er.jsxs("feMerge",{children:[er.jsx("feMergeNode",{in:"coloredBlur"}),er.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),er.jsxs("filter",{id:"strongGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[er.jsx("feGaussianBlur",{stdDeviation:"5",result:"coloredBlur"}),er.jsxs("feMerge",{children:[er.jsx("feMergeNode",{in:"coloredBlur"}),er.jsx("feMergeNode",{in:"coloredBlur"}),er.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),er.jsx("path",{className:"horus-outline",d:"M 20 50 Q 50 15, 100 15 Q 150 15, 180 50 Q 150 85, 100 85 Q 50 85, 20 50 Z",fill:"none",stroke:"white",strokeWidth:"3",filter:"url(#glow)"}),er.jsx("path",{className:"horus-brow",d:"M 15 45 Q 50 5, 100 5 Q 150 5, 185 45",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",filter:"url(#glow)"}),er.jsx("circle",{cx:"100",cy:"50",r:"28",fill:"none",stroke:"white",strokeWidth:"2",filter:"url(#glow)"}),er.jsx("circle",{ref:ne,className:"horus-pupil",cx:100,cy:50,r:"12",fill:"white",filter:"url(#strongGlow)"}),er.jsx("path",{className:"horus-marking",d:"M 100 85 L 100 100 Q 95 105, 85 108",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",filter:"url(#glow)"}),er.jsx("path",{className:"horus-spiral",d:"M 85 108 Q 75 112, 70 105 Q 68 98, 75 95",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",filter:"url(#glow)"}),er.jsx("path",{className:"horus-tear",d:"M 70 60 Q 60 75, 55 95 Q 52 105, 60 110",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",filter:"url(#glow)"}),er.jsx("path",{className:"horus-extension",d:"M 180 50 Q 190 48, 195 42",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",filter:"url(#glow)"})]})}),er.jsx("p",{className:"hero-description",children:r("home.hero.description")}),m&&er.jsxs("div",{className:"login-prompt animate-shake",children:[er.jsx("i",{className:"fas fa-lock"}),er.jsx("span",{children:r("home.error.notloggedin")}),er.jsx("button",{onClick:()=>re("/login"),className:"btn btn-sm",children:r("nav.login")})]}),e&&A&&er.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",marginBottom:"10px"},children:["free"!==A.plan&&"blocked"!==A.plan&&(()=>{const e=(e=>{switch(e){case"beginner":return{color:"#ff6b9d",background:"linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(196, 69, 105, 0.2))",border:"#ff6b9d",icon:"fas fa-rocket",label:"Beginner"}
case"beta":return{color:"#10b981",background:"linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2))",border:"#10b981",icon:"fas fa-flask",label:"Beta"}
case"pro":return{color:"#4dabf7",background:"linear-gradient(135deg, rgba(77, 171, 247, 0.2), rgba(34, 139, 230, 0.2))",border:"#4dabf7",icon:"fas fa-shield-alt",label:"Pro"}
default:return{color:"#ffd700",background:"linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.2))",border:"#ffd700",icon:"fas fa-crown",label:"premium"}}})(A.plan)
return er.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"20px",background:e.background,border:"1px solid ".concat(e.border)},children:[er.jsx("i",{className:e.icon,style:{color:e.color}}),er.jsx("span",{style:{fontWeight:600,color:e.color,textTransform:"uppercase",fontSize:"0.85rem",letterSpacing:"0.5px"},children:e.label})]})})(),null!==p&&"blocked"!==A.plan&&er.jsxs("div",{className:"credits-display",children:[er.jsx("i",{className:"fas fa-coins"}),er.jsxs("span",{children:[p," / ",A.credits_per_day," ",r("home.credits.title")]})]})]}),e&&"blocked"===(null==A?void 0:A.plan)&&er.jsxs("div",{className:"search-error animate-fade-in",style:{marginBottom:"12px"},children:[er.jsx("i",{className:"fas fa-ban"}),er.jsx("span",{children:"Votre compte est bloqu\xe9. Contactez le support."})]}),er.jsxs("div",{className:"search-box",children:[er.jsxs("div",{className:"search-input-wrapper",children:[er.jsx("i",{className:"fas fa-search"}),er.jsx("input",{type:"text",placeholder:r(e?"home.search.placeholder":"home.error.notloggedin"),className:"search-input",value:n,onChange:e=>{const t=e.target.value
if(s(t),t.trim().length>=3){const e=(e=>{if(!e||"string"!=typeof e)return{type:"unknown",confidence:0,sanitizedQuery:"",icon:"fa-search",iconClass:"fas",label:"Search",suggestedApis:[]}
const t=e.trim(),r=vo(t)
if(!r)return{type:"unknown",confidence:0,sanitizedQuery:"",icon:"fa-search",iconClass:"fas",label:"Search",suggestedApis:[]}
const n=[...Oo].sort((e,t)=>t.priority-e.priority)
for(const{type:s,pattern:a,icon:i,iconClass:o,label:l,priority:c}of n)if(a.test(r))return{type:s,confidence:c,sanitizedQuery:r,icon:i,iconClass:o,label:l,suggestedApis:Ao[s]||[]}
return{type:"unknown",confidence:50,sanitizedQuery:r,icon:"fa-search",iconClass:"fas",label:"Search",suggestedApis:Ao.unknown}})(t)
h(e)}else h(null)},onKeyPress:e=>"Enter"===e.key&&ie(),disabled:a})]}),er.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[er.jsx("button",{className:"btn btn-search",onClick:ie,disabled:a||!n.trim(),children:a?er.jsxs(er.Fragment,{children:[er.jsx("span",{className:"spinner"}),er.jsx("span",{children:"Searching..."})]}):er.jsxs(er.Fragment,{children:[er.jsx("span",{children:r("home.search.button")}),er.jsx("i",{className:"fas fa-arrow-right"})]})}),e&&"premium"===(null==A?void 0:A.plan)&&er.jsxs("button",{className:"btn btn-intelx",onClick:()=>S(!0),style:{background:"linear-gradient(135deg, #ffd700 0%, #ffa500 100%)",border:"2px solid rgba(255, 215, 0, 0.3)",padding:"12px 24px",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.3s ease",color:"#000",fontWeight:"600"},children:[er.jsx("i",{className:"fas fa-crown"}),er.jsx("span",{children:"IntelX"})]})]})]}),c&&er.jsxs("div",{className:"search-error animate-fade-in",style:{marginTop:"2px",marginBottom:"4px"},children:[er.jsx("i",{className:"fas fa-exclamation-circle"}),er.jsx("span",{children:c})]}),d&&"unknown"!==d.type&&er.jsx("div",{className:"animate-fade-in",style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"8px",marginBottom:"4px"},children:er.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",borderRadius:"20px",background:"rgba(77, 171, 247, 0.15)",border:"1px solid rgba(77, 171, 247, 0.3)",fontSize:"0.8rem",color:"#4dabf7",fontWeight:600},children:[er.jsx("i",{className:"".concat(d.iconClass," ").concat(d.icon)}),er.jsxs("span",{children:["Type d\xe9tect\xe9: ",d.label]})]})}),er.jsxs("div",{className:"search-tags",children:[er.jsxs("span",{children:[r("home.search.popular_tags"),":"]}),er.jsx("button",{className:"search-tag",onClick:()=>oe("email"),children:r("home.search.email_tag")}),er.jsx("button",{className:"search-tag",onClick:()=>oe("username"),children:r("home.search.username_tag")}),er.jsx("button",{className:"search-tag",onClick:()=>oe("discord"),children:r("home.search.discord_tag")}),er.jsx("button",{className:"search-tag",onClick:()=>oe("ip"),children:r("home.search.ip_tag")}),er.jsx("button",{className:"search-tag",onClick:()=>oe("domain"),children:r("home.search.domain_tag")})]}),er.jsxs("div",{className:"hero-stats",children:[er.jsxs("div",{className:"stat-item",children:[er.jsx("div",{className:"stat-number","data-count":"15",children:"+740B"}),er.jsx("div",{className:"stat-label",children:"Sources de donn\xe9es"})]}),er.jsxs("div",{className:"stat-item",children:[er.jsx("div",{className:"stat-number","data-count":"50",children:"+160"}),er.jsx("div",{className:"stat-label",children:"Pays"})]}),er.jsxs("div",{className:"stat-item",children:[er.jsx("div",{className:"stat-number",children:"50To +"}),er.jsx("div",{className:"stat-label",children:"To de DB"})]}),er.jsxs("div",{className:"stat-item",children:[er.jsx("div",{className:"stat-number",children:"99.9%"}),er.jsx("div",{className:"stat-label",children:"Uptime"})]})]})]})})]}),o&&er.jsx("section",{className:"search-results-section",ref:te,children:er.jsxs("div",{className:"container",children:[er.jsxs("div",{className:"section-header",children:[er.jsxs("h2",{className:"section-title",children:[er.jsx("i",{className:"fas fa-search",style:{marginRight:"12px"}}),"Search Results"]}),er.jsxs("p",{className:"section-description",children:[o.length,' result(s) found for "',n,'"']})]}),(null!==b||null!==v)&&((null==b?void 0:b.length)||0)+((null==v?void 0:v.length)||0)>0&&er.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"16px",marginBottom:"20px"},children:er.jsxs("button",{onClick:()=>{const e=[...b||[],...v||[]]
if(0===e.length)return
const t=e=>{const t=e.match(/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g)
return t?[...new Set(t)]:[]},r=["$oid","oid","_id","id","uuid","guid","objectid","__v","_v","version","v","salt","nonce","iv","metadata","meta","internalsource","sourcetype","dataclass"],s="                      __\n  ______ ____   ____ |  | __ ____   ______  _  __\n /  ___// __ \\_/ __ \\|  |/ //    \\ /  _ \\ \\/ \\/ /\n \\___ \\\\  ___/\\  ___/|    <|   |  (  <_> )     /\n/____  >\\___  >\\___  >__|_ \\___|  /\\____/ \\/\\_/\n     \\/     \\/     \\/     \\/    \\/\n\n            discord.gg/Dbs\n\n================================================================================\n                           SEARCH RESULTS EXPORT\n================================================================================\nQuery: ".concat(n,"\nDate: ").concat((new Date).toLocaleString(),"\nTotal Databases: ").concat(e.length,"\nTotal Entries: ").concat(e.reduce((e,t)=>{var r
return e+((null==(r=t.data)?void 0:r.length)||0)},0),"\n================================================================================\n\n"),a={emails:new Set,phones:new Set,names:new Set,addresses:new Set,usernames:new Set,ips:new Set,passwords:new Set},i={EMAILS:[],"PASSWORDS / HASHES":[],"USERNAMES / LOGINS":[],"PHONE NUMBERS":[],"ADDRESSES / LOCATIONS":[],NAMES:[],"IP ADDRESSES":[],DISCORD:[],"URLS / DOMAINS / WEBSITES":[],"DATES / TIMESTAMPS":[],"ACCOUNTS / SERVICES":[],"OTHER DATA":[]},o=(e,n)=>{if((e=>{const t=e.toLowerCase().replace(/[_\-\s]/g,"")
return r.some(e=>t===e||t.startsWith("$"))})(e))return
if(null==n||""===n)return
if(Array.isArray(n))return void n.forEach(t=>{"object"==typeof t&&null!==t?Object.entries(t).forEach(([e,t])=>{o(e,t)}):null!=t&&""!==t&&o(e,t)})
if("object"==typeof n&&null!==n)return void Object.entries(n).forEach(([e,t])=>{o(e,t)})
let s=String(n).trim()
if(0===s.length||"true"===s||"false"===s||"null"===s||"undefined"===s||"[object Object]"===s)return
s=s.replace(/&#x2F;/g,"/").replace(/&#x3A;/g,":").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&#(\d+);/g,(e,t)=>String.fromCharCode(t))
const l=(e=>{const t=e.toLowerCase().replace(/[\s_\-]/g,"")
return t.includes("email")||t.includes("mail")||t.includes("courriel")||"e"===t?"EMAILS":t.includes("password")||t.includes("pass")||t.includes("hash")||t.includes("pwd")||t.includes("secret")||t.includes("credential")?"PASSWORDS / HASHES":t.includes("username")||t.includes("login")||t.includes("nickname")||t.includes("pseudo")||t.includes("handle")||t.includes("userid")||t.includes("accountid")||"user"===t?"USERNAMES / LOGINS":t.includes("phone")||t.includes("phonenumber")||t.includes("tel")||t.includes("mobile")||t.includes("cell")||t.includes("fax")||t.includes("whatsapp")||t.includes("numero")?"PHONE NUMBERS":t.includes("address")||t.match(/^address\d?$/)||t.includes("street")||t.includes("rue")||t.includes("city")||t.includes("ville")||t.includes("country")||t.includes("pays")||t.includes("zip")||t.includes("zipcode")||t.includes("postal")||t.includes("codepostal")||t.includes("state")||t.includes("location")||t.includes("region")||t.includes("province")||t.includes("geo")||t.includes("lat")||t.includes("lng")||t.includes("longitude")||t.includes("latitude")?"ADDRESSES / LOCATIONS":t.includes("firstname")||t.includes("lastname")||t.includes("fullname")||t.includes("realname")||t.includes("displayname")||t.includes("prenom")||t.includes("nom")||"first"===t||"last"===t||t.includes("name")&&!t.includes("username")&&!t.includes("hostname")&&!t.includes("domainname")&&!t.includes("filename")?"NAMES":t.includes("ip")&&!t.includes("zip")&&!t.includes("ship")&&!t.includes("script")&&!t.includes("descript")||t.includes("ipaddress")||"events"===t?"IP ADDRESSES":t.includes("discord")?"DISCORD":t.includes("url")||t.includes("link")||t.includes("domain")||t.includes("website")||t.includes("site")||t.includes("host")||t.includes("server")?"URLS / DOMAINS / WEBSITES":t.includes("date")||t.includes("time")||t.includes("created")||t.includes("updated")||t.includes("born")||t.includes("dob")||t.includes("birthday")||t.includes("expire")||t.includes("end")||t.includes("start")||t.includes("registered")||t.includes("lastlogin")||t.includes("lastseen")||t.includes("createdon")||t.includes("svodenddate")?"DATES / TIMESTAMPS":t.includes("account")||t.includes("service")||t.includes("plan")||t.includes("subscription")||t.includes("status")||t.includes("substatus")||t.includes("type")||t.includes("accounttype")||t.includes("tier")||t.includes("level")||t.includes("role")||t.includes("premium")||t.includes("svod")||t.includes("vod")?"ACCOUNTS / SERVICES":"OTHER DATA"})(e),c=(e=>e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/[_\-]/g," ").replace(/\b\w/g,e=>e.toUpperCase()).trim())(e)
if("events"===e.toLowerCase()||e.toLowerCase().includes("event"))return void t(s).forEach(e=>{a.ips.add(e)
const t="IP: ".concat(e)
i["IP ADDRESSES"].includes(t)||i["IP ADDRESSES"].push(t)})
if("EMAILS"===l||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))a.emails.add(s)
else if("PHONE NUMBERS"===l||/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{3,10}$/.test(s.replace(/\s/g,"")))a.phones.add(s)
else if("NAMES"===l)a.names.add("".concat(c,": ").concat(s))
else if("ADDRESSES / LOCATIONS"===l)a.addresses.add("".concat(c,": ").concat(s))
else if("USERNAMES / LOGINS"===l)a.usernames.add(s)
else if("IP ADDRESSES"===l){const e=t(s)
e.length>0?e.forEach(e=>a.ips.add(e)):a.ips.add(s)}else"PASSWORDS / HASHES"===l&&a.passwords.add(s)
const u="".concat(c,": ").concat(s)
i[l].includes(u)||i[l].push(u)}
e.forEach(e=>{Array.isArray(e.data)&&e.data.forEach(e=>{"object"==typeof e&&null!==e&&Object.entries(e).forEach(([e,t])=>{o(e,t)})})})
let l=s;(a.emails.size>0||a.phones.size>0||a.names.size>0||a.addresses.size>0||a.usernames.size>0||a.ips.size>0||a.passwords.size>0)&&(l+="\n".concat("*".repeat(80),"\n"),l+="".concat("*".repeat(20),"    CONTACT SUMMARY (KEY DATA)    ").concat("*".repeat(20),"\n"),l+="".concat("*".repeat(80),"\n\n"),a.emails.size>0&&(l+="  EMAILS:\n",a.emails.forEach(e=>l+="    -> ".concat(e,"\n")),l+="\n"),a.usernames.size>0&&(l+="  USERNAMES:\n",a.usernames.forEach(e=>l+="    -> ".concat(e,"\n")),l+="\n"),a.passwords.size>0&&(l+="  PASSWORDS:\n",a.passwords.forEach(e=>l+="    -> ".concat(e,"\n")),l+="\n"),a.names.size>0&&(l+="  NAMES:\n",a.names.forEach(e=>l+="    -> ".concat(e,"\n")),l+="\n"),a.phones.size>0&&(l+="  PHONE NUMBERS:\n",a.phones.forEach(e=>l+="    -> ".concat(e,"\n")),l+="\n"),a.addresses.size>0&&(l+="  ADDRESSES:\n",a.addresses.forEach(e=>l+="    -> ".concat(e,"\n")),l+="\n"),a.ips.size>0&&(l+="  IP ADDRESSES:\n",a.ips.forEach(e=>l+="    -> ".concat(e,"\n")),l+="\n"),l+="".concat("*".repeat(80),"\n\n")),l+="\n".concat("=".repeat(80),"\n"),l+="                          DETAILED DATA BY CATEGORY\n",l+="".concat("=".repeat(80),"\n"),Object.entries(i).forEach(([e,t])=>{0!==t.length&&"OTHER DATA"!==e&&(l+="\n".concat("\u2500".repeat(80),"\n"),l+="  ".concat(e," (").concat(t.length," entries)\n"),l+="".concat("\u2500".repeat(80),"\n\n"),t.forEach(e=>{l+="  \u2022 ".concat(e,"\n")}),l+="\n")}),i["OTHER DATA"].length>0&&(l+="\n".concat("\u2500".repeat(80),"\n"),l+="  OTHER DATA (".concat(i["OTHER DATA"].length," entries)\n"),l+="".concat("\u2500".repeat(80),"\n\n"),i["OTHER DATA"].forEach(e=>{l+="  \u2022 ".concat(e,"\n")}),l+="\n"),l+="\n".concat("=".repeat(80),"\n"),l+="                    Generated by Dbs - OSINT Platform\n",l+="                         https://Dbs.io\n",l+="".concat("=".repeat(80),"\n")
const c=new Blob([l],{type:"text/plain;charset=utf-8"}),u=URL.createObjectURL(c),d=document.createElement("a")
d.href=u,d.download="Dbs_results_".concat(n.replace(/[^a-zA-Z0-9]/g,"_"),"_").concat(Date.now(),".txt"),document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(u)},style:{display:"flex",alignItems:"center",gap:"10px",padding:"14px 28px",background:"linear-gradient(135deg, #10b981 0%, #059669 100%)",border:"2px solid rgba(16, 185, 129, 0.5)",borderRadius:"12px",color:"#fff",fontSize:"15px",fontWeight:600,cursor:"pointer",transition:"all 0.3s ease",boxShadow:"0 4px 15px rgba(16, 185, 129, 0.3)"},onMouseOver:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 6px 20px rgba(16, 185, 129, 0.4)"},onMouseOut:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 4px 15px rgba(16, 185, 129, 0.3)"},children:[er.jsx("i",{className:"fas fa-download"}),er.jsx("span",{children:"Download The Results "})]})}),(null!==b||null!==v)&&er.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"stretch",justifyContent:"flex-start",marginTop:"16px",marginBottom:"24px"},children:[er.jsxs("button",{className:"btn-download",onClick:()=>{k("breaches"),l(b||[])},style:{flex:"1 1 0",minWidth:"180px",background:"breaches"===w?"var(--primary)":"transparent",border:"2px solid var(--primary)",color:"breaches"===w?"white":"var(--primary)",cursor:"pointer"},children:[er.jsx("i",{className:"fas fa-database"}),er.jsxs("span",{children:["Breaches (",(null==b?void 0:b.length)||0,")"]})]}),er.jsxs("button",{className:"btn-download",onClick:()=>{k("stealers"),l(v||[])},style:{flex:"1 1 0",minWidth:"180px",background:"stealers"===w?"var(--primary)":"transparent",border:"2px solid var(--primary)",color:"stealers"===w?"white":"var(--primary)",cursor:"pointer"},children:[er.jsx("i",{className:"fas fa-user-secret"}),er.jsxs("span",{children:["Stealers (",(null==v?void 0:v.length)||0,")"]})]})]}),o.length>0?er.jsx("div",{className:"results-grid",children:o.map((e,t)=>{const r=Array.isArray(e.data)?e.data:[],n=e=>e.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b\w/g,e=>e.toUpperCase()),s=(e,t=0)=>{if(null==e||""===e)return er.jsx("span",{className:"field-value field-empty",children:"\u2014"})
if(Array.isArray(e))return 0===e.length?er.jsx("span",{className:"field-value field-empty",children:"\u2014"}):e.every(e=>"object"!=typeof e)?er.jsx("span",{className:"field-value",children:e.join(", ")}):er.jsx("div",{className:"field-nested",children:e.map((e,r)=>er.jsx("div",{className:"nested-item",children:s(e,t+1)},r))})
if("object"==typeof e){const r=Object.entries(e)
return 0===r.length?er.jsx("span",{className:"field-value field-empty",children:"\u2014"}):er.jsx("div",{className:"field-nested",children:r.map(([e,r])=>er.jsxs("div",{className:"nested-field",children:[er.jsxs("span",{className:"nested-key",children:[n(e),":"]}),s(r,t+1)]},e))})}const r=String(e)
return r.length>50?er.jsx("span",{className:"field-value field-long",children:bo(r)}):er.jsx("span",{className:"field-value",children:bo(r)})}
return er.jsxs("div",{className:"result-card animate-fade-in",children:[er.jsxs("div",{className:"result-header",children:[er.jsxs("h3",{children:[er.jsx("i",{className:"stealers"===w?"fas fa-user-secret":"fas fa-database"}),bo(e.database)]}),er.jsxs("span",{className:"result-badge",children:[e.data.length," entr\xe9e(s)"]})]}),e.infoLeak&&er.jsx("p",{className:"result-info",children:bo(yo(e.infoLeak))}),er.jsx("div",{className:"result-data",children:r.map((e,t)=>er.jsx("div",{className:"result-item",children:Object.entries(e).map(([e,t])=>{const r=n(e),a=(e=>{const t=e.toLowerCase()
return t.includes("email")||t.includes("mail")?"fas fa-envelope":t.includes("password")||t.includes("pass")||t.includes("hash")?"fas fa-key":t.includes("phone")||t.includes("tel")?"fas fa-phone":t.includes("ip")||t.includes("address")?"fas fa-network-wired":t.includes("user")||t.includes("name")?"fas fa-user":t.includes("date")||t.includes("time")||t.includes("created")?"fas fa-calendar":t.includes("url")||t.includes("link")||t.includes("domain")?"fas fa-link":t.includes("country")||t.includes("city")||t.includes("location")?"fas fa-map-marker-alt":t.includes("discord")?"fab fa-discord":t.includes("steam")?"fab fa-steam":"fas fa-circle"})(e)
return er.jsxs("div",{className:"result-field",children:[er.jsxs("span",{className:"field-key",children:[er.jsx("i",{className:a}),r]}),s(t)]},e)})},t))})]},"".concat(w,"-").concat(t))})}):er.jsxs("div",{className:"no-results",children:[er.jsx("i",{className:"fas fa-search"}),er.jsx("h3",{children:"No Results Found"}),er.jsxs("p",{children:['No data was found for "',n,'" in this category.']})]})]})}),er.jsx("section",{className:"features",id:"features",children:er.jsxs("div",{className:"container",children:[er.jsxs("div",{className:"section-header",children:[er.jsx("span",{className:"section-badge",children:r("home.features.section")}),er.jsx("h2",{className:"section-title",children:r("home.features.title")}),er.jsx("p",{className:"section-description",children:r("home.features.subtitle")})]}),er.jsxs("div",{className:"features-grid",children:[er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-database"})}),er.jsx("h3",{children:r("features.violations")}),er.jsx("p",{children:r("features.violations.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-user-secret"})}),er.jsx("h3",{children:r("features.osint")}),er.jsx("p",{children:r("features.osint.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-moon"})}),er.jsx("h3",{children:r("features.darkweb")}),er.jsx("p",{children:r("features.darkweb.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-bolt"})}),er.jsx("h3",{children:r("features.realtime")}),er.jsx("p",{children:r("features.realtime.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-lock"})}),er.jsx("h3",{children:r("features.encryption")}),er.jsx("p",{children:r("features.encryption.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-code"})}),er.jsx("h3",{children:r("features.api")}),er.jsx("p",{children:r("features.api.desc")})]})]})]})}),er.jsx("section",{className:"how-it-works",children:er.jsxs("div",{className:"container",children:[er.jsxs("div",{className:"section-header",children:[er.jsx("span",{className:"section-badge",children:r("home.howitworks.section")}),er.jsx("h2",{className:"section-title",children:r("home.howitworks.title")}),er.jsx("p",{className:"section-description",children:r("home.howitworks.subtitle")})]}),er.jsxs("div",{className:"steps-grid",children:[er.jsxs("div",{className:"step-card",children:[er.jsx("div",{className:"step-number",children:"01"}),er.jsxs("div",{className:"step-content",children:[er.jsx("h3",{children:r("home.howitworks.step1.title")}),er.jsx("p",{children:r("home.howitworks.step1.desc")})]}),er.jsx("div",{className:"step-icon",children:er.jsx("i",{className:"fas fa-keyboard"})})]}),er.jsxs("div",{className:"step-card",children:[er.jsx("div",{className:"step-number",children:"02"}),er.jsxs("div",{className:"step-content",children:[er.jsx("h3",{children:r("home.howitworks.step2.title")}),er.jsx("p",{children:r("home.howitworks.step2.desc")})]}),er.jsx("div",{className:"step-icon",children:er.jsx("i",{className:"fas fa-cogs"})})]}),er.jsxs("div",{className:"step-card",children:[er.jsx("div",{className:"step-number",children:"03"}),er.jsxs("div",{className:"step-content",children:[er.jsx("h3",{children:r("home.howitworks.step3.title")}),er.jsx("p",{children:r("home.howitworks.step3.desc")})]}),er.jsx("div",{className:"step-icon",children:er.jsx("i",{className:"fas fa-chart-bar"})})]})]})]})}),er.jsx("section",{className:"trust-section",children:er.jsx("div",{className:"container",children:er.jsxs("div",{className:"trust-content",children:[er.jsxs("div",{className:"trust-text",children:[er.jsx("span",{className:"section-badge",children:r("home.trust.section")}),er.jsx("h2",{children:r("home.trust.title")}),er.jsx("p",{children:r("home.trust.subtitle")}),er.jsxs("div",{className:"trust-features",children:[er.jsxs("div",{className:"trust-feature",children:[er.jsx("i",{className:"fas fa-check-circle"}),er.jsx("span",{children:r("home.trust.gdpr")})]}),er.jsxs("div",{className:"trust-feature",children:[er.jsx("i",{className:"fas fa-check-circle"}),er.jsx("span",{children:r("home.trust.audit")})]}),er.jsxs("div",{className:"trust-feature",children:[er.jsx("i",{className:"fas fa-check-circle"}),er.jsx("span",{children:r("home.trust.support")})]}),er.jsxs("div",{className:"trust-feature",children:[er.jsx("i",{className:"fas fa-check-circle"}),er.jsx("span",{children:r("home.trust.sla")})]})]}),er.jsxs(Mr,{to:"/contact",className:"btn btn-primary",children:[r("home.trust.contact"),er.jsx("i",{className:"fas fa-arrow-right"})]})]}),er.jsxs("div",{className:"trust-stats",children:[er.jsxs("div",{className:"trust-stat-card",children:[er.jsx("div",{className:"trust-stat-icon",children:er.jsx("i",{className:"fas fa-building"})}),er.jsx("div",{className:"trust-stat-number",children:"40+"}),er.jsx("div",{className:"trust-stat-label",children:r("home.trust.orgs")})]}),er.jsxs("div",{className:"trust-stat-card",children:[er.jsx("div",{className:"trust-stat-icon",children:er.jsx("i",{className:"fas fa-users"})}),er.jsx("div",{className:"trust-stat-number",children:"10K+"}),er.jsx("div",{className:"trust-stat-label",children:r("home.trust.users")})]}),er.jsxs("div",{className:"trust-stat-card",children:[er.jsx("div",{className:"trust-stat-icon",children:er.jsx("i",{className:"fas fa-search"})}),er.jsx("div",{className:"trust-stat-number",children:"1M+"}),er.jsx("div",{className:"trust-stat-label",children:r("home.trust.searches")})]}),er.jsxs("div",{className:"trust-stat-card",children:[er.jsx("div",{className:"trust-stat-icon",children:er.jsx("i",{className:"fas fa-star"})}),er.jsx("div",{className:"trust-stat-number",children:"4.9/5"}),er.jsx("div",{className:"trust-stat-label",children:r("home.trust.rating")})]})]})]})})}),er.jsx("section",{className:"pricing-preview",style:{paddingTop:"60px"},children:er.jsx("div",{className:"container",children:er.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"32px",maxWidth:"1600px",margin:"0 auto",padding:"0 16px"},children:[er.jsxs("div",{className:"pricing-card",style:{background:"var(--bg-card)",border:"2px solid #ff6b9d",borderRadius:"var(--radius-lg)",padding:"32px"},children:[er.jsxs("div",{className:"pricing-header",children:[er.jsx("h3",{style:{color:"#ff6b9d"},children:"Beginner"}),er.jsxs("div",{className:"pricing-price",children:[er.jsx("span",{className:"currency",children:"\u20ac"}),er.jsx("span",{className:"amount",children:"9.99"}),er.jsx("span",{className:"period",children:"/lifetime"})]}),er.jsx("p",{style:{color:"var(--text-muted)"},children:"Paiement unique en crypto"})]}),er.jsxs("ul",{className:"pricing-features",children:[er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," 100 search/day"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," Complete Results"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," Support 24h/24"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," OSINT Search"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," API Access"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-times"})," IntelX"]})]}),er.jsx(Mr,{to:"/contact?plan=beginner",className:"btn btn-primary btn-block",children:"Acheter"})]}),er.jsxs("div",{className:"pricing-card",style:{background:"var(--bg-card)",border:"2px solid #4dabf7",borderRadius:"var(--radius-lg)",padding:"32px"},children:[er.jsxs("div",{className:"pricing-header",children:[er.jsx("h3",{style:{color:"#4dabf7"},children:"Pro"}),er.jsxs("div",{className:"pricing-price",children:[er.jsx("span",{className:"currency",children:"\u20ac"}),er.jsx("span",{className:"amount",children:"24.99"}),er.jsx("span",{className:"period",children:"/lifetime"})]}),er.jsx("p",{style:{color:"var(--text-muted)"},children:"Pour utilisateurs avanc\xe9s"})]}),er.jsxs("ul",{className:"pricing-features",children:[er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",er.jsx("strong",{children:"500 search/day"})]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," Complete Results"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," Support 24h/24"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," OSINT Search"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," API Access"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-times"})," IntelX"]})]}),er.jsx(Mr,{to:"/contact?plan=pro",className:"btn btn-primary btn-block",children:"Acheter"})]}),er.jsxs("div",{className:"pricing-card featured",style:{background:"var(--bg-card)",border:"2px solid #ffd700",borderRadius:"var(--radius-lg)",padding:"32px"},children:[er.jsxs("div",{className:"pricing-header",children:[er.jsxs("h3",{style:{color:"#ffd700"},children:[er.jsx("i",{className:"fas fa-crown"})," premium"]}),er.jsxs("div",{className:"pricing-price",children:[er.jsx("span",{className:"currency",children:"\u20ac"}),er.jsx("span",{className:"amount",children:"200"}),er.jsx("span",{className:"period",children:"/lifetime"})]}),er.jsx("p",{style:{color:"var(--text-muted)"},children:"Acc\xe8s ultime"})]}),er.jsxs("ul",{className:"pricing-features",children:[er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",er.jsx("strong",{children:"5000 search/day"})]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," Complete Results"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," Support prioritaire 24h/24"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," OSINT Search"]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",er.jsx("strong",{children:"API Access"})]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," IntelX"]})]}),er.jsx(Mr,{to:"/contact?plan=premium",className:"btn btn-primary btn-block",children:"Acheter"})]})]})})}),er.jsx("section",{className:"cta-section",children:er.jsx("div",{className:"container",children:er.jsxs("div",{className:"cta-content",children:[er.jsx("h2",{children:r("home.cta.title")}),er.jsx("p",{children:r("home.cta.subtitle")}),er.jsxs("div",{className:"cta-buttons",children:[er.jsxs(Mr,{to:"/register",className:"btn btn-primary btn-lg",children:[r("home.cta.button1"),er.jsx("i",{className:"fas fa-arrow-right"})]}),er.jsx(Mr,{to:"/contact",className:"btn btn-outline btn-lg",children:r("home.cta.button2")})]})]})})}),j&&er.jsx("div",{className:"modal-overlay",onClick:()=>S(!1),style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,backdropFilter:"blur(4px)"},children:er.jsxs("div",{className:"modal-content",onClick:e=>e.stopPropagation(),style:{background:"linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)",border:"2px solid rgba(255, 215, 0, 0.5)",borderRadius:"16px",padding:"32px",maxWidth:"500px",width:"90%",boxShadow:"0 20px 60px rgba(255, 215, 0, 0.2)"},children:[er.jsxs("div",{style:{marginBottom:"24px",textAlign:"center"},children:[er.jsx("i",{className:"fas fa-crown",style:{fontSize:"48px",color:"#ffd700",marginBottom:"16px"}}),er.jsx("h2",{style:{color:"#ffd700",marginBottom:"8px"},children:"IntelX Search"}),er.jsx("p",{style:{color:"rgba(255, 215, 0, 0.7)",fontSize:"14px"},children:"Advanced search in IntelX databases"})]}),er.jsxs("div",{style:{marginBottom:"20px"},children:[er.jsxs("label",{style:{display:"block",color:"#fff",marginBottom:"8px",fontWeight:500},children:[er.jsx("i",{className:"fas fa-database",style:{marginRight:"8px"}}),"Bucket"]}),er.jsxs("select",{value:E,onChange:e=>C(e.target.value),style:{width:"100%",padding:"12px",background:"rgba(31, 41, 55, 0.8)",border:"2px solid rgba(255, 215, 0, 0.4)",borderRadius:"8px",color:"#fff",fontSize:"14px",cursor:"pointer"},children:[er.jsx("option",{value:"leaks.logs",children:"Leaks Logs"}),er.jsx("option",{value:"darknet.tor",children:"Darknet (TOR)"}),er.jsx("option",{value:"dns",children:"DNS Records"}),er.jsx("option",{value:"documents.public.scihub",children:"Documents (Sci-Hub)"}),er.jsx("option",{value:"dumpster",children:"Dumpster"}),er.jsx("option",{value:"leaks.private",children:"Leaks Private"}),er.jsx("option",{value:"leaks.public",children:"Leaks Public"}),er.jsx("option",{value:"pastes",children:"Pastes"}),er.jsx("option",{value:"web.gov.ru",children:"Web Gov RU"})]})]}),er.jsxs("div",{style:{marginBottom:"24px"},children:[er.jsxs("label",{style:{display:"block",color:"#fff",marginBottom:"8px",fontWeight:500},children:[er.jsx("i",{className:"fas fa-key",style:{marginRight:"8px"}}),"Storage ID"]}),er.jsx("input",{type:"text",value:_,onChange:e=>N(e.target.value),placeholder:"Entrez le Storage ID...",style:{width:"100%",padding:"12px",background:"rgba(31, 41, 55, 0.8)",border:"2px solid rgba(255, 215, 0, 0.4)",borderRadius:"8px",color:"#fff",fontSize:"14px"}})]}),er.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[er.jsx("button",{onClick:()=>S(!1),disabled:R,style:{padding:"12px 24px",background:"rgba(255, 255, 255, 0.1)",border:"2px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",color:"#fff",cursor:"pointer",fontSize:"14px",fontWeight:500,transition:"all 0.3s ease"},children:"Annuler"}),er.jsx("button",{onClick:async()=>{var t,r,n
if(e)if(_.trim()){P(!0),u(""),l(null),y(null),x(null)
try{const{data:e}=await Qi.auth.getSession(),s=null==(t=e.session)?void 0:t.access_token
if(!s)throw new Error("User not authenticated")
const{data:a,error:i}=await Qi.functions.invoke("api-search",{body:{storageId:_,bucket:E,searchType:"intelx"},headers:{Authorization:"Bearer ".concat(s)}})
if(i)throw new Error(i.message||"IntelX search error")
if((null==(r=null==a?void 0:a.meta)?void 0:r.message)&&"No results found"!==a.meta.message)throw new Error(a.meta.message)
const o=Array.isArray(null==a?void 0:a.results)?a.results:[]
if(0===o.length&&(null==(n=null==a?void 0:a.meta)?void 0:n.message))return u(a.meta.message),void S(!1)
l(o),y(o),k("breaches"),S(!1),N(""),te.current&&setTimeout(()=>{var e
null==(e=te.current)||e.scrollIntoView({behavior:"smooth",block:"start"})},100)}catch(s){u(s.message||"Error during IntelX search")}finally{P(!1)}}else u("Veuillez entrer un Storage ID")
else u("Vous devez \xeatre connect\xe9 pour utiliser IntelX")},disabled:R||!_.trim(),style:{padding:"12px 24px",background:R||!_.trim()?"rgba(255, 215, 0, 0.3)":"linear-gradient(135deg, #ffd700 0%, #ffa500 100%)",border:"2px solid rgba(255, 215, 0, 0.5)",borderRadius:"8px",color:R||!_.trim()?"rgba(0, 0, 0, 0.5)":"#000",cursor:R||!_.trim()?"not-allowed":"pointer",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.3s ease"},children:R?er.jsxs(er.Fragment,{children:[er.jsx("span",{className:"spinner"}),er.jsx("span",{children:"Searching..."})]}):er.jsxs(er.Fragment,{children:[er.jsx("i",{className:"fas fa-search"}),er.jsx("span",{children:"Search"})]})})]})]})})]})
var le},rl=()=>{const{t:e}=so()
return er.jsxs($o,{children:[er.jsx("header",{className:"page-header",children:er.jsxs("div",{className:"container",children:[er.jsx("span",{className:"section-badge",children:e("features.header.badge")}),er.jsx("h1",{children:e("features.header.title")}),er.jsx("p",{children:e("features.header.subtitle")})]})}),er.jsx("section",{className:"features",style:{paddingTop:"60px"},children:er.jsx("div",{className:"container",children:er.jsxs("div",{className:"features-grid",children:[er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-database"})}),er.jsx("h3",{children:e("features.violations")}),er.jsx("p",{children:e("features.violations.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-user-secret"})}),er.jsx("h3",{children:e("features.osint")}),er.jsx("p",{children:e("features.osint.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-moon"})}),er.jsx("h3",{children:e("features.darkweb")}),er.jsx("p",{children:e("features.darkweb.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-bolt"})}),er.jsx("h3",{children:e("features.realtime")}),er.jsx("p",{children:e("features.realtime.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-lock"})}),er.jsx("h3",{children:e("features.encryption")}),er.jsx("p",{children:e("features.encryption.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-code"})}),er.jsx("h3",{children:e("features.api")}),er.jsx("p",{children:e("features.api.desc")})]})]})})}),er.jsx("section",{className:"content-section",children:er.jsxs("div",{className:"container",children:[er.jsxs("div",{className:"section-header",children:[er.jsx("span",{className:"section-badge",children:e("features.section.types")}),er.jsx("h2",{className:"section-title",children:e("features.types.title")}),er.jsx("p",{className:"section-description",children:e("features.types.desc")})]}),er.jsxs("div",{className:"features-grid",children:[er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-envelope"})}),er.jsx("h3",{children:e("features.email")}),er.jsx("p",{children:e("features.email.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-user"})}),er.jsx("h3",{children:e("features.username")}),er.jsx("p",{children:e("features.username.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-phone"})}),er.jsx("h3",{children:e("features.phone")}),er.jsx("p",{children:e("features.phone.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-globe"})}),er.jsx("h3",{children:e("features.ip")}),er.jsx("p",{children:e("features.ip.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-link"})}),er.jsx("h3",{children:e("features.domain")}),er.jsx("p",{children:e("features.domain.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fab fa-discord"})}),er.jsx("h3",{children:e("features.discord")}),er.jsx("p",{children:e("features.discord.desc")})]})]})]})}),er.jsx("section",{className:"content-section",children:er.jsxs("div",{className:"container",children:[er.jsxs("div",{className:"section-header",children:[er.jsx("span",{className:"section-badge",children:e("features.section.sources")}),er.jsx("h2",{className:"section-title",children:e("features.sources.title")}),er.jsx("p",{className:"section-description",children:e("features.sources.desc")})]}),er.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"24px",marginTop:"40px"},children:[er.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center"},children:[er.jsx("i",{className:"fas fa-database",style:{fontSize:"2rem",color:"var(--text-primary)",marginBottom:"12px"}}),er.jsx("h4",{style:{marginBottom:"8px"},children:e("features.breaches")}),er.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:e("features.breaches.count")})]}),er.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center"},children:[er.jsx("i",{className:"fab fa-twitter",style:{fontSize:"2rem",color:"var(--text-primary)",marginBottom:"12px"}}),er.jsx("h4",{style:{marginBottom:"8px"},children:e("features.social")}),er.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:e("features.social.count")})]}),er.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center"},children:[er.jsx("i",{className:"fas fa-moon",style:{fontSize:"2rem",color:"var(--text-primary)",marginBottom:"12px"}}),er.jsx("h4",{style:{marginBottom:"8px"},children:e("features.dark")}),er.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:e("features.dark.count")})]}),er.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center"},children:[er.jsx("i",{className:"fas fa-file-alt",style:{fontSize:"2rem",color:"var(--text-primary)",marginBottom:"12px"}}),er.jsx("h4",{style:{marginBottom:"8px"},children:e("features.public")}),er.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:e("features.public.count")})]}),er.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center"},children:[er.jsx("i",{className:"fas fa-paste",style:{fontSize:"2rem",color:"var(--text-primary)",marginBottom:"12px"}}),er.jsx("h4",{style:{marginBottom:"8px"},children:e("features.pastes")}),er.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:e("features.pastes.count")})]})]})]})}),er.jsx("section",{className:"trust-section",children:er.jsx("div",{className:"container",children:er.jsxs("div",{className:"trust-content",children:[er.jsxs("div",{className:"trust-text",children:[er.jsx("span",{className:"section-badge",children:e("features.section.security")}),er.jsx("h2",{children:e("features.security.title")}),er.jsx("p",{children:e("features.security.desc")}),er.jsxs("div",{className:"trust-features",children:[er.jsxs("div",{className:"trust-feature",children:[er.jsx("i",{className:"fas fa-check-circle"}),er.jsx("span",{children:e("features.aes256")})]}),er.jsxs("div",{className:"trust-feature",children:[er.jsx("i",{className:"fas fa-check-circle"}),er.jsx("span",{children:e("features.gdpr")})]}),er.jsxs("div",{className:"trust-feature",children:[er.jsx("i",{className:"fas fa-check-circle"}),er.jsx("span",{children:e("features.zerologo")})]}),er.jsxs("div",{className:"trust-feature",children:[er.jsx("i",{className:"fas fa-check-circle"}),er.jsx("span",{children:e("features.audit")})]})]})]}),er.jsxs("div",{className:"trust-stats",children:[er.jsxs("div",{className:"trust-stat-card",children:[er.jsx("div",{className:"trust-stat-icon",children:er.jsx("i",{className:"fas fa-lock"})}),er.jsx("div",{className:"trust-stat-number",children:"TLS 1.3"}),er.jsx("div",{className:"trust-stat-label",children:"Chiffrement"})]}),er.jsxs("div",{className:"trust-stat-card",children:[er.jsx("div",{className:"trust-stat-icon",children:er.jsx("i",{className:"fas fa-server"})}),er.jsx("div",{className:"trust-stat-number",children:"SOC 2"}),er.jsx("div",{className:"trust-stat-label",children:"Certifi\xe9"})]}),er.jsxs("div",{className:"trust-stat-card",children:[er.jsx("div",{className:"trust-stat-icon",children:er.jsx("i",{className:"fas fa-shield-alt"})}),er.jsx("div",{className:"trust-stat-number",children:"99.9%"}),er.jsx("div",{className:"trust-stat-label",children:"Uptime"})]}),er.jsxs("div",{className:"trust-stat-card",children:[er.jsx("div",{className:"trust-stat-icon",children:er.jsx("i",{className:"fas fa-clock"})}),er.jsx("div",{className:"trust-stat-number",children:"24/7"}),er.jsx("div",{className:"trust-stat-label",children:"Monitoring"})]})]})]})})}),er.jsx("section",{className:"cta-section",children:er.jsx("div",{className:"container",children:er.jsxs("div",{className:"cta-content",children:[er.jsx("h2",{children:e("features.cta.text")}),er.jsx("p",{children:e("features.cta.subtitle")}),er.jsxs("div",{className:"cta-buttons",children:[er.jsxs(Mr,{to:"/register",className:"btn btn-primary btn-lg",children:[e("features.cta.button"),er.jsx("i",{className:"fas fa-arrow-right"})]}),er.jsx(Mr,{to:"/pricing",className:"btn btn-outline btn-lg",children:e("nav.pricing")})]})]})})})]})},nl=()=>{const{t:e}=so()
return er.jsxs($o,{children:[er.jsx("header",{className:"page-header",children:er.jsxs("div",{className:"container",children:[er.jsx("span",{className:"section-badge",children:e("pricing.header.badge")}),er.jsx("h1",{children:e("pricing.header.title")}),er.jsx("p",{children:e("pricing.header.subtitle")})]})}),er.jsx("section",{className:"pricing-preview",style:{paddingTop:"60px"},children:er.jsxs("div",{className:"container",children:[er.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"32px",maxWidth:"1600px",margin:"0 auto",padding:"0 16px"},children:[er.jsxs("div",{className:"pricing-card",style:{background:"var(--bg-card)",border:"2px solid #ff6b9d",borderRadius:"var(--radius-lg)",padding:"32px"},children:[er.jsxs("div",{className:"pricing-header",children:[er.jsx("h3",{style:{color:"#ff6b9d"},children:e("pricing.plan.beginner")}),er.jsxs("div",{className:"pricing-price",children:[er.jsx("span",{className:"currency",children:"\u20ac"}),er.jsx("span",{className:"amount",children:e("pricing.price.beginner")}),er.jsx("span",{className:"period",children:e("pricing.price.period")})]}),er.jsx("p",{style:{color:"var(--text-muted)"},children:e("pricing.price.crypto")})]}),er.jsxs("ul",{className:"pricing-features",children:[er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," 100 ",e("pricing.searches.per.day")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.results")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.support")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.osint")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.api")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-times"})," ",e("pricing.feature.intelx")]})]}),er.jsx(Mr,{to:"/contact?plan=beginner",className:"btn btn-primary btn-block",children:e("pricing.button.buy")})]}),er.jsxs("div",{className:"pricing-card",style:{background:"var(--bg-card)",border:"2px solid #4dabf7",borderRadius:"var(--radius-lg)",padding:"32px"},children:[er.jsxs("div",{className:"pricing-header",children:[er.jsx("h3",{style:{color:"#4dabf7"},children:e("pricing.plan.pro")}),er.jsxs("div",{className:"pricing-price",children:[er.jsx("span",{className:"currency",children:"\u20ac"}),er.jsx("span",{className:"amount",children:e("pricing.price.pro")}),er.jsx("span",{className:"period",children:e("pricing.price.period")})]}),er.jsx("p",{style:{color:"var(--text-muted)"},children:e("pricing.price.advanced")})]}),er.jsxs("ul",{className:"pricing-features",children:[er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",er.jsxs("strong",{children:["500 ",e("pricing.searches.per.day")]})]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.results")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.support")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.osint")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.api")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-times"})," ",e("pricing.feature.intelx")]})]}),er.jsx(Mr,{to:"/contact?plan=pro",className:"btn btn-primary btn-block",children:e("pricing.button.buy")})]}),er.jsxs("div",{className:"pricing-card featured",style:{background:"var(--bg-card)",border:"2px solid #ffd700",borderRadius:"var(--radius-lg)",padding:"32px"},children:[er.jsxs("div",{className:"pricing-header",children:[er.jsxs("h3",{style:{color:"#ffd700"},children:[er.jsx("i",{className:"fas fa-crown"})," ",e("pricing.plan.premium")]}),er.jsxs("div",{className:"pricing-price",children:[er.jsx("span",{className:"currency",children:"\u20ac"}),er.jsx("span",{className:"amount",children:e("pricing.price.premium")}),er.jsx("span",{className:"period",children:e("pricing.price.period")})]}),er.jsx("p",{style:{color:"var(--text-muted)"},children:e("pricing.price.ultimate")})]}),er.jsxs("ul",{className:"pricing-features",children:[er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",er.jsxs("strong",{children:["5000 ",e("pricing.searches.per.day")]})]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.results")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.support")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.osint")]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",er.jsx("strong",{children:e("pricing.feature.api")})]}),er.jsxs("li",{children:[er.jsx("i",{className:"fas fa-check"})," ",e("pricing.feature.intelx")]})]}),er.jsx(Mr,{to:"/contact?plan=premium",className:"btn btn-primary btn-block",children:e("pricing.button.buy")})]})]}),er.jsxs("div",{style:{maxWidth:"600px",margin:"40px auto 0",textAlign:"center",padding:"24px",background:"rgba(255, 255, 255, 0.03)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)"},children:[er.jsx("i",{className:"fab fa-bitcoin",style:{fontSize:"2rem",color:"#ffd700",marginBottom:"12px"}}),er.jsx("h4",{style:{marginBottom:"8px"},children:e("pricing.payment.title")}),er.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:e("pricing.payment.desc")})]})]})}),er.jsx("section",{className:"content-section",children:er.jsxs("div",{className:"container",children:[er.jsx("div",{className:"section-header",children:er.jsx("h2",{className:"section-title",children:e("pricing.faq.title")})}),"          ",er.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[er.jsxs("div",{style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[er.jsx("h3",{style:{marginBottom:"12px"},children:e("pricing.faq.payment.title")}),er.jsx("p",{style:{color:"var(--text-secondary)"},children:e("pricing.faq.payment.desc")})]}),er.jsxs("div",{style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[er.jsx("h3",{style:{marginBottom:"12px"},children:e("pricing.faq.lifetime.title")}),er.jsx("p",{style:{color:"var(--text-secondary)"},children:e("pricing.faq.lifetime.desc")})]}),er.jsxs("div",{style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[er.jsx("h3",{style:{marginBottom:"12px"},children:e("pricing.faq.osint.title")}),er.jsx("p",{style:{color:"var(--text-secondary)"},children:e("pricing.faq.osint.desc")})]}),er.jsxs("div",{style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px"},children:[er.jsx("h3",{style:{marginBottom:"12px"},children:e("pricing.faq.activation.title")}),er.jsx("p",{style:{color:"var(--text-secondary)"},children:e("pricing.faq.activation.desc")})]})]})]})}),er.jsx("section",{className:"cta-section",children:er.jsx("div",{className:"container",children:er.jsxs("div",{className:"cta-content",children:[er.jsx("h2",{children:e("pricing.cta.title")}),er.jsx("p",{children:e("pricing.cta.subtitle")}),er.jsxs("div",{className:"cta-buttons",children:[er.jsxs(Mr,{to:"/contact?plan=beginner",className:"btn btn-primary btn-lg",children:[e("pricing.cta.button.beginner"),er.jsx("i",{className:"fas fa-arrow-right"})]}),er.jsx(Mr,{to:"/contact?plan=premium",className:"btn btn-outline btn-lg",children:e("pricing.cta.button.premium")})]})]})})})]})},sl=()=>{const{t:e}=so(),[t,r]=nr.useState(null)
return nr.useEffect(()=>{(async()=>{try{const{count:e,error:t}=await Qi.from("profiles").select("*",{count:"exact",head:!0})
if(!t&&"number"==typeof e)return void r(e)
const{count:n,error:s}=await Qi.from("user_credits").select("*",{count:"exact",head:!0})
s||"number"!=typeof n||r(n)}catch(e){}})()},[]),er.jsxs($o,{children:[er.jsx("header",{className:"page-header",children:er.jsxs("div",{className:"container",children:[er.jsx("span",{className:"section-badge",children:e("about.header.badge")}),er.jsx("h1",{children:e("about.header.title")}),er.jsx("p",{children:e("about.header.subtitle")})]})}),er.jsx("section",{className:"content-section",children:er.jsx("div",{className:"container",children:er.jsxs("div",{className:"about-mission-grid",children:[er.jsxs("div",{className:"about-mission-copy",children:[er.jsx("h2",{children:e("about.mission")}),er.jsx("p",{children:e("about.mission.text1")}),er.jsx("p",{children:e("about.mission.text2")}),er.jsx("p",{children:e("about.mission.text3")})]}),er.jsx("div",{className:"about-mission-stats",children:er.jsxs("div",{className:"about-stats-grid",children:[er.jsxs("div",{className:"about-stat",children:[er.jsx("div",{className:"about-stat-number",children:"2025"}),er.jsx("div",{className:"about-stat-label",children:e("about.year")})]}),er.jsxs("div",{className:"about-stat",children:[er.jsx("div",{className:"about-stat-number",children:"50+"}),er.jsx("div",{className:"about-stat-label",children:e("about.countries")})]}),er.jsxs("div",{className:"about-stat",children:[er.jsx("div",{className:"about-stat-number",children:(n=t,null===n?"...":n>=1e3?"".concat((n/1e3).toFixed(1),"K+"):"".concat(n,"+"))}),er.jsx("div",{className:"about-stat-label",children:e("about.users")})]}),er.jsxs("div",{className:"about-stat",children:[er.jsx("div",{className:"about-stat-number",children:"4"}),er.jsx("div",{className:"about-stat-label",children:e("about.members")})]})]})})]})})}),er.jsx("section",{className:"features",children:er.jsxs("div",{className:"container",children:[er.jsxs("div",{className:"section-header",children:[er.jsx("span",{className:"section-badge",children:e("about.values.title")}),er.jsx("h2",{className:"section-title",children:e("about.values.subtitle")})]}),er.jsxs("div",{className:"features-grid",children:[er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-shield-alt"})}),er.jsx("h3",{children:e("about.security")}),er.jsx("p",{children:e("about.security.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-eye"})}),er.jsx("h3",{children:e("about.transparency")}),er.jsx("p",{children:e("about.transparency.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-balance-scale"})}),er.jsx("h3",{children:e("about.ethics")}),er.jsx("p",{children:e("about.ethics.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-users"})}),er.jsx("h3",{children:e("about.accessibility")}),er.jsx("p",{children:e("about.accessibility.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-rocket"})}),er.jsx("h3",{children:e("about.innovation")}),er.jsx("p",{children:e("about.innovation.desc")})]}),er.jsxs("div",{className:"feature-card",children:[er.jsx("div",{className:"feature-icon",children:er.jsx("i",{className:"fas fa-handshake"})}),er.jsx("h3",{children:e("about.support")}),er.jsx("p",{children:e("about.support.desc")})]})]})]})}),er.jsx("section",{className:"content-section",children:er.jsxs("div",{className:"container",children:[er.jsxs("div",{className:"section-header",children:[er.jsx("span",{className:"section-badge",children:e("about.team.title")}),er.jsx("h2",{className:"section-title",children:e("about.team.description")}),er.jsx("p",{className:"section-description",children:e("about.team.subtitle")})]}),er.jsxs("div",{className:"team-grid about-team-grid",children:[er.jsxs("div",{className:"team-card about-team-card",children:[er.jsx("div",{className:"team-avatar",children:er.jsx("i",{className:"fas fa-user"})}),er.jsx("h3",{children:"bZow"}),er.jsx("p",{className:"role",children:er.jsx("span",{className:"about-role-chip",children:"Founder"})})]}),er.jsxs("div",{className:"team-card about-team-card",children:[er.jsx("div",{className:"team-avatar",children:er.jsx("i",{className:"fas fa-user"})}),er.jsx("h3",{children:"Quraiv"}),er.jsx("p",{className:"role",children:er.jsx("span",{className:"about-role-chip",children:"Founder"})})]}),er.jsxs("div",{className:"team-card about-team-card",children:[er.jsx("div",{className:"team-avatar",children:er.jsx("i",{className:"fas fa-user"})}),er.jsx("h3",{children:"Lain"}),er.jsx("p",{className:"role",children:er.jsx("span",{className:"about-role-chip",children:"Founder"})})]})]})]})}),er.jsx("section",{className:"cta-section",children:er.jsx("div",{className:"container",children:er.jsxs("div",{className:"cta-content",children:[er.jsx("h2",{children:e("about.join.title")}),er.jsx("p",{children:e("about.join.subtitle")}),er.jsxs("div",{className:"cta-buttons",children:[er.jsxs(Mr,{to:"/contact",className:"btn btn-primary btn-lg",children:["Voir les offres",er.jsx("i",{className:"fas fa-arrow-right"})]}),er.jsx(Mr,{to:"/contact",className:"btn btn-outline btn-lg",children:"Nous contacter"})]})]})})})]})
var n},al=()=>{var e
const{user:t,profile:r}=to(),{t:n,language:s}=so(),a=T(),[i]=function(){o("undefined"!=typeof URLSearchParams,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.")
let e=nr.useRef(W(void 0)),t=nr.useRef(!1),r=N(),n=nr.useMemo(()=>function(e,t){let r=W(e)
return t&&t.forEach((e,n)=>{r.has(n)||t.getAll(n).forEach(e=>{r.append(n,e)})}),r}(r.search,t.current?null:e.current),[r.search]),s=T(),a=nr.useCallback((e,r)=>{const a=W("function"==typeof e?e(new URLSearchParams(n)):e)
t.current=!0,s("?"+a,r)},[s,n])
return[n,a]}(),[l,c]=nr.useState(""),[u,d]=nr.useState(""),[h,p]=nr.useState("contact"),[f,m]=nr.useState(null),[g,b]=nr.useState(!1),[y,v]=nr.useState(!1),[x,w]=nr.useState("")
return nr.useEffect(()=>{const e=i.get("plan")
"beginner"!==e&&"premium"!==e||(p("acces_payant"),m(e),c("Achat plan ".concat("beginner"===e?"Beginner":"premium")),d("Bonjour,\n\nJe souhaite acheter le plan ".concat("beginner"===e?"Beginner (\u20ac9.99)":"premium (\u20ac200)",".\n\nMerci de me fournir l'adresse LTC pour le paiement.")))},[i]),er.jsxs($o,{children:[er.jsx("header",{className:"page-header",children:er.jsxs("div",{className:"container",children:[er.jsx("span",{className:"section-badge",children:n("contact.header.badge")}),er.jsx("h1",{children:n("contact.header.title")}),er.jsx("p",{children:n("contact.header.subtitle")})]})}),er.jsx("section",{className:"content-section",children:er.jsx("div",{className:"container",children:t?y?er.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid rgba(81, 207, 102, 0.3)",maxWidth:"500px",margin:"0 auto"},children:[er.jsx("div",{style:{width:"80px",height:"80px",background:"rgba(81, 207, 102, 0.2)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"},children:er.jsx("i",{className:"fas fa-check",style:{fontSize:"2.5rem",color:"#51cf66"}})}),er.jsx("h3",{style:{color:"#51cf66"},children:n("contact.success.title")}),er.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"20px"},children:n("contact.success.desc")}),er.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:n("contact.success.redirect")})]}):er.jsx("div",{style:{maxWidth:"600px",margin:"0 auto"},children:er.jsxs("form",{onSubmit:async e=>{var s
if(e.preventDefault(),!t)return void w(n("contact.notloggedin"))
if(!l.trim()||!u.trim())return void w(n("contact.form.required"))
if("acces_payant"===h&&!f)return void w(n("contact.form.selectplan"))
if(b(!0),w(""),!So("ticket_".concat(t.id),3,36e5))return w(n("contact.form.ratelimit")||"Trop de tickets cr\xe9\xe9s. Veuillez r\xe9essayer plus tard."),void b(!1)
const i=vo(l.trim()),o=vo(u.trim())
if(i.length<5||i.length>500)return w("Le sujet doit contenir entre 5 et 500 caract\xe8res."),void b(!1)
if(o.length<10||o.length>1e4)return w("Le message doit contenir entre 10 et 10000 caract\xe8res."),void b(!1)
if(_o(i)||_o(o))return w("Contenu suspect d\xe9tect\xe9. Veuillez r\xe9viser votre message."),void b(!1)
try{const e=(null==r?void 0:r.username)||(null==(s=t.user_metadata)?void 0:s.username)||"Utilisateur",l=t.email||"",{data:u,error:p}=await Qi.from("tickets").insert({user_id:t.id,username:e,email:l,category:h,subject:i,message:o,status:"open"}).select().maybeSingle()
if(p)w(n("contact.form.error"))
else if(u){const r="__BOT_INFO__".concat(JSON.stringify({username:e,email:l,user_id:t.id,created_at:(new Date).toISOString(),selected_plan:"acces_payant"===h?f:null}),"__BOT_INFO__")
await Qi.from("ticket_messages").insert({ticket_id:u.id,user_id:t.id,username:"Dbs BOT",message:r,image_url:null,is_owner:!0}),v(!0),c(""),d(""),m(null),setTimeout(()=>{a("/tickets")},3e3)}}catch(p){w(n("contact.form.error"))}finally{b(!1)}},children:[x&&er.jsxs("div",{style:{background:"rgba(255, 107, 107, 0.1)",border:"1px solid rgba(255, 107, 107, 0.3)",borderRadius:"var(--radius-md)",padding:"12px 16px",marginBottom:"20px",color:"#ff6b6b",display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-exclamation-circle"}),x]}),er.jsxs("div",{className:"form-group",children:[er.jsx("label",{className:"form-label",children:n("contact.form.category")}),er.jsxs("div",{style:{display:"flex",gap:"12px"},children:[er.jsxs("button",{type:"button",onClick:()=>{p("contact"),m(null)},style:{flex:1,padding:"16px",background:"contact"===h?"rgba(0, 123, 255, 0.2)":"var(--bg-card)",border:"2px solid ".concat("contact"===h?"#4dabf7":"var(--border-color)"),borderRadius:"var(--radius-md)",cursor:"pointer",transition:"all 0.2s ease"},children:[er.jsx("i",{className:"fas fa-comment-dots",style:{fontSize:"1.5rem",marginBottom:"8px",display:"block",color:"contact"===h?"#4dabf7":"var(--text-muted)"}}),er.jsx("span",{style:{fontWeight:500,color:"contact"===h?"#4dabf7":"var(--text-primary)"},children:"Contact"})]}),er.jsxs("button",{type:"button",onClick:()=>p("acces_payant"),style:{flex:1,padding:"16px",background:"acces_payant"===h?"rgba(255, 193, 7, 0.2)":"var(--bg-card)",border:"2px solid ".concat("acces_payant"===h?"#ffd43b":"var(--border-color)"),borderRadius:"var(--radius-md)",cursor:"pointer",transition:"all 0.2s ease"},children:[er.jsx("i",{className:"fas fa-crown",style:{fontSize:"1.5rem",marginBottom:"8px",display:"block",color:"acces_payant"===h?"#ffd43b":"var(--text-muted)"}}),er.jsx("span",{style:{fontWeight:500,color:"acces_payant"===h?"#ffd43b":"var(--text-primary)"},children:"fr"===s?"Acc\xe8s Payant":"Paid Access"})]})]})]}),"acces_payant"===h&&er.jsxs("div",{className:"form-group",children:[er.jsx("label",{className:"form-label",children:"fr"===s?"Choisissez votre plan":"Choose your plan"}),er.jsxs("div",{style:{display:"flex",gap:"12px"},children:[er.jsxs("button",{type:"button",onClick:()=>{m("beginner"),c("fr"===s?"Achat plan Beginner":"Beginner Plan Purchase"),d("fr"===s?"Bonjour,\n\nJe souhaite acheter le plan Beginner (\u20ac9.99).\n\nMerci de me fournir l'adresse LTC pour le paiement.":"Hello,\n\nI would like to purchase the Beginner plan (\u20ac9.99).\n\nPlease provide me with the LTC address for payment.")},style:{flex:1,padding:"20px 16px",background:"beginner"===f?"rgba(255, 107, 157, 0.2)":"var(--bg-card)",border:"2px solid ".concat("beginner"===f?"#ff6b9d":"var(--border-color)"),borderRadius:"var(--radius-md)",cursor:"pointer",transition:"all 0.2s ease",textAlign:"center"},children:[er.jsx("i",{className:"fas fa-rocket",style:{fontSize:"1.8rem",marginBottom:"10px",display:"block",color:"beginner"===f?"#ff6b9d":"var(--text-muted)"}}),er.jsx("span",{style:{fontWeight:600,fontSize:"1.1rem",display:"block",color:"beginner"===f?"#ff6b9d":"var(--text-primary)",marginBottom:"4px"},children:"Beginner"}),er.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",display:"block"},children:"100 search/day"}),er.jsx("span",{style:{fontSize:"1.2rem",fontWeight:700,color:"beginner"===f?"#ff6b9d":"var(--text-primary)",marginTop:"8px",display:"block"},children:"\u20ac9.99 LTC"})]}),er.jsxs("button",{type:"button",onClick:()=>{m("premium"),c("fr"===s?"Achat plan premium":"premium Plan Purchase"),d("fr"===s?"Bonjour,\n\nJe souhaite acheter le plan premium (\u20ac200).\n\nMerci de me fournir l'adresse LTC pour le paiement.":"Hello,\n\nI would like to purchase the premium plan (\u20ac200).\n\nPlease provide me with the LTC address for payment.")},style:{flex:1,padding:"20px 16px",background:"premium"===f?"rgba(255, 215, 0, 0.2)":"var(--bg-card)",border:"2px solid ".concat("premium"===f?"#ffd700":"var(--border-color)"),borderRadius:"var(--radius-md)",cursor:"pointer",transition:"all 0.2s ease",textAlign:"center",position:"relative"},children:[er.jsx("div",{style:{position:"absolute",top:"-8px",right:"-8px",background:"linear-gradient(135deg, #ffd700, #ffa500)",color:"#1a1a2e",padding:"2px 8px",borderRadius:"8px",fontSize:"0.65rem",fontWeight:700},children:"BEST"}),er.jsx("i",{className:"fas fa-crown",style:{fontSize:"1.8rem",marginBottom:"10px",display:"block",color:"premium"===f?"#ffd700":"var(--text-muted)"}}),er.jsx("span",{style:{fontWeight:600,fontSize:"1.1rem",display:"block",color:"premium"===f?"#ffd700":"var(--text-primary)",marginBottom:"4px"},children:"premium"}),er.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",display:"block"},children:"5000 search/day"}),er.jsx("span",{style:{fontSize:"1.2rem",fontWeight:700,color:"premium"===f?"#ffd700":"var(--text-primary)",marginTop:"8px",display:"block"},children:"\u20ac200 LTC"})]})]})]}),er.jsxs("div",{className:"form-group",children:[er.jsx("label",{htmlFor:"subject",className:"form-label",children:n("contact.form.subject")}),er.jsx("input",{type:"text",id:"subject",className:"form-input",placeholder:"fr"===s?"R\xe9sumez votre demande en quelques mots":"Summarize your request in a few words",value:l,onChange:e=>c(e.target.value),disabled:g,required:!0})]}),er.jsxs("div",{className:"form-group",children:[er.jsx("label",{htmlFor:"message",className:"form-label",children:n("contact.form.message")}),er.jsx("textarea",{id:"message",className:"form-input",placeholder:"fr"===s?"D\xe9crivez votre demande en d\xe9tail...":"Describe your request in detail...",value:u,onChange:e=>d(e.target.value),disabled:g,required:!0,rows:6,style:{resize:"vertical",minHeight:"120px"}})]}),er.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",borderRadius:"var(--radius-md)",padding:"16px",marginBottom:"20px",fontSize:"0.9rem"},children:[er.jsxs("p",{style:{margin:"0 0 8px",color:"var(--text-muted)"},children:[er.jsx("i",{className:"fas fa-info-circle"})," ","fr"===s?"Informations envoy\xe9es avec le ticket:":"Information sent with the ticket:"]}),er.jsxs("p",{style:{margin:0,color:"var(--text-secondary)"},children:[er.jsx("strong",{children:"Username:"})," ",(null==r?void 0:r.username)||(null==(e=t.user_metadata)?void 0:e.username)||"N/A",er.jsx("br",{}),er.jsx("strong",{children:"Email:"})," ",t.email,"acces_payant"===h&&f&&er.jsxs(er.Fragment,{children:[er.jsx("br",{}),er.jsx("strong",{children:"fr"===s?"Plan s\xe9lectionn\xe9:":"Selected plan:"})," ",er.jsx("span",{style:{color:"beginner"===f?"#ff6b9d":"#ffd700"},children:n("contact.form.plan.".concat(f))})]})]})]}),er.jsxs("div",{style:{display:"flex",gap:"12px"},children:[er.jsx("button",{type:"submit",className:"btn btn-primary",disabled:g,style:{flex:1},children:g?er.jsxs(er.Fragment,{children:[er.jsx("span",{className:"spinner"}),"fr"===s?"Cr\xe9ation...":"Creating..."]}):er.jsxs(er.Fragment,{children:[er.jsx("i",{className:"fas fa-paper-plane"}),"fr"===s?"Cr\xe9er le ticket":"Create Ticket"]})}),er.jsx(Mr,{to:"/tickets",className:"btn btn-outline",children:"fr"===s?"Mes tickets":"My Tickets"})]})]})}):er.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)",maxWidth:"500px",margin:"0 auto"},children:[er.jsx("i",{className:"fas fa-lock",style:{fontSize:"4rem",color:"var(--text-muted)",marginBottom:"20px"}}),er.jsx("h3",{children:n("contact.login.title")}),er.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"20px"},children:n("contact.login.required")}),er.jsx(Mr,{to:"/login",className:"btn btn-primary",children:n("contact.login.button")})]})})}),er.jsx("section",{className:"content-section",children:er.jsxs("div",{className:"container",children:[er.jsxs("div",{className:"section-header",children:[er.jsx("span",{className:"section-badge",children:"FAQ"}),er.jsx("h2",{className:"section-title",children:n("contact.faq.title")})]}),er.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[er.jsxs("div",{className:"glow-card",style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[er.jsx("h3",{style:{marginBottom:"12px"},children:n("contact.faq.q1")}),er.jsx("p",{style:{color:"var(--text-secondary)"},children:n("contact.faq.a1")})]}),er.jsxs("div",{className:"glow-card",style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[er.jsx("h3",{style:{marginBottom:"12px"},children:n("contact.faq.q2")}),er.jsx("p",{style:{color:"var(--text-secondary)"},children:n("contact.faq.a2")})]}),er.jsxs("div",{className:"glow-card",style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",marginBottom:"16px",padding:"24px"},children:[er.jsx("h3",{style:{marginBottom:"12px"},children:n("contact.faq.q3")}),er.jsx("p",{style:{color:"var(--text-secondary)"},children:n("contact.faq.a3")})]}),er.jsxs("div",{className:"glow-card",style:{border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",padding:"24px"},children:[er.jsx("h3",{style:{marginBottom:"12px"},children:n("contact.faq.q4")}),er.jsx("p",{style:{color:"var(--text-secondary)"},children:n("contact.faq.a4")})]})]})]})})]})},il=["deee5dc2-e37e-48ba-8da2-1fb5945cd235","3e45559e-299c-4d49-9fe8-b2c77237d2c9","aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96","f479668f-4129-4c67-91bb-decba5a0e804","46eea62a-4835-4b54-a23e-c20aee355760","946f8b8b-6057-4dc9-9615-e1cfa8eb9c9f","c5ac1d65-40ac-4b53-85b3-8cea8fdfe491"],ol=()=>{const{user:e,profile:t}=to(),{t:r}=so(),[n,s]=nr.useState([]),[a,i]=nr.useState(!1),[o,l]=nr.useState(null),[c,u]=nr.useState("all"),[d,h]=nr.useState([]),[p,f]=nr.useState(""),[m,g]=nr.useState(!1),[b,y]=nr.useState(!1),[v,x]=nr.useState(null),[w,k]=nr.useState(!1),[j,S]=nr.useState(null),[_,N]=nr.useState(null),E=nr.useRef(null),T=nr.useRef(null),C=e&&il.includes(e.id),R=async()=>{if(e)try{let t=Qi.from("tickets").select("*").order("created_at",{ascending:!1})
il.includes(e.id)||(t=t.eq("user_id",e.id))
const{data:r,error:n}=await t
if(n)return
r&&s(e=>JSON.stringify(e)!==JSON.stringify(r)?r:e),a||i(!0)}catch(t){a||i(!0)}}
nr.useEffect(()=>{if(!e)return
R()
const t=setInterval(R,500),r=Qi.channel("tickets-live-"+e.id).on("postgres_changes",{event:"*",schema:"public",table:"tickets"},()=>{R()}).subscribe()
return()=>{clearInterval(t),Qi.removeChannel(r)}},[e]),nr.useEffect(()=>{o&&P(o.id)},[o]),nr.useEffect(()=>{if(!o)return
const e=setInterval(()=>{P(o.id)},500),t=Qi.channel("messages-live-"+o.id).on("postgres_changes",{event:"*",schema:"public",table:"ticket_messages"},e=>{e.new.ticket_id===o.id&&P(o.id)}).subscribe()
return()=>{clearInterval(e),Qi.removeChannel(t)}},[null==o?void 0:o.id]),nr.useEffect(()=>{var e
null==(e=E.current)||e.scrollIntoView({behavior:"smooth"})},[d])
const P=async e=>{try{const{data:t,error:r}=await Qi.from("ticket_messages").select("*").eq("ticket_id",e).order("created_at",{ascending:!0})
!r&&t&&h(t)}catch(t){}},[A,O]=nr.useState(null),I=async r=>{var n
if(e&&o&&(p.trim()||r)){if(p.trim()&&!r){const t=Po(p,e.id,{maxLength:2e3,rateLimit:{maxMessages:C?30:10,windowMs:6e4},allowLinks:null!=C&&C,allowDiscord:null!=C&&C})
if(!t.isValid)return O(t.error||"Message non valide"),void setTimeout(()=>O(null),4e3)
if(_o(p))return O("Contenu suspect d\xe9tect\xe9"),void setTimeout(()=>O(null),4e3)}O(null),g(!0)
try{const s=(null==t?void 0:t.username)||(null==(n=e.user_metadata)?void 0:n.username)||"Utilisateur",a=bo(p.trim())||(r?"\ud83d\udcf7 Image":""),{error:i}=await Qi.from("ticket_messages").insert({ticket_id:o.id,user_id:e.id,username:bo(s),message:a,image_url:r||null,is_owner:C})
i?(O("Erreur lors de l'envoi"),setTimeout(()=>O(null),3e3)):(f(""),P(o.id))}catch(s){O("Erreur lors de l'envoi"),setTimeout(()=>O(null),3e3)}finally{g(!1)}}},z=n.filter(e=>"all"===c||e.status===c),L=e=>new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),D=e=>{switch(e){case"contact":return r("tickets.category.contact")
case"acces_payant":return r("tickets.category.acces_payant")
default:return e}},[U,F]=nr.useState(!1)
nr.useEffect(()=>{if(o){F(!1)
const e=setTimeout(()=>F(!0),500)
return()=>clearTimeout(e)}},[null==o?void 0:o.id])
const B=({info:e})=>{const t=[{icon:"fa-user",label:"Username",value:e.username,fullValue:e.username},{icon:"fa-envelope",label:"Email",value:e.email,fullValue:e.email},{icon:"fa-fingerprint",label:"User ID",value:C?e.user_id:"".concat(e.user_id.slice(0,8),"..."),fullValue:e.user_id,mono:!0,isUserId:!0},{icon:"fa-calendar",label:"Date",value:L(e.created_at),fullValue:e.created_at}]
return er.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%"},children:[t.map((e,t)=>er.jsxs("div",{onContextMenu:t=>{t.preventDefault(),t.stopPropagation(),N({x:t.clientX,y:t.clientY,value:e.fullValue,label:e.label})},style:{background:"rgba(0, 0, 0, 0.4)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"10px",padding:"12px 16px",display:"flex",alignItems:"center",gap:"12px",position:"relative",overflow:"hidden",animation:U?"none":"slideIn 0.3s ease ".concat(.1*t,"s both"),cursor:"context-menu"},children:[er.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,borderRadius:"10px",padding:"2px",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",backgroundSize:"200% 100%",WebkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",WebkitMaskComposite:"xor",maskComposite:"exclude",animation:"borderGlow 3s linear infinite",pointerEvents:"none"}}),er.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:er.jsx("i",{className:"fas ".concat(e.icon),style:{color:"#ffffff",fontSize:"0.9rem"}})}),er.jsxs("div",{style:{flex:1,minWidth:0},children:[er.jsx("div",{style:{fontSize:"0.7rem",color:"rgba(255, 255, 255, 0.6)",marginBottom:"2px",textTransform:"uppercase",letterSpacing:"0.5px",fontWeight:600},children:e.label}),er.jsx("div",{style:{fontSize:e.mono?"0.8rem":"0.9rem",color:"#ffffff",fontWeight:500,fontFamily:e.mono?"monospace":"inherit",wordBreak:"break-all",lineHeight:1.3},children:e.value})]})]},e.label)),er.jsx("style",{children:"\n          @keyframes slideIn {\n            from {\n              opacity: 0;\n              transform: translateX(-20px);\n            }\n            to {\n              opacity: 1;\n              transform: translateX(0);\n            }\n          }\n          @keyframes borderGlow {\n            0% {\n              background-position: 200% 0;\n            }\n            100% {\n              background-position: -200% 0;\n            }\n          }\n        "})]})}
return e?er.jsxs($o,{children:[er.jsx("header",{className:"page-header",children:er.jsxs("div",{className:"container",children:[er.jsx("span",{className:"section-badge",children:r("tickets.header.badge")}),er.jsx("h1",{children:r("tickets.header.title")}),er.jsx("p",{children:r(C?"tickets.header.owner":"tickets.header.user")})]})}),er.jsx("section",{className:"content-section",children:er.jsxs("div",{className:"container",children:[er.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px",flexWrap:"wrap",gap:"15px"},children:[er.jsxs("div",{style:{display:"flex",gap:"10px"},children:[er.jsxs("button",{className:"btn ".concat("all"===c?"btn-primary":"btn-outline"),onClick:()=>u("all"),children:[r("tickets.filter.all")," (",n.length,")"]}),er.jsxs("button",{className:"btn ".concat("open"===c?"btn-primary":"btn-outline"),onClick:()=>u("open"),children:[r("tickets.filter.open")," (",n.filter(e=>"open"===e.status).length,")"]}),er.jsxs("button",{className:"btn ".concat("closed"===c?"btn-primary":"btn-outline"),onClick:()=>u("closed"),children:[r("tickets.filter.closed")," (",n.filter(e=>"closed"===e.status).length,")"]})]}),er.jsx("div",{style:{display:"flex",gap:"10px"},children:er.jsxs(Mr,{to:"/contact",className:"btn btn-primary",children:[er.jsx("i",{className:"fas fa-plus"})," ",r("tickets.filter.newticket")]})})]}),a?0===z.length?er.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)"},children:[er.jsx("i",{className:"fas fa-ticket-alt",style:{fontSize:"4rem",color:"var(--text-muted)",marginBottom:"20px"}}),er.jsx("h3",{children:r("tickets.empty.title")}),er.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"20px"},children:r("all"===c?"tickets.empty.all":"open"===c?"tickets.empty.open":"tickets.empty.closed")}),er.jsx(Mr,{to:"/contact",className:"btn btn-primary",children:r("tickets.empty.button")})]}):er.jsx("div",{style:{display:"grid",gap:"15px"},children:z.map(e=>er.jsxs("div",{onClick:()=>l(e),style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"20px",cursor:"pointer",transition:"all 0.2s ease",borderLeft:"4px solid ".concat("open"===e.status?"#51cf66":"#868e96")},onMouseEnter:e=>{e.currentTarget.style.borderColor="var(--accent-primary)",e.currentTarget.style.transform="translateX(5px)"},onMouseLeave:e=>{e.currentTarget.style.borderColor="var(--border-color)",e.currentTarget.style.transform="translateX(0)"},children:[er.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px"},children:[er.jsxs("div",{children:[er.jsx("h3",{style:{margin:0,fontSize:"1.1rem"},children:e.subject}),C&&er.jsxs("p",{style:{margin:"5px 0 0",color:"var(--text-muted)",fontSize:"0.85rem"},children:[er.jsx("i",{className:"fas fa-user"})," ",e.username," \u2022 ",e.email]})]}),er.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[er.jsx("span",{style:{padding:"4px 10px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:"contact"===e.category?"rgba(0, 123, 255, 0.2)":"rgba(255, 193, 7, 0.2)",color:"contact"===e.category?"#4dabf7":"#ffd43b"},children:D(e.category)}),er.jsx("span",{style:{padding:"4px 10px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:"open"===e.status?"rgba(81, 207, 102, 0.2)":"rgba(134, 142, 150, 0.2)",color:"open"===e.status?"#51cf66":"#868e96"},children:"open"===e.status?r("tickets.filter.open"):r("tickets.filter.closed")})]})]}),er.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.message}),er.jsxs("p",{style:{margin:"10px 0 0",color:"var(--text-muted)",fontSize:"0.8rem"},children:[er.jsx("i",{className:"fas fa-clock"})," ",L(e.created_at),C&&er.jsxs("span",{style:{marginLeft:"15px"},children:[er.jsx("i",{className:"fas fa-fingerprint"})," ",e.user_id.slice(0,8),"..."]})]})]},e.id))}):er.jsx("div",{style:{minHeight:"200px"}})]})}),v&&er.jsxs("div",{onClick:()=>x(null),style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.9)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:[er.jsx("button",{onClick:e=>{e.stopPropagation(),x(null)},style:{position:"absolute",top:"20px",right:"20px",background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"50%",width:"44px",height:"44px",cursor:"pointer",color:"white",fontSize:"1.2rem",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.2s"},children:er.jsx("i",{className:"fas fa-times"})}),er.jsx("img",{src:v,alt:"Preview",onClick:e=>e.stopPropagation(),style:{maxWidth:"90vw",maxHeight:"90vh",borderRadius:"8px",cursor:"default"}})]}),o&&er.jsx("div",{className:"settings-overlay",onClick:()=>{l(null),h([]),k(!1)},style:{zIndex:1e3},children:er.jsxs("div",{className:"settings-modal",onClick:e=>e.stopPropagation(),style:{maxWidth:w?"100vw":"700px",width:w?"100vw":void 0,height:w?"100vh":"85vh",margin:w?0:void 0,borderRadius:w?0:void 0,display:"flex",flexDirection:"column",transition:"all 0.3s ease"},children:[er.jsxs("div",{className:"settings-header",children:[er.jsxs("h2",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-ticket-alt"}),"Ticket #",o.id.slice(0,8)]}),er.jsxs("div",{style:{display:"flex",gap:"8px"},children:[er.jsx("button",{onClick:()=>k(!w),style:{background:"rgba(255, 255, 255, 0.1)",border:"none",borderRadius:"8px",width:"36px",height:"36px",cursor:"pointer",color:"var(--text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},title:w?"R\xe9duire":"Plein \xe9cran",children:er.jsx("i",{className:"fas fa-".concat(w?"compress":"expand")})}),er.jsx("button",{className:"settings-close",onClick:()=>{l(null),h([]),k(!1)},children:er.jsx("i",{className:"fas fa-times"})})]})]}),er.jsx("div",{className:"settings-content",style:{padding:w?"0":"20px",flex:1,overflow:"auto",display:"flex",flexDirection:"column"},onClick:()=>{S(null),N(null)},children:er.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",background:"rgba(0, 0, 0, 0.2)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:[er.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"15px",display:"flex",flexDirection:"column",gap:"12px"},children:[er.jsx("div",{style:{maxWidth:"450px",marginBottom:"10px"},onClick:e=>e.stopPropagation(),children:er.jsx(B,{info:{username:o.username,email:o.email,user_id:o.user_id,created_at:o.created_at}})}),er.jsxs("div",{style:{background:"rgba(77, 171, 247, 0.1)",border:"1px solid rgba(77, 171, 247, 0.3)",borderRadius:"12px",padding:"12px 16px",marginBottom:"10px"},children:[er.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px",flexWrap:"wrap"},children:[er.jsx("span",{style:{padding:"4px 10px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:"open"===o.status?"rgba(81, 207, 102, 0.2)":"rgba(134, 142, 150, 0.2)",color:"open"===o.status?"#51cf66":"#868e96"},children:"open"===o.status?"Ouvert":"Ferm\xe9"}),er.jsx("span",{style:{padding:"4px 10px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:600,background:"contact"===o.category?"rgba(0, 123, 255, 0.2)":"rgba(255, 193, 7, 0.2)",color:"contact"===o.category?"#4dabf7":"#ffd43b"},children:D(o.category)})]}),er.jsxs("h3",{style:{margin:"0 0 8px",fontSize:"1rem",color:"#4dabf7"},children:[er.jsx("i",{className:"fas fa-tag",style:{marginRight:"8px"}}),o.subject]}),er.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"0.9rem",whiteSpace:"pre-wrap",lineHeight:1.5},children:o.message})]}),d.filter(e=>!("Dbs BOT"===e.username&&(e=>{const t=e.match(/__BOT_INFO__(.+)__BOT_INFO__/)
if(t)try{return JSON.parse(t[1])}catch(jl){return null}return null})(e.message))).map(e=>er.jsxs("div",{onContextMenu:t=>{C&&e.is_owner&&(t.preventDefault(),S({x:t.clientX,y:t.clientY,messageId:e.id}))},style:{alignSelf:e.is_owner?"flex-end":"flex-start",maxWidth:"80%",background:e.is_owner?"rgba(77, 171, 247, 0.2)":"rgba(255, 255, 255, 0.08)",borderRadius:e.is_owner?"12px 12px 4px 12px":"12px 12px 12px 4px",padding:"12px 16px",position:"relative",cursor:C?"context-menu":"default"},children:[er.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginBottom:"6px"},children:[er.jsxs("span",{style:{fontWeight:600,color:e.is_owner?"#4dabf7":"var(--accent-primary)"},children:[e.username," ",e.is_owner&&er.jsx("i",{className:"fas fa-shield-alt",title:"Support"})]}),er.jsx("span",{style:{marginLeft:"8px"},children:L(e.created_at)})]}),e.image_url&&er.jsx("img",{src:e.image_url,alt:"Image",onClick:()=>x(e.image_url),style:{maxWidth:"100%",maxHeight:"200px",borderRadius:"8px",marginBottom:e.message&&"\ud83d\udcf7 Image"!==e.message?"8px":0,cursor:"zoom-in"}}),e.message&&"\ud83d\udcf7 Image"!==e.message&&er.jsx("p",{style:{margin:0,whiteSpace:"pre-wrap",lineHeight:1.5},children:e.message})]},e.id)),er.jsx("div",{ref:E})]}),"open"===o.status&&er.jsxs("div",{style:{padding:"12px",borderTop:"1px solid var(--border-color)",background:"rgba(0, 0, 0, 0.1)"},children:[er.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"flex-end"},children:[er.jsx("input",{type:"file",ref:T,onChange:async e=>{var t,r
const n=null==(t=e.target.files)?void 0:t[0]
if(!n||!o)return
if(n.size>5242880)return O("Image trop volumineuse (max 5MB)"),void setTimeout(()=>O(null),3e3)
if(!["image/jpeg","image/png","image/gif","image/webp"].includes(n.type))return O("Type de fichier non autoris\xe9 (JPG, PNG, GIF, WEBP uniquement)"),void setTimeout(()=>O(null),3e3)
const s=null==(r=n.name.split(".").pop())?void 0:r.toLowerCase()
if(!s||!["jpg","jpeg","png","gif","webp"].includes(s))return O("Extension de fichier non autoris\xe9e"),void setTimeout(()=>O(null),3e3)
y(!0)
try{const e="".concat(o.id,"/").concat(Date.now(),".").concat(s),{error:t}=await Qi.storage.from("ticket-images").upload(e,n)
if(t)return
const{data:{publicUrl:r}}=Qi.storage.from("ticket-images").getPublicUrl(e)
await I(r)}catch(a){}finally{y(!1),T.current&&(T.current.value="")}},accept:"image/*",style:{display:"none"}}),er.jsx("button",{onClick:()=>{var e
return null==(e=T.current)?void 0:e.click()},disabled:b||m,style:{padding:"10px 14px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",cursor:"pointer",color:"var(--text-secondary)",transition:"all 0.2s ease"},title:"Envoyer une image",children:b?er.jsx("span",{className:"spinner",style:{width:"16px",height:"16px"}}):er.jsx("i",{className:"fas fa-image"})}),er.jsx("textarea",{value:p,onChange:e=>f(e.target.value),placeholder:"\xc9crivez votre message...",disabled:m,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),I())},style:{flex:1,padding:"10px 14px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",resize:"none",minHeight:"42px",maxHeight:"100px",color:"var(--text-primary)",fontFamily:"inherit"},rows:1}),er.jsx("button",{onClick:()=>I(),disabled:m||!p.trim(),className:"btn btn-primary",style:{padding:"10px 16px"},children:m?er.jsx("span",{className:"spinner",style:{width:"16px",height:"16px"}}):er.jsx("i",{className:"fas fa-paper-plane"})})]}),A&&er.jsxs("p",{style:{margin:"8px 0 0",fontSize:"0.8rem",color:"#ff6b6b",fontWeight:500},children:[er.jsx("i",{className:"fas fa-exclamation-circle",style:{marginRight:"6px"}}),A]}),er.jsx("p",{style:{margin:"8px 0 0",fontSize:"0.75rem",color:"var(--text-muted)"},children:"Appuyez sur Entr\xe9e pour envoyer, Maj+Entr\xe9e pour un retour \xe0 la ligne"})]}),"closed"===o.status&&er.jsxs("div",{style:{padding:"15px",textAlign:"center",background:"rgba(134, 142, 150, 0.1)",borderTop:"1px solid var(--border-color)",color:"var(--text-muted)"},children:[er.jsx("i",{className:"fas fa-lock"})," Ce ticket est ferm\xe9"]})]})}),er.jsx("div",{className:"settings-footer",style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:er.jsx("button",{className:"btn btn-outline",onClick:()=>{l(null),h([]),k(!1)},children:"Fermer"})})]})}),j&&er.jsx("div",{onClick:e=>e.stopPropagation()}),_&&er.jsx("div",{style:{position:"fixed",top:_.y,left:_.x,background:"rgba(30, 30, 40, 0.98)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"8px",padding:"4px",zIndex:3e3,boxShadow:"0 4px 20px rgba(0, 0, 0, 0.5)",minWidth:"180px"},onClick:e=>e.stopPropagation(),children:er.jsxs("button",{onClick:e=>{e.stopPropagation()
const t=_.value
navigator.clipboard.writeText(t).then(()=>N(null)).catch(()=>N(null))},style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",padding:"10px 14px",background:"transparent",border:"none",borderRadius:"6px",color:"#4dabf7",cursor:"pointer",fontSize:"0.9rem",transition:"background 0.2s"},onMouseEnter:e=>e.currentTarget.style.background="rgba(77, 171, 247, 0.15)",onMouseLeave:e=>e.currentTarget.style.background="transparent",children:[er.jsx("i",{className:"fas fa-copy"}),"Copier ",_.label]})})]}):er.jsx($o,{children:er.jsx("section",{className:"content-section",style:{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center"},children:er.jsxs("div",{className:"container",style:{textAlign:"center"},children:[er.jsx("i",{className:"fas fa-lock",style:{fontSize:"4rem",color:"var(--text-muted)",marginBottom:"20px"}}),er.jsx("h2",{children:r("contact.login.title")}),er.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"20px"},children:r("tickets.nologin")}),er.jsx(Mr,{to:"/login",className:"btn btn-primary",children:r("contact.login.button")})]})})})},ll=()=>{const{t:e}=so(),[t,r]=nr.useState(""),[n,s]=nr.useState(""),[a,i]=nr.useState(!1),[o,l]=nr.useState(!1),[c,u]=nr.useState(""),d=T(),[h,p]=nr.useState(!1),[f,m]=nr.useState(""),[g,b]=nr.useState(""),[y,v]=nr.useState(""),[x,w]=nr.useState(!1),[k,j]=nr.useState(!1),[S,_]=nr.useState(""),[N,E]=nr.useState(""),C=()=>{p(!1),m(""),b(""),v(""),w(!1),_(""),E("")}
return er.jsx($o,{children:er.jsxs("div",{className:"auth-container",children:[er.jsxs("div",{className:"auth-bg",children:[er.jsx("div",{className:"auth-bg-gradient"}),er.jsx("div",{className:"auth-bg-grid"}),er.jsx("div",{className:"floating-orb orb-1"}),er.jsx("div",{className:"floating-orb orb-2"}),er.jsx("div",{className:"floating-orb orb-3"})]}),er.jsxs("div",{className:"auth-card animate-fade-in",children:[er.jsxs("div",{className:"auth-header",children:[er.jsx(Mr,{to:"/",className:"logo",children:er.jsx("span",{className:"logo-text",children:"Dbs"})}),er.jsx("h1",{children:e("login.title")}),er.jsx("p",{children:e("login.subtitle")})]}),c&&er.jsxs("div",{className:"auth-error animate-shake",children:[er.jsx("i",{className:"fas fa-exclamation-circle"}),c]}),er.jsxs("form",{onSubmit:async r=>{if(r.preventDefault(),l(!0),u(""),!t||!t.includes("@"))return u("Invalid email format"),void l(!1)
if(!So("login:".concat(t),5,6e4))return u("Too many login attempts. Please try again later."),void l(!1)
try{const{user:e}=await async function(e,t){const{data:r,error:n}=await Qi.auth.signInWithPassword({email:e,password:t})
if(n)throw n
return{user:r.user,session:r.session}}(t,n);(null==e?void 0:e.email)&&(s="login:".concat(t),jo.delete(s)),d("/")}catch(a){u(a instanceof Error?a.message:e("login.error"))}finally{l(!1)}var s},children:[er.jsxs("div",{className:"form-group",children:[er.jsx("label",{htmlFor:"email",className:"form-label",children:e("login.email_label")}),er.jsxs("div",{className:"input-wrapper",children:[er.jsx("i",{className:"fas fa-envelope input-icon"}),er.jsx("input",{type:"email",id:"email",name:"email",className:"form-input form-input-icon",placeholder:"votre@email.com",required:!0,value:t,onChange:e=>r(e.target.value),disabled:o})]})]}),er.jsxs("div",{className:"form-group",children:[er.jsx("label",{htmlFor:"password",className:"form-label",children:"Mot de passe"}),er.jsxs("div",{className:"input-wrapper",children:[er.jsx("i",{className:"fas fa-lock input-icon"}),er.jsx("input",{type:"password",id:"password",name:"password",className:"form-input form-input-icon",placeholder:"Votre mot de passe",required:!0,minLength:8,value:n,onChange:e=>s(e.target.value),disabled:o})]})]}),er.jsx("div",{className:"form-group",children:er.jsxs("div",{className:"checkbox-group",children:[er.jsx("input",{type:"checkbox",id:"remember",name:"remember",checked:a,onChange:e=>i(e.target.checked),disabled:o}),er.jsx("label",{htmlFor:"remember",children:"Se souvenir de moi"})]})}),er.jsx("button",{type:"submit",className:"btn btn-primary btn-block btn-glow",disabled:o,children:o?er.jsxs(er.Fragment,{children:[er.jsx("span",{className:"spinner"}),"Connexion..."]}):er.jsxs(er.Fragment,{children:["Se connecter",er.jsx("i",{className:"fas fa-arrow-right"})]})})]}),er.jsxs("div",{className:"auth-footer",children:[er.jsxs("p",{children:["Pas encore de compte? ",er.jsx(Mr,{to:"/register",children:"S'inscrire"})]}),er.jsx("p",{style:{marginTop:"12px"},children:er.jsx("button",{type:"button",onClick:()=>p(!0),style:{background:"none",border:"none",color:"#fff",cursor:"pointer",textDecoration:"underline",fontSize:"inherit",fontFamily:"inherit"},children:"Mot de passe oubli\xe9?"})})]})]}),h&&er.jsx("div",{className:"otp-overlay",onClick:C,children:er.jsxs("div",{className:"otp-modal",onClick:e=>e.stopPropagation(),children:[er.jsx("button",{className:"otp-close",onClick:C,children:er.jsx("i",{className:"fas fa-times"})}),er.jsxs("div",{className:"otp-header",children:[er.jsx("div",{className:"otp-icon",children:er.jsx("i",{className:x?"fas fa-key":"fas fa-envelope"})}),er.jsx("h2",{children:e(x?"login.otp.title":"login.forgot_password")}),er.jsx("p",{children:x?"".concat(e("login.otp_sent")," ").concat(f):e("login.subtitle")})]}),S&&er.jsxs("div",{className:"otp-error",children:[er.jsx("i",{className:"fas fa-exclamation-circle"}),S]}),N&&er.jsxs("div",{className:"otp-success",children:[er.jsx("i",{className:"fas fa-check-circle"}),N]}),x?er.jsxs("form",{onSubmit:async t=>{if(t.preventDefault(),j(!0),_(""),!y||y.length<8)return _("Password must be at least 8 characters"),void j(!1)
try{await async function(e,t,r){const{error:n}=await Qi.auth.verifyOtp({email:e,token:t,type:"recovery"})
if(n)throw n
const{error:s}=await Qi.auth.updateUser({password:r})
if(s)throw s}(f,g,y),E(e("login.success")),setTimeout(()=>{d("/")},1e3)}catch(r){_(r instanceof Error?r.message:e("login.otp.error"))}finally{j(!1)}},children:[er.jsxs("div",{className:"form-group",children:[er.jsx("label",{htmlFor:"otp-code",className:"form-label",children:"Code OTP"}),er.jsxs("div",{className:"input-wrapper",children:[er.jsx("i",{className:"fas fa-key input-icon"}),er.jsx("input",{type:"text",id:"otp-code",className:"form-input form-input-icon otp-input",placeholder:"00000000",required:!0,maxLength:8,value:g,onChange:e=>b(e.target.value.replace(/\D/g,"")),disabled:k,autoComplete:"one-time-code"})]})]}),er.jsxs("div",{className:"form-group",children:[er.jsx("label",{htmlFor:"new-password",className:"form-label",children:"Nouveau mot de passe"}),er.jsxs("div",{className:"input-wrapper",children:[er.jsx("i",{className:"fas fa-lock input-icon"}),er.jsx("input",{type:"password",id:"new-password",className:"form-input form-input-icon",placeholder:"Entrez un nouveau mot de passe",required:!0,value:y,onChange:e=>v(e.target.value),disabled:k,minLength:8})]}),er.jsx("small",{style:{color:"#666",marginTop:"4px",display:"block"},children:"Minimum 8 caract\xe8res"})]}),er.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:k||g.length<8||!y,children:k?er.jsxs(er.Fragment,{children:[er.jsx("span",{className:"spinner"}),"V\xe9rification..."]}):er.jsxs(er.Fragment,{children:[er.jsx("i",{className:"fas fa-sign-in-alt"}),"R\xe9initialiser et Se connecter"]})}),er.jsxs("button",{type:"button",className:"btn btn-outline btn-block",style:{marginTop:"12px"},onClick:()=>{w(!1),b(""),v(""),_(""),E("")},children:[er.jsx("i",{className:"fas fa-arrow-left"}),e("login.change_email")]})]}):er.jsxs("form",{onSubmit:async t=>{t.preventDefault(),j(!0),_(""),E("")
try{await async function(e){const{error:t}=await Qi.auth.resetPasswordForEmail(e,{redirectTo:"".concat(window.location.origin,"/reset-password")})
if(t)throw t}(f),w(!0),E(e("login.otp.sent"))}catch(r){_(r instanceof Error?r.message:e("login.error"))}finally{j(!1)}},children:[er.jsxs("div",{className:"form-group",children:[er.jsx("label",{htmlFor:"forgot-email",className:"form-label",children:e("login.email_label")}),er.jsxs("div",{className:"input-wrapper",children:[er.jsx("i",{className:"fas fa-envelope input-icon"}),er.jsx("input",{type:"email",id:"forgot-email",className:"form-input form-input-icon",placeholder:"votre@email.com",required:!0,value:f,onChange:e=>m(e.target.value),disabled:k})]})]}),er.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:k,children:k?er.jsxs(er.Fragment,{children:[er.jsx("span",{className:"spinner"}),"Envoi en cours..."]}):er.jsxs(er.Fragment,{children:[er.jsx("i",{className:"fas fa-paper-plane"}),"Envoyer le code OTP"]})})]})]})})]})})},cl=()=>{const{t:e}=so(),[t,r]=nr.useState(""),[n,s]=nr.useState(""),[a,i]=nr.useState(""),[o,l]=nr.useState(""),[c,u]=nr.useState(!1),[d,h]=nr.useState(!1),[p,f]=nr.useState(""),[m,g]=nr.useState(!1),b=T()
return m?er.jsx($o,{children:er.jsxs("div",{className:"auth-container",children:[er.jsxs("div",{className:"auth-bg",children:[er.jsx("div",{className:"auth-bg-gradient"}),er.jsx("div",{className:"auth-bg-grid"}),er.jsx("div",{className:"floating-orb orb-1"}),er.jsx("div",{className:"floating-orb orb-2"}),er.jsx("div",{className:"floating-orb orb-3"})]}),er.jsx("div",{className:"auth-card animate-fade-in",children:er.jsxs("div",{className:"auth-header",children:[er.jsx("div",{className:"success-icon",children:er.jsx("i",{className:"fas fa-envelope-open-text",style:{color:"#51cf66",fontSize:"3rem"}})}),er.jsx("h1",{style:{color:"#51cf66",marginTop:"20px"},children:e("register.verification_sent")}),er.jsx("p",{style:{marginTop:"12px",color:"var(--text-secondary)"},children:e("register.verification_message")}),er.jsx("p",{style:{marginTop:"8px",color:"var(--text-secondary)"},children:"Veuillez v\xe9rifier votre bo\xeete de r\xe9ception et cliquer sur le lien pour activer votre compte."}),er.jsx("p",{style:{marginTop:"8px",color:"var(--text-muted)",fontSize:"0.85rem",fontStyle:"italic"},children:e("register.check_spam")}),er.jsx("p",{style:{marginTop:"24px",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Redirection vers la connexion..."})]})})]})}):er.jsx($o,{children:er.jsxs("div",{className:"auth-container",children:[er.jsxs("div",{className:"auth-bg",children:[er.jsx("div",{className:"auth-bg-gradient"}),er.jsx("div",{className:"auth-bg-grid"}),er.jsx("div",{className:"floating-orb orb-1"}),er.jsx("div",{className:"floating-orb orb-2"}),er.jsx("div",{className:"floating-orb orb-3"})]}),er.jsxs("div",{className:"auth-card animate-fade-in",children:[er.jsxs("div",{className:"auth-header",children:[er.jsx(Mr,{to:"/",className:"logo",children:er.jsx("span",{className:"logo-text",children:"Dbs"})}),er.jsx("h1",{children:"Cr\xe9er un compte"}),er.jsx("p",{children:"Rejoignez Dbs gratuitement"})]}),p&&er.jsxs("div",{className:"auth-error animate-shake",children:[er.jsx("i",{className:"fas fa-exclamation-circle"}),p]}),er.jsxs("form",{onSubmit:async r=>{if(r.preventDefault(),f(""),(e=>!(!e||"string"!=typeof e)&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)&&e.length<=254)(n))if((e=>!(!e||"string"!=typeof e)&&/^[a-zA-Z0-9_-]{3,30}$/.test(e))(t))if((e=>!(!e||"string"!=typeof e)&&!(e.length<8||e.length>128)&&[/[A-Z]/.test(e),/[a-z]/.test(e),/[0-9]/.test(e),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)].filter(Boolean).length>=3)(a))if(a===o)if(So("register:".concat(n),3,36e5)){h(!0)
try{await async function(e,t,r){const{data:n,error:s}=await Qi.auth.signUp({email:e,password:t,options:{data:{username:r||e.split("@")[0]}}})
if(s)throw s
return{user:n.user,session:n.session}}(n,a,t),g(!0),setTimeout(()=>b("/login"),3e3)}catch(s){f(s instanceof Error?s.message:e("register.error.signup"))}finally{h(!1)}}else f("Too many registration attempts. Please try again later.")
else f(e("register.error.passwordmismatch"))
else f("Password must be 8-128 characters")
else f("Username must be 3-30 characters (letters, numbers, -, _)")
else f("Invalid email format")},children:[er.jsxs("div",{className:"form-group",children:[er.jsx("label",{htmlFor:"username",className:"form-label",children:"Nom d'utilisateur"}),er.jsxs("div",{className:"input-wrapper",children:[er.jsx("i",{className:"fas fa-user input-icon"}),er.jsx("input",{type:"text",id:"username",name:"username",className:"form-input form-input-icon",placeholder:"johndoe",required:!0,value:t,onChange:e=>r(e.target.value),disabled:d})]})]}),er.jsxs("div",{className:"form-group",children:[er.jsx("label",{htmlFor:"email",className:"form-label",children:e("register.email_label")}),er.jsxs("div",{className:"input-wrapper",children:[er.jsx("i",{className:"fas fa-envelope input-icon"}),er.jsx("input",{type:"email",id:"email",name:"email",className:"form-input form-input-icon",placeholder:"votre@email.com",required:!0,value:n,onChange:e=>s(e.target.value),disabled:d})]})]}),er.jsxs("div",{className:"form-group",children:[er.jsx("label",{htmlFor:"password",className:"form-label",children:"Mot de passe"}),er.jsxs("div",{className:"input-wrapper",children:[er.jsx("i",{className:"fas fa-lock input-icon"}),er.jsx("input",{type:"password",id:"password",name:"password",className:"form-input form-input-icon",placeholder:"Minimum 8 caract\xe8res",required:!0,minLength:8,value:a,onChange:e=>i(e.target.value),disabled:d})]})]}),er.jsxs("div",{className:"form-group",children:[er.jsx("label",{htmlFor:"confirmPassword",className:"form-label",children:"Confirmer le mot de passe"}),er.jsxs("div",{className:"input-wrapper",children:[er.jsx("i",{className:"fas fa-lock input-icon"}),er.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",className:"form-input form-input-icon",placeholder:"Confirmez votre mot de passe",required:!0,minLength:8,value:o,onChange:e=>l(e.target.value),disabled:d})]})]}),er.jsx("div",{className:"form-group",children:er.jsxs("div",{className:"checkbox-group",children:[er.jsx("input",{type:"checkbox",id:"terms",name:"terms",required:!0,checked:c,onChange:e=>u(e.target.checked),disabled:d}),er.jsxs("label",{htmlFor:"terms",children:["J'accepte les ",er.jsx(Mr,{to:"/terms",style:{color:"#fff"},children:"conditions d'utilisation"})," et la ",er.jsx(Mr,{to:"/privacy",style:{color:"#fff"},children:"politique de confidentialit\xe9"})]})]})}),er.jsx("button",{type:"submit",className:"btn btn-primary btn-block btn-glow",disabled:d,children:d?er.jsxs(er.Fragment,{children:[er.jsx("span",{className:"spinner"}),"Cr\xe9ation..."]}):er.jsxs(er.Fragment,{children:["Cr\xe9er mon compte",er.jsx("i",{className:"fas fa-arrow-right"})]})})]}),er.jsx("div",{className:"auth-footer",children:er.jsxs("p",{children:["D\xe9j\xe0 un compte? ",er.jsx(Mr,{to:"/login",children:"Se connecter"})]})})]})]})})},ul=()=>{const{t:e,language:t}=so()
return er.jsxs($o,{children:[er.jsx("header",{className:"page-header",children:er.jsxs("div",{className:"container",children:[er.jsx("span",{className:"section-badge",children:e("privacy.badge")}),er.jsx("h1",{children:e("privacy.title")}),er.jsx("p",{children:e("privacy.updated")})]})}),er.jsx("section",{className:"content-section",children:er.jsx("div",{className:"container",children:er.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[er.jsx("h2",{children:"1. Introduction"}),er.jsx("p",{children:"fr"===t?"Chez Dbs, nous prenons la protection de vos donn\xe9es personnelles tr\xe8s au s\xe9rieux. Cette politique de confidentialit\xe9 explique comment nous collectons, utilisons, stockons et prot\xe9geons vos informations lorsque vous utilisez notre plateforme.":"At Dbs, we take the protection of your personal data very seriously. This privacy policy explains how we collect, use, store and protect your information when you use our platform."}),er.jsx("h2",{children:"fr"===t?"2. Donn\xe9es collect\xe9es":"2. Data Collected"}),er.jsx("p",{children:"fr"===t?"Nous collectons les types de donn\xe9es suivants:":"We collect the following types of data:"}),er.jsxs("ul",{children:[er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Donn\xe9es d'inscription:":"Registration Data:"})," ","fr"===t?"nom, adresse email, mot de passe (chiffr\xe9)":"name, email address, password (encrypted)"]}),er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Donn\xe9es de paiement:":"Payment Data:"})," ","fr"===t?"trait\xe9es par nos partenaires de paiement s\xe9curis\xe9s (Stripe)":"processed by our secure payment partners (Stripe)"]}),er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Donn\xe9es d'utilisation:":"Usage Data:"})," ","fr"===t?"logs de connexion, statistiques d'utilisation anonymis\xe9es":"login logs, anonymized usage statistics"]}),er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Donn\xe9es techniques:":"Technical Data:"})," ","fr"===t?"adresse IP, type de navigateur, syst\xe8me d'exploitation":"IP address, browser type, operating system"]})]}),er.jsx("h2",{children:"fr"===t?"3. Utilisation des donn\xe9es":"3. Data Usage"}),er.jsx("p",{children:"fr"===t?"Vos donn\xe9es sont utilis\xe9es pour:":"Your data is used for:"}),er.jsxs("ul",{children:[er.jsx("li",{children:"fr"===t?"Fournir et am\xe9liorer nos services":"Provide and improve our services"}),er.jsx("li",{children:"fr"===t?"G\xe9rer votre compte et vos abonnements":"Manage your account and subscriptions"}),er.jsx("li",{children:"fr"===t?"Communiquer avec vous concernant votre compte":"Communicate with you about your account"}),er.jsx("li",{children:"fr"===t?"Assurer la s\xe9curit\xe9 de la plateforme":"Ensure platform security"}),er.jsx("li",{children:"fr"===t?"Respecter nos obligations l\xe9gales":"Comply with our legal obligations"})]}),er.jsx("h2",{children:"fr"===t?"4. Recherches et confidentialit\xe9":"4. Searches and Privacy"}),er.jsxs("p",{children:[er.jsx("strong",{children:"Important:"})," ","fr"===t?"Dbs ne stocke pas l'historique de vos recherches. Chaque requ\xeate est trait\xe9e de mani\xe8re isol\xe9e et les r\xe9sultats ne sont pas conserv\xe9s sur nos serveurs une fois la session termin\xe9e.":"Dbs does not store your search history. Each request is processed in isolation and results are not retained on our servers after the session ends."]}),er.jsx("h2",{children:"fr"===t?"5. Partage des donn\xe9es":"5. Data Sharing"}),er.jsx("p",{children:"fr"===t?"Nous ne vendons jamais vos donn\xe9es personnelles. Nous pouvons partager des donn\xe9es avec:":"We never sell your personal data. We may share data with:"}),er.jsxs("ul",{children:[er.jsx("li",{children:"fr"===t?"Nos sous-traitants techniques (h\xe9bergement, paiement) sous contrat de confidentialit\xe9":"Our technical subprocessors (hosting, payment) under confidentiality agreements"}),er.jsx("li",{children:"fr"===t?"Les autorit\xe9s comp\xe9tentes en cas d'obligation l\xe9gale":"Competent authorities when legally required"})]}),er.jsx("h2",{children:"fr"===t?"6. S\xe9curit\xe9 des donn\xe9es":"6. Data Security"}),er.jsx("p",{children:"fr"===t?"Nous mettons en \u0153uvre des mesures de s\xe9curit\xe9 robustes:":"We implement robust security measures:"}),er.jsxs("ul",{children:[er.jsx("li",{children:"fr"===t?"Chiffrement AES-256 pour les donn\xe9es au repos":"AES-256 encryption for data at rest"}),er.jsx("li",{children:"fr"===t?"TLS 1.3 pour les donn\xe9es en transit":"TLS 1.3 for data in transit"}),er.jsx("li",{children:"fr"===t?"Authentification \xe0 deux facteurs disponible":"Two-factor authentication available"}),er.jsx("li",{children:"fr"===t?"Audits de s\xe9curit\xe9 r\xe9guliers":"Regular security audits"}),er.jsx("li",{children:"fr"===t?"Acc\xe8s limit\xe9 aux donn\xe9es personnelles":"Limited access to personal data"})]}),er.jsx("h2",{children:"fr"===t?"7. Vos droits (RGPD)":"7. Your Rights (GDPR)"}),er.jsx("p",{children:"fr"===t?"Conform\xe9ment au RGPD, vous disposez des droits suivants:":"Under GDPR, you have the following rights:"}),er.jsxs("ul",{children:[er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Droit d'acc\xe8s:":"Right of Access:"})," ","fr"===t?"obtenir une copie de vos donn\xe9es":"obtain a copy of your data"]}),er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Droit de rectification:":"Right to Rectification:"})," ","fr"===t?"corriger vos donn\xe9es inexactes":"correct inaccurate data"]}),er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Droit \xe0 l'effacement:":"Right to Erasure:"})," ","fr"===t?"demander la suppression de vos donn\xe9es":"request deletion of your data"]}),er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Droit \xe0 la portabilit\xe9:":"Right to Data Portability:"})," ","fr"===t?"recevoir vos donn\xe9es dans un format lisible":"receive your data in a readable format"]}),er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Droit d'opposition:":"Right to Object:"})," ","fr"===t?"vous opposer au traitement de vos donn\xe9es":"object to processing of your data"]})]}),er.jsx("p",{children:"fr"===t?"Pour exercer ces droits, contactez-nous \xe0: privacy@Dbs.io":"To exercise these rights, contact us at: privacy@Dbs.io"}),er.jsx("h2",{children:"8. Cookies"}),er.jsx("p",{children:"fr"===t?"Nous utilisons des cookies essentiels pour le fonctionnement du site et des cookies analytiques (avec votre consentement) pour am\xe9liorer nos services. Vous pouvez g\xe9rer vos pr\xe9f\xe9rences de cookies \xe0 tout moment.":"We use essential cookies for website functionality and analytical cookies (with your consent) to improve our services. You can manage your cookie preferences at any time."}),er.jsx("h2",{children:"fr"===t?"9. Conservation des donn\xe9es":"9. Data Retention"}),er.jsx("p",{children:"fr"===t?"Nous conservons vos donn\xe9es personnelles pendant la dur\xe9e de votre compte actif, plus 3 ans apr\xe8s sa fermeture pour des raisons l\xe9gales. Les donn\xe9es de facturation sont conserv\xe9es 10 ans conform\xe9ment \xe0 la loi.":"We retain your personal data for the duration of your active account, plus 3 years after closure for legal reasons. Billing data is retained for 10 years as required by law."}),er.jsx("h2",{children:"fr"===t?"10. Modifications":"10. Changes"}),er.jsx("p",{children:"fr"===t?"Nous pouvons mettre \xe0 jour cette politique de confidentialit\xe9. Toute modification importante vous sera notifi\xe9e par email. La date de derni\xe8re mise \xe0 jour est indiqu\xe9e en haut de ce document.":"We may update this privacy policy. Any significant changes will be notified by email. The last update date is shown at the top of this document."}),er.jsx("h2",{children:"11. Contact"}),er.jsx("p",{children:"fr"===t?"Pour toute question concernant cette politique ou vos donn\xe9es personnelles:":"For any questions about this policy or your personal data:"}),er.jsxs("ul",{children:[er.jsx("li",{children:"Email: privacy@Dbs.io"}),er.jsx("li",{children:"fr"===t?"Adresse: 123 Rue de la S\xe9curit\xe9, 75001 Paris, France":"Address: 123 Rue de la S\xe9curit\xe9, 75001 Paris, France"}),er.jsx("li",{children:"DPO: dpo@Dbs.io"})]})]})})})]})},dl=()=>{const{t:e,language:t}=so()
return er.jsxs($o,{children:[er.jsx("header",{className:"page-header",children:er.jsxs("div",{className:"container",children:[er.jsx("span",{className:"section-badge",children:e("terms.badge")}),er.jsx("h1",{children:e("terms.title")}),er.jsx("p",{children:e("terms.updated")})]})}),er.jsx("section",{className:"content-section",children:er.jsx("div",{className:"container",children:er.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[er.jsx("h2",{children:e("terms.section1")}),er.jsx("p",{children:"fr"===t?"En acc\xe9dant et en utilisant Dbs, vous acceptez d'\xeatre li\xe9 par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.":"By accessing and using Dbs, you agree to be bound by these Terms of Service. If you do not accept these terms, please do not use our service."}),er.jsx("h2",{children:e("terms.section2")}),er.jsx("p",{children:e("terms.service.desc")}),er.jsx("h2",{children:e("terms.section3")}),er.jsx("p",{children:e("terms.registration")}),er.jsxs("ul",{children:[er.jsx("li",{children:e("terms.reg1")}),er.jsx("li",{children:e("terms.reg2")}),er.jsx("li",{children:e("terms.reg3")}),er.jsx("li",{children:e("terms.reg4")})]}),er.jsx("h2",{children:e("terms.section4")}),er.jsx("p",{children:e("terms.acceptable")}),er.jsxs("ul",{children:[er.jsx("li",{children:e("terms.acceptable1")}),er.jsx("li",{children:e("terms.acceptable2")}),er.jsx("li",{children:e("terms.acceptable3")}),er.jsx("li",{children:e("terms.acceptable4")})]}),er.jsx("h2",{children:e("terms.section5")}),er.jsx("p",{children:er.jsx("strong",{children:e("terms.prohibited")})}),er.jsxs("ul",{children:[er.jsx("li",{children:e("terms.prohibited1")}),er.jsx("li",{children:e("terms.prohibited2")}),er.jsx("li",{children:e("terms.prohibited3")}),er.jsx("li",{children:e("terms.prohibited4")}),er.jsx("li",{children:e("terms.prohibited5")}),er.jsx("li",{children:e("terms.prohibited6")}),er.jsx("li",{children:e("terms.prohibited7")})]}),er.jsx("h2",{children:e("terms.section6")}),er.jsx("p",{children:e("terms.ip.text")}),er.jsx("h2",{children:e("terms.section7")}),er.jsx("p",{children:e("terms.liability")}),er.jsxs("ul",{children:[er.jsx("li",{children:e("terms.liability1")}),er.jsx("li",{children:e("terms.liability2")}),er.jsx("li",{children:e("terms.liability3")})]}),er.jsx("p",{children:e("terms.liability.desc")}),er.jsx("h2",{children:e("terms.section8")}),er.jsx("p",{children:e("terms.subscription")}),er.jsx("h2",{children:e("terms.section9")}),er.jsx("p",{children:e("terms.suspension")}),er.jsxs("ul",{children:[er.jsx("li",{children:e("terms.suspension1")}),er.jsx("li",{children:e("terms.suspension2")}),er.jsx("li",{children:e("terms.suspension3")}),er.jsx("li",{children:e("terms.suspension4")})]}),er.jsx("h2",{children:e("terms.section10")}),er.jsx("p",{children:e("terms.modifications")}),er.jsx("h2",{children:e("terms.section11")}),er.jsx("p",{children:e("terms.law")}),er.jsx("h2",{children:e("terms.section12")}),er.jsx("p",{children:e("terms.contact")}),er.jsxs("ul",{children:[er.jsx("li",{children:e("terms.contact.email")}),er.jsx("li",{children:e("terms.contact.address")})]}),er.jsx("div",{style:{marginTop:"40px",padding:"24px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:er.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.95rem"},children:e("terms.confirmation")})})]})})})]})},hl=()=>{const{t:e,language:t}=so()
return er.jsxs($o,{children:[er.jsx("header",{className:"page-header",children:er.jsxs("div",{className:"container",children:[er.jsx("span",{className:"section-badge",children:e("gdpr.badge")}),er.jsx("h1",{children:e("gdpr.title")}),er.jsx("p",{children:e("gdpr.updated")})]})}),er.jsx("section",{className:"content-section",children:er.jsx("div",{className:"container",children:er.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[er.jsx("h2",{children:e("gdpr.section1")}),er.jsx("p",{children:e("gdpr.section1.desc")}),er.jsx("h2",{children:e("gdpr.section2")}),er.jsx("p",{children:e("gdpr.section2.desc")}),er.jsxs("ul",{children:[er.jsx("li",{children:e("gdpr.section2.contact")}),er.jsx("li",{children:e("gdpr.section2.dpo")})]}),er.jsx("h2",{children:e("gdpr.section3")}),er.jsxs("ul",{children:[er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Ex\xe9cution du contrat:":"Contract Execution:"})," ",e("gdpr.section3.contract")]}),er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Consentement:":"Consent:"})," ",e("gdpr.section3.consent")]}),er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Obligation l\xe9gale:":"Legal Obligation:"})," ",e("gdpr.section3.legal")]}),er.jsxs("li",{children:[er.jsx("strong",{children:"fr"===t?"Int\xe9r\xeat l\xe9gitime:":"Legitimate Interest:"})," ",e("gdpr.section3.legitimate")]})]}),er.jsx("h2",{children:e("gdpr.section4")}),er.jsxs("p",{children:[e("gdpr.section4.desc"),er.jsx(Mr,{to:"/privacy",children:"fr"===t?"Politique de confidentialit\xe9":"Privacy Policy"}),"."]}),er.jsx("h2",{children:e("gdpr.section5")}),er.jsxs("ul",{children:[er.jsx("li",{children:e("gdpr.section5.point1")}),er.jsx("li",{children:e("gdpr.section5.point2")}),er.jsx("li",{children:e("gdpr.section5.point3")}),er.jsx("li",{children:e("gdpr.section5.point4")}),er.jsx("li",{children:e("gdpr.section5.point5")})]}),er.jsx("h2",{children:e("gdpr.section6")}),er.jsx("p",{children:e("gdpr.section6.desc")}),er.jsx("h2",{children:e("gdpr.section7")}),er.jsx("p",{children:e("gdpr.section7.desc")}),er.jsx("h2",{children:e("gdpr.section8")}),er.jsxs("ul",{children:[er.jsx("li",{children:e("gdpr.section8.point1")}),er.jsx("li",{children:e("gdpr.section8.point2")}),er.jsx("li",{children:e("gdpr.section8.point3")}),er.jsx("li",{children:e("gdpr.section8.point4")})]}),er.jsx("h2",{children:e("gdpr.section9")}),er.jsx("p",{children:e("gdpr.section9.desc")}),er.jsx("h2",{children:e("gdpr.section10")}),er.jsx("p",{children:e("gdpr.section10.desc")}),er.jsx("h2",{children:e("gdpr.section11")}),er.jsx("p",{children:e("gdpr.section11.desc")})]})})})]})},pl=()=>{const{t:e,language:t}=so()
return er.jsxs($o,{children:[er.jsx("header",{className:"page-header",children:er.jsxs("div",{className:"container",children:[er.jsx("span",{className:"section-badge",children:e("security.badge")}),er.jsx("h1",{children:e("security.title")}),er.jsx("p",{children:e("security.updated")})]})}),er.jsx("section",{className:"content-section",children:er.jsx("div",{className:"container",children:er.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[er.jsx("h2",{children:e("security.section1")}),er.jsx("p",{children:e("security.section1.desc")}),er.jsx("h2",{children:e("security.section2")}),er.jsx("p",{children:e("security.section2.desc")}),er.jsx("h2",{children:e("security.section3")}),er.jsxs("ul",{children:[er.jsx("li",{children:e("security.section3.point1")}),er.jsx("li",{children:e("security.section3.point2")}),er.jsx("li",{children:e("security.section3.point3")})]}),er.jsx("h2",{children:e("security.section4")}),er.jsx("p",{children:e("security.section4.desc")}),er.jsx("h2",{children:e("security.section5")}),er.jsx("p",{children:e("security.section5.desc")}),er.jsx("h2",{children:e("security.section6")}),er.jsx("p",{children:e("security.section6.desc")}),er.jsx("h2",{children:e("security.section7")}),er.jsx("p",{children:e("security.section7.desc")}),er.jsx("h2",{children:e("security.section8")}),er.jsxs("ul",{children:[er.jsx("li",{children:e("security.section8.point1")}),er.jsx("li",{children:e("security.section8.point2")}),er.jsx("li",{children:e("security.section8.point3")}),er.jsx("li",{children:e("security.section8.point4")})]}),er.jsx("h2",{children:e("security.section9")}),er.jsxs("p",{children:[e("security.section9.desc"),er.jsx(Mr,{to:"/privacy",children:"fr"===t?"Politique de confidentialit\xe9":"Privacy Policy"}),"."]})]})})})]})},fl=()=>{const{user:e}=to(),{t}=so(),r=T(),[n,s]=nr.useState(!1),[a,i]=nr.useState(!0),[o,l]=nr.useState(null),[c,u]=nr.useState(null),[d,h]=nr.useState("")
nr.useEffect(()=>{const t=async()=>{i(!0)
const t=setTimeout(()=>i(!1),8e3)
if(!e)return clearTimeout(t),i(!1),void r("/login")
let n=null,a=null
try{const t="user_plan_".concat(e.id),r=localStorage.getItem(t)
if(r)try{const e=JSON.parse(r)
a=((null==e?void 0:e.plan)||"").toString().toLowerCase()||null}catch(jl){a="beginner"}}catch(jl){}const o="granted"===sessionStorage.getItem("admin_panel_auth")
!a&&o&&(a="beginner")
let c=null
try{const{data:t}=await Qi.from("user_plans").select("plan").eq("user_id",e.id).maybeSingle()
c=((null==t?void 0:t.plan)||"").toString().toLowerCase()||null,c&&(n=c)}catch(u){}if(!n&&a&&(n=a),!n)try{const{data:t}=await Qi.from("user_plans").select("plan").eq("user_id",e.id).maybeSingle(),r=((null==t?void 0:t.plan)||"").toString().toLowerCase()||null
r&&(n=r)}catch(jl){}if(!n||!["beta","beginner","pro","premium"].includes(n))return s(!1),h("API r\xe9serv\xe9e aux plans payants (Beta / Beginner / Pro / premium)."),i(!1),void clearTimeout(t)
s(!0)
try{const t=localStorage.getItem("api_key_".concat(e.id))
if(t)l(t)
else{const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let r="sk_live_"
for(let e=0;e<48;e++)r+=t.charAt(Math.floor(Math.random()*t.length))
localStorage.setItem("api_key_".concat(e.id),r),l(r)}}catch(u){r("/")}finally{i(!1),clearTimeout(t)}}
t()
const n=()=>{"visible"===document.visibilityState&&t()}
return document.addEventListener("visibilitychange",n),()=>document.removeEventListener("visibilitychange",n)},[e,r]),nr.useEffect(()=>{if(!a)return
const e=setTimeout(()=>i(!1),8e3)
return()=>clearTimeout(e)},[a])
const p=async(e,t)=>{try{await navigator.clipboard.writeText(e),u(t),setTimeout(()=>u(null),2e3)}catch(r){}}
if(a)return er.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:er.jsx("i",{className:"fas fa-spinner fa-spin",style:{fontSize:"2rem",color:"var(--primary)"}})})
if(!n)return er.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"12px"},children:[er.jsx("h2",{style:{margin:0},children:"API r\xe9serv\xe9e aux plans payants"}),er.jsx("p",{style:{color:"var(--text-secondary)",margin:0},children:d||"Choisis un plan payant pour g\xe9n\xe9rer une cl\xe9 API."}),er.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:[er.jsx("button",{className:"btn btn-primary",onClick:()=>r("/pricing"),children:"Voir les plans"}),er.jsx("button",{className:"btn btn-outline",onClick:()=>r("/"),children:"Retour"})]})]})
const f='curl -X POST \\\n  https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search \\\n  -H "Content-Type: application/json" \\\n  -H "X-API-Key: '.concat(o||"YOUR_API_KEY",'" \\\n  -d \'{"query": "test@example.com"}\''),m='curl -s -X POST \\\n  https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search \\\n  -H "Content-Type: application/json" \\\n  -H "X-API-Key: '.concat(o||"YOUR_API_KEY",'" \\\n  -d \'{"query": "test@example.com"}\' | python3 -c "import sys,json; print(json.load(sys.stdin).get(\'formatted_text\',\'\'))"'),g='import requests\n\nAPI_KEY = "'.concat(o||"YOUR_API_KEY",'"\nAPI_URL = "https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search"\n\ndef search(query, limit=100):\n    headers = {\n        "Content-Type": "application/json",\n        "X-API-Key": API_KEY\n    }\n    data = {\n        "query": query,\n        "limit": limit\n    }\n    response = requests.post(API_URL, json=data, headers=headers)\n    return response.json()\n\n# Example usage\nresult = search("test@example.com")\nprint(result["formatted_text"])')
return er.jsx($o,{children:er.jsx("div",{style:{minHeight:"100vh",background:"var(--bg-primary)",padding:"40px 20px"},children:er.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto"},children:[er.jsxs("div",{style:{background:"linear-gradient(135deg, #161616 0%, #0f0f0f 100%)",borderRadius:"var(--radius-lg)",padding:"40px",marginBottom:"30px",textAlign:"center",border:"1px solid #2a2a2a",boxShadow:"0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.02)"},children:[er.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"60px",height:"60px",borderRadius:"12px",background:"#000",border:"2px solid #444",fontSize:"1.5rem",fontWeight:700,color:"white",marginBottom:"20px"},children:"</>"}),er.jsx("h1",{style:{margin:"0 0 10px 0",fontSize:"2rem"},children:t("apidocs.header.title")}),er.jsx("p",{style:{margin:0,color:"var(--text-secondary)",fontSize:"1.1rem"},children:t("apidocs.header.subtitle")})]}),er.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[er.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-rocket",style:{color:"var(--primary)"}}),"Quick Start"]}),er.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"16px"},children:"Make your first API request in seconds. Copy and paste this command in your terminal:"}),er.jsxs("div",{style:{position:"relative"},children:[er.jsx("pre",{style:{background:"#0d1117",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"0.85rem",color:"#c9d1d9",border:"1px solid #30363d"},children:f}),er.jsxs("button",{onClick:()=>p(f,"curl"),style:{position:"absolute",top:"8px",right:"8px",background:"curl"===c?"#10b981":"#21262d",border:"1px solid #30363d",borderRadius:"6px",padding:"6px 12px",color:"white",cursor:"pointer",fontSize:"0.8rem"},children:[er.jsx("i",{className:"fas fa-".concat("curl"===c?"check":"copy")}),"curl"===c?" Copied!":" Copy"]})]})]}),er.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[er.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-server",style:{color:"var(--primary)"}}),"API Endpoint"]}),er.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",background:"#0d1117",padding:"12px 16px",borderRadius:"8px",border:"1px solid #30363d"},children:[er.jsx("span",{style:{background:"#238636",color:"white",padding:"4px 10px",borderRadius:"4px",fontWeight:600,fontSize:"0.8rem"},children:"POST"}),er.jsx("code",{style:{color:"#c9d1d9",flex:1},children:"https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search"})]})]}),er.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[er.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-key",style:{color:"var(--primary)"}}),"Authentication"]}),er.jsxs("p",{style:{color:"var(--text-secondary)",marginBottom:"16px"},children:["All API requests require authentication via the ",er.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"X-API-Key"})," header."]}),er.jsx("div",{style:{background:"#0d1117",padding:"12px 16px",borderRadius:"8px",border:"1px solid #30363d",marginBottom:"16px"},children:er.jsxs("code",{style:{color:"#c9d1d9"},children:["X-API-Key: ",o||"sk_live_xxxxxxxxxxxx"]})}),er.jsxs("div",{style:{background:"rgba(255, 215, 0, 0.1)",border:"1px solid rgba(255, 215, 0, 0.3)",borderRadius:"8px",padding:"12px 16px",display:"flex",alignItems:"center",gap:"10px",color:"#ffd700"},children:[er.jsx("i",{className:"fas fa-info-circle"}),er.jsx("span",{style:{fontSize:"0.9rem"},children:"Your API key can be found in the API Access modal. Keep it secret!"})]})]}),er.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[er.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-cog",style:{color:"var(--primary)"}}),"Request Parameters"]}),er.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.9rem"},children:[er.jsx("thead",{children:er.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[er.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Parameter"}),er.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Type"}),er.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Required"}),er.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Description"})]})}),er.jsxs("tbody",{children:[er.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[er.jsx("td",{style:{padding:"12px"},children:er.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"query"})}),er.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"string"}),er.jsx("td",{style:{padding:"12px"},children:er.jsx("span",{style:{color:"#f85149"},children:"Yes"})}),er.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"Search query (email, phone, username, etc.)"})]}),er.jsxs("tr",{children:[er.jsx("td",{style:{padding:"12px"},children:er.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"limit"})}),er.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"integer"}),er.jsx("td",{style:{padding:"12px"},children:er.jsx("span",{style:{color:"var(--text-secondary)"},children:"No"})}),er.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"Maximum results per database (default: 100, max: 100)"})]})]})]})]}),er.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[er.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-reply",style:{color:"var(--primary)"}}),"Response Format"]}),er.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"16px"},children:"The API returns JSON with structured results and a pre-formatted text version."}),er.jsx("div",{style:{position:"relative"},children:er.jsx("pre",{style:{background:"#0d1117",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"0.8rem",color:"#c9d1d9",border:"1px solid #30363d",maxHeight:"300px"},children:'{\n  "success": true,\n  "query": "test@example.com",\n  "results_count": 35,\n  "credits_remaining": 995,\n  "credits_per_day": 1000,\n  "results": [\n    {\n      "database": "Collection #1",\n      "infoLeak": "Database breach info...",\n      "data": [\n        {\n          "Email": "test@example.com",\n          "Password": "password123"\n        }\n      ]\n    }\n  ],\n  "formatted_text": "Dbs RESULTS\\nQuery: test@example.com\\n..."\n}'})})]}),er.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[er.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-file-alt",style:{color:"var(--primary)"}}),"Clean Text Output"]}),er.jsxs("p",{style:{color:"var(--text-secondary)",marginBottom:"16px"},children:["Use the ",er.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"formatted_text"})," field for a clean, readable output without database descriptions:"]}),er.jsxs("div",{style:{position:"relative",marginBottom:"20px"},children:[er.jsx("pre",{style:{background:"#0d1117",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"0.85rem",color:"#c9d1d9",border:"1px solid #30363d"},children:m}),er.jsxs("button",{onClick:()=>p(m,"curlf"),style:{position:"absolute",top:"8px",right:"8px",background:"curlf"===c?"#10b981":"#21262d",border:"1px solid #30363d",borderRadius:"6px",padding:"6px 12px",color:"white",cursor:"pointer",fontSize:"0.8rem"},children:[er.jsx("i",{className:"fas fa-".concat("curlf"===c?"check":"copy")}),"curlf"===c?" Copied!":" Copy"]})]}),er.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"10px",fontSize:"0.9rem"},children:er.jsx("strong",{children:"Output example:"})}),er.jsx("pre",{style:{background:"#0d1117",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"0.8rem",color:"#58a6ff",border:"1px solid #30363d",maxHeight:"250px"},children:"Dbs RESULTS\nQuery: test@example.com\nDate: 2025-12-12T19:30:00.000Z\nTotal databases: 35\n\n[1] Collection #1\nEmail: test@example.com\nPassword: password123\n\n[2] AlfaBank 2023\nEmail: test@example.com\nFullName: John Doe\nPhone: 79515026171\n\n[3] Alien TxtBase\nEmail: test@example.com\nPassword: qwerty123\nUrl: example.com/login\n..."})]}),er.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[er.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fab fa-python",style:{color:"#3776ab"}}),"Python Example"]}),er.jsxs("div",{style:{position:"relative"},children:[er.jsx("pre",{style:{background:"#0d1117",padding:"16px",borderRadius:"8px",overflow:"auto",fontSize:"0.8rem",color:"#c9d1d9",border:"1px solid #30363d"},children:g}),er.jsxs("button",{onClick:()=>p(g,"python"),style:{position:"absolute",top:"8px",right:"8px",background:"python"===c?"#10b981":"#21262d",border:"1px solid #30363d",borderRadius:"6px",padding:"6px 12px",color:"white",cursor:"pointer",fontSize:"0.8rem"},children:[er.jsx("i",{className:"fas fa-".concat("python"===c?"check":"copy")}),"python"===c?" Copied!":" Copy"]})]})]}),er.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[er.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-tachometer-alt",style:{color:"var(--primary)"}}),"Rate Limits & Credits"]}),er.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px"},children:[er.jsxs("div",{style:{background:"var(--bg-primary)",padding:"16px",borderRadius:"8px",textAlign:"center"},children:[er.jsx("div",{style:{fontSize:"1.8rem",fontWeight:700,color:"var(--primary)"},children:"1000"}),er.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:"Credits per day"})]}),er.jsxs("div",{style:{background:"var(--bg-primary)",padding:"16px",borderRadius:"8px",textAlign:"center"},children:[er.jsx("div",{style:{fontSize:"1.8rem",fontWeight:700,color:"#ffd700"},children:"1"}),er.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:"Credit per search"})]}),er.jsxs("div",{style:{background:"var(--bg-primary)",padding:"16px",borderRadius:"8px",textAlign:"center"},children:[er.jsx("div",{style:{fontSize:"1.8rem",fontWeight:700,color:"#10b981"},children:"00:00"}),er.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:"Daily reset (UTC)"})]})]}),er.jsxs("div",{style:{marginTop:"16px",background:"rgba(139, 92, 246, 0.1)",border:"1px solid rgba(139, 92, 246, 0.3)",borderRadius:"8px",padding:"12px 16px",display:"flex",alignItems:"center",gap:"10px",color:"#a78bfa"},children:[er.jsx("i",{className:"fas fa-sync-alt"}),er.jsx("span",{style:{fontSize:"0.9rem"},children:"Credits are shared between the website and API. Each search (web or API) consumes 1 credit."})]})]}),er.jsxs("section",{style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",padding:"24px",marginBottom:"20px",border:"1px solid var(--border-color)"},children:[er.jsxs("h2",{style:{margin:"0 0 16px 0",display:"flex",alignItems:"center",gap:"10px"},children:[er.jsx("i",{className:"fas fa-exclamation-triangle",style:{color:"#f85149"}}),"Error Codes"]}),er.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.9rem"},children:[er.jsx("thead",{children:er.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[er.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Code"}),er.jsx("th",{style:{textAlign:"left",padding:"12px",color:"var(--text-secondary)"},children:"Description"})]})}),er.jsxs("tbody",{children:[er.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[er.jsx("td",{style:{padding:"12px"},children:er.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"401"})}),er.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"Invalid or missing API key"})]}),er.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[er.jsx("td",{style:{padding:"12px"},children:er.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"403"})}),er.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"Beginner/Pro/premium plan required"})]}),er.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[er.jsx("td",{style:{padding:"12px"},children:er.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"429"})}),er.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"No credits remaining (resets at midnight UTC)"})]}),er.jsxs("tr",{children:[er.jsx("td",{style:{padding:"12px"},children:er.jsx("code",{style:{background:"#21262d",padding:"2px 6px",borderRadius:"4px"},children:"400"})}),er.jsx("td",{style:{padding:"12px",color:"var(--text-secondary)"},children:"Missing query parameter or invalid request"})]})]})]})]}),er.jsxs("div",{style:{textAlign:"center",marginTop:"30px"},children:[er.jsxs("button",{onClick:()=>r("/"),className:"btn btn-outline",style:{marginRight:"12px"},children:[er.jsx("i",{className:"fas fa-arrow-left",style:{marginRight:"8px"}}),"Back to Home"]}),er.jsxs("button",{onClick:()=>r("/pricing"),className:"btn btn-primary",children:[er.jsx("i",{className:"fas fa-crown",style:{marginRight:"8px"}}),"View Plans"]})]})]})})})},ml=()=>{const{pathname:e}=N()
return nr.useEffect(()=>{window.scrollTo(0,0)},[e]),null},gl=()=>er.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-primary)"},children:er.jsxs("div",{style:{textAlign:"center"},children:[er.jsx("div",{style:{width:"50px",height:"50px",border:"4px solid var(--border-color)",borderTop:"4px solid var(--accent-primary)",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 20px"}}),er.jsx("p",{style:{color:"var(--text-secondary)"},children:"Loading..."}),er.jsx("style",{children:"\n          @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n          }\n        "})]})}),bl=({children:e})=>er.jsxs(er.Fragment,{children:[er.jsx(Vo,{}),e,er.jsx(qo,{})]}),yl=({children:e})=>er.jsx(er.Fragment,{children:e}),vl=()=>{const{loading:e}=to()
return e?er.jsx(gl,{}):er.jsxs(er.Fragment,{children:[er.jsx(ml,{}),er.jsx(Ko,{}),er.jsx(Mo,{}),er.jsx(Ho,{}),er.jsx(Zo,{}),er.jsxs(U,{children:[er.jsx(L,{path:"/",element:er.jsx(bl,{children:er.jsx(tl,{})})}),er.jsx(L,{path:"/features",element:er.jsx(bl,{children:er.jsx(rl,{})})}),er.jsx(L,{path:"/pricing",element:er.jsx(bl,{children:er.jsx(nl,{})})}),er.jsx(L,{path:"/about",element:er.jsx(bl,{children:er.jsx(sl,{})})}),er.jsx(L,{path:"/contact",element:er.jsx(bl,{children:er.jsx(al,{})})}),er.jsx(L,{path:"/tickets",element:er.jsx(bl,{children:er.jsx(ol,{})})}),er.jsx(L,{path:"/privacy",element:er.jsx(bl,{children:er.jsx(ul,{})})}),er.jsx(L,{path:"/terms",element:er.jsx(bl,{children:er.jsx(dl,{})})}),er.jsx(L,{path:"/gdpr",element:er.jsx(bl,{children:er.jsx(hl,{})})}),er.jsx(L,{path:"/security",element:er.jsx(bl,{children:er.jsx(pl,{})})}),er.jsx(L,{path:"/api-docs",element:er.jsx(bl,{children:er.jsx(fl,{})})}),er.jsx(L,{path:"/login",element:er.jsx(yl,{children:er.jsx(ll,{})})}),er.jsx(L,{path:"/register",element:er.jsx(yl,{children:er.jsx(cl,{})})})]})]})},xl=["token","access_token","refresh_token","api_key","apiKey","secret","password","credentials","auth","session","jwt","supabase","user_data"]
"undefined"!=typeof window&&Wt(),Wt(),window.requestAnimationFrame||(window.requestAnimationFrame=function(e){return window.setTimeout(e,1e3/60)})
const wl=()=>{const e=CSS&&CSS.registerProperty,t=CSS&&CSS.supports&&CSS.supports("background","conic-gradient(red, blue)")
e&&t||document.documentElement.classList.add("no-conic-gradient")}
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",wl):wl()
const kl=document.getElementById("root")
if(kl)try{ur.createRoot(kl).render(er.jsx(nr.StrictMode,{children:er.jsx(Ft,{})}))}catch(Sl){kl.innerHTML='\n      <div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#fff;font-family:Inter,sans-serif;text-align:center;padding:20px;">\n        <div>\n          <h1 style="color:#f00;">Error Loading Dbs</h1>\n          <p>Please check the console for details</p>\n          <pre style="text-align:left;background:#111;padding:10px;border-radius:5px;overflow:auto;max-width:90vw;">'.concat(Sl,"</pre>\n        </div>\n      </div>\n    ")}export{e as __vite_legacy_guard}
