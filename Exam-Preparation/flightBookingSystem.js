// 100/100 in Judge

class FlightBookingSystem {
    flights = [];
    bookings = [];
    bookingsCount = 0; 

    constructor(agencyName) {
        this.agencyName = agencyName;
    }

    addFlight (flightNumber, destination, departureTime, price) {
        let flight = this.flights.find(fl => fl.flightNumber === flightNumber);
        if (!flight) {
            this.flights.push({flightNumber, destination, departureTime, price});
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        } else {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }
    }

    bookFlight (passengerName, flightNumber) {
        let flight = this.flights.find(fl => fl.flightNumber === flightNumber);
        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            this.bookings.push({passengerName, flightNumber, price: flight.price});
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
    }

    cancelBooking (passengerName, flightNumber) {
        let bookedFlight = this.bookings.find(b => b.passengerName === passengerName && b.flightNumber === b.flightNumber);
        if (!bookedFlight){
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        } else {
            this.bookings = this.bookings.filter(b => b.flightNumber !== flightNumber);
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
    }

    showBookings (criteria) {
        if (!this.bookings.length) {
            throw new Error('No bookings have been made yet.');
        }

        let message = [];
        if (criteria === "all") {
            message.push(`All bookings(${this.bookingsCount}):`);
            this.bookings.forEach(b => message.push(`${b.passengerName} booked for flight ${b.flightNumber}.`));
        } else if (criteria === "cheap") {
            let cheapFlights = this.bookings.filter(b => b.price <= 100); 
            if (!cheapFlights.length) {
                message.push("No cheap bookings found.");
            } else {
                message.push("Cheap bookings:");
                cheapFlights.forEach(b => message.push(`${b.passengerName} booked for flight ${b.flightNumber}.`));
            }
        } else if (criteria === "expensive") {
            let expensiveFlights = this.bookings.filter(b => b.price > 100);
            if (!expensiveFlights) {
                message.push("No expensive bookings found.");
            } else {
                message.push("Expensive bookings:");
                expensiveFlights.forEach(b => message.push(`${b.passengerName} booked for flight ${b.flightNumber}.`));
            }
        }
        return message.join("\n");
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
