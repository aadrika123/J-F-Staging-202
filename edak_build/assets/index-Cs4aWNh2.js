import{j as e,C as a,H as l,L as i,J as c,k as r}from"./index-C5MO9rrP.js";import{P as o}from"./index-DUmdmIIx.js";import{C as m}from"./circle-check-big-GDtIN0nv.js";import"./badge-D_zcal2d.js";import"./index-CM4W6OqZ.js";function d(){const s=new URLSearchParams(r().search),t=s.get("complaintRefNo"),n=s.get("complaintId");return e.jsxs("div",{className:"flex flex-col space-y-4 b",children:[e.jsxs("div",{className:"flex space-x-4 justify-center items-center",children:[e.jsx("div",{children:e.jsx(m,{className:"inline text-green-500 text-5xl font-bold"})}),e.jsxs("div",{children:[e.jsx(a,{className:"text-3xl",children:"Complaint Submitted Successfully!"})," "]})]}),e.jsxs("div",{className:"flex space-x-4 justify-center items-center",children:[e.jsx("div",{className:"font-semibold",children:"Comaplint No : "}),e.jsxs("div",{children:[e.jsx(a,{className:"text-2xl opacity-60",children:t})," "]})]}),e.jsxs("div",{className:"text-center md:w-1/3 mx-auto text-md",children:[e.jsx("div",{className:" opacity-60",children:"Please keep this complaint no. for future reference. You can track your complaint status with this complaint no."})," "]}),e.jsx(l,{className:"md:w-1/3 mx-auto"}),e.jsxs("div",{className:"text-center md:w-1/2 mx-auto text-md space-x-4",children:[e.jsx(i,{to:`/grievance/dashboard/management-complaint-details?complaintRefNo=${t}&complaintId=${n}`,children:e.jsx(c,{children:"View Complaint Details"})}),e.jsx(i,{to:"/",children:e.jsx(c,{children:"Register Complaint"})})," "]})]})}function N(){return e.jsx(o,{title:"",subTitle:"",children:e.jsx("div",{className:"bg-white p-12",children:e.jsx(d,{})})})}export{N as default};