const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});



// Add your tests here

//testing tan 
console.log("Testing tan ..../n")
assert.strictEqual(0,tan(0));
console.log("Testing tan of 0 is correct");