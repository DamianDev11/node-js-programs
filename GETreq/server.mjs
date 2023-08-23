import http from "http";

import url from "url";

http
  .createServer(function (req, res) {
    if (req.method === "GET") {
      res.write("Get request received");
    } else if (req.method === "POST") {
      let body = "";

      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        body = JSON.parse(body);
        console.log(body);
      });
    } else {
      res.write("Other request received");
    }

    res.end();
  })
  .listen(80);
