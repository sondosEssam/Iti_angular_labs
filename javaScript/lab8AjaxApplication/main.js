//selectors 
var tbody = document.getElementById("tbody");

var fetchUsersButton = document.getElementById("fetchUsers");
var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");



//form 
   var id= document.getElementById("userId");
   var nameInput= document.getElementById("nameInput");
   var email= document.getElementById("emailInput");
   var userName= document.getElementById("userNameInput");
   var phone= document.getElementById("phoneInput");
   var formSubmitButton = document.getElementById("formSubmitButton");
    var form = document.getElementById("userForm");



//global
var xml = new XMLHttpRequest();
var ids =[];
var update_id = null;



//apis

 function requests(method,url,body,isAsync,callback){
    xml.open(method,url,isAsync);
    xml.send(body);
    xml.onreadystatechange = function(){
        if(xml.readyState === 4 && xml.status >= 200 && xml.status < 300){
             users =JSON.parse(xml.responseText);
            callback(users);
        }
    }
}





//structure

function tableAppendUser(users){
console.log(users);
    tbody.innerHTML="";
for(let i =0; i<users.length;i++){

    var tr = document.createElement("tr");
    var updateButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    tr.innerHTML = `
    <td>${users[i].id}</td>
    <td>${users[i].name}</td>
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
        console.log(update_id);

    });

    deleteButton.addEventListener('click', function (){
        // console.log(ids[i]);
        handleDelete(ids[i]);
    });
    tr.appendChild(updateButton);
    tr.appendChild(deleteButton);
    tbody.appendChild(tr);
}
}


function getOneUser(users){
    tbody.innerHTML="";
    var tr = document.createElement("tr");
    var updateButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    tr.innerHTML = `
    <td>${users.id}</td>
    <td>${users.name}</td>
    <td>${users.email}</td>
    <td>${users.userName}</td>
    <td>${users.phone}</td>
    `
    updateButton.innerHTML="<i class='fas fa-edit'></i>";
    deleteButton.innerHTML="<i class='fas fa-trash'></i>";

    updateButton.addEventListener('click', function (){
        update_id = users.id;
        showForm("update",update_id);
    });

    deleteButton.addEventListener('click', function (){
        handleDelete(users.id);
    });
    tr.appendChild(updateButton);

    tr.appendChild(deleteButton);
    tbody.appendChild(tr);
}



function handleDelete(id)
{
    requests("DELETE",`https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users/${id}`,"",true,function(){
        tbody.innerHTML="";
        requests("GET","https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users","",true,tableAppendUser);
    });
}



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


function handleUpdate(update_id){
    var userData = getDataFromForm();
    requests("PUT",`https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users/${update_id}`,JSON.stringify(userData),true,function(){
        requests("GET","https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users","",true,tableAppendUser);
    });
}




function handleAdd(){
    var userData = getDataFromForm();
    requests("POST","https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users",JSON.stringify(userData),true,function(){
        form.style.display = "none";
        requests("GET","https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users","",true,tableAppendUser);
    });
}












//events 
fetchUsersButton.addEventListener('click',function(){
    requests("GET","https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users","",true,tableAppendUser);
    
});


searchButton.addEventListener('click',function(){
    var id = searchInput.value;
    requests("GET",`https://68b58c51e5dc090291af64bd.mockapi.io/api/v1/users/${id}`,"",true,getOneUser);
});

userForm.addEventListener('submit',function(e){
    e.preventDefault();
    // showFormAndGetData();
    if(formSubmitButton.innerHTML == "Add User"){
        handleAdd();
    }else if(formSubmitButton.innerHTML == "Update User"){
        console.log(update_id);
        
        handleUpdate(update_id);
    }
    form.style.display = "none";
});

formSubmitButton.addEventListener('click',function(e){
    if(formSubmitButton.innerHTML == "Add User"){
        handleAdd();
    }else if(formSubmitButton.innerHTML == "Update User"){
        console.log(update_id);
        handleUpdate(update_id);
    }
    form.style.display = "none";
});