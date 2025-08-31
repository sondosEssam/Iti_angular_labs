//selectors
//first
var form = document.getElementById("form");
var table1 = document.getElementById("data1");

var nameInput = document.getElementById("name");
var password = document.getElementById("password");
var email = document.getElementById("email");
var gender = document.getElementsByName("gender");
var sport = document.getElementsByName("sport");
var Country = document.getElementsByName("country")[0];

var sumbit = document.getElementById("btnSubmit");
var reset = document.getElementById("btnReset");
var errors = document.getElementsByClassName("invalid"); //{name, pass, emial, gender, sport, country}

//general
var error_indicator = 0;
var tableData = [];

//validation

function validateGeneral(element, regex, number) {
  var nameregex = /[a-z]{3,25}/;
  if (element.value == "" || !regex.test(element.value) || element.value ==null) {
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
  console.log(validateChoicesApplying(gender, 3));
  console.log(validateChoicesApplying(sport, 4));

  if (
    error_indicator == 0 &&
    validateChoicesApplying(gender, 3) &&
    validateChoicesApplying(sport, 4)
  ) {
    addrow();
  }
}

//functions
function getCheckedRadioValue(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].checked) return list[i].value;
  }
  return null;
}

function getCheckedCheckboxValues(list) {
  let values = [];
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
    
    if (list[i].checked) values.push(list[i].value);
  }
  return values.join(", ");
}
function addrow() {
  var rowData = {
    name: nameInput.value,
    password: password.value,
    email: email.value,
    gender: getCheckedRadioValue(gender),
    sport: getCheckedCheckboxValues(sport),
    country: Country.value,
  };

  tableData.push(rowData);
  console.log("added!", tableData);
  creatElement(rowData);
}
function creatElement(input) {
  var tr = document.createElement("tr");
  var tdPsswords = document.createElement("td");
  var tdName = document.createElement("td");
  var tdEmail = document.createElement("td");
  var tdGender = document.createElement("td");
  var tdSports = document.createElement("td");
  var tdCountry = document.createElement("td");

  tdPsswords.textContent = input.password;
  tdEmail.textContent = input.email;
  tdName.textContent = input.name;
  tdGender.textContent = input.gender;
  tdSports.textContent = input.sport;
  tdCountry.textContent = input.country;

  console.log(nameInput.value,password.value,email.value,gender.value,sport,Country);
  
  tr.appendChild(tdName);
  tr.appendChild(tdPsswords);
  tr.appendChild(tdEmail);

  tr.appendChild(tdGender);
  tr.appendChild(tdSports);
  tr.appendChild(tdCountry);

  table1.appendChild(tr);
}

//events
//first
sumbit.addEventListener("click", formValidate);
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
nameInput.addEventListener("input", function (e) {
  validateGeneral(e.target, /[a-z]{3,25}/, 0);
});
password.addEventListener("input", function (e) {
  validateGeneral(e.target, /.{8,}/, 1);
});
email.addEventListener("input", function (e) {
  validateGeneral(e.target, /^\S+@\S+\.\S+$/, 2);
});
// gender.addEventListener('input', function(e){
//     validateChoicesApplying(e.target,3);
// })
// sport.addEventListener('input', function(e){
//     validateChoicesApplying(e.target,4);
// })
