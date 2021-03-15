class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  //декоратор, накладівает новый функционал
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url;
  };

  return server;
}

const s1 = aws(new Server("12.34.56.78", 8080));

console.log(s1);
console.log(s1.awsInfo());

function azure(server) {
  //декоратор, накладівает новый функционал
  server.isAzure = true;
  server.port += 500;
  return server;
}

const s2 = azure(new Server("192.168.0.5", 3000));
console.log(s2);
console.log(s2.url);
