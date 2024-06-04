function aggregareElements(arr) {
    let sumOfArr = 0;
    let inverseSum = 0;
    let concatSum = ""; 
    for (num of arr) {
        sumOfArr += num;
        inverseSum += 1 / num;
        concatSum += num;
    }

    console.log(sumOfArr);
    console.log(inverseSum);
    console.log(concatSum);
}

aggregareElements([1, 2, 3]);
aggregareElements([2, 4, 8, 16]);
