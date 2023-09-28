/**
 * Appel des fichiers externes
 */
import { gridOne, gridTwo, gridThree, gridFour } from "./users.js";
import displayHTML from "./displayCard.js";

/**
 * J'accède aux éléments de mon frontend
 */
const grids = document.querySelectorAll(".grid")


grids[0].innerHTML = displayHTML(gridOne)
// grids[1].innerHTML = displayHTML(gridTwo)
// grids[2].innerHTML = displayHTML(gridThree)
// grids[3].innerHTML = displayHTML(gridFour)

