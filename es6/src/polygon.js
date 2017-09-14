//Abstract super class Polygon
export class Polygon {

  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

export class Rectangle extends Polygon {

  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }

  get area() { return this.height * this.width;}
}

export class Square extends Rectangle {
  constructor(side){
    super(side,side);
    this.name = "Square";

  }
  
}

export class Circle {

  constructor(radius){
    this.name = "Circle";
    this.r = radius
    this.height = 2 * radius;
    this.width = 2* radius;
  }

  get area() {
    return this.r * Math.PI * this.r;
  }
  
}


