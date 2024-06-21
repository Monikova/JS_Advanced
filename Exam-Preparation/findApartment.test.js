import { expect } from "chai";
import { findNewApartment } from "../findApartment.js";

describe ('Tests', () => {
    describe ('isGoodLocation', () => {
        it('invalid input', () => {
            expect(() => findNewApartment.isGoodLocation(["Sofia"], "true")).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation(true, "true")).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation(true, [false])).to.throw('Invalid input');
            expect(() => findNewApartment.isGoodLocation(5, 'false')).to.throw('Invalid input!');
        });
        it('location not suitable', () => {
            expect(findNewApartment.isGoodLocation('Burgas', true)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Berlin', true)).to.equal('This location is not suitable for you.');
        });
        it('input conditions are met', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        });

        it('public transport false', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        });
    });

    describe ('isLargeEnough', () => {
        it ('invalid input', () => {
            expect(() => findNewApartment.isLargeEnough([], 5)).to.throw('Invalid input!');
            expect(() =>findNewApartment.isLargeEnough('40, 50, 60', 5)).to.throw('Invalid input!');
            expect(() =>findNewApartment.isLargeEnough(40, "5")).to.throw('Invalid input!');
        });
        it ('valid result', () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal('50, 60');
        });
    });

    describe ('isItAffordable', () => {
        it ('budget enough to buy the apartment', () => {
            expect(findNewApartment.isItAffordable(50000, 55000)).to.equal('You can afford this home!');
        });
        it ('budget not enough to buy the apartment', () => {
            expect(findNewApartment.isItAffordable(55000, 50000)).to.equal('You don\'t have enough money for this house!');
        });
        it ('invalid price and budget', () => {
            expect(() => findNewApartment.isItAffordable("50000", "50000")).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable([50000], [50000])).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(0, 0)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(100000, -100000)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(-100000, 100000)).to.throw('Invalid input!');
        });
    });
});