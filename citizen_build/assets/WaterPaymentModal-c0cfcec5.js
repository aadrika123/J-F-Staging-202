import{j as e}from"./mui-8e804a04.js";import{u as T,r as x,a as ne}from"./router-87042356.js";import{M as te}from"./index-4e794517.js";import"./RazorpayPaymentScreen-965792ae.js";import{W as E}from"./WaterApiList-5f19b586.js";import{i as oe}from"./success-39308b33.js";import{l as G,c as le,d as W,u as ie,A as z,R as X,b as re,N as Q}from"./index-00b47817.js";import{a as ce}from"./axios-97164839.js";import{a as D}from"./index.esm-2e3a7c1f.js";import{a as ee}from"./index.esm-e8e486ac.js";import{U as se}from"./UseRazorpay-149fd286.js";const ae="/assets/pending-daaf9508.png",de=i=>{var B,V,$,L,U,q,Y,H,J,Z;const{handlePayment:P}=se(),j=T(),[_,u]=x.useState(!1),[n,b]=x.useState(!1),[t,A]=x.useState(""),{notify:v}=x.useContext(G),{api_WaterGetDetailsById:m,header:y,api_rzpWaterOrderId:N,api_generatedreceipt:C}=E(),r=i==null?void 0:i.paymentData;console.log("props paymentData==>>",r);const p=s=>{if(!(s==null||s==""))return JSON.parse(s)},w=le({isInstallment:W().required("Require"),installment:W().when([],{is:()=>o.values.isInstallment=="yes",then:W().required("Select Installment")})}),o=ie({enableReinitialize:!0,initialValues:{isInstallment:"no",installment:""},onSubmit:s=>{h(s)},validationSchema:w}),k=s=>{var I,R,O;const a=s.target.name,d=s.target.value;console.log("name",a,"vlue",d),d=="no"&&(console.log("Done.."),o.setFieldValue("installment","")),a=="installment"&&((I=p(d))==null?void 0:I.amount)==Number((R=t==null?void 0:t.calculation)==null?void 0:R.penalty)&&((O=t==null?void 0:t.calculation)==null?void 0:O.paidStatus)!=1&&(o.setFieldValue("installment",""),o.setFieldValue("isInstallment","no"))},l=()=>{i.closeModal()};x.useEffect(()=>{var s,a;((s=t==null?void 0:t.calculation)==null?void 0:s.paidStatus)==1&&((a=t==null?void 0:t.calculation)==null?void 0:a.chargeCatagoryId)==2&&o.setFieldValue("isInstallment","yes")},[t]);const f=()=>{var s;b(!0),console.log("before fetch property details in deactivation"),ce.post(m,{applicationId:(s=r==null?void 0:r.connectionCharges)==null?void 0:s.applicationId},y).then(function(a){console.log("view water details by id...",a.data.data),A(a.data.data),b(!1)}).catch(function(a){console.log("==2 details by id error...",a),b(!1),v("Something Went Wrong","error")})};x.useEffect(()=>{f()},[r]);const c=async s=>{console.log("generateReceipt",s),console.log(s);let a={applicationId:s==null?void 0:s.applicationId,departmentId:s==null?void 0:s.departmentId,status:"",captured:"1",card_id:"",amount:s==null?void 0:s.amount,payment_method:"upi/netbanking",workflow_id:s==null?void 0:s.workflowId,user_id:s==null?void 0:s.userId,ulb_id:s==null?void 0:s.ulbId,payment_order_id:s==null?void 0:s.razorpay_order_id,payment_id:s==null?void 0:s.razorpay_payment_id,created_at:""};console.log("Receipt",s),z.post(C,a,y).then(d=>{var I;console.log("genereted receipt",d),d.data.status==!0?(console.log("Oder ID Generated ++++dddddddddddddddddddddddd+++++",d.data),j(`/waterConnReceipt/${(I=d==null?void 0:d.data)==null?void 0:I.data}`,{replace:!0})):toast.error(d.data.message,"error")}).catch(d=>{console.log("Error genrating order id",d),toast.error(d.message,"error")})},h=s=>{var I,R,O;let a;s.isInstallment=="yes"&&(a=((I=p(s==null?void 0:s.installment))==null?void 0:I.ids).split(","));const d={id:(R=r==null?void 0:r.connectionCharges)==null?void 0:R.applicationId,applycationType:(O=r==null?void 0:r.connectionCharges)==null?void 0:O.type,isInstallment:s.isInstallment,penaltyIds:a};console.log("payment function hit..",d),u(!0),z.post(N,d,y).then(g=>{var K;console.log("Oder ID Generated",g),u(!1),g.data.status==!0?(console.log("done==>>",g),P((K=g==null?void 0:g.data)==null?void 0:K.data,c),i.closeModal(!0),j("/water-dashboard")):v(g.data.message,"error")}).catch(g=>{u(!1),console.log("Error generating order id",g),v(g.message,"error")})},M=s=>s==NaN||s==null?0:s;let F=0,S;return o.values.isInstallment=="yes"&&(S=0),o.values.isInstallment=="no"&&(S=Number((B=t==null?void 0:t.calculation)==null?void 0:B.penalty)/10),e.jsx(e.Fragment,{children:e.jsx("form",{onSubmit:o.handleSubmit,onChange:k,children:e.jsxs("div",{className:"bg-white #789fde shadow-2xl border border-red-200 p-5 rounded-md",children:[e.jsx("p",{onClick:l,className:"float-right absolute right-6 top-6 hover:bg-gray-300 bg-gray-200 p-1 cursor-pointer",children:e.jsx(D,{})}),e.jsxs("div",{className:"border-b-2  pl-3 font-semibold border-red-400 flex",children:[e.jsx(ee,{size:20,className:"mt-0.5 mr-1"}),"Regularization Payment"]}),e.jsx("p",{className:"text-center text-green-800 font-semibold",children:"Note: 10% rebate on penalty in case the whole penalty is paid"}),e.jsx("div",{className:"flex justify-center py-4",children:e.jsx("img",{src:"https://img.freepik.com/free-vector/hand-holding-phone-with-credit-card-screen-man-making-purchase-shopping-paying-online-using-banking-app-flat-vector-illustration-transaction-e-commerce-concept_74855-26014.jpg?w=1380&t=st=1686898919~exp=1686899519~hmac=4b0ddb44860ec647fa33a1a0416ea0c1cc8167693a13fdba3f09058d099f0e76",alt:"My Image",width:200,height:100})}),e.jsxs("div",{className:"flex items-center px-10",children:[e.jsx("div",{className:"font-semibold text-lg text-gray-500",children:e.jsx("p",{children:"Application No.-"})}),e.jsx("p",{className:"font-semibold text-lg text-gray-500",children:(V=r==null?void 0:r.connectionCharges)==null?void 0:V.applicationNo})]}),e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{className:"font-semibold text-lg text-green-500",children:e.jsx("p",{children:"Total Amount ₹-"})}),e.jsxs("p",{className:"font-semibold text-lg text-green-500",children:[o.values.isInstallment==="yes"&&Number(($=t==null?void 0:t.calculation)==null?void 0:$.connectionFee)+Number(M((L=p(o.values.installment))==null?void 0:L.amount))-S,o.values.isInstallment==="no"&&Number((U=t==null?void 0:t.calculation)==null?void 0:U.connectionFee)+Number((q=t==null?void 0:t.calculation)==null?void 0:q.penalty)-S]})]}),e.jsxs("div",{className:"grid grid-cols-12 px-4 py-2 text-sm gap-y-2",children:[e.jsx("div",{className:"col-span-12 mt-2 text-gray-800",children:e.jsxs("div",{className:"grid grid-cols-12 text-base rounded",children:[e.jsxs("div",{className:"col-span-6 space-y-2",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Payment For:"})," ",(Y=t==null?void 0:t.calculation)==null?void 0:Y.chargeCatagory]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Connection Fee:"})," ₹"," ",(H=t==null?void 0:t.calculation)==null?void 0:H.connectionFee]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Penalty:"})," ₹"," ",(J=t==null?void 0:t.calculation)==null?void 0:J.penalty]})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsxs("p",{className:"font-semibold",children:["Rebate: ₹ ",S]}),e.jsx("div",{className:"flex",children:e.jsxs("div",{children:[e.jsxs("label",{children:[e.jsx("span",{className:"font-semibold",children:"Installment Payment"}),e.jsx("input",{type:"radio",name:"isInstallment",value:"yes",checked:o.values.isInstallment==="yes",onChange:o.handleChange,onBlur:o.handleBlur}),"Yes",e.jsx("input",{type:"radio",name:"isInstallment",value:"no",checked:o.values.isInstallment==="no",onChange:o.handleChange,onBlur:o.handleBlur,disabled:((Z=t==null?void 0:t.calculation)==null?void 0:Z.paidStatus)===1}),"No"]}),e.jsx("p",{className:"text-red-500 text-xs font-semibold",children:o.touched.isInstallment&&o.errors.isInstallment?o.errors.isInstallment:null})]})}),e.jsxs("div",{className:`${o.values.isInstallment==="no"?"opacity-50":""} flex gap-2 disabled:opacity-60`,children:[e.jsx("p",{className:"font-semibold",children:"Select Installment"}),e.jsxs("select",{onChange:o.handleChange,disabled:o.values.isInstallment==="no",value:o.values.installment,name:"installment",className:"disabled:opacity-60 disabled:border-0 border border-gray-800 rounded shadow text-sm h-6",children:[e.jsx("option",{value:"",children:"Select"}),t&&(t==null?void 0:t.penaltyInstallments.map((s,a)=>(F+=Number(s.balance_amount),e.jsx("option",{value:JSON.stringify({ids:s.ids,amount:F}),children:F},a))))]})]}),e.jsx("p",{className:"text-red-500 text-xs text-center font-semibold",children:o.touched.installment&&o.errors.installment?o.errors.installment:null})]})]})}),e.jsx("div",{className:"col-span-12 mt-2",children:e.jsx("div",{className:"text-center font-light rounded",children:e.jsx("p",{children:"Note: You can pay using Card / UPI / Netbanking / Wallet etc."})})}),e.jsx("div",{className:"col-span-12 mt-2",children:e.jsx("div",{className:"flex justify-center",children:_?e.jsx(X,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"30",visible:!0}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:i.closeModal,className:"mx-3 bg-red-600 hover:bg-red-700 transition duration-200 hover:scale-105 font-normal text-white px-4 py-2 text-sm rounded-sm shadow-xl",children:"Cancel"}),e.jsx("button",{type:"submit",className:"mx-3 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-4 py-2 text-sm rounded-sm shadow-xl",children:"Pay Now"})]})})})]})]})})})},me=i=>{var r,p,w,o,k;const{handlePayment:P}=se(),j=T(),[_,u]=x.useState(!1);x.useState();const n=i==null?void 0:i.paymentData,{notify:b}=x.useContext(G),{api_rzpWaterOrderId:t,api_getTranNo:A,header:v,api_generatedreceipt:m}=E(),y=()=>{i.closeModal()},N=async l=>{console.log("generateReceipt",l),console.log(l);let f={applicationId:l==null?void 0:l.applicationId,departmentId:l==null?void 0:l.departmentId,status:"",captured:"1",card_id:"",amount:l==null?void 0:l.amount,payment_method:"upi/netbanking",workflow_id:l==null?void 0:l.workflowId,user_id:l==null?void 0:l.userId,ulb_id:l==null?void 0:l.ulbId,payment_order_id:l==null?void 0:l.razorpay_order_id,payment_id:l==null?void 0:l.razorpay_payment_id,created_at:""};console.log("Receipt",l),z.post(m,f,re()).then(c=>{var h;console.log("genereted receipt",c),c.data.status==!0?(console.log("Oder ID Generated ++++dddddddddddddddddddddddd+++++",c.data),j(`/waterConnReceipt/${(h=c==null?void 0:c.data)==null?void 0:h.data}`,{replace:!0})):Q.error(c.data.message,"error")}).catch(c=>{console.log("Error genrating order id",c),Q.error(c.message,"error")})},C=()=>{var f,c;u(!0);const l={id:(f=n==null?void 0:n.connectionCharges)==null?void 0:f.applicationId,applycationType:(c=n==null?void 0:n.connectionCharges)==null?void 0:c.type};console.log("Payment Button Clicked..",l),z.post(t,l,v).then(h=>{var M;console.log("Oder ID Generated",h),u(!1),h.data.status==!0?(P((M=h==null?void 0:h.data)==null?void 0:M.data,N),i.closeModal(),j("/water-dashboard")):b(h.data.message,"error")}).catch(h=>{u(!1),console.log("Error genrating order id",h),b(h.message,"error")})};return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("p",{onClick:y,className:"float-right absolute right-12 top-12 hover:bg-gray-300 bg-gray-200 p-1 cursor-pointer",children:[" ",e.jsx(D,{})," "]}),e.jsxs("div",{className:"bg-white shadow-2xl border border-blue-200 md:p-5 md:m-5 rounded-md",children:[e.jsxs("div",{className:" border-b-2 py-1 pl-3 font-semibold border-red-400 flex",children:[e.jsx(ee,{size:20,className:"mt-0.5 mr-1"}),"Make Payment"," "]}),e.jsx("div",{className:"flex justify-center py-6",children:e.jsx("img",{src:"https://img.freepik.com/free-vector/hand-holding-phone-with-credit-card-screen-man-making-purchase-shopping-paying-online-using-banking-app-flat-vector-illustration-transaction-e-commerce-concept_74855-26014.jpg?w=1380&t=st=1686898919~exp=1686899519~hmac=4b0ddb44860ec647fa33a1a0416ea0c1cc8167693a13fdba3f09058d099f0e76",alt:"My Image",width:200,height:100})}),e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{className:"font-semibold text-2xl text-gray-500",children:e.jsx("p",{children:"Application No:-"})}),e.jsx("p",{className:"font-semibold text-2xl text-gray-500",children:(r=n==null?void 0:n.connectionCharges)==null?void 0:r.applicationNo})]}),e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{className:"font-semibold text-2xl text-green-500",children:e.jsx("p",{children:"Amount-Rs:"})}),e.jsx("p",{className:"font-semibold text-2xl text-green-500",children:((p=n==null?void 0:n.connectionCharges)==null?void 0:p.amount)||"N/A"})]}),e.jsx("h1",{className:"text-center font-semibold",children:"Amount Breakup"}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{className:"col-span-3 ",children:[e.jsxs("h1",{children:["Payment For : ",(w=n==null?void 0:n.connectionCharges)==null?void 0:w.charge_category]}),e.jsxs("h1",{children:["Penalty : ₹ ",(o=n==null?void 0:n.connectionCharges)==null?void 0:o.penalty]}),e.jsxs("h1",{children:["Connection Fee : ₹ ",(k=n==null?void 0:n.connectionCharges)==null?void 0:k.conn_fee]})]})}),e.jsx("div",{className:"md:col-span-12 col-span-12 md:mt-5 mt-2",children:e.jsx("div",{className:"text-center font-extralight px-2 rounded",children:e.jsx("p",{children:"Note : You can pay using Card / UPI / Netbanking / Wallet etc."})})}),e.jsx("div",{className:"col-span-12 md:mt-5 mt-2 max-sm:mb-2",children:e.jsx("div",{className:"flex justify-center",children:_?e.jsx(X,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"30",visible:!0}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:y,className:"mx-3 bg-red-600 hover:bg-red-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-2 text-sm rounded-sm shadow-xl",children:"Cancel"}),e.jsx("button",{onClick:C,className:"mx-3 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-5 py-2 text-sm  rounded-sm shadow-xl",children:"Pay Now"})]})})})]})]})})},he={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function Ce(i){var r,p,w;const[P,j]=ne.useState(!1),[_,u]=x.useState(!1),[n,b]=x.useState(),[t,A]=x.useState(),v=T();x.useContext(G),E();const m=i.paymentData;console.log("paymentData==>",m),x.useEffect(()=>{j(!0)},[]);function y(){}function N(){j(!1),u(!1),b(!1),A(!1),i==null||i.openPaymentModal(!1)}const C=o=>{var l,f,c;o!=null&&o.status&&u(!0),console.log("fetchTransactionDetails",o);const k={orderId:(l=o==null?void 0:o.data)==null?void 0:l.razorpay_order_id,paymentId:(f=o==null?void 0:o.data)==null?void 0:f.razorpay_payment_id,signature:(c=o==null?void 0:o.data)==null?void 0:c.razorpay_signature};console.log("payload",k)};return e.jsx("div",{className:"",children:e.jsxs(te,{isOpen:P,onAfterOpen:y,onRequestClose:N,style:he,contentLabel:"Example Modal",children:[_&&e.jsxs("div",{className:`${n?"bg-green-200":"bg-yellow-50"} shadow-2xl border border-sky-200 md:p-5 md:m-5 rounded-md`,children:[e.jsxs("div",{className:"flex justify-center",children:[n&&e.jsx("img",{src:oe,className:"h-16",alt:"Payment Success",srcset:""}),!n&&e.jsx("img",{src:ae,className:"h-12",alt:"Payment Pending",srcset:""})]}),e.jsxs("div",{className:"py-1 pl-3 font-semibold text-center text-2xl text-gray-800",children:[n?"Payment Completed Successfully":"Payment Under Processing"," "]}),(n==null?void 0:n.transectionNo)&&e.jsxs("p",{className:"text-center",children:[e.jsx("span",{className:"text-base",children:" Payment Transaction No"})," ",e.jsx("span",{className:"font-bold text-blue-700 text-xl",children:n==null?void 0:n.transectionNo})]}),!(n!=null&&n.transectionNo)&&e.jsxs("p",{className:"text-center font-semibold",children:[e.jsx("span",{className:"text-base",children:" Payment Status"})," ",e.jsx("span",{className:" text-blue-500 text-base",children:"Pending"})]}),e.jsx("p",{className:"border-b border-gray-300 mx-10 py-1"}),e.jsxs("div",{className:"grid grid-cols-12 px-8 py-3 leading-8 space-x-8 text-sm",children:[e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[e.jsx("p",{children:"Application No"}),e.jsx("p",{children:"Transaction Type"})]}),e.jsxs("div",{className:"col-span-6 ml-3",children:[e.jsx("p",{children:((r=m==null?void 0:m.connectionCharges)==null?void 0:r.applicationNo)||"NA"}),e.jsx("p",{children:((p=m==null?void 0:m.connectionCharges)==null?void 0:p.charge_category)||"NA"})]})]})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[e.jsx("p",{children:"Amount"}),e.jsx("p",{children:"Payment Date"})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsx("p",{children:(n==null?void 0:n.amount)||((w=m==null?void 0:m.connectionCharges)==null?void 0:w.amount)}),e.jsx("p",{children:(n==null?void 0:n.transectionDate)||"Pending"})]})]})}),e.jsx("div",{className:"col-span-12 md:mt-4 mt-10",children:e.jsxs("div",{className:"flex justify-center",children:[e.jsx("button",{onClick:N,className:"mx-2 bg-sky-600 hover:bg-sky-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-1 text-sm rounded-sm shadow-xl",children:"Dashboard"}),n&&e.jsx("button",{onClick:()=>v(`/waterConnReceipt/${n==null?void 0:n.transectionNo}`),className:"mx-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-4 py-2 text-sm  rounded-sm shadow-xl",children:"View Receipt"}),!n&&e.jsx("button",{onClick:()=>C(),className:"mx-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-4 py-2 text-sm  rounded-sm shadow-xl",children:"Check Status"})]})})]})]}),!_&&((i==null?void 0:i.category)=="Regulaization"?e.jsx(de,{closeModal:N,fetchTransactionDetails:C,paymentData:m}):e.jsx(me,{closeModal:N,fetchTransactionDetails:C,paymentData:m}))]})})}export{Ce as W};