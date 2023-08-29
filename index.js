const fs = require("fs");
const path = require("path");

console.log("Loguje przed odczytaniem");

fs.readFile(path.join(__dirname, "data", "lorem.txt"), function () {
  console.log("Odczytałem plik");
});
console.log("Loguje po odczytaniu");
