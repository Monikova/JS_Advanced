function calorieObject(inputArr) {
    let obj = {}; 

    for (let i = 0; i < inputArr.length; i += 2) {
            if (!obj.hasOwnProperty(inputArr[i])) {
                obj[inputArr[i]] = Number(inputArr[i + 1]);
            } else { 
                obj[inputArr[i]] += Number(inputArr[i + 1]);
            }
    }

    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
