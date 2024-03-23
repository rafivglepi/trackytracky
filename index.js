// to-do:
// wrap everything in a onload() function
// exec() thingy
// actual useful tracking with ids that work
// test if google hates me and if it wants to kill me

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index'); // assuming you have an EJS template named index.ejs
});

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // // Handle mouse movements
    // socket.on('mouseMove', (data) => {
    //     console.log('Mouse position:', data);
    //     // Broadcast the mouse position to all connected clients except the sender
    //     socket.broadcast.emit('mousePosition', data);
    // });

    // // Handle mouse clicks
    // socket.on('mouseClick', (data) => {
    //     console.log('Mouse click:', data);
    //     // Broadcast the mouse click to all connected clients except the sender
    //     socket.broadcast.emit('mouseClicked', data);
    // });

    // // Handle scroll events
    // socket.on('scroll', (data) => {
    //     console.log('Scroll position:', data);
    //     // Broadcast the scroll position to all connected clients except the sender
    //     socket.broadcast.emit('scrollPosition', data);
    // });

    // // Handle touch movements
    // socket.on('touchMove', (data) => {
    //     console.log('Touch position:', data);
    //     // Broadcast the touch position to all connected clients except the sender
    //     socket.broadcast.emit('touchPosition', data);
    // });

    // // Handle touch clicks
    // socket.on('touchClick', (data) => {
    //     console.log('Touch click:', data);
    //     // Broadcast the touch click to all connected clients except the sender
    //     socket.broadcast.emit('touchClicked', data);
    // });

    // Handle incoming socket messages
    socket.onAny((eventName, data) => {
        console.log(`${eventName}:`, data);
    });

    // Handle disconnections
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
