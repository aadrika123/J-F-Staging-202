import{j as e}from"./mui-8e804a04.js";import{u as k,r as n}from"./router-87042356.js";import{A as d,b as c}from"./index-1f16bcd2.js";import{C as z}from"./CitizenApplyApiList-dc689636.js";import"./sweetalert2.all-9f5010e0.js";/* empty css              */import{w as R}from"./water-d221fd98.js";import{t as S,a as T,s as L,w as P,p as E}from"./septic-e2c4a8ca.js";import{r as I}from"./rigmachine-b295a960.js";import{m as M}from"./marriage-02383638.js";import{G as _}from"./reactIcons-6a3b6da1.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const G="/assets/profilesvg-9698c370.png",W="/assets/property-fbb4f386.png";function F(o){return _({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"}}]})(o)}const sa=()=>{var m,g,h,x,f,p;const o=k(),{post_citizenDashboard:v,api_getProfileDetails:u,api_applicationCount:j}=z(),[H,w]=n.useState([]),[B,b]=n.useState(null),[t,N]=n.useState([]),y=()=>{d.post(v,{},c()).then(a=>{var s,i,r;(s=a==null?void 0:a.data)!=null&&s.status&&w((r=(i=a==null?void 0:a.data)==null?void 0:i.data)==null?void 0:r.property)}).catch(a=>console.error(a))},A=()=>{d.post(u,{},c()).then(a=>{var s,i;(s=a==null?void 0:a.data)!=null&&s.status&&b((i=a==null?void 0:a.data)==null?void 0:i.data),console.log("Getting Citizen details",a)}).catch(a=>console.error(a))},D=()=>{d.post(j,{},c()).then(function(a){var s,i,r;console.log("fetched application count...",(s=a==null?void 0:a.data)==null?void 0:s.data),(i=a==null?void 0:a.data)!=null&&i.status&&N((r=a==null?void 0:a.data)==null?void 0:r.data)}).catch(function(a){console.log("notification error......",a)})};n.useEffect(()=>{y(),A(),D()},[]);let l=[{navigation:"/propertyDashboard",image:W,total:(t==null?void 0:t.propDetails)??0,name:"Property"},{navigation:"/water-dashboard",image:R,total:(t==null?void 0:t.waterDetails)??0,name:"Water Connection(s)"},{navigation:"/trade-dashboard",image:S,total:(t==null?void 0:t.tradeDetails)??0,name:"Trade License(s)"},{navigation:"/advertisement-dashboard",image:T,total:((m=t==null?void 0:t.Advertisement)==null?void 0:m.totalApplications)??0,name:"Advertisement"},{navigation:"/marriage-index",image:M,total:((g=t==null?void 0:t.Marriage)==null?void 0:g.totalApplications)??0,name:"Marriage Registration"},{navigation:"/septicTankDashboard",image:L,total:((h=t==null?void 0:t.Septic)==null?void 0:h.totalApplications)??0,name:"Septic Tank"},{navigation:"/waterTankerDashboard",image:P,total:((x=t==null?void 0:t.WaterTanker)==null?void 0:x.totalApplications)??0,name:"Water Tank"},{navigation:"/pet-registration-dashboard",image:E,total:((f=t==null?void 0:t.pet)==null?void 0:f.totalApplications)??0,name:"Pet Registration"},{navigation:"/vehicle-registration-dashboard",image:I,total:((p=t==null?void 0:t.rig)==null?void 0:p.totalApplications)??0,name:"Rig Registration"}];return console.log("module data===>",t),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-12 h-screen bg-white mx-4 md:mx-0",children:[e.jsxs("div",{className:" md:ml-11 mt-12 col-span-12 md:col-span-8 order-last md:order-first",children:[e.jsx("h1",{className:"text-2xl font-semibold max-sm:text-center",children:"All Egovernance Services"}),e.jsxs("div",{className:"flex flex-wrap gap-x-[4rem] gap-y-3 mt-10 bg-white  max-sm:justify-center max-sm:mb-20",children:[Array.isArray(l)&&(l==null?void 0:l.map(a=>e.jsx("div",{onClick:()=>o(a==null?void 0:a.navigation),className:"md:w-40 h-26 bg-white rounded-lg shadow-sm max-sm:w-full cursor-pointer",children:e.jsx("div",{className:"md:w-52 max-sm:w-full h-28 bg-white rounded-lg shadow-xl pl-2",children:e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-3 ",children:[e.jsx("div",{className:"w-10 h-10 rounded-full m-2 flex justify-center items-center",children:e.jsx("img",{src:a.image,alt:"",className:"w-8 h-8 rounded-full"})}),e.jsx("div",{className:"w-10 h-10 rounded-full mt-4 font-semibold flex justify-center items-center",children:a==null?void 0:a.total})]}),e.jsxs("div",{className:"col-span-9 ml-4 ",children:[e.jsx("h1",{className:"font-semibold text-sm mt-1 cursor-pointer",children:a.name}),e.jsxs("h1",{className:"text-xs font-semibold text-gray-600",children:[" ","Data Count"," "]})]})]})})},a.id))),e.jsx("div",{className:"w-52 h-28shadow-xl pl-2",children:e.jsx("div",{className:"flex justify-center items-center w-full h-full ",children:e.jsxs("span",{className:"hover:bg-gray-200 p-6 rounded-full cursor-pointer",onClick:()=>o("/propertyDashboard"),children:[" ",e.jsx(F,{className:"text-3xl"})]})})})]})]}),e.jsx("div",{className:"col-span-12 md:col-span-4 order-1 md:order-last pr-10 pt-5 ml-[2rem]",children:e.jsx("div",{className:"flex justify-center items-center w-full",children:e.jsx("div",{className:"",children:e.jsx("div",{className:"w-96 h-80",style:{backgroundImage:`url(${G})`,width:"21rem",marginTop:"",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsx("h1",{className:"text-4xl font-extrabold mt-5",children:"UD&HD"})})})})})})]})})};export{sa as default};