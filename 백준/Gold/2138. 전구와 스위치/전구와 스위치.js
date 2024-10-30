const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


  const n = Number(input[0])
  const current = input[1].split('').map(Number)
  const copyCurrent = [...current]
  const target = input[2].split('').map(Number)
  
  // 000 
  // 001 // 가장 왼쪽 누르기
  // 100 // 가장 오른쪽 누르기
  // 010 // 가운데 누르기
  // 110 // 가장 왼쪽 누르기
  // 011 // 가장 오른쪽 누르기
  // 111, 000 // 가운데 누르기

  //// 가운데 누르기
  // 0010
  // 1110 -> 0010
  // 0001 0111

let answer = 0
let temp = []
for(let i=1;i<n;i++){

  if(current[i-1] != target[i-1]){


    answer +=1
    for(let j=i-1;j<=i+1;j++){
      if(j>=0 && j<n){

        current[j] = 1-current[j]
      }
    }
  }

}

for(let i=0;i<n;i++){
  if(current[i] != target[i]){
    answer = -1
    break
  }
}

let pushAnswer = 1
// 0 누름
for(let i=0;i<=1;i++){
  if(i>=0&&i<n){
    copyCurrent[i] = 1-copyCurrent[i]
  }
}

for(let i=1;i<n;i++){
  if(copyCurrent[i-1] != target[i-1]){
    pushAnswer +=1
    for(let j=i-1;j<=i+1;j++){
      if(j>=0 && j<n){
        copyCurrent[j] = 1-copyCurrent[j]
      }
    }
  }
}


for(let i=0;i<n;i++){
  if(copyCurrent[i] != target[i]){
    pushAnswer = -1
    break
  }
}

if(answer === -1 && pushAnswer === -1){
  console.log(-1)
}else{
  if(answer == -1){
    console.log(pushAnswer)
  }else if( pushAnswer == -1){
    console.log(answer)
  }else{
    console.log(Math.min(answer,pushAnswer))
  }
}