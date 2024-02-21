// Affichage de la page contact
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

// Affichage de la page présentation
let presentationPageBtn = document.querySelector('.presentation');
let presentationPage = document.querySelector('#presentation');

const displayPresentationPage = () => {
    presentationPage.innerHTML = 
    `<img src="./assets/promised-neverland-presentation.jpg" alt="les personnages principaux">
    <img src="./assets/img_presentation.png">
    <p>Emma et ses frères et sœurs, tous orphelins, ont été placés dans un établissement spécialisé lorsqu'ils étaient tout jeunes. Bien que leur liberté soit limitée et que les règles soient parfois un peu strictes, les enfants mènent une vie heureuse à Grace Field House, et la femme qu'ils nomment « Maman » s'occupe d'eux et leur offre tout l'amour qu'une mère pourrait offrir à ses enfants. Un soir, après le départ d'une fille appelé Conny, Emma et Norman découvrent que les enfants de cet orphelinat sont en réalité du bétail. Ils sont élevés dans une ferme à l'allure d'orphelinat, et livrés à des monstres avec le consentement de « Maman ». Ils devront faire preuve d'ingéniosité pour survivre et tenter de s'échapper.</p>`
}

presentationPageBtn.addEventListener("click", () => {
    displayPresentationPage();
})