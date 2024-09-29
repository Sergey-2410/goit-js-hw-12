import{a as P,S as $,i as f}from"./assets/vendor-mdVVRe9K.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const q="46125124-f513c5cbcff31d6d16e67daed",H="https://pixabay.com/api/",h=15;async function m(s,r=1){const o=new URLSearchParams({q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:r}),i=`${H}?key=${q}&${o}`,{data:{hits:e,totalHits:t}}=await P.get(i);if(e.length===0)throw new Error("No cards found");return{hits:e,totalHits:t}}function p(s,r){const o=s.map(({webformatURL:e,largeImageURL:t,tags:n,likes:w,views:b,comments:S,downloads:E})=>`<li class="gallery-item">
    <a href="${t}" class="gallery-link" target="_blank">
      <img src="${e}" alt="${n}" class="gallery-image" />
    </a>
    <div class="info">
       <div class="container-likes">
       <p class="info-item"><span>Likes</span> ${w}</p>
       </div>
      <div class="container-views">
      <p class="info-item"><span>Views</span> ${b}</p>
      </div>
      <div class="container-comments">
      <p class="info-item"><span>Comments</span> ${S}</p>
      </div>
      <div class="container-downloads">
      <p class="info-item"><span>Downloads</span> ${E}</p>
      </div>
    </div>
  </li>`).join("");r.insertAdjacentHTML("beforeend",o),new $(".gallery a").refresh()}const g=document.querySelector(".form"),d=document.querySelector(".gallery");document.querySelector(".input");const u=document.querySelector(".loader"),a=document.querySelector(".btn-load");function y(){u.classList.remove("hidden"),u.classList.add("active")}function v(){u.classList.remove("active"),u.classList.add("hidden")}let c=1,l=null,L=0;g.addEventListener("submit",M);a.addEventListener("click",R);async function M(s){s.preventDefault();const r=s.currentTarget;if(l=g.elements.query.value,!l){f.error({message:"Error, the search field cannot be empty!",position:"topRight"});return}d.innerHTML="",c=1,y();try{const{hits:o,totalHits:i}=await m(l);if(o.length===0)throw new Error("No cards found");L=Math.ceil(i/h),p(o,d),a.classList.remove("is-hidden")}catch(o){console.log(o.message),a.classList.add("is-hidden")}finally{r.reset(),v()}}async function R(){c+=1,y();try{a.classList.remove("is-hidden");const{hits:s}=await m(l,c);p(s,d),O(),c>=Math.min(L,3)&&(a.classList.add("is-hidden"),f.info({message:"We are sorry, but you have reached the end of search results.",position:"topRight"}))}catch{f.error({message:"Something went wrong",position:"topRight"})}finally{v()}}function O(){const o=d.lastElementChild.getBoundingClientRect().height*3;window.scrollBy({top:o,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
