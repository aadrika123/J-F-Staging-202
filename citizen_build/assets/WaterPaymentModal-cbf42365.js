import{j as e}from"./mui-105b4636.js";import{u as M,r as c,a as X}from"./router-894402c5.js";import{M as D}from"./index-82be3ecd.js";import{R as J}from"./RazorpayPaymentScreen-7a035667.js";import{W as z}from"./WaterApiList-577beadd.js";import{i as ee}from"./success-39308b33.js";import{l as W,c as se,d as F,u as ne,A as H,R as Z}from"./index-479eb087.js";import{a as te}from"./axios-67d8a945.js";import{a as K}from"./index.esm-9bec7f4a.js";import{a as Q}from"./index.esm-bc36f73a.js";const le="/assets/pending-daaf9508.png",ae=a=>{var T,V,B,E,G,L,q,$,U,Y;const C=M(),[y,x]=c.useState(!1),[R,l]=c.useState(!1),[s,p]=c.useState(""),{notify:h}=c.useContext(W),{api_WaterGetDetailsById:_,header:o,api_rzpWaterOrderId:v}=z(),i=a==null?void 0:a.paymentData,u=t=>{if(!(t==null||t==""))return JSON.parse(t)},f=se({isInstallment:F().required("Require"),installment:F().when([],{is:()=>n.values.isInstallment=="yes",then:F().required("Select Installment")})}),n=ne({enableReinitialize:!0,initialValues:{isInstallment:"no",installment:""},onSubmit:t=>{N(t)},validationSchema:f}),j=t=>{var P,k,S;const d=t.target.name,A=t.target.value;A=="no"&&n.setFieldValue("installment",""),d=="installment"&&((P=u(A))==null?void 0:P.amount)==Number((k=s==null?void 0:s.calculation)==null?void 0:k.penalty)&&((S=s==null?void 0:s.calculation)==null?void 0:S.paidStatus)!=1&&(n.setFieldValue("installment",""),n.setFieldValue("isInstallment","no"))},r=()=>{a.closeModal()};c.useEffect(()=>{var t,d;((t=s==null?void 0:s.calculation)==null?void 0:t.paidStatus)==1&&((d=s==null?void 0:s.calculation)==null?void 0:d.chargeCatagoryId)==2&&n.setFieldValue("isInstallment","yes")},[s]);const b=()=>{var t;l(!0),te.post(_,{applicationId:(t=i==null?void 0:i.connectionCharges)==null?void 0:t.applicationId},o).then(function(d){p(d.data.data),l(!1)}).catch(function(d){l(!1),h("Something Went Wrong","error")})};c.useEffect(()=>{b()},[i]);const m=t=>{(t==null?void 0:t.status)==!0?(h("Regulization Payment successfully","success"),window.location.reload(),a.fetchTransactionDetails(t),a.success(10)):h("Payment Failed","error")},N=t=>{var P,k,S;let d;t.isInstallment=="yes"&&(d=((P=u(t==null?void 0:t.installment))==null?void 0:P.ids).split(","));const A={id:(k=i==null?void 0:i.connectionCharges)==null?void 0:k.applicationId,applycationType:(S=i==null?void 0:i.connectionCharges)==null?void 0:S.type,isInstallment:t.isInstallment,penaltyIds:d};x(!0),H.post(v,A,o).then(I=>{x(!1),I.data.status==!0?(J(I.data.data,m),a.closeModal(!0),C("/water-dashboard")):h(I.data.message,"error")}).catch(I=>{x(!1),h(I.message,"error")})},O=t=>t==NaN||t==null?0:t;let g=0,w;return n.values.isInstallment=="yes"&&(w=0),n.values.isInstallment=="no"&&(w=Number((T=s==null?void 0:s.calculation)==null?void 0:T.penalty)/10),e.jsx(e.Fragment,{children:e.jsx("form",{onSubmit:n.handleSubmit,onChange:j,children:e.jsxs("div",{className:"bg-white #789fde shadow-2xl border border-red-200 p-5 rounded-md",children:[e.jsx("p",{onClick:r,className:"float-right absolute right-6 top-6 hover:bg-gray-300 bg-gray-200 p-1 cursor-pointer",children:e.jsx(K,{})}),e.jsxs("div",{className:"border-b-2  pl-3 font-semibold border-red-400 flex",children:[e.jsx(Q,{size:20,className:"mt-0.5 mr-1"}),"Regularization Payment"]}),e.jsx("p",{className:"text-center text-green-800 font-semibold",children:"Note: 10% rebate on penalty in case the whole penalty is paid"}),e.jsx("div",{className:"flex justify-center py-4",children:e.jsx("img",{src:"https://img.freepik.com/free-vector/hand-holding-phone-with-credit-card-screen-man-making-purchase-shopping-paying-online-using-banking-app-flat-vector-illustration-transaction-e-commerce-concept_74855-26014.jpg?w=1380&t=st=1686898919~exp=1686899519~hmac=4b0ddb44860ec647fa33a1a0416ea0c1cc8167693a13fdba3f09058d099f0e76",alt:"My Image",width:200,height:100})}),e.jsxs("div",{className:"flex items-center px-10",children:[e.jsx("div",{className:"font-semibold text-lg text-gray-500",children:e.jsx("p",{children:"Application No.-"})}),e.jsx("p",{className:"font-semibold text-lg text-gray-500",children:(V=i==null?void 0:i.connectionCharges)==null?void 0:V.applicationNo})]}),e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{className:"font-semibold text-lg text-green-500",children:e.jsx("p",{children:"Total Amount ₹-"})}),e.jsxs("p",{className:"font-semibold text-lg text-green-500",children:[n.values.isInstallment==="yes"&&Number((B=s==null?void 0:s.calculation)==null?void 0:B.connectionFee)+Number(O((E=u(n.values.installment))==null?void 0:E.amount))-w,n.values.isInstallment==="no"&&Number((G=s==null?void 0:s.calculation)==null?void 0:G.connectionFee)+Number((L=s==null?void 0:s.calculation)==null?void 0:L.penalty)-w]})]}),e.jsxs("div",{className:"grid grid-cols-12 px-4 py-2 text-sm gap-y-2",children:[e.jsx("div",{className:"col-span-12 mt-2 text-gray-800",children:e.jsxs("div",{className:"grid grid-cols-12 text-base rounded",children:[e.jsxs("div",{className:"col-span-6 space-y-2",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Payment For:"})," ",(q=s==null?void 0:s.calculation)==null?void 0:q.chargeCatagory]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Connection Fee:"})," ₹"," ",($=s==null?void 0:s.calculation)==null?void 0:$.connectionFee]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Penalty:"})," ₹"," ",(U=s==null?void 0:s.calculation)==null?void 0:U.penalty]})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsxs("p",{className:"font-semibold",children:["Rebate: ₹ ",w]}),e.jsx("div",{className:"flex",children:e.jsxs("div",{children:[e.jsxs("label",{children:[e.jsx("span",{className:"font-semibold",children:"Installment Payment"}),e.jsx("input",{type:"radio",name:"isInstallment",value:"yes",checked:n.values.isInstallment==="yes",onChange:n.handleChange,onBlur:n.handleBlur}),"Yes",e.jsx("input",{type:"radio",name:"isInstallment",value:"no",checked:n.values.isInstallment==="no",onChange:n.handleChange,onBlur:n.handleBlur,disabled:((Y=s==null?void 0:s.calculation)==null?void 0:Y.paidStatus)===1}),"No"]}),e.jsx("p",{className:"text-red-500 text-xs font-semibold",children:n.touched.isInstallment&&n.errors.isInstallment?n.errors.isInstallment:null})]})}),e.jsxs("div",{className:`${n.values.isInstallment==="no"?"opacity-50":""} flex gap-2 disabled:opacity-60`,children:[e.jsx("p",{className:"font-semibold",children:"Select Installment"}),e.jsxs("select",{onChange:n.handleChange,disabled:n.values.isInstallment==="no",value:n.values.installment,name:"installment",className:"disabled:opacity-60 disabled:border-0 border border-gray-800 rounded shadow text-sm h-6",children:[e.jsx("option",{value:"",children:"Select"}),s&&(s==null?void 0:s.penaltyInstallments.map((t,d)=>(g+=Number(t.balance_amount),e.jsx("option",{value:JSON.stringify({ids:t.ids,amount:g}),children:g},d))))]})]}),e.jsx("p",{className:"text-red-500 text-xs text-center font-semibold",children:n.touched.installment&&n.errors.installment?n.errors.installment:null})]})]})}),e.jsx("div",{className:"col-span-12 mt-2",children:e.jsx("div",{className:"text-center font-light rounded",children:e.jsx("p",{children:"Note: You can pay using Card / UPI / Netbanking / Wallet etc."})})}),e.jsx("div",{className:"col-span-12 mt-2",children:e.jsx("div",{className:"flex justify-center",children:y?e.jsx(Z,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"30",visible:!0}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:a.closeModal,className:"mx-3 bg-red-600 hover:bg-red-700 transition duration-200 hover:scale-105 font-normal text-white px-4 py-2 text-sm rounded-sm shadow-xl",children:"Cancel"}),e.jsx("button",{type:"submit",className:"mx-3 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-4 py-2 text-sm rounded-sm shadow-xl",children:"Pay Now"})]})})})]})]})})})},ie=a=>{var f,n,j,r,b;const C=M(),[y,x]=c.useState(!1),[R,l]=c.useState(),s=a==null?void 0:a.paymentData,{notify:p}=c.useContext(W),{api_rzpWaterOrderId:h,api_getTranNo:_,header:o}=z(),v=()=>{a.closeModal()},i=m=>{m.status==!0&&(p("Application Payment Done successfully ","success"),window.location.reload(),l({orderId:m.data.razorpay_order_id,paymentId:m.data.razorpay_payment_id}),a.fetchTransactionDetails(m),a==null||a.refechList())},u=()=>{var N,O;x(!0);const m={id:(N=s==null?void 0:s.connectionCharges)==null?void 0:N.applicationId,applycationType:(O=s==null?void 0:s.connectionCharges)==null?void 0:O.type};H.post(h,m,o).then(g=>{x(!1),g.data.status==!0?(J(g.data.data,i),a.closeModal(),C("/water-dashboard")):p(g.data.message,"error")}).catch(g=>{x(!1),p(g.message,"error")})};return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("p",{onClick:v,className:"float-right absolute right-12 top-12 hover:bg-gray-300 bg-gray-200 p-1 cursor-pointer ",children:[" ",e.jsx(K,{})," "]}),e.jsxs("div",{className:"bg-white shadow-2xl border border-blue-200 md:p-5 md:m-5 rounded-md",children:[e.jsxs("div",{className:" border-b-2 py-1 pl-3 font-semibold border-red-400 flex",children:[e.jsx(Q,{size:20,className:"mt-0.5 mr-1"}),"Make Payment"," "]}),e.jsx("div",{className:"flex justify-center py-6",children:e.jsx("img",{src:"https://img.freepik.com/free-vector/hand-holding-phone-with-credit-card-screen-man-making-purchase-shopping-paying-online-using-banking-app-flat-vector-illustration-transaction-e-commerce-concept_74855-26014.jpg?w=1380&t=st=1686898919~exp=1686899519~hmac=4b0ddb44860ec647fa33a1a0416ea0c1cc8167693a13fdba3f09058d099f0e76",alt:"My Image",width:200,height:100})}),e.jsxs("div",{className:"flex items-center px-28",children:[e.jsx("div",{className:"font-semibold text-2xl text-gray-500",children:e.jsx("p",{children:"Application No.-"})}),e.jsx("p",{className:"font-semibold text-2xl text-gray-500",children:(f=s==null?void 0:s.connectionCharges)==null?void 0:f.applicationNo})]}),e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{className:"font-semibold text-2xl text-green-500",children:e.jsx("p",{children:"Amount-Rs"})}),e.jsx("p",{className:"font-semibold text-2xl text-green-500",children:((n=s==null?void 0:s.connectionCharges)==null?void 0:n.amount)||"N/A"})]}),e.jsx("h1",{className:"text-center font-semibold",children:"Amount Breakup"}),e.jsxs("div",{className:"grid grid-cols-6 px-24",children:[e.jsxs("div",{className:"col-span-3 ",children:[e.jsxs("h1",{children:["Payment For : ",(j=s==null?void 0:s.connectionCharges)==null?void 0:j.charge_category]}),e.jsxs("h1",{children:["Penalty : ₹ ",(r=s==null?void 0:s.connectionCharges)==null?void 0:r.penalty]})]}),e.jsx("div",{className:"col-span-3",children:e.jsxs("h1",{children:["Connection Fee : ₹ ",(b=s==null?void 0:s.connectionCharges)==null?void 0:b.conn_fee]})})]}),e.jsx("div",{className:"md:col-span-12 col-span-12 md:mt-5 mt-2",children:e.jsx("div",{className:"text-center font-extralight px-2 rounded",children:e.jsx("p",{children:"Note : You can pay using Card / UPI / Netbanking / Wallet etc."})})}),e.jsx("div",{className:"col-span-12 md:mt-5 mt-2",children:e.jsx("div",{className:"flex justify-center",children:y?e.jsx(Z,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"30",visible:!0}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:v,className:"mx-3 bg-red-600 hover:bg-red-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-2 text-sm rounded-sm shadow-xl",children:"Cancel"}),e.jsx("button",{onClick:u,className:"mx-3 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-5 py-2 text-sm  rounded-sm shadow-xl",children:"Pay Now"})]})})})]})]})})},re={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function be(a){var f,n,j;const[C,y]=X.useState(!1),[x,R]=c.useState(!1),[l,s]=c.useState(),[p,h]=c.useState(),_=M();c.useContext(W),z();const o=a.paymentData;c.useEffect(()=>{y(!0)},[]);function v(){}function i(){y(!1),R(!1),s(!1),h(!1),a==null||a.openPaymentModal(!1)}const u=r=>{var b,m,N;r!=null&&r.status&&R(!0),(b=r==null?void 0:r.data)==null||b.razorpay_order_id,(m=r==null?void 0:r.data)==null||m.razorpay_payment_id,(N=r==null?void 0:r.data)==null||N.razorpay_signature};return e.jsx("div",{className:"",children:e.jsxs(D,{isOpen:C,onAfterOpen:v,onRequestClose:i,style:re,contentLabel:"Example Modal",children:[x&&e.jsxs("div",{className:`${l?"bg-green-200":"bg-yellow-50"} shadow-2xl border border-sky-200 md:p-5 md:m-5 rounded-md`,children:[e.jsxs("div",{className:"flex justify-center",children:[l&&e.jsx("img",{src:ee,className:"h-16",alt:"Payment Success",srcset:""}),!l&&e.jsx("img",{src:le,className:"h-12",alt:"Payment Pending",srcset:""})]}),e.jsxs("div",{className:"py-1 pl-3 font-semibold text-center text-2xl text-gray-800",children:[l?"Payment Completed Successfully":"Payment Under Processing"," "]}),(l==null?void 0:l.transectionNo)&&e.jsxs("p",{className:"text-center",children:[e.jsx("span",{className:"text-base",children:" Payment Transaction No"})," ",e.jsx("span",{className:"font-bold text-blue-700 text-xl",children:l==null?void 0:l.transectionNo})]}),!(l!=null&&l.transectionNo)&&e.jsxs("p",{className:"text-center font-semibold",children:[e.jsx("span",{className:"text-base",children:" Payment Status"})," ",e.jsx("span",{className:" text-blue-500 text-base",children:"Pending"})]}),e.jsx("p",{className:"border-b border-gray-300 mx-10 py-1"}),e.jsxs("div",{className:"grid grid-cols-12 px-8 py-3 leading-8 space-x-8 text-sm",children:[e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[e.jsx("p",{children:"Application No"}),e.jsx("p",{children:"Transaction Type"})]}),e.jsxs("div",{className:"col-span-6 ml-3",children:[e.jsx("p",{children:((f=o==null?void 0:o.connectionCharges)==null?void 0:f.applicationNo)||"NA"}),e.jsx("p",{children:((n=o==null?void 0:o.connectionCharges)==null?void 0:n.charge_category)||"NA"})]})]})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[e.jsx("p",{children:"Amount"}),e.jsx("p",{children:"Payment Date"})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsx("p",{children:(l==null?void 0:l.amount)||((j=o==null?void 0:o.connectionCharges)==null?void 0:j.amount)}),e.jsx("p",{children:(l==null?void 0:l.transectionDate)||"Pending"})]})]})}),e.jsx("div",{className:"col-span-12 md:mt-4 mt-10",children:e.jsxs("div",{className:"flex justify-center",children:[e.jsx("button",{onClick:i,className:"mx-2 bg-sky-600 hover:bg-sky-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-1 text-sm rounded-sm shadow-xl",children:"Dashboard"}),l&&e.jsx("button",{onClick:()=>_(`/waterConnReceipt/${l==null?void 0:l.transectionNo}`),className:"mx-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-4 py-2 text-sm  rounded-sm shadow-xl",children:"View Receipt"}),!l&&e.jsx("button",{onClick:()=>u(),className:"mx-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-4 py-2 text-sm  rounded-sm shadow-xl",children:"Check Status"})]})})]})]}),!x&&((a==null?void 0:a.category)=="Regulaization"?e.jsx(ae,{closeModal:i,fetchTransactionDetails:u,paymentData:o}):e.jsx(ie,{closeModal:i,fetchTransactionDetails:u,paymentData:o}))]})})}export{be as W};