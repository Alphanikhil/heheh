import { WebSocketServer } from 'ws';

const initializeWebSocket = (server) => {
    const wss = new WebSocketServer({ server });

    wss.on('connection', (ws) => {
        console.log('Client connected');

        ws.on('close', () => {
            console.log('Client disconnected');
        });

        ws.on('message', (message) => {
            console.log('Received message:', message);
            // Echo the message back to the client
            ws.send(message);
        });
    });

    console.log('WebSocket server is running');
};

export default initializeWebSocket;
