// carousel //

const imgCarrousel = [
    "assets/img/carrousel/Anthony.png",
    "assets/img/carrousel/Samuel.png",
    "assets/img/carrousel/Baptiste.png",
    "assets/img/carrousel/Baris.png",
    "assets/img/carrousel/Christophe.jpeg",
    "assets/img/carrousel/Clement.png",
    "assets/img/carrousel/Diogo.jpeg",
    "assets/img/carrousel/Doriane.png",
    "assets/img/carrousel/Elie.png",
    "assets/img/carrousel/Flavien.png",
    "assets/img/carrousel/Francois.png",
    "assets/img/carrousel/Ghislain.png",
    "assets/img/carrousel/Hugo.jpeg",
    "assets/img/carrousel/Jordan.png",
    "assets/img/carrousel/Medhi.png",
    "assets/img/carrousel/Morganne.png",
    "assets/img/carrousel/Oceane.png",
    "assets/img/carrousel/Pierre.png",
    "assets/img/carrousel/Raphael .jpeg",
    "assets/img/carrousel/Sebastien.png",
    "assets/img/carrousel/Souhir.jpeg",
    "assets/img/carrousel/Jonathan.png",
    "assets/img/carrousel/Jeremy.png",
    "assets/img/carrousel/Tristan.png"
];
const carouselContainer = document.querySelector(".carousel-container");

imgCarrousel.forEach((element) => {
    const carouselSlide = document.createElement("div");
    carouselSlide.classList.add("carousel-slide");
    carouselContainer.appendChild(carouselSlide);
    const imageInSlide = document.createElement('img');
    imageInSlide.src = element;
    imageInSlide.alt = element;
    carouselSlide.appendChild(imageInSlide);
})

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const slideWidth = document.querySelector(".carousel").clientWidth;
    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            index = imgCarrousel.length - 1; // Si on est au début, revenir à la dernière image
        } else if (index > imgCarrousel.length - 1) {
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
