$(document).ready(function(){
    $.validator.setDefaults({
        submitHandler: function(){
          if(JSON.parse(localStorage.getItem($("#mail").val())).password==$("#psw").val())  
           window.location.href="https://www.annauniv.edu/nwsnew/index.php";
        else{
          document.getElementById("txt").innerText="password mismatch"
        }
    }
        
    });
    $.validator.addMethod('mypassword', function(value, element) {
        return this.optional(element) || (value.match(/[a-z]/) && value.match(/[0-9]/) && value.match(/[A-Z]/));
    },
    'Password should contain at least one numeric one Lowercase and one Uppercase.');
    $("#frm").validate({
        rules:{
        mail:{
            required:true,
            email:true,
           
        },
        psw:{
            required:true,
            minlength:8,
            mypassword:true,

        }
    },
        messages:{
            mail:{
                required:"please enter your email id",
                email:"please enter valide email"

            },
            psw:{
                required:"please enter your password",
                minlength:"password length must be 8"
            }
        },
    });
});
$(document).ready(function(){
    $("#sbtn").click(function(){
        $(".mydiv").animate({left:"1350px"},1000)
    $("#fbtn").click(function(){
        $(".mydiv").animate({left:"80px"},1000)
    })
})
})
$(document).ready(function(){
    $("#hd").click(function(){
        $(".mydiv").toggle();
    })
});
$(document).ready(function(){
            $("input").focus(function(){
                $(this).css("background-color",'darkgrey')
            })
            $(("input")).blur(function(){
                $(this).css("background-color","greenyellow")
            });
        });
    
