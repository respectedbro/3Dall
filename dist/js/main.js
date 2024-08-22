(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let n;const l=e=>e<10?"0"+e:e,r=()=>{const r=(()=>{const e=(new Date("25 august 2024").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.textContent=l(r.hours),t.textContent=l(r.minutes),o.textContent=l(r.seconds),r.timeRemaining<0&&(e.textContent="00",t.textContent="00",o.textContent="00",clearInterval(n))};r(),n=setInterval(r,1e3)})(),(()=>{document.querySelector(".menu");const e=document.querySelector("menu");e.querySelector(".close-btn"),e.querySelectorAll("ul>li>a"),document.addEventListener("click",(t=>{(t.target.closest(".menu")||t.target.closest(".close-btn")||t.target.closest("ul>li>a"))&&e.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.documentElement.offsetWidth;e.style.opacity=0,e.style.visibility="hidden";const n=()=>{o<768?(e.style.display="block",e.style.visibility="visible",e.style.opacity=1):(()=>{let t=0;const o=()=>{t+=.04,e.style.opacity=t,t<1&&requestAnimationFrame(o)};e.style.display="block",e.style.visibility="visible",o()})()};t.forEach((e=>e.addEventListener("click",n))),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(o<768&&(e.style.display="none"),(()=>{let t=1;const o=()=>{t-=.04,e.style.opacity=t,t>0?requestAnimationFrame(o):(e.style.visibility="hidden",e.style.display="none")};o()})())}))})(),(()=>{const e=document.querySelectorAll(".form-name"),t=document.querySelectorAll(".form-email"),o=document.querySelectorAll(".form-phone"),n=document.getElementById("form2-name"),l=document.getElementById("form2-message"),r=e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s\-]/,"")};e.forEach((e=>{e.addEventListener("input",(e=>{r(e)}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z0-9@_.!~*']/g,"")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()\-]/g,"")}))})),n.addEventListener("input",(e=>{r(e)})),l.addEventListener("input",(e=>{r(e)}))})(),document.querySelectorAll(".calc-block > input").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{e.target.closest(".service-header-tab")&&t.forEach(((t,n)=>{t===e.target.closest(".service-header-tab")?(t.classList.add("active"),o[n].classList.remove("d-none")):(t.classList.remove("active"),o[n].classList.add("d-none"))}))}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelectorAll(".dot");let n,l=0;const r=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)},c=()=>{r(t,l,"portfolio-item-active"),r(o,l,"dot-active"),l++,l>=t.length&&(l=0),a(t,l,"portfolio-item-active"),a(o,l,"dot-active")},s=(e=1500)=>{n=setInterval(c,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(r(t,l,"portfolio-item-active"),r(o,l,"dot-active"),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(l=o)})),l>=t.length&&(l=0),l<0&&(l=t.length-1),a(t,l,"portfolio-item-active"),a(o,l,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s(2e3)}),!0),s(2e3)})()})();