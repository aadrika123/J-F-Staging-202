import{r as l,g as v,a as S,u as C,c as E,d,o as k,b as A,j as s,p as F,R as M,A as q,k as L,a8 as V,m as $,f as I}from"./index-afc07e00.js";/* empty css              */const O="/assets/login-46b9cc9d.svg",Y=R=>{const[c,n]=l.useState(!1),{api_changePassword:u,api_forgotPassword:w}=I();l.useContext(v);const x=S(),[h,z]=l.useState(),[g,f]=l.useState(!1),[b,y]=l.useState(null),{type:r}=C(),N=E().shape({oldPassword:d().when([],{is:()=>r=="change",then:()=>d().required("Enter old password")}),newPassword:d().min(6,"Minimum six character !").max(50,"Too Long!").required("Enter new password !").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,"Password Must Contains (Capital, Smail, Number, Special) eg - Abc123#."),matchNewPassword:d().required("Confirm your new password").oneOf([k("newPassword"),null],"Password not match")}),e=A({initialValues:{oldPassword:"",newPassword:"",matchNewPassword:""},onSubmit:(a,o)=>{console.log("post data",a),j(a)},validationSchema:N}),j=a=>{let o={password:a.oldPassword,newPassword:a.newPassword};console.log("request body before hit api => ",o),n(!0),q.post(r=="change"?u:w,o,L()).then(t=>{var m,p;((m=t==null?void 0:t.data)==null?void 0:m.status)==!0&&(console.log("successfully changed => ",t),V.success("Password changed successfully !!!"),r=="change"?x("/landingDashboard"):x("/login")),((p=t==null?void 0:t.data)==null?void 0:p.status)==!1&&i(!0,"Error occured. Please try again later."),n(!1)}).catch(t=>{i(!0,"Error occured. Please try again later."),n(!1)})},P=a=>{let o=a.target.name,t=a.target.value;o=="mobile"&&e.setFieldValue("mobile",$(t,e.values.mobile,10))},i=(a,o)=>{y(o),f(a)};return s.jsxs(s.Fragment,{children:[g&&s.jsx(F,{activateBottomErrorCard:i,errorTitle:b}),s.jsx("div",{className:"w-full text-center mx-auto h-max relative",children:s.jsx("div",{className:"w-full h-max mx-auto rounded-lg ",children:s.jsx("form",{onChange:P,children:s.jsxs("div",{className:"grid grid-cols-12 px-4 md:px-0 shadow-none md:shadow-lg ",children:[s.jsx("div",{className:"col-span-6 hidden md:block bg-white py-10",children:s.jsx("img",{className:"w-3/4",src:O})}),s.jsx("div",{className:"w-full md:px-10 col-span-12 md:col-span-6 shadow-lg md:shadow-none bg-white py-10",children:s.jsxs("div",{className:"px-6 py-6 mt-10 text-gray-700 md:px-14",children:[s.jsx("h1",{className:"text-center font-semibold my-1 flex justify-center",children:s.jsxs("span",{className:"px-1 text-indigo-500 text-semibold text-2xl poppins uppercase",children:[r," Password"]})}),r=="change"&&s.jsxs("div",{className:"my-3 relative text-sm",children:[s.jsx("div",{className:"text-gray-600 static mb-1 font-semibold text-left poppins",children:"Old Password"}),s.jsxs("div",{className:"flex flex-row flex-wrap gap-x-2 gap-y-2",children:[s.jsx("input",{type:"password",...e.getFieldProps("oldPassword"),className:"form-control px-3 text-xs 2xl:text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md poppins w-full",placeholder:"Enter Your Old Password"}),s.jsx("div",{className:"w-full text-start",children:s.jsx("span",{className:"text-red-600 text-xs poppins text-start",children:e.touched.oldPassword&&e.errors.oldPassword?e.errors.oldPassword:null})})," "]})]}),s.jsxs("div",{className:"my-3 relative text-sm",children:[s.jsx("div",{className:"text-gray-600 static mb-1 font-semibold text-left poppins",children:"New Password"}),s.jsxs("div",{className:"flex flex-row flex-wrap gap-x-2 gap-y-2",children:[s.jsx("input",{type:"password",...e.getFieldProps("newPassword"),className:"form-control px-3 text-xs 2xl:text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md poppins w-full",placeholder:"Enter Your New Password"}),s.jsx("div",{className:"w-full text-start",children:s.jsx("span",{className:"text-red-600 text-xs poppins text-start",children:e.touched.newPassword&&e.errors.newPassword?e.errors.newPassword:null})})," "]})]}),s.jsxs("div",{className:"my-3 relative text-sm",children:[s.jsx("div",{className:"text-gray-600 static mb-1 font-semibold text-left poppins",children:"Confirm New Password"}),s.jsxs("div",{className:"flex flex-row flex-wrap gap-x-2 gap-y-2",children:[s.jsx("input",{type:"password",...e.getFieldProps("matchNewPassword"),className:"form-control px-3 text-xs 2xl:text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md poppins w-full",placeholder:"Confirm your new password"}),s.jsx("div",{className:"w-full text-start",children:s.jsx("span",{className:"text-red-600 text-xs poppins text-start",children:e.touched.matchNewPassword&&e.errors.matchNewPassword?e.errors.matchNewPassword:null})})," "]})]}),s.jsx("div",{className:" my-10"}),s.jsx("div",{className:"text-center mt-3 text-xs"}),s.jsxs("div",{className:"my-5   relative",children:[s.jsxs("div",{className:"text-red-600 text-sm font-semibold my-3 ",children:[" ",s.jsxs("span",{className:"",children:[" ",h]})]}),c?s.jsx("div",{className:"flex w-full justify-center",children:s.jsx(M,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}):s.jsx("button",{type:"submit",onClick:e.handleSubmit,disabled:c,className:" bg-indigo-500 hover:bg-indigo-700 px-5 shadow-xl py-2 w-[16rem]  rounded-md text-white text-md font-semibold",children:"Submit"})]})]})})]})})})})]})};export{Y as default};