import{j as s}from"./mui-8e804a04.js";import{r as t,f as w}from"./router-87042356.js";import"./index-05fe6e4f.js";import{a as A}from"./axios-97164839.js";import{k as S,B as L,r as F,U as a}from"./index-00b47817.js";import{Q as _}from"./QrCode-5d49e353.js";import{l as E}from"./index-51d8014a.js";import{W as R}from"./WaterApiList-5f19b586.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index-8289c3ab.js";const Q=()=>{var n,o,x,m,h,N;const{t:r}=S(),[e,g]=t.useState(),[b,i]=t.useState(!1),c=t.useRef(),u=E.useReactToPrint({content:()=>c.current}),{consumerId:d}=w();console.log("consumer id...",d);const{api_WaterBillReceipt:f,header:y}=R(),v=()=>{i(!0),A.post(f,{consumerNo:d},y).then(l=>{var j,p;(j=l==null?void 0:l.data)!=null&&j.status?(g((p=l==null?void 0:l.data)==null?void 0:p.data),i(!1),console.log("Data Found",l)):(i(!1),console.log("No Data Found"))}).catch(l=>{i(!1),console.log("Exception while getting receipt bill",l)})};return t.useEffect(()=>v(),[]),s.jsxs(s.Fragment,{children:[b&&s.jsx(L,{}),s.jsxs("div",{className:"font-poppins",ref:c,children:[s.jsx("div",{children:s.jsx("div",{className:"md:px-0 flex-1 ",children:s.jsxs("button",{onClick:u,className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-ask-500 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[s.jsx(F,{className:"inline text-lg"}),"print"]})})}),s.jsx("div",{id:"printableArea",className:"",children:s.jsx("div",{className:"font-tahoma",children:s.jsxs("div",{className:"border-2 mt-2 mb-12 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-16 md:mx-auto lg:mx-auto  container pb-8 relative",children:[s.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12  ",children:[s.jsx("div",{className:"",children:s.jsx("img",{src:(n=a(r))==null?void 0:n.ulb_logo,className:"h-20 mx-auto"})}),s.jsx("div",{className:"absolute w-full h-full flex justify-center items-center",children:s.jsx("img",{src:(o=a(r))==null?void 0:o.state_logo,alt:"",className:"w-[22rem] h-[22rem] mt-20 z-10 bg-transparent opacity-20 rounded-full border"})})]}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:s.jsx("div",{className:"",children:s.jsx("h1",{className:"font-bold text-4xl text-center uppercase",children:((x=a(r))==null?void 0:x.ulb_name)||"N/A"})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:s.jsx("div",{className:"mx-auto",children:s.jsxs("h1",{className:"font-semibold text-2xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:["water user charge ",s.jsx("br",{})," BILL"," "]})})}),s.jsx("div",{children:s.jsx("table",{className:"w-full  p-2 mt-2",children:s.jsxs("tr",{className:"",children:[s.jsxs("td",{className:" ",children:[s.jsxs("div",{className:"flex p-1 text-base",children:[s.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Bill No. :"}),s.jsx("h1",{className:"flex   pl-2",children:(e==null?void 0:e.billNumber)||"N/A"})]}),s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Department/Section :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.departmentSection)||"N/A"})]}),s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Account Description :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.description)||"N/A"})]}),(e==null?void 0:e.holdingNo)&&s.jsxs("div",{className:"flex p-1 text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Holding No. :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.holdingNo)||"N/A"})]}),(e==null?void 0:e.safNo)&&s.jsxs("div",{className:"flex p-1 text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"SAF No. :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.safNo)||"N/A"})]})]}),s.jsx("div",{children:s.jsxs("td",{className:" ",children:[s.jsxs("div",{className:"flex p-1 text-base ",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Date :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.date)||"N/A"})]}),s.jsxs("div",{className:"flex p-1 text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Ward No. :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.WardNo)||"N/A"})]}),s.jsxs("div",{className:"flex p-1 text-base",children:[s.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Mobile No. :"}),s.jsx("h1",{className:"flex   pl-2",children:(e==null?void 0:e.customerMobile)||"N/A"})]})]})})]})})}),s.jsx("div",{children:s.jsx("table",{className:"w-full  p-2 mt-1",children:s.jsx("tr",{className:"",children:s.jsxs("td",{className:" ",children:[s.jsxs("div",{className:"flex p-1 text-base",children:[s.jsx("h1",{className:"flex text-gray-900  font-semibold whitespace-nowrap",children:"Consumer Name Mr/Mrs/Miss :"}),s.jsx("h1",{className:"flex   pl-2",children:(e==null?void 0:e.customerName)||"N/A"})]}),s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Consumer No. :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.consumerNo)||"N/A"})]}),s.jsxs("div",{className:"flex p-1 text-base ",children:[s.jsx("h1",{className:"flex text-gray-900  font-semibold whitespace-nowrap",children:"Address :"}),s.jsx("h1",{className:"flex  pl-2 text-sm mt-0.5",children:(e==null?void 0:e.address)||"N/A"})]})]})})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:s.jsx("div",{className:"",children:s.jsx("h1",{className:"font-bold text-base text-left ",children:"WATER USER CHARGE BILL DETAILS"})})}),s.jsx("div",{children:s.jsxs("table",{className:"w-full border border-gray-500 ",children:[s.jsx("thead",{className:" w-full",children:s.jsxs("tr",{className:"border border-gray-500 text-base  font-bold text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:" ",children:"Description "})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsx("h1",{className:"",children:" Amount "})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border border-gray-500 text-sm   ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:"text-left ml-2 ",children:"Demand period"})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:["From ",(e==null?void 0:e.paidFrom)||"N/A"," To"," ",(e==null?void 0:e.paidUpto)||"N/A"]})}),s.jsx("td",{className:""})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:"text-left ml-2 ",children:"Bill Amount "})}),s.jsx("td",{colSpan:1,className:"  border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",(e==null?void 0:e.billAmount)||"0"]})})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:" text-left ml-2",children:"Advance"})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",(e==null?void 0:e.advanceAmount)||"0"]})})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:" text-left ml-2",children:"Fine"})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",(e==null?void 0:e.penaltyAmount)||"0"]})})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:"text-left ml-2 ",children:"Payable Amount"})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",(e==null?void 0:e.billAmount)||"0"]})})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:" w-72",children:s.jsx("h1",{className:"text-left ml-2 ",children:"Amount in words:"})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsx("h1",{className:" text-right mr-2",children:(e==null?void 0:e.paidAmtInWords)+" Only"||"N/A"})})]})]})]})}),s.jsx("div",{children:s.jsx("table",{className:"w-full mt-2 ",children:s.jsx("tr",{className:"",children:s.jsxs("td",{className:" ",children:[s.jsx("div",{className:"flex ",children:s.jsxs("h1",{className:"flex text-gray-900  text-lg",children:["For Details Please Visit :"," ",(m=a(r))==null?void 0:m.ulb_parent_website]})}),s.jsx("div",{className:"flex ",children:s.jsxs("h1",{className:"flex text-gray-900  text-lg",children:["Or Call us at ",(h=a(r))==null?void 0:h.mobile_no," or"," ",(N=a(r))==null?void 0:N.mobile_no_2]})}),s.jsx("div",{children:s.jsx(_,{url:window.location.href,size:"64"})})]})})})}),s.jsx("div",{className:"text-center font-bold text-base",children:"Please Note : - This is not a payment receipt"}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:s.jsx("div",{className:"",children:s.jsx("h1",{className:"font-semibold text-lg text-center ",children:"**This is a computer-generated bill and it does not require a physical signature.**"})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:s.jsx("div",{className:"",children:s.jsx("img",{src:"https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png",className:"w-36 mx-auto"})})})]})})})]})]})};export{Q as default};