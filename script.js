let resultContactPage = document.querySelector('body');
let contactPageBtn = document.querySelector('.contact');
let contactPage = document.querySelector('#contact');

const displayContactPage = () => {
    contactPage.innerHTML = 
        `<form method="post">
            <input type="text" placeholder="Nom - Prénom">
            <input type="text" placeholder="Adresse mail">
            <input type="text" placeholder="Votre message">
            <button type="submit">Envoyer</button>
        </form>`
} 

contactPageBtn.addEventListener("click", () => {
    displayContactPage();
})







//on injecte le code dans la section contact mais on la rend invisible
//au on click du btn contact ça affiche la section contact