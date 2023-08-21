import process from "process";

process.on("exit", (code) => {
  console.log(code);
});

console.log(process.argv[2]);
