import{r as w,a as ua,s as b,g as P,j as a,C as va,V as C,t as y,v as T,H as R,w as _,S,x as N,a3 as r,L as $,G as I,y as O}from"./index-CofEzg_5.js";import{P as wa}from"./index-BmDnkvLo.js";import{T as A,a as k,b as t,c as e,d as B,e as d}from"./table-uOXl51WU.js";import{P as Y}from"./index-Bb-XZWum.js";import{S as M}from"./index-C7p_TlFN.js";import{T as ba,a as Pa,b as F,c as E}from"./tabs-BdZt3cJA.js";function Ca(){var U,V,X,H,q,z,G,L,W,J,K,Q,Z,D,m,aa,la,ea,da,ca,na,sa,ra,xa,ha,ja,oa,ia,Na,fa,ta,ga,pa;const[x,p]=w.useState(1),[h,u]=w.useState(10),[f,v]=w.useState(""),{user:j}=ua(),c=b({api:`${P.getComplaintInbox}?page=${x}&limit=${h}&q=${f}`,key:"getComplaintInboxList",value:[x,h],options:{enabled:!0}}),n=b({api:`${P.getComplaintOutbox}?page=${x}&limit=${h}&q=${f}`,key:"getComplaintOutboxList",value:[x,h],options:{enabled:!0}}),s=b({api:`${P.getComplaintSpecial}?page=${x}&limit=${h}&q=${f}`,key:"getComplaintSpecialList",value:[x,h],options:{enabled:!0}});return a.jsx("main",{className:"grid items-start",children:a.jsxs(ba,{defaultValue:"INBOX",className:"w-full",children:[a.jsxs("div",{className:"flex",children:[a.jsx(va,{className:"flex-1 text-2xl font-bold",children:"Registered Complaint List"}),a.jsx("div",{className:"flex-1 flex justify-end",children:a.jsxs(Pa,{className:"grid w-auto grid-cols-3",children:[(j==null?void 0:j.roleId)!==C&&a.jsx(F,{value:"INBOX",children:"Complaint Inbox"}),(j==null?void 0:j.roleId)!==C&&a.jsx(F,{value:"OUTBOX",children:"Complaint Outbox"}),(j==null?void 0:j.roleId)!==C&&a.jsx(F,{value:"SPECIAL",children:"Special Complaints"})]})})]}),a.jsx(E,{value:"INBOX",children:a.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:[a.jsxs("div",{className:"flex w-full justify-between gap-2",children:[a.jsx("div",{children:a.jsx(M,{search:f,setSearch:v,refetch:c.refetch,isFetching:c.isLoading})}),a.jsx("div",{})]}),a.jsxs(y,{children:[a.jsx(T,{className:"px-7",children:a.jsxs(R,{children:["Complaint List Inbox (",(V=(U=c.data)==null?void 0:U.data)==null?void 0:V.totalDocs,")"]})}),a.jsx(_,{children:c.isLoading?a.jsx("div",{className:"flex h-32 items-center justify-center",children:a.jsx(S,{})}):a.jsxs(a.Fragment,{children:[a.jsxs(A,{children:[a.jsx(k,{children:a.jsxs(t,{children:[a.jsx(e,{className:"",children:"#"}),a.jsx(e,{className:"",children:"Name"}),a.jsx(e,{className:"",children:"Title"}),a.jsx(e,{className:"",children:"ULB"}),a.jsx(e,{className:"",children:"Complaint No."}),a.jsx(e,{className:"",children:"Module"}),a.jsx(e,{className:"",children:"Date"}),a.jsx(e,{className:"",children:"Status"}),a.jsx(e,{children:"Action"})]})}),a.jsx(B,{children:(q=(H=(X=c==null?void 0:c.data)==null?void 0:X.data)==null?void 0:H.docs)==null?void 0:q.map((l,g)=>{var o,i;return a.jsxs(t,{children:[a.jsx(d,{children:g+1}),a.jsx(d,{children:l==null?void 0:l.citizenName}),a.jsx(d,{className:"font-semibold",children:l==null?void 0:l.complaintTitle}),a.jsx(d,{children:(o=l==null?void 0:l.ulb)==null?void 0:o.ulbName}),a.jsx(d,{children:l==null?void 0:l.complaintRefNo}),a.jsx(d,{children:(i=l==null?void 0:l.module)==null?void 0:i.moduleName}),a.jsx(d,{children:N(l==null?void 0:l.createdAt).format("DD-MM-YYYY")}),a.jsxs(d,{children:[(l==null?void 0:l.wf_status)===4&&a.jsx(r,{variant:"destructive",children:"Closed"}),(l==null?void 0:l.wf_status)===3&&a.jsx(r,{className:"bg-amber-500 text-white",children:"Pending(Re-Opened)"}),(l==null?void 0:l.wf_status)===2&&a.jsx(r,{variant:"destructive",children:"Rejected"}),(l==null?void 0:l.wf_status)===1&&a.jsx(r,{variant:"success",children:"Resolved"}),(l==null?void 0:l.wf_status)===0&&a.jsx(r,{variant:"secondary",children:"Pending"})]}),a.jsx(d,{children:a.jsx($,{to:`/grievance/dashboard/workflow-details?complaintRefNo=${l==null?void 0:l.complaintRefNo}&complaintId=${l==null?void 0:l._id}`,children:a.jsx(I,{className:"bg-primary",onClick:()=>{},children:"View"})})})]},l._id)})})]}),a.jsx(O,{className:"mb-2 mt-4"}),a.jsx("div",{className:"flex w-full justify-end",children:a.jsx(Y,{page:x,perPage:h,totalPage:(G=(z=c==null?void 0:c.data)==null?void 0:z.data)==null?void 0:G.totalDocs,hasNextPage:(W=(L=c==null?void 0:c.data)==null?void 0:L.data)==null?void 0:W.hasNextPage,hasPrevPage:(K=(J=c==null?void 0:c.data)==null?void 0:J.data)==null?void 0:K.hasPrevPage,setPage:p,setPerPage:u})})]})})]})]})}),a.jsx(E,{value:"OUTBOX",children:a.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:[a.jsxs("div",{className:"flex w-full justify-between gap-2",children:[a.jsx("div",{children:a.jsx(M,{search:f,setSearch:v,refetch:n.refetch,isFetching:n.isLoading})}),a.jsx("div",{})]}),a.jsxs(y,{children:[a.jsx(T,{className:"px-7",children:a.jsxs(R,{children:["Complaint List Outbox (",(Z=(Q=n.data)==null?void 0:Q.data)==null?void 0:Z.totalDocs,")"]})}),a.jsx(_,{children:n.isLoading?a.jsx("div",{className:"flex h-32 items-center justify-center",children:a.jsx(S,{})}):a.jsxs(a.Fragment,{children:[a.jsxs(A,{children:[a.jsx(k,{children:a.jsxs(t,{children:[a.jsx(e,{className:"",children:"#"}),a.jsx(e,{className:"",children:"Name"}),a.jsx(e,{className:"",children:"Title"}),a.jsx(e,{className:"",children:"ULB"}),a.jsx(e,{className:"",children:"Complaint No."}),a.jsx(e,{className:"",children:"Module"}),a.jsx(e,{className:"",children:"Date"}),a.jsx(e,{className:"",children:"Status"}),a.jsx(e,{className:"",children:"Pending From"}),a.jsx(e,{children:"Action"})]})}),a.jsx(B,{children:(aa=(m=(D=n==null?void 0:n.data)==null?void 0:D.data)==null?void 0:m.docs)==null?void 0:aa.map((l,g)=>{var o,i;return a.jsxs(t,{children:[a.jsx(d,{children:g+1}),a.jsx(d,{children:l==null?void 0:l.citizenName}),a.jsx(d,{className:"font-semibold",children:l==null?void 0:l.complaintTitle}),a.jsx(d,{children:(o=l==null?void 0:l.ulb)==null?void 0:o.ulbName}),a.jsx(d,{children:l==null?void 0:l.complaintRefNo}),a.jsx(d,{children:(i=l==null?void 0:l.module)==null?void 0:i.moduleName}),a.jsx(d,{children:N(l==null?void 0:l.createdAt).format("DD-MM-YYYY")}),a.jsxs(d,{children:[(l==null?void 0:l.wf_status)===4&&a.jsx(r,{variant:"destructive",children:"Closed"}),(l==null?void 0:l.wf_status)===3&&a.jsx(r,{className:"bg-amber-500 text-white",children:"Pending(Re-Opened)"}),(l==null?void 0:l.wf_status)===2&&a.jsx(r,{variant:"destructive",children:"Rejected"}),(l==null?void 0:l.wf_status)===1&&a.jsx(r,{variant:"success",children:"Resolved"}),(l==null?void 0:l.wf_status)===0&&a.jsx(r,{variant:"secondary",children:"Pending"})]}),a.jsxs(d,{className:"flex justify-center items-center",children:[N().diff(N(l==null?void 0:l.createdAt),"days")," days"]}),a.jsx(d,{children:a.jsx($,{to:`/grievance/dashboard/workflow-details?complaintRefNo=${l==null?void 0:l.complaintRefNo}&complaintId=${l==null?void 0:l._id}`,children:a.jsx(I,{className:"bg-primary",onClick:()=>{},children:"View"})})})]},l._id)})})]}),a.jsx(O,{className:"mb-2 mt-4"}),a.jsx("div",{className:"flex w-full justify-end",children:a.jsx(Y,{page:x,perPage:h,totalPage:(ea=(la=n==null?void 0:n.data)==null?void 0:la.data)==null?void 0:ea.totalDocs,hasNextPage:(ca=(da=n==null?void 0:n.data)==null?void 0:da.data)==null?void 0:ca.hasNextPage,hasPrevPage:(sa=(na=n==null?void 0:n.data)==null?void 0:na.data)==null?void 0:sa.hasPrevPage,setPage:p,setPerPage:u})})]})})]})]})}),a.jsx(E,{value:"SPECIAL",children:a.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:[a.jsxs("div",{className:"flex w-full justify-between gap-2",children:[a.jsx("div",{children:a.jsx(M,{search:f,setSearch:v,refetch:s.refetch,isFetching:s.isLoading})}),a.jsx("div",{})]}),a.jsxs(y,{children:[a.jsx(T,{className:"px-7",children:a.jsxs(R,{children:["Complaint List Special (",(xa=(ra=s.data)==null?void 0:ra.data)==null?void 0:xa.totalDocs,") - ",a.jsx("span",{className:"text-amber-500",children:"This list contains special complaints"})]})}),a.jsx(_,{children:s.isLoading?a.jsx("div",{className:"flex h-32 items-center justify-center",children:a.jsx(S,{})}):a.jsxs(a.Fragment,{children:[a.jsxs(A,{children:[a.jsx(k,{children:a.jsxs(t,{children:[a.jsx(e,{className:"",children:"#"}),a.jsx(e,{className:"",children:"Name"}),a.jsx(e,{className:"",children:"Title"}),a.jsx(e,{className:"",children:"ULB"}),a.jsx(e,{className:"",children:"Complaint No."}),a.jsx(e,{className:"",children:"Module"}),a.jsx(e,{className:"",children:"Date"}),a.jsx(e,{className:"",children:"Status"}),a.jsx(e,{className:"",children:"Pending From"}),a.jsx(e,{children:"Action"})]})}),a.jsx(B,{children:(oa=(ja=(ha=s==null?void 0:s.data)==null?void 0:ha.data)==null?void 0:ja.docs)==null?void 0:oa.map((l,g)=>{var o,i;return a.jsxs(t,{children:[a.jsx(d,{children:g+1}),a.jsx(d,{children:l==null?void 0:l.citizenName}),a.jsx(d,{className:"font-semibold",children:l==null?void 0:l.complaintTitle}),a.jsx(d,{children:(o=l==null?void 0:l.ulb)==null?void 0:o.ulbName}),a.jsx(d,{children:l==null?void 0:l.complaintRefNo}),a.jsx(d,{children:(i=l==null?void 0:l.module)==null?void 0:i.moduleName}),a.jsx(d,{children:N(l==null?void 0:l.createdAt).format("DD-MM-YYYY")}),a.jsxs(d,{children:[(l==null?void 0:l.wf_status)===4&&a.jsx(r,{variant:"destructive",children:"Closed"}),(l==null?void 0:l.wf_status)===3&&a.jsx(r,{className:"bg-amber-500 text-white",children:"Pending(Re-Opened)"}),(l==null?void 0:l.wf_status)===2&&a.jsx(r,{variant:"destructive",children:"Rejected"}),(l==null?void 0:l.wf_status)===1&&a.jsx(r,{variant:"success",children:"Resolved"}),(l==null?void 0:l.wf_status)===0&&a.jsx(r,{variant:"secondary",children:"Pending"})]}),a.jsxs(d,{className:"flex justify-center items-center",children:[N().diff(N(l==null?void 0:l.createdAt),"days")," days"]}),a.jsx(d,{children:a.jsx($,{to:`/grievance/dashboard/workflow-details?complaintRefNo=${l==null?void 0:l.complaintRefNo}&complaintId=${l==null?void 0:l._id}`,children:a.jsx(I,{className:"bg-primary",onClick:()=>{},children:"View"})})})]},l._id)})})]}),a.jsx(O,{className:"mb-2 mt-4"}),a.jsx("div",{className:"flex w-full justify-end",children:a.jsx(Y,{page:x,perPage:h,totalPage:(Na=(ia=s==null?void 0:s.data)==null?void 0:ia.data)==null?void 0:Na.totalDocs,hasNextPage:(ta=(fa=s==null?void 0:s.data)==null?void 0:fa.data)==null?void 0:ta.hasNextPage,hasPrevPage:(pa=(ga=s==null?void 0:s.data)==null?void 0:ga.data)==null?void 0:pa.hasPrevPage,setPage:p,setPerPage:u})})]})})]})]})})]})})}function Ia(){return a.jsx(wa,{title:"",subTitle:"",children:a.jsx("div",{className:"pb-12",children:a.jsx(Ca,{})})})}export{Ia as default};