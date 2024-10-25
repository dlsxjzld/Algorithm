const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
const answer = []
const move = ["D", "S", "L", "R"]


const bfs = (A, B) => {
  const queue = [[A, ""]]
  const check ={[A]:true}
  let index = 0
  while (queue.length > index) {
    const [number, command] = queue[index++]
    if (number === B) {
      return command
    }
    const n1 = (number * 2) % 10000;
    if (!check[n1]) {
      queue.push([n1, command + "D"]);
      check[n1] = true;
    }

    // S
    const n2 = number === 0 ? 9999 : number - 1;
    if (!check[n2]) {
      queue.push([n2, command + "S"]);
      check[n2] = true;
    }

    // L
    const n3 = (number % 1000) * 10 + Math.floor(number / 1000);
    if (!check[n3]) {
      queue.push([n3, command + "L"]);
      check[n3] = true;
    }

    // R
    const n4 = (number % 10) * 1000 + Math.floor(number / 10);
    if (!check[n4]) {
      queue.push([n4, command + "R"]);
      check[n4] = true;
    }
  }
}

for (let tc = 1; tc <= T; tc++) {
  const [A, B] = input[tc].split(" ").map(Number)
  const candidateAnswer = []

  answer.push(bfs(A, B, candidateAnswer))
  
}

console.log(answer.join("\n"))
