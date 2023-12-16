const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// 16:18

// 순열과 조합
// 순서는 상관 없다고 했으므로 조합 문제

const romaObject = { I: 1, V: 5, X: 10, L: 50 };

const n = Number(input[0]);

const roma = Object.keys(romaObject);
const createdNum = [];
const answer = new Set();

for (let idx = 0; idx < 4; idx++) {
  canMakeNum([roma[idx]], createdNum, idx);
}

function canMakeNum(array, createdNum, start) {
  if (array.length === n) {
    createdNum.push([...array]);
    return;
  }
  for (let idx = start; idx < 4; idx++) {
    array.push(roma[idx]);
    canMakeNum(array, createdNum, idx);
    array.pop();
  }
}

createdNum.forEach((array) => {
  let tmp = 0;
  array.forEach((val) => {
    tmp += romaObject[val];
  });
  answer.add(tmp);
});

console.log(answer.size);
