const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe("Calculate Number", () => {
  describe("Calculate sum of two floats", () => {
    it('Returns 6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
  describe("Calculate subtraction of two floats", () => {
    it('Returns -4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe("Calculate division of two floats", () => {
    it('Returns 0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });
  describe("Calculate division of a number with a 0", () => {
    it('Returns Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
  describe("Calculate division of two numbers", () => {
    it('Returns 5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.8, 1.8), 5);
    });
  });
  describe("Calculate subtraction of two floats", () => {
    it('Returns 7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 11.2, 4.4), 7);
    });
  });
})
