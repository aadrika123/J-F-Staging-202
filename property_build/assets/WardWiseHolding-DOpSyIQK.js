import{y as te,r as l,l as le,m as ne,p as de,A as v,aL as m,j as a,cN as ue,aM as ie,G as ce,bX as xe,bf as fe,bM as ve}from"./index-DwHujmir.js";const ge=()=>{const{get_MasterData:E,wardWiseHolding:w,yearList:T}=ve(),y=te(),[h,O]=l.useState();l.useState();const[c,U]=l.useState(),[V,g]=l.useState(!1),[me,S]=l.useState(!0),[s,q]=l.useState();le("Ward Wise Holding Report");const C="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md";ne({});const u=de({initialValues:{wardMstrId:"",year:""},onSubmit:e=>{P(5),x(1),F()}}),F=()=>{g(!0);let e={wardMstrId:u.values.wardMstrId,year:u.values.year.split("-")[0],perPage:j};v.post(w+"?page="+A,e,m()).then(t=>{var n,d,f,L,D,I,W,k,R;((n=t==null?void 0:t.data)==null?void 0:n.status)==!0&&(U((f=(d=t==null?void 0:t.data)==null?void 0:d.data)==null?void 0:f.data),Y((D=(L=t==null?void 0:t.data)==null?void 0:L.data)==null?void 0:D.total),Q((W=(I=t==null?void 0:t.data)==null?void 0:I.data)==null?void 0:W.current_page),X((R=(k=t==null?void 0:t.data)==null?void 0:k.data)==null?void 0:R.last_page)),g(!1),i(!1)}).catch(t=>(g(!1),i(!1)))};l.useEffect(()=>{B(),y.pathname=="/property-report"&&S(!0),y.pathname=="/saf-report"&&S(!1)},[]);const B=()=>{v.get(E,m()).then(e=>{var t,n,d;((t=e==null?void 0:e.data)==null?void 0:t.status)==!0&&O((d=(n=e==null?void 0:e.data)==null?void 0:n.data)==null?void 0:d.ward_master)}).catch(e=>{}),v.post(T,{},m()).then(e=>{var t,n;((t=e==null?void 0:e.data)==null?void 0:t.status)==!0&&q((n=e==null?void 0:e.data)==null?void 0:n.data)}).catch(e=>{})},G=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Tax No",accessor:"pt_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Holding No",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Unique House No",accessor:"new_holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"From(QTR|FY)",accessor:"fyear",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Due Amount",accessor:"balance",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}],[j,P]=l.useState(5),[A,x]=l.useState(1),[N,Q]=l.useState(0),[H,X]=l.useState(0),[b,Y]=l.useState(0),[_,$]=l.useState(),[z,M]=l.useState(!1),[J,i]=l.useState(!1),K=()=>{x(N+1)},Z=()=>{x(N-1)},o=e=>{P(e)};l.useEffect(()=>{i(!0),F()},[A,j]);const r=()=>{x(1)},p=()=>{x(H)},ee=()=>{i(!0),M(!1);let e={wardMstrId:u.values.wardMstrId,year:u.values.year.split("-")[0],perPage:b};v.post(w+"?page=1",e,m()).then(t=>{var n,d,f;((n=t==null?void 0:t.data)==null?void 0:n.status)==!0&&($((f=(d=t==null?void 0:t.data)==null?void 0:d.data)==null?void 0:f.data),ae()),i(!1)}).catch(t=>{i(!1)})},ae=()=>{M(!0)};return a.jsxs(a.Fragment,{children:[z&&a.jsx(ue,{data:_}),J&&a.jsx(ie,{}),a.jsxs("form",{onChange:u.handleChange,onSubmit:u.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardMstrId",id:"",className:C,children:[a.jsx("option",{value:"",children:"All"}),h==null?void 0:h.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Not Paid From :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"year",id:"",className:C,children:[a.jsx("option",{value:"",children:"All"}),s==null?void 0:s.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e,children:e})}))]})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:V?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-start items-end",children:a.jsx(ce,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(xe,{})}),"Search"]})})]})]}),c!=null&&(c==null?void 0:c.length)!=0?a.jsx(a.Fragment,{children:a.jsx(fe,{currentPage:N,lastPage:H,goFirst:r,goLast:p,count1:b,columns:G,dataList:c,exportStatus:!0,perPage:j,perPageC:o,totalCount:b,nextPage:K,prevPage:Z,exportDataF:ee,exportData:_})}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),a.jsx("div",{className:"h-[20vh]"})]})};export{ge as default};