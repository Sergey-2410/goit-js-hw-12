import{a as E,S as P,i as u}from"./assets/vendor-mdVVRe9K.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const $="46125124-f513c5cbcff31d6d16e67daed",q="https://pixabay.com/api/",h=15;async function m(o,r=1){const s=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:r}),i=`${q}?key=${$}&${s}`,{data:{hits:e,totalHits:t}}=await E.get(i);if(e.length===0)throw new Error("No cards found");return{hits:e,totalHits:t}}const H=new P(".gallery a");function p(o,r){const s=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:a,views:w,comments:b,downloads:S})=>`<li class="gallery-item">
    <a href="${e}" class="gallery-link" target="_blank">
      <img src="${i}" alt="${t}" class="gallery-image" />
    </a>
    <div class="info">
       <div class="container-likes">
       <p class="info-item"><span>Likes</span> ${a}</p>
       </div>
      <div class="container-views">
      <p class="info-item"><span>Views</span> ${w}</p>
      </div>
      <div class="container-comments">
      <p class="info-item"><span>Comments</span> ${b}</p>
      </div>
      <div class="container-downloads">
      <p class="info-item"><span>Downloads</span> ${S}</p>
      </div>
    </div>
  </li>`).join("");r.insertAdjacentHTML("beforeend",s),H.refresh()}const g=document.querySelector(".form"),d=document.querySelector(".gallery");document.querySelector(".input");const f=document.querySelector(".loader"),n=document.querySelector(".btn-load");function y(){f.classList.remove("hidden"),f.classList.add("active")}function L(){f.classList.remove("active"),f.classList.add("hidden")}let c=1,l=null,v=0;g.addEventListener("submit",M);n.addEventListener("click",R);async function M(o){o.preventDefault();const r=o.currentTarget;if(l=g.elements.query.value,!l){u.error({message:"Error, the search field cannot be empty!",position:"topRight"});return}d.innerHTML="",c=1,y();try{const{hits:s,totalHits:i}=await m(l);if(s.length===0)throw new Error("No cards found");v=Math.ceil(i/h),p(s,d),s.length<15?n.classList.add("is-hidden"):n.classList.remove("is-hidden")}catch(s){console.log(s.message),n.classList.add("is-hidden")}finally{r.reset(),L()}}async function R(){c+=1,y();try{n.classList.remove("is-hidden");const{hits:o}=await m(l,c);p(o,d),O(),c>=v&&(n.classList.add("is-hidden"),u.info({message:"We are sorry, but you have reached the end of search results.",position:"topRight"}))}catch{u.error({message:"Something went wrong",position:"topRight"})}finally{L()}}function O(){const s=d.lastElementChild.getBoundingClientRect().height*3;window.scrollBy({top:s,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
