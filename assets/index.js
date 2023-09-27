// carousel //

const imgCarrousel = [
    "assets/img/carrousel/Anthony.png",
    "assets/img/carrousel/Baptiste.jpg",
    "assets/img/carrousel/Baris.jpeg",
    "assets/img/carrousel/christophe.jpg",
    "assets/img/carrousel/clement.jpg",
    "assets/img/carrousel/diogo.jpg",
    "assets/img/carrousel/Doriane.jpg",
    "assets/img/carrousel/Elie.jpg",
    "assets/img/carrousel/flavien.jpg",
    "assets/img/carrousel/francois.jpg",
    "assets/img/carrousel/ghislain.jpg",
    "assets/img/carrousel/hugo.jpg",
    "assets/img/carrousel/jordan.jpeg",
    "assets/img/carrousel/mehdi.jpg",
    "assets/img/carrousel/morgane.jpg",
    "assets/img/carrousel/oceane.JPG",
    "assets/img/carrousel/Pierre.png",
    "assets/img/carrousel/raphael.jpeg",
    "assets/img/carrousel/Samuel.jpg",
    "assets/img/carrousel/sebastien.jpg",
    "assets/img/carrousel/souhir.jpg",
    "assets/img/carrousel/Tristan.jpg"
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
        console.log(offset)
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
    /* setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 3000); */
});
