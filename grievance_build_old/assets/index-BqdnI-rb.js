import{u as W,z as D,s as O,g,b as X,o as Z,r as u,j as e,D as ee,F as ae,R as E,J as se,y as Q,B as le,c as re,d as w,a7 as te,_ as h,G as U,t as ne,v as ce,H as de,w as oe,S as ie,x as he}from"./index-CKyUB0K3.js";import{P as xe}from"./index-DXjDntMw.js";import{T as ue,a as je,b as V,c,d as me,e as d}from"./table-C4mkKaE8.js";import{g as fe}from"./services-KQnp_8oA.js";import{P as pe}from"./index-J-o1ZV0e.js";import{S as ge}from"./index-CEsvaksg.js";import{q as be}from"./switch-fsZ-opsq.js";const ye=re().shape({formType:w().required("form Type is required"),elementKey:w().required("Element Key is required"),elementLabel:w().required("Element Label is required"),isEnable:te().required("Is Enable is required")});function Te({open:v,setOpen:x,title:S,id:o,edit:i,setEdit:j,refetch:P}){const F=W({}),m=D({}),{data:n,isFetching:L}=O({api:`${g.getTableFormById}/${o}`,key:"getTableFormById",options:{enabled:i}}),t=X({defaultValues:{formType:"",elementKey:"",elementLabel:"",isEnable:!1},resolver:Z(ye)}),b=async s=>{var y,T,f,p;try{if(i&&s){const l=await m.mutateAsync({api:`${g.updateTableForm}/${o}`,data:s});(y=l.data)!=null&&y.success?h.success((T=l==null?void 0:l.data)==null?void 0:T.message):h.error("Table Form is not updated successfully")}else{const l=await F.mutateAsync({api:g.createTableForm,data:s});(f=l.data)!=null&&f.success?h.success((p=l==null?void 0:l.data)==null?void 0:p.message):h.error("Table Form is not created successfully"),t.reset({formType:"",elementKey:"",elementLabel:"",isEnable:!1})}x(!1),j(!1),P()}catch(l){console.log(l)}};return u.useEffect(()=>{i&&n?t.reset({formType:n.data.formType,elementKey:n.data.elementKey,elementLabel:n.data.elementLabel,isEnable:n.data.isEnable}):t.reset({formType:""})},[i,n]),e.jsx(ee,{open:v,setOpen:x,title:S,setEdit:j,edit:i,isLoading:L,children:e.jsx(ae,{methods:t,onSubmit:t.handleSubmit(b),children:e.jsxs("div",{className:"grid grid-cols-1 gap-x-2 gap-y-4",children:[e.jsx("div",{children:e.jsx(E,{name:"formType",placeholder:"Enter form Type"})}),e.jsx("div",{children:i?e.jsx(E,{value:t.watch("elementKey"),placeholder:"Enter Element Key"}):e.jsx(E,{name:"elementKey",placeholder:"Enter Element Key"})}),e.jsx("div",{children:e.jsx(E,{name:"elementLabel",placeholder:"Enter Element Label"})}),e.jsx("div",{children:e.jsx(se,{name:"isEnable",data:[{value:"true",label:"Yes"},{value:"false",label:"No"}]})}),e.jsx(Q,{}),e.jsx("div",{children:e.jsx(le,{isLoading:t.formState.isSubmitting,type:"submit",className:"h-11 w-full rounded-xl",children:"Submit"})})]})})})}function Ne(){var f,p,l,$,K,q,A,C,M,B,k;const v=D({}),[x,S]=u.useState(1),[o,i]=u.useState(10),[j,P]=u.useState(""),[F,m]=u.useState(!1),[n,L]=u.useState(""),[t,b]=u.useState(!1),s=O({api:`${g.getAllTableForm}?page=${x}&limit=${o}&q=${j}`,key:"getAllTableForm",value:[x,o],options:{enabled:!0}}),y=a=>{b(!0),m(!0),L(a)},T=async a=>{var N,H,I,Y,_,R,z,G,J;try{const r=await v.mutateAsync({api:`${(N=g)==null?void 0:N.updateTableFormStatus}/${a}`,data:{id:n}});(H=r==null?void 0:r.data)!=null&&H.success?(s.refetch(),((Y=(I=r==null?void 0:r.data)==null?void 0:I.data)==null?void 0:Y.status)==1&&h.success((_=r.data)==null?void 0:_.message),((z=(R=r==null?void 0:r.data)==null?void 0:R.data)==null?void 0:z.status)==0&&h.error((G=r.data)==null?void 0:G.message)):h.error((J=r.data)==null?void 0:J.message)}catch(r){h.error(fe(r))}};return e.jsxs("main",{className:"grid items-start",children:[e.jsx(Te,{open:F,setOpen:m,title:t?"Edit Table Form":"Add Table Form",id:n,edit:t,setEdit:b,refetch:s.refetch}),e.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:[e.jsxs("div",{className:"flex w-full justify-between gap-2",children:[e.jsx("div",{children:e.jsx(ge,{search:j,setSearch:P,refetch:s.refetch,isFetching:s.isLoading})}),e.jsx("div",{children:e.jsx(U,{className:"flex items-center gap-2",onClick:()=>m(!0),children:"Add New"})})]}),e.jsxs(ne,{children:[e.jsx(ce,{className:"px-7",children:e.jsxs(de,{children:["Table Form List (",(p=(f=s.data)==null?void 0:f.data)==null?void 0:p.totalDocs,")"]})}),e.jsx(oe,{children:s.isLoading?e.jsx("div",{className:"flex h-32 items-center justify-center",children:e.jsx(ie,{})}):e.jsxs(e.Fragment,{children:[e.jsxs(ue,{children:[e.jsx(je,{children:e.jsxs(V,{children:[e.jsx(c,{className:"",children:"#"}),e.jsx(c,{className:"",children:"Form Type "}),e.jsx(c,{className:"",children:"Element Key "}),e.jsx(c,{className:"",children:"Element Label "}),e.jsx(c,{className:"",children:"Is Enable"}),e.jsx(c,{className:"",children:"Id"}),e.jsx(c,{className:"",children:"Created at"}),e.jsx(c,{className:"",children:"Status"}),e.jsx(c,{children:"Action"})]})}),e.jsx(me,{children:(K=($=(l=s==null?void 0:s.data)==null?void 0:l.data)==null?void 0:$.docs)==null?void 0:K.map((a,N)=>e.jsxs(V,{children:[e.jsx(d,{children:x*o-o+N+1}),e.jsx(d,{children:a==null?void 0:a.formType}),e.jsx(d,{children:a==null?void 0:a.elementKey}),e.jsx(d,{children:a==null?void 0:a.elementLabel}),e.jsx(d,{children:a!=null&&a.isEnable?e.jsx("div",{className:"text-green-700 font-bold",children:" Yes"}):e.jsx("div",{className:"text-red-500 font-bold",children:"No"})}),e.jsx(d,{children:a==null?void 0:a._id}),e.jsx(d,{children:he(a==null?void 0:a.createdAt).format("DD-MM-YYYY")}),e.jsx(d,{children:e.jsxs(be,{checked:(a==null?void 0:a.status)==1,onChange:()=>T(a==null?void 0:a._id),className:`${a!=null&&a.status?"bg-primary":"bg-gray-200"} relative inline-flex items-center h-6 rounded-full w-11`,children:[e.jsx("span",{className:"sr-only",children:"Enable notifications"}),e.jsx("span",{className:`${a!=null&&a.status?"translate-x-6":"translate-x-1"} inline-block w-4 h-4 transform bg-white rounded-full`})]})}),e.jsx(d,{children:e.jsx(U,{className:"bg-primary",onClick:()=>y(a._id),children:"Edit"})})]},a==null?void 0:a._id))})]}),e.jsx(Q,{className:"mb-2 mt-4"}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(pe,{page:x,perPage:o,totalPage:(A=(q=s==null?void 0:s.data)==null?void 0:q.data)==null?void 0:A.totalDocs,hasNextPage:(M=(C=s==null?void 0:s.data)==null?void 0:C.data)==null?void 0:M.hasNextPage,hasPrevPage:(k=(B=s==null?void 0:s.data)==null?void 0:B.data)==null?void 0:k.hasPrevPage,setPage:S,setPerPage:i})})]})})]})]})]})}function $e(){return e.jsx(xe,{title:"Table Form List",subTitle:"Manage all the Table Form here",children:e.jsx("div",{className:"py-12",children:e.jsx(Ne,{})})})}export{$e as default};