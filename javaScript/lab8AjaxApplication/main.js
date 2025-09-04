//selectors 
var tbody = document.getElementById("tbody");
var fetchUsersButton = document.getElementById("fetchUsers");
var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");
var addButton = document.getElementById("addBtn");
//validation
var allInputs = document.querySelectorAll("form div input.form-control");
var errorMessages = document.querySelectorAll("p.error-message.hidden");
var successMessage = document.querySelector(".sucess-message")


//form 
   var id= document.getElementById("userId");
   var nameInput= document.getElementById("nameInput");
   var email= document.getElementById("emailInput");
   var userName= document.getElementById("userNameInput");
   var phone= document.getElementById("phoneInput");
   var formSubmitButton = document.getElementById("formSubmitButton");
    var form = document.getElementById("userForm");



//global

var ids =[];
var update_id = null;



//apis
 function requests(method,url,body,isAsync,callback){
    var xml = new XMLHttpRequest();
    xml.open(method,url,isAsync);
    xml.setRequestHeader("Content-Type", "application/json");
    xml.onreadystatechange = function(){
        
        if(xml.readyState === 4 && xml.status >= 200 && xml.status < 300){
             users =JSON.parse(xml.responseText);
             
            callback(users);
        }
    }
    xml.send(body);
}





//structure



//append tbale 
function tableAppendUser(users){
    tbody.innerHTML="";

    for(let i =0; i<users.length;i++)
    {

        var tr = document.createElement("tr");
        var updateButton = document.createElement("button");
        var deleteButton = document.createElement("button");
        tr.innerHTML = `
        <td>${users[i].id}</td>
        <td><a href="./user/user.html" class="btn btn-secondary" onclick="setCookie(${users[i].id})">${users[i].name}</a></td>
        <td>${users[i].email}</td>
        <td>${users[i].userName}</td>
        <td>${users[i].phone}</td>
        `
        ids.push(users[i].id);

        updateButton.innerHTML="<i class='fas fa-edit'></i>";
        deleteButton.innerHTML="<i class='fas fa-trash'></i>";
        updateButton.addEventListener('click', function (){
            showForm("update", ids[i]);
            update_id = ids[i];
        });

        deleteButton.addEventListener('click', function (){
            handleDelete(ids[i]);
        });
        tr.appendChild(updateButton);
        tr.appendChild(deleteButton);
        tbody.appendChild(tr);
    }
}



//operatoins

function handleDelete(id)
{

    requests("DELETE",`https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users/${id}`,"",true,function(){
        tbody.innerHTML="";
        requests("GET","https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users","",true,tableAppendUser);
    });
    successMessage.innerHTML="user deleted successfully"
    window.scrollTo(0, 0);
    successMessage.classList.add("show");
    setTimeout(function(){
            successMessage.classList.remove("show");
    },2000)

}
function handleUpdate(update_id){
    var userData = getDataFromForm();
    
    requests("PUT",`https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users/${update_id}`,JSON.stringify(userData),true,function(){
        requests("GET","https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users","",true,tableAppendUser);
    });
}
function handleAdd(){
    var userData = getDataFromForm();
    requests("POST","https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users",JSON.stringify(userData),true,function(){
        requests("GET","https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users","",true,tableAppendUser);
    });
}



//form related

function getDataFromForm() {
    return {
        id: id.value,
        name: nameInput.value,
        email: email.value,
        userName: userName.value,
        phone: phone.value
    };
}

function showForm(type, idu){
    form.style.display = "block";
    if(type === "add"){
        form.reset();
        formSubmitButton.innerHTML = "Add User";
    }
    else if(type === "update"){
        id.value = idu;
        formSubmitButton.innerHTML = "Update User";
    }
}


//set cookies
function setCookie(id){
    document.cookie = `id=${id}; path=/`;
    console.log(document.cookie);
    
}





//validation
function  ValidateSingleInput(elemnt,val){
var regex = "";
var res = false;
    switch (val){
    case 0:
        regex=/[a-z]{3,}/;
        break;
    case 1:
        regex = /^\S+@\S+\.\S+$/
        break;
    case 2:
        regex=/^[A-Za-z_][A-Za-z0-9_]*$/;
        break;
    case 3:
        regex=/(011|010|012)[0-9]{3,8}/;
        break;
}
    
    regex.test(elemnt.value)? res= true: res= false;
return  res;
}
function validateWholeForm(){
var wrong_indicator = 0;
for(var i =0; i<allInputs.length;i++){
    
    if(ValidateSingleInput(allInputs[i],i)){
        allInputs[i].classList.add('is-valid');
        allInputs[i].classList.remove('is-invalid');
        errorMessages[i].style.display="none";
    
    }
    else
    {
        allInputs[i].classList.add('is-invalid');
        allInputs[i].classList.remove('is-valid');
                errorMessages[i].style.display="block";
        wrong_indicator = 1;
    
    }
}
wrong_indicator == 0? wrong_indicator = true: wrong_indicator=false;
return wrong_indicator;
}














//events 

//get users
fetchUsersButton.addEventListener('click',function(){
    requests("GET","https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users","",true,tableAppendUser);
    
});







//serach by id
searchButton.addEventListener('click',function(){
    var id = searchInput.value;
    requests("GET",`https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users/${id}`,"",true,tableAppendUser);
});







//form submissions in details
form.addEventListener('submit',function(e){
    e.preventDefault();
 
});
formSubmitButton.addEventListener('click',function(e){
    if(validateWholeForm())
    {

        if(e.target.innerHTML == "Add User"){
        handleAdd();
        successMessage.innerHTML="user added succesfully"
    }else if(e.target.innerHTML == "Update User"){
        handleUpdate(update_id);
        successMessage.innerHTML="user updated succesfully"
    }
       form.style.display = "none";
       window.scrollTo(0, 0);
            successMessage.classList.add("show");
    setTimeout(function(){
                successMessage.classList.remove("show")
    },2000)
    }
    else{
    console.log("condition didn't met");
    }
});

//add
addButton.addEventListener('click',function(){
    showForm("add");
});

