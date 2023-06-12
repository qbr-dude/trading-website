const WebSocket = require('ws');
const server = new WebSocket.Server({host: '127.0.0.1', port: 4000});

let bid = 1;
let offer = 100;

const onmessage = (client, message) => {
    const parsed = JSON.parse(message);
    console.log(parsed);
    if (parsed.messageType === 'PlaceOrder') {
        client.send(JSON.stringify({
            messageType: 'MarketDataUpdate',
            message: {
                subscriptionId: '1',
                instrument: parsed.message.instrument,
                quotes: [{
                    bid: bid++,
                    offer: offer++,
                    minAmount: 1000,
                    maxAmount: 1000,
                }],
            }
        }))
    } else if (parsed.messageType === 'SubscribeMarketData') {
        client.send(JSON.stringify({
            messageType: 'SuccessInfo',
            message: {
                subscriptionId: '1',
            }
        }))
    }
}

const broadcast = (msg) => {
    server.clients.forEach(client => {
        onmessage(client, msg);
    })
}

server.on('connection', (connection) => {
    console.log('Connected! connections - ', server.clients.size);
    connection.on('message', (msg) => {
        broadcast(msg);
    })
})

console.log('Started!');