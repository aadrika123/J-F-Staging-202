import{j as t}from"./mui-8e804a04.js";import{r as a}from"./router-87042356.js";import{B as F,P as I}from"./index-ac659a09.js";import{a as h}from"./axios-97164839.js";import{M as S}from"./index-4e794517.js";import{R as A}from"./index.esm-799452e3.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const M="/assets/faq-1b25496c.png";const W=()=>{var x,u,p;const[r,b]=a.useState([]),[l,n]=a.useState(null),[d,j]=a.useState(null),[o,v]=a.useState([]),[w,i]=a.useState(!1),{post_moduleList:y,post_listFaq:N}=I(),[_,c]=a.useState(!1),k=e=>{j(e),c(!0)};function q(){}function m(){c(!1)}return a.useEffect(()=>{h.post(y,{}).then(e=>{var s,f,g;console.log("getting module list => ",e),b((s=e==null?void 0:e.data)==null?void 0:s.data),n((g=(f=e==null?void 0:e.data)==null?void 0:f.data[0])==null?void 0:g.id)}).catch(e=>{console.log("error getting module list -> ",e)})},[]),a.useEffect(()=>{console.log("module Id => ",l),l!=null&&(i(!0),h.post(N,{moduleId:l}).then(e=>{var s;console.log("getting faq list => ",e),v((s=e==null?void 0:e.data)==null?void 0:s.data)}).catch(e=>{console.log("error getting faq list -> ",e)}).finally(()=>{i(!1)}))},[l]),w?t.jsx(F,{}):t.jsxs(t.Fragment,{children:[t.jsx("section",{className:"px-6 md:px-14 max-sm:mb-10",children:t.jsx("div",{className:"mx-auto py-4",children:t.jsxs("div",{children:[t.jsxs("div",{className:"flex flex-col gap-y-2 md:flex-row items-center",children:[t.jsxs("div",{className:" w-full md:w-1/2",children:[t.jsx("h1",{className:"text-2xl font-bold text-black",children:"Frequently Asked Questions"}),t.jsx("p",{className:"mt-4 text-md leading-6 tracking-wide text-gray-500",children:"Welcome to our Frequently Asked Questions (FAQ). Here, we have compiled a comprehensive list of commonly asked questions to provide you with quick and informative answers."})]}),t.jsx("div",{className:"w-full md:w-1/2 flex flex-col items-center ",children:t.jsx("img",{src:M,alt:"",srcset:"",className:"w-[50vw] md:w-[15vw]"})})]}),t.jsxs("div",{className:"flex  gap-x-4 gap-y-2 flex-wrap items-center max-sm:mt-10",children:[t.jsx("span",{className:"font-semibold text-sm",children:"Choose Module : "}),t.jsx("select",{type:"text",name:"moduleName",value:l,onChange:e=>{var s;return n((s=e.target)==null?void 0:s.value)},id:"moduleName",className:"animate__animated animate__fadeIn animate__faster w-full md:w-1/5 w-full form-control block px-3 2xl:py-1 py-1 2xl:text-base text-sm text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none placeholder-gray-300 shadow-md font-semibold ",children:r==null?void 0:r.map(e=>t.jsx(t.Fragment,{children:t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.module_name})}))})]}),t.jsx("div",{className:"mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6",children:(o==null?void 0:o.length)>0?o.map((e,s)=>t.jsxs("div",{className:"rounded-md hover:shadow-md bg-slate-50 hover:scale-105 border border-black/30 p-6 h-full transition-all duration-300 ease-in-out overflow-hidden",children:[t.jsx("dt",{className:"text-lg font-semibold leading-6 text-gray-900",children:e==null?void 0:e.question}),t.jsx("dd",{className:"line-clamp-3 mt-2 text-sm text-gray-500",children:e==null?void 0:e.answer}),t.jsx("span",{className:"text-xs text-blue-600 cursor-pointer hover:underline",onClick:()=>k(s),children:"Read More >>"})]},s)):t.jsxs("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center",role:"alert",children:[t.jsx("span",{className:"block sm:inline",children:"Sorry! No FAQ available for this module right now."}),t.jsx("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3"})]})})]})})}),t.jsx(S,{isOpen:_,onAfterOpen:q,onRequestClose:m,className:"z-50 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center overflow-auto",children:t.jsxs("div",{class:"z-50 mt-10 rounded-lg md:w-[73%] sm:h-[85vh] w-full relative border border-black/30 bg-gray-50 px-4 md:px-6 py-4 h-max border-t-2 border-l-2 overflow-auto animate__animated animate__zoomIn animate__faster",children:[t.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:m,children:t.jsx(A,{fontSize:14})}),t.jsxs("h1",{className:"px-4 md:px-6 pt-4 md:pt-6 text-2xl font-semibold text-gray-900 text-center border-b pb-2 md:pb-4 uppercase tracking-wide",children:[(x=o[d])==null?void 0:x.module_name,"   FAQ"]}),t.jsxs("div",{className:"rounded-md p-4 md:p-6 transition-all duration-300 ease-in-out overflow-hidden",children:[t.jsx("dt",{className:"text-lg font-semibold leading-6 text-gray-900",children:(u=o[d])==null?void 0:u.question}),t.jsx("dd",{className:"line-clamp-3 mt-2 text-sm text-gray-500",children:(p=o[d])==null?void 0:p.answer})]})]})})]})};export{W as default};