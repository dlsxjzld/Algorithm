const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const n = Number(input[0])

const arr = input.slice(1).map(Number)
let cnt = 1
let rule = arr[arr.length-1]

for(let i=arr.length-2;i>-1;i--){
    if(arr[i] > rule){
        rule = arr[i]
        cnt++
    }
}

console.log(cnt)