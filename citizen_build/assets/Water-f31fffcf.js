import{j as e}from"./mui-8e804a04.js";import{r as a,a as V,u as F}from"./router-87042356.js";import{ac as R,A as U}from"./index-00b47817.js";import"./index-4e794517.js";import{H as T}from"./TradeApiListFile-282f1ffb.js";import{p as B}from"./pdf-37897ad1.js";import{W as z,a as H,n as O,i as _}from"./WaterDocumentModalForOwner-a8b0adbe.js";import{W as E}from"./WaterApiList-5f19b586.js";import{V as $}from"./ViewUploadedDoc-13db90db.js";import{W as q}from"./WaterPaymentModal-c0cfcec5.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index.esm-2e3a7c1f.js";import"./index.esm-f717eb21.js";import"./RazorpayPaymentScreen-965792ae.js";import"./CitizenApplyApiList-689056eb.js";import"./logo1-66954bc2.js";import"./success-39308b33.js";import"./index.esm-e8e486ac.js";import"./UseRazorpay-149fd286.js";import"./index-48d14c2d.js";const G="/assets/ringing-7be05542.png";function J(){return e.jsx("div",{className:"bg-sky-200 w-12 h-12 flex justify-center items-center rounded-full p-2 shadow-xl border-2 border-white fixed bottom-20 right-10 hover:",children:e.jsx("img",{className:"w-10",src:G})})}function K(){return e.jsx("div",{className:"w-full h-12 bg-green-50 shadow-lg px-2 flex items-center text-xs text-gray-500 relative overflow-hidden",children:e.jsx("span",{className:" absolute text-green-800",children:e.jsxs("span",{className:"text-red-800 ml-2",children:[e.jsx(R,{className:"inline text-sm"})," Please pay your water tax on time and avoid penalty. Pay before 10/12/2022"]})})})}function Q(o){const[c,x]=a.useState(0),[d,P]=a.useState(0),[S,M]=a.useState(0);V.useState(!1);const[p,m]=a.useState(),[n,h]=a.useState(),[v,D]=a.useState(),[I,L]=a.useState(),{api_getDocList:W}=E();a.useEffect(()=>{i()},[o.uploadDocBtnId]);const i=()=>{U.post(W,{applicationId:o==null?void 0:o.uploadDocBtnId},T()).then(s=>{console.log("Llist of document to upload",s),s.data.status==!0&&(m(s.data.data.documentsList),h(s.data.data.ownersDocList))}).catch(s=>console.log("Error in Document upload list",s))},C=s=>{const t={docName:s,applicationId:o==null?void 0:o.uploadDocBtnId};D(t),x(r=>r+1)},k=(s,t)=>{const r={docName:s,applicationId:o==null?void 0:o.uploadDocBtnId,ownerId:t};D(r),P(l=>l+1)},A=s=>{s&&(L(s),M(t=>t+1))};return console.log("ownerDocList",n),e.jsxs(e.Fragment,{children:[e.jsx(z,{openDocumentModal:c,payloadData:v,refetch:i}),e.jsx(H,{openDocumentModal:d,payloadData:v,refetch:i}),e.jsx($,{openDocviewModal:S,documentUrl:I}),e.jsx("div",{className:"float-right m-3",children:e.jsx("button",{onClick:o.back,class:"py-2 px-4 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:"Back"})}),e.jsx("div",{children:e.jsx("h1",{class:"text-xl font-bold mt-3 mb-5 text-gray-600 ml-3",children:"Water Connection Document List+"})}),e.jsx("div",{className:"bg-white shadow-xl border border-sky-200 p-5 m-2 rounded-md",children:e.jsx("div",{className:"md:inline-block min-w-full overflow-hidden hidden",children:e.jsxs("table",{className:"min-w-full leading-normal border",children:[e.jsx("thead",{className:"bg-sky-100",children:e.jsxs("tr",{className:"font-semibold ",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Remark"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"View"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800 text-center text-sm uppercase",children:"Status"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Upload"})]})}),e.jsx("tbody",{children:p==null?void 0:p.map((s,t=1)=>{var r,l,b,g,u,y,j,f,N;return e.jsxs("tr",{children:[e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:t+1})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[s==null?void 0:s.docName,(s==null?void 0:s.isMadatory)&&e.jsx("span",{className:"text-red-500 font-semibold mx-1",children:"*"})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:(s==null?void 0:s.uploadDoc)==null?e.jsx("p",{className:"text-red-500",children:"Not Upload"}):e.jsxs("div",{children:[((r=s==null?void 0:s.uploadDoc)==null?void 0:r.verify_status)==0&&e.jsx("p",{className:"text-green-700",children:"Pending"}),((l=s==null?void 0:s.uploadDoc)==null?void 0:l.verify_status)==1&&e.jsx("p",{className:"text-green-700",children:"Verified"}),((b=s==null?void 0:s.uploadDoc)==null?void 0:b.verify_status)==2&&e.jsx("p",{className:"text-red-700",children:"Rejected"})]})})}),e.jsx("td",{onClick:()=>{var w;return A((w=s==null?void 0:s.uploadDoc)==null?void 0:w.doc_path)},className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("a",{href:"#",className:"block relative",children:[(s==null?void 0:s.uploadDoc)==null&&e.jsx("img",{alt:"profil",src:O,className:"mx-auto object-cover rounded-none h-10 w-10 cursor-not-allowed"}),((u=(g=s==null?void 0:s.uploadDoc)==null?void 0:g.doc_path)==null?void 0:u.split(".").pop())=="pdf"&&e.jsx("img",{alt:"profil",src:B,className:"mx-auto object-cover rounded-none h-10 w-10 "}),((j=(y=s==null?void 0:s.uploadDoc)==null?void 0:y.doc_path)==null?void 0:j.split(".").pop())=="jpg"&&e.jsx("img",{alt:"profil",src:_,className:"mx-auto object-cover rounded-none h-10 w-10 "}),((N=(f=s==null?void 0:s.uploadDoc)==null?void 0:f.doc_path)==null?void 0:N.split(".").pop())=="png"&&e.jsx("img",{alt:"profil",src:_,className:"mx-auto object-cover rounded-none h-10 w-10 "})]})})})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsxs("p",{className:"text-center text-black font-medium",children:[s.uploadDoc==null&&e.jsx("p",{className:"bg-red-400 rounded-xl px-2 py-0.5",children:s.docStatus}),s.uploadDoc!=null&&e.jsx("p",{className:"bg-green-400 rounded-xl py-0.5",children:s.docStatus})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("button",{onClick:()=>C(s.docName),className:"border px-4 py-2",children:"Upload"})})]})})})]})})}),e.jsx("div",{children:e.jsx("h1",{class:"text-xl font-bold my-5 text-gray-600 ml-3",children:"Owner Document List++"})}),e.jsx("div",{className:"bg-white shadow-xl border border-sky-200 p-5 m-2 rounded-md",children:e.jsx("div",{className:"md:inline-block min-w-full overflow-hidden hidden",children:e.jsxs("table",{className:"min-w-full leading-normal border",children:[e.jsx("thead",{className:"bg-sky-100",children:e.jsxs("tr",{className:"font-semibold ",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Owner Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Remark"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"View"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800 text-center text-sm uppercase",children:"Status"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Upload"})]})}),e.jsx("tbody",{children:n==null?void 0:n.map((s,t=1)=>{var r,l,b,g,u,y,j,f,N;return e.jsxs("tr",{children:[e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:t+1})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[s==null?void 0:s.docName,(s==null?void 0:s.isMadatory)&&e.jsx("span",{className:"text-red-500 font-semibold mx-1",children:"*"})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:s==null?void 0:s.ownerName})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:(s==null?void 0:s.uploadDoc)==null?e.jsx("p",{className:"text-red-500",children:"Not Upload"}):e.jsxs("div",{children:[((r=s==null?void 0:s.uploadDoc)==null?void 0:r.verify_status)==0&&e.jsx("p",{className:"text-green-700",children:"Pending"}),((l=s==null?void 0:s.uploadDoc)==null?void 0:l.verify_status)==1&&e.jsx("p",{className:"text-green-700",children:"Verified"}),((b=s==null?void 0:s.uploadDoc)==null?void 0:b.verify_status)==2&&e.jsx("p",{className:"text-red-700",children:"Rejected"})]})})}),e.jsx("td",{onClick:()=>{var w;return A((w=s==null?void 0:s.uploadDoc)==null?void 0:w.doc_path)},className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("a",{href:"#",className:"block relative",children:[(s==null?void 0:s.uploadDoc)==null&&e.jsx("img",{alt:"profil",src:O,className:"mx-auto object-cover rounded-none h-10 w-10 cursor-not-allowed"}),((u=(g=s==null?void 0:s.uploadDoc)==null?void 0:g.doc_path)==null?void 0:u.split(".").pop())=="pdf"&&e.jsx("img",{alt:"profil",src:B,className:"mx-auto object-cover rounded-none h-10 w-10 "}),((j=(y=s==null?void 0:s.uploadDoc)==null?void 0:y.doc_path)==null?void 0:j.split(".").pop())=="jpg"&&e.jsx("img",{alt:"profil",src:_,className:"mx-auto object-cover rounded-none h-10 w-10 "}),((N=(f=s==null?void 0:s.uploadDoc)==null?void 0:f.doc_path)==null?void 0:N.split(".").pop())=="png"&&e.jsx("img",{alt:"profil",src:_,className:"mx-auto object-cover rounded-none h-10 w-10 "})]})})})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsxs("p",{className:"text-center text-black font-medium",children:[s.uploadDoc==null&&e.jsx("p",{className:"bg-red-400 rounded-xl px-2 py-0.5",children:s.docStatus}),s.uploadDoc!=null&&e.jsx("p",{className:"bg-green-400 rounded-xl py-0.5",children:s.docStatus})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("button",{onClick:()=>k(s.docName,s.ownerId),className:"border px-4 py-2",children:"Upload"})})]})})})]})})})]})}function X(o){const{api_citizenApplications:c,api_citizenApprovedApplications:x,header:d}=E(),[P,S]=a.useState(0),[M,p]=a.useState(0),[m,n]=a.useState(),[h,v]=a.useState(),[D,I]=a.useState(),[L,W]=a.useState(),[i,C]=a.useState(0),k=F(),A=(t,r)=>{console.log("Clicked PAy"),S(l=>l+1),I({id:t,type:r})},s=t=>{console.log("Clicked Document Upload"),p(r=>r+1),W(t),o.uploadDocId(t)};return a.useEffect(()=>{U.post(x,{},d).then(t=>{t.data.status==!0?(console.log("Approved Application Listst",t.data),v(t.data.data)):console.log("Error Approced Application Listst",t)}).catch(t=>console.log("error ecxewption",t))},[i]),a.useEffect(()=>{U.post(c,{},d).then(t=>{t.data.status==!0?(console.log("Application Listst",t),n(t.data.data)):console.log("Error its FALSE",t)}).catch(t=>console.log("error ecxewption",t))},[i]),e.jsxs(e.Fragment,{children:[e.jsx(q,{openPaymentModal:P,paymentData:D,refechList:()=>C(t=>t+1)}),e.jsxs("div",{children:[e.jsx("h1",{className:"px-2 font-semibold mt-0 text-center text-gray-900 font-serif py-2 md:text-2xl uppercase ",children:"Manage all your water connections at one place"}),e.jsx("p",{className:"border-b border-gray-300 mx-5"}),e.jsxs("div",{className:"float-right mt-2 mr-3",children:[" ",e.jsx("button",{onClick:()=>k("/water-apply"),className:"py-2 mx-2 px-4 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-sky-500 border border-sky-500 hover:text-white hover:bg-sky-600 hover:ring-0 hover:border-sky-600 focus:bg-sky-600 focus:border-sky-600 focus:outline-none focus:ring-2",children:"Apply New Connection"})," "]}),e.jsxs("div",{className:"px-2 w-full mt-10",children:[e.jsx("div",{className:"text-lg font-sans font-semibold text-gray-700 mx-2 my-2",children:"All Water Connections"}),h==null?void 0:h.map(t=>e.jsx("div",{className:"bg-white shadow-lg pb-2 oveflow-hidden mb-2 rounded-lg relative",children:e.jsxs("div",{className:"w-full py-8 rounded-lg  px-4 md:flex",children:[e.jsx("span",{className:"px-3 py-1 bg-green-200 border border-green-300 text-gray-700 text-xs font-semibold absolute rounded-tl-md rounded-br-md top-0 left-0 shadow-sm",children:"Active Water Connection "}),e.jsxs("div",{className:"w-full flex space-x-2 mt-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-700",children:t==null?void 0:t.consumer_no}),e.jsx("div",{className:"text-sm text-gray-600 font-serif",children:"Connection No."})]}),e.jsxs("div",{className:"pl-4",children:[e.jsx("div",{className:"font-semibold text-gray-700",children:t==null?void 0:t.applicant_name}),e.jsx("div",{className:"text-sm text-gray-600 font-serif",children:"Owner Name"})]}),e.jsxs("div",{className:"pl-4",children:[e.jsx("div",{className:"font-semibold text-gray-700",children:t==null?void 0:t.ward_name}),e.jsx("div",{className:"text-sm text-gray-600 font-serif",children:"Ward No"})]}),e.jsxs("div",{className:"pl-4",children:[e.jsx("div",{className:"font-semibold text-gray-700",children:t==null?void 0:t.ulb_name}),e.jsx("div",{className:"text-sm text-gray-600 font-serif",children:"ULB Name"})]}),e.jsxs("div",{className:"pl-4",children:[e.jsx("div",{className:"font-semibold text-gray-700",children:t==null?void 0:t.address}),e.jsx("div",{className:"text-sm text-gray-600 font-serif",children:"Address"})]})]}),e.jsx("div",{className:"float-right",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{onClick:()=>k(`/water/viewApplication/${t==null?void 0:t.consumer_no}`),className:"border text-sm bg-amber-400 hover:bg-amber-500 mx-2 my-2 px-3 py-2 rounded-md shadow-lg",children:" View Application"}),e.jsx("button",{className:"border text-sm bg-green-400 hover:bg-green-500 mx-2 my-2 px-3 py-2 rounded-md shadow-lg",children:" View Demand"})]})})]})}))]}),e.jsxs("div",{className:"px-2 w-full mt-10",children:[e.jsx("div",{className:"text-lg font-sans font-semibold text-gray-700 mx-2 my-2",children:"Applied Water Applications"}),m==null?void 0:m.map((t,r)=>e.jsx("div",{className:"bg-white shadow-lg pb-2 oveflow-hidden mb-2 rounded-lg relative",children:e.jsxs("div",{className:"w-full py-4 rounded-lg  px-4 md:flex",children:[e.jsx("span",{className:"px-3 py-1 bg-yellow-200 border border-yellow-300 text-gray-700 text-xs font-semibold absolute rounded-tl-md rounded-br-md top-0 left-0 shadow-sm",children:"Pending Application "}),e.jsxs("div",{className:"w-full flex space-x-2 mt-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-700",children:t==null?void 0:t.application_no}),e.jsx("div",{className:"text-xs text-gray-600 font-serif",children:"Application No."}),e.jsxs("div",{className:"text-xs text-gray-600 font-serif",children:["Ward No (ID) - ",t==null?void 0:t.ward_name," (",t==null?void 0:t.ward_id,")"]})]}),e.jsxs("div",{className:"pl-4",children:[e.jsxs("div",{className:"font-semibold text-gray-700",children:["₹ ",t==null?void 0:t.amount]}),e.jsx("div",{className:"text-xs text-gray-600 font-serif",children:"Total Tax"})]}),e.jsx("p",{className:"border-r border-gray-600 md:pl-10"}),e.jsxs("div",{className:"w-full md:w-1/4 pl-2 text-xs",children:[e.jsx("div",{className:"font-semibold font-sans",children:"Actions"}),e.jsx("div",{className:"text-sm text-amber-500",children:" Document Upload Pending"}),t!=null&&t.payment_status?e.jsx("div",{className:"text-sm text-green-500",children:" Payment Completed"}):e.jsx("div",{className:"text-sm text-amber-500",children:" Waiting for Payment"})]}),e.jsxs("div",{className:"block",children:[e.jsx("button",{className:"border text-sm bg-blue-400 hover:bg-blue-500 mx-2 py-2 px-3 text-white font-sans font-normal rounded-md shadow-lg",children:" View Application"}),e.jsx("button",{onClick:()=>s(t.id),className:"border text-sm bg-indigo-400 hover:bg-indigo-500 py-2 mx-2 px-3 rounded-md text-white font-sans font-normal shadow-lg",children:" Upload Document"}),!(t!=null&&t.payment_status)&&e.jsx("button",{onClick:()=>A(t.id,t.type),className:"border text-sm py-2 text-white font-sans font-normal bg-cyan-400 hover:bg-cyan-500 mx-2 px-3 rounded-md shadow-lg",children:" Pay Now"})]})]})]})}))]})]})]})}function Y(){return e.jsxs("div",{children:[e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"mb-2 text-gray-700 font-sans font-semibold",children:"Notifications"}),e.jsx("div",{className:"bg-yellow-50 shadow-lg py-2 text-base  flex pl-4 items-center mt-2",children:"Property appication no 2083 has been approved"}),e.jsx("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2",children:"Property appication no 2083 has been approved"}),e.jsx("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2",children:"Property appication no 2083 has been approved"})]}),e.jsx("div",{className:"w-full h-1 border-b-2 border-white mt-10"}),e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"mb-2 text-gray-700 font-sans font-semibold",children:"Actions"}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2",children:["Pay your property tax ",e.jsx("span",{className:"ml-4 cursor-pointer bg-green-400 text-white px-2 py-1 text-base shadow-lg",children:"Pay"})]}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2",children:["Pay your property tax ",e.jsx("span",{className:"ml-4 cursor-pointer bg-green-400 text-white px-2 py-1 text-base shadow-lg",children:"Pay"})]}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2",children:["Pay your property tax ",e.jsx("span",{className:"ml-4 cursor-pointer bg-green-400 text-white px-2 py-1 text-base shadow-lg",children:"Pay"})]})]}),e.jsx("div",{className:"w-full h-1 border-b-2 border-white mt-10"}),e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"mb-2 text-gray-700 font-sans font-semibold",children:"Summary"}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center w-3/4 rounded-sm",children:["Total Property",e.jsx("span",{className:"ml-4 cursor-pointer bg-yellow-400 text-white px-2 py-1 text-base shadow-lg rounded-lg ",children:"2"})]}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2 w-3/4 rounded-sm",children:["Total Water",e.jsx("span",{className:"ml-4 cursor-pointer bg-yellow-400 text-white px-2 py-1 text-base shadow-lg rounded-lg ",children:"2"})]}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2 w-3/4 rounded-sm",children:["Total Trade",e.jsx("span",{className:"ml-4 cursor-pointer bg-yellow-400 text-white px-2 py-1 text-base shadow-lg rounded-lg ",children:"2"})]})]})]})}function Z(){const[o,c]=a.useState(),x=d=>{console.log("uploadDocId",d),c(d)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-12 my-10",children:[e.jsxs("div",{className:"col-span-9 border rounded-md bg-blue-50",children:[!o&&e.jsx(X,{uploadDocId:x}),o&&e.jsx(Q,{uploadDocBtnId:o,back:()=>c()})]}),e.jsxs("div",{className:"col-span-3 border rounded-md ml-3 bg-blue-50",children:[" ",e.jsx(Y,{})," "]})]})})}function De(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{}),e.jsx(Z,{}),e.jsx(J,{})]})}export{De as default};