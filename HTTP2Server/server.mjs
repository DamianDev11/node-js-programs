import http2 from "http2";
import { Stream } from "stream";

const server = http2.createServer();

server.on("error", (err) => {
  console.log(err);
});

server.on("stream", (Stream, Headers) => {
  Stream.respond({
    ":status": 200,
  });
  Stream.write("Hello!");
  Stream.end();
});

server.listen(8000);
