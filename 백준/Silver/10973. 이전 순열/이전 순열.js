const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  const N = Number(input[0]);
let numbers = [];
for (let i = 1; i <= N; i++) numbers.push(i); //1~N까지의 수를 numbers에 담기
let next = input[1].split(" ").map((i) => Number(i)); //입력으로 받는 순열을 number화 하여 next 배열에 저장
 
let sortNumbers = [...numbers].sort((a, b) => a - b); //numbers배열 오름차순 정렬
//next배열이 오름차순돼있다면 순열의 가장 처음 조합이므로 -1 출력
if (next.every((num, index) => num === sortNumbers[index])) console.log(-1);
else {
  //배열의 맨 뒤에서부터 내림차순이 깨지는 순간의 index (i) 구하기
  let i = N - 2;
  while (next[i] < next[i + 1]) i--;
 
  //next[i] 뒤의 수 중에서 next[i]보다 작은 수 중에서 가장 큰 값을 가지는 index (j) 구하기
  let j = N - 1;
  while (next[i] < next[j]) j--;
 
  //next[i]와 next[j] swap하기
  [next[i], next[j]] = [next[j], next[i]];
 
  let rest = next.slice(i + 1); //next[i] 뒤의 값들만 가지는 rest 배열 만들기
  rest.sort((a, b) => b - a); //next[i] 뒤의 값들은 내림차순 정렬
  let answer = [...next.slice(0, i + 1), ...rest]; //떼놨던 next[i]까지의 수와 rest합치기
  console.log(answer.join(" "));
}