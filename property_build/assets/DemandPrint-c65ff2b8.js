import{H as S,j as e,cu as w,n as r,cy as P,e as f,bv as g,r as n,A as D,aI as A,B as R,S as T,bC as F}from"./index-a8a14e0c.js";class H extends S.Component{render(){var o,t;const s=(o=this.props)==null?void 0:o.demandDetails;let a=(t=this==null?void 0:this.props)==null?void 0:t.ulbData;return e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsx("div",{className:"flex items-center justify-center text-black mb-8 max-sm:mx-2",id:"printableArea",children:e.jsxs("div",{className:"container md:w-[70%] border-2 border-dashed border-black py-4 px-3 text-sm ",children:[e.jsx("img",{src:a==null?void 0:a.state_logo,alt:"",srcset:"",className:"absolute top-[20%] left-[40%] max-sm:left-10  h-[40vh] backImage opacity-10"}),e.jsxs("div",{className:"w-full text-center flex flex-col mb-2",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-x-4 mb-2",children:[e.jsx("img",{src:a==null?void 0:a.ulb_logo,alt:"Logo",srcset:"",className:"h-16 w-16"}),e.jsx("span",{className:"text-3xl font-bold uppercase",children:a==null?void 0:a.ulb_name})]}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("div",{className:" border-2 font-bold border-black px-10 py-2 text-xl w-max",children:"Property Tax Demand"})})]}),e.jsxs("div",{className:"flex justify-between font-bold",children:[e.jsxs("div",{children:[e.jsxs("div",{children:["Holding No. : ",e.jsx("span",{className:"font-normal",children:r(s==null?void 0:s.new_holding_no)})]}),e.jsxs("div",{children:["Department / Section : ",e.jsx("span",{className:"font-normal",children:"Revenue Section"})]}),e.jsxs("div",{children:["Account Description : ",e.jsx("span",{className:"font-normal",children:"Holding Tax & Others"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:["Date : ",e.jsx("span",{className:"font-normal",children:P(s==null?void 0:s.date)})]}),e.jsxs("div",{children:["Ward No :",e.jsx("span",{className:"font-normal",children:r(s==null?void 0:s.wardNo)})]}),e.jsxs("div",{children:["New Ward No :",e.jsx("span",{className:"font-normal",children:r(s==null?void 0:s.newWardNo)})]})]})]}),e.jsxs("div",{className:"mt-4 font-bold",children:[e.jsxs("div",{children:["Owner Name : ",e.jsx("span",{className:"font-normal",children:r(s==null?void 0:s.ownerName)})]}),e.jsxs("div",{children:["Address : ",e.jsx("span",{className:"font-normal",children:r(s==null?void 0:s.address)})]})]}),e.jsx("div",{className:"mt-4 overflow-auto",children:e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 border-[1px] border-black",children:"Demand From"}),e.jsx("th",{className:"p-2 border-[1px] border-black",children:"Demand Upto"}),e.jsx("th",{className:"p-2 border-[1px] border-black",children:"Demand (₹)"}),e.jsx("th",{className:"p-2 border-[1px] border-black",children:"RWH Penalty (₹)"}),e.jsx("th",{className:"p-2 border-[1px] border-black",children:"Already Paid (₹)"}),e.jsx("th",{className:"p-2 border-[1px] border-black",children:"Total (₹)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.duesFrom)}),e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.duesTo)}),e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.demand)}),e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.rwhPenalty)}),e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.alreadyPaid)}),e.jsx("td",{className:"p-2 border-[1px] border-black",children:r(s==null?void 0:s.total)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 font-bold border-[1px] border-black text-end",colSpan:2,children:"Total"}),e.jsx("td",{className:"p-2 font-bold border-[1px] border-black",children:r(s==null?void 0:s.demand)}),e.jsx("td",{className:"p-2 font-bold border-[1px] border-black",children:r(s==null?void 0:s.rwhPenalty)}),e.jsx("td",{className:"p-2 font-bold border-[1px] border-black",children:r(s==null?void 0:s.alreadyPaid)}),e.jsx("td",{className:"p-2 font-bold border-[1px] border-black",children:r(s==null?void 0:s.total)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-black font-bold p-2",colSpan:2,children:"1% Penalty"}),e.jsx("td",{className:"border-[1px] border-black font-bold p-2",colSpan:4,children:f(s==null?void 0:s.onePercPenalty)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-black font-bold p-2",colSpan:2,children:"Total Payable"}),e.jsx("td",{className:"border-[1px] border-black font-bold p-2",colSpan:4,children:f(s==null?void 0:s.totalPayable)})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-black font-bold p-2",colSpan:2,children:"Total Demand (in words)"}),e.jsxs("td",{className:"border-[1px] border-black font-bold p-2",colSpan:4,children:[" ",r(s==null?void 0:s.totalPayableInWords)," Rupees Only"]})]})]})})]})})]})}}const L=()=>{const d=g(),{demandReciept:s}=F(),[a,o]=n.useState(),[t,i]=n.useState(!1),[N,c]=n.useState(!1),[u,y]=n.useState(!0),[k,v]=n.useState(null);return n.useEffect(()=>{i(!1),c(!0),D.post(s,{propId:d==null?void 0:d.id},A()).then(l=>{var x,b,p,m,h,j;c(!1),y((x=l==null?void 0:l.data)==null?void 0:x.status),(b=l==null?void 0:l.data)!=null&&b.status&&(o((m=(p=l==null?void 0:l.data)==null?void 0:p.data)==null?void 0:m.dueReceipt),v((j=(h=l==null?void 0:l.data)==null?void 0:h.data)==null?void 0:j.ulbDetails))}).catch(l=>{c(!1),i(!0)})},[]),N?e.jsx(e.Fragment,{children:e.jsx(R,{})}):t?e.jsx(T,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):u?e.jsx(e.Fragment,{children:e.jsx(H,{demandDetails:a,ulbData:k})}):e.jsx("div",{className:"w-full mt-20 text-center",children:e.jsx("span",{className:"text-3xl text-red-500 font-semibold px-4 py-2",children:"No demand found for this property!"})})};export{L as default};