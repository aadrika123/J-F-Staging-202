import{j as a,m as i,_ as n,r as l,B as aa}from"./index-Dkt__Xic.js";import{a as ea}from"./index-CS2NUbM0.js";import{C as sa,a as ra,c as ta,d as da}from"./card-DQa5Tc8i.js";import{S as O,a as la,T as na,b as ca,c as z,d as _,e as oa,f as g}from"./Spinner-Dl07qqYH.js";import{a as G,o as K,F as Q,S as $,B as W,c as X,d as V,b as P}from"./SelectField-DQlMFVw9.js";import"./input-pRXD90yN.js";import{g as Y}from"./services-KQnp_8oA.js";import{D as ia}from"./index-DA52_pEo.js";import{u as Z,a as A,b as ua}from"./useCustomQuery-NR9yHuLV.js";import{L as xa,c as pa}from"./index.es-Dp28LGRy.js";import{L as ha}from"./label-DJAQ3ybb.js";import{q as ma}from"./switch-EXoAnYEM.js";const ja=X().shape({ulb_id:V().required("ulb id is required"),service_id:V().required("service id is required")});function fa({open:I,setOpen:C,title:T,edit:b,setEdit:k,serviceList:M}){var S,o,y,N,d,w,p;const B=Z({}),u=G({defaultValues:{ulb_id:0,service_id:0},resolver:K(ja)}),v=async s=>{var h,m,j,f;try{const r=await B.mutateAsync({api:(h=i)==null?void 0:h.createServiceMapping,data:s});(m=r==null?void 0:r.data)!=null&&m.success?(n.success((j=r==null?void 0:r.data)==null?void 0:j.message),C(!1),k(!1),M.refetch()):n.error((f=r==null?void 0:r.data)==null?void 0:f.message)}catch(r){n.error(Y(r))}},x=A({api:`${(S=i)==null?void 0:S.getAllJuidcoUlbList}`,key:"getAllJuidcoUlbList",options:{enabled:!0}}),c=A({api:`${(o=i)==null?void 0:o.serviceList}`,key:"serviceList",options:{enabled:!0}});return a.jsx(ia,{open:I,setOpen:C,title:T,setEdit:k,edit:b,children:a.jsx(Q,{methods:u,onSubmit:u.handleSubmit(v),children:a.jsxs("div",{className:"grid grid-cols-1 gap-x-2 gap-y-4",children:[a.jsx("div",{children:a.jsx($,{name:"service_id",data:((d=(N=(y=c==null?void 0:c.data)==null?void 0:y.data)==null?void 0:N.data)==null?void 0:d.map(s=>({value:s==null?void 0:s.id,label:s==null?void 0:s.service_name})))??[]})}),a.jsx("div",{children:a.jsx($,{name:"ulb_id",data:((p=(w=x==null?void 0:x.data)==null?void 0:w.data)==null?void 0:p.map(s=>({value:s==null?void 0:s.id,label:s==null?void 0:s.ulb_name})))??[]})}),a.jsx(O,{}),a.jsx("div",{children:a.jsx(W,{isLoading:u.formState.isSubmitting,type:"submit",className:"h-11 w-full rounded-xl",children:"Submit"})})]})})})}const ga=X().shape({ulbId:P(),moduleId:P(),complaintRefNo:P()});function ba(){var p,s,h,m,j,f,r;const[I,C]=l.useState(1),T=Z({}),[b,k]=l.useState(10),[M,B]=l.useState(!1);l.useState(""),l.useState("");const[u,v]=l.useState(!1),[x]=l.useState(""),[c,S]=l.useState(!1),o=G({resolver:K(ga),defaultValues:{ulbId:"",moduleId:"",complaintTypeId:"",priorityId:"",targetTypeId:"",complaintSourceTypeId:"",fDate:"",toDate:"",complaintRefNo:""}}),y=async e=>{d==null||d.refetch()},N=ua({api:(p=i)==null?void 0:p.userManagementModuleList,key:"userManagementModuleList",options:{enabled:!0}}),d=A({api:`${(s=i)==null?void 0:s.getServiceMapping}`,key:"getServiceMapping",options:{enabled:!0}}),w=async e=>{var L,F,q,D,U,E,J,R,H;try{const t=await T.mutateAsync({api:`${(L=i)==null?void 0:L.updateServiceMapping}`,data:{id:e}});(F=t==null?void 0:t.data)!=null&&F.success?(d.refetch(),((D=(q=t==null?void 0:t.data)==null?void 0:q.data)==null?void 0:D.status)==1&&n.success((U=t.data)==null?void 0:U.message),((J=(E=t==null?void 0:t.data)==null?void 0:E.data)==null?void 0:J.status)==0&&n.error((R=t.data)==null?void 0:R.message)):n.error((H=t.data)==null?void 0:H.message)}catch(t){n.error(Y(t))}};return a.jsxs("main",{className:"grid items-start",children:[M&&a.jsx("div",{style:{zIndex:1001},className:"fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white",children:a.jsxs("div",{className:"flex flex-col items-center justify-center",children:[a.jsx(xa,{className:"w-24",animationData:pa,loop:!0}),a.jsx("div",{className:"font-semibold",children:"Permission Updated"})]})}),a.jsx(fa,{open:u,setOpen:v,title:c?"Edit Service":"Add Service",id:x,edit:c,setEdit:S,serviceList:d}),a.jsx("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:a.jsxs(sa,{children:[a.jsx(Q,{methods:o,onSubmit:o.handleSubmit(y),children:a.jsxs("div",{className:"grid grid-cols-4 gap-x-2 gap-y-4 bg-background px-10 pt-4",children:[a.jsxs("div",{children:[a.jsx(ha,{htmlFor:"moduleId",children:"Module name"}),a.jsx($,{className:"cursor-pointer bg-background",name:"moduleId",data:((m=(h=N.data)==null?void 0:h.data)==null?void 0:m.map(e=>({value:e==null?void 0:e.id,label:e==null?void 0:e.module_name})))??[]})]}),a.jsx("div",{className:"mt-6 flex justify-start",children:a.jsx(W,{variant:"secondary",isLoading:o.formState.isSubmitting,type:"submit",className:"float-right  w-auto px-10",children:"Search"})}),a.jsx("div",{className:"mt-6 flex justify-end",children:a.jsx(aa,{type:"button",className:"flex items-center gap-2",onClick:()=>v(!0),children:"Add New"})})]})}),a.jsx(ra,{className:"px-7",children:a.jsx(ta,{})}),a.jsx(da,{children:d.isLoading?a.jsx("div",{className:"flex h-32 items-center justify-center",children:a.jsx(la,{})}):a.jsxs(a.Fragment,{children:[a.jsxs(na,{children:[a.jsx(ca,{children:a.jsxs(z,{children:[a.jsx(_,{className:"",children:"#"}),a.jsx(_,{className:"",children:"Service"}),a.jsx(_,{className:"",children:"Module"}),a.jsx(_,{className:"",children:"ULB"})]})}),a.jsx(oa,{children:(r=(f=(j=d==null?void 0:d.data)==null?void 0:j.data)==null?void 0:f.data)==null?void 0:r.map((e,L)=>a.jsxs(z,{children:[a.jsx(g,{children:I*b-b+L+1}),a.jsx(g,{children:e==null?void 0:e.service_name}),a.jsx(g,{children:e==null?void 0:e.module_name}),a.jsx(g,{children:e==null?void 0:e.ulb_name}),a.jsx(g,{children:a.jsxs(ma,{checked:(e==null?void 0:e.status)==1,onChange:()=>w(e==null?void 0:e.id),className:`${e!=null&&e.status?"bg-primary":"bg-gray-200"} relative inline-flex items-center h-6 rounded-full w-11`,children:[a.jsx("span",{className:"sr-only",children:"Enable notifications"}),a.jsx("span",{className:`${e!=null&&e.status?"translate-x-6":"translate-x-1"} inline-block w-4 h-4 transform bg-white rounded-full`})]})})]},e==null?void 0:e.id))})]}),a.jsx(O,{className:"mb-2 mt-4"}),a.jsx("div",{className:"flex w-full justify-end"})]})})]})})]})}function Pa(){return a.jsx(ea,{title:"JUIDCO Service Mapping",subTitle:"Control all services here",children:a.jsx("div",{children:a.jsx(ba,{})})})}export{Pa as default};