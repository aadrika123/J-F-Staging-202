import{j as e}from"./mui-105b4636.js";import{f as L,u as O,r}from"./router-894402c5.js";import{a as B,B as z}from"./BottomErrorCard-57e65cd7.js";import{c as Q,d as f,u as W,A as R,b as M,S as q,P as V,n as N,x as G}from"./index-479eb087.js";import{M as J}from"./index-82be3ecd.js";import{a as K}from"./index.esm-c1e7c4e1.js";import"./index-1c045e8a.js";import"./react-40db4358.js";/* empty css                  */import"./axios-67d8a945.js";import"./reactIcons-58c2a0d8.js";import"./redux-b8f144fa.js";import"./i18next-e2c66b9b.js";const X="/assets/logo-3109eaef.png";async function ee(a,i){var m={description:"Test payment updated",image:X,currency:"INR",key_id:"rzp_live_WkeN2d0mSH4ztR",key_secret:"0A55ZisFpioDw3so0Cox1dSj",amount:2e3,name:"Fines",order_id:a,prefill:{email:"",contact:"",name:""},theme:{color:"#3399cc"},handler:async u=>{await i(u)}};const o=new Razorpay(m);o.on("payment.failed",function(u){}),o.open()}const te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};function ae(a){var F,D;const{id:i}=L(),{api_challanOfflinePayment:m,api_generateOrderId:o,api_getTransactionNo:u,api_sendOnlineResponse:t}=V(),_=O(),[C,g]=r.useState(!1),[P,x]=r.useState(!1),[b,I]=r.useState(!1),[s,d]=r.useState(!1),[S,k]=r.useState(null),[T,$]=r.useState(null);r.useState(!1),r.useState();let H=Q({paymentMode:f().required("select payment mode"),remarks:f(),bankName:f(),branchName:f(),cheque_dd_no:f(),cheque_dd_date:f()});W({initialValues:{paymentMode:"CASH",remarks:"",bankName:"",branchName:"",cheque_dd_no:"",cheque_dd_date:"",payAdvance:"",advanceAmount:""},validationSchema:H,onSubmit:n=>{U(n)&&A()}});const c=(n,h)=>{$(h),I(n)},E=()=>d(!1),U=n=>{if(n.paymentMode=="CHEQUE"||n.paymentMode=="DD"){if(n.bankName==""||n.bankName==null)return c(!0,"Please enter bank name"),!1;if(n.branchName==""||n.branchName==null)return c(!0,"Please enter branch name"),!1;if(n.cheque_dd_no==""||n.cheque_dd_no==null)return c(!0,"Please enter cheque/dd no."),!1;if(n.cheque_dd_date==""||n.cheque_dd_date==null)return c(!0,"Please enter cheque/dd date"),!1}return!0},A=async n=>{var j,p;x(!0);let h={amount:(j=a==null?void 0:a.demand)==null?void 0:j.amount,challanId:i,applicationId:(p=a==null?void 0:a.demand)==null?void 0:p.application_id};R.post(o,h,M()).then(l=>{var y,w,v;((y=l==null?void 0:l.data)==null?void 0:y.status)===!0?ee((v=(w=l==null?void 0:l.data)==null?void 0:w.data)==null?void 0:v.order_id,Y):c(!0,"Error occured. Please try again later.")}).catch(l=>{c(!0,"Error occured. Please try again later.")}).finally(()=>{x(!1)})},Y=async n=>{var j,p;x(!0);let h={applicationId:(j=a==null?void 0:a.demand)==null?void 0:j.application_id,challanId:i,amount:(p=a==null?void 0:a.demand)==null?void 0:p.amount,date:new Date,transactionId:"",status:"",cardNo:"",authCode:"",tid:"",mid:"gghg",status:"AUTHORIZED",rrNo:"",batchNo:"",orderId:n==null?void 0:n.razorpay_order_id};R.post(t,h,M()).then(l=>{var y,w,v;((y=l==null?void 0:l.data)==null?void 0:y.status)===!0?(g(!0),k((v=(w=l==null?void 0:l.data)==null?void 0:w.data)==null?void 0:v.tran_no)):g()}).catch(l=>{g()}).finally(()=>{x(!1)})},Z=()=>{d(!1),A()};return P?e.jsx(e.Fragment,{children:e.jsx(B,{})}):C==!0?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"Your payment has been successfully done !"}),e.jsxs("div",{className:"text-center mt-6",children:[e.jsx("button",{className:"mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>_(`/fp-receipt/${encodeURIComponent(S)}/direct`),children:"View Receipt"}),e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>_(`/challan/${i}/direct`),children:"View Challan"})]})]}),void 0]})}):e.jsxs(e.Fragment,{children:[b&&e.jsx(z,{activateBottomErrorCard:c,errorTitle:T}),e.jsx("div",{className:" block sm:p-4 mt-4 w-full md:py-4 md:px-40 md:pb-0 md:pt-0 rounded-lg  bg-white md:w-full mx-auto  overflow-x-auto mb-20 ",children:e.jsxs("div",{className:"p-4 w-full md:py-6 rounded-lg bg-white mx-auto flex justify-center items-center flex-col",children:[e.jsxs("div",{className:"md:px-4",children:[e.jsx("span",{children:"Total Payable Amount :"})," ",e.jsx("span",{className:"font-mono font-bold text-xl",children:q((F=a==null?void 0:a.demand)==null?void 0:F.amount)})]}),e.jsx("div",{className:"mt-4",children:e.jsxs("button",{onClick:A,type:"button",className:"sm:ml-4 font-bold px-6 py-3 md:py-2 bg-indigo-500 text-white text-xs sm:text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:[e.jsx("span",{className:"sm:mr-2 mr-1",children:"Pay "}),q((D=a==null?void 0:a.demand)==null?void 0:D.amount)]})})]})}),e.jsx(J,{isOpen:s,onRequestClose:E,style:te,contentLabel:"Example Modal",children:e.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[e.jsx("button",{onClick:E,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(K,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:"Confirm Payment"}),e.jsx("button",{type:"button",class:"text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:Z,children:"Yes, I'm sure"})]})]})})]})}const ge=()=>{const{api_getChallanById:a}=V(),{id:i}=L(),m=O(),[o,u]=r.useState(!1),[t,_]=r.useState(null),[C,g]=r.useState(!1),[P,x]=r.useState(""),b=(s,d)=>{x(d),g(s),s||window.history.back()},I=()=>{u(!0),R.post(a,{challanId:i},M()).then(s=>{var d,S,k;(d=s==null?void 0:s.data)!=null&&d.status?_((S=s==null?void 0:s.data)==null?void 0:S.data):b(!0,(k=s==null?void 0:s.data)==null?void 0:k.message)}).catch(s=>{b(!0,"Error getting user details, please try again later !")}).finally(()=>{u(!1)})};return r.useEffect(()=>{I()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-screen md:pt-10",children:e.jsxs("div",{className:"md:w-4/5 mx-auto shadow-xl bg-gray-50 md:py-10",children:[o&&e.jsx(B,{}),C&&e.jsx(z,{activateBottomErrorCard:b,errorTitle:P}),!o&&e.jsxs("div",{className:"animate__animated animate__fadeIn animate__faster overflow-x-hidden overflow-y-scroll w-[99%] mx-auto rounded-md gap-6 h-full p-[1vw]",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("h1",{className:"bg-white shadow-lg shadow-indigo-300 text-indigo-400 w-max font-semibold text-2xl px-6 py-2 border border-indigo-400",children:"Fines & Penalties Payment"})}),e.jsxs("div",{className:"flex items-center flex-wrap w-full text-sm bg-white p-4  gap-2 mt-4",children:[e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[27%]",children:[e.jsx("div",{children:"Name"}),e.jsx("div",{className:"font-semibold text-base",children:N(t==null?void 0:t.full_name)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Mobile No."}),e.jsx("div",{className:"font-semibold text-base",children:N(t==null?void 0:t.mobile)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Challan No. "}),e.jsx("div",{className:"font-semibold text-base",children:N(t==null?void 0:t.challan_no)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Challan Date "}),e.jsx("div",{className:"font-semibold text-base",children:G(t==null?void 0:t.challan_date)})]}),e.jsxs("div",{className:"hidden md:flex flex-col flex-wrap justify-center w-full",children:[e.jsx("div",{children:"Violation Made "}),e.jsx("div",{className:"font-semibold text-base",children:N(t==null?void 0:t.violation_name)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Violation Section "}),e.jsx("div",{className:"font-semibold text-base",children:N(t==null?void 0:t.violation_section)})]}),e.jsxs("div",{className:"flex flex-col flex-wrap justify-center w-full md:w-[22%]",children:[e.jsx("div",{children:"Penalty Amount "}),e.jsx("div",{className:"font-bold text-base",children:q(t==null?void 0:t.amount)})]})]}),e.jsx("div",{children:t!=null&&t.is_bpl?e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"As you belongs to BPL category, so you don't need to pay. And your application is sent for verification."}),e.jsx("div",{className:"text-center mt-6",children:e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>m(`/fp-details/${i}`),children:"View Application"})})]})})}):e.jsx(e.Fragment,{children:t!=null&&t.payment_status?e.jsx("div",{className:"w-full h-full bg-white sm:p-20 p-2",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"Payment Already Done. You can view your receipt or challan."}),e.jsxs("div",{className:"text-center mt-6",children:[e.jsx("button",{className:"mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>m(`/fp-receipt/${encodeURIComponent(t==null?void 0:t.tran_no)}/direct`),children:"View Receipt"}),e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>m(`/challan/${i}/direct`),children:"View Challan"})]})]})}):e.jsx(ae,{demand:t})})})]})]})})})};export{ge as default};