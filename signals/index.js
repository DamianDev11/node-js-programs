import { read } from "fs";
import readline from "readline";

let r1 = readline.createInterface(process.stdin, process.stdout);

r1.on("SIGINT", () => {
  r1.question("exit (y or n)", (input) => {
    if (input === "y") {
      r1.pause();
    }
  });
});
