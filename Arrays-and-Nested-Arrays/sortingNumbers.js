function sortingNumbers(arr) {
    // let sortedArr = arr.sort((a, b) => a - b);
    let sortedArr = arr.slice().sort((a, b) => a - b);
    let arrangedArr = [];
    console.log(arrangedArr.isEmpty());
    let loopCount = sortedArr.length;
    for (let i = 0; i < loopCount; i++) {
        if (i % 2 === 0) {
            arrangedArr.push(sortedArr.shift());
        } else {
            arrangedArr.push(sortedArr.pop());
        }
    }

    return arrangedArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
