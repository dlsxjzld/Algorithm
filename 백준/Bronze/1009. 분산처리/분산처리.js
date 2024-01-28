const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])

for (let i = 1; i < T + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number)

  let pow = 1
  for(let j=0;j<b;j++){
    pow = (pow*a )%10

  }

   pow === 0 ? console.log(10) : console.log(pow)
}
