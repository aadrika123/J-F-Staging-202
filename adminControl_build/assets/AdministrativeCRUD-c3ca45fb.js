import{j as l}from"./index-c836822b.js";import{b as p}from"./router-b87f8164.js";import{A as x}from"./ApiList-6197af4c.js";import{T as y}from"./index-f0dfb266.js";import{u as L}from"./useSetTitle-c49d0ae0.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-78b8a4fc.js";import"./tailwind-64fa9e48.js";import"./index.esm-913f3050.js";import"./index.esm-09039267.js";import"./axios-096c69c8.js";import"./iconBase-60af3679.js";function M(){var t,a,s,r,m,n,d;L("Administrative Master");const[e,u]=p.useState({}),[i,o]=p.useState([]),{api_getAdministrativeApiList:A,api_PostAdministrativeApi:v,api_getAdministrativeApiById:b,api_updateAdministrativeApi:g,api_deleteAdministrativeApi:f}=x();return l.jsx("div",{children:l.jsx(y,{getIdByKey:"id",title:"Administrative Master ",setEditData:u,getById:b,createApi:v,deleteApi:f,editApi:g,formData:[{value:((t=e==null?void 0:e.data)==null?void 0:t.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((a=e==null?void 0:e.data)==null?void 0:a.name)||"",isRequired:!0,type:"text",label:"Administrative Name",name:"Name",isLabel:!0},{value:((s=e==null?void 0:e.data)==null?void 0:s.designation)||"",isRequired:!0,type:"text",label:"Designation",name:"designation",isLabel:!0},{value:((r=e==null?void 0:e.data)==null?void 0:r.image_url)||"",isRequired:!0,type:"file",label:"Administrative File",name:"Image",isLabel:!0},{value:((m=e==null?void 0:e.data)==null?void 0:m.address)||"",isRequired:!0,type:"text",label:"Address",name:"address",isLabel:!0},{value:((n=e==null?void 0:e.data)==null?void 0:n.phone)||"",isRequired:!0,type:"text",label:"Phone",name:"phone",isLabel:!0},{value:((d=e==null?void 0:e.data)==null?void 0:d.email)||"",isRequired:!0,type:"text",label:"Email",name:"email",isLabel:!0}],listApi:A,setListData:o,HEAD:["Administrative Name","Designation","File","Address","Phone","Email","Status","Edit","Action"],fields:["name","designation","image_url","address","phone","email"],data:i==null?void 0:i.data})})}export{M as default};