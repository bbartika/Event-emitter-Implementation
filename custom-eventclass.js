const EventEmitter = require('events');

class Car extends EventEmitter {
    start() {
        console.log('Car is starting...');
        this.emit('start');
    }

    stop() {
        console.log('Car is stopping...');
        this.emit('stop');
    }
}

const myCar = new Car();

// Listener for 'start' event
myCar.on('start', () => {
    console.log('The car has started');
});

// Listener for 'stop' event
myCar.on('stop', () => {
    console.log('The car has stopped');
});

// Triggering events
myCar.start();
myCar.stop();
