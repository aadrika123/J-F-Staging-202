import{bd as w,b as C,o as y,s as g,g as v,r as x,j as e,t as k,w as A,G as T,c as S,d as U}from"./index-DYms2NkH.js";import{T as W,a as D,b as c,c as n,d as R,e as l}from"./table-D7dfbh2Q.js";const $=S().shape({ulbId:U().required("ulbId is Required")});function q(){var d,i,u;w(),C({resolver:y($)});const b=g({api:`${(d=v)==null?void 0:d.getAllUlbDirect}?page=1&limit=10000`,key:"getAllUlbDirect",options:{enabled:!0,refetchOnMount:!1}}),[o,j]=x.useState(""),[s,m]=x.useState({key:"ulbName",direction:"asc"}),t=[...((u=(i=b.data)==null?void 0:i.data)==null?void 0:u.filter(a=>a==null?void 0:a.ulbName.toLowerCase().includes(o.toLowerCase())))||[]].sort((a,r)=>{var h,p;return s.direction==="asc"?((h=a[s.key])==null?void 0:h.localeCompare(r[s.key]))||0:s.direction==="desc"&&((p=r[s.key])==null?void 0:p.localeCompare(a[s.key]))||0}),N=a=>{let r="asc";s.key===a&&s.direction==="asc"&&(r="desc"),m({key:a,direction:r})},f=a=>{const r=`https://wa.me/${a}`;window.open(r,"_blank")};return e.jsxs("div",{className:"w-full md:w-8/12 p-2 mx-auto",children:[e.jsx("div",{className:"mt-4",children:e.jsx("h1",{className:"text-blue-800 font-bold text-2xl underline mb-2",children:"Ulb Wise Grievance via WhatsApp"})}),e.jsx(k,{children:e.jsxs(A,{children:[e.jsx("div",{className:"mb-4 flex justify-start py-2",children:e.jsx("input",{type:"text",placeholder:"Search by ULB Name...",className:"w-64 px-4 py-2 border rounded-md",value:o,onChange:a=>j(a.target.value)})}),e.jsxs(W,{children:[e.jsx(D,{children:e.jsxs(c,{children:[e.jsx(n,{className:"cursor-pointer",children:"Serial No."}),e.jsxs(n,{className:"cursor-pointer",onClick:()=>N("ulbName"),children:["Ulb Name ",s.key==="ulbName"&&(s.direction==="asc"?"↑":"↓")]}),e.jsx(n,{className:"cursor-pointer",children:"WhatsApp No."}),e.jsx(n,{children:"Action"})]})}),e.jsx(R,{children:(t==null?void 0:t.length)>0?t.map((a,r)=>e.jsxs(c,{children:[e.jsx(l,{children:r+1}),e.jsx(l,{children:a==null?void 0:a.ulbName}),e.jsx(l,{children:(a==null?void 0:a.whatsappnumber)||"N/A"}),e.jsx(l,{children:e.jsx(T,{onClick:()=>f(a==null?void 0:a.whatsappnumber),children:"WhatsApp Now"})})]},a._id)):e.jsx(c,{children:e.jsx(l,{colSpan:4,className:"text-center",children:"No results found"})})})]})]})})]})}function I(){return e.jsx("div",{className:"",children:e.jsx(q,{})})}export{I as default};