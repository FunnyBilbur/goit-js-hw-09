import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{d as m}from"./assets/vendor-cfef1661.js";const o="feedback-form-state",t=document.querySelector(".feedback-form");try{const e=JSON.parse(localStorage.getItem(o));e?(t.elements.message.value=e.message,t.elements.email.value=e.email,console.log(e)):console.log("The is no data in Message and Email field")}catch(e){console.log("Failed to parse data from JSON: ",e)}t.addEventListener("submit",e=>{e.preventDefault();const{email:a,message:l}=e.currentTarget.elements;if(a.value===""||l.value==="")alert("All form fields must be filled in");else{const s={email:a.value.trim(),message:l.value.trim()};console.log(s),localStorage.removeItem(o),t.reset()}});t.addEventListener("input",m(()=>{const{email:e,message:a}=t.elements,l={email:e.value.trim(),message:a.value.trim()};localStorage.setItem(o,JSON.stringify(l))},250));
//# sourceMappingURL=commonHelpers2.js.map