function solution(targets) {
    var answer = 1;

    targets.sort((a,b)=>a[0]-b[0] )
    let [s,e] = [-1,100_000_001]
    for(let [t_s,t_e] of targets){
        if(s<=t_s && e>=t_e){
            s = t_s
            e = t_e
        }else if(t_s <e && e<t_e){
            s = t_s
            e = e
        }else{
            s = t_s
            e = t_e
            answer +=1
        }
    }
    return answer;
}