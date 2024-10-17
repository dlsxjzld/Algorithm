const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

/**
 *
 * 문자열의 뒤에 A를 추가한다.
 * 문자열을 뒤집고 뒤에 B를 추가한다.
 */

const S = input[0].split("")
const T = input[1].split("")


while(T.length !== S.length){

  if(T.at(-1) == 'A'){
    T.pop()
  }
  else if(T.at(-1) == 'B'){
    T.pop()
    T.reverse()
  }
}
console.log(Number(T.join('') == S.join('')))