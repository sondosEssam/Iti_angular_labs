
//functions 

function calculateArea(width:number,highet:number =1):number{
    return width*highet;
}
console.log(calculateArea(5,6));
console.log(calculateArea(5));
console.log(calculateArea(5,undefined));
//task 2 - interfcae 
interface IPerson{
    name:string;
    age:number;
    isStudent?:boolean;
}
function printPersonInfo (person:IPerson):void{
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    if (person.isStudent !== undefined) {
        console.log(`Is Student: ${person.isStudent}`);
    }
}
const person1:IPerson={name:"Alice",age:25,isStudent:true};
const person2:IPerson={name:"Bob",age:30};
printPersonInfo(person1);
printPersonInfo(person2);
//task 3 - class
class Car{
    brand:string;
    model:string;
    year:number;
    constructor(brand:string, model:string, year:number){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    getCarInfo():string{
        return ` Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
}
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
//task 4 - alias and union types
type ID = number | string;
function printID(id:ID):void{
    console.log(`ID: ${id}`);
}
printID(123);
printID("ABC123");
