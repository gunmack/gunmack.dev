(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6465:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),r(1838),r(8295),r(5866);var n=r(3191),i=r(8716),s=r(7922),a=r.n(s),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1838)),"/mnt/c/Users/jreed/Code/Website/src/app/page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"/mnt/c/Users/jreed/Code/Website/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/mnt/c/Users/jreed/Code/Website/src/app/page.js"],c="/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1463:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},661:()=>{},2877:(e,t,r)=>{Promise.resolve().then(r.bind(r,8646))},2481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(1174),i=r(8374),s=r(326),a=i._(r(7577)),o=n._(r(962)),l=n._(r(815)),d=r(3078),u=r(5248),c=r(1206);r(576);let f=r(131),p=n._(r(6820)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,i,s,a){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let x=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:o,width:l,decoding:d,className:u,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:x,fill:b,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:w,sizesInput:_,onLoad:P,onError:S,...C}=e;return(0,s.jsx)("img",{...C,...h(f),loading:m,width:l,height:o,decoding:d,"data-nimg":b?"fill":"1",className:u,style:c,sizes:i,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,p,v,y,j,x,_))},[r,p,v,y,j,S,x,_,t]),onLoad:e=>{g(e.currentTarget,p,v,y,j,x,_)},onError:e=>{w(!0),"empty"!==p&&j(!0),S&&S(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,n),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=m||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:o,onLoadingComplete:l}=e,g=(0,a.useRef)(o);(0,a.useEffect)(()=>{g.current=o},[o]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[v,y]=(0,a.useState)(!1),[j,w]=(0,a.useState)(!1),{props:_,meta:P}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:j});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{..._,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:w,sizesInput:e.sizes,ref:t}),P.priority?(0,s.jsx)(b,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.AmpContext},1157:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.HeadManagerContext},1206:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.ImageConfigContext},8710:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(576);let n=r(380),i=r(5248);function s(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:x,height:b,fill:v=!1,style:y,overrideSrc:j,onLoad:w,onLoadingComplete:_,placeholder:P="empty",blurDataURL:S,fetchPriority:C,layout:k,objectFit:M,objectPosition:z,lazyBoundary:O,lazyRoot:I,...E}=e,{imgConf:N,showAltText:D,blurComplete:A,defaultLoader:R}=t,U=N||i.imageConfigDefault;if("allSizes"in U)o=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);o={...U,allSizes:e,deviceSizes:t}}if(void 0===R)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let G=E.loader||R;delete E.loader,delete E.srcSet;let F="__next_img_default"in G;if(F){if("custom"===o.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:r,...n}=t;return e(n)}}if(k){"fill"===k&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!c&&(c=t)}let T="",q=a(x),L=a(b);if("object"==typeof(r=u)&&(s(r)||void 0!==r.src)){let e=s(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,T=e.src,!v){if(q||L){if(q&&!L){let t=q/e.width;L=Math.round(e.height*t)}else if(!q&&L){let t=L/e.height;q=Math.round(e.width*t)}}else q=e.width,L=e.height}}let W=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:T)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,W=!1),o.unoptimized&&(f=!0),F&&u.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let B=a(h),H=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:z}:{},D?{}:{color:"transparent"},y),J=A||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:L,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+P+'")',V=J?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:s,sizes:a,loader:o}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),u=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((e,n)=>o({config:t,src:r,quality:s,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:o({config:t,src:r,quality:s,width:l[u]})}}({config:o,src:u,unoptimized:f,width:q,quality:B,sizes:c,loader:G});return{props:{...E,loading:W?"lazy":m,fetchPriority:C,width:q,height:L,decoding:"async",className:g,style:{...H,...V},sizes:$.sizes,srcSet:$.srcSet,src:j||$.src},meta:{unoptimized:f,priority:p,placeholder:P,fill:v}}}},815:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(1174),i=r(8374),s=r(326),a=i._(r(7577)),o=n._(r(8003)),l=r(3484),d=r(1157),u=r(8710);function c(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(576);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let s=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?s=!1:(r.add(e),n[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),n=(0,a.useContext)(d.HeadManagerContext);return(0,s.jsx)(o.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:s,objectFit:a}=e,o=n?40*n:t,l=i?40*i:r,d=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},9029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return o}});let n=r(1174),i=r(3078),s=r(2481),a=n._(r(6820));function o(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image},6820:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},8003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(7577),i=()=>{},s=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function o(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},8646:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(326),i=r(434);r(7577);var s=r(9029),a=r.n(s);function o(){return(0,n.jsxs)("main",{className:"bg-zinc-900 flex flex-col items-center justify-between py-10",children:[n.jsx("div",{className:" flex flex-col items-center justify-between px-10",children:n.jsx("h1",{className:"text-blue-500 font-mono py-10 text-5xl ",children:"Julkar Naine Reedoy"})}),n.jsx("div",{className:"px-20",children:(0,n.jsxs)("article",{className:"font-serif text-neutral-50 bg-green-900 px-10 py-10 rounded-lg flex flex-col items-center text-start justify-between text-md",children:[(0,n.jsxs)("div",{className:"bg-blue-900 mx-20 p-20 rounded-lg",children:[(0,n.jsxs)("p",{children:["Hi, my name is Julkar ( Juul-car ) and welcome to my page :)",n.jsx("br",{}),"I am a 2nd year Computing Science Student at Simon Fraser University. ",n.jsx("br",{}),"My preferred languages are:",n.jsx("br",{}),n.jsx("br",{})]}),(0,n.jsxs)("ul",{children:[n.jsx("li",{children:"\uD83D\uDC49 C"}),n.jsx("li",{children:"\uD83D\uDC49 JavaScript"}),n.jsx("li",{children:"\uD83D\uDC49 Java"}),n.jsx("li",{children:"\uD83D\uDC49 Python"})]}),n.jsx("br",{}),(0,n.jsxs)("p",{children:["I enjoy working with abstract data structures in C and C++.",n.jsx("br",{}),"I have also created webpages using JavaScript such as the one you are viewing right now.",n.jsx("br",{}),n.jsx("br",{}),"**This page was created using Next.js***"]})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex flex-col items-center justify-between px-2 text-lg rounded-lg",children:[(0,n.jsxs)("h1",{children:[n.jsx("br",{}),n.jsx("br",{}),(0,n.jsxs)(i.default,{href:"/SFU",className:"block  rounded-lg p-4 hover:bg-blue-900 hover:shadow-lg ",children:[n.jsx(a(),{src:"/images/SFU.png",alt:"SFU",width:200,height:10,className:"w-auto h-auto mb-4 rounded-lg px-5"}),(0,n.jsxs)("p",{className:"text-center justify-between px-6",children:["SFU Campus Timeline",n.jsx("br",{}),"- Made with Bootstrap",n.jsx("br",{})]})]})]}),n.jsx("br",{})]}),(0,n.jsxs)("div",{className:"grid grid-cols-2  bg-green-900 rounded-lg",children:[n.jsx("div",{className:" flex items-center  px-10 text-md rounded-lg",children:n.jsx("h1",{children:(0,n.jsxs)(i.default,{href:"https://www.linkedin.com/in/julkar-naine-reedoy-211015217/",target:"_blank",className:"block   bg-green-900  rounded-lg p-4 hover:bg-red-900 hover:shadow-lg",children:[n.jsx(a(),{src:"/images/linkedIn.png",alt:"LinkedIn",width:50,height:10,className:" w-auto h-auto  rounded-lg"}),"LinkedIn"]})})}),n.jsx("div",{className:"  flex items-center  px-10 text-lg rounded-lg",children:n.jsx("h1",{children:(0,n.jsxs)(i.default,{href:"https://github.com/gunmack",target:"_blank",className:"block  bg-green-900  rounded-lg p-4 hover:bg-red-900 hover:shadow-lg",children:[n.jsx(a(),{src:"/images/gitHub.png",alt:"GitHub",width:50,height:10,className:" w-auto h-auto  rounded-lg"}),"GitHub"]})})})]})]})]})})]})}},8295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>a});var n=r(9510),i=r(1402),s=r.n(i);r(5023);let a={title:"Julkar Naine Reedoy",images:"favicon.io"};function o({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:s().className,children:e})})}},1838:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(8570).createProxy)(String.raw`/mnt/c/Users/jreed/Code/Website/src/app/page.js#default`)},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(6621);let i=e=>[{type:"image/x-icon",sizes:"1024x1024",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,54,131],()=>r(6465));module.exports=n})();