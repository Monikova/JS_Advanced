function sumOfNumbersNToM(nStr, mStr) {
    let n = Number(nStr);
    let m = Number(mStr);
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumOfNumbersNToM('1', '5'));
console.log(sumOfNumbersNToM('-8', '20'));
