import{s as v}from"../chunks/scheduler.tNaupYda.js";import{S as C,i as y,k as u,s as $,e as P,l as _,f as d,c as q,m as w,n as M,o as g,g as f,p as x,q as h,d as l,r as b}from"../chunks/index.QViIPcpX.js";import{M as S}from"../chunks/MetaTags.G__YhRv8.js";import{P as j}from"../chunks/PostList.6uDCV6o6.js";function k(m){let e,o,s,r="작성중인 글 목록",i,a,p;return e=new S({props:{pageName:"작성중인 글 목록",description:"작성중인 글 목록"}}),a=new j({props:{posts:m[0].posts}}),{c(){u(e.$$.fragment),o=$(),s=P("h1"),s.textContent=r,i=$(),u(a.$$.fragment),this.h()},l(t){_(e.$$.fragment,t),o=d(t),s=q(t,"H1",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-1puj93u"&&(s.textContent=r),i=d(t),_(a.$$.fragment,t),this.h()},h(){M(s,"class","my-4 border-b-2 border-mono-200 pb-4 text-2xl font-bold")},m(t,n){g(e,t,n),f(t,o,n),f(t,s,n),f(t,i,n),g(a,t,n),p=!0},p(t,[n]){const c={};n&1&&(c.posts=t[0].posts),a.$set(c)},i(t){p||(x(e.$$.fragment,t),x(a.$$.fragment,t),p=!0)},o(t){h(e.$$.fragment,t),h(a.$$.fragment,t),p=!1},d(t){t&&(l(o),l(s),l(i)),b(e,t),b(a,t)}}}function H(m,e,o){let{data:s}=e;return m.$$set=r=>{"data"in r&&o(0,s=r.data)},[s]}class A extends C{constructor(e){super(),y(this,e,H,k,v,{data:0})}}export{A as component};
