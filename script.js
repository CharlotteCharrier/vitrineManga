/**
 * Add event listener when the window is fully loaded
 */
window.addEventListener('load', async () => {
    //-----------Declarations---------------------
    let landingPageBtn = document.querySelector('.landing');
    const dataUrl = "./assets/data.json";
    const episodesPageBtn = document.querySelector('.episodes');
    const hydratePage = document.getElementById('application');
    let contactPageBtn = document.querySelector('.contact');
    let presentationPageBtn = document.querySelector('.presentation');
    let menuBurger = document.getElementById('menu-toggle');

    //------------Listeners---------------
    /**
     * Listen for focusout event on the menu burger icon to close the menu if focus moves outside
     * @param {Event} e - The focusout event object
     */
    menuBurger.addEventListener("focusout", (e) => {
        if (!e.relatedTarget) {
            menuBurger.querySelector('input').checked = false;
        }
    })
    /**
     * Listen for click event on the landing page button
     */
    landingPageBtn.addEventListener("click", () => {
        displayLandingPage();
    })
    /**
     * Listen for click event on the presentation page button
     */
    presentationPageBtn.addEventListener("click", () => {
        displayPresentationPage();
    })
    /**
     * Listen for click event on the episodes page button
     */
    episodesPageBtn.addEventListener('click', async () => {
        setEpisodesPage();
    });
    /**
     * Listen for click event on the contact page button
     */
    contactPageBtn.addEventListener("click", () => {
        displayContactPage();
    })

    //------------Episodes Page ------------------
    /**
    * Set up the episodes page by fetching data and creating a slider
    */
    const setEpisodesPage = async () => {
        try {
            const response = await fetch(dataUrl);
            const jsonData = await response.json();
            /**
            * Create the slider with fetched data
            */
            const makeSlider = () => {
                let divs = [];
                jsonData.forEach((episode, index) => {
                    const div = document.createElement('div');
                    div.classList.add('couv');
                    const img = document.createElement('img');
                    img.src = episode.src;
                    img.alt = episode.alt;
                    div.append(img);

                    const title = document.createElement('h2');
                    title.textContent = episode.title;
                    div.appendChild(title);

                    const description = document.createElement('p');
                    description.textContent = episode.description;
                    div.appendChild(description);

                    if (index === 0) {
                        div.classList.add('active');
                    }

                    divs.push(div);
                });
                return divs;
            }
            // Populate the slider with episodes
            hydratePage.className = "slider";
            hydratePage.innerHTML = `
                <div class="slider">
                    <article class="card">
                        <button id="prev">&#10094;</button>
                        ${makeSlider().map(value => value.outerHTML).join('')}
                        <button id="next">&#10095;</button>
                        <hr>
                    </article>
                </div>
            `;
            // Slider functionality
            const divArray = document.querySelectorAll('.couv');
            const btns = document.querySelectorAll('button');
            let currentIndex = 0;

            const setActive = (index) => {
                divArray.forEach((div, i) => {
                    div.classList.toggle('active', i === index);
                });
            };

            const next = () => {
                currentIndex = (currentIndex + 1) % divArray.length;
                setActive(currentIndex);
            };

            const prev = () => {
                currentIndex = (currentIndex - 1 + divArray.length) % divArray.length;
                setActive(currentIndex);
            };

            btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    switch (btn.id) {
                        case 'next':
                            next();
                            break;
                        case 'prev':
                            prev();
                            break;
                        default:
                            break;
                    }
                });
            });
        } catch (error) {
            console.error('Une erreur s\'est produite :', error);
        }
    }

    //------------Contact Page ------------------
    /**
    * Display the contact page
    */
    const displayContactPage = () => {
        hydratePage.className = "contact";
        hydratePage.innerHTML =
            `<form method="post">
                <input type="text" placeholder="Nom - Prénom">
                <input type="email" placeholder="Adresse mail">
                <input type="text" placeholder="Votre message">
                <button type="submit">Envoyer</button>
                <img src="./assets/contact_img.png">
            </form>`
    }

    //------------Presentation Page ------------------
    /**
    * Display the presentation page
    */
    const displayPresentationPage = () => {
        hydratePage.className = "presentation";
        hydratePage.innerHTML =
            `<div><img src="./assets/promised-neverland-presentation.jpg" alt="les personnages principaux">
        <img src="./assets/img_presentation.png">
        <p>Emma et ses frères et sœurs, tous orphelins, ont été placés dans un établissement spécialisé lorsqu'ils étaient tout jeunes. Bien que leur liberté soit limitée et que les règles soient parfois un peu strictes, les enfants mènent une vie heureuse à Grace Field House, et la femme qu'ils nomment « Maman » s'occupe d'eux et leur offre tout l'amour qu'une mère pourrait offrir à ses enfants. Un soir, après le départ d'une fille appelé Conny, Emma et Norman découvrent que les enfants de cet orphelinat sont en réalité du bétail. Ils sont élevés dans une ferme à l'allure d'orphelinat, et livrés à des monstres avec le consentement de « Maman ». Ils devront faire preuve d'ingéniosité pour survivre et tenter de s'échapper.</p>
        </div>`
    }

    //------------Landing Page is Accueil-----------------
    /**
    * Display the landing page
    */
    const displayLandingPage = () => {
        hydratePage.className = "landing";
        hydratePage.innerHTML =
            `<div>
        <img src="./assets/landing_img.jpg" alt="image du manga The Promised Neverland">
        <p>Emma et ses frères et sœurs, tous orphelins, ont été placés dans un établissement spécialisé lorsqu'ils étaient tout jeunes. Bien que leur liberté soit limitée et que les règles soient parfois un peu strictes, les enfants mènent une vie heureuse à Grace Field House, et la femme qu'ils nomment « Maman » s'occupe d'eux et leur offre tout l'amour qu'une mère pourrait offrir à ses enfants. Un soir, après le départ d'une fille appelée Conny, Emma et Norman découvrent que les enfants de cet orphelinat sont en réalité du bétail. Ils sont élevés dans une ferme à l'allure d'orphelinat, et livrés à des monstres avec le consentement de « Maman ». Ils devront faire preuve d'ingéniosité pour survivre et tenter de s'échapper.</p>
        <button id="discoverBtn">Découvrir</button>
        </div>`;

        const discoverBtn = document.getElementById('discoverBtn');
        discoverBtn.addEventListener('click', () => {
            displayPresentationPage();
        });
    }
    // Display the landing page when the page is loaded the first time
    displayLandingPage();

    //------------Footer------------------
    let footer = document.querySelector('.footer');
    footer.innerHTML = '<p>Charlot(te)</p>';
});
