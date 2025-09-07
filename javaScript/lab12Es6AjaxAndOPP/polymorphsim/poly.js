import Shape from "./Shape.js";
import Circle from "./Circle.js";
import Rectangle from "./Rectangle.js";
import Square from "./Square.js";


let shapes = new Shape();
let circle = new Circle(5);
let rectangle = new Rectangle(5,10);
let square = new Square(5);

console.log("-------------------Shape Class-----------------");
shapes.display();
console.log(shapes.toString());
console.log("-------------------Circle Class-----------------");
circle.display();
console.log(circle.toString());
console.log("-------------------Rectangle Class-----------------");
rectangle.display();
console.log(rectangle.toString());
console.log("-------------------Square Class-----------------");
square.display();
console.log(square.toString());