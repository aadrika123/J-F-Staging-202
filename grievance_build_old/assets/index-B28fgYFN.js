import{u as W,x as J,s as O,g,b as X,o as Z,r as u,j as e,F as ee,R as E,G as ae,S as Q,B as se,c as le,d as w,a5 as re,_ as h,z as U,t as te,v as ne,A as ce,w as de,D as oe}from"./index-B_SI8cVG.js";import{P as ie}from"./index-BGAvAx0r.js";import{T as he,a as xe,b as V,c,d as ue,e as d}from"./table-DpIXqVPm.js";import{g as me}from"./services-KQnp_8oA.js";import{P as je}from"./index-Bc46PQSs.js";import{S as fe}from"./index-lStP5Uo7.js";import{S as pe}from"./Spinner-ted6RUU_.js";import{D as ge}from"./index-pVD2Lb3A.js";import{q as be}from"./switch-CHn74Xdv.js";const ye=le().shape({formType:w().required("form Type is required"),elementKey:w().required("Element Key is required"),elementLabel:w().required("Element Label is required"),isEnable:re().required("Is Enable is required")});function Te({open:v,setOpen:x,title:S,id:o,edit:i,setEdit:m,refetch:P}){const F=W({}),j=J({}),{data:n,isFetching:L}=O({api:`${g.getTableFormById}/${o}`,key:"getTableFormById",options:{enabled:i}}),t=X({defaultValues:{formType:"",elementKey:"",elementLabel:"",isEnable:!1},resolver:Z(ye)}),b=async s=>{var y,T,f,p;try{if(i&&s){const l=await j.mutateAsync({api:`${g.updateTableForm}/${o}`,data:s});(y=l.data)!=null&&y.success?h.success((T=l==null?void 0:l.data)==null?void 0:T.message):h.error("Table Form is not updated successfully")}else{const l=await F.mutateAsync({api:g.createTableForm,data:s});(f=l.data)!=null&&f.success?h.success((p=l==null?void 0:l.data)==null?void 0:p.message):h.error("Table Form is not created successfully"),t.reset({formType:"",elementKey:"",elementLabel:"",isEnable:!1})}x(!1),m(!1),P()}catch(l){console.log(l)}};return u.useEffect(()=>{i&&n?t.reset({formType:n.data.formType,elementKey:n.data.elementKey,elementLabel:n.data.elementLabel,isEnable:n.data.isEnable}):t.reset({formType:""})},[i,n]),e.jsx(ge,{open:v,setOpen:x,title:S,setEdit:m,edit:i,isLoading:L,children:e.jsx(ee,{methods:t,onSubmit:t.handleSubmit(b),children:e.jsxs("div",{className:"grid grid-cols-1 gap-x-2 gap-y-4",children:[e.jsx("div",{children:e.jsx(E,{name:"formType",placeholder:"Enter form Type"})}),e.jsx("div",{children:i?e.jsx(E,{value:t.watch("elementKey"),placeholder:"Enter Element Key"}):e.jsx(E,{name:"elementKey",placeholder:"Enter Element Key"})}),e.jsx("div",{children:e.jsx(E,{name:"elementLabel",placeholder:"Enter Element Label"})}),e.jsx("div",{children:e.jsx(ae,{name:"isEnable",data:[{value:"true",label:"Yes"},{value:"false",label:"No"}]})}),e.jsx(Q,{}),e.jsx("div",{children:e.jsx(se,{isLoading:t.formState.isSubmitting,type:"submit",className:"h-11 w-full rounded-xl",children:"Submit"})})]})})})}function Ne(){var f,p,l,$,A,K,q,C,M,B,k;const v=J({}),[x,S]=u.useState(1),[o,i]=u.useState(10),[m,P]=u.useState(""),[F,j]=u.useState(!1),[n,L]=u.useState(""),[t,b]=u.useState(!1),s=O({api:`${g.getAllTableForm}?page=${x}&limit=${o}&q=${m}`,key:"getAllTableForm",value:[x,o],options:{enabled:!0}}),y=a=>{b(!0),j(!0),L(a)},T=async a=>{var N,I,H,Y,_,R,z,D,G;try{const r=await v.mutateAsync({api:`${(N=g)==null?void 0:N.updateTableFormStatus}/${a}`,data:{id:n}});(I=r==null?void 0:r.data)!=null&&I.success?(s.refetch(),((Y=(H=r==null?void 0:r.data)==null?void 0:H.data)==null?void 0:Y.status)==1&&h.success((_=r.data)==null?void 0:_.message),((z=(R=r==null?void 0:r.data)==null?void 0:R.data)==null?void 0:z.status)==0&&h.error((D=r.data)==null?void 0:D.message)):h.error((G=r.data)==null?void 0:G.message)}catch(r){h.error(me(r))}};return e.jsxs("main",{className:"grid items-start",children:[e.jsx(Te,{open:F,setOpen:j,title:t?"Edit Table Form":"Add Table Form",id:n,edit:t,setEdit:b,refetch:s.refetch}),e.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:[e.jsxs("div",{className:"flex w-full justify-between gap-2",children:[e.jsx("div",{children:e.jsx(fe,{search:m,setSearch:P,refetch:s.refetch,isFetching:s.isLoading})}),e.jsx("div",{children:e.jsx(U,{className:"flex items-center gap-2",onClick:()=>j(!0),children:"Add New"})})]}),e.jsxs(te,{children:[e.jsx(ne,{className:"px-7",children:e.jsxs(ce,{children:["Table Form List (",(p=(f=s.data)==null?void 0:f.data)==null?void 0:p.totalDocs,")"]})}),e.jsx(de,{children:s.isLoading?e.jsx("div",{className:"flex h-32 items-center justify-center",children:e.jsx(pe,{})}):e.jsxs(e.Fragment,{children:[e.jsxs(he,{children:[e.jsx(xe,{children:e.jsxs(V,{children:[e.jsx(c,{className:"",children:"#"}),e.jsx(c,{className:"",children:"Form Type "}),e.jsx(c,{className:"",children:"Element Key "}),e.jsx(c,{className:"",children:"Element Label "}),e.jsx(c,{className:"",children:"Is Enable"}),e.jsx(c,{className:"",children:"Id"}),e.jsx(c,{className:"",children:"Created at"}),e.jsx(c,{className:"",children:"Status"}),e.jsx(c,{children:"Action"})]})}),e.jsx(ue,{children:(A=($=(l=s==null?void 0:s.data)==null?void 0:l.data)==null?void 0:$.docs)==null?void 0:A.map((a,N)=>e.jsxs(V,{children:[e.jsx(d,{children:x*o-o+N+1}),e.jsx(d,{children:a==null?void 0:a.formType}),e.jsx(d,{children:a==null?void 0:a.elementKey}),e.jsx(d,{children:a==null?void 0:a.elementLabel}),e.jsx(d,{children:a!=null&&a.isEnable?e.jsx("div",{className:"text-green-700 font-bold",children:" Yes"}):e.jsx("div",{className:"text-red-500 font-bold",children:"No"})}),e.jsx(d,{children:a==null?void 0:a._id}),e.jsx(d,{children:oe(a==null?void 0:a.createdAt).format("DD-MM-YYYY")}),e.jsx(d,{children:e.jsxs(be,{checked:(a==null?void 0:a.status)==1,onChange:()=>T(a==null?void 0:a._id),className:`${a!=null&&a.status?"bg-primary":"bg-gray-200"} relative inline-flex items-center h-6 rounded-full w-11`,children:[e.jsx("span",{className:"sr-only",children:"Enable notifications"}),e.jsx("span",{className:`${a!=null&&a.status?"translate-x-6":"translate-x-1"} inline-block w-4 h-4 transform bg-white rounded-full`})]})}),e.jsx(d,{children:e.jsx(U,{className:"bg-primary",onClick:()=>y(a._id),children:"Edit"})})]},a==null?void 0:a._id))})]}),e.jsx(Q,{className:"mb-2 mt-4"}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(je,{page:x,perPage:o,totalPage:(q=(K=s==null?void 0:s.data)==null?void 0:K.data)==null?void 0:q.totalDocs,hasNextPage:(M=(C=s==null?void 0:s.data)==null?void 0:C.data)==null?void 0:M.hasNextPage,hasPrevPage:(k=(B=s==null?void 0:s.data)==null?void 0:B.data)==null?void 0:k.hasPrevPage,setPage:S,setPerPage:i})})]})})]})]})]})}function Ke(){return e.jsx(ie,{title:"Table Form List",subTitle:"Manage all the Table Form here",children:e.jsx("div",{className:"py-12",children:e.jsx(Ne,{})})})}export{Ke as default};