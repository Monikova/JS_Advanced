function smallestTwoNumbers(inputArr) {
  let smallestArr = inputArr.sort((a, b) => a - b).slice(0, 2); 
  console.log(smallestArr.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3] );
