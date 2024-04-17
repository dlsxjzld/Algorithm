const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)

const queue = [n]
let index = 0
const distance = Array.from({ length: 200001 }, () => -1)




let cnt = 0
distance[n] = 0
while (queue.length > index) {
  const curr = queue[index++]

  if(curr === k){
    cnt +=1
    continue
  }

  for (let next of [2 * curr, curr - 1, curr + 1]) {
    if (next >= 0 && next <= 100000) {
      if (distance[next] === -1 || distance[next] === distance[curr] + 1) {
        distance[next] = distance[curr] + 1
        queue.push(next)
      } 
    }
  }
}
console.log(distance[k])
console.log(cnt)
// 5 10 9 18 17
// 5 4 8 16 17