import{u as de,x as le,s as G,g as S,r as n,b as ne,o as ce,j as e,F as oe,G as ae,R as ie,S as te,B as ue,c as he,d as T,k as re,_ as v,f as me,z,t as xe,v as fe,A as je,w as pe,D as be}from"./index-DIPmLGEc.js";import{P as Ne}from"./index-BJ1kWxRX.js";import{T as ge,a as Se,b as se,c as N,d as ve,e as g}from"./table-CKg6E7Cm.js";import{g as Ie}from"./services-KQnp_8oA.js";import{P as ye}from"./index-D4sDQkLe.js";import{S as we}from"./index-D55QynqQ.js";import{S as Pe}from"./Spinner-Bj7Waocv.js";import{D as ke}from"./index-BJsrHZlS.js";import{q as $e}from"./switch-BZrr8aoM.js";const Me=he().shape({ulbId:T().notRequired(),moduleId:T().notRequired(),workFlowName:T().required("workFlow Name is required"),parentId:T().notRequired(),levelSerial:T().notRequired()});function Ae({open:c,setOpen:m,title:P,id:x,edit:I,setEdit:k,refetch:V}){var Y,C,L,R,q,E,U,B;const _=de({}),$=le({}),H=new URLSearchParams(re().search);let o=H.get("parentId"),M=H.get("levelSerial");const s=G({api:`${S.getWorkFlowById}?id=${x}`,key:"getWorkFlowById",options:{enabled:I}}),[Z,w]=n.useState(),[Q,A]=n.useState(),f=ne({resolver:ce(Me)}),K=async l=>{var i,u,a,y,j,p,b,F;let h=parseInt(M);try{if(I&&l){const r=await $.mutateAsync({api:`${S.updateWorkFlow}/${x}`,data:{ulbId:l.ulbId,moduleId:l.moduleId,workFlowName:l.workFlowName,parentId:(u=(i=s==null?void 0:s.data)==null?void 0:i.data)==null?void 0:u.parentId,levelSerial:(y=(a=s==null?void 0:s.data)==null?void 0:a.data)==null?void 0:y.levelSerial}});(j=r.data)!=null&&j.success?v.success((p=r==null?void 0:r.data)==null?void 0:p.message):v.error("Workflow not updated successfully")}else{const r=await _.mutateAsync({api:S.createWorkFlow,data:{ulbId:l.ulbId,moduleId:l.moduleId,workFlowName:l.workFlowName,parentId:o,levelSerial:h}});(b=r.data)!=null&&b.success?v.success((F=r==null?void 0:r.data)==null?void 0:F.message):v.error("Workflow not created successfully"),f.reset({ulbId:"",moduleId:"",workFlowName:"",parentId:"",levelSerial:""})}m(!1),k(!1),V()}catch(r){console.log(r)}};n.useEffect(()=>{var l,h,i,u,a;I&&(s!=null&&s.data)?f.reset({ulbId:(l=s==null?void 0:s.data)==null?void 0:l.data.ulbId,moduleId:(h=s==null?void 0:s.data)==null?void 0:h.data.moduleId,workFlowName:(i=s==null?void 0:s.data)==null?void 0:i.data.workFlowName,parentId:(u=s==null?void 0:s.data.data)==null?void 0:u.parentId,levelSerial:(a=s==null?void 0:s.data.data)==null?void 0:a.levelSerial}):f.reset({ulbId:"",moduleId:"",workFlowName:"",parentId:o??"",levelSerial:M??""})},[I,s==null?void 0:s.data]);const O=async()=>{var h,i,u;const l=await _.mutateAsync({api:S.checkWfModulePermission,data:{workflowId:o=="null"?Number(o):o,ulbId:o=="null"?Number(o):o}});(h=l.data)!=null&&h.success&&(w((i=l.data)==null?void 0:i.canSelectModule),A((u=l.data)==null?void 0:u.canSelectUlb))};n.useEffect(()=>{c===!0&&O()},[c]);const t=G({api:`${(Y=S)==null?void 0:Y.getAllModule}?page=1&limit=10000`,key:"getAllModuleList",options:{enabled:!0}}),X=G({api:`${(C=S)==null?void 0:C.getAllUlb}?page=1&limit=10000`,key:"getAllUlb",options:{enabled:!0}});return e.jsx(ke,{open:c,setOpen:m,title:P,setEdit:k,edit:I,isLoading:s==null?void 0:s.isFetching,children:e.jsx(oe,{methods:f,onSubmit:f.handleSubmit(K),children:e.jsxs("div",{className:"grid grid-cols-1 gap-x-2 gap-y-4",children:[Q==!0&&e.jsxs("div",{children:["Select ULB Name",e.jsx(ae,{name:"ulbId",data:((q=(R=(L=X.data)==null?void 0:L.data)==null?void 0:R.docs)==null?void 0:q.map(l=>({value:l._id,label:l.ulbName})))??[]})]}),Z==!0&&e.jsxs("div",{children:["Select Module Name",e.jsx(ae,{name:"moduleId",data:((B=(U=(E=t.data)==null?void 0:E.data)==null?void 0:U.docs)==null?void 0:B.map(l=>({value:l._id,label:l.moduleName})))??[]})]}),e.jsx("div",{children:e.jsx(ie,{name:"workFlowName",placeholder:"Enter your WorkFlow Name"})}),e.jsx(te,{}),e.jsx("div",{children:e.jsx(ue,{isLoading:f.formState.isSubmitting,type:"submit",className:"h-11 w-full rounded-xl",children:"Submit"})})]})})})}function Ce(c){var C,L,R,q,E,U,B,l,h,i,u;const[m,P]=n.useState(1),[x,I]=n.useState(10),[k,V]=n.useState(""),[_,$]=n.useState(!1),[J,H]=n.useState(""),[o,M]=n.useState(!1),s=le({}),w=new URLSearchParams(re().search),Q=me(),A=w.get("parentId"),f=w.get("levelSerial"),K=w.get("parentName"),O=w.get("moduleName"),t=G({api:`${S.getAllWorkFlow}?page=${m}&limit=${x}&q=${k}&parentId=${A}&levelSerial=${f}`,key:"getAllWorkFlow",value:[m,x,A],options:{enabled:!0}}),X=a=>{M(!0),$(!0),H(a)},Y=async a=>{var y,j,p,b,F,r,W,D,ee;try{const d=await s.mutateAsync({api:`${(y=S)==null?void 0:y.updateWorkFlowStatus}/${a}`,data:{id:J}});(j=d==null?void 0:d.data)!=null&&j.success?(t.refetch(),((b=(p=d==null?void 0:d.data)==null?void 0:p.data)==null?void 0:b.status)==1&&v.success((F=d.data)==null?void 0:F.message),((W=(r=d==null?void 0:d.data)==null?void 0:r.data)==null?void 0:W.status)==0&&v.error((D=d.data)==null?void 0:D.message)):v.error((ee=d.data)==null?void 0:ee.message)}catch(d){v.error(Ie(d))}};return n.useEffect(()=>{c==null||c.settitle(K),c==null||c.setSubtitle(O)},[A]),e.jsxs("main",{className:"grid items-start",children:[e.jsx(Ae,{open:_,setOpen:$,title:o?"Edit Workflow":"Add Workflow",id:J,edit:o,setEdit:M,refetch:t.refetch}),e.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:[e.jsxs("div",{className:"flex w-full justify-between gap-2",children:[e.jsx("div",{children:e.jsx(we,{search:k,setSearch:V,refetch:t.refetch,isFetching:t.isLoading})}),e.jsx("div",{children:e.jsx(z,{className:"flex items-center gap-2",onClick:()=>{$(!0)},children:"Add New"})})]}),e.jsxs(xe,{children:[e.jsx(fe,{className:"px-7",children:e.jsxs(je,{children:["Work Flow Role List (",(L=(C=t.data)==null?void 0:C.data)==null?void 0:L.totalDocs,")"]})}),e.jsx(pe,{children:t.isLoading?e.jsx("div",{className:"flex h-32 items-center justify-center",children:e.jsx(Pe,{})}):e.jsxs(e.Fragment,{children:[e.jsxs(ge,{children:[e.jsx(Se,{children:e.jsxs(se,{children:[e.jsx(N,{className:"",children:"#"}),e.jsx(N,{className:"",children:"Work Flow Name"}),e.jsx(N,{className:"",children:"Ulb Name"}),e.jsx(N,{className:"",children:"Module Name"}),e.jsx(N,{className:"",children:"Level Serial"}),e.jsx(N,{className:"",children:"Created at"}),e.jsx(N,{className:"",children:"Status"}),e.jsx(N,{children:"Action"})]})}),e.jsx(ve,{children:(E=(q=(R=t==null?void 0:t.data)==null?void 0:R.data)==null?void 0:q.docs)==null?void 0:E.map((a,y)=>{var j,p;return e.jsxs(se,{children:[e.jsx(g,{children:y+1}),e.jsx(g,{children:a==null?void 0:a.workFlowName}),e.jsx(g,{children:(j=a==null?void 0:a.ulb)==null?void 0:j.ulbName}),e.jsx(g,{children:(p=a==null?void 0:a.module)==null?void 0:p.moduleName}),e.jsx(g,{children:a==null?void 0:a.levelSerial}),e.jsx(g,{children:be(a.createdAt).format("DD-MM-YYYY")}),e.jsx(g,{children:e.jsxs($e,{checked:(a==null?void 0:a.status)==1,onChange:()=>Y(a._id),className:`${a!=null&&a.status?"bg-primary":"bg-gray-200"} relative inline-flex h-6 w-11 items-center rounded-full`,children:[e.jsx("span",{className:"sr-only",children:"Enable notifications"}),e.jsx("span",{className:`${a!=null&&a.status?"translate-x-6":"translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white`})]})}),e.jsxs(g,{className:"space-x-2",children:[e.jsx(z,{variant:"secondary",onClick:()=>X(a._id),children:"Edit"}),e.jsx(z,{variant:"secondary",onClick:()=>{Q(`/grievance/dashboard/members-details?parentId=${a==null?void 0:a._id}`)},children:"Members"}),e.jsx(z,{className:"bg-primary md:ml-5",onClick:()=>{var b;Q(`/grievance/dashboard/workflow-master?parentId=${a==null?void 0:a._id}&levelSerial=${(a==null?void 0:a.levelSerial)+1}&parentName=${a.workFlowName}&moduleName=${(b=a==null?void 0:a.module)==null?void 0:b.moduleName}`)},children:"View"})]})]},a._id)})})]}),e.jsx(te,{className:"mb-2 mt-4"}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(ye,{page:m,perPage:x,totalPage:(B=(U=t==null?void 0:t.data)==null?void 0:U.data)==null?void 0:B.totalDocs,hasNextPage:(h=(l=t==null?void 0:t.data)==null?void 0:l.data)==null?void 0:h.hasNextPage,hasPrevPage:(u=(i=t==null?void 0:t.data)==null?void 0:i.data)==null?void 0:u.hasPrevPage,setPage:P,setPerPage:I})})]})})]})]})]})}function He(){const[c,m]=n.useState("Workflow Master List"),[P,x]=n.useState("");return e.jsx(Ne,{title:c||"Workflow Master List",subTitle:P||"Manage all the work Flow here",children:e.jsx("div",{className:"",children:e.jsx(Ce,{settitle:m,setSubtitle:x})})})}export{He as default};