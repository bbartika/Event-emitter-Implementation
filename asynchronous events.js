const EventEmitter = require('events');
const fs = require('fs');
const myEmitter = new EventEmitter();

// Listener for 'readFile' event
myEmitter.on('readFile', (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);
        myEmitter.emit('fileReadComplete');
    });
});

// Listener for 'fileReadComplete' event
myEmitter.on('fileReadComplete', () => {
    console.log('File reading operation completed');
});

// Emitting the 'readFile' event
myEmitter.emit('readFile', './example.txt');
