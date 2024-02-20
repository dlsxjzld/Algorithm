const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

  let x = input[0].split('').map(Number)
  let cnt =0
  let answer = 'NO'

  while(x.length>1){
    const sumOfX = x.reduce((prev,cur)=>prev+cur,0)
    cnt +=1
      x = sumOfX.toString().split('').map(Number)
    
  }
  if(Number(x) % 3 === 0){

    console.log(cnt)
    console.log('YES')
  }else{
    console.log(cnt)
    console.log('NO')

  }
  