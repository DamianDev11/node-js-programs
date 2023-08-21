import { EventEmitter } from "events";

const myEventEmitter = new EventEmitter();

function notifyConnection(ip) {
  console.log(ip + " connected to server");
}

myEventEmitter.on("connection", notifyConnection);

myEventEmitter.emit("connection", "127.0.0.1");
