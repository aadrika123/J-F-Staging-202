import{j as a}from"./index-c836822b.js";import{b as p}from"./router-b87f8164.js";import{A as n}from"./ApiList-6197af4c.js";import{T as A}from"./index-f0dfb266.js";import{u as E}from"./useSetTitle-c49d0ae0.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-78b8a4fc.js";import"./tailwind-64fa9e48.js";import"./index.esm-913f3050.js";import"./index.esm-09039267.js";import"./axios-096c69c8.js";import"./iconBase-60af3679.js";function q(){var t,r,s;E("E-service Master ");const[e,m]=p.useState({}),[i,o]=p.useState([]),{api_getEserviceApiList:c,api_PostEserviceApi:v,api_getEserviceApiById:l,api_updateEserviceApi:u,api_deleteEserviceApi:d}=n();return a.jsx("div",{children:a.jsx(A,{getIdByKey:"id",title:"E-service Master",setEditData:m,getById:l,createApi:v,deleteApi:d,editApi:u,formData:[{value:((t=e==null?void 0:e.data)==null?void 0:t.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((r=e==null?void 0:e.data)==null?void 0:r.service)||"",isRequired:!0,type:"text",label:"Service Name",name:"service",isLabel:!0},{value:((s=e==null?void 0:e.data)==null?void 0:s.service_link)||"",isRequired:!0,type:"text",label:"Service Link",name:"serviceLink",isLabel:!0}],listApi:c,setListData:o,HEAD:["Service Name","Service Link","Status","Edit","Delete"],fields:["service","service_link"],data:i==null?void 0:i.data})})}export{q as default};