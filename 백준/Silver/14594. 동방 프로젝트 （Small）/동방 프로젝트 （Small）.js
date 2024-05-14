const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const m = Number(input[1])
const destroyWall = input.slice(2).map((row) => row.split(" ").map(Number)) ?? [
  0, 0,
]

const visited = Array.from({length: n + 1}, () => false);
    
for(const [x, y] of destroyWall) {
    for(let i = x ; i < y ; i++) {
        visited[i] = true;
    }    
}

const wall = visited.slice(1).filter(visit => visit === false).length;


console.log(wall)
