import http from "http";

import url from "url";

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    console.log(q.query);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello!");
    res.end();
  })
  .listen(80);
