const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const numbers = input[0].split(" ")
// 시계수 구하기

const getTimeNum = (array) => {
  const tmp = new Set()
  for (let i = 0; i < 4; i += 1) {
    const target = array[i] + array[(i + 1) % 4] + array[(i + 2) % 4] + array[(i + 3) % 4]
    tmp.add(Number(target))
  }
  return Array.from(tmp).sort((a,b)=>a-b)[0]
}

let target = getTimeNum(numbers)
const allNum = new Set()

for(let start=1111;start<=9999;start+=1){
  if(start.toString().includes('0')) continue
  allNum.add(getTimeNum(start.toString().split('')))
}
console.log(Array.from(allNum).indexOf(target)+1)