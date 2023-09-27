const imgCarrousel = [
    "img/carrousel/image1.jpeg",
    "img/carrousel/image2.jpg",
    "img/carrousel/image3.jpg",
    "img/carrousel/image4.JPG"
];

const carrousel = document.querySelectorAll(".img-carrousel");
for (let i = 0; i < carrousel.length; i++) {
    carrousel[i].style.backgroundImage = `url(${imgCarrousel[i]})`;
}