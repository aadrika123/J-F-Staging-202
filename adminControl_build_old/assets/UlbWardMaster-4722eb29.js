import{j as s}from"./index-bd8b5d4a.js";import{b as r}from"./router-b87f8164.js";import{A as p}from"./ApiList-69c725a3.js";import{T as u}from"./index-e78e88a5.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-4ed27c1c.js";import"./tailwind-64fa9e48.js";import"./axios-096c69c8.js";function v(){var a,i;const[t,m]=r.useState({}),[e,o]=r.useState([]),{api_getUlbWardList:l}=p();return s.jsx("div",{children:s.jsx(u,{getIdByKey:"id",title:"Ulb Ward Master",setEditData:m,formData:[{value:((a=t==null?void 0:t.data)==null?void 0:a.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((i=t==null?void 0:t.data)==null?void 0:i.ulb_name)||"",isRequired:!0,type:"text",label:"Ulb Name",name:"ulbName",isLabel:!0}],listApi:l,setListData:o,HEAD:["ULB Name ","Status","Edit","Action",""],fields:["ulb_name"],data:e==null?void 0:e.data})})}export{v as default};