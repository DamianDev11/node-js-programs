import { error } from "console";
import net from "net";
const server = net.createServer(function (socket) {
  socket.write("connection is made"); //sending data to client

  socket.on("data", function (data) {
    console.log("Received: " + data.toString()); //receiving data from client
  });

  socket.on("error", function (err) {
    console.error(err);
  });

  socket.on("close", function () {
    console.log("Connection close");
  });
});

server.listen(8080, function () {
  console.log("server is listerning");
});
