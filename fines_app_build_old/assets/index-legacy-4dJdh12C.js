!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r,n){var a;return a=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,r||"default");if("object"!=t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"),(r="symbol"==t(a)?a:String(a))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var e,n={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(e){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),l=new F(n||[]);return i(o,"_invoke",{value:O(t,r,l)}),o}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var m="suspendedStart",y="suspendedYield",p="executing",x="completed",v={};function g(){}function b(){}function j(){}var w={};h(w,s,(function(){return this}));var N=Object.getPrototypeOf,L=N&&N(N(T([])));L&&L!==a&&o.call(L,s)&&(w=L);var S=j.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,r){function n(a,i,l,s){var c=d(e[a],e,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,l,s)}),(function(t){n("throw",t,l,s)})):r.resolve(h).then((function(t){u.value=t,l(u)}),(function(t){return n("throw",t,l,s)}))}s(c.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,a){n(t,e,r,a)}))}return a=a?a.then(o,o):o()}})}function O(t,r,n){var a=m;return function(o,i){if(a===p)throw new Error("Generator is already running");if(a===x){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var l=n.delegate;if(l){var s=P(l,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===m)throw a=x,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var c=d(t,r,n);if("normal"===c.type){if(a=n.done?x:y,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=x,n.method="throw",n.arg=c.arg)}}}function P(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=d(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(r){if(r||""===r){var n=r[s];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var a=-1,i=function t(){for(;++a<r.length;)if(o.call(r,a))return t.value=r[a],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(t(r)+" is not iterable")}return b.prototype=j,i(S,"constructor",{value:j,configurable:!0}),i(j,"constructor",{value:b,configurable:!0}),b.displayName=h(j,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,h(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},E(_.prototype),h(_.prototype,c,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,a,o){void 0===o&&(o=Promise);var i=new _(f(t,e,r,a),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(S),h(S,u,"Generator"),h(S,s,(function(){return this})),h(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,a){return l.type="throw",l.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;A(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},n}function n(t,e,r,n,a,o,i){try{var l=t[o](i),s=l.value}catch(c){return void r(c)}l.done?e(s):Promise.resolve(s).then(n,a)}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,o,i,l=[],s=!0,c=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(l.push(n.value),l.length!==e);s=!0);}catch(t){c=!0,a=t}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy-t2EqQ-HR.js","./router-legacy-ZIRLiol3.js","./TextArea-legacy-blTdSzK4.js","./index.esm-legacy-V4wln687.js","./tailwind-legacy-4WU_uB-v.js","./useCustomQuery-legacy-k60jG3ej.js","./index-legacy-2MQrCPAz.js","./index-legacy-Mz_NgFIc.js","./reactQuery-legacy-1Tj_AsDB.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-V-9BatBQ.js","./reactLazyLoadImageComponent-legacy-6Kg3uOph.js","./reactIcons-legacy-ythRqRRX.js","./headlessui-legacy-zeOI4r4p.js"],(function(t,o){"use strict";var i,l,s,c,u,h,f,d,m,y,p,x,v,g;return{setters:[function(t){i=t.j,l=t.c,s=t.P,c=t.b},function(t){u=t.h,h=t.d},function(t){f=t.u,d=t.F,m=t.S,y=t.T},null,function(t){p=t.r},function(t){x=t.b},function(t){v=t.S},function(t){g=t.F},null,null,null,null,null,null],execute:function(){function o(t){var e=t.data,r=u();return i.jsx(i.Fragment,{children:null==e?void 0:e.map((function(t,e){return i.jsx(p.Card,{className:"mt-4",children:i.jsxs(p.CardBody,{children:[i.jsxs("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:["Sno : ",e+1]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Application No"}),i.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Challan No"}),i.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Name"}),i.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Date:"}),i.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Amount:"}),i.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Has Expired:"}),i.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Violation Section:"}),i.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2",children:"Status:"})]}),i.jsxs("div",{children:[i.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.application_no}),i.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.challan_no}),i.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.full_name}),i.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.challan_date}),i.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.amount}),i.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.challan_type}),i.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:null!=t&&t.has_expired?i.jsx("span",{className:"text-xs font-bold ",children:"Yes"}):i.jsx("span",{className:"text-xs font-bold ",children:"No"})}),i.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:null==t?void 0:t.violation_section}),i.jsx("p",{className:"text-sm  text-blue-gray-500 mt-2",children:t.payment_status?i.jsx("span",{className:"text-xs font-bold bg-green-100 text-green-500 rounded-md px-2 py-1",children:"Paid"}):i.jsx("span",{className:"text-xs font-bold bg-blue-100 text-blue-500 rounded-md px-2 py-1",children:"Unpaid"})})]})]}),i.jsx("div",{className:"border-t border-gray-200 my-4"}),i.jsx("div",{className:"flex justify-between mt-4",children:i.jsx("button",{className:"text-xs w-full bg-blue-800 text-white py-1.5 rounded-md",onClick:function(){r("/fines-app/today-challan-details/".concat(t.id))},children:"View Details"})})]})},t.id)}))})}t("default",(function(){var t,u,b,j=a(h.useState(1),2),w=j[0],N=j[1],L=a(h.useState(5),2),S=L[0],E=L[1],_=f({initialValues:{type:"applicationNo",value:""},onSubmit:(k=r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P();case 1:case"end":return t.stop()}}),t)})),A=function(){var t=this,e=arguments;return new Promise((function(r,a){var o=k.apply(t,e);function i(t){n(o,r,a,i,l,"next",t)}function l(t){n(o,r,a,i,l,"throw",t)}i(void 0)}))},function(t){return A.apply(this,arguments)})}),O=x({api:l.api_track_application,config:e(e(e({},_.values.type,_.values.value),"page",w),"perPage",S),value:[S,w],options:{enabled:!0}}),P=function(){O.refetch()};var k,A;return i.jsx(s,{title:"Track Application",meta:i.jsx(i.Fragment,{children:i.jsx("meta",{name:"description",content:"Track Application page"})}),children:i.jsxs("div",{className:"p-4 mt-2",children:[i.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500",children:"Track Application"}),i.jsx("div",{className:"border-t border-gray-200 my-1"}),i.jsx("div",{className:"py-2",children:i.jsx(p.Card,{children:i.jsx(p.CardBody,{children:i.jsxs(d,{formik:_,children:[i.jsxs(m,{name:"type",formik:_,children:[i.jsx("option",{value:"",children:"Select"}),i.jsx("option",{value:"applicationNo",children:"Application No"}),i.jsx("option",{value:"challanNo",children:"Challan No"}),i.jsx("option",{value:"mobile",children:"Mobile"})]}),i.jsx("div",{className:"border-t border-gray-200 mb-4"}),i.jsx(y,{name:"value",placeholder:"Enter Value",formik:_}),i.jsx("div",{className:"flex justify-end mt-4",children:i.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-500 text-white rounded-lg text-xs",children:"Search"})})]})})})}),i.jsx("div",{className:"border-t border-gray-200 my-4"}),O.isFetching?i.jsx("div",{className:"flex justify-center items-center h-80",children:i.jsx(c,{})}):i.jsx(i.Fragment,{children:(null===(t=O.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.length)>0?i.jsxs(i.Fragment,{children:[i.jsx(v,{page:w,setPage:N,perPage:S,setPerPage:E,noOfPage:null==O||null===(u=O.data)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.last_page}),i.jsx(o,{data:(null===(b=O.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.data)||[]})]}):i.jsxs("div",{className:"flex flex-col justify-center items-center h-[300px]",children:[i.jsx(g,{className:"text-2xl text-blue-gray-500"}),i.jsx("div",{className:"mt-2 w-52 text-center",children:i.jsx("p",{className:"text-blue-gray-500 text-xs font-semibold ",children:"No Data Found !"})})]})})]})})}))}}}))}();