import{a as l,S as u,i as c}from"./assets/vendor-CmDlsJ_d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const d="48918931-19353ebecebc74a7aac5f0327",p="https://pixabay.com/api/",f=s=>l.get(p,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.error("Error fetching images: ",r),[]));let m=new u(".gallery a");const h=s=>{const r=document.querySelector(".gallery");if(r.innerHTML="",s.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const n=s.map(t=>`
    <div class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p>Likes<span>${t.likes}</span></p>
        <p>Views <span>${t.views}</span></p>
        <p>Comments<span>${t.comments}</span></p>
        <p>Downloads<span>${t.downloads}</span></p>
      </div>
    </div>
  `).join("");r.innerHTML=n,m.refresh()},y=document.querySelector("#search-form"),g=document.querySelector("#search-input"),i=document.querySelector(".loader");y.addEventListener("submit",s=>{s.preventDefault();const r=g.value.trim(),n=document.querySelector(".gallery");if(n.innerHTML="",!r){c.warning({title:"Warning",message:"Please enter a search query."});return}i.classList.remove("hidden"),f(r).then(t=>{h(t)}).finally(()=>{i.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
