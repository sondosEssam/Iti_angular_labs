import Shape from "./Shape.js";
class Rectangle extends Shape{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea(){
        return this.width * this.height;
    }
    calculatePerimeter(){
        return 2 * (this.width + this.height);
    }
    display(){
        console.log(`This is a rectangle with width ${this.width} and height ${this.height}`);
    }
    toString(){
        return `Rectangle: width = ${this.width}, height = ${this.height}, area = ${this.calculateArea()}, perimeter = ${this.calculatePerimeter()}`;
    }
}
export default Rectangle;
//and so on for the circle and square