import{M as N,r as t,u as W,a as X,A as Y,k as Z,j as e,aE as $,h as ee,S as te,cc as se}from"./index-11df8083.js";import"./setBatchUpdatesFn-d95dd5e9.js";import"./AgencyNotification-3bafd821.js";import{H as ae}from"./HoardingApplicationFullDetail-a2569494.js";import{A as oe}from"./AdvtListTablePagination-ba91d61c.js";const re={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};N.setAppElement("#root");function ge(ne){t.useState(!1),t.useState(!1);const{api_getHoardingBlacklistedList:A}=se();t.useState(),t.useState(!1);const[L,y]=t.useState(),[C,I]=t.useState(),[le,E]=t.useState(!1),[H,ie]=t.useState(!1),[P,d]=t.useState(!1),M=()=>d(!0),p=()=>d(!1),D=()=>{};t.useState();const[a,O]=t.useState(!1),[u,h]=t.useState(!1),[T,n]=t.useState(!1),[k,F]=t.useState(0),[l,B]=t.useState(1),[V,g]=t.useState(0),[i,_]=t.useState(10),[c,R]=t.useState(""),[U,x]=t.useState(!1),{id:q}=W();console.log("id im param",q);const K=s=>{E(s)};X();const z=[{Header:"#",Cell:({row:s})=>e.jsx("div",{className:"pr-2",children:s.index+1})},{Header:"Application No",accessor:"application_no"},{Header:"Apply Date.",accessor:"application_date"},{Header:"Action",accessor:"id",Cell:({cell:s})=>e.jsx("div",{children:e.jsx("button",{onClick:()=>G(s.row.values.id,"Approve"),className:`bg-indigo-500 px-3 py-1 rounded leading-5 shadow-lg hover:shadow-xl hover:bg-indigo-700 \r
                hover:text-white text-white`,children:"View"})})}],G=(s,r)=>{console.log("..............application id..............",s),console.log("..............application type..............",r),I(s),y(r),M()};t.useEffect(()=>{m(l,i,c)},[l,c,i]);const m=(s,r,Q="")=>{x(!0),n(!0),Y.post(A,{page:s,perPage:r,key:Q},Z()).then(o=>{var f,S,v,j,b,w;O((S=(f=o.data)==null?void 0:f.data)==null?void 0:S.data),h(!0),n(!1),F((j=(v=o.data)==null?void 0:v.data)==null?void 0:j.total),g((w=(b=o.data)==null?void 0:b.data)==null?void 0:w.last_page)}).catch(o=>{console.log("Error while fetching Filter Data",o),h(!1),n(!1)}),setTimeout(()=>{x(!1)},[500])},J={totalDataCount:k,currentPageIndex:l,setcurrentPageIndex:B,pageLength:i,setpageLength:_,lastPageIndex:V,setlastPageIndex:g,fetchInboxList:m,searchValue:c,setsearchValue:R,refreshStatus:U};return T?e.jsx(e.Fragment,{children:e.jsx($,{})}):H?e.jsx(ee,{children:e.jsx(te,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"container bg-white text-gray-600 h-screen mx-auto mt-12",children:e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 container mx-auto pt-4 ",children:e.jsx("div",{className:"col-span-12 p-2",children:e.jsxs("div",{className:"flex flex-row bg-white mb-4 rounded leading-5 shadow-md shadow-violet-100 ",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/3288/3288006.png",className:"h-10 ml-3 mt-2"}),e.jsx("h1",{className:"text-xl text-gray-700 font-semibold p-4",children:"BLACKLISTED APPLICATIONS"})]})})}),e.jsxs("div",{className:"grid grid-cols-1 p-2",children:[u&&(a==null?void 0:a.length)!=0&&e.jsx(oe,{columns:z,dataList:a,values:J}),u&&(a==null?void 0:a.length)==0&&e.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:"Data Not Found"})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(N,{isOpen:P,onAfterOpen:D,onRequestClose:p,style:re,contentLabel:"Example Modal",children:e.jsx("div",{class:" rounded-lg shadow-xl border-2 border-gray-50 mx-auto px-0 ",style:{width:"80vw",height:"100%"},children:e.jsx("div",{className:"h-[44rem] bg-white overflow-y-auto",children:e.jsx(ae,{data:C,applicationType:L,showLoader:K,closeModal:p})})})})})]})})})}export{ge as default};