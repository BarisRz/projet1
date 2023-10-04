// Get the modal
var modal = document.querySelector("#myModal");

// Get the button that opens the modal
var btn = document.querySelector("#push");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Carrousel 2//
const imgCarrousel2 = [
    "assets/img/carrousel_modal/anthony_bob.png",
    "assets/img/carrousel_modal/anthony_cat.png",
    "assets/img/carrousel_modal/anthony_hp.png",
    "assets/img/carrousel_modal/anthony_random.png",
    "assets/img/carrousel_modal/anthony_spiderwoman.png",
    "assets/img/carrousel_modal/anthony_superwoman.png",
    "assets/img/carrousel_modal/anthony_iron.png",
    "assets/img/carrousel_modal/anthony_hulk.png",
    "assets/img/carrousel_modal/samuel_daenerys.png",
    "assets/img/carrousel_modal/samuel_girl.png",
    "assets/img/carrousel_modal/samuel_superman.png",
    "assets/img/carrousel_modal/samuel_wolverine.png",
];
const carouselContainer2 = document.querySelector(".carousel-container2");

imgCarrousel2.forEach((element) => {
    const carouselSlide2 = document.createElement("div");
    carouselSlide2.classList.add("carousel-slide2");
    carouselContainer2.appendChild(carouselSlide2);
    const imageInSlide2 = document.createElement('img');
    imageInSlide2.src = element;
    imageInSlide2.alt = element;
    carouselSlide2.appendChild(imageInSlide2);
})

document.addEventListener("DOMContentLoaded", function () {
    const slideWidth2 = document.querySelector(".carousel").clientWidth;
    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            index = imgCarrousel2.length - 1; // Si on est au début, revenir à la dernière image
        } else if (index > imgCarrousel2.length - 1) {
            index = 0; // Si on est à la fin, revenir à la première image
        }

        const offset = -index * slideWidth2;
        carouselContainer2.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    // Automatiquement passer à la diapositive suivante toutes les 3 secondes (facultatif)
    setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 2000);
});
