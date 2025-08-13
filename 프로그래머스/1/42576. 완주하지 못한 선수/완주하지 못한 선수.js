function solution(participant, completion) {
    var answer = '';
    const participantMap = new Map()
    for(let par of participant){
        const cur = participantMap.get(par) ?? 0
        
        participantMap.set(par,cur+1)
    }
    
    for(let com of completion){
        if(participantMap.get(com) > 0){
            participantMap.set(com,participantMap.get(com)-1)
        }
    }
    answer = Array.from(participantMap).filter(([name,count])=>count !== 0).map(([name])=>name)[0]

    return answer;
}