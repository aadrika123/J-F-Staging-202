import{r as o,h as L,m as P,e as F,g as k,o as H,c as _,b as g,u as $,f as a,F as j,j as e,i as q,R as C,d as T,A as E}from"./index-16131624.js";import{L as M}from"./ListTableAdvrt-1265a4b9.js";import{u as I}from"./useSetTitle-92e85e38.js";function O(d,m,h){let l="/admin";d.ctrlKey?window.open(`${l}${m}`,"_blank"):h(m)}function K(){const[d,m]=o.useState();o.useState(),L();const[h,l]=o.useState(!1),[s,x]=o.useState(),[p,u]=o.useState(!1),{notify:b}=o.useContext(P);I("Search Holding");const{api_advtSearchPaymentParameters:y}=E(),N=F(),v=k();H();const w=t=>{u(!1),l(!0);const n={filterBy:t==null?void 0:t.filterBy,parameter:t==null?void 0:t.parameter};T.post(y,n,N).then(i=>{var c,f;(c=i==null?void 0:i.data)!=null&&c.status?(x((f=i==null?void 0:i.data)==null?void 0:f.data),u(!0)):b("Something went wrong!!","error"),l(!1)}).catch(i=>{b("Something went wrong!!","error"),l(!1),u(!1)})},S=_({filterBy:g().required("This is a required field !"),parameter:g().required("This is a required field !")}),r=$({initialValues:{filterBy:"",parameter:""},onSubmit:t=>{w(t)},validationSchema:S}),B=(t,n,i)=>{let c=`/agencyApprovedDetail/${n}/${i}/Approve`;O(t,c,v)},A=[{Header:"Application No.",accessor:"application_no"},{Header:"Entity Name",accessor:"entity_name"},{Header:"Mobile No.",accessor:"mobile_no"},{Header:"Action",Cell:({row:t})=>e("button",{onClick:n=>B(n,t.original.id,t.original.type),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:"view"})}];return a(j,{children:[h&&e(q,{}),a("div",{className:"border shadow-xl bg-white mt-6",children:[e("div",{className:"flex ml-5 mt-2 ",children:e("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:"Search For Payment"})}),e("form",{onSubmit:r.handleSubmit,children:a("div",{className:"flex justify-center space-x-8 my-5 m-10",children:[a("div",{children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Filter By",e("span",{className:"text-red-500",children:"*"})]}),a("select",{...r.getFieldProps("filterBy"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:"Select"}),e("option",{value:"entityName",children:"Entity Name"}),e("option",{value:"ownerName",children:"Owner Name"}),e("option",{value:"mobileNo",children:"Mobile No"})]}),e("p",{className:"text-red-500 text-xs",children:r.touched.filterBy&&r.errors.filterBy?r.errors.filterBy:null})]}),a("div",{children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Search By ",d," ",e("span",{className:"text-red-500",children:"*"})]}),e("input",{type:"text",...r.getFieldProps("parameter"),className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("p",{className:"text-red-500 text-xs",children:r.touched.parameter&&r.errors.parameter?r.errors.parameter:null})]}),e("div",{className:"mt-4",children:a("button",{type:"submit",className:"w-full border border-indigo-700 bg-indigo-600 hover:bg-indigo-500 text-white hover:text-black shadow-lg rounded-sm text-base font-semibold px-5 m-3 py-1",children:[" ",a("p",{className:"flex",children:[" ",a("span",{className:"mt-1 mr-2",children:[" ",e(C,{})," "]})," ","Search record"]})]})})]})})]}),a("div",{className:"mt-10",children:[p&&(s==null?void 0:s.length)!=0&&e(M,{columns:A,dataList:s}),p&&(s==null?void 0:s.length)==0&&e("div",{className:"text-xl font-semibold text-red-400 text-center capitalize",children:"List is empty"}),e("div",{className:"w-full h-40"})]})]})}export{K as default};