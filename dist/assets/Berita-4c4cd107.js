import{N as p,F as m}from"./FooterComponent-b25190bd.js";import{H as u}from"./HeaderComponent-8d93eef5.js";import{_ as f,i as h,o as r,c as o,a,F as d,r as B,f as s,w as b,t as v,p as g,b as y,d as x,e as k}from"./index-fd209f16.js";import{a as w}from"./axios-21b846bc.js";import"./logo-42795f0e.js";const F={props:{dataBerita:{type:Array,default:()=>[]}}},S=e=>(g("data-v-4a97e195"),e=e(),y(),e),$={class:"container",id:"berita"},C=S(()=>a("div",{class:"row"},[a("h2",{class:"berita-title fw-bold text-center mt-5 mb-4"},"Berita")],-1)),I={class:"row"},N={class:"card"},H=["src"],L={class:"card-body"},V={class:"card-title"};function j(e,i,t,l,D,E){const _=h("router-link");return r(),o("div",$,[C,a("div",I,[(r(!0),o(d,null,B(t.dataBerita,(c,n)=>(r(),o("div",{class:"col-md-3",key:n},[a("div",N,[s(_,{to:{name:"detail-berita",params:{id:n}}},{default:b(()=>[a("img",{src:`https://backend-sblf.lumirainternational.com/storage/berita/${c.image}`,class:"card-img-top",alt:"Card image cap"},null,8,H),a("div",L,[a("h5",V,v(c.judul),1)])]),_:2},1032,["to"])])]))),128))])])}const A=f(F,[["render",j],["__scopeId","data-v-4a97e195"]]),K={__name:"Berita",setup(e){const i=x([]);return k(async()=>{try{const t=await w.get("https://backend-sblf.lumirainternational.com/api/list-profile");i.value=t.data.dataBerita||[]}catch(t){console.error(t)}}),(t,l)=>(r(),o(d,null,[s(p),s(u,{page:"berita",text:"Berita Strategic Business Leaders Forum"}),s(A,{dataBerita:i.value},null,8,["dataBerita"]),s(m)],64))}};export{K as default};