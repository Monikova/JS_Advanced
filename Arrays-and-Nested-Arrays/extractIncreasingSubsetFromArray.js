function extractIncreasingSubsetFromArray(inputArr) {
// 2nd working solution 
    let filteredArr = [];
    inputArr.reduce((total, num) => {
        if (!filteredArr.length) {
            filteredArr.push(num);
        } else {
            if (num >= filteredArr[filteredArr.length - 1]) {
                filteredArr.push(num);
            }
        }
    }, []);

// 1st working solution     
    // let filteredArr = [];
    // let lastBiggestNum = 0;
    // for (let i = 0; i < inputArr.length; i++) {
    //     if (i === 0) {
    //         lastBiggestNum = inputArr[i]; 
    //         filteredArr.push(inputArr[i]);
    //     } else {
    //         let currNum = inputArr[i];
    //         if (currNum >= lastBiggestNum) {
    //             filteredArr.push(inputArr[i]);
    //             lastBiggestNum = currNum; 
    //         }
    //     }
    // }

    return filteredArr;
}

console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsetFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));
