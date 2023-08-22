import net from "net";

const client = net.connect(
  {
    port: 8080,
  },
  function (socket) {
    //  sending data to server
    client.write("Hello Server!");
  }
);

client.on("data", function (data) {
  console.log("Received" + data.toString());
});
