import{r as t,u as i}from"./router-87042356.js";import{l as r}from"./index-40c9ecd2.js";import"./mui-8e804a04.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const p=()=>{const{notify:o}=t.useContext(r),e=i();console.log("Logout called.."),window.localStorage.removeItem("citizen_token"),window.localStorage.removeItem("citizenMobile"),window.localStorage.removeItem("citizenName"),window.localStorage.removeItem("LoginStatus"),t.useEffect(()=>{e("/")},[o]),o("Logout Successfully","success")};export{p as default};