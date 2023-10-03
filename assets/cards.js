/**
 * Appel des fichiers externes
 */
import { gridOne, gridTwo, gridThree } from "./users.js";
import { displayHTML } from "./displayCard.js";

/**
 * J'accède aux éléments de mon frontend
 */
const grids = document.querySelectorAll(".grid");

grids[0].innerHTML = displayHTML(gridOne);
grids[1].innerHTML = displayHTML(gridTwo);
grids[2].innerHTML = displayHTML(gridThree);


/******** Carte déroulante **********/

const cardInfos = document.querySelectorAll(".card");
const photo = document.querySelectorAll(".grid-photo");

for (let i = 0; i < photo.length; i++) {
    photo[i].addEventListener("click", function () {
        cardInfos[i].classList.toggle("card");
    })
};  

/******** Carte déroulante IMG responsive **********/

for (let i = 0; i < photo.length; i++) {
    photo[i].addEventListener("click", function () {
        photo[i].classList.toggle("open-img");
    })
};  

/* DEBUT SEARCHBAR */

const loop = document.querySelector(".searchButton");
const toggleSearch = document.querySelector(".togglesearch");
const searchBarLocation = document.querySelector(".futursearchbar");


function scrollToAnchor() {
    const targetAnchor = document.querySelector("#anchor");

    if (targetAnchor) {
        // Utilisez la fonction scrollIntoView() pour faire défiler jusqu'à l'ancre
        targetAnchor.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

loop.addEventListener("click", () => {
    /* toggleSearch.classList.toggle("toggleOff"); */
    searchBarLocation.innerHTML=`<div class="togglesearch toggleOff">
    <input type="search" class="search-input" placeholder="">
</div>`;
    searchBarLocation.classList.add('search-bar-visible');
    let copyArr = gridOne, copyArr2 = gridTwo, copyArr3 = gridThree;
    const search = document.querySelector(".search-input");
    search.addEventListener("keyup", (event) => {
        const searchValue = search.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
        copyArr = gridOne.filter((wilder) => wilder.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().includes(searchValue));
        grids[0].innerHTML = displayHTML(copyArr);
        copyArr2 = gridTwo.filter((wilder) => wilder.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().includes(searchValue));
        grids[1].innerHTML = displayHTML(copyArr2);
        copyArr3 = gridThree.filter((wilder) => wilder.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().includes(searchValue));
        grids[2].innerHTML = displayHTML(copyArr3);
        if (event.keyCode === 13) {
            scrollToAnchor();
        }
    });
});


const test = document.querySelector('Jechoisisnimportequoi');
console.log(typeof(test));