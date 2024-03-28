const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


  const n = Number(input[0])
  const words = input.slice(1)

  let answer = 0

  for(let i=0; i<n;i++){
    const word = words[i].split('')
    const stack = []

    while(word.length>0){
      const letter = word.pop()
      if(stack.length && stack[stack.length-1] === letter){
        stack.pop()
      }else{
        stack.push(letter)
      }
    }

    if(!stack.length){
      answer +=1
    }

  }
  console.log(answer)