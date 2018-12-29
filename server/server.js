const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const { generateMessage, generateLocationMessage } = require('./utils/message')
const { isRealString } = require('./utils/validation')
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected')
    
    socket.on('join', (params, callback) => {
        if (!isRealString(params.name) || !isRealString(params.room)) {
            return callback(`Name and room name are required`)
        }

        callback()

        socket.join(params.room)
        socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

        socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} joined`))

    })
    
    socket.on('createMessage', (message, callback) => {
        io.emit('newMessage', generateMessage(message.from, message.text))
        callback()
    })

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    })

    socket.on('disconnect', () => {
        console.log(`Disconnected from user`)
    })
})

server.listen(port, () => {
    console.log(`Server is up on Port ${port}`)
})

