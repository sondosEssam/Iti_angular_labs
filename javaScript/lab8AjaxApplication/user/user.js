//selectors 

var nameInput = document.getElementById("name");

var userNameText = document.getElementById("userNameText");
var phoneNumberText = document.getElementById("phoneNumberText");
var emailText = document.getElementById("emailText");



//general 

var id =null;




id = getCookies('id');


//get cookies

function getCookies(id) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie) {
            var parts = cookie.split('=');
            if (parts[0]==id) {
                return (parts[1]);
            }
        }
    }
}




//get all info 
function getOneuserData(){
    var xml = new XMLHttpRequest();
    xml.open('GET',`https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users/${id}`);
    xml.setRequestHeader("Content-Type", "application/json");
    xml.onreadystatechange = function(){
        console.log(xml.readyState);
        console.log(xml.status);
        
        if(xml.readyState == 4 && xml.status >= 200 && xml.status <300)
        {
            
            var data = JSON.parse(xml.responseText);
            console.log(xml.responseText);
            nameInput.innerHTML = data.name;
            userNameText.innerHTML = data.userName;
            emailText.innerHTML = data.email;
            phoneNumberText.innerHTML = data.phone;
            
        }
    }
    xml.send();
}
getOneuserData();


