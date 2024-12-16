const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


  const n = Number(input[0])
  let cnt = 0

  for(let a=1;a<=Math.floor(n/3);a+=1){
    for(let b=a;b<=(n-a)/2;b+=1){
      let c = n-a-b
      if(b>c) {
        break
      }
      if(a+b > c){
        cnt +=1

      }
    }

  }

  console.log(cnt)