import{N as ks,c as C,d as _,z as S,b as Y,o as k,j as e,F as L,C as h,a9 as j,a0 as R,A,B as T,g as b,_ as n,r as g,s as Ls,a3 as Ss,a4 as Ys,a5 as v,x as N,G as p,a6 as y,a2 as f,I as w,L as Rs,k as As}from"./index-D3GDLqYi.js";import{g as M}from"./services-KQnp_8oA.js";import{R as B}from"./refresh-ccw-8n0GGT3H.js";import{I as u}from"./info-Hm5aYUYE.js";/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=ks("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Ms=C().shape({comment:_().required("Write comment")});function Bs({setisDialogOpen:i,complaintData:d,setreOpenStatus:l}){const r=S({}),c=Y({resolver:k(Ms)}),a=async x=>{var t,s;let m={complaintId:(s=(t=d==null?void 0:d.data)==null?void 0:t.data)==null?void 0:s._id,comment:x==null?void 0:x.comment};try{const o=await r.mutateAsync({api:b.reopenComplaint,data:m});o.data.success?(n.success(o.data.message),l(!1),d==null||d.refetch(),i(!1)):n.error(o.data.message)}catch(o){n.error(M(o))}};return e.jsx(L,{methods:c,onSubmit:c.handleSubmit(a),children:e.jsxs("div",{className:"gap-x-2 gap-y-4 px-10 py-10",children:[e.jsxs("div",{children:[e.jsxs(h,{className:"text-2xl flex items-center font-bold mb-6 justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 bg-amber-600 rounded-full bg-red-5500 text-white justify-center items-center mr-2 flex ",children:e.jsx(B,{className:"inline"})})," Re-Open Grievance"]}),e.jsx("div",{children:e.jsx("span",{onClick:()=>l(!1),className:"cursor-pointer hover:bg-red-100 p-1 rounded-lg",children:e.jsx(j,{className:"inline"})})})]}),e.jsxs(R,{className:"opacity-70 flex items-center",children:[e.jsx("div",{children:e.jsx(u,{size:20,className:"inline mr-1"})}),e.jsx("div",{children:"Enter, why do you want to reopen this grievance?"})]}),e.jsx(A,{className:"bg-background w-full rounded-md p-4 h-40 border mt-2",name:"comment",placeholder:"Comment"})]}),e.jsx("div",{className:"mt-4",children:e.jsx(T,{isLoading:c.formState.isSubmitting,type:"submit",className:" w-full",children:"Submit Re-Open"})})]})})}const Es=C().shape({comment:_().required("Write comment")});function Is({setisDialogOpen:i,complaintData:d}){const l=S({}),r=Y({resolver:k(Es)}),c=async a=>{var m,t;let x={complaintId:(t=(m=d==null?void 0:d.data)==null?void 0:m.data)==null?void 0:t._id,comment:a==null?void 0:a.comment};try{const s=await l.mutateAsync({api:b.closeComplaint,data:x});s.data.success?(n.success(s.data.message),d==null||d.refetch(),i(!1)):n.error(s.data.message)}catch(s){n.error(M(s))}};return e.jsx(L,{methods:r,onSubmit:r.handleSubmit(c),children:e.jsxs("div",{className:"gap-x-2 gap-y-4 px-10 py-10",children:[e.jsxs("div",{children:[e.jsx(h,{className:"text-2xl flex items-center font-bold mb-6 justify-between",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 bg-amber-600 rounded-full bg-red-5500 text-white justify-center items-center mr-2 flex ",children:e.jsx(B,{className:"inline"})})," Close This Grievance"]})}),e.jsxs(R,{className:"opacity-70 flex items-center",children:[e.jsx("div",{children:e.jsx(u,{size:20,className:"inline mr-1"})}),e.jsx("div",{children:"Enter, Why do you want to close this complaint?"})]}),e.jsx(A,{className:"bg-background w-full rounded-md p-4 h-40 border mt-2",name:"comment",placeholder:"Comment"})]}),e.jsx("div",{className:"mt-4",children:e.jsx(T,{isLoading:r.formState.isSubmitting,type:"submit",className:" w-full",children:"Confirm Close Complaint"})})]})})}const Gs=C().shape({comment:_().required("Write comment")});function Os({setisDialogOpen:i,complaintData:d}){const l=S({}),r=Y({resolver:k(Gs)}),c=async a=>{var m,t;let x={complaintId:(t=(m=d==null?void 0:d.data)==null?void 0:m.data)==null?void 0:t._id,comment:a==null?void 0:a.comment};try{const s=await l.mutateAsync({api:b.openCommentDirect,data:x});s.data.success?(n.success(s.data.message),d==null||d.refetch(),i(!1)):n.error(s.data.message)}catch(s){n.error(M(s))}};return e.jsx(L,{methods:r,onSubmit:r.handleSubmit(c),children:e.jsxs("div",{className:"gap-x-2 gap-y-4 px-10 py-10",children:[e.jsxs("div",{children:[e.jsx(h,{className:"text-2xl flex items-center font-bold mb-6 justify-between",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-7 h-7 bg-amber-600 rounded-full bg-red-5500 text-white justify-center items-center mr-2 flex ",children:e.jsx(B,{className:"inline"})})," Send Comment"]})}),e.jsxs(R,{className:"opacity-70 flex items-center",children:[e.jsx("div",{children:e.jsx(u,{size:20,className:"inline mr-1"})}),e.jsx("div",{children:"Enter the comment you want to send?"})]}),e.jsx(A,{className:"bg-background w-full rounded-md p-4 h-40 border mt-2",name:"comment",placeholder:"Comment"})]}),e.jsx("div",{className:"mt-4",children:e.jsx(T,{isLoading:r.formState.isSubmitting,type:"submit",className:" w-full",children:"Send Comment"})})]})})}function zs(){var o,E,I,G,O,z,q,P,F,W,$,H,U,K,Q,J,V,X,Z,D,ee,se,de,ae,re,ie,le,te,ce,ne,xe,me,oe,he,fe,je,Ne,ue,ve,ye,be,ge,pe,we,Ce,_e,Se,Ye,ke,Le,Re,Ae,Te,Me,Be,Ee,Ie,Ge,Oe,ze,qe,Pe,Fe,We,$e,He,Ue,Ke,Qe,Je,Ve,Xe,Ze,De,es,ss,ds,as,rs,is,ls,ts,cs,ns,xs,ms,os,hs,fs,js,Ns,us,vs,ys,bs,gs,ps,ws,Cs,_s;const[i,d]=g.useState(!1),[l,r]=g.useState(""),[c,a]=g.useState(!1),t=new URLSearchParams(As().search).get("complaintRefNo"),s=Ls({api:`${b.getComplaintDetailsByComplaintNo}/${t}`,key:"ComplaintDetails",options:{enabled:!0}});return e.jsx("div",{className:"",children:e.jsx("div",{className:"min-h-screen bg-gray-100 p-1 sm:p-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-1 sm:p-8",children:[e.jsxs(Ss,{open:c,children:[e.jsx(Ys,{}),l==="DETAILS"&&e.jsxs(v,{className:"sm:max-w-[500px]",children:[e.jsxs(h,{className:"mt-4 text-xl text-gray-500 font-bold flex justify-between",children:[e.jsx("div",{children:!i&&e.jsxs(h,{className:"mt-4 text-xl text-gray-500 font-bold flex justify-between",children:[((E=(o=s==null?void 0:s.data)==null?void 0:o.data)==null?void 0:E.wf_status)===1&&e.jsx("span",{className:"text-green-500",children:"| Resolution Details"}),((G=(I=s==null?void 0:s.data)==null?void 0:I.data)==null?void 0:G.wf_status)===2&&e.jsx("span",{className:"text-red-500",children:"| Rejection Details"})]})}),e.jsx("div",{children:e.jsx("span",{children:e.jsx(j,{className:"cursor-pointer hover:bg-red-100 rounded-lg inline",onClick:()=>a(!1)})})})]}),e.jsxs("div",{className:"py-4",children:[!i&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex space-x-4  items-center",children:[((z=(O=s==null?void 0:s.data)==null?void 0:O.data)==null?void 0:z.wf_status)===1&&e.jsx("span",{children:"Resolution Date"}),((P=(q=s==null?void 0:s.data)==null?void 0:q.data)==null?void 0:P.wf_status)===2&&e.jsx("span",{children:"Rejection Date"}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:N((W=(F=s==null?void 0:s.data)==null?void 0:F.data)==null?void 0:W.wf_resolutionDate).format("DD-MM-YYYY")})," "]})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("div",{className:"font-semibold",children:"Details : "}),e.jsxs("div",{children:[e.jsx("p",{className:"opacity-90",children:(H=($=s==null?void 0:s.data)==null?void 0:$.data)==null?void 0:H.wf_finalCommentToCitizen})," "]})]})]}),e.jsx("section",{style:{height:i?"400px":"0px",transition:"height 0.3s ease",overflow:"hidden"},children:e.jsx(Bs,{setisDialogOpen:a,setreOpenStatus:d,complaintData:s})}),!i&&e.jsxs("section",{className:"mt-8",children:[e.jsx("div",{className:"border-b mt-1 border-[#99B37C]"}),e.jsxs("p",{className:"text-gray-800 mt-2",children:[e.jsx("span",{className:"font-semibold italic font-serif",children:"Note : "}),"If you are not satisfied with the resolution of grievance, You can re-open grievance anytime."]}),e.jsxs("div",{className:"flex justify-center items-center mt-6",children:[" ",e.jsx(p,{onClick:()=>d(!i),variant:"secondary",className:"mt-2",children:"Re-Open this Grievance"})]})]})]})]}),l==="COMMENT"&&e.jsxs(v,{className:"sm:max-w-[500px] w-full mx-2",children:[e.jsxs(h,{className:"mt-4 text-xl text-gray-500 font-bold flex justify-between ",children:[e.jsx("div",{children:"| Send Comment"}),e.jsx("div",{children:e.jsx("span",{children:e.jsx(j,{className:"cursor-pointer hover:bg-red-100 rounded-lg inline",onClick:()=>a(!1)})})})]}),e.jsx("div",{className:"py-4",children:e.jsx("section",{style:{height:"400px",transition:"height 0.3s ease",overflow:"hidden"},children:e.jsx(Os,{setisDialogOpen:a,complaintData:s})})})]}),l==="CLOSE_COMPLAINT"&&e.jsxs(v,{className:"sm:max-w-[500px] w-full mx-2",children:[e.jsxs(h,{className:"mt-4 text-xl text-gray-500 font-bold flex justify-between",children:[e.jsx("div",{children:"| Close Grievance"}),e.jsx("div",{children:e.jsx("span",{children:e.jsx(j,{className:"cursor-pointer hover:bg-red-100 rounded-lg inline",onClick:()=>a(!1)})})})]}),e.jsx("div",{className:"py-4",children:e.jsx("section",{style:{height:"400px",transition:"height 0.3s ease",overflow:"hidden"},children:e.jsx(Is,{setisDialogOpen:a,complaintData:s})})})]}),e.jsxs("div",{className:"md:flex",children:[((K=(U=s==null?void 0:s.data)==null?void 0:U.data)==null?void 0:K.wf_status)===0&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold flex space-x-2",children:[e.jsx(u,{className:"inline text-amber-500"}),e.jsx("span",{className:"opacity-70",children:"We are working on this grievance, You will be informed soon."})," "]}),((J=(Q=s==null?void 0:s.data)==null?void 0:Q.data)==null?void 0:J.wf_status)===1&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold flex space-x-2",children:[e.jsx(Ts,{className:"inline text-green-500"}),e.jsx("span",{className:"opacity-70",children:"This grievance has been resolved, You can reopen this grievance if not satisfied."})," "]}),((X=(V=s==null?void 0:s.data)==null?void 0:V.data)==null?void 0:X.wf_status)===2&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold flex space-x-2",children:[e.jsx(j,{className:"inline text-red-500"}),e.jsx("span",{className:"opacity-70",children:"This grievance has been rejected, Please re-register grievance if not satisfied with this."})," "]}),((D=(Z=s==null?void 0:s.data)==null?void 0:Z.data)==null?void 0:D.wf_status)===4&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold flex space-x-2",children:[e.jsx(j,{className:"inline text-red-500"}),e.jsx("span",{className:"opacity-70",children:"This grievance has been closed by you."})," "]}),((se=(ee=s==null?void 0:s.data)==null?void 0:ee.data)==null?void 0:se.wf_status)===3&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold flex space-x-2",children:[e.jsx(u,{className:"inline text-amber-500"}),e.jsx("span",{className:"opacity-70",children:"This grievance has been re-opened, We are working on this grievance, You will be informed soon."})," "]}),(((ae=(de=s==null?void 0:s.data)==null?void 0:de.data)==null?void 0:ae.wf_status)===0||((ie=(re=s==null?void 0:s.data)==null?void 0:re.data)==null?void 0:ie.wf_status)===3)&&e.jsxs("div",{className:"text-gray-600 mb-2 font-semibold sm:flex space-x-2 space-y-2 sm:space-y-0",children:["   ",e.jsx(y,{onClick:()=>{a(!0),r("COMMENT"),d(!1)},asChild:!0,children:e.jsx(p,{className:"ml-2",size:"sm",variant:"secondary",children:"Send Comment"})}),e.jsx(y,{onClick:()=>{a(!0),r("CLOSE_COMPLAINT"),d(!1)},asChild:!0,children:e.jsx(p,{className:"ml-2",size:"sm",variant:"destructive",children:"Close Grievance"})})]}),(((te=(le=s==null?void 0:s.data)==null?void 0:le.data)==null?void 0:te.wf_status)===1||((ne=(ce=s==null?void 0:s.data)==null?void 0:ce.data)==null?void 0:ne.wf_status)===2)&&e.jsx(y,{onClick:()=>{a(!0),r("DETAILS"),d(!1)},asChild:!0,children:e.jsx(f,{className:"ml-2 cursor-pointer hover:bg-primary hover:text-white",variant:"secondary",children:"View Details"})})]})]}),e.jsxs("div",{className:"md:flex justify-between",children:[e.jsx("h1",{className:"text-xl font-bold text-blue-800 md:mb-6  mb-1 uppercase",children:"Grievance Details"}),e.jsxs("h1",{className:"md:text-xl md:font-bold  md:mb-6 mb-1",children:[e.jsx("span",{className:"font-semibold",children:"Grievance No :-"})," ",e.jsx("span",{className:"",children:(me=(xe=s==null?void 0:s.data)==null?void 0:xe.data)==null?void 0:me.complaintRefNo})]})]}),e.jsxs("div",{className:"md:flex",children:[e.jsxs("div",{className:"text-gray-600 mb-2 flex-1",children:[e.jsx("span",{className:"font-semibold",children:"  Registered on "}),":- ",N((he=(oe=s==null?void 0:s.data)==null?void 0:oe.data)==null?void 0:he.createdAt).format("DD-MM-YYYY")]}),e.jsxs("div",{className:"text-gray-600 mb-2 flex-1 text-right",children:["Status : ",((je=(fe=s==null?void 0:s.data)==null?void 0:fe.data)==null?void 0:je.wf_status)===4&&e.jsx(f,{variant:"destructive",children:"Closed"}),((ue=(Ne=s==null?void 0:s.data)==null?void 0:Ne.data)==null?void 0:ue.wf_status)===3&&e.jsx(f,{className:"bg-amber-400 text-white",variant:"secondary",children:"Pending(re-opened)"}),((ye=(ve=s==null?void 0:s.data)==null?void 0:ve.data)==null?void 0:ye.wf_status)===2&&e.jsx(f,{variant:"destructive",children:"Rejected"}),((ge=(be=s==null?void 0:s.data)==null?void 0:be.data)==null?void 0:ge.wf_status)===1&&e.jsx(f,{variant:"success",children:"Resolved"}),((we=(pe=s==null?void 0:s.data)==null?void 0:pe.data)==null?void 0:we.wf_status)===0&&e.jsx(f,{className:"bg-amber-400 text-white",variant:"secondary",children:"Pending"})]}),((_e=(Ce=s==null?void 0:s.data)==null?void 0:Ce.data)==null?void 0:_e.wf_status)===4&&e.jsxs("div",{className:"text-gray-600 mb-2 flex-1 text-right",children:[e.jsx("span",{children:"Closed on : "})," ",N((Ye=(Se=s==null?void 0:s.data)==null?void 0:Se.data)==null?void 0:Ye.wf_resolutionDate).format("DD-MM-YYYY")," "]}),((Le=(ke=s==null?void 0:s.data)==null?void 0:ke.data)==null?void 0:Le.wf_status)===2&&e.jsxs("div",{className:"text-gray-600 mb-2 flex-1 text-right",children:[e.jsx("span",{children:"Rejected on : "})," ",N((Ae=(Re=s==null?void 0:s.data)==null?void 0:Re.data)==null?void 0:Ae.wf_resolutionDate).format("DD-MM-YYYY")," "]}),((Me=(Te=s==null?void 0:s.data)==null?void 0:Te.data)==null?void 0:Me.wf_status)===1&&e.jsxs("div",{className:"text-gray-600 mb-2 flex-1 text-right",children:[e.jsx("span",{children:"Resolved on : "})," ",N((Ee=(Be=s==null?void 0:s.data)==null?void 0:Be.data)==null?void 0:Ee.wf_resolutionDate).format("DD-MM-YYYY")," "]})]}),e.jsx("div",{className:"border-b mt-1 border-[#99B37C]"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 space-y-4 md:space-y-0",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Full Name:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((Ge=(Ie=s==null?void 0:s.data)==null?void 0:Ie.data)==null?void 0:Ge.citizenName)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Mobile No:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((ze=(Oe=s==null?void 0:s.data)==null?void 0:Oe.data)==null?void 0:ze.mobileNo)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Email:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((Pe=(qe=s==null?void 0:s.data)==null?void 0:qe.data)==null?void 0:Pe.email)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"ULB:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:(($e=(We=(Fe=s==null?void 0:s.data)==null?void 0:Fe.data)==null?void 0:We.ulb)==null?void 0:$e.ulbName)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Grievance Type:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((Ke=(Ue=(He=s==null?void 0:s.data)==null?void 0:He.data)==null?void 0:Ue.problemType)==null?void 0:Ke.problem)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Ward No.:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((Je=(Qe=s==null?void 0:s.data)==null?void 0:Qe.data)==null?void 0:Je.wardNo)||"N/A"})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Area:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((Xe=(Ve=s==null?void 0:s.data)==null?void 0:Ve.data)==null?void 0:Xe.area)||"N/A"})})]}),((De=(Ze=s==null?void 0:s.data)==null?void 0:Ze.data)==null?void 0:De.holdingNo)&&e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Holding No.:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:(ss=(es=s==null?void 0:s.data)==null?void 0:es.data)==null?void 0:ss.holdingNo})})]}),((as=(ds=s==null?void 0:s.data)==null?void 0:ds.data)==null?void 0:as.safNo)&&e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Saf No.:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:(is=(rs=s==null?void 0:s.data)==null?void 0:rs.data)==null?void 0:is.safNo})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsx("div",{className:"font-semibold",children:"Grievance Location:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:((ts=(ls=s==null?void 0:s.data)==null?void 0:ls.data)==null?void 0:ts.grievanceLocation)||"N/A"})})]}),((ns=(cs=s==null?void 0:s.data)==null?void 0:cs.data)==null?void 0:ns.fixedNo)&&e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsxs("div",{className:"font-semibold",children:[(ms=(xs=s==null?void 0:s.data)==null?void 0:xs.data)==null?void 0:ms.fixedNoLabel,":"]}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:(hs=(os=s==null?void 0:s.data)==null?void 0:os.data)==null?void 0:hs.fixedNo})})]}),((js=(fs=s==null?void 0:s.data)==null?void 0:fs.data)==null?void 0:js.tempNo)&&e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center",children:[e.jsxs("div",{className:"font-semibold",children:[(us=(Ns=s==null?void 0:s.data)==null?void 0:Ns.data)==null?void 0:us.tempNoLabel,":"]}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:(ys=(vs=s==null?void 0:s.data)==null?void 0:vs.data)==null?void 0:ys.tempNo})})]}),e.jsx("div",{className:"col-span-1 md:col-span-3 border-b my-10 md:my-20 border-[#99B37C]"}),e.jsxs("div",{className:"col-span-1 md:col-span-3 flex flex-col",children:[e.jsx("div",{className:"font-semibold",children:"Description:"}),e.jsx("div",{children:e.jsx("p",{className:"opacity-90",children:(gs=(bs=s==null?void 0:s.data)==null?void 0:bs.data)==null?void 0:gs.complaintDescription})})]}),e.jsxs("div",{className:"col-span-1 md:col-span-3 flex flex-col",children:[e.jsx("div",{className:"font-semibold",children:"Grievance Document:"}),e.jsxs(Ss,{children:[e.jsx(Ys,{}),e.jsx(v,{className:"sm:max-w-[500px]",children:e.jsx("div",{className:"py-4",children:e.jsx(w,{src:(ws=(ps=s==null?void 0:s.data)==null?void 0:ps.data)==null?void 0:ws.imgUrl,className:"w-80"})})}),e.jsx(y,{asChild:!0,children:e.jsx("div",{className:"cursor-pointer",children:e.jsx(w,{src:(_s=(Cs=s==null?void 0:s.data)==null?void 0:Cs.data)==null?void 0:_s.imgUrl,className:"w-40"})})})]})]})]}),e.jsxs("section",{className:"mt-8 px-4 md:px-0",children:[e.jsx("h2",{className:"text-lg md:text-xl font-semibold text-blue-800",children:"Grievance Resolution Time"}),e.jsx("div",{className:"border-b mt-1 border-[#99B37C]"}),e.jsx("p",{className:"text-gray-800 mt-2 text-sm md:text-base",children:"Your grievance will be resolved within 10 working days. You can further reopen your grievance if not satisfied with the grievance resolution."}),e.jsxs("p",{className:"text-gray-800 mt-2 text-sm md:text-base flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2",children:["Feel free to connect with us at",e.jsx("a",{href:"tel:+91912325398",className:"font-semibold",children:"+91912325398"}),". You can also visit",e.jsxs(Rs,{to:"https://maps.app.goo.gl/HFBxeoz9qYmKWE3z8",target:"_blank",className:"inline-flex items-center hover:underline",children:[e.jsx(w,{className:"w-5 inline",src:"/images/pin.svg",alt:"Location Pin"}),e.jsx("span",{className:"mx-2",children:"nearest Jan Seva Kendra"})]}),"for further queries."]})]})]})})})}function $s(){return e.jsx(zs,{})}export{$s as default};