import fs from "fs";

let stream = fs.createReadStream("text.txt");

stream.on("data", function (data) {
  let chunk = data.toString();
  console.log(chunk);
});

let stream1 = fs.createWriteStream("text2.txt");

stream1.write("Line1\n");
stream1.write("Line2\n");
stream1.write("Line3\n");
stream1.write("Line4\n");
