import{l as t,v as _,m as A,H as w,W as M,k as d,o as h,j as s,D as S,M as n,h as W,q as C}from"./index-35b2134e.js";import{W as T}from"./WaterUpdateMeterModal-d99a9581.js";import{W as L}from"./WaterTopButtons-d6d18e66.js";function Y(P){var o;const[m,x]=t.useState(!1),[e,N]=t.useState(),[f,j]=t.useState(0),[l,y]=t.useState(!0),[a,g]=t.useState(0);t.useState();const{id:c}=_();console.log("param",c),A(),w("Water Consumer Details");const{api_waterApprovedApplicationDetails:i,header:v}=M(),b=()=>{x(!0),C.post(i,{id:c},v).then(function(r){console.log("water Approved Application Details",r.data.data),N(r.data.data),x(!1)}).catch(function(r){console.log("Error : water Approved Application Details",r),x(!1)})};return t.useEffect(()=>{b(),(e==null?void 0:e.connectionName)=="Fixed"&&y(!1)},[c,a]),d(h,{children:[m&&s(S,{}),s(T,{refetch:()=>g(r=>r+1),id:c,isConnectionFixed:l,openMeterModal:f}),s(L,{active:"consumer",consumerNo:e==null?void 0:e.consumer_no}),s("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:d("div",{className:"col-span-12 rounded-lg p-4",children:[d("div",{className:"p-4",children:[d("div",{className:"",children:[d("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[s(n,{className:"inline"})," Basic Details"]}),s("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:d("div",{className:"flex space-x-5 pl-4 ",children:[d("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-sm",children:e!=null&&e.ulb_name?e==null?void 0:e.ulb_name:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"ULB Name"})]}),d("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.consumer_no?e==null?void 0:e.consumer_no:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Consumer No"})]}),d("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.pipeline_type?e==null?void 0:e.pipeline_type:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Pipeline Type"})]}),d("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.connection_type?e==null?void 0:e.connection_type:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),d("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.apply_from?e==null?void 0:e.apply_from:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Apply From"})]}),d("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.application_apply_date?W(e==null?void 0:e.application_apply_date,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Apply Data"})]})]})})]}),d("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[s(n,{className:"inline"})," Property Address & Details"]}),d("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[d("div",{className:"flex space-x-10 pl-4 ",children:[d("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.ward_name?e==null?void 0:e.ward_name:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),d("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.connection_through?e==null?void 0:e.connection_through:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(e==null?void 0:e.connection_through)=="SAF"?d("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.saf_no?e==null?void 0:e.saf_no:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):d("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.holding_no?e==null?void 0:e.holding_no:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Holding No"})]}),d("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.area_sqft?e==null?void 0:e.area_sqft:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Area (Sqft.)"})]}),d("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.owner_char_type?e==null?void 0:e.owner_char_type:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),d("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.category?e==null?void 0:e.category:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Category"})]}),d("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.property_type?e==null?void 0:e.property_type:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),s("div",{className:"flex space-x-10  pl-4 mt-4",children:d("div",{className:"flex-1",children:[d("div",{className:"font-bold text-sm",children:[e!=null&&e.address?e==null?void 0:e.address:"N/A"," , ",e==null?void 0:e.prop_state]}),s("div",{className:"text-gray-500 text-xs",children:"Property Address"})]})}),s("div",{})]}),d("div",{className:"mt-10",children:[d("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[s(n,{className:"inline"})," Owner Details"]}),d("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[s("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:d("tr",{children:[s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Owner Name"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Guardian Name"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Mobile No."}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"email "})]})}),s("tbody",{className:"text-sm",children:s(h,{children:(o=e==null?void 0:e.ownerDetails)==null?void 0:o.map(r=>d("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.applicant_name?r==null?void 0:r.applicant_name:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.guardian_name?r==null?void 0:r.guardian_name:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.mobile_no?r==null?void 0:r.mobile_no:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.email?r==null?void 0:r.email:"N/A"})]}))})})]})]})]}),s("div",{className:"flex justify-end"})]})}),s("div",{className:"w-full h-60"})]})}export{Y as default};