const { fork } = require('child_process');
const { EventEmitter } = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Fork the child process
const child = fork('child.js');

// Send an event to the child process when a certain event is emitted
eventEmitter.on('messageFromParent', (message) => {
    child.send({ event: 'messageFromParent', data: message });
});

// Listen for events from the child process
child.on('message', (message) => {
    if (message.event === 'messageFromChild') {
        console.log('Received from child:', message.data);
        // Emit an event back to the child process
        eventEmitter.emit('messageFromParent', 'Hello back from parent!');
    }
});

// Emit an initial event to start the communication
eventEmitter.emit('messageFromParent', 'Hello from parent!');
