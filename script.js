window.addEventListener('load', async () => {
    //------------Episodes Page ------------------
    const dataUrl = "./assets/data.json";
    const episodesPageBtn = document.querySelector('.episodes');
    const hydratePage = document.getElementById('application');

    //------------Episodes Page ------------------
    episodesPageBtn.addEventListener('click', async () => {
        await setEpisodesPage();
    });

    const setEpisodesPage = async () => {
        try {
            const response = await fetch(dataUrl);
            const jsonData = await response.json();

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

            hydratePage.innerHTML = `
                <div class="slider">
                    <article class="abstract">
                        <button id="prev">&#10094;</button>
                        ${makeSlider().map(value => value.outerHTML).join('')}
                        <button id="next">&#10095;</button>
                        <hr>
                    </article>
                   
                </div>
            `;

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
    let contactPageBtn = document.querySelector('.contact');

    const displayContactPage = () => {
        hydratePage.className="contact";
        hydratePage.innerHTML = 
            `<form method="post">
                <input type="text" placeholder="Nom - Prénom">
                <input type="text" placeholder="Adresse mail">
                <input type="text" placeholder="Votre message">
                <button type="submit">Envoyer</button>
                <img src="./assets/contact_img.png">
            </form>`
    } 

    contactPageBtn.addEventListener("click", () => {
        displayContactPage();
    })

    //------------Presentation Page ------------------
    let presentationPageBtn = document.querySelector('.presentation');

    const displayPresentationPage = () => {
        hydratePage.className="presentation";
        hydratePage.innerHTML = 
        `<img src="./assets/promised-neverland-presentation.jpg" alt="les personnages principaux">
        <img src="./assets/img_presentation.png">
        <p>Emma et ses frères et sœurs, tous orphelins, ont été placés dans un établissement spécialisé lorsqu'ils étaient tout jeunes. Bien que leur liberté soit limitée et que les règles soient parfois un peu strictes, les enfants mènent une vie heureuse à Grace Field House, et la femme qu'ils nomment « Maman » s'occupe d'eux et leur offre tout l'amour qu'une mère pourrait offrir à ses enfants. Un soir, après le départ d'une fille appelé Conny, Emma et Norman découvrent que les enfants de cet orphelinat sont en réalité du bétail. Ils sont élevés dans une ferme à l'allure d'orphelinat, et livrés à des monstres avec le consentement de « Maman ». Ils devront faire preuve d'ingéniosité pour survivre et tenter de s'échapper.</p>`
    }

    presentationPageBtn.addEventListener("click", () => {
        displayPresentationPage();
    })

    //------------Landing Page ------------------
    let landingPageBtn = document.querySelector('.landing');

    const displayLandingPage = () => {
        hydratePage.className="landing";
        hydratePage.innerHTML = 
        `<div>
        <img src="./assets/landing_img.jpg" alt="image du manga The Promised Neverland">
        <p>Emma et ses frères et sœurs, tous orphelins, ont été placés dans un établissement spécialisé lorsqu'ils étaient tout jeunes. Bien que leur liberté soit limitée et que les règles soient parfois un peu strictes, les enfants mènent une vie heureuse à Grace Field House, et la femme qu'ils nomment « Maman » s'occupe d'eux et leur offre tout l'amour qu'une mère pourrait offrir à ses enfants. Un soir, après le départ d'une fille appelé Conny, Emma et Norman découvrent que les enfants de cet orphelinat sont en réalité du bétail. Ils sont élevés dans une ferme à l'allure d'orphelinat, et livrés à des monstres avec le consentement de « Maman ». Ils devront faire preuve d'ingéniosité pour survivre et tenter de s'échapper.</p>
        <button>Découvrir</button>
        </div>`
    }

    landingPageBtn.addEventListener("click", () => {
        displayLandingPage();
    })
});