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
function validateName(){
var nameregex = /[a-z]{3,25}/;
if(!nameregex.test(fname.value))
   {
    name_inv.style.display= "block";
    return(false);
   }
   name_inv.style.display = "none";
   return(true);
}

function validateid(){
for(var i = 0; i<tableData.length;i++){
    if(id.value == tableData[i].id)
            {
            id_inv.style.display = "block";
            return false;
            }
}
id_inv.style.display = "none";
return true
}

function formValidate(){
    if(validateName() && validateid())
    {
    addrow();
    displayTable();
    }
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
}
function displayTable(){
var box ="";
for(var i =0;i<tableData.length;i++){
    box+=`                <tr>
                    <td>${tableData[i].id}</td>
                    <td>${tableData[i].name}</td>
                    <td>${tableData[i].age}</td>
                    <td><button onclick="">Delete</button></td>
                </tr>
    `
    
}
table1.innerHTML = box;
}

//events
//first
btn.addEventListener("click",formValidate);

