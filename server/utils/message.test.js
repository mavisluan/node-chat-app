const expect = require('expect')
const { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', () => {
    it ('should generate a correct message object', () => {   
        const from = 'Yi'
        const text = 'some message'
        const message = generateMessage(from, text)

        expect(message).toMatchObject({ from, text })
        expect(typeof message.createdAt).toBe('number')
    })
})

describe('generateLocationMessage', () => {
    it('should generate a correct location object', () => {
        const from = 'Yi'
        const latitude = 37
        const longitude = -122
        const url = `https://www.google.com/maps?q=37,-122`
        const message = generateLocationMessage(from, latitude, longitude)
        console.log(message)
        expect(message).toMatchObject({ from, url })
        expect(typeof message.createdAt).toBe('number')
    })
})