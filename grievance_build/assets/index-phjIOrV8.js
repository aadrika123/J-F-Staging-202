import{u as O,z as D,s as J,g as m,b as Q,o as W,r as l,j as a,D as X,F as Z,R as aa,y as K,B as ea,c as sa,d as ta,_ as n,G as U,t as ra,v as ca,H as na,w as oa,S as la,x as da}from"./index-CKyUB0K3.js";import{P as ia}from"./index-DXjDntMw.js";import{T as ua,a as ha,b as V,c as u,d as xa,e as h}from"./table-C4mkKaE8.js";import{g as pa}from"./services-KQnp_8oA.js";import{P as ga}from"./index-J-o1ZV0e.js";import{S as ja}from"./index-CEsvaksg.js";import{q as fa}from"./switch-fsZ-opsq.js";const ma=sa().shape({source:ta().required("Complaint source name is required")});function Sa({open:x,setOpen:S,title:P,id:d,edit:o,setEdit:p,refetch:v}){const w=O({}),g=D({}),{data:i,isFetching:$}=J({api:`${m.getComplaintSourceById}/${d}`,key:"getComplaintSourceById",options:{enabled:o}}),c=Q({defaultValues:{source:""},resolver:W(ma)}),C=async s=>{var b,y,j,f;try{if(o&&s){const t=await g.mutateAsync({api:`${m.updateComplaintSource}/${d}`,data:s});(b=t.data)!=null&&b.success?n.success((y=t==null?void 0:t.data)==null?void 0:y.message):n.error("Complaint Source not updated successfully")}else{const t=await w.mutateAsync({api:m.createComplaintSource,data:s});(j=t.data)!=null&&j.success?n.success((f=t==null?void 0:t.data)==null?void 0:f.message):n.error("Complaint Source not created successfully"),c.reset({source:""})}S(!1),p(!1),v()}catch(t){console.log(t)}};return l.useEffect(()=>{o&&i?c.reset({source:i.data.source}):c.reset({source:""})},[o,i]),a.jsx(X,{open:x,setOpen:S,title:P,setEdit:p,edit:o,isLoading:$,children:a.jsx(Z,{methods:c,onSubmit:c.handleSubmit(C),children:a.jsxs("div",{className:"grid grid-cols-1 gap-x-2 gap-y-4",children:[a.jsx("div",{children:a.jsx(aa,{name:"source",placeholder:"Enter Complaint Source "})}),a.jsx(K,{}),a.jsx("div",{children:a.jsx(ea,{isLoading:c.formState.isSubmitting,type:"submit",className:"h-11 w-full rounded-xl",children:"Submit"})})]})})})}function Ca(){var j,f,t,A,E,F,T,B,M,k,H;const[x,S]=l.useState(1),P=D({}),[d,o]=l.useState(5),[p,v]=l.useState(""),[w,g]=l.useState(!1),[i,$]=l.useState(""),[c,C]=l.useState(!1),s=J({api:`${m.getAllComplaintSource}?page=${x}&limit=${d}&q=${p}`,key:"getAllComplaintSource",value:[x,d],options:{enabled:!0}}),b=e=>{C(!0),g(!0),$(e)},y=async e=>{var N,L,_,q,I,R,Y,z,G;try{const r=await P.mutateAsync({api:`${(N=m)==null?void 0:N.updateComplaintSourceStatus}/${e}`,data:{id:i}});(L=r==null?void 0:r.data)!=null&&L.success?(s.refetch(),((q=(_=r==null?void 0:r.data)==null?void 0:_.data)==null?void 0:q.status)==1&&n.success((I=r.data)==null?void 0:I.message),((Y=(R=r==null?void 0:r.data)==null?void 0:R.data)==null?void 0:Y.status)==0&&n.error((z=r.data)==null?void 0:z.message)):n.error((G=r.data)==null?void 0:G.message)}catch(r){n.error(pa(r))}};return a.jsxs("main",{className:"grid items-start",children:[a.jsx(Sa,{open:w,setOpen:g,title:c?"Edit Complaint Source":"Add Complaint Source",id:i,edit:c,setEdit:C,refetch:s.refetch}),a.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:[a.jsxs("div",{className:"flex w-full justify-between gap-2",children:[a.jsx("div",{children:a.jsx(ja,{search:p,setSearch:v,refetch:s.refetch,isFetching:s.isLoading})}),a.jsx("div",{children:a.jsx(U,{className:"flex items-center gap-2",onClick:()=>g(!0),children:"Add New"})})]}),a.jsxs(ra,{children:[a.jsx(ca,{className:"px-7",children:a.jsxs(na,{children:["Complaint Source List (",(f=(j=s.data)==null?void 0:j.data)==null?void 0:f.totalDocs,")"]})}),a.jsx(oa,{children:s.isLoading?a.jsx("div",{className:"flex h-32 items-center justify-center",children:a.jsx(la,{})}):a.jsxs(a.Fragment,{children:[a.jsxs(ua,{children:[a.jsx(ha,{children:a.jsxs(V,{children:[a.jsx(u,{className:"",children:"#"}),a.jsx(u,{className:"",children:" Complaint Source Name"}),a.jsx(u,{className:"",children:"Id"}),a.jsx(u,{className:"",children:"Created at"}),a.jsx(u,{className:"",children:"Status"}),a.jsx(u,{children:"Action"})]})}),a.jsx(xa,{children:(E=(A=(t=s==null?void 0:s.data)==null?void 0:t.data)==null?void 0:A.docs)==null?void 0:E.map((e,N)=>a.jsxs(V,{children:[a.jsx(h,{children:N+1}),a.jsx(h,{children:e==null?void 0:e.source}),a.jsx(h,{children:e==null?void 0:e._id}),a.jsx(h,{children:da(e==null?void 0:e.createdAt).format("DD-MM-YYYY")}),a.jsx(h,{children:a.jsxs(fa,{checked:(e==null?void 0:e.status)==1,onChange:()=>y(e==null?void 0:e._id),className:`${e!=null&&e.status?"bg-primary":"bg-gray-200"} relative inline-flex items-center h-6 rounded-full w-11`,children:[a.jsx("span",{className:"sr-only",children:"Enable notifications"}),a.jsx("span",{className:`${e!=null&&e.status?"translate-x-6":"translate-x-1"} inline-block w-4 h-4 transform bg-white rounded-full`})]})}),a.jsx(h,{children:a.jsx(U,{onClick:()=>b(e==null?void 0:e._id),children:"Edit"})})]},e==null?void 0:e._id))})]}),a.jsx(K,{className:"mb-2 mt-4"}),a.jsx("div",{className:"flex w-full justify-end",children:a.jsx(ga,{page:x,perPage:d,totalPage:(T=(F=s==null?void 0:s.data)==null?void 0:F.data)==null?void 0:T.totalDocs,hasNextPage:(M=(B=s==null?void 0:s.data)==null?void 0:B.data)==null?void 0:M.hasNextPage,hasPrevPage:(H=(k=s==null?void 0:s.data)==null?void 0:k.data)==null?void 0:H.hasPrevPage,setPage:S,setPerPage:o})})]})})]})]})]})}function Aa(){return a.jsx(ia,{title:"Complaint Source",subTitle:"Manage all the Complaint Source here",children:a.jsx("div",{className:"py-12",children:a.jsx(Ca,{})})})}export{Aa as default};