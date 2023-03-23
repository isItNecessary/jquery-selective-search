


let userData
$(document).ready(function(){

    $.ajax({url:"user.json", success:function(result){

        userData=result
        console.log(userData)
    }})
})

var input

$("#search").click(function(){
    input= $("#input").val()
    for(let i=0;i< userData.length;i++){
        if(input === userData[i].firstname)
        {
            $("#uid").text(userData[i].id)
            if($("#fname").is(':checked') == true){
                $("#ufirstname").text(userData[i].firstname)
            }
            if($("#lname").is(':checked') == true){
                $("#ulastname").text(userData[i].lastname)
            }
            if($("#address").is(':checked') == true){
                $("#uaddress").text(userData[i].address)
            }
            if($("#phone").is(':checked') == true){
                $("#uphone").text(userData[i].phone)
            }
        }
    }


})

