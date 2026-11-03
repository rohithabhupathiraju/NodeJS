// Import modules
const http = require("http");

const os = require("os");

const path = require("path");

const EventEmitter = require("events");


// OS module
console.log("Platform:", os.platform());

console.log("Free Memory:", os.freemem());


// Path module
console.log("File Name:", path.basename(__filename));


// Event module
const event = new EventEmitter();

event.on("welcome", () => {

    console.log("Welcome Event triggered!");

});


// HTTP module
const server = http.createServer((req, res) => {

    event.emit("welcome");

    res.end("Hello! Welcome to Node.js Server");

});


// Start server
server.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});