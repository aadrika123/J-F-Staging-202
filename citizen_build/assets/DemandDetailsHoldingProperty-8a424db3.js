import{j as e}from"./mui-8e804a04.js";import{r as d,f as U,u as V}from"./router-87042356.js";import{r as X}from"./rupee-ba1d5977.js";import{b as Y}from"./brief-77d733cf.js";import{C as G}from"./CitizenApplyApiList-71a04580.js";import{B as J,Z as K,n as a,o as B,X as F,A as C,b as E}from"./index-ac659a09.js";import{T as D}from"./TopTabs-bf696a85.js";import"./CommonModal-340f9ebb.js";import{S as ee}from"./ServerErrorCard-2cd16191.js";import{e as se}from"./Styles-a2fa8249.js";import{P as te}from"./PropertyApiList-828c74da.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index.esm-c151f2f7.js";import"./index-4e794517.js";function ve(le){var j,p,y,N,g,u,v,w,A,_,P,T,L,z,S,H;const[Q]=d.useState(!1),[t,h]=d.useState(),[r,f]=d.useState(),[$,c]=d.useState(!1),[k,m]=d.useState(!1),{id:n}=U(),{api_getHoldingDemandById:M}=G(),{api_getPropHoldingDetailsById:O}=te(),[l,b]=d.useState(),W=V(),Z=()=>{m(!1),c(!0),C.post(`${M}`,{propId:n},E()).then(function(s){var x,i,o;console.log("view deamnd details at property in egov...",s==null?void 0:s.data),(x=s==null?void 0:s.data)!=null&&x.status?(h((i=s==null?void 0:s.data)==null?void 0:i.data),f(s==null?void 0:s.data)):(h((o=s==null?void 0:s.data)==null?void 0:o.data),f(s==null?void 0:s.data)),c(!1)}).catch(function(s){console.log("==2 details by id error...",s),m(!0),c(!1)})},q=()=>{m(!1),c(!0),C.post(`${O}`,{propertyId:n},E()).then(function(s){var x,i,o,I,R;console.log("view prop prop full details...",(x=s==null?void 0:s.data)==null?void 0:x.data),(o=(i=s==null?void 0:s.data)==null?void 0:i.data)!=null&&o.status?b((I=s==null?void 0:s.data)==null?void 0:I.data):b((R=s==null?void 0:s.data)==null?void 0:R.data),c(!1)}).catch(function(s){console.log("==2 details by id error...",s),m(!0),c(!1)})};return d.useEffect(()=>{q(),Z()},[]),$?e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx("div",{className:"min-h-screen"})]}):k?e.jsx(ee,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(K,{position:"top-right",autoClose:2e3}),e.jsxs("div",{className:"w-full  mx-auto",children:[e.jsx("div",{className:"",children:e.jsx(D,{title:"Demand-Details",type:"holding",id:n,safNo:"",active:"demand"})}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6 ",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 md:pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:a(l==null?void 0:l.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a(l==null?void 0:l.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  md:pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[a(l==null?void 0:l.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a(l==null?void 0:l.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),e.jsxs("div",{className:"flex flex-row  flex-wrap justify-center w-full",children:[(r==null?void 0:r.status)&&e.jsx("div",{class:"rounded-lg pt-4 z-50 w-full",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl text-left",children:[e.jsx("img",{src:X,alt:"pin",className:"w-5 inline"})," Tax Details"]}),e.jsx("div",{className:"overflow-auto",children:e.jsxs("table",{className:"w-full leading-normal mt-2 bg-white rounded-lg shadow-xl",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Total Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Rebate (₹)"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["1% Penalty (₹)"," "]}),((j=t==null?void 0:t.duesList)==null?void 0:j.advanceAmt)!=0&&e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Advance Amount (₹)"," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payable Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((p=t==null?void 0:t.duesList)==null?void 0:p.totalDues)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((y=t==null?void 0:t.duesList)==null?void 0:y.totalRebatesAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((N=t==null?void 0:t.duesList)==null?void 0:N.onePercPenalty)}),((g=t==null?void 0:t.duesList)==null?void 0:g.advanceAmt)!=0&&e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((u=t==null?void 0:t.duesList)==null?void 0:u.advanceAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((v=t==null?void 0:t.duesList)==null?void 0:v.payableAmount)})]})})})]})})]}),((w=t==null?void 0:t.duesList)==null?void 0:w.rebates)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-10 text-md font-semibold",children:"Rebate Description"}),e.jsx("div",{className:"overflow-auto",children:e.jsxs("table",{className:"w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Rebate Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"percent(%)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:(_=(A=t==null?void 0:t.duesList)==null?void 0:A.rebates)==null?void 0:_.map((s,x)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.keyString)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[B(s==null?void 0:s.rebatePerc),"%"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:B(s==null?void 0:s.rebateAmount)})]}))})]})})]}),e.jsxs("div",{className:"mt-10 max-sm:px-1",children:[e.jsxs("div",{className:"grid grid-cols-12 bg-white max-sm:flex max-sm:flex-wrap max-sm:px-1",children:[e.jsxs("div",{className:"col-span-4",children:["Total Dues (₹) :"," ",e.jsx("span",{className:"font-semibold md:text-lg ",children:a((P=t==null?void 0:t.duesList)==null?void 0:P.totalDues)})," "]}),e.jsxs("div",{className:"col-span-4 bg-white",children:["Dues From :"," ",e.jsx("span",{className:"font-semibold md:text-lg",children:a((T=t==null?void 0:t.duesList)==null?void 0:T.duesFrom)})," "]}),e.jsxs("div",{className:"col-span-4 bg-white",children:["Dues To :"," ",e.jsx("span",{className:"font-semibold md:text-lg",children:a((L=t==null?void 0:t.duesList)==null?void 0:L.duesTo)})," "]}),e.jsxs("div",{className:"col-span-4 mt-5 bg-white",children:["Total Quarters :"," ",e.jsx("span",{className:"font-semibold md:text-lg",children:a((z=t==null?void 0:t.duesList)==null?void 0:z.totalQuarters)})," "]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl mt-10",children:[e.jsx("img",{src:Y,alt:"pin",className:"w-5 inline"})," Demand Overview"]}),e.jsx("div",{className:"overflow-auto",children:e.jsxs("table",{className:"min-w-full leading-normal bg-white rounded-lg shadow-lg mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Arv"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Financial Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Additional Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Quarterly Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Adjust Amount (₹)"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:["100% Penalty (₹) ",e.jsx("br",{}),e.jsx("small",{children:"(More than 10% deviation)"})]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Payable Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(S=t==null?void 0:t.demandList)==null?void 0:S.map((s,x)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.additional_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.adjust_amt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.hundred_percent_penalty_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.balance)})]}))})})]})}),e.jsx("div",{className:"mt-10 flex max-sm:flex-col",children:!Q&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-left flex-1",children:e.jsxs("div",{children:[e.jsxs("span",{className:"font-semibold text-gray-600 text-xl",children:["Total Payable Amount"," "]}),e.jsx("span",{className:"text-3xl font-bold ml-20",children:F((H=t==null?void 0:t.duesList)==null?void 0:H.payableAmount)})]})}),e.jsx("div",{className:"text-right flex-1 max-sm:flex w-full",children:e.jsxs("button",{onClick:()=>W(`/property-payment/${n}/holding`),type:"submit",className:`${se} max-sm:w-full max-sm:py-2`,children:["Pay Now"," "]})})]})})]})]})}),(r==null?void 0:r.status)==!1&&e.jsx("div",{className:"md:text-2xl max-sm:text-xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"md:border md:border-red-500 px-4 py-2 md:shadow-xl",children:[r==null?void 0:r.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]})}export{ve as default};