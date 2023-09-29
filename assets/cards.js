/**
 * Appel des fichiers externes
 */
import { gridOne, gridTwo, gridThree, gridFour } from "./users.js";
import { displayHTML } from "./displayCard.js";

/**
 * J'accède aux éléments de mon frontend
 */
const grids = document.querySelectorAll(".grid");

let copyArr = gridOne;
let copyArr2 = gridTwo;
let copyArr3 = gridThree;
let copyArr4 = gridFour;
const search = document.querySelector(".search-input");

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

search.addEventListener("keyup", (event) => {
    const searchValue = search.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
    console.log(searchValue);
    copyArr = gridOne.filter((wilder) => wilder.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().includes(searchValue));
    grids[0].innerHTML = displayHTML(copyArr);
    copyArr2 = gridTwo.filter((wilder) => wilder.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().includes(searchValue));
    grids[1].innerHTML = displayHTML(copyArr2);
    copyArr3 = gridThree.filter((wilder) => wilder.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().includes(searchValue));
    grids[2].innerHTML = displayHTML(copyArr3);
    copyArr4 = gridFour.filter((wilder) => wilder.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().includes(searchValue));
    grids[3].innerHTML = displayHTML(copyArr4);
    if (event.keyCode === 13) {
        scrollToAnchor();
    }
});


grids[0].innerHTML = displayHTML(gridOne);
grids[1].innerHTML = displayHTML(gridTwo);
grids[2].innerHTML = displayHTML(gridThree);
grids[3].innerHTML = displayHTML(gridFour);