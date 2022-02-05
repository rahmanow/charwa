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

let teamCardsMap = teamCards.map(([id, name, avatar, personality, leftFact, leftFactIcon, rightFact, rightFactIcon]) =>(
    `<div class='${id} m-5 p-6 rounded-xl bg-ch-dark lg:w-5/12'>
            <div class="relative">
              <div class='${id}-visible-part h-[32rem] lg:h-[42rem] bg-ch-background flex rounded-xl'>
                <img src='img/avatars/${avatar}' class='${id}-avatar py-4 h-[27rem] self-end w-full' alt="#" />
                <div class='${id}-card-inner'>
                  <img src="img/avatars/facts/arrow.svg" class="absolute top-16 left-4 w-16" alt="" />
                  <p class="absolute top-6 left-4 text-2xl">${name}</p>
                </div>
              </div>
              <div class='${id}-random-fact hidden'>
                <div class="absolute top-10 left-1/2 font-semibold text-xl w-48 text-center lowercase transform -translate-x-1/2">${personality}</div>
                <div class="absolute top-24 left-8 flex flex-col w-24 lg:w-40 items-center content-start">
                  <img src='img/avatars/facts/${leftFactIcon}' class="w-24" alt="" />
                  <div class="w-28 text-center lowercase">${leftFact}</div>
                  <img class="w-8 self-start" src="img/avatars/facts/left.svg" alt="">
                </div>
                <div class="absolute top-28 right-8 flex flex-col w-24 lg:w-40 items-center align-flex-end">
                  <img src='img/avatars/facts/${rightFactIcon}' class="w-24" alt="" />
                  <div class="w-28 text-center lowercase">${rightFact}</div>
                  <img class="pt-7 w-8 self-end" src="img/avatars/facts/right.svg" alt="">
                </div>
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

// const teamHomepage = () => {
//     team.forEach(item => {
//         const [name, avatar, position, social] = item;
//         `<div class="flex flex-col justify-center items-center space-y-4">
//         <div class="w-56 h-56 rounded-full bg-ch-lightgreen flex justify-center items-center">
//           <img src="img/avatars/${avatar}.svg" alt="...">
//         </div>
//         <div>
//          <h4>${name}</h4>
//          <p class="mb-0">${position}</p>
//         </div>
//         <div>
//         <div class="social-icons list-none flex justify-center items-center pl-0">
//         ${social.forEach(i => {
//             let [soc, user] = i;
//             `<div class="team-icon ${soc}">
//                     <a href="${socialMedia.link[soc] + user}">
//                         ${socialMedia.icons[soc]}
//                     </a>
//                 </div>`
//         })}
//         </div>
//         </div>
//       </div>`
//     });
// }


let teamMap = team.map(([name, avatar, position, social]) => (
    `<div class="flex flex-col justify-center items-center space-y-4">
        <div class="w-56 h-56 rounded-full bg-ch-lightgreen flex justify-center items-center">
          <img src="img/avatars/${avatar}" alt="...">
        </div>
        <div>
         <h4>${name}</h4>
         <p class="mb-0">${position}</p>
        </div>
        <div>
        <div class="social-icons list-none flex justify-center items-center pl-0">
            <div class="team-icon ${social[0][0]}">
                <a href="${homeTeam.smLinks[social[0][0]] + social[0][1]}">
                    ${homeTeam.smIcons[social[0][0]]}
                </a>
            </div>
        </div>
        </div>
      </div>`
)).join('');

const teamContact = (x) => {
    Object.values(homeTeam.members).forEach(item => {
        let socialLinks = Object.entries(item.accounts);
        let icons;
        socialLinks.forEach(i =>{
            icons += `<div class="team-icon ${i[0]}">
            <a href="${homeTeam.smLinks[i[0]] + i[1]}">
                ${homeTeam.smIcons[i[0]]}
            </a>
        </div>`;
        });
        let [avatar, name, position] = [item.avatar, item.name, item.position];
        `<div class="flex flex-col justify-center items-center space-y-4">
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
    })
}
//addInnerHTML('#home-team1', teamContact);