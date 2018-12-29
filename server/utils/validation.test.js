const expect = require('expect')
const { isRealString } = require('./validation')

describe('Validate strings', () => {
    it ('should reject non-string values', () => {
        expect(isRealString(360)).toBe(false)
    })

    it ('should reject strings with only spaces', () => {
        expect(isRealString('     ')).toBe(false)
    })

    it ('should allow strings with non-space characters', () => {
        expect(isRealString('name')).toBe(true)
    })
})