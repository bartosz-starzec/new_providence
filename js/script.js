var slideIndex = 2;
var interval;
showSlides(slideIndex);
autoSlide();

// automatyczne przełączanie slajdów
function autoSlide() {
    interval = setInterval(auto, 7000);
}

function reset() {
    clearInterval(interval);
    interval = setInterval(auto, 7000);
}

function auto() {
    plusSlides(1);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// przełączanie slajdów poprzez klikanie na nie
var users = document.getElementsByClassName("mySlides");
for (var i = 0; i < 3; i++) {
    a = i + 1;
    users[i].addEventListener('click', showSlides.bind(null, a));
    users[i].addEventListener('click', reset);
}


// obsługa slidera
function showSlides(n) {

    slideIndex = n;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var content = document.getElementsByClassName("quote");
    var stars = document.getElementsByClassName("stars");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("op1");
        slides[i].classList.add("op4");
    }


    // główny slajd
    slides[slideIndex - 1].style.display = "inline-block";
    slides[slideIndex - 1].classList.remove("op4");
    slides[slideIndex - 1].classList.add("op1");

    // przełączanie contentu
    for (i = 0; i < slides.length; i++) {
        if (content[i] == content[slideIndex - 1]) {
            content[slideIndex - 1].classList.remove("none");
            content[slideIndex - 1].classList.add("block");

        } else {
            content[i].classList.remove("block");
            content[i].classList.add("none");

        }
    }

    // przełączanie gwiazdek
    for (i = 0; i < slides.length; i++) {
        if (stars[i] == stars[slideIndex - 1]) {
            stars[slideIndex - 1].style.display = "block";
        } else {
            stars[i].style.display = "none";

        }
    }
}