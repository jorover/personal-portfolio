const hamburgerMenuContainer = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const portfolioContainer = document.querySelector('.portfolio-container');
const data = '/data.json'


hamburgerIcon.addEventListener('click', ()=> {
      hamburgerMenuContainer.classList.toggle('toggleMenu')
})



const portfolioDisplay = async () => {
    const fetchData = await (await fetch(data)).json();
    portfolioContainer.innerHTML = '';
    const portfolioContent = fetchData.map(item => {
        const {id, img, alt, dataOs, title, description, repo, liveSite} = item;
        return portfolioContainer.innerHTML += `<figure id=${id} class="portfolio-card" data-aos=${dataOs}>
        <img src=${img} alt=${alt} class="card-img" />
        <figcaption class="card-content">
            <h4> ${title} </h4>
            <p> ${description} </p>
            <footer class="card-btns">
                <a href=${repo}>
                <img src="/public/images/githubb.png" alt = "#" title="github repo" />
                </a>
                <a href=${liveSite}>
                    <img src="/public/images/link.png" alt = "#" title="live site" /> 
                 </a>
            </footer>
         </figcaption>
         </figure>`
    });

    return portfolioContent;
}

portfolioDisplay();

