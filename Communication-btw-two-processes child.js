const { EventEmitter } = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Listen for events from the parent process
process.on('message', (message) => {
    if (message.event === 'messageFromParent') {
        console.log('Received from parent:', message.data);
        // Emit an event back to the parent process
        eventEmitter.emit('messageFromChild', 'Hello from child!');
    }
});

// Send an event to the parent process when a certain event is emitted
eventEmitter.on('messageFromChild', (message) => {
    process.send({ event: 'messageFromChild', data: message });
});
