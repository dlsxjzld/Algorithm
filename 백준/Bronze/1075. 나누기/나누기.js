const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

  const n = input[0]
  const f = Number(input[1])

  let start = n.split('')
  let end = n.split('')
  start[start.length-1] = '0'
  start[start.length-2] = '0'
  start = Number(start.join(''))
  end[end.length-1] = '9'
  end[end.length-2] = '9'
  end = Number(end.join(''))

  let answer = ''
  while(true){
    if(start % f === 0){
      answer = start.toString().slice(start.toString().length-2)
      break
    }
    start +=1
  }
  console.log(answer)