//selectors
let main = document.getElementById("main"); //users container
let baseUrl = "https://jsonplaceholder.typicode.com";
let loadBtn = document.getElementById("loadData");
let posts = document.getElementById("posts-title");


//global 
let users = [];
let postsArr = [];
//api calls
function getData() {
fetch(`${baseUrl}/users`).then((res) => res.json()).then((data)=>users=data).catch((err)=>console.log(err));    
}

//posts part 
function getPosts(userId){
    fetch(`${baseUrl}/posts?userId=${userId}`).then((res)=>res.json()).then((data)=>postsArr=data).catch((err)=>console.log(err));
}





//build ui 
const buildUsers = ()=>{
    main.innerHTML = "";
    for(let user of users){
        let div = document.createElement("div");
        div.className = "col-3";
        div.innerText = user.name;
        div.classList.add("btn-secondary","text-center", "btn", "p-2", "m-1", "rounded", "shadow-lg", "border", "border-dark", "bg-gradient");
        div.addEventListener("click",()=>{
            div.classList.add("active");
            //we call both of the fucntions of get id and build posts here so evey time any user is clicked its own posts will apear 
            getPosts(user.id);
            buildPosts();
        }); //to display each post 

        main.appendChild(div); //appended every user from users arrays
    }
    
}
//build posts for each user from posts array 
const buildPosts = ()=>{
    posts.innerHTML = "";
    postsArr.forEach(post=>{
        let div = document.createElement("div");
        div.className = "col-12";
        //only title
        div.innerText = post.title;
        div.classList.add("text-center", "btn", "p-2", "m-1", "text-bold");
        posts.appendChild(div);
    });
}

loadBtn.addEventListener("click",()=>{
    getData();
    buildUsers();
});