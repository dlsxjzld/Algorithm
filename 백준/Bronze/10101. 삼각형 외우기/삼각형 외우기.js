const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [a, b, c] = input.map(Number)


const result = a+b+c
if(result !== 180){
    console.log("Error")
}else{
    if( a===60 && b===60 && c=== 60){
        console.log("Equilateral")
        return
    }
    if((a==b && b!==c) || (a !==b && b==c) || (a ==c && b!==c)){
        console.log("Isosceles")
    }else{
        console.log("Scalene")
    }
}