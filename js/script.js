
$(document).ready(function(){

    // USERNAME AND PASSWORD VALIDATION
    $("#submit").click(function(){
    $("#logInform").submit(function(){ 

        var username=$("#username").val();
        var password=$("#password").val();

        if(username!="" && password!=""){
         
            if(username=="admin" && password=="12345"){
                return true;
            }
            else{
                $("#display").html("Incorrect username or password");
                $("#display").css("color","red");
                return false;
            }

        }
        
    });
    });
    });