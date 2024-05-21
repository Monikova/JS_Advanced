function townPopulation(inputArr) {
    let townPopObj = {}; 

    for (str of inputArr) {
        let [townName, population] = str.split(" <-> "); 
        if (!townPopObj.hasOwnProperty(townName)) {
            townPopObj[townName] = Number(population);
        } else {
            townPopObj[townName] += Number(population);
        }

    }

    for (let [town, people] of Object.entries(townPopObj)) {
        console.log(`${town} : ${people}`);
    }
}

// townPopulation(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000'] );
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);
