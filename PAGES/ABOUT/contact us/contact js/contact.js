
function myFunction(){
    var name = document.getElementById('name123').value;
    var email = document.getElementById('phone123').value;
    var phone = document.getElementById('email123').value;
    var detail = document.getElementById('detail123').value;

    if(name != "" && email != "" && phone != "" && detail != ""){

            alert("Submitted");
    }
    else
    {
        return;
    }


}