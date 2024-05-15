const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const m = Number(input[1])
const destroyWall = input.slice(2).map((row) => row.split(" ").map(Number))

const wallList = Array(n + 1).fill(false)

if (m === 0) {
  console.log(n)
  return
}

// 내림차순 정렬
destroyWall.sort((a, b) => {
    if(a[0] === b[0]){
        return b[1]-a[1]
    }
    return b[0] - a[0]
})

const check = [destroyWall.pop()]


while (destroyWall.length > 0) {
  const [start, end] = check.pop()
  const [start2, end2] = destroyWall.pop()

  if (start2 <= end) {
      check.push([start, Math.max(end, end2)])
    }
    else{
      check.push([start,end])
      check.push([start2,end2])
    }
  
}

for (let [start, end] of check) {
    
  for(let i=start; i<end;i++){
    wallList[i] = true
  }
}

console.log(wallList.filter((val) => val === false).length - 1)
