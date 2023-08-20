import path from "path";

console.log(path.parse("C:\\Users\\Damian"));
console.log(path.parse("/home/Damian"));

const winDir = path.format({ dir: "\\home\\dam", base: "text.txt" });
const linuxDir = path.format({ dir: "/home/dam", base: "text.txt" });
console.log(winDir);
console.log(linuxDir);
console.log(path.parse(winDir).ext);
