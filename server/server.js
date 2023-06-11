const WebSocket = require('ws');

const server = new WebSocket.Server({host: '127.0.0.1', port: 4000});

server.on('connection', (client) => {
    console.log('Connected!');
    client.on('message', (message) => {
        console.log(JSON.parse(message));
    })
})

console.log('Started! on', server.path);