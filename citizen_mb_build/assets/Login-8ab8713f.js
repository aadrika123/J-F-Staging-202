import{r as l,j as a,u as dt,g as st,d as z,A as Q,F as Z,b as f,L as mt,P as nt}from"./index-ace27d6f.js";import{u as ut}from"./formik.esm-70d5e597.js";import{c as gt,b as ft,a as tt}from"./index.esm-70f5a44d.js";/* empty css                */import{R as ht}from"./Hourglass-eaf35b74.js";import{T as E,F as wt}from"./LoadingButton-c50b942f.js";import"./ThemeStyle-994f51bc.js";import"./index.esm-2d99ca62.js";const xt=()=>{const[s,h]=l.useState(""),u=()=>{const i=Math.random().toString(36).slice(2,8).toUpperCase();h(i)},w=(i,y)=>i===s?!0:(y({captcha:""},!1),u(),!1),r=document.createElement("canvas");r.style.margin="0",r.style.padding="0",r.width=100,r.height=22;const c=r.getContext("2d");c.font="bold 15px Arial",c.fillStyle="blue",c.fillText(s,21,16);const x=r.toDataURL();return l.useEffect(()=>{u()},[]),{catptchaTextField:i=>a("div",{children:a(E,{name:"captcha",placeholder:"Enter captcha",formik:i})}),captcha:s,dataUrl:x,verifyCaptcha:w,generateCaptcha:u}},Rt=()=>{const s=dt(),{catptchaTextField:h,dataUrl:u,generateCaptcha:w,verifyCaptcha:r}=xt(),{notify:c,setisLoggedIn:x,setheartBeatCounter:I}=l.useContext(st),[i,y]=l.useState(null),[o,at]=l.useState(),{api_login:et,api_getPermission:it}=nt(),[S,b]=l.useState(!1),lt=gt({email:ft().required("Enter email"),password:tt().required("Enter password"),captcha:tt().required("Enter captcha")}),m=ut({initialValues:{email:"",password:"",type:"mobile",captcha:""},onSubmit:async(e,{resetForm:t})=>{r(e==null?void 0:e.captcha,t)?rt():c("Invalid Captcha")},validationSchema:lt}),v=["TAX COLLECTOR","ULB TAX COLLECTOR","TEAM LEADER","JUNIOR ENGINEER","TAX DAROGA","DRIVER","SEPTIC TANKER DRIVER","ENFORCEMENT OFFICER"],ct=l.useMemo(()=>Array.isArray(i)&&i.some(e=>v.includes(e)),[i]);l.useEffect(()=>{var e,t,n;i!=null&&(ct?(c("Login Successfull !!! ","success"),window.localStorage.setItem("menuList",JSON.stringify((e=o==null?void 0:o.userDetails)==null?void 0:e.menuPermission)),window.localStorage.setItem("userName",JSON.stringify((t=o==null?void 0:o.userDetails)==null?void 0:t.name)),window.localStorage.setItem("roles",JSON.stringify((n=o==null?void 0:o.userDetails)==null?void 0:n.role)),s("/dashboard")):c("You don't have permission of Tax Collector !!!","warn"))},[i]);const N=JSON.parse(window.localStorage.getItem("roles")),g=window.localStorage.getItem("token"),ot=l.useMemo(()=>Array.isArray(N)&&N.some(e=>v.includes(e)),[N,g]);l.useEffect(()=>{g!=""&&g!=null&&g!=null&&ot&&s("/dashboard")},[]);const rt=()=>{b(!0);let e={email:m.values.email,password:m.values.password,type:"mobile"};z.post(et,e,Q()).then(function(t){var n,C,R,p,L,A,T,O,D,F,k,P,U,J,j,M,V,q,B,_,X,$,G,H,K;t.data.status==!0?(window.localStorage.setItem("token",(C=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:C.token),window.localStorage.setItem("isLoggedIn",!0),window.localStorage.setItem("userEmail",(L=(p=(R=t==null?void 0:t.data)==null?void 0:R.data)==null?void 0:p.userDetails)==null?void 0:L.email),window.localStorage.setItem("userName",(O=(T=(A=t==null?void 0:t.data)==null?void 0:A.data)==null?void 0:T.userDetails)==null?void 0:O.name),window.localStorage.setItem("userType",(k=(F=(D=t==null?void 0:t.data)==null?void 0:D.data)==null?void 0:F.userDetails)==null?void 0:k.user_type),window.localStorage.setItem("userMobile",(J=(U=(P=t==null?void 0:t.data)==null?void 0:P.data)==null?void 0:U.userDetails)==null?void 0:J.mobile),window.localStorage.setItem("ulbId",(V=(M=(j=t==null?void 0:t.data)==null?void 0:j.data)==null?void 0:M.userDetails)==null?void 0:V.ulb_id),window.localStorage.setItem("device","mobile"),window.localStorage.setItem("userUlbName",JSON.stringify((_=(B=(q=t==null?void 0:t.data)==null?void 0:q.data)==null?void 0:B.userDetails)==null?void 0:_.ulbName)),at((X=t==null?void 0:t.data)==null?void 0:X.data),y((H=(G=($=t==null?void 0:t.data)==null?void 0:$.data)==null?void 0:G.userDetails)==null?void 0:H.role),I(d=>d+1),x(!0),z.post(it,{moduleId:1},Q()).then(d=>{var W,Y;d.data.status==!0&&window.localStorage.setItem("menuList",JSON.stringify((Y=(W=d==null?void 0:d.data)==null?void 0:W.data)==null?void 0:Y.permission))}).catch(d=>{})):(b(!1),c((K=t==null?void 0:t.data)==null?void 0:K.message,"error"))}).catch(function(t){b(!1),c("Something went wrong !!! ","error")})};return a(Z,{children:f(wt,{formik:m,children:[a("div",{className:"mt-6 flex flex-col flex-wrap gap-2",children:a(E,{name:"email",label:"Email",formik:m})}),a("div",{className:"mt-4 flex flex-col flex-wrap gap-2",children:a(E,{name:"password",label:"Password",formik:m})}),a("div",{className:"mt-6 flex flex-col flex-wrap gap-0",children:f("div",{className:"flex justify-between",children:[a("div",{className:"bg-gray-400 px-4 py-1 rounded-sm",children:a("img",{src:u,alt:"captcha"})}),a("div",{children:a("button",{type:"button",onClick:w,className:"text-[#5846BE] text-sm",children:"Reload Captcha"})})]})}),a("div",{className:"mt-2 flex flex-col flex-wrap gap-2",children:h(m)}),a("div",{className:"text-center mb-6 mt-4",children:S?a("div",{className:"flex justify-center",children:a(ht,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}):f(Z,{children:[a("div",{className:"mb-1",children:a(mt,{to:"/forget-password",className:"text-xs text-indigo-600",children:"Forgot Password ?"})}),f("button",{disabled:S,type:"submit",className:"px-4 py-1.5 bg-green-200 hover:bg-green-300 rounded-md shadow-md text-sm",children:[" ",S?"Please wait...":"Login"]})," "]})})]})})};export{Rt as default};