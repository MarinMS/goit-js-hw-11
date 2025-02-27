import{a as l,S as u,i as c}from"./assets/vendor-CmDlsJ_d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="48918931-19353ebecebc74a7aac5f0327",d="https://pixabay.com/api/",f=o=>l.get(d,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.error("Error fetching images: ",r),[]));let m=new u(".gallery a");const h=o=>{const r=document.querySelector(".gallery");if(r.innerHTML="",o.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const n=o.map(s=>`
    <div class="gallery-item">
      <a href="${s.largeImageURL}">
        <img src="${s.webformatURL}" alt="${s.tags}" />
      </a>
      <div class="info">
        <p>Likes<span>${s.likes}</span></p>
        <p>Views <span>${s.views}</span></p>
        <p>Comments<span>${s.comments}</span></p>
        <p>Downloads<span>${s.downloads}</span></p>
      </div>
    </div>
  `).join("");r.innerHTML=n,m.refresh()},y=document.querySelector("#search-form"),g=document.querySelector("#search-input"),i=document.querySelector(".loader");y.addEventListener("submit",o=>{o.preventDefault();const r=g.value.trim();if(!r){c.warning({title:"Warning",message:"Please enter a search query."});return}i.classList.remove("hidden"),f(r).then(n=>{h(n)}).finally(()=>{i.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
