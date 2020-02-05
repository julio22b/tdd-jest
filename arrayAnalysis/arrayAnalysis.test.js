const arrayAnalysis = require('./arrayAnalysis');

const object = arrayAnalysis([1, 8, 3, 4, 2, 6]);

test('gets the average', () => {
    expect(object.average).toBe(4);
});

test('gets the min', () => {
    expect(object.min).toBe(1);
});

test('gets the max', () => {
    expect(object.max).toBe(8);
});

test('gets the length', () => {
    expect(object.length).toBe(6);
});
