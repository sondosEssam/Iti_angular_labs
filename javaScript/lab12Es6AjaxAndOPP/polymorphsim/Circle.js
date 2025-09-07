import Shape from "/Shape.js";
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea(){
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter(){
        return 2 * Math.PI * this.radius;
    }
    display(){
        console.log(`This is a circle with radius ${this.radius}`);
    }
    toString(){
        return `Circle: radius = ${this.radius}, area = ${this.calculateArea()}, perimeter = ${this.calculatePerimeter()}`;
    }
}
export default Circle;