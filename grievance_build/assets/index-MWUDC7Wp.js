import{r as o,s as C,g as T,b as H,o as L,j as a,F as U,a0 as I,J as Y,R as M,B as V,t as D,v as E,H as q,w as G,S as J,x as z,a3 as n,L as K,G as O,y as Q,c as W,d as X}from"./index-CofEzg_5.js";import{P as Z}from"./index-BmDnkvLo.js";import{T as aa,a as ea,b as F,c as l,d as sa,e as r}from"./table-uOXl51WU.js";import{P as la}from"./index-Bb-XZWum.js";const ra=W().shape({ulbId:X()});function da(){var i,h,x,p,u,j,g,m,b,N,f,v,P,y;const[c,R]=o.useState(1),[d,$]=o.useState(10),[A]=o.useState(""),s=C({api:`${T.getAllComplaints}?page=${c}&limit=${d}&q=${A}`,key:"searchAllComplaints",value:[c,d],options:{enabled:!0}}),k=C({api:`${T.getAllUlb}?page=1&limit=1000`,key:"geAllulb",value:[c,d],options:{enabled:!0}}),t=H({resolver:L(ra),defaultValues:{ulbId:"",moduleId:"",complaintTypeId:"",priorityId:"",targetTypeId:"",complaintSourceTypeId:""}}),B=async()=>{};return a.jsx("main",{className:"grid items-start",children:a.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:[a.jsx("div",{className:"flex w-full justify-between gap-2",children:a.jsx(U,{methods:t,onSubmit:t.handleSubmit(B),className:"w-full",children:a.jsxs("div",{className:"grid grid-cols-4 gap-x-2 gap-y-4 bg-background p-10 w-full",children:[a.jsxs("div",{children:[a.jsx(I,{htmlFor:"ulbId",children:"ULB"}),a.jsx(Y,{className:"bg-background cursor-pointer",name:"ulbId",data:((x=(h=(i=k.data)==null?void 0:i.data)==null?void 0:h.docs)==null?void 0:x.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.ulbName})))??[]})]}),a.jsxs("div",{children:[a.jsx(I,{children:"Text"}),a.jsx(M,{name:"name",inputValidation:["CapitalFirstLetter","removeDoubleSpace","string"],placeholder:""})]}),a.jsx("div",{className:"mt-6",children:a.jsx(V,{isLoading:t.formState.isSubmitting,type:"submit",className:" w-auto  px-10 float-right",children:"Search"})})]})})}),a.jsxs(D,{children:[a.jsx(E,{className:"px-7",children:a.jsxs(q,{children:["Users List (",(u=(p=s.data)==null?void 0:p.data)==null?void 0:u.totalDocs,")"]})}),a.jsx(G,{children:s.isLoading?a.jsx("div",{className:"flex h-32 items-center justify-center",children:a.jsx(J,{})}):a.jsxs(a.Fragment,{children:[a.jsxs(aa,{children:[a.jsx(ea,{children:a.jsxs(F,{children:[a.jsx(l,{className:"",children:"#"}),a.jsx(l,{className:"",children:"Complaint No."}),a.jsx(l,{className:"",children:"Title"}),a.jsx(l,{className:"",children:"Description"}),a.jsx(l,{className:"",children:"ULB"}),a.jsx(l,{className:"",children:"Module"}),a.jsx(l,{className:"",children:"Created at"}),a.jsx(l,{className:"",children:"Status"}),a.jsx(l,{children:"Action"})]})}),a.jsx(sa,{children:(m=(g=(j=s==null?void 0:s.data)==null?void 0:j.data)==null?void 0:g.docs)==null?void 0:m.map((e,_)=>{var S,w;return a.jsxs(F,{children:[a.jsx(r,{children:c*d-d+_+1}),a.jsx(r,{children:e.complaintRefNo}),a.jsx(r,{children:e.complaintTitle}),a.jsx(r,{children:e.complaintDescription}),a.jsx(r,{children:(S=e.ulb)==null?void 0:S.ulbName}),a.jsx(r,{children:(w=e==null?void 0:e.module)==null?void 0:w.moduleName}),a.jsx(r,{children:z(e.createdAt).format("DD-MM-YYYY")}),a.jsxs(r,{children:[(e==null?void 0:e.wf_status)===3&&a.jsx(n,{className:"bg-amber-400 text-white",children:"Pending(re-opened)"}),(e==null?void 0:e.wf_status)===2&&a.jsx(n,{variant:"destructive",children:"Rejected"}),(e==null?void 0:e.wf_status)===1&&a.jsx(n,{variant:"success",children:"Resolved"}),(e==null?void 0:e.wf_status)===0&&a.jsx(n,{variant:"secondary",children:"Pending"})]}),a.jsx(r,{children:a.jsx(K,{to:`/grievance/dashboard/management-complaint-details?complaintRefNo=${e==null?void 0:e.complaintRefNo}
                         &complaintId=${e==null?void 0:e._id}`,children:a.jsx(O,{className:"bg-primary",onClick:()=>{},children:"View"})})})]},e._id)})})]}),a.jsx(Q,{className:"mb-2 mt-4"}),a.jsx("div",{className:"flex w-full justify-end",children:a.jsx(la,{page:c,perPage:d,totalPage:(N=(b=s==null?void 0:s.data)==null?void 0:b.data)==null?void 0:N.totalDocs,hasNextPage:(v=(f=s==null?void 0:s.data)==null?void 0:f.data)==null?void 0:v.hasNextPage,hasPrevPage:(y=(P=s==null?void 0:s.data)==null?void 0:P.data)==null?void 0:y.hasPrevPage,setPage:R,setPerPage:$})})]})})]})]})})}function ia(){return a.jsx(Z,{title:"Search Complaint",subTitle:"",children:a.jsx("div",{className:"py-0",children:a.jsx(da,{})})})}export{ia as default};