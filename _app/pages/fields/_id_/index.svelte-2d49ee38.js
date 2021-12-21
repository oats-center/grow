import{S as A,i as C,s as E,D as F,E as S,a as D,d as m,b as d,f as $,H as G,Z as U,I as j,a1 as x,ac as B,ad as T,ae as H,j as _,k as I,e as O,m as v,n as L,c as R,o as k,x as w,u as b,v as y,a8 as P,O as V,af as W}from"../../../chunks/vendor-b3a12ac3.js";import{F as q}from"../../../chunks/Weather-186ca2b9.js";import"../../../chunks/Variety-ab1a983c.js";import{g as M}from"../../../chunks/navigation-51f4a605.js";import{H as J}from"../../../chunks/Header-5712565a.js";import{F as N,w as X,c as Z}from"../../../chunks/FieldCard-b4f784dc.js";import"../../../chunks/singletons-12a22614.js";import"../../../chunks/GeoJson-374c29c6.js";import"../../../chunks/preload-helper-ec9aa979.js";import"../../../chunks/CornIcon-26531608.js";function K(r){let e,s,a,c;return{c(){e=F("svg"),s=F("path"),this.h()},l(n){e=S(n,"svg",{viewBox:!0,preserveAspectRatio:!0,"xml:space":!0,class:!0});var i=D(e);s=S(i,"path",{d:!0}),D(s).forEach(m),i.forEach(m),this.h()},h(){d(s,"d","M13.26,49.997c0,2.006,0.204,3.958,0.513,5.874l-7.047,8.801l8.928,15.467l11.094-1.703  c3.039,2.485,6.497,4.466,10.236,5.884l4.085,10.493h17.867l4.083-10.494c3.738-1.418,7.196-3.397,10.235-5.883l11.094,1.703  l8.929-15.469l-7.048-8.798c0.306-1.917,0.513-3.871,0.513-5.876c-0.001-2.001-0.203-3.953-0.513-5.869l7.053-8.804l-8.934-15.469  L73.257,21.56c-3.039-2.487-6.497-4.465-10.232-5.886L58.936,5.181l-17.865,0l-4.087,10.494c-3.737,1.417-7.198,3.397-10.237,5.88  l-11.094-1.704L6.725,35.323l7.047,8.795C13.463,46.038,13.259,47.992,13.26,49.997z M49.999,31.202  c10.379,0,18.795,8.416,18.795,18.794c0.001,10.378-8.416,18.794-18.795,18.794s-18.792-8.416-18.792-18.794  C31.207,39.618,39.62,31.202,49.999,31.202z"),d(e,"viewBox","0 0 100 100"),d(e,"preserveAspectRatio","xMidYMin"),d(e,"xml:space","preserve"),d(e,"class",r[0])},m(n,i){$(n,e,i),G(e,s),a||(c=U(e,"click",r[1]),a=!0)},p(n,[i]){i&1&&d(e,"class",n[0])},i:j,o:j,d(n){n&&m(e),a=!1,c()}}}function Q(r,e,s){let{class:a=""}=e;function c(n){x.call(this,r,n)}return r.$$set=n=>{"class"in n&&s(0,a=n.class)},[a,c]}class ee extends A{constructor(e){super();C(this,e,Q,K,E,{class:0})}}function te(r){let e,s;return e=new ee({props:{slot:"right",class:"fill-current h-6 w-6"}}),e.$on("click",r[2]),{c(){_(e.$$.fragment)},l(a){v(e.$$.fragment,a)},m(a,c){k(e,a,c),s=!0},p:j,i(a){s||(w(e.$$.fragment,a),s=!0)},o(a){b(e.$$.fragment,a),s=!1},d(a){y(e,a)}}}function ae(r){let e,s,a,c,n,i,f;return e=new J({props:{title:`Field: ${r[0].name}`,backPath:"/fields",$$slots:{right:[te]},$$scope:{ctx:r}}}),a=new N({props:{field:r[0]}}),i=new B({props:{data:r[1],options:{title:"GDU Plots",data:{loading:!1},points:{radius:0,enabled:!1},axes:{bottom:{title:"Date",mapsTo:"date",scaleType:T.TIME,ticks:{rotation:H.ALWAYS}},left:{mapsTo:"value",title:"Accumlated GDU",scaleType:T.LINEAR}},timeScale:{addSpaceOnEdges:0},zoomBar:{top:{enabled:!0}},curve:"curveMonotoneX",height:"300px"}}}),{c(){_(e.$$.fragment),s=I(),_(a.$$.fragment),c=I(),n=O("div"),_(i.$$.fragment),this.h()},l(t){v(e.$$.fragment,t),s=L(t),v(a.$$.fragment,t),c=L(t),n=R(t,"DIV",{class:!0});var l=D(n);v(i.$$.fragment,l),l.forEach(m),this.h()},h(){d(n,"class","container p-6")},m(t,l){k(e,t,l),$(t,s,l),k(a,t,l),$(t,c,l),$(t,n,l),k(i,n,null),f=!0},p(t,[l]){const u={};l&1&&(u.title=`Field: ${t[0].name}`),l&1024&&(u.$$scope={dirty:l,ctx:t}),e.$set(u);const p={};l&1&&(p.field=t[0]),a.$set(p);const h={};l&2&&(h.data=t[1]),i.$set(h)},i(t){f||(w(e.$$.fragment,t),w(a.$$.fragment,t),w(i.$$.fragment,t),f=!0)},o(t){b(e.$$.fragment,t),b(a.$$.fragment,t),b(i.$$.fragment,t),f=!1},d(t){y(e,t),t&&m(s),y(a,t),t&&m(c),t&&m(n),y(i)}}}const pe=async({page:r})=>{const e=r.params.id||"",s=await q.get(e);return s?{props:{field:s}}:M("/fields")};function se(r,e,s){let a,{field:c}=e;function n(){M("/fields/"+c.id+"/edit")}const i=new Date("09/15/2021"),f=i.getFullYear(),t=P(i),l=Array.from(new Array(6),(o,g)=>f-g),u=X(c.center,l);V(r,u,o=>s(5,a=o));let p,h=[];return r.$$set=o=>{"field"in o&&s(0,c=o.field)},r.$$.update=()=>{if(r.$$.dirty&48){s(4,p=Z(a));let o=p.get(f);if(o){let g=0;s(1,h=o.slice(0,t+1).map((Y,z)=>(g+=Y,{group:"GDU",date:W(new Date(2021,0),z),value:g})))}}},[c,h,n,u,p,a]}class he extends A{constructor(e){super();C(this,e,se,ae,E,{field:0})}}export{he as default,pe as load};
