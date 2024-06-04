const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const s = input[0]
const t = input[1]
let answer = 0

const dfs = (str)=>{
  if(str === s){
    answer = 1
    return
  }
  if(str.length == 0){
    return
  }

  if(str[str.length-1] === 'A'){
    dfs(str.slice(0,str.length-1))
  }
  
  if(str[0] === 'B'){
    const newStr = str
    dfs(newStr.split('').reverse().join('').slice(0,newStr.length-1))
  }

}

dfs(t)

console.log(answer)
