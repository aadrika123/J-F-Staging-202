import{u as R,r as T,b as F,o as P,j as s,F as z,A,B as D,c as S,d as U,g as y,a as M,s as $,C as n,H as h,I as d,L as p,t as u,v as b,a3 as H,a4 as I,a5 as q,a6 as B,aP as E,aQ as f,aR as N,aS as v,aT as w,ax as G}from"./index-CYZxF7_B.js";import{P as L}from"./profile-CGUgK53L.js";import{M as W}from"./move-right-9-LNdmOt.js";import{P as _}from"./index-qF0KnRQA.js";const Y=S().shape({message:U().required("Message is required")});function J(){var o;const i=R({}),[m,j]=T.useState([]),a=F({resolver:P(Y)}),t=async l=>{var c;try{const r=l.message,e=await i.mutateAsync({api:y.chatbot,data:{message:r}}),x=(c=e==null?void 0:e.data)==null?void 0:c.answer;j(g=>[...g,{question:r,answer:x}]),a.reset({message:""})}catch(r){console.log(r)}};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"overflow-auto h-[80%] px-4 py-2",children:m.map(l=>s.jsxs("div",{className:"mb-4",children:[s.jsxs("div",{className:"text-gray-800 flex",children:[s.jsx("strong",{children:"You  "}),s.jsxs("h1",{className:"font-semibold",children:[":- ",l==null?void 0:l.question]})]}),s.jsx("div",{className:"text-gray-600 mt-2 flex items-center",children:l==null?void 0:l.answer})]},l==null?void 0:l._id))}),s.jsx("div",{className:"grid gap-4 py-4 absolute bottom-0 left-0 w-full px-2",children:s.jsxs(z,{methods:a,onSubmit:a==null?void 0:a.handleSubmit(t),children:[s.jsx("div",{children:s.jsx(A,{className:"bg-background w-full rounded-md p-4 h-20 border",name:"message",placeholder:"Ask me anything?"})}),s.jsx("div",{className:"col-span-3",children:s.jsx(D,{isLoading:(o=a==null?void 0:a.formState)==null?void 0:o.isSubmitting,type:"submit",className:"w-auto rounded-lg px-10 float-right",children:"Submit"})})]})})]})}const Q="/assets/list-DJFZ99SX.png",V="/assets/whatsapp-Bv3ceAgd.png";function X(){var o,l,c,r;const{user:i}=M(),m=()=>{window.open("https://wa.me/?text=","_blank")},j=()=>{const e="aadrikaent270@gmail.com",x="Compalint registration",g="This is the test body of complaint.",k=encodeURIComponent(x),C=encodeURIComponent(g);window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${e}&su=${k}&body=${C}`,"_blank")},a=$({api:`${y.citizenDashboard}`,key:"citizenDashboard",options:{enabled:!0}}),t=[{id:1,label:"My Grievance",linkUrl:"/grievance/citizen-dashboard/all-complaints",iconUrl:Q},{id:2,label:"My Profile",linkUrl:"/grievance/citizen-dashboard/profile",iconUrl:L},{id:3,label:"Whatsapp Chatbot",linkUrl:"#",iconUrl:V}];return s.jsxs("div",{className:"sm:p-10 p-1",children:[s.jsx("div",{className:"container px-6 mx-auto",children:s.jsxs("div",{className:"flex items-center justify-center lg:flex",children:[s.jsxs("div",{className:" w-full ",children:[s.jsx(n,{className:"text-3xl font-bold opacity-60",children:"Welcome"}),s.jsx(n,{className:"text-4xl font-bold",children:i==null?void 0:i.fullName}),s.jsx(h,{className:"font-bold",children:i==null?void 0:i.email}),s.jsx("h1",{className:"mt-10 md:pr-20 text-sm md:text-xl font-semibold text-gray-800 dark:text-white lg:text-3xl mb-4",children:"You can easily access your complaints and other accessibility options."}),s.jsx("div",{defaultValue:"ONLINE",className:"w-[500px]"})]}),s.jsx("div",{className:"sm:flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 hidden md:block",children:s.jsx(d,{width:250,height:185.5,className:"w-60",src:"/images/support.png",alt:"email illustration vector art"})})]})}),s.jsxs("div",{className:"grid md:grid-cols-3 col-span-1 gap-4 mt-6",children:[s.jsx("div",{children:s.jsx(p,{to:"/grievance/citizen-dashboard/all-complaints",children:s.jsx(u,{className:"cursor-pointer",children:s.jsxs(b,{children:[s.jsx(n,{className:"text-lg",children:"Total Grievance Registered"}),s.jsx(h,{children:(l=(o=a==null?void 0:a.data)==null?void 0:o.data)==null?void 0:l.totalRegistrations})]})})})}),s.jsx("div",{children:s.jsx(p,{to:"/grievance/citizen-dashboard/citizen-testimonials",children:s.jsx(u,{className:"cursor-pointer",children:s.jsxs(b,{children:[s.jsx(n,{className:"text-lg",children:"FeedBack Given"}),s.jsx(h,{children:(r=(c=a==null?void 0:a.data)==null?void 0:c.data)==null?void 0:r.totalFeedback})]})})})}),s.jsx("div",{children:s.jsxs(H,{children:[s.jsx(I,{}),s.jsxs(q,{className:"sm:max-w-[600px]",children:[s.jsx(n,{className:"mt-4 text-xl text-gray-500 font-bold flex justify-between",children:"Popular Options to Explore"}),s.jsx("div",{className:"py-4",children:s.jsx("div",{className:"mt-4",children:(t==null?void 0:t.length)===0||t===null||t===void 0?s.jsx("div",{className:"text-lg font-semibold",children:"! No Tools Found"}):s.jsx("div",{className:"grid md:grid-cols-4 grid-cols-1 mt-4 gap-4",children:t==null?void 0:t.map(e=>s.jsxs(p,{className:"border p-2 flex justify-center items-center flex-col",to:e==null?void 0:e.linkUrl,children:[s.jsx("div",{className:"w-20  h-20 rounded-lg overflow-hidden border p-2 flex justify-center items-center shadow-lg",children:s.jsx(d,{src:e==null?void 0:e.iconUrl,className:"w-auto"})}),s.jsx("div",{className:"font-semibold text-xs mt-2 text-center",children:e==null?void 0:e.label})]},e==null?void 0:e.id))})})})]}),s.jsx(u,{className:"cursor-pointer",children:s.jsx(B,{asChild:!0,children:s.jsxs(b,{children:[s.jsx(n,{className:"text-lg",children:"Explore More"}),s.jsx(h,{children:s.jsx(W,{className:"inline"})})]})})})]})})]}),s.jsx("div",{className:"w-full flex justify-center items-center mt-10",children:s.jsx(E,{children:s.jsx("button",{className:"bg-gradient-to-r from-yellow-500 to-red-500    text-white font-bold py-2 px-4 rounded border border-white shadow-xl hover:from-pink-500 hover:to-yellow-500",children:"Register Grievance Now "})})}),s.jsx(f,{delayDuration:100,children:s.jsxs(N,{children:[s.jsx(v,{asChild:!0,children:s.jsx("div",{className:"w-12 h-12 bg-background border rounded-full fixed bottom-44 right-10 flex justify-center items-center shadow-xl",children:s.jsx(d,{onClick:j,src:"/images/gmail.png",className:"w-8 h-8 cursor-pointer hover:scale-105"})})}),s.jsx(w,{className:"bg-black",children:s.jsx("p",{children:"Register complaint vai email."})})]})}),s.jsx(f,{delayDuration:100,children:s.jsxs(N,{children:[s.jsx(v,{asChild:!0,children:s.jsx("div",{className:"w-12 h-12  rounded-full fixed bottom-28 right-10 flex justify-center items-center",children:s.jsx(d,{onClick:m,src:"/images/whatsapp.png",className:"w-12 h-12 cursor-pointer hover:scale-105"})})}),s.jsx(w,{className:"bg-black",children:s.jsx("p",{children:"Register complaint via Whatsapp chatbot."})})]})}),s.jsx(f,{delayDuration:100,children:s.jsxs(N,{children:[s.jsx(v,{asChild:!0,children:s.jsx("div",{className:"w-12 h-12  rounded-full fixed bottom-12 right-10 flex justify-center items-center ",children:s.jsxs(G,{trigger:s.jsx(d,{src:"/images/help2.png",className:"w-10 cursor-pointer hover:scale-105"}),children:[s.jsx(n,{className:"mb-4 text-[#0D7538] text-lg",children:"Ask me Anything ?"}),s.jsx(J,{})]})})}),s.jsx(w,{className:"bg-black",children:s.jsx("p",{children:"Click to ask questions"})})]})})]})}function es(){return s.jsx(_,{title:"",children:s.jsx(X,{})})}export{es as default};