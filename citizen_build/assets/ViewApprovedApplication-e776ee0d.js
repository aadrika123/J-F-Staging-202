import{j as s}from"./mui-8e804a04.js";import{r,u as A,f as P}from"./router-87042356.js";import{h as m}from"./moment-fbc5633a.js";import{A as M}from"./index-1f16bcd2.js";import{P as S}from"./PetRegAPIList-65435aa2.js";import{S as d}from"./ShimmerEffectInline-66ba2926.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const T=()=>{var i,h,N,j,a,f,b;const[e,l]=r.useState(),[t,c]=r.useState(!1),[g,k]=r.useState(!1),n=A(),{id:o}=P(),{api_PetApproveViewApplication:y,header:_}=S();return r.useEffect(()=>{c(!0),M.post(y,{registrationId:o},_).then(x=>{c(!1),x.data.status?l(x.data.data):(l(null),console.log("Failed to fetch application data"))}).catch(x=>{c(!1),console.log("Error while getting application data")})},[]),console.log("applicationFullData",e),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex justify-between mt-6 max-sm:p-3",children:[s.jsxs("p",{className:"text-xl",children:["Application No : ",s.jsx("span",{className:"font-semibold",children:e==null?void 0:e.application_no})]}),s.jsx("div",{className:"space-x-5",children:(e==null?void 0:e.registrationStatus)==1?s.jsx("button",{className:"font-semibold md:text-base text-xs bg-indigo-500 text-white border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>n(`/pet-renewal/${o}`),children:"Renewal"}):""})]}),s.jsx("div",{className:"grid grid-cols-12 mb-20 max-sm:p-3 rounded",children:s.jsxs("div",{className:"rounded-md col-span-12",children:[(e==null?void 0:e.current_role_name)&&s.jsxs("p",{className:"text-center text-green-600 font-semibold",children:[" Your Application Submitted. Currently at ",e==null?void 0:e.current_role_name]}),g==!0?s.jsx("p",{className:"m-auto mt-10 font-semibold border border-gray-300 text-red-700 bg-red-100 px-5 py-2 rounded shadow w-fit",children:"Failed to Get Data"}):s.jsxs("div",{className:"overflow-y-auto",children:[s.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-3",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs mt-2 text-[#37517e]",children:[s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/609/609803.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," Property Address & Details"]}),t?s.jsx(d,{}):s.jsxs("div",{className:"mt-2 ",children:[s.jsxs("div",{className:"flex space-x-10 pl-4 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2",children:[s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"ULB Name"}),s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:e!=null&&e.ulb_name?e==null?void 0:e.ulb_name:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Ward No"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.ward_name?e==null?void 0:e.ward_name:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Apply Through"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.apply_through_name?e==null?void 0:e.apply_through_name:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Category of Application"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.ref_application_type?e==null?void 0:e.ref_application_type:"N/A"})]}),(e==null?void 0:e.holding_no)&&s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Holding No"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.holding_no?e==null?void 0:e.holding_no:"N/A"})]}),(e==null?void 0:e.saf_no)&&s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"SAF No"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.saf_no?e==null?void 0:e.saf_no:"N/A"})]})]}),s.jsx("div",{}),s.jsxs("div",{className:"col-span-4 grid grid-cols-5 justify-center items-center",children:[s.jsx("div",{className:"col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"}),s.jsx("div",{className:"flex justify-center items-center",children:s.jsxs("label",{className:"form-check-label text-gray-800",children:[" ",s.jsx("small",{className:"block mt-1 text-xs text-gray-400 inline md:px-4 font-mono text-center",children:"Complete Address"})]})}),s.jsx("div",{className:"col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"})]}),s.jsx("div",{className:"px-4",children:s.jsx("div",{className:"flex text-xs",children:s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Address"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.address?e==null?void 0:e.address:"N/A"})]})})})]})]}),s.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-3",children:[s.jsx("h1",{className:"px-1 font-semibold font-serif text-xs mt-2 text-[#37517e]",children:"Pet Details"}),t?s.jsx(d,{}):s.jsxs("div",{className:"mt-2 space-y-5",children:[s.jsxs("div",{className:"flex space-x-10 pl-4 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 ",children:[s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Pet Type"}),s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:e!=null&&e.pet_type?(e==null?void 0:e.pet_type)==1&&"Dog":"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Name of Pet"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.pet_name?e==null?void 0:e.pet_name:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Gender"}),s.jsxs("div",{className:"font-bold text-sm text-[#37517e]",children:[(e==null?void 0:e.sex)==1&&"Male",(e==null?void 0:e.sex)==2&&"Female",!(e!=null&&e.sex)&&"N/A"]})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Date of Birth"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.dob?m(e.dob).format("DD-MM-Y"):"N/A"})})]})]}),s.jsxs("div",{className:"flex space-x-10 pl-4 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2",children:[s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Breed"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.breed?e==null?void 0:e.breed:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Color"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.color?e==null?void 0:e.color:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Veterinary Doctor Name"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.vet_doctor_name?e==null?void 0:e.vet_doctor_name:"N/A"})]}),s.jsx("div",{className:"flex-1 text-xs"})]}),s.jsxs("div",{className:"flex space-x-10 pl-4 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2",children:[s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Doctor’s MSVC/VCI number"}),s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:e!=null&&e.doctor_registration_no?e==null?void 0:e.doctor_registration_no:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Date of Rabies"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.rabies_vac_date?m(e.rabies_vac_date).format("DD-MM-Y"):"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Leptospirosis Vaccination Date"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.leptospirosis_vac_date?m(e.leptospirosis_vac_date).format("DD-MM-Y"):"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Pet From"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.occurrence_types?e==null?void 0:e.occurrence_types:"N/A"})]})]})]})]}),t?s.jsx(d,{}):((i=e==null?void 0:e.documentDetails)==null?void 0:i.doc_upload_status)&&s.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-5",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs text-[#37517e]",children:[s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/2029/2029957.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," Document Details"]}),s.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white",children:[s.jsx("thead",{className:"font-bold text-left text-sm border text-[#37517e] bg-sky-100",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"#"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Document Name"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Status"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Preview"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"View "})]})}),s.jsx("tbody",{className:"text-sm",children:s.jsx(s.Fragment,{children:(N=(h=e==null?void 0:e.documentDetails)==null?void 0:h.documentsList)==null?void 0:N.map((x,w)=>{var v;return s.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:w+1}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:x!=null&&x.docName?x==null?void 0:x.docName:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:(x==null?void 0:x.uploadDoc)==""?s.jsx("p",{className:"text-red-400 font-semibold",children:"NotUpload"}):s.jsx("p",{className:"text-green-400 font-semibold",children:"Uploaded"})}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]"}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:(v=x==null?void 0:x.uploadDoc)!=null&&v.doc_path?s.jsx("button",{className:"bg-indigo-600 text-white px-2 py-1 rounded",children:"View"}):s.jsx("button",{disabled:!0,className:"bg-indigo-200 text-white px-2 py-1 rounded",children:"View"})})]})})})})]})]}),s.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-5 overflow-auto",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs text-[#37517e]",children:[s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/2029/2029957.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," Owner Details"]}),t?s.jsx(d,{}):s.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white",children:[s.jsx("thead",{className:"font-bold text-left text-sm border text-[#37517e] bg-sky-100",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"#"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Owner Name"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Father Name"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Mobile No."}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Email "}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"PAN No"})]})}),s.jsx("tbody",{className:"text-sm",children:s.jsx(s.Fragment,{children:s.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:"1"}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:e!=null&&e.applicant_name?e==null?void 0:e.applicant_name:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:e!=null&&e.guardian_name?e==null?void 0:e.guardian_name:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:e!=null&&e.mobile_no?e==null?void 0:e.mobile_no:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:e!=null&&e.email?e==null?void 0:e.email:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:e!=null&&e.pan_no?e==null?void 0:e.pan_no:"N/A"})]})})})]})]}),s.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 overflow-auto",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs mt-2 text-[#37517e]",children:[s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/8948/8948774.png",alt:"Upload",className:"w-5 inline text-[#37517e]"})," Payment Details"]}),t?s.jsx(d,{}):(e==null?void 0:e.payment_status)==0?s.jsx("div",{className:"text-center text-indigo-600",children:s.jsxs("div",{children:[s.jsx("div",{className:"text-center",children:s.jsx("p",{children:"Please Make Payment"})}),s.jsx("div",{className:"flex justify-center",children:s.jsx("button",{onClick:()=>n(`/pet-payment-offline/${o}`),className:"px-2 py-1 bg-indigo-600 text-sm text-white",children:"Pay Now"})})]})}):s.jsxs("div",{className:"mt-2",children:[s.jsxs("div",{className:"flex space-x-10 pl-4 ",children:[s.jsx("div",{className:"text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Sl."})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Trans No"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Amount"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Payment Mode"})}),s.jsx("div",{className:" text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Status"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Payment Date"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Action"})})]}),(e==null?void 0:e.transactionDetails)&&s.jsxs("div",{className:"flex space-x-10 pl-4 my-2 border-y-gray-200",children:[s.jsx("div",{className:"text-xs",children:s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:"1."})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"font-semibold text-sm whitespace-nowrap text-[#37517e]",children:((j=e==null?void 0:e.transactionDetails)==null?void 0:j.tran_no)||"N/A"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:((a=e==null?void 0:e.transactionDetails)==null?void 0:a.amount)||"N/A"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:((f=e==null?void 0:e.transactionDetails)==null?void 0:f.payment_mode)||"N/A"})}),s.jsx("div",{className:"text-xs",children:s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:"Paid"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:m((b=e==null?void 0:e.transactionDetails)==null?void 0:b.created_at).format("DD-MM-yy")||"N/A"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s.jsx("button",{className:"border px-3 py-1 rounded shadow border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 whitespace-nowrap",onClick:()=>{var x;return n(`/pet-payment-receipt/${(x=e==null?void 0:e.transactionDetails)==null?void 0:x.tran_no}`)},children:"Print Receipt"})})})]})]})]})]})]})})]})};export{T as default};