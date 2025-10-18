function solution(progresses, speeds) {
    var answer = [];
    const days = progresses.map((progress,index)=>{
        const rest = 100-progress
        return Math.ceil(rest / speeds[index])
    })

    while(days.length>0){
        const day = days.shift()
        let cnt = 1
        
        while(days.length>0){
            const r = days[0]
            if(r>day){
                break
            }else{
                days.shift()
                cnt+=1
            }
        }
        
        answer.push(cnt)
    }
    return answer;
}