import{u as A,j as s,I as C,B as M,p as L}from"./index-M04LaSJj.js";import{P as B}from"./index-BfcGHy2d.js";import{C as S,I as P}from"./Image-rws4B-UH.js";import{c as H}from"./useCustomQuery-BbKXHB6A.js";import{h as a}from"./moment-BjLXg0w5.js";import{S as T}from"./separator-CoCZ8ToE.js";import{b as O}from"./router-DLL89Qev.js";import"./axios-DmypytPv.js";import"./headlessui-DXpdh5LM.js";function Q(){var m,n,l,o,i,d,c,x,h,f;const k=O(),{user:t}=A(),r=new URLSearchParams(k.search).get("receipt_no"),e=H({api:`${L.inReceipt}/${r}`,key:"inReceipt",options:{enabled:!!r}}),I=()=>{var j,N,g,p,b,y,u,_,v,w;return"[C]"+(t==null?void 0:t.ulb_name)+`
[C]Parking
 
Date: `+a((N=(j=e==null?void 0:e.data)==null?void 0:j.data)==null?void 0:N.date).format("DD-MM-YYYY")+`
In-Time: `+a((p=(g=e==null?void 0:e.data)==null?void 0:g.data)==null?void 0:p.in_time,"HH:mm").format("hh:mm A")+`
Vehicle No: `+((y=(b=e==null?void 0:e.data)==null?void 0:b.data)==null?void 0:y.vehicle_no)+`
Incharge ID: `+(t==null?void 0:t.emp_id)+`
Area: `+((_=(u=e==null?void 0:e.data)==null?void 0:u.data)==null?void 0:_.parking_area)||`NA
Receipt: `+((w=(v=e==null?void 0:e.data)==null?void 0:v.data)==null?void 0:w.receipt_no)+`

Thank You for using our service!

*******************************`},Y=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:I()}}))};return e!=null&&e.isLoading?s.jsx("div",{className:"flex justify-center items-center h-[700px]",children:s.jsx(C,{})}):s.jsx(B,{title:"Receipt",children:s.jsx("div",{className:"p-4",children:s.jsx(S,{children:s.jsxs("div",{className:"flex flex-col justify-center items-center py-8 px-10",children:[s.jsx("div",{children:s.jsx(P,{src:(t==null?void 0:t.ulb_logo)??"/assets/image/RMC_LOGO.png",alt:"receipt"})}),s.jsx("div",{className:"flex flex-col md:flex-row",children:s.jsxs("div",{className:"flex flex-col justify-center items-center",children:[s.jsx("div",{className:"flex mt-2 ",children:s.jsx("h2",{className:"text-[#585858] font-bold text-lg text-center",children:t==null?void 0:t.ulb_name})}),s.jsxs("div",{className:"flex flex-row justify-center items-center",children:[s.jsx("h1",{className:"text-md font-bold break-words text-[#1436C3]",children:"Parking Management System"}),s.jsx(P,{src:"/assets/image/bus 1.png",alt:"Bus",className:"ml-2 max-w-full h-5 w-5"})]})]})}),s.jsx(T,{className:"mt-5 mb-5"}),s.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Date:"}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:a((n=(m=e==null?void 0:e.data)==null?void 0:m.data)==null?void 0:n.date).format("DD-MM-YYYY")}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"In Time:"}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:a((o=(l=e==null?void 0:e.data)==null?void 0:l.data)==null?void 0:o.in_time,"HH:mm").format("hh:mm A")}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Vehicle No:"}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:(d=(i=e==null?void 0:e.data)==null?void 0:i.data)==null?void 0:d.vehicle_no}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Address:"}),s.jsxs("h1",{className:"text-sm font-semibold text-gray-600",children:[(x=(c=e==null?void 0:e.data)==null?void 0:c.data)==null?void 0:x.address," Main Road, Ranchi, Jharkhand"]}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Receipt no:"}),s.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:(f=(h=e==null?void 0:e.data)==null?void 0:h.data)==null?void 0:f.receipt_no})]}),s.jsx(T,{className:"mt-5 mb-5"}),s.jsx("div",{className:"flex justify-center w-full",children:s.jsx(M,{size:"sm",onClick:Y,children:"Print Receipt"})})]})})})})}export{Q as default};