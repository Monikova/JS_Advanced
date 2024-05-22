function carFactory(orderObj) {
    let car = {
        model: orderObj.model, 
        engine: {}, 
        carriage: {}, 
        wheels: undefined,
    };

    const engine = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 }, 
        monsterEngine: { power: 200, volume: 3500 },
    }

    const carriageFactory = (type, color) => {
        const carriage = {
            type, 
            color
        }

        return carriage;
    }

    if (orderObj.power <= 90) {
        car.engine = engine.smallEngine;
    } else if (orderObj.power <= 120) {
        car.engine = engine.normalEngine;
    } else {
        car.engine = engine.monsterEngine;
    }

    car.carriage = carriageFactory(orderObj.carriage, orderObj.color);

    // let wheelSize = orderObj.wheelsize % 2 === 0 ? orderObj.wheelsize - 1 : orderObj.wheelsize;
    // car.wheels = new Array(4).fill(wheelSize);
    car.wheels = new Array(4).fill(orderObj.wheelsize % 2 === 0 ? orderObj.wheelsize - 1 : orderObj.wheelsize);
  
    return car;
}

console.log(carFactory({ 
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }));

console.log(carFactory({ 
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }));
