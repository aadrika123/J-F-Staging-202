import{j as s}from"./mui-105b4636.js";import{r as o,u as x,f as h}from"./router-894402c5.js";import{h as n}from"./moment-4682f801.js";import{N as f}from"./NoDataFoundStyle1-08c23f2e.js";import{P as g}from"./PetRegAPIList-4f2d2d38.js";import{A as N}from"./index-2fc866b5.js";import"./react-40db4358.js";import"./axios-67d8a945.js";import"./reactIcons-58c2a0d8.js";import"./redux-b8f144fa.js";import"./i18next-e2c66b9b.js";const R=()=>{const[a,l]=o.useState(!1),[t,r]=o.useState(!1),{api_petRegistrationsPreviewList:d,header:c}=g(),p=x(),{registration_id:i}=h(),m=()=>{r(!0),N.post(d,{registrationId:i},c).then(e=>{r(!1),e.data.status&&l(e.data.data)}).catch(e=>{r(!1)})};return o.useEffect(()=>{m()},[]),t?"Loading..":a!=null&&a.length?s.jsx(s.Fragment,{children:s.jsxs("div",{className:"w-full ml-2 md:ml-0 mb-10",children:[s.jsxs("p",{className:"font-manrope md:my-4 ",children:["Total Renewal List : ",s.jsx("span",{className:"font-semibold",children:a==null?void 0:a.length})]}),s.jsx("div",{className:"hidden md:block bg-gray-200 text-gray-700 py-3 font-semibold rounded-md",children:s.jsxs("div",{className:"grid grid-cols-12 items-center",children:[s.jsx("p",{className:"px-2 col-span-3 whitespace-nowrap",children:"Registration No"}),s.jsx("p",{className:"px-2 col-span-2",children:"Applicant Name"}),s.jsx("p",{className:"px-1 col-span-2",children:"Type"}),s.jsx("p",{className:"px-2 col-span-2 whitespace-nowrap",children:"From Date"}),s.jsx("p",{className:"px-2 col-span-2 whitespace-nowrap",children:"To Date"}),s.jsx("p",{className:"px-2 col-span-1",children:"Action"})]})}),s.jsx("div",{className:"overflow-y-auto h-screen mb-40 md:mr-0 mr-5 ",children:a&&(a==null?void 0:a.map((e,j)=>s.jsx("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white cursor-pointer",children:s.jsxs("div",{className:" flex md:grid grid-cols-12 items-center justify-between border-b border-gray-100",children:[s.jsx("p",{className:"px-2 py-2 break-all font-manrope font-semibold col-span-3 text-xs md:text-base",children:e==null?void 0:e.application_no}),s.jsx("p",{className:"hidden md:block px-2 py-2 break-all col-span-2",children:e==null?void 0:e.applicant_name}),s.jsx("p",{className:"px-1 py-1 break-words  flex col-span-2 text-xs md:text-base",children:" Renewal"}),s.jsx("p",{className:"hidden md:block  py-2 col-span-2",children:n(e==null?void 0:e.validFrom,"YYYY-MM-DD").format("DD-MMM-yy")}),s.jsx("p",{className:"hidden md:block  py-2 col-span-2",children:n(e==null?void 0:e.validUpto,"YYYY-MM-DD").format("DD-MMM-yy")}),s.jsx("p",{className:"mr-1 px-2 md:px-3 py-1 col-span-1 rounded text-xs md:text-sm text-white bg-indigo-500 hover:bg-indigo-600 text-center",onClick:()=>p(`/viewPreviewApplication/${e==null?void 0:e.id}`),children:"View"})]})})))})]})}):s.jsx(f,{message:"No Data Found."})};export{R as default};