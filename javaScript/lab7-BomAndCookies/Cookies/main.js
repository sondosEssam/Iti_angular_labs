//selectors
//first
var form = document.getElementById("form");

var nameInput = document.getElementById("name");
var age = document.getElementById("age");
var gender = document.getElementsByName("gender");
var color = document.getElementsByName("color")[0];

var submit = document.getElementById("btnSubmit");
var errors = document.getElementsByClassName("invalid"); //{name, age, gender, color}

console.log(submit);

//general
var error_indicator = 0;


//validation

function validateGeneral(element, regex, number) {
  if (element.value.trim() === ""|| !regex.test(element.value) ) {
    console.log("error");
    
    element.classList.add("error");
    errors[number].classList.add("true");
    error_indicator = 1;
    return false;
  }
  element.classList.add("correct");
  element.classList.remove("error");
  errors[number].classList.remove("true");
  error_indicator = 0;

  // border
  return true;
}

function validateChoices(list) {
  for (var i = 0; i < list.length; i++) if (list[i].checked == true) return true;
  return false;
}

function validateChoicesApplying(list, number) {
  if (!validateChoices(list, number)) {
    errors[number].classList.add("true");
    error_indicator = 1;
    return false;
  }
  errors[number].classList.remove("true");
  error_indicator = 0;
  return true;
}


function formValidate() {
 validateGeneral(age, /(1[5-9])|([2-8][0-9])/, 1);
 validateGeneral(nameInput, /[a-z]{3,25}/, 0);
  if (
    error_indicator == 0 &&
    validateChoicesApplying(gender, 2) 
  ) {
    addCookie();
    return true;
  }
return false;
}

//functions
function getCheckedRadioValue(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].checked) return list[i].value;
  }
  return null;
}

function addCookie() {
    document.cookie=`name=${nameInput.value};`;
    document.cookie=`age=${age.value};`;
    document.cookie=`gender=${getCheckedRadioValue(gender)};`;
    document.cookie=`color=${color.value};`;

}


//events
//first
submit.addEventListener("click",function(){
    if(formValidate())
            window.open("about.html","_blank");
    
} );
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
nameInput.addEventListener("input", function (e) {
  validateGeneral(e.target, /[a-z]{3,25}/, 0);
});
age.addEventListener("input", function (e) {
  validateGeneral(e.target, /(1[5-9])|([2-8][0-9])/, 1);
});



