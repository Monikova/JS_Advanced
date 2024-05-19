function extractIncreasingSubsetFromArray(inputArr) {
// 3rd working solution 
    let filteredArr = [];
    let biggestNum = inputArr[0];
    inputArr.reduce((total, num) => {
        if (num >= biggestNum) {
            filteredArr.push(num);
            biggestNum = num;
        }
    }, []);

    return filteredArr;
}

console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsetFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));
