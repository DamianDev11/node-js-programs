export class Subscriber {
  constructor(myEmitter) {
    myEmitter.on("Greetings", (greeting) => {
      console.log(greeting);
    });
  }
}
