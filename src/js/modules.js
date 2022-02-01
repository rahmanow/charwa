let projectCards = [
    ['ecommerce', 'satynal.png', '<li>UX/UI</li><li>Front-End</li><li>Prestashop</li>'],
    ['blog', 'blogyn_azady.png', '<li>Front-end</li><li>Ghost CMS</li>'],
    ['ecommerce', 'bip_fly.png', '<li>UX/UI</li>'],
    ['business', 'poda.png', '<li>UX/UI</li>'],
    ['blog', 'renkli_sahypa.png', '<li>Front-end</li><li>Ghost CMS</li>'],
    ['motion graphics', 'hayat_creative.png', '<li>motion graphic</li><li>after effects</li>']
].map(([type, image, tech]) => (
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

let teamCards = [
    ['ar', 'Azat', 'azat_avatar.svg', '"FREE SPIRIT & CURIOUS"', 'he is walter white of tea', 'azat-tea-expert.png', 'big fan of najwa nimri', 'azat-najwa-nimri.png'],
    ['sk', 'Sevda', 'sevda_avatar.svg', '"PROBLEM SOLVER & DISCIPLINED"', 'Professional barista', 'sevda-barista.png', 'she can read people\'s minds', 'sevda-mind-reader.png'],
    ['sc', 'Sona', 'sona_avatar.svg', '"BRAVE & DREAMER"', 'she can walk like a ninja', 'sona-ninja.png',  'has a mermaid friend', 'sona-mermaid-friend.png'],
    ['ko', 'Kakajan', 'kakajan_avatar.svg', '"POPULAR & SELF CONFIDENT"', 'inventor of filter coffee', 'kakajan-filter-coffee.png', 'he has a very expensive camera', 'kakajan-expensive-camera.png'],
];

let teamCardsMap = teamCards.map(([id, name, avatar, personality, leftFact, leftFactIcon, rightFact, rightFactIcon]) =>(
    `<div class='${id} m-5 p-6 rounded-xl bg-ch-dark max-h-[39rem]'>
            <div class="relative">
              <div class='${id}-visible-part h-[32rem]'>
                <img src='img/avatars/${avatar}' class='${id}-avatar py-8 max-h-[32rem] w-full bg-ch-background rounded-xl' alt="#" />
                <div class='${id}-card-inner'>
                  <img src="img/avatars/facts/arrow.svg" class="arrow" alt="" />
                  <p class="img-name">${name}</p>
                </div>
              </div>
              <div class='${id}-random-fact hidden'>
                <div class="ability w-48 text-center lowercase">${personality}</div>
                <div class="ability-left absolute top-24 left-8 flex flex-col w-28 items-center content-start">
                  <img src='img/avatars/facts/${leftFactIcon}' class="" alt="" />
                  <div class="w-28 text-center lowercase">${leftFact}</div>
                  <img class="" src="img/avatars/facts/left.svg" alt="">
                </div>
                <div class="ability-right absolute top-24 right-8 flex flex-col w-28 items-center align-flex-end">
                  <img src='img/avatars/facts/${rightFactIcon}' class="" alt="" />
                  <div class="w-28 text-center lowercase">${rightFact}</div>
                  <img class="pt-7" src="img/avatars/facts/right.svg" alt="">
                </div>
              </div>
            </div>
            <div class="unlock-button mt-4 h-14 border-2 rounded-lg py-2 flex justify-center items-center cursor-pointer">
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

document.getElementById('team-cards').innerHTML = teamCardsMap;

const unlock = (id) => {
    document.querySelector('.' + id + ' .unlock-button').addEventListener('click',
        () => {
            removeClass('.'+ id + '-random-fact', 'hidden');
            hideElement('.'+ id + '-card-inner');
            hideElement('.'+ id + '-locked');
            removeClass('.'+ id + '-unlocked', 'hidden');
            addStyle('.'+ id + '-avatar', 'padding-top', '16rem');
        }, false);
}

const unlockAll = () => {
    let ids =[];
    teamCards.forEach(el => {
        ids.push(el[0]);
    })
    ids.forEach(el => {
        unlock(el);
    })
}

unlockAll();