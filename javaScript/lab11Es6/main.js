//1-swap
console.log("first task");

function swapByDestructing(a, b) {
    [a, b] = [b, a];
    return [a, b];
}
console.log(swapByDestructing(5, 10));
console.log(swapByDestructing('hello', 'world'));
console.log("--------------------");



console.log("second task");

//2- max number by rest and spread
function getMax(...arr) //rest parmater
 {
    return Math.max(...arr); //spread operator
}
console.log(getMax(1, 2, 3, 4, 5));
console.log(getMax(-10, -20, -30, -5));
console.log("--------------------");





console.log("third task");
//3- array api methods
var fruits = ["apple", "strawberry", "banana", "orange",
"mango"];
//3.1 every check if all elements are strings
var allStrings = fruits.every((e) => typeof e === 'string');
console.log("is all strings: " + allStrings); // true
//3.2 some check if some elements start with 'a'
var someStartWithA = fruits.some((e) => e.startsWith('a'));
console.log("is some start with a: " + someStartWithA);
fruits.forEach((e)=> e.startsWith("a") ? console.log(e) : '');
//3.3 filter check if some elements start with 'b' or 's'
var newArr = fruits.filter((e)=>e.startsWith('b')||e.startsWith('s'));
console.log("filter array: " + newArr);

//3.4 map 
var loveFruits = fruits.map((e)=>`I love ${e}`);
console.log("map array"+ loveFruits);
//3.5 forEach
loveFruits.forEach((e)=>console.log(e));
console.log("--------------------");




console.log("fourth task");

//4 positive numbers
function positiveNumbers(...numbers) {
    return numbers.filter(num => num > 0);
}
console.log(positiveNumbers(-10, 20, -30, 40, 50, -60)); // [20, 40, 50]
console.log("--------------------");


console.log("fifth task");

//5 sum of a list of numbers
function sumOfNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumOfNumbers(1, 2, 3, 4, 5)); // 15
console.log(sumOfNumbers(-10, 20, -30, 40, 50, -60)); // 10

console.log("--------------------");

console.log("sixth task");
//6- capitalized function
function Capitalize(...names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}
console.log(Capitalize('john', 'SARAH', 'alice')); // ['John', 'Sarah', 'Alice']
console.log(Capitalize('mohamed', 'ahmed', 'ali')); // ['Mohamed', 'Ahmed', 'Ali']
console.log(Capitalize('london', 'NEW YORK', 'paris')); // ['London', 'New york', 'Paris']

console.log("--------------------");
console.log("seventh task");

//7- check string lower cased or upper cased fucntion 
function isLowerCase(str) {
    return str === str.toLowerCase();
}
console.log(`isLowerCase('hello'): ${isLowerCase('hello')}`); // true
console.log(`isLowerCase('Hello'): ${isLowerCase('Hello')}`); // false
console.log(`isLowerCase('WORLD'): ${isLowerCase('WORLD')}`); // false
console.log("--------------------");

console.log("eighth task");

//8- filter string length greater than given length
let lengthString = (arr,len)=>{
    return arr.filter(e=>e.length>len);
}
console.log(lengthString(['apple', 'banana', 'kiwi', 'grape'], 4)); // ['apple', 'banana']
console.log(lengthString(['cat', 'dog', 'elephant', 'fox'], 3));
console.log(lengthString(['red', 'blue', 'green', 'yellow'], 4)); n