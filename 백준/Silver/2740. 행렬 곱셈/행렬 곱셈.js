const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' ').map(x=>+x)); 


const A=[]; //첫번째 행렬
const B=[];  // 두번째 행렬
const C =[]; // 계산하기 좋게 두번째 행렬을 바꿔서 만들 행렬

//첫번째 행렬 정리
const [N,M] = input.shift();  
for(let i = 0; i<N; i++){
  A.push(input.shift());
}

//두번째 행렬 정리
const [K,L] = input.shift();
for(let i = 0; i<K; i++){
  B.push(input.shift());
}

//두번째 행렬 수정
 while(B[0].length>0){
   const temp = [];
   for(let i = 0; i<K;i++){
    temp.push(B[i].shift())
   }
   C.push(temp)
 }

 // 행렬의 곱셈
 const answer = [];
 for(let i = 0; i<N; i++){
  answer.push([])
   const X = A[i];
   for(let j = 0; j<L; j++){
     let sum = 0;
    const Y = C[j]
     for(let k = 0; k<K; k++){
      sum+=X[k]*Y[k];
     }
     answer[answer.length-1].push(sum)
   }
 }

 const result = answer.map(v=>v.join(' ')).join('\n')

 console.log(result)
