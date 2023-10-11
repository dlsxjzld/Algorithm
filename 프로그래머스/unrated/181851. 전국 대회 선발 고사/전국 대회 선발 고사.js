function solution(rank, attendance) {
    var answer = 0;
    const attend = rank.filter((v,i)=> attendance[i] === true).sort((a,b)=>a-b).slice(0,3)

    const newRank = []

    for (const at of attend){
        for (const [idx,r] of rank.entries()){
            if(at===r){
                newRank.push(idx)
            }
    }
    }
    

    answer = 10000*newRank[0]+100*newRank[1]+newRank[2]

    return answer;
}