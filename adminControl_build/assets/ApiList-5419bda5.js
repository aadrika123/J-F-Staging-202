import{j as t,r as l}from"./index-860061e9.js";import{B as p}from"./PowerupFunctions-880a8832.js";function u(e){return t.jsx(t.Fragment,{children:t.jsxs("span",{className:(e.activeStatus?"bg-ltcolor  rounded-md text-white font-semibold shadow-lg":" text-gray-500 border border-gray-500 rounded-md")+" cursor-pointer flex items-center py-1 px-2 text-base text whitespace-nowrap",children:[t.jsxs("svg",{className:(e.activeStatus?"text-white font-semibold":" text-gray-500")+" w-6 h-6 transition duration-75  group-hover:text-gray-900 ",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}),t.jsx("path",{d:"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"})]}),t.jsxs("span",{className:"sm:ml-3 text-xs sm:text-sm",children:[e.title," "]})]})})}const o="/assets/user-b1a2f466.jpg";function d(e){return t.jsx(t.Fragment,{children:t.jsxs("div",{className:(e.activeCandidateStatus&&"mb-2")+" flex  py-2 relative mt-3",children:[e.activeCandidateStatus&&t.jsx("div",{className:"absolute -bottom-1 font-semibold left-1 bg-sky-500 text-gray-100 rounded-lg px-1 py-0 shadow-xl",style:{fontSize:"10px"},children:"Active"}),t.jsx("div",{className:"flex-initial pl-1",children:t.jsx("img",{className:"w-8 rounded-full",src:o,alt:""})}),t.jsxs("div",{className:"flex-initial pl-2 text-sm",children:[t.jsx("div",{className:"text-black",children:e.name}),t.jsx("div",{className:"text-xs text-gray-400",children:e.designation})]})]})})}function v(e){var s;const[a,r]=l.useState(0);console.log("can transferd from index",e.workflowCandidates);const n=i=>{r(i),e.fun(i)};return t.jsx(t.Fragment,{children:t.jsxs("aside",{className:"w-full overflow-auto",children:[t.jsx("div",{className:" rounded flex flex-row sm:flex-row space-x-4 py-2 pl-10 px-2 items-center",children:e.tabs.map(i=>t.jsx("div",{onClick:()=>n(i.tabIndex),children:t.jsx(u,{activeStatus:a==i.tabIndex,title:i.title})}))}),(e==null?void 0:e.candidateListStatus)&&t.jsx("div",{className:"shadow-xl bg-sky-100 pt-4  h-40 sm:h-96 overflow-y-scroll hidden",children:(s=e==null?void 0:e.workflowCandidates)==null?void 0:s.data.map(i=>t.jsxs(t.Fragment,{children:[t.jsx(d,{designation:i.user_id,name:i.role_name}),t.jsx("hr",{})]}))})]})})}const m="http://203.129.217.246:8005";function $(){let e=p,a=m;return{api_login:`${e}/api/login`,api_getNotification:`${e}/api/get-user-notifications`,api_getDashboard:`${e}/`,api_getFreeMenuList:`${e}/api/menu/by-module`,api_getUlbList:`${e}/api/get-all-ulb`,api_getWardListByULB:`${e}/api/workflow/getWardByUlb`,api_getFinancialYearList:`${e}/api/property/reports/list-fy`,api_getDistrictList:`${e}/api/list-district`,api_getUlbWiseCollection:`${e}/api/dashboard/state/ulb-wise-collection`,api_getDcbMonthly:`${e}/api/dashboard/state/property/DCB`,api_getOnlinePaymentCount:`${e}/api/dashboard/state/count-online-payment`,api_getPercentageWiseModuleCollection:`${e}/api/dashboard/state/collection-percentage`,api_getUlbDataByDistrict:`${e}/api/dashboard/state/district-wise-data`,api_getOnlineUsers:`${e}/`,api_checkHeartBeat:`${e}/api/heartbeat`,api_logout:`${e}/api/logout`,api_getHeatMapDataByWard:`${e}/api/property/getpropLatLong`,api_wardByUlb:`${e}/api/workflow/getWardByUlb`,api_getTcByWard:`${e}/api/workflow/ward-user/list-tc`,ulbListApi:`${e}/api/get-all-ulb`,api_getRoleList:`${e}/api/crud/roles/get-all-roles`,api_postRole:`${e}/api/crud/roles/save-role`,api_deleteRole:`${e}/api/crud/roles/delete-role`,api_editRole:`${e}/api/crud/roles/edit-role`,api_getUserList:`${e}/api/get-all-users`,api_postUser:`${e}/api/authorised-register`,getMenuRole:`${a}/api/user-managment/v1/crud/menu-role/list`,api_PostMenuRole:`${a}/api/user-managment/v1/crud/menu-role/save`,api_deleteMenuRole:`${a}/api/user-managment/v1/crud/menu-role/delete`,api_updateMenuRole:`${a}/api/user-managment/v1/crud/menu-role/edit`,api_getMenuListByMenuRoleId:`${a}/api/user-managment/v1/crud/menu-role/menu-list`,api_updateMenuRoleMapping:`${a}/api/user-managment/v1/crud/menu-role-map/save`,getApiRole:`${a}/api/user-managment/v1/crud/api-role/list`,api_PostApiRole:`${a}/api/user-managment/v1/crud/api-role/save`,api_deleteApiRole:`${a}/api/user-managment/v1/crud/api-role/delete`,api_updateApiRole:`${a}/api/user-managment/v1/crud/api-role/edit`,api_getApiListByApiRoleId:`${a}/api/user-managment/v1/crud/api-role/api-list`,api_updateApiRoleMapping:`${a}/api/user-managment/v1/crud/api-role-map/save`,getWorkflowRole:`${a}/api/user-managment/v1/crud/workflow-role/list`,api_PostWorkflowRole:`${a}/api/user-managment/v1/crud/workflow-role/save`,api_deleteWorkflowRole:`${a}/api/user-managment/v1/crud/workflow-role/delete`,api_updateWorkflowRole:`${a}/api/user-managment/v1/crud/workflow-role/edit  `,api_getMenuList:`${a}/api/user-managment/v1/crud/menu/list`,api_PostMenu:`${a}/api/user-managment/v1/crud/menu/save`,api_deleteMenu:`${a}/api/user-managment/v1/crud/menu/delete`,api_updateMenu:`${a}/api/user-managment/v1/crud/menu/edit`,api_getMenuById:`${a}/api/user-managment/v1/crud/menu/get`,api_getApiList:`${a}/api/user-managment/v1/crud/api-master/list`,api_PostApi:`${a}/api/user-managment/v1/crud/api-master/save`,api_deleteApi:`${a}/api/user-managment/v1/crud/api-master/delete`,api_updateApi:`${a}/api/user-managment/v1/crud/api-master/edit`,api_getApiById:`${a}/api/user-managment/v1/crud/api-master/get`,api_getUserList:`${a}/api/user-managment/v1/crud/user/list`,api_PostUser:`${a}/api/user-managment/v1/crud/user/create`,api_EnalbeDisableUser:`${a}/api/user-managment/v1/crud/user/delete`,api_updateUser:`${a}/api/user-managment/v1/crud/user/update`,api_getUserById:`${a}/api/user-managment/v1/crud/user/get`,api_getModuleList:`${e}/api/user-managment/v1/crud/module/list`,api_getWorkflowByModule:`${e}/api/user-managment/v1/crud/workflow-by-module`,api_getParentMenuList:`${e}/api/user-managment/v1/crud/menu/list-parent-serial`,api_getApiCategory:`${e}/api/user-managment/v1/api-category`,api_getApiDeveloperList:`${e}/api/user-managment/v1/developer-list`,api_getMenuRolesByUser:`${a}/api/user-managment/v1/crud/menu-role-user/by-user`,api_getApiRolesByUser:`${a}/api/user-managment/v1/crud/api-role-user/by-user`,api_getWorkflowRolesByUser:`${a}/api/user-managment/v1/crud/workflow-role-user/by-user`,api_getUserTypeList:`${a}/api/user-managment/v1/crud/get/user-type`,api_postMenuRoleUserMapping:`${a}/api/user-managment/v1/crud/menu-role-user/save`,api_postApiRoleUserMapping:`${a}/api/user-managment/v1/crud/api-role-user/save`,api_postWorkflowRoleUserMapping:`${a}/api/user-managment/v1/crud/workflow-role-user/save`,api_postWardUserMapping:`${a}/api/user-managment/v1/crud/ward-user/save`,api_getWardListByUser:`${a}/api/user-managment/v1/crud/ward-user/by-user`}}export{$ as A,v as M};