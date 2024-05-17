function sameNumbers(integerNum) {
    let numArr = integerNum.toString().split("");
    let num = Number(numArr[0]);
    let isSame = true;
    let sum = 0;

    for (el of numArr) {
        let currNum = Number(el);
        sum += currNum; 
        if (currNum !== num) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(22222);
sameNumbers(1234);
