import{u as L,j as e,I as O,B as S,p as B}from"./index-D2x4qM7I.js";import{P as V}from"./index-C4_n4r7E.js";import{C as W,I as k}from"./Image-R6jjT0jZ.js";import{c as z}from"./useCustomQuery-BXR05xmK.js";import{h as t}from"./moment-BjLXg0w5.js";import{S as M}from"./separator-FRXTT2SD.js";import{b as E}from"./router-DLL89Qev.js";import"./axios-DmypytPv.js";import"./headlessui-DXpdh5LM.js";function D(){var m,o,n,l,i,d,c,x,h,f,j,N;const{user:a}=L(),Y=E(),r=new URLSearchParams(Y.search).get("receipt_no"),s=z({api:`${B.inReceipt}/${r}`,key:"outReceipt",options:{enabled:!!r}}),A=()=>{var g,u,p,y,b,v,T,_,w,P,I,C;return`[C]Ranchi Municipal Corporation
[C]Parking
 
Date: `+t((u=(g=s==null?void 0:s.data)==null?void 0:g.data)==null?void 0:u.date).format("DD-MM-YYYY")+`
In-Time: `+t((y=(p=s==null?void 0:s.data)==null?void 0:p.data)==null?void 0:y.in_time,"HH:mm").format("hh:mm A")+`
Out-Time: `+((v=(b=s==null?void 0:s.data)==null?void 0:b.data)==null?void 0:v.out_time)+`
Amount: `+((_=(T=s==null?void 0:s.data)==null?void 0:T.data)==null?void 0:_.amount)+`
Vehicle No: `+((P=(w=s==null?void 0:s.data)==null?void 0:w.data)==null?void 0:P.vehicle_no)+`
Incharge ID: `+(a==null?void 0:a.emp_id)+`
Receipt: `+((C=(I=s==null?void 0:s.data)==null?void 0:I.data)==null?void 0:C.receipt_no)+`

Thank You for using our service!

*******************************`},H=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:A()}}))};return s!=null&&s.isLoading?e.jsx("div",{className:"flex justify-center items-center h-[700px]",children:e.jsx(O,{})}):e.jsx(V,{title:"Receipt",children:e.jsx("div",{className:"p-4",children:e.jsx(W,{children:e.jsxs("div",{className:"flex flex-col justify-center items-center py-8 px-10",children:[e.jsx("div",{children:e.jsx(k,{src:"/assets/image/RMC_LOGO.png",alt:"receipt"})}),e.jsx("div",{className:"flex flex-col md:flex-row",children:e.jsxs("div",{className:"flex flex-col justify-center items-center",children:[e.jsx("div",{className:"flex mt-2 ",children:e.jsx("h2",{style:{fontWeight:500,fontSize:20},className:"text-[#585858]",children:"Ranchi Municipal Corporation"})}),e.jsxs("div",{className:"flex flex-row justify-center items-center",children:[e.jsx("h1",{className:"text-md font-bold break-words text-[#1436C3]",children:"Parking Management System"}),e.jsx(k,{src:"/assets/image/bus 1.png",alt:"Bus",className:"ml-2 max-w-full h-5 w-5"})]})]})}),e.jsx(M,{className:"mt-5 mb-5"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-20 gap-y-2",children:[e.jsx("h1",{className:"text-sm font-semibold text-gray-600 ",children:"Date:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:t((o=(m=s==null?void 0:s.data)==null?void 0:m.data)==null?void 0:o.date).format("DD-MM-YYYY")}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"In Time:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:t((l=(n=s==null?void 0:s.data)==null?void 0:n.data)==null?void 0:l.in_time,"HH:mm").format("hh:mm A")}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Out Time:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:t((d=(i=s==null?void 0:s.data)==null?void 0:i.data)==null?void 0:d.out_time,"HH:mm").format("hh:mm A")}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Amount:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:(x=(c=s==null?void 0:s.data)==null?void 0:c.data)==null?void 0:x.amount}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Vehicle No:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:(f=(h=s==null?void 0:s.data)==null?void 0:h.data)==null?void 0:f.vehicle_no}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Receipt no:"}),e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:(N=(j=s==null?void 0:s.data)==null?void 0:j.data)==null?void 0:N.receipt_no})]}),e.jsx(M,{className:"mt-5 mb-5"}),e.jsx("div",{className:"flex justify-center w-full",children:e.jsx(S,{size:"sm",onClick:H,children:"Print Receipt"})})]})})})})}export{D as default};