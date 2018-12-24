const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (serverSocket) => {
    console.log('New user connected')

    serverSocket.on('disconnect', () => {
        console.log(`Disconnected from user`)
    })
})

server.listen(port, () => {
    console.log(`Server is up on Port ${port}`)
})

