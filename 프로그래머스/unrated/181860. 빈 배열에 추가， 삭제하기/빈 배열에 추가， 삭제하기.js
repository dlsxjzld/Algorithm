function solution(arr, flag) {
    var answer = [];
    flag.forEach((v,i)=>{
        if (v){
            let cnt = arr[i]*2
            answer = answer.concat(new Array(cnt).fill(arr[i]))
        }else{
            let cnt = arr[i]
            while (cnt>0){
                answer.pop()
                cnt -= 1
            }
        }
    })
    return answer;
}