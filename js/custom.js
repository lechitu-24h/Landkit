//Menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("menu-responsive");
}
//Menu dropdown responsive
var listItem = document.getElementsByClassName("dropdown-item");
for (const dropItem of listItem) {
    dropItem.addEventListener("click", function(){
        var listMenu = document.getElementsByClassName("dropdown-menu2");
        for (const menuItem of listMenu) {
            menuItem.style.display = "none";
        }
        this.children[1].style.display = "block";
    });
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

//submit form
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    var notiName = document.getElementById("noti-name");
    var notiEmail = document.getElementById("noti-email");
    var notiPass = document.getElementById("noti-pass");

    if (name == "") {
        notiName.style.display = "block";
    } else {
        notiName.style.display = "none";
    }
    if (email.length < 8) {
        notiEmail.style.display = "block";
    } else {
        notiEmail.style.display = "none";
    }
    if (pass.length < 8) {
        notiPass.style.display = "block";
    } else {
        notiPass.style.display = "none";
    }

    var contactInput = document.getElementsByClassName("contact-input");
    for (const element of contactInput) {
        console.log(element.value);
    }
}

//Enter submit form
var contactInput = document.getElementsByClassName("contact-input");
for (const element of contactInput) {
    element.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
         event.preventDefault();
         document.getElementById("contact-submit").click();
        }
    });
}