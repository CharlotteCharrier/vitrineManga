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