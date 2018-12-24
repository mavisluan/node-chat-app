const socket = io()

socket.on('connect', function () {
    console.log('Connected to server')

    socket.emit('createMessage', {
        from: 'Jen',
        text: 'It is cloudy in SF too'
    })
})

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
    console.log('New message from server:', message)
})
