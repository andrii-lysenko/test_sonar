const { badCondition } = require(".")

describe('test', () => {
    it('test1', () => {
        expect(badCondition(2)).toBe(true);
    });
})