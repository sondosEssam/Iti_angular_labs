//selectors
var fname = document.getElementById('name')
var age = document.getElementById('age')
var gender = document.getElementById('gender')
var history1 = document.getElementById('history');





//get cookcies by keyname
function getCookies (keyname){
    var cookies = document.cookie.split(';');
    for(var i =0; i<cookies.length; i++){
        var cookie = cookies[i].split('=');
        var key = cookie[0].trim(); 
        var value = cookie[1];
        if(key === keyname) return value;
    }
    console.log(cookies);
    
    return false
}


//setting values
fname.innerHTML = getCookies('name');
fname.style.color = getCookies('color');
age.innerHTML = getCookies('age');
var genderval = getCookies('gender');
genderval == "male"? gender.innerHTML=`<i class="fa-solid fa-person"></i>`:gender.innerHTML=`<i class="fa-solid fa-person-dress"></i>`;


var visits = getCookies('visits'); 
if(visits){
    visits = Number(visits);
    console.log(visits);
    
}
else{
    
    visits=0;
}


// history1.innerHTML = visits;
// window.onload= fucntion (){
// visits += 1;

// document.cookie=`visits=${visits};`
// }
