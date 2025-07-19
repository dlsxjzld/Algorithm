function solution(N, stages) {
    var answer = [];
    const result = {}
    const sortedStages = stages.sort((a,b)=>a-b)
    
    let totalPlayers = stages.length
    for(let i=1;i<=N+1;i+=1){
        const sIdx = sortedStages.indexOf(i)
        const eIdx = sortedStages.lastIndexOf(i)
        
        let players = -1
        if(sIdx === -1){
            players = 0
        }else {
            players = eIdx - sIdx + 1
        }
        
        if(players !== 0){
            result[i] = players/totalPlayers
            totalPlayers -= players
        }else{
            result[i] = 0
        }
    }
    answer = Object.entries(result).slice(0,N).sort((a,b)=>b[1]-a[1]).map((val)=>Number(val[0]))

    return answer;
}