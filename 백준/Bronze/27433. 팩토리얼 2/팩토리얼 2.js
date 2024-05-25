const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const fa = (num)=>{
    if(num ==0) return 1
    return num * fa(num-1)
}
if(Number(input[0]) === 0){
    console.log(1)
    return
}
let i=Number(input[0])
let ssum = 1
while(i>=1){
    ssum *= i--
}
console.log(ssum)