import{a as l,i as c,S as d}from"./assets/vendor-CmDlsJ_d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="48918931-19353ebecebc74a7aac5f0327",p="https://pixabay.com/api/",f=s=>l.get(p,{params:{key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.error("Error fetching images: ",r),[])),m=s=>{const r=document.querySelector(".gallery");if(r.innerHTML="",s.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}s.forEach(o=>{const e=document.createElement("div");e.classList.add("gallery-item"),e.innerHTML=`
      <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" />
      </a>
      <div class="info">
        <p>Likes<span>${o.likes}</span> </p>
        <p>Views <span>${o.views}</span></p>
        <p>Comments<span>${o.comments}</span> </p>
        <p>Downloads<span>${o.downloads}</span> </p>
      </div>
    `,r.appendChild(e)}),new d(".gallery a").refresh()},h=document.querySelector("#search-form"),y=document.querySelector("#search-input"),i=document.querySelector(".loader");h.addEventListener("submit",s=>{s.preventDefault();const r=y.value.trim();if(!r){c.warning({title:"Warning",message:"Please enter a search query."});return}i.classList.remove("hidden"),f(r).then(n=>{m(n)}).finally(()=>{i.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
