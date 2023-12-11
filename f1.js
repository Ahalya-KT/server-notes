//transfering data from text file to js file then transfer from js file to js file

const fs = require("fs");
getdata = () => {
  fs.readFile("data.txt", (err, data) => {
    if (err) throw err;
    console.log("data from external file is---", data.toString());
  });
};
module.exports = {
  getdata,
};
