console.log("NICE Script Version: 1.0.2 - Loading...");

(function(n,u){
  console.log("Initializing wrapper for: " + n);
  window.CXoneDfo=n,
  window[n]=window[n]||function(){
    console.log("Queueing command for " + n + ":", arguments);
    (window[n].q=window[n].q||[]).push(arguments)
  },
  window[n].u=u,
  e=document.createElement("script"),
  e.type="module",
  e.src=u+"?"+Math.round(Date.now()/1e3/3600),
  document.head.appendChild(e);
  console.log("Loader script injected: " + e.src);
})('cxone','https://web-modules-de-na1.niceincontact.com/loader/1/loader.js');

console.log("Executing cxone commands...");
window.cxone('init', '5553');
window.cxone('guide', 'init');
window.cxone('chat', 'setCaseCustomField', 'authenticated_page', 'no');
console.log("NICE Script Version: 1.0.2 - Execution Complete.");
