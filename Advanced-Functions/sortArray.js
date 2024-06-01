function sortArray(arr, sortOrder) {
    if (sortOrder === 'asc') {
        return arr.sort((a,b) => a - b);
    } else {
        return arr.sort((a,b) => b - a);
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
