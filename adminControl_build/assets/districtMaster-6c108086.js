import{j as d}from"./index-c836822b.js";import{b as m}from"./router-b87f8164.js";import{A as _}from"./ApiList-6197af4c.js";import{T as f}from"./index-f0dfb266.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-78b8a4fc.js";import"./tailwind-64fa9e48.js";import"./index.esm-913f3050.js";import"./index.esm-09039267.js";import"./axios-096c69c8.js";import"./iconBase-60af3679.js";function C(){var i,r,s,a,p;const[t,o]=m.useState({}),[e,l]=m.useState([]),{api_getDistrictApiList:u,api_PostDistrictApi:c,api_getDistrictApiById:n,api_updateDistrictApi:b,api_deleteDistrictApi:A}=_();return d.jsx("div",{children:d.jsx(f,{getIdByKey:"id",title:"District Master",setEditData:o,getById:n,createApi:c,editApi:b,deleteApi:A,formData:[{value:((i=t==null?void 0:t.data)==null?void 0:i.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((r=t==null?void 0:t.data)==null?void 0:r.district_code)||"",isRequired:!0,type:"number",label:"District Code",name:"districtCode",isLabel:!0},{value:((s=t==null?void 0:t.data)==null?void 0:s.district_name)||"",isRequired:!0,type:"text",label:"District Name",name:"districtName",isLabel:!0},{value:((a=t==null?void 0:t.data)==null?void 0:a.label)||"",isRequired:!0,type:"text",label:"Label",name:"label",isLabel:!0},{value:((p=t==null?void 0:t.data)==null?void 0:p.state_id)||"",isRequired:!0,type:"number",label:"State ID",name:"stateId",isLabel:!0}],listApi:u,setListData:l,HEAD:["District Code ","District Name","Status","Edit","Action",""],fields:["district_code","district_name"],data:e==null?void 0:e.data})})}export{C as default};