import{j as e}from"./mui-8e804a04.js";import{r as i,f as A}from"./router-87042356.js";import"./index-05fe6e4f.js";import{a as R}from"./axios-97164839.js";import{k as P,r as y,U as a}from"./index-d0d2dbd0.js";import{W as C}from"./WaterApiList-3b6a8dd6.js";import{Q as I}from"./QrCode-5d49e353.js";import{l as S}from"./index-51d8014a.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index-8289c3ab.js";const z=()=>{var n,m,x,h,b,p;const{t:s}=P(),[l,j]=i.useState(),[O,t]=i.useState(!1),o=i.useRef(),d=S.useReactToPrint({content:()=>o.current}),{consumerId:c}=A();console.log("param payment id ..",c);const{api_waterApplicationPaymentReceiptmemo:u,header:v}=C(),w=()=>{t(!0),R.post(u,{consumerNo:c},v).then(r=>{var g,f,N;(g=r==null?void 0:r.data)!=null&&g.status?(j((N=(f=r==null?void 0:r.data)==null?void 0:f.data)==null?void 0:N.data),t(!1),console.log("Data Found",r)):(t(!1),console.log("No Data Found"))}).catch(r=>{t(!1),console.log("Exception while getting receipt bill",r)})};return i.useEffect(()=>w(),[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",ref:o,children:[e.jsxs("div",{children:[e.jsx("div",{className:"md:px-0 flex-1 "}),e.jsx("div",{className:"md:px-0 flex-1 ",children:e.jsxs("button",{onClick:d,className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-sky-500 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e.jsx(y,{className:"inline text-lg"}),"print"]})})]}),e.jsx("div",{id:"printableArea",className:"",children:e.jsxs("div",{children:[e.jsxs("div",{className:"border-2 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto  container  mt-12 pb-12",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:(n=a(s))==null?void 0:n.ulb_logo,className:"h-20 mx-auto"})}),e.jsx("div",{className:"flex justify-center items-center w-full relative",children:e.jsx("img",{src:(m=a(s))==null?void 0:m.state_logo,alt:"",className:" w-[22rem] h-[22rem]  bg-transparent opacity-20 top-60 rounded-full absolute"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-bold text-2xl text-center ",children:(x=a(s))==null?void 0:x.ulb_name}),e.jsxs("h1",{className:" text-lg text-center ",children:["Water Supply section ",e.jsx("br",{}),"Section 592 of the ",(h=a(s))==null?void 0:h.state," Municipal Act-2011"," ",e.jsx("br",{})," ",(b=a(s))==null?void 0:b.ulb_name," water charges and civil laws in 2020"]})]})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"mx-auto",children:e.jsx("h1",{className:"font-semibold text-xl text-center text-gray-800 border border-gray-700 w-[37rem]  uppercase",children:"water meter connection with order form"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"mx-auto",children:e.jsx("h1",{className:"text-lg text-center",children:"Sub : - Residential complex with regard to Meter Connection, including water ."})})}),e.jsxs("div",{className:"grid grid-cols-12",children:[" ",e.jsx("div",{className:"col-span-6",children:e.jsxs("div",{className:" grid grid-cols-12 ",children:[e.jsxs("div",{className:" col-span-6 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold ",children:"Consumer Id.. :"}),e.jsx("h1",{className:"flex text-gray-900  font-semibold mt-1",children:"Year :"}),e.jsx("h1",{className:"flex text-gray-900  font-semibold mt-1",children:"Receiving Date:"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1",children:"Vide Receipt Number :"}),e.jsxs("div",{className:" mt-6 ",children:[e.jsx("h1",{className:"text-s text-gray-800 font-extrabold p-2",children:"1. Applicant Details"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1 ",children:"Ward No :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1 ",children:"Applicant Name :"}),e.jsxs("h1",{className:"flex text-gray-900 font-semibold mt-1 ",children:["Correspondence Address :"," "]}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1",children:"E-mail :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1",children:"Holding No (if any) :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1",children:"Build-up area in square :"})]})]}),e.jsxs("div",{className:" col-span-6",children:[e.jsx("h1",{className:"flex font-normal pl-2",children:(l==null?void 0:l.consumerNo)||"N/A"}),e.jsx("h1",{className:"flex  pl-2 mt-1 ",children:"2023"}),e.jsx("h1",{className:"flex  pl-2 mt-1",children:"2022-08-20"}),e.jsx("h1",{className:"flex  pl-2 mt-1 ",children:"NC29705897698,8678-4657648"}),e.jsxs("div",{className:" mt-10",children:[e.jsx("h1",{className:"flex   pl-2",children:"25"}),e.jsx("h1",{className:"flex  pl-2 mt-1",children:"MR. CHANDAN KUMAR"}),e.jsx("h1",{className:"flex  pl-2 mt-1 ",children:"LALPUR"}),e.jsx("h1",{className:"flex  pl-2 mt-1",children:"abc@gmail.com"}),e.jsx("h1",{className:"flex  pl-2 mt-1",children:"123456"}),e.jsx("h1",{className:"flex  pl-2 mt-1",children:"80"})]})]})]})}),e.jsx("div",{className:"col-span-6",children:e.jsxs("div",{className:" grid grid-cols-12",children:[e.jsxs("div",{className:" col-span-6",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold ",children:"Application No. :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1 ",children:"Approval Date :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1 ",children:"Payment Date :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1 ",children:"Connection Date :"}),e.jsxs("div",{className:" mt-16",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold ",children:"Guardian Name :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1 ",children:"Mobile No. :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1 ",children:"Plot No. :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1",children:"Suvidha Shulk No. (if any) :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1 ",children:"Connection Through :"})]})]}),e.jsxs("div",{className:" col-span-6",children:[e.jsx("h1",{className:"flex  pl-2 ",children:(l==null?void 0:l.applicationNo)||"N/A"}),e.jsx("h1",{className:"flex  pl-2 mt-1",children:"2023-05-02"}),e.jsx("h1",{className:"flex  pl-2 mt-1",children:"2023-01-10 2022-10-02"}),e.jsx("h1",{className:"flex  pl-2 mt-1",children:"2023-01-10"}),e.jsxs("div",{className:" mt-16",children:[e.jsx("h1",{className:"flex  pl-2 ",children:" MR. RAM KUMAR"}),e.jsx("h1",{className:"flex pl-2 mt-1",children:"6099068110"}),e.jsx("h1",{className:"flex  pl-2 mt-1",children:"198"}),e.jsx("h1",{className:"flex  pl-2 mt-1"}),e.jsx("h1",{className:"flex pl-2 mt-1",children:"JSK"})]})]})]})})]}),e.jsx("div",{className:" mt-2",children:e.jsx("h1",{className:"text-s text-gray-800 font-extrabold p-2 ",children:"2. Water Connection as per the prescribed rate in the light of the By-By-2015"})}),e.jsxs("div",{className:" grid grid-cols-12",children:[e.jsx("div",{className:" col-span-6",children:e.jsxs("div",{className:" grid grid-cols-12",children:[e.jsxs("div",{className:" col-span-6",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold ",children:"Water Connection Fee :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1",children:"Aggregate amount deposited :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1",children:"Extra Charge (During Inspection) :"})]}),e.jsx("div",{className:" col-span-6",children:e.jsxs("div",{className:" mt-[2%]",children:[e.jsx("h1",{className:"flex  pl-2",children:"3000.00"}),e.jsx("h1",{className:"flex  pl-2 mt-1",children:"2350.00"}),e.jsx("h1",{className:"flex  pl-2  mt-8",children:"0"})]})})]})}),e.jsx("div",{className:" col-span-6",children:e.jsxs("div",{className:" grid grid-cols-12",children:[e.jsx("div",{className:" col-span-6",children:e.jsxs("div",{className:"mt-[2%]",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold ",children:"Category :"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold mt-1",children:"Total Amount:"})]})}),e.jsx("div",{className:" col-span-6",children:e.jsxs("div",{className:" mt-[2%]",children:[e.jsx("h1",{className:"flex  pl-2 ",children:"BPL"}),e.jsx("h1",{className:"flex   pl-2 mt-1",children:"3000.00"})]})})]})})]}),e.jsx("div",{className:"mt-2",children:e.jsx("table",{className:"w-full  p-2 -mt-1",children:e.jsxs("tr",{className:"",children:[e.jsxs("h1",{className:"text-xl text-gray-800 font-semibold p-2",children:["Attachments:-Approved Plans ",e.jsx("br",{})," ",e.jsx("br",{}),"notice:-"]}),e.jsx("h1",{className:"font-semibold text-gray-700 text-lg mt-2",children:"1. The Ferrule Size should be approved in the presence of pipeline inspector / junior engineer of RANCHI MUNICIPAL CORPORATION by the applicant and the service pipe should not be laid in drain."}),e.jsxs("h1",{className:"font-semibold text-gray-700 text-lg mt-2",children:["2. Applicant will have to pay water charges from the date of the connection as 9 Rs per Kg/(1000) liters ."," "]}),e.jsxs("h1",{className:"font-semibold text-gray-700 text-lg mt-2",children:["3. Providing technical approval in accordance with the water connection and water meter with ISI mark will make sure to inform the Assistant Engineer , water supply branch ,RANCHI MUNICIPAL CORPORATION within 15 days otherwise 200 Fixed Rate (+ 10% Penalty) will be recovered from the water charges."," "]}),e.jsxs("h1",{className:"font-semibold text-gray-700 text-lg mt-2",children:["4. The consumer will have to provide water connection / meter declaration information themselves in writing to RANCHI MUNICIPAL CORPORATION ."," "]}),e.jsxs("h1",{className:"font-semibold text-gray-700 text-lg mt-2",children:["5. (A) The consumer must pay water tax bill within the due date otherwise simple interest at the rate of 2% will be levied.",e.jsx("br",{}),"(B) If the consumer does not pay the bill on the due date, water connection will be cut off and reconnection will be charged with water tax."," "]}),e.jsxs("h1",{className:"font-semibold text-gray-700 text-lg mt-2",children:["6. Pipeline inspector will correspond to junior engineer water supply branch, RANCHI MUNICIPAL CORPORATION with the instructions that correspond to the order for water connection by plumber within 15 days ."," "]})]})})}),e.jsx("div",{className:"mt-8",children:e.jsx("table",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"w-[36rem] ",children:e.jsxs("h1",{className:"",children:[" ","Copy : -"," ",e.jsxs("span",{className:"text-gray-700 font-sans",children:["Pipeline inspector / conveyor engineer , water supply branch , Ranchi Municipal Corporation, Ranchi with this instruction, in accordance with the order approved before them, by combining water from Plumber, will report it to the office within 15 days."," "]})]})}),e.jsxs("td",{className:"w-[24rem]  ",children:[e.jsx("a",{href:"https://ibb.co/0MPsGmf",children:e.jsx("img",{src:"https://i.ibb.co/fpmDxqC/Jon-Kirsch-s-Signature.png",alt:"Jon-Kirsch-s-Signature",width:"200",height:"150",className:" ml-24",border:"0"})}),e.jsxs("h1",{className:"font-bold text-gray-700 ml-20 mt-10",children:["Executive Officer ",e.jsx("br",{}),"Water Supply Section,",e.jsx("br",{}),(p=a(s))==null?void 0:p.ulb_name]})]})]})})}),e.jsx("div",{className:"mt-8",children:e.jsx("table",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"w-[36rem] ",children:e.jsx(I,{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png",size:"64"})}),e.jsxs("td",{className:"w-[24rem]  ",children:[e.jsx("a",{href:"https://ibb.co/0MPsGmf",children:e.jsx("img",{src:"https://i.ibb.co/fpmDxqC/Jon-Kirsch-s-Signature.png",alt:"Jon-Kirsch-s-Signature",width:"200",height:"150",className:" ml-24",border:"0"})}),e.jsxs("h1",{className:"font-bold text-gray-700 ml-20 mt-10",children:["Executive Officer ",e.jsx("br",{}),"Water Supply Section,",e.jsx("br",{}),"RANCHI MUNICIPAL CORPORATION"]})]})]})})})]}),e.jsxs("div",{className:"border-2 border-dashed border-gray-60 border-black  bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto  container mt-4 ",children:[e.jsx("h1",{className:"text-s text-gray-800 font-extrabold p-2 underline",children:"Owner Details"}),e.jsxs("div",{className:"grid grid-cols-12 ",children:[e.jsxs("div",{className:"col-span-3 ",children:[e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b border-l border-t border-gray-900/80 py-1 p-2",children:["Owner Name"," "]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l   border-gray-900/80 py-1 p-2",children:["Purpose"," "]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l  border-gray-900/80 py-1 p-2",children:["Address"," "]}),e.jsx("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l border-gray-900/80 py-1 p-2",children:"Ward No"}),e.jsx("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l border-gray-900/80 py-1 p-2",children:"Holding/Plot No."}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l  border-gray-900/80 py-1 p-2",children:["Mobile No."," "]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l  border-gray-900/80 py-1 p-2",children:["Pipeline"," "]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l  border-gray-900/80 py-1 p-2",children:["Category"," "]})]}),e.jsxs("div",{className:"col col-span-2 ",children:[e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b   border-t border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b   border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b   border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b   border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-gray-900/80 py-1",children:[" ",":"]})]}),e.jsxs("div",{className:"col-span-7 ",children:[e.jsx("h1",{className:"flex   pl-2 border-b border-t  border-r border-gray-900/80 py-1",children:"MR. CHANDAN KUMAR"}),e.jsx("h1",{className:"flex uppercase pl-2 border-b   border-r border-gray-900/80 py-1",children:"domestic water pipeline with meter connection"}),e.jsx("h1",{className:"flex uppercase pl-2 border-b   border-r border-gray-900/80 py-1",children:"lalpur"}),e.jsx("h1",{className:"flex  pl-2 border-b   border-r border-gray-900/80 py-1",children:"25"}),e.jsx("h1",{className:"flex  pl-2 border-b  border-r border-gray-900/80 py-1",children:"123456"}),e.jsx("h1",{className:"flex  pl-2 border-b   border-r border-gray-900/80 py-1",children:"6299068110"}),e.jsx("h1",{className:"flex uppercase  pl-2 border-b   border-r border-gray-900/80 py-1",children:"Old pipe line"}),e.jsx("h1",{className:"flex uppercase pl-2 border-b  border-r border-gray-900/80 py-1",children:"BPL"})]})]}),e.jsx("h1",{className:"text-s text-gray-800 font-extrabold p-2 underline",children:"Je Inspection Report"}),e.jsxs("div",{className:"flex",children:[e.jsxs("h1",{className:"  text-gray-900 font-semibold border-gray-900/80 ml-[20%] ",children:["Particulars"," "]}),e.jsxs("h1",{className:"  text-gray-900 font-semibold border-gray-900/80 ml-[40%]",children:["Reports"," "]})]}),e.jsxs("div",{className:"grid grid-cols-12 ",children:[e.jsxs("div",{className:"col-span-6 ",children:[e.jsx("h1",{className:"flex  text-gray-900 font-semibold border-b border-l border-t border-gray-900/80 py-1 p-2",children:"Property Type"}),e.jsx("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l   border-gray-900/80 py-1 p-2",children:"Total Area in Sq.Ft."}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l  border-gray-900/80 py-1 p-2",children:["Distribution Pipeline Report"," "]}),e.jsx("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l border-gray-900/80 py-1 p-2",children:"Distribution Pipeline Size (In MM)"}),e.jsx("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l border-gray-900/80 py-1 p-2",children:"Distribution Pipeline Size Type"}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l  border-gray-900/80 py-1 p-2",children:["Is Application Comes Under Regularization"," "]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l  border-gray-900/80 py-1 p-2",children:["Permissible Pipe Diameter"," "]}),e.jsx("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l  border-gray-900/80 py-1 p-2",children:"Permissible Pipe Quality"}),e.jsx("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l  border-gray-900/80 py-1 p-2",children:"Permissible Ferrule Size"}),e.jsx("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l  border-gray-900/80 py-1 p-2",children:"Road Type"}),e.jsx("h1",{className:"flex  text-gray-900 font-semibold border-b  border-l  border-gray-900/80 py-1 p-2",children:"Applicant Category"})]}),e.jsxs("div",{className:"col col-span-1 ",children:[e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b   border-t border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b   border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b   border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b   border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-gray-900/80 py-1",children:[" ",":"]}),e.jsxs("h1",{className:"flex  text-gray-900 font-semibold border-b  border-gray-900/80 py-1",children:[" ",":"]})]}),e.jsxs("div",{className:"col-span-5 ",children:[e.jsx("h1",{className:"flex   pl-2 border-b border-t  border-r border-gray-900/80 py-1",children:"Residential"}),e.jsx("h1",{className:"flex uppercase pl-2 border-b   border-r border-gray-900/80 py-1",children:"635.00"}),e.jsx("h1",{className:"flex uppercase pl-2 border-b   border-r border-gray-900/80 py-1",children:"New Pipeline"}),e.jsx("h1",{className:"flex  pl-2 border-b   border-r border-gray-900/80 py-1",children:"6"}),e.jsx("h1",{className:"flex  pl-2 border-b  border-r border-gray-900/80 py-1",children:"12"}),e.jsx("h1",{className:"flex  pl-2 border-b   border-r border-gray-900/80 py-1",children:"New connection"}),e.jsx("h1",{className:"flex uppercase  pl-2 border-b   border-r border-gray-900/80 py-1",children:"Old pipe line"}),e.jsx("h1",{className:"flex uppercase pl-2 border-b  border-r border-gray-900/80 py-1",children:"Gi"}),e.jsx("h1",{className:"flex uppercase pl-2 border-b  border-r border-gray-900/80 py-1",children:"6"}),e.jsx("h1",{className:"flex uppercase pl-2 border-b  border-r border-gray-900/80 py-1",children:"Road cutting"}),e.jsx("h1",{className:"flex uppercase pl-2 border-b  border-r border-gray-900/80 py-1",children:"Apl"})]})]}),e.jsxs("table",{className:"w-full  p-2  mt-8",children:[e.jsx("tr",{className:"",children:e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/128/738/738822.png",className:"mx-auto"})}),e.jsx("tr",{className:"",children:e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/358/358605.png",className:"mx-auto h-24 w-96"})}),e.jsx("tr",{children:e.jsxs("td",{className:"w-[24rem] float-right ",children:[e.jsx("a",{href:"https://ibb.co/0MPsGmf",children:e.jsx("img",{src:"https://i.ibb.co/fpmDxqC/Jon-Kirsch-s-Signature.png",alt:"Jon-Kirsch-s-Signature",width:"200",height:"150",className:" ml-24",border:"0"})}),e.jsxs("h1",{className:"font-bold text-gray-700 ml-20 mt-10",children:["Junior Engineer",e.jsx("br",{}),"Water Supply Section,",e.jsx("br",{}),"RANCHI MUNICIPAL CORPORATION"]})]})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2  mt-12",children:e.jsx("div",{className:"",children:e.jsx("img",{src:"https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png",className:"w-36 mx-auto"})})})]})]})}),e.jsx("div",{className:"flex justify-center my-5 ",children:e.jsxs("button",{onClick:d,className:"pl-4 pr-6 py-3 bg-indigo-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-amber-100 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e.jsx(y,{className:"inline text-lg"}),"print"]})})]})})};export{z as default};