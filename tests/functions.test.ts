import { expect } from "chai";
import functions from "../src";

describe("Functions test", function() {
    it("approach test", function() {
        expect(functions.approach(2, 8, 7)).to.equal(8);
        expect(functions.approach(11, 16, 3)).to.equal(14);
        expect(functions.approach(66, 89, 20)).to.equal(86);
    });
    it("area test", function() {
        expect(functions.area(3, 4, 5)).to.equal(6);
        expect(functions.area(5, 12, 13)).to.equal(30);
        expect(functions.area(12, 16, 20)).to.equal(96);
    });
    it("average test", function() {
        expect(functions.average(3, 4, 5)).to.equal(4);
        expect(functions.average(2, 13, 5, 12)).to.equal(8);
        expect(functions.average(8, 4, 14, 7, 12, 6, 9, 5, 7)).to.equal(8);
    });
    it("combination test", function() {
        expect(functions.combination(5, 2)).to.equal(10);
        expect(functions.combination(6, 3)).to.equal(20);
        expect(functions.combination(8, 5)).to.equal(56);
    });
    it("distance test", function() {
        expect(functions.distance(0, 0, 5, 12)).to.equal(13);
        expect(functions.distance(3, 5, 6, 9)).to.equal(5);
        expect(functions.distance(12, 45, 19, 69)).to.equal(25);
    });
    it("factorial test", function() {
        expect(functions.factorial(171)).to.equal(Infinity);
        expect(functions.factorial(170)).to.equal(7.257415615307994e+306);
        expect(functions.factorial(3)).to.equal(6);
        expect(functions.factorial(4)).to.equal(24);
        expect(functions.factorial(5)).to.equal(120);
    });
    it("gcd test", function() {
        expect(functions.gcd(1, 2)).to.equal(1);
        expect(functions.gcd(2, 3)).to.equal(1);
        expect(functions.gcd(3, 6)).to.equal(3);
        expect(functions.gcd(4, 8)).to.equal(4);
        expect(functions.gcd(2, 4)).to.equal(2);
        expect(functions.gcd(34, 85)).to.equal(17);
    });
    it("getAge test", function() {
        expect(functions.getAge("1881-5-19")).to.equal(139);
        expect(functions.getAge("2002-3-21")).to.equal(18);
        expect(functions.getAge("2004-9-20")).to.equal(15);
    });
    it("isEven test", function() {
        expect(functions.isEven(1)).to.false;
        expect(functions.isEven(2)).to.true;
        expect(functions.isEven(67)).to.false;
        expect(functions.isEven(44)).to.true;
    });
    it("isOdd test", function() {
        expect(functions.isOdd(1)).to.true;
        expect(functions.isOdd(2)).to.false;
        expect(functions.isOdd(67)).to.true;
        expect(functions.isOdd(44)).to.false;
    });
    it("lcm test", function() {
        expect(functions.lcm(1, 2)).to.equal(2);
        expect(functions.lcm(2, 3)).to.equal(6);
        expect(functions.lcm(3, 6)).to.equal(6);
        expect(functions.lcm(4, 8)).to.equal(8);
        expect(functions.lcm(2, 4)).to.equal(4);
        expect(functions.lcm(34, 85)).to.equal(170);
    });
    it("lerp test", function() {
        expect(functions.lerp(5, 15, 0)).to.equal(5);
        expect(functions.lerp(5, 15, 1)).to.equal(15);
        expect(functions.lerp(5, 15, .5)).to.equal(10);
        expect(functions.lerp(5, 15, .25)).to.equal(7.5);
        expect(functions.lerp(5, 15, .75)).to.equal(12.5);
    });
    it("maxAdd test", function() {
        expect(functions.maxAdd(5, 15, 21)).to.equal(20);
        expect(functions.maxAdd(5, 15, 20)).to.equal(20);
        expect(functions.maxAdd(5, 15, 19)).to.equal(19);
        expect(functions.maxAdd(5, 15, 15)).to.equal(15);
        expect(functions.maxAdd(1, 1, 1)).to.equal(1);
        expect(functions.maxAdd(4, 3, 6)).to.equal(6);
        expect(functions.maxAdd(4, 3, 8)).to.equal(7);
    });
    it("minSub test", function() {
        expect(functions.minSub(15, 5, 10)).to.equal(10);
        expect(functions.minSub(15, 5, 11)).to.equal(11);
        expect(functions.minSub(15, 5, 9)).to.equal(10);
        expect(functions.minSub(15, 5, 15)).to.equal(15);
        expect(functions.minSub(1, 1, 1)).to.equal(1);
        expect(functions.minSub(1, 1, 0)).to.equal(0);
        expect(functions.minSub(4, 2, 1)).to.equal(2);
    });
    it("permutations test", function() {
        expect(functions.permutations(4, 3)).to.equal(24);
        expect(functions.permutations(5, 2)).to.equal(20);
        expect(functions.permutations(12, 5)).to.equal(95040);
    });
    it("pi test", function() {
        expect(functions.pi(1)).to.equal(3.1);
        expect(functions.pi(2)).to.equal(3.14);
        expect(functions.pi(3)).to.equal(3.141);
        expect(functions.pi(7)).to.equal(3.1415926);
        expect(functions.pi(15)).to.equal(3.141592653589793);
        expect(functions.pi(20)).to.equal(3.141592653589793);
        expect(functions.pi(30)).to.equal(3.141592653589793);
    });
    it("randomArbitrary test", function() {
        expect(functions.randomArbitrary(3, 5)).greaterThan(2).lessThan(6);
        expect(functions.randomArbitrary(7, 9)).greaterThan(6).lessThan(10);
        expect(functions.randomArbitrary(25, 78)).greaterThan(24).lessThan(79);
        expect(functions.randomArbitrary(14, 24)).greaterThan(13).lessThan(25);
    });
    it("randomInt test", function() {
        expect(functions.randomInt(3)).greaterThan(-1).lessThan(4);
        expect(functions.randomInt(7)).greaterThan(-1).lessThan(8);
        expect(functions.randomInt(25)).greaterThan(-1).lessThan(26);
        expect(functions.randomInt(14)).greaterThan(-1).lessThan(15);
    });
    it("romanize test", function() {
        expect(functions.romanize(3)).to.equal("III");
        expect(functions.romanize(13)).to.equal("XIII");
        expect(functions.romanize(154)).to.equal("CLIV");
    });
    it("toHumanizeString test", function() {
        expect(functions.toHumanizeString(3)).to.equal("3");
        expect(functions.toHumanizeString(13)).to.equal("13");
        expect(functions.toHumanizeString(154)).to.equal("154");
        expect(functions.toHumanizeString(1154)).to.equal("1.154");
        expect(functions.toHumanizeString(23432154)).to.equal("23.432.154");
    });
    it("unRomanize test", function() {
        expect(functions.unRomanize("III")).to.equal(3);
        expect(functions.unRomanize("XIII")).to.equal(13);
        expect(functions.unRomanize("CLIV")).to.equal(154);
    });
});