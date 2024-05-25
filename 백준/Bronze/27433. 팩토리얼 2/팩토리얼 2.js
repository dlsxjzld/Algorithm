const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const fa = (num)=>{
    if(num ==0) return 1
    return num * fa(num-1)
}

console.log(fa(Number(input[0])))