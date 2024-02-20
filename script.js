const divs = document.querySelectorAll('.couv');
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