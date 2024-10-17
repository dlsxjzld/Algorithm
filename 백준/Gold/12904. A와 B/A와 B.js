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

let isReversed = false;
while (T.length > S.length) {
  let idx = T[isReversed ? 0 : T.length - 1];

  if (isReversed) {
    T.shift();
  } else {
    T.pop();
  }
  if (idx === "B") isReversed = !isReversed;
}

if (isReversed) T.reverse();

console.log(S.join("") === T.join("") ? 1 : 0);