const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

function solution(name){
  var answer = 0
  let dist = name.length-1 // 확인할 커서 위치들
  // 1 빼는 이유는 커서가 첫번째 문자에 있기 때문
  
  for(let i=0;i<name.length;i++){
    let currentAlphabet = name.charCodeAt(i)

    answer += Math.min('Z'.charCodeAt(0)+1 - currentAlphabet,currentAlphabet - 65)

    let nextIndex = i+1

    while(nextIndex < name.length && name[nextIndex] === 'A'){
      nextIndex +=1
    }
    
    dist = Math.min(dist, i*2+name.length-nextIndex,i+(name.length-nextIndex)*2)
  }
  answer +=dist
  return answer
}

