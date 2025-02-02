import{S as d,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="48601287-44eda15d36b20e5cccdc82f7d",y=s=>{const r=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r.toString()}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})};function h(s){return s.map(({webformatURL:r,largeImageURL:o,tags:l,likes:e,views:t,comments:i,downloads:m})=>`<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${r}" alt="${l}" />
  </a>
  <ul class="inform">
    <li class="inform-link">
      <h2 class="inform-title">Likes:</h2>
      <p class="inform-dan">${e}</p>
    </li>
    <li class="inform-link">
      <h2 class="inform-title">Views:</h2>
      <p class="inform-dan">${t}</p>
    </li>
    <li class="inform-link">
      <h2 class="inform-title">Comments:</h2>
      <p class="inform-dan">${i}</p>
    </li>
    <li class="inform-link">
      <h2 class="inform-title">Downloads:</h2>
      <p class="inform-dan">${m}</p>
    </li>
  </ul>
</li>`).join("")}const c=document.querySelector(".input");document.querySelector(".button-submit");const f=document.querySelector(".gallery"),u=document.querySelector(".group-form"),n=document.querySelector(".loader");u.addEventListener("submit",b);n.style.display="none";const g=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function b(s){if(s.preventDefault(),f.innerHTML="",!c.value.trim()){a.error({title:"Error",message:"Please enter your search terms",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",titleColor:"#fff"});return}n.style.display="inline-block",y(c.value).then(r=>{r.hits.length===0&&a.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),f.insertAdjacentHTML("beforeend",h(r.hits)),g.refresh(),n.style.display="none"}).catch(r=>{console.log(r.message)}).finally(()=>{n.style.display="none",u.reset()})}
//# sourceMappingURL=index.js.map
