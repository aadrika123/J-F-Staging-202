const l=l=>localStorage.getItem(l)||null,a=l=>{const a=localStorage.getItem(l);try{return a?JSON.parse(a):null}catch(t){return null}},t=l=>{localStorage.clear()};export{a,l as g,t as l};
