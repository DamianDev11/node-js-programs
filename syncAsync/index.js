import { EventEmitter } from "events";

const myEventEmitter = new EventEmitter();

function notifyConnection(ip) {
  console.log(ip + " connected to server");
}

async function process(ip) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(ip + " has connected");
}

myEventEmitter.on("connection", notifyConnection);
myEventEmitter.on("connection", process);

myEventEmitter.emit("connection", "127.0.0.1"); //FIFO
myEventEmitter.emit("connection", "192.168.0.1");
