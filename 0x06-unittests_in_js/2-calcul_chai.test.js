var chai = require('chai');
var expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe("Calculate Number", () => {
  describe("Calculate sum of two floats", () => {
    it('Returns 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });
  describe("Calculate subtraction of two floats", () => {
    it('Returns -4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });
  describe("Calculate division of two floats", () => {
    it('Returns 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
  describe("Calculate division of a number with a 0", () => {
    it('Returns Error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
  describe("Calculate division of two numbers", () => {
    it('Returns 5', () => {
      expect(calculateNumber('DIVIDE', 9.8, 1.8)).to.equal(5);
    });
  });
  describe("Calculate subtraction of two floats", () => {
    it('Returns 7', () => {
      expect(calculateNumber('SUBTRACT', 11.2, 4.4)).to.equal(7);
    });
  });
});
