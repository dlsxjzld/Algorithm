const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let [a, b, c] = input[0].split(' ').map(Number).sort((a,b)=>a-b);
if(a+b>c){
    console.log(a+b+c)
}else{
    console.log(2*(a+b)-1)
}