//Open close menu responsive
$(".open-close").click(function (){
    $("#menu").toggleClass("menu-responsive");
});
//Menu dropdown responsive
$(".dropdown-item").each(function (){
    $(this).click(function (){
        $(".dropdown-item").each(function (){
            $(this).children(".dropdown-menu2").hide();
        });
        $(this).children(".dropdown-menu2").show();
    })
})

//slide
var slideIndex = 1;
showSlide(slideIndex);

function flusSlides(n) {
    showSlide(slideIndex += n);

    $(".slide-text").each(function (){
        if (n == 1) {
            $(this).addClass("fade-text-next");
            $(this).removeClass("fade-text-prev");
        } else {
            $(this).addClass("fade-text-prev");
            $(this).removeClass("fade-text-next");
        }
    });
}
function showSlide(n) {
    var slides = $(".slide-item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    $(".slide-item").each(function (){
        $(this).attr("style", "display: none");
    })
    $(slides[slideIndex - 1]).attr("style", "display: block");
}

//submit form
$("#contact-submit").click(function(){
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();

    if (name == ""){
        $("#noti-name").css("display", "block");
    } else {
        $("#noti-name").css("display", "none");
    }
    if (email.length < 8){
        $("#noti-email").css("display", "block");
    } else {
        $("#noti-email").css("display", "none");
    }
    if (password.length < 8) {
        $("#noti-pass").css("display", "block");
    } else {
        $("#noti-pass").css("display", "none");
    }

    if (name != "" && email.length >= 8 && password.length >= 8) {
        $("#contact-submit").attr("disabled", true);

        $.ajax({
            url : "http://localhost:3001/api/login",
            type : "post",
            dataType:"json",
            data : {
                username : name,
                password : password
            },
            success : function (response){
                $("#noti-api").html(response.message);
                $("#contact-submit").attr("disabled", false);
            },
            error : function (response){
                $("#noti-api").html(response.responseJSON.error);
                $("#contact-submit").attr("disabled", false);
            }
        });
    } else {
        $("#noti-api").html("");
    }

    var contactInput = $(".contact-input");
    for (const element of contactInput) {
        console.log(element.value);
    }
});
//Enter submit form
$(".contact-input").keypress(function (event){
    if (event.which == 13) {
        $("#contact-submit").click();
        return false;
    }
})
