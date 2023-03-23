
 
// make a ajax get request to user json on page load
let userData
$(document).ready(function(){

    $.ajax({url:"user.json", success:function(result){
        //store json data to userData variable
        userData=result
        console.log(userData)
    }})
})


var input
// function on click 
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
            if($("#num").is(':checked') == true){
                $("#userphone").text(userData[i].contact)
            }
        }
    }


})

