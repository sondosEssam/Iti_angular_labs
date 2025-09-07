//main shape class 
class Shape{
    calculateArea(){
        return 0;
    }
    calculatePerimeter(){
        return 0;
    }
    display(){
        console.log("This is a shape");
    }
    toString(){
        return `Shape: area = ${this.calculateArea()}, perimeter = ${this.calculatePerimeter()}`;
    }
}


export default Shape;