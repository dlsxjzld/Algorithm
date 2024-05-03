const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


const T = Number(input[0])

for (let tc = 1; tc < T + 1; tc++) {
  const word = input[tc].split("")
  let index = []
  for (let i = word.length - 1; i >= 1; i--) {
    if (word[i - 1] < word[i]) {
      index.push(i - 1)
      break
    }
  }
  for (let i = word.length - 1; i > index[0]; i--) {
    if (word[i] > word[index[0]]) {
      index.push(i)
      break
    }
  }

  const newWord = [...word]
  let tmp = newWord[index[0]]
  newWord[index[0]]  = word[index[1]]
  newWord[index[1]] = tmp
  
  if(index.length >1){
    const result = (newWord.slice(0,index[0]+1).concat(newWord.slice(index[0]+1).sort())).join('')
    console.log(result)
  }else{
    console.log(word.join(''))
  }
}


