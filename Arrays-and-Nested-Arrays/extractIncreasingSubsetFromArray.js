function extractIncreasingSubsetFromArray(inputArr) {
    let filteredArr = [];
    let lastBiggestNum = 0;
    for (let i = 0; i < inputArr.length; i++) {
        if (i === 0) {
            lastBiggestNum = inputArr[i]; 
            filteredArr.push(inputArr[i]);
        } else {
            let currNum = inputArr[i];
            if (currNum >= lastBiggestNum) {
                filteredArr.push(inputArr[i]);
                lastBiggestNum = currNum; 
            }
        }
    }

    return filteredArr;
}

console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsetFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));
