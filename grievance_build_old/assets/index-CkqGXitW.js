import{r as I,b as xe,o as je,s as c,g as o,j as a,F as ge,y as de,a0 as d,R as A,J as i,B as ye,t as be,v as ve,H as Ne,w as fe,S as Te,x as P,a2 as x,L as Ie,G as Ae,c as Pe,d as t,aN as ce}from"./index-D3GDLqYi.js";import{T as we,a as $e,b as oe,c as s,d as Se,e as n}from"./table-CDz1hvZ_.js";import{P as Le}from"./index-DgB4ji06.js";import{P as Re}from"./index-CSE_xvp-.js";const ke=Pe().shape({ulbId:t(),moduleId:t(),complaintTypeId:t(),priorityId:t(),targetTypeId:t(),complaintSourceTypeId:t(),fDate:ce(),type:t(),toDate:ce(),complaintRefNo:t()});function me(){var w,$,S,L,R,k,m,D,F,C,_,G,H,M,B,E,Y,U,V,J,O,W,q,z,K,Q,X,Z,ee,ae,le;const[j,te]=I.useState(1),[u,pe]=I.useState(10),r=xe({resolver:je(ke),defaultValues:{ulbId:"",moduleId:"",complaintTypeId:"",priorityId:"",targetTypeId:"",type:"",complaintSourceTypeId:"",fDate:"",toDate:"",complaintRefNo:""}});console.log("methods");const ie=async()=>{l.refetch()},l=c({api:`${o.complaintReport}?page=${j}&limit=${u}&priority=${r.watch("priorityId")}&ulb=${r.watch("ulbId")}&complaintType=${r.watch("complaintTypeId")}&targetType=${r.watch("targetTypeId")}&module=${r.watch("moduleId")}&source=${r.watch("complaintSourceTypeId")}&fDate=${r.watch("fDate")}&toDate=${r.watch("toDate")}&complaintRefNo=${r.watch("complaintRefNo")}&type=${r.watch("type")}`,key:"searchAllComplaints",value:[j,u],options:{enabled:!0}});c({api:`${(w=o)==null?void 0:w.getAllUlb}?page=1&limit=10000`,key:"getAllUlb",options:{enabled:!0}}),c({api:`${($=o)==null?void 0:$.getAllModule}?page=1&limit=10000`,key:"geAllModules",options:{enabled:!0}});const b=c({api:`${(S=o)==null?void 0:S.getAllComplaintType}?page=1&limit=10000`,key:"getAllComplaintTypes",options:{enabled:!0}}),v=c({api:`${(L=o)==null?void 0:L.getAllPriority}?page=1&limit=10000`,key:"getAllPriority",options:{enabled:!0}});c({api:`${(R=o)==null?void 0:R.getAllTarget}?page=1&limit=10000`,key:"getAllTargetTypes",options:{enabled:!0}});const N=c({api:`${o.getAllComplaintSource}?page=1&limit=10000`,key:"getAllComplaintSource",options:{enabled:!0}}),f=c({api:`${o.getAllDepartment}?page=1&limit=10000`,key:"getAllDepartment",options:{enabled:!0,refetchOnMount:!1}}),T=c({api:`${o.getAllProblemDirect}?page=1&limit=10000`,key:"getProblemData",options:{enabled:!0,refetchOnMount:!1}}),he=I.useRef(null),ue=(e,h)=>{const g=new Date,y=new Date(e),p=(g.getTime()-y.getTime())/(1e3*60*60);return console.log("Time Difference (in hours):",p),console.log("SLA Levels:",h),p<=h.sla3?"L3":p<=h.sla2?"L2":p<=h.sla1?"L1":"Pending"};return a.jsxs(a.Fragment,{children:[a.jsx(ge,{methods:r,onSubmit:r.handleSubmit(ie),children:a.jsxs("div",{className:"grid grid-cols-6 gap-x-2 gap-y-4 bg-background px-10 py-4",children:[a.jsx("h1",{className:"text-xl font-bold text-blue-800 uppercase col-span-4",children:"Grievance Report"}),a.jsx(de,{className:"col-span-6"}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"complaintRefNo",children:"Grievance No."}),a.jsx(A,{name:"complaintRefNo",className:"",placeholder:"Enter Grievance number"})]}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"fDate",children:"From Date"}),a.jsx(A,{name:"fDate",type:"date",className:""})]}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"toDate",children:"Upto Date"}),a.jsx(A,{name:"toDate",type:"date",className:""})]}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"moduleId",children:"Department"}),a.jsx(i,{className:"bg-background cursor-pointer",name:"moduleId",data:((D=(m=(k=f==null?void 0:f.data)==null?void 0:k.data)==null?void 0:m.docs)==null?void 0:D.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.department})))??[]})]}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"targetTypeId",children:"Grievance Type"}),a.jsx(i,{className:"bg-background cursor-pointer",name:"targetTypeId",data:((_=(C=(F=T==null?void 0:T.data)==null?void 0:F.data)==null?void 0:C.docs)==null?void 0:_.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.problem})))??[]})]}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"complaintTypeId",children:"Entry Type"}),a.jsx(i,{className:"bg-background cursor-pointer",name:"complaintTypeId",data:((M=(H=(G=b==null?void 0:b.data)==null?void 0:G.data)==null?void 0:H.docs)==null?void 0:M.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.complaintTypeName})))??[]})]}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"priorityId",children:"Priority"}),a.jsx(i,{className:"bg-background cursor-pointer",name:"priorityId",data:((Y=(E=(B=v==null?void 0:v.data)==null?void 0:B.data)==null?void 0:E.docs)==null?void 0:Y.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.priorityName})))??[]})]}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"complaintSourceTypeId",children:"Entry Modes"}),a.jsx(i,{className:"bg-background cursor-pointer",name:"complaintSourceTypeId",data:((J=(V=(U=N==null?void 0:N.data)==null?void 0:U.data)==null?void 0:V.docs)==null?void 0:J.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.source})))??[]})]}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"type",children:"Grievance Status"}),a.jsx(i,{name:"type",data:[{value:"0",label:"Pending"},{value:"1",label:"Resolved"},{value:"2",label:"Rejected"},{value:"3",label:"Pending (Re-Opened)"},{value:"4",label:"Withdrawn"}]})]}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"type",children:"Level Status"}),a.jsx(i,{name:"type",data:[{value:"L1",label:"L1"},{value:"L2",label:"L2"},{value:"L3",label:"L3"}]})]}),a.jsx("div",{}),a.jsx("div",{className:"mt-6",children:a.jsx(ye,{isLoading:r.formState.isSubmitting,type:"submit",className:" w-auto  px-10 float-right",children:"Search"})})]})}),a.jsx("div",{className:"mt-2",children:a.jsxs(be,{children:[a.jsx(ve,{className:"px-7",children:a.jsxs(Ne,{className:"flex justify-between",children:[a.jsxs("h1",{children:["Grievance List (",(W=(O=l.data)==null?void 0:O.data)==null?void 0:W.totalDocs,")"]}),a.jsx("h1",{className:"flex gap-2 "})]})}),a.jsx(fe,{children:l.isLoading?a.jsx("div",{className:"flex h-32 items-center justify-center",children:a.jsx(Te,{})}):a.jsxs("div",{children:[a.jsxs(we,{ref:he,children:[a.jsx($e,{children:a.jsxs(oe,{className:"text-xs",children:[a.jsx(s,{className:"",children:"#"}),a.jsx(s,{className:"",children:"Grievance No."}),a.jsx(s,{className:"",children:"Department"}),a.jsx(s,{className:"",children:"Received Date"}),a.jsx(s,{className:"",children:"Source"}),a.jsx(s,{className:"",children:"Pending At"}),a.jsx(s,{className:"",children:"Redressal Days"}),a.jsx(s,{className:"",children:"Status"}),a.jsx(s,{className:"",children:"Level Status"}),a.jsx(s,{className:"",children:"Priority"}),a.jsx(s,{className:"",children:"View"})]})}),a.jsx(Se,{children:(K=(z=(q=l==null?void 0:l.data)==null?void 0:q.data)==null?void 0:z.docs)==null?void 0:K.map((e,h)=>{var g,y,p,re,se,ne;return a.jsxs(oe,{className:"text-xs",children:[a.jsx(n,{children:j*u-u+h+1}),a.jsx(n,{children:(e==null?void 0:e.complaintRefNo)||"N/A"}),a.jsx(n,{children:((g=e==null?void 0:e.department)==null?void 0:g.department)||"N/A"}),a.jsx(n,{children:P(e==null?void 0:e.createdAt).format("DD-MM-YYYY")||"N/A"}),a.jsx(n,{children:((y=e==null?void 0:e.source)==null?void 0:y.source)||"N/A"}),a.jsx(n,{children:(e==null?void 0:e.pendingAt)||"N/A"}),a.jsxs(n,{children:[" ",P().diff(P(e==null?void 0:e.createdAt),"days")," days"]}),a.jsxs(n,{children:[(e==null?void 0:e.wf_status)===4&&a.jsx(x,{variant:"destructive",children:"Closed"}),(e==null?void 0:e.wf_status)===3&&a.jsx(x,{className:"bg-amber-500 text-white",children:"Pending(Re-Opened)"}),(e==null?void 0:e.wf_status)===2&&a.jsx(x,{variant:"destructive",children:"Rejected"}),(e==null?void 0:e.wf_status)===1&&a.jsx(x,{variant:"success",children:"Resolved"}),(e==null?void 0:e.wf_status)===0&&a.jsx(x,{variant:"secondary",children:"Pending"})]}),a.jsx(n,{children:ue(e==null?void 0:e.createdAt,{sla1:(p=e==null?void 0:e.problemType)==null?void 0:p.sla1,sla2:(re=e==null?void 0:e.problemType)==null?void 0:re.sla2,sla3:(se=e==null?void 0:e.problemType)==null?void 0:se.sla3})}),a.jsx(n,{children:((ne=e==null?void 0:e.priority)==null?void 0:ne.priorityName)||"N/A"}),a.jsx(n,{children:a.jsx(Ie,{to:`/grievance/dashboard/management-complaint-details?complaintRefNo=${e==null?void 0:e.complaintRefNo}
                         &complaintId=${e==null?void 0:e._id}`,children:a.jsx(Ae,{className:"bg-primary",onClick:()=>{},children:"View"})})})]},e._id)})})]}),a.jsx(de,{className:"mb-2 mt-4"}),a.jsx("div",{className:"flex w-full justify-end",children:a.jsx(Le,{page:j,perPage:u,totalPage:(X=(Q=l==null?void 0:l.data)==null?void 0:Q.data)==null?void 0:X.totalDocs,hasNextPage:(ee=(Z=l==null?void 0:l.data)==null?void 0:Z.data)==null?void 0:ee.hasNextPage,hasPrevPage:(le=(ae=l==null?void 0:l.data)==null?void 0:ae.data)==null?void 0:le.hasPrevPage,setPage:te,setPerPage:pe})})]})})]})})]})}function Ge(){return a.jsx(Re,{title:"",subTitle:"",children:a.jsx("div",{className:"",children:a.jsx(me,{})})})}export{Ge as default};