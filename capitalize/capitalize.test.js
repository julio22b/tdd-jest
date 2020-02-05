const capitalize = require('./capitalize');

test('capitalizes first letter', () => {
    expect(capitalize('test')).toBe('Test');
});
