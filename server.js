const http = require("http");

http
  .createServer((req, res) => {
    res.write("server started");

    //http request call
    res.end();
  })
  .listen(8080, () => {
    console.log("http server started");
  });
