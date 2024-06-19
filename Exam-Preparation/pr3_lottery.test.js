import { expect } from "chai";
import { lottery } from "../Lottery.js";

describe("Tests", () => {
    describe("byuLotteryTicket", () => {
        it("valid input", () => {
            expect(lottery.buyLotteryTicket(3, 2, true)).to.equal("You bought 2 tickets for 6$.");
            expect(lottery.buyLotteryTicket(1, 1, true)).to.equal("You bought 1 tickets for 1$.");
        });
        it("type of input should be valid", () => {
            expect(() => lottery.buyLotteryTicket(1, 2, 3)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket("1", "2", 3)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(true, "2", [])).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(true, "2", {})).to.throw("Invalid input!");
        });
        it("value of buy is false", () => {
            expect(() => lottery.buyLotteryTicket(2, 1, false)).to.throw("Unable to buy lottery ticket!");
            expect(() => lottery.buyLotteryTicket("", {}, false)).to.throw("Unable to buy lottery ticket!");
        })
    });

    describe("checkTicket", () => {
        // it("valid ticketNumber and luckyNumbers length", () => {
        //     expect(lottery.checkTicket([1,2,3,4,5,6], [5,6,7,8,9,22])).to.be.true;
        // });
        it("invalid input types", () => {
            expect(() => lottery.checkTicket("", "")).to.throw("Invalid input!");
            expect(() => lottery.checkTicket(1, 5)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket({}, 5)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket(["1","2"], [true, 3])).to.throw("Invalid input!");
        });
        it("invalid ticketNumber and luckyNumbers", () => {
            expect(() => lottery.checkTicket([1,2,3,4,5,6], [5,6])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1,2,3], [5,6,7, 4, 3, 8, 9])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1,2,3], [5,6,7, 8, 9, 4])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([], [])).to.throw("Invalid input!");
        });
        it("winning", () => {
            expect(lottery.checkTicket([ 1, 2, 3, 4, 5, 6 ], [ 1, 2, 3, 4, 5, 6 ])).to.equal('You win the JACKPOT!!!');
            expect(lottery.checkTicket([1,2,3,4,5,6], [2,5,6,7,8,9])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1,2,3,4,5,6], [1,2,3,4,5,9])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1,2,3,4,5,6], [1,2,3,7,8,9])).to.equal('Congratulations you win, check your reward!');
        })
    });

    describe("secondChance", () => {
        it("invalid input", () => {
            expect(() => lottery.secondChance("5", 5)).to.throw("Invalid input!");
            expect(() => lottery.secondChance(true, "5")).to.throw("Invalid input!");
            expect(() => lottery.secondChance([5], true)).to.throw("Invalid input!");
        });
        it("valid input", () => {
            expect(lottery.secondChance(5, [2, 3, 4])).to.equal('Sorry, your ticket didn\'t win!');
            expect(lottery.secondChance(5, [2, 5, 4])).to.equal('You win our second chance prize!');
        });
    });
});
