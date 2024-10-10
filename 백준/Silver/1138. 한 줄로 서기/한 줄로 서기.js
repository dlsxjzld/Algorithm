const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 사람들은 자기보다 큰 사람이 왼쪽에 몇 명 있었는지만을 기억한다.
// N명의 사람이 있고, 사람들의 키는 1부터 N까지 모두 다르다.
const n = Number(input[0])
const height = input[1].split(" ").map(Number)
let str = [n.toString()]
for (let i = n - 2; i >= 0; i--) {
  if(height[i] == 0){
    str = [(i+1).toString(), ...str]
  }else{
    str = [...str.slice(0,height[i]), (i+1).toString(), ...str.slice(height[i])]
  }
}

console.log(str.join(' '))