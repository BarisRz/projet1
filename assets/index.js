/**
 *  const imgCarrousel = [
    "img/carrousel/image1.jpeg",
    "img/carrousel/image2.jpg",
    "img/carrousel/image3.jpg",
    "img/carrousel/image4.JPG"
];
 


const carrousel = document.querySelectorAll(".img-carrousel");
for (let i = 0; i < carrousel.length; i++) {
    carrousel[i].style.backgroundImage = `url(${imgCarrousel[i]})`;
}
*/
// carousel //

const carouselContainer = document.querySelector(".carousel-container")

document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const slideWidth = document.querySelector(".carousel-slide").clientWidth;
    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            index = 23; // Si on est au début, revenir à la dernière image
        } else if (index > 23) {
            index = 0; // Si on est à la fin, revenir à la première image
        }

        const offset = -index * slideWidth;
        carouselContainer.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    prevButton.addEventListener("click", () => {
        goToSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        goToSlide(currentIndex + 1);
    });

    // Automatiquement passer à la diapositive suivante toutes les 3 secondes (facultatif)
    setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 3000);
});
