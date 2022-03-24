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
}
