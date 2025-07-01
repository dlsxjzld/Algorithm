function solution(n, times) {
    var answer = 0;
    
    const audit = (targetTime)=>{
        return times.reduce((prev,cur)=> prev+Math.floor(targetTime/cur),0)
    }
    let start = 1
    let end = 1_000_000_000_000_000_000_000
    
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(audit(mid) >= n){
            end = mid-1
        }else{ // audit(mid) < n
            start = mid+1
        }
    }
    
    answer = end+1
    
    return answer;
}