let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');

const s = input[0].trim().split("")
const p = input[1].split("")

function makeFailure(p){
    const failure = new Array(p.length).fill(0); //주어진 패턴 내에서 지금까지 부분 문자열 중에서 접두사이면서 동시에 접미사인 최대 길이.
    let patternIdx = 0; //현재 확인 중인 부분 문자열 길이.
    // 패턴p는 1에서 시작해서 한칸 앞 실패 배열
    for (let i=1; i<p.length; i++){
        while(patternIdx > 0 && p[i] != p[patternIdx]){
            //이전에 일치했던 부분 문자열 길이 찾기. 접두사=접미사니까 이미 아는 부분 건너 뛰기.
            patternIdx = failure[patternIdx - 1 ] //일치하지 않으면 이전에 일치했던 부분 문자열의 길이로 돌아감.
        }
        if( p[i] === p[patternIdx]){
            // 길이 증가 +1
            failure[i] = ++patternIdx;
        }
    }

    return failure;
}

function sol(s,p){
    let i = 0;
    let j = 0;
    const failure = makeFailure(p);
    //두 포인터 증가
    while(i<=s.length){
        if(s[i] === p[j]){
            j++;
            i++
            if(j === p.length){
                //비교 완
                return 1
            }
        }else{ //안맞으면 일단 오리진만 옮기기
            if(j === 0){
                i++
            }else{
                j = failure[j-1]
            }

        }
    }
    return 0; //안맞음
}

console.log(sol(s,p))