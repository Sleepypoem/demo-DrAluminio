let carouselContainer = document.querySelector(".carousel-container");
let leftButton = document.querySelector(".carousel-left");
let rightButton = document.querySelector(".carousel-right");

const carouselItemWidth = 525;
const gap = 10;
let offset = 0;
let carouselWidth = carouselContainer.offsetWidth;

function moveLeft() {
    offset -= carouselItemWidth + gap;
    if (offset < 0) {
        offset = carouselWidth - carouselItemWidth + gap;
    }
    carouselContainer.style.transform = `translateX(-${offset}px)`


    console.log(offset);
}

function moveRight() {
    offset += carouselItemWidth + gap;
    carouselContainer.style.transform = `translateX(-${offset}px)`
    console.log(offset);

    if (offset >= carouselContainer.offsetWidth - 30) {
        carouselContainer.style.transform = "translateX(0)";
        offset = 0;
    }
}

leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight)