import{j as e}from"./mui-8e804a04.js";import{r as c,f as P,u as A}from"./router-87042356.js";import{A as N,b,B as H,n as r}from"./index-c520ecbd.js";import{C as B}from"./CitizenApplyApiList-1f568be1.js";import{P as E}from"./PropertyApiList-738f9bc9.js";import{T as R}from"./TopTabs-316047cc.js";import"./CommonModal-340f9ebb.js";import{S as q}from"./ServerErrorCard-e788444f.js";import{j as g,k as C}from"./Styles-a2fa8249.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index.esm-c151f2f7.js";import"./index-4e794517.js";function F(){var a,f;const[x,v]=c.useState(),[_,i]=c.useState(!1),[t,n]=c.useState(),[u,d]=c.useState(!1),{api_getSpecificHoldingTranscationHistory:w}=B(),{api_getPropHoldingDetailsById:z}=E(),{id:o}=P(),h=A();c.useEffect(()=>{console.log("fethcing in useEffect"),S()},[]);const S=()=>{i(!0);let s={propId:o};console.log("before fetch factory data"),N.post(w,s,b()).then(function(l){var m;console.log("all transcation list at holding specific----- ",l==null?void 0:l.data),v((m=l==null?void 0:l.data)==null?void 0:m.data),i(!1)}).catch(function(l){console.log("error at transactions fetch ",l),i(!1)})},T=()=>{d(!1),i(!0),N.post(`${z}`,{propertyId:o},b()).then(function(s){var l,m,p,y,j;console.log("view prop prop full details...",(l=s==null?void 0:s.data)==null?void 0:l.data),(p=(m=s==null?void 0:s.data)==null?void 0:m.data)!=null&&p.status?n((y=s==null?void 0:s.data)==null?void 0:y.data):n((j=s==null?void 0:s.data)==null?void 0:j.data),i(!1)}).catch(function(s){console.log("==2 details by id error...",s),d(!0),i(!1)})};return c.useEffect(()=>{T()},[]),_?e.jsxs(e.Fragment,{children:[e.jsx(H,{}),e.jsx("div",{className:"min-h-screen"})]}):u?e.jsx(q,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-ful  mx-auto max-sm:p-2",children:[e.jsx("div",{className:"",children:e.jsx(R,{title:"Payment History",type:"holding",id:o,safNo:"",active:"payment"})}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex max-sm:flex-col md:space-x-5 md:pl-4 ",children:[e.jsxs("div",{className:"flex-1 max-sm:mb-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(t==null?void 0:t.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1 max-sm:mb-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:r(t==null?void 0:t.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:"New Ward No"})]}),e.jsxs("div",{className:"flex-1 max-sm:mb-1",children:[e.jsx("div",{className:"font-semibold text-md",children:r(t==null?void 0:t.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:"Ownership Type"})]}),e.jsxs("div",{className:"flex-1 max-sm:mb-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(t==null?void 0:t.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:"Property Type"})]}),e.jsxs("div",{className:"flex-1 max-sm:mb-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(t==null?void 0:t.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:"Holding Type"})]})]}),e.jsxs("div",{className:"flex max-sm:flex-col md:space-x-10  md:pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1 max-sm:mb-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(t==null?void 0:t.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"flex-1 max-sm:mb-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[r(t==null?void 0:t.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"flex-1 max-sm:mb-1",children:[e.jsx("div",{className:"font-semibold text-md",children:r(t==null?void 0:t.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"flex-1 max-sm:mb-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(t==null?void 0:t.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs capitalize",children:"Rainwater harvesting provision ?"})]}),e.jsx("div",{className:"flex-1"})]})]})}),(x==null?void 0:x.length)==0&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20 text-center",children:e.jsx("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:"No payments found yet."})}),(x==null?void 0:x.length)!=0&&e.jsx("div",{className:"mt-10 bg-white shadow-xl  rounded-lg",children:e.jsx("div",{className:"overflow-auto max-sm:my-3",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs capitalize text-left",children:"Tansaction No"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs capitalize text-left",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs capitalize text-left",children:"Date"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs capitalize text-left",children:"From Qtr/Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs capitalize text-left",children:"Upto Qtr/Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs capitalize text-left",children:"Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-xs capitalize text-left",children:"Action"})]})}),e.jsxs("tbody",{className:"text-sm",children:[(a=x==null?void 0:x.Holding)==null?void 0:a.map((s,l)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(s==null?void 0:s.tran_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(s==null?void 0:s.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(s==null?void 0:s.tran_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(s==null?void 0:s.from_qtr),"/",r(s==null?void 0:s.from_fyear)]}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(s==null?void 0:s.to_qtr),"/",r(s==null?void 0:s.to_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(s==null?void 0:s.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>h(`/paymentReceipt/${s==null?void 0:s.tran_no}/holding`),type:"button",className:`cypress_owner_add_update ${g}`,children:"View Receipt"})})]})),(f=x==null?void 0:x.Saf)==null?void 0:f.map((s,l)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l+1}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(s==null?void 0:s.tran_no),e.jsx("span",{className:C,children:"SAF"})]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(s==null?void 0:s.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(s==null?void 0:s.tran_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(s==null?void 0:s.from_qtr),"/",r(s==null?void 0:s.from_fyear)]}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(s==null?void 0:s.to_qtr),"/",r(s==null?void 0:s.to_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(s==null?void 0:s.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>h(`/paymentReceipt/${s==null?void 0:s.tran_no}/saf`),type:"button",className:`cypress_owner_add_update ${g}`,children:"View Receipt"})})]}))]})]})})}),e.jsx("div",{className:"w-full h-40"})]})})}export{F as default};