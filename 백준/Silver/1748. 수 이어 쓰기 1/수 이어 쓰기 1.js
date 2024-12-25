const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let N = Number(input[0])
let count = 0

while(N>0){

    const obs = N.toString().length - 1 // 10 의 n제곱
    
    const rest = N-(10**obs)+1
    if(N <10){
        count += N
    }else{
        count += (rest) * (obs+1)
    }
    N = 10**(obs) -1
    
}
console.log(count)