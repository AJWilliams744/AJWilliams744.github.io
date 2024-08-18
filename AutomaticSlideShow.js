let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("in")) slides[i].classList.remove("in");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }


    slides[slideIndex - 1].classList.add("in");


    setTimeout(showSlides, 2000); // Change image every 2 seconds
}