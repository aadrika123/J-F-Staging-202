import{bd as g,b as v,o as w,s as k,g as S,r as b,j as e,t as T,w as U,G as A,c as R,d as $}from"./index-D3GDLqYi.js";import{T as D,a as I,b as i,c as t,d as B,e as l}from"./table-CDz1hvZ_.js";const G=R().shape({ulbId:$().required("ulbId is Required")});function M(){var u,x,h;g(),v({resolver:w(G)});const m=k({api:`${(u=S)==null?void 0:u.getAllUlbDirect}?page=1&limit=10000`,key:"getAllUlbDirect",options:{enabled:!0,refetchOnMount:!1}}),[d,p]=b.useState(""),[r,j]=b.useState({key:"ulbName",direction:"asc"}),n=[...((h=(x=m.data)==null?void 0:x.data)==null?void 0:h.filter(a=>a==null?void 0:a.ulbName.toLowerCase().includes(d.toLowerCase())))||[]].sort((a,s)=>{var o,c;return r.direction==="asc"?((o=a[r.key])==null?void 0:o.localeCompare(s[r.key]))||0:r.direction==="desc"&&((c=s[r.key])==null?void 0:c.localeCompare(a[r.key]))||0}),N=a=>{let s="asc";r.key===a&&r.direction==="asc"&&(s="desc"),j({key:a,direction:s})},f=a=>{const s=a,o="Complaint registration",c=`Dear Sir,
--Write your complaint here--`,C=encodeURIComponent(o),y=encodeURIComponent(c);window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${s}&su=${C}&body=${y}`,"_blank")};return e.jsxs("div",{className:"w-full md:w-8/12 p-2 mx-auto",children:[e.jsx("div",{className:"mt-4",children:e.jsx("h1",{className:"text-blue-800 font-bold text-2xl underline mb-2",children:"Ulb Wise Grievance via Email"})}),e.jsx(T,{children:e.jsxs(U,{children:[e.jsx("div",{className:"mb-4 py-2",children:e.jsx("input",{type:"text",placeholder:"Search by ULB Name...",className:"w-64 px-4 py-2 border rounded-md",value:d,onChange:a=>p(a.target.value)})}),e.jsxs(D,{children:[e.jsx(I,{children:e.jsxs(i,{children:[e.jsx(t,{className:"cursor-pointer",children:"Serial No."}),e.jsxs(t,{className:"cursor-pointer",onClick:()=>N("ulbName"),children:["Ulb Name ",r.key==="ulbName"&&(r.direction==="asc"?"↑":"↓")]}),e.jsx(t,{className:"cursor-pointer",children:"Mail"}),e.jsx(t,{children:"Action"})]})}),e.jsx(B,{children:(n==null?void 0:n.length)>0?n.map((a,s)=>e.jsxs(i,{children:[e.jsx(l,{children:s+1}),e.jsx(l,{children:a==null?void 0:a.ulbName}),e.jsx(l,{children:(a==null?void 0:a.email)||"N/A"}),e.jsx(l,{onClick:()=>f(a==null?void 0:a.email),children:e.jsx(A,{children:"Mail Now"})})]},a._id)):e.jsx(i,{children:e.jsx(l,{colSpan:4,className:"text-center",children:"No results found"})})})]})]})})]})}function L(){return e.jsx("div",{className:"",children:e.jsx(M,{})})}export{L as default};