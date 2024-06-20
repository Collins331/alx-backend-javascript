const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function(){
  it('should return 4 when input is 1, 3', function(){
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should return 5 when input is 1, 3.7', function(){
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should return 5 when input is 1.2, 3.7', function(){
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6 when input is 1.5, 3.7', function(){
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
})
