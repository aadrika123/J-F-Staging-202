import{r,_ as Ce,u as Ie,a$ as v,k as Ae,l as Fe,m as f,cu as Te,o as Me,A as y,aH as D,j as e,E as ke,bM as He,f as _,g as Pe,n as o,bA as Ee,i as Oe}from"./index-ff09afd8.js";import{C as Re}from"./CitizenApplyApiList-05e12329.js";const $e=r.lazy(()=>Ce(()=>import("./index-ff09afd8.js").then(g=>g.d3),["assets/index-ff09afd8.js","assets/index-8be144a5.css"])),ze=()=>{var O,R,$,U,W,V,z,Y,q,G,Q,J,K,X,Z,B,L,ee,se,le;const{api_wardByUlb:g,searchCollection:te,get_taxCollectorList:Ue,get_collectorList:ce}=Ee(),{api_getAllUlb:oe}=Re(),u=Ie(),m=window.localStorage.getItem("ulbId"),[j,re]=r.useState([]),[ie,S]=r.useState(!1),[N,de]=r.useState(),[b,me]=r.useState(),[h,xe]=r.useState([]),[l,ue]=r.useState(null),[he,pe]=r.useState(0),[w,p]=r.useState(!1),[C,fe]=r.useState(""),[t,I]=r.useState(null),[c,A]=r.useState({}),[F,T]=r.useState(0),ge=()=>S(!0),je=()=>S(!1),Ne=()=>{};let be=new Date().toLocaleDateString("in-IN"),M=v(be).format("DD-MM-YYYY");Ae("Collection Report");const x="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",we=Fe({ulbId:f().required("Select ULB"),fromDate:f().required("Field Required"),uptoDate:f().required("Field Required"),collType:Te().min(1,"Check atleast one").of(f().required("Array items must be non-empty strings"))}),a=Me({initialValues:{fromDate:v(new Date).format("yy-MM-DD"),uptoDate:v(new Date).format("yy-MM-DD"),ulbId:m||"",collType:["property"],wardId:"",userId:"",paymentMode:""},onSubmit:s=>{console.log("values =>  ",s),I(null),xe(s==null?void 0:s.collType),A({ulbId:a.values.ulbId,collectionType:a.values.collType,fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,userId:a.values.userId,paymentMode:a.values.paymentMode}),T(n=>n+1)},validationSchema:we});console.log("getting data => ",l),r.useEffect(()=>{pe(l==null?void 0:l.totalAmt)},[l,F]);const ve=()=>{y.get(oe,D()).then(s=>{var n,i;((n=s==null?void 0:s.data)==null?void 0:n.status)==!0&&re((i=s==null?void 0:s.data)==null?void 0:i.data)}).catch(s=>{})};r.useEffect(()=>{var s;ve(),H(),m&&k(),fe((s=a.values)==null?void 0:s.collType),m&&A({ulbId:a.values.ulbId,collectionType:a.values.collType,fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,userId:a.values.userId,paymentMode:a.values.paymentMode}),T(n=>n+1)},[]);const k=s=>{y.post(g,{ulbId:s||m},D()).then(n=>{var i,d;((i=n==null?void 0:n.data)==null?void 0:i.status)==!0&&de((d=n==null?void 0:n.data)==null?void 0:d.data)}).catch(n=>{})},H=s=>{y.post(ce,{ulbId:s||m},D()).then(n=>{var i,d;((i=n==null?void 0:n.data)==null?void 0:i.status)==!0&&me((d=n==null?void 0:n.data)==null?void 0:d.data),p(!1)}).catch(n=>p(!1)).finally(()=>p(!1))},ye=s=>{I(s),console.log("view data => ",l==null?void 0:l.data[s]),ge()},P=["property"],E=["saf"],De=r.useMemo(()=>Array.isArray(h)&&h.some(s=>P.includes(s)),[P]),_e=r.useMemo(()=>Array.isArray(h)&&h.some(s=>E.includes(s)),[E]),Se=[{Header:"S.No.",Cell:({row:s})=>e.jsx("div",{children:(s==null?void 0:s.index)+1}),className:"w-[5%]"},{Header:"Ward No.",accessor:"ward_no",Cell:s=>o(s==null?void 0:s.value),className:"w-[5%]"},{Header:"Holding No.",Cell:({cell:s})=>{var n,i;return e.jsx(e.Fragment,{children:o((i=(n=s==null?void 0:s.row)==null?void 0:n.original)==null?void 0:i.new_holding_no)})}},{Header:"SAF No.",accessor:"saf_no",Cell:s=>o(s==null?void 0:s.value)},{Header:"Owner Name",accessor:"owner_name",Cell:s=>o(s==null?void 0:s.value),className:"w-1/3"},{Header:"Payment(From/Upto)",accessor:"from_upto_fy_qtr",Cell:s=>o(s==null?void 0:s.value)},{Header:"Tran. Date",accessor:"tran_date",Cell:s=>Oe(s==null?void 0:s.value)},{Header:"Amount",accessor:"amount",Cell:s=>e.jsx(e.Fragment,{children:_(s==null?void 0:s.value)})},{Header:"Action",Cell:({cell:s})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center justify-center gap-2 w-full",children:e.jsx("button",{onClick:()=>{var n;return ye((n=s==null?void 0:s.row)==null?void 0:n.index)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:"View"})})})}];return console.log("collType ",l),e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:a.handleChange,onSubmit:a.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Report"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collection Type :"}),e.jsxs("div",{className:"col-span-6 flex items-center justify-between bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"1",children:"Property"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"collType",id:"1",value:"property",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:"SAF"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"collType",id:"2",value:"saf"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"3",children:"Gov. SAF"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"collType",id:"3",value:"gbsaf"})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:a.touched.collType&&a.errors.collType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.collType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:a.values.fromDate,id:"",className:x,defaultValue:M})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.fromDate&&a.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:a.values.uptoDate,id:"",className:x,defaultValue:M})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.uptoDate&&a.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.uptoDate})})})]}),!m&&e.jsxs("div",{className:"flex flex-col w-full md:w-[15%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Select ULB :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"ulbId",id:"",className:x,disabled:w,onChange:s=>(k(s.target.value),H(s.target.value)),children:[e.jsx("option",{value:"",children:"Select"}),j==null?void 0:j.map(s=>e.jsx("option",{value:s.id,children:s.ulb_name}))]})}),e.jsx("div",{className:"col-span-12 text-start",children:a.touched.ulbId&&a.errors.ulbId&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.ulbId})})})]}),a.values.ulbId!=""&&e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"wardId",id:"",className:x,children:[e.jsx("option",{value:"",children:"All"}),N==null?void 0:N.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.ward_name})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector List :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:x,children:[e.jsx("option",{value:"",children:"All"}),b==null?void 0:b.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:e.jsx("span",{className:"capitalize",children:s==null?void 0:s.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:x,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),e.jsx("div",{className:"mt-4 w-full md:w-[30%] flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:mt-4",children:e.jsx("div",{className:" ",children:w?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-center",children:e.jsx(ke,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:" flex items-center border border-green-600 bg-green-500 hover:bg-green-600 text-white shadow-md rounded-sm  text-sm px-5 py-1",children:[e.jsx("span",{className:"",children:e.jsx(He,{fontSize:""})}),e.jsx("span",{children:"Search Record"})]})})})]})]}),C!=""&&C!="gbSaf"&&((O=l==null?void 0:l.data)==null?void 0:O.length)>1&&e.jsxs("div",{className:"w-full text-end",children:[De&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white mr-2",onClick:()=>u(`/payment-mode-wise-summary/property/${c==null?void 0:c.fromDate}/${c==null?void 0:c.uptoDate}/${c==null?void 0:c.ulbId}`),children:"Payment Mode Wise Property Summary"}),_e&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white",onClick:()=>u(`/payment-mode-wise-summary/saf/${c==null?void 0:c.fromDate}/${c==null?void 0:c.uptoDate}/${c==null?void 0:c.ulbId}`),children:"Payment Mode Wise SAF Summary"})]}),Object.keys(c).length!==0&&e.jsxs("div",{className:"relative",children:[!w&&((R=l==null?void 0:l.data)==null?void 0:R.length)>1&&e.jsxs("div",{className:"absolute top-11 right-0",children:["Total Amount : ",e.jsx("span",{className:"font-semibold",children:_(he)})]}),e.jsx($e,{getData:!0,allData:s=>ue(s),api:te,columns:Se,requestBody:c,changeData:F,loader:s=>p(s)})]}),e.jsx("div",{className:"h-[20vh]"}),e.jsx(Pe,{isOpen:ie,onAfterOpen:Ne,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-max w-full relative border-2 border-indigo-400 bg-gray-40 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[e.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-md px-2 text-xl cursor-pointer",onClick:je,children:"×"}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-400 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-base sm:text-lg",children:"View Details"})})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 flex-wrap items-center justify-evenly w-full relative",children:[e.jsx("button",{className:"text-xs px-2 py-1 bg-green-400 hover:bg-green-500 rounded-md shadow-md shadow-green-100 absolute bottom-0 right-0 transition-all duration-150 ",onClick:()=>{var s,n,i,d,ae,ne;((s=l==null?void 0:l.data[t])==null?void 0:s.type)=="property"&&u("/holdingPropertyDetails/"+((n=l==null?void 0:l.data[t])==null?void 0:n.id)),((i=l==null?void 0:l.data[t])==null?void 0:i.type)=="saf"&&u("/propApplicationDetails/"+((d=l==null?void 0:l.data[t])==null?void 0:d.id)),((ae=l==null?void 0:l.data[t])==null?void 0:ae.type)=="gbsaf"&&u("/gbsaf-details/"+((ne=l==null?void 0:l.data[t])==null?void 0:ne.id))},children:"View More"}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Collector Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o(($=l==null?void 0:l.data[t])==null?void 0:$.emp_name)})]}),((U=l==null?void 0:l.data[t])==null?void 0:U.type)!="property"&&e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Assesment Type : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((W=l==null?void 0:l.data[t])==null?void 0:W.assessment_type)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Ward No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((V=l==null?void 0:l.data[t])==null?void 0:V.ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"New Ward No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((z=l==null?void 0:l.data[t])==null?void 0:z.new_ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Holding No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((Y=l==null?void 0:l.data[t])==null?void 0:Y.new_holding_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"SAF No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((q=l==null?void 0:l.data[t])==null?void 0:q.saf_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Owner Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((G=l==null?void 0:l.data[t])==null?void 0:G.owner_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Mobile No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((Q=l==null?void 0:l.data[t])==null?void 0:Q.mobile_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Payment (From-Upto) : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((J=l==null?void 0:l.data[t])==null?void 0:J.from_upto_fy_qtr)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((K=l==null?void 0:l.data[t])==null?void 0:K.tran_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Date : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((X=l==null?void 0:l.data[t])==null?void 0:X.tran_date)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Mode : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((Z=l==null?void 0:l.data[t])==null?void 0:Z.transaction_mode)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Amount : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:_((B=l==null?void 0:l.data[t])==null?void 0:B.amount)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Cheque No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((L=l==null?void 0:l.data[t])==null?void 0:L.cheque_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Bank Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((ee=l==null?void 0:l.data[t])==null?void 0:ee.bank_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Branch Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((se=l==null?void 0:l.data[t])==null?void 0:se.branch_name)})]}),((le=l==null?void 0:l.data[t])==null?void 0:le.type)!="property"&&e.jsx("div",{className:"w-full sm:w-[40%] grid grid-cols-12"})]})]})})]})};export{ze as default};