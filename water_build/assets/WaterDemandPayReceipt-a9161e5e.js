import{l as f,v,W as p,q as w,j as e,k as l,w as r,h as d}from"./index-7349853a.js";import{C as A}from"./ComponentToPrint-7ca32295.js";import{Q as M}from"./QrCode-9eac920e.js";function y(){var a,t,o,i,n,h,m;const[s,N]=f.useState(),{transactionId:x}=v(),{api_waterConsumerPaymentReceipt:g,header:b}=p();f.useEffect(()=>{u()},[]);const u=()=>{w.post(g,{transactionNo:x},b).then(c=>{c.data.status&&N(c.data.data)}).catch(c=>{})};return e(A,{content:e("div",{children:l("div",{className:"border-2 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto container ",children:[l("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:[e("div",{className:"",children:e("img",{src:(a=r())==null?void 0:a.ulb_logo,className:"h-20 mx-auto"})}),e("div",{className:"flex justify-center items-center w-full h-full relative",children:e("img",{src:(t=r())==null?void 0:t.state_logo,alt:"",className:" w-80 h-80  top-60 absolute bg-transparent opacity-20  rounded-full border"})})]}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:e("div",{className:"",children:e("h1",{className:"font-bold text-2xl text-center uppercase",children:(o=r())==null?void 0:o.ulb_name})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e("div",{className:"mx-auto",children:e("h1",{className:"font-semibold text-2xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:"water user charge payment receipt"})})}),e("div",{children:e("table",{className:"w-full  p-2 ",children:l("tr",{className:"",children:[l("td",{className:" ",children:[l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Receipt No. :"}),e("h1",{className:"flex font-sans  pl-2",children:(s==null?void 0:s.transactionNo)||"N/A"})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Department/Section :"}),e("h1",{className:"flex font-sans pl-2 ",children:(s==null?void 0:s.accountDescription)||"N/A"})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Account Description :"}),e("h1",{className:"flex font-sans pl-2 ",children:"Water User Charge"})]}),(s==null?void 0:s.holdingNo)&&l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Holding No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:(s==null?void 0:s.holdingNo)||"N/A"})]}),(s==null?void 0:s.safNo)&&l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Holding No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:(s==null?void 0:s.safNo)||"N/A"})]})]}),l("td",{className:" ",children:[l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Date :"}),e("h1",{className:"flex font-sans pl-2 ",children:d(s==null?void 0:s.transactionDate).format("DD/MM/yy")||"N/A"})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Ward No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:(s==null?void 0:s.WardNo)||"N/A"})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Consumer No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:(s==null?void 0:s.consumerNo)||"N/A"})]}),e("div",{className:"flex p-1 text-sm"}),e("div",{className:"flex p-1 text-sm"}),e("div",{className:"flex p-1 text-sm"}),e("div",{className:"flex p-1 text-sm"}),e("div",{className:"flex p-1 text-sm",children:" "})]})]})})}),e("div",{children:e("table",{className:"w-full  p-2",children:e("tr",{className:"",children:l("td",{className:" ",children:[l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Received From Mr/Mrs/Miss :"}),e("h1",{className:"flex font-sans  pl-2",children:(s==null?void 0:s.customerName)||"N/A"})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Mobile No. :"}),e("h1",{className:"flex font-sans  pl-2",children:(s==null?void 0:s.customerMobile)||"N/A"})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Address :"}),e("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.address})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"A Sum of Rs.  (in words) : "}),e("h1",{className:"flex font-sans pl-2 ",children:(s==null?void 0:s.paidAmtInWords)||"N/A"})]}),l("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-sans font-semibold",children:["Towards : ",e("span",{className:" font-sans font-normal ml-1",children:(s==null?void 0:s.towards)||"N/A"})]}),l("h1",{className:"flex text-gray-900 font-sans font-semibold  ml-8 ",children:["Vide : ",e("span",{className:" font-sans font-normal ml-1",children:(s==null?void 0:s.paymentMode)||"N/A"})]})]}),(s==null?void 0:s.chequeNo)&&l("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-sans ",children:["Cheque No : ",e("span",{className:" w-24 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.chequeNo)||"N/A"})]}),l("h1",{className:"flex text-gray-900 font-sans ",children:["Dated : ",e("span",{className:"w-24 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.chequeDate)||"N/A"})]})]}),(s==null?void 0:s.bankName)&&l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-sans",children:"Drawn on"}),e("h1",{className:"flex w-72 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.bankName)||"N/A"}),e("h1",{className:"flex text-gray-900 font-sans",children:"Branch Name"}),e("h1",{className:"flex w-40 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.branchName)||"N/A"})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Water Consumed (in K.L.)  :"}),e("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.waterConsumed})]}),l("div",{className:"flex p-1 text-sm",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Fixed :"}),l("h1",{className:"flex font-sans pl-2 ",children:["Period from : ",d(s==null?void 0:s.fixedPaidFrom).format("DD-MMM-yy"),"   to : ",d(s==null?void 0:s.fixedPaidUpto).format("DD-MMM-yy"),"  "]})]})]})})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2",children:e("div",{className:"",children:e("h1",{className:"font-bold text-md text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:e("div",{className:"",children:e("h1",{className:"font-bold text-sm text-left ",children:"WATER CONNECTION FEE DETAILS"})})}),e("div",{children:l("table",{className:"w-full border border-gray-500 ",children:[e("thead",{className:" w-full",children:l("tr",{className:"border border-gray-500 text-sm font-sans font-bold text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:" ",children:"Description "})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:"",children:"Total Amount "})})]})}),l("tbody",{children:[l("tr",{className:"border border-gray-500 text-sm font-sans  ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:l("h1",{className:"text-left ml-2 ",children:[" Period:  From ",l("span",{className:"font-semibold",children:[" ",d(s==null?void 0:s.paidFrom).format("MMM/yy")]})," To ",l("span",{className:"font-semibold",children:[" ",d(s==null?void 0:s.paidUpto).format("MMM/yy")]})]})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:l("h1",{className:" text-right mr-2",children:[s==null?void 0:s.totalPaidAmount," "]})})]}),l("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:"text-left ml-2 ",children:"Penalty"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:" text-right mr-2",children:s==null?void 0:s.penaltyAmount})})]}),l("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:" text-left ml-2",children:"Rebate"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:" text-right mr-2",children:s==null?void 0:s.rebate})})]}),l("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:"text-left ml-2 ",children:"Paid Amount"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:"text-right mr-2",children:s==null?void 0:s.totalPaidAmount})})]}),l("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:"text-left ml-2 ",children:"Due Amount"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:" text-right mr-2",children:s==null?void 0:s.dueAmount})})]})]})]})}),e("div",{children:e("table",{className:"w-full mt-2 ",children:l("tr",{className:"",children:[l("td",{className:" ",children:[e("div",{className:"",children:e(M,{url:(i=r())==null?void 0:i.state_logo,size:"64"})}),e("div",{className:"flex",children:l("h1",{className:"flex text-gray-900 font-sans text-sm",children:["For Details Please Visit : ",(n=r())==null?void 0:n.website]})}),e("div",{className:"flex ",children:l("h1",{className:"flex text-gray-900 font-sans text-sm",children:["Or Call us at ",(h=r())==null?void 0:h.mobile_no," OR ",(m=r())==null?void 0:m.mobile_no_2]})})]}),l("td",{className:"float-right mt-16",children:[e("div",{className:"flex ",children:e("h1",{className:"flex text-gray-900 font-sans text-sm",children:"In Collaboration with"})}),e("div",{className:"flex",children:e("h1",{className:"flex text-gray-900 font-sans text-sm",children:"Sri Publication & Stationers Pvt Ltd"})})]})]})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e("div",{className:"",children:e("h1",{className:"font-semibold text-sm text-center ",children:"**This is a computer-generated receipt and it does not require a physical signature.**"})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:e("div",{className:"",children:e("img",{src:"https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png",className:"w-36 mx-auto"})})})]})})})}export{y as default};