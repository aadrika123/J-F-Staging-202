import{j as e}from"./mui-8e804a04.js";import{r as a,a as T,f as V,u as B}from"./router-87042356.js";import{l as M,A as E}from"./index-ac659a09.js";import{M as W}from"./index-4e794517.js";import"./RazorpayPaymentScreen-c7f83216.js";import{F as A}from"./index.esm-f717eb21.js";import{P as O}from"./PetRegAPIList-77b078ab.js";import{a as z}from"./index.esm-2e3a7c1f.js";import{u as _}from"./upload-e931b2e1.js";import{P as G}from"./PetRegTopButtons-48d948a5.js";import{S as $}from"./ShimmerEffectInline-66ba2926.js";import{V as q}from"./ViewUploadedDoc-74e82471.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./CitizenApplyApiList-71a04580.js";import"./logo1-66954bc2.js";import"./WaterApiList-2f05c7ba.js";const H={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function J(o){var N,w;const[S,c]=a.useState(),[s,f]=T.useState(!1),[x,y]=a.useState();a.useState();const[d,i]=a.useState(),[p,u]=a.useState(!1),{notify:h}=a.useContext(M),{api_PetRegUploadDocument:j,header1:P}=O(),r=o==null?void 0:o.payloadData;console.log("Props Data in Doc upload modal..",r),a.useEffect(()=>{f(!0)},[]);function U(){}function b(){f(!1),y(),i(),o.close(!1)}const m=l=>{var v,g;if(l.preventDefault(),x==null||x==""||d==null||d=="")return c("Please Select Correct File and Type");const D=["jpg","jpeg","png","pdf"],C=(v=d==null?void 0:d.name)==null?void 0:v.split(".").pop().toLowerCase();if(!D.includes(C)){c("Invalid file extension");return}let n=new FormData;n.append("applicationId",o==null?void 0:o.applicationId),n.append("docCategory",(g=o==null?void 0:o.payloadData)==null?void 0:g.docName),n.append("document",d),n.append("docCode",x),console.log("Form Data Payload",n),u(!0),E.post(j,n,P).then(t=>{t.data.status==!0?(h("Document Uploaded Successfully","success"),console.log("Data Uploaded",t),u(!1),b(),o.refetch()):(u(!1),h("Failed to Upload Document","error"),c("Failed to upload file. Please Select Proper File."))}).catch(t=>{u(!1),h("Something went wrong","error"),c("Failed to upload file. Please Select Proper File."),console.log("Expection...",t)})};return e.jsx("div",{className:" overflow-auto",children:e.jsx(W,{isOpen:s,onAfterOpen:U,onRequestClose:b,style:H,contentLabel:"Example Modal",children:e.jsx("form",{encType:"multipart/form",onSubmit:m,children:e.jsxs("div",{className:"bg-indigo-200 shadow-2xl border border-sky-200 p-2 rounded-md",children:[e.jsxs("div",{className:"my-2 mx-3",children:[e.jsxs("div",{onClick:b,className:"float-right cursor-pointer hover:bg-gray-300 rounded-sm p-1",children:[" ",e.jsx(z,{})]}),e.jsx("h1",{className:"font-semibold md:text-xl text-sm text-gray-700",children:"Upload Document"})]}),e.jsxs("div",{className:"md:inline-block max-sm:w-[20rem] overflow-auto p-4",children:[e.jsxs("table",{className:"leading-normal border",children:[e.jsx("thead",{className:"bg-sky-100",children:e.jsxs("tr",{className:"font-semibold ",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Type"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Upload"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Submit"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:1})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap capitalize",children:(N=r==null?void 0:r.docName)==null?void 0:N.replace(/_/g," ")})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:e.jsxs("select",{onChange:l=>y(l.target.value),className:" outline-blue-600 border border-gray-400 w-40",children:[e.jsx("option",{children:"Select Document"}),(w=r==null?void 0:r.masters)==null?void 0:w.map(l=>e.jsx("option",{value:l.documentCode,children:l.docVal}))]})})}),e.jsx("td",{className:"px-5 border-b border-gray-200 bg-white text-sm",children:e.jsxs("span",{className:"relative inline-block ",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 "}),e.jsxs("span",{className:"relative ",children:[e.jsx("input",{disabled:p,name:"docPath",type:"file",style:{display:"none"},id:"contained-button-file",onChange:l=>i(l.target.files[0])}),e.jsxs("label",{className:` ${p?"cursor-wait hover:rounded-none":"cursor-pointer rounded-sm hover:rounded-md hover:shadow-2xl hover:bg-blue-600 hover:ring-1 hover:ring-blue-800"} bg-blue-500  shadow-lg flex pl-4 pr-5 py-2  text-white font-medium`,htmlFor:"contained-button-file",children:[e.jsx(A,{size:16,className:"mt-0 ml-0 mr-2 font-medium"}),"Browse File"]})]})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:p?e.jsx("img",{className:"h-8",src:_,alt:"Uploading"}):e.jsx("button",{disabled:p,type:"submit",className:"border disabled:bg-green-300 disabled:text-gray-500 bg-green-600 rounded-md text-white px-4 py-2",children:"Submit"})})]})})]}),e.jsx("div",{className:"my-2 flex justify-center font-semibold text-red-600 relative",children:e.jsx("p",{className:"absolute",children:S})})]})]})})})})}const ue=o=>{var g;a.useState(0);const[S,c]=a.useState(!1),[s,f]=a.useState(),[x,y]=a.useState(),[d,i]=a.useState(!0),[p,u]=a.useState(0),[h,j]=a.useState(!1),[P,r]=a.useState(0),[U,b]=a.useState();a.useContext(M);const{id:m}=V(),{api_PetRegistrationDocUploadList:N,header1:w}=O(),{setBreadCrumbData:l}=a.useContext(M);a.useEffect(()=>{l(["Pet Registration","Upload Document"])},[]);const D=B(),C=t=>{t&&(b(t),r(F=>F+1))};console.log("nhjhjhghjghj",m);const n=()=>{i(!0),E.post(N,{applicationId:m},w).then(t=>{i(!1),t.data.status?f(t.data.data):j(!0)}).catch(t=>{console.log("Error while getting pet doc list",t),i(!1),j(!0)})};a.useEffect(()=>{n()},[p]);const v=t=>{c(!0),y(t),console.log("Document Upload click..",t)};return e.jsxs("div",{className:"mt-3",children:[e.jsx(G,{active:"document",consumerNo:s==null?void 0:s.ApplicationNo}),e.jsx(q,{openDocviewModal:P,documentUrl:U}),S&&e.jsx(J,{payloadData:x,refetch:n,applicationId:m,close:c}),e.jsxs("div",{className:"bg-white rounded-md shadow-sm py-2",children:[e.jsx("div",{className:"my-3",children:e.jsx("p",{className:"text-center text-2xl font-medium text-gray-800",children:"Pet Registration Document Upload"})}),d?e.jsxs("p",{className:"w-full",children:[" ",e.jsx($,{})," "]}):e.jsxs("div",{className:"overflow-auto",children:[h==!0?e.jsx("p",{className:"m-auto font-semibold border border-gray-300 text-red-700 bg-red-100 px-5 py-2 rounded shadow w-fit",children:"Failed to Get Data"}):e.jsxs("table",{className:"w-full text-left text-gray-600",children:[e.jsx("thead",{className:"text-lg bg-gray-300 border-b-2",children:e.jsxs("tr",{className:"",children:[e.jsx("th",{className:"px-3 py-2",children:"Sl."}),e.jsx("th",{className:"px-3 py-2",children:"Document Name"}),e.jsx("th",{className:"px-3 py-2",children:"View "}),e.jsx("th",{className:"px-3 py-2",children:"Status"}),e.jsx("th",{className:"px-3 py-2",children:"Action"})]})}),e.jsx("tbody",{className:"",children:s&&((g=s==null?void 0:s.listDocs)==null?void 0:g.map((t,F)=>{var k,I;return e.jsxs("tr",{className:"hover:bg-sky-100 border-b",children:[e.jsx("td",{className:"px-3 py-2",children:F+1}),e.jsxs("td",{className:"px-3 py-2",children:[t.docName," ",t.isMandatory==1&&e.jsx("span",{className:"text-red-600",children:"*"})," "]}),e.jsxs("td",{className:"px-3 py-2",children:[((k=t==null?void 0:t.uploadedDoc)==null?void 0:k.docPath)&&e.jsx("img",{className:"h-8 cursor-pointer",onClick:()=>{var R;return C((R=t==null?void 0:t.uploadedDoc)==null?void 0:R.docPath)},src:(I=t==null?void 0:t.uploadedDoc)==null?void 0:I.docPath,alt:"images"}),!(t!=null&&t.uploadedDoc)&&"N/A"]}),e.jsx("td",{className:"px-3 py-2 text-base",children:t.uploadedDoc?"Uploaded":"Not Uploaded"}),e.jsx("td",{className:"py-2 border-b border-gray-200 text-sm",children:(s==null?void 0:s.paymentStatus)==1?e.jsx("p",{className:"text-base",children:"Submitted"}):e.jsxs("span",{className:"relative inline-block ",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 "}),e.jsx("span",{className:"relative ",onClick:()=>v(t),children:e.jsxs("label",{className:"cursor-pointer rounded-sm hover:rounded-sm hover:shadow-2xl hover:bg-blue-600 hover:ring-1 hover:ring-blue-800 bg-blue-500  shadow-lg flex pl-4 pr-5 py-2  text-white font-medium",htmlFor:"contained-button-file",children:[e.jsx(A,{size:16,className:"mt-0 ml-0 mr-2 font-medium"}),t.uploadedDoc?"Re-Upload":"Upload"]})})]})})]})}))})]}),(s==null?void 0:s.docUploadStatus)&&e.jsx("p",{className:"text-center mt-5 text-green-600 font-semibold",children:"All Documents are uploaded."})]}),e.jsxs("div",{className:"flex justify-center my-6 space-x-5",children:[e.jsx("button",{type:"button",onClick:()=>D("/pet-registration-dashboard"),className:"bg-indigo-500 px-5 py-1 text-white rounded shadow",children:"Back"}),(s==null?void 0:s.docUploadStatus)&&(s==null?void 0:s.paymentStatus)==0&&e.jsx("button",{onClick:()=>D(`/petPayment/${m}`),type:"submit",className:"bg-indigo-700 px-8 py-2 text-white rounded font-sans font-semibold shadow",children:"Pay Now"})]})]})]})};export{ue as default};