const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 조합 문제

const T = Number(input[0])


const checkMBTI = (x, y) => {
  let dist = 0
  for (let i = 0; i < 4; i++) {
    if (x[i] !== y[i]) {
      dist += 1
    }
  }
  return dist
}

const select = (x,y,z) =>{
  let temp = 0
  temp += checkMBTI(x,y)
  temp += checkMBTI(x,z)
  temp += checkMBTI(y,z)
  return temp
}

for (let i = 1; i < T + 1; i++) {
  let answer = Number.MAX_SAFE_INTEGER
  const n = Number(input[i * 2 - 1])
  const MBTI_LIST = input[i * 2].split(" ")
  if(n >= 33){
    console.log(0)
    continue
  }
  for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
      for(let k=j+1;k<n;k++){
        answer = Math.min(answer , select(MBTI_LIST[i],MBTI_LIST[j],MBTI_LIST[k]))
      }
    }
  }
  console.log(answer)
}


