import{B as z,r as i,c as ue,g as he,u as fe,d as j,A as T,b as o,F as C,j as e,M as be}from"./index-0e94f450.js";import{I as ve}from"./full.esm-5e7b7b89.js";import Ne from"./ForwardScreen-dbb73b65.js";import xe from"./CommonLoader-bddb49c4.js";import{u as ye}from"./formik.esm-3041fe88.js";import{c as $e,b as V}from"./index.esm-53d0ef34.js";import{A as _e}from"./ApiHeader2-b363f7b8.js";import{u as we}from"./useSetTitle-9e2c9f8b.js";import{u as Ce}from"./useCustomGeoLocation-12657b0e.js";import{r as Se}from"./resizeImage-f1558408.js";import"./Hourglass-60182635.js";import"./BeatLoader-10dd928d.js";function je(){let t=z;return{calculatePropertyTax:`${t}/api/property/calculatePropertyTax`,get_dashboard:`${t}/api/property/get-dashboard`,get_ConcessionInbox:`${t}/api/property/concession/inbox`,get_ConcessionOutbox:`${t}/api/property/concession/outbox`,get_ConcessionSpecial:`${t}/api/property/concession/special-inbox`,get_ConcessionDetailsById:`${t}/api/property/concession/details`,post_ConcessionEscalate:`${t}/api/property/concession/escalate`,post_ConcessionNextLevel:`${t}/api/property/concession/next-level`,post_ConcessionApprovalRejection:`${t}/api/property/concession/approvalrejection`,post_ConcessionBackToCitizen:`${t}/api/property/concession/backtocitizen`,post_ConcessionComment:`${t}/api/property/concession/comment-independent`,get_ConcessionDocumentsToUpload:`${t}/api/property/concession/doc-list`,get_ConcessionUploadedDocuments:`${t}/api/property/concession/get-uploaded-documents`,post_ConcessionDocumentUpload:`${t}/api/property/concession/upload-document`,get_ConcessionBtcList:`${t}/api/property/concession/btc-inbox`,get_ObjectionInbox:`${t}/api/property/objection/inbox`,get_ObjectionOutbox:`${t}/api/property/objection/outbox`,get_ObjectionSpecial:`${t}/api/property/objection/special-inbox`,get_ObjectionDetailsById:`${t}/api/property/objection/details`,post_ObjectionEscalate:`${t}/api/property/objection/post-escalate`,post_ObjectionNextLevel:`${t}/api/property/objection/next-level`,post_ObjectionApprovalRejection:`${t}/api/property/objection/approvalrejection`,post_ObjectionBackToCitizen:`${t}/api/property/objection/backtocitizen`,post_ObjectionBtcList:`${t}/api/property/objection/btc-inbox`,post_ObjectionComment:`${t}/api/property/objection/comment-independent`,get_ObjectionDocumentsToUpload:`${t}/api/property/objection/doc-list`,get_ObjectionUploadedDocuments:`${t}/api/property/objection/get-uploaded-documents`,post_ObjectionDocumentUpload:`${t}/api/property/objection/upload-document`,get_HarvestingInbox:`${t}/api/property/harvesting/inbox`,get_HarvestingOutbox:`${t}/api/property/harvesting/outbox`,get_HarvestingSpecial:`${t}/api/property/harvesting/special-inbox`,get_HarvestingDetailsById:`${t}/api/property/harvesting/static-details`,harvestingSiteVerification:`${t}/api/property/harvesting/site-verification`,post_HarvestingEscalate:`${t}/api/property/harvesting/escalate`,post_HarvestingNextLevel:`${t}/api/property/harvesting/next-level`,post_HarvestingApprovalRejection:`${t}/api/property/harvesting/approval-rejection`,post_HarvestingBackToCitizen:`${t}/api/property/harvesting/backtocitizen`,getHarvestingDocList:`${t}/api/property/harvesting-doc-id`,postHarvestingDoc:`${t}/api/property/harvesting-doc-upload`,postHarvestingStatus:`${t}/api/property/harvesting-doc-status`,get_HarvestingDocumentsToUpload:`${t}/api/property/harvesting/get-doc-list`,get_HarvestingUploadedDocuments:`${t}/api/property/harvesting/get-uploaded-documents`,post_HarvestingDocumentUpload:`${t}/api/property/harvesting/upload-document`,get_HarvestingBtcList:`${t}/api/property/harvesting/btc-inbox`,get_HarvestingBtcAction:`${t}/api/property/harvesting/backtocitizen`,get_HoldingDeactivationInbox:`${t}/api/property/inboxDeactivation`,get_HoldingDeactivationOutbox:`${t}/api/property/outboxDeactivation`,get_HoldingDeactivationSpecial:`${t}`,get_HoldingDeactivationDetailsById:`${t}/api/property/getDeactivationDtls`,post_HoldingDeactivationEscalate:`${t}/api/property/postEscalateDeactivation`,post_HoldingDeactivationNextLevel:`${t}/api/property/postNextDeactivation`,post_HoldingDeactivationApprovalRejection:`${t}/api/property/approve-reject-deactivation-request`,post_HoldingDeactivationIndependentComment:`${t}/api/property/commentIndependentPrpDeactivation`,get_HoldingDeactivationUploadedDocuments:`${t}/api/property/getDocumentsPrpDeactivation`,get_MasterData:`${t}/api/property/saf/master-saf`,post_SiteVerification:`${t}/api/property/saf/site-verification`,post_GeoTagging:`${t}/api/property/saf/geotagging`,post_DocVerify:`${t}/api/property/saf/verifydoc`,getSafDoc:`${t}/api/property/safDocumentUpload`,postSafDoc:`${t}/api/property/safDocumentUpload`,getDocumentList:`${t}/api/property/getSafUploadDocuments`,postSafVerify:`${t}/api/property/saf/doc-status`,api_getPropHoldingDetailsById:`${t}/api/property/saf/get-prop-byholding`,api_getTcComparisonData:`${t}/api/property/saf/verifications-comp`,api_PostHolidingDeactivation:`${t}/api/property/deactivationRequest`,api_getHoldingDeactivationDetails:`${t}/api/property/get-prop-dtl-for-deactivation`,api_postHoldingDeactivationApply:`${t}/api/property/deactivationRequest `,api_samReciept:`${t}/api/property/saf/memo-receipt`,getHarvestingData:`${t}/api/property/harvesting/get-tc-verifications`}}const We=()=>{const[t,l]=i.useState(!1),{isGeolocationAvailable:He,isGeolocationEnabled:Ie,coords:h,getPosition:ke}=Ce(),[a,H]=i.useState(),[x,I]=i.useState(null),[r,k]=i.useState(),[M,W]=i.useState(),[q,A]=i.useState(!0),[D,y]=i.useState(!1),[G,U]=i.useState(!1),[Y,$]=i.useState(""),[p,J]=i.useState();we("Water Harvesting Verification"),localStorage.getItem("roles");const{get_HarvestingDetailsById:K,harvestingSiteVerification:Q,getHarvestingData:X}=je(),{id:_}=ue(),{notify:b,roleName:m}=i.useContext(he),O=fe(),Z=$e({harvestingImage:V().when([],{is:()=>m=="tc",then:()=>V().required("image required")})}),d=ye({initialValues:{harvestingImage:""},onSubmit:s=>{y(!0)},validationSchema:Z}),ee=()=>{if(m!="tc"&&m!="utc"){b("You don't have permission to verify !!!","error");return}l(!0);let s=new FormData;s.append("applicationId",_),G?s.append("harvestingImage",le(x,"HarvestingImage.jpg")):s.append("harvestingImage",M),q?s.append("verificationStatus",1):s.append("verificationStatus",0),s.append("longitude",r==null?void 0:r.longitude),s.append("latitude",r==null?void 0:r.latitude),j.post(Q,s,_e()).then(n=>{var c,u,g;$((c=n==null?void 0:n.data)==null?void 0:c.status),((u=n==null?void 0:n.data)==null?void 0:u.status)==!0&&(l(!1),$("true")),((g=n==null?void 0:n.data)==null?void 0:g.status)==!1&&(b("Something went wrong, please try after sometime !!!","error"),$("false"),y(!1),l(!1))}).catch(n=>{b("Something went wrong, please try after sometime !!!","error"),$("false"),y(!1),l(!1)})};i.useEffect(()=>{l(!0),j.post(K,{applicationId:_},T()).then(s=>{var n,c,u,g;((n=s==null?void 0:s.data)==null?void 0:n.status)==!0&&(H((c=s==null?void 0:s.data)==null?void 0:c.data),l(!1)),((u=s==null?void 0:s.data)==null?void 0:u.status)==!1&&(H((g=s==null?void 0:s.data)==null?void 0:g.data),l(!1),O("/search/harvesting"),b("Please try again after sometime !!!","error"))}).catch(s=>{l(!1),O("/search/harvesting"),b("Please try again after sometime !!!","error")})},[]);const te=async s=>{var n;if(s.target.name=="harvestingImage"){U(!1),s.target.files[0];const c=await Se((n=s==null?void 0:s.target)==null?void 0:n.files[0]);k({latitude:h==null?void 0:h.latitude,longitude:h==null?void 0:h.longitude}),W(c),I(URL.createObjectURL(c)),d.setFieldTouched("flongitude",r==null?void 0:r.longitude),d.setFieldValue("flatitude",r==null?void 0:r.latitude)}},se=s=>{const n=s.target.name,c=s.target.value;n=="imageCheck"&&(C,c=="true"?(A(!0),d.setFieldValue("harvestingImgae","dddd")):A(!1))},[ae,L]=i.useState(!1),[F,oe]=i.useState(""),[ne,ie]=i.useState(""),S=(s,n)=>{L(!0),s=="camera"&&de(),P(null),oe(s),ie(n)},E=()=>L(!1),re=()=>{},ce=()=>{const s=document.createElement("a");s.href=v,U(!0),I(v),d.setFieldValue("harvestingImage",v),s.click(),E()};function le(s,n){const c=s.split(","),u=c[0].match(/:(.*?);/)[1],g=atob(c[1]);let w=g.length;const B=new Uint8Array(w);for(;w--;)B[w]=g.charCodeAt(w);return new File([B],n,{type:u})}const[Ae,pe]=i.useState(null);i.useState(0);const[v,P]=i.useState(),R=()=>{navigator.geolocation.getCurrentPosition(s=>{pe(s),k(s==null?void 0:s.coords)},()=>{})},f=i.useRef(null),N=i.useRef(null),de=async()=>{navigator.mediaDevices.getUserMedia({video:!0}).then(s=>{f.current.srcObject=s,f.current.onloadedmetadata=()=>{N.current.width=f.current.videoWidth,N.current.height=f.current.videoHeight,R()}}).catch(s=>{s.name==="NotAllowedError"?alert("Permission to access camera was not granted"):s.name==="NotFoundError"||s.name==="DevicesNotFoundError"?alert("No camera found"):s.name==="NotReadableError"||s.name==="TrackStartError"?alert("Could not start camera"):alert("Error accessing camera")})},me=()=>{N.current.getContext("2d").drawImage(f.current,0,0);const n=N.current.toDataURL("image/jpg");P(n)};let ge=z;return i.useEffect(()=>{m=="utc"&&l(!0),m=="utc"&&j.post(X,{applicationId:_},T()).then(s=>{var n;J((n=s==null?void 0:s.data)==null?void 0:n.data),l(!1)}).catch(s=>{l(!1)})},[]),o(C,{children:[t&&e(xe,{}),e(Ne,{roleName:m,openScreen:D,id:_,navigation:()=>ee(),closePopUp:()=>y(!1),canSubmit:Y,type:"harvesting",action:"forward"}),o("div",{className:"w-full",children:[o("h1",{className:" text-center font-bold text-xl border-b-2 border-gray-700 mx-4",children:["Field Verification ",e("br",{}),"Rain Water Harvesting"," "]}),e("div",{className:"p-4 flex flex-col gap-y-4",children:o("div",{className:" bg-indigo-50 border-2 border-indigo-500 my-2 mx-1",children:[e("h1",{className:"text-center font-semibold bg-blue-700 text-white uppercase text-lg",children:e("span",{children:"Water Harvesting Declaration"})}),o("div",{className:"p-2",children:[o("div",{className:"grid grid-cols-12 text-sm pb-2",children:[e("span",{className:" col-span-6",children:"Application No."}),e("span",{className:"col-span-6 font-semibold",children:(a==null?void 0:a.applicationNo)==""?"N/A":a==null?void 0:a.applicationNo})]}),o("div",{className:"grid grid-cols-12 text-sm pb-2",children:[e("span",{className:" col-span-6 ",children:"Does Completion of Water Harvesting is done before 31-03-2017?"}),e("span",{className:"col-span-6 font-semibold",children:a!=null&&a.completionBefore2017?"Yes":"No"})]}),o("div",{className:"grid grid-cols-12 text-sm pb-2",children:[e("span",{className:" col-span-6 ",children:"Holding No."}),e("span",{className:"col-span-6 font-semibold",children:(a==null?void 0:a.holdingNo)==""?"N/A":a==null?void 0:a.holdingNo})]}),o("div",{className:"grid grid-cols-12 text-sm pb-2",children:[e("span",{className:" col-span-6 ",children:"Name"}),e("span",{className:"col-span-6 font-semibold",children:(a==null?void 0:a.applicantName)==""?"N/A":a==null?void 0:a.applicantName})]}),o("div",{className:"grid grid-cols-12 text-sm pb-2",children:[e("span",{className:" col-span-6 ",children:"Guardian Name"}),e("span",{className:"col-span-6 font-semibold",children:(a==null?void 0:a.guardianName)==""?"N/A":a==null?void 0:a.guardianName})]}),o("div",{className:"grid grid-cols-12 text-sm pb-2",children:[e("span",{className:" col-span-6 ",children:"Ward No."}),e("span",{className:"col-span-6 font-semibold",children:(a==null?void 0:a.wardNo)==""?"N/A":a==null?void 0:a.wardNo})]}),o("div",{className:"grid grid-cols-12 text-sm pb-2",children:[e("span",{className:" col-span-6 ",children:"Address"}),e("span",{className:"col-span-6 font-semibold",children:(a==null?void 0:a.propertyAddress)==""?"N/A":a==null?void 0:a.propertyAddress})]}),o("div",{className:"grid grid-cols-12 text-sm pb-2",children:[e("span",{className:" col-span-6 ",children:"Mobile No."}),e("span",{className:"col-span-6 font-semibold",children:(a==null?void 0:a.mobileNo)==""?"N/A":a==null?void 0:a.mobileNo})]}),o("div",{className:"grid grid-cols-12 text-sm pb-2",children:[e("span",{className:" col-span-6 ",children:"Date of Completion of Water Harvesting Structure"}),e("span",{className:"col-span-6 font-semibold",children:(a==null?void 0:a.dateOfCompletion)==""?"N/A":a==null?void 0:a.dateOfCompletion})]}),o("form",{className:"grid grid-cols-12 text-sm pb-2 border-2 border-indigo-400 rounded-md mt-4",onChange:d.handleChange,onSubmit:d.handleSubmit,children:[e("span",{className:" col-span-12 font-semibold bg-indigo-500 text-white uppercase px-2 py-1 text-md",children:"Water Harvesting Image"}),e("span",{className:"col-span-12 my-2 px-2",children:o("div",{className:"grid grid-cols-12 text-sm pb-2 items-center",children:[o("span",{className:"col-span-4 font-semibold",children:["Self Assessed :"," "]}),e("span",{className:"col-span-8 text-center flex justify-center",children:e("img",{src:`${a==null?void 0:a.harvestingImage}`,alt:"Harvesting Image",srcset:"",className:"w-32 cursor-pointer rounded-md shadow-md",onClick:()=>S("image",`${a==null?void 0:a.harvestingImage}`)})})]})}),m=="utc"&&o("span",{className:"col-span-12 my-2 px-2",children:[o("div",{className:"grid grid-cols-12 text-sm pb-2 items-center",children:[o("span",{className:"col-span-4 font-semibold",children:["Agency TC :"," "]}),e("span",{className:"col-span-8 text-center flex justify-center",children:e("img",{src:`${p==null?void 0:p.doc_path}`,alt:"Harvesting Image",srcset:"",className:"w-32 cursor-pointer rounded-md shadow-md",onClick:()=>S("image",`${p==null?void 0:p.doc_path}`)})})]}),o("span",{className:"col-span-12 grid grid-cols-12",children:[e("span",{className:"col-span-6 text-sm flex items-center font-semibold",children:"Latitude :"}),e("span",{className:"col-span-6 text-sm",children:e("span",{className:"font-semibold text-sm",children:p==null?void 0:p.latitude})})]}),o("span",{className:"col-span-12 grid grid-cols-12",children:[e("span",{className:"col-span-6 text-sm flex items-center font-semibold",children:"Longitude :"}),e("span",{className:"col-span-6 text-sm",children:e("span",{className:"font-semibold text-sm",children:p==null?void 0:p.longitude})})]})]}),e("div",{className:"col-span-12 px-2",children:o("div",{className:"grid grid-cols-12 text-sm pb-2",children:[e("span",{className:"col-span-5 font-semibold",children:"Check :"}),o("span",{className:"col-span-7 flex gap-2",onClick:se,children:[o("span",{className:"flex gap-1",children:[e("input",{type:"radio",name:"imageCheck",required:!0,id:"check1",value:!0}),e("label",{htmlFor:"check 1",children:"Correct"})]}),o("span",{className:"flex gap-1",children:[e("input",{type:"radio",name:"imageCheck",required:!0,id:"check2",value:!1}),e("label",{htmlFor:"check 2",children:"Incorrect"})]})]})]})}),x!=null&&e("span",{className:"col-span-12 my-2 px-2",children:o("div",{className:"grid grid-cols-12 text-sm pb-2 items-center",children:[o("span",{className:"col-span-4 font-semibold",children:["Preview :"," "]}),e("span",{className:"col-span-8 text-center flex justify-center",children:e("img",{src:x??`${ge}/${a==null?void 0:a.harvestingImage}`,alt:"Harvesting Image",srcset:"",className:"w-32 cursor-pointer rounded-md shadow-md",onClick:()=>S("image")})})]})}),e("div",{className:"col-span-12 px-2",children:m=="tc"&&o("div",{className:"grid grid-cols-12 text-sm pb-2",children:[o("span",{className:"col-span-12 grid grid-cols-12 mb-2",children:[e("span",{className:"col-span-4 text-sm flex items-center font-semibold",children:"Upload :"}),e("span",{className:"col-span-5 text-sm",children:e("input",{onChange:s=>te(s),type:"file",name:"harvestingImage",id:"",accept:".jpg, .jpeg",className:" bg-white px-2 py-1 w-full rounded-sm shadow-sm border-[1px] border-gray-400"})})]}),e("span",{className:"col-span-12 text-center mb-2",children:d.touched.harvestingImage&&d.errors.harvestingImage&&e(C,{children:e("span",{className:"text-red-600 text-xs",children:d.errors.harvestingImage})})}),o("span",{className:"col-span-12 grid grid-cols-12",children:[e("span",{className:"col-span-6 text-sm flex items-center font-semibold",children:"Latitude :"}),e("span",{className:"col-span-6 text-sm",children:e("span",{className:"font-semibold text-sm",children:r==null?void 0:r.latitude})})]}),o("span",{className:"col-span-12 grid grid-cols-12",children:[e("span",{className:"col-span-6 text-sm flex items-center font-semibold",children:"Longitude :"}),e("span",{className:"col-span-6 text-sm",children:e("span",{className:"font-semibold text-sm",children:r==null?void 0:r.longitude})})]})]})}),e("span",{className:" col-span-12 font-semibold text-center my-4 px-2",children:e("button",{type:"submit",className:"px-4 py-1.5 mr-4 text-sm text-white rounded-sm shadow-md bg-green-500 hover:bg-green-600 focus:bg-green-600",children:"Forward"})})]})]})]})})]}),e(be,{isOpen:ae,onAfterOpen:re,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center overflow-auto",contentLabel:"Example Modal",children:o("div",{className:" relative rounded-lg shadow-xl border-2 border-gray-50 px-0 animate__animated animate__zoomIn animate__faster",style:{width:"95vw",height:"80vh"},children:[e("div",{className:"absolute top-2 z-40 bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:E,children:e(ve,{fontSize:10})}),F=="image"&&e("div",{className:"w-full h-full flex items-center justify-center",children:e("img",{src:ne,alt:"",srcset:""})}),F=="camera"&&o("div",{className:"mt-6 w-full",children:[e("video",{ref:f,autoPlay:!0,className:""}),e("canvas",{ref:N,style:{display:"none"}}),e("div",{className:"w-full text-center my-4",children:e("button",{onClick:()=>(me(),R()),className:"text-sm px-4 py-1 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 text-white rounded-md shadow-md",children:"Capture"})}),v&&o(C,{children:[e("img",{src:v,alt:"Captured Image"}),e("div",{className:"w-full text-center my-4",children:e("button",{onClick:()=>ce(),className:"text-sm px-4 py-1 bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 text-white rounded-md shadow-md",children:"Save"})})]})]})]})})]})};export{We as default};