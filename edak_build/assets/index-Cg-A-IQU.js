import{r as c,a as K,s as N,j as e,t as i,v as t,C as d,S as $,w as H,x as L,y as M,z as g}from"./index-C5MO9rrP.js";import{P as Q}from"./index-DUmdmIIx.js";import{T as U,a as z,b as h,c as a,d as G,e as n}from"./table-CFdBk2Cs.js";import{N as f}from"./chart-CPsXNLhD.js";import{T as W,a as Y,b as V,c as q}from"./tabs-ciDTUg9Y.js";import"./pagination-CZHHo4FS.js";import"./badge-D_zcal2d.js";import"./index-CM4W6OqZ.js";import"./circle-check-big-GDtIN0nv.js";import"./index-8JwjhRSi.js";function Z(){var b,y,T,w,m,C,k,F,S,D,E,O,R,A,I,P,_,B,X;c.useState(1),c.useState(5),c.useState("");const[J,u]=c.useState(!0),[p,v]=c.useState(!1),{user:r}=K(),s=N({api:`${(b=g)==null?void 0:b.getDashboardDetails}?page=1&limit=10`,key:"getAllComplaint",options:{enabled:!0}}),o=N({api:`${(y=g)==null?void 0:y.getDashboardtotEdak}`,key:"getEdaksCountYearly",options:{enabled:!0}}),j=N({api:`${(T=g)==null?void 0:T.getDashboardtotFiles}`,key:"getFilesCountYearly",options:{enabled:!0}});return c.useEffect(()=>{(async()=>{v(!0);try{await Promise.all([o.refetch(),j.refetch()])}catch(x){console.error("API call failed:",x)}finally{v(!1)}})()},[J]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:""}),e.jsxs("div",{className:"col-span-1 ml-10 grid gap-4 md:grid-cols-4",children:[e.jsx("div",{children:e.jsx(i,{children:e.jsx(t,{children:e.jsxs(d,{className:"flex items-center justify-between text-lg font-bold",children:[e.jsx("div",{className:"mr-2 inline-flex h-8 w-8 flex-initial items-center justify-center overflow-hidden rounded-full bg-indigo-500",children:e.jsx(f,{className:"inline text-white"})})," ",e.jsx("div",{className:"flex-initial",children:"Total E-Dak"})," ",e.jsx(d,{className:"flex flex-1 justify-end text-xl font-bold",children:(m=(w=s==null?void 0:s.data)==null?void 0:w.data[0])==null?void 0:m.totalEdakCount})]})})})}),e.jsx("div",{children:e.jsx(i,{children:e.jsx(t,{children:e.jsxs(d,{className:"flex items-center justify-between text-lg font-bold",children:[e.jsx("div",{className:"mr-2 inline-flex h-8 w-8 flex-initial items-center justify-center overflow-hidden rounded-full bg-green-500",children:e.jsx(f,{className:"inline text-white"})})," ",e.jsxs("div",{className:"flex-initial",children:["Mail-"," ",(F=(k=(C=s==null?void 0:s.data)==null?void 0:C.data[0])==null?void 0:k.edakCategoryCount[1])==null?void 0:F.count]})," ",e.jsx(d,{className:"flex flex-1 justify-end text-xl font-bold"})]})})})}),e.jsx("div",{children:e.jsx(i,{children:e.jsx(t,{children:e.jsxs(d,{className:"flex items-center justify-between text-lg font-bold",children:[e.jsx("div",{className:"mr-2 inline-flex h-8 w-8 flex-initial items-center justify-center overflow-hidden rounded-full bg-green-500",children:e.jsx(f,{className:"inline text-white"})})," ",e.jsxs("div",{className:"flex-initial",children:["Email-"," ",(E=(D=(S=s==null?void 0:s.data)==null?void 0:S.data[0])==null?void 0:D.edakCategoryCount[0])==null?void 0:E.count]})," ",e.jsx(d,{className:"flex flex-1 justify-end text-xl font-bold"})]})})})}),e.jsx("div",{children:e.jsx(i,{children:e.jsx(t,{children:e.jsxs(d,{className:"flex items-center justify-between text-lg font-bold",children:[e.jsx("div",{className:"mr-2 inline-flex h-8 w-8 flex-initial items-center justify-center overflow-hidden rounded-full bg-yellow-500",children:e.jsx(f,{className:"inline text-white"})})," ",e.jsx("div",{className:"flex-initial",children:"Total Files "})," ",e.jsx(d,{className:"flex flex-1 justify-end text-xl font-bold",children:(R=(O=s==null?void 0:s.data)==null?void 0:O.data[0])==null?void 0:R.totalFilesCount})]})})})}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("main",{className:"grid items-start",children:e.jsxs(W,{defaultValue:"INBOX",className:"w-full",children:[e.jsx("div",{className:"flex",children:e.jsx("div",{className:"mt-5 flex flex-1",children:e.jsxs(Y,{className:"flex gap-5",children:[(r==null?void 0:r.role)!="Nodal Officer"&&e.jsx(e.Fragment,{children:(r==null?void 0:r.roleId)!==$&&e.jsx(V,{value:"INBOX",onClick:()=>{u(!0)},children:"Recent Files"})}),(r==null?void 0:r.roleId)!==$&&e.jsx(V,{value:"OUTBOX",onClick:()=>{u(!1)},children:"Recent E-Dak"})]})})}),e.jsx(q,{value:"INBOX",children:e.jsx("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:e.jsxs(i,{children:[e.jsx(t,{className:"px-7",children:e.jsxs(H,{children:["File List(","5",")"]})}),e.jsx(L,{children:p?e.jsx("div",{className:"flex h-32 items-center justify-center",children:e.jsx(M,{})}):e.jsx(e.Fragment,{children:e.jsxs(U,{children:[e.jsx(z,{children:e.jsxs(h,{children:[e.jsx(a,{className:"",children:"S No"}),e.jsx(a,{className:"",children:"Ref No"}),e.jsx(a,{className:"",children:"Title"}),e.jsx(a,{className:"",children:"Created By"}),e.jsx(a,{className:"",children:"Sent To"}),e.jsx(a,{className:"",children:"Department"}),e.jsx(a,{className:"",children:"Date"}),e.jsx(a,{className:"",children:"Status"})]})}),e.jsx(G,{children:(P=(I=(A=j==null?void 0:j.data)==null?void 0:A.data)==null?void 0:I.recentData)==null?void 0:P.map((l,x)=>e.jsxs(h,{children:[e.jsx(n,{children:x+1}),e.jsx(n,{children:l==null?void 0:l.fileRefNo}),e.jsx(n,{children:l==null?void 0:l.title}),e.jsx(n,{children:l==null?void 0:l.receivedFromFullName}),e.jsx(n,{children:l==null?void 0:l.sendToFullName}),e.jsx(n,{children:l==null?void 0:l.department}),e.jsx(n,{children:l==null?void 0:l.createdAt.split("T")[0]}),e.jsx(n,{className:"float-end font-bold text-green-500",children:l==null?void 0:l.sendToFullName})]}))})]})})})]})})}),e.jsx(q,{value:"OUTBOX",children:e.jsx("div",{className:"grid auto-rows-max items-start gap-4 md:gap-2 lg:col-span-2",children:e.jsxs(i,{children:[e.jsx(t,{className:"px-7",children:e.jsxs(H,{children:["E-Dak (","5",")"]})}),e.jsx(L,{children:p?e.jsx("div",{className:"flex h-32 items-center justify-center",children:e.jsx(M,{})}):e.jsx(e.Fragment,{children:e.jsxs(U,{children:[e.jsx(z,{children:e.jsxs(h,{children:[e.jsx(a,{className:"",children:"S No"}),e.jsx(a,{className:"",children:"Edak Ref No"}),e.jsx(a,{className:"",children:"Receved Date"}),e.jsx(a,{className:"",children:"Receved From"}),e.jsx(a,{className:"",children:"Category"}),e.jsx(a,{className:"",children:"Department"}),e.jsx(a,{className:"",children:"Date"}),e.jsx(a,{className:"",children:"Status"})]})}),e.jsx(G,{children:(X=(B=(_=o==null?void 0:o.data)==null?void 0:_.data)==null?void 0:B.recentData)==null?void 0:X.map((l,x)=>e.jsxs(h,{children:[e.jsx(n,{children:x+1}),e.jsx(n,{children:l==null?void 0:l.edakRefNo}),e.jsx(n,{children:l==null?void 0:l.receivedDate}),e.jsx(n,{children:l==null?void 0:l.receivedFrom}),e.jsx(n,{children:l==null?void 0:l.category}),e.jsx(n,{children:l==null?void 0:l.departmentAlloted}),e.jsx(n,{children:l==null?void 0:l.createdAt.split("T",[1])}),e.jsx(n,{className:"font-bold text-green-500",children:l!=null&&l.role?e.jsxs(e.Fragment,{children:[(l==null?void 0:l.role)==="no_pending"&&"Pending at Nodal Officer",(l==null?void 0:l.role)==="co_pending"&&"Pending at Commissioner",(l==null?void 0:l.role)==="si_acknowledge"&&"Acknowledge by SI",(l==null?void 0:l.role)==="si_pending"&&"Pending at Section Incharge"]}):(l==null?void 0:l.draft)===!1&&"Sent to Nodal Officer"})]},l._id))})]})})})]})})})]})})]})}function xe(){return e.jsx(Q,{title:"E-Dak / File Management Dashboard",subTitle:"",children:e.jsx(Z,{})})}export{xe as default};