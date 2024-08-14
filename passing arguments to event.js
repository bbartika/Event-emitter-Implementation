const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Listener with a parameter
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emitting the 'greet' event with an argument
myEmitter.emit('greet', 'Alice');
