import{j as e,c as F,P as D,b as C}from"./index-xq9jTTfh.js";import{h as P,d as b}from"./router-WshRxXk2.js";import{r}from"./tailwind-Ucrx0-S6.js";import{u as w,F as A,T as g,S as _}from"./TextArea-1v4UYNvG.js";import{b as R}from"./useCustomQuery-9edUl8Ze.js";import{S as T}from"./index-r6jrOlpE.js";import{F as M}from"./index-ydtxq-TG.js";import"./reactQuery-2daanlHr.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-YpSsR79r.js";import"./reactLazyLoadImageComponent-2lnvQYCj.js";import"./reactIcons-UnuJhE_7.js";import"./headlessui-oHdMYZDI.js";function O({data:l}){const n=P();return e.jsx(e.Fragment,{children:l==null?void 0:l.map((t,i)=>e.jsx(r.Card,{className:"mt-4",children:e.jsxs(r.CardBody,{children:[e.jsxs("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:["Sno : ",i+1]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Application No"}),e.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Challan No"}),e.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Name"}),e.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Date:"}),e.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Amount:"}),e.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Type:"}),e.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Payment Mode:"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.application_no}),e.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.challan_no}),e.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.full_name}),e.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.challan_date}),e.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.amount}),e.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.challan_type}),e.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.payment_mode})]})]}),e.jsx("div",{className:"border-t border-gray-200 my-4"}),e.jsx("div",{className:"flex justify-between mt-4",children:e.jsx("button",{className:"text-xs w-full bg-blue-800 text-white py-1.5 rounded-md",onClick:()=>{n("/fines-app/today-challan-details/".concat(t.id))},children:"View Details"})})]})},t.id))})}function K(){var o,m,c,d,x,p,h;const[l,n]=b.useState(1),[t,i]=b.useState(10),a=w({enableReinitialize:!0,initialValues:{fromDate:new Date().toISOString().split("T")[0],uptoDate:new Date().toISOString().split("T")[0],type:"mobile",paymentMode:""},onSubmit:async N=>{y()}}),s=R({api:F.api_collection_report,config:{fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,paymentMode:a.values.paymentMode,type:a.values.type,page:l,perPage:t},value:[l,t],options:{enabled:!0}}),y=()=>{s.refetch()},f=()=>{var u,j;return(j=(u=s.data)==null?void 0:u.data)==null?void 0:j.data.reduce((v,S)=>parseFloat(v)+parseFloat(S.amount),0)};return e.jsx(D,{title:"Collection Report",children:e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"",children:e.jsx("h1",{className:"text-base font-semibold text-blue-gray-500",children:"Collection Report"})}),e.jsx(r.Card,{className:"mt-2",children:e.jsx(r.CardBody,{children:e.jsxs(A,{formik:a,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsx(g,{type:"date",name:"fromDate",label:"From Date",formik:a})}),e.jsx("div",{children:e.jsx(g,{type:"date",name:"uptoDate",label:"Upto Date",formik:a})}),e.jsx("div",{className:"col-span-2",children:e.jsxs(_,{name:"paymentMode",formik:a,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded-lg text-xs",children:"Search"})})]})})}),e.jsx("div",{className:"border-t border-gray-200 my-4"}),s.isFetching?e.jsx("div",{className:"flex justify-center items-center h-80",children:e.jsx(C,{})}):e.jsx(e.Fragment,{children:((c=(m=(o=s.data)==null?void 0:o.data)==null?void 0:m.data)==null?void 0:c.length)>0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(T,{page:l,setPage:n,perPage:t,setPerPage:i,noOfPage:(x=(d=s==null?void 0:s.data)==null?void 0:d.data)==null?void 0:x.last_page}),e.jsxs("p",{className:"text-green-500 font-bold",children:["Total: ","₹"," ",f()]})]}),e.jsx(O,{data:((h=(p=s.data)==null?void 0:p.data)==null?void 0:h.data)||[]})]}):e.jsxs("div",{className:"flex flex-col justify-center items-center h-[300px]",children:[e.jsx(M,{className:"text-2xl text-blue-gray-500"}),e.jsx("div",{className:"mt-2 w-52 text-center",children:e.jsx("p",{className:"text-blue-gray-500 text-xs font-semibold ",children:"No Data Found !"})})]})})]})})}export{K as default};