import{R as C,c as j,a as k,r as i,b as a,F as L,M,j as o,A as P,h as F,P as O}from"./index-9e028225.js";import{I as E}from"./index.esm-f8ec4f33.js";import{R}from"./Blocks-f083f946.js";import"./iconBase-4bcdf8cb.js";const T=e=>{const{notify:l}=C.useContext(j),y=k(),{api_postApplicationToLevel:S,harvestingPostLevel:s,api_gbSafPostLevel:N}=O(),[u,r]=i.useState(""),[f,n]=i.useState(!1),[A,g]=i.useState(!1),I=()=>g(!0),m=()=>{g(!1)},_=()=>{};i.useEffect(()=>{console.log("enter in submission screen with application no.  =>  ",e==null?void 0:e.id),(e==null?void 0:e.openScreen)==!0&&I(),(e==null?void 0:e.openScreen)==!1&&m()},[e==null?void 0:e.openScreen]),console.log(e==null?void 0:e.roleName);const h=()=>{if(u==""){l("Write comment...","info");return}(e==null?void 0:e.roleName)=="tc"&&(e==null?void 0:e.canSubmit)!="true"&&(e==null||e.navigation()),n(!0),(e==null?void 0:e.roleName)=="tc"&&(e==null?void 0:e.canSubmit)=="false"&&n(!1),console.log("can submit => ",e==null?void 0:e.canSubmit),(e==null?void 0:e.roleName)=="tc"&&(e==null?void 0:e.canSubmit)=="true"&&n(!0);let c={applicationId:e==null?void 0:e.id,action:e==null?void 0:e.action,comment:u};console.log("data before forward => ",c);let d;(e==null?void 0:e.type)=="saf"&&(d=S),(e==null?void 0:e.type)=="gbSaf"&&(d=N),(e==null?void 0:e.type)=="harvesting"&&(d=s),((e==null?void 0:e.roleName)=="utc"||(e==null?void 0:e.canSubmit)=="true")&&P.post(d,c,F()).then(t=>{var b,x,w,v;((b=t==null?void 0:t.data)==null?void 0:b.status)==!0&&(n(!1),m(),console.log("success forward => ",t),l((x=t==null?void 0:t.data)==null?void 0:x.message,"success"),y("/search/property",{replace:!0})),((w=t==null?void 0:t.data)==null?void 0:w.status)==!1&&(n(!1),e.closePopUp(),console.log("error forward => ",t),l((v=t==null?void 0:t.data)==null?void 0:v.message,"error"))}).catch(t=>{n(!1),console.log("error forward => ",t),l(t,"error")})};i.useEffect(()=>{(e==null?void 0:e.canSubmit)!=""&&h()},[e==null?void 0:e.canSubmit]);const z=()=>{m(),e.closePopUp()};return a(L,{children:a(M,{isOpen:A,onAfterOpen:_,className:"z-40 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center overflow-auto  animate__animated animate__zoomIn animate__faster",contentLabel:"Example Modal",children:o("div",{style:{zIndex:1e3},class:"absolute z-40 rounded-lg shadow-lg shadow-indigo-300 md:w-[50vw] md:h-max w-[90%] border-2 border-indigo-500 bg-gray-50 px-2 m-2 py-4 h-max border-t-2 border-l-2 overflow-auto",children:[!f&&a("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:()=>z(),children:a(E,{fontSize:10})}),o("div",{className:"flex flex-col items-center px-4",children:[a("div",{className:"mt-6 mb-4 bg-indigo-600 font-semibold rounded-sm w-full 2xl:text-2xl text-lg text-center shadow-sm text-white px-4 py-2 poppins uppercase",children:"Workflow Action"}),o("div",{children:[a("label",{htmlFor:"comment",children:"Comment :"}),a("textarea",{name:"comment",onChange:c=>r(c.target.value),className:"bg-white px-2 py-1 w-full rounded-sm shadow-sm border-[1px] border-gray-400",id:"",cols:"30",rows:"3"})]}),f?a("div",{className:"flex justify-center",children:a(R,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}):a("button",{onClick:()=>h(),className:"2xl:px-6 px-3 py-1.5 2xl:py-2.5 cursor-pointer bg-indigo-500 text-white font-medium text-xs  poppins rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out mt-4 capitalize",children:e==null?void 0:e.action})]})]})})})};export{T as default};