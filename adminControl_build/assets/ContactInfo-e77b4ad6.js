import{j as p}from"./index-c836822b.js";import{b as l}from"./router-b87f8164.js";import{A}from"./ApiList-6197af4c.js";import{T as v}from"./index-f0dfb266.js";import{u as y}from"./useSetTitle-c49d0ae0.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-78b8a4fc.js";import"./tailwind-64fa9e48.js";import"./index.esm-913f3050.js";import"./index.esm-09039267.js";import"./axios-096c69c8.js";import"./iconBase-60af3679.js";function F(){var a,i,r,o,s,m;y("Contact Master");const[e,n]=l.useState({}),[t,u]=l.useState([]),{api_getContactInfoApiList:d,api_PostContactInfoApi:f,api_getContactInfoApiById:b,api_updateContactInfoApi:c,api_deleteContactInfoApi:x}=A();return p.jsx("div",{children:p.jsx(v,{getIdByKey:"id",title:"Contact Master",setEditData:n,getById:b,createApi:f,deleteApi:x,editApi:c,formData:[{value:((a=e==null?void 0:e.data)==null?void 0:a.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((i=e==null?void 0:e.data)==null?void 0:i.department_name)||"",isRequired:!0,type:"text",label:"Department Name",name:"departnameName",isLabel:!0},{value:((r=e==null?void 0:e.data)==null?void 0:r.address)||"",isRequired:!0,type:"text",label:"Service Link",name:"address",isLabel:!0},{value:((o=e==null?void 0:e.data)==null?void 0:o.mobile_no)||"",isRequired:!0,type:"text",label:"Mobile No.",name:"mobile",isLabel:!0},{value:((s=e==null?void 0:e.data)==null?void 0:s.email)||"",isRequired:!0,type:"text",label:"Email",name:"email",isLabel:!0},{value:((m=e==null?void 0:e.data)==null?void 0:m.fax)||"",isRequired:!0,type:"text",label:"Fax",name:"fax",isLabel:!0}],listApi:d,setListData:u,HEAD:["Department Name","Address","Mobile No","Email","Fax","Status","Edit","Delete"],fields:["department_name","address","mobile_no","email","fax"],data:t==null?void 0:t.data})})}export{F as default};