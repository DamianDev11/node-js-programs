import readline from "readline";

let r1 = readline.createInterface(process.stdin, process.stdout);

// r1.question("what is your", (name) => {
//   console.log("My name is " + name);
//   r1.close();
// });

r1.question("what is your? ", (name) => {
  r1.write("My name is " + name);
  r1.close();
});
