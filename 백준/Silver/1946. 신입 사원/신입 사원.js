const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

//  다른 모든 지원자와 비교했을 때 서류심사 성적과 면접시험 성적 중 적어도 하나가 다른 지원자보다 떨어지지 않는 자

// 모두 떨어지면 안 뽑음

const T = Number(input[0]);
let index = 1;
const answer = []
for (let tc = 0; tc < T; tc += 1) {
  const N = Number(input[index++]);
  const applicants = input.slice(index, index + N).map((row) => row.split(' ').map(Number));
  index += N;

  applicants.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  
  let cnt = 0
  let left = 0
  

  for(let right =1;right<N;right+=1){
    if(applicants[left][1] < applicants[right][1]){
      cnt+=1
    }else{
      left = right
    }
  }

  answer.push(N-cnt)
}


console.log(answer.join('\n'))