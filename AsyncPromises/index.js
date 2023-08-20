//import { rejects } from "assert";
import fs from "fs";

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });
};

getFile("async.txt")
  .catch((err) => console.log(err))
  .then((data) => console.log(data));
