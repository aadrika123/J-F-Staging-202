import{u as S,j as e,I as Y,B as H,p as O}from"./index-2S3dvlvG.js";import{P as B}from"./index-Cf4WRWsD.js";import{C as z,I as w}from"./Image-C6ufnThr.js";import{c as V}from"./useCustomQuery-w-fCFI_Y.js";import{h as a}from"./moment-BjLXg0w5.js";import{S as A}from"./separator-BEygEndg.js";import{b as $}from"./router-DLL89Qev.js";import"./axios-DmypytPv.js";import"./headlessui-DXpdh5LM.js";function R(){var r,n,o,l,d,i,x,c,h,f,j,u;const{user:t}=S(),M=$(),m=new URLSearchParams(M.search).get("receipt_no"),s=V({api:`${O.inReceipt}/${m}`,key:"outReceipt",options:{enabled:!!m}}),L=()=>{var g,N,p,y,b,v,_,C,I,k,P,T;return`[C]Ranchi Municipal Corporation
[C]Parking
 
Date: `+((N=(g=s==null?void 0:s.data)==null?void 0:g.data)==null?void 0:N.date)+`
 
In-Time: `+((y=(p=s==null?void 0:s.data)==null?void 0:p.data)==null?void 0:y.in_time)+`
 
Out-Time: `+((v=(b=s==null?void 0:s.data)==null?void 0:b.data)==null?void 0:v.out_time)+`
 
Amount: `+((C=(_=s==null?void 0:s.data)==null?void 0:_.data)==null?void 0:C.amount)+`
 
Vehicle No: `+((k=(I=s==null?void 0:s.data)==null?void 0:I.data)==null?void 0:k.vehicle_no)+`
 
Incharge ID: `+(t==null?void 0:t.emp_id)+`
 
Receipt: `+((T=(P=s==null?void 0:s.data)==null?void 0:P.data)==null?void 0:T.receipt_no)+`

 
Thank You for using our service!

 
*******************************`};return s!=null&&s.isLoading?e.jsx("div",{className:"flex justify-center items-center h-[700px]",children:e.jsx(Y,{})}):e.jsx(B,{title:"Receipt",children:e.jsx("div",{className:"p-4",children:e.jsx(z,{children:e.jsxs("div",{className:"flex flex-col justify-center items-center py-8 px-10",children:[e.jsx("div",{children:e.jsx(w,{src:"/assets/image/RMC_LOGO.png",alt:"receipt"})}),e.jsx("div",{className:"flex flex-col md:flex-row",children:e.jsxs("div",{className:"flex flex-col justify-center items-center",children:[e.jsx("div",{className:"flex mt-2 ",children:e.jsx("h2",{style:{fontWeight:500,fontSize:20},className:"text-[#585858]",children:"Ranchi Municipal Corporation"})}),e.jsxs("div",{className:"flex flex-row justify-center items-center",children:[e.jsx("h1",{className:"text-md font-bold break-words text-[#1436C3]",children:"Parking Management System"}),e.jsx(w,{src:"/assets/image/bus 1.png",alt:"Bus",className:"ml-2 max-w-full h-5 w-5"})]})]})}),e.jsx(A,{className:"mt-5 mb-5"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-20 gap-y-2",children:[e.jsx("h1",{className:"text-sm font-semibold text-gray-600 ",children:"Date:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:a((n=(r=s==null?void 0:s.data)==null?void 0:r.data)==null?void 0:n.date).format("DD-MM-YYYY")}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"In Time:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:a((l=(o=s==null?void 0:s.data)==null?void 0:o.data)==null?void 0:l.in_time,"HH:mm").format("hh:mm A")}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Out Time:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:a((i=(d=s==null?void 0:s.data)==null?void 0:d.data)==null?void 0:i.out_time,"HH:mm").format("hh:mm A")}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Amount:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:(c=(x=s==null?void 0:s.data)==null?void 0:x.data)==null?void 0:c.amount}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Vehicle No:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:(f=(h=s==null?void 0:s.data)==null?void 0:h.data)==null?void 0:f.vehicle_no}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Receipt no:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:(u=(j=s==null?void 0:s.data)==null?void 0:j.data)==null?void 0:u.receipt_no})]}),e.jsx(A,{className:"mt-5 mb-5"}),e.jsx("div",{className:"flex justify-center w-full",children:e.jsx(H,{size:"sm",onClick:L,children:"Print Receipt"})})]})})})})}export{R as default};
