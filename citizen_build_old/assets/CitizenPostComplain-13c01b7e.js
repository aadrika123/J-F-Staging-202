import{j as e}from"./mui-8e804a04.js";import{r as l,u as _}from"./router-87042356.js";import{l as B,c as G,u as T,b as u}from"./index-c520ecbd.js";import{a as d}from"./axios-97164839.js";import{C as U}from"./CitizenApplyApiList-1f568be1.js";import{A as H}from"./ApiHeader2-b5fd0f3d.js";import{u as M}from"./useCustomLocation-8f274caf.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const K="/assets/GrievancesPost-3d2d1e10.png",Y="/assets/OK-44beb136.svg";function re($){const m=l.useRef(),{coords:r,isGeolocationEnabled:x}=M(),{notify:n}=l.useContext(B),[g,c]=l.useState(!1),p=_(),[h,f]=l.useState([]),[b,j]=l.useState(""),[N,v]=l.useState(""),[y,w]=l.useState(""),{postCitizenTcComplain:C,api_citizenwardlist:F,api_consumervalidatedetails:P}=U(),k=G({}),o=T({initialValues:{remarks:"",complain:"",uploadPhoto:"",latitude:"",longitude:"",mobileNo:""},onSubmit:(s,t)=>{A()},validationSchema:k}),A=()=>{let s=new FormData;s.append("photo",b),s.append("consumerNo",o.values.consumerNo),s.append("consumerAddress",o.values.consumerAddress),s.append("latitude",o.values.latitude),s.append("consumerWard",o.values.consumerWard),s.append("longitude",o.values.longitude),s.append("remarks",o.values.remarks),s.append("complain",o.values.complain),s.append("mobileNo",o.values.mobileNo),d.post(C,s,H()).then(function(t){var i,a;t.data.status&&(n((i=t==null?void 0:t.data)==null?void 0:i.msg,"success"),w((a=t==null?void 0:t.data)==null?void 0:a.data),W())}).catch(function(t){n("failed to post data","error")})},D=()=>{d.post(`${F}`,u()).then(function(s){s.status===200&&Array.isArray(s.data.data)?(f(s.data.data),console.log("Ward list fetched successfully:",s.data.data)):console.log("Invalid response structure:",s)}).catch(function(s){console.error("Error fetching ward list:",s)})},S=s=>{c(!0),d.post(P,{consumerNo:s},u()).then(t=>{t.data.status?(c(!1),console.log("Consumer Details found:",t.data.data.ownerDetails),n("Consumer Details found","success"),I(t.data.data),console.log("chandan1",t.data.data)):(c(!1),console.log("No Consumer Found"),n("No Consumer Found","error"),V())}).catch(t=>{c(!1),console.log(t),n("Data Not Found","error")})},I=s=>{o.setFieldValue("consumerAddress",s==null?void 0:s.address),o.setFieldValue("consumerName",s==null?void 0:s.name),o.setFieldValue("consumerWard",s==null?void 0:s.ward_no),o.setFieldValue("mobileNo",s==null?void 0:s.mobile_no)},V=()=>{o.setFieldValue("consumerAddress",""),o.setFieldValue("consumerName",""),o.setFieldValue("consumerWard",""),o.setFieldValue("mobileNo","")},E=s=>{let t=s.target.name;if(s.target.value,t=="uploadPhoto"){let i=s.target.files[0];j(s.target.files[0]);const a=new FileReader;a.onloadend=()=>{v(a.result)},a.readAsDataURL(i)}};l.useEffect(()=>{D()},[]),l.useEffect(()=>{o.values.uploadPhoto&&(o.setFieldValue("latitude",r==null?void 0:r.latitude),o.setFieldValue("longitude",r==null?void 0:r.longitude))},[o.values.uploadPhoto]);const R=({src:s,alt:t,fallbackSrc:i,className:a})=>{const[z,O]=l.useState(s);return e.jsx("div",{className:`relative ${a}`,children:e.jsx("img",{className:"w-full h-full",src:z,alt:t,onError:()=>O(i)})})},W=()=>{m.current.showModal()},L=()=>{p("/swm")};return e.jsx("div",{className:"max-h-screen overflow-y-auto pb-20",children:e.jsxs("div",{className:"w-full md:px-0 bg-white  ",children:[e.jsxs("div",{className:" w-full flex gap-2 sm:px-24 px-5 p-2 text-gray-600  font-semibold",children:[e.jsx("img",{src:K,className:"inline w-11"}),e.jsx("h1",{children:"Citizen Grievances Post Complain"})," "]}),e.jsx("div",{className:"block md:p-4 w-full px-6 bg-white shadow py-2  md:py-4 rounded-lg mx-auto md:mx-0",children:x?e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:o.handleSubmit,onChange:E,children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3  gap-2 sm:mx-20",children:[e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"text-gray-600 text-sm font-semibold",children:["Consumer No.",e.jsx("span",{className:"text-red-500"})]}),e.jsx("input",{...o.getFieldProps("consumerNo"),onBlur:s=>S(s.target.value),type:"text",className:"form-control block w-full px-3 mt-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Consumer No"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.consumerNo&&o.errors.consumerNo?o.errors.consumerNo:null})]}),g&&e.jsx("div",{className:"",children:"Loading..."})]}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No.",e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("select",{...o.getFieldProps("consumerWard"),className:"form-control cursor-pointer block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",children:[e.jsx("option",{value:"",children:"--select--"}),h.map(s=>e.jsx("option",{value:s.name,children:s.name},s.id))]})]})}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"  text-gray-600 text-sm font-semibold ",children:["Consumer Address",e.jsx("span",{className:"text-red-500"})]}),e.jsx("input",{...o.getFieldProps("consumerAddress"),type:"text",className:"form-control block w-full px-3 mt-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Consumer Address"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.licenseNo&&o.errors.licenseNo?o.errors.licenseNo:null})]})}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"  text-gray-600 text-sm font-semibold ",children:["Consumer Mobile No",e.jsx("span",{className:"text-red-500"})]}),e.jsx("input",{...o.getFieldProps("mobileNo"),type:"text",className:"form-control block w-full px-3 mt-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Consumer Address"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.licenseNo&&o.errors.licenseNo?o.errors.licenseNo:null})]})}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Select Complain",e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("select",{...o.getFieldProps("complain"),className:"form-control cursor-pointer block w-full  py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none   shadow-md",children:[e.jsx("option",{value:"",children:"--select--"}),e.jsx("option",{value:"Delayed Collection",children:"Delayed Collection"}),e.jsx("option",{value:"Improper Disposal",children:"Improper Disposal"}),e.jsx("option",{value:"Overflowing Bins",children:"Overflowing Bins"}),e.jsx("option",{value:"Unhygienic Conditions",children:"Unhygienic Conditions"}),e.jsx("option",{value:"Damaged Bins",children:"Damaged Bins"}),e.jsx("option",{value:"Non-Collection of Recyclables",children:"Non-Collection of Recyclables"}),e.jsx("option",{value:"Illegal Dumping",children:"Illegal Dumping"}),e.jsx("option",{value:"Odor Issues",children:"Odor Issues"}),e.jsx("option",{value:"Pest Problems",children:"Pest Problems"}),e.jsx("option",{value:"Customer Service Issues",children:"Customer Service Issues"}),e.jsx("option",{value:"Others",children:"Others"})]})]})}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Upload Photo",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{accept:"image/png, image/jpg, image/jpeg",...o.getFieldProps("uploadPhoto"),type:"file",className:"form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.uploadPhoto&&o.errors.uploadPhoto?o.errors.uploadPhoto:null}),e.jsx("div",{className:"bg-white mt-4 justify-center flex items-center w-full",children:e.jsxs("div",{children:[e.jsx(R,{src:N,alt:"image",fallbackSrc:"https://as1.ftcdn.net/v2/jpg/06/10/03/52/1000_F_610035228_Kgzb0jt9apyAdmnGTBspxTkb3xxfbzRH.jpg",className:"w-24 h-24"}),e.jsx("div",{className:"font-serif text-sm text-center",children:"Image-Preview"})]})})]})}),e.jsx("div",{}),e.jsx("div",{className:"",children:e.jsxs("div",{className:" ",children:[e.jsx("h1",{className:"px-1 font-semibold font-serif text-xs",children:"Remarks"}),e.jsxs("div",{className:"relative mb-4 h-full mt-3",children:[e.jsx("textarea",{...o.getFieldProps("remarks"),className:"shadow-lg w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-full text-sm outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out  focus:bg-white"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.remarks&&o.errors.remarks?o.errors.remarks:null})]})]})})]}),e.jsx("div",{className:"sm:px-20 text-left",children:e.jsx("button",{type:"submit",className:" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:"Post"})})]})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full flex h-10 justify-center items-center",children:e.jsx("h1",{className:"text-red-600",children:"Please enable location"})})})}),e.jsx("dialog",{ref:m,className:"",children:e.jsxs("div",{className:" ",children:[e.jsx("div",{className:"flex justify-center items-center w-full mt-2",children:e.jsx("img",{src:Y,alt:"",className:"w-20 "})}),e.jsx("h1",{className:"text-green-700 text-sm font-bold",children:"Your complaint has been successfully registered"}),e.jsxs("div",{className:"flex flex-col justify-center items-center space-y-2",children:[e.jsxs("h1",{className:"text-gray-400 text-sm font-bold mt-1",children:["Complain No  ",e.jsxs("span",{className:"text-black",children:[" -  ",y]})]}),e.jsx("button",{className:"px-4 py-1.5 bg-[#4338CA] hover:bg-blue-600 rounded-md text-white text-xs",onClick:L,children:"Continue"}),e.jsx("p",{className:"text-xs",children:"* Save Your Complain number for Future Reference"})]})]})}),e.jsx("div",{className:" w-full"})]})})}export{re as default};