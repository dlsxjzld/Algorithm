const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

  const [n,m] = input[0].split(' ').map(Number)
  const note = new Set(input.slice(1,1+n))
const answer =[]
  for(let i = 1+n;i<1+n+m;i++){
    const keywords = input[i].split(',')

    for(let key of keywords){
      note.delete(key)
    } 
    answer.push(note.size)
  }
  console.log(answer.join('\n'))