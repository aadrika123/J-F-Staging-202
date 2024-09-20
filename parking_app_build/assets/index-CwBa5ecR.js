import{u as C,j as s,I,B as _,p as k}from"./index-2S3dvlvG.js";import{P as M}from"./index-Cf4WRWsD.js";import{C as Y,I as v}from"./Image-C6ufnThr.js";import{c as A}from"./useCustomQuery-w-fCFI_Y.js";import{h as a}from"./moment-BjLXg0w5.js";import{S as w}from"./separator-BEygEndg.js";import{b as L}from"./router-DLL89Qev.js";import"./axios-DmypytPv.js";import"./headlessui-DXpdh5LM.js";function K(){var r,o,m,n,l,c,x,d;const{user:e}=C(),u=L(),i=new URLSearchParams(u.search).get("receipt_no"),t=A({api:`${k.inReceipt}/${i}`,key:"outReceipt",options:{enabled:!!i}}),P=()=>{var h,f,j,p,N,y,b,g;return`[C]Ranchi Municipal Corporation
[C]Parking
 
Date: `+a((f=(h=t==null?void 0:t.data)==null?void 0:h.data)==null?void 0:f.date).format("DD-MM-YYYY")+`
 
In-Time:: `+((p=(j=t==null?void 0:t.data)==null?void 0:j.data)==null?void 0:p.in_time)+`
 
Amount: `+((y=(N=t==null?void 0:t.data)==null?void 0:N.data)==null?void 0:y.amount)+`
 
Incharge ID: `+(e==null?void 0:e.emp_id)+`
 
Receipt: `+((g=(b=t==null?void 0:t.data)==null?void 0:b.data)==null?void 0:g.receipt_no)+`

 
Thank You for using our service!

 
*******************************`},T=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:P()}}))};return t!=null&&t.isLoading?s.jsx("div",{className:"flex justify-center items-center h-[700px]",children:s.jsx(I,{})}):s.jsx(M,{title:"Receipt",children:s.jsx("div",{className:"p-4",children:s.jsx(Y,{children:s.jsxs("div",{className:"flex flex-col justify-center items-center py-8 px-10",children:[s.jsx("div",{children:s.jsx(v,{src:"/assets/image/RMC_LOGO.png",alt:"receipt"})}),s.jsx("div",{className:"flex flex-col md:flex-row",children:s.jsxs("div",{className:"flex flex-col justify-center items-center",children:[s.jsx("div",{className:"flex mt-2 ",children:s.jsx("h2",{style:{fontWeight:500,fontSize:20},className:"text-[#585858]",children:"Ranchi Municipal Corporation"})}),s.jsxs("div",{className:"flex flex-row justify-center items-center",children:[s.jsx("h1",{className:"text-md font-bold break-words text-[#1436C3]",children:"Parking Management System"}),s.jsx(v,{src:"/assets/image/bus 1.png",alt:"Bus",className:"ml-2 max-w-full h-5 w-5"})]})]})}),s.jsx(w,{className:"mt-5 mb-5"}),s.jsxs("div",{className:"grid grid-cols-2 gap-x-20 gap-y-2",children:[s.jsx("h1",{className:"text-sm font-semibold text-gray-600 ",children:"Date:"}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:a((o=(r=t==null?void 0:t.data)==null?void 0:r.data)==null?void 0:o.date).format("DD-MM-YYYY")}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"In Time:"}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:a((n=(m=t==null?void 0:t.data)==null?void 0:m.data)==null?void 0:n.in_time,"HH:mm").format("hh:mm A")}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Amount:"}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:(c=(l=t==null?void 0:t.data)==null?void 0:l.data)==null?void 0:c.amount}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Receipt no:"}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:(d=(x=t==null?void 0:t.data)==null?void 0:x.data)==null?void 0:d.receipt_no})]}),s.jsx(w,{className:"mt-5 mb-5"}),s.jsx("div",{className:"flex justify-center w-full",children:s.jsx(_,{size:"sm",onClick:T,children:"Print Receipt"})})]})})})})}export{K as default};
