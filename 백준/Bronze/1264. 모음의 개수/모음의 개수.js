const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  
  const moeum = ['a','e','i','o','u','A','E','I','O','U']
  const answer = []
  while(true){
      const sentence = input.shift()
      if(sentence === '#'){
          break
      }
     
      let cnt = 0
      for(let char of sentence){
          if(moeum.includes(char)){
              cnt++
          }
      }
      answer.push(cnt)
  }
  console.log(answer.join('\n'))