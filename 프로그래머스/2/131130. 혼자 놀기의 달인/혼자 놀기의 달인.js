function solution(cards) {
    var answer = 0;
    const visited = Array.from({length:cards.length},()=>false)
    const groupList = []
    for(let i=0;i<cards.length;i++){
        const group = []
        if(!visited[i]){
            visited[i] = true
            group.push(i)
            let currCard = i
            while(true){
                const nextCard = cards[currCard]-1
                if(visited[nextCard]) break
                visited[nextCard] = true
                group.push(nextCard)
                currCard = nextCard
            }

            groupList.push(group.length)
        }
    }
    if(groupList.length === 1){
        answer = 0
    }else{
        groupList.sort((a,b)=>a-b)
        answer = groupList.at(-1) * groupList.at(-2)
    }
    
    return answer;
}