import{u as W,x as O,s as k,g as m,b as X,o as Z,r as c,j as e,F as D,R as ee,G as ae,y as se,S as Q,B as te,c as re,d as q,_ as i,z as J,t as de,v as le,A as ne,w as ie,D as oe}from"./index-DIPmLGEc.js";import{P as ce}from"./index-BJ1kWxRX.js";import{T as ue,a as he,b as K,c as x,d as xe,e as p}from"./table-CKg6E7Cm.js";import{D as pe}from"./index-BJsrHZlS.js";import{g as me}from"./services-KQnp_8oA.js";import{P as ge}from"./index-D4sDQkLe.js";import{S as je}from"./index-D55QynqQ.js";import{S as fe}from"./Spinner-Bj7Waocv.js";import{q as Ne}from"./switch-BZrr8aoM.js";const ye=re().shape({titleName:q().required("Title Name is required"),description:q().required("Description is required"),moduleId:q().required("Module id is required")});function be({open:M,setOpen:u,title:F,id:h,edit:o,setEdit:g,refetch:T}){var A,$,f,N;const E=W({}),j=O({}),{data:n,isFetching:I}=k({api:`${m.getComplaintById}/${h}`,key:"getComplaintById",options:{enabled:o}}),d=X({defaultValues:{titleName:"",description:"",moduleId:""},resolver:Z(ye)}),P=async l=>{var y,b,C,S;try{if(o&&l){const r=await j.mutateAsync({api:`${m.updateComplaint}/${h}`,data:l});(y=r.data)!=null&&y.success?i.success((b=r==null?void 0:r.data)==null?void 0:b.message):i.error("Complaint not updated successfully")}else{const r=await E.mutateAsync({api:m.createComplaint,data:l});(C=r.data)!=null&&C.success?i.success((S=r==null?void 0:r.data)==null?void 0:S.message):i.error("Complaint not created successfully"),d.reset({titleName:""})}u(!1),g(!1),T()}catch(r){console.log(r)}};c.useEffect(()=>{o&&n?d.reset({titleName:n.data.titleName,description:n.data.description,moduleId:n.data.moduleId}):d.reset({titleName:"",description:"",moduleId:""})},[o,n]);const s=k({api:`${(A=m)==null?void 0:A.getAllModule}?page=1&limit=10000`,key:"getAllModuleList",options:{enabled:!0}});return console.log(s.data),e.jsx(pe,{open:M,setOpen:u,title:F,setEdit:g,edit:o,isLoading:I,children:e.jsx(D,{methods:d,onSubmit:d.handleSubmit(P),children:e.jsxs("div",{className:"grid grid-cols-1 gap-x-2 gap-y-4",children:[e.jsx("div",{children:e.jsx(ee,{name:"titleName",placeholder:"Enter your title name"})}),e.jsx("div",{children:e.jsx(ae,{name:"moduleId",data:((N=(f=($=s.data)==null?void 0:$.data)==null?void 0:f.docs)==null?void 0:N.map(l=>({value:l._id,label:l.moduleName})))??[]})}),e.jsx("div",{children:e.jsx(se,{name:"description",placeholder:"Enter your description"})}),e.jsx(Q,{}),e.jsx("div",{children:e.jsx(te,{isLoading:d.formState.isSubmitting,type:"submit",className:"h-11 w-full rounded-xl",children:"Submit"})})]})})})}function Ce(){var f,N,l,y,b,C,S,r,B,L,H;const M=O({}),[u,F]=c.useState(1),[h,o]=c.useState(10),[g,T]=c.useState(""),[E,j]=c.useState(!1),[n,I]=c.useState(""),[d,P]=c.useState(!1),s=k({api:`${m.getAllComplaint}?page=${u}&limit=${h}&q=${g}`,key:"getAllComplaint",value:[u,h],options:{enabled:!0}}),A=a=>{P(!0),j(!0),I(a)},$=async a=>{var w,v,R,_,Y,z,G,U,V;try{const t=await M.mutateAsync({api:`${(w=m)==null?void 0:w.updateComplaintStatus}/${a}`,data:{id:n}});(v=t==null?void 0:t.data)!=null&&v.success?(s.refetch(),((_=(R=t==null?void 0:t.data)==null?void 0:R.data)==null?void 0:_.status)==1&&i.success((Y=t==null?void 0:t.data)==null?void 0:Y.message),((G=(z=t==null?void 0:t.data)==null?void 0:z.data)==null?void 0:G.status)==0&&i.error((U=t==null?void 0:t.data)==null?void 0:U.message)):i.error((V=t.data)==null?void 0:V.message)}catch(t){i.error(me(t))}};return e.jsxs("main",{className:"grid items-start",children:[e.jsx(be,{open:E,setOpen:j,title:d?"Edit Complaint":"Add Complaint",id:n,edit:d,setEdit:P,refetch:s.refetch}),e.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:[e.jsxs("div",{className:"flex w-full justify-between gap-2",children:[e.jsx("div",{children:e.jsx(je,{search:g,setSearch:T,refetch:s.refetch,isFetching:s==null?void 0:s.isLoading})}),e.jsx("div",{children:e.jsx(J,{className:"flex items-center gap-2",onClick:()=>j(!0),children:"Add New"})})]}),e.jsxs(de,{children:[e.jsx(le,{className:"px-7",children:e.jsxs(ne,{children:["Complaint List (",(N=(f=s==null?void 0:s.data)==null?void 0:f.data)==null?void 0:N.totalDocs,")"]})}),e.jsx(ie,{children:s.isLoading?e.jsx("div",{className:"flex h-32 items-center justify-center",children:e.jsx(fe,{})}):e.jsxs(e.Fragment,{children:[e.jsxs(ue,{children:[e.jsx(he,{children:e.jsxs(K,{children:[e.jsx(x,{className:"",children:"#"}),e.jsx(x,{className:"",children:"Title Name"}),e.jsx(x,{className:"",children:"Module Name"}),e.jsx(x,{className:"",children:"Created at"}),e.jsx(x,{className:"",children:"Status"}),e.jsx(x,{children:"Action"})]})}),e.jsx(xe,{children:(b=(y=(l=s==null?void 0:s.data)==null?void 0:l.data)==null?void 0:y.docs)==null?void 0:b.map((a,w)=>{var v;return e.jsxs(K,{children:[e.jsx(p,{children:w+1}),e.jsx(p,{children:a==null?void 0:a.titleName}),e.jsx(p,{children:(v=a==null?void 0:a.modules)==null?void 0:v.moduleName}),e.jsx(p,{children:oe(a==null?void 0:a.createdAt).format("DD-MM-YYYY")}),e.jsx(p,{children:e.jsxs(Ne,{checked:(a==null?void 0:a.status)==1,onChange:()=>$(a==null?void 0:a._id),className:`${a!=null&&a.status?"bg-primary":"bg-gray-200"} relative inline-flex items-center h-6 rounded-full w-11`,children:[e.jsx("span",{className:"sr-only",children:"Enable notifications"}),e.jsx("span",{className:`${a!=null&&a.status?"translate-x-6":"translate-x-1"} inline-block w-4 h-4 transform bg-white rounded-full`})]})}),e.jsx(p,{children:e.jsx(J,{className:"bg-primary",onClick:()=>A(a==null?void 0:a._id),children:"Edit"})})]},a==null?void 0:a._id)})})]}),e.jsx(Q,{className:"mb-2 mt-4"}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(ge,{page:u,perPage:h,totalPage:(S=(C=s==null?void 0:s.data)==null?void 0:C.data)==null?void 0:S.totalDocs,hasNextPage:(B=(r=s==null?void 0:s.data)==null?void 0:r.data)==null?void 0:B.hasNextPage,hasPrevPage:(H=(L=s==null?void 0:s.data)==null?void 0:L.data)==null?void 0:H.hasPrevPage,setPage:F,setPerPage:o})})]})})]})]})]})}function Ee(){return e.jsx(ce,{title:"Complaint List",subTitle:"Manage all the Complaint here",children:e.jsx("div",{className:"py-12",children:e.jsx(Ce,{})})})}export{Ee as default};