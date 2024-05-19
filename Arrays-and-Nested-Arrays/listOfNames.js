function listOfNames(arr) {
  let sortedArr = arr.sort((a, b) => a.localeCompare(b));
  let numbering = 1;
  for (let i = 0; i < sortedArr.length; i++) {
      console.log(`${numbering}.${sortedArr[i]}`);
      numbering++
  }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
