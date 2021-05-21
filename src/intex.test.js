const { hello } = require(".")

describe('test', () => {
    it('one', () => {
        expect(hello()).toBe(true);
    })
})