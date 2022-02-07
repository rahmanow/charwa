const projectCardsMap = projectCards.map(([type, image, tech]) => (
    `<div class="project-card">
            <img src='img/projects/${image}' alt="..." />
            <div class="img-overlay">
                <ul class="project-tech">
                    ${tech}
                </ul>
                <p class="project-type">${type}</p>
            </div>
        </div>`
)).join('');

const menuMap = menu.map(([title, subImage, href]) => (
    `<div class="navigation-item transition-all duration-500 ease-in-out hover:scale-100">
    <a class="navigation-link text-white relative flex justify-center items-center text-4xl font-bold no-underline visited:text-4xl visited:font-bold visited:no-underline" href="${href}">
        <span class="menu-svg hidden pb-6 absolute md:inline w-80">
            <img src="./img/icons/${subImage}" alt="">
        </span>
        <span>${title}</span>
    </a>
</div>`
)).join('');

const clientsMap = clients.map(([name, logo]) => (
    `<div class="item">
        <img src="img/client-logo/${logo}" alt="${name}" class="img-fluid mx-auto">
     </div>`
)).join('');

let teamCardsMap = teamCards.map(([id,name, avatar, facts]) =>(
    `<div class='${id} my-5 p-4 sm:p-12 rounded-xl bg-ch-dark lg:w-[calc(50%-theme(space.8))]'>
            <div class="relative md:pb-6">
              <div class='${id}-visible-part h-128 sm:h-168 bg-ch-background flex rounded-xl'>
                <img src='img/avatars/${avatar}' class='${id}-avatar py-12 md:py-4 h-108 md:h-128 self-end w-full' alt="#" />
                <div class='${id}-card-inner'>
                  <img src="img/avatars/facts/arrow.svg" class="absolute top-16 left-4 w-16" alt="" />
                  <p class="absolute top-6 left-4 text-2xl">${name}</p>
                </div>
              </div>
              <div class='${id}-random-fact absolute top-4 w-full transform transition-opacity duration-200 opacity-0'>
                  <img class="pt-7 absolute left-1/2 px-8 transform -translate-x-1/2" src="img/avatars/facts/${facts}" alt="">
              </div>
            </div>
            <div onclick="unlockCard('${id}')" class="unlock-button mt-4 h-14 border-2 rounded-lg py-2 flex justify-center items-center cursor-pointer">
              <div class='${id}-locked flex justify-around items-center'>
                <img class="pr-2" src="img/avatars/facts/lock.svg" alt="" />
                <span class="text-xl text-white">unlock random fact</span>
              </div>
              <div class='${id}-unlocked flex hidden justify-around items-center'>
                <img class="pr-2" src="img/avatars/facts/unlock.svg" alt=""/>
                <span class="text-xl text-white">random fact unlocked!</span>
              </div>
            </div>
    </div>`
)).join('');

let teamMap  = Object.values(homeTeam.members).map(item => {
        let socialLinks = Object.entries(item.accounts);
        let icons = socialLinks.map(i => (
            `<div class="team-icon ${i[0]}">
                <a href="${homeTeam.smLinks[i[0]] + i[1]}">
                   ${homeTeam.smIcons[i[0]]}
                </a>
             </div>`
        )).join('');
        let [avatar, name, position] = [item.avatar, item.name, item.position];
        return `<div class="flex flex-col justify-center items-center space-y-4 pb-8">
            <div class="w-56 h-56 rounded-full bg-ch-lightgreen flex justify-center items-center">
               <img src="img/avatars/${avatar}" alt="...">
            </div>
            <div>
               <h4>${name}</h4>
               <p class="mb-0">${position}</p>
            </div>
            <div class="social-icons list-none flex justify-center items-center pl-0">
               ${icons}
            </div>
         </div>`
    }).join('');

let sliderTextMap = sliderText.map(([icon, line1, line2]) => (
    `<div class="md:flex md:items-center h-64 space-x-2 md:space-x-4 w-28 md:w-fit">
              <img class="mx-auto h-10" src="./img/icons/${icon}" alt="">
                <div class="text-ch-background pt-2 text-center md:text-left">
                    <p class="text-sm md:text-base">${line1}</p> 
                    <p class="text-sm md:text-base">${line2}</p>
                </div>
                          
          </div>`
)).join('');