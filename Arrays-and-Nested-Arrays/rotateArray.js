function rotateArray(inputArr, rotations) {
    let rotatedArr = inputArr.slice();

    for (let i = 0; i < rotations; i++) {
        rotatedArr.unshift(rotatedArr.pop());
    }

    console.log(rotatedArr.join(" "));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
