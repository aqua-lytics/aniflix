//FOR Clearing Search
const clearInput = (event) => {
    const input = document.getElementById("searchInput");

    if (event.target !== input) {
        input.value = "";
    }

}


document.addEventListener("mousedown", clearInput);



//for button header
var searchForm = document.getElementById('searchForm');
var searchInput = document.getElementById('searchInput');
var buttons = document.querySelectorAll('.button-header');
var isSearchFormHovered = false;

// Function to check if the search input is displayed
function isSearchInputDisplayed() {
    var computedStyle = window.getComputedStyle(searchInput);
    return computedStyle.getPropertyValue('display') !== 'none';
}

// Event listener for mouse entering the search form
searchForm.addEventListener('mouseenter', function() {
    isSearchFormHovered = true;
    if (isSearchInputDisplayed()) {
        buttons.forEach(function(button) {
            button.classList.add('shifted');
            button.classList.remove('shifted-back');
        });
    }
});

// Event listener for mouse leaving the search form
searchForm.addEventListener('mouseleave', function() {
    isSearchFormHovered = false;
    if (!isSearchInputDisplayed()) {
        buttons.forEach(function(button) {
            button.classList.remove('shifted');
            button.classList.add('shifted-back');
        });
    }
});

// Event listener for checking if the search input is open
searchInput.addEventListener('focus', function() {
    if (isSearchInputDisplayed()) {
        buttons.forEach(function(button) {
            button.classList.add('shifted');
            button.classList.remove('shifted-back');
        });
    }
});

// Event listener for checking if the search input is closed
searchInput.addEventListener('blur', function() {
    if (!isSearchFormHovered && !isSearchInputDisplayed()) {
        buttons.forEach(function(button) {
            button.classList.remove('shifted');
            button.classList.add('shifted-back');
        });
    }
});

// Reset classes when the transition ends
buttons.forEach(function(button) {
    button.addEventListener('transitionend', function() {
        if (button.classList.contains('shifted-back')) {
            button.classList.remove('shifted-back');
        }
    });
});


//Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }


    setInterval(function() {
        plusSlides(1);
    }, 10000);

//disable resize

window.addEventListener('resize', function () {
    window.resizeTo(window.innerWidth, window.innerHeight);
});