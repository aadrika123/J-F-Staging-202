import{j as e,X as fe,Y as H,Z as q}from"./mui-105b4636.js";import{r as n,u as ye}from"./router-894402c5.js";import{o as je,b as Y,u as ee,a3 as Ne,Q as L,c as we,a7 as T,d as u,ae as Se,y as Te,n as K,A as ve,a9 as Fe}from"./index-2fc866b5.js";import{a as Ae}from"./index.esm-da2b04d8.js";import{a as J}from"./axios-67d8a945.js";/* empty css             */import{B as _e}from"./BarLoader-d527b0c5.js";import{E as ke}from"./EmptyDetailsIllustration-3a65dbd5.js";import{A as Pe}from"./ApiHeader2-b5fd0f3d.js";import{a as Ee}from"./index.esm-99e80a3f.js";import{B as Oe}from"./BottomErrorCard-892eaca1.js";import"./react-40db4358.js";import"./reactIcons-58c2a0d8.js";import"./redux-b8f144fa.js";import"./i18next-e2c66b9b.js";import"./CommonModal-1a38119d.js";import"./index-82be3ecd.js";const re=()=>{const s=je;return{getType:`${s}/api/property/objection/objection-type`,getAssessment:`${s}/api/property/saf/get-prop-byholding`,postClericalData:`${s}/api/property/objection/rectification`,postAssessment:`${s}/api/property/objection/apply-objection`,getWardList:`${s}/api/property/saf/master-saf`}},Ce=s=>{var G,B,j,R,V,U,o,M,k,P,E,O;const{usageTypeList:g,constructionTypeList:v,occupancyTypeList:A,getWardList:w}=re(),[b,y]=n.useState(!1),[x,h]=n.useState(),[p,S]=n.useState(),[m,F]=n.useState(),[D,_]=n.useState(0);n.useEffect(()=>{_(D+1)},[]),n.useEffect(()=>{y(!0),J.post(w,{ulbId:s==null?void 0:s.ulbId},Y()).then(r=>{var C,W,I,Q,$,X;h((W=(C=r==null?void 0:r.data)==null?void 0:C.data)==null?void 0:W.usage_type),S((Q=(I=r==null?void 0:r.data)==null?void 0:I.data)==null?void 0:Q.occupancy_type),F((X=($=r==null?void 0:r.data)==null?void 0:$.data)==null?void 0:X.construction_type),y(!1)}).catch(r=>{y(!1)})},[D]);const f=ee({initialValues:{propFloorId:(G=s==null?void 0:s.floor)==null?void 0:G.id,floorNo:(B=s==null?void 0:s.floor)==null?void 0:B.floor_mstr_id,usageType:(j=s==null?void 0:s.floor)==null?void 0:j.usage_type_mstr_id,occupancyType:(R=s==null?void 0:s.floor)==null?void 0:R.occupancy_type_mstr_id,constructionType:(V=s==null?void 0:s.floor)==null?void 0:V.const_type_mstr_id,buildupArea:(U=s==null?void 0:s.floor)==null?void 0:U.builtup_area},enableReinitialize:!0,onSubmit:r=>{s.getfloor(r)}});return e.jsxs(e.Fragment,{children:[b&&e.jsx("div",{className:"w-full z-10 absolute mx-auto text-center flex justify-center items-center top-1/2",children:e.jsx("span",{className:"inline",children:e.jsx(Ne,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}),e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200 poppins",children:[e.jsx("td",{className:"px-2 py-2 text-left 2xl:text-sm text-xs poppins",children:(o=s==null?void 0:s.floor)==null?void 0:o.floor_name}),e.jsx("td",{className:"px-2 py-2 text-left 2xl:text-sm text-xs poppins",children:(M=s==null?void 0:s.floor)==null?void 0:M.usage_type}),e.jsx("td",{className:"px-2 py-2 text-left 2xl:text-sm text-xs poppins",children:(k=s==null?void 0:s.floor)==null?void 0:k.occupancy_type}),e.jsx("td",{className:"px-2 py-2 text-left 2xl:text-sm text-xs poppins",children:(P=s==null?void 0:s.floor)==null?void 0:P.construction_type}),e.jsx("td",{className:"px-2 py-2 text-left 2xl:text-sm text-xs poppins",children:(E=s==null?void 0:s.floor)==null?void 0:E.builtup_area})]}),e.jsxs("tr",{className:"bg-white shadow-md  border-b border-gray-200 border-b border-gray-500 poppins",children:[e.jsx("td",{className:"px-2 py-2 text-left font-semibold 2xl:text-sm text-xs poppins",children:(O=s==null?void 0:s.floor)==null?void 0:O.floor_name}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:e.jsxs("select",{...f.getFieldProps("usageType"),value:f.values.usageType,className:"div-control block w-full px-3 py-1.5 2xl:text-sm text-xs poppins font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),x==null?void 0:x.map(r=>e.jsx(e.Fragment,{children:e.jsx("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.usage_type})}))]})}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:e.jsxs("select",{...f.getFieldProps("occupancyType"),value:f.values.occupancyType,className:"div-control block w-full px-3 py-1.5  2xl:text-sm text-xs poppins font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),p==null?void 0:p.map(r=>e.jsx(e.Fragment,{children:e.jsx("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.occupancy_type})}))]})}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:e.jsxs("select",{...f.getFieldProps("constructionType"),value:f.values.constructionType,className:"div-control block w-full px-3 py-1.5  2xl:text-sm text-xs poppins font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),m==null?void 0:m.map(r=>e.jsx(e.Fragment,{children:e.jsx("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.construction_type})}))]})}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:e.jsx("input",{type:"number",...f.getFieldProps("buildupArea"),value:f.values.buildupArea,className:"div-control block w-full px-3 py-1.5 2xl:text-sm text-xs poppins font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"})}),e.jsx("td",{children:e.jsx("button",{onClick:f.handleSubmit,type:"submit",className:"bg-blue-200 hover:bg-blue-300 rounded-md shadow-md px-3 py-1.5",children:"Post"})})]}),e.jsxs("tr",{children:[" ",e.jsx("td",{colSpan:8,children:" "})]})]})},We=s=>{var x,h;n.useState();const[g,v]=n.useState([]),[A,w]=n.useState(!0),b=ee({initialValues:{floorNo:"",usageType:"",occupancyType:"",constructionType:"",buildupArea:""},onSubmit:p=>{}}),y=p=>{g==null||g.map(m=>{if((m==null?void 0:m.propFloorId)==(p==null?void 0:p.propFloorId))return w(!1)});let S=[...g,p];v([...g,p]),s==null||s.getFloorData(S),L.info("Posted...")};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-span-4 overflow-x-auto",onChange:b.handleChange,onSubmit:b.handleSubmit,children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"font-semibold text-left 2xl:text-sm text-xs poppins bg-sky-50",children:e.jsxs("tr",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left",children:[e.jsxs("th",{className:"py-2 px-2 poppins",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Floor No."]}),e.jsxs("th",{className:"py-2 px-2 poppins",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Usage Type"]}),e.jsxs("th",{className:"py-2 px-2 poppins",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Occupancy Type"]}),e.jsxs("th",{className:"py-2 px-2 poppins",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Construction Type"]}),e.jsxs("th",{className:"py-2 px-2 poppins",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Built Up Area",e.jsxs("small",{className:"block mt-1 text-xs text-gray-600 inline ",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"(in Sq. Ft)"]})]}),e.jsx("th",{className:"py-2 px-2 poppins",children:"Action"})]})}),e.jsxs("tbody",{className:"text-xs",children:[((x=s==null?void 0:s.floor)==null?void 0:x.length)<1&&e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"italic bg-red-200 px-4 py-2 text-center",children:"No Floor List Found !!"})})}),(h=s==null?void 0:s.floor)==null?void 0:h.map(p=>e.jsx(e.Fragment,{children:e.jsx(Ce,{floor:p,getfloor:y,ulbId:s==null?void 0:s.ulb})}))]})]})})})};function Ie(s){const{getAssessment:g,postAssessment:v,getType:A,getWardList:w}=re(),b=s==null?void 0:s.id;ye();const[y,x]=n.useState(!1),[h,p]=n.useState(""),[S,m]=n.useState(0),[F,D]=n.useState(""),[_,f]=n.useState(),[G,B]=n.useState(),[j,R]=n.useState(),[V,U]=n.useState(),[o,M]=n.useState(),[k,P]=n.useState(!1),[E,O]=n.useState(!1),[r,C]=n.useState(!1),[W,I]=n.useState(!1),[Q,$]=n.useState(!1),[X,te]=n.useState(!1),[Z,se]=n.useState(!1),[oe,ie]=n.useState(!0),[ne,de]=n.useState(!1),[ce,xe]=n.useState(null),pe=we({harvestingToggleStatus:T(),roadWidthToggleStatus:T(),propertyTypeToggleStatus:T(),plotAreaToggleStatus:T(),mobileTowerToggleStatus:T(),hoardingToggleStatus:T(),floorToggleStatus:T(),isWaterHarvesting:u().when("harvestingToggleStatus",{is:!0,then:u().required("Field is required")}),rwhDateFrom:u().when("harvestingToggleStatus",{is:!0,then:u().required("Field is required")}),roadType:u().when("roadWidthToggleStatus",{is:!0,then:u().required("Field is required")}),propertyType:u().when("propertyTypeToggleStatus",{is:!0,then:u().required("Field is required")}),areaOfPlot:u().when("plotAreaToggleStatus",{is:!0,then:u().required("Field is required")}),isMobileTower:u().when("mobileTowerToggleStatus",{is:!0,then:u().required("Field is required")}),isHoarding:u().when("hoardingToggleStatus",{is:!0,then:u().required("Field is required")}),objEvidenceDoc:Se().required("Evidence document is required")}),l=ee({initialValues:{harvestingToggleStatus:!1,roadWidthToggleStatus:!1,propertyTypeToggleStatus:!1,plotAreaToggleStatus:!1,mobileTowerToggleStatus:!1,hoardingToggleStatus:!1,floorToggleStatus:!1,propId:b,isWaterHarvesting:o!=null&&o.is_water_harvesting?1:0,rwhDateFrom:o==null?void 0:o.rwh_date_from,roadType:o==null?void 0:o.road_width,propertyType:o==null?void 0:o.prop_type_mstr_id,areaOfPlot:o==null?void 0:o.area_of_plot,isMobileTower:o!=null&&o.is_mobile_tower?1:0,mobileArea:o==null?void 0:o.tower_area,mobileDate:o==null?void 0:o.tower_installation_date,isHoarding:o!=null&&o.is_hoarding_board?1:0,hoardingArea:o==null?void 0:o.hoarding_area,hoardingDate:o==null?void 0:o.hoarding_installation_date,objEvidenceDoc:"",objRemarks:"",floor:[]},onSubmit:t=>{if(!Te(h))return l.setFieldValue("objEvidenceDoc","").then(()=>{z(!0,"Check your file size")}),!0;be(t)},validationSchema:pe}),me=t=>{t.target.name=="objFormDoc"&&(t.target.files[0],D(t.target.files[0])),t.target.name=="objEvidenceDoc"&&(t.target.files[0],p(t.target.files[0]))},ue=t=>{ve.post(w,{ulbId:t},Y()).then(i=>{var d,a,c,N;f((a=(d=i==null?void 0:i.data)==null?void 0:d.data)==null?void 0:a.property_type),B((N=(c=i==null?void 0:i.data)==null?void 0:c.data)==null?void 0:N.road_type)}).catch(i=>{})};n.useEffect(()=>{x(!0),setTimeout(()=>{x(!1)},1e4),J.post(g,{propertyId:b},Y()).then(t=>{var i,d,a,c,N,ae;M((i=t==null?void 0:t.data)==null?void 0:i.data),U((a=(d=t==null?void 0:t.data)==null?void 0:d.data)==null?void 0:a.floors),m(S+1),x(!1),ie((c=t==null?void 0:t.data)==null?void 0:c.status),ue((ae=(N=t==null?void 0:t.data)==null?void 0:N.data)==null?void 0:ae.ulb_id)}).catch(t=>{L("Something went wrong !!"),x(!1)})},[]);const ge=t=>{R(t)};n.useEffect(()=>{l.setFieldValue("floor",j)},[j]),n.useEffect(()=>{J.get(A,Y()).then(t=>{}).catch(t=>{})},[]);const be=t=>{let i=[];if(k&&(i.push({id:2,value:t==null?void 0:t.isWaterHarvesting}),i.push({id:8,value:t==null?void 0:t.rwhDateFrom})),E&&i.push({id:3,value:t==null?void 0:t.roadType}),r&&i.push({id:4,value:t==null?void 0:t.propertyType}),W&&i.push({id:5,value:t==null?void 0:t.areaOfPlot}),(i==null?void 0:i.length)==0&&!Z){s==null||s.toastFun("You have not selected any type for objection !!!","info");return}t==null||t.isWaterHarvesting,t==null||t.rwhDateFrom,t==null||t.roadType,t==null||t.propertyType,t==null||t.areaOfPlot,t==null||t.isMobileTower,t==null||t.isHoarding,setTimeout(()=>{x(!1)},1e4);let d=new FormData;d.append("propId",b),d.append("ulbId",o==null?void 0:o.ulb_id),d.append("objectionFor","Assessment Error"),h!=""&&d.append("document",h),h!=""&&d.append("docCode","OBJECTION_EVIDENCE_DOC"),(i==null?void 0:i.length)>0&&(i==null||i.forEach((a,c)=>{d.append(`assessmentData[${c}][id]`,a==null?void 0:a.id),d.append(`assessmentData[${c}][value]`,a==null?void 0:a.value)})),Z&&(j==null||j.forEach((a,c)=>{d.append(`floorData[${c}][floorNo]`,a==null?void 0:a.floorNo),d.append(`floorData[${c}][buildupArea]`,a==null?void 0:a.buildupArea),d.append(`floorData[${c}][constructionType]`,a==null?void 0:a.constructionType),d.append(`floorData[${c}][occupancyType]`,a==null?void 0:a.occupancyType),d.append(`floorData[${c}][propFloorId]`,a==null?void 0:a.propFloorId),d.append(`floorData[${c}][usageType]`,a==null?void 0:a.usageType)})),J.post(v,d,Pe()).then(a=>{var c,N;((c=a==null?void 0:a.data)==null?void 0:c.status)==!0?(L.success("Assessment Objection Applied Successfully..."),s.submitForm((N=a==null?void 0:a.data)==null?void 0:N.data)):z(!0,"Error occurred in submitting objection application. Please try again later."),x(!1)}).catch(a=>{z(!0,"Error occurred in submitting objection application. Please try again later."),x(!1)})},he=t=>{let i=t.target.name,d=t.target.checked,a=t.target.value;i==="harvestingToggleStatus"&&P(d===!0),i==="roadWidthToggleStatus"&&O(d===!0),i==="propertyTypeToggleStatus"&&C(d===!0),i==="plotAreaToggleStatus"&&I(d===!0),i==="floorToggleStatus"&&se(d===!0),i==="hoardingToggleStatus"&&te(d===!0),i==="mobileTowerToggleStatus"&&$(d===!0),i=="builtupArea"&&l.setFieldValue("builtupArea",Fe(a,l.values.builtupArea,20))},le=()=>{s.closePopUp()},z=(t,i)=>{xe(i),de(t)};return e.jsxs(e.Fragment,{children:[ne&&e.jsx(Oe,{activateBottomErrorCard:z,errorTitle:ce}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-500 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-xs poppins 2xl:text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-extrabold text-[30px]",children:e.jsx(Ee,{})}),e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-lg",children:"Assessment Objection"})]})}),e.jsx("div",{className:"poppins my-2 2xl:font-base text-sm poppins",children:"Citizens are able to file objections to assessments using this objection form in accordance with Section 167 of the Jharkhand Municipal Act 2011. The objections that can be filed include the following:"}),y&&e.jsx(_e,{}),oe&&!y&&e.jsx("div",{className:" px-4 w-full md:py-6 rounded-lg shadow-lg bg-white mt-6 ",children:e.jsx("form",{onSubmit:l.handleSubmit,onChange:he,children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 h-max",children:[e.jsx(fe,{className:"col-span-4 grid grid-cols-4 h-max",children:e.jsxs("div",{className:"col-span-4 grid grid-cols-4 gap-2",children:[e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsx("label",{className:" text-gray-800 pr-2",children:e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Rain Water Harvesting"})}),e.jsx(H,{control:e.jsx(q,{...l.getFieldProps("harvestingToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${k?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Rainwater Harvesting"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-serif 2xl text-xs poppins:2xl:text-base text-sm poppins font-semibold",children:o!=null&&o.is_water_harvesting?e.jsx(e.Fragment,{children:"Yes"}):e.jsx(e.Fragment,{children:"No"})})]}),(o==null?void 0:o.isWaterHarvesting)&&e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment (Construction Date)"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.rwh_date_from})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsxs("select",{...l.getFieldProps("isWaterHarvesting"),value:l.values.isWaterHarvesting,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"0",children:"No"}),e.jsx("option",{value:"1",children:"Yes"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.isWaterHarvesting&&l.errors.isWaterHarvesting?l.errors.isWaterHarvesting:null})]}),l.values.isWaterHarvesting=="1"&&e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Appicant (Construction Date)"]}),e.jsx("input",{...l.getFieldProps("rwhDateFrom"),value:l.values.rwhDateFrom,type:"date",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.rwhDateFrom&&l.errors.rwhDateFrom?l.errors.rwhDateFrom:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsx("label",{className:" text-gray-800 pr-2",children:e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Road Width"})}),e.jsx(H,{control:e.jsx(q,{...l.getFieldProps("roadWidthToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${E?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Objection On: Road Width (in Ft.)"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-serif 2xl text-xs poppins:2xl:text-base text-sm poppins font-semibold",children:K(o==null?void 0:o.road_width)})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 2xl:text-sm text-xs poppins font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsx("input",{...l.getFieldProps("roadType"),value:l.values.roadType,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.roadType&&l.errors.roadType?l.errors.roadType:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsx("label",{className:" text-gray-800 pr-2",children:e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Property Type"})}),e.jsx(H,{control:e.jsx(q,{...l.getFieldProps("propertyTypeToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${r?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Objection On: Property Type"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-serif 2xl text-xs poppins:2xl:text-base text-sm poppins font-semibold",children:K(o==null?void 0:o.property_type)})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 2xl:text-sm text-xs poppins font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsxs("select",{...l.getFieldProps("propertyType"),value:l.values.propertyType,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{disabled:!0,value:"",children:"--select--"}),_==null?void 0:_.map(t=>e.jsx(e.Fragment,{children:e.jsx("option",{value:t==null?void 0:t.id,children:t==null?void 0:t.property_type})}))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.propertyType&&l.errors.propertyType?l.errors.propertyType:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsx("label",{className:" text-gray-800 pr-2",children:e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Area of Plot"})}),e.jsx(H,{control:e.jsx(q,{...l.getFieldProps("plotAreaToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${W?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Objection On: Area of plot (in Dismil)"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-serif 2xl text-xs poppins:2xl:text-base text-sm poppins font-semibold",children:K(o==null?void 0:o.area_of_plot)})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 2xl:text-sm text-xs poppins font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsx("input",{...l.getFieldProps("areaOfPlot"),type:"number",value:l.values.areaOfPlot,className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.areaOfPlot&&l.errors.areaOfPlot?l.errors.areaOfPlot:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsx("label",{className:" text-gray-800 pr-2",children:e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Floor Detail"})}),e.jsx(H,{control:e.jsx(q,{...l.getFieldProps("floorToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${Z?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Objection On: Floor Details"})}),e.jsx(We,{floor:V,getFloorData:ge,ulb:o==null?void 0:o.ulb_id})]})]})}),e.jsxs("div",{className:"col-span-4 grid grid-cols-1 md:grid-cols-4 h-max mt-10 border",children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-green-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins font-semibold poppins",children:"Documents"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 md:px-4",onChange:l.handleChange,children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:2xl:text-sm text-xs poppins text-xs font-semibold poppins",children:[e.jsx("small",{className:"block mt-1 2xl:text-sm text-xs poppins font-semibold text-red-600 inline ",children:"*"}),"Evidence Document"]}),e.jsx("input",{...l.getFieldProps("objEvidenceDoc"),onChange:me,accept:".pdf,.jpg,.jpeg",type:"file",className:"form-control block w-full px-3 py-1 text-xs poppins font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.objEvidenceDoc&&l.errors.objEvidenceDoc?l.errors.objEvidenceDoc:null})]})]}),e.jsxs("div",{className:"col-span-4 flex flex-row flex-wrap justify-between items-center w-[full] h-max mt-4",children:[e.jsx("div",{onClick:le,className:"cursor-pointer px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out poppins",children:"Close"}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:" poppins px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-green-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:"Submit"})})]})]})})}),!oe&&e.jsx(e.Fragment,{children:e.jsx(ke,{title:"Oops !! No Assessment Details Found !!",location:le})})]})}function Ke(s){n.useState(1);const[g,v]=n.useState(!1),[A,w]=n.useState({}),[b,y]=n.useState(""),x=(m,F)=>{L.dismiss(),L[F](m)},h=()=>{v(!0)},p=m=>{s.submitForm(m)},S=(m,F)=>{w({...A,[m]:F})};return b=="success"?e.jsx(e.Fragment,{children:" Done"}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"relative",children:e.jsx(Ie,{collectFormDataFun:S,submitFun:h,toastFun:x,id:s==null?void 0:s.id,closePopUp:s==null?void 0:s.closePopUp,submitForm:p})}),g&&e.jsx("div",{onClick:()=>y("success"),className:"flex items-center justify-center",children:e.jsxs("button",{type:"submit",className:"absolute bottom-40 mx-auto px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:["Submit Form ",e.jsx(Ae,{className:"inline text-xl"})]})})]})}export{Ke as default};