import{r as y,bV as C,bv as W,a9 as j,a8 as M,aa as R,a0 as f,ad as i,ag as P,bo as U,W as $,j as A,ah as D,ai as E}from"./index-DwHujmir.js";function N(t){return Object.keys(t).length===0}function O(t=null){const a=y.useContext(C);return!a||N(a)?t:a}const _=W();function G(t=_){return O(t)}function d(t){var a,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(a=0;a<n;a++)t[a]&&(r=d(t[a]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function H(){for(var t,a,r=0,o="",n=arguments.length;r<n;r++)(t=arguments[r])&&(a=d(t))&&(o&&(o+=" "),o+=a);return o}function L(t){return j("MuiTypography",t)}M("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const V=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],k=t=>{const{align:a,gutterBottom:r,noWrap:o,paragraph:n,variant:e,classes:p}=t,s={root:["root",e,t.align!=="inherit"&&`align${f(a)}`,r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return E(s,L,p)},z=R("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${f(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(({theme:t,ownerState:a})=>i({margin:0},a.variant==="inherit"&&{font:"inherit"},a.variant!=="inherit"&&t.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},J={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},q=t=>J[t]||t,I=y.forwardRef(function(a,r){const o=P({props:a,name:"MuiTypography"}),n=q(o.color),e=U(i({},o,{color:n})),{align:p="inherit",className:s,component:g,gutterBottom:x=!1,noWrap:v=!1,paragraph:l=!1,variant:h="body1",variantMapping:c=m}=e,b=$(e,V),u=i({},e,{align:p,color:n,className:s,component:g,gutterBottom:x,noWrap:v,paragraph:l,variant:h,variantMapping:c}),T=g||(l?"p":c[h]||m[h])||"span",B=k(u);return A.jsx(z,i({as:T,ref:r,ownerState:u,className:D(B.root,s)},b))});export{I as T,H as c,G as u};