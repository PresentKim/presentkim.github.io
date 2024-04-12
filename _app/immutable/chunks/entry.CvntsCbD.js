import{n as q,A as it,r as ut,s as ct,i as dt,t as ft}from"./scheduler.tNaupYda.js";new URL("sveltekit-internal://");function pt(e,r){return e==="/"||r==="ignore"?e:r==="never"?e.endsWith("/")?e.slice(0,-1):e:r==="always"&&!e.endsWith("/")?e+"/":e}function ht(e){return e.split("%25").map(decodeURI).join("%25")}function mt(e){for(const r in e)e[r]=decodeURIComponent(e[r]);return e}function ce({href:e}){return e.split("#")[0]}const vt=["href","pathname","search","toString","toJSON"];function gt(e,r,t){const n=new URL(e);Object.defineProperty(n,"searchParams",{value:new Proxy(n.searchParams,{get(o,a){if(a==="get"||a==="getAll"||a==="has")return s=>(t(s),o[a](s));r();const l=Reflect.get(o,a);return typeof l=="function"?l.bind(o):l}}),enumerable:!0,configurable:!0});for(const o of vt)Object.defineProperty(n,o,{get(){return r(),e[o]},enumerable:!0,configurable:!0});return n}const yt="/__data.json",wt=".html__data.json";function bt(e){return e.endsWith(".html")?e.replace(/\.html$/,wt):e.replace(/\/$/,"")+yt}function kt(...e){let r=5381;for(const t of e)if(typeof t=="string"){let n=t.length;for(;n;)r=r*33^t.charCodeAt(--n)}else if(ArrayBuffer.isView(t)){const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let o=n.length;for(;o;)r=r*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}function Et(e){const r=atob(e),t=new Uint8Array(r.length);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t.buffer}const Le=window.fetch;window.fetch=(e,r)=>((e instanceof Request?e.method:r?.method||"GET")!=="GET"&&M.delete(de(e)),Le(e,r));const M=new Map;function St(e,r){const t=de(e,r),n=document.querySelector(t);if(n!=null&&n.textContent){let{body:o,...a}=JSON.parse(n.textContent);const l=n.getAttribute("data-ttl");return l&&M.set(t,{body:o,init:a,ttl:1e3*Number(l)}),n.getAttribute("data-b64")!==null&&(o=Et(o)),Promise.resolve(new Response(o,a))}return window.fetch(e,r)}function At(e,r,t){if(M.size>0){const n=de(e,t),o=M.get(n);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(t?.cache))return new Response(o.body,o.init);M.delete(n)}}return window.fetch(r,t)}function de(e,r){let t=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(r!=null&&r.headers||r!=null&&r.body){const n=[];r.headers&&n.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&n.push(r.body),t+=`[data-hash="${kt(...n)}"]`}return t}const _t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Rt(e){const r=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Lt(e).map(t=>{const n=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(n)return r.push({name:n[1],matcher:n[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(o)return r.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!t)return;const a=t.split(/\[(.+?)\](?!\])/);return"/"+a.map((l,s)=>{if(s%2){if(l.startsWith("x+"))return fe(String.fromCharCode(parseInt(l.slice(2),16)));if(l.startsWith("u+"))return fe(String.fromCharCode(...l.slice(2).split("-").map(h=>parseInt(h,16))));const i=_t.exec(l),[,u,d,f,p]=i;return r.push({name:f,matcher:p,optional:!!u,rest:!!d,chained:d?s===1&&a[0]==="":!1}),d?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return fe(l)}).join("")}).join("")}/?$`),params:r}}function xt(e){return!/^\([^)]+\)$/.test(e)}function Lt(e){return e.slice(1).split("/").filter(xt)}function Pt(e,r,t){const n={},o=e.slice(1),a=o.filter(s=>s!==void 0);let l=0;for(let s=0;s<r.length;s+=1){const i=r[s];let u=o[s-l];if(i.chained&&i.rest&&l&&(u=o.slice(s-l,s+1).filter(d=>d).join("/"),l=0),u===void 0){i.rest&&(n[i.name]="");continue}if(!i.matcher||t[i.matcher](u)){n[i.name]=u;const d=r[s+1],f=o[s+1];d&&!d.rest&&d.optional&&f&&i.chained&&(l=0),!d&&!f&&Object.keys(n).length===a.length&&(l=0);continue}if(i.optional&&i.chained){l++;continue}return}if(!l)return n}function fe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut({nodes:e,server_loads:r,dictionary:t,matchers:n}){const o=new Set(r);return Object.entries(t).map(([s,[i,u,d]])=>{const{pattern:f,params:p}=Rt(s),h={id:s,exec:v=>{const c=f.exec(v);if(c)return Pt(c,p,n)},errors:[1,...d||[]].map(v=>e[v]),layouts:[0,...u||[]].map(l),leaf:a(i)};return h.errors.length=h.layouts.length=Math.max(h.errors.length,h.layouts.length),h});function a(s){const i=s<0;return i&&(s=~s),[i,e[s]]}function l(s){return s===void 0?s:[o.has(s),e[s]]}}function Pe(e,r=JSON.parse){try{return r(sessionStorage[e])}catch{}}function Ue(e,r,t=JSON.stringify){const n=t(r);try{sessionStorage[e]=n}catch{}}const I=[];function jt(e,r){return{subscribe:F(e,r).subscribe}}function F(e,r=q){let t;const n=new Set;function o(s){if(ct(e,s)&&(e=s,t)){const i=!I.length;for(const u of n)u[1](),I.push(u,e);if(i){for(let u=0;u<I.length;u+=2)I[u][0](I[u+1]);I.length=0}}}function a(s){o(s(e))}function l(s,i=q){const u=[s,i];return n.add(u),n.size===1&&(t=r(o,a)||q),s(e),()=>{n.delete(u),n.size===0&&t&&(t(),t=null)}}return{set:o,update:a,subscribe:l}}function Ot(e,r,t){const n=!Array.isArray(e),o=n?[e]:e;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=r.length<2;return jt(t,(l,s)=>{let i=!1;const u=[];let d=0,f=q;const p=()=>{if(d)return;f();const v=r(n?u[0]:u,l,s);a?l(v):f=dt(v)?v:q},h=o.map((v,c)=>it(v,g=>{u[c]=g,d&=~(1<<c),i&&p()},()=>{d|=1<<c}));return i=!0,p(),function(){ut(h),f(),i=!1}})}var je;const L=((je=globalThis.__sveltekit_gk40c0)==null?void 0:je.base)??"";var Oe;const $t=((Oe=globalThis.__sveltekit_gk40c0)==null?void 0:Oe.assets)??L,It="1712882845038",$e="sveltekit:snapshot",Ie="sveltekit:scroll",Te="sveltekit:states",Tt="sveltekit:pageurl",T="sveltekit:history",J="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function Ce(e){if(e instanceof URL)return e;let r=document.baseURI;if(!r){const t=document.getElementsByTagName("base");r=t.length?t[0].href:document.URL}return new URL(e,r)}function pe(){return{x:pageXOffset,y:pageYOffset}}function C(e,r){return e.getAttribute(`data-sveltekit-${r}`)}const Ne={...X,"":X.hover};function De(e){let r=e.assignedSlot??e.parentNode;return r?.nodeType===11&&(r=r.host),r}function Ve(e,r){for(;e&&e!==r;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=De(e)}}function he(e,r){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const n=e instanceof SVGAElement?e.target.baseVal:e.target,o=!t||!!n||Q(t,r)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),a=t?.origin===W&&e.hasAttribute("download");return{url:t,external:o,target:n,download:a}}function Y(e){let r=null,t=null,n=null,o=null,a=null,l=null,s=e;for(;s&&s!==document.documentElement;)n===null&&(n=C(s,"preload-code")),o===null&&(o=C(s,"preload-data")),r===null&&(r=C(s,"keepfocus")),t===null&&(t=C(s,"noscroll")),a===null&&(a=C(s,"reload")),l===null&&(l=C(s,"replacestate")),s=De(s);function i(u){switch(u){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ne[n??"off"],preload_data:Ne[o??"off"],keepfocus:i(r),noscroll:i(t),reload:i(a),replace_state:i(l)}}function Be(e){const r=F(e);let t=!0;function n(){t=!0,r.update(l=>l)}function o(l){t=!1,r.set(l)}function a(l){let s;return r.subscribe(i=>{(s===void 0||t&&i!==s)&&l(s=i)})}return{notify:n,set:o,subscribe:a}}function Ct(){const{set:e,subscribe:r}=F(!1);let t;async function n(){clearTimeout(t);try{const o=await fetch(`${$t}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const a=(await o.json()).version!==It;return a&&(e(!0),clearTimeout(t)),a}catch{return!1}}return{subscribe:r,check:n}}function Q(e,r){return e.origin!==W||!e.pathname.startsWith(r)}const Nt=-1,Dt=-2,Vt=-3,Bt=-4,qt=-5,Mt=-6;function Ft(e,r){if(typeof e=="number")return o(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,n=Array(t.length);function o(a,l=!1){if(a===Nt)return;if(a===Vt)return NaN;if(a===Bt)return 1/0;if(a===qt)return-1/0;if(a===Mt)return-0;if(l)throw new Error("Invalid input");if(a in n)return n[a];const s=t[a];if(!s||typeof s!="object")n[a]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const i=s[0],u=r?.[i];if(u)return n[a]=u(o(s[1]));switch(i){case"Date":n[a]=new Date(s[1]);break;case"Set":const d=new Set;n[a]=d;for(let h=1;h<s.length;h+=1)d.add(o(s[h]));break;case"Map":const f=new Map;n[a]=f;for(let h=1;h<s.length;h+=2)f.set(o(s[h]),o(s[h+1]));break;case"RegExp":n[a]=new RegExp(s[1],s[2]);break;case"Object":n[a]=Object(s[1]);break;case"BigInt":n[a]=BigInt(s[1]);break;case"null":const p=Object.create(null);n[a]=p;for(let h=1;h<s.length;h+=2)p[s[h]]=o(s[h+1]);break;default:throw new Error(`Unknown type ${i}`)}}else{const i=new Array(s.length);n[a]=i;for(let u=0;u<s.length;u+=1){const d=s[u];d!==Dt&&(i[u]=o(d))}}else{const i={};n[a]=i;for(const u in s){const d=s[u];i[u]=o(d)}}return n[a]}return o(0)}const qe=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...qe];const Jt=new Set([...qe]);[...Jt];function Wt(e){return e.filter(r=>r!=null)}class Z{constructor(r,t){this.status=r,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(r,t){this.status=r,this.location=t}}class me extends Error{constructor(r,t,n){super(n),this.status=r,this.text=t}}const Gt="x-sveltekit-invalidated",zt="x-sveltekit-trailing-slash";function ee(e){return e instanceof Z||e instanceof me?e.status:500}function Ht(e){return e instanceof me?e.text:"Internal Error"}const $=Pe(Ie)??{},G=Pe($e)??{},j={url:Be({}),page:Be({}),navigating:F(null),updated:Ct()};function ve(e){$[e]=pe()}function Kt(e,r){let t=e+1;for(;$[t];)delete $[t],t+=1;for(t=r+1;G[t];)delete G[t],t+=1}function N(e){return location.href=e.href,new Promise(()=>{})}function Fe(){}let te,ge,re,O,ye,D;const Je=[],ne=[];let U=null;const We=[],Xt=[];let V=[],y={branch:[],error:null,url:null},we=!1,oe=!1,Ge=!0,z=!1,H=!1,ze=!1,be=!1,ke,S,R,x,ae;const K=new Set;async function Yt(e,r,t){var n,o;document.URL!==location.href&&(location.href=location.href),D=e,te=Ut(e),O=document.documentElement,ye=r,ge=e.nodes[0],re=e.nodes[1],ge(),re(),S=(n=history.state)==null?void 0:n[T],R=(o=history.state)==null?void 0:o[J],S||(S=R=Date.now(),history.replaceState({...history.state,[T]:S,[J]:R},""));const a=$[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await ar(ye,t):nr(location.href,{replaceState:!0}),or()}function Qt(){Je.length=0,be=!1}function He(e){ne.some(r=>r?.snapshot)&&(G[e]=ne.map(r=>{var t;return(t=r?.snapshot)==null?void 0:t.capture()}))}function Ke(e){var r;(r=G[e])==null||r.forEach((t,n)=>{var o,a;(a=(o=ne[n])==null?void 0:o.snapshot)==null||a.restore(t)})}function Xe(){ve(S),Ue(Ie,$),He(R),Ue($e,G)}async function Ye(e,r,t,n){return ie({type:"goto",url:Ce(e),keepfocus:r.keepFocus,noscroll:r.noScroll,replace_state:r.replaceState,state:r.state,redirect_count:t,nav_token:n,accept:()=>{r.invalidateAll&&(be=!0)}})}async function Zt(e){if(e.id!==U?.id){const r={};K.add(r),U={id:e.id,token:r,promise:tt({...e,preload:r}).then(t=>(K.delete(r),t.type==="loaded"&&t.state.error&&(U=null),t))}}return U.promise}async function Ee(e){const r=te.find(t=>t.exec(rt(e)));r&&await Promise.all([...r.layouts,r.leaf].map(t=>t?.[1]()))}function Qe(e,r,t){var n;y=e.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),x=e.props.page,ke=new D.root({target:r,props:{...e.props,stores:j,components:ne},hydrate:t}),Ke(R);const a={from:null,to:{params:y.params,route:{id:((n=y.route)==null?void 0:n.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};V.forEach(l=>l(a)),oe=!0}async function se({url:e,params:r,branch:t,status:n,error:o,route:a,form:l}){let s="never";if(L&&(e.pathname===L||e.pathname===L+"/"))s="always";else for(const p of t)p?.slash!==void 0&&(s=p.slash);e.pathname=pt(e.pathname,s),e.search=e.search;const i={type:"loaded",state:{url:e,params:r,branch:t,error:o,route:a},props:{constructors:Wt(t).map(p=>p.node.component),page:x}};l!==void 0&&(i.props.form=l);let u={},d=!x,f=0;for(let p=0;p<Math.max(t.length,y.branch.length);p+=1){const h=t[p],v=y.branch[p];h?.data!==v?.data&&(d=!0),h&&(u={...u,...h.data},d&&(i.props[`data_${f}`]=u),f+=1)}return(!y.url||e.href!==y.url.href||y.error!==o||l!==void 0&&l!==x.form||d)&&(i.props.page={error:o,params:r,route:{id:a?.id??null},state:{},status:n,url:new URL(e),form:l??null,data:d?u:x.data}),i}async function Se({loader:e,parent:r,url:t,params:n,route:o,server_data_node:a}){var l,s,i;let u=null,d=!0;const f={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},p=await e();if((l=p.universal)!=null&&l.load){let h=function(...c){for(const g of c){const{href:w}=new URL(g,t);f.dependencies.add(w)}};const v={route:new Proxy(o,{get:(c,g)=>(d&&(f.route=!0),c[g])}),params:new Proxy(n,{get:(c,g)=>(d&&f.params.add(g),c[g])}),data:a?.data??null,url:gt(t,()=>{d&&(f.url=!0)},c=>{d&&f.search_params.add(c)}),async fetch(c,g){let w;c instanceof Request?(w=c.url,g={body:c.method==="GET"||c.method==="HEAD"?void 0:await c.blob(),cache:c.cache,credentials:c.credentials,headers:c.headers,integrity:c.integrity,keepalive:c.keepalive,method:c.method,mode:c.mode,redirect:c.redirect,referrer:c.referrer,referrerPolicy:c.referrerPolicy,signal:c.signal,...g}):w=c;const _=new URL(w,t);return d&&h(_.href),_.origin===t.origin&&(w=_.href.slice(t.origin.length)),oe?At(w,_.href,g):St(w,g)},setHeaders:()=>{},depends:h,parent(){return d&&(f.parent=!0),r()},untrack(c){d=!1;try{return c()}finally{d=!0}}};u=await p.universal.load.call(null,v)??null}return{node:p,loader:e,server:a,universal:(s=p.universal)!=null&&s.load?{type:"data",data:u,uses:f}:null,data:u??a?.data??null,slash:((i=p.universal)==null?void 0:i.trailingSlash)??a?.slash}}function Ze(e,r,t,n,o,a){if(be)return!0;if(!o)return!1;if(o.parent&&e||o.route&&r||o.url&&t)return!0;for(const l of o.search_params)if(n.has(l))return!0;for(const l of o.params)if(a[l]!==y.params[l])return!0;for(const l of o.dependencies)if(Je.some(s=>s(new URL(l))))return!0;return!1}function Ae(e,r){return e?.type==="data"?e:e?.type==="skip"?r??null:null}function er(e,r){if(!e)return new Set(r.searchParams.keys());const t=new Set([...e.searchParams.keys(),...r.searchParams.keys()]);for(const n of t){const o=e.searchParams.getAll(n),a=r.searchParams.getAll(n);o.every(l=>a.includes(l))&&a.every(l=>o.includes(l))&&t.delete(n)}return t}function et({error:e,url:r,route:t,params:n}){return{type:"loaded",state:{error:e,url:r,route:t,params:n,branch:[]},props:{page:x,constructors:[]}}}async function tt({id:e,invalidating:r,url:t,params:n,route:o,preload:a}){if(U?.id===e)return K.delete(U.token),U.promise;const{errors:l,layouts:s,leaf:i}=o,u=[...s,i];l.forEach(m=>m?.().catch(()=>{})),u.forEach(m=>m?.[1]().catch(()=>{}));let d=null;const f=y.url?e!==y.url.pathname+y.url.search:!1,p=y.route?o.id!==y.route.id:!1,h=er(y.url,t);let v=!1;const c=u.map((m,k)=>{var P;const E=y.branch[k],A=!!(m!=null&&m[0])&&(E?.loader!==m[1]||Ze(v,p,f,h,(P=E.server)==null?void 0:P.uses,n));return A&&(v=!0),A});if(c.some(Boolean)){try{d=await at(t,c)}catch(m){const k=await B(m,{url:t,params:n,route:{id:e}});return K.has(a)?et({error:k,url:t,params:n,route:o}):le({status:ee(m),error:k,url:t,route:o})}if(d.type==="redirect")return d}const g=d?.nodes;let w=!1;const _=u.map(async(m,k)=>{var P;if(!m)return;const E=y.branch[k],A=g?.[k];if((!A||A.type==="skip")&&m[1]===E?.loader&&!Ze(w,p,f,h,(P=E.universal)==null?void 0:P.uses,n))return E;if(w=!0,A?.type==="error")throw A;return Se({loader:m[1],url:t,params:n,route:o,parent:async()=>{var Re;const xe={};for(let ue=0;ue<k;ue+=1)Object.assign(xe,(Re=await _[ue])==null?void 0:Re.data);return xe},server_data_node:Ae(A===void 0&&m[0]?{type:"skip"}:A??null,m[0]?E?.server:void 0)})});for(const m of _)m.catch(()=>{});const b=[];for(let m=0;m<u.length;m+=1)if(u[m])try{b.push(await _[m])}catch(k){if(k instanceof Me)return{type:"redirect",location:k.location};if(K.has(a))return et({error:await B(k,{params:n,url:t,route:{id:o.id}}),url:t,params:n,route:o});let P=ee(k),E;if(g!=null&&g.includes(k))P=k.status??P,E=k.error;else if(k instanceof Z)E=k.body;else{if(await j.updated.check())return await N(t);E=await B(k,{params:n,url:t,route:{id:o.id}})}const A=await tr(m,b,l);return A?await se({url:t,params:n,branch:b.slice(0,A.idx).concat(A.node),status:P,error:E,route:o}):await ot(t,{id:o.id},E,P)}else b.push(void 0);return await se({url:t,params:n,branch:b,status:200,error:null,route:o,form:r?void 0:null})}async function tr(e,r,t){for(;e--;)if(t[e]){let n=e;for(;!r[n];)n-=1;try{return{idx:n+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:e,error:r,url:t,route:n}){const o={};let a=null;if(D.server_loads[0]===0)try{const i=await at(t,[!0]);if(i.type!=="data"||i.nodes[0]&&i.nodes[0].type!=="data")throw 0;a=i.nodes[0]??null}catch{(t.origin!==W||t.pathname!==location.pathname||we)&&await N(t)}const l=await Se({loader:ge,url:t,params:o,route:n,parent:()=>Promise.resolve({}),server_data_node:Ae(a)}),s={node:await re(),loader:re,universal:null,server:null,data:null};return await se({url:t,params:o,branch:[l,s],status:e,error:r,route:null})}function _e(e,r){if(!e||Q(e,L))return;let t;try{t=D.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const n=rt(t);for(const o of te){const a=o.exec(n);if(a)return{id:e.pathname+e.search,invalidating:r,route:o,params:mt(a),url:e}}}function rt(e){return ht(e.slice(L.length)||"/")}function nt({url:e,type:r,intent:t,delta:n}){let o=!1;const a=lt(y,t,e,r);n!==void 0&&(a.navigation.delta=n);const l={...a.navigation,cancel:()=>{o=!0,a.reject(new Error("navigation cancelled"))}};return z||We.forEach(s=>s(l)),o?null:a}async function ie({type:e,url:r,popped:t,keepfocus:n,noscroll:o,replace_state:a,state:l={},redirect_count:s=0,nav_token:i={},accept:u=Fe,block:d=Fe}){const f=_e(r,!1),p=nt({url:r,type:e,delta:t?.delta,intent:f});if(!p){d();return}const h=S,v=R;u(),z=!0,oe&&j.navigating.set(p.navigation),ae=i;let c=f&&await tt(f);if(!c){if(Q(r,L))return await N(r);c=await ot(r,{id:null},await B(new me(404,"Not Found",`Not found: ${r.pathname}`),{url:r,params:{},route:{id:null}}),404)}if(r=f?.url||r,ae!==i)return p.reject(new Error("navigation aborted")),!1;if(c.type==="redirect")if(s>=20)c=await le({status:500,error:await B(new Error("Redirect loop"),{url:r,params:{},route:{id:null}}),url:r,route:{id:null}});else return Ye(new URL(c.location,r).href,{},s+1,i),!1;else c.props.page.status>=400&&await j.updated.check()&&await N(r);if(Qt(),ve(h),He(v),c.props.page.url.pathname!==r.pathname&&(r.pathname=c.props.page.url.pathname),l=t?t.state:l,!t){const b=a?0:1,m={[T]:S+=b,[J]:R+=b,[Te]:l};(a?history.replaceState:history.pushState).call(history,m,"",r),a||Kt(S,R)}if(U=null,c.props.page.state=l,oe){y=c.state,c.props.page&&(c.props.page.url=r);const b=(await Promise.all(Xt.map(m=>m(p.navigation)))).filter(m=>typeof m=="function");if(b.length>0){let m=function(){V=V.filter(k=>!b.includes(k))};b.push(m),V.push(...b)}ke.$set(c.props),ze=!0}else Qe(c,ye,!1);const{activeElement:g}=document;await ft();const w=t?t.scroll:o?pe():null;if(Ge){const b=r.hash&&document.getElementById(decodeURIComponent(r.hash.slice(1)));w?scrollTo(w.x,w.y):b?b.scrollIntoView():scrollTo(0,0)}const _=document.activeElement!==g&&document.activeElement!==document.body;!n&&!_&&sr(),Ge=!0,c.props.page&&(x=c.props.page),z=!1,e==="popstate"&&Ke(R),p.fulfil(void 0),V.forEach(b=>b(p.navigation)),j.navigating.set(null)}async function ot(e,r,t,n){return e.origin===W&&e.pathname===location.pathname&&!we?await le({status:n,error:t,url:e,route:r}):await N(e)}function rr(){let e;O.addEventListener("mousemove",a=>{const l=a.target;clearTimeout(e),e=setTimeout(()=>{n(l,2)},20)});function r(a){n(a.composedPath()[0],1)}O.addEventListener("mousedown",r),O.addEventListener("touchstart",r,{passive:!0});const t=new IntersectionObserver(a=>{for(const l of a)l.isIntersecting&&(Ee(l.target.href),t.unobserve(l.target))},{threshold:0});function n(a,l){const s=Ve(a,O);if(!s)return;const{url:i,external:u,download:d}=he(s,L);if(u||d)return;const f=Y(s);if(!f.reload)if(l<=f.preload_data){const p=_e(i,!1);p&&Zt(p)}else l<=f.preload_code&&Ee(i.pathname)}function o(){t.disconnect();for(const a of O.querySelectorAll("a")){const{url:l,external:s,download:i}=he(a,L);if(s||i)continue;const u=Y(a);u.reload||(u.preload_code===X.viewport&&t.observe(a),u.preload_code===X.eager&&Ee(l.pathname))}}V.push(o),o()}function B(e,r){if(e instanceof Z)return e.body;const t=ee(e),n=Ht(e);return D.hooks.handleError({error:e,event:r,status:t,message:n})??{message:n}}function nr(e,r={}){return e=Ce(e),e.origin!==W?Promise.reject(new Error("goto: invalid URL")):Ye(e,r,0)}function or(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Xe(),!z){const o=lt(y,void 0,null,"leave"),a={...o.navigation,cancel:()=>{n=!0,o.reject(new Error("navigation cancelled"))}};We.forEach(l=>l(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Xe()}),(e=navigator.connection)!=null&&e.saveData||rr(),O.addEventListener("click",t=>{var n;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const o=Ve(t.composedPath()[0],O);if(!o)return;const{url:a,external:l,target:s,download:i}=he(o,L);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const u=Y(o);if(!(o instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(l||u.reload){nt({url:a,type:"link"})?z=!0:t.preventDefault();return}const[d,f]=a.href.split("#");if(f!==void 0&&d===ce(location)){const[,p]=y.url.href.split("#");if(p===f){t.preventDefault(),f===""||f==="top"&&o.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(n=o.ownerDocument.getElementById(f))==null||n.scrollIntoView();return}if(H=!0,ve(S),r(a),!u.replace_state)return;H=!1}t.preventDefault(),ie({type:"link",url:a,keepfocus:u.keepfocus,noscroll:u.noscroll,replace_state:u.replace_state??a.href===location.href})}),O.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),o=t.submitter;if((o?.formMethod||n.method)!=="get")return;const a=new URL(o?.hasAttribute("formaction")&&o?.formAction||n.action);if(Q(a,L))return;const l=t.target,s=Y(l);if(s.reload)return;t.preventDefault(),t.stopPropagation();const i=new FormData(l),u=o?.getAttribute("name");u&&i.append(u,o?.getAttribute("value")??""),a.search=new URLSearchParams(i).toString(),ie({type:"form",url:a,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??a.href===location.href})}),addEventListener("popstate",async t=>{var n;if((n=t.state)!=null&&n[T]){const o=t.state[T];if(ae={},o===S)return;const a=$[o],l=t.state[Te]??{},s=new URL(t.state[Tt]??location.href),i=t.state[J],u=ce(location)===ce(y.url);if(i===R&&(ze||u)){r(s),$[S]=pe(),a&&scrollTo(a.x,a.y),l!==x.state&&(x={...x,state:l},ke.$set({page:x})),S=o;return}const d=o-S;await ie({type:"popstate",url:s,popped:{state:l,scroll:a,delta:d},accept:()=>{S=o,R=i},block:()=>{history.go(-d)},nav_token:ae})}else if(!H){const o=new URL(location.href);r(o)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[T]:++S,[J]:R},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&j.navigating.set(null)});function r(t){y.url=t,j.page.set({...x,url:t}),j.page.notify()}}async function ar(e,{status:r=200,error:t,node_ids:n,params:o,route:a,data:l,form:s}){we=!0;const i=new URL(location.href);({params:o={},route:a={id:null}}=_e(i,!1)||{});let u;try{const d=n.map(async(h,v)=>{const c=l[v];return c!=null&&c.uses&&(c.uses=st(c.uses)),Se({loader:D.nodes[h],url:i,params:o,route:a,parent:async()=>{const g={};for(let w=0;w<v;w+=1)Object.assign(g,(await d[w]).data);return g},server_data_node:Ae(c)})}),f=await Promise.all(d),p=te.find(({id:h})=>h===a.id);if(p){const h=p.layouts;for(let v=0;v<h.length;v++)h[v]||f.splice(v,0,void 0)}u=await se({url:i,params:o,branch:f,status:r,error:t,form:s,route:p??null})}catch(d){if(d instanceof Me){await N(new URL(d.location,location.href));return}u=await le({status:ee(d),error:await B(d,{url:i,params:o,route:a}),url:i,route:a})}u.props.page&&(u.props.page.state={}),Qe(u,e,!0)}async function at(e,r){var t;const n=new URL(e);n.pathname=bt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(zt,"1"),n.searchParams.append(Gt,r.map(a=>a?"1":"0").join(""));const o=await Le(n.href);if(!o.ok){let a;throw(t=o.headers.get("content-type"))!=null&&t.includes("application/json")?a=await o.json():o.status===404?a="Not Found":o.status===500&&(a="Internal Error"),new Z(o.status,a)}return new Promise(async a=>{var l;const s=new Map,i=o.body.getReader(),u=new TextDecoder;function d(p){return Ft(p,{Promise:h=>new Promise((v,c)=>{s.set(h,{fulfil:v,reject:c})})})}let f="";for(;;){const{done:p,value:h}=await i.read();if(p&&!f)break;for(f+=!h&&f?`
`:u.decode(h,{stream:!0});;){const v=f.indexOf(`
`);if(v===-1)break;const c=JSON.parse(f.slice(0,v));if(f=f.slice(v+1),c.type==="redirect")return a(c);if(c.type==="data")(l=c.nodes)==null||l.forEach(g=>{g?.type==="data"&&(g.uses=st(g.uses),g.data=d(g.data))}),a(c);else if(c.type==="chunk"){const{id:g,data:w,error:_}=c,b=s.get(g);s.delete(g),_?b.reject(d(_)):b.fulfil(d(w))}}}})}function st(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set(e?.search_params??[])}}function sr(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const r=document.body,t=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),t!==null?r.setAttribute("tabindex",t):r.removeAttribute("tabindex");const n=getSelection();if(n&&n.type!=="None"){const o=[];for(let a=0;a<n.rangeCount;a+=1)o.push(n.getRangeAt(a));setTimeout(()=>{if(n.rangeCount===o.length){for(let a=0;a<n.rangeCount;a+=1){const l=o[a],s=n.getRangeAt(a);if(l.commonAncestorContainer!==s.commonAncestorContainer||l.startContainer!==s.startContainer||l.endContainer!==s.endContainer||l.startOffset!==s.startOffset||l.endOffset!==s.endOffset)return}n.removeAllRanges()}})}}}function lt(e,r,t,n){var o,a;let l,s;const i=new Promise((u,d)=>{l=u,s=d});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((o=e.route)==null?void 0:o.id)??null},url:e.url},to:t&&{params:r?.params??null,route:{id:((a=r?.route)==null?void 0:a.id)??null},url:t},willUnload:!r,type:n,complete:i},fulfil:l,reject:s}}export{Yt as a,Ot as d,j as s,F as w};
