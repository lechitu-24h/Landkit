//Open close menu responsive
$(".open-close").click(function (){
    $("#menu").toggleClass("menu-responsive");
});

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


$("#contact-submit").click(function(){
    $.ajax({
        url : "http://localhost:3001/api/login",
        type : "post",
        dataType:"text",
        data : {
            username : $('#name').val(),
            password : $('#password').val()
        },
        success : function (){
            $("#noti-api").css("display", "block");
        }
    });
});

