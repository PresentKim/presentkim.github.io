import{w as r,d}from"./entry.CvntsCbD.js";import{p as m}from"./stores.C1yDDIK5.js";function a(e,n){document.documentElement.dataset[e]=n}const s=r(!1);s.subscribe(e=>a("sidebar",e?"visible":"invisible")),m.subscribe(()=>s.set(!1));const o="color-scheme",t=r(document.documentElement.dataset.theme==="dark");t.subscribe(e=>{e===window.matchMedia("(prefers-color-scheme: dark)").matches?localStorage.removeItem(o):localStorage.setItem(o,c(e)),a("theme",c(e))}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>t.update(()=>e.matches));function c(e){return e===!0||e==="dark"?"dark":"light"}const i=d(t,e=>e?"transparent_dark":"noborder_light");export{a,t as d,i as g,s};