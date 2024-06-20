const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const convert = (num)=>{
    
    if(num%3 === 0 && num%5===0){
        return 'FizzBuzz'
    }else if(num%3 ===0 && num%5 !==0){
        return 'Fizz'
    }else if(num%3 !==0 && num%5 ===0){
        return 'Buzz'
    }else{
        return num.toString()
    }
}
for(let i=0;i<3;i++){
    if(Number.isInteger(+input[i])){
        console.log(convert(Number(input[i])+3-i))
        break
    }
}