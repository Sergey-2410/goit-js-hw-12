import{S as g,i as y}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const L="46125124-f513c5cbcff31d6d16e67daed",w="https://pixabay.com/api/";function S(s){const t=new URLSearchParams(s);return fetch(`${w}?key=${L}&${t}`).then(o=>{if(!o.ok)throw new Error("Something went wrong");return o.json()}).catch(o=>{throw new Error(o.message)})}function v(s,t){const{hits:o}=s,n=o.map(({webformatURL:r,largeImageURL:i,tags:f,likes:m,views:d,comments:p,downloads:h})=>`<li class="gallery-item">
              <a href="${i}" class="gallery-link">
                  <img src="${r}" alt="${f}" class="gallery-image" />
              </a>
              <div class="info">
                  <p class="info-item"><span>Likes</span> ${m}</p>
                  <p class="info-item"><span>Views</span> ${d}</p>
                  <p class="info-item"><span>Comments</span> ${p}</p>
                  <p class="info-item"><span>Downloads</span> ${h}</p>
              </div>
          </li>`).join("");t.innerHTML=n,new g(".gallery a").refresh()}function c(s){y.error({title:"Error",message:s})}const l=document.querySelector(".form"),u=document.querySelector(".gallery"),P=document.querySelector(".input"),a=document.querySelector(".loader");function $(){a.classList.remove("hidden"),a.classList.add("active")}function b(){a.classList.remove("active"),a.classList.add("hidden")}l.addEventListener("submit",s=>{s.preventDefault();const t=P.value.trim();if(t===""){c("Sorry, there are no images matching your search query. Please try again!");return}const o={q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};u.innerHTML="",$(),S(o).then(n=>{if(b(),n.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}v(n,u)}).catch(n=>{c("Something went wrong. Please try again later.")}),l.reset()});
//# sourceMappingURL=index.js.map
