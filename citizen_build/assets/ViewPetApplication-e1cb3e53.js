import{j as s}from"./mui-8e804a04.js";import{r as d,u as S,f as C}from"./router-87042356.js";import{P as k}from"./PetRegAPIList-ecb0f7fd.js";import{A as E}from"./index-64a2c705.js";import{S as r}from"./ShimmerEffectInline-66ba2926.js";import{P as Y}from"./PetRegTopButtons-48d948a5.js";import{h as n}from"./moment-fbc5633a.js";import{E as R,p as I}from"./EditPetDetailsForm-bb850137.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index-4e794517.js";import"./WaterApiList-6bcd40e2.js";const X=()=>{var j,f,a,v,b,g,y,_,w;const[e,o]=d.useState(),[x,i]=d.useState(!1),[A,h]=d.useState(!1),[l,N]=d.useState(!1),m=S(),{id:c}=C(),{api_PetRegViewApplication:P,header1:M}=k();return d.useEffect(()=>{i(!0),E.post(P,{applicationId:c},M).then(t=>{i(!1),t.data.status?o(t.data.data):(h(!0),o(null),console.log("Failed to fetch application data"))}).catch(t=>{i(!1),h(!0),console.log("Error while getting application data")})},[]),console.log("applicationFullData",e),s.jsxs("div",{className:"mt-4",children:[s.jsx(Y,{active:"application",consumerNo:e==null?void 0:e.application_no}),l&&s.jsx(R,{clear:N,applicationData:l}),s.jsx("div",{className:"grid grid-cols-12 mb-20",children:s.jsxs("div",{className:"rounded-md col-span-12",children:[(e==null?void 0:e.current_role_name)&&s.jsxs("p",{className:"text-center text-green-600 font-semibold",children:[" Your Application Submitted. Currently at ",e==null?void 0:e.current_role_name]}),A==!0?s.jsx("p",{className:"m-auto mt-10 font-semibold border border-gray-300 text-red-700 bg-red-100 px-5 py-2 rounded shadow w-fit",children:"Failed to Get Data"}):s.jsxs("div",{className:"overflow-y-auto",children:[s.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-3",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs mt-2 text-[#37517e]",children:[s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/609/609803.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," Property Address & Details"]}),x?s.jsx(r,{}):s.jsxs("div",{className:"mt-2",children:[s.jsxs("div",{className:"flex space-x-10 pl-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3 ",children:[s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"ULB Name"}),s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:e!=null&&e.ulb_name?e==null?void 0:e.ulb_name:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Ward No"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.ward_name?e==null?void 0:e.ward_name:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Apply Through"}),s.jsxs("div",{className:"font-bold text-sm text-[#37517e]",children:[(e==null?void 0:e.apply_through)==1&&"Holding",(e==null?void 0:e.apply_through)==2&&"SAF"]})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Category of Application"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.ref_application_type?e==null?void 0:e.ref_application_type:"N/A"})]}),(e==null?void 0:e.holding_no)&&s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Holding No"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.holding_no?e==null?void 0:e.holding_no:"N/A"})]}),(e==null?void 0:e.saf_no)&&s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"SAF No"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.saf_no?e==null?void 0:e.saf_no:"N/A"})]})]}),s.jsx("div",{}),s.jsxs("div",{className:"col-span-4 grid grid-cols-5 justify-center items-center",children:[s.jsx("div",{className:"col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"}),s.jsx("div",{className:"flex justify-center items-center",children:s.jsxs("label",{className:"form-check-label text-gray-800",children:[" ",s.jsx("small",{className:"block mt-1 text-xs text-gray-400 inline md:px-4 font-mono text-center",children:"Complete Address"})]})}),s.jsx("div",{className:"col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"})]}),s.jsx("div",{className:"px-4",children:s.jsx("div",{className:"flex text-xs",children:s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Address"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.address?e==null?void 0:e.address:"N/A"})]})})})]})]}),s.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-3 relative",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs mt-2 text-[#37517e]",children:[s.jsx("img",{src:I,alt:"Pet Detail",className:"w-5 inline text-[#37517e]"})," Pet Details"]}),(e==null?void 0:e.payment_status)==0&&(e==null?void 0:e.application_type)=="New_Apply"?s.jsx("div",{className:"absolute right-3 top-3",children:s.jsx("button",{onClick:()=>N(e),className:"border bg-indigo-500 hover:bg-indigo-600 rounded shadow text-white px-2 py-1",children:"Edit Details"})}):"",x?s.jsx(r,{}):s.jsxs("div",{className:"mt-2 max-sm:mt-4 space-y-5",children:[s.jsxs("div",{className:"flex space-x-10 pl-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2",children:[s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Pet Type"}),s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:e!=null&&e.pet_type?(e==null?void 0:e.pet_type)==1&&"Dog":"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Name of Pet"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.pet_name?e==null?void 0:e.pet_name:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Gender"}),s.jsxs("div",{className:"font-bold text-sm text-[#37517e]",children:[(e==null?void 0:e.sex)==1&&"Male",(e==null?void 0:e.sex)==2&&"Female",!(e!=null&&e.sex)&&"N/A"]})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Date of Birth"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.dob?n(e.dob).format("DD-MM-Y"):"N/A"})})]})]}),s.jsxs("div",{className:"flex space-x-10 pl-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3",children:[s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Breed"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.breed?e==null?void 0:e.breed:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Color"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.color?e==null?void 0:e.color:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Veterinary Doctor Name"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.vet_doctor_name?e==null?void 0:e.vet_doctor_name:"N/A"})]}),s.jsx("div",{className:"flex-1 text-xs"})]}),s.jsxs("div",{className:"flex space-x-10 pl-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3",children:[s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Doctor’s MSVC/VCI number"}),s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:e!=null&&e.doctor_registration_no?e==null?void 0:e.doctor_registration_no:"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Date of Rabies"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.rabies_vac_date?n(e.rabies_vac_date).format("DD-MM-Y"):"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Leptospirosis Vaccination Date"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.leptospirosis_vac_date?n(e.leptospirosis_vac_date).format("DD-MM-Y"):"N/A"})]}),s.jsxs("div",{className:"flex-1 text-xs",children:[s.jsx("div",{className:"text-[#37517e]",children:"Pet From"}),s.jsx("div",{className:"font-bold text-sm text-[#37517e]",children:e!=null&&e.occurrence_types?e==null?void 0:e.occurrence_types:"N/A"})]})]})]})]}),(e==null?void 0:e.doc_upload_status)==!0?s.jsx(s.Fragment,{children:s.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs mt-2 text-[#37517e]",children:[s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/8948/8948774.png",alt:"Upload",className:"w-5 inline text-[#37517e]"})," Payment Details"]}),((j=e==null?void 0:e.charges)==null?void 0:j.paid_status)==0&&s.jsxs("div",{children:[s.jsx("div",{className:"text-center",children:s.jsx("p",{children:"Please Make Payment"})}),s.jsx("div",{className:"flex justify-center",children:s.jsx("button",{onClick:()=>m(`/petPayment/${c}`),className:"px-2 py-1 bg-indigo-600 text-sm text-white",children:"Pay Now"})})]}),((f=e==null?void 0:e.charges)==null?void 0:f.paid_status)==1&&s.jsxs("div",{className:"mt-2 max-sm:flex max-sm:mt-5",children:[s.jsxs("div",{className:"flex max-sm:flex-col space-x-10 pl-4 max-sm:space-x-0 max-sm:pl-0 ",children:[s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Sl."})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Trans No"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Amount"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Payment Mode"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Status"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Payment Date"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"text-[#37517e]",children:"Action"})})]}),(e==null?void 0:e.transactionDetails)&&s.jsxs("div",{className:"flex max-sm:flex-col space-x-10 pl-4 my-2 border-y-gray-200 max-sm:space-x-0 max-sm:ml-10 max-sm:space-y-5",children:[s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:"1"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"font-semibold text-sm text-[#37517e] whitespace-nowrap",children:((a=e==null?void 0:e.transactionDetails)==null?void 0:a.tran_no)||"N/A"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsxs("div",{className:"font-bold text-sm text-[#37517e]",children:[" ",((v=e==null?void 0:e.transactionDetails)==null?void 0:v.amount)||"N/A"]})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:((b=e==null?void 0:e.transactionDetails)==null?void 0:b.payment_mode)||"N/A"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsxs("div",{className:"font-semibold text-sm text-[#37517e]",children:[((g=e==null?void 0:e.transactionDetails)==null?void 0:g.verify_status)==1&&"Paid",((y=e==null?void 0:e.transactionDetails)==null?void 0:y.verify_status)==2&&"Processing"]})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:n((_=e==null?void 0:e.transactionDetails)==null?void 0:_.created_at,"YYYY-MM-DD").format("DD-MM-yy")||"N/A"})}),s.jsx("div",{className:"flex-1 text-xs",children:s.jsx("div",{className:"font-semibold text-sm text-[#37517e]",children:s.jsx("button",{onClick:()=>{var t;return m(`/pet-payment-receipt/${(t=e==null?void 0:e.transactionDetails)==null?void 0:t.tran_no}`)},className:"hover:bg-blue-500 whitespace-nowrap border rounded shadow px-5 py-1 border-blue-500 hover:text-white text-blue-500",children:"Print Receipt"})})})]})]}),((w=e==null?void 0:e.charges)==null?void 0:w.paid_status)==2&&s.jsx("div",{className:"text-center text-indigo-600",children:"Payment Pending"}),x&&s.jsx(r,{})]})}):"",s.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-5",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs text-[#37517e]",children:[s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/2029/2029957.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," Document Details"]}),x?s.jsx(r,{}):e!=null&&e.doc_upload_status?s.jsxs("div",{children:[s.jsx("div",{className:"text-center",children:s.jsx("p",{className:"text-green-500",children:"All Documents Uploaded"})}),s.jsx("div",{className:"flex justify-center",children:s.jsx("button",{onClick:()=>m(`/apply-pet-registration/document-upload/${c}`),className:"px-2 py-1 bg-indigo-600 text-sm text-white rounded",children:"Review Documents"})})]}):s.jsxs("div",{children:[s.jsx("div",{className:"text-center",children:s.jsx("p",{children:"Please Upload Document"})}),s.jsx("div",{className:"flex justify-center",children:s.jsx("button",{onClick:()=>m(`/apply-pet-registration/document-upload/${c}`),className:"px-2 py-1 bg-indigo-600 text-sm text-white",children:"Upload Document"})})]})]}),s.jsxs("div",{className:"bg-white shadow-xl p-4 border border-gray-200 my-5",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs text-[#37517e]",children:[s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/2029/2029957.png",alt:"pin",className:"w-5 inline text-[#37517e]"})," Owner Details"]}),x?s.jsx(r,{}):s.jsx("div",{className:"overflow-auto",children:s.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white",children:[s.jsx("thead",{className:"font-bold text-left text-sm border text-[#37517e] bg-sky-100",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"#"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Owner Name"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Mobile No."}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"Email "}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs uppercase text-left",children:"PAN No"})]})}),s.jsx("tbody",{className:"text-sm",children:s.jsx(s.Fragment,{children:s.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:"1"}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:e!=null&&e.applicant_name?e==null?void 0:e.applicant_name:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:e!=null&&e.mobile_no?e==null?void 0:e.mobile_no:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:e!=null&&e.email?e==null?void 0:e.email:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-sm text-left text-[#37517e]",children:e!=null&&e.pan_no?e==null?void 0:e.pan_no:"N/A"})]})})})]})})]})]})]})})]})};export{X as default};