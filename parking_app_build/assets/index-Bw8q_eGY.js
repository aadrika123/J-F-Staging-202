import{j as e,p as y,_ as f}from"./index-0ZQ1ekME.js";import{P as H}from"./index-qQPD5avs.js";import{u as k,r as u}from"./router-DLL89Qev.js";import{s as q}from"./index-DXEukT1i.js";import{o as E,c as _,a as n}from"./yup-BsSm0fyz.js";import{b as $,F as D,R as d,B as F}from"./switch-Ba5WCzMU.js";import{h as l}from"./moment-BjLXg0w5.js";import{a as S}from"./useCustomQuery-CHgaUnRM.js";import{O as V}from"./OverLayLoader-bNv327Z9.js";import"./axios-DmypytPv.js";import"./headlessui-DXpdh5LM.js";import"./tslib.es6-CRos2fHm.js";const L=_().shape({vehicleNumber:n().required("Vehicle Number is required"),date:n().required("Date is required"),inTime:n().required("In Time is required"),outTime:n().required("Out Time is required"),receiptNo:n().required("Receipt No is required")});function K(){const v=k(),o=S({}),[p]=u.useState(null),[x,h]=u.useState(!1),[O,N]=u.useState(null),a=$({defaultValues:{vehicleNumber:"",date:"",inTime:"",outTime:l().format("HH:mm"),receiptNo:""},resolver:E(L)}),{handleSubmit:g}=a,T=async t=>{var m,s,r;v(`/parking-app/pay-organized-ticket?receipt_no=${t.receiptNo}&out_time=${l().format("HH:mm")}&in_time=${t.inTime}&vehicle_type=${(r=(s=(m=o==null?void 0:o.data)==null?void 0:m.data)==null?void 0:s.data)==null?void 0:r.vehicle_type}`)},j=async()=>{h(!0),N(null);const t=await q.createWorker({logger:c=>{}});await t.load(),await t.loadLanguage("eng"),await t.initialize("eng");const{data:{text:m}}=await t.recognize(p),r=m.split(`
`).find(c=>c.length==10);if(!r){N("Vehicle Number not found"),h(!1),await t.terminate(),h(!1);return}a.setValue("vehicleNumber",r),await t.terminate()};u.useEffect(()=>{p&&j()},[p]);const w=async()=>{var t,m,s,r,c,b;if(a.watch("vehicleNumber"))try{const i=await o.mutateAsync({api:`${y.getOutTicket}/${a.watch("vehicleNumber").toUpperCase()}`,data:{}});i!=null&&i.data.error?(f.error("Data Not Found"),a.reset({vehicleNumber:a.watch("vehicleNumber"),date:"",inTime:"",outTime:l().format("HH:mm"),receiptNo:""})):a.reset({vehicleNumber:a.watch("vehicleNumber"),receiptNo:(m=(t=i==null?void 0:i.data)==null?void 0:t.data)==null?void 0:m.receipt_no,date:l((r=(s=i==null?void 0:i.data)==null?void 0:s.data)==null?void 0:r.date).format("YYYY-MM-DD"),inTime:(b=(c=i==null?void 0:i.data)==null?void 0:c.data)==null?void 0:b.in_time,outTime:l().format("HH:mm")})}catch{f.error("Data Not Found"),a.reset({vehicleNumber:a.watch("vehicleNumber"),date:"",inTime:"",outTime:l().format("HH:mm"),receiptNo:""})}};return e.jsxs(H,{title:"Home",children:[(o==null?void 0:o.isPending)&&e.jsx(V,{}),e.jsx("div",{className:"py-4 mt-2 mx-auto px-4",children:e.jsx("div",{children:e.jsx("div",{className:"px-8",children:e.jsx(D,{methods:a,onSubmit:g(T),children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 ",children:[e.jsx("div",{className:"col-span-2",children:e.jsx(d,{className:"w-full h-10 border border-gray-300 rounded-lg uppercase",name:"vehicleNumber",onBlur:w,label:"Vehicle Number",placeholder:"Enter Vehicle Number",inputValidation:["removeSpace","vehicleNumber"]})}),e.jsx("div",{className:"col-span-2",children:e.jsx(d,{disabled:!0,name:"date",label:"Date",type:"date",placeholder:"Enter Date"})}),e.jsx("div",{children:e.jsx(d,{disabled:!0,name:"inTime",type:"time",label:"In Time",placeholder:"Enter In Time"})}),e.jsx("div",{children:e.jsx(d,{disabled:!0,name:"outTime",type:"time",label:"Out Time",placeholder:"Enter Out Time"})}),e.jsx("div",{className:"col-span-2",children:e.jsx(d,{disabled:!0,name:"receiptNo",label:"Receipt No",placeholder:"Enter Receipt No"})}),e.jsx("div",{className:"col-span-2 flex justify-center w-full mt-4",children:e.jsx(F,{type:"submit",size:"sm",className:"w-full",children:x?"Loading...":"Pay Ticket"})})]})})})})})]})}export{K as default};