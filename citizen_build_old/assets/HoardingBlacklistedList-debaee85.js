import{j as t}from"./mui-8e804a04.js";import{r as e,f as W,u as X}from"./router-87042356.js";import"./setBatchUpdatesFn-4c0c10a7.js";import{M as N}from"./index-4e794517.js";import{A as Y,b as Z,B as $}from"./index-c520ecbd.js";import"./AgencyNotification-388e11b0.js";import{a as tt}from"./ReuploadDocumentModal-d542b2ad.js";import{H as et}from"./HoardingApplicationFullDetail-c8e95624.js";import{C as st}from"./CommonModal-340f9ebb.js";import{S as at}from"./ServerErrorCard-e788444f.js";import{A as ot}from"./AdvtListTablePagination-49e3f516.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./RazorpayPaymentScreen-c79c0872.js";import"./CitizenApplyApiList-1f568be1.js";import"./logo1-66954bc2.js";import"./WaterApiList-6143eebc.js";import"./UseRazorpay-62e4000a.js";import"./index-48d14c2d.js";import"./materialTailwind-ec852917.js";import"./react-tooltip.min-a60d6cc9.js";const rt={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};N.setAppElement("#root");function Dt(it){e.useState(!1),e.useState(!1);const{api_getHoardingBlacklistedList:A}=tt();e.useState(),e.useState(!1);const[L,y]=e.useState(),[C,I]=e.useState(),[nt,H]=e.useState(!1),[P,lt]=e.useState(!1),[E,c]=e.useState(!1),M=()=>c(!0),p=()=>c(!1),D=()=>{};e.useState();const[a,O]=e.useState(!1),[m,u]=e.useState(!1),[T,i]=e.useState(!1),[B,F]=e.useState(0),[n,k]=e.useState(1),[V,h]=e.useState(0),[l,_]=e.useState(10),[d,R]=e.useState(""),[U,g]=e.useState(!1),{id:q}=W();console.log("id im param",q);const K=s=>{H(s)};X();const z=[{Header:"#",Cell:({row:s})=>t.jsx("div",{className:"pr-2",children:s.index+1})},{Header:"Application No",accessor:"application_no"},{Header:"Apply Date.",accessor:"application_date"},{Header:"Action",accessor:"id",Cell:({cell:s})=>t.jsx("div",{children:t.jsx("button",{onClick:()=>G(s.row.values.id,"Approve"),className:`bg-indigo-500 px-3 py-1 rounded leading-5 shadow-lg hover:shadow-xl hover:bg-indigo-700 \r
                hover:text-white text-white`,children:"View"})})}],G=(s,r)=>{console.log("..............application id..............",s),console.log("..............application type..............",r),I(s),y(r),M()};e.useEffect(()=>{x(n,l,d)},[n,d,l]);const x=(s,r,Q="")=>{g(!0),i(!0),Y.post(A,{page:s,perPage:r,key:Q},Z()).then(o=>{var f,S,v,j,b,w;O((S=(f=o.data)==null?void 0:f.data)==null?void 0:S.data),u(!0),i(!1),F((j=(v=o.data)==null?void 0:v.data)==null?void 0:j.total),h((w=(b=o.data)==null?void 0:b.data)==null?void 0:w.last_page)}).catch(o=>{console.log("Error while fetching Filter Data",o),u(!1),i(!1)}),setTimeout(()=>{g(!1)},[500])},J={totalDataCount:B,currentPageIndex:n,setcurrentPageIndex:k,pageLength:l,setpageLength:_,lastPageIndex:V,setlastPageIndex:h,fetchInboxList:x,searchValue:d,setsearchValue:R,refreshStatus:U};return T?t.jsx(t.Fragment,{children:t.jsx($,{})}):P?t.jsx(st,{children:t.jsx(at,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"})}):t.jsx(t.Fragment,{children:t.jsx("div",{className:"container bg-white text-gray-600 h-screen mx-auto mt-12",children:t.jsxs("div",{children:[t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 container mx-auto pt-4 ",children:t.jsx("div",{className:"col-span-12 p-2",children:t.jsxs("div",{className:"flex flex-row bg-white mb-4 rounded leading-5 shadow-md shadow-violet-100 ",children:[t.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/3288/3288006.png",className:"h-10 ml-3 mt-2"}),t.jsx("h1",{className:"text-xl text-gray-700 font-semibold p-4",children:"BLACKLISTED APPLICATIONS"})]})})}),t.jsxs("div",{className:"grid grid-cols-1 p-2",children:[m&&(a==null?void 0:a.length)!=0&&t.jsx(ot,{columns:z,dataList:a,values:J}),m&&(a==null?void 0:a.length)==0&&t.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:"Data Not Found"})]}),t.jsx("div",{className:"grid grid-cols-1",children:t.jsx(N,{isOpen:E,onAfterOpen:D,onRequestClose:p,style:rt,contentLabel:"Example Modal",children:t.jsx("div",{class:" rounded-lg shadow-xl border-2 border-gray-50 mx-auto px-0 ",style:{width:"80vw",height:"100%"},children:t.jsx("div",{className:"h-[44rem] bg-white overflow-y-auto",children:t.jsx(et,{data:C,applicationType:L,showLoader:K,closeModal:p})})})})})]})})})}export{Dt as default};