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
    const searchValue = search.value.toLocaleLowerCase();
    copyArr = gridOne.filter((wilder) => wilder.name.toLocaleLowerCase().includes(searchValue));
    /*     console.log("SEPARATION"); PLEIN DE TEST POUR DEBUG
        console.log(searchValue);
        console.log(copyArr);
        console.log(gridOne); */
    grids[0].innerHTML = displayHTML(copyArr);
    if (event.keyCode === 13) {
        scrollToAnchor();
    }
});

grids[0].innerHTML = displayHTML(gridOne)
// grids[1].innerHTML = displayHTML(gridTwo)
// grids[2].innerHTML = displayHTML(gridThree)
// grids[3].innerHTML = displayHTML(gridFour)