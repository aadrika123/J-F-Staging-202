import{j as e}from"./mui-105b4636.js";import{a as _,r as x,f as k}from"./router-894402c5.js";import{n as o,V as j,A as y,b as A,q as F,B as S,X as T,p as M}from"./index-2fc866b5.js";import{R as P}from"./index-464f85d7.js";import{s as R}from"./swachhBharat-9ce9fd2e.js";import{Q as C}from"./QrCode-5b4e43c4.js";import{P as q}from"./PropertyApiList-a2dc8c9c.js";import{S as E}from"./ServerErrorCard-d7a88fd0.js";import{e as B}from"./Styles-a2fa8249.js";import"./react-40db4358.js";import"./axios-67d8a945.js";import"./reactIcons-58c2a0d8.js";import"./redux-b8f144fa.js";import"./i18next-e2c66b9b.js";import"./index-b56dcfd5.js";const L="/assets/signature-3608f068.png";class Q extends _.Component{render(){var m,b,d,p,h,n,a;const s=(m=this==null?void 0:this.props)==null?void 0:m.famDetails,r=(d=(b=this==null?void 0:this.props)==null?void 0:b.famDetails)==null?void 0:d.ulbDetails,i=[`कर निर्धारण की सूची, ${r==null?void 0:r.website} पर प्रदर्शित है।`,"नियमावली कंडिका 11.4 के आलोक में वर्षाजल संरक्षण की व्यवस्था नहीं होने के कारण अतिरिक्त गृह कर लगाया जायेगा जो सम्पति कर का 50% होगा । हिदायत दी जाती है कि, वर्षाजल संरक्षण संरचना लगा कर निगम को सूचित करे तथा अतिरिक्त गृह कर से राहत पायें ।","प्रत्येक वित्तीय वर्ष में सम्पति कर का भुगतान त्रैमासिक देय होगा ।","किसी देय घृति को निर्दिष्ट समयावधि (प्रत्येक तिमाही) के अन्दर या उसके पूर्व नहीं चुकाया जाता है, तो 1% प्रतिमाह की दर से साधारण ब्याज देय होगा।",`${r==null?void 0:r.ulb_name} द्वारा संग्रहित इस सम्पति कर इन इमरतों/तोंढांचों को कोई कानूनी हैसियत प्रदान नहीं करता है और/या न ही अपने मालिकों /कों दखलकार को कोई कानूनी अधिकार प्रदान करता है। `].map((t,c)=>e.jsxs("li",{children:[e.jsxs("span",{children:[c+1,". "]}),e.jsx("span",{children:t})]}));let l;return s!=null&&s.holding_no?l=(p=s==null?void 0:s.holding_no)==null?void 0:p.split(""):l=(h=s==null?void 0:s.pt_no)==null?void 0:h.split(""),l==null||l.map(t=>e.jsx("div",{className:"px-2 py-1 border-2 border-black text-xs",children:t})),e.jsx(e.Fragment,{children:e.jsx("div",{id:"printableArea",children:e.jsx("div",{className:"flex items-center justify-center text-black",children:e.jsxs("div",{className:"container w-[70%] border-2 border-dashed m-2 overflow-x-hidden border-black py-4 px-3",children:[e.jsx("img",{src:r==null?void 0:r.state_logo,alt:"",srcset:"",className:"absolute top-[20%] left-[27%] h-[40vh] backImage opacity-10 "}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-x-4",children:[e.jsx("img",{src:r==null?void 0:r.ulb_logo,alt:"Logo",srcset:"",className:"h-16 w-16"}),e.jsx("span",{className:"text-3xl font-bold uppercase",children:r==null?void 0:r.ulb_name})]}),e.jsx("div",{className:"w-full flex justify-center mt-2",children:e.jsx("div",{className:"grid grid-cols-6 w-max",children:e.jsx("div",{className:"col-span-6 uppercase border-2 font-bold border-black px-8 py-1 text-md",children:"Final Assessment Memo"})})})]}),e.jsxs("div",{children:[e.jsx("hr",{className:"border-black mt-6 mb-2"}),e.jsx("div",{className:"font-semibold text-xs text-center",children:"झारखण्ड नगरपालिका अधिनियम-2011 की धारा 152 (3) के अन्तर्गत स्वनिर्धारित किये गये संम्पती कर की सूचना।"}),e.jsx("hr",{className:"border-black mb-6 mt-2"})]}),e.jsxs("div",{className:"flex justify-between mt-4 font-semibold gap-2",children:[e.jsxs("div",{className:"text-start text-xs w-[65%]",children:["Mr/Mrs/Ms: ",e.jsxs("span",{className:"font-normal text-xs",children:[o(s==null?void 0:s.owner_name)," ",o(s==null?void 0:s.relation_type)," ",o(s==null?void 0:s.guardian_name)]})," ",e.jsx("br",{}),"Address: ",e.jsx("span",{className:"font-normal text-xs",children:o(s==null?void 0:s.prop_address)})]}),e.jsxs("div",{className:"text-left text-xs w-[35%]",children:["Memo No.: ",e.jsx("span",{className:"font-normal",children:o(s==null?void 0:s.memo_no)})," ",e.jsx("br",{}),"Date: ",e.jsx("span",{className:"font-normal",children:o(s==null?void 0:s.memo_date)})," ",e.jsx("br",{}),"Effective: ",e.jsxs("span",{className:"font-normal",children:[(s==null?void 0:s.from_qtr)==1&&e.jsx(e.Fragment,{children:"First"}),(s==null?void 0:s.from_qtr)==2&&e.jsx(e.Fragment,{children:"Second"}),(s==null?void 0:s.from_qtr)==3&&e.jsx(e.Fragment,{children:"Third"}),(s==null?void 0:s.from_qtr)==4&&e.jsx(e.Fragment,{children:"Fourth"})," Quarter ",o(s==null?void 0:s.from_fyear)]})," ",e.jsx("br",{})]})]}),e.jsx("div",{className:"text-xs mt-2",children:e.jsxs("p",{children:["एतद् द्वारा आपको सूचित किया जाता है कि आपका नया गृह सं॰ - ",e.jsx("span",{className:"font-semibold",children:s!=null&&s.holding_no?s==null?void 0:s.holding_no:s==null?void 0:s.pt_no})," वार्ड सं॰ ",e.jsx("span",{className:"font-semibold",children:o(s==null?void 0:s.ward_no)})," हुआ है, आपके स्व॰ निर्धारण घोषणा पत्र के आधार पर वार्षिक किराया मूल्य ",e.jsx("span",{className:"font-semibold",children:j(s==null?void 0:s.arv)}),"/- निर्धारित किया गया है । इसके अनुसार प्रति तिमाही कर निम्न प्रकार होगा।"]})}),((n=s==null?void 0:s.taxTable)==null?void 0:n.length)>0&&e.jsxs("table",{className:"text-xs font-semibold w-full mt-1",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border-2 border-black px-1 w-[3%]",children:"Sl No."}),e.jsx("td",{className:"border-2 border-black px-1 w-auto",children:"Particulars"}),e.jsx("td",{className:"border-2 border-black px-1 w-[16%]",children:"Quarter/Financial Year"}),e.jsx("td",{className:"border-2 border-black px-1 w-[16%]",children:"Based on the Self Assessment"}),e.jsx("td",{className:"border-2 border-black px-1 w-[16%]",children:"On the basis of ULB Calculation"}),e.jsx("td",{className:"border-2 border-black px-1 w-[9%]",children:"Difference Amount "})]}),(a=s==null?void 0:s.taxTable)==null?void 0:a.map((t,c)=>{var g,f,v,w;return e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[c!=((g=s==null?void 0:s.taxTable)==null?void 0:g.length)-1&&e.jsx("td",{className:"border-2 border-black px-1",children:c+1}),e.jsx("td",{colSpan:c==((f=s==null?void 0:s.taxTable)==null?void 0:f.length)-1&&3,className:`${c==((v=s==null?void 0:s.taxTable)==null?void 0:v.length)-1&&"text-end"} border-2 border-black px-1`,children:o(t==null?void 0:t.Particulars)}),c!=((w=s==null?void 0:s.taxTable)==null?void 0:w.length)-1&&e.jsx("td",{className:"border-2 border-black px-1",children:o(t==null?void 0:t.quarterFinancialYear)}),e.jsx("td",{className:"border-2 border-black px-1",children:j(t==null?void 0:t.basedOnSelfAssess)}),e.jsx("td",{className:"border-2 border-black px-1",children:j(t==null?void 0:t.basedOnUlbCalc)}),e.jsx("td",{className:"border-2 border-black px-1",children:j(t==null?void 0:t.diffAmt)})]})})})]}),e.jsxs("div",{className:"mt-4 w-full flex flex-row justify-between items-end",children:[e.jsx("div",{children:e.jsx(C,{size:"70",url:window.location.href})}),e.jsxs("div",{className:"flex flex-col justify-end items-center",children:[e.jsx("img",{src:L,alt:"",srcset:"",className:"w-[15vw]"}),e.jsx("p",{className:"text-md font-semibold",children:"Deputy Municipal Commissioner"}),e.jsxs("p",{className:"text-xs",children:[r==null?void 0:r.ulb_name,", ",r==null?void 0:r.district]})]})]}),e.jsxs("div",{className:"text-xs mt-4 ",children:[e.jsx("div",{className:"font-semibold my-2",children:"Note:-"}),e.jsx("ol",{className:"w-full flex flex-col gap-x-2 pl-10",children:i})]}),e.jsx("div",{className:"flex justify-center items-center mt-6",children:e.jsx("img",{src:R,alt:"",className:"h-10 opacity-70"})})]})})})})}}const ee=()=>{const u=x.useRef(),s=k(),{api_samReciept:r}=q(),[N,i]=x.useState(!1),[l,m]=x.useState(),[b,d]=x.useState(!1),[p,h]=x.useState("");return x.useEffect(()=>{setTimeout(()=>{i(!1)},1e4),i(!0),y.post(r,{memoId:s==null?void 0:s.id},A()).then(n=>{var a,t,c;(a=n==null?void 0:n.data)!=null&&a.status?m((t=n==null?void 0:n.data)==null?void 0:t.data):(d(!0),h(F((c=n==null?void 0:n.data)==null?void 0:c.message))),i(!1)}).catch(n=>{i(!1),d(!0)})},[]),N?e.jsx(e.Fragment,{children:e.jsx(S,{})}):b?e.jsx(E,{title:"Server is busy",desc:p,buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs("div",{children:[e.jsx(T,{position:"top-right",autoClose:2e3}),e.jsx(P,{trigger:()=>e.jsx("div",{className:"z-10 fixed bottom-10 text-center  justify-center items-center  w-screen",children:e.jsxs("button",{className:B,children:[e.jsx(M,{className:"inline text-lg"}),"print"]})}),content:()=>u.current}),e.jsx(Q,{ref:u,famDetails:l})]})};export{ee as default};