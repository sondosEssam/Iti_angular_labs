//selectors 
//first
var fname = document.getElementById('name');
var id = document.getElementById('id');
var age = document.getElementById('age');
var firstbutton = document.getElementById('btn');
var table1 = document.getElementById('data1');
var btn = document.getElementById('btn')
var name_inv = document.querySelector('.invalid.name');
var id_inv = document.querySelector('.invalid.id')


//global varibles
//first
var tableData = [];





//validation
// function validateName(){
// var nameregex = /[a-z]{3,25}/;
// if(!nameregex.test(fname.value))
//    {
//     name_inv.style.display= "block";
//     return(false);
//    }
//    name_inv.style.display = "none";
//    return(true);
// }


function validateNameInput(value){
    var nameregex = /[a-z]{3,25}/;
    if(fname.value =="")
    {
        name_inv.innerHTML = "you must enter a name";
        name_inv.style.display= "block";
        return false;
    }
    if(!nameregex.test(value))
    {
        name_inv.innerHTML = "Name must be between 3 and 25 letters"
        name_inv.style.display= "block";
        fname.style.border = "2px solid red"
        // border
        return false;
    }
        fname.style.border = "2px solid green"
   name_inv.style.display = "none";
   // border
   return true;
}


function validateid(value){
    if(id.value=="")
    {
        id_inv.style.display= "block";
        return false;
    }
for(var i = 0; i<tableData.length;i++){
    if(value == tableData[i].id)
            {
            id_inv.style.display = "block";
            id.style.border = "2px solid red";
            return false;
        }
    }
    id.style.border = "2px solid green";
    id_inv.style.display = "none";
return true
}

function formValidate(){
    var cnt= 0;
    validateNameInput(fname.value)==true? cnt++:cnt=0;
    validateid(id.value)==true?cnt++:cnt=0;
    console.log(cnt);
    
    if(cnt==2) 
    {
    addrow();}
}




//functions
//first
function addrow(){
var rowData={
    id:id.value,
    name:fname.value,
    age:age.value,

}

tableData.push(rowData);
console.log("added!", tableData);
creatElement(rowData);
}
function creatElement(input){
var tr = document.createElement('tr');
var tdId = document.createElement('td');
var tdName = document.createElement('td');
var tdAge = document.createElement('td');
tdAge.textContent = input.age;
tdId.textContent = input.id;
tdName.textContent = input.name;
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    table1.appendChild(tr);
}

//clear input 
function clear(){
    fname.value="";
    fname.style.border="2px solid black";
    id.value="";
    id.style.border="2px solid black";
    age.value="";
}

//events
//first

fname.addEventListener('input', function (e) {
    validateNameInput(e.target.value);

});
fname.addEventListener('blur', function (e) {
    validateNameInput(e.target.value);

});
fname.addEventListener('focus', function (e) {
    validateNameInput(e.target.value);

});

id.addEventListener('input', function(e){
    validateid(e.target.value);

})
id.addEventListener('blur', function(e){
    validateid(e.target.value);

})
id.addEventListener('focus', function(e){
    validateid(e.target.value);

})
btn.addEventListener('click',function(){
    formValidate();
    clear();
});

