function previousDay(year, month, day) {
    // let date = new Date(year, month - 1, day);
    let previousDate = new Date(year, month - 1, day - 1);
    // let dateToLog = `${previousDate.getFullYear()}-${previousDate.getMonth() + 1}-${previousDate.getDate()}`;
    // return dateToLog;
    return `${previousDate.getFullYear()}-${previousDate.getMonth() + 1}-${previousDate.getDate()}`;

}

console.log(previousDay(2016, 9, 30));
console.log(previousDay(2015, 5, 10));
console.log(previousDay(2024, 1, 1));
