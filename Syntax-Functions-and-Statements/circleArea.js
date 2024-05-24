function circleArea(input) {
    let typeOfInput = typeof input;
    if (typeOfInput === "number") {
        let radius = input;
        let circleArea = Math.PI * Math.pow(radius, 2);
        return circleArea.toFixed(2);
    } else {
         return `We can not calculate the circle area, because we receive a ${typeOfInput}.`;
    }

}

console.log(circleArea(5)); 
console.log(circleArea("name")); 
