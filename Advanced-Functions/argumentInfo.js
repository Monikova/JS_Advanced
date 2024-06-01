function argumentInfo(...input) {
    let assArr = {};
    for (let param of input) {
        let type = typeof param; 
        console.log(`${type}: ${param}`);

        if (assArr.hasOwnProperty(type)) {
            assArr[type] += 1;
        } else {
            assArr[type] = 1;
        }
    }
    
    Object.entries(assArr).sort((a, b) => b[1] - a[1])
                        .forEach(entry => {
        console.log(`${entry[0]} = ${entry[1]}`);
    })
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); }, 45, {name: 'Peter', age: 25,});
