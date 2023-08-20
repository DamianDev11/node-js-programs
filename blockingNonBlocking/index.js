import fs from "fs";

async function geetFile(fileName) {
  let data = fs.promises.readFile(fileName);
  return (await data).toString();
}

// let dataGet = geetFile("async.txt");
let dataGet = fs.readFileSync("async.txt");
console.log("dam1");
console.log("dam2");
console.log("dam3");
console.log(await dataGet.toString());
