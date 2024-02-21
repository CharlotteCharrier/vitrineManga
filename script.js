
const episodesPage = document.getElementById('episodes');

window.addEventListener('load', (e) => {
    setEpisodesPage();
    const divs = document.querySelectorAll('.couv');
    console.log('divs[0]', divs[0]);
    const btns = document.querySelectorAll('button');
    let currentIndex = 0;

    const setActive = (index) => {
        divs.forEach((div, i) => {
            div.classList.toggle('active', i === index);
        });
    };

    const next = () => {
        currentIndex = (currentIndex + 1) % divs.length;
        setActive(currentIndex);
    };

    const prev = () => {
        currentIndex = (currentIndex - 1 + divs.length) % divs.length;
        setActive(currentIndex);
    };

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            switch (btn.id) {
                case 'next':
                    next();
                    console.log("next");
                    break;
                case 'prev':
                    prev();
                    break;
                default:
                    break;
            }
        });
    });

});



const setEpisodesPage = () => {
    episodesPage.innerHTML = `
    <div class="slider">
    <article class="abstract">
        <button id="prev">&#10094;</button>
        <div class="couv active"><img src="./assets/promised-neverland-1.jpg" alt="Couverture tome 1"></div>
        <div class="couv"><img src="./assets/promised-neverland-2.jpg" alt="Couverture tome 2"></div>
        <div class="couv"><img src="./assets/promised-neverland-3.jpg" alt="Couverture tome 3"></div>
        <div class="couv"><img src="./assets/promised-neverland-4.jpg" alt="Couverture tome 4"></div>
        <div class="couv"><img src="./assets/promised-neverland-5.jpg" alt="Couverture tome 5"></div>
        <div class="couv"><img src="./assets/promised-neverland-6.jpg" alt="Couverture tome 6"></div>
        <div class="couv"><img src="./assets/promised-neverland-7.jpg" alt="Couverture tome 7"></div>
        <div class="couv"><img src="./assets/promised-neverland-8.jpg" alt="Couverture tome 8"></div>
        <div class="couv"><img src="./assets/promised-neverland-9.jpg" alt="Couverture tome 9"></div>
        <div class="couv"><img src="./assets/promised-neverland-10.jpg" alt="Couverture tome 10"></div>
        <div class="couv"><img src="./assets/promised-neverland-11.jpg" alt="Couverture tome 11"></div>
        <div class="couv"><img src="./assets/promised-neverland-12.jpg" alt="Couverture tome 12"></div>
        <div class="couv"><img src="./assets/promised-neverland-13.jpg" alt="Couverture tome 13"></div>
        <div class="couv"><img src="./assets/promised-neverland-14.jpg" alt="Couverture tome 14"></div>
        <div class="couv"><img src="./assets/promised-neverland-15.jpg" alt="Couverture tome 15"></div>
        <div class="couv"><img src="./assets/promised-neverland-16.jpg" alt="Couverture tome 16"></div>
        <div class="couv"><img src="./assets/promised-neverland-17.jpg" alt="Couverture tome 17"></div>
        <div class="couv"><img src="./assets/promised-neverland-18.jpg" alt="Couverture tome 18"></div>
        <div class="couv"><img src="./assets/promised-neverland-19.jpg" alt="Couverture tome 19"></div>
        <div class="couv"><img src="./assets/promised-neverland-20.jpg" alt="Couverture tome 20"></div>
        <button id="next">&#10095;</button>
</div>
<h1>Title</h1>
<hr>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt maiores alias soluta, ipsam dignissimos vero
    molestiae perferendis. Illum illo eum enim possimus, consequatur alias explicabo provident esse laborum fuga
    perferendis!
    Illo quo dolorum, enim repellat tempora iusto deleniti quia voluptatibus et sint eaque neque, laboriosam
    optio temporibus quidem voluptate similique quae nesciunt earum adipisci placeat mollitia, magnam a? Vel,
    veritatis?
    Illo suscipit qui unde vero quae libero. Eos quis blanditiis autem cumque, veniam facilis. Nemo iure
    ratione, mollitia sed autem obcaecati. Tempore odit magnam iste itaque! Corporis et culpa quaerat?
    Amet, corrupti, ut quibusdam maiores suscipit facere, dolorem inventore aliquam praesentium eaque delectus
    repudiandae. Perferendis incidunt inventore culpa temporibus debitis consequuntur tempora repellendus quos
    at.</p>
</article>
    `
}



