import { Shape } from "./Shape.js";
export class Circle extends Shape {
    constructor(radius: number) {
        super(radius, radius);
    }

    getArea(): number {
        return Math.PI * (this.dim1 ** 2);
    }
}
