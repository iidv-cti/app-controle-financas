$(function(){
    $("#prog").css("display","none");

    $("#form").submit(function(e){
        e.preventDefault();

        IIDVuserLogin(
            $("#cpf").val(),
            $("#password").val(),
            function(user) {
                $("#prog").css("display","none");
                window.location = "painel.html";
            }, function(error) {
                $("#prog").css("display","none");
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(error.message);
            });
    });
});