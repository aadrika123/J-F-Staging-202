import{M as k,g as E,r as c,h as q,i as L,d as u,e as f,f as a,F as T,j as e,k as j,n,l as y,m as _,A as O}from"./index-a73fe6ed.js";k.setAppElement("#root");function V(){var p,g,x,h;const{api_BanquetMarriageApplicationFullDetailById:N,api_BanquetMarriageViewDocuments:b}=O();E("Agency Details");const[r,w]=c.useState();c.useState(),q();const{id:i}=L(),[s,A]=c.useState(),[m,d]=c.useState(!1),[P,v]=c.useState(!1),[R,D]=c.useState(""),S=()=>v(!0);c.useEffect(()=>{M()},[]);const M=()=>{console.log("before document fetch ",i);let t={applicationId:i};u.post(b,t,f()).then(l=>{var o;console.log("document list at saf application details 12",l),w((o=l==null?void 0:l.data)==null?void 0:o.data)}).catch(l=>{console.log("error at saf application details ",l)})},B=t=>{console.log("incoming doc url modal => ",t),D(t),S()},I=()=>{d(!0),window.localStorage.getItem("token"),u.post(N,{applicationId:i,type:"Active"},f()).then(function(t){console.log("agency application details",t.data.data),A(t.data.data),d(!1)}).catch(function(t){console.log("agency application details error...",t),d(!1)})};return c.useEffect(()=>{I()},[]),a(T,{children:[m&&e(j,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:a("div",{className:"col-span-12 rounded-lg  p-4",children:[e("h1",{className:"mb-2 pl-2 font-bold text-3xl text-gray-700 uppercase underline text-center",children:n((g=(p=s==null?void 0:s.fullDetailsData)==null?void 0:p.cardArray)==null?void 0:g.headerTitle)}),a("h1",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:["Application No. -",n((s==null?void 0:s.application_no)||"")]}),a("div",{className:"p-4",children:[a("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(y,{className:"inline"})," Basic Details"]}),(h=(x=s==null?void 0:s.fullDetailsData)==null?void 0:x.dataArray)==null?void 0:h.map(t=>{var l;return e("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded-lg shadow-xl p-4 mt-4",children:(l=t==null?void 0:t.data)==null?void 0:l.map(o=>a("div",{className:"pl-4 p-2",children:[a("h1",{className:"font-bold text-sm",children:[n((o==null?void 0:o.value)||"N/A")," "]}),e("h1",{className:"text-gray-500 text-xs",children:n(o==null?void 0:o.displayString)})]}))})})]})]})}),a("div",{className:"container mx-auto mt-10  px-5 pb-48  rounded-lg",children:[a("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e(y,{className:"inline"})," Document List"]}),e("div",{className:"py-0 shadow-xl mt-3",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:a("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-white",children:a("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Document Name"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"View"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Status"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Remarks"})]})}),a("tbody",{children:[(r==null?void 0:r.length)==0&&!m&&e("tr",{className:"mt-10 py-20",children:e("td",{colSpan:5,className:"text-center",children:e("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:"No Document Found !!"})})}),r==null?void 0:r.map((t,l)=>e(_,{openModal:B,docList:t,index:l}))]})]})})})})]})]})}export{V as default};