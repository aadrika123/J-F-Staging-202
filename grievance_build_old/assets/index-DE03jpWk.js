import{N as ks,c as C,d as _,z as S,b as Y,o as A,j as e,F as k,C as h,a9 as j,a0 as R,A as L,B as T,g as b,_ as m,r as g,a as Rs,s as Ls,a3 as Ys,a4 as As,a5 as v,x as N,G as p,a6 as y,a2 as f,I as w,L as Ts,k as Ms}from"./index-ZzU_zvvp.js";import{g as M}from"./services-KQnp_8oA.js";import{R as E}from"./refresh-ccw-BnthgUiP.js";import{I as u}from"./info-7I8J-PlJ.js";/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=ks("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Is=C().shape({comment:_().required("Write comment")});function Bs({setisDialogOpen:l,complaintData:d,setreOpenStatus:c}){const i=S({}),n=Y({resolver:A(Is)}),a=async t=>{var x,r;let o={complaintId:(r=(x=d==null?void 0:d.data)==null?void 0:x.data)==null?void 0:r._id,comment:t==null?void 0:t.comment};try{const s=await i.mutateAsync({api:b.reopenComplaint,data:o});s.data.success?(m.success(s.data.message),c(!1),d==null||d.refetch(),l(!1)):m.error(s.data.message)}catch(s){m.error(M(s))}};return e.jsx(k,{methods:n,onSubmit:n.handleSubmit(a),children:e.jsxs("div",{className:"gap-x-2 gap-y-4 px-10 py-10",children:[e.jsxs("div",{children:[e.jsxs(h,{className:"text-2xl flex items-center font-bold mb-6 justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 bg-amber-600 rounded-full bg-red-5500 text-white justify-center items-center mr-2 flex ",children:e.jsx(E,{className:"inline"})})," Re-Open Grievance"]}),e.jsx("div",{children:e.jsx("span",{onClick:()=>c(!1),className:"cursor-pointer hover:bg-red-100 p-1 rounded-lg",children:e.jsx(j,{className:"inline"})})})]}),e.jsxs(R,{className:"opacity-70 flex items-center",children:[e.jsx("div",{children:e.jsx(u,{size:20,className:"inline mr-1"})}),e.jsx("div",{children:"Enter, why do you want to reopen this grievance?"})]}),e.jsx(L,{className:"bg-background w-full rounded-md p-4 h-40 border mt-2",name:"comment",placeholder:"Comment"})]}),e.jsx("div",{className:"mt-4",children:e.jsx(T,{isLoading:n.formState.isSubmitting,type:"submit",className:" w-full",children:"Submit Re-Open"})})]})})}const Gs=C().shape({comment:_().required("Write comment")});function Os({setisDialogOpen:l,complaintData:d}){const c=S({}),i=Y({resolver:A(Gs)}),n=async a=>{var o,x;let t={complaintId:(x=(o=d==null?void 0:d.data)==null?void 0:o.data)==null?void 0:x._id,comment:a==null?void 0:a.comment};try{const r=await c.mutateAsync({api:b.closeComplaint,data:t});r.data.success?(m.success(r.data.message),d==null||d.refetch(),l(!1)):m.error(r.data.message)}catch(r){m.error(M(r))}};return e.jsx(k,{methods:i,onSubmit:i.handleSubmit(n),children:e.jsxs("div",{className:"gap-x-2 gap-y-4 px-10 py-10",children:[e.jsxs("div",{children:[e.jsx(h,{className:"text-2xl flex items-center font-bold mb-6 justify-between",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 bg-amber-600 rounded-full bg-red-5500 text-white justify-center items-center mr-2 flex ",children:e.jsx(E,{className:"inline"})})," Close This Grievance"]})}),e.jsxs(R,{className:"opacity-70 flex items-center",children:[e.jsx("div",{children:e.jsx(u,{size:20,className:"inline mr-1"})}),e.jsx("div",{children:"Enter, Why do you want to close this complaint?"})]}),e.jsx(L,{className:"bg-background w-full rounded-md p-4 h-40 border mt-2",name:"comment",placeholder:"Comment"})]}),e.jsx("div",{className:"mt-4",children:e.jsx(T,{isLoading:i.formState.isSubmitting,type:"submit",className:" w-full",children:"Confirm Close Complaint"})})]})})}const zs=C().shape({comment:_().required("Write comment")});function qs({setisDialogOpen:l,complaintData:d}){const c=S({}),i=Y({resolver:A(zs)}),n=async a=>{var o,x;let t={complaintId:(x=(o=d==null?void 0:d.data)==null?void 0:o.data)==null?void 0:x._id,comment:a==null?void 0:a.comment};try{const r=await c.mutateAsync({api:b.openCommentDirect,data:t});r.data.success?(m.success(r.data.message),d==null||d.refetch(),l(!1)):m.error(r.data.message)}catch(r){m.error(M(r))}};return e.jsx(k,{methods:i,onSubmit:i.handleSubmit(n),children:e.jsxs("div",{className:"gap-x-2 gap-y-4 px-10 py-10",children:[e.jsxs("div",{children:[e.jsx(h,{className:"text-2xl flex items-center font-bold mb-6 justify-between",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 bg-amber-600 rounded-full bg-red-5500 text-white justify-center items-center mr-2 flex ",children:e.jsx(E,{className:"inline"})})," Send Comment"]})}),e.jsxs(R,{className:"opacity-70 flex items-center",children:[e.jsx("div",{children:e.jsx(u,{size:20,className:"inline mr-1"})}),e.jsx("div",{children:"Enter the comment you want to send?"})]}),e.jsx(L,{className:"bg-background w-full rounded-md p-4 h-40 border mt-2",name:"comment",placeholder:"Comment"})]}),e.jsx("div",{className:"mt-4",children:e.jsx(T,{isLoading:i.formState.isSubmitting,type:"submit",className:" w-full",children:"Send Comment"})})]})})}function Ps(){var I,B,G,O,z,q,P,F,W,$,H,U,K,Q,V,J,X,Z,D,ee,se,de,ae,re,ie,le,te,ce,ne,xe,me,oe,he,fe,je,Ne,ue,ve,ye,be,ge,pe,we,Ce,_e,Se,Ye,Ae,ke,Re,Le,Te,Me,Ee,Ie,Be,Ge,Oe,ze,qe,Pe,Fe,We,$e,He,Ue,Ke,Qe,Ve,Je,Xe,Ze,De,es,ss,ds,as,rs,is,ls,ts,cs,ns,xs,ms,os,hs,fs,js,Ns,us,vs,ys,bs,gs,ps,ws,Cs,_s,Ss;const[l,d]=g.useState(!1),[c,i]=g.useState(""),[n,a]=g.useState(!1),{currentLanguage:t}=Rs(),r=new URLSearchParams(Ms().search).get("complaintRefNo"),s=Ls({api:`${b.getComplaintDetailsByComplaintNo}/${r}`,key:"ComplaintDetails",options:{enabled:!0}});return e.jsx("div",{className:"",children:e.jsx("div",{className:"min-h-screen bg-gray-100 p-1 sm:p-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-1 sm:p-8",children:[e.jsxs(Ys,{open:n,children:[e.jsx(As,{}),c==="DETAILS"&&e.jsxs(v,{className:"sm:max-w-[500px]",children:[e.jsxs(h,{className:"mt-4 text-xl text-gray-500 font-bold flex justify-between",children:[e.jsx("div",{children:!l&&e.jsxs(h,{className:"mt-4 text-xl text-gray-500 font-bold flex justify-between",children:[((B=(I=s==null?void 0:s.data)==null?void 0:I.data)==null?void 0:B.wf_status)===1&&e.jsx("span",{className:"text-green-500",children:"| Resolution Details"}),((O=(G=s==null?void 0:s.data)==null?void 0:G.data)==null?void 0:O.wf_status)===2&&e.jsx("span",{className:"text-red-500",children:"| Rejection Details"})]})}),e.jsx("div",{children:e.jsx("span",{children:e.jsx(j,{className:"cursor-pointer hover:bg-red-100 rounded-lg inline",onClick:()=>a(!1)})})})]}),e.jsxs("div",{className:"py-4",children:[!l&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex space-x-4  items-center",children:[((q=(z=s==null?void 0:s.data)==null?void 0:z.data)==null?void 0:q.wf_status)===1&&e.jsx("span",{children:"Resolution Date"}),((F=(P=s==null?void 0:s.data)==null?void 0:P.data)==null?void 0:F.wf_status)===2&&e.jsx("span",{children:"Rejection Date"}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:N(($=(W=s==null?void 0:s.data)==null?void 0:W.data)==null?void 0:$.wf_resolutionDate).format("DD-MM-YYYY")})," "]})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("div",{className:"font-semibold",children:"Details : "}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:(U=(H=s==null?void 0:s.data)==null?void 0:H.data)==null?void 0:U.wf_finalCommentToCitizen})," "]})]})]}),e.jsx("section",{style:{height:l?"400px":"0px",transition:"height 0.3s ease",overflow:"hidden"},children:e.jsx(Bs,{setisDialogOpen:a,setreOpenStatus:d,complaintData:s})}),!l&&e.jsxs("section",{className:"mt-8",children:[e.jsx("div",{className:"border-b mt-1 border-[#99B37C]"}),e.jsxs("p",{className:"text-gray-800 mt-2",children:[e.jsx("span",{className:"font-semibold italic font-serif",children:"Note : "}),"If you are not satisfied with the resolution of grievance, You can re-open grievance anytime."]}),e.jsxs("div",{className:"flex justify-center items-center mt-6",children:[" ",e.jsx(p,{onClick:()=>d(!l),variant:"secondary",className:"mt-2",children:"Re-Open this Grievance"})]})]})]})]}),c==="COMMENT"&&e.jsxs(v,{className:"sm:max-w-[500px] w-full mx-2",children:[e.jsxs(h,{className:"mt-4 text-xl text-gray-500 font-bold flex justify-between ",children:[e.jsx("div",{children:"| Send Comment"}),e.jsx("div",{children:e.jsx("span",{children:e.jsx(j,{className:"cursor-pointer hover:bg-red-100 rounded-lg inline",onClick:()=>a(!1)})})})]}),e.jsx("div",{className:"py-4",children:e.jsx("section",{style:{height:"400px",transition:"height 0.3s ease",overflow:"hidden"},children:e.jsx(qs,{setisDialogOpen:a,complaintData:s})})})]}),c==="CLOSE_COMPLAINT"&&e.jsxs(v,{className:"sm:max-w-[500px] w-full mx-2",children:[e.jsxs(h,{className:"mt-4 text-xl text-gray-500 font-bold flex justify-between",children:[e.jsx("div",{children:"| Close Grievance"}),e.jsx("div",{children:e.jsx("span",{children:e.jsx(j,{className:"cursor-pointer hover:bg-red-100 rounded-lg inline",onClick:()=>a(!1)})})})]}),e.jsx("div",{className:"py-4",children:e.jsx("section",{style:{height:"400px",transition:"height 0.3s ease",overflow:"hidden"},children:e.jsx(Os,{setisDialogOpen:a,complaintData:s})})})]}),e.jsxs("div",{className:"md:flex",children:[((Q=(K=s==null?void 0:s.data)==null?void 0:K.data)==null?void 0:Q.wf_status)===0&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold flex space-x-2",children:[e.jsx(u,{className:"inline text-amber-500"}),e.jsx("span",{className:"opacity-70",children:"We are working on this grievance, You will be informed soon."})," "]}),((J=(V=s==null?void 0:s.data)==null?void 0:V.data)==null?void 0:J.wf_status)===1&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold flex space-x-2",children:[e.jsx(Es,{className:"inline text-green-500"}),e.jsx("span",{className:"opacity-70",children:"This grievance has been resolved, You can reopen this grievance if not satisfied."})," "]}),((Z=(X=s==null?void 0:s.data)==null?void 0:X.data)==null?void 0:Z.wf_status)===2&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold flex space-x-2",children:[e.jsx(j,{className:"inline text-red-500"}),e.jsx("span",{className:"opacity-70",children:"This grievance has been rejected, Please re-register grievance if not satisfied with this."})," "]}),((ee=(D=s==null?void 0:s.data)==null?void 0:D.data)==null?void 0:ee.wf_status)===4&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold flex space-x-2",children:[e.jsx(j,{className:"inline text-red-500"}),e.jsx("span",{className:"opacity-70",children:"This grievance has been closed by you."})," "]}),((de=(se=s==null?void 0:s.data)==null?void 0:se.data)==null?void 0:de.wf_status)===3&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold flex space-x-2",children:[e.jsx(u,{className:"inline text-amber-500"}),e.jsx("span",{className:"opacity-70",children:"This grievance has been re-opened, We are working on this grievance, You will be informed soon."})," "]}),(((re=(ae=s==null?void 0:s.data)==null?void 0:ae.data)==null?void 0:re.wf_status)===0||((le=(ie=s==null?void 0:s.data)==null?void 0:ie.data)==null?void 0:le.wf_status)===3)&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold sm:flex space-x-2 space-y-2 sm:space-y-0",children:["   ",e.jsx(y,{onClick:()=>{a(!0),i("COMMENT"),d(!1)},asChild:!0,children:e.jsx(p,{className:"ml-2",size:"sm",variant:"secondary",children:"Send Comment"})}),e.jsx(y,{onClick:()=>{a(!0),i("CLOSE_COMPLAINT"),d(!1)},asChild:!0,children:e.jsx(p,{className:"ml-2",size:"sm",variant:"destructive",children:"Close Grievance"})})]}),(((ce=(te=s==null?void 0:s.data)==null?void 0:te.data)==null?void 0:ce.wf_status)===1||((xe=(ne=s==null?void 0:s.data)==null?void 0:ne.data)==null?void 0:xe.wf_status)===2)&&e.jsx(y,{onClick:()=>{a(!0),i("DETAILS"),d(!1)},asChild:!0,children:e.jsx(f,{className:"ml-2 cursor-pointer hover:bg-primary hover:text-white",variant:"secondary",children:"View Details"})})]})]}),e.jsxs("div",{className:"md:flex justify-between",children:[e.jsx("h1",{className:"text-xl font-bold text-blue-800 md:mb-6  mb-1 uppercase",children:t==null?void 0:t.GRIEVANCE_DETAILS}),e.jsxs("h1",{className:"md:text-xl md:font-bold  md:mb-6 mb-1",children:[e.jsx("span",{className:"font-semibold",children:"Grievance No :-"})," ",e.jsx("span",{className:"",children:(oe=(me=s==null?void 0:s.data)==null?void 0:me.data)==null?void 0:oe.complaintRefNo})]})]}),e.jsxs("div",{className:"md:flex",children:[e.jsxs("div",{className:"text-gray-600 mb-2 flex-1",children:[e.jsx("span",{className:"font-semibold",children:"  Registered on "}),":- ",N((fe=(he=s==null?void 0:s.data)==null?void 0:he.data)==null?void 0:fe.createdAt).format("DD-MM-YYYY")]}),e.jsxs("div",{className:"text-gray-600 mb-2 flex-1 text-right",children:["Status : ",((Ne=(je=s==null?void 0:s.data)==null?void 0:je.data)==null?void 0:Ne.wf_status)===4&&e.jsx(f,{variant:"destructive",children:"Closed"}),((ve=(ue=s==null?void 0:s.data)==null?void 0:ue.data)==null?void 0:ve.wf_status)===3&&e.jsx(f,{className:"bg-amber-400 text-white",variant:"secondary",children:"Pending(re-opened)"}),((be=(ye=s==null?void 0:s.data)==null?void 0:ye.data)==null?void 0:be.wf_status)===2&&e.jsx(f,{variant:"destructive",children:"Rejected"}),((pe=(ge=s==null?void 0:s.data)==null?void 0:ge.data)==null?void 0:pe.wf_status)===1&&e.jsx(f,{variant:"success",children:"Resolved"}),((Ce=(we=s==null?void 0:s.data)==null?void 0:we.data)==null?void 0:Ce.wf_status)===0&&e.jsx(f,{className:"bg-amber-400 text-white",variant:"secondary",children:"Pending"})]}),((Se=(_e=s==null?void 0:s.data)==null?void 0:_e.data)==null?void 0:Se.wf_status)===4&&e.jsxs("div",{className:"text-gray-600 mb-2 flex-1 text-right",children:[e.jsx("span",{children:"Closed on : "})," ",N((Ae=(Ye=s==null?void 0:s.data)==null?void 0:Ye.data)==null?void 0:Ae.wf_resolutionDate).format("DD-MM-YYYY")," "]}),((Re=(ke=s==null?void 0:s.data)==null?void 0:ke.data)==null?void 0:Re.wf_status)===2&&e.jsxs("div",{className:"text-gray-600 mb-2 flex-1 text-right",children:[e.jsx("span",{children:"Rejected on : "})," ",N((Te=(Le=s==null?void 0:s.data)==null?void 0:Le.data)==null?void 0:Te.wf_resolutionDate).format("DD-MM-YYYY")," "]}),((Ee=(Me=s==null?void 0:s.data)==null?void 0:Me.data)==null?void 0:Ee.wf_status)===1&&e.jsxs("div",{className:"text-gray-600 mb-2 flex-1 text-right",children:[e.jsx("span",{children:"Resolved on : "})," ",N((Be=(Ie=s==null?void 0:s.data)==null?void 0:Ie.data)==null?void 0:Be.wf_resolutionDate).format("DD-MM-YYYY")," "]})]}),e.jsx("div",{className:"border-b mt-1 border-[#99B37C]"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 space-y-4 md:space-y-0",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Full Name:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((Oe=(Ge=s==null?void 0:s.data)==null?void 0:Ge.data)==null?void 0:Oe.citizenName)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Mobile No:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((qe=(ze=s==null?void 0:s.data)==null?void 0:ze.data)==null?void 0:qe.mobileNo)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Email:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((Fe=(Pe=s==null?void 0:s.data)==null?void 0:Pe.data)==null?void 0:Fe.email)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"ULB:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((He=($e=(We=s==null?void 0:s.data)==null?void 0:We.data)==null?void 0:$e.ulb)==null?void 0:He.ulbName)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Grievance Type:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((Qe=(Ke=(Ue=s==null?void 0:s.data)==null?void 0:Ue.data)==null?void 0:Ke.problemType)==null?void 0:Qe.problem)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Ward No.:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((Je=(Ve=s==null?void 0:s.data)==null?void 0:Ve.data)==null?void 0:Je.wardNo)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Area:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((Ze=(Xe=s==null?void 0:s.data)==null?void 0:Xe.data)==null?void 0:Ze.area)||"N/A"})})]}),((es=(De=s==null?void 0:s.data)==null?void 0:De.data)==null?void 0:es.holdingNo)&&e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Holding No.:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:(ds=(ss=s==null?void 0:s.data)==null?void 0:ss.data)==null?void 0:ds.holdingNo})})]}),((rs=(as=s==null?void 0:s.data)==null?void 0:as.data)==null?void 0:rs.safNo)&&e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Saf No.:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:(ls=(is=s==null?void 0:s.data)==null?void 0:is.data)==null?void 0:ls.safNo})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Grievance Location:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((cs=(ts=s==null?void 0:s.data)==null?void 0:ts.data)==null?void 0:cs.grievanceLocation)||"N/A"})})]}),((xs=(ns=s==null?void 0:s.data)==null?void 0:ns.data)==null?void 0:xs.fixedNo)&&e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsxs("div",{className:"font-semibold",children:[(os=(ms=s==null?void 0:s.data)==null?void 0:ms.data)==null?void 0:os.fixedNoLabel,":"]}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:(fs=(hs=s==null?void 0:s.data)==null?void 0:hs.data)==null?void 0:fs.fixedNo})})]}),((Ns=(js=s==null?void 0:s.data)==null?void 0:js.data)==null?void 0:Ns.tempNo)&&e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsxs("div",{className:"font-semibold",children:[(vs=(us=s==null?void 0:s.data)==null?void 0:us.data)==null?void 0:vs.tempNoLabel,":"]}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:(bs=(ys=s==null?void 0:s.data)==null?void 0:ys.data)==null?void 0:bs.tempNo})})]}),e.jsx("div",{className:"col-span-1 md:col-span-3 border-b my-10 md:my-20 border-[#99B37C]"}),e.jsxs("div",{className:"col-span-1 md:col-span-3 flex flex-col",children:[e.jsx("div",{className:"font-semibold",children:"Description:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:(ps=(gs=s==null?void 0:s.data)==null?void 0:gs.data)==null?void 0:ps.complaintDescription})})]}),e.jsxs("div",{className:"col-span-1 md:col-span-3 flex flex-col",children:[e.jsx("div",{className:"font-semibold",children:"Grievance Document:"}),e.jsxs(Ys,{children:[e.jsx(As,{}),e.jsx(v,{className:"sm:max-w-[500px]",children:e.jsx("div",{className:"py-4",children:e.jsx(w,{src:(Cs=(ws=s==null?void 0:s.data)==null?void 0:ws.data)==null?void 0:Cs.imgUrl,className:"w-80"})})}),e.jsx(y,{asChild:!0,children:e.jsx("div",{className:"cursor-pointer",children:e.jsx(w,{src:(Ss=(_s=s==null?void 0:s.data)==null?void 0:_s.data)==null?void 0:Ss.imgUrl,className:"w-40"})})})]})]})]}),e.jsxs("section",{className:"mt-8 px-4 md:px-0",children:[e.jsx("h2",{className:"text-lg md:text-xl font-semibold text-blue-800",children:"Grievance Resolution Time"}),e.jsx("div",{className:"border-b mt-1 border-[#99B37C]"}),e.jsx("p",{className:"text-gray-800 mt-2 text-sm md:text-base",children:"Your grievance will be resolved within 10 working days. You can further reopen your grievance if not satisfied with the grievance resolution."}),e.jsxs("p",{className:"text-gray-800 mt-2 text-sm md:text-base flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2",children:["Feel free to connect with us at",e.jsx("a",{href:"tel:+91912325398",className:"font-semibold",children:"+91912325398"}),". You can also visit",e.jsxs(Ts,{to:"https://maps.app.goo.gl/HFBxeoz9qYmKWE3z8",target:"_blank",className:"inline-flex items-center hover:underline",children:[e.jsx(w,{className:"w-5 inline",src:"/images/pin.svg",alt:"Location Pin"}),e.jsx("span",{className:"mx-2",children:"nearest Jan Seva Kendra"})]}),"for further queries."]})]})]})})})}function Us(){return e.jsx(Ps,{})}export{Us as default};