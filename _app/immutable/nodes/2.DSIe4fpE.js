import{s as w}from"../chunks/scheduler.tNaupYda.js";import{S,i as k,k as b,s as u,e as _,l as C,f as $,c as h,a as A,m as M,d as g,n as c,o as q,g as H,h as p,p as L,q as P,r as T}from"../chunks/index.QViIPcpX.js";import{c as D}from"../chunks/clsx.B-dksMZM.js";import{M as E}from"../chunks/MetaTags.G__YhRv8.js";import{P as I}from"../chunks/PostList.6uDCV6o6.js";function V(l){let a,i,e,n,x="최근 포스트",f,r,d,o,v=`<p class="${D("mx-auto my-3 grayscale","text-center text-base font-bold")}">🔽 모든 포스트 살펴보기</p>`,m;return a=new E({}),r=new I({props:{posts:l[0].posts}}),{c(){b(a.$$.fragment),i=u(),e=_("div"),n=_("h1"),n.textContent=x,f=u(),b(r.$$.fragment),d=u(),o=_("a"),o.innerHTML=v,this.h()},l(t){C(a.$$.fragment,t),i=$(t),e=h(t,"DIV",{id:!0});var s=A(e);n=h(s,"H1",{class:!0,"data-svelte-h":!0}),M(n)!=="svelte-1xudcs3"&&(n.textContent=x),f=$(s),C(r.$$.fragment,s),d=$(s),o=h(s,"A",{href:!0,class:!0,"data-svelte-h":!0}),M(o)!=="svelte-1q0200o"&&(o.innerHTML=v),s.forEach(g),this.h()},h(){c(n,"class","my-4 border-b-2 border-mono-200 pb-4 text-2xl font-bold"),c(o,"href","/posts/"),c(o,"class","my-2 rounded-xl p-2 ring-2 ring-secondary"),c(e,"id","recent-posts")},m(t,s){q(a,t,s),H(t,i,s),H(t,e,s),p(e,n),p(e,f),q(r,e,null),p(e,d),p(e,o),m=!0},p(t,[s]){const y={};s&1&&(y.posts=t[0].posts),r.$set(y)},i(t){m||(L(a.$$.fragment,t),L(r.$$.fragment,t),m=!0)},o(t){P(a.$$.fragment,t),P(r.$$.fragment,t),m=!1},d(t){t&&(g(i),g(e)),T(a,t),T(r)}}}function j(l,a,i){let{data:e}=a;return l.$$set=n=>{"data"in n&&i(0,e=n.data)},[e]}class K extends S{constructor(a){super(),k(this,a,j,V,w,{data:0})}}export{K as component};