import{j as e}from"./mui-8e804a04.js";import{r as n,u as f,f as A}from"./router-87042356.js";import{C}from"./index.esm-61f3eeba.js";import{C as w}from"./CustomErrorBoundary-a255d819.js";import{A as v,l as S}from"./index-ac659a09.js";import{M as P,a as M}from"./index.esm-df462c79.js";import{h as j}from"./moment-fbc5633a.js";import{N as D}from"./NoDataFoundStyle1-7c7ae943.js";import{P as _}from"./PetRegAPIList-77b078ab.js";import{P as R}from"./PetRegDeleteModal-dba2411f.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./axios-97164839.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index-4e794517.js";import"./index.esm-2e3a7c1f.js";const Y=()=>{const[o,l]=n.useState(null),[c,p]=n.useState(!1),[i,g]=n.useState();n.useState(!1),n.useState(),n.useState(!1),n.useState();const[r,d]=n.useState(!1),[m,t]=n.useState(!1),{api_PetRegistrationList:x,header:k}=_(),h=f(),N=s=>{l(o===s?null:s)},u=s=>{g(s),p(!0)},b=()=>{t(!0),v.post(x,{},k).then(s=>{t(!1),s.data.status?(d(s.data.data),console.log("list of applied list",s.data.data)):console.log("Failed to get application list",s.data.data)}).catch(s=>{console.log("Error while getting applied list",s),t(!1)})};return n.useEffect(()=>{b()},[]),m?"Loading..":r?e.jsxs(e.Fragment,{children:[c&&e.jsx(R,{setOpenDeleteModal:p,dataTobeDeleted:i,reFetch:b}),e.jsxs("div",{className:"w-full ml-2 md:ml-0 mb-10",children:[e.jsxs("p",{className:"font-manrope md:my-4 ",children:["Total Applications ",e.jsx("span",{className:"font-semibold",children:r==null?void 0:r.length})]}),e.jsx("div",{className:"hidden md:block bg-gray-200 text-gray-700 py-3 font-semibold rounded-md",children:e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsx("p",{className:"px-2 col-span-3 whitespace-nowrap",children:"Registration No"}),e.jsx("p",{className:"px-2 col-span-2",children:"Applicant Name"}),e.jsx("p",{className:"px-1 col-span-2",children:"Type"}),e.jsx("p",{className:"px-2 col-span-1",children:"Payment"}),e.jsx("p",{className:"px-2 col-span-1",children:"Document"}),e.jsx("p",{className:"px-2 col-span-2 whitespace-nowrap",children:"Apply Date"}),e.jsx("p",{className:"px-2 col-span-1"})]})}),e.jsx("div",{className:"overflow-y-auto h-screen mb-40 md:mr-0 mr-5 ",children:r&&(r==null?void 0:r.map((s,a)=>e.jsxs("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white cursor-pointer",onClick:()=>N(a),children:[e.jsxs("div",{className:" flex md:grid grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsx("p",{className:"px-4 py-2 break-all font-manrope font-semibold col-span-3 text-xs md:text-base",children:s==null?void 0:s.application_no}),e.jsx("p",{className:"hidden md:block px-4 py-2 break-all col-span-2",children:s==null?void 0:s.applicant_name}),e.jsx("p",{className:"px-4 py-1 break-words flex col-span-2 text-xs md:text-base",children:s==null?void 0:s.ref_application_type}),e.jsxs("p",{className:"hidden md:block px-4 py-2 whitespace-nowrap col-span-1",children:[(s==null?void 0:s.payment_status)==0&&e.jsx("p",{className:"text-red-500 font-normal text-sm px-2 rounded-xl",children:"UnPaid"}),(s==null?void 0:s.payment_status)==1&&e.jsx("p",{className:"text-green-600 font-normal text-sm px-2 rounded-xl",children:"Paid"}),(s==null?void 0:s.payment_status)==2&&e.jsx("p",{className:"text-yellow-600 font-normal text-sm px-2 rounded-xl",children:"Processing"})]}),e.jsxs("p",{className:"hidden md:block px-4 py-2 break-normal col-span-1",children:[(s==null?void 0:s.doc_upload_status)==!0&&e.jsx("p",{className:"text-green-600 font-normal text-sm px-2 rounded-xl",children:"Uploaded"}),(s==null?void 0:s.doc_upload_status)==!1&&e.jsx("p",{className:"text-red-600 font-normal text-sm  px-2 rounded-xl",children:"Not Upload"})]}),e.jsx("p",{className:"hidden md:block px-4 py-2 col-span-2",children:j(s==null?void 0:s.application_apply_date,"YYYY-MM-DD").format("DD-MMM-yy")}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-1",children:o===a?e.jsx(P,{size:24}):e.jsx(M,{size:24})})]}),e.jsx("div",{className:"flex-none bg-gray-100",children:o===a&&e.jsxs("div",{className:"p-2 md:p-5 ease-in duration-300 bg-indigo-100",children:[e.jsx("div",{className:"text-center md:text-left mb-2 md:mb-0",children:e.jsxs("p",{className:" text-gray-900",children:[(s==null?void 0:s.payment_status)==0&&"Your Application is unpaid.",(s==null?void 0:s.role_name)&&e.jsxs("span",{children:["Your Application is at ",e.jsx("span",{className:"font-semibold",children:s.role_name})]})]})}),e.jsxs("div",{className:"md:hidden flex max-sm:flex-col text-sm border-b-2 pb-2 mb-2 border-gray-100 ",children:[e.jsxs("div",{className:"col-span-6 mr-4 max-sm:ml-4",children:[e.jsxs("p",{className:"flex justify-between",children:["Payment :",e.jsxs("span",{className:"font-semibold",children:[(s==null?void 0:s.payment_status)==0&&"UnPaid",(s==null?void 0:s.payment_status)==1&&"Paid",(s==null?void 0:s.payment_status)==2&&"Processing"]})]}),e.jsxs("p",{className:"flex justify-between",children:["Document :",e.jsx("span",{className:"font-semibold",children:(s==null?void 0:s.doc_upload_status)==!0?"Uploaded":"NotUpload"})]})]}),e.jsxs("div",{className:"col-span-6 ml-4 max-sm:mr-4",children:[e.jsxs("p",{className:"flex justify-between",children:["Type :",e.jsxs("span",{className:"font-semibold",children:[" ",s==null?void 0:s.application_type]})]}),e.jsxs("p",{className:"flex justify-between",children:["Apply on :",e.jsx("span",{className:"font-semibold text-xs",children:j(s==null?void 0:s.application_apply_date,"YYYY-MM-DD").format("DD-MMM-yy")})]})]})]}),e.jsxs("div",{className:"flex justify-center md:justify-end flex-wrap gap-1 md:gap-3",children:[(s==null?void 0:s.payment_status)==0&&(s==null?void 0:s.doc_upload_status)==!0?e.jsx("button",{onClick:()=>h(`/petPayment/${s==null?void 0:s.id}`),className:"px-2 md:px-3 py-1 rounded text-xs md:text-sm text-white bg-indigo-500 hover:bg-indigo-600",children:"Pay Now"}):"",(s==null?void 0:s.payment_status)==1&&e.jsx("button",{onClick:()=>h(`/pet-payment-receipt/${s==null?void 0:s.transactionNo}`),className:"px-2 md:px-3 py-1 rounded text-xs md:text-sm text-white bg-indigo-500 hover:bg-indigo-600",children:"Print Receipt"}),e.jsx("button",{onClick:()=>h(`/apply-pet-registration/document-upload/${s==null?void 0:s.id}`),className:"px-2 md:px-3 py-1 rounded text-xs md:text-sm text-white bg-indigo-500 hover:bg-indigo-600",children:"Upload Document"}),e.jsx("button",{onClick:()=>h(`/viewPetApplication/${s==null?void 0:s.id}`),className:"px-2 md:px-3 py-1 rounded text-xs md:text-sm text-white bg-indigo-500 hover:bg-indigo-600",children:"View Application"}),(s==null?void 0:s.payment_status)==0&&e.jsx("button",{onClick:()=>u({application_no:s==null?void 0:s.application_no,id:s==null?void 0:s.id}),className:"px-2 md:px-3 py-1 rounded text-xs md:text-sm text-white bg-red-500 hover:bg-red-600",children:"Delete"})]})]},s.name)})]},s.index)))})]})]}):e.jsx(D,{message:"No Previous Pet Registration Found."})},E=o=>{const[l,c]=n.useState(null),[p,i]=n.useState(!1),[g,r]=n.useState();n.useState(!1),n.useState(),n.useState(!1),n.useState();const[d,m]=n.useState(!1),[t,x]=n.useState(!1),{api_PetRegistrationList:k,api_petApprovedRegistrations:h,header:N}=_(),u=f();A();const b=a=>{c(l===a?null:a)},s=()=>{x(!0),v.post(h,{},N).then(a=>{x(!1),a.data.status?(m(a.data.data),console.log("list of applied list",a.data.data)):console.log("Failed to get application list",a.data.data)}).catch(a=>{console.log("Error while getting applied list",a),x(!1)})};return n.useEffect(()=>{s()},[]),t?"Loading..":d!=null&&d.length?e.jsxs(e.Fragment,{children:[p&&e.jsx(R,{setOpenDeleteModal:i,dataTobeDeleted:g,reFetch:s}),e.jsxs("div",{className:"w-full ml-2 md:ml-0 mb-10",children:[e.jsxs("p",{className:"font-manrope md:my-4 ",children:["Total Applications ",e.jsx("span",{className:"font-semibold",children:d==null?void 0:d.length})]}),e.jsx("div",{className:"hidden md:block bg-gray-200 text-gray-700 py-3 font-semibold rounded-md",children:e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsx("p",{className:"px-2 col-span-3 whitespace-nowrap",children:"Registration No"}),e.jsx("p",{className:"px-2 col-span-2",children:"Applicant Name"}),e.jsx("p",{className:"px-1 col-span-2",children:"Type"}),e.jsx("p",{className:"px-2 col-span-2 whitespace-nowrap",children:"Date"}),e.jsx("p",{className:"px-2 col-span-1",children:"Action"})]})}),e.jsx("div",{className:"overflow-y-auto h-screen mb-40 md:mr-0 mr-5 ",children:d&&(d==null?void 0:d.map((a,y)=>e.jsxs("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white cursor-pointer",onClick:()=>b(y),children:[e.jsxs("div",{className:" flex md:grid grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsx("p",{className:"px-4 py-2 break-all font-manrope font-semibold col-span-3 text-xs md:text-base",children:a==null?void 0:a.application_no}),e.jsx("p",{className:"hidden md:block px-4 py-2 break-all col-span-2",children:a==null?void 0:a.applicant_name}),e.jsx("p",{className:"px-4 py-1 break-words flex col-span-2 text-xs md:text-base",children:(a==null?void 0:a.current_status)=="Approved"?e.jsx("p",{className:"text-green-600 font-normal text-sm px-2 rounded-xl",children:"Approved"}):e.jsx("p",{className:"text-red-500 font-normal text-sm px-2 rounded-xl",children:"Under Renewal Process"})}),e.jsx("p",{className:"hidden md:block px-4 py-2 col-span-2",children:j(a==null?void 0:a.application_apply_date,"YYYY-MM-DD").format("DD-MMM-yy")}),e.jsx("p",{className:"px-2 md:px-3 py-1 rounded text-xs md:text-sm text-white bg-indigo-500 hover:bg-indigo-600 text-center",onClick:()=>u(`/viewApprovedApplication/${a==null?void 0:a.id}`),children:"View"}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-1",children:l===y?e.jsx(P,{size:24}):e.jsx(M,{size:24})})]}),e.jsx("div",{className:"flex-none bg-gray-100",children:l===y&&e.jsx("div",{className:"p-2 md:p-5 ease-in duration-300 bg-indigo-100",children:e.jsx("div",{className:"text-center md:text-left mb-2 md:mb-0",children:e.jsx("button",{onClick:()=>u(`/PetRegistrationPreviewList/${a==null?void 0:a.registration_id}`),className:"px-2 md:px-3 py-1 rounded text-xs md:text-sm text-white bg-indigo-500 hover:bg-indigo-600",children:"Preview"})})},a.name)})]},a.index)))})]})]}):e.jsx(D,{message:"No Data Found."})},L=o=>{const[l,c]=n.useState(!1),[p,i]=n.useState(!1),{api_petRejectedRegistrations:g,header:r}=_(),d=f();A();const m=()=>{i(!0),v.post(g,{},r).then(t=>{i(!1),t.data.status?(c(t.data.data),console.log("list of applied list",t.data.data)):console.log("Failed to get application list",t.data.data)}).catch(t=>{console.log("Error while getting applied list",t),i(!1)})};return n.useEffect(()=>{m()},[]),p?"Loading..":l!=null&&l.length?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full ml-2 md:ml-0 mb-10",children:[e.jsxs("p",{className:"font-manrope md:my-4 ",children:["Total Applications ",e.jsx("span",{className:"font-semibold",children:l==null?void 0:l.length})]}),e.jsx("div",{className:"hidden md:block bg-gray-200 text-gray-700 py-3 font-semibold rounded-md",children:e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsx("p",{className:"px-2 col-span-3 whitespace-nowrap",children:"Registration No"}),e.jsx("p",{className:"px-2 col-span-2",children:"Applicant Name"}),e.jsx("p",{className:"px-1 col-span-2",children:"Type"}),e.jsx("p",{className:"px-2 col-span-2 whitespace-nowrap",children:"Date"}),e.jsx("p",{className:"px-2 col-span-1",children:"Action"})]})}),e.jsx("div",{className:"overflow-y-auto h-screen mb-40 md:mr-0 mr-5 ",children:l&&(l==null?void 0:l.map((t,x)=>e.jsx("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white cursor-pointer",children:e.jsxs("div",{className:" flex md:grid grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsx("p",{className:"px-4 py-2 break-all font-manrope font-semibold col-span-3 text-xs md:text-base",children:t==null?void 0:t.application_no}),e.jsx("p",{className:"hidden md:block px-4 py-2 break-all col-span-2",children:t==null?void 0:t.applicant_name}),e.jsx("p",{className:"px-4 py-1 break-words flex col-span-2 text-xs md:text-base",children:e.jsx("p",{className:"text-red-600 font-normal text-sm px-2 rounded-xl",children:"Rejected"})}),e.jsx("p",{className:"hidden md:block px-4 py-2 col-span-2",children:j(t==null?void 0:t.application_apply_date,"YYYY-MM-DD").format("DD-MMM-yy")}),e.jsx("p",{className:"px-2 md:px-3 py-1 rounded text-xs md:text-sm text-white bg-indigo-500 hover:bg-indigo-600 text-center",onClick:()=>d(`/viewPetRejectedApplication/${t==null?void 0:t.id}`),children:"View"})]})})))})]})}):e.jsx(D,{message:"No Data Found."})},Z=()=>{const[o,l]=n.useState(1),c=f(),{setBreadCrumbData:p}=n.useContext(S);return n.useEffect(()=>{p(["Pet Registration Dashboard"])},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-8 max-sm:ml-2",children:[e.jsxs("div",{className:"flex-1 md:flex items-center md:justify-between",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"md:text-3xl text-2xl text-gray-800 font-semibold ",children:" Pet Registration Dashboard"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500 ",children:"Here is list of all pet registration applications."})]}),e.jsx("div",{className:"space-x-1  mt-3 mb-3",children:e.jsx("button",{onClick:()=>c("/apply-pet-registration"),className:"rounded md:rounded-md bg-colorBase px-1 md:px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-colorBaseLight ",children:e.jsxs("span",{className:"flex text-sm md:text-base",children:[e.jsx("span",{className:"md:mt-1 mr-1",children:e.jsx(C,{size:17})}),"New Registration"]})})})]}),e.jsx("div",{className:"",children:e.jsxs("ul",{className:"max-w-screen-xl border-b  flex items-center gap-1 md:gap-x-6 text-xs md:text-sm overflow-auto",children:[e.jsx("li",{className:`whitespace-nowrap py-2 border-b-2 ${o==1?"text-indigo-500 border-indigo-500":"border-white text-gray-500"}  `,children:e.jsx("button",{onClick:()=>l(1),role:"tab",className:`flex  ${o==1?"":"bg-indigo-400 text-white"} items-center gap-x-2 py-2 px-2 rounded duration-150 hover:text-indigo-500 hover:bg-gray-50 active:bg-gray-100 font-medium`,children:"Pending Applications"})}),e.jsx("li",{className:`whitespace-nowrap py-2 border-b-2 ${o==2?"text-indigo-500 border-indigo-500":"border-white text-gray-500"}  `,children:e.jsx("button",{onClick:()=>l(2),role:"tab",className:`flex  ${o==2?"":"bg-indigo-400 text-white"} items-center gap-x-2 py-2 px-2 rounded duration-150 hover:text-indigo-500 hover:bg-gray-50 active:bg-gray-100 font-medium`,children:"Approved List"})}),e.jsx("li",{className:`whitespace-nowrap py-2 border-b-2 ${o==3?"text-indigo-500 border-indigo-500":"border-white text-gray-500"}  `,children:e.jsx("button",{onClick:()=>l(3),role:"tab",className:`flex  ${o==3?"":"bg-indigo-400 text-white"} items-center gap-x-2 py-2 px-2 rounded duration-150 hover:text-indigo-500 hover:bg-gray-50 active:bg-gray-100 font-medium`,children:"Rejected List"})})]})}),e.jsx("div",{children:e.jsx("section",{className:"container mx-auto py-4",children:e.jsxs("div",{children:[o==1&&e.jsx(w,{errorMsg:"Error Data Loading..",children:e.jsx(Y,{})}),o==2&&e.jsx(w,{errorMsg:"Error Data Loading..",children:e.jsx(E,{})}),o==3&&e.jsx(w,{errorMsg:"Error Data Loading..",children:e.jsx(L,{})})]})})})]})})};export{Z as default};