import net from "net";

let sockets = [];

function Broadcast(data) {
  sockets.forEach((socket) => {
    socket.write(data);
  });
}

const server = net.createServer(function (socket) {
  sockets.push(socket);

  socket.on("data", function (data) {
    Broadcast(data);
  });

  socket.on("error", function (err) {
    console.log(err);
  });
});

server.listen(8080, function () {
  console.log("server is listening");
});
