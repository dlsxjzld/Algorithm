const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let street = input[1]

while (street.includes("EE")) {
  street = street.replace("EE", "E")
}
while (street.includes("WW")) {
  street = street.replace("WW", "W")
}
while (street.includes("EW")) {
  street = street.replace("EW", "P")
}
console.log(street.length)
