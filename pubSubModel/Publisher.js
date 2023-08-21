export class Publisher {
  constructor() {}
  publishMessage(myEmitter) {
    myEmitter.emit("Greetings", "My friend");
  }
}
