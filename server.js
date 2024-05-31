const io = require('socket.io')(3000, {
    cors: {
        origin: true
    }


})

io.on('connection', socket)