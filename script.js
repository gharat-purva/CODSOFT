let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.querySelectorAll('.fade');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000);
}

showSlides();

const slideshowContainer = document.querySelector('.slideshow-container');
const formContainer = document.querySelector('.additional-content');
const header = document.querySelector('header');
const body = document.querySelector('body');

slideshowContainer.addEventListener('mouseover', () => {
    body.classList.add('darken');
});

slideshowContainer.addEventListener('mouseout', () => {
    body.classList.remove('darken');
});

formContainer.addEventListener('mouseover', () => {
    body.classList.add('darken');
});

formContainer.addEventListener('mouseout', () => {
    body.classList.remove('darken');
});

header.addEventListener('mouseover', () => {
    body.classList.add('darken');
});

header.addEventListener('mouseout', () => {
    body.classList.remove('darken');
});
