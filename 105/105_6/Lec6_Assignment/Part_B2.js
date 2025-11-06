class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }

    length() {
        return Math.sqrt(Math.pow(this.point2.x - this.point1.x, 2) + Math.pow(this.point2.y - this.point1.y, 2));
    }
}

class Triangle {
    constructor(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }

    perimeter() {
        const side1 = new Line(this.point1, this.point2).length();
        const side2 = new Line(this.point2, this.point3).length();
        const side3 = new Line(this.point3, this.point1).length();
        return side1 + side2 + side3;
    }

    area() {
    const x1 = this.point1.x, y1 = this.point1.y;
    const x2 = this.point2.x, y2 = this.point2.y;
    const x3 = this.point3.x, y3 = this.point3.y;

    const downwardSum = (x1 * y2) + (x2 * y3) + (x3 * y1);
    const upwardSum = (y1 * x2) + (y2 * x3) + (y3 * x1);
    const area = 0.5 * Math.abs(downwardSum - upwardSum);

    return area;
}

    isValid() {
        const side1 = new Line(this.point1, this.point2).length();
        const side2 = new Line(this.point2, this.point3).length();
        const side3 = new Line(this.point3, this.point1).length();
        return (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1);
    }
}

const p1 = new Point(0, 0);
const p2 = new Point(4, 0);
const p3 = new Point(0, 3);

const p4 = new Point(1, 1);
const p5 = new Point(5, 1);
const p6 = new Point(1, 4);


const triangle1 = new Triangle(p1, p2, p3);
const triangle2 = new Triangle(p4, p5, p6);

if (triangle1.isValid()) {
    console.log("Triangle 1 is valid");
    console.log("Perimeter:", triangle1.perimeter());
    console.log("Area:", triangle1.area());
} else {
    console.log("Triangle 1 is not valid");
}

if (triangle2.isValid()) {
    console.log("Triangle 2 is valid");
    console.log("Perimeter:", triangle2.perimeter());
    console.log("Area:", triangle2.area());
} else {
    console.log("Triangle 2 is not valid");
}
