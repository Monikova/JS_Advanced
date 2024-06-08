// 90/100 in Judge !!!

class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        // this.flights = new Set();
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        if (!this.flights.length) {
            this.flights.push({ flightNumber, destination, departureTime, price });
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        } else {
            let flightFound = false;
            for (let flight of this.flights) {
                if (flight.flightNumber === flightNumber) {
                    flightFound = true;
                    return `Flight ${flightNumber} to ${destination} is already available.`;
                }
            }

            if (!flightFound) {
                this.flights.push({ flightNumber, destination, departureTime, price });
                return `Flight ${flightNumber} to ${destination} has been added to the system.`;
            }
        }
    }
    // addFlight(flightNumber, destination, departureTime, price) {
    //     let flight = {flightNumber, destination, departureTime, price};
    //     if (!this.flights.has(flight)) {
    //         this.flights.add(flight);
    //         return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    //     } else {
    //         return `Flight ${flightNumber} to ${destination} is already available.`;
    //     }
    // }

    bookFlight(passengerName, flightNumber) {
        let flightFound = false;
        for (let flight of this.flights) {
            if (flight.flightNumber === flightNumber) {
                this.bookingsCount++;
                this.bookings.push({passengerName, flightNumber, price: flight.price});
                flightFound = true;
                return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
            }
        }

        if (!flightFound) {
            return `Flight ${flightNumber} is not available for booking.`;
        }
    }

    cancelBooking(passengerName, flightNumber) {
        let bookingFound = false;
        for (let i = 0; i < this.bookings.length; i++) {
            let booking = this.bookings[i];
            if (booking.flightNumber === flightNumber && booking.passengerName === passengerName) {
                this.bookingsCount--;
                this.bookings.splice(i, 1);
                bookingFound = true;
                return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
            }
        }

        if (!bookingFound) {
            return `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`;
        }
    }

    showBookings(criteria) {
        let message = '';
        if (!this.bookings.length) {
            throw new Error('No bookings have been made yet.');
        } else if (criteria === "all") {
            message = `All bookings(${this.bookingsCount}):\n`;
            this.bookings.forEach(b => message += `${b.passengerName} booked for flight ${b.flightNumber}.\n`);
        } else if (criteria === "cheap") {
            let cheapFlights = this.bookings.filter(b => b.price <= 100);
            if (!cheapFlights.length) {
                message = "No cheap bookings found.";
            } else {
                message = "Cheap bookings:\n";
                cheapFlights.forEach(b => message += `${b.passengerName} booked for flight ${b.flightNumber}.\n`);
            }
        } else if (criteria === "expensive"){
            let expensiveFlights = this.bookings.filter(b => b.price > 100);
            if (!expensiveFlights.length) {
                message = "No expensive bookings found.";
            } else {
                message = "Expensive bookings:\n";
                expensiveFlights.forEach(b => message += `${b.passengerName} booked for flight ${b.flightNumber}.\n`);
            }
        }

        return message.trim();
    }
}


// input 1
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));


// input 2
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));


// input 3
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));


// input 4
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));


// input 5
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
