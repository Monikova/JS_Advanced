function evenPositionElement(inputArr) {
  let evenElemArr = []; 
  for (let i = 0; i < inputArr.length; i++) {
    if (i % 2 === 0) {
      evenElemArr.push(inputArr[i]);
    }
  }
  
  console.log(evenElemArr.join(" ").trim());
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);
