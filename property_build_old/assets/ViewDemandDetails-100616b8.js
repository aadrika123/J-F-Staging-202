import{bt as le,r,c as xe,u as re,k as ae,j as e,B as ce,S as ie,aY as ne,aI as oe,n as l,b0 as pe,b1 as x,b2 as de,i as he,f as Y,b3 as be,A as ye,aH as me,aX as fe}from"./index-e5a69d81.js";import"./RazorpayPaymentScreen-c0309dea.js";import{T as G}from"./TopTabs-cca05a30.js";function _e(n){var y,m,f,j,N,g,u,v,w,A,_,z,P,S,R,T,C,B,F,L,E,H,V,k,I,O,$,W,Q,U;const{id:c,location:je,tabIndex:Ne}=le();console.log("param demand screen...",c);const{roles:i}=r.useContext(xe),{propertyGenerateOrderId:ge,api_getsafDemandById:K}=fe(),o=re();ae("SAF Demand Details");const[X,ue]=r.useState(!1),[s,Z]=r.useState();r.useState("");const[d,J]=r.useState(""),[h,p]=r.useState(!1),[D,b]=r.useState(!1),ee=["BACK OFFICE"],se=r.useMemo(()=>Array.isArray(i)&&i.some(t=>ee.includes(t)),[i]),te=()=>{p(!0),b(!1),ye.post(K,{id:c},me()).then(function(t){var a,q,M;console.log("view demand for my saf..",(a=t==null?void 0:t.data)==null?void 0:a.data),J((q=t==null?void 0:t.data)==null?void 0:q.safNo),Z((M=t==null?void 0:t.data)==null?void 0:M.data),p(!1)}).catch(function(t){console.log("==2 details by id error...",t),b(!0),p(!1)})};return r.useEffect(()=>{te()},[]),h?e.jsx(e.Fragment,{children:e.jsx(ce,{})}):D?e.jsx(ie,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("roles in pd => ",i),e.jsxs(e.Fragment,{children:[e.jsx(ne,{position:"top-right",autoClose:2e3}),h&&e.jsx(oe,{}),e.jsxs("div",{className:"w-full mx-auto md:px-6",children:[e.jsx("div",{className:"pt-10 hidden sm:block",children:e.jsx(G,{payButton:(s==null?void 0:s.paymentStatus)!==1&&(s==null?void 0:s.can_pay)===!0,payableAmount:(y=s==null?void 0:s.amounts)==null?void 0:y.payableAmount,isPayable:(m=s==null?void 0:s.amounts)==null?void 0:m.isPayable,title:"Demand Details",type:"application",id:c,safNo:d,active:"demand"})}),e.jsx("div",{className:"pt-10 block sm:hidden",children:e.jsx(G,{payButton:(s==null?void 0:s.paymentStatus)!==1&&(s==null?void 0:s.can_pay)===!0,payableAmount:(f=s==null?void 0:s.amounts)==null?void 0:f.payableAmount,title:"",type:"application",id:c,safNo:d,active:"demand"})}),se&&(s==null?void 0:s.paymentStatus)!==1&&(s==null?void 0:s.can_pay)===!0&&e.jsx("div",{className:"border-2 border-amber-500 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>o(`/waiver-demand-screen/${c}/saf`),children:"Waive Off Demand"}),(s==null?void 0:s.paymentStatus)===1&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:"All Demand Paid"}),(s==null?void 0:s.tran_no)!=null&&e.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>o(`/paymentReceipt/${encodeURIComponent(s==null?void 0:s.tran_no)}/saf`),children:"View Reciept"})]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((j=s==null?void 0:s.basicDetails)==null?void 0:j.saf_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Application No.(Saf No)"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((N=s==null?void 0:s.basicDetails)==null?void 0:N.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:l((g=s==null?void 0:s.basicDetails)==null?void 0:g.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:l((u=s==null?void 0:s.basicDetails)==null?void 0:u.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((v=s==null?void 0:s.basicDetails)==null?void 0:v.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((w=s==null?void 0:s.basicDetails)==null?void 0:w.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((A=s==null?void 0:s.basicDetails)==null?void 0:A.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[l((_=s==null?void 0:s.basicDetails)==null?void 0:_.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:l((z=s==null?void 0:s.basicDetails)==null?void 0:z.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((P=s==null?void 0:s.basicDetails)==null?void 0:P.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),e.jsx("div",{className:"",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-10",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[e.jsx("img",{src:pe,alt:"pin",className:"w-5 inline"})," Tax Details"]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Total Payable Amount"}),e.jsx("div",{className:"flex-initial px-2",children:"= "}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:" ( Tax Amount"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Late Assessment Penalty"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"1% Penalty )"}),e.jsx("div",{className:"flex-initial px-2",children:"-"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:" ( Rebate"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Special Rebate )"})]}),(s==null?void 0:s.paymentStatus)!=1&&e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Tax Amount (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Late Assessment Penalty (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% Penalty (₹)"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Rebate( ",(S=s==null?void 0:s.amounts)==null?void 0:S.rebatePerc,"% in Rs)"]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Special Rebate( ",(R=s==null?void 0:s.amounts)==null?void 0:R.specialRebatePerc,"% in Rs)"]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payable Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x((T=s==null?void 0:s.amounts)==null?void 0:T.totalTax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x((C=s==null?void 0:s.amounts)==null?void 0:C.lateAssessmentPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x((B=s==null?void 0:s.amounts)==null?void 0:B.totalOnePercPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x((F=s==null?void 0:s.amounts)==null?void 0:F.rebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x((L=s==null?void 0:s.amounts)==null?void 0:L.specialRebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x((E=s==null?void 0:s.amounts)==null?void 0:E.payableAmount)})]})})]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"ARV"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Effect From"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Holding Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Water Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Conservancy/Latrine Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Education Cess"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Health Cess"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"RWH Penalty"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarterly Tax"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Ruleset"})]})}),e.jsx("tbody",{className:"text-sm",children:(H=s==null?void 0:s.taxDetails)==null?void 0:H.map((t,a)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.arv)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l(t==null?void 0:t.qtr),"/",l(t==null?void 0:t.fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.holding_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.water_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.latrine_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.education_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.health_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.additional_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.amount)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left  ",children:[" ",e.jsx("span",{className:`${(t==null?void 0:t.ruleSet)==="RuleSet3"?"bg-green-100":"bg-red-100"} px-2 py-1 rounded-lg`,children:(t==null?void 0:t.ruleSet)==="RuleSet3"?"Current":"Old"})," "]})]}))})]})]}),((k=(V=s==null?void 0:s.amounts)==null?void 0:V.rebates)==null?void 0:k.length)>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-10 text-md font-semibold",children:"Rebate Description"}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Rebate Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"percent(%)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:(O=(I=s==null?void 0:s.amounts)==null?void 0:I.rebates)==null?void 0:O.map((t,a)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.keyString)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[x(t==null?void 0:t.rebatePerc),"%"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x(t==null?void 0:t.rebateAmount)})]}))})]})]}),e.jsxs("div",{className:"mt-10",children:[(s==null?void 0:s.details)&&e.jsxs("div",{className:"w-[100vw] ",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-md mt-10",children:[e.jsx("img",{src:de,alt:"pin",className:"w-5 inline"})," Tax Description of Annual Rental Value - As Per Old Rule (Effect Upto 31-03-2016)"]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Annual Rental Value (ARV)"}),e.jsx("div",{className:"flex-initial px-2",children:"="}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Builtup Area"}),e.jsx("div",{className:"flex-initial px-2",children:"x"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Rental Rate"})]}),e.jsxs("table",{className:" leading-normal mt-2",children:[e.jsx("thead",{className:`font-bold text-left text-sm ${(s==null?void 0:s.paymentStatus)===1?"bg-red-100":"bg-white"} text-gray-600`,children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"ARV"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter / Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Holding Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Water Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Latrine/Conservancy Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Education Cess (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Health Cess (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Additional Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarterly Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Adjusted Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Balance"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Due Date"}),(s==null?void 0:s.can_pay)&&e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% penalty (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:($=s.details)==null?void 0:$.map((t,a)=>e.jsxs("tr",{className:`${(s==null?void 0:s.paymentStatus)===1?"bg-red-100":"bg-white"} shadow-lg border-b border-gray-200`,children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.holding_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.water_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.latrine_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.education_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.health_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.additional_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.adjust_amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.balance)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:he(t==null?void 0:t.due_date)}),(s==null?void 0:s.can_pay)&&e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l(t==null?void 0:t.onePercPenaltyTax),"(",l(t==null?void 0:t.onePercPenalty),"%)"]})]}))})})]})]}),(s==null?void 0:s.paymentStatus)!==1&&(s==null?void 0:s.can_pay)===!0&&e.jsx("div",{className:"mt-10 flex",children:!X&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-left flex-1",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-gray-600 text-xl",children:"Total Payable Amount  "}),e.jsx("span",{className:"text-3xl font-bold ml-20",children:Y((W=s==null?void 0:s.amounts)==null?void 0:W.payableAmount)})]})}),e.jsx("div",{className:"text-right flex-1",children:e.jsxs("button",{onClick:()=>o(`/property-payment/${c}/${(n==null?void 0:n.type)=="holding"?"holding":"saf"}`),type:"button",className:"ml-4 font-bold px-6 py-1 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:[(Q=s==null?void 0:s.amounts)!=null&&Q.isPayable?"Pay":"Submit"," ",Y((U=s==null?void 0:s.amounts)==null?void 0:U.payableAmount)," ",e.jsx("span",{children:e.jsx(be,{className:"inline font-bold text-xl"})})," "]})})]})}),e.jsx("div",{className:"h-20 w-full"})]})]})})]}),e.jsx("div",{className:"w-full h-40"})]}))}export{_e as default};