const expect = require('expect')

const { Users } = require('./users')

describe('users', () => {
    let users
    beforeEach(() => {
        users = new Users()
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node course'
        },
        {
            id: '2',
            name: 'Jen',
            room: 'React course'
        },
        {
            id: '3',
            name: 'Julie',
            room: 'Node course'
        }]
    })

    it ('should add a new user', () => {
        const users = new Users()
        const user = { id: '123', name: 'Yi', room:'node-study'}
        users.addUser('123', 'Yi', 'node-study')

        expect(users.users).toEqual([user])
    })

    it ('should remove a user', () => {
        const removeId = '1'
        const removedUser = users.removeUser(removeId)

        expect(removedUser.id).toBe(removeId)
        expect(users.users.length).toBe(2)
    })

    it ('should not remove a user with invalid id', () => {
        const removeId = '4'
        const removedUser = users.removeUser(removeId)

        expect(removedUser).toBeFalsy()
        expect(users.users.length).toBe(3)
    })

    it ('should find a user', () => {
        const userId = '2'
        const user = users.getUser(userId)

        expect(user.id).toBe(userId)
    })

    it ('should not find a user with invalid id', () => {
        const userId = '4'
        const user = users.getUser(userId)

        expect(user).toBeFalsy()
    })

    it ('should return names for node course', () => {  
        const userList = users.getUserList('Node course')

        expect(userList).toEqual(['Mike', 'Julie'])
    })

    it ('should return names for react course', () => {  
        const userList = users.getUserList('React course')

        expect(userList).toEqual(['Jen'])
    })
})