import{l as a,x as se,v as te,m as re,H as de,W as ne,y as oe,Y as ae,z as j,B as le,q as g,k as r,o as f,j as s,D as ce,Q as v,h as c,Z as me}from"./index-db77734d.js";import{W as xe}from"./WaterTopButtons-2680e909.js";function Ne(ie){var R,I,U,S,E,P,k,C,L,T,W,D;const[q,N]=a.useState(!1),[e,B]=a.useState(),[d,p]=a.useState(),[M,V]=a.useState(),[$,G]=a.useState(0),[m,b]=a.useState(),[w,i]=a.useState(!1),[_,he]=a.useState(!1),[Y,y]=a.useState(!1),{notify:u}=a.useContext(se),{id:x}=te(),z=re();de("Water Consumer Demand Details");const{api_waterApprovedApplicationDetails:H,api_calculateMeterFixedReading:O,api_waterListDemand:Q,api_waterGenerateDemand:Z,header:h}=ne(),J=t=>{if(console.log("Function called",t),(e==null?void 0:e.connectionId)==3&&t.demandUpto=="")return y("Please select demand up date");if((e==null?void 0:e.connectionId)==1&&(t.demandUpto==""||t.meterReading==""||t.meterImage==""))return y("Meter Image Required");let o=new FormData;o.append("consumerId",x),o.append("demandUpto",t.demandUpto),o.append("finalRading",t.meterReading||""),o.append("document",M||""),console.log("Final Payload of Meter Reading",o),g.post(Z,o,h).then(l=>{l.data.status?(G(ee=>ee+1),console.log("Demand Generate Date Saved",l),u(l.data.message,"success"),window.location.reload()):(u(l.data.message,"error"),console.log("Error Demand Generate",l),i(l.data.message))}).catch(l=>{u("Something went wrong!","error"),console.log("Exception While going to generate Demand",l.response.data),i(l.response.data)})};oe().shape({meterReading:ae().required("Enter Meter Reading").min(((R=d==null?void 0:d.meterDetails)==null?void 0:R.final_meter_reading)+1||0+1e-6,`Reading must be greater previous ${((I=d==null?void 0:d.meterDetails)==null?void 0:I.final_meter_reading)||1e-6}`),meterImage:j().required("Select Image"),demandUpto:j().required("Select Upto Data")});const n=le({enableReinitialize:!0,initialValues:{demandUpto:"",meterReading:"",meterImage:""},onSubmit:(t,{resetForm:o})=>{J(t),o()}}),K=t=>{let o=t.target.name,l=t.target.value;console.log("formik.values.meterReading",l),i(!1),y(""),o=="meterReading"&&n.setFieldValue("meterReading",me(l,n.values.meterReading,20)),o=="meterImage"&&V(t.target.files[0]),console.log("docPath",M)};console.log("formik.values.demandUpto",n.values.demandUpto);const A=a.useMemo(()=>()=>{if((e==null?void 0:e.connectionId)!=4)return null;g.post(O,{consumerId:x,uptoData:n.values.demandUpto},h).then(t=>{t.data.status?(b(t.data.data),console.log("this",t)):(i(t.data.message),b(!1))}).catch(t=>{b(!1),console.log("Error while while calculate",t)})},[n.values.demandUpto]);a.useEffect(()=>{A()},[A]);const X=()=>{N(!0),g.post(H,{id:x},h).then(function(t){console.log("water Approved Application Details",t.data.data),B(t.data.data),N(!1)}).catch(function(t){console.log("Error : water Approved Application Details",t),N(!1)})},F=()=>{g.post(Q,{ConsumerId:x},h).then(t=>{t.data.status?(console.log("Fetched Water Demand List",t.data.data),p(t.data.data)):p(!1)}).catch(t=>{console.log("Exception while fetching Water Demand",t)})};return a.useEffect(()=>{F(),X()},[x,$]),console.log("applicationFullData?.connectionId",e==null?void 0:e.connectionId,typeof(e==null?void 0:e.connectionId)),r(f,{children:[q&&s(ce,{}),s(xe,{active:"demand",consumerNo:e==null?void 0:e.consumer_no}),s("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:s("div",{className:"col-span-12 rounded-lg",children:r("div",{className:"p-4",children:[r("div",{className:"",children:[r("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[s(v,{className:"inline"})," Basic Details"]}),s("div",{className:"py-6 mt-2 bg-white border rounded-lg shadow-xl p-4",children:r("div",{className:"flex max-sm:flex-col max-sm:space-y-4 pl-4 ",children:[r("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-sm",children:e!=null&&e.ulb_name?e==null?void 0:e.ulb_name:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"ULB Name"})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.ward_name?e==null?void 0:e.ward_name:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.consumer_no?e==null?void 0:e.consumer_no:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Consumer No"})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.connection_through?e==null?void 0:e.connection_through:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(e==null?void 0:e.connection_through)=="SAF"?r("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.saf_no?e==null?void 0:e.saf_no:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):r("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.holding_no?e==null?void 0:e.holding_no:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Holding No"})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.owner_char_type?e==null?void 0:e.owner_char_type:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]})]})})]}),d&&((U=d==null?void 0:d.consumerDemands)==null?void 0:U.length)!=0?r("div",{children:[r("div",{className:"flex max-sm:flex-col flex-wrap w-full space-x-0 my-5",children:[r("div",{className:"grow",children:[s("span",{className:"text-sm",children:"Total Dues :"})," ",r("span",{className:"font-semibold text-gray-700 text-lg",children:["₹ ",d==null?void 0:d.totalSumDemand]})]}),r("div",{className:"grow",children:[s("span",{className:"text-sm",children:"Due From :"})," ",r("span",{className:"font-semibold text-gray-700 text-lg",children:[c((S=d==null?void 0:d.consumerDemands[0])==null?void 0:S.demand_from,"YYYY-MM-DD").format("DD-MMM-yy")," "]})]}),r("div",{className:"grow",children:[s("span",{className:"text-sm",children:"Due Upto :"})," ",r("span",{className:"font-semibold text-gray-700 text-lg",children:[c((P=(E=d==null?void 0:d.consumerDemands)==null?void 0:E.at(-1))==null?void 0:P.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy")," "]})]}),r("div",{className:"grow",children:[s("span",{className:"text-sm",children:"Total Due Months :"})," ",s("span",{className:"font-semibold text-gray-700 text-lg",children:(k=d==null?void 0:d.consumerDemands)==null?void 0:k.length})]})]}),((C=d==null?void 0:d.consumerDemands)==null?void 0:C.length)!=0&&r("div",{className:"mt-6 mx-3 flex max-sm:flex-col space-x-8 max-sm:space-x-0",children:[r("div",{className:"float-left flex max-sm:flex-col space-x-8 max-sm:space-x-0",children:[s("p",{className:"text-gray-600 text-xl font-semibold",children:"Total Payable Amount"}),r("p",{className:"text-black text-2xl font-semibold",children:["₹ ",d==null?void 0:d.totalSumDemand]})]}),s("div",{className:"float-right",children:s("button",{onClick:()=>z(`//water-demand-payment/${x}`),className:"bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded shadow-2xl text-white text-sm max-sm:mt-3",children:"Pay Demand"})})]}),s("br",{}),r("div",{className:"mt-5",children:[r("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[s(v,{className:"inline"})," Demand Details"]}),s("div",{className:"overflow-auto",children:r("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[s("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:r("tr",{children:[s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand From"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Upto"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Amount"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Connection Type"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payable Amount "})]})}),s("tbody",{className:"text-sm",children:s(f,{children:(L=d==null?void 0:d.consumerDemands)==null?void 0:L.map((t,o)=>r("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:o+1}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.demand_from?c(t==null?void 0:t.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.demand_upto?c(t==null?void 0:t.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.balance_amount?t==null?void 0:t.balance_amount:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.penalty?t==null?void 0:t.penalty:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.connection_type?t==null?void 0:t.connection_type:"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.amount?"₹ "+(t==null?void 0:t.amount):"N/A"})]}))})})]})})]})]}):s("div",{className:"w-full mt-20 text-center",children:s("span",{className:"text-xl text-red-500 border border-red-500 font-semibold px-4 py-2",children:"Demand Not Found !"})}),r("div",{className:"mt-5",children:[r("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[s(v,{className:"inline"})," Meter/Fixed Connection Details"]}),r("div",{className:"py-6 mt-2 border bg-white rounded-lg shadow-xl p-4 ",children:[r("div",{className:"flex space-x-5 max-sm:space-x-0 pl-4 max-sm:pl-0 ",children:[r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:(e==null?void 0:e.connectionName)||"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),(e==null?void 0:e.connectionId)!=3&&r(f,{children:[r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:((T=e==null?void 0:e.meterDetails)==null?void 0:T.meter_no)||"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Meter No."})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.lastMeterReading?e==null?void 0:e.lastMeterReading:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:"Last Meter Reading"})]})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semi bold text-md",children:[(W=e==null?void 0:e.meterDetails)!=null&&W.connection_date?c((D=e==null?void 0:e.meterDetails)==null?void 0:D.connection_date,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"," "]}),r("div",{className:"text-gray-500 text-xs",children:[e==null?void 0:e.connectionName," Connection Date"]})]})]}),(e==null?void 0:e.connectionId)==4&&s("div",{className:"py-6 mt-2",children:r("div",{className:"flex max-sm:flex-col space-x-5 max-sm:space-x-0 pl-4 ",children:[r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[c(e==null?void 0:e.demandFrom,"YYYY-MM-DD").format("DD-MMM-yy")+":"+c(e==null?void 0:e.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy")," "]}),s("div",{className:"text-gray-500 text-xs",children:"Period"})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[e==null?void 0:e.lastConsumedUnit," "]}),s("div",{className:"text-gray-500 text-xs",children:"Last Consumed Unit"})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[e==null?void 0:e.avgReading," "]}),s("div",{className:"text-gray-500 text-xs",children:"Avg. Reading (Per/Date)"})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[(m==null?void 0:m.diffInDays)||"N/A"," ",r("span",{className:"text-xs",children:["(",c(e==null?void 0:e.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy")," : ",c(n.values.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy"),")"]})," "]}),s("div",{className:"text-gray-500 text-xs",children:"Day Difference"})]})]})})]}),s("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:r("form",{onSubmit:n.handleSubmit,onChange:K,className:"p-4 relative",children:[r("div",{className:"flex max-sm:flex-col space-x-5 max-sm:space-x-0 pl-4 ",children:[(e==null?void 0:e.connectionId)!=3&&r(f,{children:[s("div",{className:"flex-1",children:r("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[r("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Upload Meter Image",s("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s("input",{...n.getFieldProps("meterImage"),type:"file",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Meter Reading"}),s("span",{className:"text-red-600 absolute text-xs",children:n.touched.meterImage&&n.errors.meterImage?n.errors.meterImage:null})]})}),s("div",{className:"flex-1",children:r("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[r("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Final Meter Reading ",s("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s("input",{...n.getFieldProps("meterReading"),disabled:(e==null?void 0:e.connectionId)==4,value:m==null?void 0:m.finalMeterReading,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 disabled:bg-gray-100 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Meter Reading"}),s("span",{className:"text-red-600 absolute text-xs",children:n.touched.meterReading&&n.errors.meterReading?n.errors.meterReading:null})]})})]}),s("div",{className:"flex-1",children:r("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[r("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:["Demand Upto Date ",s("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),s("input",{...n.getFieldProps("demandUpto"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),s("span",{className:"text-red-600 absolute text-xs",children:n.touched.demandUpto&&n.errors.demandUpto?n.errors.demandUpto:null})]})})]}),s("p",{className:"text-red-500 text-center font-semibold  ",children:w&&w}),r("p",{className:"text-red-500 text-center font-semibold  ",children:[Y&&Y,_&&_]}),s("div",{className:"flex justify-end max-sm:justify-center max-sm:w-full mr-5",children:s("button",{type:"submit",className:"bg-indigo-700 px-3 py-2 text-white rounded",children:"Generate Demand"})})]})})]}),s("div",{className:"mt-6",children:" "})]})})}),s("div",{className:"w-full h-60"})]})}export{Ne as default};