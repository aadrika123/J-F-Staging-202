import{r as d,g as C,m as F,d as H,e as T,S as t,j as V,i as _,a as z}from"./index-16131624.js";function J(){const[P,i]=d.useState(!1),l=C(),{api_getFreeMenuList:U}=z(),{setmenuList:q}=d.useContext(F);d.useEffect(()=>{let u=window.localStorage.getItem("token");if(i(!0),u==null){l("/");return}y()},[]);const y=()=>{let u={moduleId:5};H.post(U,u,T()).then(function(a){var m,c,f,g,L,r,e,x,D,I,N,S,b,h,j,A,E,M,k,v,w,B;a.data.status==!0&&(t("menuList",(c=(m=a==null?void 0:a.data)==null?void 0:m.data)==null?void 0:c.permission),t("userName",(L=(g=(f=a==null?void 0:a.data)==null?void 0:f.data)==null?void 0:g.userDetails)==null?void 0:L.userName),t("roles",(x=(e=(r=a==null?void 0:a.data)==null?void 0:r.data)==null?void 0:e.userDetails)==null?void 0:x.roles),t("userUlbName",(N=(I=(D=a==null?void 0:a.data)==null?void 0:D.data)==null?void 0:I.userDetails)==null?void 0:N.ulb),t("userMobile",(h=(b=(S=a==null?void 0:a.data)==null?void 0:S.data)==null?void 0:b.userDetails)==null?void 0:h.mobileNo),t("userEmail",(E=(A=(j=a==null?void 0:a.data)==null?void 0:j.data)==null?void 0:A.userDetails)==null?void 0:E.email),t("userImage",(v=(k=(M=a==null?void 0:a.data)==null?void 0:M.data)==null?void 0:k.userDetails)==null?void 0:v.imageUrl),q((B=(w=a==null?void 0:a.data)==null?void 0:w.data)==null?void 0:B.permission),l("/home")),i(!0)}).catch(function(a){i(!0)})};if(P)return V(_,{})}export{J as default};