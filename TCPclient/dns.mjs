import dns from "dns";

console.log(dns.getServers("www.google.com"));

dns.resolveMx("google.com", function (err, address) {
  console.log(address);
});

dns.resolve6("google.com", function (err, address) {
  console.log(address);
});
