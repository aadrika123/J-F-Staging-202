import{r as d,k as u,a as D,j as t,F as x,b as s,E as F}from"./index-b2fd101e.js";import{c as ee}from"./index.esm-9e9ea295.js";import{h as se}from"./moment-fbc5633a.js";import{W as te}from"./WaterApiList-d51ad522.js";import re from"./CommonLoader-0eb36f70.js";import{A as de}from"./ApplicationButtons-c0dec458.js";import"./iconBase-f72a2e5b.js";import"./BeatLoader-3a45eaa2.js";function Ne(ae){var o,n,i,l,h,m,N,y,b,p,g,f,v,w,A,_,P,S,C,M,T,L,W,Y,j,k,q,B,E,O,I,$,G,H,U,V,z;const[J,c]=d.useState(!1),[e,K]=d.useState();d.useState(0),d.useState(!0),d.useState(0),d.useState();const{id:a}=u();console.log("param",a);const Q=D(),{api_getPendingApplicationDetails:R,header:X}=te(),Z=()=>{c(!0),F.post(`${R}`,{applicationId:a},X).then(function(r){console.log("view Water full details ...",r.data.data),K(r.data.data),c(!1)}).catch(function(r){console.log("==2 details by id error...",r),c(!1)})};return d.useEffect(()=>{Z()},[a]),console.log("isLoading",e),t(x,{children:[J&&s(re,{}),s("div",{className:"mx-auto w-full",children:t("div",{className:"",children:[s(de,{active:"application"}),t("div",{className:"",children:[s("h1",{className:"px-1 mt-3 text-center font-semibold text-gray-700",children:" Basic Details"}),s("p",{className:"border-b border-gray-700 mx-5"}),t("div",{className:" mt-2 border bg-white rounded-lg shadow-xl",children:[t("div",{className:"space-y-4 pl-4 border border-gray-300 rounded m-2 p-2",children:[t("div",{className:"flex space-x-4 ",children:[t("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-sm",children:(o=e==null?void 0:e.applicationDetails)!=null&&o.ulb_name?(n=e==null?void 0:e.applicationDetails)==null?void 0:n.ulb_name:"N/A"}),s("div",{className:"text-gray-600 text-xs",children:"ULB Name"})]}),t("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:(i=e==null?void 0:e.applicationDetails)!=null&&i.application_no?(l=e==null?void 0:e.applicationDetails)==null?void 0:l.application_no:"N/A"}),s("div",{className:"text-gray-600 text-xs",children:"Application No."})]})]}),t("div",{className:"flex space-x-4 ",children:[t("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-sm",children:(h=e==null?void 0:e.applicationDetails)!=null&&h.connection_type?(m=e==null?void 0:e.applicationDetails)==null?void 0:m.connection_type:"N/A"}),s("div",{className:"text-gray-600 text-xs",children:"Connection Type"})]}),t("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-sm",children:(N=e==null?void 0:e.applicationDetails)!=null&&N.pipeline_type?(y=e==null?void 0:e.applicationDetails)==null?void 0:y.pipeline_type:"N/A"}),s("div",{className:"text-gray-600 text-xs",children:"Pipeline Type"})]})]}),t("div",{className:"flex space-x-4 ",children:[t("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-sm",children:(b=e==null?void 0:e.applicationDetails)!=null&&b.apply_from?(p=e==null?void 0:e.applicationDetails)==null?void 0:p.apply_from:"N/A"}),s("div",{className:"text-gray-600 text-xs",children:"Apply From"})]}),t("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-sm",children:(g=e==null?void 0:e.applicationDetails)!=null&&g.apply_date?se((f=e==null?void 0:e.applicationDetails)==null?void 0:f.apply_date,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),s("div",{className:"text-gray-600 text-xs",children:"Apply Date"})]})]})]}),s("h1",{className:"px-1 mt-3 text-center font-semibold text-gray-700",children:" Property Address & Details"}),s("p",{className:"border-b border-gray-700 mx-5"}),t("div",{className:"border shadow-md p-2 space-x-2 flex",children:[s("div",{className:"text-gray-600 text-xs",children:"Ward No."}),s("div",{className:"font-bold text-sm",children:(v=e==null?void 0:e.applicationDetails)!=null&&v.ward_name?(w=e==null?void 0:e.applicationDetails)==null?void 0:w.ward_name:"N/A"})]}),t("div",{className:"border shadow-md p-2 space-x-2 flex",children:[s("div",{className:"text-gray-600 text-xs",children:"Connection Through"}),s("div",{className:"font-bold text-sm",children:(A=e==null?void 0:e.applicationDetails)!=null&&A.connection_through?(_=e==null?void 0:e.applicationDetails)==null?void 0:_.connection_through:"N/A"})]}),((P=e==null?void 0:e.applicationDetails)==null?void 0:P.connection_through)=="SAF"?t("div",{className:"border shadow-md p-2 space-x-2 flex",children:[s("div",{className:"text-gray-600 text-xs",children:"SAF No"}),s("div",{className:"font-semibold text-sm",children:(S=e==null?void 0:e.applicationDetails)!=null&&S.saf_no?(C=e==null?void 0:e.applicationDetails)==null?void 0:C.saf_no:"N/A"})]}):t("div",{className:"border shadow-md p-2 space-x-2 flex",children:[s("div",{className:"text-gray-600 text-xs",children:"Holding No"}),s("div",{className:"font-semibold text-sm",children:(M=e==null?void 0:e.applicationDetails)!=null&&M.holding_no?(T=e==null?void 0:e.applicationDetails)==null?void 0:T.holding_no:"N/A"})]}),t("div",{className:"border shadow-md p-2 space-x-2 flex",children:[s("div",{className:"text-gray-600 text-xs",children:"Area (Sqft.)"}),s("div",{className:"font-bold text-sm",children:(L=e==null?void 0:e.applicationDetails)!=null&&L.area_sqft?(W=e==null?void 0:e.applicationDetails)==null?void 0:W.area_sqft:"N/A"})]}),t("div",{className:"border shadow-md p-2 space-x-2 flex",children:[s("div",{className:"text-gray-600 text-xs",children:"Ownership Type"}),s("div",{className:"font-semibold text-md",children:(Y=e==null?void 0:e.applicationDetails)!=null&&Y.owner_char_type?(j=e==null?void 0:e.applicationDetails)==null?void 0:j.owner_char_type:"N/A"})]}),t("div",{className:"border shadow-md p-2 space-x-2 flex",children:[s("div",{className:"text-gray-600 text-xs",children:"Category"}),s("div",{className:"font-bold text-sm",children:(k=e==null?void 0:e.applicationDetails)!=null&&k.category?(q=e==null?void 0:e.applicationDetails)==null?void 0:q.category:"N/A"})]}),t("div",{className:"border shadow-md p-2 space-x-2 flex",children:[s("div",{className:"text-gray-600 text-xs",children:"Property Type"}),s("div",{className:"font-bold text-sm",children:(B=e==null?void 0:e.applicationDetails)!=null&&B.property_type?(E=e==null?void 0:e.applicationDetails)==null?void 0:E.property_type:"N/A"})]}),t("div",{className:"border shadow-md p-2 space-x-2 flex",children:[s("div",{className:"text-gray-600 text-xs",children:"Property Address"}),t("div",{className:"font-bold text-sm",children:[(O=e==null?void 0:e.applicationDetails)!=null&&O.address?(I=e==null?void 0:e.applicationDetails)==null?void 0:I.address:"N/A"," , ",($=e==null?void 0:e.applicationDetails)==null?void 0:$.prop_state]})]})]}),s("h1",{className:"px-1 mt-3 text-center font-semibold text-gray-700",children:" Owner Details"}),s("p",{className:"border-b border-gray-700 mx-5"}),s("div",{className:"mt-5",children:t("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[s("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:t("tr",{children:[s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Owner Name"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Guardian Name"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Mobile No."}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"email "})]})}),s("tbody",{className:"text-sm",children:s(x,{children:(G=e==null?void 0:e.ownerDetails)==null?void 0:G.map(r=>t("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.applicant_name?r==null?void 0:r.applicant_name:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.guardian_name?r==null?void 0:r.guardian_name:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.mobile_no?r==null?void 0:r.mobile_no:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.email?r==null?void 0:r.email:"N/A"})]}))})})]})}),(e==null?void 0:e.calculation)&&t("div",{className:"mt-10",children:[t("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[s(ee,{className:"inline"}),"Application Payment Details"]}),t("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[s("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:t("tr",{children:[s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Category"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Conn Fee"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Total"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Action"})]})}),s("tbody",{className:"text-sm",children:s(x,{children:t("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:1}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(H=e==null?void 0:e.calculation)==null?void 0:H.chargeCatagory}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(U=e==null?void 0:e.calculation)==null?void 0:U.connectionFee}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(V=e==null?void 0:e.calculation)==null?void 0:V.penalty}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(z=e==null?void 0:e.calculation)==null?void 0:z.totalAmount}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:s("button",{onClick:()=>Q(`/water-application-payment/${a}`),type:"button",className:" px-5 py-2.5 border border-indigo-500 hover:text-indigo-100 font-medium text-xs leading-tight uppercase rounded shadow-xl bg-indigo-700 hover:bg-indigo-800 text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Pay Now"})})]})})})]})]})]})]})}),s("div",{className:"w-full h-32"})]})}export{Ne as default};