function printEveryNthElementfromAnArray(arr, num) {
    let arrWithNthElem = [];
    for (let i = 0; i < arr.length; i += num) {
        arrWithNthElem.push(arr[i]);
    }

    return arrWithNthElem;
}

console.log(printEveryNthElementfromAnArray(['5', '20', '31', '4', '20'], 2));      // ['5', '31', '20']
console.log(printEveryNthElementfromAnArray(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printEveryNthElementfromAnArray(['1', '2', '3', '4', '5'], 6));
