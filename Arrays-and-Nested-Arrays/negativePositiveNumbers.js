function positiveNegativeNums(inputArr) {
  let newNumsArr = [];
  for (num of inputArr) {
    if (num < 0) {
      newNumsArr.unshift(num);
    } else {
      newNumsArr.push(num);
    }
  }
    
  newNumsArr.forEach(el => console.log(el));
  // console.log(newNumsArr.join("\n"))              // another (faster) way for printing on the console each element of newNumsArr on a new line (though, it's a string);
}

positiveNegativeNums([7, -2, 8, 9]);
positiveNegativeNums([3, -2, 0, -1]);
