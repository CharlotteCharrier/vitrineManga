window.addEventListener('load', async () => {
    //------------Episodes Page ------------------
    const dataUrl = "./assets/data.json";
    const episodesPageBtn = document.querySelector('.episodes');
    const episodesPage = document.getElementById('episodes');

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

            episodesPage.innerHTML = `
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
});

let contactPageBtn = document.querySelector('.contact');
let contactPage = document.querySelector('#contact');

const displayContactPage = () => {
    contactPage.innerHTML = 
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

