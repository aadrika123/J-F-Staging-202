import{j as t}from"./mui-105b4636.js";import{r as a,f as se,u as oe}from"./router-894402c5.js";import{W as re}from"./WaterApiList-eed22780.js";/* empty css              *//* empty css                */import{p as O}from"./pdf-37897ad1.js";import{W as de,a as ce,n as P,i as n}from"./WaterDocumentModalForOwner-54778025.js";import{V as le}from"./ViewUploadedDoc-5b23aceb.js";import{k as pe,A as ne}from"./index-2fc866b5.js";import{W as me}from"./WaterPaymentModal-93457417.js";import{W as ie}from"./WaterApplicationTopButtons-3f1d7385.js";import{S as w}from"./ShimmerEffectInline-f0b4ba72.js";import"./react-40db4358.js";import"./index-82be3ecd.js";import"./index.esm-9bec7f4a.js";import"./reactIcons-58c2a0d8.js";import"./index.esm-c1e7c4e1.js";import"./RazorpayPaymentScreen-2731453b.js";import"./CitizenApplyApiList-25268a0d.js";import"./axios-67d8a945.js";import"./redux-b8f144fa.js";import"./i18next-e2c66b9b.js";import"./success-39308b33.js";import"./index.esm-bc36f73a.js";const Ae=xe=>{var V,W,F;const[C,L]=a.useState(0),[A,E]=a.useState(0),[D,R]=a.useState(),[f,B]=a.useState(),[T,q]=a.useState(0),[U,k]=a.useState(),[z,G]=a.useState(),[M,v]=a.useState(!1),[H,J]=a.useState(!1),[d,K]=a.useState(!1),[Q,S]=a.useState(!1),{api_waterViewDocumetTobeuploaded:X,header:Y}=re(),{id:N}=se();oe(),a.useEffect(()=>{_()},[N]);const{setBreadCrumbData:Z}=a.useContext(pe);a.useEffect(()=>{Z(["Water Dashboard","Upload Document"])},[]);const _=()=>{v(!0),ne.post(X,{applicationId:N},Y).then(e=>{var s,o,r;v(!1),R(e.data.data.documentsList),B(e.data.data.ownersDocList),J((o=(s=e==null?void 0:e.data)==null?void 0:s.data)==null?void 0:o.doc_upload_status),K((r=e==null?void 0:e.data)==null?void 0:r.data)}).catch(e=>{v(!1)})},$=(e,s,o)=>{k({docName:e,applicationId:N,docVal:s,refDocName:o}),L(c=>c+1)},ee=(e,s,o,r,c)=>{k({ownerName:e,docName:s,applicationId:N,ownerId:o,docVal:r,docCategory:c}),E(l=>l+1)},I=e=>{e&&(G(e),q(s=>s+1))},te=()=>{S(!0)},ae=(V=d==null?void 0:d.connectionCharges)==null?void 0:V.charge_category;return t.jsxs(t.Fragment,{children:[t.jsx(ie,{active:"document",title:"Water Application Document Upload",applicationNo:(W=d==null?void 0:d.connectionCharges)==null?void 0:W.applicationNo}),Q&&t.jsx(me,{openPaymentModal:S,category:ae,paymentData:d}),t.jsx(de,{openDocumentModal:C,payloadData:U,refetch:_}),t.jsx(ce,{openDocumentModal:A,payloadData:U,refetch:_}),t.jsx(le,{openDocviewModal:T,documentUrl:z}),t.jsx("div",{className:"grid grid-cols-12 bg-white poppins animate__animated animate__fadeIn animate__faster",children:t.jsx("div",{className:"col-span-12 pt-4 2xl:h-full md:h-screen overflow-y-auto pb-2",children:t.jsxs("div",{className:"md:px-2 col-span-12",children:[t.jsx("div",{className:"float-right m-3 space-x-3",children:H==!0?((F=d==null?void 0:d.connectionCharges)==null?void 0:F.paid_status)==!1&&t.jsx("button",{onClick:()=>te(),class:"py-2 px-4 inline-block text-center mb-3 leading-5 text-gray-100 bg-green-500 border border-green-500 hover:text-white hover:bg-green-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:"Pay Now"}):t.jsx("div",{})}),t.jsx("div",{children:t.jsx("h1",{class:"text-base md:text-xl font-bold md:my-3 text-gray-600 text-center",children:"Water Connection Document List"})}),t.jsx("div",{className:"",children:t.jsx("div",{className:"md:inline-block min-w-full overflow-hidden",children:M?t.jsxs(t.Fragment,{children:[" ",t.jsx(w,{})," ",t.jsx(w,{})," "]}):t.jsxs(t.Fragment,{children:[t.jsxs("table",{className:"min-w-full leading-normal border",children:[t.jsx("thead",{className:"bg-sky-100",children:t.jsxs("tr",{className:"font-semibold ",children:[t.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),t.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Name"}),t.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"View"}),t.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800 text-center text-sm uppercase",children:"Status"}),t.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Upload"})]})}),t.jsx("tbody",{children:D==null?void 0:D.map((e,s=1)=>{var o,r,c,p,l,m,i,x,h,u,b,j,g;return t.jsxs("tr",{children:[t.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:t.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:s+1})}),t.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:t.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[e==null?void 0:e.refDocName,(e==null?void 0:e.isMadatory)==1&&t.jsx("span",{className:"text-red-500 font-semibold mx-1",children:"*"})]})}),t.jsx("td",{onClick:()=>{var y;return I((y=e==null?void 0:e.uploadDoc)==null?void 0:y.doc_path)},className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:t.jsx("div",{className:"flex items-center",children:t.jsx("div",{className:"flex-shrink-0",children:t.jsxs("a",{href:"#",className:"block relative",children:[(e==null?void 0:e.uploadDoc)==""&&t.jsx("img",{alt:"profil",src:P,className:"mx-auto object-cover rounded-none cursor-not-allowed md:h-10 h-8 md:w-10 w-8"}),((r=(o=e==null?void 0:e.uploadDoc)==null?void 0:o.doc_path)==null?void 0:r.split(".").pop())=="pdf"&&t.jsx("img",{alt:"profil",src:O,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "}),((p=(c=e==null?void 0:e.uploadDoc)==null?void 0:c.doc_path)==null?void 0:p.split(".").pop())=="jpg"&&t.jsx("img",{alt:"profil",src:n,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "}),((m=(l=e==null?void 0:e.uploadDoc)==null?void 0:l.doc_path)==null?void 0:m.split(".").pop())=="jpeg"&&t.jsx("img",{alt:"profil",src:n,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "}),((x=(i=e==null?void 0:e.uploadDoc)==null?void 0:i.doc_path)==null?void 0:x.split(".").pop())=="png"&&t.jsx("img",{alt:"profil",src:n,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "})]})})})}),t.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:t.jsx("p",{className:"text-center text-black md:font-medium text-xs md:text-sm",children:(e==null?void 0:e.uploadDoc)==""?t.jsx("p",{className:"text-red-500",children:"Not Upload"}):t.jsxs("div",{children:[((h=e==null?void 0:e.uploadDoc)==null?void 0:h.verify_status)==0&&t.jsx("p",{className:"text-yellow-700",children:"Pending"}),((u=e==null?void 0:e.uploadDoc)==null?void 0:u.verify_status)==1&&t.jsx("p",{className:"text-green-700",children:"Verified"}),((b=e==null?void 0:e.uploadDoc)==null?void 0:b.verify_status)==2&&t.jsx("p",{className:"text-red-700",children:"Rejected"})]})})}),t.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm ",children:((j=e==null?void 0:e.uploadDoc)==null?void 0:j.verify_status)!=1&&t.jsx("button",{onClick:()=>$(e.docName,e.docVal,e.refDocName),className:"border px-2 md:px-4 py-1 md:py-2 hover:text-white hover:bg-indigo-500",children:((g=e==null?void 0:e.uploadDoc)==null?void 0:g.verify_status)==2?"Re-Upload":"Upload"})})]})})})]}),t.jsxs("p",{className:" font-semibold text-red-400",children:[" ",t.jsx("span",{className:"text-base",children:" *"})," ",t.jsx("span",{className:"text-xs",children:" Mandatory"})]})]})})}),t.jsx("div",{children:t.jsx("h1",{class:"text-base md:text-xl font-bold my-3 text-gray-600 text-center",children:"Owner Document List"})}),t.jsx("div",{className:"",children:t.jsx("div",{className:"md:inline-block min-w-full overflow-hidden",children:M?t.jsxs(t.Fragment,{children:[" ",t.jsx(w,{})," ",t.jsx(w,{})," "]}):t.jsxs(t.Fragment,{children:[t.jsxs("table",{className:"min-w-full leading-normal border",children:[t.jsx("thead",{className:"bg-sky-100",children:t.jsxs("tr",{className:"font-semibold ",children:[t.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),t.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Name"}),t.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"View"}),t.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800 text-center text-sm uppercase",children:"Status"}),t.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Upload"})]})}),t.jsx("tbody",{children:f?f==null?void 0:f.map((e,s=1)=>{var o,r,c,p,l,m,i,x,h,u,b,j,g;return t.jsxs("tr",{children:[t.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:t.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:s+1})}),t.jsxs("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:[t.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[e==null?void 0:e.refDocName,(e==null?void 0:e.isMadatory)&&t.jsx("span",{className:"text-red-500 font-semibold mx-1",children:"*"})]}),t.jsxs("p",{className:"text-xs md:w-full w-40",children:["(",e==null?void 0:e.ownerName,")"]})]}),t.jsx("td",{onClick:()=>{var y;return I((y=e==null?void 0:e.uploadDoc)==null?void 0:y.doc_path)},className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:t.jsx("div",{className:"flex items-center",children:t.jsx("div",{className:"flex-shrink-0",children:t.jsxs("a",{href:"#",className:"block relative",children:[(e==null?void 0:e.uploadDoc)==""&&t.jsx("img",{alt:"profil",src:P,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  cursor-not-allowed"}),((r=(o=e==null?void 0:e.uploadDoc)==null?void 0:o.doc_path)==null?void 0:r.split(".").pop())=="pdf"&&t.jsx("img",{alt:"profil",src:O,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "}),((p=(c=e==null?void 0:e.uploadDoc)==null?void 0:c.doc_path)==null?void 0:p.split(".").pop())=="jpg"&&t.jsx("img",{alt:"profil",src:n,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "}),((m=(l=e==null?void 0:e.uploadDoc)==null?void 0:l.doc_path)==null?void 0:m.split(".").pop())=="jpeg"&&t.jsx("img",{alt:"profil",src:n,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "}),((x=(i=e==null?void 0:e.uploadDoc)==null?void 0:i.doc_path)==null?void 0:x.split(".").pop())=="png"&&t.jsx("img",{alt:"profil",src:n,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "})]})})})}),t.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:t.jsx("p",{className:"text-center text-black md:font-medium text-xs md:text-sm",children:(e==null?void 0:e.uploadDoc)==""?t.jsx("p",{className:"text-red-500",children:"Not Upload"}):t.jsxs("div",{children:[((h=e==null?void 0:e.uploadDoc)==null?void 0:h.verify_status)==0&&t.jsx("p",{className:"text-yellow-700",children:"Pending"}),((u=e==null?void 0:e.uploadDoc)==null?void 0:u.verify_status)==1&&t.jsx("p",{className:"text-green-700",children:"Verified"}),((b=e==null?void 0:e.uploadDoc)==null?void 0:b.verify_status)==2&&t.jsx("p",{className:"text-red-700",children:"Rejected"})]})})}),t.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:((j=e==null?void 0:e.uploadDoc)==null?void 0:j.verify_status)!=1&&t.jsx("button",{onClick:()=>ee(e.ownerName,e.docName,e.ownerId,e.docVal,e.refDocName),className:"border px-2 md:px-4 py-1 md:py-2 hover:text-white hover:bg-indigo-500",children:((g=e==null?void 0:e.uploadDoc)==null?void 0:g.verify_status)==2?"Re-Upload":"Upload"})})]})}):t.jsx("p",{children:"No Data Found"})})]}),t.jsxs("p",{className:" font-semibold text-red-400",children:[" ",t.jsx("span",{className:"text-base",children:" *"})," ",t.jsx("span",{className:"text-xs",children:" Mandatory"})]})]})})})]})})})]})};export{Ae as default};