//Open close menu responsive
$(".open-close").click(function (){
    $("#menu").toggleClass("menu-responsive");
});
//Menu dropdown responsive
var listItem = $(".dropdown-item");
listItem.each(function (){
    $(this).click(function (){
        listItem.each(function (){
            $(this).children(".dropdown-menu2").css("display", "none");
        });
        console.log(this);
        $(this).children(".dropdown-menu2").css("display", "block");
    })
})

//submit form
$("#contact-submit").click(function (){
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

$("#contact-submit").click(function(){
    $("#contact-submit").attr("disabled", true);
    $.ajax({
        url : "http://localhost:3001/api/login",
        type : "post",
        dataType:"json",
        data : {
            username : $('#name').val(),
            password : $('#password').val()
        },
        success : function (){
            $("#noti-api").css("display", "block");
            $("#contact-submit").attr("disabled", false);
        },
        error : function (){
            $("#contact-submit").attr("disabled", false);
        }
    });
});

