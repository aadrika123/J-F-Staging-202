import{C as s}from"./CitizenApplyApiList-689056eb.js";import{l as d}from"./logo1-66954bc2.js";import{W as m}from"./WaterApiList-5f19b586.js";import{A as t}from"./index-00b47817.js";const{verifyPaymentStatus:e}=s(),{header:l}=m();async function p(o,n){console.log("first",o);let a;var c={key:"rzp_test_NXHWEn0nSMDcnm",amount:o.amount*100,currency:"INR",image:d,name:"UD&HD",description:" This is used for Testing Purpose",order_id:o.order_id,handler:async function(r){y(r),console.log("All response",r),console.log("Payment ID",r.razorpay_payment_id),a="data from handle: payment success",n({status:!0,message:"Payment Success",data:{...o,...r}})},prefill:{name:o.name,email:o.email,contact:o.mobile},modal:{ondismiss:function(r){console.log("Payment Cancel BY user",r)},onfailed:function(r){console.log("Payment Failed Response modal",r)}},notes:{ulbId:o.ulbId||0,departmentId:o.departmentId||0,applicationId:o.applicationId||0,workflowId:o.workflowId||0,userId:o.userId||0,name:o.name||0,email:o.email||0,contact:o.mobile||0},theme:{color:"#3399cc"}},i=new window.Razorpay(c);return i.on("payment.failed",function(r){console.log("Failed Response",r),u(r),n({status:!1,message:"Payment Failed",data:r})}),i.open(),a}const y=o=>{const n={razorpayOrderId:o.razorpay_order_id,razorpayPaymentId:o.razorpay_payment_id,razorpaySignature:o.razorpay_signature};t.post(e,n,l).then(a=>{console.log("2nd API Data saved ",a)}).catch(a=>{console.log("Error when inserting 2 api data ",a)})},u=o=>{const n={razorpayOrderId:o.error.metadata.order_id,razorpayPaymentId:o.error.metadata.payment_id,reason:o.error.reason,source:o.error.source,step:o.error.step,code:o.error.code,description:o.error.description};return t.post(e,n,l).then(a=>{console.log("2nd API Filed Data saved ",a)}).catch(a=>{console.log("Error when inserting 2 api Failed data ",a)}),p};export{p as R};