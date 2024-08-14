const EventEmitter = require("events");
const ipl = new EventEmitter();

ipl.on('won',()=>{
    console.log("KKR won IPL 2024 Final");
});

ipl.on('won', ()=> {
    console.log("SRH could have won the match");
});

ipl.on('loss',()=>{
    console.log("SRH loss the IPL final");
})

ipl.emit('won');

