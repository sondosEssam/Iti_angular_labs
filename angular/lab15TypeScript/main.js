//functions 
function calculateArea(width, highet) {
    if (highet === void 0) { highet = 1; }
    return width * highet;
}
console.log(calculateArea(5, 6));
console.log(calculateArea(5));

function printPersonInfo(person) {
    console.log("Name: ".concat(person.name));
    console.log("Age: ".concat(person.age));
    if (person.isStudent !== undefined) {
        console.log("Is Student: ".concat(person.isStudent));
    }
}



var person1 = { name: "Alice", age: 25, isStudent: true };
var person2 = { name: "Bob", age: 30 };
printPersonInfo(person1);
printPersonInfo(person2);
//task 3 - class
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarInfo = function () {
        return " Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year);
    };
    return Car;
}());
var car1 = new Car("Toyota", "Camry", 2020);
var car2 = new Car("Honda", "Civic", 2019);
console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
function printID(id) {
    console.log("ID: ".concat(id));
}
printID(123);
printID("ABC123");
