function getTimes(diffs,times,level,limit){
    let time = times[0]
    
    for(let idx=1;idx<times.length;idx+=1){
        let wrongCount = diffs[idx]-level <= 0 ? 0 :  diffs[idx]-level
        const time_cur = times[idx]
        const time_prev = times[idx-1]
        time += (time_cur+time_prev)*wrongCount + time_cur
        if(time > limit){
            return limit+1
        }
    }
    return time
}
function solution(diffs, times, limit) {
    var answer = 0;
    // let level = 1
    
    let start = 1
    let end = 100_000
    let mid = Math.floor((start+end)/2)
    
    while(start<=end){
        // times 순회하면서 totalTime 구하기
        mid = Math.floor((start+end)/2)
        const totalTime = getTimes(diffs,times,mid,limit)

        if(totalTime > limit) {
            start = mid+1
        }else{ // totalTime <= limit
            answer = mid
            end = mid-1
        }
    }
    

    return answer;
}