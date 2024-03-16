const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

  const n = Number(input[0])
  const m = Number(input[1])
  const str = input[2]

  let answer = 0
  let start = 0
  let cnt = 0

  while(start <= m-2){
    const slicedIOI = str.slice(start,start+3)
    if(slicedIOI === 'IOI'){
      start+=2
      cnt +=1
      if(cnt ===n){
        answer +=1
        cnt -=1
      }
    }else{
      cnt = 0
      start+=1
    }
  }
  console.log(answer)