const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Adding multiple listeners to the same event
for (let i = 0; i < 12; i++) {
    myEmitter.on('test', () => {
        console.log('Listener', i);
    });
}

// Emit the event (this will trigger a memory leak warning)
myEmitter.emit('test');

// Prevent memory leak warning by increasing the listener limit
myEmitter.setMaxListeners(15);

