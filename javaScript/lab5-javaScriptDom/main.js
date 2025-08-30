//all selectos 

//first
var numbersget = document.getElementById('numbers');
var max = document.getElementById('max');
var min = document.getElementById('min');
//second
var senctence = document.getElementById('senctence');
var senctenceModifeid = document.getElementById('senctenceModifeid');
//thrid 
var balls = document.getElementsByClassName('ball');
var ballnumbers = document.getElementById('ballnumbers');
//forht 
var tagName = document.getElementById('tagName');
var className = document.getElementById('className');
var id = document.getElementById('id');
var namem = document.getElementById('name');
var result = document.getElementsByClassName('result')[0];
console.log(tagName);
console.log(className);
console.log(id);
console.log(namem);


//get ana validate numbers 

function inputNumbers(){
    var res = [];
    var check = true;
    do{
    var inp = numbersget.value;
     check = splitAndValidate(inp);
    }while(!check)
    res = inp.split(',');
        for(var i = 0; i<res.length; i++)
        {
            res[i] = Number(res[i]);
        }
        console.log(res);
        
        return (res);
    }
function splitAndValidate(inp){
    if(inp == undefined)
        return false;
var arr = inp.split(',');
for(var i =0 ; i<arr.length; i++){
    if(isNaN(Number(arr[i])))
        return false
}
return true
}
function sortNumbers(a,b){
return a-b;
}
//1st task 
function getMaxMin(){
var arr = inputNumbers().sort(sortNumbers);
var secMin = arr[1];
var secMax = arr[arr.length-2];
max.innerText = secMax;
console.log(secMin);

min.innerText = secMin;
console.log(min);

}


//second
function capitalize (){
    senctenceModifeid.innerHTML= senctence.value;
    senctenceModifeid.classList.add('capitalize')
}


//third
// function checkNumber(){
//     do{
//         check=true
//     num = Number(ballnumbers.value);
//     if(isNaN(num) || num < 1 || num >3)
//     {
//         ballnumbers.placeholder="'Wrong, You must choose from 1 to 3'";
//         check=false;
//     }
// }while(check==false)
// return num;
// }
function colorBalls(){
     num = Number(ballnumbers.value);

         if(isNaN(num) || num < 1 || num >3)
    {
        ballnumbers.value="";
        ballnumbers.placeholder="'Wrong, You must choose from 1 to 3'";
        return;
    }
    console.log("cliccked!");

    console.log(num);
    
        balls[num-1].classList.add('active');

}

function colorsRest(){
        for(var i = 0; i<num; i++){
        balls[i].classList.remove('active');
    console.log(balls[i].classList);
    
    
    }
}


//count
// function checkSelector(inp,type){
// var n;
//     type == "tagName"? n=document.getElementsByTagName(inp):
//     type == "className"? n=document.getElementsByClassName(inp):
//     type == "id"? n=document.getElementById(inp):
//     type == "name"? n=document.getElementsByName(inp):n=undefined;
//     return n
// }
function countSelectors (){
    var tagNameNum = document.getElementsByTagName(tagName.value);
    var classNameNum = document.getElementsByClassName(className.value);
    var idNum = document.getElementById(id.value);
    var nameNum = document.getElementsByName(namem.value);
    console.log(tagNameNum,classNameNum,idNum,nameNum);
    console.log(tagName.value);
console.log(className.value);
console.log(id.value);
console.log(namem.value);
var box = `${tagName.value}:${tagNameNum ==undefined?'0':tagNameNum.length},  ${className.value}:${classNameNum ==undefined?'0':classNameNum.length},  ${id.value}:${id == undefined?'false':'true'},  ${namem.value}:${nameNum ==undefined?'0':nameNum.length}`
result.innerText= box;
}