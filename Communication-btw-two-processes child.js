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

    
Parent Process:
        The parent process forks the child process and creates an EventEmitter instance.
        It listens for the messageFromParent event and sends a message to the child process whenever this event is emitted.
        It also listens for messages from the child process and emits events in response.

    Child Process:
        The child process listens for messages from the parent process.
        Upon receiving a message, it emits a messageFromChild event.
        It then sends a message back to the parent process when the messageFromChild event is emitted.

Execution:

    Run the parent.js script, and it will fork the child.js process.
    The communication between the parent and child process will be facilitated using EventEmitter and Node.js's built-in inter-process communication (IPC) mechanisms.

This setup allows you to simulate inter-process communication using EventEmitter, with the parent process emitting events that the child process responds to, and vice versa.
