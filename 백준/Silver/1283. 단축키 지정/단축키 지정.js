const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])

const lines = input.slice(1).map((line) => line.split(" "))

const shortCut = {}

const answer = []

for (let wordList of lines) {
  let tmp = []
  let flag = false
  for (let word of wordList) {
    const firstChar = word[0].toLowerCase()
    if (shortCut[firstChar] === undefined && !flag) {
      shortCut[firstChar] = true
      flag = true
      tmp.push("[" + word[0] + "]" + word.slice(1))
      
    } else {
      
      tmp.push(word)
      
    }
  }
  
  if (!tmp.join(" ").includes("[")) {
    tmp = []
    let flag = false
    for (let word of wordList) {
      if (!flag) {
        for (let char of word) {
          if (shortCut[char.toLowerCase()] === undefined) {
            shortCut[char.toLowerCase()] = true

            tmp.push(word.replace(char, "[" + char + "]"))
            flag = true
            break
          }
        }
        if(!flag){
            tmp.push(word)
        }
      } else {
        tmp.push(word)
      }
    }
  }
  
   if (tmp.length === 0) {
     answer.push(wordList.join(' '))
   }else{
       
    answer.push(tmp.join(" "))
   }
}

console.log(answer.join("\n"))
