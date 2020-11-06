//Menu
function showMenu() {
    document.getElementById("menu").style.display = "block";
}
function closeMenu() {
    document.getElementById("menu").style.display = "none";
}

function dropdownMenu(n) {
    var settings = document.getElementById("drop-settings");
    var signin = document.getElementById("drop-signin");
    var signup = document.getElementById("drop-signup");
    var pass = document.getElementById("drop-pass");
    var error = document.getElementById("drop-error");
    if (n == 1) {
        if (settings.style.display == "block") {
            settings.style.display = "none";
        } else {
            settings.style.display = "block";
            signin.style.display = "none";
            signup.style.display = "none";
            pass.style.display = "none";
            error.style.display = "none";
        }
    }
    if (n == 2) {
        if (signin.style.display == "block") {
            signin.style.display = "none";
        } else {
            settings.style.display = "none";
            signin.style.display = "block";
            signup.style.display = "none";
            pass.style.display = "none";
            error.style.display = "none";
        }
    }
    if (n == 3) {
        if (signup.style.display == "block") {
            signup.style.display = "none";
        } else {
            settings.style.display = "none";
            signin.style.display = "none";
            signup.style.display = "block";
            pass.style.display = "none";
            error.style.display = "none";
        }
    }
    if (n == 4) {
        if (pass.style.display == "block") {
            pass.style.display = "none";
        } else {
            settings.style.display = "none";
            signin.style.display = "none";
            signup.style.display = "none";
            pass.style.display = "block";
            error.style.display = "none";
        }
    }
    if (n == 5) {
        if (error.style.display == "block") {
            error.style.display = "none";
        } else {
            settings.style.display = "none";
            signin.style.display = "none";
            signup.style.display = "none";
            pass.style.display = "none";
            error.style.display = "block";
        }
    }
}


//slide
var slideIndex = 1;
showSlide(slideIndex);

function flusSlides(n) {
    showSlide(slideIndex += n);

    var item1 = document.getElementById("slide-item-1");
    var item2 = document.getElementById("slide-item-2");
    if (n == 1) {
        item1.classList.add("fade-text-next");
        item2.classList.add("fade-text-next");
        item1.classList.remove("fade-text-prev");
        item2.classList.remove("fade-text-prev");
    }
    if (n == -1) {
        item1.classList.remove("fade-text-next");
        item2.classList.remove("fade-text-next");
        item1.classList.add("fade-text-prev");
        item2.classList.add("fade-text-prev");
    }
     
}
function showSlide(n) {
    var slides = document.getElementsByClassName("slide-item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0;i < slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
