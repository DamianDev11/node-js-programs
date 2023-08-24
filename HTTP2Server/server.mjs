import http2 from "http2";
import { Stream } from "stream";

const HelloHandler = (Stream, Headers) => {
  console.log({ Headers });
  Stream.respond({
    ":status": 200,
  });
  Stream.end("Hello");
};

const notFoundHandler = (Stream, Headers) => {
  Stream.respond({
    ":status": 404,
  });
  Stream.end("Path not found");
};
const server = http2.createServer();

const router = (Stream, Headers) => {
  const path = Headers[":path"];
  const method = Headers[":method"];

  let handler;

  if (path === "/" && method === "GET") {
    handler = HelloHandler;
  } else {
    handler = notFoundHandler;
  }

  handler(Stream, Headers);
};

server.on("Stream", router);
server.listen(8000);
