function solution(s) {
    let answer = []
    const splitedSet = s.replace('{{','').replace('}}','').split('},{').map(val=>val.split(','))
    const checkCnt = {}
    for(const set of splitedSet){
        for(const num of set){
            if(!checkCnt[num]){
                checkCnt[num] = 1
            }else{
                checkCnt[num] +=1
            }
            
        }
    }
    answer = Object.entries(checkCnt).sort((a,b)=>b[1]-a[1]).flatMap(([key,value])=>Number(key))



    return answer;
}