import{j as o}from"./index-c836822b.js";import{b as s}from"./router-b87f8164.js";import{A as c}from"./ApiList-6197af4c.js";import{T as R}from"./index-f0dfb266.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-78b8a4fc.js";import"./tailwind-64fa9e48.js";import"./index.esm-913f3050.js";import"./index.esm-09039267.js";import"./axios-096c69c8.js";import"./iconBase-60af3679.js";function C(){var i,a,p,r;const[e,d]=s.useState({}),[t,n]=s.useState([]),{api_getBuildingRentalTypeApiList:l,api_PostBuildingRentalTypeApi:u,api_getBuildingRentalTypeApiById:m,api_updateBuildingRentalTypeApi:y,api_deleteBuildingRentalTypeApi:_}=c();return o.jsx("div",{children:o.jsx(R,{isCreate:!1,action:!1,getIdByKey:"id",title:"Building Rental Rate",setEditData:d,getById:m,createApi:u,editApi:y,deleteApi:_,formData:[{value:((i=e==null?void 0:e.data)==null?void 0:i.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((a=e==null?void 0:e.data)==null?void 0:a.prop_road_type_id)||"",isRequired:!0,type:"text",label:"Road Type Id",name:"prop_road_type_id",isLabel:!0},{value:((p=e==null?void 0:e.data)==null?void 0:p.construction_types_id)||"",isRequired:!0,type:"text",label:"Construction Type Id",name:"construction_types_id",isLabel:!0},{value:((r=e==null?void 0:e.data)==null?void 0:r.rate)||"",isRequired:!0,type:"text",label:"Rate",name:"rate",isLabel:!0}],listApi:l,setListData:n,HEAD:["Road Type ID","Construction Type ID","Rate","Status",""],fields:["prop_road_type_id","construction_types_id","rate"],data:t==null?void 0:t.data})})}export{C as default};