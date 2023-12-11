const eventEmmiter = require("events");

const sayhi = new eventEmmiter();

sayhi.on("onHai", () => {
  console.log("hai alll.................");
});
sayhi.emit("onhaii");
