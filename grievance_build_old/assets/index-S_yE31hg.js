import{b4 as Y,b as Z,o as O,j as e,F as Q,C as G,Z as U,R as W,B as X,t as M,v as ee,A as n,w as ae,a0 as d,L as J,z as se,c as ce,d as re,g as le,_ as D,I as de}from"./index-BPLd3KZk.js";import{T as ie,a as ne,b as E,c,d as te,e as r}from"./table-BZJ3KWET.js";import{S as me}from"./Spinner-DL6YUnjb.js";const oe=ce().shape({complaintNo:re().required("Complaint No. is Required")});function xe(){var t,m,o,x,h,j,N,p,b,g,f,u,v,y,C,w,R,S,T,k,F,_,L,B,I,P,$,z,H;const a=Y(),l=Z({resolver:O(oe)}),K=async i=>{var A,q,V;try{const s=await a.mutateAsync({api:`${le.getComplaintDetailsByComplaintNo}/${i==null?void 0:i.complaintNo}`});(A=s.data)!=null&&A.success?D.success((q=s==null?void 0:s.data)==null?void 0:q.message):D.error((V=s==null?void 0:s.data)==null?void 0:V.message),l.reset({ulbId:"",moduleId:""})}catch(s){console.log(s)}};return e.jsxs(e.Fragment,{children:[e.jsx(Q,{methods:l,onSubmit:l.handleSubmit(K),children:e.jsxs("div",{className:"md:px-24 space-y-4",children:[e.jsx(G,{className:"text-xl text-primary font-bold",children:"Track Complaint"}),e.jsxs("div",{children:[e.jsx(U,{htmlFor:"complaintNo",children:"Complaint Number"}),e.jsx(W,{className:"bg-background",name:"complaintNo",placeholder:""})]}),e.jsx("div",{className:"col-span-3",children:e.jsx(X,{isLoading:l.formState.isSubmitting,type:"submit",className:" w-auto rounded-xl px-10 float-right",children:"Submit"})})]})}),((m=(t=a==null?void 0:a.data)==null?void 0:t.data)==null?void 0:m.success)&&e.jsx("div",{className:"mt-20 md:px-24",children:e.jsxs(M,{children:[e.jsx(ee,{className:"px-7",children:e.jsx(n,{children:"Complaint List"})}),e.jsx(ae,{children:a.isPending?e.jsx("div",{className:"flex h-32 items-center justify-center",children:e.jsx(me,{})}):e.jsxs(ie,{children:[e.jsx(ne,{children:e.jsxs(E,{children:[e.jsx(c,{className:"",children:"Complaint No."}),e.jsx(c,{className:"",children:"Citizen Name"}),e.jsx(c,{className:"",children:"Mobile No."}),e.jsx(c,{className:"",children:"Status"}),e.jsx(c,{className:"",children:"View"})]})}),e.jsx(te,{children:e.jsxs(E,{children:[e.jsx(r,{children:(h=(x=(o=a==null?void 0:a.data)==null?void 0:o.data)==null?void 0:x.data)==null?void 0:h.complaintRefNo}),e.jsx(r,{children:(p=(N=(j=a==null?void 0:a.data)==null?void 0:j.data)==null?void 0:N.data)==null?void 0:p.citizenName}),e.jsx(r,{children:(f=(g=(b=a==null?void 0:a.data)==null?void 0:b.data)==null?void 0:g.data)==null?void 0:f.mobileNo}),e.jsxs(r,{children:[((y=(v=(u=a==null?void 0:a.data)==null?void 0:u.data)==null?void 0:v.data)==null?void 0:y.wf_status)===3&&e.jsx(d,{className:"bg-amber-400 text-white",children:"Pending(re-opened)"}),((R=(w=(C=a==null?void 0:a.data)==null?void 0:C.data)==null?void 0:w.data)==null?void 0:R.wf_status)===2&&e.jsx(d,{variant:"destructive",children:"Rejected"}),((k=(T=(S=a==null?void 0:a.data)==null?void 0:S.data)==null?void 0:T.data)==null?void 0:k.wf_status)===1&&e.jsx(d,{variant:"success",children:"Resolved"}),((L=(_=(F=a==null?void 0:a.data)==null?void 0:F.data)==null?void 0:_.data)==null?void 0:L.wf_status)===0&&e.jsx(d,{variant:"secondary",children:"Pending"})]}),e.jsx(r,{children:e.jsx(J,{to:`/grievance/citizen/complaint-details?complaintRefNo=${(P=(I=(B=a==null?void 0:a.data)==null?void 0:B.data)==null?void 0:I.data)==null?void 0:P.complaintRefNo}
                         &complaintId=${(H=(z=($=a==null?void 0:a.data)==null?void 0:$.data)==null?void 0:z.data)==null?void 0:H._id}`,children:e.jsx(se,{className:"bg-primary",onClick:()=>{},children:"View"})})})]})})]})})]})})]})}function pe(){return e.jsxs("div",{className:"grid sm:grid-cols-4 grid-cols-1",children:[e.jsxs("div",{className:"col-span-4 md:col-span-1 flex items-center flex-col md:px-10 mt-10 space-y-4 hidden sm:block",children:[e.jsx(G,{className:"text-xl text-primary font-bold",children:"Track your complaint here"}),e.jsx(de,{src:"/images/complain_boy.png",className:"w-40"}),e.jsx(n,{className:"text-center",children:"Fee free to give us your feedback"}),e.jsxs(n,{className:"text-center",children:["Your feedback is very important for us to enhance our system, Please feel free to give us your valuable feedback.",e.jsx(J,{target:"_blank",className:"underline hover:text-primary",to:"https://maps.app.goo.gl/ncVp959LoSja4uAh8",children:"Jan Seva Kendra"})," for further query. & Feel free to contact us on +918458697845"]})]}),e.jsx("div",{className:"col-span-4 md:col-span-3 p-2 sm:p-10 bg-gray-50 h-screen",children:e.jsx(xe,{})})]})}export{pe as default};