import{a as ya,z as ma,r as b,b as fa,o as va,s as i,g as d,j as a,F as Ia,y as ca,a0 as o,R as I,J as h,B as Aa,t as Ta,v as wa,H as Sa,w as Da,S as Pa,x as da,a2 as x,L as $a,G as A,c as Ca,d as r,P as ka,_ as T}from"./index-C6QFc0oB.js";import{T as Fa,a as Ra,b as oa,c as n,d as _a,e as c}from"./table-DkgXgGTx.js";import{P as Ma}from"./index-Crx-BKWP.js";import{P as Ha}from"./index-DS9FbcBN.js";const La=Ca().shape({ulbId:r(),moduleId:r(),complaintTypeId:r(),priorityId:r(),targetTypeId:r(),complaintSourceTypeId:r(),departmentId:r(),fDate:r(),slaStatusSearch:r(),toDate:r(),complaintRefNo:r()});function Ga(){var w,S,D,P,$,C,k,F,R,_,M,H,L,G,U,B,Y,O,z,E,V,J,q,K,Q,W,X,Z,aa,ea,la,sa,ta,ra;const{user:s}=ya(),ia=ma({}),[g,ha]=b.useState(1),[p,pa]=b.useState(10),[Ua,ua]=b.useState(new Set),l=fa({resolver:va(La),defaultValues:{ulbId:"",moduleId:"",complaintTypeId:"",priorityId:"",targetTypeId:"",slaStatusSearch:"",complaintSourceTypeId:"",departmentId:"",fDate:"",toDate:"",complaintRefNo:""}});console.log("methods");const xa=async()=>{t.refetch()},t=i({api:`${d.complaintReport}?page=${g}&limit=${p}&priority=${l.watch("priorityId")}&ulb=${l.watch("ulbId")}&complaintType=${l.watch("complaintTypeId")}&targetType=${l.watch("targetTypeId")}&module=${l.watch("moduleId")}&source=${l.watch("complaintSourceTypeId")}&fDate=${l.watch("fDate")}&toDate=${l.watch("toDate")}&complaintRefNo=${l.watch("complaintRefNo")}&slaStatusSearch=${l.watch("slaStatusSearch")}&departmentId=${l.watch("departmentId")}`,key:"searchAllComplaints",value:[g,p],options:{enabled:!0}}),ga=i({api:`${(w=d)==null?void 0:w.getAllUlb}?page=1&limit=10000`,key:"getAllUlb",options:{enabled:!0}});i({api:`${(S=d)==null?void 0:S.getAllModule}?page=1&limit=10000`,key:"geAllModules",options:{enabled:!0}});const N=i({api:`${(D=d)==null?void 0:D.getAllComplaintType}?page=1&limit=10000`,key:"getAllComplaintTypes",options:{enabled:!0}}),y=i({api:`${(P=d)==null?void 0:P.getAllPriority}?page=1&limit=10000`,key:"getAllPriority",options:{enabled:!0}}),m=i({api:`${($=d)==null?void 0:$.getAllTarget}?page=1&limit=10000`,key:"getAllTargetTypes",options:{enabled:!0}}),f=i({api:`${d.getAllComplaintSource}?page=1&limit=10000`,key:"getAllComplaintSource",options:{enabled:!0}}),v=i({api:`${d.getAllDepartment}?page=1&limit=10000`,key:"getAllDepartment",options:{enabled:!0,refetchOnMount:!1}});i({api:`${d.getAllProblemDirect}?page=1&limit=10000`,key:"getProblemData",options:{enabled:!0,refetchOnMount:!1}});const ja=b.useRef(null),ba=async e=>{ka("Do you want to highlight this complaint?","Please confirm",async()=>{var u;try{(u=(await ia.mutateAsync({api:`${d.updateComplaintApplicationById}/${e}`,data:{isHighlighted:!0}})).data)!=null&&u.success?(ua(Na=>new Set(Na).add(e)),T.success("This Application is now highlighted")):T.error("This Application is not highlighted")}catch{T.error("This Application is not highlighted")}})};return a.jsxs(a.Fragment,{children:[a.jsx(Ia,{methods:l,onSubmit:l.handleSubmit(xa),children:a.jsxs("div",{className:"grid grid-cols-4 gap-x-2 gap-y-4 bg-background px-10 py-4",children:[a.jsxs("h1",{className:"col-span-4 text-xl font-bold uppercase text-blue-800",children:["Search Grievance"," "]}),a.jsx(ca,{className:"col-span-4"}),a.jsxs("div",{children:[a.jsx(o,{htmlFor:"complaintRefNo",children:"Grievance No."}),a.jsx(I,{name:"complaintRefNo",className:"",placeholder:"Enter Grievance number"})]}),a.jsxs("div",{children:[a.jsx(o,{htmlFor:"fDate",children:"From Date"}),a.jsx(I,{name:"fDate",type:"date",className:""})]}),a.jsxs("div",{children:[a.jsx(o,{htmlFor:"toDate",children:"Upto Date"}),a.jsx(I,{name:"toDate",type:"date",className:""})]}),a.jsxs("div",{children:[a.jsx(o,{htmlFor:"ulbId",children:"ULB"}),a.jsx(h,{className:"cursor-pointer bg-background",name:"ulbId",data:((F=(k=(C=ga.data)==null?void 0:C.data)==null?void 0:k.docs)==null?void 0:F.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.ulbName})))??[]})]}),a.jsxs("div",{children:[a.jsx(o,{htmlFor:"departmentId",children:"Department"}),a.jsx(h,{className:"cursor-pointer bg-background",name:"departmentId",data:((M=(_=(R=v==null?void 0:v.data)==null?void 0:R.data)==null?void 0:_.docs)==null?void 0:M.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.department})))??[]})]}),a.jsxs("div",{children:[a.jsx(o,{htmlFor:"complaintTypeId",children:"Grievance Type"}),a.jsx(h,{className:"cursor-pointer bg-background",name:"complaintTypeId",data:((G=(L=(H=N==null?void 0:N.data)==null?void 0:H.data)==null?void 0:L.docs)==null?void 0:G.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.complaintTypeName})))??[]})]}),a.jsxs("div",{children:[a.jsx(o,{htmlFor:"priorityId",children:"Priority"}),a.jsx(h,{className:"cursor-pointer bg-background",name:"priorityId",data:((Y=(B=(U=y==null?void 0:y.data)==null?void 0:U.data)==null?void 0:B.docs)==null?void 0:Y.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.priorityName})))??[]})]}),a.jsxs("div",{children:[a.jsx(o,{htmlFor:"targetTypeId",children:"Target Type"}),a.jsx(h,{className:"cursor-pointer bg-background",name:"targetTypeId",data:((E=(z=(O=m==null?void 0:m.data)==null?void 0:O.data)==null?void 0:z.docs)==null?void 0:E.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.targetType})))??[]})]}),a.jsxs("div",{children:[a.jsx(o,{htmlFor:"complaintSourceTypeId",children:"Grievance Source Type"}),a.jsx(h,{className:"cursor-pointer bg-background",name:"complaintSourceTypeId",data:((q=(J=(V=f==null?void 0:f.data)==null?void 0:V.data)==null?void 0:J.docs)==null?void 0:q.map(e=>({value:e==null?void 0:e._id,label:e==null?void 0:e.source})))??[]})]}),a.jsxs("div",{children:[a.jsx(o,{htmlFor:"type",children:"Grievance Status"}),a.jsx(h,{name:"type",data:[{value:"0",label:"Pending"},{value:"1",label:"Resolved"},{value:"2",label:"Rejected"},{value:"3",label:"Pending (Re-Opened)"},{value:"4",label:"Close"}]})]}),a.jsx("div",{}),a.jsx("div",{className:"mt-6",children:a.jsx(Aa,{isLoading:l.formState.isSubmitting,type:"submit",className:" float-right  w-auto px-10",children:"Search"})})]})}),a.jsx("div",{className:"mt-2",children:a.jsxs(Ta,{children:[a.jsx(wa,{className:"px-7",children:a.jsx(Sa,{className:"flex justify-between",children:a.jsxs("h1",{children:["Grievance List (",(Q=(K=t.data)==null?void 0:K.data)==null?void 0:Q.totalDocs,")"]})})}),a.jsx(Da,{children:t.isLoading?a.jsx("div",{className:"flex h-32 items-center justify-center",children:a.jsx(Pa,{})}):a.jsxs("div",{children:[a.jsxs(Fa,{ref:ja,children:[a.jsx(Ra,{children:a.jsxs(oa,{children:[a.jsx(n,{className:"",children:"#"}),a.jsx(n,{className:"",children:"Grievance No."}),a.jsx(n,{className:"",children:"Department"}),l.watch("fDate")&&a.jsx(n,{className:"",children:"From Date"}),l.watch("toDate")&&a.jsx(n,{className:"",children:"Upto Date"}),a.jsx(n,{className:"",children:"Ulb Name"}),a.jsx(n,{className:"",children:"Citizen Name"}),a.jsx(n,{className:"",children:"Mobile No."}),a.jsx(n,{className:"",children:"Resolve Status"}),a.jsx(n,{className:"",children:"View"}),!((s==null?void 0:s.role)==="ULB GRO"||(s==null?void 0:s.role)==="ULD ADMIN"||(s==null?void 0:s.role)==="Normal")&&a.jsx(n,{className:"",children:"Action"})]})}),a.jsx(_a,{children:(Z=(X=(W=t==null?void 0:t.data)==null?void 0:W.data)==null?void 0:X.docs)==null?void 0:Z.map((e,na)=>{var u,j;return a.jsxs(oa,{children:[a.jsx(c,{children:g*p-p+na+1}),a.jsx(c,{children:e.complaintRefNo||"N/A"}),a.jsx(c,{children:((u=e==null?void 0:e.department)==null?void 0:u.department)||"N/A"}),l.watch("fDate")&&a.jsxs(c,{children:[l.watch("fDate")?da(l.watch("fDate")).format("DD-MM-YYYY"):"N/A"," "]}),l.watch("toDate")&&a.jsx(c,{children:da(e.createdAt).format("DD-MM-YYYY")||"N/A"}),a.jsx(c,{children:((j=e.ulb)==null?void 0:j.ulbName)||"N/A"}),a.jsx(c,{children:e.citizenName||"N/A"}),a.jsx(c,{children:e.mobileNo||"N/A"}),a.jsxs(c,{children:[(e==null?void 0:e.wf_status)===4&&a.jsx(x,{variant:"destructive",children:"Closed"}),(e==null?void 0:e.wf_status)===3&&a.jsx(x,{className:"bg-amber-500 text-white",children:"Pending(Re-Opened)"}),(e==null?void 0:e.wf_status)===2&&a.jsx(x,{variant:"destructive",children:"Rejected"}),(e==null?void 0:e.wf_status)===1&&a.jsx(x,{variant:"success",children:"Resolved"}),(e==null?void 0:e.wf_status)===0&&a.jsx(x,{variant:"secondary",children:"Pending"})]}),a.jsx(c,{children:a.jsx($a,{to:`/grievance/dashboard/management-complaint-details?complaintRefNo=${e==null?void 0:e.complaintRefNo}
                         &complaintId=${e==null?void 0:e._id}`,children:a.jsx(A,{className:"bg-primary",onClick:()=>{},children:"View"})})}),!((s==null?void 0:s.role)==="ULB GRO"||(s==null?void 0:s.role)==="ULD ADMIN  "||(s==null?void 0:s.role)==="Normal")&&a.jsx(c,{children:e!=null&&e.isHighlighted?a.jsx(A,{type:"button",className:"bg-green-500",children:"Highlighted"}):a.jsx(A,{type:"button",className:"bg-red-500",onClick:()=>ba(e==null?void 0:e._id),children:"Highlight"})})]},e._id)})})]}),a.jsx(ca,{className:"mb-2 mt-4"}),a.jsx("div",{className:"flex w-full justify-end",children:a.jsx(Ma,{page:g,perPage:p,totalPage:(ea=(aa=t==null?void 0:t.data)==null?void 0:aa.data)==null?void 0:ea.totalDocs,hasNextPage:(sa=(la=t==null?void 0:t.data)==null?void 0:la.data)==null?void 0:sa.hasNextPage,hasPrevPage:(ra=(ta=t==null?void 0:t.data)==null?void 0:ta.data)==null?void 0:ra.hasPrevPage,setPage:ha,setPerPage:pa})})]})})]})})]})}function Ea(){return a.jsx(Ha,{title:"",subTitle:"",children:a.jsx("div",{className:"",children:a.jsx(Ga,{})})})}export{Ea as default};