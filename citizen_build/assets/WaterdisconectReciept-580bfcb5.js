import{j as e}from"./mui-105b4636.js";import{r as l,f}from"./router-894402c5.js";import"./index-1c045e8a.js";import{a as u}from"./axios-67d8a945.js";import{p as g,j as n}from"./index-2fc866b5.js";import{W as b}from"./WaterApiList-eed22780.js";import"./react-40db4358.js";import"./index-b56dcfd5.js";import{l as v}from"./index-88ef8cd6.js";import"./reactIcons-58c2a0d8.js";import"./redux-b8f144fa.js";import"./i18next-e2c66b9b.js";const F=()=>{var t,i,c;const[R,m]=l.useState(),[y,a]=l.useState(!1),r=l.useRef(),h=v.useReactToPrint({content:()=>r.current}),{consumerId:x}=f(),{api_waterApplicationPaymentReceiptmemo:p,header:j}=b(),N=()=>{a(!0),u.post(p,{consumerNo:x},j).then(s=>{var o,d;(o=s==null?void 0:s.data)!=null&&o.status&&m((d=s==null?void 0:s.data)==null?void 0:d.data),a(!1)}).catch(s=>{a(!1)})};return l.useEffect(()=>N(),[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",ref:r,children:[e.jsxs("div",{children:[e.jsx("div",{className:"md:px-0 flex-1 "}),e.jsx("div",{className:"md:px-0 flex-1 ",children:e.jsxs("button",{onClick:h,className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-amber-100 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e.jsx(g,{className:"inline text-lg"}),"print"]})})]}),e.jsx("div",{id:"printableArea",className:"",children:e.jsx("div",{children:e.jsx("div",{className:"font-tahoma",children:e.jsxs("div",{className:"border-2 border-dashed border-gray-600  bg-white p-2 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto  container pb-12",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 relative",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:(t=n())==null?void 0:t.ulb_logo,className:"h-20 mx-auto"})}),e.jsx("div",{className:"",children:e.jsx("img",{src:(i=n())==null?void 0:i.state_logo,alt:"",className:" w-[22rem] h-[22rem]  absolute z-10 bg-transparent opacity-20 mt-[16rem] ml-[17rem]  rounded-full border"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-1 ",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-2xl text-center ",children:(c=n())==null?void 0:c.ulb_name})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"mx-auto",children:e.jsx("h1",{className:"font-semibold text-1xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:"water Board Section"})})}),e.jsx("h1",{className:"font-semibold text-1xl text-center text-gray-800 ",children:"Kachari Road , Ranchi, Pin - 834001"}),e.jsx("h1",{className:"font-semibold text-xs text-center text-gray-800 ",children:"e-mail-support@ranchimunicipal.com"}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-2",children:e.jsxs("tr",{className:"",children:[e.jsx("td",{className:" ",children:e.jsxs("div",{className:"flex p-1 text-1xl",children:[e.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Receipt No. :"}),e.jsx("h1",{className:"flex   pl-2",children:"123456"})]})}),e.jsx("td",{className:" ",children:e.jsxs("div",{className:"flex justify-end p-1 text-1xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Date :"}),e.jsx("h1",{className:"flex  pl-2 ",children:"20.07.2023"})]})})]})})}),e.jsxs("div",{children:[e.jsx("h1",{children:"From,"}),e.jsx("h1",{className:"ml-8 font-bold",children:"Assisstant Engineer"}),e.jsx("h1",{className:"ml-8 ",children:"Water Board Section , Ranchi municipal corporation"}),e.jsx("h1",{className:"mt-3",children:"To,"}),e.jsx("h1",{className:"ml-8 font-bold flex",children:"Shri/Smt - Rohan Kumar"}),e.jsx("h1",{className:"ml-8 ",children:"PipeLine Inspector"}),e.jsx("h1",{className:"ml-8 ",children:"Water Board Section, Ranchi municipal corporation"}),e.jsxs("h1",{className:"mt-3",children:["Subject-"," ",e.jsx("span",{className:"font-bold",children:"To Dissconnect Water Connection"})]}),e.jsxs("h1",{className:"mt-3",children:["Refrence-"," ",e.jsxs("span",{className:"",children:["Petiton No.: 24542652"," ",e.jsx("span",{className:"ml-5",children:" Date:20.07.2023"})]})]}),e.jsx("h1",{className:"mt-3",children:"To,"}),e.jsxs("h1",{className:"ml-8 ",children:["In the lite of under refrence Applicant Mr./Mrs-"," ",e.jsxs("span",{className:"font-bold",children:["Rohan kumar, Address-"," ",e.jsx("span",{className:"font-bold",children:"Krishna puri Ranchi, Jharkhand"})," ",e.jsx("span",{children:"H.No.-145247895416845"}),e.jsx("span",{className:"ml-2",children:"C.No.-145247895416845"}),e.jsx("span",{className:"ml-2",children:"Ward.No.-14"})]}),e.jsx("span",{className:"ml-2",children:" has deposited the water bill "})," ",e.jsx("span",{children:"Dated:."})]}),e.jsxs("h1",{className:"ml-8 ",children:["20.07.2023 and water Disconnection charges 450 vide MR.No. 216541562131."," "]}),e.jsx("p",{className:"mt-4",children:" Therefore,"}),e.jsxs("p",{className:"ml-8",children:[" ","You are directed to disconnection the water connection of Applicant- ",e.jsx("span",{children:"Rohan Kumar"})," and inform the undersigned ."]}),e.jsxs("h1",{className:" flex justify-end mr-10",children:["Your's Faithfully"," "]}),e.jsx("h1",{className:"mt-4 flex justify-end mr-10",children:"Signature"}),e.jsxs("h1",{className:" flex justify-end mr-5",children:[" ","Assisstant Engineer,"]}),e.jsx("h1",{className:" flex justify-end mr-10",children:"Water Board,"}),e.jsx("h1",{className:" flex justify-end",children:"Ranchi Municipal Corportaion"}),e.jsxs("h1",{className:"mt-4 ",children:[" ","Applicant Mr./Mrs-"," ",e.jsxs("span",{children:[" ",e.jsx("span",{className:"font-bold",children:"Rohan kumar,"})," Address-"," ",e.jsx("span",{className:"font-bold",children:"Krishna puri Ranchi, Jharkhand"})," ",e.jsx("span",{className:"font -bold",children:"H.No.-145247895416845"})]})," ",e.jsx("span",{className:"font-bold",children:"C.No.65422232651"}),e.jsx("span",{className:"ml-2 font-bold",children:"Ward.No.-14"})," ",e.jsx("span",{className:"ml-2 font-bold",children:"Dated:20.07.2023"})," for information in connection Pition No."," ",e.jsx("span",{className:"font-bold",children:"65416512"})," Dated:"," ",e.jsx("span",{children:"20.07.2023"})," You are requested to informed the waterBoard section after discconnection of water disconnection."]})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:e.jsx("div",{className:"",children:e.jsx("img",{src:"https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png",className:"w-24 mx-auto"})})})]})})})})]})})};export{F as default};