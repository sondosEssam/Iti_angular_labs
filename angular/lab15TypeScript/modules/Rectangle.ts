import { Shape } from './Shape.js';
export class Rectangle extends Shape {
    constructor(width: number, height: number) {
        super(width, height);
    }

    getArea(): number {
        return this.dim1 * this.dim2;
    }
}
