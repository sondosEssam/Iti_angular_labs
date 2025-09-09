//first
var indexs =[];
function searchletter(){

    // var str = document.getElementById('input').value;
    // var letter = document.getElementById('letter').value;
    var str = prompt("enter string");
    var letter = prompt("enter letter");

    for(var i =0; i<str.length; i++){
        // console.log(str[i]);
        
        if(str[i] == letter)
        {
            // console.log("happen");
            indexs.push(i);
        }
}
console.log(indexs);

}
//second
function fizzBuzz(){
    var message="";
    // var num = Number(document.getElementById('input').value);
    var num = Number(prompt("enter you number"));
    if(num % 3==0 && num %5 ==0)
        message="fiz buzz";
    else if(num%3==0)
        message="fizz";
    else if(num%5==0)
        message="buzz";
    else
        message="none";
    console.log(message);
}



//thrid
function operation(){
    var num = 0;
    var elem = []
    while(num!=3){
        var val = Number(prompt("ente rnumber"));
    elem.push(val);
        num++;
    }
    console.log("sum",add(elem));
    console.log("multiply", multipy(elem));
    console.log("divison",devide(elem));
    
    
    
}
function multipy(elem){
    var res =1;
    for(var i = 0; i<elem.length; i++)
        res*=elem[i];
    return res;
}

function add(elem){
    var res =0;
    for(var i = 0; i<elem.length; i++)
        res+=elem[i];
    return res;
}
function devide(elem){
    var res =elem[0];
    for(var i = 1; i<elem.length; i++)
        res/=elem[i];
    return res;
}


//forth
function sorting(){
    var num = 0;
    var elem = []
    while(num!=5){
        var val = Number(prompt("ente rnumber"));
    elem.push(val);
        num++;
    }
var op = Number([prompt("enter 1 for ascendign and -1 for desceding")])
    if(op==1)
        console.log(elem.sort(compareFnAsceding));
    else if (op ==-1)
        console.log(elem.sort(compareFnDecending));
    
}
function compareFnAsceding(a,b){
    return a-b;
}
function compareFnDecending(a,b){
    return b-a;
}


//fifth
function palindorm(){
    var str=prompt("enter your string");
    var co = prompt("press y for case senstivity and n for not");
    if(co=='y'){
        for(var i = 0; i<str.length; i++)
        {
            // console.log(str[i]);
            // console.log(str[str.length-i-1]);
            
            
            if(str[i] == str[str.length-i-1]){
                console.log('y');
                
                continue
            }
            else{
                console.log("NOT PALIDROME");
                return;
            }
        }
        // console.log('PALINDROME');
        return;
        
    }
    else if(co=='n'){
        str = str.toLowerCase();
        // console.log(str);
        
                for(var i = 0; i<str.length; i++)
        {
            if(str[i] == str[str.length-i-1]){
                continue
            }
            else{
                console.log("NOT PALIDROME");
                return;
            }
        }
        console.log('PALINDROME');
        return;
        
    }
}

var person ={
    "age":25
}
var mykey ="age";
console.log(person.mykey);
console.log(person[mykey]);
console.log(person['myeky']);


