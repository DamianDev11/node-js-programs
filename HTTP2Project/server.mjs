import http2 from "http2";

const book = [];

const postBook = (stream, headers) => {
  let body = "";

  stream.on("data", function (data) {
    body += data;
  });

  stream.on("end", function () {
    body = JSON.parse(body);
    console.log(body.title);
  });
  book[body.title] = body.author;
  stream.respond({
    ":status": 200,
  });
  stream.end(book[body.title]);
};

const notFoundHandler = (stream, headers) => {
  stream.respond({
    ":status": 404,
  });
  stream.end("Path not found");
};

const server = http2.createServer();

const router = (stream, headers) => {
  const path = headers[":path"];
  const method = headers[":method"];
  let handler;

  if (path === "/" && method === "POST") {
    handler = postBook;
  } else {
    handler = notFoundHandler;
  }

  handler(stream, headers);
};

server.on("stream", router);
server.listen(8000);
