//selecting elemetns

var success = document.getElementsByClassName('btn')[0];
var fail = document.getElementsByClassName('btn')[1];
var result = document.getElementsByClassName('result')[0];
var correctIcon =  document.getElementsByClassName('fa-solid fa-check')[0];
var wrongIcon =  document.getElementsByClassName('fa-solid fa-xmark')[0];



//creating elemnts
//correct version
var Heading = document.createElement('h1')
var p = document.createElement('p');
var icon = document.createElement('i');
icon.classList.add('fa-solid')

//wrong version
function successClick(){
Heading.textContent= "Success";
p.textContent = "this is a success message"
Heading.classList.add('sucess');
Heading.classList.remove('fail');

icon.classList.add('fa-check','success');
icon.classList.remove('fa-xmark','fail');

p.textContent = "this is a success message";
p.classList.add('sucess');
p.classList.remove('fail');

}

function failAlert(){
Heading.textContent= "Error";
p.textContent = "this is a Eror message"
Heading.classList.remove('sucess');
Heading.classList.add('fail');

icon.classList.remove('fa-check','success');
icon.classList.add('fa-xmark','fail');

p.textContent = "this is a fail message";
p.classList.remove('sucess');
p.classList.add('fail');

}

result.appendChild(Heading);
result.appendChild(icon);
result.appendChild(p);


success.addEventListener('click',successClick);
fail.addEventListener('click',failAlert);