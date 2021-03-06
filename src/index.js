const hamburgerMenuContainer = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const portfolioContainer = document.querySelector('.portfolio-container');
const sideMenuLinks = document.querySelector('.side-menu').children;
const data = '/data.json'


hamburgerIcon.addEventListener('click', ()=> {
      hamburgerMenuContainer.classList.toggle('toggleMenu')
})

const portfolioDisplay = async () => {
    const fetchData = await (await fetch(data)).json();
    portfolioContainer.innerHTML = '';
    const portfolioContent = fetchData.map(item => {
        const {id, img, alt, dataOs, dataAosDuration, title, description, repo, liveSite, target} = item;
        return portfolioContainer.innerHTML += `<figure id=${id} class="portfolio-card" data-aos=${dataOs} data-aos-delay=${dataAosDuration}>
        <img src=${img} alt=${alt} class="card-img" />
        <figcaption class="card-content">
            <h4> ${title} </h4>
            <p> ${description} </p>
            <footer class="card-btns">
                <a href=${repo} target=${target}>
                <img src="/public/images/githubb.png" alt = "#" title="github repo" />
                </a>
                <a href=${liveSite} target=${target}>
                    <img src="/public/images/link.png" alt = "#" title="live site" /> 
                 </a>
            </footer>
         </figcaption>
         </figure>`
    });

    return portfolioContent;
}

portfolioDisplay();




Array.from(sideMenuLinks, item => {
    item.addEventListener('click', ()=> {
        hamburgerMenuContainer.classList.remove('toggleMenu')
    })
})


