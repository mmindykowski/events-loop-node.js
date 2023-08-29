const fs = require("fs");
const path = require("path");




console.log("Loguje przed odczytaniem");

console.time("Czas trwania: ");

fs.readFile(path.join(__dirname, "data", "lorem.txt"), function () {
  console.log("Odczytałem plik");
  console.timeEnd("Czas trwania: ");
});
console.log("Loguje po odczytaniu");
