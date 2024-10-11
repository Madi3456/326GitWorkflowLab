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
describe('Calculator Calculation Functions', function() {
    const res1 = calculator.calculateSquareRoot(100);
    it('should return 10', function() {
        assert.strictEqual(res1, 10);
    });
    const res2 = calculator.calculateSquareRoot(1);
    it('should return 1', function() {
        assert.strictEqual(res1, 1);
    });
});