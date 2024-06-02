var imgSlider = document.querySelectorAll(".slide-content");
var btnPrev = document.getElementsByClassName("prev")[0];
var btnNext = document.getElementsByClassName("next")[0];
var currentSlide = 1;
theChecker();
window.addEventListener("load",playSlider)
function nextSlider() {
    if (btnNext.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

function prevSlider() {
    if (btnPrev.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function theChecker() {

    imgSlider.forEach(function (img) {
        img.classList.remove('active');
    });

    imgSlider[currentSlide - 1].classList.add('active');

    if (currentSlide == 1) {
        btnPrev.classList.add('disabled');
    } else {
        btnPrev.classList.remove('disabled');
    }

    if (currentSlide == imgSlider.length) {
        btnNext.classList.add('disabled');
    } else {
        btnNext.classList.remove('disabled');
    }
}
function playSlider() {
   setInterval(function() {
        if (currentSlide < imgSlider.length) {
            currentSlide++;
        } else {
            currentSlide = 1;
        }
        theChecker();
    }, 5000);
}