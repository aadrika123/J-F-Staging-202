import{j as e}from"./mui-105b4636.js";import{u as m,r as d}from"./router-894402c5.js";import{G as g}from"./reactIcons-58c2a0d8.js";import{L as h}from"./index.esm-a51ac01c.js";import{b as x}from"./index.esm-2c8074cb.js";import{G as p}from"./index-479eb087.js";import"./react-40db4358.js";import"./axios-67d8a945.js";import"./redux-b8f144fa.js";import"./i18next-e2c66b9b.js";const v="/assets/grivance-image-120ce96d.png",u="/assets/image2-573565d7.jpeg",j="/assets/image3-390326fd.png";function f(n){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M849.152 0H211.153c-46 0-66.032 34-66.032 66v127.312h-34.928c-17.311 0-31.344 14.032-31.344 31.345 0 17.311 14.033 31.343 31.344 31.343h34.928v128.752h-31.936c-17.312 0-31.344 14.033-31.344 31.344 0 17.313 14.032 31.345 31.343 31.345h31.936v129.44h-32.624c-17.312 0-31.344 14.032-31.344 31.344s14.032 31.344 31.344 31.344h32.624v128.464h-32.624c-17.312 0-31.344 14.032-31.344 31.343s14.032 31.344 31.344 31.344h32.624V960c0 53.025 41.536 64 64.528 64h639.504c53.025 0 96-42.975 96-96V96c0-53.024-42.96-96-96-96zM209.121 960l-.001-129.279h33.344c17.311 0 31.344-14.032 31.344-31.344s-14.033-31.344-31.344-31.344H209.12V639.569h33.344c17.311 0 31.344-14.033 31.344-31.344s-14.033-31.344-31.344-31.344H209.12V447.44h34.032c17.313 0 31.345-14.032 31.345-31.345 0-17.311-14.032-31.344-31.344-31.344h-34.032V256h31.024c17.312 0 31.344-14.032 31.344-31.343 0-17.313-14.032-31.345-31.344-31.345h-31.024V66c0-.752.064-1.376.16-1.936a28.23 28.23 0 0 1 1.872-.064h510v896H209.121zm672.031-31.999c0 17.664-14.336 32-32 32h-64v-896h64c17.664 0 32 14.336 32 32v832z"}}]})(n)}const z=()=>{const n=m(),a=[{id:1,title:"Register Grievance",link:"/grievance/request",icon:f},{id:2,title:"Track Grievance",link:"/grievance/track",icon:x},{id:3,title:"Send Suggestion",icon:p},{id:4,title:"Register Enquiry",icon:h}],t=[v,u,j],[r,i]=d.useState(0),c=()=>{i(s=>(s+1)%t.length)},o=()=>{i(s=>(s-1+t.length)%t.length)};return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-16 md:mt-24"}),e.jsxs("div",{className:"grid grid-cols-10 md:grid-cols-12 m-10",children:[e.jsx("div",{className:"col-span-12 md:col-span-8",children:e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("button",{className:"text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-full hover:text-gray-700",onClick:o,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})}),e.jsx("img",{src:t[r],alt:"Slider Image",className:"mx-4 w-[100rem] h-[10rem] md:h-[30rem] md:w-[70rem]"}),e.jsx("button",{className:"text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-full hover:text-gray-700",onClick:c,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})})]})}),e.jsx("div",{className:"md:col-span-3 col-span-12 flex items-center justify-center h-full mx-10",children:e.jsx("div",{className:"w-full",children:a.map((s,l)=>e.jsx("div",{onClick:()=>n(s.link),className:"cursor-pointer ",children:e.jsx("div",{className:"border hover:bg-gray-300 rounded-3xl w-full shadow-xl text-lg my-3",children:e.jsxs("div",{className:"grid grid-cols-12 ",children:[e.jsx("div",{className:"col-span-2 bg-green-600 p-2 md:p-4 rounded-l-3xl flex items-center justify-center",children:e.jsx(s.icon,{color:"white",size:"25"})}),e.jsx("div",{className:"col-span-10 flex items-center justify-center",children:s.title})]})})},l))})})]}),e.jsx("p",{className:"border-b border-green-500"}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("p",{className:"text-center text-2xl font-semibold",children:[" ",e.jsx("span",{className:"text-gray-600",children:"About"})," ",e.jsx("span",{className:"text-green-600",children:" Grievance Management & Redressal System"})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("p",{className:"bg-green-500 w-24 h-2 my-5"})}),e.jsx("p",{className:"m-5 md:m-0 md:mx-[20rem] text-center",children:"The Jharkhand government has implemented a public complaint management system using information technology to achieve the objectives of good governance. This system, called a unified complaint resolution system, assists in establishing easy and transparent communication between citizens and government/departments/public offices. Citizens can register/track complaints online at any time. Complaints received through various channels can be available on a single portal/platform, providing department officials with a convenient facility for complaint resolution and monitoring"})]})]})};export{z as default};