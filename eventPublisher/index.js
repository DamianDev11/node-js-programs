import { Publisher, Subscriber } from "./PubSub.js";

const publisher = new Publisher();
const subscriber = new Subscriber("event1");
const subscriber2 = new Subscriber("event2");

publisher.publishReminder("event1", "event is starting soon");
publisher.publishReminder("event2", "event has started!");
