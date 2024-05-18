function addAndRemoveElements(inputArr) {
    let newArr = [];
    let numToAdd = 1; 
    for (command of inputArr) {
        if (command === "add") {
            newArr.push(numToAdd);
        } else {
            newArr.pop();
        }
        numToAdd++;
    }

    if (newArr.length) {
        console.log(newArr.join("\n"));
    } else {
        console.log("Empty");
    }
}

// addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);
