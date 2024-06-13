class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;  
  }
 
  calcArea() {
    this.area = this. width * this.height;
    return this.area;
    // return this. width * this.height;
  }
}


let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
