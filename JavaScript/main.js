var currentSlide = 1;
window.addEventListener("load",function(){
    if (document.querySelectorAll(".slide-content").length > 0) {
        theChecker();
        playSlider();
    }
});

function nextSlider() {
    var btnNext = document.getElementsByClassName("next")[0];
    if (btnNext.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

function prevSlider() {
    var btnPrev = document.getElementsByClassName("prev")[0];
    if (btnPrev.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function theChecker() {
    var imgSlider = document.querySelectorAll(".slide-content");
    var btnNext = document.getElementsByClassName("next")[0];
    var btnPrev = document.getElementsByClassName("prev")[0];
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
   var imgSlider = document.querySelectorAll(".slide-content");
   setInterval(function() {
        if (currentSlide < imgSlider.length) {
            currentSlide++;
        } else {
            currentSlide = 1;
        }
        theChecker();
    }, 5000);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

document.getElementById("scrollBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});


