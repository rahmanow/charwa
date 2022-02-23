function ready(a){"loading"!==document.readyState?a():document.addEventListener("DOMContentLoaded",a)}const path=location.pathname;let page=""===path||"/"===path?"index":path.substring(1).split(".")[0],projectCards=[["ecommerce","satynal.jpg","","<li>UX/UI</li><li>Front-End</li><li>Prestashop</li>"],["blog","blogyn_azady.jpg","","<li>Front-end</li><li>Ghost CMS</li>"],["ecommerce","bip_fly.jpg","","<li>UX/UI</li>"],["business","poda.jpg","","<li>UX/UI</li>"],["blog","renkli_sahypa.jpg","","<li>Front-end</li><li>Ghost CMS</li>"],["motion graphics","hayat_creative.jpg","https://www.youtube.com/watch?v=11T2ZYvJdPk","<li>motion graphic</li><li>after effects</li>"]],menu=[["home","menu-sub-yellow.svg","index.html"],["work","menu-sub-orange.svg","work.html"],["about us","menu-sub-yellow.svg","aboutus.html"]],clients=[["Eyesinden","eyesinden_logo.svg"],["Satynal","satynal_logo.svg"],["Bipfly","bipfly_logo.svg"],["Renkli Sahypa","renkli-sahypa_logo.svg"],["Taze Tanys","taze-tanysh_logo.svg"]],teamCards=[["ar","Azat","azat_avatar.svg","azat.png"],["sk","Sevda","sevda_avatar.svg","sevda.png"],["sc","Sona","sona_avatar.svg","sona.png"],["ko","Kakajan","kakajan_avatar.svg","kakajan.png"]],slidingTextAboutUs={slidingElements:["charwa","developers","designers","cat lovers","travellers"],config:{preText:"We are",customClass:{div:"",ul:"",liText:"",liImg:""},elementType:"text",sliderHeight:"6rem",wordLineHeight:"6rem"}};const homeTeam={members:{azat:{name:"Azat Rahmanov",avatar:"azat_avatar.svg",position:"Full-Stack Web Developer",accounts:{linkedin:"rahmanow",github:"rahmanow",twitter:"azadik",instagram:"azadik"}},sevda:{name:"Sevda Kantürk",avatar:"sevda_avatar.svg",position:"Front-End Web Developer",accounts:{linkedin:"sevdakanturk",github:"sevdakanturk",twitter:"sevdakanturk",instagram:"sevdakanturk"}},sona:{name:"Sona Chariyeva",avatar:"sona_avatar.svg",position:"UX/UI Designer",accounts:{linkedin:"sonacharyyeva",dribble:"sonacharyyeva",behance:"sonacharyyeva",instagram:"sonacharyyeva"}},kakajan:{name:"Kakajan Ovezov",avatar:"kakajan_avatar.svg",position:"Filmmaker-Photographer",accounts:{linkedin:"kakajanowezow",vimeo:"kakajanowezow",twitter:"kakajanowezow",instagram:"kakajanowezow"}}},smLinks:{linkedin:"https://www.linkedin.com/in/",github:"https://github.com/",twitter:"https://twitter.com/",instagram:"https://instagram.com/",behance:"https://www.behance.net/",dribble:"https://dribbble.com/",vimeo:"https://vimeo.com/"},smIcons:{linkedin:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="iconLinkedin">Linkedin Icon</title><desc id="iconLinkedin">Linkedin Icon</desc><path d="M3.60001 16H0.199997V5.3H3.60001V16ZM1.9 3.8C0.800002 3.8 0 3 0 1.9C0 0.8 0.900002 0 1.9 0C3 0 3.8 0.8 3.8 1.9C3.8 3 3 3.8 1.9 3.8ZM16 16H12.6V10.2C12.6 8.5 11.9 8 10.9 8C9.89999 8 8.89999 8.8 8.89999 10.3V16H5.5V5.3H8.7V6.8C9 6.1 10.2 5 11.9 5C13.8 5 15.8 6.1 15.8 9.4V16H16Z" fill="#FBFAF1"/></svg>',github:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="iconGithub">Github Icon</title><desc id="iconGithub">Github Icon</desc><path fill-rule="evenodd" clip-rule="evenodd" d="M7.97553 0.191406C3.57186 0.191406 0 3.76327 0 8.16694C0 11.6899 2.29969 14.6746 5.43119 15.751C5.82263 15.8 5.96942 15.5553 5.96942 15.3596C5.96942 15.1639 5.96942 14.6746 5.96942 13.9896C3.76758 14.4789 3.27829 12.9131 3.27829 12.9131C2.93578 11.9835 2.39755 11.7388 2.39755 11.7388C1.66361 11.2495 2.44648 11.2495 2.44648 11.2495C3.22936 11.2984 3.66972 12.0813 3.66972 12.0813C4.40367 13.3046 5.52905 12.962 5.96942 12.7663C6.01835 12.2281 6.263 11.8856 6.45872 11.6899C4.69725 11.4942 2.83792 10.8091 2.83792 7.72657C2.83792 6.84584 3.1315 6.16083 3.66972 5.57367C3.6208 5.42688 3.32722 4.59508 3.76758 3.51862C3.76758 3.51862 4.4526 3.3229 5.96942 4.35043C6.6055 4.15471 7.29052 4.10578 7.97553 4.10578C8.66055 4.10578 9.34556 4.20364 9.98165 4.35043C11.4985 3.3229 12.1835 3.51862 12.1835 3.51862C12.6239 4.59508 12.3303 5.42688 12.2813 5.6226C12.7706 6.16083 13.1131 6.89477 13.1131 7.7755C13.1131 10.8581 11.2538 11.4942 9.49235 11.6899C9.78593 11.9345 10.0306 12.4238 10.0306 13.1578C10.0306 14.2342 10.0306 15.066 10.0306 15.3596C10.0306 15.5553 10.1774 15.8 10.5688 15.751C13.7492 14.6746 16 11.6899 16 8.16694C15.9511 3.76327 12.3792 0.191406 7.97553 0.191406Z" fill="#FBFAF1"/></svg>',twitter:'<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="iconTwitter">Twitter Icon</title><desc id="iconTwitter">Twitter Icon</desc><path d="M16 2C15.4 2.3 14.8 2.4 14.1 2.5C14.8 2.1 15.3 1.5 15.5 0.7C14.9 1.1 14.2 1.3 13.4 1.5C12.8 0.9 11.9 0.5 11 0.5C8.9 0.5 7.3 2.5 7.8 4.5C5.1 4.4 2.7 3.1 1 1.1C0.1 2.6 0.6 4.5 2 5.5C1.5 5.5 1 5.3 0.5 5.1C0.5 6.6 1.6 8 3.1 8.4C2.6 8.5 2.1 8.6 1.6 8.5C2 9.8 3.2 10.8 4.7 10.8C3.5 11.7 1.7 12.2 0 12C1.5 12.9 3.2 13.5 5 13.5C11.1 13.5 14.5 8.4 14.3 3.7C15 3.3 15.6 2.7 16 2Z" fill="#FBFAF1"/></svg>',instagram:'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="iconInstagram">Instagram Icon</title><desc id="iconInstagram">Instagram Icon</desc><path d="M8.99922 2.19922C11.1992 2.19922 11.4992 2.19922 12.3992 2.19922C13.1992 2.19922 13.5992 2.39922 13.8992 2.49922C14.2992 2.69922 14.5992 2.79922 14.8992 3.09922C15.1992 3.39922 15.3992 3.69922 15.4992 4.09922C15.5992 4.39922 15.6992 4.79922 15.7992 5.59922C15.7992 6.49922 15.7992 6.69922 15.7992 8.99922C15.7992 11.2992 15.7992 11.4992 15.7992 12.3992C15.7992 13.1992 15.5992 13.5992 15.4992 13.8992C15.2992 14.2992 15.1992 14.5992 14.8992 14.8992C14.5992 15.1992 14.2992 15.3992 13.8992 15.4992C13.5992 15.5992 13.1992 15.6992 12.3992 15.7992C11.4992 15.7992 11.2992 15.7992 8.99922 15.7992C6.69922 15.7992 6.49922 15.7992 5.59922 15.7992C4.79922 15.7992 4.39922 15.5992 4.09922 15.4992C3.69922 15.2992 3.39922 15.1992 3.09922 14.8992C2.79922 14.5992 2.59922 14.2992 2.49922 13.8992C2.39922 13.5992 2.29922 13.1992 2.19922 12.3992C2.19922 11.4992 2.19922 11.2992 2.19922 8.99922C2.19922 6.69922 2.19922 6.49922 2.19922 5.59922C2.19922 4.79922 2.39922 4.39922 2.49922 4.09922C2.69922 3.69922 2.79922 3.39922 3.09922 3.09922C3.39922 2.79922 3.69922 2.59922 4.09922 2.49922C4.39922 2.39922 4.79922 2.29922 5.59922 2.19922C6.49922 2.19922 6.79922 2.19922 8.99922 2.19922ZM8.99922 0.699219C6.69922 0.699219 6.49922 0.699219 5.59922 0.699219C4.69922 0.699219 4.09922 0.899219 3.59922 1.09922C3.09922 1.29922 2.59922 1.59922 2.09922 2.09922C1.59922 2.59922 1.39922 2.99922 1.09922 3.59922C0.899219 4.09922 0.799219 4.69922 0.699219 5.59922C0.699219 6.49922 0.699219 6.79922 0.699219 8.99922C0.699219 11.2992 0.699219 11.4992 0.699219 12.3992C0.699219 13.2992 0.899219 13.8992 1.09922 14.3992C1.29922 14.8992 1.59922 15.3992 2.09922 15.8992C2.59922 16.3992 2.99922 16.5992 3.59922 16.8992C4.09922 17.0992 4.69922 17.1992 5.59922 17.2992C6.49922 17.2992 6.79922 17.2992 8.99922 17.2992C11.1992 17.2992 11.4992 17.2992 12.3992 17.2992C13.2992 17.2992 13.8992 17.0992 14.3992 16.8992C14.8992 16.6992 15.3992 16.3992 15.8992 15.8992C16.3992 15.3992 16.5992 14.9992 16.8992 14.3992C17.0992 13.8992 17.1992 13.2992 17.2992 12.3992C17.2992 11.4992 17.2992 11.1992 17.2992 8.99922C17.2992 6.79922 17.2992 6.49922 17.2992 5.59922C17.2992 4.69922 17.0992 4.09922 16.8992 3.59922C16.6992 3.09922 16.3992 2.59922 15.8992 2.09922C15.3992 1.59922 14.9992 1.39922 14.3992 1.09922C13.8992 0.899219 13.2992 0.799219 12.3992 0.699219C11.4992 0.699219 11.2992 0.699219 8.99922 0.699219Z" fill="#FBFAF1"/><path d="M8.99922 4.69922C6.59922 4.69922 4.69922 6.59922 4.69922 8.99922C4.69922 11.3992 6.59922 13.2992 8.99922 13.2992C11.3992 13.2992 13.2992 11.3992 13.2992 8.99922C13.2992 6.59922 11.3992 4.69922 8.99922 4.69922ZM8.99922 11.7992C7.49922 11.7992 6.19922 10.5992 6.19922 8.99922C6.19922 7.49922 7.39922 6.19922 8.99922 6.19922C10.4992 6.19922 11.7992 7.39922 11.7992 8.99922C11.7992 10.4992 10.4992 11.7992 8.99922 11.7992Z" fill="#FBFAF1"/><path d="M13.3992 5.59922C13.9515 5.59922 14.3992 5.1515 14.3992 4.59922C14.3992 4.04693 13.9515 3.59922 13.3992 3.59922C12.8469 3.59922 12.3992 4.04693 12.3992 4.59922C12.3992 5.1515 12.8469 5.59922 13.3992 5.59922Z" fill="#FBFAF1"/></svg>',behance:'<svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="iconBehance">Behance Icon</title><desc id="iconBehance">Behance Icon</desc><path d="M6.28699 0.296875C6.90275 0.296875 7.47115 0.344241 7.99217 0.486339C8.5132 0.581072 8.93949 0.770536 9.31842 1.00737C9.69735 1.2442 9.98155 1.57576 10.171 2.00206C10.3605 2.42835 10.4552 2.94938 10.4552 3.51777C10.4552 4.1809 10.3131 4.74929 9.98155 5.17559C9.69735 5.60188 9.22369 5.98081 8.6553 6.26501C9.46052 6.50184 10.0763 6.92813 10.4552 7.49652C10.8341 8.06492 11.071 8.77541 11.071 9.58063C11.071 10.2438 10.9289 10.8122 10.692 11.2858C10.4552 11.7595 10.0763 12.1858 9.64999 12.47C9.22369 12.7542 8.70266 12.991 8.13427 13.1331C7.56588 13.2752 6.99748 13.3699 6.42909 13.3699H0.0820312V0.296875H6.28699ZM5.90806 5.60188C6.42909 5.60188 6.85538 5.45978 7.18695 5.22295C7.51851 4.98612 7.66061 4.55983 7.66061 4.0388C7.66061 3.7546 7.61324 3.4704 7.51851 3.28094C7.42378 3.09148 7.28168 2.94938 7.09222 2.80728C6.90275 2.71255 6.71329 2.61781 6.47646 2.57045C6.23963 2.52308 6.00279 2.52308 5.7186 2.52308H2.97136V5.60188H5.90806ZM6.05016 11.1911C6.33436 11.1911 6.61855 11.1437 6.85539 11.0963C7.09222 11.049 7.32905 10.9543 7.51851 10.8122C7.70797 10.6701 7.85007 10.528 7.99217 10.2911C8.0869 10.0543 8.18164 9.7701 8.18164 9.43854C8.18164 8.77541 7.99217 8.30175 7.61324 7.97019C7.23431 7.68599 6.71329 7.54389 6.09753 7.54389H2.97136V11.1911H6.05016ZM15.1918 11.1437C15.5707 11.5226 16.1391 11.7121 16.897 11.7121C17.418 11.7121 17.8917 11.57 18.2706 11.3332C18.6495 11.049 18.8864 10.7648 18.9811 10.4806H21.302C20.9231 11.6174 20.3547 12.4226 19.5969 12.9436C18.839 13.4173 17.9391 13.7015 16.8496 13.7015C16.0918 13.7015 15.4287 13.5594 14.8129 13.3226C14.1971 13.0857 13.7235 12.7542 13.2972 12.2805C12.8709 11.8542 12.5393 11.3332 12.3499 10.7174C12.113 10.1017 12.0183 9.43854 12.0183 8.68068C12.0183 7.97019 12.113 7.30706 12.3499 6.6913C12.5867 6.07554 12.9182 5.55451 13.3445 5.08085C13.7708 4.65456 14.2919 4.27563 14.8603 4.0388C15.476 3.80197 16.0918 3.65987 16.8496 3.65987C17.6549 3.65987 18.3653 3.80197 18.9811 4.13353C19.5969 4.46509 20.0705 4.84402 20.4495 5.41242C20.8284 5.93344 21.1126 6.5492 21.302 7.21233C21.3968 7.87545 21.4441 8.53858 21.3968 9.29644H14.5287C14.5287 10.0543 14.8129 10.7648 15.1918 11.1437ZM18.1759 6.17027C17.8443 5.83871 17.3233 5.64925 16.7075 5.64925C16.2812 5.64925 15.9497 5.74398 15.6655 5.88608C15.3813 6.02818 15.1918 6.21764 15.0024 6.4071C14.8129 6.59657 14.7182 6.8334 14.6708 7.07023C14.6234 7.30706 14.5761 7.49653 14.5761 7.68599H18.839C18.7443 6.9755 18.5074 6.50184 18.1759 6.17027ZM14.0077 1.19683H19.3127V2.47572H14.0077V1.19683Z" fill="white"/></svg>',dribble:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="iconDribble">Dribble Icon</title><desc id="iconDribble">Dribble Icon</desc><path d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.4 16 16 12.416 16 8C16 3.584 12.4 0 8 0ZM13.28 3.68C14.24 4.848 14.8 6.32 14.832 7.936C14.608 7.888 12.352 7.44 10.08 7.712C10.032 7.6 9.984 7.472 9.936 7.36C9.792 7.024 9.648 6.688 9.488 6.368C11.984 5.36 13.136 3.872 13.28 3.68ZM8 1.184C9.728 1.184 11.328 1.84 12.528 2.896C12.4 3.072 11.376 4.448 8.944 5.36C7.824 3.296 6.576 1.616 6.4 1.36C6.912 1.248 7.44 1.184 8 1.184ZM5.088 1.824C5.264 2.064 6.48 3.76 7.616 5.776C4.416 6.624 1.6 6.608 1.296 6.608C1.76 4.48 3.184 2.72 5.088 1.824ZM1.168 8.016C1.168 7.952 1.168 7.872 1.168 7.808C1.456 7.824 4.784 7.856 8.192 6.832C8.384 7.216 8.576 7.6 8.752 8C8.672 8.032 8.576 8.048 8.48 8.08C4.96 9.216 3.088 12.32 2.928 12.576C1.824 11.36 1.168 9.76 1.168 8.016ZM8 14.832C6.416 14.832 4.96 14.288 3.808 13.392C3.936 13.136 5.312 10.464 9.168 9.12C9.184 9.104 9.2 9.104 9.216 9.104C10.176 11.6 10.576 13.68 10.672 14.288C9.856 14.64 8.944 14.832 8 14.832ZM11.808 13.664C11.744 13.248 11.376 11.248 10.48 8.8C12.624 8.464 14.496 9.024 14.736 9.088C14.432 10.992 13.344 12.64 11.808 13.664Z" fill="#FBFAF1"/></svg>',vimeo:'<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="iconVimeo">Vimeo Icon</title><desc id="iconVimeo">Vimeo Icon</desc><path d="M0 3.7991L0.7 4.6991C0.7 4.6991 2 3.5991 2.5 4.1991C2.9 4.6991 4.7 11.0991 5.2 12.2991C5.7 13.2991 7.1 14.6991 8.6 13.6991C10.1 12.6991 15.1 8.4991 16 3.3991C16.9 -1.6009 10 -0.600897 9.3 3.7991C11 2.6991 12 4.1991 11 5.9991C10.1 7.6991 9.2 8.8991 8.8 8.8991C8.4 8.8991 8 7.6991 7.5 5.6991C7 3.4991 7 -0.300897 4.8 0.199103C2.7 0.599103 0 3.7991 0 3.7991Z" fill="#FBFAF1"/></svg>'}},addClass=(a,e)=>{Array.isArray(a)?a.forEach((a=>{document.querySelector(a).classList.add(e)})):document.querySelector(a)&&document.querySelector(a).classList.add(e)},removeClass=(a,e)=>{Array.isArray(a)?a.forEach((a=>{document.querySelector(a).classList.remove(e)})):document.querySelector(a)&&document.querySelector(a).classList.remove(e)},hideElement=a=>{Array.isArray(a)?a.forEach((a=>{addClass(a,"hidden")})):addClass(a,"hidden")},addStyle=(a,e)=>{document.querySelector(a).style=e.join(";")},addInnerHTML=(a,e)=>{a&&(document.querySelector(a).innerHTML=e)},callback=function(a){a.forEach((a=>{a.isIntersecting?a.target.classList.add("animate-fadeIn"):a.target.classList.remove("animate-fadeIn")}))},observer=new IntersectionObserver(callback),targets=document.querySelectorAll(".modules");targets.forEach((function(a){a.classList.add("opacity-5"),observer.observe(a)}));const projectCardsMap=projectCards.map((([a,e,t,n])=>`<div class="project-card lowercase relative overflow-hidden bg-black rounded-lg text-white relative">\n            <a href="${t}" class="z-[100]" rel="external" target="_blank">\n            <img src='img/projects/${e}' alt="..." width="100%" height="auto" class="opacity-70 w-full h-auto scale-125 transition-all duration-500 ease-out delay-75" />\n            <div class="absolute top-0 right-0 bottom-0 left-0 p-4 rounded-[calc(0.25rem+1px)]">\n                <ul class="project-tech text-ch-background flex text-xs w-max absolute -top-16 left-4 transition-all duration-300 pl-0">\n                    ${n}\n                </ul>\n                <p class="project-type border border-solid border-gray-50 text-ch-background text-xs rounded-xl w-max px-2 pt-1 pb-0.5 absolute top-4 left-4 transition-all duration-300">${a}</p>\n            </div>\n             </a>\n        </div>`)).join(""),menuMap=menu.map((([a,e,t])=>`<div class="navigation-item transition-all duration-500 ease-in-out hover:scale-100">\n    <a class="navigation-link text-white relative flex justify-center items-center text-4xl font-bold no-underline visited:text-4xl visited:font-bold visited:no-underline" href="${t}">\n        <span class="menu-svg hidden pb-6 absolute md:inline opacity-0 transition-opacity duration-500 w-80 hover:opacity-100">\n            <img src="./img/icons/${e}" alt="">\n        </span>\n        <span>${a}</span>\n    </a>\n</div>`)).join(""),clientsMap=clients.map((([a,e])=>`<div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">\n        <img src="img/client-logo/${e}" alt="${a}" class="block object-contain h-16">\n      </div>`)).join("");let teamCardsMap=teamCards.map((([a,e,t,n])=>`<div class='${a} my-5 p-4 sm:p-12 rounded-xl bg-ch-dark lg:w-[calc(50%-theme(space.8))]'>\n            <div class="relative md:pb-6">\n              <div class='${a}-visible-part h-128 sm:h-168 bg-ch-background flex rounded-xl'>\n                <img src='img/avatars/${t}' class='${a}-avatar py-12 md:py-4 h-108 md:h-128 self-end w-full' alt="#" />\n                <div class='${a}-card-inner'>\n                  <p class="lowercase absolute top-6 left-4 text-2xl">${e}</p>\n                  <img src="img/avatars/facts/arrow.svg" class="absolute top-16 left-4 w-16" alt="" />\n                </div>\n              </div>\n              <div class='${a}-random-fact absolute top-4 w-full transform transition-opacity duration-200 opacity-0'>\n                  <img class="pt-7 absolute left-1/2 px-8 transform -translate-x-1/2" src="img/avatars/facts/${n}" alt="">\n              </div>\n            </div>\n            <div onclick="unlockCard('${a}')" class="unlock-button mt-4 h-14 border-2 rounded-lg py-2 flex justify-center items-center cursor-pointer">\n              <div class='${a}-locked flex justify-around items-center'>\n                <img class="pr-2" src="img/avatars/facts/lock.svg" alt="" />\n                <span class="text-xl text-white">unlock random fact</span>\n              </div>\n              <div class='${a}-unlocked flex hidden justify-around items-center'>\n                <img class="pr-2" src="img/avatars/facts/unlock.svg" alt=""/>\n                <span class="text-xl text-white">random fact unlocked!</span>\n              </div>\n            </div>\n    </div>`)).join(""),teamMap=Object.values(homeTeam.members).map((a=>{let e=Object.entries(a.accounts).map((a=>`<div class="team-icon ${a[0]} hover:border-2 flex justify-center items-center mx-1 border rounded-full w-9 h-9">\n                <a href="${homeTeam.smLinks[a[0]]+a[1]}">\n                   ${homeTeam.smIcons[a[0]]}\n                </a>\n             </div>`)).join(""),[t,n,i]=[a.avatar,a.name,a.position];return`<div class="flex flex-col justify-center items-center space-y-4 pb-8">\n            <div class="w-56 h-56 rounded-full bg-ch-lightgreen flex justify-center items-center">\n               <img src="img/avatars/${t}" alt="...">\n            </div>\n            <div class="font-mitr lowercase">\n               <div class="text-2xl">${n}</div>\n               <p class="mb-0">${i}</p>\n            </div>\n            <div class="social-icons list-none flex justify-center items-center pl-0">\n               ${e}\n            </div>\n         </div>`})).join(""),sliding=a=>{let e=Object.values(a),t=Object.values(a.config);const[n,i,s,l,o]=t,r=e[0].map((a=>"text"===s?`<li class="block text-left ${i.liText}" style="height:${l}; line-height: ${o}">${a}</li>`:"image"===s?`<li class="block text-left ${i.liImg}" style="height:${l}; line-height: ${o}">\n                        <img src="img/client-logo/${a}" alt="">\n                    </li>`:void 0));r.push(r[0]);let d=r.join("");return`${n?"<div>"+n+"</div>":""} <div class="mx-4 md:mx-6 lg:mx-7 flex flex-col justify-between overflow-hidden align-middle ${i.div}" style="height:${l}">\n                <ul class="inline-block m-0 p-0 list-none animate-slide ${i.ul}">\n                    ${d}\n                </ul>\n            </div>`};ready((()=>{window.onscroll=()=>{(window.scrollY|document.body.scrollTop)>=100?(addClass(".navigation-bar","nav-scroll"),addClass(".logo","logo-scroll"),addClass(".mouse-container","md:opacity-0")):(removeClass(".navigation-bar","nav-scroll"),removeClass(".logo","logo-scroll"),removeClass(".mouse-container","md:opacity-0"))}}));let slidingMap=sliding(slidingTextAboutUs);addInnerHTML("#nav-list",menuMap),"index"===page?(addClass(".header-class","bg-ch-dark"),addClass(".navigation-bar","dark-navbar"),addInnerHTML("#projects",projectCardsMap),addInnerHTML("#home-team",teamMap),addInnerHTML("#client-slider",clientsMap)):"aboutus"===page?(addClass(".header-class","bg-ch-background"),addClass(".navigation-bar","light-navbar"),addInnerHTML("#sliding-items",slidingMap),addInnerHTML("#team-cards",teamCardsMap)):"work"===page&&(addClass(".header-class","bg-ch-background"),addClass(".navigation-bar","light-navbar"),addInnerHTML("#work-projects",projectCardsMap));const unlockCard=a=>{var e;e=["."+a+"-card-inner","."+a+"-locked"],Array.isArray(e)?e.forEach((a=>{addClass(a,"hidden")})):addClass(e,"hidden"),removeClass(["."+a+"-random-fact"],"opacity-0"),removeClass(["."+a+"-unlocked"],"hidden"),addClass("."+a+"-avatar","avatar")},logoMouseOver=()=>{addClass(".slogan","slogan-animation"),addClass(".logo","logo-animation")},logoMouseOut=()=>{removeClass(".slogan","slogan-animation"),removeClass(".logo","logo-animation")};