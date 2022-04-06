//Bouton Home

const home = document.querySelector("#link");

home.addEventListener('click', handlehome);
const homeImg = document.querySelector('.profil__article-content-first-img');
const homeTxt = document.querySelector('.coordonnees');


function handlehome(event) {
    event.preventDefault();
    homeImg.classList.toggle('hide');
    homeTxt.classList.toggle('hide');
};

const nav = document.getElementById('navtool');
const navbar = document.querySelector('.header__title-nav-ul');

nav.addEventListener('click', handlenav);
function handlenav(event) {
    event.preventDefault();
    navbar.classList.toggle('hide');
}


// Bouton tel

const tel = document.querySelector('.profil__article-content-third');
const telphone = document.querySelector('.phone');
const phoneLink = document.querySelector('.phoneImg');

tel.addEventListener('click', handletel);
function handletel(event) {
    event.preventDefault();
    telphone.classList.toggle('hide');
    phoneLink.classList.toggle('hide');
}






