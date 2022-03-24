const test = document.querySelector("#link");
console.log(test);
test.addEventListener('click', handletest);
const testImg = document.querySelector('.profil__article-content-first-img');
const testTxt = document.querySelector('.coordonnees');
console.log(testTxt);

function handletest(event) {
    console.log('on est ici');
    event.preventDefault();
    testImg.classList.toggle('hide');
    testTxt.classList.toggle('hide');
};

const nav = document.getElementById('navtool');
const navbar = document.querySelector('.header__title-nav-ul');
console.log(navbar);
nav.addEventListener('click', handlenav);
function handlenav(event) {
    event.preventDefault();
    console.log('ici c\'est paris');
    navbar.classList.toggle('hide');

}


