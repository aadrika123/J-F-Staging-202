import{N as Y,j as e,I as B,H as W,y as P,b as V,o as Q,F as X,C as k,a1 as Ad,a8 as $,a0 as J,z as Z,B as D,c as ee,d as se,g as b,_ as i,s as O,S as Ud,A as w,r as _,a9 as zd,aa as Hd,a2 as x,a3 as G,a4 as q,a5 as z,a6 as S,L as Rd,t as Yd,w as Vd,K as Qd,k as Xd,P as kd}from"./index-DB3BSQvx.js";import{P as Jd}from"./index-C0f-fUO5.js";import{p as Ld,M as H,a as Zd,b as Dd,c as er,d as sr,e as dr,f as rr,g as ar,h as lr,i as cr,j as nr,k as tr,l as ir,m as or,n as xr}from"./module.config-B4zAVPDx.js";import{g as A}from"./services-KQnp_8oA.js";import{I as Od}from"./info-BVwM52zA.js";import{T as Bd,a as Wd,b as K,c as M,d as $d,e as R}from"./table-BTKmmlcN.js";import{M as hr}from"./move-right-BMtpZ62S.js";/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=Y("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=Y("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=Y("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function fr({commentData:l}){var r,j,n;return e.jsx("div",{children:e.jsxs("div",{className:"max-w-lg mx-auto border px-6 py-2 rounded-lg mb-2",children:[e.jsxs("div",{className:"flex items-center mb-4 space-x-2",children:[e.jsx(B,{src:((r=l==null?void 0:l.userId)==null?void 0:r.fullImgUrl)||Ld,alt:"Student",className:"h-6 w-6 rounded-full"})," ",e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-800 font-semibold",children:((j=l==null?void 0:l.userId)==null?void 0:j.fullName)||""}),e.jsx("div",{className:"text-xs italic text-gray-500",children:`(${(n=l==null?void 0:l.roleId)==null?void 0:n.roleName})`||""}),e.jsx("div",{className:"text-xs text-gray-500",children:W(l==null?void 0:l.timeStamp).format("DD-MM-YYYY hh:mm a")})]})]}),e.jsx("p",{className:"text-sm leading-relaxed mb-6",children:l==null?void 0:l.comment})]})})}const gr=ee().shape({comment:se().required("Write comment")});function mr({setisDialogOpen:l,complaintData:r,actionPermissions:j}){const n=P({}),h=V({resolver:Q(gr)}),N=async o=>{var g,t;let y={complaintId:(t=(g=r==null?void 0:r.data)==null?void 0:g.data)==null?void 0:t._id,comment:o==null?void 0:o.comment};try{const a=await n.mutateAsync({api:b.resolveComplaint,data:y});a.data.success?(i.success(a.data.message),j.refetch(),r==null||r.refetch(),l(!1)):i.error(a.data.message)}catch(a){i.error(A(a))}};return e.jsx(X,{methods:h,onSubmit:h.handleSubmit(N),children:e.jsxs("div",{className:"gap-x-2 gap-y-4 px-10 py-10",children:[e.jsxs("div",{children:[e.jsxs(k,{className:"text-2xl flex items-center justify-between font-bold mb-6",children:[e.jsxs("div",{children:[e.jsx("span",{className:"w-7 h-7 bg-green-600 rounded-full bg-red-5500 text-white inline-flex justify-center items-center mr-2",children:e.jsx(Ad,{className:"inline"})})," Resolve Complaint"]}),e.jsx("div",{children:e.jsx($,{className:"cursor-pointer hover:bg-red-100 rounded-lg inline",onClick:()=>l(!1)})})]}),e.jsxs(J,{className:"opacity-70 flex items-center",children:[e.jsx("div",{children:e.jsx(Od,{size:20,className:"inline mr-1"})}),e.jsx("div",{children:"This comment will be visible to citizen."})]}),e.jsx(Z,{className:"bg-background w-full rounded-md p-4 h-40 border mt-2",name:"comment",placeholder:"Comment"})]}),e.jsx("div",{className:"mt-4",children:e.jsx(D,{isLoading:h.formState.isSubmitting,type:"submit",className:" w-full",children:"Resolve"})})]})})}const br=ee().shape({comment:se().required("Select comment")});function vr({setisDialogOpen:l,complaintData:r,actionPermissions:j}){const n=P({}),h=V({resolver:Q(br)}),N=async o=>{var g,t;let y={complaintId:(t=(g=r==null?void 0:r.data)==null?void 0:g.data)==null?void 0:t._id,comment:o==null?void 0:o.comment};try{const a=await n.mutateAsync({api:b.rejectComplaint,data:y});a.data.success?(i.success(a.data.message),j.refetch(),r==null||r.refetch(),l(!1)):i.error(a.data.message)}catch(a){i.error(A(a))}};return e.jsx(X,{methods:h,onSubmit:h.handleSubmit(N),children:e.jsxs("div",{className:"gap-x-2 gap-y-4 px-10 py-10",children:[e.jsxs("div",{children:[e.jsxs(k,{className:"text-2xl flex items-center justify-between font-bold mb-6",children:[e.jsxs("div",{children:[e.jsx("span",{className:"w-7 h-7 bg-red-600 rounded-full bg-red-5500 text-white inline-flex justify-center items-center mr-2",children:e.jsx($,{})})," Reject Complaint"]}),e.jsx("div",{children:e.jsx($,{className:"cursor-pointer hover:bg-red-100 rounded-lg inline",onClick:()=>l(!1)})})]}),e.jsxs(J,{className:"opacity-70 flex items-center",children:[e.jsx("div",{children:e.jsx(Od,{size:20,className:"inline mr-1"})}),e.jsx("div",{children:"This comment will be visible to citizen."})]}),e.jsx(Z,{className:"bg-background w-full rounded-md p-4 h-40 border mt-2",name:"comment",placeholder:"Comment"})]}),e.jsx("div",{className:"mt-4",children:e.jsx(D,{isLoading:h.formState.isSubmitting,type:"submit",className:" w-full",children:"Reject"})})]})})}function yr({setisDialogOpen:l,complaintData:r}){var N,o,y,g,t;const j=P({}),n=O({api:`${b.getAllWFUserMappingToTransfer}?workflowId=${(o=(N=r==null?void 0:r.data)==null?void 0:N.data)==null?void 0:o.wf_currentWorkflowId}`,key:"getWorkflowMembers",value:[],options:{enabled:!0}}),h=async a=>{var U,p,s;let T={complaintId:(p=(U=r==null?void 0:r.data)==null?void 0:U.data)==null?void 0:p._id,workflowId:null,userId:a};try{const c=await j.mutateAsync({api:(s=b)==null?void 0:s.transferComplaintToUlb,data:T});c.data.success?(i.success(c.data.message),l(!1)):i.error(c.data.message)}catch(c){i.error(A(c))}};return e.jsx("div",{className:"gap-x-2 gap-y-4 px-10 py-10",children:e.jsxs("div",{children:[e.jsxs(k,{className:"text-2xl flex items-center justify-between font-bold mb-6",children:[e.jsx("div",{children:"Transfer to any Members"}),e.jsx("div",{children:e.jsx($,{className:"cursor-pointer hover:bg-red-100 rounded-lg inline",onClick:()=>l(!1)})})]}),n.isLoading?e.jsx("div",{className:"flex h-32 items-center justify-center",children:e.jsx(Ud,{})}):e.jsx(e.Fragment,{children:e.jsxs(Bd,{children:[e.jsx(Wd,{children:e.jsxs(K,{children:[e.jsx(M,{className:"",children:"#"}),e.jsx(M,{className:"",children:"Member"}),e.jsx(M,{className:"",children:"Workflow Role"}),e.jsx(M,{children:"Action"})]})}),e.jsx($d,{children:(t=(g=(y=n==null?void 0:n.data)==null?void 0:y.data)==null?void 0:g.docs)==null?void 0:t.map((a,T)=>e.jsxs(K,{children:[e.jsx(R,{children:T+1}),e.jsx(R,{children:a==null?void 0:a.UserName}),e.jsx(R,{children:a==null?void 0:a.workflowRoleName}),e.jsx(R,{className:"space-x-2",children:e.jsx(w,{name:"bts",type:"button",className:"mr-4",onClick:()=>h(a==null?void 0:a.userId),children:"Transfer"})})]},a._id))})]})})]})})}function pr({setisDialogOpen:l,complaintData:r}){var N,o,y,g,t;const j=P({}),n=O({api:`${(N=b)==null?void 0:N.getAllUlbDirect}?page=1&limit=10000`,key:"getAllUlbDirect",options:{enabled:!0}}),h=async a=>{var T,U,p;try{let s={complaintId:(U=(T=r==null?void 0:r.data)==null?void 0:T.data)==null?void 0:U._id,ulbId:a};const c=await j.mutateAsync({api:(p=b)==null?void 0:p.transferComplaintToUlbSpecific,data:s});c.data.success?(i.success(c.data.message),r.refetch(),l(!1)):i.error(c.data.message)}catch(s){i.error(A(s))}};return e.jsx("div",{className:"gap-x-2 gap-y-4 px-10 py-10 h-[600px] overflow-y-scroll",children:e.jsxs("div",{children:[e.jsxs(k,{className:"text-2xl flex items-center justify-between font-bold mb-6",children:[e.jsxs("div",{children:["Transfer to ULB(",(y=(o=n==null?void 0:n.data)==null?void 0:o.data)==null?void 0:y.length,")"]}),e.jsx("div",{children:e.jsx($,{className:"cursor-pointer hover:bg-red-100 rounded-lg inline",onClick:()=>l(!1)})})]}),n.isLoading?e.jsx("div",{className:"flex h-32 items-center justify-center",children:e.jsx(Ud,{})}):e.jsx(e.Fragment,{children:e.jsxs(Bd,{children:[e.jsx(Wd,{children:e.jsxs(K,{children:[e.jsx(M,{className:"",children:"#"}),e.jsx(M,{className:"",children:"ULB"}),e.jsx(M,{children:"Action"})]})}),e.jsx($d,{children:(t=(g=n==null?void 0:n.data)==null?void 0:g.data)==null?void 0:t.map((a,T)=>e.jsxs(K,{children:[e.jsx(R,{children:T+1}),e.jsx(R,{children:a==null?void 0:a.ulbName}),e.jsx(R,{className:"space-x-2",children:e.jsx(w,{name:"bts",type:"button",className:"mr-4",onClick:()=>h(a==null?void 0:a._id),children:"Transfer"})})]},a._id))})]})})]})})}const wr="https://jharkhandegovernance.com/property/search/fresh/direct/direct",Tr="https://jharkhandegovernance.com/water/waterApplicationSearch",Ir="",Cr="",Er="",_r="",Sr="",Mr="",Rr="",kr="",Ar="",Ur="",Lr="",Or="",Br="",Wr=ee().shape({comment:se().required("Comment is required")});function $r({setsearchLink:l,setsearchLabel:r}){var re,ae,le,ce,ne,te,ie,oe,xe,he,ue,je,Ne,fe,ge,me,be,ve,ye,pe,we,Te,Ie,Ce,Ee,_e,Se,Me,Re,ke,Ae,Ue,Le,Oe,Be,We,$e,Pe,Ke,Fe,Ge,qe,ze,He,Ye,Ve,Qe,Xe,Je,Ze,De,es,ss,ds,rs,as,ls,cs,ns,ts,is,os,xs,hs,us,js,Ns,fs,gs,ms,bs,vs,ys,ps,ws,Ts,Is,Cs,Es,_s,Ss,Ms,Rs,ks,As,Us,Ls,Os,Bs,Ws,$s,Ps,Ks,Fs,Gs,qs,zs,Hs,Ys,Vs,Qs,Xs,Js,Zs,Ds,ed,sd,dd,rd,ad,ld,cd,nd,td;const[j,n]=_.useState(!1),[h,N]=_.useState(0),[o,y]=_.useState(!1),[g,t]=_.useState(!1),a=P({}),p=new URLSearchParams(Xd().search).get("complaintId"),s=O({api:`${b.getComplaintDetailsById}/${p}`,key:"ComplaintDetails",options:{enabled:!0}}),c=O({api:`${b.checkWfActions}/${p}`,key:"actionPermission",options:{enabled:!0}}),F=O({api:`${b.complaintApplicationLog}/${p}`,key:"complaintApplicationLog",options:{enabled:!0}}),L=O({api:`${b.getAllCommentsByComplaintId}/${p}`,key:"getAllComments",options:{enabled:!0}}),de=V({defaultValues:{comment:""},resolver:Q(Wr)}),{handleSubmit:Pd}=de,Kd=async(d,f)=>{var I,C;const m=f.nativeEvent.submitter.name;let u="";m==="comment"&&(u=b.openComment);let v={comment:d.comment,complaintId:(C=(I=s==null?void 0:s.data)==null?void 0:I.data)==null?void 0:C._id};try{const E=await a.mutateAsync({api:u,data:v});E.data.success?(i.success(E.data.message),s==null||s.refetch(),L==null||L.refetch(),c.refetch()):i.error(E.data.message)}catch(E){i.error(A(E))}},Fd=async()=>{kd("Are you sure?","Do you want to move this complaint to your panel",async()=>{var f,m;let d={complaintId:(m=(f=s==null?void 0:s.data)==null?void 0:f.data)==null?void 0:m._id,comment:""};try{const u=await a.mutateAsync({api:b.moveComplaintToMe,data:d});u.data.success?n(!0):i.error(u.data.message)}catch(u){i.error(A(u))}})},Gd=async d=>{kd("Are you sure?",`Do you want to ${d.target.checked?"Escalate":"De-Escalate"} this complaint`,async()=>{var m,u;let f={complaintId:(u=(m=s==null?void 0:s.data)==null?void 0:m.data)==null?void 0:u._id};try{const v=await a.mutateAsync({api:b.escalateAction,data:f});v.data.success?(n(!0),s.refetch()):i.error(v.data.message)}catch(v){i.error(A(v))}})},qd=()=>{var d,f,m,u,v,I,C,E,id,od,xd,hd,ud,jd,Nd,fd,gd,md,bd,vd,yd,pd,wd,Td,Id,Cd,Ed,_d,Sd,Md;((f=(d=s==null?void 0:s.data)==null?void 0:d.data)==null?void 0:f.moduleId)===Zd&&(l(wr),r("Search Property Details")),((u=(m=s==null?void 0:s.data)==null?void 0:m.data)==null?void 0:u.moduleId)===Dd&&(l(Tr),r("Search Water Details")),((I=(v=s==null?void 0:s.data)==null?void 0:v.data)==null?void 0:I.moduleId)===er&&(l(Ir),r("Search Trade Details")),((E=(C=s==null?void 0:s.data)==null?void 0:C.data)==null?void 0:E.moduleId)===sr&&(l(Cr),r("Search Pet Registration Details")),((od=(id=s==null?void 0:s.data)==null?void 0:id.data)==null?void 0:od.moduleId)===H&&(l(Er),r("Search Other Details")),((hd=(xd=s==null?void 0:s.data)==null?void 0:xd.data)==null?void 0:hd.moduleId)===dr&&(l(_r),r("Search Grievance Details")),((jd=(ud=s==null?void 0:s.data)==null?void 0:ud.data)==null?void 0:jd.moduleId)===rr&&(l(Sr),r("Search SWM Details")),((fd=(Nd=s==null?void 0:s.data)==null?void 0:Nd.data)==null?void 0:fd.moduleId)===ar&&(l(Mr),r("Search Water Tanker Details")),((md=(gd=s==null?void 0:s.data)==null?void 0:gd.data)==null?void 0:md.moduleId)===lr&&(l(Rr),r("Search Advertisement Details")),((vd=(bd=s==null?void 0:s.data)==null?void 0:bd.data)==null?void 0:vd.moduleId)===cr&&(l(kr),r("Search Septic Tank Details")),((pd=(yd=s==null?void 0:s.data)==null?void 0:yd.data)==null?void 0:pd.moduleId)===nr&&(l(Ar),r("Search Lodge/Banquet Details")),((Td=(wd=s==null?void 0:s.data)==null?void 0:wd.data)==null?void 0:Td.moduleId)===tr&&(l(Ur),r("Search Marriage Details")),((Cd=(Id=s==null?void 0:s.data)==null?void 0:Id.data)==null?void 0:Cd.moduleId)===ir&&(l(Lr),r("Search Public Transport Details")),((_d=(Ed=s==null?void 0:s.data)==null?void 0:Ed.data)==null?void 0:_d.moduleId)===or&&(l(Or),r("Search Parking Details")),((Md=(Sd=s==null?void 0:s.data)==null?void 0:Sd.data)==null?void 0:Md.moduleId)===xr&&(l(Br),r("Search Rig Details"))};return _.useEffect(()=>{qd()},[s==null?void 0:s.data]),_.useEffect(()=>{setTimeout(()=>{n(!1)},1600)},[j]),e.jsxs("main",{className:"grid flex-1 items-start",children:[j&&e.jsx("div",{style:{zIndex:1001},className:"w-full h-full fixed top-0 left-0 bg-white z-50 flex justify-center items-center",children:e.jsxs("div",{className:"flex flex-col justify-center items-center",children:[e.jsx(zd,{className:"w-24",animationData:Hd,loop:!0}),e.jsx("div",{className:"font-semibold",children:"Complaint Moved successfully."})]})}),e.jsxs("div",{className:"grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2",children:[e.jsx("div",{className:"",children:e.jsx("div",{className:" bg-background",children:e.jsxs("div",{className:"max-w-7xl mx-auto  shadow-lg rounded-lg p-8",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("h1",{className:"text-xl font-bold text-blue-800 mb-6 uppercase",children:["Complaint No : ",(ae=(re=s==null?void 0:s.data)==null?void 0:re.data)==null?void 0:ae.complaintRefNo]}),((ne=(ce=(le=s==null?void 0:s.data)==null?void 0:le.data)==null?void 0:ce.workflow)==null?void 0:ne.workFlowName)&&e.jsxs("h1",{className:"text- font-bold  mb-6 Capitalize",children:[e.jsx("span",{className:"opacity-60",children:"Current Stage : "}),(oe=(ie=(te=s==null?void 0:s.data)==null?void 0:te.data)==null?void 0:ie.workflow)==null?void 0:oe.workFlowName]}),!((ue=(he=(xe=s==null?void 0:s.data)==null?void 0:xe.data)==null?void 0:he.workflow)!=null&&ue.workFlowName)&&e.jsxs("h1",{className:"text- font-bold  mb-6 Capitalize",children:[e.jsx("span",{className:"opacity-60",children:"Current Stage : "}),((Ne=(je=s==null?void 0:s.data)==null?void 0:je.data)==null?void 0:Ne.currentUser)&&`${(me=(ge=(fe=s==null?void 0:s.data)==null?void 0:fe.data)==null?void 0:ge.currentUser)==null?void 0:me.fullName} `,((ve=(be=s==null?void 0:s.data)==null?void 0:be.data)==null?void 0:ve.currentWorkflow)&&`(${(we=(pe=(ye=s==null?void 0:s.data)==null?void 0:ye.data)==null?void 0:pe.currentWorkflow)==null?void 0:we.workFlowName})`,!((Ie=(Te=s==null?void 0:s.data)==null?void 0:Te.data)!=null&&Ie.currentWorkflow)&&!((Ee=(Ce=s==null?void 0:s.data)==null?void 0:Ce.data)!=null&&Ee.currentUser)&&((Se=(_e=s==null?void 0:s.data)==null?void 0:_e.data)==null?void 0:Se.moduleId)===H&&"State GRO",!((Re=(Me=s==null?void 0:s.data)==null?void 0:Me.data)!=null&&Re.currentWorkflow)&&!((Ae=(ke=s==null?void 0:s.data)==null?void 0:ke.data)!=null&&Ae.currentUser)&&((Le=(Ue=s==null?void 0:s.data)==null?void 0:Ue.data)==null?void 0:Le.moduleId)!==H&&"ULB GRO"]}),e.jsx("h1",{className:"text-md font-bold  mb-6 flex items-center",children:e.jsxs("span",{children:["Status -",((Be=(Oe=s==null?void 0:s.data)==null?void 0:Oe.data)==null?void 0:Be.wf_status)===0&&e.jsx(x,{className:"bg-yellow-500 ml-2",children:"Pending"}),(($e=(We=s==null?void 0:s.data)==null?void 0:We.data)==null?void 0:$e.wf_status)===1&&e.jsx(x,{className:"bg-green-500 ml-2",children:"Resolved"}),((Ke=(Pe=s==null?void 0:s.data)==null?void 0:Pe.data)==null?void 0:Ke.wf_status)===2&&e.jsx(x,{className:"bg-red-500 ml-2",children:"Rejected"}),((Ge=(Fe=s==null?void 0:s.data)==null?void 0:Fe.data)==null?void 0:Ge.wf_status)===3&&e.jsx(x,{className:"bg-yellow-500 ml-2",children:"Pending(re-opened)"}),((ze=(qe=s==null?void 0:s.data)==null?void 0:qe.data)==null?void 0:ze.wf_status)===4&&e.jsx(x,{variant:"destructive",children:"Closed"})]})})]}),e.jsxs("p",{className:"text-gray-600 mb-2",children:["Registered on ",W((Ye=(He=s==null?void 0:s.data)==null?void 0:He.data)==null?void 0:Ye.createdAt).format("DD-MM-YYYY")]}),e.jsx("div",{className:"border-b mt-1 border-[#99B37C]"}),e.jsxs("div",{className:"mt-4  grid grid-cols-1 md:grid-cols-3   space-y-4",children:[e.jsxs("div",{className:"flex space-x-4  items-center",children:[e.jsx("div",{className:"font-semibold",children:"Full Name : "}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:(Qe=(Ve=s==null?void 0:s.data)==null?void 0:Ve.data)==null?void 0:Qe.citizenName})," "]})]}),e.jsxs("div",{className:"flex space-x-4  items-center",children:[e.jsx("div",{className:"font-semibold",children:"Mobile No : "}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:(Je=(Xe=s==null?void 0:s.data)==null?void 0:Xe.data)==null?void 0:Je.mobileNo})," "]})]}),e.jsxs("div",{className:"flex space-x-4  items-center",children:[e.jsx("div",{className:"font-semibold",children:"Email : "}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:(De=(Ze=s==null?void 0:s.data)==null?void 0:Ze.data)==null?void 0:De.email})," "]})]}),e.jsxs("div",{className:"flex space-x-4  items-center",children:[e.jsx("div",{className:"font-semibold",children:"ULB : "}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:(ds=(ss=(es=s==null?void 0:s.data)==null?void 0:es.data)==null?void 0:ss.ulb)==null?void 0:ds.ulbName})," "]})]}),e.jsxs("div",{className:"flex space-x-4  items-center",children:[e.jsx("div",{className:"font-semibold",children:"Module : "}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:(ls=(as=(rs=s==null?void 0:s.data)==null?void 0:rs.data)==null?void 0:as.module)==null?void 0:ls.moduleName})," "]})]}),((ns=(cs=s==null?void 0:s.data)==null?void 0:cs.data)==null?void 0:ns.fixedNo)&&e.jsxs("div",{className:"flex space-x-4  items-center",children:[e.jsxs("div",{className:"font-semibold",children:[(is=(ts=s==null?void 0:s.data)==null?void 0:ts.data)==null?void 0:is.fixedNoLabel," : "]}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:(xs=(os=s==null?void 0:s.data)==null?void 0:os.data)==null?void 0:xs.fixedNo})," "]})]}),((us=(hs=s==null?void 0:s.data)==null?void 0:hs.data)==null?void 0:us.tempNo)&&e.jsxs("div",{className:"flex space-x-4  items-center",children:[e.jsxs("div",{className:"font-semibold",children:[(Ns=(js=s==null?void 0:s.data)==null?void 0:js.data)==null?void 0:Ns.tempNoLabel," : "]}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:(gs=(fs=s==null?void 0:s.data)==null?void 0:fs.data)==null?void 0:gs.tempNo})," "]})]}),e.jsxs("div",{className:"flex space-x-4  items-center",children:[e.jsx("div",{className:"font-semibold",children:"Pending From : "}),e.jsxs("div",{children:[e.jsxs("p",{className:"opacity-90",children:[W().diff(W((bs=(ms=s==null?void 0:s.data)==null?void 0:ms.data)==null?void 0:bs.createdAt),"days")," days"]})," "]})]}),e.jsx("div",{className:"col-span-3 border-b my-20 border-[#99B37C]"}),e.jsxs("div",{className:"col-span-2 flex flex-col",children:[e.jsx("div",{className:"font-semibold",children:"Title : "}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:(ys=(vs=s==null?void 0:s.data)==null?void 0:vs.data)==null?void 0:ys.complaintTitle})," "]})]}),e.jsxs("div",{className:"col-span-2 flex flex-col",children:[e.jsx("div",{className:"font-semibold",children:"Description : "}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:(ws=(ps=s==null?void 0:s.data)==null?void 0:ps.data)==null?void 0:ws.complaintDescription})," "]})]}),e.jsxs("div",{className:"col-span-3 flex flex-col",children:[e.jsx("div",{className:"font-semibold",children:"Complaint Document"}),e.jsxs(G,{children:[e.jsx(q,{}),e.jsx(z,{className:"sm:max-w-[500px]",children:e.jsx("div",{className:"py-4",children:e.jsx(B,{src:"/images/slider.png",className:"w-80"})})}),e.jsx(S,{asChild:!0,children:e.jsx("div",{className:"cursor-pointer ",children:e.jsx(B,{src:"/images/slider.png",className:"w-40"})})})]})]})]}),e.jsxs("section",{className:"mt-8",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("h2",{className:"text-xl font-semibold text-blue-800",children:["Complaint Flow History ",e.jsxs("span",{onClick:()=>y(!o),className:"cursor-pointer",children:[!o&&e.jsxs("span",{className:"text-gray-400 text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg ",children:["Show ",e.jsx(jr,{size:15,className:"inline"})]}),o&&e.jsxs("span",{className:"text-gray-400 text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg ",children:["Hide ",e.jsx(ur,{size:15,className:"inline"})]})]})," "]}),((Is=(Ts=c==null?void 0:c.data)==null?void 0:Ts.permission)==null?void 0:Is.canMoveComplaint)&&e.jsx(w,{onClick:Fd,children:"Move Complaint to my Panel"}),((Es=(Cs=c==null?void 0:c.data)==null?void 0:Cs.permission)==null?void 0:Es.canUpdate)&&e.jsx(Rd,{to:`/grievance/dashboard/management-complaint-form?complaintId=${(Ss=(_s=s==null?void 0:s.data)==null?void 0:_s.data)==null?void 0:Ss._id}`,children:e.jsx(w,{children:"Update Details"})})]}),e.jsx("div",{className:"border-b mt-1 border-[#99B37C]"}),o&&e.jsx("div",{className:"flex flex-col space-y-4 mt-4",children:(Rs=(Ms=F==null?void 0:F.data)==null?void 0:Ms.data)==null?void 0:Rs.map((d,f)=>{var m,u,v,I,C;return e.jsxs("div",{className:"flex space-x-4 items-center",children:[e.jsx("div",{children:f+1}),e.jsxs("div",{children:[(d==null?void 0:d.actionStatus)===0&&e.jsx(x,{className:"bg-gray-200 text-dark",children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===1&&e.jsx(x,{className:"bg-green-400 text-white",children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===2&&e.jsx(x,{className:"bg-red-400 text-white",children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===3&&e.jsx(x,{children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===4&&e.jsx(x,{className:"bg-amber-200 text-dark",children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===5&&e.jsx(x,{className:"bg-cyan-200 text-dark",children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===6&&e.jsx(x,{className:"bg-cyan-200 text-dark",children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===7&&e.jsx(x,{className:"bg-cyan-200 text-dark",children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===8&&e.jsx(x,{className:"bg-cyan-200 text-dark",children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===9&&e.jsx(x,{className:"bg-cyan-200 text-dark",children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===10&&e.jsx(x,{className:"bg-cyan-200 text-dark",children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===11&&e.jsx(x,{className:"bg-cyan-200 text-dark",children:d==null?void 0:d.statusText}),(d==null?void 0:d.actionStatus)===12&&e.jsx(x,{className:"bg-cyan-200 text-dark",children:d==null?void 0:d.statusText}),e.jsx("div",{className:"text-xs text-gray-600 font-semibold mt-1",children:W((u=(m=s==null?void 0:s.data)==null?void 0:m.data)==null?void 0:u.createdAt).format("DD-MM-YYYY hh:mm a")})]}),e.jsx(hr,{}),e.jsxs("div",{children:[e.jsxs(G,{children:[e.jsx(q,{}),e.jsx(z,{className:"sm:max-w-[500px]",children:e.jsx("div",{className:"py-4",children:e.jsx(B,{src:(v=d==null?void 0:d.actionBy)==null?void 0:v.fullImgUrl,className:"w-60"})})}),e.jsx(S,{asChild:!0,children:e.jsx("div",{className:"w-10 h-10 rounded-full border overflow-hidden cursor-pointer",children:e.jsx(B,{src:((I=d==null?void 0:d.actionBy)==null?void 0:I.fullImgUrl)||Ld,className:"w-10 cursor-pointer hover:scale-105"})})})]}),e.jsxs("div",{className:"text-xs text-gray-700",children:["Action by  ",e.jsx("span",{className:"font-semibold text-black text-md",children:(d==null?void 0:d.actionByUserId)===null?"Direct Citizen":(C=d==null?void 0:d.actionBy)==null?void 0:C.fullName})]})]})]},`flow${f}`)})})]})]})})}),e.jsx(Yd,{"x-chunk":"dashboard-05-chunk-3",children:e.jsxs(Vd,{className:"grid grid-cols-3 py-10",children:[e.jsx("div",{className:"col-span-2 pr-10",children:e.jsxs(X,{methods:de,onSubmit:Pd(Kd),children:[e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4",children:e.jsx("div",{className:"col-span-4",children:e.jsx(Z,{className:"bg-background border w-full rounded-lg p-4",label:"Comment",name:"comment",placeholder:"Enter comment"})})}),e.jsxs(G,{open:g,children:[e.jsx(q,{}),e.jsx(z,{className:"sm:max-w-[500px]",children:e.jsxs("div",{className:"py-4",children:[h===1&&e.jsx(mr,{setisDialogOpen:t,actionPermissions:c,complaintData:s}),h===2&&e.jsx(vr,{setisDialogOpen:t,actionPermissions:c,complaintData:s}),h===3&&e.jsx(yr,{setisDialogOpen:t,complaintData:s}),h===4&&e.jsx(pr,{setisDialogOpen:t,complaintData:s})]})}),e.jsxs("div",{className:"flex justify-between items-center mt-4 flex-wrap",children:[e.jsxs("div",{className:"mr-10",children:[((As=(ks=s==null?void 0:s.data)==null?void 0:ks.data)==null?void 0:As.wf_status)===1&&e.jsxs(k,{className:"flex items-center mb-4",children:[e.jsx(Ad,{className:"inline text-green-500 mr-2"}),"Complaint Resolved"]}),((Ls=(Us=s==null?void 0:s.data)==null?void 0:Us.data)==null?void 0:Ls.wf_status)===2&&e.jsxs(k,{className:"flex items-center mb-4",children:[e.jsx(Nr,{className:"inline text-red-500 mr-2"}),"Complaint Rejected"]}),e.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[e.jsx(Qd,{checked:(Bs=(Os=s==null?void 0:s.data)==null?void 0:Os.data)==null?void 0:Bs.isEscalated,onChange:d=>Gd(d),className:"cursor-pointer h-5 w-5",type:"checkbox",name:"isTransactionIssue",placeholder:""}),e.jsx(J,{className:"text-amber-700 opacity-80",children:($s=(Ws=s==null?void 0:s.data)==null?void 0:Ws.data)!=null&&$s.isEscalated?"De-Escalate":"Escalate"})]})]}),e.jsxs("div",{className:"flex justify-end",children:[e.jsx("div",{className:"col-span-4",children:e.jsx(D,{variant:"secondary",name:"comment",className:"mr-4",type:"submit",disabled:a.isPending,isLoading:a.isPending,children:"Direct Comment"})}),(((Ks=(Ps=s==null?void 0:s.data)==null?void 0:Ps.data)==null?void 0:Ks.wf_status)===0||((Gs=(Fs=s==null?void 0:s.data)==null?void 0:Fs.data)==null?void 0:Gs.wf_status)===3)&&e.jsxs(e.Fragment,{children:[((zs=(qs=c==null?void 0:c.data)==null?void 0:qs.permission)==null?void 0:zs.isNeededMoreDocuments)&&e.jsx("div",{className:"col-span-4",children:e.jsx(S,{onClick:()=>{t(!0),N(1)},asChild:!0,children:e.jsx(w,{variant:"secondary",name:"bts",className:"mr-4",disabled:a.isPending,children:"Need More Documents"})})}),((Ys=(Hs=c==null?void 0:c.data)==null?void 0:Hs.permission)==null?void 0:Ys.canResolve)&&e.jsx("div",{className:"col-span-4",children:e.jsx(S,{onClick:()=>{t(!0),N(1)},asChild:!0,children:e.jsx(w,{variant:"secondary",name:"bts",className:"mr-4",disabled:a.isPending,children:"Resolve"})})}),((Qs=(Vs=c==null?void 0:c.data)==null?void 0:Vs.permission)==null?void 0:Qs.canReject)&&e.jsx("div",{className:"col-span-4",children:e.jsx(S,{onClick:()=>{t(!0),N(2)},asChild:!0,children:e.jsx(w,{variant:"secondary",name:"reject",className:"mr-4",disabled:a.isPending,children:"Reject"})})}),((Js=(Xs=c==null?void 0:c.data)==null?void 0:Xs.permission)==null?void 0:Js.canTransferToMember)&&e.jsx("div",{className:"col-span-4",children:e.jsx(S,{onClick:()=>{t(!0),N(3)},asChild:!0,children:e.jsx(w,{name:"approve",disabled:a.isPending,className:"mr-4",children:"Transfer to Current Member"})})}),((Ds=(Zs=c==null?void 0:c.data)==null?void 0:Zs.permission)==null?void 0:Ds.canSendToUlb)&&e.jsx("div",{className:"col-span-4",children:e.jsx(S,{onClick:()=>{t(!0),N(4)},asChild:!0,children:e.jsx(w,{name:"approve",disabled:a.isPending,type:"button",className:"mr-4",children:"Transfer to Ulb"})})}),((sd=(ed=c==null?void 0:c.data)==null?void 0:ed.permission)==null?void 0:sd.canTransferToWorkflow)&&e.jsx("div",{className:"col-span-4",children:e.jsx(Rd,{to:`/grievance/dashboard/transfer-complaint?parentId=null&levelSerial=1&complaintId=${(rd=(dd=s==null?void 0:s.data)==null?void 0:dd.data)==null?void 0:rd._id}&complaintRefNo=${(ld=(ad=s==null?void 0:s.data)==null?void 0:ad.data)==null?void 0:ld.complaintRefNo}`,children:e.jsx(w,{name:"approve",disabled:a.isPending,type:"button",children:"Transfer to Workflow"})})})]})]})]})]})]})}),e.jsxs("div",{className:"col-span-1 h-80 overflow-y-scroll md:px-4",children:[e.jsx(k,{className:"mb-2",children:"Comments"}),(td=(nd=(cd=L==null?void 0:L.data)==null?void 0:cd.data)==null?void 0:nd.data)==null?void 0:td.map((d,f)=>e.jsx(fr,{commentData:d},`comment${f}`))]})]})})]})]})}function Yr(){const[l,r]=_.useState(""),[j,n]=_.useState("");return e.jsx(Jd,{title:"Workflow Details",subTitle:"",searchLink:l,searchLabel:j,children:e.jsx("div",{className:"",children:e.jsx($r,{setsearchLink:r,setsearchLabel:n})})})}export{Yr as default};
