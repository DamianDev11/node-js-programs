import fs from "fs";

export function writeLogLine(filename, line) {
  fs.writeFile(filename, line, (err) => {
    if (err) {
      throw err;
    }
  });
}

export function readLogFile(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  });
}

export function appendLogLine(filename, line) {
  fs.appendFile(filename, line, function (err) {
    if (err) {
      throw err;
    }
  });
}
