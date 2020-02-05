const calculator = require('./calculator');

test('it adds', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('it subtracts', () => {
    expect(calculator.substract(2, 3)).toBe(-1);
});

test('it multiplies', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test('it divides', () => {
    expect(calculator.divide(4, 2)).toBe(2);
});
