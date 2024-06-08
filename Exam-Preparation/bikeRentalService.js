class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikesArr) {
        let bikeBrandsArr = [];

        for (let bikeStr of bikesArr) {
            let [brand, quantity, price] = bikeStr.split("-");
            quantity = Number(quantity);
            price = Number(price);

            if (this.availableBikes.length === 0) {
                this.availableBikes.push({ brand, quantity, price });
                bikeBrandsArr.push(brand);
            } else {
                let isBrandFound = false;
                for (let bikeObj of this.availableBikes) {
                    if (bikeObj.brand === brand) {
                        bikeObj.quantity += quantity;
                        if (bikeObj.price < price) {
                            bikeObj.price = price;
                        }
                        isBrandFound = true;
                    }
                }

                if (!isBrandFound) {
                    this.availableBikes.push({ brand, quantity, price });
                }
            }

            if (!bikeBrandsArr.includes(brand)) {
                bikeBrandsArr.push(brand);
            }
        }

        let message = `Successfully added ${bikeBrandsArr.join(", ")}`;
        return message;
    }

    rentBikes(selectedBikes) {
        let bikesAvailable = 0;
        let totalPrice = 0;
        for (let bike of selectedBikes) {
            let [brand, quantity] = bike.split("-");
            quantity = Number(quantity);

            for (let bikeObj of this.availableBikes) {
                if (bikeObj.brand === brand && bikeObj.quantity >= quantity) {
                    totalPrice += quantity * bikeObj.price;
                    bikeObj.quantity -= quantity;
                    bikesAvailable++;
                }
            }
        }

        if (bikesAvailable === selectedBikes.length) {
            return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;;
        } else {
            return "Some of the bikes are unavailable or low on quantity in the bike rental service.";;
        }
    }

    returnBikes(returnedBikes) {
        let allBikesReturned = 0;
        for (let bike of returnedBikes) {
            let [brand, quantity] = bike.split("-");
            quantity = Number(quantity);

            for (let bikeObj of this.availableBikes) {
                if (bikeObj.brand === brand) {
                    bikeObj.quantity += quantity;
                    allBikesReturned++;
                }
            }
        }

        if (allBikesReturned === returnedBikes.length) {
            return `Thank you for returning!`;
        } else {
            return "Some of the returned bikes are not from our selection.";
        }
    }

    revision() {
        let message = "Available bikes:\n";
        let sorted = this.availableBikes.sort((a, b) => a.price - b.price).forEach(b => message += `${b.brand} quantity:${b.quantity} price:$${b.price}\n`);
        message += `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`
        return message;
    }
}


// input 1
// const rentalService = new BikeRentalService("MyBikes", "CityCenter");

// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));


// input 2
// const rentalService = new BikeRentalService("MyBikes", "CityCenter");

// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));


// input 3
// const rentalService = new BikeRentalService("MyBikes", "CityCenter");

// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5", "Stunt Bike-5"]));
// console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3", "Race Bike-5"]));
// console.log(rentalService.revision());


// input 4
const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());
