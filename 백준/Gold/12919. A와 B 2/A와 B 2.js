const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const S = input[0].split("")
const T = input[1].split("")

// 맨뒤가 A이고
//  맨 앞이 A
//  -> pop
//  맨 앞이 B
//  -> 뒤집고 pop
//  -> pop

// 맨뒤가 B이고
//  맨 앞이 B
//  -> 뒤집고 pop
const solution = (T, S) => {
  const answer = []
  const getT = (T, S) => {

    if (T.length > S.length) {
      if (T.at(-1) == "B") {
        if (T[0] == "B") {
          const tmpT = [...T]
          tmpT.reverse()
          getT(tmpT.slice(0, -1), S)
        }
      } else {
        if (T[0] == "A") {
          getT(T.slice(0, -1), S)
        } else {
          const tmpT = [...T]

          getT(tmpT.slice(0, -1), S)
          tmpT.reverse()
          getT(tmpT.slice(0, -1), S)
        }
      }
    }else{
        answer.push(T.join("") == S.join(""))
    }
  }
  getT(T, S)
  return answer.some((val) => val === true)
}

console.log(Number(solution(T, S)))
