import Shape from "./Shape.js";
class Square extends Shape{
    constructor(side){
        super();
        this.side = side;
    }
    calculateArea(){
        return this.side * this.side;
    }
    calculatePerimeter(){
        return this.side *4
    }
    display(){
        console.log(`This is a square with side ${this.side}`);
    }
    //ovverride toString method
    toString(){
        return `Square: side = ${this.side}, area = ${this.calculateArea()}, perimeter = ${this.calculatePerimeter()}`;
    }
    
}
export default Square;