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

const imgCarrousel = [
    "assets/img/Anthony.png",
    "assets/img/Baptiste.jpg",
    "assets/img/Baris.jpeg",
    "assets/img/christophe_bruno_.png",
    "assets/img/clement.jpg",
    "assets/img/diogo_cabral.png",
    "assets/img/Doriane.jpg",
    "assets/img/Elie.jpg",
    "assets/img/flavien.jpg",
    "assets/img/francois.jpg",
    "assets/img/ghislain.jpg",
    "assets/img/hugo_durand_.png",
    "assets/img/jordan.jpeg",
    "assets/img/mehdi.jpg",
    "assets/img/morgane.jpg",
    "assets/img/oceane.JPG",
    "assets/img/Pierre.png",
    "assets/img/raphael_foulon-binet.png",
    "assets/img/Samuel.jpg",
    "assets/img/sebastien.jpg",
    "assets/img/souhir_farjallah.png",
    "assets/img/Tristan.jpg"
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
    const slideWidth = document.querySelector(".carousel-slide").clientWidth;
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
