import{j as i}from"./index-c836822b.js";import{b as a}from"./router-b87f8164.js";import{A as n}from"./ApiList-6197af4c.js";import{T as A}from"./index-f0dfb266.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-78b8a4fc.js";import"./tailwind-64fa9e48.js";import"./index.esm-913f3050.js";import"./index.esm-09039267.js";import"./axios-096c69c8.js";import"./iconBase-60af3679.js";function B(){var p,r;const[t,o]=a.useState({}),[e,s]=a.useState([]),{api_getWaterTypeApiList:m,api_PostWaterTypeApi:d,api_getWaterTypeById:y,api_updateWaterTypeApi:u,api_deleteWaterTypeApi:l}=n();return i.jsx("div",{children:i.jsx(A,{getIdByKey:"id",title:"Water Master ",setEditData:o,getById:y,createApi:d,editApi:u,deleteApi:l,formData:[{value:((p=t==null?void 0:t.data)==null?void 0:p.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((r=t==null?void 0:t.data)==null?void 0:r.property_type)||"",isRequired:!0,type:"text",label:"Property Type",name:"propertyType",isLabel:!0}],listApi:m,setListData:s,HEAD:["Property Type ","Status","Edit","Action"],fields:["property_type"],data:e==null?void 0:e.data})})}export{B as default};