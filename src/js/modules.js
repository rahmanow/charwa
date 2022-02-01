let projectCards = [
    ['ecommerce', 'img/projects/satynal.png', '<li>UX/UI</li><li>Front-End</li><li>Prestashop</li>'],
    ['blog', 'img/projects/blogyn_azady.png', '<li>Front-end</li><li>Ghost CMS</li>'],
    ['ecommerce', 'img/projects/bip_fly.png', '<li>UX/UI</li>'],
    ['business', 'img/projects/poda.png', '<li>UX/UI</li>'],
    ['blog', 'img/projects/renkli_sahypa.png', '<li>Front-end</li><li>Ghost CMS</li>'],
    ['motion graphics', 'img/projects/hayat_creative.png', '<li>motion graphic</li><li>after effects</li>']
].map(([type, image, tech]) => (
    `<div class="project-card">
            <img src=${image} alt="..." />
            <div class="img-overlay">
                <ul class="project-tech">
                    ${tech}
                </ul>
                <p class="project-type">${type}</p>
            </div>
        </div>`
)).join('');


let teamCards = [
    ['Azat', 'img/azat_avatar.svg', '"PROBLEM SOLVER & DISCIPLINED"', 'img/barista_icon.png', 'Professional barista', 'img/mind_reader.png', 'she can read people\'s minds'],
    ['Sevda', 'img/sevda_avatar.svg', '"PROBLEM SOLVER & DISCIPLINED"', 'img/barista_icon.png', 'Professional barista', 'img/mind_reader.png', 'she can read people\'s minds'],
    ['Sona', 'img/sona_avatar.svg', '"PROBLEM SOLVER & DISCIPLINED"', 'img/barista_icon.png', 'Professional barista', 'img/mind_reader.png', 'she can read people\'s minds'],
    ['Kakajan', 'img/kakajan_avatar.svg', '"PROBLEM SOLVER & DISCIPLINED"', 'img/barista_icon.png', 'Professional barista', 'img/mind_reader.png', 'she can read people\'s minds'],
]