(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let l;const s=e=>e<10?"0"+e:e,o=()=>{const o=(()=>{const e=(new Date("21 august 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.textContent=s(o.hours),t.textContent=s(o.minutes),n.textContent=s(o.seconds),o.timeRemaining<0&&(e.textContent="00",t.textContent="00",n.textContent="00",clearInterval(l))};o(),l=setInterval(o,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),l=t.querySelectorAll("ul>li>a"),s=()=>{t.classList.toggle("active-menu")};t.addEventListener("click",(l=>{l.target===e||l.target===n?t.classList.toggle("active-menu"):l.target.closest("ul>li>a")&&t.classList.remove("active-menu")})),l.forEach((e=>e.addEventListener("click",s)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.documentElement.offsetWidth;e.style.opacity=0,e.style.visibility="hidden";const l=()=>{n<768?(e.style.display="block",e.style.visibility="visible",e.style.opacity=1):(()=>{let t=0;const n=()=>{t+=.04,e.style.opacity=t,t<1&&requestAnimationFrame(n)};e.style.display="block",e.style.visibility="visible",n()})()};t.forEach((e=>e.addEventListener("click",l))),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(n<768&&(e.style.display="none"),(()=>{let t=1;const n=()=>{t-=.04,e.style.opacity=t,t>0?requestAnimationFrame(n):(e.style.visibility="hidden",e.style.display="none")};n()})())}))})(),(()=>{const e=document.querySelectorAll(".form-name"),t=document.querySelectorAll(".form-email"),n=document.querySelectorAll(".form-phone"),l=document.getElementById("form2-name"),s=document.getElementById("form2-message"),o=e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s\-]/,"")};e.forEach((e=>{e.addEventListener("input",(e=>{o(e)}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z0-9@_.!~*']/g,"")}))})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()\-]/g,"")}))})),l.addEventListener("input",(e=>{o(e)})),s.addEventListener("input",(e=>{o(e)}))})(),document.querySelectorAll(".calc-block > input").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{e.target.closest(".service-header-tab")&&t.forEach(((t,l)=>{t===e.target.closest(".service-header-tab")?(t.classList.add("active"),n[l].classList.remove("d-none")):(t.classList.remove("active"),n[l].classList.add("d-none"))}))}))})()})();