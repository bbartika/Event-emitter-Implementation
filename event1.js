let EventEmitter = require("events");
let myEmitter = new EventEmitter();

myEmitter.on('userCreated', (id,name)=>{
    console.log(`A new user ${name} with ID ${id} is created`)
})

myEmitter.on('userCreated',(id,name)=>{
    console.log(`A new user ${name} with ID ${id} is added to the database!`);
})

myEmitter.emit('userCreated', 101, 'john');     

//OUTPUT:
C:\Program Files\nodejs\node.exe .\expressbyBB\event.js
A new user john with ID 101 is created
A new user john with ID 101 is added to the database!
