import{c as te}from"./createLucideIcon-GsbXppMf.js";import{R as p,r as i,j as s,B as _,n as ne,o as O,P as h,p as x,q as C,s as ae,S as oe,t as re,v as se,F as ie,D as le,w as ce,x as de,y as N,z as ue,e as y}from"./index-CN_yBJeq.js";/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var M={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},I=p.createContext&&p.createContext(M),fe=["attr","size","title"];function ge(e,t){if(e==null)return{};var n=pe(e,t),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function pe(e,t){if(e==null)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},D.apply(this,arguments)}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?S(Object(n),!0).forEach(function(a){me(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function me(e,t,n){return t=ve(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(e){var t=xe(e,"string");return typeof t=="symbol"?t:t+""}function xe(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function A(e){return e&&e.map((t,n)=>p.createElement(t.tag,b({key:n},t.attr),A(t.child)))}function T(e){return t=>p.createElement(he,D({attr:b({},e.attr)},t),A(e.child))}function he(e){var t=n=>{var{attr:a,size:r,title:o}=e,l=ge(e,fe),c=r||n.size||"1em",d;return n.className&&(d=n.className),e.className&&(d=(d?d+" ":"")+e.className),p.createElement("svg",D({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,l,{className:d,style:b(b({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&p.createElement("title",null,o),e.children)};return I!==void 0?p.createElement(I.Consumer,null,n=>t(n)):t(M)}function ke(e){return T({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(e)}function Be(e){return T({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}const ye=({currentPage:e,totalItems:t,itemsPerPage:n,onPageChange:a,onItemsPerPageChange:r})=>{const o=Math.ceil(t/n),[l,c]=i.useState(e.toString()),d=u=>{const v=u.target.value;/^\d*$/.test(v)&&(parseInt(v,10)<=o||v==="")&&c(v)},g=()=>{const u=parseInt(l,10);u>=1&&u<=o?a(u):c(e.toString())};return i.useEffect(()=>{c(e.toString())},[e]),s.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white border rounded-md shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("label",{htmlFor:"items-per-page",className:"text-sm font-medium",children:"Items per page:"}),s.jsx("select",{id:"items-per-page",className:"border px-2 py-1 rounded-md",value:n,onChange:u=>r(Number(u.target.value)),children:[5,10,15,20].map(u=>s.jsx("option",{value:u,children:u},u))})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(_,{onClick:()=>a(e-1),disabled:e<=1,variant:"default",size:"default",children:"Prev"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("input",{type:"text",value:l,onChange:d,onBlur:g,className:"w-16 px-2 py-1 border rounded-md",maxLength:o.toString().length}),s.jsxs("span",{children:["/ ",o]})]}),s.jsx(_,{onClick:()=>a(e+1),disabled:e>=o,variant:"default",size:"default",children:"Next"})]})]})},Ge=ye;var w="Dialog",[F,He]=ne(w),[De,f]=F(w),z=e=>{const{__scopeDialog:t,children:n,open:a,defaultOpen:r,onOpenChange:o,modal:l=!0}=e,c=i.useRef(null),d=i.useRef(null),[g=!1,u]=de({prop:a,defaultProp:r,onChange:o});return s.jsx(De,{scope:t,triggerRef:c,contentRef:d,contentId:N(),titleId:N(),descriptionId:N(),open:g,onOpenChange:u,onOpenToggle:i.useCallback(()=>u(v=>!v),[u]),modal:l,children:n})};z.displayName=w;var W="DialogTrigger",be=i.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,r=f(W,n),o=O(t,r.triggerRef);return s.jsx(h.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":R(r.open),...a,ref:o,onClick:x(e.onClick,r.onOpenToggle)})});be.displayName=W;var P="DialogPortal",[je,$]=F(P,{forceMount:void 0}),L=e=>{const{__scopeDialog:t,forceMount:n,children:a,container:r}=e,o=f(P,t);return s.jsx(je,{scope:t,forceMount:n,children:i.Children.map(a,l=>s.jsx(C,{present:n||o.open,children:s.jsx(ue,{asChild:!0,container:r,children:l})}))})};L.displayName=P;var j="DialogOverlay",k=i.forwardRef((e,t)=>{const n=$(j,e.__scopeDialog),{forceMount:a=n.forceMount,...r}=e,o=f(j,e.__scopeDialog);return o.modal?s.jsx(C,{present:a||o.open,children:s.jsx(Ne,{...r,ref:t})}):null});k.displayName=j;var Ne=i.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,r=f(j,n);return s.jsx(ae,{as:oe,allowPinchZoom:!0,shards:[r.contentRef],children:s.jsx(h.div,{"data-state":R(r.open),...a,ref:t,style:{pointerEvents:"auto",...a.style}})})}),m="DialogContent",B=i.forwardRef((e,t)=>{const n=$(m,e.__scopeDialog),{forceMount:a=n.forceMount,...r}=e,o=f(m,e.__scopeDialog);return s.jsx(C,{present:a||o.open,children:o.modal?s.jsx(Oe,{...r,ref:t}):s.jsx(Ce,{...r,ref:t})})});B.displayName=m;var Oe=i.forwardRef((e,t)=>{const n=f(m,e.__scopeDialog),a=i.useRef(null),r=O(t,n.contentRef,a);return i.useEffect(()=>{const o=a.current;if(o)return re(o)},[]),s.jsx(G,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:x(e.onCloseAutoFocus,o=>{var l;o.preventDefault(),(l=n.triggerRef.current)==null||l.focus()}),onPointerDownOutside:x(e.onPointerDownOutside,o=>{const l=o.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&o.preventDefault()}),onFocusOutside:x(e.onFocusOutside,o=>o.preventDefault())})}),Ce=i.forwardRef((e,t)=>{const n=f(m,e.__scopeDialog),a=i.useRef(!1),r=i.useRef(!1);return s.jsx(G,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var l,c;(l=e.onCloseAutoFocus)==null||l.call(e,o),o.defaultPrevented||(a.current||(c=n.triggerRef.current)==null||c.focus(),o.preventDefault()),a.current=!1,r.current=!1},onInteractOutside:o=>{var d,g;(d=e.onInteractOutside)==null||d.call(e,o),o.defaultPrevented||(a.current=!0,o.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const l=o.target;((g=n.triggerRef.current)==null?void 0:g.contains(l))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&r.current&&o.preventDefault()}})}),G=i.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:a,onOpenAutoFocus:r,onCloseAutoFocus:o,...l}=e,c=f(m,n),d=i.useRef(null),g=O(t,d);return se(),s.jsxs(s.Fragment,{children:[s.jsx(ie,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:r,onUnmountAutoFocus:o,children:s.jsx(le,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":R(c.open),...l,ref:g,onDismiss:()=>c.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(Pe,{titleId:c.titleId}),s.jsx(Re,{contentRef:d,descriptionId:c.descriptionId})]})]})}),E="DialogTitle",H=i.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,r=f(E,n);return s.jsx(h.h2,{id:r.titleId,...a,ref:t})});H.displayName=E;var V="DialogDescription",q=i.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,r=f(V,n);return s.jsx(h.p,{id:r.descriptionId,...a,ref:t})});q.displayName=V;var K="DialogClose",we=i.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,r=f(K,n);return s.jsx(h.button,{type:"button",...a,ref:t,onClick:x(e.onClick,()=>r.onOpenChange(!1))})});we.displayName=K;function R(e){return e?"open":"closed"}var X="DialogTitleWarning",[Ve,U]=ce(X,{contentName:m,titleName:E,docsSlug:"dialog"}),Pe=({titleId:e})=>{const t=U(X),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Ee="DialogDescriptionWarning",Re=({contentRef:e,descriptionId:t})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${U(Ee).contentName}}.`;return i.useEffect(()=>{var o;const r=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");t&&r&&(document.getElementById(t)||console.warn(a))},[a,e,t]),null},_e=z,Ie=L,Y=k,Z=B,J=H,Q=q;const qe=_e,Se=Ie,ee=i.forwardRef(({className:e,...t},n)=>s.jsx(Y,{ref:n,className:y("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));ee.displayName=Y.displayName;const Me=i.forwardRef(({className:e,children:t,...n},a)=>s.jsxs(Se,{children:[s.jsx(ee,{}),s.jsx(Z,{ref:a,className:y("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:t})]}));Me.displayName=Z.displayName;const Ae=({className:e,...t})=>s.jsx("div",{className:y("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});Ae.displayName="DialogHeader";const Te=i.forwardRef(({className:e,...t},n)=>s.jsx(J,{ref:n,className:y("text-lg font-semibold leading-none tracking-tight",e),...t}));Te.displayName=J.displayName;const Fe=i.forwardRef(({className:e,...t},n)=>s.jsx(Q,{ref:n,className:y("text-sm text-muted-foreground",e),...t}));Fe.displayName=Q.displayName;export{qe as D,ke as F,Ge as P,Le as X,Be as a,Ae as b,Me as c};